import {
  f
} from "./chunk-75A6VDJY.js";
import {
  _,
  d
} from "./chunk-AUM3FYPR.js";
import {
  z
} from "./chunk-ZNV4Z3VE.js";
import {
  b
} from "./chunk-XAH4TE55.js";
import {
  m2 as m
} from "./chunk-OYO2YRBV.js";
import {
  Fragment,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createSlots,
  createVNode,
  defineComponent,
  normalizeClass,
  openBlock,
  renderList,
  renderSlot,
  toDisplayString,
  unref,
  useId,
  withCtx
} from "./chunk-XQNPNIQJ.js";

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/Form/Form.vue.js
var B = { key: 0 };
var D = { class: "flex flex-1 flex-col gap-1.5" };
var F = ["for"];
var I = { class: "centered-y bg-b-2 flex-center absolute right-1 z-1 rounded px-1 py-0.5" };
var q = defineComponent({
  __name: "Form",
  props: {
    title: {},
    options: {},
    data: {},
    onUpdate: { type: Function }
  },
  setup(N) {
    const { activeEnvVariables: f2, activeEnvironment: k, activeWorkspace: s } = z(), i = useId();
    return (e, T) => (openBlock(), createBlock(b, { class: "rounded-b-lg" }, createSlots({
      default: withCtx(() => [
        createBaseVNode("div", D, [
          Object.keys(e.data).length > 0 && unref(s) ? (openBlock(), createBlock(_, {
            key: 0,
            columns: [""],
            class: "rounded-b-lg"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(e.options, (a, d2) => (openBlock(), createBlock(d, {
                key: d2,
                class: normalizeClass({ "border-t": d2 === 0 })
              }, {
                default: withCtx(() => [
                  createVNode(f, {
                    class: "pr-9",
                    lineWrapping: "",
                    id: unref(i),
                    envVariables: unref(f2),
                    environment: unref(k),
                    modelValue: e.data[a.key] ?? "",
                    placeholder: a.placeholder,
                    workspace: unref(s),
                    "onUpdate:modelValue": (_2) => e.onUpdate(a.key, _2)
                  }, createSlots({
                    default: withCtx(() => [
                      createBaseVNode("label", { for: unref(i) }, toDisplayString(a.label), 9, F)
                    ]),
                    _: 2
                  }, [
                    a.key === "description" ? {
                      name: "icon",
                      fn: withCtx(() => [
                        createBaseVNode("div", I, [
                          createVNode(unref(m), {
                            icon: "Markdown",
                            size: "lg"
                          })
                        ])
                      ]),
                      key: "0"
                    } : void 0
                  ]), 1032, ["id", "envVariables", "environment", "modelValue", "placeholder", "workspace", "onUpdate:modelValue"])
                ]),
                _: 2
              }, 1032, ["class"]))), 128))
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ])
      ]),
      _: 2
    }, [
      e.title || e.$slots.title ? {
        name: "title",
        fn: withCtx(() => [
          e.title ? (openBlock(), createElementBlock("span", B, toDisplayString(e.title), 1)) : renderSlot(e.$slots, "title", { key: 1 })
        ]),
        key: "0"
      } : void 0
    ]), 1024));
  }
});

export {
  q
};
//# sourceMappingURL=chunk-WEGHB5FB.js.map
