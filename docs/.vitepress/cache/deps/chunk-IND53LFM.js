import {
  a
} from "./chunk-JKKHX52Y.js";
import {
  N2 as N
} from "./chunk-OYO2YRBV.js";
import {
  createBlock,
  createVNode,
  defineComponent,
  openBlock,
  ref,
  unref,
  withCtx
} from "./chunk-XQNPNIQJ.js";

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/Sidebar/Actions/EditSidebarListElement.vue.js
var C = defineComponent({
  __name: "EditSidebarListElement",
  props: {
    name: {}
  },
  emits: ["close", "edit"],
  setup(m, { emit: l }) {
    const r = m, n = l, t = ref(r.name);
    return (x, e) => (openBlock(), createBlock(a, {
      onCancel: e[1] || (e[1] = (o) => n("close")),
      onSubmit: e[2] || (e[2] = (o) => n("edit", t.value))
    }, {
      default: withCtx(() => [
        createVNode(unref(N), {
          modelValue: t.value,
          "onUpdate:modelValue": e[0] || (e[0] = (o) => t.value = o),
          autofocus: ""
        }, null, 8, ["modelValue"])
      ]),
      _: 1
    }));
  }
});

export {
  C
};
//# sourceMappingURL=chunk-IND53LFM.js.map
