(window.webpackJsonp = window.webpackJsonp || []).push([
    [4], {
        2176: function(t, e, r) {
            "use strict";
            var n = {
                    props: {
                        hoverable: {
                            type: Boolean,
                            default: !1
                        }
                    }
                },
                o = (r(2849), r(2)),
                component = Object(o.a)(n, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "review-card",
                        class: {
                            hoverable: t.hoverable
                        }
                    }, [e("div", {
                        staticClass: "review-card__top"
                    }, [e("div", {
                        staticClass: "review-card__service"
                    }, [t._t("service")], 2), t._v(" "), e("div", {
                        staticClass: "review-card__score"
                    }, [t._t("score")], 2)]), t._v(" "), e("div", {
                        staticClass: "review-card__bottom"
                    }, [e("div", {
                        staticClass: "review-card__rate"
                    }, [t._t("rate")], 2), t._v(" "), e("div", {
                        staticClass: "review-card__description"
                    }, [t._t("description")], 2)])])
                }), [], !1, null, "d41e924e", null);
            e.a = component.exports
        },
        2241: function(t, e, r) {
            "use strict";
            var n = {
                    components: {
                        ReviewCard: r(2176).a
                    },
                    data: () => ({})
                },
                o = (r(2851), r(2)),
                l = r(2853),
                component = Object(o.a)(n, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("review-card", {
                        scopedSlots: t._u([{
                            key: "service",
                            fn: function() {
                                return [e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "115",
                                        height: "29",
                                        src: r(550),
                                        alt: "Trustpilot"
                                    }
                                })]
                            },
                            proxy: !0
                        }, {
                            key: "score",
                            fn: function() {
                                return [e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("svg", {
                                    attrs: {
                                        width: "19",
                                        height: "18",
                                        viewBox: "0 0 19 18",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg"
                                    }
                                }, [e("path", {
                                    attrs: {
                                        d: "M9.35772 0.963526C9.5074 0.502871 10.1591 0.50287 10.3088 0.963525L12.0784 6.40983C12.1453 6.61584 12.3373 6.75532 12.5539 6.75532H18.2805C18.7649 6.75532 18.9663 7.37513 18.5744 7.65983L13.9415 11.0258C13.7662 11.1532 13.6929 11.3788 13.7599 11.5848L15.5295 17.0312C15.6791 17.4918 15.1519 17.8749 14.76 17.5902L10.1271 14.2242C9.9519 14.0968 9.7146 14.0968 9.53936 14.2242L4.90646 17.5902C4.5146 17.8749 3.98736 17.4918 4.13703 17.0312L5.90665 11.5848C5.97358 11.3788 5.90025 11.1532 5.72501 11.0258L1.09211 7.65983C0.700251 7.37513 0.901639 6.75532 1.386 6.75532H7.11258C7.3292 6.75532 7.52117 6.61584 7.58811 6.40983L9.35772 0.963526Z",
                                        fill: "url(#paint0_linear_11981_487)"
                                    }
                                }), e("defs", [e("linearGradient", {
                                    attrs: {
                                        id: "paint0_linear_11981_487",
                                        x1: "6.33325",
                                        y1: "11.5",
                                        x2: "17.9344",
                                        y2: "11.5",
                                        gradientUnits: "userSpaceOnUse"
                                    }
                                }, [e("stop", {
                                    attrs: {
                                        offset: "0.652451",
                                        "stop-color": "#91C51B"
                                    }
                                }), e("stop", {
                                    attrs: {
                                        offset: "0.655533",
                                        "stop-color": "#D7DEED"
                                    }
                                })], 1)], 1)])]
                            },
                            proxy: !0
                        }, {
                            key: "rate",
                            fn: function() {
                                return [t._v("\n    " + t._s(t.$t("rate")) + "\n    "), e("a", {
                                    staticStyle: {
                                        "pointer-events": "none"
                                    },
                                    attrs: {
                                        href: "#"
                                    }
                                }, [t._v(t._s(t.$t("reviews")))])]
                            },
                            proxy: !0
                        }])
                    })
                }), [], !1, null, "3a952110", null);
            "function" == typeof l.default && Object(l.default)(component);
            e.a = component.exports
        },
        2242: function(t, e, r) {
            "use strict";
            var n = {
                    components: {
                        ReviewCard: r(2176).a
                    },
                    data: () => ({})
                },
                o = (r(2854), r(2)),
                l = r(2856),
                component = Object(o.a)(n, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("review-card", {
                        scopedSlots: t._u([{
                            key: "service",
                            fn: function() {
                                return [e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "130",
                                        height: "26",
                                        src: r(552),
                                        alt: "VPN Scanner"
                                    }
                                })]
                            },
                            proxy: !0
                        }, {
                            key: "score",
                            fn: function() {
                                return [e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("svg", {
                                    attrs: {
                                        width: "19",
                                        height: "18",
                                        viewBox: "0 0 19 18",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg"
                                    }
                                }, [e("path", {
                                    attrs: {
                                        d: "M8.69122 0.463526C8.8409 0.00287084 9.4926 0.00287008 9.64228 0.463525L11.4119 5.90983C11.4788 6.11584 11.6708 6.25532 11.8874 6.25532H17.614C18.0984 6.25532 18.2997 6.87513 17.9079 7.15983L13.275 10.5258C13.0997 10.6532 13.0264 10.8788 13.0934 11.0848L14.863 16.5312C15.0126 16.9918 14.4854 17.3749 14.0935 17.0902L9.46064 13.7242C9.2854 13.5968 9.0481 13.5968 8.87286 13.7242L4.23995 17.0902C3.8481 17.3749 3.32086 16.9918 3.47053 16.5312L5.24014 11.0848C5.30708 10.8788 5.23375 10.6532 5.05851 10.5258L0.425604 7.15983C0.0337474 6.87513 0.235135 6.25532 0.719496 6.25532H6.44608C6.66269 6.25532 6.85467 6.11584 6.92161 5.90983L8.69122 0.463526Z",
                                        fill: "url(#paint0_linear_11981_231)"
                                    }
                                }), e("defs", [e("linearGradient", {
                                    attrs: {
                                        id: "paint0_linear_11981_231",
                                        x1: "5.66675",
                                        y1: "11",
                                        x2: "17.2679",
                                        y2: "11",
                                        gradientUnits: "userSpaceOnUse"
                                    }
                                }, [e("stop", {
                                    attrs: {
                                        offset: "0.652451",
                                        "stop-color": "#91C51B"
                                    }
                                }), e("stop", {
                                    attrs: {
                                        offset: "0.655533",
                                        "stop-color": "#D7DEED"
                                    }
                                })], 1)], 1)])]
                            },
                            proxy: !0
                        }, {
                            key: "rate",
                            fn: function() {
                                return [t._v("\n    " + t._s(t.$t("rate")) + "\n  ")]
                            },
                            proxy: !0
                        }])
                    })
                }), [], !1, null, "06ad997d", null);
            "function" == typeof l.default && Object(l.default)(component);
            e.a = component.exports
        },
        2243: function(t, e, r) {
            "use strict";
            var n = {
                    components: {
                        ReviewCard: r(2176).a
                    },
                    data: () => ({})
                },
                o = (r(2857), r(2)),
                l = r(2859),
                component = Object(o.a)(n, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("review-card", {
                        scopedSlots: t._u([{
                            key: "service",
                            fn: function() {
                                return [e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "104",
                                        height: "17",
                                        src: r(549),
                                        alt: "Softpedia"
                                    }
                                })]
                            },
                            proxy: !0
                        }, {
                            key: "score",
                            fn: function() {
                                return [e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("svg", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        viewBox: "0 0 19 19",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg"
                                    }
                                }, [e("path", {
                                    attrs: {
                                        d: "M9.02447 1.32583C9.17415 0.865175 9.82585 0.865175 9.97553 1.32583L11.7451 6.77213C11.8121 6.97815 12.0041 7.11763 12.2207 7.11763H17.9473C18.4316 7.11763 18.633 7.73743 18.2411 8.02213L13.6082 11.3881C13.433 11.5155 13.3597 11.7411 13.4266 11.9472L15.1962 17.3935C15.3459 17.8541 14.8187 18.2372 14.4268 17.9525L9.79389 14.5865C9.61865 14.4592 9.38135 14.4592 9.20611 14.5865L4.5732 17.9525C4.18135 18.2372 3.65411 17.8541 3.80378 17.3935L5.57339 11.9472C5.64033 11.7411 5.567 11.5155 5.39176 11.3881L0.758856 8.02213C0.366999 7.73743 0.568387 7.11763 1.05275 7.11763H6.77933C6.99594 7.11763 7.18792 6.97815 7.25486 6.77213L9.02447 1.32583Z",
                                        fill: "url(#paint0_linear_11316_12645)"
                                    }
                                }), e("defs", [e("linearGradient", {
                                    attrs: {
                                        id: "paint0_linear_11316_12645",
                                        x1: "6",
                                        y1: "11.8623",
                                        x2: "11",
                                        y2: "11.8623",
                                        gradientUnits: "userSpaceOnUse"
                                    }
                                }, [e("stop", {
                                    attrs: {
                                        offset: "0.615339",
                                        "stop-color": "#91C51B"
                                    }
                                }), e("stop", {
                                    attrs: {
                                        offset: "0.655533",
                                        "stop-color": "#D7DEED"
                                    }
                                })], 1)], 1)])]
                            },
                            proxy: !0
                        }, {
                            key: "rate",
                            fn: function() {
                                return [t._v("\n    " + t._s(t.$t("rate")) + "\n  ")]
                            },
                            proxy: !0
                        }])
                    })
                }), [], !1, null, "cd596cc0", null);
            "function" == typeof l.default && Object(l.default)(component);
            e.a = component.exports
        },
        2244: function(t, e, r) {
            "use strict";
            var n = {
                    components: {
                        ReviewCard: r(2176).a
                    },
                    data: () => ({})
                },
                o = (r(2860), r(2)),
                l = r(2862),
                component = Object(o.a)(n, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("review-card", {
                        scopedSlots: t._u([{
                            key: "service",
                            fn: function() {
                                return [e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "116",
                                        height: "29",
                                        src: r(544),
                                        alt: "Google Play"
                                    }
                                })]
                            },
                            proxy: !0
                        }, {
                            key: "score",
                            fn: function() {
                                return [e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("svg", {
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        viewBox: "0 0 19 19",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg"
                                    }
                                }, [e("path", {
                                    attrs: {
                                        d: "M9.02447 1.32583C9.17415 0.865175 9.82585 0.865175 9.97553 1.32583L11.7451 6.77213C11.8121 6.97815 12.0041 7.11763 12.2207 7.11763H17.9473C18.4316 7.11763 18.633 7.73743 18.2411 8.02213L13.6082 11.3881C13.433 11.5155 13.3597 11.7411 13.4266 11.9472L15.1962 17.3935C15.3459 17.8541 14.8187 18.2372 14.4268 17.9525L9.79389 14.5865C9.61865 14.4592 9.38135 14.4592 9.20611 14.5865L4.5732 17.9525C4.18135 18.2372 3.65411 17.8541 3.80378 17.3935L5.57339 11.9472C5.64033 11.7411 5.567 11.5155 5.39176 11.3881L0.758856 8.02213C0.366999 7.73743 0.568387 7.11763 1.05275 7.11763H6.77933C6.99594 7.11763 7.18792 6.97815 7.25486 6.77213L9.02447 1.32583Z",
                                        fill: "url(#paint0_linear_11316_12706)"
                                    }
                                }), e("defs", [e("linearGradient", {
                                    attrs: {
                                        id: "paint0_linear_11316_12706",
                                        x1: "6",
                                        y1: "11.8623",
                                        x2: "14.5",
                                        y2: "11.8623",
                                        gradientUnits: "userSpaceOnUse"
                                    }
                                }, [e("stop", {
                                    attrs: {
                                        offset: "0.995404",
                                        "stop-color": "#91C51B"
                                    }
                                }), e("stop", {
                                    attrs: {
                                        offset: "1",
                                        "stop-color": "#D7DEED"
                                    }
                                })], 1)], 1)])]
                            },
                            proxy: !0
                        }, {
                            key: "rate",
                            fn: function() {
                                return [t._v("\n    " + t._s(t.$t("rate")) + "\n    "), e("a", {
                                    staticStyle: {
                                        "pointer-events": "none"
                                    },
                                    attrs: {
                                        href: "#"
                                    }
                                }, [t._v(t._s(t.$t("reviews")))])]
                            },
                            proxy: !0
                        }, {
                            key: "description",
                            fn: function() {
                                return [e("span", [t._v("2 906 000+")]), t._v(" "), e("span", [t._v(t._s(t.$t("downloads")))])]
                            },
                            proxy: !0
                        }])
                    })
                }), [], !1, null, "0af8437e", null);
            "function" == typeof l.default && Object(l.default)(component);
            e.a = component.exports
        },
        2245: function(t, e, r) {
            "use strict";
            var n = {
                    components: {
                        ReviewCard: r(2176).a
                    },
                    data: () => ({})
                },
                o = (r(2863), r(2)),
                l = r(2865),
                component = Object(o.a)(n, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("review-card", {
                        scopedSlots: t._u([{
                            key: "service",
                            fn: function() {
                                return [e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "110",
                                        height: "33",
                                        src: r(539),
                                        alt: "App Store"
                                    }
                                })]
                            },
                            proxy: !0
                        }, {
                            key: "score",
                            fn: function() {
                                return [e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("svg", {
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        viewBox: "0 0 19 19",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg"
                                    }
                                }, [e("path", {
                                    attrs: {
                                        d: "M9.02447 1.32583C9.17415 0.865175 9.82585 0.865175 9.97553 1.32583L11.7451 6.77213C11.8121 6.97815 12.0041 7.11763 12.2207 7.11763H17.9473C18.4316 7.11763 18.633 7.73743 18.2411 8.02213L13.6082 11.3881C13.433 11.5155 13.3597 11.7411 13.4266 11.9472L15.1962 17.3935C15.3459 17.8541 14.8187 18.2372 14.4268 17.9525L9.79389 14.5865C9.61865 14.4592 9.38135 14.4592 9.20611 14.5865L4.5732 17.9525C4.18135 18.2372 3.65411 17.8541 3.80378 17.3935L5.57339 11.9472C5.64033 11.7411 5.567 11.5155 5.39176 11.3881L0.758856 8.02213C0.366999 7.73743 0.568387 7.11763 1.05275 7.11763H6.77933C6.99594 7.11763 7.18792 6.97815 7.25486 6.77213L9.02447 1.32583Z",
                                        fill: "url(#paint0_linear_11316_12731)"
                                    }
                                }), e("defs", [e("linearGradient", {
                                    attrs: {
                                        id: "paint0_linear_11316_12731",
                                        x1: "6",
                                        y1: "11.8623",
                                        x2: "14.5",
                                        y2: "11.8623",
                                        gradientUnits: "userSpaceOnUse"
                                    }
                                }, [e("stop", {
                                    attrs: {
                                        offset: "0.6822",
                                        "stop-color": "#91C51B"
                                    }
                                }), e("stop", {
                                    attrs: {
                                        offset: "0.693506",
                                        "stop-color": "#D7DEED"
                                    }
                                })], 1)], 1)])]
                            },
                            proxy: !0
                        }, {
                            key: "rate",
                            fn: function() {
                                return [t._v("\n    " + t._s(t.$t("rate")) + "\n    "), e("a", {
                                    staticStyle: {
                                        "pointer-events": "none"
                                    },
                                    attrs: {
                                        href: "#"
                                    }
                                }, [t._v(t._s(t.$t("reviews")))])]
                            },
                            proxy: !0
                        }, {
                            key: "description",
                            fn: function() {
                                return [e("span", [t._v("588 000+")]), t._v(" "), e("span", [t._v(t._s(t.$t("downloads")))])]
                            },
                            proxy: !0
                        }])
                    })
                }), [], !1, null, "377e4cca", null);
            "function" == typeof l.default && Object(l.default)(component);
            e.a = component.exports
        },
        2246: function(t, e, r) {
            "use strict";
            var n = {
                    components: {
                        ReviewCard: r(2176).a
                    },
                    data: () => ({})
                },
                o = (r(2866), r(2)),
                l = r(2868),
                component = Object(o.a)(n, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("review-card", {
                        scopedSlots: t._u([{
                            key: "service",
                            fn: function() {
                                return [e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "103",
                                        height: "26",
                                        src: r(553),
                                        alt: "Windows"
                                    }
                                })]
                            },
                            proxy: !0
                        }, {
                            key: "score",
                            fn: function() {
                                return [e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("svg", {
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        viewBox: "0 0 19 19",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg"
                                    }
                                }, [e("path", {
                                    attrs: {
                                        d: "M9.02447 1.32583C9.17415 0.865175 9.82585 0.865175 9.97553 1.32583L11.7451 6.77213C11.8121 6.97815 12.0041 7.11763 12.2207 7.11763H17.9473C18.4316 7.11763 18.633 7.73743 18.2411 8.02213L13.6082 11.3881C13.433 11.5155 13.3597 11.7411 13.4266 11.9472L15.1962 17.3935C15.3459 17.8541 14.8187 18.2372 14.4268 17.9525L9.79389 14.5865C9.61865 14.4592 9.38135 14.4592 9.20611 14.5865L4.5732 17.9525C4.18135 18.2372 3.65411 17.8541 3.80378 17.3935L5.57339 11.9472C5.64033 11.7411 5.567 11.5155 5.39176 11.3881L0.758856 8.02213C0.366999 7.73743 0.568387 7.11763 1.05275 7.11763H6.77933C6.99594 7.11763 7.18792 6.97815 7.25486 6.77213L9.02447 1.32583Z",
                                        fill: "url(#paint0_linear_11316_12731)"
                                    }
                                }), e("defs", [e("linearGradient", {
                                    attrs: {
                                        id: "paint0_linear_11316_12731",
                                        x1: "6",
                                        y1: "11.8623",
                                        x2: "14.5",
                                        y2: "11.8623",
                                        gradientUnits: "userSpaceOnUse"
                                    }
                                }, [e("stop", {
                                    attrs: {
                                        offset: "0.6822",
                                        "stop-color": "#91C51B"
                                    }
                                }), e("stop", {
                                    attrs: {
                                        offset: "0.693506",
                                        "stop-color": "#D7DEED"
                                    }
                                })], 1)], 1)])]
                            },
                            proxy: !0
                        }, {
                            key: "rate",
                            fn: function() {
                                return [t._v("\n    " + t._s(t.$t("rate")) + "\n    "), e("a", {
                                    staticStyle: {
                                        "pointer-events": "none"
                                    },
                                    attrs: {
                                        href: "#"
                                    }
                                }, [t._v(t._s(t.$t("reviews")))])]
                            },
                            proxy: !0
                        }, {
                            key: "description",
                            fn: function() {
                                return [e("span", [t._v("300 563+")]), t._v(" "), e("span", [t._v(t._s(t.$t("installs")))])]
                            },
                            proxy: !0
                        }])
                    })
                }), [], !1, null, "de6a7a52", null);
            "function" == typeof l.default && Object(l.default)(component);
            e.a = component.exports
        },
        2247: function(t, e, r) {
            "use strict";
            var n = {
                    components: {
                        ReviewCard: r(2176).a
                    },
                    data: () => ({})
                },
                o = (r(2869), r(2)),
                l = r(2871),
                component = Object(o.a)(n, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("review-card", {
                        scopedSlots: t._u([{
                            key: "service",
                            fn: function() {
                                return [e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "93",
                                        height: "26",
                                        src: r(540),
                                        alt: "Chrome"
                                    }
                                })]
                            },
                            proxy: !0
                        }, {
                            key: "score",
                            fn: function() {
                                return [e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("svg", {
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        viewBox: "0 0 19 19",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg"
                                    }
                                }, [e("path", {
                                    attrs: {
                                        d: "M9.02447 1.32583C9.17415 0.865175 9.82585 0.865175 9.97553 1.32583L11.7451 6.77213C11.8121 6.97815 12.0041 7.11763 12.2207 7.11763H17.9473C18.4316 7.11763 18.633 7.73743 18.2411 8.02213L13.6082 11.3881C13.433 11.5155 13.3597 11.7411 13.4266 11.9472L15.1962 17.3935C15.3459 17.8541 14.8187 18.2372 14.4268 17.9525L9.79389 14.5865C9.61865 14.4592 9.38135 14.4592 9.20611 14.5865L4.5732 17.9525C4.18135 18.2372 3.65411 17.8541 3.80378 17.3935L5.57339 11.9472C5.64033 11.7411 5.567 11.5155 5.39176 11.3881L0.758856 8.02213C0.366999 7.73743 0.568387 7.11763 1.05275 7.11763H6.77933C6.99594 7.11763 7.18792 6.97815 7.25486 6.77213L9.02447 1.32583Z",
                                        fill: "url(#paint0_linear_11316_12731)"
                                    }
                                }), e("defs", [e("linearGradient", {
                                    attrs: {
                                        id: "paint0_linear_11316_12731",
                                        x1: "6",
                                        y1: "11.8623",
                                        x2: "14.5",
                                        y2: "11.8623",
                                        gradientUnits: "userSpaceOnUse"
                                    }
                                }, [e("stop", {
                                    attrs: {
                                        offset: "0.6822",
                                        "stop-color": "#91C51B"
                                    }
                                }), e("stop", {
                                    attrs: {
                                        offset: "0.693506",
                                        "stop-color": "#D7DEED"
                                    }
                                })], 1)], 1)])]
                            },
                            proxy: !0
                        }, {
                            key: "rate",
                            fn: function() {
                                return [t._v("\n    " + t._s(t.$t("rate")) + "\n    "), e("a", {
                                    staticStyle: {
                                        "pointer-events": "none"
                                    },
                                    attrs: {
                                        href: "#"
                                    }
                                }, [t._v(t._s(t.$t("reviews")))])]
                            },
                            proxy: !0
                        }, {
                            key: "description",
                            fn: function() {
                                return [e("span", [t._v("700 000+")]), t._v(" "), e("span", [t._v(t._s(t.$t("installs")))])]
                            },
                            proxy: !0
                        }])
                    })
                }), [], !1, null, "d80711d8", null);
            "function" == typeof l.default && Object(l.default)(component);
            e.a = component.exports
        },
        2248: function(t, e, r) {
            "use strict";
            var n = {
                    components: {
                        ReviewCard: r(2176).a
                    },
                    data: () => ({})
                },
                o = (r(2872), r(2)),
                l = r(2874),
                component = Object(o.a)(n, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("review-card", {
                        scopedSlots: t._u([{
                            key: "service",
                            fn: function() {
                                return [e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "86",
                                        height: "31",
                                        src: r(543),
                                        alt: "Firefox"
                                    }
                                })]
                            },
                            proxy: !0
                        }, {
                            key: "score",
                            fn: function() {
                                return [e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("svg", {
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        viewBox: "0 0 19 19",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg"
                                    }
                                }, [e("path", {
                                    attrs: {
                                        d: "M9.02447 1.32583C9.17415 0.865175 9.82585 0.865175 9.97553 1.32583L11.7451 6.77213C11.8121 6.97815 12.0041 7.11763 12.2207 7.11763H17.9473C18.4316 7.11763 18.633 7.73743 18.2411 8.02213L13.6082 11.3881C13.433 11.5155 13.3597 11.7411 13.4266 11.9472L15.1962 17.3935C15.3459 17.8541 14.8187 18.2372 14.4268 17.9525L9.79389 14.5865C9.61865 14.4592 9.38135 14.4592 9.20611 14.5865L4.5732 17.9525C4.18135 18.2372 3.65411 17.8541 3.80378 17.3935L5.57339 11.9472C5.64033 11.7411 5.567 11.5155 5.39176 11.3881L0.758856 8.02213C0.366999 7.73743 0.568387 7.11763 1.05275 7.11763H6.77933C6.99594 7.11763 7.18792 6.97815 7.25486 6.77213L9.02447 1.32583Z",
                                        fill: "url(#paint0_linear_11316_12731)"
                                    }
                                }), e("defs", [e("linearGradient", {
                                    attrs: {
                                        id: "paint0_linear_11316_12731",
                                        x1: "6",
                                        y1: "11.8623",
                                        x2: "14.5",
                                        y2: "11.8623",
                                        gradientUnits: "userSpaceOnUse"
                                    }
                                }, [e("stop", {
                                    attrs: {
                                        offset: "0.6822",
                                        "stop-color": "#91C51B"
                                    }
                                }), e("stop", {
                                    attrs: {
                                        offset: "0.693506",
                                        "stop-color": "#D7DEED"
                                    }
                                })], 1)], 1)])]
                            },
                            proxy: !0
                        }, {
                            key: "rate",
                            fn: function() {
                                return [t._v("\n    " + t._s(t.$t("rate")) + "\n    "), e("a", {
                                    staticStyle: {
                                        "pointer-events": "none"
                                    },
                                    attrs: {
                                        href: "#"
                                    }
                                }, [t._v(t._s(t.$t("reviews")))])]
                            },
                            proxy: !0
                        }, {
                            key: "description",
                            fn: function() {
                                return [e("span", [t._v("30 000+")]), t._v(" "), e("span", [t._v(t._s(t.$t("installs")))])]
                            },
                            proxy: !0
                        }])
                    })
                }), [], !1, null, "6291f2ec", null);
            "function" == typeof l.default && Object(l.default)(component);
            e.a = component.exports
        },
        2249: function(t, e, r) {
            "use strict";
            var n = {
                    components: {
                        ReviewCard: r(2176).a
                    },
                    data: () => ({})
                },
                o = (r(2875), r(2)),
                l = r(2877),
                component = Object(o.a)(n, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("review-card", {
                        scopedSlots: t._u([{
                            key: "service",
                            fn: function() {
                                return [e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "73",
                                        height: "26",
                                        src: r(541),
                                        alt: "Edge"
                                    }
                                })]
                            },
                            proxy: !0
                        }, {
                            key: "score",
                            fn: function() {
                                return [e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("svg", {
                                    attrs: {
                                        width: "19",
                                        height: "18",
                                        viewBox: "0 0 19 18",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg"
                                    }
                                }, [e("path", {
                                    attrs: {
                                        d: "M9.02447 0.463526C9.17415 0.0028708 9.82585 0.00287008 9.97553 0.463525L11.7451 5.90983C11.8121 6.11584 12.0041 6.25532 12.2207 6.25532H17.9473C18.4316 6.25532 18.633 6.87513 18.2411 7.15983L13.6082 10.5258C13.433 10.6532 13.3597 10.8788 13.4266 11.0848L15.1962 16.5312C15.3459 16.9918 14.8187 17.3749 14.4268 17.0902L9.79389 13.7242C9.61865 13.5968 9.38135 13.5968 9.20611 13.7242L4.5732 17.0902C4.18135 17.3749 3.65411 16.9918 3.80378 16.5312L5.57339 11.0848C5.64033 10.8788 5.567 10.6532 5.39176 10.5258L0.758856 7.15983C0.366999 6.87513 0.568387 6.25532 1.05275 6.25532H6.77933C6.99594 6.25532 7.18792 6.11584 7.25486 5.90983L9.02447 0.463526Z",
                                        fill: "url(#paint0_linear_11981_1702)"
                                    }
                                }), e("defs", [e("linearGradient", {
                                    attrs: {
                                        id: "paint0_linear_11981_1702",
                                        x1: "6",
                                        y1: "11",
                                        x2: "15.9515",
                                        y2: "11",
                                        gradientUnits: "userSpaceOnUse"
                                    }
                                }, [e("stop", {
                                    attrs: {
                                        offset: "0.873948",
                                        "stop-color": "#91C51B"
                                    }
                                }), e("stop", {
                                    attrs: {
                                        offset: "0.955332",
                                        "stop-color": "#D7DEED"
                                    }
                                })], 1)], 1)])]
                            },
                            proxy: !0
                        }, {
                            key: "rate",
                            fn: function() {
                                return [t._v("\n    " + t._s(t.$t("rate")) + "\n    "), e("a", {
                                    staticStyle: {
                                        "pointer-events": "none"
                                    },
                                    attrs: {
                                        href: "#"
                                    }
                                }, [t._v(t._s(t.$t("reviews")))])]
                            },
                            proxy: !0
                        }, {
                            key: "description",
                            fn: function() {
                                return [e("span", [t._v("100 000+")]), t._v(" "), e("span", [t._v(t._s(t.$t("installs")))])]
                            },
                            proxy: !0
                        }])
                    })
                }), [], !1, null, "5d93fb34", null);
            "function" == typeof l.default && Object(l.default)(component);
            e.a = component.exports
        },
        2250: function(t, e, r) {
            "use strict";
            var n = {
                    components: {
                        ReviewCard: r(2176).a
                    },
                    data: () => ({})
                },
                o = (r(2878), r(2)),
                l = r(2880),
                component = Object(o.a)(n, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("review-card", {
                        scopedSlots: t._u([{
                            key: "service",
                            fn: function() {
                                return [e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "83",
                                        height: "33",
                                        src: r(545),
                                        alt: "Google reviews"
                                    }
                                })]
                            },
                            proxy: !0
                        }, {
                            key: "score",
                            fn: function() {
                                return [e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("svg", {
                                    attrs: {
                                        width: "19",
                                        height: "18",
                                        viewBox: "0 0 19 18",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg"
                                    }
                                }, [e("path", {
                                    attrs: {
                                        d: "M9.02447 0.463526C9.17415 0.0028708 9.82585 0.00287008 9.97553 0.463525L11.7451 5.90983C11.8121 6.11584 12.0041 6.25532 12.2207 6.25532H17.9473C18.4316 6.25532 18.633 6.87513 18.2411 7.15983L13.6082 10.5258C13.433 10.6532 13.3597 10.8788 13.4266 11.0848L15.1962 16.5312C15.3459 16.9918 14.8187 17.3749 14.4268 17.0902L9.79389 13.7242C9.61865 13.5968 9.38135 13.5968 9.20611 13.7242L4.5732 17.0902C4.18135 17.3749 3.65411 16.9918 3.80378 16.5312L5.57339 11.0848C5.64033 10.8788 5.567 10.6532 5.39176 10.5258L0.758856 7.15983C0.366999 6.87513 0.568387 6.25532 1.05275 6.25532H6.77933C6.99594 6.25532 7.18792 6.11584 7.25486 5.90983L9.02447 0.463526Z",
                                        fill: "url(#paint0_linear_11981_1702)"
                                    }
                                }), e("defs", [e("linearGradient", {
                                    attrs: {
                                        id: "paint0_linear_11981_1702",
                                        x1: "6",
                                        y1: "11",
                                        x2: "15.9515",
                                        y2: "11",
                                        gradientUnits: "userSpaceOnUse"
                                    }
                                }, [e("stop", {
                                    attrs: {
                                        offset: "0.873948",
                                        "stop-color": "#91C51B"
                                    }
                                }), e("stop", {
                                    attrs: {
                                        offset: "0.955332",
                                        "stop-color": "#D7DEED"
                                    }
                                })], 1)], 1)])]
                            },
                            proxy: !0
                        }, {
                            key: "rate",
                            fn: function() {
                                return [t._v("\n    " + t._s(t.$t("rate")) + "\n    "), e("a", {
                                    staticStyle: {
                                        "pointer-events": "none"
                                    },
                                    attrs: {
                                        href: "#"
                                    }
                                }, [t._v(t._s(t.$t("reviews")))])]
                            },
                            proxy: !0
                        }])
                    })
                }), [], !1, null, "29e16534", null);
            "function" == typeof l.default && Object(l.default)(component);
            e.a = component.exports
        },
        2251: function(t, e, r) {
            "use strict";
            var n = {
                    components: {
                        ReviewCard: r(2176).a
                    },
                    data: () => ({})
                },
                o = (r(2881), r(2)),
                l = r(2883),
                component = Object(o.a)(n, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("review-card", {
                        scopedSlots: t._u([{
                            key: "service",
                            fn: function() {
                                return [e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "109",
                                        height: "26",
                                        src: r(551),
                                        alt: "Uptodown"
                                    }
                                })]
                            },
                            proxy: !0
                        }, {
                            key: "score",
                            fn: function() {
                                return [e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("svg", {
                                    attrs: {
                                        width: "19",
                                        height: "18",
                                        viewBox: "0 0 19 18",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg"
                                    }
                                }, [e("path", {
                                    attrs: {
                                        d: "M8.69122 0.963526C8.8409 0.502871 9.4926 0.50287 9.64228 0.963525L11.4119 6.40983C11.4788 6.61584 11.6708 6.75532 11.8874 6.75532H17.614C18.0984 6.75532 18.2997 7.37513 17.9079 7.65983L13.275 11.0258C13.0997 11.1532 13.0264 11.3788 13.0934 11.5848L14.863 17.0312C15.0126 17.4918 14.4854 17.8749 14.0935 17.5902L9.46064 14.2242C9.2854 14.0968 9.0481 14.0968 8.87286 14.2242L4.23995 17.5902C3.8481 17.8749 3.32086 17.4918 3.47053 17.0312L5.24014 11.5848C5.30708 11.3788 5.23375 11.1532 5.05851 11.0258L0.425604 7.65983C0.0337474 7.37513 0.235135 6.75532 0.719496 6.75532H6.44608C6.66269 6.75532 6.85467 6.61584 6.92161 6.40983L8.69122 0.963526Z",
                                        fill: "url(#paint0_linear_11981_536)"
                                    }
                                }), e("defs", [e("linearGradient", {
                                    attrs: {
                                        id: "paint0_linear_11981_536",
                                        x1: "5.66675",
                                        y1: "11.5",
                                        x2: "14.1667",
                                        y2: "11.5",
                                        gradientUnits: "userSpaceOnUse"
                                    }
                                }, [e("stop", {
                                    attrs: {
                                        offset: "0.6822",
                                        "stop-color": "#91C51B"
                                    }
                                }), e("stop", {
                                    attrs: {
                                        offset: "1",
                                        "stop-color": "#92C61C"
                                    }
                                })], 1)], 1)])]
                            },
                            proxy: !0
                        }, {
                            key: "rate",
                            fn: function() {
                                return [t._v("\n    " + t._s(t.$t("rate")) + "\n  ")]
                            },
                            proxy: !0
                        }])
                    })
                }), [], !1, null, "367799d6", null);
            "function" == typeof l.default && Object(l.default)(component);
            e.a = component.exports
        },
        2252: function(t, e, r) {
            "use strict";
            var n = {
                    components: {
                        ReviewCard: r(2176).a
                    },
                    data: () => ({})
                },
                o = (r(2884), r(2)),
                l = r(2886),
                component = Object(o.a)(n, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("review-card", {
                        scopedSlots: t._u([{
                            key: "service",
                            fn: function() {
                                return [e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "78",
                                        height: "25",
                                        src: r(546),
                                        alt: "Opera"
                                    }
                                })]
                            },
                            proxy: !0
                        }, {
                            key: "score",
                            fn: function() {
                                return [e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("svg", {
                                    attrs: {
                                        width: "19",
                                        height: "18",
                                        viewBox: "0 0 19 18",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg"
                                    }
                                }, [e("path", {
                                    attrs: {
                                        d: "M9.02447 0.825831C9.17415 0.365175 9.82585 0.365175 9.97553 0.82583L11.7451 6.27213C11.8121 6.47815 12.0041 6.61763 12.2207 6.61763H17.9473C18.4316 6.61763 18.633 7.23743 18.2411 7.52213L13.6082 10.8881C13.433 11.0155 13.3597 11.2411 13.4266 11.4472L15.1962 16.8935C15.3459 17.3541 14.8187 17.7372 14.4268 17.4525L9.79389 14.0865C9.61865 13.9592 9.38135 13.9592 9.20611 14.0865L4.5732 17.4525C4.18135 17.7372 3.65411 17.3541 3.80378 16.8935L5.57339 11.4472C5.64033 11.2411 5.567 11.0155 5.39176 10.8881L0.758856 7.52213C0.366999 7.23743 0.568387 6.61763 1.05275 6.61763H6.77933C6.99594 6.61763 7.18792 6.47815 7.25486 6.27213L9.02447 0.825831Z",
                                        fill: "url(#paint0_linear_12027_94558)"
                                    }
                                }), e("defs", [e("linearGradient", {
                                    attrs: {
                                        id: "paint0_linear_12027_94558",
                                        x1: "6",
                                        y1: "11.3623",
                                        x2: "14.5",
                                        y2: "11.3623",
                                        gradientUnits: "userSpaceOnUse"
                                    }
                                }, [e("stop", {
                                    attrs: {
                                        offset: "0.543174",
                                        "stop-color": "#91C51B"
                                    }
                                }), e("stop", {
                                    attrs: {
                                        offset: "0.560507",
                                        "stop-color": "#D7DEED"
                                    }
                                })], 1)], 1)])]
                            },
                            proxy: !0
                        }, {
                            key: "rate",
                            fn: function() {
                                return [t._v("\n    " + t._s(t.$t("rate")) + "\n    "), e("a", {
                                    staticStyle: {
                                        "pointer-events": "none"
                                    },
                                    attrs: {
                                        href: "#"
                                    }
                                }, [t._v(t._s(t.$t("reviews")))])]
                            },
                            proxy: !0
                        }, {
                            key: "description",
                            fn: function() {
                                return [e("span", [t._v("381 145+")]), t._v(" "), e("span", [t._v(t._s(t.$t("installs")))])]
                            },
                            proxy: !0
                        }])
                    })
                }), [], !1, null, "6ae79572", null);
            "function" == typeof l.default && Object(l.default)(component);
            e.a = component.exports
        },
        2253: function(t, e, r) {
            "use strict";
            var n = {
                    components: {
                        ReviewCard: r(2176).a
                    },
                    data: () => ({})
                },
                o = (r(2887), r(2)),
                l = r(2889),
                component = Object(o.a)(n, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("review-card", {
                        scopedSlots: t._u([{
                            key: "service",
                            fn: function() {
                                return [e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "90",
                                        height: "25",
                                        src: r(548),
                                        alt: "Softonic"
                                    }
                                })]
                            },
                            proxy: !0
                        }, {
                            key: "score",
                            fn: function() {
                                return [e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("svg", {
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        viewBox: "0 0 19 19",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg"
                                    }
                                }, [e("path", {
                                    attrs: {
                                        d: "M9.02447 1.32583C9.17415 0.865175 9.82585 0.865175 9.97553 1.32583L11.7451 6.77213C11.8121 6.97815 12.0041 7.11763 12.2207 7.11763H17.9473C18.4316 7.11763 18.633 7.73743 18.2411 8.02213L13.6082 11.3881C13.433 11.5155 13.3597 11.7411 13.4266 11.9472L15.1962 17.3935C15.3459 17.8541 14.8187 18.2372 14.4268 17.9525L9.79389 14.5865C9.61865 14.4592 9.38135 14.4592 9.20611 14.5865L4.5732 17.9525C4.18135 18.2372 3.65411 17.8541 3.80378 17.3935L5.57339 11.9472C5.64033 11.7411 5.567 11.5155 5.39176 11.3881L0.758856 8.02213C0.366999 7.73743 0.568387 7.11763 1.05275 7.11763H6.77933C6.99594 7.11763 7.18792 6.97815 7.25486 6.77213L9.02447 1.32583Z",
                                        fill: "url(#paint0_linear_11316_12731)"
                                    }
                                }), e("defs", [e("linearGradient", {
                                    attrs: {
                                        id: "paint0_linear_11316_12731",
                                        x1: "6",
                                        y1: "11.8623",
                                        x2: "14.5",
                                        y2: "11.8623",
                                        gradientUnits: "userSpaceOnUse"
                                    }
                                }, [e("stop", {
                                    attrs: {
                                        offset: "0.6822",
                                        "stop-color": "#91C51B"
                                    }
                                }), e("stop", {
                                    attrs: {
                                        offset: "0.693506",
                                        "stop-color": "#D7DEED"
                                    }
                                })], 1)], 1)])]
                            },
                            proxy: !0
                        }, {
                            key: "rate",
                            fn: function() {
                                return [t._v("\n    " + t._s(t.$t("rate")) + "\n  ")]
                            },
                            proxy: !0
                        }])
                    })
                }), [], !1, null, "1c1993c6", null);
            "function" == typeof l.default && Object(l.default)(component);
            e.a = component.exports
        },
        2254: function(t, e, r) {
            "use strict";
            var n = {
                    components: {
                        ReviewCard: r(2176).a
                    },
                    data: () => ({})
                },
                o = (r(2890), r(2)),
                l = r(2892),
                component = Object(o.a)(n, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("review-card", {
                        scopedSlots: t._u([{
                            key: "service",
                            fn: function() {
                                return [e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "99",
                                        height: "25",
                                        src: r(547),
                                        alt: "Softlay"
                                    }
                                })]
                            },
                            proxy: !0
                        }, {
                            key: "score",
                            fn: function() {
                                return [e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("svg", {
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        viewBox: "0 0 19 19",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg"
                                    }
                                }, [e("path", {
                                    attrs: {
                                        d: "M9.02447 1.32583C9.17415 0.865175 9.82585 0.865175 9.97553 1.32583L11.7451 6.77213C11.8121 6.97815 12.0041 7.11763 12.2207 7.11763H17.9473C18.4316 7.11763 18.633 7.73743 18.2411 8.02213L13.6082 11.3881C13.433 11.5155 13.3597 11.7411 13.4266 11.9472L15.1962 17.3935C15.3459 17.8541 14.8187 18.2372 14.4268 17.9525L9.79389 14.5865C9.61865 14.4592 9.38135 14.4592 9.20611 14.5865L4.5732 17.9525C4.18135 18.2372 3.65411 17.8541 3.80378 17.3935L5.57339 11.9472C5.64033 11.7411 5.567 11.5155 5.39176 11.3881L0.758856 8.02213C0.366999 7.73743 0.568387 7.11763 1.05275 7.11763H6.77933C6.99594 7.11763 7.18792 6.97815 7.25486 6.77213L9.02447 1.32583Z",
                                        fill: "url(#paint0_linear_11316_12731)"
                                    }
                                }), e("defs", [e("linearGradient", {
                                    attrs: {
                                        id: "paint0_linear_11316_12731",
                                        x1: "6",
                                        y1: "11.8623",
                                        x2: "14.5",
                                        y2: "11.8623",
                                        gradientUnits: "userSpaceOnUse"
                                    }
                                }, [e("stop", {
                                    attrs: {
                                        offset: "0.6822",
                                        "stop-color": "#91C51B"
                                    }
                                }), e("stop", {
                                    attrs: {
                                        offset: "0.693506",
                                        "stop-color": "#D7DEED"
                                    }
                                })], 1)], 1)])]
                            },
                            proxy: !0
                        }, {
                            key: "rate",
                            fn: function() {
                                return [t._v("\n    " + t._s(t.$t("rate")) + "\n  ")]
                            },
                            proxy: !0
                        }])
                    })
                }), [], !1, null, "2e7cd32d", null);
            "function" == typeof l.default && Object(l.default)(component);
            e.a = component.exports
        },
        2255: function(t, e, r) {
            "use strict";
            var n = {
                    components: {
                        ReviewCard: r(2176).a
                    },
                    data: () => ({})
                },
                o = (r(2893), r(2)),
                l = r(2895),
                component = Object(o.a)(n, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("review-card", {
                        scopedSlots: t._u([{
                            key: "service",
                            fn: function() {
                                return [e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "100",
                                        height: "25",
                                        src: r(542),
                                        alt: "FileHippo"
                                    }
                                })]
                            },
                            proxy: !0
                        }, {
                            key: "score",
                            fn: function() {
                                return [e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("img", {
                                    staticClass: "star",
                                    attrs: {
                                        width: "19",
                                        height: "19",
                                        src: r(404),
                                        alt: "star"
                                    }
                                }), t._v(" "), e("svg", {
                                    attrs: {
                                        width: "18",
                                        height: "18",
                                        viewBox: "0 0 18 18",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg"
                                    }
                                }, [e("path", {
                                    attrs: {
                                        d: "M8.52447 0.463526C8.67415 0.0028708 9.32585 0.00287008 9.47553 0.463525L11.2451 5.90983C11.3121 6.11584 11.5041 6.25532 11.7207 6.25532H17.4473C17.9316 6.25532 18.133 6.87513 17.7411 7.15983L13.1082 10.5258C12.933 10.6532 12.8597 10.8788 12.9266 11.0848L14.6962 16.5312C14.8459 16.9918 14.3187 17.3749 13.9268 17.0902L9.29389 13.7242C9.11865 13.5968 8.88135 13.5968 8.70611 13.7242L4.0732 17.0902C3.68135 17.3749 3.15411 16.9918 3.30378 16.5312L5.07339 11.0848C5.14033 10.8788 5.067 10.6532 4.89176 10.5258L0.258856 7.15983C-0.133001 6.87513 0.0683866 6.25532 0.552748 6.25532H6.27933C6.49594 6.25532 6.68792 6.11584 6.75486 5.90983L8.52447 0.463526Z",
                                        fill: "url(#paint0_linear_2562_20985)"
                                    }
                                }), e("defs", [e("linearGradient", {
                                    attrs: {
                                        id: "paint0_linear_2562_20985",
                                        x1: "0.599951",
                                        y1: "11",
                                        x2: "9",
                                        y2: "11",
                                        gradientUnits: "userSpaceOnUse"
                                    }
                                }, [e("stop", {
                                    attrs: {
                                        offset: "0.543174",
                                        "stop-color": "#91C51B"
                                    }
                                }), e("stop", {
                                    attrs: {
                                        offset: "0.560507",
                                        "stop-color": "#D7DEED"
                                    }
                                })], 1)], 1)])]
                            },
                            proxy: !0
                        }, {
                            key: "rate",
                            fn: function() {
                                return [t._v("\n    " + t._s(t.$t("rate")) + "\n  ")]
                            },
                            proxy: !0
                        }])
                    })
                }), [], !1, null, "26789a22", null);
            "function" == typeof l.default && Object(l.default)(component);
            e.a = component.exports
        },
        2299: function(t, e) {
            t.exports = function(t) {
                t.options.__i18n = t.options.__i18n || [], t.options.__i18n.push('{"ar":{"rate":"صنف 4.8 من 5","reviews":"141 عدد التعليقات "},"de":{"rate":"Bewertet mit 4.8 von 5","reviews":"141 Bewertungen"},"en":{"rate":"Rated 4.8 out of 5","reviews":"141 reviews"},"es":{"rate":"Calificación de 4.8 de 5","reviews":"141 reseñas"},"fr":{"rate":"Noté 4.8 sur 5","reviews":"141 avis"},"ru":{"rate":"Оценка 4.8 из 5","reviews":"141 отзыв"},"sv":{"rate":"4.8 av 5 i betyg","reviews":"141 recensioner"},"tr":{"rate":"5 üzerinden 4.8 puan aldı","reviews":"141 inceleme"},"ua":{"rate":"Оцінка 4.8 з 5","reviews":"141 відгук"},"pt":{"rate":"Classificação 4.8 de 5","reviews":"141 comentários"},"th":{"rate":"ได้คะแนน 4.8 จาก 5","reviews":"141 รีวิว"},"it":{"rate":"Voto 4,8 su 5","reviews":"141 recensioni"}}'), delete t.options._Ctor
            }
        },
        2300: function(t, e) {
            t.exports = function(t) {
                t.options.__i18n = t.options.__i18n || [], t.options.__i18n.push('{"ar":{"rate":"صنف 4.8 من 5"},"de":{"rate":"Bewertet mit 4.8 von 5"},"en":{"rate":"Rated 4.8 out of 5"},"es":{"rate":"Calificación de 4.8 de 5"},"fr":{"rate":"Noté 4.8 sur 5"},"ru":{"rate":"Оценка 4.8 из 5"},"sv":{"rate":"4.8 av 5 i betyg"},"tr":{"rate":"5 üzerinden 4.8 puan aldı"},"ua":{"rate":"Оцінка 4.8 з 5"},"pt":{"rate":"Classificação 4.8 de 5"},"th":{"rate":"ได้คะแนน 4.8 จาก 5"},"it":{"rate":"Voto 4,8 su 5"}}'), delete t.options._Ctor
            }
        },
        2301: function(t, e) {
            t.exports = function(t) {
                t.options.__i18n = t.options.__i18n || [], t.options.__i18n.push('{"ar":{"rate":"صنف 4.5 من 5"},"de":{"rate":"Bewertet mit 4.5 von 5"},"en":{"rate":"Rated 4.5 out of 5"},"es":{"rate":"Calificación de 4.5 de 5"},"fr":{"rate":"Noté 4.5 sur 5"},"ru":{"rate":"Оценка 4.5 из 5"},"sv":{"rate":"4.5 av 5 i betyg"},"tr":{"rate":"5 üzerinden 4.5 puan aldı"},"ua":{"rate":"Оцінка 4.5 з 5"},"pt":{"rate":"Classificação 4.5 de 5"},"th":{"rate":"ได้คะแนน 4.5 จาก 5"},"it":{"rate":"Voto 4,5 su 5"}}'), delete t.options._Ctor
            }
        },
        2302: function(t, e) {
            t.exports = function(t) {
                t.options.__i18n = t.options.__i18n || [], t.options.__i18n.push('{"ar":{"rate":"صنف 4.8 من 5","reviews":"303k تعليق","downloads":"التحميلات"},"de":{"rate":"Bewertet mit 4.8 von 5","reviews":"303k Bewertungen","downloads":"Downloads"},"en":{"rate":"Rated 4.8 out of 5","reviews":"303k reviews","downloads":"Downloads"},"es":{"rate":"Calificación de 4.8 de 5","reviews":"303k reseñas","downloads":"Descargas"},"fr":{"rate":"Noté 4.8 sur 5","reviews":"303k avis","downloads":"Téléchargements"},"ru":{"rate":"Оценка 4.8 из 5","reviews":"303k отзывов","downloads":"Скачиваний"},"sv":{"rate":"4.8 av 5 i betyg","reviews":"303k recensioner","downloads":"Nedladdningar"},"tr":{"rate":"5 üzerinden 4.8 puan aldı","reviews":"303 bin inceleme","downloads":"İndirilenler"},"ua":{"rate":"Оцінка 4.8 з 5","reviews":"303k відгуків","downloads":"Завантаженнь"},"pt":{"rate":"Classificação 4.8 de 5","reviews":"303 mil comentários","downloads":"Transferências"},"th":{"rate":"ได้คะแนน 4.8 จาก 5","reviews":"303k รีวิว","downloads":"ดาวน์โหลด"},"it":{"rate":"Voto 4,8 su 5","reviews":"303k recensioni","downloads":"Scaricamenti"}}'), delete t.options._Ctor
            }
        },
        2303: function(t, e) {
            t.exports = function(t) {
                t.options.__i18n = t.options.__i18n || [], t.options.__i18n.push('{"ar":{"rate":"صنف 4.8 من 5","reviews":"43,3k تعليق","downloads":"التحميلات"},"de":{"rate":"Bewertet mit 4.8 von 5","reviews":"43,3k Bewertungen","downloads":"Downloads"},"en":{"rate":"Rated 4.8 out of 5","reviews":"43,3k reviews","downloads":"Downloads"},"es":{"rate":"Calificación de 4.8 de 5","reviews":"43,3k reseñas","downloads":"Descargas"},"fr":{"rate":"Noté 4.8 sur 5","reviews":"43,3k avis","downloads":"Téléchargements"},"ru":{"rate":"Оценка 4.8 из 5","reviews":"43,3k отзывов","downloads":"Скачиваний"},"sv":{"rate":"4.8 av 5 i betyg","reviews":"43,3k recensioner","downloads":"Nedladdningar"},"tr":{"rate":"5 üzerinden 4.8 puan aldı","reviews":"43,3 bin inceleme","downloads":"İndirilenler"},"ua":{"rate":"Оцінка 4.8 з 5","reviews":"43,3k відгуків","downloads":"Завантаженнь"},"pt":{"rate":"Classificação 4.8 de 5","reviews":"43,3 mil comentários","downloads":"Transferências"},"th":{"rate":"ได้คะแนน 4.8 จาก 5","reviews":"43,3k รีวิว","downloads":"ดาวน์โหลด"},"it":{"rate":"Voto 4,8 su 5","reviews":"43,3k recensioni","downloads":"Scaricamenti"}}'), delete t.options._Ctor
            }
        },
        2304: function(t, e) {
            t.exports = function(t) {
                t.options.__i18n = t.options.__i18n || [], t.options.__i18n.push('{"ar":{"rate":"صنف 4.6 من 5","reviews":"2475 تعليق","installs":"التثبيتات"},"de":{"rate":"Bewertet mit 4.6 von 5","reviews":"2475 Bewertungen","installs":"Installiert"},"en":{"rate":"Rated 4.6 out of 5","reviews":"2475 reviews","installs":"Installs"},"es":{"rate":"Calificación de 4.6 de 5","reviews":"2475 reseñas","installs":"Instalaciones"},"fr":{"rate":"Noté 4.6 sur 5","reviews":"2475 avis","installs":"Installations"},"ru":{"rate":"Оценка 4.6 из 5","reviews":"2475 отзывов","installs":"Установок"},"sv":{"rate":"4.6 av 5 i betyg","reviews":"2475 recensioner","installs":"Installerar"},"tr":{"rate":"5 üzerinden 4.6 puan aldı","reviews":"2475 inceleme","installs":"Yüklemeler"},"ua":{"rate":"Оцінка 4.6 з 5","reviews":"2475 відгуків","installs":"Установок"},"pt":{"rate":"Classificação 4.6 de 5","reviews":"2475 comentários","installs":"Instalações"},"th":{"rate":"ได้คะแนน 4.6 จาก 5","reviews":"2475 รีวิว","installs":"การติดตั้ง"},"it":{"rate":"Voto 4,6 su 5","reviews":"2475 recensioni","installs":"Installazioni"}}'), delete t.options._Ctor
            }
        },
        2305: function(t, e) {
            t.exports = function(t) {
                t.options.__i18n = t.options.__i18n || [], t.options.__i18n.push('{"ar":{"rate":"صنف 4.7 من 5","reviews":"6669 تعليق","installs":"التثبيتات"},"de":{"rate":"Bewertet mit 4.7 von 5","reviews":"6669 Bewertungen","installs":"Installiert"},"en":{"rate":"Rated 4.7 out of 5","reviews":"6669 reviews","installs":"Installs"},"es":{"rate":"Calificación de 4.7 de 5","reviews":"6669 reseñas","installs":"Instalaciones"},"fr":{"rate":"Noté 4.7 sur 5","reviews":"6669 avis","installs":"Installations"},"ru":{"rate":"Оценка 4.7 из 5","reviews":"6669 отзывов","installs":"Установок"},"sv":{"rate":"4.7 av 5 i betyg","reviews":"6669 recensioner","installs":"Installerar"},"tr":{"rate":"5 üzerinden 4.7 puan aldı","reviews":"6669 inceleme","installs":"Yüklemeler"},"ua":{"rate":"Оцінка 4.7 з 5","reviews":"6669 відгуків","installs":"Установок"},"pt":{"rate":"Classificação 4.7 de 5","reviews":"6669 comentários","installs":"Instalações"},"th":{"rate":"ได้คะแนน 4.7 จาก 5","reviews":"6669 รีวิว","installs":"การติดตั้ง"},"it":{"rate":"Voto 4,7 su 5","reviews":"6669 recensioni","installs":"Installazioni"}}'), delete t.options._Ctor
            }
        },
        2306: function(t, e) {
            t.exports = function(t) {
                t.options.__i18n = t.options.__i18n || [], t.options.__i18n.push('{"ar":{"rate":"صنف 4.7 من 5","reviews":"578 عدد التعليقات ","installs":"التثبيتات"},"de":{"rate":"Bewertet mit 4.7 von 5","reviews":"578 Bewertungen","installs":"Installiert"},"en":{"rate":"Rated 4.7 out of 5","reviews":"578 reviews","installs":"Installs"},"es":{"rate":"Calificación de 4.7 de 5","reviews":"578 reseñas","installs":"Instalaciones"},"fr":{"rate":"Noté 4.7 sur 5","reviews":"578 avis","installs":"Installations"},"ru":{"rate":"Оценка 4.7 из 5","reviews":"578 отзывов","installs":"Установок"},"sv":{"rate":"4.7 av 5 i betyg","reviews":"578 recensioner","installs":"Installerar"},"tr":{"rate":"5 üzerinden 4.7 puan aldı","reviews":"578 inceleme","installs":"Yüklemeler"},"ua":{"rate":"Оцінка 4.7 з 5","reviews":"578 відгук","installs":"Установок"},"pt":{"rate":"Classificação 4.7 de 5","reviews":"578 comentários","installs":"Instalações"},"th":{"rate":"ได้คะแนน 4.7 จาก 5","reviews":"578 รีวิว","installs":"การติดตั้ง"},"it":{"rate":"Voto 4,7 su 5","reviews":"578 recensioni","installs":"Installazioni"}}'), delete t.options._Ctor
            }
        },
        2307: function(t, e) {
            t.exports = function(t) {
                t.options.__i18n = t.options.__i18n || [], t.options.__i18n.push('{"ar":{"rate":"صنف 4.9 من 5","reviews":"233 عدد التعليقات ","installs":"التثبيتات"},"de":{"rate":"Bewertet mit 4.9 von 5","reviews":"233 Bewertungen","installs":"Installiert"},"en":{"rate":"Rated 4.9 out of 5","reviews":"233 reviews","installs":"Installs"},"es":{"rate":"Calificación de 4.9 de 5","reviews":"233 reseñas","installs":"Instalaciones"},"fr":{"rate":"Noté 4.9 sur 5","reviews":"233 avis","installs":"Installations"},"ru":{"rate":"Оценка 4.9 из 5","reviews":"233 отзыва","installs":"Установок"},"sv":{"rate":"4.9 av 5 i betyg","reviews":"233 recensioner","installs":"Installerar"},"tr":{"rate":"5 üzerinden 4.9 puan aldı","reviews":"233 inceleme","installs":"Yüklemeler"},"ua":{"rate":"Оцінка 4.9 з 5","reviews":"233 відгуки","installs":"Установок"},"pt":{"rate":"Classificação 4.9 de 5","reviews":"233 comentários","installs":"Instalações"},"th":{"rate":"ได้คะแนน 4.9 จาก 5","reviews":"233 รีวิว","installs":"การติดตั้ง"},"it":{"rate":"Voto 4,9 su 5","reviews":"233 recensioni","installs":"Installazioni"}}'), delete t.options._Ctor
            }
        },
        2308: function(t, e) {
            t.exports = function(t) {
                t.options.__i18n = t.options.__i18n || [], t.options.__i18n.push('{"ar":{"rate":"صنف 4.9 من 5","reviews":"1784 تعليق"},"de":{"rate":"Bewertet mit 4.9 von 5","reviews":"1784 Bewertungen"},"en":{"rate":"Rated 4.9 out of 5","reviews":"1784 reviews"},"es":{"rate":"Calificación de 4.9 de 5","reviews":"1784 reseñas"},"fr":{"rate":"Noté 4.9 sur 5","reviews":"1784 avis"},"ru":{"rate":"Оценка 4.9 из 5","reviews":"1784 отзыва"},"sv":{"rate":"4.9 av 5 i betyg","reviews":"1784 recensioner"},"tr":{"rate":"5 üzerinden 4.9 puan aldı","reviews":"1784 inceleme"},"ua":{"rate":"Оцінка 4.9 з 5","reviews":"1784 відгуки"},"pt":{"rate":"Classificação 4.9 de 5","reviews":"1784 comentários"},"th":{"rate":"ได้คะแนน 4.9 จาก 5","reviews":"1784 รีวิว"},"it":{"rate":"Voto 4,9 su 5","reviews":"1784 recensioni"}}'), delete t.options._Ctor
            }
        },
        2309: function(t, e) {
            t.exports = function(t) {
                t.options.__i18n = t.options.__i18n || [], t.options.__i18n.push('{"ar":{"rate":"صنف 5 من 5"},"de":{"rate":"Bewertet mit 5 von 5"},"en":{"rate":"Rated 5 out of 5"},"es":{"rate":"Calificación de 5 de 5"},"fr":{"rate":"Noté 5 sur 5"},"ru":{"rate":"Оценка 5 из 5"},"sv":{"rate":"5 av 5 i betyg"},"tr":{"rate":"5 üzerinden 5 puan aldı"},"ua":{"rate":"Оцінка 5 з 5"},"pt":{"rate":"Classificação 5 de 5"},"th":{"rate":"ได้คะแนน 5 จาก 5"},"it":{"rate":"Voto 5 su 5"}}'), delete t.options._Ctor
            }
        },
        2310: function(t, e) {
            t.exports = function(t) {
                t.options.__i18n = t.options.__i18n || [], t.options.__i18n.push('{"ar":{"rate":"صنف 4.6 من 5","reviews":"511 تعليق","installs":"التثبيتات"},"de":{"rate":"Bewertet mit 4.6 von 5","reviews":"511 Bewertungen","installs":"Installiert"},"en":{"rate":"Rated 4.6 out of 5","reviews":"511 reviews","installs":"Installs"},"es":{"rate":"Calificación de 4.6 de 5","reviews":"511 reseñas","installs":"Instalaciones"},"fr":{"rate":"Noté 4.6 sur 5","reviews":"511 avis","installs":"Installations"},"ru":{"rate":"Оценка 4.6 из 5","reviews":"511 отзывов","installs":"Установок"},"sv":{"rate":"4.6 av 5 i betyg","reviews":"511 recensioner","installs":"Installerar"},"tr":{"rate":"5 üzerinden 4.6 puan aldı","reviews":"511 inceleme","installs":"Yüklemeler"},"ua":{"rate":"Оцінка 4.6 з 5","reviews":"511 відгуків","installs":"Установок"},"pt":{"rate":"Classificação 4.6 de 5","reviews":"511 comentários","installs":"Instalações"},"th":{"rate":"ได้คะแนน 4.6 จาก 5","reviews":"511 รีวิว","installs":"การติดตั้ง"},"it":{"rate":"Voto 4,6 su 5","reviews":"511 recensioni","installs":"Installazioni"}}'), delete t.options._Ctor
            }
        },
        2311: function(t, e) {
            t.exports = function(t) {
                t.options.__i18n = t.options.__i18n || [], t.options.__i18n.push('{"ar":{"rate":"صنف 4.7 من 5"},"de":{"rate":"Bewertet mit 4.7 von 5"},"en":{"rate":"Rated 4.7 out of 5"},"es":{"rate":"Calificación de 4.7 de 5"},"fr":{"rate":"Noté 4.7 sur 5"},"ru":{"rate":"Оценка 4.7 из 5"},"sv":{"rate":"4.7 av 5 i betyg"},"tr":{"rate":"5 üzerinden 4.7 puan aldı"},"ua":{"rate":"Оцінка 4.7 з 5"},"pt":{"rate":"Classificação 4.7 de 5"},"th":{"rate":"ได้คะแนน 4.7 จาก 5"},"it":{"rate":"Voto 4,7 su 5"}}'), delete t.options._Ctor
            }
        },
        2312: function(t, e) {
            t.exports = function(t) {
                t.options.__i18n = t.options.__i18n || [], t.options.__i18n.push('{"ar":{"rate":"صنف 4.8 من 5"},"de":{"rate":"Bewertet mit 4.8 von 5"},"en":{"rate":"Rated 4.8 out of 5"},"es":{"rate":"Calificación de 4.8 de 5"},"fr":{"rate":"Noté 4.8 sur 5"},"ru":{"rate":"Оценка 4.8 из 5"},"sv":{"rate":"4.8 av 5 i betyg"},"tr":{"rate":"5 üzerinden 4.8 puan aldı"},"ua":{"rate":"Оцінка 4.8 з 5"},"pt":{"rate":"Classificação 4.8 de 5"},"th":{"rate":"ได้คะแนน 4.8 จาก 5"},"it":{"rate":"Voto 4,8 su 5"}}'), delete t.options._Ctor
            }
        },
        2313: function(t, e) {
            t.exports = function(t) {
                t.options.__i18n = t.options.__i18n || [], t.options.__i18n.push('{"ar":{"rate":"صنف 4.3 من 5"},"de":{"rate":"Bewertet mit 4.3 von 5"},"en":{"rate":"Rated 4.3 out of 5"},"es":{"rate":"Calificación de 4.3 de 5"},"fr":{"rate":"Noté 4.3 sur 5"},"ru":{"rate":"Оценка 4.3 из 5"},"sv":{"rate":"4.3 av 5 i betyg"},"tr":{"rate":"5 üzerinden 4.3 puan aldı"},"ua":{"rate":"Оцінка 4.3 з 5"},"pt":{"rate":"Classificação 4.3 de 5"},"th":{"rate":"ได้คะแนน 4.3 จาก 5"},"it":{"rate":"Voto 4,3 su 5"}}'), delete t.options._Ctor
            }
        },
        2644: function(t, e, r) {
            var content = r(2850);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(13).default)("dcd9f776", content, !0, {
                sourceMap: !1
            })
        },
        2645: function(t, e, r) {
            var content = r(2852);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(13).default)("e033e08e", content, !0, {
                sourceMap: !1
            })
        },
        2646: function(t, e, r) {
            var content = r(2855);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(13).default)("0df75607", content, !0, {
                sourceMap: !1
            })
        },
        2647: function(t, e, r) {
            var content = r(2858);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(13).default)("2d5c16d4", content, !0, {
                sourceMap: !1
            })
        },
        2648: function(t, e, r) {
            var content = r(2861);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(13).default)("394a4521", content, !0, {
                sourceMap: !1
            })
        },
        2649: function(t, e, r) {
            var content = r(2864);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(13).default)("6f072370", content, !0, {
                sourceMap: !1
            })
        },
        2650: function(t, e, r) {
            var content = r(2867);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(13).default)("2547052c", content, !0, {
                sourceMap: !1
            })
        },
        2651: function(t, e, r) {
            var content = r(2870);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(13).default)("1505b800", content, !0, {
                sourceMap: !1
            })
        },
        2652: function(t, e, r) {
            var content = r(2873);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(13).default)("02e6aee6", content, !0, {
                sourceMap: !1
            })
        },
        2653: function(t, e, r) {
            var content = r(2876);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(13).default)("dec0ef52", content, !0, {
                sourceMap: !1
            })
        },
        2654: function(t, e, r) {
            var content = r(2879);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(13).default)("6ba43baa", content, !0, {
                sourceMap: !1
            })
        },
        2655: function(t, e, r) {
            var content = r(2882);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(13).default)("a76b5ab4", content, !0, {
                sourceMap: !1
            })
        },
        2656: function(t, e, r) {
            var content = r(2885);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(13).default)("27c4e12a", content, !0, {
                sourceMap: !1
            })
        },
        2657: function(t, e, r) {
            var content = r(2888);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(13).default)("0e703358", content, !0, {
                sourceMap: !1
            })
        },
        2658: function(t, e, r) {
            var content = r(2891);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(13).default)("0b3eebcd", content, !0, {
                sourceMap: !1
            })
        },
        2659: function(t, e, r) {
            var content = r(2894);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(13).default)("9d52e4a0", content, !0, {
                sourceMap: !1
            })
        },
        2849: function(t, e, r) {
            "use strict";
            r(2644)
        },
        2850: function(t, e, r) {
            var n = r(12)((function(i) {
                return i[1]
            }));
            n.push([t.i, ".review-card[data-v-d41e924e]{background-color:var(--background-color-light);border-radius:var(--base-bd-rs);flex-direction:column;height:115px;padding:20px;transition:all var(--base-ease);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.review-card[data-v-d41e924e],.review-card__bottom[data-v-d41e924e],.review-card__top[data-v-d41e924e]{display:flex;justify-content:space-between}.review-card__top[data-v-d41e924e]{align-items:center}.review-card.hoverable[data-v-d41e924e]{background-color:initial}.review-card.hoverable[data-v-d41e924e]:hover{background-color:var(--background-color-light);box-shadow:var(--base-shadow)}@media(max-width:899px){.review-card.hoverable[data-v-d41e924e]{background-color:var(--background-color-light);max-width:none;padding:19px 0}}@media(min-width:900px){.review-card.hoverable[data-v-d41e924e]:not(:hover) path:not(.no-recolor){fill:var(--inactive-color)}.review-card.hoverable[data-v-d41e924e]:not(:hover) .gradient-color{stop-color:var(--inactive-color)}}.review-card__score[data-v-d41e924e]{display:flex}.review-card__rate[data-v-d41e924e]{color:var(--text-color);display:flex;flex-direction:column;font-size:14px;font-weight:400;justify-content:flex-end;line-height:normal}.review-card__rate a[data-v-d41e924e]{color:var(--link-text-color);-webkit-text-decoration:underline;text-decoration:underline}.review-card__description[data-v-d41e924e]{color:var(--text-color);display:flex;flex-direction:column;font-size:14px;justify-content:flex-end;line-height:normal}", ""]), n.locals = {}, t.exports = n
        },
        2851: function(t, e, r) {
            "use strict";
            r(2645)
        },
        2852: function(t, e, r) {
            var n = r(12)((function(i) {
                return i[1]
            }));
            n.push([t.i, "[dir=ltr] .review-card__score .star[data-v-3a952110]{margin-right:4px}[dir=rtl] .review-card__score .star[data-v-3a952110]{margin-left:4px}[dir=ltr] .review-card__score .star[data-v-3a952110]:last-child{margin-right:0}[dir=rtl] .review-card__score .star[data-v-3a952110]:last-child{margin-left:0}", ""]), n.locals = {}, t.exports = n
        },
        2853: function(t, e, r) {
            "use strict";
            var n = r(2299),
                o = r.n(n);
            e.default = o.a
        },
        2854: function(t, e, r) {
            "use strict";
            r(2646)
        },
        2855: function(t, e, r) {
            var n = r(12)((function(i) {
                return i[1]
            }));
            n.push([t.i, "[dir=ltr] .review-card__score .star[data-v-06ad997d]{margin-right:4px}[dir=rtl] .review-card__score .star[data-v-06ad997d]{margin-left:4px}[dir=ltr] .review-card__score .star[data-v-06ad997d]:last-child{margin-right:0}[dir=rtl] .review-card__score .star[data-v-06ad997d]:last-child{margin-left:0}", ""]), n.locals = {}, t.exports = n
        },
        2856: function(t, e, r) {
            "use strict";
            var n = r(2300),
                o = r.n(n);
            e.default = o.a
        },
        2857: function(t, e, r) {
            "use strict";
            r(2647)
        },
        2858: function(t, e, r) {
            var n = r(12)((function(i) {
                return i[1]
            }));
            n.push([t.i, "[dir=ltr] .review-card__score .star[data-v-cd596cc0]{margin-right:4px}[dir=rtl] .review-card__score .star[data-v-cd596cc0]{margin-left:4px}[dir=ltr] .review-card__score .star[data-v-cd596cc0]:last-child{margin-right:0}[dir=rtl] .review-card__score .star[data-v-cd596cc0]:last-child{margin-left:0}", ""]), n.locals = {}, t.exports = n
        },
        2859: function(t, e, r) {
            "use strict";
            var n = r(2301),
                o = r.n(n);
            e.default = o.a
        },
        2860: function(t, e, r) {
            "use strict";
            r(2648)
        },
        2861: function(t, e, r) {
            var n = r(12)((function(i) {
                return i[1]
            }));
            n.push([t.i, "[dir=ltr] .review-card__score .star[data-v-0af8437e]{margin-right:4px}[dir=rtl] .review-card__score .star[data-v-0af8437e]{margin-left:4px}[dir=ltr] .review-card__score .star[data-v-0af8437e]:last-child{margin-right:0}[dir=rtl] .review-card__score .star[data-v-0af8437e]:last-child{margin-left:0}", ""]), n.locals = {}, t.exports = n
        },
        2862: function(t, e, r) {
            "use strict";
            var n = r(2302),
                o = r.n(n);
            e.default = o.a
        },
        2863: function(t, e, r) {
            "use strict";
            r(2649)
        },
        2864: function(t, e, r) {
            var n = r(12)((function(i) {
                return i[1]
            }));
            n.push([t.i, "[dir=ltr] .review-card__score .star[data-v-377e4cca]{margin-right:4px}[dir=rtl] .review-card__score .star[data-v-377e4cca]{margin-left:4px}[dir=ltr] .review-card__score .star[data-v-377e4cca]:last-child{margin-right:0}[dir=rtl] .review-card__score .star[data-v-377e4cca]:last-child{margin-left:0}", ""]), n.locals = {}, t.exports = n
        },
        2865: function(t, e, r) {
            "use strict";
            var n = r(2303),
                o = r.n(n);
            e.default = o.a
        },
        2866: function(t, e, r) {
            "use strict";
            r(2650)
        },
        2867: function(t, e, r) {
            var n = r(12)((function(i) {
                return i[1]
            }));
            n.push([t.i, "[dir=ltr] .review-card__score .star[data-v-de6a7a52]{margin-right:4px}[dir=rtl] .review-card__score .star[data-v-de6a7a52]{margin-left:4px}[dir=ltr] .review-card__score .star[data-v-de6a7a52]:last-child{margin-right:0}[dir=rtl] .review-card__score .star[data-v-de6a7a52]:last-child{margin-left:0}", ""]), n.locals = {}, t.exports = n
        },
        2868: function(t, e, r) {
            "use strict";
            var n = r(2304),
                o = r.n(n);
            e.default = o.a
        },
        2869: function(t, e, r) {
            "use strict";
            r(2651)
        },
        2870: function(t, e, r) {
            var n = r(12)((function(i) {
                return i[1]
            }));
            n.push([t.i, "[dir=ltr] .review-card__score .star[data-v-d80711d8]{margin-right:4px}[dir=rtl] .review-card__score .star[data-v-d80711d8]{margin-left:4px}[dir=ltr] .review-card__score .star[data-v-d80711d8]:last-child{margin-right:0}[dir=rtl] .review-card__score .star[data-v-d80711d8]:last-child{margin-left:0}", ""]), n.locals = {}, t.exports = n
        },
        2871: function(t, e, r) {
            "use strict";
            var n = r(2305),
                o = r.n(n);
            e.default = o.a
        },
        2872: function(t, e, r) {
            "use strict";
            r(2652)
        },
        2873: function(t, e, r) {
            var n = r(12)((function(i) {
                return i[1]
            }));
            n.push([t.i, "[dir=ltr] .review-card__score .star[data-v-6291f2ec]{margin-right:4px}[dir=rtl] .review-card__score .star[data-v-6291f2ec]{margin-left:4px}[dir=ltr] .review-card__score .star[data-v-6291f2ec]:last-child{margin-right:0}[dir=rtl] .review-card__score .star[data-v-6291f2ec]:last-child{margin-left:0}", ""]), n.locals = {}, t.exports = n
        },
        2874: function(t, e, r) {
            "use strict";
            var n = r(2306),
                o = r.n(n);
            e.default = o.a
        },
        2875: function(t, e, r) {
            "use strict";
            r(2653)
        },
        2876: function(t, e, r) {
            var n = r(12)((function(i) {
                return i[1]
            }));
            n.push([t.i, "[dir=ltr] .review-card__score .star[data-v-5d93fb34]{margin-right:4px}[dir=rtl] .review-card__score .star[data-v-5d93fb34]{margin-left:4px}[dir=ltr] .review-card__score .star[data-v-5d93fb34]:last-child{margin-right:0}[dir=rtl] .review-card__score .star[data-v-5d93fb34]:last-child{margin-left:0}", ""]), n.locals = {}, t.exports = n
        },
        2877: function(t, e, r) {
            "use strict";
            var n = r(2307),
                o = r.n(n);
            e.default = o.a
        },
        2878: function(t, e, r) {
            "use strict";
            r(2654)
        },
        2879: function(t, e, r) {
            var n = r(12)((function(i) {
                return i[1]
            }));
            n.push([t.i, "[dir=ltr] .review-card__score .star[data-v-29e16534]{margin-right:4px}[dir=rtl] .review-card__score .star[data-v-29e16534]{margin-left:4px}[dir=ltr] .review-card__score .star[data-v-29e16534]:last-child{margin-right:0}[dir=rtl] .review-card__score .star[data-v-29e16534]:last-child{margin-left:0}", ""]), n.locals = {}, t.exports = n
        },
        2880: function(t, e, r) {
            "use strict";
            var n = r(2308),
                o = r.n(n);
            e.default = o.a
        },
        2881: function(t, e, r) {
            "use strict";
            r(2655)
        },
        2882: function(t, e, r) {
            var n = r(12)((function(i) {
                return i[1]
            }));
            n.push([t.i, "[dir=ltr] .review-card__score .star[data-v-367799d6]{margin-right:4px}[dir=rtl] .review-card__score .star[data-v-367799d6]{margin-left:4px}[dir=ltr] .review-card__score .star[data-v-367799d6]:last-child{margin-right:0}[dir=rtl] .review-card__score .star[data-v-367799d6]:last-child{margin-left:0}", ""]), n.locals = {}, t.exports = n
        },
        2883: function(t, e, r) {
            "use strict";
            var n = r(2309),
                o = r.n(n);
            e.default = o.a
        },
        2884: function(t, e, r) {
            "use strict";
            r(2656)
        },
        2885: function(t, e, r) {
            var n = r(12)((function(i) {
                return i[1]
            }));
            n.push([t.i, "[dir=ltr] .review-card__score .star[data-v-6ae79572]{margin-right:4px}[dir=rtl] .review-card__score .star[data-v-6ae79572]{margin-left:4px}[dir=ltr] .review-card__score .star[data-v-6ae79572]:last-child{margin-right:0}[dir=rtl] .review-card__score .star[data-v-6ae79572]:last-child{margin-left:0}", ""]), n.locals = {}, t.exports = n
        },
        2886: function(t, e, r) {
            "use strict";
            var n = r(2310),
                o = r.n(n);
            e.default = o.a
        },
        2887: function(t, e, r) {
            "use strict";
            r(2657)
        },
        2888: function(t, e, r) {
            var n = r(12)((function(i) {
                return i[1]
            }));
            n.push([t.i, "[dir=ltr] .review-card__score .star[data-v-1c1993c6]{margin-right:4px}[dir=rtl] .review-card__score .star[data-v-1c1993c6]{margin-left:4px}[dir=ltr] .review-card__score .star[data-v-1c1993c6]:last-child{margin-right:0}[dir=rtl] .review-card__score .star[data-v-1c1993c6]:last-child{margin-left:0}", ""]), n.locals = {}, t.exports = n
        },
        2889: function(t, e, r) {
            "use strict";
            var n = r(2311),
                o = r.n(n);
            e.default = o.a
        },
        2890: function(t, e, r) {
            "use strict";
            r(2658)
        },
        2891: function(t, e, r) {
            var n = r(12)((function(i) {
                return i[1]
            }));
            n.push([t.i, "[dir=ltr] .review-card__score .star[data-v-2e7cd32d]{margin-right:4px}[dir=rtl] .review-card__score .star[data-v-2e7cd32d]{margin-left:4px}[dir=ltr] .review-card__score .star[data-v-2e7cd32d]:last-child{margin-right:0}[dir=rtl] .review-card__score .star[data-v-2e7cd32d]:last-child{margin-left:0}", ""]), n.locals = {}, t.exports = n
        },
        2892: function(t, e, r) {
            "use strict";
            var n = r(2312),
                o = r.n(n);
            e.default = o.a
        },
        2893: function(t, e, r) {
            "use strict";
            r(2659)
        },
        2894: function(t, e, r) {
            var n = r(12)((function(i) {
                return i[1]
            }));
            n.push([t.i, "[dir=ltr] .review-card__score .star[data-v-26789a22]{margin-right:4px}[dir=rtl] .review-card__score .star[data-v-26789a22]{margin-left:4px}[dir=ltr] .review-card__score .star[data-v-26789a22]:last-child{margin-right:0}[dir=rtl] .review-card__score .star[data-v-26789a22]:last-child{margin-left:0}", ""]), n.locals = {}, t.exports = n
        },
        2895: function(t, e, r) {
            "use strict";
            var n = r(2313),
                o = r.n(n);
            e.default = o.a
        }
    }
]);