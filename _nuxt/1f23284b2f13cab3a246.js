(window.webpackJsonp = window.webpackJsonp || []).push([
    [86], {
        2053: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r(231),
                o = r(0),
                l = r(2142),
                d = r.n(l),
                c = r(18),
                m = r(45),
                v = r(230),
                f = r(2634);

            function h(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function _(e) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? h(Object(source), !0).forEach((function(t) {
                        Object(o.a)(e, t, source[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : h(Object(source)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                    }))
                }
                return e
            }
            var P = {
                    components: {
                        BaseButton: v.a,
                        PageSection: m.a,
                        HomeDownloads: f.a
                    },
                    computed: _(_({}, Object(c.c)(["getOS"])), {}, {
                        currentOS() {
                            return "iOS" === this.getOS ? this.getOS : d()(this.getOS)
                        },
                        buttonAttrs: () => ({
                            to: "/link/platform/",
                            tag: "a"
                        })
                    })
                },
                x = (r(2823), r(2)),
                w = r(2825),
                component = Object(x.a)(P, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("header", {
                        staticClass: "home-header"
                    }, [t("page-section", {
                        attrs: {
                            transparent: "",
                            "full-height": ""
                        }
                    }, [t("div", {
                        staticClass: "home-header__content"
                    }, [t("h1", {
                        staticClass: "home-header__title"
                    }, [e._v("\n        " + e._s(e.$t("title")) + "\n      ")]), e._v(" "), t("div", {
                        staticClass: "home-header__subtitle"
                    }, [e._v("\n        " + e._s(e.$t("subtitle")) + "\n      ")]), e._v(" "), t("div", {
                        staticClass: "home-header__download"
                    }, [t("base-button", e._b({
                        attrs: {
                            color: "red"
                        },
                        scopedSlots: e._u([{
                            key: "icon",
                            fn: function() {
                                return [t("img", {
                                    staticClass: "home-header__download-icon",
                                    attrs: {
                                        height: "100%",
                                        width: "100%",
                                        src: r(232),
                                        alt: "download"
                                    }
                                })]
                            },
                            proxy: !0
                        }])
                    }, "base-button", e.buttonAttrs, !1), [e._v("\n          " + e._s(e.$t("download.title")) + "\n          "), t("br"), e._v("\n          " + e._s(e.$t("download.subtitle", {
                        os: e.currentOS
                    })) + "\n          ")])], 1)])]), e._v(" "), t("home-downloads", {
                        attrs: {
                            "light-background": ""
                        }
                    })], 1)
                }), [], !1, null, "fff11040", null);
            "function" == typeof w.default && Object(w.default)(component);
            var N = component.exports,
                k = r(2197),
                V = r(2198),
                y = (r(2826), Object(x.a)({}, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        staticClass: "titled-content"
                    }, [t("div", {
                        staticClass: "titled-content__title"
                    }, [e._t("title")], 2), e._v(" "), t("div", {
                        staticClass: "titled-content__content"
                    }, [e._t("content")], 2), e._v(" "), e._t("content_optional")], 2)
                }), [], !1, null, "3b70fbd2", null).exports),
                z = {
                    components: {
                        TitledContent: y,
                        HomeTitle: V.a,
                        PageSection: m.a,
                        HomeSection: k.a
                    },
                    computed: {
                        isRussian() {
                            return "ru" === this.$store.getters.getCurrentLanguage
                        }
                    }
                },
                S = (r(2828), r(2830)),
                O = Object(x.a)(z, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("page-section", [t("home-section", [t("div", {
                        staticClass: "home-access"
                    }, [t("img", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.isRussian,
                            expression: "isRussian"
                        }],
                        attrs: {
                            height: "auto",
                            width: "auto",
                            src: r(533),
                            alt: "access"
                        }
                    }), e._v(" "), t("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !e.isRussian,
                            expression: "!isRussian"
                        }],
                        staticClass: "home-access__image"
                    }, [t("img", {
                        attrs: {
                            height: "auto",
                            width: "auto",
                            src: r(534),
                            alt: "access"
                        }
                    }), e._v(" "), t("span", {
                        staticClass: "home-access__caption"
                    }, [e._v(e._s(e.$t("img_text")))])]), e._v(" "), t("titled-content", {
                        scopedSlots: e._u([{
                            key: "title",
                            fn: function() {
                                return [t("home-title", [e._v(e._s(e.$t("title_part1")) + " "), t("span", {
                                    staticClass: "highlight"
                                }, [e._v(e._s(e.$t("title_highlight")))]), e._v(" " + e._s(e.$t("title_part2")))])]
                            },
                            proxy: !0
                        }, {
                            key: "content",
                            fn: function() {
                                return [e._v("\n          " + e._s(e.$t("text1")) + "\n        ")]
                            },
                            proxy: !0
                        }, {
                            key: "content_optional",
                            fn: function() {
                                return [t("p", {
                                    staticClass: "titled-content__content"
                                }, [e._v("\n            " + e._s(e.$t("text2")) + "\n          ")])]
                            },
                            proxy: !0
                        }])
                    })], 1)])], 1)
                }), [], !1, null, "1d5e40d8", null);
            "function" == typeof S.default && Object(S.default)(O);
            var C = O.exports,
                I = r(2237),
                j = {
                    components: {
                        TitledContent: y,
                        HomeTitle: V.a,
                        PageSection: m.a,
                        HomeSection: k.a,
                        AdvantagesList: I.a
                    },
                    data() {
                        return {
                            advantages: Object.values(this.$t("advantages"))
                        }
                    }
                },
                F = (r(2831), r(2833)),
                D = Object(x.a)(j, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("page-section", [t("home-section", [t("div", {
                        staticClass: "home-safe"
                    }, [t("div", {
                        staticClass: "home-safe__content"
                    }, [t("titled-content", {
                        scopedSlots: e._u([{
                            key: "title",
                            fn: function() {
                                return [t("home-title", [t("span", {
                                    staticClass: "highlight"
                                }, [e._v(e._s(e.$t("title_highlight1")))]), e._v(" " + e._s(e.$t("title_part")) + " "), t("span", {
                                    staticClass: "highlight"
                                }, [e._v(e._s(e.$t("title_highlight2")))])])]
                            },
                            proxy: !0
                        }, {
                            key: "content",
                            fn: function() {
                                return [e._v("\n            " + e._s(e.$t("text1")) + "\n          ")]
                            },
                            proxy: !0
                        }, {
                            key: "content_optional",
                            fn: function() {
                                return [t("p", {
                                    staticClass: "titled-content__content"
                                }, [e._v("\n              " + e._s(e.$t("text2")) + "\n            ")]), e._v(" "), t("advantages-list", {
                                    attrs: {
                                        "inherit-font-size": "",
                                        gap: "small",
                                        items: e.advantages
                                    }
                                })]
                            },
                            proxy: !0
                        }])
                    })], 1), e._v(" "), t("img", {
                        staticClass: "home-safe__img",
                        attrs: {
                            height: "auto",
                            width: "auto",
                            src: r(554),
                            alt: "safe"
                        }
                    })])])], 1)
                }), [], !1, null, "566619a4", null);
            "function" == typeof F.default && Object(F.default)(D);
            var T = D.exports,
                A = (r(413), r(246)),
                E = {
                    props: {
                        back: {
                            type: Boolean,
                            required: !1,
                            default: !0
                        },
                        forward: {
                            type: Boolean,
                            required: !1
                        },
                        inactive: {
                            type: Boolean,
                            required: !1
                        }
                    }
                },
                M = (r(2834), Object(x.a)(E, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("svg", {
                        class: {
                            inactive: e.inactive, back: e.back, forward: e.forward
                        },
                        attrs: {
                            width: "26",
                            height: "23",
                            viewBox: "0 0 26 23",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [t("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M10.2012 0.97059L0.655272 10.5165C0.0694847 11.1023 0.0694847 12.0521 0.655272 12.6379L10.2012 22.1838C10.787 22.7696 11.7367 22.7696 12.3225 22.1838C12.9083 21.598 12.9083 20.6483 12.3225 20.0625L5.33725 13.0772H23.7793C24.6077 13.0772 25.2793 12.4056 25.2793 11.5772C25.2793 10.7488 24.6077 10.0772 23.7793 10.0772H5.33725L12.3225 3.09191C12.9083 2.50612 12.9083 1.55638 12.3225 0.97059C11.7367 0.384803 10.787 0.384803 10.2012 0.97059Z",
                            fill: "#879EC1"
                        }
                    })])
                }), [], !1, null, "7eb87702", null).exports),
                L = r(2260),
                H = r.n(L);

            function W(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function K(e) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? W(Object(source), !0).forEach((function(t) {
                        Object(o.a)(e, t, source[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : W(Object(source)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                    }))
                }
                return e
            }
            var R = {
                    components: {
                        PageSection: m.a,
                        HomeSection: k.a,
                        HomeTitle: V.a,
                        SlickCarousel: H.a,
                        ArrowIcon: M,
                        BaseHoverablePlatform: A.a
                    },
                    data: () => ({
                        currentSlide: 0,
                        isResponsiveSettingsApplied: !1,
                        responsiveSettings: [{
                            breakpoint: 801,
                            settings: {
                                centerPadding: "0px"
                            }
                        }, {
                            breakpoint: 800,
                            settings: {
                                centerMode: !1,
                                variableWidth: !1
                            }
                        }, {
                            breakpoint: 650,
                            settings: {
                                centerPadding: "0px",
                                centerMode: !1,
                                variableWidth: !1
                            }
                        }]
                    }),
                    computed: K(K({}, Object(c.c)(["getCurrentLanguage", "supportedPlatforms", "platformDownloadRoute", "getCurrentLanguageDirection"])), {}, {
                        isRtl() {
                            return "rtl" === this.getCurrentLanguageDirection
                        },
                        settings() {
                            return {
                                rtl: this.isRtl,
                                centerMode: !0,
                                arrows: !1,
                                dots: !1,
                                focusOnSelect: !0,
                                infinite: !0,
                                slidesToShow: 1,
                                variableWidth: !0,
                                centerPadding: "0px",
                                speed: 500,
                                responsive: this.isResponsiveSettingsApplied ? this.responsiveSettings : []
                            }
                        },
                        slides() {
                            return [{
                                name: "browser",
                                links: {
                                    title: this.$t("slides.browser.title"),
                                    description: this.$t("slides.browser.description"),
                                    platforms: ["chrome", "firefox", "edge", "opera"].map((e => ({
                                        name: e,
                                        label: this.transformName(e),
                                        route: {
                                            name: this.platformDownloadRoute(e),
                                            params: {
                                                lang: void 0 === this.getCurrentLanguage || "en" === this.getCurrentLanguage ? null : this.getCurrentLanguage
                                            }
                                        }
                                    })))
                                }
                            }, {
                                name: "desktop",
                                links: {
                                    title: this.$t("slides.desktop.title"),
                                    description: this.$t("slides.desktop.description"),
                                    platforms: ["windows", "mac", "linux"].map((e => ({
                                        name: e,
                                        label: this.transformName(e),
                                        route: {
                                            name: this.platformDownloadRoute(e),
                                            params: {
                                                lang: void 0 === this.getCurrentLanguage || "en" === this.getCurrentLanguage ? null : this.getCurrentLanguage
                                            }
                                        }
                                    })))
                                }
                            }, {
                                name: "mobile",
                                links: {
                                    title: this.$t("slides.mobile.title"),
                                    description: this.$t("slides.mobile.description"),
                                    platforms: ["android", "ios"].map((e => ({
                                        name: e,
                                        label: this.transformName(e),
                                        route: {
                                            name: this.platformDownloadRoute(e),
                                            params: {
                                                lang: void 0 === this.getCurrentLanguage || "en" === this.getCurrentLanguage ? null : this.getCurrentLanguage
                                            }
                                        }
                                    })))
                                }
                            }]
                        },
                        imgSizes: () => "\n        (max-width: 650px) 100px,\n        800px\n      "
                    }),
                    methods: {
                        transformName: e => "ios" === e ? "iOS" : d()(e),
                        getSrcSet: e => "\n      ".concat(r(2836)("./".concat(e, "-mobile.svg")), " 100w,\n      ").concat(r(2837)("./".concat(e, ".svg")), "\n      "),
                        isActivePage(e) {
                            return this.currentSlide === e
                        },
                        goToNewPage(e, t) {
                            this.goToPage(t)
                        },
                        goToPage(e) {
                            this.isRtl && (e = this.slides.length - 1 - e), this.currentSlide = e, this.$refs.carousel.goTo(e)
                        },
                        goToPrev() {
                            this.isRtl ? this.$refs.carousel.next() : this.$refs.carousel.prev()
                        },
                        goToNext() {
                            this.isRtl ? this.$refs.carousel.prev() : this.$refs.carousel.next()
                        },
                        applyResponsiveSettings() {
                            this.isResponsiveSettingsApplied = !0
                        }
                    }
                },
                $ = (r(2838), r(2840), r(2842)),
                B = Object(x.a)(R, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("page-section", {
                        attrs: {
                            "full-width": ""
                        }
                    }, [t("home-section", {
                        attrs: {
                            mb3: ""
                        },
                        scopedSlots: e._u([{
                            key: "title",
                            fn: function() {
                                return [t("home-title", [e._v(e._s(e.$t("title")))])]
                            },
                            proxy: !0
                        }])
                    }, [e._v(" "), t("p", {
                        staticClass: "titled-content__content"
                    }, [e._v("\n      " + e._s(e.$t("text1")) + "\n    ")]), e._v(" "), t("slick-carousel", e._b({
                        ref: "carousel",
                        on: {
                            beforeChange: e.goToNewPage,
                            init: e.applyResponsiveSettings
                        }
                    }, "slick-carousel", e.settings, !1), e._l(e.slides, (function(r) {
                        return t("div", {
                            key: r.name,
                            staticClass: "home-platforms__slide"
                        }, [t("div", {
                            staticClass: "home-platforms__platform",
                            class: r.name
                        }, [t("img", {
                            staticClass: "home-platforms__platform-image",
                            attrs: {
                                height: "100%",
                                width: "100%",
                                draggable: "false",
                                srcset: e.getSrcSet(r.name),
                                sizes: e.imgSizes,
                                alt: "platform"
                            },
                            on: {
                                dragstart: function(e) {
                                    e.preventDefault()
                                }
                            }
                        }), e._v(" "), t("div", {
                            staticClass: "home-platforms__card"
                        }, [t("h3", {
                            staticClass: "home-platforms__card-title"
                        }, [e._v("\n              " + e._s(r.links.title) + "\n            ")]), e._v(" "), t("p", {
                            staticClass: "home-platforms__card-description"
                        }, [e._v("\n              " + e._s(r.links.description) + "\n            ")]), e._v(" "), t("div", {
                            staticClass: "home-platforms__links"
                        }, e._l(r.links.platforms, (function(r) {
                            return t("nuxt-link", {
                                key: r.name,
                                staticClass: "home-platforms__link",
                                attrs: {
                                    to: r.route
                                }
                            }, [t("base-hoverable-platform", {
                                attrs: {
                                    platform: r.name
                                }
                            }, [e._v("\n                  " + e._s(r.label) + "\n                ")])], 1)
                        })), 1)])])])
                    })), 0), e._v(" "), t("page-section", [t("div", {
                        staticClass: "home-platforms__controls"
                    }, [t("div", {
                        staticClass: "home-platforms__pagination"
                    }, e._l(e.slides, (function(r, i) {
                        return t("div", {
                            key: i,
                            staticClass: "home-platforms__page",
                            class: {
                                active: e.isActivePage(i)
                            },
                            on: {
                                click: function(t) {
                                    return e.goToPage(i)
                                }
                            }
                        })
                    })), 0), e._v(" "), t("div", {
                        staticClass: "home-platforms__buttons"
                    }, [t("button", {
                        staticClass: "home-platforms__arrow left",
                        attrs: {
                            "aria-label": ""
                        },
                        on: {
                            click: e.goToPrev
                        }
                    }, [t("arrow-icon", {
                        attrs: {
                            back: ""
                        }
                    })], 1), e._v(" "), t("button", {
                        staticClass: "home-platforms__arrow",
                        attrs: {
                            "aria-label": ""
                        },
                        on: {
                            click: e.goToNext
                        }
                    }, [t("arrow-icon", {
                        attrs: {
                            forward: ""
                        }
                    })], 1)])])])], 1)], 1)
                }), [], !1, null, "282c24d1", null);
            "function" == typeof $.default && Object($.default)(B);
            var U = B.exports,
                G = Object(x.a)({}, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("svg", {
                        attrs: {
                            width: "28",
                            height: "28",
                            viewBox: "0 0 28 28",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [t("g", {
                        attrs: {
                            "clip-path": "url(#clip0_9416_12713)"
                        }
                    }, [t("path", {
                        attrs: {
                            d: "M24.8503 9.3537C25.4512 10.8337 25.7559 12.3101 25.7559 13.7419C25.7559 20.2245 20.4819 25.4984 13.9994 25.4984C11.3176 25.4984 8.72041 24.5483 6.60471 22.8086C6.83969 22.4438 6.97671 22.0102 6.97671 21.5449C6.97671 20.2541 5.92658 19.204 4.63581 19.204C3.34505 19.204 2.29492 20.2541 2.29492 21.5449C2.29492 22.8357 3.34505 23.8858 4.63581 23.8858C4.87947 23.8858 5.11445 23.8483 5.33553 23.7789C7.77833 25.8975 10.8347 27.059 13.9994 27.059C21.3215 27.059 27.3165 21.063 27.3165 13.7419C27.3165 12.1079 26.9732 10.434 26.2963 8.7666L24.8503 9.3537ZM3.85552 21.5449C3.85552 21.1147 4.20556 20.7646 4.63581 20.7646C5.06607 20.7646 5.41611 21.1147 5.41611 21.5449C5.41611 21.9752 5.06607 22.3252 4.63581 22.3252C4.20556 22.3252 3.85552 21.9752 3.85552 21.5449Z",
                            fill: "white"
                        }
                    }), e._v(" "), t("path", {
                        attrs: {
                            d: "M13.9993 5.1582C9.26647 5.1582 5.41602 9.00866 5.41602 13.7415C5.41602 18.4743 9.26647 22.3247 13.9993 22.3247C18.7321 22.3247 22.5826 18.4743 22.5826 13.7415C22.5826 9.00866 18.7321 5.1582 13.9993 5.1582ZM19.8356 9.83999H17.5026C17.3092 8.95503 17.0219 8.0259 16.6061 7.22074C17.9279 7.75108 19.0522 8.67193 19.8356 9.83999ZM21.022 13.7415C21.022 14.5619 20.8801 15.3498 20.6203 16.0824H17.7635C17.8537 15.3307 17.9008 14.5442 17.9008 13.7415C17.9008 12.9387 17.8537 12.1523 17.7635 11.4006H20.6203C20.8801 12.1331 21.022 12.921 21.022 13.7415ZM13.9993 20.7641C13.0707 20.7641 12.3365 18.6095 12.0974 17.643H15.9012C15.5679 18.9901 14.8063 20.7641 13.9993 20.7641ZM11.8073 16.0824C11.7098 15.339 11.6584 14.5515 11.6584 13.7415C11.6584 12.9315 11.7098 12.144 11.8073 11.4006H16.1912C16.2887 12.144 16.3402 12.9315 16.3402 13.7415C16.3402 14.5515 16.2887 15.339 16.1912 16.0824H11.8073ZM6.97661 13.7415C6.97661 12.921 7.11852 12.1331 7.37831 11.4006H10.235C10.1449 12.1523 10.0978 12.9387 10.0978 13.7415C10.0978 14.5442 10.1448 15.3307 10.235 16.0824H7.37831C7.11852 15.3498 6.97661 14.5619 6.97661 13.7415ZM13.9993 6.7188C14.9278 6.7188 15.6621 8.87346 15.9012 9.83999H12.0974C12.4306 8.49283 13.1923 6.7188 13.9993 6.7188ZM11.3925 7.22074C10.9765 8.02611 10.6893 8.95534 10.496 9.83999H8.16297C8.94634 8.67193 10.0707 7.75108 11.3925 7.22074ZM8.16297 17.643H10.496C10.6894 18.5279 10.9767 19.457 11.3925 20.2622C10.0707 19.7319 8.94634 18.811 8.16297 17.643ZM16.6061 20.2622C17.0221 19.4568 17.3093 18.5276 17.5026 17.643H19.8356C19.0522 18.811 17.9279 19.7319 16.6061 20.2622Z",
                            fill: "white"
                        }
                    }), e._v(" "), t("path", {
                        attrs: {
                            d: "M25.7042 5.93891C25.7042 4.64814 24.654 3.59801 23.3633 3.59801C23.1196 3.59801 22.8846 3.63552 22.6635 3.70491C20.2207 1.5863 17.1644 0.424805 13.9997 0.424805C6.67759 0.424805 0.682617 6.42082 0.682617 13.7419C0.682617 15.3759 1.02584 17.0498 1.70278 18.7172L3.14877 18.1302C2.54789 16.6501 2.24321 15.1737 2.24321 13.7419C2.24321 7.25933 7.51714 1.9854 13.9997 1.9854C16.6815 1.9854 19.2787 2.93549 21.3944 4.67519C21.1594 5.04 21.0224 5.47364 21.0224 5.93891C21.0224 7.22967 22.0725 8.2798 23.3633 8.2798C24.654 8.2798 25.7042 7.22967 25.7042 5.93891ZM22.583 5.93891C22.583 5.50865 22.933 5.15861 23.3633 5.15861C23.7935 5.15861 24.1436 5.50865 24.1436 5.93891C24.1436 6.36916 23.7935 6.7192 23.3633 6.7192C22.933 6.7192 22.583 6.36916 22.583 5.93891Z",
                            fill: "white"
                        }
                    })]), e._v(" "), t("defs", [t("clipPath", {
                        attrs: {
                            id: "clip0_9416_12713"
                        }
                    }, [t("rect", {
                        attrs: {
                            width: "26.6341",
                            height: "26.6341",
                            fill: "white",
                            transform: "translate(0.682617 0.424805)"
                        }
                    })])])])
                }), [], !1, null, null, null).exports;

            function Z(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }
            var Y = {
                    components: {
                        PageSection: m.a,
                        HomeSection: k.a,
                        HomeTitle: V.a,
                        WorldIcon: G,
                        BaseButton: v.a
                    },
                    computed: function(e) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? Z(Object(source), !0).forEach((function(t) {
                                Object(o.a)(e, t, source[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : Z(Object(source)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                            }))
                        }
                        return e
                    }({}, Object(c.c)(["getCurrentLanguage"]))
                },
                X = Y,
                J = (r(2843), r(2845)),
                Q = Object(x.a)(X, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        staticClass: "home-network"
                    }, [t("page-section", {
                        attrs: {
                            transparent: ""
                        }
                    }, [t("home-section", {
                        scopedSlots: e._u([{
                            key: "title",
                            fn: function() {
                                return [t("home-title", [e._v(e._s(e.$t("title")) + " "), t("br"), e._v(" "), t("span", {
                                    staticClass: "highlight"
                                }, [e._v(e._s(e.$t("title_highlight")))])])]
                            },
                            proxy: !0
                        }])
                    }, [e._v(" "), t("div", {
                        staticClass: "home-network__statistic"
                    }, [t("div", {
                        staticClass: "home-network__fact"
                    }, [t("div", {
                        staticClass: "home-network__value"
                    }, [e._v("\n            1260 +\n          ")]), e._v(" "), t("div", {
                        staticClass: "home-network__label"
                    }, [e._v("\n            " + e._s(e.$t("text2")) + "\n          ")])]), e._v(" "), t("div", {
                        staticClass: "home-network__fact"
                    }, [t("div", {
                        staticClass: "home-network__value"
                    }, [e._v("\n            60\n          ")]), e._v(" "), t("div", {
                        staticClass: "home-network__label"
                    }, [e._v("\n            " + e._s(e.$t("text3")) + "\n          ")])]), e._v(" "), t("div", {
                        staticClass: "home-network__fact"
                    }, [t("div", {
                        staticClass: "home-network__value"
                    }, [e._v("\n            5\n          ")]), e._v(" "), t("div", {
                        staticClass: "home-network__label"
                    }, [e._v("\n            " + e._s(e.$t("text4")) + "\n          ")])])]), e._v(" "), t("div", {
                        staticClass: "home-network__route"
                    }, ["ua" !== e.getCurrentLanguage ? t("base-button", {
                        attrs: {
                            tag: "nuxt-link",
                            color: "white",
                            to: {
                                name: "servers",
                                params: {
                                    lang: void 0 === this.$i18n.locale || "en" === this.$i18n.locale ? null : this.$i18n.locale
                                }
                            }
                        },
                        scopedSlots: e._u([{
                            key: "icon",
                            fn: function() {
                                return [t("world-icon")]
                            },
                            proxy: !0
                        }], null, !1, 3278952199)
                    }, [e._v("\n          " + e._s(e.$t("btn")) + "\n          ")]) : e._e()], 1), e._v(" "), t("p", {
                        staticClass: "home-network__description"
                    }, [e._v("\n        " + e._s(e.$t("text1")) + "\n      ")])])], 1)], 1)
                }), [], !1, null, "303746df", null);
            "function" == typeof J.default && Object(J.default)(Q);
            var ee = Q.exports,
                te = {
                    components: {
                        PageSection: m.a,
                        HomeSection: k.a,
                        HomeTitle: V.a,
                        BaseButton: v.a,
                        AdvantagesList: I.a
                    },
                    data() {
                        return {
                            advantagesFree: Object.values(this.$t("advantagesFree")),
                            advantagesPremium: Object.values(this.$t("advantagesPremium"))
                        }
                    }
                },
                ie = (r(2846), r(2848)),
                ae = Object(x.a)(te, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("page-section", [t("home-section", {
                        scopedSlots: e._u([{
                            key: "title",
                            fn: function() {
                                return [t("home-title", [e._v("\n        " + e._s(e.$t("title")) + "\n      ")])]
                            },
                            proxy: !0
                        }])
                    }, [e._v(" "), t("div", {
                        staticClass: "home-plans"
                    }, [t("div", {
                        staticClass: "home-plans__plan"
                    }, [t("div", {
                        staticClass: "home-plans__title"
                    }, [e._v("\n          " + e._s(e.$t("planTitle")) + "\n        ")]), e._v(" "), t("div", {
                        staticClass: "home-plans__route"
                    }, [t("base-button", {
                        attrs: {
                            "outline-emphased": "",
                            to: "/link/platform/",
                            tag: "a"
                        }
                    }, [e._v("\n            " + e._s(e.$t("btnFree")) + "\n          ")])], 1), e._v(" "), t("div", {
                        staticClass: "home-plans__advantages"
                    }, [t("advantages-list", {
                        attrs: {
                            gap: "fixed",
                            items: e.advantagesFree
                        }
                    })], 1)]), e._v(" "), t("h3", {
                        staticClass: "home-plans__subtitle"
                    }, [e._v("\n        " + e._s(e.$t("planSubtitle")) + "\n      ")]), e._v(" "), t("div", {
                        staticClass: "home-plans__plan"
                    }, [t("div", {
                        staticClass: "home-plans__title"
                    }, [t("img", {
                        staticClass: "home-plans__icon",
                        attrs: {
                            height: "23px",
                            width: "23px",
                            src: r(871),
                            alt: "premium"
                        }
                    }), e._v(" Premium\n        ")]), e._v(" "), t("div", {
                        staticClass: "home-plans__route"
                    }, [t("base-button", {
                        attrs: {
                            to: {
                                name: "order",
                                params: {
                                    lang: void 0 === this.$i18n.locale || "en" === this.$i18n.locale ? null : this.$i18n.locale
                                }
                            },
                            tag: "nuxt-link"
                        }
                    }, [e._v("\n            " + e._s(e.$t("btnPremium")) + "\n          ")])], 1), e._v(" "), t("div", {
                        staticClass: "home-plans__advantages"
                    }, [t("advantages-list", {
                        attrs: {
                            gap: "fixed",
                            items: e.advantagesPremium
                        }
                    })], 1)]), e._v(" "), t("div", {
                        staticClass: "home-plans__description"
                    }, [t("p", {
                        staticClass: "home-plans__paragraph"
                    }, [e._v("\n          " + e._s(e.$t("text1")) + "\n        ")]), e._v(" "), t("p", {
                        staticClass: "home-plans__paragraph"
                    }, [e._v("\n          " + e._s(e.$t("text2")) + "\n        ")])])])])], 1)
                }), [], !1, null, "15f3cbc8", null);
            "function" == typeof ie.default && Object(ie.default)(ae);
            var re = ae.exports,
                ne = r(2626),
                oe = {
                    components: {
                        PageSection: m.a,
                        HomeSection: k.a,
                        HomeTitle: V.a,
                        AdvantagesList: I.a
                    },
                    data() {
                        return {
                            advantagesInfo: Object.values(this.$t("advantagesInfo"))
                        }
                    }
                },
                se = (r(2896), r(2898)),
                le = Object(x.a)(oe, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("page-section", [t("home-section", {
                        scopedSlots: e._u([{
                            key: "title",
                            fn: function() {
                                return [t("home-title", [e._v(e._s(e.$t("title")))])]
                            },
                            proxy: !0
                        }])
                    }, [e._v(" "), t("div", {
                        staticClass: "home-info"
                    }, [t("advantages-list", {
                        attrs: {
                            grid: "",
                            gap: "big",
                            items: e.advantagesInfo
                        }
                    })], 1), e._v(" "), t("p", {
                        staticClass: "home-info__text"
                    }, [e._v("\n      " + e._s(e.$t("text1")) + "\n    ")])])], 1)
                }), [], !1, null, "69c495f2", null);
            "function" == typeof se.default && Object(se.default)(le);
            var de = le.exports,
                ce = {
                    components: {
                        TitledContent: y,
                        HomeTitle: V.a,
                        PageSection: m.a,
                        HomeSection: k.a,
                        AdvantagesList: I.a
                    },
                    data() {
                        return {
                            advantages: Object.values(this.$t("advantages"))
                        }
                    }
                },
                ue = (r(2899), r(2901)),
                pe = Object(x.a)(ce, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("page-section", [t("div", {
                        staticClass: "home-benefits"
                    }, [t("p", [e._v(e._s(e.$t("text1")))]), e._v(" "), t("p", [e._v(e._s(e.$t("text2")))]), e._v(" "), t("p", [e._v(e._s(e.$t("text3")))]), e._v(" "), t("p", [e._v(e._s(e.$t("text4")))]), e._v(" "), t("p", [e._v(e._s(e.$t("text5")))])])])
                }), [], !1, null, "72bfa2a8", null);
            "function" == typeof ue.default && Object(ue.default)(pe);
            var me = pe.exports;

            function ge(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function ve(e) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? ge(Object(source), !0).forEach((function(t) {
                        Object(o.a)(e, t, source[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : ge(Object(source)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                    }))
                }
                return e
            }
            var fe = {
                    components: {
                        HomeHeader: N,
                        HomeAccess: C,
                        HomeSafe: T,
                        HomePlatforms: U,
                        HomeNetwork: ee,
                        HomePlans: re,
                        HomeReviews: ne.a,
                        HomeInfo: de,
                        HomeBenefits: me
                    },
                    computed: ve(ve({}, Object(c.c)(["getSupportedLanguages"])), {}, {
                        currentLang() {
                            return this.$store.getters.getCurrentLanguage
                        }
                    }),
                    mounted() {
                        this.$root.$emit("changeLangList", this.getSupportedLanguages)
                    },
                    beforeDestroy() {
                        this.$root.$emit("changeLangList", !1)
                    }
                },
                he = (r(2902), Object(x.a)(fe, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", [t("home-header"), e._v(" "), t("home-access"), e._v(" "), t("home-safe"), e._v(" "), t("home-platforms"), e._v(" "), t("home-network"), e._v(" "), t("home-plans"), e._v(" "), t("home-reviews"), e._v(" "), t("home-info"), e._v(" "), t("home-benefits")], 1)
                }), [], !1, null, null, null).exports),
                be = {
                    components: {
                        cHeaderAndFooter: n.a,
                        HomePage: he
                    },
                    layout: "simple",
                    head() {
                        return {
                            title: this.$t("seo.title"),
                            meta: [{
                                hid: "description",
                                name: "description",
                                content: this.$t("seo.description")
                            }, {
                                property: "og:title",
                                content: this.$t("seo.title"),
                                hid: "og:title"
                            }, {
                                property: "og:description",
                                content: this.$t("seo.description"),
                                hid: "og:description"
                            }, {
                                property: "og:url",
                                content: "https://freevpnplanet.com",
                                hid: "og:url"
                            }]
                        }
                    }
                },
                _e = r(2904),
                Pe = Object(x.a)(be, (function() {
                    var e = this._self._c;
                    return e("c-header-and-footer", {
                        attrs: {
                            wide: ""
                        }
                    }, [e("home-page")], 1)
                }), [], !1, null, null, null);
            "function" == typeof _e.default && Object(_e.default)(Pe);
            t.default = Pe.exports
        },
        2138: function(e, t, r) {
            var n = r(2154).Symbol;
            e.exports = n
        },
        2142: function(e, t, r) {
            var n = r(2146)("toUpperCase");
            e.exports = n
        },
        2143: function(e, t) {
            var r = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
            e.exports = function(e) {
                return r.test(e)
            }
        },
        2146: function(e, t, r) {
            var n = r(2147),
                o = r(2143),
                l = r(2149),
                d = r(2152);
            e.exports = function(e) {
                return function(t) {
                    t = d(t);
                    var r = o(t) ? l(t) : void 0,
                        c = r ? r[0] : t.charAt(0),
                        m = r ? n(r, 1).join("") : t.slice(1);
                    return c[e]() + m
                }
            }
        },
        2147: function(e, t, r) {
            var n = r(2148);
            e.exports = function(e, t, r) {
                var o = e.length;
                return r = void 0 === r ? o : r, !t && r >= o ? e : n(e, t, r)
            }
        },
        2148: function(e, t) {
            e.exports = function(e, t, r) {
                var n = -1,
                    o = e.length;
                t < 0 && (t = -t > o ? 0 : o + t), (r = r > o ? o : r) < 0 && (r += o), o = t > r ? 0 : r - t >>> 0, t >>>= 0;
                for (var l = Array(o); ++n < o;) l[n] = e[n + t];
                return l
            }
        },
        2149: function(e, t, r) {
            var n = r(2150),
                o = r(2143),
                l = r(2151);
            e.exports = function(e) {
                return o(e) ? l(e) : n(e)
            }
        },
        2150: function(e, t) {
            e.exports = function(e) {
                return e.split("")
            }
        },
        2151: function(e, t) {
            var r = "\\ud800-\\udfff",
                n = "[" + r + "]",
                o = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
                l = "\\ud83c[\\udffb-\\udfff]",
                d = "[^" + r + "]",
                c = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                m = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                v = "(?:" + o + "|" + l + ")" + "?",
                f = "[\\ufe0e\\ufe0f]?",
                h = f + v + ("(?:\\u200d(?:" + [d, c, m].join("|") + ")" + f + v + ")*"),
                _ = "(?:" + [d + o + "?", o, c, m, n].join("|") + ")",
                P = RegExp(l + "(?=" + l + ")|" + _ + h, "g");
            e.exports = function(e) {
                return e.match(P) || []
            }
        },
        2152: function(e, t, r) {
            var n = r(2153);
            e.exports = function(e) {
                return null == e ? "" : n(e)
            }
        },
        2153: function(e, t, r) {
            var n = r(2138),
                o = r(2156),
                l = r(2157),
                d = r(2158),
                c = n ? n.prototype : void 0,
                m = c ? c.toString : void 0;
            e.exports = function e(t) {
                if ("string" == typeof t) return t;
                if (l(t)) return o(t, e) + "";
                if (d(t)) return m ? m.call(t) : "";
                var r = t + "";
                return "0" == r && 1 / t == -Infinity ? "-0" : r
            }
        },
        2154: function(e, t, r) {
            var n = r(2155),
                o = "object" == typeof self && self && self.Object === Object && self,
                l = n || o || Function("return this")();
            e.exports = l
        },
        2155: function(e, t, r) {
            (function(t) {
                var r = "object" == typeof t && t && t.Object === Object && t;
                e.exports = r
            }).call(this, r(42))
        },
        2156: function(e, t) {
            e.exports = function(e, t) {
                for (var r = -1, n = null == e ? 0 : e.length, o = Array(n); ++r < n;) o[r] = t(e[r], r, e);
                return o
            }
        },
        2157: function(e, t) {
            var r = Array.isArray;
            e.exports = r
        },
        2158: function(e, t, r) {
            var n = r(2159),
                o = r(2162);
            e.exports = function(e) {
                return "symbol" == typeof e || o(e) && "[object Symbol]" == n(e)
            }
        },
        2159: function(e, t, r) {
            var n = r(2138),
                o = r(2160),
                l = r(2161),
                d = n ? n.toStringTag : void 0;
            e.exports = function(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : d && d in Object(e) ? o(e) : l(e)
            }
        },
        2160: function(e, t, r) {
            var n = r(2138),
                o = Object.prototype,
                l = o.hasOwnProperty,
                d = o.toString,
                c = n ? n.toStringTag : void 0;
            e.exports = function(e) {
                var t = l.call(e, c),
                    r = e[c];
                try {
                    e[c] = void 0;
                    var n = !0
                } catch (e) {}
                var o = d.call(e);
                return n && (t ? e[c] = r : delete e[c]), o
            }
        },
        2161: function(e, t) {
            var r = Object.prototype.toString;
            e.exports = function(e) {
                return r.call(e)
            }
        },
        2162: function(e, t) {
            e.exports = function(e) {
                return null != e && "object" == typeof e
            }
        },
        2197: function(e, t, r) {
            "use strict";
            var n = {
                    props: {
                        mb3: {
                            type: Boolean,
                            default: !1
                        }
                    }
                },
                o = (r(2288), r(2)),
                component = Object(o.a)(n, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("section", {
                        staticClass: "home-section"
                    }, [t("div", {
                        staticClass: "home-section__title",
                        class: {
                            "mb-3": e.mb3
                        }
                    }, [e._t("title")], 2), e._v(" "), e._t("default")], 2)
                }), [], !1, null, "47d15b98", null);
            t.a = component.exports
        },
        2198: function(e, t, r) {
            "use strict";
            r(2290);
            var n = r(2),
                component = Object(n.a)({}, (function() {
                    return (0, this._self._c)("h2", {
                        staticClass: "home-title"
                    }, [this._t("default")], 2)
                }), [], !1, null, "ce16a61c", null);
            t.a = component.exports
        },
        2208: function(e, t) {
            e.exports = function(e) {
                e.options.__i18n = e.options.__i18n || [], e.options.__i18n.push('{"ar":{"title_part":"مزايا الاشتراك المميز","title_highlight":" "},"de":{"title_part":"Mehr als 1 Million Nutzer weltweit vertrauen uns -","title_highlight":"schließen Sie sich uns an!"},"en":{"title_part":"We are trusted by more than 1 million users worldwide - ","title_highlight":"join us!"},"es":{"title_part":"Más de 1 millón usuarios de todo el mundo confían en nosotros","title_highlight":" "},"fr":{"title_part":"Plus de 1 million utilisateurs dans le monde nous font confiance -","title_highlight":"rejoignez-nous!"},"ru":{"title_part":"НАМ ДОВЕРЯЕТ УЖЕ БОЛЕЕ 1 МЛН. ПОЛЬЗОВАТЕЛЕЙ -","title_highlight":"ПРИСОЕДИНЯЙТЕСЬ!"},"sv":{"title_part":"Vi är betrodda av mer än 1 miljon användare över hela världen -","title_highlight":"gå med oss!"},"tr":{"title_part":"Dünyaca 1 milyondan fazla kullanıcı bize güveniyor –","title_highlight":"Bize katılın!"},"ua":{"title_part":"НАМ ВЖЕ ДОВІРЯЄ БІЛЬШ НІЖ 1 МЛН. КОРИСТУВАЧІВ -","title_highlight":"ПРИЄДНУЙТЕСЬ!"},"pt":{"title_part":"Temos a confiança de mais de 1 milhão usuários em todo o mundo -","title_highlight":"junte-se a nós!"},"th":{"title_part":"เราได้รับความไว้วางใจจากผู้ใช้งานกว่า 1 ล้าน คนทั่วโลก -","title_highlight":"ใช้งานเลยตอนนี้!"},"it":{"title_part":"POSSIAMO CONTARE SULLA FIDUCIA DI OLTRE 1 MILIONE DI UTENTI IN TUTTO IL MONDO - ","title_highlight":"UNISCITI A NOI!"}}'), delete e.options._Ctor
            }
        },
        2237: function(e, t, r) {
            "use strict";
            r(23);
            var n = {
                    props: {
                        items: {
                            type: Array
                        },
                        inheritFontSize: {
                            type: Boolean,
                            required: !1
                        },
                        gap: {
                            type: String,
                            required: !1,
                            default: "fixed",
                            validator: e => ["big", "small", "fixed"].includes(e)
                        },
                        grid: {
                            type: Boolean,
                            required: !1
                        }
                    },
                    computed: {
                        styleClass() {
                            return {
                                semibold: this.semibold,
                                grid: this.grid,
                                "inherit-font-size": this.inheritFontSize
                            }
                        }
                    }
                },
                o = (r(2293), r(2)),
                component = Object(o.a)(n, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("ul", {
                        staticClass: "advantages-list",
                        class: e.styleClass
                    }, e._l(e.items, (function(r, i) {
                        return t("li", {
                            key: i,
                            staticClass: "advantages-list__item",
                            class: "gap-".concat(e.gap)
                        }, [t("div", {
                            staticClass: "advantages-list__text"
                        }, [e._v("\n      " + e._s(r) + "\n    ")])])
                    })), 0)
                }), [], !1, null, "0a7c266a", null);
            t.a = component.exports
        },
        2256: function(e, t, r) {
            var content = r(2286);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("0a235e08", content, !0, {
                sourceMap: !1
            })
        },
        2257: function(e, t, r) {
            var content = r(2289);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("0f3c91e3", content, !0, {
                sourceMap: !1
            })
        },
        2258: function(e, t, r) {
            var content = r(2291);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("4346c3b7", content, !0, {
                sourceMap: !1
            })
        },
        2259: function(e, t, r) {
            var content = r(2294);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("e0b0eb7a", content, !0, {
                sourceMap: !1
            })
        },
        2261: function(e, t, r) {
            var content = r(2315);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("28606c3d", content, !0, {
                sourceMap: !1
            })
        },
        2285: function(e, t, r) {
            "use strict";
            r(2256)
        },
        2286: function(e, t, r) {
            var n = r(12)((function(i) {
                return i[1]
            }));
            n.push([e.i, ".home-downloads__wrapper[data-v-0b336f89]{position:relative}@media(max-width:767px){.home-downloads__wrapper[data-v-0b336f89]{display:flex;justify-content:center;overflow:hidden}}.home-downloads__products[data-v-0b336f89]{grid-gap:30px;display:grid;gap:30px;grid-template-columns:repeat(auto-fit,30px);justify-content:space-between;min-height:90px;padding:30px 0}@media(max-width:767px){.home-downloads__products[data-v-0b336f89]{display:flex;flex-wrap:wrap;gap:0;justify-content:center;margin-bottom:-30px;max-width:350px;padding:20px 0}[dir=ltr] .home-downloads__products[data-v-0b336f89]{margin-right:-30px}[dir=rtl] .home-downloads__products[data-v-0b336f89]{margin-left:-30px}}@media(max-width:480px){.home-downloads__products[data-v-0b336f89]{padding:20px 0}}@media(max-width:767px){.home-downloads__product[data-v-0b336f89]{margin-bottom:30px}[dir=ltr] .home-downloads__product[data-v-0b336f89]{margin-right:30px}[dir=rtl] .home-downloads__product[data-v-0b336f89]{margin-left:30px}}", ""]), n.locals = {}, e.exports = n
        },
        2287: function(e, t) {
            e.exports = function(e) {
                e.options.__i18n = e.options.__i18n || [], e.options.__i18n.push('{"ar":{"title":"VPN مجاني - أفضل VPN  free مجاني على الإنترنت، سريع وآمن","subtitle":" بدون كلمة مرور، عرض الحزمة أو حد زمني. فقط قم بالتثبيت والاتصال- ما من تسجيل  %بنسبة 100 خدمة مجانية أو معلومات شخصية مطلوبة.","download":{"title":"VPN مجاني لـ ","subtitle":"{os}"}},"de":{"title":"VPN kostenlos – das beste Free VPN, schnell und sicher","subtitle":"100% kostenloser VPN-Service ohne Traffic-, Bandbreiten- oder Zeitlimit. Einfach installieren und verbinden - keine Registrierung oder persönliche Daten erforderlich.","download":{"title":"Kostenloses VPN","subtitle":"für {os}"}},"en":{"title":"Free VPN – best free online VPN, fast and secure","subtitle":"100% free VPN service with no traffic, bandwidth or time limit. Just install and connect - no registration or personal data required.","download":{"title":"Free VPN","subtitle":"for {os}"}},"es":{"title":"VPN gratis: la mejor VPN en línea gratuita, rápida y segura","subtitle":"Servicio VPN 100% gratuito sin límite de tráfico, ancho de banda o tiempo. Solo tienes que instalarlo y conectarte, sin necesidad de registro ni datos personales.","download":{"title":"VPN gratis","subtitle":"para {os}"}},"fr":{"title":"VPN gratuit – meilleur free VPN en ligne gratuit, rapide et sécurisé","subtitle":"Service VPN 100% gratuit, sans limite de trafic, de bande passante ou de temps. Il suffit d\'installer et de se connecter - pas d\'inscription ou de données personnelles requises.","download":{"title":"VPN gratuit","subtitle":"pour {os}"}},"ru":{"title":"Бесплатный VPN  - лучший бесплатный ВПН для ПК и мобильных","subtitle":"Полностью бесплатный ВПН сервис без ограничений по трафику и скорости. Для подключения не требуется регистрация и ввод личных данных.","download":{"title":"Бесплатный VPN","subtitle":"для {os}"}},"sv":{"title":"Free VPN – bästa gratis VPN online, snabbt och säkert","subtitle":"100 % gratis VPN-tjänst utan trafik, bredband eller tidsgräns. Bara installera och anslut - ingen registrering eller personlig information krävs.","download":{"title":"Gratis VPN","subtitle":"för {os}"}},"tr":{"title":"Free VPN – en iyi çevrimiçi ücretsiz VPN, hızlı ve güvenli","subtitle":"Trafik, bant genişliği veya zaman sınırı olmayan %100 ücretsiz VPN servis. Sadece yükleyin ve bağlayın – Kayıt ve kişisel bilginin ihtiyacı yok.","download":{"title":"Için ücretsiz VPN","subtitle":"{os}"}},"ua":{"title":"Безкоштовний VPN – найкращий безкоштовний онлайн VPN, швидкий і безпечний","subtitle":"Повністю безкоштовний ВПН сервіс без обмежень щодо трафіку та швидкості. Для підключення не потрібна реєстрація та введення особистих даних.","download":{"title":"Безкоштовний VPN","subtitle":"для {os}"}},"pt":{"title":"Free VPN – a melhor VPN grátis online, rápida e segura","subtitle":"Serviço VPN 100% gratuito sem tráfego, largura de banda ou limite de tempo. Basta instalar e conectar - sem necessidade de registro ou dados pessoais.","download":{"title":"VPN grátis","subtitle":"para {os}"}},"th":{"title":"Free VPN – VPN ออนไลน์ฟรีที่ดีที่สุด รวดเร็วและปลอดภัย","subtitle":"บริการ VPN ฟรี 100% ไม่จำกัดปริมาณการใช้งาน ทั้ง bandwidth หรือระยะเวลาการใช้งาน เพียงแค่ทำการติดตั้งและเชื่อมต่อ - ไม่ต้องลงทะเบียน หรือข้อมูลส่วนตัวใดๆ.","download":{"title":"ฟรี VPN สำหรับ","subtitle":"{os}"}},"it":{"title":"VPN Gratis – il miglior VPN online Gratis, veloce e sicuro","subtitle":"Servizio VPN 100% Gratis senza limiti di traffico, larghezza di banda o tempo. Installa e ti connetti: non è richiesta alcuna registrazione o dati personali.","download":{"title":"VPN gratis","subtitle":"per {os}"}}}'), delete e.options._Ctor
            }
        },
        2288: function(e, t, r) {
            "use strict";
            r(2257)
        },
        2289: function(e, t, r) {
            var n = r(12)((function(i) {
                return i[1]
            }));
            n.push([e.i, ".home-section[data-v-47d15b98]{padding:100px 0}@media(min-width:1300px)and (-webkit-min-device-pixel-ratio:1.25),(min-width:1300px)and (min-resolution:120dpi){.home-section[data-v-47d15b98]{padding:50px 0}}@media(max-width:900px){.home-section[data-v-47d15b98]{padding:60px 0}}@media(max-width:480px){.home-section[data-v-47d15b98]{padding:50px 0}}.home-section__title[data-v-47d15b98]{margin-bottom:60px;text-align:center}.home-section__title[data-v-47d15b98]:empty{display:none}@media(max-width:1200px){.home-section__title[data-v-47d15b98]{margin-bottom:50px}}@media(max-width:900px){.home-section__title[data-v-47d15b98]{margin-bottom:40px}}@media(max-width:480px){.home-section__title[data-v-47d15b98]{margin-bottom:30px}}", ""]), n.locals = {}, e.exports = n
        },
        2290: function(e, t, r) {
            "use strict";
            r(2258)
        },
        2291: function(e, t, r) {
            var n = r(12)((function(i) {
                return i[1]
            }));
            n.push([e.i, ".home-title[data-v-ce16a61c]{color:var(--title-text-color);font-size:30px;font-weight:700;text-transform:uppercase}.home-title .highlight[data-v-ce16a61c]{color:var(--highlight-color)}@media(max-width:1200px){.home-title[data-v-ce16a61c]{font-size:25px}}@media(max-width:480px){.home-title[data-v-ce16a61c]{font-size:20px}}", ""]), n.locals = {}, e.exports = n
        },
        2292: function(e, t) {
            e.exports = function(e) {
                e.options.__i18n = e.options.__i18n || [], e.options.__i18n.push('{"ar":{"title_part1":" الحصول على وصول غير محدود إلى المحتوي العالمي","title_highlight":" ","title_part2":" ","img_text":"حرية الوصول دائما","text1":"لا داعي للقلق بشأن عمليات الحظر، والرقابة على الإنترنت، أو الوصول إلى مواقعك الإلكترونية المفضلة، والمشاركات مع Planet VPN.","text2":"استمتع بمواقع بث الفيديو والموسيقى والأحداث الرياضية والألعاب ووسائل التواصل الاجتماعي والماسنجر والمزيد، في حين أن الاتصال الآمن بأحد خوادمنا الآمنة سيوفر لك إخفاء الهوية الكامل عبر الإنترنت."},"de":{"title_part1":"Erhalten Sie","title_highlight":"unbegrenzten Zugang","title_part2":"zu weltweiten Inhalten","img_text":"Freier Zugang immer","text1":"Mit Planet VPN müssen Sie sich keine Sorgen über GEO-Sperren, Internetzensur oder den Zugang zu Ihren Lieblingswebseiten und Torrents machen.","text2":"Genießen Sie Video- und Musik-Streaming-Websites, Sportereignisse, Spiele, soziale Medien, Messenger und mehr, während eine sichere Verbindung zu einem unserer sicheren Server Ihnen volle Online-Anonymität bietet."},"en":{"title_part1":"Get","title_highlight":"unlimited access","title_part2":"to worldwide content","img_text":"Free access always","text1":"You don’t have to worry about GEO-blocks, internet censorship or access to your favourite websites and torrents with Planet VPN.","text2":"Enjoy video and music streaming websites, sport events, games, social media, messengers, and more, while safe connection to one of our secure servers will provide you with full online anonymity."},"es":{"title_part1":"Obtenga","title_highlight":"acceso ilimitado","title_part2":"a contenidos de todo el mundo","img_text":"Acceso gratuito siempre","text1":"No tienes que preocuparte por los bloqueos GEO, la censura de Internet o el acceso a tus sitios web y torrents favoritos con Planet VPN.","text2":"Disfruta de sitios web de streaming de vídeo y música, eventos deportivos, juegos, redes sociales, mensajería y mucho más, mientras que la conexión segura a uno de nuestros servidores seguros te proporcionará un anonimato total en línea."},"fr":{"title_part1":"Obtenez un","title_highlight":"accès illimité","title_part2":"au contenu mondial","img_text":"Accès gratuit toujours","text1":"Vous n\'avez pas à vous soucier des GEO-blocks, de la censure d\'Internet ou de l\'accès à vos sites web et torrents préférés avec Planet VPN.","text2":"Profitez des sites de streaming vidéo et musical, des événements sportifs, des jeux, des médias sociaux, des messageries et bien plus encore, tandis qu\'une connexion sûre à l\'un de nos serveurs sécurisés vous offrira un anonymat en ligne complet."},"ru":{"title_part1":"ПОЛУЧИТЕ","title_highlight":"ПОЛНЫЙ ДОСТУП","title_part2":"К ЛЮБОМУ КОНТЕНТУ","img_text":"Свободный доступ всегда","text1":"С Planet VPN вы можете не беспокоиться об интернет-цензуре и ограничении доступа к любимым сайтам и торрентам.","text2":"Наслаждайтесь просмотром потокового видео и прослушиванием музыки на сайтах, спортивными мероприятиями, играми, социальными сетями, мессенджерами и многим другим. При этом, надежное подключение к удаленному серверу позволяет сохранить вашу полную интернет-анонимность."},"sv":{"title_part1":"Få obegränsad tillgång till världsomspännande innehåll","title_highlight":" ","title_part2":" ","img_text":"Alltid fri tillgång","text1":"Du behöver inte oroa dig för GEO-blockeringar, internetcensur eller tillgång till dina favoritwebbplatser och torrents med Planet VPN.","text2":"Njut av video- och musikströmningswebbplatser, sportevenemang, spel, sociala medier, meddelanden och mycket mer, medan säker anslutning till en av våra säkra servrar ger dig fullständig anonymitet online."},"tr":{"title_part1":"Dünyaca içeriğe sınırsız erişim elde edin","title_highlight":" ","title_part2":" ","img_text":"Her zaman ücretsiz erişim","text1":"Size Geo-blocks için merek etmeye gerek yok, Planet VPN ile internet sansürü veya en favori web sayfaları ve torrent’leri açın.","text2":"Güvenli sunuclarımızdan biri ile sağlam bağlantısı kurarak tam bağlantılı gizlilik ile video ve müziğin web sayfaların, spor olayların, oyunların, sosyal medyanın, messenger’in ve daha fazlasının keyfini alın."},"ua":{"title_part1":"ОТРИМАЙТЕ","title_highlight":"ПОВНИЙ ДОСТУП","title_part2":"ДО БУДЬ-ЯКОГО КОНТЕНТУ","img_text":"Вільний доступ завжди","text1":"З Planet VPN ви можете не турбуватися про інтернет-цензуру та обмеження доступу до улюблених сайтів та торентів.","text2":"Насолоджуйтесь переглядом потокового відео та прослуховуванням музики на сайтах, спортивними заходами, іграми, соціальними мережами, месенджерами та багатьом іншим. При цьому, надійне підключення до віддаленого сервера дозволяє зберегти повну інтернет-анонімність."},"pt":{"title_part1":"Obtenha","title_highlight":"acesso ilimitado","title_part2":"a conteúdo mundial","img_text":"Acesso gratuito sempre","text1":"Você não precisa se preocupar com bloqueios GEO, censura na Internet ou acesso aos seus sites e torrents favoritos com o Planet VPN.","text2":"Desfrute de sites de streaming de vídeo e música, eventos esportivos, jogos, mídia social, mensageiros e muito mais, enquanto a conexão segura a um de nossos servidores seguros fornecerá anonimato online completo."},"th":{"title_part1":"เข้าถึงบริการได้ทั่วโลก แบบไม่มีขีดจำกัด","title_highlight":" ","title_part2":" ","img_text":"เข้าฟรีเสมอ","text1":"คุณไม่ต้องเป็นกังวลเรื่องของ GEO-blocks การเซ็นเซอร์อินเทอร์เน็ต หรือการเข้าถึงเว็บไซต์สุดโปรดและ torrents ด้วย Planet VPN.","text2":"เพลิดเพลินไปกับเว็บไซต์สตรีมมิ่งเพลงและวิดีโอ การแข่งขันกีฬา เกม โซเชียลมีเดีย แอพแมสเซนเจอร์และอื่นๆอีกมากมาย ไปพร้อมๆกับการเชื่อมต่อที่ปลอดภัยบนเซิร์ฟเวอร์ที่ปลอดภัยที่สุด โดยที่คุณไม่ต้องเปิดเผยตัวตนบนโลกออนไลน์แต่อย่างใด."},"it":{"title_part1":" ","title_highlight":"ACCESSO ILLIMITATO","title_part2":"AI CONTENUTI DI TUTTO IL MONDO","img_text":"Accesso gratuito sempre","text1":"Con Planet VPN nessuna paura dei blocchi GEO, della censura di Internet o dell\'accesso ai tuoi siti web e torrent preferiti.","text2":"Goditi i siti web di streaming video e musicale, gli eventi sportivi, i giochi, i social media, i servizi di messaggistica e molto altro, mentre la connessione sicura a uno dei nostri server sicuri ti garantirà il completo anonimato online."}}'), delete e.options._Ctor
            }
        },
        2293: function(e, t, r) {
            "use strict";
            r(2259)
        },
        2294: function(e, t, r) {
            var n = r(12),
                o = r(81),
                l = r(409),
                d = n((function(i) {
                    return i[1]
                })),
                c = o(l);
            d.push([e.i, ".advantages-list[data-v-0a7c266a]{font-size:16px;margin-bottom:0}[dir=ltr] .advantages-list[data-v-0a7c266a]{padding-left:1.1em;text-align:left}[dir=rtl] .advantages-list[data-v-0a7c266a]{padding-right:1.1em;text-align:right}.advantages-list.grid[data-v-0a7c266a]{display:grid;grid-template-columns:repeat(3,1fr);justify-content:space-between}@media(max-width:900px){.advantages-list.grid[data-v-0a7c266a]{grid-template-columns:repeat(2,1fr)}}@media(max-width:600px){.advantages-list.grid[data-v-0a7c266a]{grid-template-columns:1fr}}.advantages-list__item[data-v-0a7c266a]{list-style-image:url(" + c + ")}[dir=ltr] .advantages-list__item[data-v-0a7c266a]{margin-right:60px}[dir=rtl] .advantages-list__item[data-v-0a7c266a]{margin-left:60px}@media(min-width:901px){[dir=ltr] .advantages-list__item[data-v-0a7c266a]:nth-child(3n){margin-right:0}[dir=rtl] .advantages-list__item[data-v-0a7c266a]:nth-child(3n){margin-left:0}}@media(min-width:601px)and (max-width:900px){[dir=ltr] .advantages-list__item[data-v-0a7c266a]:nth-child(2n){margin-right:0}[dir=rtl] .advantages-list__item[data-v-0a7c266a]:nth-child(2n){margin-left:0}}@media(max-width:600px){[dir=ltr] .advantages-list__item[data-v-0a7c266a]{margin-right:0}[dir=rtl] .advantages-list__item[data-v-0a7c266a]{margin-left:0}}.advantages-list__item.gap-big[data-v-0a7c266a]{margin-bottom:30px}@media(max-width:768px){.advantages-list__item.gap-big[data-v-0a7c266a]{margin-bottom:15px}}.advantages-list__item.gap-small[data-v-0a7c266a]{margin-bottom:15px}@media(max-width:768px){.advantages-list__item.gap-small[data-v-0a7c266a]{margin-bottom:10px}}@media(max-width:480px){.advantages-list__item.gap-small[data-v-0a7c266a]{margin-bottom:15px}}.advantages-list__item.gap-fixed[data-v-0a7c266a]{margin-bottom:15px}.advantages-list__item[data-v-0a7c266a]:last-child{margin-bottom:0}", ""]), d.locals = {}, e.exports = d
        },
        2295: function(e, t) {
            e.exports = function(e) {
                e.options.__i18n = e.options.__i18n || [], e.options.__i18n.push('{"ar":{"title_highlight1":" ","title_part":" تشفير كامل لكلمة المرور وخوادم آمنة موثوق بها","title_highlight2":" ","text1":"نحن لا نحتفظ بسجلات الدخول وفي نفس الوقت يتم تشفير محركات الأقراص الصلبة في خوادمنا بشكل آمن. لذا، عندما يتم فصل الطاقة عن الخادم لأخذها إلى خارج الخادم للحصول على المعلومات، سيكون الوصول إلى البيانات الموجودة على محرك الأقراص الصلبة مستحيلا.","text2":"Planet VPN ميزات ","advantages":["5 مواقع مجانية لك للاختيار من بينها","لا يلزم تسجيل دخول أو بيانات شخصية للاتصال"," 1260 خوادم. أكثر من 60 دولة. 5 قارات ","DNS وIP حماية من اختراق","المرشحات الذكية للمواقع في ملحقات المستعرض","تخلص من تقنية التبديل","VPN و IKEv2 فتح بروتوكولات ","تشفير 256 بت ","لا توجد سجلات أو تحصيل البيانات الشخصية ","لا حدود للخاصية المجانية ","ما يصل إلى 10 أجهزة في وقت واحد"]},"de":{"title_highlight1":"Vollständige","title_part":" Verschlüsselung des Datenverkehrs und zuverlässige,","title_highlight2":"sichere Server","text1":"Wir führen keine Protokolle und gleichzeitig sind die Festplatten in unseren Servern sicher verschlüsselt. Wenn also die Stromversorgung des Servers unterbrochen wird, um ihn für ein Gutachten herauszunehmen, ist ein Zugriff auf die Daten auf der Festplatte unmöglich.","text2":"Planet VPN Merkmale:","advantages":["5 kostenlose Standorte für Sie zur Auswahl","Keine Registrierung oder persönliche Daten für die Verbindung erforderlich","1260+ Server - mehr als 60 Länder - 5 Kontinente","DNS- und IP-Leck-Schutz","Intelligente Filter für Websites in Browsererweiterungen","Kill-Switch-Technologie","OpenVPN- und IKEv2-Protokolle","256-Bit-Verschlüsselung","Keine Logs oder Sammlung persönlicher Daten","Keine Beschränkungen für den freien Modus","Bis zu 10 Geräte gleichzeitig"]},"en":{"title_highlight1":"Full","title_part":"traffic encryption and reliable","title_highlight2":"secure servers","text1":"We do not keep logs on and at the same time HDDs in our servers are securely encrypted. So, when the power is dropped off the server to take it out for expertise - access to the data on the HDD will be impossible.","text2":"Planet VPN features:","advantages":["5 free locations for you to choose from","No registration or personal data required to connect","1260+ servers · more than 60 countries · 5 continents","DNS- and IP-leak protection","Smart filters for sites in browser extensions","Kill Switch technology","OpenVPN and IKEv2 protocols","256-bit encryption","No logs or personal data collection","No limits for free mode","Up to 10 devices simultaneously"]},"es":{"title_highlight1":"Encriptación total","title_part":"del tráfico y servidores","title_highlight2":"seguros y fiables","text1":"No guardamos registros y, al mismo tiempo, los discos duros de nuestros servidores están encriptados de forma segura. Por lo tanto, cuando se corta la energía del servidor para llevarlo a la pericia - el acceso a los datos en el HDD será imposible.","text2":"Características de Planet VPN:","advantages":["5 ubicaciones gratuitas para que elijas","No se requiere registro ni datos personales para conectarse","Más de 1260 servidores - más de 60 países - 5 continentes","Protección contra fugas de DNS e IP","Filtros inteligentes para sitios en extensiones de navegador","Tecnología Kill Switch","Protocolos OpenVPN e IKEv2","Encriptación de 256 bits","Sin registros ni recopilación de datos personales","Sin límites para el modo libre","Hasta 10 dispositivos simultáneos"]},"fr":{"title_highlight1":"Cryptage complet","title_part":"du trafic et serveurs","title_highlight2":"fiables et sécurisés","text1":"Nous ne conservons pas de journaux et, dans le même temps, les disques durs de nos serveurs sont cryptés de manière sécurisée. Ainsi, lorsque l\'on coupe l\'alimentation du serveur pour l\'emmener en expertise - l\'accès aux données sur le disque dur sera impossible.","text2":"Caractéristiques de Planet VPN:","advantages":["5 emplacements gratuits parmi lesquels vous pouvez choisir","Aucune inscription ou données personnelles requises pour se connecter","Plus de 1260 serveurs - plus de 60 pays - 5 continents","Protection contre les fuites de DNS et d\'IP","Filtres intelligents pour les sites dans les extensions de navigateur","Technologie Kill Switch","Protocoles OpenVPN et IKEv2","Cryptage 256 bits","Pas de logs ni de collecte de données personnelles","Aucune limite pour le mode gratuit","Jusqu\'à 10 appareils simultanément"]},"ru":{"title_highlight1":"ШИФРОВАНИЕ","title_part":" VPN КАНАЛА И НАДЕЖНЫЕ","title_highlight2":"ЗАЩИЩЕННЫЕ СЕРВЕРА","text1":"На всех наших серверах не ведутся логи, а диски надежно зашифрованы. Таким образом, при отключении от питания сервера, например, для экспертизы - доступ к данным на диске получить будет невозможно.","text2":"Особенности Planet VPN:","advantages":["Бесплатные серверы в 5 странах на выбор","Работа приложения без регистрации и ввода персональных данных","1260+ серверов · более 60 стран · 5 континентов","Защита от DNS и IP-утечек","Smart фильтры сайтов в расширении для браузеров","Технология Kill Switch","Протоколы OpenVPN и IKEv2","Защита 256-bit шифрованием","Не отслеживаем данные, не ведем логи подключений","Нет ограничений VPN-трафика","Одновременная поддержка до 10 устройств"]},"sv":{"title_highlight1":"Full","title_part":"trafikkryptering och pålitliga","title_highlight2":"säkra servrar","text1":"Vi loggar ingenting. Hårddiskarna på våra servrar är säkert krypterade. Så när strömmen stängs av från servern - kommer dataåtkomsten på hårddisken inte vara tillgänglig.","text2":"Planet VPN-funktioner:","advantages":["5 gratis platser att välja mellan","Ingen registrering eller personlig information krävs för att ansluta","1260+ servrar · mer än 60 länder · 5 kontinenter","DNS- och IP-läckageskydd","Smarta filter för webbplatser i webbläsartillägg","Kill Switch-teknik","OpenVPN och IKEv2-protokoll","256-bitars kryptering","Inga loggar eller personlig datainsamling","Inga gränser för fritt läge","Upp till 10 enheter samtidigt"]},"tr":{"title_highlight1":" ","title_part":"Tam Trafik Şifrelemesi ve Güvenilir Sunucular","title_highlight2":" ","text1":"Hesaplarına oturumu tutmuyoruz ve aynı zamanda sunucularımızdaki HDD\'ler güvenli bir şekilde şifreleniyor. Bu yüzden, uzmanlık için çıkış yapmak için sunucunun gücü kesildiği durumda - HDD\'deki verilere erişim imkansız olacaktır.","text2":"Planet VPN özellikleri:","advantages":["Sizin için seçinebilecek 5 ücretsiz konumları","Bağlanmak için kayıt ve kişisel bilginin ihtiyacı yok","1260+ sunucları · 60’den fazla ülkeleri · 5 kıtaları","DNS- ve IP-sızıntısının koruması","Tarayıcı uzantılarındaki siteler için akıllı filtreler","Kill Switch teknoloji","OpenVPN and IKEv2 protocol’ları","256-bit şifrelemesi","Oturumun ve kişisel bilginin kayıt yapılmıyor","Sınırsız ücretsiz modu","Aynı zamanda 10 cihaz’a kadar"]},"ua":{"title_highlight1":"ШИФРУВАННЯ","title_part":"VPN КАНАЛУ ТА НАДІЙНІ","title_highlight2":"ЗАХИЩЕНІ СЕРВЕРА","text1":"На всіх серверах не ведуться логи, а диски надійно зашифровані. Таким чином, при відключенні від живлення сервера, наприклад, для експертизи, доступ до даних на диску отримати буде неможливо.","text2":"Особливості Planet VPN:","advantages":["Безкоштовні сервери у 5 країнах на вибір","Робота програми без реєстрації та введення персональних даних","1260+ серверів · понад 60 країн · 5 континентів","Захист від DNS та IP-витоків","Smart фільтри сайтів у розширенні для браузерів","Технологія Kill Switch","Протоколи OpenVPN та IKEv2","Захист 256-біт шифруванням","Не відслідковуємо дані, не ведемо логи підключень","Відсутні обмеження VPN-трафіку","Одночасна підтримка до 10 пристроїв"]},"pt":{"title_highlight1":" ","title_part":"Criptografia de tráfego total e servidores seguros confiáveis","title_highlight2":" ","text1":"Não mantemos logs e, ao mesmo tempo, os HDDs em nossos servidores são criptografados com segurança. Assim, quando a energia é cortada do servidor para retirá-lo para perícia - o acesso aos dados no disco rígido será impossível.","text2":"Recursos do Planet VPN:","advantages":["5 locais gratuitos para você escolher","Nenhum registro ou dados pessoais necessários para se conectar","Mais de 1260 servidores · mais de 60 países · 5 continentes","Proteção contra vazamento de DNS e IP","Filtros inteligentes para sites em extensões de navegador","Tecnologia Kill Switch","Protocolos OpenVPN e IKEv2","Criptografia de 256 bits","Sem registros ou coleta de dados pessoais","Sem limites para o modo gratuito","Até 10 dispositivos simultaneamente"]},"th":{"title_highlight1":" ","title_part":"การเข้ารหัสเพื่อรับส่งข้อมูลแบบเต็มรูปแบบ ผ่านเซิร์ฟเวอร์ที่ปลอดภัยและเชื่อถือได้","title_highlight2":" ","text1":"เราจะไม่คงการใช้งานไว้ในระบบและในเวลาเดียวกัน HDD บนเซิร์ฟเวอร์ของเราจะได้รับการเข้ารหัสอย่างปลอดภัย ดังนั้นเมื่อไฟดับ เซิร์ฟเวอร์จะถูกปลดล็อคโดยผู้ที่ได้รับสิทธิ์เท่านั้น - จะไม่มีการเข้าถึงข้อมูลบน HDD อย่างแน่นอน.","text2":"ฟีเจอร์ของ Planet VPN:","advantages":["ทำเลที่ตั้งที่คุณสามารถเลือกได้ถึง 5 แห่ง","ไม่ต้องลงทะเบียน หรือกรอกข้อมูลส่วนตัวในการเชื่อมต่อ","มีเซิร์ฟเวอร์กว่า 1260+ เซิร์ฟเวอร์ มากกว่า 60 ประเทศ 5 ภูมิภาค","ระบบป้องกันการรั่วไหลของ DNS และ IP","ตัวกรองอัจฉริยะสำหรับไซต์ในส่วนขยายเบราว์เซอร์","เทคโนโลยี Kill Switch","โปรโตคอล OpenVPN และ IKEv2","การเข้ารหัสแบบ 256-bit","ไม่มีการล็อกบัญชี หรือเก็บข้อมูลส่วนตัวผู้ใช้งาน","ไม่มีขีดจำกัดในการใช้งานฟรี ","สามารถใช้งานได้ถึง 10 อุปกรณ์ในเวลาเดียวกัน"]},"it":{"title_highlight1":"CRITTOGRAFIA COMPLETA","title_part":"DEL TRAFFICO E SERVER SICURI E AFFIDABILI","title_highlight2":" ","text1":"Non conserviamo i log e allo stesso tempo gli HDD nei nostri server sono crittografati in modo sicuro. In questo modo, quando l\'alimentazione viene interrotta dal server per estrarlo per competenza, l\'accesso ai dati sull\'HDD sarà impossibile.","text2":"Caratteristiche di Planet VPN:","advantages":["5 posizioni gratuite tra cui scegliere","Nessuna registrazione o dati personali richiesti per connettersi","Più di 1260 server · oltre 60 paesi · 5 continenti","Protezione DNS- e IP-leak","Filtri intelligenti per i siti nelle estensioni del browser","Tecnologia Kill Switch","Protocolli OpenVPN e IKEv2","Crittografia a 256-bit","Nessun log o dato personale conservato","Nessun limite per la modalità gratuita","Fino a 10 dispositivi simultaneamente"]}}'), delete e.options._Ctor
            }
        },
        2296: function(e, t) {
            e.exports = function(e) {
                e.options.__i18n = e.options.__i18n || [], e.options.__i18n.push('{"ar":{"title":"موثوق بها لأي جهاز VPN","text1":"المجاني على أجهزة الكمبيوتر ويندوز، ماك، لينكس VPN يدعم منتجنا جميع أنظمة التشغيل الرئيسية. قم بتثبيت.","slides":{"browser":{"title":"للمتصفح","description":"Planet VPN للمتصفحات"},"desktop":{"title":"لجهاز الكمبيوتر","description":"Planet VPN للكمبيوتر"},"mobile":{"title":"للهواتف الذكية","description":"Planet VPN للجوال"}}},"de":{"title":"Zuverlässiges VPN für jedes Gerät","text1":"Unser Produkt unterstützt alle gängigen Betriebssysteme. Installieren Sie unser kostenloses VPN auf Windows PC, Mac OS, Linux, Smartphones und Tablets mit iOS- oder Android-Betriebssystem. Wir haben Browser-Erweiterungen für Chrome, Firefox, Opera, Yandex-Browser und Microsoft Edge. Wi-Fi-Router-Unterstützung wird ebenfalls angeboten, ebenso wie Konfigurationsdateien für jeden VPN-Client, zum Beispiel OpenVPN.","slides":{"browser":{"title":"Für Browser","description":"Planet VPN für Browser"},"desktop":{"title":"Für Rechner","description":"Planet VPN für Computer"},"mobile":{"title":"Für Smartphones","description":"Planet VPN für Mobilgeräte"}}},"en":{"title":"Reliable VPN for any device","text1":"Our product supports all major operating systems. Install our free VPN on Windows PC, Mac OS, Linux, smartphones and tablets with iOS or Android operating system. We have browser extensions for Chrome, Firefox, Opera, Yandex browser, Microsoft Edge. Wi-Fi router support is also provided, as well as configuration files for any VPN client, for example, OpenVPN.","slides":{"browser":{"title":"For browser","description":"Planet VPN for Browsers"},"desktop":{"title":"For computer","description":"Planet VPN for computer"},"mobile":{"title":"For smartphone","description":"Planet VPN for Mobile"}}},"es":{"title":"VPN fiable para cualquier dispositivo","text1":"Nuestro producto es compatible con los principales sistemas operativos. Instala nuestra VPN gratuita en PC Windows, Mac OS, Linux, smartphones y tablets con sistema operativo iOS o Android. Tenemos extensiones de navegador para Chrome, Firefox, Opera, navegador Yandex, Microsoft Edge. También se proporciona soporte para routers Wi-Fi, así como archivos de configuración para cualquier cliente VPN, por ejemplo, OpenVPN.","slides":{"browser":{"title":"Para navegador","description":"Planet VPN para navegadores"},"desktop":{"title":"Para computadora","description":"Planet VPN para computadora"},"mobile":{"title":"Para teléfono inteligente","description":"Planet VPN para Móvil"}}},"fr":{"title":"VPN fiable pour tout appareil","text1":"Notre produit prend en charge tous les principaux systèmes d\'exploitation. Installez notre VPN gratuit sur Windows PC, Mac OS, Linux, les smartphones et les tablettes avec le système d\'exploitation iOS ou Android. Nous avons des extensions de navigateur pour Chrome, Firefox, Opera, le navigateur Yandex, Microsoft Edge. Le support des routeurs Wi-Fi est également fourni, ainsi que les fichiers de configuration pour tout client VPN, par exemple, OpenVPN.","slides":{"browser":{"title":"Pour navigateur","description":"Planet VPN pour les navigateurs"},"desktop":{"title":"Pour ordinateur","description":"Planet VPN pour ordinateur"},"mobile":{"title":"Pour smartphone","description":"Planet VPN pour mobile"}}},"ru":{"title":"НАДЕЖНЫЙ VPN НА ЛЮБОМ УСТРОЙСТВЕ","text1":"Наш продукт дает полную поддержку устройств на всех основных операционных системах. Устанавливайте наш бесплатный VPN на ПК (Windows, Mac OS, Linux), смартфоны и планшеты (Android и iOS), а также расширение в браузеры Chrome, Firefox, Opera, Yandex и Edge. Имеется поддержка Wi-Fi роутеров и загрузка конфигурации в сторонние VPN-клиенты, например, OpenVPN.","slides":{"browser":{"title":"Для браузера","description":"Planet VPN для браузеров"},"desktop":{"title":"Для компьютера","description":"Planet VPN для компьютера"},"mobile":{"title":"Для смартфона","description":"Planet VPN для мобильных устройств"}}},"sv":{"title":"Pålitlig VPN för alla enheter","text1":"Vår produkt stöder alla större operativsystem. Installera vår gratis VPN på Windows PC, Mac OS, Linux, smartphones och surfplattor med iOS eller Android operativsystem. Vi har webbläsartillägg för Chrome, Firefox, Opera, Yandex webbläsare, Microsoft Edge. Wi-Fi-routerstöd tillhandahålls också, liksom konfigurationsfiler för alla VPN-klienter, till exempel OpenVPN.","slides":{"browser":{"title":"För webbläsare","description":"Planet VPN för webbläsare"},"desktop":{"title":"För dator","description":"Planet VPN för dator"},"mobile":{"title":"För smartphone","description":"Planet VPN för mobil"}}},"tr":{"title":"Her cihazı için güvenilir VPN ","text1":"Ürünümüz tüm büyük işlem sistemlerini desteklenir. Ücretsiz VPN\'imizi Windows PC, Mac OS, Linux, iOS veya Android işletim sistemine sahip akıllı telefonlar ve tabletlere yükleyin. Chrome, Firefox, Opera, Yandex tarayıcısı, Microsoft Edge için tarayıcı uzantılarımız bulunmaktadır. Herhangi bir VPN istemcisi için yapılandırma dosyalarının yanı sıra Wi-Fi yönlendirici desteği de sağlanır, örneğin, OpenVPN.","slides":{"browser":{"title":"Tarayıcı için","description":"Tarayıcılar için Planet VPN"},"desktop":{"title":"Bilgisayar için","description":"Bilgisayar için Planet VPN"},"mobile":{"title":"Akıllı telefon için","description":"Mobil için Planet VPN"}}},"ua":{"title":"НАДІЙНИЙ VPN НА БУДЬ-ЯКОМУ ПРИСТРІЙ","text1":"Наш продукт забезпечує повну підтримку пристроїв на всіх основних операційних системах. Встановлюйте наш безкоштовний VPN на ПК (Windows, Mac OS, Linux), смартфони та планшети (Android та iOS), а також розширення у браузери Chrome, Firefox, Opera, Yandex та Edge. Є підтримка Wi-Fi роутерів та завантаження конфігурації в сторонні VPN-клієнти, наприклад, OpenVPN.","slides":{"browser":{"title":"Для браузера","description":"Planet VPN для браузерів"},"desktop":{"title":"Для комп\'ютера","description":"Planet VPN для комп\'ютера"},"mobile":{"title":"Для смартфона","description":"Planet VPN для мобільних пристроїв"}}},"pt":{"title":"VPN confiável para qualquer dispositivo","text1":"Nosso produto suporta todos os principais sistemas operacionais. Instale nosso VPN gratuito no Windows PC, Mac OS, Linux, smartphones e tablets com sistema operacional iOS ou Android. Temos extensões de navegador para Chrome, Firefox, Opera, navegador Yandex, Microsoft Edge. Também é fornecido suporte a roteador Wi-Fi, bem como arquivos de configuração para qualquer cliente VPN, por exemplo, OpenVPN.","slides":{"browser":{"title":"Para navegador","description":"Planet VPN para navegadores"},"desktop":{"title":"Para computador","description":"Planet VPN para computador"},"mobile":{"title":"Para smartphone","description":"Planet VPN para celular"}}},"th":{"title":"เป็น VPN ที่เชื่อถือได้สำหรับทุกอุปกรณ์ ","text1":"ผลิตภัณฑ์ของเราสามารถใช้งานกับระบบปฏิบัติการได้ทั้งหมด เพียงแค่ติดตั้ง VPN ฟรีบน Windows PC, Mac OS, Linux, สมาร์ทโฟนและแท็บเล็ตที่มีระบบปฏิบัติการ iOS หรือ Android เท่านั้น รวมทั้งยังมีส่วนขยายเว็บเบราว์เซอร์ ไม่ว่าจะเป็น Chrome, Firefox, Opera, Yandex, Microsoft Edge นอกจากนี้ยังสามารถรองรับเราเตอร์ Wi-Fi ได้เช่นเดียวกันกับไฟล์กำหนดค่า VPN ของลูกค้า เช่น OpenVPN.","slides":{"browser":{"title":"สำหรับเบราว์เซอร์","description":"Planet VPN สำหรับเบราว์เซอร์"},"desktop":{"title":"สำหรับคอมพิวเตอร์","description":"Planet VPN สำหรับคอมพิวเตอร์"},"mobile":{"title":"สำหรับสมาร์ทโฟน","description":"Planet VPN สำหรับมือถือ"}}},"it":{"title":"VPN AFFIDABILE PER OGNI DISPOSITIVO","text1":"Il nostro prodotto supporta tutti i principali sistemi operativi. Installa la nostra VPN Gratis su PC Windows, Mac OS, Linux, smartphone e tablet con sistema operativo iOS o Android. Disponiamo di estensioni del browser per Chrome, Firefox, Opera, browser Yandex, Microsoft Edge. Forniamo anche il supporto su router Wi-Fi, oltre ai file di configurazione per qualsiasi client VPN, ad esempio OpenVPN.","slides":{"browser":{"title":"Per il browser","description":"Planet VPN per browser"},"desktop":{"title":"Per computer","description":"Planet VPN per il computer"},"mobile":{"title":"Per smartphone","description":"Planet VPN per cellulari"}}}}'), delete e.options._Ctor
            }
        },
        2297: function(e, t) {
            e.exports = function(e) {
                e.options.__i18n = e.options.__i18n || [], e.options.__i18n.push('{"ar":{"title":"iOS أو Android والهواتف الذكية والأجهزة اللوحية باستخدام","title_highlight":" نظام التشغيل","text1":". يتم توفير جهاز توجيه واي فايChrome وFirefox وYandex وMicrosoft Edge وOperaلدينا ملحقات متصفح لمتصفح Open VPN ، على سبيل المثال،  VPNبالإضافة إلى ملفات التهيئة لأي عميل.","text2":"خوادم","text3":"دولة ","text4":" قارات ","btn":"رؤية جميع الخوادم"},"de":{"title":"Unser globales","title_highlight":"schnelles Servernetzwerk","text1":"Sie haben 5 Standorte zur Auswahl in einer kostenlosen Version, keine Verkehrs-, Bandbreiten- oder Zeitbeschränkungen. Unsere Server bieten hohe Geschwindigkeiten (auf dem gleichen Niveau wie kostenpflichtige Premium-VPNs) ohne Registrierung oder Erhebung personenbezogener Daten.","text2":"Server","text3":"Länder","text4":"Kontinente","btn":"Alle Server anzeigen"},"en":{"title":"Our Global","title_highlight":"fast server network","text1":"You get 5 locations to choose from on a free version, no traffic, bandwidth or time limits. Our servers provide high speeds (same level as premium paid VPNs) with no registration or any personal data collection.","text2":"servers","text3":"countries ","text4":"continents","btn":"See all servers"},"es":{"title":"Nuestra red global de","title_highlight":"servidores rápidos","text1":"Tienes 5 ubicaciones para elegir en la versión gratuita, sin límites de tráfico, ancho de banda o tiempo. Nuestros servidores proporcionan altas velocidades (al mismo nivel que las VPNs premium de pago) sin registro ni recopilación de datos personales.","text2":"servidores","text3":"países","text4":"continentes","btn":"Ver todos los servidores"},"fr":{"title":"Notre réseau mondial de","title_highlight":"serveurs rapides","text1":"Vous avez le choix entre 5 emplacements dans la version gratuite, sans limite de trafic, de bande passante ou de temps. Nos serveurs fournissent des vitesses élevées (même niveau que les VPN premium payants) sans enregistrement ni collecte de données personnelles.","text2":"serveurs","text3":"pays ","text4":"continents","btn":"Voir tous les serveurs"},"ru":{"title":"НАША ГЛОБАЛЬНАЯ СЕТЬ","title_highlight":"БЫСТРЫХ БЕСПЛАТНЫХ VPN-СЕРВЕРОВ","text1":"В бесплатной версии впн вы получаете серверы в 5 странах на выбор, трафик без ограничений по мегабайтам и по скорости соединения, высокую скорость каждого из серверов (не хуже платных альтернатив), а также отсутствие авторизации и ввода личных данных.","text2":"серверов","text3":"стран","text4":"континентов","btn":"Смотреть все сервера"},"sv":{"title":"Vårt globala","title_highlight":"snabba servernätverk","text1":"Du får 5 platser att välja mellan i en gratisversion, ingen trafik, bredband eller tidsgränser. Våra servrar tillhandahåller höga hastigheter (samma nivå som premium-betalda VPN) utan registrering eller någon personlig datainsamling.","text2":"servrar","text3":"länder","text4":"kontinenter","btn":"Se alla servrar"},"tr":{"title":"Global hızlı sunucu ağımız","title_highlight":" ","text1":"Ücretsiz sürümde, trafik, bant genişliği veya zaman sınırı olmadan seçebileceğiniz 5 konum elde edersiniz. Sunucularımız, kayıt olmadan veya herhangi bir kişisel veri toplama olmadan yüksek hızlar (premium ücretli VPN\'lerle aynı düzeyde) sağlar.","text2":"sunucları ","text3":"ülkeleri ","text4":"kıtaları","btn":"Tüm sunucuları görün"},"ua":{"title":"НАША ГЛОБАЛЬНА МЕРЕЖА","title_highlight":"ШВИДКИХ БЕЗКОШТОВНИХ VPN-СЕРВЕРІВ","text1":"У безкоштовній версії впн ви отримуєте сервери в 5 країнах на вибір, трафік без обмежень за мегабайтами та за швидкістю з\'єднання, високу швидкість кожного із серверів (не гірше за платні альтернативи), а також відсутність авторизації та введення особистих даних.","text2":"серверів","text3":"країн","text4":"континентів","btn":"Дивитись всі сервери"},"pt":{"title":"Ossa rede global de","title_highlight":"servidores rápidos","text1":"Você tem 5 locais para escolher em uma versão gratuita, sem tráfego, largura de banda ou limites de tempo. Nossos servidores oferecem alta velocidade (mesmo nível dos VPNs pagos premium) sem registro ou coleta de dados pessoais.","text2":"servidores","text3":"países","text4":"continentes","btn":"Ver todos os servidores"},"th":{"title":"เครือข่ายเซิร์ฟเวอร์ความเร็วระดับโลก ","title_highlight":" ","text1":"คุณสามารถเลือกตำแหน่งที่ตั้งสำหรับการใช้งานฟรีได้ถึง 5 แห่ง ไม่มีการจำกัดการรับส่งข้อมูล bandwidth หรือระยะเวลาการใช้งาน เซิร์ฟเวอร์ของเราให้บริการด้วยความเร็วสูง (ในระดับเดียวกับสมาชิกพรีเมียม VPNs) โดยที่ไม่ต้องทำการลงทะเบียน หรือกรอกข้อมูลส่วนตัวใดๆ.","text2":"เซิร์ฟเวอร์","text3":"ประเทศ ","text4":"ภูมิภาค","btn":"ดูเซิร์ฟเวอร์ทั้งหมด"},"it":{"title":"IL NOSTRO GLOBALE","title_highlight":"RETE DI SERVER VELOCE","text1":"Ottieni 5 località tra cui scegliere nella versione gratuita, senza traffico, larghezza di banda o limiti di tempo. I nostri server forniscono velocità elevate (lo stesso livello delle VPN a pagamento premium) senza registrazione o raccolta di dati personali.","text2":"SERVER","text3":"PAESI","text4":"CONTINENTI","btn":"Visualizza tutti i server"}}'), delete e.options._Ctor
            }
        },
        2298: function(e, t) {
            e.exports = function(e) {
                e.options.__i18n = e.options.__i18n || [], e.options.__i18n.push('{"ar":{"title":"شبكة الخوادم العالمية السريعة","planTitle":"عادي","planSubtitle":"بالإضافة إلى ذلك:","btnFree":"تنزيل مجاني","advantagesFree":["5 دول غير محدودة","خوادم سريعة","طبيقات للجوال والكمبيوتر","الدعم الفني عن طريق البريد الإلكتروني"],"btnPremium":"احصل على جميع الفوائد","advantagesPremium":["أكثر من 60 دولة ، أكثر من 1260 خادمًا","السرعة القصوى","الخوادم المخصصة: Double VPN، Onion-over-VPN، P2P، Streaming","لا اعلانات","خوادم اللعبة مع ping منخفض","دعم أجهزة التوجيه وعملاء VPN من جهات خارجية","ما يصل إلى 10 أجهزة في اشتراك واحد","الدعم الفني عبر الدردشة أو البريد الإلكتروني"],"text1":"يمكنك الحصول على 5 مواقع للاختيار من بينها إصدار مجاني، بدون كلمة مرور أو عرض الحزم أو حدود زمنية. توفر    دون تسجيل دخول أو جمع البيانات الشخصية.","text2":"(المدفوعة VPN نفس مستوى شبكات) خوادمنا سرعات عالية."},"de":{"title":"Vorteile des Premium-Abonnements","planTitle":"Regulär","planSubtitle":"Zusätzlich erhältlich:","btnFree":"Befreien Sie sich","advantagesFree":["5 Länder unbegrenzt","Schnelle Server","Anwendungen für Handy und Computer","Technischer Support per E-Mail"],"btnPremium":"Holen Sie sich alle Vorteile","advantagesPremium":["Über 60 Länder, 1260+ Server","Höchstgeschwindigkeit","Dedizierte Server: Double VPN, Onion-over-VPN, P2P, Streaming","Keine Werbung","Gameserver mit niedrigem Ping","Unterstützung für Router und VPN-Clients von Drittanbietern","Bis zu 10 Geräte unter einem Abonnement","Technischer Support per Chat oder E-Mail"],"text1":"Wenn Sie die Funktionen der kostenlosen Version erweitern möchten, können Sie dies jederzeit tun. Mit einem Upgrade auf ein Premium-Abonnement erhalten Sie Zugang zu Servern in mehr als 60 Ländern und genießen weitere wichtige Funktionen wie blitzschnelle Geschwindigkeiten oder erweiterte App-Funktionen.","text2":"In diesem Fall müssen Sie Ihre E-Mail-Adresse angeben, damit Sie Ihr Abonnement auf allen Ihren Geräten nutzen können."},"en":{"title":"Advantages of Premium subscription","planTitle":"Сommon","planSubtitle":"Additionally available:","btnFree":"Get Free","advantagesFree":["5 countries unlimited","Fast servers","Applications for mobile and computer","Technical support by email"],"btnPremium":"Get all the benefits","advantagesPremium":["Over 60 countries, 1260+ servers","Max Speed","Dedicated servers: Double VPN, Onion-over-VPN, P2P, Streaming","No ads","Game servers with low ping","Support for routers and third-party VPN clients","Up to 10 devices under one subscription","Technical support via chat or email"],"text1":"If you would like to enhance the capabilities of free version - you can do it any time. Upgrade to premium subscription to get access to servers in more than 60 countries and enjoy other important features such as lightning-fast speeds or extended app functionality.","text2":"In that case you need to provide your email solely for the purpose of using your subscription on all your devices."},"es":{"title":"Ventajas de la suscripción Premium","planTitle":"Regular","planSubtitle":"Disponible adicionalmente:","btnFree":"Liberarse","advantagesFree":["5 países ilimitados","Servidores rápidos","Aplicaciones para móvil y ordenador","Soporte técnico por correo electrónico"],"btnPremium":"Obtenga todos los beneficios","advantagesPremium":["Más de 60 países, más de 1260 servidores","Máxima velocidad","Servidores dedicados: Doble VPN, Onion-over-VPN, P2P, Streaming","Sin anuncios","Servidores de juegos con ping bajo","Compatibilidad con enrutadores y clientes VPN de terceros","Hasta 10 dispositivos bajo una suscripción","Soporte técnico a través de chat o correo electrónico"],"text1":"Si quieres mejorar las capacidades de la versión gratuita, puedes hacerlo en cualquier momento. Actualice a la suscripción Premium para obtener acceso a servidores en más de 60 países y disfrutar de otras características importantes como velocidades ultrarrápidas o funcionalidad ampliada de la aplicación.","text2":"En ese caso, debes proporcionar tu correo electrónico únicamente para poder utilizar tu suscripción en todos tus dispositivos."},"fr":{"title":"Avantages de l\'abonnement Premium","planTitle":"Ordinaire","planSubtitle":"Disponible en plus:","btnFree":"Obtenez gratuitement","advantagesFree":["5 pays illimité","Serveurs rapides","Applications pour mobile et ordinateur","Assistance technique par email"],"btnPremium":"Bénéficiez de tous les avantages","advantagesPremium":["Plus de 60 pays, plus de 1260 serveurs","Vitesse maximale","Serveurs dédiés : Double VPN, Onion-over-VPN, P2P, Streaming","Pas de pubs","Serveurs de jeu avec un ping bas","Prise en charge des routeurs et des clients VPN tiers","Jusqu\'à 10 appareils sous un seul abonnement","Assistance technique par chat ou par e-mail"],"text1":"Si vous souhaitez améliorer les capacités de la version gratuite, vous pouvez le faire à tout moment. Passez à l\'abonnement premium pour avoir accès à des serveurs situés dans plus de 60 pays et profiter d\'autres fonctionnalités importantes, telles que des vitesses ultrarapides ou des fonctionnalités d\'application étendues.","text2":"Dans ce cas, vous devez fournir votre adresse électronique uniquement dans le but d\'utiliser votre abonnement sur tous vos appareils."},"ru":{"title":"ПРЕИМУЩЕСТВА C PREMIUM-ПАКЕТОМ","planTitle":"Обычный","planSubtitle":"Дополнительно доступно:","btnFree":"Скачать бесплатно","advantagesFree":["5 стран без ограничений","Быстрые сервера","Приложения для мобильных и компьютера","Техническая поддержка по e-mail"],"btnPremium":"Получить все преимущества","advantagesPremium":["Более 60 стран, 1260+ серверов","Максимальная скорость","Специальные сервера: Double VPN, Onion-over-VPN, P2P, Streaming","Отсутствие рекламы","Игровые сервера с низким ping","Поддержка роутеров и сторонних VPN-клиентов","До 10 устройств под одной подпиской","Техническая поддержка через чат или email"],"text1":"Если вы захотите расширить возможности бесплатной версии, то в любой момент есть возможность использовать Премиум-пакет, чтобы получить доступ к большему количеству серверов в более чем 60 странах мира и насладиться другими важными преимуществами в скорости и функционале.","text2":"В этом случае вам нужно указать e-mail исключительно для того, чтобы вы могли использовать VPN на всех ваших устройствах по одной подписке."},"sv":{"title":"Fördelar med Premium-abonnemang","planTitle":"Regelbunden","planSubtitle":"Ytterligare tillgängligt:","btnFree":"Få gratis","advantagesFree":["5 länder obegränsat","Snabba servrar","Applikationer för mobil och dator","Teknisk support via e-post"],"btnPremium":"Få alla fördelar","advantagesPremium":["Över 60 länder, 1260+ servrar","Högsta hastighet","Dedikerade servrar: Double VPN, Onion-over-VPN, P2P, Streaming","Inga annonser","Spelservrar med låg ping","Spelservrar med låg ping Stöd för routrar och tredjeparts VPN-klienter","Upp till 10 enheter under ett abonnemang","Teknisk support via chatt eller e-post"],"text1":"Om du vill förbättra möjligheterna för gratisversionen - kan du göra det när som helst. Uppgradera till premiumversionen för att få tillgång till servrar i mer än 60 länder och njuta av andra viktiga funktioner som blixtsnabba hastigheter eller utökad appfunktionalitet.","text2":"I så fall behöver vi tillhandahålla din e-post enbart i syfte för att skapa ditt abonnemang."},"tr":{"title":"Premium aboneliğin faydaları","planTitle":"Düzenli","planSubtitle":"Ayrıca mevcut:","btnFree":"Ücretsiz edin","advantagesFree":["5 ülke sınırsız","Hızlı sunucular","Mobil ve bilgisayar uygulamaları","E-posta ile teknik destek"],"btnPremium":"Tüm avantajlardan yararlanın","advantagesPremium":["60\'den fazla ülke, 1260+ sunucu","Max hız","Özel sunucular: Double VPN, Onion-over-VPN, P2P, Streaming","Reklamsız","Düşük pingli oyun sunucuları","Yönlendiriciler ve üçüncü taraf VPN istemcileri için destek","Bir abonelik altında 10 cihaza kadar","Sohbet veya e-posta yoluyla teknik destek"],"text1":"Ücretsiz sürümün yeteneklerini geliştirmek isterseniz - bunu istediğiniz zaman yapabilirsiniz. 60\'den fazla ülkedeki sunuculara erişim elde etmek için premium aboneliğe yükseltin ve yıldırım hızında hızlar veya genişletilmiş uygulama işlevselliği gibi diğer önemli özelliklerin keyfini çıkarın.","text2":"Bu durumda e-postanızı yalnızca aboneliğinizi tüm cihazlarınızda kullanmak amacıyla sağlamanız gerekir."},"ua":{"title":"ПЕРЕВАГИ З PREMIUM-ПАКЕТОМ","planTitle":"Звичайний","planSubtitle":"Додатково:","btnFree":"Завантажити безкоштовно","advantagesFree":["5 країн без обмежень","Швидкі сервери","Додатки для мобільних та комп\'ютера","Технічна підтримка по e-mail"],"btnPremium":"Отримати всі переваги","advantagesPremium":["Понад 60 країн, 1260+ серверів","Максимальна швидкість","Спеціальні сервери: Double VPN, Onion-over-VPN, P2P, Streaming","Відсутність реклами","Ігрові сервери з низьким ping","Підтримка роутерів та сторонніх VPN-клієнтів","До 10 пристроїв за однією підпискою","Технічна підтримка через чат або email"],"text1":"Якщо ви забажаєте розширити можливості безкоштовної версії, то будь-якої миті є можливість використати Преміум-пакет, щоб отримати доступ до більшої кількості серверів у більш ніж 60 країнах світу та насолодитися іншими важливими перевагами у швидкості та функціоналі.","text2":"У цьому випадку вам потрібно вказати e-mail виключно для того, щоб ви могли використовувати VPN на всіх пристроях по одній підписці."},"pt":{"title":"Vantagens da assinatura Premium","planTitle":"Regular","planSubtitle":"Disponível adicionalmente:","btnFree":"Liberta-te","advantagesFree":["5 países ilimitados","Servidores rápidos","Aplicativos para celular e computador","Suporte técnico por e-mail"],"btnPremium":"Obtenha todos os benefícios","advantagesPremium":["Mais de 60 países, mais de 1260 servidores","Velocidade máxima","Servidores dedicados: Double VPN, Onion-over-VPN, P2P, Streaming","Sem anúncios","Servidores de jogos com ping baixo","Suporte para roteadores e clientes VPN de terceiros","Até 10 dispositivos em uma assinatura","Suporte técnico via chat ou e-mail"],"text1":"Se você deseja aprimorar os recursos da versão gratuita - você pode fazer a qualquer momento. Atualize para a assinatura premium para ter acesso a servidores em mais de 60 países e aproveite outros recursos importantes, como velocidades ultrarrápidas ou funcionalidade estendida do aplicativo.","text2":"Nesse caso, você precisa fornecer seu e-mail apenas para usar sua assinatura em todos os seus dispositivos."},"th":{"title":"ข้อดีของการสมัครสมาชิกแบบพรีเมี่ยม","planTitle":"ปกติ","planSubtitle":"นอกจากนี้ยังมี:","btnFree":"รับฟรี","advantagesFree":["5 ประเทศ ไม่จำกัด","เซิร์ฟเวอร์ที่รวดเร็ว","แอพพลิเคชั่นสำหรับมือถือและคอมพิวเตอร์","การสนับสนุนด้านเทคนิคทางอีเมล"],"btnPremium":"รับสิทธิประโยชน์ทั้งหมด","advantagesPremium":["กว่า 60 ประเทศ เซิร์ฟเวอร์มากกว่า 1,260+ เซิร์ฟเวอร์","ความเร็วสูงสุด","เซิร์ฟเวอร์เฉพาะ: Double VPN, Onion-over-VPN, P2P, Streaming","ไม่มีโฆษณา","เซิร์ฟเวอร์เกมที่มีค่า ping ต่ำ","รองรับเราเตอร์และไคลเอนต์ VPN บุคคลที่สาม","มากถึง 10 อุปกรณ์ภายใต้การสมัครสมาชิกครั้งเดียว","การสนับสนุนทางเทคนิคผ่านการแชทหรืออีเมล"],"text1":"หากคุณต้องการเพิ่มความสามารถของเวอร์ชั่นฟรี - คุณสามารถทำได้ทุกเมื่อ อัพเกรดเป็นสมาชิกระดับพรีเมี่ยมเพื่อเข้าถึงเซิร์ฟเวอร์กว่า 60 ประเทศและเพลิดเพลินไปกับฟีเจอร์เจ๋งๆอีกมากมาย เช่น ความเร็วสูง หรือฟังก์ชั่นการทำงานอื่นๆ.","text2":"ในกรณีนี้ คุณจะต้องทำการกรอกอีเมลเพื่อสมัครใช้งานบนอุปกรณ์ทั้งหมดของคุณ."},"it":{"title":"VANTAGGI DELL’ABBONAMENTO PREMIUM","planTitle":"Base","planSubtitle":"Additionally available:","btnFree":"Ottieni Gratis","advantagesFree":["5 paesi senza limiti","Server veloci","App per mobile e computer","Supporto tecnico via e-mail"],"btnPremium":"Ottieni tutti i vantaggi","advantagesPremium":["Oltre 60 paesi, più di 1260 server","Velocità Massima","Server dedicati: Double VPN, Onion-over-VPN, P2P, Streaming","Nessuna pubblicità","Server di gioco con ping basso","Supporto per router e client VPN di terze parti","Fino a 10 dispositivi con un abbonamento","Supporto tecnico via chat o e-mail"],"text1":"Puoi migliorare le funzionalità della versione gratuita in qualsiasi momento. Effettua l\'upgrade all\'abbonamento premium per ottenere l\'accesso ai server in oltre 60 paesi e approfitta di altre importanti funzionalità come velocità fulminee o funzionalità estese dell\'app.","text2":"In questo caso devi fornire la tua e-mail esclusivamente allo scopo di utilizzare l\'abbonamento su tutti i dispositivi."}}'), delete e.options._Ctor
            }
        },
        2314: function(e, t, r) {
            "use strict";
            r(2261)
        },
        2315: function(e, t, r) {
            var n = r(12)((function(i) {
                return i[1]
            }));
            n.push([e.i, ".home-title[data-v-53b702e6]{margin:0 auto 40px;max-width:680px}.home-reviews__section[data-v-53b702e6]:not(:last-child){margin-bottom:60px}@media(max-width:900px){.home-reviews__section[data-v-53b702e6]:not(:last-child){margin-bottom:20px}}[dir=ltr] .review-card__score .star[data-v-53b702e6]{margin-right:4px}[dir=rtl] .review-card__score .star[data-v-53b702e6]{margin-left:4px}[dir=ltr] .review-card__score .star[data-v-53b702e6]:last-child{margin-right:0}[dir=rtl] .review-card__score .star[data-v-53b702e6]:last-child{margin-left:0}.home-reviews__button[data-v-53b702e6]{align-items:center;border-radius:50px;color:var(--inactive-color);display:flex;font-size:20px;font-weight:700;height:60px;justify-content:center;padding:0 15px;transition:all var(--base-ease);width:100%}.home-reviews__button.active[data-v-53b702e6]{background:var(--color-green);color:var(--text-color-light)}@media(max-width:480px){.home-reviews__button[data-v-53b702e6]{font-size:16px;height:50px}}[dir=ltr] .home-reviews__button[data-v-53b702e6]:not(:last-child){margin-right:20px}[dir=rtl] .home-reviews__button[data-v-53b702e6]:not(:last-child){margin-left:20px}.home-reviews__scores[data-v-53b702e6]{display:grid;grid-template-columns:repeat(3,1fr);justify-content:center}@media(max-width:1200px){.home-reviews__scores[data-v-53b702e6]{grid-template-columns:repeat(2,1fr)}}@media(max-width:767px){.home-reviews__scores[data-v-53b702e6]{grid-template-columns:1fr}}.home-reviews__scores .review-card[data-v-53b702e6]{margin-bottom:20px}[dir=ltr] .home-reviews__scores .review-card[data-v-53b702e6]{margin-right:20px}[dir=rtl] .home-reviews__scores .review-card[data-v-53b702e6]{margin-left:20px}.home-reviews__scores .review-card[data-v-53b702e6]:last-child{margin-bottom:0}@media(min-width:1201px){[dir=ltr] .home-reviews__scores .review-card[data-v-53b702e6]:nth-child(3n){margin-right:0}[dir=rtl] .home-reviews__scores .review-card[data-v-53b702e6]:nth-child(3n){margin-left:0}.home-reviews__scores .review-card[data-v-53b702e6]:nth-last-child(-n+3){margin-bottom:0}}@media(min-width:768px)and (max-width:1200px){[dir=ltr] .home-reviews__scores .review-card[data-v-53b702e6]:nth-child(2n){margin-right:0}[dir=rtl] .home-reviews__scores .review-card[data-v-53b702e6]:nth-child(2n){margin-left:0}}@media(max-width:767px){[dir=ltr] .home-reviews__scores .review-card[data-v-53b702e6]{margin-right:0}[dir=rtl] .home-reviews__scores .review-card[data-v-53b702e6]{margin-left:0}}@media(min-width:768px)and (max-width:1200px){.home-reviews__scores[data-v-53b702e6]>:last-child{align-self:center;grid-column:1/3;justify-self:center;place-self:center;width:50%}}.home-reviews__reviews[data-v-53b702e6]{grid-gap:20px;display:grid;gap:20px;grid-template-columns:1fr 1fr 1fr}", ""]), n.locals = {}, e.exports = n
        },
        2316: function(e, t, r) {
            "use strict";
            var n = r(2208),
                o = r.n(n);
            t.default = o.a
        },
        2317: function(e, t) {
            e.exports = function(e) {
                e.options.__i18n = e.options.__i18n || [], e.options.__i18n.push('{"ar":{"title":": Planet VPN معلومات كاملة حول","advantagesInfo":["مجاني بدون حدود لعرض الحزم وكلمة المرور أو الوقت لأي نظام تشغيل أو جهاز.VPN","المرشحات الذكية للمواقع في ملحقات المستعرض","ما يصل إلى 10 أجهزة منفصلة على حساب بريميوم واحد ","تشفير موثوق به لمحركات الأقراص الصلبة على جميع خوادمنا","لا يوجد تسجيل دخول أو تحصيل البيانات الشخصية","لا يشترط التسجيل","IKEv2 وتقنيات RSA بت 2048 VPN 256فتح","أكثر من 1260 خادم· أكثر من 60 دولة·5 قارات ","التطبيقات أو ملفات التهيئة لأي جهاز ","التخلص من تقنية التبديل","عالية السرعة VPN خوادم ","PPTP وL2TP/IPsec ودعمVPN وIKEv2 فتح بروتوكولات","من الاختراق DNS وIP حماية ال","24/7 متوفر "],"text1":") المتميزةVPN) مجانا بنسبة 100٪ لـ 5 مواقع وبأمان وميزات مماثلة لشبكات VPN   تحصل على (Planet VPN) مع وفي إذا كنت تبحث عن حل ممتاز حقا - يمكنك الترقية إلى اشتراكنا المميز في أي."},"de":{"title":"Vollständige Informationen über Planet VPN","advantagesInfo":["Kostenloses VPN ohne Bandbreiten-, Traffic- oder Zeitbegrenzung für jedes Betriebssystem und Gerät","Intelligente Filter für Websites in Browsererweiterungen","Bis zu 10 separate Geräte auf 1 Premium-Konto","Zuverlässige Verschlüsselung der Festplatten auf allen unseren Servern","Keine Logs oder Sammlung persönlicher Daten ","Keine Registrierung erforderlich","OpenVPN 256-bit 2048 RSA und IKEv2 Technologien","1260+ Server - mehr als 60 Länder - 5 Kontinente","Apps oder Konfigurationsdateien für jedes Gerät","Kill-Switch-Technologie","Hochgeschwindigkeits-VPN-Server","OpenVPN- und IKEv2-Protokolle. PPTP und L2TP/IPSec Unterstützung","DNS- und IP-Leck-Schutz","24/7 Verfügbarkeit"],"text1":"Mit Planet VPN erhalten Sie 100% kostenloses VPN für 5 Standorte und mit Sicherheit und Funktionen, die mit denen von Premium-VPNs vergleichbar sind. Und falls Sie eine echte Premium-Lösung suchen, können Sie jederzeit auf unser Premium-Abonnement upgraden."},"en":{"title":"Full information about Planet VPN","advantagesInfo":["Free VPN with no limits on bandwidth, traffic or time for any OS and device","Smart filters for sites in browser extensions","Up to 10 separate devices on 1 premium account","Reliable encryption of Hard Drives on all our servers","No logs or personal data collection","No registration required","OpenVPN 256-bit 2048 RSA and IKEv2 technologies","1260+ servers · more than 60 countries · 5 continents","Apps or config files for any device","Kill Switch technology","High-speed VPN-servers","OpenVPN and IKEv2 protocols. PPTP and L2TP/IPSec support","DNS- and IP-leak protection","24/7 availability"],"text1":"With Planet VPN you get 100% free VPN for 5 locations and with security and features comparable to premium VPNs, and in case you are looking for truly premium solution - you can upgrade to our premium subscription any time."},"es":{"title":"Información completa sobre Planet VPN","advantagesInfo":["VPN gratuita sin límites de ancho de banda, tráfico o tiempo para cualquier sistema operativo y dispositivo","Filtros inteligentes para sitios en extensiones de navegador","Hasta 10 dispositivos separados en 1 cuenta premium","Cifrado fiable de los discos duros en todos nuestros servidores","Sin registros ni recopilación de datos personales ","No es necesario registrarse","Tecnologías OpenVPN 256-bit 2048 RSA e IKEv2","1260+ servidores - más de 60 países - 5 continentes","Aplicaciones o archivos de configuración para cualquier dispositivo  ","Tecnología Kill Switch","Servidores VPN de alta velocidad","Protocolos OpenVPN e IKEv2 Soporte de PPTP y L2TP/IPSec","Protección contra fugas de DNS e IP","Disponibilidad 24/7"],"text1":"Con Planet VPN obtienes una VPN 100% gratuita para 5 ubicaciones y con una seguridad y características comparables a las de las VPNs premium, y en caso de que busques una solución verdaderamente premium - puedes actualizar a nuestra suscripción premium en cualquier momento."},"fr":{"title":"Informations complètes sur Planet VPN","advantagesInfo":["VPN gratuit sans limite de bande passante, de trafic ou de temps pour tout système d\'exploitation et appareil","Filtres intelligents pour les sites dans les extensions de navigateur","Jusqu\'à 10 appareils distincts sur un compte premium","Cryptage fiable des disques durs sur tous nos serveurs","Pas de logs ni de collecte de données personnelles ","Aucune inscription requise","Technologies OpenVPN 256-bit 2048 RSA et IKEv2","Plus de 1260 serveurs - plus de 60 pays - 5 continents","Apps ou fichiers de configuration pour tout appareil","Technologie Kill Switch","Serveurs VPN à haut débit","Protocoles OpenVPN et IKEv2. Support des protocoles PPTP et L2TP/IPSec","Protection contre les fuites de DNS et d\'IP","Disponibilité 24/7"],"text1":"Avec Planet VPN, vous bénéficiez d\'un VPN 100% gratuit pour 5 sites, avec une sécurité et des fonctionnalités comparables à celles des VPN premium. Si vous recherchez une solution vraiment premium, vous pouvez passer à notre abonnement premium à tout moment."},"ru":{"title":"БОЛЬШЕ ИНФОРМАЦИИ О PLANET VPN","advantagesInfo":["Бесплатная версия без ограничения по трафику и по времени, для любой ОС и устройства","Smart фильтры сайтов в расширении для браузеров","До 10 отдельных устройств на 1 premium-аккаунте","Надежное шифрование всех жестких дисков на наших серверах","Не отслеживаем данные, не ведем логи подключений","Возможность работы без авторизации и ввода личных данных","Технологии OpenVPN 256-bit 2048 RSA","1260+ серверов · более 60 стран · 5 континентов","Приложения и конфигурации для всех Ваших устройств","Технология Kill Switch","Высокоскоростные VPN-сервера","Протоколы OpenVPN и IKEv2. Поддержка PPTP и L2TP/IPSec","Защита от DNS- и IP-утечек","Доступность 24/7"],"text1":"С Planet VPN вы получаете полностью бесплатный VPN с возможностями, функционалом и защищенностью на уровне лучших платных сервисов, а при необходимости можете воспользоваться Премиум-аккаунтом и получить еще больше преимуществ."},"sv":{"title":"Fullständig information om Planet VPN","advantagesInfo":["Gratis VPN utan begränsningar för bredband, trafik eller tid för alla operativsystem och enheter","Smarta filter för webbplatser i webbläsartillägg","Upp till 10 separata enheter på ett premiumkonto","Tillförlitlig kryptering av hårddiskar på alla våra servrar","Inga loggar eller personlig datainsamling","Ingen registrering krävs","OpenVPN 256-bitars 2048 RSA- och IKEv2-tekniker","1260+ servrar · mer än 60 länder · 5 kontinenter","Appar eller konfigurationsfiler för vilken enhet som helst","Kill Switch-teknik","Höghastighets VPN-servrar","OpenVPN och IKEv2-protokoll. Stöd för PPTP och L2TP/IPSec","DNS- och IP-läckageskydd","Tillgänglighet 24/7"],"text1":"Med Planet VPN får du en 100 % gratis VPN för 5 platser och med säkerhet och funktioner jämförbara med premium-VPN, och om du letar efter en riktigt premiumlösning – kan du uppgradera till vårt premiumabonnemang när som helst."},"tr":{"title":"Planet VPN hakkında tam bilgisi","advantagesInfo":["Herhangi bir işletim sistemi ve cihaz için bant genişliği, trafik veya zaman sınırı olmayan ücretsiz VPN","Tarayıcı uzantılarındaki siteler için akıllı filtreler","1 premium hesapta 10 ayrı cihaza kadar","Tüm sunucularımızda Sabit Disklerin güvenilir şekilde şifrelenmesi","Oturumun ve kişisel bilginin kayıt yapılmıyor","Kayıt’a gerek yok","OpenVPN 256-bit 2048 RSA and IKEv2 technologies","1260+ sunucları · 60’den fazla ülkeleri · 5 kıtaları","Herhangi bir cihaz için uygulamalar veya konfigürasyon dosyaları","Kill Switch teknoloji","Hızlı VPN-sunucuları","OpenVPN ve IKEv2 protocol’ları . PPTP ve L2TP/IPSec destek","DNS- ve IP-sızıntısının koruması","24/7 mevcut"],"text1":"Planet VPN ile 5 konum için %100 ücretsiz VPN ve premium VPN\'lere benzer güvenlik ve özellikler elde edersiniz, ve eğer gerçek bir premium çözüm arıyorsanız, ,istediğiniz zaman premium aboneliğimize yükseltebilirsiniz."},"ua":{"title":"БІЛЬШЕ ІНФОРМАЦІЇ ПРО PLANET VPN","advantagesInfo":["Безкоштовна версія без обмеження щодо трафіку та часу, для будь-якої ОС та пристрою","Smart фільтри сайтів у розширенні для браузерів","До 10 окремих пристроїв на 1 premium-акаунті","Надійне шифрування всіх жорстких дисків на наших серверах","Не відслідковуємо дані, не ведемо логи підключень","Можливість роботи без авторизації та введення особистих даних","Технології OpenVPN 256-bit 2048 RSA","1260+ серверів · понад 60 країн · 5 континентів","Програми та конфігурації для всіх пристроїв","Технологія Kill Switch","Високошвидкісні VPN-сервери","Протоколи OpenVPN та IKEv2. Підтримка PPTP та L2TP/IPSec","Захист від DNS- та IP-витоків","Доступність 24/7"],"text1":"З Planet VPN ви отримуєте повністю безкоштовний VPN з можливостями, функціоналом та захищеністю на рівні найкращих платних сервісів, а за необхідності можете скористатися Преміум-акаунтом та отримати ще більше переваг."},"pt":{"title":"Informações completas sobre o Planet VPN","advantagesInfo":["VPN grátis sem limites de largura de banda, tráfego ou tempo para qualquer dispositivo e sistema operacional","Filtros inteligentes para sites em extensões de navegador","Até 10 dispositivos separados em 1 conta premium","Criptografia confiável de discos rígidos em todos os nossos servidores","Sem registros ou coleta de dados pessoais ","Não é necessário registro","Tecnologias OpenVPN 2048 RSA e IKEv2 de 256 bits","Mais de 1260 servidores · mais de 60 países · 5 continentes","Aplicativos ou arquivos de configuração para qualquer dispositivo","Tecnologia Kill Switch","Servidores VPN de alta velocidade","Protocolos OpenVPN e IKEv2. Suporte a PPTP e L2TP/IPSec","Proteção contra vazamento de DNS e IP","Disponibilidade 24 horas por dia, 7 dias por semana"],"text1":"Com Planet VPN você obtém VPN 100% gratuito para 5 locais e com segurança e recursos comparáveis ​​a VPNs premium, e caso você esteja procurando uma solução verdadeiramente premium - você pode atualizar para nossa assinatura premium a qualquer momento."},"th":{"title":"รายละเอียดข้อมูลเกี่ยวกับ Planet VPN","advantagesInfo":["VPN ฟรี ไม่มีข้อจำกัด bandwidth การใช้งาน หรือระยะเวลาบนทุกอุปกรณ์และทุกระบบปฏิบัติการ","ตัวกรองอัจฉริยะสำหรับไซต์ในส่วนขยายเบราว์เซอร์","บัญชีพรีเมียม 1 บัญชี สามารถใช้งานบนอุปกรณ์ต่างๆได้ถึง 10 อุปกรณ์","การเข้ารหัสถึง Hard Drive บนเซิร์ฟเวอร์สามารถเชื่อถือได้ ","ไม่มีการคงไว้ในระบบและไม่มีการเก็บข้อมูลส่วนตัวใดๆ","ไม่ต้องลงทะเบียนใดๆทั้งสิ้น ","OpenVPN 256-bit 2048 RSA และเทคโนโลยี IKEv2","มีเซิร์ฟเวอร์กว่า 1260+ เซิร์ฟเวอร์ มากกว่า 60 ประเทศ 5 ภูมิภาค","แอพหรือไฟล์ปรับแต่งสำหรับอุปกรณ์ใดๆ","เทคโนโลยี Kill Switchล","เซิร์ฟเวอร์ VPN ความเร็วสูง","โปรโตคอล OpenVPN และ IKEv2 รวมทั้งสนับสนุน PPTP และ L2TP/IPSec","ระบบป้องกันการรั่วไหลของ DNS และ IP","ใช้งานได้ 24 ชั่วโมง ทุกวัน"],"text1":"ใช้ Planet VPN คุณจะได้รับ VPN ฟรี 100% ถึง 5 ตำแหน่ง พร้อมระดับความปลอดภัยและฟีเจอร์แบบเดียวกับ VPN พรีเมียม หากคุณกำลังมองหาโซลูชั่นระดับพรีเมี่ยม สามารถอัพเกรดเป็นสมาชิกระดับพรีเมี่ยมได้ทุกเมื่อ."},"it":{"title":"INFORMAZIONI COMPLETE SU PLANET VPN","advantagesInfo":["VPN gratis senza limiti di larghezza di banda, traffico o tempo per qualsiasi sistema operativo e dispositivo","Estensioni browser con filtri intelligenti per i siti","Fino a 10 dispositivi separati su 1 account premium","Crittografia affidabile dei dischi rigidi su tutti i nostri server","Nessuna raccolta di log o di dati personali","Nessuna registrazione richiesta","Tecnologie OpenVPN 256-bit 2048 RSA e IKEv2","Più di 1260 server · oltre 60 paesi · 5 continenti","App o file di configurazione per tutti i dispositivi","Tecnologia Kill Switch","Server VPN ad alta velocità","Protocolli OpenVPN e IKEv2. Supporto per PPTP e L2TP/IPSec","Protezione DNS- e IP-leak","Disponibili 24/7"],"text1":"Con Planet VPN ottieni una VPN gratis al 100% per 5 sedi e con sicurezza e funzionalità paragonabili alle VPN premium e, nel caso tu stia cercando una soluzione davvero premium, puoi effettuare l\'upgrade al nostro abbonamento premium in qualsiasi momento."}}'), delete e.options._Ctor
            }
        },
        2318: function(e, t) {
            e.exports = function(e) {
                e.options.__i18n = e.options.__i18n || [], e.options.__i18n.push('{"ar":{"text1":"تعد الشبكة الافتراضية الخاصة، أو VPN، أداة قوية لأولئك الذين يرغبون في حماية خصوصيتهم وأمنهم عبر الإنترنت. عند استخدام VPN، يتم تشفير التحرك على الإنترنت وتوجيهه عبر شبكة خاصة، مما يزيد من صعوبة اعتراض نشاطك عبر الإنترنت أو مراقبته.","text2":"تتمثل إحدى أهم فوائد استخدام VPN مجاني (free VPN) في الوصول إلى المحتوى الذي قد يتم تقييده في موقعك. على سبيل المثال، تتوفر العديد من خدمات ومواقع البث المباشر في بلدان معينة فقط. سيتيح لك VPN تجاوز هذه القيود والوصول إلى المحتوى من أي مكان في العالم.","text3":"فائدة أخرى لاستخدام أفضل VPN مجاني (free VPN) لدينا تتمثل في مساعدتك على البقاء آمنًا عند استخدام شبكات Wi-Fi العامة. تشتهر شبكات Wi-Fi العامة بكونها غير آمنة، ويمكن للقراصنة اعتراض تحركك بسهولة وسرقة معلوماتك الشخصية. ولكن عند استخدام VPN، يتم تشفير تحركك، مما يجعل اعتراض أنشطتك صعبا للغاية. مما يعني أنه يمكنك استخدام شبكات Wi-Fi العامة بأمان، علما أن معلوماتك الحساسة محمية.","text4":"بالإضافة إلى مزايا الأمان والخصوصية هذه، فإن استخدام VPN مجاني (free VPN) يمكن أن يوفر لك المال أيضًا. يستخدم العديد من بائعي التجزئة عبر الانترنت ومواقع الحجز التسعير الفعال، مما يعني أن السعر المعروض عليك قد يعتمد على موقعك وعوامل أخرى. يمكنك العثور على صفقات أفضل على المنتجات والخدمات باستخدام VPN مجاني (free VPN) لإخفاء موقعك.","text5":"أخيرًا، يمكن أن يساعدك استخدام Planet VPN في إخفاء هويتك عبر الإنترنت. تقوم العديد من مواقع الويب والخدمات بجمع بيانات حول عادات التصفح الخاصة بك واستخدامها لوضع إعلانات ورسائل تسويقية أخرى."},"de":{"text1":"Ein virtuelles privates Netzwerk oder VPN ist ein leistungsstarkes Tool für diejenigen, die ihre Privatsphäre und Sicherheit online schützen möchten. Wenn Sie ein VPN verwenden, wird Ihr Internetverkehr verschlüsselt und durch ein privates Netzwerk geleitet, wodurch es viel schwieriger wird, Ihre Online-Aktivitäten abzufangen oder zu überwachen.","text2":"Einer der wichtigsten Vorteile der Verwendung eines VPN kostenlos ist der Zugriff auf Inhalte, die andernfalls an Ihrem Standort eingeschränkt sein könnten. Beispielsweise sind viele Streaming-Dienste und Websites nur in bestimmten Ländern verfügbar. Mit einem VPN können Sie diese Einschränkungen umgehen und von überall auf der Welt auf Inhalte zugreifen.","text3":"Ein weiterer Vorteil der Verwendung unseres besten free VPN ist, dass es Ihnen hilft, bei der Verwendung öffentlicher Wi-Fi-Netzwerke sicher zu bleiben. Öffentliche Wi-Fi-Netzwerke sind notorisch unsicher, und Hacker können Ihren Datenverkehr leicht abfangen und Ihre persönlichen Daten stehlen. Aber wenn Sie ein VPN verwenden, wird Ihr Datenverkehr verschlüsselt, was es viel schwieriger macht, Ihre Aktivitäten abzufangen. Das bedeutet, dass Sie öffentliche Wi-Fi-Netzwerke sicher nutzen können, da Sie wissen, dass Ihre vertraulichen Informationen geschützt sind.","text4":"Zusätzlich zu diesen Sicherheits- und Datenschutzvorteilen können Sie durch die Verwendung eines VPN kostenlos auch Geld sparen. Viele Online-Händler und Buchungsseiten verwenden dynamische Preise, was bedeutet, dass der angezeigte Preis von Ihrem Standort und anderen Faktoren abhängen kann. Sie können bessere Angebote für Produkte und Dienstleistungen finden, indem Sie unser VPN kostenlos verwenden, um Ihren Standort zu maskieren.","text5":"Schließlich kann Ihnen die Verwendung von Planet VPN dabei helfen, online anonym zu bleiben. Viele Websites und Dienste sammeln Daten über Ihre Surfgewohnheiten und verwenden sie, um Anzeigen und andere Marketingbotschaften zu platzieren."},"en":{"text1":"A virtual private network, or VPN, is a powerful tool for those who want to protect their privacy and security online. When you use a VPN, your Internet traffic is encrypted and routed through a private network, making it much more difficult to intercept or monitor your online activity.","text2":"One of the most significant benefits of using a free VPN is accessing content that might otherwise be restricted in your location. For example, many streaming services and websites are only available in certain countries. A VPN will allow you to bypass these restrictions and access content from anywhere in the world.","text3":"Another benefit of using our best free VPN is that it will help you stay safe when using public Wi-Fi networks. Public Wi-Fi networks are notoriously insecure, and hackers can easily intercept your traffic and steal your personal information. But when you use a VPN, your traffic is encrypted, making it much more difficult to intercept your activities. This means you can use public Wi-Fi networks confidently, knowing your sensitive information is protected.","text4":"In addition to these security and privacy benefits, using a free VPN can also save you money. Many online retailers and booking sites use dynamic pricing, which means that the price you see may depend on your location and other factors. You can find better deals on products and services by using our free VPN to mask your location.","text5":"Finally, using a Planet VPN can help you maintain anonymity online. Many websites and services collect data about your browsing habits and use it to place ads and other marketing messages."},"es":{"text1":"Existen varias razones para instalar una Red Privada Virtual (VPN), pues es una herramienta ideal para quienes desean proteger la privacidad de sus datos en línea y mantener la protección de su identidad mientras navegan por Internet. Una VPN se encarga de encriptar su conexión a Internet y ocultar su dirección IP, lo que hace que sea más difícil para los sitios web, anunciantes y proveedores de servicios de Internet (ISP) rastrear su actividad en línea y recopilar información sobre usted.","text2":"Una de las principales razones por las cuales las personas adquieren una VPN gratis, y uno de sus beneficios más grandes, es el acceso a contenido georrestringido. Al conectarse a un servidor VPN ubicado en otro país, puede acceder a contenido que está bloqueado o restringido en su ubicación actual. Por ejemplo, si se encuentra en un país donde Netflix no está disponible, puede usar un VPN para conectarse a un servidor en un país donde Netflix sí está disponible y acceder a su contenido.","text3":"Cuando se conecta a una red Wi-Fi pública, como las que se encuentran en aeropuertos, cafeterías o hoteles, su dispositivo está expuesto a varios riesgos de seguridad, como el robo de datos personales y la interceptación de la información que se envía y recibe. Por ello, otro de los beneficios más importantes de nuestro VPN gratis recae en crear una conexión encriptada entre su dispositivo y un servidor remoto, lo que significa que cualquier información que se envíe o reciba estará protegida y segura. Esto significa que puede usar redes Wi-Fi públicas con confianza, sabiendo que su información confidencial está protegida.","text4":"Además de la seguridad y privacidad, usar una free VPN también puede ayudarle a ahorrar algo de dinero. Muchos minoristas en línea y sitios de reserva utilizan precios dinámicos, lo que significa que el precio depende de su ubicación, entre otros factores. Usando nuestra VPN gratis puede encontrar mejores ofertas en productos y servicios.","text5":"Nuestra misión principal es ayudarle a mantener el anonimato en línea mientras usted navega sin preocupaciones en Internet. Usar Planet VPN le garantiza que sitios web no podrán acceder a su información, ubicación o registros, lo que le ayudará a mantenerse protegido de cualquier intento de robo de información, anuncios molestos o spam de marketing."},"fr":{"text1":"Un réseau privé virtuel, ou VPN, est un outil puissant pour ceux qui souhaitent protéger leur vie privée et leur sécurité en ligne. Lorsque vous utilisez un VPN, votre trafic Internet est crypté et acheminé via un réseau privé, ce qui rend beaucoup plus difficile l\'interception ou la surveillance de votre activité en ligne.","text2":"L\'un des avantages les plus importants de l\'utilisation d\'un VPN gratuit est l\'accès à du contenu qui pourrait autrement être restreint dans votre région. Par exemple, de nombreux services de streaming et sites Web ne sont disponibles que dans certains pays. Un VPN vous permettra de contourner ces restrictions et d\'accéder au contenu de n\'importe où dans le monde.","text3":"Un autre avantage de l\'utilisation de notre meilleur VPN gratuit est qu\'il vous aidera à rester en sécurité lorsque vous utilisez des réseaux Wi-Fi publics. Les réseaux Wi-Fi publics sont notoirement peu sûrs et les pirates peuvent facilement intercepter votre trafic et voler vos informations personnelles. Mais lorsque vous utilisez un VPN, votre trafic est crypté, ce qui rend beaucoup plus difficile l\'interception de vos activités. Cela signifie que vous pouvez utiliser les réseaux Wi-Fi publics en toute confiance, sachant que vos informations sensibles sont protégées.","text4":"En plus de ces avantages en matière de sécurité et de confidentialité, l\'utilisation d\'un VPN gratuit peut également vous faire économiser de l\'argent. De nombreux détaillants en ligne et sites de réservation utilisent une tarification dynamique, ce qui signifie que le prix que vous voyez peut dépendre de votre emplacement et d\'autres facteurs. Vous pouvez trouver de meilleures offres sur les produits et services en utilisant notre VPN gratuit pour masquer votre emplacement.","text5":"Enfin, l\'utilisation d\'un Planet VPN peut vous aider à conserver votre anonymat en ligne. De nombreux sites Web et services collectent des données sur vos habitudes de navigation et les utilisent pour placer des publicités et d\'autres messages marketing."},"ru":{"text1":"Виртуальная частная сеть или VPN — это мощный инструмент для тех, кто хочет защитить свою конфиденциальность и безопасность в Интернете. Когда вы используете VPN, ваш интернет-трафик шифруется и направляется через частную сеть, что значительно затрудняет перехват или мониторинг вашей онлайн-активности.","text2":"Одним из наиболее значительных преимуществ использования бесплатного VPN является доступ к контенту, доступ к которому в противном случае был бы ограничен в вашем регионе. Например, многие потоковые сервисы и веб-сайты доступны только в определенных странах. Planet VPN позволит вам обойти эти ограничения и получить доступ к контенту из любой точки мира.","text3":"Еще одно преимущество использования нашего лучшего бесплатного VPN заключается в том, что он поможет вам оставаться в безопасности при использовании общедоступных сетей Wi-Fi. Публичные сети Wi-Fi, как известно, небезопасны, и хакеры могут легко перехватить ваш трафик и украсть вашу личную информацию. Но когда вы используете VPN, ваш трафик шифруется, что значительно затрудняет перехват ваших действий. Это означает, что вы можете уверенно использовать общедоступные сети Wi-Fi, зная, что ваша конфиденциальная информация защищена.","text4":"В дополнение к этим преимуществам безопасности и конфиденциальности использование бесплатного VPN также может сэкономить ваши деньги. Многие интернет-магазины и сайты бронирования используют динамическое ценообразование, а это означает, что цена, которую вы видите, может зависеть от вашего местоположения и других факторов. Вы можете найти более выгодные предложения на продукты и услуги, используя наш бесплатный ВПН для маскировки вашего местоположения.","text5":"Наконец, использование Planet VPN может помочь вам сохранить анонимность в сети. Многие веб-сайты и службы собирают данные о ваших привычках просмотра и используют их для размещения рекламы и других маркетинговых сообщений."},"sv":{"text1":"Ett virtuellt privat nätverk, eller VPN, är ett kraftfullt verktyg för dem som vill skydda sin integritet och säkerhet online. När du använder ett VPN krypteras din internettrafik och dirigeras via ett privat nätverk, vilket gör det mycket svårare att fånga upp eller övervaka din onlineaktivitet.","text2":"En av de viktigaste fördelarna med att använda ett free VPN är att få tillgång till innehåll som annars ätbegränsat på din plats. Till exempel är många streamingtjänster och webbplatser endast tillgängliga i vissa länder. En VPN gör att du kan kringgå dessa begränsningar och komma åt innehåll från var som helst i världen.","text3":"En annan fördel med att använda vårt bästa free VPN är att det hjälper dig att vara säker när du använder offentliga Wi-Fi-nätverk. Offentliga Wi-Fi-nätverk är notoriskt osäkra, och hackare kan enkelt fånga upp din trafik och stjäla din personliga information. Men när du använder ett VPN är din trafik krypterad, vilket gör det mycket svårare att fånga upp dina aktiviteter. Det betyder att du kan använda offentliga Wi-Fi-nätverk med tillförsikt och veta att din känsliga information är skyddad.","text4":"Utöver dessa säkerhets- och integritetsfördelar kan ett gratis VPN också hjälps dig att spara pengar. Många onlineåterförsäljare och bokningssajter använder dynamisk prissättning, vilket innebär att priset du ser kan bero på din plats och andra faktorer. Du kan hitta bättre erbjudanden på produkter och tjänster genom att använda vår free VPN för att dölja din plats.","text5":"Slutligen kan användning av en Planet VPN hjälpa dig att upprätthålla anonymitet online. Många webbplatser och tjänster samlar in data om dina surfvanor och använder den för att placera annonser och andra marknadsföringsbudskap."},"tr":{"text1":"Sanal özel ağ veya VPN, çevrimiçi gizliliklerini ve güvenliklerini korumak isteyenler için güçlü bir araçtır. Bir VPN kullandığınızda, internet trafiğiniz şifrelenir ve özel bir ağ üzerinden yönlendirilir; bu da çevrimiçi etkinliğinizin yakalanmasını veya izlenmesini çok daha zor hale getirir.","text2":"Free VPN kullanmanın en önemli faydalarından biri, normalde bulunduğunuz yerde kısıtlanmış olabilecek içeriğe erişmektir. Örneğin, birçok akış hizmeti ve web sitesi yalnızca belirli ülkelerde mevcuttur. Bir VPN, bu kısıtlamaları atlamanıza ve dünyanın herhangi bir yerinden içeriğe erişmenize olanak tanır.","text3":"Free VPN kullanmanın bir başka yararı da halka açık Wi-Fi ağlarını kullanırken güvende kalmanıza yardımcı olmasıdır. Halka açık Wi-Fi ağları herkesin bildiği gibi güvensizdir ve bilgisayar korsanları trafiğinizi kolayca engelleyebilir ya da kişisel bilgilerinizi çalabilir. Ancak bir VPN kullandığınızda, trafiğiniz şifrelenir ve bu da faaliyetlerinize müdahale etmeyi çok daha zorlaştırır. Bu, hassas bilgilerinizin korunduğunu bilerek halka açık Wi-Fi ağlarını güvenle kullanabileceğiniz anlamına gelir.","text4":"Bu güvenlik ve gizlilik avantajlarına ek olarak, ücretsiz bir VPN kullanmak paradan da tasarruf etmenizi sağlayabilir. Birçok çevrimiçi satış ve rezervasyon sitesi dinamik fiyatlandırma kullanır; bu, gördüğünüz fiyatın bulunduğunuz yere ve diğer faktörlere bağlı olabileceği anlamına gelir. Konumunuzu gizlemek için free VPN kullanarak ürün ve hizmetlerde daha iyi fırsatlar bulabilirsiniz.","text5":"Son olarak, Planet VPN kullanmak çevrimiçi anonimliğinizi korumanıza yardımcı olabilir. Birçok web sitesi ve hizmet, tarama alışkanlıklarınız hakkında veri toplar ve bunları size reklamlar ve diğer pazarlama mesajları göstermek için kullanır."},"ua":{"text1":"Віртуальна приватна мережа або VPN – це потужний інструмент для тих, хто хоче захистити свою конфіденційність та безпеку в Інтернеті. Коли ви використовуєте VPN, ваш інтернет-трафік шифрується і спрямовується через приватну мережу, що значно ускладнює перехоплення або моніторинг вашої онлайн-активності.","text2":"Однією з переваг використання безкоштовного VPN є доступ до контенту, який інакше був би обмежений у вашому регіоні. Наприклад, багато потокових сервісів та веб-сайтів доступні лише в певних країнах. Planet VPN дозволить вам обійти ці обмеження та отримати доступ до контенту з будь-якої точки світу.","text3":"Ще одна перевага використання нашого найкращого безкоштовного VPN полягає в тому, що він допоможе вам залишатися в безпеці під час використання загальнодоступних мереж Wi-Fi. Публічні мережі Wi-Fi, як відомо, є небезпечними, і хакери можуть легко перехопити ваш трафік і викрасти вашу особисту інформацію. Але коли ви використовуєте VPN, ваш трафік шифрується, що значно ускладнює перехоплення ваших дій. Це означає, що ви можете впевнено використовувати загальнодоступні мережі Wi-Fi, знаючи, що ваша конфіденційна інформація захищена.","text4":"На додаток, використання безкоштовного VPN також може заощадити ваші гроші. Багато інтернет-магазинів та сайтів бронювання використовують динамічне ціноутворення, а це означає, що ціна, яку ви бачите, може залежати від вашого розташування та інших факторів. Ви можете знайти більш вигідні пропозиції на продукти та послуги, використовуючи наш безкоштовний ВПН для маскування вашого розташування.","text5":"Нарешті, використання Planet VPN може допомогти вам зберегти анонімність у мережі. Багато веб-сайтів та служб збирають дані про ваші звички перегляду та використовують їх для розміщення реклами та інших маркетингових повідомлень."},"pt":{"text1":"Uma rede privada virtual, ou VPN, é uma ferramenta poderosa para quem deseja proteger sua privacidade e segurança online. Quando você usa uma VPN, seu tráfego de Internet é criptografado e roteado por uma rede privada, tornando muito mais difícil interceptar ou monitorar sua atividade online.","text2":"Um dos benefícios mais significativos de usar uma free VPN é acessar conteúdo que, de outra forma, poderia ser restrito em sua localização. Por exemplo, muitos serviços e sites de streaming estão disponíveis apenas em determinados países. Uma VPN permitirá que você ignore essas restrições e acesse o conteúdo de qualquer lugar do mundo.","text3":"Outro benefício de usar nossa melhor VPN grátis é que ela o ajudará a ficar seguro ao usar redes Wi-Fi públicas. As redes Wi-Fi públicas são notoriamente inseguras e os hackers podem facilmente interceptar seu tráfego e roubar suas informações pessoais. Mas quando você usa uma VPN, seu tráfego é criptografado, tornando muito mais difícil interceptar suas atividades. Isso significa que você pode usar redes Wi-Fi públicas com confiança, sabendo que suas informações confidenciais estão protegidas.","text4":"Além desses benefícios de segurança e privacidade, usar uma free VPN também pode economizar seu dinheiro. Muitos varejistas online e sites de reservas usam preços dinâmicos, o que significa que o preço que você vê pode depender de sua localização e de outros fatores. Você pode encontrar melhores ofertas em produtos e serviços usando nossa free VPN para mascarar sua localização.","text5":"Finalmente, usar um Planet VPN pode te ajudar a manter o anonimato online. Muitos sites e serviços coletam dados sobre seus hábitos de navegação e os usam para colocar anúncios e outras mensagens de marketing."},"th":{"text1":"เครือข่ายส่วนตัวเสมือนหรือ VPN เป็นเครื่องมือที่มีประสิทธิภาพสำหรับผู้ที่ต้องการปกป้องความเป็นส่วนตัวและความปลอดภัยทางออนไลน์ เมื่อคุณใช้ VPN การรับส่งข้อมูลอินเทอร์เน็ตของคุณจะถูกเข้ารหัสและกำหนดเส้นทางผ่านเครือข่ายส่วนตัว ทำให้ยากต่อการสกัดกั้นหรือตรวจสอบกิจกรรมออนไลน์ของคุณ","text2":"ประโยชน์ที่สำคัญที่สุดอย่างหนึ่งของการใช้ free VPN คือการเข้าถึงเนื้อหาที่อาจถูกจำกัดในพื้นที่ของคุณ ตัวอย่างเช่น บริการสตรีมมิ่งและเว็บไซต์จำนวนมากให้บริการในบางประเทศเท่านั้น VPN จะช่วยให้คุณข้ามข้อจำกัดเหล่านี้และเข้าถึงเนื้อหาได้จากทุกที่ในโลก","text3":"ข้อดีอีกประการของการใช้ free VPN ที่ดีที่สุดของเราคือมันจะช่วยให้คุณปลอดภัยเมื่อใช้เครือข่าย Wi-Fi สาธารณะ เครือข่าย Wi-Fi สาธารณะนั้นมีชื่อเสียงว่าไม่ปลอดภัย และแฮ็กเกอร์สามารถสกัดกั้นการรับส่งข้อมูลของคุณและขโมยข้อมูลส่วนบุคคลของคุณได้อย่างง่ายดาย แต่เมื่อคุณใช้ VPN การรับส่งข้อมูลของคุณจะถูกเข้ารหัส ทำให้ยากต่อการสกัดกั้นกิจกรรมของคุณ ซึ่งหมายความว่าคุณสามารถใช้เครือข่าย Wi-Fi สาธารณะได้อย่างมั่นใจ โดยรู้ว่าข้อมูลที่ละเอียดอ่อนของคุณได้รับการปกป้อง","text4":"นอกจากประโยชน์ด้านความปลอดภัยและความเป็นส่วนตัวเหล่านี้แล้ว การใช้ free VPN ยังช่วยประหยัดเงินได้อีกด้วย ผู้ค้าปลีกออนไลน์และเว็บไซต์การจองหลายแห่งใช้การกำหนดราคาแบบไดนามิก ซึ่งหมายความว่าราคาที่คุณเห็นอาจขึ้นอยู่กับสถานที่ตั้งของคุณและปัจจัยอื่นๆ คุณสามารถค้นหาข้อเสนอที่ดีกว่าสำหรับผลิตภัณฑ์และบริการได้โดยใช้ free VPN ของเราเพื่อปกปิดตำแหน่งของคุณ","text5":"สุดท้ายนี้ การใช้ Planet VPN สามารถช่วยให้คุณรักษาความเป็นนิรนามทางออนไลน์ได้ เว็บไซต์และบริการจำนวนมากรวบรวมข้อมูลเกี่ยวกับพฤติกรรมการท่องเว็บของคุณและใช้เพื่อวางโฆษณาและข้อความทางการตลาดอื่นๆ"},"it":{"text1":"Una rete privata virtuale, o VPN, è uno strumento potente per chi vuole proteggere la propria privacy e sicurezza online. Utilizzando una VPN, il traffico Internet viene crittografato e instradato attraverso una rete privata, rendendo molto più difficile l\'intercettazione o il monitoraggio della attività online.","text2":"Uno dei vantaggi più significativi dell\'utilizzo di una VPN gratis è l\'accesso a contenuti che altrimenti potrebbero essere limitati nella tua area geografica. Ad esempio, molti servizi di streaming e siti web sono disponibili solo in alcuni Paesi. Una VPN permetterà di aggirare queste restrizioni e di accedere ai contenuti da qualsiasi parte del mondo.","text3":"Un altro vantaggio dell\'utilizzo della nostra migliore VPN gratis è che ti aiuterà a rimanere al sicuro quando utilizzi le reti Wi-Fi pubbliche. Le reti Wi-Fi pubbliche sono notoriamente poco sicure e gli hacker possono facilmente intercettare il tue traffico e rubare informazioni personali. Ma se utilizzi una VPN, il traffico viene crittografato, rendendo molto più difficile l\'intercettazione delle tue attività. Ciò significa che puoi utilizzare le reti Wi-Fi pubbliche senza preoccuparti, sapendo che le tue informazioni sensibili sono protette.","text4":"Oltre a questi vantaggi in termini di sicurezza e privacy, l\'utilizzo di una VPN gratis può anche far risparmiare denaro. Molti rivenditori online e siti di prenotazione utilizzano prezzi dinamici, il che significa che il prezzo visualizzato può dipendere dalla tua posizione e da altri fattori. Per nascondere la tua posizioni trovi offerte migliori su prodotti e servizi utilizzando la nostra VPN gratuita.","text5":"Infine, utilizzare una VPN Planet può aiutare a mantenere l\'anonimato online. Molti siti e servizi raccolgono dati sulle vostre abitudini di navigazione e li utilizzano per inserire annunci e altri messaggi di marketing."}}'), delete e.options._Ctor
            }
        },
        2319: function(e, t) {
            e.exports = function(e) {
                e.options.__i18n = e.options.__i18n || [], e.options.__i18n.push('{"ar":{"seo":{"description":"يخفي Planet VPN حركة الإنترنت المشفرة ، عنوان IP والموقع. حماية فورية لما يصل إلى 7 أجهزة على جميع المنصات الشائعة. جربها بدون مخاطر -VPN بدون مخاطر ، مجاني تمامًا.","title":"free VPN & Proxy مجاني | بدون إعلانات أو تحديد للسرعة وحركة المرور - بلانيت في بي إن \\"PLANET VPN\\""}},"de":{"seo":{"description":"Planet VPN verschlüsselt den Internetdatenverkehr, verbirgt die IP-Adresse und den Standort. Kein Datenverkehr oder Zeitlimit, für jedes Betriebssystem. Ein risikofreies, völlig kostenloses VPN","title":"VPN Kostenlos – das beste Free VPN ohne Grenzen | Planet VPN"}},"en":{"seo":{"description":"Planet VPN encrypts Internet traffic, hides the IP address and location. No bandwidth or time limit for any OS. Use free, without risk","title":"Free VPN – best free online VPN, fast and secure | Planet VPN"}},"es":{"seo":{"description":"Planet VPN encripta el tráfico de Internet, oculta la dirección IP y la ubicación. Sin límite de tráfico ni de tiempo, para cualquier sistema operativo. Una VPN sin riesgos y completamente gratuita","title":"VPN Gratis y Proxy: Free VPN sin restricciones ni límites - Planet VPN"}},"fr":{"seo":{"description":"Planet VPN crypte votre trafic Internet et masque votre adresse IP et votre emplacement. Il n\'y a pas de limite de bande passante ou de temps pour aucun système d\'exploitation. VPN gratuit et sans risque","title":"VPN gratuit - le meilleur free VPN sans limites | Planet VPN"}},"ru":{"seo":{"description":"Planet VPN шифрует интернет-трафик, скрывает IP адрес и местоположение. Без ограничения по трафику и по времени, для любой ОС. VPN без риска, совершенно бесплатно.","title":"Бесплатный VPN - ВПН без лимитов и рекламы | Planet VPN"}},"sv":{"seo":{"description":"Det finns ingen VPN där ute som är lika tillförlitliga och säkra som Planet VPN. Ingen trafik- eller tidsbegränsning, för alla operativsystem. En riskfri, helt gratis VPN","title":"Gratis VPN och proxy - gratis vpn utan annonser | Planet VPN"}},"tr":{"seo":{"description":"Planet VPN İnternet trafiğini şifreler, IP adresini ve konumunu gizler. Herhangi bir işletim sistemi için bant genişliği veya zaman sınırı yok. Risksiz VPN, tamamen ücretsiz.","title":"Free VPN ve Proxy - reklamsız ve sınırsız en iyi ücretsiz vpn | Planet VPN"}},"ua":{"seo":{"description":"Безкоштовна Віртуальна приватна мережа Planet VPN - Без обмежень по трафiку або часу, для будь-якої ОС","title":"VPN безкоштовно - без реклами, обмежень швидкості та трафіку | Planet VPN"}},"pt":{"seo":{"description":"Planet VPN criptografa o tráfego de Internet, oculta seu endereço de IP e a localização. Sem tráfego ou limite de tempo, para qualquer SO. Uma VPN sem riscos, completamente livre de riscos","title":"Free VPN e proxy - VPN gratis sem anúncios ou limites | Planet VPN"}},"th":{"seo":{"description":"Planet VPN เข้ารหัสการรับส่งข้อมูลทางอินเทอร์เน็ตของคุณและซ่อนที่อยู่ IP และตำแหน่งของคุณ ไม่มีการจำกัดแบนด์วิดท์หรือเวลาสำหรับระบบปฏิบัติการใดๆ VPN ฟรีและปราศจากความเสี่ยง","title":"Free VPN & พร็อกซี่ - ไม่มีโฆษณา จำกัด ความเร็วและการรับส่งข้อมูล | Planet VPN"}},"it":{"seo":{"description":"Planet VPN crittografa il traffico Internet, nasconde l\'indirizzo IP e la posizione. Nessuna larghezza di banda o limite di tempo per qualsiasi sistema operativo. Usa gratis, senza rischi.","title":"VPN Gratis: la migliore VPN online Gratis, veloce e sicura - Planet VPN"}}}'), delete e.options._Ctor
            }
        },
        2626: function(e, t, r) {
            "use strict";
            var n = r(45),
                o = r(2198),
                l = r(2197),
                d = r(2241),
                c = r(2242),
                m = r(2243),
                v = r(2244),
                f = r(2245),
                h = r(2246),
                _ = r(2247),
                P = r(2248),
                x = r(2249),
                w = r(2250),
                N = r(2251),
                k = r(2252),
                V = r(2253),
                y = r(2254),
                z = r(2255),
                S = {
                    components: {
                        PageSection: n.a,
                        HomeSection: l.a,
                        HomeTitle: o.a,
                        Trustpilot: d.a,
                        Vpnscanner: c.a,
                        Softpedia: m.a,
                        GooglePlay: v.a,
                        Appstore: f.a,
                        Windows: h.a,
                        Chrome: _.a,
                        Firefox: P.a,
                        Edge: x.a,
                        GoogleReviews: w.a,
                        Uptodown: N.a,
                        Opera: k.a,
                        Softonic: V.a,
                        Softlay: y.a,
                        FileHippo: z.a
                    },
                    data: () => ({})
                },
                O = (r(2314), r(2)),
                C = r(2316),
                component = Object(O.a)(S, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("page-section", [t("home-section", {
                        scopedSlots: e._u([{
                            key: "title",
                            fn: function() {
                                return [t("home-title", [e._v("\n       " + e._s(e.$t("title_part")) + " "), t("span", {
                                    staticClass: "highlight"
                                }, [e._v(e._s(e.$t("title_highlight")))])])]
                            },
                            proxy: !0
                        }])
                    }, [e._v(" "), t("div", {
                        staticClass: "home-reviews__section home-reviews__scores"
                    }, [t("trustpilot"), e._v(" "), t("vpnscanner"), e._v(" "), t("softpedia"), e._v(" "), t("google-play"), e._v(" "), t("appstore"), e._v(" "), t("windows"), e._v(" "), t("chrome"), e._v(" "), t("firefox"), e._v(" "), t("edge"), e._v(" "), t("google-reviews"), e._v(" "), t("uptodown"), e._v(" "), t("opera"), e._v(" "), t("softonic"), e._v(" "), t("softlay"), e._v(" "), t("file-hippo")], 1)])], 1)
                }), [], !1, null, "53b702e6", null);
            "function" == typeof C.default && Object(C.default)(component);
            t.a = component.exports
        },
        2634: function(e, t, r) {
            "use strict";
            var n = r(0),
                o = r(18),
                l = r(45),
                d = r(246);

            function c(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }
            var m = {
                    props: {
                        lightBackground: {
                            type: Boolean,
                            required: !1,
                            default: !1
                        }
                    },
                    components: {
                        PageSection: l.a,
                        BaseHoverablePlatform: d.a
                    },
                    computed: function(e) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? c(Object(source), !0).forEach((function(t) {
                                Object(n.a)(e, t, source[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                            }))
                        }
                        return e
                    }({}, Object(o.c)(["getCurrentLanguage", "allSupportedPlatforms", "platformDownloadRoute"]))
                },
                v = m,
                f = (r(2285), r(2)),
                component = Object(f.a)(v, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("page-section", {
                        attrs: {
                            "light-background": e.lightBackground
                        }
                    }, [t("div", {
                        staticClass: "home-downloads__wrapper"
                    }, [t("div", {
                        staticClass: "home-downloads__products"
                    }, e._l(e.allSupportedPlatforms, (function(r) {
                        return t("nuxt-link", {
                            key: r,
                            staticClass: "home-downloads__product",
                            attrs: {
                                to: {
                                    name: e.platformDownloadRoute(r),
                                    params: {
                                        lang: void 0 === e.getCurrentLanguage || "en" === e.getCurrentLanguage ? null : e.getCurrentLanguage
                                    }
                                }
                            }
                        }, [t("base-hoverable-platform", {
                            attrs: {
                                big: "",
                                platform: r
                            }
                        })], 1)
                    })), 1)])])
                }), [], !1, null, "0b336f89", null);
            t.a = component.exports
        },
        2635: function(e, t, r) {
            var content = r(2824);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("046afc66", content, !0, {
                sourceMap: !1
            })
        },
        2636: function(e, t, r) {
            var content = r(2827);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("70872cbb", content, !0, {
                sourceMap: !1
            })
        },
        2637: function(e, t, r) {
            var content = r(2829);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("2b6f207a", content, !0, {
                sourceMap: !1
            })
        },
        2638: function(e, t, r) {
            var content = r(2832);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("7dc9243a", content, !0, {
                sourceMap: !1
            })
        },
        2639: function(e, t, r) {
            var content = r(2835);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("159e7d7e", content, !0, {
                sourceMap: !1
            })
        },
        2640: function(e, t, r) {
            var content = r(2839);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("22b03ce7", content, !0, {
                sourceMap: !1
            })
        },
        2641: function(e, t, r) {
            var content = r(2841);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("7f06b473", content, !0, {
                sourceMap: !1
            })
        },
        2642: function(e, t, r) {
            var content = r(2844);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("5f36cbe4", content, !0, {
                sourceMap: !1
            })
        },
        2643: function(e, t, r) {
            var content = r(2847);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("b6979a48", content, !0, {
                sourceMap: !1
            })
        },
        2660: function(e, t, r) {
            var content = r(2897);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("f3d2dfba", content, !0, {
                sourceMap: !1
            })
        },
        2661: function(e, t, r) {
            var content = r(2900);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("8824df64", content, !0, {
                sourceMap: !1
            })
        },
        2662: function(e, t, r) {
            var content = r(2903);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("12f095b6", content, !0, {
                sourceMap: !1
            })
        },
        2823: function(e, t, r) {
            "use strict";
            r(2635)
        },
        2824: function(e, t, r) {
            var n = r(12),
                o = r(81),
                l = r(537),
                d = n((function(i) {
                    return i[1]
                })),
                c = o(l);
            d.push([e.i, ".home-header[data-v-fff11040]{background:var(--color-gray-1) url(" + c + ") no-repeat;background-position:bottom;background-size:cover;display:flex;flex-direction:column;height:calc(100vh - var(--topline-height));margin-top:calc(var(--header-height)*-1);min-height:500px}@media(max-width:480px){.home-header[data-v-fff11040]{font-size:16px;height:calc(100vh - var(--topline-height) + 130px)}}.home-header__content[data-v-fff11040]{align-items:center;color:var(--text-color-light);display:flex;flex-direction:column;height:100%;justify-content:center;text-align:center}.home-header__title[data-v-fff11040]{font-size:55px;font-weight:700;margin-bottom:40px}@media(min-width:1300px)and (-webkit-min-device-pixel-ratio:1.25),(min-width:1300px)and (min-resolution:120dpi){.home-header__title[data-v-fff11040]{font-size:50px}}@media(max-width:1200px){.home-header__title[data-v-fff11040]{font-size:35px}}@media(max-width:480px){.home-header__title[data-v-fff11040]{font-size:23px;margin-bottom:20px}}.home-header__subtitle[data-v-fff11040]{font-size:20px;margin-bottom:70px;max-width:830px}@media(max-width:1200px){.home-header__subtitle[data-v-fff11040]{font-size:18px}}@media(max-width:480px){.home-header__subtitle[data-v-fff11040]{font-size:16px;margin-bottom:40px}}.home-header__download-icon[data-v-fff11040]{width:40px}", ""]), d.locals = {}, e.exports = d
        },
        2825: function(e, t, r) {
            "use strict";
            var n = r(2287),
                o = r.n(n);
            t.default = o.a
        },
        2826: function(e, t, r) {
            "use strict";
            r(2636)
        },
        2827: function(e, t, r) {
            var n = r(12)((function(i) {
                return i[1]
            }));
            n.push([e.i, "@media(max-width:768px){.titled-content[data-v-3b70fbd2]{text-align:center}}.titled-content__title[data-v-3b70fbd2]{margin-bottom:40px}@media(max-width:900px){.titled-content__title[data-v-3b70fbd2]{margin-bottom:15px}}.titled-content__content[data-v-3b70fbd2]{font-size:16px;margin-bottom:20px}@media(max-width:900px){.titled-content__content[data-v-3b70fbd2]{font-size:16px}}@media(max-width:768px){.titled-content__content[data-v-3b70fbd2]{text-align:center}}@media(max-width:480px){.titled-content__content[data-v-3b70fbd2]{font-size:15px}}", ""]), n.locals = {}, e.exports = n
        },
        2828: function(e, t, r) {
            "use strict";
            r(2637)
        },
        2829: function(e, t, r) {
            var n = r(12)((function(i) {
                return i[1]
            }));
            n.push([e.i, ".home-access[data-v-1d5e40d8]{grid-gap:170px;align-items:center;display:grid;gap:170px;grid-template-columns:400px 1fr;justify-items:center}@media(min-width:1300px)and (-webkit-min-device-pixel-ratio:1.25),(min-width:1300px)and (min-resolution:120dpi){.home-access[data-v-1d5e40d8]{gap:60px;grid-template-columns:400px 1fr}}@media(max-width:1200px){.home-access[data-v-1d5e40d8]{gap:40px;grid-template-columns:45% 1fr}}@media(max-width:768px){.home-access[data-v-1d5e40d8]{gap:18px}}@media(max-width:767px){.home-access[data-v-1d5e40d8]{gap:30px;grid-template-columns:1fr}}.home-access__image[data-v-1d5e40d8]{position:relative}.home-access__caption[data-v-1d5e40d8]{bottom:0;color:var(--title-text-color);font-weight:700;min-width:200px;position:absolute;text-align:center}[dir=ltr] .home-access__caption[data-v-1d5e40d8]{left:50%;transform:translateX(-50%)}[dir=rtl] .home-access__caption[data-v-1d5e40d8]{right:50%;transform:translateX(50%)}@media(max-width:480px){.home-access__caption[data-v-1d5e40d8]{bottom:10px;width:100%}}", ""]), n.locals = {}, e.exports = n
        },
        2830: function(e, t, r) {
            "use strict";
            var n = r(2292),
                o = r.n(n);
            t.default = o.a
        },
        2831: function(e, t, r) {
            "use strict";
            r(2638)
        },
        2832: function(e, t, r) {
            var n = r(12)((function(i) {
                return i[1]
            }));
            n.push([e.i, ".home-safe[data-v-566619a4]{grid-gap:170px;align-items:center;display:grid;gap:170px;grid-template-columns:1fr 500px}@media(max-width:1200px){.home-safe[data-v-566619a4]{gap:40px;grid-template-columns:1fr 45%}}@media(max-width:768px){.home-safe[data-v-566619a4]{gap:18px}}@media(max-width:767px){.home-safe[data-v-566619a4]{gap:30px;grid-template-columns:1fr;justify-items:center}.home-safe__content[data-v-566619a4]{order:2}}", ""]), n.locals = {}, e.exports = n
        },
        2833: function(e, t, r) {
            "use strict";
            var n = r(2295),
                o = r.n(n);
            t.default = o.a
        },
        2834: function(e, t, r) {
            "use strict";
            r(2639)
        },
        2835: function(e, t, r) {
            var n = r(12)((function(i) {
                return i[1]
            }));
            n.push([e.i, ".inactive path[data-v-7eb87702]{fill:var(--border-color)}[dir=ltr] .forward[data-v-7eb87702],[dir=rtl] .back[data-v-7eb87702]{transform:rotate(180deg)}[dir=rtl] .forward[data-v-7eb87702]{transform:rotate(-180deg);transform:none}", ""]), n.locals = {}, e.exports = n
        },
        2836: function(e, t, r) {
            var map = {
                "./browser-mobile.svg": 535,
                "./desktop-mobile.svg": 536,
                "./mobile-mobile.svg": 538
            };

            function n(e) {
                var t = o(e);
                return r(t)
            }

            function o(e) {
                if (!r.o(map, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                return map[e]
            }
            n.keys = function() {
                return Object.keys(map)
            }, n.resolve = o, e.exports = n, n.id = 2836
        },
        2837: function(e, t, r) {
            var map = {
                "./access-ru.svg": 533,
                "./access.svg": 534,
                "./author1.svg": 860,
                "./author2.svg": 861,
                "./author3.svg": 862,
                "./browser-mobile.svg": 535,
                "./browser.svg": 863,
                "./desktop-mobile.svg": 536,
                "./desktop.svg": 864,
                "./header-planet.svg": 537,
                "./mobile-mobile.svg": 538,
                "./mobile.svg": 865,
                "./reviews/appstore.svg": 539,
                "./reviews/chrome.svg": 540,
                "./reviews/edge.svg": 541,
                "./reviews/filehippo.svg": 542,
                "./reviews/firefox.svg": 543,
                "./reviews/google-play.svg": 544,
                "./reviews/google-reviews.svg": 545,
                "./reviews/opera.svg": 546,
                "./reviews/softlay.svg": 547,
                "./reviews/softonic.svg": 548,
                "./reviews/softpedia.svg": 549,
                "./reviews/star.svg": 404,
                "./reviews/trustpilot.svg": 550,
                "./reviews/uptodown.svg": 551,
                "./reviews/vpnscanner.svg": 552,
                "./reviews/windows.svg": 553,
                "./safe.svg": 554,
                "./world.svg": 555
            };

            function n(e) {
                var t = o(e);
                return r(t)
            }

            function o(e) {
                if (!r.o(map, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                return map[e]
            }
            n.keys = function() {
                return Object.keys(map)
            }, n.resolve = o, e.exports = n, n.id = 2837
        },
        2838: function(e, t, r) {
            "use strict";
            r(2640)
        },
        2839: function(e, t, r) {
            var n = r(12)((function(i) {
                return i[1]
            }));
            n.push([e.i, ".home-platforms__platform[data-v-282c24d1]{height:420px;padding:0 200px;position:relative}.home-platforms__platform img[data-v-282c24d1]{height:100%;margin:auto;max-width:none;width:auto}[dir=ltr] .home-platforms__platform img[data-v-282c24d1]{padding-left:0}[dir=rtl] .home-platforms__platform img[data-v-282c24d1]{padding-right:0}@media(max-width:650px){.home-platforms__platform img[data-v-282c24d1]{height:100%;max-width:calc(100% - 20px)}[dir=ltr] .home-platforms__platform img[data-v-282c24d1]{padding-left:0}[dir=rtl] .home-platforms__platform img[data-v-282c24d1]{padding-right:0}}@media(max-width:1200px){[dir=ltr] .home-platforms__platform[data-v-282c24d1]{padding-left:160px;padding-right:0}[dir=rtl] .home-platforms__platform[data-v-282c24d1]{padding-left:0;padding-right:160px}}@media(max-width:900px){.home-platforms__platform[data-v-282c24d1]{height:320px}}@media(max-width:800px){[dir=ltr] .home-platforms__platform[data-v-282c24d1]{padding-left:0}[dir=rtl] .home-platforms__platform[data-v-282c24d1]{padding-right:0}}@media(max-width:650px){.home-platforms__platform[data-v-282c24d1]{height:100%;padding-bottom:20px}[dir=ltr] .home-platforms__platform[data-v-282c24d1]{padding-left:0}[dir=rtl] .home-platforms__platform[data-v-282c24d1]{padding-right:0}}@media(min-width:651px)and (max-width:800px){[dir=ltr] .home-platforms__platform.mobile[data-v-282c24d1]{transform:translateX(60px)}[dir=rtl] .home-platforms__platform.mobile[data-v-282c24d1]{transform:translateX(-60px)}}@media(max-width:650px){.home-platforms__platform.mobile[data-v-282c24d1]{display:flex;height:400px;justify-content:center}.home-platforms__platform.mobile img[data-v-282c24d1]{height:100%}.home-platforms__platform.mobile .home-platforms__card[data-v-282c24d1]{bottom:0;position:absolute;top:unset}[dir=ltr] .home-platforms__platform.mobile .home-platforms__card[data-v-282c24d1]{left:unset}[dir=rtl] .home-platforms__platform.mobile .home-platforms__card[data-v-282c24d1]{right:unset}.home-platforms__platform.browser .home-platforms__card[data-v-282c24d1]{margin-top:-30px}}@media(min-width:651px)and (max-width:800px){[dir=ltr] .home-platforms__platform.browser[data-v-282c24d1]{transform:translateX(35px)}[dir=rtl] .home-platforms__platform.browser[data-v-282c24d1]{transform:translateX(-35px)}[dir=ltr] .home-platforms__platform.desktop[data-v-282c24d1]{transform:translateX(35px)}[dir=rtl] .home-platforms__platform.desktop[data-v-282c24d1]{transform:translateX(-35px)}}.titled-content__content[data-v-282c24d1]{font-size:16px;margin:0 auto 50px;max-width:1460px;padding:0 80px}@media(max-width:900px){.titled-content__content[data-v-282c24d1]{font-size:16px;padding:0 20px}}@media(max-width:480px){.titled-content__content[data-v-282c24d1]{font-size:15px}}.home-platforms__card[data-v-282c24d1]{background-color:var(--background-color-light);border-radius:calc(var(--base-bd-rs)/2);box-shadow:var(--base-shadow);max-width:300px;padding:26px;position:absolute;top:48%;transform:translateY(-50%);z-index:2}[dir=ltr] .home-platforms__card[data-v-282c24d1]{left:60px}[dir=rtl] .home-platforms__card[data-v-282c24d1]{right:60px}@media(max-width:1200px){[dir=ltr] .home-platforms__card[data-v-282c24d1]{left:80px}[dir=rtl] .home-platforms__card[data-v-282c24d1]{right:80px}}@media(max-width:800px){[dir=ltr] .home-platforms__card[data-v-282c24d1]{left:15px}[dir=rtl] .home-platforms__card[data-v-282c24d1]{right:15px}}@media(max-width:650px){.home-platforms__card[data-v-282c24d1]{margin:20px auto auto;position:relative;transform:none}[dir=ltr] .home-platforms__card[data-v-282c24d1]{left:unset}[dir=rtl] .home-platforms__card[data-v-282c24d1]{right:unset}}.home-platforms__card-title[data-v-282c24d1]{font-size:20px;font-weight:700;margin-bottom:20px}.home-platforms__card-description[data-v-282c24d1]{color:var(--inactive-color);font-size:15px;margin-bottom:20px}.home-platforms__links[data-v-282c24d1]{grid-gap:20px;display:grid;font-size:13px;gap:20px;grid-template-columns:1fr 1fr;grid-template-rows:auto auto}a.home-platforms__link[data-v-282c24d1]{color:var(--inactive-color);display:block;transition:var(--base-pop-transition)}a.home-platforms__link[data-v-282c24d1]:hover{color:var(--inactive-color);-webkit-text-decoration:none;text-decoration:none;transform:var(--base-pop-transform)}.home-platforms__controls[data-v-282c24d1]{display:grid;grid-template-columns:1fr 1fr 1fr;padding-top:85px}@media(max-width:900px){.home-platforms__controls[data-v-282c24d1]{padding-top:10px}}.home-platforms__pagination[data-v-282c24d1]{display:flex;grid-column:2;justify-self:center}.home-platforms__page[data-v-282c24d1]{background:var(--border-color);border-radius:5px;cursor:pointer;height:9px;transition:all var(--base-ease);width:30px}[dir=ltr] .home-platforms__page[data-v-282c24d1]{margin-right:20px}[dir=rtl] .home-platforms__page[data-v-282c24d1]{margin-left:20px}.home-platforms__page.active[data-v-282c24d1]{background:var(--highlight-color);width:80px}[dir=ltr] .home-platforms__page[data-v-282c24d1]:last-child{margin-right:0}[dir=rtl] .home-platforms__page[data-v-282c24d1]:last-child{margin-left:0}.home-platforms__buttons[data-v-282c24d1]{display:flex;grid-column:3;justify-self:end}@media(max-width:900px){.home-platforms__buttons[data-v-282c24d1]{display:none}}.home-platforms__arrow[data-v-282c24d1]{background:none;display:block;transition:var(--base-pop-transition);will-change:transform}.home-platforms__arrow[data-v-282c24d1]:hover:not(:disabled){transform:var(--base-pop-transform)}.home-platforms__arrow[data-v-282c24d1]:disabled{cursor:default}[dir=ltr] .home-platforms__arrow.left[data-v-282c24d1]{margin-right:40px}[dir=rtl] .home-platforms__arrow.left[data-v-282c24d1]{margin-left:40px}", ""]), n.locals = {}, e.exports = n
        },
        2840: function(e, t, r) {
            "use strict";
            r(2641)
        },
        2841: function(e, t, r) {
            var n = r(12)((function(i) {
                return i[1]
            }));
            n.push([e.i, '.slick-track[data-v-e4caeaf8]{display:block;left:0;position:relative;top:0;transform:translateZ(0)}.slick-track.slick-center[data-v-e4caeaf8]{margin-left:auto;margin-right:auto}.slick-track[data-v-e4caeaf8]:after,.slick-track[data-v-e4caeaf8]:before{content:"";display:table}.slick-track[data-v-e4caeaf8]:after{clear:both}.slick-loading .slick-track[data-v-e4caeaf8]{visibility:hidden}.slick-slide[data-v-e4caeaf8]{display:none;float:left;height:100%;min-height:1px}.slick-slide img[data-v-e4caeaf8]{display:block}.slick-slide.slick-loading img[data-v-e4caeaf8]{display:none}.slick-slide.dragging img[data-v-e4caeaf8]{pointer-events:none}.slick-initialized .slick-slide[data-v-e4caeaf8]{display:block}.slick-loading .slick-slide[data-v-e4caeaf8]{visibility:hidden}.slick-vertical .slick-slide[data-v-e4caeaf8]{border:1px solid transparent;display:block;height:auto}.slick-arrow.slick-hidden[data-v-21137603]{display:none}.slick-slider[data-v-3d1a4f76]{-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;box-sizing:border-box;display:block;position:relative;touch-action:pan-y;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-khtml-user-select:none}.slick-list[data-v-3d1a4f76]{display:block;margin:0;overflow:hidden;padding:0;position:relative;transform:translateZ(0)}.slick-list[data-v-3d1a4f76]:focus{outline:none}.slick-list.dragging[data-v-3d1a4f76]{cursor:pointer;cursor:hand}', ""]), n.locals = {}, e.exports = n
        },
        2842: function(e, t, r) {
            "use strict";
            var n = r(2296),
                o = r.n(n);
            t.default = o.a
        },
        2843: function(e, t, r) {
            "use strict";
            r(2642)
        },
        2844: function(e, t, r) {
            var n = r(12),
                o = r(81),
                l = r(555),
                d = n((function(i) {
                    return i[1]
                })),
                c = o(l);
            d.push([e.i, ".home-network[data-v-303746df]{background:var(--page-background-color) url(" + c + ");background-position:50%;background-repeat:no-repeat}.home-network__description[data-v-303746df]{font-size:16px}@media(max-width:900px){.home-network__description[data-v-303746df]{font-size:16px}}@media(max-width:480px){.home-network__description[data-v-303746df]{font-size:15px}}.home-network__statistic[data-v-303746df]{display:flex;justify-content:space-between;margin-bottom:100px;padding:0 100px}@media(max-width:1200px){.home-network__statistic[data-v-303746df]{padding:0 70px}}@media(max-width:900px){.home-network__statistic[data-v-303746df]{padding:0 20px}}@media(max-width:767px){.home-network__statistic[data-v-303746df]{flex-direction:column}}@media(max-width:480px){.home-network__statistic[data-v-303746df]{margin-bottom:35px}}.home-network__fact[data-v-303746df]{min-width:165px;text-align:center}.home-network__value[data-v-303746df]{color:var(--highlight-color);font-size:50px;font-weight:900;line-height:140%}.home-network__label[data-v-303746df]{font-size:20px;text-transform:uppercase}.home-network__route[data-v-303746df]{display:flex;justify-content:center;margin-bottom:50px}", ""]), d.locals = {}, e.exports = d
        },
        2845: function(e, t, r) {
            "use strict";
            var n = r(2297),
                o = r.n(n);
            t.default = o.a
        },
        2846: function(e, t, r) {
            "use strict";
            r(2643)
        },
        2847: function(e, t, r) {
            var n = r(12)((function(i) {
                return i[1]
            }));
            n.push([e.i, ".home-plans[data-v-15f3cbc8]{align-items:flex-start;display:grid;grid-template-columns:-webkit-max-content -webkit-max-content auto;grid-template-columns:max-content max-content auto;justify-content:center}@media(max-width:1200px){.home-plans[data-v-15f3cbc8]{grid-template-columns:1fr 1fr;justify-items:center}}@media(max-width:767px){.home-plans[data-v-15f3cbc8]{grid-template-columns:1fr;justify-items:center}}.home-plans__subtitle[data-v-15f3cbc8]{color:var(--color-black);font-size:20px;font-weight:700;margin-bottom:20px;text-align:center}@media(min-width:768px){.home-plans__subtitle[data-v-15f3cbc8]{display:none}}.home-plans__plan[data-v-15f3cbc8]{border:var(--base-bd);border-radius:var(--base-bd-rs);max-width:330px;padding:20px}[dir=ltr] .home-plans__plan[data-v-15f3cbc8]{margin-right:30px}[dir=rtl] .home-plans__plan[data-v-15f3cbc8]{margin-left:30px}@media(max-width:1200px){.home-plans__plan[data-v-15f3cbc8]{margin-bottom:40px;max-width:unset}[dir=ltr] .home-plans__plan[data-v-15f3cbc8]:nth-child(3){margin-right:0}[dir=rtl] .home-plans__plan[data-v-15f3cbc8]:nth-child(3){margin-left:0}}@media(max-width:767px){.home-plans__plan[data-v-15f3cbc8]{margin-bottom:20px;max-width:480px}[dir=ltr] .home-plans__plan[data-v-15f3cbc8]{margin-right:0}[dir=rtl] .home-plans__plan[data-v-15f3cbc8]{margin-left:0}}.home-plans__route[data-v-15f3cbc8]{margin-bottom:30px}.home-plans__title[data-v-15f3cbc8]{color:var(--color-black);font-size:20px;font-weight:700;margin-bottom:30px;text-align:center}[dir=ltr] .home-plans__icon[data-v-15f3cbc8]{margin-right:8px}[dir=rtl] .home-plans__icon[data-v-15f3cbc8]{margin-left:8px}@media(max-width:1200px){.home-plans__description[data-v-15f3cbc8]{grid-column:1/3;grid-row:2}}@media(max-width:767px){.home-plans__description[data-v-15f3cbc8]{grid-column:1;grid-row:4;max-width:480px}}.home-plans__paragraph[data-v-15f3cbc8]{font-size:16px;margin-bottom:40px}.home-plans__paragraph[data-v-15f3cbc8] :last-child{margin-bottom:0}", ""]), n.locals = {}, e.exports = n
        },
        2848: function(e, t, r) {
            "use strict";
            var n = r(2298),
                o = r.n(n);
            t.default = o.a
        },
        2896: function(e, t, r) {
            "use strict";
            r(2660)
        },
        2897: function(e, t, r) {
            var n = r(12)((function(i) {
                return i[1]
            }));
            n.push([e.i, ".home-info[data-v-69c495f2]{margin-bottom:50px}", ""]), n.locals = {}, e.exports = n
        },
        2898: function(e, t, r) {
            "use strict";
            var n = r(2317),
                o = r.n(n);
            t.default = o.a
        },
        2899: function(e, t, r) {
            "use strict";
            r(2661)
        },
        2900: function(e, t, r) {
            var n = r(12)((function(i) {
                return i[1]
            }));
            n.push([e.i, ".home-benefits[data-v-72bfa2a8]{padding-bottom:100px}@media(min-width:1300px)and (-webkit-min-device-pixel-ratio:1.25),(min-width:1300px)and (min-resolution:120dpi){.home-benefits[data-v-72bfa2a8]{padding-bottom:50px}}@media(max-width:900px){.home-benefits[data-v-72bfa2a8]{padding-bottom:60px}}@media(max-width:480px){.home-benefits[data-v-72bfa2a8]{padding-bottom:50px}}.home-benefits p[data-v-72bfa2a8]{margin-bottom:1rem}.home-benefits p[data-v-72bfa2a8]:last-child{margin-bottom:0}", ""]), n.locals = {}, e.exports = n
        },
        2901: function(e, t, r) {
            "use strict";
            var n = r(2318),
                o = r.n(n);
            t.default = o.a
        },
        2902: function(e, t, r) {
            "use strict";
            r(2662)
        },
        2903: function(e, t, r) {
            var n = r(12)((function(i) {
                return i[1]
            }));
            n.push([e.i, "h1,h2,h3,p{margin-bottom:0}h1,h2,h3{line-height:1.15}", ""]), n.locals = {}, e.exports = n
        },
        2904: function(e, t, r) {
            "use strict";
            var n = r(2319),
                o = r.n(n);
            t.default = o.a
        }
    }
]);