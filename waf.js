var Module = (() => {
    var e = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0;
    return function(r) {
        var t, n;
        (r = void 0 !== (r = r || {}) ? r : {}).ready = new Promise((function(e, r) {
                t = e, n = r
            })), r.expectedDataFileDownloads || (r.expectedDataFileDownloads = 0), r.expectedDataFileDownloads++,
            function() {
                if (!r.ENVIRONMENT_IS_PTHREAD) {
                    ! function(e) {
                        "object" == typeof window ? window.encodeURIComponent(window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf("/")) + "/") : "undefined" == typeof process && "undefined" != typeof location && encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf("/")) + "/");
                        var t = "waflash.data";
                        "function" != typeof r.locateFilePackage || r.locateFile || (r.locateFile = r.locateFilePackage, p("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)"));
                        var n = r.locateFile ? r.locateFile(t, "") : t,
                            o = e.remote_package_size;
                        e.package_uuid;
                        var a, i, u, s, c = null,
                            f = r.getPreloadedPackage ? r.getPreloadedPackage(n, o) : null;

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
                        f || (a = n, i = o, u = function(e) {
                            c ? (c(e), c = null) : f = e
                        }, (s = new XMLHttpRequest).open("GET", a, !0), s.responseType = "arraybuffer", s.onprogress = function(e) {
                            var t = a,
                                n = i;
                            if (e.total && (n = e.total), e.loaded) {
                                s.addedTotal ? r.dataFileDownloads[t].loaded = e.loaded : (s.addedTotal = !0, r.dataFileDownloads || (r.dataFileDownloads = {}), r.dataFileDownloads[t] = {
                                    loaded: e.loaded,
                                    total: n
                                });
                                var o = 0,
                                    u = 0,
                                    c = 0;
                                for (var f in r.dataFileDownloads) {
                                    var l = r.dataFileDownloads[f];
                                    o += l.total, u += l.loaded, c++
                                }
                                o = Math.ceil(o * r.expectedDataFileDownloads / c), r.setStatus && r.setStatus("Downloading data... (" + u + "/" + o + ")")
                            } else r.dataFileDownloads || r.setStatus && r.setStatus("Downloading data...")
                        }, s.onerror = function(e) {
                            throw new Error("NetworkError for: " + a)
                        }, s.onload = function(e) {
                            if (!(200 == s.status || 304 == s.status || 206 == s.status || 0 == s.status && s.response)) throw new Error(s.statusText + " : " + s.responseURL);
                            var r = s.response;
                            u(r)
                        }, s.send(null)), r.calledRun ? l() : (r.preRun || (r.preRun = []), r.preRun.push(l))
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
                        package_uuid: "87a17ad6-e497-4cd7-bd81-bd619591b61a"
                    })
                }
            }();
        var o, a, i, u, s = Object.assign({}, r),
            c = [],
            f = "./this.program",
            l = (e, r) => {
                throw r
            },
            d = "";
        "undefined" != typeof document && document.currentScript && (d = document.currentScript.src), e && (d = e), d = 0 !== d.indexOf("blob:") ? d.substr(0, d.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", o = e => {
            var r = new XMLHttpRequest;
            return r.open("GET", e, !1), r.send(null), r.responseText
        }, a = (e, r, t) => {
            var n = new XMLHttpRequest;
            n.open("GET", e, !0), n.responseType = "arraybuffer", n.onload = () => {
                200 == n.status || 0 == n.status && n.response ? r(n.response) : t()
            }, n.onerror = t, n.send(null)
        }, u = e => document.title = e;
        var m = r.print || console.log.bind(console),
            p = r.printErr || console.warn.bind(console);

        function v(e) {
            v.shown || (v.shown = {}), v.shown[e] || (v.shown[e] = 1, p(e))
        }
        Object.assign(r, s), s = null, r.arguments && (c = r.arguments), r.thisProgram && (f = r.thisProgram), r.quit && (l = r.quit);
        var g, h = 0;
        r.wasmBinary && (g = r.wasmBinary);
        var b, y = r.noExitRuntime || !0;

        function w(e, r, t = "i8", n) {
            switch ("*" === t.charAt(t.length - 1) && (t = "i32"), t) {
                case "i1":
                case "i8":
                    L[e >> 0] = r;
                    break;
                case "i16":
                    _[e >> 1] = r;
                    break;
                case "i32":
                    P[e >> 2] = r;
                    break;
                case "i64":
                    ue = [r >>> 0, (ie = r, +Math.abs(ie) >= 1 ? ie > 0 ? (0 | Math.min(+Math.floor(ie / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((ie - +(~~ie >>> 0)) / 4294967296) >>> 0 : 0)], P[e >> 2] = ue[0], P[e + 4 >> 2] = ue[1];
                    break;
                case "float":
                    T[e >> 2] = r;
                    break;
                case "double":
                    I[e >> 3] = r;
                    break;
                default:
                    ne("invalid type for setValue: " + t)
            }
        }
        "object" != typeof WebAssembly && ne("no native wasm support detected");
        var x, E = !1;

        function k(e, r) {
            e || ne(r)
        }

        function C(e) {
            return r["_" + e]
        }

        function S(e, r, t, n, o) {
            var a = {
                string: function(e) {
                    var r = 0;
                    if (null != e && 0 !== e) {
                        var t = 1 + (e.length << 2);
                        U(e, r = it(t), t)
                    }
                    return r
                },
                array: function(e) {
                    var r = it(e.length);
                    return function(e, r) {
                        L.set(e, r)
                    }(e, r), r
                }
            };
            var i = C(e),
                u = [],
                s = 0;
            if (n)
                for (var c = 0; c < n.length; c++) {
                    var f = a[t[c]];
                    f ? (0 === s && (s = ot()), u[c] = f(n[c])) : u[c] = n[c]
                }
            var l = i.apply(null, u);
            return l = function(e) {
                return 0 !== s && at(s),
                    function(e) {
                        return "string" === r ? N(e) : "boolean" === r ? Boolean(e) : e
                    }(e)
            }(l)
        }
        var A, L, B, _, D, P, F, T, I, R = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;

        function M(e, r, t) {
            for (var n = r + t, o = r; e[o] && !(o >= n);) ++o;
            if (o - r > 16 && e.subarray && R) return R.decode(e.subarray(r, o));
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

        function N(e, r) {
            return e ? M(B, e, r) : ""
        }

        function O(e, r, t, n) {
            if (!(n > 0)) return 0;
            for (var o = t, a = t + n - 1, i = 0; i < e.length; ++i) {
                var u = e.charCodeAt(i);
                if (u >= 55296 && u <= 57343) u = 65536 + ((1023 & u) << 10) | 1023 & e.charCodeAt(++i);
                if (u <= 127) {
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

        function U(e, r, t) {
            return O(e, B, r, t)
        }

        function z(e) {
            for (var r = 0, t = 0; t < e.length; ++t) {
                var n = e.charCodeAt(t);
                n >= 55296 && n <= 57343 && (n = 65536 + ((1023 & n) << 10) | 1023 & e.charCodeAt(++t)), n <= 127 ? ++r : r += n <= 2047 ? 2 : n <= 65535 ? 3 : 4
            }
            return r
        }

        function j(e) {
            var r = z(e) + 1,
                t = et(r);
            return t && O(e, L, t, r), t
        }

        function q(e) {
            var r = z(e) + 1,
                t = it(r);
            return O(e, L, t, r), t
        }

        function G(e) {
            A = e, r.HEAP8 = L = new Int8Array(e), r.HEAP16 = _ = new Int16Array(e), r.HEAP32 = P = new Int32Array(e), r.HEAPU8 = B = new Uint8Array(e), r.HEAPU16 = D = new Uint16Array(e), r.HEAPU32 = F = new Uint32Array(e), r.HEAPF32 = T = new Float32Array(e), r.HEAPF64 = I = new Float64Array(e)
        }
        r.INITIAL_MEMORY;
        var Q, H = [],
            V = [],
            X = [],
            W = [],
            Y = [],
            K = !1;

        function $() {
            return y || !1
        }
        var Z = 0,
            J = null,
            ee = null;

        function re(e) {
            Z++, r.monitorRunDependencies && r.monitorRunDependencies(Z)
        }

        function te(e) {
            if (Z--, r.monitorRunDependencies && r.monitorRunDependencies(Z), 0 == Z && (null !== J && (clearInterval(J), J = null), ee)) {
                var t = ee;
                ee = null, t()
            }
        }

        function ne(e) {
            r.onAbort && r.onAbort(e), p(e = "Aborted(" + e + ")"), E = !0, x = 1, e += ". Build with -s ASSERTIONS=1 for more info.";
            var t = new WebAssembly.RuntimeError(e);
            throw n(t), t
        }
        r.preloadedImages = {}, r.preloadedAudios = {};
        var oe, ae, ie, ue;

        function se(e) {
            return e.startsWith("data:application/octet-stream;base64,")
        }

        function ce(e) {
            try {
                if (e == oe && g) return new Uint8Array(g);
                if (i) return i(e);
                throw "both async and sync fetching of the wasm failed"
            } catch (e) {
                ne(e)
            }
        }
        se(oe = "waflash.wasm") || (ae = oe, oe = r.locateFile ? r.locateFile(ae, d) : d + ae);
        var fe = {
            993777: function(e) {
                const r = N(e);
                Le.mkdir(r), Le.mount(Ae, {}, r), Le.syncfs(!0, (e => {}))
            },
            993886: function() {
                Le.syncfs((e => {
                    console.log("IDBFS synced.")
                }))
            },
            993939: function() {
                if ("function" != typeof URLSearchParams) return !1;
                return "1" == new URLSearchParams(window.location.search).get("wafv")
            },
            994118: function() {
                const e = "https://vidkidz.tistory.com/",
                    r = z(e) + 1,
                    t = et(r);
                return U(e, t, r), t
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
                    r = z(e) + 1,
                    t = et(r);
                return U(e, t, r), t
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
                    const t = z(r) + 1,
                        n = et(t);
                    return U(r, n, t), n
                }
                return 0
            },
            995836: function() {
                if ("function" != typeof URLSearchParams) return !1;
                return "gpu" == new URLSearchParams(window.location.search).get("wafm")
            },
            996017: function() {
                let e = r.canvas.id;
                if (!e) return 0;
                e = "#" + e;
                const t = z(e) + 1,
                    n = et(t);
                return U(e, n, t), n
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
                    const r = N(e);
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
                var r, t, n = N(e) + "\n\nAbort/Retry/Ignore/AlwaysIgnore? [ariA] :",
                    o = window.prompt(n, "i");
                return null === o && (o = "i"), r = Yr(o), t = 1 == "i8" ? it(r.length) : et(r.length), r.subarray || r.slice || (r = new Uint8Array(r)), B.set(r, t), t
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
                return e ? t.capture = {} : t.audio = {}, t.audioContext || ("undefined" != typeof AudioContext ? t.audioContext = new AudioContext : "undefined" != typeof webkitAudioContext && (t.audioContext = new webkitAudioContext), t.audioContext && le(t.audioContext)), void 0 === t.audioContext ? -1 : 0
            },
            998406: function() {
                return r.SDL2.audioContext.sampleRate
            },
            998474: function(e, t, n, o) {
                var a = r.SDL2,
                    i = function(r) {
                        void 0 !== a.capture.silenceTimer && (clearTimeout(a.capture.silenceTimer), a.capture.silenceTimer = void 0), a.capture.mediaStreamNode = a.audioContext.createMediaStreamSource(r), a.capture.scriptProcessorNode = a.audioContext.createScriptProcessor(t, e, 1), a.capture.scriptProcessorNode.onaudioprocess = function(e) {
                            void 0 !== a && void 0 !== a.capture && (e.outputBuffer.getChannelData(0).fill(0), a.capture.currentCaptureBuffer = e.inputBuffer, ge("vi", n, [o]))
                        }, a.capture.mediaStreamNode.connect(a.capture.scriptProcessorNode), a.capture.scriptProcessorNode.connect(a.audioContext.destination), a.capture.stream = r
                    },
                    u = function(e) {};
                a.capture.silenceBuffer = a.audioContext.createBuffer(e, t, a.audioContext.sampleRate), a.capture.silenceBuffer.getChannelData(0).fill(0);
                a.capture.silenceTimer = setTimeout((function() {
                    a.capture.currentCaptureBuffer = a.capture.silenceBuffer, ge("vi", n, [o])
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
                    void 0 !== a && void 0 !== a.audio && (a.audio.currentOutputBuffer = e.outputBuffer, ge("vi", n, [o]))
                }, a.audio.scriptProcessorNode.connect(a.audioContext.destination)
            },
            1000536: function(e, t) {
                for (var n = r.SDL2, o = n.capture.currentCaptureBuffer.numberOfChannels, a = 0; a < o; ++a) {
                    var i = n.capture.currentCaptureBuffer.getChannelData(a);
                    if (i.length != t) throw "Web Audio capture buffer length mismatch! Destination size: " + i.length + " samples vs expected " + t + " samples!";
                    if (1 == o)
                        for (var u = 0; u < t; ++u) w(e + 4 * u, i[u], "float");
                    else
                        for (u = 0; u < t; ++u) w(e + 4 * (u * o + a), i[u], "float")
                }
            },
            1001141: function(e, t) {
                for (var n = r.SDL2, o = n.audio.currentOutputBuffer.numberOfChannels, a = 0; a < o; ++a) {
                    var i = n.audio.currentOutputBuffer.getChannelData(a);
                    if (i.length != t) throw "Web Audio output buffer length mismatch! Destination size: " + i.length + " samples vs expected " + t + " samples!";
                    for (var u = 0; u < t; ++u) i[u] = T[e + (u * o + a << 2) >> 2]
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
                        var d = P[f];
                        c[l] = 255 & d, c[l + 1] = d >> 8 & 255, c[l + 2] = d >> 16 & 255, c[l + 3] = 255, f++, l += 4
                    } else {
                        u.data32Data !== c && (u.data32 = new Int32Array(c.buffer), u.data8 = new Uint8Array(c.buffer), u.data32Data = c);
                        var m = u.data32;
                        s = m.length, m.set(P.subarray(f, f + s));
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
                        var h = P[v];
                        p[g] = 255 & h, p[g + 1] = h >> 8 & 255, p[g + 2] = h >> 16 & 255, p[g + 3] = h >> 24 & 255, v++, g += 4
                    } else {
                        var b = new Int32Array(p.buffer);
                        l = b.length, b.set(P.subarray(v, v + l))
                    }
                d.putImageData(m, 0, 0);
                var y = 0 === u && 0 === s ? "url(" + f.toDataURL() + "), auto" : "url(" + f.toDataURL() + ") " + u + " " + s + ", auto",
                    w = et(y.length + 1);
                return U(y, w, y.length + 1), w
            },
            1005261: function(e) {
                return r.canvas && (r.canvas.style.cursor = N(e)), 0
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

        function le(e, r) {
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

        function de(e) {
            for (; e.length > 0;) {
                var t = e.shift();
                if ("function" != typeof t) {
                    var n = t.func;
                    "number" == typeof n ? void 0 === t.arg ? ve(n)() : ve(n)(t.arg) : n(void 0 === t.arg ? null : t.arg)
                } else t(r)
            }
        }

        function me(e) {
            var r = ot(),
                t = e();
            return at(r), t
        }
        var pe = [];

        function ve(e) {
            var r = pe[e];
            return r || (e >= pe.length && (pe.length = e + 1), pe[e] = r = Q.get(e)), r
        }

        function ge(e, t, n) {
            return e.includes("j") ? function(e, t, n) {
                var o = r["dynCall_" + e];
                return n && n.length ? o.apply(null, [t].concat(n)) : o.call(null, t)
            }(e, t, n) : ve(t).apply(null, n)
        }

        function he(e) {
            if (e instanceof ut || "unwind" == e) return x;
            l(1, e)
        }

        function be() {
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

        function ye(e) {
            return P[rt() >> 2] = e, e
        }
        var we = {
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
                return (e = we.normalizeArray(e.split("/").filter((function(e) {
                    return !!e
                })), !r).join("/")) || r || (e = "."), e && t && (e += "/"), (r ? "/" : "") + e
            },
            dirname: function(e) {
                var r = we.splitPath(e),
                    t = r[0],
                    n = r[1];
                return t || n ? (n && (n = n.substr(0, n.length - 1)), t + n) : "."
            },
            basename: function(e) {
                if ("/" === e) return "/";
                var r = (e = (e = we.normalize(e)).replace(/\/$/, "")).lastIndexOf("/");
                return -1 === r ? e : e.substr(r + 1)
            },
            extname: function(e) {
                return we.splitPath(e)[3]
            },
            join: function() {
                var e = Array.prototype.slice.call(arguments, 0);
                return we.normalize(e.join("/"))
            },
            join2: function(e, r) {
                return we.normalize(e + "/" + r)
            }
        };
        var xe = {
                resolve: function() {
                    for (var e = "", r = !1, t = arguments.length - 1; t >= -1 && !r; t--) {
                        var n = t >= 0 ? arguments[t] : Le.cwd();
                        if ("string" != typeof n) throw new TypeError("Arguments to path.resolve must be strings");
                        if (!n) return "";
                        e = n + "/" + e, r = "/" === n.charAt(0)
                    }
                    return (r ? "/" : "") + (e = we.normalizeArray(e.split("/").filter((function(e) {
                        return !!e
                    })), !r).join("/")) || "."
                },
                relative: function(e, r) {
                    function t(e) {
                        for (var r = 0; r < e.length && "" === e[r]; r++);
                        for (var t = e.length - 1; t >= 0 && "" === e[t]; t--);
                        return r > t ? [] : e.slice(r, t - r + 1)
                    }
                    e = xe.resolve(e).substr(1), r = xe.resolve(r).substr(1);
                    for (var n = t(e.split("/")), o = t(r.split("/")), a = Math.min(n.length, o.length), i = a, u = 0; u < a; u++)
                        if (n[u] !== o[u]) {
                            i = u;
                            break
                        } var s = [];
                    for (u = i; u < n.length; u++) s.push("..");
                    return (s = s.concat(o.slice(i))).join("/")
                }
            },
            Ee = {
                ttys: [],
                init: function() {},
                shutdown: function() {},
                register: function(e, r) {
                    Ee.ttys[e] = {
                        input: [],
                        output: [],
                        ops: r
                    }, Le.registerDevice(e, Ee.stream_ops)
                },
                stream_ops: {
                    open: function(e) {
                        var r = Ee.ttys[e.node.rdev];
                        if (!r) throw new Le.ErrnoError(43);
                        e.tty = r, e.seekable = !1
                    },
                    close: function(e) {
                        e.tty.ops.flush(e.tty)
                    },
                    flush: function(e) {
                        e.tty.ops.flush(e.tty)
                    },
                    read: function(e, r, t, n, o) {
                        if (!e.tty || !e.tty.ops.get_char) throw new Le.ErrnoError(60);
                        for (var a = 0, i = 0; i < n; i++) {
                            var u;
                            try {
                                u = e.tty.ops.get_char(e.tty)
                            } catch (e) {
                                throw new Le.ErrnoError(29)
                            }
                            if (void 0 === u && 0 === a) throw new Le.ErrnoError(6);
                            if (null == u) break;
                            a++, r[t + i] = u
                        }
                        return a && (e.node.timestamp = Date.now()), a
                    },
                    write: function(e, r, t, n, o) {
                        if (!e.tty || !e.tty.ops.put_char) throw new Le.ErrnoError(60);
                        try {
                            for (var a = 0; a < n; a++) e.tty.ops.put_char(e.tty, r[t + a])
                        } catch (e) {
                            throw new Le.ErrnoError(29)
                        }
                        return n && (e.node.timestamp = Date.now()), a
                    }
                },
                default_tty_ops: {
                    get_char: function(e) {
                        if (!e.input.length) {
                            var r = null;
                            if ("undefined" != typeof window && "function" == typeof window.prompt ? null !== (r = window.prompt("Input: ")) && (r += "\n") : "function" == typeof readline && null !== (r = readline()) && (r += "\n"), !r) return null;
                            e.input = Yr(r, !0)
                        }
                        return e.input.shift()
                    },
                    put_char: function(e, r) {
                        null === r || 10 === r ? (m(M(e.output, 0)), e.output = []) : 0 != r && e.output.push(r)
                    },
                    flush: function(e) {
                        e.output && e.output.length > 0 && (m(M(e.output, 0)), e.output = [])
                    }
                },
                default_tty1_ops: {
                    put_char: function(e, r) {
                        null === r || 10 === r ? (p(M(e.output, 0)), e.output = []) : 0 != r && e.output.push(r)
                    },
                    flush: function(e) {
                        e.output && e.output.length > 0 && (p(M(e.output, 0)), e.output = [])
                    }
                }
            };

        function ke(e) {
            e = function(e, r) {
                return Math.ceil(e / r) * r
            }(e, 65536);
            var r = tt(65536, e);
            return r ? (function(e, r) {
                B.fill(0, e, e + r)
            }(r, e), r) : 0
        }
        var Ce = {
            ops_table: null,
            mount: function(e) {
                return Ce.createNode(null, "/", 16895, 0)
            },
            createNode: function(e, r, t, n) {
                if (Le.isBlkdev(t) || Le.isFIFO(t)) throw new Le.ErrnoError(63);
                Ce.ops_table || (Ce.ops_table = {
                    dir: {
                        node: {
                            getattr: Ce.node_ops.getattr,
                            setattr: Ce.node_ops.setattr,
                            lookup: Ce.node_ops.lookup,
                            mknod: Ce.node_ops.mknod,
                            rename: Ce.node_ops.rename,
                            unlink: Ce.node_ops.unlink,
                            rmdir: Ce.node_ops.rmdir,
                            readdir: Ce.node_ops.readdir,
                            symlink: Ce.node_ops.symlink
                        },
                        stream: {
                            llseek: Ce.stream_ops.llseek
                        }
                    },
                    file: {
                        node: {
                            getattr: Ce.node_ops.getattr,
                            setattr: Ce.node_ops.setattr
                        },
                        stream: {
                            llseek: Ce.stream_ops.llseek,
                            read: Ce.stream_ops.read,
                            write: Ce.stream_ops.write,
                            allocate: Ce.stream_ops.allocate,
                            mmap: Ce.stream_ops.mmap,
                            msync: Ce.stream_ops.msync
                        }
                    },
                    link: {
                        node: {
                            getattr: Ce.node_ops.getattr,
                            setattr: Ce.node_ops.setattr,
                            readlink: Ce.node_ops.readlink
                        },
                        stream: {}
                    },
                    chrdev: {
                        node: {
                            getattr: Ce.node_ops.getattr,
                            setattr: Ce.node_ops.setattr
                        },
                        stream: Le.chrdev_stream_ops
                    }
                });
                var o = Le.createNode(e, r, t, n);
                return Le.isDir(o.mode) ? (o.node_ops = Ce.ops_table.dir.node, o.stream_ops = Ce.ops_table.dir.stream, o.contents = {}) : Le.isFile(o.mode) ? (o.node_ops = Ce.ops_table.file.node, o.stream_ops = Ce.ops_table.file.stream, o.usedBytes = 0, o.contents = null) : Le.isLink(o.mode) ? (o.node_ops = Ce.ops_table.link.node, o.stream_ops = Ce.ops_table.link.stream) : Le.isChrdev(o.mode) && (o.node_ops = Ce.ops_table.chrdev.node, o.stream_ops = Ce.ops_table.chrdev.stream), o.timestamp = Date.now(), e && (e.contents[r] = o, e.timestamp = o.timestamp), o
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
                    return r.dev = Le.isChrdev(e.mode) ? e.id : 1, r.ino = e.id, r.mode = e.mode, r.nlink = 1, r.uid = 0, r.gid = 0, r.rdev = e.rdev, Le.isDir(e.mode) ? r.size = 4096 : Le.isFile(e.mode) ? r.size = e.usedBytes : Le.isLink(e.mode) ? r.size = e.link.length : r.size = 0, r.atime = new Date(e.timestamp), r.mtime = new Date(e.timestamp), r.ctime = new Date(e.timestamp), r.blksize = 4096, r.blocks = Math.ceil(r.size / r.blksize), r
                },
                setattr: function(e, r) {
                    void 0 !== r.mode && (e.mode = r.mode), void 0 !== r.timestamp && (e.timestamp = r.timestamp), void 0 !== r.size && Ce.resizeFileStorage(e, r.size)
                },
                lookup: function(e, r) {
                    throw Le.genericErrors[44]
                },
                mknod: function(e, r, t, n) {
                    return Ce.createNode(e, r, t, n)
                },
                rename: function(e, r, t) {
                    if (Le.isDir(e.mode)) {
                        var n;
                        try {
                            n = Le.lookupNode(r, t)
                        } catch (e) {}
                        if (n)
                            for (var o in n.contents) throw new Le.ErrnoError(55)
                    }
                    delete e.parent.contents[e.name], e.parent.timestamp = Date.now(), e.name = t, r.contents[t] = e, r.timestamp = e.parent.timestamp, e.parent = r
                },
                unlink: function(e, r) {
                    delete e.contents[r], e.timestamp = Date.now()
                },
                rmdir: function(e, r) {
                    var t = Le.lookupNode(e, r);
                    for (var n in t.contents) throw new Le.ErrnoError(55);
                    delete e.contents[r], e.timestamp = Date.now()
                },
                readdir: function(e) {
                    var r = [".", ".."];
                    for (var t in e.contents) e.contents.hasOwnProperty(t) && r.push(t);
                    return r
                },
                symlink: function(e, r, t) {
                    var n = Ce.createNode(e, r, 41471, 0);
                    return n.link = t, n
                },
                readlink: function(e) {
                    if (!Le.isLink(e.mode)) throw new Le.ErrnoError(28);
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
                    if (r.buffer === L.buffer && (a = !1), !n) return 0;
                    var i = e.node;
                    if (i.timestamp = Date.now(), r.subarray && (!i.contents || i.contents.subarray)) {
                        if (a) return i.contents = r.subarray(t, t + n), i.usedBytes = n, n;
                        if (0 === i.usedBytes && 0 === o) return i.contents = r.slice(t, t + n), i.usedBytes = n, n;
                        if (o + n <= i.usedBytes) return i.contents.set(r.subarray(t, t + n), o), n
                    }
                    if (Ce.expandFileStorage(i, o + n), i.contents.subarray && r.subarray) i.contents.set(r.subarray(t, t + n), o);
                    else
                        for (var u = 0; u < n; u++) i.contents[o + u] = r[t + u];
                    return i.usedBytes = Math.max(i.usedBytes, o + n), n
                },
                llseek: function(e, r, t) {
                    var n = r;
                    if (1 === t ? n += e.position : 2 === t && Le.isFile(e.node.mode) && (n += e.node.usedBytes), n < 0) throw new Le.ErrnoError(28);
                    return n
                },
                allocate: function(e, r, t) {
                    Ce.expandFileStorage(e.node, r + t), e.node.usedBytes = Math.max(e.node.usedBytes, r + t)
                },
                mmap: function(e, r, t, n, o, a) {
                    if (0 !== r) throw new Le.ErrnoError(28);
                    if (!Le.isFile(e.node.mode)) throw new Le.ErrnoError(43);
                    var i, u, s = e.node.contents;
                    if (2 & a || s.buffer !== A) {
                        if ((n > 0 || n + t < s.length) && (s = s.subarray ? s.subarray(n, n + t) : Array.prototype.slice.call(s, n, n + t)), u = !0, !(i = ke(t))) throw new Le.ErrnoError(48);
                        L.set(s, i)
                    } else u = !1, i = s.byteOffset;
                    return {
                        ptr: i,
                        allocated: u
                    }
                },
                msync: function(e, r, t, n, o) {
                    if (!Le.isFile(e.node.mode)) throw new Le.ErrnoError(43);
                    if (2 & o) return 0;
                    Ce.stream_ops.write(e, r, 0, n, t, !1);
                    return 0
                }
            }
        };
        var Se, Ae = {
                dbs: {},
                indexedDB: () => {
                    if ("undefined" != typeof indexedDB) return indexedDB;
                    var e = null;
                    return "object" == typeof window && (e = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB), k(e, "IDBFS used, but indexedDB not supported"), e
                },
                DB_VERSION: 21,
                DB_STORE_NAME: "FILE_DATA",
                mount: function(e) {
                    return Ce.mount.apply(null, arguments)
                },
                syncfs: (e, r, t) => {
                    Ae.getLocalSet(e, ((n, o) => {
                        if (n) return t(n);
                        Ae.getRemoteSet(e, ((e, n) => {
                            if (e) return t(e);
                            var a = r ? n : o,
                                i = r ? o : n;
                            Ae.reconcile(a, i, t)
                        }))
                    }))
                },
                getDB: (e, r) => {
                    var t, n = Ae.dbs[e];
                    if (n) return r(null, n);
                    try {
                        t = Ae.indexedDB().open(e, Ae.DB_VERSION)
                    } catch (e) {
                        return r(e)
                    }
                    if (!t) return r("Unable to connect to IndexedDB");
                    t.onupgradeneeded = e => {
                        var r, t = e.target.result,
                            n = e.target.transaction;
                        (r = t.objectStoreNames.contains(Ae.DB_STORE_NAME) ? n.objectStore(Ae.DB_STORE_NAME) : t.createObjectStore(Ae.DB_STORE_NAME)).indexNames.contains("timestamp") || r.createIndex("timestamp", "timestamp", {
                            unique: !1
                        })
                    }, t.onsuccess = () => {
                        n = t.result, Ae.dbs[e] = n, r(null, n)
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
                        return r => we.join2(e, r)
                    }
                    for (var a = Le.readdir(e.mountpoint).filter(n).map(o(e.mountpoint)); a.length;) {
                        var i, u = a.pop();
                        try {
                            i = Le.stat(u)
                        } catch (e) {
                            return r(e)
                        }
                        Le.isDir(i.mode) && a.push.apply(a, Le.readdir(u).filter(n).map(o(u))), t[u] = {
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
                    Ae.getDB(e.mountpoint, ((e, n) => {
                        if (e) return r(e);
                        try {
                            var o = n.transaction([Ae.DB_STORE_NAME], "readonly");
                            o.onerror = e => {
                                r(this.error), e.preventDefault()
                            }, o.objectStore(Ae.DB_STORE_NAME).index("timestamp").openKeyCursor().onsuccess = e => {
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
                        n = Le.lookupPath(e).node, t = Le.stat(e)
                    } catch (e) {
                        return r(e)
                    }
                    return Le.isDir(t.mode) ? r(null, {
                        timestamp: t.mtime,
                        mode: t.mode
                    }) : Le.isFile(t.mode) ? (n.contents = Ce.getFileDataAsTypedArray(n), r(null, {
                        timestamp: t.mtime,
                        mode: t.mode,
                        contents: n.contents
                    })) : r(new Error("node type not supported"))
                },
                storeLocalEntry: (e, r, t) => {
                    try {
                        if (Le.isDir(r.mode)) Le.mkdirTree(e, r.mode);
                        else {
                            if (!Le.isFile(r.mode)) return t(new Error("node type not supported"));
                            Le.writeFile(e, r.contents, {
                                canOwn: !0
                            })
                        }
                        Le.chmod(e, r.mode), Le.utime(e, r.timestamp, r.timestamp)
                    } catch (e) {
                        return t(e)
                    }
                    t(null)
                },
                removeLocalEntry: (e, r) => {
                    try {
                        Le.lookupPath(e);
                        var t = Le.stat(e);
                        Le.isDir(t.mode) ? Le.rmdir(e) : Le.isFile(t.mode) && Le.unlink(e)
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
                        u = ("remote" === e.type ? e.db : r.db).transaction([Ae.DB_STORE_NAME], "readwrite"),
                        s = u.objectStore(Ae.DB_STORE_NAME);

                    function c(e) {
                        if (e && !i) return i = !0, t(e)
                    }
                    u.onerror = e => {
                        c(this.error), e.preventDefault()
                    }, u.oncomplete = e => {
                        i || t(null)
                    }, o.sort().forEach((e => {
                        "local" === r.type ? Ae.loadRemoteEntry(s, e, ((r, t) => {
                            if (r) return c(r);
                            Ae.storeLocalEntry(e, t, c)
                        })) : Ae.loadLocalEntry(e, ((r, t) => {
                            if (r) return c(r);
                            Ae.storeRemoteEntry(s, e, t, c)
                        }))
                    })), a.sort().reverse().forEach((e => {
                        "local" === r.type ? Ae.removeLocalEntry(e, c) : Ae.removeRemoteEntry(s, e, c)
                    }))
                }
            },
            Le = {
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
                    if (!(e = xe.resolve(Le.cwd(), e))) return {
                        path: "",
                        node: null
                    };
                    var t = {
                        follow_mount: !0,
                        recurse_count: 0
                    };
                    for (var n in t) void 0 === r[n] && (r[n] = t[n]);
                    if (r.recurse_count > 8) throw new Le.ErrnoError(32);
                    for (var o = we.normalizeArray(e.split("/").filter((e => !!e)), !1), a = Le.root, i = "/", u = 0; u < o.length; u++) {
                        var s = u === o.length - 1;
                        if (s && r.parent) break;
                        if (a = Le.lookupNode(a, o[u]), i = we.join2(i, o[u]), Le.isMountpoint(a) && (!s || s && r.follow_mount) && (a = a.mounted.root), !s || r.follow)
                            for (var c = 0; Le.isLink(a.mode);) {
                                var f = Le.readlink(i);
                                if (i = xe.resolve(we.dirname(i), f), a = Le.lookupPath(i, {
                                        recurse_count: r.recurse_count
                                    }).node, c++ > 40) throw new Le.ErrnoError(32)
                            }
                    }
                    return {
                        path: i,
                        node: a
                    }
                },
                getPath: e => {
                    for (var r;;) {
                        if (Le.isRoot(e)) {
                            var t = e.mount.mountpoint;
                            return r ? "/" !== t[t.length - 1] ? t + "/" + r : t + r : t
                        }
                        r = r ? e.name + "/" + r : e.name, e = e.parent
                    }
                },
                hashName: (e, r) => {
                    for (var t = 0, n = 0; n < r.length; n++) t = (t << 5) - t + r.charCodeAt(n) | 0;
                    return (e + t >>> 0) % Le.nameTable.length
                },
                hashAddNode: e => {
                    var r = Le.hashName(e.parent.id, e.name);
                    e.name_next = Le.nameTable[r], Le.nameTable[r] = e
                },
                hashRemoveNode: e => {
                    var r = Le.hashName(e.parent.id, e.name);
                    if (Le.nameTable[r] === e) Le.nameTable[r] = e.name_next;
                    else
                        for (var t = Le.nameTable[r]; t;) {
                            if (t.name_next === e) {
                                t.name_next = e.name_next;
                                break
                            }
                            t = t.name_next
                        }
                },
                lookupNode: (e, r) => {
                    var t = Le.mayLookup(e);
                    if (t) throw new Le.ErrnoError(t, e);
                    for (var n = Le.hashName(e.id, r), o = Le.nameTable[n]; o; o = o.name_next) {
                        var a = o.name;
                        if (o.parent.id === e.id && a === r) return o
                    }
                    return Le.lookup(e, r)
                },
                createNode: (e, r, t, n) => {
                    var o = new Le.FSNode(e, r, t, n);
                    return Le.hashAddNode(o), o
                },
                destroyNode: e => {
                    Le.hashRemoveNode(e)
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
                    var r = Le.flagModes[e];
                    if (void 0 === r) throw new Error("Unknown file open mode: " + e);
                    return r
                },
                flagsToPermissionString: e => {
                    var r = ["r", "w", "rw"][3 & e];
                    return 512 & e && (r += "w"), r
                },
                nodePermissions: (e, r) => Le.ignorePermissions || (!r.includes("r") || 292 & e.mode) && (!r.includes("w") || 146 & e.mode) && (!r.includes("x") || 73 & e.mode) ? 0 : 2,
                mayLookup: e => {
                    var r = Le.nodePermissions(e, "x");
                    return r || (e.node_ops.lookup ? 0 : 2)
                },
                mayCreate: (e, r) => {
                    try {
                        Le.lookupNode(e, r);
                        return 20
                    } catch (e) {}
                    return Le.nodePermissions(e, "wx")
                },
                mayDelete: (e, r, t) => {
                    var n;
                    try {
                        n = Le.lookupNode(e, r)
                    } catch (e) {
                        return e.errno
                    }
                    var o = Le.nodePermissions(e, "wx");
                    if (o) return o;
                    if (t) {
                        if (!Le.isDir(n.mode)) return 54;
                        if (Le.isRoot(n) || Le.getPath(n) === Le.cwd()) return 10
                    } else if (Le.isDir(n.mode)) return 31;
                    return 0
                },
                mayOpen: (e, r) => e ? Le.isLink(e.mode) ? 32 : Le.isDir(e.mode) && ("r" !== Le.flagsToPermissionString(r) || 512 & r) ? 31 : Le.nodePermissions(e, Le.flagsToPermissionString(r)) : 44,
                MAX_OPEN_FDS: 4096,
                nextfd: (e = 0, r = Le.MAX_OPEN_FDS) => {
                    for (var t = e; t <= r; t++)
                        if (!Le.streams[t]) return t;
                    throw new Le.ErrnoError(33)
                },
                getStream: e => Le.streams[e],
                createStream: (e, r, t) => {
                    Le.FSStream || (Le.FSStream = function() {}, Le.FSStream.prototype = {
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
                    }), e = Object.assign(new Le.FSStream, e);
                    var n = Le.nextfd(r, t);
                    return e.fd = n, Le.streams[n] = e, e
                },
                closeStream: e => {
                    Le.streams[e] = null
                },
                chrdev_stream_ops: {
                    open: e => {
                        var r = Le.getDevice(e.node.rdev);
                        e.stream_ops = r.stream_ops, e.stream_ops.open && e.stream_ops.open(e)
                    },
                    llseek: () => {
                        throw new Le.ErrnoError(70)
                    }
                },
                major: e => e >> 8,
                minor: e => 255 & e,
                makedev: (e, r) => e << 8 | r,
                registerDevice: (e, r) => {
                    Le.devices[e] = {
                        stream_ops: r
                    }
                },
                getDevice: e => Le.devices[e],
                getMounts: e => {
                    for (var r = [], t = [e]; t.length;) {
                        var n = t.pop();
                        r.push(n), t.push.apply(t, n.mounts)
                    }
                    return r
                },
                syncfs: (e, r) => {
                    "function" == typeof e && (r = e, e = !1), Le.syncFSRequests++, Le.syncFSRequests > 1 && p("warning: " + Le.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
                    var t = Le.getMounts(Le.root.mount),
                        n = 0;

                    function o(e) {
                        return Le.syncFSRequests--, r(e)
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
                    if (o && Le.root) throw new Le.ErrnoError(10);
                    if (!o && !a) {
                        var i = Le.lookupPath(t, {
                            follow_mount: !1
                        });
                        if (t = i.path, n = i.node, Le.isMountpoint(n)) throw new Le.ErrnoError(10);
                        if (!Le.isDir(n.mode)) throw new Le.ErrnoError(54)
                    }
                    var u = {
                            type: e,
                            opts: r,
                            mountpoint: t,
                            mounts: []
                        },
                        s = e.mount(u);
                    return s.mount = u, u.root = s, o ? Le.root = s : n && (n.mounted = u, n.mount && n.mount.mounts.push(u)), s
                },
                unmount: e => {
                    var r = Le.lookupPath(e, {
                        follow_mount: !1
                    });
                    if (!Le.isMountpoint(r.node)) throw new Le.ErrnoError(28);
                    var t = r.node,
                        n = t.mounted,
                        o = Le.getMounts(n);
                    Object.keys(Le.nameTable).forEach((e => {
                        for (var r = Le.nameTable[e]; r;) {
                            var t = r.name_next;
                            o.includes(r.mount) && Le.destroyNode(r), r = t
                        }
                    })), t.mounted = null;
                    var a = t.mount.mounts.indexOf(n);
                    t.mount.mounts.splice(a, 1)
                },
                lookup: (e, r) => e.node_ops.lookup(e, r),
                mknod: (e, r, t) => {
                    var n = Le.lookupPath(e, {
                            parent: !0
                        }).node,
                        o = we.basename(e);
                    if (!o || "." === o || ".." === o) throw new Le.ErrnoError(28);
                    var a = Le.mayCreate(n, o);
                    if (a) throw new Le.ErrnoError(a);
                    if (!n.node_ops.mknod) throw new Le.ErrnoError(63);
                    return n.node_ops.mknod(n, o, r, t)
                },
                create: (e, r) => (r = void 0 !== r ? r : 438, r &= 4095, r |= 32768, Le.mknod(e, r, 0)),
                mkdir: (e, r) => (r = void 0 !== r ? r : 511, r &= 1023, r |= 16384, Le.mknod(e, r, 0)),
                mkdirTree: (e, r) => {
                    for (var t = e.split("/"), n = "", o = 0; o < t.length; ++o)
                        if (t[o]) {
                            n += "/" + t[o];
                            try {
                                Le.mkdir(n, r)
                            } catch (e) {
                                if (20 != e.errno) throw e
                            }
                        }
                },
                mkdev: (e, r, t) => (void 0 === t && (t = r, r = 438), r |= 8192, Le.mknod(e, r, t)),
                symlink: (e, r) => {
                    if (!xe.resolve(e)) throw new Le.ErrnoError(44);
                    var t = Le.lookupPath(r, {
                        parent: !0
                    }).node;
                    if (!t) throw new Le.ErrnoError(44);
                    var n = we.basename(r),
                        o = Le.mayCreate(t, n);
                    if (o) throw new Le.ErrnoError(o);
                    if (!t.node_ops.symlink) throw new Le.ErrnoError(63);
                    return t.node_ops.symlink(t, n, e)
                },
                rename: (e, r) => {
                    var t, n, o = we.dirname(e),
                        a = we.dirname(r),
                        i = we.basename(e),
                        u = we.basename(r);
                    if (t = Le.lookupPath(e, {
                            parent: !0
                        }).node, n = Le.lookupPath(r, {
                            parent: !0
                        }).node, !t || !n) throw new Le.ErrnoError(44);
                    if (t.mount !== n.mount) throw new Le.ErrnoError(75);
                    var s, c = Le.lookupNode(t, i),
                        f = xe.relative(e, a);
                    if ("." !== f.charAt(0)) throw new Le.ErrnoError(28);
                    if ("." !== (f = xe.relative(r, o)).charAt(0)) throw new Le.ErrnoError(55);
                    try {
                        s = Le.lookupNode(n, u)
                    } catch (e) {}
                    if (c !== s) {
                        var l = Le.isDir(c.mode),
                            d = Le.mayDelete(t, i, l);
                        if (d) throw new Le.ErrnoError(d);
                        if (d = s ? Le.mayDelete(n, u, l) : Le.mayCreate(n, u)) throw new Le.ErrnoError(d);
                        if (!t.node_ops.rename) throw new Le.ErrnoError(63);
                        if (Le.isMountpoint(c) || s && Le.isMountpoint(s)) throw new Le.ErrnoError(10);
                        if (n !== t && (d = Le.nodePermissions(t, "w"))) throw new Le.ErrnoError(d);
                        Le.hashRemoveNode(c);
                        try {
                            t.node_ops.rename(c, n, u)
                        } catch (e) {
                            throw e
                        } finally {
                            Le.hashAddNode(c)
                        }
                    }
                },
                rmdir: e => {
                    var r = Le.lookupPath(e, {
                            parent: !0
                        }).node,
                        t = we.basename(e),
                        n = Le.lookupNode(r, t),
                        o = Le.mayDelete(r, t, !0);
                    if (o) throw new Le.ErrnoError(o);
                    if (!r.node_ops.rmdir) throw new Le.ErrnoError(63);
                    if (Le.isMountpoint(n)) throw new Le.ErrnoError(10);
                    r.node_ops.rmdir(r, t), Le.destroyNode(n)
                },
                readdir: e => {
                    var r = Le.lookupPath(e, {
                        follow: !0
                    }).node;
                    if (!r.node_ops.readdir) throw new Le.ErrnoError(54);
                    return r.node_ops.readdir(r)
                },
                unlink: e => {
                    var r = Le.lookupPath(e, {
                        parent: !0
                    }).node;
                    if (!r) throw new Le.ErrnoError(44);
                    var t = we.basename(e),
                        n = Le.lookupNode(r, t),
                        o = Le.mayDelete(r, t, !1);
                    if (o) throw new Le.ErrnoError(o);
                    if (!r.node_ops.unlink) throw new Le.ErrnoError(63);
                    if (Le.isMountpoint(n)) throw new Le.ErrnoError(10);
                    r.node_ops.unlink(r, t), Le.destroyNode(n)
                },
                readlink: e => {
                    var r = Le.lookupPath(e).node;
                    if (!r) throw new Le.ErrnoError(44);
                    if (!r.node_ops.readlink) throw new Le.ErrnoError(28);
                    return xe.resolve(Le.getPath(r.parent), r.node_ops.readlink(r))
                },
                stat: (e, r) => {
                    var t = Le.lookupPath(e, {
                        follow: !r
                    }).node;
                    if (!t) throw new Le.ErrnoError(44);
                    if (!t.node_ops.getattr) throw new Le.ErrnoError(63);
                    return t.node_ops.getattr(t)
                },
                lstat: e => Le.stat(e, !0),
                chmod: (e, r, t) => {
                    var n;
                    "string" == typeof e ? n = Le.lookupPath(e, {
                        follow: !t
                    }).node : n = e;
                    if (!n.node_ops.setattr) throw new Le.ErrnoError(63);
                    n.node_ops.setattr(n, {
                        mode: 4095 & r | -4096 & n.mode,
                        timestamp: Date.now()
                    })
                },
                lchmod: (e, r) => {
                    Le.chmod(e, r, !0)
                },
                fchmod: (e, r) => {
                    var t = Le.getStream(e);
                    if (!t) throw new Le.ErrnoError(8);
                    Le.chmod(t.node, r)
                },
                chown: (e, r, t, n) => {
                    var o;
                    "string" == typeof e ? o = Le.lookupPath(e, {
                        follow: !n
                    }).node : o = e;
                    if (!o.node_ops.setattr) throw new Le.ErrnoError(63);
                    o.node_ops.setattr(o, {
                        timestamp: Date.now()
                    })
                },
                lchown: (e, r, t) => {
                    Le.chown(e, r, t, !0)
                },
                fchown: (e, r, t) => {
                    var n = Le.getStream(e);
                    if (!n) throw new Le.ErrnoError(8);
                    Le.chown(n.node, r, t)
                },
                truncate: (e, r) => {
                    if (r < 0) throw new Le.ErrnoError(28);
                    var t;
                    "string" == typeof e ? t = Le.lookupPath(e, {
                        follow: !0
                    }).node : t = e;
                    if (!t.node_ops.setattr) throw new Le.ErrnoError(63);
                    if (Le.isDir(t.mode)) throw new Le.ErrnoError(31);
                    if (!Le.isFile(t.mode)) throw new Le.ErrnoError(28);
                    var n = Le.nodePermissions(t, "w");
                    if (n) throw new Le.ErrnoError(n);
                    t.node_ops.setattr(t, {
                        size: r,
                        timestamp: Date.now()
                    })
                },
                ftruncate: (e, r) => {
                    var t = Le.getStream(e);
                    if (!t) throw new Le.ErrnoError(8);
                    if (0 == (2097155 & t.flags)) throw new Le.ErrnoError(28);
                    Le.truncate(t.node, r)
                },
                utime: (e, r, t) => {
                    var n = Le.lookupPath(e, {
                        follow: !0
                    }).node;
                    n.node_ops.setattr(n, {
                        timestamp: Math.max(r, t)
                    })
                },
                open: (e, t, n, o, a) => {
                    if ("" === e) throw new Le.ErrnoError(44);
                    var i;
                    if (n = void 0 === n ? 438 : n, n = 64 & (t = "string" == typeof t ? Le.modeStringToFlags(t) : t) ? 4095 & n | 32768 : 0, "object" == typeof e) i = e;
                    else {
                        e = we.normalize(e);
                        try {
                            i = Le.lookupPath(e, {
                                follow: !(131072 & t)
                            }).node
                        } catch (e) {}
                    }
                    var u = !1;
                    if (64 & t)
                        if (i) {
                            if (128 & t) throw new Le.ErrnoError(20)
                        } else i = Le.mknod(e, n, 0), u = !0;
                    if (!i) throw new Le.ErrnoError(44);
                    if (Le.isChrdev(i.mode) && (t &= -513), 65536 & t && !Le.isDir(i.mode)) throw new Le.ErrnoError(54);
                    if (!u) {
                        var s = Le.mayOpen(i, t);
                        if (s) throw new Le.ErrnoError(s)
                    }
                    512 & t && Le.truncate(i, 0), t &= -131713;
                    var c = Le.createStream({
                        node: i,
                        path: Le.getPath(i),
                        flags: t,
                        seekable: !0,
                        position: 0,
                        stream_ops: i.stream_ops,
                        ungotten: [],
                        error: !1
                    }, o, a);
                    return c.stream_ops.open && c.stream_ops.open(c), !r.logReadFiles || 1 & t || (Le.readFiles || (Le.readFiles = {}), e in Le.readFiles || (Le.readFiles[e] = 1)), c
                },
                close: e => {
                    if (Le.isClosed(e)) throw new Le.ErrnoError(8);
                    e.getdents && (e.getdents = null);
                    try {
                        e.stream_ops.close && e.stream_ops.close(e)
                    } catch (e) {
                        throw e
                    } finally {
                        Le.closeStream(e.fd)
                    }
                    e.fd = null
                },
                isClosed: e => null === e.fd,
                llseek: (e, r, t) => {
                    if (Le.isClosed(e)) throw new Le.ErrnoError(8);
                    if (!e.seekable || !e.stream_ops.llseek) throw new Le.ErrnoError(70);
                    if (0 != t && 1 != t && 2 != t) throw new Le.ErrnoError(28);
                    return e.position = e.stream_ops.llseek(e, r, t), e.ungotten = [], e.position
                },
                read: (e, r, t, n, o) => {
                    if (n < 0 || o < 0) throw new Le.ErrnoError(28);
                    if (Le.isClosed(e)) throw new Le.ErrnoError(8);
                    if (1 == (2097155 & e.flags)) throw new Le.ErrnoError(8);
                    if (Le.isDir(e.node.mode)) throw new Le.ErrnoError(31);
                    if (!e.stream_ops.read) throw new Le.ErrnoError(28);
                    var a = void 0 !== o;
                    if (a) {
                        if (!e.seekable) throw new Le.ErrnoError(70)
                    } else o = e.position;
                    var i = e.stream_ops.read(e, r, t, n, o);
                    return a || (e.position += i), i
                },
                write: (e, r, t, n, o, a) => {
                    if (n < 0 || o < 0) throw new Le.ErrnoError(28);
                    if (Le.isClosed(e)) throw new Le.ErrnoError(8);
                    if (0 == (2097155 & e.flags)) throw new Le.ErrnoError(8);
                    if (Le.isDir(e.node.mode)) throw new Le.ErrnoError(31);
                    if (!e.stream_ops.write) throw new Le.ErrnoError(28);
                    e.seekable && 1024 & e.flags && Le.llseek(e, 0, 2);
                    var i = void 0 !== o;
                    if (i) {
                        if (!e.seekable) throw new Le.ErrnoError(70)
                    } else o = e.position;
                    var u = e.stream_ops.write(e, r, t, n, o, a);
                    return i || (e.position += u), u
                },
                allocate: (e, r, t) => {
                    if (Le.isClosed(e)) throw new Le.ErrnoError(8);
                    if (r < 0 || t <= 0) throw new Le.ErrnoError(28);
                    if (0 == (2097155 & e.flags)) throw new Le.ErrnoError(8);
                    if (!Le.isFile(e.node.mode) && !Le.isDir(e.node.mode)) throw new Le.ErrnoError(43);
                    if (!e.stream_ops.allocate) throw new Le.ErrnoError(138);
                    e.stream_ops.allocate(e, r, t)
                },
                mmap: (e, r, t, n, o, a) => {
                    if (0 != (2 & o) && 0 == (2 & a) && 2 != (2097155 & e.flags)) throw new Le.ErrnoError(2);
                    if (1 == (2097155 & e.flags)) throw new Le.ErrnoError(2);
                    if (!e.stream_ops.mmap) throw new Le.ErrnoError(43);
                    return e.stream_ops.mmap(e, r, t, n, o, a)
                },
                msync: (e, r, t, n, o) => e && e.stream_ops.msync ? e.stream_ops.msync(e, r, t, n, o) : 0,
                munmap: e => 0,
                ioctl: (e, r, t) => {
                    if (!e.stream_ops.ioctl) throw new Le.ErrnoError(59);
                    return e.stream_ops.ioctl(e, r, t)
                },
                readFile: (e, r = {}) => {
                    if (r.flags = r.flags || 0, r.encoding = r.encoding || "binary", "utf8" !== r.encoding && "binary" !== r.encoding) throw new Error('Invalid encoding type "' + r.encoding + '"');
                    var t, n = Le.open(e, r.flags),
                        o = Le.stat(e).size,
                        a = new Uint8Array(o);
                    return Le.read(n, a, 0, o, 0), "utf8" === r.encoding ? t = M(a, 0) : "binary" === r.encoding && (t = a), Le.close(n), t
                },
                writeFile: (e, r, t = {}) => {
                    t.flags = t.flags || 577;
                    var n = Le.open(e, t.flags, t.mode);
                    if ("string" == typeof r) {
                        var o = new Uint8Array(z(r) + 1),
                            a = O(r, o, 0, o.length);
                        Le.write(n, o, 0, a, void 0, t.canOwn)
                    } else {
                        if (!ArrayBuffer.isView(r)) throw new Error("Unsupported data type");
                        Le.write(n, r, 0, r.byteLength, void 0, t.canOwn)
                    }
                    Le.close(n)
                },
                cwd: () => Le.currentPath,
                chdir: e => {
                    var r = Le.lookupPath(e, {
                        follow: !0
                    });
                    if (null === r.node) throw new Le.ErrnoError(44);
                    if (!Le.isDir(r.node.mode)) throw new Le.ErrnoError(54);
                    var t = Le.nodePermissions(r.node, "x");
                    if (t) throw new Le.ErrnoError(t);
                    Le.currentPath = r.path
                },
                createDefaultDirectories: () => {
                    Le.mkdir("/tmp"), Le.mkdir("/home"), Le.mkdir("/home/web_user")
                },
                createDefaultDevices: () => {
                    Le.mkdir("/dev"), Le.registerDevice(Le.makedev(1, 3), {
                        read: () => 0,
                        write: (e, r, t, n, o) => n
                    }), Le.mkdev("/dev/null", Le.makedev(1, 3)), Ee.register(Le.makedev(5, 0), Ee.default_tty_ops), Ee.register(Le.makedev(6, 0), Ee.default_tty1_ops), Le.mkdev("/dev/tty", Le.makedev(5, 0)), Le.mkdev("/dev/tty1", Le.makedev(6, 0));
                    var e = function() {
                        if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues) {
                            var e = new Uint8Array(1);
                            return function() {
                                return crypto.getRandomValues(e), e[0]
                            }
                        }
                        return function() {
                            ne("randomDevice")
                        }
                    }();
                    Le.createDevice("/dev", "random", e), Le.createDevice("/dev", "urandom", e), Le.mkdir("/dev/shm"), Le.mkdir("/dev/shm/tmp")
                },
                createSpecialDirectories: () => {
                    Le.mkdir("/proc");
                    var e = Le.mkdir("/proc/self");
                    Le.mkdir("/proc/self/fd"), Le.mount({
                        mount: () => {
                            var r = Le.createNode(e, "fd", 16895, 73);
                            return r.node_ops = {
                                lookup: (e, r) => {
                                    var t = +r,
                                        n = Le.getStream(t);
                                    if (!n) throw new Le.ErrnoError(8);
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
                    r.stdin ? Le.createDevice("/dev", "stdin", r.stdin) : Le.symlink("/dev/tty", "/dev/stdin"), r.stdout ? Le.createDevice("/dev", "stdout", null, r.stdout) : Le.symlink("/dev/tty", "/dev/stdout"), r.stderr ? Le.createDevice("/dev", "stderr", null, r.stderr) : Le.symlink("/dev/tty1", "/dev/stderr");
                    Le.open("/dev/stdin", 0), Le.open("/dev/stdout", 1), Le.open("/dev/stderr", 1)
                },
                ensureErrnoError: () => {
                    Le.ErrnoError || (Le.ErrnoError = function(e, r) {
                        this.node = r, this.setErrno = function(e) {
                            this.errno = e
                        }, this.setErrno(e), this.message = "FS error"
                    }, Le.ErrnoError.prototype = new Error, Le.ErrnoError.prototype.constructor = Le.ErrnoError, [44].forEach((e => {
                        Le.genericErrors[e] = new Le.ErrnoError(e), Le.genericErrors[e].stack = "<generic error, no stack>"
                    })))
                },
                staticInit: () => {
                    Le.ensureErrnoError(), Le.nameTable = new Array(4096), Le.mount(Ce, {}, "/"), Le.createDefaultDirectories(), Le.createDefaultDevices(), Le.createSpecialDirectories(), Le.filesystems = {
                        MEMFS: Ce,
                        IDBFS: Ae
                    }
                },
                init: (e, t, n) => {
                    Le.init.initialized = !0, Le.ensureErrnoError(), r.stdin = e || r.stdin, r.stdout = t || r.stdout, r.stderr = n || r.stderr, Le.createStandardStreams()
                },
                quit: () => {
                    Le.init.initialized = !1;
                    for (var e = 0; e < Le.streams.length; e++) {
                        var r = Le.streams[e];
                        r && Le.close(r)
                    }
                },
                getMode: (e, r) => {
                    var t = 0;
                    return e && (t |= 365), r && (t |= 146), t
                },
                findObject: (e, r) => {
                    var t = Le.analyzePath(e, r);
                    return t.exists ? t.object : null
                },
                analyzePath: (e, r) => {
                    try {
                        e = (n = Le.lookupPath(e, {
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
                        var n = Le.lookupPath(e, {
                            parent: !0
                        });
                        t.parentExists = !0, t.parentPath = n.path, t.parentObject = n.node, t.name = we.basename(e), n = Le.lookupPath(e, {
                            follow: !r
                        }), t.exists = !0, t.path = n.path, t.object = n.node, t.name = n.node.name, t.isRoot = "/" === n.path
                    } catch (e) {
                        t.error = e.errno
                    }
                    return t
                },
                createPath: (e, r, t, n) => {
                    e = "string" == typeof e ? e : Le.getPath(e);
                    for (var o = r.split("/").reverse(); o.length;) {
                        var a = o.pop();
                        if (a) {
                            var i = we.join2(e, a);
                            try {
                                Le.mkdir(i)
                            } catch (e) {}
                            e = i
                        }
                    }
                    return i
                },
                createFile: (e, r, t, n, o) => {
                    var a = we.join2("string" == typeof e ? e : Le.getPath(e), r),
                        i = Le.getMode(n, o);
                    return Le.create(a, i)
                },
                createDataFile: (e, r, t, n, o, a) => {
                    var i = r;
                    e && (e = "string" == typeof e ? e : Le.getPath(e), i = r ? we.join2(e, r) : e);
                    var u = Le.getMode(n, o),
                        s = Le.create(i, u);
                    if (t) {
                        if ("string" == typeof t) {
                            for (var c = new Array(t.length), f = 0, l = t.length; f < l; ++f) c[f] = t.charCodeAt(f);
                            t = c
                        }
                        Le.chmod(s, 146 | u);
                        var d = Le.open(s, 577);
                        Le.write(d, t, 0, t.length, 0, a), Le.close(d), Le.chmod(s, u)
                    }
                    return s
                },
                createDevice: (e, r, t, n) => {
                    var o = we.join2("string" == typeof e ? e : Le.getPath(e), r),
                        a = Le.getMode(!!t, !!n);
                    Le.createDevice.major || (Le.createDevice.major = 64);
                    var i = Le.makedev(Le.createDevice.major++, 0);
                    return Le.registerDevice(i, {
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
                                    throw new Le.ErrnoError(29)
                                }
                                if (void 0 === s && 0 === i) throw new Le.ErrnoError(6);
                                if (null == s) break;
                                i++, r[n + u] = s
                            }
                            return i && (e.node.timestamp = Date.now()), i
                        },
                        write: (e, r, t, o, a) => {
                            for (var i = 0; i < o; i++) try {
                                n(r[t + i])
                            } catch (e) {
                                throw new Le.ErrnoError(29)
                            }
                            return o && (e.node.timestamp = Date.now()), i
                        }
                    }), Le.mkdev(o, a, i)
                },
                forceLoadFile: e => {
                    if (e.isDevice || e.isFolder || e.link || e.contents) return !0;
                    if ("undefined" != typeof XMLHttpRequest) throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
                    if (!o) throw new Error("Cannot load without read() or XMLHttpRequest.");
                    try {
                        e.contents = Yr(o(e.url), !0), e.usedBytes = e.contents.length
                    } catch (e) {
                        throw new Le.ErrnoError(29)
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
                                        return void 0 !== o.response ? new Uint8Array(o.response || []) : Yr(o.responseText || "", !0)
                                    })(r, o)), void 0 === u.chunks[e]) throw new Error("doXHR failed!");
                                return u.chunks[e]
                            })), !a && n || (i = n = 1, n = this.getter(0).length, i = n, m("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = n, this._chunkSize = i, this.lengthKnown = !0
                        }, "undefined" != typeof XMLHttpRequest) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
                    var i = {
                            isDevice: !1,
                            url: t
                        },
                        u = Le.createFile(e, r, i, n, o);
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
                            return Le.forceLoadFile(u), r.apply(null, arguments)
                        }
                    })), s.read = (e, r, t, n, o) => {
                        Le.forceLoadFile(u);
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
                    var l = r ? xe.resolve(we.join2(e, r)) : e;

                    function d(t) {
                        function a(t) {
                            f && f(), s || Le.createDataFile(e, r, t, n, o, c), i && i(), te()
                        }
                        Ie.handledByPreloadPlugin(t, l, a, (() => {
                            u && u(), te()
                        })) || a(t)
                    }
                    re(), "string" == typeof t ? function(e, r, t, n) {
                        var o = n ? "" : "al " + e;
                        a(e, (function(t) {
                            k(t, 'Loading data file "' + e + '" failed (no arrayBuffer).'), r(new Uint8Array(t)), o && te()
                        }), (function(r) {
                            if (!t) throw 'Loading data file "' + e + '" failed.';
                            t()
                        })), o && re()
                    }(t, (e => d(e)), u) : d(t)
                },
                indexedDB: () => window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB,
                DB_NAME: () => "EM_FS_" + window.location.pathname,
                DB_VERSION: 20,
                DB_STORE_NAME: "FILE_DATA",
                saveFilesToDB: (e, r, t) => {
                    r = r || (() => {}), t = t || (() => {});
                    var n = Le.indexedDB();
                    try {
                        var o = n.open(Le.DB_NAME(), Le.DB_VERSION)
                    } catch (e) {
                        return t(e)
                    }
                    o.onupgradeneeded = () => {
                        m("creating db"), o.result.createObjectStore(Le.DB_STORE_NAME)
                    }, o.onsuccess = () => {
                        var n = o.result.transaction([Le.DB_STORE_NAME], "readwrite"),
                            a = n.objectStore(Le.DB_STORE_NAME),
                            i = 0,
                            u = 0,
                            s = e.length;

                        function c() {
                            0 == u ? r() : t()
                        }
                        e.forEach((e => {
                            var r = a.put(Le.analyzePath(e).object.contents, e);
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
                    var n = Le.indexedDB();
                    try {
                        var o = n.open(Le.DB_NAME(), Le.DB_VERSION)
                    } catch (e) {
                        return t(e)
                    }
                    o.onupgradeneeded = t, o.onsuccess = () => {
                        var n = o.result;
                        try {
                            var a = n.transaction([Le.DB_STORE_NAME], "readonly")
                        } catch (e) {
                            return void t(e)
                        }
                        var i = a.objectStore(Le.DB_STORE_NAME),
                            u = 0,
                            s = 0,
                            c = e.length;

                        function f() {
                            0 == s ? r() : t()
                        }
                        e.forEach((e => {
                            var r = i.get(e);
                            r.onsuccess = () => {
                                Le.analyzePath(e).exists && Le.unlink(e), Le.createDataFile(we.dirname(e), we.basename(e), r.result, !0, !0, !0), ++u + s == c && f()
                            }, r.onerror = () => {
                                s++, u + s == c && f()
                            }
                        })), a.onerror = t
                    }, o.onerror = t
                }
            },
            Be = {
                DEFAULT_POLLMASK: 5,
                calculateAt: function(e, r, t) {
                    if ("/" === r[0]) return r;
                    var n;
                    if (-100 === e) n = Le.cwd();
                    else {
                        var o = Le.getStream(e);
                        if (!o) throw new Le.ErrnoError(8);
                        n = o.path
                    }
                    if (0 == r.length) {
                        if (!t) throw new Le.ErrnoError(44);
                        return n
                    }
                    return we.join2(n, r)
                },
                doStat: function(e, r, t) {
                    try {
                        var n = e(r)
                    } catch (e) {
                        if (e && e.node && we.normalize(r) !== we.normalize(Le.getPath(e.node))) return -54;
                        throw e
                    }
                    return P[t >> 2] = n.dev, P[t + 4 >> 2] = 0, P[t + 8 >> 2] = n.ino, P[t + 12 >> 2] = n.mode, P[t + 16 >> 2] = n.nlink, P[t + 20 >> 2] = n.uid, P[t + 24 >> 2] = n.gid, P[t + 28 >> 2] = n.rdev, P[t + 32 >> 2] = 0, ue = [n.size >>> 0, (ie = n.size, +Math.abs(ie) >= 1 ? ie > 0 ? (0 | Math.min(+Math.floor(ie / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((ie - +(~~ie >>> 0)) / 4294967296) >>> 0 : 0)], P[t + 40 >> 2] = ue[0], P[t + 44 >> 2] = ue[1], P[t + 48 >> 2] = 4096, P[t + 52 >> 2] = n.blocks, P[t + 56 >> 2] = n.atime.getTime() / 1e3 | 0, P[t + 60 >> 2] = 0, P[t + 64 >> 2] = n.mtime.getTime() / 1e3 | 0, P[t + 68 >> 2] = 0, P[t + 72 >> 2] = n.ctime.getTime() / 1e3 | 0, P[t + 76 >> 2] = 0, ue = [n.ino >>> 0, (ie = n.ino, +Math.abs(ie) >= 1 ? ie > 0 ? (0 | Math.min(+Math.floor(ie / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((ie - +(~~ie >>> 0)) / 4294967296) >>> 0 : 0)], P[t + 80 >> 2] = ue[0], P[t + 84 >> 2] = ue[1], 0
                },
                doMsync: function(e, r, t, n, o) {
                    var a = B.slice(e, e + t);
                    Le.msync(r, a, o, t, n)
                },
                doMkdir: function(e, r) {
                    return "/" === (e = we.normalize(e))[e.length - 1] && (e = e.substr(0, e.length - 1)), Le.mkdir(e, r, 0), 0
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
                    return Le.mknod(e, r, t), 0
                },
                doReadlink: function(e, r, t) {
                    if (t <= 0) return -28;
                    var n = Le.readlink(e),
                        o = Math.min(t, z(n)),
                        a = L[r + o];
                    return U(n, r, t + 1), L[r + o] = a, o
                },
                doAccess: function(e, r) {
                    if (-8 & r) return -28;
                    var t = Le.lookupPath(e, {
                        follow: !0
                    }).node;
                    if (!t) return -44;
                    var n = "";
                    return 4 & r && (n += "r"), 2 & r && (n += "w"), 1 & r && (n += "x"), n && Le.nodePermissions(t, n) ? -2 : 0
                },
                doDup: function(e, r, t) {
                    var n = Le.getStream(t);
                    return n && Le.close(n), Le.open(e, r, 0, t, t).fd
                },
                doReadv: function(e, r, t, n) {
                    for (var o = 0, a = 0; a < t; a++) {
                        var i = P[r + 8 * a >> 2],
                            u = P[r + (8 * a + 4) >> 2],
                            s = Le.read(e, L, i, u, n);
                        if (s < 0) return -1;
                        if (o += s, s < u) break
                    }
                    return o
                },
                doWritev: function(e, r, t, n) {
                    for (var o = 0, a = 0; a < t; a++) {
                        var i = P[r + 8 * a >> 2],
                            u = P[r + (8 * a + 4) >> 2],
                            s = Le.write(e, L, i, u, n);
                        if (s < 0) return -1;
                        o += s
                    }
                    return o
                },
                varargs: void 0,
                get: function() {
                    return Be.varargs += 4, P[Be.varargs - 4 >> 2]
                },
                getStr: function(e) {
                    return N(e)
                },
                getStreamFromFD: function(e) {
                    var r = Le.getStream(e);
                    if (!r) throw new Le.ErrnoError(8);
                    return r
                },
                get64: function(e, r) {
                    return e
                }
            };

        function _e(e, r) {
            if (Ie.mainLoop.timingMode = e, Ie.mainLoop.timingValue = r, !Ie.mainLoop.func) return 1;
            if (Ie.mainLoop.running || (Ie.mainLoop.running = !0), 0 == e) Ie.mainLoop.scheduler = function() {
                var e = 0 | Math.max(0, Ie.mainLoop.tickStartTime + r - Se());
                setTimeout(Ie.mainLoop.runner, e)
            }, Ie.mainLoop.method = "timeout";
            else if (1 == e) Ie.mainLoop.scheduler = function() {
                Ie.requestAnimationFrame(Ie.mainLoop.runner)
            }, Ie.mainLoop.method = "rAF";
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
                Ie.mainLoop.scheduler = function() {
                    setImmediate(Ie.mainLoop.runner)
                }, Ie.mainLoop.method = "immediate"
            }
            return 0
        }

        function De(e) {
            ct(e)
        }

        function Pe(e, r, t, n, o) {
            k(!Ie.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters."), Ie.mainLoop.func = e, Ie.mainLoop.arg = n;
            var a = Ie.mainLoop.currentlyRunningMainloop;

            function i() {
                return !(a < Ie.mainLoop.currentlyRunningMainloop) || (function() {
                    if (!$()) try {
                        De(x)
                    } catch (e) {
                        he(e)
                    }
                }(), !1)
            }
            if (Ie.mainLoop.running = !1, Ie.mainLoop.runner = function() {
                    if (!E)
                        if (Ie.mainLoop.queue.length > 0) {
                            var r = Date.now(),
                                t = Ie.mainLoop.queue.shift();
                            if (t.func(t.arg), Ie.mainLoop.remainingBlockers) {
                                var n = Ie.mainLoop.remainingBlockers,
                                    o = n % 1 == 0 ? n - 1 : Math.floor(n);
                                t.counted ? Ie.mainLoop.remainingBlockers = o : (o += .5, Ie.mainLoop.remainingBlockers = (8 * n + o) / 9)
                            }
                            if (m('main loop blocker "' + t.name + '" took ' + (Date.now() - r) + " ms"), Ie.mainLoop.updateStatus(), !i()) return;
                            setTimeout(Ie.mainLoop.runner, 0)
                        } else i() && (Ie.mainLoop.currentFrameNumber = Ie.mainLoop.currentFrameNumber + 1 | 0, 1 == Ie.mainLoop.timingMode && Ie.mainLoop.timingValue > 1 && Ie.mainLoop.currentFrameNumber % Ie.mainLoop.timingValue != 0 ? Ie.mainLoop.scheduler() : (0 == Ie.mainLoop.timingMode && (Ie.mainLoop.tickStartTime = Se()), Oe.newRenderingFrameStarted(), Ie.mainLoop.runIter(e), i() && ("object" == typeof SDL && SDL.audio && SDL.audio.queueNewAudioData && SDL.audio.queueNewAudioData(), Ie.mainLoop.scheduler())))
                }, o || (r && r > 0 ? _e(0, 1e3 / r) : _e(1, 1), Ie.mainLoop.scheduler()), t) throw "unwind"
        }

        function Fe(e, r) {
            if (!K && !E)
                if (r) e();
                else try {
                    e()
                } catch (e) {
                    he(e)
                }
        }

        function Te(e, r) {
            return setTimeout((function() {
                Fe(e)
            }), r)
        }
        Se = () => performance.now();
        var Ie = {
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
                        Ie.mainLoop.scheduler = null, Ie.mainLoop.currentlyRunningMainloop++
                    },
                    resume: function() {
                        Ie.mainLoop.currentlyRunningMainloop++;
                        var e = Ie.mainLoop.timingMode,
                            r = Ie.mainLoop.timingValue,
                            t = Ie.mainLoop.func;
                        Ie.mainLoop.func = null, Pe(t, 0, !1, Ie.mainLoop.arg, !0), _e(e, r), Ie.mainLoop.scheduler()
                    },
                    updateStatus: function() {
                        if (r.setStatus) {
                            var e = r.statusMessage || "Please wait...",
                                t = Ie.mainLoop.remainingBlockers,
                                n = Ie.mainLoop.expectedBlockers;
                            t ? t < n ? r.setStatus(e + " (" + (n - t) + "/" + n + ")") : r.setStatus(e) : r.setStatus("")
                        }
                    },
                    runIter: function(e) {
                        if (!E) {
                            if (r.preMainLoop)
                                if (!1 === r.preMainLoop()) return;
                            Fe(e), r.postMainLoop && r.postMainLoop()
                        }
                    }
                },
                isFullscreen: !1,
                pointerLock: !1,
                moduleContextCreatedCallbacks: [],
                workers: [],
                init: function() {
                    if (r.preloadPlugins || (r.preloadPlugins = []), !Ie.initted) {
                        Ie.initted = !0;
                        try {
                            new Blob, Ie.hasBlobConstructor = !0
                        } catch (e) {
                            Ie.hasBlobConstructor = !1, m("warning: no blob constructor, cannot create blobs with mimetypes")
                        }
                        Ie.BlobBuilder = "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : Ie.hasBlobConstructor ? null : m("warning: no BlobBuilder"), Ie.URLObject = "undefined" != typeof window ? window.URL ? window.URL : window.webkitURL : void 0, r.noImageDecoding || void 0 !== Ie.URLObject || (m("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."), r.noImageDecoding = !0);
                        var e = {
                            canHandle: function(e) {
                                return !r.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(e)
                            },
                            handle: function(e, t, n, o) {
                                var a = null;
                                if (Ie.hasBlobConstructor) try {
                                    (a = new Blob([e], {
                                        type: Ie.getMimetype(t)
                                    })).size !== e.length && (a = new Blob([new Uint8Array(e).buffer], {
                                        type: Ie.getMimetype(t)
                                    }))
                                } catch (e) {
                                    v("Blob constructor present but fails: " + e + "; falling back to blob builder")
                                }
                                if (!a) {
                                    var i = new Ie.BlobBuilder;
                                    i.append(new Uint8Array(e).buffer), a = i.getBlob()
                                }
                                var u = Ie.URLObject.createObjectURL(a),
                                    s = new Image;
                                s.onload = () => {
                                    k(s.complete, "Image " + t + " could not be decoded");
                                    var o = document.createElement("canvas");
                                    o.width = s.width, o.height = s.height, o.getContext("2d").drawImage(s, 0, 0), r.preloadedImages[t] = o, Ie.URLObject.revokeObjectURL(u), n && n(e)
                                }, s.onerror = e => {
                                    m("Image " + u + " could not be decoded"), o && o()
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
                                if (!Ie.hasBlobConstructor) return u();
                                try {
                                    var s = new Blob([e], {
                                        type: Ie.getMimetype(t)
                                    })
                                } catch (e) {
                                    return u()
                                }
                                var c = Ie.URLObject.createObjectURL(s),
                                    f = new Audio;
                                f.addEventListener("canplaythrough", (function() {
                                    i(f)
                                }), !1), f.onerror = function(r) {
                                    a || (m("warning: browser could not fully decode audio " + t + ", trying slower base64 approach"), f.src = "data:audio/x-" + t.substr(-3) + ";base64," + function(e) {
                                        for (var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t = "", n = 0, o = 0, a = 0; a < e.length; a++)
                                            for (n = n << 8 | e[a], o += 8; o >= 6;) {
                                                var i = n >> o - 6 & 63;
                                                o -= 6, t += r[i]
                                            }
                                        return 2 == o ? (t += r[(3 & n) << 4], t += "==") : 4 == o && (t += r[(15 & n) << 2], t += "="), t
                                    }(e), i(f))
                                }, f.src = c, Te((function() {
                                    i(f)
                                }), 1e4)
                            }
                        };
                        r.preloadPlugins.push(t);
                        var n = r.canvas;
                        n && (n.requestPointerLock = n.requestPointerLock || n.mozRequestPointerLock || n.webkitRequestPointerLock || n.msRequestPointerLock || function() {}, n.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function() {}, n.exitPointerLock = n.exitPointerLock.bind(document), document.addEventListener("pointerlockchange", o, !1), document.addEventListener("mozpointerlockchange", o, !1), document.addEventListener("webkitpointerlockchange", o, !1), document.addEventListener("mspointerlockchange", o, !1), r.elementPointerLock && n.addEventListener("click", (function(e) {
                            !Ie.pointerLock && r.canvas.requestPointerLock && (r.canvas.requestPointerLock(), e.preventDefault())
                        }), !1))
                    }

                    function o() {
                        Ie.pointerLock = document.pointerLockElement === r.canvas || document.mozPointerLockElement === r.canvas || document.webkitPointerLockElement === r.canvas || document.msPointerLockElement === r.canvas
                    }
                },
                handledByPreloadPlugin: function(e, t, n, o) {
                    Ie.init();
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
                        void 0 !== Oe && (i = Oe.createContext(e, u)) && (a = Oe.getContext(i).GLctx)
                    } else a = e.getContext("2d");
                    return a ? (n && (t || k(void 0 === qr, "cannot set in module if GLctx is used, but we are a non-GL context that would replace it"), r.ctx = a, t && Oe.makeContextCurrent(i), r.useWebGL = t, Ie.moduleContextCreatedCallbacks.forEach((function(e) {
                        e()
                    })), Ie.init()), a) : null
                },
                destroyContext: function(e, r, t) {},
                fullscreenHandlersInstalled: !1,
                lockPointer: void 0,
                resizeCanvas: void 0,
                requestFullscreen: function(e, t) {
                    Ie.lockPointer = e, Ie.resizeCanvas = t, void 0 === Ie.lockPointer && (Ie.lockPointer = !0), void 0 === Ie.resizeCanvas && (Ie.resizeCanvas = !1);
                    var n = r.canvas;

                    function o() {
                        Ie.isFullscreen = !1;
                        var e = n.parentNode;
                        (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === e ? (n.exitFullscreen = Ie.exitFullscreen, Ie.lockPointer && n.requestPointerLock(), Ie.isFullscreen = !0, Ie.resizeCanvas ? Ie.setFullscreenCanvasSize() : Ie.updateCanvasDimensions(n)) : (e.parentNode.insertBefore(n, e), e.parentNode.removeChild(e), Ie.resizeCanvas ? Ie.setWindowedCanvasSize() : Ie.updateCanvasDimensions(n)), r.onFullScreen && r.onFullScreen(Ie.isFullscreen), r.onFullscreen && r.onFullscreen(Ie.isFullscreen)
                    }
                    Ie.fullscreenHandlersInstalled || (Ie.fullscreenHandlersInstalled = !0, document.addEventListener("fullscreenchange", o, !1), document.addEventListener("mozfullscreenchange", o, !1), document.addEventListener("webkitfullscreenchange", o, !1), document.addEventListener("MSFullscreenChange", o, !1));
                    var a = document.createElement("div");
                    n.parentNode.insertBefore(a, n), a.appendChild(n), a.requestFullscreen = a.requestFullscreen || a.mozRequestFullScreen || a.msRequestFullscreen || (a.webkitRequestFullscreen ? function() {
                        a.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
                    } : null) || (a.webkitRequestFullScreen ? function() {
                        a.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
                    } : null), a.requestFullscreen()
                },
                exitFullscreen: function() {
                    return !!Ie.isFullscreen && ((document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function() {}).apply(document, []), !0)
                },
                nextRAF: 0,
                fakeRequestAnimationFrame: function(e) {
                    var r = Date.now();
                    if (0 === Ie.nextRAF) Ie.nextRAF = r + 1e3 / 60;
                    else
                        for (; r + 2 >= Ie.nextRAF;) Ie.nextRAF += 1e3 / 60;
                    var t = Math.max(Ie.nextRAF - r, 0);
                    setTimeout(e, t)
                },
                requestAnimationFrame: function(e) {
                    "function" != typeof requestAnimationFrame ? (0, Ie.fakeRequestAnimationFrame)(e) : requestAnimationFrame(e)
                },
                safeSetTimeout: function(e) {
                    return Te(e)
                },
                safeRequestAnimationFrame: function(e) {
                    return Ie.requestAnimationFrame((function() {
                        Fe(e)
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
                    if (Ie.pointerLock) "mousemove" != e.type && "mozMovementX" in e ? Ie.mouseMovementX = Ie.mouseMovementY = 0 : (Ie.mouseMovementX = Ie.getMovementX(e), Ie.mouseMovementY = Ie.getMovementY(e)), "undefined" != typeof SDL ? (Ie.mouseX = SDL.mouseX + Ie.mouseMovementX, Ie.mouseY = SDL.mouseY + Ie.mouseMovementY) : (Ie.mouseX += Ie.mouseMovementX, Ie.mouseY += Ie.mouseMovementY);
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
                            if ("touchstart" === e.type) Ie.lastTouches[u.identifier] = f, Ie.touches[u.identifier] = f;
                            else if ("touchend" === e.type || "touchmove" === e.type) {
                                var l = Ie.touches[u.identifier];
                                l || (l = f), Ie.lastTouches[u.identifier] = l, Ie.touches[u.identifier] = f
                            }
                            return
                        }
                        var d = e.pageX - (a + t.left),
                            m = e.pageY - (i + t.top);
                        d *= n / t.width, m *= o / t.height, Ie.mouseMovementX = d - Ie.mouseX, Ie.mouseMovementY = m - Ie.mouseY, Ie.mouseX = d, Ie.mouseY = m
                    }
                },
                resizeListeners: [],
                updateResizeListeners: function() {
                    var e = r.canvas;
                    Ie.resizeListeners.forEach((function(r) {
                        r(e.width, e.height)
                    }))
                },
                setCanvasSize: function(e, t, n) {
                    var o = r.canvas;
                    Ie.updateCanvasDimensions(o, e, t), n || Ie.updateResizeListeners()
                },
                windowedWidth: 0,
                windowedHeight: 0,
                setFullscreenCanvasSize: function() {
                    if ("undefined" != typeof SDL) {
                        var e = F[SDL.screen >> 2];
                        e |= 8388608, P[SDL.screen >> 2] = e
                    }
                    Ie.updateCanvasDimensions(r.canvas), Ie.updateResizeListeners()
                },
                setWindowedCanvasSize: function() {
                    if ("undefined" != typeof SDL) {
                        var e = F[SDL.screen >> 2];
                        e &= -8388609, P[SDL.screen >> 2] = e
                    }
                    Ie.updateCanvasDimensions(r.canvas), Ie.updateResizeListeners()
                },
                updateCanvasDimensions: function(e, t, n) {
                    t && n ? (e.widthNative = t, e.heightNative = n) : (t = e.widthNative, n = e.heightNative);
                    var o = t,
                        a = n;
                    if (r.forcedAspectRatio && r.forcedAspectRatio > 0 && (o / a < r.forcedAspectRatio ? o = Math.round(a * r.forcedAspectRatio) : a = Math.round(o / r.forcedAspectRatio)), (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === e.parentNode && "undefined" != typeof screen) {
                        var i = Math.min(screen.width / o, screen.height / a);
                        o = Math.round(o * i), a = Math.round(a * i)
                    }
                    Ie.resizeCanvas ? (e.width != o && (e.width = o), e.height != a && (e.height = a), void 0 !== e.style && (e.style.removeProperty("width"), e.style.removeProperty("height"))) : (e.width != t && (e.width = t), e.height != n && (e.height = n), void 0 !== e.style && (o != t || a != n ? (e.style.setProperty("width", o + "px", "important"), e.style.setProperty("height", a + "px", "important")) : (e.style.removeProperty("width"), e.style.removeProperty("height"))))
                }
            },
            Re = {
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
                    return Re.freeIds.length > 0 ? Re.freeIds.pop() : Re._nextId++
                },
                freeIds: [],
                scheduleContextAudio: function(e) {
                    if (1 !== Ie.mainLoop.timingMode || "visible" == document.visibilityState)
                        for (var r in e.sources) Re.scheduleSourceAudio(e.sources[r])
                },
                scheduleSourceAudio: function(e, r) {
                    if ((1 !== Ie.mainLoop.timingMode || "visible" == document.visibilityState) && 4114 === e.state) {
                        for (var t = Re.updateSourceTime(e), n = e.bufStartTime, o = e.bufOffset, a = e.bufsProcessed, i = 0; i < e.audioQueue.length; i++) {
                            n = (f = e.audioQueue[i])._startTime + f._duration, o = 0, a += f._skipCount + 1
                        }
                        r || (r = Re.QUEUE_LOOKAHEAD);
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
                    if (e.bufsProcessed >= e.bufQueue.length && !e.looping) Re.setSourceState(e, 4116);
                    else if (4136 === e.type && e.looping) {
                        if (0 === (c = e.bufQueue[0]).length) e.bufOffset = 0;
                        else {
                            var o = (r - e.bufStartTime) * e.playbackRate,
                                a = c.audioBuf._loopStart || 0,
                                i = c.audioBuf._loopEnd || c.audioBuf.duration;
                            i <= a && (i = c.audioBuf.duration), e.bufOffset = o < i ? o : a + (o - a) % (i - a)
                        }
                    } else if (e.audioQueue[0]) e.bufOffset = (r - e.audioQueue[0]._startTime) * e.playbackRate;
                    else {
                        if (4136 !== e.type && e.looping) {
                            var u = Re.sourceDuration(e) / e.playbackRate;
                            u > 0 && (e.bufStartTime += Math.floor((r - e.bufStartTime) / u) * u)
                        }
                        for (var s = 0; s < e.bufQueue.length; s++) {
                            if (e.bufsProcessed >= e.bufQueue.length) {
                                if (!e.looping) {
                                    Re.setSourceState(e, 4116);
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
                    Re.updateSourceTime(e);
                    for (var r = 1; r < e.audioQueue.length; r++) {
                        e.audioQueue[r].stop()
                    }
                    e.audioQueue.length > 1 && (e.audioQueue.length = 1)
                },
                stopSourceAudio: function(e) {
                    for (var r = 0; r < e.audioQueue.length; r++) e.audioQueue[r].stop();
                    e.audioQueue.length = 0
                },
                setSourceState: function(e, r) {
                    4114 === r ? (4114 !== e.state && 4116 != e.state || (e.bufsProcessed = 0, e.bufOffset = 0), Re.stopSourceAudio(e), e.state = 4114, e.bufStartTime = Number.NEGATIVE_INFINITY, Re.scheduleSourceAudio(e)) : 4115 === r ? 4114 === e.state && (Re.updateSourceTime(e), Re.stopSourceAudio(e), e.state = 4115) : 4116 === r ? 4113 !== e.state && (e.state = 4116, e.bufsProcessed = e.bufQueue.length, e.bufStartTime = Number.NEGATIVE_INFINITY, e.bufOffset = 0, Re.stopSourceAudio(e)) : 4113 === r && 4113 !== e.state && (e.state = 4113, e.bufsProcessed = 0, e.bufStartTime = Number.NEGATIVE_INFINITY, e.bufOffset = 0, Re.stopSourceAudio(e))
                },
                initSourcePanner: function(e) {
                    if (4144 !== e.type) {
                        for (var r = Re.buffers[0], t = 0; t < e.bufQueue.length; t++)
                            if (0 !== e.bufQueue[t].id) {
                                r = e.bufQueue[t];
                                break
                            } if (1 === e.spatialize || 2 === e.spatialize && 1 === r.channels) {
                            if (e.panner) return;
                            e.panner = e.context.audioCtx.createPanner(), Re.updateSourceGlobal(e), Re.updateSourceSpace(e), e.panner.connect(e.context.gain), e.gain.disconnect(), e.gain.connect(e.panner)
                        } else {
                            if (!e.panner) return;
                            e.panner.disconnect(), e.gain.disconnect(), e.gain.connect(e.context.gain), e.panner = null
                        }
                    }
                },
                updateContextGlobal: function(e) {
                    for (var r in e.sources) Re.updateSourceGlobal(e.sources[r])
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
                    for (var t in r.positionX ? (r.positionX.value = e.listener.position[0], r.positionY.value = e.listener.position[1], r.positionZ.value = e.listener.position[2]) : r.setPosition(e.listener.position[0], e.listener.position[1], e.listener.position[2]), r.forwardX ? (r.forwardX.value = e.listener.direction[0], r.forwardY.value = e.listener.direction[1], r.forwardZ.value = e.listener.direction[2], r.upX.value = e.listener.up[0], r.upY.value = e.listener.up[1], r.upZ.value = e.listener.up[2]) : r.setOrientation(e.listener.direction[0], e.listener.direction[1], e.listener.direction[2], e.listener.up[0], e.listener.up[1], e.listener.up[2]), e.sources) Re.updateSourceSpace(e.sources[t])
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
                        e.dopplerShift !== A && Re.updateSourceRate(e)
                    }
                },
                updateSourceRate: function(e) {
                    if (4114 === e.state) {
                        Re.cancelPendingSourceAudio(e);
                        var r, t = e.audioQueue[0];
                        if (!t) return;
                        r = 4136 === e.type && e.looping ? Number.POSITIVE_INFINITY : (t.buffer.duration - t._startOffset) / e.playbackRate, t._duration = r, t.playbackRate.value = e.playbackRate, Re.scheduleSourceAudio(e)
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
                    Re.updateSourceTime(e);
                    for (var r = 0, t = 0; t < e.bufsProcessed; t++) e.bufQueue[t].audioBuf && (r += e.bufQueue[t].audioBuf.duration);
                    return r += e.bufOffset
                },
                sourceSeek: function(e, r) {
                    var t = 4114 == e.state;
                    if (t && Re.setSourceState(e, 4113), null !== e.bufQueue[e.bufsProcessed].audioBuf) {
                        for (e.bufsProcessed = 0; r > e.bufQueue[e.bufsProcessed].audioBuf.duration;) r -= e.bufQueue[e.bufsProcessed].audiobuf.duration, e.bufsProcessed++;
                        e.bufOffset = r
                    }
                    t && Re.setSourceState(e, 4114)
                },
                getGlobalParam: function(e, r) {
                    if (!Re.currentCtx) return null;
                    switch (r) {
                        case 49152:
                            return Re.currentCtx.dopplerFactor;
                        case 49155:
                            return Re.currentCtx.speedOfSound;
                        case 53248:
                            return Re.currentCtx.distanceModel;
                        default:
                            return Re.currentCtx.err = 40962, null
                    }
                },
                setGlobalParam: function(e, r, t) {
                    if (Re.currentCtx) switch (r) {
                        case 49152:
                            if (!Number.isFinite(t) || t < 0) return void(Re.currentCtx.err = 40963);
                            Re.currentCtx.dopplerFactor = t, Re.updateListenerSpace(Re.currentCtx);
                            break;
                        case 49155:
                            if (!Number.isFinite(t) || t <= 0) return void(Re.currentCtx.err = 40963);
                            Re.currentCtx.speedOfSound = t, Re.updateListenerSpace(Re.currentCtx);
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
                                    Re.currentCtx.distanceModel = t, Re.updateContextGlobal(Re.currentCtx);
                                    break;
                                default:
                                    return void(Re.currentCtx.err = 40963)
                            }
                            break;
                        default:
                            return void(Re.currentCtx.err = 40962)
                    }
                },
                getListenerParam: function(e, r) {
                    if (!Re.currentCtx) return null;
                    switch (r) {
                        case 4100:
                            return Re.currentCtx.listener.position;
                        case 4102:
                            return Re.currentCtx.listener.velocity;
                        case 4111:
                            return Re.currentCtx.listener.direction.concat(Re.currentCtx.listener.up);
                        case 4106:
                            return Re.currentCtx.gain.gain.value;
                        default:
                            return Re.currentCtx.err = 40962, null
                    }
                },
                setListenerParam: function(e, r, t) {
                    if (Re.currentCtx)
                        if (null !== t) {
                            var n = Re.currentCtx.listener;
                            switch (r) {
                                case 4100:
                                    if (!Number.isFinite(t[0]) || !Number.isFinite(t[1]) || !Number.isFinite(t[2])) return void(Re.currentCtx.err = 40963);
                                    n.position[0] = t[0], n.position[1] = t[1], n.position[2] = t[2], Re.updateListenerSpace(Re.currentCtx);
                                    break;
                                case 4102:
                                    if (!Number.isFinite(t[0]) || !Number.isFinite(t[1]) || !Number.isFinite(t[2])) return void(Re.currentCtx.err = 40963);
                                    n.velocity[0] = t[0], n.velocity[1] = t[1], n.velocity[2] = t[2], Re.updateListenerSpace(Re.currentCtx);
                                    break;
                                case 4106:
                                    if (!Number.isFinite(t) || t < 0) return void(Re.currentCtx.err = 40963);
                                    Re.currentCtx.gain.gain.value = t;
                                    break;
                                case 4111:
                                    if (!(Number.isFinite(t[0]) && Number.isFinite(t[1]) && Number.isFinite(t[2]) && Number.isFinite(t[3]) && Number.isFinite(t[4]) && Number.isFinite(t[5]))) return void(Re.currentCtx.err = 40963);
                                    n.direction[0] = t[0], n.direction[1] = t[1], n.direction[2] = t[2], n.up[0] = t[3], n.up[1] = t[4], n.up[2] = t[5], Re.updateListenerSpace(Re.currentCtx);
                                    break;
                                default:
                                    return void(Re.currentCtx.err = 40962)
                            }
                        } else Re.currentCtx.err = 40962
                },
                getBufferParam: function(e, r, t) {
                    if (Re.currentCtx) {
                        var n = Re.buffers[r];
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
                                return Re.currentCtx.err = 40962, null
                        } else Re.currentCtx.err = 40961
                    }
                },
                setBufferParam: function(e, r, t, n) {
                    if (Re.currentCtx) {
                        var o = Re.buffers[r];
                        if (o && 0 !== r)
                            if (null !== n) switch (t) {
                                case 8196:
                                    if (0 !== n) return void(Re.currentCtx.err = 40963);
                                    break;
                                case 8213:
                                    if (n[0] < 0 || n[0] > o.length || n[1] < 0 || n[1] > o.Length || n[0] >= n[1]) return void(Re.currentCtx.err = 40963);
                                    if (o.refCount > 0) return void(Re.currentCtx.err = 40964);
                                    o.audioBuf && (o.audioBuf._loopStart = n[0] / o.frequency, o.audioBuf._loopEnd = n[1] / o.frequency);
                                    break;
                                default:
                                    return void(Re.currentCtx.err = 40962)
                            } else Re.currentCtx.err = 40962;
                            else Re.currentCtx.err = 40961
                    }
                },
                getSourceParam: function(e, r, t) {
                    if (!Re.currentCtx) return null;
                    var n = Re.currentCtx.sources[r];
                    if (!n) return Re.currentCtx.err = 40961, null;
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
                            return Re.sourceTell(n);
                        case 4133:
                            return (o = Re.sourceTell(n)) > 0 && (o *= n.bufQueue[0].frequency), o;
                        case 4134:
                            var o;
                            return (o = Re.sourceTell(n)) > 0 && (o *= n.bufQueue[0].frequency * n.bufQueue[0].bytesPerSample), o;
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
                            return Re.sourceDuration(n);
                        case 53248:
                            return n.distanceModel;
                        default:
                            return Re.currentCtx.err = 40962, null
                    }
                },
                setSourceParam: function(e, r, t, n) {
                    if (Re.currentCtx) {
                        var o = Re.currentCtx.sources[r];
                        if (o)
                            if (null !== n) switch (t) {
                                case 514:
                                    if (1 === n) o.relative = !0, Re.updateSourceSpace(o);
                                    else {
                                        if (0 !== n) return void(Re.currentCtx.err = 40963);
                                        o.relative = !1, Re.updateSourceSpace(o)
                                    }
                                    break;
                                case 4097:
                                    if (!Number.isFinite(n)) return void(Re.currentCtx.err = 40963);
                                    o.coneInnerAngle = n, o.panner && (o.panner.coneInnerAngle = n % 360);
                                    break;
                                case 4098:
                                    if (!Number.isFinite(n)) return void(Re.currentCtx.err = 40963);
                                    o.coneOuterAngle = n, o.panner && (o.panner.coneOuterAngle = n % 360);
                                    break;
                                case 4099:
                                    if (!Number.isFinite(n) || n <= 0) return void(Re.currentCtx.err = 40963);
                                    if (o.pitch === n) break;
                                    o.pitch = n, Re.updateSourceRate(o);
                                    break;
                                case 4100:
                                    if (!Number.isFinite(n[0]) || !Number.isFinite(n[1]) || !Number.isFinite(n[2])) return void(Re.currentCtx.err = 40963);
                                    o.position[0] = n[0], o.position[1] = n[1], o.position[2] = n[2], Re.updateSourceSpace(o);
                                    break;
                                case 4101:
                                    if (!Number.isFinite(n[0]) || !Number.isFinite(n[1]) || !Number.isFinite(n[2])) return void(Re.currentCtx.err = 40963);
                                    o.direction[0] = n[0], o.direction[1] = n[1], o.direction[2] = n[2], Re.updateSourceSpace(o);
                                    break;
                                case 4102:
                                    if (!Number.isFinite(n[0]) || !Number.isFinite(n[1]) || !Number.isFinite(n[2])) return void(Re.currentCtx.err = 40963);
                                    o.velocity[0] = n[0], o.velocity[1] = n[1], o.velocity[2] = n[2], Re.updateSourceSpace(o);
                                    break;
                                case 4103:
                                    if (1 === n) {
                                        if (o.looping = !0, Re.updateSourceTime(o), 4136 === o.type && o.audioQueue.length > 0)(a = o.audioQueue[0]).loop = !0, a._duration = Number.POSITIVE_INFINITY
                                    } else {
                                        if (0 !== n) return void(Re.currentCtx.err = 40963);
                                        o.looping = !1;
                                        var a, i = Re.updateSourceTime(o);
                                        4136 === o.type && o.audioQueue.length > 0 && ((a = o.audioQueue[0]).loop = !1, a._duration = o.bufQueue[0].audioBuf.duration / o.playbackRate, a._startTime = i - o.bufOffset / o.playbackRate)
                                    }
                                    break;
                                case 4105:
                                    if (4114 === o.state || 4115 === o.state) return void(Re.currentCtx.err = 40964);
                                    if (0 === n) {
                                        for (var u = 0; u < o.bufQueue.length; u++) o.bufQueue[u].refCount--;
                                        o.bufQueue.length = 1, o.bufQueue[0] = Re.buffers[0], o.bufsProcessed = 0, o.type = 4144
                                    } else {
                                        if (!(d = Re.buffers[n])) return void(Re.currentCtx.err = 40963);
                                        for (u = 0; u < o.bufQueue.length; u++) o.bufQueue[u].refCount--;
                                        o.bufQueue.length = 0, d.refCount++, o.bufQueue = [d], o.bufsProcessed = 0, o.type = 4136
                                    }
                                    Re.initSourcePanner(o), Re.scheduleSourceAudio(o);
                                    break;
                                case 4106:
                                    if (!Number.isFinite(n) || n < 0) return void(Re.currentCtx.err = 40963);
                                    o.gain.gain.value = n;
                                    break;
                                case 4109:
                                    if (!Number.isFinite(n) || n < 0 || n > Math.min(o.maxGain, 1)) return void(Re.currentCtx.err = 40963);
                                    o.minGain = n;
                                    break;
                                case 4110:
                                    if (!Number.isFinite(n) || n < Math.max(0, o.minGain) || n > 1) return void(Re.currentCtx.err = 40963);
                                    o.maxGain = n;
                                    break;
                                case 4128:
                                    if (!Number.isFinite(n) || n < 0) return void(Re.currentCtx.err = 40963);
                                    o.refDistance = n, o.panner && (o.panner.refDistance = n);
                                    break;
                                case 4129:
                                    if (!Number.isFinite(n) || n < 0) return void(Re.currentCtx.err = 40963);
                                    o.rolloffFactor = n, o.panner && (o.panner.rolloffFactor = n);
                                    break;
                                case 4130:
                                    if (!Number.isFinite(n) || n < 0 || n > 1) return void(Re.currentCtx.err = 40963);
                                    o.coneOuterGain = n, o.panner && (o.panner.coneOuterGain = n);
                                    break;
                                case 4131:
                                    if (!Number.isFinite(n) || n < 0) return void(Re.currentCtx.err = 40963);
                                    o.maxDistance = n, o.panner && (o.panner.maxDistance = n);
                                    break;
                                case 4132:
                                    if (n < 0 || n > Re.sourceDuration(o)) return void(Re.currentCtx.err = 40963);
                                    Re.sourceSeek(o, n);
                                    break;
                                case 4133:
                                    if ((f = Re.sourceDuration(o)) > 0) {
                                        var s;
                                        for (var c in o.bufQueue)
                                            if (c) {
                                                s = o.bufQueue[c].frequency;
                                                break
                                            } n /= s
                                    }
                                    if (n < 0 || n > f) return void(Re.currentCtx.err = 40963);
                                    Re.sourceSeek(o, n);
                                    break;
                                case 4134:
                                    var f;
                                    if ((f = Re.sourceDuration(o)) > 0) {
                                        var l;
                                        for (var c in o.bufQueue)
                                            if (c) {
                                                var d;
                                                l = (d = o.bufQueue[c]).frequency * d.bytesPerSample * d.channels;
                                                break
                                            } n /= l
                                    }
                                    if (n < 0 || n > f) return void(Re.currentCtx.err = 40963);
                                    Re.sourceSeek(o, n);
                                    break;
                                case 4628:
                                    if (0 !== n && 1 !== n && 2 !== n) return void(Re.currentCtx.err = 40963);
                                    o.spatialize = n, Re.initSourcePanner(o);
                                    break;
                                case 8201:
                                case 8202:
                                case 8203:
                                    Re.currentCtx.err = 40964;
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
                                            o.distanceModel = n, Re.currentCtx.sourceDistanceModel && Re.updateContextGlobal(Re.currentCtx);
                                            break;
                                        default:
                                            return void(Re.currentCtx.err = 40963)
                                    }
                                    break;
                                default:
                                    return void(Re.currentCtx.err = 40962)
                            } else Re.currentCtx.err = 40962;
                            else Re.currentCtx.err = 40961
                    }
                },
                captures: {},
                sharedCaptureAudioCtx: null,
                requireValidCaptureDevice: function(e, r) {
                    if (0 === e) return Re.alcErr = 40961, null;
                    var t = Re.captures[e];
                    return t ? t.mediaStreamError ? (Re.alcErr = 40961, null) : t : (Re.alcErr = 40961, null)
                }
            };

        function Me(e, r, t) {
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
                    Re.setSourceParam("alSourcei", e, r, t);
                    break;
                default:
                    Re.setSourceParam("alSourcei", e, r, null)
            }
        }
        var Ne = {
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
                Ne.errorCode = e
            },
            chooseConfig: function(e, r, t, n, o) {
                if (62e3 != e) return Ne.setErrorCode(12296), 0;
                if (r)
                    for (;;) {
                        var a = P[r >> 2];
                        if (12321 == a) {
                            var i = P[r + 4 >> 2];
                            Ne.contextAttributes.alpha = i > 0
                        } else if (12325 == a) {
                            var u = P[r + 4 >> 2];
                            Ne.contextAttributes.depth = u > 0
                        } else if (12326 == a) {
                            var s = P[r + 4 >> 2];
                            Ne.contextAttributes.stencil = s > 0
                        } else if (12337 == a) {
                            var c = P[r + 4 >> 2];
                            Ne.contextAttributes.antialias = c > 0
                        } else if (12338 == a) {
                            c = P[r + 4 >> 2];
                            Ne.contextAttributes.antialias = 1 == c
                        } else if (12544 == a) {
                            var f = P[r + 4 >> 2];
                            Ne.contextAttributes.lowLatency = 12547 != f
                        } else if (12344 == a) break;
                        r += 8
                    }
                return t && n || o ? (o && (P[o >> 2] = 1), t && n > 0 && (P[t >> 2] = 62002), Ne.setErrorCode(12288), 1) : (Ne.setErrorCode(12300), 0)
            }
        };
        var Oe = {
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
                Oe.lastError || (Oe.lastError = e)
            },
            getNewId: function(e) {
                for (var r = Oe.counter++, t = e.length; t < r; t++) e[t] = null;
                return r
            },
            MAX_TEMP_BUFFER_SIZE: 2097152,
            numTempVertexBuffersPerSize: 64,
            log2ceilLookup: function(e) {
                return 32 - Math.clz32(0 === e ? 0 : e - 1)
            },
            generateTempBuffers: function(e, r) {
                var t = Oe.log2ceilLookup(Oe.MAX_TEMP_BUFFER_SIZE);
                r.tempVertexBufferCounters1 = [], r.tempVertexBufferCounters2 = [], r.tempVertexBufferCounters1.length = r.tempVertexBufferCounters2.length = t + 1, r.tempVertexBuffers1 = [], r.tempVertexBuffers2 = [], r.tempVertexBuffers1.length = r.tempVertexBuffers2.length = t + 1, r.tempIndexBuffers = [], r.tempIndexBuffers.length = t + 1;
                for (var n = 0; n <= t; ++n) {
                    r.tempIndexBuffers[n] = null, r.tempVertexBufferCounters1[n] = r.tempVertexBufferCounters2[n] = 0;
                    var o = Oe.numTempVertexBuffersPerSize;
                    r.tempVertexBuffers1[n] = [], r.tempVertexBuffers2[n] = [];
                    var a = r.tempVertexBuffers1[n],
                        i = r.tempVertexBuffers2[n];
                    a.length = i.length = o;
                    for (var u = 0; u < o; ++u) a[u] = i[u] = null
                }
                if (e) {
                    r.tempQuadIndexBuffer = qr.createBuffer(), r.GLctx.bindBuffer(34963, r.tempQuadIndexBuffer);
                    for (var s = Oe.MAX_TEMP_BUFFER_SIZE >> 1, c = new Uint16Array(s), f = (n = 0, 0); !(c[n++] = f, n >= s || (c[n++] = f + 1, n >= s) || (c[n++] = f + 2, n >= s) || (c[n++] = f, n >= s) || (c[n++] = f + 2, n >= s) || (c[n++] = f + 3, n >= s));) f += 4;
                    r.GLctx.bufferData(34963, c, 35044), r.GLctx.bindBuffer(34963, null)
                }
            },
            getTempVertexBuffer: function(e) {
                var r = Oe.log2ceilLookup(e),
                    t = Oe.currentContext.tempVertexBuffers1[r],
                    n = Oe.currentContext.tempVertexBufferCounters1[r];
                Oe.currentContext.tempVertexBufferCounters1[r] = Oe.currentContext.tempVertexBufferCounters1[r] + 1 & Oe.numTempVertexBuffersPerSize - 1;
                var o = t[n];
                if (o) return o;
                var a = qr.getParameter(34964);
                return t[n] = qr.createBuffer(), qr.bindBuffer(34962, t[n]), qr.bufferData(34962, 1 << r, 35048), qr.bindBuffer(34962, a), t[n]
            },
            getTempIndexBuffer: function(e) {
                var r = Oe.log2ceilLookup(e),
                    t = Oe.currentContext.tempIndexBuffers[r];
                if (t) return t;
                var n = qr.getParameter(34965);
                return Oe.currentContext.tempIndexBuffers[r] = qr.createBuffer(), qr.bindBuffer(34963, Oe.currentContext.tempIndexBuffers[r]), qr.bufferData(34963, 1 << r, 35048), qr.bindBuffer(34963, n), Oe.currentContext.tempIndexBuffers[r]
            },
            newRenderingFrameStarted: function() {
                if (Oe.currentContext) {
                    var e = Oe.currentContext.tempVertexBuffers1;
                    Oe.currentContext.tempVertexBuffers1 = Oe.currentContext.tempVertexBuffers2, Oe.currentContext.tempVertexBuffers2 = e, e = Oe.currentContext.tempVertexBufferCounters1, Oe.currentContext.tempVertexBufferCounters1 = Oe.currentContext.tempVertexBufferCounters2, Oe.currentContext.tempVertexBufferCounters2 = e;
                    for (var r = Oe.log2ceilLookup(Oe.MAX_TEMP_BUFFER_SIZE), t = 0; t <= r; ++t) Oe.currentContext.tempVertexBufferCounters1[t] = 0
                }
            },
            getSource: function(e, r, t, n) {
                for (var o = "", a = 0; a < r; ++a) {
                    var i = n ? P[n + 4 * a >> 2] : -1;
                    o += N(P[t + 4 * a >> 2], i < 0 ? void 0 : i)
                }
                return o
            },
            calcBufLength: function(e, r, t, n) {
                return t > 0 ? n * t : e * Oe.byteSizeByType[r - Oe.byteSizeByTypeRoot] * n
            },
            usedTempBuffers: [],
            preDrawHandleClientVertexAttribBindings: function(e) {
                Oe.resetBufferBinding = !1;
                for (var r = 0; r < Oe.currentContext.maxVertexAttribs; ++r) {
                    var t = Oe.currentContext.clientBuffers[r];
                    if (t.clientside && t.enabled) {
                        Oe.resetBufferBinding = !0;
                        var n = Oe.calcBufLength(t.size, t.type, t.stride, e),
                            o = Oe.getTempVertexBuffer(n);
                        qr.bindBuffer(34962, o), qr.bufferSubData(34962, 0, B.subarray(t.ptr, t.ptr + n)), t.vertexAttribPointerAdaptor.call(qr, r, t.size, t.type, t.normalized, t.stride, 0)
                    }
                }
            },
            postDrawHandleClientVertexAttribBindings: function() {
                Oe.resetBufferBinding && qr.bindBuffer(34962, Oe.buffers[qr.currentArrayBufferBinding])
            },
            createContext: function(e, r) {
                if (!e.getContextSafariWebGL2Fixed) {
                    e.getContextSafariWebGL2Fixed = e.getContext, e.getContext = function(r, t) {
                        var n = e.getContextSafariWebGL2Fixed(r, t);
                        return "webgl" == r == n instanceof WebGLRenderingContext ? n : null
                    }
                }
                var t = r.majorVersion > 1 ? e.getContext("webgl2", r) : e.getContext("webgl", r);
                return t ? Oe.registerContext(t, r) : 0
            },
            registerContext: function(e, r) {
                var t = Oe.getNewId(Oe.contexts),
                    n = {
                        handle: t,
                        attributes: r,
                        version: r.majorVersion,
                        GLctx: e
                    };
                e.canvas && (e.canvas.GLctxObject = n), Oe.contexts[t] = n, (void 0 === r.enableExtensionsByDefault || r.enableExtensionsByDefault) && Oe.initExtensions(n), n.maxVertexAttribs = n.GLctx.getParameter(34921), n.clientBuffers = [];
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
                return Oe.generateTempBuffers(!1, n), t
            },
            makeContextCurrent: function(e) {
                return Oe.currentContext = Oe.contexts[e], r.ctx = qr = Oe.currentContext && Oe.currentContext.GLctx, !(e && !qr)
            },
            getContext: function(e) {
                return Oe.contexts[e]
            },
            deleteContext: function(e) {
                Oe.currentContext === Oe.contexts[e] && (Oe.currentContext = null), "object" == typeof ze && ze.removeAllHandlersOnTarget(Oe.contexts[e].GLctx.canvas), Oe.contexts[e] && Oe.contexts[e].GLctx.canvas && (Oe.contexts[e].GLctx.canvas.GLctxObject = void 0), Oe.contexts[e] = null
            },
            initExtensions: function(e) {
                if (e || (e = Oe.currentContext), !e.initExtensionsDone) {
                    e.initExtensionsDone = !0;
                    var r, t = e.GLctx;
                    ! function(e) {
                        var r = e.getExtension("ANGLE_instanced_arrays");
                        if (r) e.vertexAttribDivisor = function(e, t) {
                            r.vertexAttribDivisorANGLE(e, t)
                        }, e.drawArraysInstanced = function(e, t, n, o) {
                            r.drawArraysInstancedANGLE(e, t, n, o)
                        }, e.drawElementsInstanced = function(e, t, n, o, a) {
                            r.drawElementsInstancedANGLE(e, t, n, o, a)
                        }
                    }(t),
                    function(e) {
                        var r = e.getExtension("OES_vertex_array_object");
                        if (r) e.createVertexArray = function() {
                            return r.createVertexArrayOES()
                        }, e.deleteVertexArray = function(e) {
                            r.deleteVertexArrayOES(e)
                        }, e.bindVertexArray = function(e) {
                            r.bindVertexArrayOES(e)
                        }, e.isVertexArray = function(e) {
                            return r.isVertexArrayOES(e)
                        }
                    }(t),
                    function(e) {
                        var r = e.getExtension("WEBGL_draw_buffers");
                        if (r) e.drawBuffers = function(e, t) {
                            r.drawBuffersWEBGL(e, t)
                        }
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
        };
        var Ue = [];
        var ze = {
                inEventHandler: 0,
                removeAllEventListeners: function() {
                    for (var e = ze.eventHandlers.length - 1; e >= 0; --e) ze._removeHandler(e);
                    ze.eventHandlers = [], ze.deferredCalls = []
                },
                registerRemoveEventListeners: function() {
                    ze.removeEventListenersRegistered || (W.push(ze.removeAllEventListeners), ze.removeEventListenersRegistered = !0)
                },
                deferredCalls: [],
                deferCall: function(e, r, t) {
                    function n(e, r) {
                        if (e.length != r.length) return !1;
                        for (var t in e)
                            if (e[t] != r[t]) return !1;
                        return !0
                    }
                    for (var o in ze.deferredCalls) {
                        var a = ze.deferredCalls[o];
                        if (a.targetFunction == e && n(a.argsList, t)) return
                    }
                    ze.deferredCalls.push({
                        targetFunction: e,
                        precedence: r,
                        argsList: t
                    }), ze.deferredCalls.sort((function(e, r) {
                        return e.precedence < r.precedence
                    }))
                },
                removeDeferredCalls: function(e) {
                    for (var r = 0; r < ze.deferredCalls.length; ++r) ze.deferredCalls[r].targetFunction == e && (ze.deferredCalls.splice(r, 1), --r)
                },
                canPerformEventHandlerRequests: function() {
                    return ze.inEventHandler && ze.currentEventHandler.allowsDeferredCalls
                },
                runDeferredCalls: function() {
                    if (ze.canPerformEventHandlerRequests())
                        for (var e = 0; e < ze.deferredCalls.length; ++e) {
                            var r = ze.deferredCalls[e];
                            ze.deferredCalls.splice(e, 1), --e, r.targetFunction.apply(null, r.argsList)
                        }
                },
                eventHandlers: [],
                removeAllHandlersOnTarget: function(e, r) {
                    for (var t = 0; t < ze.eventHandlers.length; ++t) ze.eventHandlers[t].target != e || r && r != ze.eventHandlers[t].eventTypeString || ze._removeHandler(t--)
                },
                _removeHandler: function(e) {
                    var r = ze.eventHandlers[e];
                    r.target.removeEventListener(r.eventTypeString, r.eventListenerFunc, r.useCapture), ze.eventHandlers.splice(e, 1)
                },
                registerOrRemoveHandler: function(e) {
                    var r = function(r) {
                        ++ze.inEventHandler, ze.currentEventHandler = e, ze.runDeferredCalls(), e.handlerFunc(r), ze.runDeferredCalls(), --ze.inEventHandler
                    };
                    if (e.callbackfunc) e.eventListenerFunc = r, e.target.addEventListener(e.eventTypeString, r, e.useCapture), ze.eventHandlers.push(e), ze.registerRemoveEventListeners();
                    else
                        for (var t = 0; t < ze.eventHandlers.length; ++t) ze.eventHandlers[t].target == e.target && ze.eventHandlers[t].eventTypeString == e.eventTypeString && ze._removeHandler(t--)
                },
                getNodeNameForTarget: function(e) {
                    return e ? e == window ? "#window" : e == screen ? "#screen" : e && e.nodeName ? e.nodeName : "" : ""
                },
                fullscreenEnabled: function() {
                    return document.fullscreenEnabled || document.webkitFullscreenEnabled
                }
            },
            je = {};
        var qe = [0, document, window];

        function Ge(e) {
            var r;
            return e = (r = e) > 2 ? N(r) : r, qe[e] || document.querySelector(e)
        }

        function Qe(e) {
            return Ge(e)
        }

        function He(e, r, t) {
            var n = Qe(e);
            if (!n) return -4;
            P[r >> 2] = n.width, P[t >> 2] = n.height
        }

        function Ve(e) {
            return me((function() {
                var r = it(8),
                    t = r + 4,
                    n = it(e.id.length + 1);
                U(e.id, n, e.id.length + 1);
                He(n, r, t);
                return [P[r >> 2], P[t >> 2]]
            }))
        }

        function Xe(e, r, t) {
            var n = Qe(e);
            return n ? (n.width = r, n.height = t, 0) : -4
        }

        function We(e, r, t) {
            e.controlTransferredOffscreen ? me((function() {
                var n = it(e.id.length + 1);
                U(e.id, n, e.id.length + 1), Xe(n, r, t)
            })) : (e.width = r, e.height = t)
        }

        function Ye(e, r, t) {
            e.style.paddingLeft = e.style.paddingRight = t + "px", e.style.paddingTop = e.style.paddingBottom = r + "px"
        }

        function Ke(e) {
            return qe.indexOf(e) < 0 ? e.getBoundingClientRect() : {
                left: 0,
                top: 0
            }
        }

        function $e(e, r) {
            var t = function(e) {
                    var r = Ve(e),
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
                        document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement || (document.removeEventListener("fullscreenchange", w), document.removeEventListener("webkitfullscreenchange", w), We(e, t, n), e.style.width = o, e.style.height = a, e.style.backgroundColor = i, u || (document.body.style.backgroundColor = "white"), document.body.style.backgroundColor = u, e.style.paddingLeft = s, e.style.paddingRight = c, e.style.paddingTop = f, e.style.paddingBottom = l, e.style.marginLeft = d, e.style.marginRight = m, e.style.marginTop = p, e.style.marginBottom = v, document.body.style.margin = g, document.documentElement.style.overflow = h, document.body.scroll = b, e.style.imageRendering = y, e.GLctxObject && e.GLctxObject.GLctx.viewport(0, 0, t, n), je.canvasResizedCallback && ve(je.canvasResizedCallback)(37, 0, je.canvasResizedCallbackUserData))
                    }
                    return document.addEventListener("fullscreenchange", w), document.addEventListener("webkitfullscreenchange", w), w
                }(e),
                n = r.softFullscreen ? innerWidth : screen.width,
                o = r.softFullscreen ? innerHeight : screen.height,
                a = Ke(e),
                i = a.width,
                u = a.height,
                s = Ve(e),
                c = s[0],
                f = s[1];
            if (3 == r.scaleMode) Ye(e, (o - u) / 2, (n - i) / 2), n = i, o = u;
            else if (2 == r.scaleMode)
                if (n * f < c * o) {
                    var l = f * n / c;
                    Ye(e, (o - l) / 2, 0), o = l
                } else {
                    var d = c * o / f;
                    Ye(e, 0, (n - d) / 2), n = d
                } e.style.backgroundColor || (e.style.backgroundColor = "black"), document.body.style.backgroundColor || (document.body.style.backgroundColor = "black"), e.style.width = n + "px", e.style.height = o + "px", 1 == r.filteringMode && (e.style.imageRendering = "optimizeSpeed", e.style.imageRendering = "-moz-crisp-edges", e.style.imageRendering = "-o-crisp-edges", e.style.imageRendering = "-webkit-optimize-contrast", e.style.imageRendering = "optimize-contrast", e.style.imageRendering = "crisp-edges", e.style.imageRendering = "pixelated");
            var m = 2 == r.canvasResolutionScaleMode ? devicePixelRatio : 1;
            if (0 != r.canvasResolutionScaleMode) {
                var p = n * m | 0,
                    v = o * m | 0;
                We(e, p, v), e.GLctxObject && e.GLctxObject.GLctx.viewport(0, 0, p, v)
            }
            return t
        }

        function Ze(e, r) {
            if (0 == r.scaleMode && 0 == r.canvasResolutionScaleMode || $e(e, r), e.requestFullscreen) e.requestFullscreen();
            else {
                if (!e.webkitRequestFullscreen) return ze.fullscreenEnabled() ? -3 : -1;
                e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
            }
            return je = r, r.canvasResizedCallback && ve(r.canvasResizedCallback)(37, 0, r.canvasResizedCallbackUserData), 0
        }

        function Je(e) {
            if (e.requestPointerLock) e.requestPointerLock();
            else {
                if (!e.msRequestPointerLock) return document.body.requestPointerLock || document.body.msRequestPointerLock ? -3 : -1;
                e.msRequestPointerLock()
            }
            return 0
        }

        function er(e) {
            var r = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement,
                t = !!r;
            P[e >> 2] = t, P[e + 4 >> 2] = ze.fullscreenEnabled();
            var n = t ? r : ze.previousFullscreenElement,
                o = ze.getNodeNameForTarget(n),
                a = n && n.id ? n.id : "";
            U(o, e + 8, 128), U(a, e + 136, 128), P[e + 264 >> 2] = n ? n.clientWidth : 0, P[e + 268 >> 2] = n ? n.clientHeight : 0, P[e + 272 >> 2] = screen.width, P[e + 276 >> 2] = screen.height, t && (ze.previousFullscreenElement = r)
        }

        function rr(e, r) {
            I[e >> 3] = r.timestamp;
            for (var t = 0; t < r.axes.length; ++t) I[e + 8 * t + 16 >> 3] = r.axes[t];
            for (t = 0; t < r.buttons.length; ++t) "object" == typeof r.buttons[t] ? I[e + 8 * t + 528 >> 3] = r.buttons[t].value : I[e + 8 * t + 528 >> 3] = r.buttons[t];
            for (t = 0; t < r.buttons.length; ++t) "object" == typeof r.buttons[t] ? P[e + 4 * t + 1040 >> 2] = r.buttons[t].pressed : P[e + 4 * t + 1040 >> 2] = 1 == r.buttons[t];
            P[e + 1296 >> 2] = r.connected, P[e + 1300 >> 2] = r.index, P[e + 8 >> 2] = r.axes.length, P[e + 12 >> 2] = r.buttons.length, U(r.id, e + 1304, 64), U(r.mapping, e + 1368, 64)
        }

        function tr() {
            return 2147483648
        }

        function nr(e, r) {
            return (e >>> 0) + 4294967296 * r
        }
        var or = [];

        function ar(e, r, t, n) {
            var o;
            if (!qr.currentElementArrayBufferBinding) {
                var a = Oe.calcBufLength(1, t, 0, r);
                o = Oe.getTempIndexBuffer(a), qr.bindBuffer(34963, o), qr.bufferSubData(34963, 0, B.subarray(n, n + a)), n = 0
            }
            Oe.preDrawHandleClientVertexAttribBindings(r), qr.drawElements(e, r, t, n), Oe.postDrawHandleClientVertexAttribBindings(r), qr.currentElementArrayBufferBinding || qr.bindBuffer(34963, null)
        }

        function ir(e, r, t, n) {
            for (var o = 0; o < e; o++) {
                var a = qr[t](),
                    i = a && Oe.getNewId(n);
                a ? (a.name = i, n[i] = a) : Oe.recordError(1282), P[r + 4 * o >> 2] = i
            }
        }

        function ur(e, r, t, n, o, a, i, u) {
            r = Oe.programs[r];
            var s = qr[e](r, t);
            if (s) {
                var c = u && U(s.name, u, n);
                o && (P[o >> 2] = c), a && (P[a >> 2] = s.size), i && (P[i >> 2] = s.type)
            }
        }

        function sr(e, r) {
            F[e >> 2] = r, F[e + 4 >> 2] = (r - F[e >> 2]) / 4294967296
        }

        function cr(e, r, t) {
            if (r) {
                var n = void 0;
                switch (e) {
                    case 36346:
                        n = 1;
                        break;
                    case 36344:
                        return void(0 != t && 1 != t && Oe.recordError(1280));
                    case 34814:
                    case 36345:
                        n = 0;
                        break;
                    case 34466:
                        var o = qr.getParameter(34467);
                        n = o ? o.length : 0;
                        break;
                    case 33309:
                        if (Oe.currentContext.version < 2) return void Oe.recordError(1282);
                        n = 2 * (qr.getSupportedExtensions() || []).length;
                        break;
                    case 33307:
                    case 33308:
                        if (Oe.currentContext.version < 2) return void Oe.recordError(1280);
                        n = 33307 == e ? 3 : 0
                }
                if (void 0 === n) {
                    var a = qr.getParameter(e);
                    switch (typeof a) {
                        case "number":
                            n = a;
                            break;
                        case "boolean":
                            n = a ? 1 : 0;
                            break;
                        case "string":
                            return void Oe.recordError(1280);
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
                                    return void Oe.recordError(1280)
                            } else {
                                if (a instanceof Float32Array || a instanceof Uint32Array || a instanceof Int32Array || a instanceof Array) {
                                    for (var i = 0; i < a.length; ++i) switch (t) {
                                        case 0:
                                            P[r + 4 * i >> 2] = a[i];
                                            break;
                                        case 2:
                                            T[r + 4 * i >> 2] = a[i];
                                            break;
                                        case 4:
                                            L[r + i >> 0] = a[i] ? 1 : 0
                                    }
                                    return
                                }
                                try {
                                    n = 0 | a.name
                                } catch (r) {
                                    return Oe.recordError(1280), void p("GL_INVALID_ENUM in glGet" + t + "v: Unknown object returned from WebGL getParameter(" + e + ")! (error: " + r + ")")
                                }
                            }
                            break;
                        default:
                            return Oe.recordError(1280), void p("GL_INVALID_ENUM in glGet" + t + "v: Native code calling glGet" + t + "v(" + e + ") and it returns " + a + " of type " + typeof a + "!")
                    }
                }
                switch (t) {
                    case 1:
                        sr(r, n);
                        break;
                    case 0:
                        P[r >> 2] = n;
                        break;
                    case 2:
                        T[r >> 2] = n;
                        break;
                    case 4:
                        L[r >> 0] = n ? 1 : 0
                }
            } else Oe.recordError(1281)
        }

        function fr(e, r, t, n) {
            if (t) {
                var o, a = qr.getIndexedParameter(e, r);
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
                                return void Oe.recordError(1280)
                        } else {
                            if (!(a instanceof WebGLBuffer)) return void Oe.recordError(1280);
                            o = 0 | a.name
                        }
                        break;
                    default:
                        return void Oe.recordError(1280)
                }
                switch (n) {
                    case 1:
                        sr(t, o);
                        break;
                    case 0:
                        P[t >> 2] = o;
                        break;
                    case 2:
                        T[t >> 2] = o;
                        break;
                    case 4:
                        L[t >> 0] = o ? 1 : 0;
                        break;
                    default:
                        throw "internal emscriptenWebGLGetIndexed() error, bad type: " + n
                }
            } else Oe.recordError(1281)
        }

        function lr(e) {
            var r = z(e) + 1,
                t = et(r);
            return U(e, t, r), t
        }

        function dr(e) {
            return parseInt(e)
        }

        function mr(e) {
            return "]" == e.slice(-1) && e.lastIndexOf("[")
        }

        function pr(e) {
            var r, t, n = e.uniformLocsById,
                o = e.uniformSizeAndIdsByName;
            if (!n)
                for (e.uniformLocsById = n = {}, e.uniformArrayNamesById = {}, r = 0; r < qr.getProgramParameter(e, 35718); ++r) {
                    var a = qr.getActiveUniform(e, r),
                        i = a.name,
                        u = a.size,
                        s = mr(i),
                        c = s > 0 ? i.slice(0, s) : i,
                        f = e.uniformIdCounter;
                    for (e.uniformIdCounter += u, o[c] = [u, f], t = 0; t < u; ++t) n[f] = t, e.uniformArrayNamesById[f++] = c
                }
        }

        function vr(e) {
            var r = qr.currentProgram;
            if (r) {
                var t = r.uniformLocsById[e];
                return "number" == typeof t && (r.uniformLocsById[e] = t = qr.getUniformLocation(r, r.uniformArrayNamesById[e] + (t > 0 ? "[" + t + "]" : ""))), t
            }
            Oe.recordError(1282)
        }

        function gr(e, r, t, n) {
            if (t) {
                pr(e = Oe.programs[e]);
                var o = qr.getUniform(e, vr(r));
                if ("number" == typeof o || "boolean" == typeof o) switch (n) {
                    case 0:
                        P[t >> 2] = o;
                        break;
                    case 2:
                        T[t >> 2] = o
                } else
                    for (var a = 0; a < o.length; a++) switch (n) {
                        case 0:
                            P[t + 4 * a >> 2] = o[a];
                            break;
                        case 2:
                            T[t + 4 * a >> 2] = o[a]
                    }
            } else Oe.recordError(1281)
        }

        function hr(e, r, t, n) {
            if (t) {
                Oe.currentContext.clientBuffers[e].enabled && p("glGetVertexAttrib*v on client-side array: not supported, bad data returned");
                var o = qr.getVertexAttrib(e, r);
                if (34975 == r) P[t >> 2] = o && o.name;
                else if ("number" == typeof o || "boolean" == typeof o) switch (n) {
                    case 0:
                        P[t >> 2] = o;
                        break;
                    case 2:
                        T[t >> 2] = o;
                        break;
                    case 5:
                        P[t >> 2] = Math.fround(o)
                } else
                    for (var a = 0; a < o.length; a++) switch (n) {
                        case 0:
                            P[t + 4 * a >> 2] = o[a];
                            break;
                        case 2:
                            T[t + 4 * a >> 2] = o[a];
                            break;
                        case 5:
                            P[t + 4 * a >> 2] = Math.fround(o[a])
                    }
            } else Oe.recordError(1281)
        }

        function br(e) {
            return 0 == (e -= 5120) ? L : 1 == e ? B : 2 == e ? _ : 4 == e ? P : 6 == e ? T : 5 == e || 28922 == e || 28520 == e || 30779 == e || 30782 == e ? F : D
        }

        function yr(e) {
            return 31 - Math.clz32(e.BYTES_PER_ELEMENT)
        }

        function wr(e, r, t, n, o, a) {
            var i = br(e),
                u = yr(i),
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
                }(r) * s, Oe.unpackAlignment);
            return i.subarray(o >> u, o + c >> u)
        }
        var xr = [];
        var Er = [];

        function kr(e, r) {
            if (e <= 0) return e;
            var t = r <= 32 ? Math.abs(1 << r - 1) : Math.pow(2, r - 1);
            return e >= t && (r <= 32 || e > t) && (e = -2 * t + e), e
        }

        function Cr(e, r) {
            return e >= 0 ? e : r <= 32 ? 2 * Math.abs(1 << r - 1) + e : Math.pow(2, r) + e
        }

        function Sr(e) {
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

        function Ar(e, r) {
            24 & e && (r = r.replace(/\s+$/, ""), r += (r.length > 0 ? "\n" : "") + function(e) {
                var r = be(),
                    t = r.lastIndexOf("_emscripten_log"),
                    n = r.lastIndexOf("_emscripten_get_callstack"),
                    o = r.indexOf("\n", Math.max(t, n)) + 1;
                r = r.slice(o), 32 & e && v("EM_LOG_DEMANGLE is deprecated; ignoring"), 8 & e && "undefined" == typeof emscripten_source_map && (v('Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with "--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js" linker flag to add source map loading to code.'), e ^= 8, e |= 16);
                var a = null;
                if (128 & e)
                    for (a = Sr(arguments); a[1].includes("_emscripten_");) a = Sr(a[0]);
                var i = r.split("\n");
                r = "";
                var u = new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)"),
                    s = new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?"),
                    c = new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");
                for (var f in i) {
                    var l = i[f],
                        d = "",
                        m = "",
                        p = 0,
                        g = 0,
                        h = c.exec(l);
                    if (h && 5 == h.length) d = h[1], m = h[2], p = h[3], g = h[4];
                    else {
                        if ((h = u.exec(l)) || (h = s.exec(l)), !(h && h.length >= 4)) {
                            r += l + "\n";
                            continue
                        }
                        d = h[1], m = h[2], p = h[3], g = 0 | h[4]
                    }
                    var b = !1;
                    if (8 & e) {
                        var y = emscripten_source_map.originalPositionFor({
                            line: p,
                            column: g
                        });
                        (b = y && y.source) && (64 & e && (y.source = y.source.substring(y.source.replace(/\\/g, "/").lastIndexOf("/") + 1)), r += "    at " + d + " (" + y.source + ":" + y.line + ":" + y.column + ")\n")
                    }(16 & e || !b) && (64 & e && (m = m.substring(m.replace(/\\/g, "/").lastIndexOf("/") + 1)), r += (b ? "     = " + d : "    at " + d) + " (" + m + ":" + p + ":" + g + ")\n"), 128 & e && a[0] && (a[1] == d && a[2].length > 0 && (r = r.replace(/\s+$/, ""), r += " with values: " + a[1] + a[2] + "\n"), a = Sr(a[0]))
                }
                return r.replace(/\s+$/, "")
            }(e)), 1 & e ? 4 & e ? console.error(r) : 2 & e ? console.warn(r) : 512 & e ? console.info(r) : 256 & e ? console.debug(r) : console.log(r) : 6 & e ? p(r) : m(r)
        }

        function Lr(e) {
            try {
                return b.grow(e - A.byteLength + 65535 >>> 16), G(b.buffer), 1
            } catch (e) {}
        }

        function Br(e, r, t, n, o, a, i) {
            ze.focusEvent || (ze.focusEvent = et(256));
            var u = {
                target: Ge(e),
                eventTypeString: a,
                callbackfunc: n,
                handlerFunc: function(e) {
                    var t = e || event,
                        a = ze.getNodeNameForTarget(t.target),
                        i = t.target.id ? t.target.id : "",
                        u = ze.focusEvent;
                    U(a, u + 0, 128), U(i, u + 128, 128), ve(n)(o, u, r) && t.preventDefault()
                },
                useCapture: t
            };
            ze.registerOrRemoveHandler(u)
        }

        function _r(e, r, t, n, o, a, i) {
            ze.fullscreenChangeEvent || (ze.fullscreenChangeEvent = et(280));
            var u = {
                target: e,
                eventTypeString: a,
                callbackfunc: n,
                handlerFunc: function(e) {
                    var t = e || event,
                        a = ze.fullscreenChangeEvent;
                    er(a), ve(n)(o, a, r) && t.preventDefault()
                },
                useCapture: t
            };
            ze.registerOrRemoveHandler(u)
        }

        function Dr(e, r, t, n, o, a, i) {
            ze.gamepadEvent || (ze.gamepadEvent = et(1432));
            var u = {
                target: Ge(e),
                allowsDeferredCalls: !0,
                eventTypeString: a,
                callbackfunc: n,
                handlerFunc: function(e) {
                    var t = e || event,
                        a = ze.gamepadEvent;
                    rr(a, t.gamepad), ve(n)(o, a, r) && t.preventDefault()
                },
                useCapture: t
            };
            ze.registerOrRemoveHandler(u)
        }

        function Pr(e, r, t, n, o, a, i) {
            ze.keyEvent || (ze.keyEvent = et(176));
            var u = {
                target: Ge(e),
                allowsDeferredCalls: !0,
                eventTypeString: a,
                callbackfunc: n,
                handlerFunc: function(e) {
                    var t = ze.keyEvent;
                    I[t >> 3] = e.timeStamp;
                    var a = t >> 2;
                    P[a + 2] = e.location, P[a + 3] = e.ctrlKey, P[a + 4] = e.shiftKey, P[a + 5] = e.altKey, P[a + 6] = e.metaKey, P[a + 7] = e.repeat, P[a + 8] = e.charCode, P[a + 9] = e.keyCode, P[a + 10] = e.which, U(e.key || "", t + 44, 32), U(e.code || "", t + 76, 32), U(e.char || "", t + 108, 32), U(e.locale || "", t + 140, 32), ve(n)(o, t, r) && e.preventDefault()
                },
                useCapture: t
            };
            ze.registerOrRemoveHandler(u)
        }

        function Fr(e, r, t) {
            I[e >> 3] = r.timeStamp;
            var n = e >> 2;
            P[n + 2] = r.screenX, P[n + 3] = r.screenY, P[n + 4] = r.clientX, P[n + 5] = r.clientY, P[n + 6] = r.ctrlKey, P[n + 7] = r.shiftKey, P[n + 8] = r.altKey, P[n + 9] = r.metaKey, _[2 * n + 20] = r.button, _[2 * n + 21] = r.buttons, P[n + 11] = r.movementX, P[n + 12] = r.movementY;
            var o = Ke(t);
            P[n + 13] = r.clientX - o.left, P[n + 14] = r.clientY - o.top
        }

        function Tr(e, r, t, n, o, a, i) {
            ze.mouseEvent || (ze.mouseEvent = et(72));
            var u = {
                target: e = Ge(e),
                allowsDeferredCalls: "mousemove" != a && "mouseenter" != a && "mouseleave" != a,
                eventTypeString: a,
                callbackfunc: n,
                handlerFunc: function(t) {
                    var a = t || event;
                    Fr(ze.mouseEvent, a, e), ve(n)(o, ze.mouseEvent, r) && a.preventDefault()
                },
                useCapture: t
            };
            ze.registerOrRemoveHandler(u)
        }

        function Ir(e, r, t, n, o, a, i) {
            ze.pointerlockChangeEvent || (ze.pointerlockChangeEvent = et(260));
            var u = {
                target: e,
                eventTypeString: a,
                callbackfunc: n,
                handlerFunc: function(e) {
                    var t = e || event,
                        a = ze.pointerlockChangeEvent;
                    ! function(e) {
                        var r = document.pointerLockElement || document.mozPointerLockElement || document.webkitPointerLockElement || document.msPointerLockElement,
                            t = !!r;
                        P[e >> 2] = t;
                        var n = ze.getNodeNameForTarget(r),
                            o = r && r.id ? r.id : "";
                        U(n, e + 4, 128), U(o, e + 132, 128)
                    }(a), ve(n)(o, a, r) && t.preventDefault()
                },
                useCapture: t
            };
            ze.registerOrRemoveHandler(u)
        }

        function Rr(e, r, t, n, o, a, i) {
            ze.touchEvent || (ze.touchEvent = et(1696));
            var u = {
                target: e = Ge(e),
                allowsDeferredCalls: "touchstart" == a || "touchend" == a,
                eventTypeString: a,
                callbackfunc: n,
                handlerFunc: function(t) {
                    for (var a, i = {}, u = t.touches, s = 0; s < u.length; ++s)(a = u[s]).isChanged = a.onTarget = 0, i[a.identifier] = a;
                    for (s = 0; s < t.changedTouches.length; ++s)(a = t.changedTouches[s]).isChanged = 1, i[a.identifier] = a;
                    for (s = 0; s < t.targetTouches.length; ++s) i[t.targetTouches[s].identifier].onTarget = 1;
                    var c = ze.touchEvent;
                    I[c >> 3] = t.timeStamp;
                    var f = c >> 2;
                    P[f + 3] = t.ctrlKey, P[f + 4] = t.shiftKey, P[f + 5] = t.altKey, P[f + 6] = t.metaKey, f += 7;
                    var l = Ke(e),
                        d = 0;
                    for (var s in i)
                        if (a = i[s], P[f + 0] = a.identifier, P[f + 1] = a.screenX, P[f + 2] = a.screenY, P[f + 3] = a.clientX, P[f + 4] = a.clientY, P[f + 5] = a.pageX, P[f + 6] = a.pageY, P[f + 7] = a.isChanged, P[f + 8] = a.onTarget, P[f + 9] = a.clientX - l.left, P[f + 10] = a.clientY - l.top, f += 13, ++d > 31) break;
                    P[c + 8 >> 2] = d, ve(n)(o, c, r) && t.preventDefault()
                },
                useCapture: t
            };
            ze.registerOrRemoveHandler(u)
        }

        function Mr(e, r, t, n, o, a, i) {
            ze.visibilityChangeEvent || (ze.visibilityChangeEvent = et(8));
            var u = {
                target: e,
                eventTypeString: a,
                callbackfunc: n,
                handlerFunc: function(e) {
                    var t, a, i = e || event,
                        u = ze.visibilityChangeEvent;
                    t = u, a = ["hidden", "visible", "prerender", "unloaded"].indexOf(document.visibilityState), P[t >> 2] = document.hidden, P[t + 4 >> 2] = a, ve(n)(o, u, r) && i.preventDefault()
                },
                useCapture: t
            };
            ze.registerOrRemoveHandler(u)
        }
        var Nr = {
            xhrs: [],
            setu64: function(e, r) {
                F[e >> 2] = r, F[e + 4 >> 2] = r / 4294967296 | 0
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
                Nr.openDatabase("emscripten_filesystem", 1, (e => {
                    Nr.dbInstance = e, te()
                }), (() => {
                    Nr.dbInstance = !1, te()
                })), "undefined" != typeof ENVIRONMENT_IS_FETCH_WORKER && ENVIRONMENT_IS_FETCH_WORKER || re()
            }
        };

        function Or(e, r, t, n, o) {
            var a = F[e + 8 >> 2];
            if (a) {
                var i = N(a),
                    u = e + 112,
                    s = N(u);
                s || (s = "GET");
                F[e + 4 >> 2];
                var c = F[u + 52 >> 2],
                    f = F[u + 56 >> 2],
                    l = !!F[u + 60 >> 2],
                    d = (F[u + 64 >> 2], F[u + 68 >> 2]),
                    m = F[u + 72 >> 2],
                    p = F[u + 76 >> 2],
                    v = F[u + 80 >> 2],
                    g = F[u + 84 >> 2],
                    h = F[u + 88 >> 2],
                    b = !!(1 & c),
                    y = !!(2 & c),
                    w = !!(64 & c),
                    x = d ? N(d) : void 0,
                    E = m ? N(m) : void 0,
                    k = new XMLHttpRequest;
                if (k.withCredentials = l, k.open(s, i, !w, x, E), w || (k.timeout = f), k.url_ = i, k.responseType = "arraybuffer", v) {
                    var C = N(v);
                    k.overrideMimeType(C)
                }
                if (p)
                    for (;;) {
                        var S = F[p >> 2];
                        if (!S) break;
                        var A = F[p + 4 >> 2];
                        if (!A) break;
                        p += 8;
                        var L = N(S),
                            _ = N(A);
                        k.setRequestHeader(L, _)
                    }
                Nr.xhrs.push(k);
                var P = Nr.xhrs.length;
                F[e + 0 >> 2] = P;
                var T = g && h ? B.slice(g, g + h) : null;
                k.onload = n => {
                    I(b && !y);
                    var o = k.response ? k.response.byteLength : 0;
                    Nr.setu64(e + 24, 0), o && Nr.setu64(e + 32, o), D[e + 40 >> 1] = k.readyState, D[e + 42 >> 1] = k.status, k.statusText && U(k.statusText, e + 44, 64), k.status >= 200 && k.status < 300 ? r && r(e, k, n) : t && t(e, k, n)
                }, k.onerror = r => {
                    I(b);
                    var n = k.status;
                    Nr.setu64(e + 24, 0), Nr.setu64(e + 32, k.response ? k.response.byteLength : 0), D[e + 40 >> 1] = k.readyState, D[e + 42 >> 1] = n, t && t(e, k, r)
                }, k.ontimeout = r => {
                    t && t(e, k, r)
                }, k.onprogress = r => {
                    var t = b && y && k.response ? k.response.byteLength : 0,
                        o = 0;
                    b && y && (o = et(t), B.set(new Uint8Array(k.response), o)), F[e + 12 >> 2] = o, Nr.setu64(e + 16, t), Nr.setu64(e + 24, r.loaded - t), Nr.setu64(e + 32, r.total), D[e + 40 >> 1] = k.readyState, k.readyState >= 3 && 0 === k.status && r.loaded > 0 && (k.status = 200), D[e + 42 >> 1] = k.status, k.statusText && U(k.statusText, e + 44, 64), n && n(e, k, r), o && Jr(o)
                }, k.onreadystatechange = r => {
                    D[e + 40 >> 1] = k.readyState, k.readyState >= 2 && (D[e + 42 >> 1] = k.status), o && o(e, k, r)
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
                r && (n = k.response ? k.response.byteLength : 0, t = et(n), B.set(new Uint8Array(k.response), t)), F[e + 12 >> 2] = t, Nr.setu64(e + 16, n)
            }
        }

        function Ur(e, r, t, n, o) {
            if (e) {
                var a = F[r + 112 + 64 >> 2];
                a || (a = F[r + 8 >> 2]);
                var i = N(a);
                try {
                    var u = e.transaction(["FILES"], "readwrite").objectStore("FILES").put(t, i);
                    u.onsuccess = e => {
                        D[r + 40 >> 1] = 4, D[r + 42 >> 1] = 200, U("OK", r + 44, 64), n(r, 0, i)
                    }, u.onerror = e => {
                        D[r + 40 >> 1] = 4, D[r + 42 >> 1] = 413, U("Payload Too Large", r + 44, 64), o(r, 0, e)
                    }
                } catch (e) {
                    o(r, 0, e)
                }
            } else o(r, 0, "IndexedDB not available!")
        }
        var zr = {};

        function jr() {
            if (!jr.strings) {
                var e = {
                    USER: "web_user",
                    LOGNAME: "web_user",
                    PATH: "/",
                    PWD: "/",
                    HOME: "/home/web_user",
                    LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
                    _: f || "./this.program"
                };
                for (var r in zr) void 0 === zr[r] ? delete e[r] : e[r] = zr[r];
                var t = [];
                for (var r in e) t.push(r + "=" + e[r]);
                jr.strings = t
            }
            return jr.strings
        }
        var qr, Gr = function(e, r, t, n) {
                e || (e = this), this.parent = e, this.mount = e.mount, this.mounted = null, this.id = Le.nextInode++, this.name = r, this.mode = t, this.node_ops = {}, this.stream_ops = {}, this.rdev = n
            },
            Qr = 365,
            Hr = 146;
        Object.defineProperties(Gr.prototype, {
            read: {
                get: function() {
                    return (this.mode & Qr) === Qr
                },
                set: function(e) {
                    e ? this.mode |= Qr : this.mode &= -366
                }
            },
            write: {
                get: function() {
                    return (this.mode & Hr) === Hr
                },
                set: function(e) {
                    e ? this.mode |= Hr : this.mode &= -147
                }
            },
            isFolder: {
                get: function() {
                    return Le.isDir(this.mode)
                }
            },
            isDevice: {
                get: function() {
                    return Le.isChrdev(this.mode)
                }
            }
        }), Le.FSNode = Gr, Le.staticInit(), r.FS_createPath = Le.createPath, r.FS_createDataFile = Le.createDataFile, r.FS_createPreloadedFile = Le.createPreloadedFile, r.FS_createLazyFile = Le.createLazyFile, r.FS_createDevice = Le.createDevice, r.FS_unlink = Le.unlink, r.requestFullscreen = function(e, r) {
            Ie.requestFullscreen(e, r)
        }, r.requestAnimationFrame = function(e) {
            Ie.requestAnimationFrame(e)
        }, r.setCanvasSize = function(e, r, t) {
            Ie.setCanvasSize(e, r, t)
        }, r.pauseMainLoop = function() {
            Ie.mainLoop.pause()
        }, r.resumeMainLoop = function() {
            Ie.mainLoop.resume()
        }, r.getUserMedia = function() {
            Ie.getUserMedia()
        }, r.createContext = function(e, r, t, n) {
            return Ie.createContext(e, r, t, n)
        };
        for (var Vr = 0; Vr < 32; ++Vr) or.push(new Array(Vr));
        var Xr = new Float32Array(288);
        for (Vr = 0; Vr < 288; ++Vr) xr[Vr] = Xr.subarray(0, Vr + 1);
        var Wr = new Int32Array(288);
        for (Vr = 0; Vr < 288; ++Vr) Er[Vr] = Wr.subarray(0, Vr + 1);

        function Yr(e, r, t) {
            var n = t > 0 ? t : z(e) + 1,
                o = new Array(n),
                a = O(e, o, 0, o.length);
            return r && (o.length = a), o
        }
        Nr.staticInit();
        var Kr, $r = {
                gb: function(e, r, t) {
                    Be.varargs = t;
                    try {
                        var n = Be.getStreamFromFD(e);
                        switch (r) {
                            case 0:
                                return (o = Be.get()) < 0 ? -28 : Le.open(n.path, n.flags, 0, o).fd;
                            case 1:
                            case 2:
                                return 0;
                            case 3:
                                return n.flags;
                            case 4:
                                var o = Be.get();
                                return n.flags |= o, 0;
                            case 5:
                                o = Be.get();
                                return _[o + 0 >> 1] = 2, 0;
                            case 6:
                            case 7:
                                return 0;
                            case 16:
                            case 8:
                                return -28;
                            case 9:
                                return ye(28), -1;
                            default:
                                return -28
                        }
                    } catch (e) {
                        if (void 0 === Le || !(e instanceof Le.ErrnoError)) throw e;
                        return -e.errno
                    }
                },
                mc: function(e, r) {
                    try {
                        var t = Be.getStreamFromFD(e);
                        return Be.doStat(Le.stat, t.path, r)
                    } catch (e) {
                        if (void 0 === Le || !(e instanceof Le.ErrnoError)) throw e;
                        return -e.errno
                    }
                },
                kc: function(e, r, t, n) {
                    try {
                        r = Be.getStr(r);
                        var o = 256 & n,
                            a = 4096 & n;
                        return n &= -4353, r = Be.calculateAt(e, r, a), Be.doStat(o ? Le.lstat : Le.stat, r, t)
                    } catch (e) {
                        if (void 0 === Le || !(e instanceof Le.ErrnoError)) throw e;
                        return -e.errno
                    }
                },
                oc: function(e, r, t) {
                    Be.varargs = t;
                    try {
                        var n = Be.getStreamFromFD(e);
                        switch (r) {
                            case 21509:
                            case 21505:
                                return n.tty ? 0 : -59;
                            case 21510:
                            case 21511:
                            case 21512:
                            case 21506:
                            case 21507:
                            case 21508:
                                return n.tty ? 0 : -59;
                            case 21519:
                                if (!n.tty) return -59;
                                var o = Be.get();
                                return P[o >> 2] = 0, 0;
                            case 21520:
                                return n.tty ? -28 : -59;
                            case 21531:
                                o = Be.get();
                                return Le.ioctl(n, r, o);
                            case 21523:
                            case 21524:
                                return n.tty ? 0 : -59;
                            default:
                                ne("bad ioctl syscall " + r)
                        }
                    } catch (e) {
                        if (void 0 === Le || !(e instanceof Le.ErrnoError)) throw e;
                        return -e.errno
                    }
                },
                pc: function(e, r, t) {
                    Be.varargs = t;
                    try {
                        var n = Be.getStr(e),
                            o = t ? Be.get() : 0;
                        return Le.open(n, r, o).fd
                    } catch (e) {
                        if (void 0 === Le || !(e instanceof Le.ErrnoError)) throw e;
                        return -e.errno
                    }
                },
                lc: function(e, r) {
                    try {
                        return e = Be.getStr(e), Be.doStat(Le.stat, e, r)
                    } catch (e) {
                        if (void 0 === Le || !(e instanceof Le.ErrnoError)) throw e;
                        return -e.errno
                    }
                },
                Kh: function(e) {
                    delete Nr.xhrs[e - 1]
                },
                fc: function() {
                    throw "longjmp"
                },
                qc: function(e, r) {
                    var t = new Date(1e3 * P[e >> 2]);
                    P[r >> 2] = t.getUTCSeconds(), P[r + 4 >> 2] = t.getUTCMinutes(), P[r + 8 >> 2] = t.getUTCHours(), P[r + 12 >> 2] = t.getUTCDate(), P[r + 16 >> 2] = t.getUTCMonth(), P[r + 20 >> 2] = t.getUTCFullYear() - 1900, P[r + 24 >> 2] = t.getUTCDay();
                    var n = Date.UTC(t.getUTCFullYear(), 0, 1, 0, 0, 0, 0),
                        o = (t.getTime() - n) / 864e5 | 0;
                    P[r + 28 >> 2] = o
                },
                rc: function(e, r) {
                    var t = new Date(1e3 * P[e >> 2]);
                    P[r >> 2] = t.getSeconds(), P[r + 4 >> 2] = t.getMinutes(), P[r + 8 >> 2] = t.getHours(), P[r + 12 >> 2] = t.getDate(), P[r + 16 >> 2] = t.getMonth(), P[r + 20 >> 2] = t.getFullYear() - 1900, P[r + 24 >> 2] = t.getDay();
                    var n = new Date(t.getFullYear(), 0, 1),
                        o = (t.getTime() - n.getTime()) / 864e5 | 0;
                    P[r + 28 >> 2] = o, P[r + 36 >> 2] = -60 * t.getTimezoneOffset();
                    var a = new Date(t.getFullYear(), 6, 1).getTimezoneOffset(),
                        i = n.getTimezoneOffset(),
                        u = 0 | (a != i && t.getTimezoneOffset() == Math.min(i, a));
                    P[r + 32 >> 2] = u
                },
                sc: function(e) {
                    var r = new Date(P[e + 20 >> 2] + 1900, P[e + 16 >> 2], P[e + 12 >> 2], P[e + 8 >> 2], P[e + 4 >> 2], P[e >> 2], 0),
                        t = P[e + 32 >> 2],
                        n = r.getTimezoneOffset(),
                        o = new Date(r.getFullYear(), 0, 1),
                        a = new Date(r.getFullYear(), 6, 1).getTimezoneOffset(),
                        i = o.getTimezoneOffset(),
                        u = Math.min(i, a);
                    if (t < 0) P[e + 32 >> 2] = Number(a != i && u == n);
                    else if (t > 0 != (u == n)) {
                        var s = Math.max(i, a),
                            c = t > 0 ? u : s;
                        r.setTime(r.getTime() + 6e4 * (c - n))
                    }
                    P[e + 24 >> 2] = r.getDay();
                    var f = (r.getTime() - o.getTime()) / 864e5 | 0;
                    return P[e + 28 >> 2] = f, P[e >> 2] = r.getSeconds(), P[e + 4 >> 2] = r.getMinutes(), P[e + 8 >> 2] = r.getHours(), P[e + 12 >> 2] = r.getDate(), P[e + 16 >> 2] = r.getMonth(), r.getTime() / 1e3 | 0
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
                        P[e >> 2] = 60 * s, P[r >> 2] = Number(i != u);
                        var f = c(o),
                            l = c(a),
                            d = j(f),
                            m = j(l);
                        u < i ? (P[t >> 2] = d, P[t + 4 >> 2] = m) : (P[t >> 2] = m, P[t + 4 >> 2] = d)
                    }(r, t, n))
                },
                U: function() {
                    ne("")
                },
                $a: function(e, r, t, n, o) {
                    if (Re.currentCtx) {
                        var a = Re.buffers[e];
                        if (a)
                            if (o <= 0) Re.currentCtx.err = 40963;
                            else {
                                var i = null;
                                try {
                                    switch (r) {
                                        case 4352:
                                            if (n > 0)
                                                for (var u = (i = Re.currentCtx.audioCtx.createBuffer(1, n, o)).getChannelData(0), s = 0; s < n; ++s) u[s] = .0078125 * B[t++] - 1;
                                            a.bytesPerSample = 1, a.channels = 1, a.length = n;
                                            break;
                                        case 4353:
                                            if (n > 0) {
                                                u = (i = Re.currentCtx.audioCtx.createBuffer(1, n >> 1, o)).getChannelData(0);
                                                t >>= 1;
                                                for (s = 0; s < n >> 1; ++s) u[s] = 30517578125e-15 * _[t++]
                                            }
                                            a.bytesPerSample = 2, a.channels = 1, a.length = n >> 1;
                                            break;
                                        case 4354:
                                            if (n > 0) {
                                                u = (i = Re.currentCtx.audioCtx.createBuffer(2, n >> 1, o)).getChannelData(0);
                                                var c = i.getChannelData(1);
                                                for (s = 0; s < n >> 1; ++s) u[s] = .0078125 * B[t++] - 1, c[s] = .0078125 * B[t++] - 1
                                            }
                                            a.bytesPerSample = 1, a.channels = 2, a.length = n >> 1;
                                            break;
                                        case 4355:
                                            if (n > 0) {
                                                u = (i = Re.currentCtx.audioCtx.createBuffer(2, n >> 2, o)).getChannelData(0), c = i.getChannelData(1);
                                                t >>= 1;
                                                for (s = 0; s < n >> 2; ++s) u[s] = 30517578125e-15 * _[t++], c[s] = 30517578125e-15 * _[t++]
                                            }
                                            a.bytesPerSample = 2, a.channels = 2, a.length = n >> 2;
                                            break;
                                        case 65552:
                                            if (n > 0) {
                                                u = (i = Re.currentCtx.audioCtx.createBuffer(1, n >> 2, o)).getChannelData(0);
                                                t >>= 2;
                                                for (s = 0; s < n >> 2; ++s) u[s] = T[t++]
                                            }
                                            a.bytesPerSample = 4, a.channels = 1, a.length = n >> 2;
                                            break;
                                        case 65553:
                                            if (n > 0) {
                                                u = (i = Re.currentCtx.audioCtx.createBuffer(2, n >> 3, o)).getChannelData(0), c = i.getChannelData(1);
                                                t >>= 2;
                                                for (s = 0; s < n >> 3; ++s) u[s] = T[t++], c[s] = T[t++]
                                            }
                                            a.bytesPerSample = 4, a.channels = 2, a.length = n >> 3;
                                            break;
                                        default:
                                            return void(Re.currentCtx.err = 40963)
                                    }
                                    a.frequency = o, a.audioBuf = i
                                } catch (e) {
                                    return void(Re.currentCtx.err = 40963)
                                }
                            }
                        else Re.currentCtx.err = 40963
                    }
                },
                _b: function(e, r) {
                    if (Re.currentCtx) {
                        for (var t = 0; t < e; ++t) {
                            if (0 !== (n = P[r + 4 * t >> 2])) {
                                if (!Re.buffers[n]) return void(Re.currentCtx.err = 40961);
                                if (Re.buffers[n].refCount) return void(Re.currentCtx.err = 40964)
                            }
                        }
                        for (t = 0; t < e; ++t) {
                            var n;
                            0 !== (n = P[r + 4 * t >> 2]) && (Re.deviceRefCounts[Re.buffers[n].deviceId]--, delete Re.buffers[n], Re.freeIds.push(n))
                        }
                    }
                },
                $b: function(e, r) {
                    if (Re.currentCtx) {
                        for (var t = 0; t < e; ++t) {
                            var n = P[r + 4 * t >> 2];
                            if (!Re.currentCtx.sources[n]) return void(Re.currentCtx.err = 40961)
                        }
                        for (t = 0; t < e; ++t) {
                            n = P[r + 4 * t >> 2];
                            Re.setSourceState(Re.currentCtx.sources[n], 4116), Me(n, 4105, 0), delete Re.currentCtx.sources[n], Re.freeIds.push(n)
                        }
                    }
                },
                cc: function(e, r) {
                    if (Re.currentCtx)
                        for (var t = 0; t < e; ++t) {
                            var n = {
                                deviceId: Re.currentCtx.deviceId,
                                id: Re.newId(),
                                refCount: 0,
                                audioBuf: null,
                                frequency: 0,
                                bytesPerSample: 2,
                                channels: 1,
                                length: 0
                            };
                            Re.deviceRefCounts[n.deviceId]++, Re.buffers[n.id] = n, P[r + 4 * t >> 2] = n.id
                        }
                },
                bc: function(e, r) {
                    if (Re.currentCtx)
                        for (var t = 0; t < e; ++t) {
                            var n = Re.currentCtx.audioCtx.createGain();
                            n.connect(Re.currentCtx.gain);
                            var o = {
                                context: Re.currentCtx,
                                id: Re.newId(),
                                type: 4144,
                                state: 4113,
                                bufQueue: [Re.buffers[0]],
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
                            Re.currentCtx.sources[o.id] = o, P[r + 4 * t >> 2] = o.id
                        }
                },
                aa: function(e, r, t) {
                    var n = Re.getSourceParam("alGetSourcei", e, r);
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
                                P[t >> 2] = n;
                                break;
                            default:
                                return void(Re.currentCtx.err = 40962)
                        } else Re.currentCtx.err = 40963
                },
                ab: function(e, r, t, n, o) {
                    switch (r) {
                        case 4100:
                        case 4101:
                        case 4102:
                            Re.paramArray[0] = t, Re.paramArray[1] = n, Re.paramArray[2] = o, Re.setSourceParam("alSource3i", e, r, Re.paramArray);
                            break;
                        default:
                            Re.setSourceParam("alSource3i", e, r, null)
                    }
                },
                Wb: function(e) {
                    if (Re.currentCtx) {
                        var r = Re.currentCtx.sources[e];
                        r ? Re.setSourceState(r, 4114) : Re.currentCtx.err = 40961
                    }
                },
                _a: function(e, r, t) {
                    if (Re.currentCtx) {
                        var n = Re.currentCtx.sources[e];
                        if (n)
                            if (4136 !== n.type) {
                                if (0 !== r) {
                                    for (var o = Re.buffers[0], a = 0; a < n.bufQueue.length; a++)
                                        if (0 !== n.bufQueue[a].id) {
                                            o = n.bufQueue[a];
                                            break
                                        } for (a = 0; a < r; ++a) {
                                        var i = P[t + 4 * a >> 2];
                                        if (!(u = Re.buffers[i])) return void(Re.currentCtx.err = 40961);
                                        0 === o.id || u.frequency === o.frequency && u.bytesPerSample === o.bytesPerSample && u.channels === o.channels || (Re.currentCtx.err = 40964)
                                    }
                                    1 === n.bufQueue.length && 0 === n.bufQueue[0].id && (n.bufQueue.length = 0), n.type = 4137;
                                    for (a = 0; a < r; ++a) {
                                        var u;
                                        i = P[t + 4 * a >> 2];
                                        (u = Re.buffers[i]).refCount++, n.bufQueue.push(u)
                                    }
                                    n.looping && Re.cancelPendingSourceAudio(n), Re.initSourcePanner(n), Re.scheduleSourceAudio(n)
                                }
                            } else Re.currentCtx.err = 40964;
                        else Re.currentCtx.err = 40961
                    }
                },
                Ub: function(e) {
                    if (Re.currentCtx) {
                        var r = Re.currentCtx.sources[e];
                        r ? Re.setSourceState(r, 4116) : Re.currentCtx.err = 40961
                    }
                },
                Vb: function(e, r, t) {
                    if (Re.currentCtx) {
                        var n = Re.currentCtx.sources[e];
                        if (n) {
                            if (r > (1 === n.bufQueue.length && 0 === n.bufQueue[0].id ? 0 : n.bufsProcessed)) Re.currentCtx.err = 40963;
                            else if (0 !== r) {
                                for (var o = 0; o < r; o++) {
                                    var a = n.bufQueue.shift();
                                    a.refCount--, P[t + 4 * o >> 2] = a.id, n.bufsProcessed--
                                }
                                0 === n.bufQueue.length && n.bufQueue.push(Re.buffers[0]), Re.initSourcePanner(n), Re.scheduleSourceAudio(n)
                            }
                        } else Re.currentCtx.err = 40961
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
                            Re.setSourceParam("alSourcef", e, r, t);
                            break;
                        default:
                            Re.setSourceParam("alSourcef", e, r, null)
                    }
                },
                ac: Me,
                Xb: function(e) {
                    return !(e in Re.deviceRefCounts) || Re.deviceRefCounts[e] > 0 ? 0 : (delete Re.deviceRefCounts[e], Re.freeIds.push(e), 1)
                },
                vc: function(e, r) {
                    if (!(e in Re.deviceRefCounts)) return Re.alcErr = 40961, 0;
                    var t = null,
                        n = [],
                        o = null;
                    if (r >>= 2)
                        for (var a = 0, i = 0; a = P[r++], n.push(a), 0 !== a;) switch (i = P[r++], n.push(i), a) {
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
                                        return Re.alcErr = 40964, 0
                                }
                                break;
                            case 6550:
                                if (0 !== i) return Re.alcErr = 40964, 0;
                                break;
                            default:
                                return Re.alcErr = 40964, 0
                        }
                    var u = window.AudioContext || window.webkitAudioContext,
                        s = null;
                    try {
                        s = t ? new u(t) : new u
                    } catch (e) {
                        return "NotSupportedError" === e.name ? Re.alcErr = 40964 : Re.alcErr = 40961, 0
                    }
                    le(s), void 0 === s.createGain && (s.createGain = s.createGainNode);
                    var c = s.createGain();
                    c.connect(s.destination);
                    var f = {
                        deviceId: e,
                        id: Re.newId(),
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
                            Re.scheduleContextAudio(f)
                        }), Re.QUEUE_INTERVAL),
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
                    if (Re.deviceRefCounts[e]++, Re.contexts[f.id] = f, null !== o)
                        for (var l in Re.contexts) {
                            var d = Re.contexts[l];
                            d.deviceId === e && (d.hrtf = o, Re.updateContextGlobal(d))
                        }
                    return f.id
                },
                Zb: function(e) {
                    var r = Re.contexts[e];
                    Re.currentCtx !== r ? (Re.contexts[e].interval && clearInterval(Re.contexts[e].interval), Re.deviceRefCounts[r.deviceId]--, delete Re.contexts[e], Re.freeIds.push(e)) : Re.alcErr = 40962
                },
                cb: function(e, r, t, n) {
                    if (0 !== t && n) switch (r) {
                        case 4096:
                        case 4097:
                            P[n >> 2] = 1;
                            break;
                        case 4098:
                            if (!(e in Re.deviceRefCounts)) return void(Re.alcErr = 40961);
                            if (!Re.currentCtx) return void(Re.alcErr = 40962);
                            P[n >> 2] = Re.currentCtx.attrs.length;
                            break;
                        case 4099:
                            if (!(e in Re.deviceRefCounts)) return void(Re.alcErr = 40961);
                            if (!Re.currentCtx) return void(Re.alcErr = 40962);
                            for (var o = 0; o < Re.currentCtx.attrs.length; o++) P[n + 4 * o >> 2] = Re.currentCtx.attrs[o];
                            break;
                        case 4103:
                            if (!(e in Re.deviceRefCounts)) return void(Re.alcErr = 40961);
                            if (!Re.currentCtx) return void(Re.alcErr = 40962);
                            P[n >> 2] = Re.currentCtx.audioCtx.sampleRate;
                            break;
                        case 4112:
                        case 4113:
                            if (!(e in Re.deviceRefCounts)) return void(Re.alcErr = 40961);
                            if (!Re.currentCtx) return void(Re.alcErr = 40962);
                            P[n >> 2] = 2147483647;
                            break;
                        case 6546:
                        case 6547:
                            if (!(e in Re.deviceRefCounts)) return void(Re.alcErr = 40961);
                            var a = 0;
                            for (var i in Re.contexts) {
                                var u = Re.contexts[i];
                                u.deviceId === e && (a = u.hrtf ? 1 : 0)
                            }
                            P[n >> 2] = a;
                            break;
                        case 6548:
                            if (!(e in Re.deviceRefCounts)) return void(Re.alcErr = 40961);
                            P[n >> 2] = 1;
                            break;
                        case 131075:
                            if (!(e in Re.deviceRefCounts)) return void(Re.alcErr = 40961);
                            if (!Re.currentCtx) return void(Re.alcErr = 40962);
                            P[n >> 2] = 1;
                        case 786:
                            var s = Re.requireValidCaptureDevice(e, "alcGetIntegerv");
                            if (!s) return;
                            var c = s.capturedFrameCount,
                                f = s.requestedSampleRate,
                                l = s.audioCtx.sampleRate,
                                d = Math.floor(c * (f / l));
                            P[n >> 2] = d;
                            break;
                        default:
                            return void(Re.alcErr = 40963)
                    }
                },
                eb: function(e) {
                    return 0 === e ? (Re.currentCtx = null, 0) : (Re.currentCtx = Re.contexts[e], 1)
                },
                Gc: function(e) {
                    if (e && N(e) !== Re.DEVICE_NAME) return 0;
                    if ("undefined" != typeof AudioContext || "undefined" != typeof webkitAudioContext) {
                        var r = Re.newId();
                        return Re.deviceRefCounts[r] = 0, r
                    }
                    return 0
                },
                gi: function(e) {
                    const t = r.canvas;
                    t && (t.style.cursor = N(e))
                },
                Z: function(e, r) {
                    var t;
                    if (0 === e) t = Date.now();
                    else {
                        if (1 !== e && 4 !== e) return ye(28), -1;
                        t = Se()
                    }
                    return P[r >> 2] = t / 1e3 | 0, P[r + 4 >> 2] = t % 1e3 * 1e3 * 1e3 | 0, 0
                },
                ai: function(e) {
                    return 12448 == e ? (Ne.setErrorCode(12288), 1) : (Ne.setErrorCode(12300), 0)
                },
                di: function(e, r, t, n, o) {
                    return Ne.chooseConfig(e, r, t, n, o)
                },
                Th: function(e, t, n, o) {
                    if (62e3 != e) return Ne.setErrorCode(12296), 0;
                    for (var a = 1;;) {
                        var i = P[o >> 2];
                        if (12440 != i) {
                            if (12344 == i) break;
                            return Ne.setErrorCode(12292), 0
                        }
                        a = P[o + 4 >> 2], o += 8
                    }
                    return a < 2 || a > 3 ? (Ne.setErrorCode(12293), 0) : (Ne.contextAttributes.majorVersion = a - 1, Ne.contextAttributes.minorVersion = 0, Ne.context = Oe.createContext(r.canvas, Ne.contextAttributes), 0 != Ne.context ? (Ne.setErrorCode(12288), Oe.makeContextCurrent(Ne.context), r.useWebGL = !0, Ie.moduleContextCreatedCallbacks.forEach((function(e) {
                        e()
                    })), Oe.makeContextCurrent(null), 62004) : (Ne.setErrorCode(12297), 0))
                },
                Vh: function(e, r, t, n) {
                    return 62e3 != e ? (Ne.setErrorCode(12296), 0) : 62002 != r ? (Ne.setErrorCode(12293), 0) : (Ne.setErrorCode(12288), 62006)
                },
                Uh: function(e, r) {
                    return 62e3 != e ? (Ne.setErrorCode(12296), 0) : 62004 != r ? (Ne.setErrorCode(12294), 0) : (Oe.deleteContext(Ne.context), Ne.setErrorCode(12288), Ne.currentContext == r && (Ne.currentContext = 0), 1)
                },
                Wh: function(e, r) {
                    return 62e3 != e ? (Ne.setErrorCode(12296), 0) : 62006 != r ? (Ne.setErrorCode(12301), 1) : (Ne.currentReadSurface == r && (Ne.currentReadSurface = 0), Ne.currentDrawSurface == r && (Ne.currentDrawSurface = 0), Ne.setErrorCode(12288), 1)
                },
                ei: function(e, r, t, n) {
                    if (62e3 != e) return Ne.setErrorCode(12296), 0;
                    if (62002 != r) return Ne.setErrorCode(12293), 0;
                    if (!n) return Ne.setErrorCode(12300), 0;
                    switch (Ne.setErrorCode(12288), t) {
                        case 12320:
                            return P[n >> 2] = Ne.contextAttributes.alpha ? 32 : 24, 1;
                        case 12321:
                            return P[n >> 2] = Ne.contextAttributes.alpha ? 8 : 0, 1;
                        case 12322:
                        case 12323:
                        case 12324:
                            return P[n >> 2] = 8, 1;
                        case 12325:
                            return P[n >> 2] = Ne.contextAttributes.depth ? 24 : 0, 1;
                        case 12326:
                            return P[n >> 2] = Ne.contextAttributes.stencil ? 8 : 0, 1;
                        case 12327:
                            return P[n >> 2] = 12344, 1;
                        case 12328:
                            return P[n >> 2] = 62002, 1;
                        case 12329:
                            return P[n >> 2] = 0, 1;
                        case 12330:
                            return P[n >> 2] = 4096, 1;
                        case 12331:
                            return P[n >> 2] = 16777216, 1;
                        case 12332:
                            return P[n >> 2] = 4096, 1;
                        case 12333:
                        case 12334:
                            return P[n >> 2] = 0, 1;
                        case 12335:
                            return P[n >> 2] = 12344, 1;
                        case 12337:
                            return P[n >> 2] = Ne.contextAttributes.antialias ? 4 : 0, 1;
                        case 12338:
                            return P[n >> 2] = Ne.contextAttributes.antialias ? 1 : 0, 1;
                        case 12339:
                            return P[n >> 2] = 4, 1;
                        case 12340:
                            return P[n >> 2] = 12344, 1;
                        case 12341:
                        case 12342:
                        case 12343:
                            return P[n >> 2] = -1, 1;
                        case 12345:
                        case 12346:
                        case 12347:
                            return P[n >> 2] = 0, 1;
                        case 12348:
                            return P[n >> 2] = 1, 1;
                        case 12349:
                        case 12350:
                            return P[n >> 2] = 0, 1;
                        case 12351:
                            return P[n >> 2] = 12430, 1;
                        case 12352:
                            return P[n >> 2] = 4, 1;
                        case 12354:
                            return P[n >> 2] = 0, 1;
                        default:
                            return Ne.setErrorCode(12292), 0
                    }
                },
                sb: function(e) {
                    return Ne.setErrorCode(12288), 62e3
                },
                Sh: function() {
                    return Ne.errorCode
                },
                bi: function(e, r, t) {
                    return 62e3 == e ? (r && (P[r >> 2] = 1), t && (P[t >> 2] = 4), Ne.defaultDisplayInitialized = !0, Ne.setErrorCode(12288), 1) : (Ne.setErrorCode(12296), 0)
                },
                Xh: function(e, r, t, n) {
                    return 62e3 != e ? (Ne.setErrorCode(12296), 0) : 0 != n && 62004 != n ? (Ne.setErrorCode(12294), 0) : 0 != t && 62006 != t || 0 != r && 62006 != r ? (Ne.setErrorCode(12301), 0) : (Oe.makeContextCurrent(n ? Ne.context : null), Ne.currentContext = n, Ne.currentDrawSurface = r, Ne.currentReadSurface = t, Ne.setErrorCode(12288), 1)
                },
                Rh: function(e, r) {
                    if (62e3 != e) return Ne.setErrorCode(12296), 0;
                    if (Ne.setErrorCode(12288), Ne.stringCache[r]) return Ne.stringCache[r];
                    var t;
                    switch (r) {
                        case 12371:
                            t = j("Emscripten");
                            break;
                        case 12372:
                            t = j("1.4 Emscripten EGL");
                            break;
                        case 12373:
                            t = j("");
                            break;
                        case 12429:
                            t = j("OpenGL_ES");
                            break;
                        default:
                            return Ne.setErrorCode(12300), 0
                    }
                    return Ne.stringCache[r] = t, t
                },
                Yh: function() {
                    if (Ne.defaultDisplayInitialized)
                        if (r.ctx) {
                            if (!r.ctx.isContextLost()) return Ne.setErrorCode(12288), 1;
                            Ne.setErrorCode(12302)
                        } else Ne.setErrorCode(12290);
                    else Ne.setErrorCode(12289);
                    return 0
                },
                Zh: function(e, r) {
                    return 62e3 != e ? (Ne.setErrorCode(12296), 0) : (0 == r ? _e(0, 0) : _e(1, r), Ne.setErrorCode(12288), 1)
                },
                ci: function(e) {
                    return 62e3 != e ? (Ne.setErrorCode(12296), 0) : (Ne.currentContext = 0, Ne.currentReadSurface = 0, Ne.currentDrawSurface = 0, Ne.defaultDisplayInitialized = !1, Ne.setErrorCode(12288), 1)
                },
                $h: function() {
                    return Ne.setErrorCode(12288), 1
                },
                _h: function(e) {
                    return Ne.setErrorCode(12288), 1
                },
                p: function(e, r, t) {
                    var n = function(e, r) {
                        var t;
                        for (Ue.length = 0, r >>= 2; t = B[e++];) {
                            var n = t < 105;
                            n && 1 & r && r++, Ue.push(n ? I[r++ >> 1] : P[r]), ++r
                        }
                        return Ue
                    }(r, t);
                    return fe[e].apply(null, n)
                },
                Tb: function() {
                    Ie.mainLoop.pause(), Ie.mainLoop.func = null
                },
                Nh: function() {
                    if (!ze.fullscreenEnabled()) return -1;
                    ze.removeDeferredCalls(Ze);
                    var e = qe[1];
                    if (e.exitFullscreen) e.fullscreenElement && e.exitFullscreen();
                    else {
                        if (!e.webkitExitFullscreen) return -1;
                        e.webkitFullscreenElement && e.webkitExitFullscreen()
                    }
                    return 0
                },
                Ph: function() {
                    if (ze.removeDeferredCalls(Je), document.exitPointerLock) document.exitPointerLock();
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
                Vg: He,
                sa: function() {
                    return devicePixelRatio
                },
                Y: function(e, r, t) {
                    if (!(e = Ge(e))) return -4;
                    var n = Ke(e);
                    return I[r >> 3] = n.width, I[t >> 3] = n.height, 0
                },
                ni: function(e) {
                    return ze.fullscreenEnabled() ? (er(e), 0) : -1
                },
                vb: function(e, r) {
                    return e < 0 || e >= ze.lastGamepadState.length ? -5 : ze.lastGamepadState[e] ? (rr(r, ze.lastGamepadState[e]), 0) : -7
                },
                hc: tr,
                Ga: Se,
                fi: function() {
                    return ze.lastGamepadState.length
                },
                Qh: function(e, r) {
                    P[e >> 2] = screen.width, P[r >> 2] = screen.height
                },
                qh: function(e) {
                    qr.activeTexture(e)
                },
                ph: function(e, r) {
                    qr.attachShader(Oe.programs[e], Oe.shaders[r])
                },
                oe: function(e, r) {
                    qr.beginQuery(e, Oe.queries[r])
                },
                Gh: function(e, r) {
                    qr.disjointTimerQueryExt.beginQueryEXT(e, Oe.queries[r])
                },
                Wd: function(e) {
                    qr.beginTransformFeedback(e)
                },
                nh: function(e, r, t) {
                    qr.bindAttribLocation(Oe.programs[e], r, N(t))
                },
                mh: function(e, r) {
                    34962 == e ? qr.currentArrayBufferBinding = r : 34963 == e && (qr.currentElementArrayBufferBinding = r), 35051 == e ? qr.currentPixelPackBufferBinding = r : 35052 == e && (qr.currentPixelUnpackBufferBinding = r), qr.bindBuffer(e, Oe.buffers[r])
                },
                Td: function(e, r, t) {
                    qr.bindBufferBase(e, r, Oe.buffers[t])
                },
                Ud: function(e, r, t, n, o) {
                    qr.bindBufferRange(e, r, Oe.buffers[t], n, o)
                },
                lh: function(e, r) {
                    qr.bindFramebuffer(e, Oe.framebuffers[r])
                },
                kh: function(e, r) {
                    qr.bindRenderbuffer(e, Oe.renderbuffers[r])
                },
                Zc: function(e, r) {
                    qr.bindSampler(e, Oe.samplers[r])
                },
                jh: function(e, r) {
                    qr.bindTexture(e, Oe.textures[r])
                },
                Qc: function(e, r) {
                    qr.bindTransformFeedback(e, Oe.transformFeedbacks[r])
                },
                ae: function(e) {
                    qr.bindVertexArray(Oe.vaos[e]);
                    var r = qr.getParameter(34965);
                    qr.currentElementArrayBufferBinding = r ? 0 | r.name : 0
                },
                yh: function(e) {
                    qr.bindVertexArray(Oe.vaos[e]);
                    var r = qr.getParameter(34965);
                    qr.currentElementArrayBufferBinding = r ? 0 | r.name : 0
                },
                ih: function(e, r, t, n) {
                    qr.blendColor(e, r, t, n)
                },
                hh: function(e) {
                    qr.blendEquation(e)
                },
                gh: function(e, r) {
                    qr.blendEquationSeparate(e, r)
                },
                fh: function(e, r) {
                    qr.blendFunc(e, r)
                },
                eh: function(e, r, t, n) {
                    qr.blendFuncSeparate(e, r, t, n)
                },
                de: function(e, r, t, n, o, a, i, u, s, c) {
                    qr.blitFramebuffer(e, r, t, n, o, a, i, u, s, c)
                },
                dh: function(e, r, t, n) {
                    Oe.currentContext.version >= 2 ? t ? qr.bufferData(e, B, n, t, r) : qr.bufferData(e, r, n) : qr.bufferData(e, t ? B.subarray(t, t + r) : r, n)
                },
                ch: function(e, r, t, n) {
                    Oe.currentContext.version >= 2 ? qr.bufferSubData(e, r, B, n, t) : qr.bufferSubData(e, r, B.subarray(n, n + t))
                },
                bh: function(e) {
                    return qr.checkFramebufferStatus(e)
                },
                ah: function(e) {
                    qr.clear(e)
                },
                wd: function(e, r, t, n) {
                    qr.clearBufferfi(e, r, t, n)
                },
                xd: function(e, r, t) {
                    qr.clearBufferfv(e, r, T, t >> 2)
                },
                zd: function(e, r, t) {
                    qr.clearBufferiv(e, r, P, t >> 2)
                },
                yd: function(e, r, t) {
                    qr.clearBufferuiv(e, r, F, t >> 2)
                },
                $g: function(e, r, t, n) {
                    qr.clearColor(e, r, t, n)
                },
                _g: function(e) {
                    qr.clearDepth(e)
                },
                Zg: function(e) {
                    qr.clearStencil(e)
                },
                hd: function(e, r, t, n) {
                    return qr.clientWaitSync(Oe.syncs[e], r, nr(t, n))
                },
                Yg: function(e, r, t, n) {
                    qr.colorMask(!!e, !!r, !!t, !!n)
                },
                Xg: function(e) {
                    qr.compileShader(Oe.shaders[e])
                },
                Wg: function(e, r, t, n, o, a, i, u) {
                    Oe.currentContext.version >= 2 ? qr.currentPixelUnpackBufferBinding ? qr.compressedTexImage2D(e, r, t, n, o, a, i, u) : qr.compressedTexImage2D(e, r, t, n, o, a, B, u, i) : qr.compressedTexImage2D(e, r, t, n, o, a, u ? B.subarray(u, u + i) : null)
                },
                te: function(e, r, t, n, o, a, i, u, s) {
                    qr.currentPixelUnpackBufferBinding ? qr.compressedTexImage3D(e, r, t, n, o, a, i, u, s) : qr.compressedTexImage3D(e, r, t, n, o, a, i, B, s, u)
                },
                Ug: function(e, r, t, n, o, a, i, u, s) {
                    Oe.currentContext.version >= 2 ? qr.currentPixelUnpackBufferBinding ? qr.compressedTexSubImage2D(e, r, t, n, o, a, i, u, s) : qr.compressedTexSubImage2D(e, r, t, n, o, a, i, B, s, u) : qr.compressedTexSubImage2D(e, r, t, n, o, a, i, s ? B.subarray(s, s + u) : null)
                },
                se: function(e, r, t, n, o, a, i, u, s, c, f) {
                    qr.currentPixelUnpackBufferBinding ? qr.compressedTexSubImage3D(e, r, t, n, o, a, i, u, s, c, f) : qr.compressedTexSubImage3D(e, r, t, n, o, a, i, u, s, B, f, c)
                },
                ud: function(e, r, t, n, o) {
                    qr.copyBufferSubData(e, r, t, n, o)
                },
                Tg: function(e, r, t, n, o, a, i, u) {
                    qr.copyTexImage2D(e, r, t, n, o, a, i, u)
                },
                Sg: function(e, r, t, n, o, a, i, u) {
                    qr.copyTexSubImage2D(e, r, t, n, o, a, i, u)
                },
                ue: function(e, r, t, n, o, a, i, u, s) {
                    qr.copyTexSubImage3D(e, r, t, n, o, a, i, u, s)
                },
                Rg: function() {
                    var e = Oe.getNewId(Oe.programs),
                        r = qr.createProgram();
                    return r.name = e, r.maxUniformLength = r.maxAttributeLength = r.maxUniformBlockNameLength = 0, r.uniformIdCounter = 1, Oe.programs[e] = r, e
                },
                Qg: function(e) {
                    var r = Oe.getNewId(Oe.shaders);
                    return Oe.shaders[r] = qr.createShader(e), r
                },
                Pg: function(e) {
                    qr.cullFace(e)
                },
                Og: function(e, r) {
                    for (var t = 0; t < e; t++) {
                        var n = P[r + 4 * t >> 2],
                            o = Oe.buffers[n];
                        o && (qr.deleteBuffer(o), o.name = 0, Oe.buffers[n] = null, n == qr.currentArrayBufferBinding && (qr.currentArrayBufferBinding = 0), n == qr.currentElementArrayBufferBinding && (qr.currentElementArrayBufferBinding = 0), n == qr.currentPixelPackBufferBinding && (qr.currentPixelPackBufferBinding = 0), n == qr.currentPixelUnpackBufferBinding && (qr.currentPixelUnpackBufferBinding = 0))
                    }
                },
                Ng: function(e, r) {
                    for (var t = 0; t < e; ++t) {
                        var n = P[r + 4 * t >> 2],
                            o = Oe.framebuffers[n];
                        o && (qr.deleteFramebuffer(o), o.name = 0, Oe.framebuffers[n] = null)
                    }
                },
                Mg: function(e) {
                    if (e) {
                        var r = Oe.programs[e];
                        r ? (qr.deleteProgram(r), r.name = 0, Oe.programs[e] = null) : Oe.recordError(1281)
                    }
                },
                qe: function(e, r) {
                    for (var t = 0; t < e; t++) {
                        var n = P[r + 4 * t >> 2],
                            o = Oe.queries[n];
                        o && (qr.deleteQuery(o), Oe.queries[n] = null)
                    }
                },
                Ih: function(e, r) {
                    for (var t = 0; t < e; t++) {
                        var n = P[r + 4 * t >> 2],
                            o = Oe.queries[n];
                        o && (qr.disjointTimerQueryExt.deleteQueryEXT(o), Oe.queries[n] = null)
                    }
                },
                Lg: function(e, r) {
                    for (var t = 0; t < e; t++) {
                        var n = P[r + 4 * t >> 2],
                            o = Oe.renderbuffers[n];
                        o && (qr.deleteRenderbuffer(o), o.name = 0, Oe.renderbuffers[n] = null)
                    }
                },
                $c: function(e, r) {
                    for (var t = 0; t < e; t++) {
                        var n = P[r + 4 * t >> 2],
                            o = Oe.samplers[n];
                        o && (qr.deleteSampler(o), o.name = 0, Oe.samplers[n] = null)
                    }
                },
                Kg: function(e) {
                    if (e) {
                        var r = Oe.shaders[e];
                        r ? (qr.deleteShader(r), Oe.shaders[e] = null) : Oe.recordError(1281)
                    }
                },
                id: function(e) {
                    if (e) {
                        var r = Oe.syncs[e];
                        r ? (qr.deleteSync(r), r.name = 0, Oe.syncs[e] = null) : Oe.recordError(1281)
                    }
                },
                Jg: function(e, r) {
                    for (var t = 0; t < e; t++) {
                        var n = P[r + 4 * t >> 2],
                            o = Oe.textures[n];
                        o && (qr.deleteTexture(o), o.name = 0, Oe.textures[n] = null)
                    }
                },
                Pc: function(e, r) {
                    for (var t = 0; t < e; t++) {
                        var n = P[r + 4 * t >> 2],
                            o = Oe.transformFeedbacks[n];
                        o && (qr.deleteTransformFeedback(o), o.name = 0, Oe.transformFeedbacks[n] = null)
                    }
                },
                $d: function(e, r) {
                    for (var t = 0; t < e; t++) {
                        var n = P[r + 4 * t >> 2];
                        qr.deleteVertexArray(Oe.vaos[n]), Oe.vaos[n] = null
                    }
                },
                xh: function(e, r) {
                    for (var t = 0; t < e; t++) {
                        var n = P[r + 4 * t >> 2];
                        qr.deleteVertexArray(Oe.vaos[n]), Oe.vaos[n] = null
                    }
                },
                Ig: function(e) {
                    qr.depthFunc(e)
                },
                Hg: function(e) {
                    qr.depthMask(!!e)
                },
                Gg: function(e, r) {
                    qr.depthRange(e, r)
                },
                Fg: function(e, r) {
                    qr.detachShader(Oe.programs[e], Oe.shaders[r])
                },
                Eg: function(e) {
                    qr.disable(e)
                },
                Dg: function(e) {
                    Oe.currentContext.clientBuffers[e].enabled = !1, qr.disableVertexAttribArray(e)
                },
                Cg: function(e, r, t) {
                    Oe.preDrawHandleClientVertexAttribBindings(r + t), qr.drawArrays(e, r, t), Oe.postDrawHandleClientVertexAttribBindings()
                },
                nd: function(e, r, t, n) {
                    qr.drawArraysInstanced(e, r, t, n)
                },
                th: function(e, r, t, n) {
                    qr.drawArraysInstanced(e, r, t, n)
                },
                yc: function(e, r, t, n) {
                    qr.drawArraysInstanced(e, r, t, n)
                },
                Be: function(e, r, t, n) {
                    qr.drawArraysInstanced(e, r, t, n)
                },
                zc: function(e, r, t, n) {
                    qr.drawArraysInstanced(e, r, t, n)
                },
                ke: function(e, r) {
                    for (var t = or[e], n = 0; n < e; n++) t[n] = P[r + 4 * n >> 2];
                    qr.drawBuffers(t)
                },
                ze: function(e, r) {
                    for (var t = or[e], n = 0; n < e; n++) t[n] = P[r + 4 * n >> 2];
                    qr.drawBuffers(t)
                },
                uh: function(e, r) {
                    for (var t = or[e], n = 0; n < e; n++) t[n] = P[r + 4 * n >> 2];
                    qr.drawBuffers(t)
                },
                Bg: function(e, r, t, n) {
                    var o;
                    if (!qr.currentElementArrayBufferBinding) {
                        var a = Oe.calcBufLength(1, t, 0, r);
                        o = Oe.getTempIndexBuffer(a), qr.bindBuffer(34963, o), qr.bufferSubData(34963, 0, B.subarray(n, n + a)), n = 0
                    }
                    Oe.preDrawHandleClientVertexAttribBindings(r), qr.drawElements(e, r, t, n), Oe.postDrawHandleClientVertexAttribBindings(r), qr.currentElementArrayBufferBinding || qr.bindBuffer(34963, null)
                },
                md: function(e, r, t, n, o) {
                    qr.drawElementsInstanced(e, r, t, n, o)
                },
                sh: function(e, r, t, n, o) {
                    qr.drawElementsInstanced(e, r, t, n, o)
                },
                wc: function(e, r, t, n, o) {
                    qr.drawElementsInstanced(e, r, t, n, o)
                },
                xc: function(e, r, t, n, o) {
                    qr.drawElementsInstanced(e, r, t, n, o)
                },
                Ae: function(e, r, t, n, o) {
                    qr.drawElementsInstanced(e, r, t, n, o)
                },
                xe: function(e, r, t, n, o, a) {
                    ar(e, n, o, a)
                },
                zg: function(e) {
                    qr.enable(e)
                },
                yg: function(e) {
                    Oe.currentContext.clientBuffers[e].enabled = !0, qr.enableVertexAttribArray(e)
                },
                ne: function(e) {
                    qr.endQuery(e)
                },
                Fh: function(e) {
                    qr.disjointTimerQueryExt.endQueryEXT(e)
                },
                Vd: function() {
                    qr.endTransformFeedback()
                },
                kd: function(e, r) {
                    var t = qr.fenceSync(e, r);
                    if (t) {
                        var n = Oe.getNewId(Oe.syncs);
                        return t.name = n, Oe.syncs[n] = t, n
                    }
                    return 0
                },
                xg: function() {
                    qr.finish()
                },
                wg: function() {
                    qr.flush()
                },
                vg: function(e, r, t, n) {
                    qr.framebufferRenderbuffer(e, r, t, Oe.renderbuffers[n])
                },
                ug: function(e, r, t, n, o) {
                    qr.framebufferTexture2D(e, r, t, Oe.textures[n], o)
                },
                be: function(e, r, t, n, o) {
                    qr.framebufferTextureLayer(e, r, Oe.textures[t], n, o)
                },
                tg: function(e) {
                    qr.frontFace(e)
                },
                sg: function(e, r) {
                    ir(e, r, "createBuffer", Oe.buffers)
                },
                qg: function(e, r) {
                    ir(e, r, "createFramebuffer", Oe.framebuffers)
                },
                re: function(e, r) {
                    ir(e, r, "createQuery", Oe.queries)
                },
                Jh: function(e, r) {
                    for (var t = 0; t < e; t++) {
                        var n = qr.disjointTimerQueryExt.createQueryEXT();
                        if (!n) {
                            for (Oe.recordError(1282); t < e;) P[r + 4 * t++ >> 2] = 0;
                            return
                        }
                        var o = Oe.getNewId(Oe.queries);
                        n.name = o, Oe.queries[o] = n, P[r + 4 * t >> 2] = o
                    }
                },
                pg: function(e, r) {
                    ir(e, r, "createRenderbuffer", Oe.renderbuffers)
                },
                bd: function(e, r) {
                    ir(e, r, "createSampler", Oe.samplers)
                },
                og: function(e, r) {
                    ir(e, r, "createTexture", Oe.textures)
                },
                Oc: function(e, r) {
                    ir(e, r, "createTransformFeedback", Oe.transformFeedbacks)
                },
                Zd: function(e, r) {
                    ir(e, r, "createVertexArray", Oe.vaos)
                },
                wh: function(e, r) {
                    ir(e, r, "createVertexArray", Oe.vaos)
                },
                rg: function(e) {
                    qr.generateMipmap(e)
                },
                ng: function(e, r, t, n, o, a, i) {
                    ur("getActiveAttrib", e, r, t, n, o, a, i)
                },
                mg: function(e, r, t, n, o, a, i) {
                    ur("getActiveUniform", e, r, t, n, o, a, i)
                },
                pd: function(e, r, t, n, o) {
                    e = Oe.programs[e];
                    var a = qr.getActiveUniformBlockName(e, r);
                    if (a)
                        if (o && t > 0) {
                            var i = U(a, o, t);
                            n && (P[n >> 2] = i)
                        } else n && (P[n >> 2] = 0)
                },
                qd: function(e, r, t, n) {
                    if (n)
                        if (e = Oe.programs[e], 35393 != t) {
                            var o = qr.getActiveUniformBlockParameter(e, r, t);
                            if (null !== o)
                                if (35395 == t)
                                    for (var a = 0; a < o.length; a++) P[n + 4 * a >> 2] = o[a];
                                else P[n >> 2] = o
                        } else {
                            var i = qr.getActiveUniformBlockName(e, r);
                            P[n >> 2] = i.length + 1
                        }
                    else Oe.recordError(1281)
                },
                sd: function(e, r, t, n, o) {
                    if (o)
                        if (r > 0 && 0 == t) Oe.recordError(1281);
                        else {
                            e = Oe.programs[e];
                            for (var a = [], i = 0; i < r; i++) a.push(P[t + 4 * i >> 2]);
                            var u = qr.getActiveUniforms(e, a, n);
                            if (u) {
                                var s = u.length;
                                for (i = 0; i < s; i++) P[o + 4 * i >> 2] = u[i]
                            }
                        }
                    else Oe.recordError(1281)
                },
                lg: function(e, r, t, n) {
                    var o = qr.getAttachedShaders(Oe.programs[e]),
                        a = o.length;
                    a > r && (a = r), P[t >> 2] = a;
                    for (var i = 0; i < a; ++i) {
                        var u = Oe.shaders.indexOf(o[i]);
                        P[n + 4 * i >> 2] = u
                    }
                },
                kg: function(e, r) {
                    return qr.getAttribLocation(Oe.programs[e], N(r))
                },
                jg: function(e, r) {
                    cr(e, r, 4)
                },
                cd: function(e, r, t) {
                    t ? sr(t, qr.getBufferParameter(e, r)) : Oe.recordError(1281)
                },
                ig: function(e, r, t) {
                    t ? P[t >> 2] = qr.getBufferParameter(e, r) : Oe.recordError(1281)
                },
                hg: function() {
                    var e = qr.getError() || Oe.lastError;
                    return Oe.lastError = 0, e
                },
                gg: function(e, r) {
                    cr(e, r, 2)
                },
                Id: function(e, r) {
                    return qr.getFragDataLocation(Oe.programs[e], N(r))
                },
                fg: function(e, r, t, n) {
                    var o = qr.getFramebufferAttachmentParameter(e, r, t);
                    (o instanceof WebGLRenderbuffer || o instanceof WebGLTexture) && (o = 0 | o.name), P[n >> 2] = o
                },
                dd: function(e, r, t) {
                    fr(e, r, t, 1)
                },
                fd: function(e, r) {
                    cr(e, r, 1)
                },
                Xd: function(e, r, t) {
                    fr(e, r, t, 0)
                },
                eg: function(e, r) {
                    cr(e, r, 0)
                },
                Cc: function(e, r, t, n, o) {
                    if (n < 0) Oe.recordError(1281);
                    else if (o) {
                        var a = qr.getInternalformatParameter(e, r, t);
                        if (null !== a)
                            for (var i = 0; i < a.length && i < n; ++i) P[o + 4 * i >> 2] = a[i]
                    } else Oe.recordError(1281)
                },
                Kc: function(e, r, t, n, o) {
                    Oe.recordError(1282)
                },
                cg: function(e, r, t, n) {
                    var o = qr.getProgramInfoLog(Oe.programs[e]);
                    null === o && (o = "(unknown error)");
                    var a = r > 0 && n ? U(o, n, r) : 0;
                    t && (P[t >> 2] = a)
                },
                dg: function(e, r, t) {
                    if (t)
                        if (e >= Oe.counter) Oe.recordError(1281);
                        else if (e = Oe.programs[e], 35716 == r) {
                        var n = qr.getProgramInfoLog(e);
                        null === n && (n = "(unknown error)"), P[t >> 2] = n.length + 1
                    } else if (35719 == r) {
                        if (!e.maxUniformLength)
                            for (var o = 0; o < qr.getProgramParameter(e, 35718); ++o) e.maxUniformLength = Math.max(e.maxUniformLength, qr.getActiveUniform(e, o).name.length + 1);
                        P[t >> 2] = e.maxUniformLength
                    } else if (35722 == r) {
                        if (!e.maxAttributeLength)
                            for (o = 0; o < qr.getProgramParameter(e, 35721); ++o) e.maxAttributeLength = Math.max(e.maxAttributeLength, qr.getActiveAttrib(e, o).name.length + 1);
                        P[t >> 2] = e.maxAttributeLength
                    } else if (35381 == r) {
                        if (!e.maxUniformBlockNameLength)
                            for (o = 0; o < qr.getProgramParameter(e, 35382); ++o) e.maxUniformBlockNameLength = Math.max(e.maxUniformBlockNameLength, qr.getActiveUniformBlockName(e, o).length + 1);
                        P[t >> 2] = e.maxUniformBlockNameLength
                    } else P[t >> 2] = qr.getProgramParameter(e, r);
                    else Oe.recordError(1281)
                },
                Ah: function(e, r, t) {
                    if (t) {
                        var n, o = Oe.queries[e];
                        sr(t, "boolean" == typeof(n = Oe.currentContext.version < 2 ? qr.disjointTimerQueryExt.getQueryObjectEXT(o, r) : qr.getQueryParameter(o, r)) ? n ? 1 : 0 : n)
                    } else Oe.recordError(1281)
                },
                Ch: function(e, r, t) {
                    if (t) {
                        var n, o = Oe.queries[e],
                            a = qr.disjointTimerQueryExt.getQueryObjectEXT(o, r);
                        n = "boolean" == typeof a ? a ? 1 : 0 : a, P[t >> 2] = n
                    } else Oe.recordError(1281)
                },
                zh: function(e, r, t) {
                    if (t) {
                        var n, o = Oe.queries[e];
                        sr(t, "boolean" == typeof(n = Oe.currentContext.version < 2 ? qr.disjointTimerQueryExt.getQueryObjectEXT(o, r) : qr.getQueryParameter(o, r)) ? n ? 1 : 0 : n)
                    } else Oe.recordError(1281)
                },
                le: function(e, r, t) {
                    if (t) {
                        var n, o = Oe.queries[e],
                            a = qr.getQueryParameter(o, r);
                        n = "boolean" == typeof a ? a ? 1 : 0 : a, P[t >> 2] = n
                    } else Oe.recordError(1281)
                },
                Bh: function(e, r, t) {
                    if (t) {
                        var n, o = Oe.queries[e],
                            a = qr.disjointTimerQueryExt.getQueryObjectEXT(o, r);
                        n = "boolean" == typeof a ? a ? 1 : 0 : a, P[t >> 2] = n
                    } else Oe.recordError(1281)
                },
                me: function(e, r, t) {
                    t ? P[t >> 2] = qr.getQuery(e, r) : Oe.recordError(1281)
                },
                Dh: function(e, r, t) {
                    t ? P[t >> 2] = qr.disjointTimerQueryExt.getQueryEXT(e, r) : Oe.recordError(1281)
                },
                bg: function(e, r, t) {
                    t ? P[t >> 2] = qr.getRenderbufferParameter(e, r) : Oe.recordError(1281)
                },
                Tc: function(e, r, t) {
                    t ? T[t >> 2] = qr.getSamplerParameter(Oe.samplers[e], r) : Oe.recordError(1281)
                },
                Uc: function(e, r, t) {
                    t ? P[t >> 2] = qr.getSamplerParameter(Oe.samplers[e], r) : Oe.recordError(1281)
                },
                $f: function(e, r, t, n) {
                    var o = qr.getShaderInfoLog(Oe.shaders[e]);
                    null === o && (o = "(unknown error)");
                    var a = r > 0 && n ? U(o, n, r) : 0;
                    t && (P[t >> 2] = a)
                },
                _f: function(e, r, t, n) {
                    var o = qr.getShaderPrecisionFormat(e, r);
                    P[t >> 2] = o.rangeMin, P[t + 4 >> 2] = o.rangeMax, P[n >> 2] = o.precision
                },
                Zf: function(e, r, t, n) {
                    var o = qr.getShaderSource(Oe.shaders[e]);
                    if (o) {
                        var a = r > 0 && n ? U(o, n, r) : 0;
                        t && (P[t >> 2] = a)
                    }
                },
                ag: function(e, r, t) {
                    if (t)
                        if (35716 == r) {
                            var n = qr.getShaderInfoLog(Oe.shaders[e]);
                            null === n && (n = "(unknown error)");
                            var o = n ? n.length + 1 : 0;
                            P[t >> 2] = o
                        } else if (35720 == r) {
                        var a = qr.getShaderSource(Oe.shaders[e]),
                            i = a ? a.length + 1 : 0;
                        P[t >> 2] = i
                    } else P[t >> 2] = qr.getShaderParameter(Oe.shaders[e], r);
                    else Oe.recordError(1281)
                },
                Yf: function(e) {
                    var r = Oe.stringCache[e];
                    if (!r) {
                        switch (e) {
                            case 7939:
                                var t = qr.getSupportedExtensions() || [];
                                r = lr((t = t.concat(t.map((function(e) {
                                    return "GL_" + e
                                })))).join(" "));
                                break;
                            case 7936:
                            case 7937:
                            case 37445:
                            case 37446:
                                var n = qr.getParameter(e);
                                n || Oe.recordError(1280), r = n && lr(n);
                                break;
                            case 7938:
                                var o = qr.getParameter(7938);
                                r = lr(o = Oe.currentContext.version >= 2 ? "OpenGL ES 3.0 (" + o + ")" : "OpenGL ES 2.0 (" + o + ")");
                                break;
                            case 35724:
                                var a = qr.getParameter(35724),
                                    i = a.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
                                null !== i && (3 == i[1].length && (i[1] = i[1] + "0"), a = "OpenGL ES GLSL ES " + i[1] + " (" + a + ")"), r = lr(a);
                                break;
                            default:
                                Oe.recordError(1280)
                        }
                        Oe.stringCache[e] = r
                    }
                    return r
                },
                vd: function(e, r) {
                    if (Oe.currentContext.version < 2) return Oe.recordError(1282), 0;
                    var t = Oe.stringiCache[e];
                    if (t) return r < 0 || r >= t.length ? (Oe.recordError(1281), 0) : t[r];
                    switch (e) {
                        case 7939:
                            var n = qr.getSupportedExtensions() || [];
                            return n = (n = n.concat(n.map((function(e) {
                                return "GL_" + e
                            })))).map((function(e) {
                                return lr(e)
                            })), t = Oe.stringiCache[e] = n, r < 0 || r >= t.length ? (Oe.recordError(1281), 0) : t[r];
                        default:
                            return Oe.recordError(1280), 0
                    }
                },
                ed: function(e, r, t, n, o) {
                    if (t < 0) Oe.recordError(1281);
                    else if (o) {
                        var a = qr.getSyncParameter(Oe.syncs[e], r);
                        null !== a && (P[o >> 2] = a, n && (P[n >> 2] = 1))
                    } else Oe.recordError(1281)
                },
                Wf: function(e, r, t) {
                    t ? T[t >> 2] = qr.getTexParameter(e, r) : Oe.recordError(1281)
                },
                Vf: function(e, r, t) {
                    t ? P[t >> 2] = qr.getTexParameter(e, r) : Oe.recordError(1281)
                },
                Rd: function(e, r, t, n, o, a, i) {
                    e = Oe.programs[e];
                    var u = qr.getTransformFeedbackVarying(e, r);
                    if (u) {
                        if (i && t > 0) {
                            var s = U(u.name, i, t);
                            n && (P[n >> 2] = s)
                        } else n && (P[n >> 2] = 0);
                        o && (P[o >> 2] = u.size), a && (P[a >> 2] = u.type)
                    }
                },
                rd: function(e, r) {
                    return qr.getUniformBlockIndex(Oe.programs[e], N(r))
                },
                td: function(e, r, t, n) {
                    if (n)
                        if (r > 0 && (0 == t || 0 == n)) Oe.recordError(1281);
                        else {
                            e = Oe.programs[e];
                            for (var o = [], a = 0; a < r; a++) o.push(N(P[t + 4 * a >> 2]));
                            var i = qr.getUniformIndices(e, o);
                            if (i) {
                                var u = i.length;
                                for (a = 0; a < u; a++) P[n + 4 * a >> 2] = i[a]
                            }
                        }
                    else Oe.recordError(1281)
                },
                Sf: function(e, r) {
                    if (r = N(r), e = Oe.programs[e]) {
                        pr(e);
                        var t = e.uniformLocsById,
                            n = 0,
                            o = r,
                            a = mr(r);
                        a > 0 && (n = dr(r.slice(a + 1)) >>> 0, o = r.slice(0, a));
                        var i = e.uniformSizeAndIdsByName[o];
                        if (i && n < i[0] && (t[n += i[1]] = t[n] || qr.getUniformLocation(e, r))) return n
                    } else Oe.recordError(1281);
                    return -1
                },
                Uf: function(e, r, t) {
                    gr(e, r, t, 2)
                },
                Tf: function(e, r, t) {
                    gr(e, r, t, 0)
                },
                Jd: function(e, r, t) {
                    gr(e, r, t, 0)
                },
                Pd: function(e, r, t) {
                    hr(e, r, t, 0)
                },
                Od: function(e, r, t) {
                    hr(e, r, t, 0)
                },
                Pf: function(e, r, t) {
                    t ? (Oe.currentContext.clientBuffers[e].enabled && p("glGetVertexAttribPointer on client-side array: not supported, bad data returned"), P[t >> 2] = qr.getVertexAttribOffset(e, r)) : Oe.recordError(1281)
                },
                Rf: function(e, r, t) {
                    hr(e, r, t, 2)
                },
                Qf: function(e, r, t) {
                    hr(e, r, t, 5)
                },
                Of: function(e, r) {
                    qr.hint(e, r)
                },
                Hc: function(e, r, t) {
                    for (var n = or[r], o = 0; o < r; o++) n[o] = P[t + 4 * o >> 2];
                    qr.invalidateFramebuffer(e, n)
                },
                Fc: function(e, r, t, n, o, a, i) {
                    for (var u = or[r], s = 0; s < r; s++) u[s] = P[t + 4 * s >> 2];
                    qr.invalidateSubFramebuffer(e, u, n, o, a, i)
                },
                Nf: function(e) {
                    var r = Oe.buffers[e];
                    return r ? qr.isBuffer(r) : 0
                },
                Lf: function(e) {
                    return qr.isEnabled(e)
                },
                Kf: function(e) {
                    var r = Oe.framebuffers[e];
                    return r ? qr.isFramebuffer(r) : 0
                },
                Jf: function(e) {
                    return (e = Oe.programs[e]) ? qr.isProgram(e) : 0
                },
                pe: function(e) {
                    var r = Oe.queries[e];
                    return r ? qr.isQuery(r) : 0
                },
                Hh: function(e) {
                    var r = Oe.queries[e];
                    return r ? qr.disjointTimerQueryExt.isQueryEXT(r) : 0
                },
                If: function(e) {
                    var r = Oe.renderbuffers[e];
                    return r ? qr.isRenderbuffer(r) : 0
                },
                _c: function(e) {
                    var r = Oe.samplers[e];
                    return r ? qr.isSampler(r) : 0
                },
                Hf: function(e) {
                    var r = Oe.shaders[e];
                    return r ? qr.isShader(r) : 0
                },
                jd: function(e) {
                    return qr.isSync(Oe.syncs[e])
                },
                Gf: function(e) {
                    var r = Oe.textures[e];
                    return r ? qr.isTexture(r) : 0
                },
                Nc: function(e) {
                    return qr.isTransformFeedback(Oe.transformFeedbacks[e])
                },
                Yd: function(e) {
                    var r = Oe.vaos[e];
                    return r ? qr.isVertexArray(r) : 0
                },
                vh: function(e) {
                    var r = Oe.vaos[e];
                    return r ? qr.isVertexArray(r) : 0
                },
                Ff: function(e) {
                    qr.lineWidth(e)
                },
                Ef: function(e) {
                    e = Oe.programs[e], qr.linkProgram(e), e.uniformLocsById = 0, e.uniformSizeAndIdsByName = {}
                },
                Mc: function() {
                    qr.pauseTransformFeedback()
                },
                Df: function(e, r) {
                    3317 == e && (Oe.unpackAlignment = r), qr.pixelStorei(e, r)
                },
                Cf: function(e, r) {
                    qr.polygonOffset(e, r)
                },
                Jc: function(e, r, t, n) {
                    Oe.recordError(1280)
                },
                Ic: function(e, r, t) {
                    Oe.recordError(1280)
                },
                Eh: function(e, r) {
                    qr.disjointTimerQueryExt.queryCounterEXT(Oe.queries[e], r)
                },
                ye: function(e) {
                    qr.readBuffer(e)
                },
                Af: function(e, r, t, n, o, a, i) {
                    if (Oe.currentContext.version >= 2)
                        if (qr.currentPixelPackBufferBinding) qr.readPixels(e, r, t, n, o, a, i);
                        else {
                            var u = br(a);
                            qr.readPixels(e, r, t, n, o, a, u, i >> yr(u))
                        }
                    else {
                        var s = wr(a, o, t, n, i);
                        s ? qr.readPixels(e, r, t, n, o, a, s) : Oe.recordError(1280)
                    }
                },
                zf: function() {},
                yf: function(e, r, t, n) {
                    qr.renderbufferStorage(e, r, t, n)
                },
                ce: function(e, r, t, n, o) {
                    qr.renderbufferStorageMultisample(e, r, t, n, o)
                },
                Lc: function() {
                    qr.resumeTransformFeedback()
                },
                xf: function(e, r) {
                    qr.sampleCoverage(e, !!r)
                },
                Wc: function(e, r, t) {
                    qr.samplerParameterf(Oe.samplers[e], r, t)
                },
                Vc: function(e, r, t) {
                    var n = T[t >> 2];
                    qr.samplerParameterf(Oe.samplers[e], r, n)
                },
                Yc: function(e, r, t) {
                    qr.samplerParameteri(Oe.samplers[e], r, t)
                },
                Xc: function(e, r, t) {
                    var n = P[t >> 2];
                    qr.samplerParameteri(Oe.samplers[e], r, n)
                },
                wf: function(e, r, t, n) {
                    qr.scissor(e, r, t, n)
                },
                vf: function() {
                    Oe.recordError(1280)
                },
                uf: function(e, r, t, n) {
                    var o = Oe.getSource(e, r, t, n);
                    qr.shaderSource(Oe.shaders[e], o)
                },
                tf: function(e, r, t) {
                    qr.stencilFunc(e, r, t)
                },
                sf: function(e, r, t, n) {
                    qr.stencilFuncSeparate(e, r, t, n)
                },
                rf: function(e) {
                    qr.stencilMask(e)
                },
                pf: function(e, r) {
                    qr.stencilMaskSeparate(e, r)
                },
                of: function(e, r, t) {
                    qr.stencilOp(e, r, t)
                },
                nf: function(e, r, t, n) {
                    qr.stencilOpSeparate(e, r, t, n)
                },
                mf: function(e, r, t, n, o, a, i, u, s) {
                    if (Oe.currentContext.version >= 2)
                        if (qr.currentPixelUnpackBufferBinding) qr.texImage2D(e, r, t, n, o, a, i, u, s);
                        else if (s) {
                        var c = br(u);
                        qr.texImage2D(e, r, t, n, o, a, i, u, c, s >> yr(c))
                    } else qr.texImage2D(e, r, t, n, o, a, i, u, null);
                    else qr.texImage2D(e, r, t, n, o, a, i, u, s ? wr(u, i, n, o, s) : null)
                },
                we: function(e, r, t, n, o, a, i, u, s, c) {
                    if (qr.currentPixelUnpackBufferBinding) qr.texImage3D(e, r, t, n, o, a, i, u, s, c);
                    else if (c) {
                        var f = br(s);
                        qr.texImage3D(e, r, t, n, o, a, i, u, s, f, c >> yr(f))
                    } else qr.texImage3D(e, r, t, n, o, a, i, u, s, null)
                },
                lf: function(e, r, t) {
                    qr.texParameterf(e, r, t)
                },
                kf: function(e, r, t) {
                    var n = T[t >> 2];
                    qr.texParameterf(e, r, n)
                },
                jf: function(e, r, t) {
                    qr.texParameteri(e, r, t)
                },
                hf: function(e, r, t) {
                    var n = P[t >> 2];
                    qr.texParameteri(e, r, n)
                },
                Ec: function(e, r, t, n, o) {
                    qr.texStorage2D(e, r, t, n, o)
                },
                Dc: function(e, r, t, n, o, a) {
                    qr.texStorage3D(e, r, t, n, o, a)
                },
                gf: function(e, r, t, n, o, a, i, u, s) {
                    if (Oe.currentContext.version >= 2)
                        if (qr.currentPixelUnpackBufferBinding) qr.texSubImage2D(e, r, t, n, o, a, i, u, s);
                        else if (s) {
                        var c = br(u);
                        qr.texSubImage2D(e, r, t, n, o, a, i, u, c, s >> yr(c))
                    } else qr.texSubImage2D(e, r, t, n, o, a, i, u, null);
                    else {
                        var f = null;
                        s && (f = wr(u, i, o, a, s)), qr.texSubImage2D(e, r, t, n, o, a, i, u, f)
                    }
                },
                ve: function(e, r, t, n, o, a, i, u, s, c, f) {
                    if (qr.currentPixelUnpackBufferBinding) qr.texSubImage3D(e, r, t, n, o, a, i, u, s, c, f);
                    else if (f) {
                        var l = br(c);
                        qr.texSubImage3D(e, r, t, n, o, a, i, u, s, c, l, f >> yr(l))
                    } else qr.texSubImage3D(e, r, t, n, o, a, i, u, s, c, null)
                },
                Sd: function(e, r, t, n) {
                    e = Oe.programs[e];
                    for (var o = [], a = 0; a < r; a++) o.push(N(P[t + 4 * a >> 2]));
                    qr.transformFeedbackVaryings(e, o, n)
                },
                ff: function(e, r) {
                    qr.uniform1f(vr(e), r)
                },
                ef: function(e, r, t) {
                    if (Oe.currentContext.version >= 2) qr.uniform1fv(vr(e), T, t >> 2, r);
                    else {
                        if (r <= 288)
                            for (var n = xr[r - 1], o = 0; o < r; ++o) n[o] = T[t + 4 * o >> 2];
                        else n = T.subarray(t >> 2, t + 4 * r >> 2);
                        qr.uniform1fv(vr(e), n)
                    }
                },
                df: function(e, r) {
                    qr.uniform1i(vr(e), r)
                },
                cf: function(e, r, t) {
                    if (Oe.currentContext.version >= 2) qr.uniform1iv(vr(e), P, t >> 2, r);
                    else {
                        if (r <= 288)
                            for (var n = Er[r - 1], o = 0; o < r; ++o) n[o] = P[t + 4 * o >> 2];
                        else n = P.subarray(t >> 2, t + 4 * r >> 2);
                        qr.uniform1iv(vr(e), n)
                    }
                },
                Hd: function(e, r) {
                    qr.uniform1ui(vr(e), r)
                },
                Dd: function(e, r, t) {
                    qr.uniform1uiv(vr(e), F, t >> 2, r)
                },
                bf: function(e, r, t) {
                    qr.uniform2f(vr(e), r, t)
                },
                af: function(e, r, t) {
                    if (Oe.currentContext.version >= 2) qr.uniform2fv(vr(e), T, t >> 2, 2 * r);
                    else {
                        if (r <= 144)
                            for (var n = xr[2 * r - 1], o = 0; o < 2 * r; o += 2) n[o] = T[t + 4 * o >> 2], n[o + 1] = T[t + (4 * o + 4) >> 2];
                        else n = T.subarray(t >> 2, t + 8 * r >> 2);
                        qr.uniform2fv(vr(e), n)
                    }
                },
                $e: function(e, r, t) {
                    qr.uniform2i(vr(e), r, t)
                },
                _e: function(e, r, t) {
                    if (Oe.currentContext.version >= 2) qr.uniform2iv(vr(e), P, t >> 2, 2 * r);
                    else {
                        if (r <= 144)
                            for (var n = Er[2 * r - 1], o = 0; o < 2 * r; o += 2) n[o] = P[t + 4 * o >> 2], n[o + 1] = P[t + (4 * o + 4) >> 2];
                        else n = P.subarray(t >> 2, t + 8 * r >> 2);
                        qr.uniform2iv(vr(e), n)
                    }
                },
                Gd: function(e, r, t) {
                    qr.uniform2ui(vr(e), r, t)
                },
                Cd: function(e, r, t) {
                    qr.uniform2uiv(vr(e), F, t >> 2, 2 * r)
                },
                Ze: function(e, r, t, n) {
                    qr.uniform3f(vr(e), r, t, n)
                },
                Ye: function(e, r, t) {
                    if (Oe.currentContext.version >= 2) qr.uniform3fv(vr(e), T, t >> 2, 3 * r);
                    else {
                        if (r <= 96)
                            for (var n = xr[3 * r - 1], o = 0; o < 3 * r; o += 3) n[o] = T[t + 4 * o >> 2], n[o + 1] = T[t + (4 * o + 4) >> 2], n[o + 2] = T[t + (4 * o + 8) >> 2];
                        else n = T.subarray(t >> 2, t + 12 * r >> 2);
                        qr.uniform3fv(vr(e), n)
                    }
                },
                Xe: function(e, r, t, n) {
                    qr.uniform3i(vr(e), r, t, n)
                },
                We: function(e, r, t) {
                    if (Oe.currentContext.version >= 2) qr.uniform3iv(vr(e), P, t >> 2, 3 * r);
                    else {
                        if (r <= 96)
                            for (var n = Er[3 * r - 1], o = 0; o < 3 * r; o += 3) n[o] = P[t + 4 * o >> 2], n[o + 1] = P[t + (4 * o + 4) >> 2], n[o + 2] = P[t + (4 * o + 8) >> 2];
                        else n = P.subarray(t >> 2, t + 12 * r >> 2);
                        qr.uniform3iv(vr(e), n)
                    }
                },
                Fd: function(e, r, t, n) {
                    qr.uniform3ui(vr(e), r, t, n)
                },
                Bd: function(e, r, t) {
                    qr.uniform3uiv(vr(e), F, t >> 2, 3 * r)
                },
                Ve: function(e, r, t, n, o) {
                    qr.uniform4f(vr(e), r, t, n, o)
                },
                Ue: function(e, r, t) {
                    if (Oe.currentContext.version >= 2) qr.uniform4fv(vr(e), T, t >> 2, 4 * r);
                    else {
                        if (r <= 72) {
                            var n = xr[4 * r - 1],
                                o = T;
                            t >>= 2;
                            for (var a = 0; a < 4 * r; a += 4) {
                                var i = t + a;
                                n[a] = o[i], n[a + 1] = o[i + 1], n[a + 2] = o[i + 2], n[a + 3] = o[i + 3]
                            }
                        } else n = T.subarray(t >> 2, t + 16 * r >> 2);
                        qr.uniform4fv(vr(e), n)
                    }
                },
                Te: function(e, r, t, n, o) {
                    qr.uniform4i(vr(e), r, t, n, o)
                },
                Se: function(e, r, t) {
                    if (Oe.currentContext.version >= 2) qr.uniform4iv(vr(e), P, t >> 2, 4 * r);
                    else {
                        if (r <= 72)
                            for (var n = Er[4 * r - 1], o = 0; o < 4 * r; o += 4) n[o] = P[t + 4 * o >> 2], n[o + 1] = P[t + (4 * o + 4) >> 2], n[o + 2] = P[t + (4 * o + 8) >> 2], n[o + 3] = P[t + (4 * o + 12) >> 2];
                        else n = P.subarray(t >> 2, t + 16 * r >> 2);
                        qr.uniform4iv(vr(e), n)
                    }
                },
                Ed: function(e, r, t, n, o) {
                    qr.uniform4ui(vr(e), r, t, n, o)
                },
                Ad: function(e, r, t) {
                    qr.uniform4uiv(vr(e), F, t >> 2, 4 * r)
                },
                od: function(e, r, t) {
                    e = Oe.programs[e], qr.uniformBlockBinding(e, r, t)
                },
                Re: function(e, r, t, n) {
                    if (Oe.currentContext.version >= 2) qr.uniformMatrix2fv(vr(e), !!t, T, n >> 2, 4 * r);
                    else {
                        if (r <= 72)
                            for (var o = xr[4 * r - 1], a = 0; a < 4 * r; a += 4) o[a] = T[n + 4 * a >> 2], o[a + 1] = T[n + (4 * a + 4) >> 2], o[a + 2] = T[n + (4 * a + 8) >> 2], o[a + 3] = T[n + (4 * a + 12) >> 2];
                        else o = T.subarray(n >> 2, n + 16 * r >> 2);
                        qr.uniformMatrix2fv(vr(e), !!t, o)
                    }
                },
                je: function(e, r, t, n) {
                    qr.uniformMatrix2x3fv(vr(e), !!t, T, n >> 2, 6 * r)
                },
                he: function(e, r, t, n) {
                    qr.uniformMatrix2x4fv(vr(e), !!t, T, n >> 2, 8 * r)
                },
                Qe: function(e, r, t, n) {
                    if (Oe.currentContext.version >= 2) qr.uniformMatrix3fv(vr(e), !!t, T, n >> 2, 9 * r);
                    else {
                        if (r <= 32)
                            for (var o = xr[9 * r - 1], a = 0; a < 9 * r; a += 9) o[a] = T[n + 4 * a >> 2], o[a + 1] = T[n + (4 * a + 4) >> 2], o[a + 2] = T[n + (4 * a + 8) >> 2], o[a + 3] = T[n + (4 * a + 12) >> 2], o[a + 4] = T[n + (4 * a + 16) >> 2], o[a + 5] = T[n + (4 * a + 20) >> 2], o[a + 6] = T[n + (4 * a + 24) >> 2], o[a + 7] = T[n + (4 * a + 28) >> 2], o[a + 8] = T[n + (4 * a + 32) >> 2];
                        else o = T.subarray(n >> 2, n + 36 * r >> 2);
                        qr.uniformMatrix3fv(vr(e), !!t, o)
                    }
                },
                ie: function(e, r, t, n) {
                    qr.uniformMatrix3x2fv(vr(e), !!t, T, n >> 2, 6 * r)
                },
                fe: function(e, r, t, n) {
                    qr.uniformMatrix3x4fv(vr(e), !!t, T, n >> 2, 12 * r)
                },
                Pe: function(e, r, t, n) {
                    if (Oe.currentContext.version >= 2) qr.uniformMatrix4fv(vr(e), !!t, T, n >> 2, 16 * r);
                    else {
                        if (r <= 18) {
                            var o = xr[16 * r - 1],
                                a = T;
                            n >>= 2;
                            for (var i = 0; i < 16 * r; i += 16) {
                                var u = n + i;
                                o[i] = a[u], o[i + 1] = a[u + 1], o[i + 2] = a[u + 2], o[i + 3] = a[u + 3], o[i + 4] = a[u + 4], o[i + 5] = a[u + 5], o[i + 6] = a[u + 6], o[i + 7] = a[u + 7], o[i + 8] = a[u + 8], o[i + 9] = a[u + 9], o[i + 10] = a[u + 10], o[i + 11] = a[u + 11], o[i + 12] = a[u + 12], o[i + 13] = a[u + 13], o[i + 14] = a[u + 14], o[i + 15] = a[u + 15]
                            }
                        } else o = T.subarray(n >> 2, n + 64 * r >> 2);
                        qr.uniformMatrix4fv(vr(e), !!t, o)
                    }
                },
                ge: function(e, r, t, n) {
                    qr.uniformMatrix4x2fv(vr(e), !!t, T, n >> 2, 8 * r)
                },
                ee: function(e, r, t, n) {
                    qr.uniformMatrix4x3fv(vr(e), !!t, T, n >> 2, 12 * r)
                },
                Oe: function(e) {
                    e = Oe.programs[e], qr.useProgram(e), qr.currentProgram = e
                },
                Ne: function(e) {
                    qr.validateProgram(Oe.programs[e])
                },
                Me: function(e, r) {
                    qr.vertexAttrib1f(e, r)
                },
                Le: function(e, r) {
                    qr.vertexAttrib1f(e, T[r >> 2])
                },
                Ke: function(e, r, t) {
                    qr.vertexAttrib2f(e, r, t)
                },
                Je: function(e, r) {
                    qr.vertexAttrib2f(e, T[r >> 2], T[r + 4 >> 2])
                },
                Ie: function(e, r, t, n) {
                    qr.vertexAttrib3f(e, r, t, n)
                },
                He: function(e, r) {
                    qr.vertexAttrib3f(e, T[r >> 2], T[r + 4 >> 2], T[r + 8 >> 2])
                },
                Ge: function(e, r, t, n, o) {
                    qr.vertexAttrib4f(e, r, t, n, o)
                },
                Fe: function(e, r) {
                    qr.vertexAttrib4f(e, T[r >> 2], T[r + 4 >> 2], T[r + 8 >> 2], T[r + 12 >> 2])
                },
                Sc: function(e, r) {
                    qr.vertexAttribDivisor(e, r)
                },
                rh: function(e, r) {
                    qr.vertexAttribDivisor(e, r)
                },
                Ac: function(e, r) {
                    qr.vertexAttribDivisor(e, r)
                },
                Ce: function(e, r) {
                    qr.vertexAttribDivisor(e, r)
                },
                Bc: function(e, r) {
                    qr.vertexAttribDivisor(e, r)
                },
                Nd: function(e, r, t, n, o) {
                    qr.vertexAttribI4i(e, r, t, n, o)
                },
                Ld: function(e, r) {
                    qr.vertexAttribI4i(e, P[r >> 2], P[r + 4 >> 2], P[r + 8 >> 2], P[r + 12 >> 2])
                },
                Md: function(e, r, t, n, o) {
                    qr.vertexAttribI4ui(e, r, t, n, o)
                },
                Kd: function(e, r) {
                    qr.vertexAttribI4ui(e, F[r >> 2], F[r + 4 >> 2], F[r + 8 >> 2], F[r + 12 >> 2])
                },
                Qd: function(e, r, t, n, o) {
                    qr.vertexAttribIPointer(e, r, t, n, o)
                },
                Ee: function(e, r, t, n, o, a) {
                    var i = Oe.currentContext.clientBuffers[e];
                    if (!qr.currentArrayBufferBinding) return i.size = r, i.type = t, i.normalized = n, i.stride = o, i.ptr = a, i.clientside = !0, void(i.vertexAttribPointerAdaptor = function(e, r, t, n, o, a) {
                        this.vertexAttribPointer(e, r, t, n, o, a)
                    });
                    i.clientside = !1, qr.vertexAttribPointer(e, r, t, !!n, o, a)
                },
                De: function(e, r, t, n) {
                    qr.viewport(e, r, t, n)
                },
                gd: function(e, r, t, n) {
                    qr.waitSync(Oe.syncs[e], r, nr(t, n))
                },
                Ma: function() {
                    return 0
                },
                Mh: function() {
                    return !0
                },
                S: function(e, r, t) {
                    Ar(e, M(function(e, r) {
                        var t = e,
                            n = r;

                        function o(e) {
                            var r;
                            return n = function(e, r) {
                                return "double" !== r && "i64" !== r || 7 & e && (e += 4), e
                            }(n, e), "double" === e ? (r = Number(I[n >> 3]), n += 8) : "i64" == e ? (r = [P[n >> 2], P[n + 4 >> 2]], n += 8) : (e = "i32", r = P[n >> 2], n += 4), r
                        }
                        for (var a, i, u, s, c = [];;) {
                            var f = t;
                            if (0 === (a = L[t >> 0])) break;
                            if (i = L[t + 1 >> 0], 37 == a) {
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
                                    t++, i = L[t + 1 >> 0]
                                }
                                var g = 0;
                                if (42 == i) g = o("i32"), t++, i = L[t + 1 >> 0];
                                else
                                    for (; i >= 48 && i <= 57;) g = 10 * g + (i - 48), t++, i = L[t + 1 >> 0];
                                var h, b = !1,
                                    y = -1;
                                if (46 == i) {
                                    if (y = 0, b = !0, t++, 42 == (i = L[t + 1 >> 0])) y = o("i32"), t++;
                                    else
                                        for (;;) {
                                            var w = L[t + 1 >> 0];
                                            if (w < 48 || w > 57) break;
                                            y = 10 * y + (w - 48), t++
                                        }
                                    i = L[t + 1 >> 0]
                                }
                                switch (y < 0 && (y = 6, b = !1), String.fromCharCode(i)) {
                                    case "h":
                                        104 == L[t + 2 >> 0] ? (t++, h = 1) : h = 2;
                                        break;
                                    case "l":
                                        108 == L[t + 2 >> 0] ? (t++, h = 8) : h = 4;
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
                                switch (h && t++, i = L[t + 1 >> 0], String.fromCharCode(i)) {
                                    case "d":
                                    case "i":
                                    case "u":
                                    case "o":
                                    case "x":
                                    case "X":
                                    case "p":
                                        var x = 100 == i || 105 == i;
                                        u = o("i" + 8 * (h = h || 4)), 8 == h && (u = 117 == i ? (u[0] >>> 0) + 4294967296 * (u[1] >>> 0) : nr(u[0], u[1])), h <= 4 && (u = (x ? kr : Cr)(u & Math.pow(256, h) - 1, 8 * h));
                                        var E = Math.abs(u),
                                            k = "";
                                        if (100 == i || 105 == i) A = kr(u, 8 * h).toString(10);
                                        else if (117 == i) A = Cr(u, 8 * h).toString(10), u = Math.abs(u);
                                        else if (111 == i) A = (m ? "0" : "") + E.toString(8);
                                        else if (120 == i || 88 == i) {
                                            if (k = m && 0 != u ? "0x" : "", u < 0) {
                                                u = -u, A = (E - 1).toString(16);
                                                for (var C = [], S = 0; S < A.length; S++) C.push((15 - parseInt(A[S], 16)).toString(16));
                                                for (A = C.join(""); A.length < 2 * h;) A = "f" + A
                                            } else A = E.toString(16);
                                            88 == i && (k = k.toUpperCase(), A = A.toUpperCase())
                                        } else 112 == i && (0 === E ? A = "(nil)" : (k = "0x", A = E.toString(16)));
                                        if (b)
                                            for (; A.length < y;) A = "0" + A;
                                        for (u >= 0 && (l ? k = "+" + k : v && (k = " " + k)), "-" == A.charAt(0) && (k = "-" + k, A = A.substr(1)); k.length + A.length < g;) d ? A += " " : p ? A = "0" + A : k = " " + k;
                                        (A = k + A).split("").forEach((function(e) {
                                            c.push(e.charCodeAt(0))
                                        }));
                                        break;
                                    case "f":
                                    case "F":
                                    case "e":
                                    case "E":
                                    case "g":
                                    case "G":
                                        var A;
                                        if (u = o("double"), isNaN(u)) A = "nan", p = !1;
                                        else if (isFinite(u)) {
                                            var _ = !1,
                                                D = Math.min(y, 20);
                                            if (103 == i || 71 == i) {
                                                _ = !0, y = y || 1;
                                                var F = parseInt(u.toExponential(D).split("e")[1], 10);
                                                y > F && F >= -4 ? (i = (103 == i ? "f" : "F").charCodeAt(0), y -= F + 1) : (i = (103 == i ? "e" : "E").charCodeAt(0), y--), D = Math.min(y, 20)
                                            }
                                            101 == i || 69 == i ? (A = u.toExponential(D), /[eE][-+]\d$/.test(A) && (A = A.slice(0, -1) + "0" + A.slice(-1))) : 102 != i && 70 != i || (A = u.toFixed(D), 0 === u && ((s = u) < 0 || 0 === s && 1 / s == -1 / 0) && (A = "-" + A));
                                            var T = A.split("e");
                                            if (_ && !m)
                                                for (; T[0].length > 1 && T[0].includes(".") && ("0" == T[0].slice(-1) || "." == T[0].slice(-1));) T[0] = T[0].slice(0, -1);
                                            else
                                                for (m && -1 == A.indexOf(".") && (T[0] += "."); y > D++;) T[0] += "0";
                                            A = T[0] + (T.length > 1 ? "e" + T[1] : ""), 69 == i && (A = A.toUpperCase()), u >= 0 && (l ? A = "+" + A : v && (A = " " + A))
                                        } else A = (u < 0 ? "-" : "") + "inf", p = !1;
                                        for (; A.length < g;) d ? A += " " : A = !p || "-" != A[0] && "+" != A[0] ? (p ? "0" : " ") + A : A[0] + "0" + A.slice(1);
                                        i < 97 && (A = A.toUpperCase()), A.split("").forEach((function(e) {
                                            c.push(e.charCodeAt(0))
                                        }));
                                        break;
                                    case "s":
                                        var R = o("i8*"),
                                            M = R ? Zr(R) : "(null)".length;
                                        if (b && (M = Math.min(M, y)), !d)
                                            for (; M < g--;) c.push(32);
                                        if (R)
                                            for (S = 0; S < M; S++) c.push(B[R++ >> 0]);
                                        else c = c.concat(Yr("(null)".substr(0, M), !0));
                                        if (d)
                                            for (; M < g--;) c.push(32);
                                        break;
                                    case "c":
                                        for (d && c.push(o("i8")); --g > 0;) c.push(32);
                                        d || c.push(o("i8"));
                                        break;
                                    case "n":
                                        var N = o("i32*");
                                        P[N >> 2] = c.length;
                                        break;
                                    case "%":
                                        c.push(a);
                                        break;
                                    default:
                                        for (S = f; S < t + 2; S++) c.push(L[S >> 0])
                                }
                                t += 2
                            } else c.push(a), t += 1
                        }
                        return c
                    }(r, t), 0))
                },
                uc: function(e, r, t) {
                    B.copyWithin(e, r, r + t)
                },
                Mb: function(e, r, t) {
                    return function(e, r) {
                        return ze.fullscreenEnabled() ? (e = Ge(e)) ? e.requestFullscreen || e.webkitRequestFullscreen ? ze.canPerformEventHandlerRequests() ? Ze(e, r) : r.deferUntilInEventHandler ? (ze.deferCall(Ze, 1, [e, r]), 1) : -2 : -3 : -4 : -1
                    }(e, {
                        scaleMode: P[t >> 2],
                        canvasResolutionScaleMode: P[t + 4 >> 2],
                        filteringMode: P[t + 8 >> 2],
                        deferUntilInEventHandler: r,
                        canvasResizedCallback: P[t + 12 >> 2],
                        canvasResizedCallbackUserData: P[t + 16 >> 2]
                    })
                },
                rb: function(e, r) {
                    return (e = Ge(e)) ? e.requestPointerLock || e.msRequestPointerLock ? ze.canPerformEventHandlerRequests() ? Je(e) : r ? (ze.deferCall(Je, 2, [e]), 1) : -2 : -1 : -4
                },
                gc: function(e) {
                    var r, t, n = B.length,
                        o = 2147483648;
                    if ((e >>>= 0) > o) return !1;
                    for (var a = 1; a <= 4; a *= 2) {
                        var i = n * (1 + .2 / a);
                        if (i = Math.min(i, e + 100663296), Lr(Math.min(o, ((r = Math.max(e, i)) % (t = 65536) > 0 && (r += t - r % t), r)))) return !0
                    }
                    return !1
                },
                wb: function() {
                    return (ze.lastGamepadState = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : null) ? 0 : -1
                },
                Ha: function(e, r, t) {
                    return "undefined" == typeof onbeforeunload ? -1 : 1 !== t ? -5 : (function(e, r, t, n, o, a) {
                        var i = {
                            target: Ge(e),
                            eventTypeString: a,
                            callbackfunc: n,
                            handlerFunc: function(e) {
                                var t = e || event,
                                    a = ve(n)(o, 0, r);
                                if (a && (a = N(a)), a) return t.preventDefault(), t.returnValue = a, a
                            },
                            useCapture: t
                        };
                        ze.registerOrRemoveHandler(i)
                    }(2, e, !0, r, 28, "beforeunload"), 0)
                },
                pb: function(e, r, t, n, o) {
                    return Br(e, r, t, n, 12, "blur"), 0
                },
                oh: function(e) {
                    if (r.gid = N(e), window.dataLayer) r.ga = function() {
                        window.dataLayer.push(arguments)
                    };
                    else {
                        const e = document.createElement("script");
                        e.async = 1, e.src = "//www.googletagmanager.com/gtag/js?id=" + r.gid, void(e), window.dataLayer = window.dataLayer || [], r.ga = function() {
                            window.dataLayer.push(arguments)
                        }, r.ga("js", new Date)
                    }
                    r.ga("config", r.gid, {
                        send_page_view: !1
                    })
                },
                na: Xe,
                Ia: function(e, r, t) {
                    return (e = Ge(e)) ? (e.style.width = r + "px", e.style.height = t + "px", 0) : -4
                },
                qb: function(e, r, t, n, o) {
                    return Br(e, r, t, n, 13, "focus"), 0
                },
                Ea: function(e, r, t, n, o) {
                    return ze.fullscreenEnabled() ? (e = Ge(e)) ? (_r(e, r, t, n, 19, "fullscreenchange"), _r(e, r, t, n, 19, "webkitfullscreenchange"), 0) : -4 : -1
                },
                ub: function(e, r, t, n) {
                    return navigator.getGamepads || navigator.webkitGetGamepads ? (Dr(2, e, r, t, 26, "gamepadconnected"), 0) : -1
                },
                tb: function(e, r, t, n) {
                    return navigator.getGamepads || navigator.webkitGetGamepads ? (Dr(2, e, r, t, 27, "gamepaddisconnected"), 0) : -1
                },
                nb: function(e, r, t, n, o) {
                    return Pr(e, r, t, n, 2, "keydown"), 0
                },
                lb: function(e, r, t, n, o) {
                    return Pr(e, r, t, n, 1, "keypress"), 0
                },
                ib: function(e, r, t, n, o) {
                    return Pr(e, r, t, n, 3, "keyup"), 0
                },
                Ag: function(e, r, t, n) {
                    Pe((function() {
                        ve(e)(r)
                    }), t, n, r)
                },
                Ua: function(e, r, t, n, o) {
                    return Tr(e, r, t, n, 5, "mousedown"), 0
                },
                Ra: function(e, r, t, n, o) {
                    return Tr(e, r, t, n, 33, "mouseenter"), 0
                },
                Qa: function(e, r, t, n, o) {
                    return Tr(e, r, t, n, 34, "mouseleave"), 0
                },
                Sa: function(e, r, t, n, o) {
                    return Tr(e, r, t, n, 8, "mousemove"), 0
                },
                Va: function(e, r, t, n, o) {
                    return Tr(e, r, t, n, 6, "mouseup"), 0
                },
                mb: function(e, r, t, n, o) {
                    return document && document.body && (document.body.requestPointerLock || document.body.mozRequestPointerLock || document.body.webkitRequestPointerLock || document.body.msRequestPointerLock) ? (e = Ge(e)) ? (Ir(e, r, t, n, 20, "pointerlockchange"), Ir(e, r, t, n, 20, "mozpointerlockchange"), Ir(e, r, t, n, 20, "webkitpointerlockchange"), Ir(e, r, t, n, 20, "mspointerlockchange"), 0) : -4 : -1
                },
                kb: function(e, r, t, n, o) {
                    return function(e, r, t, n, o, a, i) {
                        ze.uiEvent || (ze.uiEvent = et(36));
                        var u = {
                            target: e = Ge(e),
                            eventTypeString: a,
                            callbackfunc: n,
                            handlerFunc: function(t) {
                                var a = t || event;
                                if (a.target == e) {
                                    var i = document.body;
                                    if (i) {
                                        var u = ze.uiEvent;
                                        P[u >> 2] = a.detail, P[u + 4 >> 2] = i.clientWidth, P[u + 8 >> 2] = i.clientHeight, P[u + 12 >> 2] = innerWidth, P[u + 16 >> 2] = innerHeight, P[u + 20 >> 2] = outerWidth, P[u + 24 >> 2] = outerHeight, P[u + 28 >> 2] = pageXOffset, P[u + 32 >> 2] = pageYOffset, ve(n)(o, u, r) && a.preventDefault()
                                    }
                                }
                            },
                            useCapture: t
                        };
                        ze.registerOrRemoveHandler(u)
                    }(e, r, t, n, 10, "resize"), 0
                },
                ob: function(e, r, t, n, o) {
                    return Rr(e, r, t, n, 25, "touchcancel"), 0
                },
                Ka: function(e, r, t, n, o) {
                    return Rr(e, r, t, n, 23, "touchend"), 0
                },
                Ja: function(e, r, t, n, o) {
                    return Rr(e, r, t, n, 24, "touchmove"), 0
                },
                Na: function(e, r, t, n, o) {
                    return Rr(e, r, t, n, 22, "touchstart"), 0
                },
                jb: function(e, r, t, n) {
                    return Mr(qe[1], e, r, t, 21, "visibilitychange"), 0
                },
                Pa: function(e, r, t, n, o) {
                    return void 0 !== (e = Ge(e)).onwheel ? (function(e, r, t, n, o, a, i) {
                        ze.wheelEvent || (ze.wheelEvent = et(104));
                        var u = {
                            target: e,
                            allowsDeferredCalls: !0,
                            eventTypeString: a,
                            callbackfunc: n,
                            handlerFunc: function(t) {
                                var a = t || event,
                                    i = ze.wheelEvent;
                                Fr(i, a, e), I[i + 72 >> 3] = a.deltaX, I[i + 80 >> 3] = a.deltaY, I[i + 88 >> 3] = a.deltaZ, P[i + 96 >> 2] = a.deltaMode, ve(n)(o, i, r) && a.preventDefault()
                            },
                            useCapture: t
                        };
                        ze.registerOrRemoveHandler(u)
                    }(e, r, t, n, 9, "wheel"), 0) : -1
                },
                Oh: function(e) {
                    u(function(e) {
                        for (var r = "";;) {
                            var t = B[e++ >> 0];
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
                        i = N(a),
                        u = F[a + 36 >> 2],
                        s = F[a + 40 >> 2],
                        c = F[a + 44 >> 2],
                        f = F[a + 48 >> 2],
                        l = F[a + 52 >> 2],
                        d = !!(4 & l),
                        m = !!(32 & l),
                        p = !!(16 & l),
                        v = !!(64 & l),
                        g = (e, t, n) => {
                            Fe((() => {
                                u ? ve(u)(e) : r && r(e)
                            }), v)
                        },
                        h = (e, r, t) => {
                            Fe((() => {
                                c ? ve(c)(e) : n && n(e)
                            }), v)
                        },
                        b = (e, r, n) => {
                            Fe((() => {
                                s ? ve(s)(e) : t && t(e)
                            }), v)
                        },
                        y = (e, r, t) => {
                            Fe((() => {
                                f ? ve(f)(e) : o && o(e)
                            }), v)
                        },
                        w = (e, t, n) => {
                            Ur(Nr.dbInstance, e, t.response, ((e, t, n) => {
                                Fe((() => {
                                    u ? ve(u)(e) : r && r(e)
                                }), v)
                            }), ((e, t, n) => {
                                Fe((() => {
                                    u ? ve(u)(e) : r && r(e)
                                }), v)
                            }))
                        };
                    if ("EM_IDB_STORE" === i) {
                        var x = F[a + 84 >> 2];
                        Ur(Nr.dbInstance, e, B.slice(x, x + F[a + 88 >> 2]), g, b)
                    } else if ("EM_IDB_DELETE" === i) ! function(e, r, t, n) {
                        if (e) {
                            var o = F[r + 112 + 64 >> 2];
                            o || (o = F[r + 8 >> 2]);
                            var a = N(o);
                            try {
                                var i = e.transaction(["FILES"], "readwrite").objectStore("FILES").delete(a);
                                i.onsuccess = e => {
                                    var n = e.target.result;
                                    F[r + 12 >> 2] = 0, Nr.setu64(r + 16, 0), Nr.setu64(r + 24, 0), Nr.setu64(r + 32, 0), D[r + 40 >> 1] = 4, D[r + 42 >> 1] = 200, U("OK", r + 44, 64), t(r, 0, n)
                                }, i.onerror = e => {
                                    D[r + 40 >> 1] = 4, D[r + 42 >> 1] = 404, U("Not Found", r + 44, 64), n(r, 0, e)
                                }
                            } catch (e) {
                                n(r, 0, e)
                            }
                        } else n(r, 0, "IndexedDB not available!")
                    }(Nr.dbInstance, e, g, b);
                    else if (p) {
                        if (m) return 0;
                        Or(e, d ? w : g, b, h, y)
                    } else ! function(e, r, t, n) {
                        if (e) {
                            var o = F[r + 112 + 64 >> 2];
                            o || (o = F[r + 8 >> 2]);
                            var a = N(o);
                            try {
                                var i = e.transaction(["FILES"], "readonly").objectStore("FILES").get(a);
                                i.onsuccess = e => {
                                    if (e.target.result) {
                                        var o = e.target.result,
                                            a = o.byteLength || o.length,
                                            i = et(a);
                                        B.set(new Uint8Array(o), i), F[r + 12 >> 2] = i, Nr.setu64(r + 16, a), Nr.setu64(r + 24, 0), Nr.setu64(r + 32, a), D[r + 40 >> 1] = 4, D[r + 42 >> 1] = 200, U("OK", r + 44, 64), t(r, 0, o)
                                    } else D[r + 40 >> 1] = 4, D[r + 42 >> 1] = 404, U("Not Found", r + 44, 64), n(r, 0, "no data")
                                }, i.onerror = e => {
                                    D[r + 40 >> 1] = 4, D[r + 42 >> 1] = 404, U("Not Found", r + 44, 64), n(r, 0, e)
                                }
                            } catch (e) {
                                n(r, 0, e)
                            }
                        } else n(r, 0, "IndexedDB not available!")
                    }(Nr.dbInstance, e, g, m ? b : d ? (e, r, t) => {
                        Or(e, w, b, h, y)
                    } : (e, r, t) => {
                        Or(e, g, b, h, y)
                    });
                    return e
                },
                ic: function(e, r) {
                    var t = 0;
                    return jr().forEach((function(n, o) {
                        var a = r + t;
                        P[e + 4 * o >> 2] = a,
                            function(e, r, t) {
                                for (var n = 0; n < e.length; ++n) L[r++ >> 0] = e.charCodeAt(n);
                                t || (L[r >> 0] = 0)
                            }(n, a), t += n.length + 1
                    })), 0
                },
                jc: function(e, r) {
                    var t = jr();
                    P[e >> 2] = t.length;
                    var n = 0;
                    return t.forEach((function(e) {
                        n += e.length + 1
                    })), P[r >> 2] = n, 0
                },
                hb: De,
                db: function(e) {
                    try {
                        var r = Be.getStreamFromFD(e);
                        return Le.close(r), 0
                    } catch (e) {
                        if (void 0 === Le || !(e instanceof Le.ErrnoError)) throw e;
                        return e.errno
                    }
                },
                nc: function(e, r, t, n) {
                    try {
                        var o = Be.getStreamFromFD(e),
                            a = Be.doReadv(o, r, t);
                        return P[n >> 2] = a, 0
                    } catch (e) {
                        if (void 0 === Le || !(e instanceof Le.ErrnoError)) throw e;
                        return e.errno
                    }
                },
                ec: function(e, r, t, n, o) {
                    try {
                        var a = Be.getStreamFromFD(e),
                            i = 4294967296 * t + (r >>> 0),
                            u = 9007199254740992;
                        return i <= -u || i >= u ? -61 : (Le.llseek(a, i, n), ue = [a.position >>> 0, (ie = a.position, +Math.abs(ie) >= 1 ? ie > 0 ? (0 | Math.min(+Math.floor(ie / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((ie - +(~~ie >>> 0)) / 4294967296) >>> 0 : 0)], P[o >> 2] = ue[0], P[o + 4 >> 2] = ue[1], a.getdents && 0 === i && 0 === n && (a.getdents = null), 0)
                    } catch (e) {
                        if (void 0 === Le || !(e instanceof Le.ErrnoError)) throw e;
                        return e.errno
                    }
                },
                fb: function(e, r, t, n) {
                    try {
                        var o = Be.getStreamFromFD(e),
                            a = Be.doWritev(o, r, t);
                        return P[n >> 2] = a, 0
                    } catch (e) {
                        if (void 0 === Le || !(e instanceof Le.ErrnoError)) throw e;
                        return e.errno
                    }
                },
                a: function() {
                    return h
                },
                ma: function(e) {
                    var r = 1665224871000;
                    return P[e >> 2] = r / 1e3 | 0, P[e + 4 >> 2] = r % 1e3 * 1e3 | 0, 0
                },
                w: function(e) {
                    qr.activeTexture(e)
                },
                Ca: function(e, r) {
                    qr.attachShader(Oe.programs[e], Oe.shaders[r])
                },
                hi: function(e, r, t) {
                    qr.bindAttribLocation(Oe.programs[e], r, N(t))
                },
                n: function(e, r) {
                    34962 == e ? qr.currentArrayBufferBinding = r : 34963 == e && (qr.currentElementArrayBufferBinding = r), 35051 == e ? qr.currentPixelPackBufferBinding = r : 35052 == e && (qr.currentPixelUnpackBufferBinding = r), qr.bindBuffer(e, Oe.buffers[r])
                },
                ka: function(e, r) {
                    qr.bindFramebuffer(e, Oe.framebuffers[r])
                },
                ja: function(e, r) {
                    qr.bindRenderbuffer(e, Oe.renderbuffers[r])
                },
                i: function(e, r) {
                    qr.bindTexture(e, Oe.textures[r])
                },
                ii: function(e) {
                    qr.blendEquation(e)
                },
                Ab: function(e, r) {
                    qr.blendEquationSeparate(e, r)
                },
                ji: function(e, r) {
                    qr.blendFunc(e, r)
                },
                fa: function(e, r, t, n) {
                    qr.blendFuncSeparate(e, r, t, n)
                },
                ca: function(e, r, t, n) {
                    Oe.currentContext.version >= 2 ? t ? qr.bufferData(e, B, n, t, r) : qr.bufferData(e, r, n) : qr.bufferData(e, t ? B.subarray(t, t + r) : r, n)
                },
                ea: function(e, r, t, n) {
                    Oe.currentContext.version >= 2 ? qr.bufferSubData(e, r, B, n, t) : qr.bufferSubData(e, r, B.subarray(n, n + t))
                },
                Da: function(e) {
                    return qr.checkFramebufferStatus(e)
                },
                pa: function(e) {
                    qr.clear(e)
                },
                va: function(e, r, t, n) {
                    qr.clearColor(e, r, t, n)
                },
                xa: function(e, r, t, n) {
                    qr.colorMask(!!e, !!r, !!t, !!n)
                },
                Xa: function(e) {
                    qr.compileShader(Oe.shaders[e])
                },
                yb: function(e, r, t, n, o, a, i, u) {
                    Oe.currentContext.version >= 2 ? qr.currentPixelUnpackBufferBinding ? qr.compressedTexImage2D(e, r, t, n, o, a, i, u) : qr.compressedTexImage2D(e, r, t, n, o, a, B, u, i) : qr.compressedTexImage2D(e, r, t, n, o, a, u ? B.subarray(u, u + i) : null)
                },
                Ib: function() {
                    var e = Oe.getNewId(Oe.programs),
                        r = qr.createProgram();
                    return r.name = e, r.maxUniformLength = r.maxAttributeLength = r.maxUniformBlockNameLength = 0, r.uniformIdCounter = 1, Oe.programs[e] = r, e
                },
                Za: function(e) {
                    var r = Oe.getNewId(Oe.shaders);
                    return Oe.shaders[r] = qr.createShader(e), r
                },
                ba: function(e, r) {
                    for (var t = 0; t < e; t++) {
                        var n = P[r + 4 * t >> 2],
                            o = Oe.buffers[n];
                        o && (qr.deleteBuffer(o), o.name = 0, Oe.buffers[n] = null, n == qr.currentArrayBufferBinding && (qr.currentArrayBufferBinding = 0), n == qr.currentElementArrayBufferBinding && (qr.currentElementArrayBufferBinding = 0), n == qr.currentPixelPackBufferBinding && (qr.currentPixelPackBufferBinding = 0), n == qr.currentPixelUnpackBufferBinding && (qr.currentPixelUnpackBufferBinding = 0))
                    }
                },
                Rb: function(e, r) {
                    for (var t = 0; t < e; ++t) {
                        var n = P[r + 4 * t >> 2],
                            o = Oe.framebuffers[n];
                        o && (qr.deleteFramebuffer(o), o.name = 0, Oe.framebuffers[n] = null)
                    }
                },
                r: function(e) {
                    if (e) {
                        var r = Oe.programs[e];
                        r ? (qr.deleteProgram(r), r.name = 0, Oe.programs[e] = null) : Oe.recordError(1281)
                    }
                },
                Qb: function(e, r) {
                    for (var t = 0; t < e; t++) {
                        var n = P[r + 4 * t >> 2],
                            o = Oe.renderbuffers[n];
                        o && (qr.deleteRenderbuffer(o), o.name = 0, Oe.renderbuffers[n] = null)
                    }
                },
                X: function(e) {
                    if (e) {
                        var r = Oe.shaders[e];
                        r ? (qr.deleteShader(r), Oe.shaders[e] = null) : Oe.recordError(1281)
                    }
                },
                v: function(e, r) {
                    for (var t = 0; t < e; t++) {
                        var n = P[r + 4 * t >> 2],
                            o = Oe.textures[n];
                        o && (qr.deleteTexture(o), o.name = 0, Oe.textures[n] = null)
                    }
                },
                Gb: function(e, r) {
                    qr.detachShader(Oe.programs[e], Oe.shaders[r])
                },
                q: function(e) {
                    qr.disable(e)
                },
                l: function(e) {
                    Oe.currentContext.clientBuffers[e].enabled = !1, qr.disableVertexAttribArray(e)
                },
                L: function(e, r, t) {
                    Oe.preDrawHandleClientVertexAttribBindings(r + t), qr.drawArrays(e, r, t), Oe.postDrawHandleClientVertexAttribBindings()
                },
                Aa: ar,
                s: function(e) {
                    qr.enable(e)
                },
                H: function(e) {
                    Oe.currentContext.clientBuffers[e].enabled = !0, qr.enableVertexAttribArray(e)
                },
                ia: function(e, r, t, n) {
                    qr.framebufferRenderbuffer(e, r, t, Oe.renderbuffers[n])
                },
                Q: function(e, r, t, n, o) {
                    qr.framebufferTexture2D(e, r, t, Oe.textures[n], o)
                },
                da: function(e, r) {
                    ir(e, r, "createBuffer", Oe.buffers)
                },
                Pb: function(e, r) {
                    ir(e, r, "createFramebuffer", Oe.framebuffers)
                },
                Ob: function(e, r) {
                    ir(e, r, "createRenderbuffer", Oe.renderbuffers)
                },
                R: function(e, r) {
                    ir(e, r, "createTexture", Oe.textures)
                },
                li: function(e, r, t, n, o, a, i) {
                    ur("getActiveAttrib", e, r, t, n, o, a, i)
                },
                mi: function(e, r, t, n, o, a, i) {
                    ur("getActiveUniform", e, r, t, n, o, a, i)
                },
                E: function(e, r) {
                    return qr.getAttribLocation(Oe.programs[e], N(r))
                },
                N: function() {
                    var e = qr.getError() || Oe.lastError;
                    return Oe.lastError = 0, e
                },
                D: function(e, r, t, n) {
                    var o = qr.getFramebufferAttachmentParameter(e, r, t);
                    (o instanceof WebGLRenderbuffer || o instanceof WebGLTexture) && (o = 0 | o.name), P[n >> 2] = o
                },
                z: function(e, r) {
                    cr(e, r, 0)
                },
                Jb: function(e, r, t, n) {
                    var o = qr.getProgramInfoLog(Oe.programs[e]);
                    null === o && (o = "(unknown error)");
                    var a = r > 0 && n ? U(o, n, r) : 0;
                    t && (P[t >> 2] = a)
                },
                $: function(e, r, t) {
                    if (t)
                        if (e >= Oe.counter) Oe.recordError(1281);
                        else if (e = Oe.programs[e], 35716 == r) {
                        var n = qr.getProgramInfoLog(e);
                        null === n && (n = "(unknown error)"), P[t >> 2] = n.length + 1
                    } else if (35719 == r) {
                        if (!e.maxUniformLength)
                            for (var o = 0; o < qr.getProgramParameter(e, 35718); ++o) e.maxUniformLength = Math.max(e.maxUniformLength, qr.getActiveUniform(e, o).name.length + 1);
                        P[t >> 2] = e.maxUniformLength
                    } else if (35722 == r) {
                        if (!e.maxAttributeLength)
                            for (o = 0; o < qr.getProgramParameter(e, 35721); ++o) e.maxAttributeLength = Math.max(e.maxAttributeLength, qr.getActiveAttrib(e, o).name.length + 1);
                        P[t >> 2] = e.maxAttributeLength
                    } else if (35381 == r) {
                        if (!e.maxUniformBlockNameLength)
                            for (o = 0; o < qr.getProgramParameter(e, 35382); ++o) e.maxUniformBlockNameLength = Math.max(e.maxUniformBlockNameLength, qr.getActiveUniformBlockName(e, o).length + 1);
                        P[t >> 2] = e.maxUniformBlockNameLength
                    } else P[t >> 2] = qr.getProgramParameter(e, r);
                    else Oe.recordError(1281)
                },
                Kb: function(e, r, t, n) {
                    var o = qr.getShaderInfoLog(Oe.shaders[e]);
                    null === o && (o = "(unknown error)");
                    var a = r > 0 && n ? U(o, n, r) : 0;
                    t && (P[t >> 2] = a)
                },
                ha: function(e, r, t) {
                    if (t)
                        if (35716 == r) {
                            var n = qr.getShaderInfoLog(Oe.shaders[e]);
                            null === n && (n = "(unknown error)");
                            var o = n ? n.length + 1 : 0;
                            P[t >> 2] = o
                        } else if (35720 == r) {
                        var a = qr.getShaderSource(Oe.shaders[e]),
                            i = a ? a.length + 1 : 0;
                        P[t >> 2] = i
                    } else P[t >> 2] = qr.getShaderParameter(Oe.shaders[e], r);
                    else Oe.recordError(1281)
                },
                Fa: function(e) {
                    var r = Oe.stringCache[e];
                    if (!r) {
                        switch (e) {
                            case 7939:
                                var t = qr.getSupportedExtensions() || [];
                                r = lr((t = t.concat(t.map((function(e) {
                                    return "GL_" + e
                                })))).join(" "));
                                break;
                            case 7936:
                            case 7937:
                            case 37445:
                            case 37446:
                                var n = qr.getParameter(e);
                                n || Oe.recordError(1280), r = n && lr(n);
                                break;
                            case 7938:
                                var o = qr.getParameter(7938);
                                r = lr(o = Oe.currentContext.version >= 2 ? "OpenGL ES 3.0 (" + o + ")" : "OpenGL ES 2.0 (" + o + ")");
                                break;
                            case 35724:
                                var a = qr.getParameter(35724),
                                    i = a.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
                                null !== i && (3 == i[1].length && (i[1] = i[1] + "0"), a = "OpenGL ES GLSL ES " + i[1] + " (" + a + ")"), r = lr(a);
                                break;
                            default:
                                Oe.recordError(1280)
                        }
                        Oe.stringCache[e] = r
                    }
                    return r
                },
                m: function(e, r) {
                    if (r = N(r), e = Oe.programs[e]) {
                        pr(e);
                        var t = e.uniformLocsById,
                            n = 0,
                            o = r,
                            a = mr(r);
                        a > 0 && (n = dr(r.slice(a + 1)) >>> 0, o = r.slice(0, a));
                        var i = e.uniformSizeAndIdsByName[o];
                        if (i && n < i[0] && (t[n += i[1]] = t[n] || qr.getUniformLocation(e, r))) return n
                    } else Oe.recordError(1281);
                    return -1
                },
                ra: function(e) {
                    return qr.isEnabled(e)
                },
                zb: function(e) {
                    qr.lineWidth(e)
                },
                Hb: function(e) {
                    e = Oe.programs[e], qr.linkProgram(e), e.uniformLocsById = 0, e.uniformSizeAndIdsByName = {}
                },
                P: function(e, r) {
                    3317 == e && (Oe.unpackAlignment = r), qr.pixelStorei(e, r)
                },
                la: function(e, r, t, n, o, a, i) {
                    if (Oe.currentContext.version >= 2)
                        if (qr.currentPixelPackBufferBinding) qr.readPixels(e, r, t, n, o, a, i);
                        else {
                            var u = br(a);
                            qr.readPixels(e, r, t, n, o, a, u, i >> yr(u))
                        }
                    else {
                        var s = wr(a, o, t, n, i);
                        s ? qr.readPixels(e, r, t, n, o, a, s) : Oe.recordError(1280)
                    }
                },
                Nb: function(e, r, t, n) {
                    qr.renderbufferStorage(e, r, t, n)
                },
                O: function(e, r, t, n) {
                    qr.scissor(e, r, t, n)
                },
                Lb: function() {
                    Oe.recordError(1280)
                },
                Ya: function(e, r, t, n) {
                    var o = Oe.getSource(e, r, t, n);
                    qr.shaderSource(Oe.shaders[e], o)
                },
                za: function(e, r, t) {
                    qr.stencilFunc(e, r, t)
                },
                ya: function(e, r, t) {
                    qr.stencilOp(e, r, t)
                },
                F: function(e, r, t, n, o, a, i, u, s) {
                    if (Oe.currentContext.version >= 2)
                        if (qr.currentPixelUnpackBufferBinding) qr.texImage2D(e, r, t, n, o, a, i, u, s);
                        else if (s) {
                        var c = br(u);
                        qr.texImage2D(e, r, t, n, o, a, i, u, c, s >> yr(c))
                    } else qr.texImage2D(e, r, t, n, o, a, i, u, null);
                    else qr.texImage2D(e, r, t, n, o, a, i, u, s ? wr(u, i, n, o, s) : null)
                },
                k: function(e, r, t) {
                    qr.texParameteri(e, r, t)
                },
                Sb: function(e, r, t, n, o, a, i, u, s) {
                    if (Oe.currentContext.version >= 2)
                        if (qr.currentPixelUnpackBufferBinding) qr.texSubImage2D(e, r, t, n, o, a, i, u, s);
                        else if (s) {
                        var c = br(u);
                        qr.texSubImage2D(e, r, t, n, o, a, i, u, c, s >> yr(c))
                    } else qr.texSubImage2D(e, r, t, n, o, a, i, u, null);
                    else {
                        var f = null;
                        s && (f = wr(u, i, o, a, s)), qr.texSubImage2D(e, r, t, n, o, a, i, u, f)
                    }
                },
                M: function(e, r) {
                    qr.uniform1f(vr(e), r)
                },
                ki: function(e, r, t) {
                    if (Oe.currentContext.version >= 2) qr.uniform1fv(vr(e), T, t >> 2, r);
                    else {
                        if (r <= 288)
                            for (var n = xr[r - 1], o = 0; o < r; ++o) n[o] = T[t + 4 * o >> 2];
                        else n = T.subarray(t >> 2, t + 4 * r >> 2);
                        qr.uniform1fv(vr(e), n)
                    }
                },
                u: function(e, r) {
                    qr.uniform1i(vr(e), r)
                },
                Eb: function(e, r, t) {
                    if (Oe.currentContext.version >= 2) qr.uniform1iv(vr(e), P, t >> 2, r);
                    else {
                        if (r <= 288)
                            for (var n = Er[r - 1], o = 0; o < r; ++o) n[o] = P[t + 4 * o >> 2];
                        else n = P.subarray(t >> 2, t + 4 * r >> 2);
                        qr.uniform1iv(vr(e), n)
                    }
                },
                W: function(e, r, t) {
                    qr.uniform2f(vr(e), r, t)
                },
                Fb: function(e, r, t) {
                    if (Oe.currentContext.version >= 2) qr.uniform2fv(vr(e), T, t >> 2, 2 * r);
                    else {
                        if (r <= 144)
                            for (var n = xr[2 * r - 1], o = 0; o < 2 * r; o += 2) n[o] = T[t + 4 * o >> 2], n[o + 1] = T[t + (4 * o + 4) >> 2];
                        else n = T.subarray(t >> 2, t + 8 * r >> 2);
                        qr.uniform2fv(vr(e), n)
                    }
                },
                Db: function(e, r, t) {
                    if (Oe.currentContext.version >= 2) qr.uniform2iv(vr(e), P, t >> 2, 2 * r);
                    else {
                        if (r <= 144)
                            for (var n = Er[2 * r - 1], o = 0; o < 2 * r; o += 2) n[o] = P[t + 4 * o >> 2], n[o + 1] = P[t + (4 * o + 4) >> 2];
                        else n = P.subarray(t >> 2, t + 8 * r >> 2);
                        qr.uniform2iv(vr(e), n)
                    }
                },
                Ba: function(e, r, t) {
                    if (Oe.currentContext.version >= 2) qr.uniform3fv(vr(e), T, t >> 2, 3 * r);
                    else {
                        if (r <= 96)
                            for (var n = xr[3 * r - 1], o = 0; o < 3 * r; o += 3) n[o] = T[t + 4 * o >> 2], n[o + 1] = T[t + (4 * o + 4) >> 2], n[o + 2] = T[t + (4 * o + 8) >> 2];
                        else n = T.subarray(t >> 2, t + 12 * r >> 2);
                        qr.uniform3fv(vr(e), n)
                    }
                },
                Cb: function(e, r, t) {
                    if (Oe.currentContext.version >= 2) qr.uniform3iv(vr(e), P, t >> 2, 3 * r);
                    else {
                        if (r <= 96)
                            for (var n = Er[3 * r - 1], o = 0; o < 3 * r; o += 3) n[o] = P[t + 4 * o >> 2], n[o + 1] = P[t + (4 * o + 4) >> 2], n[o + 2] = P[t + (4 * o + 8) >> 2];
                        else n = P.subarray(t >> 2, t + 12 * r >> 2);
                        qr.uniform3iv(vr(e), n)
                    }
                },
                oa: function(e, r, t, n, o) {
                    qr.uniform4f(vr(e), r, t, n, o)
                },
                ga: function(e, r, t) {
                    if (Oe.currentContext.version >= 2) qr.uniform4fv(vr(e), T, t >> 2, 4 * r);
                    else {
                        if (r <= 72) {
                            var n = xr[4 * r - 1],
                                o = T;
                            t >>= 2;
                            for (var a = 0; a < 4 * r; a += 4) {
                                var i = t + a;
                                n[a] = o[i], n[a + 1] = o[i + 1], n[a + 2] = o[i + 2], n[a + 3] = o[i + 3]
                            }
                        } else n = T.subarray(t >> 2, t + 16 * r >> 2);
                        qr.uniform4fv(vr(e), n)
                    }
                },
                Bb: function(e, r, t) {
                    if (Oe.currentContext.version >= 2) qr.uniform4iv(vr(e), P, t >> 2, 4 * r);
                    else {
                        if (r <= 72)
                            for (var n = Er[4 * r - 1], o = 0; o < 4 * r; o += 4) n[o] = P[t + 4 * o >> 2], n[o + 1] = P[t + (4 * o + 4) >> 2], n[o + 2] = P[t + (4 * o + 8) >> 2], n[o + 3] = P[t + (4 * o + 12) >> 2];
                        else n = P.subarray(t >> 2, t + 16 * r >> 2);
                        qr.uniform4iv(vr(e), n)
                    }
                },
                Ta: function(e, r, t, n) {
                    if (Oe.currentContext.version >= 2) qr.uniformMatrix2fv(vr(e), !!t, T, n >> 2, 4 * r);
                    else {
                        if (r <= 72)
                            for (var o = xr[4 * r - 1], a = 0; a < 4 * r; a += 4) o[a] = T[n + 4 * a >> 2], o[a + 1] = T[n + (4 * a + 4) >> 2], o[a + 2] = T[n + (4 * a + 8) >> 2], o[a + 3] = T[n + (4 * a + 12) >> 2];
                        else o = T.subarray(n >> 2, n + 16 * r >> 2);
                        qr.uniformMatrix2fv(vr(e), !!t, o)
                    }
                },
                qa: function(e, r, t, n) {
                    if (Oe.currentContext.version >= 2) qr.uniformMatrix3fv(vr(e), !!t, T, n >> 2, 9 * r);
                    else {
                        if (r <= 32)
                            for (var o = xr[9 * r - 1], a = 0; a < 9 * r; a += 9) o[a] = T[n + 4 * a >> 2], o[a + 1] = T[n + (4 * a + 4) >> 2], o[a + 2] = T[n + (4 * a + 8) >> 2], o[a + 3] = T[n + (4 * a + 12) >> 2], o[a + 4] = T[n + (4 * a + 16) >> 2], o[a + 5] = T[n + (4 * a + 20) >> 2], o[a + 6] = T[n + (4 * a + 24) >> 2], o[a + 7] = T[n + (4 * a + 28) >> 2], o[a + 8] = T[n + (4 * a + 32) >> 2];
                        else o = T.subarray(n >> 2, n + 36 * r >> 2);
                        qr.uniformMatrix3fv(vr(e), !!t, o)
                    }
                },
                V: function(e, r, t, n) {
                    if (Oe.currentContext.version >= 2) qr.uniformMatrix4fv(vr(e), !!t, T, n >> 2, 16 * r);
                    else {
                        if (r <= 18) {
                            var o = xr[16 * r - 1],
                                a = T;
                            n >>= 2;
                            for (var i = 0; i < 16 * r; i += 16) {
                                var u = n + i;
                                o[i] = a[u], o[i + 1] = a[u + 1], o[i + 2] = a[u + 2], o[i + 3] = a[u + 3], o[i + 4] = a[u + 4], o[i + 5] = a[u + 5], o[i + 6] = a[u + 6], o[i + 7] = a[u + 7], o[i + 8] = a[u + 8], o[i + 9] = a[u + 9], o[i + 10] = a[u + 10], o[i + 11] = a[u + 11], o[i + 12] = a[u + 12], o[i + 13] = a[u + 13], o[i + 14] = a[u + 14], o[i + 15] = a[u + 15]
                            }
                        } else o = T.subarray(n >> 2, n + 64 * r >> 2);
                        qr.uniformMatrix4fv(vr(e), !!t, o)
                    }
                },
                _: function(e) {
                    e = Oe.programs[e], qr.useProgram(e), qr.currentProgram = e
                },
                A: function(e, r) {
                    qr.vertexAttrib1f(e, T[r >> 2])
                },
                B: function(e, r) {
                    qr.vertexAttrib2f(e, T[r >> 2], T[r + 4 >> 2])
                },
                C: function(e, r) {
                    qr.vertexAttrib3f(e, T[r >> 2], T[r + 4 >> 2], T[r + 8 >> 2])
                },
                wa: function(e, r, t, n, o) {
                    qr.vertexAttrib4f(e, r, t, n, o)
                },
                y: function(e, r) {
                    qr.vertexAttrib4f(e, T[r >> 2], T[r + 4 >> 2], T[r + 8 >> 2], T[r + 12 >> 2])
                },
                G: function(e, r, t, n, o, a) {
                    var i = Oe.currentContext.clientBuffers[e];
                    if (!qr.currentArrayBufferBinding) return i.size = r, i.type = t, i.normalized = n, i.stride = o, i.ptr = a, i.clientside = !0, void(i.vertexAttribPointerAdaptor = function(e, r, t, n, o, a) {
                        this.vertexAttribPointer(e, r, t, n, o, a)
                    });
                    i.clientside = !1, qr.vertexAttribPointer(e, r, t, !!n, o, a)
                },
                x: function(e, r, t, n) {
                    qr.viewport(e, r, t, n)
                },
                j: function(e, r) {
                    var t = ot();
                    try {
                        return ve(e)(r)
                    } catch (e) {
                        if (at(t), e !== e + 0 && "longjmp" !== e) throw e;
                        nt(1, 0)
                    }
                },
                f: function(e, r) {
                    var t = ot();
                    try {
                        return ve(e)(r)
                    } catch (e) {
                        if (at(t), e !== e + 0 && "longjmp" !== e) throw e;
                        nt(1, 0)
                    }
                },
                o: function(e, r, t) {
                    var n = ot();
                    try {
                        return ve(e)(r, t)
                    } catch (e) {
                        if (at(n), e !== e + 0 && "longjmp" !== e) throw e;
                        nt(1, 0)
                    }
                },
                Oa: function(e, r, t, n, o) {
                    var a = ot();
                    try {
                        return ve(e)(r, t, n, o)
                    } catch (e) {
                        if (at(a), e !== e + 0 && "longjmp" !== e) throw e;
                        nt(1, 0)
                    }
                },
                d: function(e, r, t) {
                    var n = ot();
                    try {
                        return ve(e)(r, t)
                    } catch (e) {
                        if (at(n), e !== e + 0 && "longjmp" !== e) throw e;
                        nt(1, 0)
                    }
                },
                g: function(e, r, t, n) {
                    var o = ot();
                    try {
                        return ve(e)(r, t, n)
                    } catch (e) {
                        if (at(o), e !== e + 0 && "longjmp" !== e) throw e;
                        nt(1, 0)
                    }
                },
                t: function(e, r, t, n, o) {
                    var a = ot();
                    try {
                        return ve(e)(r, t, n, o)
                    } catch (e) {
                        if (at(a), e !== e + 0 && "longjmp" !== e) throw e;
                        nt(1, 0)
                    }
                },
                I: function(e, r, t, n, o, a) {
                    var i = ot();
                    try {
                        return ve(e)(r, t, n, o, a)
                    } catch (e) {
                        if (at(i), e !== e + 0 && "longjmp" !== e) throw e;
                        nt(1, 0)
                    }
                },
                xb: function(e, r, t, n, o, a, i) {
                    var u = ot();
                    try {
                        return ve(e)(r, t, n, o, a, i)
                    } catch (e) {
                        if (at(u), e !== e + 0 && "longjmp" !== e) throw e;
                        nt(1, 0)
                    }
                },
                ta: function(e, r, t, n, o, a, i, u) {
                    var s = ot();
                    try {
                        return ve(e)(r, t, n, o, a, i, u)
                    } catch (e) {
                        if (at(s), e !== e + 0 && "longjmp" !== e) throw e;
                        nt(1, 0)
                    }
                },
                e: function(e, r) {
                    var t = ot();
                    try {
                        ve(e)(r)
                    } catch (e) {
                        if (at(t), e !== e + 0 && "longjmp" !== e) throw e;
                        nt(1, 0)
                    }
                },
                c: function(e, r, t) {
                    var n = ot();
                    try {
                        ve(e)(r, t)
                    } catch (e) {
                        if (at(n), e !== e + 0 && "longjmp" !== e) throw e;
                        nt(1, 0)
                    }
                },
                h: function(e, r, t, n) {
                    var o = ot();
                    try {
                        ve(e)(r, t, n)
                    } catch (e) {
                        if (at(o), e !== e + 0 && "longjmp" !== e) throw e;
                        nt(1, 0)
                    }
                },
                T: function(e, r, t, n, o) {
                    var a = ot();
                    try {
                        ve(e)(r, t, n, o)
                    } catch (e) {
                        if (at(a), e !== e + 0 && "longjmp" !== e) throw e;
                        nt(1, 0)
                    }
                },
                ua: function(e, r, t, n, o, a) {
                    var i = ot();
                    try {
                        ve(e)(r, t, n, o, a)
                    } catch (e) {
                        if (at(i), e !== e + 0 && "longjmp" !== e) throw e;
                        nt(1, 0)
                    }
                },
                J: function(e, r, t, n, o, a, i) {
                    var u = ot();
                    try {
                        ve(e)(r, t, n, o, a, i)
                    } catch (e) {
                        if (at(u), e !== e + 0 && "longjmp" !== e) throw e;
                        nt(1, 0)
                    }
                },
                b: function(e) {
                    h = e
                },
                K: function(e) {
                    var r = Date.now() / 1e3 | 0;
                    return e && (P[e >> 2] = r), r
                },
                Mf: function(e, t) {
                    function n(e) {
                        var r = typeof e;
                        return "string" == r ? `<string>${function(e){const r={"&":"&amp;","<":"&lt",">":"&gt",'"':"&quot","'":"&apos"},t=new RegExp(Object.keys(r).join("|"),"g");return e.replace(t,(e=>r[e]))}(e)}</string>` : "undefined" == r ? "<undefined/>" : "number" == r ? `<number>${e}</number>` : null == e ? "<null/>" : "boolean" == r ? e ? "<true/>" : "<false/>" : e instanceof Date ? `<date>${e.getTime()}</date>` : e instanceof Array ? function(e) {
                            for (var r = "<array>", t = 0; t < e.length; t++) r += `<property id="${t}">${n(e[t])}</property>`;
                            return r + "</array>"
                        }(e) : "object" == r ? function(e) {
                            var r = "<object>";
                            for (var t in e) r += `<property id="${t}">${n(e[t])}</property>`;
                            return r + "</object>"
                        }(e) : "<null/>"
                    }
                    const o = N(e),
                        a = r.WAFLASH;
                    let i = a && a.hal && "function" == typeof a.hal.external_transformExternalInterfaceCall && a.hal.external_transformExternalInterfaceCall(o, t);
                    if (i) {
                        i = n(i);
                        const e = z(i) + 1,
                            r = et(e);
                        return U(i, r, e), r
                    }
                    return 0
                },
                Bf: function(e) {
                    const t = localStorage.getItem(N(e));
                    if (t && t.length > 0) {
                        const e = new Uint8Array(JSON.parse(t)),
                            n = r._malloc(e.length + 4);
                        return r.HEAP8.set(e, n + 4), r.HEAP32[n >> 2] = e.length, n
                    }
                    return 0
                },
                qf: function(e, t, n) {
                    if (t && n > 0) {
                        const o = N(e),
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
                    f.value = N(e), f.style.position = "absolute", f.style.resize = "none", f.style.overflow = "hidden", f.style.zIndex = -999, f.style.top = "50%", f.style.left = "50%", f.style.width = "32px", f.wafSelectionStart = f.wafSelectionEnd = f.value ? f.value.length : 0;
                    let l = !1,
                        d = !1;
                    const m = (e, r) => {
                        ve(u)(c, 0, e, r)
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
                                    const n = z(e) + 1,
                                        o = et(n);
                                    U(e, o, n), ve(u)(c, o, r, t)
                                })(r, t, n)
                            }
                            var r, t;
                            r = f.wafSelectionStart, t = f.wafSelectionEnd, ve(s)(c, r, t)
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
                    "function" == typeof r.setStatus && r.setStatus(N(e))
                },
                ad: function(e, t) {
                    const n = N(e),
                        o = N(t) || "_self",
                        a = r.WAFLASH,
                        i = a && a.hal && "function" == typeof a.hal.url_transformNavigateUrl && a.hal.url_transformNavigateUrl(n, o);
                    "function" == typeof i && window.requestAnimationFrame((() => i()))
                },
                Rc: function(e) {
                    const t = N(e),
                        n = r.WAFLASH,
                        o = n ? n.hal && "function" == typeof n.hal.url_transformRequestUrl && n.hal.url_transformRequestUrl(t) : t;
                    if (o) {
                        const e = z(o) + 1,
                            r = et(e);
                        return U(o, r, e), r
                    }
                    return 0
                }
            },
            Zr = (function() {
                var e = {
                    a: $r
                };

                function t(e, t) {
                    var n, o = e.exports;
                    r.asm = o, G((b = r.asm.pi).buffer), Q = r.asm.yi, n = r.asm.qi, V.unshift(n), te()
                }

                function o(e) {
                    t(e.instance)
                }

                function a(r) {
                    return (g || "function" != typeof fetch ? Promise.resolve().then((function() {
                        return ce(oe)
                    })) : fetch(oe, {
                        credentials: "same-origin"
                    }).then((function(e) {
                        if (!e.ok) throw "failed to load wasm binary file at '" + oe + "'";
                        return e.arrayBuffer()
                    })).catch((function() {
                        return ce(oe)
                    }))).then((function(r) {
                        return WebAssembly.instantiate(r, e)
                    })).then((function(e) {
                        return e
                    })).then(r, (function(e) {
                        p("failed to asynchronously prepare wasm: " + e), ne(e)
                    }))
                }
                if (re(), r.instantiateWasm) try {
                    return r.instantiateWasm(e, t)
                } catch (e) {
                    return p("Module.instantiateWasm callback failed with error: " + e), !1
                }(g || "function" != typeof WebAssembly.instantiateStreaming || se(oe) || "function" != typeof fetch ? a(o) : fetch(oe, {
                    credentials: "same-origin"
                }).then((function(r) {
                    return WebAssembly.instantiateStreaming(r, e).then(o, (function(e) {
                        return p("wasm streaming compile failed: " + e), p("falling back to ArrayBuffer instantiation"), a(o)
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
                return (Zr = r._strlen = r.asm.vi).apply(null, arguments)
            }),
            Jr = r._free = function() {
                return (Jr = r._free = r.asm.wi).apply(null, arguments)
            },
            et = (r._main = function() {
                return (r._main = r.asm.xi).apply(null, arguments)
            }, r._malloc = function() {
                return (et = r._malloc = r.asm.zi).apply(null, arguments)
            }),
            rt = r.___errno_location = function() {
                return (rt = r.___errno_location = r.asm.Ai).apply(null, arguments)
            },
            tt = r._emscripten_builtin_memalign = function() {
                return (tt = r._emscripten_builtin_memalign = r.asm.Bi).apply(null, arguments)
            },
            nt = r._setThrew = function() {
                return (nt = r._setThrew = r.asm.Ci).apply(null, arguments)
            },
            ot = r.stackSave = function() {
                return (ot = r.stackSave = r.asm.Di).apply(null, arguments)
            },
            at = r.stackRestore = function() {
                return (at = r.stackRestore = r.asm.Ei).apply(null, arguments)
            },
            it = r.stackAlloc = function() {
                return (it = r.stackAlloc = r.asm.Fi).apply(null, arguments)
            };
        r.dynCall_jiji = function() {
            return (r.dynCall_jiji = r.asm.Gi).apply(null, arguments)
        }, r.dynCall_ji = function() {
            return (r.dynCall_ji = r.asm.Hi).apply(null, arguments)
        };

        function ut(e) {
            this.name = "ExitStatus", this.message = "Program terminated with exit(" + e + ")", this.status = e
        }
        r.ccall = S, r.cwrap = function(e, r, t, n) {
            var o = (t = t || []).every((function(e) {
                return "number" === e
            }));
            return "string" !== r && o && !n ? C(e) : function() {
                return S(e, r, t, arguments)
            }
        }, r.addRunDependency = re, r.removeRunDependency = te, r.FS_createPath = Le.createPath, r.FS_createDataFile = Le.createDataFile, r.FS_createPreloadedFile = Le.createPreloadedFile, r.FS_createLazyFile = Le.createLazyFile, r.FS_createDevice = Le.createDevice, r.FS_unlink = Le.unlink, r.AL = Re;

        function st(e) {
            function n() {
                Kr || (Kr = !0, r.calledRun = !0, E || (!0, r.noFSInit || Le.init.initialized || Le.init(), Le.ignorePermissions = !1, Ee.init(), de(V), de(X), t(r), r.onRuntimeInitialized && r.onRuntimeInitialized(), ft && function(e) {
                    var t = r._main,
                        n = (e = e || []).length + 1,
                        o = it(4 * (n + 1));
                    P[o >> 2] = q(f);
                    for (var a = 1; a < n; a++) P[(o >> 2) + a] = q(e[a - 1]);
                    P[(o >> 2) + n] = 0;
                    try {
                        var i = t(n, o);
                        ct(i, !0)
                    } catch (e) {
                        return he(e)
                    } finally {
                        !0
                    }
                }(e), function() {
                    if (r.postRun)
                        for ("function" == typeof r.postRun && (r.postRun = [r.postRun]); r.postRun.length;) e = r.postRun.shift(), Y.unshift(e);
                    var e;
                    de(Y)
                }()))
            }
            e = e || c, Z > 0 || (! function() {
                if (r.preRun)
                    for ("function" == typeof r.preRun && (r.preRun = [r.preRun]); r.preRun.length;) e = r.preRun.shift(), H.unshift(e);
                var e;
                de(H)
            }(), Z > 0 || (r.setStatus ? (r.setStatus("Running..."), setTimeout((function() {
                setTimeout((function() {
                    r.setStatus("")
                }), 1), n()
            }), 1)) : n()))
        }

        function ct(e, t) {
            x = e, $() || (K = !0),
                function(e) {
                    x = e, $() || (r.onExit && r.onExit(e), E = !0);
                    l(e, new ut(e))
                }(e)
        }
        if (ee = function e() {
                Kr || st(), Kr || (ee = e)
            }, r.run = st, r.preInit)
            for ("function" == typeof r.preInit && (r.preInit = [r.preInit]); r.preInit.length > 0;) r.preInit.pop()();
        var ft = !0;
        return r.noInitialRun && (ft = !1), st(), r.ready
    }
})();
export default Module;
