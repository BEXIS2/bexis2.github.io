import { a2 as n } from './index-3e01cf4c.js';
function r(t, { delay: o = 0, duration: e = 400, easing: a = n } = {}) {
	const i = +getComputedStyle(t).opacity;
	return { delay: o, duration: e, easing: a, css: (c) => `opacity: ${c * i}` };
}
export { r as f };
