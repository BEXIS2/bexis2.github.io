var rt = Object.defineProperty,
	st = Object.defineProperties;
var it = Object.getOwnPropertyDescriptors;
var ue = Object.getOwnPropertySymbols;
var Je = Object.prototype.hasOwnProperty,
	Ke = Object.prototype.propertyIsEnumerable;
var ze = (r, e, t) =>
		e in r ? rt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (r[e] = t),
	N = (r, e) => {
		for (var t in e || (e = {})) Je.call(e, t) && ze(r, t, e[t]);
		if (ue) for (var t of ue(e)) Ke.call(e, t) && ze(r, t, e[t]);
		return r;
	},
	re = (r, e) => st(r, it(e));
var Be = (r, e) => {
	var t = {};
	for (var s in r) Je.call(r, s) && e.indexOf(s) < 0 && (t[s] = r[s]);
	if (r != null && ue) for (var s of ue(r)) e.indexOf(s) < 0 && Ke.call(r, s) && (t[s] = r[s]);
	return t;
};
import {
	n as ye,
	s as tt,
	S as at,
	i as ot,
	e as ct,
	c as lt,
	a as ft,
	d as x,
	b as ve,
	f as K,
	g as D,
	t as ut,
	h as dt,
	j as pt,
	k as _t,
	l as P,
	m as ht,
	o as Y,
	p as I,
	q as M,
	r as T,
	u as mt,
	v as gt,
	w as Ee,
	x as V,
	y as ae,
	z as q,
	A as oe,
	B as ce,
	C as z,
	D as le,
	E as We
} from './chunks/index-3e01cf4c.js';
import { s as wt, a as bt } from './chunks/paths-396f020f.js';
const Z = [];
function de(r, e = ye) {
	let t;
	const s = new Set();
	function l(n) {
		if (tt(r, n) && ((r = n), t)) {
			const i = !Z.length;
			for (const a of s) a[1](), Z.push(a, r);
			if (i) {
				for (let a = 0; a < Z.length; a += 2) Z[a][0](Z[a + 1]);
				Z.length = 0;
			}
		}
	}
	function o(n) {
		l(n(r));
	}
	function f(n, i = ye) {
		const a = [n, i];
		return (
			s.add(a),
			s.size === 1 && (t = e(l) || ye),
			n(r),
			() => {
				s.delete(a), s.size === 0 && (t(), (t = null));
			}
		);
	}
	return { set: l, update: o, subscribe: f };
}
function yt(r) {
	let e, t, s;
	const l = [r[1] || {}];
	var o = r[0][0];
	function f(n) {
		let i = {};
		for (let a = 0; a < l.length; a += 1) i = le(i, l[a]);
		return { props: i };
	}
	return (
		o && (e = new o(f())),
		{
			c() {
				e && V(e.$$.fragment), (t = P());
			},
			l(n) {
				e && ae(e.$$.fragment, n), (t = P());
			},
			m(n, i) {
				e && q(e, n, i), D(n, t, i), (s = !0);
			},
			p(n, i) {
				const a = i & 2 ? oe(l, [ce(n[1] || {})]) : {};
				if (o !== (o = n[0][0])) {
					if (e) {
						Y();
						const d = e;
						I(d.$$.fragment, 1, 0, () => {
							z(d, 1);
						}),
							M();
					}
					o
						? ((e = new o(f())), V(e.$$.fragment), T(e.$$.fragment, 1), q(e, t.parentNode, t))
						: (e = null);
				} else o && e.$set(a);
			},
			i(n) {
				s || (e && T(e.$$.fragment, n), (s = !0));
			},
			o(n) {
				e && I(e.$$.fragment, n), (s = !1);
			},
			d(n) {
				n && x(t), e && z(e, n);
			}
		}
	);
}
function vt(r) {
	let e, t, s;
	const l = [r[1] || {}];
	var o = r[0][0];
	function f(n) {
		let i = { $$slots: { default: [Rt] }, $$scope: { ctx: n } };
		for (let a = 0; a < l.length; a += 1) i = le(i, l[a]);
		return { props: i };
	}
	return (
		o && (e = new o(f(r))),
		{
			c() {
				e && V(e.$$.fragment), (t = P());
			},
			l(n) {
				e && ae(e.$$.fragment, n), (t = P());
			},
			m(n, i) {
				e && q(e, n, i), D(n, t, i), (s = !0);
			},
			p(n, i) {
				const a = i & 2 ? oe(l, [ce(n[1] || {})]) : {};
				if ((i & 525 && (a.$$scope = { dirty: i, ctx: n }), o !== (o = n[0][0]))) {
					if (e) {
						Y();
						const d = e;
						I(d.$$.fragment, 1, 0, () => {
							z(d, 1);
						}),
							M();
					}
					o
						? ((e = new o(f(n))), V(e.$$.fragment), T(e.$$.fragment, 1), q(e, t.parentNode, t))
						: (e = null);
				} else o && e.$set(a);
			},
			i(n) {
				s || (e && T(e.$$.fragment, n), (s = !0));
			},
			o(n) {
				e && I(e.$$.fragment, n), (s = !1);
			},
			d(n) {
				n && x(t), e && z(e, n);
			}
		}
	);
}
function $t(r) {
	let e, t, s;
	const l = [r[2] || {}];
	var o = r[0][1];
	function f(n) {
		let i = {};
		for (let a = 0; a < l.length; a += 1) i = le(i, l[a]);
		return { props: i };
	}
	return (
		o && (e = new o(f())),
		{
			c() {
				e && V(e.$$.fragment), (t = P());
			},
			l(n) {
				e && ae(e.$$.fragment, n), (t = P());
			},
			m(n, i) {
				e && q(e, n, i), D(n, t, i), (s = !0);
			},
			p(n, i) {
				const a = i & 4 ? oe(l, [ce(n[2] || {})]) : {};
				if (o !== (o = n[0][1])) {
					if (e) {
						Y();
						const d = e;
						I(d.$$.fragment, 1, 0, () => {
							z(d, 1);
						}),
							M();
					}
					o
						? ((e = new o(f())), V(e.$$.fragment), T(e.$$.fragment, 1), q(e, t.parentNode, t))
						: (e = null);
				} else o && e.$set(a);
			},
			i(n) {
				s || (e && T(e.$$.fragment, n), (s = !0));
			},
			o(n) {
				e && I(e.$$.fragment, n), (s = !1);
			},
			d(n) {
				n && x(t), e && z(e, n);
			}
		}
	);
}
function kt(r) {
	let e, t, s;
	const l = [r[2] || {}];
	var o = r[0][1];
	function f(n) {
		let i = { $$slots: { default: [Et] }, $$scope: { ctx: n } };
		for (let a = 0; a < l.length; a += 1) i = le(i, l[a]);
		return { props: i };
	}
	return (
		o && (e = new o(f(r))),
		{
			c() {
				e && V(e.$$.fragment), (t = P());
			},
			l(n) {
				e && ae(e.$$.fragment, n), (t = P());
			},
			m(n, i) {
				e && q(e, n, i), D(n, t, i), (s = !0);
			},
			p(n, i) {
				const a = i & 4 ? oe(l, [ce(n[2] || {})]) : {};
				if ((i & 521 && (a.$$scope = { dirty: i, ctx: n }), o !== (o = n[0][1]))) {
					if (e) {
						Y();
						const d = e;
						I(d.$$.fragment, 1, 0, () => {
							z(d, 1);
						}),
							M();
					}
					o
						? ((e = new o(f(n))), V(e.$$.fragment), T(e.$$.fragment, 1), q(e, t.parentNode, t))
						: (e = null);
				} else o && e.$set(a);
			},
			i(n) {
				s || (e && T(e.$$.fragment, n), (s = !0));
			},
			o(n) {
				e && I(e.$$.fragment, n), (s = !1);
			},
			d(n) {
				n && x(t), e && z(e, n);
			}
		}
	);
}
function Et(r) {
	let e, t, s;
	const l = [r[3] || {}];
	var o = r[0][2];
	function f(n) {
		let i = {};
		for (let a = 0; a < l.length; a += 1) i = le(i, l[a]);
		return { props: i };
	}
	return (
		o && (e = new o(f())),
		{
			c() {
				e && V(e.$$.fragment), (t = P());
			},
			l(n) {
				e && ae(e.$$.fragment, n), (t = P());
			},
			m(n, i) {
				e && q(e, n, i), D(n, t, i), (s = !0);
			},
			p(n, i) {
				const a = i & 8 ? oe(l, [ce(n[3] || {})]) : {};
				if (o !== (o = n[0][2])) {
					if (e) {
						Y();
						const d = e;
						I(d.$$.fragment, 1, 0, () => {
							z(d, 1);
						}),
							M();
					}
					o
						? ((e = new o(f())), V(e.$$.fragment), T(e.$$.fragment, 1), q(e, t.parentNode, t))
						: (e = null);
				} else o && e.$set(a);
			},
			i(n) {
				s || (e && T(e.$$.fragment, n), (s = !0));
			},
			o(n) {
				e && I(e.$$.fragment, n), (s = !1);
			},
			d(n) {
				n && x(t), e && z(e, n);
			}
		}
	);
}
function Rt(r) {
	let e, t, s, l;
	const o = [kt, $t],
		f = [];
	function n(i, a) {
		return i[0][2] ? 0 : 1;
	}
	return (
		(e = n(r)),
		(t = f[e] = o[e](r)),
		{
			c() {
				t.c(), (s = P());
			},
			l(i) {
				t.l(i), (s = P());
			},
			m(i, a) {
				f[e].m(i, a), D(i, s, a), (l = !0);
			},
			p(i, a) {
				let d = e;
				(e = n(i)),
					e === d
						? f[e].p(i, a)
						: (Y(),
						  I(f[d], 1, 1, () => {
								f[d] = null;
						  }),
						  M(),
						  (t = f[e]),
						  t ? t.p(i, a) : ((t = f[e] = o[e](i)), t.c()),
						  T(t, 1),
						  t.m(s.parentNode, s));
			},
			i(i) {
				l || (T(t), (l = !0));
			},
			o(i) {
				I(t), (l = !1);
			},
			d(i) {
				f[e].d(i), i && x(s);
			}
		}
	);
}
function Ye(r) {
	let e,
		t = r[5] && Me(r);
	return {
		c() {
			(e = ct('div')), t && t.c(), this.h();
		},
		l(s) {
			e = lt(s, 'DIV', { id: !0, 'aria-live': !0, 'aria-atomic': !0, style: !0 });
			var l = ft(e);
			t && t.l(l), l.forEach(x), this.h();
		},
		h() {
			ve(e, 'id', 'svelte-announcer'),
				ve(e, 'aria-live', 'assertive'),
				ve(e, 'aria-atomic', 'true'),
				K(e, 'position', 'absolute'),
				K(e, 'left', '0'),
				K(e, 'top', '0'),
				K(e, 'clip', 'rect(0 0 0 0)'),
				K(e, 'clip-path', 'inset(50%)'),
				K(e, 'overflow', 'hidden'),
				K(e, 'white-space', 'nowrap'),
				K(e, 'width', '1px'),
				K(e, 'height', '1px');
		},
		m(s, l) {
			D(s, e, l), t && t.m(e, null);
		},
		p(s, l) {
			s[5] ? (t ? t.p(s, l) : ((t = Me(s)), t.c(), t.m(e, null))) : t && (t.d(1), (t = null));
		},
		d(s) {
			s && x(e), t && t.d();
		}
	};
}
function Me(r) {
	let e;
	return {
		c() {
			e = ut(r[6]);
		},
		l(t) {
			e = dt(t, r[6]);
		},
		m(t, s) {
			D(t, e, s);
		},
		p(t, s) {
			s & 64 && pt(e, t[6]);
		},
		d(t) {
			t && x(e);
		}
	};
}
function St(r) {
	let e, t, s, l, o;
	const f = [vt, yt],
		n = [];
	function i(d, R) {
		return d[0][1] ? 0 : 1;
	}
	(e = i(r)), (t = n[e] = f[e](r));
	let a = r[4] && Ye(r);
	return {
		c() {
			t.c(), (s = _t()), a && a.c(), (l = P());
		},
		l(d) {
			t.l(d), (s = ht(d)), a && a.l(d), (l = P());
		},
		m(d, R) {
			n[e].m(d, R), D(d, s, R), a && a.m(d, R), D(d, l, R), (o = !0);
		},
		p(d, [R]) {
			let v = e;
			(e = i(d)),
				e === v
					? n[e].p(d, R)
					: (Y(),
					  I(n[v], 1, 1, () => {
							n[v] = null;
					  }),
					  M(),
					  (t = n[e]),
					  t ? t.p(d, R) : ((t = n[e] = f[e](d)), t.c()),
					  T(t, 1),
					  t.m(s.parentNode, s)),
				d[4]
					? a
						? a.p(d, R)
						: ((a = Ye(d)), a.c(), a.m(l.parentNode, l))
					: a && (a.d(1), (a = null));
		},
		i(d) {
			o || (T(t), (o = !0));
		},
		o(d) {
			I(t), (o = !1);
		},
		d(d) {
			n[e].d(d), d && x(s), a && a.d(d), d && x(l);
		}
	};
}
function Lt(r, e, t) {
	let { stores: s } = e,
		{ page: l } = e,
		{ components: o } = e,
		{ props_0: f = null } = e,
		{ props_1: n = null } = e,
		{ props_2: i = null } = e;
	mt('__svelte__', s), gt(s.page.notify);
	let a = !1,
		d = !1,
		R = null;
	return (
		Ee(() => {
			const v = s.page.subscribe(() => {
				a && (t(5, (d = !0)), t(6, (R = document.title || 'untitled page')));
			});
			return t(4, (a = !0)), v;
		}),
		(r.$$set = (v) => {
			'stores' in v && t(7, (s = v.stores)),
				'page' in v && t(8, (l = v.page)),
				'components' in v && t(0, (o = v.components)),
				'props_0' in v && t(1, (f = v.props_0)),
				'props_1' in v && t(2, (n = v.props_1)),
				'props_2' in v && t(3, (i = v.props_2));
		}),
		(r.$$.update = () => {
			r.$$.dirty & 384 && s.page.set(l);
		}),
		[o, f, n, i, a, d, R, s, l]
	);
}
class Ut extends at {
	constructor(e) {
		super(),
			ot(this, e, Lt, St, tt, {
				stores: 7,
				page: 8,
				components: 0,
				props_0: 1,
				props_1: 2,
				props_2: 3
			});
	}
}
const At = 'modulepreload',
	Fe = {},
	Ot = '/micoda/_app/',
	se = function (e, t) {
		return !t || t.length === 0
			? e()
			: Promise.all(
					t.map((s) => {
						if (((s = `${Ot}${s}`), s in Fe)) return;
						Fe[s] = !0;
						const l = s.endsWith('.css'),
							o = l ? '[rel="stylesheet"]' : '';
						if (document.querySelector(`link[href="${s}"]${o}`)) return;
						const f = document.createElement('link');
						if (
							((f.rel = l ? 'stylesheet' : At),
							l || ((f.as = 'script'), (f.crossOrigin = '')),
							(f.href = s),
							document.head.appendChild(f),
							l)
						)
							return new Promise((n, i) => {
								f.addEventListener('load', n),
									f.addEventListener('error', () => i(new Error(`Unable to preload CSS for ${s}`)));
							});
					})
			  ).then(() => e());
	},
	Nt = {},
	Se = [
		() =>
			se(
				() => import('./pages/__layout.svelte-e3b89c37.js'),
				[
					'pages/__layout.svelte-e3b89c37.js',
					'assets/pages/__layout.svelte-3980588c.css',
					'chunks/index-3e01cf4c.js',
					'chunks/paths-396f020f.js'
				]
			),
		() =>
			se(
				() => import('./error.svelte-df658e5b.js'),
				['error.svelte-df658e5b.js', 'chunks/index-3e01cf4c.js']
			),
		() =>
			se(
				() => import('./pages/imprint.svelte-c15b112d.js'),
				['pages/imprint.svelte-c15b112d.js', 'chunks/index-3e01cf4c.js', 'chunks/env-859c48a7.js']
			),
		() =>
			se(
				() => import('./pages/index.svelte-c7498be2.js'),
				[
					'pages/index.svelte-c7498be2.js',
					'chunks/index-3e01cf4c.js',
					'chunks/env-859c48a7.js',
					'chunks/index-e6222c86.js'
				]
			),
		() =>
			se(
				() => import('./pages/project.svelte-4d1281de.js'),
				[
					'pages/project.svelte-4d1281de.js',
					'chunks/index-3e01cf4c.js',
					'chunks/env-859c48a7.js',
					'chunks/index-e6222c86.js'
				]
			)
	],
	Pt = { '': [[0, 3], [1]], imprint: [[0, 2], [1]], project: [[0, 4], [1]] };
