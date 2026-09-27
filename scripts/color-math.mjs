// Opaque sRGB only. WCAG 2 relative luminance; reject alpha instead of assuming a backdrop.
export function rgb(hex) {
  if (!/^#[0-9a-f]{6}$/i.test(hex)) throw new Error(`Expected opaque six-digit sRGB: ${hex}`);
  return [1,3,5].map(i => parseInt(hex.slice(i,i+2),16)/255);
}
export function luminance(hex) {
  const c=rgb(hex).map(v=>v<=0.04045?v/12.92:((v+0.055)/1.055)**2.4);
  return c[0]*0.2126+c[1]*0.7152+c[2]*0.0722;
}
export function contrast(a,b) {
  const x=luminance(a),y=luminance(b); return (Math.max(x,y)+0.05)/(Math.min(x,y)+0.05);
}
// CSS Color 4 Oklab -> linear sRGB matrices. Explicit clipping and byte rounding
// make this an sRGB derivative, not a claim of matching wide-gamut browser mapping.
export function oklchToHex(value) {
  const m=/^oklch\(([\d.]+)% ([\d.]+) ([\d.]+|none)\)$/.exec(value);
  if(!m) throw new Error(`Unsupported source color: ${value}`);
  const L=Number(m[1])/100,C=Number(m[2]),h=(m[3]==='none'&&C===0?0:Number(m[3]))*Math.PI/180;
  const a=C*Math.cos(h),b=C*Math.sin(h);
  const l=(L+0.3963377774*a+0.2158037573*b)**3;
  const n=(L-0.1055613458*a-0.0638541728*b)**3;
  const s=(L-0.0894841775*a-1.291485548*b)**3;
  const linear=[4.0767416621*l-3.3077115913*n+0.2309699292*s,-1.2684380046*l+2.6097574011*n-0.3413193965*s,-0.0041960863*l-0.7034186147*n+1.707614701*s];
  return '#'+linear.map(v=>Math.max(0,Math.min(1,v))).map(v=>v<=0.0031308?12.92*v:1.055*v**(1/2.4)-0.055).map(v=>Math.round(v*255).toString(16).padStart(2,'0')).join('');
}
