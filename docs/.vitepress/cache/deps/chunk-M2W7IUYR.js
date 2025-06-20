import {
  f as f2
} from "./chunk-VZ7KBDZM.js";
import {
  _ as _2,
  d,
  f
} from "./chunk-NSHQAVSH.js";
import {
  s as s2
} from "./chunk-RDVDQCBW.js";
import {
  CLIENT_LS_KEYS,
  je,
  pkceOptions,
  s,
  safeLocalStorage
} from "./chunk-6M3JNKJN.js";
import {
  $,
  N,
  Q,
  V,
  W,
  _3 as _,
  cva,
  i,
  isDefined,
  m2 as m,
  m4 as m2,
  shouldUseProxy,
  w,
  x
} from "./chunk-OYO2YRBV.js";
import {
  Fragment,
  capitalize,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  mergeProps,
  normalizeClass,
  onMounted,
  openBlock,
  ref,
  renderList,
  renderSlot,
  toDisplayString,
  unref,
  useId,
  watch,
  withCtx,
  withModifiers
} from "./chunk-XQNPNIQJ.js";

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/ViewLayout/ViewLayoutCollapse.vue.js
var _3 = ["aria-labelledby"];
var k = { class: "text-c-1 flex flex-1 items-center gap-1.5" };
var w2 = ["id"];
var B = {
  key: 0,
  class: "sr-only"
};
var V2 = {
  key: 0,
  class: "bg-b-2 text-c-2 inline-flex h-5 w-5 items-center justify-center rounded-full border text-xs font-semibold"
};
var $2 = { class: "sr-only" };
var D = {
  key: 0,
  class: "ui-not-open:invisible flex items-center gap-2 pr-2"
};
var E = defineComponent({
  __name: "ViewLayoutCollapse",
  props: {
    defaultOpen: { type: Boolean, default: true },
    itemCount: { default: 0 },
    layout: { default: "client" }
  },
  setup(N4) {
    const u = useId();
    return (e, O) => (openBlock(), createBlock(unref(N), {
      as: "div",
      class: normalizeClass(["group/collapse focus-within:text-c-1 text-c-2 border-b", { "last-of-type:first-of-type:border-b-0": e.layout === "reference" }]),
      defaultOpen: e.defaultOpen,
      static: e.layout === "reference" ? true : void 0
    }, {
      default: withCtx(({ open: o2 }) => [
        createBaseVNode("section", {
          "aria-labelledby": unref(u),
          class: "contents"
        }, [
          createBaseVNode("div", {
            class: normalizeClass(["bg-b-2 flex items-center", e.layout === "reference" && "rounded-t-lg border border-b-0"])
          }, [
            createVNode(unref(Q), {
              class: normalizeClass([
                "hover:text-c-1 group box-content flex max-h-8 flex-1 items-center gap-2.5 overflow-hidden px-1 py-1.5 text-sm font-medium outline-none md:px-1.5 xl:pr-0.5 xl:pl-2",
                { "!pl-3": e.layout === "reference" }
              ]),
              disabled: e.layout === "reference"
            }, {
              default: withCtx(() => [
                e.layout !== "reference" ? (openBlock(), createBlock(unref(m), {
                  key: 0,
                  class: normalizeClass([
                    "text-c-3 group-hover:text-c-1 ui-open:rotate-90 ui-not-open:rotate-0 rounded-px outline-offset-2 group-focus-visible:outline"
                  ]),
                  icon: "ChevronRight",
                  size: "md"
                })) : createCommentVNode("", true),
                createBaseVNode("h2", k, [
                  createBaseVNode("span", {
                    id: unref(u),
                    class: "contents"
                  }, [
                    renderSlot(e.$slots, "title", { open: o2 }),
                    o2 ? createCommentVNode("", true) : (openBlock(), createElementBlock("span", B, " (Collapsed) "))
                  ], 8, w2),
                  !o2 && e.itemCount ? (openBlock(), createElementBlock("span", V2, [
                    createTextVNode(toDisplayString(e.itemCount) + " ", 1),
                    createBaseVNode("span", $2, "Item" + toDisplayString(e.itemCount === 1 ? "" : "s"), 1)
                  ])) : createCommentVNode("", true)
                ])
              ]),
              _: 2
            }, 1032, ["class", "disabled"]),
            e.$slots.actions ? (openBlock(), createElementBlock("div", D, [
              renderSlot(e.$slots, "actions", { open: o2 })
            ])) : createCommentVNode("", true)
          ], 2),
          createVNode(unref(V), mergeProps(e.$attrs, { class: "diclosure-panel h-full max-h-fit rounded-b" }), {
            default: withCtx(() => [
              renderSlot(e.$slots, "default", { open: o2 })
            ]),
            _: 2
          }, 1040)
        ], 8, _3)
      ]),
      _: 3
    }, 8, ["class", "defaultOpen", "static"]));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/RequestSection/RequestAuth/DeleteRequestAuthModal.vue.js
var k2 = { class: "text-c-2 mb-4 text-sm leading-normal" };
var C = { class: "flex justify-between gap-2" };
var B2 = defineComponent({
  __name: "DeleteRequestAuthModal",
  props: {
    state: {},
    scheme: {}
  },
  emits: ["close", "delete"],
  setup(p2, { emit: f5 }) {
    const l = p2, c = f5, { securitySchemeMutators: h } = je(), x3 = () => {
      var e;
      (e = l.scheme) != null && e.id && h.delete(l.scheme.id), c("delete");
    };
    return (e, t2) => (openBlock(), createBlock(unref(m2), {
      size: "xxs",
      state: e.state,
      title: "Delete Security Scheme"
    }, {
      default: withCtx(() => {
        var a;
        return [
          createBaseVNode("p", k2, " This cannot be undone. You’re about to delete the " + toDisplayString((a = e.scheme) == null ? void 0 : a.label) + " security scheme from the collection. ", 1),
          createBaseVNode("div", C, [
            createVNode(unref($), {
              class: "flex h-8 cursor-pointer items-center gap-1.5 px-3 shadow-none focus:outline-none",
              type: "button",
              variant: "outlined",
              onClick: t2[0] || (t2[0] = (o2) => c("close"))
            }, {
              default: withCtx(() => t2[1] || (t2[1] = [
                createTextVNode(" Cancel ")
              ])),
              _: 1
            }),
            createVNode(unref($), {
              class: "flex h-8 cursor-pointer items-center gap-1.5 px-3 shadow-none focus:outline-none",
              type: "submit",
              onClick: x3
            }, {
              default: withCtx(() => {
                var o2;
                return [
                  createTextVNode(" Delete " + toDisplayString((o2 = e.scheme) == null ? void 0 : o2.label), 1)
                ];
              }),
              _: 1
            })
          ])
        ];
      }),
      _: 1
    }, 8, ["state"]));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/RequestSection/helpers/update-scheme.js
var g = (o2, r, n, { securitySchemeMutators: a, securitySchemes: S2 }, f5 = false) => {
  var c;
  if (a.edit(o2, r, n), !!f5)
    try {
      const e = JSON.parse(safeLocalStorage().getItem(CLIENT_LS_KEYS.AUTH) ?? "{}"), t2 = S2[o2];
      if (e && (t2 != null && t2.nameKey)) {
        const i3 = e[c = t2.nameKey] || (e[c] = {});
        i3[r] = n, safeLocalStorage().setItem(CLIENT_LS_KEYS.AUTH, JSON.stringify(e));
      }
    } catch (e) {
      console.error(e);
    }
};

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/DataTable/DataTableCheckbox.vue.js
var f3 = ["checked", "disabled"];
var y = defineComponent({
  __name: "DataTableCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean },
    align: { default: "center" }
  },
  emits: ["update:modelValue"],
  setup(h) {
    const s3 = cva({
      base: "w-8 h-8 flex items-center justify-center text-border peer-checked:text-c-1 pointer-events-none absolute",
      variants: {
        align: {
          left: "left-0",
          center: "centered"
        }
      }
    });
    return (e, o2) => (openBlock(), createBlock(f, { class: "group/cell relative flex min-w-8" }, {
      default: withCtx(() => [
        createBaseVNode("input", {
          checked: e.modelValue,
          class: "peer absolute inset-0 cursor-pointer opacity-0 disabled:cursor-default",
          disabled: !!e.disabled,
          type: "checkbox",
          onChange: o2[0] || (o2[0] = (r) => e.$emit("update:modelValue", r.target.checked))
        }, null, 40, f3),
        createBaseVNode("div", {
          class: normalizeClass(unref(s3)({ align: e.align }))
        }, [
          createBaseVNode("div", {
            class: normalizeClass([
              "absolute m-auto size-3/4 rounded border-[1px] opacity-0",
              !e.disabled && "group-has-[:focus-visible]/cell:border-c-accent group-hover/cell:opacity-100 group-has-[:focus-visible]/cell:opacity-100"
            ])
          }, null, 2),
          createVNode(unref(m), {
            icon: "Checkmark",
            size: "xs",
            thickness: "2.5"
          })
        ], 2)
      ]),
      _: 1
    }));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/RequestSection/RequestAuth/OAuthScopesInput.vue.js
var P = { class: "flex h-fit w-full" };
var U = { class: "flex-1" };
var q = { class: "flex items-center gap-1.75" };
var G = {
  class: "grid auto-rows-auto",
  style: { gridTemplateColumns: "1fr auto" }
};
var H = { key: 0 };
var J = { class: "font-code text-xs" };
var ee = defineComponent({
  __name: "OAuthScopesInput",
  props: {
    flow: {},
    updateScheme: { type: Function }
  },
  setup(t2) {
    const $4 = computed(
      () => {
        var e;
        return Object.entries(((e = t2.flow) == null ? void 0 : e.scopes) ?? {}).map(([l, n]) => ({
          id: l,
          label: l,
          description: n
        }));
      }
    ), d3 = computed(() => {
      var e;
      return ((e = t2.flow) == null ? void 0 : e.selectedScopes) || [];
    });
    function B3(e, l) {
      l ? t2.updateScheme(`flows.${t2.flow.type}.selectedScopes`, [
        ...d3.value,
        e
      ]) : t2.updateScheme(
        `flows.${t2.flow.type}.selectedScopes`,
        d3.value.filter((n) => n !== e)
      );
    }
    function O() {
      var e;
      t2.updateScheme(
        `flows.${t2.flow.type}.selectedScopes`,
        Object.keys(((e = t2.flow) == null ? void 0 : e.scopes) ?? {})
      );
    }
    return (e, l) => (openBlock(), createBlock(unref(f), { class: "h-auto !max-h-[initial] min-h-8 items-center" }, {
      default: withCtx(() => [
        createBaseVNode("div", P, [
          l[1] || (l[1] = createBaseVNode("div", { class: "text-c-1 h-full items-center" }, null, -1)),
          createVNode(unref(N), {
            as: "div",
            class: "bl flex w-full flex-col"
          }, {
            default: withCtx(() => {
              var n, w3;
              return [
                createVNode(unref(Q), {
                  class: normalizeClass([
                    "group/scopes-accordion hover:text-c-1 flex h-auto min-h-8 cursor-pointer items-center gap-1.5 pr-2.25 pl-3 text-left",
                    (((w3 = (n = e.flow) == null ? void 0 : n.selectedScopes) == null ? void 0 : w3.length) || 0) > 0 ? "text-c-1" : "text-c-3"
                  ])
                }, {
                  default: withCtx(({ open: s3 }) => {
                    var f5, r, p2, x3, S2, v2, g2, b2;
                    return [
                      createBaseVNode("div", U, " Scopes Selected " + toDisplayString(((r = (f5 = e.flow) == null ? void 0 : f5.selectedScopes) == null ? void 0 : r.length) || 0) + " / " + toDisplayString(Object.keys(((p2 = e.flow) == null ? void 0 : p2.scopes) ?? {}).length || 0), 1),
                      createBaseVNode("div", q, [
                        ((S2 = (x3 = e.flow) == null ? void 0 : x3.selectedScopes) == null ? void 0 : S2.length) > 4 && s3 && ((g2 = (v2 = e.flow) == null ? void 0 : v2.selectedScopes) == null ? void 0 : g2.length) < Object.keys(((b2 = e.flow) == null ? void 0 : b2.scopes) ?? {}).length ? (openBlock(), createBlock(unref($), {
                          key: 0,
                          class: "text-c-3 hover:bg-b-2 hover:text-c-1 rounded px-1.5",
                          size: "sm",
                          onClick: withModifiers(O, ["stop"])
                        }, {
                          default: withCtx(() => l[0] || (l[0] = [
                            createTextVNode(" Select All ")
                          ])),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(unref(m), {
                          class: "text-c-3 group-hover/scopes-accordion:text-c-2",
                          icon: s3 ? "ChevronDown" : "ChevronRight",
                          size: "md"
                        }, null, 8, ["icon"])
                      ])
                    ];
                  }),
                  _: 1
                }, 8, ["class"]),
                createVNode(unref(V), { as: "template" }, {
                  default: withCtx(() => [
                    createBaseVNode("table", G, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList($4.value, ({ id: s3, label: f5, description: r }) => (openBlock(), createBlock(unref(d), {
                        key: s3,
                        class: "text-c-2",
                        onClick: (p2) => B3(s3, !d3.value.includes(s3))
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(f), { class: "hover:text-c-1 box-border !max-h-[initial] w-full cursor-pointer px-3 py-1.5" }, {
                            default: withCtx(() => [
                              r ? (openBlock(), createElementBlock("div", H, [
                                createBaseVNode("span", J, toDisplayString(f5), 1),
                                createTextVNode(" – " + toDisplayString(r), 1)
                              ])) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(unref(y), {
                            modelValue: d3.value.includes(s3),
                            "onUpdate:modelValue": () => {
                            }
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 2
                      }, 1032, ["onClick"]))), 128))
                    ])
                  ]),
                  _: 1
                })
              ];
            }),
            _: 1
          })
        ])
      ]),
      _: 1
    }));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/RequestSection/RequestAuth/RequestAuthDataTableInput.vue.js
var v = ["for"];
var k3 = defineComponent({
  __name: "RequestAuthDataTableInput",
  props: {
    type: {},
    containerClass: {},
    required: { type: Boolean, default: false },
    modelValue: {},
    readOnly: { type: Boolean, default: false },
    environment: {},
    envVariables: {},
    workspace: {}
  },
  emits: ["update:modelValue", "inputFocus", "inputBlur", "selectVariable"],
  setup(i3, { emit: d3 }) {
    const e = i3, a = d3, l = useId();
    return (o2, n) => (openBlock(), createBlock(f2, mergeProps({
      id: unref(l),
      canAddCustomEnumValue: !e.readOnly,
      containerClass: e.containerClass
    }, o2.$attrs, {
      envVariables: e.envVariables,
      environment: e.environment,
      lineWrapping: "",
      modelValue: e.modelValue,
      readOnly: e.readOnly,
      required: e.required,
      type: e.type,
      workspace: e.workspace,
      onInputBlur: n[0] || (n[0] = (t2) => a("inputBlur")),
      onInputFocus: n[1] || (n[1] = (t2) => a("inputFocus")),
      onSelectVariable: n[2] || (n[2] = (t2) => a("selectVariable", t2)),
      "onUpdate:modelValue": n[3] || (n[3] = (t2) => a("update:modelValue", t2))
    }), {
      default: withCtx(() => [
        createBaseVNode("label", { for: unref(l) }, [
          renderSlot(o2.$slots, "default")
        ], 8, v)
      ]),
      icon: withCtx(() => [
        renderSlot(o2.$slots, "icon")
      ]),
      _: 3
    }, 16, ["id", "canAddCustomEnumValue", "containerClass", "envVariables", "environment", "modelValue", "readOnly", "required", "type", "workspace"]));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/libs/oauth2.js
var S = () => {
  const e = new Uint8Array(32);
  return crypto.getRandomValues(e), btoa(String.fromCharCode(...e)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
};
var x2 = async (e, l) => {
  if (l === "plain")
    return e;
  const a = new TextEncoder().encode(e), c = await crypto.subtle.digest("SHA-256", a);
  return btoa(String.fromCharCode(...new Uint8Array(c))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
};
var k4 = async (e, l, d3) => {
  try {
    if (!e)
      return [new Error("Flow not found"), null];
    const a = e.selectedScopes.join(" ");
    if (e.type === "clientCredentials" || e.type === "password")
      return P2(e, a, {
        proxyUrl: d3
      });
    const c = (Math.random() + 1).toString(36).substring(2, 10), t2 = new URL(e.authorizationUrl);
    let u = null;
    if (e.type === "implicit")
      t2.searchParams.set("response_type", "token");
    else if (e.type === "authorizationCode" && (t2.searchParams.set("response_type", "code"), e["x-usePkce"] !== "no")) {
      const r = S(), n = await x2(r, e["x-usePkce"]);
      u = {
        codeVerifier: r,
        codeChallenge: n,
        codeChallengeMethod: e["x-usePkce"] === "SHA-256" ? "S256" : "plain"
      }, t2.searchParams.set("code_challenge", n), t2.searchParams.set("code_challenge_method", u.codeChallengeMethod);
    }
    if (e["x-scalar-redirect-uri"].startsWith("/")) {
      const r = l.url || window.location.origin + window.location.pathname, n = new URL(e["x-scalar-redirect-uri"], r).toString();
      t2.searchParams.set("redirect_uri", n);
    } else
      t2.searchParams.set("redirect_uri", e["x-scalar-redirect-uri"]);
    e["x-scalar-security-query"] && Object.keys(e["x-scalar-security-query"]).forEach((r) => {
      var i3;
      const n = (i3 = e["x-scalar-security-query"]) == null ? void 0 : i3[r];
      n && t2.searchParams.set(r, n);
    }), t2.searchParams.set("client_id", e["x-scalar-client-id"]), t2.searchParams.set("state", c), a && t2.searchParams.set("scope", a);
    const s3 = window.open(t2, "openAuth2Window", "left=100,top=100,width=800,height=600");
    return s3 ? new Promise((r) => {
      const n = setInterval(() => {
        var _4;
        let i3 = null, h = null, p2 = null, g2 = null;
        try {
          const o2 = new URL(s3.location.href).searchParams;
          i3 = o2.get("access_token"), h = o2.get("code"), p2 = o2.get("error"), g2 = o2.get("error_description");
          const m4 = new URLSearchParams(s3.location.href.split("#")[1]);
          i3 || (i3 = m4.get("access_token")), h || (h = m4.get("code")), p2 || (p2 = m4.get("error")), g2 || (g2 = m4.get("error_description"));
        } catch {
        }
        if (s3.closed || i3 || h || p2)
          if (clearInterval(n), s3.close(), p2)
            r([new Error(`OAuth error: ${p2}${g2 ? ` (${g2})` : ""}`), null]);
          else if (i3) {
            const o2 = (_4 = s3.location.href.match(/state=([^&]*)/)) == null ? void 0 : _4[1];
            r(o2 === c ? [null, i3] : [new Error("State mismatch"), null]);
          } else h ? new URL(s3.location.href).searchParams.get("state") === c ? P2(e, a, {
            code: h,
            pkce: u,
            proxyUrl: d3
          }).then(r) : r([new Error("State mismatch"), null]) : (clearInterval(n), r([new Error("Window was closed without granting authorization"), null]));
      }, 200);
    }) : [new Error("Failed to open auth window"), null];
  } catch {
    return [new Error("Failed to authorize oauth2 flow"), null];
  }
};
var P2 = async (e, l, {
  code: d3,
  pkce: a,
  proxyUrl: c
} = {}) => {
  if (!e)
    return [new Error("OAuth2 flow was not defined"), null];
  const t2 = new URLSearchParams();
  t2.set("client_id", e["x-scalar-client-id"]), l && (e.type === "clientCredentials" || e.type === "password") && t2.set("scope", l), e.clientSecret && t2.set("client_secret", e.clientSecret), "x-scalar-redirect-uri" in e && e["x-scalar-redirect-uri"] && t2.set("redirect_uri", e["x-scalar-redirect-uri"]), d3 ? (t2.set("code", d3), t2.set("grant_type", "authorization_code"), a && t2.set("code_verifier", a.codeVerifier)) : e.type === "password" ? (t2.set("grant_type", "password"), t2.set("username", e.username), t2.set("password", e.password)) : t2.set("grant_type", "client_credentials");
  try {
    const u = {
      "Content-Type": "application/x-www-form-urlencoded"
    };
    e.clientSecret && (u.Authorization = `Basic ${btoa(`${e["x-scalar-client-id"]}:${e.clientSecret}`)}`);
    const y2 = shouldUseProxy(c, e.tokenUrl) ? `${c}?${new URLSearchParams([["scalar_url", e.tokenUrl]]).toString()}` : e.tokenUrl, s3 = await fetch(y2, {
      method: "POST",
      headers: u,
      body: t2
    }), { access_token: r } = await s3.json();
    return [null, r];
  } catch {
    return [new Error("Failed to get an access token. Please check your credentials."), null];
  }
};

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/RequestSection/RequestAuth/OAuth2.vue.js
var I = { class: "flex h-8 items-center justify-end gap-2 border-t" };
var N2 = { class: "flex h-8 w-full items-center justify-end border-t" };
var Y = defineComponent({
  __name: "OAuth2",
  props: {
    collection: {},
    environment: {},
    envVariables: {},
    flow: {},
    persistAuth: { type: Boolean, default: false },
    scheme: {},
    server: {},
    workspace: {}
  },
  setup(s3) {
    const y2 = x(), { toast: g2 } = i(), C2 = je(), n = (l, e) => g(s3.scheme.uid, l, e, C2, s3.persistAuth), S2 = async () => {
      var t2, v2;
      if (y2.isLoading || !((t2 = s3.collection) != null && t2.uid))
        return;
      if (!s3.server) {
        g2("No server selected", "error");
        return;
      }
      y2.startLoading();
      const [l, e] = await k4(
        s3.flow,
        s3.server,
        (v2 = s3.workspace) == null ? void 0 : v2.proxyUrl
      ).finally(() => y2.stopLoading());
      e ? n(`flows.${s3.flow.type}.token`, e) : (console.error(l), g2((l == null ? void 0 : l.message) ?? "Failed to authorize", "error"));
    }, i3 = {
      environment: s3.environment,
      envVariables: s3.envVariables,
      workspace: s3.workspace
    };
    return (l, e) => (openBlock(), createElementBlock(Fragment, null, [
      l.flow.token ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createVNode(unref(d), null, {
          default: withCtx(() => [
            createVNode(k3, mergeProps(i3, {
              class: "border-r-transparent",
              modelValue: l.flow.token,
              placeholder: "QUxMIFlPVVIgQkFTRSBBUkUgQkVMT05HIFRPIFVT",
              type: "password",
              "onUpdate:modelValue": e[0] || (e[0] = (t2) => n(`flows.${l.flow.type}.token`, t2))
            }), {
              default: withCtx(() => e[10] || (e[10] = [
                createTextVNode(" Access Token ")
              ])),
              _: 1
            }, 16, ["modelValue"])
          ]),
          _: 1
        }),
        createVNode(unref(d), { class: "min-w-full" }, {
          default: withCtx(() => [
            createBaseVNode("div", I, [
              createVNode(unref($), {
                class: "mr-1 p-0 px-2 py-0.5",
                loading: unref(y2),
                size: "sm",
                variant: "outlined",
                onClick: e[1] || (e[1] = (t2) => n(`flows.${l.flow.type}.token`, ""))
              }, {
                default: withCtx(() => e[11] || (e[11] = [
                  createTextVNode(" Clear ")
                ])),
                _: 1
              }, 8, ["loading"])
            ])
          ]),
          _: 1
        })
      ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        createVNode(unref(d), null, {
          default: withCtx(() => [
            "authorizationUrl" in l.flow ? (openBlock(), createBlock(k3, mergeProps({ key: 0 }, i3, {
              containerClass: "border-r-0",
              modelValue: l.flow.authorizationUrl,
              placeholder: "https://galaxy.scalar.com/authorize",
              "onUpdate:modelValue": e[2] || (e[2] = (t2) => n(`flows.${l.flow.type}.authorizationUrl`, t2))
            }), {
              default: withCtx(() => e[12] || (e[12] = [
                createTextVNode(" Auth URL ")
              ])),
              _: 1
            }, 16, ["modelValue"])) : createCommentVNode("", true),
            "tokenUrl" in l.flow ? (openBlock(), createBlock(k3, mergeProps({ key: 1 }, i3, {
              modelValue: l.flow.tokenUrl,
              placeholder: "https://galaxy.scalar.com/token",
              "onUpdate:modelValue": e[3] || (e[3] = (t2) => n(`flows.${l.flow.type}.tokenUrl`, t2))
            }), {
              default: withCtx(() => e[13] || (e[13] = [
                createTextVNode(" Token URL ")
              ])),
              _: 1
            }, 16, ["modelValue"])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        "x-scalar-redirect-uri" in l.flow ? (openBlock(), createBlock(unref(d), { key: 0 }, {
          default: withCtx(() => [
            createVNode(k3, mergeProps(i3, {
              modelValue: l.flow["x-scalar-redirect-uri"],
              placeholder: "https://galaxy.scalar.com/callback",
              "onUpdate:modelValue": e[4] || (e[4] = (t2) => n(`flows.${l.flow.type}.x-scalar-redirect-uri`, t2))
            }), {
              default: withCtx(() => e[14] || (e[14] = [
                createTextVNode(" Redirect URL ")
              ])),
              _: 1
            }, 16, ["modelValue"])
          ]),
          _: 1
        })) : createCommentVNode("", true),
        l.flow.type === "password" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createVNode(unref(d), null, {
            default: withCtx(() => [
              createVNode(k3, mergeProps(i3, {
                class: "text-c-2",
                modelValue: l.flow.username,
                placeholder: "janedoe",
                "onUpdate:modelValue": e[5] || (e[5] = (t2) => n(`flows.${l.flow.type}.username`, t2))
              }), {
                default: withCtx(() => e[15] || (e[15] = [
                  createTextVNode(" Username ")
                ])),
                _: 1
              }, 16, ["modelValue"])
            ]),
            _: 1
          }),
          createVNode(unref(d), null, {
            default: withCtx(() => [
              createVNode(k3, mergeProps(i3, {
                modelValue: l.flow.password,
                placeholder: "********",
                type: "password",
                "onUpdate:modelValue": e[6] || (e[6] = (t2) => n(`flows.${l.flow.type}.password`, t2))
              }), {
                default: withCtx(() => e[16] || (e[16] = [
                  createTextVNode(" Password ")
                ])),
                _: 1
              }, 16, ["modelValue"])
            ]),
            _: 1
          })
        ], 64)) : createCommentVNode("", true),
        createVNode(unref(d), null, {
          default: withCtx(() => [
            createVNode(k3, mergeProps(i3, {
              modelValue: l.flow["x-scalar-client-id"],
              placeholder: "12345",
              "onUpdate:modelValue": e[7] || (e[7] = (t2) => n(`flows.${l.flow.type}.x-scalar-client-id`, t2))
            }), {
              default: withCtx(() => e[17] || (e[17] = [
                createTextVNode(" Client ID ")
              ])),
              _: 1
            }, 16, ["modelValue"])
          ]),
          _: 1
        }),
        "clientSecret" in l.flow ? (openBlock(), createBlock(unref(d), { key: 2 }, {
          default: withCtx(() => [
            createVNode(k3, mergeProps(i3, {
              modelValue: l.flow.clientSecret,
              placeholder: "XYZ123",
              type: "password",
              "onUpdate:modelValue": e[8] || (e[8] = (t2) => n(`flows.${l.flow.type}.clientSecret`, t2))
            }), {
              default: withCtx(() => e[18] || (e[18] = [
                createTextVNode(" Client Secret ")
              ])),
              _: 1
            }, 16, ["modelValue"])
          ]),
          _: 1
        })) : createCommentVNode("", true),
        "x-usePkce" in l.flow ? (openBlock(), createBlock(unref(d), { key: 3 }, {
          default: withCtx(() => [
            createVNode(k3, mergeProps(i3, {
              enum: unref(pkceOptions),
              modelValue: l.flow["x-usePkce"],
              readOnly: "",
              "onUpdate:modelValue": e[9] || (e[9] = (t2) => n(
                `flows.${l.flow.type}.x-usePkce`,
                t2
              ))
            }), {
              default: withCtx(() => e[19] || (e[19] = [
                createTextVNode(" Use PKCE ")
              ])),
              _: 1
            }, 16, ["enum", "modelValue"])
          ]),
          _: 1
        })) : createCommentVNode("", true),
        Object.keys(l.flow.scopes ?? {}).length ? (openBlock(), createBlock(unref(d), { key: 4 }, {
          default: withCtx(() => [
            createVNode(ee, {
              flow: l.flow,
              updateScheme: n
            }, null, 8, ["flow"])
          ]),
          _: 1
        })) : createCommentVNode("", true)
      ], 64)),
      l.flow.token ? createCommentVNode("", true) : (openBlock(), createBlock(unref(d), {
        key: 2,
        class: "min-w-full"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", N2, [
            createVNode(unref($), {
              class: "mr-0.75 p-0 px-2 py-0.5",
              loading: unref(y2),
              size: "sm",
              variant: "outlined",
              onClick: S2
            }, {
              default: withCtx(() => e[20] || (e[20] = [
                createTextVNode(" Authorize ")
              ])),
              _: 1
            }, 8, ["loading"])
          ])
        ]),
        _: 1
      }))
    ], 64));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/RequestSection/RequestAuth/RequestAuthTab.vue2.js
var J2 = {
  key: 0,
  class: "flex min-h-8 border-t text-sm"
};
var Y2 = { class: "flex h-8 max-w-full gap-2.5 overflow-x-auto px-3" };
var W2 = ["onClick"];
var G2 = { class: "relative z-10" };
var ue = defineComponent({
  __name: "RequestAuthTab",
  props: {
    collection: {},
    environment: {},
    envVariables: {},
    layout: {},
    persistAuth: { type: Boolean, default: false },
    securitySchemeUids: {},
    server: {},
    workspace: {}
  },
  setup(c) {
    const T = je(), { collectionMutators: L, securitySchemes: x3, securitySchemeMutators: M2 } = T, $4 = computed(
      () => c.securitySchemeUids.map((t2) => ({
        scheme: x3[t2]
      }))
    ), s3 = ref(""), O = (t2) => {
      const r = t2.description ? `: ${t2.description}` : "", e = `${capitalize(t2.nameKey)}${r || `: ${t2.type}`}`;
      if (t2.type === "apiKey")
        return `${capitalize(t2.nameKey)}${r || `: ${t2.in}`}`;
      if (t2.type === "oauth2") {
        const o2 = Object.values(t2.flows ?? {})[0];
        return `${capitalize(t2.nameKey)}: ${s3.value ? s3.value : (o2 == null ? void 0 : o2.type) ?? ""}${r}`;
      }
      return t2.type === "http" ? `${capitalize(t2.nameKey)}: ${t2.scheme}${r}` : `${e}${r}`;
    }, k5 = (t2, r, e) => {
      g(t2, r, e, T, c.persistAuth);
    };
    onMounted(() => {
      if (!c.persistAuth)
        return;
      const t2 = JSON.parse(
        safeLocalStorage().getItem(CLIENT_LS_KEYS.AUTH) ?? "{}"
      ), r = Object.keys(x3).reduce(
        (e, o2) => {
          const a = x3[o2];
          return a && (e[a.nameKey] = a.uid), e;
        },
        {}
      );
      Object.entries(t2).forEach(([e, o2]) => {
        const a = r[e];
        a && Object.entries(o2).forEach(([E2, K]) => {
          M2.edit(a, E2, K);
        });
      });
      try {
        const o2 = JSON.parse(
          safeLocalStorage().getItem(CLIENT_LS_KEYS.SELECTED_SECURITY_SCHEMES) ?? ""
        ).map((a) => Array.isArray(a) ? a.map((y2) => r[y2]).filter(isDefined) : r[a]).filter(isDefined);
        L.edit(c.collection.uid, "selectedSecuritySchemeUids", o2);
      } catch {
      }
    });
    const b2 = {
      environment: c.environment,
      envVariables: c.envVariables,
      workspace: c.workspace
    };
    return (t2, r) => (openBlock(true), createElementBlock(Fragment, null, renderList($4.value, ({ scheme: e }) => (openBlock(), createElementBlock(Fragment, {
      key: e == null ? void 0 : e.uid
    }, [
      $4.value.length > 1 ? (openBlock(), createBlock(unref(d), {
        key: 0,
        class: normalizeClass({
          "request-example-references-header": t2.layout === "reference"
        })
      }, {
        default: withCtx(() => [
          createVNode(unref(f), {
            class: normalizeClass(["text-c-2 flex items-center pl-3", t2.layout === "reference" && "border-b"])
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(O(e)), 1)
            ]),
            _: 2
          }, 1032, ["class"])
        ]),
        _: 2
      }, 1032, ["class"])) : createCommentVNode("", true),
      e != null && e.description && $4.value.length <= 1 ? (openBlock(), createBlock(unref(d), { key: 1 }, {
        default: withCtx(() => [
          createVNode(unref(f), {
            "aria-label": e.description,
            class: "text-c-2 auth-description-container group/auth -mb-0.25 flex items-center whitespace-nowrap outline-none hover:whitespace-normal"
          }, {
            default: withCtx(() => [
              createVNode(unref(_), {
                class: "auth-description bg-b-1 text-c-2 outline-b-3 top-0 z-1 line-clamp-1 h-full w-full px-3 py-1.5 group-hover/auth:line-clamp-none",
                value: e.description
              }, null, 8, ["value"])
            ]),
            _: 2
          }, 1032, ["aria-label"])
        ]),
        _: 2
      }, 1024)) : createCommentVNode("", true),
      (e == null ? void 0 : e.type) === "http" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
        e.scheme === "bearer" ? (openBlock(), createBlock(unref(d), { key: 0 }, {
          default: withCtx(() => [
            createVNode(k3, mergeProps({ ref_for: true }, b2, {
              containerClass: t2.layout === "reference" && "border-t",
              modelValue: e.token,
              placeholder: "Token",
              type: "password",
              "onUpdate:modelValue": (o2) => k5(e.uid, "token", o2)
            }), {
              default: withCtx(() => r[0] || (r[0] = [
                createTextVNode(" Bearer Token ")
              ])),
              _: 2
            }, 1040, ["containerClass", "modelValue", "onUpdate:modelValue"])
          ]),
          _: 2
        }, 1024)) : (e == null ? void 0 : e.scheme) === "basic" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createVNode(unref(d), null, {
            default: withCtx(() => [
              createVNode(k3, mergeProps({ ref_for: true }, b2, {
                class: "text-c-2",
                containerClass: t2.layout === "reference" && "auth-blend-required border-t",
                modelValue: e.username,
                placeholder: "janedoe",
                required: "",
                "onUpdate:modelValue": (o2) => k5(e.uid, "username", o2)
              }), {
                default: withCtx(() => r[1] || (r[1] = [
                  createTextVNode(" Username ")
                ])),
                _: 2
              }, 1040, ["containerClass", "modelValue", "onUpdate:modelValue"])
            ]),
            _: 2
          }, 1024),
          createVNode(unref(d), null, {
            default: withCtx(() => [
              createVNode(k3, mergeProps({ ref_for: true }, b2, {
                modelValue: e.password,
                placeholder: "********",
                type: "password",
                "onUpdate:modelValue": (o2) => k5(e.uid, "password", o2)
              }), {
                default: withCtx(() => r[2] || (r[2] = [
                  createTextVNode(" Password ")
                ])),
                _: 2
              }, 1040, ["modelValue", "onUpdate:modelValue"])
            ]),
            _: 2
          }, 1024)
        ], 64)) : createCommentVNode("", true)
      ], 64)) : (e == null ? void 0 : e.type) === "apiKey" ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
        createVNode(unref(d), null, {
          default: withCtx(() => [
            createVNode(k3, mergeProps({ ref_for: true }, b2, {
              containerClass: t2.layout === "reference" && "border-t",
              modelValue: e.name,
              placeholder: "api-key",
              "onUpdate:modelValue": (o2) => k5(e.uid, "name", o2)
            }), {
              default: withCtx(() => r[3] || (r[3] = [
                createTextVNode(" Name ")
              ])),
              _: 2
            }, 1040, ["containerClass", "modelValue", "onUpdate:modelValue"])
          ]),
          _: 2
        }, 1024),
        createVNode(unref(d), null, {
          default: withCtx(() => [
            createVNode(k3, mergeProps({ ref_for: true }, b2, {
              modelValue: e.value,
              placeholder: "QUxMIFlPVVIgQkFTRSBBUkUgQkVMT05HIFRPIFVT",
              type: "password",
              "onUpdate:modelValue": (o2) => k5(e.uid, "value", o2)
            }), {
              default: withCtx(() => r[4] || (r[4] = [
                createTextVNode(" Value ")
              ])),
              _: 2
            }, 1040, ["modelValue", "onUpdate:modelValue"])
          ]),
          _: 2
        }, 1024)
      ], 64)) : (e == null ? void 0 : e.type) === "oauth2" ? (openBlock(), createElementBlock(Fragment, { key: 4 }, [
        createVNode(unref(d), null, {
          default: withCtx(() => [
            Object.keys(e.flows).length > 1 ? (openBlock(), createElementBlock("div", J2, [
              createBaseVNode("div", Y2, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(e == null ? void 0 : e.flows, (o2, a, y2) => (openBlock(), createElementBlock("button", {
                  key: a,
                  class: normalizeClass(["floating-bg text-c-3 relative cursor-pointer border-b-[1px] border-transparent py-1 text-sm font-medium", {
                    "!text-c-1 !rounded-none border-b-[1px] !border-current": t2.layout !== "reference" && (s3.value === a || y2 === 0 && !s3.value),
                    "!text-c-1 !rounded-none border-b-[1px] !border-current opacity-100": t2.layout === "reference" && (s3.value === a || y2 === 0 && !s3.value)
                  }]),
                  type: "button",
                  onClick: (E2) => s3.value = a
                }, [
                  createBaseVNode("span", G2, toDisplayString(a), 1)
                ], 10, W2))), 128))
              ])
            ])) : createCommentVNode("", true)
          ]),
          _: 2
        }, 1024),
        (openBlock(true), createElementBlock(Fragment, null, renderList(e == null ? void 0 : e.flows, (o2, a, y2) => (openBlock(), createElementBlock(Fragment, { key: a }, [
          s3.value === a || y2 === 0 && !s3.value ? (openBlock(), createBlock(Y, mergeProps({
            key: 0,
            ref_for: true
          }, b2, {
            collection: t2.collection,
            flow: o2,
            persistAuth: t2.persistAuth,
            scheme: e,
            server: t2.server,
            workspace: t2.workspace
          }), null, 16, ["collection", "flow", "persistAuth", "scheme", "server", "workspace"])) : createCommentVNode("", true)
        ], 64))), 128))
      ], 64)) : (e == null ? void 0 : e.type) === "openIdConnect" ? (openBlock(), createElementBlock("div", {
        key: 5,
        class: normalizeClass(["text-c-3 bg-b-1 flex min-h-[calc(4rem+1px)] items-center justify-center border-t border-b-0 px-4 text-sm", { "rounded-b-lg": t2.layout === "reference" }])
      }, " Coming soon ", 2)) : createCommentVNode("", true)
    ], 64))), 128));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/RequestSection/RequestAuth/RequestAuthTab.vue.js
var m3 = s(ue, [["__scopeId", "data-v-7289bc09"]]);

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/RequestSection/RequestAuth/RequestAuthDataTable.vue2.js
var M = ["onClick"];
var N3 = { class: "relative z-10 font-medium whitespace-nowrap" };
var $3 = {
  key: 0,
  class: "absolute inset-x-1 bottom-[var(--scalar-border-width)] left-1/2 z-1 h-px w-full -translate-x-1/2 bg-current"
};
var j = defineComponent({
  __name: "RequestAuthDataTable",
  props: {
    collection: {},
    environment: {},
    envVariables: {},
    layout: { default: "client" },
    persistAuth: { type: Boolean, default: false },
    selectedSchemeOptions: { default: () => [] },
    server: {},
    workspace: {}
  },
  setup(c) {
    const u = W(), b2 = ref(
      null
    ), t2 = ref(0), d3 = computed(() => {
      const e = c.selectedSchemeOptions[t2.value];
      if (!e)
        return [];
      const r = e == null ? void 0 : e.id.split(",");
      return r.length > 1 ? r : [e.id];
    });
    return watch(
      () => c.selectedSchemeOptions,
      (e) => {
        e[t2.value] || (t2.value = Math.max(0, t2.value - 1));
      }
    ), (e, r) => (openBlock(), createElementBlock("form", {
      onSubmit: r[1] || (r[1] = withModifiers(() => {
      }, ["prevent"]))
    }, [
      e.selectedSchemeOptions.length > 1 ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["box-content flex h-8 flex-wrap gap-x-2.5 overflow-hidden border border-b-0 px-3", e.layout === "client" && "border-r-0"])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(e.selectedSchemeOptions, (n, a) => (openBlock(), createElementBlock("div", {
          key: n.id,
          class: normalizeClass(["relative z-1 -mb-[var(--scalar-border-width)] flex h-8 cursor-pointer", [t2.value === a ? "text-c-1" : "text-c-3"]])
        }, [
          createBaseVNode("button", {
            class: "floating-bg relative cursor-pointer border-b-[1px] border-transparent py-1 text-sm font-medium",
            type: "button",
            onClick: (q2) => t2.value = a
          }, [
            createBaseVNode("span", N3, toDisplayString(n.label), 1)
          ], 8, M),
          t2.value === a ? (openBlock(), createElementBlock("div", $3)) : createCommentVNode("", true)
        ], 2))), 128))
      ], 2)) : createCommentVNode("", true),
      d3.value.length ? (openBlock(), createBlock(unref(_2), {
        key: 1,
        class: normalizeClass(["flex-1", e.layout === "reference" && "bg-b-1 rounded-b-lg border border-t-0"]),
        columns: [""],
        presentational: ""
      }, {
        default: withCtx(() => [
          createVNode(m3, {
            collection: e.collection,
            envVariables: e.envVariables,
            environment: e.environment,
            layout: e.layout,
            persistAuth: e.persistAuth,
            securitySchemeUids: d3.value,
            server: e.server,
            workspace: e.workspace
          }, null, 8, ["collection", "envVariables", "environment", "layout", "persistAuth", "securitySchemeUids", "server", "workspace"])
        ]),
        _: 1
      }, 8, ["class"])) : (openBlock(), createElementBlock("div", {
        key: 2,
        class: normalizeClass([
          "text-c-3 bg-b-1 flex min-h-16 items-center justify-center border-t px-4 text-sm",
          e.layout === "reference" && "min-h-[calc(4rem+0.5px)] rounded-b-lg border"
        ])
      }, " No authentication selected ", 2)),
      createVNode(B2, {
        scheme: b2.value,
        state: unref(u),
        onClose: r[0] || (r[0] = (n) => unref(u).hide())
      }, null, 8, ["scheme", "state"])
    ], 32));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/RequestSection/RequestAuth/RequestAuthDataTable.vue.js
var f4 = s(j, [["__scopeId", "data-v-d0e4c96f"]]);

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/consts/new-auth-options.js
var t = {
  apiKeyCookie: {
    label: "API Key in Cookies",
    payload: {
      type: "apiKey",
      in: "cookie",
      nameKey: "apiKeyCookie"
    }
  },
  apiKeyHeader: {
    label: "API Key in Headers",
    payload: {
      type: "apiKey",
      in: "header",
      nameKey: "apiKeyHeader"
    }
  },
  apiKeyQuery: {
    label: "API Key in Query Params",
    payload: {
      type: "apiKey",
      in: "query",
      nameKey: "apiKeyQuery"
    }
  },
  httpBasic: {
    label: "HTTP Basic",
    payload: {
      type: "http",
      scheme: "basic",
      nameKey: "httpBasic"
    }
  },
  httpBearer: {
    label: "HTTP Bearer",
    payload: {
      type: "http",
      scheme: "bearer",
      nameKey: "httpBearer"
    }
  },
  oauth2Implicit: {
    label: "Oauth2 Implicit Flow",
    payload: {
      type: "oauth2",
      nameKey: "oauth2Implicit",
      flows: {
        implicit: {
          type: "implicit"
        }
      }
    }
  },
  oauth2Password: {
    label: "Oauth2 Password Flow",
    payload: {
      type: "oauth2",
      nameKey: "oauth2Password",
      flows: {
        password: {
          type: "password"
        }
      }
    }
  },
  oauth2ClientCredentials: {
    label: "Oauth2 Client Credentials",
    payload: {
      type: "oauth2",
      nameKey: "oauth2ClientCredentials",
      flows: {
        clientCredentials: {
          type: "clientCredentials"
        }
      }
    }
  },
  oauth2AuthorizationFlow: {
    label: "Oauth2 Authorization Code",
    payload: {
      type: "oauth2",
      nameKey: "oauth2AuthorizationFlow",
      flows: {
        authorizationCode: {
          type: "authorizationCode"
        }
      }
    }
  }
};
var o = Object.entries(t);
var i2 = o.map(
  ([e, a]) => ({
    id: e,
    isDeletable: false,
    ...a
  })
);

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/libs/auth.js
var d2 = (t2) => ({
  id: t2.uid,
  label: t2.type === "openIdConnect" ? `${t2.nameKey} (coming soon)` : t2.nameKey
});
var b = (t2, e) => d2(
  t2.reduce(
    (r, a, i3) => {
      const m4 = e[a];
      return m4 && (r.nameKey += `${i3 > 0 ? " & " : ""}${m4.nameKey}`, r.uid = `${r.uid}${i3 > 0 ? "," : ""}${m4.uid}`), r;
    },
    { type: "complex", nameKey: "", uid: "" }
  )
);
var A = (t2, e) => {
  var r;
  return JSON.stringify(t2 == null ? void 0 : t2.security) === "[{}]" && ((r = e == null ? void 0 : e.security) != null && r.length) ? !!(e != null && e.security.find((i3) => JSON.stringify(i3) === "{}")) ? e.security : [...e.security, {}] : (t2 == null ? void 0 : t2.security) ?? (e == null ? void 0 : e.security) ?? [];
};
var D2 = (t2, e, r, a = false) => {
  {
    const i3 = e.reduce(
      (n, s3) => {
        const u = r[s3];
        return u && (n[u.nameKey] = u), n;
      },
      {}
    ), m4 = t2.flatMap((n) => {
      const s3 = Object.keys(n);
      if (s3.length > 1) {
        const u = s3.map((g2) => {
          var h;
          return (h = i3[g2]) == null ? void 0 : h.uid;
        }).filter(isDefined);
        return b(u, r);
      }
      if (s3[0]) {
        const u = i3[s3[0]];
        if (u)
          return d2(u);
      }
      return [];
    }), y2 = e.filter((n) => !m4.some((s3) => s3.id === n)).map((n) => {
      const s3 = r[n];
      return s3 ? d2(s3) : null;
    }).filter(isDefined), f5 = [
      { label: "Required authentication", options: m4 },
      { label: "Available authentication", options: y2 }
    ];
    return a ? m4.length ? f5 : y2 : (f5.push({
      label: "Add new authentication",
      options: i2
    }), f5);
  }
};

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/RequestSection/RequestAuth/RequestAuth.vue2.js
var se = ["id"];
var re = { class: "-mx-1 flex flex-1" };
var ie = { class: "text-c-1" };
var ve = defineComponent({
  __name: "RequestAuth",
  props: {
    collection: {},
    environment: {},
    envVariables: {},
    layout: {},
    operation: {},
    persistAuth: { type: Boolean, default: false },
    selectedSecuritySchemeUids: {},
    server: {},
    title: {},
    workspace: {}
  },
  setup(s3) {
    const { layout: C2 } = s2(), {
      securitySchemes: u,
      securitySchemeMutators: O,
      requestMutators: T,
      collectionMutators: w3
    } = je(), q2 = useId(), R = ref(null), h = W(), v2 = ref(
      null
    ), V3 = computed(() => {
      const e = A(s3.operation, s3.collection);
      return { filteredRequirements: e.filter((n) => Object.keys(n).length), requirements: e };
    }), g2 = computed(() => {
      const { filteredRequirements: e, requirements: t2 } = V3.value;
      if (!t2.length)
        return null;
      const o2 = !t2.some(
        (m4) => Object.keys(m4).length > 1
      ) && e.length < t2.length, l = o2 ? "Unlock" : "Lock", r = o2 ? "Optional" : "Required", L = `${e.length === 1 ? (() => {
        const m4 = Object.keys(e[0] || {});
        return m4.length > 1 ? m4.join(" & ") : m4[0] || "";
      })() : ""} ${r}`;
      return { icon: l, text: L };
    }), c = computed(
      () => s3.selectedSecuritySchemeUids.map((e) => {
        if (Array.isArray(e))
          return b(e, u);
        const t2 = u[e ?? ""];
        if (t2)
          return d2(t2);
      }).filter(isDefined)
    );
    function M2(e) {
      var o2;
      const t2 = e.find((l) => l.payload), n = e.filter((l) => !l.payload).map(({ id: l }) => {
        const r = l.split(",");
        return r.length > 1 ? r : l;
      });
      if (t2 != null && t2.payload) {
        const l = O.add(
          t2.payload,
          (o2 = s3.collection) == null ? void 0 : o2.uid
        );
        l && n.push(l.uid);
      }
      D3(n);
    }
    const D3 = (e) => {
      var t2;
      if (s3.collection.useCollectionSecurity) {
        if (w3.edit(s3.collection.uid, "selectedSecuritySchemeUids", e), !s3.persistAuth)
          return;
        const n = e.map((o2) => {
          var l;
          return Array.isArray(o2) ? o2.map((r) => {
            var b2;
            return (b2 = u[r]) == null ? void 0 : b2.nameKey;
          }) : (l = u[o2]) == null ? void 0 : l.nameKey;
        });
        safeLocalStorage().setItem(
          CLIENT_LS_KEYS.SELECTED_SECURITY_SCHEMES,
          JSON.stringify(n)
        );
      } else (t2 = s3.operation) != null && t2.uid && T.edit(s3.operation.uid, "selectedSecuritySchemeUids", e);
    };
    function U2({ id: e, label: t2 }) {
      v2.value = { id: e, label: t2 }, h.show();
    }
    const B3 = (e) => {
      var n;
      if (!e)
        return;
      const t2 = s3.selectedSecuritySchemeUids.filter((o2) => {
        const l = e.split(",");
        return l.length > 1 && Array.isArray(o2) && l.length === o2.length ? o2.every((r) => !l.includes(r)) : o2 !== e;
      });
      D3(t2), (n = R.value) == null || n.$el.focus(), h.hide();
    }, I2 = computed(
      () => {
        var e;
        return D2(
          V3.value.filteredRequirements,
          ((e = s3.collection) == null ? void 0 : e.securitySchemes) ?? [],
          u,
          C2 === "modal" || s3.layout === "reference"
        );
      }
    );
    return (e, t2) => (openBlock(), createBlock(E, {
      class: "group/params",
      itemCount: c.value.length,
      layout: e.layout
    }, {
      title: withCtx(() => [
        createBaseVNode("div", {
          id: unref(q2),
          class: "inline-flex items-center gap-1"
        }, [
          createBaseVNode("span", null, toDisplayString(e.title), 1),
          g2.value ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass(["text-c-3 text-xs leading-[normal]", { "text-c-1": g2.value.text === "Required" }])
          }, toDisplayString(g2.value.text), 3)) : createCommentVNode("", true)
        ], 8, se)
      ]),
      actions: withCtx(() => [
        createBaseVNode("div", re, [
          createVNode(unref(w), {
            class: "w-72 text-xs",
            isDeletable: unref(C2) !== "modal" && e.layout !== "reference",
            modelValue: c.value,
            multiple: "",
            options: I2.value,
            onDelete: U2,
            "onUpdate:modelValue": M2
          }, {
            default: withCtx(() => [
              createVNode(unref($), {
                ref_key: "comboboxButtonRef",
                ref: R,
                "aria-describedby": unref(q2),
                class: "hover:bg-b-3 text-c-1 hover:text-c-1 h-fit px-1.5 py-0.25 font-normal",
                fullWidth: "",
                variant: "ghost"
              }, {
                default: withCtx(() => {
                  var n;
                  return [
                    createBaseVNode("div", ie, [
                      c.value.length === 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                        t2[2] || (t2[2] = createBaseVNode("span", { class: "sr-only" }, "Select", -1)),
                        t2[3] || (t2[3] = createTextVNode(" Auth Type "))
                      ], 64)) : c.value.length === 1 ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                        t2[4] || (t2[4] = createBaseVNode("span", { class: "sr-only" }, "Selected Auth Type:", -1)),
                        createTextVNode(" " + toDisplayString((n = c.value[0]) == null ? void 0 : n.label), 1)
                      ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                        t2[5] || (t2[5] = createTextVNode(" Multiple ")),
                        t2[6] || (t2[6] = createBaseVNode("span", { class: "sr-only" }, "Auth Types Selected", -1))
                      ], 64))
                    ]),
                    createVNode(unref(m), {
                      class: "ml-1 shrink-0",
                      icon: "ChevronDown",
                      size: "sm"
                    })
                  ];
                }),
                _: 1
              }, 8, ["aria-describedby"])
            ]),
            _: 1
          }, 8, ["isDeletable", "modelValue", "options"])
        ])
      ]),
      default: withCtx(() => [
        createVNode(f4, {
          collection: e.collection,
          envVariables: e.envVariables,
          environment: e.environment,
          layout: e.layout,
          persistAuth: e.persistAuth,
          selectedSchemeOptions: c.value,
          server: e.server,
          workspace: e.workspace
        }, null, 8, ["collection", "envVariables", "environment", "layout", "persistAuth", "selectedSchemeOptions", "server", "workspace"]),
        createVNode(B2, {
          scheme: v2.value,
          state: unref(h),
          onClose: t2[0] || (t2[0] = (n) => unref(h).hide()),
          onDelete: t2[1] || (t2[1] = (n) => {
            var o2;
            return B3((o2 = v2.value) == null ? void 0 : o2.id);
          })
        }, null, 8, ["scheme", "state"])
      ]),
      _: 1
    }, 8, ["itemCount", "layout"]));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/RequestSection/RequestAuth/RequestAuth.vue.js
var p = s(ve, [["__scopeId", "data-v-653ceb53"]]);

export {
  E,
  y,
  p
};
//# sourceMappingURL=chunk-M2W7IUYR.js.map
