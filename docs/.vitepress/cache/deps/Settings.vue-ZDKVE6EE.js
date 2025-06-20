import {
  x
} from "./chunk-MAAJFZYL.js";
import {
  u
} from "./chunk-S4LPBKVU.js";
import {
  je,
  themeLabels,
  z
} from "./chunk-6M3JNKJN.js";
import {
  $,
  cva,
  cx,
  m2 as m,
  useColorMode
} from "./chunk-OYO2YRBV.js";
import "./chunk-3FIKATP3.js";
import {
  Fragment,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  normalizeClass,
  normalizeStyle,
  openBlock,
  ref,
  renderList,
  renderSlot,
  resolveDynamicComponent,
  toDisplayString,
  unref,
  withCtx
} from "./chunk-XQNPNIQJ.js";
import "./chunk-DC5AMYBS.js";

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/ImportCollection/IntegrationLogo.vue.js
var I = defineComponent({
  __name: "IntegrationLogo",
  props: {
    integration: {}
  },
  setup(n) {
    const a = n, r2 = [
      "adonisjs",
      "dotnet",
      "elysiajs",
      "express",
      "fastapi",
      "fastify",
      "go",
      "hono",
      "laravel",
      "litestar",
      "nestjs",
      "nextjs",
      "nitro",
      "nuxt",
      "platformatic",
      "react",
      "rust",
      "svelte"
    ], s = computed(() => {
      var e;
      const o = "Openapi", t = (e = a.integration) == null ? void 0 : e.toLocaleLowerCase();
      if (!t)
        return o;
      const c2 = t.charAt(0).toUpperCase() + t.slice(1);
      return r2.includes(t) ? c2 : o;
    });
    return (o, t) => (openBlock(), createBlock(unref(m), {
      class: "h-full w-full rounded-lg",
      logo: s.value
    }, null, 8, ["logo"]));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Settings/components/SettingsAppearance.vue.js
var C = { class: "flex flex-col gap-2" };
var z2 = defineComponent({
  __name: "SettingsAppearance",
  setup(h) {
    const { colorMode: r2, setColorMode: n } = useColorMode(), a = cva({
      base: "w-full shadow-none text-c-1 justify-start pl-2 gap-2 border",
      variants: {
        active: {
          true: "bg-primary text-c-1 hover:bg-inherit",
          false: "bg-b-1 hover:bg-b-2"
        }
      }
    });
    return (w2, t) => (openBlock(), createElementBlock("div", C, [
      createVNode(unref($), {
        class: normalizeClass(unref(cx)(unref(a)({ active: unref(r2) === "system" }))),
        onClick: t[0] || (t[0] = (b) => unref(n)("system"))
      }, {
        default: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(["flex h-5 w-5 items-center justify-center rounded-full border-[1.5px] p-1", {
              "bg-c-accent text-b-1 border-transparent": unref(r2) === "system"
            }])
          }, [
            unref(r2) === "system" ? (openBlock(), createBlock(unref(m), {
              key: 0,
              icon: "Checkmark",
              size: "xs",
              thickness: "3.5"
            })) : createCommentVNode("", true)
          ], 2),
          t[3] || (t[3] = createTextVNode(" System Preference (default) "))
        ]),
        _: 1
      }, 8, ["class"]),
      createVNode(unref($), {
        class: normalizeClass(unref(cx)(unref(a)({ active: unref(r2) === "light" }))),
        onClick: t[1] || (t[1] = (b) => unref(n)("light"))
      }, {
        default: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(["flex h-5 w-5 items-center justify-center rounded-full border-[1.5px] p-1", {
              "bg-c-accent text-b-1 border-transparent": unref(r2) === "light"
            }])
          }, [
            unref(r2) === "light" ? (openBlock(), createBlock(unref(m), {
              key: 0,
              icon: "Checkmark",
              size: "xs",
              thickness: "3.5"
            })) : createCommentVNode("", true)
          ], 2),
          t[4] || (t[4] = createTextVNode(" Light Mode Always "))
        ]),
        _: 1
      }, 8, ["class"]),
      createVNode(unref($), {
        class: normalizeClass(unref(cx)(unref(a)({ active: unref(r2) === "dark" }))),
        onClick: t[2] || (t[2] = (b) => unref(n)("dark"))
      }, {
        default: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(["flex h-5 w-5 items-center justify-center rounded-full border-[1.5px] p-1", {
              "bg-c-accent text-b-1 border-transparent": unref(r2) === "dark"
            }])
          }, [
            unref(r2) === "dark" ? (openBlock(), createBlock(unref(m), {
              key: 0,
              icon: "Checkmark",
              size: "xs",
              thickness: "3.5"
            })) : createCommentVNode("", true)
          ], 2),
          t[5] || (t[5] = createTextVNode(" Dark Mode Always "))
        ]),
        _: 1
      }, 8, ["class"])
    ]));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Settings/components/SettingsSection.vue.js
