import {
  $ as $2
} from "./chunk-T24BVKZM.js";
import {
  d
} from "./chunk-TMV5K3GQ.js";
import {
  u
} from "./chunk-S4LPBKVU.js";
import {
  b
} from "./chunk-XAH4TE55.js";
import {
  RouterLink,
  RouterView,
  useRouter
} from "./chunk-DWEZQID4.js";
import {
  a,
  je,
  s,
  z
} from "./chunk-6M3JNKJN.js";
import {
  $,
  useBindCx
} from "./chunk-OYO2YRBV.js";
import {
  useScroll
} from "./chunk-3FIKATP3.js";
import {
  Fragment,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createVNode,
  defineComponent,
  guardReactiveProps,
  mergeProps,
  normalizeClass,
  normalizeProps,
  openBlock,
  ref,
  renderList,
  toDisplayString,
  unref,
  watch,
  withCtx
} from "./chunk-XQNPNIQJ.js";
import "./chunk-DC5AMYBS.js";

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/Form/LabelInput.vue2.js
var g = ["for"];
var y = ["id", "placeholder", "value"];
var b2 = defineComponent({
  __name: "LabelInput",
  props: {
    inputId: {},
    placeholder: {},
    value: {},
    layout: {}
  },
  emits: ["updateValue"],
  setup(_, { emit: i }) {
    const s2 = i, { cx: t } = useBindCx(), d2 = (e2) => {
      const a2 = e2.target;
      s2("updateValue", a2.value);
    };
    return (e2, a2) => (openBlock(), createElementBlock("div", normalizeProps(guardReactiveProps(unref(t)("flex-1 flex gap-1 items-center pointer-events-none group"))), [
      e2.layout !== "modal" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createBaseVNode("label", mergeProps(
          unref(t)(
            "absolute w-full h-full top-0 left-0 pointer-events-auto opacity-0 cursor-text"
          ),
          { for: e2.inputId }
        ), null, 16, g),
        createBaseVNode("input", mergeProps(
          unref(t)(
            "flex-1 text-c-1 rounded pointer-events-auto relative w-full pl-1.25 -ml-0.5 md:-ml-1.25 h-8 group-hover-input has-[:focus-visible]:outline z-10"
          ),
          {
            id: e2.inputId,
            placeholder: e2.placeholder,
            value: e2.value,
            onInput: d2
          }
        ), null, 16, y)
      ], 64)) : (openBlock(), createElementBlock("span", normalizeProps(mergeProps({ key: 1 }, unref(t)("flex items-center text-c-1 h-8"))), toDisplayString(e2.value), 17))
    ], 16));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/Form/LabelInput.vue.js
