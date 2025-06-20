import {
  w as w2
} from "./chunk-CFPXHNMA.js";
import {
  useRouter
} from "./chunk-DWEZQID4.js";
import {
  a,
  je,
  s,
  z
} from "./chunk-ZNV4Z3VE.js";
import {
  $,
  W,
  m2 as m,
  m4 as m2,
  w3 as w
} from "./chunk-OYO2YRBV.js";
import "./chunk-3FIKATP3.js";
import {
  Fragment,
  createBaseVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  openBlock,
  toDisplayString,
  unref,
  withCtx
} from "./chunk-XQNPNIQJ.js";
import "./chunk-DC5AMYBS.js";

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Collection/CollectionSettings.vue2.js
var $2 = { class: "flex h-full w-full flex-col gap-12 px-1.5 pt-8" };
var L = { class: "flex flex-col gap-2" };
var O = { class: "bg-b-2 rounded-lg border text-sm" };
var P = { class: "bg-b-1 flex items-center justify-between gap-4 rounded-t-lg p-3" };
var R = { class: "text-c-1 flex items-center overflow-x-auto border-t py-1.5 whitespace-nowrap" };
var j = { class: "flex items-center" };
var z2 = ["href"];
var F = { class: "flex flex-col gap-4" };
var Z = { class: "flex items-center justify-between rounded-lg border p-3 text-sm" };
var te = defineComponent({
  __name: "CollectionSettings",
  setup(q) {
    const { activeCollection: o, activeWorkspace: a2, activeWorkspaceCollections: C } = z(), { collectionMutators: m3 } = je(), { replace: y } = useRouter(), i2 = W();
    function M() {
      var n, e;
      o.value && (n = o.value) != null && n.documentUrl && m3.edit(
        o.value.uid,
        "watchMode",
        !((e = o.value) != null && e.watchMode)
      );
    }
    function U() {
      if (!o.value || !a2.value)
        return;
      m3.delete(o.value, a2.value);
      const n = C.value[0];
      n && y({
        name: "collection",
        params: {
          [a.Workspace]: a2.value.uid,
          [a.Collection]: n.uid
        }
      }), i2.hide();
    }
    return (n, e) => {
      var f, p, v, x, g;
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", $2, [
          createBaseVNode("div", L, [
            e[5] || (e[5] = createBaseVNode("div", { class: "flex h-8 items-center" }, [
              createBaseVNode("h3", { class: "font-bold" }, "Features")
            ], -1)),
            createBaseVNode("div", O, [
              createBaseVNode("div", P, [
                e[2] || (e[2] = createBaseVNode("div", null, [
                  createBaseVNode("h4", null, "Watch Mode"),
                  createBaseVNode("p", { class: "text-c-2 mt-1" }, " When enabled, the OpenAPI document will be polled for changes. The collection will be updated automatically. ")
                ], -1)),
                createVNode(unref(w), {
                  class: "w-4",
                  disabled: !((f = unref(o)) != null && f.documentUrl),
                  modelValue: ((p = unref(o)) == null ? void 0 : p.watchMode) ?? false,
                  "onUpdate:modelValue": M
                }, null, 8, ["disabled", "modelValue"])
              ]),
              createBaseVNode("div", R, [
                createBaseVNode("div", j, [
                  (v = unref(o)) != null && v.documentUrl ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    e[3] || (e[3] = createBaseVNode("span", { class: "bg-b-2 sticky left-0 pr-2 pl-3" }, "Source", -1)),
                    createBaseVNode("a", {
                      class: "text-c-2 group rounded pr-3 no-underline hover:underline",
                      href: unref(o).documentUrl,
                      target: "_blank"
                    }, [
                      createTextVNode(toDisplayString(unref(o).documentUrl) + " ", 1),
                      createVNode(unref(m), {
                        class: "ml-1 hidden w-2.5 group-hover:inline",
                        icon: "ExternalLink"
                      })
                    ], 8, z2)
                  ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createVNode(unref(m), {
                      class: "text-c-2 mr-2 ml-3 w-4",
                      icon: "NotAllowed",
                      size: "sm"
                    }),
                    e[4] || (e[4] = createBaseVNode("span", { class: "text-c-2 pr-3" }, " No URL configured. Try importing an OpenAPI document from an URL. ", -1))
                  ], 64))
                ])
              ])
            ])
          ]),
          createBaseVNode("div", F, [
            e[8] || (e[8] = createBaseVNode("h3", { class: "font-bold" }, "Danger Zone", -1)),
            createBaseVNode("div", Z, [
              e[7] || (e[7] = createBaseVNode("div", null, [
                createBaseVNode("h4", null, "Delete Collection"),
                createBaseVNode("p", { class: "text-c-2 mt-1" }, " Be careful, my friend. Once deleted, there is no way to recover the collection. ")
              ], -1)),
              createVNode(unref($), {
                class: "custom-scroll h-8 gap-1.5 px-2.5 font-medium whitespace-nowrap shadow-none focus:outline-none",
                variant: "danger",
                onClick: e[0] || (e[0] = (r) => unref(i2).show())
              }, {
                default: withCtx(() => e[6] || (e[6] = [
                  createTextVNode(" Delete Collection ")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createVNode(unref(m2), {
          size: "xxs",
          state: unref(i2),
          title: `Delete ${(g = (x = unref(o)) == null ? void 0 : x.info) == null ? void 0 : g.title}`
        }, {
          default: withCtx(() => {
            var r, h;
            return [
              createVNode(w2, {
                variableName: ((h = (r = unref(o)) == null ? void 0 : r.info) == null ? void 0 : h.title) ?? "",
                warningMessage: "This action cannot be undone.",
                onClose: e[1] || (e[1] = (G) => unref(i2).hide()),
                onDelete: U
              }, null, 8, ["variableName"])
            ];
          }),
          _: 1
        }, 8, ["state", "title"])
      ], 64);
    };
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Collection/CollectionSettings.vue.js
var i = s(te, [["__scopeId", "data-v-5170f3be"]]);
export {
  i as default
};
//# sourceMappingURL=CollectionSettings.vue-X3773L7L.js.map