function Ge(r) {
	return r instanceof Error || (r && r.name && r.message) ? r : new Error(JSON.stringify(r));
}
function Xe(r) {
	const e = r.status && r.status >= 400 && r.status <= 599 && !r.redirect;
	if (r.error || e) {
		const t = r.status;
		if (!r.error && e) return { status: t || 500, error: new Error() };
		const s = typeof r.error == 'string' ? new Error(r.error) : r.error;
		return s instanceof Error
			? !t || t < 400 || t > 599
				? (console.warn(
						'"error" returned from load() without a valid status code \u2014 defaulting to 500'
				  ),
				  { status: 500, error: s })
				: { status: t, error: s }
			: {
					status: 500,
					error: new Error(
						`"error" property returned from load() must be a string or instance of Error, received type "${typeof s}"`
					)
			  };
	}
	if (r.redirect) {
		if (!r.status || Math.floor(r.status / 100) !== 3)
			return {
				status: 500,
				error: new Error(
					'"redirect" property returned from load() must be accompanied by a 3xx status code'
				)
			};
		if (typeof r.redirect != 'string')
			return {
				status: 500,
				error: new Error('"redirect" property returned from load() must be a string')
			};
	}
	if (r.context)
		throw new Error(
			'You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.'
		);
	return r;
}
function It(r, e) {
	return r === '/' || e === 'ignore'
		? r
		: e === 'never'
		? r.endsWith('/')
			? r.slice(0, -1)
			: r
		: e === 'always' && /\/[^./]+$/.test(r)
		? r + '/'
		: r;
}
function Tt(r) {
	let e = 5381,
		t = r.length;
	if (typeof r == 'string') for (; t; ) e = (e * 33) ^ r.charCodeAt(--t);
	else for (; t; ) e = (e * 33) ^ r[--t];
	return (e >>> 0).toString(36);
}
function Ze(r) {
	let e = r.baseURI;
	if (!e) {
		const t = r.getElementsByTagName('base');
		e = t.length ? t[0].href : r.URL;
	}
	return e;
}
function Re() {
	return { x: pageXOffset, y: pageYOffset };
}
function He(r) {
	return r.composedPath().find((t) => t instanceof Node && t.nodeName.toUpperCase() === 'A');
}
function Qe(r) {
	return r instanceof SVGAElement ? new URL(r.href.baseVal, document.baseURI) : new URL(r.href);
}
function et(r) {
	const e = de(r);
	let t = !0;
	function s() {
		(t = !0), e.update((f) => f);
	}
	function l(f) {
		(t = !1), e.set(f);
	}
	function o(f) {
		let n;
		return e.subscribe((i) => {
			(n === void 0 || (t && i !== n)) && f((n = i));
		});
	}
	return { notify: s, set: l, subscribe: o };
}
function jt() {
	const { set: r, subscribe: e } = de(!1),
		t = '1649513071016';
	let s;
	async function l() {
		clearTimeout(s);
		const f = await fetch(`${bt}/_app/version.json`, {
			headers: { pragma: 'no-cache', 'cache-control': 'no-cache' }
		});
		if (f.ok) {
			const { version: n } = await f.json(),
				i = n !== t;
			return i && (r(!0), clearTimeout(s)), i;
		} else throw new Error(`Version check failed: ${f.status}`);
	}
	return { subscribe: e, check: l };
}
function xt(r, e) {
	let s = `script[sveltekit\\:data-type="data"][sveltekit\\:data-url=${JSON.stringify(
		typeof r == 'string' ? r : r.url
	)}]`;
	e && typeof e.body == 'string' && (s += `[sveltekit\\:data-body="${Tt(e.body)}"]`);
	const l = document.querySelector(s);
	if (l && l.textContent) {
		const o = JSON.parse(l.textContent),
			{ body: f } = o,
			n = Be(o, ['body']);
		return Promise.resolve(new Response(f, n));
	}
	return fetch(r, e);
}
const Ct = /^(\.\.\.)?(\w+)(?:=(\w+))?$/;
function Dt(r) {
	const e = [],
		t = [];
	let s = !0;
	return {
		pattern:
			r === ''
				? /^\/$/
				: new RegExp(
						`^${decodeURIComponent(r)
							.split(/(?:@[a-zA-Z0-9_-]+)?(?:\/|$)/)
							.map((o, f, n) => {
								const i = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(o);
								if (i) return e.push(i[1]), t.push(i[2]), '(?:/(.*))?';
								const a = f === n.length - 1;
								return (
									o &&
									'/' +
										o
											.split(/\[(.+?)\]/)
											.map((d, R) => {
												if (R % 2) {
													const [, v, H, F] = Ct.exec(d);
													return e.push(H), t.push(F), v ? '(.*?)' : '([^/]+?)';
												}
												return (
													a && d.includes('.') && (s = !1),
													d
														.normalize()
														.replace(/%5[Bb]/g, '[')
														.replace(/%5[Dd]/g, ']')
														.replace(/#/g, '%23')
														.replace(/\?/g, '%3F')
														.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
												);
											})
											.join('')
								);
							})
							.join('')}${s ? '/?' : ''}$`
				  ),
		names: e,
		types: t
	};
}
function Vt(r, e, t, s) {
	const l = {};
	for (let o = 0; o < e.length; o += 1) {
		const f = e[o],
			n = t[o],
			i = r[o + 1] || '';
		if (n) {
			const a = s[n];
			if (!a) throw new Error(`Missing "${n}" param matcher`);
			if (!a(i)) return;
		}
		l[f] = i;
	}
	return l;
}
function qt(r, e, t) {
	return Object.entries(e).map(([l, [o, f, n]]) => {
		const { pattern: i, names: a, types: d } = Dt(l);
		return {
			id: l,
			exec: (R) => {
				const v = i.exec(R);
				if (v) return Vt(v, a, d, t);
			},
			a: o.map((R) => r[R]),
			b: f.map((R) => r[R]),
			has_shadow: !!n
		};
	});
}
const nt = 'sveltekit:scroll',
	B = 'sveltekit:index',
	$e = qt(Se, Pt, Nt),
	zt = Se[0](),
	Jt = Se[1]();
