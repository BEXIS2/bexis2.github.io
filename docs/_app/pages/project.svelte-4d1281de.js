import {
	S as _,
	i as m,
	s as $,
	e as d,
	t as y,
	c as l,
	a as h,
	h as v,
	d as o,
	b as x,
	f as u,
	g,
	_ as f,
	n as p,
	G as b,
	N as j
} from '../chunks/index-3e01cf4c.js';
import { d as P, b as E } from '../chunks/env-859c48a7.js';
import { f as S } from '../chunks/index-e6222c86.js';
function k(i) {
	let e, r, a, s;
	return {
		c() {
			(e = d('div')), (r = d('h1')), (a = y('Project ...')), this.h();
		},
		l(t) {
			e = l(t, 'DIV', { class: !0, style: !0 });
			var n = h(e);
			r = l(n, 'H1', {});
			var c = h(r);
			(a = v(c, 'Project ...')), c.forEach(o), n.forEach(o), this.h();
		},
		h() {
			x(e, 'class', 'content'), u(e, 'height', '100%'), u(e, 'display', 'flex');
		},
		m(t, n) {
			g(t, e, n), f(e, r), f(r, a);
		},
		p,
		i(t) {
			s ||
				b(() => {
					(s = j(e, S, { delay: 100 })), s.start();
				});
		},
		o: p,
		d(t) {
			t && o(e);
		}
	};
}
function q(i, e, r) {
	return [P, E, !0];
}
class G extends _ {
	constructor(e) {
		super(), m(this, e, q, k, $, { hydrate: 0, router: 1, prerender: 2 });
	}
	get hydrate() {
		return this.$$.ctx[0];
	}
	get router() {
		return this.$$.ctx[1];
	}
	get prerender() {
		return this.$$.ctx[2];
	}
}
export { G as default };
