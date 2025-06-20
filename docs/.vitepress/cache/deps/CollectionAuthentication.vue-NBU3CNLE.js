import {
  p
} from "./chunk-VNWCMRO3.js";
import "./chunk-75A6VDJY.js";
import "./chunk-AUM3FYPR.js";
import "./chunk-64TJZ2DX.js";
import "./chunk-RDVDQCBW.js";
import "./chunk-DWEZQID4.js";
import {
  je,
  s,
  z
} from "./chunk-ZNV4Z3VE.js";
import {
  w3 as w
} from "./chunk-OYO2YRBV.js";
import "./chunk-3FIKATP3.js";
import {
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createVNode,
  defineComponent,
  normalizeClass,
  openBlock,
  unref
} from "./chunk-XQNPNIQJ.js";
import "./chunk-DC5AMYBS.js";

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Collection/CollectionAuthentication.vue2.js
var b = { class: "flex h-full w-full flex-col gap-12 px-1.5 pt-8" };
var w2 = { class: "flex flex-col gap-4" };
var A = { class: "flex flex-col gap-2" };
var E = { class: "flex h-8 items-center justify-between" };
var j = defineComponent({
  __name: "CollectionAuthentication",
  setup(U) {
    const {
      activeCollection: t,
      activeEnvVariables: u,
      activeEnvironment: d,
      activeServer: m,
      activeWorkspace: c
    } = z(), { collectionMutators: p2 } = je(), v = () => {
      var i;
      (i = t.value) != null && i.uid && p2.edit(
        t.value.uid,
        "useCollectionSecurity",
        !t.value.useCollectionSecurity
      );
    };
    return (i, l) => {
      var n, s2, r2;
      return openBlock(), createElementBlock("div", b, [
        createBaseVNode("div", w2, [
          createBaseVNode("div", A, [
            createBaseVNode("div", E, [
              l[0] || (l[0] = createBaseVNode("h3", { class: "font-bold" }, "Authentication", -1)),
              createVNode(unref(w), {
                class: "w-4",
                modelValue: ((n = unref(t)) == null ? void 0 : n.useCollectionSecurity) ?? false,
                "onUpdate:modelValue": v
              }, null, 8, ["modelValue"])
            ]),
            l[1] || (l[1] = createBaseVNode("p", { class: "pr-6 text-sm" }, " Added authentication will apply to all requests under this collection. You can override this by specifying another one in the request. ", -1))
          ]),
          unref(t) && unref(c) ? (openBlock(), createBlock(unref(p), {
            key: 0,
            class: normalizeClass([
              "scalar-collection-auth",
              !((s2 = unref(t)) != null && s2.useCollectionSecurity) && "pointer-events-none opacity-50 mix-blend-luminosity"
            ]),
            collection: unref(t),
            envVariables: unref(u),
            environment: unref(d),
            layout: "client",
            selectedSecuritySchemeUids: ((r2 = unref(t)) == null ? void 0 : r2.selectedSecuritySchemeUids) ?? [],
            server: unref(m),
            title: "Authentication",
            workspace: unref(c)
          }, null, 8, ["class", "collection", "envVariables", "environment", "selectedSecuritySchemeUids", "server", "workspace"])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Collection/CollectionAuthentication.vue.js
var r = s(j, [["__scopeId", "data-v-cc87292e"]]);
export {
  r as default
};
//# sourceMappingURL=CollectionAuthentication.vue-NBU3CNLE.js.map