let ie = {};
try {
	ie = JSON.parse(sessionStorage[nt]);
} catch {}
function ke(r) {
	ie[r] = Re();
}
function Kt({ target: r, session: e, base: t, trailing_slash: s }) {
	var Ce, De;
	const l = new Map(),
		o = new Set(),
		f = { url: et({}), page: et({}), navigating: de(null), session: de(e), updated: jt() },
		n = { id: null, promise: null },
		i = { before_navigate: [], after_navigate: [] };
	let a = { url: null, session_id: 0, branch: [] },
		d = !1,
		R = !0,
		v = !1,
		H = 1,
		F = null,
		Le,
		Ue,
		Ae = !1;
	f.session.subscribe(async (c) => {
		(Ue = c), Ae && ((H += 1), ge(new URL(location.href), [], !0));
	}),
		(Ae = !0);
	let pe = 0,
		G = !0,
		C = (De = (Ce = history.state) == null ? void 0 : Ce[B]) != null ? De : 0;
	C === 0 && history.replaceState(re(N({}, history.state), { [B]: 0 }), '', location.href);
	const _e = ie[C];
	_e && scrollTo(_e.x, _e.y);
	let he = !1,
		me,
		Oe,
		Ne;
	async function Pe(
		c,
		{ noscroll: _ = !1, replaceState: b = !1, keepfocus: u = !1, state: h = {} },
		w
	) {
		const m = new URL(c, Ze(document));
		if (G)
			return be({
				url: m,
				scroll: _ ? Re() : null,
				keepfocus: u,
				redirect_chain: w,
				details: { state: h, replaceState: b },
				accepted: () => {},
				blocked: () => {}
			});
		await te(m);
	}
	async function Ie(c) {
		const _ = xe(c);
		if (!_) throw new Error('Attempted to prefetch a URL that does not belong to this app');
		return (n.promise = je(_, !1)), (n.id = _.id), n.promise;
	}
	async function ge(c, _, b, u) {
		var g, k, S;
		const h = xe(c),
			w = (Oe = {});
		let m = h && (await je(h, b));
		if (
			(!m &&
				c.origin === location.origin &&
				c.pathname === location.pathname &&
				(m = await ee({
					status: 404,
					error: new Error(`Not found: ${c.pathname}`),
					url: c,
					routeId: null
				})),
			!m)
		) {
			await te(c);
			return;
		}
		if (Oe !== w) return;
		if ((o.clear(), m.redirect))
			if (_.length > 10 || _.includes(c.pathname))
				m = await ee({ status: 500, error: new Error('Redirect loop'), url: c, routeId: null });
			else {
				G
					? Pe(new URL(m.redirect, c).href, {}, [..._, c.pathname])
					: await te(new URL(m.redirect, location.href));
				return;
			}
		else
			((k = (g = m.props) == null ? void 0 : g.page) == null ? void 0 : k.status) >= 400 &&
				(await f.updated.check()) &&
				(await te(c));
		if (((v = !0), u && u.details)) {
			const { details: y } = u,
				L = y.replaceState ? 0 : 1;
			(y.state[B] = C += L), history[y.replaceState ? 'replaceState' : 'pushState'](y.state, '', c);
		}
		if ((d ? ((a = m.state), Le.$set(m.props)) : Te(m), u)) {
			const { scroll: y, keepfocus: L } = u;
			if (!L) {
				const p = document.body,
					E = p.getAttribute('tabindex');
				(S = getSelection()) == null || S.removeAllRanges(),
					(p.tabIndex = -1),
					p.focus(),
					E !== null ? p.setAttribute('tabindex', E) : p.removeAttribute('tabindex');
			}
			if ((await We(), R)) {
				const p = c.hash && document.getElementById(c.hash.slice(1));
				y ? scrollTo(y.x, y.y) : p ? p.scrollIntoView() : scrollTo(0, 0);
			}
		} else await We();
		(n.promise = null), (n.id = null), (R = !0), (v = !1), m.props.page && (me = m.props.page);
		const $ = m.state.branch[m.state.branch.length - 1];
		G = ($ == null ? void 0 : $.module.router) !== !1;
	}
	function Te(c) {
		a = c.state;
		const _ = document.querySelector('style[data-svelte]');
		if (
			(_ && _.remove(),
			(me = c.props.page),
			(Le = new Ut({ target: r, props: re(N({}, c.props), { stores: f }), hydrate: !0 })),
			(d = !0),
			G)
		) {
			const b = { from: null, to: new URL(location.href) };
			i.after_navigate.forEach((u) => u(b));
		}
	}
	async function we({ url: c, params: _, stuff: b, branch: u, status: h, error: w, routeId: m }) {
		var L;
		const $ = u.filter(Boolean),
			g = $.find((p) => {
				var E;
				return (E = p.loaded) == null ? void 0 : E.redirect;
			}),
			k = {
				redirect: (L = g == null ? void 0 : g.loaded) == null ? void 0 : L.redirect,
				state: { url: c, params: _, branch: u, session_id: H },
				props: { components: $.map((p) => p.module.default) }
			};
		for (let p = 0; p < $.length; p += 1) {
			const E = $[p].loaded;
			k.props[`props_${p}`] = E ? await E.props : null;
		}
		if (!a.url || c.href !== a.url.href) {
			k.props.page = { error: w, params: _, routeId: m, status: h, stuff: b, url: c };
			const p = (E, J) => {
				Object.defineProperty(k.props.page, E, {
					get: () => {
						throw new Error(`$page.${E} has been replaced by $page.url.${J}`);
					}
				});
			};
			p('origin', 'origin'), p('path', 'pathname'), p('query', 'searchParams');
		}
		const S = $[$.length - 1],
			y = S.loaded && S.loaded.maxage;
		if (y) {
			const p = c.pathname + c.search;
			let E = !1;
			const J = () => {
					l.get(p) === k && l.delete(p), U(), clearTimeout(X);
				},
				X = setTimeout(J, y * 1e3),
				U = f.session.subscribe(() => {
					E && J();
				});
			(E = !0), l.set(p, k);
		}
		return k;
	}
	async function Q({
		status: c,
		error: _,
		module: b,
		url: u,
		params: h,
		stuff: w,
		props: m,
		routeId: $
	}) {
		const g = {
			module: b,
			uses: { params: new Set(), url: !1, session: !1, stuff: !1, dependencies: new Set() },
			loaded: null,
			stuff: w
		};
		m && g.uses.dependencies.add(u.href);
		const k = {};
		for (const y in h)
			Object.defineProperty(k, y, {
				get() {
					return g.uses.params.add(y), h[y];
				},
				enumerable: !0
			});
		const S = Ue;
		if (b.load) {
			const y = {
				routeId: $,
				params: k,
				props: m || {},
				get url() {
					return (g.uses.url = !0), u;
				},
				get session() {
					return (g.uses.session = !0), S;
				},
				get stuff() {
					return (g.uses.stuff = !0), N({}, w);
				},
				fetch(p, E) {
					const J = typeof p == 'string' ? p : p.url,
						{ href: X } = new URL(J, u);
					return g.uses.dependencies.add(X), d ? fetch(p, E) : xt(p, E);
				}
			};
			_ && ((y.status = c), (y.error = _));
			const L = await b.load.call(null, y);
			if (!L) throw new Error('load function must return a value');
			(g.loaded = Xe(L)), g.loaded.stuff && (g.stuff = g.loaded.stuff);
		} else m && (g.loaded = Xe({ props: m }));
		return g;
	}
	async function je({ id: c, url: _, params: b, route: u }, h) {
		var E, J, X;
		if (n.id === c && n.promise) return n.promise;
		if (!h) {
			const U = l.get(c);
			if (U) return U;
		}
		const { a: w, b: m, has_shadow: $ } = u,
			g = a.url && {
				url: c !== a.url.pathname + a.url.search,
				params: Object.keys(b).filter((U) => a.params[U] !== b[U]),
				session: H !== a.session_id
			};
		let k = [],
			S = {},
			y = !1,
			L = 200,
			p;
		w.forEach((U) => U());
		e: for (let U = 0; U < w.length; U += 1) {
			let A;
			try {
				if (!w[U]) continue;
				const O = await w[U](),
					j = a.branch[U];
				if (
					!j ||
					O !== j.module ||
					(g.url && j.uses.url) ||
					g.params.some((W) => j.uses.params.has(W)) ||
					(g.session && j.uses.session) ||
					Array.from(j.uses.dependencies).some((W) => o.has(W)) ||
					(y && j.uses.stuff)
				) {
					let W = {};
					const Ve = $ && U === w.length - 1;
					if (Ve) {
						const ne = await fetch(
							`${_.pathname}${_.pathname.endsWith('/') ? '' : '/'}__data.json${_.search}`,
							{ headers: { 'x-sveltekit-load': 'true' } }
						);
						if (ne.ok) {
							const qe = ne.headers.get('x-sveltekit-location');
							if (qe) return { redirect: qe, props: {}, state: a };
							W = ne.status === 204 ? {} : await ne.json();
						} else (L = ne.status), (p = new Error('Failed to load data'));
					}
					if (
						(p ||
							(A = await Q({ module: O, url: _, params: b, props: W, stuff: S, routeId: u.id })),
						A && (Ve && (A.uses.url = !0), A.loaded))
					) {
						if (A.loaded.fallthrough)
							throw new Error(
								'fallthrough is no longer supported. Use matchers instead: https://kit.svelte.dev/docs/routing#advanced-routing-matching'
							);
						if (
							(A.loaded.error && ((L = A.loaded.status), (p = A.loaded.error)), A.loaded.redirect)
						)
							return { redirect: A.loaded.redirect, props: {}, state: a };
						A.loaded.stuff && (y = !0);
					}
				} else A = j;
			} catch (O) {
				(L = 500), (p = Ge(O));
			}
			if (p) {
				for (; U--; )
					if (m[U]) {
						let O,
							j,
							fe = U;
						for (; !(j = k[fe]); ) fe -= 1;
						try {
							if (
								((O = await Q({
									status: L,
									error: p,
									module: await m[U](),
									url: _,
									params: b,
									stuff: j.stuff,
									routeId: u.id
								})),
								(E = O == null ? void 0 : O.loaded) != null && E.error)
							)
								continue;
							(J = O == null ? void 0 : O.loaded) != null &&
								J.stuff &&
								(S = N(N({}, S), O.loaded.stuff)),
								(k = k.slice(0, fe + 1).concat(O));
							break e;
						} catch {
							continue;
						}
					}
				return await ee({ status: L, error: p, url: _, routeId: u.id });
			} else
				(X = A == null ? void 0 : A.loaded) != null && X.stuff && (S = N(N({}, S), A.loaded.stuff)),
					k.push(A);
		}
		return await we({ url: _, params: b, stuff: S, branch: k, status: L, error: p, routeId: u.id });
	}
	async function ee({ status: c, error: _, url: b, routeId: u }) {
		var $, g;
		const h = {},
			w = await Q({ module: await zt, url: b, params: h, stuff: {}, routeId: u }),
			m = await Q({
				status: c,
				error: _,
				module: await Jt,
				url: b,
				params: h,
				stuff: (w && w.loaded && w.loaded.stuff) || {},
				routeId: u
			});
		return await we({
			url: b,
			params: h,
			stuff: N(
				N({}, ($ = w == null ? void 0 : w.loaded) == null ? void 0 : $.stuff),
				(g = m == null ? void 0 : m.loaded) == null ? void 0 : g.stuff
			),
			branch: [w, m],
			status: c,
			error: _,
			routeId: u
		});
	}
	function xe(c) {
		if (c.origin !== location.origin || !c.pathname.startsWith(t)) return;
		const _ = decodeURI(c.pathname.slice(t.length) || '/');
		for (const b of $e) {
			const u = b.exec(_);
			if (u) return { id: c.pathname + c.search, route: b, params: u, url: c };
		}
	}
	async function be({
		url: c,
		scroll: _,
		keepfocus: b,
		redirect_chain: u,
		details: h,
		accepted: w,
		blocked: m
	}) {
		const $ = a.url;
		let g = !1;
		const k = { from: $, to: c, cancel: () => (g = !0) };
		if ((i.before_navigate.forEach((p) => p(k)), g)) {
			m();
			return;
		}
		const S = It(c.pathname, s),
			y = new URL(c.origin + S + c.search + c.hash);
		ke(C), w(), pe++;
		const L = (Ne = {});
		if (
			(d && f.navigating.set({ from: a.url, to: y }),
			await ge(y, u, !1, { scroll: _, keepfocus: b, details: h }),
			pe--,
			Ne === L && !pe)
		) {
			const p = { from: $, to: y };
			i.after_navigate.forEach((E) => E(p)), f.navigating.set(null);
		}
	}
	function te(c) {
		return (location.href = c.href), new Promise(() => {});
	}
	return {
		after_navigate: (c) => {
			Ee(
				() => (
					i.after_navigate.push(c),
					() => {
						const _ = i.after_navigate.indexOf(c);
						i.after_navigate.splice(_, 1);
					}
				)
			);
		},
		before_navigate: (c) => {
			Ee(
				() => (
					i.before_navigate.push(c),
					() => {
						const _ = i.before_navigate.indexOf(c);
						i.before_navigate.splice(_, 1);
					}
				)
			);
		},
		disable_scroll_handling: () => {
			(v || !d) && (R = !1);
		},
		goto: (c, _ = {}) => Pe(c, _, []),
		invalidate: (c) => {
			const { href: _ } = new URL(c, location.href);
			return (
				o.add(_),
				F ||
					(F = Promise.resolve().then(async () => {
						await ge(new URL(location.href), [], !0), (F = null);
					})),
				F
			);
		},
		prefetch: async (c) => {
			const _ = new URL(c, Ze(document));
			await Ie(_);
		},
		prefetch_routes: async (c) => {
			const b = (c ? $e.filter((u) => c.some((h) => u.exec(h))) : $e).map((u) =>
				Promise.all(u.a.map((h) => h()))
			);
			await Promise.all(b);
		},
		_start_router: () => {
			(history.scrollRestoration = 'manual'),
				addEventListener('beforeunload', (u) => {
					let h = !1;
					const w = { from: a.url, to: null, cancel: () => (h = !0) };
					i.before_navigate.forEach((m) => m(w)),
						h ? (u.preventDefault(), (u.returnValue = '')) : (history.scrollRestoration = 'auto');
				}),
				addEventListener('visibilitychange', () => {
					if (document.visibilityState === 'hidden') {
						ke(C);
						try {
							sessionStorage[nt] = JSON.stringify(ie);
						} catch {}
					}
				});
			const c = (u) => {
				const h = He(u);
				h && h.href && h.hasAttribute('sveltekit:prefetch') && Ie(Qe(h));
			};
			let _;
			const b = (u) => {
				clearTimeout(_),
					(_ = setTimeout(() => {
						var h;
						(h = u.target) == null ||
							h.dispatchEvent(new CustomEvent('sveltekit:trigger_prefetch', { bubbles: !0 }));
					}, 20));
			};
			addEventListener('touchstart', c),
				addEventListener('mousemove', b),
				addEventListener('sveltekit:trigger_prefetch', c),
				addEventListener('click', (u) => {
					if (
						!G ||
						u.button ||
						u.which !== 1 ||
						u.metaKey ||
						u.ctrlKey ||
						u.shiftKey ||
						u.altKey ||
						u.defaultPrevented
					)
						return;
					const h = He(u);
					if (!h || !h.href) return;
					const w = h instanceof SVGAElement,
						m = Qe(h);
					if (!w && m.origin === 'null') return;
					const $ = (h.getAttribute('rel') || '').split(/\s+/);
					if (
						h.hasAttribute('download') ||
						$.includes('external') ||
						(w ? h.target.baseVal : h.target)
					)
						return;
					if (m.href === location.href) {
						location.hash || u.preventDefault();
						return;
					}
					const [g, k] = m.href.split('#');
					if (k !== void 0 && g === location.href.split('#')[0]) {
						(he = !0), ke(C), f.page.set(re(N({}, me), { url: m })), f.page.notify();
						return;
					}
					be({
						url: m,
						scroll: h.hasAttribute('sveltekit:noscroll') ? Re() : null,
						keepfocus: !1,
						redirect_chain: [],
						details: { state: {}, replaceState: !1 },
						accepted: () => u.preventDefault(),
						blocked: () => u.preventDefault()
					});
				}),
				addEventListener('popstate', (u) => {
					if (u.state && G) {
						if (u.state[B] === C) return;
						be({
							url: new URL(location.href),
							scroll: ie[u.state[B]],
							keepfocus: !1,
							redirect_chain: [],
							details: null,
							accepted: () => {
								C = u.state[B];
							},
							blocked: () => {
								const h = C - u.state[B];
								history.go(h);
							}
						});
					}
				}),
				addEventListener('hashchange', () => {
					he &&
						((he = !1),
						history.replaceState(re(N({}, history.state), { [B]: ++C }), '', location.href));
				});
		},
		_hydrate: async ({ status: c, error: _, nodes: b, params: u, routeId: h }) => {
			const w = new URL(location.href),
				m = [];
			let $ = {},
				g,
				k;
			try {
				for (let S = 0; S < b.length; S += 1) {
					const y = S === b.length - 1;
					let L;
					if (y) {
						const E = document.querySelector('script[sveltekit\\:data-type="props"]');
						E && (L = JSON.parse(E.textContent));
					}
					const p = await Q({
						module: await b[S],
						url: w,
						params: u,
						stuff: $,
						status: y ? c : void 0,
						error: y ? _ : void 0,
						props: L,
						routeId: h
					});
					if ((L && (p.uses.dependencies.add(w.href), (p.uses.url = !0)), m.push(p), p && p.loaded))
						if (p.loaded.error) {
							if (_) throw p.loaded.error;
							k = { status: p.loaded.status, error: p.loaded.error, url: w, routeId: h };
						} else p.loaded.stuff && ($ = N(N({}, $), p.loaded.stuff));
				}
				g = k
					? await ee(k)
					: await we({ url: w, params: u, stuff: $, branch: m, status: c, error: _, routeId: h });
			} catch (S) {
				if (_) throw S;
				g = await ee({ status: 500, error: Ge(S), url: w, routeId: h });
			}
			g.redirect && (await te(new URL(g.redirect, location.href))), Te(g);
		}
	};
}
async function Mt({
	paths: r,
	target: e,
	session: t,
	route: s,
	spa: l,
	trailing_slash: o,
	hydrate: f
}) {
	const n = Kt({ target: e, session: t, base: r.base, trailing_slash: o });
	wt(r),
		f && (await n._hydrate(f)),
		s && (l && n.goto(location.href, { replaceState: !0 }), n._start_router()),
		dispatchEvent(new CustomEvent('sveltekit:start'));
}
export { Mt as start };