var e = s(b2, [["__scopeId", "data-v-fced736a"]]);

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Collection/CollectionInfoForm.vue2.js
var N = ["aria-label"];
var U = { class: "group relative ml-1.25" };
var S = defineComponent({
  __name: "CollectionInfoForm",
  setup(L) {
    const { activeCollection: e2 } = z(), { collectionMutators: l } = je(), n = computed(
      () => {
        var t;
        return ((t = e2 == null ? void 0 : e2.value) == null ? void 0 : t["x-scalar-icon"]) || "interface-content-folder";
      }
    ), x = (t) => {
      var r, o;
      (r = e2 == null ? void 0 : e2.value) != null && r.uid && l.edit((o = e2 == null ? void 0 : e2.value) == null ? void 0 : o.uid, "x-scalar-icon", t);
    }, _ = (t) => {
      e2.value && l.edit(e2.value.uid, "info.title", t);
    }, u2 = computed(() => {
      var t, r, o, s2, i, d2, m2;
      return {
        icon: (t = e2 == null ? void 0 : e2.value) == null ? void 0 : t["x-scalar-icon"],
        title: (o = (r = e2 == null ? void 0 : e2.value) == null ? void 0 : r.info) == null ? void 0 : o.title,
        description: (i = (s2 = e2 == null ? void 0 : e2.value) == null ? void 0 : s2.info) == null ? void 0 : i.description,
        version: (m2 = (d2 = e2 == null ? void 0 : e2.value) == null ? void 0 : d2.info) == null ? void 0 : m2.version
      };
    });
    return (t, r) => (openBlock(), createElementBlock("div", {
      "aria-label": `Collection: ${u2.value.title}`,
      class: "mx-auto flex h-fit w-full flex-col gap-2 pt-6 pb-3 md:mx-auto md:max-w-[720px]"
    }, [
      createVNode($2, {
        modelValue: n.value,
        placement: "bottom-start",
        "onUpdate:modelValue": r[0] || (r[0] = (o) => x(o))
      }, {
        default: withCtx(() => [
          createVNode(unref($), {
            class: "hover:bg-b-2 aspect-square h-7 w-7 cursor-pointer rounded border border-transparent p-0 hover:border-inherit",
            variant: "ghost"
          }, {
            default: withCtx(() => [
              createVNode(unref(d), {
                class: "text-c-2 size-5",
                src: n.value,
                "stroke-width": "2"
              }, null, 8, ["src"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]),
      createBaseVNode("div", U, [
        createVNode(e, {
          class: "text-xl font-bold",
          inputId: "collectionName",
          placeholder: "Untitled Collection",
          value: u2.value.title,
          onUpdateValue: _
        }, null, 8, ["value"])
      ])
    ], 8, N));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Collection/CollectionInfoForm.vue.js
var m = s(S, [["__scopeId", "data-v-faabb883"]]);

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Collection/CollectionNavigation.vue.js
var R = { class: "bg-b-1 sticky -top-[104px] z-10 mx-auto w-full" };
var V = {
  key: 0,
  class: "flex max-w-40 items-center"
};
var A = { class: "text-c-1 mr-[6.25px] hidden overflow-hidden px-2 font-medium text-ellipsis whitespace-nowrap md:block" };
var G = defineComponent({
  __name: "CollectionNavigation",
  props: {
    isSticky: { type: Boolean }
  },
  setup(F) {
    const { currentRoute: p } = useRouter(), { activeCollection: e2 } = z(), h = computed(() => {
      var t, a2, i, n;
      return [
        {
          displayName: "Overview",
          // icon: 'Collection',
          to: {
            name: "collection.overview",
            params: {
              [a.Collection]: (t = e2.value) == null ? void 0 : t.uid
            }
          }
        },
        {
          displayName: "Servers",
          // icon: 'Server',
          to: {
            name: "collection.servers",
            params: {
              [a.Collection]: (a2 = e2.value) == null ? void 0 : a2.uid
            }
          }
        },
        {
          displayName: "Authentication",
          // icon: 'Lock',
          to: {
            name: "collection.authentication",
            params: {
              [a.Collection]: (i = e2.value) == null ? void 0 : i.uid
            }
          }
        },
        {
          displayName: "Environment",
          // icon: 'Brackets',
          to: {
            name: "collection.environment",
            params: {
              [a.Collection]: (n = e2.value) == null ? void 0 : n.uid
            }
          }
        },
        // {
        //   displayName: 'Cookies',
        //   // icon: 'Cookie',
        //   to: {
        //     name: 'collection.cookies',
        //     params: {
        //       [PathId.Collection]: activeCollection.value?.uid,
        //     },
        //   },
        // },
        // {
        //   displayName: 'Scripts',
        //   // icon: 'CodeFolder',
        //   to: {
        //     name: 'collection.scripts',
        //     params: {
        //       [PathId.Collection]: activeCollection.value?.uid,
        //     },
        //   },
        // },
        // {
        //   displayName: 'Sync',
        //   // icon: 'Download',
        //   to: {
        //     name: 'collection.sync',
        //   },
        // },
        {
          displayName: "Settings",
          // icon: 'Settings',
          to: {
            name: "collection.settings"
          }
        }
      ];
    });
    return (t, a2) => {
      var i, n, u2;
      return openBlock(), createElementBlock("div", R, [
        createVNode(m),
        createBaseVNode("div", {
          class: normalizeClass([
            "items-center text-sm font-medium",
            t.isSticky ? "h-fit border-b md:grid md:grid-cols-[1fr_720px_1fr] md:px-4" : "flex md:mx-auto md:max-w-[720px]"
          ])
        }, [
          t.isSticky ? (openBlock(), createElementBlock("div", V, [
            createVNode(unref(d), {
              class: "text-c-2 hidden size-3.5 md:block",
              src: ((i = unref(e2)) == null ? void 0 : i["x-scalar-icon"]) || "interface-content-folder",
              "stroke-width": "2"
            }, null, 8, ["src"]),
            createBaseVNode("span", A, toDisplayString((u2 = (n = unref(e2)) == null ? void 0 : n.info) == null ? void 0 : u2.title), 1)
          ])) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: normalizeClass(["flex w-full max-w-[720px] gap-2 pl-1.5 md:ml-1.5 md:pl-0", !t.isSticky && "border-b"])
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(h.value, ({ to: c, displayName: y2 }, w) => (openBlock(), createBlock(unref(RouterLink), {
              key: w,
              class: "-ml-2 flex h-10 cursor-pointer items-center px-2 text-center text-sm font-medium whitespace-nowrap no-underline -outline-offset-1 has-[:focus-visible]:outline",
              to: c
            }, {
              default: withCtx(() => {
                var f;
                return [
                  createBaseVNode("span", {
                    class: normalizeClass([
                      "flex-center h-full w-full border-b",
                      typeof c.name == "string" && typeof unref(p).name == "string" && ((f = unref(p).name) != null && f.startsWith(c.name)) ? "text-c-1 border-c-1" : "text-c-2 hover:text-c-1 border-transparent"
                    ])
                  }, toDisplayString(y2), 3)
                ];
              }),
              _: 2
            }, 1032, ["to"]))), 128))
          ], 2)
        ], 2)
      ]);
    };
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Collection/Collection.vue2.js
var V2 = { class: "w-full md:mx-auto md:max-w-[720px]" };
var g2 = defineComponent({
  __name: "Collection",
  setup($3) {
    const { activeCollection: i } = z(), m2 = useRouter(), o = ref(null), { y: a2 } = useScroll(o), f = computed(() => a2.value > 104);
    return watch(
      i,
      (t) => {
        var e2;
        if (((e2 = t == null ? void 0 : t.info) == null ? void 0 : e2.title) === "Drafts") {
          const u2 = t.requests[0];
          m2.push({
            name: "request",
            params: { [a.Request]: u2 }
          });
        }
      },
      {
        immediate: true
      }
    ), (t, e2) => (openBlock(), createBlock(u, {
      ref_key: "el",
      ref: o,
      class: "h-fit overflow-auto pb-6 xl:overflow-auto"
    }, {
      default: withCtx(() => [
        createVNode(b, { class: "xl:h-fit" }, {
          default: withCtx(() => [
            createVNode(G, { isSticky: f.value }, null, 8, ["isSticky"]),
            createBaseVNode("div", V2, [
              createVNode(unref(RouterView))
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 512));
  }
});
export {
  g2 as default
};
//# sourceMappingURL=Collection.vue-W32CVSCB.js.map