var i = { class: "flex flex-col gap-2" };
var r = {
  key: 0,
  class: "font-bold"
};
var c = {
  key: 1,
  class: "text-c-2 mb-4 leading-[21px]"
};
var m2 = defineComponent({
  __name: "SettingsSection",
  setup(a) {
    return (e, d) => (openBlock(), createElementBlock("div", i, [
      e.$slots.title ? (openBlock(), createElementBlock("h3", r, [
        renderSlot(e.$slots, "title")
      ])) : createCommentVNode("", true),
      e.$slots.description ? (openBlock(), createElementBlock("p", c, [
        renderSlot(e.$slots, "description")
      ])) : createCommentVNode("", true),
      renderSlot(e.$slots, "default")
    ]));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Settings/SettingsGeneral.vue.js
var D = { class: "bg-b-1 h-full w-full overflow-auto" };
var G = { class: "mr-auto ml-auto w-full max-w-[720px] px-5 py-5" };
var q = { class: "flex flex-col gap-8" };
var H = { class: "flex flex-col gap-2" };
var M = { class: "flex flex-col gap-2" };
var X = { class: "grid grid-cols-2 gap-2" };
var Y = { class: "flex items-center gap-2" };
var J = { class: "flex items-center gap-1" };
var K = { class: "grid grid-cols-2 gap-2" };
var Q = { class: "flex items-center gap-2" };
var Z = { class: "flex items-center gap-1" };
var I2 = { class: "size-7 rounded-xl" };
var w = "https://proxy.scalar.com";
var ce = defineComponent({
  __name: "SettingsGeneral",
  setup(ee) {
    const { activeWorkspace: o } = z(), { proxyUrl: k2, workspaceMutators: j } = je(), L = [
      "default",
      "alternate",
      // 'moon',
      "purple",
      "solarized",
      // 'bluePlanet',
      "saturn",
      "kepler"
      // 'mars',
      // 'deepSpace',
      // 'laserwave',
    ], N = ["elysiajs", "fastify"], _ = (x2) => ({
      default: { light: "#fff", dark: "#0f0f0f", accent: "#0099ff" },
      alternate: { light: "#f9f9f9", dark: "#131313", accent: "#e7e7e7" },
      moon: { light: "#ccc9b3", dark: "#313332", accent: "#645b0f" },
      purple: { light: "#f5f6f8", dark: "#22252b", accent: "#5469d4" },
      solarized: { light: "#fdf6e3", dark: "#00212b", accent: "#007acc" },
      bluePlanet: { light: "#f0f2f5", dark: "#000e23", accent: "#e0e2e6" },
      saturn: { light: "#e4e4df", dark: "#2c2c30", accent: "#1763a6" },
      kepler: { light: "#f6f6f6", dark: "#0d0f1e", accent: "#7070ff" },
      mars: { light: "#f2efe8", dark: "#321116", accent: "#c75549" },
      deepSpace: { light: "#f4f4f5", dark: "#09090b", accent: "#8ab4f8" },
      laserwave: { light: "#f4f2f7", dark: "#27212e", accent: "#ed78c2" },
      none: { light: "#ffffff", dark: "#000000", accent: "#3b82f6" }
    })[x2] || { light: "#ffffff", dark: "#000000", accent: "#3b82f6" }, T = (x2) => {
      var t;
      return j.edit((t = o.value) == null ? void 0 : t.uid, "themeId", x2);
    }, g = cva({
      base: "w-full shadow-none text-c-1 justify-start pl-2 gap-2 border",
      variants: {
        active: {
          true: "bg-primary text-c-1 hover:bg-inherit",
          false: "bg-b-1 hover:bg-b-2"
        }
      }
    }), U = (x2) => {
      var t;
      return j.edit((t = o.value) == null ? void 0 : t.uid, "proxyUrl", x2);
    };
    return (x2, t) => (openBlock(), createElementBlock("div", D, [
      createBaseVNode("div", G, [
        createBaseVNode("div", q, [
          t[13] || (t[13] = createBaseVNode("div", null, [
            createBaseVNode("h2", { class: "mt-10 text-xl font-bold" }, "Settings")
          ], -1)),
          createVNode(m2, null, {
            title: withCtx(() => t[3] || (t[3] = [
              createTextVNode(" CORS Proxy ")
            ])),
            description: withCtx(() => t[4] || (t[4] = [
              createTextVNode(" Browsers block cross-origin requests for security. We provide a public proxy to "),
              createBaseVNode("a", {
                class: "hover:text-c-1 underline-offset-2",
                href: "https://en.wikipedia.org/wiki/Cross-origin_resource_sharing",
                target: "_blank"
              }, " bypass CORS issues ", -1),
              createTextVNode(" . Check the "),
              createBaseVNode("a", {
                class: "hover:text-c-1 underline-offset-2",
                href: "https://github.com/scalar/scalar/tree/main/examples/proxy-server",
                target: "_blank"
              }, " source code on GitHub ", -1),
              createTextVNode(" . ")
            ])),
            default: withCtx(() => {
              var s, u2, i2;
              return [
                createBaseVNode("div", H, [
                  createVNode(unref($), {
                    class: normalizeClass(
                      unref(cx)(
                        unref(g)({
                          active: ((s = unref(o)) == null ? void 0 : s.proxyUrl) === w
                        })
                      )
                    ),
                    onClick: t[0] || (t[0] = (l) => U(w))
                  }, {
                    default: withCtx(() => {
                      var l, p;
                      return [
                        createBaseVNode("div", {
                          class: normalizeClass(["flex h-5 w-5 items-center justify-center rounded-full border-[1.5px] p-1", {
                            "bg-c-accent text-b-1 border-transparent": ((l = unref(o)) == null ? void 0 : l.proxyUrl) === w
                          }])
                        }, [
                          ((p = unref(o)) == null ? void 0 : p.proxyUrl) === w ? (openBlock(), createBlock(unref(m), {
                            key: 0,
                            icon: "Checkmark",
                            size: "xs",
                            thickness: "3.5"
                          })) : createCommentVNode("", true)
                        ], 2),
                        t[5] || (t[5] = createTextVNode(" Use proxy.scalar.com (default) "))
                      ];
                    }),
                    _: 1
                  }, 8, ["class"]),
                  unref(k2) && unref(k2) !== w ? (openBlock(), createBlock(unref($), {
                    key: 0,
                    class: normalizeClass(
                      unref(cx)(
                        unref(g)({
                          active: ((u2 = unref(o)) == null ? void 0 : u2.proxyUrl) === unref(k2)
                        })
                      )
                    ),
                    onClick: t[1] || (t[1] = (l) => U(unref(k2)))
                  }, {
                    default: withCtx(() => {
                      var l, p;
                      return [
                        createBaseVNode("div", {
                          class: normalizeClass(["flex h-5 w-5 items-center justify-center rounded-full border-[1.5px] p-1", {
                            "bg-c-accent text-b-1 border-transparent": ((l = unref(o)) == null ? void 0 : l.proxyUrl) === unref(k2)
                          }])
                        }, [
                          ((p = unref(o)) == null ? void 0 : p.proxyUrl) === unref(k2) ? (openBlock(), createBlock(unref(m), {
                            key: 0,
                            icon: "Checkmark",
                            size: "xs",
                            thickness: "3.5"
                          })) : createCommentVNode("", true)
                        ], 2),
                        createTextVNode(" Use custom proxy (" + toDisplayString(unref(k2)) + ") ", 1)
                      ];
                    }),
                    _: 1
                  }, 8, ["class"])) : createCommentVNode("", true),
                  createVNode(unref($), {
                    class: normalizeClass(unref(cx)(unref(g)({ active: !((i2 = unref(o)) != null && i2.proxyUrl) }))),
                    onClick: t[2] || (t[2] = (l) => U(void 0))
                  }, {
                    default: withCtx(() => {
                      var l, p;
                      return [
                        createBaseVNode("div", {
                          class: normalizeClass([
                            "flex h-5 w-5 items-center justify-center rounded-full border-[1.5px] p-1",
                            !((l = unref(o)) != null && l.proxyUrl) && "bg-c-accent text-b-1 border-transparent"
                          ])
                        }, [
                          (p = unref(o)) != null && p.proxyUrl ? createCommentVNode("", true) : (openBlock(), createBlock(unref(m), {
                            key: 0,
                            icon: "Checkmark",
                            size: "xs",
                            thickness: "3.5"
                          }))
                        ], 2),
                        t[6] || (t[6] = createTextVNode(" Skip the proxy "))
                      ];
                    }),
                    _: 1
                  }, 8, ["class"])
                ])
              ];
            }),
            _: 1
          }),
          createVNode(m2, null, {
            title: withCtx(() => t[7] || (t[7] = [
              createTextVNode(" Themes ")
            ])),
            description: withCtx(() => t[8] || (t[8] = [
              createTextVNode(" We’ve got a whole rainbow of themes for you to play with: ")
            ])),
            default: withCtx(() => [
              createBaseVNode("div", M, [
                createBaseVNode("div", X, [
                  (openBlock(), createElementBlock(Fragment, null, renderList(L, (s) => {
                    var u2;
                    return createVNode(unref($), {
                      key: s,
                      class: normalizeClass(
                        unref(cx)(
                          unref(g)({
                            active: ((u2 = unref(o)) == null ? void 0 : u2.themeId) === s
                          })
                        )
                      ),
                      onClick: (i2) => T(s)
                    }, {
                      default: withCtx(() => {
                        var i2, l;
                        return [
                          createBaseVNode("div", Y, [
                            createBaseVNode("div", {
                              class: normalizeClass(["flex h-5 w-5 items-center justify-center rounded-full border-[1.5px] p-1", {
                                "bg-c-accent text-b-1 border-transparent": ((i2 = unref(o)) == null ? void 0 : i2.themeId) === s
                              }])
                            }, [
                              ((l = unref(o)) == null ? void 0 : l.themeId) === s ? (openBlock(), createBlock(unref(m), {
                                key: 0,
                                icon: "Checkmark",
                                size: "xs",
                                thickness: "3.5"
                              })) : createCommentVNode("", true)
                            ], 2),
                            createTextVNode(" " + toDisplayString(unref(themeLabels)[s]), 1)
                          ]),
                          createBaseVNode("div", J, [
                            createBaseVNode("span", {
                              class: "border-c-3 -mr-3 inline-block h-5 w-5 rounded-full",
                              style: normalizeStyle({
                                backgroundColor: _(s).light
                              })
                            }, null, 4),
                            createBaseVNode("span", {
                              class: "border-c-3 -mr-3 inline-block h-5 w-5 rounded-full",
                              style: normalizeStyle({
                                backgroundColor: _(s).dark
                              })
                            }, null, 4),
                            createBaseVNode("span", {
                              class: "border-c-3 inline-block h-5 w-5 rounded-full",
                              style: normalizeStyle({
                                backgroundColor: _(s).accent
                              })
                            }, null, 4)
                          ])
                        ];
                      }),
                      _: 2
                    }, 1032, ["class", "onClick"]);
                  }), 64))
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(m2, null, {
            title: withCtx(() => t[9] || (t[9] = [
              createTextVNode(" Framework Themes ")
            ])),
            description: withCtx(() => t[10] || (t[10] = [
              createTextVNode(" Are you a real fan? Show your support by using your favorite framework’s theme! ")
            ])),
            default: withCtx(() => [
              createBaseVNode("div", K, [
                (openBlock(), createElementBlock(Fragment, null, renderList(N, (s) => {
                  var u2;
                  return createVNode(unref($), {
                    key: s,
                    class: normalizeClass(
                      unref(cx)(
                        unref(g)({
                          active: ((u2 = unref(o)) == null ? void 0 : u2.themeId) === s
                        })
                      )
                    ),
                    onClick: (i2) => T(s)
                  }, {
                    default: withCtx(() => {
                      var i2, l;
                      return [
                        createBaseVNode("div", Q, [
                          createBaseVNode("div", {
                            class: normalizeClass(["flex h-5 w-5 items-center justify-center rounded-full border-[1.5px] p-1", {
                              "bg-c-accent text-b-1 border-transparent": ((i2 = unref(o)) == null ? void 0 : i2.themeId) === s
                            }])
                          }, [
                            ((l = unref(o)) == null ? void 0 : l.themeId) === s ? (openBlock(), createBlock(unref(m), {
                              key: 0,
                              icon: "Checkmark",
                              size: "xs",
                              thickness: "3.5"
                            })) : createCommentVNode("", true)
                          ], 2),
                          createTextVNode(" " + toDisplayString(unref(themeLabels)[s]), 1)
                        ]),
                        createBaseVNode("div", Z, [
                          createBaseVNode("div", I2, [
                            createVNode(I, { integration: s }, null, 8, ["integration"])
                          ])
                        ])
                      ];
                    }),
                    _: 2
                  }, 1032, ["class", "onClick"]);
                }), 64))
              ])
            ]),
            _: 1
          }),
          createVNode(m2, null, {
            title: withCtx(() => t[11] || (t[11] = [
              createTextVNode(" Appearance ")
            ])),
            description: withCtx(() => t[12] || (t[12] = [
              createTextVNode(" Choose between light, dark, or system-based appearance for your workspace. ")
            ])),
            default: withCtx(() => [
              createVNode(z2)
            ]),
            _: 1
          })
        ])
      ])
    ]));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Settings/Settings.vue2.js
var k = defineComponent({
  __name: "Settings",
  setup(p) {
    const e = {
      general: {
        component: ce,
        title: "general"
      }
    }, t = ref("general");
    return (u2, d) => (openBlock(), createBlock(u, null, {
      default: withCtx(() => [
        createVNode(x, { class: "flex-1" }, {
          default: withCtx(() => [
            e[t.value] ? (openBlock(), createBlock(resolveDynamicComponent(e[t.value].component), { key: 0 })) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
});
export {
  k as default
};
//# sourceMappingURL=Settings.vue-ZDKVE6EE.js.map
