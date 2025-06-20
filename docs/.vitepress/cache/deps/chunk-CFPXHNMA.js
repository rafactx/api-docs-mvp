import {
  s
} from "./chunk-ZNV4Z3VE.js";
import {
  $
} from "./chunk-OYO2YRBV.js";
import {
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  openBlock,
  renderSlot,
  toDisplayString,
  unref,
  withCtx,
  withModifiers
} from "./chunk-XQNPNIQJ.js";

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/Sidebar/Actions/SidebarListElementForm.vue2.js
var g = { class: "flex justify-between gap-10" };
var y = defineComponent({
  __name: "SidebarListElementForm",
  props: {
    danger: { type: Boolean },
    label: {}
  },
  emits: ["cancel", "submit"],
  setup(x, { emit: i }) {
    const o = i;
    return (t, e) => (openBlock(), createElementBlock("form", {
      class: "flex flex-col gap-4 text-base",
      onSubmit: e[1] || (e[1] = withModifiers((p) => o("submit"), ["prevent"]))
    }, [
      renderSlot(t.$slots, "default", {}, void 0, true),
      createBaseVNode("div", g, [
        createVNode(unref($), {
          class: "flex h-8 cursor-pointer items-center gap-1.5 px-2.5 shadow-none focus:outline-none",
          type: "button",
          variant: "outlined",
          onClick: e[0] || (e[0] = (p) => o("cancel"))
        }, {
          default: withCtx(() => e[2] || (e[2] = [
            createTextVNode(" Cancel ")
          ])),
          _: 1
        }),
        createVNode(unref($), {
          class: "custom-scroll h-8 gap-1.5 px-2.5 font-medium whitespace-nowrap shadow-none focus:outline-none",
          type: "submit",
          variant: t.danger ? "danger" : "solid"
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(t.label ?? "Save"), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ])
    ], 32));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/Sidebar/Actions/SidebarListElementForm.vue.js
var a = s(y, [["__scopeId", "data-v-a93bfefe"]]);

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/Sidebar/Actions/DeleteSidebarListElement.vue.js
var v = {
  key: 0,
  class: "text-c-2 text-sm leading-normal text-pretty"
};
var w = defineComponent({
  __name: "DeleteSidebarListElement",
  props: {
    variableName: {},
    warningMessage: {}
  },
  emits: ["close", "delete"],
  setup(l, { emit: o }) {
    const t = l, a2 = o, s2 = computed(() => t.variableName.length > 18 ? t.variableName.slice(0, 18) + "…" : t.variableName);
    return (n, e) => (openBlock(), createBlock(a, {
      danger: "",
      label: `Delete ${s2.value}`,
      onCancel: e[0] || (e[0] = (i) => a2("close")),
      onSubmit: e[1] || (e[1] = (i) => a2("delete"))
    }, {
      default: withCtx(() => [
        n.warningMessage ? (openBlock(), createElementBlock("p", v, toDisplayString(n.warningMessage), 1)) : createCommentVNode("", true)
      ]),
      _: 1
    }, 8, ["label"]));
  }
});

export {
  a,
  w
};
//# sourceMappingURL=chunk-CFPXHNMA.js.map
