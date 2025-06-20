import {
  useBindCx
} from "./chunk-OYO2YRBV.js";
import {
  createElementBlock,
  defineComponent,
  guardReactiveProps,
  normalizeProps,
  openBlock,
  renderSlot,
  unref
} from "./chunk-XQNPNIQJ.js";

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/ViewLayout/ViewLayout.vue.js
var u = defineComponent({
  __name: "ViewLayout",
  setup(m) {
    const { cx: e } = useBindCx();
    return (r, s) => (openBlock(), createElementBlock("div", normalizeProps(guardReactiveProps(
      unref(e)(
        "flex flex-col min-h-0 flex-1 *:border-t first:*:border-t-0 md:*:border-t-0 xl:overflow-hidden md:flex-row leading-3"
      )
    )), [
      renderSlot(r.$slots, "default")
    ], 16));
  }
});

export {
  u
};
//# sourceMappingURL=chunk-S4LPBKVU.js.map
