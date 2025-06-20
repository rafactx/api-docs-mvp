import {
  _,
  p
} from "./chunk-2NTM754O.js";
import {
  g
} from "./chunk-QMSDB3Q6.js";
import {
  r
} from "./chunk-THN2YAEB.js";
import {
  x
} from "./chunk-524CYAFW.js";
import "./chunk-VEAGBCVS.js";
import "./chunk-CUZGNH74.js";
import {
  u
} from "./chunk-S4LPBKVU.js";
import {
  q
} from "./chunk-WEGHB5FB.js";
import {
  b as b2,
  h
} from "./chunk-ALQZ3NUE.js";
import "./chunk-EDZOC5EZ.js";
import "./chunk-CFPXHNMA.js";
import {
  m as m2
} from "./chunk-NHYM5363.js";
import {
  cookieSchema
} from "./chunk-WJY4MU6S.js";
import "./chunk-GOSQUSWR.js";
import "./chunk-75A6VDJY.js";
import "./chunk-AUM3FYPR.js";
import "./chunk-64TJZ2DX.js";
import "./chunk-RDVDQCBW.js";
import {
  useRoute,
  useRouter
} from "./chunk-DWEZQID4.js";
import {
  a,
  je,
  s,
  z
} from "./chunk-ZNV4Z3VE.js";
import {
  b
} from "./chunk-XAH4TE55.js";
import {
  W,
  i,
  m4 as m
} from "./chunk-OYO2YRBV.js";
import "./chunk-3FIKATP3.js";
import {
  Fragment,
  computed,
  createBaseVNode,
  createBlock,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  onBeforeUnmount,
  onMounted,
  openBlock,
  ref,
  renderList,
  unref,
  watch,
  withCtx,
  withModifiers
} from "./chunk-XQNPNIQJ.js";
import "./chunk-DC5AMYBS.js";

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Cookies/CookieForm.vue.js
var x2 = defineComponent({
  __name: "CookieForm",
  setup(f) {
    const { activeCookieId: e } = z(), { cookies: t, cookieMutators: i2 } = je(), c = [
      { label: "Name", key: "name", placeholder: "session_id" },
      { label: "Value", key: "value", placeholder: "my-cookie-session-id" },
      { label: "Domain", key: "domain", placeholder: "example.com" }
      // TODO: We don’t check the path (yet), so we don’t need to show it.
      // { label: 'Path', key: 'path', placeholder: '/' },
    ], m3 = computed(
      () => t[e.value] || cookieSchema.parse({
        name: "",
        value: "",
        domain: "",
        path: ""
      })
    ), n = (o, a2) => {
      i2.edit(e.value, o, a2);
    };
    return (o, a2) => (openBlock(), createBlock(q, {
      data: m3.value,
      onUpdate: n,
      options: c
    }, null, 8, ["data"]));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Cookies/CookieModal.vue2.js
var U = { class: "flex h-8 items-start gap-2 text-sm" };
var $ = { class: "flex h-8 items-start gap-2 text-sm" };
var w = { class: "flex h-8 items-start gap-2 text-sm" };
var _2 = defineComponent({
  __name: "CookieModal",
  props: {
    state: {}
  },
  emits: ["cancel", "submit"],
  setup(r2, { emit: p3 }) {
    const u2 = r2, d = p3, a2 = ref({
      name: "",
      value: "",
      domain: ""
    }), { toast: f } = i(), v = () => {
      if (!a2.value.name || !a2.value.value) {
        f("Please fill in all fields before adding a cookie.", "error");
        return;
      }
      d("submit", a2.value), u2.state.hide();
    };
    return watch(
      () => u2.state.open,
      (s2) => {
        s2 && (a2.value = {
          name: "",
          value: "",
          domain: ""
        });
      }
    ), (s2, e) => (openBlock(), createBlock(unref(m), {
      size: "xs",
      state: s2.state,
      title: "Add Cookie"
    }, {
      default: withCtx(() => [
        createVNode(h, {
          disabled: !a2.value.name || !a2.value.value,
          onCancel: e[3] || (e[3] = (o) => d("cancel")),
          onSubmit: v
        }, {
          submit: withCtx(() => e[7] || (e[7] = [
            createTextVNode("Add Cookie")
          ])),
          default: withCtx(() => [
            createBaseVNode("div", U, [
              e[4] || (e[4] = createTextVNode(" Name: ")),
              createVNode(b2, {
                modelValue: a2.value.name,
                "onUpdate:modelValue": e[0] || (e[0] = (o) => a2.value.name = o),
                autofocus: "",
                class: "!p-0",
                placeholder: "session_id"
              }, null, 8, ["modelValue"])
            ]),
            createBaseVNode("div", $, [
              e[5] || (e[5] = createTextVNode(" Value: ")),
              createVNode(b2, {
                modelValue: a2.value.value,
                "onUpdate:modelValue": e[1] || (e[1] = (o) => a2.value.value = o),
                autofocus: "",
                class: "!p-0",
                placeholder: "my-cookie-session-id"
              }, null, 8, ["modelValue"])
            ]),
            createBaseVNode("div", w, [
              e[6] || (e[6] = createTextVNode(" Domain: ")),
              createVNode(b2, {
                modelValue: a2.value.domain,
                "onUpdate:modelValue": e[2] || (e[2] = (o) => a2.value.domain = o),
                autofocus: "",
                class: "!p-0",
                placeholder: "example.com"
              }, null, 8, ["modelValue"])
            ])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }, 8, ["state"]));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Cookies/CookieModal.vue.js
var p2 = s(_2, [["__scopeId", "data-v-694018d6"]]);

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Cookies/Cookies.vue2.js
var Z = { class: "flex-1" };
var ee = { class: "relative mb-[.5px] last:mb-0" };
var he = defineComponent({
  __name: "Cookies",
  setup(oe) {
    const { cookies: c, cookieMutators: p3, events: k, workspaceMutators: v } = je(), { activeWorkspace: l, activeCookieId: g2 } = z(), m3 = useRouter(), M = useRoute(), f = W(), E = (t) => {
      var e, i2;
      const o = cookieSchema.parse({
        name: t.name,
        value: t.value,
        domain: t.domain,
        path: "/"
      });
      p3.add(o), v.edit((e = l.value) == null ? void 0 : e.uid, "cookies", [
        ...((i2 = l.value) == null ? void 0 : i2.cookies) ?? [],
        o.uid
      ]), m3.push({
        name: "cookies",
        params: {
          cookies: o.uid
        }
      });
    }, N = (t) => {
      var e, i2;
      p3.delete(t), v.edit((e = l.value) == null ? void 0 : e.uid, "cookies", [
        ...(((i2 = l.value) == null ? void 0 : i2.cookies) ?? []).filter((s2) => s2 !== t)
      ]);
      const o = Object.values(c).filter(
        (s2) => s2.uid !== t
      );
      if (o.length > 0) {
        const s2 = o[o.length - 1];
        s2 && m3.push(s2.uid);
      } else
        m3.push({
          name: "cookies",
          params: {
            [a.Cookies]: "default"
          }
        });
    }, C = () => {
      f.show();
    }, _3 = (t) => {
      t != null && t.createNew && M.name === "cookies" && C();
    }, S = (t, o) => {
      var i2;
      const e = {
        name: "cookies",
        params: {
          workspace: ((i2 = l.value) == null ? void 0 : i2.uid) ?? "default",
          cookies: o
        }
      };
      if (t.metaKey) {
        const s2 = m3.resolve(e).href;
        window.open(s2, "_blank");
        return;
      }
      m3.push(e);
    };
    onMounted(() => k.hotKeys.on(_3)), onBeforeUnmount(() => k.hotKeys.off(_3));
    const $2 = computed(
      () => c[g2.value]
    ), B = computed(
      () => Object.keys(c).length > 0 && $2.value
    );
    return (t, o) => (openBlock(), createBlock(u, null, {
      default: withCtx(() => [
        createVNode(unref(m2), { title: "Cookies" }, {
          content: withCtx(() => [
            createBaseVNode("div", Z, [
              createVNode(_, null, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(Object.values(unref(c)), (e) => (openBlock(), createElementBlock("li", {
                    key: e.uid,
                    class: "gap-1/2 flex flex-col"
                  }, [
                    createBaseVNode("div", ee, [
                      (openBlock(), createBlock(p, {
                        key: e.uid,
                        class: "text-xs",
                        isDeletable: "",
                        to: {
                          name: "cookies",
                          params: {
                            [unref(a).Cookies]: e.uid
                          }
                        },
                        type: "cookies",
                        variable: { name: e.name, uid: e.uid },
                        warningMessage: "Are you sure you want to delete this cookie?",
                        onClick: withModifiers((i2) => S(i2, e.uid), ["prevent"]),
                        onDelete: (i2) => N(e.uid)
                      }, null, 8, ["to", "variable", "onClick", "onDelete"]))
                    ])
                  ]))), 128))
                ]),
                _: 1
              })
            ])
          ]),
          button: withCtx(() => [
            createVNode(g, {
              click: C,
              hotkey: "N"
            }, {
              title: withCtx(() => o[1] || (o[1] = [
                createTextVNode(" Add Cookie ")
              ])),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(x, { class: "flex-1" }, {
          default: withCtx(() => [
            B.value ? (openBlock(), createBlock(b, {
              key: 0,
              class: "*:border-b-0"
            }, {
              title: withCtx(() => o[2] || (o[2] = [
                createTextVNode("Edit Cookie")
              ])),
              default: withCtx(() => [
                createVNode(x2)
              ]),
              _: 1
            })) : (openBlock(), createBlock(r, { key: 1 }))
          ]),
          _: 1
        }),
        createVNode(p2, {
          state: unref(f),
          onCancel: o[0] || (o[0] = (e) => unref(f).hide()),
          onSubmit: E
        }, null, 8, ["state"])
      ]),
      _: 1
    }));
  }
});
export {
  he as default
};
//# sourceMappingURL=Cookies.vue-6UYVIVI5.js.map
