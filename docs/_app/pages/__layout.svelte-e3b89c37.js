import {
	F as Be,
	S as T,
	i as G,
	s as H,
	G as ke,
	e as I,
	c as B,
	a as y,
	d as g,
	H as D,
	g as C,
	I as z,
	J as re,
	K as O,
	L as F,
	M as P,
	A as Z,
	r as A,
	N as ye,
	p as k,
	O as Se,
	P as De,
	l as te,
	o as ie,
	q as fe,
	Q as N,
	R as Ne,
	w as ve,
	D as Q,
	T as J,
	U as W,
	V as w,
	W as he,
	t as le,
	h as se,
	j as Ee,
	n as Y,
	u as ze,
	x as R,
	y as L,
	z as U,
	C as j,
	B as Ke,
	b as S,
	X as Re,
	k as p,
	m as x,
	Y as Ce,
	f as Le,
	Z as ue,
	_ as K
} from '../chunks/index-3e01cf4c.js';
import { b as ee } from '../chunks/paths-396f020f.js';
const Ue = () => {
		const s = Be('__svelte__');
		return {
			page: { subscribe: s.page.subscribe },
			navigating: { subscribe: s.navigating.subscribe },
			get preloading() {
				return (
					console.error('stores.preloading is deprecated; use stores.navigating instead'),
					{ subscribe: s.navigating.subscribe }
				);
			},
			session: s.session,
			updated: s.updated
		};
	},
	je = {
		subscribe(s) {
			return Ue().page.subscribe(s);
		}
	};
var Oe =
		'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHCAgICAgICAgICD/2wBDAQcHBw0MDRgQEBgaFREVGiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICD/wAARCAAIBLADAREAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAQACB//EABYQAQEBAAAAAAAAAAAAAAAAAAABQf/EABgBAQEBAQEAAAAAAAAAAAAAAAEAAgYI/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhEDEQA/AOuvP7rUkigQCGSkWQQKQCgQqWWWkEAQKWUQyUqQzWgiAgy0EgGgKgK0AQqQyQCAUiGSyCFSBWkEBWgEBWgCBSBSAQKgGgCAQCBSgQqQKQCAQCGaQiBSAUCyCAQKUCEQyQCyClSGaQCEQNIDQRSKZaCKRSpQaSMCaQKRSaQpQIRKaAKTSRCKDSRQhSKDQRSaQKRCKFaSKTQBSKDQRQKRSKFaSIRQjSRAJVaCwpY0gUKUiE0gUoUmogUq0FCgUmgCUQik0gUmgigQik0hSgUkn//Z',
	Fe = '/micoda/_app/assets/LogoIDiv_white-68c77e5d.gif';
