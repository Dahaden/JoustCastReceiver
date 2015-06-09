// Copyright Google Inc. All Rights Reserved.
(function() {
    'use strict';
    var b, l = l || {};
    l.global = this;
    l.ma = function(a) {
        return void 0 !== a
    };
    l.Ye = function(a, c, d) {
        a = a.split(".");
        d = d || l.global;
        a[0] in d || !d.execScript || d.execScript("var " + a[0]);
        for (var e; a.length && (e = a.shift());)!a.length && l.ma(c) ? d[e] = c : d = d[e] ? d[e] : d[e] = {}
    };
    l.Fs = function(a, c) {
        l.Ye(a, c)
    };
    l.DEBUG = !0;
    l.ia = "en";
    l.Ne = !0;
    l.Me = !1;
    l.ri = !l.DEBUG;
    l.bg = !1;
    l.vu = function(a) {
        l.Ig(a)
    };
    l.Ig = function(a, c) {
        l.Ye(a, c)
    };
    l.Aj = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
    l.Mc = function(a) {
        if (!l.L(a) || !a || -1 == a.search(l.Aj)) throw Error("Invalid module identifier");
        if (!l.xh()) throw Error("Module " + a + " has been loaded incorrectly.");
        if (l.sa.xf) throw Error("goog.module may only be called once per module.");
        l.sa.xf = a
    };
    l.Mc.get = function() {
        return l.Mc.yk()
    };
    l.Mc.yk = function() {};
    l.sa = null;
    l.xh = function() {
        return null != l.sa
    };
    l.Mc.Ue = function() {
        if (!l.xh()) throw Error("goog.module.declareTestMethods must be called from within a goog.module");
        l.sa.Ue = !0
    };
    l.Mc.Ng = function() {
        l.sa.Ng = !0
    };
    l.Qu = function(a) {
        if (l.ri) throw a = a || "", Error("Importing test-only code into non-debug environment" + (a ? ": " + a : "."));
    };
    l.Us = function() {};
    l.eh = function(a) {
        a = a.split(".");
        for (var c = l.global, d; d = a.shift();)
            if (l.Zd(c[d])) c = c[d];
            else return null;
        return c
    };
    l.jt = function(a, c) {
        var d = c || l.global,
            e;
        for (e in a) d[e] = a[e]
    };
    l.Jr = function(a, c, d, e) {
        if (l.ag) {
            var f;
            a = a.replace(/\\/g, "/");
            for (var g = l.va, h = 0; f = c[h]; h++) g.Nc[f] = a, g.Cf[a] = !! e;
            for (e = 0; c = d[e]; e++) a in g.Pb || (g.Pb[a] = {}), g.Pb[a][c] = !0
        }
    };
    l.rv = !1;
    l.jo = !0;
    l.bu = function(a) {
        l.global.console && l.global.console.error(a)
    };
    l.Au = function() {};
    l.Fb = "";
    l.na = function() {};
    l.Hr = function() {
        throw Error("unimplemented abstract method");
    };
    l.Gj = function() {
        var a = l.jd.ud;
        a.getInstance = function() {
            if (a.Ic) return a.Ic;
            l.DEBUG && (l.ph[l.ph.length] = a);
            return a.Ic = new a
        }
    };
    l.ph = [];
    l.Ni = !0;
    l.qj = l.DEBUG;
    l.kl = {};
    l.ag = !1;
    l.ag && (l.Pk = {}, l.va = {
            Cf: {},
            Nc: {},
            Pb: {},
            fi: {},
            ld: {},
            Fd: {}
        }, l.mh = function() {
            var a = l.global.document;
            return "undefined" != typeof a && "write" in a
        }, l.nk = function() {
            if (l.global.mi) l.Fb = l.global.mi;
            else if (l.mh())
                for (var a = l.global.document.getElementsByTagName("SCRIPT"), c = a.length - 1; 0 <= c; --c) {
                    var d = a[c].src,
                        e = d.lastIndexOf("?"),
                        e = -1 == e ? d.length : e;
                    if ("base.js" == d.substr(e - 7, 7)) {
                        l.Fb = d.substr(0, e - 7);
                        break
                    }
                }
        }, l.lf = function(a, c) {
            (l.global.kn || l.zm)(a, c) && (l.va.ld[a] = !0)
        }, l.Ii = !l.global.atob && l.global.document &&
        l.global.document.all, l.Ok = function(a) {
            l.lf("", 'goog.retrieveAndExecModule_("' + a + '");') && (l.va.ld[a] = !0)
        }, l.Ff = [], l.tv = function(a, c) {
            return l.Ni && l.ma(l.global.JSON) ? "goog.loadModule(" + l.global.JSON.stringify(c + "\n//# sourceURL=" + a + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + c + "\n;return exports});\n//# sourceURL=" + a + "\n"
        }, l.jl = function() {
            var a = l.Ff.length;
            if (0 < a) {
                var c = l.Ff;
                l.Ff = [];
                for (var d = 0; d < a; d++) l.Oh(c[d])
            }
        }, l.eu = function(a) {
            l.uh(a) && l.Hj(a) && l.Oh(l.Fb + l.gf(a))
        }, l.uh = function(a) {
            return (a =
                l.gf(a)) && l.va.Cf[a] ? l.Fb + a in l.va.Fd : !1
        }, l.Hj = function(a) {
            if ((a = l.gf(a)) && a in l.va.Pb)
                for (var c in l.va.Pb[a])
                    if (!l.bl(c) && !l.uh(c)) return !1;
            return !0
        }, l.Oh = function(a) {
            if (a in l.va.Fd) {
                var c = l.va.Fd[a];
                delete l.va.Fd[a];
                l.Ik(c)
            }
        }, l.Zt = function(a) {
            var c = l.sa;
            try {
                l.sa = {
                    xf: void 0,
                    Ue: !1
                };
                var d;
                if (l.sb(a)) d = a.call(l.global, {});
                else if (l.L(a)) d = l.il.call(l.global, a);
                else throw Error("Invalid module definition");
                var e = l.sa.xf;
                if (!l.L(e) || !e) throw Error('Invalid module name "' + e + '"');
                l.sa.Ng ? l.Ig(e, d) :
                    l.qj && Object.seal && Object.seal(d);
                l.kl[e] = d;
                if (l.sa.Ue)
                    for (var f in d)
                        if (0 === f.indexOf("test", 0) || "tearDown" == f || "setUp" == f || "setUpPage" == f || "tearDownPage" == f) l.global[f] = d[f]
            } finally {
                l.sa = c
            }
        }, l.il = function(a) {
            eval(a);
            return {}
        }, l.ym = function(a) {
            l.global.document.write('<script type="text/javascript" src="' + a + '">\x3c/script>')
        }, l.Ij = function(a) {
            var c = l.global.document,
                d = c.createElement("script");
            d.type = "text/javascript";
            d.src = a;
            d.defer = !1;
            d.async = !1;
            c.head.appendChild(d)
        }, l.zm = function(a, c) {
            if (l.mh()) {
                var d =
                    l.global.document;
                if (!l.bg && "complete" == d.readyState) {
                    if (/\bdeps.js$/.test(a)) return !1;
                    throw Error('Cannot write "' + a + '" after document load');
                }
                var e = l.Ii;
                void 0 === c ? e ? (e = " onreadystatechange='goog.onScriptLoad_(this, " + ++l.Jh + ")' ", d.write('<script type="text/javascript" src="' + a + '"' + e + ">\x3c/script>")) : l.bg ? l.Ij(a) : l.ym(a) : d.write('<script type="text/javascript">' + c + "\x3c/script>");
                return !0
            }
            return !1
        }, l.Jh = 0, l.pu = function(a, c) {
            "complete" == a.readyState && l.Jh == c && l.jl();
            return !0
        }, l.uv = function() {
            function a(f) {
                if (!(f in
                    e.ld)) {
                    if (!(f in e.fi) && (e.fi[f] = !0, f in e.Pb))
                        for (var g in e.Pb[f])
                            if (!l.bl(g))
                                if (g in e.Nc) a(e.Nc[g]);
                                else throw Error("Undefined nameToPath for " + g);
                    f in d || (d[f] = !0, c.push(f))
                }
            }
            var c = [],
                d = {}, e = l.va,
                f;
            for (f in l.Pk) e.ld[f] || a(f);
            for (var g = 0; g < c.length; g++) f = c[g], l.va.ld[f] = !0;
            var h = l.sa;
            l.sa = null;
            for (g = 0; g < c.length; g++)
                if (f = c[g]) e.Cf[f] ? l.Ok(l.Fb + f) : l.lf(l.Fb + f);
                else throw l.sa = h, Error("Undefined script input");
            l.sa = h
        }, l.gf = function(a) {
            return a in l.va.Nc ? l.va.Nc[a] : null
        }, l.nk(), l.global.ln || l.lf(l.Fb +
            "deps.js"));
    l.ku = function(a) {
        a = a.split("/");
        for (var c = 0; c < a.length;) "." == a[c] ? a.splice(c, 1) : c && ".." == a[c] && a[c - 1] && ".." != a[c - 1] ? a.splice(--c, 2) : c++;
        return a.join("/")
    };
    l.Yt = function(a) {
        if (l.global.ni) return l.global.ni(a);
        var c = new l.global.XMLHttpRequest;
        c.open("get", a, !1);
        c.send();
        return c.responseText
    };
    l.Bu = function() {};
    l.Ga = function(a) {
        var c = typeof a;
        if ("object" == c)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return c;
                var d = Object.prototype.toString.call(a);
                if ("[object Window]" == d) return "object";
                if ("[object Array]" == d || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == d || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
            else if ("function" == c && "undefined" == typeof a.call) return "object";
        return c
    };
    l.al = function(a) {
        return null === a
    };
    l.Zd = function(a) {
        return null != a
    };
    l.isArray = function(a) {
        return "array" == l.Ga(a)
    };
    l.ca = function(a) {
        var c = l.Ga(a);
        return "array" == c || "object" == c && "number" == typeof a.length
    };
    l.yt = function(a) {
        return l.hc(a) && "function" == typeof a.getFullYear
    };
    l.L = function(a) {
        return "string" == typeof a
    };
    l.Qk = function(a) {
        return "boolean" == typeof a
    };
    l.gc = function(a) {
        return "number" == typeof a
    };
    l.sb = function(a) {
        return "function" == l.Ga(a)
    };
    l.hc = function(a) {
        var c = typeof a;
        return "object" == c && null != a || "function" == c
    };
    l.Fc = function(a) {
        return a[l.Eb] || (a[l.Eb] = ++l.lm)
    };
    l.ot = function(a) {
        return !!a[l.Eb]
    };
    l.Kl = function(a) {
        "removeAttribute" in a && a.removeAttribute(l.Eb);
        try {
            delete a[l.Eb]
        } catch (c) {}
    };
    l.Eb = "closure_uid_" + (1E9 * Math.random() >>> 0);
    l.lm = 0;
    l.Zs = l.Fc;
    l.yu = l.Kl;
    l.Rj = function(a) {
        var c = l.Ga(a);
        if ("object" == c || "array" == c) {
            if (a.clone) return a.clone();
            var c = "array" == c ? [] : {}, d;
            for (d in a) c[d] = l.Rj(a[d]);
            return c
        }
        return a
    };
    l.Mj = function(a, c, d) {
        return a.call.apply(a.bind, arguments)
    };
    l.Lj = function(a, c, d) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var e = Array.prototype.slice.call(arguments, 2);
            return function() {
                var d = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(d, e);
                return a.apply(c, d)
            }
        }
        return function() {
            return a.apply(c, arguments)
        }
    };
    l.bind = function(a, c, d) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? l.bind = l.Mj : l.bind = l.Lj;
        return l.bind.apply(null, arguments)
    };
    l.Bf = function(a, c) {
        var d = Array.prototype.slice.call(arguments, 1);
        return function() {
            var c = d.slice();
            c.push.apply(c, arguments);
            return a.apply(this, c)
        }
    };
    l.Ph = function(a, c) {
        for (var d in c) a[d] = c[d]
    };
    l.now = l.Ne && Date.now || function() {
        return +new Date
    };
    l.Ik = function(a) {
        if (l.global.execScript) l.global.execScript(a, "JavaScript");
        else if (l.global.eval)
            if (null == l.Kd && (l.global.eval("var _et_ = 1;"), "undefined" != typeof l.global._et_ ? (delete l.global._et_, l.Kd = !0) : l.Kd = !1), l.Kd) l.global.eval(a);
            else {
                var c = l.global.document,
                    d = c.createElement("SCRIPT");
                d.type = "text/javascript";
                d.defer = !1;
                d.appendChild(c.createTextNode(a));
                c.body.appendChild(d);
                c.body.removeChild(d)
            } else throw Error("goog.globalEval not available");
    };
    l.Kd = null;
    l.Ys = function(a, c) {
        var d = function(a) {
            return l.Lg[a] || a
        }, e = function(a) {
                a = a.split("-");
                for (var c = [], e = 0; e < a.length; e++) c.push(d(a[e]));
                return c.join("-")
            }, e = l.Lg ? "BY_WHOLE" == l.Zj ? d : e : function(a) {
                return a
            };
        return c ? a + "-" + e(c) : e(a)
    };
    l.Ku = function(a, c) {
        l.Lg = a;
        l.Zj = c
    };
    l.at = function(a, c) {
        c && (a = a.replace(/\{\$([^}]+)}/g, function(a, e) {
            return e in c ? c[e] : a
        }));
        return a
    };
    l.bt = function(a) {
        return a
    };
    l.Ze = function(a, c) {
        l.Ye(a, c, void 0)
    };
    l.u = function(a, c, d) {
        a[c] = d
    };
    l.kb = function(a, c) {
        function d() {}
        d.prototype = c.prototype;
        a.Qb = c.prototype;
        a.prototype = new d;
        a.prototype.constructor = a;
        a.Kj = function(a, d, g) {
            for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++) h[k - 2] = arguments[k];
            return c.prototype[d].apply(a, h)
        }
    };
    l.Kj = function(a, c, d) {
        var e = arguments.callee.caller;
        if (l.Me || l.DEBUG && !e) throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
        if (e.Qb) {
            for (var f = Array(arguments.length - 1), g = 1; g < arguments.length; g++) f[g - 1] = arguments[g];
            return e.Qb.constructor.apply(a, f)
        }
        f = Array(arguments.length - 2);
        for (g = 2; g < arguments.length; g++) f[g - 2] = arguments[g];
        for (var g = !1, h = a.constructor; h; h = h.Qb && h.Qb.constructor)
            if (h.prototype[c] ===
                e) g = !0;
            else if (g) return h.prototype[c].apply(a, f);
        if (a[c] === e) return a.constructor.prototype[c].apply(a, f);
        throw Error("goog.base called from a method of one name to a method of a different name");
    };
    l.scope = function(a) {
        a.call(l.global)
    };
    l.Ti = !0;
    l.Ti && (Function.prototype.bind = Function.prototype.bind || function(a, c) {
        if (1 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 1);
            d.unshift(this, a);
            return l.bind.apply(null, d)
        }
        return l.bind(this, a)
    }, Function.prototype.Bf = function(a) {
        var c = Array.prototype.slice.call(arguments);
        c.unshift(this, null);
        return l.bind.apply(null, c)
    }, Function.prototype.kb = function(a) {
        l.kb(this, a)
    }, Function.prototype.Ph = function(a) {
        l.Ph(this.prototype, a)
    });
    l.Sa = function(a, c) {
        var d = c.constructor,
            e = c.em;
        d && d != Object.prototype.constructor || (d = function() {
            throw Error("cannot instantiate an interface (no constructor defined).");
        });
        d = l.Sa.Wj(d, a);
        a && l.kb(d, a);
        delete c.constructor;
        delete c.em;
        l.Sa.zg(d.prototype, c);
        null != e && (e instanceof Function ? e(d) : l.Sa.zg(d, e));
        return d
    };
    l.Sa.pj = l.DEBUG;
    l.Sa.Wj = function(a, c) {
        if (l.Sa.pj && Object.seal instanceof Function) {
            if (c && c.prototype && c.prototype[l.xj]) return a;
            var d = function() {
                var c = a.apply(this, arguments) || this;
                c[l.Eb] = c[l.Eb];
                this.constructor === d && Object.seal(c);
                return c
            };
            return d
        }
        return a
    };
    l.Sa.pg = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    l.Sa.zg = function(a, c) {
        for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
        for (var e = 0; e < l.Sa.pg.length; e++) d = l.Sa.pg[e], Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
    };
    l.cv = function() {};
    l.xj = "goog_defineClass_legacy_unsealable";
    var cast = cast || window.cast || {};
    cast.receiver = cast.receiver || {};
    l.ek = {};
    l.ek.To = function() {};
    l.S = function() {
        l.S.Ge != l.S.He.sc && (l.S.Kb[l.Fc(this)] = this);
        this.Bc = this.Bc;
        this.ie = this.ie
    };
    l.S.He = {
        sc: 0,
        dj: 1,
        Yo: 2
    };
    l.S.Ge = 0;
    l.S.Wo = !0;
    l.S.Kb = {};
    l.S.gt = function() {
        var a = [],
            c;
        for (c in l.S.Kb) l.S.Kb.hasOwnProperty(c) && a.push(l.S.Kb[Number(c)]);
        return a
    };
    l.S.ls = function() {
        l.S.Kb = {}
    };
    l.S.prototype.Bc = !1;
    l.S.prototype.nf = function() {
        return this.Bc
    };
    l.S.prototype.Id = function() {
        if (!this.Bc && (this.Bc = !0, this.Ve(), l.S.Ge != l.S.He.sc)) {
            var a = l.Fc(this);
            if (l.S.Ge == l.S.He.dj && !l.S.Kb.hasOwnProperty(a)) throw Error(this + " did not call the goog.Disposable base constructor or was disposed of after a clearUndisposedObjects call");
            delete l.S.Kb[a]
        }
    };
    l.S.prototype.Ve = function() {
        if (this.ie)
            for (; this.ie.length;) this.ie.shift()()
    };
    l.S.nf = function(a) {
        return a && "function" == typeof a.nf ? a.nf() : !1
    };
    l.Id = function(a) {
        a && "function" == typeof a.Id && a.Id()
    };
    l.fk = function(a) {
        for (var c = 0, d = arguments.length; c < d; ++c) {
            var e = arguments[c];
            l.ca(e) ? l.fk.apply(null, e) : l.Id(e)
        }
    };
    l.f = {};
    l.f.dg = function(a) {
        this.id = a
    };
    l.f.dg.prototype.toString = function() {
        return this.id
    };
    l.f.Event = function(a, c) {
        this.type = a instanceof l.f.dg ? String(a) : a;
        this.currentTarget = this.target = c;
        this.defaultPrevented = this.Nb = !1;
        this.Xh = !0
    };
    l.f.Event.prototype.stopPropagation = function() {
        this.Nb = !0
    };
    l.f.Event.prototype.preventDefault = function() {
        this.defaultPrevented = !0;
        this.Xh = !1
    };
    l.f.Event.stopPropagation = function(a) {
        a.stopPropagation()
    };
    l.f.Event.preventDefault = function(a) {
        a.preventDefault()
    };
    cast.receiver.games = {};
    l.Ze("cast.receiver.games", cast.receiver.games);
    cast.receiver.games.SDK_VERSION_NUMBER = "1.0.0";
    l.u(cast.receiver.games, "SDK_VERSION_NUMBER", cast.receiver.games.SDK_VERSION_NUMBER);
    cast.receiver.games.Ap = "0001";
    cast.receiver.games.NAMESPACE_SUFFIX = "com.google.cast.games";
    l.u(cast.receiver.games, "NAMESPACE_SUFFIX", cast.receiver.games.NAMESPACE_SUFFIX);
    cast.receiver.games.$ = {
        SUCCESS: 0,
        INVALID_REQUEST: 1,
        NOT_ALLOWED: 2,
        INCORRECT_VERSION: 3,
        TOO_MANY_PLAYERS: 4
    };
    l.u(cast.receiver.games, "StatusCode", cast.receiver.games.$);
    cast.receiver.games.EventType = {
        UNKNOWN: "unknown",
        PLAYER_AVAILABLE: "player_available",
        PLAYER_READY: "player_ready",
        PLAYER_IDLE: "player_idle",
        PLAYER_PLAYING: "player_playing",
        PLAYER_DROPPED: "player_dropped",
        PLAYER_QUIT: "player_quit",
        GAME_MESSAGE_RECEIVED: "game_message_received",
        GAME_LOADING: "gameplay_loading",
        GAME_RUNNING: "gameplay_running",
        GAME_PAUSED: "gameplay_paused",
        GAME_SHOWING_INFO_SCREEN: "gameplay_showing_info_screen",
        LOBBY_OPEN: "lobby_open",
        LOBBY_CLOSED: "lobby_closed",
        PLAYER_DATA_CHANGED: "player_data_changed",
        GAME_DATA_CHANGED: "game_data_changed",
        GAME_STATUS_TEXT_CHANGED: "game_status_text_changed",
        qd: "game_message_sent"
    };
    l.u(cast.receiver.games, "EventType", cast.receiver.games.EventType);
    cast.receiver.games.Event = function() {
        this.type = cast.receiver.games.EventType.UNKNOWN;
        this.resultExtraMessageData = this.requestExtraMessageData = this.playerInfo = null;
        this.statusCode = cast.receiver.games.$.SUCCESS;
        this.errorDescription = ""
    };
    l.kb(cast.receiver.games.Event, l.f.Event);
    l.u(cast.receiver.games, "Event", cast.receiver.games.Event);
    cast.receiver.games.Pa = {
        UNKNOWN: 0,
        LOADING: 1,
        RUNNING: 2,
        PAUSED: 3,
        SHOWING_INFO_SCREEN: 4
    };
    l.u(cast.receiver.games, "GameplayState", cast.receiver.games.Pa);
    cast.receiver.games.ob = {
        UNKNOWN: 0,
        OPEN: 1,
        CLOSED: 2
    };
    l.u(cast.receiver.games, "LobbyState", cast.receiver.games.ob);
    cast.receiver.games.PlayerState = {
        UNKNOWN: 0,
        DROPPED: 1,
        QUIT: 2,
        AVAILABLE: 3,
        READY: 4,
        IDLE: 5,
        PLAYING: 6
    };
    l.u(cast.receiver.games, "PlayerState", cast.receiver.games.PlayerState);
    cast.receiver.games.o = {};
    cast.receiver.games.o.A = {
        UNKNOWN: 0,
        PLAYER_AVAILABLE: 1,
        PLAYER_READY: 2,
        PLAYER_IDLE: 3,
        PLAYER_PLAYING: 4,
        PLAYER_QUIT: 5,
        rd: 6,
        yb: 7,
        GAME_LOADING: 100,
        GAME_RUNNING: 101,
        GAME_PAUSED: 102,
        GAME_SHOWING_INFO_SCREEN: 103,
        LOBBY_OPEN: 104,
        LOBBY_CLOSED: 105,
        wd: 106,
        pc: 107,
        qc: 108,
        PLAYER_DROPPED: 1E3,
        Ae: 1001,
        ze: 1100
    };
    cast.receiver.games.o.Ei = function() {
        this.type = cast.receiver.games.o.A.UNKNOWN;
        this.requestId = 0;
        this.playerToken = this.playerId = "";
        this.extraMessageData = null
    };
    cast.receiver.games.o.A.Ll = function(a) {
        var c = cast.receiver.games.o.A;
        return a == c.PLAYER_READY || a == c.PLAYER_IDLE || a == c.PLAYER_PLAYING || a == c.PLAYER_DROPPED || a == c.PLAYER_QUIT || a == c.rd || a == c.yb || a == c.wd
    };
    cast.receiver.games.o.A.wk = function(a) {
        var c = cast.receiver.games.PlayerState,
            d = cast.receiver.games.o.A;
        switch (a) {
            case c.DROPPED:
                return d.PLAYER_DROPPED;
            case c.QUIT:
                return d.PLAYER_QUIT;
            case c.AVAILABLE:
                return d.PLAYER_AVAILABLE;
            case c.READY:
                return d.PLAYER_READY;
            case c.IDLE:
                return d.PLAYER_IDLE;
            case c.PLAYING:
                return d.PLAYER_PLAYING;
            default:
                throw Error("No mapping to a game manager request type for player state: " + a);
        }
    };
    cast.receiver.games.o.A.vk = function(a) {
        var c = cast.receiver.games.ob,
            d = cast.receiver.games.o.A;
        switch (a) {
            case c.OPEN:
                return d.LOBBY_OPEN;
            case c.CLOSED:
                return d.LOBBY_CLOSED;
            default:
                throw Error("No mapping to a game manager request type for lobby state: " + a);
        }
    };
    cast.receiver.games.o.A.uk = function(a) {
        var c = cast.receiver.games.Pa,
            d = cast.receiver.games.o.A;
        switch (a) {
            case c.LOADING:
                return d.GAME_LOADING;
            case c.RUNNING:
                return d.GAME_RUNNING;
            case c.PAUSED:
                return d.GAME_PAUSED;
            case c.SHOWING_INFO_SCREEN:
                return d.GAME_SHOWING_INFO_SCREEN;
            default:
                throw Error("No mapping to a game manager request type for gameplay state: " + a);
        }
    };
    l.debug = {};
    l.debug.Error = function(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, l.debug.Error);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a))
    };
    l.kb(l.debug.Error, Error);
    l.debug.Error.prototype.name = "CustomError";
    l.ra = {};
    l.ra.$i = {
        ti: 1,
        Nm: 2,
        TEXT: 3,
        en: 4,
        mo: 5,
        lo: 6,
        Bq: 7,
        qn: 8,
        Nn: 9,
        Pn: 10,
        On: 11,
        bq: 12
    };
    l.b = {};
    l.b.ye = !1;
    l.b.zi = !1;
    l.b.zj = {
        Wi: "\u00a0"
    };
    l.b.$u = function(a, c) {
        return 0 == a.lastIndexOf(c, 0)
    };
    l.b.hk = function(a) {
        var c = a.length - 1;
        return 0 <= c && a.indexOf(";", c) == c
    };
    l.b.gs = function(a, c) {
        return 0 == l.b.Fg(c, a.substr(0, c.length))
    };
    l.b.es = function(a, c) {
        return 0 == l.b.Fg(c, a.substr(a.length - c.length, c.length))
    };
    l.b.fs = function(a, c) {
        return a.toLowerCase() == c.toLowerCase()
    };
    l.b.fm = function(a, c) {
        for (var d = a.split("%s"), e = "", f = Array.prototype.slice.call(arguments, 1); f.length && 1 < d.length;) e += d.shift() + f.shift();
        return e + d.join("%s")
    };
    l.b.os = function(a) {
        return a.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "")
    };
    l.b.Va = function(a) {
        return /^[\s\xa0]*$/.test(a)
    };
    l.b.Bt = function(a) {
        return 0 == a.length
    };
    l.b.wa = l.b.Va;
    l.b.Rk = function(a) {
        return l.b.Va(l.b.ql(a))
    };
    l.b.At = l.b.Rk;
    l.b.wt = function(a) {
        return !/[^\t\n\r ]/.test(a)
    };
    l.b.tt = function(a) {
        return !/[^a-zA-Z]/.test(a)
    };
    l.b.Lt = function(a) {
        return !/[^0-9]/.test(a)
    };
    l.b.ut = function(a) {
        return !/[^a-zA-Z0-9]/.test(a)
    };
    l.b.Rt = function(a) {
        return " " == a
    };
    l.b.St = function(a) {
        return 1 == a.length && " " <= a && "~" >= a || "\u0080" <= a && "\ufffd" >= a
    };
    l.b.av = function(a) {
        return a.replace(/(\r\n|\r|\n)+/g, " ")
    };
    l.b.cs = function(a) {
        return a.replace(/(\r\n|\r|\n)/g, "\n")
    };
    l.b.mu = function(a) {
        return a.replace(/\xa0|\s/g, " ")
    };
    l.b.lu = function(a) {
        return a.replace(/\xa0|[ \t]+/g, " ")
    };
    l.b.ns = function(a) {
        return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
    };
    l.b.trim = l.Ne && String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    };
    l.b.trimLeft = function(a) {
        return a.replace(/^[\s\xa0]+/, "")
    };
    l.b.trimRight = function(a) {
        return a.replace(/[\s\xa0]+$/, "")
    };
    l.b.Fg = function(a, c) {
        var d = String(a).toLowerCase(),
            e = String(c).toLowerCase();
        return d < e ? -1 : d == e ? 0 : 1
    };
    l.b.Uh = /(\.\d+)|(\d+)|(\D+)/g;
    l.b.ou = function(a, c) {
        if (a == c) return 0;
        if (!a) return -1;
        if (!c) return 1;
        for (var d = a.toLowerCase().match(l.b.Uh), e = c.toLowerCase().match(l.b.Uh), f = Math.min(d.length, e.length), g = 0; g < f; g++) {
            var h = d[g],
                k = e[g];
            if (h != k) return d = parseInt(h, 10), !isNaN(d) && (e = parseInt(k, 10), !isNaN(e) && d - e) ? d - e : h < k ? -1 : 1
        }
        return d.length != e.length ? d.length - e.length : a < c ? -1 : 1
    };
    l.b.qv = function(a) {
        return encodeURIComponent(String(a))
    };
    l.b.pv = function(a) {
        return decodeURIComponent(a.replace(/\+/g, " "))
    };
    l.b.Sh = function(a, c) {
        return a.replace(/(\r\n|\r|\n)/g, c ? "<br />" : "<br>")
    };
    l.b.ib = function(a, c) {
        if (c) a = a.replace(l.b.Of, "&amp;").replace(l.b.kg, "&lt;").replace(l.b.gg, "&gt;").replace(l.b.ug, "&quot;").replace(l.b.vg, "&#39;").replace(l.b.og, "&#0;"), l.b.ye && (a = a.replace(l.b.cg, "&#101;"));
        else {
            if (!l.b.ii.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(l.b.Of, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(l.b.kg, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(l.b.gg, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(l.b.ug, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(l.b.vg, "&#39;")); - 1 != a.indexOf("\x00") &&
                (a = a.replace(l.b.og, "&#0;"));
            l.b.ye && -1 != a.indexOf("e") && (a = a.replace(l.b.cg, "&#101;"))
        }
        return a
    };
    l.b.Of = /&/g;
    l.b.kg = /</g;
    l.b.gg = />/g;
    l.b.ug = /"/g;
    l.b.vg = /'/g;
    l.b.og = /\x00/g;
    l.b.cg = /e/g;
    l.b.ii = l.b.ye ? /[\x00&<>"'e]/ : /[\x00&<>"']/;
    l.b.bi = function(a) {
        return l.b.contains(a, "&") ? !l.b.zi && "document" in l.global ? l.b.ci(a) : l.b.mm(a) : a
    };
    l.b.lv = function(a, c) {
        return l.b.contains(a, "&") ? l.b.ci(a, c) : a
    };
    l.b.ci = function(a, c) {
        var d = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        }, e;
        e = c ? c.createElement("div") : l.global.document.createElement("div");
        return a.replace(l.b.Gi, function(a, c) {
            var h = d[a];
            if (h) return h;
            if ("#" == c.charAt(0)) {
                var k = Number("0" + c.substr(1));
                isNaN(k) || (h = String.fromCharCode(k))
            }
            h || (e.innerHTML = a + " ", h = e.firstChild.nodeValue.slice(0, -1));
            return d[a] = h
        })
    };
    l.b.mm = function(a) {
        return a.replace(/&([^;]+);/g, function(a, d) {
            switch (d) {
                case "amp":
                    return "&";
                case "lt":
                    return "<";
                case "gt":
                    return ">";
                case "quot":
                    return '"';
                default:
                    if ("#" == d.charAt(0)) {
                        var e = Number("0" + d.substr(1));
                        if (!isNaN(e)) return String.fromCharCode(e)
                    }
                    return a
            }
        })
    };
    l.b.Gi = /&([^;\s<&]+);?/g;
    l.b.vm = function(a) {
        return l.b.Sh(a.replace(/  /g, " &#160;"), void 0)
    };
    l.b.su = function(a) {
        return a.replace(/(^|[\n ]) /g, "$1" + l.b.zj.Wi)
    };
    l.b.bv = function(a, c) {
        for (var d = c.length, e = 0; e < d; e++) {
            var f = 1 == d ? c : c.charAt(e);
            if (a.charAt(0) == f && a.charAt(a.length - 1) == f) return a.substring(1, a.length - 1)
        }
        return a
    };
    l.b.truncate = function(a, c, d) {
        d && (a = l.b.bi(a));
        a.length > c && (a = a.substring(0, c - 3) + "...");
        d && (a = l.b.ib(a));
        return a
    };
    l.b.jv = function(a, c, d, e) {
        d && (a = l.b.bi(a));
        if (e && a.length > c) e > c && (e = c), a = a.substring(0, c - e) + "..." + a.substring(a.length - e);
        else if (a.length > c) {
            e = Math.floor(c / 2);
            var f = a.length - e;
            a = a.substring(0, e + c % 2) + "..." + a.substring(f)
        }
        d && (a = l.b.ib(a));
        return a
    };
    l.b.Mf = {
        "\x00": "\\0",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\x0B",
        '"': '\\"',
        "\\": "\\\\"
    };
    l.b.ae = {
        "'": "\\'"
    };
    l.b.quote = function(a) {
        a = String(a);
        if (a.quote) return a.quote();
        for (var c = ['"'], d = 0; d < a.length; d++) {
            var e = a.charAt(d),
                f = e.charCodeAt(0);
            c[d + 1] = l.b.Mf[e] || (31 < f && 127 > f ? e : l.b.Qg(e))
        }
        c.push('"');
        return c.join("")
    };
    l.b.Ps = function(a) {
        for (var c = [], d = 0; d < a.length; d++) c[d] = l.b.Qg(a.charAt(d));
        return c.join("")
    };
    l.b.Qg = function(a) {
        if (a in l.b.ae) return l.b.ae[a];
        if (a in l.b.Mf) return l.b.ae[a] = l.b.Mf[a];
        var c = a,
            d = a.charCodeAt(0);
        if (31 < d && 127 > d) c = a;
        else {
            if (256 > d) {
                if (c = "\\x", 16 > d || 256 < d) c += "0"
            } else c = "\\u", 4096 > d && (c += "0");
            c += d.toString(16).toUpperCase()
        }
        return l.b.ae[a] = c
    };
    l.b.contains = function(a, c) {
        return -1 != a.indexOf(c)
    };
    l.b.Pj = function() {
        return l.b.contains(l.i.userAgent.C.ec().toLowerCase(), "webkit")
    };
    l.b.ws = function(a, c) {
        return a && c ? a.split(c).length - 1 : 0
    };
    l.b.lc = function(a, c, d) {
        var e = a;
        0 <= c && c < a.length && 0 < d && (e = a.substr(0, c) + a.substr(c + d, a.length - c - d));
        return e
    };
    l.b.remove = function(a, c) {
        var d = new RegExp(l.b.Gf(c), "");
        return a.replace(d, "")
    };
    l.b.ed = function(a, c) {
        var d = new RegExp(l.b.Gf(c), "g");
        return a.replace(d, "")
    };
    l.b.Gf = function(a) {
        return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    };
    l.b.repeat = function(a, c) {
        return Array(c + 1).join(a)
    };
    l.b.ru = function(a, c, d) {
        a = l.ma(d) ? a.toFixed(d) : String(a);
        d = a.indexOf("."); - 1 == d && (d = a.length);
        return l.b.repeat("0", Math.max(0, c - d)) + a
    };
    l.b.ql = function(a) {
        return null == a ? "" : String(a)
    };
    l.b.Eg = function(a) {
        return Array.prototype.join.call(arguments, "")
    };
    l.b.et = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ l.now()).toString(36)
    };
    l.b.wc = function(a, c) {
        for (var d = 0, e = l.b.trim(String(a)).split("."), f = l.b.trim(String(c)).split("."), g = Math.max(e.length, f.length), h = 0; 0 == d && h < g; h++) {
            var k = e[h] || "",
                m = f[h] || "",
                n = /(\d*)(\D*)/g,
                O = /(\d*)(\D*)/g;
            do {
                var y = n.exec(k) || ["", "", ""],
                    z = O.exec(m) || ["", "", ""];
                if (0 == y[0].length && 0 == z[0].length) break;
                d = l.b.Pe(0 == y[1].length ? 0 : parseInt(y[1], 10), 0 == z[1].length ? 0 : parseInt(z[1], 10)) || l.b.Pe(0 == y[2].length, 0 == z[2].length) || l.b.Pe(y[2], z[2])
            } while (0 == d)
        }
        return d
    };
    l.b.Pe = function(a, c) {
        return a < c ? -1 : a > c ? 1 : 0
    };
    l.b.Fi = 4294967296;
    l.b.pt = function(a) {
        for (var c = 0, d = 0; d < a.length; ++d) c = 31 * c + a.charCodeAt(d), c %= l.b.Fi;
        return c
    };
    l.b.om = 2147483648 * Math.random() | 0;
    l.b.Bs = function() {
        return "goog_" + l.b.om++
    };
    l.b.gv = function(a) {
        var c = Number(a);
        return 0 == c && l.b.Va(a) ? NaN : c
    };
    l.b.Ft = function(a) {
        return /^[a-z]+([A-Z][a-z]*)*$/.test(a)
    };
    l.b.Tt = function(a) {
        return /^([A-Z][a-z]*)+$/.test(a)
    };
    l.b.fv = function(a) {
        return String(a).replace(/\-([a-z])/g, function(a, d) {
            return d.toUpperCase()
        })
    };
    l.b.hv = function(a) {
        return String(a).replace(/([A-Z])/g, "-$1").toLowerCase()
    };
    l.b.iv = function(a, c) {
        var d = l.L(c) ? l.b.Gf(c) : "\\s";
        return a.replace(new RegExp("(^" + (d ? "|[" + d + "]+" : "") + ")([a-z])", "g"), function(a, c, d) {
            return c + d.toUpperCase()
        })
    };
    l.b.ds = function(a) {
        return String(a.charAt(0)).toUpperCase() + String(a.substr(1)).toLowerCase()
    };
    l.b.parseInt = function(a) {
        isFinite(a) && (a = String(a));
        return l.L(a) ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN
    };
    l.b.Vu = function(a, c, d) {
        a = a.split(c);
        for (var e = []; 0 < d && a.length;) e.push(a.shift()), d--;
        a.length && e.push(a.join(c));
        return e
    };
    l.b.Is = function(a, c) {
        var d = [],
            e = [];
        if (a == c) return 0;
        if (!a.length || !c.length) return Math.max(a.length, c.length);
        for (var f = 0; f < c.length + 1; f++) d[f] = f;
        for (f = 0; f < a.length; f++) {
            e[0] = f + 1;
            for (var g = 0; g < c.length; g++) e[g + 1] = Math.min(e[g] + 1, d[g + 1] + 1, d[g] + (a[f] != c[g]));
            for (g = 0; g < d.length; g++) d[g] = e[g]
        }
        return e[c.length]
    };
    l.m = {};
    l.m.Ia = l.DEBUG;
    l.m.md = function(a, c) {
        c.unshift(a);
        l.debug.Error.call(this, l.b.fm.apply(null, c));
        c.shift()
    };
    l.kb(l.m.md, l.debug.Error);
    l.m.md.prototype.name = "AssertionError";
    l.m.pi = function(a) {
        throw a;
    };
    l.m.We = l.m.pi;
    l.m.gb = function(a, c, d, e) {
        var f = "Assertion failed";
        if (d) var f = f + (": " + d),
        g = e;
        else a && (f += ": " + a, g = c);
        a = new l.m.md("" + f, g || []);
        l.m.We(a)
    };
    l.m.Nu = function(a) {
        l.m.Ia && (l.m.We = a)
    };
    l.m.assert = function(a, c, d) {
        l.m.Ia && !a && l.m.gb("", null, c, Array.prototype.slice.call(arguments, 2));
        return a
    };
    l.m.Aa = function(a, c) {
        l.m.Ia && l.m.We(new l.m.md("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
    };
    l.m.Ur = function(a, c, d) {
        l.m.Ia && !l.gc(a) && l.m.gb("Expected number but got %s: %s.", [l.Ga(a), a], c, Array.prototype.slice.call(arguments, 2));
        return a
    };
    l.m.Xb = function(a, c, d) {
        l.m.Ia && !l.L(a) && l.m.gb("Expected string but got %s: %s.", [l.Ga(a), a], c, Array.prototype.slice.call(arguments, 2))
    };
    l.m.Sr = function(a, c, d) {
        l.m.Ia && !l.sb(a) && l.m.gb("Expected function but got %s: %s.", [l.Ga(a), a], c, Array.prototype.slice.call(arguments, 2));
        return a
    };
    l.m.Vr = function(a, c, d) {
        l.m.Ia && !l.hc(a) && l.m.gb("Expected object but got %s: %s.", [l.Ga(a), a], c, Array.prototype.slice.call(arguments, 2));
        return a
    };
    l.m.Pr = function(a, c, d) {
        l.m.Ia && !l.isArray(a) && l.m.gb("Expected array but got %s: %s.", [l.Ga(a), a], c, Array.prototype.slice.call(arguments, 2));
        return a
    };
    l.m.Qr = function(a, c, d) {
        l.m.Ia && !l.Qk(a) && l.m.gb("Expected boolean but got %s: %s.", [l.Ga(a), a], c, Array.prototype.slice.call(arguments, 2));
        return a
    };
    l.m.Rr = function(a, c, d) {
        !l.m.Ia || l.hc(a) && a.nodeType == l.ra.$i.ti || l.m.gb("Expected Element but got %s: %s.", [l.Ga(a), a], c, Array.prototype.slice.call(arguments, 2));
        return a
    };
    l.m.Tr = function(a, c, d, e) {
        !l.m.Ia || a instanceof c || l.m.gb("Expected instanceof %s but got %s.", [l.m.jh(c), l.m.jh(a)], d, Array.prototype.slice.call(arguments, 3));
        return a
    };
    l.m.Wr = function() {
        for (var a in Object.prototype) l.m.Aa(a + " should not be enumerable in Object.prototype.")
    };
    l.m.jh = function(a) {
        return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a
    };
    l.c = {};
    l.ab = l.Ne;
    l.c.Za = !1;
    l.c.Fl = function(a) {
        return a[a.length - 1]
    };
    l.c.Vt = l.c.Fl;
    l.c.O = Array.prototype;
    l.c.indexOf = l.ab && (l.c.Za || l.c.O.indexOf) ? function(a, c, d) {
        l.m.assert(null != a.length);
        return l.c.O.indexOf.call(a, c, d)
    } : function(a, c, d) {
        d = null == d ? 0 : 0 > d ? Math.max(0, a.length + d) : d;
        if (l.L(a)) return l.L(c) && 1 == c.length ? a.indexOf(c, d) : -1;
        for (; d < a.length; d++)
            if (d in a && a[d] === c) return d;
        return -1
    };
    l.c.lastIndexOf = l.ab && (l.c.Za || l.c.O.lastIndexOf) ? function(a, c, d) {
        l.m.assert(null != a.length);
        return l.c.O.lastIndexOf.call(a, c, null == d ? a.length - 1 : d)
    } : function(a, c, d) {
        d = null == d ? a.length - 1 : d;
        0 > d && (d = Math.max(0, a.length + d));
        if (l.L(a)) return l.L(c) && 1 == c.length ? a.lastIndexOf(c, d) : -1;
        for (; 0 <= d; d--)
            if (d in a && a[d] === c) return d;
        return -1
    };
    l.c.forEach = l.ab && (l.c.Za || l.c.O.forEach) ? function(a, c, d) {
        l.m.assert(null != a.length);
        l.c.O.forEach.call(a, c, d)
    } : function(a, c, d) {
        for (var e = a.length, f = l.L(a) ? a.split("") : a, g = 0; g < e; g++) g in f && c.call(d, f[g], g, a)
    };
    l.c.Zg = function(a, c) {
        for (var d = l.L(a) ? a.split("") : a, e = a.length - 1; 0 <= e; --e) e in d && c.call(void 0, d[e], e, a)
    };
    l.c.filter = l.ab && (l.c.Za || l.c.O.filter) ? function(a, c, d) {
        l.m.assert(null != a.length);
        return l.c.O.filter.call(a, c, d)
    } : function(a, c, d) {
        for (var e = a.length, f = [], g = 0, h = l.L(a) ? a.split("") : a, k = 0; k < e; k++)
            if (k in h) {
                var m = h[k];
                c.call(d, m, k, a) && (f[g++] = m)
            }
        return f
    };
    l.c.map = l.ab && (l.c.Za || l.c.O.map) ? function(a, c, d) {
        l.m.assert(null != a.length);
        return l.c.O.map.call(a, c, d)
    } : function(a, c, d) {
        for (var e = a.length, f = Array(e), g = l.L(a) ? a.split("") : a, h = 0; h < e; h++) h in g && (f[h] = c.call(d, g[h], h, a));
        return f
    };
    l.c.reduce = l.ab && (l.c.Za || l.c.O.reduce) ? function(a, c, d, e) {
        l.m.assert(null != a.length);
        e && (c = l.bind(c, e));
        return l.c.O.reduce.call(a, c, d)
    } : function(a, c, d, e) {
        var f = d;
        l.c.forEach(a, function(d, h) {
            f = c.call(e, f, d, h, a)
        });
        return f
    };
    l.c.reduceRight = l.ab && (l.c.Za || l.c.O.reduceRight) ? function(a, c, d, e) {
        l.m.assert(null != a.length);
        e && (c = l.bind(c, e));
        return l.c.O.reduceRight.call(a, c, d)
    } : function(a, c, d, e) {
        var f = d;
        l.c.Zg(a, function(d, h) {
            f = c.call(e, f, d, h, a)
        });
        return f
    };
    l.c.some = l.ab && (l.c.Za || l.c.O.some) ? function(a, c, d) {
        l.m.assert(null != a.length);
        return l.c.O.some.call(a, c, d)
    } : function(a, c, d) {
        for (var e = a.length, f = l.L(a) ? a.split("") : a, g = 0; g < e; g++)
            if (g in f && c.call(d, f[g], g, a)) return !0;
        return !1
    };
    l.c.every = l.ab && (l.c.Za || l.c.O.every) ? function(a, c, d) {
        l.m.assert(null != a.length);
        return l.c.O.every.call(a, c, d)
    } : function(a, c, d) {
        for (var e = a.length, f = l.L(a) ? a.split("") : a, g = 0; g < e; g++)
            if (g in f && !c.call(d, f[g], g, a)) return !1;
        return !0
    };
    l.c.count = function(a, c, d) {
        var e = 0;
        l.c.forEach(a, function(a, g, h) {
            c.call(d, a, g, h) && ++e
        }, d);
        return e
    };
    l.c.find = function(a, c, d) {
        c = l.c.Vg(a, c, d);
        return 0 > c ? null : l.L(a) ? a.charAt(c) : a[c]
    };
    l.c.Vg = function(a, c, d) {
        for (var e = a.length, f = l.L(a) ? a.split("") : a, g = 0; g < e; g++)
            if (g in f && c.call(d, f[g], g, a)) return g;
        return -1
    };
    l.c.Ss = function(a, c, d) {
        c = l.c.pk(a, c, d);
        return 0 > c ? null : l.L(a) ? a.charAt(c) : a[c]
    };
    l.c.pk = function(a, c, d) {
        for (var e = l.L(a) ? a.split("") : a, f = a.length - 1; 0 <= f; f--)
            if (f in e && c.call(d, e[f], f, a)) return f;
        return -1
    };
    l.c.contains = function(a, c) {
        return 0 <= l.c.indexOf(a, c)
    };
    l.c.wa = function(a) {
        return 0 == a.length
    };
    l.c.clear = function(a) {
        if (!l.isArray(a))
            for (var c = a.length - 1; 0 <= c; c--) delete a[c];
        a.length = 0
    };
    l.c.rt = function(a, c) {
        l.c.contains(a, c) || a.push(c)
    };
    l.c.oh = function(a, c, d) {
        l.c.splice(a, d, 0, c)
    };
    l.c.mf = function(a, c) {
        l.Bf(l.c.splice, a, void 0, 0).apply(null, c)
    };
    l.c.insertBefore = function(a, c, d) {
        var e;
        2 == arguments.length || 0 > (e = l.c.indexOf(a, d)) ? a.push(c) : l.c.oh(a, c, e)
    };
    l.c.remove = function(a, c) {
        var d = l.c.indexOf(a, c),
            e;
        (e = 0 <= d) && l.c.lc(a, d);
        return e
    };
    l.c.lc = function(a, c) {
        l.m.assert(null != a.length);
        return 1 == l.c.O.splice.call(a, c, 1).length
    };
    l.c.zu = function(a, c, d) {
        c = l.c.Vg(a, c, d);
        return 0 <= c ? (l.c.lc(a, c), !0) : !1
    };
    l.c.xu = function(a, c, d) {
        var e = 0;
        l.c.Zg(a, function(f, g) {
            c.call(d, f, g, a) && l.c.lc(a, g) && e++
        });
        return e
    };
    l.c.concat = function(a) {
        return l.c.O.concat.apply(l.c.O, arguments)
    };
    l.c.join = function(a) {
        return l.c.O.concat.apply(l.c.O, arguments)
    };
    l.c.wb = function(a) {
        var c = a.length;
        if (0 < c) {
            for (var d = Array(c), e = 0; e < c; e++) d[e] = a[e];
            return d
        }
        return []
    };
    l.c.clone = l.c.wb;
    l.c.extend = function(a, c) {
        for (var d = 1; d < arguments.length; d++) {
            var e = arguments[d];
            if (l.ca(e)) {
                var f = a.length || 0,
                    g = e.length || 0;
                a.length = f + g;
                for (var h = 0; h < g; h++) a[f + h] = e[h]
            } else a.push(e)
        }
    };
    l.c.splice = function(a, c, d, e) {
        l.m.assert(null != a.length);
        return l.c.O.splice.apply(a, l.c.slice(arguments, 1))
    };
    l.c.slice = function(a, c, d) {
        l.m.assert(null != a.length);
        return 2 >= arguments.length ? l.c.O.slice.call(a, c) : l.c.O.slice.call(a, c, d)
    };
    l.c.Il = function(a, c) {
        for (var d = c || a, e = {}, f = 0, g = 0; g < a.length;) {
            var h = a[g++],
                k = l.hc(h) ? "o" + l.Fc(h) : (typeof h).charAt(0) + h;
            Object.prototype.hasOwnProperty.call(e, k) || (e[k] = !0, d[f++] = h)
        }
        d.length = f
    };
    l.c.Ag = function(a, c, d) {
        return l.c.Bg(a, d || l.c.pb, !1, c)
    };
    l.c.Zr = function(a, c, d) {
        return l.c.Bg(a, c, !0, void 0, d)
    };
    l.c.Bg = function(a, c, d, e, f) {
        for (var g = 0, h = a.length, k; g < h;) {
            var m = g + h >> 1,
                n;
            n = d ? c.call(f, a[m], m, a) : c(e, a[m]);
            0 < n ? g = m + 1 : (h = m, k = !n)
        }
        return k ? g : ~g
    };
    l.c.sort = function(a, c) {
        a.sort(c || l.c.pb)
    };
    l.c.Wu = function(a, c) {
        for (var d = 0; d < a.length; d++) a[d] = {
            index: d,
            value: a[d]
        };
        var e = c || l.c.pb;
        l.c.sort(a, function(a, c) {
            return e(a.value, c.value) || a.index - c.index
        });
        for (d = 0; d < a.length; d++) a[d] = a[d].value
    };
    l.c.cm = function(a, c, d) {
        var e = d || l.c.pb;
        l.c.sort(a, function(a, d) {
            return e(c(a), c(d))
        })
    };
    l.c.Uu = function(a, c, d) {
        l.c.cm(a, function(a) {
            return a[c]
        }, d)
    };
    l.c.Dh = function(a) {
        for (var c = l.c.pb, d = 1; d < a.length; d++)
            if (0 < c(a[d - 1], a[d])) return !1;
        return !0
    };
    l.c.Jd = function(a, c, d) {
        if (!l.ca(a) || !l.ca(c) || a.length != c.length) return !1;
        var e = a.length;
        d = d || l.c.Og;
        for (var f = 0; f < e; f++)
            if (!d(a[f], c[f])) return !1;
        return !0
    };
    l.c.rs = function(a, c, d) {
        d = d || l.c.pb;
        for (var e = Math.min(a.length, c.length), f = 0; f < e; f++) {
            var g = d(a[f], c[f]);
            if (0 != g) return g
        }
        return l.c.pb(a.length, c.length)
    };
    l.c.pb = function(a, c) {
        return a > c ? 1 : a < c ? -1 : 0
    };
    l.c.st = function(a, c) {
        return -l.c.pb(a, c)
    };
    l.c.Og = function(a, c) {
        return a === c
    };
    l.c.Xr = function(a, c, d) {
        d = l.c.Ag(a, c, d);
        return 0 > d ? (l.c.oh(a, c, -(d + 1)), !0) : !1
    };
    l.c.Yr = function(a, c, d) {
        c = l.c.Ag(a, c, d);
        return 0 <= c ? l.c.lc(a, c) : !1
    };
    l.c.as = function(a, c, d) {
        for (var e = {}, f = 0; f < a.length; f++) {
            var g = a[f],
                h = c.call(d, g, f, a);
            l.ma(h) && (e[h] || (e[h] = [])).push(g)
        }
        return e
    };
    l.c.jm = function(a, c, d) {
        var e = {};
        l.c.forEach(a, function(f, g) {
            e[c.call(d, f, g, a)] = f
        });
        return e
    };
    l.c.qe = function(a, c, d) {
        var e = [],
            f = 0,
            g = a;
        d = d || 1;
        void 0 !== c && (f = a, g = c);
        if (0 > d * (g - f)) return [];
        if (0 < d)
            for (a = f; a < g; a += d) e.push(a);
        else
            for (a = f; a > g; a += d) e.push(a);
        return e
    };
    l.c.repeat = function(a, c) {
        for (var d = [], e = 0; e < c; e++) d[e] = a;
        return d
    };
    l.c.rk = function(a) {
        for (var c = [], d = 0; d < arguments.length; d++) {
            var e = arguments[d];
            if (l.isArray(e))
                for (var f = 0; f < e.length; f += 8192)
                    for (var g = l.c.slice(e, f, f + 8192), g = l.c.rk.apply(null, g), h = 0; h < g.length; h++) c.push(g[h]);
            else c.push(e)
        }
        return c
    };
    l.c.rotate = function(a, c) {
        l.m.assert(null != a.length);
        a.length && (c %= a.length, 0 < c ? l.c.O.unshift.apply(a, a.splice(-c, c)) : 0 > c && l.c.O.push.apply(a, a.splice(0, -c)));
        return a
    };
    l.c.hu = function(a, c, d) {
        l.m.assert(0 <= c && c < a.length);
        l.m.assert(0 <= d && d < a.length);
        c = l.c.O.splice.call(a, c, 1);
        l.c.O.splice.call(a, d, 0, c[0])
    };
    l.c.gi = function(a) {
        if (!arguments.length) return [];
        for (var c = [], d = 0;; d++) {
            for (var e = [], f = 0; f < arguments.length; f++) {
                var g = arguments[f];
                if (d >= g.length) return c;
                e.push(g[d])
            }
            c.push(e)
        }
    };
    l.c.Tu = function(a, c) {
        for (var d = c || Math.random, e = a.length - 1; 0 < e; e--) {
            var f = Math.floor(d() * (e + 1)),
                g = a[e];
            a[e] = a[f];
            a[f] = g
        }
    };
    l.c.vs = function(a, c) {
        var d = [];
        l.c.forEach(c, function(c) {
            d.push(a[c])
        });
        return d
    };
    l.ra.Db = {
        Bm: "A",
        Cm: "ABBR",
        Dm: "ACRONYM",
        Em: "ADDRESS",
        Jm: "APPLET",
        Km: "AREA",
        Lm: "ARTICLE",
        Mm: "ASIDE",
        AUDIO: "AUDIO",
        Om: "B",
        Pm: "BASE",
        Qm: "BASEFONT",
        Rm: "BDI",
        Sm: "BDO",
        Xm: "BIG",
        Ym: "BLOCKQUOTE",
        $m: "BODY",
        an: "BR",
        bn: "BUTTON",
        cn: "CANVAS",
        dn: "CAPTION",
        fn: "CENTER",
        hn: "CITE",
        mn: "CODE",
        nn: "COL",
        on: "COLGROUP",
        pn: "COMMAND",
        An: "DATA",
        Bn: "DATALIST",
        Dn: "DD",
        Fn: "DEL",
        Gn: "DETAILS",
        Hn: "DFN",
        In: "DIALOG",
        Jn: "DIR",
        Kn: "DIV",
        Ln: "DL",
        fo: "DT",
        io: "EM",
        EMBED: "EMBED",
        qo: "FIELDSET",
        ro: "FIGCAPTION",
        so: "FIGURE",
        FONT: "FONT",
        wo: "FOOTER",
        FORM: "FORM",
        FRAME: "FRAME",
        xo: "FRAMESET",
        zo: "H1",
        Ao: "H2",
        Bo: "H3",
        Co: "H4",
        Do: "H5",
        Eo: "H6",
        Jo: "HEAD",
        Ko: "HEADER",
        Mo: "HGROUP",
        No: "HR",
        Oo: "HTML",
        Qo: "I",
        IFRAME: "IFRAME",
        Vo: "IMG",
        Hi: "INPUT",
        Xo: "INS",
        ap: "ISINDEX",
        bp: "KBD",
        ep: "KEYGEN",
        hp: "LABEL",
        ip: "LEGEND",
        jp: "LI",
        Mi: "LINK",
        tp: "MAP",
        up: "MARK",
        vp: "MATH",
        wp: "MENU",
        xp: "META",
        yp: "METER",
        Zp: "NAV",
        $p: "NOFRAMES",
        aq: "NOSCRIPT",
        OBJECT: "OBJECT",
        fq: "OL",
        hq: "OPTGROUP",
        iq: "OPTION",
        kq: "OUTPUT",
        lq: "P",
        oq: "PARAM",
        Aq: "PRE",
        Cq: "PROGRESS",
        Q: "Q",
        Jq: "RP",
        Kq: "RT",
        Lq: "RUBY",
        Mq: "S",
        Oq: "SAMP",
        SCRIPT: "SCRIPT",
        Qq: "SECTION",
        rj: "SELECT",
        Tq: "SMALL",
        Uq: "SOURCE",
        Vq: "SPAN",
        Xq: "STRIKE",
        Yq: "STRONG",
        STYLE: "STYLE",
        Zq: "SUB",
        ar: "SUMMARY",
        br: "SUP",
        cr: "SVG",
        dr: "TABLE",
        er: "TBODY",
        fr: "TD",
        vj: "TEMPLATE",
        gr: "TEXTAREA",
        ir: "TFOOT",
        jr: "TH",
        kr: "THEAD",
        lr: "TIME",
        mr: "TITLE",
        sr: "TR",
        TRACK: "TRACK",
        vr: "TT",
        xr: "U",
        yr: "UL",
        Br: "VAR",
        VIDEO: "VIDEO",
        Dr: "WBR"
    };
    l.object = {};
    l.object.forEach = function(a, c, d) {
        for (var e in a) c.call(d, a[e], e, a)
    };
    l.object.filter = function(a, c, d) {
        var e = {}, f;
        for (f in a) c.call(d, a[f], f, a) && (e[f] = a[f]);
        return e
    };
    l.object.map = function(a, c, d) {
        var e = {}, f;
        for (f in a) e[f] = c.call(d, a[f], f, a);
        return e
    };
    l.object.some = function(a, c, d) {
        for (var e in a)
            if (c.call(d, a[e], e, a)) return !0;
        return !1
    };
    l.object.every = function(a, c, d) {
        for (var e in a)
            if (!c.call(d, a[e], e, a)) return !1;
        return !0
    };
    l.object.Fa = function(a) {
        var c = 0,
            d;
        for (d in a) c++;
        return c
    };
    l.object.Ws = function(a) {
        for (var c in a) return c
    };
    l.object.Xs = function(a) {
        for (var c in a) return a[c]
    };
    l.object.contains = function(a, c) {
        return l.object.yc(a, c)
    };
    l.object.la = function(a) {
        var c = [],
            d = 0,
            e;
        for (e in a) c[d++] = a[e];
        return c
    };
    l.object.pa = function(a) {
        var c = [],
            d = 0,
            e;
        for (e in a) c[d++] = e;
        return c
    };
    l.object.it = function(a, c) {
        for (var d = l.ca(c), e = d ? c : arguments, d = d ? 0 : 1; d < e.length && (a = a[e[d]], l.ma(a)); d++);
        return a
    };
    l.object.ua = function(a, c) {
        return c in a
    };
    l.object.yc = function(a, c) {
        for (var d in a)
            if (a[d] == c) return !0;
        return !1
    };
    l.object.qk = function(a, c, d) {
        for (var e in a)
            if (c.call(d, a[e], e, a)) return e
    };
    l.object.Ts = function(a, c, d) {
        return (c = l.object.qk(a, c, d)) && a[c]
    };
    l.object.wa = function(a) {
        for (var c in a) return !1;
        return !0
    };
    l.object.clear = function(a) {
        for (var c in a) delete a[c]
    };
    l.object.remove = function(a, c) {
        var d;
        (d = c in a) && delete a[c];
        return d
    };
    l.object.add = function(a, c, d) {
        if (c in a) throw Error('The object already contains the key "' + c + '"');
        l.object.set(a, c, d)
    };
    l.object.get = function(a, c, d) {
        return c in a ? a[c] : d
    };
    l.object.set = function(a, c, d) {
        a[c] = d
    };
    l.object.Pu = function(a, c, d) {
        return c in a ? a[c] : a[c] = d
    };
    l.object.Su = function(a, c, d) {
        if (c in a) return a[c];
        d = d();
        return a[c] = d
    };
    l.object.Jd = function(a, c) {
        for (var d in a)
            if (!(d in c) || a[d] !== c[d]) return !1;
        for (d in c)
            if (!(d in a)) return !1;
        return !0
    };
    l.object.clone = function(a) {
        var c = {}, d;
        for (d in a) c[d] = a[d];
        return c
    };
    l.object.pm = function(a) {
        var c = l.Ga(a);
        if ("object" == c || "array" == c) {
            if (a.clone) return a.clone();
            var c = "array" == c ? [] : {}, d;
            for (d in a) c[d] = l.object.pm(a[d]);
            return c
        }
        return a
    };
    l.object.km = function(a) {
        var c = {}, d;
        for (d in a) c[a[d]] = d;
        return c
    };
    l.object.sg = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    l.object.extend = function(a, c) {
        for (var d, e, f = 1; f < arguments.length; f++) {
            e = arguments[f];
            for (d in e) a[d] = e[d];
            for (var g = 0; g < l.object.sg.length; g++) d = l.object.sg[g], Object.prototype.hasOwnProperty.call(e, d) && (a[d] = e[d])
        }
    };
    l.object.create = function(a) {
        var c = arguments.length;
        if (1 == c && l.isArray(arguments[0])) return l.object.create.apply(null, arguments[0]);
        if (c % 2) throw Error("Uneven number of arguments");
        for (var d = {}, e = 0; e < c; e += 2) d[arguments[e]] = arguments[e + 1];
        return d
    };
    l.object.Te = function(a) {
        var c = arguments.length;
        if (1 == c && l.isArray(arguments[0])) return l.object.Te.apply(null, arguments[0]);
        for (var d = {}, e = 0; e < c; e++) d[arguments[e]] = !0;
        return d
    };
    l.object.zs = function(a) {
        var c = a;
        Object.isFrozen && !Object.isFrozen(a) && (c = Object.create(a), Object.freeze(c));
        return c
    };
    l.object.Dt = function(a) {
        return !!Object.isFrozen && Object.isFrozen(a)
    };
    l.ra.se = {};
    l.ra.se.Cj = l.object.Te("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
    l.ra.se.el = function(a) {
        return !0 === l.ra.se.Cj[a]
    };
    l.g = {};
    l.g.h = {};
    l.g.h.Ai = !1;
    l.g.h.jg = l.g.h.Ai || ("ar" == l.ia.substring(0, 2).toLowerCase() || "fa" == l.ia.substring(0, 2).toLowerCase() || "he" == l.ia.substring(0, 2).toLowerCase() || "iw" == l.ia.substring(0, 2).toLowerCase() || "ps" == l.ia.substring(0, 2).toLowerCase() || "sd" == l.ia.substring(0, 2).toLowerCase() || "ug" == l.ia.substring(0, 2).toLowerCase() || "ur" == l.ia.substring(0, 2).toLowerCase() || "yi" == l.ia.substring(0, 2).toLowerCase()) && (2 == l.ia.length || "-" == l.ia.substring(2, 3) || "_" == l.ia.substring(2, 3)) || 3 <= l.ia.length && "ckb" == l.ia.substring(0, 3).toLowerCase() &&
        (3 == l.ia.length || "-" == l.ia.substring(3, 4) || "_" == l.ia.substring(3, 4));
    l.g.h.Tb = {
        Pi: "\u202a",
        ij: "\u202b",
        qg: "\u202c",
        Qi: "\u200e",
        jj: "\u200f"
    };
    l.g.h.X = {
        zb: 1,
        Cb: -1,
        bb: 0
    };
    l.g.h.uc = "right";
    l.g.h.rc = "left";
    l.g.h.So = l.g.h.jg ? l.g.h.rc : l.g.h.uc;
    l.g.h.Ro = l.g.h.jg ? l.g.h.uc : l.g.h.rc;
    l.g.h.im = function(a) {
        return "number" == typeof a ? 0 < a ? l.g.h.X.zb : 0 > a ? l.g.h.X.Cb : l.g.h.X.bb : null == a ? null : a ? l.g.h.X.Cb : l.g.h.X.zb
    };
    l.g.h.jc = "A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff";
    l.g.h.nc = "\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc";
    l.g.h.Mk = /<[^>]*>|&[^;]+;/g;
    l.g.h.vb = function(a, c) {
        return c ? a.replace(l.g.h.Mk, "") : a
    };
    l.g.h.Pl = new RegExp("[" + l.g.h.nc + "]");
    l.g.h.ml = new RegExp("[" + l.g.h.jc + "]");
    l.g.h.Xd = function(a, c) {
        return l.g.h.Pl.test(l.g.h.vb(a, c))
    };
    l.g.h.nt = l.g.h.Xd;
    l.g.h.lh = function(a) {
        return l.g.h.ml.test(l.g.h.vb(a, void 0))
    };
    l.g.h.pl = new RegExp("^[" + l.g.h.jc + "]");
    l.g.h.Ul = new RegExp("^[" + l.g.h.nc + "]");
    l.g.h.cl = function(a) {
        return l.g.h.Ul.test(a)
    };
    l.g.h.Yk = function(a) {
        return l.g.h.pl.test(a)
    };
    l.g.h.Jt = function(a) {
        return !l.g.h.Yk(a) && !l.g.h.cl(a)
    };
    l.g.h.nl = new RegExp("^[^" + l.g.h.nc + "]*[" + l.g.h.jc + "]");
    l.g.h.Rl = new RegExp("^[^" + l.g.h.jc + "]*[" + l.g.h.nc + "]");
    l.g.h.Yh = function(a, c) {
        return l.g.h.Rl.test(l.g.h.vb(a, c))
    };
    l.g.h.Pt = l.g.h.Yh;
    l.g.h.dm = function(a, c) {
        return l.g.h.nl.test(l.g.h.vb(a, c))
    };
    l.g.h.Ht = l.g.h.dm;
    l.g.h.Bh = /^http:\/\/.*/;
    l.g.h.Kt = function(a, c) {
        a = l.g.h.vb(a, c);
        return l.g.h.Bh.test(a) || !l.g.h.lh(a) && !l.g.h.Xd(a)
    };
    l.g.h.ol = new RegExp("[" + l.g.h.jc + "][^" + l.g.h.nc + "]*$");
    l.g.h.Sl = new RegExp("[" + l.g.h.nc + "][^" + l.g.h.jc + "]*$");
    l.g.h.ik = function(a, c) {
        return l.g.h.ol.test(l.g.h.vb(a, c))
    };
    l.g.h.Gt = l.g.h.ik;
    l.g.h.jk = function(a, c) {
        return l.g.h.Sl.test(l.g.h.vb(a, c))
    };
    l.g.h.Nt = l.g.h.jk;
    l.g.h.Tl = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Arab|Hebr|Thaa|Nkoo|Tfng))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
    l.g.h.Ot = function(a) {
        return l.g.h.Tl.test(a)
    };
    l.g.h.Cg = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(&lt;.*?(&gt;)+)/g;
    l.g.h.Nj = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g;
    l.g.h.lt = function(a, c) {
        return (void 0 === c ? l.g.h.Xd(a) : c) ? a.replace(l.g.h.Cg, "<span dir=rtl>$&</span>") : a.replace(l.g.h.Cg, "<span dir=ltr>$&</span>")
    };
    l.g.h.mt = function(a, c) {
        var d = (void 0 === c ? l.g.h.Xd(a) : c) ? l.g.h.Tb.jj : l.g.h.Tb.Qi;
        return a.replace(l.g.h.Nj, d + "$&" + d)
    };
    l.g.h.Ls = function(a) {
        return "<" == a.charAt(0) ? a.replace(/<\w+/, "$& dir=rtl") : "\n<span dir=rtl>" + a + "</span>"
    };
    l.g.h.Ms = function(a) {
        return l.g.h.Tb.ij + a + l.g.h.Tb.qg
    };
    l.g.h.Js = function(a) {
        return "<" == a.charAt(0) ? a.replace(/<\w+/, "$& dir=ltr") : "\n<span dir=ltr>" + a + "</span>"
    };
    l.g.h.Ks = function(a) {
        return l.g.h.Tb.Pi + a + l.g.h.Tb.qg
    };
    l.g.h.ck = /:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g;
    l.g.h.gl = /left/gi;
    l.g.h.Nl = /right/gi;
    l.g.h.gm = /%%%%/g;
    l.g.h.fu = function(a) {
        return a.replace(l.g.h.ck, ":$1 $4 $3 $2").replace(l.g.h.gl, "%%%%").replace(l.g.h.Nl, l.g.h.rc).replace(l.g.h.gm, l.g.h.uc)
    };
    l.g.h.gk = /([\u0591-\u05f2])"/g;
    l.g.h.bm = /([\u0591-\u05f2])'/g;
    l.g.h.ju = function(a) {
        return a.replace(l.g.h.gk, "$1\u05f4").replace(l.g.h.bm, "$1\u05f3")
    };
    l.g.h.wm = /\s+/;
    l.g.h.Lk = /[\d\u06f0-\u06f9]/;
    l.g.h.Ql = .4;
    l.g.h.Rg = function(a, c) {
        for (var d = 0, e = 0, f = !1, g = l.g.h.vb(a, c).split(l.g.h.wm), h = 0; h < g.length; h++) {
            var k = g[h];
            l.g.h.Yh(k) ? (d++, e++) : l.g.h.Bh.test(k) ? f = !0 : l.g.h.lh(k) ? e++ : l.g.h.Lk.test(k) && (f = !0)
        }
        return 0 == e ? f ? l.g.h.X.zb : l.g.h.X.bb : d / e > l.g.h.Ql ? l.g.h.X.Cb : l.g.h.X.zb
    };
    l.g.h.Gs = function(a, c) {
        return l.g.h.Rg(a, c) == l.g.h.X.Cb
    };
    l.g.h.Lu = function(a, c) {
        a && (c = l.g.h.im(c)) && (a.style.textAlign = c == l.g.h.X.Cb ? l.g.h.uc : l.g.h.rc, a.dir = c == l.g.h.X.Cb ? "rtl" : "ltr")
    };
    l.g.h.Mu = function(a, c) {
        switch (l.g.h.Rg(c)) {
            case l.g.h.X.zb:
                a.dir = "ltr";
                break;
            case l.g.h.X.Cb:
                a.dir = "rtl";
                break;
            default:
                a.removeAttribute("dir")
        }
    };
    l.g.h.ho = function() {};
    l.b.wr = function() {};
    l.b.J = function() {
        this.re = "";
        this.uj = l.b.J.wg
    };
    l.b.J.prototype.jb = !0;
    l.b.J.prototype.hb = function() {
        return this.re
    };
    l.b.J.prototype.toString = function() {
        return "Const{" + this.re + "}"
    };
    l.b.J.I = function(a) {
        if (a instanceof l.b.J && a.constructor === l.b.J && a.uj === l.b.J.wg) return a.re;
        l.m.Aa("expected object of type Const, got '" + a + "'");
        return "type_error:Const"
    };
    l.b.J.cf = function(a) {
        return l.b.J.Yj(a)
    };
    l.b.J.wg = {};
    l.b.J.Yj = function(a) {
        var c = new l.b.J;
        c.re = a;
        return c
    };
    l.a = {};
    l.a.H = function() {
        this.ne = "";
        this.mj = l.a.H.ka
    };
    l.a.H.prototype.jb = !0;
    l.a.H.ka = {};
    l.a.H.Dc = function(a) {
        a = l.b.J.I(a);
        if (0 === a.length) return l.a.H.EMPTY;
        l.a.H.Gg(a);
        l.m.assert(l.b.hk(a), "Last character of style string is not ';': " + a);
        l.m.assert(l.b.contains(a, ":"), "Style string must contain at least one ':', to specify a \"name: value\" pair: " + a);
        return l.a.H.zc(a)
    };
    l.a.H.Gg = function(a) {
        l.m.assert(!/[<>]/.test(a), "Forbidden characters in style string: " + a)
    };
    l.a.H.prototype.hb = function() {
        return this.ne
    };
    l.DEBUG && (l.a.H.prototype.toString = function() {
        return "SafeStyle{" + this.ne + "}"
    });
    l.a.H.I = function(a) {
        if (a instanceof l.a.H && a.constructor === l.a.H && a.mj === l.a.H.ka) return a.ne;
        l.m.Aa("expected object of type SafeStyle, got '" + a + "'");
        return "type_error:SafeStyle"
    };
    l.a.H.zc = function(a) {
        return (new l.a.H).Jb(a)
    };
    l.a.H.prototype.Jb = function(a) {
        this.ne = a;
        return this
    };
    l.a.H.EMPTY = l.a.H.zc("");
    l.a.H.Vb = "zClosurez";
    l.a.H.create = function(a) {
        var c = "",
            d;
        for (d in a) {
            if (!/^[-_a-zA-Z0-9]+$/.test(d)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + d);
            var e = a[d];
            null != e && (e instanceof l.b.J ? (e = l.b.J.I(e), l.m.assert(!/[{;}]/.test(e), "Value does not allow [{;}].")) : l.a.H.Bj.test(e) ? l.a.H.Jk(e) || (l.m.Aa("String value requires balanced quotes, got: " + e), e = l.a.H.Vb) : (l.m.Aa("String value allows only [-,.\"'%_!# a-zA-Z0-9], got: " + e), e = l.a.H.Vb), c += d + ":" + e + ";")
        }
        if (!c) return l.a.H.EMPTY;
        l.a.H.Gg(c);
        return l.a.H.zc(c)
    };
    l.a.H.Jk = function(a) {
        for (var c = !0, d = !0, e = 0; e < a.length; e++) {
            var f = a.charAt(e);
            "'" == f && d ? c = !c : '"' == f && c && (d = !d)
        }
        return c && d
    };
    l.a.H.Bj = /^[-,."'%_!# a-zA-Z0-9]+$/;
    l.a.H.concat = function(a) {
        var c = "",
            d = function(a) {
                l.isArray(a) ? l.c.forEach(a, d) : c += l.a.H.I(a)
            };
        l.c.forEach(arguments, d);
        return c ? l.a.H.zc(c) : l.a.H.EMPTY
    };
    l.a.Z = function() {
        this.me = "";
        this.Ke = l.a.Z.ka
    };
    l.a.Z.prototype.jb = !0;
    l.a.Z.ka = {};
    l.a.Z.concat = function(a) {
        var c = "",
            d = function(a) {
                l.isArray(a) ? l.c.forEach(a, d) : c += l.a.Z.I(a)
            };
        l.c.forEach(arguments, d);
        return l.a.Z.Cd(c)
    };
    l.a.Z.Dc = function(a) {
        a = l.b.J.I(a);
        if (0 === a.length) return l.a.Z.EMPTY;
        l.m.assert(!l.b.contains(a, "<"), "Forbidden '<' character in style sheet string: " + a);
        return l.a.Z.Cd(a)
    };
    l.a.Z.prototype.hb = function() {
        return this.me
    };
    l.DEBUG && (l.a.Z.prototype.toString = function() {
        return "SafeStyleSheet{" + this.me + "}"
    });
    l.a.Z.I = function(a) {
        if (a instanceof l.a.Z && a.constructor === l.a.Z && a.Ke === l.a.Z.ka) return a.me;
        l.m.Aa("expected object of type SafeStyleSheet, got '" + a + "'");
        return "type_error:SafeStyleSheet"
    };
    l.a.Z.Cd = function(a) {
        return (new l.a.Z).Jb(a)
    };
    l.a.Z.prototype.Jb = function(a) {
        this.me = a;
        return this
    };
    l.a.Z.EMPTY = l.a.Z.Cd("");
    l.Ka = {};
    l.Ka.url = {};
    l.Ka.url.Vj = function(a) {
        return l.Ka.url.kh().createObjectURL(a)
    };
    l.Ka.url.Cu = function(a) {
        l.Ka.url.kh().revokeObjectURL(a)
    };
    l.Ka.url.kh = function() {
        var a = l.Ka.url.Wg();
        if (null != a) return a;
        throw Error("This browser doesn't seem to support blob URLs");
    };
    l.Ka.url.Wg = function() {
        return l.ma(l.global.URL) && l.ma(l.global.URL.createObjectURL) ? l.global.URL : l.ma(l.global.webkitURL) && l.ma(l.global.webkitURL.createObjectURL) ? l.global.webkitURL : l.ma(l.global.createObjectURL) ? l.global : null
    };
    l.Ka.url.$r = function() {
        return null != l.Ka.url.Wg()
    };
    l.a.K = function() {
        this.mb = "";
        this.oj = l.a.K.ka
    };
    l.a.K.Vb = "about:invalid#zClosurez";
    l.a.K.prototype.jb = !0;
    l.a.K.prototype.hb = function() {
        return this.mb
    };
    l.a.K.prototype.kf = !0;
    l.a.K.prototype.Hb = function() {
        return l.g.h.X.zb
    };
    l.DEBUG && (l.a.K.prototype.toString = function() {
        return "SafeUrl{" + this.mb + "}"
    });
    l.a.K.I = function(a) {
        if (a instanceof l.a.K && a.constructor === l.a.K && a.oj === l.a.K.ka) return a.mb;
        l.m.Aa("expected object of type SafeUrl, got '" + a + "'");
        return "type_error:SafeUrl"
    };
    l.a.K.Dc = function(a) {
        return l.a.K.Dd(l.b.J.I(a))
    };
    l.a.kj = /^image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)$/i;
    l.a.K.Vs = function(a) {
        a = l.a.kj.test(a.type) ? l.Ka.url.Vj(a) : l.a.K.Vb;
        return l.a.K.Dd(a)
    };
    l.a.nj = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;
    l.a.K.Xl = function(a) {
        if (a instanceof l.a.K) return a;
        a = a.jb ? a.hb() : String(a);
        a = l.a.nj.test(a) ? l.a.K.Al(a) : l.a.K.Vb;
        return l.a.K.Dd(a)
    };
    l.a.K.Al = function(a) {
        try {
            var c = encodeURI(a)
        } catch (d) {
            return l.a.K.Vb
        }
        return c.replace(l.a.K.Xi, function(a) {
            return l.a.K.Yi[a]
        })
    };
    l.a.K.Xi = /[()']|%5B|%5D|%25/g;
    l.a.K.Yi = {
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "%5B": "[",
        "%5D": "]",
        "%25": "%"
    };
    l.a.K.ka = {};
    l.a.K.Dd = function(a) {
        var c = new l.a.K;
        c.mb = a;
        return c
    };
    l.a.ga = function() {
        this.oe = "";
        this.wj = l.a.ga.ka
    };
    l.a.ga.prototype.jb = !0;
    l.a.ga.prototype.hb = function() {
        return this.oe
    };
    l.a.ga.prototype.kf = !0;
    l.a.ga.prototype.Hb = function() {
        return l.g.h.X.zb
    };
    l.DEBUG && (l.a.ga.prototype.toString = function() {
        return "TrustedResourceUrl{" + this.oe + "}"
    });
    l.a.ga.I = function(a) {
        if (a instanceof l.a.ga && a.constructor === l.a.ga && a.wj === l.a.ga.ka) return a.oe;
        l.m.Aa("expected object of type TrustedResourceUrl, got '" + a + "'");
        return "type_error:TrustedResourceUrl"
    };
    l.a.ga.Dc = function(a) {
        return l.a.ga.Kg(l.b.J.I(a))
    };
    l.a.ga.ka = {};
    l.a.ga.Kg = function(a) {
        var c = new l.a.ga;
        c.oe = a;
        return c
    };
    l.a.v = function() {
        this.mb = "";
        this.lj = l.a.v.ka;
        this.Gd = null
    };
    l.a.v.prototype.kf = !0;
    l.a.v.prototype.Hb = function() {
        return this.Gd
    };
    l.a.v.prototype.jb = !0;
    l.a.v.prototype.hb = function() {
        return this.mb
    };
    l.DEBUG && (l.a.v.prototype.toString = function() {
        return "SafeHtml{" + this.mb + "}"
    });
    l.a.v.I = function(a) {
        if (a instanceof l.a.v && a.constructor === l.a.v && a.lj === l.a.v.ka) return a.mb;
        l.m.Aa("expected object of type SafeHtml, got '" + a + "'");
        return "type_error:SafeHtml"
    };
    l.a.v.ib = function(a) {
        if (a instanceof l.a.v) return a;
        var c = null;
        a.kf && (c = a.Hb());
        return l.a.v.fb(l.b.ib(a.jb ? a.hb() : String(a)), c)
    };
    l.a.v.qt = function(a) {
        if (a instanceof l.a.v) return a;
        a = l.a.v.ib(a);
        return l.a.v.fb(l.b.Sh(l.a.v.I(a)), a.Hb())
    };
    l.a.v.jf = function(a) {
        if (a instanceof l.a.v) return a;
        a = l.a.v.ib(a);
        return l.a.v.fb(l.b.vm(l.a.v.I(a)), a.Hb())
    };
    l.a.v.cf = l.a.v.ib;
    l.a.v.xg = /^[a-zA-Z0-9-]+$/;
    l.a.v.yj = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    };
    l.a.v.Zi = l.object.Te(l.ra.Db.EMBED, l.ra.Db.IFRAME, l.ra.Db.Mi, l.ra.Db.OBJECT, l.ra.Db.SCRIPT, l.ra.Db.STYLE, l.ra.Db.vj);
    l.a.v.create = function(a, c, d) {
        if (!l.a.v.xg.test(a)) throw Error("Invalid tag name <" + a + ">.");
        if (a.toUpperCase() in l.a.v.Zi) throw Error("Tag name <" + a + "> is not allowed for SafeHtml.");
        return l.a.v.Re(a, c, d)
    };
    l.a.v.ys = function(a, c, d, e) {
        var f = {};
        f.src = a || null;
        f.srcdoc = c || null;
        a = l.a.v.Hg(f, {
            sandbox: ""
        }, d);
        return l.a.v.Re("iframe", a, e)
    };
    l.a.v.As = function(a, c) {
        var d = l.a.v.Hg({
            type: "text/css"
        }, {}, c),
            e = "";
        a = l.c.concat(a);
        for (var f = 0; f < a.length; f++) e += l.a.Z.I(a[f]);
        e = l.a.v.fb(e, l.g.h.X.bb);
        return l.a.v.Re("style", d, e)
    };
    l.a.v.sk = function(a, c, d) {
        if (d instanceof l.b.J) d = l.b.J.I(d);
        else if ("style" == c.toLowerCase()) d = l.a.v.Ek(d);
        else {
            if (/^on/i.test(c)) throw Error('Attribute "' + c + '" requires goog.string.Const value, "' + d + '" given.');
            if (c.toLowerCase() in l.a.v.yj)
                if (d instanceof l.a.ga) d = l.a.ga.I(d);
                else if (d instanceof l.a.K) d = l.a.K.I(d);
            else throw Error('Attribute "' + c + '" on tag "' + a + '" requires goog.html.SafeUrl or goog.string.Const value, "' + d + '" given.');
        }
        d.jb && (d = d.hb());
        l.m.assert(l.L(d) || l.gc(d), "String or number value expected, got " +
            typeof d + " with value: " + d);
        return c + '="' + l.b.ib(String(d)) + '"'
    };
    l.a.v.Ek = function(a) {
        if (!l.hc(a)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof a + " given: " + a);
        a instanceof l.a.H || (a = l.a.H.create(a));
        return l.a.H.I(a)
    };
    l.a.v.Cs = function(a, c, d, e) {
        c = l.a.v.create(c, d, e);
        c.Gd = a;
        return c
    };
    l.a.v.concat = function(a) {
        var c = l.g.h.X.bb,
            d = "",
            e = function(a) {
                l.isArray(a) ? l.c.forEach(a, e) : (a = l.a.v.ib(a), d += l.a.v.I(a), a = a.Hb(), c == l.g.h.X.bb ? c = a : a != l.g.h.X.bb && c != a && (c = null))
            };
        l.c.forEach(arguments, e);
        return l.a.v.fb(d, c)
    };
    l.a.v.us = function(a, c) {
        var d = l.a.v.concat(l.c.slice(arguments, 1));
        d.Gd = a;
        return d
    };
    l.a.v.ka = {};
    l.a.v.fb = function(a, c) {
        return (new l.a.v).Jb(a, c)
    };
    l.a.v.prototype.Jb = function(a, c) {
        this.mb = a;
        this.Gd = c;
        return this
    };
    l.a.v.Re = function(a, c, d) {
        var e = null,
            f = "<" + a;
        if (c)
            for (var g in c) {
                if (!l.a.v.xg.test(g)) throw Error('Invalid attribute name "' + g + '".');
                var h = c[g];
                l.Zd(h) && (f += " " + l.a.v.sk(a, g, h))
            }
        l.Zd(d) ? l.isArray(d) || (d = [d]) : d = [];
        l.ra.se.el(a.toLowerCase()) ? (l.m.assert(!d.length, "Void tag <" + a + "> does not allow content."), f += ">") : (e = l.a.v.concat(d), f += ">" + l.a.v.I(e) + "</" + a + ">", e = e.Hb());
        (a = c && c.dir) && (e = /^(ltr|rtl|auto)$/i.test(a) ? l.g.h.X.bb : null);
        return l.a.v.fb(f, e)
    };
    l.a.v.Hg = function(a, c, d) {
        var e = {}, f;
        for (f in a) l.m.assert(f.toLowerCase() == f, "Must be lower case"), e[f] = a[f];
        for (f in c) l.m.assert(f.toLowerCase() == f, "Must be lower case"), e[f] = c[f];
        for (f in d) {
            var g = f.toLowerCase();
            if (g in a) throw Error('Cannot override "' + g + '" attribute, got "' + f + '" with value "' + d[f] + '"');
            g in c && delete e[g];
            e[f] = d[f]
        }
        return e
    };
    l.a.v.Mn = l.a.v.fb("<!DOCTYPE html>", l.g.h.X.bb);
    l.a.v.EMPTY = l.a.v.fb("", l.g.h.X.bb);
    l.a.fa = function() {
        this.le = "";
        this.Ke = l.a.fa.ka
    };
    l.a.fa.prototype.jb = !0;
    l.a.fa.ka = {};
    l.a.fa.Dc = function(a) {
        a = l.b.J.I(a);
        return 0 === a.length ? l.a.fa.EMPTY : l.a.fa.Se(a)
    };
    l.a.fa.prototype.hb = function() {
        return this.le
    };
    l.DEBUG && (l.a.fa.prototype.toString = function() {
        return "SafeScript{" + this.le + "}"
    });
    l.a.fa.I = function(a) {
        if (a instanceof l.a.fa && a.constructor === l.a.fa && a.Ke === l.a.fa.ka) return a.le;
        l.m.Aa("expected object of type SafeScript, got '" + a + "'");
        return "type_error:SafeScript"
    };
    l.a.fa.Se = function(a) {
        return (new l.a.fa).Jb(a)
    };
    l.a.fa.prototype.Jb = function(a) {
        this.le = a;
        return this
    };
    l.a.fa.EMPTY = l.a.fa.Se("");
    l.a.Rb = {};
    l.a.Rb.Gu = function(a, c, d) {
        l.m.Xb(l.b.J.I(a), "must provide justification");
        l.m.assert(!l.b.Va(l.b.J.I(a)), "must provide non-empty justification");
        return l.a.v.fb(c, d || null)
    };
    l.a.Rb.Hu = function(a, c) {
        l.m.Xb(l.b.J.I(a), "must provide justification");
        l.m.assert(!l.b.wa(l.b.J.I(a)), "must provide non-empty justification");
        return l.a.fa.Se(c)
    };
    l.a.Rb.Iu = function(a, c) {
        l.m.Xb(l.b.J.I(a), "must provide justification");
        l.m.assert(!l.b.Va(l.b.J.I(a)), "must provide non-empty justification");
        return l.a.H.zc(c)
    };
    l.a.Rb.Ju = function(a, c) {
        l.m.Xb(l.b.J.I(a), "must provide justification");
        l.m.assert(!l.b.Va(l.b.J.I(a)), "must provide non-empty justification");
        return l.a.Z.Cd(c)
    };
    l.a.Rb.Vl = function(a, c) {
        l.m.Xb(l.b.J.I(a), "must provide justification");
        l.m.assert(!l.b.Va(l.b.J.I(a)), "must provide non-empty justification");
        return l.a.K.Dd(c)
    };
    l.a.Rb.kv = function(a, c) {
        l.m.Xb(l.b.J.I(a), "must provide justification");
        l.m.assert(!l.b.Va(l.b.J.I(a)), "must provide non-empty justification");
        return l.a.ga.Kg(c)
    };
    l.w = {};
    l.w.zn = function() {};
    l.P = {};
    l.P.xc = function(a) {
        return function() {
            return a
        }
    };
    l.P.po = l.P.xc(!1);
    l.P.ur = l.P.xc(!0);
    l.P.cq = l.P.xc(null);
    l.P.Nk = function(a) {
        return a
    };
    l.P.error = function(a) {
        return function() {
            throw Error(a);
        }
    };
    l.P.Aa = function(a) {
        return function() {
            throw a;
        }
    };
    l.P.$t = function(a, c) {
        c = c || 0;
        return function() {
            return a.apply(this, Array.prototype.slice.call(arguments, 0, c))
        }
    };
    l.P.nu = function(a) {
        return function() {
            return arguments[a]
        }
    };
    l.P.sv = function(a, c) {
        return l.P.$l(a, l.P.xc(c))
    };
    l.P.Os = function(a, c) {
        return function(d) {
            return c ? a == d : a === d
        }
    };
    l.P.ss = function(a, c) {
        var d = arguments,
            e = d.length;
        return function() {
            var a;
            e && (a = d[e - 1].apply(this, arguments));
            for (var c = e - 2; 0 <= c; c--) a = d[c].call(this, a);
            return a
        }
    };
    l.P.$l = function(a) {
        var c = arguments,
            d = c.length;
        return function() {
            for (var a, f = 0; f < d; f++) a = c[f].apply(this, arguments);
            return a
        }
    };
    l.P.Kr = function(a) {
        var c = arguments,
            d = c.length;
        return function() {
            for (var a = 0; a < d; a++)
                if (!c[a].apply(this, arguments)) return !1;
            return !0
        }
    };
    l.P.qu = function(a) {
        var c = arguments,
            d = c.length;
        return function() {
            for (var a = 0; a < d; a++)
                if (c[a].apply(this, arguments)) return !0;
            return !1
        }
    };
    l.P.Bl = function(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    };
    l.P.create = function(a, c) {
        var d = function() {};
        d.prototype = a.prototype;
        d = new d;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    };
    l.P.li = !0;
    l.P.bs = function(a) {
        var c = !1,
            d;
        return function() {
            if (!l.P.li) return a();
            c || (d = a(), c = !0);
            return d
        }
    };
    l.F = {};
    l.F.wu = function(a) {
        return Math.floor(Math.random() * a)
    };
    l.F.mv = function(a, c) {
        return a + Math.random() * (c - a)
    };
    l.F.ks = function(a, c, d) {
        return Math.min(Math.max(a, c), d)
    };
    l.F.Qh = function(a, c) {
        var d = a % c;
        return 0 > d * c ? d + c : d
    };
    l.F.Wt = function(a, c, d) {
        return a + d * (c - a)
    };
    l.F.iu = function(a, c, d) {
        return Math.abs(a - c) <= (d || 1E-6)
    };
    l.F.Nf = function(a) {
        return l.F.Qh(a, 360)
    };
    l.F.Xu = function(a) {
        return l.F.Qh(a, 2 * Math.PI)
    };
    l.F.ai = function(a) {
        return a * Math.PI / 180
    };
    l.F.hm = function(a) {
        return 180 * a / Math.PI
    };
    l.F.Nr = function(a, c) {
        return c * Math.cos(l.F.ai(a))
    };
    l.F.Or = function(a, c) {
        return c * Math.sin(l.F.ai(a))
    };
    l.F.Lr = function(a, c, d, e) {
        return l.F.Nf(l.F.hm(Math.atan2(e - c, d - a)))
    };
    l.F.Mr = function(a, c) {
        var d = l.F.Nf(c) - l.F.Nf(a);
        180 < d ? d -= 360 : -180 >= d && (d = 360 + d);
        return d
    };
    l.F.sign = Math.sign || function(a) {
        return 0 < a ? 1 : 0 > a ? -1 : a
    };
    l.F.cu = function(a, c, d, e) {
        d = d || function(a, c) {
            return a == c
        };
        e = e || function(c) {
            return a[c]
        };
        for (var f = a.length, g = c.length, h = [], k = 0; k < f + 1; k++) h[k] = [], h[k][0] = 0;
        for (var m = 0; m < g + 1; m++) h[0][m] = 0;
        for (k = 1; k <= f; k++)
            for (m = 1; m <= g; m++) d(a[k - 1], c[m - 1]) ? h[k][m] = h[k - 1][m - 1] + 1 : h[k][m] = Math.max(h[k - 1][m], h[k][m - 1]);
        for (var n = [], k = f, m = g; 0 < k && 0 < m;) d(a[k - 1], c[m - 1]) ? (n.unshift(e(k - 1, m - 1)), k--, m--) : h[k - 1][m] > h[k][m - 1] ? k-- : m--;
        return n
    };
    l.F.Zh = function(a) {
        return l.c.reduce(arguments, function(a, d) {
            return a + d
        }, 0)
    };
    l.F.Jj = function(a) {
        return l.F.Zh.apply(null, arguments) / arguments.length
    };
    l.F.Wl = function(a) {
        var c = arguments.length;
        if (2 > c) return 0;
        var d = l.F.Jj.apply(null, arguments);
        return l.F.Zh.apply(null, l.c.map(arguments, function(a) {
            return Math.pow(a - d, 2)
        })) / (c - 1)
    };
    l.F.Yu = function(a) {
        return Math.sqrt(l.F.Wl.apply(null, arguments))
    };
    l.F.$d = function(a) {
        return isFinite(a) && 0 == a % 1
    };
    l.F.Ct = function(a) {
        return isFinite(a) && !isNaN(a)
    };
    l.F.It = function(a) {
        return 0 == a && 0 > 1 / a
    };
    l.F.au = function(a) {
        if (0 < a) {
            var c = Math.round(Math.log(a) * Math.LOG10E);
            return c - (parseFloat("1e" + c) > a)
        }
        return 0 == a ? -Infinity : NaN
    };
    l.F.Fu = function(a, c) {
        l.m.assert(!l.ma(c) || 0 < c);
        return Math.floor(a + (c || 2E-15))
    };
    l.F.Eu = function(a, c) {
        l.m.assert(!l.ma(c) || 0 < c);
        return Math.ceil(a - (c || 2E-15))
    };
    l.l = {};
    l.l.ja = "StopIteration" in l.global ? l.global.StopIteration : {
        message: "StopIteration",
        stack: ""
    };
    l.l.Iterator = function() {};
    l.l.Iterator.prototype.next = function() {
        throw l.l.ja;
    };
    l.l.Iterator.prototype.vc = function() {
        return this
    };
    l.l.aa = function(a) {
        if (a instanceof l.l.Iterator) return a;
        if ("function" == typeof a.vc) return a.vc(!1);
        if (l.ca(a)) {
            var c = 0,
                d = new l.l.Iterator;
            d.next = function() {
                for (;;) {
                    if (c >= a.length) throw l.l.ja;
                    if (c in a) return a[c++];
                    c++
                }
            };
            return d
        }
        throw Error("Not implemented");
    };
    l.l.forEach = function(a, c, d) {
        if (l.ca(a)) try {
            l.c.forEach(a, c, d)
        } catch (e) {
            if (e !== l.l.ja) throw e;
        } else {
            a = l.l.aa(a);
            try {
                for (;;) c.call(d, a.next(), void 0, a)
            } catch (f) {
                if (f !== l.l.ja) throw f;
            }
        }
    };
    l.l.filter = function(a, c, d) {
        var e = l.l.aa(a);
        a = new l.l.Iterator;
        a.next = function() {
            for (;;) {
                var a = e.next();
                if (c.call(d, a, void 0, e)) return a
            }
        };
        return a
    };
    l.l.Rs = function(a, c, d) {
        return l.l.filter(a, l.P.Bl(c), d)
    };
    l.l.qe = function(a, c, d) {
        var e = 0,
            f = a,
            g = d || 1;
        1 < arguments.length && (e = a, f = c);
        if (0 == g) throw Error("Range step argument must not be zero");
        var h = new l.l.Iterator;
        h.next = function() {
            if (0 < g && e >= f || 0 > g && e <= f) throw l.l.ja;
            var a = e;
            e += g;
            return a
        };
        return h
    };
    l.l.join = function(a, c) {
        return l.l.wb(a).join(c)
    };
    l.l.map = function(a, c, d) {
        var e = l.l.aa(a);
        a = new l.l.Iterator;
        a.next = function() {
            var a = e.next();
            return c.call(d, a, void 0, e)
        };
        return a
    };
    l.l.reduce = function(a, c, d, e) {
        var f = d;
        l.l.forEach(a, function(a) {
            f = c.call(e, f, a)
        });
        return f
    };
    l.l.some = function(a, c, d) {
        a = l.l.aa(a);
        try {
            for (;;)
                if (c.call(d, a.next(), void 0, a)) return !0
        } catch (e) {
            if (e !== l.l.ja) throw e;
        }
        return !1
    };
    l.l.every = function(a, c, d) {
        a = l.l.aa(a);
        try {
            for (;;)
                if (!c.call(d, a.next(), void 0, a)) return !1
        } catch (e) {
            if (e !== l.l.ja) throw e;
        }
        return !0
    };
    l.l.js = function(a) {
        return l.l.Qj(arguments)
    };
    l.l.Qj = function(a) {
        var c = l.l.aa(a);
        a = new l.l.Iterator;
        var d = null;
        a.next = function() {
            for (;;) {
                if (null == d) {
                    var a = c.next();
                    d = l.l.aa(a)
                }
                try {
                    return d.next()
                } catch (f) {
                    if (f !== l.l.ja) throw f;
                    d = null
                }
            }
        };
        return a
    };
    l.l.Hs = function(a, c, d) {
        var e = l.l.aa(a);
        a = new l.l.Iterator;
        var f = !0;
        a.next = function() {
            for (;;) {
                var a = e.next();
                if (!f || !c.call(d, a, void 0, e)) return f = !1, a
            }
        };
        return a
    };
    l.l.dv = function(a, c, d) {
        var e = l.l.aa(a);
        a = new l.l.Iterator;
        a.next = function() {
            var a = e.next();
            if (c.call(d, a, void 0, e)) return a;
            throw l.l.ja;
        };
        return a
    };
    l.l.wb = function(a) {
        if (l.ca(a)) return l.c.wb(a);
        a = l.l.aa(a);
        var c = [];
        l.l.forEach(a, function(a) {
            c.push(a)
        });
        return c
    };
    l.l.Jd = function(a, c, d) {
        a = l.l.Am({}, a, c);
        var e = d || l.c.Og;
        return l.l.every(a, function(a) {
            return e(a[0], a[1])
        })
    };
    l.l.xl = function(a) {
        try {
            l.l.aa(a).next()
        } catch (c) {
            if (c != l.l.ja) throw c;
        }
    };
    l.l.product = function(a) {
        if (l.c.some(arguments, function(a) {
            return !a.length
        }) || !arguments.length) return new l.l.Iterator;
        var c = new l.l.Iterator,
            d = arguments,
            e = l.c.repeat(0, d.length);
        c.next = function() {
            if (e) {
                for (var a = l.c.map(e, function(a, c) {
                    return d[c][a]
                }), c = e.length - 1; 0 <= c; c--) {
                    l.m.assert(e);
                    if (e[c] < d[c].length - 1) {
                        e[c]++;
                        break
                    }
                    if (0 == c) {
                        e = null;
                        break
                    }
                    e[c] = 0
                }
                return a
            }
            throw l.l.ja;
        };
        return c
    };
    l.l.Ds = function(a) {
        var c = l.l.aa(a),
            d = [],
            e = 0;
        a = new l.l.Iterator;
        var f = !1;
        a.next = function() {
            var a = null;
            if (!f) try {
                return a = c.next(), d.push(a), a
            } catch (h) {
                if (h != l.l.ja || l.c.wa(d)) throw h;
                f = !0
            }
            a = d[e];
            e = (e + 1) % d.length;
            return a
        };
        return a
    };
    l.l.count = function(a, c) {
        var d = a || 0,
            e = l.ma(c) ? c : 1,
            f = new l.l.Iterator;
        f.next = function() {
            var a = d;
            d += e;
            return a
        };
        return f
    };
    l.l.repeat = function(a) {
        var c = new l.l.Iterator;
        c.next = l.P.xc(a);
        return c
    };
    l.l.Ir = function(a) {
        var c = l.l.aa(a),
            d = 0;
        a = new l.l.Iterator;
        a.next = function() {
            return d += c.next()
        };
        return a
    };
    l.l.gi = function(a) {
        var c = arguments,
            d = new l.l.Iterator;
        if (0 < c.length) {
            var e = l.c.map(c, l.l.aa);
            d.next = function() {
                return l.c.map(e, function(a) {
                    return a.next()
                })
            }
        }
        return d
    };
    l.l.Am = function(a, c) {
        var d = l.c.slice(arguments, 1),
            e = new l.l.Iterator;
        if (0 < d.length) {
            var f = l.c.map(d, l.l.aa);
            e.next = function() {
                var c = !1,
                    d = l.c.map(f, function(d) {
                        var e;
                        try {
                            e = d.next(), c = !0
                        } catch (f) {
                            if (f !== l.l.ja) throw f;
                            e = a
                        }
                        return e
                    });
                if (!c) throw l.l.ja;
                return d
            }
        }
        return e
    };
    l.l.ts = function(a, c) {
        var d = l.l.aa(c);
        return l.l.filter(a, function() {
            return !!d.next()
        })
    };
    l.l.Ce = function(a, c) {
        this.iterator = l.l.aa(a);
        this.Ih = c || l.P.Nk
    };
    l.kb(l.l.Ce, l.l.Iterator);
    l.l.Ce.prototype.next = function() {
        for (; this.Ac == this.$h;) this.Ed = this.iterator.next(), this.Ac = this.Ih(this.Ed);
        for (var a = this.$h = this.Ac, c = this.$h, d = []; this.Ac == c;) {
            d.push(this.Ed);
            try {
                this.Ed = this.iterator.next()
            } catch (e) {
                if (e !== l.l.ja) throw e;
                break
            }
            this.Ac = this.Ih(this.Ed)
        }
        return [a, d]
    };
    l.l.kt = function(a, c) {
        return new l.l.Ce(a, c)
    };
    l.l.Zu = function(a, c, d) {
        var e = l.l.aa(a);
        a = new l.l.Iterator;
        a.next = function() {
            var a = l.l.wb(e.next());
            return c.apply(d, l.c.concat(a, void 0, e))
        };
        return a
    };
    l.l.ev = function(a, c) {
        var d = l.l.aa(a),
            e = l.c.map(l.c.qe(l.gc(c) ? c : 2), function() {
                return []
            }),
            f = function() {
                var a = d.next();
                l.c.forEach(e, function(c) {
                    c.push(a)
                })
            };
        return l.c.map(e, function(a) {
            var c = new l.l.Iterator;
            c.next = function() {
                l.c.wa(a) && f();
                l.m.assert(!l.c.wa(a));
                return a.shift()
            };
            return c
        })
    };
    l.l.Ns = function(a, c) {
        return l.l.gi(l.l.count(c), a)
    };
    l.l.hl = function(a, c) {
        l.m.assert(l.F.$d(c) && 0 <= c);
        var d = l.l.aa(a),
            e = new l.l.Iterator,
            f = c;
        e.next = function() {
            if (0 < f--) return d.next();
            throw l.l.ja;
        };
        return e
    };
    l.l.Sj = function(a, c) {
        l.m.assert(l.F.$d(c) && 0 <= c);
        for (var d = l.l.aa(a); 0 < c--;) l.l.xl(d);
        return d
    };
    l.l.slice = function(a, c, d) {
        l.m.assert(l.F.$d(c) && 0 <= c);
        a = l.l.Sj(a, c);
        l.gc(d) && (l.m.assert(l.F.$d(d) && d >= c), a = l.l.hl(a, d - c));
        return a
    };
    l.l.Kk = function(a) {
        var c = [];
        l.c.Il(a, c);
        return a.length != c.length
    };
    l.l.Gl = function(a, c) {
        var d = l.l.wb(a),
            d = l.c.repeat(d, l.gc(c) ? c : d.length),
            d = l.l.product.apply(void 0, d);
        return l.l.filter(d, function(a) {
            return !l.l.Kk(a)
        })
    };
    l.l.ps = function(a, c) {
        function d(a) {
            return e[a]
        }
        var e = l.l.wb(a),
            f = l.l.qe(e.length),
            f = l.l.Gl(f, c),
            g = l.l.filter(f, function(a) {
                return l.c.Dh(a)
            }),
            f = new l.l.Iterator;
        f.next = function() {
            return l.c.map(g.next(), d)
        };
        return f
    };
    l.l.qs = function(a, c) {
        function d(a) {
            return e[a]
        }
        var e = l.l.wb(a),
            f = l.c.qe(e.length),
            f = l.c.repeat(f, c),
            f = l.l.product.apply(void 0, f),
            g = l.l.filter(f, function(a) {
                return l.c.Dh(a)
            }),
            f = new l.l.Iterator;
        f.next = function() {
            return l.c.map(g.next(), d)
        };
        return f
    };
    l.w.Map = function(a, c) {
        this.R = {};
        this.V = [];
        this.kd = this.eb = 0;
        var d = arguments.length;
        if (1 < d) {
            if (d % 2) throw Error("Uneven number of arguments");
            for (var e = 0; e < d; e += 2) this.set(arguments[e], arguments[e + 1])
        } else a && this.addAll(a)
    };
    b = l.w.Map.prototype;
    b.Fa = function() {
        return this.eb
    };
    b.la = function() {
        p(this);
        for (var a = [], c = 0; c < this.V.length; c++) a.push(this.R[this.V[c]]);
        return a
    };
    b.pa = function() {
        p(this);
        return this.V.concat()
    };
    b.ua = function(a) {
        return l.w.Map.Ib(this.R, a)
    };
    b.yc = function(a) {
        for (var c = 0; c < this.V.length; c++) {
            var d = this.V[c];
            if (l.w.Map.Ib(this.R, d) && this.R[d] == a) return !0
        }
        return !1
    };
    b.Jd = function(a, c) {
        if (this === a) return !0;
        if (this.eb != a.Fa()) return !1;
        var d = c || l.w.Map.$j;
        p(this);
        for (var e, f = 0; e = this.V[f]; f++)
            if (!d(this.get(e), a.get(e))) return !1;
        return !0
    };
    l.w.Map.$j = function(a, c) {
        return a === c
    };
    l.w.Map.prototype.wa = function() {
        return 0 == this.eb
    };
    l.w.Map.prototype.clear = function() {
        this.R = {};
        this.kd = this.eb = this.V.length = 0
    };
    l.w.Map.prototype.remove = function(a) {
        return l.w.Map.Ib(this.R, a) ? (delete this.R[a], this.eb--, this.kd++, this.V.length > 2 * this.eb && p(this), !0) : !1
    };
    var p = function(a) {
        if (a.eb != a.V.length) {
            for (var c = 0, d = 0; c < a.V.length;) {
                var e = a.V[c];
                l.w.Map.Ib(a.R, e) && (a.V[d++] = e);
                c++
            }
            a.V.length = d
        }
        if (a.eb != a.V.length) {
            for (var f = {}, d = c = 0; c < a.V.length;) e = a.V[c], l.w.Map.Ib(f, e) || (a.V[d++] = e, f[e] = 1), c++;
            a.V.length = d
        }
    };
    b = l.w.Map.prototype;
    b.get = function(a, c) {
        return l.w.Map.Ib(this.R, a) ? this.R[a] : c
    };
    b.set = function(a, c) {
        l.w.Map.Ib(this.R, a) || (this.eb++, this.V.push(a), this.kd++);
        this.R[a] = c
    };
    b.addAll = function(a) {
        var c;
        a instanceof l.w.Map ? (c = a.pa(), a = a.la()) : (c = l.object.pa(a), a = l.object.la(a));
        for (var d = 0; d < c.length; d++) this.set(c[d], a[d])
    };
    b.forEach = function(a, c) {
        for (var d = this.pa(), e = 0; e < d.length; e++) {
            var f = d[e],
                g = this.get(f);
            a.call(c, g, f, this)
        }
    };
    b.clone = function() {
        return new l.w.Map(this)
    };
    b.km = function() {
        for (var a = new l.w.Map, c = 0; c < this.V.length; c++) {
            var d = this.V[c];
            a.set(this.R[d], d)
        }
        return a
    };
    b.jm = function() {
        p(this);
        for (var a = {}, c = 0; c < this.V.length; c++) {
            var d = this.V[c];
            a[d] = this.R[d]
        }
        return a
    };
    b.vc = function(a) {
        p(this);
        var c = 0,
            d = this.kd,
            e = this,
            f = new l.l.Iterator;
        f.next = function() {
            if (d != e.kd) throw Error("The map has changed since the iterator was created");
            if (c >= e.V.length) throw l.l.ja;
            var f = e.V[c++];
            return a ? f : e.R[f]
        };
        return f
    };
    l.w.Map.Ib = function(a, c) {
        return Object.prototype.hasOwnProperty.call(a, c)
    };
    l.w.Fa = function(a) {
        return "function" == typeof a.Fa ? a.Fa() : l.ca(a) || l.L(a) ? a.length : l.object.Fa(a)
    };
    l.w.la = function(a) {
        if ("function" == typeof a.la) return a.la();
        if (l.L(a)) return a.split("");
        if (l.ca(a)) {
            for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
            return c
        }
        return l.object.la(a)
    };
    l.w.pa = function(a) {
        if ("function" == typeof a.pa) return a.pa();
        if ("function" != typeof a.la) {
            if (l.ca(a) || l.L(a)) {
                var c = [];
                a = a.length;
                for (var d = 0; d < a; d++) c.push(d);
                return c
            }
            return l.object.pa(a)
        }
    };
    l.w.contains = function(a, c) {
        return "function" == typeof a.contains ? a.contains(c) : "function" == typeof a.yc ? a.yc(c) : l.ca(a) || l.L(a) ? l.c.contains(a, c) : l.object.yc(a, c)
    };
    l.w.wa = function(a) {
        return "function" == typeof a.wa ? a.wa() : l.ca(a) || l.L(a) ? l.c.wa(a) : l.object.wa(a)
    };
    l.w.clear = function(a) {
        "function" == typeof a.clear ? a.clear() : l.ca(a) ? l.c.clear(a) : l.object.clear(a)
    };
    l.w.forEach = function(a, c, d) {
        if ("function" == typeof a.forEach) a.forEach(c, d);
        else if (l.ca(a) || l.L(a)) l.c.forEach(a, c, d);
        else
            for (var e = l.w.pa(a), f = l.w.la(a), g = f.length, h = 0; h < g; h++) c.call(d, f[h], e && e[h], a)
    };
    l.w.filter = function(a, c, d) {
        if ("function" == typeof a.filter) return a.filter(c, d);
        if (l.ca(a) || l.L(a)) return l.c.filter(a, c, d);
        var e, f = l.w.pa(a),
            g = l.w.la(a),
            h = g.length;
        if (f) {
            e = {};
            for (var k = 0; k < h; k++) c.call(d, g[k], f[k], a) && (e[f[k]] = g[k])
        } else
            for (e = [], k = 0; k < h; k++) c.call(d, g[k], void 0, a) && e.push(g[k]);
        return e
    };
    l.w.map = function(a, c, d) {
        if ("function" == typeof a.map) return a.map(c, d);
        if (l.ca(a) || l.L(a)) return l.c.map(a, c, d);
        var e, f = l.w.pa(a),
            g = l.w.la(a),
            h = g.length;
        if (f) {
            e = {};
            for (var k = 0; k < h; k++) e[f[k]] = c.call(d, g[k], f[k], a)
        } else
            for (e = [], k = 0; k < h; k++) e[k] = c.call(d, g[k], void 0, a);
        return e
    };
    l.w.some = function(a, c, d) {
        if ("function" == typeof a.some) return a.some(c, d);
        if (l.ca(a) || l.L(a)) return l.c.some(a, c, d);
        for (var e = l.w.pa(a), f = l.w.la(a), g = f.length, h = 0; h < g; h++)
            if (c.call(d, f[h], e && e[h], a)) return !0;
        return !1
    };
    l.w.every = function(a, c, d) {
        if ("function" == typeof a.every) return a.every(c, d);
        if (l.ca(a) || l.L(a)) return l.c.every(a, c, d);
        for (var e = l.w.pa(a), f = l.w.la(a), g = f.length, h = 0; h < g; h++)
            if (!c.call(d, f[h], e && e[h], a)) return !1;
        return !0
    };
    l.w.Set = function(a) {
        this.R = new l.w.Map;
        a && this.addAll(a)
    };
    l.w.Set.ff = function(a) {
        var c = typeof a;
        return "object" == c && a || "function" == c ? "o" + l.Fc(a) : c.substr(0, 1) + a
    };
    b = l.w.Set.prototype;
    b.Fa = function() {
        return this.R.Fa()
    };
    b.add = function(a) {
        this.R.set(l.w.Set.ff(a), a)
    };
    b.addAll = function(a) {
        a = l.w.la(a);
        for (var c = a.length, d = 0; d < c; d++) this.add(a[d])
    };
    b.ed = function(a) {
        a = l.w.la(a);
        for (var c = a.length, d = 0; d < c; d++) this.remove(a[d])
    };
    b.remove = function(a) {
        return this.R.remove(l.w.Set.ff(a))
    };
    b.clear = function() {
        this.R.clear()
    };
    b.wa = function() {
        return this.R.wa()
    };
    b.contains = function(a) {
        return this.R.ua(l.w.Set.ff(a))
    };
    b.la = function() {
        return this.R.la()
    };
    b.clone = function() {
        return new l.w.Set(this)
    };
    b.Jd = function(a) {
        return this.Fa() == l.w.Fa(a) && q(this, a)
    };
    var q = function(a, c) {
        var d = l.w.Fa(c);
        if (a.Fa() > d) return !1;
        !(c instanceof l.w.Set) && 5 < d && (c = new l.w.Set(c));
        return l.w.every(a, function(a) {
            return l.w.contains(c, a)
        })
    };
    l.w.Set.prototype.vc = function() {
        return this.R.vc(!1)
    };
    l.i = {};
    l.i.userAgent = {};
    l.i.userAgent.C = {};
    l.i.userAgent.C.bh = function() {
        var a = l.i.userAgent.C.zk();
        return a && (a = a.userAgent) ? a : ""
    };
    l.i.userAgent.C.zk = function() {
        return l.global.navigator
    };
    l.i.userAgent.C.ei = l.i.userAgent.C.bh();
    l.i.userAgent.C.Ru = function(a) {
        l.i.userAgent.C.ei = a || l.i.userAgent.C.bh()
    };
    l.i.userAgent.C.ec = function() {
        return l.i.userAgent.C.ei
    };
    l.i.userAgent.C.N = function(a) {
        return l.b.contains(l.i.userAgent.C.ec(), a)
    };
    l.i.userAgent.C.vl = function() {
        return l.b.Pj()
    };
    l.i.userAgent.C.Tg = function(a) {
        for (var c = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, d = [], e; e = c.exec(a);) d.push([e[1], e[2], e[3] || void 0]);
        return d
    };
    l.i.userAgent.D = {};
    l.i.userAgent.D.vf = function() {
        return l.i.userAgent.C.N("Opera") || l.i.userAgent.C.N("OPR")
    };
    l.i.userAgent.D.uf = function() {
        return l.i.userAgent.C.N("Edge") || l.i.userAgent.C.N("Trident") || l.i.userAgent.C.N("MSIE")
    };
    l.i.userAgent.D.tl = function() {
        return l.i.userAgent.C.N("Firefox")
    };
    l.i.userAgent.D.Nh = function() {
        return l.i.userAgent.C.N("Safari") && !(l.i.userAgent.D.sf() || l.i.userAgent.D.tf() || l.i.userAgent.D.vf() || l.i.userAgent.D.uf() || l.i.userAgent.D.Ch() || l.i.userAgent.C.N("Android"))
    };
    l.i.userAgent.D.tf = function() {
        return l.i.userAgent.C.N("Coast")
    };
    l.i.userAgent.D.ul = function() {
        return (l.i.userAgent.C.N("iPad") || l.i.userAgent.C.N("iPhone")) && !l.i.userAgent.D.Nh() && !l.i.userAgent.D.sf() && !l.i.userAgent.D.tf() && l.i.userAgent.C.N("AppleWebKit")
    };
    l.i.userAgent.D.sf = function() {
        return (l.i.userAgent.C.N("Chrome") || l.i.userAgent.C.N("CriOS")) && !l.i.userAgent.D.vf() && !l.i.userAgent.D.uf()
    };
    l.i.userAgent.D.sl = function() {
        return l.i.userAgent.C.N("Android") && !(l.i.userAgent.D.sh() || l.i.userAgent.D.Sk() || l.i.userAgent.D.pf() || l.i.userAgent.D.Ch())
    };
    l.i.userAgent.D.pf = l.i.userAgent.D.vf;
    l.i.userAgent.D.wh = l.i.userAgent.D.uf;
    l.i.userAgent.D.Sk = l.i.userAgent.D.tl;
    l.i.userAgent.D.Qt = l.i.userAgent.D.Nh;
    l.i.userAgent.D.xt = l.i.userAgent.D.tf;
    l.i.userAgent.D.Et = l.i.userAgent.D.ul;
    l.i.userAgent.D.sh = l.i.userAgent.D.sf;
    l.i.userAgent.D.vt = l.i.userAgent.D.sl;
    l.i.userAgent.D.Ch = function() {
        return l.i.userAgent.C.N("Silk")
    };
    l.i.userAgent.D.Gc = function() {
        function a(a) {
            a = l.c.find(a, e);
            return d[a] || ""
        }
        var c = l.i.userAgent.C.ec();
        if (l.i.userAgent.D.wh()) return l.i.userAgent.D.xk(c);
        var c = l.i.userAgent.C.Tg(c),
            d = {};
        l.c.forEach(c, function(a) {
            d[a[0]] = a[1]
        });
        var e = l.Bf(l.object.ua, d);
        return l.i.userAgent.D.pf() ? a(["Version", "Opera", "OPR"]) : l.i.userAgent.D.sh() ? a(["Chrome", "CriOS"]) : (c = c[2]) && c[1] || ""
    };
    l.i.userAgent.D.Ba = function(a) {
        return 0 <= l.b.wc(l.i.userAgent.D.Gc(), a)
    };
    l.i.userAgent.D.xk = function(a) {
        var c = /rv: *([\d\.]*)/.exec(a);
        if (c && c[1] || (c = /Edge\/([\d\.]+)/.exec(a))) return c[1];
        var c = "",
            d = /MSIE +([\d\.]+)/.exec(a);
        if (d && d[1])
            if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == d[1])
                if (a && a[1]) switch (a[1]) {
                    case "4.0":
                        c = "8.0";
                        break;
                    case "5.0":
                        c = "9.0";
                        break;
                    case "6.0":
                        c = "10.0";
                        break;
                    case "7.0":
                        c = "11.0"
                } else c = "7.0";
                else c = d[1];
        return c
    };
    l.i.userAgent.Y = {};
    l.i.userAgent.Y.Mt = function() {
        return l.i.userAgent.C.N("Presto")
    };
    l.i.userAgent.Y.dl = function() {
        return l.i.userAgent.C.N("Trident") || l.i.userAgent.C.N("MSIE")
    };
    l.i.userAgent.Y.Lb = function() {
        return l.i.userAgent.C.N("Edge")
    };
    l.i.userAgent.Y.Gh = function() {
        return l.i.userAgent.C.vl() && !l.i.userAgent.Y.Lb()
    };
    l.i.userAgent.Y.Tk = function() {
        return l.i.userAgent.C.N("Gecko") && !l.i.userAgent.Y.Gh() && !l.i.userAgent.Y.dl() && !l.i.userAgent.Y.Lb()
    };
    l.i.userAgent.Y.Gc = function() {
        var a = l.i.userAgent.C.ec();
        if (a) {
            var a = l.i.userAgent.C.Tg(a),
                c = l.i.userAgent.Y.tk(a);
            if (c) return "Gecko" == c[0] ? l.i.userAgent.Y.Gk(a) : c[1];
            var a = a[0],
                d;
            if (a && (d = a[2]) && (d = /Trident\/([^\s;]+)/.exec(d))) return d[1]
        }
        return ""
    };
    l.i.userAgent.Y.tk = function(a) {
        if (!l.i.userAgent.Y.Lb()) return a[1];
        for (var c = 0; c < a.length; c++) {
            var d = a[c];
            if ("Edge" == d[0]) return d
        }
    };
    l.i.userAgent.Y.Ba = function(a) {
        return 0 <= l.b.wc(l.i.userAgent.Y.Gc(), a)
    };
    l.i.userAgent.Y.Gk = function(a) {
        return (a = l.c.find(a, function(a) {
            return "Firefox" == a[0]
        })) && a[1] || ""
    };
    l.i.userAgent.platform = {};
    l.i.userAgent.platform.qh = function() {
        return l.i.userAgent.C.N("Android")
    };
    l.i.userAgent.platform.Vk = function() {
        return l.i.userAgent.C.N("iPod")
    };
    l.i.userAgent.platform.zh = function() {
        return l.i.userAgent.C.N("iPhone") && !l.i.userAgent.C.N("iPod") && !l.i.userAgent.C.N("iPad")
    };
    l.i.userAgent.platform.yh = function() {
        return l.i.userAgent.C.N("iPad")
    };
    l.i.userAgent.platform.Uk = function() {
        return l.i.userAgent.platform.zh() || l.i.userAgent.platform.yh() || l.i.userAgent.platform.Vk()
    };
    l.i.userAgent.platform.Ah = function() {
        return l.i.userAgent.C.N("Macintosh")
    };
    l.i.userAgent.platform.Xk = function() {
        return l.i.userAgent.C.N("Linux")
    };
    l.i.userAgent.platform.Hh = function() {
        return l.i.userAgent.C.N("Windows")
    };
    l.i.userAgent.platform.th = function() {
        return l.i.userAgent.C.N("CrOS")
    };
    l.i.userAgent.platform.Gc = function() {
        var a = l.i.userAgent.C.ec(),
            c = "";
        l.i.userAgent.platform.Hh() ? (c = /Windows (?:NT|Phone) ([0-9.]+)/, c = (a = c.exec(a)) ? a[1] : "0.0") : l.i.userAgent.platform.Uk() ? (c = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/, c = (a = c.exec(a)) && a[1].replace(/_/g, ".")) : l.i.userAgent.platform.Ah() ? (c = /Mac OS X ([0-9_.]+)/, c = (a = c.exec(a)) ? a[1].replace(/_/g, ".") : "10") : l.i.userAgent.platform.qh() ? (c = /Android\s+([^\);]+)(\)|;)/, c = (a = c.exec(a)) && a[1]) : l.i.userAgent.platform.th() && (c = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,
            c = (a = c.exec(a)) && a[1]);
        return c || ""
    };
    l.i.userAgent.platform.Ba = function(a) {
        return 0 <= l.b.wc(l.i.userAgent.platform.Gc(), a)
    };
    l.userAgent = {};
    l.userAgent.Rf = !1;
    l.userAgent.Qf = !1;
    l.userAgent.Xf = !1;
    l.userAgent.ve = !1;
    l.userAgent.Wf = !1;
    l.userAgent.ki = !1;
    l.userAgent.nd = l.userAgent.Rf || l.userAgent.Qf || l.userAgent.ve || l.userAgent.Xf || l.userAgent.Wf;
    l.userAgent.Fk = function() {
        return l.i.userAgent.C.ec()
    };
    l.userAgent.dh = function() {
        return l.global.navigator || null
    };
    l.userAgent.Ie = l.userAgent.nd ? l.userAgent.Wf : l.i.userAgent.D.pf();
    l.userAgent.Da = l.userAgent.nd ? l.userAgent.Rf : l.i.userAgent.D.wh();
    l.userAgent.sd = l.userAgent.nd ? l.userAgent.Qf : l.i.userAgent.Y.Tk();
    l.userAgent.cb = l.userAgent.nd ? l.userAgent.Xf || l.userAgent.ve : l.i.userAgent.Y.Gh();
    l.userAgent.$k = function() {
        return l.userAgent.cb && l.i.userAgent.C.N("Mobile")
    };
    l.userAgent.Bp = l.userAgent.ve || l.userAgent.$k();
    l.userAgent.Nq = l.userAgent.cb;
    l.userAgent.ak = function() {
        var a = l.userAgent.dh();
        return a && a.platform || ""
    };
    l.userAgent.qq = l.userAgent.ak();
    l.userAgent.Vf = !1;
    l.userAgent.Yf = !1;
    l.userAgent.Uf = !1;
    l.userAgent.Zf = !1;
    l.userAgent.Pf = !1;
    l.userAgent.Tf = !1;
    l.userAgent.Sf = !1;
    l.userAgent.Ab = l.userAgent.Vf || l.userAgent.Yf || l.userAgent.Uf || l.userAgent.Zf || l.userAgent.Pf || l.userAgent.Tf || l.userAgent.Sf;
    l.userAgent.sp = l.userAgent.Ab ? l.userAgent.Vf : l.i.userAgent.platform.Ah();
    l.userAgent.Fr = l.userAgent.Ab ? l.userAgent.Yf : l.i.userAgent.platform.Hh();
    l.userAgent.Wk = function() {
        return l.i.userAgent.platform.Xk() || l.i.userAgent.platform.th()
    };
    l.userAgent.kp = l.userAgent.Ab ? l.userAgent.Uf : l.userAgent.Wk();
    l.userAgent.fl = function() {
        var a = l.userAgent.dh();
        return !!a && l.b.contains(a.appVersion || "", "X11")
    };
    l.userAgent.Gr = l.userAgent.Ab ? l.userAgent.Zf : l.userAgent.fl();
    l.userAgent.Fm = l.userAgent.Ab ? l.userAgent.Pf : l.i.userAgent.platform.qh();
    l.userAgent.$o = l.userAgent.Ab ? l.userAgent.Tf : l.i.userAgent.platform.zh();
    l.userAgent.Zo = l.userAgent.Ab ? l.userAgent.Sf : l.i.userAgent.platform.yh();
    l.userAgent.bk = function() {
        if (l.userAgent.Ie && l.global.opera) {
            var a = l.global.opera.version;
            return l.sb(a) ? a() : a
        }
        var a = "",
            c = l.userAgent.Hk();
        c && (a = c ? c[1] : "");
        return l.userAgent.Da && !l.i.userAgent.Y.Lb() && (c = l.userAgent.$g(), c > parseFloat(a)) ? String(c) : a
    };
    l.userAgent.Hk = function() {
        var a = l.userAgent.Fk();
        if (l.userAgent.sd) return /rv\:([^\);]+)(\)|;)/.exec(a);
        if (l.userAgent.Da && l.i.userAgent.Y.Lb()) return /Edge\/([\d\.]+)/.exec(a);
        if (l.userAgent.Da) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (l.userAgent.cb) return /WebKit\/(\S+)/.exec(a)
    };
    l.userAgent.$g = function() {
        var a = l.global.document;
        return a ? a.documentMode : void 0
    };
    l.userAgent.VERSION = l.userAgent.bk();
    l.userAgent.compare = function(a, c) {
        return l.b.wc(a, c)
    };
    l.userAgent.Eh = {};
    l.userAgent.Ba = function(a) {
        return l.userAgent.ki || l.userAgent.Eh[a] || (l.userAgent.Eh[a] = 0 <= l.b.wc(l.userAgent.VERSION, a))
    };
    l.userAgent.Ut = l.userAgent.Ba;
    l.userAgent.of = function(a) {
        return l.userAgent.Da && (l.i.userAgent.Y.Lb() || l.userAgent.si >= a)
    };
    l.userAgent.zt = l.userAgent.of;
    var r = l.userAgent,
        t, u = l.global.document,
        v = l.userAgent.$g();
    t = !u || !l.userAgent.Da || !v && l.i.userAgent.Y.Lb() ? void 0 : v || ("CSS1Compat" == u.compatMode ? parseInt(l.userAgent.VERSION, 10) : 5);
    r.si = t;
    l.debug.Ea = l.DEBUG;
    l.debug.hs = function(a, c, d) {
        d = d || l.global;
        var e = d.onerror,
            f = !! c;
        l.userAgent.cb && !l.userAgent.Ba("535.3") && (f = !f);
        d.onerror = function(c, d, k, m, n) {
            e && e(c, d, k, m, n);
            a({
                message: c,
                fileName: d,
                Kh: k,
                ms: m,
                error: n
            });
            return f
        }
    };
    l.debug.kk = function(a, c) {
        if ("undefined" == typeof a) return "undefined";
        if (null == a) return "NULL";
        var d = [],
            e;
        for (e in a)
            if (c || !l.sb(a[e])) {
                var f = e + " = ";
                try {
                    f += a[e]
                } catch (g) {
                    f += "*** " + g + " ***"
                }
                d.push(f)
            }
        return d.join("\n")
    };
    l.debug.Es = function(a, c) {
        var d = [],
            e = function(a, g, h) {
                var k = g + "  ";
                h = new l.w.Set(h);
                try {
                    if (l.ma(a))
                        if (l.al(a)) d.push("NULL");
                        else if (l.L(a)) d.push('"' + a.replace(/\n/g, "\n" + g) + '"');
                    else if (l.sb(a)) d.push(String(a).replace(/\n/g, "\n" + g));
                    else if (l.hc(a))
                        if (h.contains(a)) d.push("*** reference loop detected ***");
                        else {
                            h.add(a);
                            d.push("{");
                            for (var m in a)
                                if (c || !l.sb(a[m])) d.push("\n"), d.push(k), d.push(m + " = "), e(a[m], k, h);
                            d.push("\n" + g + "}")
                        } else d.push(a);
                        else d.push("undefined")
                } catch (n) {
                    d.push("*** " +
                        n + " ***")
                }
            };
        e(a, "", new l.w.Set);
        return d.join("")
    };
    l.debug.lk = function(a) {
        for (var c = [], d = 0; d < a.length; d++) l.isArray(a[d]) ? c.push(l.debug.lk(a[d])) : c.push(a[d]);
        return "[ " + c.join(", ") + " ]"
    };
    l.debug.Qs = function(a, c) {
        var d = l.debug.mk(a, c);
        return l.a.v.I(d)
    };
    l.debug.mk = function(a, c) {
        try {
            var d = l.debug.zl(a),
                e = l.debug.Xj(d.fileName);
            return l.a.v.concat(l.a.v.jf("Message: " + d.message + "\nUrl: "), l.a.v.create("a", {
                href: e,
                target: "_new"
            }, d.fileName), l.a.v.jf("\nLine: " + d.lineNumber + "\n\nBrowser stack:\n" + d.stack + "-> [end]\n\nJS stack traversal:\n" + l.debug.hf(c) + "-> "))
        } catch (f) {
            return l.a.v.jf("Exception trying to expose exception! You win, we lose. " + f)
        }
    };
    l.debug.Xj = function(a) {
        l.Zd(a) || (a = "");
        if (!/^https?:\/\//i.test(a)) return l.a.K.Dc(l.b.J.cf("sanitizedviewsrc"));
        a = l.a.K.Xl(a);
        return l.a.Rb.Vl(l.b.J.cf("view-source scheme plus HTTP/HTTPS URL"), "view-source:" + l.a.K.I(a))
    };
    l.debug.zl = function(a) {
        var c = l.eh("window.location.href");
        if (l.L(a)) return {
            message: a,
            name: "Unknown error",
            lineNumber: "Not available",
            fileName: c,
            stack: "Not available"
        };
        var d, e, f = !1;
        try {
            d = a.lineNumber || a.Kh || "Not available"
        } catch (g) {
            d = "Not available", f = !0
        }
        try {
            e = a.fileName || a.filename || a.sourceURL || l.global.$googDebugFname || c
        } catch (h) {
            e = "Not available", f = !0
        }
        return !f && a.lineNumber && a.fileName && a.stack && a.message && a.name ? a : {
            message: a.message || "Not available",
            name: a.name || "UnknownError",
            lineNumber: d,
            fileName: e,
            stack: a.stack || "Not available"
        }
    };
    l.debug.Pg = function(a, c) {
        var d;
        "string" == typeof a ? (d = Error(a), Error.captureStackTrace && Error.captureStackTrace(d, l.debug.Pg)) : d = a;
        d.stack || (d.stack = l.debug.hf(l.debug.Pg));
        if (c) {
            for (var e = 0; d["message" + e];)++e;
            d["message" + e] = String(c)
        }
        return d
    };
    l.debug.Dk = function(a) {
        if (l.Me) {
            var c = l.debug.ah(l.debug.Dk);
            if (c) return c
        }
        for (var c = [], d = arguments.callee.caller, e = 0; d && (!a || e < a);) {
            c.push(l.debug.getFunctionName(d));
            c.push("()\n");
            try {
                d = d.caller
            } catch (f) {
                c.push("[exception trying to get caller]\n");
                break
            }
            e++;
            if (e >= l.debug.mg) {
                c.push("[...long stack...]");
                break
            }
        }
        a && e >= a ? c.push("[...reached max depth limit...]") : c.push("[end]");
        return c.join("")
    };
    l.debug.mg = 50;
    l.debug.ah = function(a) {
        var c = Error();
        if (Error.captureStackTrace) return Error.captureStackTrace(c, a), String(c.stack);
        try {
            throw c;
        } catch (d) {
            c = d
        }
        return (a = c.stack) ? String(a) : null
    };
    l.debug.hf = function(a) {
        var c;
        l.Me && (c = l.debug.ah(a || l.debug.hf));
        c || (c = l.debug.ih(a || arguments.callee.caller, []));
        return c
    };
    l.debug.ih = function(a, c) {
        var d = [];
        if (l.c.contains(c, a)) d.push("[...circular reference...]");
        else if (a && c.length < l.debug.mg) {
            d.push(l.debug.getFunctionName(a) + "(");
            for (var e = a.arguments, f = 0; e && f < e.length; f++) {
                0 < f && d.push(", ");
                var g;
                g = e[f];
                switch (typeof g) {
                    case "object":
                        g = g ? "object" : "null";
                        break;
                    case "string":
                        break;
                    case "number":
                        g = String(g);
                        break;
                    case "boolean":
                        g = g ? "true" : "false";
                        break;
                    case "function":
                        g = (g = l.debug.getFunctionName(g)) ? g : "[fn]";
                        break;
                    default:
                        g = typeof g
                }
                40 < g.length && (g = g.substr(0, 40) +
                    "...");
                d.push(g)
            }
            c.push(a);
            d.push(")\n");
            try {
                d.push(l.debug.ih(a.caller, c))
            } catch (h) {
                d.push("[exception trying to get caller]\n")
            }
        } else a ? d.push("[...long stack...]") : d.push("[end]");
        return d.join("")
    };
    l.debug.Ou = function(a) {
        l.debug.Yg = a
    };
    l.debug.getFunctionName = function(a) {
        if (l.debug.$b[a]) return l.debug.$b[a];
        if (l.debug.Yg) {
            var c = l.debug.Yg(a);
            if (c) return l.debug.$b[a] = c
        }
        a = String(a);
        l.debug.$b[a] || (c = /function ([^\(]+)/.exec(a), l.debug.$b[a] = c ? c[1] : "[Anonymous]");
        return l.debug.$b[a]
    };
    l.debug.du = function(a) {
        return a.replace(/ /g, "[_]").replace(/\f/g, "[f]").replace(/\n/g, "[n]\n").replace(/\r/g, "[r]").replace(/\t/g, "[t]")
    };
    l.debug.Du = function(a) {
        return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a
    };
    l.debug.$b = {};
    l.debug.Ja = function(a, c, d, e, f) {
        this.reset(a, c, d, e, f)
    };
    l.debug.Ja.prototype.Sg = null;
    l.debug.Ja.vi = !0;
    l.debug.Ja.yl = 0;
    l.debug.Ja.prototype.reset = function(a, c, d, e, f) {
        l.debug.Ja.vi && ("number" == typeof f || l.debug.Ja.yl++);
        e || l.now();
        this.Lc = a;
        this.wl = c;
        delete this.Sg
    };
    l.debug.Ja.prototype.Kf = function(a) {
        this.Lc = a
    };
    l.debug.qa = function() {
        l.m.assert(l.debug.qa.rh(), "Cannot use goog.debug.LogBuffer without defining goog.debug.LogBuffer.CAPACITY.");
        this.clear()
    };
    l.debug.qa.getInstance = function() {
        l.debug.qa.Ic || (l.debug.qa.Ic = new l.debug.qa);
        return l.debug.qa.Ic
    };
    l.debug.qa.pd = 0;
    l.debug.qa.rh = function() {
        return 0 < l.debug.qa.pd
    };
    l.debug.qa.prototype.clear = function() {
        this.Dg = Array(l.debug.qa.pd);
        this.Mg = -1;
        this.vh = !1
    };
    l.debug.s = function(a) {
        this.Na = a;
        this.fc = this.Oe = this.Lc = this.je = null
    };
    l.debug.s.xd = "";
    l.debug.s.xb = !0;
    l.debug.s.xb || (l.debug.s.If = []);
    l.debug.s.B = function(a, c) {
        this.name = a;
        this.value = c
    };
    l.debug.s.B.prototype.toString = function() {
        return this.name
    };
    l.debug.s.B.sc = new l.debug.s.B("OFF", Infinity);
    l.debug.s.B.tj = new l.debug.s.B("SHOUT", 1200);
    l.debug.s.B.Le = new l.debug.s.B("SEVERE", 1E3);
    l.debug.s.B.WARNING = new l.debug.s.B("WARNING", 900);
    l.debug.s.B.INFO = new l.debug.s.B("INFO", 800);
    l.debug.s.B.$f = new l.debug.s.B("CONFIG", 700);
    l.debug.s.B.eg = new l.debug.s.B("FINE", 500);
    l.debug.s.B.xi = new l.debug.s.B("FINER", 400);
    l.debug.s.B.yi = new l.debug.s.B("FINEST", 300);
    l.debug.s.B.hi = new l.debug.s.B("ALL", 0);
    l.debug.s.B.Je = [l.debug.s.B.sc, l.debug.s.B.tj, l.debug.s.B.Le, l.debug.s.B.WARNING, l.debug.s.B.INFO, l.debug.s.B.$f, l.debug.s.B.eg, l.debug.s.B.xi, l.debug.s.B.yi, l.debug.s.B.hi];
    l.debug.s.B.ub = null;
    l.debug.s.B.Jg = function() {
        l.debug.s.B.ub = {};
        for (var a = 0, c; c = l.debug.s.B.Je[a]; a++) l.debug.s.B.ub[c.value] = c, l.debug.s.B.ub[c.name] = c
    };
    l.debug.s.B.ct = function(a) {
        l.debug.s.B.ub || l.debug.s.B.Jg();
        return l.debug.s.B.ub[a] || null
    };
    l.debug.s.B.dt = function(a) {
        l.debug.s.B.ub || l.debug.s.B.Jg();
        if (a in l.debug.s.B.ub) return l.debug.s.B.ub[a];
        for (var c = 0; c < l.debug.s.B.Je.length; ++c) {
            var d = l.debug.s.B.Je[c];
            if (d.value <= a) return d
        }
        return null
    };
    l.debug.s.Ta = function(a) {
        return l.debug.W.Ta(a)
    };
    l.debug.s.ll = function(a) {
        l.global.console && (l.global.console.timeStamp ? l.global.console.timeStamp(a) : l.global.console.markTimeline && l.global.console.markTimeline(a));
        l.global.msWriteProfilerMark && l.global.msWriteProfilerMark(a)
    };
    b = l.debug.s.prototype;
    b.getName = function() {
        return this.Na
    };
    b.yg = function(a) {
        l.debug.Ea && (l.debug.s.xb ? (this.fc || (this.fc = []), this.fc.push(a)) : (l.m.assert(!this.Na, "Cannot call addHandler on a non-root logger when goog.debug.Logger.ENABLE_HIERARCHY is false."), l.debug.s.If.push(a)))
    };
    b.Vh = function(a) {
        if (l.debug.Ea) {
            var c = l.debug.s.xb ? this.fc : l.debug.s.If;
            return !!c && l.c.remove(c, a)
        }
        return !1
    };
    b.getParent = function() {
        return this.je
    };
    b.Kf = function(a) {
        l.debug.Ea && (l.debug.s.xb ? this.Lc = a : (l.m.assert(!this.Na, "Cannot call setLevel() on a non-root logger when goog.debug.Logger.ENABLE_HIERARCHY is false."), l.debug.s.Ol = a))
    };
    var w = function(a) {
        if (!l.debug.Ea) return l.debug.s.B.sc;
        if (!l.debug.s.xb) return l.debug.s.Ol;
        if (a.Lc) return a.Lc;
        if (a.je) return w(a.je);
        l.m.Aa("Root logger has no level set.");
        return null
    };
    l.debug.s.prototype.log = function(a, c, d) {
        if (l.debug.Ea && l.debug.Ea && a.value >= w(this).value) {
            l.sb(c) && (c = c());
            if (l.debug.qa.rh()) {
                var e = l.debug.qa.getInstance(),
                    f = this.Na,
                    g = (e.Mg + 1) % l.debug.qa.pd;
                e.Mg = g;
                e.vh ? (e = e.Dg[g], e.reset(a, c, f), a = e) : (e.vh = g == l.debug.qa.pd - 1, a = e.Dg[g] = new l.debug.Ja(a, c, f))
            } else a = new l.debug.Ja(a, String(c), this.Na);
            d && (a.Sg = d);
            l.debug.s.ll("log:" + a.wl);
            if (l.debug.s.xb)
                for (d = this; d;) {
                    c = d;
                    f = a;
                    if (c.fc)
                        for (e = 0, g = void 0; g = c.fc[e]; e++) g(f);
                    d = d.getParent()
                } else
                    for (d = 0; c = l.debug.s.If[d++];) c(a)
        }
    };
    l.debug.s.prototype.Ya = function(a, c) {
        l.debug.Ea && this.log(l.debug.s.B.WARNING, a, c)
    };
    l.debug.s.prototype.info = function(a, c) {
        l.debug.Ea && this.log(l.debug.s.B.INFO, a, c)
    };
    l.debug.s.prototype.Xg = function(a, c) {
        l.debug.Ea && this.log(l.debug.s.B.eg, a, c)
    };
    l.debug.W = {};
    l.debug.W.fe = {};
    l.debug.W.gd = null;
    l.debug.W.nh = function() {
        l.debug.W.gd || (l.debug.W.gd = new l.debug.s(l.debug.s.xd), l.debug.W.fe[l.debug.s.xd] = l.debug.W.gd, l.debug.W.gd.Kf(l.debug.s.B.$f))
    };
    l.debug.W.$s = function() {
        return l.debug.W.fe
    };
    l.debug.W.Ck = function() {
        l.debug.W.nh();
        return l.debug.W.gd
    };
    l.debug.W.Ta = function(a) {
        l.debug.W.nh();
        return l.debug.W.fe[a] || l.debug.W.Uj(a)
    };
    l.debug.W.xs = function(a) {
        return function(c) {
            var d = a || l.debug.W.Ck();
            l.debug.Ea && d.log(l.debug.s.B.Le, "Error: " + c.message + " (" + c.fileName + " @ Line: " + c.Kh + ")", void 0)
        }
    };
    l.debug.W.Uj = function(a) {
        var c = new l.debug.s(a);
        if (l.debug.s.xb) {
            var d = a.lastIndexOf("."),
                e = a.substr(d + 1),
                d = l.debug.W.Ta(a.substr(0, d));
            d.Oe || (d.Oe = {});
            d.Oe[e] = c;
            c.je = d
        }
        return l.debug.W.fe[a] = c
    };
    l.log = {};
    l.log.nb = l.debug.Ea;
    l.log.xd = l.debug.s.xd;
    l.log.s = l.debug.s;
    l.log.B = l.debug.s.B;
    l.log.Ja = l.debug.Ja;
    l.log.Ta = function(a, c) {
        if (l.log.nb) {
            var d = l.debug.W.Ta(a);
            c && d && d.Kf(c);
            return d
        }
        return null
    };
    l.log.yg = function(a, c) {
        l.log.nb && a && a.yg(c)
    };
    l.log.Vh = function(a, c) {
        return l.log.nb && a ? a.Vh(c) : !1
    };
    l.log.log = function(a, c, d, e) {
        l.log.nb && a && a.log(c, d, e)
    };
    l.log.error = function(a, c, d) {
        l.log.nb && a && l.debug.Ea && a.log(l.debug.s.B.Le, c, d)
    };
    l.log.Ya = function(a, c, d) {
        l.log.nb && a && a.Ya(c, d)
    };
    l.log.info = function(a, c, d) {
        l.log.nb && a && a.info(c, d)
    };
    l.log.Xg = function(a, c, d) {
        l.log.nb && a && a.Xg(c, d)
    };
    cast.receiver.games.o.Di = function() {
        this.type = cast.receiver.games.o.td.fg;
        this.requestId = 0;
        this.playerId = "";
        this.playerToken = null;
        this.statusCode = cast.receiver.games.$.SUCCESS;
        this.errorDescription = "";
        this.gameplayState = cast.receiver.games.Pa.UNKNOWN;
        this.lobbyState = cast.receiver.games.ob.UNKNOWN;
        this.players = [];
        this.gameData = null;
        this.gameStatusText = "";
        this.extraMessageData = this.gameManagerConfig = null
    };
    cast.receiver.games.o.td = {
        UNKNOWN: 0,
        fg: 1,
        yb: 2
    };
    cast.receiver.games.o.tc = function(a, c, d) {
        this.ea = l.log.Ta("cast.receiver.games.internal.ObjectPool");
        this.Na = a;
        this.Ug = d;
        this.tb = [];
        for (a = this.Ra = 0; a < c; a++) d = this.Ug(), this.tb.push(d)
    };
    cast.receiver.games.o.tc.prototype.getName = function() {
        return this.Na
    };
    var x = function(a) {
        var c = a.tb[a.Ra];
        a.Ra++;
        if (a.Ra == a.tb.length) {
            var d = a.Ug();
            a.tb[a.Ra] = d;
            l.log.Ya(a.ea, "Constructing new object on pool: " + a.Na + ". Consider increasing the initial pool size.")
        }
        return c
    }, A = function(a, c) {
            if (0 == a.Ra) throw l.log.error(a.ea, "Error releasing object on pool: " + a.Na + ". The pool had no borrowed objects."), Error("Error releasing object on pool: " + a.Na + ". The pool had no borrowed objects.");
            for (var d = -1, e = 0; e < a.Ra; e++)
                if (a.tb[e] == c) {
                    d = e;
                    break
                } - 1 == d && l.log.error(a.ea, "Error releasing object on pool: " +
                a.Na + ". The released object was not provided by this pool.");
            a.Ra--;
            d != a.Ra && (a.tb[d] = a.tb[a.Ra], a.tb[a.Ra] = c)
        };
    l.jd = {};
    l.jd.ud = function() {};
    l.Gj();
    l.jd.ud.prototype.Th = 0;
    cast.receiver.games.tg = function() {
        this.playerId = "";
        this.playerState = cast.receiver.games.PlayerState.UNKNOWN;
        this.playerData = null
    };
    l.u(cast.receiver.games, "PlayerInfo", cast.receiver.games.tg);
    cast.receiver.games.o.Qa = function() {
        this.lb = new cast.receiver.games.tg;
        this.Df = null;
        this.Fh = !1;
        this.Hd = Date.now()
    };
    cast.receiver.games.o.Qa.rg = new l.w.Map(cast.receiver.games.PlayerState.UNKNOWN, "UNKNOWN", cast.receiver.games.PlayerState.DROPPED, "DROPPED", cast.receiver.games.PlayerState.QUIT, "QUIT", cast.receiver.games.PlayerState.AVAILABLE, "AVAILABLE", cast.receiver.games.PlayerState.READY, "READY", cast.receiver.games.PlayerState.IDLE, "IDLE", cast.receiver.games.PlayerState.PLAYING, "PLAYING");
    var B = function(a) {
        if (!a.lb.playerId) throw Error("No player Id defined for player.");
        return a.lb
    }, C = function(a) {
            if (!a.lb.playerId) throw Error("No player Id defined for player.");
            return a.lb.playerId
        };
    cast.receiver.games.o.Qa.prototype.rb = function() {
        if (!this.Df) throw Error("No player token defined for player.");
        return this.Df
    };
    cast.receiver.games.o.Qa.prototype.ic = function() {
        return this.Fh
    };
    l.Ze("cast.receiver.games.internal.PlayerWrapper.prototype.isVirtualPlayer", cast.receiver.games.o.Qa.prototype.ic);
    cast.receiver.games.o.Qa.hh = function(a) {
        (a = cast.receiver.games.o.Qa.rg.get(a)) || (a = cast.receiver.games.o.Qa.rg.get(cast.receiver.games.PlayerState.UNKNOWN));
        return a
    };
    cast.receiver.games.o.Bb = function(a) {
        this.wf = a;
        this.Xa = Object.create(null);
        this.Ef = [];
        this.dd = [];
        this.Qe = [];
        this.Hl = new cast.receiver.games.o.tc("cast.receiver.games.internal.PlayerManager - PlayerWrapperPool", cast.receiver.games.o.Bb.gj, function() {
            return new cast.receiver.games.o.Qa
        })
    };
    cast.receiver.games.o.Bb.gj = 10;
    cast.receiver.games.o.Bb.prototype.La = function() {
        for (var a = this.Qe.length = 0; a < this.dd.length; a++) {
            var c = this.dd[a];
            c.playerState != cast.receiver.games.PlayerState.DROPPED && c.playerState != cast.receiver.games.PlayerState.QUIT && c.playerState != cast.receiver.games.PlayerState.UNKNOWN && this.Qe.push(c)
        }
        return this.Qe
    };
    cast.receiver.games.o.Bb.prototype.Ua = function() {
        return this.dd
    };
    cast.receiver.games.o.Bb.prototype.Jc = function(a) {
        a = this.Xa[a] || null;
        if (!a) return !1;
        a = a.lb.playerState;
        return a != cast.receiver.games.PlayerState.DROPPED && a != cast.receiver.games.PlayerState.QUIT && a != cast.receiver.games.PlayerState.UNKNOWN
    };
    var D = function(a, c) {
        var d = x(a.Hl);
        if (!d) throw Error("Unable to create a player wrapper, but the pool was designed to allocate new objects if needed. This should not happen.");
        c || (c = ":" + (l.jd.ud.getInstance().Th++).toString(36));
        var e = c;
        if (null != (a.Xa[e] || null)) throw Error("The id provided is already owned by another player: " + e);
        d.lb.playerId = e;
        var f = ":" + (l.jd.ud.getInstance().Th++).toString(36);
        d.Df = f;
        a.Xa[e] = d;
        a.Ef.push(d);
        a.dd.push(B(d));
        return d
    };
    cast.receiver.games.o.Bb.prototype.Hf = function(a) {
        a = this.Xa[a] || null;
        if (!a) return null;
        delete this.Xa[C(a)];
        l.c.remove(this.Ef, a);
        l.c.remove(this.dd, B(a));
        return a
    };
    var E = function(a) {
        var c = a.La().length,
            d = a.Ua().length - c;
        if (!(d <= a.wf)) {
            var e = a.Ef;
            e.sort(function(a, c) {
                return a.Hd - c.Hd
            });
            for (var f = 0; f < e.length && !(d = e[f], 0 < d.Hd && a.Hf(C(d)), d = a.Ua().length - c, d <= a.wf); f++);
        }
    };
    cast.receiver.games.o.Wb = function() {
        this.ea = l.log.Ta("cast.receiver.games.internal.RequestManager");
        this.R = {};
        this.Lh = Array(cast.receiver.games.o.Wb.ng);
        this.Yd = 0
    };
    cast.receiver.games.o.Wb.ng = 30;
    cast.receiver.games.o.Wb.prototype.contains = function(a) {
        return this.R.hasOwnProperty(a)
    };
    cast.receiver.games.o.Wb.prototype.register = function(a) {
        if (this.contains(a)) return l.log.Ya(this.ea, "Request ID " + a + " was already processed."), !1;
        delete this.R[this.Lh[this.Yd]];
        this.Lh[this.Yd] = a;
        this.R[a] = !0;
        this.Yd = (this.Yd + 1) % cast.receiver.games.o.Wb.ng;
        return !0
    };
    cast.receiver.games.o.Ub = function(a) {
        this.ea = l.log.Ta("cast.receiver.games.internal.GameRequestProcessor");
        this.Ca = new cast.receiver.games.o.Bb(a.maxPlayers);
        this.bc = cast.receiver.games.Pa.LOADING;
        this.ee = cast.receiver.games.ob.OPEN;
        this.ef = "";
        this.ya = a;
        this.Md = null;
        this.Wh = new l.w.Map;
        this.fd = new cast.receiver.games.o.tc("cast.receiver.games.internal.GameRequestProcessor - ResponsePool", cast.receiver.games.o.Ub.hj, function() {
            return new cast.receiver.games.o.Di
        });
        if (1 > this.ya.maxPlayers) throw Error("Invalid maximum number of players set in the configuration: " +
            this.ya.maxPlayers);
        if (!this.ya.applicationName || l.b.Va(this.ya.applicationName)) throw Error("The application name cannot be empty in the configuration object.");
    };
    cast.receiver.games.o.Ub.hj = 50;
    cast.receiver.games.o.Ub.ui = [];
    var J = function(a, c, d) {
        var e = F(a);
        e.type = cast.receiver.games.o.td.fg;
        e.requestId = d.requestId;
        e.playerId = d.playerId;
        if (cast.receiver.games.o.A.Ll(d.type) && !d.playerId) return G(e, cast.receiver.games.$.INVALID_REQUEST, "Invalid request. Player ID not provided. Request ID:" + d.requestId);
        if (d.requestId && c && !l.b.Va(c)) {
            var f = a.Wh.get(c);
            f || (f = new cast.receiver.games.o.Wb, a.Wh.set(c, f));
            if (!f.register(d.requestId)) return G(e, cast.receiver.games.$.INVALID_REQUEST, "Invalid request. Request ID already processed: " +
                d.requestId)
        }
        if ((c = a.Ca.Xa[d.playerId] || null) && d.playerToken != c.rb()) return G(e, cast.receiver.games.$.NOT_ALLOWED, "Incorrect player token for player: " + C(c));
        switch (d.type) {
            case cast.receiver.games.o.A.PLAYER_AVAILABLE:
                if (c) e = H(a, c, d.playerId, cast.receiver.games.PlayerState.AVAILABLE, e);
                else a: if (d = d.playerId, a.La().length >= a.ya.maxPlayers) e = G(e, cast.receiver.games.$.TOO_MANY_PLAYERS, "Could not create a new player. The game is full. Max players: " + a.ya.maxPlayers);
                else {
                    f = null;
                    try {
                        f = D(a.Ca, d)
                    } catch (g) {
                        l.log.error(a.ea,
                            "Could not create player with player ID " + d, g);
                        e = G(e, cast.receiver.games.$.INVALID_REQUEST, "Could not create player with player ID " + d);
                        break a
                    }
                    e.playerId = C(f);
                    e.playerToken = f.rb();
                    e = H(a, f, e.playerId, cast.receiver.games.PlayerState.AVAILABLE, e)
                } break;
            case cast.receiver.games.o.A.PLAYER_READY:
                e = H(a, c, d.playerId, cast.receiver.games.PlayerState.READY, e);
                break;
            case cast.receiver.games.o.A.PLAYER_IDLE:
                e = H(a, c, d.playerId, cast.receiver.games.PlayerState.IDLE, e);
                break;
            case cast.receiver.games.o.A.PLAYER_PLAYING:
                e =
                    H(a, c, d.playerId, cast.receiver.games.PlayerState.PLAYING, e);
                break;
            case cast.receiver.games.o.A.PLAYER_DROPPED:
                e = H(a, c, d.playerId, cast.receiver.games.PlayerState.DROPPED, e);
                break;
            case cast.receiver.games.o.A.PLAYER_QUIT:
                e = H(a, c, d.playerId, cast.receiver.games.PlayerState.QUIT, e);
                break;
            case cast.receiver.games.o.A.UNKNOWN:
                e = H(a, c, d.playerId, cast.receiver.games.PlayerState.UNKNOWN, e);
                break;
            case cast.receiver.games.o.A.GAME_LOADING:
                a.bc = cast.receiver.games.Pa.LOADING;
                break;
            case cast.receiver.games.o.A.GAME_RUNNING:
                a.bc =
                    cast.receiver.games.Pa.RUNNING;
                break;
            case cast.receiver.games.o.A.GAME_PAUSED:
                a.bc = cast.receiver.games.Pa.PAUSED;
                break;
            case cast.receiver.games.o.A.GAME_SHOWING_INFO_SCREEN:
                a.bc = cast.receiver.games.Pa.SHOWING_INFO_SCREEN;
                break;
            case cast.receiver.games.o.A.LOBBY_OPEN:
                a.ee = cast.receiver.games.ob.OPEN;
                break;
            case cast.receiver.games.o.A.LOBBY_CLOSED:
                a.ee = cast.receiver.games.ob.CLOSED;
                break;
            case cast.receiver.games.o.A.wd:
                if (f = a.Ca.Xa[d.playerId] || null) f.lb.playerData = d.extraMessageData, B(f);
                break;
            case cast.receiver.games.o.A.pc:
                a.Md =
                    d.extraMessageData;
                break;
            case cast.receiver.games.o.A.qc:
                d = d.extraMessageData;
                a.ef = d ? d.toString() : "";
                break;
            case cast.receiver.games.o.A.ze:
                e.gameManagerConfig = a.ya;
                break;
            case cast.receiver.games.o.A.Ae:
            case cast.receiver.games.o.A.rd:
            case cast.receiver.games.o.A.yb:
                break;
            default:
                return G(e, cast.receiver.games.$.INVALID_REQUEST, "Invalid request type: " + d.type)
        }
        if (e.statusCode != cast.receiver.games.$.SUCCESS) return e;
        I(a, e);
        c && (e.playerToken = c.rb());
        return e
    };
    b = cast.receiver.games.o.Ub.prototype;
    b.Ma = function(a) {
        return (a = this.Ca.Xa[a] || null) ? B(a) : null
    };
    b.rb = function(a) {
        return (a = this.Ca.Xa[a] || null) ? a.rb() : null
    };
    b.Ua = function() {
        return this.Ca.Ua()
    };
    b.La = function() {
        return this.Ca.La()
    };
    b.ic = function(a) {
        a = this.Ca.Xa[a] || null;
        return !!a && a.ic()
    };
    b.Hf = function(a) {
        return (a = this.Ca.Hf(a)) ? B(a) : null
    };
    b.Pd = function() {
        return this.ya.applicationName
    };
    b.Ud = function() {
        return this.ya.maxPlayers
    };
    b.Sd = function() {
        return this.bc
    };
    b.Td = function() {
        return this.ee
    };
    b.Qd = function() {
        return this.Md
    };
    b.Rd = function() {
        return this.ef
    };
    var F = function(a) {
        var c = x(a.fd);
        c.type = cast.receiver.games.o.td.UNKNOWN;
        c.requestId = 0;
        c.playerId = "";
        c.playerToken = null;
        c.statusCode = cast.receiver.games.$.SUCCESS;
        c.errorDescription = "";
        c.gameplayState = cast.receiver.games.Pa.UNKNOWN;
        c.lobbyState = cast.receiver.games.ob.UNKNOWN;
        c.players = cast.receiver.games.o.Ub.ui;
        c.extraMessageData = null;
        c.gameData = a.Md;
        c.gameManagerConfig = null;
        return c
    }, I = function(a, c) {
            c.gameplayState = a.bc;
            c.lobbyState = a.ee;
            c.gameData = a.Md;
            c.gameStatusText = a.ef;
            c.players = a.Ca.Ua()
        },
        G = function(a, c, d) {
            a.statusCode = c;
            a.errorDescription = d;
            return a
        }, H = function(a, c, d, e, f) {
            var g = null;
            if (!c) return G(f, cast.receiver.games.$.INVALID_REQUEST, "Could not find player with id: " + d);
            if (e == cast.receiver.games.PlayerState.AVAILABLE && !a.Ca.Jc(d) && a.La().length >= a.ya.maxPlayers) return G(f, cast.receiver.games.$.TOO_MANY_PLAYERS, "Could not transition player to AVAILABLE. The game is full. Player id: " + d + " Max players: " + a.ya.maxPlayers);
            a: if (a = a.Ca, e == cast.receiver.games.PlayerState.UNKNOWN) g = !1;
            else {
                if (!a.Jc(C(c)))
                    if (e == cast.receiver.games.PlayerState.AVAILABLE) {
                        if (a.La().length >= a.wf) {
                            g = !1;
                            break a
                        }
                    } else if (e != cast.receiver.games.PlayerState.DROPPED && e != cast.receiver.games.PlayerState.QUIT) {
                    g = !1;
                    break a
                }
                c.Hd = e == cast.receiver.games.PlayerState.DROPPED || e == cast.receiver.games.PlayerState.QUIT || e == cast.receiver.games.PlayerState.UNKNOWN ? Date.now() : 0;
                c.lb.playerState = e;
                a.Jc(C(c)) || E(a);
                g = !0
            }
            return g ? f : (c = cast.receiver.games.o.Qa.hh(c.lb.playerState), e = cast.receiver.games.o.Qa.hh(e), G(f, cast.receiver.games.$.NOT_ALLOWED,
                "Invalid player state transition: " + c + " -> " + e))
        };
    l.debug.ha = {};
    l.debug.oo = function() {};
    l.debug.ha.kc = [];
    l.debug.ha.yf = [];
    l.debug.ha.Rh = !1;
    l.debug.ha.register = function(a) {
        l.debug.ha.kc[l.debug.ha.kc.length] = a;
        if (l.debug.ha.Rh)
            for (var c = l.debug.ha.yf, d = 0; d < c.length; d++) a(l.bind(c[d].xm, c[d]))
    };
    l.debug.ha.gu = function(a) {
        l.debug.ha.Rh = !0;
        for (var c = l.bind(a.xm, a), d = 0; d < l.debug.ha.kc.length; d++) l.debug.ha.kc[d](c);
        l.debug.ha.yf.push(a)
    };
    l.debug.ha.ov = function(a) {
        var c = l.debug.ha.yf;
        l.m.assert(a == c[c.length - 1], "Only the most recent monitor can be unwrapped.");
        a = l.bind(a.I, a);
        for (var d = 0; d < l.debug.ha.kc.length; d++) l.debug.ha.kc[d](a);
        c.length--
    };
    l.Ob = {};
    l.Ob.object = function(a, c) {
        return c
    };
    l.Ob.Lf = function(a) {
        l.Ob.Lf[" "](a);
        return a
    };
    l.Ob.Lf[" "] = l.na;
    l.Ob.Oj = function(a) {
        try {
            return l.Ob.Lf(a.nodeName), !0
        } catch (c) {}
        return !1
    };
    l.f.od = {
        Io: !l.userAgent.Da || l.userAgent.of(9),
        De: !l.userAgent.Da || l.userAgent.of(9),
        sj: l.userAgent.Da && !l.userAgent.Ba("9"),
        Ho: !l.userAgent.cb || l.userAgent.Ba("528"),
        Go: l.userAgent.sd && l.userAgent.Ba("1.9b") || l.userAgent.Da && l.userAgent.Ba("8") || l.userAgent.Ie && l.userAgent.Ba("9.5") || l.userAgent.cb && l.userAgent.Ba("528"),
        Po: l.userAgent.sd && !l.userAgent.Ba("8") || l.userAgent.Da && !l.userAgent.Ba("9"),
        rr: "ontouchstart" in l.global || !! (l.global.document && document.documentElement && "ontouchstart" in document.documentElement) || !(!l.global.navigator || !l.global.navigator.msMaxTouchPoints)
    };
    l.f.Vd = function(a) {
        return l.userAgent.cb ? "webkit" + a : l.userAgent.Ie ? "o" + a.toLowerCase() : a.toLowerCase()
    };
    l.f.EventType = {
        jn: "click",
        Iq: "rightclick",
        Cn: "dblclick",
        Cp: "mousedown",
        Gp: "mouseup",
        Vi: "mouseover",
        Ui: "mouseout",
        Fp: "mousemove",
        Dp: "mouseenter",
        Ep: "mouseleave",
        Rq: "selectstart",
        Er: "wheel",
        fp: "keypress",
        cp: "keydown",
        gp: "keyup",
        Zm: "blur",
        to: "focus",
        En: "deactivate",
        uo: l.userAgent.Da ? "focusin" : "DOMFocusIn",
        vo: l.userAgent.Da ? "focusout" : "DOMFocusOut",
        gn: "change",
        Fq: "reset",
        rj: "select",
        $q: "submit",
        Hi: "input",
        Dq: "propertychange",
        co: "dragstart",
        Yn: "drag",
        $n: "dragenter",
        bo: "dragover",
        ao: "dragleave",
        eo: "drop",
        Zn: "dragend",
        qr: "touchstart",
        pr: "touchmove",
        or: "touchend",
        nr: "touchcancel",
        Wm: "beforeunload",
        vn: "consolemessage",
        wn: "contextmenu",
        Sn: "DOMContentLoaded",
        ERROR: "error",
        Lo: "help",
        LOAD: "load",
        qp: "losecapture",
        jq: "orientationchange",
        Eq: "readystatechange",
        Gq: "resize",
        Pq: "scroll",
        zr: "unload",
        Fo: "hashchange",
        mq: "pagehide",
        nq: "pageshow",
        zq: "popstate",
        xn: "copy",
        pq: "paste",
        yn: "cut",
        Tm: "beforecopy",
        Um: "beforecut",
        Vm: "beforepaste",
        gq: "online",
        eq: "offline",
        MESSAGE: "message",
        un: "connect",
        Im: l.f.Vd("AnimationStart"),
        Gm: l.f.Vd("AnimationEnd"),
        Hm: l.f.Vd("AnimationIteration"),
        tr: l.f.Vd("TransitionEnd"),
        sq: "pointerdown",
        yq: "pointerup",
        rq: "pointercancel",
        vq: "pointermove",
        xq: "pointerover",
        wq: "pointerout",
        tq: "pointerenter",
        uq: "pointerleave",
        yo: "gotpointercapture",
        rp: "lostpointercapture",
        Hp: "MSGestureChange",
        Ip: "MSGestureEnd",
        Jp: "MSGestureHold",
        Kp: "MSGestureStart",
        Lp: "MSGestureTap",
        Mp: "MSGotPointerCapture",
        Np: "MSInertiaStart",
        Op: "MSLostPointerCapture",
        Pp: "MSPointerCancel",
        Qp: "MSPointerDown",
        Rp: "MSPointerEnter",
        Sp: "MSPointerHover",
        Tp: "MSPointerLeave",
        Up: "MSPointerMove",
        Vp: "MSPointerOut",
        Wp: "MSPointerOver",
        Xp: "MSPointerUp",
        TEXT: "text",
        hr: "textInput",
        sn: "compositionstart",
        tn: "compositionupdate",
        rn: "compositionend",
        no: "exit",
        lp: "loadabort",
        mp: "loadcommit",
        np: "loadredirect",
        op: "loadstart",
        pp: "loadstop",
        Hq: "responsive",
        Sq: "sizechanged",
        Ar: "unresponsive",
        Cr: "visibilitychange",
        Wq: "storage",
        Xn: "DOMSubtreeModified",
        Tn: "DOMNodeInserted",
        Vn: "DOMNodeRemoved",
        Wn: "DOMNodeRemovedFromDocument",
        Un: "DOMNodeInsertedIntoDocument",
        Qn: "DOMAttrModified",
        Rn: "DOMCharacterDataModified"
    };
    l.f.$a = function(a, c) {
        l.f.Event.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.Cc = this.state = null;
        if (a) {
            var d = this.type = a.type;
            this.target = a.target || a.srcElement;
            this.currentTarget = c;
            var e = a.relatedTarget;
            e ? l.userAgent.sd && (l.Ob.Oj(e) || (e = null)) : d == l.f.EventType.Vi ? e = a.fromElement : d == l.f.EventType.Ui &&
                (e = a.toElement);
            this.relatedTarget = e;
            this.offsetX = l.userAgent.cb || void 0 !== a.offsetX ? a.offsetX : a.layerX;
            this.offsetY = l.userAgent.cb || void 0 !== a.offsetY ? a.offsetY : a.layerY;
            this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
            this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
            this.screenX = a.screenX || 0;
            this.screenY = a.screenY || 0;
            this.button = a.button;
            this.keyCode = a.keyCode || 0;
            this.charCode = a.charCode || ("keypress" == d ? a.keyCode : 0);
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey =
                a.metaKey;
            this.state = a.state;
            this.Cc = a;
            a.defaultPrevented && this.preventDefault()
        }
    };
    l.kb(l.f.$a, l.f.Event);
    l.f.$a.Yp = {
        rc: 0,
        zp: 1,
        uc: 2
    };
    l.f.$a.Uo = [1, 4, 2];
    l.f.$a.prototype.stopPropagation = function() {
        l.f.$a.Qb.stopPropagation.call(this);
        this.Cc.stopPropagation ? this.Cc.stopPropagation() : this.Cc.cancelBubble = !0
    };
    l.f.$a.prototype.preventDefault = function() {
        l.f.$a.Qb.preventDefault.call(this);
        var a = this.Cc;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, l.f.od.sj) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (c) {}
    };
    l.f.oa = function() {};
    l.f.oa.ig = "closure_listenable_" + (1E6 * Math.random() | 0);
    l.f.oa.Fj = function() {
        l.f.EventTarget.prototype[l.f.oa.ig] = !0
    };
    l.f.oa.Wa = function(a) {
        return !(!a || !a[l.f.oa.ig])
    };
    l.f.vd = function() {};
    l.f.vd.Tj = 0;
    l.f.vd.Ml = function() {
        return ++l.f.vd.Tj
    };
    l.f.lg = function(a, c, d, e, f, g) {
        this.listener = a;
        this.pe = c;
        this.src = d;
        this.type = e;
        this.Yb = !! f;
        this.Wd = g;
        this.key = l.f.vd.Ml();
        this.mc = this.Ad = !1
    };
    l.f.lg.ko = !1;
    var K = function(a) {
        a.mc = !0;
        a.listener = null;
        a.pe = null;
        a.src = null;
        a.Wd = null
    };
    l.f.xa = function(a) {
        this.src = a;
        this.da = {};
        this.hd = 0
    };
    l.f.xa.prototype.add = function(a, c, d, e, f) {
        var g = a.toString();
        a = this.da[g];
        a || (a = this.da[g] = [], this.hd++);
        var h = l.f.xa.$e(a, c, e, f); - 1 < h ? (c = a[h], d || (c.Ad = !1)) : (c = new l.f.lg(c, null, this.src, g, !! e, f), c.Ad = d, a.push(c));
        return c
    };
    l.f.xa.prototype.remove = function(a, c, d, e) {
        a = a.toString();
        if (!(a in this.da)) return !1;
        var f = this.da[a];
        c = l.f.xa.$e(f, c, d, e);
        return -1 < c ? (K(f[c]), l.c.lc(f, c), 0 == f.length && (delete this.da[a], this.hd--), !0) : !1
    };
    var L = function(a, c) {
        var d = c.type;
        if (!(d in a.da)) return !1;
        var e = l.c.remove(a.da[d], c);
        e && (K(c), 0 == a.da[d].length && (delete a.da[d], a.hd--));
        return e
    };
    l.f.xa.prototype.ed = function(a) {
        a = a && a.toString();
        var c = 0,
            d;
        for (d in this.da)
            if (!a || d == a) {
                for (var e = this.da[d], f = 0; f < e.length; f++)++c, K(e[f]);
                delete this.da[d];
                this.hd--
            }
        return c
    };
    l.f.xa.prototype.Ec = function(a, c) {
        var d = this.da[a.toString()],
            e = [];
        if (d)
            for (var f = 0; f < d.length; ++f) {
                var g = d[f];
                g.Yb == c && e.push(g)
            }
        return e
    };
    l.f.xa.prototype.cc = function(a, c, d, e) {
        a = this.da[a.toString()];
        var f = -1;
        a && (f = l.f.xa.$e(a, c, d, e));
        return -1 < f ? a[f] : null
    };
    l.f.xa.prototype.hasListener = function(a, c) {
        var d = l.ma(a),
            e = d ? a.toString() : "",
            f = l.ma(c);
        return l.object.some(this.da, function(a) {
            for (var h = 0; h < a.length; ++h)
                if (!(d && a[h].type != e || f && a[h].Yb != c)) return !0;
            return !1
        })
    };
    l.f.xa.$e = function(a, c, d, e) {
        for (var f = 0; f < a.length; ++f) {
            var g = a[f];
            if (!g.mc && g.listener == c && g.Yb == !! d && g.Wd == e) return f
        }
        return -1
    };
    l.f.Ee = "closure_lm_" + (1E6 * Math.random() | 0);
    l.f.El = "on";
    l.f.zf = {};
    l.f.xe = {
        aj: 0,
        bj: 1,
        cj: 2
    };
    l.f.we = 2;
    l.f.rf = 0;
    l.f.Mb = function(a, c, d, e, f) {
        if (l.isArray(c)) {
            for (var g = 0; g < c.length; g++) l.f.Mb(a, c[g], d, e, f);
            return null
        }
        d = l.f.ue(d);
        return l.f.oa.Wa(a) ? a.Mb(c, d, e, f) : l.f.Mh(a, c, d, !1, e, f)
    };
    l.f.Mh = function(a, c, d, e, f, g) {
        if (!c) throw Error("Invalid event type");
        var h = !! f;
        if (h && !l.f.od.De) {
            if (l.f.we == l.f.xe.aj) return l.m.Aa("Can not register capture listener in IE8-."), null;
            if (l.f.we == l.f.xe.bj) return null
        }
        var k = l.f.qb(a);
        k || (a[l.f.Ee] = k = new l.f.xa(a));
        d = k.add(c, d, e, f, g);
        if (d.pe) return d;
        e = l.f.Bk();
        d.pe = e;
        e.src = a;
        e.listener = d;
        if (a.addEventListener) a.addEventListener(c.toString(), e, h);
        else if (a.attachEvent) a.attachEvent(l.f.fh(c.toString()), e);
        else throw Error("addEventListener and attachEvent are unavailable.");
        l.f.rf++;
        return d
    };
    l.f.Bk = function() {
        var a = l.f.Hc,
            c = l.f.od.De ? function(d) {
                return a.call(c.src, c.listener, d)
            } : function(d) {
                d = a.call(c.src, c.listener, d);
                if (!d) return d
            };
        return c
    };
    l.f.qf = function(a, c, d, e, f) {
        if (l.isArray(c)) {
            for (var g = 0; g < c.length; g++) l.f.qf(a, c[g], d, e, f);
            return null
        }
        d = l.f.ue(d);
        return l.f.oa.Wa(a) ? a.qf(c, d, e, f) : l.f.Mh(a, c, d, !0, e, f)
    };
    l.f.Xt = function(a, c, d, e, f) {
        c.Mb(a, d, e, f)
    };
    l.f.Sb = function(a, c, d, e, f) {
        if (l.isArray(c)) {
            for (var g = 0; g < c.length; g++) l.f.Sb(a, c[g], d, e, f);
            return null
        }
        d = l.f.ue(d);
        if (l.f.oa.Wa(a)) return a.Sb(c, d, e, f);
        if (!a) return !1;
        if (a = l.f.qb(a))
            if (c = a.cc(c, d, !! e, f)) return l.f.oc(c);
        return !1
    };
    l.f.oc = function(a) {
        if (l.gc(a) || !a || a.mc) return !1;
        var c = a.src;
        if (l.f.oa.Wa(c)) return c.oc(a);
        var d = a.type,
            e = a.pe;
        c.removeEventListener ? c.removeEventListener(d, e, a.Yb) : c.detachEvent && c.detachEvent(l.f.fh(d), e);
        l.f.rf--;
        (d = l.f.qb(c)) ? (L(d, a), 0 == d.hd && (d.src = null, c[l.f.Ee] = null)) : K(a);
        return !0
    };
    l.f.nv = function(a, c, d, e, f) {
        c.Sb(a, d, e, f)
    };
    l.f.ed = function(a, c) {
        if (!a) return 0;
        if (l.f.oa.Wa(a)) return a.za ? a.za.ed(c) : 0;
        var d = l.f.qb(a);
        if (!d) return 0;
        var e = 0,
            f = c && c.toString(),
            g;
        for (g in d.da)
            if (!f || g == f)
                for (var h = d.da[g].concat(), k = 0; k < h.length; ++k) l.f.oc(h[k]) && ++e;
        return e
    };
    l.f.Ec = function(a, c, d) {
        return l.f.oa.Wa(a) ? a.Ec(c, d) : a ? (a = l.f.qb(a)) ? a.Ec(c, d) : [] : []
    };
    l.f.cc = function(a, c, d, e, f) {
        d = l.f.ue(d);
        e = !! e;
        return l.f.oa.Wa(a) ? a.cc(c, d, e, f) : a ? (a = l.f.qb(a)) ? a.cc(c, d, e, f) : null : null
    };
    l.f.hasListener = function(a, c, d) {
        if (l.f.oa.Wa(a)) return a.hasListener(c, d);
        a = l.f.qb(a);
        return !!a && a.hasListener(c, d)
    };
    l.f.kk = function(a) {
        var c = [],
            d;
        for (d in a) a[d] && a[d].id ? c.push(d + " = " + a[d] + " (" + a[d].id + ")") : c.push(d + " = " + a[d]);
        return c.join("\n")
    };
    l.f.fh = function(a) {
        return a in l.f.zf ? l.f.zf[a] : l.f.zf[a] = l.f.El + a
    };
    l.f.Zb = function(a, c, d, e) {
        return l.f.oa.Wa(a) ? a.Zb(c, d, e) : l.f.bf(a, c, d, e)
    };
    l.f.bf = function(a, c, d, e) {
        var f = !0;
        if (a = l.f.qb(a))
            if (c = a.da[c.toString()])
                for (c = c.concat(), a = 0; a < c.length; a++) {
                    var g = c[a];
                    g && g.Yb == d && !g.mc && (g = l.f.af(g, e), f = f && !1 !== g)
                }
            return f
    };
    l.f.af = function(a, c) {
        var d = a.listener,
            e = a.Wd || a.src;
        a.Ad && l.f.oc(a);
        return d.call(e, c)
    };
    l.f.ft = function() {
        return l.f.rf
    };
    l.f.dispatchEvent = function(a, c) {
        l.m.assert(l.f.oa.Wa(a), "Can not use goog.events.dispatchEvent with non-goog.events.Listenable instance.");
        return a.dispatchEvent(c)
    };
    l.f.tu = function(a) {
        l.f.Hc = a.uu(l.f.Hc)
    };
    l.f.Hc = function(a, c) {
        if (a.mc) return !0;
        if (!l.f.od.De) {
            var d = c || l.eh("window.event"),
                e = new l.f.$a(d, this),
                f = !0;
            if (l.f.we == l.f.xe.cj) {
                if (!l.f.Zk(d)) {
                    l.f.rl(d);
                    for (var d = [], g = e.currentTarget; g; g = g.parentNode) d.push(g);
                    for (var g = a.type, h = d.length - 1; !e.Nb && 0 <= h; h--) {
                        e.currentTarget = d[h];
                        var k = l.f.bf(d[h], g, !0, e),
                            f = f && k
                    }
                    for (h = 0; !e.Nb && h < d.length; h++) e.currentTarget = d[h], k = l.f.bf(d[h], g, !1, e), f = f && k
                }
            } else f = l.f.af(a, e);
            return f
        }
        return l.f.af(a, new l.f.$a(c, this))
    };
    l.f.rl = function(a) {
        var c = !1;
        if (0 == a.keyCode) try {
            a.keyCode = -1;
            return
        } catch (d) {
            c = !0
        }
        if (c || void 0 == a.returnValue) a.returnValue = !0
    };
    l.f.Zk = function(a) {
        return 0 > a.keyCode || void 0 != a.returnValue
    };
    l.f.nm = 0;
    l.f.ht = function(a) {
        return a + "_" + l.f.nm++
    };
    l.f.qb = function(a) {
        a = a[l.f.Ee];
        return a instanceof l.f.xa ? a : null
    };
    l.f.Fe = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
    l.f.ue = function(a) {
        l.m.assert(a, "Listener can not be null.");
        if (l.sb(a)) return a;
        l.m.assert(a.handleEvent, "An object listener must have handleEvent method.");
        a[l.f.Fe] || (a[l.f.Fe] = function(c) {
            return a.handleEvent(c)
        });
        return a[l.f.Fe]
    };
    l.debug.ha.register(function(a) {
        l.f.Hc = a(l.f.Hc)
    });
    l.f.EventTarget = function() {
        l.S.call(this);
        this.za = new l.f.xa(this);
        this.Dj = this;
        this.Af = null
    };
    l.kb(l.f.EventTarget, l.S);
    l.f.oa.Fj();
    l.f.EventTarget.Ri = 1E3;
    b = l.f.EventTarget.prototype;
    b.addEventListener = function(a, c, d, e) {
        l.f.Mb(this, a, c, d, e)
    };
    b.removeEventListener = function(a, c, d, e) {
        l.f.Sb(this, a, c, d, e)
    };
    b.dispatchEvent = function(a) {
        M(this);
        var c, d = this.Af;
        if (d) {
            c = [];
            for (var e = 1; d; d = d.Af) c.push(d), l.m.assert(++e < l.f.EventTarget.Ri, "infinite loop")
        }
        return l.f.EventTarget.dk(this.Dj, a, c)
    };
    b.Ve = function() {
        l.f.EventTarget.Qb.Ve.call(this);
        this.za && this.za.ed(void 0);
        this.Af = null
    };
    b.Mb = function(a, c, d, e) {
        M(this);
        return this.za.add(String(a), c, !1, d, e)
    };
    b.qf = function(a, c, d, e) {
        return this.za.add(String(a), c, !0, d, e)
    };
    b.Sb = function(a, c, d, e) {
        return this.za.remove(String(a), c, d, e)
    };
    b.oc = function(a) {
        return L(this.za, a)
    };
    b.Zb = function(a, c, d) {
        a = this.za.da[String(a)];
        if (!a) return !0;
        a = a.concat();
        for (var e = !0, f = 0; f < a.length; ++f) {
            var g = a[f];
            if (g && !g.mc && g.Yb == c) {
                var h = g.listener,
                    k = g.Wd || g.src;
                g.Ad && this.oc(g);
                e = !1 !== h.call(k, d) && e
            }
        }
        return e && 0 != d.Xh
    };
    b.Ec = function(a, c) {
        return this.za.Ec(String(a), c)
    };
    b.cc = function(a, c, d, e) {
        return this.za.cc(String(a), c, d, e)
    };
    b.hasListener = function(a, c) {
        return this.za.hasListener(l.ma(a) ? String(a) : void 0, c)
    };
    var M = function(a) {
        l.m.assert(a.za, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
    };
    l.f.EventTarget.dk = function(a, c, d) {
        var e = c.type || c;
        if (l.L(c)) c = new l.f.Event(c, a);
        else if (c instanceof l.f.Event) c.target = c.target || a;
        else {
            var f = c;
            c = new l.f.Event(e, a);
            l.object.extend(c, f)
        }
        var f = !0,
            g;
        if (d)
            for (var h = d.length - 1; !c.Nb && 0 <= h; h--) g = c.currentTarget = d[h], f = g.Zb(e, !0, c) && f;
        c.Nb || (g = c.currentTarget = a, f = g.Zb(e, !0, c) && f, c.Nb || (f = g.Zb(e, !1, c) && f));
        if (d)
            for (h = 0; !c.Nb && h < d.length; h++) g = c.currentTarget = d[h], f = g.Zb(e, !1, c) && f;
        return f
    };
    cast.receiver.games.M = function() {};
    l.u(cast.receiver.games, "GameManagerListener", cast.receiver.games.M);
    l.u(cast.receiver.games.M.prototype, "onPlayerAvailable", cast.receiver.games.M.prototype.Xc);
    l.u(cast.receiver.games.M.prototype, "onPlayerReady", cast.receiver.games.M.prototype.cd);
    l.u(cast.receiver.games.M.prototype, "onPlayerIdle", cast.receiver.games.M.prototype.$c);
    l.u(cast.receiver.games.M.prototype, "onPlayerPlaying", cast.receiver.games.M.prototype.ad);
    l.u(cast.receiver.games.M.prototype, "onPlayerDropped", cast.receiver.games.M.prototype.Zc);
    l.u(cast.receiver.games.M.prototype, "onPlayerQuit", cast.receiver.games.M.prototype.bd);
    l.u(cast.receiver.games.M.prototype, "onGameMessageReceived", cast.receiver.games.M.prototype.Qc);
    l.u(cast.receiver.games.M.prototype, "onGameLoading", cast.receiver.games.M.prototype.Pc);
    l.u(cast.receiver.games.M.prototype, "onGameRunning", cast.receiver.games.M.prototype.Sc);
    l.u(cast.receiver.games.M.prototype, "onGamePaused", cast.receiver.games.M.prototype.Rc);
    l.u(cast.receiver.games.M.prototype, "onGameShowingInfoScreen", cast.receiver.games.M.prototype.Tc);
    l.u(cast.receiver.games.M.prototype, "onLobbyOpen", cast.receiver.games.M.prototype.Wc);
    l.u(cast.receiver.games.M.prototype, "onLobbyClosed", cast.receiver.games.M.prototype.Vc);
    l.u(cast.receiver.games.M.prototype, "onPlayerDataChanged", cast.receiver.games.M.prototype.Yc);
    l.u(cast.receiver.games.M.prototype, "onGameDataChanged", cast.receiver.games.M.prototype.Oc);
    l.u(cast.receiver.games.M.prototype, "onGameStatusTextChanged", cast.receiver.games.M.prototype.Uc);
    cast.receiver.games.hg = function() {
        this.requestId = 0;
        this.playerId = "";
        this.statusCode = cast.receiver.games.$.SUCCESS;
        this.errorDescription = "";
        this.extraMessageData = null
    };
    l.u(cast.receiver.games, "GameManagerResult", cast.receiver.games.hg);
    cast.receiver.games.j = function(a) {
        this.ea = l.log.Ta("cast.receiver.games.GameManager");
        this.Bd = cast.receiver.CastReceiverManager.getInstance();
        this.he = this.Bd.getCastMessageBus(cast.receiver.system.NAMESPACE_PREFIX + cast.receiver.games.NAMESPACE_SUFFIX, cast.receiver.CastMessageBus.MessageType.JSON);
        this.Gb = new l.f.EventTarget;
        this.ta = new l.w.Map;
        this.Oa = new l.w.Map;
        this.U = new cast.receiver.games.o.Ub(a);
        this.Xe = new cast.receiver.games.o.tc("cast.receiver.games.GameManager - EventPool", cast.receiver.games.j.wi,
            function() {
                return new cast.receiver.games.Event
            });
        this.df = new cast.receiver.games.o.tc("cast.receiver.games.GameManager - RequestPool", cast.receiver.games.j.Ci, function() {
            return new cast.receiver.games.o.Ei
        });
        this.ac = new cast.receiver.games.hg;
        this.Bd.addEventListener(cast.receiver.CastReceiverManager.EventType.SENDER_DISCONNECTED, l.bind(this.Dl, this));
        this.he.addEventListener(cast.receiver.CastMessageBus.EventType.MESSAGE, l.bind(this.Cl, this))
    };
    l.u(cast.receiver.games, "GameManager", cast.receiver.games.j);
    cast.receiver.games.j.wi = 50;
    cast.receiver.games.j.Ci = 50;
    cast.receiver.games.j.fj = new l.w.Map(cast.receiver.games.o.A.PLAYER_AVAILABLE, cast.receiver.games.EventType.PLAYER_AVAILABLE, cast.receiver.games.o.A.PLAYER_READY, cast.receiver.games.EventType.PLAYER_READY, cast.receiver.games.o.A.PLAYER_IDLE, cast.receiver.games.EventType.PLAYER_IDLE, cast.receiver.games.o.A.PLAYER_PLAYING, cast.receiver.games.EventType.PLAYER_PLAYING, cast.receiver.games.o.A.PLAYER_DROPPED, cast.receiver.games.EventType.PLAYER_DROPPED, cast.receiver.games.o.A.PLAYER_QUIT, cast.receiver.games.EventType.PLAYER_QUIT,
        cast.receiver.games.o.A.rd, cast.receiver.games.EventType.GAME_MESSAGE_RECEIVED, cast.receiver.games.o.A.yb, cast.receiver.games.EventType.GAME_MESSAGE_RECEIVED, cast.receiver.games.o.A.GAME_LOADING, cast.receiver.games.EventType.GAME_LOADING, cast.receiver.games.o.A.GAME_RUNNING, cast.receiver.games.EventType.GAME_RUNNING, cast.receiver.games.o.A.GAME_PAUSED, cast.receiver.games.EventType.GAME_PAUSED, cast.receiver.games.o.A.GAME_SHOWING_INFO_SCREEN, cast.receiver.games.EventType.GAME_SHOWING_INFO_SCREEN, cast.receiver.games.o.A.LOBBY_OPEN,
        cast.receiver.games.EventType.LOBBY_OPEN, cast.receiver.games.o.A.LOBBY_CLOSED, cast.receiver.games.EventType.LOBBY_CLOSED, cast.receiver.games.o.A.wd, cast.receiver.games.EventType.PLAYER_DATA_CHANGED, cast.receiver.games.o.A.pc, cast.receiver.games.EventType.GAME_DATA_CHANGED, cast.receiver.games.o.A.qc, cast.receiver.games.EventType.GAME_STATUS_TEXT_CHANGED);
    cast.receiver.games.j.prototype.Xc = l.na;
    l.u(cast.receiver.games.j.prototype, "onPlayerAvailable", cast.receiver.games.j.prototype.Xc);
    cast.receiver.games.j.prototype.cd = l.na;
    l.u(cast.receiver.games.j.prototype, "onPlayerReady", cast.receiver.games.j.prototype.cd);
    cast.receiver.games.j.prototype.$c = l.na;
    l.u(cast.receiver.games.j.prototype, "onPlayerIdle", cast.receiver.games.j.prototype.$c);
    cast.receiver.games.j.prototype.ad = l.na;
    l.u(cast.receiver.games.j.prototype, "onPlayerPlaying", cast.receiver.games.j.prototype.ad);
    cast.receiver.games.j.prototype.Zc = l.na;
    l.u(cast.receiver.games.j.prototype, "onPlayerDropped", cast.receiver.games.j.prototype.Zc);
    cast.receiver.games.j.prototype.bd = l.na;
    l.u(cast.receiver.games.j.prototype, "onPlayerQuit", cast.receiver.games.j.prototype.bd);
    cast.receiver.games.j.prototype.Qc = l.na;
    l.u(cast.receiver.games.j.prototype, "onGameMessageReceived", cast.receiver.games.j.prototype.Qc);
    cast.receiver.games.j.prototype.Pc = l.na;
    l.u(cast.receiver.games.j.prototype, "onGameLoading", cast.receiver.games.j.prototype.Pc);
    cast.receiver.games.j.prototype.Sc = l.na;
    l.u(cast.receiver.games.j.prototype, "onGameRunning", cast.receiver.games.j.prototype.Sc);
    cast.receiver.games.j.prototype.Rc = l.na;
    l.u(cast.receiver.games.j.prototype, "onGamePaused", cast.receiver.games.j.prototype.Rc);
    cast.receiver.games.j.prototype.Tc = l.na;
    l.u(cast.receiver.games.j.prototype, "onGameShowingInfoScreen", cast.receiver.games.j.prototype.Tc);
    cast.receiver.games.j.prototype.Wc = l.na;
    l.u(cast.receiver.games.j.prototype, "onLobbyOpen", cast.receiver.games.j.prototype.Wc);
    cast.receiver.games.j.prototype.Vc = l.na;
    l.u(cast.receiver.games.j.prototype, "onLobbyClosed", cast.receiver.games.j.prototype.Vc);
    cast.receiver.games.j.prototype.Yc = l.na;
    l.u(cast.receiver.games.j.prototype, "onPlayerDataChanged", cast.receiver.games.j.prototype.Yc);
    cast.receiver.games.j.prototype.Oc = l.na;
    l.u(cast.receiver.games.j.prototype, "onGameDataChanged", cast.receiver.games.j.prototype.Oc);
    cast.receiver.games.j.prototype.Uc = l.na;
    l.u(cast.receiver.games.j.prototype, "onGameStatusTextChanged", cast.receiver.games.j.prototype.Uc);
    cast.receiver.games.j.prototype.Jf = function(a, c) {
        var d = this.dc(a);
        if (d) {
            var e = this.U,
                f = F(e);
            f.type = cast.receiver.games.o.td.yb;
            f.playerId = a;
            f.requestId = 0;
            f.extraMessageData = c;
            I(e, f);
            this.Gb.hasListener(cast.receiver.games.EventType.qd) && (e = N(this, cast.receiver.games.EventType.qd, null, f, null), e.playerInfo = this.U.Ma(a), e.resultExtraMessageData = f.extraMessageData, this.Gb.dispatchEvent(e), A(this.Xe, e));
            this.he.send(d, f);
            A(this.U.fd, f)
        } else l.log.error(this.ea, "No senderId found for player ID " + a)
    };
    l.u(cast.receiver.games.j.prototype, "sendGameMessageToPlayer", cast.receiver.games.j.prototype.Jf);
    cast.receiver.games.j.prototype.Zl = function(a, c) {
        for (var d = 0; d < a.length; d++) this.Jf(a[d], c)
    };
    l.u(cast.receiver.games.j.prototype, "sendGameMessageToPlayers", cast.receiver.games.j.prototype.Zl);
    cast.receiver.games.j.prototype.Yl = function(a) {
        for (var c = this.U.La(), d = 0; d < c.length; d++) this.Jf(c[d].playerId, a)
    };
    l.u(cast.receiver.games.j.prototype, "sendGameMessageToAllConnectedPlayers", cast.receiver.games.j.prototype.Yl);
    cast.receiver.games.j.prototype.Ma = function(a) {
        return this.U.Ma(a)
    };
    l.u(cast.receiver.games.j.prototype, "getPlayer", cast.receiver.games.j.prototype.Ma);
    cast.receiver.games.j.prototype.gh = function(a, c) {
        c && (c.length = 0);
        if (!this.ta.ua(a)) return c ? c : [];
        var d = this.ta.get(a);
        c ? l.c.mf(c, d) : c = l.c.clone(d);
        return c
    };
    l.u(cast.receiver.games.j.prototype, "getPlayerIdsWithSenderId", cast.receiver.games.j.prototype.gh);
    cast.receiver.games.j.prototype.dc = function(a) {
        return this.Oa.ua(a) ? this.Oa.get(a) : null
    };
    l.u(cast.receiver.games.j.prototype, "getSenderIdWithPlayerId", cast.receiver.games.j.prototype.dc);
    cast.receiver.games.j.prototype.Ua = function(a) {
        var c = this.U.Ua();
        a ? (a.length = 0, l.c.mf(a, c)) : a = l.c.clone(c);
        return a
    };
    l.u(cast.receiver.games.j.prototype, "getPlayers", cast.receiver.games.j.prototype.Ua);
    cast.receiver.games.j.prototype.La = function(a) {
        var c = this.U.La();
        a ? (a.length = 0, l.c.mf(a, c)) : a = l.c.clone(c);
        return a
    };
    l.u(cast.receiver.games.j.prototype, "getConnectedPlayers", cast.receiver.games.j.prototype.La);
    cast.receiver.games.j.prototype.Jc = function(a) {
        a = this.Ma(a);
        return null != a && a.playerState != cast.receiver.games.PlayerState.UNKNOWN && a.playerState != cast.receiver.games.PlayerState.QUIT && a.playerState != cast.receiver.games.PlayerState.DROPPED
    };
    l.u(cast.receiver.games.j.prototype, "isPlayerConnected", cast.receiver.games.j.prototype.Jc);
    cast.receiver.games.j.prototype.Ak = function(a, c) {
        c ? c.length = 0 : c = [];
        for (var d = this.Ua(), e = 0; e < d.length; e++) {
            var f = d[e];
            f.playerState == a && c.push(f)
        }
        return c
    };
    l.u(cast.receiver.games.j.prototype, "getPlayersInState", cast.receiver.games.j.prototype.Ak);
    cast.receiver.games.j.prototype.Pd = function() {
        return this.U.Pd()
    };
    l.u(cast.receiver.games.j.prototype, "getApplicationName", cast.receiver.games.j.prototype.Pd);
    cast.receiver.games.j.prototype.Ud = function() {
        return this.U.Ud()
    };
    l.u(cast.receiver.games.j.prototype, "getMaxPlayers", cast.receiver.games.j.prototype.Ud);
    cast.receiver.games.j.prototype.Sd = function() {
        return this.U.Sd()
    };
    l.u(cast.receiver.games.j.prototype, "getGameplayState", cast.receiver.games.j.prototype.Sd);
    cast.receiver.games.j.prototype.Td = function() {
        return this.U.Td()
    };
    l.u(cast.receiver.games.j.prototype, "getLobbyState", cast.receiver.games.j.prototype.Td);
    cast.receiver.games.j.prototype.Qd = function() {
        return this.U.Qd()
    };
    l.u(cast.receiver.games.j.prototype, "getGameData", cast.receiver.games.j.prototype.Qd);
    cast.receiver.games.j.prototype.Rd = function() {
        return this.U.Rd()
    };
    l.u(cast.receiver.games.j.prototype, "getGameStatusText", cast.receiver.games.j.prototype.Rd);
    cast.receiver.games.j.prototype.addEventListener = function(a, c) {
        this.Gb.Mb(a, c)
    };
    l.u(cast.receiver.games.j.prototype, "addEventListener", cast.receiver.games.j.prototype.addEventListener);
    cast.receiver.games.j.prototype.removeEventListener = function(a, c) {
        this.Gb.Sb(a, c)
    };
    l.u(cast.receiver.games.j.prototype, "removeEventListener", cast.receiver.games.j.prototype.removeEventListener);
    cast.receiver.games.j.prototype.Ej = function(a) {
        for (var c = cast.receiver.games.EventType, c = new l.w.Map(c.PLAYER_AVAILABLE, a.Xc, c.PLAYER_READY, a.cd, c.PLAYER_IDLE, a.$c, c.PLAYER_PLAYING, a.ad, c.PLAYER_DROPPED, a.Zc, c.PLAYER_QUIT, a.bd, c.GAME_MESSAGE_RECEIVED, a.Qc, c.GAME_LOADING, a.Pc, c.GAME_RUNNING, a.Sc, c.GAME_PAUSED, a.Rc, c.GAME_SHOWING_INFO_SCREEN, a.Tc, c.LOBBY_OPEN, a.Wc, c.LOBBY_CLOSED, a.Vc, c.PLAYER_DATA_CHANGED, a.Yc, c.GAME_DATA_CHANGED, a.Oc, c.GAME_STATUS_TEXT_CHANGED, a.Uc), d = c.pa(), e = 0; e < d.length; e++) {
            var f =
                d[e],
                g = c.get(f);
            this.Gb.Mb(f, g, !1, a)
        }
    };
    l.u(cast.receiver.games.j.prototype, "addGameManagerListener", cast.receiver.games.j.prototype.Ej);
    cast.receiver.games.j.prototype.Jl = function(a) {
        for (var c = cast.receiver.games.EventType, c = new l.w.Map(c.PLAYER_AVAILABLE, a.Xc, c.PLAYER_READY, a.cd, c.PLAYER_IDLE, a.$c, c.PLAYER_PLAYING, a.ad, c.PLAYER_DROPPED, a.Zc, c.PLAYER_QUIT, a.bd, c.GAME_MESSAGE_RECEIVED, a.Qc, c.GAME_LOADING, a.Pc, c.GAME_RUNNING, a.Sc, c.GAME_PAUSED, a.Rc, c.GAME_SHOWING_INFO_SCREEN, a.Tc, c.LOBBY_OPEN, a.Wc, c.LOBBY_CLOSED, a.Vc, c.PLAYER_DATA_CHANGED, a.Yc, c.GAME_DATA_CHANGED, a.Oc, c.GAME_STATUS_TEXT_CHANGED, a.Uc), d = c.pa(), e = 0; e < d.length; e++) {
            var f =
                d[e],
                g = c.get(f);
            this.Gb.Sb(f, g, !1, a)
        }
    };
    l.u(cast.receiver.games.j.prototype, "removeGameManagerListener", cast.receiver.games.j.prototype.Jl);
    cast.receiver.games.j.prototype.zd = function(a) {
        var c = P(this, null, cast.receiver.games.o.A.Ae, null),
            d = Q(this, null, c);
        d.statusCode != cast.receiver.games.$.SUCCESS && l.log.error(this.ea, "Error when broadcasting game manager status : " + d.statusCode + " " + d.errorDescription);
        for (var e = this.Bd.getSenders(), f = 0; f < e.length; f++) {
            var g = e[f];
            a && a == g || this.he.send(g, d)
        }
        A(this.df, c);
        A(this.U.fd, d)
    };
    l.u(cast.receiver.games.j.prototype, "broadcastGameManagerStatus", cast.receiver.games.j.prototype.zd);
    cast.receiver.games.j.prototype.te = function(a, c, d, e) {
        if (!a) {
            if (c != cast.receiver.games.PlayerState.AVAILABLE) throw Error("playerState parameter must be AVAILABLE if playerId is null. playerState = " + c);
            e = !! e;
            var f;
            f = this.U;
            if (f.La().length >= f.ya.maxPlayers) throw Error("Could not create virtual player. Game is full. Max players: " + f.ya.maxPlayers);
            f = D(f.Ca);
            f.Fh = !0;
            f = B(f);
            return this.te(f.playerId, cast.receiver.games.PlayerState.AVAILABLE, d, e)
        }
        f = this.Ma(a);
        var g = this.dc(a);
        if (!g && !f) throw Error("No player exists with player ID " +
            a);
        if (!g && !this.U.ic(a)) throw Error("No sender ID found for non-virtual player ID " + a);
        a = cast.receiver.games.o.A.wk(c);
        return R(this, f.playerId, g, a, d, !! e)
    };
    l.u(cast.receiver.games.j.prototype, "updatePlayerState", cast.receiver.games.j.prototype.te);
    cast.receiver.games.j.prototype.am = function(a, c, d) {
        var e = this.Ma(a),
            f = this.dc(a);
        if (!f && !e) throw Error("No player exists with player ID " + a);
        if (!f && !this.U.ic(a)) throw Error("No sender ID found for non-virtual player ID " + a);
        return R(this, a, f, cast.receiver.games.o.A.yb, c, !! d)
    };
    l.u(cast.receiver.games.j.prototype, "simulateGameMessageFromPlayer", cast.receiver.games.j.prototype.am);
    cast.receiver.games.j.prototype.tm = function(a, c, d) {
        a = cast.receiver.games.o.A.vk(a);
        return R(this, null, null, a, c, !! d)
    };
    l.u(cast.receiver.games.j.prototype, "updateLobbyState", cast.receiver.games.j.prototype.tm);
    cast.receiver.games.j.prototype.sm = function(a, c, d) {
        a = cast.receiver.games.o.A.uk(a);
        return R(this, null, null, a, c, !! d)
    };
    l.u(cast.receiver.games.j.prototype, "updateGameplayState", cast.receiver.games.j.prototype.sm);
    cast.receiver.games.j.prototype.um = function(a, c, d) {
        var e = this.Ma(a),
            f = this.dc(a);
        if (!f && !e) throw Error("No player exists with player ID " + a);
        if (!f && !this.U.ic(a)) throw Error("No sender ID found for non-virtual player ID " + a);
        return R(this, a, f, cast.receiver.games.o.A.wd, c, !! d)
    };
    l.u(cast.receiver.games.j.prototype, "updatePlayerData", cast.receiver.games.j.prototype.um);
    cast.receiver.games.j.prototype.qm = function(a, c) {
        return R(this, null, null, cast.receiver.games.o.A.pc, a, !! c)
    };
    l.u(cast.receiver.games.j.prototype, "updateGameData", cast.receiver.games.j.prototype.qm);
    cast.receiver.games.j.prototype.rm = function(a, c) {
        var d = R(this, null, null, cast.receiver.games.o.A.qc, a, !! c);
        d.statusCode == cast.receiver.games.$.SUCCESS && this.Bd.setApplicationState(a);
        return d
    };
    l.u(cast.receiver.games.j.prototype, "updateGameStatusText", cast.receiver.games.j.prototype.rm);
    cast.receiver.games.j.prototype.rb = function(a) {
        return this.U.rb(a)
    };
    cast.receiver.games.j.prototype.Dl = function(a) {
        var c = this.gh(a.senderId),
            d = a.reason == cast.receiver.system.DisconnectReason.REQUESTED_BY_SENDER,
            e = !1;
        if (c) {
            for (var f = 0; f < c.length; f++) {
                var g = c[f],
                    h = this.U.Ma(g);
                h && (h = h.playerState, d && h != cast.receiver.games.PlayerState.QUIT ? (this.te(g, cast.receiver.games.PlayerState.QUIT, null, !0), e = !0) : d || h == cast.receiver.games.PlayerState.QUIT || h == cast.receiver.games.PlayerState.DROPPED || (this.te(g, cast.receiver.games.PlayerState.DROPPED, null, !0), e = !0))
            }
            c = a.senderId;
            if (this.ta.ua(c)) {
                d = this.ta.get(c);
                for (f = 0; f < d.length; f++) this.Oa.remove(d[f]);
                this.ta.remove(c)
            }
            e && this.zd(a.senderId)
        }
    };
    cast.receiver.games.j.prototype.Cl = function(a) {
        var c = a.data;
        if (!a.senderId) throw Error("Unable to process incoming sender message. null sender ID");
        var d = Q(this, a.senderId, c),
            e = !0,
            f = !0;
        switch (c.type) {
            case cast.receiver.games.o.A.ze:
            case cast.receiver.games.o.A.rd:
                e = !0;
                f = !1;
                break;
            case cast.receiver.games.o.A.yb:
                f = e = !1;
                break;
            case cast.receiver.games.o.A.PLAYER_DROPPED:
                e = !1;
                f = !0;
                break;
            default:
                f = e = !0
        }
        e && this.he.send(a.senderId, d);
        f && d.statusCode == cast.receiver.games.$.SUCCESS && this.zd(a.senderId);
        A(this.U.fd,
            d)
    };
    var Q = function(a, c, d) {
        var e = cast.receiver.games.o.A,
            f = J(a.U, c, d);
        if (c) {
            var g = f.playerId;
            if (g) {
                var h = null;
                a.Oa.ua(g) && (h = a.Oa.get(g));
                if (h != c) {
                    if (h)
                        if (a.ta.ua(h) && !a.Oa.ua(g)) {
                            l.log.Ya(a.ea, "Player ID " + g + " is not mapped.");
                            var k = a.ta.get(h);
                            l.c.remove(k, g);
                            a.ta.set(h, k)
                        } else !a.ta.ua(h) && a.Oa.ua(g) ? (l.log.Ya(a.ea, "Sender ID " + h + " is not mapped."), a.Oa.remove(g)) : a.ta.ua(h) || a.Oa.ua(g) ? (k = a.ta.get(h), l.c.remove(k, g), a.ta.set(h, k), a.Oa.remove(g)) : l.log.Ya(a.ea, "Cannot remove player ID " + g + " mapped to sender ID " + h +
                        " because neither are mapped.");
                    h = null;
                    h = a.ta.ua(c) ? a.ta.get(c) : [];
                    h.push(g);
                    a.ta.set(c, h);
                    a.Oa.set(g, c)
                }
            } else l.log.Ya(a.ea, "Not mapping sender ID " + c + " to a blank Player ID.")
        }
        f.statusCode != cast.receiver.games.$.SUCCESS && l.log.error(a.ea, "Error for request type: " + d.type + " request ID: " + d.requestId + " statusCode: " + f.statusCode + " " + f.errorDescription);
        if (d.type != e.ze && d.type != e.Ae) {
            c = null;
            e = cast.receiver.games.o.A;
            if (d.type == e.PLAYER_DROPPED || d.type == e.PLAYER_QUIT) c = a.U.Ma(d.playerId);
            e = cast.receiver.games.j.fj.get(d.type,
                cast.receiver.games.EventType.UNKNOWN);
            e == cast.receiver.games.EventType.UNKNOWN && l.log.error(a.ea, "No event found for request type: " + d.type);
            d = N(a, e, d, f, c);
            switch (e) {
                case cast.receiver.games.EventType.PLAYER_AVAILABLE:
                    a.Xc(d);
                    break;
                case cast.receiver.games.EventType.PLAYER_READY:
                    a.cd(d);
                    break;
                case cast.receiver.games.EventType.PLAYER_IDLE:
                    a.$c(d);
                    break;
                case cast.receiver.games.EventType.PLAYER_PLAYING:
                    a.ad(d);
                    break;
                case cast.receiver.games.EventType.PLAYER_DROPPED:
                    a.Zc(d);
                    break;
                case cast.receiver.games.EventType.PLAYER_QUIT:
                    a.bd(d);
                    break;
                case cast.receiver.games.EventType.GAME_MESSAGE_RECEIVED:
                    a.Qc(d);
                    break;
                case cast.receiver.games.EventType.GAME_LOADING:
                    a.Pc(d);
                    break;
                case cast.receiver.games.EventType.GAME_RUNNING:
                    a.Sc(d);
                    break;
                case cast.receiver.games.EventType.GAME_PAUSED:
                    a.Rc(d);
                    break;
                case cast.receiver.games.EventType.GAME_SHOWING_INFO_SCREEN:
                    a.Tc(d);
                    break;
                case cast.receiver.games.EventType.LOBBY_OPEN:
                    a.Wc(d);
                    break;
                case cast.receiver.games.EventType.LOBBY_CLOSED:
                    a.Vc(d);
                    break;
                case cast.receiver.games.EventType.PLAYER_DATA_CHANGED:
                    a.Yc(d);
                    break;
                case cast.receiver.games.EventType.GAME_DATA_CHANGED:
                    a.Oc(d);
                    break;
                case cast.receiver.games.EventType.GAME_STATUS_TEXT_CHANGED:
                    a.Uc(d);
                    break;
                default:
                    throw Error("Cannot process game manager request with eventType: " + e);
            }
            a.Gb.dispatchEvent(d);
            f.extraMessageData = d.resultExtraMessageData;
            A(a.Xe, d);
            I(a.U, f)
        }
        return f
    }, N = function(a, c, d, e, f) {
            var g = x(a.Xe);
            if (!g) throw Error("No more game manager event objects left in pool.");
            g.type = c;
            g.playerInfo = null;
            f ? g.playerInfo = f : d && (g.playerInfo = a.U.Ma(e.playerId));
            g.requestExtraMessageData = d ? d.extraMessageData : null;
            g.resultExtraMessageData = null;
            g.statusCode = e ? e.statusCode : cast.receiver.games.$.SUCCESS;
            g.errorDescription = e ? e.errorDescription : "";
            return g
        }, R = function(a, c, d, e, f, g) {
            c = P(a, c, e, f);
            d = Q(a, d, c);
            A(a.df, c);
            a.ac.playerId = d.playerId;
            a.ac.requestId = d.requestId;
            a.ac.statusCode = d.statusCode;
            a.ac.errorDescription = d.errorDescription;
            a.ac.extraMessageData = d.extraMessageData;
            c = a.ac;
            A(a.U.fd, d);
            g || a.zd(null);
            return c
        }, P = function(a, c, d, e) {
            var f = x(a.df);
            if (!f) throw Error("Unable to allocate a new game manager request.");
            f.requestId = 0;
            f.playerToken = "";
            f.version = cast.receiver.games.SDK_VERSION_NUMBER;
            f.type = d;
            f.playerId = "";
            f.extraMessageData = e;
            c && (f.playerId = c, f.playerToken = a.rb(c));
            return f
        };
    cast.receiver.games.Be = function() {
        this.applicationName = "CastGameManagerApplication";
        this.maxPlayers = 4;
        this.version = cast.receiver.games.SDK_VERSION_NUMBER
    };
    l.u(cast.receiver.games, "GameManagerConfig", cast.receiver.games.Be);
    l.u(cast.receiver.games.Be.prototype, "version", cast.receiver.games.Be.prototype.version);
    cast.receiver.games.debug = {};
    cast.receiver.games.debug.ba = function(a) {
        this.T = a;
        this.ea = l.log.Ta("cast.receiver.games.debug.DebugUI");
        this.G = document.createElement("div");
        this.G.className = cast.receiver.games.debug.ba.Ha.oi;
        this.G.style.background = "rgba(0, 0, 0, 0.5)";
        this.G.style.color = "white";
        this.G.style.fontFamily = "arial, helvetica, geneva";
        this.G.style.fontSize = "12pt";
        this.G.style.padding = "10px";
        this.G.style.position = "absolute";
        this.G.style.overflow = "hidden";
        this.G.style.left = "2.5%";
        this.G.style.top = "2.5%";
        this.G.style.right =
            "2.5%";
        this.G.style.bottom = "2.5%";
        a = document.createElement("h2");
        a.innerText = "Game Debug UI";
        this.G.appendChild(a);
        a = document.createElement("span");
        a.innerText = "Application name: ";
        this.G.appendChild(a);
        this.yd = document.createElement("pre");
        this.yd.style.display = "inline";
        this.yd.className = cast.receiver.games.debug.ba.Ha.ji;
        this.G.appendChild(this.yd);
        this.G.appendChild(document.createElement("div"));
        a = document.createElement("span");
        a.innerText = "Max players: ";
        this.G.appendChild(a);
        this.ge = document.createElement("pre");
        this.ge.style.display = "inline";
        this.ge.className = cast.receiver.games.debug.ba.Ha.Si;
        this.G.appendChild(this.ge);
        this.G.appendChild(document.createElement("div"));
        a = document.createElement("span");
        a.innerText = "Gameplay State: ";
        this.G.appendChild(a);
        this.Od = document.createElement("pre");
        this.Od.style.display = "inline";
        this.Od.className = cast.receiver.games.debug.ba.Ha.Bi;
        this.G.appendChild(this.Od);
        this.G.appendChild(document.createElement("div"));
        a = document.createElement("span");
        a.innerText = "Lobby State: ";
        this.G.appendChild(a);
        this.de = document.createElement("pre");
        this.de.style.display = "inline";
        this.de.className = cast.receiver.games.debug.ba.Ha.Oi;
        this.G.appendChild(this.de);
        this.G.appendChild(document.createElement("div"));
        a = document.createElement("span");
        a.innerText = "Game Status Text: ";
        this.G.appendChild(a);
        this.Nd = document.createElement("pre");
        this.Nd.style.display = "inline";
        this.Nd.className = cast.receiver.games.debug.ba.Ha.qc;
        this.G.appendChild(this.Nd);
        a = document.createElement("div");
        a.innerText =
            "Game Data: ";
        this.G.appendChild(a);
        this.Ld = document.createElement("pre");
        this.Ld.style.display = "inline";
        this.Ld.className = cast.receiver.games.debug.ba.Ha.pc;
        this.G.appendChild(this.Ld);
        a = document.createElement("div");
        a.innerText = "Players: ";
        this.G.appendChild(a);
        this.ke = document.createElement("pre");
        this.ke.style.display = "inline";
        this.ke.className = cast.receiver.games.debug.ba.Ha.ej;
        this.G.appendChild(this.ke);
        a = document.createElement("div");
        a.innerText = "Last Received Game Message: ";
        this.G.appendChild(a);
        this.be = document.createElement("pre");
        this.be.style.display = "inline";
        this.be.className = cast.receiver.games.debug.ba.Ha.Ki;
        this.G.appendChild(this.be);
        a = document.createElement("div");
        a.innerText = "Last Sent Game Message: ";
        this.G.appendChild(a);
        this.ce = document.createElement("pre");
        this.ce.style.display = "inline";
        this.ce.className = cast.receiver.games.debug.ba.Ha.Li;
        this.G.appendChild(this.ce);
        a = document.createElement("div");
        a.innerText = "Last Event: ";
        this.G.appendChild(a);
        this.Kc = document.createElement("pre");
        this.Kc.style.display = "inline";
        this.Kc.className = cast.receiver.games.debug.ba.Ha.Ji;
        this.G.appendChild(this.Kc);
        a = cast.receiver.games.EventType;
        var c = l.bind(this.di, this);
        this.T.addEventListener(a.UNKNOWN, c);
        this.T.addEventListener(a.PLAYER_AVAILABLE, c);
        this.T.addEventListener(a.PLAYER_READY, c);
        this.T.addEventListener(a.PLAYER_IDLE, c);
        this.T.addEventListener(a.PLAYER_PLAYING, c);
        this.T.addEventListener(a.PLAYER_DROPPED, c);
        this.T.addEventListener(a.PLAYER_QUIT, c);
        this.T.addEventListener(a.GAME_MESSAGE_RECEIVED,
            c);
        this.T.addEventListener(a.qd, c);
        this.T.addEventListener(a.GAME_LOADING, c);
        this.T.addEventListener(a.GAME_RUNNING, c);
        this.T.addEventListener(a.GAME_PAUSED, c);
        this.T.addEventListener(a.GAME_SHOWING_INFO_SCREEN, c);
        this.T.addEventListener(a.LOBBY_OPEN, c);
        this.T.addEventListener(a.LOBBY_CLOSED, c);
        this.T.addEventListener(a.PLAYER_DATA_CHANGED, c);
        this.T.addEventListener(a.GAME_DATA_CHANGED, c);
        this.T.addEventListener(a.GAME_STATUS_TEXT_CHANGED, c)
    };
    l.Ze("cast.receiver.games.debug.DebugUI", cast.receiver.games.debug.ba);
    cast.receiver.games.debug.ba.Ha = {
        ji: "castReceiverGamesDebugUiApplicationName",
        oi: "castReceiverGamesDebugUi",
        Bi: "castReceiverGamesDebugUiGameplayState",
        pc: "castReceiverGamesDebugUiGameData",
        qc: "castReceiverGamesDebugUiGameStatusText",
        Ji: "castReceiverGamesDebugUiLastEvent",
        Ki: "castReceiverGameDebugUiLastReceivedGameMessage",
        Li: "castReceiverGameDebugUiLastSentGameMessage",
        Oi: "castReceiverGamesDebugUiLobbyState",
        Si: "castReceiverGamesDebugUiMaxPlayers",
        ej: "castReceiverGamesDebugUiPlayers"
    };
    cast.receiver.games.debug.ba.prototype.open = function() {
        this.G.parentNode ? l.log.Ya(this.ea, "Debug UI is already open.") : (this.di(null), document.body.appendChild(this.G))
    };
    l.u(cast.receiver.games.debug.ba.prototype, "open", cast.receiver.games.debug.ba.prototype.open);
    cast.receiver.games.debug.ba.prototype.close = function() {
        this.G.parentNode ? document.body.removeChild(this.G) : l.log.Ya(this.ea, "Debug UI is already closed.")
    };
    l.u(cast.receiver.games.debug.ba.prototype, "close", cast.receiver.games.debug.ba.prototype.close);
    cast.receiver.games.debug.ba.prototype.di = function(a) {
        var c = !0;
        this.yd.innerText = this.T.Pd();
        this.ge.innerText = this.T.Ud();
        this.Od.innerText = S(cast.receiver.games.Pa, this.T.Sd());
        this.de.innerText = S(cast.receiver.games.ob, this.T.Td());
        this.Nd.innerText = this.T.Rd();
        a && a.type == cast.receiver.games.EventType.GAME_MESSAGE_RECEIVED && (this.be.innerText = JSON.stringify(a.requestExtraMessageData));
        a && a.type == cast.receiver.games.EventType.qd && (c = !1, this.ce.innerText = JSON.stringify(a.resultExtraMessageData));
        this.Ld.innerText = JSON.stringify(this.T.Qd());
        for (var d = this.T.Ua(), e = "", f = 0; f < d.length; f++) var g = d[f],
        h = S(cast.receiver.games.PlayerState, g.playerState), e = l.b.Eg(e, "-> playerId = ", g.playerId, " senderId = ", this.T.dc(g.playerId), " state = ", h, " playerData = ", JSON.stringify(g.playerData), "\n");
        this.ke.innerText = e;
        a ? (c = c ? S(cast.receiver.games.EventType, a.type) : "(internal event)", f = e = d = "null", a.playerInfo && (d = a.playerInfo.playerId, e = S(cast.receiver.games.PlayerState, a.playerInfo.playerState), f = JSON.stringify(a.playerInfo.playerData)),
            g = "SUCCESS", h = "null", a.statusCode != cast.receiver.games.$.SUCCESS && (g = S(cast.receiver.games.$, a.statusCode), h = a.errorDescription), this.Kc.innerText = l.b.Eg("eventType = ", c, "\n  playerId = ", d, " playerState = ", e, " playerData = ", f, "\n  statusCode = ", g, " errorDescription = ", h, "\n  requestExtraMessageData = ", JSON.stringify(a.requestExtraMessageData), "\n  resultExtraMessageData = ", JSON.stringify(a.resultExtraMessageData), "\n")) : this.Kc.innerText = ""
    };
    var S = function(a, c) {
        for (var d = l.object.pa(a), e = 0; e < d.length; e++) {
            var f = d[e];
            if (a[f] == c) return f
        }
        return "Unknown value: " + c
    };
}).call(window);
