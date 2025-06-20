import {
  f
} from "./chunk-AUM3FYPR.js";
import {
  useBindCx
} from "./chunk-OYO2YRBV.js";
import {
  createBlock,
  defineComponent,
  mergeProps,
  openBlock,
  renderSlot,
  unref,
  withCtx
} from "./chunk-XQNPNIQJ.js";

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/DataTable/DataTableHeader.vue.js
var x = defineComponent({
  __name: "DataTableHeader",
  setup(p) {
    const { cx: e } = useBindCx();
    return (t, u) => (openBlock(), createBlock(f, mergeProps({ is: "th" }, unref(e)("items-center font-medium px-2 min-w-0 -outline-offset-1")), {
      default: withCtx(() => [
        renderSlot(t.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});

export {
  x
};
//# sourceMappingURL=chunk-QNF3OMLY.js.map