function Qe(s) {
	let e = '';
	if (typeof s == 'string' || typeof s == 'number') e += s;
	else if (typeof s == 'object')
		if (Array.isArray(s)) e = s.map(Qe).filter(Boolean).join(' ');
		else for (let t in s) s[t] && (e && (e += ' '), (e += t));
	return e;
}
function $(...s) {
	return s.map(Qe).filter(Boolean).join(' ');
}
function Ie(s) {
	if (!s) return 0;
	let { transitionDuration: e, transitionDelay: t } = window.getComputedStyle(s);
	const l = Number.parseFloat(e),
		n = Number.parseFloat(t);
	return !l && !n
		? 0
		: ((e = e.split(',')[0]),
		  (t = t.split(',')[0]),
		  (Number.parseFloat(e) + Number.parseFloat(t)) * 1e3);
}
function Pe(s, e) {
	const t = e.horizontal ? 'width' : 'height';
	return (
		(s.style[t] = `${s.getBoundingClientRect()[t]}px`),
		s.classList.add('collapsing'),
		s.classList.remove('collapse', 'show'),
		{
			duration: Ie(s),
			tick: (n) => {
				n > 0
					? (s.style[t] = '')
					: n === 0 && (s.classList.remove('collapsing'), s.classList.add('collapse'));
			}
		}
	);
}
function We(s, e) {
	const t = e.horizontal,
		l = t ? 'width' : 'height';
	return (
		s.classList.add('collapsing'),
		s.classList.remove('collapse', 'show'),
		(s.style[l] = 0),
		{
			duration: Ie(s),
			tick: (a) => {
				a < 1
					? t
						? (s.style.width = `${s.scrollWidth}px`)
						: (s.style.height = `${s.scrollHeight}px`)
					: (s.classList.remove('collapsing'),
					  s.classList.add('collapse', 'show'),
					  (s.style[l] = ''));
			}
		}
	);
}
const ge = ['touchstart', 'click'];
var Me = (s, e) => {
	let t;
	if (typeof s == 'string' && typeof window != 'undefined' && document && document.createElement) {
		let l = document.querySelectorAll(s);
		if ((l.length || (l = document.querySelectorAll(`#${s}`)), !l.length))
			throw new Error(`The target '${s}' could not be identified in the dom, tip: check spelling`);
		ge.forEach((n) => {
			l.forEach((a) => {
				a.addEventListener(n, e);
			});
		}),
			(t = () => {
				ge.forEach((n) => {
					l.forEach((a) => {
						a.removeEventListener(n, e);
					});
				});
			});
	}
	return () => {
		typeof t == 'function' && (t(), (t = void 0));
	};
};
function _e(s) {
	let e, t, l, n, a, r, u;
	const f = s[16].default,
		i = W(f, s, s[15], null);
	let o = [{ style: (t = s[2] ? void 0 : 'overflow: hidden;') }, s[9], { class: s[8] }],
		c = {};
	for (let d = 0; d < o.length; d += 1) c = Q(c, o[d]);
	return {
		c() {
			(e = I('div')), i && i.c(), this.h();
		},
		l(d) {
			e = B(d, 'DIV', { style: !0, class: !0 });
			var h = y(e);
			i && i.l(h), h.forEach(g), this.h();
		},
		h() {
			D(e, c);
		},
		m(d, h) {
			C(d, e, h),
				i && i.m(e, null),
				(a = !0),
				r ||
					((u = [
						z(e, 'introstart', s[17]),
						z(e, 'introend', s[18]),
						z(e, 'outrostart', s[19]),
						z(e, 'outroend', s[20]),
						z(e, 'introstart', function () {
							re(s[3]) && s[3].apply(this, arguments);
						}),
						z(e, 'introend', function () {
							re(s[4]) && s[4].apply(this, arguments);
						}),
						z(e, 'outrostart', function () {
							re(s[5]) && s[5].apply(this, arguments);
						}),
						z(e, 'outroend', function () {
							re(s[6]) && s[6].apply(this, arguments);
						})
					]),
					(r = !0));
		},
		p(d, h) {
			(s = d),
				i &&
					i.p &&
					(!a || h & 32768) &&
					O(i, f, s, s[15], a ? P(f, s[15], h, null) : F(s[15]), null),
				D(
					e,
					(c = Z(o, [
						(!a || (h & 4 && t !== (t = s[2] ? void 0 : 'overflow: hidden;'))) && { style: t },
						h & 512 && s[9],
						(!a || h & 256) && { class: s[8] }
					]))
				);
		},
		i(d) {
			a ||
				(A(i, d),
				ke(() => {
					n && n.end(1), (l = ye(e, We, { horizontal: s[1] })), l.start();
				}),
				(a = !0));
		},
		o(d) {
			k(i, d), l && l.invalidate(), d && (n = Se(e, Pe, { horizontal: s[1] })), (a = !1);
		},
		d(d) {
			d && g(e), i && i.d(d), d && n && n.end(), (r = !1), De(u);
		}
	};
}
function Te(s) {
	let e, t, l, n;
	ke(s[21]);
	let a = s[0] && _e(s);
	return {
		c() {
			a && a.c(), (e = te());
		},
		l(r) {
			a && a.l(r), (e = te());
		},
		m(r, u) {
			a && a.m(r, u), C(r, e, u), (t = !0), l || ((n = z(window, 'resize', s[21])), (l = !0));
		},
		p(r, [u]) {
			r[0]
				? a
					? (a.p(r, u), u & 1 && A(a, 1))
					: ((a = _e(r)), a.c(), A(a, 1), a.m(e.parentNode, e))
				: a &&
				  (ie(),
				  k(a, 1, 1, () => {
						a = null;
				  }),
				  fe());
		},
		i(r) {
			t || (A(a), (t = !0));
		},
		o(r) {
			k(a), (t = !1);
		},
		d(r) {
			a && a.d(r), r && g(e), (l = !1), n();
		}
	};
}
function Ge(s, e, t) {
	let l;
	const n = [
		'isOpen',
		'class',
		'horizontal',
		'navbar',
		'onEntering',
		'onEntered',
		'onExiting',
		'onExited',
		'expand',
		'toggler'
	];
	let a = N(e, n),
		{ $$slots: r = {}, $$scope: u } = e;
	const f = Ne();
	let { isOpen: i = !1 } = e,
		{ class: o = '' } = e,
		{ horizontal: c = !1 } = e,
		{ navbar: d = !1 } = e,
		{ onEntering: h = () => f('opening') } = e,
		{ onEntered: _ = () => f('open') } = e,
		{ onExiting: b = () => f('closing') } = e,
		{ onExited: v = () => f('close') } = e,
		{ expand: E = !1 } = e,
		{ toggler: q = null } = e;
	ve(() =>
		Me(q, (m) => {
			t(0, (i = !i)), m.preventDefault();
		})
	);
	let X = 0,
		V = !1;
	const M = {};
	(M.xs = 0), (M.sm = 576), (M.md = 768), (M.lg = 992), (M.xl = 1200);
	function ne() {
		f('update', i);
	}
	function ae(m) {
		w.call(this, s, m);
	}
	function oe(m) {
		w.call(this, s, m);
	}
	function ce(m) {
		w.call(this, s, m);
	}
	function de(m) {
		w.call(this, s, m);
	}
	function me() {
		t(7, (X = window.innerWidth));
	}
	return (
		(s.$$set = (m) => {
			(e = Q(Q({}, e), J(m))),
				t(9, (a = N(e, n))),
				'isOpen' in m && t(0, (i = m.isOpen)),
				'class' in m && t(10, (o = m.class)),
				'horizontal' in m && t(1, (c = m.horizontal)),
				'navbar' in m && t(2, (d = m.navbar)),
				'onEntering' in m && t(3, (h = m.onEntering)),
				'onEntered' in m && t(4, (_ = m.onEntered)),
				'onExiting' in m && t(5, (b = m.onExiting)),
				'onExited' in m && t(6, (v = m.onExited)),
				'expand' in m && t(11, (E = m.expand)),
				'toggler' in m && t(12, (q = m.toggler)),
				'$$scope' in m && t(15, (u = m.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 1030 && t(8, (l = $(o, { 'collapse-horizontal': c, 'navbar-collapse': d }))),
				s.$$.dirty & 26757 &&
					d &&
					E &&
					(X >= M[E] && !i
						? (t(0, (i = !0)), t(13, (V = !0)), ne())
						: X < M[E] && V && (t(0, (i = !1)), t(13, (V = !1)), ne()));
		}),
		[i, c, d, h, _, b, v, X, l, a, o, E, q, V, M, u, r, ae, oe, ce, de, me]
	);
}
class He extends T {
	constructor(e) {
		super(),
			G(this, e, Ge, Te, H, {
				isOpen: 0,
				class: 10,
				horizontal: 1,
				navbar: 2,
				onEntering: 3,
				onEntered: 4,
				onExiting: 5,
				onExited: 6,
				expand: 11,
				toggler: 12
			});
	}
}
function qe(s) {
	let e, t, l, n, a;
	const r = s[19].default,
		u = W(r, s, s[18], null),
		f = u || Ze(s);
	let i = [
			s[9],
			{ class: s[7] },
			{ disabled: s[2] },
			{ value: s[5] },
			{ 'aria-label': (t = s[8] || s[6]) },
			{ style: s[4] }
		],
		o = {};
	for (let c = 0; c < i.length; c += 1) o = Q(o, i[c]);
	return {
		c() {
			(e = I('button')), f && f.c(), this.h();
		},
		l(c) {
			e = B(c, 'BUTTON', { class: !0, 'aria-label': !0, style: !0 });
			var d = y(e);
			f && f.l(d), d.forEach(g), this.h();
		},
		h() {
			D(e, o);
		},
		m(c, d) {
			C(c, e, d),
				f && f.m(e, null),
				e.autofocus && e.focus(),
				s[23](e),
				(l = !0),
				n || ((a = z(e, 'click', s[21])), (n = !0));
		},
		p(c, d) {
			u
				? u.p && (!l || d & 262144) && O(u, r, c, c[18], l ? P(r, c[18], d, null) : F(c[18]), null)
				: f && f.p && (!l || d & 262146) && f.p(c, l ? d : -1),
				D(
					e,
					(o = Z(i, [
						d & 512 && c[9],
						(!l || d & 128) && { class: c[7] },
						(!l || d & 4) && { disabled: c[2] },
						(!l || d & 32) && { value: c[5] },
						(!l || (d & 320 && t !== (t = c[8] || c[6]))) && { 'aria-label': t },
						(!l || d & 16) && { style: c[4] }
					]))
				);
		},
		i(c) {
			l || (A(f, c), (l = !0));
		},
		o(c) {
			k(f, c), (l = !1);
		},
		d(c) {
			c && g(e), f && f.d(c), s[23](null), (n = !1), a();
		}
	};
}
function Ve(s) {
	let e, t, l, n, a, r, u;
	const f = [we, Xe],
		i = [];
	function o(h, _) {
		return h[1] ? 0 : 1;
	}
	(t = o(s)), (l = i[t] = f[t](s));
	let c = [
			s[9],
			{ class: s[7] },
			{ disabled: s[2] },
			{ href: s[3] },
			{ 'aria-label': (n = s[8] || s[6]) },
			{ style: s[4] }
		],
		d = {};
	for (let h = 0; h < c.length; h += 1) d = Q(d, c[h]);
	return {
		c() {
			(e = I('a')), l.c(), this.h();
		},
		l(h) {
			e = B(h, 'A', { class: !0, disabled: !0, href: !0, 'aria-label': !0, style: !0 });
			var _ = y(e);
			l.l(_), _.forEach(g), this.h();
		},
		h() {
			D(e, d);
		},
		m(h, _) {
			C(h, e, _), i[t].m(e, null), s[22](e), (a = !0), r || ((u = z(e, 'click', s[20])), (r = !0));
		},
		p(h, _) {
			let b = t;
			(t = o(h)),
				t === b
					? i[t].p(h, _)
					: (ie(),
					  k(i[b], 1, 1, () => {
							i[b] = null;
					  }),
					  fe(),
					  (l = i[t]),
					  l ? l.p(h, _) : ((l = i[t] = f[t](h)), l.c()),
					  A(l, 1),
					  l.m(e, null)),
				D(
					e,
					(d = Z(c, [
						_ & 512 && h[9],
						(!a || _ & 128) && { class: h[7] },
						(!a || _ & 4) && { disabled: h[2] },
						(!a || _ & 8) && { href: h[3] },
						(!a || (_ & 320 && n !== (n = h[8] || h[6]))) && { 'aria-label': n },
						(!a || _ & 16) && { style: h[4] }
					]))
				);
		},
		i(h) {
			a || (A(l), (a = !0));
		},
		o(h) {
			k(l), (a = !1);
		},
		d(h) {
			h && g(e), i[t].d(), s[22](null), (r = !1), u();
		}
	};
}
function Ye(s) {
	let e;
	const t = s[19].default,
		l = W(t, s, s[18], null);
	return {
		c() {
			l && l.c();
		},
		l(n) {
			l && l.l(n);
		},
		m(n, a) {
			l && l.m(n, a), (e = !0);
		},
		p(n, a) {
			l &&
				l.p &&
				(!e || a & 262144) &&
				O(l, t, n, n[18], e ? P(t, n[18], a, null) : F(n[18]), null);
		},
		i(n) {
			e || (A(l, n), (e = !0));
		},
		o(n) {
			k(l, n), (e = !1);
		},
		d(n) {
			l && l.d(n);
		}
	};
}
function Je(s) {
	let e;
	return {
		c() {
			e = le(s[1]);
		},
		l(t) {
			e = se(t, s[1]);
		},
		m(t, l) {
			C(t, e, l);
		},
		p(t, l) {
			l & 2 && Ee(e, t[1]);
		},
		i: Y,
		o: Y,
		d(t) {
			t && g(e);
		}
	};
}
function Ze(s) {
	let e, t, l, n;
	const a = [Je, Ye],
		r = [];
	function u(f, i) {
		return f[1] ? 0 : 1;
	}
	return (
		(e = u(s)),
		(t = r[e] = a[e](s)),
		{
			c() {
				t.c(), (l = te());
			},
			l(f) {
				t.l(f), (l = te());
			},
			m(f, i) {
				r[e].m(f, i), C(f, l, i), (n = !0);
			},
			p(f, i) {
				let o = e;
				(e = u(f)),
					e === o
						? r[e].p(f, i)
						: (ie(),
						  k(r[o], 1, 1, () => {
								r[o] = null;
						  }),
						  fe(),
						  (t = r[e]),
						  t ? t.p(f, i) : ((t = r[e] = a[e](f)), t.c()),
						  A(t, 1),
						  t.m(l.parentNode, l));
			},
			i(f) {
				n || (A(t), (n = !0));
			},
			o(f) {
				k(t), (n = !1);
			},
			d(f) {
				r[e].d(f), f && g(l);
			}
		}
	);
}
function Xe(s) {
	let e;
	const t = s[19].default,
		l = W(t, s, s[18], null);
	return {
		c() {
			l && l.c();
		},
		l(n) {
			l && l.l(n);
		},
		m(n, a) {
			l && l.m(n, a), (e = !0);
		},
		p(n, a) {
			l &&
				l.p &&
				(!e || a & 262144) &&
				O(l, t, n, n[18], e ? P(t, n[18], a, null) : F(n[18]), null);
		},
		i(n) {
			e || (A(l, n), (e = !0));
		},
		o(n) {
			k(l, n), (e = !1);
		},
		d(n) {
			l && l.d(n);
		}
	};
}
function we(s) {
	let e;
	return {
		c() {
			e = le(s[1]);
		},
		l(t) {
			e = se(t, s[1]);
		},
		m(t, l) {
			C(t, e, l);
		},
		p(t, l) {
			l & 2 && Ee(e, t[1]);
		},
		i: Y,
		o: Y,
		d(t) {
			t && g(e);
		}
	};
}
function pe(s) {
	let e, t, l, n;
	const a = [Ve, qe],
		r = [];
	function u(f, i) {
		return f[3] ? 0 : 1;
	}
	return (
		(e = u(s)),
		(t = r[e] = a[e](s)),
		{
			c() {
				t.c(), (l = te());
			},
			l(f) {
				t.l(f), (l = te());
			},
			m(f, i) {
				r[e].m(f, i), C(f, l, i), (n = !0);
			},
			p(f, [i]) {
				let o = e;
				(e = u(f)),
					e === o
						? r[e].p(f, i)
						: (ie(),
						  k(r[o], 1, 1, () => {
								r[o] = null;
						  }),
						  fe(),
						  (t = r[e]),
						  t ? t.p(f, i) : ((t = r[e] = a[e](f)), t.c()),
						  A(t, 1),
						  t.m(l.parentNode, l));
			},
			i(f) {
				n || (A(t), (n = !0));
			},
			o(f) {
				k(t), (n = !1);
			},
			d(f) {
				r[e].d(f), f && g(l);
			}
		}
	);
}
function xe(s, e, t) {
	let l, n, a;
	const r = [
		'class',
		'active',
		'block',
		'children',
		'close',
		'color',
		'disabled',
		'href',
		'inner',
		'outline',
		'size',
		'style',
		'value',
		'white'
	];
	let u = N(e, r),
		{ $$slots: f = {}, $$scope: i } = e,
		{ class: o = '' } = e,
		{ active: c = !1 } = e,
		{ block: d = !1 } = e,
		{ children: h = void 0 } = e,
		{ close: _ = !1 } = e,
		{ color: b = 'secondary' } = e,
		{ disabled: v = !1 } = e,
		{ href: E = '' } = e,
		{ inner: q = void 0 } = e,
		{ outline: X = !1 } = e,
		{ size: V = null } = e,
		{ style: M = '' } = e,
		{ value: ne = '' } = e,
		{ white: ae = !1 } = e;
	function oe(m) {
		w.call(this, s, m);
	}
	function ce(m) {
		w.call(this, s, m);
	}
	function de(m) {
		he[m ? 'unshift' : 'push'](() => {
			(q = m), t(0, q);
		});
	}
	function me(m) {
		he[m ? 'unshift' : 'push'](() => {
			(q = m), t(0, q);
		});
	}
	return (
		(s.$$set = (m) => {
			t(24, (e = Q(Q({}, e), J(m)))),
				t(9, (u = N(e, r))),
				'class' in m && t(10, (o = m.class)),
				'active' in m && t(11, (c = m.active)),
				'block' in m && t(12, (d = m.block)),
				'children' in m && t(1, (h = m.children)),
				'close' in m && t(13, (_ = m.close)),
				'color' in m && t(14, (b = m.color)),
				'disabled' in m && t(2, (v = m.disabled)),
				'href' in m && t(3, (E = m.href)),
				'inner' in m && t(0, (q = m.inner)),
				'outline' in m && t(15, (X = m.outline)),
				'size' in m && t(16, (V = m.size)),
				'style' in m && t(4, (M = m.style)),
				'value' in m && t(5, (ne = m.value)),
				'white' in m && t(17, (ae = m.white)),
				'$$scope' in m && t(18, (i = m.$$scope));
		}),
		(s.$$.update = () => {
			t(8, (l = e['aria-label'])),
				s.$$.dirty & 261120 &&
					t(
						7,
						(n = $(
							o,
							_ ? 'btn-close' : 'btn',
							_ || `btn${X ? '-outline' : ''}-${b}`,
							V ? `btn-${V}` : !1,
							d ? 'd-block w-100' : !1,
							{ active: c, 'btn-close-white': _ && ae }
						))
					),
				s.$$.dirty & 8192 && t(6, (a = _ ? 'Close' : null));
		}),
		(e = J(e)),
		[q, h, v, E, M, ne, a, n, l, u, o, c, d, _, b, X, V, ae, i, f, oe, ce, de, me]
	);
}
class $e extends T {
	constructor(e) {
		super(),
			G(this, e, xe, pe, H, {
				class: 10,
				active: 11,
				block: 12,
				children: 1,
				close: 13,
				color: 14,
				disabled: 2,
				href: 3,
				inner: 0,
				outline: 15,
				size: 16,
				style: 4,
				value: 5,
				white: 17
			});
	}
}
function et(s) {
	let e, t;
	const l = s[10].default,
		n = W(l, s, s[9], null);
	let a = [s[1], { class: s[0] }],
		r = {};
	for (let u = 0; u < a.length; u += 1) r = Q(r, a[u]);
	return {
		c() {
			(e = I('div')), n && n.c(), this.h();
		},
		l(u) {
			e = B(u, 'DIV', { class: !0 });
			var f = y(e);
			n && n.l(f), f.forEach(g), this.h();
		},
		h() {
			D(e, r);
		},
		m(u, f) {
			C(u, e, f), n && n.m(e, null), (t = !0);
		},
		p(u, [f]) {
			n && n.p && (!t || f & 512) && O(n, l, u, u[9], t ? P(l, u[9], f, null) : F(u[9]), null),
				D(e, (r = Z(a, [f & 2 && u[1], (!t || f & 1) && { class: u[0] }])));
		},
		i(u) {
			t || (A(n, u), (t = !0));
		},
		o(u) {
			k(n, u), (t = !1);
		},
		d(u) {
			u && g(e), n && n.d(u);
		}
	};
}
function tt(s, e, t) {
	let l;
	const n = ['class', 'sm', 'md', 'lg', 'xl', 'xxl', 'fluid'];
	let a = N(e, n),
		{ $$slots: r = {}, $$scope: u } = e,
		{ class: f = '' } = e,
		{ sm: i = void 0 } = e,
		{ md: o = void 0 } = e,
		{ lg: c = void 0 } = e,
		{ xl: d = void 0 } = e,
		{ xxl: h = void 0 } = e,
		{ fluid: _ = !1 } = e;
	return (
		(s.$$set = (b) => {
			(e = Q(Q({}, e), J(b))),
				t(1, (a = N(e, n))),
				'class' in b && t(2, (f = b.class)),
				'sm' in b && t(3, (i = b.sm)),
				'md' in b && t(4, (o = b.md)),
				'lg' in b && t(5, (c = b.lg)),
				'xl' in b && t(6, (d = b.xl)),
				'xxl' in b && t(7, (h = b.xxl)),
				'fluid' in b && t(8, (_ = b.fluid)),
				'$$scope' in b && t(9, (u = b.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 508 &&
				t(
					0,
					(l = $(f, {
						'container-sm': i,
						'container-md': o,
						'container-lg': c,
						'container-xl': d,
						'container-xxl': h,
						'container-fluid': _,
						container: !i && !o && !c && !d && !h && !_
					}))
				);
		}),
		[l, a, f, i, o, c, d, h, _, u, r]
	);
}
class lt extends T {
	constructor(e) {
		super(), G(this, e, tt, et, H, { class: 2, sm: 3, md: 4, lg: 5, xl: 6, xxl: 7, fluid: 8 });
	}
}
function st(s) {
	let e, t;
	const l = s[12].default,
		n = W(l, s, s[11], null);
	let a = [s[1], { class: s[0] }],
		r = {};
	for (let u = 0; u < a.length; u += 1) r = Q(r, a[u]);
	return {
		c() {
			(e = I('ul')), n && n.c(), this.h();
		},
		l(u) {
			e = B(u, 'UL', { class: !0 });
			var f = y(e);
			n && n.l(f), f.forEach(g), this.h();
		},
		h() {
			D(e, r);
		},
		m(u, f) {
			C(u, e, f), n && n.m(e, null), (t = !0);
		},
		p(u, [f]) {
			n && n.p && (!t || f & 2048) && O(n, l, u, u[11], t ? P(l, u[11], f, null) : F(u[11]), null),
				D(e, (r = Z(a, [f & 2 && u[1], (!t || f & 1) && { class: u[0] }])));
		},
		i(u) {
			t || (A(n, u), (t = !0));
		},
		o(u) {
			k(n, u), (t = !1);
		},
		d(u) {
			u && g(e), n && n.d(u);
		}
	};
}
function nt(s) {
	return s === !1 ? !1 : s === !0 || s === 'xs' ? 'flex-column' : `flex-${s}-column`;
}
function at(s, e, t) {
	let l;
	const n = [
		'class',
		'tabs',
		'pills',
		'vertical',
		'horizontal',
		'justified',
		'fill',
		'navbar',
		'card'
	];
	let a = N(e, n),
		{ $$slots: r = {}, $$scope: u } = e,
		{ class: f = '' } = e,
		{ tabs: i = !1 } = e,
		{ pills: o = !1 } = e,
		{ vertical: c = !1 } = e,
		{ horizontal: d = '' } = e,
		{ justified: h = !1 } = e,
		{ fill: _ = !1 } = e,
		{ navbar: b = !1 } = e,
		{ card: v = !1 } = e;
	return (
		(s.$$set = (E) => {
			(e = Q(Q({}, e), J(E))),
				t(1, (a = N(e, n))),
				'class' in E && t(2, (f = E.class)),
				'tabs' in E && t(3, (i = E.tabs)),
				'pills' in E && t(4, (o = E.pills)),
				'vertical' in E && t(5, (c = E.vertical)),
				'horizontal' in E && t(6, (d = E.horizontal)),
				'justified' in E && t(7, (h = E.justified)),
				'fill' in E && t(8, (_ = E.fill)),
				'navbar' in E && t(9, (b = E.navbar)),
				'card' in E && t(10, (v = E.card)),
				'$$scope' in E && t(11, (u = E.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 2044 &&
				t(
					0,
					(l = $(f, b ? 'navbar-nav' : 'nav', d ? `justify-content-${d}` : !1, nt(c), {
						'nav-tabs': i,
						'card-header-tabs': v && i,
						'nav-pills': o,
						'card-header-pills': v && o,
						'nav-justified': h,
						'nav-fill': _
					}))
				);
		}),
		[l, a, f, i, o, c, d, h, _, b, v, u, r]
	);
}
class it extends T {
	constructor(e) {
		super(),
			G(this, e, at, st, H, {
				class: 2,
				tabs: 3,
				pills: 4,
				vertical: 5,
				horizontal: 6,
				justified: 7,
				fill: 8,
				navbar: 9,
				card: 10
			});
	}
}
function ft(s) {
	let e;
	const t = s[10].default,
		l = W(t, s, s[11], null);
	return {
		c() {
			l && l.c();
		},
		l(n) {
			l && l.l(n);
		},
		m(n, a) {
			l && l.m(n, a), (e = !0);
		},
		p(n, a) {
			l && l.p && (!e || a & 2048) && O(l, t, n, n[11], e ? P(t, n[11], a, null) : F(n[11]), null);
		},
		i(n) {
			e || (A(l, n), (e = !0));
		},
		o(n) {
			k(l, n), (e = !1);
		},
		d(n) {
			l && l.d(n);
		}
	};
}
function rt(s) {
	let e, t;
	return (
		(e = new lt({
			props: { fluid: s[0] === 'fluid', $$slots: { default: [ut] }, $$scope: { ctx: s } }
		})),
		{
			c() {
				R(e.$$.fragment);
			},
			l(l) {
				L(e.$$.fragment, l);
			},
			m(l, n) {
				U(e, l, n), (t = !0);
			},
			p(l, n) {
				const a = {};
				n & 1 && (a.fluid = l[0] === 'fluid'),
					n & 2048 && (a.$$scope = { dirty: n, ctx: l }),
					e.$set(a);
			},
			i(l) {
				t || (A(e.$$.fragment, l), (t = !0));
			},
			o(l) {
				k(e.$$.fragment, l), (t = !1);
			},
			d(l) {
				j(e, l);
			}
		}
	);
}
function ut(s) {
	let e;
	const t = s[10].default,
		l = W(t, s, s[11], null);
	return {
		c() {
			l && l.c();
		},
		l(n) {
			l && l.l(n);
		},
		m(n, a) {
			l && l.m(n, a), (e = !0);
		},
		p(n, a) {
			l && l.p && (!e || a & 2048) && O(l, t, n, n[11], e ? P(t, n[11], a, null) : F(n[11]), null);
		},
		i(n) {
			e || (A(l, n), (e = !0));
		},
		o(n) {
			k(l, n), (e = !1);
		},
		d(n) {
			l && l.d(n);
		}
	};
}
function ot(s) {
	let e, t, l, n;
	const a = [rt, ft],
		r = [];
	function u(o, c) {
		return o[0] ? 0 : 1;
	}
	(t = u(s)), (l = r[t] = a[t](s));
	let f = [s[2], { class: s[1] }],
		i = {};
	for (let o = 0; o < f.length; o += 1) i = Q(i, f[o]);
	return {
		c() {
			(e = I('nav')), l.c(), this.h();
		},
		l(o) {
			e = B(o, 'NAV', { class: !0 });
			var c = y(e);
			l.l(c), c.forEach(g), this.h();
		},
		h() {
			D(e, i);
		},
		m(o, c) {
			C(o, e, c), r[t].m(e, null), (n = !0);
		},
		p(o, [c]) {
			let d = t;
			(t = u(o)),
				t === d
					? r[t].p(o, c)
					: (ie(),
					  k(r[d], 1, 1, () => {
							r[d] = null;
					  }),
					  fe(),
					  (l = r[t]),
					  l ? l.p(o, c) : ((l = r[t] = a[t](o)), l.c()),
					  A(l, 1),
					  l.m(e, null)),
				D(e, (i = Z(f, [c & 4 && o[2], (!n || c & 2) && { class: o[1] }])));
		},
		i(o) {
			n || (A(l), (n = !0));
		},
		o(o) {
			k(l), (n = !1);
		},
		d(o) {
			o && g(e), r[t].d();
		}
	};
}
function ct(s) {
	return s === !1 ? !1 : s === !0 || s === 'xs' ? 'navbar-expand' : `navbar-expand-${s}`;
}
function dt(s, e, t) {
	let l;
	const n = ['class', 'container', 'color', 'dark', 'expand', 'fixed', 'light', 'sticky'];
	let a = N(e, n),
		{ $$slots: r = {}, $$scope: u } = e;
	ze('navbar', { inNavbar: !0 });
	let { class: f = '' } = e,
		{ container: i = 'fluid' } = e,
		{ color: o = '' } = e,
		{ dark: c = !1 } = e,
		{ expand: d = '' } = e,
		{ fixed: h = '' } = e,
		{ light: _ = !1 } = e,
		{ sticky: b = '' } = e;
	return (
		(s.$$set = (v) => {
			(e = Q(Q({}, e), J(v))),
				t(2, (a = N(e, n))),
				'class' in v && t(3, (f = v.class)),
				'container' in v && t(0, (i = v.container)),
				'color' in v && t(4, (o = v.color)),
				'dark' in v && t(5, (c = v.dark)),
				'expand' in v && t(6, (d = v.expand)),
				'fixed' in v && t(7, (h = v.fixed)),
				'light' in v && t(8, (_ = v.light)),
				'sticky' in v && t(9, (b = v.sticky)),
				'$$scope' in v && t(11, (u = v.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 1016 &&
				t(
					1,
					(l = $(f, 'navbar', ct(d), {
						'navbar-light': _,
						'navbar-dark': c,
						[`bg-${o}`]: o,
						[`fixed-${h}`]: h,
						[`sticky-${b}`]: b
					}))
				);
		}),
		[i, l, a, f, o, c, d, h, _, b, r, u]
	);
}
class mt extends T {
	constructor(e) {
		super(),
			G(this, e, dt, ot, H, {
				class: 3,
				container: 0,
				color: 4,
				dark: 5,
				expand: 6,
				fixed: 7,
				light: 8,
				sticky: 9
			});
	}
}
function ht(s) {
	let e, t;
	const l = s[5].default,
		n = W(l, s, s[4], null);
	let a = [s[1], { class: s[0] }],
		r = {};
	for (let u = 0; u < a.length; u += 1) r = Q(r, a[u]);
	return {
		c() {
			(e = I('li')), n && n.c(), this.h();
		},
		l(u) {
			e = B(u, 'LI', { class: !0 });
			var f = y(e);
			n && n.l(f), f.forEach(g), this.h();
		},
		h() {
			D(e, r);
		},
		m(u, f) {
			C(u, e, f), n && n.m(e, null), (t = !0);
		},
		p(u, [f]) {
			n && n.p && (!t || f & 16) && O(n, l, u, u[4], t ? P(l, u[4], f, null) : F(u[4]), null),
				D(e, (r = Z(a, [f & 2 && u[1], (!t || f & 1) && { class: u[0] }])));
		},
		i(u) {
			t || (A(n, u), (t = !0));
		},
		o(u) {
			k(n, u), (t = !1);
		},
		d(u) {
			u && g(e), n && n.d(u);
		}
	};
}
function gt(s, e, t) {
	let l;
	const n = ['class', 'active'];
	let a = N(e, n),
		{ $$slots: r = {}, $$scope: u } = e,
		{ class: f = '' } = e,
		{ active: i = !1 } = e;
	return (
		(s.$$set = (o) => {
			(e = Q(Q({}, e), J(o))),
				t(1, (a = N(e, n))),
				'class' in o && t(2, (f = o.class)),
				'active' in o && t(3, (i = o.active)),
				'$$scope' in o && t(4, (u = o.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 12 && t(0, (l = $(f, 'nav-item', i ? 'active' : !1)));
		}),
		[l, a, f, i, u, r]
	);
}
class be extends T {
	constructor(e) {
		super(), G(this, e, gt, ht, H, { class: 2, active: 3 });
	}
}
function _t(s) {
	let e, t, l, n;
	const a = s[5].default,
		r = W(a, s, s[4], null);
	let u = [s[2], { class: s[1] }, { href: s[0] }],
		f = {};
	for (let i = 0; i < u.length; i += 1) f = Q(f, u[i]);
	return {
		c() {
			(e = I('a')), r && r.c(), this.h();
		},
		l(i) {
			e = B(i, 'A', { class: !0, href: !0 });
			var o = y(e);
			r && r.l(o), o.forEach(g), this.h();
		},
		h() {
			D(e, f);
		},
		m(i, o) {
			C(i, e, o), r && r.m(e, null), (t = !0), l || ((n = z(e, 'click', s[6])), (l = !0));
		},
		p(i, [o]) {
			r && r.p && (!t || o & 16) && O(r, a, i, i[4], t ? P(a, i[4], o, null) : F(i[4]), null),
				D(
					e,
					(f = Z(u, [
						o & 4 && i[2],
						(!t || o & 2) && { class: i[1] },
						(!t || o & 1) && { href: i[0] }
					]))
				);
		},
		i(i) {
			t || (A(r, i), (t = !0));
		},
		o(i) {
			k(r, i), (t = !1);
		},
		d(i) {
			i && g(e), r && r.d(i), (l = !1), n();
		}
	};
}
function bt(s, e, t) {
	let l;
	const n = ['class', 'href'];
	let a = N(e, n),
		{ $$slots: r = {}, $$scope: u } = e,
		{ class: f = '' } = e,
		{ href: i = '/' } = e;
	function o(c) {
		w.call(this, s, c);
	}
	return (
		(s.$$set = (c) => {
			(e = Q(Q({}, e), J(c))),
				t(2, (a = N(e, n))),
				'class' in c && t(3, (f = c.class)),
				'href' in c && t(0, (i = c.href)),
				'$$scope' in c && t(4, (u = c.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 8 && t(1, (l = $(f, 'navbar-brand')));
		}),
		[i, l, a, f, u, r, o]
	);
}
class Ae extends T {
	constructor(e) {
		super(), G(this, e, bt, _t, H, { class: 3, href: 0 });
	}
}
function At(s) {
	let e;
	return {
		c() {
			(e = I('span')), this.h();
		},
		l(t) {
			(e = B(t, 'SPAN', { class: !0 })), y(e).forEach(g), this.h();
		},
		h() {
			S(e, 'class', 'navbar-toggler-icon');
		},
		m(t, l) {
			C(t, e, l);
		},
		d(t) {
			t && g(e);
		}
	};
}
function kt(s) {
	let e;
	const t = s[3].default,
		l = W(t, s, s[5], null),
		n = l || At();
	return {
		c() {
			n && n.c();
		},
		l(a) {
			n && n.l(a);
		},
		m(a, r) {
			n && n.m(a, r), (e = !0);
		},
		p(a, r) {
			l && l.p && (!e || r & 32) && O(l, t, a, a[5], e ? P(t, a[5], r, null) : F(a[5]), null);
		},
		i(a) {
			e || (A(n, a), (e = !0));
		},
		o(a) {
			k(n, a), (e = !1);
		},
		d(a) {
			n && n.d(a);
		}
	};
}
function vt(s) {
	let e, t;
	const l = [s[1], { class: s[0] }];
	let n = { $$slots: { default: [kt] }, $$scope: { ctx: s } };
	for (let a = 0; a < l.length; a += 1) n = Q(n, l[a]);
	return (
		(e = new $e({ props: n })),
		e.$on('click', s[4]),
		{
			c() {
				R(e.$$.fragment);
			},
			l(a) {
				L(e.$$.fragment, a);
			},
			m(a, r) {
				U(e, a, r), (t = !0);
			},
			p(a, [r]) {
				const u = r & 3 ? Z(l, [r & 2 && Ke(a[1]), r & 1 && { class: a[0] }]) : {};
				r & 32 && (u.$$scope = { dirty: r, ctx: a }), e.$set(u);
			},
			i(a) {
				t || (A(e.$$.fragment, a), (t = !0));
			},
			o(a) {
				k(e.$$.fragment, a), (t = !1);
			},
			d(a) {
				j(e, a);
			}
		}
	);
}
function Et(s, e, t) {
	let l;
	const n = ['class'];
	let a = N(e, n),
		{ $$slots: r = {}, $$scope: u } = e,
		{ class: f = '' } = e;
	function i(o) {
		w.call(this, s, o);
	}
	return (
		(s.$$set = (o) => {
			(e = Q(Q({}, e), J(o))),
				t(1, (a = N(e, n))),
				'class' in o && t(2, (f = o.class)),
				'$$scope' in o && t(5, (u = o.$$scope));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 4 && t(0, (l = $(f, 'navbar-toggler')));
		}),
		[l, a, f, r, i, u]
	);
}
class Ct extends T {
	constructor(e) {
		super(), G(this, e, Et, vt, H, { class: 2 });
	}
}
function Qt(s) {
	let e, t;
	return {
		c() {
			(e = I('img')), this.h();
		},
		l(l) {
			(e = B(l, 'IMG', { src: !0, alt: !0, width: !0 })), this.h();
		},
		h() {
			Ce(e.src, (t = Oe)) || S(e, 'src', t), S(e, 'alt', 'idivLogo'), S(e, 'width', '100%');
		},
		m(l, n) {
			C(l, e, n);
		},
		p: Y,
		d(l) {
			l && g(e);
		}
	};
}
function It(s) {
	let e, t;
	return {
		c() {
			(e = I('img')), this.h();
		},
		l(l) {
			(e = B(l, 'IMG', { style: !0, src: !0, alt: !0 })), this.h();
		},
		h() {
			Le(e, 'height', '2em'), Ce(e.src, (t = Fe)) || S(e, 'src', t), S(e, 'alt', 'idivLogo');
		},
		m(l, n) {
			C(l, e, n);
		},
		p: Y,
		d(l) {
			l && g(e);
		}
	};
}
function Bt(s) {
	let e, t, l;
	return {
		c() {
			(e = I('li')), (t = I('a')), (l = le('Home')), this.h();
		},
		l(n) {
			e = B(n, 'LI', { class: !0 });
			var a = y(e);
			t = B(a, 'A', { 'sveltekit:prefetch': !0, href: !0, class: !0 });
			var r = y(t);
			(l = se(r, 'Home')), r.forEach(g), a.forEach(g), this.h();
		},
		h() {
			S(t, 'sveltekit:prefetch', ''),
				S(t, 'href', ee + '/index'),
				S(t, 'class', 'nav-link'),
				S(e, 'class', 'nav-item svelte-kg8n5n'),
				ue(e, 'active', s[1].url.pathname === ee + '/index');
		},
		m(n, a) {
			C(n, e, a), K(e, t), K(t, l);
		},
		p(n, a) {
			a & 2 && ue(e, 'active', n[1].url.pathname === ee + '/index');
		},
		d(n) {
			n && g(e);
		}
	};
}
function yt(s) {
	let e, t, l;
	return {
		c() {
			(e = I('li')), (t = I('a')), (l = le('Project')), this.h();
		},
		l(n) {
			e = B(n, 'LI', { class: !0 });
			var a = y(e);
			t = B(a, 'A', { 'sveltekit:prefetch': !0, href: !0, class: !0 });
			var r = y(t);
			(l = se(r, 'Project')), r.forEach(g), a.forEach(g), this.h();
		},
		h() {
			S(t, 'sveltekit:prefetch', ''),
				S(t, 'href', ee + '/project'),
				S(t, 'class', 'nav-link'),
				S(e, 'class', 'nav-item svelte-kg8n5n'),
				ue(e, 'active', s[1].url.pathname === ee + '/project');
		},
		m(n, a) {
			C(n, e, a), K(e, t), K(t, l);
		},
		p(n, a) {
			a & 2 && ue(e, 'active', n[1].url.pathname === ee + '/project');
		},
		d(n) {
			n && g(e);
		}
	};
}
function St(s) {
	let e, t, l, n;
	return (
		(e = new be({ props: { $$slots: { default: [Bt] }, $$scope: { ctx: s } } })),
		(l = new be({ props: { $$slots: { default: [yt] }, $$scope: { ctx: s } } })),
		{
			c() {
				R(e.$$.fragment), (t = p()), R(l.$$.fragment);
			},
			l(a) {
				L(e.$$.fragment, a), (t = x(a)), L(l.$$.fragment, a);
			},
			m(a, r) {
				U(e, a, r), C(a, t, r), U(l, a, r), (n = !0);
			},
			p(a, r) {
				const u = {};
				r & 18 && (u.$$scope = { dirty: r, ctx: a }), e.$set(u);
				const f = {};
				r & 18 && (f.$$scope = { dirty: r, ctx: a }), l.$set(f);
			},
			i(a) {
				n || (A(e.$$.fragment, a), A(l.$$.fragment, a), (n = !0));
			},
			o(a) {
				k(e.$$.fragment, a), k(l.$$.fragment, a), (n = !1);
			},
			d(a) {
				j(e, a), a && g(t), j(l, a);
			}
		}
	);
}
function Dt(s) {
	let e, t;
	return (
		(e = new it({
			props: { class: '', navbar: !0, $$slots: { default: [St] }, $$scope: { ctx: s } }
		})),
		{
			c() {
				R(e.$$.fragment);
			},
			l(l) {
				L(e.$$.fragment, l);
			},
			m(l, n) {
				U(e, l, n), (t = !0);
			},
			p(l, n) {
				const a = {};
				n & 18 && (a.$$scope = { dirty: n, ctx: l }), e.$set(a);
			},
			i(l) {
				t || (A(e.$$.fragment, l), (t = !0));
			},
			o(l) {
				k(e.$$.fragment, l), (t = !1);
			},
			d(l) {
				j(e, l);
			}
		}
	);
}
function Nt(s) {
	let e, t, l, n, a, r, u, f;
	return (
		(e = new Ae({
			props: {
				class: 'fixed-top',
				style: 'line-height: 0px; padding-top: 0px',
				$$slots: { default: [Qt] },
				$$scope: { ctx: s }
			}
		})),
		(l = new Ae({
			props: {
				href: 'https://www.idiv.de/de/index.html',
				$$slots: { default: [It] },
				$$scope: { ctx: s }
			}
		})),
		(a = new Ct({})),
		a.$on('click', s[3]),
		(u = new He({
			props: {
				isOpen: s[0],
				navbar: !0,
				expand: 'md',
				$$slots: { default: [Dt] },
				$$scope: { ctx: s }
			}
		})),
		u.$on('update', s[2]),
		{
			c() {
				R(e.$$.fragment),
					(t = p()),
					R(l.$$.fragment),
					(n = p()),
					R(a.$$.fragment),
					(r = p()),
					R(u.$$.fragment);
			},
			l(i) {
				L(e.$$.fragment, i),
					(t = x(i)),
					L(l.$$.fragment, i),
					(n = x(i)),
					L(a.$$.fragment, i),
					(r = x(i)),
					L(u.$$.fragment, i);
			},
			m(i, o) {
				U(e, i, o),
					C(i, t, o),
					U(l, i, o),
					C(i, n, o),
					U(a, i, o),
					C(i, r, o),
					U(u, i, o),
					(f = !0);
			},
			p(i, o) {
				const c = {};
				o & 16 && (c.$$scope = { dirty: o, ctx: i }), e.$set(c);
				const d = {};
				o & 16 && (d.$$scope = { dirty: o, ctx: i }), l.$set(d);
				const h = {};
				o & 1 && (h.isOpen = i[0]), o & 18 && (h.$$scope = { dirty: o, ctx: i }), u.$set(h);
			},
			i(i) {
				f ||
					(A(e.$$.fragment, i),
					A(l.$$.fragment, i),
					A(a.$$.fragment, i),
					A(u.$$.fragment, i),
					(f = !0));
			},
			o(i) {
				k(e.$$.fragment, i),
					k(l.$$.fragment, i),
					k(a.$$.fragment, i),
					k(u.$$.fragment, i),
					(f = !1);
			},
			d(i) {
				j(e, i), i && g(t), j(l, i), i && g(n), j(a, i), i && g(r), j(u, i);
			}
		}
	);
}
function zt(s) {
	let e, t, l;
	return (
		(t = new mt({
			props: {
				style: 'background-color:black;',
				dark: !0,
				class: 'fixed-top',
				expand: 'md',
				$$slots: { default: [Nt] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				(e = I('header')), R(t.$$.fragment);
			},
			l(n) {
				e = B(n, 'HEADER', {});
				var a = y(e);
				L(t.$$.fragment, a), a.forEach(g);
			},
			m(n, a) {
				C(n, e, a), U(t, e, null), (l = !0);
			},
			p(n, [a]) {
				const r = {};
				a & 19 && (r.$$scope = { dirty: a, ctx: n }), t.$set(r);
			},
			i(n) {
				l || (A(t.$$.fragment, n), (l = !0));
			},
			o(n) {
				k(t.$$.fragment, n), (l = !1);
			},
			d(n) {
				n && g(e), j(t);
			}
		}
	);
}
function Kt(s, e, t) {
	let l, n;
	Re(s, je, (u) => t(1, (n = u))), ve(() => {});
	function a(u) {
		t(0, (l = u.detail.isOpen));
	}
	const r = () => t(0, (l = !l));
	return t(0, (l = null)), [l, n, a, r];
}
class Rt extends T {
	constructor(e) {
		super(), G(this, e, Kt, zt, H, {});
	}
}
function Lt(s) {
	let e, t, l, n, a, r, u, f, i;
	return {
		c() {
			(e = I('footer')),
				(t = I('div')),
				(l = I('hr')),
				(n = p()),
				(a = I('span')),
				(r = le('@2022 iBID')),
				(u = p()),
				(f = I('a')),
				(i = le('Imprint')),
				this.h();
		},
		l(o) {
			e = B(o, 'FOOTER', { class: !0 });
			var c = y(e);
			t = B(c, 'DIV', {});
			var d = y(t);
			(l = B(d, 'HR', {})), (n = x(d)), (a = B(d, 'SPAN', {}));
			var h = y(a);
			(r = se(h, '@2022 iBID')), h.forEach(g), (u = x(d)), (f = B(d, 'A', { href: !0, class: !0 }));
			var _ = y(f);
			(i = se(_, 'Imprint')), _.forEach(g), d.forEach(g), c.forEach(g), this.h();
		},
		h() {
			S(f, 'href', ee + '/imprint'), S(f, 'class', 'svelte-3ne41t'), S(e, 'class', 'svelte-3ne41t');
		},
		m(o, c) {
			C(o, e, c), K(e, t), K(t, l), K(t, n), K(t, a), K(a, r), K(t, u), K(t, f), K(f, i);
		},
		p: Y,
		i: Y,
		o: Y,
		d(o) {
			o && g(e);
		}
	};
}
class Ut extends T {
	constructor(e) {
		super(), G(this, e, null, Lt, H, {});
	}
}
function jt(s) {
	let e, t, l, n, a, r;
	e = new Rt({});
	const u = s[1].default,
		f = W(u, s, s[0], null);
	return (
		(a = new Ut({})),
		{
			c() {
				R(e.$$.fragment),
					(t = p()),
					(l = I('main')),
					f && f.c(),
					(n = p()),
					R(a.$$.fragment),
					this.h();
			},
			l(i) {
				L(e.$$.fragment, i), (t = x(i)), (l = B(i, 'MAIN', { class: !0 }));
				var o = y(l);
				f && f.l(o), o.forEach(g), (n = x(i)), L(a.$$.fragment, i), this.h();
			},
			h() {
				S(l, 'class', 'svelte-1l5lemn');
			},
			m(i, o) {
				U(e, i, o), C(i, t, o), C(i, l, o), f && f.m(l, null), C(i, n, o), U(a, i, o), (r = !0);
			},
			p(i, [o]) {
				f && f.p && (!r || o & 1) && O(f, u, i, i[0], r ? P(u, i[0], o, null) : F(i[0]), null);
			},
			i(i) {
				r || (A(e.$$.fragment, i), A(f, i), A(a.$$.fragment, i), (r = !0));
			},
			o(i) {
				k(e.$$.fragment, i), k(f, i), k(a.$$.fragment, i), (r = !1);
			},
			d(i) {
				j(e, i), i && g(t), i && g(l), f && f.d(i), i && g(n), j(a, i);
			}
		}
	);
}
function Ot(s, e, t) {
	let { $$slots: l = {}, $$scope: n } = e;
	return (
		(s.$$set = (a) => {
			'$$scope' in a && t(0, (n = a.$$scope));
		}),
		[n, l]
	);
}
class Wt extends T {
	constructor(e) {
		super(), G(this, e, Ot, jt, H, {});
	}
}
export { Wt as default };
