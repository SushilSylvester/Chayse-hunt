/*! modernizr 3.1.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-backgroundblendmode-cssanimations-cssfilters-cssgradients-cssmask-csspointerevents-csstransforms-csstransforms3d-csstransitions-multiplebgs-opacity-preserve3d-svgclippaths-touchevents-webaudio !*/
! function(e, t, n) {
    function r(e, t) {
        return typeof e === t
    }

    function s() {
        var e, t, n, s, o, i, a;
        for (var u in x) {
            if (e = [], t = x[u], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
            for (s = r(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++) i = e[o], a = i.split("."), 1 === a.length ? Modernizr[a[0]] = s : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = s), y.push((s ? "" : "no-") + a.join("-"))
        }
    }

    function o(e) {
        var t = C.className,
            n = Modernizr._config.classPrefix || "";
        if (w && (t = t.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2")
        }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), w ? C.className.baseVal = t : C.className = t)
    }

    function i() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : w ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }

    function a(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }

    function u() {
        var e = t.body;
        return e || (e = i(w ? "svg" : "body"), e.fake = !0), e
    }

    function f(e, n, r, s) {
        var o, a, f, l, d = "modernizr",
            c = i("div"),
            p = u();
        if (parseInt(r, 10))
            for (; r--;) f = i("div"), f.id = s ? s[r] : d + (r + 1), c.appendChild(f);
        return o = i("style"), o.type = "text/css", o.id = "s" + d, (p.fake ? p : c).appendChild(o), p.appendChild(c), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(t.createTextNode(e)), c.id = d, p.fake && (p.style.background = "", p.style.overflow = "hidden", l = C.style.overflow, C.style.overflow = "hidden", C.appendChild(p)), a = n(c, e), p.fake ? (p.parentNode.removeChild(p), C.style.overflow = l, C.offsetHeight) : c.parentNode.removeChild(c), !!a
    }

    function l(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function d(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }

    function c(e, t, n) {
        var s;
        for (var o in e)
            if (e[o] in t) return n === !1 ? e[o] : (s = t[e[o]], r(s, "function") ? d(s, n || t) : s);
        return !1
    }

    function p(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function m(t, r) {
        var s = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; s--;)
                if (e.CSS.supports(p(t[s]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var o = []; s--;) o.push("(" + p(t[s]) + ":" + r + ")");
            return o = o.join(" or "), f("@supports (" + o + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == getComputedStyle(e, null).position
            })
        }
        return n
    }

    function v(e, t, s, o) {
        function u() {
            d && (delete L.style, delete L.modElem)
        }
        if (o = r(o, "undefined") ? !1 : o, !r(s, "undefined")) {
            var f = m(e, s);
            if (!r(f, "undefined")) return f
        }
        for (var d, c, p, v, g, h = ["modernizr", "tspan"]; !L.style;) d = !0, L.modElem = i(h.shift()), L.style = L.modElem.style;
        for (p = e.length, c = 0; p > c; c++)
            if (v = e[c], g = L.style[v], l(v, "-") && (v = a(v)), L.style[v] !== n) {
                if (o || r(s, "undefined")) return u(), "pfx" == t ? v : !0;
                try {
                    L.style[v] = s
                } catch (y) {}
                if (L.style[v] != g) return u(), "pfx" == t ? v : !0
            }
        return u(), !1
    }

    function g(e, t, n, s, o) {
        var i = e.charAt(0).toUpperCase() + e.slice(1),
            a = (e + " " + z.join(i + " ") + i).split(" ");
        return r(t, "string") || r(t, "undefined") ? v(a, t, s, o) : (a = (e + " " + N.join(i + " ") + i).split(" "), c(a, t, n))
    }

    function h(e, t, r) {
        return g(e, n, n, t, r)
    }
    var y = [],
        x = [],
        b = {
            _version: "3.1.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, t) {
                var n = this;
                setTimeout(function() {
                    t(n[e])
                }, 0)
            },
            addTest: function(e, t, n) {
                x.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function(e) {
                x.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function() {};
    Modernizr.prototype = b, Modernizr = new Modernizr, Modernizr.addTest("webaudio", function() {
        var t = "webkitAudioContext" in e,
            n = "AudioContext" in e;
        return Modernizr._config.usePrefixes ? t || n : n
    });
    var C = t.documentElement,
        w = "svg" === C.nodeName.toLowerCase(),
        T = b._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : [];
    b._prefixes = T, Modernizr.addTest("cssgradients", function() {
        var e = "background-image:",
            t = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
            n = "linear-gradient(left top,#9f9, white);",
            r = e + T.join(n + e).slice(0, -e.length);
        Modernizr._config.usePrefixes && (r += e + "-webkit-" + t);
        var s = i("a"),
            o = s.style;
        return o.cssText = r, ("" + o.backgroundImage).indexOf("gradient") > -1
    }), Modernizr.addTest("multiplebgs", function() {
        var e = i("a").style;
        return e.cssText = "background:url(https://),url(https://),red url(https://)", /(url\s*\(.*?){3}/.test(e.background)
    }), Modernizr.addTest("opacity", function() {
        var e = i("a").style;
        return e.cssText = T.join("opacity:.55;"), /^0.55$/.test(e.opacity)
    }), Modernizr.addTest("csspointerevents", function() {
        var e = i("a").style;
        return e.cssText = "pointer-events:auto", "auto" === e.pointerEvents
    });
    var S = "CSS" in e && "supports" in e.CSS,
        _ = "supportsCSS" in e;
    Modernizr.addTest("supports", S || _);
    var k = {}.toString;
    Modernizr.addTest("svgclippaths", function() {
        return !!t.createElementNS && /SVGClipPath/.test(k.call(t.createElementNS("http://www.w3.org/2000/svg", "clipPath")))
    });
    var P = b.testStyles = f;
    Modernizr.addTest("touchevents", function() {
        var n;
        if ("ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch) n = !0;
        else {
            var r = ["@media (", T.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            P(r, function(e) {
                n = 9 === e.offsetTop
            })
        }
        return n
    });
    var E = "Moz O ms Webkit",
        z = b._config.usePrefixes ? E.split(" ") : [];
    b._cssomPrefixes = z;
    var j = function(t) {
        var r, s = T.length,
            o = e.CSSRule;
        if ("undefined" == typeof o) return n;
        if (!t) return !1;
        if (t = t.replace(/^@/, ""), r = t.replace(/-/g, "_").toUpperCase() + "_RULE", r in o) return "@" + t;
        for (var i = 0; s > i; i++) {
            var a = T[i],
                u = a.toUpperCase() + "_" + r;
            if (u in o) return "@-" + a.toLowerCase() + "-" + t
        }
        return !1
    };
    b.atRule = j;
    var N = b._config.usePrefixes ? E.toLowerCase().split(" ") : [];
    b._domPrefixes = N;
    var A = {
        elem: i("modernizr")
    };
    Modernizr._q.push(function() {
        delete A.elem
    });
    var L = {
        style: A.elem.style
    };
    Modernizr._q.unshift(function() {
        delete L.style
    }), b.testAllProps = g, b.testAllProps = h, Modernizr.addTest("cssanimations", h("animationName", "a", !0)), Modernizr.addTest("cssfilters", function() {
        if (Modernizr.supports) return h("filter", "blur(2px)");
        var e = i("a");
        return e.style.cssText = T.join("filter:blur(2px); "), !!e.style.length && (t.documentMode === n || t.documentMode > 9)
    }), Modernizr.addTest("cssmask", h("maskRepeat", "repeat-x", !0)), Modernizr.addTest("csstransforms", function() {
        return -1 === navigator.userAgent.indexOf("Android 2.") && h("transform", "scale(1)", !0)
    }), Modernizr.addTest("preserve3d", h("transformStyle", "preserve-3d")), Modernizr.addTest("csstransforms3d", function() {
        var e = !!h("perspective", "1px", !0),
            t = Modernizr._config.usePrefixes;
        if (e && (!t || "webkitPerspective" in C.style)) {
            var n;
            Modernizr.supports ? n = "@supports (perspective: 1px)" : (n = "@media (transform-3d)", t && (n += ",(-webkit-transform-3d)")), n += "{#modernizr{left:9px;position:absolute;height:5px;margin:0;padding:0;border:0}}", P(n, function(t) {
                e = 9 === t.offsetLeft && 5 === t.offsetHeight
            })
        }
        return e
    }), Modernizr.addTest("csstransitions", h("transition", "all", !0));
    var O = b.prefixed = function(e, t, n) {
        return 0 === e.indexOf("@") ? j(e) : (-1 != e.indexOf("-") && (e = a(e)), t ? g(e, t, n) : g(e, "pfx"))
    };
    Modernizr.addTest("backgroundblendmode", O("backgroundBlendMode", "text")), s(), o(y), delete b.addTest, delete b.addAsyncTest;
    for (var R = 0; R < Modernizr._q.length; R++) Modernizr._q[R]();
    e.Modernizr = Modernizr
}(window, document);