
const themes = document.querySelectorAll('.theme');
themes.forEach(select => select.addEventListener('change', () => {
 const override = document.createElement('style');
 override.dataset.themeTransitionReset = '';
 override.textContent = '*,*::before,*::after{transition:none !important}';
 document.head.append(override);
 document.documentElement.dataset.theme = select.value;
 themes.forEach(other => { other.value = select.value; });
 // Commit the new colours with transitions suppressed, including pseudo-elements.
 void document.body.offsetHeight;
 requestAnimationFrame(() => requestAnimationFrame(() => override.remove()));
}));
const search = document.querySelector('#search');
if (search) {
 const status = document.querySelector('#status');
 const rows = [...document.querySelectorAll('[data-record]')];
 const table = document.querySelector('.table-wrap');
 function filter() {
  const query = search.value.trim().toLowerCase();
  let count = 0;
  rows.forEach(row => {
   row.hidden = !row.textContent.toLowerCase().includes(query) || (status.value !== 'All statuses' && row.dataset.status !== status.value);
   if (!row.hidden) count++;
  });
  table.hidden = count === 0;
  document.querySelector('#empty').hidden = count !== 0;
  document.querySelector('#result-count').textContent = `Showing ${count} of ${rows.length} visits`;
  document.querySelector('#filter-message').textContent = `${count} visits match your filters.`;
 }
 search.addEventListener('input', filter);
 status.addEventListener('change', filter);
 for (const id of ['clear-filters', 'reset-empty']) document.getElementById(id).addEventListener('click', () => { search.value = ''; status.value = 'All statuses'; filter(); if (id === 'reset-empty') search.focus(); });
}
const form = document.querySelector('#settings-form');
if (form) {
 const checks = [['workspace-name', 'workspace-error'], ['email', 'email-error']];
 function validate() {
  let firstInvalid;
  for (const [id, errorId] of checks) {
   const input = document.getElementById(id);
   const valid = input.checkValidity() && input.value.trim().length > 0;
   input.setAttribute('aria-invalid', String(!valid));
   document.getElementById(errorId).hidden = valid;
   if (!valid && !firstInvalid) firstInvalid = input;
  }
  return firstInvalid;
 }
 form.addEventListener('submit', event => {
  event.preventDefault();
  const invalid = validate();
  const message = document.querySelector('#save-message');
  if (invalid) { message.textContent = 'Changes were not saved. Correct the highlighted field.'; invalid.focus(); }
  else { message.textContent = 'Workspace settings saved for this demo session. No data was sent.'; }
 });
 form.addEventListener('reset', () => {
  checks.forEach(([id, errorId]) => { document.getElementById(id).removeAttribute('aria-invalid'); document.getElementById(errorId).hidden = true; });
  document.querySelector('#save-message').textContent = 'Changes discarded. Original demo settings restored.';
 });
}
const review = document.querySelector('#review-report');
if (review) review.addEventListener('click', () => {
 const badge = document.querySelector('#report-status');
 badge.textContent = 'Reviewed'; badge.className = 'badge success';
 document.querySelector('#review-message').textContent = 'Report marked reviewed for this demo session. The follow-up tasks remain open.';
 document.querySelector('#review-activity').innerHTML = '<h3>Report reviewed</h3><p>The report was reviewed in this demo session. Follow-up tasks remain open.</p>';
 review.textContent = 'Report reviewed'; review.disabled = true;
});

for (const link of document.querySelectorAll(".tabs a")) link.addEventListener("click", () => { document.querySelectorAll(".tabs a").forEach(other => other.removeAttribute("aria-current")); link.setAttribute("aria-current", "location"); });
