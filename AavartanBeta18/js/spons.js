/*!
Jssor Slider (MIT license)
*/
/* eslint-disable */
! function(i, h, m, f, d, k, e) {
    new(function() {});
    var c = {
            E: m.PI,
            m: m.max,
            k: m.min,
            K: m.ceil,
            P: m.floor,
            F: m.abs,
            sb: m.sin,
            dc: m.cos,
            Ee: m.tan,
            yf: m.atan,
            Yb: m.sqrt,
            q: m.pow,
            ke: m.random,
            $Round: m.round
        },
        g = i.$Jease$ = {
            $Swing: function(a) {
                return -c.dc(a * c.E) / 2 + .5
            },
            $Linear: function(a) {
                return a
            },
            $InQuad: function(a) {
                return a * a
            },
            $OutQuad: function(a) {
                return -a * (a - 2)
            },
            $InOutQuad: function(a) {
                return (a *= 2) < 1 ? 1 / 2 * a * a : -1 / 2 * (--a * (a - 2) - 1)
            },
            $InCubic: function(a) {
                return a * a * a
            },
            $OutCubic: function(a) {
                return (a -= 1) * a * a + 1
            },
            $InOutCubic: function(a) {
                return (a *= 2) < 1 ? 1 / 2 * a * a * a : 1 / 2 * ((a -= 2) * a * a + 2)
            },
            $InQuart: function(a) {
                return a * a * a * a
            },
            $OutQuart: function(a) {
                return -((a -= 1) * a * a * a - 1)
            },
            $InOutQuart: function(a) {
                return (a *= 2) < 1 ? 1 / 2 * a * a * a * a : -1 / 2 * ((a -= 2) * a * a * a - 2)
            },
            $InQuint: function(a) {
                return a * a * a * a * a
            },
            $OutQuint: function(a) {
                return (a -= 1) * a * a * a * a + 1
            },
            $InOutQuint: function(a) {
                return (a *= 2) < 1 ? 1 / 2 * a * a * a * a * a : 1 / 2 * ((a -= 2) * a * a * a * a + 2)
            },
            $InSine: function(a) {
                return 1 - c.dc(c.E / 2 * a)
            },
            $OutSine: function(a) {
                return c.sb(c.E / 2 * a)
            },
            $InOutSine: function(a) {
                return -1 / 2 * (c.dc(c.E * a) - 1)
            },
            $InExpo: function(a) {
                return a == 0 ? 0 : c.q(2, 10 * (a - 1))
            },
            $OutExpo: function(a) {
                return a == 1 ? 1 : -c.q(2, -10 * a) + 1
            },
            $InOutExpo: function(a) {
                return a == 0 || a == 1 ? a : (a *= 2) < 1 ? 1 / 2 * c.q(2, 10 * (a - 1)) : 1 / 2 * (-c.q(2, -10 * --a) + 2)
            },
            $InCirc: function(a) {
                return -(c.Yb(1 - a * a) - 1)
            },
            $OutCirc: function(a) {
                return c.Yb(1 - (a -= 1) * a)
            },
            $InOutCirc: function(a) {
                return (a *= 2) < 1 ? -1 / 2 * (c.Yb(1 - a * a) - 1) : 1 / 2 * (c.Yb(1 - (a -= 2) * a) + 1)
            },
            $InElastic: function(a) {
                if (!a || a == 1) return a;
                var b = .3,
                    d = .075;
                return -(c.q(2, 10 * (a -= 1)) * c.sb((a - d) * 2 * c.E / b))
            },
            $OutElastic: function(a) {
                if (!a || a == 1) return a;
                var b = .3,
                    d = .075;
                return c.q(2, -10 * a) * c.sb((a - d) * 2 * c.E / b) + 1
            },
            $InOutElastic: function(a) {
                if (!a || a == 1) return a;
                var b = .45,
                    d = .1125;
                return (a *= 2) < 1 ? -.5 * c.q(2, 10 * (a -= 1)) * c.sb((a - d) * 2 * c.E / b) : c.q(2, -10 * (a -= 1)) * c.sb((a - d) * 2 * c.E / b) * .5 + 1
            },
            $InBack: function(a) {
                var b = 1.70158;
                return a * a * ((b + 1) * a - b)
            },
            $OutBack: function(a) {
                var b = 1.70158;
                return (a -= 1) * a * ((b + 1) * a + b) + 1
            },
            $InOutBack: function(a) {
                var b = 1.70158;
                return (a *= 2) < 1 ? 1 / 2 * a * a * (((b *= 1.525) + 1) * a - b) : 1 / 2 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
            },
            $InBounce: function(a) {
                return 1 - g.$OutBounce(1 - a)
            },
            $OutBounce: function(a) {
                return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
            },
            $InOutBounce: function(a) {
                return a < 1 / 2 ? g.$InBounce(a * 2) * .5 : g.$OutBounce(a * 2 - 1) * .5 + .5
            },
            $GoBack: function(a) {
                return 1 - c.F(2 - 1)
            },
            $InWave: function(a) {
                return 1 - c.dc(a * c.E * 2)
            },
            $OutWave: function(a) {
                return c.sb(a * c.E * 2)
            },
            $OutJump: function(a) {
                return 1 - ((a *= 2) < 1 ? (a = 1 - a) * a * a : (a -= 1) * a * a)
            },
            $InJump: function(a) {
                return (a *= 2) < 1 ? a * a * a : (a = 2 - a) * a * a
            },
            $Early: c.K,
            $Late: c.P
        };
    var b = i.$Jssor$ = new function() {
        var j = this,
            xb = /\S+/g,
            K = 1,
            eb = 2,
            hb = 3,
            gb = 4,
            kb = 5,
            L, r = 0,
            n = 0,
            B = 0,
            E = navigator,
            qb = E.appName,
            p = E.userAgent,
            q = parseFloat;

        function Gb() {
            if (!L) {
                L = {
                    Vc: "ontouchstart" in i || "createTouch" in h
                };
                var a;
                if (E.pointerEnabled || (a = E.msPointerEnabled)) L.ie = a ? "msTouchAction" : "touchAction"
            }
            return L
        }

        function u(g) {
            if (!r) {
                r = -1;
                if (qb == "Microsoft Internet Explorer" && !!i.attachEvent && !!i.ActiveXObject) {
                    var e = p.indexOf("MSIE");
                    r = K;
                    n = q(p.substring(e + 5, p.indexOf(";", e))); /*@cc_on@*/
                } else if (qb == "Netscape" && !!i.addEventListener) {
                    var d = p.indexOf("Firefox"),
                        b = p.indexOf("Safari"),
                        f = p.indexOf("Chrome"),
                        c = p.indexOf("AppleWebKit");
                    if (d >= 0) {
                        r = eb;
                        n = q(p.substring(d + 8))
                    } else if (b >= 0) {
                        var h = p.substring(0, b).lastIndexOf("/");
                        r = f >= 0 ? gb : hb;
                        n = q(p.substring(h + 1, b))
                    } else {
                        var a = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(p);
                        if (a) {
                            r = K;
                            n = q(a[1])
                        }
                    }
                    if (c >= 0) B = q(p.substring(c + 12))
                } else {
                    var a = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(p);
                    if (a) {
                        r = kb;
                        n = q(a[2])
                    }
                }
            }
            return g == r
        }

        function v() {
            return u(K)
        }

        function zb() {
            return u(eb)
        }

        function fb() {
            return u(hb)
        }

        function jb() {
            return u(kb)
        }

        function bb() {
            return fb() && B > 534 && B < 535
        }

        function H() {
            u();
            return B > 537 || n > 42 || r == K && n >= 11
        }

        function cb(a) {
            var b, c;
            return function(g) {
                if (!b) {
                    b = d;
                    var f = a.substr(0, 1).toUpperCase() + a.substr(1);
                    l([a].concat(["WebKit", "ms", "Moz", "O", "webkit"]), function(h, d) {
                        var b = a;
                        if (d) b = h + f;
                        if (g.style[b] != e) return c = b
                    })
                }
                return c
            }
        }

        function ab(b) {
            var a;
            return function(c) {
                a = a || cb(b)(c) || b;
                return a
            }
        }
        var M = ab("transform");

        function pb(a) {
            return {}.toString.call(a)
        }
        var mb = {};
        l(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function(a) {
            mb["[object " + a + "]"] = a.toLowerCase()
        });

        function l(b, d) {
            var a, c;
            if (pb(b) == "[object Array]") {
                for (a = 0; a < b.length; a++)
                    if (c = d(b[a], a, b)) return c
            } else
                for (a in b)
                    if (c = d(b[a], a, b)) return c
        }

        function G(a) {
            return a == f ? String(a) : mb[pb(a)] || "object"
        }

        function nb(a) {
            for (var b in a) return d
        }

        function C(a) {
            try {
                return G(a) == "object" && !a.nodeType && a != a.window && (!a.constructor || {}.hasOwnProperty.call(a.constructor.prototype, "isPrototypeOf"))
            } catch (b) {}
        }

        function ub(b, a) {
            setTimeout(b, a || 0)
        }

        function lb(b, d, c) {
            var a = !b || b == "inherit" ? "" : b;
            l(d, function(c) {
                var b = c.exec(a);
                if (b) {
                    var d = a.substr(0, b.index),
                        e = a.substr(b.index + b[0].length + 1, a.length - 1);
                    a = d + e
                }
            });
            a && (c += (!a.indexOf(" ") ? "" : " ") + a);
            return c
        }

        function rb(a, b) {
            if (a === e) a = b;
            return a
        }
        j.Sc = Gb;
        j.te = v;
        j.bh = zb;
        j.Vg = fb;
        j.Xg = H;
        cb("transform");
        j.id = function() {
            return n
        };
        j.jg = function() {
            u();
            return B
        };
        j.$Delay = ub;
        j.W = rb;
        j.V = function(a, b) {
            b.call(a);
            return z({}, a)
        };

        function V(a) {
            a.constructor === V.caller && a.A && a.A.apply(a, V.caller.arguments)
        }
        j.A = V;
        j.$GetElement = function(a) {
            if (j.kg(a)) a = h.getElementById(a);
            return a
        };

        function t(a) {
            return a || i.event
        }
        j.Xf = t;
        j.$EvtSrc = function(b) {
            b = t(b);
            var a = b.target || b.srcElement || h;
            if (a.nodeType == 3) a = j.sd(a);
            return a
        };
        j.qe = function(a) {
            a = t(a);
            return a.relatedTarget || a.toElement
        };
        j.re = function(a) {
            a = t(a);
            return a.which || ([0, 1, 3, 0, 2])[a.button] || a.charCode || a.keyCode
        };
        j.jd = function(a) {
            a = t(a);
            return {
                x: a.clientX || 0,
                y: a.clientY || 0
            }
        };
        j.Yf = function(b, a) {
            return b.x >= a.x && b.x <= a.x + a.w && b.y >= a.y && b.y <= a.y + a.h
        };
        j.oe = function(c, e) {
            var a = b.Ig(e),
                d = b.jd(c);
            return j.Yf(d, a)
        };

        function w(c, d, a) {
            if (a !== e) c.style[d] = a == e ? "" : a;
            else {
                var b = c.currentStyle || c.style;
                a = b[d];
                if (a == "" && i.getComputedStyle) {
                    b = c.ownerDocument.defaultView.getComputedStyle(c, f);
                    b && (a = b.getPropertyValue(d) || b[d])
                }
                return a
            }
        }

        function Y(b, c, a, d) {
            if (a === e) {
                a = q(w(b, c));
                isNaN(a) && (a = f);
                return a
            }
            if (a == f) a = "";
            else d && (a += "px");
            w(b, c, a)
        }

        function m(c, a) {
            var d = a ? Y : w,
                b;
            if (a & 4) b = ab(c);
            return function(e, f) {
                return d(e, b ? b(e) : c, f, a & 2)
            }
        }

        function Bb(a) {
            return q(a.style.opacity || "1")
        }

        function Db(b, a) {
            b.style.opacity = a == 1 ? "" : c.$Round(a * 100) / 100
        }
        var O = {
            $Rotate: ["rotate"],
            $RotateX: ["rotateX"],
            $RotateY: ["rotateY"],
            $SkewX: ["skewX"],
            $SkewY: ["skewY"]
        };
        if (!H()) O = z(O, {
            $ScaleX: ["scaleX", 2],
            $ScaleY: ["scaleY", 2],
            $TranslateZ: ["translateZ", 1]
        });

        function N(c, a) {
            var b = "";
            if (a) {
                if (v() && n && n < 10) {
                    delete a.$RotateX;
                    delete a.$RotateY;
                    delete a.$TranslateZ
                }
                l(a, function(d, c) {
                    var a = O[c];
                    if (a) {
                        var e = a[1] || 0;
                        if (P[c] != d) b += " " + a[0] + "(" + d + (["deg", "px", ""])[e] + ")"
                    }
                });
                if (H()) {
                    if (a.$TranslateX || a.$TranslateY || a.$TranslateZ != e) b += " translate3d(" + (a.$TranslateX || 0) + "px," + (a.$TranslateY || 0) + "px," + (a.$TranslateZ || 0) + "px)";
                    if (a.$ScaleX == e) a.$ScaleX = 1;
                    if (a.$ScaleY == e) a.$ScaleY = 1;
                    if (a.$ScaleX != 1 || a.$ScaleY != 1) b += " scale3d(" + a.$ScaleX + ", " + a.$ScaleY + ", 1)"
                }
            }
            c.style[M(c)] = b
        }
        j.Zf = m("transformOrigin", 4);
        j.dg = m("backfaceVisibility", 4);
        m("transformStyle", 4);
        j.bg = m("perspective", 6);
        j.xg = m("perspectiveOrigin", 4);
        j.yg = function(b, a) {
            if (v() && n < 9) b.style.zoom = a == 1 ? "" : a;
            else {
                var c = M(b),
                    f = a == 1 ? "" : "scale(" + a + ")",
                    e = b.style[c],
                    g = new RegExp(/[\s]*scale\(.*?\)/g),
                    d = lb(e, [g], f);
                b.style[c] = d
            }
        };
        j.$AddEvent = function(a, c, d, b) {
            a = j.$GetElement(a);
            if (a.addEventListener) {
                c == "mousewheel" && a.addEventListener("DOMMouseScroll", d, b);
                a.addEventListener(c, d, b)
            } else if (a.attachEvent) {
                a.attachEvent("on" + c, d);
                b && a.setCapture && a.setCapture()
            }
        };
        j.$RemoveEvent = function(a, c, d, b) {
            a = j.$GetElement(a);
            if (a.removeEventListener) {
                c == "mousewheel" && a.removeEventListener("DOMMouseScroll", d, b);
                a.removeEventListener(c, d, b)
            } else if (a.detachEvent) {
                a.detachEvent("on" + c, d);
                b && a.releaseCapture && a.releaseCapture()
            }
        };
        j.$CancelEvent = function(a) {
            a = t(a);
            a.preventDefault && a.preventDefault();
            a.cancel = d;
            a.returnValue = k
        };
        j.$StopEvent = function(a) {
            a = t(a);
            a.stopPropagation && a.stopPropagation();
            a.cancelBubble = d
        };
        j.S = function(d, c) {
            var a = [].slice.call(arguments, 2),
                b = function() {
                    var b = a.concat([].slice.call(arguments, 0));
                    return c.apply(d, b)
                };
            return b
        };
        j.Ag = function(a, b) {
            if (b == e) return a.textContent || a.innerText;
            var c = h.createTextNode(b);
            j.Xb(a);
            a.appendChild(c)
        };
        j.Ig = function(b) {
            var a = b.getBoundingClientRect();
            return {
                x: a.left,
                y: a.top,
                w: a.right - a.left,
                h: a.bottom - a.top
            }
        };
        j.Eb = function(d, c) {
            for (var b = [], a = d.firstChild; a; a = a.nextSibling)(c || a.nodeType == 1) && b.push(a);
            return b
        };

        function ob(a, c, e, b) {
            b = b || "u";
            for (a = a ? a.firstChild : f; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    if (D(a, b) == c) return a;
                    if (!e) {
                        var d = ob(a, c, e, b);
                        if (d) return d
                    }
                }
        }
        j.$FindChild = ob;

        function T(a, d, g, b) {
            b = b || "u";
            var c = [];
            for (a = a ? a.firstChild : f; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    D(a, b) == d && c.push(a);
                    if (!g) {
                        var e = T(a, d, g, b);
                        if (e.length) c = c.concat(e)
                    }
                }
            return c
        }
        j.qg = function(b, a) {
            return b.getElementsByTagName(a)
        };
        j.tb = function(a, f, d, g) {
            d = d || "u";
            var e;
            do {
                if (a.nodeType == 1) {
                    var c;
                    d && (c = D(a, d));
                    if (c && c == rb(f, c) || g == a.tagName) {
                        e = a;
                        break
                    }
                }
                a = b.sd(a)
            } while (a && a != h.body);
            return e
        };
        j.ug = function(a) {
            return X(["INPUT", "TEXTAREA", "SELECT"])[a.tagName]
        };

        function z() {
            var f = arguments,
                d, c, b, a, h = 1 & f[0],
                g = 1 + h;
            d = f[g - 1] || {};
            for (; g < f.length; g++)
                if (c = f[g])
                    for (b in c) {
                        a = c[b];
                        if (a !== e) {
                            a = c[b];
                            var i = d[b];
                            d[b] = h && (C(i) || C(a)) ? z(h, {}, i, a) : a
                        }
                    }
            return d
        }
        j.G = z;

        function W(f, g) {
            var d = {},
                c, a, b;
            for (c in f) {
                a = f[c];
                b = g[c];
                if (a !== b) {
                    var e;
                    if (C(a) && C(b)) {
                        a = W(a, b);
                        e = !nb(a)
                    }!e && (d[c] = a)
                }
            }
            return d
        }
        j.me = function(a) {
            return G(a) == "function"
        };
        j.ne = function(a) {
            return G(a) == "array"
        };
        j.kg = function(a) {
            return G(a) == "string"
        };
        j.oc = function(a) {
            return !isNaN(q(a)) && isFinite(a)
        };
        j.c = l;
        j.Ae = C;

        function R(a) {
            return h.createElement(a)
        }
        j.Tb = function() {
            return R("DIV")
        };
        j.Cg = function() {
            return R("SPAN")
        };
        j.Vf = function() {};

        function F(b, c, a) {
            if (a == e) return b.getAttribute(c);
            b.setAttribute(c, a)
        }

        function D(a, b) {
            return F(a, b) || F(a, "data-" + b)
        }
        j.z = F;
        j.X = D;
        j.B = function(d, b, c) {
            var a = j.Ce(D(d, b));
            if (isNaN(a)) a = c;
            return a
        };

        function x(b, a) {
            return F(b, "class", a) || ""
        }

        function X(b) {
            var a = {};
            l(b, function(b) {
                if (b != e) a[b] = b
            });
            return a
        }

        function vb(b, a) {
            return b.match(a || xb)
        }

        function Q(b, a) {
            return X(vb(b || "", a))
        }
        j.ye = X;
        j.Tg = vb;
        j.Me = function(a) {
            a && (a = a.toLowerCase());
            return a
        };

        function Z(b, c) {
            var a = "";
            l(c, function(c) {
                a && (a += b);
                a += c
            });
            return a
        }

        function I(a, c, b) {
            x(a, Z(" ", z(W(Q(x(a)), Q(c)), Q(b))))
        }
        j.Be = Z;
        j.sd = function(a) {
            return a.parentNode
        };
        j.Cb = function(a) {
            j.Bb(a, "none")
        };
        j.eb = function(a, b) {
            j.Bb(a, b ? "none" : "")
        };
        j.Gg = function(b, a) {
            b.removeAttribute(a)
        };
        j.Lg = function(d, a) {
            if (a) d.style.clip = "rect(" + c.$Round(a.$Top || a.J || 0) + "px " + c.$Round(a.$Right) + "px " + c.$Round(a.$Bottom) + "px " + c.$Round(a.$Left || a.N || 0) + "px)";
            else if (a !== e) {
                var h = d.style.cssText,
                    g = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)],
                    f = lb(h, g, "");
                b.zd(d, f)
            }
        };
        j.ig = function(b, a) {
            if (a) b.style.backgroundColor = "rgba(" + c.$Round(a.xd) + "," + c.$Round(a.wd) + "," + c.$Round(a.Bd) + "," + a.$Opacity + ")"
        };
        j.Ab = function() {
            return +new Date
        };
        j.bb = function(b, a) {
            b.appendChild(a)
        };
        j.sg = function(b, a) {
            l(a, function(a) {
                j.bb(b, a)
            })
        };
        j.Ib = function(b, a, c) {
            (c || a.parentNode).insertBefore(b, a)
        };
        j.rg = function(b, a, c) {
            b.insertAdjacentHTML(a, c)
        };
        j.nb = function(b, a) {
            a = a || b.parentNode;
            a && a.removeChild(b)
        };
        j.tg = function(a, b) {
            l(a, function(a) {
                j.nb(a, b)
            })
        };
        j.Xb = function(a) {
            j.tg(j.Eb(a, d), a)
        };

        function sb() {
            l([].slice.call(arguments, 0), function(a) {
                if (j.ne(a)) sb.apply(f, a);
                else a && a.$Destroy()
            })
        }
        j.$Destroy = sb;
        j.nd = function(a, b) {
            var c = j.sd(a);
            if (b & 1) {
                j.Q(a, (j.C(c) - j.C(a)) / 2);
                j.Xd(a, f)
            }
            if (b & 2) {
                j.ab(a, (j.D(c) - j.D(a)) / 2);
                j.Vd(a, f)
            }
        };
        var S = {
            $Top: f,
            $Right: f,
            $Bottom: f,
            $Left: f,
            H: f,
            I: f
        };
        j.wg = function(a) {
            var b = j.Tb();
            s(b, {
                Sd: "block",
                Ob: j.rb(a),
                $Top: 0,
                $Left: 0,
                H: 0,
                I: 0
            });
            var d = j.Ud(a, S);
            j.Ib(b, a);
            j.bb(b, a);
            var e = j.Ud(a, S),
                c = {};
            l(d, function(b, a) {
                if (b == e[a]) c[a] = b
            });
            s(b, S);
            s(b, c);
            s(a, {
                $Top: 0,
                $Left: 0
            });
            return c
        };
        j.Ce = q;
        j.ve = function(b, a) {
            var c = h.body;
            while (a && b !== a && c !== a) a = a.parentNode;
            return b === a
        };

        function U(d, c, b) {
            var a = d.cloneNode(!c);
            !b && j.Gg(a, "id");
            return a
        }
        j.gb = U;
        j.Nb = function(e, f) {
            var a = new Image;

            function b(e, d) {
                j.$RemoveEvent(a, "load", b);
                j.$RemoveEvent(a, "abort", c);
                j.$RemoveEvent(a, "error", c);
                f && f(a, d)
            }

            function c(a) {
                b(a, d)
            }
            if (jb() && n < 11.6 || !e) b(!e);
            else {
                j.$AddEvent(a, "load", b);
                j.$AddEvent(a, "abort", c);
                j.$AddEvent(a, "error", c);
                a.src = e
            }
        };
        j.cg = function(d, a, e) {
            var c = d.length + 1;

            function b(b) {
                c--;
                if (a && b && b.src == a.src) a = b;
                !c && e && e(a)
            }
            l(d, function(a) {
                j.Nb(a.src, b)
            });
            b()
        };
        j.fe = function(a, g, i, h) {
            if (h) a = U(a);
            var c = T(a, g);
            if (!c.length) c = b.qg(a, g);
            for (var f = c.length - 1; f > -1; f--) {
                var d = c[f],
                    e = U(i);
                x(e, x(d));
                b.zd(e, d.style.cssText);
                b.Ib(e, d);
                b.nb(d)
            }
            return a
        };

        function Eb() {
            var a = this;
            b.V(a, o);
            var d, q = "",
                s = ["av", "pv", "ds", "dn"],
                f = [],
                r, n = 0,
                k = 0,
                g = 0;

            function m() {
                I(d, r, (f[g || k & 2 || k] || "") + " " + (f[n] || ""));
                j.zc(d, g ? "none" : "")
            }

            function c() {
                n = 0;
                a.T(i, "mouseup", c);
                a.T(h, "mouseup", c);
                a.T(h, "touchend", c);
                a.T(h, "touchcancel", c);
                a.T(i, "blur", c);
                m()
            }

            function p(b) {
                if (g) j.$CancelEvent(b);
                else {
                    n = 4;
                    m();
                    a.a(i, "mouseup", c);
                    a.a(h, "mouseup", c);
                    a.a(h, "touchend", c);
                    a.a(h, "touchcancel", c);
                    a.a(i, "blur", c)
                }
            }
            a.ae = function(a) {
                if (a === e) return k;
                k = a & 2 || a & 1;
                m()
            };
            a.$Enable = function(a) {
                if (a === e) return !g;
                g = a ? 0 : 3;
                m()
            };
            a.A = function(e) {
                a.$Elmt = d = j.$GetElement(e);
                F(d, "data-jssor-button", "1");
                var c = b.Tg(x(d));
                if (c) q = c.shift();
                l(s, function(a) {
                    f.push(q + a)
                });
                r = Z(" ", f);
                f.unshift("");
                a.a(d, "mousedown", p);
                a.a(d, "touchstart", p)
            };
            b.A(a)
        }
        j.qc = function(a) {
            return new Eb(a)
        };
        j.Rb = w;
        j.Lb = m("overflow");
        j.zc = m("pointerEvents");
        j.ab = m("top", 2);
        j.Xd = m("right", 2);
        j.Vd = m("bottom", 2);
        j.Q = m("left", 2);
        j.C = m("width", 2);
        j.D = m("height", 2);
        m("marginLeft", 2);
        m("marginTop", 2);
        j.rb = m("position");
        j.Bb = m("display");
        j.Y = m("zIndex", 1);
        j.hg = function(b, a, c) {
            if (a != e) Db(b, a, c);
            else return Bb(b)
        };
        j.zd = function(a, b) {
            if (b != e) a.style.cssText = b;
            else return a.style.cssText
        };
        j.gg = function(b, a) {
            if (a === e) {
                a = w(b, "backgroundImage") || "";
                var c = /\burl\s*\(\s*["']?([^"'\r\n,]+)["']?\s*\)/gi.exec(a) || [];
                return c[1]
            }
            w(b, "backgroundImage", a ? "url('" + a + "')" : "")
        };
        var J;
        j.Eg = J = {
            $Opacity: j.hg,
            $Top: j.ab,
            $Right: j.Xd,
            $Bottom: j.Vd,
            $Left: j.Q,
            H: j.C,
            I: j.D,
            Ob: j.rb,
            Sd: j.Bb,
            $ZIndex: j.Y
        };
        j.Ud = function(c, b) {
            var a = {};
            l(b, function(d, b) {
                if (J[b]) a[b] = J[b](c)
            });
            return a
        };

        function s(b, i) {
            var a = H(),
                g = bb(),
                h = M(b);

            function d(l, a) {
                a = a || {};
                var g = a.$TranslateZ || 0,
                    i = (a.$RotateX || 0) % 360,
                    j = (a.$RotateY || 0) % 360,
                    k = (a.$Rotate || 0) % 360,
                    c = a.$ScaleX,
                    d = a.$ScaleY,
                    f = a.Mh;
                if (c == e) c = 1;
                if (d == e) d = 1;
                if (f == e) f = 1;
                var b = new Ab(a.$TranslateX, a.$TranslateY, g);
                b.$Scale(c, d, f);
                b.Zg(a.$SkewX, a.$SkewY);
                b.$RotateX(i);
                b.$RotateY(j);
                b.Yg(k);
                b.$Move(a.N, a.J);
                l.style[h] = b.ah()
            }
            s = function(c, b) {
                b = b || {};
                var i = b.N,
                    k = b.J,
                    h;
                l(J, function(a, d) {
                    h = b[d];
                    h !== e && a(c, h)
                });
                j.Lg(c, b.$Clip);
                j.ig(c, b.vb);
                if (!a) {
                    i != e && j.Q(c, (b.Fd || 0) + i);
                    k != e && j.ab(c, (b.Pd || 0) + k)
                }
                if (b.dh)
                    if (g) ub(j.S(f, N, c, b));
                    else if (a) d(c, b);
                else N(c, b)
            };
            j.Z = s;
            s(b, i)
        }
        j.fh = N;
        j.Z = s;

        function Ab(j, k, o) {
            var d = this,
                b = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, j || 0, k || 0, o || 0, 1],
                i = c.sb,
                h = c.dc,
                l = c.Ee;

            function g(a) {
                return a * c.E / 180
            }

            function m(b, c, f, g, i, l, n, o, q, t, u, w, y, A, C, F, a, d, e, h, j, k, m, p, r, s, v, x, z, B, D, E) {
                return [b * a + c * j + f * r + g * z, b * d + c * k + f * s + g * B, b * e + c * m + f * v + g * D, b * h + c * p + f * x + g * E, i * a + l * j + n * r + o * z, i * d + l * k + n * s + o * B, i * e + l * m + n * v + o * D, i * h + l * p + n * x + o * E, q * a + t * j + u * r + w * z, q * d + t * k + u * s + w * B, q * e + t * m + u * v + w * D, q * h + t * p + u * x + w * E, y * a + A * j + C * r + F * z, y * d + A * k + C * s + F * B, y * e + A * m + C * v + F * D, y * h + A * p + C * x + F * E]
            }

            function e(c, a) {
                return m.apply(f, (a || b).concat(c))
            }
            d.$Scale = function(a, c, d) {
                if (a != 1 || c != 1 || d != 1) b = e([a, 0, 0, 0, 0, c, 0, 0, 0, 0, d, 0, 0, 0, 0, 1])
            };
            d.$Move = function(a, c, d) {
                b[12] += a || 0;
                b[13] += c || 0;
                b[14] += d || 0
            };
            d.$RotateX = function(c) {
                if (c) {
                    a = g(c);
                    var d = h(a),
                        f = i(a);
                    b = e([1, 0, 0, 0, 0, d, f, 0, 0, -f, d, 0, 0, 0, 0, 1])
                }
            };
            d.$RotateY = function(c) {
                if (c) {
                    a = g(c);
                    var d = h(a),
                        f = i(a);
                    b = e([d, 0, -f, 0, 0, 1, 0, 0, f, 0, d, 0, 0, 0, 0, 1])
                }
            };
            d.Yg = function(c) {
                if (c) {
                    a = g(c);
                    var d = h(a),
                        f = i(a);
                    b = e([d, f, 0, 0, -f, d, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                }
            };
            d.Zg = function(a, c) {
                if (a || c) {
                    j = g(a);
                    k = g(c);
                    b = e([1, l(k), 0, 0, l(j), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                }
            };
            d.ah = function() {
                return "matrix3d(" + b.join(",") + ")"
            }
        }
        var P = {
            Fd: 0,
            Pd: 0,
            N: 0,
            J: 0,
            $Zoom: 1,
            $ScaleX: 1,
            $ScaleY: 1,
            $Rotate: 0,
            $RotateX: 0,
            $RotateY: 0,
            $TranslateX: 0,
            $TranslateY: 0,
            $TranslateZ: 0,
            $SkewX: 0,
            $SkewY: 0
        };
        j.ad = function(c, d) {
            var a = c || {};
            if (c)
                if (b.me(c)) a = {
                    W: a
                };
                else if (b.me(c.$Clip)) a.$Clip = {
                W: c.$Clip
            };
            a.W = a.W || d;
            if (a.$Clip) a.$Clip.W = a.$Clip.W || d;
            if (a.vb) a.vb.W = a.vb.W || d;
            return a
        };

        function tb(c, a) {
            var b = {};
            l(c, function(c, d) {
                var f = c;
                if (a[d] != e)
                    if (j.oc(c)) f = c + a[d];
                    else f = tb(c, a[d]);
                b[d] = f
            });
            return b
        }
        j.Sg = tb;
        j.Ld = function(o, j, s, t, D, E, p) {
            var a = j;
            if (o) {
                a = {};
                for (var i in j) {
                    var F = E[i] || 1,
                        B = D[i] || [0, 1],
                        h = (s - B[0]) / B[1];
                    h = c.k(c.m(h, 0), 1);
                    h = h * F;
                    var y = c.P(h);
                    if (h != y) h -= y;
                    var k = t.W || g.$Linear,
                        m, G = o[i],
                        r = j[i];
                    if (b.oc(r)) {
                        k = t[i] || k;
                        var C = k(h);
                        m = G + r * C
                    } else {
                        m = z({
                            kc: {}
                        }, o[i]);
                        var A = t[i] || {};
                        l(r.kc || r, function(d, a) {
                            k = A[a] || A.W || k;
                            var c = k(h),
                                b = d * c;
                            m.kc[a] = b;
                            m[a] += b
                        })
                    }
                    a[i] = m
                }
                var x = l(j, function(b, a) {
                    return P[a] != e
                });
                x && l(P, function(c, b) {
                    if (a[b] == e && o[b] !== e) a[b] = o[b]
                });
                if (x) {
                    if (a.$Zoom) a.$ScaleX = a.$ScaleY = a.$Zoom;
                    a.$OriginalWidth = p.$OriginalWidth;
                  //  a.$OriginalHeight = p.$OriginalHeight;
                  // consle.log(p.$OriginalHeight);
                    //  a.$OriginalHeight = p.;
                    if (v() && n >= 11 && (j.N || j.J) && s != 0 && s != 1) a.$Rotate = a.$Rotate || 1e-8;
                    a.dh = d
                }
            }
            if (j.$Clip && p.$Move) {
                var q = a.$Clip.kc,
                    w = (q.$Top || 0) + (q.$Bottom || 0),
                    u = (q.$Left || 0) + (q.$Right || 0);
                a.$Left = (a.$Left || 0) + u;
                a.$Top = (a.$Top || 0) + w;
                a.$Clip.$Left -= u;
                a.$Clip.$Right -= u;
                a.$Clip.$Top -= w;
                a.$Clip.$Bottom -= w
            }
            if (a.$Clip && !a.$Clip.$Top && !a.$Clip.$Left && !a.$Clip.J && !a.$Clip.N && a.$Clip.$Right == p.$OriginalWidth && a.$Clip.$Bottom == p.$OriginalHeight) a.$Clip = f;
            return a
        }
    };

    function o() {
        var a = this,
            f, e = [],
            c = [];

        function k(a, b) {
            e.push({
                Kb: a,
                gc: b
            })
        }

        function j(a, c) {
            b.c(e, function(b, d) {
                b.Kb == a && b.gc === c && e.splice(d, 1)
            })
        }

        function h() {
            e = []
        }

        function g() {
            b.c(c, function(a) {
                b.$RemoveEvent(a.Nd, a.Kb, a.gc, a.Md)
            });
            c = []
        }
        a.bd = function() {
            return f
        };
        a.a = function(f, d, e, a) {
            b.$AddEvent(f, d, e, a);
            c.push({
                Nd: f,
                Kb: d,
                gc: e,
                Md: a
            })
        };
        a.T = function(f, d, e, a) {
            b.c(c, function(g, h) {
                if (g.Nd === f && g.Kb == d && g.gc === e && g.Md == a) {
                    b.$RemoveEvent(f, d, e, a);
                    c.splice(h, 1)
                }
            })
        };
        a.Rd = g;
        a.$On = a.addEventListener = k;
        a.$Off = a.removeEventListener = j;
        a.j = function(a) {
            var c = [].slice.call(arguments, 1);
            b.c(e, function(b) {
                b.Kb == a && b.gc.apply(i, c)
            })
        };
        a.$Destroy = function() {
            if (!f) {
                f = d;
                g();
                h()
            }
        }
    }
    var l = function(C, F, h, m, T, O) {
        C = C || 0;
        var a = this,
            p, n, o, t, D = 0,
            Q = 1,
            M, N, L, E, B = 0,
            j = 0,
            r = 0,
            A, l, f, g, s, z, v = [],
            y, I = k,
            J, H = k;

        function U(a) {
            f += a;
            g += a;
            l += a;
            j += a;
            r += a;
            B += a
        }

        function x(x) {
            var k = x;
            if (s)
                if (!z && (k >= g || k < f) || z && k >= f) k = ((k - f) % s + s) % s + f;
            if (!A || t || j != k) {
                var i = c.k(k, g);
                i = c.m(i, f);
                if (h.$Reverse) i = g - i + f;
                if (!A || t || i != r) {
                    if (O) {
                        var w = (i - l) / (F || 1),
                            o = b.Ld(T, O, w, M, L, N, h);
                        if (y) b.c(o, function(b, a) {
                            y[a] && y[a](m, b)
                        });
                        else b.Z(m, o);
                        var n;
                        if (J) {
                            toDisablePointerEventsByAnimation = i > f && i < g;
                            if (toDisablePointerEventsByAnimation != H) n = H = toDisablePointerEventsByAnimation
                        }
                        if (!n && o.$Opacity != e) {
                            var p = o.$Opacity < .001;
                            if (p != I) n = I = p
                        }
                        if (n != e) {
                            n && b.zc(m, "none");
                            !n && b.zc(m, b.z(m, "data-events"))
                        }
                    }
                    var u = r,
                        q = r = i;
                    b.c(v, function(b, c) {
                        var a = !A && z || k <= j ? v[v.length - c - 1] : b;
                        a.M(i - B)
                    });
                    j = k;
                    A = d;
                    a.Tc(u - l, q - l);
                    a.ec(u, q)
                }
            }
        }

        function G(a, b, d) {
            b && a.$Shift(g);
            if (!d) {
                f = c.k(f, a.mc() + B);
                g = c.m(g, a.ub() + B)
            }
            v.push(a)
        }
        var u = i.requestAnimationFrame || i.webkitRequestAnimationFrame || i.mozRequestAnimationFrame || i.msRequestAnimationFrame;
        if (b.Vg() && b.id() < 7 || !u) u = function(a) {
            b.$Delay(a, h.$Interval)
        };

        function P() {
            if (p) {
                var d = b.Ab(),
                    e = c.k(d - D, h.Hd),
                    a = j + e * o * Q;
                D = d;
                if (a * o >= n * o) a = n;
                x(a);
                if (!t && a * o >= n * o) R(E);
                else u(P)
            }
        }

        function w(e, h, i) {
            if (!p) {
                p = d;
                t = i;
                E = h;
                e = c.m(e, f);
                e = c.k(e, g);
                n = e;
                o = n < j ? -1 : 1;
                a.pd();
                D = b.Ab();
                u(P)
            }
        }

        function R(b) {
            if (p) {
                t = p = E = k;
                a.qd();
                b && b()
            }
        }
        a.$Play = function(a, b, c) {
            w(a ? j + a : g, b, c)
        };
        a.sc = w;
        a.Se = function(a, b) {
            w(g, a, b)
        };
        a.O = R;
        a.Jd = function() {
            return j
        };
        a.Id = function() {
            return n
        };
        a.n = function() {
            return r
        };
        a.M = x;
        a.ef = function() {
            x(g, d)
        };
        a.$IsPlaying = function() {
            return p
        };
        a.Zd = function(a) {
            Q = a
        };
        a.$Shift = U;
        a.Be = G;
        a.U = function(a, b) {
            G(a, 0, b)
        };
        a.Gc = function(a) {
            G(a, 1)
        };
        a.Hc = function(a) {
            g += a
        };
        a.mc = function() {
            return f
        };
        a.ub = function() {
            return g
        };
        a.ec = a.pd = a.qd = a.Tc = b.Vf;
        a.Pc = b.Ab();
        h = b.G({
            $Interval: 16,
            Hd: 50
        }, h);
        m && (J = b.z(m, "data-inactive"));
        s = h.pc;
        z = h.Oe;
        y = h.Ne;
        f = l = C;
        g = C + F;
        N = h.$Round || {};
        L = h.$During || {};
        M = b.ad(h.$Easing)
    };
    var n = {
            Hf: "data-scale",
            yb: "data-autocenter",
            Qc: "data-nofreeze",
            Td: "data-nodrag"
        },
        q = new function() {
            var a = this;
            a.Ac = function(c, a, e, d) {
                (d || !b.z(c, a)) && b.z(c, a, e)
            };
            a.Cc = function(a) {
                var c = b.B(a, n.yb);
                b.nd(a, c)
            }
        },
        s = i.$JssorSlideshowFormations$ = new function() {
            var h = this,
                b = 0,
                a = 1,
                f = 2,
                e = 3,
                s = 1,
                r = 2,
                t = 4,
                q = 8,
                w = 256,
                x = 512,
                v = 1024,
                u = 2048,
                j = u + s,
                i = u + r,
                o = x + s,
                m = x + r,
                n = w + t,
                k = w + q,
                l = v + t,
                p = v + q;

            function y(a) {
                return (a & r) == r
            }

            function z(a) {
                return (a & t) == t
            }

            function g(b, a, c) {
                c.push(a);
                b[a] = b[a] || [];
                b[a].push(c)
            }
            h.$FormationStraight = function(f) {
                for (var d = f.$Cols, e = f.$Rows, s = f.$Assembly, t = f.Fc, r = [], a = 0, b = 0, p = d - 1, q = e - 1, h = t - 1, c, b = 0; b < e; b++)
                    for (a = 0; a < d; a++) {
                        switch (s) {
                            case j:
                                c = h - (a * e + (q - b));
                                break;
                            case l:
                                c = h - (b * d + (p - a));
                                break;
                            case o:
                                c = h - (a * e + b);
                            case n:
                                c = h - (b * d + a);
                                break;
                            case i:
                                c = a * e + b;
                                break;
                            case k:
                                c = b * d + (p - a);
                                break;
                            case m:
                                c = a * e + (q - b);
                                break;
                            default:
                                c = b * d + a
                        }
                        g(r, c, [b, a])
                    }
                return r
            };
            h.$FormationSwirl = function(q) {
                var x = q.$Cols,
                    y = q.$Rows,
                    B = q.$Assembly,
                    w = q.Fc,
                    A = [],
                    z = [],
                    u = 0,
                    c = 0,
                    h = 0,
                    r = x - 1,
                    s = y - 1,
                    t, p, v = 0;
                switch (B) {
                    case j:
                        c = r;
                        h = 0;
                        p = [f, a, e, b];
                        break;
                    case l:
                        c = 0;
                        h = s;
                        p = [b, e, a, f];
                        break;
                    case o:
                        c = r;
                        h = s;
                        p = [e, a, f, b];
                        break;
                    case n:
                        c = r;
                        h = s;
                        p = [a, e, b, f];
                        break;
                    case i:
                        c = 0;
                        h = 0;
                        p = [f, b, e, a];
                        break;
                    case k:
                        c = r;
                        h = 0;
                        p = [a, f, b, e];
                        break;
                    case m:
                        c = 0;
                        h = s;
                        p = [e, b, f, a];
                        break;
                    default:
                        c = 0;
                        h = 0;
                        p = [b, f, a, e]
                }
                u = 0;
                while (u < w) {
                    t = h + "," + c;
                    if (c >= 0 && c < x && h >= 0 && h < y && !z[t]) {
                        z[t] = d;
                        g(A, u++, [h, c])
                    } else switch (p[v++ % p.length]) {
                        case b:
                            c--;
                            break;
                        case f:
                            h--;
                            break;
                        case a:
                            c++;
                            break;
                        case e:
                            h++
                    }
                    switch (p[v % p.length]) {
                        case b:
                            c++;
                            break;
                        case f:
                            h++;
                            break;
                        case a:
                            c--;
                            break;
                        case e:
                            h--
                    }
                }
                return A
            };
            h.$FormationZigZag = function(p) {
                var w = p.$Cols,
                    x = p.$Rows,
                    z = p.$Assembly,
                    v = p.Fc,
                    t = [],
                    u = 0,
                    c = 0,
                    d = 0,
                    q = w - 1,
                    r = x - 1,
                    y, h, s = 0;
                switch (z) {
                    case j:
                        c = q;
                        d = 0;
                        h = [f, a, e, a];
                        break;
                    case l:
                        c = 0;
                        d = r;
                        h = [b, e, a, e];
                        break;
                    case o:
                        c = q;
                        d = r;
                        h = [e, a, f, a];
                        break;
                    case n:
                        c = q;
                        d = r;
                        h = [a, e, b, e];
                        break;
                    case i:
                        c = 0;
                        d = 0;
                        h = [f, b, e, b];
                        break;
                    case k:
                        c = q;
                        d = 0;
                        h = [a, f, b, f];
                        break;
                    case m:
                        c = 0;
                        d = r;
                        h = [e, b, f, b];
                        break;
                    default:
                        c = 0;
                        d = 0;
                        h = [b, f, a, f]
                }
                u = 0;
                while (u < v) {
                    y = d + "," + c;
                    if (c >= 0 && c < w && d >= 0 && d < x && typeof t[y] == "undefined") {
                        g(t, u++, [d, c]);
                        switch (h[s % h.length]) {
                            case b:
                                c++;
                                break;
                            case f:
                                d++;
                                break;
                            case a:
                                c--;
                                break;
                            case e:
                                d--
                        }
                    } else {
                        switch (h[s++ % h.length]) {
                            case b:
                                c--;
                                break;
                            case f:
                                d--;
                                break;
                            case a:
                                c++;
                                break;
                            case e:
                                d++
                        }
                        switch (h[s++ % h.length]) {
                            case b:
                                c++;
                                break;
                            case f:
                                d++;
                                break;
                            case a:
                                c--;
                                break;
                            case e:
                                d--
                        }
                    }
                }
                return t
            };
            h.$FormationStraightStairs = function(q) {
                var u = q.$Cols,
                    v = q.$Rows,
                    e = q.$Assembly,
                    t = q.Fc,
                    r = [],
                    s = 0,
                    c = 0,
                    d = 0,
                    f = u - 1,
                    h = v - 1,
                    x = t - 1;
                switch (e) {
                    case j:
                    case m:
                    case o:
                    case i:
                        var a = 0,
                            b = 0;
                        break;
                    case k:
                    case l:
                    case n:
                    case p:
                        var a = f,
                            b = 0;
                        break;
                    default:
                        e = p;
                        var a = f,
                            b = 0
                }
                c = a;
                d = b;
                while (s < t) {
                    if (z(e) || y(e)) g(r, x - s++, [d, c]);
                    else g(r, s++, [d, c]);
                    switch (e) {
                        case j:
                        case m:
                            c--;
                            d++;
                            break;
                        case o:
                        case i:
                            c++;
                            d--;
                            break;
                        case k:
                        case l:
                            c--;
                            d--;
                            break;
                        case p:
                        case n:
                        default:
                            c++;
                            d++
                    }
                    if (c < 0 || d < 0 || c > f || d > h) {
                        switch (e) {
                            case j:
                            case m:
                                a++;
                                break;
                            case k:
                            case l:
                            case o:
                            case i:
                                b++;
                                break;
                            case p:
                            case n:
                            default:
                                a--
                        }
                        if (a < 0 || b < 0 || a > f || b > h) {
                            switch (e) {
                                case j:
                                case m:
                                    a = f;
                                    b++;
                                    break;
                                case o:
                                case i:
                                    b = h;
                                    a++;
                                    break;
                                case k:
                                case l:
                                    b = h;
                                    a--;
                                    break;
                                case p:
                                case n:
                                default:
                                    a = 0;
                                    b++
                            }
                            if (b > h) b = h;
                            else if (b < 0) b = 0;
                            else if (a > f) a = f;
                            else if (a < 0) a = 0
                        }
                        d = b;
                        c = a
                    }
                }
                return r
            };
            h.$FormationRectangle = function(f) {
                var d = f.$Cols || 1,
                    e = f.$Rows || 1,
                    h = [],
                    a, b, i;
                i = c.$Round(c.k(d / 2, e / 2)) + 1;
                for (a = 0; a < d; a++)
                    for (b = 0; b < e; b++) g(h, i - c.k(a + 1, b + 1, d - a, e - b), [b, a]);
                return h
            };
            h.$FormationRandom = function(d) {
                for (var e = [], a, b = 0; b < d.$Rows; b++)
                    for (a = 0; a < d.$Cols; a++) g(e, c.K(1e5 * c.ke()) % 13, [b, a]);
                return e
            };
            h.$FormationCircle = function(d) {
                for (var e = d.$Cols || 1, f = d.$Rows || 1, h = [], a, i = e / 2 - .5, j = f / 2 - .5, b = 0; b < e; b++)
                    for (a = 0; a < f; a++) g(h, c.$Round(c.Yb(c.q(b - i, 2) + c.q(a - j, 2))), [a, b]);
                return h
            };
            h.$FormationCross = function(d) {
                for (var e = d.$Cols || 1, f = d.$Rows || 1, h = [], a, i = e / 2 - .5, j = f / 2 - .5, b = 0; b < e; b++)
                    for (a = 0; a < f; a++) g(h, c.$Round(c.k(c.F(b - i), c.F(a - j))), [a, b]);
                return h
            };
            h.$FormationRectangleCross = function(f) {
                for (var h = f.$Cols || 1, i = f.$Rows || 1, j = [], a, d = h / 2 - .5, e = i / 2 - .5, k = c.m(d, e) + 1, b = 0; b < h; b++)
                    for (a = 0; a < i; a++) g(j, c.$Round(k - c.m(d - c.F(b - d), e - c.F(a - e))) - 1, [a, b]);
                return j
            }
        };
    i.$JssorSlideshowRunner$ = function(m, r, p, u, z, A) {
        var a = this,
            v, h, e, y = 0,
            x = u.$TransitionsOrder,
            q, i = 8;

        function t(a) {
            if (a.$Top) a.J = a.$Top;
            if (a.$Left) a.N = a.$Left;
            b.c(a, function(a) {
                b.Ae(a) && t(a)
            })
        }

        function j(h, e, f) {
            var a = {
                $Interval: e,
                $Duration: 1,
                $Delay: 0,
                $Cols: 1,
                $Rows: 1,
                $Opacity: 0,
                $Zoom: 0,
                $Clip: 0,
                $Move: k,
                $SlideOut: k,
                $Reverse: k,
                $Formation: s.$FormationRandom,
                $Assembly: 1032,
                $ChessMode: {
                    $Column: 0,
                    $Row: 0
                },
                $Easing: g.$Linear,
                $Round: {},
                vc: [],
                $During: {}
            };
            b.G(a, h);
            if (a.$Rows == 0) a.$Rows = c.$Round(a.$Cols * f);
            t(a);
            a.Fc = a.$Cols * a.$Rows;
            a.$Easing = b.ad(a.$Easing, g.$Linear);
            a.mf = c.K(a.$Duration / a.$Interval);
            a.zf = function(c, b) {
                c /= a.$Cols;
                b /= a.$Rows;
                var f = c + "x" + b;
                if (!a.vc[f]) {
                    a.vc[f] = {
                        H: c,
                        I: b
                    };
                    for (var d = 0; d < a.$Cols; d++)
                        for (var e = 0; e < a.$Rows; e++) a.vc[f][e + "," + d] = {
                            $Top: e * b,
                            $Right: d * c + c,
                            $Bottom: e * b + b,
                            $Left: d * c
                        }
                }
                return a.vc[f]
            };
            if (a.$Brother) {
                a.$Brother = j(a.$Brother, e, f);
                a.$SlideOut = d
            }
            return a
        }

        function n(z, i, a, v, n, l) {
            var y = this,
                t, u = {},
                h = {},
                m = [],
                f, e, r, p = a.$ChessMode.$Column || 0,
                q = a.$ChessMode.$Row || 0,
                g = a.zf(n, l),
                o = B(a),
                C = o.length - 1,
                s = a.$Duration + a.$Delay * C,
                w = v + s,
                j = a.$SlideOut,
                x;
            w += 50;

            function B(a) {
                var b = a.$Formation(a);
                return a.$Reverse ? b.reverse() : b
            }
            y.Cd = w;
            y.rc = function(d) {
                d -= v;
                var e = d < s;
                if (e || x) {
                    x = e;
                    if (!j) d = s - d;
                    var f = c.K(d / a.$Interval);
                    b.c(h, function(a, e) {
                        var d = c.m(f, a.k);
                        d = c.k(d, a.length - 1);
                        if (a.yd != d) {
                            if (!a.yd && !j) b.eb(m[e]);
                            else d == a.m && j && b.Cb(m[e]);
                            a.yd = d;
                            b.Z(m[e], a[d])
                        }
                    })
                }
            };
            i = b.gb(i);
            A(i, 0, 0);
            b.c(o, function(i, m) {
                b.c(i, function(G) {
                    var I = G[0],
                        H = G[1],
                        v = I + "," + H,
                        o = k,
                        s = k,
                        x = k;
                    if (p && H % 2) {
                        if (p & 3) o = !o;
                        if (p & 12) s = !s;
                        if (p & 16) x = !x
                    }
                    if (q && I % 2) {
                        if (q & 3) o = !o;
                        if (q & 12) s = !s;
                        if (q & 16) x = !x
                    }
                    a.$Top = a.$Top || a.$Clip & 4;
                    a.$Bottom = a.$Bottom || a.$Clip & 8;
                    a.$Left = a.$Left || a.$Clip & 1;
                    a.$Right = a.$Right || a.$Clip & 2;
                    var C = s ? a.$Bottom : a.$Top,
                        z = s ? a.$Top : a.$Bottom,
                        B = o ? a.$Right : a.$Left,
                        A = o ? a.$Left : a.$Right;
                    a.$Clip = C || z || B || A;
                    r = {};
                    e = {
                        J: 0,
                        N: 0,
                        $Opacity: 1,
                        H: n,
                        I: l
                    };
                    f = b.G({}, e);
                    t = b.G({}, g[v]);
                    if (a.$Opacity) e.$Opacity = 2 - a.$Opacity;
                    if (a.$ZIndex) {
                        e.$ZIndex = a.$ZIndex;
                        f.$ZIndex = 0
                    }
                    var K = a.$Cols * a.$Rows > 1 || a.$Clip;
                    if (a.$Zoom || a.$Rotate) {
                        var J = d;
                        if (J) {
                            e.$Zoom = a.$Zoom ? a.$Zoom - 1 : 1;
                            f.$Zoom = 1;
                            var N = a.$Rotate || 0;
                            e.$Rotate = N * 360 * (x ? -1 : 1);
                            f.$Rotate = 0
                        }
                    }
                    if (K) {
                        var i = t.kc = {};
                        if (a.$Clip) {
                            var w = a.$ScaleClip || 1;
                            if (C && z) {
                                i.$Top = g.I / 2 * w;
                                i.$Bottom = -i.$Top
                            } else if (C) i.$Bottom = -g.I * w;
                            else if (z) i.$Top = g.I * w;
                            if (B && A) {
                                i.$Left = g.H / 2 * w;
                                i.$Right = -i.$Left
                            } else if (B) i.$Right = -g.H * w;
                            else if (A) i.$Left = g.H * w
                        }
                        r.$Clip = t;
                        f.$Clip = g[v]
                    }
                    var L = o ? 1 : -1,
                        M = s ? 1 : -1;
                    if (a.x) e.N += n * a.x * L;
                    if (a.y) e.J += l * a.y * M;
                    b.c(e, function(a, c) {
                        if (b.oc(a))
                            if (a != f[c]) r[c] = a - f[c]
                    });
                    u[v] = j ? f : e;
                    var D = a.mf,
                        y = c.$Round(m * a.$Delay / a.$Interval);
                    h[v] = new Array(y);
                    h[v].k = y;
                    h[v].m = y + D - 1;
                    for (var F = 0; F <= D; F++) {
                        var E = b.Ld(f, r, F / D, a.$Easing, a.$During, a.$Round, {
                            $Move: a.$Move,
                            $OriginalWidth: n,
                            $OriginalHeight: l
                            // console.log(l);
                        });
                        E.$ZIndex = E.$ZIndex || 1;
                        h[v].push(E)
                    }
                })
            });
            o.reverse();
            b.c(o, function(a) {
                b.c(a, function(c) {
                    var f = c[0],
                        e = c[1],
                        d = f + "," + e,
                        a = i;
                    if (e || f) a = b.gb(i);
                    b.Z(a, u[d]);
                    b.Lb(a, "hidden");
                    b.rb(a, "absolute");
                    z.Af(a);
                    m[d] = a;
                    b.eb(a, !j)
                })
            })
        }

        function w() {
            var a = this,
                b = 0;
            l.call(a, 0, v);
            a.ec = function(c, a) {
                if (a - b > i) {
                    b = a;
                    e && e.rc(a);
                    h && h.rc(a)
                }
            };
            a.Xc = q
        }
        a.xf = function() {
            var a = 0,
                b = u.$Transitions,
                d = b.length;
            if (x) a = y++ % d;
            else a = c.P(c.ke() * d);
            b[a] && (b[a].Zb = a);
            return b[a]
        };
        a.tf = function(x, y, k, l, b, t) {
            a.zb();
            q = b;
            b = j(b, i, t);
            var g = l.Ad,
                f = k.Ad;
            g["no-image"] = !l.Uc;
            f["no-image"] = !k.Uc;
            var o = g,
                s = f,
                w = b,
                d = b.$Brother || j({}, i, t);
            if (!b.$SlideOut) {
                o = f;
                s = g
            }
            var u = d.$Shift || 0;
            h = new n(m, s, d, c.m(u - d.$Interval, 0), r, p);
            e = new n(m, o, w, c.m(d.$Interval - u, 0), r, p);
            h.rc(0);
            e.rc(0);
            v = c.m(h.Cd, e.Cd);
            a.Zb = x
        };
        a.zb = function() {
            m.zb();
            h = f;
            e = f
        };
        a.Pe = function() {
            var a = f;
            if (e) a = new w;
            return a
        };
        if (z && b.jg() < 537) i = 16;
        o.call(a);
        l.call(a, -1e7, 1e7)
    };
    var r = {
        yc: 1
    };
    i.$JssorBulletNavigator$ = function() {
        var a = this,
            E = b.V(a, o),
            h, v, C, B, m, l = 0,
            g, s, p, z, A, i, k, u, t, x, j;

        function y(a) {
            j[a] && j[a].ae(a == l)
        }

        function w(b) {
            a.j(r.yc, b * s)
        }
        a.cd = function(a) {
            if (a != m) {
                var d = l,
                    b = c.P(a / s);
                l = b;
                m = a;
                y(d);
                y(b)
            }
        };
        a.dd = function(a) {
            b.eb(h, a)
        };
        a.hd = function(J) {
            b.$Destroy(j);
            m = e;
            a.Rd();
            x = [];
            j = [];
            b.Xb(h);
            v = c.K(J / s);
            l = 0;
            var F = u + z,
                G = t + A,
                r = c.K(v / p) - 1;
            C = u + F * (!i ? r : p - 1);
            B = t + G * (i ? r : p - 1);
            b.C(h, C);
            b.D(h, B);
            for (var n = 0; n < v; n++) {
                var H = b.Cg();
                b.Ag(H, n + 1);
                var o = b.fe(k, "numbertemplate", H, d);
                b.rb(o, "absolute");
                var E = n % (r + 1),
                    I = c.P(n / (r + 1)),
                    y = g.cc && !i ? r - E : E;
                b.Q(o, (!i ? y : I) * F);
                b.ab(o, (i ? y : I) * G);
                b.bb(h, o);
                x[n] = o;
                g.$ActionMode & 1 && a.a(o, "click", b.S(f, w, n));
                g.$ActionMode & 2 && a.a(o, "mouseenter", b.S(f, w, n));
                j[n] = b.qc(o)
            }
            q.Cc(h)
        };
        a.A = function(d, c) {
            a.$Elmt = h = b.$GetElement(d);
            a.Jc = g = b.G({
                $SpacingX: 10,
                $SpacingY: 10,
                $ActionMode: 1
            }, c);
            k = b.$FindChild(h, "prototype");
            u = b.C(k);
            t = b.D(k);
            b.nb(k, h);
            s = g.$Steps || 1;
            p = g.$Rows || 1;
            z = g.$SpacingX;
            A = g.$SpacingY;
            i = g.$Orientation & 2;
            g.$AutoCenter && q.Ac(h, n.yb, g.$AutoCenter)
        };
        a.$Destroy = function() {
            b.$Destroy(j, E)
        };
        b.A(a)
    };
    i.$JssorArrowNavigator$ = function() {
        var a = this,
            v = b.V(a, o),
            e, c, g, l, s, k, h, m, j, i;

        function p(b) {
            a.j(r.yc, b, d)
        }

        function u(a) {
            b.eb(e, a);
            b.eb(c, a)
        }

        function t() {
            j.$Enable((g.$Loop || !l.Ef(h)) && k > 1);
            i.$Enable((g.$Loop || !l.Ff(h)) && k > 1)
        }
        a.cd = function(c, a, b) {
            h = a;
            !b && t()
        };
        a.dd = u;
        a.hd = function(g) {
            k = g;
            h = 0;
            if (!s) {
                a.a(e, "click", b.S(f, p, -m));
                a.a(c, "click", b.S(f, p, m));
                j = b.qc(e);
                i = b.qc(c);
                b.z(e, n.Qc, 1);
                b.z(c, n.Qc, 1);
                s = d
            }
        };
        a.A = function(f, d, h, i) {
            a.Jc = g = b.G({
                $Steps: 1
            }, h);
            e = f;
            c = d;
            if (g.cc) {
                e = d;
                c = f
            }
            m = g.$Steps;
            l = i;
            if (g.$AutoCenter) {
                q.Ac(e, n.yb, g.$AutoCenter);
                q.Ac(c, n.yb, g.$AutoCenter)
            }
            q.Cc(e);
            q.Cc(c)
        };
        a.$Destroy = function() {
            b.$Destroy(j, i, v)
        };
        b.A(a)
    };
    i.$JssorThumbnailNavigator$ = function() {
        var i = this,
            E = b.V(i, o),
            h, B, a, y, C, m, l = [],
            A, z, g, p, s, w, v, x, t, u;

        function D() {
            var c = this;
            b.V(c, o);
            var h, e, n, l;

            function p() {
                n.ae(m == h)
            }

            function j(e) {
                if (e || !t.$LastDragSucceeded()) {
                    var c = g - h % g,
                        a = t.de((h + c) / g - 1),
                        b = a * g + g - c;
                    if (a < 0) b += y % g;
                    if (a >= C) b -= y % g;
                    i.j(r.yc, b, k, d)
                }
            }
            c.ce = p;
            c.A = function(g, i) {
                c.Zb = h = i;
                l = g.Fe || g.Uc || b.Tb();
                c.ld = e = b.fe(u, "thumbnailtemplate", l, d);
                n = b.qc(e);
                a.$ActionMode & 1 && c.a(e, "click", b.S(f, j, 0));
                a.$ActionMode & 2 && c.a(e, "mouseenter", b.S(f, j, 1))
            };
            b.A(c)
        }
        i.cd = function(a, e, d) {
            if (a != m) {
                var b = m;
                m = a;
                b != -1 && l[b].ce();
                l[a] && l[a].ce()
            }!d && t.$PlayTo(t.de(c.P(a / g)))
        };
        i.dd = function(a) {
            b.eb(h, a)
        };
        i.hd = function(I, J) {
            b.$Destroy(t, l);
            m = e;
            l = [];
            var K = b.gb(B);
            b.Xb(h);
            a.cc && b.z(h, "dir", "rtl");
            b.sg(h, b.Eb(K));
            var i = b.$FindChild(h, "slides", d);
            y = I;
            C = c.K(y / g);
            m = -1;
            var f = a.$Orientation & 1,
                r = w + (w + p) * (g - 1) * (1 - f),
                o = v + (v + s) * (g - 1) * f,
                E = (f ? c.m : c.k)(A, r),
                u = (f ? c.k : c.m)(z, o);
            x = c.K((A - p) / (w + p) * f + (z - s) / (v + s) * (1 - f));
            var G = r + (r + p) * (x - 1) * f,
                F = o + (o + s) * (x - 1) * (1 - f);
            E = c.k(E, G);
            u = c.k(u, F);
            b.C(i, E);
            b.D(i, u);
            b.nd(i, 3);
            var n = [];
            b.c(J, function(k, e) {
                var h = new D(k, e),
                    d = h.ld,
                    a = c.P(e / g),
                    j = e % g;
                b.Q(d, (w + p) * j * (1 - f));
                b.ab(d, (v + s) * j * f);
                if (!n[a]) {
                    n[a] = b.Tb();
                    b.bb(i, n[a])
                }
                b.bb(n[a], d);
                l.push(h)
            });
            var H = b.G({
                $AutoPlay: 0,
                $NaviQuitDrag: k,
                $SlideWidth: r,
                $SlideHeight: o,
                $SlideSpacing: p * f + s * (1 - f),
                $MinDragOffsetToSlide: 12,
                $SlideDuration: 200,
                $PauseOnHover: 1,
                $Cols: x,
                $PlayOrientation: a.$Orientation,
                $DragOrientation: a.$NoDrag || a.$DisableDrag ? 0 : a.$Orientation
            }, a);
            t = new j(h, H);
            q.Cc(h)
        };
        i.A = function(j, f, e) {
            h = j;
            i.Jc = a = b.G({
                $SpacingX: 0,
                $SpacingY: 0,
                $Orientation: 1,
                $ActionMode: 1
            }, f);
            A = b.C(h);
            z = b.D(h);
            var c = b.$FindChild(h, "slides", d);
            u = b.$FindChild(c, "prototype");
            e = b.gb(e);
            b.Ib(e, c);
            w = b.C(u);
            v = b.D(u);
            b.nb(u, c);
            b.rb(c, "absolute");
            b.Lb(c, "hidden");
            g = a.$Rows || 1;
            p = a.$SpacingX;
            s = a.$SpacingY;
            a.$AutoCenter &= a.$Orientation;
            a.$AutoCenter && q.Ac(h, n.yb, a.$AutoCenter);
            B = b.gb(h)
        };
        i.$Destroy = function() {
            b.$Destroy(t, l, E)
        };
        b.A(i)
    };

    function p(e, d, c) {
        var a = this;
        b.V(a, o);
        l.call(a, 0, c.$Idle);
        a.jc = 0;
        a.rd = c.$Idle
    }
    p.Rc = 21;
    p.xc = 24;
    var t = i.$JssorCaptionSlideo$ = i.$JssorSlideo$ = function() {
            var a = this,
                gb = b.V(a, o);
            l.call(a, 0, 0);
            var e, u, fb = [g.$Linear, g.$Swing, g.$InQuad, g.$OutQuad, g.$InOutQuad, g.$InCubic, g.$OutCubic, g.$InOutCubic, g.$InQuart, g.$OutQuart, g.$InOutQuart, g.$InQuint, g.$OutQuint, g.$InOutQuint, g.$InSine, g.$OutSine, g.$InOutSine, g.$InExpo, g.$OutExpo, g.$InOutExpo, g.$InCirc, g.$OutCirc, g.$InOutCirc, g.$InElastic, g.$OutElastic, g.$InOutElastic, g.$InBack, g.$OutBack, g.$InOutBack, g.$InBounce, g.$OutBounce, g.$InOutBounce, g.$Early, g.$Late],
                I = {},
                K, E, z = new l(0, 0),
                L = [],
                w = [],
                G, r = 0;

            function N(d, c) {
                var a = {};
                b.c(d, function(d, f) {
                    var e = I[f];
                    if (e) {
                        if (b.Ae(d)) d = N(d, c || f == "e");
                        else if (c)
                            if (b.oc(d)) d = fb[d];
                        a[e] = d
                    }
                });
                return a
            }

            function O(c, f) {
                var e = [],
                    d = b.B(c, "play");
                if (f && d) {
                    var g = new t(c, u, {
                        Fg: d
                    });
                    S.push(g);
                    a.a(g, p.Rc, Y);
                    a.a(g, p.xc, T)
                } else b.c(b.Eb(c), function(a) {
                    e = e.concat(O(a, f + 1))
                });
                if (!f && (!j || j & 16) || f && (!d || !(d & 16))) {
                    var h = K[b.B(c, "t")];
                    h && e.push({
                        $Elmt: c,
                        Xc: h
                    })
                }
                return e
            }

            function H(c, e) {
                var a = L[c];
                if (a == f) {
                    a = L[c] = {
                        pb: c,
                        gd: [],
                        xe: []
                    };
                    var d = 0;
                    !b.c(w, function(a, b) {
                        d = b;
                        return a.pb > c
                    }) && d++;
                    w.splice(d, 0, a)
                }
                return a
            }

            function cb(o, p, g) {
                var a, e;
                if (E) {
                    var k = E[b.B(o, "c")];
                    if (k) {
                        a = H(k.r, 0);
                        a.eh = k.e || 0
                    }
                }
                b.c(p, function(h) {
                    var f = b.G(d, {}, N(h)),
                        i = b.ad(f.$Easing);
                    delete f.$Easing;
                    if (f.$Left) {
                        f.N = f.$Left;
                        i.N = i.$Left;
                        delete f.$Left
                    }
                    if (f.$Top) {
                        f.J = f.$Top;
                        i.J = i.$Top;
                        delete f.$Top
                    }
                    var m = {
                            $Easing: i,
                            $OriginalWidth: g.H,
                            $OriginalHeight: g.I
                        },
                        j = new l(h.b, h.d, m, o, g, f);
                    r = c.m(r, h.b + h.d);
                    if (a) {
                        if (!e) e = new l(h.b, 0);
                        e.U(j)
                    } else {
                        var k = H(h.b, h.b + h.d);
                        k.gd.push(j)
                    }
                    if (f.vb) g.vb = {
                        xd: 0,
                        wd: 0,
                        Bd: 0,
                        $Opacity: 0
                    };
                    g = b.Sg(g, f)
                });
                if (a && e) {
                    e.ef();
                    var h = e,
                        j, i = e.mc(),
                        m = e.ub(),
                        n = c.m(m, a.eh);
                    if (a.pb < m) {
                        if (a.pb > i) {
                            h = new l(i, a.pb - i);
                            h.U(e, d)
                        } else h = f;
                        j = new l(a.pb, n - i, {
                            pc: n - a.pb,
                            Oe: d
                        });
                        j.U(e, d)
                    }
                    h && a.gd.push(h);
                    j && a.xe.push(j)
                }
                return g
            }

            function bb(a) {
                b.c(a, function(f) {
                    var a = f.$Elmt,
                        e = b.C(a),
                        d = b.D(a),
                        c = {
                            $Left: b.Q(a),
                            $Top: b.ab(a),
                            N: 0,
                            J: 0,
                            $Opacity: 1,
                            $ZIndex: b.Y(a) || 0,
                            $Rotate: 0,
                            $RotateX: 0,
                            $RotateY: 0,
                            $ScaleX: 1,
                            $ScaleY: 1,
                            $TranslateX: 0,
                            $TranslateY: 0,
                            $TranslateZ: 0,
                            $SkewX: 0,
                            $SkewY: 0,
                            H: e,
                            I: d,
                            $Clip: {
                                $Top: 0,
                                $Right: e,
                                $Bottom: d,
                                $Left: 0
                            }
                        };
                    c.Fd = c.$Left;
                    c.Pd = c.$Top;
                    cb(a, f.Xc, c)
                })
            }

            function eb(f, e, g) {
                var c = f.b - e;
                if (c) {
                    var b = new l(e, c);
                    b.U(z, d);
                    b.$Shift(g);
                    a.U(b)
                }
                a.Hc(f.d);
                return c
            }

            function db(e) {
                var c = z.mc(),
                    d = 0;
                b.c(e, function(e, f) {
                    e = b.G({
                        d: 3e3
                    }, e);
                    eb(e, c, d);
                    c = e.b;
                    d += e.d;
                    if (!f || e.t == 2) {
                        a.jc = c;
                        a.rd = c + e.d
                    }
                })
            }

            function D(i, d, e) {
                var f = d.length;
                if (f > 4)
                    for (var j = c.K(f / 4), a = 0; a < j; a++) {
                        var g = d.slice(a * 4, c.k(a * 4 + 4, f)),
                            h = new l(g[0].pb, 0);
                        D(h, g, e);
                        i.U(h)
                    } else b.c(d, function(a) {
                        b.c(e ? a.xe : a.gd, function(a) {
                            e && a.Hc(r - a.ub());
                            i.U(a)
                        })
                    })
            }
            var j, M, B = 0,
                i, A, m, P, C, S = [],
                y = [],
                s, F, n;

            function x(a) {
                return a & 2 || a & 4 && b.Sc().Vc
            }

            function Z() {
                if (!C) {
                    i & 8 && a.a(h, "keydown", J);
                    if (i & 32) {
                        a.a(h, "mousedown", v);
                        a.a(h, "touchstart", v)
                    }
                    C = d
                }
            }

            function X() {
                a.T(h, "keydown", J);
                a.T(h, "mousedown", v);
                a.T(h, "touchstart", v);
                C = k
            }

            function Q(b) {
                if (!s || b) {
                    s = d;
                    a.O();
                    b && B && a.M(0);
                    a.Zd(1);
                    a.Se();
                    Z();
                    a.j(p.Rc, a)
                }
            }

            function q() {
                if (!F && (s || a.n())) {
                    F = d;
                    a.O();
                    a.Jd() > a.jc && a.M(a.jc);
                    a.Zd(m || 1);
                    a.sc(0)
                }
            }

            function U() {
                !n && q()
            }

            function R(c) {
                var b = c;
                if (c < 0 && a.n()) b = 1;
                if (b != B) {
                    B = b;
                    M && a.j(p.xc, a, B)
                }
            }

            function J(a) {
                i & 8 && b.re(a) == 27 && q()
            }

            function W(a) {
                if (n && b.qe(a) !== f) {
                    n = k;
                    i & 16 && b.$Delay(U, 160)
                }
            }

            function v(a) {
                i & 32 && !b.ve(e, b.$EvtSrc(a)) && q()
            }

            function V(a) {
                if (!n) {
                    n = d;
                    if (j & 1) b.oe(a, e) && Q()
                }
            }

            function ab(h) {
                var g = b.$EvtSrc(h),
                    a = b.tb(g, f, f, "A"),
                    c = a && (b.ug(a) || a === e || b.ve(e, a));
                if (s && x(i)) !c && q();
                else if (x(j)) !c && Q(d)
            }

            function Y(b) {
                var a = b.Wg();
                childSlideoPlaying = y[a];
                childSlideoPlaying !== b && y[a] && y[a].pg();
                y[a] = b
            }

            function T(b, c) {
                a.j(p.xc, b, c)
            }
            a.Wg = function() {
                return P || ""
            };
            a.pg = q;
            a.pd = function() {
                R(1)
            };
            a.qd = function() {
                s = k;
                F = k;
                R(-1);
                !a.n() && X()
            };
            a.ec = function() {
                !n && A && a.Jd() > a.rd && q()
            };
            a.A = function(l, g, f) {
                e = l;
                u = g;
                j = f.Fg;
                G = f.ng;
                K = u.$Transitions;
                E = u.$Controls;
                var k = {
                    $Top: "y",
                    $Left: "x",
                    $Bottom: "m",
                    $Right: "t",
                    $Rotate: "r",
                    $RotateX: "rX",
                    $RotateY: "rY",
                    $ScaleX: "sX",
                    $ScaleY: "sY",
                    $TranslateX: "tX",
                    $TranslateY: "tY",
                    $TranslateZ: "tZ",
                    $SkewX: "kX",
                    $SkewY: "kY",
                    $Opacity: "o",
                    $Easing: "e",
                    $ZIndex: "i",
                    $Clip: "c",
                    vb: "bc",
                    xd: "re",
                    wd: "gr",
                    Bd: "bl"
                };
                b.c(k, function(b, a) {
                    I[b] = a
                });
                bb(O(e, 0));
                D(z, w);
                if (j) {
                    a.U(z);
                    G = d;
                    A = b.B(e, "idle");
                    (x(j) || x(i)) && a.a(e, "click", ab);
                    if ((j & 1 || A) && !b.Sc().Vc) {
                        a.a(e, "mouseenter", V);
                        a.a(e, "mouseleave", W)
                    }
                    i = b.B(e, "rollback");
                    m = b.X(e, "speed") || "";
                    if (m.substr(0, 1) == "x") m = m.substr(1);
                    m = b.Ce(m);
                    P = b.X(e, "group");
                    M = b.B(e, "pause")
                }
                var h = u.$Breaks || [],
                    c = h[b.B(e, "b")] || [];
                c = c.concat({
                    b: r,
                    d: c.length ? 0 : f.$Idle || A || 0
                });
                db(c);
                G && a.Hc(1e8);
                r = a.ub();
                D(a, w, d);
                a.M(-1);
                a.M(b.B(e, "begin") || 0)
            };
            a.$Destroy = function() {
                b.$Destroy(gb, S);
                a.O();
                a.M(-1)
            };
            b.A(a)
        },
        j = i.$JssorSlider$ = (i.module || {}).exports = function() {
            var a = this,
                Dc = b.V(a, o),
                Nb = "data-jssor-slider",
                hc = "data-jssor-thumb",
                u, m, S, Bb, db, jb, X, J, O, M, Xb, Ac, Ec = 1,
                zc = 1,
                jc = 1,
                pc = 1,
                lc = {},
                x, R, Lb, Zb, Wb, vb, yb, xb, gb, B = [],
                Rb, s = -1,
                rc, q, I, H, P, nb, ob, F, N, kb, T, y, W, mb, Z = [],
                uc, wc, mc, t, ub, Hb, qb, U, Y, qc, Gb, Pb, sc, G, Kb = 0,
                cb = 0,
                Q = Number.MAX_VALUE,
                K = Number.MIN_VALUE,
                D, lb, eb, V = 1,
                Vb = 0,
                pb, A, Eb, Db, L, zb, Cb, C, ab, rb, z, Ab, ac = b.Sc(),
                Fb = ac.Vc,
                w = [],
                E, hb, bb, Mb, gc, kc, ib;

            function Jb() {
                return !V && Y & 12
            }

            function Fc() {
                return Vb || !V && Y & 3
            }

            function Ib() {
                return !A && !Jb() && !z.$IsPlaying()
            }

            function Xc() {
                return !Fc() && Ib()
            }

            function ic() {
                return y || S
            }

            function Oc() {
                return ic() & 2 ? ob : nb
            }

            function Qb(a, c, d) {
                b.Q(a, c);
                b.ab(a, d)
            }

            function Cc(c, b) {
                var a = ic(),
                    d = (nb * b + Kb) * (a & 1),
                    e = (ob * b + Kb) * (a & 2) / 2;
                Qb(c, d, e)
            }

            function cc(b, f) {
                if (A && !(D & 1)) {
                    var e = b,
                        d;
                    if (b < K) {
                        e = K;
                        d = -1
                    }
                    if (b > Q) {
                        e = Q;
                        d = 1
                    }
                    if (d) {
                        var a = b - e;
                        if (f) {
                            a = c.yf(a) * 2 / c.E;
                            a = c.q(a * d, 1.6)
                        } else {
                            a = c.q(a * d, .625);
                            a = c.Ee(a * c.E / 2)
                        }
                        b = e + a * d
                    }
                }
                return b
            }

            function Qc(a) {
                return cc(a, d)
            }

            function Lc(a) {
                return cc(a)
            }

            function wb(a, b) {
                if (!(D & 1)) {
                    var c = a - Q + (b || 0),
                        d = K - a + (b || 0);
                    if (c > 0 && c > d) a = Q;
                    else if (d > 0) a = K
                }
                return a
            }

            function xc(a) {
                return !(D & 1) && a - K < .0001
            }

            function vc(a) {
                return !(D & 1) && Q - a < .0001
            }

            function sb(a) {
                return !(D & 1) && (a - K < .0001 || Q - a < .0001)
            }

            function Sb(c, a, d) {
                !ib && b.c(Z, function(b) {
                    b.cd(c, a, d)
                })
            }

            function dc(b) {
                var a = b,
                    d = sb(b);
                if (d) a = wb(a);
                else {
                    b = v(b);
                    a = b
                }
                a = c.P(a);
                a = c.m(a, 0);
                return a
            }

            function Ic(a) {
                if (a != s) {
                    w[s];
                    Rb = s;
                    s = a;
                    rc = w[s]
                }
            }

            function Uc() {
                y = 0;
                var b = C.n(),
                    d = dc(b);
                Sb(d, b);
                if (sb(b) || b == c.P(b)) {
                    if (t & 2 && (U > 0 && d == q - 1 || U < 0 && !d)) t = 0;
                    Ic(d);
                    a.j(j.$EVT_PARK, s, Rb)
                }
            }

            function nc(a, b) {
                if (q && (!b || !z.$IsPlaying())) {
                    z.O();
                    z.Kc(a, a)
                }
            }

            function tb(a) {
                if (q) {
                    a = v(a);
                    a = wb(a);
                    nc(a)
                } else Sb(0, 0)
            }

            function ad() {
                var b = j.je || 0,
                    a = lb;
                j.je |= a;
                return W = a & ~b
            }

            function Vc() {
                if (W) {
                    j.je &= ~lb;
                    W = 0
                }
            }

            function bd() {
                var a = b.Tb();
                b.Z(a, gb);
                return a
            }

            function v(b, a) {
                a = a || q || 1;
                return (b % a + a) % a
            }

            function ec(c, a, b) {
                t & 8 && (t = 0);
                bc(c, Gb, a, b)
            }

            function Tb() {
                b.c(Z, function(a) {
                    a.dd(a.Jc.$ChanceToShow <= V)
                })
            }

            function Kc(c) {
                if (!V && (b.qe(c) || !b.oe(c, u))) {
                    V = 1;
                    Tb();
                    if (!A) {
                        Y & 12 && Gc();
                        w[s] && w[s].uc()
                    }
                    a.j(j.$EVT_MOUSE_LEAVE)
                }
            }

            function Jc() {
                if (V) {
                    V = 0;
                    Tb();
                    A || !(Y & 12) || Hc()
                }
                a.j(j.$EVT_MOUSE_ENTER)
            }

            function Nc() {
                b.c(B, function(a) {
                    b.Z(a, gb);
                    b.Lb(a, "hidden");
                    b.Cb(a)
                });
                b.Z(R, gb)
            }

            function Ub(b, a) {
                bc(b, a, d)
            }

            function bc(g, h, l, p) {
                if (q && (!A || m.$NaviQuitDrag) && !Jb()) {
                    var f = C.n(),
                        a = g;
                    if (l) {
                        a = f + g;
                        if (D & 2) {
                            if (xc(f) && g < 0) a = Q;
                            if (vc(f) && g > 0) a = K
                        }
                    }
                    if (!(D & 1))
                        if (p) a = v(a);
                        else a = wb(a, .5);
                    if (l && !sb(a)) a = c.$Round(a);
                    var i = (a - f) % q;
                    a = f + i;
                    if (h == e) h = Gb;
                    var b = c.F(i),
                        j = 0;
                    if (b) {
                        if (b < 1) b = c.q(b, .5);
                        if (b > 1) {
                            var o = Oc(),
                                n = (S & 1 ? yb : xb) / o;
                            b = c.k(b, n * 1.5)
                        }
                        j = h * b
                    }
                    ib = d;
                    z.O();
                    ib = k;
                    z.Kc(f, a, j)
                }
            }

            function Rc(e, h, o) {
                var l = this,
                    i = {
                        $Top: 2,
                        $Right: 1,
                        $Bottom: 2,
                        $Left: 1
                    },
                    m = {
                        $Top: "top",
                        $Right: "right",
                        $Bottom: "bottom",
                        $Left: "left"
                    },
                    g, a, f, j, k = {};
                l.$Elmt = e;
                l.$ScaleSize = function(q, l, u) {
                    var p, s = q,
                        r = l;
                    if (!f) {
                        f = b.wg(e);
                        g = e.parentNode;
                        j = {
                            $Scale: b.B(e, n.Hf, 1),
                            $AutoCenter: b.B(e, n.yb)
                        };
                        b.c(m, function(c, a) {
                            k[a] = b.B(e, "data-scale-" + c, 1)
                        });
                        a = e;
                        if (h) {
                            a = b.gb(g, d);
                            b.Z(a, {
                                $Top: 0,
                                $Left: 0
                            });
                            b.bb(a, e);
                            b.bb(g, a)
                        }
                    }
                    if (o) {
                        p = c.m(q, l);
                        if (h)
                            if (u >= 0 && u < 1) {
                                var w = c.k(q, l);
                                p = c.k(p / w, 1 / (1 - u)) * w
                            }
                    } else s = r = p = c.q(O < M ? l : q, j.$Scale);
                    var x = h ? 1.001 : 1,
                        t = p * x;
                    h && (pc = t);
                    b.yg(a, t);
                    b.C(g, f.H * s);
                    b.D(g, f.I * r);
                    var v = b.te() && b.id() < 9 ? t : 1,
                        y = (s - v) * f.H / 2,
                        z = (r - v) * f.I / 2;
                    b.Q(a, y);
                    b.ab(a, z);
                    b.c(f, function(d, a) {
                        if (i[a] && d) {
                            var e = (i[a] & 1) * c.q(q, k[a]) * d + (i[a] & 2) * c.q(l, k[a]) * d / 2;
                            b.Eg[a](g, e)
                        }
                    });
                    b.nd(g, j.$AutoCenter)
                }
            }

            function fd() {
                var a = this;
                l.call(a, 0, 0, {
                    pc: q
                });
                b.c(w, function(b) {
                    a.Gc(b);
                    b.$Shift(G / F)
                })
            }

            function ed() {
                var a = this,
                    b = Ab.$Elmt;
                l.call(a, -1, 2, {
                    $Easing: g.$Linear,
                    Ne: {
                        Ob: Cc
                    },
                    pc: q,
                    $Reverse: Hb
                }, b, {
                    Ob: 1
                }, {
                    Ob: -2
                });
                a.ld = b
            }

            function gd() {
                var b = this;
                l.call(b, -1e8, 2e8);
                b.ec = function(e, b) {
                    if (c.F(b - e) > 1e-5) {
                        var g = b,
                            f = b;
                        if (c.P(b) != b && b > e && (D & 1 || b > cb)) f++;
                        var h = dc(f);
                        Sb(h, g, d);
                        a.j(j.$EVT_POSITION_CHANGE, v(g), v(e), b, e)
                    }
                }
            }

            function Tc(o, n) {
                var b = this,
                    g, i, e, c, h;
                l.call(b, -1e8, 2e8, {
                    Hd: 100
                });
                b.pd = function() {
                    pb = d;
                    a.j(j.$EVT_SWIPE_START, v(C.n()), ab.n())
                };
                b.qd = function() {
                    pb = k;
                    c = k;
                    a.j(j.$EVT_SWIPE_END, v(C.n()), ab.n());
                    !A && Uc()
                };
                b.ec = function(f, b) {
                    var a = b;
                    if (c) a = h;
                    else if (e) {
                        var d = b / e;
                        a = m.$SlideEasing(d) * (i - g) + g
                    }
                    a = Qc(a);
                    ab.M(a)
                };
                b.Kc = function(a, c, h, f) {
                    A = k;
                    e = h || 1;
                    g = a;
                    i = c;
                    ib = d;
                    ab.M(a);
                    ib = k;
                    b.M(0);
                    b.sc(e, f)
                };
                b.Wf = function() {
                    c = d;
                    c && b.$Play(f, f, d)
                };
                b.lg = function(a) {
                    h = a
                };
                ab = new gd;
                ab.U(o);
                ab.U(n)
            }

            function Pc() {
                var c = this,
                    a = bd();
                b.Y(a, 0);
                c.$Elmt = a;
                c.Af = function(c) {
                    b.bb(a, c);
                    b.eb(a)
                };
                c.zb = function() {
                    b.Cb(a);
                    b.Xb(a)
                }
            }

            function dd(r, h) {
                var g = this,
                    ib = b.V(g, o),
                    x, B = 0,
                    V, jb = r,
                    A = b.B(jb, "data-fillmode", m.$FillMode),
                    F, u, z = [],
                    T, K, P, O, i, n, y, Q;
                l.call(g, -N, N + 1, {
                    pc: D & 1 ? q : e,
                    $Reverse: Hb
                });

                function G(a) {
                    x && x.$Destroy();
                    Vb -= B;
                    B = 0;
                    S(r, a, 0);
                    O = d;
                    x = new db.$Class(r, db, {
                        $Idle: b.B(r, "idle", qc),
                        ng: !t
                    });
                    x.$On(p.xc, X)
                }

                function Y() {
                    x.Pc < db.Pc && G()
                }

                function X(b, a) {
                    B += a;
                    Vb += a;
                    if (h == s) !B && g.uc()
                }

                function M(n, p, m) {
                    if (!K) {
                        K = d;
                        if (u && m) {
                            var e = m.width,
                                c = m.height,
                                l = e,
                                i = c;
                            if (e && c && A) {
                                if (A & 3 && (!(A & 4) || e > I || c > H)) {
                                    var f = k,
                                        o = I / H * c / e;
                                    if (A & 1) f = o > 1;
                                    else if (A & 2) f = o < 1;
                                    l = f ? e * H / c : I;
                                    i = f ? H : c * I / e
                                }
                                b.C(u, l);
                                b.D(u, i);
                                b.ab(u, (H - i) / 2);
                                b.Q(u, (I - l) / 2)
                            }
                            b.rb(u, "absolute");
                            a.j(j.$EVT_LOAD_END, h)
                        }
                    }
                    p.ue(k);
                    n && n(g)
                }

                function W(f, b, c, e) {
                    if (e == y && s == h && t && Ib() && !g.bd()) {
                        var a = v(f);
                        E.tf(a, h, b, g, c, H / I);
                        b.gh();
                        rb.$Shift(a - rb.mc() - 1);
                        rb.M(a);
                        nc(a, d)
                    }
                }

                function ab(b) {
                    if (b == y && s == h && Ib() && !g.bd()) {
                        if (!i) {
                            var a = f;
                            if (E)
                                if (E.Zb == h) a = E.Pe();
                                else E.zb();
                            Y();
                            i = new cd(r, h, a, x);
                            i.ch(n)
                        }!i.$IsPlaying() && i.fd()
                    }
                }

                function J(a, d, k) {
                    if (a == h) {
                        if (a != d) w[d] && w[d].he();
                        else !k && i && i.Jg();
                        n && n.$Enable();
                        y = b.Ab();
                        g.Nb(b.S(f, ab, y))
                    } else {
                        var j = c.k(h, a),
                            e = c.m(h, a),
                            o = c.k(e - j, j + q - e),
                            l = N + m.$LazyLoading - 1;
                        (!P || o <= l) && g.Nb()
                    }
                }

                function bb() {
                    if (s == h && i) {
                        i.O();
                        n && n.$Quit();
                        n && n.$Disable();
                        i.le()
                    }
                }

                function fb() {
                    s == h && i && i.O()
                }

                function Z(b) {
                    !eb && a.j(j.$EVT_CLICK, h, b)
                }
                g.ue = function(a) {
                    if (Q != a) {
                        Q = a;
                        a && b.bb(r, F);
                        !a && b.nb(F)
                    }
                };
                g.Nb = function(e, c) {
                    c = c || g;
                    if (z.length && !K) {
                        c.ue(d);
                        if (!T) {
                            T = d;
                            a.j(j.$EVT_LOAD_START, h);
                            b.c(z, function(a) {
                                if (!b.z(a, "src")) {
                                    a.src = b.X(a, "src2") || "";
                                    b.Bb(a, b.z(a, "data-display"))
                                }
                            })
                        }
                        b.cg(z, u, b.S(f, M, e, c))
                    } else M(e, c)
                };
                g.Ng = function() {
                    if (Xc())
                        if (q == 1) {
                            g.he();
                            J(h, h)
                        } else {
                            var a;
                            if (E) a = E.xf(q);
                            if (a) {
                                y = b.Ab();
                                var c = h + U,
                                    d = w[v(c)];
                                return d.Nb(b.S(f, W, c, d, a, y), g)
                            } else(D || !sb(C.n()) || !sb(C.n() + U)) && Ub(U)
                        }
                };
                g.uc = function() {
                    J(h, h, d)
                };
                g.he = function() {
                    n && n.$Quit();
                    n && n.$Disable();
                    g.ze();
                    i && i.Og();
                    i = f;
                    G()
                };
                g.gh = function() {
                    b.Cb(r)
                };
                g.ze = function() {
                    b.eb(r)
                };

                function S(a, h, c) {
                    if (b.z(a, Nb)) return;
                    if (!O) {
                        b.z(a, "data-events", b.zc(a));
                        b.z(a, "data-display", b.Bb(a));
                        b.Zf(a, b.X(a, "data-to"));
                        b.dg(a, b.X(a, "data-bf"));
                        b.bg(a, b.B(a, "data-p"));
                        b.xg(a, b.X(a, "po"));
                        if (a.tagName == "IMG") {
                            z.push(a);
                            if (!b.z(a, "src")) {
                                P = d;
                                b.Cb(a)
                            }
                        }
                        var e = b.gg(a);
                        if (e) {
                            var f = new Image;
                            b.X(f, "src2", e);
                            z.push(f)
                        }
                        c && b.Y(a, (b.Y(a) || 0) + 1)
                    }
                    var g = b.Eb(a);
                    b.c(g, function(d) {
                        if (c < 2 && !u)
                            if (b.X(d, "u") == "image") {
                                u = d;
                                u.border = 0;
                                b.Z(u, gb);
                                b.Z(a, gb)
                            }
                        S(d, h, c + 1)
                    })
                }
                g.Tc = function(c, b) {
                    var a = N - b;
                    Cc(V, a)
                };
                g.Zb = h;
                var L = b.$FindChild(r, "thumb", d);
                if (L) {
                    g.Fe = b.gb(L);
                    b.Cb(L)
                }
                b.eb(r);
                F = b.gb(R);
                b.Y(F, 1e3);
                g.a(r, "click", Z);
                G(d);
                g.Uc = u;
                g.Ad = r;
                g.ld = V = r;
                g.a(a, 203, J);
                g.a(a, 28, fb);
                g.a(a, 24, bb);
                g.$Destroy = function() {
                    b.$Destroy(ib, x, i)
                }
            }

            function cd(F, h, q, r) {
                var c = this,
                    D = b.V(c, o),
                    i = 0,
                    u = 0,
                    g, m, f, e, n, x, v, y = w[h];
                l.call(c, 0, 0);

                function B() {
                    c.fd()
                }

                function C(a) {
                    v = a;
                    c.O();
                    c.fd()
                }

                function z() {}
                c.fd = function() {
                    if (!A && !pb && !v && s == h && !c.bd()) {
                        var k = c.n();
                        if (!k)
                            if (g && !n) {
                                n = d;
                                c.le(d);
                                a.j(j.$EVT_SLIDESHOW_START, h, u, i, u, g, e)
                            }
                        a.j(j.$EVT_STATE_CHANGE, h, k, i, m, f, e);
                        if (!Jb()) {
                            var l;
                            if (k == e) t && b.$Delay(y.Ng, 20);
                            else {
                                if (k == f) l = e;
                                else if (!k) l = f;
                                else l = c.Id();
                                (k != f || !Fc()) && c.sc(l, B)
                            }
                        }
                    }
                };
                c.Jg = function() {
                    f == e && f == c.n() && c.M(m)
                };
                c.Og = function() {
                    E && E.Zb == h && E.zb();
                    var b = c.n();
                    b < e && a.j(j.$EVT_STATE_CHANGE, h, -b - 1, i, m, f, e)
                };
                c.le = function(a) {
                    q && b.Lb(T, a && q.Xc.$Outside ? "" : "hidden")
                };
                c.Tc = function(c, b) {
                    if (n && b >= g) {
                        n = k;
                        y.ze();
                        E.zb();
                        a.j(j.$EVT_SLIDESHOW_END, h, g, i, u, g, e)
                    }
                    a.j(j.$EVT_PROGRESS_CHANGE, h, b, i, m, f, e)
                };
                c.ch = function(a) {
                    if (a && !x) {
                        x = a;
                        a.$On($JssorPlayer$.If, C)
                    }
                };
                c.a(r, p.Rc, z);
                q && c.Gc(q);
                g = c.ub();
                c.Gc(r);
                m = g + r.jc;
                e = c.ub();
                f = t ? g + r.rd : e;
                c.$Destroy = function() {
                    D.$Destroy();
                    c.O()
                }
            }

            function oc() {
                Mb = pb;
                gc = z.Id();
                bb = C.n();
                hb = Lc(bb)
            }

            function Hc() {
                oc();
                if (A || Jb()) {
                    z.O();
                    a.j(j.hf)
                }
            }

            function Gc(f) {
                if (Ib()) {
                    var b = C.n(),
                        a = hb,
                        e = 0;
                    if (f && c.F(L) >= m.$MinDragOffsetToSlide) {
                        a = b;
                        e = Cb
                    }
                    a = c.K(a);
                    a = wb(a + e, .5);
                    var d = c.F(a - b);
                    if (d < 1 && m.$SlideEasing != g.$Linear) d = c.q(d, .5);
                    if ((!eb || !f) && Mb) z.sc(gc);
                    else if (b == a) rc.uc();
                    else z.Kc(b, a, d * Gb)
                }
            }

            function fc(a) {
                !b.tb(b.$EvtSrc(a), e, n.Td) && b.$CancelEvent(a)
            }

            function yc(b) {
                Eb = k;
                A = d;
                Hc();
                if (!Mb) y = 0;
                a.j(j.$EVT_DRAG_START, v(bb), bb, b)
            }

            function Zc(a) {
                Bc(a, 1)
            }

            function Bc(c, d) {
                L = 0;
                zb = 0;
                Cb = 0;
                jc = pc;
                if (d) {
                    var i = c.touches[0];
                    Db = {
                        x: i.clientX,
                        y: i.clientY
                    }
                } else Db = b.jd(c);
                var f = b.$EvtSrc(c),
                    g = b.tb(f, "1", hc);
                if ((!g || g === u) && !W && (!d || c.touches.length == 1)) {
                    mb = b.tb(f, e, n.Td) || !lb || !ad();
                    a.a(h, d ? "touchmove" : "mousemove", Yb);
                    Eb = !mb && b.tb(f, e, n.Qc);
                    !Eb && !mb && yc(c, d)
                }
            }

            function Yb(a) {
                var e, f;
                a = b.Xf(a);
                if (a.type != "mousemove")
                    if (a.touches.length == 1) {
                        f = a.touches[0];
                        e = {
                            x: f.clientX,
                            y: f.clientY
                        }
                    } else fb();
                else e = b.jd(a);
                if (e) {
                    var i = e.x - Db.x,
                        j = e.y - Db.y,
                        g = c.F(i),
                        h = c.F(j);
                    if (y || g > 1.5 || h > 1.5)
                        if (Eb) yc(a, f);
                        else {
                            if (c.P(hb) != hb) y = y || S & W;
                            if ((i || j) && !y) {
                                if (W == 3)
                                    if (h > g) y = 2;
                                    else y = 1;
                                else y = W;
                                if (Fb && y == 1 && h > g * 2.4) mb = d
                            }
                            var l = i,
                                k = nb;
                            if (y == 2) {
                                l = j;
                                k = ob
                            }(L - zb) * qb < -1.5 && (Cb = 0);
                            (L - zb) * qb > 1.5 && (Cb = -1);
                            zb = L;
                            L = l;
                            kc = hb - L * qb / k / jc * m.$DragRatio;
                            if (L && y && !mb) {
                                b.$CancelEvent(a);
                                z.Wf(d);
                                z.lg(kc)
                            }
                        }
                }
            }

            function fb() {
                Vc();
                a.T(h, "mousemove", Yb);
                a.T(h, "touchmove", Yb);
                eb = L;
                if (A) {
                    eb && t & 8 && (t = 0);
                    z.O();
                    A = k;
                    var b = C.n();
                    a.j(j.$EVT_DRAG_END, v(b), b, v(bb), bb);
                    Y & 12 && oc();
                    Gc(d)
                }
            }

            function Mc(a) {
                var c = b.$EvtSrc(a),
                    f = b.tb(c, "1", Nb);
                if (u === f)
                    if (eb) {
                        b.$StopEvent(a);
                        var d = b.tb(c, e, "data-jssor-button", "A");
                        d && b.$CancelEvent(a)
                    } else t & 4 && (t = 0)
            }
            a.$SlidesCount = function() {
                return B.length
            };
            a.$CurrentIndex = function() {
                return s
            };
            a.$CurrentPosition = function() {
                return C.n()
            };
            a.$AutoPlay = function(a) {
                if (a == e) return t;
                if (a != t) {
                    t = a;
                    t && w[s] && w[s].uc()
                }
            };
            a.$IsDragging = function() {
                return A
            };
            a.$IsSliding = function() {
                return pb
            };
            a.$IsMouseOver = function() {
                return !V
            };
            a.$LastDragSucceeded = function() {
                return eb
            };
            a.$OriginalWidth = function() {
                return O
            };
            a.$OriginalHeight = function() {
                return M
            };
            a.$ScaleHeight = function(b) {
                if (b == e) return Ac || M;
                a.$ScaleSize(b / M * O, b)
            };
            a.$ScaleWidth = function(b) {
                if (b == e) return Xb || O;
                a.$ScaleSize(b, b / O * M)
            };
            a.$ScaleSize = function(c, a, d) {
                b.C(u, c);
                b.D(u, a);
                Ec = c / O;
                zc = a / M;
                b.c(lc, function(a) {
                    a.$ScaleSize(Ec, zc, d)
                });
                if (!Xb) {
                    b.Ib(T, x);
                    b.ab(T, 0);
                    b.Q(T, 0)
                }
                Xb = c;
                Ac = a
            };
            a.Ef = xc;
            a.Ff = vc;
            a.$PlayTo = bc;
            a.$GoTo = tb;
            a.$Next = function() {
                Ub(1)
            };
            a.$Prev = function() {
                Ub(-1)
            };
            a.$Pause = function() {
                t = 0
            };
            a.$Play = function() {
                a.$AutoPlay(t || 1)
            };
            a.$SetSlideshowTransitions = function(a) {
                m.$SlideshowOptions.$Transitions = a
            };
            a.$SetCaptionTransitions = function(a) {
                db.$Transitions = a;
                db.Pc = b.Ab()
            };
            a.de = function(a) {
                a = v(a);
                if (D & 1) {
                    var d = G / F,
                        b = v(C.n()),
                        e = v(a - b + d),
                        f = v(c.F(a - b));
                    if (e >= N) {
                        if (f > q / 2)
                            if (a > b) a -= q;
                            else a += q
                    } else if (a > b && e < d) a -= q;
                    else if (a < b && e > d) a += q
                }
                return a
            };

            function Yc() {
                ac.ie && b.Rb(x, ac.ie, ([f, "pan-y", "pan-x", "auto"])[lb] || "");
                a.a(u, "click", Mc, d);
                a.a(u, "mouseleave", Kc);
                a.a(u, "mouseenter", Jc);
                a.a(u, "mousedown", Bc);
                a.a(u, "touchstart", Zc);
                a.a(u, "dragstart", fc);
                a.a(u, "selectstart", fc);
                a.a(i, "mouseup", fb);
                a.a(h, "mouseup", fb);
                a.a(h, "touchend", fb);
                a.a(h, "touchcancel", fb);
                a.a(i, "blur", fb);
                m.$ArrowKeyNavigation && a.a(h, "keydown", function(c) {
                    var a = b.re(c);
                    if (a == 37 || a == 39) {
                        t & 8 && (t = 0);
                        ec(m.$ArrowKeyNavigation * (a - 38) * qb, d)
                    }
                })
            }

            function tc(f) {
                Dc.Rd();
                B = [];
                w = [];
                var g = b.Eb(x),
                    j = b.ye(["DIV", "A", "LI"]);
                b.c(g, function(a) {
                    j[a.tagName.toUpperCase()] && !b.X(a, "u") && b.Bb(a) != "none" && B.push(a);
                    b.Y(a, (b.Y(a) || 0) + 1)
                });
                q = B.length;
                if (q) {
                    var a = S & 1 ? yb : xb;
                    Nc();
                    G = m.$Align;
                    if (G == e) G = (a - F + P) / 2;
                    kb = a / F;
                    N = c.k(q, m.$Cols || q, c.K(kb));
                    D = N < q ? m.$Loop : 0;
                    if (q * F - P <= a) {
                        kb = q - P / F;
                        G = (a - F + P) / 2;
                        Kb = (a - F * q + P) / 2
                    }
                    if (Bb) {
                        Pb = Bb.$Class;
                        sc = !G && N == 1 && q > 1 && Pb && (!b.te() || b.id() >= 9)
                    }
                    if (!(D & 1)) {
                        cb = G / F;
                        if (cb > q - 1) {
                            cb = q - 1;
                            G = cb * F
                        }
                        K = cb;
                        Q = K + q - kb - P / F
                    }
                    lb = (N > 1 || G ? S : -1) & m.$DragOrientation;
                    if (sc) E = new Pb(Ab, I, H, Bb, Fb, Qb);
                    for (var d = 0; d < B.length; d++) {
                        var h = B[d],
                            i = new dd(h, d);
                        w.push(i)
                    }
                    rb = new ed;
                    C = new fd;
                    z = new Tc(C, rb);
                    Yc()
                }
                b.c(Z, function(a) {
                    a.hd(q, w);
                    f && a.$On(r.yc, ec)
                })
            }

            function Ob(a, d, g) {
                b.ne(a) && (a = b.Be("", a));
                var c, f;
                if (q) {
                    if (d == e) d = q;
                    f = "beforebegin";
                    c = B[d];
                    if (!c) {
                        f = "afterend";
                        c = B[q - 1]
                    }
                }
                b.$Destroy(w);
                a && b.rg(c || x, f || "afterbegin", a);
                b.c(g, function(a) {
                    b.nb(a)
                });
                tc()
            }
            a.$AppendSlides = function(f, a) {
                if (a == e) a = s + 1;
                var d = B[s];
                Ob(f, a);
                var c = 0;
                b.c(B, function(a, b) {
                    a == d && (c = b)
                });
                tb(c)
            };
            a.$ReloadSlides = function(a) {
                Ob(a, f, B);
                tb(0)
            };
            a.$RemoveSlides = function(e) {
                var a = s,
                    d = [];
                b.c(e, function(b) {
                    if (b < q && b >= 0) {
                        d.push(B[b]);
                        b < s && a--
                    }
                });
                Ob(f, f, d);
                a = c.k(a, q - 1);
                tb(a)
            };
            a.A = function(i, f) {
                a.$Elmt = u = b.$GetElement(i);
                O = b.C(u);
                M = b.D(u);
                m = b.G({
                    $FillMode: 0,
                    $LazyLoading: 1,
                    $ArrowKeyNavigation: 1,
                    $StartIndex: 0,
                    $AutoPlay: 0,
                    $Loop: 1,
                    $HWA: d,
                    $NaviQuitDrag: d,
                    $AutoPlaySteps: 1,
                    $AutoPlayInterval: 3e3,
                    $PauseOnHover: 1,
                    $SlideDuration: 500,
                    $SlideEasing: g.$OutQuad,
                    $MinDragOffsetToSlide: 20,
                    $DragRatio: 1,
                    $SlideSpacing: 0,
                    $UISearchMode: 1,
                    $PlayOrientation: 1,
                    $DragOrientation: 1
                }, f);
                m.$HWA = m.$HWA && b.Xg();
                if (m.$Idle != e) m.$AutoPlayInterval = m.$Idle;
                if (m.$DisplayPieces != e) m.$Cols = m.$DisplayPieces;
                if (m.$ParkingPosition != e) m.$Align = m.$ParkingPosition;
                t = m.$AutoPlay & 63;
                !m.$UISearchMode;
                U = m.$AutoPlaySteps;
                Y = m.$PauseOnHover;
                Y &= Fb ? 10 : 5;
                qc = m.$AutoPlayInterval;
                Gb = m.$SlideDuration;
                S = m.$PlayOrientation & 3;
                ub = b.Me(b.z(u, "dir")) == "rtl";
                Hb = ub && (S == 1 || m.$DragOrientation & 1);
                qb = Hb ? -1 : 1;
                Bb = m.$SlideshowOptions;
                db = b.G({
                    $Class: p
                }, m.$CaptionSliderOptions);
                jb = m.$BulletNavigatorOptions;
                X = m.$ArrowNavigatorOptions;
                J = m.$ThumbnailNavigatorOptions;
                var c = b.Eb(u);
                b.c(c, function(a, d) {
                    var c = b.X(a, "u");
                    if (c == "loading") R = a;
                    else {
                        if (c == "slides") {
                            x = a;
                            b.Rb(x, "margin", 0);
                            b.Rb(x, "padding", 0)
                        }
                        if (c == "navigator") Lb = a;
                        if (c == "arrowleft") Zb = a;
                        if (c == "arrowright") Wb = a;
                        if (c == "thumbnavigator") vb = a;
                        if (a.tagName != "STYLE" && a.tagName != "SCRIPT") lc[c || d] = new Rc(a, c == "slides", b.ye(["slides", "thumbnavigator"])[c])
                    }
                });
                R && b.nb(R);
                R = R || b.Tb(h);
                yb = b.C(x);
                xb = b.D(x);
                I = m.$SlideWidth || yb;
                H = m.$SlideHeight || xb;
                gb = {
                    H: I,
                    I: H,
                    $Top: 0,
                    $Left: 0,
                    Sd: "block",
                    Ob: "absolute"
                };
                P = m.$SlideSpacing;
                nb = I + P;
                ob = H + P;
                F = S & 1 ? nb : ob;
                Ab = new Pc;
                if (m.$HWA && (!b.bh() || Fb)) Qb = function(a, c, d) {
                    b.fh(a, {
                        $TranslateX: c,
                        $TranslateY: d
                    })
                };
                b.z(u, Nb, "1");
                b.Y(x, b.Y(x) || 0);
                b.rb(x, "absolute");
                T = b.gb(x, d);
                b.Rb(T, "pointerEvents", "none");
                b.Ib(T, x);
                b.bb(T, Ab.$Elmt);
                b.Lb(x, "hidden");
                if (Lb && jb) {
                    jb.cc = ub;
                    uc = new jb.$Class(Lb, jb, O, M);
                    Z.push(uc)
                }
                if (X && Zb && Wb) {
                    X.cc = ub;
                    X.$Loop = m.$Loop;
                    wc = new X.$Class(Zb, Wb, X, a);
                    Z.push(wc)
                }
                if (vb && J) {
                    J.$StartIndex = m.$StartIndex;
                    J.$ArrowKeyNavigation = J.$ArrowKeyNavigation || 0;
                    J.cc = ub;
                    mc = new J.$Class(vb, J, R);
                    !J.$NoDrag && b.z(vb, hc, "1");
                    Z.push(mc)
                }
                tc(d);
                a.$ScaleSize(O, M);
                Tb();
                tb(v(m.$StartIndex));
                b.Rb(u, "visibility", "visible")
            };
            a.$Destroy = function() {
                t = 0;
                b.$Destroy(w, Z, Dc);
                b.Xb(u)
            };
            b.A(a)
        };
    j.$EVT_CLICK = 21;
    j.$EVT_DRAG_START = 22;
    j.$EVT_DRAG_END = 23;
    j.$EVT_SWIPE_START = 24;
    j.$EVT_SWIPE_END = 25;
    j.$EVT_LOAD_START = 26;
    j.$EVT_LOAD_END = 27;
    j.hf = 28;
    j.$EVT_MOUSE_ENTER = 31;
    j.$EVT_MOUSE_LEAVE = 32;
    j.$EVT_POSITION_CHANGE = 202;
    j.$EVT_PARK = 203;
    j.$EVT_SLIDESHOW_START = 206;
    j.$EVT_SLIDESHOW_END = 207;
    j.$EVT_PROGRESS_CHANGE = 208;
    j.$EVT_STATE_CHANGE = 209
}(window, document, Math, null, true, false)




jssor_1_slider_init = function() {

            var jssor_1_options = {
              $AutoPlay: 1,
              $Idle: 0,
              $SlideDuration: 5000,
              $SlideEasing: $Jease$.$Linear,
              $PauseOnHover: 4,
              $SlideWidth: 340,
              $Align: 0
            };

            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

            /*#region responsive code begin*/

            var MAX_WIDTH = 980;

            function ScaleSlider() {
                var containerElement = jssor_1_slider.$Elmt.parentNode;
                var containerWidth = containerElement.clientWidth;

                if (containerWidth) {

                    var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

                    jssor_1_slider.$ScaleWidth(expectedWidth);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }

            ScaleSlider();

            $Jssor$.$AddEvent(window, "load", ScaleSlider);
            $Jssor$.$AddEvent(window, "resize", ScaleSlider);
            $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
            /*#endregion responsive code end*/
        };