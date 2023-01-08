var Module = (() => {
    var e = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0;
    return function(r) {
        var t, n;
        (r = void 0 !== (r = r || {}) ? r : {}).ready = new Promise((function(e, r) {
            t = e, n = r
        })), r.expectedDataFileDownloads || (r.expectedDataFileDownloads = 0), r.expectedDataFileDownloads++, r.ENVIRONMENT_IS_PTHREAD || function(e) {
            "object" == typeof window ? window.encodeURIComponent(window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf("/")) + "/") : "undefined" == typeof process && "undefined" != typeof location && encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf("/")) + "/");
            var t = "waflash.data";
            "function" != typeof r.locateFilePackage || r.locateFile || (r.locateFile = r.locateFilePackage, m("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)"));
            var n, o, a, i, u = r.locateFile ? r.locateFile(t, "") : t,
                s = e.remote_package_size,
                c = null,
                f = r.getPreloadedPackage ? r.getPreloadedPackage(u, s) : null;

            function l() {
                function t(e, r) {
                    if (!e) throw r + (new Error).stack
                }

                function n(e, r, t) {
                    this.start = e, this.end = r, this.audio = t
                }
                n.prototype = {
                    requests: {},
                    open: function(e, t) {
                        this.name = t, this.requests[t] = this, r.addRunDependency("fp " + this.name)
                    },
                    send: function() {},
                    onload: function() {
                        var e = this.byteArray.subarray(this.start, this.end);
                        this.finish(e)
                    },
                    finish: function(e) {
                        r.FS_createDataFile(this.name, null, e, !0, !0, !0), r.removeRunDependency("fp " + this.name), this.requests[this.name] = null
                    }
                };
                for (var o = e.files, a = 0; a < o.length; ++a) new n(o[a].start, o[a].end, o[a].audio || 0).open("GET", o[a].filename);

                function i(o) {
                    t(o, "Loading data file failed."), t(o instanceof ArrayBuffer, "bad input to processPackageData");
                    var a = new Uint8Array(o);
                    n.prototype.byteArray = a;
                    for (var i = e.files, u = 0; u < i.length; ++u) n.prototype.requests[i[u].filename].onload();
                    r.removeRunDependency("datafile_waflash.data")
                }
                r.addRunDependency("datafile_waflash.data"), r.preloadResults || (r.preloadResults = {}), r.preloadResults["waflash.data"] = {
                    fromCache: !1
                }, f ? (i(f), f = null) : c = i
            }
            f || (n = u, o = s, a = function(e) {
                c ? (c(e), c = null) : f = e
            }, (i = new XMLHttpRequest).open("GET", n, !0), i.responseType = "arraybuffer", i.onprogress = function(e) {
                var t = n,
                    a = o;
                if (e.total && (a = e.total), e.loaded) {
                    i.addedTotal ? r.dataFileDownloads[t].loaded = e.loaded : (i.addedTotal = !0, r.dataFileDownloads || (r.dataFileDownloads = {}), r.dataFileDownloads[t] = {
                        loaded: e.loaded,
                        total: a
                    });
                    var u = 0,
                        s = 0,
                        c = 0;
                    for (var f in r.dataFileDownloads) {
                        var l = r.dataFileDownloads[f];
                        u += l.total, s += l.loaded, c++
                    }
                    u = Math.ceil(u * r.expectedDataFileDownloads / c), r.setStatus && r.setStatus("Downloading data... (" + s + "/" + u + ")")
                } else r.dataFileDownloads || r.setStatus && r.setStatus("Downloading data...")
            }, i.onerror = function(e) {
                throw new Error("NetworkError for: " + n)
            }, i.onload = function(e) {
                if (!(200 == i.status || 304 == i.status || 206 == i.status || 0 == i.status && i.response)) throw new Error(i.statusText + " : " + i.responseURL);
                var r = i.response;
                a(r)
            }, i.send(null)), r.calledRun ? l() : (r.preRun || (r.preRun = []), r.preRun.push(l))
        }({
            files: [{
                filename: "/desktop.ini",
                start: 0,
                end: 46
            }, {
                filename: "/NanumSquareRoundOTFR.otf",
                start: 46,
                end: 465950
            }],
            remote_package_size: 465950,
            package_uuid: "74fc2879-af1d-4d8b-9194-f7bc5b9409d3"
        });
        var o, a, i, u = Object.assign({}, r),
            s = [],
            c = "./this.program",
            f = (e, r) => {
                throw r
            },
            l = "";
        "undefined" != typeof document && document.currentScript && (l = document.currentScript.src), e && (l = e), l = 0 !== l.indexOf("blob:") ? l.substr(0, l.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", o = e => {
            var r = new XMLHttpRequest;
            return r.open("GET", e, !1), r.send(null), r.responseText
        }, a = (e, r, t) => {
            var n = new XMLHttpRequest;
            n.open("GET", e, !0), n.responseType = "arraybuffer", n.onload = () => {
                200 == n.status || 0 == n.status && n.response ? r(n.response) : t()
            }, n.onerror = t, n.send(null)
        }, i = e => document.title = e;
        var d = r.print || console.log.bind(console),
            m = r.printErr || console.warn.bind(console);

        function p(e) {
            p.shown || (p.shown = {}), p.shown[e] || (p.shown[e] = 1, m(e))
        }
        Object.assign(r, u), u = null, r.arguments && (s = r.arguments), r.thisProgram && (c = r.thisProgram), r.quit && (f = r.quit);
        var v, g = 0;
        r.wasmBinary && (v = r.wasmBinary);
        var h, b = r.noExitRuntime || !0;

        function y(e, r, t = "i8", n) {
            switch ("*" === t.charAt(t.length - 1) && (t = "i32"), t) {
                case "i1":
                case "i8":
                    A[e >> 0] = r;
                    break;
                case "i16":
                    B[e >> 1] = r;
                    break;
                case "i32":
                    D[e >> 2] = r;
                    break;
                case "i64":
                    ee = [r >>> 0, (J = r, +Math.abs(J) >= 1 ? J > 0 ? (0 | Math.min(+Math.floor(J / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((J - +(~~J >>> 0)) / 4294967296) >>> 0 : 0)], D[e >> 2] = ee[0], D[e + 4 >> 2] = ee[1];
                    break;
                case "float":
                    F[e >> 2] = r;
                    break;
                case "double":
                    T[e >> 3] = r;
                    break;
                default:
                    ie("invalid type for setValue: " + t)
            }
        }
        "object" != typeof WebAssembly && ie("no native wasm support detected");
        var w, x = !1;

        function E(e, r) {
            e || ie(r)
        }

        function k(e) {
            return r["_" + e]
        }

        function C(e, r, t, n, o) {
            var a = {
                    string: function(e) {
                        var r = 0;
                        if (null != e && 0 !== e) {
                            var t = 1 + (e.length << 2);
                            O(e, r = Zr(t), t)
                        }
                        return r
                    },
                    array: function(e) {
                        var r = Zr(e.length);
                        return function(e, r) {
                            A.set(e, r)
                        }(e, r), r
                    }
                },
                i = k(e),
                u = [],
                s = 0;
            if (n)
                for (var c = 0; c < n.length; c++) {
                    var f = a[t[c]];
                    f ? (0 === s && (s = Kr()), u[c] = f(n[c])) : u[c] = n[c]
                }
            var l = i.apply(null, u);
            return function(e) {
                return 0 !== s && $r(s),
                    function(e) {
                        return "string" === r ? M(e) : "boolean" === r ? Boolean(e) : e
                    }(e)
            }(l)
        }
        var S, A, L, B, _, D, P, F, T, I = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;

        function R(e, r, t) {
            for (var n = r + t, o = r; e[o] && !(o >= n);) ++o;
            if (o - r > 16 && e.subarray && I) return I.decode(e.subarray(r, o));
            for (var a = ""; r < o;) {
                var i = e[r++];
                if (128 & i) {
                    var u = 63 & e[r++];
                    if (192 != (224 & i)) {
                        var s = 63 & e[r++];
                        if ((i = 224 == (240 & i) ? (15 & i) << 12 | u << 6 | s : (7 & i) << 18 | u << 12 | s << 6 | 63 & e[r++]) < 65536) a += String.fromCharCode(i);
                        else {
                            var c = i - 65536;
                            a += String.fromCharCode(55296 | c >> 10, 56320 | 1023 & c)
                        }
                    } else a += String.fromCharCode((31 & i) << 6 | u)
                } else a += String.fromCharCode(i)
            }
            return a
        }

        function M(e, r) {
            return e ? R(L, e, r) : ""
        }

        function N(e, r, t, n) {
            if (!(n > 0)) return 0;
            for (var o = t, a = t + n - 1, i = 0; i < e.length; ++i) {
                var u = e.charCodeAt(i);
                if (u >= 55296 && u <= 57343 && (u = 65536 + ((1023 & u) << 10) | 1023 & e.charCodeAt(++i)), u <= 127) {
                    if (t >= a) break;
                    r[t++] = u
                } else if (u <= 2047) {
                    if (t + 1 >= a) break;
                    r[t++] = 192 | u >> 6, r[t++] = 128 | 63 & u
                } else if (u <= 65535) {
                    if (t + 2 >= a) break;
                    r[t++] = 224 | u >> 12, r[t++] = 128 | u >> 6 & 63, r[t++] = 128 | 63 & u
                } else {
                    if (t + 3 >= a) break;
                    r[t++] = 240 | u >> 18, r[t++] = 128 | u >> 12 & 63, r[t++] = 128 | u >> 6 & 63, r[t++] = 128 | 63 & u
                }
            }
            return r[t] = 0, t - o
        }

        function O(e, r, t) {
            return N(e, L, r, t)
        }

        function U(e) {
            for (var r = 0, t = 0; t < e.length; ++t) {
                var n = e.charCodeAt(t);
                n >= 55296 && n <= 57343 && (n = 65536 + ((1023 & n) << 10) | 1023 & e.charCodeAt(++t)), n <= 127 ? ++r : r += n <= 2047 ? 2 : n <= 65535 ? 3 : 4
            }
            return r
        }

        function z(e) {
            var r = U(e) + 1,
                t = Vr(r);
            return t && N(e, A, t, r), t
        }

        function j(e) {
            var r = U(e) + 1,
                t = Zr(r);
            return N(e, A, t, r), t
        }

        function q(e) {
            S = e, r.HEAP8 = A = new Int8Array(e), r.HEAP16 = B = new Int16Array(e), r.HEAP32 = D = new Int32Array(e), r.HEAPU8 = L = new Uint8Array(e), r.HEAPU16 = _ = new Uint16Array(e), r.HEAPU32 = P = new Uint32Array(e), r.HEAPF32 = F = new Float32Array(e), r.HEAPF64 = T = new Float64Array(e)
        }
        r.INITIAL_MEMORY;
        var G, Q = [],
            H = [],
            V = [],
            X = [],
            W = [],
            Y = !1;

        function K() {
            return b || !1
        }
        var $, Z, J, ee, re = 0,
            te = null,
            ne = null;

        function oe(e) {
            re++, r.monitorRunDependencies && r.monitorRunDependencies(re)
        }

        function ae(e) {
            if (re--, r.monitorRunDependencies && r.monitorRunDependencies(re), 0 == re && (null !== te && (clearInterval(te), te = null), ne)) {
                var t = ne;
                ne = null, t()
            }
        }

        function ie(e) {
            r.onAbort && r.onAbort(e), m(e = "Aborted(" + e + ")"), x = !0, w = 1, e += ". Build with -s ASSERTIONS=1 for more info.";
            var t = new WebAssembly.RuntimeError(e);
            throw n(t), t
        }

        function ue(e) {
            return e.startsWith("data:application/octet-stream;base64,")
        }

        function se(e) {
            try {
                if (e == $ && v) return new Uint8Array(v);
                throw "both async and sync fetching of the wasm failed"
            } catch (e) {
                ie(e)
            }
        }
        r.preloadedImages = {}, r.preloadedAudios = {}, ue($ = "waflash.wasm") || (Z = $, $ = r.locateFile ? r.locateFile(Z, l) : l + Z);
        var ce = {
            993777: function(e) {
                const r = M(e);
                Se.mkdir(r), Se.mount(Ce, {}, r), Se.syncfs(!0, (e => {}))
            },
            993886: function() {
                Se.syncfs((e => {
                    console.log("IDBFS synced.")
                }))
            },
            993939: function() {
                return "function" == typeof URLSearchParams && "1" == new URLSearchParams(window.location.search).get("wafv")
            },
            994118: function() {
                const e = "https://vidkidz.tistory.com/",
                    r = U(e) + 1,
                    t = Vr(r);
                return O(e, t, r), t
            },
            994329: function() {
                "function" == typeof r.options.onload && r.options.onload()
            },
            994405: function() {
                return !1 !== r.options.autoPlay
            },
            994451: function() {
                r.canvas.addEventListener("keydown", (e => {
                    r.keyboardModifierState = r.keyboardModifierState || {}, r.keyboardModifierState.NumLock = e.getModifierState("NumLock"), r.keyboardModifierState.CapLock = e.getModifierState("CapLock")
                })), document.addEventListener("keydown", (e => {
                    r.keyboardModifierState = r.keyboardModifierState || {}, r.keyboardModifierState.NumLock = e.getModifierState("NumLock"), r.keyboardModifierState.CapLock = e.getModifierState("CapLock")
                }))
            },
            994983: function() {
                const e = "https://vidkidz.tistory.com/",
                    r = U(e) + 1,
                    t = Vr(r);
                return O(e, t, r), t
            },
            995194: function() {
                if ("function" != typeof URLSearchParams) return 0;
                const e = new URLSearchParams(window.location.search).get("wafsrc");
                if (e) {
                    let r;
                    if (e.startsWith("http://") || e.startsWith("https://")) r = e;
                    else if ("/" == e[0]) r = window.location.origin + e;
                    else {
                        let t = window.location.pathname.substr(0, window.location.pathname.lastIndexOf("/") + 1);
                        r = window.location.origin + t + e
                    }
                    const t = U(r) + 1,
                        n = Vr(t);
                    return O(r, n, t), n
                }
                return 0
            },
            995836: function() {
                return "function" == typeof URLSearchParams && "gpu" == new URLSearchParams(window.location.search).get("wafm")
            },
            996017: function() {
                let e = r.canvas.id;
                if (!e) return 0;
                e = "#" + e;
                const t = U(e) + 1,
                    n = Vr(t);
                return O(e, n, t), n
            },
            996251: function() {
                return !(!r.options || !r.options.useMouseWheel)
            },
            996314: function() {
                return r.keyboardModifierState.NumLock
            },
            996363: function() {
                const e = r.canvas.wafActiveInputText;
                e && r.canvas.parentNode.removeChild(e), r.canvas.wafActiveInputText = null, r.canvas.focus()
            },
            996536: function(e, t) {
                const n = r.canvas.wafActiveInputText;
                n && (n.wafSelectionChangedByEngine = !0, n.wafSelectionStart = n.selectionStart = e, n.wafSelectionEnd = n.selectionEnd = t)
            },
            996729: function(e) {
                const t = r.canvas.wafActiveInputText;
                if (t) {
                    const r = M(e);
                    t.value != r && (t.value = r, t.wafSelectionStart = t.selectionStart = r.length, t.wafSelectionEnd = t.selectionEnd = r.length)
                }
            },
            996995: function(e) {
                r.canvas.style.cursor = e ? "auto" : "none"
            },
            997055: function() {
                return ({
                    high: 3,
                    medium: 2,
                    low: 1
                } [r.options.quality] || 3) - 1
            },
            997145: function() {
                return ({
                    high: 3,
                    medium: 2,
                    low: 1
                } [r.options.quality] || 3) - 1
            },
            997239: function() {
                r.canvas.style.cursor = "none"
            },
            997283: function() {
                r.canvas.style.cursor = "auto"
            },
            997327: function(e) {
                var r, t, n = M(e) + "\n\nAbort/Retry/Ignore/AlwaysIgnore? [ariA] :",
                    o = window.prompt(n, "i");
                return null === o && (o = "i"), r = jr(o), t = Vr(r.length), r.subarray || r.slice || (r = new Uint8Array(r)), L.set(r, t), t
            },
            997552: function() {
                return "undefined" != typeof AudioContext || "undefined" != typeof webkitAudioContext ? 1 : 0
            },
            997689: function() {
                return void 0 !== navigator.mediaDevices && void 0 !== navigator.mediaDevices.getUserMedia || void 0 !== navigator.webkitGetUserMedia ? 1 : 0
            },
            997913: function(e) {
                void 0 === r.SDL2 && (r.SDL2 = {});
                var t = r.SDL2;
                return e ? t.capture = {} : t.audio = {}, t.audioContext || ("undefined" != typeof AudioContext ? t.audioContext = new AudioContext : "undefined" != typeof webkitAudioContext && (t.audioContext = new webkitAudioContext), t.audioContext && fe(t.audioContext)), void 0 === t.audioContext ? -1 : 0
            },
            998406: function() {
                return r.SDL2.audioContext.sampleRate
            },
            998474: function(e, t, n, o) {
                var a = r.SDL2,
                    i = function(r) {
                        void 0 !== a.capture.silenceTimer && (clearTimeout(a.capture.silenceTimer), a.capture.silenceTimer = void 0), a.capture.mediaStreamNode = a.audioContext.createMediaStreamSource(r), a.capture.scriptProcessorNode = a.audioContext.createScriptProcessor(t, e, 1), a.capture.scriptProcessorNode.onaudioprocess = function(e) {
                            void 0 !== a && void 0 !== a.capture && (e.outputBuffer.getChannelData(0).fill(0), a.capture.currentCaptureBuffer = e.inputBuffer, ve("vi", n, [o]))
                        }, a.capture.mediaStreamNode.connect(a.capture.scriptProcessorNode), a.capture.scriptProcessorNode.connect(a.audioContext.destination), a.capture.stream = r
                    },
                    u = function(e) {};
                a.capture.silenceBuffer = a.audioContext.createBuffer(e, t, a.audioContext.sampleRate), a.capture.silenceBuffer.getChannelData(0).fill(0), a.capture.silenceTimer = setTimeout((function() {
                    a.capture.currentCaptureBuffer = a.capture.silenceBuffer, ve("vi", n, [o])
                }), t / a.audioContext.sampleRate * 1e3), void 0 !== navigator.mediaDevices && void 0 !== navigator.mediaDevices.getUserMedia ? navigator.mediaDevices.getUserMedia({
                    audio: !0,
                    video: !1
                }).then(i).catch(u) : void 0 !== navigator.webkitGetUserMedia && navigator.webkitGetUserMedia({
                    audio: !0,
                    video: !1
                }, i, u)
            },
            1000126: function(e, t, n, o) {
                var a = r.SDL2;
                a.audio.scriptProcessorNode = a.audioContext.createScriptProcessor(t, 0, e), a.audio.scriptProcessorNode.onaudioprocess = function(e) {
                    void 0 !== a && void 0 !== a.audio && (a.audio.currentOutputBuffer = e.outputBuffer, ve("vi", n, [o]))
                }, a.audio.scriptProcessorNode.connect(a.audioContext.destination)
            },
            1000536: function(e, t) {
                for (var n = r.SDL2, o = n.capture.currentCaptureBuffer.numberOfChannels, a = 0; a < o; ++a) {
                    var i = n.capture.currentCaptureBuffer.getChannelData(a);
                    if (i.length != t) throw "Web Audio capture buffer length mismatch! Destination size: " + i.length + " samples vs expected " + t + " samples!";
                    if (1 == o)
                        for (var u = 0; u < t; ++u) y(e + 4 * u, i[u], "float");
                    else
                        for (u = 0; u < t; ++u) y(e + 4 * (u * o + a), i[u], "float")
                }
            },
            1001141: function(e, t) {
                for (var n = r.SDL2, o = n.audio.currentOutputBuffer.numberOfChannels, a = 0; a < o; ++a) {
                    var i = n.audio.currentOutputBuffer.getChannelData(a);
                    if (i.length != t) throw "Web Audio output buffer length mismatch! Destination size: " + i.length + " samples vs expected " + t + " samples!";
                    for (var u = 0; u < t; ++u) i[u] = F[e + (u * o + a << 2) >> 2]
                }
            },
            1001621: function(e) {
                var t = r.SDL2;
                if (e) {
                    if (void 0 !== t.capture.silenceTimer && clearTimeout(t.capture.silenceTimer), void 0 !== t.capture.stream) {
                        for (var n = t.capture.stream.getAudioTracks(), o = 0; o < n.length; o++) t.capture.stream.removeTrack(n[o]);
                        t.capture.stream = void 0
                    }
                    void 0 !== t.capture.scriptProcessorNode && (t.capture.scriptProcessorNode.onaudioprocess = function(e) {}, t.capture.scriptProcessorNode.disconnect(), t.capture.scriptProcessorNode = void 0), void 0 !== t.capture.mediaStreamNode && (t.capture.mediaStreamNode.disconnect(), t.capture.mediaStreamNode = void 0), void 0 !== t.capture.silenceBuffer && (t.capture.silenceBuffer = void 0), t.capture = void 0
                } else null != t.audio.scriptProcessorNode && (t.audio.scriptProcessorNode.disconnect(), t.audio.scriptProcessorNode = void 0), t.audio = void 0;
                void 0 !== t.audioContext && void 0 === t.audio && void 0 === t.capture && (t.audioContext.close(), t.audioContext = void 0)
            },
            1002793: function(e, t, n) {
                var o = e,
                    a = t,
                    i = n;
                r.SDL2 || (r.SDL2 = {});
                var u = r.SDL2;
                u.ctxCanvas !== r.canvas && (u.ctx = r.createContext(r.canvas, !1, !0), u.ctxCanvas = r.canvas), u.w === o && u.h === a && u.imageCtx === u.ctx || (u.image = u.ctx.createImageData(o, a), u.w = o, u.h = a, u.imageCtx = u.ctx);
                var s, c = u.image.data,
                    f = i >> 2,
                    l = 0;
                if ("undefined" != typeof CanvasPixelArray && c instanceof CanvasPixelArray)
                    for (s = c.length; l < s;) {
                        var d = D[f];
                        c[l] = 255 & d, c[l + 1] = d >> 8 & 255, c[l + 2] = d >> 16 & 255, c[l + 3] = 255, f++, l += 4
                    } else {
                        u.data32Data !== c && (u.data32 = new Int32Array(c.buffer), u.data8 = new Uint8Array(c.buffer), u.data32Data = c);
                        var m = u.data32;
                        s = m.length, m.set(D.subarray(f, f + s));
                        var p = u.data8,
                            v = 3,
                            g = v + 4 * s;
                        if (s % 8 == 0)
                            for (; v < g;) p[v] = 255, p[v = v + 4 | 0] = 255, p[v = v + 4 | 0] = 255, p[v = v + 4 | 0] = 255, p[v = v + 4 | 0] = 255, p[v = v + 4 | 0] = 255, p[v = v + 4 | 0] = 255, p[v = v + 4 | 0] = 255, v = v + 4 | 0;
                        else
                            for (; v < g;) p[v] = 255, v = v + 4 | 0
                    }
                return u.ctx.putImageData(u.image, 0, 0), 0
            },
            1004272: function(e, r, t, n, o) {
                var a = e,
                    i = r,
                    u = t,
                    s = n,
                    c = o,
                    f = document.createElement("canvas");
                f.width = a, f.height = i;
                var l, d = f.getContext("2d"),
                    m = d.createImageData(a, i),
                    p = m.data,
                    v = c >> 2,
                    g = 0;
                if ("undefined" != typeof CanvasPixelArray && p instanceof CanvasPixelArray)
                    for (l = p.length; g < l;) {
                        var h = D[v];
                        p[g] = 255 & h, p[g + 1] = h >> 8 & 255, p[g + 2] = h >> 16 & 255, p[g + 3] = h >> 24 & 255, v++, g += 4
                    } else {
                        var b = new Int32Array(p.buffer);
                        l = b.length, b.set(D.subarray(v, v + l))
                    }
                d.putImageData(m, 0, 0);
                var y = 0 === u && 0 === s ? "url(" + f.toDataURL() + "), auto" : "url(" + f.toDataURL() + ") " + u + " " + s + ", auto",
                    w = Vr(y.length + 1);
                return O(y, w, y.length + 1), w
            },
            1005261: function(e) {
                return r.canvas && (r.canvas.style.cursor = M(e)), 0
            },
            1005354: function() {
                r.canvas && (r.canvas.style.cursor = "none")
            },
            1005423: function() {
                return window.innerWidth
            },
            1005453: function() {
                return window.innerHeight
            }
        };

        function fe(e, r) {
            r || (r = [document, document.getElementById("canvas")]), ["keydown", "mousedown", "touchstart"].forEach((function(t) {
                r.forEach((function(r) {
                    r && function(e, r, t) {
                        e.addEventListener(r, t, {
                            once: !0
                        })
                    }(r, t, (function() {
                        "suspended" === e.state && e.resume()
                    }))
                }))
            }))
        }

        function le(e) {
            for (; e.length > 0;) {
                var t = e.shift();
                if ("function" != typeof t) {
                    var n = t.func;
                    "number" == typeof n ? void 0 === t.arg ? pe(n)() : pe(n)(t.arg) : n(void 0 === t.arg ? null : t.arg)
                } else t(r)
            }
        }

        function de(e) {
            var r = Kr(),
                t = e();
            return $r(r), t
        }
        var me = [];

        function pe(e) {
            var r = me[e];
            return r || (e >= me.length && (me.length = e + 1), me[e] = r = G.get(e)), r
        }

        function ve(e, t, n) {
            return e.includes("j") ? function(e, t, n) {
                var o = r["dynCall_" + e];
                return n && n.length ? o.apply(null, [t].concat(n)) : o.call(null, t)
            }(e, t, n) : pe(t).apply(null, n)
        }

        function ge(e) {
            if (e instanceof Jr || "unwind" == e) return w;
            f(1, e)
        }

        function he() {
            var e = new Error;
            if (!e.stack) {
                try {
                    throw new Error
                } catch (r) {
                    e = r
                }
                if (!e.stack) return "(no stack trace available)"
            }
            return e.stack.toString()
        }

        function be(e) {
            return D[Xr() >> 2] = e, e
        }
        var ye = {
                splitPath: function(e) {
                    return /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1)
                },
                normalizeArray: function(e, r) {
                    for (var t = 0, n = e.length - 1; n >= 0; n--) {
                        var o = e[n];
                        "." === o ? e.splice(n, 1) : ".." === o ? (e.splice(n, 1), t++) : t && (e.splice(n, 1), t--)
                    }
                    if (r)
                        for (; t; t--) e.unshift("..");
                    return e
                },
                normalize: function(e) {
                    var r = "/" === e.charAt(0),
                        t = "/" === e.substr(-1);
                    return (e = ye.normalizeArray(e.split("/").filter((function(e) {
                        return !!e
                    })), !r).join("/")) || r || (e = "."), e && t && (e += "/"), (r ? "/" : "") + e
                },
                dirname: function(e) {
                    var r = ye.splitPath(e),
                        t = r[0],
                        n = r[1];
                    return t || n ? (n && (n = n.substr(0, n.length - 1)), t + n) : "."
                },
                basename: function(e) {
                    if ("/" === e) return "/";
                    var r = (e = (e = ye.normalize(e)).replace(/\/$/, "")).lastIndexOf("/");
                    return -1 === r ? e : e.substr(r + 1)
                },
                extname: function(e) {
                    return ye.splitPath(e)[3]
                },
                join: function() {
                    var e = Array.prototype.slice.call(arguments, 0);
                    return ye.normalize(e.join("/"))
                },
                join2: function(e, r) {
                    return ye.normalize(e + "/" + r)
                }
            },
            we = {
                resolve: function() {
                    for (var e = "", r = !1, t = arguments.length - 1; t >= -1 && !r; t--) {
                        var n = t >= 0 ? arguments[t] : Se.cwd();
                        if ("string" != typeof n) throw new TypeError("Arguments to path.resolve must be strings");
                        if (!n) return "";
                        e = n + "/" + e, r = "/" === n.charAt(0)
                    }
                    return (r ? "/" : "") + (e = ye.normalizeArray(e.split("/").filter((function(e) {
                        return !!e
                    })), !r).join("/")) || "."
                },
                relative: function(e, r) {
                    function t(e) {
                        for (var r = 0; r < e.length && "" === e[r]; r++);
                        for (var t = e.length - 1; t >= 0 && "" === e[t]; t--);
                        return r > t ? [] : e.slice(r, t - r + 1)
                    }
                    e = we.resolve(e).substr(1), r = we.resolve(r).substr(1);
                    for (var n = t(e.split("/")), o = t(r.split("/")), a = Math.min(n.length, o.length), i = a, u = 0; u < a; u++)
                        if (n[u] !== o[u]) {
                            i = u;
                            break
                        } var s = [];
                    for (u = i; u < n.length; u++) s.push("..");
                    return (s = s.concat(o.slice(i))).join("/")
                }
            },
            xe = {
                ttys: [],
                init: function() {},
                shutdown: function() {},
                register: function(e, r) {
                    xe.ttys[e] = {
                        input: [],
                        output: [],
                        ops: r
                    }, Se.registerDevice(e, xe.stream_ops)
                },
                stream_ops: {
                    open: function(e) {
                        var r = xe.ttys[e.node.rdev];
                        if (!r) throw new Se.ErrnoError(43);
                        e.tty = r, e.seekable = !1
                    },
                    close: function(e) {
                        e.tty.ops.flush(e.tty)
                    },
                    flush: function(e) {
                        e.tty.ops.flush(e.tty)
                    },
                    read: function(e, r, t, n, o) {
                        if (!e.tty || !e.tty.ops.get_char) throw new Se.ErrnoError(60);
                        for (var a = 0, i = 0; i < n; i++) {
                            var u;
                            try {
                                u = e.tty.ops.get_char(e.tty)
                            } catch (e) {
                                throw new Se.ErrnoError(29)
                            }
                            if (void 0 === u && 0 === a) throw new Se.ErrnoError(6);
                            if (null == u) break;
                            a++, r[t + i] = u
                        }
                        return a && (e.node.timestamp = Date.now()), a
                    },
                    write: function(e, r, t, n, o) {
                        if (!e.tty || !e.tty.ops.put_char) throw new Se.ErrnoError(60);
                        try {
                            for (var a = 0; a < n; a++) e.tty.ops.put_char(e.tty, r[t + a])
                        } catch (e) {
                            throw new Se.ErrnoError(29)
                        }
                        return n && (e.node.timestamp = Date.now()), a
                    }
                },
                default_tty_ops: {
                    get_char: function(e) {
                        if (!e.input.length) {
                            var r = null;
                            if ("undefined" != typeof window && "function" == typeof window.prompt ? null !== (r = window.prompt("Input: ")) && (r += "\n") : "function" == typeof readline && null !== (r = readline()) && (r += "\n"), !r) return null;
                            e.input = jr(r, !0)
                        }
                        return e.input.shift()
                    },
                    put_char: function(e, r) {
                        null === r || 10 === r ? (d(R(e.output, 0)), e.output = []) : 0 != r && e.output.push(r)
                    },
                    flush: function(e) {
                        e.output && e.output.length > 0 && (d(R(e.output, 0)), e.output = [])
                    }
                },
                default_tty1_ops: {
                    put_char: function(e, r) {
                        null === r || 10 === r ? (m(R(e.output, 0)), e.output = []) : 0 != r && e.output.push(r)
                    },
                    flush: function(e) {
                        e.output && e.output.length > 0 && (m(R(e.output, 0)), e.output = [])
                    }
                }
            };
        var Ee, ke = {
                ops_table: null,
                mount: function(e) {
                    return ke.createNode(null, "/", 16895, 0)
                },
                createNode: function(e, r, t, n) {
                    if (Se.isBlkdev(t) || Se.isFIFO(t)) throw new Se.ErrnoError(63);
                    ke.ops_table || (ke.ops_table = {
                        dir: {
                            node: {
                                getattr: ke.node_ops.getattr,
                                setattr: ke.node_ops.setattr,
                                lookup: ke.node_ops.lookup,
                                mknod: ke.node_ops.mknod,
                                rename: ke.node_ops.rename,
                                unlink: ke.node_ops.unlink,
                                rmdir: ke.node_ops.rmdir,
                                readdir: ke.node_ops.readdir,
                                symlink: ke.node_ops.symlink
                            },
                            stream: {
                                llseek: ke.stream_ops.llseek
                            }
                        },
                        file: {
                            node: {
                                getattr: ke.node_ops.getattr,
                                setattr: ke.node_ops.setattr
                            },
                            stream: {
                                llseek: ke.stream_ops.llseek,
                                read: ke.stream_ops.read,
                                write: ke.stream_ops.write,
                                allocate: ke.stream_ops.allocate,
                                mmap: ke.stream_ops.mmap,
                                msync: ke.stream_ops.msync
                            }
                        },
                        link: {
                            node: {
                                getattr: ke.node_ops.getattr,
                                setattr: ke.node_ops.setattr,
                                readlink: ke.node_ops.readlink
                            },
                            stream: {}
                        },
                        chrdev: {
                            node: {
                                getattr: ke.node_ops.getattr,
                                setattr: ke.node_ops.setattr
                            },
                            stream: Se.chrdev_stream_ops
                        }
                    });
                    var o = Se.createNode(e, r, t, n);
                    return Se.isDir(o.mode) ? (o.node_ops = ke.ops_table.dir.node, o.stream_ops = ke.ops_table.dir.stream, o.contents = {}) : Se.isFile(o.mode) ? (o.node_ops = ke.ops_table.file.node, o.stream_ops = ke.ops_table.file.stream, o.usedBytes = 0, o.contents = null) : Se.isLink(o.mode) ? (o.node_ops = ke.ops_table.link.node, o.stream_ops = ke.ops_table.link.stream) : Se.isChrdev(o.mode) && (o.node_ops = ke.ops_table.chrdev.node, o.stream_ops = ke.ops_table.chrdev.stream), o.timestamp = Date.now(), e && (e.contents[r] = o, e.timestamp = o.timestamp), o
                },
                getFileDataAsTypedArray: function(e) {
                    return e.contents ? e.contents.subarray ? e.contents.subarray(0, e.usedBytes) : new Uint8Array(e.contents) : new Uint8Array(0)
                },
                expandFileStorage: function(e, r) {
                    var t = e.contents ? e.contents.length : 0;
                    if (!(t >= r)) {
                        r = Math.max(r, t * (t < 1048576 ? 2 : 1.125) >>> 0), 0 != t && (r = Math.max(r, 256));
                        var n = e.contents;
                        e.contents = new Uint8Array(r), e.usedBytes > 0 && e.contents.set(n.subarray(0, e.usedBytes), 0)
                    }
                },
                resizeFileStorage: function(e, r) {
                    if (e.usedBytes != r)
                        if (0 == r) e.contents = null, e.usedBytes = 0;
                        else {
                            var t = e.contents;
                            e.contents = new Uint8Array(r), t && e.contents.set(t.subarray(0, Math.min(r, e.usedBytes))), e.usedBytes = r
                        }
                },
                node_ops: {
                    getattr: function(e) {
                        var r = {};
                        return r.dev = Se.isChrdev(e.mode) ? e.id : 1, r.ino = e.id, r.mode = e.mode, r.nlink = 1, r.uid = 0, r.gid = 0, r.rdev = e.rdev, Se.isDir(e.mode) ? r.size = 4096 : Se.isFile(e.mode) ? r.size = e.usedBytes : Se.isLink(e.mode) ? r.size = e.link.length : r.size = 0, r.atime = new Date(e.timestamp), r.mtime = new Date(e.timestamp), r.ctime = new Date(e.timestamp), r.blksize = 4096, r.blocks = Math.ceil(r.size / r.blksize), r
                    },
                    setattr: function(e, r) {
                        void 0 !== r.mode && (e.mode = r.mode), void 0 !== r.timestamp && (e.timestamp = r.timestamp), void 0 !== r.size && ke.resizeFileStorage(e, r.size)
                    },
                    lookup: function(e, r) {
                        throw Se.genericErrors[44]
                    },
                    mknod: function(e, r, t, n) {
                        return ke.createNode(e, r, t, n)
                    },
                    rename: function(e, r, t) {
                        if (Se.isDir(e.mode)) {
                            var n;
                            try {
                                n = Se.lookupNode(r, t)
                            } catch (e) {}
                            if (n)
                                for (var o in n.contents) throw new Se.ErrnoError(55)
                        }
                        delete e.parent.contents[e.name], e.parent.timestamp = Date.now(), e.name = t, r.contents[t] = e, r.timestamp = e.parent.timestamp, e.parent = r
                    },
                    unlink: function(e, r) {
                        delete e.contents[r], e.timestamp = Date.now()
                    },
                    rmdir: function(e, r) {
                        var t = Se.lookupNode(e, r);
                        for (var n in t.contents) throw new Se.ErrnoError(55);
                        delete e.contents[r], e.timestamp = Date.now()
                    },
                    readdir: function(e) {
                        var r = [".", ".."];
                        for (var t in e.contents) e.contents.hasOwnProperty(t) && r.push(t);
                        return r
                    },
                    symlink: function(e, r, t) {
                        var n = ke.createNode(e, r, 41471, 0);
                        return n.link = t, n
                    },
                    readlink: function(e) {
                        if (!Se.isLink(e.mode)) throw new Se.ErrnoError(28);
                        return e.link
                    }
                },
                stream_ops: {
                    read: function(e, r, t, n, o) {
                        var a = e.node.contents;
                        if (o >= e.node.usedBytes) return 0;
                        var i = Math.min(e.node.usedBytes - o, n);
                        if (i > 8 && a.subarray) r.set(a.subarray(o, o + i), t);
                        else
                            for (var u = 0; u < i; u++) r[t + u] = a[o + u];
                        return i
                    },
                    write: function(e, r, t, n, o, a) {
                        if (r.buffer === A.buffer && (a = !1), !n) return 0;
                        var i = e.node;
                        if (i.timestamp = Date.now(), r.subarray && (!i.contents || i.contents.subarray)) {
                            if (a) return i.contents = r.subarray(t, t + n), i.usedBytes = n, n;
                            if (0 === i.usedBytes && 0 === o) return i.contents = r.slice(t, t + n), i.usedBytes = n, n;
                            if (o + n <= i.usedBytes) return i.contents.set(r.subarray(t, t + n), o), n
                        }
                        if (ke.expandFileStorage(i, o + n), i.contents.subarray && r.subarray) i.contents.set(r.subarray(t, t + n), o);
                        else
                            for (var u = 0; u < n; u++) i.contents[o + u] = r[t + u];
                        return i.usedBytes = Math.max(i.usedBytes, o + n), n
                    },
                    llseek: function(e, r, t) {
                        var n = r;
                        if (1 === t ? n += e.position : 2 === t && Se.isFile(e.node.mode) && (n += e.node.usedBytes), n < 0) throw new Se.ErrnoError(28);
                        return n
                    },
                    allocate: function(e, r, t) {
                        ke.expandFileStorage(e.node, r + t), e.node.usedBytes = Math.max(e.node.usedBytes, r + t)
                    },
                    mmap: function(e, r, t, n, o, a) {
                        if (0 !== r) throw new Se.ErrnoError(28);
                        if (!Se.isFile(e.node.mode)) throw new Se.ErrnoError(43);
                        var i, u, s = e.node.contents;
                        if (2 & a || s.buffer !== S) {
                            if ((n > 0 || n + t < s.length) && (s = s.subarray ? s.subarray(n, n + t) : Array.prototype.slice.call(s, n, n + t)), u = !0, !(i = function(e) {
                                    e = function(e, r) {
                                        return 65536 * Math.ceil(e / 65536)
                                    }(e);
                                    var r = Wr(65536, e);
                                    return r ? (function(e, r) {
                                        L.fill(0, e, e + r)
                                    }(r, e), r) : 0
                                }(t))) throw new Se.ErrnoError(48);
                            A.set(s, i)
                        } else u = !1, i = s.byteOffset;
                        return {
                            ptr: i,
                            allocated: u
                        }
                    },
                    msync: function(e, r, t, n, o) {
                        if (!Se.isFile(e.node.mode)) throw new Se.ErrnoError(43);
                        return 2 & o || ke.stream_ops.write(e, r, 0, n, t, !1), 0
                    }
                }
            },
            Ce = {
                dbs: {},
                indexedDB: () => {
                    if ("undefined" != typeof indexedDB) return indexedDB;
                    var e = null;
                    return "object" == typeof window && (e = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB), E(e, "IDBFS used, but indexedDB not supported"), e
                },
                DB_VERSION: 21,
                DB_STORE_NAME: "FILE_DATA",
                mount: function(e) {
                    return ke.mount.apply(null, arguments)
                },
                syncfs: (e, r, t) => {
                    Ce.getLocalSet(e, ((n, o) => {
                        if (n) return t(n);
                        Ce.getRemoteSet(e, ((e, n) => {
                            if (e) return t(e);
                            var a = r ? n : o,
                                i = r ? o : n;
                            Ce.reconcile(a, i, t)
                        }))
                    }))
                },
                getDB: (e, r) => {
                    var t, n = Ce.dbs[e];
                    if (n) return r(null, n);
                    try {
                        t = Ce.indexedDB().open(e, Ce.DB_VERSION)
                    } catch (e) {
                        return r(e)
                    }
                    if (!t) return r("Unable to connect to IndexedDB");
                    t.onupgradeneeded = e => {
                        var r, t = e.target.result,
                            n = e.target.transaction;
                        (r = t.objectStoreNames.contains(Ce.DB_STORE_NAME) ? n.objectStore(Ce.DB_STORE_NAME) : t.createObjectStore(Ce.DB_STORE_NAME)).indexNames.contains("timestamp") || r.createIndex("timestamp", "timestamp", {
                            unique: !1
                        })
                    }, t.onsuccess = () => {
                        n = t.result, Ce.dbs[e] = n, r(null, n)
                    }, t.onerror = e => {
                        r(this.error), e.preventDefault()
                    }
                },
                getLocalSet: (e, r) => {
                    var t = {};

                    function n(e) {
                        return "." !== e && ".." !== e
                    }

                    function o(e) {
                        return r => ye.join2(e, r)
                    }
                    for (var a = Se.readdir(e.mountpoint).filter(n).map(o(e.mountpoint)); a.length;) {
                        var i, u = a.pop();
                        try {
                            i = Se.stat(u)
                        } catch (e) {
                            return r(e)
                        }
                        Se.isDir(i.mode) && a.push.apply(a, Se.readdir(u).filter(n).map(o(u))), t[u] = {
                            timestamp: i.mtime
                        }
                    }
                    return r(null, {
                        type: "local",
                        entries: t
                    })
                },
                getRemoteSet: (e, r) => {
                    var t = {};
                    Ce.getDB(e.mountpoint, ((e, n) => {
                        if (e) return r(e);
                        try {
                            var o = n.transaction([Ce.DB_STORE_NAME], "readonly");
                            o.onerror = e => {
                                r(this.error), e.preventDefault()
                            }, o.objectStore(Ce.DB_STORE_NAME).index("timestamp").openKeyCursor().onsuccess = e => {
                                var o = e.target.result;
                                if (!o) return r(null, {
                                    type: "remote",
                                    db: n,
                                    entries: t
                                });
                                t[o.primaryKey] = {
                                    timestamp: o.key
                                }, o.continue()
                            }
                        } catch (e) {
                            return r(e)
                        }
                    }))
                },
                loadLocalEntry: (e, r) => {
                    var t, n;
                    try {
                        n = Se.lookupPath(e).node, t = Se.stat(e)
                    } catch (e) {
                        return r(e)
                    }
                    return Se.isDir(t.mode) ? r(null, {
                        timestamp: t.mtime,
                        mode: t.mode
                    }) : Se.isFile(t.mode) ? (n.contents = ke.getFileDataAsTypedArray(n), r(null, {
                        timestamp: t.mtime,
                        mode: t.mode,
                        contents: n.contents
                    })) : r(new Error("node type not supported"))
                },
                storeLocalEntry: (e, r, t) => {
                    try {
                        if (Se.isDir(r.mode)) Se.mkdirTree(e, r.mode);
                        else {
                            if (!Se.isFile(r.mode)) return t(new Error("node type not supported"));
                            Se.writeFile(e, r.contents, {
                                canOwn: !0
                            })
                        }
                        Se.chmod(e, r.mode), Se.utime(e, r.timestamp, r.timestamp)
                    } catch (e) {
                        return t(e)
                    }
                    t(null)
                },
                removeLocalEntry: (e, r) => {
                    try {
                        Se.lookupPath(e);
                        var t = Se.stat(e);
                        Se.isDir(t.mode) ? Se.rmdir(e) : Se.isFile(t.mode) && Se.unlink(e)
                    } catch (e) {
                        return r(e)
                    }
                    r(null)
                },
                loadRemoteEntry: (e, r, t) => {
                    var n = e.get(r);
                    n.onsuccess = e => {
                        t(null, e.target.result)
                    }, n.onerror = e => {
                        t(this.error), e.preventDefault()
                    }
                },
                storeRemoteEntry: (e, r, t, n) => {
                    try {
                        var o = e.put(t, r)
                    } catch (e) {
                        return void n(e)
                    }
                    o.onsuccess = () => {
                        n(null)
                    }, o.onerror = e => {
                        n(this.error), e.preventDefault()
                    }
                },
                removeRemoteEntry: (e, r, t) => {
                    var n = e.delete(r);
                    n.onsuccess = () => {
                        t(null)
                    }, n.onerror = e => {
                        t(this.error), e.preventDefault()
                    }
                },
                reconcile: (e, r, t) => {
                    var n = 0,
                        o = [];
                    Object.keys(e.entries).forEach((function(t) {
                        var a = e.entries[t],
                            i = r.entries[t];
                        i && a.timestamp.getTime() == i.timestamp.getTime() || (o.push(t), n++)
                    }));
                    var a = [];
                    if (Object.keys(r.entries).forEach((function(r) {
                            e.entries[r] || (a.push(r), n++)
                        })), !n) return t(null);
                    var i = !1,
                        u = ("remote" === e.type ? e.db : r.db).transaction([Ce.DB_STORE_NAME], "readwrite"),
                        s = u.objectStore(Ce.DB_STORE_NAME);

                    function c(e) {
                        if (e && !i) return i = !0, t(e)
                    }
                    u.onerror = e => {
                        c(this.error), e.preventDefault()
                    }, u.oncomplete = e => {
                        i || t(null)
                    }, o.sort().forEach((e => {
                        "local" === r.type ? Ce.loadRemoteEntry(s, e, ((r, t) => {
                            if (r) return c(r);
                            Ce.storeLocalEntry(e, t, c)
                        })) : Ce.loadLocalEntry(e, ((r, t) => {
                            if (r) return c(r);
                            Ce.storeRemoteEntry(s, e, t, c)
                        }))
                    })), a.sort().reverse().forEach((e => {
                        "local" === r.type ? Ce.removeLocalEntry(e, c) : Ce.removeRemoteEntry(s, e, c)
                    }))
                }
            },
            Se = {
                root: null,
                mounts: [],
                devices: {},
                streams: [],
                nextInode: 1,
                nameTable: null,
                currentPath: "/",
                initialized: !1,
                ignorePermissions: !0,
                ErrnoError: null,
                genericErrors: {},
                filesystems: null,
                syncFSRequests: 0,
                lookupPath: (e, r = {}) => {
                    if (!(e = we.resolve(Se.cwd(), e))) return {
                        path: "",
                        node: null
                    };
                    var t = {
                        follow_mount: !0,
                        recurse_count: 0
                    };
                    for (var n in t) void 0 === r[n] && (r[n] = t[n]);
                    if (r.recurse_count > 8) throw new Se.ErrnoError(32);
                    for (var o = ye.normalizeArray(e.split("/").filter((e => !!e)), !1), a = Se.root, i = "/", u = 0; u < o.length; u++) {
                        var s = u === o.length - 1;
                        if (s && r.parent) break;
                        if (a = Se.lookupNode(a, o[u]), i = ye.join2(i, o[u]), Se.isMountpoint(a) && (!s || s && r.follow_mount) && (a = a.mounted.root), !s || r.follow)
                            for (var c = 0; Se.isLink(a.mode);) {
                                var f = Se.readlink(i);
                                if (i = we.resolve(ye.dirname(i), f), a = Se.lookupPath(i, {
                                        recurse_count: r.recurse_count
                                    }).node, c++ > 40) throw new Se.ErrnoError(32)
                            }
                    }
                    return {
                        path: i,
                        node: a
                    }
                },
                getPath: e => {
                    for (var r;;) {
                        if (Se.isRoot(e)) {
                            var t = e.mount.mountpoint;
                            return r ? "/" !== t[t.length - 1] ? t + "/" + r : t + r : t
                        }
                        r = r ? e.name + "/" + r : e.name, e = e.parent
                    }
                },
                hashName: (e, r) => {
                    for (var t = 0, n = 0; n < r.length; n++) t = (t << 5) - t + r.charCodeAt(n) | 0;
                    return (e + t >>> 0) % Se.nameTable.length
                },
                hashAddNode: e => {
                    var r = Se.hashName(e.parent.id, e.name);
                    e.name_next = Se.nameTable[r], Se.nameTable[r] = e
                },
                hashRemoveNode: e => {
                    var r = Se.hashName(e.parent.id, e.name);
                    if (Se.nameTable[r] === e) Se.nameTable[r] = e.name_next;
                    else
                        for (var t = Se.nameTable[r]; t;) {
                            if (t.name_next === e) {
                                t.name_next = e.name_next;
                                break
                            }
                            t = t.name_next
                        }
                },
                lookupNode: (e, r) => {
                    var t = Se.mayLookup(e);
                    if (t) throw new Se.ErrnoError(t, e);
                    for (var n = Se.hashName(e.id, r), o = Se.nameTable[n]; o; o = o.name_next) {
                        var a = o.name;
                        if (o.parent.id === e.id && a === r) return o
                    }
                    return Se.lookup(e, r)
                },
                createNode: (e, r, t, n) => {
                    var o = new Se.FSNode(e, r, t, n);
                    return Se.hashAddNode(o), o
                },
                destroyNode: e => {
                    Se.hashRemoveNode(e)
                },
                isRoot: e => e === e.parent,
                isMountpoint: e => !!e.mounted,
                isFile: e => 32768 == (61440 & e),
                isDir: e => 16384 == (61440 & e),
                isLink: e => 40960 == (61440 & e),
                isChrdev: e => 8192 == (61440 & e),
                isBlkdev: e => 24576 == (61440 & e),
                isFIFO: e => 4096 == (61440 & e),
                isSocket: e => 49152 == (49152 & e),
                flagModes: {
                    r: 0,
                    "r+": 2,
                    w: 577,
                    "w+": 578,
                    a: 1089,
                    "a+": 1090
                },
                modeStringToFlags: e => {
                    var r = Se.flagModes[e];
                    if (void 0 === r) throw new Error("Unknown file open mode: " + e);
                    return r
                },
                flagsToPermissionString: e => {
                    var r = ["r", "w", "rw"][3 & e];
                    return 512 & e && (r += "w"), r
                },
                nodePermissions: (e, r) => Se.ignorePermissions || (!r.includes("r") || 292 & e.mode) && (!r.includes("w") || 146 & e.mode) && (!r.includes("x") || 73 & e.mode) ? 0 : 2,
                mayLookup: e => Se.nodePermissions(e, "x") || (e.node_ops.lookup ? 0 : 2),
                mayCreate: (e, r) => {
                    try {
                        return Se.lookupNode(e, r), 20
                    } catch (e) {}
                    return Se.nodePermissions(e, "wx")
                },
                mayDelete: (e, r, t) => {
                    var n;
                    try {
                        n = Se.lookupNode(e, r)
                    } catch (e) {
                        return e.errno
                    }
                    var o = Se.nodePermissions(e, "wx");
                    if (o) return o;
                    if (t) {
                        if (!Se.isDir(n.mode)) return 54;
                        if (Se.isRoot(n) || Se.getPath(n) === Se.cwd()) return 10
                    } else if (Se.isDir(n.mode)) return 31;
                    return 0
                },
                mayOpen: (e, r) => e ? Se.isLink(e.mode) ? 32 : Se.isDir(e.mode) && ("r" !== Se.flagsToPermissionString(r) || 512 & r) ? 31 : Se.nodePermissions(e, Se.flagsToPermissionString(r)) : 44,
                MAX_OPEN_FDS: 4096,
                nextfd: (e = 0, r = Se.MAX_OPEN_FDS) => {
                    for (var t = e; t <= r; t++)
                        if (!Se.streams[t]) return t;
                    throw new Se.ErrnoError(33)
                },
                getStream: e => Se.streams[e],
                createStream: (e, r, t) => {
                    Se.FSStream || (Se.FSStream = function() {}, Se.FSStream.prototype = {
                        object: {
                            get: function() {
                                return this.node
                            },
                            set: function(e) {
                                this.node = e
                            }
                        },
                        isRead: {
                            get: function() {
                                return 1 != (2097155 & this.flags)
                            }
                        },
                        isWrite: {
                            get: function() {
                                return 0 != (2097155 & this.flags)
                            }
                        },
                        isAppend: {
                            get: function() {
                                return 1024 & this.flags
                            }
                        }
                    }), e = Object.assign(new Se.FSStream, e);
                    var n = Se.nextfd(r, t);
                    return e.fd = n, Se.streams[n] = e, e
                },
                closeStream: e => {
                    Se.streams[e] = null
                },
                chrdev_stream_ops: {
                    open: e => {
                        var r = Se.getDevice(e.node.rdev);
                        e.stream_ops = r.stream_ops, e.stream_ops.open && e.stream_ops.open(e)
                    },
                    llseek: () => {
                        throw new Se.ErrnoError(70)
                    }
                },
                major: e => e >> 8,
                minor: e => 255 & e,
                makedev: (e, r) => e << 8 | r,
                registerDevice: (e, r) => {
                    Se.devices[e] = {
                        stream_ops: r
                    }
                },
                getDevice: e => Se.devices[e],
                getMounts: e => {
                    for (var r = [], t = [e]; t.length;) {
                        var n = t.pop();
                        r.push(n), t.push.apply(t, n.mounts)
                    }
                    return r
                },
                syncfs: (e, r) => {
                    "function" == typeof e && (r = e, e = !1), Se.syncFSRequests++, Se.syncFSRequests > 1 && m("warning: " + Se.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
                    var t = Se.getMounts(Se.root.mount),
                        n = 0;

                    function o(e) {
                        return Se.syncFSRequests--, r(e)
                    }

                    function a(e) {
                        if (e) return a.errored ? void 0 : (a.errored = !0, o(e));
                        ++n >= t.length && o(null)
                    }
                    t.forEach((r => {
                        if (!r.type.syncfs) return a(null);
                        r.type.syncfs(r, e, a)
                    }))
                },
                mount: (e, r, t) => {
                    var n, o = "/" === t,
                        a = !t;
                    if (o && Se.root) throw new Se.ErrnoError(10);
                    if (!o && !a) {
                        var i = Se.lookupPath(t, {
                            follow_mount: !1
                        });
                        if (t = i.path, n = i.node, Se.isMountpoint(n)) throw new Se.ErrnoError(10);
                        if (!Se.isDir(n.mode)) throw new Se.ErrnoError(54)
                    }
                    var u = {
                            type: e,
                            opts: r,
                            mountpoint: t,
                            mounts: []
                        },
                        s = e.mount(u);
                    return s.mount = u, u.root = s, o ? Se.root = s : n && (n.mounted = u, n.mount && n.mount.mounts.push(u)), s
                },
                unmount: e => {
                    var r = Se.lookupPath(e, {
                        follow_mount: !1
                    });
                    if (!Se.isMountpoint(r.node)) throw new Se.ErrnoError(28);
                    var t = r.node,
                        n = t.mounted,
                        o = Se.getMounts(n);
                    Object.keys(Se.nameTable).forEach((e => {
                        for (var r = Se.nameTable[e]; r;) {
                            var t = r.name_next;
                            o.includes(r.mount) && Se.destroyNode(r), r = t
                        }
                    })), t.mounted = null;
                    var a = t.mount.mounts.indexOf(n);
                    t.mount.mounts.splice(a, 1)
                },
                lookup: (e, r) => e.node_ops.lookup(e, r),
                mknod: (e, r, t) => {
                    var n = Se.lookupPath(e, {
                            parent: !0
                        }).node,
                        o = ye.basename(e);
                    if (!o || "." === o || ".." === o) throw new Se.ErrnoError(28);
                    var a = Se.mayCreate(n, o);
                    if (a) throw new Se.ErrnoError(a);
                    if (!n.node_ops.mknod) throw new Se.ErrnoError(63);
                    return n.node_ops.mknod(n, o, r, t)
                },
                create: (e, r) => (r = void 0 !== r ? r : 438, r &= 4095, r |= 32768, Se.mknod(e, r, 0)),
                mkdir: (e, r) => (r = void 0 !== r ? r : 511, r &= 1023, r |= 16384, Se.mknod(e, r, 0)),
                mkdirTree: (e, r) => {
                    for (var t = e.split("/"), n = "", o = 0; o < t.length; ++o)
                        if (t[o]) {
                            n += "/" + t[o];
                            try {
                                Se.mkdir(n, r)
                            } catch (e) {
                                if (20 != e.errno) throw e
                            }
                        }
                },
                mkdev: (e, r, t) => (void 0 === t && (t = r, r = 438), r |= 8192, Se.mknod(e, r, t)),
                symlink: (e, r) => {
                    if (!we.resolve(e)) throw new Se.ErrnoError(44);
                    var t = Se.lookupPath(r, {
                        parent: !0
                    }).node;
                    if (!t) throw new Se.ErrnoError(44);
                    var n = ye.basename(r),
                        o = Se.mayCreate(t, n);
                    if (o) throw new Se.ErrnoError(o);
                    if (!t.node_ops.symlink) throw new Se.ErrnoError(63);
                    return t.node_ops.symlink(t, n, e)
                },
                rename: (e, r) => {
                    var t, n, o = ye.dirname(e),
                        a = ye.dirname(r),
                        i = ye.basename(e),
                        u = ye.basename(r);
                    if (t = Se.lookupPath(e, {
                            parent: !0
                        }).node, n = Se.lookupPath(r, {
                            parent: !0
                        }).node, !t || !n) throw new Se.ErrnoError(44);
                    if (t.mount !== n.mount) throw new Se.ErrnoError(75);
                    var s, c = Se.lookupNode(t, i),
                        f = we.relative(e, a);
                    if ("." !== f.charAt(0)) throw new Se.ErrnoError(28);
                    if ("." !== (f = we.relative(r, o)).charAt(0)) throw new Se.ErrnoError(55);
                    try {
                        s = Se.lookupNode(n, u)
                    } catch (e) {}
                    if (c !== s) {
                        var l = Se.isDir(c.mode),
                            d = Se.mayDelete(t, i, l);
                        if (d) throw new Se.ErrnoError(d);
                        if (d = s ? Se.mayDelete(n, u, l) : Se.mayCreate(n, u)) throw new Se.ErrnoError(d);
                        if (!t.node_ops.rename) throw new Se.ErrnoError(63);
                        if (Se.isMountpoint(c) || s && Se.isMountpoint(s)) throw new Se.ErrnoError(10);
                        if (n !== t && (d = Se.nodePermissions(t, "w"))) throw new Se.ErrnoError(d);
                        Se.hashRemoveNode(c);
                        try {
                            t.node_ops.rename(c, n, u)
                        } catch (e) {
                            throw e
                        } finally {
                            Se.hashAddNode(c)
                        }
                    }
                },
                rmdir: e => {
                    var r = Se.lookupPath(e, {
                            parent: !0
                        }).node,
                        t = ye.basename(e),
                        n = Se.lookupNode(r, t),
                        o = Se.mayDelete(r, t, !0);
                    if (o) throw new Se.ErrnoError(o);
                    if (!r.node_ops.rmdir) throw new Se.ErrnoError(63);
                    if (Se.isMountpoint(n)) throw new Se.ErrnoError(10);
                    r.node_ops.rmdir(r, t), Se.destroyNode(n)
                },
                readdir: e => {
                    var r = Se.lookupPath(e, {
                        follow: !0
                    }).node;
                    if (!r.node_ops.readdir) throw new Se.ErrnoError(54);
                    return r.node_ops.readdir(r)
                },
                unlink: e => {
                    var r = Se.lookupPath(e, {
                        parent: !0
                    }).node;
                    if (!r) throw new Se.ErrnoError(44);
                    var t = ye.basename(e),
                        n = Se.lookupNode(r, t),
                        o = Se.mayDelete(r, t, !1);
                    if (o) throw new Se.ErrnoError(o);
                    if (!r.node_ops.unlink) throw new Se.ErrnoError(63);
                    if (Se.isMountpoint(n)) throw new Se.ErrnoError(10);
                    r.node_ops.unlink(r, t), Se.destroyNode(n)
                },
                readlink: e => {
                    var r = Se.lookupPath(e).node;
                    if (!r) throw new Se.ErrnoError(44);
                    if (!r.node_ops.readlink) throw new Se.ErrnoError(28);
                    return we.resolve(Se.getPath(r.parent), r.node_ops.readlink(r))
                },
                stat: (e, r) => {
                    var t = Se.lookupPath(e, {
                        follow: !r
                    }).node;
                    if (!t) throw new Se.ErrnoError(44);
                    if (!t.node_ops.getattr) throw new Se.ErrnoError(63);
                    return t.node_ops.getattr(t)
                },
                lstat: e => Se.stat(e, !0),
                chmod: (e, r, t) => {
                    var n;
                    if (!(n = "string" == typeof e ? Se.lookupPath(e, {
                            follow: !t
                        }).node : e).node_ops.setattr) throw new Se.ErrnoError(63);
                    n.node_ops.setattr(n, {
                        mode: 4095 & r | -4096 & n.mode,
                        timestamp: Date.now()
                    })
                },
                lchmod: (e, r) => {
                    Se.chmod(e, r, !0)
                },
                fchmod: (e, r) => {
                    var t = Se.getStream(e);
                    if (!t) throw new Se.ErrnoError(8);
                    Se.chmod(t.node, r)
                },
                chown: (e, r, t, n) => {
                    var o;
                    if (!(o = "string" == typeof e ? Se.lookupPath(e, {
                            follow: !n
                        }).node : e).node_ops.setattr) throw new Se.ErrnoError(63);
                    o.node_ops.setattr(o, {
                        timestamp: Date.now()
                    })
                },
                lchown: (e, r, t) => {
                    Se.chown(e, r, t, !0)
                },
                fchown: (e, r, t) => {
                    var n = Se.getStream(e);
                    if (!n) throw new Se.ErrnoError(8);
                    Se.chown(n.node, r, t)
                },
                truncate: (e, r) => {
                    if (r < 0) throw new Se.ErrnoError(28);
                    var t;
                    if (!(t = "string" == typeof e ? Se.lookupPath(e, {
                            follow: !0
                        }).node : e).node_ops.setattr) throw new Se.ErrnoError(63);
                    if (Se.isDir(t.mode)) throw new Se.ErrnoError(31);
                    if (!Se.isFile(t.mode)) throw new Se.ErrnoError(28);
                    var n = Se.nodePermissions(t, "w");
                    if (n) throw new Se.ErrnoError(n);
                    t.node_ops.setattr(t, {
                        size: r,
                        timestamp: Date.now()
                    })
                },
                ftruncate: (e, r) => {
                    var t = Se.getStream(e);
                    if (!t) throw new Se.ErrnoError(8);
                    if (0 == (2097155 & t.flags)) throw new Se.ErrnoError(28);
                    Se.truncate(t.node, r)
                },
                utime: (e, r, t) => {
                    var n = Se.lookupPath(e, {
                        follow: !0
                    }).node;
                    n.node_ops.setattr(n, {
                        timestamp: Math.max(r, t)
                    })
                },
                open: (e, t, n, o, a) => {
                    if ("" === e) throw new Se.ErrnoError(44);
                    var i;
                    if (n = void 0 === n ? 438 : n, n = 64 & (t = "string" == typeof t ? Se.modeStringToFlags(t) : t) ? 4095 & n | 32768 : 0, "object" == typeof e) i = e;
                    else {
                        e = ye.normalize(e);
                        try {
                            i = Se.lookupPath(e, {
                                follow: !(131072 & t)
                            }).node
                        } catch (e) {}
                    }
                    var u = !1;
                    if (64 & t)
                        if (i) {
                            if (128 & t) throw new Se.ErrnoError(20)
                        } else i = Se.mknod(e, n, 0), u = !0;
                    if (!i) throw new Se.ErrnoError(44);
                    if (Se.isChrdev(i.mode) && (t &= -513), 65536 & t && !Se.isDir(i.mode)) throw new Se.ErrnoError(54);
                    if (!u) {
                        var s = Se.mayOpen(i, t);
                        if (s) throw new Se.ErrnoError(s)
                    }
                    512 & t && Se.truncate(i, 0), t &= -131713;
                    var c = Se.createStream({
                        node: i,
                        path: Se.getPath(i),
                        flags: t,
                        seekable: !0,
                        position: 0,
                        stream_ops: i.stream_ops,
                        ungotten: [],
                        error: !1
                    }, o, a);
                    return c.stream_ops.open && c.stream_ops.open(c), !r.logReadFiles || 1 & t || (Se.readFiles || (Se.readFiles = {}), e in Se.readFiles || (Se.readFiles[e] = 1)), c
                },
                close: e => {
                    if (Se.isClosed(e)) throw new Se.ErrnoError(8);
                    e.getdents && (e.getdents = null);
                    try {
                        e.stream_ops.close && e.stream_ops.close(e)
                    } catch (e) {
                        throw e
                    } finally {
                        Se.closeStream(e.fd)
                    }
                    e.fd = null
                },
                isClosed: e => null === e.fd,
                llseek: (e, r, t) => {
                    if (Se.isClosed(e)) throw new Se.ErrnoError(8);
                    if (!e.seekable || !e.stream_ops.llseek) throw new Se.ErrnoError(70);
                    if (0 != t && 1 != t && 2 != t) throw new Se.ErrnoError(28);
                    return e.position = e.stream_ops.llseek(e, r, t), e.ungotten = [], e.position
                },
                read: (e, r, t, n, o) => {
                    if (n < 0 || o < 0) throw new Se.ErrnoError(28);
                    if (Se.isClosed(e)) throw new Se.ErrnoError(8);
                    if (1 == (2097155 & e.flags)) throw new Se.ErrnoError(8);
                    if (Se.isDir(e.node.mode)) throw new Se.ErrnoError(31);
                    if (!e.stream_ops.read) throw new Se.ErrnoError(28);
                    var a = void 0 !== o;
                    if (a) {
                        if (!e.seekable) throw new Se.ErrnoError(70)
                    } else o = e.position;
                    var i = e.stream_ops.read(e, r, t, n, o);
                    return a || (e.position += i), i
                },
                write: (e, r, t, n, o, a) => {
                    if (n < 0 || o < 0) throw new Se.ErrnoError(28);
                    if (Se.isClosed(e)) throw new Se.ErrnoError(8);
                    if (0 == (2097155 & e.flags)) throw new Se.ErrnoError(8);
                    if (Se.isDir(e.node.mode)) throw new Se.ErrnoError(31);
                    if (!e.stream_ops.write) throw new Se.ErrnoError(28);
                    e.seekable && 1024 & e.flags && Se.llseek(e, 0, 2);
                    var i = void 0 !== o;
                    if (i) {
                        if (!e.seekable) throw new Se.ErrnoError(70)
                    } else o = e.position;
                    var u = e.stream_ops.write(e, r, t, n, o, a);
                    return i || (e.position += u), u
                },
                allocate: (e, r, t) => {
                    if (Se.isClosed(e)) throw new Se.ErrnoError(8);
                    if (r < 0 || t <= 0) throw new Se.ErrnoError(28);
                    if (0 == (2097155 & e.flags)) throw new Se.ErrnoError(8);
                    if (!Se.isFile(e.node.mode) && !Se.isDir(e.node.mode)) throw new Se.ErrnoError(43);
                    if (!e.stream_ops.allocate) throw new Se.ErrnoError(138);
                    e.stream_ops.allocate(e, r, t)
                },
                mmap: (e, r, t, n, o, a) => {
                    if (0 != (2 & o) && 0 == (2 & a) && 2 != (2097155 & e.flags)) throw new Se.ErrnoError(2);
                    if (1 == (2097155 & e.flags)) throw new Se.ErrnoError(2);
                    if (!e.stream_ops.mmap) throw new Se.ErrnoError(43);
                    return e.stream_ops.mmap(e, r, t, n, o, a)
                },
                msync: (e, r, t, n, o) => e && e.stream_ops.msync ? e.stream_ops.msync(e, r, t, n, o) : 0,
                munmap: e => 0,
                ioctl: (e, r, t) => {
                    if (!e.stream_ops.ioctl) throw new Se.ErrnoError(59);
                    return e.stream_ops.ioctl(e, r, t)
                },
                readFile: (e, r = {}) => {
                    if (r.flags = r.flags || 0, r.encoding = r.encoding || "binary", "utf8" !== r.encoding && "binary" !== r.encoding) throw new Error('Invalid encoding type "' + r.encoding + '"');
                    var t, n = Se.open(e, r.flags),
                        o = Se.stat(e).size,
                        a = new Uint8Array(o);
                    return Se.read(n, a, 0, o, 0), "utf8" === r.encoding ? t = R(a, 0) : "binary" === r.encoding && (t = a), Se.close(n), t
                },
                writeFile: (e, r, t = {}) => {
                    t.flags = t.flags || 577;
                    var n = Se.open(e, t.flags, t.mode);
                    if ("string" == typeof r) {
                        var o = new Uint8Array(U(r) + 1),
                            a = N(r, o, 0, o.length);
                        Se.write(n, o, 0, a, void 0, t.canOwn)
                    } else {
                        if (!ArrayBuffer.isView(r)) throw new Error("Unsupported data type");
                        Se.write(n, r, 0, r.byteLength, void 0, t.canOwn)
                    }
                    Se.close(n)
                },
                cwd: () => Se.currentPath,
                chdir: e => {
                    var r = Se.lookupPath(e, {
                        follow: !0
                    });
                    if (null === r.node) throw new Se.ErrnoError(44);
                    if (!Se.isDir(r.node.mode)) throw new Se.ErrnoError(54);
                    var t = Se.nodePermissions(r.node, "x");
                    if (t) throw new Se.ErrnoError(t);
                    Se.currentPath = r.path
                },
                createDefaultDirectories: () => {
                    Se.mkdir("/tmp"), Se.mkdir("/home"), Se.mkdir("/home/web_user")
                },
                createDefaultDevices: () => {
                    Se.mkdir("/dev"), Se.registerDevice(Se.makedev(1, 3), {
                        read: () => 0,
                        write: (e, r, t, n, o) => n
                    }), Se.mkdev("/dev/null", Se.makedev(1, 3)), xe.register(Se.makedev(5, 0), xe.default_tty_ops), xe.register(Se.makedev(6, 0), xe.default_tty1_ops), Se.mkdev("/dev/tty", Se.makedev(5, 0)), Se.mkdev("/dev/tty1", Se.makedev(6, 0));
                    var e = function() {
                        if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues) {
                            var e = new Uint8Array(1);
                            return function() {
                                return crypto.getRandomValues(e), e[0]
                            }
                        }
                        return function() {
                            ie("randomDevice")
                        }
                    }();
                    Se.createDevice("/dev", "random", e), Se.createDevice("/dev", "urandom", e), Se.mkdir("/dev/shm"), Se.mkdir("/dev/shm/tmp")
                },
                createSpecialDirectories: () => {
                    Se.mkdir("/proc");
                    var e = Se.mkdir("/proc/self");
                    Se.mkdir("/proc/self/fd"), Se.mount({
                        mount: () => {
                            var r = Se.createNode(e, "fd", 16895, 73);
                            return r.node_ops = {
                                lookup: (e, r) => {
                                    var t = +r,
                                        n = Se.getStream(t);
                                    if (!n) throw new Se.ErrnoError(8);
                                    var o = {
                                        parent: null,
                                        mount: {
                                            mountpoint: "fake"
                                        },
                                        node_ops: {
                                            readlink: () => n.path
                                        }
                                    };
                                    return o.parent = o, o
                                }
                            }, r
                        }
                    }, {}, "/proc/self/fd")
                },
                createStandardStreams: () => {
                    r.stdin ? Se.createDevice("/dev", "stdin", r.stdin) : Se.symlink("/dev/tty", "/dev/stdin"), r.stdout ? Se.createDevice("/dev", "stdout", null, r.stdout) : Se.symlink("/dev/tty", "/dev/stdout"), r.stderr ? Se.createDevice("/dev", "stderr", null, r.stderr) : Se.symlink("/dev/tty1", "/dev/stderr"), Se.open("/dev/stdin", 0), Se.open("/dev/stdout", 1), Se.open("/dev/stderr", 1)
                },
                ensureErrnoError: () => {
                    Se.ErrnoError || (Se.ErrnoError = function(e, r) {
                        this.node = r, this.setErrno = function(e) {
                            this.errno = e
                        }, this.setErrno(e), this.message = "FS error"
                    }, Se.ErrnoError.prototype = new Error, Se.ErrnoError.prototype.constructor = Se.ErrnoError, [44].forEach((e => {
                        Se.genericErrors[e] = new Se.ErrnoError(e), Se.genericErrors[e].stack = "<generic error, no stack>"
                    })))
                },
                staticInit: () => {
                    Se.ensureErrnoError(), Se.nameTable = new Array(4096), Se.mount(ke, {}, "/"), Se.createDefaultDirectories(), Se.createDefaultDevices(), Se.createSpecialDirectories(), Se.filesystems = {
                        MEMFS: ke,
                        IDBFS: Ce
                    }
                },
                init: (e, t, n) => {
                    Se.init.initialized = !0, Se.ensureErrnoError(), r.stdin = e || r.stdin, r.stdout = t || r.stdout, r.stderr = n || r.stderr, Se.createStandardStreams()
                },
                quit: () => {
                    Se.init.initialized = !1;
                    for (var e = 0; e < Se.streams.length; e++) {
                        var r = Se.streams[e];
                        r && Se.close(r)
                    }
                },
                getMode: (e, r) => {
                    var t = 0;
                    return e && (t |= 365), r && (t |= 146), t
                },
                findObject: (e, r) => {
                    var t = Se.analyzePath(e, r);
                    return t.exists ? t.object : null
                },
                analyzePath: (e, r) => {
                    try {
                        e = (n = Se.lookupPath(e, {
                            follow: !r
                        })).path
                    } catch (e) {}
                    var t = {
                        isRoot: !1,
                        exists: !1,
                        error: 0,
                        name: null,
                        path: null,
                        object: null,
                        parentExists: !1,
                        parentPath: null,
                        parentObject: null
                    };
                    try {
                        var n = Se.lookupPath(e, {
                            parent: !0
                        });
                        t.parentExists = !0, t.parentPath = n.path, t.parentObject = n.node, t.name = ye.basename(e), n = Se.lookupPath(e, {
                            follow: !r
                        }), t.exists = !0, t.path = n.path, t.object = n.node, t.name = n.node.name, t.isRoot = "/" === n.path
                    } catch (e) {
                        t.error = e.errno
                    }
                    return t
                },
                createPath: (e, r, t, n) => {
                    e = "string" == typeof e ? e : Se.getPath(e);
                    for (var o = r.split("/").reverse(); o.length;) {
                        var a = o.pop();
                        if (a) {
                            var i = ye.join2(e, a);
                            try {
                                Se.mkdir(i)
                            } catch (e) {}
                            e = i
                        }
                    }
                    return i
                },
                createFile: (e, r, t, n, o) => {
                    var a = ye.join2("string" == typeof e ? e : Se.getPath(e), r),
                        i = Se.getMode(n, o);
                    return Se.create(a, i)
                },
                createDataFile: (e, r, t, n, o, a) => {
                    var i = r;
                    e && (e = "string" == typeof e ? e : Se.getPath(e), i = r ? ye.join2(e, r) : e);
                    var u = Se.getMode(n, o),
                        s = Se.create(i, u);
                    if (t) {
                        if ("string" == typeof t) {
                            for (var c = new Array(t.length), f = 0, l = t.length; f < l; ++f) c[f] = t.charCodeAt(f);
                            t = c
                        }
                        Se.chmod(s, 146 | u);
                        var d = Se.open(s, 577);
                        Se.write(d, t, 0, t.length, 0, a), Se.close(d), Se.chmod(s, u)
                    }
                    return s
                },
                createDevice: (e, r, t, n) => {
                    var o = ye.join2("string" == typeof e ? e : Se.getPath(e), r),
                        a = Se.getMode(!!t, !!n);
                    Se.createDevice.major || (Se.createDevice.major = 64);
                    var i = Se.makedev(Se.createDevice.major++, 0);
                    return Se.registerDevice(i, {
                        open: e => {
                            e.seekable = !1
                        },
                        close: e => {
                            n && n.buffer && n.buffer.length && n(10)
                        },
                        read: (e, r, n, o, a) => {
                            for (var i = 0, u = 0; u < o; u++) {
                                var s;
                                try {
                                    s = t()
                                } catch (e) {
                                    throw new Se.ErrnoError(29)
                                }
                                if (void 0 === s && 0 === i) throw new Se.ErrnoError(6);
                                if (null == s) break;
                                i++, r[n + u] = s
                            }
                            return i && (e.node.timestamp = Date.now()), i
                        },
                        write: (e, r, t, o, a) => {
                            for (var i = 0; i < o; i++) try {
                                n(r[t + i])
                            } catch (e) {
                                throw new Se.ErrnoError(29)
                            }
                            return o && (e.node.timestamp = Date.now()), i
                        }
                    }), Se.mkdev(o, a, i)
                },
                forceLoadFile: e => {
                    if (e.isDevice || e.isFolder || e.link || e.contents) return !0;
                    if ("undefined" != typeof XMLHttpRequest) throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
                    if (!o) throw new Error("Cannot load without read() or XMLHttpRequest.");
                    try {
                        e.contents = jr(o(e.url), !0), e.usedBytes = e.contents.length
                    } catch (e) {
                        throw new Se.ErrnoError(29)
                    }
                },
                createLazyFile: (e, r, t, n, o) => {
                    function a() {
                        this.lengthKnown = !1, this.chunks = []
                    }
                    if (a.prototype.get = function(e) {
                            if (!(e > this.length - 1 || e < 0)) {
                                var r = e % this.chunkSize,
                                    t = e / this.chunkSize | 0;
                                return this.getter(t)[r]
                            }
                        }, a.prototype.setDataGetter = function(e) {
                            this.getter = e
                        }, a.prototype.cacheLength = function() {
                            var e = new XMLHttpRequest;
                            if (e.open("HEAD", t, !1), e.send(null), !(e.status >= 200 && e.status < 300 || 304 === e.status)) throw new Error("Couldn't load " + t + ". Status: " + e.status);
                            var r, n = Number(e.getResponseHeader("Content-length")),
                                o = (r = e.getResponseHeader("Accept-Ranges")) && "bytes" === r,
                                a = (r = e.getResponseHeader("Content-Encoding")) && "gzip" === r,
                                i = 1048576;
                            o || (i = n);
                            var u = this;
                            u.setDataGetter((e => {
                                var r = e * i,
                                    o = (e + 1) * i - 1;
                                if (o = Math.min(o, n - 1), void 0 === u.chunks[e] && (u.chunks[e] = ((e, r) => {
                                        if (e > r) throw new Error("invalid range (" + e + ", " + r + ") or no bytes requested!");
                                        if (r > n - 1) throw new Error("only " + n + " bytes available! programmer error!");
                                        var o = new XMLHttpRequest;
                                        if (o.open("GET", t, !1), n !== i && o.setRequestHeader("Range", "bytes=" + e + "-" + r), o.responseType = "arraybuffer", o.overrideMimeType && o.overrideMimeType("text/plain; charset=x-user-defined"), o.send(null), !(o.status >= 200 && o.status < 300 || 304 === o.status)) throw new Error("Couldn't load " + t + ". Status: " + o.status);
                                        return void 0 !== o.response ? new Uint8Array(o.response || []) : jr(o.responseText || "", !0)
                                    })(r, o)), void 0 === u.chunks[e]) throw new Error("doXHR failed!");
                                return u.chunks[e]
                            })), !a && n || (i = n = 1, n = this.getter(0).length, i = n, d("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = n, this._chunkSize = i, this.lengthKnown = !0
                        }, "undefined" != typeof XMLHttpRequest) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
                    var i = {
                            isDevice: !1,
                            url: t
                        },
                        u = Se.createFile(e, r, i, n, o);
                    i.contents ? u.contents = i.contents : i.url && (u.contents = null, u.url = i.url), Object.defineProperties(u, {
                        usedBytes: {
                            get: function() {
                                return this.contents.length
                            }
                        }
                    });
                    var s = {};
                    return Object.keys(u.stream_ops).forEach((e => {
                        var r = u.stream_ops[e];
                        s[e] = function() {
                            return Se.forceLoadFile(u), r.apply(null, arguments)
                        }
                    })), s.read = (e, r, t, n, o) => {
                        Se.forceLoadFile(u);
                        var a = e.node.contents;
                        if (o >= a.length) return 0;
                        var i = Math.min(a.length - o, n);
                        if (a.slice)
                            for (var s = 0; s < i; s++) r[t + s] = a[o + s];
                        else
                            for (s = 0; s < i; s++) r[t + s] = a.get(o + s);
                        return i
                    }, u.stream_ops = s, u
                },
                createPreloadedFile: (e, r, t, n, o, i, u, s, c, f) => {
                    var l = r ? we.resolve(ye.join2(e, r)) : e;

                    function d(t) {
                        function a(t) {
                            f && f(), s || Se.createDataFile(e, r, t, n, o, c), i && i(), ae()
                        }
                        Fe.handledByPreloadPlugin(t, l, a, (() => {
                            u && u(), ae()
                        })) || a(t)
                    }
                    oe(), "string" == typeof t ? function(e, r, t, n) {
                        var o = "al " + e;
                        a(e, (function(r) {
                            E(r, 'Loading data file "' + e + '" failed (no arrayBuffer).'), (e => {
                                d(e)
                            })(new Uint8Array(r)), o && ae()
                        }), (function(r) {
                            if (!t) throw 'Loading data file "' + e + '" failed.';
                            t()
                        })), o && oe()
                    }(t, 0, u) : d(t)
                },
                indexedDB: () => window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB,
                DB_NAME: () => "EM_FS_" + window.location.pathname,
                DB_VERSION: 20,
                DB_STORE_NAME: "FILE_DATA",
                saveFilesToDB: (e, r, t) => {
                    r = r || (() => {}), t = t || (() => {});
                    var n = Se.indexedDB();
                    try {
                        var o = n.open(Se.DB_NAME(), Se.DB_VERSION)
                    } catch (e) {
                        return t(e)
                    }
                    o.onupgradeneeded = () => {
                        d("creating db"), o.result.createObjectStore(Se.DB_STORE_NAME)
                    }, o.onsuccess = () => {
                        var n = o.result.transaction([Se.DB_STORE_NAME], "readwrite"),
                            a = n.objectStore(Se.DB_STORE_NAME),
                            i = 0,
                            u = 0,
                            s = e.length;

                        function c() {
                            0 == u ? r() : t()
                        }
                        e.forEach((e => {
                            var r = a.put(Se.analyzePath(e).object.contents, e);
                            r.onsuccess = () => {
                                ++i + u == s && c()
                            }, r.onerror = () => {
                                u++, i + u == s && c()
                            }
                        })), n.onerror = t
                    }, o.onerror = t
                },
                loadFilesFromDB: (e, r, t) => {
                    r = r || (() => {}), t = t || (() => {});
                    var n = Se.indexedDB();
                    try {
                        var o = n.open(Se.DB_NAME(), Se.DB_VERSION)
                    } catch (e) {
                        return t(e)
                    }
                    o.onupgradeneeded = t, o.onsuccess = () => {
                        var n = o.result;
                        try {
                            var a = n.transaction([Se.DB_STORE_NAME], "readonly")
                        } catch (e) {
                            return void t(e)
                        }
                        var i = a.objectStore(Se.DB_STORE_NAME),
                            u = 0,
                            s = 0,
                            c = e.length;

                        function f() {
                            0 == s ? r() : t()
                        }
                        e.forEach((e => {
                            var r = i.get(e);
                            r.onsuccess = () => {
                                Se.analyzePath(e).exists && Se.unlink(e), Se.createDataFile(ye.dirname(e), ye.basename(e), r.result, !0, !0, !0), ++u + s == c && f()
                            }, r.onerror = () => {
                                s++, u + s == c && f()
                            }
                        })), a.onerror = t
                    }, o.onerror = t
                }
            },
            Ae = {
                DEFAULT_POLLMASK: 5,
                calculateAt: function(e, r, t) {
                    if ("/" === r[0]) return r;
                    var n;
                    if (-100 === e) n = Se.cwd();
                    else {
                        var o = Se.getStream(e);
                        if (!o) throw new Se.ErrnoError(8);
                        n = o.path
                    }
                    if (0 == r.length) {
                        if (!t) throw new Se.ErrnoError(44);
                        return n
                    }
                    return ye.join2(n, r)
                },
                doStat: function(e, r, t) {
                    try {
                        var n = e(r)
                    } catch (e) {
                        if (e && e.node && ye.normalize(r) !== ye.normalize(Se.getPath(e.node))) return -54;
                        throw e
                    }
                    return D[t >> 2] = n.dev, D[t + 4 >> 2] = 0, D[t + 8 >> 2] = n.ino, D[t + 12 >> 2] = n.mode, D[t + 16 >> 2] = n.nlink, D[t + 20 >> 2] = n.uid, D[t + 24 >> 2] = n.gid, D[t + 28 >> 2] = n.rdev, D[t + 32 >> 2] = 0, ee = [n.size >>> 0, (J = n.size, +Math.abs(J) >= 1 ? J > 0 ? (0 | Math.min(+Math.floor(J / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((J - +(~~J >>> 0)) / 4294967296) >>> 0 : 0)], D[t + 40 >> 2] = ee[0], D[t + 44 >> 2] = ee[1], D[t + 48 >> 2] = 4096, D[t + 52 >> 2] = n.blocks, D[t + 56 >> 2] = n.atime.getTime() / 1e3 | 0, D[t + 60 >> 2] = 0, D[t + 64 >> 2] = n.mtime.getTime() / 1e3 | 0, D[t + 68 >> 2] = 0, D[t + 72 >> 2] = n.ctime.getTime() / 1e3 | 0, D[t + 76 >> 2] = 0, ee = [n.ino >>> 0, (J = n.ino, +Math.abs(J) >= 1 ? J > 0 ? (0 | Math.min(+Math.floor(J / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((J - +(~~J >>> 0)) / 4294967296) >>> 0 : 0)], D[t + 80 >> 2] = ee[0], D[t + 84 >> 2] = ee[1], 0
                },
                doMsync: function(e, r, t, n, o) {
                    var a = L.slice(e, e + t);
                    Se.msync(r, a, o, t, n)
                },
                doMkdir: function(e, r) {
                    return "/" === (e = ye.normalize(e))[e.length - 1] && (e = e.substr(0, e.length - 1)), Se.mkdir(e, r, 0), 0
                },
                doMknod: function(e, r, t) {
                    switch (61440 & r) {
                        case 32768:
                        case 8192:
                        case 24576:
                        case 4096:
                        case 49152:
                            break;
                        default:
                            return -28
                    }
                    return Se.mknod(e, r, t), 0
                },
                doReadlink: function(e, r, t) {
                    if (t <= 0) return -28;
                    var n = Se.readlink(e),
                        o = Math.min(t, U(n)),
                        a = A[r + o];
                    return O(n, r, t + 1), A[r + o] = a, o
                },
                doAccess: function(e, r) {
                    if (-8 & r) return -28;
                    var t = Se.lookupPath(e, {
                        follow: !0
                    }).node;
                    if (!t) return -44;
                    var n = "";
                    return 4 & r && (n += "r"), 2 & r && (n += "w"), 1 & r && (n += "x"), n && Se.nodePermissions(t, n) ? -2 : 0
                },
                doDup: function(e, r, t) {
                    var n = Se.getStream(t);
                    return n && Se.close(n), Se.open(e, r, 0, t, t).fd
                },
                doReadv: function(e, r, t, n) {
                    for (var o = 0, a = 0; a < t; a++) {
                        var i = D[r + 8 * a >> 2],
                            u = D[r + (8 * a + 4) >> 2],
                            s = Se.read(e, A, i, u, n);
                        if (s < 0) return -1;
                        if (o += s, s < u) break
                    }
                    return o
                },
                doWritev: function(e, r, t, n) {
                    for (var o = 0, a = 0; a < t; a++) {
                        var i = D[r + 8 * a >> 2],
                            u = D[r + (8 * a + 4) >> 2],
                            s = Se.write(e, A, i, u, n);
                        if (s < 0) return -1;
                        o += s
                    }
                    return o
                },
                varargs: void 0,
                get: function() {
                    return Ae.varargs += 4, D[Ae.varargs - 4 >> 2]
                },
                getStr: function(e) {
                    return M(e)
                },
                getStreamFromFD: function(e) {
                    var r = Se.getStream(e);
                    if (!r) throw new Se.ErrnoError(8);
                    return r
                },
                get64: function(e, r) {
                    return e
                }
            };

        function Le(e, r) {
            if (Fe.mainLoop.timingMode = e, Fe.mainLoop.timingValue = r, !Fe.mainLoop.func) return 1;
            if (Fe.mainLoop.running || (Fe.mainLoop.running = !0), 0 == e) Fe.mainLoop.scheduler = function() {
                var e = 0 | Math.max(0, Fe.mainLoop.tickStartTime + r - Ee());
                setTimeout(Fe.mainLoop.runner, e)
            }, Fe.mainLoop.method = "timeout";
            else if (1 == e) Fe.mainLoop.scheduler = function() {
                Fe.requestAnimationFrame(Fe.mainLoop.runner)
            }, Fe.mainLoop.method = "rAF";
            else if (2 == e) {
                if ("undefined" == typeof setImmediate) {
                    var t = [],
                        n = "setimmediate";
                    addEventListener("message", (function(e) {
                        e.data !== n && e.data.target !== n || (e.stopPropagation(), t.shift()())
                    }), !0), setImmediate = function(e) {
                        t.push(e), postMessage(n, "*")
                    }
                }
                Fe.mainLoop.scheduler = function() {
                    setImmediate(Fe.mainLoop.runner)
                }, Fe.mainLoop.method = "immediate"
            }
            return 0
        }

        function Be(e) {
            rt(e)
        }

        function _e(e, r, t, n, o) {
            E(!Fe.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters."), Fe.mainLoop.func = e, Fe.mainLoop.arg = n;
            var a = Fe.mainLoop.currentlyRunningMainloop;

            function i() {
                return !(a < Fe.mainLoop.currentlyRunningMainloop && (function() {
                    if (!K()) try {
                        Be(w)
                    } catch (e) {
                        ge(e)
                    }
                }(), 1))
            }
            if (Fe.mainLoop.running = !1, Fe.mainLoop.runner = function() {
                    if (!x)
                        if (Fe.mainLoop.queue.length > 0) {
                            var r = Date.now(),
                                t = Fe.mainLoop.queue.shift();
                            if (t.func(t.arg), Fe.mainLoop.remainingBlockers) {
                                var n = Fe.mainLoop.remainingBlockers,
                                    o = n % 1 == 0 ? n - 1 : Math.floor(n);
                                t.counted ? Fe.mainLoop.remainingBlockers = o : (o += .5, Fe.mainLoop.remainingBlockers = (8 * n + o) / 9)
                            }
                            if (d('main loop blocker "' + t.name + '" took ' + (Date.now() - r) + " ms"), Fe.mainLoop.updateStatus(), !i()) return;
                            setTimeout(Fe.mainLoop.runner, 0)
                        } else i() && (Fe.mainLoop.currentFrameNumber = Fe.mainLoop.currentFrameNumber + 1 | 0, 1 == Fe.mainLoop.timingMode && Fe.mainLoop.timingValue > 1 && Fe.mainLoop.currentFrameNumber % Fe.mainLoop.timingValue != 0 ? Fe.mainLoop.scheduler() : (0 == Fe.mainLoop.timingMode && (Fe.mainLoop.tickStartTime = Ee()), Me.newRenderingFrameStarted(), Fe.mainLoop.runIter(e), i() && ("object" == typeof SDL && SDL.audio && SDL.audio.queueNewAudioData && SDL.audio.queueNewAudioData(), Fe.mainLoop.scheduler())))
                }, o || (r && r > 0 ? Le(0, 1e3 / r) : Le(1, 1), Fe.mainLoop.scheduler()), t) throw "unwind"
        }

        function De(e, r) {
            if (!Y && !x)
                if (r) e();
                else try {
                    e()
                } catch (e) {
                    ge(e)
                }
        }

        function Pe(e, r) {
            return setTimeout((function() {
                De(e)
            }), r)
        }
        Ee = () => performance.now();
        var Fe = {
                mainLoop: {
                    running: !1,
                    scheduler: null,
                    method: "",
                    currentlyRunningMainloop: 0,
                    func: null,
                    arg: 0,
                    timingMode: 0,
                    timingValue: 0,
                    currentFrameNumber: 0,
                    queue: [],
                    pause: function() {
                        Fe.mainLoop.scheduler = null, Fe.mainLoop.currentlyRunningMainloop++
                    },
                    resume: function() {
                        Fe.mainLoop.currentlyRunningMainloop++;
                        var e = Fe.mainLoop.timingMode,
                            r = Fe.mainLoop.timingValue,
                            t = Fe.mainLoop.func;
                        Fe.mainLoop.func = null, _e(t, 0, !1, Fe.mainLoop.arg, !0), Le(e, r), Fe.mainLoop.scheduler()
                    },
                    updateStatus: function() {
                        if (r.setStatus) {
                            var e = r.statusMessage || "Please wait...",
                                t = Fe.mainLoop.remainingBlockers,
                                n = Fe.mainLoop.expectedBlockers;
                            t ? t < n ? r.setStatus(e + " (" + (n - t) + "/" + n + ")") : r.setStatus(e) : r.setStatus("")
                        }
                    },
                    runIter: function(e) {
                        if (!x) {
                            if (r.preMainLoop && !1 === r.preMainLoop()) return;
                            De(e), r.postMainLoop && r.postMainLoop()
                        }
                    }
                },
                isFullscreen: !1,
                pointerLock: !1,
                moduleContextCreatedCallbacks: [],
                workers: [],
                init: function() {
                    if (r.preloadPlugins || (r.preloadPlugins = []), !Fe.initted) {
                        Fe.initted = !0;
                        try {
                            new Blob, Fe.hasBlobConstructor = !0
                        } catch (e) {
                            Fe.hasBlobConstructor = !1, d("warning: no blob constructor, cannot create blobs with mimetypes")
                        }
                        Fe.BlobBuilder = "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : Fe.hasBlobConstructor ? null : d("warning: no BlobBuilder"), Fe.URLObject = "undefined" != typeof window ? window.URL ? window.URL : window.webkitURL : void 0, r.noImageDecoding || void 0 !== Fe.URLObject || (d("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."), r.noImageDecoding = !0);
                        var e = {
                            canHandle: function(e) {
                                return !r.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(e)
                            },
                            handle: function(e, t, n, o) {
                                var a = null;
                                if (Fe.hasBlobConstructor) try {
                                    (a = new Blob([e], {
                                        type: Fe.getMimetype(t)
                                    })).size !== e.length && (a = new Blob([new Uint8Array(e).buffer], {
                                        type: Fe.getMimetype(t)
                                    }))
                                } catch (e) {
                                    p("Blob constructor present but fails: " + e + "; falling back to blob builder")
                                }
                                if (!a) {
                                    var i = new Fe.BlobBuilder;
                                    i.append(new Uint8Array(e).buffer), a = i.getBlob()
                                }
                                var u = Fe.URLObject.createObjectURL(a),
                                    s = new Image;
                                s.onload = () => {
                                    E(s.complete, "Image " + t + " could not be decoded");
                                    var o = document.createElement("canvas");
                                    o.width = s.width, o.height = s.height, o.getContext("2d").drawImage(s, 0, 0), r.preloadedImages[t] = o, Fe.URLObject.revokeObjectURL(u), n && n(e)
                                }, s.onerror = e => {
                                    d("Image " + u + " could not be decoded"), o && o()
                                }, s.src = u
                            }
                        };
                        r.preloadPlugins.push(e);
                        var t = {
                            canHandle: function(e) {
                                return !r.noAudioDecoding && e.substr(-4) in {
                                    ".ogg": 1,
                                    ".wav": 1,
                                    ".mp3": 1
                                }
                            },
                            handle: function(e, t, n, o) {
                                var a = !1;

                                function i(o) {
                                    a || (a = !0, r.preloadedAudios[t] = o, n && n(e))
                                }

                                function u() {
                                    a || (a = !0, r.preloadedAudios[t] = new Audio, o && o())
                                }
                                if (!Fe.hasBlobConstructor) return u();
                                try {
                                    var s = new Blob([e], {
                                        type: Fe.getMimetype(t)
                                    })
                                } catch (e) {
                                    return u()
                                }
                                var c = Fe.URLObject.createObjectURL(s),
                                    f = new Audio;
                                f.addEventListener("canplaythrough", (function() {
                                    i(f)
                                }), !1), f.onerror = function(r) {
                                    a || (d("warning: browser could not fully decode audio " + t + ", trying slower base64 approach"), f.src = "data:audio/x-" + t.substr(-3) + ";base64," + function(e) {
                                        for (var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t = "", n = 0, o = 0, a = 0; a < e.length; a++)
                                            for (n = n << 8 | e[a], o += 8; o >= 6;) {
                                                var i = n >> o - 6 & 63;
                                                o -= 6, t += r[i]
                                            }
                                        return 2 == o ? (t += r[(3 & n) << 4], t += "==") : 4 == o && (t += r[(15 & n) << 2], t += "="), t
                                    }(e), i(f))
                                }, f.src = c, Pe((function() {
                                    i(f)
                                }), 1e4)
                            }
                        };
                        r.preloadPlugins.push(t);
                        var n = r.canvas;
                        n && (n.requestPointerLock = n.requestPointerLock || n.mozRequestPointerLock || n.webkitRequestPointerLock || n.msRequestPointerLock || function() {}, n.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function() {}, n.exitPointerLock = n.exitPointerLock.bind(document), document.addEventListener("pointerlockchange", o, !1), document.addEventListener("mozpointerlockchange", o, !1), document.addEventListener("webkitpointerlockchange", o, !1), document.addEventListener("mspointerlockchange", o, !1), r.elementPointerLock && n.addEventListener("click", (function(e) {
                            !Fe.pointerLock && r.canvas.requestPointerLock && (r.canvas.requestPointerLock(), e.preventDefault())
                        }), !1))
                    }

                    function o() {
                        Fe.pointerLock = document.pointerLockElement === r.canvas || document.mozPointerLockElement === r.canvas || document.webkitPointerLockElement === r.canvas || document.msPointerLockElement === r.canvas
                    }
                },
                handledByPreloadPlugin: function(e, t, n, o) {
                    Fe.init();
                    var a = !1;
                    return r.preloadPlugins.forEach((function(r) {
                        a || r.canHandle(t) && (r.handle(e, t, n, o), a = !0)
                    })), a
                },
                createContext: function(e, t, n, o) {
                    if (t && r.ctx && e == r.canvas) return r.ctx;
                    var a, i;
                    if (t) {
                        var u = {
                            antialias: !1,
                            alpha: !1,
                            majorVersion: "undefined" != typeof WebGL2RenderingContext ? 2 : 1
                        };
                        if (o)
                            for (var s in o) u[s] = o[s];
                        void 0 !== Me && (i = Me.createContext(e, u)) && (a = Me.getContext(i).GLctx)
                    } else a = e.getContext("2d");
                    return a ? (n && (t || E(void 0 === Mr, "cannot set in module if GLctx is used, but we are a non-GL context that would replace it"), r.ctx = a, t && Me.makeContextCurrent(i), r.useWebGL = t, Fe.moduleContextCreatedCallbacks.forEach((function(e) {
                        e()
                    })), Fe.init()), a) : null
                },
                destroyContext: function(e, r, t) {},
                fullscreenHandlersInstalled: !1,
                lockPointer: void 0,
                resizeCanvas: void 0,
                requestFullscreen: function(e, t) {
                    Fe.lockPointer = e, Fe.resizeCanvas = t, void 0 === Fe.lockPointer && (Fe.lockPointer = !0), void 0 === Fe.resizeCanvas && (Fe.resizeCanvas = !1);
                    var n = r.canvas;

                    function o() {
                        Fe.isFullscreen = !1;
                        var e = n.parentNode;
                        (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === e ? (n.exitFullscreen = Fe.exitFullscreen, Fe.lockPointer && n.requestPointerLock(), Fe.isFullscreen = !0, Fe.resizeCanvas ? Fe.setFullscreenCanvasSize() : Fe.updateCanvasDimensions(n)) : (e.parentNode.insertBefore(n, e), e.parentNode.removeChild(e), Fe.resizeCanvas ? Fe.setWindowedCanvasSize() : Fe.updateCanvasDimensions(n)), r.onFullScreen && r.onFullScreen(Fe.isFullscreen), r.onFullscreen && r.onFullscreen(Fe.isFullscreen)
                    }
                    Fe.fullscreenHandlersInstalled || (Fe.fullscreenHandlersInstalled = !0, document.addEventListener("fullscreenchange", o, !1), document.addEventListener("mozfullscreenchange", o, !1), document.addEventListener("webkitfullscreenchange", o, !1), document.addEventListener("MSFullscreenChange", o, !1));
                    var a = document.createElement("div");
                    n.parentNode.insertBefore(a, n), a.appendChild(n), a.requestFullscreen = a.requestFullscreen || a.mozRequestFullScreen || a.msRequestFullscreen || (a.webkitRequestFullscreen ? function() {
                        a.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
                    } : null) || (a.webkitRequestFullScreen ? function() {
                        a.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
                    } : null), a.requestFullscreen()
                },
                exitFullscreen: function() {
                    return !!Fe.isFullscreen && ((document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function() {}).apply(document, []), !0)
                },
                nextRAF: 0,
                fakeRequestAnimationFrame: function(e) {
                    var r = Date.now();
                    if (0 === Fe.nextRAF) Fe.nextRAF = r + 1e3 / 60;
                    else
                        for (; r + 2 >= Fe.nextRAF;) Fe.nextRAF += 1e3 / 60;
                    var t = Math.max(Fe.nextRAF - r, 0);
                    setTimeout(e, t)
                },
                requestAnimationFrame: function(e) {
                    "function" != typeof requestAnimationFrame ? (0, Fe.fakeRequestAnimationFrame)(e) : requestAnimationFrame(e)
                },
                safeSetTimeout: function(e) {
                    return Pe(e)
                },
                safeRequestAnimationFrame: function(e) {
                    return Fe.requestAnimationFrame((function() {
                        De(e)
                    }))
                },
                getMimetype: function(e) {
                    return {
                        jpg: "image/jpeg",
                        jpeg: "image/jpeg",
                        png: "image/png",
                        bmp: "image/bmp",
                        ogg: "audio/ogg",
                        wav: "audio/wav",
                        mp3: "audio/mpeg"
                    } [e.substr(e.lastIndexOf(".") + 1)]
                },
                getUserMedia: function(e) {
                    window.getUserMedia || (window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia), window.getUserMedia(e)
                },
                getMovementX: function(e) {
                    return e.movementX || e.mozMovementX || e.webkitMovementX || 0
                },
                getMovementY: function(e) {
                    return e.movementY || e.mozMovementY || e.webkitMovementY || 0
                },
                getMouseWheelDelta: function(e) {
                    var r = 0;
                    switch (e.type) {
                        case "DOMMouseScroll":
                            r = e.detail / 3;
                            break;
                        case "mousewheel":
                            r = e.wheelDelta / 120;
                            break;
                        case "wheel":
                            switch (r = e.deltaY, e.deltaMode) {
                                case 0:
                                    r /= 100;
                                    break;
                                case 1:
                                    r /= 3;
                                    break;
                                case 2:
                                    r *= 80;
                                    break;
                                default:
                                    throw "unrecognized mouse wheel delta mode: " + e.deltaMode
                            }
                            break;
                        default:
                            throw "unrecognized mouse wheel event: " + e.type
                    }
                    return r
                },
                mouseX: 0,
                mouseY: 0,
                mouseMovementX: 0,
                mouseMovementY: 0,
                touches: {},
                lastTouches: {},
                calculateMouseEvent: function(e) {
                    if (Fe.pointerLock) "mousemove" != e.type && "mozMovementX" in e ? Fe.mouseMovementX = Fe.mouseMovementY = 0 : (Fe.mouseMovementX = Fe.getMovementX(e), Fe.mouseMovementY = Fe.getMovementY(e)), "undefined" != typeof SDL ? (Fe.mouseX = SDL.mouseX + Fe.mouseMovementX, Fe.mouseY = SDL.mouseY + Fe.mouseMovementY) : (Fe.mouseX += Fe.mouseMovementX, Fe.mouseY += Fe.mouseMovementY);
                    else {
                        var t = r.canvas.getBoundingClientRect(),
                            n = r.canvas.width,
                            o = r.canvas.height,
                            a = void 0 !== window.scrollX ? window.scrollX : window.pageXOffset,
                            i = void 0 !== window.scrollY ? window.scrollY : window.pageYOffset;
                        if ("touchstart" === e.type || "touchend" === e.type || "touchmove" === e.type) {
                            var u = e.touch;
                            if (void 0 === u) return;
                            var s = u.pageX - (a + t.left),
                                c = u.pageY - (i + t.top),
                                f = {
                                    x: s *= n / t.width,
                                    y: c *= o / t.height
                                };
                            if ("touchstart" === e.type) Fe.lastTouches[u.identifier] = f, Fe.touches[u.identifier] = f;
                            else if ("touchend" === e.type || "touchmove" === e.type) {
                                var l = Fe.touches[u.identifier];
                                l || (l = f), Fe.lastTouches[u.identifier] = l, Fe.touches[u.identifier] = f
                            }
                            return
                        }
                        var d = e.pageX - (a + t.left),
                            m = e.pageY - (i + t.top);
                        d *= n / t.width, m *= o / t.height, Fe.mouseMovementX = d - Fe.mouseX, Fe.mouseMovementY = m - Fe.mouseY, Fe.mouseX = d, Fe.mouseY = m
                    }
                },
                resizeListeners: [],
                updateResizeListeners: function() {
                    var e = r.canvas;
                    Fe.resizeListeners.forEach((function(r) {
                        r(e.width, e.height)
                    }))
                },
                setCanvasSize: function(e, t, n) {
                    var o = r.canvas;
                    Fe.updateCanvasDimensions(o, e, t), n || Fe.updateResizeListeners()
                },
                windowedWidth: 0,
                windowedHeight: 0,
                setFullscreenCanvasSize: function() {
                    if ("undefined" != typeof SDL) {
                        var e = P[SDL.screen >> 2];
                        e |= 8388608, D[SDL.screen >> 2] = e
                    }
                    Fe.updateCanvasDimensions(r.canvas), Fe.updateResizeListeners()
                },
                setWindowedCanvasSize: function() {
                    if ("undefined" != typeof SDL) {
                        var e = P[SDL.screen >> 2];
                        e &= -8388609, D[SDL.screen >> 2] = e
                    }
                    Fe.updateCanvasDimensions(r.canvas), Fe.updateResizeListeners()
                },
                updateCanvasDimensions: function(e, t, n) {
                    t && n ? (e.widthNative = t, e.heightNative = n) : (t = e.widthNative, n = e.heightNative);
                    var o = t,
                        a = n;
                    if (r.forcedAspectRatio && r.forcedAspectRatio > 0 && (o / a < r.forcedAspectRatio ? o = Math.round(a * r.forcedAspectRatio) : a = Math.round(o / r.forcedAspectRatio)), (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === e.parentNode && "undefined" != typeof screen) {
                        var i = Math.min(screen.width / o, screen.height / a);
                        o = Math.round(o * i), a = Math.round(a * i)
                    }
                    Fe.resizeCanvas ? (e.width != o && (e.width = o), e.height != a && (e.height = a), void 0 !== e.style && (e.style.removeProperty("width"), e.style.removeProperty("height"))) : (e.width != t && (e.width = t), e.height != n && (e.height = n), void 0 !== e.style && (o != t || a != n ? (e.style.setProperty("width", o + "px", "important"), e.style.setProperty("height", a + "px", "important")) : (e.style.removeProperty("width"), e.style.removeProperty("height"))))
                }
            },
            Te = {
                QUEUE_INTERVAL: 25,
                QUEUE_LOOKAHEAD: .1,
                DEVICE_NAME: "Emscripten OpenAL",
                CAPTURE_DEVICE_NAME: "Emscripten OpenAL capture",
                ALC_EXTENSIONS: {
                    ALC_SOFT_pause_device: !0,
                    ALC_SOFT_HRTF: !0
                },
                AL_EXTENSIONS: {
                    AL_EXT_float32: !0,
                    AL_SOFT_loop_points: !0,
                    AL_SOFT_source_length: !0,
                    AL_EXT_source_distance_model: !0,
                    AL_SOFT_source_spatialize: !0
                },
                _alcErr: 0,
                alcErr: 0,
                deviceRefCounts: {},
                alcStringCache: {},
                paused: !1,
                stringCache: {},
                contexts: {},
                currentCtx: null,
                buffers: {
                    0: {
                        id: 0,
                        refCount: 0,
                        audioBuf: null,
                        frequency: 0,
                        bytesPerSample: 2,
                        channels: 1,
                        length: 0
                    }
                },
                paramArray: [],
                _nextId: 1,
                newId: function() {
                    return Te.freeIds.length > 0 ? Te.freeIds.pop() : Te._nextId++
                },
                freeIds: [],
                scheduleContextAudio: function(e) {
                    if (1 !== Fe.mainLoop.timingMode || "visible" == document.visibilityState)
                        for (var r in e.sources) Te.scheduleSourceAudio(e.sources[r])
                },
                scheduleSourceAudio: function(e, r) {
                    if ((1 !== Fe.mainLoop.timingMode || "visible" == document.visibilityState) && 4114 === e.state) {
                        for (var t = Te.updateSourceTime(e), n = e.bufStartTime, o = e.bufOffset, a = e.bufsProcessed, i = 0; i < e.audioQueue.length; i++) n = (f = e.audioQueue[i])._startTime + f._duration, o = 0, a += f._skipCount + 1;
                        r || (r = Te.QUEUE_LOOKAHEAD);
                        for (var u = t + r, s = 0; n < u;) {
                            if (a >= e.bufQueue.length) {
                                if (!e.looping) break;
                                a %= e.bufQueue.length
                            }
                            var c = e.bufQueue[a % e.bufQueue.length];
                            if (0 === c.length) {
                                if (++s === e.bufQueue.length) break
                            } else {
                                var f;
                                (f = e.context.audioCtx.createBufferSource()).buffer = c.audioBuf, f.playbackRate.value = e.playbackRate, (c.audioBuf._loopStart || c.audioBuf._loopEnd) && (f.loopStart = c.audioBuf._loopStart, f.loopEnd = c.audioBuf._loopEnd);
                                var l = 0;
                                4136 === e.type && e.looping ? (l = Number.POSITIVE_INFINITY, f.loop = !0, c.audioBuf._loopStart && (f.loopStart = c.audioBuf._loopStart), c.audioBuf._loopEnd && (f.loopEnd = c.audioBuf._loopEnd)) : l = (c.audioBuf.duration - o) / e.playbackRate, f._startOffset = o, f._duration = l, f._skipCount = s, s = 0, f.connect(e.gain), void 0 !== f.start ? (n = Math.max(n, e.context.audioCtx.currentTime), f.start(n, o)) : void 0 !== f.noteOn && (n = Math.max(n, e.context.audioCtx.currentTime), f.noteOn(n)), f._startTime = n, e.audioQueue.push(f), n += l
                            }
                            o = 0, a++
                        }
                    }
                },
                updateSourceTime: function(e) {
                    var r = e.context.audioCtx.currentTime;
                    if (4114 !== e.state) return r;
                    isFinite(e.bufStartTime) || (e.bufStartTime = r - e.bufOffset / e.playbackRate, e.bufOffset = 0);
                    for (var t = 0; e.audioQueue.length;) {
                        var n = e.audioQueue[0];
                        if (e.bufsProcessed += n._skipCount, r < (t = n._startTime + n._duration)) break;
                        e.audioQueue.shift(), e.bufStartTime = t, e.bufOffset = 0, e.bufsProcessed++
                    }
                    if (e.bufsProcessed >= e.bufQueue.length && !e.looping) Te.setSourceState(e, 4116);
                    else if (4136 === e.type && e.looping)
                        if (0 === (c = e.bufQueue[0]).length) e.bufOffset = 0;
                        else {
                            var o = (r - e.bufStartTime) * e.playbackRate,
                                a = c.audioBuf._loopStart || 0,
                                i = c.audioBuf._loopEnd || c.audioBuf.duration;
                            i <= a && (i = c.audioBuf.duration), e.bufOffset = o < i ? o : a + (o - a) % (i - a)
                        }
                    else if (e.audioQueue[0]) e.bufOffset = (r - e.audioQueue[0]._startTime) * e.playbackRate;
                    else {
                        if (4136 !== e.type && e.looping) {
                            var u = Te.sourceDuration(e) / e.playbackRate;
                            u > 0 && (e.bufStartTime += Math.floor((r - e.bufStartTime) / u) * u)
                        }
                        for (var s = 0; s < e.bufQueue.length; s++) {
                            if (e.bufsProcessed >= e.bufQueue.length) {
                                if (!e.looping) {
                                    Te.setSourceState(e, 4116);
                                    break
                                }
                                e.bufsProcessed %= e.bufQueue.length
                            }
                            var c;
                            if ((c = e.bufQueue[e.bufsProcessed]).length > 0) {
                                if (r < (t = e.bufStartTime + c.audioBuf.duration / e.playbackRate)) {
                                    e.bufOffset = (r - e.bufStartTime) * e.playbackRate;
                                    break
                                }
                                e.bufStartTime = t
                            }
                            e.bufOffset = 0, e.bufsProcessed++
                        }
                    }
                    return r
                },
                cancelPendingSourceAudio: function(e) {
                    Te.updateSourceTime(e);
                    for (var r = 1; r < e.audioQueue.length; r++) e.audioQueue[r].stop();
                    e.audioQueue.length > 1 && (e.audioQueue.length = 1)
                },
                stopSourceAudio: function(e) {
                    for (var r = 0; r < e.audioQueue.length; r++) e.audioQueue[r].stop();
                    e.audioQueue.length = 0
                },
                setSourceState: function(e, r) {
                    4114 === r ? (4114 !== e.state && 4116 != e.state || (e.bufsProcessed = 0, e.bufOffset = 0), Te.stopSourceAudio(e), e.state = 4114, e.bufStartTime = Number.NEGATIVE_INFINITY, Te.scheduleSourceAudio(e)) : 4115 === r ? 4114 === e.state && (Te.updateSourceTime(e), Te.stopSourceAudio(e), e.state = 4115) : 4116 === r ? 4113 !== e.state && (e.state = 4116, e.bufsProcessed = e.bufQueue.length, e.bufStartTime = Number.NEGATIVE_INFINITY, e.bufOffset = 0, Te.stopSourceAudio(e)) : 4113 === r && 4113 !== e.state && (e.state = 4113, e.bufsProcessed = 0, e.bufStartTime = Number.NEGATIVE_INFINITY, e.bufOffset = 0, Te.stopSourceAudio(e))
                },
                initSourcePanner: function(e) {
                    if (4144 !== e.type) {
                        for (var r = Te.buffers[0], t = 0; t < e.bufQueue.length; t++)
                            if (0 !== e.bufQueue[t].id) {
                                r = e.bufQueue[t];
                                break
                            } if (1 === e.spatialize || 2 === e.spatialize && 1 === r.channels) {
                            if (e.panner) return;
                            e.panner = e.context.audioCtx.createPanner(), Te.updateSourceGlobal(e), Te.updateSourceSpace(e), e.panner.connect(e.context.gain), e.gain.disconnect(), e.gain.connect(e.panner)
                        } else {
                            if (!e.panner) return;
                            e.panner.disconnect(), e.gain.disconnect(), e.gain.connect(e.context.gain), e.panner = null
                        }
                    }
                },
                updateContextGlobal: function(e) {
                    for (var r in e.sources) Te.updateSourceGlobal(e.sources[r])
                },
                updateSourceGlobal: function(e) {
                    var r = e.panner;
                    if (r) switch (r.refDistance = e.refDistance, r.maxDistance = e.maxDistance, r.rolloffFactor = e.rolloffFactor, r.panningModel = e.context.hrtf ? "HRTF" : "equalpower", e.context.sourceDistanceModel ? e.distanceModel : e.context.distanceModel) {
                        case 0:
                            r.distanceModel = "inverse", r.refDistance = 340282e33;
                            break;
                        case 53249:
                        case 53250:
                            r.distanceModel = "inverse";
                            break;
                        case 53251:
                        case 53252:
                            r.distanceModel = "linear";
                            break;
                        case 53253:
                        case 53254:
                            r.distanceModel = "exponential"
                    }
                },
                updateListenerSpace: function(e) {
                    var r = e.audioCtx.listener;
                    for (var t in r.positionX ? (r.positionX.value = e.listener.position[0], r.positionY.value = e.listener.position[1], r.positionZ.value = e.listener.position[2]) : r.setPosition(e.listener.position[0], e.listener.position[1], e.listener.position[2]), r.forwardX ? (r.forwardX.value = e.listener.direction[0], r.forwardY.value = e.listener.direction[1], r.forwardZ.value = e.listener.direction[2], r.upX.value = e.listener.up[0], r.upY.value = e.listener.up[1], r.upZ.value = e.listener.up[2]) : r.setOrientation(e.listener.direction[0], e.listener.direction[1], e.listener.direction[2], e.listener.up[0], e.listener.up[1], e.listener.up[2]), e.sources) Te.updateSourceSpace(e.sources[t])
                },
                updateSourceSpace: function(e) {
                    if (e.panner) {
                        var r = e.panner,
                            t = e.position[0],
                            n = e.position[1],
                            o = e.position[2],
                            a = e.direction[0],
                            i = e.direction[1],
                            u = e.direction[2],
                            s = e.context.listener,
                            c = s.position[0],
                            f = s.position[1],
                            l = s.position[2];
                        if (e.relative) {
                            var d = -s.direction[0],
                                m = -s.direction[1],
                                p = -s.direction[2],
                                v = s.up[0],
                                g = s.up[1],
                                h = s.up[2],
                                b = function(e, r, t) {
                                    var n = Math.sqrt(e * e + r * r + t * t);
                                    return n < Number.EPSILON ? 0 : 1 / n
                                },
                                y = b(d, m, p);
                            d *= y, m *= y, p *= y;
                            var w = (g *= y = b(v, g, h)) * p - (h *= y) * m,
                                x = h * d - (v *= y) * p,
                                E = v * m - g * d,
                                k = a,
                                C = i,
                                S = u;
                            a = k * (w *= y = b(w, x, E)) + C * (v = m * (E *= y) - p * (x *= y)) + S * d, i = k * x + C * (g = p * w - d * E) + S * m, u = k * E + C * (h = d * x - m * w) + S * p, t = (k = t) * w + (C = n) * v + (S = o) * d, n = k * x + C * g + S * m, o = k * E + C * h + S * p, t += c, n += f, o += l
                        }
                        r.positionX ? (t != r.positionX.value && (r.positionX.value = t), n != r.positionY.value && (r.positionY.value = n), o != r.positionZ.value && (r.positionZ.value = o)) : r.setPosition(t, n, o), r.orientationX ? (a != r.orientationX.value && (r.orientationX.value = a), i != r.orientationY.value && (r.orientationY.value = i), u != r.orientationZ.value && (r.orientationZ.value = u)) : r.setOrientation(a, i, u);
                        var A = e.dopplerShift,
                            L = e.velocity[0],
                            B = e.velocity[1],
                            _ = e.velocity[2],
                            D = s.velocity[0],
                            P = s.velocity[1],
                            F = s.velocity[2];
                        if (t === c && n === f && o === l || L === D && B === P && _ === F) e.dopplerShift = 1;
                        else {
                            var T = e.context.speedOfSound,
                                I = e.context.dopplerFactor,
                                R = c - t,
                                M = f - n,
                                N = l - o,
                                O = Math.sqrt(R * R + M * M + N * N),
                                U = (R * D + M * P + N * F) / O,
                                z = (R * L + M * B + N * _) / O;
                            U = Math.min(U, T / I), z = Math.min(z, T / I), e.dopplerShift = (T - I * U) / (T - I * z)
                        }
                        e.dopplerShift !== A && Te.updateSourceRate(e)
                    }
                },
                updateSourceRate: function(e) {
                    if (4114 === e.state) {
                        Te.cancelPendingSourceAudio(e);
                        var r, t = e.audioQueue[0];
                        if (!t) return;
                        r = 4136 === e.type && e.looping ? Number.POSITIVE_INFINITY : (t.buffer.duration - t._startOffset) / e.playbackRate, t._duration = r, t.playbackRate.value = e.playbackRate, Te.scheduleSourceAudio(e)
                    }
                },
                sourceDuration: function(e) {
                    for (var r = 0, t = 0; t < e.bufQueue.length; t++) {
                        var n = e.bufQueue[t].audioBuf;
                        r += n ? n.duration : 0
                    }
                    return r
                },
                sourceTell: function(e) {
                    Te.updateSourceTime(e);
                    for (var r = 0, t = 0; t < e.bufsProcessed; t++) e.bufQueue[t].audioBuf && (r += e.bufQueue[t].audioBuf.duration);
                    return r + e.bufOffset
                },
                sourceSeek: function(e, r) {
                    var t = 4114 == e.state;
                    if (t && Te.setSourceState(e, 4113), null !== e.bufQueue[e.bufsProcessed].audioBuf) {
                        for (e.bufsProcessed = 0; r > e.bufQueue[e.bufsProcessed].audioBuf.duration;) r -= e.bufQueue[e.bufsProcessed].audiobuf.duration, e.bufsProcessed++;
                        e.bufOffset = r
                    }
                    t && Te.setSourceState(e, 4114)
                },
                getGlobalParam: function(e, r) {
                    if (!Te.currentCtx) return null;
                    switch (r) {
                        case 49152:
                            return Te.currentCtx.dopplerFactor;
                        case 49155:
                            return Te.currentCtx.speedOfSound;
                        case 53248:
                            return Te.currentCtx.distanceModel;
                        default:
                            return Te.currentCtx.err = 40962, null
                    }
                },
                setGlobalParam: function(e, r, t) {
                    if (Te.currentCtx) switch (r) {
                        case 49152:
                            if (!Number.isFinite(t) || t < 0) return void(Te.currentCtx.err = 40963);
                            Te.currentCtx.dopplerFactor = t, Te.updateListenerSpace(Te.currentCtx);
                            break;
                        case 49155:
                            if (!Number.isFinite(t) || t <= 0) return void(Te.currentCtx.err = 40963);
                            Te.currentCtx.speedOfSound = t, Te.updateListenerSpace(Te.currentCtx);
                            break;
                        case 53248:
                            switch (t) {
                                case 0:
                                case 53249:
                                case 53250:
                                case 53251:
                                case 53252:
                                case 53253:
                                case 53254:
                                    Te.currentCtx.distanceModel = t, Te.updateContextGlobal(Te.currentCtx);
                                    break;
                                default:
                                    return void(Te.currentCtx.err = 40963)
                            }
                            break;
                        default:
                            return void(Te.currentCtx.err = 40962)
                    }
                },
                getListenerParam: function(e, r) {
                    if (!Te.currentCtx) return null;
                    switch (r) {
                        case 4100:
                            return Te.currentCtx.listener.position;
                        case 4102:
                            return Te.currentCtx.listener.velocity;
                        case 4111:
                            return Te.currentCtx.listener.direction.concat(Te.currentCtx.listener.up);
                        case 4106:
                            return Te.currentCtx.gain.gain.value;
                        default:
                            return Te.currentCtx.err = 40962, null
                    }
                },
                setListenerParam: function(e, r, t) {
                    if (Te.currentCtx)
                        if (null !== t) {
                            var n = Te.currentCtx.listener;
                            switch (r) {
                                case 4100:
                                    if (!Number.isFinite(t[0]) || !Number.isFinite(t[1]) || !Number.isFinite(t[2])) return void(Te.currentCtx.err = 40963);
                                    n.position[0] = t[0], n.position[1] = t[1], n.position[2] = t[2], Te.updateListenerSpace(Te.currentCtx);
                                    break;
                                case 4102:
                                    if (!Number.isFinite(t[0]) || !Number.isFinite(t[1]) || !Number.isFinite(t[2])) return void(Te.currentCtx.err = 40963);
                                    n.velocity[0] = t[0], n.velocity[1] = t[1], n.velocity[2] = t[2], Te.updateListenerSpace(Te.currentCtx);
                                    break;
                                case 4106:
                                    if (!Number.isFinite(t) || t < 0) return void(Te.currentCtx.err = 40963);
                                    Te.currentCtx.gain.gain.value = t;
                                    break;
                                case 4111:
                                    if (!(Number.isFinite(t[0]) && Number.isFinite(t[1]) && Number.isFinite(t[2]) && Number.isFinite(t[3]) && Number.isFinite(t[4]) && Number.isFinite(t[5]))) return void(Te.currentCtx.err = 40963);
                                    n.direction[0] = t[0], n.direction[1] = t[1], n.direction[2] = t[2], n.up[0] = t[3], n.up[1] = t[4], n.up[2] = t[5], Te.updateListenerSpace(Te.currentCtx);
                                    break;
                                default:
                                    return void(Te.currentCtx.err = 40962)
                            }
                        } else Te.currentCtx.err = 40962
                },
                getBufferParam: function(e, r, t) {
                    if (Te.currentCtx) {
                        var n = Te.buffers[r];
                        if (n && 0 !== r) switch (t) {
                            case 8193:
                                return n.frequency;
                            case 8194:
                                return 8 * n.bytesPerSample;
                            case 8195:
                                return n.channels;
                            case 8196:
                                return n.length * n.bytesPerSample * n.channels;
                            case 8213:
                                return 0 === n.length ? [0, 0] : [(n.audioBuf._loopStart || 0) * n.frequency, (n.audioBuf._loopEnd || n.length) * n.frequency];
                            default:
                                return Te.currentCtx.err = 40962, null
                        } else Te.currentCtx.err = 40961
                    }
                },
                setBufferParam: function(e, r, t, n) {
                    if (Te.currentCtx) {
                        var o = Te.buffers[r];
                        if (o && 0 !== r)
                            if (null !== n) switch (t) {
                                case 8196:
                                    if (0 !== n) return void(Te.currentCtx.err = 40963);
                                    break;
                                case 8213:
                                    if (n[0] < 0 || n[0] > o.length || n[1] < 0 || n[1] > o.Length || n[0] >= n[1]) return void(Te.currentCtx.err = 40963);
                                    if (o.refCount > 0) return void(Te.currentCtx.err = 40964);
                                    o.audioBuf && (o.audioBuf._loopStart = n[0] / o.frequency, o.audioBuf._loopEnd = n[1] / o.frequency);
                                    break;
                                default:
                                    return void(Te.currentCtx.err = 40962)
                            } else Te.currentCtx.err = 40962;
                            else Te.currentCtx.err = 40961
                    }
                },
                getSourceParam: function(e, r, t) {
                    if (!Te.currentCtx) return null;
                    var n = Te.currentCtx.sources[r];
                    if (!n) return Te.currentCtx.err = 40961, null;
                    switch (t) {
                        case 514:
                            return n.relative;
                        case 4097:
                            return n.coneInnerAngle;
                        case 4098:
                            return n.coneOuterAngle;
                        case 4099:
                            return n.pitch;
                        case 4100:
                            return n.position;
                        case 4101:
                            return n.direction;
                        case 4102:
                            return n.velocity;
                        case 4103:
                            return n.looping;
                        case 4105:
                            return 4136 === n.type ? n.bufQueue[0].id : 0;
                        case 4106:
                            return n.gain.gain.value;
                        case 4109:
                            return n.minGain;
                        case 4110:
                            return n.maxGain;
                        case 4112:
                            return n.state;
                        case 4117:
                            return 1 === n.bufQueue.length && 0 === n.bufQueue[0].id ? 0 : n.bufQueue.length;
                        case 4118:
                            return 1 === n.bufQueue.length && 0 === n.bufQueue[0].id || n.looping ? 0 : n.bufsProcessed;
                        case 4128:
                            return n.refDistance;
                        case 4129:
                            return n.rolloffFactor;
                        case 4130:
                            return n.coneOuterGain;
                        case 4131:
                            return n.maxDistance;
                        case 4132:
                            return Te.sourceTell(n);
                        case 4133:
                            return (o = Te.sourceTell(n)) > 0 && (o *= n.bufQueue[0].frequency), o;
                        case 4134:
                            var o;
                            return (o = Te.sourceTell(n)) > 0 && (o *= n.bufQueue[0].frequency * n.bufQueue[0].bytesPerSample), o;
                        case 4135:
                            return n.type;
                        case 4628:
                            return n.spatialize;
                        case 8201:
                            for (var a = 0, i = 0, u = 0; u < n.bufQueue.length; u++) a += n.bufQueue[u].length, 0 !== n.bufQueue[u].id && (i = n.bufQueue[u].bytesPerSample * n.bufQueue[u].channels);
                            return a * i;
                        case 8202:
                            for (a = 0, u = 0; u < n.bufQueue.length; u++) a += n.bufQueue[u].length;
                            return a;
                        case 8203:
                            return Te.sourceDuration(n);
                        case 53248:
                            return n.distanceModel;
                        default:
                            return Te.currentCtx.err = 40962, null
                    }
                },
                setSourceParam: function(e, r, t, n) {
                    if (Te.currentCtx) {
                        var o = Te.currentCtx.sources[r];
                        if (o)
                            if (null !== n) switch (t) {
                                case 514:
                                    if (1 === n) o.relative = !0, Te.updateSourceSpace(o);
                                    else {
                                        if (0 !== n) return void(Te.currentCtx.err = 40963);
                                        o.relative = !1, Te.updateSourceSpace(o)
                                    }
                                    break;
                                case 4097:
                                    if (!Number.isFinite(n)) return void(Te.currentCtx.err = 40963);
                                    o.coneInnerAngle = n, o.panner && (o.panner.coneInnerAngle = n % 360);
                                    break;
                                case 4098:
                                    if (!Number.isFinite(n)) return void(Te.currentCtx.err = 40963);
                                    o.coneOuterAngle = n, o.panner && (o.panner.coneOuterAngle = n % 360);
                                    break;
                                case 4099:
                                    if (!Number.isFinite(n) || n <= 0) return void(Te.currentCtx.err = 40963);
                                    if (o.pitch === n) break;
                                    o.pitch = n, Te.updateSourceRate(o);
                                    break;
                                case 4100:
                                    if (!Number.isFinite(n[0]) || !Number.isFinite(n[1]) || !Number.isFinite(n[2])) return void(Te.currentCtx.err = 40963);
                                    o.position[0] = n[0], o.position[1] = n[1], o.position[2] = n[2], Te.updateSourceSpace(o);
                                    break;
                                case 4101:
                                    if (!Number.isFinite(n[0]) || !Number.isFinite(n[1]) || !Number.isFinite(n[2])) return void(Te.currentCtx.err = 40963);
                                    o.direction[0] = n[0], o.direction[1] = n[1], o.direction[2] = n[2], Te.updateSourceSpace(o);
                                    break;
                                case 4102:
                                    if (!Number.isFinite(n[0]) || !Number.isFinite(n[1]) || !Number.isFinite(n[2])) return void(Te.currentCtx.err = 40963);
                                    o.velocity[0] = n[0], o.velocity[1] = n[1], o.velocity[2] = n[2], Te.updateSourceSpace(o);
                                    break;
                                case 4103:
                                    if (1 === n) o.looping = !0, Te.updateSourceTime(o), 4136 === o.type && o.audioQueue.length > 0 && ((a = o.audioQueue[0]).loop = !0, a._duration = Number.POSITIVE_INFINITY);
                                    else {
                                        if (0 !== n) return void(Te.currentCtx.err = 40963);
                                        o.looping = !1;
                                        var a, i = Te.updateSourceTime(o);
                                        4136 === o.type && o.audioQueue.length > 0 && ((a = o.audioQueue[0]).loop = !1, a._duration = o.bufQueue[0].audioBuf.duration / o.playbackRate, a._startTime = i - o.bufOffset / o.playbackRate)
                                    }
                                    break;
                                case 4105:
                                    if (4114 === o.state || 4115 === o.state) return void(Te.currentCtx.err = 40964);
                                    if (0 === n) {
                                        for (var u = 0; u < o.bufQueue.length; u++) o.bufQueue[u].refCount--;
                                        o.bufQueue.length = 1, o.bufQueue[0] = Te.buffers[0], o.bufsProcessed = 0, o.type = 4144
                                    } else {
                                        if (!(d = Te.buffers[n])) return void(Te.currentCtx.err = 40963);
                                        for (u = 0; u < o.bufQueue.length; u++) o.bufQueue[u].refCount--;
                                        o.bufQueue.length = 0, d.refCount++, o.bufQueue = [d], o.bufsProcessed = 0, o.type = 4136
                                    }
                                    Te.initSourcePanner(o), Te.scheduleSourceAudio(o);
                                    break;
                                case 4106:
                                    if (!Number.isFinite(n) || n < 0) return void(Te.currentCtx.err = 40963);
                                    o.gain.gain.value = n;
                                    break;
                                case 4109:
                                    if (!Number.isFinite(n) || n < 0 || n > Math.min(o.maxGain, 1)) return void(Te.currentCtx.err = 40963);
                                    o.minGain = n;
                                    break;
                                case 4110:
                                    if (!Number.isFinite(n) || n < Math.max(0, o.minGain) || n > 1) return void(Te.currentCtx.err = 40963);
                                    o.maxGain = n;
                                    break;
                                case 4128:
                                    if (!Number.isFinite(n) || n < 0) return void(Te.currentCtx.err = 40963);
                                    o.refDistance = n, o.panner && (o.panner.refDistance = n);
                                    break;
                                case 4129:
                                    if (!Number.isFinite(n) || n < 0) return void(Te.currentCtx.err = 40963);
                                    o.rolloffFactor = n, o.panner && (o.panner.rolloffFactor = n);
                                    break;
                                case 4130:
                                    if (!Number.isFinite(n) || n < 0 || n > 1) return void(Te.currentCtx.err = 40963);
                                    o.coneOuterGain = n, o.panner && (o.panner.coneOuterGain = n);
                                    break;
                                case 4131:
                                    if (!Number.isFinite(n) || n < 0) return void(Te.currentCtx.err = 40963);
                                    o.maxDistance = n, o.panner && (o.panner.maxDistance = n);
                                    break;
                                case 4132:
                                    if (n < 0 || n > Te.sourceDuration(o)) return void(Te.currentCtx.err = 40963);
                                    Te.sourceSeek(o, n);
                                    break;
                                case 4133:
                                    if ((f = Te.sourceDuration(o)) > 0) {
                                        var s;
                                        for (var c in o.bufQueue)
                                            if (c) {
                                                s = o.bufQueue[c].frequency;
                                                break
                                            } n /= s
                                    }
                                    if (n < 0 || n > f) return void(Te.currentCtx.err = 40963);
                                    Te.sourceSeek(o, n);
                                    break;
                                case 4134:
                                    var f;
                                    if ((f = Te.sourceDuration(o)) > 0) {
                                        var l;
                                        for (var c in o.bufQueue)
                                            if (c) {
                                                var d;
                                                l = (d = o.bufQueue[c]).frequency * d.bytesPerSample * d.channels;
                                                break
                                            } n /= l
                                    }
                                    if (n < 0 || n > f) return void(Te.currentCtx.err = 40963);
                                    Te.sourceSeek(o, n);
                                    break;
                                case 4628:
                                    if (0 !== n && 1 !== n && 2 !== n) return void(Te.currentCtx.err = 40963);
                                    o.spatialize = n, Te.initSourcePanner(o);
                                    break;
                                case 8201:
                                case 8202:
                                case 8203:
                                    Te.currentCtx.err = 40964;
                                    break;
                                case 53248:
                                    switch (n) {
                                        case 0:
                                        case 53249:
                                        case 53250:
                                        case 53251:
                                        case 53252:
                                        case 53253:
                                        case 53254:
                                            o.distanceModel = n, Te.currentCtx.sourceDistanceModel && Te.updateContextGlobal(Te.currentCtx);
                                            break;
                                        default:
                                            return void(Te.currentCtx.err = 40963)
                                    }
                                    break;
                                default:
                                    return void(Te.currentCtx.err = 40962)
                            } else Te.currentCtx.err = 40962;
                            else Te.currentCtx.err = 40961
                    }
                },
                captures: {},
                sharedCaptureAudioCtx: null,
                requireValidCaptureDevice: function(e, r) {
                    if (0 === e) return Te.alcErr = 40961, null;
                    var t = Te.captures[e];
                    return t ? t.mediaStreamError ? (Te.alcErr = 40961, null) : t : (Te.alcErr = 40961, null)
                }
            };

        function Ie(e, r, t) {
            switch (r) {
                case 514:
                case 4097:
                case 4098:
                case 4103:
                case 4105:
                case 4128:
                case 4129:
                case 4131:
                case 4132:
                case 4133:
                case 4134:
                case 4628:
                case 8201:
                case 8202:
                case 53248:
                    Te.setSourceParam("alSourcei", e, r, t);
                    break;
                default:
                    Te.setSourceParam("alSourcei", e, r, null)
            }
        }
        var Re = {
                errorCode: 12288,
                defaultDisplayInitialized: !1,
                currentContext: 0,
                currentReadSurface: 0,
                currentDrawSurface: 0,
                contextAttributes: {
                    alpha: !1,
                    depth: !1,
                    stencil: !1,
                    antialias: !1
                },
                stringCache: {},
                setErrorCode: function(e) {
                    Re.errorCode = e
                },
                chooseConfig: function(e, r, t, n, o) {
                    if (62e3 != e) return Re.setErrorCode(12296), 0;
                    if (r)
                        for (;;) {
                            var a = D[r >> 2];
                            if (12321 == a) {
                                var i = D[r + 4 >> 2];
                                Re.contextAttributes.alpha = i > 0
                            } else if (12325 == a) {
                                var u = D[r + 4 >> 2];
                                Re.contextAttributes.depth = u > 0
                            } else if (12326 == a) {
                                var s = D[r + 4 >> 2];
                                Re.contextAttributes.stencil = s > 0
                            } else if (12337 == a) {
                                var c = D[r + 4 >> 2];
                                Re.contextAttributes.antialias = c > 0
                            } else if (12338 == a) c = D[r + 4 >> 2], Re.contextAttributes.antialias = 1 == c;
                            else if (12544 == a) {
                                var f = D[r + 4 >> 2];
                                Re.contextAttributes.lowLatency = 12547 != f
                            } else if (12344 == a) break;
                            r += 8
                        }
                    return t && n || o ? (o && (D[o >> 2] = 1), t && n > 0 && (D[t >> 2] = 62002), Re.setErrorCode(12288), 1) : (Re.setErrorCode(12300), 0)
                }
            },
            Me = {
                counter: 1,
                buffers: [],
                programs: [],
                framebuffers: [],
                renderbuffers: [],
                textures: [],
                shaders: [],
                vaos: [],
                contexts: [],
                offscreenCanvases: {},
                queries: [],
                samplers: [],
                transformFeedbacks: [],
                syncs: [],
                byteSizeByTypeRoot: 5120,
                byteSizeByType: [1, 1, 2, 2, 4, 4, 4, 2, 3, 4, 8],
                stringCache: {},
                stringiCache: {},
                unpackAlignment: 4,
                recordError: function(e) {
                    Me.lastError || (Me.lastError = e)
                },
                getNewId: function(e) {
                    for (var r = Me.counter++, t = e.length; t < r; t++) e[t] = null;
                    return r
                },
                MAX_TEMP_BUFFER_SIZE: 2097152,
                numTempVertexBuffersPerSize: 64,
                log2ceilLookup: function(e) {
                    return 32 - Math.clz32(0 === e ? 0 : e - 1)
                },
                generateTempBuffers: function(e, r) {
                    var t = Me.log2ceilLookup(Me.MAX_TEMP_BUFFER_SIZE);
                    r.tempVertexBufferCounters1 = [], r.tempVertexBufferCounters2 = [], r.tempVertexBufferCounters1.length = r.tempVertexBufferCounters2.length = t + 1, r.tempVertexBuffers1 = [], r.tempVertexBuffers2 = [], r.tempVertexBuffers1.length = r.tempVertexBuffers2.length = t + 1, r.tempIndexBuffers = [], r.tempIndexBuffers.length = t + 1;
                    for (var n = 0; n <= t; ++n) {
                        r.tempIndexBuffers[n] = null, r.tempVertexBufferCounters1[n] = r.tempVertexBufferCounters2[n] = 0;
                        var o = Me.numTempVertexBuffersPerSize;
                        r.tempVertexBuffers1[n] = [], r.tempVertexBuffers2[n] = [];
                        var a = r.tempVertexBuffers1[n],
                            i = r.tempVertexBuffers2[n];
                        a.length = i.length = o;
                        for (var u = 0; u < o; ++u) a[u] = i[u] = null
                    }
                    if (e) {
                        r.tempQuadIndexBuffer = Mr.createBuffer(), r.GLctx.bindBuffer(34963, r.tempQuadIndexBuffer);
                        for (var s = Me.MAX_TEMP_BUFFER_SIZE >> 1, c = new Uint16Array(s), f = (n = 0, 0); c[n++] = f, !(n >= s || (c[n++] = f + 1, n >= s) || (c[n++] = f + 2, n >= s) || (c[n++] = f, n >= s) || (c[n++] = f + 2, n >= s) || (c[n++] = f + 3, n >= s));) f += 4;
                        r.GLctx.bufferData(34963, c, 35044), r.GLctx.bindBuffer(34963, null)
                    }
                },
                getTempVertexBuffer: function(e) {
                    var r = Me.log2ceilLookup(e),
                        t = Me.currentContext.tempVertexBuffers1[r],
                        n = Me.currentContext.tempVertexBufferCounters1[r];
                    Me.currentContext.tempVertexBufferCounters1[r] = Me.currentContext.tempVertexBufferCounters1[r] + 1 & Me.numTempVertexBuffersPerSize - 1;
                    var o = t[n];
                    if (o) return o;
                    var a = Mr.getParameter(34964);
                    return t[n] = Mr.createBuffer(), Mr.bindBuffer(34962, t[n]), Mr.bufferData(34962, 1 << r, 35048), Mr.bindBuffer(34962, a), t[n]
                },
                getTempIndexBuffer: function(e) {
                    var r = Me.log2ceilLookup(e),
                        t = Me.currentContext.tempIndexBuffers[r];
                    if (t) return t;
                    var n = Mr.getParameter(34965);
                    return Me.currentContext.tempIndexBuffers[r] = Mr.createBuffer(), Mr.bindBuffer(34963, Me.currentContext.tempIndexBuffers[r]), Mr.bufferData(34963, 1 << r, 35048), Mr.bindBuffer(34963, n), Me.currentContext.tempIndexBuffers[r]
                },
                newRenderingFrameStarted: function() {
                    if (Me.currentContext) {
                        var e = Me.currentContext.tempVertexBuffers1;
                        Me.currentContext.tempVertexBuffers1 = Me.currentContext.tempVertexBuffers2, Me.currentContext.tempVertexBuffers2 = e, e = Me.currentContext.tempVertexBufferCounters1, Me.currentContext.tempVertexBufferCounters1 = Me.currentContext.tempVertexBufferCounters2, Me.currentContext.tempVertexBufferCounters2 = e;
                        for (var r = Me.log2ceilLookup(Me.MAX_TEMP_BUFFER_SIZE), t = 0; t <= r; ++t) Me.currentContext.tempVertexBufferCounters1[t] = 0
                    }
                },
                getSource: function(e, r, t, n) {
                    for (var o = "", a = 0; a < r; ++a) {
                        var i = n ? D[n + 4 * a >> 2] : -1;
                        o += M(D[t + 4 * a >> 2], i < 0 ? void 0 : i)
                    }
                    return o
                },
                calcBufLength: function(e, r, t, n) {
                    return t > 0 ? n * t : e * Me.byteSizeByType[r - Me.byteSizeByTypeRoot] * n
                },
                usedTempBuffers: [],
                preDrawHandleClientVertexAttribBindings: function(e) {
                    Me.resetBufferBinding = !1;
                    for (var r = 0; r < Me.currentContext.maxVertexAttribs; ++r) {
                        var t = Me.currentContext.clientBuffers[r];
                        if (t.clientside && t.enabled) {
                            Me.resetBufferBinding = !0;
                            var n = Me.calcBufLength(t.size, t.type, t.stride, e),
                                o = Me.getTempVertexBuffer(n);
                            Mr.bindBuffer(34962, o), Mr.bufferSubData(34962, 0, L.subarray(t.ptr, t.ptr + n)), t.vertexAttribPointerAdaptor.call(Mr, r, t.size, t.type, t.normalized, t.stride, 0)
                        }
                    }
                },
                postDrawHandleClientVertexAttribBindings: function() {
                    Me.resetBufferBinding && Mr.bindBuffer(34962, Me.buffers[Mr.currentArrayBufferBinding])
                },
                createContext: function(e, r) {
                    e.getContextSafariWebGL2Fixed || (e.getContextSafariWebGL2Fixed = e.getContext, e.getContext = function(r, t) {
                        var n = e.getContextSafariWebGL2Fixed(r, t);
                        return "webgl" == r == n instanceof WebGLRenderingContext ? n : null
                    });
                    var t = r.majorVersion > 1 ? e.getContext("webgl2", r) : e.getContext("webgl", r);
                    return t ? Me.registerContext(t, r) : 0
                },
                registerContext: function(e, r) {
                    var t = Me.getNewId(Me.contexts),
                        n = {
                            handle: t,
                            attributes: r,
                            version: r.majorVersion,
                            GLctx: e
                        };
                    e.canvas && (e.canvas.GLctxObject = n), Me.contexts[t] = n, (void 0 === r.enableExtensionsByDefault || r.enableExtensionsByDefault) && Me.initExtensions(n), n.maxVertexAttribs = n.GLctx.getParameter(34921), n.clientBuffers = [];
                    for (var o = 0; o < n.maxVertexAttribs; o++) n.clientBuffers[o] = {
                        enabled: !1,
                        clientside: !1,
                        size: 0,
                        type: 0,
                        normalized: 0,
                        stride: 0,
                        ptr: 0,
                        vertexAttribPointerAdaptor: null
                    };
                    return Me.generateTempBuffers(!1, n), t
                },
                makeContextCurrent: function(e) {
                    return Me.currentContext = Me.contexts[e], r.ctx = Mr = Me.currentContext && Me.currentContext.GLctx, !(e && !Mr)
                },
                getContext: function(e) {
                    return Me.contexts[e]
                },
                deleteContext: function(e) {
                    Me.currentContext === Me.contexts[e] && (Me.currentContext = null), "object" == typeof Oe && Oe.removeAllHandlersOnTarget(Me.contexts[e].GLctx.canvas), Me.contexts[e] && Me.contexts[e].GLctx.canvas && (Me.contexts[e].GLctx.canvas.GLctxObject = void 0), Me.contexts[e] = null
                },
                initExtensions: function(e) {
                    if (e || (e = Me.currentContext), !e.initExtensionsDone) {
                        e.initExtensionsDone = !0;
                        var r, t = e.GLctx;
                        ! function(e) {
                            var r = e.getExtension("ANGLE_instanced_arrays");
                            r && (e.vertexAttribDivisor = function(e, t) {
                                r.vertexAttribDivisorANGLE(e, t)
                            }, e.drawArraysInstanced = function(e, t, n, o) {
                                r.drawArraysInstancedANGLE(e, t, n, o)
                            }, e.drawElementsInstanced = function(e, t, n, o, a) {
                                r.drawElementsInstancedANGLE(e, t, n, o, a)
                            })
                        }(t),
                        function(e) {
                            var r = e.getExtension("OES_vertex_array_object");
                            r && (e.createVertexArray = function() {
                                return r.createVertexArrayOES()
                            }, e.deleteVertexArray = function(e) {
                                r.deleteVertexArrayOES(e)
                            }, e.bindVertexArray = function(e) {
                                r.bindVertexArrayOES(e)
                            }, e.isVertexArray = function(e) {
                                return r.isVertexArrayOES(e)
                            })
                        }(t),
                        function(e) {
                            var r = e.getExtension("WEBGL_draw_buffers");
                            r && (e.drawBuffers = function(e, t) {
                                r.drawBuffersWEBGL(e, t)
                            })
                        }(t), (r = t).dibvbi = r.getExtension("WEBGL_draw_instanced_base_vertex_base_instance"),
                            function(e) {
                                e.mdibvbi = e.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")
                            }(t), e.version >= 2 && (t.disjointTimerQueryExt = t.getExtension("EXT_disjoint_timer_query_webgl2")), (e.version < 2 || !t.disjointTimerQueryExt) && (t.disjointTimerQueryExt = t.getExtension("EXT_disjoint_timer_query")),
                            function(e) {
                                e.multiDrawWebgl = e.getExtension("WEBGL_multi_draw")
                            }(t), (t.getSupportedExtensions() || []).forEach((function(e) {
                                e.includes("lose_context") || e.includes("debug") || t.getExtension(e)
                            }))
                    }
                }
            },
            Ne = [],
            Oe = {
                inEventHandler: 0,
                removeAllEventListeners: function() {
                    for (var e = Oe.eventHandlers.length - 1; e >= 0; --e) Oe._removeHandler(e);
                    Oe.eventHandlers = [], Oe.deferredCalls = []
                },
                registerRemoveEventListeners: function() {
                    Oe.removeEventListenersRegistered || (X.push(Oe.removeAllEventListeners), Oe.removeEventListenersRegistered = !0)
                },
                deferredCalls: [],
                deferCall: function(e, r, t) {
                    function n(e, r) {
                        if (e.length != r.length) return !1;
                        for (var t in e)
                            if (e[t] != r[t]) return !1;
                        return !0
                    }
                    for (var o in Oe.deferredCalls) {
                        var a = Oe.deferredCalls[o];
                        if (a.targetFunction == e && n(a.argsList, t)) return
                    }
                    Oe.deferredCalls.push({
                        targetFunction: e,
                        precedence: r,
                        argsList: t
                    }), Oe.deferredCalls.sort((function(e, r) {
                        return e.precedence < r.precedence
                    }))
                },
                removeDeferredCalls: function(e) {
                    for (var r = 0; r < Oe.deferredCalls.length; ++r) Oe.deferredCalls[r].targetFunction == e && (Oe.deferredCalls.splice(r, 1), --r)
                },
                canPerformEventHandlerRequests: function() {
                    return Oe.inEventHandler && Oe.currentEventHandler.allowsDeferredCalls
                },
                runDeferredCalls: function() {
                    if (Oe.canPerformEventHandlerRequests())
                        for (var e = 0; e < Oe.deferredCalls.length; ++e) {
                            var r = Oe.deferredCalls[e];
                            Oe.deferredCalls.splice(e, 1), --e, r.targetFunction.apply(null, r.argsList)
                        }
                },
                eventHandlers: [],
                removeAllHandlersOnTarget: function(e, r) {
                    for (var t = 0; t < Oe.eventHandlers.length; ++t) Oe.eventHandlers[t].target != e || r && r != Oe.eventHandlers[t].eventTypeString || Oe._removeHandler(t--)
                },
                _removeHandler: function(e) {
                    var r = Oe.eventHandlers[e];
                    r.target.removeEventListener(r.eventTypeString, r.eventListenerFunc, r.useCapture), Oe.eventHandlers.splice(e, 1)
                },
                registerOrRemoveHandler: function(e) {
                    var r = function(r) {
                        ++Oe.inEventHandler, Oe.currentEventHandler = e, Oe.runDeferredCalls(), e.handlerFunc(r), Oe.runDeferredCalls(), --Oe.inEventHandler
                    };
                    if (e.callbackfunc) e.eventListenerFunc = r, e.target.addEventListener(e.eventTypeString, r, e.useCapture), Oe.eventHandlers.push(e), Oe.registerRemoveEventListeners();
                    else
                        for (var t = 0; t < Oe.eventHandlers.length; ++t) Oe.eventHandlers[t].target == e.target && Oe.eventHandlers[t].eventTypeString == e.eventTypeString && Oe._removeHandler(t--)
                },
                getNodeNameForTarget: function(e) {
                    return e ? e == window ? "#window" : e == screen ? "#screen" : e && e.nodeName ? e.nodeName : "" : ""
                },
                fullscreenEnabled: function() {
                    return document.fullscreenEnabled || document.webkitFullscreenEnabled
                }
            },
            Ue = {},
            ze = [0, document, window];

        function je(e) {
            var r;
            return e = (r = e) > 2 ? M(r) : r, ze[e] || document.querySelector(e)
        }

        function qe(e) {
            return je(e)
        }

        function Ge(e, r, t) {
            var n = qe(e);
            if (!n) return -4;
            D[r >> 2] = n.width, D[t >> 2] = n.height
        }

        function Qe(e) {
            return de((function() {
                var r = Zr(8),
                    t = r + 4,
                    n = Zr(e.id.length + 1);
                return O(e.id, n, e.id.length + 1), Ge(n, r, t), [D[r >> 2], D[t >> 2]]
            }))
        }

        function He(e, r, t) {
            var n = qe(e);
            return n ? (n.width = r, n.height = t, 0) : -4
        }

        function Ve(e, r, t) {
            e.controlTransferredOffscreen ? de((function() {
                var n = Zr(e.id.length + 1);
                O(e.id, n, e.id.length + 1), He(n, r, t)
            })) : (e.width = r, e.height = t)
        }

        function Xe(e, r, t) {
            e.style.paddingLeft = e.style.paddingRight = t + "px", e.style.paddingTop = e.style.paddingBottom = r + "px"
        }

        function We(e) {
            return ze.indexOf(e) < 0 ? e.getBoundingClientRect() : {
                left: 0,
                top: 0
            }
        }

        function Ye(e, r) {
            if (0 == r.scaleMode && 0 == r.canvasResolutionScaleMode || function(e, r) {
                    var t = function(e) {
                            var r = Qe(e),
                                t = r[0],
                                n = r[1],
                                o = e.style.width,
                                a = e.style.height,
                                i = e.style.backgroundColor,
                                u = document.body.style.backgroundColor,
                                s = e.style.paddingLeft,
                                c = e.style.paddingRight,
                                f = e.style.paddingTop,
                                l = e.style.paddingBottom,
                                d = e.style.marginLeft,
                                m = e.style.marginRight,
                                p = e.style.marginTop,
                                v = e.style.marginBottom,
                                g = document.body.style.margin,
                                h = document.documentElement.style.overflow,
                                b = document.body.scroll,
                                y = e.style.imageRendering;

                            function w() {
                                document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement || (document.removeEventListener("fullscreenchange", w), document.removeEventListener("webkitfullscreenchange", w), Ve(e, t, n), e.style.width = o, e.style.height = a, e.style.backgroundColor = i, u || (document.body.style.backgroundColor = "white"), document.body.style.backgroundColor = u, e.style.paddingLeft = s, e.style.paddingRight = c, e.style.paddingTop = f, e.style.paddingBottom = l, e.style.marginLeft = d, e.style.marginRight = m, e.style.marginTop = p, e.style.marginBottom = v, document.body.style.margin = g, document.documentElement.style.overflow = h, document.body.scroll = b, e.style.imageRendering = y, e.GLctxObject && e.GLctxObject.GLctx.viewport(0, 0, t, n), Ue.canvasResizedCallback && pe(Ue.canvasResizedCallback)(37, 0, Ue.canvasResizedCallbackUserData))
                            }
                            return document.addEventListener("fullscreenchange", w), document.addEventListener("webkitfullscreenchange", w), w
                        }(e),
                        n = r.softFullscreen ? innerWidth : screen.width,
                        o = r.softFullscreen ? innerHeight : screen.height,
                        a = We(e),
                        i = a.width,
                        u = a.height,
                        s = Qe(e),
                        c = s[0],
                        f = s[1];
                    if (3 == r.scaleMode) Xe(e, (o - u) / 2, (n - i) / 2), n = i, o = u;
                    else if (2 == r.scaleMode)
                        if (n * f < c * o) {
                            var l = f * n / c;
                            Xe(e, (o - l) / 2, 0), o = l
                        } else {
                            var d = c * o / f;
                            Xe(e, 0, (n - d) / 2), n = d
                        } e.style.backgroundColor || (e.style.backgroundColor = "black"), document.body.style.backgroundColor || (document.body.style.backgroundColor = "black"), e.style.width = n + "px", e.style.height = o + "px", 1 == r.filteringMode && (e.style.imageRendering = "optimizeSpeed", e.style.imageRendering = "-moz-crisp-edges", e.style.imageRendering = "-o-crisp-edges", e.style.imageRendering = "-webkit-optimize-contrast", e.style.imageRendering = "optimize-contrast", e.style.imageRendering = "crisp-edges", e.style.imageRendering = "pixelated");
                    var m = 2 == r.canvasResolutionScaleMode ? devicePixelRatio : 1;
                    if (0 != r.canvasResolutionScaleMode) {
                        var p = n * m | 0,
                            v = o * m | 0;
                        Ve(e, p, v), e.GLctxObject && e.GLctxObject.GLctx.viewport(0, 0, p, v)
                    }
                }(e, r), e.requestFullscreen) e.requestFullscreen();
            else {
                if (!e.webkitRequestFullscreen) return Oe.fullscreenEnabled() ? -3 : -1;
                e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
            }
            return Ue = r, r.canvasResizedCallback && pe(r.canvasResizedCallback)(37, 0, r.canvasResizedCallbackUserData), 0
        }

        function Ke(e) {
            if (e.requestPointerLock) e.requestPointerLock();
            else {
                if (!e.msRequestPointerLock) return document.body.requestPointerLock || document.body.msRequestPointerLock ? -3 : -1;
                e.msRequestPointerLock()
            }
            return 0
        }

        function $e(e) {
            var r = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement,
                t = !!r;
            D[e >> 2] = t, D[e + 4 >> 2] = Oe.fullscreenEnabled();
            var n = t ? r : Oe.previousFullscreenElement,
                o = Oe.getNodeNameForTarget(n),
                a = n && n.id ? n.id : "";
            O(o, e + 8, 128), O(a, e + 136, 128), D[e + 264 >> 2] = n ? n.clientWidth : 0, D[e + 268 >> 2] = n ? n.clientHeight : 0, D[e + 272 >> 2] = screen.width, D[e + 276 >> 2] = screen.height, t && (Oe.previousFullscreenElement = r)
        }

        function Ze(e, r) {
            T[e >> 3] = r.timestamp;
            for (var t = 0; t < r.axes.length; ++t) T[e + 8 * t + 16 >> 3] = r.axes[t];
            for (t = 0; t < r.buttons.length; ++t) "object" == typeof r.buttons[t] ? T[e + 8 * t + 528 >> 3] = r.buttons[t].value : T[e + 8 * t + 528 >> 3] = r.buttons[t];
            for (t = 0; t < r.buttons.length; ++t) "object" == typeof r.buttons[t] ? D[e + 4 * t + 1040 >> 2] = r.buttons[t].pressed : D[e + 4 * t + 1040 >> 2] = 1 == r.buttons[t];
            D[e + 1296 >> 2] = r.connected, D[e + 1300 >> 2] = r.index, D[e + 8 >> 2] = r.axes.length, D[e + 12 >> 2] = r.buttons.length, O(r.id, e + 1304, 64), O(r.mapping, e + 1368, 64)
        }

        function Je(e, r) {
            return (e >>> 0) + 4294967296 * r
        }
        var er = [];

        function rr(e, r, t, n) {
            var o;
            if (!Mr.currentElementArrayBufferBinding) {
                var a = Me.calcBufLength(1, t, 0, r);
                o = Me.getTempIndexBuffer(a), Mr.bindBuffer(34963, o), Mr.bufferSubData(34963, 0, L.subarray(n, n + a)), n = 0
            }
            Me.preDrawHandleClientVertexAttribBindings(r), Mr.drawElements(e, r, t, n), Me.postDrawHandleClientVertexAttribBindings(r), Mr.currentElementArrayBufferBinding || Mr.bindBuffer(34963, null)
        }

        function tr(e, r, t, n) {
            for (var o = 0; o < e; o++) {
                var a = Mr[t](),
                    i = a && Me.getNewId(n);
                a ? (a.name = i, n[i] = a) : Me.recordError(1282), D[r + 4 * o >> 2] = i
            }
        }

        function nr(e, r, t, n, o, a, i, u) {
            r = Me.programs[r];
            var s = Mr[e](r, t);
            if (s) {
                var c = u && O(s.name, u, n);
                o && (D[o >> 2] = c), a && (D[a >> 2] = s.size), i && (D[i >> 2] = s.type)
            }
        }

        function or(e, r) {
            P[e >> 2] = r, P[e + 4 >> 2] = (r - P[e >> 2]) / 4294967296
        }

        function ar(e, r, t) {
            if (r) {
                var n = void 0;
                switch (e) {
                    case 36346:
                        n = 1;
                        break;
                    case 36344:
                        return void(0 != t && 1 != t && Me.recordError(1280));
                    case 34814:
                    case 36345:
                        n = 0;
                        break;
                    case 34466:
                        var o = Mr.getParameter(34467);
                        n = o ? o.length : 0;
                        break;
                    case 33309:
                        if (Me.currentContext.version < 2) return void Me.recordError(1282);
                        n = 2 * (Mr.getSupportedExtensions() || []).length;
                        break;
                    case 33307:
                    case 33308:
                        if (Me.currentContext.version < 2) return void Me.recordError(1280);
                        n = 33307 == e ? 3 : 0
                }
                if (void 0 === n) {
                    var a = Mr.getParameter(e);
                    switch (typeof a) {
                        case "number":
                            n = a;
                            break;
                        case "boolean":
                            n = a ? 1 : 0;
                            break;
                        case "string":
                            return void Me.recordError(1280);
                        case "object":
                            if (null === a) switch (e) {
                                case 34964:
                                case 35725:
                                case 34965:
                                case 36006:
                                case 36007:
                                case 32873:
                                case 34229:
                                case 36662:
                                case 36663:
                                case 35053:
                                case 35055:
                                case 36010:
                                case 35097:
                                case 35869:
                                case 32874:
                                case 36389:
                                case 35983:
                                case 35368:
                                case 34068:
                                    n = 0;
                                    break;
                                default:
                                    return void Me.recordError(1280)
                            } else {
                                if (a instanceof Float32Array || a instanceof Uint32Array || a instanceof Int32Array || a instanceof Array) {
                                    for (var i = 0; i < a.length; ++i) switch (t) {
                                        case 0:
                                            D[r + 4 * i >> 2] = a[i];
                                            break;
                                        case 2:
                                            F[r + 4 * i >> 2] = a[i];
                                            break;
                                        case 4:
                                            A[r + i >> 0] = a[i] ? 1 : 0
                                    }
                                    return
                                }
                                try {
                                    n = 0 | a.name
                                } catch (r) {
                                    return Me.recordError(1280), void m("GL_INVALID_ENUM in glGet" + t + "v: Unknown object returned from WebGL getParameter(" + e + ")! (error: " + r + ")")
                                }
                            }
                            break;
                        default:
                            return Me.recordError(1280), void m("GL_INVALID_ENUM in glGet" + t + "v: Native code calling glGet" + t + "v(" + e + ") and it returns " + a + " of type " + typeof a + "!")
                    }
                }
                switch (t) {
                    case 1:
                        or(r, n);
                        break;
                    case 0:
                        D[r >> 2] = n;
                        break;
                    case 2:
                        F[r >> 2] = n;
                        break;
                    case 4:
                        A[r >> 0] = n ? 1 : 0
                }
            } else Me.recordError(1281)
        }

        function ir(e, r, t, n) {
            if (t) {
                var o, a = Mr.getIndexedParameter(e, r);
                switch (typeof a) {
                    case "boolean":
                        o = a ? 1 : 0;
                        break;
                    case "number":
                        o = a;
                        break;
                    case "object":
                        if (null === a) switch (e) {
                            case 35983:
                            case 35368:
                                o = 0;
                                break;
                            default:
                                return void Me.recordError(1280)
                        } else {
                            if (!(a instanceof WebGLBuffer)) return void Me.recordError(1280);
                            o = 0 | a.name
                        }
                        break;
                    default:
                        return void Me.recordError(1280)
                }
                switch (n) {
                    case 1:
                        or(t, o);
                        break;
                    case 0:
                        D[t >> 2] = o;
                        break;
                    case 2:
                        F[t >> 2] = o;
                        break;
                    case 4:
                        A[t >> 0] = o ? 1 : 0;
                        break;
                    default:
                        throw "internal emscriptenWebGLGetIndexed() error, bad type: " + n
                }
            } else Me.recordError(1281)
        }

        function ur(e) {
            var r = U(e) + 1,
                t = Vr(r);
            return O(e, t, r), t
        }

        function sr(e) {
            return parseInt(e)
        }

        function cr(e) {
            return "]" == e.slice(-1) && e.lastIndexOf("[")
        }

        function fr(e) {
            var r, t, n = e.uniformLocsById,
                o = e.uniformSizeAndIdsByName;
            if (!n)
                for (e.uniformLocsById = n = {}, e.uniformArrayNamesById = {}, r = 0; r < Mr.getProgramParameter(e, 35718); ++r) {
                    var a = Mr.getActiveUniform(e, r),
                        i = a.name,
                        u = a.size,
                        s = cr(i),
                        c = s > 0 ? i.slice(0, s) : i,
                        f = e.uniformIdCounter;
                    for (e.uniformIdCounter += u, o[c] = [u, f], t = 0; t < u; ++t) n[f] = t, e.uniformArrayNamesById[f++] = c
                }
        }

        function lr(e) {
            var r = Mr.currentProgram;
            if (r) {
                var t = r.uniformLocsById[e];
                return "number" == typeof t && (r.uniformLocsById[e] = t = Mr.getUniformLocation(r, r.uniformArrayNamesById[e] + (t > 0 ? "[" + t + "]" : ""))), t
            }
            Me.recordError(1282)
        }

        function dr(e, r, t, n) {
            if (t) {
                fr(e = Me.programs[e]);
                var o = Mr.getUniform(e, lr(r));
                if ("number" == typeof o || "boolean" == typeof o) switch (n) {
                    case 0:
                        D[t >> 2] = o;
                        break;
                    case 2:
                        F[t >> 2] = o
                } else
                    for (var a = 0; a < o.length; a++) switch (n) {
                        case 0:
                            D[t + 4 * a >> 2] = o[a];
                            break;
                        case 2:
                            F[t + 4 * a >> 2] = o[a]
                    }
            } else Me.recordError(1281)
        }

        function mr(e, r, t, n) {
            if (t) {
                Me.currentContext.clientBuffers[e].enabled && m("glGetVertexAttrib*v on client-side array: not supported, bad data returned");
                var o = Mr.getVertexAttrib(e, r);
                if (34975 == r) D[t >> 2] = o && o.name;
                else if ("number" == typeof o || "boolean" == typeof o) switch (n) {
                    case 0:
                        D[t >> 2] = o;
                        break;
                    case 2:
                        F[t >> 2] = o;
                        break;
                    case 5:
                        D[t >> 2] = Math.fround(o)
                } else
                    for (var a = 0; a < o.length; a++) switch (n) {
                        case 0:
                            D[t + 4 * a >> 2] = o[a];
                            break;
                        case 2:
                            F[t + 4 * a >> 2] = o[a];
                            break;
                        case 5:
                            D[t + 4 * a >> 2] = Math.fround(o[a])
                    }
            } else Me.recordError(1281)
        }

        function pr(e) {
            return 0 == (e -= 5120) ? A : 1 == e ? L : 2 == e ? B : 4 == e ? D : 6 == e ? F : 5 == e || 28922 == e || 28520 == e || 30779 == e || 30782 == e ? P : _
        }

        function vr(e) {
            return 31 - Math.clz32(e.BYTES_PER_ELEMENT)
        }

        function gr(e, r, t, n, o, a) {
            var i = pr(e),
                u = vr(i),
                s = 1 << u,
                c = function(e, r, t, n) {
                    var o;
                    return r * (e * t + (o = n) - 1 & -o)
                }(t, n, function(e) {
                    return {
                        5: 3,
                        6: 4,
                        8: 2,
                        29502: 3,
                        29504: 4,
                        26917: 2,
                        26918: 2,
                        29846: 3,
                        29847: 4
                    } [e - 6402] || 1
                }(r) * s, Me.unpackAlignment);
            return i.subarray(o >> u, o + c >> u)
        }
        var hr = [],
            br = [];

        function yr(e, r) {
            if (e <= 0) return e;
            var t = r <= 32 ? Math.abs(1 << r - 1) : Math.pow(2, r - 1);
            return e >= t && (r <= 32 || e > t) && (e = -2 * t + e), e
        }

        function wr(e, r) {
            return e >= 0 ? e : r <= 32 ? 2 * Math.abs(1 << r - 1) + e : Math.pow(2, r) + e
        }

        function xr(e) {
            if (!e || !e.callee || !e.callee.name) return [null, "", ""];
            e.callee.toString();
            var r = e.callee.name,
                t = "(",
                n = !0;
            for (var o in e) {
                var a = e[o];
                n || (t += ", "), n = !1, t += "number" == typeof a || "string" == typeof a ? a : "(" + typeof a + ")"
            }
            t += ")";
            var i = e.callee.caller;
            return n && (t = ""), [e = i ? i.arguments : [], r, t]
        }

        function Er(e) {
            try {
                return h.grow(e - S.byteLength + 65535 >>> 16), q(h.buffer), 1
            } catch (e) {}
        }

        function kr(e, r, t, n, o, a, i) {
            Oe.focusEvent || (Oe.focusEvent = Vr(256));
            var u = {
                target: je(e),
                eventTypeString: a,
                callbackfunc: n,
                handlerFunc: function(e) {
                    var t = e || event,
                        a = Oe.getNodeNameForTarget(t.target),
                        i = t.target.id ? t.target.id : "",
                        u = Oe.focusEvent;
                    O(a, u + 0, 128), O(i, u + 128, 128), pe(n)(o, u, r) && t.preventDefault()
                },
                useCapture: t
            };
            Oe.registerOrRemoveHandler(u)
        }

        function Cr(e, r, t, n, o, a, i) {
            Oe.fullscreenChangeEvent || (Oe.fullscreenChangeEvent = Vr(280));
            var u = {
                target: e,
                eventTypeString: a,
                callbackfunc: n,
                handlerFunc: function(e) {
                    var t = e || event,
                        a = Oe.fullscreenChangeEvent;
                    $e(a), pe(n)(o, a, r) && t.preventDefault()
                },
                useCapture: t
            };
            Oe.registerOrRemoveHandler(u)
        }

        function Sr(e, r, t, n, o, a, i) {
            Oe.gamepadEvent || (Oe.gamepadEvent = Vr(1432));
            var u = {
                target: je(e),
                allowsDeferredCalls: !0,
                eventTypeString: a,
                callbackfunc: n,
                handlerFunc: function(e) {
                    var t = e || event,
                        a = Oe.gamepadEvent;
                    Ze(a, t.gamepad), pe(n)(o, a, r) && t.preventDefault()
                },
                useCapture: t
            };
            Oe.registerOrRemoveHandler(u)
        }

        function Ar(e, r, t, n, o, a, i) {
            Oe.keyEvent || (Oe.keyEvent = Vr(176));
            var u = {
                target: je(e),
                allowsDeferredCalls: !0,
                eventTypeString: a,
                callbackfunc: n,
                handlerFunc: function(e) {
                    var t = Oe.keyEvent;
                    T[t >> 3] = e.timeStamp;
                    var a = t >> 2;
                    D[a + 2] = e.location, D[a + 3] = e.ctrlKey, D[a + 4] = e.shiftKey, D[a + 5] = e.altKey, D[a + 6] = e.metaKey, D[a + 7] = e.repeat, D[a + 8] = e.charCode, D[a + 9] = e.keyCode, D[a + 10] = e.which, O(e.key || "", t + 44, 32), O(e.code || "", t + 76, 32), O(e.char || "", t + 108, 32), O(e.locale || "", t + 140, 32), pe(n)(o, t, r) && e.preventDefault()
                },
                useCapture: t
            };
            Oe.registerOrRemoveHandler(u)
        }

        function Lr(e, r, t) {
            T[e >> 3] = r.timeStamp;
            var n = e >> 2;
            D[n + 2] = r.screenX, D[n + 3] = r.screenY, D[n + 4] = r.clientX, D[n + 5] = r.clientY, D[n + 6] = r.ctrlKey, D[n + 7] = r.shiftKey, D[n + 8] = r.altKey, D[n + 9] = r.metaKey, B[2 * n + 20] = r.button, B[2 * n + 21] = r.buttons, D[n + 11] = r.movementX, D[n + 12] = r.movementY;
            var o = We(t);
            D[n + 13] = r.clientX - o.left, D[n + 14] = r.clientY - o.top
        }

        function Br(e, r, t, n, o, a, i) {
            Oe.mouseEvent || (Oe.mouseEvent = Vr(72));
            var u = {
                target: e = je(e),
                allowsDeferredCalls: "mousemove" != a && "mouseenter" != a && "mouseleave" != a,
                eventTypeString: a,
                callbackfunc: n,
                handlerFunc: function(t) {
                    var a = t || event;
                    Lr(Oe.mouseEvent, a, e), pe(n)(o, Oe.mouseEvent, r) && a.preventDefault()
                },
                useCapture: t
            };
            Oe.registerOrRemoveHandler(u)
        }

        function _r(e, r, t, n, o, a, i) {
            Oe.pointerlockChangeEvent || (Oe.pointerlockChangeEvent = Vr(260));
            var u = {
                target: e,
                eventTypeString: a,
                callbackfunc: n,
                handlerFunc: function(e) {
                    var t = e || event,
                        a = Oe.pointerlockChangeEvent;
                    ! function(e) {
                        var r = document.pointerLockElement || document.mozPointerLockElement || document.webkitPointerLockElement || document.msPointerLockElement,
                            t = !!r;
                        D[e >> 2] = t;
                        var n = Oe.getNodeNameForTarget(r),
                            o = r && r.id ? r.id : "";
                        O(n, e + 4, 128), O(o, e + 132, 128)
                    }(a), pe(n)(o, a, r) && t.preventDefault()
                },
                useCapture: t
            };
            Oe.registerOrRemoveHandler(u)
        }

        function Dr(e, r, t, n, o, a, i) {
            Oe.touchEvent || (Oe.touchEvent = Vr(1696));
            var u = {
                target: e = je(e),
                allowsDeferredCalls: "touchstart" == a || "touchend" == a,
                eventTypeString: a,
                callbackfunc: n,
                handlerFunc: function(t) {
                    for (var a, i = {}, u = t.touches, s = 0; s < u.length; ++s)(a = u[s]).isChanged = a.onTarget = 0, i[a.identifier] = a;
                    for (s = 0; s < t.changedTouches.length; ++s)(a = t.changedTouches[s]).isChanged = 1, i[a.identifier] = a;
                    for (s = 0; s < t.targetTouches.length; ++s) i[t.targetTouches[s].identifier].onTarget = 1;
                    var c = Oe.touchEvent;
                    T[c >> 3] = t.timeStamp;
                    var f = c >> 2;
                    D[f + 3] = t.ctrlKey, D[f + 4] = t.shiftKey, D[f + 5] = t.altKey, D[f + 6] = t.metaKey, f += 7;
                    var l = We(e),
                        d = 0;
                    for (var s in i)
                        if (a = i[s], D[f + 0] = a.identifier, D[f + 1] = a.screenX, D[f + 2] = a.screenY, D[f + 3] = a.clientX, D[f + 4] = a.clientY, D[f + 5] = a.pageX, D[f + 6] = a.pageY, D[f + 7] = a.isChanged, D[f + 8] = a.onTarget, D[f + 9] = a.clientX - l.left, D[f + 10] = a.clientY - l.top, f += 13, ++d > 31) break;
                    D[c + 8 >> 2] = d, pe(n)(o, c, r) && t.preventDefault()
                },
                useCapture: t
            };
            Oe.registerOrRemoveHandler(u)
        }
        var Pr = {
            xhrs: [],
            setu64: function(e, r) {
                P[e >> 2] = r, P[e + 4 >> 2] = r / 4294967296 | 0
            },
            openDatabase: function(e, r, t, n) {
                try {
                    var o = indexedDB.open(e, r)
                } catch (e) {
                    return n(e)
                }
                o.onupgradeneeded = e => {
                    var r = e.target.result;
                    r.objectStoreNames.contains("FILES") && r.deleteObjectStore("FILES"), r.createObjectStore("FILES")
                }, o.onsuccess = e => t(e.target.result), o.onerror = e => n(e)
            },
            staticInit: function() {
                Pr.openDatabase("emscripten_filesystem", 1, (e => {
                    Pr.dbInstance = e, ae()
                }), (() => {
                    Pr.dbInstance = !1, ae()
                })), "undefined" != typeof ENVIRONMENT_IS_FETCH_WORKER && ENVIRONMENT_IS_FETCH_WORKER || oe()
            }
        };

        function Fr(e, r, t, n, o) {
            var a = P[e + 8 >> 2];
            if (a) {
                var i = M(a),
                    u = e + 112,
                    s = M(u);
                s || (s = "GET"), P[e + 4 >> 2];
                var c = P[u + 52 >> 2],
                    f = P[u + 56 >> 2],
                    l = !!P[u + 60 >> 2],
                    d = (P[u + 64 >> 2], P[u + 68 >> 2]),
                    m = P[u + 72 >> 2],
                    p = P[u + 76 >> 2],
                    v = P[u + 80 >> 2],
                    g = P[u + 84 >> 2],
                    h = P[u + 88 >> 2],
                    b = !!(1 & c),
                    y = !!(2 & c),
                    w = !!(64 & c),
                    x = d ? M(d) : void 0,
                    E = m ? M(m) : void 0,
                    k = new XMLHttpRequest;
                if (k.withCredentials = l, k.open(s, i, !w, x, E), w || (k.timeout = f), k.url_ = i, k.responseType = "arraybuffer", v) {
                    var C = M(v);
                    k.overrideMimeType(C)
                }
                if (p)
                    for (;;) {
                        var S = P[p >> 2];
                        if (!S) break;
                        var A = P[p + 4 >> 2];
                        if (!A) break;
                        p += 8;
                        var B = M(S),
                            D = M(A);
                        k.setRequestHeader(B, D)
                    }
                Pr.xhrs.push(k);
                var F = Pr.xhrs.length;
                P[e + 0 >> 2] = F;
                var T = g && h ? L.slice(g, g + h) : null;
                k.onload = n => {
                    I(b && !y);
                    var o = k.response ? k.response.byteLength : 0;
                    Pr.setu64(e + 24, 0), o && Pr.setu64(e + 32, o), _[e + 40 >> 1] = k.readyState, _[e + 42 >> 1] = k.status, k.statusText && O(k.statusText, e + 44, 64), k.status >= 200 && k.status < 300 ? r && r(e, k, n) : t && t(e, k, n)
                }, k.onerror = r => {
                    I(b);
                    var n = k.status;
                    Pr.setu64(e + 24, 0), Pr.setu64(e + 32, k.response ? k.response.byteLength : 0), _[e + 40 >> 1] = k.readyState, _[e + 42 >> 1] = n, t && t(e, k, r)
                }, k.ontimeout = r => {
                    t && t(e, k, r)
                }, k.onprogress = r => {
                    var t = b && y && k.response ? k.response.byteLength : 0,
                        o = 0;
                    b && y && (o = Vr(t), L.set(new Uint8Array(k.response), o)), P[e + 12 >> 2] = o, Pr.setu64(e + 16, t), Pr.setu64(e + 24, r.loaded - t), Pr.setu64(e + 32, r.total), _[e + 40 >> 1] = k.readyState, k.readyState >= 3 && 0 === k.status && r.loaded > 0 && (k.status = 200), _[e + 42 >> 1] = k.status, k.statusText && O(k.statusText, e + 44, 64), n && n(e, k, r), o && Hr(o)
                }, k.onreadystatechange = r => {
                    _[e + 40 >> 1] = k.readyState, k.readyState >= 2 && (_[e + 42 >> 1] = k.status), o && o(e, k, r)
                };
                try {
                    k.send(T)
                } catch (r) {
                    t && t(e, k, r)
                }
            } else t(e, 0, "no url specified!");

            function I(r) {
                var t = 0,
                    n = 0;
                r && (n = k.response ? k.response.byteLength : 0, t = Vr(n), L.set(new Uint8Array(k.response), t)), P[e + 12 >> 2] = t, Pr.setu64(e + 16, n)
            }
        }

        function Tr(e, r, t, n, o) {
            if (e) {
                var a = P[r + 112 + 64 >> 2];
                a || (a = P[r + 8 >> 2]);
                var i = M(a);
                try {
                    var u = e.transaction(["FILES"], "readwrite").objectStore("FILES").put(t, i);
                    u.onsuccess = e => {
                        _[r + 40 >> 1] = 4, _[r + 42 >> 1] = 200, O("OK", r + 44, 64), n(r, 0, i)
                    }, u.onerror = e => {
                        _[r + 40 >> 1] = 4, _[r + 42 >> 1] = 413, O("Payload Too Large", r + 44, 64), o(r, 0, e)
                    }
                } catch (e) {
                    o(r, 0, e)
                }
            } else o(r, 0, "IndexedDB not available!")
        }
        var Ir = {};

        function Rr() {
            if (!Rr.strings) {
                var e = {
                    USER: "web_user",
                    LOGNAME: "web_user",
                    PATH: "/",
                    PWD: "/",
                    HOME: "/home/web_user",
                    LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
                    _: c || "./this.program"
                };
                for (var r in Ir) void 0 === Ir[r] ? delete e[r] : e[r] = Ir[r];
                var t = [];
                for (var r in e) t.push(r + "=" + e[r]);
                Rr.strings = t
            }
            return Rr.strings
        }
        var Mr, Nr = function(e, r, t, n) {
            e || (e = this), this.parent = e, this.mount = e.mount, this.mounted = null, this.id = Se.nextInode++, this.name = r, this.mode = t, this.node_ops = {}, this.stream_ops = {}, this.rdev = n
        };
        Object.defineProperties(Nr.prototype, {
            read: {
                get: function() {
                    return 365 == (365 & this.mode)
                },
                set: function(e) {
                    e ? this.mode |= 365 : this.mode &= -366
                }
            },
            write: {
                get: function() {
                    return 146 == (146 & this.mode)
                },
                set: function(e) {
                    e ? this.mode |= 146 : this.mode &= -147
                }
            },
            isFolder: {
                get: function() {
                    return Se.isDir(this.mode)
                }
            },
            isDevice: {
                get: function() {
                    return Se.isChrdev(this.mode)
                }
            }
        }), Se.FSNode = Nr, Se.staticInit(), r.FS_createPath = Se.createPath, r.FS_createDataFile = Se.createDataFile, r.FS_createPreloadedFile = Se.createPreloadedFile, r.FS_createLazyFile = Se.createLazyFile, r.FS_createDevice = Se.createDevice, r.FS_unlink = Se.unlink, r.requestFullscreen = function(e, r) {
            Fe.requestFullscreen(e, r)
        }, r.requestAnimationFrame = function(e) {
            Fe.requestAnimationFrame(e)
        }, r.setCanvasSize = function(e, r, t) {
            Fe.setCanvasSize(e, r, t)
        }, r.pauseMainLoop = function() {
            Fe.mainLoop.pause()
        }, r.resumeMainLoop = function() {
            Fe.mainLoop.resume()
        }, r.getUserMedia = function() {
            Fe.getUserMedia()
        }, r.createContext = function(e, r, t, n) {
            return Fe.createContext(e, r, t, n)
        };
        for (var Or = 0; Or < 32; ++Or) er.push(new Array(Or));
        var Ur = new Float32Array(288);
        for (Or = 0; Or < 288; ++Or) hr[Or] = Ur.subarray(0, Or + 1);
        var zr = new Int32Array(288);
        for (Or = 0; Or < 288; ++Or) br[Or] = zr.subarray(0, Or + 1);

        function jr(e, r, t) {
            var n = t > 0 ? t : U(e) + 1,
                o = new Array(n),
                a = N(e, o, 0, o.length);
            return r && (o.length = a), o
        }
        Pr.staticInit();
        var qr, Gr = {
                gb: function(e, r, t) {
                    Ae.varargs = t;
                    try {
                        var n = Ae.getStreamFromFD(e);
                        switch (r) {
                            case 0:
                                return (o = Ae.get()) < 0 ? -28 : Se.open(n.path, n.flags, 0, o).fd;
                            case 1:
                            case 2:
                            case 6:
                            case 7:
                                return 0;
                            case 3:
                                return n.flags;
                            case 4:
                                var o = Ae.get();
                                return n.flags |= o, 0;
                            case 5:
                                return o = Ae.get(), B[o + 0 >> 1] = 2, 0;
                            case 16:
                            case 8:
                            default:
                                return -28;
                            case 9:
                                return be(28), -1
                        }
                    } catch (e) {
                        if (void 0 === Se || !(e instanceof Se.ErrnoError)) throw e;
                        return -e.errno
                    }
                },
                mc: function(e, r) {
                    try {
                        var t = Ae.getStreamFromFD(e);
                        return Ae.doStat(Se.stat, t.path, r)
                    } catch (e) {
                        if (void 0 === Se || !(e instanceof Se.ErrnoError)) throw e;
                        return -e.errno
                    }
                },
                kc: function(e, r, t, n) {
                    try {
                        r = Ae.getStr(r);
                        var o = 256 & n,
                            a = 4096 & n;
                        return n &= -4353, r = Ae.calculateAt(e, r, a), Ae.doStat(o ? Se.lstat : Se.stat, r, t)
                    } catch (e) {
                        if (void 0 === Se || !(e instanceof Se.ErrnoError)) throw e;
                        return -e.errno
                    }
                },
                oc: function(e, r, t) {
                    Ae.varargs = t;
                    try {
                        var n = Ae.getStreamFromFD(e);
                        switch (r) {
                            case 21509:
                            case 21505:
                            case 21510:
                            case 21511:
                            case 21512:
                            case 21506:
                            case 21507:
                            case 21508:
                            case 21523:
                            case 21524:
                                return n.tty ? 0 : -59;
                            case 21519:
                                if (!n.tty) return -59;
                                var o = Ae.get();
                                return D[o >> 2] = 0, 0;
                            case 21520:
                                return n.tty ? -28 : -59;
                            case 21531:
                                return o = Ae.get(), Se.ioctl(n, r, o);
                            default:
                                ie("bad ioctl syscall " + r)
                        }
                    } catch (e) {
                        if (void 0 === Se || !(e instanceof Se.ErrnoError)) throw e;
                        return -e.errno
                    }
                },
                pc: function(e, r, t) {
                    Ae.varargs = t;
                    try {
                        var n = Ae.getStr(e),
                            o = t ? Ae.get() : 0;
                        return Se.open(n, r, o).fd
                    } catch (e) {
                        if (void 0 === Se || !(e instanceof Se.ErrnoError)) throw e;
                        return -e.errno
                    }
                },
                lc: function(e, r) {
                    try {
                        return e = Ae.getStr(e), Ae.doStat(Se.stat, e, r)
                    } catch (e) {
                        if (void 0 === Se || !(e instanceof Se.ErrnoError)) throw e;
                        return -e.errno
                    }
                },
                Kh: function(e) {
                    delete Pr.xhrs[e - 1]
                },
                fc: function() {
                    throw "longjmp"
                },
                qc: function(e, r) {
                    var t = new Date(1e3 * D[e >> 2]);
                    D[r >> 2] = t.getUTCSeconds(), D[r + 4 >> 2] = t.getUTCMinutes(), D[r + 8 >> 2] = t.getUTCHours(), D[r + 12 >> 2] = t.getUTCDate(), D[r + 16 >> 2] = t.getUTCMonth(), D[r + 20 >> 2] = t.getUTCFullYear() - 1900, D[r + 24 >> 2] = t.getUTCDay();
                    var n = Date.UTC(t.getUTCFullYear(), 0, 1, 0, 0, 0, 0),
                        o = (t.getTime() - n) / 864e5 | 0;
                    D[r + 28 >> 2] = o
                },
                rc: function(e, r) {
                    var t = new Date(1e3 * D[e >> 2]);
                    D[r >> 2] = t.getSeconds(), D[r + 4 >> 2] = t.getMinutes(), D[r + 8 >> 2] = t.getHours(), D[r + 12 >> 2] = t.getDate(), D[r + 16 >> 2] = t.getMonth(), D[r + 20 >> 2] = t.getFullYear() - 1900, D[r + 24 >> 2] = t.getDay();
                    var n = new Date(t.getFullYear(), 0, 1),
                        o = (t.getTime() - n.getTime()) / 864e5 | 0;
                    D[r + 28 >> 2] = o, D[r + 36 >> 2] = -60 * t.getTimezoneOffset();
                    var a = new Date(t.getFullYear(), 6, 1).getTimezoneOffset(),
                        i = n.getTimezoneOffset(),
                        u = 0 | (a != i && t.getTimezoneOffset() == Math.min(i, a));
                    D[r + 32 >> 2] = u
                },
                sc: function(e) {
                    var r = new Date(D[e + 20 >> 2] + 1900, D[e + 16 >> 2], D[e + 12 >> 2], D[e + 8 >> 2], D[e + 4 >> 2], D[e >> 2], 0),
                        t = D[e + 32 >> 2],
                        n = r.getTimezoneOffset(),
                        o = new Date(r.getFullYear(), 0, 1),
                        a = new Date(r.getFullYear(), 6, 1).getTimezoneOffset(),
                        i = o.getTimezoneOffset(),
                        u = Math.min(i, a);
                    if (t < 0) D[e + 32 >> 2] = Number(a != i && u == n);
                    else if (t > 0 != (u == n)) {
                        var s = Math.max(i, a),
                            c = t > 0 ? u : s;
                        r.setTime(r.getTime() + 6e4 * (c - n))
                    }
                    D[e + 24 >> 2] = r.getDay();
                    var f = (r.getTime() - o.getTime()) / 864e5 | 0;
                    return D[e + 28 >> 2] = f, D[e >> 2] = r.getSeconds(), D[e + 4 >> 2] = r.getMinutes(), D[e + 8 >> 2] = r.getHours(), D[e + 12 >> 2] = r.getDate(), D[e + 16 >> 2] = r.getMonth(), r.getTime() / 1e3 | 0
                },
                tc: function e(r, t, n) {
                    e.called || (e.called = !0, function(e, r, t) {
                        var n = (new Date).getFullYear(),
                            o = new Date(n, 0, 1),
                            a = new Date(n, 6, 1),
                            i = o.getTimezoneOffset(),
                            u = a.getTimezoneOffset(),
                            s = Math.max(i, u);

                        function c(e) {
                            var r = e.toTimeString().match(/\(([A-Za-z ]+)\)$/);
                            return r ? r[1] : "GMT"
                        }
                        D[e >> 2] = 60 * s, D[r >> 2] = Number(i != u);
                        var f = c(o),
                            l = c(a),
                            d = z(f),
                            m = z(l);
                        u < i ? (D[t >> 2] = d, D[t + 4 >> 2] = m) : (D[t >> 2] = m, D[t + 4 >> 2] = d)
                    }(r, t, n))
                },
                U: function() {
                    ie("")
                },
                $a: function(e, r, t, n, o) {
                    if (Te.currentCtx) {
                        var a = Te.buffers[e];
                        if (a)
                            if (o <= 0) Te.currentCtx.err = 40963;
                            else {
                                var i = null;
                                try {
                                    switch (r) {
                                        case 4352:
                                            if (n > 0)
                                                for (var u = (i = Te.currentCtx.audioCtx.createBuffer(1, n, o)).getChannelData(0), s = 0; s < n; ++s) u[s] = .0078125 * L[t++] - 1;
                                            a.bytesPerSample = 1, a.channels = 1, a.length = n;
                                            break;
                                        case 4353:
                                            if (n > 0)
                                                for (u = (i = Te.currentCtx.audioCtx.createBuffer(1, n >> 1, o)).getChannelData(0), t >>= 1, s = 0; s < n >> 1; ++s) u[s] = 30517578125e-15 * B[t++];
                                            a.bytesPerSample = 2, a.channels = 1, a.length = n >> 1;
                                            break;
                                        case 4354:
                                            if (n > 0) {
                                                u = (i = Te.currentCtx.audioCtx.createBuffer(2, n >> 1, o)).getChannelData(0);
                                                var c = i.getChannelData(1);
                                                for (s = 0; s < n >> 1; ++s) u[s] = .0078125 * L[t++] - 1, c[s] = .0078125 * L[t++] - 1
                                            }
                                            a.bytesPerSample = 1, a.channels = 2, a.length = n >> 1;
                                            break;
                                        case 4355:
                                            if (n > 0)
                                                for (u = (i = Te.currentCtx.audioCtx.createBuffer(2, n >> 2, o)).getChannelData(0), c = i.getChannelData(1), t >>= 1, s = 0; s < n >> 2; ++s) u[s] = 30517578125e-15 * B[t++], c[s] = 30517578125e-15 * B[t++];
                                            a.bytesPerSample = 2, a.channels = 2, a.length = n >> 2;
                                            break;
                                        case 65552:
                                            if (n > 0)
                                                for (u = (i = Te.currentCtx.audioCtx.createBuffer(1, n >> 2, o)).getChannelData(0), t >>= 2, s = 0; s < n >> 2; ++s) u[s] = F[t++];
                                            a.bytesPerSample = 4, a.channels = 1, a.length = n >> 2;
                                            break;
                                        case 65553:
                                            if (n > 0)
                                                for (u = (i = Te.currentCtx.audioCtx.createBuffer(2, n >> 3, o)).getChannelData(0), c = i.getChannelData(1), t >>= 2, s = 0; s < n >> 3; ++s) u[s] = F[t++], c[s] = F[t++];
                                            a.bytesPerSample = 4, a.channels = 2, a.length = n >> 3;
                                            break;
                                        default:
                                            return void(Te.currentCtx.err = 40963)
                                    }
                                    a.frequency = o, a.audioBuf = i
                                } catch (e) {
                                    return void(Te.currentCtx.err = 40963)
                                }
                            }
                        else Te.currentCtx.err = 40963
                    }
                },
                _b: function(e, r) {
                    if (Te.currentCtx) {
                        for (var t = 0; t < e; ++t)
                            if (0 !== (n = D[r + 4 * t >> 2])) {
                                if (!Te.buffers[n]) return void(Te.currentCtx.err = 40961);
                                if (Te.buffers[n].refCount) return void(Te.currentCtx.err = 40964)
                            } for (t = 0; t < e; ++t) {
                            var n;
                            0 !== (n = D[r + 4 * t >> 2]) && (Te.deviceRefCounts[Te.buffers[n].deviceId]--, delete Te.buffers[n], Te.freeIds.push(n))
                        }
                    }
                },
                $b: function(e, r) {
                    if (Te.currentCtx) {
                        for (var t = 0; t < e; ++t) {
                            var n = D[r + 4 * t >> 2];
                            if (!Te.currentCtx.sources[n]) return void(Te.currentCtx.err = 40961)
                        }
                        for (t = 0; t < e; ++t) n = D[r + 4 * t >> 2], Te.setSourceState(Te.currentCtx.sources[n], 4116), Ie(n, 4105, 0), delete Te.currentCtx.sources[n], Te.freeIds.push(n)
                    }
                },
                cc: function(e, r) {
                    if (Te.currentCtx)
                        for (var t = 0; t < e; ++t) {
                            var n = {
                                deviceId: Te.currentCtx.deviceId,
                                id: Te.newId(),
                                refCount: 0,
                                audioBuf: null,
                                frequency: 0,
                                bytesPerSample: 2,
                                channels: 1,
                                length: 0
                            };
                            Te.deviceRefCounts[n.deviceId]++, Te.buffers[n.id] = n, D[r + 4 * t >> 2] = n.id
                        }
                },
                bc: function(e, r) {
                    if (Te.currentCtx)
                        for (var t = 0; t < e; ++t) {
                            var n = Te.currentCtx.audioCtx.createGain();
                            n.connect(Te.currentCtx.gain);
                            var o = {
                                context: Te.currentCtx,
                                id: Te.newId(),
                                type: 4144,
                                state: 4113,
                                bufQueue: [Te.buffers[0]],
                                audioQueue: [],
                                looping: !1,
                                pitch: 1,
                                dopplerShift: 1,
                                gain: n,
                                minGain: 0,
                                maxGain: 1,
                                panner: null,
                                bufsProcessed: 0,
                                bufStartTime: Number.NEGATIVE_INFINITY,
                                bufOffset: 0,
                                relative: !1,
                                refDistance: 1,
                                maxDistance: 340282e33,
                                rolloffFactor: 1,
                                position: [0, 0, 0],
                                velocity: [0, 0, 0],
                                direction: [0, 0, 0],
                                coneOuterGain: 0,
                                coneInnerAngle: 360,
                                coneOuterAngle: 360,
                                distanceModel: 53250,
                                spatialize: 2,
                                get playbackRate() {
                                    return this.pitch * this.dopplerShift
                                }
                            };
                            Te.currentCtx.sources[o.id] = o, D[r + 4 * t >> 2] = o.id
                        }
                },
                aa: function(e, r, t) {
                    var n = Te.getSourceParam("alGetSourcei", e, r);
                    if (null !== n)
                        if (t) switch (r) {
                            case 514:
                            case 4097:
                            case 4098:
                            case 4103:
                            case 4105:
                            case 4112:
                            case 4117:
                            case 4118:
                            case 4128:
                            case 4129:
                            case 4131:
                            case 4132:
                            case 4133:
                            case 4134:
                            case 4135:
                            case 4628:
                            case 8201:
                            case 8202:
                            case 53248:
                                D[t >> 2] = n;
                                break;
                            default:
                                return void(Te.currentCtx.err = 40962)
                        } else Te.currentCtx.err = 40963
                },
                ab: function(e, r, t, n, o) {
                    switch (r) {
                        case 4100:
                        case 4101:
                        case 4102:
                            Te.paramArray[0] = t, Te.paramArray[1] = n, Te.paramArray[2] = o, Te.setSourceParam("alSource3i", e, r, Te.paramArray);
                            break;
                        default:
                            Te.setSourceParam("alSource3i", e, r, null)
                    }
                },
                Wb: function(e) {
                    if (Te.currentCtx) {
                        var r = Te.currentCtx.sources[e];
                        r ? Te.setSourceState(r, 4114) : Te.currentCtx.err = 40961
                    }
                },
                _a: function(e, r, t) {
                    if (Te.currentCtx) {
                        var n = Te.currentCtx.sources[e];
                        if (n)
                            if (4136 !== n.type) {
                                if (0 !== r) {
                                    for (var o = Te.buffers[0], a = 0; a < n.bufQueue.length; a++)
                                        if (0 !== n.bufQueue[a].id) {
                                            o = n.bufQueue[a];
                                            break
                                        } for (a = 0; a < r; ++a) {
                                        var i = D[t + 4 * a >> 2];
                                        if (!(u = Te.buffers[i])) return void(Te.currentCtx.err = 40961);
                                        0 === o.id || u.frequency === o.frequency && u.bytesPerSample === o.bytesPerSample && u.channels === o.channels || (Te.currentCtx.err = 40964)
                                    }
                                    for (1 === n.bufQueue.length && 0 === n.bufQueue[0].id && (n.bufQueue.length = 0), n.type = 4137, a = 0; a < r; ++a) {
                                        var u;
                                        i = D[t + 4 * a >> 2], (u = Te.buffers[i]).refCount++, n.bufQueue.push(u)
                                    }
                                    n.looping && Te.cancelPendingSourceAudio(n), Te.initSourcePanner(n), Te.scheduleSourceAudio(n)
                                }
                            } else Te.currentCtx.err = 40964;
                        else Te.currentCtx.err = 40961
                    }
                },
                Ub: function(e) {
                    if (Te.currentCtx) {
                        var r = Te.currentCtx.sources[e];
                        r ? Te.setSourceState(r, 4116) : Te.currentCtx.err = 40961
                    }
                },
                Vb: function(e, r, t) {
                    if (Te.currentCtx) {
                        var n = Te.currentCtx.sources[e];
                        if (n) {
                            if (r > (1 === n.bufQueue.length && 0 === n.bufQueue[0].id ? 0 : n.bufsProcessed)) Te.currentCtx.err = 40963;
                            else if (0 !== r) {
                                for (var o = 0; o < r; o++) {
                                    var a = n.bufQueue.shift();
                                    a.refCount--, D[t + 4 * o >> 2] = a.id, n.bufsProcessed--
                                }
                                0 === n.bufQueue.length && n.bufQueue.push(Te.buffers[0]), Te.initSourcePanner(n), Te.scheduleSourceAudio(n)
                            }
                        } else Te.currentCtx.err = 40961
                    }
                },
                bb: function(e, r, t) {
                    switch (r) {
                        case 4097:
                        case 4098:
                        case 4099:
                        case 4106:
                        case 4109:
                        case 4110:
                        case 4128:
                        case 4129:
                        case 4130:
                        case 4131:
                        case 4132:
                        case 4133:
                        case 4134:
                        case 8203:
                            Te.setSourceParam("alSourcef", e, r, t);
                            break;
                        default:
                            Te.setSourceParam("alSourcef", e, r, null)
                    }
                },
                ac: Ie,
                Xb: function(e) {
                    return !(e in Te.deviceRefCounts) || Te.deviceRefCounts[e] > 0 ? 0 : (delete Te.deviceRefCounts[e], Te.freeIds.push(e), 1)
                },
                vc: function(e, r) {
                    if (!(e in Te.deviceRefCounts)) return Te.alcErr = 40961, 0;
                    var t = null,
                        n = [],
                        o = null;
                    if (r >>= 2)
                        for (var a = 0, i = 0; a = D[r++], n.push(a), 0 !== a;) switch (i = D[r++], n.push(i), a) {
                            case 4103:
                                t || (t = {}), t.sampleRate = i;
                                break;
                            case 4112:
                            case 4113:
                                break;
                            case 6546:
                                switch (i) {
                                    case 0:
                                        o = !1;
                                        break;
                                    case 1:
                                        o = !0;
                                        break;
                                    case 2:
                                        break;
                                    default:
                                        return Te.alcErr = 40964, 0
                                }
                                break;
                            case 6550:
                                if (0 !== i) return Te.alcErr = 40964, 0;
                                break;
                            default:
                                return Te.alcErr = 40964, 0
                        }
                    var u = window.AudioContext || window.webkitAudioContext,
                        s = null;
                    try {
                        s = t ? new u(t) : new u
                    } catch (e) {
                        return "NotSupportedError" === e.name ? Te.alcErr = 40964 : Te.alcErr = 40961, 0
                    }
                    fe(s), void 0 === s.createGain && (s.createGain = s.createGainNode);
                    var c = s.createGain();
                    c.connect(s.destination);
                    var f = {
                        deviceId: e,
                        id: Te.newId(),
                        attrs: n,
                        audioCtx: s,
                        listener: {
                            position: [0, 0, 0],
                            velocity: [0, 0, 0],
                            direction: [0, 0, 0],
                            up: [0, 0, 0]
                        },
                        sources: [],
                        interval: setInterval((function() {
                            Te.scheduleContextAudio(f)
                        }), Te.QUEUE_INTERVAL),
                        gain: c,
                        distanceModel: 53250,
                        speedOfSound: 343.3,
                        dopplerFactor: 1,
                        sourceDistanceModel: !1,
                        hrtf: o || !1,
                        _err: 0,
                        get err() {
                            return this._err
                        },
                        set err(e) {
                            0 !== this._err && 0 !== e || (this._err = e)
                        }
                    };
                    if (Te.deviceRefCounts[e]++, Te.contexts[f.id] = f, null !== o)
                        for (var l in Te.contexts) {
                            var d = Te.contexts[l];
                            d.deviceId === e && (d.hrtf = o, Te.updateContextGlobal(d))
                        }
                    return f.id
                },
                Zb: function(e) {
                    var r = Te.contexts[e];
                    Te.currentCtx !== r ? (Te.contexts[e].interval && clearInterval(Te.contexts[e].interval), Te.deviceRefCounts[r.deviceId]--, delete Te.contexts[e], Te.freeIds.push(e)) : Te.alcErr = 40962
                },
                cb: function(e, r, t, n) {
                    if (0 !== t && n) switch (r) {
                        case 4096:
                        case 4097:
                            D[n >> 2] = 1;
                            break;
                        case 4098:
                            if (!(e in Te.deviceRefCounts)) return void(Te.alcErr = 40961);
                            if (!Te.currentCtx) return void(Te.alcErr = 40962);
                            D[n >> 2] = Te.currentCtx.attrs.length;
                            break;
                        case 4099:
                            if (!(e in Te.deviceRefCounts)) return void(Te.alcErr = 40961);
                            if (!Te.currentCtx) return void(Te.alcErr = 40962);
                            for (var o = 0; o < Te.currentCtx.attrs.length; o++) D[n + 4 * o >> 2] = Te.currentCtx.attrs[o];
                            break;
                        case 4103:
                            if (!(e in Te.deviceRefCounts)) return void(Te.alcErr = 40961);
                            if (!Te.currentCtx) return void(Te.alcErr = 40962);
                            D[n >> 2] = Te.currentCtx.audioCtx.sampleRate;
                            break;
                        case 4112:
                        case 4113:
                            if (!(e in Te.deviceRefCounts)) return void(Te.alcErr = 40961);
                            if (!Te.currentCtx) return void(Te.alcErr = 40962);
                            D[n >> 2] = 2147483647;
                            break;
                        case 6546:
                        case 6547:
                            if (!(e in Te.deviceRefCounts)) return void(Te.alcErr = 40961);
                            var a = 0;
                            for (var i in Te.contexts) {
                                var u = Te.contexts[i];
                                u.deviceId === e && (a = u.hrtf ? 1 : 0)
                            }
                            D[n >> 2] = a;
                            break;
                        case 6548:
                            if (!(e in Te.deviceRefCounts)) return void(Te.alcErr = 40961);
                            D[n >> 2] = 1;
                            break;
                        case 131075:
                            if (!(e in Te.deviceRefCounts)) return void(Te.alcErr = 40961);
                            if (!Te.currentCtx) return void(Te.alcErr = 40962);
                            D[n >> 2] = 1;
                        case 786:
                            var s = Te.requireValidCaptureDevice(e, "alcGetIntegerv");
                            if (!s) return;
                            var c = s.capturedFrameCount,
                                f = s.requestedSampleRate,
                                l = s.audioCtx.sampleRate,
                                d = Math.floor(c * (f / l));
                            D[n >> 2] = d;
                            break;
                        default:
                            return void(Te.alcErr = 40963)
                    }
                },
                eb: function(e) {
                    return 0 === e ? (Te.currentCtx = null, 0) : (Te.currentCtx = Te.contexts[e], 1)
                },
                Gc: function(e) {
                    if (e && M(e) !== Te.DEVICE_NAME) return 0;
                    if ("undefined" != typeof AudioContext || "undefined" != typeof webkitAudioContext) {
                        var r = Te.newId();
                        return Te.deviceRefCounts[r] = 0, r
                    }
                    return 0
                },
                gi: function(e) {
                    const t = r.canvas;
                    t && (t.style.cursor = M(e))
                },
                Z: function(e, r) {
                    var t;
                    if (0 === e) t = Date.now();
                    else {
                        if (1 !== e && 4 !== e) return be(28), -1;
                        t = Ee()
                    }
                    return D[r >> 2] = t / 1e3 | 0, D[r + 4 >> 2] = t % 1e3 * 1e3 * 1e3 | 0, 0
                },
                ai: function(e) {
                    return 12448 == e ? (Re.setErrorCode(12288), 1) : (Re.setErrorCode(12300), 0)
                },
                di: function(e, r, t, n, o) {
                    return Re.chooseConfig(e, r, t, n, o)
                },
                Th: function(e, t, n, o) {
                    if (62e3 != e) return Re.setErrorCode(12296), 0;
                    for (var a = 1;;) {
                        var i = D[o >> 2];
                        if (12440 != i) {
                            if (12344 == i) break;
                            return Re.setErrorCode(12292), 0
                        }
                        a = D[o + 4 >> 2], o += 8
                    }
                    return a < 2 || a > 3 ? (Re.setErrorCode(12293), 0) : (Re.contextAttributes.majorVersion = a - 1, Re.contextAttributes.minorVersion = 0, Re.context = Me.createContext(r.canvas, Re.contextAttributes), 0 != Re.context ? (Re.setErrorCode(12288), Me.makeContextCurrent(Re.context), r.useWebGL = !0, Fe.moduleContextCreatedCallbacks.forEach((function(e) {
                        e()
                    })), Me.makeContextCurrent(null), 62004) : (Re.setErrorCode(12297), 0))
                },
                Vh: function(e, r, t, n) {
                    return 62e3 != e ? (Re.setErrorCode(12296), 0) : 62002 != r ? (Re.setErrorCode(12293), 0) : (Re.setErrorCode(12288), 62006)
                },
                Uh: function(e, r) {
                    return 62e3 != e ? (Re.setErrorCode(12296), 0) : 62004 != r ? (Re.setErrorCode(12294), 0) : (Me.deleteContext(Re.context), Re.setErrorCode(12288), Re.currentContext == r && (Re.currentContext = 0), 1)
                },
                Wh: function(e, r) {
                    return 62e3 != e ? (Re.setErrorCode(12296), 0) : 62006 != r ? (Re.setErrorCode(12301), 1) : (Re.currentReadSurface == r && (Re.currentReadSurface = 0), Re.currentDrawSurface == r && (Re.currentDrawSurface = 0), Re.setErrorCode(12288), 1)
                },
                ei: function(e, r, t, n) {
                    if (62e3 != e) return Re.setErrorCode(12296), 0;
                    if (62002 != r) return Re.setErrorCode(12293), 0;
                    if (!n) return Re.setErrorCode(12300), 0;
                    switch (Re.setErrorCode(12288), t) {
                        case 12320:
                            return D[n >> 2] = Re.contextAttributes.alpha ? 32 : 24, 1;
                        case 12321:
                            return D[n >> 2] = Re.contextAttributes.alpha ? 8 : 0, 1;
                        case 12322:
                        case 12323:
                        case 12324:
                            return D[n >> 2] = 8, 1;
                        case 12325:
                            return D[n >> 2] = Re.contextAttributes.depth ? 24 : 0, 1;
                        case 12326:
                            return D[n >> 2] = Re.contextAttributes.stencil ? 8 : 0, 1;
                        case 12327:
                        case 12335:
                        case 12340:
                            return D[n >> 2] = 12344, 1;
                        case 12328:
                            return D[n >> 2] = 62002, 1;
                        case 12329:
                        case 12333:
                        case 12334:
                        case 12345:
                        case 12346:
                        case 12347:
                        case 12349:
                        case 12350:
                        case 12354:
                            return D[n >> 2] = 0, 1;
                        case 12330:
                        case 12332:
                            return D[n >> 2] = 4096, 1;
                        case 12331:
                            return D[n >> 2] = 16777216, 1;
                        case 12337:
                            return D[n >> 2] = Re.contextAttributes.antialias ? 4 : 0, 1;
                        case 12338:
                            return D[n >> 2] = Re.contextAttributes.antialias ? 1 : 0, 1;
                        case 12339:
                        case 12352:
                            return D[n >> 2] = 4, 1;
                        case 12341:
                        case 12342:
                        case 12343:
                            return D[n >> 2] = -1, 1;
                        case 12348:
                            return D[n >> 2] = 1, 1;
                        case 12351:
                            return D[n >> 2] = 12430, 1;
                        default:
                            return Re.setErrorCode(12292), 0
                    }
                },
                sb: function(e) {
                    return Re.setErrorCode(12288), 62e3
                },
                Sh: function() {
                    return Re.errorCode
                },
                bi: function(e, r, t) {
                    return 62e3 == e ? (r && (D[r >> 2] = 1), t && (D[t >> 2] = 4), Re.defaultDisplayInitialized = !0, Re.setErrorCode(12288), 1) : (Re.setErrorCode(12296), 0)
                },
                Xh: function(e, r, t, n) {
                    return 62e3 != e ? (Re.setErrorCode(12296), 0) : 0 != n && 62004 != n ? (Re.setErrorCode(12294), 0) : 0 != t && 62006 != t || 0 != r && 62006 != r ? (Re.setErrorCode(12301), 0) : (Me.makeContextCurrent(n ? Re.context : null), Re.currentContext = n, Re.currentDrawSurface = r, Re.currentReadSurface = t, Re.setErrorCode(12288), 1)
                },
                Rh: function(e, r) {
                    if (62e3 != e) return Re.setErrorCode(12296), 0;
                    if (Re.setErrorCode(12288), Re.stringCache[r]) return Re.stringCache[r];
                    var t;
                    switch (r) {
                        case 12371:
                            t = z("Emscripten");
                            break;
                        case 12372:
                            t = z("1.4 Emscripten EGL");
                            break;
                        case 12373:
                            t = z("");
                            break;
                        case 12429:
                            t = z("OpenGL_ES");
                            break;
                        default:
                            return Re.setErrorCode(12300), 0
                    }
                    return Re.stringCache[r] = t, t
                },
                Yh: function() {
                    if (Re.defaultDisplayInitialized)
                        if (r.ctx) {
                            if (!r.ctx.isContextLost()) return Re.setErrorCode(12288), 1;
                            Re.setErrorCode(12302)
                        } else Re.setErrorCode(12290);
                    else Re.setErrorCode(12289);
                    return 0
                },
                Zh: function(e, r) {
                    return 62e3 != e ? (Re.setErrorCode(12296), 0) : (0 == r ? Le(0, 0) : Le(1, r), Re.setErrorCode(12288), 1)
                },
                ci: function(e) {
                    return 62e3 != e ? (Re.setErrorCode(12296), 0) : (Re.currentContext = 0, Re.currentReadSurface = 0, Re.currentDrawSurface = 0, Re.defaultDisplayInitialized = !1, Re.setErrorCode(12288), 1)
                },
                $h: function() {
                    return Re.setErrorCode(12288), 1
                },
                _h: function(e) {
                    return Re.setErrorCode(12288), 1
                },
                o: function(e, r, t) {
                    var n = function(e, r) {
                        var t;
                        for (Ne.length = 0, r >>= 2; t = L[e++];) {
                            var n = t < 105;
                            n && 1 & r && r++, Ne.push(n ? T[r++ >> 1] : D[r]), ++r
                        }
                        return Ne
                    }(r, t);
                    return ce[e].apply(null, n)
                },
                Tb: function() {
                    Fe.mainLoop.pause(), Fe.mainLoop.func = null
                },
                Nh: function() {
                    if (!Oe.fullscreenEnabled()) return -1;
                    Oe.removeDeferredCalls(Ye);
                    var e = ze[1];
                    if (e.exitFullscreen) e.fullscreenElement && e.exitFullscreen();
                    else {
                        if (!e.webkitExitFullscreen) return -1;
                        e.webkitFullscreenElement && e.webkitExitFullscreen()
                    }
                    return 0
                },
                Ph: function() {
                    if (Oe.removeDeferredCalls(Ke), document.exitPointerLock) document.exitPointerLock();
                    else {
                        if (!document.msExitPointerLock) return -1;
                        document.msExitPointerLock()
                    }
                    return 0
                },
                Xf: function(e) {
                    const t = document && document.location || null,
                        n = t && t.origin || "unknown",
                        o = t && t.pathname || "unknown";
                    r.ga("event", n, {
                        event_category: "license",
                        event_label: o,
                        non_interaction: !0,
                        send_to: r.gid
                    })
                },
                Vg: Ge,
                sa: function() {
                    return devicePixelRatio
                },
                Y: function(e, r, t) {
                    if (!(e = je(e))) return -4;
                    var n = We(e);
                    return T[r >> 3] = n.width, T[t >> 3] = n.height, 0
                },
                ni: function(e) {
                    return Oe.fullscreenEnabled() ? ($e(e), 0) : -1
                },
                vb: function(e, r) {
                    return e < 0 || e >= Oe.lastGamepadState.length ? -5 : Oe.lastGamepadState[e] ? (Ze(r, Oe.lastGamepadState[e]), 0) : -7
                },
                hc: function() {
                    return 2147483648
                },
                Ga: Ee,
                fi: function() {
                    return Oe.lastGamepadState.length
                },
                Qh: function(e, r) {
                    D[e >> 2] = screen.width, D[r >> 2] = screen.height
                },
                qh: function(e) {
                    Mr.activeTexture(e)
                },
                ph: function(e, r) {
                    Mr.attachShader(Me.programs[e], Me.shaders[r])
                },
                oe: function(e, r) {
                    Mr.beginQuery(e, Me.queries[r])
                },
                Gh: function(e, r) {
                    Mr.disjointTimerQueryExt.beginQueryEXT(e, Me.queries[r])
                },
                Wd: function(e) {
                    Mr.beginTransformFeedback(e)
                },
                nh: function(e, r, t) {
                    Mr.bindAttribLocation(Me.programs[e], r, M(t))
                },
                mh: function(e, r) {
                    34962 == e ? Mr.currentArrayBufferBinding = r : 34963 == e && (Mr.currentElementArrayBufferBinding = r), 35051 == e ? Mr.currentPixelPackBufferBinding = r : 35052 == e && (Mr.currentPixelUnpackBufferBinding = r), Mr.bindBuffer(e, Me.buffers[r])
                },
                Td: function(e, r, t) {
                    Mr.bindBufferBase(e, r, Me.buffers[t])
                },
                Ud: function(e, r, t, n, o) {
                    Mr.bindBufferRange(e, r, Me.buffers[t], n, o)
                },
                lh: function(e, r) {
                    Mr.bindFramebuffer(e, Me.framebuffers[r])
                },
                kh: function(e, r) {
                    Mr.bindRenderbuffer(e, Me.renderbuffers[r])
                },
                Zc: function(e, r) {
                    Mr.bindSampler(e, Me.samplers[r])
                },
                jh: function(e, r) {
                    Mr.bindTexture(e, Me.textures[r])
                },
                Qc: function(e, r) {
                    Mr.bindTransformFeedback(e, Me.transformFeedbacks[r])
                },
                ae: function(e) {
                    Mr.bindVertexArray(Me.vaos[e]);
                    var r = Mr.getParameter(34965);
                    Mr.currentElementArrayBufferBinding = r ? 0 | r.name : 0
                },
                yh: function(e) {
                    Mr.bindVertexArray(Me.vaos[e]);
                    var r = Mr.getParameter(34965);
                    Mr.currentElementArrayBufferBinding = r ? 0 | r.name : 0
                },
                ih: function(e, r, t, n) {
                    Mr.blendColor(e, r, t, n)
                },
                hh: function(e) {
                    Mr.blendEquation(e)
                },
                gh: function(e, r) {
                    Mr.blendEquationSeparate(e, r)
                },
                fh: function(e, r) {
                    Mr.blendFunc(e, r)
                },
                eh: function(e, r, t, n) {
                    Mr.blendFuncSeparate(e, r, t, n)
                },
                de: function(e, r, t, n, o, a, i, u, s, c) {
                    Mr.blitFramebuffer(e, r, t, n, o, a, i, u, s, c)
                },
                dh: function(e, r, t, n) {
                    Me.currentContext.version >= 2 ? t ? Mr.bufferData(e, L, n, t, r) : Mr.bufferData(e, r, n) : Mr.bufferData(e, t ? L.subarray(t, t + r) : r, n)
                },
                ch: function(e, r, t, n) {
                    Me.currentContext.version >= 2 ? Mr.bufferSubData(e, r, L, n, t) : Mr.bufferSubData(e, r, L.subarray(n, n + t))
                },
                bh: function(e) {
                    return Mr.checkFramebufferStatus(e)
                },
                ah: function(e) {
                    Mr.clear(e)
                },
                wd: function(e, r, t, n) {
                    Mr.clearBufferfi(e, r, t, n)
                },
                xd: function(e, r, t) {
                    Mr.clearBufferfv(e, r, F, t >> 2)
                },
                zd: function(e, r, t) {
                    Mr.clearBufferiv(e, r, D, t >> 2)
                },
                yd: function(e, r, t) {
                    Mr.clearBufferuiv(e, r, P, t >> 2)
                },
                $g: function(e, r, t, n) {
                    Mr.clearColor(e, r, t, n)
                },
                _g: function(e) {
                    Mr.clearDepth(e)
                },
                Zg: function(e) {
                    Mr.clearStencil(e)
                },
                hd: function(e, r, t, n) {
                    return Mr.clientWaitSync(Me.syncs[e], r, Je(t, n))
                },
                Yg: function(e, r, t, n) {
                    Mr.colorMask(!!e, !!r, !!t, !!n)
                },
                Xg: function(e) {
                    Mr.compileShader(Me.shaders[e])
                },
                Wg: function(e, r, t, n, o, a, i, u) {
                    Me.currentContext.version >= 2 ? Mr.currentPixelUnpackBufferBinding ? Mr.compressedTexImage2D(e, r, t, n, o, a, i, u) : Mr.compressedTexImage2D(e, r, t, n, o, a, L, u, i) : Mr.compressedTexImage2D(e, r, t, n, o, a, u ? L.subarray(u, u + i) : null)
                },
                te: function(e, r, t, n, o, a, i, u, s) {
                    Mr.currentPixelUnpackBufferBinding ? Mr.compressedTexImage3D(e, r, t, n, o, a, i, u, s) : Mr.compressedTexImage3D(e, r, t, n, o, a, i, L, s, u)
                },
                Ug: function(e, r, t, n, o, a, i, u, s) {
                    Me.currentContext.version >= 2 ? Mr.currentPixelUnpackBufferBinding ? Mr.compressedTexSubImage2D(e, r, t, n, o, a, i, u, s) : Mr.compressedTexSubImage2D(e, r, t, n, o, a, i, L, s, u) : Mr.compressedTexSubImage2D(e, r, t, n, o, a, i, s ? L.subarray(s, s + u) : null)
                },
                se: function(e, r, t, n, o, a, i, u, s, c, f) {
                    Mr.currentPixelUnpackBufferBinding ? Mr.compressedTexSubImage3D(e, r, t, n, o, a, i, u, s, c, f) : Mr.compressedTexSubImage3D(e, r, t, n, o, a, i, u, s, L, f, c)
                },
                ud: function(e, r, t, n, o) {
                    Mr.copyBufferSubData(e, r, t, n, o)
                },
                Tg: function(e, r, t, n, o, a, i, u) {
                    Mr.copyTexImage2D(e, r, t, n, o, a, i, u)
                },
                Sg: function(e, r, t, n, o, a, i, u) {
                    Mr.copyTexSubImage2D(e, r, t, n, o, a, i, u)
                },
                ue: function(e, r, t, n, o, a, i, u, s) {
                    Mr.copyTexSubImage3D(e, r, t, n, o, a, i, u, s)
                },
                Rg: function() {
                    var e = Me.getNewId(Me.programs),
                        r = Mr.createProgram();
                    return r.name = e, r.maxUniformLength = r.maxAttributeLength = r.maxUniformBlockNameLength = 0, r.uniformIdCounter = 1, Me.programs[e] = r, e
                },
                Qg: function(e) {
                    var r = Me.getNewId(Me.shaders);
                    return Me.shaders[r] = Mr.createShader(e), r
                },
                Pg: function(e) {
                    Mr.cullFace(e)
                },
                Og: function(e, r) {
                    for (var t = 0; t < e; t++) {
                        var n = D[r + 4 * t >> 2],
                            o = Me.buffers[n];
                        o && (Mr.deleteBuffer(o), o.name = 0, Me.buffers[n] = null, n == Mr.currentArrayBufferBinding && (Mr.currentArrayBufferBinding = 0), n == Mr.currentElementArrayBufferBinding && (Mr.currentElementArrayBufferBinding = 0), n == Mr.currentPixelPackBufferBinding && (Mr.currentPixelPackBufferBinding = 0), n == Mr.currentPixelUnpackBufferBinding && (Mr.currentPixelUnpackBufferBinding = 0))
                    }
                },
                Ng: function(e, r) {
                    for (var t = 0; t < e; ++t) {
                        var n = D[r + 4 * t >> 2],
                            o = Me.framebuffers[n];
                        o && (Mr.deleteFramebuffer(o), o.name = 0, Me.framebuffers[n] = null)
                    }
                },
                Mg: function(e) {
                    if (e) {
                        var r = Me.programs[e];
                        r ? (Mr.deleteProgram(r), r.name = 0, Me.programs[e] = null) : Me.recordError(1281)
                    }
                },
                qe: function(e, r) {
                    for (var t = 0; t < e; t++) {
                        var n = D[r + 4 * t >> 2],
                            o = Me.queries[n];
                        o && (Mr.deleteQuery(o), Me.queries[n] = null)
                    }
                },
                Ih: function(e, r) {
                    for (var t = 0; t < e; t++) {
                        var n = D[r + 4 * t >> 2],
                            o = Me.queries[n];
                        o && (Mr.disjointTimerQueryExt.deleteQueryEXT(o), Me.queries[n] = null)
                    }
                },
                Lg: function(e, r) {
                    for (var t = 0; t < e; t++) {
                        var n = D[r + 4 * t >> 2],
                            o = Me.renderbuffers[n];
                        o && (Mr.deleteRenderbuffer(o), o.name = 0, Me.renderbuffers[n] = null)
                    }
                },
                $c: function(e, r) {
                    for (var t = 0; t < e; t++) {
                        var n = D[r + 4 * t >> 2],
                            o = Me.samplers[n];
                        o && (Mr.deleteSampler(o), o.name = 0, Me.samplers[n] = null)
                    }
                },
                Kg: function(e) {
                    if (e) {
                        var r = Me.shaders[e];
                        r ? (Mr.deleteShader(r), Me.shaders[e] = null) : Me.recordError(1281)
                    }
                },
                id: function(e) {
                    if (e) {
                        var r = Me.syncs[e];
                        r ? (Mr.deleteSync(r), r.name = 0, Me.syncs[e] = null) : Me.recordError(1281)
                    }
                },
                Jg: function(e, r) {
                    for (var t = 0; t < e; t++) {
                        var n = D[r + 4 * t >> 2],
                            o = Me.textures[n];
                        o && (Mr.deleteTexture(o), o.name = 0, Me.textures[n] = null)
                    }
                },
                Pc: function(e, r) {
                    for (var t = 0; t < e; t++) {
                        var n = D[r + 4 * t >> 2],
                            o = Me.transformFeedbacks[n];
                        o && (Mr.deleteTransformFeedback(o), o.name = 0, Me.transformFeedbacks[n] = null)
                    }
                },
                $d: function(e, r) {
                    for (var t = 0; t < e; t++) {
                        var n = D[r + 4 * t >> 2];
                        Mr.deleteVertexArray(Me.vaos[n]), Me.vaos[n] = null
                    }
                },
                xh: function(e, r) {
                    for (var t = 0; t < e; t++) {
                        var n = D[r + 4 * t >> 2];
                        Mr.deleteVertexArray(Me.vaos[n]), Me.vaos[n] = null
                    }
                },
                Ig: function(e) {
                    Mr.depthFunc(e)
                },
                Hg: function(e) {
                    Mr.depthMask(!!e)
                },
                Gg: function(e, r) {
                    Mr.depthRange(e, r)
                },
                Fg: function(e, r) {
                    Mr.detachShader(Me.programs[e], Me.shaders[r])
                },
                Eg: function(e) {
                    Mr.disable(e)
                },
                Dg: function(e) {
                    Me.currentContext.clientBuffers[e].enabled = !1, Mr.disableVertexAttribArray(e)
                },
                Cg: function(e, r, t) {
                    Me.preDrawHandleClientVertexAttribBindings(r + t), Mr.drawArrays(e, r, t), Me.postDrawHandleClientVertexAttribBindings()
                },
                nd: function(e, r, t, n) {
                    Mr.drawArraysInstanced(e, r, t, n)
                },
                th: function(e, r, t, n) {
                    Mr.drawArraysInstanced(e, r, t, n)
                },
                yc: function(e, r, t, n) {
                    Mr.drawArraysInstanced(e, r, t, n)
                },
                Be: function(e, r, t, n) {
                    Mr.drawArraysInstanced(e, r, t, n)
                },
                zc: function(e, r, t, n) {
                    Mr.drawArraysInstanced(e, r, t, n)
                },
                ke: function(e, r) {
                    for (var t = er[e], n = 0; n < e; n++) t[n] = D[r + 4 * n >> 2];
                    Mr.drawBuffers(t)
                },
                ze: function(e, r) {
                    for (var t = er[e], n = 0; n < e; n++) t[n] = D[r + 4 * n >> 2];
                    Mr.drawBuffers(t)
                },
                uh: function(e, r) {
                    for (var t = er[e], n = 0; n < e; n++) t[n] = D[r + 4 * n >> 2];
                    Mr.drawBuffers(t)
                },
                Bg: function(e, r, t, n) {
                    var o;
                    if (!Mr.currentElementArrayBufferBinding) {
                        var a = Me.calcBufLength(1, t, 0, r);
                        o = Me.getTempIndexBuffer(a), Mr.bindBuffer(34963, o), Mr.bufferSubData(34963, 0, L.subarray(n, n + a)), n = 0
                    }
                    Me.preDrawHandleClientVertexAttribBindings(r), Mr.drawElements(e, r, t, n), Me.postDrawHandleClientVertexAttribBindings(r), Mr.currentElementArrayBufferBinding || Mr.bindBuffer(34963, null)
                },
                md: function(e, r, t, n, o) {
                    Mr.drawElementsInstanced(e, r, t, n, o)
                },
                sh: function(e, r, t, n, o) {
                    Mr.drawElementsInstanced(e, r, t, n, o)
                },
                wc: function(e, r, t, n, o) {
                    Mr.drawElementsInstanced(e, r, t, n, o)
                },
                xc: function(e, r, t, n, o) {
                    Mr.drawElementsInstanced(e, r, t, n, o)
                },
                Ae: function(e, r, t, n, o) {
                    Mr.drawElementsInstanced(e, r, t, n, o)
                },
                xe: function(e, r, t, n, o, a) {
                    rr(e, n, o, a)
                },
                zg: function(e) {
                    Mr.enable(e)
                },
                yg: function(e) {
                    Me.currentContext.clientBuffers[e].enabled = !0, Mr.enableVertexAttribArray(e)
                },
                ne: function(e) {
                    Mr.endQuery(e)
                },
                Fh: function(e) {
                    Mr.disjointTimerQueryExt.endQueryEXT(e)
                },
                Vd: function() {
                    Mr.endTransformFeedback()
                },
                kd: function(e, r) {
                    var t = Mr.fenceSync(e, r);
                    if (t) {
                        var n = Me.getNewId(Me.syncs);
                        return t.name = n, Me.syncs[n] = t, n
                    }
                    return 0
                },
                xg: function() {
                    Mr.finish()
                },
                wg: function() {
                    Mr.flush()
                },
                vg: function(e, r, t, n) {
                    Mr.framebufferRenderbuffer(e, r, t, Me.renderbuffers[n])
                },
                ug: function(e, r, t, n, o) {
                    Mr.framebufferTexture2D(e, r, t, Me.textures[n], o)
                },
                be: function(e, r, t, n, o) {
                    Mr.framebufferTextureLayer(e, r, Me.textures[t], n, o)
                },
                tg: function(e) {
                    Mr.frontFace(e)
                },
                sg: function(e, r) {
                    tr(e, r, "createBuffer", Me.buffers)
                },
                qg: function(e, r) {
                    tr(e, r, "createFramebuffer", Me.framebuffers)
                },
                re: function(e, r) {
                    tr(e, r, "createQuery", Me.queries)
                },
                Jh: function(e, r) {
                    for (var t = 0; t < e; t++) {
                        var n = Mr.disjointTimerQueryExt.createQueryEXT();
                        if (!n) {
                            for (Me.recordError(1282); t < e;) D[r + 4 * t++ >> 2] = 0;
                            return
                        }
                        var o = Me.getNewId(Me.queries);
                        n.name = o, Me.queries[o] = n, D[r + 4 * t >> 2] = o
                    }
                },
                pg: function(e, r) {
                    tr(e, r, "createRenderbuffer", Me.renderbuffers)
                },
                bd: function(e, r) {
                    tr(e, r, "createSampler", Me.samplers)
                },
                og: function(e, r) {
                    tr(e, r, "createTexture", Me.textures)
                },
                Oc: function(e, r) {
                    tr(e, r, "createTransformFeedback", Me.transformFeedbacks)
                },
                Zd: function(e, r) {
                    tr(e, r, "createVertexArray", Me.vaos)
                },
                wh: function(e, r) {
                    tr(e, r, "createVertexArray", Me.vaos)
                },
                rg: function(e) {
                    Mr.generateMipmap(e)
                },
                ng: function(e, r, t, n, o, a, i) {
                    nr("getActiveAttrib", e, r, t, n, o, a, i)
                },
                mg: function(e, r, t, n, o, a, i) {
                    nr("getActiveUniform", e, r, t, n, o, a, i)
                },
                pd: function(e, r, t, n, o) {
                    e = Me.programs[e];
                    var a = Mr.getActiveUniformBlockName(e, r);
                    if (a)
                        if (o && t > 0) {
                            var i = O(a, o, t);
                            n && (D[n >> 2] = i)
                        } else n && (D[n >> 2] = 0)
                },
                qd: function(e, r, t, n) {
                    if (n)
                        if (e = Me.programs[e], 35393 != t) {
                            var o = Mr.getActiveUniformBlockParameter(e, r, t);
                            if (null !== o)
                                if (35395 == t)
                                    for (var a = 0; a < o.length; a++) D[n + 4 * a >> 2] = o[a];
                                else D[n >> 2] = o
                        } else {
                            var i = Mr.getActiveUniformBlockName(e, r);
                            D[n >> 2] = i.length + 1
                        }
                    else Me.recordError(1281)
                },
                sd: function(e, r, t, n, o) {
                    if (o)
                        if (r > 0 && 0 == t) Me.recordError(1281);
                        else {
                            e = Me.programs[e];
                            for (var a = [], i = 0; i < r; i++) a.push(D[t + 4 * i >> 2]);
                            var u = Mr.getActiveUniforms(e, a, n);
                            if (u) {
                                var s = u.length;
                                for (i = 0; i < s; i++) D[o + 4 * i >> 2] = u[i]
                            }
                        }
                    else Me.recordError(1281)
                },
                lg: function(e, r, t, n) {
                    var o = Mr.getAttachedShaders(Me.programs[e]),
                        a = o.length;
                    a > r && (a = r), D[t >> 2] = a;
                    for (var i = 0; i < a; ++i) {
                        var u = Me.shaders.indexOf(o[i]);
                        D[n + 4 * i >> 2] = u
                    }
                },
                kg: function(e, r) {
                    return Mr.getAttribLocation(Me.programs[e], M(r))
                },
                jg: function(e, r) {
                    ar(e, r, 4)
                },
                cd: function(e, r, t) {
                    t ? or(t, Mr.getBufferParameter(e, r)) : Me.recordError(1281)
                },
                ig: function(e, r, t) {
                    t ? D[t >> 2] = Mr.getBufferParameter(e, r) : Me.recordError(1281)
                },
                hg: function() {
                    var e = Mr.getError() || Me.lastError;
                    return Me.lastError = 0, e
                },
                gg: function(e, r) {
                    ar(e, r, 2)
                },
                Id: function(e, r) {
                    return Mr.getFragDataLocation(Me.programs[e], M(r))
                },
                fg: function(e, r, t, n) {
                    var o = Mr.getFramebufferAttachmentParameter(e, r, t);
                    (o instanceof WebGLRenderbuffer || o instanceof WebGLTexture) && (o = 0 | o.name), D[n >> 2] = o
                },
                dd: function(e, r, t) {
                    ir(e, r, t, 1)
                },
                fd: function(e, r) {
                    ar(e, r, 1)
                },
                Xd: function(e, r, t) {
                    ir(e, r, t, 0)
                },
                eg: function(e, r) {
                    ar(e, r, 0)
                },
                Cc: function(e, r, t, n, o) {
                    if (n < 0) Me.recordError(1281);
                    else if (o) {
                        var a = Mr.getInternalformatParameter(e, r, t);
                        if (null !== a)
                            for (var i = 0; i < a.length && i < n; ++i) D[o + 4 * i >> 2] = a[i]
                    } else Me.recordError(1281)
                },
                Kc: function(e, r, t, n, o) {
                    Me.recordError(1282)
                },
                cg: function(e, r, t, n) {
                    var o = Mr.getProgramInfoLog(Me.programs[e]);
                    null === o && (o = "(unknown error)");
                    var a = r > 0 && n ? O(o, n, r) : 0;
                    t && (D[t >> 2] = a)
                },
                dg: function(e, r, t) {
                    if (t)
                        if (e >= Me.counter) Me.recordError(1281);
                        else if (e = Me.programs[e], 35716 == r) {
                        var n = Mr.getProgramInfoLog(e);
                        null === n && (n = "(unknown error)"), D[t >> 2] = n.length + 1
                    } else if (35719 == r) {
                        if (!e.maxUniformLength)
                            for (var o = 0; o < Mr.getProgramParameter(e, 35718); ++o) e.maxUniformLength = Math.max(e.maxUniformLength, Mr.getActiveUniform(e, o).name.length + 1);
                        D[t >> 2] = e.maxUniformLength
                    } else if (35722 == r) {
                        if (!e.maxAttributeLength)
                            for (o = 0; o < Mr.getProgramParameter(e, 35721); ++o) e.maxAttributeLength = Math.max(e.maxAttributeLength, Mr.getActiveAttrib(e, o).name.length + 1);
                        D[t >> 2] = e.maxAttributeLength
                    } else if (35381 == r) {
                        if (!e.maxUniformBlockNameLength)
                            for (o = 0; o < Mr.getProgramParameter(e, 35382); ++o) e.maxUniformBlockNameLength = Math.max(e.maxUniformBlockNameLength, Mr.getActiveUniformBlockName(e, o).length + 1);
                        D[t >> 2] = e.maxUniformBlockNameLength
                    } else D[t >> 2] = Mr.getProgramParameter(e, r);
                    else Me.recordError(1281)
                },
                Ah: function(e, r, t) {
                    if (t) {
                        var n, o = Me.queries[e];
                        or(t, "boolean" == typeof(n = Me.currentContext.version < 2 ? Mr.disjointTimerQueryExt.getQueryObjectEXT(o, r) : Mr.getQueryParameter(o, r)) ? n ? 1 : 0 : n)
                    } else Me.recordError(1281)
                },
                Ch: function(e, r, t) {
                    if (t) {
                        var n, o = Me.queries[e],
                            a = Mr.disjointTimerQueryExt.getQueryObjectEXT(o, r);
                        n = "boolean" == typeof a ? a ? 1 : 0 : a, D[t >> 2] = n
                    } else Me.recordError(1281)
                },
                zh: function(e, r, t) {
                    if (t) {
                        var n, o = Me.queries[e];
                        or(t, "boolean" == typeof(n = Me.currentContext.version < 2 ? Mr.disjointTimerQueryExt.getQueryObjectEXT(o, r) : Mr.getQueryParameter(o, r)) ? n ? 1 : 0 : n)
                    } else Me.recordError(1281)
                },
                le: function(e, r, t) {
                    if (t) {
                        var n, o = Me.queries[e],
                            a = Mr.getQueryParameter(o, r);
                        n = "boolean" == typeof a ? a ? 1 : 0 : a, D[t >> 2] = n
                    } else Me.recordError(1281)
                },
                Bh: function(e, r, t) {
                    if (t) {
                        var n, o = Me.queries[e],
                            a = Mr.disjointTimerQueryExt.getQueryObjectEXT(o, r);
                        n = "boolean" == typeof a ? a ? 1 : 0 : a, D[t >> 2] = n
                    } else Me.recordError(1281)
                },
                me: function(e, r, t) {
                    t ? D[t >> 2] = Mr.getQuery(e, r) : Me.recordError(1281)
                },
                Dh: function(e, r, t) {
                    t ? D[t >> 2] = Mr.disjointTimerQueryExt.getQueryEXT(e, r) : Me.recordError(1281)
                },
                bg: function(e, r, t) {
                    t ? D[t >> 2] = Mr.getRenderbufferParameter(e, r) : Me.recordError(1281)
                },
                Tc: function(e, r, t) {
                    t ? F[t >> 2] = Mr.getSamplerParameter(Me.samplers[e], r) : Me.recordError(1281)
                },
                Uc: function(e, r, t) {
                    t ? D[t >> 2] = Mr.getSamplerParameter(Me.samplers[e], r) : Me.recordError(1281)
                },
                $f: function(e, r, t, n) {
                    var o = Mr.getShaderInfoLog(Me.shaders[e]);
                    null === o && (o = "(unknown error)");
                    var a = r > 0 && n ? O(o, n, r) : 0;
                    t && (D[t >> 2] = a)
                },
                _f: function(e, r, t, n) {
                    var o = Mr.getShaderPrecisionFormat(e, r);
                    D[t >> 2] = o.rangeMin, D[t + 4 >> 2] = o.rangeMax, D[n >> 2] = o.precision
                },
                Zf: function(e, r, t, n) {
                    var o = Mr.getShaderSource(Me.shaders[e]);
                    if (o) {
                        var a = r > 0 && n ? O(o, n, r) : 0;
                        t && (D[t >> 2] = a)
                    }
                },
                ag: function(e, r, t) {
                    if (t)
                        if (35716 == r) {
                            var n = Mr.getShaderInfoLog(Me.shaders[e]);
                            null === n && (n = "(unknown error)");
                            var o = n ? n.length + 1 : 0;
                            D[t >> 2] = o
                        } else if (35720 == r) {
                        var a = Mr.getShaderSource(Me.shaders[e]),
                            i = a ? a.length + 1 : 0;
                        D[t >> 2] = i
                    } else D[t >> 2] = Mr.getShaderParameter(Me.shaders[e], r);
                    else Me.recordError(1281)
                },
                Yf: function(e) {
                    var r = Me.stringCache[e];
                    if (!r) {
                        switch (e) {
                            case 7939:
                                var t = Mr.getSupportedExtensions() || [];
                                r = ur((t = t.concat(t.map((function(e) {
                                    return "GL_" + e
                                })))).join(" "));
                                break;
                            case 7936:
                            case 7937:
                            case 37445:
                            case 37446:
                                var n = Mr.getParameter(e);
                                n || Me.recordError(1280), r = n && ur(n);
                                break;
                            case 7938:
                                var o = Mr.getParameter(7938);
                                r = ur(o = Me.currentContext.version >= 2 ? "OpenGL ES 3.0 (" + o + ")" : "OpenGL ES 2.0 (" + o + ")");
                                break;
                            case 35724:
                                var a = Mr.getParameter(35724),
                                    i = a.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
                                null !== i && (3 == i[1].length && (i[1] = i[1] + "0"), a = "OpenGL ES GLSL ES " + i[1] + " (" + a + ")"), r = ur(a);
                                break;
                            default:
                                Me.recordError(1280)
                        }
                        Me.stringCache[e] = r
                    }
                    return r
                },
                vd: function(e, r) {
                    if (Me.currentContext.version < 2) return Me.recordError(1282), 0;
                    var t = Me.stringiCache[e];
                    if (t) return r < 0 || r >= t.length ? (Me.recordError(1281), 0) : t[r];
                    if (7939 === e) {
                        var n = Mr.getSupportedExtensions() || [];
                        return n = (n = n.concat(n.map((function(e) {
                            return "GL_" + e
                        })))).map((function(e) {
                            return ur(e)
                        })), t = Me.stringiCache[e] = n, r < 0 || r >= t.length ? (Me.recordError(1281), 0) : t[r]
                    }
                    return Me.recordError(1280), 0
                },
                ed: function(e, r, t, n, o) {
                    if (t < 0) Me.recordError(1281);
                    else if (o) {
                        var a = Mr.getSyncParameter(Me.syncs[e], r);
                        null !== a && (D[o >> 2] = a, n && (D[n >> 2] = 1))
                    } else Me.recordError(1281)
                },
                Wf: function(e, r, t) {
                    t ? F[t >> 2] = Mr.getTexParameter(e, r) : Me.recordError(1281)
                },
                Vf: function(e, r, t) {
                    t ? D[t >> 2] = Mr.getTexParameter(e, r) : Me.recordError(1281)
                },
                Rd: function(e, r, t, n, o, a, i) {
                    e = Me.programs[e];
                    var u = Mr.getTransformFeedbackVarying(e, r);
                    if (u) {
                        if (i && t > 0) {
                            var s = O(u.name, i, t);
                            n && (D[n >> 2] = s)
                        } else n && (D[n >> 2] = 0);
                        o && (D[o >> 2] = u.size), a && (D[a >> 2] = u.type)
                    }
                },
                rd: function(e, r) {
                    return Mr.getUniformBlockIndex(Me.programs[e], M(r))
                },
                td: function(e, r, t, n) {
                    if (n)
                        if (r > 0 && (0 == t || 0 == n)) Me.recordError(1281);
                        else {
                            e = Me.programs[e];
                            for (var o = [], a = 0; a < r; a++) o.push(M(D[t + 4 * a >> 2]));
                            var i = Mr.getUniformIndices(e, o);
                            if (i) {
                                var u = i.length;
                                for (a = 0; a < u; a++) D[n + 4 * a >> 2] = i[a]
                            }
                        }
                    else Me.recordError(1281)
                },
                Sf: function(e, r) {
                    if (r = M(r), e = Me.programs[e]) {
                        fr(e);
                        var t = e.uniformLocsById,
                            n = 0,
                            o = r,
                            a = cr(r);
                        a > 0 && (n = sr(r.slice(a + 1)) >>> 0, o = r.slice(0, a));
                        var i = e.uniformSizeAndIdsByName[o];
                        if (i && n < i[0] && (t[n += i[1]] = t[n] || Mr.getUniformLocation(e, r))) return n
                    } else Me.recordError(1281);
                    return -1
                },
                Uf: function(e, r, t) {
                    dr(e, r, t, 2)
                },
                Tf: function(e, r, t) {
                    dr(e, r, t, 0)
                },
                Jd: function(e, r, t) {
                    dr(e, r, t, 0)
                },
                Pd: function(e, r, t) {
                    mr(e, r, t, 0)
                },
                Od: function(e, r, t) {
                    mr(e, r, t, 0)
                },
                Pf: function(e, r, t) {
                    t ? (Me.currentContext.clientBuffers[e].enabled && m("glGetVertexAttribPointer on client-side array: not supported, bad data returned"), D[t >> 2] = Mr.getVertexAttribOffset(e, r)) : Me.recordError(1281)
                },
                Rf: function(e, r, t) {
                    mr(e, r, t, 2)
                },
                Qf: function(e, r, t) {
                    mr(e, r, t, 5)
                },
                Of: function(e, r) {
                    Mr.hint(e, r)
                },
                Hc: function(e, r, t) {
                    for (var n = er[r], o = 0; o < r; o++) n[o] = D[t + 4 * o >> 2];
                    Mr.invalidateFramebuffer(e, n)
                },
                Fc: function(e, r, t, n, o, a, i) {
                    for (var u = er[r], s = 0; s < r; s++) u[s] = D[t + 4 * s >> 2];
                    Mr.invalidateSubFramebuffer(e, u, n, o, a, i)
                },
                Nf: function(e) {
                    var r = Me.buffers[e];
                    return r ? Mr.isBuffer(r) : 0
                },
                Lf: function(e) {
                    return Mr.isEnabled(e)
                },
                Kf: function(e) {
                    var r = Me.framebuffers[e];
                    return r ? Mr.isFramebuffer(r) : 0
                },
                Jf: function(e) {
                    return (e = Me.programs[e]) ? Mr.isProgram(e) : 0
                },
                pe: function(e) {
                    var r = Me.queries[e];
                    return r ? Mr.isQuery(r) : 0
                },
                Hh: function(e) {
                    var r = Me.queries[e];
                    return r ? Mr.disjointTimerQueryExt.isQueryEXT(r) : 0
                },
                If: function(e) {
                    var r = Me.renderbuffers[e];
                    return r ? Mr.isRenderbuffer(r) : 0
                },
                _c: function(e) {
                    var r = Me.samplers[e];
                    return r ? Mr.isSampler(r) : 0
                },
                Hf: function(e) {
                    var r = Me.shaders[e];
                    return r ? Mr.isShader(r) : 0
                },
                jd: function(e) {
                    return Mr.isSync(Me.syncs[e])
                },
                Gf: function(e) {
                    var r = Me.textures[e];
                    return r ? Mr.isTexture(r) : 0
                },
                Nc: function(e) {
                    return Mr.isTransformFeedback(Me.transformFeedbacks[e])
                },
                Yd: function(e) {
                    var r = Me.vaos[e];
                    return r ? Mr.isVertexArray(r) : 0
                },
                vh: function(e) {
                    var r = Me.vaos[e];
                    return r ? Mr.isVertexArray(r) : 0
                },
                Ff: function(e) {
                    Mr.lineWidth(e)
                },
                Ef: function(e) {
                    e = Me.programs[e], Mr.linkProgram(e), e.uniformLocsById = 0, e.uniformSizeAndIdsByName = {}
                },
                Mc: function() {
                    Mr.pauseTransformFeedback()
                },
                Df: function(e, r) {
                    3317 == e && (Me.unpackAlignment = r), Mr.pixelStorei(e, r)
                },
                Cf: function(e, r) {
                    Mr.polygonOffset(e, r)
                },
                Jc: function(e, r, t, n) {
                    Me.recordError(1280)
                },
                Ic: function(e, r, t) {
                    Me.recordError(1280)
                },
                Eh: function(e, r) {
                    Mr.disjointTimerQueryExt.queryCounterEXT(Me.queries[e], r)
                },
                ye: function(e) {
                    Mr.readBuffer(e)
                },
                Af: function(e, r, t, n, o, a, i) {
                    if (Me.currentContext.version >= 2)
                        if (Mr.currentPixelPackBufferBinding) Mr.readPixels(e, r, t, n, o, a, i);
                        else {
                            var u = pr(a);
                            Mr.readPixels(e, r, t, n, o, a, u, i >> vr(u))
                        }
                    else {
                        var s = gr(a, o, t, n, i);
                        s ? Mr.readPixels(e, r, t, n, o, a, s) : Me.recordError(1280)
                    }
                },
                zf: function() {},
                yf: function(e, r, t, n) {
                    Mr.renderbufferStorage(e, r, t, n)
                },
                ce: function(e, r, t, n, o) {
                    Mr.renderbufferStorageMultisample(e, r, t, n, o)
                },
                Lc: function() {
                    Mr.resumeTransformFeedback()
                },
                xf: function(e, r) {
                    Mr.sampleCoverage(e, !!r)
                },
                Wc: function(e, r, t) {
                    Mr.samplerParameterf(Me.samplers[e], r, t)
                },
                Vc: function(e, r, t) {
                    var n = F[t >> 2];
                    Mr.samplerParameterf(Me.samplers[e], r, n)
                },
                Yc: function(e, r, t) {
                    Mr.samplerParameteri(Me.samplers[e], r, t)
                },
                Xc: function(e, r, t) {
                    var n = D[t >> 2];
                    Mr.samplerParameteri(Me.samplers[e], r, n)
                },
                wf: function(e, r, t, n) {
                    Mr.scissor(e, r, t, n)
                },
                vf: function() {
                    Me.recordError(1280)
                },
                uf: function(e, r, t, n) {
                    var o = Me.getSource(e, r, t, n);
                    Mr.shaderSource(Me.shaders[e], o)
                },
                tf: function(e, r, t) {
                    Mr.stencilFunc(e, r, t)
                },
                sf: function(e, r, t, n) {
                    Mr.stencilFuncSeparate(e, r, t, n)
                },
                rf: function(e) {
                    Mr.stencilMask(e)
                },
                pf: function(e, r) {
                    Mr.stencilMaskSeparate(e, r)
                },
                of: function(e, r, t) {
                    Mr.stencilOp(e, r, t)
                },
                nf: function(e, r, t, n) {
                    Mr.stencilOpSeparate(e, r, t, n)
                },
                mf: function(e, r, t, n, o, a, i, u, s) {
                    if (Me.currentContext.version >= 2)
                        if (Mr.currentPixelUnpackBufferBinding) Mr.texImage2D(e, r, t, n, o, a, i, u, s);
                        else if (s) {
                        var c = pr(u);
                        Mr.texImage2D(e, r, t, n, o, a, i, u, c, s >> vr(c))
                    } else Mr.texImage2D(e, r, t, n, o, a, i, u, null);
                    else Mr.texImage2D(e, r, t, n, o, a, i, u, s ? gr(u, i, n, o, s) : null)
                },
                we: function(e, r, t, n, o, a, i, u, s, c) {
                    if (Mr.currentPixelUnpackBufferBinding) Mr.texImage3D(e, r, t, n, o, a, i, u, s, c);
                    else if (c) {
                        var f = pr(s);
                        Mr.texImage3D(e, r, t, n, o, a, i, u, s, f, c >> vr(f))
                    } else Mr.texImage3D(e, r, t, n, o, a, i, u, s, null)
                },
                lf: function(e, r, t) {
                    Mr.texParameterf(e, r, t)
                },
                kf: function(e, r, t) {
                    var n = F[t >> 2];
                    Mr.texParameterf(e, r, n)
                },
                jf: function(e, r, t) {
                    Mr.texParameteri(e, r, t)
                },
                hf: function(e, r, t) {
                    var n = D[t >> 2];
                    Mr.texParameteri(e, r, n)
                },
                Ec: function(e, r, t, n, o) {
                    Mr.texStorage2D(e, r, t, n, o)
                },
                Dc: function(e, r, t, n, o, a) {
                    Mr.texStorage3D(e, r, t, n, o, a)
                },
                gf: function(e, r, t, n, o, a, i, u, s) {
                    if (Me.currentContext.version >= 2)
                        if (Mr.currentPixelUnpackBufferBinding) Mr.texSubImage2D(e, r, t, n, o, a, i, u, s);
                        else if (s) {
                        var c = pr(u);
                        Mr.texSubImage2D(e, r, t, n, o, a, i, u, c, s >> vr(c))
                    } else Mr.texSubImage2D(e, r, t, n, o, a, i, u, null);
                    else {
                        var f = null;
                        s && (f = gr(u, i, o, a, s)), Mr.texSubImage2D(e, r, t, n, o, a, i, u, f)
                    }
                },
                ve: function(e, r, t, n, o, a, i, u, s, c, f) {
                    if (Mr.currentPixelUnpackBufferBinding) Mr.texSubImage3D(e, r, t, n, o, a, i, u, s, c, f);
                    else if (f) {
                        var l = pr(c);
                        Mr.texSubImage3D(e, r, t, n, o, a, i, u, s, c, l, f >> vr(l))
                    } else Mr.texSubImage3D(e, r, t, n, o, a, i, u, s, c, null)
                },
                Sd: function(e, r, t, n) {
                    e = Me.programs[e];
                    for (var o = [], a = 0; a < r; a++) o.push(M(D[t + 4 * a >> 2]));
                    Mr.transformFeedbackVaryings(e, o, n)
                },
                ff: function(e, r) {
                    Mr.uniform1f(lr(e), r)
                },
                ef: function(e, r, t) {
                    if (Me.currentContext.version >= 2) Mr.uniform1fv(lr(e), F, t >> 2, r);
                    else {
                        if (r <= 288)
                            for (var n = hr[r - 1], o = 0; o < r; ++o) n[o] = F[t + 4 * o >> 2];
                        else n = F.subarray(t >> 2, t + 4 * r >> 2);
                        Mr.uniform1fv(lr(e), n)
                    }
                },
                df: function(e, r) {
                    Mr.uniform1i(lr(e), r)
                },
                cf: function(e, r, t) {
                    if (Me.currentContext.version >= 2) Mr.uniform1iv(lr(e), D, t >> 2, r);
                    else {
                        if (r <= 288)
                            for (var n = br[r - 1], o = 0; o < r; ++o) n[o] = D[t + 4 * o >> 2];
                        else n = D.subarray(t >> 2, t + 4 * r >> 2);
                        Mr.uniform1iv(lr(e), n)
                    }
                },
                Hd: function(e, r) {
                    Mr.uniform1ui(lr(e), r)
                },
                Dd: function(e, r, t) {
                    Mr.uniform1uiv(lr(e), P, t >> 2, r)
                },
                bf: function(e, r, t) {
                    Mr.uniform2f(lr(e), r, t)
                },
                af: function(e, r, t) {
                    if (Me.currentContext.version >= 2) Mr.uniform2fv(lr(e), F, t >> 2, 2 * r);
                    else {
                        if (r <= 144)
                            for (var n = hr[2 * r - 1], o = 0; o < 2 * r; o += 2) n[o] = F[t + 4 * o >> 2], n[o + 1] = F[t + (4 * o + 4) >> 2];
                        else n = F.subarray(t >> 2, t + 8 * r >> 2);
                        Mr.uniform2fv(lr(e), n)
                    }
                },
                $e: function(e, r, t) {
                    Mr.uniform2i(lr(e), r, t)
                },
                _e: function(e, r, t) {
                    if (Me.currentContext.version >= 2) Mr.uniform2iv(lr(e), D, t >> 2, 2 * r);
                    else {
                        if (r <= 144)
                            for (var n = br[2 * r - 1], o = 0; o < 2 * r; o += 2) n[o] = D[t + 4 * o >> 2], n[o + 1] = D[t + (4 * o + 4) >> 2];
                        else n = D.subarray(t >> 2, t + 8 * r >> 2);
                        Mr.uniform2iv(lr(e), n)
                    }
                },
                Gd: function(e, r, t) {
                    Mr.uniform2ui(lr(e), r, t)
                },
                Cd: function(e, r, t) {
                    Mr.uniform2uiv(lr(e), P, t >> 2, 2 * r)
                },
                Ze: function(e, r, t, n) {
                    Mr.uniform3f(lr(e), r, t, n)
                },
                Ye: function(e, r, t) {
                    if (Me.currentContext.version >= 2) Mr.uniform3fv(lr(e), F, t >> 2, 3 * r);
                    else {
                        if (r <= 96)
                            for (var n = hr[3 * r - 1], o = 0; o < 3 * r; o += 3) n[o] = F[t + 4 * o >> 2], n[o + 1] = F[t + (4 * o + 4) >> 2], n[o + 2] = F[t + (4 * o + 8) >> 2];
                        else n = F.subarray(t >> 2, t + 12 * r >> 2);
                        Mr.uniform3fv(lr(e), n)
                    }
                },
                Xe: function(e, r, t, n) {
                    Mr.uniform3i(lr(e), r, t, n)
                },
                We: function(e, r, t) {
                    if (Me.currentContext.version >= 2) Mr.uniform3iv(lr(e), D, t >> 2, 3 * r);
                    else {
                        if (r <= 96)
                            for (var n = br[3 * r - 1], o = 0; o < 3 * r; o += 3) n[o] = D[t + 4 * o >> 2], n[o + 1] = D[t + (4 * o + 4) >> 2], n[o + 2] = D[t + (4 * o + 8) >> 2];
                        else n = D.subarray(t >> 2, t + 12 * r >> 2);
                        Mr.uniform3iv(lr(e), n)
                    }
                },
                Fd: function(e, r, t, n) {
                    Mr.uniform3ui(lr(e), r, t, n)
                },
                Bd: function(e, r, t) {
                    Mr.uniform3uiv(lr(e), P, t >> 2, 3 * r)
                },
                Ve: function(e, r, t, n, o) {
                    Mr.uniform4f(lr(e), r, t, n, o)
                },
                Ue: function(e, r, t) {
                    if (Me.currentContext.version >= 2) Mr.uniform4fv(lr(e), F, t >> 2, 4 * r);
                    else {
                        if (r <= 72) {
                            var n = hr[4 * r - 1],
                                o = F;
                            t >>= 2;
                            for (var a = 0; a < 4 * r; a += 4) {
                                var i = t + a;
                                n[a] = o[i], n[a + 1] = o[i + 1], n[a + 2] = o[i + 2], n[a + 3] = o[i + 3]
                            }
                        } else n = F.subarray(t >> 2, t + 16 * r >> 2);
                        Mr.uniform4fv(lr(e), n)
                    }
                },
                Te: function(e, r, t, n, o) {
                    Mr.uniform4i(lr(e), r, t, n, o)
                },
                Se: function(e, r, t) {
                    if (Me.currentContext.version >= 2) Mr.uniform4iv(lr(e), D, t >> 2, 4 * r);
                    else {
                        if (r <= 72)
                            for (var n = br[4 * r - 1], o = 0; o < 4 * r; o += 4) n[o] = D[t + 4 * o >> 2], n[o + 1] = D[t + (4 * o + 4) >> 2], n[o + 2] = D[t + (4 * o + 8) >> 2], n[o + 3] = D[t + (4 * o + 12) >> 2];
                        else n = D.subarray(t >> 2, t + 16 * r >> 2);
                        Mr.uniform4iv(lr(e), n)
                    }
                },
                Ed: function(e, r, t, n, o) {
                    Mr.uniform4ui(lr(e), r, t, n, o)
                },
                Ad: function(e, r, t) {
                    Mr.uniform4uiv(lr(e), P, t >> 2, 4 * r)
                },
                od: function(e, r, t) {
                    e = Me.programs[e], Mr.uniformBlockBinding(e, r, t)
                },
                Re: function(e, r, t, n) {
                    if (Me.currentContext.version >= 2) Mr.uniformMatrix2fv(lr(e), !!t, F, n >> 2, 4 * r);
                    else {
                        if (r <= 72)
                            for (var o = hr[4 * r - 1], a = 0; a < 4 * r; a += 4) o[a] = F[n + 4 * a >> 2], o[a + 1] = F[n + (4 * a + 4) >> 2], o[a + 2] = F[n + (4 * a + 8) >> 2], o[a + 3] = F[n + (4 * a + 12) >> 2];
                        else o = F.subarray(n >> 2, n + 16 * r >> 2);
                        Mr.uniformMatrix2fv(lr(e), !!t, o)
                    }
                },
                je: function(e, r, t, n) {
                    Mr.uniformMatrix2x3fv(lr(e), !!t, F, n >> 2, 6 * r)
                },
                he: function(e, r, t, n) {
                    Mr.uniformMatrix2x4fv(lr(e), !!t, F, n >> 2, 8 * r)
                },
                Qe: function(e, r, t, n) {
                    if (Me.currentContext.version >= 2) Mr.uniformMatrix3fv(lr(e), !!t, F, n >> 2, 9 * r);
                    else {
                        if (r <= 32)
                            for (var o = hr[9 * r - 1], a = 0; a < 9 * r; a += 9) o[a] = F[n + 4 * a >> 2], o[a + 1] = F[n + (4 * a + 4) >> 2], o[a + 2] = F[n + (4 * a + 8) >> 2], o[a + 3] = F[n + (4 * a + 12) >> 2], o[a + 4] = F[n + (4 * a + 16) >> 2], o[a + 5] = F[n + (4 * a + 20) >> 2], o[a + 6] = F[n + (4 * a + 24) >> 2], o[a + 7] = F[n + (4 * a + 28) >> 2], o[a + 8] = F[n + (4 * a + 32) >> 2];
                        else o = F.subarray(n >> 2, n + 36 * r >> 2);
                        Mr.uniformMatrix3fv(lr(e), !!t, o)
                    }
                },
                ie: function(e, r, t, n) {
                    Mr.uniformMatrix3x2fv(lr(e), !!t, F, n >> 2, 6 * r)
                },
                fe: function(e, r, t, n) {
                    Mr.uniformMatrix3x4fv(lr(e), !!t, F, n >> 2, 12 * r)
                },
                Pe: function(e, r, t, n) {
                    if (Me.currentContext.version >= 2) Mr.uniformMatrix4fv(lr(e), !!t, F, n >> 2, 16 * r);
                    else {
                        if (r <= 18) {
                            var o = hr[16 * r - 1],
                                a = F;
                            n >>= 2;
                            for (var i = 0; i < 16 * r; i += 16) {
                                var u = n + i;
                                o[i] = a[u], o[i + 1] = a[u + 1], o[i + 2] = a[u + 2], o[i + 3] = a[u + 3], o[i + 4] = a[u + 4], o[i + 5] = a[u + 5], o[i + 6] = a[u + 6], o[i + 7] = a[u + 7], o[i + 8] = a[u + 8], o[i + 9] = a[u + 9], o[i + 10] = a[u + 10], o[i + 11] = a[u + 11], o[i + 12] = a[u + 12], o[i + 13] = a[u + 13], o[i + 14] = a[u + 14], o[i + 15] = a[u + 15]
                            }
                        } else o = F.subarray(n >> 2, n + 64 * r >> 2);
                        Mr.uniformMatrix4fv(lr(e), !!t, o)
                    }
                },
                ge: function(e, r, t, n) {
                    Mr.uniformMatrix4x2fv(lr(e), !!t, F, n >> 2, 8 * r)
                },
                ee: function(e, r, t, n) {
                    Mr.uniformMatrix4x3fv(lr(e), !!t, F, n >> 2, 12 * r)
                },
                Oe: function(e) {
                    e = Me.programs[e], Mr.useProgram(e), Mr.currentProgram = e
                },
                Ne: function(e) {
                    Mr.validateProgram(Me.programs[e])
                },
                Me: function(e, r) {
                    Mr.vertexAttrib1f(e, r)
                },
                Le: function(e, r) {
                    Mr.vertexAttrib1f(e, F[r >> 2])
                },
                Ke: function(e, r, t) {
                    Mr.vertexAttrib2f(e, r, t)
                },
                Je: function(e, r) {
                    Mr.vertexAttrib2f(e, F[r >> 2], F[r + 4 >> 2])
                },
                Ie: function(e, r, t, n) {
                    Mr.vertexAttrib3f(e, r, t, n)
                },
                He: function(e, r) {
                    Mr.vertexAttrib3f(e, F[r >> 2], F[r + 4 >> 2], F[r + 8 >> 2])
                },
                Ge: function(e, r, t, n, o) {
                    Mr.vertexAttrib4f(e, r, t, n, o)
                },
                Fe: function(e, r) {
                    Mr.vertexAttrib4f(e, F[r >> 2], F[r + 4 >> 2], F[r + 8 >> 2], F[r + 12 >> 2])
                },
                Sc: function(e, r) {
                    Mr.vertexAttribDivisor(e, r)
                },
                rh: function(e, r) {
                    Mr.vertexAttribDivisor(e, r)
                },
                Ac: function(e, r) {
                    Mr.vertexAttribDivisor(e, r)
                },
                Ce: function(e, r) {
                    Mr.vertexAttribDivisor(e, r)
                },
                Bc: function(e, r) {
                    Mr.vertexAttribDivisor(e, r)
                },
                Nd: function(e, r, t, n, o) {
                    Mr.vertexAttribI4i(e, r, t, n, o)
                },
                Ld: function(e, r) {
                    Mr.vertexAttribI4i(e, D[r >> 2], D[r + 4 >> 2], D[r + 8 >> 2], D[r + 12 >> 2])
                },
                Md: function(e, r, t, n, o) {
                    Mr.vertexAttribI4ui(e, r, t, n, o)
                },
                Kd: function(e, r) {
                    Mr.vertexAttribI4ui(e, P[r >> 2], P[r + 4 >> 2], P[r + 8 >> 2], P[r + 12 >> 2])
                },
                Qd: function(e, r, t, n, o) {
                    Mr.vertexAttribIPointer(e, r, t, n, o)
                },
                Ee: function(e, r, t, n, o, a) {
                    var i = Me.currentContext.clientBuffers[e];
                    if (!Mr.currentArrayBufferBinding) return i.size = r, i.type = t, i.normalized = n, i.stride = o, i.ptr = a, i.clientside = !0, void(i.vertexAttribPointerAdaptor = function(e, r, t, n, o, a) {
                        this.vertexAttribPointer(e, r, t, n, o, a)
                    });
                    i.clientside = !1, Mr.vertexAttribPointer(e, r, t, !!n, o, a)
                },
                De: function(e, r, t, n) {
                    Mr.viewport(e, r, t, n)
                },
                gd: function(e, r, t, n) {
                    Mr.waitSync(Me.syncs[e], r, Je(t, n))
                },
                Ma: function() {
                    return 0
                },
                Mh: function() {
                    return !0
                },
                S: function(e, r, t) {
                    ! function(e, r) {
                        24 & e && (r = r.replace(/\s+$/, ""), r += (r.length > 0 ? "\n" : "") + function(e) {
                            var r = he(),
                                t = r.lastIndexOf("_emscripten_log"),
                                n = r.lastIndexOf("_emscripten_get_callstack"),
                                o = r.indexOf("\n", Math.max(t, n)) + 1;
                            r = r.slice(o), 32 & e && p("EM_LOG_DEMANGLE is deprecated; ignoring"), 8 & e && "undefined" == typeof emscripten_source_map && (p('Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with "--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js" linker flag to add source map loading to code.'), e ^= 8, e |= 16);
                            var a = null;
                            if (128 & e)
                                for (a = xr(arguments); a[1].includes("_emscripten_");) a = xr(a[0]);
                            var i = r.split("\n");
                            r = "";
                            var u = new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)"),
                                s = new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?"),
                                c = new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");
                            for (var f in i) {
                                var l = i[f],
                                    d = "",
                                    m = "",
                                    v = 0,
                                    g = 0,
                                    h = c.exec(l);
                                if (h && 5 == h.length) d = h[1], m = h[2], v = h[3], g = h[4];
                                else {
                                    if ((h = u.exec(l)) || (h = s.exec(l)), !(h && h.length >= 4)) {
                                        r += l + "\n";
                                        continue
                                    }
                                    d = h[1], m = h[2], v = h[3], g = 0 | h[4]
                                }
                                var b = !1;
                                if (8 & e) {
                                    var y = emscripten_source_map.originalPositionFor({
                                        line: v,
                                        column: g
                                    });
                                    (b = y && y.source) && (64 & e && (y.source = y.source.substring(y.source.replace(/\\/g, "/").lastIndexOf("/") + 1)), r += "    at " + d + " (" + y.source + ":" + y.line + ":" + y.column + ")\n")
                                }(16 & e || !b) && (64 & e && (m = m.substring(m.replace(/\\/g, "/").lastIndexOf("/") + 1)), r += (b ? "     = " + d : "    at " + d) + " (" + m + ":" + v + ":" + g + ")\n"), 128 & e && a[0] && (a[1] == d && a[2].length > 0 && (r = r.replace(/\s+$/, ""), r += " with values: " + a[1] + a[2] + "\n"), a = xr(a[0]))
                            }
                            return r.replace(/\s+$/, "")
                        }(e)), 1 & e ? 4 & e ? console.error(r) : 2 & e ? console.warn(r) : 512 & e ? console.info(r) : 256 & e ? console.debug(r) : console.log(r) : 6 & e ? m(r) : d(r)
                    }(e, R(function(e, r) {
                        var t = e,
                            n = r;

                        function o(e) {
                            var r;
                            return n = function(e, r) {
                                return "double" !== r && "i64" !== r || 7 & e && (e += 4), e
                            }(n, e), "double" === e ? (r = Number(T[n >> 3]), n += 8) : "i64" == e ? (r = [D[n >> 2], D[n + 4 >> 2]], n += 8) : (e = "i32", r = D[n >> 2], n += 4), r
                        }
                        for (var a, i, u, s, c = [];;) {
                            var f = t;
                            if (0 === (a = A[t >> 0])) break;
                            if (i = A[t + 1 >> 0], 37 == a) {
                                var l = !1,
                                    d = !1,
                                    m = !1,
                                    p = !1,
                                    v = !1;
                                e: for (;;) {
                                    switch (i) {
                                        case 43:
                                            l = !0;
                                            break;
                                        case 45:
                                            d = !0;
                                            break;
                                        case 35:
                                            m = !0;
                                            break;
                                        case 48:
                                            if (p) break e;
                                            p = !0;
                                            break;
                                        case 32:
                                            v = !0;
                                            break;
                                        default:
                                            break e
                                    }
                                    t++, i = A[t + 1 >> 0]
                                }
                                var g = 0;
                                if (42 == i) g = o("i32"), t++, i = A[t + 1 >> 0];
                                else
                                    for (; i >= 48 && i <= 57;) g = 10 * g + (i - 48), t++, i = A[t + 1 >> 0];
                                var h, b = !1,
                                    y = -1;
                                if (46 == i) {
                                    if (y = 0, b = !0, t++, 42 == (i = A[t + 1 >> 0])) y = o("i32"), t++;
                                    else
                                        for (;;) {
                                            var w = A[t + 1 >> 0];
                                            if (w < 48 || w > 57) break;
                                            y = 10 * y + (w - 48), t++
                                        }
                                    i = A[t + 1 >> 0]
                                }
                                switch (y < 0 && (y = 6, b = !1), String.fromCharCode(i)) {
                                    case "h":
                                        104 == A[t + 2 >> 0] ? (t++, h = 1) : h = 2;
                                        break;
                                    case "l":
                                        108 == A[t + 2 >> 0] ? (t++, h = 8) : h = 4;
                                        break;
                                    case "L":
                                    case "q":
                                    case "j":
                                        h = 8;
                                        break;
                                    case "z":
                                    case "t":
                                    case "I":
                                        h = 4;
                                        break;
                                    default:
                                        h = null
                                }
                                switch (h && t++, i = A[t + 1 >> 0], String.fromCharCode(i)) {
                                    case "d":
                                    case "i":
                                    case "u":
                                    case "o":
                                    case "x":
                                    case "X":
                                    case "p":
                                        var x = 100 == i || 105 == i;
                                        u = o("i" + 8 * (h = h || 4)), 8 == h && (u = 117 == i ? (u[0] >>> 0) + 4294967296 * (u[1] >>> 0) : Je(u[0], u[1])), h <= 4 && (u = (x ? yr : wr)(u & Math.pow(256, h) - 1, 8 * h));
                                        var E = Math.abs(u),
                                            k = "";
                                        if (100 == i || 105 == i) B = yr(u, 8 * h).toString(10);
                                        else if (117 == i) B = wr(u, 8 * h).toString(10), u = Math.abs(u);
                                        else if (111 == i) B = (m ? "0" : "") + E.toString(8);
                                        else if (120 == i || 88 == i) {
                                            if (k = m && 0 != u ? "0x" : "", u < 0) {
                                                u = -u, B = (E - 1).toString(16);
                                                for (var C = [], S = 0; S < B.length; S++) C.push((15 - parseInt(B[S], 16)).toString(16));
                                                for (B = C.join(""); B.length < 2 * h;) B = "f" + B
                                            } else B = E.toString(16);
                                            88 == i && (k = k.toUpperCase(), B = B.toUpperCase())
                                        } else 112 == i && (0 === E ? B = "(nil)" : (k = "0x", B = E.toString(16)));
                                        if (b)
                                            for (; B.length < y;) B = "0" + B;
                                        for (u >= 0 && (l ? k = "+" + k : v && (k = " " + k)), "-" == B.charAt(0) && (k = "-" + k, B = B.substr(1)); k.length + B.length < g;) d ? B += " " : p ? B = "0" + B : k = " " + k;
                                        (B = k + B).split("").forEach((function(e) {
                                            c.push(e.charCodeAt(0))
                                        }));
                                        break;
                                    case "f":
                                    case "F":
                                    case "e":
                                    case "E":
                                    case "g":
                                    case "G":
                                        var B;
                                        if (u = o("double"), isNaN(u)) B = "nan", p = !1;
                                        else if (isFinite(u)) {
                                            var _ = !1,
                                                P = Math.min(y, 20);
                                            if (103 == i || 71 == i) {
                                                _ = !0, y = y || 1;
                                                var F = parseInt(u.toExponential(P).split("e")[1], 10);
                                                y > F && F >= -4 ? (i = (103 == i ? "f" : "F").charCodeAt(0), y -= F + 1) : (i = (103 == i ? "e" : "E").charCodeAt(0), y--), P = Math.min(y, 20)
                                            }
                                            101 == i || 69 == i ? (B = u.toExponential(P), /[eE][-+]\d$/.test(B) && (B = B.slice(0, -1) + "0" + B.slice(-1))) : 102 != i && 70 != i || (B = u.toFixed(P), 0 === u && ((s = u) < 0 || 0 === s && 1 / s == -1 / 0) && (B = "-" + B));
                                            var I = B.split("e");
                                            if (_ && !m)
                                                for (; I[0].length > 1 && I[0].includes(".") && ("0" == I[0].slice(-1) || "." == I[0].slice(-1));) I[0] = I[0].slice(0, -1);
                                            else
                                                for (m && -1 == B.indexOf(".") && (I[0] += "."); y > P++;) I[0] += "0";
                                            B = I[0] + (I.length > 1 ? "e" + I[1] : ""), 69 == i && (B = B.toUpperCase()), u >= 0 && (l ? B = "+" + B : v && (B = " " + B))
                                        } else B = (u < 0 ? "-" : "") + "inf", p = !1;
                                        for (; B.length < g;) d ? B += " " : B = !p || "-" != B[0] && "+" != B[0] ? (p ? "0" : " ") + B : B[0] + "0" + B.slice(1);
                                        i < 97 && (B = B.toUpperCase()), B.split("").forEach((function(e) {
                                            c.push(e.charCodeAt(0))
                                        }));
                                        break;
                                    case "s":
                                        var R = o("i8*"),
                                            M = R ? Qr(R) : "(null)".length;
                                        if (b && (M = Math.min(M, y)), !d)
                                            for (; M < g--;) c.push(32);
                                        if (R)
                                            for (S = 0; S < M; S++) c.push(L[R++ >> 0]);
                                        else c = c.concat(jr("(null)".substr(0, M), !0));
                                        if (d)
                                            for (; M < g--;) c.push(32);
                                        break;
                                    case "c":
                                        for (d && c.push(o("i8")); --g > 0;) c.push(32);
                                        d || c.push(o("i8"));
                                        break;
                                    case "n":
                                        var N = o("i32*");
                                        D[N >> 2] = c.length;
                                        break;
                                    case "%":
                                        c.push(a);
                                        break;
                                    default:
                                        for (S = f; S < t + 2; S++) c.push(A[S >> 0])
                                }
                                t += 2
                            } else c.push(a), t += 1
                        }
                        return c
                    }(r, t), 0))
                },
                uc: function(e, r, t) {
                    L.copyWithin(e, r, r + t)
                },
                Mb: function(e, r, t) {
                    return function(e, r) {
                        return Oe.fullscreenEnabled() ? (e = je(e)) ? e.requestFullscreen || e.webkitRequestFullscreen ? Oe.canPerformEventHandlerRequests() ? Ye(e, r) : r.deferUntilInEventHandler ? (Oe.deferCall(Ye, 1, [e, r]), 1) : -2 : -3 : -4 : -1
                    }(e, {
                        scaleMode: D[t >> 2],
                        canvasResolutionScaleMode: D[t + 4 >> 2],
                        filteringMode: D[t + 8 >> 2],
                        deferUntilInEventHandler: r,
                        canvasResizedCallback: D[t + 12 >> 2],
                        canvasResizedCallbackUserData: D[t + 16 >> 2]
                    })
                },
                rb: function(e, r) {
                    return (e = je(e)) ? e.requestPointerLock || e.msRequestPointerLock ? Oe.canPerformEventHandlerRequests() ? Ke(e) : r ? (Oe.deferCall(Ke, 2, [e]), 1) : -2 : -1 : -4
                },
                gc: function(e) {
                    var r, t = L.length,
                        n = 2147483648;
                    if ((e >>>= 0) > n) return !1;
                    for (var o = 1; o <= 4; o *= 2) {
                        var a = t * (1 + .2 / o);
                        if (a = Math.min(a, e + 100663296), Er(Math.min(n, ((r = Math.max(e, a)) % 65536 > 0 && (r += 65536 - r % 65536), r)))) return !0
                    }
                    return !1
                },
                wb: function() {
                    return (Oe.lastGamepadState = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : null) ? 0 : -1
                },
                Ha: function(e, r, t) {
                    return "undefined" == typeof onbeforeunload ? -1 : 1 !== t ? -5 : (function(e, r, t, n, o, a) {
                        var i = {
                            target: je(2),
                            eventTypeString: "beforeunload",
                            callbackfunc: n,
                            handlerFunc: function(e) {
                                var t = e || event,
                                    o = pe(n)(28, 0, r);
                                if (o && (o = M(o)), o) return t.preventDefault(), t.returnValue = o, o
                            },
                            useCapture: !0
                        };
                        Oe.registerOrRemoveHandler(i)
                    }(0, e, 0, r), 0)
                },
                pb: function(e, r, t, n, o) {
                    return kr(e, r, t, n, 12, "blur"), 0
                },
                oh: function(e) {
                    if (r.gid = M(e), window.dataLayer) r.ga = function() {
                        window.dataLayer.push(arguments)
                    };
                    else {
                        const e = document.createElement("script");
                        e.async = 1, e.src = "//www.googletagmanager.com/gtag/js?id=" + r.gid, document.head.append(e), window.dataLayer = window.dataLayer || [], r.ga = function() {
                            window.dataLayer.push(arguments)
                        }, r.ga("js", new Date)
                    }
                    r.ga("config", r.gid, {
                        send_page_view: !1
                    })
                },
                na: He,
                Ia: function(e, r, t) {
                    return (e = je(e)) ? (e.style.width = r + "px", e.style.height = t + "px", 0) : -4
                },
                qb: function(e, r, t, n, o) {
                    return kr(e, r, t, n, 13, "focus"), 0
                },
                Ea: function(e, r, t, n, o) {
                    return Oe.fullscreenEnabled() ? (e = je(e)) ? (Cr(e, r, t, n, 19, "fullscreenchange"), Cr(e, r, t, n, 19, "webkitfullscreenchange"), 0) : -4 : -1
                },
                ub: function(e, r, t, n) {
                    return navigator.getGamepads || navigator.webkitGetGamepads ? (Sr(2, e, r, t, 26, "gamepadconnected"), 0) : -1
                },
                tb: function(e, r, t, n) {
                    return navigator.getGamepads || navigator.webkitGetGamepads ? (Sr(2, e, r, t, 27, "gamepaddisconnected"), 0) : -1
                },
                nb: function(e, r, t, n, o) {
                    return Ar(e, r, t, n, 2, "keydown"), 0
                },
                lb: function(e, r, t, n, o) {
                    return Ar(e, r, t, n, 1, "keypress"), 0
                },
                ib: function(e, r, t, n, o) {
                    return Ar(e, r, t, n, 3, "keyup"), 0
                },
                Ag: function(e, r, t, n) {
                    _e((function() {
                        pe(e)(r)
                    }), t, n, r)
                },
                Ua: function(e, r, t, n, o) {
                    return Br(e, r, t, n, 5, "mousedown"), 0
                },
                Ra: function(e, r, t, n, o) {
                    return Br(e, r, t, n, 33, "mouseenter"), 0
                },
                Qa: function(e, r, t, n, o) {
                    return Br(e, r, t, n, 34, "mouseleave"), 0
                },
                Sa: function(e, r, t, n, o) {
                    return Br(e, r, t, n, 8, "mousemove"), 0
                },
                Va: function(e, r, t, n, o) {
                    return Br(e, r, t, n, 6, "mouseup"), 0
                },
                mb: function(e, r, t, n, o) {
                    return document && document.body && (document.body.requestPointerLock || document.body.mozRequestPointerLock || document.body.webkitRequestPointerLock || document.body.msRequestPointerLock) ? (e = je(e)) ? (_r(e, r, t, n, 20, "pointerlockchange"), _r(e, r, t, n, 20, "mozpointerlockchange"), _r(e, r, t, n, 20, "webkitpointerlockchange"), _r(e, r, t, n, 20, "mspointerlockchange"), 0) : -4 : -1
                },
                kb: function(e, r, t, n, o) {
                    return function(e, r, t, n, o, a, i) {
                        Oe.uiEvent || (Oe.uiEvent = Vr(36));
                        var u = {
                            target: e = je(e),
                            eventTypeString: "resize",
                            callbackfunc: n,
                            handlerFunc: function(t) {
                                var o = t || event;
                                if (o.target == e) {
                                    var a = document.body;
                                    if (a) {
                                        var i = Oe.uiEvent;
                                        D[i >> 2] = o.detail, D[i + 4 >> 2] = a.clientWidth, D[i + 8 >> 2] = a.clientHeight, D[i + 12 >> 2] = innerWidth, D[i + 16 >> 2] = innerHeight, D[i + 20 >> 2] = outerWidth, D[i + 24 >> 2] = outerHeight, D[i + 28 >> 2] = pageXOffset, D[i + 32 >> 2] = pageYOffset, pe(n)(10, i, r) && o.preventDefault()
                                    }
                                }
                            },
                            useCapture: t
                        };
                        Oe.registerOrRemoveHandler(u)
                    }(e, r, t, n), 0
                },
                ob: function(e, r, t, n, o) {
                    return Dr(e, r, t, n, 25, "touchcancel"), 0
                },
                Ka: function(e, r, t, n, o) {
                    return Dr(e, r, t, n, 23, "touchend"), 0
                },
                Ja: function(e, r, t, n, o) {
                    return Dr(e, r, t, n, 24, "touchmove"), 0
                },
                Na: function(e, r, t, n, o) {
                    return Dr(e, r, t, n, 22, "touchstart"), 0
                },
                jb: function(e, r, t, n) {
                    return function(e, r, t, n, o, a, i) {
                        Oe.visibilityChangeEvent || (Oe.visibilityChangeEvent = Vr(8));
                        var u = {
                            target: e,
                            eventTypeString: a,
                            callbackfunc: n,
                            handlerFunc: function(e) {
                                var t, a, i = e || event,
                                    u = Oe.visibilityChangeEvent;
                                t = u, a = ["hidden", "visible", "prerender", "unloaded"].indexOf(document.visibilityState), D[t >> 2] = document.hidden, D[t + 4 >> 2] = a, pe(n)(o, u, r) && i.preventDefault()
                            },
                            useCapture: t
                        };
                        Oe.registerOrRemoveHandler(u)
                    }(ze[1], e, r, t, 21, "visibilitychange"), 0
                },
                Pa: function(e, r, t, n, o) {
                    return void 0 !== (e = je(e)).onwheel ? (function(e, r, t, n, o, a, i) {
                        Oe.wheelEvent || (Oe.wheelEvent = Vr(104));
                        var u = {
                            target: e,
                            allowsDeferredCalls: !0,
                            eventTypeString: "wheel",
                            callbackfunc: n,
                            handlerFunc: function(t) {
                                var o = t || event,
                                    a = Oe.wheelEvent;
                                Lr(a, o, e), T[a + 72 >> 3] = o.deltaX, T[a + 80 >> 3] = o.deltaY, T[a + 88 >> 3] = o.deltaZ, D[a + 96 >> 2] = o.deltaMode, pe(n)(9, a, r) && o.preventDefault()
                            },
                            useCapture: t
                        };
                        Oe.registerOrRemoveHandler(u)
                    }(e, r, t, n), 0) : -1
                },
                Oh: function(e) {
                    i(function(e) {
                        for (var r = "";;) {
                            var t = L[e++ >> 0];
                            if (!t) return r;
                            r += String.fromCharCode(t)
                        }
                    }(e))
                },
                La: function() {
                    throw "Please compile your program with async support in order to use asynchronous operations like emscripten_sleep"
                },
                Lh: function(e, r, t, n, o) {
                    var a = e + 112,
                        i = M(a),
                        u = P[a + 36 >> 2],
                        s = P[a + 40 >> 2],
                        c = P[a + 44 >> 2],
                        f = P[a + 48 >> 2],
                        l = P[a + 52 >> 2],
                        d = !!(4 & l),
                        m = !!(32 & l),
                        p = !!(16 & l),
                        v = !!(64 & l),
                        g = (e, t, n) => {
                            De((() => {
                                u ? pe(u)(e) : r && r(e)
                            }), v)
                        },
                        h = (e, r, t) => {
                            De((() => {
                                c ? pe(c)(e) : n && n(e)
                            }), v)
                        },
                        b = (e, r, n) => {
                            De((() => {
                                s ? pe(s)(e) : t && t(e)
                            }), v)
                        },
                        y = (e, r, t) => {
                            De((() => {
                                f ? pe(f)(e) : o && o(e)
                            }), v)
                        },
                        w = (e, t, n) => {
                            Tr(Pr.dbInstance, e, t.response, ((e, t, n) => {
                                De((() => {
                                    u ? pe(u)(e) : r && r(e)
                                }), v)
                            }), ((e, t, n) => {
                                De((() => {
                                    u ? pe(u)(e) : r && r(e)
                                }), v)
                            }))
                        };
                    if ("EM_IDB_STORE" === i) {
                        var x = P[a + 84 >> 2];
                        Tr(Pr.dbInstance, e, L.slice(x, x + P[a + 88 >> 2]), g, b)
                    } else if ("EM_IDB_DELETE" === i) ! function(e, r, t, n) {
                        if (e) {
                            var o = P[r + 112 + 64 >> 2];
                            o || (o = P[r + 8 >> 2]);
                            var a = M(o);
                            try {
                                var i = e.transaction(["FILES"], "readwrite").objectStore("FILES").delete(a);
                                i.onsuccess = e => {
                                    var n = e.target.result;
                                    P[r + 12 >> 2] = 0, Pr.setu64(r + 16, 0), Pr.setu64(r + 24, 0), Pr.setu64(r + 32, 0), _[r + 40 >> 1] = 4, _[r + 42 >> 1] = 200, O("OK", r + 44, 64), t(r, 0, n)
                                }, i.onerror = e => {
                                    _[r + 40 >> 1] = 4, _[r + 42 >> 1] = 404, O("Not Found", r + 44, 64), n(r, 0, e)
                                }
                            } catch (e) {
                                n(r, 0, e)
                            }
                        } else n(r, 0, "IndexedDB not available!")
                    }(Pr.dbInstance, e, g, b);
                    else if (p) {
                        if (m) return 0;
                        Fr(e, d ? w : g, b, h, y)
                    } else ! function(e, r, t, n) {
                        if (e) {
                            var o = P[r + 112 + 64 >> 2];
                            o || (o = P[r + 8 >> 2]);
                            var a = M(o);
                            try {
                                var i = e.transaction(["FILES"], "readonly").objectStore("FILES").get(a);
                                i.onsuccess = e => {
                                    if (e.target.result) {
                                        var o = e.target.result,
                                            a = o.byteLength || o.length,
                                            i = Vr(a);
                                        L.set(new Uint8Array(o), i), P[r + 12 >> 2] = i, Pr.setu64(r + 16, a), Pr.setu64(r + 24, 0), Pr.setu64(r + 32, a), _[r + 40 >> 1] = 4, _[r + 42 >> 1] = 200, O("OK", r + 44, 64), t(r, 0, o)
                                    } else _[r + 40 >> 1] = 4, _[r + 42 >> 1] = 404, O("Not Found", r + 44, 64), n(r, 0, "no data")
                                }, i.onerror = e => {
                                    _[r + 40 >> 1] = 4, _[r + 42 >> 1] = 404, O("Not Found", r + 44, 64), n(r, 0, e)
                                }
                            } catch (e) {
                                n(r, 0, e)
                            }
                        } else n(r, 0, "IndexedDB not available!")
                    }(Pr.dbInstance, e, g, m ? b : d ? (e, r, t) => {
                        Fr(e, w, b, h, y)
                    } : (e, r, t) => {
                        Fr(e, g, b, h, y)
                    });
                    return e
                },
                ic: function(e, r) {
                    var t = 0;
                    return Rr().forEach((function(n, o) {
                        var a = r + t;
                        D[e + 4 * o >> 2] = a,
                            function(e, r, t) {
                                for (var n = 0; n < e.length; ++n) A[r++ >> 0] = e.charCodeAt(n);
                                A[r >> 0] = 0
                            }(n, a), t += n.length + 1
                    })), 0
                },
                jc: function(e, r) {
                    var t = Rr();
                    D[e >> 2] = t.length;
                    var n = 0;
                    return t.forEach((function(e) {
                        n += e.length + 1
                    })), D[r >> 2] = n, 0
                },
                hb: Be,
                db: function(e) {
                    try {
                        var r = Ae.getStreamFromFD(e);
                        return Se.close(r), 0
                    } catch (e) {
                        if (void 0 === Se || !(e instanceof Se.ErrnoError)) throw e;
                        return e.errno
                    }
                },
                nc: function(e, r, t, n) {
                    try {
                        var o = Ae.getStreamFromFD(e),
                            a = Ae.doReadv(o, r, t);
                        return D[n >> 2] = a, 0
                    } catch (e) {
                        if (void 0 === Se || !(e instanceof Se.ErrnoError)) throw e;
                        return e.errno
                    }
                },
                ec: function(e, r, t, n, o) {
                    try {
                        var a = Ae.getStreamFromFD(e),
                            i = 4294967296 * t + (r >>> 0),
                            u = 9007199254740992;
                        return i <= -u || i >= u ? -61 : (Se.llseek(a, i, n), ee = [a.position >>> 0, (J = a.position, +Math.abs(J) >= 1 ? J > 0 ? (0 | Math.min(+Math.floor(J / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((J - +(~~J >>> 0)) / 4294967296) >>> 0 : 0)], D[o >> 2] = ee[0], D[o + 4 >> 2] = ee[1], a.getdents && 0 === i && 0 === n && (a.getdents = null), 0)
                    } catch (e) {
                        if (void 0 === Se || !(e instanceof Se.ErrnoError)) throw e;
                        return e.errno
                    }
                },
                fb: function(e, r, t, n) {
                    try {
                        var o = Ae.getStreamFromFD(e),
                            a = Ae.doWritev(o, r, t);
                        return D[n >> 2] = a, 0
                    } catch (e) {
                        if (void 0 === Se || !(e instanceof Se.ErrnoError)) throw e;
                        return e.errno
                    }
                },
                a: function() {
                    return g
                },
                ma: function(e) {
                    var r = 1665224871000;
                    return D[e >> 2] = r / 1e3 | 0, D[e + 4 >> 2] = r % 1e3 * 1e3 | 0, 0
                },
                w: function(e) {
                    Mr.activeTexture(e)
                },
                Ca: function(e, r) {
                    Mr.attachShader(Me.programs[e], Me.shaders[r])
                },
                hi: function(e, r, t) {
                    Mr.bindAttribLocation(Me.programs[e], r, M(t))
                },
                n: function(e, r) {
                    34962 == e ? Mr.currentArrayBufferBinding = r : 34963 == e && (Mr.currentElementArrayBufferBinding = r), 35051 == e ? Mr.currentPixelPackBufferBinding = r : 35052 == e && (Mr.currentPixelUnpackBufferBinding = r), Mr.bindBuffer(e, Me.buffers[r])
                },
                ka: function(e, r) {
                    Mr.bindFramebuffer(e, Me.framebuffers[r])
                },
                ja: function(e, r) {
                    Mr.bindRenderbuffer(e, Me.renderbuffers[r])
                },
                i: function(e, r) {
                    Mr.bindTexture(e, Me.textures[r])
                },
                ii: function(e) {
                    Mr.blendEquation(e)
                },
                Ab: function(e, r) {
                    Mr.blendEquationSeparate(e, r)
                },
                ji: function(e, r) {
                    Mr.blendFunc(e, r)
                },
                fa: function(e, r, t, n) {
                    Mr.blendFuncSeparate(e, r, t, n)
                },
                ca: function(e, r, t, n) {
                    Me.currentContext.version >= 2 ? t ? Mr.bufferData(e, L, n, t, r) : Mr.bufferData(e, r, n) : Mr.bufferData(e, t ? L.subarray(t, t + r) : r, n)
                },
                ea: function(e, r, t, n) {
                    Me.currentContext.version >= 2 ? Mr.bufferSubData(e, r, L, n, t) : Mr.bufferSubData(e, r, L.subarray(n, n + t))
                },
                Da: function(e) {
                    return Mr.checkFramebufferStatus(e)
                },
                pa: function(e) {
                    Mr.clear(e)
                },
                va: function(e, r, t, n) {
                    Mr.clearColor(e, r, t, n)
                },
                xa: function(e, r, t, n) {
                    Mr.colorMask(!!e, !!r, !!t, !!n)
                },
                Xa: function(e) {
                    Mr.compileShader(Me.shaders[e])
                },
                yb: function(e, r, t, n, o, a, i, u) {
                    Me.currentContext.version >= 2 ? Mr.currentPixelUnpackBufferBinding ? Mr.compressedTexImage2D(e, r, t, n, o, a, i, u) : Mr.compressedTexImage2D(e, r, t, n, o, a, L, u, i) : Mr.compressedTexImage2D(e, r, t, n, o, a, u ? L.subarray(u, u + i) : null)
                },
                Ib: function() {
                    var e = Me.getNewId(Me.programs),
                        r = Mr.createProgram();
                    return r.name = e, r.maxUniformLength = r.maxAttributeLength = r.maxUniformBlockNameLength = 0, r.uniformIdCounter = 1, Me.programs[e] = r, e
                },
                Za: function(e) {
                    var r = Me.getNewId(Me.shaders);
                    return Me.shaders[r] = Mr.createShader(e), r
                },
                ba: function(e, r) {
                    for (var t = 0; t < e; t++) {
                        var n = D[r + 4 * t >> 2],
                            o = Me.buffers[n];
                        o && (Mr.deleteBuffer(o), o.name = 0, Me.buffers[n] = null, n == Mr.currentArrayBufferBinding && (Mr.currentArrayBufferBinding = 0), n == Mr.currentElementArrayBufferBinding && (Mr.currentElementArrayBufferBinding = 0), n == Mr.currentPixelPackBufferBinding && (Mr.currentPixelPackBufferBinding = 0), n == Mr.currentPixelUnpackBufferBinding && (Mr.currentPixelUnpackBufferBinding = 0))
                    }
                },
                Rb: function(e, r) {
                    for (var t = 0; t < e; ++t) {
                        var n = D[r + 4 * t >> 2],
                            o = Me.framebuffers[n];
                        o && (Mr.deleteFramebuffer(o), o.name = 0, Me.framebuffers[n] = null)
                    }
                },
                r: function(e) {
                    if (e) {
                        var r = Me.programs[e];
                        r ? (Mr.deleteProgram(r), r.name = 0, Me.programs[e] = null) : Me.recordError(1281)
                    }
                },
                Qb: function(e, r) {
                    for (var t = 0; t < e; t++) {
                        var n = D[r + 4 * t >> 2],
                            o = Me.renderbuffers[n];
                        o && (Mr.deleteRenderbuffer(o), o.name = 0, Me.renderbuffers[n] = null)
                    }
                },
                X: function(e) {
                    if (e) {
                        var r = Me.shaders[e];
                        r ? (Mr.deleteShader(r), Me.shaders[e] = null) : Me.recordError(1281)
                    }
                },
                v: function(e, r) {
                    for (var t = 0; t < e; t++) {
                        var n = D[r + 4 * t >> 2],
                            o = Me.textures[n];
                        o && (Mr.deleteTexture(o), o.name = 0, Me.textures[n] = null)
                    }
                },
                Gb: function(e, r) {
                    Mr.detachShader(Me.programs[e], Me.shaders[r])
                },
                q: function(e) {
                    Mr.disable(e)
                },
                l: function(e) {
                    Me.currentContext.clientBuffers[e].enabled = !1, Mr.disableVertexAttribArray(e)
                },
                L: function(e, r, t) {
                    Me.preDrawHandleClientVertexAttribBindings(r + t), Mr.drawArrays(e, r, t), Me.postDrawHandleClientVertexAttribBindings()
                },
                Aa: rr,
                s: function(e) {
                    Mr.enable(e)
                },
                H: function(e) {
                    Me.currentContext.clientBuffers[e].enabled = !0, Mr.enableVertexAttribArray(e)
                },
                ia: function(e, r, t, n) {
                    Mr.framebufferRenderbuffer(e, r, t, Me.renderbuffers[n])
                },
                Q: function(e, r, t, n, o) {
                    Mr.framebufferTexture2D(e, r, t, Me.textures[n], o)
                },
                da: function(e, r) {
                    tr(e, r, "createBuffer", Me.buffers)
                },
                Pb: function(e, r) {
                    tr(e, r, "createFramebuffer", Me.framebuffers)
                },
                Ob: function(e, r) {
                    tr(e, r, "createRenderbuffer", Me.renderbuffers)
                },
                R: function(e, r) {
                    tr(e, r, "createTexture", Me.textures)
                },
                li: function(e, r, t, n, o, a, i) {
                    nr("getActiveAttrib", e, r, t, n, o, a, i)
                },
                mi: function(e, r, t, n, o, a, i) {
                    nr("getActiveUniform", e, r, t, n, o, a, i)
                },
                E: function(e, r) {
                    return Mr.getAttribLocation(Me.programs[e], M(r))
                },
                N: function() {
                    var e = Mr.getError() || Me.lastError;
                    return Me.lastError = 0, e
                },
                D: function(e, r, t, n) {
                    var o = Mr.getFramebufferAttachmentParameter(e, r, t);
                    (o instanceof WebGLRenderbuffer || o instanceof WebGLTexture) && (o = 0 | o.name), D[n >> 2] = o
                },
                z: function(e, r) {
                    ar(e, r, 0)
                },
                Jb: function(e, r, t, n) {
                    var o = Mr.getProgramInfoLog(Me.programs[e]);
                    null === o && (o = "(unknown error)");
                    var a = r > 0 && n ? O(o, n, r) : 0;
                    t && (D[t >> 2] = a)
                },
                $: function(e, r, t) {
                    if (t)
                        if (e >= Me.counter) Me.recordError(1281);
                        else if (e = Me.programs[e], 35716 == r) {
                        var n = Mr.getProgramInfoLog(e);
                        null === n && (n = "(unknown error)"), D[t >> 2] = n.length + 1
                    } else if (35719 == r) {
                        if (!e.maxUniformLength)
                            for (var o = 0; o < Mr.getProgramParameter(e, 35718); ++o) e.maxUniformLength = Math.max(e.maxUniformLength, Mr.getActiveUniform(e, o).name.length + 1);
                        D[t >> 2] = e.maxUniformLength
                    } else if (35722 == r) {
                        if (!e.maxAttributeLength)
                            for (o = 0; o < Mr.getProgramParameter(e, 35721); ++o) e.maxAttributeLength = Math.max(e.maxAttributeLength, Mr.getActiveAttrib(e, o).name.length + 1);
                        D[t >> 2] = e.maxAttributeLength
                    } else if (35381 == r) {
                        if (!e.maxUniformBlockNameLength)
                            for (o = 0; o < Mr.getProgramParameter(e, 35382); ++o) e.maxUniformBlockNameLength = Math.max(e.maxUniformBlockNameLength, Mr.getActiveUniformBlockName(e, o).length + 1);
                        D[t >> 2] = e.maxUniformBlockNameLength
                    } else D[t >> 2] = Mr.getProgramParameter(e, r);
                    else Me.recordError(1281)
                },
                Kb: function(e, r, t, n) {
                    var o = Mr.getShaderInfoLog(Me.shaders[e]);
                    null === o && (o = "(unknown error)");
                    var a = r > 0 && n ? O(o, n, r) : 0;
                    t && (D[t >> 2] = a)
                },
                ha: function(e, r, t) {
                    if (t)
                        if (35716 == r) {
                            var n = Mr.getShaderInfoLog(Me.shaders[e]);
                            null === n && (n = "(unknown error)");
                            var o = n ? n.length + 1 : 0;
                            D[t >> 2] = o
                        } else if (35720 == r) {
                        var a = Mr.getShaderSource(Me.shaders[e]),
                            i = a ? a.length + 1 : 0;
                        D[t >> 2] = i
                    } else D[t >> 2] = Mr.getShaderParameter(Me.shaders[e], r);
                    else Me.recordError(1281)
                },
                Fa: function(e) {
                    var r = Me.stringCache[e];
                    if (!r) {
                        switch (e) {
                            case 7939:
                                var t = Mr.getSupportedExtensions() || [];
                                r = ur((t = t.concat(t.map((function(e) {
                                    return "GL_" + e
                                })))).join(" "));
                                break;
                            case 7936:
                            case 7937:
                            case 37445:
                            case 37446:
                                var n = Mr.getParameter(e);
                                n || Me.recordError(1280), r = n && ur(n);
                                break;
                            case 7938:
                                var o = Mr.getParameter(7938);
                                r = ur(o = Me.currentContext.version >= 2 ? "OpenGL ES 3.0 (" + o + ")" : "OpenGL ES 2.0 (" + o + ")");
                                break;
                            case 35724:
                                var a = Mr.getParameter(35724),
                                    i = a.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
                                null !== i && (3 == i[1].length && (i[1] = i[1] + "0"), a = "OpenGL ES GLSL ES " + i[1] + " (" + a + ")"), r = ur(a);
                                break;
                            default:
                                Me.recordError(1280)
                        }
                        Me.stringCache[e] = r
                    }
                    return r
                },
                m: function(e, r) {
                    if (r = M(r), e = Me.programs[e]) {
                        fr(e);
                        var t = e.uniformLocsById,
                            n = 0,
                            o = r,
                            a = cr(r);
                        a > 0 && (n = sr(r.slice(a + 1)) >>> 0, o = r.slice(0, a));
                        var i = e.uniformSizeAndIdsByName[o];
                        if (i && n < i[0] && (t[n += i[1]] = t[n] || Mr.getUniformLocation(e, r))) return n
                    } else Me.recordError(1281);
                    return -1
                },
                ra: function(e) {
                    return Mr.isEnabled(e)
                },
                zb: function(e) {
                    Mr.lineWidth(e)
                },
                Hb: function(e) {
                    e = Me.programs[e], Mr.linkProgram(e), e.uniformLocsById = 0, e.uniformSizeAndIdsByName = {}
                },
                P: function(e, r) {
                    3317 == e && (Me.unpackAlignment = r), Mr.pixelStorei(e, r)
                },
                la: function(e, r, t, n, o, a, i) {
                    if (Me.currentContext.version >= 2)
                        if (Mr.currentPixelPackBufferBinding) Mr.readPixels(e, r, t, n, o, a, i);
                        else {
                            var u = pr(a);
                            Mr.readPixels(e, r, t, n, o, a, u, i >> vr(u))
                        }
                    else {
                        var s = gr(a, o, t, n, i);
                        s ? Mr.readPixels(e, r, t, n, o, a, s) : Me.recordError(1280)
                    }
                },
                Nb: function(e, r, t, n) {
                    Mr.renderbufferStorage(e, r, t, n)
                },
                O: function(e, r, t, n) {
                    Mr.scissor(e, r, t, n)
                },
                Lb: function() {
                    Me.recordError(1280)
                },
                Ya: function(e, r, t, n) {
                    var o = Me.getSource(e, r, t, n);
                    Mr.shaderSource(Me.shaders[e], o)
                },
                za: function(e, r, t) {
                    Mr.stencilFunc(e, r, t)
                },
                ya: function(e, r, t) {
                    Mr.stencilOp(e, r, t)
                },
                F: function(e, r, t, n, o, a, i, u, s) {
                    if (Me.currentContext.version >= 2)
                        if (Mr.currentPixelUnpackBufferBinding) Mr.texImage2D(e, r, t, n, o, a, i, u, s);
                        else if (s) {
                        var c = pr(u);
                        Mr.texImage2D(e, r, t, n, o, a, i, u, c, s >> vr(c))
                    } else Mr.texImage2D(e, r, t, n, o, a, i, u, null);
                    else Mr.texImage2D(e, r, t, n, o, a, i, u, s ? gr(u, i, n, o, s) : null)
                },
                k: function(e, r, t) {
                    Mr.texParameteri(e, r, t)
                },
                Sb: function(e, r, t, n, o, a, i, u, s) {
                    if (Me.currentContext.version >= 2)
                        if (Mr.currentPixelUnpackBufferBinding) Mr.texSubImage2D(e, r, t, n, o, a, i, u, s);
                        else if (s) {
                        var c = pr(u);
                        Mr.texSubImage2D(e, r, t, n, o, a, i, u, c, s >> vr(c))
                    } else Mr.texSubImage2D(e, r, t, n, o, a, i, u, null);
                    else {
                        var f = null;
                        s && (f = gr(u, i, o, a, s)), Mr.texSubImage2D(e, r, t, n, o, a, i, u, f)
                    }
                },
                M: function(e, r) {
                    Mr.uniform1f(lr(e), r)
                },
                ki: function(e, r, t) {
                    if (Me.currentContext.version >= 2) Mr.uniform1fv(lr(e), F, t >> 2, r);
                    else {
                        if (r <= 288)
                            for (var n = hr[r - 1], o = 0; o < r; ++o) n[o] = F[t + 4 * o >> 2];
                        else n = F.subarray(t >> 2, t + 4 * r >> 2);
                        Mr.uniform1fv(lr(e), n)
                    }
                },
                u: function(e, r) {
                    Mr.uniform1i(lr(e), r)
                },
                Eb: function(e, r, t) {
                    if (Me.currentContext.version >= 2) Mr.uniform1iv(lr(e), D, t >> 2, r);
                    else {
                        if (r <= 288)
                            for (var n = br[r - 1], o = 0; o < r; ++o) n[o] = D[t + 4 * o >> 2];
                        else n = D.subarray(t >> 2, t + 4 * r >> 2);
                        Mr.uniform1iv(lr(e), n)
                    }
                },
                W: function(e, r, t) {
                    Mr.uniform2f(lr(e), r, t)
                },
                Fb: function(e, r, t) {
                    if (Me.currentContext.version >= 2) Mr.uniform2fv(lr(e), F, t >> 2, 2 * r);
                    else {
                        if (r <= 144)
                            for (var n = hr[2 * r - 1], o = 0; o < 2 * r; o += 2) n[o] = F[t + 4 * o >> 2], n[o + 1] = F[t + (4 * o + 4) >> 2];
                        else n = F.subarray(t >> 2, t + 8 * r >> 2);
                        Mr.uniform2fv(lr(e), n)
                    }
                },
                Db: function(e, r, t) {
                    if (Me.currentContext.version >= 2) Mr.uniform2iv(lr(e), D, t >> 2, 2 * r);
                    else {
                        if (r <= 144)
                            for (var n = br[2 * r - 1], o = 0; o < 2 * r; o += 2) n[o] = D[t + 4 * o >> 2], n[o + 1] = D[t + (4 * o + 4) >> 2];
                        else n = D.subarray(t >> 2, t + 8 * r >> 2);
                        Mr.uniform2iv(lr(e), n)
                    }
                },
                Ba: function(e, r, t) {
                    if (Me.currentContext.version >= 2) Mr.uniform3fv(lr(e), F, t >> 2, 3 * r);
                    else {
                        if (r <= 96)
                            for (var n = hr[3 * r - 1], o = 0; o < 3 * r; o += 3) n[o] = F[t + 4 * o >> 2], n[o + 1] = F[t + (4 * o + 4) >> 2], n[o + 2] = F[t + (4 * o + 8) >> 2];
                        else n = F.subarray(t >> 2, t + 12 * r >> 2);
                        Mr.uniform3fv(lr(e), n)
                    }
                },
                Cb: function(e, r, t) {
                    if (Me.currentContext.version >= 2) Mr.uniform3iv(lr(e), D, t >> 2, 3 * r);
                    else {
                        if (r <= 96)
                            for (var n = br[3 * r - 1], o = 0; o < 3 * r; o += 3) n[o] = D[t + 4 * o >> 2], n[o + 1] = D[t + (4 * o + 4) >> 2], n[o + 2] = D[t + (4 * o + 8) >> 2];
                        else n = D.subarray(t >> 2, t + 12 * r >> 2);
                        Mr.uniform3iv(lr(e), n)
                    }
                },
                oa: function(e, r, t, n, o) {
                    Mr.uniform4f(lr(e), r, t, n, o)
                },
                ga: function(e, r, t) {
                    if (Me.currentContext.version >= 2) Mr.uniform4fv(lr(e), F, t >> 2, 4 * r);
                    else {
                        if (r <= 72) {
                            var n = hr[4 * r - 1],
                                o = F;
                            t >>= 2;
                            for (var a = 0; a < 4 * r; a += 4) {
                                var i = t + a;
                                n[a] = o[i], n[a + 1] = o[i + 1], n[a + 2] = o[i + 2], n[a + 3] = o[i + 3]
                            }
                        } else n = F.subarray(t >> 2, t + 16 * r >> 2);
                        Mr.uniform4fv(lr(e), n)
                    }
                },
                Bb: function(e, r, t) {
                    if (Me.currentContext.version >= 2) Mr.uniform4iv(lr(e), D, t >> 2, 4 * r);
                    else {
                        if (r <= 72)
                            for (var n = br[4 * r - 1], o = 0; o < 4 * r; o += 4) n[o] = D[t + 4 * o >> 2], n[o + 1] = D[t + (4 * o + 4) >> 2], n[o + 2] = D[t + (4 * o + 8) >> 2], n[o + 3] = D[t + (4 * o + 12) >> 2];
                        else n = D.subarray(t >> 2, t + 16 * r >> 2);
                        Mr.uniform4iv(lr(e), n)
                    }
                },
                Ta: function(e, r, t, n) {
                    if (Me.currentContext.version >= 2) Mr.uniformMatrix2fv(lr(e), !!t, F, n >> 2, 4 * r);
                    else {
                        if (r <= 72)
                            for (var o = hr[4 * r - 1], a = 0; a < 4 * r; a += 4) o[a] = F[n + 4 * a >> 2], o[a + 1] = F[n + (4 * a + 4) >> 2], o[a + 2] = F[n + (4 * a + 8) >> 2], o[a + 3] = F[n + (4 * a + 12) >> 2];
                        else o = F.subarray(n >> 2, n + 16 * r >> 2);
                        Mr.uniformMatrix2fv(lr(e), !!t, o)
                    }
                },
                qa: function(e, r, t, n) {
                    if (Me.currentContext.version >= 2) Mr.uniformMatrix3fv(lr(e), !!t, F, n >> 2, 9 * r);
                    else {
                        if (r <= 32)
                            for (var o = hr[9 * r - 1], a = 0; a < 9 * r; a += 9) o[a] = F[n + 4 * a >> 2], o[a + 1] = F[n + (4 * a + 4) >> 2], o[a + 2] = F[n + (4 * a + 8) >> 2], o[a + 3] = F[n + (4 * a + 12) >> 2], o[a + 4] = F[n + (4 * a + 16) >> 2], o[a + 5] = F[n + (4 * a + 20) >> 2], o[a + 6] = F[n + (4 * a + 24) >> 2], o[a + 7] = F[n + (4 * a + 28) >> 2], o[a + 8] = F[n + (4 * a + 32) >> 2];
                        else o = F.subarray(n >> 2, n + 36 * r >> 2);
                        Mr.uniformMatrix3fv(lr(e), !!t, o)
                    }
                },
                V: function(e, r, t, n) {
                    if (Me.currentContext.version >= 2) Mr.uniformMatrix4fv(lr(e), !!t, F, n >> 2, 16 * r);
                    else {
                        if (r <= 18) {
                            var o = hr[16 * r - 1],
                                a = F;
                            n >>= 2;
                            for (var i = 0; i < 16 * r; i += 16) {
                                var u = n + i;
                                o[i] = a[u], o[i + 1] = a[u + 1], o[i + 2] = a[u + 2], o[i + 3] = a[u + 3], o[i + 4] = a[u + 4], o[i + 5] = a[u + 5], o[i + 6] = a[u + 6], o[i + 7] = a[u + 7], o[i + 8] = a[u + 8], o[i + 9] = a[u + 9], o[i + 10] = a[u + 10], o[i + 11] = a[u + 11], o[i + 12] = a[u + 12], o[i + 13] = a[u + 13], o[i + 14] = a[u + 14], o[i + 15] = a[u + 15]
                            }
                        } else o = F.subarray(n >> 2, n + 64 * r >> 2);
                        Mr.uniformMatrix4fv(lr(e), !!t, o)
                    }
                },
                _: function(e) {
                    e = Me.programs[e], Mr.useProgram(e), Mr.currentProgram = e
                },
                A: function(e, r) {
                    Mr.vertexAttrib1f(e, F[r >> 2])
                },
                B: function(e, r) {
                    Mr.vertexAttrib2f(e, F[r >> 2], F[r + 4 >> 2])
                },
                C: function(e, r) {
                    Mr.vertexAttrib3f(e, F[r >> 2], F[r + 4 >> 2], F[r + 8 >> 2])
                },
                wa: function(e, r, t, n, o) {
                    Mr.vertexAttrib4f(e, r, t, n, o)
                },
                y: function(e, r) {
                    Mr.vertexAttrib4f(e, F[r >> 2], F[r + 4 >> 2], F[r + 8 >> 2], F[r + 12 >> 2])
                },
                G: function(e, r, t, n, o, a) {
                    var i = Me.currentContext.clientBuffers[e];
                    if (!Mr.currentArrayBufferBinding) return i.size = r, i.type = t, i.normalized = n, i.stride = o, i.ptr = a, i.clientside = !0, void(i.vertexAttribPointerAdaptor = function(e, r, t, n, o, a) {
                        this.vertexAttribPointer(e, r, t, n, o, a)
                    });
                    i.clientside = !1, Mr.vertexAttribPointer(e, r, t, !!n, o, a)
                },
                x: function(e, r, t, n) {
                    Mr.viewport(e, r, t, n)
                },
                j: function(e, r) {
                    var t = Kr();
                    try {
                        return pe(e)(r)
                    } catch (e) {
                        if ($r(t), e !== e + 0 && "longjmp" !== e) throw e;
                        Yr(1, 0)
                    }
                },
                f: function(e, r) {
                    var t = Kr();
                    try {
                        return pe(e)(r)
                    } catch (e) {
                        if ($r(t), e !== e + 0 && "longjmp" !== e) throw e;
                        Yr(1, 0)
                    }
                },
                p: function(e, r, t) {
                    var n = Kr();
                    try {
                        return pe(e)(r, t)
                    } catch (e) {
                        if ($r(n), e !== e + 0 && "longjmp" !== e) throw e;
                        Yr(1, 0)
                    }
                },
                Oa: function(e, r, t, n, o) {
                    var a = Kr();
                    try {
                        return pe(e)(r, t, n, o)
                    } catch (e) {
                        if ($r(a), e !== e + 0 && "longjmp" !== e) throw e;
                        Yr(1, 0)
                    }
                },
                d: function(e, r, t) {
                    var n = Kr();
                    try {
                        return pe(e)(r, t)
                    } catch (e) {
                        if ($r(n), e !== e + 0 && "longjmp" !== e) throw e;
                        Yr(1, 0)
                    }
                },
                g: function(e, r, t, n) {
                    var o = Kr();
                    try {
                        return pe(e)(r, t, n)
                    } catch (e) {
                        if ($r(o), e !== e + 0 && "longjmp" !== e) throw e;
                        Yr(1, 0)
                    }
                },
                t: function(e, r, t, n, o) {
                    var a = Kr();
                    try {
                        return pe(e)(r, t, n, o)
                    } catch (e) {
                        if ($r(a), e !== e + 0 && "longjmp" !== e) throw e;
                        Yr(1, 0)
                    }
                },
                I: function(e, r, t, n, o, a) {
                    var i = Kr();
                    try {
                        return pe(e)(r, t, n, o, a)
                    } catch (e) {
                        if ($r(i), e !== e + 0 && "longjmp" !== e) throw e;
                        Yr(1, 0)
                    }
                },
                xb: function(e, r, t, n, o, a, i) {
                    var u = Kr();
                    try {
                        return pe(e)(r, t, n, o, a, i)
                    } catch (e) {
                        if ($r(u), e !== e + 0 && "longjmp" !== e) throw e;
                        Yr(1, 0)
                    }
                },
                ta: function(e, r, t, n, o, a, i, u) {
                    var s = Kr();
                    try {
                        return pe(e)(r, t, n, o, a, i, u)
                    } catch (e) {
                        if ($r(s), e !== e + 0 && "longjmp" !== e) throw e;
                        Yr(1, 0)
                    }
                },
                e: function(e, r) {
                    var t = Kr();
                    try {
                        pe(e)(r)
                    } catch (e) {
                        if ($r(t), e !== e + 0 && "longjmp" !== e) throw e;
                        Yr(1, 0)
                    }
                },
                c: function(e, r, t) {
                    var n = Kr();
                    try {
                        pe(e)(r, t)
                    } catch (e) {
                        if ($r(n), e !== e + 0 && "longjmp" !== e) throw e;
                        Yr(1, 0)
                    }
                },
                h: function(e, r, t, n) {
                    var o = Kr();
                    try {
                        pe(e)(r, t, n)
                    } catch (e) {
                        if ($r(o), e !== e + 0 && "longjmp" !== e) throw e;
                        Yr(1, 0)
                    }
                },
                T: function(e, r, t, n, o) {
                    var a = Kr();
                    try {
                        pe(e)(r, t, n, o)
                    } catch (e) {
                        if ($r(a), e !== e + 0 && "longjmp" !== e) throw e;
                        Yr(1, 0)
                    }
                },
                ua: function(e, r, t, n, o, a) {
                    var i = Kr();
                    try {
                        pe(e)(r, t, n, o, a)
                    } catch (e) {
                        if ($r(i), e !== e + 0 && "longjmp" !== e) throw e;
                        Yr(1, 0)
                    }
                },
                J: function(e, r, t, n, o, a, i) {
                    var u = Kr();
                    try {
                        pe(e)(r, t, n, o, a, i)
                    } catch (e) {
                        if ($r(u), e !== e + 0 && "longjmp" !== e) throw e;
                        Yr(1, 0)
                    }
                },
                b: function(e) {
                    g = e
                },
                K: function(e) {
                    var r = Date.now() / 1e3 | 0;
                    return e && (D[e >> 2] = r), r
                },
                Mf: function(e, t) {
                    const n = M(e),
                        o = r.WAFLASH;
                    let a = o && o.hal && "function" == typeof o.hal.external_transformExternalInterfaceCall && o.hal.external_transformExternalInterfaceCall(n, t);
                    if (a) {
                        a = function e(r) {
                            var t = typeof r;
                            return "string" == t ? `<string>${function(e){const r={"&":"&amp;","<":"&lt",">":"&gt",'"':"&quot","'":"&apos"},t=new RegExp(Object.keys(r).join("|"),"g");return e.replace(t,(e=>r[e]))}(r)}</string>` : "undefined" == t ? "<undefined/>" : "number" == t ? `<number>${r}</number>` : null == r ? "<null/>" : "boolean" == t ? r ? "<true/>" : "<false/>" : r instanceof Date ? `<date>${r.getTime()}</date>` : r instanceof Array ? function(r) {
                                for (var t = "<array>", n = 0; n < r.length; n++) t += `<property id="${n}">${e(r[n])}</property>`;
                                return t + "</array>"
                            }(r) : "object" == t ? function(r) {
                                var t = "<object>";
                                for (var n in r) t += `<property id="${n}">${e(r[n])}</property>`;
                                return t + "</object>"
                            }(r) : "<null/>"
                        }(a);
                        const e = U(a) + 1,
                            r = Vr(e);
                        return O(a, r, e), r
                    }
                    return 0
                },
                Bf: function(e) {
                    const t = localStorage.getItem(M(e));
                    if (t && t.length > 0) {
                        const e = new Uint8Array(JSON.parse(t)),
                            n = r._malloc(e.length + 4);
                        return r.HEAP8.set(e, n + 4), r.HEAP32[n >> 2] = e.length, n
                    }
                    return 0
                },
                qf: function(e, t, n) {
                    if (t && n > 0) {
                        const o = M(e),
                            a = new Uint8Array(r.HEAP8.buffer, t, n);
                        a && a.length > 0 ? localStorage.setItem(o, JSON.stringify(Array.from(a))) : localStorage.removeItem(o)
                    }
                },
                dc: function() {
                    return parseInt(r.options.backgroundColor) || 0
                },
                _d: function() {
                    return ({
                        high: 3,
                        medium: 2,
                        low: 1
                    } [r.options.quality] || 3) - 1
                },
                ld: function(e, t, n, o, a, i, u, s, c) {
                    const f = document.createElement("input");
                    f.value = M(e), f.style.position = "absolute", f.style.resize = "none", f.style.overflow = "hidden", f.style.zIndex = -999, f.style.top = "50%", f.style.left = "50%", f.style.width = "32px", f.wafSelectionStart = f.wafSelectionEnd = f.value ? f.value.length : 0;
                    let l = !1,
                        d = !1;
                    const m = (e, r) => {
                        pe(u)(c, 0, e, r)
                    };
                    window.requestAnimationFrame((function() {
                        f.focus()
                    })), f.addEventListener("input", (function(e) {
                        if ("insertCompositionText" != e.inputType || e.isComposing) {
                            if ("deleteContentForward" == e.inputType || "insertText" == e.inputType && null == e.data) m(f.wafSelectionStart, f.wafSelectionEnd + 1);
                            else if ("deleteContentBackward" == e.inputType) {
                                if (f.wafSelectionStart <= 0) return;
                                m(f.wafSelectionStart - 1, f.wafSelectionEnd), f.wafSelectionEnd = --f.wafSelectionStart
                            } else {
                                const r = e.data || "";
                                let t = f.wafSelectionStart,
                                    n = f.wafSelectionEnd;
                                e.isComposing ? (l ? (f.wafSelectionEnd = ++f.wafSelectionStart, l = !1) : t -= 1, r || (f.wafSelectionEnd = --f.wafSelectionStart)) : f.wafSelectionEnd = ++f.wafSelectionStart, ((e, r, t) => {
                                    const n = U(e) + 1,
                                        o = Vr(n);
                                    O(e, o, n), pe(u)(c, o, r, t)
                                })(r, t, n)
                            }
                            var r, t;
                            r = f.wafSelectionStart, t = f.wafSelectionEnd, pe(s)(c, r, t)
                        }
                    })), f.addEventListener("select", (e => {
                        e.preventDefault(), e.stopPropagation()
                    })), f.addEventListener("keydown", (e => {
                        d = !0;
                        const t = e.key,
                            n = e.ctrlKey && "/a/A/c/C/v/V/".indexOf("/" + t + "/") >= 0,
                            o = "Home" == t || "End" == t,
                            a = (e.ctrlKey || e.shiftKey) && "/Home/End/ArrowUp/ArrowDown/ArrowLeft/ArrowRight/".indexOf("/" + t + "/") >= 0;
                        if (n || a || o) return e.preventDefault(), void e.stopPropagation();
                        const i = new e.constructor(e.type, e);
                        r.canvas.dispatchEvent(i)
                    })), f.addEventListener("keyup", (e => {
                        d = !1;
                        const t = new e.constructor(e.type, e);
                        r.canvas.dispatchEvent(t)
                    })), f.addEventListener("keypress", (e => {})), f.addEventListener("compositionstart", (e => {
                        l = !0
                    })), f.addEventListener("compositionupdate", (e => {})), f.addEventListener("compositionend", (e => {})), !r.canvas.inputTextFocusHandler && (r.canvas.inputTextFocusHandler = e => {
                        r.canvas.wafActiveInputText && window.requestAnimationFrame((function() {
                            r.canvas.wafActiveInputText.focus()
                        }))
                    }, r.canvas.addEventListener("focus", r.canvas.inputTextFocusHandler)), r.canvas.parentNode.appendChild(f), r.canvas.wafActiveInputText = f
                },
                oi: function() {
                    "function" == typeof r.hideStatus && r.hideStatus()
                },
                Yb: function(e, t, n) {
                    r.canvas.setAttribute("waf-content-width", e), r.canvas.setAttribute("waf-content-height", t), r.canvas.setAttribute("waf-content-fps", n), r.canvas.style.setProperty("--waf-content-width", e + "px"), r.canvas.style.setProperty("--waf-content-height", t + "px")
                },
                Wa: function(e) {
                    "function" == typeof r.setStatus && r.setStatus(M(e))
                },
                ad: function(e, t) {
                    const n = M(e),
                        o = M(t) || "_self",
                        a = r.WAFLASH,
                        i = a && a.hal && "function" == typeof a.hal.url_transformNavigateUrl && a.hal.url_transformNavigateUrl(n, o);
                    "function" == typeof i && window.requestAnimationFrame((() => i()))
                },
                Rc: function(e) {
                    const t = M(e),
                        n = r.WAFLASH,
                        o = n ? n.hal && "function" == typeof n.hal.url_transformRequestUrl && n.hal.url_transformRequestUrl(t) : t;
                    if (o) {
                        const e = U(o) + 1,
                            r = Vr(e);
                        return O(o, r, e), r
                    }
                    return 0
                }
            },
            Qr = (function() {
                var e = {
                    a: Gr
                };

                function t(e, t) {
                    var n, o = e.exports;
                    r.asm = o, q((h = r.asm.pi).buffer), G = r.asm.yi, n = r.asm.qi, H.unshift(n), ae()
                }

                function o(e) {
                    t(e.instance)
                }

                function a(r) {
                    return (v || "function" != typeof fetch ? Promise.resolve().then((function() {
                        return se($)
                    })) : fetch($, {
                        credentials: "same-origin"
                    }).then((function(e) {
                        if (!e.ok) throw "failed to load wasm binary file at '" + $ + "'";
                        return e.arrayBuffer()
                    })).catch((function() {
                        return se($)
                    }))).then((function(r) {
                        return WebAssembly.instantiate(r, e)
                    })).then((function(e) {
                        return e
                    })).then(r, (function(e) {
                        m("failed to asynchronously prepare wasm: " + e), ie(e)
                    }))
                }
                if (oe(), r.instantiateWasm) try {
                    return r.instantiateWasm(e, t)
                } catch (e) {
                    return m("Module.instantiateWasm callback failed with error: " + e), !1
                }(v || "function" != typeof WebAssembly.instantiateStreaming || ue($) || "function" != typeof fetch ? a(o) : fetch($, {
                    credentials: "same-origin"
                }).then((function(r) {
                    return WebAssembly.instantiateStreaming(r, e).then(o, (function(e) {
                        return m("wasm streaming compile failed: " + e), m("falling back to ArrayBuffer instantiation"), a(o)
                    }))
                }))).catch(n)
            }(), r.___wasm_call_ctors = function() {
                return (r.___wasm_call_ctors = r.asm.qi).apply(null, arguments)
            }, r._Play = function() {
                return (r._Play = r.asm.ri).apply(null, arguments)
            }, r._Stop = function() {
                return (r._Stop = r.asm.si).apply(null, arguments)
            }, r._reopenBuffer = function() {
                return (r._reopenBuffer = r.asm.ti).apply(null, arguments)
            }, r._invokeExternalCallback = function() {
                return (r._invokeExternalCallback = r.asm.ui).apply(null, arguments)
            }, r._strlen = function() {
                return (Qr = r._strlen = r.asm.vi).apply(null, arguments)
            }),
            Hr = r._free = function() {
                return (Hr = r._free = r.asm.wi).apply(null, arguments)
            },
            Vr = (r._main = function() {
                return (r._main = r.asm.xi).apply(null, arguments)
            }, r._malloc = function() {
                return (Vr = r._malloc = r.asm.zi).apply(null, arguments)
            }),
            Xr = r.___errno_location = function() {
                return (Xr = r.___errno_location = r.asm.Ai).apply(null, arguments)
            },
            Wr = r._emscripten_builtin_memalign = function() {
                return (Wr = r._emscripten_builtin_memalign = r.asm.Bi).apply(null, arguments)
            },
            Yr = r._setThrew = function() {
                return (Yr = r._setThrew = r.asm.Ci).apply(null, arguments)
            },
            Kr = r.stackSave = function() {
                return (Kr = r.stackSave = r.asm.Di).apply(null, arguments)
            },
            $r = r.stackRestore = function() {
                return ($r = r.stackRestore = r.asm.Ei).apply(null, arguments)
            },
            Zr = r.stackAlloc = function() {
                return (Zr = r.stackAlloc = r.asm.Fi).apply(null, arguments)
            };

        function Jr(e) {
            this.name = "ExitStatus", this.message = "Program terminated with exit(" + e + ")", this.status = e
        }

        function et(e) {
            function n() {
                qr || (qr = !0, r.calledRun = !0, x || (r.noFSInit || Se.init.initialized || Se.init(), Se.ignorePermissions = !1, xe.init(), le(H), le(V), t(r), r.onRuntimeInitialized && r.onRuntimeInitialized(), tt && function(e) {
                    var t = r._main,
                        n = (e = e || []).length + 1,
                        o = Zr(4 * (n + 1));
                    D[o >> 2] = j(c);
                    for (var a = 1; a < n; a++) D[(o >> 2) + a] = j(e[a - 1]);
                    D[(o >> 2) + n] = 0;
                    try {
                        rt(t(n, o), !0)
                    } catch (e) {
                        return ge(e)
                    }
                }(e), function() {
                    if (r.postRun)
                        for ("function" == typeof r.postRun && (r.postRun = [r.postRun]); r.postRun.length;) e = r.postRun.shift(), W.unshift(e);
                    var e;
                    le(W)
                }()))
            }
            e = e || s, re > 0 || (function() {
                if (r.preRun)
                    for ("function" == typeof r.preRun && (r.preRun = [r.preRun]); r.preRun.length;) e = r.preRun.shift(), Q.unshift(e);
                var e;
                le(Q)
            }(), re > 0 || (r.setStatus ? (r.setStatus("Running..."), setTimeout((function() {
                setTimeout((function() {
                    r.setStatus("")
                }), 1), n()
            }), 1)) : n()))
        }

        function rt(e, t) {
            w = e, K() || (Y = !0),
                function(e) {
                    w = e, K() || (r.onExit && r.onExit(e), x = !0), f(e, new Jr(e))
                }(e)
        }
        if (r.dynCall_jiji = function() {
                return (r.dynCall_jiji = r.asm.Gi).apply(null, arguments)
            }, r.dynCall_ji = function() {
                return (r.dynCall_ji = r.asm.Hi).apply(null, arguments)
            }, r.ccall = C, r.cwrap = function(e, r, t, n) {
                var o = (t = t || []).every((function(e) {
                    return "number" === e
                }));
                return "string" !== r && o && !n ? k(e) : function() {
                    return C(e, r, t, arguments)
                }
            }, r.addRunDependency = oe, r.removeRunDependency = ae, r.FS_createPath = Se.createPath, r.FS_createDataFile = Se.createDataFile, r.FS_createPreloadedFile = Se.createPreloadedFile, r.FS_createLazyFile = Se.createLazyFile, r.FS_createDevice = Se.createDevice, r.FS_unlink = Se.unlink, r.AL = Te, ne = function e() {
                qr || et(), qr || (ne = e)
            }, r.run = et, r.preInit)
            for ("function" == typeof r.preInit && (r.preInit = [r.preInit]); r.preInit.length > 0;) r.preInit.pop()();
        var tt = !0;
        return r.noInitialRun && (tt = !1), et(), r.ready
    }
})();
export default Module;
