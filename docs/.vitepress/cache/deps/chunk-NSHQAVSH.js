import {
  s
} from "./chunk-6M3JNKJN.js";
import {
  useBindCx
} from "./chunk-OYO2YRBV.js";
import {
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  defineComponent,
  guardReactiveProps,
  mergeProps,
  normalizeClass,
  normalizeProps,
  normalizeStyle,
  openBlock,
  renderSlot,
  resolveDynamicComponent,
  unref,
  withCtx
} from "./chunk-XQNPNIQJ.js";

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/DataTable/DataTable.vue.js
var b = ["role"];
var y = {
  key: 0,
  class: "sr-only"
};
var _ = defineComponent({
  __name: "DataTable",
  props: {
    columns: {},
    scroll: { type: Boolean },
    presentational: { type: Boolean }
  },
  setup(v) {
    const { cx: a2 } = useBindCx();
    return (e, w) => (openBlock(), createElementBlock("div", normalizeProps(guardReactiveProps(
      unref(a2)(
        e.scroll ? "overflow-x-auto custom-scroll" : "overflow-visible",
        "scalar-data-table"
      )
    )), [
      createBaseVNode("table", {
        class: normalizeClass(["mb-0 grid min-h-8 auto-rows-auto", { "w-max min-w-full": e.scroll }]),
        role: e.presentational ? "presentation" : "table",
        style: normalizeStyle({
          gridTemplateColumns: e.columns.map((s3) => s3 || "1fr").join(" ")
        })
      }, [
        e.$slots.caption ? (openBlock(), createElementBlock("caption", y, [
          renderSlot(e.$slots, "caption")
        ])) : createCommentVNode("", true),
        renderSlot(e.$slots, "default")
      ], 14, b)
    ], 16));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/DataTable/DataTableCell.vue.js
var f = defineComponent({
  inheritAttrs: false,
  __name: "DataTableCell",
  props: {
    is: { default: "td" }
  },
  setup(b2) {
    const { cx: e } = useBindCx();
    return (r, i) => (openBlock(), createBlock(resolveDynamicComponent(r.is), mergeProps(
      unref(e)(
        "box-content max-h-8 min-h-8 min-w-8 border-l-0 border-t border-b-0 border-r flex text-sm last:border-r-0 group-last:border-b-transparent p-0 m-0 relative"
      ),
      { class: "group-[.alert]:bg-b-alert group-[.error]:bg-b-danger" }
    ), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/DataTable/DataTableRow.vue.js
var n = {};
var s2 = { class: "group contents" };
function a(e, l) {
  return openBlock(), createElementBlock("tr", s2, [
    renderSlot(e.$slots, "default")
  ]);
}
var d = s(n, [["render", a]]);

export {
  _,
  f,
  d
};
//# sourceMappingURL=chunk-NSHQAVSH.js.map
