import {
  d,
  je
} from "./chunk-TMV5K3GQ.js";
import {
  Oe,
  b2 as b,
  he,
  ke
} from "./chunk-OYO2YRBV.js";
import {
  Fragment,
  computed,
  createBaseVNode,
  createBlock,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  openBlock,
  renderList,
  renderSlot,
  toDisplayString,
  unref,
  withCtx
} from "./chunk-XQNPNIQJ.js";

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/IconSelector.vue.js
var G = { class: "flex text-sm" };
var L = { class: "bg-b-1 custom-scroll grid w-dvw max-w-[420px] auto-rows-[32px] grid-cols-[repeat(auto-fill,minmax(32px,1fr))] content-between justify-between rounded border p-1" };
var $ = defineComponent({
  __name: "IconSelector",
  props: {
    modelValue: {},
    placement: {}
  },
  emits: ["update:modelValue"],
  setup(i, { emit: f }) {
    const b2 = i, x = f, c = computed({
      get: () => b2.modelValue,
      set: (l) => x("update:modelValue", l)
    });
    return (l, r) => (openBlock(), createBlock(unref(b), {
      class: "bg-b-2 rounded",
      focus: "",
      placement: l.placement ?? "bottom"
    }, {
      popover: withCtx(({ close: v }) => [
        createVNode(unref(he), {
          modelValue: c.value,
          "onUpdate:modelValue": r[0] || (r[0] = (t) => c.value = t),
          class: "flex flex-col"
        }, {
          default: withCtx(() => [
            createBaseVNode("div", G, [
              createVNode(unref(ke), { class: "text-c-2 px-1 py-1" }, {
                default: withCtx(() => [
                  renderSlot(l.$slots, "title", {}, () => [
                    r[1] || (r[1] = createTextVNode("Select an icon"))
                  ])
                ]),
                _: 3
              })
            ]),
            createBaseVNode("ul", L, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(je), (t) => (openBlock(), createBlock(unref(Oe), {
                key: t.src,
                as: "li",
                class: "text-c-3 hover:text-c-2 hover:bg-b-2 ui-checked:bg-b-3 ui-active:bg-b-2 flex cursor-pointer items-center justify-center rounded p-2",
                value: t.src,
                onClick: v
              }, {
                default: withCtx(() => [
                  createVNode(unref(ke), { class: "sr-only" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(t.src.replaceAll("-", " ")) + " Icon ", 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(unref(d), {
                    class: "stroke-[1.5]",
                    src: t.src
                  }, null, 8, ["src"])
                ]),
                _: 2
              }, 1032, ["value", "onClick"]))), 128))
            ])
          ]),
          _: 2
        }, 1032, ["modelValue"])
      ]),
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["placement"]));
  }
});

export {
  $
};
//# sourceMappingURL=chunk-T24BVKZM.js.map
