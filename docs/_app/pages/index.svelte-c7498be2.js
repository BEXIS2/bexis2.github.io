import {
	S as ae,
	i as _e,
	s as ue,
	e as I,
	k as C,
	c as O,
	a as S,
	d as m,
	m as R,
	g as b,
	t as k,
	l as L,
	h as y,
	_ as v,
	b as j,
	I as P,
	j as q,
	a0 as G,
	$ as ce,
	f as K,
	G as de,
	n as he,
	a1 as me,
	N as be
} from '../chunks/index-3e01cf4c.js';
import { d as pe, b as ve } from '../chunks/env-859c48a7.js';
import { f as ke } from '../chunks/index-e6222c86.js';
const { document: Y } = me;
function z(l, o, t) {
	const n = l.slice();
	return (n[24] = o[t]), n;
}
function J(l, o, t) {
	const n = l.slice();
	return (n[27] = o[t]), n;
}
function W(l, o, t) {
	const n = l.slice();
	return (n[27] = o[t]), n;
}
function X(l, o, t) {
	const n = l.slice();
	return (n[24] = o[t]), n;
}
function Z(l, o, t) {
	const n = l.slice();
	return (n[27] = o[t]), n;
}
function $(l) {
	let o,
		t,
		n,
		f = l[7],
		a = [];
	for (let i = 0; i < f.length; i += 1) a[i] = te(X(l, f, i));
	let r = l[6],
		u = [];
	for (let i = 0; i < r.length; i += 1) u[i] = re(z(l, r, i));
	return {
		c() {
			o = I('div');
			for (let i = 0; i < a.length; i += 1) a[i].c();
			(t = C()), (n = I('div'));
			for (let i = 0; i < u.length; i += 1) u[i].c();
		},
		l(i) {
			o = O(i, 'DIV', {});
			var c = S(o);
			for (let h = 0; h < a.length; h += 1) a[h].l(c);
			c.forEach(m), (t = R(i)), (n = O(i, 'DIV', {}));
			var e = S(n);
			for (let h = 0; h < u.length; h += 1) u[h].l(e);
			e.forEach(m);
		},
		m(i, c) {
			b(i, o, c);
			for (let e = 0; e < a.length; e += 1) a[e].m(o, null);
			b(i, t, c), b(i, n, c);
			for (let e = 0; e < u.length; e += 1) u[e].m(n, null);
		},
		p(i, c) {
			if (c[0] & 398) {
				f = i[7];
				let e;
				for (e = 0; e < f.length; e += 1) {
					const h = X(i, f, e);
					a[e] ? a[e].p(h, c) : ((a[e] = te(h)), a[e].c(), a[e].m(o, null));
				}
				for (; e < a.length; e += 1) a[e].d(1);
				a.length = f.length;
			}
			if (c[0] & 334) {
				r = i[6];
				let e;
				for (e = 0; e < r.length; e += 1) {
					const h = z(i, r, e);
					u[e] ? u[e].p(h, c) : ((u[e] = re(h)), u[e].c(), u[e].m(n, null));
				}
				for (; e < u.length; e += 1) u[e].d(1);
				u.length = r.length;
			}
		},
		d(i) {
			i && m(o), G(a, i), i && m(t), i && m(n), G(u, i);
		}
	};
}
function x(l) {
	let o = l[27].count_value + '',
		t;
	return {
		c() {
			t = k(o);
		},
		l(n) {
			t = y(n, o);
		},
		m(n, f) {
			b(n, t, f);
		},
		p(n, f) {
			f[0] & 12 && o !== (o = n[27].count_value + '') && q(t, o);
		},
		d(n) {
			n && m(t);
		}
	};
}
function ee(l) {
	let o,
		t,
		n = l[27].name + '',
		f,
		a,
		r = l[27].count + '',
		u,
		i,
		c,
		e,
		h,
		s = l[27].count_value != 0 && x(l);
	function _() {
		return l[14](l[27], l[24]);
	}
	return {
		c() {
			(o = I('span')),
				(t = I('li')),
				(f = k(n)),
				(a = k(' (')),
				(u = k(r)),
				(i = k(') ')),
				s && s.c(),
				this.h();
		},
		l(d) {
			o = O(d, 'SPAN', { style: !0 });
			var p = S(o);
			t = O(p, 'LI', {});
			var w = S(t);
			(f = y(w, n)),
				(a = y(w, ' (')),
				(u = y(w, r)),
				(i = y(w, ') ')),
				s && s.l(w),
				w.forEach(m),
				p.forEach(m),
				this.h();
		},
		h() {
			j(o, 'style', (c = l[1][l[24].id] == l[27].name ? 'font-weight: bold;' : ''));
		},
		m(d, p) {
			b(d, o, p),
				v(o, t),
				v(t, f),
				v(t, a),
				v(t, u),
				v(t, i),
				s && s.m(t, null),
				e || ((h = P(o, 'click', _)), (e = !0));
		},
		p(d, p) {
			(l = d),
				p[0] & 12 && n !== (n = l[27].name + '') && q(f, n),
				p[0] & 12 && r !== (r = l[27].count + '') && q(u, r),
				l[27].count_value != 0
					? s
						? s.p(l, p)
						: ((s = x(l)), s.c(), s.m(t, null))
					: s && (s.d(1), (s = null)),
				p[0] & 14 &&
					c !== (c = l[1][l[24].id] == l[27].name ? 'font-weight: bold;' : '') &&
					j(o, 'style', c);
		},
		d(d) {
			d && m(o), s && s.d(), (e = !1), h();
		}
	};
}
function le(l) {
	let o, t, n, f;
	function a() {
		return l[15](l[24]);
	}
	return {
		c() {
			(o = I('button')),
				(t = k(`Show more
					`)),
				this.h();
		},
		l(r) {
			o = O(r, 'BUTTON', { id: !0, type: !0, class: !0 });
			var u = S(o);
			(t = y(
				u,
				`Show more
					`
			)),
				u.forEach(m),
				this.h();
		},
		h() {
			j(o, 'id', 'loadmore'), j(o, 'type', 'button'), j(o, 'class', 'btn btn-secondary');
		},
		m(r, u) {
			b(r, o, u), v(o, t), n || ((f = P(o, 'click', a)), (n = !0));
		},
		p(r, u) {
			l = r;
		},
		d(r) {
			r && m(o), (n = !1), f();
		}
	};
}
function te(l) {
	let o,
		t = l[24].label + '',
		n,
		f,
		a,
		r,
		u = l[3][l[24].id].slice(0, l[2][l[24].id]),
		i = [];
	for (let e = 0; e < u.length; e += 1) i[e] = ee(Z(l, u, e));
	let c = l[2][l[24].id] < l[3][l[24].id].length && le(l);
	return {
		c() {
			(o = I('h2')), (n = k(t)), (f = C());
			for (let e = 0; e < i.length; e += 1) i[e].c();
			(a = C()), c && c.c(), (r = L());
		},
		l(e) {
			o = O(e, 'H2', {});
			var h = S(o);
			(n = y(h, t)), h.forEach(m), (f = R(e));
			for (let s = 0; s < i.length; s += 1) i[s].l(e);
			(a = R(e)), c && c.l(e), (r = L());
		},
		m(e, h) {
			b(e, o, h), v(o, n), b(e, f, h);
			for (let s = 0; s < i.length; s += 1) i[s].m(e, h);
			b(e, a, h), c && c.m(e, h), b(e, r, h);
		},
		p(e, h) {
			if (h[0] & 398) {
				u = e[3][e[24].id].slice(0, e[2][e[24].id]);
				let s;
				for (s = 0; s < u.length; s += 1) {
					const _ = Z(e, u, s);
					i[s] ? i[s].p(_, h) : ((i[s] = ee(_)), i[s].c(), i[s].m(a.parentNode, a));
				}
				for (; s < i.length; s += 1) i[s].d(1);
				i.length = u.length;
			}
			e[2][e[24].id] < e[3][e[24].id].length
				? c
					? c.p(e, h)
					: ((c = le(e)), c.c(), c.m(r.parentNode, r))
				: c && (c.d(1), (c = null));
		},
		d(e) {
			e && m(o), e && m(f), G(i, e), e && m(a), c && c.d(e), e && m(r);
		}
	};
}
function ye(l) {
	let o,
		t = l[24].label + '',
		n,
		f,
		a,
		r,
		u = l[3][l[24].id].slice(0, l[2][l[24].id]),
		i = [];
	for (let e = 0; e < u.length; e += 1) i[e] = ne(J(l, u, e));
	let c = l[2][l[24].id] < l[3][l[24].id].length && ie(l);
	return {
		c() {
			(o = I('h2')), (n = k(t)), (f = C());
			for (let e = 0; e < i.length; e += 1) i[e].c();
			(a = C()), c && c.c(), (r = L());
		},
		l(e) {
			o = O(e, 'H2', {});
			var h = S(o);
			(n = y(h, t)), h.forEach(m), (f = R(e));
			for (let s = 0; s < i.length; s += 1) i[s].l(e);
			(a = R(e)), c && c.l(e), (r = L());
		},
		m(e, h) {
			b(e, o, h), v(o, n), b(e, f, h);
			for (let s = 0; s < i.length; s += 1) i[s].m(e, h);
			b(e, a, h), c && c.m(e, h), b(e, r, h);
		},
		p(e, h) {
			if (h[0] & 334) {
				u = e[3][e[24].id].slice(0, e[2][e[24].id]);
				let s;
				for (s = 0; s < u.length; s += 1) {
					const _ = J(e, u, s);
					i[s] ? i[s].p(_, h) : ((i[s] = ne(_)), i[s].c(), i[s].m(a.parentNode, a));
				}
				for (; s < i.length; s += 1) i[s].d(1);
				i.length = u.length;
			}
			e[2][e[24].id] < e[3][e[24].id].length
				? c
					? c.p(e, h)
					: ((c = ie(e)), c.c(), c.m(r.parentNode, r))
				: c && (c.d(1), (c = null));
		},
		d(e) {
			e && m(o), e && m(f), G(i, e), e && m(a), c && c.d(e), e && m(r);
		}
	};
}
function ge(l) {
	let o,
		t = l[3][l[24].id].slice(0, l[2][l[24].id]),
		n = [];
	for (let f = 0; f < t.length; f += 1) n[f] = fe(W(l, t, f));
	return {
		c() {
			for (let f = 0; f < n.length; f += 1) n[f].c();
			o = L();
		},
		l(f) {
			for (let a = 0; a < n.length; a += 1) n[a].l(f);
			o = L();
		},
		m(f, a) {
			for (let r = 0; r < n.length; r += 1) n[r].m(f, a);
			b(f, o, a);
		},
		p(f, a) {
			if (a[0] & 76) {
				t = f[3][f[24].id].slice(0, f[2][f[24].id]);
				let r;
				for (r = 0; r < t.length; r += 1) {
					const u = W(f, t, r);
					n[r] ? n[r].p(u, a) : ((n[r] = fe(u)), n[r].c(), n[r].m(o.parentNode, o));
				}
				for (; r < n.length; r += 1) n[r].d(1);
				n.length = t.length;
			}
		},
		d(f) {
			G(n, f), f && m(o);
		}
	};
}
function oe(l) {
	let o = l[27].count_value + '',
		t;
	return {
		c() {
			t = k(o);
		},
		l(n) {
			t = y(n, o);
		},
		m(n, f) {
			b(n, t, f);
		},
		p(n, f) {
			f[0] & 12 && o !== (o = n[27].count_value + '') && q(t, o);
		},
		d(n) {
			n && m(t);
		}
	};
}
function ne(l) {
	let o,
		t,
		n = l[27].name + '',
		f,
		a,
		r = l[27].count + '',
		u,
		i,
		c,
		e,
		h,
		s = l[27].count_value != 0 && oe(l);
	function _() {
		return l[16](l[27], l[24]);
	}
	return {
		c() {
			(o = I('span')),
				(t = I('li')),
				(f = k(n)),
				(a = k(' (')),
				(u = k(r)),
				(i = k(') ')),
				s && s.c(),
				this.h();
		},
		l(d) {
			o = O(d, 'SPAN', { style: !0 });
			var p = S(o);
			t = O(p, 'LI', {});
			var w = S(t);
			(f = y(w, n)),
				(a = y(w, ' (')),
				(u = y(w, r)),
				(i = y(w, ') ')),
				s && s.l(w),
				w.forEach(m),
				p.forEach(m),
				this.h();
		},
		h() {
			j(o, 'style', (c = l[1][l[24].id] == l[27].name ? 'font-weight: bold;' : ''));
		},
		m(d, p) {
			b(d, o, p),
				v(o, t),
				v(t, f),
				v(t, a),
				v(t, u),
				v(t, i),
				s && s.m(t, null),
				e || ((h = P(o, 'click', _)), (e = !0));
		},
		p(d, p) {
			(l = d),
				p[0] & 12 && n !== (n = l[27].name + '') && q(f, n),
				p[0] & 12 && r !== (r = l[27].count + '') && q(u, r),
				l[27].count_value != 0
					? s
						? s.p(l, p)
						: ((s = oe(l)), s.c(), s.m(t, null))
					: s && (s.d(1), (s = null)),
				p[0] & 14 &&
					c !== (c = l[1][l[24].id] == l[27].name ? 'font-weight: bold;' : '') &&
					j(o, 'style', c);
		},
		d(d) {
			d && m(o), s && s.d(), (e = !1), h();
		}
	};
}
function ie(l) {
	let o, t, n, f;
	function a() {
		return l[17](l[24]);
	}
	return {
		c() {
			(o = I('button')),
				(t = k(`Show more
						`)),
				this.h();
		},
		l(r) {
			o = O(r, 'BUTTON', { id: !0, type: !0, class: !0 });
			var u = S(o);
			(t = y(
				u,
				`Show more
						`
			)),
				u.forEach(m),
				this.h();
		},
		h() {
			j(o, 'id', 'loadmore'), j(o, 'type', 'button'), j(o, 'class', 'btn btn-secondary');
		},
		m(r, u) {
			b(r, o, u), v(o, t), n || ((f = P(o, 'click', a)), (n = !0));
		},
		p(r, u) {
			l = r;
		},
		d(r) {
			r && m(o), (n = !1), f();
		}
	};
}
function se(l) {
	let o = l[27].count_value + '',
		t;
	return {
		c() {
			t = k(o);
		},
		l(n) {
			t = y(n, o);
		},
		m(n, f) {
			b(n, t, f);
		},
		p(n, f) {
			f[0] & 12 && o !== (o = n[27].count_value + '') && q(t, o);
		},
		d(n) {
			n && m(t);
		}
	};
}
function fe(l) {
	let o = l[24].label + '',
		t,
		n,
		f = l[27].name + '',
		a,
		r,
		u = l[27].count + '',
		i,
		c,
		e,
		h,
		s = l[27].count_value != 0 && se(l);
	return {
		c() {
			(t = k(o)),
				(n = k(': ')),
				(a = k(f)),
				(r = k(' (')),
				(i = k(u)),
				(c = k(') ')),
				s && s.c(),
				(e = C()),
				(h = I('br'));
		},
		l(_) {
			(t = y(_, o)),
				(n = y(_, ': ')),
				(a = y(_, f)),
				(r = y(_, ' (')),
				(i = y(_, u)),
				(c = y(_, ') ')),
				s && s.l(_),
				(e = R(_)),
				(h = O(_, 'BR', {}));
		},
		m(_, d) {
			b(_, t, d),
				b(_, n, d),
				b(_, a, d),
				b(_, r, d),
				b(_, i, d),
				b(_, c, d),
				s && s.m(_, d),
				b(_, e, d),
				b(_, h, d);
		},
		p(_, d) {
			d[0] & 12 && f !== (f = _[27].name + '') && q(a, f),
				d[0] & 12 && u !== (u = _[27].count + '') && q(i, u),
				_[27].count_value != 0
					? s
						? s.p(_, d)
						: ((s = se(_)), s.c(), s.m(e.parentNode, e))
					: s && (s.d(1), (s = null));
		},
		d(_) {
			_ && m(t),
				_ && m(n),
				_ && m(a),
				_ && m(r),
				_ && m(i),
				_ && m(c),
				s && s.d(_),
				_ && m(e),
				_ && m(h);
		}
	};
}
function re(l) {
	let o;
	function t(a, r) {
		return a[3][a[24].id].length == 1 ? ge : ye;
	}
	let n = t(l),
		f = n(l);
	return {
		c() {
			f.c(), (o = L());
		},
		l(a) {
			f.l(a), (o = L());
		},
		m(a, r) {
			f.m(a, r), b(a, o, r);
		},
		p(a, r) {
			n === (n = t(a)) && f ? f.p(a, r) : (f.d(1), (f = n(a)), f && (f.c(), f.m(o.parentNode, o)));
		},
		d(a) {
			f.d(a), a && m(o);
		}
	};
}
function we(l) {
	let o,
		t,
		n,
		f,
		a,
		r,
		u,
		i,
		c,
		e,
		h,
		s,
		_,
		d,
		p,
		w,
		V,
		N = l[0] && $(l);
	return {
		c() {
			(o = C()),
				(t = I('div')),
				(n = I('div')),
				(f = I('button')),
				(a = k('Download Matrix based on current filter result ')),
				(r = k(l[4])),
				(u = k('*')),
				(i = k(l[5])),
				(c = C()),
				(e = I('div')),
				(h = I('em')),
				(s = k('Click on text to select and deselect')),
				(_ = C()),
				(d = I('div')),
				N && N.c(),
				this.h();
		},
		l(D) {
			ce('[data-svelte="svelte-b35t88"]', Y.head).forEach(m),
				(o = R(D)),
				(t = O(D, 'DIV', { class: !0, style: !0 }));
			var B = S(t);
			n = O(B, 'DIV', {});
			var Q = S(n);
			f = O(Q, 'BUTTON', {});
			var M = S(f);
			(a = y(M, 'Download Matrix based on current filter result ')),
				(r = y(M, l[4])),
				(u = y(M, '*')),
				(i = y(M, l[5])),
				M.forEach(m),
				Q.forEach(m),
				(c = R(B)),
				(e = O(B, 'DIV', {}));
			var A = S(e);
			h = O(A, 'EM', {});
			var F = S(h);
			(s = y(F, 'Click on text to select and deselect')),
				F.forEach(m),
				A.forEach(m),
				(_ = R(B)),
				(d = O(B, 'DIV', { style: !0 }));
			var g = S(d);
			N && N.l(g), g.forEach(m), B.forEach(m), this.h();
		},
		h() {
			(Y.title = 'MiCoDa - Search'),
				K(d, 'display', 'flex'),
				j(t, 'class', 'content'),
				K(t, 'height', '100%');
		},
		m(D, H) {
			b(D, o, H),
				b(D, t, H),
				v(t, n),
				v(n, f),
				v(f, a),
				v(f, r),
				v(f, u),
				v(f, i),
				v(t, c),
				v(t, e),
				v(e, h),
				v(h, s),
				v(t, _),
				v(t, d),
				N && N.m(d, null),
				w || ((V = P(f, 'click', l[13])), (w = !0));
		},
		p(D, H) {
			H[0] & 16 && q(r, D[4]),
				H[0] & 32 && q(i, D[5]),
				D[0] ? (N ? N.p(D, H) : ((N = $(D)), N.c(), N.m(d, null))) : N && (N.d(1), (N = null));
		},
		i(D) {
			p ||
				de(() => {
					(p = be(t, ke, { delay: 100 })), p.start();
				});
		},
		o: he,
		d(D) {
			D && m(o), D && m(t), N && N.d(), (w = !1), V();
		}
	};
}
function Ee(l, o, t) {
	const n = pe,
		f = ve,
		a = !0;
	let r = '/neha/query',
		u = '/neha/download',
		i = [],
		c = !1,
		e = [],
		h = [
			{ id: 'host_kingdom', label: 'Host Kingdom' },
			{ id: 'host_phylum', label: 'Host Phylum' },
			{ id: 'host_class', label: 'Host Class' },
			{ id: 'host_order', label: 'Host Order' },
			{ id: 'host_family', label: 'Host Family' },
			{ id: 'host_genus', label: 'Host Genus' }
		],
		s = [
			{ id: 'countries', label: 'Countries' },
			{ id: 'realm', label: 'Realm' },
			{ id: 'year', label: 'Year' },
			{ id: 'environment', label: 'Environment' },
			{ id: 'found_otu', label: 'OTUs - just for testing' },
			{ id: 'domain', label: 'Domain - not allowed to filter' },
			{ id: 'family', label: 'Family - not allowed to filter' }
		],
		_ = [];
	(_.countries = 10),
		(_.domain = 10),
		(_.family = 10),
		(_.found_otu = 10),
		(_.realm = 10),
		(_.year = 10),
		(_.environment = 10),
		(_.host_kingdom = 10),
		(_.host_phylum = 10),
		(_.host_class = 10),
		(_.host_order = 10),
		(_.host_family = 10),
		(_.host_genus = 10);
	let d = [],
		p = '',
		w = '';
	async function V(g, E) {
		console.log(g, E),
			e[E] == g
				? (console.log('found'), console.log(e), delete e[E], console.log(e))
				: t(1, (e[E] = g), e),
			console.log('start query');
		let T = '';
		console.log(e),
			Object.keys(e).forEach((U) => {
				console.log(U, e[U]), (T = T + U + '=' + e[U] + '&');
			}),
			console.log(T),
			(i = await N(T)),
			console.log('end query'),
			t(3, (d.countries = i.facets.country), d),
			t(3, (d.domain = i.facets.domain), d),
			t(3, (d.family = i.facets.family), d),
			t(3, (d.found_otu = i.facets.found_otu), d),
			t(3, (d.realm = i.facets.realm), d),
			t(3, (d.year = i.facets.year), d),
			t(3, (d.environment = i.facets.environment), d),
			t(3, (d.host_kingdom = i.facets.host_kingdom), d),
			t(3, (d.host_phylum = i.facets.host_phylum), d),
			t(3, (d.host_class = i.facets.host_class), d),
			t(3, (d.host_order = i.facets.host_order), d),
			t(3, (d.host_family = i.facets.host_family), d),
			t(3, (d.host_genus = i.facets.host_genus), d),
			t(4, (p = d.found_otu.length)),
			t(5, (w = i.hit_count)),
			console.log(d),
			t(0, (c = !0));
	}
	V();
	async function N(g) {
		const E = await fetch(r + '?' + g, {
			method: 'GET',
			headers: { 'content-type': 'application/json' }
		});
		let T = [];
		return (T = await E.json()), T;
	}
	async function D(g) {
		fetch(u + '?' + g)
			.then((E) => E.blob())
			.then((E) => {
				const T = window.URL.createObjectURL(E),
					U = document.createElement('a');
				(U.style.display = 'none'),
					(U.href = T),
					(U.download = 'test.csv'),
					document.body.appendChild(U),
					U.click(),
					window.URL.revokeObjectURL(T);
			})
			.catch(() => alert('oh no!'));
	}
	async function H() {
		let g = '';
		console.log(e),
			Object.keys(e).forEach((E) => {
				console.log(E, e[E]), (g = g + E + '=' + e[E] + '&');
			}),
			D(g);
	}
	return [
		c,
		e,
		_,
		d,
		p,
		w,
		h,
		s,
		V,
		H,
		n,
		f,
		a,
		() => H(),
		(g, E) => V(g.name, E.id),
		(g) => t(2, (_[g.id] = _[g.id] + 5), _),
		(g, E) => V(g.name, E.id),
		(g) => t(2, (_[g.id] = _[g.id] + 5), _)
	];
}
class Oe extends ae {
	constructor(o) {
		super(), _e(this, o, Ee, we, ue, { hydrate: 10, router: 11, prerender: 12 }, null, [-1, -1]);
	}
	get hydrate() {
		return this.$$.ctx[10];
	}
	get router() {
		return this.$$.ctx[11];
	}
	get prerender() {
		return this.$$.ctx[12];
	}
}
export { Oe as default };
