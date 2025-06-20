import {
  useBindCx
} from "./chunk-OYO2YRBV.js";
import {
  createCommentVNode,
  createElementBlock,
  defineComponent,
  guardReactiveProps,
  normalizeProps,
  openBlock,
  renderSlot,
  unref
} from "./chunk-XQNPNIQJ.js";

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/ViewLayout/ViewLayoutSection.vue.js
var u = {
  key: 0,
  class: "request-response-header bg-b-1 -mb-1/2 sticky top-0 z-1 flex min-h-11 items-center border-b px-2.5 text-sm font-medium xl:rounded-none"
};
var b = defineComponent({
  inheritAttrs: false,
  __name: "ViewLayoutSection",
  setup(d) {
    const { cx: s } = useBindCx();
    return (e, f) => (openBlock(), createElementBlock("section", normalizeProps(guardReactiveProps(
      unref(s)("xl:custom-scroll bg-b-1 flex flex-1 flex-col xl:h-full xl:min-w-0")
    )), [
      e.$slots.title ? (openBlock(), createElementBlock("div", u, [
        renderSlot(e.$slots, "title")
      ])) : createCommentVNode("", true),
      renderSlot(e.$slots, "default")
    ], 16));
  }
});

export {
  b
};
//# sourceMappingURL=chunk-XAH4TE55.js.map
