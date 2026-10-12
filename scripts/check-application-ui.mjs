/** Browser acceptance for the original application recipes, not the private vendor benchmark.
 * Optional dependency: Playwright. See specimens/application-ui/README.md.
 */
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import http from 'node:http';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const capture = process.argv.includes('--capture');
const outIndex = process.argv.indexOf('--out');
const out = outIndex === -1 ? null : process.argv[outIndex + 1];
assert(outIndex === -1 || out, '--out requires a JSON path');
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.png': 'image/png', '.md': 'text/plain' };
const server = http.createServer(async (req, res) => {
  const filename = path.resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://localhost').pathname));
  if (!filename.startsWith(root + path.sep)) { res.writeHead(403); res.end(); return; }
  try { const data = await fs.readFile(filename); res.writeHead(200, { 'Content-Type': types[path.extname(filename)] || 'application/octet-stream' }); res.end(data); }
  catch { res.writeHead(404); res.end('Not found'); }
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const origin = `http://127.0.0.1:${server.address().port}`;
let browser;
try {
  browser = await chromium.launch({ headless: true, ...(process.env.BROWSER_EXECUTABLE ? { executablePath: process.env.BROWSER_EXECUTABLE } : {}) });
  const context = await browser.newContext();
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  page.on('requestfailed', request => errors.push(`${request.url()}: ${request.failure()?.errorText}`));
  page.on('response', response => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`); });
  await context.route('**/*', route => {
    const url = route.request().url();
    if (url.startsWith(origin + '/') || url.startsWith('data:')) return route.continue();
    errors.push(`Unexpected external request: ${url}`);
    return route.abort();
  });
  const result = { checkedAt: new Date().toISOString(), browser: await browser.version(), sourceHashes: {}, cases: [], behavior: [], contrast: [], limits: ['Solo informed visual comparison, not blind preference testing', 'No native or screen-reader session', 'No production backend or persistence', 'Contrast samples cover rendered text and control/focus pairs in these examples only'] };
  for (const name of ['collection.html', 'settings.html', 'detail.html', 'screens.css', 'screens.js']) {
    result.sourceHashes[name] = crypto.createHash('sha256').update(await fs.readFile(path.join(root, 'specimens/application-ui', name))).digest('hex');
  }
  async function load(name, width = 1440, theme = 'light') {
    await page.setViewportSize({ width, height: width < 769 ? 900 : 1000 });
    await page.goto(`${origin}/specimens/application-ui/${name}.html`);
    if (theme === 'dark') await page.locator(width > 768 ? '#desktop-theme' : '#mobile-theme').selectOption('dark');
    await page.waitForFunction(() => document.getAnimations().every(animation => animation.playState === 'finished'));
    assert.equal(await page.locator('h1').count(), 1, `${name}: one page heading`);
  }
  async function geometry() {
    return page.evaluate(() => ({
      width: innerWidth, scrollWidth: document.documentElement.scrollWidth,
      targetToken: getComputedStyle(document.documentElement).getPropertyValue('--ds-focus-target-min').trim(),
      bodySize: getComputedStyle(document.body).fontSize,
      titleSize: getComputedStyle(document.querySelector('h1')).fontSize,
      minControlHeight: Math.min(...[...document.querySelectorAll('button, .button, input:not([type=checkbox]), select, summary, .check')].filter(e => e.getBoundingClientRect().width > 0).map(e => e.getBoundingClientRect().height)),
      minimumTableWidth: [...document.querySelectorAll('.table-wrap')].map(e => ({ width: e.clientWidth, content: e.scrollWidth, name: e.getAttribute('aria-label') })),
    }));
  }
  for (const name of ['collection', 'settings', 'detail']) {
    for (const width of [320, 375, 768, 769, 1024, 1440]) {
      for (const theme of ['light', 'dark']) {
        await load(name, width, theme);
        const metrics = await geometry();
        assert.equal(metrics.targetToken, '2.75rem', 'All token stylesheets loaded');
        assert(metrics.scrollWidth <= width + 1, `${name} ${width} ${theme}: document overflow`);
        assert(metrics.minControlHeight >= 43.9, `${name} ${width} ${theme}: control below kit target`);
        result.cases.push({ name, width, theme, ...metrics });
        if (capture && [375, 1440].includes(width)) {
          await page.screenshot({ path: path.join(root, `specimens/application-ui/screenshots/${name}-${width === 375 ? 'mobile' : 'desktop'}-${theme}.png`), fullPage: true });
        }
      }
    }
    for (const width of [375, 1440]) {
      await load(name, width);
      await page.addStyleTag({ content: 'html { font-size: 200%; }' });
      const metrics = await geometry();
      assert(metrics.scrollWidth <= width + 1, `${name}: 200% text scaling document overflow at ${width}`);
      assert(metrics.bodySize === '28px', `${name}: actual text scaling`);
      result.cases.push({ name, width, theme: 'light', textScale: '200%', ...metrics });
    }
  }
  // Exercise task behavior with native/browser interactions.
  await load('collection', 375);
  await page.getByLabel('Find a visit').fill('Maya');
  await page.waitForFunction(() => document.querySelector('#result-count').textContent === 'Showing 2 of 6 visits');
  await page.getByLabel('Status', { exact: true }).selectOption('Action required');
  assert.equal(await page.locator('[data-record]:visible').count(), 1);
  await page.getByLabel('Find a visit').fill('no matching place');
  assert(await page.locator('#empty').isVisible());
  await page.locator('#reset-empty').click();
  assert.equal(await page.locator('[data-record]:visible').count(), 6);
  assert.equal(await page.locator('#search').evaluate(e => e === document.activeElement), true);
  await page.getByText('Workspace navigation', { exact: true }).click();
  assert(await page.locator('.mobile-shell').getByRole('link', { name: 'Settings', exact: true }).isVisible());
  await page.locator('.mobile-shell').getByRole('link', { name: 'Settings', exact: true }).click();
  assert(page.url().endsWith('/settings.html'));
  result.behavior.push('Collection search/status intersection, empty results/reset/focus, mobile navigation to settings');

  await page.getByLabel('Workspace name', { exact: true }).fill('');
  await page.getByLabel('Report email', { exact: true }).fill('invalid');
  await page.getByRole('button', { name: 'Save changes' }).click();
  assert(await page.locator('#workspace-error').isVisible());
  assert(await page.locator('#email-error').isVisible());
  assert.equal(await page.locator('#workspace-name').evaluate(e => e === document.activeElement), true);
  assert.equal(await page.getByLabel('Report email', { exact: true }).inputValue(), 'invalid');
  await page.getByLabel('Workspace name', { exact: true }).fill('North region research and emergency operations');
  await page.getByLabel('Report email', { exact: true }).fill('ops@example.org');
  await page.getByLabel('Weekly summary').check();
  await page.getByRole('button', { name: 'Save changes' }).click();
  assert.match(await page.locator('#save-message').textContent(), /saved for this demo session/);
  await page.getByRole('button', { name: 'Discard changes' }).click();
  assert.equal(await page.getByLabel('Report email', { exact: true }).inputValue(), 'reports@example.org');
  assert.equal(await page.getByLabel('Weekly summary').isChecked(), false);
  await page.getByRole('link', { name: 'Notifications', exact: true }).click();
  assert.equal(await page.getByRole('link', { name: 'Notifications', exact: true }).getAttribute('aria-current'), 'location');
  result.behavior.push('Settings invalid fields/focus/value retention, checkbox/save announcement, discard restore, section navigation marker');
  if (capture) {
    await page.getByLabel('Report email', { exact: true }).fill('invalid');
    await page.getByRole('button', { name: 'Save changes' }).click();
    await page.screenshot({ path: path.join(root, 'specimens/application-ui/screenshots/settings-mobile-error.png'), fullPage: true });
  }

  await load('detail');
  await page.getByRole('button', { name: 'Mark report reviewed' }).click();
  assert.equal(await page.locator('#report-status').textContent(), 'Reviewed');
  assert.match(await page.locator('#review-message').textContent(), /follow-up tasks remain open/);
  assert(await page.getByRole('button', { name: 'Report reviewed', exact: true }).isDisabled());
  result.behavior.push('Detail review state, visible/live feedback and duplicate-action prevention');

  await load('settings');
  await page.keyboard.press('Tab');
  assert.equal(await page.evaluate(() => document.activeElement.className), 'skip');
  await page.keyboard.press('Enter');
  assert.equal(await page.evaluate(() => document.activeElement.id), 'main');
  await page.getByLabel('Weekly summary').focus();
  await page.keyboard.press('Space');
  assert(await page.getByLabel('Weekly summary').isChecked());
  await page.getByRole('button', { name: 'Save changes' }).focus();
  const focus = await page.getByRole('button', { name: 'Save changes' }).evaluate(e => ({ width: getComputedStyle(e).outlineWidth, style: getComputedStyle(e).outlineStyle }));
  assert.equal(focus.width, '2px'); assert.equal(focus.style, 'solid');
  await page.emulateMedia({ reducedMotion: 'reduce', forcedColors: 'active' });
  assert.equal(await page.locator('html').evaluate(e => getComputedStyle(e).getPropertyValue('--ds-motion-fast').trim()), '0ms');
  assert.equal(await page.getByRole('button', { name: 'Save changes' }).evaluate(e => getComputedStyle(e).transitionDuration), '0s');
  assert.equal(await page.getByRole('button', { name: 'Save changes' }).evaluate(e => getComputedStyle(e).outlineStyle), 'solid');
  result.behavior.push('Keyboard skip link/checkbox/focus ring, forced-colour outline and actual reduced-motion transition');
  await page.emulateMedia({ reducedMotion: 'no-preference', forcedColors: 'none' });

  // Review regression: theme colours commit together while ordinary hover stays interruptible.
  await load('settings');
  const animationSession = await context.newCDPSession(page);
  await animationSession.send('Animation.enable');
  await animationSession.send('Animation.setPlaybackRate', { playbackRate: 0.1 });
  await page.locator('#desktop-theme').selectOption('dark');
  assert.equal(await page.evaluate(() => document.getAnimations().length), 0, 'Theme swap starts no transitions at 10% playback');
  await page.waitForFunction(() => !document.querySelector('[data-theme-transition-reset]'));
  const iconStyle = await page.locator('.sidebar .icon path').first().evaluate(e => ({ stroke: getComputedStyle(e).strokeWidth, vectorEffect: getComputedStyle(e).vectorEffect, textWeight: getComputedStyle(e.closest('a')).fontWeight }));
  assert.equal(iconStyle.stroke, '2px');
  assert.equal(iconStyle.vectorEffect, 'non-scaling-stroke');
  assert.equal(iconStyle.textWeight, '600');
  await page.getByRole('button', { name: 'Discard changes' }).hover();
  await page.waitForFunction(() => document.getAnimations().length > 0);
  const hoverTransition = await page.evaluate(() => document.getAnimations().map(a => ({ property: a.transitionProperty, duration: a.effect.getTiming().duration, easing: a.effect.getTiming().easing })));
  assert(hoverTransition.some(a => a.property === 'background-color' && a.duration === 80 && a.easing === 'cubic-bezier(0.2, 0, 0, 1)'), 'Original hover timing/easing restored');
  await page.evaluate(() => {
    const select = document.querySelector('#desktop-theme');
    for (const value of ['light', 'dark', 'light']) { select.value = value; select.dispatchEvent(new Event('change', { bubbles: true })); }
  });
  assert.equal(await page.evaluate(() => document.getAnimations().length), 0, 'Rapid theme flips also suppress pending transitions');
  await page.waitForFunction(() => !document.querySelector('[data-theme-transition-reset]'));
  assert.equal(await page.locator('html').getAttribute('data-theme'), 'light');
  assert.equal(await page.locator('#mobile-theme').inputValue(), 'light');
  result.polish = { themeSwitchTransitions: 0, playbackRate: 0.1, iconStyle, hoverTransition, rapidFlips: 'No override left behind; selectors match final theme' };
  result.behavior.push('Theme-swap suppression at 10% playback, hover restoration, rapid-flip cleanup and semibold-matched icon strokes');
  await animationSession.send('Animation.setPlaybackRate', { playbackRate: 1 });
  await animationSession.detach();

  // Long-content stress is source-independent of the screen's default fictional strings.
  for (const name of ['collection', 'settings', 'detail']) {
    await load(name, 375);
    await page.locator('h1').evaluate(e => { e.textContent = 'Northwestern regional operations and emergency preparedness review'; });
    if (name === 'collection') await page.locator('.record-name').first().evaluate(e => { e.textContent = 'SITE_' + 'LONGIDENTIFIER'.repeat(7); });
    if (name === 'settings') await page.locator('#email-help').evaluate(e => { e.textContent = 'Completed reports are sent to this shared address. Ensure the entire inspection team can access it, including colleagues who review urgent findings while working away from the main office.'; });
    const metrics = await geometry();
    assert(metrics.scrollWidth <= 376, `${name}: long-content overflow`);
    result.cases.push({ name, width: 375, theme: 'light', content: 'long title/ID/help', ...metrics });
  }

  for (const name of ['collection', 'settings', 'detail']) {
    for (const theme of ['light', 'dark']) {
      await load(name, 1440, theme);
      await page.keyboard.press("Tab");
      await page.locator(".button:visible").first().focus();
      const ringState = await page.locator(".button:visible").first().evaluate(e => ({ width: getComputedStyle(e).outlineWidth, color: getComputedStyle(e).outlineColor, token: getComputedStyle(e).getPropertyValue("--app-ring-width"), font: getComputedStyle(document.documentElement).fontSize, active: document.activeElement === e, visible: e.matches(":focus-visible"), url: location.href }));
      assert(ringState.active && ringState.visible, "Actual visible control has keyboard focus");
      assert.equal(ringState.width, "2px", "Focus ring uses the selected kit width");
      const samples = await page.evaluate(() => {
        function rgb(value) { const nums = value.match(/[\d.]+/g)?.map(Number); return nums?.length >= 3 ? [...nums.slice(0, 3), nums[3] ?? 1] : null; }
        function blend(top, bottom) { const alpha = top[3]; return [0, 1, 2].map(i => top[i] * alpha + bottom[i] * (1 - alpha)).concat(1); }
        function background(el) { const chain = []; for (let e = el; e; e = e.parentElement) chain.unshift(e); return chain.reduce((bg, e) => blend(rgb(getComputedStyle(e).backgroundColor), bg), [255, 255, 255, 1]); }
        function lum(c) { return c.slice(0, 3).map(v => { v /= 255; return v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4; }).reduce((sum, v, i) => sum + v * [.2126, .7152, .0722][i], 0); }
        function ratio(a, b) { const x = lum(a), y = lum(b); return (Math.max(x, y) + .05) / (Math.min(x, y) + .05); }
        const text = [...document.querySelectorAll('h1,h2,h3,p,dt,dd,th,td,strong,.badge,.button,input:not([type=checkbox]),label,select')].filter(e => e.getBoundingClientRect().width > 0 && e.textContent.trim() !== '' || e.matches('input:not([type=checkbox])') && e.getBoundingClientRect().width > 0).map(e => ({ kind: 'text', text: (e.getAttribute('aria-label') || e.value || e.textContent.trim()).slice(0, 65), ratio: ratio(rgb(getComputedStyle(e).color), background(e)) }));
        const boundaries = [...document.querySelectorAll('input:not([type=checkbox]),select,.button')].filter(e => e.getBoundingClientRect().width > 0).map(e => ({ kind: 'control-boundary', text: (e.id || e.textContent).slice(0, 65), ratio: ratio(rgb(getComputedStyle(e).borderTopColor), background(e.parentElement)) }));
        const focusColor = rgb(getComputedStyle(document.activeElement).outlineColor);
        const ring = { kind: 'focus-on-canvas', ratio: ratio(focusColor, background(document.body)) };
        return { text, boundaries, ring };
      });
      for (const sample of samples.text) assert(sample.ratio >= 4.5, `${name} ${theme}: text contrast ${sample.text} ${sample.ratio}`);
      for (const sample of samples.boundaries) assert(sample.ratio >= 3, `${name} ${theme}: control boundary ${sample.text} ${sample.ratio}`);
      assert(samples.ring.ratio >= 3, `${name} ${theme}: focus contrast`);
      await page.locator('.button.primary').first().hover();
      await page.waitForFunction(() => document.getAnimations().every(animation => animation.playState === 'finished'));
      const hoverPrimaryRatio = await page.locator('.button.primary').first().evaluate(e => {
        const colors = [getComputedStyle(e).color, getComputedStyle(e).backgroundColor].map(value => value.match(/[\d.]+/g).slice(0, 3).map(Number));
        const luminance = rgb => rgb.map(v => { v /= 255; return v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4; }).reduce((sum, v, i) => sum + v * [.2126, .7152, .0722][i], 0);
        const values = colors.map(luminance); return (Math.max(...values) + .05) / (Math.min(...values) + .05);
      });
      assert(hoverPrimaryRatio >= 4.5, `${name} ${theme}: primary hover text contrast`);
      result.contrast.push({ name, theme, hoverPrimaryRatio, textSamples: samples.text.length, minTextRatio: Math.min(...samples.text.map(s => s.ratio)), boundarySamples: samples.boundaries.length, minBoundaryRatio: Math.min(...samples.boundaries.map(s => s.ratio)), focusCanvasRatio: samples.ring.ratio });
    }
  }
  await page.goto(`${origin}/specimens/application-ui/index.html`);
  for (const img of await page.locator('img').all()) assert(await img.evaluate(e => e.complete && e.naturalWidth > 0), 'Gallery screenshot loads');
  assert.deepEqual(errors, [], 'No console, runtime, network or external-request errors');
  result.errors = errors;
  if (out) { await fs.mkdir(path.dirname(path.resolve(out)), { recursive: true }); await fs.writeFile(out, JSON.stringify(result, null, 2) + '\n'); }
  console.log(`PASS ${result.cases.length} layout/text/content cases; ${result.behavior.length} behavior groups; ${result.contrast.length} theme contrast groups; no errors.`);
} finally {
  if (browser) await browser.close();
  await new Promise(resolve => server.close(resolve));
}
