!(function (a) {
	"function" == typeof define && define.amd && define.amd.jQuery
		? define(["jquery"], a)
		: a("undefined" != typeof module && module.exports ? require("jquery") : jQuery);
})(function (a) {
	"use strict";
	function b(b) {
		return (
			!b || void 0 !== b.allowPageScroll || (void 0 === b.swipe && void 0 === b.swipeStatus) || (b.allowPageScroll = k),
			void 0 !== b.click && void 0 === b.tap && (b.tap = b.click),
			b || (b = {}),
			(b = a.extend({}, a.fn.swipe.defaults, b)),
			this.each(function () {
				var d = a(this),
					e = d.data(C);
				e || ((e = new c(this, b)), d.data(C, e));
			})
		);
	}
	function c(b, c) {
		function d(b) {
			if (!(jb() || a(b.target).closest(c.excludedElements, Tb).length > 0)) {
				var d = b.originalEvent ? b.originalEvent : b;
				if (!d.pointerType || "mouse" != d.pointerType || 0 != c.fallbackToMouseEvents) {
					var e,
						f = d.touches,
						g = f ? f[0] : d;
					return (
						(Ub = v),
						f ? (Vb = f.length) : c.preventDefaultEvents !== !1 && b.preventDefault(),
						(Jb = 0),
						(Kb = null),
						(Lb = null),
						(Rb = null),
						(Mb = 0),
						(Nb = 0),
						(Ob = 0),
						(Pb = 1),
						(Qb = 0),
						(Sb = qb()),
						hb(),
						lb(0, g),
						!f || Vb === c.fingers || c.fingers === t || R()
							? ((Xb = zb()),
							  2 == Vb && (lb(1, f[1]), (Nb = Ob = tb(Wb[0].start, Wb[1].start))),
							  (c.swipeStatus || c.pinchStatus) && (e = J(d, Ub)))
							: (e = !1),
						e === !1
							? ((Ub = y), J(d, Ub), e)
							: (c.hold &&
									(bc = setTimeout(
										a.proxy(function () {
											Tb.trigger("hold", [d.target]), c.hold && (e = c.hold.call(Tb, d, d.target));
										}, this),
										c.longTapThreshold
									)),
							  kb(!0),
							  null)
					);
				}
			}
		}
		function D(a) {
			var b = a.originalEvent ? a.originalEvent : a;
			if (Ub !== x && Ub !== y && !ib()) {
				var d,
					e = b.touches,
					f = e ? e[0] : b,
					g = mb(f);
				if (
					((Yb = zb()),
					e && (Vb = e.length),
					c.hold && clearTimeout(bc),
					(Ub = w),
					2 == Vb &&
						(0 == Nb
							? (lb(1, e[1]), (Nb = Ob = tb(Wb[0].start, Wb[1].start)))
							: (mb(e[1]), (Ob = tb(Wb[0].end, Wb[1].end)), (Rb = vb(Wb[0].end, Wb[1].end))),
						(Pb = ub(Nb, Ob)),
						(Qb = Math.abs(Nb - Ob))),
					Vb === c.fingers || c.fingers === t || !e || R())
				) {
					if (
						((Kb = yb(g.start, g.end)),
						(Lb = yb(g.last, g.end)),
						P(a, Lb),
						(Jb = wb(g.start, g.end)),
						(Mb = sb()),
						ob(Kb, Jb),
						(d = J(b, Ub)),
						!c.triggerOnTouchEnd || c.triggerOnTouchLeave)
					) {
						var h = !0;
						if (c.triggerOnTouchLeave) {
							var i = Ab(this);
							h = Bb(g.end, i);
						}
						!c.triggerOnTouchEnd && h ? (Ub = I(w)) : c.triggerOnTouchLeave && !h && (Ub = I(x)),
							(Ub != y && Ub != x) || J(b, Ub);
					}
				} else (Ub = y), J(b, Ub);
				d === !1 && ((Ub = y), J(b, Ub));
			}
		}
		function E(a) {
			var b = a.originalEvent ? a.originalEvent : a,
				d = b.touches;
			if (d) {
				if (d.length && !ib()) return gb(b), !0;
				if (d.length && ib()) return !0;
			}
			return (
				ib() && (Vb = $b),
				(Yb = zb()),
				(Mb = sb()),
				M() || !L()
					? ((Ub = y), J(b, Ub))
					: c.triggerOnTouchEnd || (c.triggerOnTouchEnd === !1 && Ub === w)
					? (c.preventDefaultEvents !== !1 && a.cancelable !== !1 && a.preventDefault(), (Ub = x), J(b, Ub))
					: !c.triggerOnTouchEnd && Y()
					? ((Ub = x), K(b, Ub, o))
					: Ub === w && ((Ub = y), J(b, Ub)),
				kb(!1),
				null
			);
		}
		function F() {
			(Vb = 0), (Yb = 0), (Xb = 0), (Nb = 0), (Ob = 0), (Pb = 1), hb(), kb(!1);
		}
		function G(a) {
			var b = a.originalEvent ? a.originalEvent : a;
			c.triggerOnTouchLeave && ((Ub = I(x)), J(b, Ub));
		}
		function H() {
			Tb.unbind(Eb, d), Tb.unbind(Ib, F), Tb.unbind(Fb, D), Tb.unbind(Gb, E), Hb && Tb.unbind(Hb, G), kb(!1);
		}
		function I(a) {
			var b = a,
				d = O(),
				e = L(),
				f = M();
			return (
				!d || f
					? (b = y)
					: !e || a != w || (c.triggerOnTouchEnd && !c.triggerOnTouchLeave)
					? !e && a == x && c.triggerOnTouchLeave && (b = y)
					: (b = x),
				b
			);
		}
		function J(a, b) {
			var c,
				d = a.touches;
			return (
				(V() || U()) && (c = K(a, b, m)),
				(S() || R()) && c !== !1 && (c = K(a, b, n)),
				eb() && c !== !1 ? (c = K(a, b, p)) : fb() && c !== !1 ? (c = K(a, b, q)) : db() && c !== !1 && (c = K(a, b, o)),
				b === y && F(a),
				b === x && (d ? d.length || F(a) : F(a)),
				c
			);
		}
		function K(b, d, k) {
			var l;
			if (k == m) {
				if (
					(Tb.trigger("swipeStatus", [d, Kb || null, Jb || 0, Mb || 0, Vb, Wb, Lb]),
					c.swipeStatus && ((l = c.swipeStatus.call(Tb, b, d, Kb || null, Jb || 0, Mb || 0, Vb, Wb, Lb)), l === !1))
				)
					return !1;
				if (d == x && T()) {
					if (
						(clearTimeout(ac),
						clearTimeout(bc),
						Tb.trigger("swipe", [Kb, Jb, Mb, Vb, Wb, Lb]),
						c.swipe && ((l = c.swipe.call(Tb, b, Kb, Jb, Mb, Vb, Wb, Lb)), l === !1))
					)
						return !1;
					switch (Kb) {
						case e:
							Tb.trigger("swipeLeft", [Kb, Jb, Mb, Vb, Wb, Lb]),
								c.swipeLeft && (l = c.swipeLeft.call(Tb, b, Kb, Jb, Mb, Vb, Wb, Lb));
							break;
						case f:
							Tb.trigger("swipeRight", [Kb, Jb, Mb, Vb, Wb, Lb]),
								c.swipeRight && (l = c.swipeRight.call(Tb, b, Kb, Jb, Mb, Vb, Wb, Lb));
							break;
						case g:
							Tb.trigger("swipeUp", [Kb, Jb, Mb, Vb, Wb, Lb]),
								c.swipeUp && (l = c.swipeUp.call(Tb, b, Kb, Jb, Mb, Vb, Wb, Lb));
							break;
						case h:
							Tb.trigger("swipeDown", [Kb, Jb, Mb, Vb, Wb, Lb]),
								c.swipeDown && (l = c.swipeDown.call(Tb, b, Kb, Jb, Mb, Vb, Wb, Lb));
					}
				}
			}
			if (k == n) {
				if (
					(Tb.trigger("pinchStatus", [d, Rb || null, Qb || 0, Mb || 0, Vb, Pb, Wb]),
					c.pinchStatus && ((l = c.pinchStatus.call(Tb, b, d, Rb || null, Qb || 0, Mb || 0, Vb, Pb, Wb)), l === !1))
				)
					return !1;
				if (d == x && Q())
					switch (Rb) {
						case i:
							Tb.trigger("pinchIn", [Rb || null, Qb || 0, Mb || 0, Vb, Pb, Wb]),
								c.pinchIn && (l = c.pinchIn.call(Tb, b, Rb || null, Qb || 0, Mb || 0, Vb, Pb, Wb));
							break;
						case j:
							Tb.trigger("pinchOut", [Rb || null, Qb || 0, Mb || 0, Vb, Pb, Wb]),
								c.pinchOut && (l = c.pinchOut.call(Tb, b, Rb || null, Qb || 0, Mb || 0, Vb, Pb, Wb));
					}
			}
			return (
				k == o
					? (d !== y && d !== x) ||
					  (clearTimeout(ac),
					  clearTimeout(bc),
					  Z() && !ab()
							? ((_b = zb()),
							  (ac = setTimeout(
									a.proxy(function () {
										(_b = null), Tb.trigger("tap", [b.target]), c.tap && (l = c.tap.call(Tb, b, b.target));
									}, this),
									c.doubleTapThreshold
							  )))
							: ((_b = null), Tb.trigger("tap", [b.target]), c.tap && (l = c.tap.call(Tb, b, b.target))))
					: k == p
					? (d !== y && d !== x) ||
					  (clearTimeout(ac),
					  clearTimeout(bc),
					  (_b = null),
					  Tb.trigger("doubletap", [b.target]),
					  c.doubleTap && (l = c.doubleTap.call(Tb, b, b.target)))
					: k == q &&
					  ((d !== y && d !== x) ||
							(clearTimeout(ac),
							(_b = null),
							Tb.trigger("longtap", [b.target]),
							c.longTap && (l = c.longTap.call(Tb, b, b.target)))),
				l
			);
		}
		function L() {
			var a = !0;
			return null !== c.threshold && (a = Jb >= c.threshold), a;
		}
		function M() {
			var a = !1;
			return null !== c.cancelThreshold && null !== Kb && (a = pb(Kb) - Jb >= c.cancelThreshold), a;
		}
		function N() {
			return null === c.pinchThreshold || Qb >= c.pinchThreshold;
		}
		function O() {
			var a;
			return (a = !c.maxTimeThreshold || !(Mb >= c.maxTimeThreshold));
		}
		function P(a, b) {
			if (c.preventDefaultEvents !== !1)
				if (c.allowPageScroll === k) a.preventDefault();
				else {
					var d = c.allowPageScroll === l;
					switch (b) {
						case e:
							((c.swipeLeft && d) || (!d && c.allowPageScroll != r)) && a.preventDefault();
							break;
						case f:
							((c.swipeRight && d) || (!d && c.allowPageScroll != r)) && a.preventDefault();
							break;
						case g:
							((c.swipeUp && d) || (!d && c.allowPageScroll != s)) && a.preventDefault();
							break;
						case h:
							((c.swipeDown && d) || (!d && c.allowPageScroll != s)) && a.preventDefault();
							break;
						case k:
					}
				}
		}
		function Q() {
			var a = W(),
				b = X(),
				c = N();
			return a && b && c;
		}
		function R() {
			return !!(c.pinchStatus || c.pinchIn || c.pinchOut);
		}
		function S() {
			return !(!Q() || !R());
		}
		function T() {
			var a = O(),
				b = L(),
				c = W(),
				d = X(),
				e = M(),
				f = !e && d && c && b && a;
			return f;
		}
		function U() {
			return !!(c.swipe || c.swipeStatus || c.swipeLeft || c.swipeRight || c.swipeUp || c.swipeDown);
		}
		function V() {
			return !(!T() || !U());
		}
		function W() {
			return Vb === c.fingers || c.fingers === t || !z;
		}
		function X() {
			return 0 !== Wb[0].end.x;
		}
		function Y() {
			return !!c.tap;
		}
		function Z() {
			return !!c.doubleTap;
		}
		function $() {
			return !!c.longTap;
		}
		function _() {
			if (null == _b) return !1;
			var a = zb();
			return Z() && a - _b <= c.doubleTapThreshold;
		}
		function ab() {
			return _();
		}
		function bb() {
			return (1 === Vb || !z) && (isNaN(Jb) || Jb < c.threshold);
		}
		function cb() {
			return Mb > c.longTapThreshold && Jb < u;
		}
		function db() {
			return !(!bb() || !Y());
		}
		function eb() {
			return !(!_() || !Z());
		}
		function fb() {
			return !(!cb() || !$());
		}
		function gb(a) {
			(Zb = zb()), ($b = a.touches.length + 1);
		}
		function hb() {
			(Zb = 0), ($b = 0);
		}
		function ib() {
			var a = !1;
			if (Zb) {
				var b = zb() - Zb;
				b <= c.fingerReleaseThreshold && (a = !0);
			}
			return a;
		}
		function jb() {
			return !(Tb.data(C + "_intouch") !== !0);
		}
		function kb(a) {
			Tb &&
				(a === !0
					? (Tb.bind(Fb, D), Tb.bind(Gb, E), Hb && Tb.bind(Hb, G))
					: (Tb.unbind(Fb, D, !1), Tb.unbind(Gb, E, !1), Hb && Tb.unbind(Hb, G, !1)),
				Tb.data(C + "_intouch", a === !0));
		}
		function lb(a, b) {
			var c = { start: { x: 0, y: 0 }, last: { x: 0, y: 0 }, end: { x: 0, y: 0 } };
			return (
				(c.start.x = c.last.x = c.end.x = b.pageX || b.clientX),
				(c.start.y = c.last.y = c.end.y = b.pageY || b.clientY),
				(Wb[a] = c),
				c
			);
		}
		function mb(a) {
			var b = void 0 !== a.identifier ? a.identifier : 0,
				c = nb(b);
			return (
				null === c && (c = lb(b, a)),
				(c.last.x = c.end.x),
				(c.last.y = c.end.y),
				(c.end.x = a.pageX || a.clientX),
				(c.end.y = a.pageY || a.clientY),
				c
			);
		}
		function nb(a) {
			return Wb[a] || null;
		}
		function ob(a, b) {
			a != k && ((b = Math.max(b, pb(a))), (Sb[a].distance = b));
		}
		function pb(a) {
			return Sb[a] ? Sb[a].distance : void 0;
		}
		function qb() {
			var a = {};
			return (a[e] = rb(e)), (a[f] = rb(f)), (a[g] = rb(g)), (a[h] = rb(h)), a;
		}
		function rb(a) {
			return { direction: a, distance: 0 };
		}
		function sb() {
			return Yb - Xb;
		}
		function tb(a, b) {
			var c = Math.abs(a.x - b.x),
				d = Math.abs(a.y - b.y);
			return Math.round(Math.sqrt(c * c + d * d));
		}
		function ub(a, b) {
			var c = (b / a) * 1;
			return c.toFixed(2);
		}
		function vb() {
			return Pb < 1 ? j : i;
		}
		function wb(a, b) {
			return Math.round(Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2)));
		}
		function xb(a, b) {
			var c = a.x - b.x,
				d = b.y - a.y,
				e = Math.atan2(d, c),
				f = Math.round((180 * e) / Math.PI);
			return f < 0 && (f = 360 - Math.abs(f)), f;
		}
		function yb(a, b) {
			if (Cb(a, b)) return k;
			var c = xb(a, b);
			return c <= 45 && c >= 0 ? e : c <= 360 && c >= 315 ? e : c >= 135 && c <= 225 ? f : c > 45 && c < 135 ? h : g;
		}
		function zb() {
			var a = new Date();
			return a.getTime();
		}
		function Ab(b) {
			b = a(b);
			var c = b.offset(),
				d = { left: c.left, right: c.left + b.outerWidth(), top: c.top, bottom: c.top + b.outerHeight() };
			return d;
		}
		function Bb(a, b) {
			return a.x > b.left && a.x < b.right && a.y > b.top && a.y < b.bottom;
		}
		function Cb(a, b) {
			return a.x == b.x && a.y == b.y;
		}
		var c = a.extend({}, c),
			Db = z || B || !c.fallbackToMouseEvents,
			Eb = Db ? (B ? (A ? "MSPointerDown" : "pointerdown") : "touchstart") : "mousedown",
			Fb = Db ? (B ? (A ? "MSPointerMove" : "pointermove") : "touchmove") : "mousemove",
			Gb = Db ? (B ? (A ? "MSPointerUp" : "pointerup") : "touchend") : "mouseup",
			Hb = Db ? (B ? "mouseleave" : null) : "mouseleave",
			Ib = B ? (A ? "MSPointerCancel" : "pointercancel") : "touchcancel",
			Jb = 0,
			Kb = null,
			Lb = null,
			Mb = 0,
			Nb = 0,
			Ob = 0,
			Pb = 1,
			Qb = 0,
			Rb = 0,
			Sb = null,
			Tb = a(b),
			Ub = "start",
			Vb = 0,
			Wb = {},
			Xb = 0,
			Yb = 0,
			Zb = 0,
			$b = 0,
			_b = 0,
			ac = null,
			bc = null;
		try {
			Tb.bind(Eb, d), Tb.bind(Ib, F);
		} catch (cc) {
			a.error("events not supported " + Eb + "," + Ib + " on jQuery.swipe");
		}
		(this.enable = function () {
			return this.disable(), Tb.bind(Eb, d), Tb.bind(Ib, F), Tb;
		}),
			(this.disable = function () {
				return H(), Tb;
			}),
			(this.destroy = function () {
				H(), Tb.data(C, null), (Tb = null);
			}),
			(this.option = function (b, d) {
				if ("object" == typeof b) c = a.extend(c, b);
				else if (void 0 !== c[b]) {
					if (void 0 === d) return c[b];
					c[b] = d;
				} else {
					if (!b) return c;
					a.error("Option " + b + " does not exist on jQuery.swipe.options");
				}
				return null;
			});
	}
	var d = "1.6.18",
		e = "left",
		f = "right",
		g = "up",
		h = "down",
		i = "in",
		j = "out",
		k = "none",
		l = "auto",
		m = "swipe",
		n = "pinch",
		o = "tap",
		p = "doubletap",
		q = "longtap",
		r = "horizontal",
		s = "vertical",
		t = "all",
		u = 10,
		v = "start",
		w = "move",
		x = "end",
		y = "cancel",
		z = "ontouchstart" in window,
		A = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !z,
		B = (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !z,
		C = "TouchSwipe",
		D = {
			fingers: 1,
			threshold: 75,
			cancelThreshold: null,
			pinchThreshold: 20,
			maxTimeThreshold: null,
			fingerReleaseThreshold: 250,
			longTapThreshold: 500,
			doubleTapThreshold: 200,
			swipe: null,
			swipeLeft: null,
			swipeRight: null,
			swipeUp: null,
			swipeDown: null,
			swipeStatus: null,
			pinchIn: null,
			pinchOut: null,
			pinchStatus: null,
			click: null,
			tap: null,
			doubleTap: null,
			longTap: null,
			hold: null,
			triggerOnTouchEnd: !0,
			triggerOnTouchLeave: !1,
			allowPageScroll: "auto",
			fallbackToMouseEvents: !0,
			excludedElements: ".noSwipe",
			preventDefaultEvents: !0,
		};
	(a.fn.swipe = function (c) {
		var d = a(this),
			e = d.data(C);
		if (e && "string" == typeof c) {
			if (e[c]) return e[c].apply(e, Array.prototype.slice.call(arguments, 1));
			a.error("Method " + c + " does not exist on jQuery.swipe");
		} else if (e && "object" == typeof c) e.option.apply(e, arguments);
		else if (!(e || ("object" != typeof c && c))) return b.apply(this, arguments);
		return d;
	}),
		(a.fn.swipe.version = d),
		(a.fn.swipe.defaults = D),
		(a.fn.swipe.phases = { PHASE_START: v, PHASE_MOVE: w, PHASE_END: x, PHASE_CANCEL: y }),
		(a.fn.swipe.directions = { LEFT: e, RIGHT: f, UP: g, DOWN: h, IN: i, OUT: j }),
		(a.fn.swipe.pageScroll = { NONE: k, HORIZONTAL: r, VERTICAL: s, AUTO: l }),
		(a.fn.swipe.fingers = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5, ALL: t });
});
