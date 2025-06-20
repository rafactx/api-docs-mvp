import {
  A
} from "./chunk-CUZGNH74.js";
import {
  s
} from "./chunk-RDVDQCBW.js";
import {
  $
} from "./chunk-OYO2YRBV.js";
import {
  createBlock,
  createCommentVNode,
  defineComponent,
  openBlock,
  renderSlot,
  unref,
  withCtx
} from "./chunk-XQNPNIQJ.js";

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/Sidebar/SidebarButton.vue.js
var g = defineComponent({
  __name: "SidebarButton",
  props: {
    click: { type: Function },
    hotkey: {}
  },
  setup(n) {
    const a = n, { layout: c } = s(), l = () => {
      a.click();
    };
    return (t, h) => (openBlock(), createBlock(unref($), {
      class: "bg-b-1 text-c-1 hover:bg-b-2 group relative h-auto w-auto border px-2 py-1 md:w-full md:p-1.5",
      icon: "Plus",
      variant: "outlined",
      onClick: l
    }, {
      default: withCtx(() => [
        renderSlot(t.$slots, "title"),
        t.hotkey && unref(c) === "desktop" ? (openBlock(), createBlock(A, {
          key: 0,
          class: "text-c-2 add-item-hotkey absolute right-2 hidden group-hover:opacity-80 md:block",
          hotkey: t.hotkey
        }, null, 8, ["hotkey"])) : createCommentVNode("", true)
      ]),
      _: 3
    }));
  }
});

export {
  g
};
//# sourceMappingURL=chunk-QMSDB3Q6.js.map
