window.NREUM || (NREUM = {}), __nr_require = function (e, t, n) {
    function i(n) {
        if (!t[n]) {
            var r = t[n] = {exports: {}};
            e[n][0].call(r.exports, function (t) {
                var r = e[n][1][t];
                return i(r ? r : t)
            }, r, r.exports)
        }
        return t[n].exports
    }

    if ("function" == typeof __nr_require)return __nr_require;
    for (var r = 0; r < n.length; r++)i(n[r]);
    return i
}({
    QJf3ax: [function (e, t) {
        function n(e) {
            function t(t, n, o) {
                e && e(t, n, o), o || (o = {});
                for (var l = s(t), u = l.length, c = a(o, r, i), d = 0; u > d; d++)l[d].apply(c, n);
                return c
            }

            function o(e, t) {
                u[e] = s(e).concat(t)
            }

            function s(e) {
                return u[e] || []
            }

            function l() {
                return n(t)
            }

            var u = {};
            return {on: o, emit: t, create: l, listeners: s, _events: u}
        }

        function i() {
            return {}
        }

        var r = "nr@context", a = e("gos");
        t.exports = n()
    }, {gos: "7eSDFh"}], ee: [function (e, t) {
        t.exports = e("QJf3ax")
    }, {}], 3: [function (e) {
        function t(e) {
            try {
                a.console && void 0
            } catch (t) {
            }
        }

        var n, i = e("ee"), r = e(1), a = {};
        try {
            n = localStorage.getItem("__nr_flags").split(","), console && "function" == typeof console.log && (a.console = !0, -1 !== n.indexOf("dev") && (a.dev = !0), -1 !== n.indexOf("nr_dev") && (a.nrDev = !0))
        } catch (o) {
        }
        a.nrDev && i.on("internal-error", function (e) {
            t(e.stack)
        }), a.dev && i.on("fn-err", function (e, n, i) {
            t(i.stack)
        }), a.dev && (t("NR AGENT IN DEVELOPMENT MODE"), t("flags: " + r(a, function (e) {
                return e
            }).join(", ")))
    }, {1: 22, ee: "QJf3ax"}], 4: [function (e) {
        function t(e, t, i, o, l) {
            try {
                u ? u -= 1 : r("err", [l || new n(e, t, i)])
            } catch (c) {
                try {
                    r("ierr", [c, (new Date).getTime(), !0])
                } catch (d) {
                }
            }
            return "function" == typeof s ? s.apply(this, a(arguments)) : !1
        }

        function n(e, t, n) {
            this.message = e || "Uncaught error with no additional information", this.sourceURL = t, this.line = n
        }

        function i(e) {
            r("err", [e, (new Date).getTime()])
        }

        var r = e("handle"), a = e(6), o = e("ee"), s = window.onerror, l = !1, u = 0;
        e("loader").features.err = !0, e(5), window.onerror = t;
        try {
            throw new Error
        } catch (c) {
            "stack"in c && (e(1), e(2), "addEventListener"in window && e(3), window.XMLHttpRequest && XMLHttpRequest.prototype && XMLHttpRequest.prototype.addEventListener && window.XMLHttpRequest && XMLHttpRequest.prototype && XMLHttpRequest.prototype.addEventListener && !/CriOS/.test(navigator.userAgent) && e(4), l = !0)
        }
        o.on("fn-start", function () {
            l && (u += 1)
        }), o.on("fn-err", function (e, t, n) {
            l && (this.thrown = !0, i(n))
        }), o.on("fn-end", function () {
            l && !this.thrown && u > 0 && (u -= 1)
        }), o.on("internal-error", function (e) {
            r("ierr", [e, (new Date).getTime(), !0])
        })
    }, {1: 9, 2: 8, 3: 6, 4: 10, 5: 3, 6: 23, ee: "QJf3ax", handle: "D5DuLP", loader: "G9z0Bl"}], 5: [function (e) {
        function t() {
        }

        if (window.performance && window.performance.timing && window.performance.getEntriesByType) {
            var n = e("ee"), i = e("handle"), r = e(1), a = e(2);
            e("loader").features.stn = !0, e(3), n.on("fn-start", function (e) {
                var t = e[0];
                t instanceof Event && (this.bstStart = Date.now())
            }), n.on("fn-end", function (e, t) {
                var n = e[0];
                n instanceof Event && i("bst", [n, t, this.bstStart, Date.now()])
            }), r.on("fn-start", function (e, t, n) {
                this.bstStart = Date.now(), this.bstType = n
            }), r.on("fn-end", function (e, t) {
                i("bstTimer", [t, this.bstStart, Date.now(), this.bstType])
            }), a.on("fn-start", function () {
                this.bstStart = Date.now()
            }), a.on("fn-end", function (e, t) {
                i("bstTimer", [t, this.bstStart, Date.now(), "requestAnimationFrame"])
            }), n.on("pushState-start", function () {
                this.time = Date.now(), this.startPath = location.pathname + location.hash
            }), n.on("pushState-end", function () {
                i("bstHist", [location.pathname + location.hash, this.startPath, this.time])
            }), "addEventListener"in window.performance && (window.performance.addEventListener("webkitresourcetimingbufferfull", function () {
                i("bstResource", [window.performance.getEntriesByType("resource")]), window.performance.webkitClearResourceTimings()
            }, !1), window.performance.addEventListener("resourcetimingbufferfull", function () {
                i("bstResource", [window.performance.getEntriesByType("resource")]), window.performance.clearResourceTimings()
            }, !1)), document.addEventListener("scroll", t, !1), document.addEventListener("keypress", t, !1), document.addEventListener("click", t, !1)
        }
    }, {1: 9, 2: 8, 3: 7, ee: "QJf3ax", handle: "D5DuLP", loader: "G9z0Bl"}], 6: [function (e, t) {
        function n(e) {
            a.inPlace(e, ["addEventListener", "removeEventListener"], "-", i)
        }

        function i(e) {
            return e[1]
        }

        var r = (e(1), e("ee").create()), a = e(2)(r), o = e("gos");
        if (t.exports = r, n(window), "getPrototypeOf"in Object) {
            for (var s = document; s && !s.hasOwnProperty("addEventListener");)s = Object.getPrototypeOf(s);
            s && n(s);
            for (var l = XMLHttpRequest.prototype; l && !l.hasOwnProperty("addEventListener");)l = Object.getPrototypeOf(l);
            l && n(l)
        } else XMLHttpRequest.prototype.hasOwnProperty("addEventListener") && n(XMLHttpRequest.prototype);
        r.on("addEventListener-start", function (e) {
            if (e[1]) {
                var t = e[1];
                "function" == typeof t ? this.wrapped = e[1] = o(t, "nr@wrapped", function () {
                    return a(t, "fn-", null, t.name || "anonymous")
                }) : "function" == typeof t.handleEvent && a.inPlace(t, ["handleEvent"], "fn-")
            }
        }), r.on("removeEventListener-start", function (e) {
            var t = this.wrapped;
            t && (e[1] = t)
        })
    }, {1: 23, 2: 24, ee: "QJf3ax", gos: "7eSDFh"}], 7: [function (e, t) {
        var n = (e(2), e("ee").create()), i = e(1)(n);
        t.exports = n, i.inPlace(window.history, ["pushState"], "-")
    }, {1: 24, 2: 23, ee: "QJf3ax"}], 8: [function (e, t) {
        var n = (e(2), e("ee").create()), i = e(1)(n);
        t.exports = n, i.inPlace(window, ["requestAnimationFrame", "mozRequestAnimationFrame", "webkitRequestAnimationFrame", "msRequestAnimationFrame"], "raf-"), n.on("raf-start", function (e) {
            e[0] = i(e[0], "fn-")
        })
    }, {1: 24, 2: 23, ee: "QJf3ax"}], 9: [function (e, t) {
        function n(e, t, n) {
            e[0] = r(e[0], "fn-", null, n)
        }

        var i = (e(2), e("ee").create()), r = e(1)(i);
        t.exports = i, r.inPlace(window, ["setTimeout", "setInterval", "setImmediate"], "setTimer-"), i.on("setTimer-start", n)
    }, {1: 24, 2: 23, ee: "QJf3ax"}], 10: [function (e, t) {
        function n() {
            u.inPlace(this, p, "fn-")
        }

        function i(e, t) {
            u.inPlace(t, ["onreadystatechange"], "fn-")
        }

        function r(e, t) {
            return t
        }

        function a(e, t) {
            for (var n in e)t[n] = e[n];
            return t
        }

        var o = e("ee").create(), s = e(1), l = e(2), u = l(o), c = l(s), d = window.XMLHttpRequest, p = ["onload", "onerror", "onabort", "onloadstart", "onloadend", "onprogress", "ontimeout"];
        t.exports = o, window.XMLHttpRequest = function (e) {
            var t = new d(e);
            try {
                o.emit("new-xhr", [], t), c.inPlace(t, ["addEventListener", "removeEventListener"], "-", r), t.addEventListener("readystatechange", n, !1)
            } catch (i) {
                try {
                    o.emit("internal-error", [i])
                } catch (a) {
                }
            }
            return t
        }, a(d, XMLHttpRequest), XMLHttpRequest.prototype = d.prototype, u.inPlace(XMLHttpRequest.prototype, ["open", "send"], "-xhr-", r), o.on("send-xhr-start", i), o.on("open-xhr-start", i)
    }, {1: 6, 2: 24, ee: "QJf3ax"}], 11: [function (e) {
        function t(e) {
            var t = this.params, i = this.metrics;
            if (!this.ended) {
                this.ended = !0;
                for (var a = 0; l > a; a++)e.removeEventListener(s[a], this.listener, !1);
                if (!t.aborted) {
                    if (i.duration = (new Date).getTime() - this.startTime, 4 === e.readyState) {
                        t.status = e.status;
                        var o = e.responseType, u = "arraybuffer" === o || "blob" === o || "json" === o ? e.response : e.responseText, c = n(u);
                        if (c && (i.rxSize = c), this.sameOrigin) {
                            var d = e.getResponseHeader("X-NewRelic-App-Data");
                            d && (t.cat = d.split(", ").pop())
                        }
                    } else t.status = 0;
                    i.cbTime = this.cbTime, r("xhr", [t, i, this.startTime])
                }
            }
        }

        function n(e) {
            if ("string" == typeof e && e.length)return e.length;
            if ("object" != typeof e)return void 0;
            if ("undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer && e.byteLength)return e.byteLength;
            if ("undefined" != typeof Blob && e instanceof Blob && e.size)return e.size;
            if ("undefined" != typeof FormData && e instanceof FormData)return void 0;
            try {
                return JSON.stringify(e).length
            } catch (t) {
                return void 0
            }
        }

        function i(e, t) {
            var n = a(t), i = e.params;
            i.host = n.hostname + ":" + n.port, i.pathname = n.pathname, e.sameOrigin = n.sameOrigin
        }

        if (window.XMLHttpRequest && XMLHttpRequest.prototype && XMLHttpRequest.prototype.addEventListener && !/CriOS/.test(navigator.userAgent)) {
            e("loader").features.xhr = !0;
            var r = e("handle"), a = e(2), o = e("ee"), s = ["load", "error", "abort", "timeout"], l = s.length, u = e(1);
            e(4), e(3), o.on("new-xhr", function () {
                this.totalCbs = 0, this.called = 0, this.cbTime = 0, this.end = t, this.ended = !1, this.xhrGuids = {}
            }), o.on("open-xhr-start", function (e) {
                this.params = {method: e[0]}, i(this, e[1]), this.metrics = {}
            }), o.on("open-xhr-end", function (e, t) {
                "loader_config"in NREUM && "xpid"in NREUM.loader_config && this.sameOrigin && t.setRequestHeader("X-NewRelic-ID", NREUM.loader_config.xpid)
            }), o.on("send-xhr-start", function (e, t) {
                var i = this.metrics, r = e[0], a = this;
                if (i && r) {
                    var u = n(r);
                    u && (i.txSize = u)
                }
                this.startTime = (new Date).getTime(), this.listener = function (e) {
                    try {
                        "abort" === e.type && (a.params.aborted = !0), ("load" !== e.type || a.called === a.totalCbs && (a.onloadCalled || "function" != typeof t.onload)) && a.end(t)
                    } catch (n) {
                        try {
                            o.emit("internal-error", [n])
                        } catch (i) {
                        }
                    }
                };
                for (var c = 0; l > c; c++)t.addEventListener(s[c], this.listener, !1)
            }), o.on("xhr-cb-time", function (e, t, n) {
                this.cbTime += e, t ? this.onloadCalled = !0 : this.called += 1, this.called !== this.totalCbs || !this.onloadCalled && "function" == typeof n.onload || this.end(n)
            }), o.on("xhr-load-added", function (e, t) {
                var n = "" + u(e) + !!t;
                this.xhrGuids && !this.xhrGuids[n] && (this.xhrGuids[n] = !0, this.totalCbs += 1)
            }), o.on("xhr-load-removed", function (e, t) {
                var n = "" + u(e) + !!t;
                this.xhrGuids && this.xhrGuids[n] && (delete this.xhrGuids[n], this.totalCbs -= 1)
            }), o.on("addEventListener-end", function (e, t) {
                t instanceof XMLHttpRequest && "load" === e[0] && o.emit("xhr-load-added", [e[1], e[2]], t)
            }), o.on("removeEventListener-end", function (e, t) {
                t instanceof XMLHttpRequest && "load" === e[0] && o.emit("xhr-load-removed", [e[1], e[2]], t)
            }), o.on("fn-start", function (e, t, n) {
                t instanceof XMLHttpRequest && ("onload" === n && (this.onload = !0), ("load" === (e[0] && e[0].type) || this.onload) && (this.xhrCbStart = (new Date).getTime()))
            }), o.on("fn-end", function (e, t) {
                this.xhrCbStart && o.emit("xhr-cb-time", [(new Date).getTime() - this.xhrCbStart, this.onload, t], t)
            })
        }
    }, {1: "XL7HBI", 2: 12, 3: 10, 4: 6, ee: "QJf3ax", handle: "D5DuLP", loader: "G9z0Bl"}], 12: [function (e, t) {
        t.exports = function (e) {
            var t = document.createElement("a"), n = window.location, i = {};
            t.href = e, i.port = t.port;
            var r = t.href.split("://");
            return !i.port && r[1] && (i.port = r[1].split("/")[0].split("@").pop().split(":")[1]), i.port && "0" !== i.port || (i.port = "https" === r[0] ? "443" : "80"), i.hostname = t.hostname || n.hostname, i.pathname = t.pathname, i.protocol = r[0], "/" !== i.pathname.charAt(0) && (i.pathname = "/" + i.pathname), i.sameOrigin = !t.hostname || t.hostname === document.domain && t.port === n.port && t.protocol === n.protocol, i
        }
    }, {}], 13: [function (e, t) {
        function n(e) {
            return function () {
                i(e, [(new Date).getTime()].concat(a(arguments)))
            }
        }

        var i = e("handle"), r = e(1), a = e(2);
        "undefined" == typeof window.newrelic && (newrelic = window.NREUM);
        var o = ["setPageViewName", "addPageAction", "setCustomAttribute", "finished", "addToTrace", "inlineHit", "noticeError"];
        r(o, function (e, t) {
            window.NREUM[t] = n("api-" + t)
        }), t.exports = window.NREUM
    }, {1: 22, 2: 23, handle: "D5DuLP"}], "7eSDFh": [function (e, t) {
        function n(e, t, n) {
            if (i.call(e, t))return e[t];
            var r = n();
            if (Object.defineProperty && Object.keys)try {
                return Object.defineProperty(e, t, {value: r, writable: !0, enumerable: !1}), r
            } catch (a) {
            }
            return e[t] = r, r
        }

        var i = Object.prototype.hasOwnProperty;
        t.exports = n
    }, {}], gos: [function (e, t) {
        t.exports = e("7eSDFh")
    }, {}], handle: [function (e, t) {
        t.exports = e("D5DuLP")
    }, {}], D5DuLP: [function (e, t) {
        function n(e, t, n) {
            return i.listeners(e).length ? i.emit(e, t, n) : (r[e] || (r[e] = []), void r[e].push(t))
        }

        var i = e("ee").create(), r = {};
        t.exports = n, n.ee = i, i.q = r
    }, {ee: "QJf3ax"}], id: [function (e, t) {
        t.exports = e("XL7HBI")
    }, {}], XL7HBI: [function (e, t) {
        function n(e) {
            var t = typeof e;
            return !e || "object" !== t && "function" !== t ? -1 : e === window ? 0 : a(e, r, function () {
                return i++
            })
        }

        var i = 1, r = "nr@id", a = e("gos");
        t.exports = n
    }, {gos: "7eSDFh"}], G9z0Bl: [function (e, t) {
        function n() {
            var e = p.info = NREUM.info, t = u.getElementsByTagName("script")[0];
            if (e && e.licenseKey && e.applicationID && t) {
                s(d, function (t, n) {
                    t in e || (e[t] = n)
                });
                var n = "https" === c.split(":")[0] || e.sslForHttp;
                p.proto = n ? "https://" : "http://", o("mark", ["onload", a()]);
                var i = u.createElement("script");
                i.src = p.proto + e.agent, t.parentNode.insertBefore(i, t)
            }
        }

        function i() {
            "complete" === u.readyState && r()
        }

        function r() {
            o("mark", ["domContent", a()])
        }

        function a() {
            return (new Date).getTime()
        }

        var o = e("handle"), s = e(1), l = (e(2), window), u = l.document, c = ("" + location).split("?")[0], d = {
            beacon: "bam.nr-data.net",
            errorBeacon: "bam.nr-data.net",
            agent: "js-agent.newrelic.com/nr-632.min.js"
        }, p = t.exports = {offset: a(), origin: c, features: {}};
        u.addEventListener ? (u.addEventListener("DOMContentLoaded", r, !1), l.addEventListener("load", n, !1)) : (u.attachEvent("onreadystatechange", i), l.attachEvent("onload", n)), o("mark", ["firstbyte", a()])
    }, {1: 22, 2: 13, handle: "D5DuLP"}], loader: [function (e, t) {
        t.exports = e("G9z0Bl")
    }, {}], 22: [function (e, t) {
        function n(e, t) {
            var n = [], r = "", a = 0;
            for (r in e)i.call(e, r) && (n[a] = t(r, e[r]), a += 1);
            return n
        }

        var i = Object.prototype.hasOwnProperty;
        t.exports = n
    }, {}], 23: [function (e, t) {
        function n(e, t, n) {
            t || (t = 0), "undefined" == typeof n && (n = e ? e.length : 0);
            for (var i = -1, r = n - t || 0, a = Array(0 > r ? 0 : r); ++i < r;)a[i] = e[t + i];
            return a
        }

        t.exports = n
    }, {}], 24: [function (e, t) {
        function n(e) {
            return !(e && "function" == typeof e && e.apply && !e[a])
        }

        var i = e("ee"), r = e(1), a = "nr@wrapper", o = Object.prototype.hasOwnProperty;
        t.exports = function (e) {
            function t(e, t, i, o) {
                function s() {
                    var n, a, s, u;
                    try {
                        a = this, n = r(arguments), s = i && i(n, a) || {}
                    } catch (d) {
                        c([d, "", [n, a, o], s])
                    }
                    l(t + "start", [n, a, o], s);
                    try {
                        return u = e.apply(a, n)
                    } catch (p) {
                        throw l(t + "err", [n, a, p], s), p
                    } finally {
                        l(t + "end", [n, a, u], s)
                    }
                }

                return n(e) ? e : (t || (t = ""), s[a] = !0, u(e, s), s)
            }

            function s(e, i, r, a) {
                r || (r = "");
                var o, s, l, u = "-" === r.charAt(0);
                for (l = 0; l < i.length; l++)s = i[l], o = e[s], n(o) || (e[s] = t(o, u ? s + r : r, a, s))
            }

            function l(t, n, i) {
                try {
                    e.emit(t, n, i)
                } catch (r) {
                    c([r, t, n, i])
                }
            }

            function u(e, t) {
                if (Object.defineProperty && Object.keys)try {
                    var n = Object.keys(e);
                    return n.forEach(function (n) {
                        Object.defineProperty(t, n, {
                            get: function () {
                                return e[n]
                            }, set: function (t) {
                                return e[n] = t, t
                            }
                        })
                    }), t
                } catch (i) {
                    c([i])
                }
                for (var r in e)o.call(e, r) && (t[r] = e[r]);
                return t
            }

            function c(t) {
                try {
                    e.emit("internal-error", t)
                } catch (n) {
                }
            }

            return e || (e = i), t.inPlace = s, t.flag = a, t
        }
    }, {1: 23, ee: "QJf3ax"}]
}, {}, ["G9z0Bl", 4, 11, 5]), NREUM.info = {
    beacon: "bam.nr-data.net",
    errorBeacon: "bam.nr-data.net",
    licenseKey: "22b47b558b",
    applicationID: "8803923",
    sa: 1,
    agent: "js-agent.newrelic.com/nr-632.min.js"
}, function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document)throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
        var t = e.length, n = rt.type(e);
        return "function" === n || rt.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function i(e, t, n) {
        if (rt.isFunction(t))return rt.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType)return rt.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (pt.test(t))return rt.filter(t, e, n);
            t = rt.filter(t, e)
        }
        return rt.grep(e, function (e) {
            return rt.inArray(e, t) >= 0 !== n
        })
    }

    function r(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function a(e) {
        var t = It[e] = {};
        return rt.each(e.match(Et) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function o() {
        gt.addEventListener ? (gt.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (gt.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
    }

    function s() {
        (gt.addEventListener || "load" === event.type || "complete" === gt.readyState) && (o(), rt.ready())
    }

    function l(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var i = "data-" + t.replace(Nt, "-$1").toLowerCase();
            if (n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ot.test(n) ? rt.parseJSON(n) : n
                } catch (r) {
                }
                rt.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function u(e) {
        var t;
        for (t in e)if (("data" !== t || !rt.isEmptyObject(e[t])) && "toJSON" !== t)return !1;
        return !0
    }

    function c(e, t, n, i) {
        if (rt.acceptData(e)) {
            var r, a, o = rt.expando, s = e.nodeType, l = s ? rt.cache : e, u = s ? e[o] : e[o] && o;
            if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof t)return u || (u = s ? e[o] = K.pop() || rt.guid++ : o), l[u] || (l[u] = s ? {} : {toJSON: rt.noop}), ("object" == typeof t || "function" == typeof t) && (i ? l[u] = rt.extend(l[u], t) : l[u].data = rt.extend(l[u].data, t)), a = l[u], i || (a.data || (a.data = {}), a = a.data), void 0 !== n && (a[rt.camelCase(t)] = n), "string" == typeof t ? (r = a[t], null == r && (r = a[rt.camelCase(t)])) : r = a, r
        }
    }

    function d(e, t, n) {
        if (rt.acceptData(e)) {
            var i, r, a = e.nodeType, o = a ? rt.cache : e, s = a ? e[rt.expando] : rt.expando;
            if (o[s]) {
                if (t && (i = n ? o[s] : o[s].data)) {
                    rt.isArray(t) ? t = t.concat(rt.map(t, rt.camelCase)) : t in i ? t = [t] : (t = rt.camelCase(t), t = t in i ? [t] : t.split(" ")), r = t.length;
                    for (; r--;)delete i[t[r]];
                    if (n ? !u(i) : !rt.isEmptyObject(i))return
                }
                (n || (delete o[s].data, u(o[s]))) && (a ? rt.cleanData([e], !0) : nt.deleteExpando || o != o.window ? delete o[s] : o[s] = null)
            }
        }
    }

    function p() {
        return !0
    }

    function m() {
        return !1
    }

    function g() {
        try {
            return gt.activeElement
        } catch (e) {
        }
    }

    function h(e) {
        var t = Ft.split("|"), n = e.createDocumentFragment();
        if (n.createElement)for (; t.length;)n.createElement(t.pop());
        return n
    }

    function f(e, t) {
        var n, i, r = 0, a = typeof e.getElementsByTagName !== yt ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== yt ? e.querySelectorAll(t || "*") : void 0;
        if (!a)for (a = [], n = e.childNodes || e; null != (i = n[r]); r++)!t || rt.nodeName(i, t) ? a.push(i) : rt.merge(a, f(i, t));
        return void 0 === t || t && rt.nodeName(e, t) ? rt.merge([e], a) : a
    }

    function b(e) {
        Tt.test(e.type) && (e.defaultChecked = e.checked)
    }

    function v(e, t) {
        return rt.nodeName(e, "table") && rt.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function E(e) {
        return e.type = (null !== rt.find.attr(e, "type")) + "/" + e.type, e
    }

    function I(e) {
        var t = Vt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function A(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++)rt._data(n, "globalEval", !t || rt._data(t[i], "globalEval"))
    }

    function L(e, t) {
        if (1 === t.nodeType && rt.hasData(e)) {
            var n, i, r, a = rt._data(e), o = rt._data(t, a), s = a.events;
            if (s) {
                delete o.handle, o.events = {};
                for (n in s)for (i = 0, r = s[n].length; r > i; i++)rt.event.add(t, n, s[n][i])
            }
            o.data && (o.data = rt.extend({}, o.data))
        }
    }

    function y(e, t) {
        var n, i, r;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !nt.noCloneEvent && t[rt.expando]) {
                r = rt._data(t);
                for (i in r.events)rt.removeEvent(t, i, r.handle);
                t.removeAttribute(rt.expando)
            }
            "script" === n && t.text !== e.text ? (E(t).text = e.text, I(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), nt.html5Clone && e.innerHTML && !rt.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Tt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function O(t, n) {
        var i, r = rt(n.createElement(t)).appendTo(n.body), a = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(r[0])) ? i.display : rt.css(r[0], "display");
        return r.detach(), a
    }

    function N(e) {
        var t = gt, n = Qt[e];
        return n || (n = O(e, t), "none" !== n && n || (Jt = (Jt || rt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Jt[0].contentWindow || Jt[0].contentDocument).document, t.write(), t.close(), n = O(e, t), Jt.detach()), Qt[e] = n), n
    }

    function C(e, t) {
        return {
            get: function () {
                var n = e();
                if (null != n)return n ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function R(e, t) {
        if (t in e)return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = mn.length; r--;)if (t = mn[r] + n, t in e)return t;
        return i
    }

    function w(e, t) {
        for (var n, i, r, a = [], o = 0, s = e.length; s > o; o++)i = e[o], i.style && (a[o] = rt._data(i, "olddisplay"), n = i.style.display, t ? (a[o] || "none" !== n || (i.style.display = ""), "" === i.style.display && wt(i) && (a[o] = rt._data(i, "olddisplay", N(i.nodeName)))) : (r = wt(i), (n && "none" !== n || !r) && rt._data(i, "olddisplay", r ? n : rt.css(i, "display"))));
        for (o = 0; s > o; o++)i = e[o], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? a[o] || "" : "none"));
        return e
    }

    function S(e, t, n) {
        var i = un.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function T(e, t, n, i, r) {
        for (var a = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > a; a += 2)"margin" === n && (o += rt.css(e, n + Rt[a], !0, r)), i ? ("content" === n && (o -= rt.css(e, "padding" + Rt[a], !0, r)), "margin" !== n && (o -= rt.css(e, "border" + Rt[a] + "Width", !0, r))) : (o += rt.css(e, "padding" + Rt[a], !0, r), "padding" !== n && (o += rt.css(e, "border" + Rt[a] + "Width", !0, r)));
        return o
    }

    function D(e, t, n) {
        var i = !0, r = "width" === t ? e.offsetWidth : e.offsetHeight, a = en(e), o = nt.boxSizing && "border-box" === rt.css(e, "boxSizing", !1, a);
        if (0 >= r || null == r) {
            if (r = tn(e, t, a), (0 > r || null == r) && (r = e.style[t]), rn.test(r))return r;
            i = o && (nt.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + T(e, t, n || (o ? "border" : "content"), i, a) + "px"
    }

    function B(e, t, n, i, r) {
        return new B.prototype.init(e, t, n, i, r)
    }

    function k() {
        return setTimeout(function () {
            gn = void 0
        }), gn = rt.now()
    }

    function M(e, t) {
        var n, i = {height: e}, r = 0;
        for (t = t ? 1 : 0; 4 > r; r += 2 - t)n = Rt[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function x(e, t, n) {
        for (var i, r = (In[t] || []).concat(In["*"]), a = 0, o = r.length; o > a; a++)if (i = r[a].call(n, t, e))return i
    }

    function F(e, t, n) {
        var i, r, a, o, s, l, u, c, d = this, p = {}, m = e.style, g = e.nodeType && wt(e), h = rt._data(e, "fxshow");
        n.queue || (s = rt._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
            s.unqueued || l()
        }), s.unqueued++, d.always(function () {
            d.always(function () {
                s.unqueued--, rt.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [m.overflow, m.overflowX, m.overflowY], u = rt.css(e, "display"), c = "none" === u ? rt._data(e, "olddisplay") || N(e.nodeName) : u, "inline" === c && "none" === rt.css(e, "float") && (nt.inlineBlockNeedsLayout && "inline" !== N(e.nodeName) ? m.zoom = 1 : m.display = "inline-block")), n.overflow && (m.overflow = "hidden", nt.shrinkWrapBlocks() || d.always(function () {
            m.overflow = n.overflow[0], m.overflowX = n.overflow[1], m.overflowY = n.overflow[2]
        }));
        for (i in t)if (r = t[i], fn.exec(r)) {
            if (delete t[i], a = a || "toggle" === r, r === (g ? "hide" : "show")) {
                if ("show" !== r || !h || void 0 === h[i])continue;
                g = !0
            }
            p[i] = h && h[i] || rt.style(e, i)
        } else u = void 0;
        if (rt.isEmptyObject(p))"inline" === ("none" === u ? N(e.nodeName) : u) && (m.display = u); else {
            h ? "hidden"in h && (g = h.hidden) : h = rt._data(e, "fxshow", {}), a && (h.hidden = !g), g ? rt(e).show() : d.done(function () {
                rt(e).hide()
            }), d.done(function () {
                var t;
                rt._removeData(e, "fxshow");
                for (t in p)rt.style(e, t, p[t])
            });
            for (i in p)o = x(g ? h[i] : 0, i, d), i in h || (h[i] = o.start, g && (o.end = o.start, o.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function P(e, t) {
        var n, i, r, a, o;
        for (n in e)if (i = rt.camelCase(n), r = t[i], a = e[n], rt.isArray(a) && (r = a[1], a = e[n] = a[0]), n !== i && (e[i] = a, delete e[n]), o = rt.cssHooks[i], o && "expand"in o) {
            a = o.expand(a), delete e[i];
            for (n in a)n in e || (e[n] = a[n], t[n] = r)
        } else t[i] = r
    }

    function z(e, t, n) {
        var i, r, a = 0, o = En.length, s = rt.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (r)return !1;
            for (var t = gn || k(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, a = 1 - i, o = 0, l = u.tweens.length; l > o; o++)u.tweens[o].run(a);
            return s.notifyWith(e, [u, a, n]), 1 > a && l ? n : (s.resolveWith(e, [u]), !1)
        }, u = s.promise({
            elem: e,
            props: rt.extend({}, t),
            opts: rt.extend(!0, {specialEasing: {}}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: gn || k(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var i = rt.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(i), i
            },
            stop: function (t) {
                var n = 0, i = t ? u.tweens.length : 0;
                if (r)return this;
                for (r = !0; i > n; n++)u.tweens[n].run(1);
                return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
            }
        }), c = u.props;
        for (P(c, u.opts.specialEasing); o > a; a++)if (i = En[a].call(u, e, c, u.opts))return i;
        return rt.map(c, x, u), rt.isFunction(u.opts.start) && u.opts.start.call(e, u), rt.fx.timer(rt.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function U(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0, a = t.toLowerCase().match(Et) || [];
            if (rt.isFunction(n))for (; i = a[r++];)"+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function j(e, t, n, i) {
        function r(s) {
            var l;
            return a[s] = !0, rt.each(e[s] || [], function (e, s) {
                var u = s(t, n, i);
                return "string" != typeof u || o || a[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
            }), l
        }

        var a = {}, o = e === Wn;
        return r(t.dataTypes[0]) || !a["*"] && r("*")
    }

    function Y(e, t) {
        var n, i, r = rt.ajaxSettings.flatOptions || {};
        for (i in t)void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
        return n && rt.extend(!0, e, n), e
    }

    function G(e, t, n) {
        for (var i, r, a, o, s = e.contents, l = e.dataTypes; "*" === l[0];)l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)for (o in s)if (s[o] && s[o].test(r)) {
            l.unshift(o);
            break
        }
        if (l[0]in n)a = l[0]; else {
            for (o in n) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    a = o;
                    break
                }
                i || (i = o)
            }
            a = a || i
        }
        return a ? (a !== l[0] && l.unshift(a), n[a]) : void 0
    }

    function q(e, t, n, i) {
        var r, a, o, s, l, u = {}, c = e.dataTypes.slice();
        if (c[1])for (o in e.converters)u[o.toLowerCase()] = e.converters[o];
        for (a = c.shift(); a;)if (e.responseFields[a] && (n[e.responseFields[a]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = c.shift())if ("*" === a)a = l; else if ("*" !== l && l !== a) {
            if (o = u[l + " " + a] || u["* " + a], !o)for (r in u)if (s = r.split(" "), s[1] === a && (o = u[l + " " + s[0]] || u["* " + s[0]])) {
                o === !0 ? o = u[r] : u[r] !== !0 && (a = s[0], c.unshift(s[1]));
                break
            }
            if (o !== !0)if (o && e["throws"])t = o(t); else try {
                t = o(t)
            } catch (d) {
                return {state: "parsererror", error: o ? d : "No conversion from " + l + " to " + a}
            }
        }
        return {state: "success", data: t}
    }

    function W(e, t, n, i) {
        var r;
        if (rt.isArray(t))rt.each(t, function (t, r) {
            n || Kn.test(e) ? i(e, r) : W(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
        }); else if (n || "object" !== rt.type(t))i(e, t); else for (r in t)W(e + "[" + r + "]", t[r], n, i)
    }

    function _() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {
        }
    }

    function H() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {
        }
    }

    function V(e) {
        return rt.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }

    var K = [], $ = K.slice, X = K.concat, Z = K.push, J = K.indexOf, Q = {}, et = Q.toString, tt = Q.hasOwnProperty, nt = {}, it = "1.11.2", rt = function (e, t) {
        return new rt.fn.init(e, t)
    }, at = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ot = /^-ms-/, st = /-([\da-z])/gi, lt = function (e, t) {
        return t.toUpperCase()
    };
    rt.fn = rt.prototype = {
        jquery: it, constructor: rt, selector: "", length: 0, toArray: function () {
            return $.call(this)
        }, get: function (e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : $.call(this)
        }, pushStack: function (e) {
            var t = rt.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }, each: function (e, t) {
            return rt.each(this, e, t)
        }, map: function (e) {
            return this.pushStack(rt.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, slice: function () {
            return this.pushStack($.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: Z, sort: K.sort, splice: K.splice
    }, rt.extend = rt.fn.extend = function () {
        var e, t, n, i, r, a, o = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof o && (u = o, o = arguments[s] || {}, s++), "object" == typeof o || rt.isFunction(o) || (o = {}), s === l && (o = this, s--); l > s; s++)if (null != (r = arguments[s]))for (i in r)e = o[i], n = r[i], o !== n && (u && n && (rt.isPlainObject(n) || (t = rt.isArray(n))) ? (t ? (t = !1, a = e && rt.isArray(e) ? e : []) : a = e && rt.isPlainObject(e) ? e : {}, o[i] = rt.extend(u, a, n)) : void 0 !== n && (o[i] = n));
        return o
    }, rt.extend({
        expando: "jQuery" + (it + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isFunction: function (e) {
            return "function" === rt.type(e)
        }, isArray: Array.isArray || function (e) {
            return "array" === rt.type(e)
        }, isWindow: function (e) {
            return null != e && e == e.window
        }, isNumeric: function (e) {
            return !rt.isArray(e) && e - parseFloat(e) + 1 >= 0
        }, isEmptyObject: function (e) {
            var t;
            for (t in e)return !1;
            return !0
        }, isPlainObject: function (e) {
            var t;
            if (!e || "object" !== rt.type(e) || e.nodeType || rt.isWindow(e))return !1;
            try {
                if (e.constructor && !tt.call(e, "constructor") && !tt.call(e.constructor.prototype, "isPrototypeOf"))return !1
            } catch (n) {
                return !1
            }
            if (nt.ownLast)for (t in e)return tt.call(e, t);
            for (t in e);
            return void 0 === t || tt.call(e, t)
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Q[et.call(e)] || "object" : typeof e
        }, globalEval: function (t) {
            t && rt.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        }, camelCase: function (e) {
            return e.replace(ot, "ms-").replace(st, lt)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t, i) {
            var r, a = 0, o = e.length, s = n(e);
            if (i) {
                if (s)for (; o > a && (r = t.apply(e[a], i), r !== !1); a++); else for (a in e)if (r = t.apply(e[a], i), r === !1)break
            } else if (s)for (; o > a && (r = t.call(e[a], a, e[a]), r !== !1); a++); else for (a in e)if (r = t.call(e[a], a, e[a]), r === !1)break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(at, "")
        }, makeArray: function (e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? rt.merge(i, "string" == typeof e ? [e] : e) : Z.call(i, e)), i
        }, inArray: function (e, t, n) {
            var i;
            if (t) {
                if (J)return J.call(t, e, n);
                for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)if (n in t && t[n] === e)return n
            }
            return -1
        }, merge: function (e, t) {
            for (var n = +t.length, i = 0, r = e.length; n > i;)e[r++] = t[i++];
            if (n !== n)for (; void 0 !== t[i];)e[r++] = t[i++];
            return e.length = r, e
        }, grep: function (e, t, n) {
            for (var i, r = [], a = 0, o = e.length, s = !n; o > a; a++)i = !t(e[a], a), i !== s && r.push(e[a]);
            return r
        }, map: function (e, t, i) {
            var r, a = 0, o = e.length, s = n(e), l = [];
            if (s)for (; o > a; a++)r = t(e[a], a, i), null != r && l.push(r); else for (a in e)r = t(e[a], a, i), null != r && l.push(r);
            return X.apply([], l)
        }, guid: 1, proxy: function (e, t) {
            var n, i, r;
            return "string" == typeof t && (r = e[t], t = e, e = r), rt.isFunction(e) ? (n = $.call(arguments, 2), i = function () {
                return e.apply(t || this, n.concat($.call(arguments)))
            }, i.guid = e.guid = e.guid || rt.guid++, i) : void 0
        }, now: function () {
            return +new Date
        }, support: nt
    }), rt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        Q["[object " + t + "]"] = t.toLowerCase()
    });
    var ut = function (e) {
        function t(e, t, n, i) {
            var r, a, o, s, l, u, d, m, g, h;
            if ((t ? t.ownerDocument || t : j) !== B && D(t), t = t || B, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s)return n;
            if (!i && M) {
                if (11 !== s && (r = vt.exec(e)))if (o = r[1]) {
                    if (9 === s) {
                        if (a = t.getElementById(o), !a || !a.parentNode)return n;
                        if (a.id === o)return n.push(a), n
                    } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(o)) && z(t, a) && a.id === o)return n.push(a), n
                } else {
                    if (r[2])return J.apply(n, t.getElementsByTagName(e)), n;
                    if ((o = r[3]) && A.getElementsByClassName)return J.apply(n, t.getElementsByClassName(o)), n
                }
                if (A.qsa && (!x || !x.test(e))) {
                    if (m = d = U, g = t, h = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (u = N(e), (d = t.getAttribute("id")) ? m = d.replace(It, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", l = u.length; l--;)u[l] = m + p(u[l]);
                        g = Et.test(e) && c(t.parentNode) || t, h = u.join(",")
                    }
                    if (h)try {
                        return J.apply(n, g.querySelectorAll(h)), n
                    } catch (f) {
                    } finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return R(e.replace(lt, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > L.cacheLength && delete e[t.shift()], e[n + " "] = i
            }

            var t = [];
            return e
        }

        function i(e) {
            return e[U] = !0, e
        }

        function r(e) {
            var t = B.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function a(e, t) {
            for (var n = e.split("|"), i = e.length; i--;)L.attrHandle[n[i]] = t
        }

        function o(e, t) {
            var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (i)return i;
            if (n)for (; n = n.nextSibling;)if (n === t)return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function u(e) {
            return i(function (t) {
                return t = +t, i(function (n, i) {
                    for (var r, a = e([], n.length, t), o = a.length; o--;)n[r = a[o]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function d() {
        }

        function p(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++)i += e[t].value;
            return i
        }

        function m(e, t, n) {
            var i = t.dir, r = n && "parentNode" === i, a = G++;
            return t.first ? function (t, n, a) {
                for (; t = t[i];)if (1 === t.nodeType || r)return e(t, n, a)
            } : function (t, n, o) {
                var s, l, u = [Y, a];
                if (o) {
                    for (; t = t[i];)if ((1 === t.nodeType || r) && e(t, n, o))return !0
                } else for (; t = t[i];)if (1 === t.nodeType || r) {
                    if (l = t[U] || (t[U] = {}), (s = l[i]) && s[0] === Y && s[1] === a)return u[2] = s[2];
                    if (l[i] = u, u[2] = e(t, n, o))return !0
                }
            }
        }

        function g(e) {
            return e.length > 1 ? function (t, n, i) {
                for (var r = e.length; r--;)if (!e[r](t, n, i))return !1;
                return !0
            } : e[0]
        }

        function h(e, n, i) {
            for (var r = 0, a = n.length; a > r; r++)t(e, n[r], i);
            return i
        }

        function f(e, t, n, i, r) {
            for (var a, o = [], s = 0, l = e.length, u = null != t; l > s; s++)(a = e[s]) && (!n || n(a, i, r)) && (o.push(a), u && t.push(s));
            return o
        }

        function b(e, t, n, r, a, o) {
            return r && !r[U] && (r = b(r)), a && !a[U] && (a = b(a, o)), i(function (i, o, s, l) {
                var u, c, d, p = [], m = [], g = o.length, b = i || h(t || "*", s.nodeType ? [s] : s, []), v = !e || !i && t ? b : f(b, p, e, s, l), E = n ? a || (i ? e : g || r) ? [] : o : v;
                if (n && n(v, E, s, l), r)for (u = f(E, m), r(u, [], s, l), c = u.length; c--;)(d = u[c]) && (E[m[c]] = !(v[m[c]] = d));
                if (i) {
                    if (a || e) {
                        if (a) {
                            for (u = [], c = E.length; c--;)(d = E[c]) && u.push(v[c] = d);
                            a(null, E = [], u, l)
                        }
                        for (c = E.length; c--;)(d = E[c]) && (u = a ? et(i, d) : p[c]) > -1 && (i[u] = !(o[u] = d))
                    }
                } else E = f(E === o ? E.splice(g, E.length) : E), a ? a(null, o, E, l) : J.apply(o, E)
            })
        }

        function v(e) {
            for (var t, n, i, r = e.length, a = L.relative[e[0].type], o = a || L.relative[" "], s = a ? 1 : 0, l = m(function (e) {
                return e === t
            }, o, !0), u = m(function (e) {
                return et(t, e) > -1
            }, o, !0), c = [function (e, n, i) {
                var r = !a && (i || n !== w) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                return t = null, r
            }]; r > s; s++)if (n = L.relative[e[s].type])c = [m(g(c), n)]; else {
                if (n = L.filter[e[s].type].apply(null, e[s].matches), n[U]) {
                    for (i = ++s; r > i && !L.relative[e[i].type]; i++);
                    return b(s > 1 && g(c), s > 1 && p(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(lt, "$1"), n, i > s && v(e.slice(s, i)), r > i && v(e = e.slice(i)), r > i && p(e))
                }
                c.push(n)
            }
            return g(c)
        }

        function E(e, n) {
            var r = n.length > 0, a = e.length > 0, o = function (i, o, s, l, u) {
                var c, d, p, m = 0, g = "0", h = i && [], b = [], v = w, E = i || a && L.find.TAG("*", u), I = Y += null == v ? 1 : Math.random() || .1, A = E.length;
                for (u && (w = o !== B && o); g !== A && null != (c = E[g]); g++) {
                    if (a && c) {
                        for (d = 0; p = e[d++];)if (p(c, o, s)) {
                            l.push(c);
                            break
                        }
                        u && (Y = I)
                    }
                    r && ((c = !p && c) && m--, i && h.push(c))
                }
                if (m += g, r && g !== m) {
                    for (d = 0; p = n[d++];)p(h, b, o, s);
                    if (i) {
                        if (m > 0)for (; g--;)h[g] || b[g] || (b[g] = X.call(l));
                        b = f(b)
                    }
                    J.apply(l, b), u && !i && b.length > 0 && m + n.length > 1 && t.uniqueSort(l)
                }
                return u && (Y = I, w = v), h
            };
            return r ? i(o) : o
        }

        var I, A, L, y, O, N, C, R, w, S, T, D, B, k, M, x, F, P, z, U = "sizzle" + 1 * new Date, j = e.document, Y = 0, G = 0, q = n(), W = n(), _ = n(), H = function (e, t) {
            return e === t && (T = !0), 0
        }, V = 1 << 31, K = {}.hasOwnProperty, $ = [], X = $.pop, Z = $.push, J = $.push, Q = $.slice, et = function (e, t) {
            for (var n = 0, i = e.length; i > n; n++)if (e[n] === t)return n;
            return -1
        }, tt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", nt = "[\\x20\\t\\r\\n\\f]", it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", rt = it.replace("w", "w#"), at = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + nt + "*\\]", ot = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + at + ")*)|.*)\\)|)", st = new RegExp(nt + "+", "g"), lt = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"), ut = new RegExp("^" + nt + "*," + nt + "*"), ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"), dt = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"), pt = new RegExp(ot), mt = new RegExp("^" + rt + "$"), gt = {
            ID: new RegExp("^#(" + it + ")"),
            CLASS: new RegExp("^\\.(" + it + ")"),
            TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + at),
            PSEUDO: new RegExp("^" + ot),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + tt + ")$", "i"),
            needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
        }, ht = /^(?:input|select|textarea|button)$/i, ft = /^h\d$/i, bt = /^[^{]+\{\s*\[native \w/, vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Et = /[+~]/, It = /'|\\/g, At = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"), Lt = function (e, t, n) {
            var i = "0x" + t - 65536;
            return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }, yt = function () {
            D()
        };
        try {
            J.apply($ = Q.call(j.childNodes), j.childNodes), $[j.childNodes.length].nodeType
        } catch (Ot) {
            J = {
                apply: $.length ? function (e, t) {
                    Z.apply(e, Q.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        A = t.support = {}, O = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, D = t.setDocument = function (e) {
            var t, n, i = e ? e.ownerDocument || e : j;
            return i !== B && 9 === i.nodeType && i.documentElement ? (B = i, k = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", yt, !1) : n.attachEvent && n.attachEvent("onunload", yt)), M = !O(i), A.attributes = r(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), A.getElementsByTagName = r(function (e) {
                return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
            }), A.getElementsByClassName = bt.test(i.getElementsByClassName), A.getById = r(function (e) {
                return k.appendChild(e).id = U, !i.getElementsByName || !i.getElementsByName(U).length
            }), A.getById ? (L.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && M) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, L.filter.ID = function (e) {
                var t = e.replace(At, Lt);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete L.find.ID, L.filter.ID = function (e) {
                var t = e.replace(At, Lt);
                return function (e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), L.find.TAG = A.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : A.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, i = [], r = 0, a = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = a[r++];)1 === n.nodeType && i.push(n);
                    return i
                }
                return a
            }, L.find.CLASS = A.getElementsByClassName && function (e, t) {
                    return M ? t.getElementsByClassName(e) : void 0
                }, F = [], x = [], (A.qsa = bt.test(i.querySelectorAll)) && (r(function (e) {
                k.appendChild(e).innerHTML = "<a id='" + U + "'></a><select id='" + U + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && x.push("[*^$]=" + nt + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || x.push("\\[" + nt + "*(?:value|" + tt + ")"), e.querySelectorAll("[id~=" + U + "-]").length || x.push("~="), e.querySelectorAll(":checked").length || x.push(":checked"), e.querySelectorAll("a#" + U + "+*").length || x.push(".#.+[+~]")
            }), r(function (e) {
                var t = i.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && x.push("name" + nt + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || x.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), x.push(",.*:")
            })), (A.matchesSelector = bt.test(P = k.matches || k.webkitMatchesSelector || k.mozMatchesSelector || k.oMatchesSelector || k.msMatchesSelector)) && r(function (e) {
                A.disconnectedMatch = P.call(e, "div"), P.call(e, "[s!='']:x"), F.push("!=", ot)
            }), x = x.length && new RegExp(x.join("|")), F = F.length && new RegExp(F.join("|")), t = bt.test(k.compareDocumentPosition), z = t || bt.test(k.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function (e, t) {
                if (t)for (; t = t.parentNode;)if (t === e)return !0;
                return !1
            }, H = t ? function (e, t) {
                if (e === t)return T = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !A.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === j && z(j, e) ? -1 : t === i || t.ownerDocument === j && z(j, t) ? 1 : S ? et(S, e) - et(S, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t)return T = !0, 0;
                var n, r = 0, a = e.parentNode, s = t.parentNode, l = [e], u = [t];
                if (!a || !s)return e === i ? -1 : t === i ? 1 : a ? -1 : s ? 1 : S ? et(S, e) - et(S, t) : 0;
                if (a === s)return o(e, t);
                for (n = e; n = n.parentNode;)l.unshift(n);
                for (n = t; n = n.parentNode;)u.unshift(n);
                for (; l[r] === u[r];)r++;
                return r ? o(l[r], u[r]) : l[r] === j ? -1 : u[r] === j ? 1 : 0
            }, i) : B
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== B && D(e), n = n.replace(dt, "='$1']"), !(!A.matchesSelector || !M || F && F.test(n) || x && x.test(n)))try {
                var i = P.call(e, n);
                if (i || A.disconnectedMatch || e.document && 11 !== e.document.nodeType)return i
            } catch (r) {
            }
            return t(n, B, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== B && D(e), z(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== B && D(e);
            var n = L.attrHandle[t.toLowerCase()], i = n && K.call(L.attrHandle, t.toLowerCase()) ? n(e, t, !M) : void 0;
            return void 0 !== i ? i : A.attributes || !M ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [], i = 0, r = 0;
            if (T = !A.detectDuplicates, S = !A.sortStable && e.slice(0), e.sort(H), T) {
                for (; t = e[r++];)t === e[r] && (i = n.push(r));
                for (; i--;)e.splice(n[i], 1)
            }
            return S = null, e
        }, y = t.getText = function (e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent)return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)n += y(e)
                } else if (3 === r || 4 === r)return e.nodeValue
            } else for (; t = e[i++];)n += y(t);
            return n
        }, L = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: gt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(At, Lt), e[3] = (e[3] || e[4] || e[5] || "").replace(At, Lt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return gt.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pt.test(n) && (t = N(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(At, Lt).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = q[e + " "];
                    return t || (t = new RegExp("(^|" + nt + ")" + e + "(" + nt + "|$)")) && q(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                }, ATTR: function (e, n, i) {
                    return function (r) {
                        var a = t.attr(r, e);
                        return null == a ? "!=" === n : n ? (a += "", "=" === n ? a === i : "!=" === n ? a !== i : "^=" === n ? i && 0 === a.indexOf(i) : "*=" === n ? i && a.indexOf(i) > -1 : "$=" === n ? i && a.slice(-i.length) === i : "~=" === n ? (" " + a.replace(st, " ") + " ").indexOf(i) > -1 : "|=" === n ? a === i || a.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                }, CHILD: function (e, t, n, i, r) {
                    var a = "nth" !== e.slice(0, 3), o = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === i && 0 === r ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, l) {
                        var u, c, d, p, m, g, h = a !== o ? "nextSibling" : "previousSibling", f = t.parentNode, b = s && t.nodeName.toLowerCase(), v = !l && !s;
                        if (f) {
                            if (a) {
                                for (; h;) {
                                    for (d = t; d = d[h];)if (s ? d.nodeName.toLowerCase() === b : 1 === d.nodeType)return !1;
                                    g = h = "only" === e && !g && "nextSibling"
                                }
                                return !0
                            }
                            if (g = [o ? f.firstChild : f.lastChild], o && v) {
                                for (c = f[U] || (f[U] = {}), u = c[e] || [], m = u[0] === Y && u[1], p = u[0] === Y && u[2], d = m && f.childNodes[m]; d = ++m && d && d[h] || (p = m = 0) || g.pop();)if (1 === d.nodeType && ++p && d === t) {
                                    c[e] = [Y, m, p];
                                    break
                                }
                            } else if (v && (u = (t[U] || (t[U] = {}))[e]) && u[0] === Y)p = u[1]; else for (; (d = ++m && d && d[h] || (p = m = 0) || g.pop()) && ((s ? d.nodeName.toLowerCase() !== b : 1 !== d.nodeType) || !++p || (v && ((d[U] || (d[U] = {}))[e] = [Y, p]), d !== t)););
                            return p -= r, p === i || p % i === 0 && p / i >= 0
                        }
                    }
                }, PSEUDO: function (e, n) {
                    var r, a = L.pseudos[e] || L.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return a[U] ? a(n) : a.length > 1 ? (r = [e, e, "", n], L.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                        for (var i, r = a(e, n), o = r.length; o--;)i = et(e, r[o]), e[i] = !(t[i] = r[o])
                    }) : function (e) {
                        return a(e, 0, r)
                    }) : a
                }
            },
            pseudos: {
                not: i(function (e) {
                    var t = [], n = [], r = C(e.replace(lt, "$1"));
                    return r[U] ? i(function (e, t, n, i) {
                        for (var a, o = r(e, null, i, []), s = e.length; s--;)(a = o[s]) && (e[s] = !(t[s] = a))
                    }) : function (e, i, a) {
                        return t[0] = e, r(t, null, a, n), t[0] = null, !n.pop()
                    }
                }), has: i(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }), contains: i(function (e) {
                    return e = e.replace(At, Lt), function (t) {
                        return (t.textContent || t.innerText || y(t)).indexOf(e) > -1
                    }
                }), lang: i(function (e) {
                    return mt.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(At, Lt).toLowerCase(), function (t) {
                        var n;
                        do if (n = M ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === k
                }, focus: function (e) {
                    return e === B.activeElement && (!B.hasFocus || B.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return e.disabled === !1
                }, disabled: function (e) {
                    return e.disabled === !0
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6)return !1;
                    return !0
                }, parent: function (e) {
                    return !L.pseudos.empty(e)
                }, header: function (e) {
                    return ft.test(e.nodeName)
                }, input: function (e) {
                    return ht.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: u(function () {
                    return [0]
                }), last: u(function (e, t) {
                    return [t - 1]
                }), eq: u(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }), even: u(function (e, t) {
                    for (var n = 0; t > n; n += 2)e.push(n);
                    return e
                }), odd: u(function (e, t) {
                    for (var n = 1; t > n; n += 2)e.push(n);
                    return e
                }), lt: u(function (e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0;)e.push(i);
                    return e
                }), gt: u(function (e, t, n) {
                    for (var i = 0 > n ? n + t : n; ++i < t;)e.push(i);
                    return e
                })
            }
        }, L.pseudos.nth = L.pseudos.eq;
        for (I in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})L.pseudos[I] = s(I);
        for (I in{submit: !0, reset: !0})L.pseudos[I] = l(I);
        return d.prototype = L.filters = L.pseudos, L.setFilters = new d, N = t.tokenize = function (e, n) {
            var i, r, a, o, s, l, u, c = W[e + " "];
            if (c)return n ? 0 : c.slice(0);
            for (s = e, l = [], u = L.preFilter; s;) {
                (!i || (r = ut.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(a = [])), i = !1, (r = ct.exec(s)) && (i = r.shift(), a.push({
                    value: i,
                    type: r[0].replace(lt, " ")
                }), s = s.slice(i.length));
                for (o in L.filter)!(r = gt[o].exec(s)) || u[o] && !(r = u[o](r)) || (i = r.shift(), a.push({
                    value: i,
                    type: o,
                    matches: r
                }), s = s.slice(i.length));
                if (!i)break
            }
            return n ? s.length : s ? t.error(e) : W(e, l).slice(0)
        }, C = t.compile = function (e, t) {
            var n, i = [], r = [], a = _[e + " "];
            if (!a) {
                for (t || (t = N(e)), n = t.length; n--;)a = v(t[n]), a[U] ? i.push(a) : r.push(a);
                a = _(e, E(r, i)), a.selector = e
            }
            return a
        }, R = t.select = function (e, t, n, i) {
            var r, a, o, s, l, u = "function" == typeof e && e, d = !i && N(e = u.selector || e);
            if (n = n || [], 1 === d.length) {
                if (a = d[0] = d[0].slice(0), a.length > 2 && "ID" === (o = a[0]).type && A.getById && 9 === t.nodeType && M && L.relative[a[1].type]) {
                    if (t = (L.find.ID(o.matches[0].replace(At, Lt), t) || [])[0], !t)return n;
                    u && (t = t.parentNode), e = e.slice(a.shift().value.length)
                }
                for (r = gt.needsContext.test(e) ? 0 : a.length; r-- && (o = a[r], !L.relative[s = o.type]);)if ((l = L.find[s]) && (i = l(o.matches[0].replace(At, Lt), Et.test(a[0].type) && c(t.parentNode) || t))) {
                    if (a.splice(r, 1), e = i.length && p(a), !e)return J.apply(n, i), n;
                    break
                }
            }
            return (u || C(e, d))(i, t, !M, n, Et.test(e) && c(t.parentNode) || t), n
        }, A.sortStable = U.split("").sort(H).join("") === U, A.detectDuplicates = !!T, D(), A.sortDetached = r(function (e) {
            return 1 & e.compareDocumentPosition(B.createElement("div"))
        }), r(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || a("type|href|height|width", function (e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), A.attributes && r(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || a("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), r(function (e) {
            return null == e.getAttribute("disabled")
        }) || a(tt, function (e, t, n) {
            var i;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    rt.find = ut, rt.expr = ut.selectors, rt.expr[":"] = rt.expr.pseudos, rt.unique = ut.uniqueSort, rt.text = ut.getText, rt.isXMLDoc = ut.isXML, rt.contains = ut.contains;
    var ct = rt.expr.match.needsContext, dt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, pt = /^.[^:#\[\.,]*$/;
    rt.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? rt.find.matchesSelector(i, e) ? [i] : [] : rt.find.matches(e, rt.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, rt.fn.extend({
        find: function (e) {
            var t, n = [], i = this, r = i.length;
            if ("string" != typeof e)return this.pushStack(rt(e).filter(function () {
                for (t = 0; r > t; t++)if (rt.contains(i[t], this))return !0
            }));
            for (t = 0; r > t; t++)rt.find(e, i[t], n);
            return n = this.pushStack(r > 1 ? rt.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        }, filter: function (e) {
            return this.pushStack(i(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(i(this, e || [], !0))
        }, is: function (e) {
            return !!i(this, "string" == typeof e && ct.test(e) ? rt(e) : e || [], !1).length
        }
    });
    var mt, gt = e.document, ht = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ft = rt.fn.init = function (e, t) {
        var n, i;
        if (!e)return this;
        if ("string" == typeof e) {
            if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ht.exec(e), !n || !n[1] && t)return !t || t.jquery ? (t || mt).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof rt ? t[0] : t, rt.merge(this, rt.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : gt, !0)), dt.test(n[1]) && rt.isPlainObject(t))for (n in t)rt.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            if (i = gt.getElementById(n[2]), i && i.parentNode) {
                if (i.id !== n[2])return mt.find(e);
                this.length = 1, this[0] = i
            }
            return this.context = gt, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : rt.isFunction(e) ? "undefined" != typeof mt.ready ? mt.ready(e) : e(rt) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), rt.makeArray(e, this))
    };
    ft.prototype = rt.fn, mt = rt(gt);
    var bt = /^(?:parents|prev(?:Until|All))/, vt = {children: !0, contents: !0, next: !0, prev: !0};
    rt.extend({
        dir: function (e, t, n) {
            for (var i = [], r = e[t]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !rt(r).is(n));)1 === r.nodeType && i.push(r), r = r[t];
            return i
        }, sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), rt.fn.extend({
        has: function (e) {
            var t, n = rt(e, this), i = n.length;
            return this.filter(function () {
                for (t = 0; i > t; t++)if (rt.contains(this, n[t]))return !0
            })
        }, closest: function (e, t) {
            for (var n, i = 0, r = this.length, a = [], o = ct.test(e) || "string" != typeof e ? rt(e, t || this.context) : 0; r > i; i++)for (n = this[i]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && rt.find.matchesSelector(n, e))) {
                a.push(n);
                break
            }
            return this.pushStack(a.length > 1 ? rt.unique(a) : a)
        }, index: function (e) {
            return e ? "string" == typeof e ? rt.inArray(this[0], rt(e)) : rt.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(rt.unique(rt.merge(this.get(), rt(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), rt.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return rt.dir(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return rt.dir(e, "parentNode", n)
        }, next: function (e) {
            return r(e, "nextSibling")
        }, prev: function (e) {
            return r(e, "previousSibling")
        }, nextAll: function (e) {
            return rt.dir(e, "nextSibling")
        }, prevAll: function (e) {
            return rt.dir(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return rt.dir(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return rt.dir(e, "previousSibling", n)
        }, siblings: function (e) {
            return rt.sibling((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return rt.sibling(e.firstChild)
        }, contents: function (e) {
            return rt.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : rt.merge([], e.childNodes)
        }
    }, function (e, t) {
        rt.fn[e] = function (n, i) {
            var r = rt.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = rt.filter(i, r)), this.length > 1 && (vt[e] || (r = rt.unique(r)), bt.test(e) && (r = r.reverse())), this.pushStack(r)
        }
    });
    var Et = /\S+/g, It = {};
    rt.Callbacks = function (e) {
        e = "string" == typeof e ? It[e] || a(e) : rt.extend({}, e);
        var t, n, i, r, o, s, l = [], u = !e.once && [], c = function (a) {
            for (n = e.memory && a, i = !0, o = s || 0, s = 0, r = l.length, t = !0; l && r > o; o++)if (l[o].apply(a[0], a[1]) === !1 && e.stopOnFalse) {
                n = !1;
                break
            }
            t = !1, l && (u ? u.length && c(u.shift()) : n ? l = [] : d.disable())
        }, d = {
            add: function () {
                if (l) {
                    var i = l.length;
                    !function a(t) {
                        rt.each(t, function (t, n) {
                            var i = rt.type(n);
                            "function" === i ? e.unique && d.has(n) || l.push(n) : n && n.length && "string" !== i && a(n)
                        })
                    }(arguments), t ? r = l.length : n && (s = i, c(n))
                }
                return this
            }, remove: function () {
                return l && rt.each(arguments, function (e, n) {
                    for (var i; (i = rt.inArray(n, l, i)) > -1;)l.splice(i, 1), t && (r >= i && r--, o >= i && o--)
                }), this
            }, has: function (e) {
                return e ? rt.inArray(e, l) > -1 : !(!l || !l.length)
            }, empty: function () {
                return l = [], r = 0, this
            }, disable: function () {
                return l = u = n = void 0, this
            }, disabled: function () {
                return !l
            }, lock: function () {
                return u = void 0, n || d.disable(), this
            }, locked: function () {
                return !u
            }, fireWith: function (e, n) {
                return !l || i && !u || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? u.push(n) : c(n)), this
            }, fire: function () {
                return d.fireWith(this, arguments), this
            }, fired: function () {
                return !!i
            }
        };
        return d
    }, rt.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", rt.Callbacks("once memory"), "resolved"], ["reject", "fail", rt.Callbacks("once memory"), "rejected"], ["notify", "progress", rt.Callbacks("memory")]], n = "pending", i = {
                state: function () {
                    return n
                }, always: function () {
                    return r.done(arguments).fail(arguments), this
                }, then: function () {
                    var e = arguments;
                    return rt.Deferred(function (n) {
                        rt.each(t, function (t, a) {
                            var o = rt.isFunction(e[t]) && e[t];
                            r[a[1]](function () {
                                var e = o && o.apply(this, arguments);
                                e && rt.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a[0] + "With"](this === i ? n.promise() : this, o ? [e] : arguments)
                            })
                        }), e = null
                    }).promise()
                }, promise: function (e) {
                    return null != e ? rt.extend(e, i) : i
                }
            }, r = {};
            return i.pipe = i.then, rt.each(t, function (e, a) {
                var o = a[2], s = a[3];
                i[a[1]] = o.add, s && o.add(function () {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), r[a[0]] = function () {
                    return r[a[0] + "With"](this === r ? i : this, arguments), this
                }, r[a[0] + "With"] = o.fireWith
            }), i.promise(r), e && e.call(r, r), r
        }, when: function (e) {
            var t, n, i, r = 0, a = $.call(arguments), o = a.length, s = 1 !== o || e && rt.isFunction(e.promise) ? o : 0, l = 1 === s ? e : rt.Deferred(), u = function (e, n, i) {
                return function (r) {
                    n[e] = this, i[e] = arguments.length > 1 ? $.call(arguments) : r, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                }
            };
            if (o > 1)for (t = new Array(o), n = new Array(o), i = new Array(o); o > r; r++)a[r] && rt.isFunction(a[r].promise) ? a[r].promise().done(u(r, i, a)).fail(l.reject).progress(u(r, n, t)) : --s;
            return s || l.resolveWith(i, a), l.promise()
        }
    });
    var At;
    rt.fn.ready = function (e) {
        return rt.ready.promise().done(e), this
    }, rt.extend({
        isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? rt.readyWait++ : rt.ready(!0)
        }, ready: function (e) {
            if (e === !0 ? !--rt.readyWait : !rt.isReady) {
                if (!gt.body)return setTimeout(rt.ready);
                rt.isReady = !0, e !== !0 && --rt.readyWait > 0 || (At.resolveWith(gt, [rt]), rt.fn.triggerHandler && (rt(gt).triggerHandler("ready"), rt(gt).off("ready")))
            }
        }
    }), rt.ready.promise = function (t) {
        if (!At)if (At = rt.Deferred(), "complete" === gt.readyState)setTimeout(rt.ready); else if (gt.addEventListener)gt.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1); else {
            gt.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
            var n = !1;
            try {
                n = null == e.frameElement && gt.documentElement
            } catch (i) {
            }
            n && n.doScroll && !function r() {
                if (!rt.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(r, 50)
                    }
                    o(), rt.ready()
                }
            }()
        }
        return At.promise(t)
    };
    var Lt, yt = "undefined";
    for (Lt in rt(nt))break;
    nt.ownLast = "0" !== Lt, nt.inlineBlockNeedsLayout = !1, rt(function () {
        var e, t, n, i;
        n = gt.getElementsByTagName("body")[0], n && n.style && (t = gt.createElement("div"), i = gt.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== yt && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", nt.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
    }), function () {
        var e = gt.createElement("div");
        if (null == nt.deleteExpando) {
            nt.deleteExpando = !0;
            try {
                delete e.test
            } catch (t) {
                nt.deleteExpando = !1
            }
        }
        e = null
    }(), rt.acceptData = function (e) {
        var t = rt.noData[(e.nodeName + " ").toLowerCase()], n = +e.nodeType || 1;
        return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
    };
    var Ot = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Nt = /([A-Z])/g;
    rt.extend({
        cache: {},
        noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (e) {
            return e = e.nodeType ? rt.cache[e[rt.expando]] : e[rt.expando], !!e && !u(e)
        },
        data: function (e, t, n) {
            return c(e, t, n)
        },
        removeData: function (e, t) {
            return d(e, t)
        },
        _data: function (e, t, n) {
            return c(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return d(e, t, !0)
        }
    }), rt.fn.extend({
        data: function (e, t) {
            var n, i, r, a = this[0], o = a && a.attributes;
            if (void 0 === e) {
                if (this.length && (r = rt.data(a), 1 === a.nodeType && !rt._data(a, "parsedAttrs"))) {
                    for (n = o.length; n--;)o[n] && (i = o[n].name, 0 === i.indexOf("data-") && (i = rt.camelCase(i.slice(5)), l(a, i, r[i])));
                    rt._data(a, "parsedAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function () {
                rt.data(this, e)
            }) : arguments.length > 1 ? this.each(function () {
                rt.data(this, e, t)
            }) : a ? l(a, e, rt.data(a, e)) : void 0
        }, removeData: function (e) {
            return this.each(function () {
                rt.removeData(this, e)
            })
        }
    }), rt.extend({
        queue: function (e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = rt._data(e, t), n && (!i || rt.isArray(n) ? i = rt._data(e, t, rt.makeArray(n)) : i.push(n)), i || []) : void 0
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = rt.queue(e, t), i = n.length, r = n.shift(), a = rt._queueHooks(e, t), o = function () {
                rt.dequeue(e, t)
            };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete a.stop, r.call(e, o, a)), !i && a && a.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return rt._data(e, n) || rt._data(e, n, {
                    empty: rt.Callbacks("once memory").add(function () {
                        rt._removeData(e, t + "queue"), rt._removeData(e, n)
                    })
                })
        }
    }), rt.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? rt.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = rt.queue(this, e, t);
                rt._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && rt.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                rt.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, i = 1, r = rt.Deferred(), a = this, o = this.length, s = function () {
                --i || r.resolveWith(a, [a])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;)n = rt._data(a[o], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
            return s(), r.promise(t)
        }
    });
    var Ct = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Rt = ["Top", "Right", "Bottom", "Left"], wt = function (e, t) {
        return e = t || e, "none" === rt.css(e, "display") || !rt.contains(e.ownerDocument, e)
    }, St = rt.access = function (e, t, n, i, r, a, o) {
        var s = 0, l = e.length, u = null == n;
        if ("object" === rt.type(n)) {
            r = !0;
            for (s in n)rt.access(e, t, s, n[s], !0, a, o)
        } else if (void 0 !== i && (r = !0, rt.isFunction(i) || (o = !0), u && (o ? (t.call(e, i), t = null) : (u = t, t = function (e, t, n) {
                return u.call(rt(e), n)
            })), t))for (; l > s; s++)t(e[s], n, o ? i : i.call(e[s], s, t(e[s], n)));
        return r ? e : u ? t.call(e) : l ? t(e[0], n) : a
    }, Tt = /^(?:checkbox|radio)$/i;
    !function () {
        var e = gt.createElement("input"), t = gt.createElement("div"), n = gt.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", nt.leadingWhitespace = 3 === t.firstChild.nodeType, nt.tbody = !t.getElementsByTagName("tbody").length, nt.htmlSerialize = !!t.getElementsByTagName("link").length, nt.html5Clone = "<:nav></:nav>" !== gt.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), nt.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", nt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, nt.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function () {
                nt.noCloneEvent = !1
            }), t.cloneNode(!0).click()), null == nt.deleteExpando) {
            nt.deleteExpando = !0;
            try {
                delete t.test
            } catch (i) {
                nt.deleteExpando = !1
            }
        }
    }(), function () {
        var t, n, i = gt.createElement("div");
        for (t in{
            submit: !0,
            change: !0,
            focusin: !0
        })n = "on" + t, (nt[t + "Bubbles"] = n in e) || (i.setAttribute(n, "t"), nt[t + "Bubbles"] = i.attributes[n].expando === !1);
        i = null
    }();
    var Dt = /^(?:input|select|textarea)$/i, Bt = /^key/, kt = /^(?:mouse|pointer|contextmenu)|click/, Mt = /^(?:focusinfocus|focusoutblur)$/, xt = /^([^.]*)(?:\.(.+)|)$/;
    rt.event = {
        global: {},
        add: function (e, t, n, i, r) {
            var a, o, s, l, u, c, d, p, m, g, h, f = rt._data(e);
            if (f) {
                for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = rt.guid++), (o = f.events) || (o = f.events = {}), (c = f.handle) || (c = f.handle = function (e) {
                    return typeof rt === yt || e && rt.event.triggered === e.type ? void 0 : rt.event.dispatch.apply(c.elem, arguments)
                }, c.elem = e), t = (t || "").match(Et) || [""], s = t.length; s--;)a = xt.exec(t[s]) || [], m = h = a[1], g = (a[2] || "").split(".").sort(), m && (u = rt.event.special[m] || {}, m = (r ? u.delegateType : u.bindType) || m, u = rt.event.special[m] || {}, d = rt.extend({
                    type: m,
                    origType: h,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && rt.expr.match.needsContext.test(r),
                    namespace: g.join(".")
                }, l), (p = o[m]) || (p = o[m] = [], p.delegateCount = 0, u.setup && u.setup.call(e, i, g, c) !== !1 || (e.addEventListener ? e.addEventListener(m, c, !1) : e.attachEvent && e.attachEvent("on" + m, c))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, d) : p.push(d), rt.event.global[m] = !0);
                e = null
            }
        },
        remove: function (e, t, n, i, r) {
            var a, o, s, l, u, c, d, p, m, g, h, f = rt.hasData(e) && rt._data(e);
            if (f && (c = f.events)) {
                for (t = (t || "").match(Et) || [""], u = t.length; u--;)if (s = xt.exec(t[u]) || [], m = h = s[1], g = (s[2] || "").split(".").sort(), m) {
                    for (d = rt.event.special[m] || {}, m = (i ? d.delegateType : d.bindType) || m, p = c[m] || [], s = s[2] && new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = a = p.length; a--;)o = p[a], !r && h !== o.origType || n && n.guid !== o.guid || s && !s.test(o.namespace) || i && i !== o.selector && ("**" !== i || !o.selector) || (p.splice(a, 1), o.selector && p.delegateCount--, d.remove && d.remove.call(e, o));
                    l && !p.length && (d.teardown && d.teardown.call(e, g, f.handle) !== !1 || rt.removeEvent(e, m, f.handle), delete c[m])
                } else for (m in c)rt.event.remove(e, m + t[u], n, i, !0);
                rt.isEmptyObject(c) && (delete f.handle, rt._removeData(e, "events"))
            }
        },
        trigger: function (t, n, i, r) {
            var a, o, s, l, u, c, d, p = [i || gt], m = tt.call(t, "type") ? t.type : t, g = tt.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = i = i || gt, 3 !== i.nodeType && 8 !== i.nodeType && !Mt.test(m + rt.event.triggered) && (m.indexOf(".") >= 0 && (g = m.split("."), m = g.shift(), g.sort()), o = m.indexOf(":") < 0 && "on" + m, t = t[rt.expando] ? t : new rt.Event(m, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = g.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : rt.makeArray(n, [t]), u = rt.event.special[m] || {}, r || !u.trigger || u.trigger.apply(i, n) !== !1)) {
                if (!r && !u.noBubble && !rt.isWindow(i)) {
                    for (l = u.delegateType || m, Mt.test(l + m) || (s = s.parentNode); s; s = s.parentNode)p.push(s), c = s;
                    c === (i.ownerDocument || gt) && p.push(c.defaultView || c.parentWindow || e)
                }
                for (d = 0; (s = p[d++]) && !t.isPropagationStopped();)t.type = d > 1 ? l : u.bindType || m, a = (rt._data(s, "events") || {})[t.type] && rt._data(s, "handle"), a && a.apply(s, n), a = o && s[o], a && a.apply && rt.acceptData(s) && (t.result = a.apply(s, n), t.result === !1 && t.preventDefault());
                if (t.type = m, !r && !t.isDefaultPrevented() && (!u._default || u._default.apply(p.pop(), n) === !1) && rt.acceptData(i) && o && i[m] && !rt.isWindow(i)) {
                    c = i[o], c && (i[o] = null), rt.event.triggered = m;
                    try {
                        i[m]()
                    } catch (h) {
                    }
                    rt.event.triggered = void 0, c && (i[o] = c)
                }
                return t.result
            }
        },
        dispatch: function (e) {
            e = rt.event.fix(e);
            var t, n, i, r, a, o = [], s = $.call(arguments), l = (rt._data(this, "events") || {})[e.type] || [], u = rt.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (o = rt.event.handlers.call(this, e, l), t = 0; (r = o[t++]) && !e.isPropagationStopped();)for (e.currentTarget = r.elem, a = 0; (i = r.handlers[a++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, n = ((rt.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, i, r, a, o = [], s = t.delegateCount, l = e.target;
            if (s && l.nodeType && (!e.button || "click" !== e.type))for (; l != this; l = l.parentNode || this)if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                for (r = [], a = 0; s > a; a++)i = t[a], n = i.selector + " ", void 0 === r[n] && (r[n] = i.needsContext ? rt(n, this).index(l) >= 0 : rt.find(n, this, null, [l]).length), r[n] && r.push(i);
                r.length && o.push({elem: l, handlers: r})
            }
            return s < t.length && o.push({elem: this, handlers: t.slice(s)}), o
        },
        fix: function (e) {
            if (e[rt.expando])return e;
            var t, n, i, r = e.type, a = e, o = this.fixHooks[r];
            for (o || (this.fixHooks[r] = o = kt.test(r) ? this.mouseHooks : Bt.test(r) ? this.keyHooks : {}), i = o.props ? this.props.concat(o.props) : this.props, e = new rt.Event(a), t = i.length; t--;)n = i[t], e[n] = a[n];
            return e.target || (e.target = a.srcElement || gt), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, o.filter ? o.filter(e, a) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, i, r, a = t.button, o = t.fromElement;
                return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || gt, r = i.documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o), e.which || void 0 === a || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
            }
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== g() && this.focus)try {
                        return this.focus(), !1
                    } catch (e) {
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === g() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return rt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                }, _default: function (e) {
                    return rt.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, i) {
            var r = rt.extend(new rt.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
            i ? rt.event.trigger(r, null, t) : rt.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
        }
    }, rt.removeEvent = gt.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var i = "on" + t;
        e.detachEvent && (typeof e[i] === yt && (e[i] = null), e.detachEvent(i, n))
    }, rt.Event = function (e, t) {
        return this instanceof rt.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? p : m) : this.type = e, t && rt.extend(this, t), this.timeStamp = e && e.timeStamp || rt.now(), void(this[rt.expando] = !0)) : new rt.Event(e, t)
    }, rt.Event.prototype = {
        isDefaultPrevented: m,
        isPropagationStopped: m,
        isImmediatePropagationStopped: m,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = p, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = p, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = p, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, rt.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        rt.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, i = this, r = e.relatedTarget, a = e.handleObj;
                return (!r || r !== i && !rt.contains(i, r)) && (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), nt.submitBubbles || (rt.event.special.submit = {
        setup: function () {
            return rt.nodeName(this, "form") ? !1 : void rt.event.add(this, "click._submit keypress._submit", function (e) {
                var t = e.target, n = rt.nodeName(t, "input") || rt.nodeName(t, "button") ? t.form : void 0;
                n && !rt._data(n, "submitBubbles") && (rt.event.add(n, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), rt._data(n, "submitBubbles", !0))
            })
        }, postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && rt.event.simulate("submit", this.parentNode, e, !0))
        }, teardown: function () {
            return rt.nodeName(this, "form") ? !1 : void rt.event.remove(this, "._submit")
        }
    }), nt.changeBubbles || (rt.event.special.change = {
        setup: function () {
            return Dt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (rt.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), rt.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), rt.event.simulate("change", this, e, !0)
            })), !1) : void rt.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Dt.test(t.nodeName) && !rt._data(t, "changeBubbles") && (rt.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || rt.event.simulate("change", this.parentNode, e, !0)
                }), rt._data(t, "changeBubbles", !0))
            })
        }, handle: function (e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        }, teardown: function () {
            return rt.event.remove(this, "._change"), !Dt.test(this.nodeName)
        }
    }), nt.focusinBubbles || rt.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = function (e) {
            rt.event.simulate(t, e.target, rt.event.fix(e), !0)
        };
        rt.event.special[t] = {
            setup: function () {
                var i = this.ownerDocument || this, r = rt._data(i, t);
                r || i.addEventListener(e, n, !0), rt._data(i, t, (r || 0) + 1)
            }, teardown: function () {
                var i = this.ownerDocument || this, r = rt._data(i, t) - 1;
                r ? rt._data(i, t, r) : (i.removeEventListener(e, n, !0), rt._removeData(i, t))
            }
        }
    }), rt.fn.extend({
        on: function (e, t, n, i, r) {
            var a, o;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (a in e)this.on(a, t, n, e[a], r);
                return this
            }
            if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1)i = m; else if (!i)return this;
            return 1 === r && (o = i, i = function (e) {
                return rt().off(e), o.apply(this, arguments)
            }, i.guid = o.guid || (o.guid = rt.guid++)), this.each(function () {
                rt.event.add(this, e, i, n, t)
            })
        }, one: function (e, t, n, i) {
            return this.on(e, t, n, i, 1)
        }, off: function (e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj)return i = e.handleObj, rt(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e)this.off(r, t, e[r]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = m), this.each(function () {
                rt.event.remove(this, e, n, t)
            })
        }, trigger: function (e, t) {
            return this.each(function () {
                rt.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            return n ? rt.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Ft = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Pt = / jQuery\d+="(?:null|\d+)"/g, zt = new RegExp("<(?:" + Ft + ")[\\s/>]", "i"), Ut = /^\s+/, jt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Yt = /<([\w:]+)/, Gt = /<tbody/i, qt = /<|&#?\w+;/, Wt = /<(?:script|style|link)/i, _t = /checked\s*(?:[^=]|=\s*.checked.)/i, Ht = /^$|\/(?:java|ecma)script/i, Vt = /^true\/(.*)/, Kt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, $t = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: nt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }, Xt = h(gt), Zt = Xt.appendChild(gt.createElement("div"));
    $t.optgroup = $t.option, $t.tbody = $t.tfoot = $t.colgroup = $t.caption = $t.thead, $t.th = $t.td, rt.extend({
        clone: function (e, t, n) {
            var i, r, a, o, s, l = rt.contains(e.ownerDocument, e);
            if (nt.html5Clone || rt.isXMLDoc(e) || !zt.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (Zt.innerHTML = e.outerHTML, Zt.removeChild(a = Zt.firstChild)), !(nt.noCloneEvent && nt.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || rt.isXMLDoc(e)))for (i = f(a), s = f(e), o = 0; null != (r = s[o]); ++o)i[o] && y(r, i[o]);
            if (t)if (n)for (s = s || f(e), i = i || f(a), o = 0; null != (r = s[o]); o++)L(r, i[o]); else L(e, a);
            return i = f(a, "script"), i.length > 0 && A(i, !l && f(e, "script")), i = s = r = null, a
        }, buildFragment: function (e, t, n, i) {
            for (var r, a, o, s, l, u, c, d = e.length, p = h(t), m = [], g = 0; d > g; g++)if (a = e[g], a || 0 === a)if ("object" === rt.type(a))rt.merge(m, a.nodeType ? [a] : a); else if (qt.test(a)) {
                for (s = s || p.appendChild(t.createElement("div")), l = (Yt.exec(a) || ["", ""])[1].toLowerCase(), c = $t[l] || $t._default, s.innerHTML = c[1] + a.replace(jt, "<$1></$2>") + c[2], r = c[0]; r--;)s = s.lastChild;
                if (!nt.leadingWhitespace && Ut.test(a) && m.push(t.createTextNode(Ut.exec(a)[0])), !nt.tbody)for (a = "table" !== l || Gt.test(a) ? "<table>" !== c[1] || Gt.test(a) ? 0 : s : s.firstChild, r = a && a.childNodes.length; r--;)rt.nodeName(u = a.childNodes[r], "tbody") && !u.childNodes.length && a.removeChild(u);
                for (rt.merge(m, s.childNodes), s.textContent = ""; s.firstChild;)s.removeChild(s.firstChild);
                s = p.lastChild
            } else m.push(t.createTextNode(a));
            for (s && p.removeChild(s), nt.appendChecked || rt.grep(f(m, "input"), b), g = 0; a = m[g++];)if ((!i || -1 === rt.inArray(a, i)) && (o = rt.contains(a.ownerDocument, a), s = f(p.appendChild(a), "script"), o && A(s), n))for (r = 0; a = s[r++];)Ht.test(a.type || "") && n.push(a);
            return s = null, p
        }, cleanData: function (e, t) {
            for (var n, i, r, a, o = 0, s = rt.expando, l = rt.cache, u = nt.deleteExpando, c = rt.event.special; null != (n = e[o]); o++)if ((t || rt.acceptData(n)) && (r = n[s], a = r && l[r])) {
                if (a.events)for (i in a.events)c[i] ? rt.event.remove(n, i) : rt.removeEvent(n, i, a.handle);
                l[r] && (delete l[r], u ? delete n[s] : typeof n.removeAttribute !== yt ? n.removeAttribute(s) : n[s] = null, K.push(r))
            }
        }
    }), rt.fn.extend({
        text: function (e) {
            return St(this, function (e) {
                return void 0 === e ? rt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || gt).createTextNode(e))
            }, null, e, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = v(this, e);
                    t.appendChild(e)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = v(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, remove: function (e, t) {
            for (var n, i = e ? rt.filter(e, this) : this, r = 0; null != (n = i[r]); r++)t || 1 !== n.nodeType || rt.cleanData(f(n)), n.parentNode && (t && rt.contains(n.ownerDocument, n) && A(f(n, "script")), n.parentNode.removeChild(n));
            return this
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && rt.cleanData(f(e, !1)); e.firstChild;)e.removeChild(e.firstChild);
                e.options && rt.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        }, clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return rt.clone(this, e, t)
            })
        }, html: function (e) {
            return St(this, function (e) {
                var t = this[0] || {}, n = 0, i = this.length;
                if (void 0 === e)return 1 === t.nodeType ? t.innerHTML.replace(Pt, "") : void 0;
                if (!("string" != typeof e || Wt.test(e) || !nt.htmlSerialize && zt.test(e) || !nt.leadingWhitespace && Ut.test(e) || $t[(Yt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(jt, "<$1></$2>");
                    try {
                        for (; i > n; n++)t = this[n] || {}, 1 === t.nodeType && (rt.cleanData(f(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (r) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = arguments[0];
            return this.domManip(arguments, function (t) {
                e = this.parentNode, rt.cleanData(f(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        }, detach: function (e) {
            return this.remove(e, !0)
        }, domManip: function (e, t) {
            e = X.apply([], e);
            var n, i, r, a, o, s, l = 0, u = this.length, c = this, d = u - 1, p = e[0], m = rt.isFunction(p);
            if (m || u > 1 && "string" == typeof p && !nt.checkClone && _t.test(p))return this.each(function (n) {
                var i = c.eq(n);
                m && (e[0] = p.call(this, n, i.html())), i.domManip(e, t)
            });
            if (u && (s = rt.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                for (a = rt.map(f(s, "script"), E), r = a.length; u > l; l++)i = s, l !== d && (i = rt.clone(i, !0, !0), r && rt.merge(a, f(i, "script"))), t.call(this[l], i, l);
                if (r)for (o = a[a.length - 1].ownerDocument, rt.map(a, I), l = 0; r > l; l++)i = a[l], Ht.test(i.type || "") && !rt._data(i, "globalEval") && rt.contains(o, i) && (i.src ? rt._evalUrl && rt._evalUrl(i.src) : rt.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Kt, "")));
                s = n = null
            }
            return this
        }
    }), rt.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        rt.fn[e] = function (e) {
            for (var n, i = 0, r = [], a = rt(e), o = a.length - 1; o >= i; i++)n = i === o ? this : this.clone(!0), rt(a[i])[t](n), Z.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Jt, Qt = {};
    !function () {
        var e;
        nt.shrinkWrapBlocks = function () {
            if (null != e)return e;
            e = !1;
            var t, n, i;
            return n = gt.getElementsByTagName("body")[0], n && n.style ? (t = gt.createElement("div"), i = gt.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== yt && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(gt.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
        }
    }();
    var en, tn, nn = /^margin/, rn = new RegExp("^(" + Ct + ")(?!px)[a-z%]+$", "i"), an = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (en = function (t) {
        return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
    }, tn = function (e, t, n) {
        var i, r, a, o, s = e.style;
        return n = n || en(e), o = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== o || rt.contains(e.ownerDocument, e) || (o = rt.style(e, t)), rn.test(o) && nn.test(t) && (i = s.width, r = s.minWidth, a = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = i, s.minWidth = r, s.maxWidth = a)), void 0 === o ? o : o + ""
    }) : gt.documentElement.currentStyle && (en = function (e) {
        return e.currentStyle
    }, tn = function (e, t, n) {
        var i, r, a, o, s = e.style;
        return n = n || en(e), o = n ? n[t] : void 0, null == o && s && s[t] && (o = s[t]), rn.test(o) && !an.test(t) && (i = s.left, r = e.runtimeStyle, a = r && r.left, a && (r.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : o, o = s.pixelLeft + "px", s.left = i, a && (r.left = a)), void 0 === o ? o : o + "" || "auto"
    }), function () {
        function t() {
            var t, n, i, r;
            n = gt.getElementsByTagName("body")[0], n && n.style && (t = gt.createElement("div"), i = gt.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a = o = !1, l = !0, e.getComputedStyle && (a = "1%" !== (e.getComputedStyle(t, null) || {}).top, o = "4px" === (e.getComputedStyle(t, null) || {width: "4px"}).width, r = t.appendChild(gt.createElement("div")), r.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight), t.removeChild(r)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = t.getElementsByTagName("td"), r[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === r[0].offsetHeight, s && (r[0].style.display = "", r[1].style.display = "none", s = 0 === r[0].offsetHeight), n.removeChild(i))
        }

        var n, i, r, a, o, s, l;
        n = gt.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = n.getElementsByTagName("a")[0], i = r && r.style, i && (i.cssText = "float:left;opacity:.5", nt.opacity = "0.5" === i.opacity, nt.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === n.style.backgroundClip, nt.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, rt.extend(nt, {
            reliableHiddenOffsets: function () {
                return null == s && t(), s
            }, boxSizingReliable: function () {
                return null == o && t(), o
            }, pixelPosition: function () {
                return null == a && t(), a
            }, reliableMarginRight: function () {
                return null == l && t(), l
            }
        }))
    }(), rt.swap = function (e, t, n, i) {
        var r, a, o = {};
        for (a in t)o[a] = e.style[a], e.style[a] = t[a];
        r = n.apply(e, i || []);
        for (a in t)e.style[a] = o[a];
        return r
    };
    var on = /alpha\([^)]*\)/i, sn = /opacity\s*=\s*([^)]*)/, ln = /^(none|table(?!-c[ea]).+)/, un = new RegExp("^(" + Ct + ")(.*)$", "i"), cn = new RegExp("^([+-])=(" + Ct + ")", "i"), dn = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, pn = {letterSpacing: "0", fontWeight: "400"}, mn = ["Webkit", "O", "Moz", "ms"];
    rt.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = tn(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": nt.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, a, o, s = rt.camelCase(t), l = e.style;
                if (t = rt.cssProps[s] || (rt.cssProps[s] = R(l, s)), o = rt.cssHooks[t] || rt.cssHooks[s], void 0 === n)return o && "get"in o && void 0 !== (r = o.get(e, !1, i)) ? r : l[t];
                if (a = typeof n, "string" === a && (r = cn.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(rt.css(e, t)), a = "number"), null != n && n === n && ("number" !== a || rt.cssNumber[s] || (n += "px"), nt.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(o && "set"in o && void 0 === (n = o.set(e, n, i)))))try {
                    l[t] = n
                } catch (u) {
                }
            }
        },
        css: function (e, t, n, i) {
            var r, a, o, s = rt.camelCase(t);
            return t = rt.cssProps[s] || (rt.cssProps[s] = R(e.style, s)), o = rt.cssHooks[t] || rt.cssHooks[s], o && "get"in o && (a = o.get(e, !0, n)), void 0 === a && (a = tn(e, t, i)), "normal" === a && t in pn && (a = pn[t]), "" === n || n ? (r = parseFloat(a), n === !0 || rt.isNumeric(r) ? r || 0 : a) : a
        }
    }), rt.each(["height", "width"], function (e, t) {
        rt.cssHooks[t] = {
            get: function (e, n, i) {
                return n ? ln.test(rt.css(e, "display")) && 0 === e.offsetWidth ? rt.swap(e, dn, function () {
                    return D(e, t, i)
                }) : D(e, t, i) : void 0
            }, set: function (e, n, i) {
                var r = i && en(e);
                return S(e, n, i ? T(e, t, i, nt.boxSizing && "border-box" === rt.css(e, "boxSizing", !1, r), r) : 0)
            }
        }
    }), nt.opacity || (rt.cssHooks.opacity = {
        get: function (e, t) {
            return sn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        }, set: function (e, t) {
            var n = e.style, i = e.currentStyle, r = rt.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", a = i && i.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === rt.trim(a.replace(on, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = on.test(a) ? a.replace(on, r) : a + " " + r)
        }
    }), rt.cssHooks.marginRight = C(nt.reliableMarginRight, function (e, t) {
        return t ? rt.swap(e, {display: "inline-block"}, tn, [e, "marginRight"]) : void 0
    }), rt.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        rt.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, r = {}, a = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)r[e + Rt[i] + t] = a[i] || a[i - 2] || a[0];
                return r
            }
        }, nn.test(e) || (rt.cssHooks[e + t].set = S)
    }), rt.fn.extend({
        css: function (e, t) {
            return St(this, function (e, t, n) {
                var i, r, a = {}, o = 0;
                if (rt.isArray(t)) {
                    for (i = en(e), r = t.length; r > o; o++)a[t[o]] = rt.css(e, t[o], !1, i);
                    return a
                }
                return void 0 !== n ? rt.style(e, t, n) : rt.css(e, t)
            }, e, t, arguments.length > 1)
        }, show: function () {
            return w(this, !0)
        }, hide: function () {
            return w(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                wt(this) ? rt(this).show() : rt(this).hide()
            })
        }
    }), rt.Tween = B, B.prototype = {
        constructor: B, init: function (e, t, n, i, r, a) {
            this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = a || (rt.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = B.propHooks[this.prop];
            return e && e.get ? e.get(this) : B.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = B.propHooks[this.prop];
            return this.pos = t = this.options.duration ? rt.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : B.propHooks._default.set(this), this
        }
    }, B.prototype.init.prototype = B.prototype, B.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = rt.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            }, set: function (e) {
                rt.fx.step[e.prop] ? rt.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[rt.cssProps[e.prop]] || rt.cssHooks[e.prop]) ? rt.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, B.propHooks.scrollTop = B.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, rt.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, rt.fx = B.prototype.init, rt.fx.step = {};
    var gn, hn, fn = /^(?:toggle|show|hide)$/, bn = new RegExp("^(?:([+-])=|)(" + Ct + ")([a-z%]*)$", "i"), vn = /queueHooks$/, En = [F], In = {
        "*": [function (e, t) {
            var n = this.createTween(e, t), i = n.cur(), r = bn.exec(t), a = r && r[3] || (rt.cssNumber[e] ? "" : "px"), o = (rt.cssNumber[e] || "px" !== a && +i) && bn.exec(rt.css(n.elem, e)), s = 1, l = 20;
            if (o && o[3] !== a) {
                a = a || o[3], r = r || [], o = +i || 1;
                do s = s || ".5", o /= s, rt.style(n.elem, e, o + a); while (s !== (s = n.cur() / i) && 1 !== s && --l)
            }
            return r && (o = n.start = +o || +i || 0, n.unit = a, n.end = r[1] ? o + (r[1] + 1) * r[2] : +r[2]), n
        }]
    };
    rt.Animation = rt.extend(z, {
        tweener: function (e, t) {
            rt.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, i = 0, r = e.length; r > i; i++)n = e[i], In[n] = In[n] || [], In[n].unshift(t)
        }, prefilter: function (e, t) {
            t ? En.unshift(e) : En.push(e)
        }
    }), rt.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? rt.extend({}, e) : {
            complete: n || !n && t || rt.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !rt.isFunction(t) && t
        };
        return i.duration = rt.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in rt.fx.speeds ? rt.fx.speeds[i.duration] : rt.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            rt.isFunction(i.old) && i.old.call(this), i.queue && rt.dequeue(this, i.queue)
        }, i
    }, rt.fn.extend({
        fadeTo: function (e, t, n, i) {
            return this.filter(wt).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
        }, animate: function (e, t, n, i) {
            var r = rt.isEmptyObject(e), a = rt.speed(t, n, i), o = function () {
                var t = z(this, rt.extend({}, e), a);
                (r || rt._data(this, "finish")) && t.stop(!0)
            };
            return o.finish = o, r || a.queue === !1 ? this.each(o) : this.queue(a.queue, o)
        }, stop: function (e, t, n) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0, r = null != e && e + "queueHooks", a = rt.timers, o = rt._data(this);
                if (r)o[r] && o[r].stop && i(o[r]); else for (r in o)o[r] && o[r].stop && vn.test(r) && i(o[r]);
                for (r = a.length; r--;)a[r].elem !== this || null != e && a[r].queue !== e || (a[r].anim.stop(n), t = !1, a.splice(r, 1));
                (t || !n) && rt.dequeue(this, e)
            })
        }, finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = rt._data(this), i = n[e + "queue"], r = n[e + "queueHooks"], a = rt.timers, o = i ? i.length : 0;
                for (n.finish = !0, rt.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = a.length; t--;)a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                for (t = 0; o > t; t++)i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }), rt.each(["toggle", "show", "hide"], function (e, t) {
        var n = rt.fn[t];
        rt.fn[t] = function (e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(M(t, !0), e, i, r)
        }
    }), rt.each({
        slideDown: M("show"),
        slideUp: M("hide"),
        slideToggle: M("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        rt.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), rt.timers = [], rt.fx.tick = function () {
        var e, t = rt.timers, n = 0;
        for (gn = rt.now(); n < t.length; n++)e = t[n], e() || t[n] !== e || t.splice(n--, 1);
        t.length || rt.fx.stop(), gn = void 0
    }, rt.fx.timer = function (e) {
        rt.timers.push(e), e() ? rt.fx.start() : rt.timers.pop()
    }, rt.fx.interval = 13, rt.fx.start = function () {
        hn || (hn = setInterval(rt.fx.tick, rt.fx.interval))
    }, rt.fx.stop = function () {
        clearInterval(hn), hn = null
    }, rt.fx.speeds = {slow: 600, fast: 200, _default: 400}, rt.fn.delay = function (e, t) {
        return e = rt.fx ? rt.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
            var i = setTimeout(t, e);
            n.stop = function () {
                clearTimeout(i)
            }
        })
    }, function () {
        var e, t, n, i, r;
        t = gt.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = t.getElementsByTagName("a")[0], n = gt.createElement("select"), r = n.appendChild(gt.createElement("option")), e = t.getElementsByTagName("input")[0], i.style.cssText = "top:1px", nt.getSetAttribute = "t" !== t.className, nt.style = /top/.test(i.getAttribute("style")), nt.hrefNormalized = "/a" === i.getAttribute("href"), nt.checkOn = !!e.value, nt.optSelected = r.selected, nt.enctype = !!gt.createElement("form").enctype, n.disabled = !0, nt.optDisabled = !r.disabled, e = gt.createElement("input"), e.setAttribute("value", ""), nt.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), nt.radioValue = "t" === e.value
    }();
    var An = /\r/g;
    rt.fn.extend({
        val: function (e) {
            var t, n, i, r = this[0];
            {
                if (arguments.length)return i = rt.isFunction(e), this.each(function (n) {
                    var r;
                    1 === this.nodeType && (r = i ? e.call(this, n, rt(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : rt.isArray(r) && (r = rt.map(r, function (e) {
                        return null == e ? "" : e + ""
                    })), t = rt.valHooks[this.type] || rt.valHooks[this.nodeName.toLowerCase()], t && "set"in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                });
                if (r)return t = rt.valHooks[r.type] || rt.valHooks[r.nodeName.toLowerCase()], t && "get"in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(An, "") : null == n ? "" : n)
            }
        }
    }), rt.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = rt.find.attr(e, "value");
                    return null != t ? t : rt.trim(rt.text(e))
                }
            }, select: {
                get: function (e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, a = "select-one" === e.type || 0 > r, o = a ? null : [], s = a ? r + 1 : i.length, l = 0 > r ? s : a ? r : 0; s > l; l++)if (n = i[l], !(!n.selected && l !== r || (nt.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && rt.nodeName(n.parentNode, "optgroup"))) {
                        if (t = rt(n).val(), a)return t;
                        o.push(t)
                    }
                    return o
                }, set: function (e, t) {
                    for (var n, i, r = e.options, a = rt.makeArray(t), o = r.length; o--;)if (i = r[o], rt.inArray(rt.valHooks.option.get(i), a) >= 0)try {
                        i.selected = n = !0
                    } catch (s) {
                        i.scrollHeight
                    } else i.selected = !1;
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), rt.each(["radio", "checkbox"], function () {
        rt.valHooks[this] = {
            set: function (e, t) {
                return rt.isArray(t) ? e.checked = rt.inArray(rt(e).val(), t) >= 0 : void 0
            }
        }, nt.checkOn || (rt.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Ln, yn, On = rt.expr.attrHandle, Nn = /^(?:checked|selected)$/i, Cn = nt.getSetAttribute, Rn = nt.input;
    rt.fn.extend({
        attr: function (e, t) {
            return St(this, rt.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                rt.removeAttr(this, e)
            })
        }
    }), rt.extend({
        attr: function (e, t, n) {
            var i, r, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a)return typeof e.getAttribute === yt ? rt.prop(e, t, n) : (1 === a && rt.isXMLDoc(e) || (t = t.toLowerCase(), i = rt.attrHooks[t] || (rt.expr.match.bool.test(t) ? yn : Ln)), void 0 === n ? i && "get"in i && null !== (r = i.get(e, t)) ? r : (r = rt.find.attr(e, t), null == r ? void 0 : r) : null !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : void rt.removeAttr(e, t))
        }, removeAttr: function (e, t) {
            var n, i, r = 0, a = t && t.match(Et);
            if (a && 1 === e.nodeType)for (; n = a[r++];)i = rt.propFix[n] || n, rt.expr.match.bool.test(n) ? Rn && Cn || !Nn.test(n) ? e[i] = !1 : e[rt.camelCase("default-" + n)] = e[i] = !1 : rt.attr(e, n, ""), e.removeAttribute(Cn ? n : i)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!nt.radioValue && "radio" === t && rt.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), yn = {
        set: function (e, t, n) {
            return t === !1 ? rt.removeAttr(e, n) : Rn && Cn || !Nn.test(n) ? e.setAttribute(!Cn && rt.propFix[n] || n, n) : e[rt.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, rt.each(rt.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = On[t] || rt.find.attr;
        On[t] = Rn && Cn || !Nn.test(t) ? function (e, t, i) {
            var r, a;
            return i || (a = On[t], On[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, On[t] = a), r
        } : function (e, t, n) {
            return n ? void 0 : e[rt.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), Rn && Cn || (rt.attrHooks.value = {
        set: function (e, t, n) {
            return rt.nodeName(e, "input") ? void(e.defaultValue = t) : Ln && Ln.set(e, t, n)
        }
    }), Cn || (Ln = {
        set: function (e, t, n) {
            var i = e.getAttributeNode(n);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, On.id = On.name = On.coords = function (e, t, n) {
        var i;
        return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
    }, rt.valHooks.button = {
        get: function (e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        }, set: Ln.set
    }, rt.attrHooks.contenteditable = {
        set: function (e, t, n) {
            Ln.set(e, "" === t ? !1 : t, n)
        }
    }, rt.each(["width", "height"], function (e, t) {
        rt.attrHooks[t] = {
            set: function (e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), nt.style || (rt.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || void 0
        }, set: function (e, t) {
            return e.style.cssText = t + ""
        }
    });
    var wn = /^(?:input|select|textarea|button|object)$/i, Sn = /^(?:a|area)$/i;
    rt.fn.extend({
        prop: function (e, t) {
            return St(this, rt.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return e = rt.propFix[e] || e, this.each(function () {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {
                }
            })
        }
    }), rt.extend({
        propFix: {"for": "htmlFor", "class": "className"}, prop: function (e, t, n) {
            var i, r, a, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o)return a = 1 !== o || !rt.isXMLDoc(e), a && (t = rt.propFix[t] || t, r = rt.propHooks[t]), void 0 !== n ? r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get"in r && null !== (i = r.get(e, t)) ? i : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = rt.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : wn.test(e.nodeName) || Sn.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), nt.hrefNormalized || rt.each(["href", "src"], function (e, t) {
        rt.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), nt.optSelected || (rt.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), rt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        rt.propFix[this.toLowerCase()] = this
    }), nt.enctype || (rt.propFix.enctype = "encoding");
    var Tn = /[\t\r\n\f]/g;
    rt.fn.extend({
        addClass: function (e) {
            var t, n, i, r, a, o, s = 0, l = this.length, u = "string" == typeof e && e;
            if (rt.isFunction(e))return this.each(function (t) {
                rt(this).addClass(e.call(this, t, this.className))
            });
            if (u)for (t = (e || "").match(Et) || []; l > s; s++)if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Tn, " ") : " ")) {
                for (a = 0; r = t[a++];)i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                o = rt.trim(i), n.className !== o && (n.className = o)
            }
            return this
        }, removeClass: function (e) {
            var t, n, i, r, a, o, s = 0, l = this.length, u = 0 === arguments.length || "string" == typeof e && e;
            if (rt.isFunction(e))return this.each(function (t) {
                rt(this).removeClass(e.call(this, t, this.className))
            });
            if (u)for (t = (e || "").match(Et) || []; l > s; s++)if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Tn, " ") : "")) {
                for (a = 0; r = t[a++];)for (; i.indexOf(" " + r + " ") >= 0;)i = i.replace(" " + r + " ", " ");
                o = e ? rt.trim(i) : "", n.className !== o && (n.className = o)
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(rt.isFunction(e) ? function (n) {
                rt(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function () {
                if ("string" === n)for (var t, i = 0, r = rt(this), a = e.match(Et) || []; t = a[i++];)r.hasClass(t) ? r.removeClass(t) : r.addClass(t); else(n === yt || "boolean" === n) && (this.className && rt._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : rt._data(this, "__className__") || "")
            })
        }, hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Tn, " ").indexOf(t) >= 0)return !0;
            return !1
        }
    }), rt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        rt.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), rt.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }, bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Dn = rt.now(), Bn = /\?/, kn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    rt.parseJSON = function (t) {
        if (e.JSON && e.JSON.parse)return e.JSON.parse(t + "");
        var n, i = null, r = rt.trim(t + "");
        return r && !rt.trim(r.replace(kn, function (e, t, r, a) {
            return n && t && (i = 0), 0 === i ? e : (n = r || t, i += !a - !r, "")
        })) ? Function("return " + r)() : rt.error("Invalid JSON: " + t)
    }, rt.parseXML = function (t) {
        var n, i;
        if (!t || "string" != typeof t)return null;
        try {
            e.DOMParser ? (i = new DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (r) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || rt.error("Invalid XML: " + t), n
    };
    var Mn, xn, Fn = /#.*$/, Pn = /([?&])_=[^&]*/, zn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Un = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, jn = /^(?:GET|HEAD)$/, Yn = /^\/\//, Gn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, qn = {}, Wn = {}, _n = "*/".concat("*");
    try {
        xn = location.href
    } catch (Hn) {
        xn = gt.createElement("a"), xn.href = "", xn = xn.href
    }
    Mn = Gn.exec(xn.toLowerCase()) || [], rt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: xn,
            type: "GET",
            isLocal: Un.test(Mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": _n,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": rt.parseJSON, "text xml": rt.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? Y(Y(e, rt.ajaxSettings), t) : Y(rt.ajaxSettings, e)
        },
        ajaxPrefilter: U(qn),
        ajaxTransport: U(Wn),
        ajax: function (e, t) {
            function n(e, t, n, i) {
                var r, c, b, v, I, L = t;
                2 !== E && (E = 2, s && clearTimeout(s), u = void 0, o = i || "", A.readyState = e > 0 ? 4 : 0, r = e >= 200 && 300 > e || 304 === e, n && (v = G(d, A, n)), v = q(d, v, A, r), r ? (d.ifModified && (I = A.getResponseHeader("Last-Modified"), I && (rt.lastModified[a] = I), I = A.getResponseHeader("etag"), I && (rt.etag[a] = I)), 204 === e || "HEAD" === d.type ? L = "nocontent" : 304 === e ? L = "notmodified" : (L = v.state, c = v.data, b = v.error, r = !b)) : (b = L, (e || !L) && (L = "error", 0 > e && (e = 0))), A.status = e, A.statusText = (t || L) + "", r ? g.resolveWith(p, [c, L, A]) : g.rejectWith(p, [A, L, b]), A.statusCode(f), f = void 0, l && m.trigger(r ? "ajaxSuccess" : "ajaxError", [A, d, r ? c : b]), h.fireWith(p, [A, L]), l && (m.trigger("ajaxComplete", [A, d]), --rt.active || rt.event.trigger("ajaxStop")))
            }

            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var i, r, a, o, s, l, u, c, d = rt.ajaxSetup({}, t), p = d.context || d, m = d.context && (p.nodeType || p.jquery) ? rt(p) : rt.event, g = rt.Deferred(), h = rt.Callbacks("once memory"), f = d.statusCode || {}, b = {}, v = {}, E = 0, I = "canceled", A = {
                readyState: 0,
                getResponseHeader: function (e) {
                    var t;
                    if (2 === E) {
                        if (!c)for (c = {}; t = zn.exec(o);)c[t[1].toLowerCase()] = t[2];
                        t = c[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function () {
                    return 2 === E ? o : null
                },
                setRequestHeader: function (e, t) {
                    var n = e.toLowerCase();
                    return E || (e = v[n] = v[n] || e, b[e] = t), this
                },
                overrideMimeType: function (e) {
                    return E || (d.mimeType = e), this
                },
                statusCode: function (e) {
                    var t;
                    if (e)if (2 > E)for (t in e)f[t] = [f[t], e[t]]; else A.always(e[A.status]);
                    return this
                },
                abort: function (e) {
                    var t = e || I;
                    return u && u.abort(t), n(0, t), this
                }
            };
            if (g.promise(A).complete = h.add, A.success = A.done, A.error = A.fail, d.url = ((e || d.url || xn) + "").replace(Fn, "").replace(Yn, Mn[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = rt.trim(d.dataType || "*").toLowerCase().match(Et) || [""], null == d.crossDomain && (i = Gn.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === Mn[1] && i[2] === Mn[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Mn[3] || ("http:" === Mn[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = rt.param(d.data, d.traditional)), j(qn, d, t, A), 2 === E)return A;
            l = rt.event && d.global, l && 0 === rt.active++ && rt.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !jn.test(d.type), a = d.url, d.hasContent || (d.data && (a = d.url += (Bn.test(a) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Pn.test(a) ? a.replace(Pn, "$1_=" + Dn++) : a + (Bn.test(a) ? "&" : "?") + "_=" + Dn++)), d.ifModified && (rt.lastModified[a] && A.setRequestHeader("If-Modified-Since", rt.lastModified[a]), rt.etag[a] && A.setRequestHeader("If-None-Match", rt.etag[a])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && A.setRequestHeader("Content-Type", d.contentType), A.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + _n + "; q=0.01" : "") : d.accepts["*"]);
            for (r in d.headers)A.setRequestHeader(r, d.headers[r]);
            if (d.beforeSend && (d.beforeSend.call(p, A, d) === !1 || 2 === E))return A.abort();
            I = "abort";
            for (r in{success: 1, error: 1, complete: 1})A[r](d[r]);
            if (u = j(Wn, d, t, A)) {
                A.readyState = 1, l && m.trigger("ajaxSend", [A, d]), d.async && d.timeout > 0 && (s = setTimeout(function () {
                    A.abort("timeout")
                }, d.timeout));
                try {
                    E = 1, u.send(b, n)
                } catch (L) {
                    if (!(2 > E))throw L;
                    n(-1, L)
                }
            } else n(-1, "No Transport");
            return A
        },
        getJSON: function (e, t, n) {
            return rt.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return rt.get(e, void 0, t, "script")
        }
    }), rt.each(["get", "post"], function (e, t) {
        rt[t] = function (e, n, i, r) {
            return rt.isFunction(n) && (r = r || i, i = n, n = void 0), rt.ajax({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            })
        }
    }), rt._evalUrl = function (e) {
        return rt.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, rt.fn.extend({
        wrapAll: function (e) {
            if (rt.isFunction(e))return this.each(function (t) {
                rt(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = rt(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;)e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        }, wrapInner: function (e) {
            return this.each(rt.isFunction(e) ? function (t) {
                rt(this).wrapInner(e.call(this, t))
            } : function () {
                var t = rt(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = rt.isFunction(e);
            return this.each(function (n) {
                rt(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                rt.nodeName(this, "body") || rt(this).replaceWith(this.childNodes)
            }).end()
        }
    }), rt.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !nt.reliableHiddenOffsets() && "none" === (e.style && e.style.display || rt.css(e, "display"))
    }, rt.expr.filters.visible = function (e) {
        return !rt.expr.filters.hidden(e)
    };
    var Vn = /%20/g, Kn = /\[\]$/, $n = /\r?\n/g, Xn = /^(?:submit|button|image|reset|file)$/i, Zn = /^(?:input|select|textarea|keygen)/i;
    rt.param = function (e, t) {
        var n, i = [], r = function (e, t) {
            t = rt.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = rt.ajaxSettings && rt.ajaxSettings.traditional), rt.isArray(e) || e.jquery && !rt.isPlainObject(e))rt.each(e, function () {
            r(this.name, this.value)
        }); else for (n in e)W(n, e[n], t, r);
        return i.join("&").replace(Vn, "+")
    }, rt.fn.extend({
        serialize: function () {
            return rt.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = rt.prop(this, "elements");
                return e ? rt.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !rt(this).is(":disabled") && Zn.test(this.nodeName) && !Xn.test(e) && (this.checked || !Tt.test(e))
            }).map(function (e, t) {
                var n = rt(this).val();
                return null == n ? null : rt.isArray(n) ? rt.map(n, function (e) {
                    return {name: t.name, value: e.replace($n, "\r\n")}
                }) : {name: t.name, value: n.replace($n, "\r\n")}
            }).get()
        }
    }), rt.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && _() || H()
    } : _;
    var Jn = 0, Qn = {}, ei = rt.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function () {
        for (var e in Qn)Qn[e](void 0, !0)
    }), nt.cors = !!ei && "withCredentials"in ei, ei = nt.ajax = !!ei, ei && rt.ajaxTransport(function (e) {
        if (!e.crossDomain || nt.cors) {
            var t;
            return {
                send: function (n, i) {
                    var r, a = e.xhr(), o = ++Jn;
                    if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)for (r in e.xhrFields)a[r] = e.xhrFields[r];
                    e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (r in n)void 0 !== n[r] && a.setRequestHeader(r, n[r] + "");
                    a.send(e.hasContent && e.data || null), t = function (n, r) {
                        var s, l, u;
                        if (t && (r || 4 === a.readyState))if (delete Qn[o], t = void 0, a.onreadystatechange = rt.noop, r)4 !== a.readyState && a.abort(); else {
                            u = {}, s = a.status, "string" == typeof a.responseText && (u.text = a.responseText);
                            try {
                                l = a.statusText
                            } catch (c) {
                                l = ""
                            }
                            s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404
                        }
                        u && i(s, l, u, a.getAllResponseHeaders())
                    }, e.async ? 4 === a.readyState ? setTimeout(t) : a.onreadystatechange = Qn[o] = t : t()
                }, abort: function () {
                    t && t(void 0, !0)
                }
            }
        }
    }), rt.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (e) {
                return rt.globalEval(e), e
            }
        }
    }), rt.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), rt.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n = gt.head || rt("head")[0] || gt.documentElement;
            return {
                send: function (i, r) {
                    t = gt.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || r(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                }, abort: function () {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var ti = [], ni = /(=)\?(?=&|$)|\?\?/;
    rt.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = ti.pop() || rt.expando + "_" + Dn++;
            return this[e] = !0, e
        }
    }), rt.ajaxPrefilter("json jsonp", function (t, n, i) {
        var r, a, o, s = t.jsonp !== !1 && (ni.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && ni.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = rt.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(ni, "$1" + r) : t.jsonp !== !1 && (t.url += (Bn.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
            return o || rt.error(r + " was not called"), o[0]
        }, t.dataTypes[0] = "json", a = e[r], e[r] = function () {
            o = arguments
        }, i.always(function () {
            e[r] = a, t[r] && (t.jsonpCallback = n.jsonpCallback, ti.push(r)), o && rt.isFunction(a) && a(o[0]), o = a = void 0
        }), "script") : void 0
    }), rt.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e)return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || gt;
        var i = dt.exec(e), r = !n && [];
        return i ? [t.createElement(i[1])] : (i = rt.buildFragment([e], t, r), r && r.length && rt(r).remove(), rt.merge([], i.childNodes))
    };
    var ii = rt.fn.load;
    rt.fn.load = function (e, t, n) {
        if ("string" != typeof e && ii)return ii.apply(this, arguments);
        var i, r, a, o = this, s = e.indexOf(" ");
        return s >= 0 && (i = rt.trim(e.slice(s, e.length)), e = e.slice(0, s)), rt.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (a = "POST"), o.length > 0 && rt.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: t
        }).done(function (e) {
            r = arguments, o.html(i ? rt("<div>").append(rt.parseHTML(e)).find(i) : e)
        }).complete(n && function (e, t) {
                o.each(n, r || [e.responseText, t, e])
            }), this
    }, rt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        rt.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), rt.expr.filters.animated = function (e) {
        return rt.grep(rt.timers, function (t) {
            return e === t.elem
        }).length
    };
    var ri = e.document.documentElement;
    rt.offset = {
        setOffset: function (e, t, n) {
            var i, r, a, o, s, l, u, c = rt.css(e, "position"), d = rt(e), p = {};
            "static" === c && (e.style.position = "relative"), s = d.offset(), a = rt.css(e, "top"), l = rt.css(e, "left"), u = ("absolute" === c || "fixed" === c) && rt.inArray("auto", [a, l]) > -1, u ? (i = d.position(), o = i.top, r = i.left) : (o = parseFloat(a) || 0, r = parseFloat(l) || 0), rt.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (p.top = t.top - s.top + o), null != t.left && (p.left = t.left - s.left + r), "using"in t ? t.using.call(e, p) : d.css(p)
        }
    }, rt.fn.extend({
        offset: function (e) {
            if (arguments.length)return void 0 === e ? this : this.each(function (t) {
                rt.offset.setOffset(this, e, t)
            });
            var t, n, i = {top: 0, left: 0}, r = this[0], a = r && r.ownerDocument;
            if (a)return t = a.documentElement, rt.contains(t, r) ? (typeof r.getBoundingClientRect !== yt && (i = r.getBoundingClientRect()), n = V(a), {
                top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : i
        }, position: function () {
            if (this[0]) {
                var e, t, n = {top: 0, left: 0}, i = this[0];
                return "fixed" === rt.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), rt.nodeName(e[0], "html") || (n = e.offset()), n.top += rt.css(e[0], "borderTopWidth", !0), n.left += rt.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - rt.css(i, "marginTop", !0),
                    left: t.left - n.left - rt.css(i, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || ri; e && !rt.nodeName(e, "html") && "static" === rt.css(e, "position");)e = e.offsetParent;
                return e || ri
            })
        }
    }), rt.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
        var n = /Y/.test(t);
        rt.fn[e] = function (i) {
            return St(this, function (e, i, r) {
                var a = V(e);
                return void 0 === r ? a ? t in a ? a[t] : a.document.documentElement[i] : e[i] : void(a ? a.scrollTo(n ? rt(a).scrollLeft() : r, n ? r : rt(a).scrollTop()) : e[i] = r)
            }, e, i, arguments.length, null)
        }
    }), rt.each(["top", "left"], function (e, t) {
        rt.cssHooks[t] = C(nt.pixelPosition, function (e, n) {
            return n ? (n = tn(e, t), rn.test(n) ? rt(e).position()[t] + "px" : n) : void 0
        })
    }), rt.each({Height: "height", Width: "width"}, function (e, t) {
        rt.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, i) {
            rt.fn[i] = function (i, r) {
                var a = arguments.length && (n || "boolean" != typeof i), o = n || (i === !0 || r === !0 ? "margin" : "border");
                return St(this, function (t, n, i) {
                    var r;
                    return rt.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? rt.css(t, n, o) : rt.style(t, n, i, o)
                }, t, a ? i : void 0, a, null)
            }
        })
    }), rt.fn.size = function () {
        return this.length
    }, rt.fn.andSelf = rt.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return rt
    });
    var ai = e.jQuery, oi = e.$;
    return rt.noConflict = function (t) {
        return e.$ === rt && (e.$ = oi), t && e.jQuery === rt && (e.jQuery = ai), rt
    }, typeof t === yt && (e.jQuery = e.$ = rt), rt
}), function (e, t, n, r) {
    var a = "adobestock_mosaic", o = {
        target_height: 240,
        image_selector: ".thumb-frame img",
        parent_selector: ".ftl-thumb-mosaic",
        spacing: 20
    };
    try {
        var s = new CustomEvent("mosaicLayoutChanged", {
            detail: {message: "Mosaic Layout Changed", time: new Date},
            bubbles: !0,
            cancelable: !0
        })
    } catch (l) {
        try {
            var s = t.createEvent("Event");
            s.initEvent("mosaicLayoutChanged", !0, !0), t.addEventListener("mosaicLayoutChanged", function () {
            }, !1), t.dispatchEvent(s)
        } catch (l) {
        }
    }
    Adobestock_Mosaic = function (t, n) {
        t != r && (this.container = t, this.settings = e.extend(o, n || {}), this._initialize())
    }, e.extend(Adobestock_Mosaic.prototype, {
        _initialize: function () {
            this.images = e(this.settings.image_selector, this.container), this.images_sizes = [], this.images_parents = [], this.images.length > 0 && (this._scaleLibrary(), this.event_handlers_set || (this.event_handlers_set = !0, e(n).on("resize." + a, {adobestock_mosaic: this}, this._onWindowResize), e(n).on("reload." + a, {adobestock_mosaic: this}, this._onReloadMosaic)))
        }, _scaleLibrary: function (n) {
            var i, a = this, o = 0, l = 0, u = 0;
            if (n !== !0 && (this.resize_waiting = !0, this.container.css("width", "100%"), -1 != navigator.appVersion.indexOf("Win") && this.container.css("width", "99%"), i = this.container.width(), this.container_width = i), this.rows = [], this.rows_widths = [], this.images.each(function (t, n) {
                    var i = e(n), s = a._getImageSizesById(t), c = s[0], d = s[1], p = c / d * a.settings.target_height, m = a.settings.target_height;
                    d > u && (u = d), a.rows[o] == r && (a.rows[o] = []), l += p + a.settings.spacing;
                    var g = {id: t, element: i, new_image_width: p, new_image_height: m};
                    a.rows[o].push(g), l > a.container_width - a.settings.spacing ? (a.rows_widths[o] = l, o++, l = 0) : t == a.images.length - 1 && (a.rows_widths[o] = l)
                }), this.settings.target_height > u)this.settings.target_height = u, this._scaleLibrary(!0); else {
                for (o in this.rows)this._resizeRow(o);
                this.resize_waiting = !1
            }
            t.dispatchEvent(s), this.container.css("width", "101%")
        }, _resizeRow: function (e) {
            var t = this.rows[e], n = this.settings.spacing * (t.length - 1), r = (this.container_width - n) / (this.rows_widths[e] - n), a = !(this.rows.length - e != 1);
            this.row_min_padding = 0;
            for (i in t)is_last_of_row = !(t.length - i != 1), this._resizeImage(t[i], [is_last_of_row, a, r, e])
        }, _resizeImage: function (e, t) {
            var n, i = {}, r = {}, a = t[0], o = t[1], s = t[2], l = t[3], u = Math.floor(e.new_image_width * s), c = Math.floor(e.new_image_height * s);
            o && this.container_width > this.rows_widths[l] && (u = e.new_image_width, c = e.new_image_height), i.width = u, i.height = c, e.element.css(i), n = this._getImageParentElm(e.id, e.element), r["margin-right"] = a ? "0px" : this.settings.spacing + "px", n.css(r)
        }, _onWindowResize: function (e) {
            var t = e.data.adobestock_mosaic;
            return t.resize_waiting || (t.resize_waiting = !0, n.setTimeout(function () {
                t._scaleLibrary()
            }, 100)), e.preventDefault(), !1
        }, _onReloadMosaic: function (e) {
            var t = e.data.adobestock_mosaic;
            t._initialize()
        }, _getImageSizesById: function (t) {
            if (this.images[t] == r)this.images_sizes[t] = [0, 0]; else if (this.images_sizes[t] == r) {
                var n = e(this.images[t]), i = n.attr("width") || n.width(), a = n.attr("height") || n.height();
                this.images_sizes[t] = [parseInt(i), parseInt(a)]
            }
            return this.images_sizes[t]
        }, _getImageParentElm: function (e, t) {
            return this.images_parents[e] == r && (this.images_parents[e] = t.parents(this.settings.parent_selector)), this.images_parents[e]
        }
    }), e.adobestock_mosaic = new Adobestock_Mosaic, e.fn.adobestock_mosaic = function (t) {
        return this.each(function () {
            e.data(this, a) || e.data(this, a, new Adobestock_Mosaic(e(this), t))
        })
    }
}(jQuery, document, window);
var requirejs, require, define;
!function (global) {
    function isFunction(e) {
        return "[object Function]" === ostring.call(e)
    }

    function isArray(e) {
        return "[object Array]" === ostring.call(e)
    }

    function each(e, t) {
        if (e) {
            var n;
            for (n = 0; n < e.length && (!e[n] || !t(e[n], n, e)); n += 1);
        }
    }

    function eachReverse(e, t) {
        if (e) {
            var n;
            for (n = e.length - 1; n > -1 && (!e[n] || !t(e[n], n, e)); n -= 1);
        }
    }

    function hasProp(e, t) {
        return hasOwn.call(e, t)
    }

    function getOwn(e, t) {
        return hasProp(e, t) && e[t]
    }

    function eachProp(e, t) {
        var n;
        for (n in e)if (hasProp(e, n) && t(e[n], n))break
    }

    function mixin(e, t, n, i) {
        return t && eachProp(t, function (t, r) {
            (n || !hasProp(e, r)) && (!i || "object" != typeof t || !t || isArray(t) || isFunction(t) || t instanceof RegExp ? e[r] = t : (e[r] || (e[r] = {}), mixin(e[r], t, n, i)))
        }), e
    }

    function bind(e, t) {
        return function () {
            return t.apply(e, arguments)
        }
    }

    function scripts() {
        return document.getElementsByTagName("script")
    }

    function defaultOnError(e) {
        throw e
    }

    function getGlobal(e) {
        if (!e)return e;
        var t = global;
        return each(e.split("."), function (e) {
            t = t[e]
        }), t
    }

    function makeError(e, t, n, i) {
        var r = new Error(t + "\nhttp://requirejs.org/docs/errors.html#" + e);
        return r.requireType = e, r.requireModules = i, n && (r.originalError = n), r
    }

    function newContext(e) {
        function t(e) {
            var t, n;
            for (t = 0; t < e.length; t++)if (n = e[t], "." === n)e.splice(t, 1), t -= 1; else if (".." === n) {
                if (0 === t || 1 == t && ".." === e[2] || ".." === e[t - 1])continue;
                t > 0 && (e.splice(t - 1, 2), t -= 2)
            }
        }

        function n(e, n, i) {
            var r, a, o, s, l, u, c, d, p, m, g, h, f = n && n.split("/"), b = y.map, v = b && b["*"];
            if (e && (e = e.split("/"), c = e.length - 1, y.nodeIdCompat && jsSuffixRegExp.test(e[c]) && (e[c] = e[c].replace(jsSuffixRegExp, "")), "." === e[0].charAt(0) && f && (h = f.slice(0, f.length - 1), e = h.concat(e)), t(e), e = e.join("/")), i && b && (f || v)) {
                o = e.split("/");
                e:for (s = o.length; s > 0; s -= 1) {
                    if (u = o.slice(0, s).join("/"), f)for (l = f.length; l > 0; l -= 1)if (a = getOwn(b, f.slice(0, l).join("/")), a && (a = getOwn(a, u))) {
                        d = a, p = s;
                        break e
                    }
                    !m && v && getOwn(v, u) && (m = getOwn(v, u), g = s)
                }
                !d && m && (d = m, p = g), d && (o.splice(0, p, d), e = o.join("/"))
            }
            return r = getOwn(y.pkgs, e), r ? r : e
        }

        function i(e) {
            isBrowser && each(scripts(), function (t) {
                return t.getAttribute("data-requiremodule") === e && t.getAttribute("data-requirecontext") === I.contextName ? (t.parentNode.removeChild(t), !0) : void 0
            })
        }

        function r(e) {
            var t = getOwn(y.paths, e);
            return t && isArray(t) && t.length > 1 ? (t.shift(), I.require.undef(e), I.makeRequire(null, {skipMap: !0})([e]), !0) : void 0
        }

        function a(e) {
            var t, n = e ? e.indexOf("!") : -1;
            return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
        }

        function o(e, t, i, r) {
            var o, s, l, u, c = null, d = t ? t.name : null, p = e, m = !0, g = "";
            return e || (m = !1, e = "_@r" + (D += 1)), u = a(e), c = u[0], e = u[1], c && (c = n(c, d, r), s = getOwn(w, c)), e && (c ? g = s && s.normalize ? s.normalize(e, function (e) {
                return n(e, d, r)
            }) : -1 === e.indexOf("!") ? n(e, d, r) : e : (g = n(e, d, r), u = a(g), c = u[0], g = u[1], i = !0, o = I.nameToUrl(g))), l = !c || s || i ? "" : "_unnormalized" + (B += 1), {
                prefix: c,
                name: g,
                parentMap: t,
                unnormalized: !!l,
                url: o,
                originalName: p,
                isDefine: m,
                id: (c ? c + "!" + g : g) + l
            }
        }

        function s(e) {
            var t = e.id, n = getOwn(O, t);
            return n || (n = O[t] = new I.Module(e)), n
        }

        function l(e, t, n) {
            var i = e.id, r = getOwn(O, i);
            !hasProp(w, i) || r && !r.defineEmitComplete ? (r = s(e), r.error && "error" === t ? n(r.error) : r.on(t, n)) : "defined" === t && n(w[i])
        }

        function u(e, t) {
            var n = e.requireModules, i = !1;
            t ? t(e) : (each(n, function (t) {
                var n = getOwn(O, t);
                n && (n.error = e, n.events.error && (i = !0, n.emit("error", e)))
            }), i || req.onError(e))
        }

        function c() {
            globalDefQueue.length && (apsp.apply(R, [R.length, 0].concat(globalDefQueue)), globalDefQueue = [])
        }

        function d(e) {
            delete O[e], delete N[e]
        }

        function p(e, t, n) {
            var i = e.map.id;
            e.error ? e.emit("error", e.error) : (t[i] = !0, each(e.depMaps, function (i, r) {
                var a = i.id, o = getOwn(O, a);
                !o || e.depMatched[r] || n[a] || (getOwn(t, a) ? (e.defineDep(r, w[a]), e.check()) : p(o, t, n))
            }), n[i] = !0)
        }

        function m() {
            var e, t, n = 1e3 * y.waitSeconds, a = n && I.startTime + n < (new Date).getTime(), o = [], s = [], l = !1, c = !0;
            if (!v) {
                if (v = !0, eachProp(N, function (e) {
                        var n = e.map, u = n.id;
                        if (e.enabled && (n.isDefine || s.push(e), !e.error))if (!e.inited && a)r(u) ? (t = !0, l = !0) : (o.push(u), i(u)); else if (!e.inited && e.fetched && n.isDefine && (l = !0, !n.prefix))return c = !1
                    }), a && o.length)return e = makeError("timeout", "Load timeout for modules: " + o, null, o), e.contextName = I.contextName, u(e);
                c && each(s, function (e) {
                    p(e, {}, {})
                }), a && !t || !l || !isBrowser && !isWebWorker || L || (L = setTimeout(function () {
                    L = 0, m()
                }, 50)), v = !1
            }
        }

        function g(e) {
            hasProp(w, e[0]) || s(o(e[0], null, !0)).init(e[1], e[2])
        }

        function h(e, t, n, i) {
            e.detachEvent && !isOpera ? i && e.detachEvent(i, t) : e.removeEventListener(n, t, !1)
        }

        function f(e) {
            var t = e.currentTarget || e.srcElement;
            return h(t, I.onScriptLoad, "load", "onreadystatechange"), h(t, I.onScriptError, "error"), {
                node: t,
                id: t && t.getAttribute("data-requiremodule")
            }
        }

        function b() {
            var e;
            for (c(); R.length;) {
                if (e = R.shift(), null === e[0])return u(makeError("mismatch", "Mismatched anonymous define() module: " + e[e.length - 1]));
                g(e)
            }
        }

        var v, E, I, A, L, y = {
            waitSeconds: 7,
            baseUrl: "./",
            paths: {},
            bundles: {},
            pkgs: {},
            shim: {},
            config: {}
        }, O = {}, N = {}, C = {}, R = [], w = {}, S = {}, T = {}, D = 1, B = 1;
        return A = {
            require: function (e) {
                return e.require ? e.require : e.require = I.makeRequire(e.map)
            }, exports: function (e) {
                return e.usingExports = !0, e.map.isDefine ? e.exports ? w[e.map.id] = e.exports : e.exports = w[e.map.id] = {} : void 0
            }, module: function (e) {
                return e.module ? e.module : e.module = {
                    id: e.map.id, uri: e.map.url, config: function () {
                        return getOwn(y.config, e.map.id) || {}
                    }, exports: e.exports || (e.exports = {})
                }
            }
        }, E = function (e) {
            this.events = getOwn(C, e.id) || {}, this.map = e, this.shim = getOwn(y.shim, e.id), this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {}, this.depCount = 0
        }, E.prototype = {
            init: function (e, t, n, i) {
                i = i || {}, this.inited || (this.factory = t, n ? this.on("error", n) : this.events.error && (n = bind(this, function (e) {
                    this.emit("error", e)
                })), this.depMaps = e && e.slice(0), this.errback = n, this.inited = !0, this.ignore = i.ignore, i.enabled || this.enabled ? this.enable() : this.check())
            }, defineDep: function (e, t) {
                this.depMatched[e] || (this.depMatched[e] = !0, this.depCount -= 1, this.depExports[e] = t)
            }, fetch: function () {
                if (!this.fetched) {
                    this.fetched = !0, I.startTime = (new Date).getTime();
                    var e = this.map;
                    return this.shim ? void I.makeRequire(this.map, {enableBuildCallback: !0})(this.shim.deps || [], bind(this, function () {
                        return e.prefix ? this.callPlugin() : this.load()
                    })) : e.prefix ? this.callPlugin() : this.load()
                }
            }, load: function () {
                var e = this.map.url;
                S[e] || (S[e] = !0, I.load(this.map.id, e))
            }, check: function () {
                if (this.enabled && !this.enabling) {
                    var e, t, n = this.map.id, i = this.depExports, r = this.exports, a = this.factory;
                    if (this.inited) {
                        if (this.error)this.emit("error", this.error); else if (!this.defining) {
                            if (this.defining = !0, this.depCount < 1 && !this.defined) {
                                if (isFunction(a)) {
                                    if (this.events.error && this.map.isDefine || req.onError !== defaultOnError)try {
                                        r = I.execCb(n, a, i, r)
                                    } catch (o) {
                                        e = o
                                    } else r = I.execCb(n, a, i, r);
                                    if (this.map.isDefine && void 0 === r && (t = this.module, t ? r = t.exports : this.usingExports && (r = this.exports)), e)return e.requireMap = this.map, e.requireModules = this.map.isDefine ? [this.map.id] : null, e.requireType = this.map.isDefine ? "define" : "require", u(this.error = e)
                                } else r = a;
                                this.exports = r, this.map.isDefine && !this.ignore && (w[n] = r, req.onResourceLoad && req.onResourceLoad(I, this.map, this.depMaps)), d(n), this.defined = !0
                            }
                            this.defining = !1, this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
                        }
                    } else this.fetch()
                }
            }, callPlugin: function () {
                var e = this.map, t = e.id, i = o(e.prefix);
                this.depMaps.push(i), l(i, "defined", bind(this, function (i) {
                    var r, a, c, p = getOwn(T, this.map.id), m = this.map.name, g = this.map.parentMap ? this.map.parentMap.name : null, h = I.makeRequire(e.parentMap, {enableBuildCallback: !0});
                    return this.map.unnormalized ? (i.normalize && (m = i.normalize(m, function (e) {
                            return n(e, g, !0)
                        }) || ""), a = o(e.prefix + "!" + m, this.map.parentMap), l(a, "defined", bind(this, function (e) {
                        this.init([], function () {
                            return e
                        }, null, {enabled: !0, ignore: !0})
                    })), c = getOwn(O, a.id), void(c && (this.depMaps.push(a), this.events.error && c.on("error", bind(this, function (e) {
                        this.emit("error", e)
                    })), c.enable()))) : p ? (this.map.url = I.nameToUrl(p), void this.load()) : (r = bind(this, function (e) {
                        this.init([], function () {
                            return e
                        }, null, {enabled: !0})
                    }), r.error = bind(this, function (e) {
                        this.inited = !0, this.error = e, e.requireModules = [t], eachProp(O, function (e) {
                            0 === e.map.id.indexOf(t + "_unnormalized") && d(e.map.id)
                        }), u(e)
                    }), r.fromText = bind(this, function (n, i) {
                        var a = e.name, l = o(a), c = useInteractive;
                        i && (n = i), c && (useInteractive = !1), s(l), hasProp(y.config, t) && (y.config[a] = y.config[t]);
                        try {
                            req.exec(n)
                        } catch (d) {
                            return u(makeError("fromtexteval", "fromText eval for " + t + " failed: " + d, d, [t]))
                        }
                        c && (useInteractive = !0), this.depMaps.push(l), I.completeLoad(a), h([a], r)
                    }), void i.load(e.name, h, r, y))
                })), I.enable(i, this), this.pluginMaps[i.id] = i
            }, enable: function () {
                N[this.map.id] = this, this.enabled = !0, this.enabling = !0, each(this.depMaps, bind(this, function (e, t) {
                    var n, i, r;
                    if ("string" == typeof e) {
                        if (e = o(e, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[t] = e, r = getOwn(A, e.id))return void(this.depExports[t] = r(this));
                        this.depCount += 1, l(e, "defined", bind(this, function (e) {
                            this.defineDep(t, e), this.check()
                        })), this.errback ? l(e, "error", bind(this, this.errback)) : this.events.error && l(e, "error", bind(this, function (e) {
                            this.emit("error", e)
                        }))
                    }
                    n = e.id, i = O[n], hasProp(A, n) || !i || i.enabled || I.enable(e, this)
                })), eachProp(this.pluginMaps, bind(this, function (e) {
                    var t = getOwn(O, e.id);
                    t && !t.enabled && I.enable(e, this)
                })), this.enabling = !1, this.check()
            }, on: function (e, t) {
                var n = this.events[e];
                n || (n = this.events[e] = []), n.push(t)
            }, emit: function (e, t) {
                each(this.events[e], function (e) {
                    e(t)
                }), "error" === e && delete this.events[e]
            }
        }, I = {
            config: y,
            contextName: e,
            registry: O,
            defined: w,
            urlFetched: S,
            defQueue: R,
            Module: E,
            makeModuleMap: o,
            nextTick: req.nextTick,
            onError: u,
            configure: function (e) {
                e.baseUrl && "/" !== e.baseUrl.charAt(e.baseUrl.length - 1) && (e.baseUrl += "/");
                var t = y.shim, n = {paths: !0, bundles: !0, config: !0, map: !0};
                eachProp(e, function (e, t) {
                    n[t] ? (y[t] || (y[t] = {}), mixin(y[t], e, !0, !0)) : y[t] = e
                }), e.bundles && eachProp(e.bundles, function (e, t) {
                    each(e, function (e) {
                        e !== t && (T[e] = t)
                    })
                }), e.shim && (eachProp(e.shim, function (e, n) {
                    isArray(e) && (e = {deps: e}), !e.exports && !e.init || e.exportsFn || (e.exportsFn = I.makeShimExports(e)), t[n] = e
                }), y.shim = t), e.packages && each(e.packages, function (e) {
                    var t, n;
                    e = "string" == typeof e ? {name: e} : e, n = e.name, t = e.location, t && (y.paths[n] = e.location), y.pkgs[n] = e.name + "/" + (e.main || "main").replace(currDirRegExp, "").replace(jsSuffixRegExp, "")
                }), eachProp(O, function (e, t) {
                    e.inited || e.map.unnormalized || (e.map = o(t))
                }), (e.deps || e.callback) && I.require(e.deps || [], e.callback)
            },
            makeShimExports: function (e) {
                function t() {
                    var t;
                    return e.init && (t = e.init.apply(global, arguments)), t || e.exports && getGlobal(e.exports)
                }

                return t
            },
            makeRequire: function (t, r) {
                function a(n, i, l) {
                    var c, d, p;
                    return r.enableBuildCallback && i && isFunction(i) && (i.__requireJsBuild = !0), "string" == typeof n ? isFunction(i) ? u(makeError("requireargs", "Invalid require call"), l) : t && hasProp(A, n) ? A[n](O[t.id]) : req.get ? req.get(I, n, t, a) : (d = o(n, t, !1, !0), c = d.id, hasProp(w, c) ? w[c] : u(makeError("notloaded", 'Module name "' + c + '" has not been loaded yet for context: ' + e + (t ? "" : ". Use require([])")))) : (b(), I.nextTick(function () {
                        b(), p = s(o(null, t)), p.skipMap = r.skipMap, p.init(n, i, l, {enabled: !0}), m()
                    }), a)
                }

                return r = r || {}, mixin(a, {
                    isBrowser: isBrowser, toUrl: function (e) {
                        var i, r = e.lastIndexOf("."), a = e.split("/")[0], o = "." === a || ".." === a;
                        return -1 !== r && (!o || r > 1) && (i = e.substring(r, e.length), e = e.substring(0, r)), I.nameToUrl(n(e, t && t.id, !0), i, !0)
                    }, defined: function (e) {
                        return hasProp(w, o(e, t, !1, !0).id)
                    }, specified: function (e) {
                        return e = o(e, t, !1, !0).id, hasProp(w, e) || hasProp(O, e)
                    }
                }), t || (a.undef = function (e) {
                    c();
                    var n = o(e, t, !0), r = getOwn(O, e);
                    i(e), delete w[e], delete S[n.url], delete C[e], eachReverse(R, function (t, n) {
                        t[0] === e && R.splice(n, 1)
                    }), r && (r.events.defined && (C[e] = r.events), d(e))
                }), a
            },
            enable: function (e) {
                var t = getOwn(O, e.id);
                t && s(e).enable()
            },
            completeLoad: function (e) {
                var t, n, i, a = getOwn(y.shim, e) || {}, o = a.exports;
                for (c(); R.length;) {
                    if (n = R.shift(), null === n[0]) {
                        if (n[0] = e, t)break;
                        t = !0
                    } else n[0] === e && (t = !0);
                    g(n)
                }
                if (i = getOwn(O, e), !t && !hasProp(w, e) && i && !i.inited) {
                    if (!(!y.enforceDefine || o && getGlobal(o)))return r(e) ? void 0 : u(makeError("nodefine", "No define call for " + e, null, [e]));
                    g([e, a.deps || [], a.exportsFn])
                }
                m()
            },
            nameToUrl: function (e, t, n) {
                var i, r, a, o, s, l, u, c = getOwn(y.pkgs, e);
                if (c && (e = c), u = getOwn(T, e))return I.nameToUrl(u, t, n);
                if (req.jsExtRegExp.test(e))s = e + (t || ""); else {
                    for (i = y.paths, r = e.split("/"), a = r.length; a > 0; a -= 1)if (o = r.slice(0, a).join("/"), l = getOwn(i, o)) {
                        isArray(l) && (l = l[0]), r.splice(0, a, l);
                        break
                    }
                    s = r.join("/"), s += t || (/^data\:|\?/.test(s) || n ? "" : ".js"), s = ("/" === s.charAt(0) || s.match(/^[\w\+\.\-]+:/) ? "" : y.baseUrl) + s
                }
                return y.urlArgs ? s + ((-1 === s.indexOf("?") ? "?" : "&") + y.urlArgs) : s
            },
            load: function (e, t) {
                req.load(I, e, t)
            },
            execCb: function (e, t, n, i) {
                return t.apply(i, n)
            },
            onScriptLoad: function (e) {
                if ("load" === e.type || readyRegExp.test((e.currentTarget || e.srcElement).readyState)) {
                    interactiveScript = null;
                    var t = f(e);
                    I.completeLoad(t.id)
                }
            },
            onScriptError: function (e) {
                var t = f(e);
                return r(t.id) ? void 0 : u(makeError("scripterror", "Script error for: " + t.id, e, [t.id]))
            }
        }, I.require = I.makeRequire(), I
    }

    function getInteractiveScript() {
        return interactiveScript && "interactive" === interactiveScript.readyState ? interactiveScript : (eachReverse(scripts(), function (e) {
            return "interactive" === e.readyState ? interactiveScript = e : void 0
        }), interactiveScript)
    }

    var req, s, head, baseElement, dataMain, src, interactiveScript, currentlyAddingScript, mainScript, subPath, version = "2.1.16", commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm, cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g, jsSuffixRegExp = /\.js$/, currDirRegExp = /^\.\//, op = Object.prototype, ostring = op.toString, hasOwn = op.hasOwnProperty, ap = Array.prototype, apsp = ap.splice, isBrowser = !("undefined" == typeof window || "undefined" == typeof navigator || !window.document), isWebWorker = !isBrowser && "undefined" != typeof importScripts, readyRegExp = isBrowser && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/, defContextName = "_", isOpera = "undefined" != typeof opera && "[object Opera]" === opera.toString(), contexts = {}, cfg = {}, globalDefQueue = [], useInteractive = !1;
    if ("undefined" == typeof define) {
        if ("undefined" != typeof requirejs) {
            if (isFunction(requirejs))return;
            cfg = requirejs, requirejs = void 0
        }
        "undefined" == typeof require || isFunction(require) || (cfg = require, require = void 0), req = requirejs = function (e, t, n, i) {
            var r, a, o = defContextName;
            return isArray(e) || "string" == typeof e || (a = e, isArray(t) ? (e = t, t = n, n = i) : e = []), a && a.context && (o = a.context), r = getOwn(contexts, o), r || (r = contexts[o] = req.s.newContext(o)), a && r.configure(a), r.require(e, t, n)
        }, req.config = function (e) {
            return req(e)
        }, req.nextTick = "undefined" != typeof setTimeout ? function (e) {
            setTimeout(e, 4)
        } : function (e) {
            e()
        }, require || (require = req), req.version = version, req.jsExtRegExp = /^\/|:|\?|\.js$/, req.isBrowser = isBrowser, s = req.s = {
            contexts: contexts,
            newContext: newContext
        }, req({}), each(["toUrl", "undef", "defined", "specified"], function (e) {
            req[e] = function () {
                var t = contexts[defContextName];
                return t.require[e].apply(t, arguments)
            }
        }), isBrowser && (head = s.head = document.getElementsByTagName("head")[0], baseElement = document.getElementsByTagName("base")[0], baseElement && (head = s.head = baseElement.parentNode)), req.onError = defaultOnError, req.createNode = function (e) {
            var t = e.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
            return t.type = e.scriptType || "text/javascript", t.charset = "utf-8", t.async = !0, t
        }, req.load = function (e, t, n) {
            var i, r = e && e.config || {};
            if (isBrowser)return i = req.createNode(r, t, n), i.setAttribute("data-requirecontext", e.contextName), i.setAttribute("data-requiremodule", t), !i.attachEvent || i.attachEvent.toString && i.attachEvent.toString().indexOf("[native code") < 0 || isOpera ? (i.addEventListener("load", e.onScriptLoad, !1), i.addEventListener("error", e.onScriptError, !1)) : (useInteractive = !0, i.attachEvent("onreadystatechange", e.onScriptLoad)), i.src = n, currentlyAddingScript = i, baseElement ? head.insertBefore(i, baseElement) : head.appendChild(i), currentlyAddingScript = null, i;
            if (isWebWorker)try {
                importScripts(n), e.completeLoad(t)
            } catch (a) {
                e.onError(makeError("importscripts", "importScripts failed for " + t + " at " + n, a, [t]))
            }
        }, isBrowser && !cfg.skipDataMain && eachReverse(scripts(), function (e) {
            return head || (head = e.parentNode), dataMain = e.getAttribute("data-main"), dataMain ? (mainScript = dataMain, cfg.baseUrl || (src = mainScript.split("/"), mainScript = src.pop(), subPath = src.length ? src.join("/") + "/" : "./", cfg.baseUrl = subPath), mainScript = mainScript.replace(jsSuffixRegExp, ""), req.jsExtRegExp.test(mainScript) && (mainScript = dataMain), cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript], !0) : void 0
        }), define = function (e, t, n) {
            var i, r;
            "string" != typeof e && (n = t, t = e, e = null), isArray(t) || (n = t, t = null), !t && isFunction(n) && (t = [], n.length && (n.toString().replace(commentRegExp, "").replace(cjsRequireRegExp, function (e, n) {
                t.push(n)
            }), t = (1 === n.length ? ["require"] : ["require", "exports", "module"]).concat(t))), useInteractive && (i = currentlyAddingScript || getInteractiveScript(), i && (e || (e = i.getAttribute("data-requiremodule")), r = contexts[i.getAttribute("data-requirecontext")])), (r ? r.defQueue : globalDefQueue).push([e, t, n])
        }, define.amd = {jQuery: !0}, req.exec = function (text) {
            return eval(text)
        }, req(cfg)
    }
}(this), define("jquery", [], function () {
    return window.$
}), require.config({
    waitSeconds: 7,
    baseUrl: "https://as.ftcdn.net/v1/js"
}), require.config({
    paths: {
        text: "vendor/requirejs/text",
        Handlebars: "vendor/handlebars/handlebars-v3.0.0",
        hbs: "vendor/handlebars/hbs",
        i18n: "vendor/jed/jed",
        "i18n-config": "i18n-config",
        css: "vendor/require-css/css"
    }, hbars: {extension: ".hbs"}
}), $(document).ready(function () {
    $("#search-results").adobestock_mosaic(), $("input.numeric").keyup(function (e) {
        /\D/g.test(e.target.value) && (e.target.value = e.target.value.replace(/\D/g, ""))
    })
}), window.i18ndata = {
    en_US: {
        adobestock: {
            "": {lang: "us", "plural-forms": "nplurals=2; plural=n != 1;"},
            "API::LIBRARIES::Payment error": ["Payment error"],
            "API::LIBRARIES::We are experiencing technical difficulties. Please try again later.": ["We are experiencing technical difficulties. Please try again later."],
            "CHECKOUT::You now have access to a growing collection of millions of images, conveniently integrated into Adobe Illustrator CC, Adobe InDesign CC, Adobe Photoshop CC, Adobe After Effects CC and Adobe Premiere Pro CC.": ["You now have access to a growing collection of millions of images, conveniently integrated into Adobe Illustrator CC, Adobe InDesign CC, Adobe Photoshop CC, Adobe After Effects CC and Adobe Premiere Pro CC."],
            "CHECKOUT::You're Ready to Go!": ["You're Ready to Go!"],
            "CONTENT::ERROR::Licenses for this image are no longer available.": ["Licenses for this image are no longer available."],
            "DOWNLOAD::ERROR::An error occurred with your download.": ["An error occurred with your download."],
            "DOWNLOAD::ERROR::If this problem persists, contact %sCustomer Service%s.": ["If this problem persists, contact %sCustomer Service%s."],
            "DOWNLOAD::ERROR::There was a problem downloading your image. Please try again.": ["There was a problem downloading your image. Please try again."],
            "FILE::ACTION::Are you sure you want to license this image again?": ["Are you sure you want to license this image again?"],
            "FILE::ACTION::Buy Additional License": ["Buy Additional License"],
            "FILE::ACTION::Buy Image": ["Buy Image"],
            "FILE::ACTION::Buy license & save to": ["Buy license & save to"],
            "FILE::ACTION::Cancel": ["Cancel"],
            "FILE::ACTION::Downloading": ["Downloading"],
            "FILE::ACTION::Find Similar": ["Find Similar"],
            "FILE::ACTION::License & save to": ["License & save to"],
            "FILE::ACTION::More From This Model": ["More From This Model"],
            "FILE::ACTION::More From This Series": ["More From This Series"],
            "FILE::ACTION::Pay %s for this image?": ["Pay %s for this image?"],
            "FILE::ACTION::Please wait...": ["Please wait..."],
            "FILE::ACTION::Save Image to": ["Save Image to"],
            "FILE::ACTION::Save Preview Image": ["Save Preview Image"],
            "FILE::ACTION::Save Preview to": ["Save Preview to"],
            "FILE::ACTION::Save to Desktop": ["Save to Desktop"],
            "FILE::ACTION::Save to a Creative Cloud Library": ["Save to a Creative Cloud Library"],
            "FILE::ACTION::Saved!": ["Saved!"],
            "FILE::ACTION::Saving...": ["Saving..."],
            "FILE::ACTION::See More": ["See More"],
            "FILE::ACTION::Similar Images": ["Similar Images"],
            "FILE::ACTION::Yes": ["Yes"],
            "FILE::ACTION::Your download will begin shortly": ["Your download will begin shortly"],
            "FILE::ACTION::Your image was saved to %s": ["Your image was saved to %s"],
            "FILE::Author": ["Author"],
            "FILE::Category": ["Category"],
            "FILE::File Number": ["File Number"],
            "FILE::Format": ["Format"],
            "FILE::KEYWORDS::%s more": ["%s more", "%s more"],
            "FILE::Keywords": ["Keywords"],
            "FILE::Size": ["Size"],
            "FILE::px": ["px"],
            "GENERIC::Something Went Wrong": ["Something went wrong"],
            "HEADER::MEMBER::Image": ["Image", "Images"],
            "IMAGE::DETAIL::MODAL::BUTTON::OK": ["OK"],
            "IMAGE::DETAIL::MODAL::DESCRIPTION::Images can be saved to Creative Cloud Libraries, or to your desktop. You can change your saving location here.": ["Images can be saved to Creative Cloud Libraries, or to your desktop. You can change your saving location here."],
            "IMAGE::DETAIL::MODAL::DESCRIPTION::Images saved to libraries will appear in the Libraries panel within any libraries-enabled Adobe application.": ["Images saved to libraries will appear in the Libraries panel within any libraries-enabled Adobe application."],
            "IMAGE::DETAIL::MODAL::TITLE::Saving Images": ["Saving Images"],
            "LIB::MENU::Add new library": ["Add new library"],
            "LIB::MENU::Buy License & Save to": ["Buy License & Save to"],
            "LIB::MENU::Create a free account to save images.": ["Create a free account to save images."],
            "LIB::MENU::Create an Account": ["Create an Account"],
            "LIB::MENU::Creating Library...": ["Creating Library..."],
            "LIB::MENU::Delete This Image": ["Delete This Image"],
            "LIB::MENU::Find Similar Images": ["Find Similar Images"],
            "LIB::MENU::License & Save to": ["License & Save to"],
            "LIB::MENU::Log In": ["Log In"],
            "LIB::MENU::Save Preview to": ["Save Preview to"],
            "LIB::MENU::Save to": ["Save to"],
            "LIB::MENU::Save to Desktop": ["Save to Desktop"],
            "LIB::MENU::Save to a Creative Cloud Library": ["Save to a Creative Cloud Library"],
            "LIB::MENU::Saved!": ["Saved!"],
            "LIB::MENU::Saving...": ["Saving..."],
            "LIB::MENU::Your image was saved to": ["Your image was saved to"],
            "LIB::OVERAGE::Cancel": ["Cancel"],
            "LIB::OVERAGE::NO_ABBREVIATION::Exclusive of VAT": ["Exclusive of VAT"],
            "LIB::OVERAGE::NO_ABBREVIATION::No GST payable": ["No GST payable"],
            "LIB::OVERAGE::NO_ABBREVIATION::Not taxable": ["Not taxable"],
            "LIB::OVERAGE::Yes": ["Yes"],
            "LIBRARIES::Could not add to library.": ["Could not add to library."],
            "LIBRARIES::Could not delete library item.": ["Could not delete library item."],
            "LIBRARIES::Could not delete library.": ["Could not delete library."],
            "LIBRARIES::Could not load libraries.": ["Could not load libraries."],
            "LIBRARIES::Could not rename library.": ["Could not rename library."],
            "LIBRARIES::Could not retrieve library items.": ["Could not retrieve library items."],
            "LIBRARIES::Failed to create library.": ["Failed to create library."],
            "LIBRARIES::RENAME::Cancel": ["Cancel"],
            "LIBRARIES::RENAME::Ok": ["Ok"],
            "LIBRARIES::STATE::Licensed": ["Licensed"],
            "LIBRARY::%d item": ["%d item", "%d items"],
            "LIBRARY::%s item": ["%s item", "%s items"],
            "LIBRARY::%s total": ["%s total", "%s total"],
            "LIBRARY::ACTION::Delete Library": ["Delete Library"],
            "LIBRARY::ACTION::Libraries": ["Libraries"],
            "LIBRARY::ACTION::Rename Library": ["Rename Library"],
            "LIBRARY::MYLIBRARY::My Library": ["My Library"],
            "MEMBER::DOWNLOAD::Buy": ["Buy"],
            "MEMBER::DOWNLOAD::One-Time Download": ["One-Time Download"],
            "MEMBER::DOWNLOAD::One-time Payment": ["One-time Payment"],
            "MEMBER::DOWNLOAD::You're out of licenses. What would you like to do?": ["You're out of licenses. What would you like to do?"],
            "MEMBER::DOWNLOAD::Your plan entitles you to %s image a month": ["Your plan entitles you to %s image a month", "Your plan entitles you to %s images a month"],
            "MEMBER::ERROR::Failed to purchase an additional license.": ["Failed to purchase an additional license."],
            "MEMBER::License Again": ["License Again"],
            'MODAL::Are you sure you want to delete "%s"?': ['Are you sure you want to delete "%s"?'],
            "MODAL::Cancel": ["Cancel"],
            "MODAL::Delete": ["Delete"],
            'MODAL::Delete "%s"': ['Delete "%s"'],
            "MODAL::Ok": ["Ok"],
            "MODAL::This library will no longer be available to anyone who shares it.": ["This library will no longer be available to anyone who shares it."],
            "PHOTO::DOWNLOAD::Desktop": ["Desktop"],
            "PHOTO::DOWNLOAD::New Library": ["New Library"],
            "PLANS::Exclusive of VAT": ["Exclusive of VAT"],
            "PLANS::No GST payable": ["No GST payable"],
            "PLANS::Not taxable": ["Not taxable"],
            "PLANS::Okay": ["Okay"],
            "PLANS::There was an error upgrading your plan.": ["There was an error upgrading your plan."],
            'PLANS::UPGRADE::By clicking the "Continue" button, you agree to the billing terms above.': ['By clicking the "Continue" button, you agree to the billing terms above.'],
            "PLANS::UPGRADE::Continue": ["Continue"],
            "PLANS::UPGRADE::Upgrade plan": ["Upgrade plan"],
            "PLANS::UPGRADE::You've selected %s": ["You've selected %s"],
            "PLANS::Upgrade": ["Upgrade"],
            "PLANS::Upgrade error": ["Upgrade error"],
            "PURCHASE::ERROR::Sorry! You have no more images available in your subscription. More will become available next month.": ["Sorry! You have no more images available in your subscription. More will become available next month."],
            "PURCHASE::ERROR::You have %s license. Please contact your administrator to add licenses to your account.": ["You have %s license. Please contact your administrator to add licenses to your account.", "You have %s licenses. Please contact your administrator to add licenses to your account."]
        }
    },
    fr_FR: {
        adobestock: {
            "": {lang: "us", "plural-forms": "nplurals=2; plural=n != 1;"},
            "API::LIBRARIES::Payment error": ["Erreur de paiement"],
            "API::LIBRARIES::We are experiencing technical difficulties. Please try again later.": ["Nous rencontrons quelques problÃ¨mes techniques. Veuillez rÃ©essayer ultÃ©rieurement."],
            "CHECKOUT::You now have access to a growing collection of millions of images, conveniently integrated into Adobe Illustrator CC, Adobe InDesign CC, Adobe Photoshop CC, Adobe After Effects CC and Adobe Premiere Pro CC.": ["Vous avez maintenant accÃ¨s Ã  une collection de plusieurs millions dâ€™images qui ne cesse de sâ€™Ã©toffer et est accessible directement depuis Adobe IllustratorÂ CC, Adobe InDesignÂ CC, Adobe PhotoshopÂ CC, Adobe After EffectsÂ CC et Adobe Premiere ProÂ CC."],
            "CHECKOUT::You're Ready to Go!": ["Venez vite dÃ©couvrir tout Ã§aÂ !"],
            "CONTENT::ERROR::Licenses for this image are no longer available.": ["Les licences associÃ©es Ã  cette image ne sont plus disponibles."],
            "DOWNLOAD::ERROR::An error occurred with your download.": ["Une erreur est survenue avec votre tÃ©lÃ©chargement."],
            "DOWNLOAD::ERROR::If this problem persists, contact %sCustomer Service%s.": ["Si le problÃ¨me persiste, contactez le %sservice clientÃ¨le%s."],
            "DOWNLOAD::ERROR::There was a problem downloading your image. Please try again.": ["Une erreur sâ€™est produite pendant le tÃ©lÃ©chargement de votre image. Veuillez rÃ©essayer."],
            "FILE::ACTION::Are you sure you want to license this image again?": ["Voulez-vous vraiment acheter Ã  nouveau les droits de cette imageÂ ?"],
            "FILE::ACTION::Buy Additional License": ["Racheter une licence"],
            "FILE::ACTION::Buy Image": ["Acheter lâ€™image"],
            "FILE::ACTION::Buy license & save to": ["Acheter une licence et enregistrer dans"],
            "FILE::ACTION::Cancel": ["Annuler"],
            "FILE::ACTION::Downloading": ["TÃ©lÃ©chargement en cours"],
            "FILE::ACTION::Find Similar": ["Rechercher des fichiers similaires"],
            "FILE::ACTION::License & save to": ["Acheter et enregistrer dans "],
            "FILE::ACTION::More From This Model": ["Autres rÃ©sultats pour ce modÃ¨le"],
            "FILE::ACTION::More From This Series": ["Autres rÃ©sultats pour cette sÃ©rie"],
            "FILE::ACTION::Pay %s for this image?": ["Payer %s pour cette imageÂ ?"],
            "FILE::ACTION::Please wait...": ["Veuillez patienter..."],
            "FILE::ACTION::Save Image to": ["Enregistrer lâ€™image dans"],
            "FILE::ACTION::Save Preview Image": ["Enregistrer lâ€™aperÃ§u"],
            "FILE::ACTION::Save Preview to": ["Enregistrer lâ€™aperÃ§u dans"],
            "FILE::ACTION::Save to Desktop": ["Enregistrer sur l'ordinateur"],
            "FILE::ACTION::Save to a Creative Cloud Library": ["Enregistrer dans une bibliothÃ¨que Creative Cloud"],
            "FILE::ACTION::Saved!": ["EnregistrÃ©Â !"],
            "FILE::ACTION::Saving...": ["Enregistrementâ€¦"],
            "FILE::ACTION::See More": ["Plus"],
            "FILE::ACTION::Similar Images": ["Images similaires"],
            "FILE::ACTION::Yes": ["Oui"],
            "FILE::ACTION::Your download will begin shortly": ["Votre tÃ©lÃ©chargement dÃ©butera sous peu"],
            "FILE::ACTION::Your image was saved to %s": ["Votre image a Ã©tÃ© enregistrÃ©e dans %s"],
            "FILE::Author": ["Auteur"],
            "FILE::Category": ["CatÃ©gorie"],
            "FILE::File Number": ["NumÃ©ro de fichier"],
            "FILE::Format": ["Format"],
            "FILE::KEYWORDS::%s more": ["%s de plus", "%s de plus"],
            "FILE::Keywords": ["Mots-clÃ©s"],
            "FILE::Size": ["Taille"],
            "FILE::px": ["px"],
            "GENERIC::Something Went Wrong": ["Une erreur sâ€™est produite"],
            "HEADER::MEMBER::Image": ["Image", "Images"],
            "IMAGE::DETAIL::MODAL::BUTTON::OK": ["OK"],
            "IMAGE::DETAIL::MODAL::DESCRIPTION::Images can be saved to Creative Cloud Libraries, or to your desktop. You can change your saving location here.": ["Les images peuvent Ãªtre enregistrÃ©es dans le service BibliothÃ¨ques Creative Cloud ou sur votre ordinateur. Vous pouvez modifier lâ€™emplacement dâ€™enregistrement ici."],
            "IMAGE::DETAIL::MODAL::DESCRIPTION::Images saved to libraries will appear in the Libraries panel within any libraries-enabled Adobe application.": ["Les images enregistrÃ©es dans des bibliothÃ¨ques figureront dans le panneau BibliothÃ¨que de toute application Adobe compatible."],
            "IMAGE::DETAIL::MODAL::TITLE::Saving Images": ["Enregistrement des imagesâ€¦"],
            "LIB::MENU::Add new library": ["Ajouter une bibliothÃ¨que"],
            "LIB::MENU::Buy License & Save to": ["Acheter une licence et enregistrer dans"],
            "LIB::MENU::Create a free account to save images.": ["CrÃ©ez gratuitement un compte pour enregistrer des images."],
            "LIB::MENU::Create an Account": ["CrÃ©er un compte"],
            "LIB::MENU::Creating Library...": ["CrÃ©ation de la bibliothÃ¨que..."],
            "LIB::MENU::Delete This Image": ["Supprimer cette image"],
            "LIB::MENU::Find Similar Images": ["Rechercher des images similaires"],
            "LIB::MENU::License & Save to": ["Acheter et enregistrer dans "],
            "LIB::MENU::Log In": ["Connexion"],
            "LIB::MENU::Save Preview to": ["Enregistrer lâ€™aperÃ§u dans"],
            "LIB::MENU::Save to": ["Enregistrer dans"],
            "LIB::MENU::Save to Desktop": ["Enregistrer sur l'ordinateur"],
            "LIB::MENU::Save to a Creative Cloud Library": ["Enregistrer dans une bibliothÃ¨que Creative Cloud"],
            "LIB::MENU::Saved!": ["EnregistrÃ©Â !"],
            "LIB::MENU::Saving...": ["Enregistrementâ€¦"],
            "LIB::MENU::Your image was saved to": ["Votre image a Ã©tÃ© enregistrÃ©e dans"],
            "LIB::OVERAGE::Cancel": ["Annuler"],
            "LIB::OVERAGE::NO_ABBREVIATION::Exclusive of VAT": ["HT"],
            "LIB::OVERAGE::NO_ABBREVIATION::No GST payable": ["TPS non applicable"],
            "LIB::OVERAGE::NO_ABBREVIATION::Not taxable": ["Aucune taxe applicable"],
            "LIB::OVERAGE::Yes": ["Oui"],
            "LIBRARIES::Could not add to library.": ["Impossible dâ€™ajouter lâ€™image Ã  la bibliothÃ¨que."],
            "LIBRARIES::Could not delete library item.": ["Impossible de supprimer lâ€™Ã©lÃ©ment de bibliothÃ¨que."],
            "LIBRARIES::Could not delete library.": ["Impossible de supprimer la bibliothÃ¨que."],
            "LIBRARIES::Could not load libraries.": ["Impossible de charger les bibliothÃ¨ques."],
            "LIBRARIES::Could not rename library.": ["Impossible de renommer la bibliothÃ¨que."],
            "LIBRARIES::Could not retrieve library items.": ["Impossible de rÃ©cupÃ©rer les Ã©lÃ©ments de la bibliothÃ¨que."],
            "LIBRARIES::Failed to create library.": ["Echec de la crÃ©ation de la bibliothÃ¨que."],
            "LIBRARIES::RENAME::Cancel": ["Annuler"],
            "LIBRARIES::RENAME::Ok": ["OK"],
            "LIBRARIES::STATE::Licensed": ["AchetÃ©"],
            "LIBRARY::%d item": ["%dÂ Ã©lÃ©ment", "%dÂ Ã©lÃ©ments"],
            "LIBRARY::%s item": ["%sÂ Ã©lÃ©ment", "%sÂ Ã©lÃ©ments"],
            "LIBRARY::%s total": ["%s au total", "%s au total"],
            "LIBRARY::ACTION::Delete Library": ["Supprimer la bibliothÃ¨que"],
            "LIBRARY::ACTION::Libraries": ["BibliothÃ¨ques"],
            "LIBRARY::ACTION::Rename Library": ["Renommer la bibliothÃ¨que"],
            "LIBRARY::MYLIBRARY::My Library": ["Ma bibliothÃ¨que"],
            "MEMBER::DOWNLOAD::Buy": ["Acheter"],
            "MEMBER::DOWNLOAD::One-Time Download": ["TÃ©lÃ©chargement ponctuel"],
            "MEMBER::DOWNLOAD::One-time Payment": ["Paiement ponctuel"],
            "MEMBER::DOWNLOAD::You're out of licenses. What would you like to do?": ["Vous nâ€™avez plus de licences. Que souhaitez-vous faireÂ ?"],
            "MEMBER::DOWNLOAD::Your plan entitles you to %s image a month": ["Votre formule vous donne droit Ã  %sÂ image par mois", "Votre formule vous donne droit Ã  %sÂ images par mois"],
            "MEMBER::ERROR::Failed to purchase an additional license.": ["Impossible dâ€™acheter une licence supplÃ©mentaire."],
            "MEMBER::License Again": ["Acheter Ã  nouveau la licence"],
            'MODAL::Are you sure you want to delete "%s"?': ['Voulez-vous vraiment supprimer "%s"Â ?'],
            "MODAL::Cancel": ["Annuler"],
            "MODAL::Delete": ["Supprimer"],
            'MODAL::Delete "%s"': ['Supprimer "%s"'],
            "MODAL::Ok": ["OK"],
            "MODAL::This library will no longer be available to anyone who shares it.": ["Cette bibliothÃ¨que ne sera plus disponible pour les personnes qui la partagent."],
            "PHOTO::DOWNLOAD::Desktop": ["Bureau"],
            "PHOTO::DOWNLOAD::New Library": ["Nouvelle bibliothÃ¨que"],
            "PLANS::Exclusive of VAT": ["HT"],
            "PLANS::No GST payable": ["TPS non applicable"],
            "PLANS::Not taxable": ["Aucune taxe applicable"],
            "PLANS::Okay": ["OK"],
            "PLANS::There was an error upgrading your plan.": ["Une erreur sâ€™est produite lors de la mise Ã  niveau de votre formule."],
            'PLANS::UPGRADE::By clicking the "Continue" button, you agree to the billing terms above.': ["En cliquant sur le bouton Continuer, vous acceptez les conditions de facturation ci-dessus."],
            "PLANS::UPGRADE::Continue": ["Continuer"],
            "PLANS::UPGRADE::Upgrade plan": ["Changer de formule"],
            "PLANS::UPGRADE::You've selected %s": ["Vous avez sÃ©lectionnÃ© %s"],
            "PLANS::Upgrade": ["Choisir une formule supÃ©rieure"],
            "PLANS::Upgrade error": ["Erreur lors de la mise Ã  niveau"],
            "PURCHASE::ERROR::Sorry! You have no more images available in your subscription. More will become available next month.": ["DÃ©solÃ©, vous nâ€™avez plus dâ€™images disponibles dans le cadre de votre abonnement. Revenez le mois prochain."],
            "PURCHASE::ERROR::You have %s license. Please contact your administrator to add licenses to your account.": ["Vous disposez de %sÂ licence. Contactez votre administrateur pour ajouter des licences Ã  votre compte.", "Vous disposez de %sÂ licences. Contactez votre administrateur pour ajouter des licences Ã  votre compte."]
        }
    },
    pt_PT: {
        adobestock: {
            "": {lang: "us", "plural-forms": "nplurals=2; plural=n != 1;"},
            "API::LIBRARIES::Payment error": ["Erro de pagamento"],
            "API::LIBRARIES::We are experiencing technical difficulties. Please try again later.": ["Estamos com dificuldades tÃ©cnicas. Tente novamente mais tarde."],
            "CHECKOUT::You now have access to a growing collection of millions of images, conveniently integrated into Adobe Illustrator CC, Adobe InDesign CC, Adobe Photoshop CC, Adobe After Effects CC and Adobe Premiere Pro CC.": ["Tem agora acesso a uma coleÃ§Ã£o crescente de milhÃµes de imagens, integrada de forma prÃ¡tica no Adobe Illustrator CC, no Adobe InDesign CC, no Adobe Photoshop CC, no Adobe After Effects CC e no Adobe Premiere Pro CC."],
            "CHECKOUT::You're Ready to Go!": ["EstÃ¡ preparado para comeÃ§ar!"],
            "CONTENT::ERROR::Licenses for this image are no longer available.": ["As licenÃ§as para esta imagem jÃ¡ nÃ£o estÃ£o disponÃ­veis."],
            "DOWNLOAD::ERROR::An error occurred with your download.": ["Ocorreu um erro durante a transferÃªncia."],
            "DOWNLOAD::ERROR::If this problem persists, contact %sCustomer Service%s.": ["Se este problema persistir, contacte o %sSuporte ao Cliente%s."],
            "DOWNLOAD::ERROR::There was a problem downloading your image. Please try again.": ["Ocorreu um erro ao transferir a sua imagem. Tente novamente."],
            "FILE::ACTION::Are you sure you want to license this image again?": ["Tem a certeza de que pretende licenciar novamente esta imagem?"],
            "FILE::ACTION::Buy Additional License": ["Comprar licenÃ§a adicional"],
            "FILE::ACTION::Buy Image": ["Comprar imagem"],
            "FILE::ACTION::Buy license & save to": ["Comprar licenÃ§a e guardar em"],
            "FILE::ACTION::Cancel": ["Cancelar"],
            "FILE::ACTION::Downloading": ["Baixando..."],
            "FILE::ACTION::Find Similar": ["Encontrar Semelhantes"],
            "FILE::ACTION::License & save to": ["Licenciar e guardar em"],
            "FILE::ACTION::More From This Model": ["Mais deste modelo"],
            "FILE::ACTION::More From This Series": ["Mais desta sÃ©rie"],
            "FILE::ACTION::Pay %s for this image?": ["Pagar %s por esta imagem?"],
            "FILE::ACTION::Please wait...": ["Aguarde..."],
            "FILE::ACTION::Save Image to": ["Salvar imagem em"],
            "FILE::ACTION::Save Preview Image": ["Adicionar Ã  Biblioteca"],
            "FILE::ACTION::Save Preview to": ["Guardar PrevisualizaÃ§Ã£o em"],
            "FILE::ACTION::Save to Desktop": ["Guardar no Ambiente de trabalho"],
            "FILE::ACTION::Save to a Creative Cloud Library": ["Guardar numa Biblioteca do Creative Cloud"],
            "FILE::ACTION::Saved!": ["Salvo."],
            "FILE::ACTION::Saving...": ["Salvando..."],
            "FILE::ACTION::See More": ["Veja mais"],
            "FILE::ACTION::Similar Images": ["Imagens semelhantes"],
            "FILE::ACTION::Yes": ["Sim"],
            "FILE::ACTION::Your download will begin shortly": ["Seu download estÃ¡ comeÃ§ando"],
            "FILE::ACTION::Your image was saved to %s": ["Sua imagem foi salva em %s"],
            "FILE::Author": ["Autor"],
            "FILE::Category": ["Categoria"],
            "FILE::File Number": ["NÃºmero do ficheiro"],
            "FILE::Format": ["Formato"],
            "FILE::KEYWORDS::%s more": ["Mais %s", "Mais %s"],
            "FILE::Keywords": ["Palavras-chave"],
            "FILE::Size": ["Tamanho"],
            "FILE::px": ["px"],
            "GENERIC::Something Went Wrong": ["Ocorreu um problema"],
            "HEADER::MEMBER::Image": ["Imagem", "Imagens"],
            "IMAGE::DETAIL::MODAL::BUTTON::OK": ["OK"],
            "IMAGE::DETAIL::MODAL::DESCRIPTION::Images can be saved to Creative Cloud Libraries, or to your desktop. You can change your saving location here.": ["As imagens podem ser guardadas nas Bibliotecas do Creative Cloud ou no ambiente de trabalho. A localizaÃ§Ã£o para guardar pode ser alterada aqui."],
            "IMAGE::DETAIL::MODAL::DESCRIPTION::Images saved to libraries will appear in the Libraries panel within any libraries-enabled Adobe application.": ["As imagens guardadas em bibliotecas serÃ£o apresentadas no painel Bibliotecas em qualquer aplicaÃ§Ã£o da Adobe compatÃ­vel com bibliotecas."],
            "IMAGE::DETAIL::MODAL::TITLE::Saving Images": ["A guardar imagens"],
            "LIB::MENU::Add new library": ["Adicionar nova biblioteca"],
            "LIB::MENU::Buy License & Save to": ["Comprar licenÃ§a e guardar em"],
            "LIB::MENU::Create a free account to save images.": ["Crie uma conta gratuita para guardar as imagens."],
            "LIB::MENU::Create an Account": ["Criar uma conta"],
            "LIB::MENU::Creating Library...": ["A criar a biblioteca..."],
            "LIB::MENU::Delete This Image": ["Excluir esta imagem"],
            "LIB::MENU::Find Similar Images": ["Encontrar imagens semelhantes"],
            "LIB::MENU::License & Save to": ["Licenciar e Guardar em"],
            "LIB::MENU::Log In": ["Iniciar sessÃ£o"],
            "LIB::MENU::Save Preview to": ["Guardar PrevisualizaÃ§Ã£o em"],
            "LIB::MENU::Save to": ["Guardar em"],
            "LIB::MENU::Save to Desktop": ["Guardar no Ambiente de trabalho"],
            "LIB::MENU::Save to a Creative Cloud Library": ["Guardar numa Biblioteca do Creative Cloud"],
            "LIB::MENU::Saved!": ["Salvo."],
            "LIB::MENU::Saving...": ["Salvando..."],
            "LIB::MENU::Your image was saved to": ["A sua imagem foi guardada em"],
            "LIB::OVERAGE::Cancel": ["Cancelar"],
            "LIB::OVERAGE::NO_ABBREVIATION::Exclusive of VAT": ["IVA nÃ£o incluÃ­do"],
            "LIB::OVERAGE::NO_ABBREVIATION::No GST payable": ["Sem pagamento de imposto sobre bens e serviÃ§os"],
            "LIB::OVERAGE::NO_ABBREVIATION::Not taxable": ["NÃ£o tributÃ¡vel"],
            "LIB::OVERAGE::Yes": ["Sim"],
            "LIBRARIES::Could not add to library.": ["NÃ£o foi possÃ­vel adicionar Ã  biblioteca."],
            "LIBRARIES::Could not delete library item.": ["NÃ£o foi possÃ­vel eliminar o item da biblioteca."],
            "LIBRARIES::Could not delete library.": ["NÃ£o foi possÃ­vel eliminar a biblioteca."],
            "LIBRARIES::Could not load libraries.": ["NÃ£o foi possÃ­vel carregar as bibliotecas."],
            "LIBRARIES::Could not rename library.": ["NÃ£o foi possÃ­vel mudar o nome da biblioteca."],
            "LIBRARIES::Could not retrieve library items.": ["NÃ£o foi possÃ­vel obter os itens da biblioteca."],
            "LIBRARIES::Failed to create library.": ["Falha ao criar biblioteca."],
            "LIBRARIES::RENAME::Cancel": ["Cancelar"],
            "LIBRARIES::RENAME::Ok": ["Ok"],
            "LIBRARIES::STATE::Licensed": ["Licenciadas"],
            "LIBRARY::%d item": ["%d item", "%d itens"],
            "LIBRARY::%s item": ["%s item", "%s itens"],
            "LIBRARY::%s total": ["%s no total", "%s no total"],
            "LIBRARY::ACTION::Delete Library": ["Eliminar Biblioteca"],
            "LIBRARY::ACTION::Libraries": ["Bibliotecas"],
            "LIBRARY::ACTION::Rename Library": ["Mudar o nome da biblioteca"],
            "LIBRARY::MYLIBRARY::My Library": ["A minha Biblioteca"],
            "MEMBER::DOWNLOAD::Buy": ["Comprar"],
            "MEMBER::DOWNLOAD::One-Time Download": ["TransferÃªncia Ãºnica"],
            "MEMBER::DOWNLOAD::One-time Payment": ["Pagamento Ãºnico"],
            "MEMBER::DOWNLOAD::You're out of licenses. What would you like to do?": ["Esgotou as licenÃ§as. O que pretende fazer?"],
            "MEMBER::DOWNLOAD::Your plan entitles you to %s image a month": ["O seu plano dÃ¡-lhe o direito a %s imagem por mÃªs", "O seu plano dÃ¡-lhe o direito a %s imagens por mÃªs"],
            "MEMBER::ERROR::Failed to purchase an additional license.": ["Falha ao comprar uma licenÃ§a adicional."],
            "MEMBER::License Again": ["Licenciar novamente"],
            'MODAL::Are you sure you want to delete "%s"?': ['Tem a certeza de que pretende eliminar "%s"?'],
            "MODAL::Cancel": ["Cancelar"],
            "MODAL::Delete": ["Eliminar"],
            'MODAL::Delete "%s"': ['Eliminar "%s"'],
            "MODAL::Ok": ["Ok"],
            "MODAL::This library will no longer be available to anyone who shares it.": ["Esta biblioteca deixarÃ¡ de estar disponÃ­vel para todos aqueles que a partilham."],
            "PHOTO::DOWNLOAD::Desktop": ["Ambiente de Trabalho"],
            "PHOTO::DOWNLOAD::New Library": ["Nova Biblioteca"],
            "PLANS::Exclusive of VAT": ["IVA nÃ£o incluÃ­do"],
            "PLANS::No GST payable": ["Sem pagamento de imposto sobre bens e serviÃ§os"],
            "PLANS::Not taxable": ["NÃ£o tributÃ¡vel"],
            "PLANS::Okay": ["OK"],
            "PLANS::There was an error upgrading your plan.": ["Ocorreu um erro ao atualizar o seu plano."],
            'PLANS::UPGRADE::By clicking the "Continue" button, you agree to the billing terms above.': ['Ao clicar no botÃ£o "Continuar", estÃ¡ a aceitar as condiÃ§Ãµes de faturaÃ§Ã£o anteriores.'],
            "PLANS::UPGRADE::Continue": ["Continuar"],
            "PLANS::UPGRADE::Upgrade plan": ["Atualizar plano"],
            "PLANS::UPGRADE::You've selected %s": ["Selecionou %s"],
            "PLANS::Upgrade": ["Atualizar"],
            "PLANS::Upgrade error": ["Erro de atualizaÃ§Ã£o"],
            "PURCHASE::ERROR::Sorry! You have no more images available in your subscription. More will become available next month.": ["Infelizmente, nÃ£o estÃ£o disponÃ­veis mais imagens na sua subscriÃ§Ã£o. EstarÃ£o disponÃ­veis mais imagens no prÃ³ximo mÃªs."],
            "PURCHASE::ERROR::You have %s license. Please contact your administrator to add licenses to your account.": ["Tem %s licenÃ§a. Contacte o seu administrador para adicionar licenÃ§as Ã  sua conta.", "Tem %s licenÃ§as. Contacte o seu administrador para adicionar licenÃ§as Ã  sua conta."]
        }
    },
    cs_CZ: {
        adobestock: {
            "": {lang: "us", "plural-forms": "nplurals=2; plural=n != 1;"},
            "API::LIBRARIES::Payment error": ["Chyba pÅ™i placenÃ­"],
            "API::LIBRARIES::We are experiencing technical difficulties. Please try again later.": ["Na naÅ¡Ã­ stranÄ› doÅ¡lo kÂ technickÃ½m potÃ­Å¾Ã­m. Zkuste to znovu pozdÄ›ji."],
            "CHECKOUT::You now have access to a growing collection of millions of images, conveniently integrated into Adobe Illustrator CC, Adobe InDesign CC, Adobe Photoshop CC, Adobe After Effects CC and Adobe Premiere Pro CC.": ["NynÃ­ mÃ¡te pÅ™Ã­stup kÂ neustÃ¡le rostoucÃ­ kolekci milionÅ¯ obrÃ¡zkÅ¯, kterÃ¡ je praktickÃ½m zpÅ¯sobem integrovÃ¡na vÂ aplikacÃ­ch Adobe IllustratorÂ CC, Adobe InDesignÂ CC, Adobe PhotoshopÂ CC, Adobe After EffectsÂ CC aÂ Adobe Premiere ProÂ CC."],
            "CHECKOUT::You're Ready to Go!": ["Jste pÅ™ipraveni zaÄÃ­t!"],
            "CONTENT::ERROR::Licenses for this image are no longer available.": ["Licence pro tento obrÃ¡zek jiÅ¾ nejsou kÂ dispozici."],
            "DOWNLOAD::ERROR::An error occurred with your download.": ["PÅ™i stahovÃ¡nÃ­ doÅ¡lo kÂ chybÄ›."],
            "DOWNLOAD::ERROR::If this problem persists, contact %sCustomer Service%s.": ["Pokud potÃ­Å¾e pÅ™etrvajÃ­, obraÅ¥te se na %szÃ¡kaznickÃ½ servis%s."],
            "DOWNLOAD::ERROR::There was a problem downloading your image. Please try again.": ["PÅ™i stahovÃ¡nÃ­ obrÃ¡zku doÅ¡lo kÂ problÃ©mu. Zkuste to znovu."],
            "FILE::ACTION::Are you sure you want to license this image again?": ["Opravdu si pÅ™ejete znovu licencovat tento obrÃ¡zek?"],
            "FILE::ACTION::Buy Additional License": ["Zakoupit dalÅ¡Ã­ licence"],
            "FILE::ACTION::Buy Image": ["Zakoupit obrÃ¡zek"],
            "FILE::ACTION::Buy license & save to": ["Zakoupit licence aÂ uloÅ¾it do"],
            "FILE::ACTION::Cancel": ["ZruÅ¡it"],
            "FILE::ACTION::Downloading": ["StahovÃ¡nÃ­"],
            "FILE::ACTION::Find Similar": ["NajÃ­t podobnÃ©"],
            "FILE::ACTION::License & save to": ["Licencovat aÂ uloÅ¾it do"],
            "FILE::ACTION::More From This Model": ["VÃ­ce pro tento model"],
            "FILE::ACTION::More From This Series": ["VÃ­ce zÂ tÃ©to sÃ©rie"],
            "FILE::ACTION::Pay %s for this image?": ["Zaplatit %s za tento obrÃ¡zek?"],
            "FILE::ACTION::Please wait...": ["PoÄkejte prosÃ­mâ€¦"],
            "FILE::ACTION::Save Image to": ["UloÅ¾it obrÃ¡zek do"],
            "FILE::ACTION::Save Preview Image": ["UloÅ¾it obrÃ¡zek nÃ¡hledu"],
            "FILE::ACTION::Save Preview to": ["UloÅ¾it nÃ¡hled do"],
            "FILE::ACTION::Save to Desktop": ["UloÅ¾it na plochu"],
            "FILE::ACTION::Save to a Creative Cloud Library": ["UloÅ¾it do knihovny Creative Cloud"],
            "FILE::ACTION::Saved!": ["UloÅ¾eno!"],
            "FILE::ACTION::Saving...": ["UklÃ¡dÃ¡nÃ­..."],
            "FILE::ACTION::See More": ["Zobrazit dalÅ¡Ã­"],
            "FILE::ACTION::Similar Images": ["PodobnÃ© obrÃ¡zky"],
            "FILE::ACTION::Yes": ["Ano"],
            "FILE::ACTION::Your download will begin shortly": ["StahovÃ¡nÃ­ jiÅ¾ brzy zaÄne"],
            "FILE::ACTION::Your image was saved to %s": ["VÃ¡Å¡ obrÃ¡zek byl uloÅ¾en do %s"],
            "FILE::Author": ["Autor"],
            "FILE::Category": ["Kategorie"],
            "FILE::File Number": ["ÄŒÃ­slo souboru"],
            "FILE::Format": ["FormÃ¡t"],
            "FILE::KEYWORDS::%s more": ["DalÅ¡Ã­: %s", "DalÅ¡Ã­: %s"],
            "FILE::Keywords": ["KlÃ­ÄovÃ¡ slova"],
            "FILE::Size": ["Velikost"],
            "FILE::px": ["pix."],
            "GENERIC::Something Went Wrong": ["NÄ›co se pokazilo"],
            "HEADER::MEMBER::Image": ["ObrÃ¡zek", "ObrÃ¡zky"],
            "IMAGE::DETAIL::MODAL::BUTTON::OK": ["OK"],
            "IMAGE::DETAIL::MODAL::DESCRIPTION::Images can be saved to Creative Cloud Libraries, or to your desktop. You can change your saving location here.": ["ObrÃ¡zky lze uloÅ¾it do Creative Cloud knihoven nebo do stolnÃ­ho poÄÃ­taÄe. UmÃ­stÄ›nÃ­ pro uklÃ¡dÃ¡nÃ­ mÅ¯Å¾ete zmÄ›nit zde."],
            "IMAGE::DETAIL::MODAL::DESCRIPTION::Images saved to libraries will appear in the Libraries panel within any libraries-enabled Adobe application.": ["ObrÃ¡zek uloÅ¾enÃ½ do knihoven se zobrazÃ­ na panelu Knihovny vÂ kaÅ¾dÃ© aplikaci Adobe sÂ podporou knihoven."],
            "IMAGE::DETAIL::MODAL::TITLE::Saving Images": ["UklÃ¡dÃ¡nÃ­ obrÃ¡zkÅ¯"],
            "LIB::MENU::Add new library": ["PÅ™idat novou knihovnu"],
            "LIB::MENU::Buy License & Save to": ["Zakoupit licence aÂ uloÅ¾it do"],
            "LIB::MENU::Create a free account to save images.": ["VytvoÅ™te si bezplatnÃ½ ÃºÄet pro uklÃ¡dÃ¡nÃ­ obrÃ¡zkÅ¯."],
            "LIB::MENU::Create an Account": ["VytvoÅ™it ÃºÄet"],
            "LIB::MENU::Creating Library...": ["VytvÃ¡Å™enÃ­ knihovnyâ€¦"],
            "LIB::MENU::Delete This Image": ["Odstranit tento obrÃ¡zek"],
            "LIB::MENU::Find Similar Images": ["NajÃ­t podobnÃ© obrÃ¡zky"],
            "LIB::MENU::License & Save to": ["Licencovat aÂ uloÅ¾it do"],
            "LIB::MENU::Log In": ["PÅ™ihlÃ¡sit se"],
            "LIB::MENU::Save Preview to": ["UloÅ¾it nÃ¡hled do"],
            "LIB::MENU::Save to": ["UloÅ¾it do"],
            "LIB::MENU::Save to Desktop": ["UloÅ¾it na plochu"],
            "LIB::MENU::Save to a Creative Cloud Library": ["UloÅ¾it do knihovny Creative Cloud"],
            "LIB::MENU::Saved!": ["UloÅ¾eno!"],
            "LIB::MENU::Saving...": ["UklÃ¡dÃ¡nÃ­..."],
            "LIB::MENU::Your image was saved to": ["VÃ¡Å¡ obrÃ¡zek byl uloÅ¾en do"],
            "LIB::OVERAGE::Cancel": ["ZruÅ¡it"],
            "LIB::OVERAGE::NO_ABBREVIATION::Exclusive of VAT": ["Bez DPH"],
            "LIB::OVERAGE::NO_ABBREVIATION::No GST payable": ["NeplatÃ­ se daÅˆ ze zboÅ¾Ã­ aÂ sluÅ¾eb"],
            "LIB::OVERAGE::NO_ABBREVIATION::Not taxable": ["NeplatÃ­ se daÅˆ"],
            "LIB::OVERAGE::Yes": ["Ano"],
            "LIBRARIES::Could not add to library.": ["Nelze pÅ™idat do knihovny."],
            "LIBRARIES::Could not delete library item.": ["Nelze odstranit poloÅ¾ku zÂ knihovny."],
            "LIBRARIES::Could not delete library.": ["Nelze odstranit knihovnu."],
            "LIBRARIES::Could not load libraries.": ["Nelze naÄÃ­st knihovny."],
            "LIBRARIES::Could not rename library.": ["Nelze pÅ™ejmenovat knihovnu."],
            "LIBRARIES::Could not retrieve library items.": ["Nelze zÃ­skat poloÅ¾ky zÂ knihovny."],
            "LIBRARIES::Failed to create library.": ["NepodaÅ™ilo se vytvoÅ™it knihovnu."],
            "LIBRARIES::RENAME::Cancel": ["ZruÅ¡it"],
            "LIBRARIES::RENAME::Ok": ["OK"],
            "LIBRARIES::STATE::Licensed": ["LicencovÃ¡no"],
            "LIBRARY::%d item": ["PoloÅ¾ka: %d", "PoloÅ¾ky: %d"],
            "LIBRARY::%s item": ["PoloÅ¾ka: %s", "PoloÅ¾ky: %s"],
            "LIBRARY::%s total": ["Celkem: %s", "Celkem: %s"],
            "LIBRARY::ACTION::Delete Library": ["Odstranit knihovnu"],
            "LIBRARY::ACTION::Libraries": ["Knihovny"],
            "LIBRARY::ACTION::Rename Library": ["PÅ™ejmenovat knihovnu"],
            "LIBRARY::MYLIBRARY::My Library": ["Moje knihovna"],
            "MEMBER::DOWNLOAD::Buy": ["Zakoupit"],
            "MEMBER::DOWNLOAD::One-Time Download": ["JednorÃ¡zovÃ© staÅ¾enÃ­"],
            "MEMBER::DOWNLOAD::One-time Payment": ["JednorÃ¡zovÃ¡ platba"],
            "MEMBER::DOWNLOAD::You're out of licenses. What would you like to do?": ["VyÄerpali jste vÅ¡echny licence. Jak si pÅ™ejete postupovat?"],
            "MEMBER::DOWNLOAD::Your plan entitles you to %s image a month": ["VÃ¡Å¡ plÃ¡n vÃ¡s opravÅˆuje kÂ pouÅ¾itÃ­ %s obrÃ¡zku mÄ›sÃ­ÄnÄ›", "VÃ¡Å¡ plÃ¡n vÃ¡s opravÅˆuje kÂ pouÅ¾itÃ­ %s obrÃ¡zkÅ¯ mÄ›sÃ­ÄnÄ›"],
            "MEMBER::ERROR::Failed to purchase an additional license.": ["NÃ¡kup dalÅ¡Ã­ licence se nezdaÅ™il."],
            "MEMBER::License Again": ["Znovu licencovat"],
            'MODAL::Are you sure you want to delete "%s"?': ["Opravdu chcete odstranit â€ž%sâ€œ?"],
            "MODAL::Cancel": ["ZruÅ¡it"],
            "MODAL::Delete": ["Odstranit"],
            'MODAL::Delete "%s"': ["Odstranit â€ž%sâ€œ"],
            "MODAL::Ok": ["OK"],
            "MODAL::This library will no longer be available to anyone who shares it.": ["Tato knihovna nadÃ¡le nebude kÂ dispozici pro nikoho, kdo ji sdÃ­lÃ­."],
            "PHOTO::DOWNLOAD::Desktop": ["Plocha"],
            "PHOTO::DOWNLOAD::New Library": ["NovÃ¡ knihovna"],
            "PLANS::Exclusive of VAT": ["Bez DPH"],
            "PLANS::No GST payable": ["NeplatÃ­ se daÅˆ ze zboÅ¾Ã­ aÂ sluÅ¾eb"],
            "PLANS::Not taxable": ["NeplatÃ­ se daÅˆ"],
            "PLANS::Okay": ["OK"],
            "PLANS::There was an error upgrading your plan.": ["PÅ™i aktualizaci plÃ¡nu doÅ¡lo kÂ chybÄ›."],
            'PLANS::UPGRADE::By clicking the "Continue" button, you agree to the billing terms above.': ["KliknutÃ­m na tlaÄÃ­tko â€žPokraÄovatâ€œ vyjadÅ™ujete souhlas sÂ vÃ½Å¡e uvedenÃ½mi fakturaÄnÃ­mi podmÃ­nkami."],
            "PLANS::UPGRADE::Continue": ["PokraÄovat"],
            "PLANS::UPGRADE::Upgrade plan": ["Upgradovat plÃ¡n"],
            "PLANS::UPGRADE::You've selected %s": ["Zvolili jste %s"],
            "PLANS::Upgrade": ["Aktualizovat"],
            "PLANS::Upgrade error": ["Chyba pÅ™i aktualizaci"],
            "PURCHASE::ERROR::Sorry! You have no more images available in your subscription. More will become available next month.": ["OmlouvÃ¡me se, ale vÂ rÃ¡mci svÃ©ho odbÄ›ru jiÅ¾ nemÃ¡te kÂ dispozici Å¾Ã¡dnÃ© dalÅ¡Ã­ obrÃ¡zky. DalÅ¡Ã­ budou kÂ dispozici vÂ pÅ™Ã­Å¡tÃ­m mÄ›sÃ­ci."],
            "PURCHASE::ERROR::You have %s license. Please contact your administrator to add licenses to your account.": ["MÃ¡te %s licenci. Pokud chcete pÅ™idat dalÅ¡Ã­ licence ke svÃ©mu ÃºÄtu, obraÅ¥te se na sprÃ¡vce.", "MÃ¡te nÃ¡sledujÃ­cÃ­ poÄet licencÃ­: %s. Pokud chcete pÅ™idat dalÅ¡Ã­ licence ke svÃ©mu ÃºÄtu, obraÅ¥te se na sprÃ¡vce."]
        }
    },
    de_DE: {
        adobestock: {
            "": {lang: "us", "plural-forms": "nplurals=2; plural=n != 1;"},
            "API::LIBRARIES::Payment error": ["Zahlungsfehler"],
            "API::LIBRARIES::We are experiencing technical difficulties. Please try again later.": ["Es sind technische Probleme aufgetreten. Versuchen Sie es spÃ¤ter erneut."],
            "CHECKOUT::You now have access to a growing collection of millions of images, conveniently integrated into Adobe Illustrator CC, Adobe InDesign CC, Adobe Photoshop CC, Adobe After Effects CC and Adobe Premiere Pro CC.": ["Sie haben nun Zugriff auf eine laufend erweiterte Sammlung von Millionen Bildern, die direkt mit Adobe Illustrator CC, Adobe InDesign CC, Adobe Photoshop CC, Adobe After Effects CC und Adobe Premiere Pro CC integriert ist."],
            "CHECKOUT::You're Ready to Go!": ["Einrichtung abgeschlossen"],
            "CONTENT::ERROR::Licenses for this image are no longer available.": ["FÃ¼r dieses Bild sind keine Lizenzen mehr erhÃ¤ltlich."],
            "DOWNLOAD::ERROR::An error occurred with your download.": ["Fehler beim Herunterladen."],
            "DOWNLOAD::ERROR::If this problem persists, contact %sCustomer Service%s.": ["Wenn das Problem weiterhin auftritt, wenden Sie sich an den %sKundendienst%s."],
            "DOWNLOAD::ERROR::There was a problem downloading your image. Please try again.": ["Beim Herunterladen des Bilds ist ein Problem aufgetreten. Versuchen Sie es erneut."],
            "FILE::ACTION::Are you sure you want to license this image again?": ["MÃ¶chten Sie dieses Bild wirklich nochmals lizenzieren?"],
            "FILE::ACTION::Buy Additional License": ["ZusÃ¤tzliche Lizenz kaufen"],
            "FILE::ACTION::Buy Image": ["Bild kaufen"],
            "FILE::ACTION::Buy license & save to": ["Lizenz kaufen und speichern unter"],
            "FILE::ACTION::Cancel": ["Abbrechen"],
            "FILE::ACTION::Downloading": ["Herunterladen"],
            "FILE::ACTION::Find Similar": ["Ã„hnliche suchen"],
            "FILE::ACTION::License & save to": ["Lizenzieren und speichern unter"],
            "FILE::ACTION::More From This Model": ["Mehr von diesem Modell"],
            "FILE::ACTION::More From This Series": ["Mehr von dieser Serie"],
            "FILE::ACTION::Pay %s for this image?": ["%s fÃ¼r dieses Bild bezahlen?"],
            "FILE::ACTION::Please wait...": ["Bitte warten..."],
            "FILE::ACTION::Save Image to": ["Bild speichern unter"],
            "FILE::ACTION::Save Preview Image": ["Vorschaubild speichern"],
            "FILE::ACTION::Save Preview to": ["Vorschau speichern unter"],
            "FILE::ACTION::Save to Desktop": ["Auf Desktop speichern"],
            "FILE::ACTION::Save to a Creative Cloud Library": ["In Creative Cloud-Bibliothek speichern"],
            "FILE::ACTION::Saved!": ["Gespeichert!"],
            "FILE::ACTION::Saving...": ["Wird gespeichert..."],
            "FILE::ACTION::See More": ["Mehr anzeigen"],
            "FILE::ACTION::Similar Images": ["Ã„hnliche Bilder"],
            "FILE::ACTION::Yes": ["Ja"],
            "FILE::ACTION::Your download will begin shortly": ["Herunterladen beginnt in KÃ¼rze"],
            "FILE::ACTION::Your image was saved to %s": ["Ihr Bild wurde gespeichert unter %s"],
            "FILE::Author": ["Autor"],
            "FILE::Category": ["Kategorie"],
            "FILE::File Number": ["Dateinummer"],
            "FILE::Format": ["Format"],
            "FILE::KEYWORDS::%s more": ["%s weitere", "%s weitere"],
            "FILE::Keywords": ["StichwÃ¶rter"],
            "FILE::Size": ["GrÃ¶ÃŸe"],
            "FILE::px": ["px"],
            "GENERIC::Something Went Wrong": ["Es ist ein Fehler aufgetreten."],
            "HEADER::MEMBER::Image": ["Bild", "Bilder"],
            "IMAGE::DETAIL::MODAL::BUTTON::OK": ["OK"],
            "IMAGE::DETAIL::MODAL::DESCRIPTION::Images can be saved to Creative Cloud Libraries, or to your desktop. You can change your saving location here.": ["Bilder kÃ¶nnen auf Creative Cloud Libraries oder auf Ihrem Desktop gespeichert werden. Den Speicherort kÃ¶nnen Sie hier Ã¤ndern."],
            "IMAGE::DETAIL::MODAL::DESCRIPTION::Images saved to libraries will appear in the Libraries panel within any libraries-enabled Adobe application.": ["In Bibliotheken gespeicherte Bilder werden in Adobe-Applikationen, die Bibliotheken unterstÃ¼tzen, im Bedienfeld â€žBibliothekenâ€œ angezeigt."],
            "IMAGE::DETAIL::MODAL::TITLE::Saving Images": ["Bilder speichern"],
            "LIB::MENU::Add new library": ["Neue Bibliothek hinzufÃ¼gen"],
            "LIB::MENU::Buy License & Save to": ["Lizenz kaufen und speichern unter"],
            "LIB::MENU::Create a free account to save images.": ["Erstellen Sie ein kostenloses Konto, um Bilder zu speichern."],
            "LIB::MENU::Create an Account": ["Konto anlegen"],
            "LIB::MENU::Creating Library...": ["Bibliothek wird erstellt..."],
            "LIB::MENU::Delete This Image": ["Dieses Bild lÃ¶schen"],
            "LIB::MENU::Find Similar Images": ["Ã„hnliche Bilder suchen"],
            "LIB::MENU::License & Save to": ["Lizenzieren und speichern unter"],
            "LIB::MENU::Log In": ["Anmelden"],
            "LIB::MENU::Save Preview to": ["Vorschau speichern unter"],
            "LIB::MENU::Save to": ["Speichern unter"],
            "LIB::MENU::Save to Desktop": ["Auf Desktop speichern"],
            "LIB::MENU::Save to a Creative Cloud Library": ["In Creative Cloud-Bibliothek speichern"],
            "LIB::MENU::Saved!": ["Gespeichert!"],
            "LIB::MENU::Saving...": ["Wird gespeichert..."],
            "LIB::MENU::Your image was saved to": ["Ihr Bild wurde gespeichert unter"],
            "LIB::OVERAGE::Cancel": ["Abbrechen"],
            "LIB::OVERAGE::NO_ABBREVIATION::Exclusive of VAT": ["ZuzÃ¼glich MwSt."],
            "LIB::OVERAGE::NO_ABBREVIATION::No GST payable": ["GST-frei"],
            "LIB::OVERAGE::NO_ABBREVIATION::Not taxable": ["Nicht steuerpflichtig"],
            "LIB::OVERAGE::Yes": ["Ja"],
            "LIBRARIES::Could not add to library.": ["Fehler beim HinzufÃ¼gen zur Bibliothek."],
            "LIBRARIES::Could not delete library item.": ["Bibliothekselement konnte nicht gelÃ¶scht werden."],
            "LIBRARIES::Could not delete library.": ["Bibliothek konnte nicht gelÃ¶scht werden."],
            "LIBRARIES::Could not load libraries.": ["Bibliotheken konnten nicht geladen werden."],
            "LIBRARIES::Could not rename library.": ["Bibliothek konnte nicht umbenannt werden."],
            "LIBRARIES::Could not retrieve library items.": ["Die Bibliothekselemente konnten nicht abgerufen werden."],
            "LIBRARIES::Failed to create library.": ["Die Bibliothek konnte nicht erstellt werden."],
            "LIBRARIES::RENAME::Cancel": ["Abbrechen"],
            "LIBRARIES::RENAME::Ok": ["Ok"],
            "LIBRARIES::STATE::Licensed": ["Lizenziert"],
            "LIBRARY::%d item": ["%d Element", "%d Elemente"],
            "LIBRARY::%s item": ["%s Element", "%s Elemente"],
            "LIBRARY::%s total": ["%s gesamt", "%s gesamt"],
            "LIBRARY::ACTION::Delete Library": ["Bibliothek lÃ¶schen"],
            "LIBRARY::ACTION::Libraries": ["Bibliotheken"],
            "LIBRARY::ACTION::Rename Library": ["Bibliothek umbenennen"],
            "LIBRARY::MYLIBRARY::My Library": ["Meine Bibliothek"],
            "MEMBER::DOWNLOAD::Buy": ["Kaufen"],
            "MEMBER::DOWNLOAD::One-Time Download": ["Einmaliger Download"],
            "MEMBER::DOWNLOAD::One-time Payment": ["Einmalige Zahlung"],
            "MEMBER::DOWNLOAD::You're out of licenses. What would you like to do?": ["Sie haben keine Lizenzen mehr. Wie mÃ¶chten Sie vorgehen?"],
            "MEMBER::DOWNLOAD::Your plan entitles you to %s image a month": ["Ihre Abo-Variante berechtigt Sie zum Download von %s Bild pro Monat.", "Ihre Abo-Variante berechtigt Sie zum Download von %s Bildern pro Monat."],
            "MEMBER::ERROR::Failed to purchase an additional license.": ["Fehler beim Erwerb einer zusÃ¤tzlichen Lizenz."],
            "MEMBER::License Again": ["Erneut lizenzieren"],
            'MODAL::Are you sure you want to delete "%s"?': ["MÃ¶chten Sie â€ž%sâ€œ wirklich lÃ¶schen?"],
            "MODAL::Cancel": ["Abbrechen"],
            "MODAL::Delete": ["LÃ¶schen"],
            'MODAL::Delete "%s"': ["â€ž%sâ€œ lÃ¶schen"],
            "MODAL::Ok": ["Ok"],
            "MODAL::This library will no longer be available to anyone who shares it.": ["Diese Bibliothek wird fÃ¼r niemanden mehr verfÃ¼gbar sein."],
            "PHOTO::DOWNLOAD::Desktop": ["Desktop"],
            "PHOTO::DOWNLOAD::New Library": ["Neue Bibliothek"],
            "PLANS::Exclusive of VAT": ["ZuzÃ¼glich MwSt."],
            "PLANS::No GST payable": ["GST-frei"],
            "PLANS::Not taxable": ["Nicht steuerpflichtig"],
            "PLANS::Okay": ["OK"],
            "PLANS::There was an error upgrading your plan.": ["Beim Aktualisieren Ihrer Abo-Variante ist ein Fehler aufgetreten."],
            'PLANS::UPGRADE::By clicking the "Continue" button, you agree to the billing terms above.': ["Indem Sie auf â€žWeiterâ€œ klicken, stimmen Sie den oben genannten Abrechnungsbedingungen zu."],
            "PLANS::UPGRADE::Continue": ["Weiter"],
            "PLANS::UPGRADE::Upgrade plan": ["Abo-Upgrade buchen"],
            "PLANS::UPGRADE::You've selected %s": ["Sie haben Folgendes ausgewÃ¤hlt: %s"],
            "PLANS::Upgrade": ["Upgrade"],
            "PLANS::Upgrade error": ["Aktualisierungsfehler"],
            "PURCHASE::ERROR::Sorry! You have no more images available in your subscription. More will become available next month.": ["Sie haben alle in Ihrem Abonnement verfÃ¼gbaren Downloads aufgebraucht. Im nÃ¤chsten Monat kÃ¶nnen Sie weitere Bilder herunterladen."],
            "PURCHASE::ERROR::You have %s license. Please contact your administrator to add licenses to your account.": ["Sie haben %s Lizenz. Wenden Sie sich an den Administrator, wenn weitere Lizenzen zu Ihrem Konto hinzugefÃ¼gt werden sollen.", "Sie haben %s Lizenzen. Wenden Sie sich an den Administrator, wenn weitere Lizenzen zu Ihrem Konto hinzugefÃ¼gt werden sollen."]
        }
    },
    da_DK: {
        adobestock: {
            "": {lang: "us", "plural-forms": "nplurals=2; plural=n != 1;"},
            "API::LIBRARIES::Payment error": ["Betalingsfejl"],
            "API::LIBRARIES::We are experiencing technical difficulties. Please try again later.": ["Vi oplever tekniske problemer. PrÃ¸v igen senere."],
            "CHECKOUT::You now have access to a growing collection of millions of images, conveniently integrated into Adobe Illustrator CC, Adobe InDesign CC, Adobe Photoshop CC, Adobe After Effects CC and Adobe Premiere Pro CC.": ["Du har nu adgang til en stadig stÃ¸rre samling af millioner af billeder, der er praktisk integreret i Adobe Illustrator CC, Adobe InDesign CC, Adobe Photoshop CC, Adobe After Effects CC og Adobe Premiere Pro CC."],
            "CHECKOUT::You're Ready to Go!": ["Du er klar til at gÃ¥ i gang!"],
            "CONTENT::ERROR::Licenses for this image are no longer available.": ["Licenser for dette billede er ikke lÃ¦ngere tilgÃ¦ngelige."],
            "DOWNLOAD::ERROR::An error occurred with your download.": ["Der opstod en fejl med overfÃ¸rslen."],
            "DOWNLOAD::ERROR::If this problem persists, contact %sCustomer Service%s.": ["Hvis problemet fortsÃ¦tter, skal du kontakte %sKundeservice%s."],
            "DOWNLOAD::ERROR::There was a problem downloading your image. Please try again.": ["Der opstod et problem under overfÃ¸rslen af dit billede. PrÃ¸v igen."],
            "FILE::ACTION::Are you sure you want to license this image again?": ["Er du sikker pÃ¥, at du vil have licens til dette billede igen?"],
            "FILE::ACTION::Buy Additional License": ["KÃ¸b ekstra licens"],
            "FILE::ACTION::Buy Image": ["KÃ¸b billede"],
            "FILE::ACTION::Buy license & save to": ["KÃ¸b licens & gem i"],
            "FILE::ACTION::Cancel": ["Annuller"],
            "FILE::ACTION::Downloading": ["Downloader"],
            "FILE::ACTION::Find Similar": ["Find lignende"],
            "FILE::ACTION::License & save to": ["Licens & gem i"],
            "FILE::ACTION::More From This Model": ["Mere fra denne model"],
            "FILE::ACTION::More From This Series": ["Mere fra denne serie"],
            "FILE::ACTION::Pay %s for this image?": ["Vil du betale %s for dette billede?"],
            "FILE::ACTION::Please wait...": ["Vent et Ã¸jeblik..."],
            "FILE::ACTION::Save Image to": ["Gem billede i"],
            "FILE::ACTION::Save Preview Image": ["Gem forhÃ¥ndsvisning af billede"],
            "FILE::ACTION::Save Preview to": ["Gem forhÃ¥ndsvisning i"],
            "FILE::ACTION::Save to Desktop": ["Gem pÃ¥ skrivebord"],
            "FILE::ACTION::Save to a Creative Cloud Library": ["Gem i et Creative Cloud-bibliotek"],
            "FILE::ACTION::Saved!": ["Gemt!"],
            "FILE::ACTION::Saving...": ["Gemmer..."],
            "FILE::ACTION::See More": ["Se flere"],
            "FILE::ACTION::Similar Images": ["Lignende billeder"],
            "FILE::ACTION::Yes": ["Ja"],
            "FILE::ACTION::Your download will begin shortly": ["OverfÃ¸rslen starter om lidt"],
            "FILE::ACTION::Your image was saved to %s": ["Dit billede blev gemt i %s"],
            "FILE::Author": ["Forfatter"],
            "FILE::Category": ["Kategori"],
            "FILE::File Number": ["Filnummer"],
            "FILE::Format": ["Format"],
            "FILE::KEYWORDS::%s more": ["%s flere", "%s flere"],
            "FILE::Keywords": ["NÃ¸gleord"],
            "FILE::Size": ["StÃ¸rrelse"],
            "FILE::px": ["px"],
            "GENERIC::Something Went Wrong": ["Noget gik galt"],
            "HEADER::MEMBER::Image": ["Billede", "Billeder"],
            "IMAGE::DETAIL::MODAL::BUTTON::OK": ["OK"],
            "IMAGE::DETAIL::MODAL::DESCRIPTION::Images can be saved to Creative Cloud Libraries, or to your desktop. You can change your saving location here.": ["Billeder kan gemmes i Creative Cloud Libraries eller pÃ¥ dit skrivebord. Du kan Ã¦ndre placeringen til lagring her."],
            "IMAGE::DETAIL::MODAL::DESCRIPTION::Images saved to libraries will appear in the Libraries panel within any libraries-enabled Adobe application.": ["Billeder, der gemmes i biblioteker, vises i Bibliotekspanelet i ethvert biblioteksaktiveret Adobe-program."],
            "IMAGE::DETAIL::MODAL::TITLE::Saving Images": ["Gemmer billeder"],
            "LIB::MENU::Add new library": ["TilfÃ¸j nyt bibliotek"],
            "LIB::MENU::Buy License & Save to": ["KÃ¸b licens & gem i"],
            "LIB::MENU::Create a free account to save images.": ["Opret en gratis konto for at gemme billeder."],
            "LIB::MENU::Create an Account": ["Opret en konto"],
            "LIB::MENU::Creating Library...": ["Opretter bibliotek..."],
            "LIB::MENU::Delete This Image": ["Slet dette billede"],
            "LIB::MENU::Find Similar Images": ["Find lignende billeder"],
            "LIB::MENU::License & Save to": ["Licens & gem i"],
            "LIB::MENU::Log In": ["Log pÃ¥"],
            "LIB::MENU::Save Preview to": ["Gem forhÃ¥ndsvisning i"],
            "LIB::MENU::Save to": ["Gem i"],
            "LIB::MENU::Save to Desktop": ["Gem pÃ¥ skrivebord"],
            "LIB::MENU::Save to a Creative Cloud Library": ["Gem i et Creative Cloud-bibliotek"],
            "LIB::MENU::Saved!": ["Gemt!"],
            "LIB::MENU::Saving...": ["Gemmer..."],
            "LIB::MENU::Your image was saved to": ["Dit billede blev gemt i"],
            "LIB::OVERAGE::Cancel": ["Annuller"],
            "LIB::OVERAGE::NO_ABBREVIATION::Exclusive of VAT": ["ekskl. moms"],
            "LIB::OVERAGE::NO_ABBREVIATION::No GST payable": ["Der skal ikke betales GST"],
            "LIB::OVERAGE::NO_ABBREVIATION::Not taxable": ["Ikke skattepligtig"],
            "LIB::OVERAGE::Yes": ["Ja"],
            "LIBRARIES::Could not add to library.": ["Kunne ikke fÃ¸je til bibliotek."],
            "LIBRARIES::Could not delete library item.": ["Bibliotekselementet kunne ikke slettes."],
            "LIBRARIES::Could not delete library.": ["Biblioteket kunne ikke slettes."],
            "LIBRARIES::Could not load libraries.": ["Bibliotekerne kunne ikke indlÃ¦ses."],
            "LIBRARIES::Could not rename library.": ["Biblioteket kunne ikke omdÃ¸bes."],
            "LIBRARIES::Could not retrieve library items.": ["Bibliotekselementer kunne ikke hentes."],
            "LIBRARIES::Failed to create library.": ["Bibliotek kunne ikke oprettes."],
            "LIBRARIES::RENAME::Cancel": ["Annuller"],
            "LIBRARIES::RENAME::Ok": ["OK"],
            "LIBRARIES::STATE::Licensed": ["Licenseret"],
            "LIBRARY::%d item": ["%d element", "%d elementer"],
            "LIBRARY::%s item": ["%s element", "%s elementer"],
            "LIBRARY::%s total": ["%s i alt", "%s i alt"],
            "LIBRARY::ACTION::Delete Library": ["Slet bibliotek"],
            "LIBRARY::ACTION::Libraries": ["Biblioteker"],
            "LIBRARY::ACTION::Rename Library": ["OmdÃ¸b bibliotek"],
            "LIBRARY::MYLIBRARY::My Library": ["Mit bibliotek"],
            "MEMBER::DOWNLOAD::Buy": ["KÃ¸b"],
            "MEMBER::DOWNLOAD::One-Time Download": ["Download Ã©n gang"],
            "MEMBER::DOWNLOAD::One-time Payment": ["Betaling Ã©n gang"],
            "MEMBER::DOWNLOAD::You're out of licenses. What would you like to do?": ["Du har ikke flere licenser. Hvad vil du foretage dig?"],
            "MEMBER::DOWNLOAD::Your plan entitles you to %s image a month": ["Din plan giver dig ret til %s billede pr. mÃ¥ned", "Din plan giver dig ret til %s billeder pr. mÃ¥ned"],
            "MEMBER::ERROR::Failed to purchase an additional license.": ["KÃ¸b af en yderligere licens mislykkedes."],
            "MEMBER::License Again": ["LicensÃ©r igen"],
            'MODAL::Are you sure you want to delete "%s"?': ['Er du sikker pÃ¥, at du vil slette "%s"?'],
            "MODAL::Cancel": ["Annuller"],
            "MODAL::Delete": ["Slet"],
            'MODAL::Delete "%s"': ['Slet "%s"'],
            "MODAL::Ok": ["OK"],
            "MODAL::This library will no longer be available to anyone who shares it.": ["Dette bibliotek vil ikke lÃ¦ngere vÃ¦re tilgÃ¦ngeligt for nogen, der deler det."],
            "PHOTO::DOWNLOAD::Desktop": ["Skrivebord"],
            "PHOTO::DOWNLOAD::New Library": ["Nyt bibliotek"],
            "PLANS::Exclusive of VAT": ["ekskl. moms"],
            "PLANS::No GST payable": ["Der skal ikke betales GST"],
            "PLANS::Not taxable": ["Ikke skattepligtig"],
            "PLANS::Okay": ["OK"],
            "PLANS::There was an error upgrading your plan.": ["Der opstod en fejl under opgradering af din plan."],
            'PLANS::UPGRADE::By clicking the "Continue" button, you agree to the billing terms above.': ['Ved at klikke pÃ¥ knappen "FortsÃ¦t" accepterer du faktureringsbetingelserne ovenfor.'],
            "PLANS::UPGRADE::Continue": ["FortsÃ¦t"],
            "PLANS::UPGRADE::Upgrade plan": ["Opgraderingsplan"],
            "PLANS::UPGRADE::You've selected %s": ["Du har valgt %s"],
            "PLANS::Upgrade": ["Opgrader"],
            "PLANS::Upgrade error": ["Opgraderingsfejl"],
            "PURCHASE::ERROR::Sorry! You have no more images available in your subscription. More will become available next month.": ["Beklager! Du har ikke flere tilgÃ¦ngelige billeder i dit abonnement. Flere vil blive tilgÃ¦ngelige i nÃ¦ste mÃ¥ned."],
            "PURCHASE::ERROR::You have %s license. Please contact your administrator to add licenses to your account.": ["Du har %s licens. Kontakt din administrator for at tilfÃ¸je yderligere licenser til din konto.", "Du har %s licenser. Kontakt din administrator for at tilfÃ¸je yderligere licenser til din konto."]
        }
    },
    es_ES: {
        adobestock: {
            "": {lang: "us", "plural-forms": "nplurals=2; plural=n != 1;"},
            "API::LIBRARIES::Payment error": ["Error de pago"],
            "API::LIBRARIES::We are experiencing technical difficulties. Please try again later.": ["Estamos teniendo problemas tÃ©cnicos. Vuelve a intentarlo mÃ¡s tarde."],
            "CHECKOUT::You now have access to a growing collection of millions of images, conveniently integrated into Adobe Illustrator CC, Adobe InDesign CC, Adobe Photoshop CC, Adobe After Effects CC and Adobe Premiere Pro CC.": ["Ya puedes acceder a una colecciÃ³n creciente de millones de imÃ¡genes, integradas para tu comodidad en AdobeÂ IllustratorÂ CC, AdobeÂ InDesignÂ CC, AdobeÂ PhotoshopÂ CC, AdobeÂ AfterÂ EffectsÂ CC y AdobeÂ PremiereÂ ProÂ CC."],
            "CHECKOUT::You're Ready to Go!": ["Â¡Todo listo!"],
            "CONTENT::ERROR::Licenses for this image are no longer available.": ["Las licencias de esta imagen ya no estÃ¡n disponibles."],
            "DOWNLOAD::ERROR::An error occurred with your download.": ["Se ha producido un error con la descarga."],
            "DOWNLOAD::ERROR::If this problem persists, contact %sCustomer Service%s.": ["Si el problema persiste, ponte en contacto con %sAsistenciaÂ alÂ cliente%s."],
            "DOWNLOAD::ERROR::There was a problem downloading your image. Please try again.": ["Se ha producido un problema al descargar la imagen. IntÃ©ntalo de nuevo."],
            "FILE::ACTION::Are you sure you want to license this image again?": ["Â¿Seguro que quieres volver a comprar la licencia de esta imagen?"],
            "FILE::ACTION::Buy Additional License": ["Comprar licencias adicionales"],
            "FILE::ACTION::Buy Image": ["Comprar imagen"],
            "FILE::ACTION::Buy license & save to": ["Comprar licencia y guardar en"],
            "FILE::ACTION::Cancel": ["Cancelar"],
            "FILE::ACTION::Downloading": ["Descargando..."],
            "FILE::ACTION::Find Similar": ["Buscar parecidas"],
            "FILE::ACTION::License & save to": ["Obtener licencia y guardar en"],
            "FILE::ACTION::More From This Model": ["MÃ¡s de este modelo"],
            "FILE::ACTION::More From This Series": ["MÃ¡s de esta serie"],
            "FILE::ACTION::Pay %s for this image?": ["Â¿Quieres comprar esta imagen por %s?"],
            "FILE::ACTION::Please wait...": ["Espera un momento..."],
            "FILE::ACTION::Save Image to": ["Guardar imagen en"],
            "FILE::ACTION::Save Preview Image": ["Guardar imagen de vista previa"],
            "FILE::ACTION::Save Preview to": ["Guardar vista previa en"],
            "FILE::ACTION::Save to Desktop": ["Guardar en el escritorio"],
            "FILE::ACTION::Save to a Creative Cloud Library": ["Guardar en una Biblioteca Creative Cloud"],
            "FILE::ACTION::Saved!": ["Â¡Guardada!"],
            "FILE::ACTION::Saving...": ["Guardando..."],
            "FILE::ACTION::See More": ["Ver mÃ¡s"],
            "FILE::ACTION::Similar Images": ["ImÃ¡genes similares"],
            "FILE::ACTION::Yes": ["SÃ­"],
            "FILE::ACTION::Your download will begin shortly": ["La descarga empezarÃ¡ en breve"],
            "FILE::ACTION::Your image was saved to %s": ["La imagen se ha guardado en %s"],
            "FILE::Author": ["Autor"],
            "FILE::Category": ["CategorÃ­a"],
            "FILE::File Number": ["NÃºmero de archivo"],
            "FILE::Format": ["Formato"],
            "FILE::KEYWORDS::%s more": ["%s mÃ¡s", "%s mÃ¡s"],
            "FILE::Keywords": ["Palabras clave"],
            "FILE::Size": ["TamaÃ±o"],
            "FILE::px": ["px"],
            "GENERIC::Something Went Wrong": ["Se ha producido un error"],
            "HEADER::MEMBER::Image": ["Imagen", "ImÃ¡genes"],
            "IMAGE::DETAIL::MODAL::BUTTON::OK": ["OK"],
            "IMAGE::DETAIL::MODAL::DESCRIPTION::Images can be saved to Creative Cloud Libraries, or to your desktop. You can change your saving location here.": ["Las imÃ¡genes se pueden guardar en las Bibliotecas Creative Cloud o en el escritorio. Puedes cambiar la ubicaciÃ³n aquÃ­."],
            "IMAGE::DETAIL::MODAL::DESCRIPTION::Images saved to libraries will appear in the Libraries panel within any libraries-enabled Adobe application.": ["Las imÃ¡genes guardadas en las bibliotecas se mostrarÃ¡n en el panel Bibliotecas de cualquier aplicaciÃ³n de Adobe que sea compatible con las mismas."],
            "IMAGE::DETAIL::MODAL::TITLE::Saving Images": ["Guardando imÃ¡genes..."],
            "LIB::MENU::Add new library": ["AÃ±adir nueva biblioteca"],
            "LIB::MENU::Buy License & Save to": ["Comprar licencia y guardar en"],
            "LIB::MENU::Create a free account to save images.": ["CrÃ©ate una cuenta gratuita para guardar las imÃ¡genes."],
            "LIB::MENU::Create an Account": ["CrÃ©ate una cuenta"],
            "LIB::MENU::Creating Library...": ["Creando biblioteca..."],
            "LIB::MENU::Delete This Image": ["Eliminar esta imagen"],
            "LIB::MENU::Find Similar Images": ["Buscar imÃ¡genes parecidas"],
            "LIB::MENU::License & Save to": ["Obtener licencia y guardar en"],
            "LIB::MENU::Log In": ["Iniciar sesiÃ³n"],
            "LIB::MENU::Save Preview to": ["Guardar vista previa en"],
            "LIB::MENU::Save to": ["Guardar en"],
            "LIB::MENU::Save to Desktop": ["Guardar en el escritorio"],
            "LIB::MENU::Save to a Creative Cloud Library": ["Guardar en una Biblioteca Creative Cloud"],
            "LIB::MENU::Saved!": ["Â¡Guardada!"],
            "LIB::MENU::Saving...": ["Guardando..."],
            "LIB::MENU::Your image was saved to": ["La imagen se ha guardado en"],
            "LIB::OVERAGE::Cancel": ["Cancelar"],
            "LIB::OVERAGE::NO_ABBREVIATION::Exclusive of VAT": ["IVA no incluido"],
            "LIB::OVERAGE::NO_ABBREVIATION::No GST payable": ["GST no aplicable"],
            "LIB::OVERAGE::NO_ABBREVIATION::Not taxable": ["Libre de impuestos"],
            "LIB::OVERAGE::Yes": ["SÃ­"],
            "LIBRARIES::Could not add to library.": ["No se ha podido aÃ±adir a la biblioteca."],
            "LIBRARIES::Could not delete library item.": ["No se ha podido eliminar el elemento de la biblioteca."],
            "LIBRARIES::Could not delete library.": ["No se ha podido eliminar la biblioteca."],
            "LIBRARIES::Could not load libraries.": ["No se han podido cargar las bibliotecas."],
            "LIBRARIES::Could not rename library.": ["No se ha podido cambiar el nombre de la biblioteca."],
            "LIBRARIES::Could not retrieve library items.": ["No se han podido recuperar los elementos de la biblioteca."],
            "LIBRARIES::Failed to create library.": ["Error al crear la biblioteca."],
            "LIBRARIES::RENAME::Cancel": ["Cancelar"],
            "LIBRARIES::RENAME::Ok": ["Aceptar"],
            "LIBRARIES::STATE::Licensed": ["Con licencia"],
            "LIBRARY::%d item": ["%d elemento", "%d elementos"],
            "LIBRARY::%s item": ["%s elemento", "%s elementos"],
            "LIBRARY::%s total": ["%s en total", "%s en total"],
            "LIBRARY::ACTION::Delete Library": ["Eliminar biblioteca"],
            "LIBRARY::ACTION::Libraries": ["Bibliotecas"],
            "LIBRARY::ACTION::Rename Library": ["Cambiar nombre de biblioteca"],
            "LIBRARY::MYLIBRARY::My Library": ["Mi biblioteca"],
            "MEMBER::DOWNLOAD::Buy": ["Comprar"],
            "MEMBER::DOWNLOAD::One-Time Download": ["Descarga Ãºnica"],
            "MEMBER::DOWNLOAD::One-time Payment": ["Pago Ãºnico"],
            "MEMBER::DOWNLOAD::You're out of licenses. What would you like to do?": ["No tienes licencias disponibles. Â¿QuÃ© te gustarÃ­a hacer?"],
            "MEMBER::DOWNLOAD::Your plan entitles you to %s image a month": ["Tu plan te da derecho a %s imagen al mes", "Tu plan te da derecho a %s imÃ¡genes al mes"],
            "MEMBER::ERROR::Failed to purchase an additional license.": ["No se ha podido adquirir la licencia adicional."],
            "MEMBER::License Again": ["Volver a comprar licencia"],
            'MODAL::Are you sure you want to delete "%s"?': ["Â¿Seguro que quieres eliminar â€œ%sâ€?"],
            "MODAL::Cancel": ["Cancelar"],
            "MODAL::Delete": ["Eliminar"],
            'MODAL::Delete "%s"': ["Eliminar â€œ%sâ€"],
            "MODAL::Ok": ["Aceptar"],
            "MODAL::This library will no longer be available to anyone who shares it.": ["Esta biblioteca no estarÃ¡ disponible para nadie que la tenga compartida."],
            "PHOTO::DOWNLOAD::Desktop": ["Escritorio"],
            "PHOTO::DOWNLOAD::New Library": ["Nueva biblioteca"],
            "PLANS::Exclusive of VAT": ["IVA no incluido"],
            "PLANS::No GST payable": ["GST no aplicable"],
            "PLANS::Not taxable": ["Libre de impuestos"],
            "PLANS::Okay": ["Vale"],
            "PLANS::There was an error upgrading your plan.": ["Se ha producido un error al actualizar tu plan."],
            'PLANS::UPGRADE::By clicking the "Continue" button, you agree to the billing terms above.': ["Al hacer clic en el botÃ³n â€œContinuarâ€, aceptas los tÃ©rminos de facturaciÃ³n expuestos arriba."],
            "PLANS::UPGRADE::Continue": ["Continuar"],
            "PLANS::UPGRADE::Upgrade plan": ["Actualizar el plan"],
            "PLANS::UPGRADE::You've selected %s": ["Has seleccionado %s"],
            "PLANS::Upgrade": ["Actualizar"],
            "PLANS::Upgrade error": ["Error al actualizar"],
            "PURCHASE::ERROR::Sorry! You have no more images available in your subscription. More will become available next month.": ["Â¡Vaya! No te quedan mÃ¡s imÃ¡genes en tu suscripciÃ³n. El mes que viene volverÃ¡n a estar disponibles."],
            "PURCHASE::ERROR::You have %s license. Please contact your administrator to add licenses to your account.": ["Tienes %s licencia. Ponte en contacto con tu administrador para aÃ±adir licencias a tu cuenta.", "Tienes %s licencias. Ponte en contacto con tu administrador para aÃ±adir licencias a tu cuenta."]
        }
    },
    it_IT: {
        adobestock: {
            "": {lang: "us", "plural-forms": "nplurals=2; plural=n != 1;"},
            "API::LIBRARIES::Payment error": ["Errore di pagamento"],
            "API::LIBRARIES::We are experiencing technical difficulties. Please try again later.": ["Si stanno verificando problemi tecnici. Riprovate piÃ¹ tardi."],
            "CHECKOUT::You now have access to a growing collection of millions of images, conveniently integrated into Adobe Illustrator CC, Adobe InDesign CC, Adobe Photoshop CC, Adobe After Effects CC and Adobe Premiere Pro CC.": ["Ora avete accesso a una raccolta in costante crescita di milioni di immagini, convenientemente integrata con Adobe Illustrator CC, Adobe InDesign CC, Adobe Photoshop CC, Adobe After Effects CC e Adobe Premiere Pro CC."],
            "CHECKOUT::You're Ready to Go!": ["Ora siete pronti a iniziare."],
            "CONTENT::ERROR::Licenses for this image are no longer available.": ["Le licenze per questa immagini non sono piÃ¹ disponibili."],
            "DOWNLOAD::ERROR::An error occurred with your download.": ["Si Ã¨ verificato un errore con il download."],
            "DOWNLOAD::ERROR::If this problem persists, contact %sCustomer Service%s.": ["Se il problema persiste, contattate lâ€™%sAssistenza clienti%s."],
            "DOWNLOAD::ERROR::There was a problem downloading your image. Please try again.": ["Si Ã¨ verificato un problema con il download dellâ€™immagine. Riprovate."],
            "FILE::ACTION::Are you sure you want to license this image again?": ["Intendete ottenere unâ€™altra licenza per questa immagine?"],
            "FILE::ACTION::Buy Additional License": ["Acquista licenze aggiuntive"],
            "FILE::ACTION::Buy Image": ["Acquista immagine"],
            "FILE::ACTION::Buy license & save to": ["Acquista licenza e salva in"],
            "FILE::ACTION::Cancel": ["Annulla"],
            "FILE::ACTION::Downloading": ["Download in corso"],
            "FILE::ACTION::Find Similar": ["Cerca simile"],
            "FILE::ACTION::License & save to": ["Ottieni licenza e salva in"],
            "FILE::ACTION::More From This Model": ["Altre da questo modello"],
            "FILE::ACTION::More From This Series": ["Altre da questa serie"],
            "FILE::ACTION::Pay %s for this image?": ["Desideri pagare %s per questa immagine?"],
            "FILE::ACTION::Please wait...": ["Attendete..."],
            "FILE::ACTION::Save Image to": ["Salva immagine in"],
            "FILE::ACTION::Save Preview Image": ["Salva immagine anteprima"],
            "FILE::ACTION::Save Preview to": ["Salva anteprima in"],
            "FILE::ACTION::Save to Desktop": ["Salva sul desktop"],
            "FILE::ACTION::Save to a Creative Cloud Library": ["Salva in una libreria di Creative Cloud"],
            "FILE::ACTION::Saved!": ["Salvato"],
            "FILE::ACTION::Saving...": ["Salvataggio in corso..."],
            "FILE::ACTION::See More": ["Vedi altro"],
            "FILE::ACTION::Similar Images": ["Immagini simili"],
            "FILE::ACTION::Yes": ["SÃ¬"],
            "FILE::ACTION::Your download will begin shortly": ["Il download inizierÃ  a breve"],
            "FILE::ACTION::Your image was saved to %s": ["Lâ€™immagine Ã¨ stata salvata in %s"],
            "FILE::Author": ["Autore"],
            "FILE::Category": ["Categoria"],
            "FILE::File Number": ["Numero file"],
            "FILE::Format": ["Formato"],
            "FILE::KEYWORDS::%s more": ["%s altre", "%s altre"],
            "FILE::Keywords": ["Parole chiave"],
            "FILE::Size": ["Dimensione"],
            "FILE::px": ["px"],
            "GENERIC::Something Went Wrong": ["Si Ã¨ verificato un errore."],
            "HEADER::MEMBER::Image": ["Immagine", "Immagini"],
            "IMAGE::DETAIL::MODAL::BUTTON::OK": ["OK"],
            "IMAGE::DETAIL::MODAL::DESCRIPTION::Images can be saved to Creative Cloud Libraries, or to your desktop. You can change your saving location here.": ["Le immagini possono essere salvate nelle Creative Cloud Libraries o sul desktop. Potete modificare qui la posizione di salvataggio."],
            "IMAGE::DETAIL::MODAL::DESCRIPTION::Images saved to libraries will appear in the Libraries panel within any libraries-enabled Adobe application.": ["Le immagini salvate nelle librerie verranno visualizzate nel riquadro Librerie dell'applicazione Adobe abilitata per le librerie."],
            "IMAGE::DETAIL::MODAL::TITLE::Saving Images": ["Salvataggio immagini"],
            "LIB::MENU::Add new library": ["Aggiungi nuova libreria"],
            "LIB::MENU::Buy License & Save to": ["Acquista licenza e salva in"],
            "LIB::MENU::Create a free account to save images.": ["Create un account gratuito per salvare le immagini."],
            "LIB::MENU::Create an Account": ["Crea un account"],
            "LIB::MENU::Creating Library...": ["Creazione libreria..."],
            "LIB::MENU::Delete This Image": ["Elimina questa immagine"],
            "LIB::MENU::Find Similar Images": ["Cerca immagini simili"],
            "LIB::MENU::License & Save to": ["Ottieni licenza e salva in"],
            "LIB::MENU::Log In": ["Accedi"],
            "LIB::MENU::Save Preview to": ["Salva anteprima in"],
            "LIB::MENU::Save to": ["Salva in"],
            "LIB::MENU::Save to Desktop": ["Salva sul desktop"],
            "LIB::MENU::Save to a Creative Cloud Library": ["Salva in una libreria di Creative Cloud"],
            "LIB::MENU::Saved!": ["Salvato"],
            "LIB::MENU::Saving...": ["Salvataggio in corso..."],
            "LIB::MENU::Your image was saved to": ["Lâ€™immagine Ã¨ stata salvata in"],
            "LIB::OVERAGE::Cancel": ["Annulla"],
            "LIB::OVERAGE::NO_ABBREVIATION::Exclusive of VAT": ["IVA esclusa"],
            "LIB::OVERAGE::NO_ABBREVIATION::No GST payable": ["Esente da GST"],
            "LIB::OVERAGE::NO_ABBREVIATION::Not taxable": ["Esente da imposte"],
            "LIB::OVERAGE::Yes": ["SÃ¬"],
            "LIBRARIES::Could not add to library.": ["Impossibile aggiungere alla libreria."],
            "LIBRARIES::Could not delete library item.": ["Impossibile eliminare lâ€™elemento della libreria."],
            "LIBRARIES::Could not delete library.": ["Impossibile eliminare la libreria."],
            "LIBRARIES::Could not load libraries.": ["Impossibile caricare le librerie."],
            "LIBRARIES::Could not rename library.": ["Impossibile rinominare la libreria."],
            "LIBRARIES::Could not retrieve library items.": ["Impossibile recuperare gli elementi della libreria."],
            "LIBRARIES::Failed to create library.": ["Impossibile creare la libreria."],
            "LIBRARIES::RENAME::Cancel": ["Annulla"],
            "LIBRARIES::RENAME::Ok": ["OK"],
            "LIBRARIES::STATE::Licensed": ["Con licenza"],
            "LIBRARY::%d item": ["%d elemento", "%d elementi"],
            "LIBRARY::%s item": ["%s elemento", "%s elementi"],
            "LIBRARY::%s total": ["%s in totale", "%s in totale"],
            "LIBRARY::ACTION::Delete Library": ["Elimina libreria"],
            "LIBRARY::ACTION::Libraries": ["Librerie"],
            "LIBRARY::ACTION::Rename Library": ["Rinomina libreria"],
            "LIBRARY::MYLIBRARY::My Library": ["La mia libreria"],
            "MEMBER::DOWNLOAD::Buy": ["Acquista"],
            "MEMBER::DOWNLOAD::One-Time Download": ["Singolo download"],
            "MEMBER::DOWNLOAD::One-time Payment": ["Singolo pagamento"],
            "MEMBER::DOWNLOAD::You're out of licenses. What would you like to do?": ["Licenze esaurite. Come desiderate procedere?"],
            "MEMBER::DOWNLOAD::Your plan entitles you to %s image a month": ["Il vostro piano attuale comprende %s immagine al mese", "Il vostro piano attuale comprende %s immagini al mese"],
            "MEMBER::ERROR::Failed to purchase an additional license.": ["Acquisto della licenza aggiuntiva non riuscito."],
            "MEMBER::License Again": ["Richiedi altra licenza"],
            'MODAL::Are you sure you want to delete "%s"?': ["Intendete eliminare â€œ%sâ€?"],
            "MODAL::Cancel": ["Annulla"],
            "MODAL::Delete": ["Elimina"],
            'MODAL::Delete "%s"': ["Elimina â€œ%sâ€"],
            "MODAL::Ok": ["OK"],
            "MODAL::This library will no longer be available to anyone who shares it.": ["Questa libreria non sarÃ  piÃ¹ disponibile per chiunque la condivida."],
            "PHOTO::DOWNLOAD::Desktop": ["Desktop"],
            "PHOTO::DOWNLOAD::New Library": ["Nuova libreria"],
            "PLANS::Exclusive of VAT": ["IVA esclusa"],
            "PLANS::No GST payable": ["Esente da GST"],
            "PLANS::Not taxable": ["Esente da imposte"],
            "PLANS::Okay": ["OK"],
            "PLANS::There was an error upgrading your plan.": ["Si Ã¨ verificato un errore durante lâ€™aggiornamento del piano."],
            'PLANS::UPGRADE::By clicking the "Continue" button, you agree to the billing terms above.': ["Facendo clic sul pulsante â€œContinuaâ€, accettate i termini di fatturazione sopra riportati."],
            "PLANS::UPGRADE::Continue": ["Continua"],
            "PLANS::UPGRADE::Upgrade plan": ["Aggiorna piano"],
            "PLANS::UPGRADE::You've selected %s": ["Avete selezionato %s"],
            "PLANS::Upgrade": ["Aggiorna"],
            "PLANS::Upgrade error": ["Errore di aggiornamento"],
            "PURCHASE::ERROR::Sorry! You have no more images available in your subscription. More will become available next month.": ["Nellâ€™abbonamento non ci sono piÃ¹ immagini disponibili, ma lo saranno nuovamente il mese prossimo."],
            "PURCHASE::ERROR::You have %s license. Please contact your administrator to add licenses to your account.": ["Avete %s licenza. Contattate lâ€™amministratore per aggiungere licenze allâ€™account.", "Avete %s licenze. Contattate lâ€™amministratore per aggiungere licenze allâ€™account."]
        }
    },
    ja_JP: {
        adobestock: {
            "": {lang: "us", "plural-forms": "nplurals=2; plural=n != 1;"},
            "API::LIBRARIES::Payment error": ["æ”¯æ‰•ã‚¨ãƒ©ãƒ¼"],
            "API::LIBRARIES::We are experiencing technical difficulties. Please try again later.": ["æŠ€è¡“çš„ãªå•é¡ŒãŒç™ºç”Ÿã—ã¾ã—ãŸã€‚ã—ã°ã‚‰ãã—ã¦ã‹ã‚‰ã‚„ã‚Šç›´ã—ã¦ãã ã•ã„ã€‚"],
            "CHECKOUT::You now have access to a growing collection of millions of images, conveniently integrated into Adobe Illustrator CC, Adobe InDesign CC, Adobe Photoshop CC, Adobe After Effects CC and Adobe Premiere Pro CC.": ["Adobe Illustrator CCã€Adobe InDesign CCã€Adobe Photoshop CCã€Adobe After Effects CCã€Adobe Premiere Pro CC ã¨ç°¡å˜ã«é€£æºã—ã¦ã€ãªãŠå¢—ãˆç¶šã‘ã‚‹æ•°ç™¾ä¸‡ã«ãŠã‚ˆã¶ç”»åƒã®ã‚³ãƒ¬ã‚¯ã‚·ãƒ§ãƒ³ã«ã‚¢ã‚¯ã‚»ã‚¹ã§ãã‚‹ã‚ˆã†ã«ãªã‚Šã¾ã—ãŸã€‚"],
            "CHECKOUT::You're Ready to Go!": ["ãŠè©¦ã—ãã ã•ã„!"],
            "CONTENT::ERROR::Licenses for this image are no longer available.": ["ã“ã®ç”»åƒã®ãƒ©ã‚¤ã‚»ãƒ³ã‚¹ã¯åˆ©ç”¨ã§ãã¾ã›ã‚“ã€‚"],
            "DOWNLOAD::ERROR::An error occurred with your download.": ["ãƒ€ã‚¦ãƒ³ãƒ­ãƒ¼ãƒ‰ã§ã‚¨ãƒ©ãƒ¼ãŒç™ºç”Ÿã—ã¾ã—ãŸã€‚"],
            "DOWNLOAD::ERROR::If this problem persists, contact %sCustomer Service%s.": ["å•é¡ŒãŒç¶šãå ´åˆã¯ã€%sã‚«ã‚¹ã‚¿ãƒžãƒ¼ã‚µãƒ¼ãƒ“ã‚¹%sã«ãŠå•ã„åˆã‚ã›ãã ã•ã„ã€‚"],
            "DOWNLOAD::ERROR::There was a problem downloading your image. Please try again.": ["ç”»åƒã®ãƒ€ã‚¦ãƒ³ãƒ­ãƒ¼ãƒ‰ä¸­ã«å•é¡ŒãŒç™ºç”Ÿã—ã¾ã—ãŸã€‚ã‚‚ã†ä¸€åº¦ã‚„ã‚Šç›´ã—ã¦ãã ã•ã„ã€‚"],
            "FILE::ACTION::Are you sure you want to license this image again?": ["ã“ã®ç”»åƒã‚’ã‚‚ã†ä¸€åº¦ãƒ©ã‚¤ã‚»ãƒ³ã‚¹èªè¨¼ã—ã¾ã™ã‹ï¼Ÿ"],
            "FILE::ACTION::Buy Additional License": ["ãƒ©ã‚¤ã‚»ãƒ³ã‚¹ã‚’è¿½åŠ è³¼å…¥"],
            "FILE::ACTION::Buy Image": ["ç”»åƒã‚’è³¼å…¥"],
            "FILE::ACTION::Buy license & save to": ["ãƒ©ã‚¤ã‚»ãƒ³ã‚¹ã‚’è³¼å…¥ã—ã¦ä¿å­˜ï¼š"],
            "FILE::ACTION::Cancel": ["ã‚­ãƒ£ãƒ³ã‚»ãƒ«"],
            "FILE::ACTION::Downloading": ["ãƒ€ã‚¦ãƒ³ãƒ­ãƒ¼ãƒ‰ä¸­"],
            "FILE::ACTION::Find Similar": ["ä¼¼ãŸç”»åƒã‚’æ¤œç´¢"],
            "FILE::ACTION::License & save to": ["ãƒ©ã‚¤ã‚»ãƒ³ã‚¹ã‚’å–å¾—ã—ã¦ä¿å­˜ï¼š"],
            "FILE::ACTION::More From This Model": ["ã“ã®ãƒ¢ãƒ‡ãƒ«ã®ãã®ä»–ã®ç”»åƒ"],
            "FILE::ACTION::More From This Series": ["ã“ã®ã‚·ãƒªãƒ¼ã‚ºã®ãã®ä»–ã®ç”»åƒ"],
            "FILE::ACTION::Pay %s for this image?": ["ã“ã®ç”»åƒã‚’ %s ã§è³¼å…¥ã—ã¾ã™ã‹ï¼Ÿ"],
            "FILE::ACTION::Please wait...": ["ãŠå¾…ã¡ãã ã•ã„..."],
            "FILE::ACTION::Save Image to": ["ç”»åƒã‚’ä¿å­˜ï¼š"],
            "FILE::ACTION::Save Preview Image": ["ãƒ—ãƒ¬ãƒ“ãƒ¥ãƒ¼ç”»åƒã‚’ä¿å­˜"],
            "FILE::ACTION::Save Preview to": ["ãƒ—ãƒ¬ãƒ“ãƒ¥ãƒ¼ã‚’ä¿å­˜ï¼š"],
            "FILE::ACTION::Save to Desktop": ["ãƒ‡ã‚¹ã‚¯ãƒˆãƒƒãƒ—ã«ä¿å­˜"],
            "FILE::ACTION::Save to a Creative Cloud Library": ["Creative Cloud Libraries ã«ä¿å­˜"],
            "FILE::ACTION::Saved!": ["ä¿å­˜ã•ã‚Œã¾ã—ãŸ"],
            "FILE::ACTION::Saving...": ["ä¿å­˜ä¸­..."],
            "FILE::ACTION::See More": ["ã‚‚ã£ã¨è¦‹ã‚‹"],
            "FILE::ACTION::Similar Images": ["ä¼¼ãŸç”»åƒ"],
            "FILE::ACTION::Yes": ["ã¯ã„"],
            "FILE::ACTION::Your download will begin shortly": ["ãƒ€ã‚¦ãƒ³ãƒ­ãƒ¼ãƒ‰ãŒã™ãã«é–‹å§‹ã•ã‚Œã¾ã™"],
            "FILE::ACTION::Your image was saved to %s": ["ç”»åƒãŒä¿å­˜ã•ã‚Œã¾ã—ãŸ : %s"],
            "FILE::Author": ["ä½œæˆè€…"],
            "FILE::Category": ["ã‚«ãƒ†ã‚´ãƒª"],
            "FILE::File Number": ["ãƒ•ã‚¡ã‚¤ãƒ«ç•ªå·"],
            "FILE::Format": ["å½¢å¼"],
            "FILE::KEYWORDS::%s more": ["ãã®ä»– %s ãƒ¯ãƒ¼ãƒ‰ã‚’è¡¨ç¤º", "ãã®ä»– %s ãƒ¯ãƒ¼ãƒ‰ã‚’è¡¨ç¤º"],
            "FILE::Keywords": ["ã‚­ãƒ¼ãƒ¯ãƒ¼ãƒ‰"],
            "FILE::Size": ["ã‚µã‚¤ã‚º"],
            "FILE::px": ["px"],
            "GENERIC::Something Went Wrong": ["å•é¡ŒãŒç™ºç”Ÿã—ã¾ã—ãŸ"],
            "HEADER::MEMBER::Image": ["ç”»åƒ", "ç”»åƒ"],
            "IMAGE::DETAIL::MODAL::BUTTON::OK": ["OK"],
            "IMAGE::DETAIL::MODAL::DESCRIPTION::Images can be saved to Creative Cloud Libraries, or to your desktop. You can change your saving location here.": ["ç”»åƒã¯ Creative Cloud Libraries ã¾ãŸã¯ãƒ‡ã‚¹ã‚¯ãƒˆãƒƒãƒ—ã«ä¿å­˜ã§ãã¾ã™ã€‚ä¿å­˜å ´æ‰€ã¯ã“ã“ã‹ã‚‰å¤‰æ›´ã§ãã¾ã™ã€‚"],
            "IMAGE::DETAIL::MODAL::DESCRIPTION::Images saved to libraries will appear in the Libraries panel within any libraries-enabled Adobe application.": ["ãƒ©ã‚¤ãƒ–ãƒ©ãƒªã«ä¿å­˜ã—ãŸç”»åƒã¯ã€ãƒ©ã‚¤ãƒ–ãƒ©ãƒªå¯¾å¿œã®ã‚¢ãƒ‰ãƒ“ã‚¢ãƒ—ãƒªã‚±ãƒ¼ã‚·ãƒ§ãƒ³å†…ã®ãƒ©ã‚¤ãƒ–ãƒ©ãƒªãƒ‘ãƒãƒ«ã«è¡¨ç¤ºã•ã‚Œã¾ã™ã€‚"],
            "IMAGE::DETAIL::MODAL::TITLE::Saving Images": ["ç”»åƒã‚’ä¿å­˜ã—ã¦ã„ã¾ã™"],
            "LIB::MENU::Add new library": ["æ–°è¦ãƒ©ã‚¤ãƒ–ãƒ©ãƒªä½œæˆ"],
            "LIB::MENU::Buy License & Save to": ["ãƒ©ã‚¤ã‚»ãƒ³ã‚¹ã‚’è³¼å…¥ã—ã¦ä¿å­˜ï¼š"],
            "LIB::MENU::Create a free account to save images.": ["ç„¡æ–™ã‚¢ã‚«ã‚¦ãƒ³ãƒˆã‚’ä½œæˆã—ã¦ç”»åƒã‚’ä¿å­˜ã§ãã¾ã™ã€‚"],
            "LIB::MENU::Create an Account": ["ã‚¢ã‚«ã‚¦ãƒ³ãƒˆã‚’ä½œæˆ"],
            "LIB::MENU::Creating Library...": ["æ–°è¦ãƒ©ã‚¤ãƒ–ãƒ©ãƒªã‚’ä½œæˆä¸­..."],
            "LIB::MENU::Delete This Image": ["ã“ã®ç”»åƒã‚’å‰Šé™¤"],
            "LIB::MENU::Find Similar Images": ["ä¼¼ãŸç”»åƒã‚’æ¤œç´¢"],
            "LIB::MENU::License & Save to": ["ãƒ©ã‚¤ã‚»ãƒ³ã‚¹ã‚’å–å¾—ã—ã¦ä¿å­˜ï¼š"],
            "LIB::MENU::Log In": ["ãƒ­ã‚°ã‚¤ãƒ³"],
            "LIB::MENU::Save Preview to": ["ãƒ—ãƒ¬ãƒ“ãƒ¥ãƒ¼ã‚’ä¿å­˜ï¼š"],
            "LIB::MENU::Save to": ["ç”»åƒã‚’ä¿å­˜ï¼š"],
            "LIB::MENU::Save to Desktop": ["ãƒ‡ã‚¹ã‚¯ãƒˆãƒƒãƒ—ã«ä¿å­˜"],
            "LIB::MENU::Save to a Creative Cloud Library": ["Creative Cloud Libraries ã«ä¿å­˜"],
            "LIB::MENU::Saved!": ["ä¿å­˜ã•ã‚Œã¾ã—ãŸ"],
            "LIB::MENU::Saving...": ["ä¿å­˜ä¸­..."],
            "LIB::MENU::Your image was saved to": ["ç”»åƒãŒä¿å­˜ã•ã‚Œã¾ã—ãŸ :"],
            "LIB::OVERAGE::Cancel": ["ã‚­ãƒ£ãƒ³ã‚»ãƒ«"],
            "LIB::OVERAGE::NO_ABBREVIATION::Exclusive of VAT": ["æ¶ˆè²»ç¨ŽæŠœã"],
            "LIB::OVERAGE::NO_ABBREVIATION::No GST payable": ["(ä¸èª²ç¨Ž)"],
            "LIB::OVERAGE::NO_ABBREVIATION::Not taxable": ["ä¸èª²ç¨Ž"],
            "LIB::OVERAGE::Yes": ["ã¯ã„"],
            "LIBRARIES::Could not add to library.": ["ãƒ©ã‚¤ãƒ–ãƒ©ãƒªã«è¿½åŠ ã§ãã¾ã›ã‚“ã§ã—ãŸã€‚"],
            "LIBRARIES::Could not delete library item.": ["ãƒ©ã‚¤ãƒ–ãƒ©ãƒªã‚¢ã‚¤ãƒ†ãƒ ã‚’å‰Šé™¤ã§ãã¾ã›ã‚“ã§ã—ãŸã€‚"],
            "LIBRARIES::Could not delete library.": ["ãƒ©ã‚¤ãƒ–ãƒ©ãƒªã‚’å‰Šé™¤ã§ãã¾ã›ã‚“ã§ã—ãŸã€‚"],
            "LIBRARIES::Could not load libraries.": ["ãƒ©ã‚¤ãƒ–ãƒ©ãƒªã‚’èª­ã¿è¾¼ã‚ã¾ã›ã‚“ã§ã—ãŸã€‚"],
            "LIBRARIES::Could not rename library.": ["ãƒ©ã‚¤ãƒ–ãƒ©ãƒªã®åå‰ã‚’å¤‰æ›´ã§ãã¾ã›ã‚“ã§ã—ãŸã€‚"],
            "LIBRARIES::Could not retrieve library items.": ["ãƒ©ã‚¤ãƒ–ãƒ©ãƒªã‚¢ã‚¤ãƒ†ãƒ ã‚’å–å¾—ã§ãã¾ã›ã‚“ã§ã—ãŸã€‚"],
            "LIBRARIES::Failed to create library.": ["ãƒ©ã‚¤ãƒ–ãƒ©ãƒªã®ä½œæˆã«å¤±æ•—ã—ã¾ã—ãŸ"],
            "LIBRARIES::RENAME::Cancel": ["ã‚­ãƒ£ãƒ³ã‚»ãƒ«"],
            "LIBRARIES::RENAME::Ok": ["OK"],
            "LIBRARIES::STATE::Licensed": ["ãƒ©ã‚¤ã‚»ãƒ³ã‚¹èªè¨¼æ¸ˆ"],
            "LIBRARY::%d item": ["%d ã‚¢ã‚¤ãƒ†ãƒ ", "%d ã‚¢ã‚¤ãƒ†ãƒ "],
            "LIBRARY::%s item": ["%s ã‚¢ã‚¤ãƒ†ãƒ ", "%s ã‚¢ã‚¤ãƒ†ãƒ "],
            "LIBRARY::%s total": ["åˆè¨ˆ %s å€‹", "åˆè¨ˆ %s å€‹"],
            "LIBRARY::ACTION::Delete Library": ["ãƒ©ã‚¤ãƒ–ãƒ©ãƒªã‚’å‰Šé™¤"],
            "LIBRARY::ACTION::Libraries": ["ãƒ©ã‚¤ãƒ–ãƒ©ãƒª"],
            "LIBRARY::ACTION::Rename Library": ["ãƒ©ã‚¤ãƒ–ãƒ©ãƒªåã®å¤‰æ›´"],
            "LIBRARY::MYLIBRARY::My Library": ["ãƒžã‚¤ãƒ©ã‚¤ãƒ–ãƒ©ãƒª"],
            "MEMBER::DOWNLOAD::Buy": ["è³¼å…¥ã™ã‚‹"],
            "MEMBER::DOWNLOAD::One-Time Download": ["å˜å“ç”»åƒã‚’è³¼å…¥"],
            "MEMBER::DOWNLOAD::One-time Payment": ["ä¸€å›žæ‰•ã„"],
            "MEMBER::DOWNLOAD::You're out of licenses. What would you like to do?": ["ãƒ©ã‚¤ã‚»ãƒ³ã‚¹æ®‹æ•°ãŒã‚ã‚Šã¾ã›ã‚“ã€‚è³¼å…¥ã—ã¾ã™ã‹ï¼Ÿ"],
            "MEMBER::DOWNLOAD::Your plan entitles you to %s image a month": ["ã”åˆ©ç”¨ã®ãƒ—ãƒ©ãƒ³ã§ã¯ã€ç”»åƒ %s ç‚¹/æœˆãŒåˆ©ç”¨å¯èƒ½ã§ã™", "ã”åˆ©ç”¨ã®ãƒ—ãƒ©ãƒ³ã§ã¯ã€ç”»åƒ %s ç‚¹/æœˆãŒåˆ©ç”¨å¯èƒ½ã§ã™"],
            "MEMBER::ERROR::Failed to purchase an additional license.": ["è¿½åŠ ã®ãƒ©ã‚¤ã‚»ãƒ³ã‚¹ã‚’è³¼å…¥ã§ãã¾ã›ã‚“ã§ã—ãŸã€‚"],
            "MEMBER::License Again": ["ã‚‚ã†ä¸€åº¦ãƒ©ã‚¤ã‚»ãƒ³ã‚¹èªè¨¼ã™ã‚‹"],
            'MODAL::Are you sure you want to delete "%s"?': ["ã€Œ%sã€ã‚’å‰Šé™¤ã—ã¦ã‚ˆã‚ã—ã„ã§ã™ã‹ï¼Ÿ"],
            "MODAL::Cancel": ["ã‚­ãƒ£ãƒ³ã‚»ãƒ«"],
            "MODAL::Delete": ["å‰Šé™¤"],
            'MODAL::Delete "%s"': ["ã€Œ%sã€ã‚’å‰Šé™¤"],
            "MODAL::Ok": ["OK"],
            "MODAL::This library will no longer be available to anyone who shares it.": ["ã“ã®ãƒ©ã‚¤ãƒ–ãƒ©ãƒªã‚’å…±æœ‰ã—ã¦ã„ã‚‹ãƒ¦ãƒ¼ã‚¶ãƒ¼ã¯ã€ã“ã®ãƒ©ã‚¤ãƒ–ãƒ©ãƒªã‚’ä½¿ç”¨ã§ããªããªã‚Šã¾ã™ã€‚"],
            "PHOTO::DOWNLOAD::Desktop": ["ãƒ‡ã‚¹ã‚¯ãƒˆãƒƒãƒ—"],
            "PHOTO::DOWNLOAD::New Library": ["æ–°è¦ãƒ©ã‚¤ãƒ–ãƒ©ãƒª"],
            "PLANS::Exclusive of VAT": ["æ¶ˆè²»ç¨ŽæŠœã"],
            "PLANS::No GST payable": ["(ä¸èª²ç¨Ž)"],
            "PLANS::Not taxable": ["ä¸èª²ç¨Ž"],
            "PLANS::Okay": ["OK"],
            "PLANS::There was an error upgrading your plan.": ["ãƒ—ãƒ©ãƒ³ã®å¤‰æ›´ä¸­ã«ã‚¨ãƒ©ãƒ¼ãŒç™ºç”Ÿã—ã¾ã—ãŸ"],
            'PLANS::UPGRADE::By clicking the "Continue" button, you agree to the billing terms above.': ["ã€Œç¶šè¡Œã€ãƒœã‚¿ãƒ³ã‚’ã‚¯ãƒªãƒƒã‚¯ã™ã‚‹ã¨ã€ä¸Šè¨˜ã®è«‹æ±‚æ¡ä»¶ã«åŒæ„ã—ãŸã‚‚ã®ã¨è¦‹ãªã•ã‚Œã¾ã™ã€‚"],
            "PLANS::UPGRADE::Continue": ["ç¶šè¡Œ"],
            "PLANS::UPGRADE::Upgrade plan": ["ãƒ—ãƒ©ãƒ³ã‚’å¤‰æ›´ã™ã‚‹"],
            "PLANS::UPGRADE::You've selected %s": ["%s ã‚’é¸æŠžã—ã¾ã—ãŸ"],
            "PLANS::Upgrade": ["ã‚¢ãƒƒãƒ—ã‚°ãƒ¬ãƒ¼ãƒ‰"],
            "PLANS::Upgrade error": ["ã‚¢ãƒƒãƒ—ã‚°ãƒ¬ãƒ¼ãƒ‰ã‚¨ãƒ©ãƒ¼"],
            "PURCHASE::ERROR::Sorry! You have no more images available in your subscription. More will become available next month.": ["ã‚µãƒ–ã‚¹ã‚¯ãƒªãƒ—ã‚·ãƒ§ãƒ³ã«ä½¿ç”¨ã§ãã‚‹ç”»åƒãŒã‚ã‚Šã¾ã›ã‚“ã€‚ç”»åƒãŒä½¿ç”¨ã§ãã‚‹ã‚ˆã†ã«ãªã‚‹æ¥æœˆã¾ã§ãŠå¾…ã¡ãã ã•ã„ã€‚"],
            "PURCHASE::ERROR::You have %s license. Please contact your administrator to add licenses to your account.": ["ãƒ©ã‚¤ã‚»ãƒ³ã‚¹æ®‹æ•°ã¯ %s ã¤ã§ã™ã€‚ã‚¢ã‚«ã‚¦ãƒ³ãƒˆã«ãƒ©ã‚¤ã‚»ãƒ³ã‚¹ã‚’è¿½åŠ ã™ã‚‹ã«ã¯ã€ç®¡ç†è€…ã«ãŠå•ã„åˆã‚ã›ãã ã•ã„ã€‚", "ãƒ©ã‚¤ã‚»ãƒ³ã‚¹æ®‹æ•°ã¯ %s ã¤ã§ã™ã€‚ã‚¢ã‚«ã‚¦ãƒ³ãƒˆã«ãƒ©ã‚¤ã‚»ãƒ³ã‚¹ã‚’è¿½åŠ ã™ã‚‹ã«ã¯ã€ç®¡ç†è€…ã«ãŠå•ã„åˆã‚ã›ãã ã•ã„ã€‚"]
        }
    },
    nl_NL: {
        adobestock: {
            "": {lang: "us", "plural-forms": "nplurals=2; plural=n != 1;"},
            "API::LIBRARIES::Payment error": ["Fout met betaling"],
            "API::LIBRARIES::We are experiencing technical difficulties. Please try again later.": ["Er zijn momenteel technische problemen. Probeer het later opnieuw."],
            "CHECKOUT::You now have access to a growing collection of millions of images, conveniently integrated into Adobe Illustrator CC, Adobe InDesign CC, Adobe Photoshop CC, Adobe After Effects CC and Adobe Premiere Pro CC.": ["U hebt nu toegang tot een groeiende verzameling van miljoenen afbeeldingen die is geÃ¯ntegreerd in Adobe Illustrator CC, Adobe InDesign CC, Adobe Photoshop CC, Adobe After Effects CC en Adobe Premiere Pro CC."],
            "CHECKOUT::You're Ready to Go!": ["U kunt aan de slag."],
            "CONTENT::ERROR::Licenses for this image are no longer available.": ["Er zijn geen licenties meer beschikbaar voor deze afbeelding."],
            "DOWNLOAD::ERROR::An error occurred with your download.": ["Er is een fout opgetreden met de download."],
            "DOWNLOAD::ERROR::If this problem persists, contact %sCustomer Service%s.": ["Neem contact op met de %sklantenservice%s als het probleem aanhoudt."],
            "DOWNLOAD::ERROR::There was a problem downloading your image. Please try again.": ["Er is een probleem opgetreden bij het downloaden van de afbeelding. Probeer het opnieuw."],
            "FILE::ACTION::Are you sure you want to license this image again?": ["Weet u zeker dat u deze afbeelding opnieuw wilt licentiÃ«ren?"],
            "FILE::ACTION::Buy Additional License": ["Aanvullende licentie kopen"],
            "FILE::ACTION::Buy Image": ["Afbeelding kopen"],
            "FILE::ACTION::Buy license & save to": ["Licentie kopen en opslaan in"],
            "FILE::ACTION::Cancel": ["Annuleren"],
            "FILE::ACTION::Downloading": ["Downloaden..."],
            "FILE::ACTION::Find Similar": ["Vergelijkbare items zoeken"],
            "FILE::ACTION::License & save to": ["Licentie kopen en opslaan in"],
            "FILE::ACTION::More From This Model": ["Meer van dit model"],
            "FILE::ACTION::More From This Series": ["Meer uit deze reeks"],
            "FILE::ACTION::Pay %s for this image?": ["%s betalen voor deze afbeelding?"],
            "FILE::ACTION::Please wait...": ["Een ogenblik geduld..."],
            "FILE::ACTION::Save Image to": ["Afbeelding opslaan naar"],
            "FILE::ACTION::Save Preview Image": ["Voorbeeldafbeelding opslaan"],
            "FILE::ACTION::Save Preview to": ["Voorvertoning opslaan in"],
            "FILE::ACTION::Save to Desktop": ["Opslaan op bureaublad"],
            "FILE::ACTION::Save to a Creative Cloud Library": ["Opslaan in een Creative Cloud-bibliotheek"],
            "FILE::ACTION::Saved!": ["Opgeslagen!"],
            "FILE::ACTION::Saving...": ["Bezig met opslaan..."],
            "FILE::ACTION::See More": ["Meer weergeven"],
            "FILE::ACTION::Similar Images": ["Vergelijkbare afbeeldingen"],
            "FILE::ACTION::Yes": ["Ja"],
            "FILE::ACTION::Your download will begin shortly": ["Uw download begint over enkele ogenblikken"],
            "FILE::ACTION::Your image was saved to %s": ["De afbeelding is opgeslagen in %s"],
            "FILE::Author": ["Auteur"],
            "FILE::Category": ["Categorie"],
            "FILE::File Number": ["Bestandsnummer"],
            "FILE::Format": ["Indeling"],
            "FILE::KEYWORDS::%s more": ["%s meer", "%s meer"],
            "FILE::Keywords": ["Trefwoorden"],
            "FILE::Size": ["Grootte"],
            "FILE::px": ["px"],
            "GENERIC::Something Went Wrong": ["Er is iets fout gegaan"],
            "HEADER::MEMBER::Image": ["Afbeelding", "Afbeeldingen"],
            "IMAGE::DETAIL::MODAL::BUTTON::OK": ["OK"],
            "IMAGE::DETAIL::MODAL::DESCRIPTION::Images can be saved to Creative Cloud Libraries, or to your desktop. You can change your saving location here.": ["U kunt afbeeldingen opslaan in Creative Cloud Libraries of op uw computer. U kunt de opslaglocatie hier wijzigen."],
            "IMAGE::DETAIL::MODAL::DESCRIPTION::Images saved to libraries will appear in the Libraries panel within any libraries-enabled Adobe application.": ["Afbeeldingen die zijn opgeslagen in bibliotheken, worden weergegeven in het deelvenster Bibliotheken in elke Adobe-toepassing waarvoor bibliotheken zijn ingeschakeld."],
            "IMAGE::DETAIL::MODAL::TITLE::Saving Images": ["Afbeeldingen opslaan"],
            "LIB::MENU::Add new library": ["Nieuwe bibliotheek"],
            "LIB::MENU::Buy License & Save to": ["Licentie kopen en opslaan in"],
            "LIB::MENU::Create a free account to save images.": ["Maak een gratis account om afbeeldingen op te slaan."],
            "LIB::MENU::Create an Account": ["Een account maken"],
            "LIB::MENU::Creating Library...": ["Bibliotheek maken..."],
            "LIB::MENU::Delete This Image": ["Deze afbeelding verwijderen"],
            "LIB::MENU::Find Similar Images": ["Vergelijkbare afbeeldingen zoeken"],
            "LIB::MENU::License & Save to": ["Licentie kopen en opslaan in"],
            "LIB::MENU::Log In": ["Aanmelden"],
            "LIB::MENU::Save Preview to": ["Voorvertoning opslaan in"],
            "LIB::MENU::Save to": ["Opslaan in"],
            "LIB::MENU::Save to Desktop": ["Opslaan op bureaublad"],
            "LIB::MENU::Save to a Creative Cloud Library": ["Opslaan in een Creative Cloud-bibliotheek"],
            "LIB::MENU::Saved!": ["Opgeslagen!"],
            "LIB::MENU::Saving...": ["Bezig met opslaan..."],
            "LIB::MENU::Your image was saved to": ["De afbeelding is opgeslagen in"],
            "LIB::OVERAGE::Cancel": ["Annuleren"],
            "LIB::OVERAGE::NO_ABBREVIATION::Exclusive of VAT": ["Exclusief btw"],
            "LIB::OVERAGE::NO_ABBREVIATION::No GST payable": ["Zonder te betalen GST"],
            "LIB::OVERAGE::NO_ABBREVIATION::Not taxable": ["Niet belastbaar"],
            "LIB::OVERAGE::Yes": ["Ja"],
            "LIBRARIES::Could not add to library.": ["Kan niet toevoegen aan bibliotheek."],
            "LIBRARIES::Could not delete library item.": ["Kan bibliotheekitem niet verwijderen."],
            "LIBRARIES::Could not delete library.": ["Kan bibliotheek niet verwijderen."],
            "LIBRARIES::Could not load libraries.": ["Kan bibliotheken niet laden."],
            "LIBRARIES::Could not rename library.": ["Kan bibliotheeknaam niet wijzigen."],
            "LIBRARIES::Could not retrieve library items.": ["Kan bibliotheekitems niet ophalen."],
            "LIBRARIES::Failed to create library.": ["Bibliotheek maken mislukt."],
            "LIBRARIES::RENAME::Cancel": ["Annuleren"],
            "LIBRARIES::RENAME::Ok": ["OK"],
            "LIBRARIES::STATE::Licensed": ["Licentie"],
            "LIBRARY::%d item": ["%d item", "%d items"],
            "LIBRARY::%s item": ["%s item", "%s items"],
            "LIBRARY::%s total": ["%s totaal", "%s totaal"],
            "LIBRARY::ACTION::Delete Library": ["Bibliotheek verwijderen"],
            "LIBRARY::ACTION::Libraries": ["Bibliotheken"],
            "LIBRARY::ACTION::Rename Library": ["Bibliotheeknaam wijzigen"],
            "LIBRARY::MYLIBRARY::My Library": ["Mijn bibliotheek"],
            "MEMBER::DOWNLOAD::Buy": ["Kopen"],
            "MEMBER::DOWNLOAD::One-Time Download": ["Eenmalige download"],
            "MEMBER::DOWNLOAD::One-time Payment": ["Eenmalige betaling"],
            "MEMBER::DOWNLOAD::You're out of licenses. What would you like to do?": ["U hebt geen licenties meer. Wat wilt u doen?"],
            "MEMBER::DOWNLOAD::Your plan entitles you to %s image a month": ["Met jouw lidmaatschap heb je recht op %s afbeelding per maand", "Met jouw lidmaatschap heb je recht op %s afbeeldingen per maand"],
            "MEMBER::ERROR::Failed to purchase an additional license.": ["Kan geen aanvullende licentie kopen."],
            "MEMBER::License Again": ["Opnieuw licentiÃ«ren"],
            'MODAL::Are you sure you want to delete "%s"?': ["Weet u zeker dat u â€œ%sâ€ wilt verwijderen?"],
            "MODAL::Cancel": ["Annuleren"],
            "MODAL::Delete": ["Verwijderen"],
            'MODAL::Delete "%s"': ["â€œ%sâ€ verwijderen"],
            "MODAL::Ok": ["OK"],
            "MODAL::This library will no longer be available to anyone who shares it.": ["Deze bibliotheek is niet meer beschikbaar voor mensen die deze delen."],
            "PHOTO::DOWNLOAD::Desktop": ["Desktop"],
            "PHOTO::DOWNLOAD::New Library": ["Nieuwe bibliotheek"],
            "PLANS::Exclusive of VAT": ["Exclusief btw"],
            "PLANS::No GST payable": ["Zonder te betalen GST"],
            "PLANS::Not taxable": ["Niet belastbaar"],
            "PLANS::Okay": ["OkÃ©"],
            "PLANS::There was an error upgrading your plan.": ["Er is een fout opgetreden bij het upgraden van uw lidmaatschap."],
            'PLANS::UPGRADE::By clicking the "Continue" button, you agree to the billing terms above.': ['Als u op "Doorgaan"klikt, gaat u akkoord met de bovenstaande factureringsvoorwaarden.'],
            "PLANS::UPGRADE::Continue": ["Doorgaan"],
            "PLANS::UPGRADE::Upgrade plan": ["Lidmaatschap upgraden"],
            "PLANS::UPGRADE::You've selected %s": ["U hebt %s geselecteerd"],
            "PLANS::Upgrade": ["Upgrade uitvoeren"],
            "PLANS::Upgrade error": ["Upgradefout"],
            "PURCHASE::ERROR::Sorry! You have no more images available in your subscription. More will become available next month.": ["U hebt geen afbeeldingen meer in uw abonnement. Volgende maand zijn er meer afbeeldingen beschikbaar."],
            "PURCHASE::ERROR::You have %s license. Please contact your administrator to add licenses to your account.": ["U hebt %s licentie. Neem contact op met uw beheerder om licenties aan uw account toe te voegen.", "U hebt %s licenties. Neem contact op met uw beheerder om licenties aan uw account toe te voegen."]
        }
    },
    nb_NO: {
        adobestock: {
            "": {lang: "us", "plural-forms": "nplurals=2; plural=n != 1;"},
            "API::LIBRARIES::Payment error": ["Betalingsfeil"],
            "API::LIBRARIES::We are experiencing technical difficulties. Please try again later.": ["Vi har tekniske problemer. PrÃ¸v igjen senere."],
            "CHECKOUT::You now have access to a growing collection of millions of images, conveniently integrated into Adobe Illustrator CC, Adobe InDesign CC, Adobe Photoshop CC, Adobe After Effects CC and Adobe Premiere Pro CC.": ["Du har nÃ¥ tilgang til en stadig voksende samling med millioner av bilder, som er integrert i Adobe Illustrator CC, Adobe InDesign CC, Adobe Photoshop CC, Adobe After Effects CC og Adobe Premiere Pro CC."],
            "CHECKOUT::You're Ready to Go!": ["Du er klar!"],
            "CONTENT::ERROR::Licenses for this image are no longer available.": ["Lisensene for dette bildet er ikke lenger tilgjengelige."],
            "DOWNLOAD::ERROR::An error occurred with your download.": ["Det oppstod en feil under nedlastingen."],
            "DOWNLOAD::ERROR::If this problem persists, contact %sCustomer Service%s.": ["Hvis dette problemet vedvarer, kan du kontakte %skundestÃ¸tte%s."],
            "DOWNLOAD::ERROR::There was a problem downloading your image. Please try again.": ["Det oppstod en feil under nedlastingen av bildet. PrÃ¸v igjen."],
            "FILE::ACTION::Are you sure you want to license this image again?": ["Er du sikker pÃ¥ at du vil lisensiere dette bildet igjen?"],
            "FILE::ACTION::Buy Additional License": ["KjÃ¸p ekstra lisens"],
            "FILE::ACTION::Buy Image": ["KjÃ¸p bilde"],
            "FILE::ACTION::Buy license & save to": ["KjÃ¸p lisens og lagre pÃ¥"],
            "FILE::ACTION::Cancel": ["Avbryt"],
            "FILE::ACTION::Downloading": ["Laster ned"],
            "FILE::ACTION::Find Similar": ["Finn lignende"],
            "FILE::ACTION::License & save to": ["Lisensier og lagre i"],
            "FILE::ACTION::More From This Model": ["Mer fra denne modellen"],
            "FILE::ACTION::More From This Series": ["Mer fra denne serien"],
            "FILE::ACTION::Pay %s for this image?": ["Betale %s for dette bildet?"],
            "FILE::ACTION::Please wait...": ["Vent litt ..."],
            "FILE::ACTION::Save Image to": ["Lagre bilde pÃ¥"],
            "FILE::ACTION::Save Preview Image": ["Lagre forhÃ¥ndsvisningsbilde"],
            "FILE::ACTION::Save Preview to": ["Lagre forhÃ¥ndsvisning i"],
            "FILE::ACTION::Save to Desktop": ["Lagre pÃ¥ skrivebord"],
            "FILE::ACTION::Save to a Creative Cloud Library": ["Lagre i et Creative Cloud-bibliotek"],
            "FILE::ACTION::Saved!": ["Lagret!"],
            "FILE::ACTION::Saving...": ["Lagrer..."],
            "FILE::ACTION::See More": ["Se flere"],
            "FILE::ACTION::Similar Images": ["Lignende bilder"],
            "FILE::ACTION::Yes": ["Ja"],
            "FILE::ACTION::Your download will begin shortly": ["Nedlastingen starter snart"],
            "FILE::ACTION::Your image was saved to %s": ["Bildet ble lagret pÃ¥ %s"],
            "FILE::Author": ["Forfatter"],
            "FILE::Category": ["Kategori"],
            "FILE::File Number": ["Filnummer"],
            "FILE::Format": ["Format"],
            "FILE::KEYWORDS::%s more": ["%s til", "%s til"],
            "FILE::Keywords": ["NÃ¸kkelord"],
            "FILE::Size": ["StÃ¸rrelse"],
            "FILE::px": ["bp"],
            "GENERIC::Something Went Wrong": ["Noe gikk galt"],
            "HEADER::MEMBER::Image": ["Bilde", "Bilder"],
            "IMAGE::DETAIL::MODAL::BUTTON::OK": ["OK"],
            "IMAGE::DETAIL::MODAL::DESCRIPTION::Images can be saved to Creative Cloud Libraries, or to your desktop. You can change your saving location here.": ["Bilder kan lagres i Creative Cloud Libraries eller pÃ¥ skrivebordet. Du kan endre lagringssted her."],
            "IMAGE::DETAIL::MODAL::DESCRIPTION::Images saved to libraries will appear in the Libraries panel within any libraries-enabled Adobe application.": ["Bilder som lagres i biblioteker, vises i Libraries-panelet i Adobe-applikasjoner som stÃ¸tter Libraries."],
            "IMAGE::DETAIL::MODAL::TITLE::Saving Images": ["Lagrer bilder"],
            "LIB::MENU::Add new library": ["Legg til nytt bibliotek"],
            "LIB::MENU::Buy License & Save to": ["KjÃ¸p lisens og lagre pÃ¥"],
            "LIB::MENU::Create a free account to save images.": ["Opprett en gratiskonto for lagring av bilder."],
            "LIB::MENU::Create an Account": ["Opprett en konto"],
            "LIB::MENU::Creating Library...": ["Oppretter bibliotek ..."],
            "LIB::MENU::Delete This Image": ["Slett dette bildet"],
            "LIB::MENU::Find Similar Images": ["Finn lignende bilder"],
            "LIB::MENU::License & Save to": ["Lisensier og lagre pÃ¥"],
            "LIB::MENU::Log In": ["Logg pÃ¥"],
            "LIB::MENU::Save Preview to": ["Lagre forhÃ¥ndsvisning i"],
            "LIB::MENU::Save to": ["Lagre pÃ¥"],
            "LIB::MENU::Save to Desktop": ["Lagre pÃ¥ skrivebord"],
            "LIB::MENU::Save to a Creative Cloud Library": ["Lagre i et Creative Cloud-bibliotek"],
            "LIB::MENU::Saved!": ["Lagret!"],
            "LIB::MENU::Saving...": ["Lagrer..."],
            "LIB::MENU::Your image was saved to": ["Bildet ble lagret pÃ¥"],
            "LIB::OVERAGE::Cancel": ["Avbryt"],
            "LIB::OVERAGE::NO_ABBREVIATION::Exclusive of VAT": ["Uten moms"],
            "LIB::OVERAGE::NO_ABBREVIATION::No GST payable": ["Ingen GST tilkommer"],
            "LIB::OVERAGE::NO_ABBREVIATION::Not taxable": ["Ikke mva-pliktig"],
            "LIB::OVERAGE::Yes": ["Ja"],
            "LIBRARIES::Could not add to library.": ["Kan ikke legge til i bibliotek."],
            "LIBRARIES::Could not delete library item.": ["Kan ikke slette bibliotekelement."],
            "LIBRARIES::Could not delete library.": ["Kan ikke slette bibliotek."],
            "LIBRARIES::Could not load libraries.": ["Kan ikke laste inn biblioteker."],
            "LIBRARIES::Could not rename library.": ["Kan ikke endre navn pÃ¥ bibliotek."],
            "LIBRARIES::Could not retrieve library items.": ["Kan ikke hente bibliotekelementer."],
            "LIBRARIES::Failed to create library.": ["Kunne ikke opprette biblioteket."],
            "LIBRARIES::RENAME::Cancel": ["Avbryt"],
            "LIBRARIES::RENAME::Ok": ["OK"],
            "LIBRARIES::STATE::Licensed": ["Lisensiert"],
            "LIBRARY::%d item": ["%d element", "%d elementer"],
            "LIBRARY::%s item": ["%s element", "%s elementer"],
            "LIBRARY::%s total": ["%s totalt", "%s totalt"],
            "LIBRARY::ACTION::Delete Library": ["Slett bibliotek"],
            "LIBRARY::ACTION::Libraries": ["Biblioteker"],
            "LIBRARY::ACTION::Rename Library": ["Gi nytt navn til bibliotek"],
            "LIBRARY::MYLIBRARY::My Library": ["Mitt bibliotek"],
            "MEMBER::DOWNLOAD::Buy": ["KjÃ¸p"],
            "MEMBER::DOWNLOAD::One-Time Download": ["Engangsnedlasting"],
            "MEMBER::DOWNLOAD::One-time Payment": ["Engangsbetaling"],
            "MEMBER::DOWNLOAD::You're out of licenses. What would you like to do?": ["Du har ikke flere lisenser. Hva vil du gjÃ¸re?"],
            "MEMBER::DOWNLOAD::Your plan entitles you to %s image a month": ["Planen din gir deg %s bilde i mÃ¥neden", "Planen din gir deg %s bilder i mÃ¥neden"],
            "MEMBER::ERROR::Failed to purchase an additional license.": ["Kan ikke kjÃ¸pe en lisens til."],
            "MEMBER::License Again": ["Lisensier pÃ¥ nytt"],
            'MODAL::Are you sure you want to delete "%s"?': ["Er du sikker pÃ¥ at du vil slette %s?"],
            "MODAL::Cancel": ["Avbryt"],
            "MODAL::Delete": ["Slett"],
            'MODAL::Delete "%s"': ["Slett %s"],
            "MODAL::Ok": ["OK"],
            "MODAL::This library will no longer be available to anyone who shares it.": ["Dette biblioteket vil ikke lenger vÃ¦re tilgjengelig for de som deler det."],
            "PHOTO::DOWNLOAD::Desktop": ["Skrivebord"],
            "PHOTO::DOWNLOAD::New Library": ["Nytt bibliotek"],
            "PLANS::Exclusive of VAT": ["Uten moms"],
            "PLANS::No GST payable": ["Ingen GST tilkommer"],
            "PLANS::Not taxable": ["Ikke mva-pliktig"],
            "PLANS::Okay": ["OK"],
            "PLANS::There was an error upgrading your plan.": ["Det oppstod en feil ved oppgradering av planen din."],
            'PLANS::UPGRADE::By clicking the "Continue" button, you agree to the billing terms above.': ["Ved Ã¥ klikke pÃ¥ Fortsett godtar du faktureringsvilkÃ¥rene ovenfor."],
            "PLANS::UPGRADE::Continue": ["Fortsett"],
            "PLANS::UPGRADE::Upgrade plan": ["Oppgrader planen"],
            "PLANS::UPGRADE::You've selected %s": ["Du har valgt %s"],
            "PLANS::Upgrade": ["Oppgrader"],
            "PLANS::Upgrade error": ["Oppgraderingsfeil"],
            "PURCHASE::ERROR::Sorry! You have no more images available in your subscription. More will become available next month.": ["Beklager, du har ikke tilgang til flere bilder i abonnementet ditt. Flere blir tilgjengelige neste mÃ¥ned."],
            "PURCHASE::ERROR::You have %s license. Please contact your administrator to add licenses to your account.": ["Du har %s lisens. Kontakt systemansvarlig for Ã¥ legge til flere lisenser i kontoen.", "Du har %s lisenser. Kontakt systemansvarlig for Ã¥ legge til flere lisenser i kontoen."]
        }
    },
    pl_PL: {
        adobestock: {
            "": {lang: "us", "plural-forms": "nplurals=2; plural=n != 1;"},
            "API::LIBRARIES::Payment error": ["BÅ‚Ä…d pÅ‚atnoÅ›ci"],
            "API::LIBRARIES::We are experiencing technical difficulties. Please try again later.": ["WystÄ™pujÄ… problemy techniczne. SprÃ³buj ponownie pÃ³Åºniej."],
            "CHECKOUT::You now have access to a growing collection of millions of images, conveniently integrated into Adobe Illustrator CC, Adobe InDesign CC, Adobe Photoshop CC, Adobe After Effects CC and Adobe Premiere Pro CC.": ["Masz teraz dostÄ™p do kolekcji obrazÃ³w liczÄ…cej obecnie miliony pozycji i stale poszerzanej, zapewniajÄ…cej ponadto wygodnÄ… integracjÄ™ z programami Adobe Illustrator CC, Adobe InDesign CC, Adobe Photoshop CC, Adobe After Effects CC oraz Adobe Premiere Pro CC."],
            "CHECKOUT::You're Ready to Go!": ["MoÅ¼esz zaczÄ…Ä‡ pracÄ™!"],
            "CONTENT::ERROR::Licenses for this image are no longer available.": ["Licencje na ten obraz nie sÄ… juÅ¼ dostÄ™pne."],
            "DOWNLOAD::ERROR::An error occurred with your download.": ["WystÄ…piÅ‚ bÅ‚Ä…d zwiÄ…zany pobieraniem."],
            "DOWNLOAD::ERROR::If this problem persists, contact %sCustomer Service%s.": ["JeÅ›li problem bÄ™dzie siÄ™ utrzymywaÄ‡, skontaktuj siÄ™ z %sdziaÅ‚em obsÅ‚ugi klienta%s."],
            "DOWNLOAD::ERROR::There was a problem downloading your image. Please try again.": ["WystÄ…piÅ‚ problem z pobieraniem obrazu. SprÃ³buj ponownie."],
            "FILE::ACTION::Are you sure you want to license this image again?": ["Czy na pewno chcesz ponownie wykupiÄ‡ licencjÄ™ na ten obraz?"],
            "FILE::ACTION::Buy Additional License": ["Kup dodatkowÄ… licencjÄ™"],
            "FILE::ACTION::Buy Image": ["Kup obraz"],
            "FILE::ACTION::Buy license & save to": ["Kup licencjÄ™ i zapisz do"],
            "FILE::ACTION::Cancel": ["Anuluj"],
            "FILE::ACTION::Downloading": ["Pobieranie"],
            "FILE::ACTION::Find Similar": ["Wyszukaj podobne"],
            "FILE::ACTION::License & save to": ["Kup licencjÄ™ i zapisz w"],
            "FILE::ACTION::More From This Model": ["WiÄ™cej (ten sam model)"],
            "FILE::ACTION::More From This Series": ["WiÄ™cej (ta sama seria)"],
            "FILE::ACTION::Pay %s for this image?": ["ZapÅ‚aciÄ‡ %s za ten obraz?"],
            "FILE::ACTION::Please wait...": ["Czekaj..."],
            "FILE::ACTION::Save Image to": ["Zapisz obraz w"],
            "FILE::ACTION::Save Preview Image": ["Zapisz obraz podglÄ…du"],
            "FILE::ACTION::Save Preview to": ["Zapisz podglÄ…d w"],
            "FILE::ACTION::Save to Desktop": ["Zapisz na komputerze"],
            "FILE::ACTION::Save to a Creative Cloud Library": ["Zapisz w Bibliotece Creative Cloud"],
            "FILE::ACTION::Saved!": ["Zapisano!"],
            "FILE::ACTION::Saving...": ["Zapisywanie..."],
            "FILE::ACTION::See More": ["Zobacz wiÄ™cej"],
            "FILE::ACTION::Similar Images": ["Podobne obrazy"],
            "FILE::ACTION::Yes": ["Tak"],
            "FILE::ACTION::Your download will begin shortly": ["Pobieranie wkrÃ³tce siÄ™ rozpocznie"],
            "FILE::ACTION::Your image was saved to %s": ["Obraz zostaÅ‚ zapisany w %s"],
            "FILE::Author": ["Autor"],
            "FILE::Category": ["Kategoria"],
            "FILE::File Number": ["Numer pliku"],
            "FILE::Format": ["Format"],
            "FILE::KEYWORDS::%s more": ["%s wiÄ™cej", "%s wiÄ™cej"],
            "FILE::Keywords": ["SÅ‚owa kluczowe"],
            "FILE::Size": ["Rozmiar"],
            "FILE::px": ["px"],
            "GENERIC::Something Went Wrong": ["WystÄ…piÅ‚ nieznany bÅ‚Ä…d"],
            "HEADER::MEMBER::Image": ["Obraz", "Obrazy"],
            "IMAGE::DETAIL::MODAL::BUTTON::OK": ["OK"],
            "IMAGE::DETAIL::MODAL::DESCRIPTION::Images can be saved to Creative Cloud Libraries, or to your desktop. You can change your saving location here.": ["Obrazy moÅ¼na zapisywaÄ‡ w Bibliotekach Creative Cloud lub na komputerze. Tutaj moÅ¼esz zmieniÄ‡ miejsce zapisu."],
            "IMAGE::DETAIL::MODAL::DESCRIPTION::Images saved to libraries will appear in the Libraries panel within any libraries-enabled Adobe application.": ["Obrazy zapisane w bibliotekach bÄ™dÄ… widoczne w panelu Biblioteki w dowolnej aplikacji Adobe, ktÃ³ra je obsÅ‚uguje."],
            "IMAGE::DETAIL::MODAL::TITLE::Saving Images": ["Zapisywanie obrazÃ³w"],
            "LIB::MENU::Add new library": ["Dodaj nowÄ… bibliotekÄ™"],
            "LIB::MENU::Buy License & Save to": ["Kup licencjÄ™ i zapisz w"],
            "LIB::MENU::Create a free account to save images.": ["UtwÃ³rz bezpÅ‚atne konto, aby zapisaÄ‡ obrazy."],
            "LIB::MENU::Create an Account": ["UtwÃ³rz konto"],
            "LIB::MENU::Creating Library...": ["Tworzenie biblioteki..."],
            "LIB::MENU::Delete This Image": ["UsuÅ„ ten obraz"],
            "LIB::MENU::Find Similar Images": ["Wyszukaj podobne obrazy"],
            "LIB::MENU::License & Save to": ["Kup licencjÄ™ i zapisz w"],
            "LIB::MENU::Log In": ["Zaloguj"],
            "LIB::MENU::Save Preview to": ["Zapisz podglÄ…d w"],
            "LIB::MENU::Save to": ["Zapisz w"],
            "LIB::MENU::Save to Desktop": ["Zapisz na komputerze"],
            "LIB::MENU::Save to a Creative Cloud Library": ["Zapisz w Bibliotece Creative Cloud"],
            "LIB::MENU::Saved!": ["Zapisano!"],
            "LIB::MENU::Saving...": ["Zapisywanie..."],
            "LIB::MENU::Your image was saved to": ["Obraz zostaÅ‚ zapisany w"],
            "LIB::OVERAGE::Cancel": ["Anuluj"],
            "LIB::OVERAGE::NO_ABBREVIATION::Exclusive of VAT": ["Bez VAT"],
            "LIB::OVERAGE::NO_ABBREVIATION::No GST payable": ["Nie podlega podatkowi GST"],
            "LIB::OVERAGE::NO_ABBREVIATION::Not taxable": ["Nie podlega opodatkowaniu"],
            "LIB::OVERAGE::Yes": ["Tak"],
            "LIBRARIES::Could not add to library.": ["Nie udaÅ‚o siÄ™ dodaÄ‡ do biblioteki,"],
            "LIBRARIES::Could not delete library item.": ["Nie udaÅ‚o siÄ™ usunÄ…Ä‡ pozycji biblioteki."],
            "LIBRARIES::Could not delete library.": ["Nie udaÅ‚o siÄ™ usunÄ…Ä‡ biblioteki."],
            "LIBRARIES::Could not load libraries.": ["Nie moÅ¼na wczytaÄ‡ bibliotek."],
            "LIBRARIES::Could not rename library.": ["Nie udaÅ‚o siÄ™ zmieniÄ‡ nazwy biblioteki."],
            "LIBRARIES::Could not retrieve library items.": ["Nie udaÅ‚o siÄ™ pobraÄ‡ pozycji biblioteki."],
            "LIBRARIES::Failed to create library.": ["Utworzenie biblioteki nie powiodÅ‚o siÄ™."],
            "LIBRARIES::RENAME::Cancel": ["Anuluj"],
            "LIBRARIES::RENAME::Ok": ["OK"],
            "LIBRARIES::STATE::Licensed": ["Licencja"],
            "LIBRARY::%d item": ["%d element", "Liczba elementÃ³w: %d"],
            "LIBRARY::%s item": ["%s element", "Liczba elementÃ³w: %s"],
            "LIBRARY::%s total": ["Å‚Ä…cznie: %s", "Å‚Ä…cznie: %s"],
            "LIBRARY::ACTION::Delete Library": ["UsuÅ„ bibliotekÄ™"],
            "LIBRARY::ACTION::Libraries": ["Biblioteki"],
            "LIBRARY::ACTION::Rename Library": ["ZmieÅ„ nazwÄ™ biblioteki"],
            "LIBRARY::MYLIBRARY::My Library": ["Moja biblioteka"],
            "MEMBER::DOWNLOAD::Buy": ["Kup"],
            "MEMBER::DOWNLOAD::One-Time Download": ["Pobranie jednorazowe"],
            "MEMBER::DOWNLOAD::One-time Payment": ["PÅ‚atnoÅ›Ä‡ jednorazowa"],
            "MEMBER::DOWNLOAD::You're out of licenses. What would you like to do?": ["Nie dysponujesz Å¼adnymi licencjami. Co chcesz zrobiÄ‡?"],
            "MEMBER::DOWNLOAD::Your plan entitles you to %s image a month": ["TwÃ³j plan uprawnia do %s obrazu miesiÄ™cznie", "TwÃ³j plan uprawnia do %s obrazÃ³w miesiÄ™cznie"],
            "MEMBER::ERROR::Failed to purchase an additional license.": ["Nie udaÅ‚o siÄ™ nabyÄ‡ dodatkowej licencji."],
            "MEMBER::License Again": ["Kup kolejnÄ… licencjÄ™"],
            'MODAL::Are you sure you want to delete "%s"?': ["Czy na pewno chcesz usunÄ…Ä‡ â€ž%sâ€?"],
            "MODAL::Cancel": ["Anuluj"],
            "MODAL::Delete": ["UsuÅ„"],
            'MODAL::Delete "%s"': ["UsuÅ„ â€ž%sâ€"],
            "MODAL::Ok": ["OK"],
            "MODAL::This library will no longer be available to anyone who shares it.": ["Ta biblioteka nie bÄ™dzie juÅ¼ dostÄ™pna dla osÃ³b, ktÃ³re jÄ… wspÃ³Å‚uÅ¼ytkujÄ…."],
            "PHOTO::DOWNLOAD::Desktop": ["Komputer"],
            "PHOTO::DOWNLOAD::New Library": ["Nowa biblioteka"],
            "PLANS::Exclusive of VAT": ["Bez VAT"],
            "PLANS::No GST payable": ["Nie podlega podatkowi GST"],
            "PLANS::Not taxable": ["Nie podlega opodatkowaniu"],
            "PLANS::Okay": ["OK"],
            "PLANS::There was an error upgrading your plan.": ["Podczas zmiany planu wystÄ…piÅ‚ bÅ‚Ä…d."],
            'PLANS::UPGRADE::By clicking the "Continue" button, you agree to the billing terms above.': ["KlikajÄ…c przycisk â€žKontynuujâ€, akceptujesz podane powyÅ¼ej warunki rozliczeÅ„."],
            "PLANS::UPGRADE::Continue": ["Kontynuuj"],
            "PLANS::UPGRADE::Upgrade plan": ["ZmieÅ„ plan"],
            "PLANS::UPGRADE::You've selected %s": ["Wybrano: %s"],
            "PLANS::Upgrade": ["ZmieÅ„"],
            "PLANS::Upgrade error": ["BÅ‚Ä…d zmiany planu"],
            "PURCHASE::ERROR::Sorry! You have no more images available in your subscription. More will become available next month.": ["Niestety, w Twojej subskrypcji nie ma juÅ¼ dostÄ™pnych obrazÃ³w. Kolejne obrazy stanÄ… siÄ™ dostÄ™pne w przyszÅ‚ym miesiÄ…cu."],
            "PURCHASE::ERROR::You have %s license. Please contact your administrator to add licenses to your account.": ["Masz %s licencjÄ™. Skontaktuj siÄ™ z administratorem, aby dodaÄ‡ licencje do konta.", "Masz nastÄ™pujÄ…cÄ… liczbÄ™ licencji: %s. Skontaktuj siÄ™ z administratorem, aby dodaÄ‡ licencje do konta."]
        }
    },
    sv_SE: {
        adobestock: {
            "": {lang: "us", "plural-forms": "nplurals=2; plural=n != 1;"},
            "API::LIBRARIES::Payment error": ["Betalningsfel"],
            "API::LIBRARIES::We are experiencing technical difficulties. Please try again later.": ["Vi har tekniska problem. FÃ¶rsÃ¶k igen senare."],
            "CHECKOUT::You now have access to a growing collection of millions of images, conveniently integrated into Adobe Illustrator CC, Adobe InDesign CC, Adobe Photoshop CC, Adobe After Effects CC and Adobe Premiere Pro CC.": ["Du har nu tillgÃ¥ng till miljontals bilder som enkelt kan integreras i Adobe Illustrator CC, Adobe InDesign CC, Adobe Photoshop CC, Adobe After Effects CC och Adobe Premiere Pro CC."],
            "CHECKOUT::You're Ready to Go!": ["Du Ã¤r redo att komma igÃ¥ng!"],
            "CONTENT::ERROR::Licenses for this image are no longer available.": ["Det finns inga licenser fÃ¶r den hÃ¤r bilden lÃ¤ngre."],
            "DOWNLOAD::ERROR::An error occurred with your download.": ["Ett fel intrÃ¤ffade vid nedladdningen."],
            "DOWNLOAD::ERROR::If this problem persists, contact %sCustomer Service%s.": ["Kontakta %sKundtjÃ¤nst%s om problemet kvarstÃ¥r."],
            "DOWNLOAD::ERROR::There was a problem downloading your image. Please try again.": ["Ett fel uppstod vid nedladdningen av bilden. FÃ¶rsÃ¶k igen."],
            "FILE::ACTION::Are you sure you want to license this image again?": ["Vill du licensiera bilden igen?"],
            "FILE::ACTION::Buy Additional License": ["KÃ¶p ytterligare licenser"],
            "FILE::ACTION::Buy Image": ["KÃ¶p bild"],
            "FILE::ACTION::Buy license & save to": ["KÃ¶p licens och spara till"],
            "FILE::ACTION::Cancel": ["Avbryt"],
            "FILE::ACTION::Downloading": ["HÃ¤mtar"],
            "FILE::ACTION::Find Similar": ["Hitta liknande"],
            "FILE::ACTION::License & save to": ["Licensiera och spara till"],
            "FILE::ACTION::More From This Model": ["Mer frÃ¥n den hÃ¤r modellen"],
            "FILE::ACTION::More From This Series": ["Mer frÃ¥n den hÃ¤r serien"],
            "FILE::ACTION::Pay %s for this image?": ["Betala %s fÃ¶r den hÃ¤r bilden?"],
            "FILE::ACTION::Please wait...": ["VÃ¤nta..."],
            "FILE::ACTION::Save Image to": ["Spara bild till"],
            "FILE::ACTION::Save Preview Image": ["Spara fÃ¶rhandsvisningsbild"],
            "FILE::ACTION::Save Preview to": ["Spara fÃ¶rhandsvisning till"],
            "FILE::ACTION::Save to Desktop": ["Spara pÃ¥ Skrivbordet"],
            "FILE::ACTION::Save to a Creative Cloud Library": ["Spara i ett Creative Cloud-bibliotek"],
            "FILE::ACTION::Saved!": ["Sparades!"],
            "FILE::ACTION::Saving...": ["Sparar..."],
            "FILE::ACTION::See More": ["LÃ¤s mer"],
            "FILE::ACTION::Similar Images": ["Liknande bilder"],
            "FILE::ACTION::Yes": ["Ja"],
            "FILE::ACTION::Your download will begin shortly": ["HÃ¤mtningen bÃ¶rjar snart"],
            "FILE::ACTION::Your image was saved to %s": ["Din bild sparades till %s"],
            "FILE::Author": ["Upphovsman"],
            "FILE::Category": ["Kategori"],
            "FILE::File Number": ["Filnummer"],
            "FILE::Format": ["Format"],
            "FILE::KEYWORDS::%s more": ["%s mer", "%s mer"],
            "FILE::Keywords": ["Nyckelord"],
            "FILE::Size": ["Storlek"],
            "FILE::px": ["px"],
            "GENERIC::Something Went Wrong": ["Ett fel uppstod"],
            "HEADER::MEMBER::Image": ["Bild", "Bilder"],
            "IMAGE::DETAIL::MODAL::BUTTON::OK": ["OK"],
            "IMAGE::DETAIL::MODAL::DESCRIPTION::Images can be saved to Creative Cloud Libraries, or to your desktop. You can change your saving location here.": ["Bilder kan sparas i Creative Cloud Libraries eller pÃ¥ din dator. Du kan Ã¤ndra var du sparar bilder hÃ¤r."],
            "IMAGE::DETAIL::MODAL::DESCRIPTION::Images saved to libraries will appear in the Libraries panel within any libraries-enabled Adobe application.": ["Bilder som sparas i bibliotek visas i Libraries-panelen i alla Adobe-program som har bibliotek aktiverade."],
            "IMAGE::DETAIL::MODAL::TITLE::Saving Images": ["Sparar bilder"],
            "LIB::MENU::Add new library": ["LÃ¤gg till nytt bibliotek"],
            "LIB::MENU::Buy License & Save to": ["KÃ¶p licens och spara till"],
            "LIB::MENU::Create a free account to save images.": ["Skapa ett kostnadsfritt konto fÃ¶r att spara bilder."],
            "LIB::MENU::Create an Account": ["Skapa ett konto"],
            "LIB::MENU::Creating Library...": ["Skapa bibliotek..."],
            "LIB::MENU::Delete This Image": ["Ta bort den hÃ¤r bilden"],
            "LIB::MENU::Find Similar Images": ["Hitta liknande bilder"],
            "LIB::MENU::License & Save to": ["Licensiera och spara till"],
            "LIB::MENU::Log In": ["Logga in"],
            "LIB::MENU::Save Preview to": ["Spara fÃ¶rhandsvisning till"],
            "LIB::MENU::Save to": ["Spara till"],
            "LIB::MENU::Save to Desktop": ["Spara pÃ¥ Skrivbordet"],
            "LIB::MENU::Save to a Creative Cloud Library": ["Spara i ett Creative Cloud-bibliotek"],
            "LIB::MENU::Saved!": ["Sparades!"],
            "LIB::MENU::Saving...": ["Sparar..."],
            "LIB::MENU::Your image was saved to": ["Din bild sparades till"],
            "LIB::OVERAGE::Cancel": ["Avbryt"],
            "LIB::OVERAGE::NO_ABBREVIATION::Exclusive of VAT": ["Momsfritt"],
            "LIB::OVERAGE::NO_ABBREVIATION::No GST payable": ["Ingen GST"],
            "LIB::OVERAGE::NO_ABBREVIATION::Not taxable": ["Inte skattepliktig"],
            "LIB::OVERAGE::Yes": ["Ja"],
            "LIBRARIES::Could not add to library.": ["Det gick inte att lÃ¤gga till i bibliotek."],
            "LIBRARIES::Could not delete library item.": ["Det gick inte att ta bort biblioteksobjekt."],
            "LIBRARIES::Could not delete library.": ["Det gick inte att ta bort bibliotek."],
            "LIBRARIES::Could not load libraries.": ["Det gick inte att ladda bibliotek."],
            "LIBRARIES::Could not rename library.": ["Det gick inte att byta namn pÃ¥ bibliotek"],
            "LIBRARIES::Could not retrieve library items.": ["Det gick inte att hÃ¤mta biblioteksobjekt."],
            "LIBRARIES::Failed to create library.": ["Biblioteket kunde inte skapas."],
            "LIBRARIES::RENAME::Cancel": ["Avbryt"],
            "LIBRARIES::RENAME::Ok": ["Ok"],
            "LIBRARIES::STATE::Licensed": ["Licensierad"],
            "LIBRARY::%d item": ["%d objekt", "%d objekt"],
            "LIBRARY::%s item": ["%s objekt", "%s objekt"],
            "LIBRARY::%s total": ["%s totalt", "%s totalt"],
            "LIBRARY::ACTION::Delete Library": ["Ta bort bibliotek"],
            "LIBRARY::ACTION::Libraries": ["Bibliotek"],
            "LIBRARY::ACTION::Rename Library": ["Byt namn pÃ¥ bibliotek"],
            "LIBRARY::MYLIBRARY::My Library": ["Mitt bibliotek"],
            "MEMBER::DOWNLOAD::Buy": ["KÃ¶p"],
            "MEMBER::DOWNLOAD::One-Time Download": ["EngÃ¥ngsnedladdning"],
            "MEMBER::DOWNLOAD::One-time Payment": ["EngÃ¥ngsinbetalning"],
            "MEMBER::DOWNLOAD::You're out of licenses. What would you like to do?": ["Dina licenser Ã¤r slut. Vad vill du gÃ¶ra?"],
            "MEMBER::DOWNLOAD::Your plan entitles you to %s image a month": ["Med din plan fÃ¥r du %s bild per mÃ¥nad", "Med din plan fÃ¥r du %s bilder per mÃ¥nad"],
            "MEMBER::ERROR::Failed to purchase an additional license.": ["Det gick inte att kÃ¶pa en ytterligare licens."],
            "MEMBER::License Again": ["Licensiera igen"],
            'MODAL::Are you sure you want to delete "%s"?': ["Vill du ta bort %s?"],
            "MODAL::Cancel": ["Avbryt"],
            "MODAL::Delete": ["Ta bort"],
            'MODAL::Delete "%s"': ["Ta bort %s"],
            "MODAL::Ok": ["Ok"],
            "MODAL::This library will no longer be available to anyone who shares it.": ["Det hÃ¤r biblioteket blir inte lÃ¤ngre tillgÃ¤ngligt fÃ¶r dem som delar det."],
            "PHOTO::DOWNLOAD::Desktop": ["Skrivbord"],
            "PHOTO::DOWNLOAD::New Library": ["Nytt bibliotek"],
            "PLANS::Exclusive of VAT": ["Momsfritt"],
            "PLANS::No GST payable": ["Ingen GST"],
            "PLANS::Not taxable": ["Inte skattepliktig"],
            "PLANS::Okay": ["OK"],
            "PLANS::There was an error upgrading your plan.": ["Ett fel intrÃ¤ffade nÃ¤r din plan uppgraderades."],
            'PLANS::UPGRADE::By clicking the "Continue" button, you agree to the billing terms above.': ['Genom att klicka pÃ¥ knappen "FortsÃ¤tt" godkÃ¤nner du fakturavillkoren ovan.'],
            "PLANS::UPGRADE::Continue": ["FortsÃ¤tt"],
            "PLANS::UPGRADE::Upgrade plan": ["Uppgraderingsplan"],
            "PLANS::UPGRADE::You've selected %s": ["Du har valt %s"],
            "PLANS::Upgrade": ["Uppgradera"],
            "PLANS::Upgrade error": ["Uppgraderingsfel"],
            "PURCHASE::ERROR::Sorry! You have no more images available in your subscription. More will become available next month.": ["TyvÃ¤rr! Du har inga fler tillgÃ¤ngliga bilder i din prenumeration. Fler blir tillgÃ¤ngliga nÃ¤sta mÃ¥nad."],
            "PURCHASE::ERROR::You have %s license. Please contact your administrator to add licenses to your account.": ["Du har %s licens. Kontakta din administratÃ¶r om du vill lÃ¤gga till licenser till ditt konto.", "Du har %s licenser. Kontakta din administratÃ¶r om du vill lÃ¤gga till licenser till ditt konto."]
        }
    }
}, function () {
    function e(e) {
        for (var t = 0; t < pt.length; t += 1)if (e.hasOwnProperty(pt[t]))return !1;
        return !0
    }

    function t(e) {
        for (var t = 0; t < dt.length; t += 1)if (e.hasOwnProperty(dt[t]))return !1;
        return !0
    }

    function n(e) {
        if (ut.test(e))return void 0;
        var t = {};
        return t.pattern = e.replace(lt, function (e) {
            switch (e.charAt(0)) {
                case"E":
                case"e":
                case"c":
                    return t.weekday = ct.weekday[e.length - 1], "{weekday}";
                case"G":
                    return t.era = ct.era[e.length - 1], "{era}";
                case"y":
                case"Y":
                case"u":
                case"U":
                    return t.year = 2 === e.length ? "2-digit" : "numeric", "{year}";
                case"M":
                case"L":
                    return t.month = ct.month[e.length - 1], "{month}";
                case"d":
                    return t.day = 2 === e.length ? "2-digit" : "numeric", "{day}";
                case"a":
                    return "{ampm}";
                case"h":
                case"H":
                case"k":
                case"K":
                    return t.hour = 2 === e.length ? "2-digit" : "numeric", "{hour}";
                case"m":
                    return t.minute = 2 === e.length ? "2-digit" : "numeric", "{minute}";
                case"s":
                    return t.second = 2 === e.length ? "2-digit" : "numeric", "{second}";
                case"z":
                    return t.timeZoneName = e.length < 4 ? "short" : "long", "{timeZoneName}"
            }
        }), t.pattern = t.pattern.replace(/'([^']*)'/g, function (e, t) {
            return t ? t : "'"
        }), t.pattern.indexOf("{ampm}") > -1 && (t.pattern12 = t.pattern, t.pattern = t.pattern.replace("{ampm}", "").trim()), t
    }

    function i(i) {
        var r, a, o, s, l, u, c, d = i.availableFormats, p = i.medium, m = [], g = [], h = [];
        for (o in d)d.hasOwnProperty(o) && (s = d[o], r = new Array((o.match(/M/g) || []).length + 1), a = new Array((o.match(/E/g) || []).length + 1), r.length > 2 && (s = s.replace(/(M|L)+/, r.join("$1"))), a.length > 2 && (s = s.replace(/([Eec])+/, a.join("$1"))), l = n(s), l && (m.push(l), e(l) ? h.push(s) : t(l) && g.push(s)));
        for (u = 0; u < g.length; u += 1)for (c = 0; c < h.length; c += 1)l = n(p.replace("{0}", g[u]).replace("{1}", h[c]).replace(/^[,\s]+|[,\s]+$/gi, "")), l && m.push(l);
        return m
    }

    function r(e) {
        return rt.test(e) ? at.test(e) ? !1 : ot.test(e) ? !1 : !0 : !1
    }

    function a(e) {
        var t, n;
        e = e.toLowerCase(), n = e.split("-");
        for (var i = 1, r = n.length; r > i; i++)if (2 === n[i].length)n[i] = n[i].toUpperCase(); else if (4 === n[i].length)n[i] = n[i].charAt(0).toUpperCase() + n[i].slice(1); else if (1 === n[i].length && "x" != n[i])break;
        e = yt.call(n, "-"), (t = e.match(st)) && t.length > 1 && (t.sort(), e = e.replace(RegExp("(?:" + st.source + ")+", "i"), yt.call(t, ""))), ft.call(kt.tags, e) && (e = kt.tags[e]), n = e.split("-");
        for (var i = 1, r = n.length; r > i; i++)ft.call(kt.subtags, n[i]) ? n[i] = kt.subtags[n[i]] : ft.call(kt.extLang, n[i]) && (n[i] = kt.extLang[n[i]][0], 1 === i && kt.extLang[n[1]][1] === n[0] && (n = It.call(n, i++), r -= 1));
        return yt.call(n, "-")
    }

    function o() {
        return _
    }

    function s(e) {
        var t = String(e), n = G(t);
        return Dt.test(n) === !1 ? !1 : !0
    }

    function l(e) {
        if (void 0 === e)return new j;
        for (var t = new j, e = "string" == typeof e ? [e] : e, n = q(e), i = n.length, o = 0; i > o;) {
            var s = String(o), l = s in n;
            if (l) {
                var u = n[s];
                if (null == u || "string" != typeof u && "object" != typeof u)throw new TypeError("String or Object type expected");
                var c = String(u);
                if (!r(c))throw new RangeError("'" + c + "' is not a structurally valid language tag");
                c = a(c), -1 === vt.call(t, c) && Lt.call(t, c)
            }
            o++
        }
        return t
    }

    function u(e, t) {
        for (var n = t; ;) {
            if (vt.call(e, n) > -1)return n;
            var i = n.lastIndexOf("-");
            if (0 > i)return;
            i >= 2 && "-" == n.charAt(i - 2) && (i -= 2), n = n.substring(0, i)
        }
    }

    function c(e, t) {
        for (var n, i = 0, r = t.length; r > i && !n;) {
            var a = t[i], s = String(a).replace(Bt, ""), n = u(e, s);
            i++
        }
        var l = new U;
        if (void 0 !== n) {
            if (l["[[locale]]"] = n, String(a) !== String(s)) {
                var c = a.match(Bt)[0], d = a.indexOf("-u-");
                l["[[extension]]"] = c, l["[[extensionIndex]]"] = d
            }
        } else l["[[locale]]"] = o();
        return l
    }

    function d(e, t) {
        return c(e, t)
    }

    function p(e, t, n, i, r) {
        if (0 === e.length)throw new ReferenceError("No locale data has been provided for this object yet.");
        var a = n["[[localeMatcher]]"];
        if ("lookup" === a)var o = c(e, t); else var o = d(e, t);
        var s = o["[[locale]]"];
        if (ft.call(o, "[[extension]]"))var l = o["[[extension]]"], u = o["[[extensionIndex]]"], p = String.prototype.split, m = p.call(l, "-"), g = m.length;
        var h = new U;
        h["[[dataLocale]]"] = s;
        for (var f = "-u", b = 0, v = i.length; v > b;) {
            var E = i[b], I = r[s], A = I[E], L = A[0], y = "", O = vt;
            if (void 0 !== m) {
                var N = O.call(m, E);
                if (-1 !== N)if (g > N + 1 && m[N + 1].length > 2) {
                    var C = m[N + 1], R = O.call(A, C);
                    if (-1 !== R)var L = C, y = "-" + E + "-" + L
                } else {
                    var R = O(A, "true");
                    if (-1 !== R)var L = "true"
                }
            }
            if (ft.call(n, "[[" + E + "]]")) {
                var w = n["[[" + E + "]]"];
                -1 !== O.call(A, w) && w !== L && (L = w, y = "")
            }
            h["[[" + E + "]]"] = L, f += y, b++
        }
        if (f.length > 2)var S = s.substring(0, u), T = s.substring(u), s = S + f + T;
        return h["[[locale]]"] = s, h
    }

    function m(e, t) {
        for (var n = t.length, i = new j, r = 0; n > r;) {
            var a = t[r], o = String(a).replace(Bt, ""), s = u(e, o);
            void 0 !== s && Lt.call(i, a), r++
        }
        var l = It.call(i);
        return l
    }

    function g(e, t) {
        return m(e, t)
    }

    function h(e, t, n) {
        if (void 0 !== n) {
            var n = new U(q(n)), i = n.localeMatcher;
            if (void 0 !== i && (i = String(i), "lookup" !== i && "best fit" !== i))throw new RangeError('matcher should be "lookup" or "best fit"')
        }
        if (void 0 === i || "best fit" === i)var r = g(e, t); else var r = m(e, t);
        for (var a in r)ft.call(r, a) && bt(r, a, {writable: !1, configurable: !1, value: r[a]});
        return bt(r, "length", {writable: !1}), r
    }

    function f(e, t, n, i, r) {
        var a = e[t];
        if (void 0 !== a) {
            if (a = "boolean" === n ? Boolean(a) : "string" === n ? String(a) : a, void 0 !== i && -1 === vt.call(i, a))throw new RangeError("'" + a + "' is not an allowed value for `" + t + "`");
            return a
        }
        return r
    }

    function b(e, t, n, i, r) {
        var a = e[t];
        if (void 0 !== a) {
            if (a = Number(a), isNaN(a) || n > a || a > i)throw new RangeError("Value is not a number or outside accepted range");
            return Math.floor(a)
        }
        return r
    }

    function v() {
        var e = arguments[0], t = arguments[1];
        return this && this !== mt ? E(q(this), e, t) : new mt.NumberFormat(e, t)
    }

    function E(e, t, n) {
        var i = W(e), r = Y();
        if (i["[[initializedIntlObject]]"] === !0)throw new TypeError("`this` object has already been initialized as an Intl object");
        bt(e, "__getInternalProperties", {
            value: function () {
                return arguments[0] === Rt ? i : void 0
            }
        }), i["[[initializedIntlObject]]"] = !0;
        var a = l(t);
        n = void 0 === n ? {} : q(n);
        var o = new U, u = f(n, "localeMatcher", "string", new j("lookup", "best fit"), "best fit");
        o["[[localeMatcher]]"] = u;
        var c = Ct.NumberFormat["[[localeData]]"], d = p(Ct.NumberFormat["[[availableLocales]]"], a, o, Ct.NumberFormat["[[relevantExtensionKeys]]"], c);
        i["[[locale]]"] = d["[[locale]]"], i["[[numberingSystem]]"] = d["[[nu]]"], i["[[dataLocale]]"] = d["[[dataLocale]]"];
        var m = d["[[dataLocale]]"], g = f(n, "style", "string", new j("decimal", "percent", "currency"), "decimal");
        i["[[style]]"] = g;
        var h = f(n, "currency", "string");
        if (void 0 !== h && !s(h))throw new RangeError("'" + h + "' is not a valid currency code");
        if ("currency" === g && void 0 === h)throw new TypeError("Currency code is required when style is currency");
        if ("currency" === g) {
            h = h.toUpperCase(), i["[[currency]]"] = h;
            var v = I(h)
        }
        var E = f(n, "currencyDisplay", "string", new j("code", "symbol", "name"), "symbol");
        "currency" === g && (i["[[currencyDisplay]]"] = E);
        var L = b(n, "minimumIntegerDigits", 1, 21, 1);
        i["[[minimumIntegerDigits]]"] = L;
        var y = "currency" === g ? v : 0, O = b(n, "minimumFractionDigits", 0, 20, y);
        i["[[minimumFractionDigits]]"] = O;
        var N = "currency" === g ? Math.max(O, v) : "percent" === g ? Math.max(O, 0) : Math.max(O, 3), C = b(n, "maximumFractionDigits", O, 20, N);
        i["[[maximumFractionDigits]]"] = C;
        var R = n.minimumSignificantDigits, w = n.maximumSignificantDigits;
        (void 0 !== R || void 0 !== w) && (R = b(n, "minimumSignificantDigits", 1, 21, 1), w = b(n, "maximumSignificantDigits", R, 21, 21), i["[[minimumSignificantDigits]]"] = R, i["[[maximumSignificantDigits]]"] = w);
        var S = f(n, "useGrouping", "boolean", void 0, !0);
        i["[[useGrouping]]"] = S;
        var T = c[m], D = T.patterns, B = D[g];
        return i["[[positivePattern]]"] = B.positivePattern, i["[[negativePattern]]"] = B.negativePattern, i["[[boundFormat]]"] = void 0, i["[[initializedNumberFormat]]"] = !0, ht && (e.format = A.call(e)), r.exp.test(r.input), e
    }

    function I(e) {
        return void 0 !== Mt[e] ? Mt[e] : 2
    }

    function A() {
        var e = null != this && "object" == typeof this && W(this);
        if (!e || !e["[[initializedNumberFormat]]"])throw new TypeError("`this` value for format() is not an initialized Intl.NumberFormat object.");
        if (void 0 === e["[[boundFormat]]"]) {
            var t = function (e) {
                return L(this, Number(e))
            }, n = Nt.call(t, this);
            e["[[boundFormat]]"] = n
        }
        return e["[[boundFormat]]"]
    }

    function L(e, t) {
        var n, i = Y(), r = W(e), a = r["[[dataLocale]]"], o = r["[[numberingSystem]]"], s = Ct.NumberFormat["[[localeData]]"][a], l = s.symbols[o] || s.symbols.latn, u = !1;
        if (isFinite(t) === !1)isNaN(t) ? n = l.nan : (n = l.infinity, 0 > t && (u = !0)); else {
            if (0 > t && (u = !0, t = -t), "percent" === r["[[style]]"] && (t *= 100), n = ft.call(r, "[[minimumSignificantDigits]]") && ft.call(r, "[[maximumSignificantDigits]]") ? y(t, r["[[minimumSignificantDigits]]"], r["[[maximumSignificantDigits]]"]) : O(t, r["[[minimumIntegerDigits]]"], r["[[minimumFractionDigits]]"], r["[[maximumFractionDigits]]"]), xt[o]) {
                var c = xt[r["[[numberingSystem]]"]];
                n = String(n).replace(/\d/g, function (e) {
                    return c[e]
                })
            } else n = String(n);
            if (n = n.replace(/\./g, l.decimal), r["[[useGrouping]]"] === !0) {
                var d = n.split(l.decimal), p = d[0], m = s.patterns.primaryGroupSize || 3, g = s.patterns.secondaryGroupSize || m;
                if (p.length > m) {
                    var h = new j, f = p.length - m, b = f % g, v = p.slice(0, b);
                    for (v.length && Lt.call(h, v); f > b;)Lt.call(h, p.slice(b, b + g)), b += g;
                    Lt.call(h, p.slice(f)), d[0] = yt.call(h, l.group)
                }
                n = yt.call(d, l.decimal)
            }
        }
        var E = r[u === !0 ? "[[negativePattern]]" : "[[positivePattern]]"];
        if (E = E.replace("{number}", n), "currency" === r["[[style]]"]) {
            var I, A = r["[[currency]]"], L = s.currencies[A];
            switch (r["[[currencyDisplay]]"]) {
                case"symbol":
                    I = L || A;
                    break;
                default:
                case"code":
                case"name":
                    I = A
            }
            E = E.replace("{currency}", I)
        }
        return i.exp.test(i.input), E
    }

    function y(e, t, n) {
        var i = n;
        if (0 === e)var r = yt.call(Array(i + 1), "0"), a = 0; else var a = F(Math.abs(e)), o = Math.round(Math.exp(Math.abs(a - i + 1) * Math.LN10)), r = String(Math.round(0 > a - i + 1 ? e * o : e / o));
        if (a >= i)return r + yt.call(Array(a - i + 1 + 1), "0");
        if (a === i - 1)return r;
        if (a >= 0 ? r = r.slice(0, a + 1) + "." + r.slice(a + 1) : 0 > a && (r = "0." + yt.call(Array(-(a + 1) + 1), "0") + r), r.indexOf(".") >= 0 && n > t) {
            for (var s = n - t; s > 0 && "0" === r.charAt(r.length - 1);)r = r.slice(0, -1), s--;
            "." === r.charAt(r.length - 1) && (r = r.slice(0, -1))
        }
        return r
    }

    function O(e, t, n, i) {
        var r, a = Number.prototype.toFixed.call(e, i), o = a.split(".")[0].length, s = i - n, l = (r = a.indexOf("e")) > -1 ? a.slice(r + 1) : 0;
        for (l && (a = a.slice(0, r).replace(".", ""), a += yt.call(Array(l - (a.length - 1) + 1), "0") + "." + yt.call(Array(i + 1), "0"), o = a.length); s > 0 && "0" === a.slice(-1);)a = a.slice(0, -1), s--;
        if ("." === a.slice(-1) && (a = a.slice(0, -1)), t > o)var u = yt.call(Array(t - o + 1), "0");
        return (u ? u : "") + a
    }

    function N() {
        var e = arguments[0], t = arguments[1];
        return this && this !== mt ? C(q(this), e, t) : new mt.DateTimeFormat(e, t)
    }

    function C(e, t, n) {
        var i = W(e), r = Y();
        if (i["[[initializedIntlObject]]"] === !0)throw new TypeError("`this` object has already been initialized as an Intl object");
        bt(e, "__getInternalProperties", {
            value: function () {
                return arguments[0] === Rt ? i : void 0
            }
        }), i["[[initializedIntlObject]]"] = !0;
        var a = l(t), n = w(n, "any", "date"), o = new U;
        I = f(n, "localeMatcher", "string", new j("lookup", "best fit"), "best fit"), o["[[localeMatcher]]"] = I;
        var s = Ct.DateTimeFormat, u = s["[[localeData]]"], c = p(s["[[availableLocales]]"], a, o, s["[[relevantExtensionKeys]]"], u);
        i["[[locale]]"] = c["[[locale]]"], i["[[calendar]]"] = c["[[ca]]"], i["[[numberingSystem]]"] = c["[[nu]]"], i["[[dataLocale]]"] = c["[[dataLocale]]"];
        var d = c["[[dataLocale]]"], m = n.timeZone;
        if (void 0 !== m && (m = G(m), "UTC" !== m))throw new RangeError("timeZone is not supported.");
        i["[[timeZone]]"] = m, o = new U;
        for (var g in Ft)if (ft.call(Ft, g)) {
            var h = f(n, g, "string", Ft[g]);
            o["[[" + g + "]]"] = h
        }
        var b, v = u[d], E = R(v.formats), I = f(n, "formatMatcher", "string", new j("basic", "best fit"), "best fit");
        v.formats = E, b = "basic" === I ? S(o, E) : D(o, E);
        for (var g in Ft)if (ft.call(Ft, g) && ft.call(b, g)) {
            var A = b[g];
            i["[[" + g + "]]"] = A
        }
        var L, y = f(n, "hour12", "boolean");
        if (i["[[hour]]"])if (y = void 0 === y ? v.hour12 : y, i["[[hour12]]"] = y, y === !0) {
            var O = v.hourNo0;
            i["[[hourNo0]]"] = O, L = b.pattern12
        } else L = b.pattern; else L = b.pattern;
        return i["[[pattern]]"] = L, i["[[boundFormat]]"] = void 0, i["[[initializedDateTimeFormat]]"] = !0, ht && (e.format = B.call(e)), r.exp.test(r.input), e
    }

    function R(e) {
        return "[object Array]" === Object.prototype.toString.call(e) ? e : i(e)
    }

    function w(e, t, n) {
        if (void 0 === e)e = null; else {
            var i = q(e);
            e = new U;
            for (var r in i)e[r] = i[r]
        }
        var a = Et, e = a(e), o = !0;
        return ("date" === t || "any" === t) && (void 0 !== e.weekday || void 0 !== e.year || void 0 !== e.month || void 0 !== e.day) && (o = !1), ("time" === t || "any" === t) && (void 0 !== e.hour || void 0 !== e.minute || void 0 !== e.second) && (o = !1), !o || "date" !== n && "all" !== n || (e.year = e.month = e.day = "numeric"), !o || "time" !== n && "all" !== n || (e.hour = e.minute = e.second = "numeric"), e
    }

    function S(e, t) {
        return T(e, t)
    }

    function T(e, t, n) {
        for (var i, r = 8, a = 120, o = 20, s = 8, l = 6, u = 6, c = 3, d = -1 / 0, p = 0, m = t.length; m > p;) {
            var g = t[p], h = 0;
            for (var f in Ft)if (ft.call(Ft, f)) {
                var b = e["[[" + f + "]]"], v = ft.call(g, f) ? g[f] : void 0;
                if (void 0 === b && void 0 !== v)h -= o; else if (void 0 !== b && void 0 === v)h -= a; else {
                    var E = ["2-digit", "numeric", "narrow", "short", "long"], I = vt.call(E, b), A = vt.call(E, v), L = Math.max(Math.min(A - I, 2), -2);
                    !n || ("numeric" !== b && "2-digit" !== b || "numeric" === v || "2-digit" === v) && ("numeric" === b || "2-digit" === b || "2-digit" !== v && "numeric" !== v) || (h -= r), 2 === L ? h -= l : 1 === L ? h -= c : -1 === L ? h -= u : -2 === L && (h -= s)
                }
            }
            h > d && (d = h, i = g), p++
        }
        return i
    }

    function D(e, t) {
        return T(e, t, !0)
    }

    function B() {
        var e = null != this && "object" == typeof this && W(this);
        if (!e || !e["[[initializedDateTimeFormat]]"])throw new TypeError("`this` value for format() is not an initialized Intl.DateTimeFormat object.");
        if (void 0 === e["[[boundFormat]]"]) {
            var t = function () {
                var e = Number(0 === arguments.length ? Date.now() : arguments[0]);
                return k(this, e)
            }, n = Nt.call(t, this);
            e["[[boundFormat]]"] = n
        }
        return e["[[boundFormat]]"]
    }

    function k(e, t) {
        if (!isFinite(t))throw new RangeError("Invalid valid date passed to format");
        var n = e.__getInternalProperties(Rt), i = Y(), r = n["[[locale]]"], a = new mt.NumberFormat([r], {useGrouping: !1}), o = new mt.NumberFormat([r], {
            minimumIntegerDigits: 2,
            useGrouping: !1
        }), s = M(t, n["[[calendar]]"], n["[[timeZone]]"]), l = n["[[pattern]]"], u = n["[[dataLocale]]"], c = Ct.DateTimeFormat["[[localeData]]"][u].calendars, d = n["[[calendar]]"];
        for (var p in Ft)if (ft.call(n, "[[" + p + "]]")) {
            var m, g, h = n["[[" + p + "]]"], f = s["[[" + p + "]]"];
            if ("year" === p && 0 >= f ? f = 1 - f : "month" === p ? f++ : "hour" === p && n["[[hour12]]"] === !0 && (f %= 12, m = f !== s["[[" + p + "]]"], 0 === f && n["[[hourNo0]]"] === !0 && (f = 12)), "numeric" === h)g = L(a, f); else if ("2-digit" === h)g = L(o, f), g.length > 2 && (g = g.slice(-2)); else if (h in wt)switch (p) {
                case"month":
                    g = z(c, d, "months", h, s["[[" + p + "]]"]);
                    break;
                case"weekday":
                    try {
                        g = z(c, d, "days", h, s["[[" + p + "]]"])
                    } catch (b) {
                        throw new Error("Could not find weekday data for locale " + r)
                    }
                    break;
                case"timeZoneName":
                    g = "";
                    break;
                default:
                    g = s["[[" + p + "]]"]
            }
            l = l.replace("{" + p + "}", g)
        }
        return n["[[hour12]]"] === !0 && (g = z(c, d, "dayPeriods", m ? "pm" : "am"), l = l.replace("{ampm}", g)), i.exp.test(i.input), l
    }

    function M(e, t, n) {
        var i = new Date(e), r = "get" + (n || "");
        return new U({
            "[[weekday]]": i[r + "Day"](),
            "[[era]]": +(i[r + "FullYear"]() >= 0),
            "[[year]]": i[r + "FullYear"](),
            "[[month]]": i[r + "Month"](),
            "[[day]]": i[r + "Date"](),
            "[[hour]]": i[r + "Hours"](),
            "[[minute]]": i[r + "Minutes"](),
            "[[second]]": i[r + "Seconds"](),
            "[[inDST]]": !1
        })
    }

    function x(e, t) {
        if (!e.number)throw new Error("Object passed doesn't contain locale data for Intl.NumberFormat");
        var n, i = [t], r = t.split("-");
        for (r.length > 2 && 4 == r[1].length && Lt.call(i, r[0] + "-" + r[2]); n = Ot.call(i);)Lt.call(Ct.NumberFormat["[[availableLocales]]"], n), Ct.NumberFormat["[[localeData]]"][n] = e.number, e.date && (e.date.nu = e.number.nu, Lt.call(Ct.DateTimeFormat["[[availableLocales]]"], n), Ct.DateTimeFormat["[[localeData]]"][n] = e.date);
        void 0 === _ && (_ = t), St || (E(mt.NumberFormat.prototype), St = !0), e.date && !Tt && (C(mt.DateTimeFormat.prototype), Tt = !0)
    }

    function F(e) {
        if ("function" == typeof Math.log10)return Math.floor(Math.log10(e));
        var t = Math.round(Math.log(e) * Math.LOG10E);
        return t - (Number("1e" + t) > e)
    }

    function P(e) {
        if (!ft.call(this, "[[availableLocales]]"))throw new TypeError("supportedLocalesOf() is not a constructor");
        var t = Y(), n = arguments[1], i = this["[[availableLocales]]"], r = l(e);
        return t.exp.test(t.input), h(i, r, n)
    }

    function z(e, t, n, i, r) {
        var a = e[t] && e[t][n] ? e[t][n] : e.gregory[n], o = {
            narrow: ["short", "long"],
            "short": ["long", "narrow"],
            "long": ["short", "narrow"]
        }, s = ft.call(a, i) ? a[i] : ft.call(a, o[i][0]) ? a[o[i][0]] : a[o[i][1]];
        return null != r ? s[r] : s
    }

    function U(e) {
        for (var t in e)(e instanceof U || ft.call(e, t)) && bt(this, t, {
            value: e[t],
            enumerable: !0,
            writable: !0,
            configurable: !0
        })
    }

    function j() {
        bt(this, "length", {writable: !0, value: 0}), arguments.length && Lt.apply(this, It.call(arguments))
    }

    function Y() {
        for (var e = /[.?*+^$[\]\\(){}|-]/g, t = RegExp.lastMatch || "", n = RegExp.multiline ? "m" : "", i = {input: RegExp.input}, r = new j, a = !1, o = {}, s = 1; 9 >= s; s++)a = (o["$" + s] = RegExp["$" + s]) || a;
        if (t = t.replace(e, "\\$&"), a)for (var s = 1; 9 >= s; s++) {
            var l = o["$" + s];
            l ? (l = l.replace(e, "\\$&"), t = t.replace(l, "(" + l + ")")) : t = "()" + t, Lt.call(r, t.slice(0, t.indexOf("(") + 1)), t = t.slice(t.indexOf("(") + 1)
        }
        return i.exp = new RegExp(yt.call(r, "") + t, n), i
    }

    function G(e) {
        for (var t = e.length; t--;) {
            var n = e.charAt(t);
            n >= "a" && "z" >= n && (e = e.slice(0, t) + n.toUpperCase() + e.slice(t + 1))
        }
        return e
    }

    function q(e) {
        if (null == e)throw new TypeError("Cannot convert null or undefined to object");
        return Object(e)
    }

    function W(e) {
        return ft.call(e, "__getInternalProperties") ? e.__getInternalProperties(Rt) : Et(null)
    }

    var _, H = "[a-z]{3}(?:-[a-z]{3}){0,2}", V = "(?:[a-z]{2,3}(?:-" + H + ")?|[a-z]{4}|[a-z]{5,8})", K = "[a-z]{4}", $ = "(?:[a-z]{2}|\\d{3})", X = "(?:[a-z0-9]{5,8}|\\d[a-z0-9]{3})", Z = "[0-9a-wy-z]", J = Z + "(?:-[a-z0-9]{2,8})+", Q = "x(?:-[a-z0-9]{1,8})+", et = "(?:en-GB-oed|i-(?:ami|bnn|default|enochian|hak|klingon|lux|mingo|navajo|pwn|tao|tay|tsu)|sgn-(?:BE-FR|BE-NL|CH-DE))", tt = "(?:art-lojban|cel-gaulish|no-bok|no-nyn|zh-(?:guoyu|hakka|min|min-nan|xiang))", nt = "(?:" + et + "|" + tt + ")", it = V + "(?:-" + K + ")?(?:-" + $ + ")?(?:-" + X + ")*(?:-" + J + ")*(?:-" + Q + ")?", rt = RegExp("^(?:" + it + "|" + Q + "|" + nt + ")$", "i"), at = RegExp("^(?!x).*?-(" + X + ")-(?:\\w{4,8}-(?!x-))*\\1\\b", "i"), ot = RegExp("^(?!x).*?-(" + Z + ")-(?:\\w+-(?!x-))*\\1\\b", "i"), st = RegExp("-" + J, "ig"), lt = /(?:[Eec]{1,6}|G{1,5}|(?:[yYu]+|U{1,5})|[ML]{1,5}|d{1,2}|a|[hkHK]{1,2}|m{1,2}|s{1,2}|z{1,4})(?=([^']*'[^']*')*[^']*$)/g, ut = /[QxXVOvZASjgFDwWIQqH]/, ct = {
        month: ["numeric", "2-digit", "short", "long", "narrow"],
        weekday: ["short", "short", "short", "long", "narrow"],
        era: ["short", "short", "short", "long", "narrow"]
    }, dt = ["weekday", "era", "year", "month", "day"], pt = ["hour", "minite", "second", "timeZoneName"], mt = {}, gt = function () {
        try {
            return !!Object.defineProperty({}, "a", {})
        } catch (e) {
            return !1
        }
    }(), ht = !gt && !Object.prototype.__defineGetter__, ft = Object.prototype.hasOwnProperty, bt = gt ? Object.defineProperty : function (e, t, n) {
        "get"in n && e.__defineGetter__ ? e.__defineGetter__(t, n.get) : (!ft.call(e, t) || "value"in n) && (e[t] = n.value)
    }, vt = Array.prototype.indexOf || function (e) {
            var t = this;
            if (!t.length)return -1;
            for (var n = arguments[1] || 0, i = t.length; i > n; n++)if (t[n] === e)return n;
            return -1
        }, Et = Object.create || function (e, t) {
            function n() {
            }

            var i;
            n.prototype = e, i = new n;
            for (var r in t)ft.call(t, r) && bt(i, r, t[r]);
            return i
        }, It = Array.prototype.slice, At = Array.prototype.concat, Lt = Array.prototype.push, yt = Array.prototype.join, Ot = Array.prototype.shift, Nt = (Array.prototype.unshift, Function.prototype.bind || function (e) {
        var t = this, n = It.call(arguments, 1);
        return 1 === t.length ? function () {
            return t.apply(e, At.call(n, It.call(arguments)))
        } : function () {
            return t.apply(e, At.call(n, It.call(arguments)))
        }
    }), Ct = Et(null), Rt = Math.random(), wt = Et(null, {
        narrow: {},
        "short": {},
        "long": {}
    }), St = !1, Tt = !1, Dt = /^[A-Z]{3}$/, Bt = /-u(?:-[0-9a-z]{2,8})+/gi, kt = {
        tags: {
            "art-lojban": "jbo",
            "i-ami": "ami",
            "i-bnn": "bnn",
            "i-hak": "hak",
            "i-klingon": "tlh",
            "i-lux": "lb",
            "i-navajo": "nv",
            "i-pwn": "pwn",
            "i-tao": "tao",
            "i-tay": "tay",
            "i-tsu": "tsu",
            "no-bok": "nb",
            "no-nyn": "nn",
            "sgn-BE-FR": "sfb",
            "sgn-BE-NL": "vgt",
            "sgn-CH-DE": "sgg",
            "zh-guoyu": "cmn",
            "zh-hakka": "hak",
            "zh-min-nan": "nan",
            "zh-xiang": "hsn",
            "sgn-BR": "bzs",
            "sgn-CO": "csn",
            "sgn-DE": "gsg",
            "sgn-DK": "dsl",
            "sgn-ES": "ssp",
            "sgn-FR": "fsl",
            "sgn-GB": "bfi",
            "sgn-GR": "gss",
            "sgn-IE": "isg",
            "sgn-IT": "ise",
            "sgn-JP": "jsl",
            "sgn-MX": "mfs",
            "sgn-NI": "ncs",
            "sgn-NL": "dse",
            "sgn-NO": "nsl",
            "sgn-PT": "psr",
            "sgn-SE": "swl",
            "sgn-US": "ase",
            "sgn-ZA": "sfs",
            "zh-cmn": "cmn",
            "zh-cmn-Hans": "cmn-Hans",
            "zh-cmn-Hant": "cmn-Hant",
            "zh-gan": "gan",
            "zh-wuu": "wuu",
            "zh-yue": "yue"
        },
        subtags: {
            BU: "MM",
            DD: "DE",
            FX: "FR",
            TP: "TL",
            YD: "YE",
            ZR: "CD",
            heploc: "alalc97",
            "in": "id",
            iw: "he",
            ji: "yi",
            jw: "jv",
            mo: "ro",
            ayx: "nun",
            bjd: "drl",
            ccq: "rki",
            cjr: "mom",
            cka: "cmr",
            cmk: "xch",
            drh: "khk",
            drw: "prs",
            gav: "dev",
            hrr: "jal",
            ibi: "opa",
            kgh: "kml",
            lcq: "ppr",
            mst: "mry",
            myt: "mry",
            sca: "hle",
            tie: "ras",
            tkk: "twm",
            tlw: "weo",
            tnf: "prs",
            ybd: "rki",
            yma: "lrr"
        },
        extLang: {
            aao: ["aao", "ar"],
            abh: ["abh", "ar"],
            abv: ["abv", "ar"],
            acm: ["acm", "ar"],
            acq: ["acq", "ar"],
            acw: ["acw", "ar"],
            acx: ["acx", "ar"],
            acy: ["acy", "ar"],
            adf: ["adf", "ar"],
            ads: ["ads", "sgn"],
            aeb: ["aeb", "ar"],
            aec: ["aec", "ar"],
            aed: ["aed", "sgn"],
            aen: ["aen", "sgn"],
            afb: ["afb", "ar"],
            afg: ["afg", "sgn"],
            ajp: ["ajp", "ar"],
            apc: ["apc", "ar"],
            apd: ["apd", "ar"],
            arb: ["arb", "ar"],
            arq: ["arq", "ar"],
            ars: ["ars", "ar"],
            ary: ["ary", "ar"],
            arz: ["arz", "ar"],
            ase: ["ase", "sgn"],
            asf: ["asf", "sgn"],
            asp: ["asp", "sgn"],
            asq: ["asq", "sgn"],
            asw: ["asw", "sgn"],
            auz: ["auz", "ar"],
            avl: ["avl", "ar"],
            ayh: ["ayh", "ar"],
            ayl: ["ayl", "ar"],
            ayn: ["ayn", "ar"],
            ayp: ["ayp", "ar"],
            bbz: ["bbz", "ar"],
            bfi: ["bfi", "sgn"],
            bfk: ["bfk", "sgn"],
            bjn: ["bjn", "ms"],
            bog: ["bog", "sgn"],
            bqn: ["bqn", "sgn"],
            bqy: ["bqy", "sgn"],
            btj: ["btj", "ms"],
            bve: ["bve", "ms"],
            bvl: ["bvl", "sgn"],
            bvu: ["bvu", "ms"],
            bzs: ["bzs", "sgn"],
            cdo: ["cdo", "zh"],
            cds: ["cds", "sgn"],
            cjy: ["cjy", "zh"],
            cmn: ["cmn", "zh"],
            coa: ["coa", "ms"],
            cpx: ["cpx", "zh"],
            csc: ["csc", "sgn"],
            csd: ["csd", "sgn"],
            cse: ["cse", "sgn"],
            csf: ["csf", "sgn"],
            csg: ["csg", "sgn"],
            csl: ["csl", "sgn"],
            csn: ["csn", "sgn"],
            csq: ["csq", "sgn"],
            csr: ["csr", "sgn"],
            czh: ["czh", "zh"],
            czo: ["czo", "zh"],
            doq: ["doq", "sgn"],
            dse: ["dse", "sgn"],
            dsl: ["dsl", "sgn"],
            dup: ["dup", "ms"],
            ecs: ["ecs", "sgn"],
            esl: ["esl", "sgn"],
            esn: ["esn", "sgn"],
            eso: ["eso", "sgn"],
            eth: ["eth", "sgn"],
            fcs: ["fcs", "sgn"],
            fse: ["fse", "sgn"],
            fsl: ["fsl", "sgn"],
            fss: ["fss", "sgn"],
            gan: ["gan", "zh"],
            gds: ["gds", "sgn"],
            gom: ["gom", "kok"],
            gse: ["gse", "sgn"],
            gsg: ["gsg", "sgn"],
            gsm: ["gsm", "sgn"],
            gss: ["gss", "sgn"],
            gus: ["gus", "sgn"],
            hab: ["hab", "sgn"],
            haf: ["haf", "sgn"],
            hak: ["hak", "zh"],
            hds: ["hds", "sgn"],
            hji: ["hji", "ms"],
            hks: ["hks", "sgn"],
            hos: ["hos", "sgn"],
            hps: ["hps", "sgn"],
            hsh: ["hsh", "sgn"],
            hsl: ["hsl", "sgn"],
            hsn: ["hsn", "zh"],
            icl: ["icl", "sgn"],
            ils: ["ils", "sgn"],
            inl: ["inl", "sgn"],
            ins: ["ins", "sgn"],
            ise: ["ise", "sgn"],
            isg: ["isg", "sgn"],
            isr: ["isr", "sgn"],
            jak: ["jak", "ms"],
            jax: ["jax", "ms"],
            jcs: ["jcs", "sgn"],
            jhs: ["jhs", "sgn"],
            jls: ["jls", "sgn"],
            jos: ["jos", "sgn"],
            jsl: ["jsl", "sgn"],
            jus: ["jus", "sgn"],
            kgi: ["kgi", "sgn"],
            knn: ["knn", "kok"],
            kvb: ["kvb", "ms"],
            kvk: ["kvk", "sgn"],
            kvr: ["kvr", "ms"],
            kxd: ["kxd", "ms"],
            lbs: ["lbs", "sgn"],
            lce: ["lce", "ms"],
            lcf: ["lcf", "ms"],
            liw: ["liw", "ms"],
            lls: ["lls", "sgn"],
            lsg: ["lsg", "sgn"],
            lsl: ["lsl", "sgn"],
            lso: ["lso", "sgn"],
            lsp: ["lsp", "sgn"],
            lst: ["lst", "sgn"],
            lsy: ["lsy", "sgn"],
            ltg: ["ltg", "lv"],
            lvs: ["lvs", "lv"],
            lzh: ["lzh", "zh"],
            max: ["max", "ms"],
            mdl: ["mdl", "sgn"],
            meo: ["meo", "ms"],
            mfa: ["mfa", "ms"],
            mfb: ["mfb", "ms"],
            mfs: ["mfs", "sgn"],
            min: ["min", "ms"],
            mnp: ["mnp", "zh"],
            mqg: ["mqg", "ms"],
            mre: ["mre", "sgn"],
            msd: ["msd", "sgn"],
            msi: ["msi", "ms"],
            msr: ["msr", "sgn"],
            mui: ["mui", "ms"],
            mzc: ["mzc", "sgn"],
            mzg: ["mzg", "sgn"],
            mzy: ["mzy", "sgn"],
            nan: ["nan", "zh"],
            nbs: ["nbs", "sgn"],
            ncs: ["ncs", "sgn"],
            nsi: ["nsi", "sgn"],
            nsl: ["nsl", "sgn"],
            nsp: ["nsp", "sgn"],
            nsr: ["nsr", "sgn"],
            nzs: ["nzs", "sgn"],
            okl: ["okl", "sgn"],
            orn: ["orn", "ms"],
            ors: ["ors", "ms"],
            pel: ["pel", "ms"],
            pga: ["pga", "ar"],
            pks: ["pks", "sgn"],
            prl: ["prl", "sgn"],
            prz: ["prz", "sgn"],
            psc: ["psc", "sgn"],
            psd: ["psd", "sgn"],
            pse: ["pse", "ms"],
            psg: ["psg", "sgn"],
            psl: ["psl", "sgn"],
            pso: ["pso", "sgn"],
            psp: ["psp", "sgn"],
            psr: ["psr", "sgn"],
            pys: ["pys", "sgn"],
            rms: ["rms", "sgn"],
            rsi: ["rsi", "sgn"],
            rsl: ["rsl", "sgn"],
            sdl: ["sdl", "sgn"],
            sfb: ["sfb", "sgn"],
            sfs: ["sfs", "sgn"],
            sgg: ["sgg", "sgn"],
            sgx: ["sgx", "sgn"],
            shu: ["shu", "ar"],
            slf: ["slf", "sgn"],
            sls: ["sls", "sgn"],
            sqk: ["sqk", "sgn"],
            sqs: ["sqs", "sgn"],
            ssh: ["ssh", "ar"],
            ssp: ["ssp", "sgn"],
            ssr: ["ssr", "sgn"],
            svk: ["svk", "sgn"],
            swc: ["swc", "sw"],
            swh: ["swh", "sw"],
            swl: ["swl", "sgn"],
            syy: ["syy", "sgn"],
            tmw: ["tmw", "ms"],
            tse: ["tse", "sgn"],
            tsm: ["tsm", "sgn"],
            tsq: ["tsq", "sgn"],
            tss: ["tss", "sgn"],
            tsy: ["tsy", "sgn"],
            tza: ["tza", "sgn"],
            ugn: ["ugn", "sgn"],
            ugy: ["ugy", "sgn"],
            ukl: ["ukl", "sgn"],
            uks: ["uks", "sgn"],
            urk: ["urk", "ms"],
            uzn: ["uzn", "uz"],
            uzs: ["uzs", "uz"],
            vgt: ["vgt", "sgn"],
            vkk: ["vkk", "ms"],
            vkt: ["vkt", "ms"],
            vsi: ["vsi", "sgn"],
            vsl: ["vsl", "sgn"],
            vsv: ["vsv", "sgn"],
            wuu: ["wuu", "zh"],
            xki: ["xki", "sgn"],
            xml: ["xml", "sgn"],
            xmm: ["xmm", "ms"],
            xms: ["xms", "sgn"],
            yds: ["yds", "sgn"],
            ysl: ["ysl", "sgn"],
            yue: ["yue", "zh"],
            zib: ["zib", "sgn"],
            zlm: ["zlm", "ms"],
            zmi: ["zmi", "ms"],
            zsl: ["zsl", "sgn"],
            zsm: ["zsm", "ms"]
        }
    }, Mt = {
        BHD: 3,
        BYR: 0,
        XOF: 0,
        BIF: 0,
        XAF: 0,
        CLF: 0,
        CLP: 0,
        KMF: 0,
        DJF: 0,
        XPF: 0,
        GNF: 0,
        ISK: 0,
        IQD: 3,
        JPY: 0,
        JOD: 3,
        KRW: 0,
        KWD: 3,
        LYD: 3,
        OMR: 3,
        PYG: 0,
        RWF: 0,
        TND: 3,
        UGX: 0,
        UYI: 0,
        VUV: 0,
        VND: 0
    };
    bt(mt, "NumberFormat", {
        configurable: !0,
        writable: !0,
        value: v
    }), bt(mt.NumberFormat, "prototype", {writable: !1}), Ct.NumberFormat = {
        "[[availableLocales]]": [],
        "[[relevantExtensionKeys]]": ["nu"],
        "[[localeData]]": {}
    }, bt(mt.NumberFormat, "supportedLocalesOf", {
        configurable: !0,
        writable: !0,
        value: Nt.call(P, Ct.NumberFormat)
    }), bt(mt.NumberFormat.prototype, "format", {configurable: !0, get: A});
    var xt = {
        arab: ["Ù ", "Ù¡", "Ù¢", "Ù£", "Ù¤", "Ù¥", "Ù¦", "Ù§", "Ù¨", "Ù©"],
        arabext: ["Û°", "Û±", "Û²", "Û³", "Û´", "Ûµ", "Û¶", "Û·", "Û¸", "Û¹"],
        bali: ["á­", "á­‘", "á­’", "á­“", "á­”", "á­•", "á­–", "á­—", "á­˜", "á­™"],
        beng: ["à§¦", "à§§", "à§¨", "à§©", "à§ª", "à§«", "à§¬", "à§­", "à§®", "à§¯"],
        deva: ["à¥¦", "à¥§", "à¥¨", "à¥©", "à¥ª", "à¥«", "à¥¬", "à¥­", "à¥®", "à¥¯"],
        fullwide: ["ï¼", "ï¼‘", "ï¼’", "ï¼“", "ï¼”", "ï¼•", "ï¼–", "ï¼—", "ï¼˜", "ï¼™"],
        gujr: ["à«¦", "à«§", "à«¨", "à«©", "à«ª", "à««", "à«¬", "à«­", "à«®", "à«¯"],
        guru: ["à©¦", "à©§", "à©¨", "à©©", "à©ª", "à©«", "à©¬", "à©­", "à©®", "à©¯"],
        hanidec: ["ã€‡", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­", "ä¸ƒ", "å…«", "ä¹"],
        khmr: ["áŸ ", "áŸ¡", "áŸ¢", "áŸ£", "áŸ¤", "áŸ¥", "áŸ¦", "áŸ§", "áŸ¨", "áŸ©"],
        knda: ["à³¦", "à³§", "à³¨", "à³©", "à³ª", "à³«", "à³¬", "à³­", "à³®", "à³¯"],
        laoo: ["à»", "à»‘", "à»’", "à»“", "à»”", "à»•", "à»–", "à»—", "à»˜", "à»™"],
        latn: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        limb: ["á¥†", "á¥‡", "á¥ˆ", "á¥‰", "á¥Š", "á¥‹", "á¥Œ", "á¥", "á¥Ž", "á¥"],
        mlym: ["àµ¦", "àµ§", "àµ¨", "àµ©", "àµª", "àµ«", "àµ¬", "àµ­", "àµ®", "àµ¯"],
        mong: ["á ", "á ‘", "á ’", "á “", "á ”", "á •", "á –", "á —", "á ˜", "á ™"],
        mymr: ["á€", "á", "á‚", "áƒ", "á„", "á…", "á†", "á‡", "áˆ", "á‰"],
        orya: ["à­¦", "à­§", "à­¨", "à­©", "à­ª", "à­«", "à­¬", "à­­", "à­®", "à­¯"],
        tamldec: ["à¯¦", "à¯§", "à¯¨", "à¯©", "à¯ª", "à¯«", "à¯¬", "à¯­", "à¯®", "à¯¯"],
        telu: ["à±¦", "à±§", "à±¨", "à±©", "à±ª", "à±«", "à±¬", "à±­", "à±®", "à±¯"],
        thai: ["à¹", "à¹‘", "à¹’", "à¹“", "à¹”", "à¹•", "à¹–", "à¹—", "à¹˜", "à¹™"],
        tibt: ["à¼ ", "à¼¡", "à¼¢", "à¼£", "à¼¤", "à¼¥", "à¼¦", "à¼§", "à¼¨", "à¼©"]
    };
    bt(mt.NumberFormat.prototype, "resolvedOptions", {
        configurable: !0, writable: !0, value: function () {
            var e, t = new U, n = ["locale", "numberingSystem", "style", "currency", "currencyDisplay", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "useGrouping"], i = null != this && "object" == typeof this && W(this);
            if (!i || !i["[[initializedNumberFormat]]"])throw new TypeError("`this` value for resolvedOptions() is not an initialized Intl.NumberFormat object.");
            for (var r = 0, a = n.length; a > r; r++)ft.call(i, e = "[[" + n[r] + "]]") && (t[n[r]] = {
                value: i[e],
                writable: !0,
                configurable: !0,
                enumerable: !0
            });
            return Et({}, t)
        }
    }), bt(mt, "DateTimeFormat", {configurable: !0, writable: !0, value: N}), bt(N, "prototype", {writable: !1});
    var Ft = {
        weekday: ["narrow", "short", "long"],
        era: ["narrow", "short", "long"],
        year: ["2-digit", "numeric"],
        month: ["2-digit", "numeric", "narrow", "short", "long"],
        day: ["2-digit", "numeric"],
        hour: ["2-digit", "numeric"],
        minute: ["2-digit", "numeric"],
        second: ["2-digit", "numeric"],
        timeZoneName: ["short", "long"]
    };
    Ct.DateTimeFormat = {
        "[[availableLocales]]": [],
        "[[relevantExtensionKeys]]": ["ca", "nu"],
        "[[localeData]]": {}
    }, bt(mt.DateTimeFormat, "supportedLocalesOf", {
        configurable: !0,
        writable: !0,
        value: Nt.call(P, Ct.DateTimeFormat)
    }), bt(mt.DateTimeFormat.prototype, "format", {
        configurable: !0,
        get: B
    }), bt(mt.DateTimeFormat.prototype, "resolvedOptions", {
        writable: !0, configurable: !0, value: function () {
            var e, t = new U, n = ["locale", "calendar", "numberingSystem", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName"], i = null != this && "object" == typeof this && W(this);
            if (!i || !i["[[initializedDateTimeFormat]]"])throw new TypeError("`this` value for resolvedOptions() is not an initialized Intl.DateTimeFormat object.");
            for (var r = 0, a = n.length; a > r; r++)ft.call(i, e = "[[" + n[r] + "]]") && (t[n[r]] = {
                value: i[e],
                writable: !0,
                configurable: !0,
                enumerable: !0
            });
            return Et({}, t)
        }
    });
    var Pt = mt.__localeSensitiveProtos = {Number: {}, Date: {}};
    Pt.Number.toLocaleString = function () {
        if ("[object Number]" !== Object.prototype.toString.call(this))throw new TypeError("`this` value must be a number for Number.prototype.toLocaleString()");
        return L(new v(arguments[0], arguments[1]), this)
    }, Pt.Date.toLocaleString = function () {
        if ("[object Date]" !== Object.prototype.toString.call(this))throw new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleString()");
        var e = +this;
        if (isNaN(e))return "Invalid Date";
        var t = arguments[0], n = arguments[1], n = w(n, "any", "all"), i = new N(t, n);
        return k(i, e)
    }, Pt.Date.toLocaleDateString = function () {
        if ("[object Date]" !== Object.prototype.toString.call(this))throw new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleDateString()");
        var e = +this;
        if (isNaN(e))return "Invalid Date";
        var t = arguments[0], n = arguments[1], n = w(n, "date", "date"), i = new N(t, n);
        return k(i, e)
    }, Pt.Date.toLocaleTimeString = function () {
        if ("[object Date]" !== Object.prototype.toString.call(this))throw new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleTimeString()");
        var e = +this;
        if (isNaN(e))return "Invalid Date";
        var t = arguments[0], n = arguments[1], n = w(n, "time", "time"), i = new N(t, n);
        return k(i, e)
    }, bt(mt, "__applyLocaleSensitivePrototypes", {
        writable: !0, configurable: !0, value: function () {
            bt(Number.prototype, "toLocaleString", {writable: !0, configurable: !0, value: Pt.Number.toLocaleString});
            for (var e in Pt.Date)ft.call(Pt.Date, e) && bt(Date.prototype, e, {
                writable: !0,
                configurable: !0,
                value: Pt.Date[e]
            })
        }
    }), bt(mt, "__addLocaleData", {
        value: function (e) {
            if (!r(e.locale))throw new Error("Object passed doesn't identify itself with a valid language tag");
            x(e, e.locale)
        }
    }), U.prototype = Et(null), j.prototype = Et(null);
    var zt = mt;
    this.Intl || (this.Intl = zt, zt.__applyLocaleSensitivePrototypes(), require(["lib/intl-locale-data"]));
    var Ut = zt;
    this.IntlPolyfill = Ut
}.call(this), define("/tmp/phpO9geu8", function () {
});