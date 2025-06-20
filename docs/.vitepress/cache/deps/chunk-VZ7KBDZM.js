import {
  f
} from "./chunk-NSHQAVSH.js";
import {
  Z,
  e
} from "./chunk-SCACG3GA.js";
import {
  s
} from "./chunk-6M3JNKJN.js";
import {
  y
} from "./chunk-OYO2YRBV.js";
import {
  Fragment,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  defineComponent,
  mergeProps,
  normalizeClass,
  openBlock,
  ref,
  renderSlot,
  unref,
  withCtx
} from "./chunk-XQNPNIQJ.js";

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/DataTable/DataTableInput.vue2.js
var F = ["for"];
var S = { class: "relative flex min-w-0 flex-1" };
var T = ["readOnly", "type", "value"];
var N = {
  key: 1,
  class: "centered-y text-orange absolute right-7 text-xs"
};
var L = defineComponent({
  inheritAttrs: false,
  __name: "DataTableInput",
  props: {
    id: {},
    type: {},
    containerClass: {},
    required: { type: Boolean, default: false },
    modelValue: {},
    canAddCustomEnumValue: { type: Boolean, default: true },
    readOnly: { type: Boolean, default: false },
    enum: {},
    min: {},
    max: {},
    environment: {},
    envVariables: {},
    workspace: {},
    description: {},
    lineWrapping: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "inputFocus", "inputBlur", "selectVariable"],
  setup(v, { emit: c }) {
    const a = v, t = c, s2 = ref(true), w = ref(false), m = ref(null), V = () => {
      w.value || t("inputBlur");
    }, f3 = computed(
      () => a.type === "password" ? "text" : a.type ?? "text"
    ), k = () => {
      var e2, l;
      !((e2 = a.enum) != null && e2.length) && !a.readOnly && ((l = m.value) == null || l.focus());
    };
    return (e2, l) => (openBlock(), createBlock(f, {
      class: normalizeClass(["relative flex", e2.containerClass])
    }, {
      default: withCtx(() => [
        e2.$slots.default ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "text-c-1 flex items-center pr-0 pl-3",
          for: e2.id ?? "",
          onClick: k
        }, [
          renderSlot(e2.$slots, "default", {}, void 0, true),
          l[5] || (l[5] = createTextVNode(": "))
        ], 8, F)) : createCommentVNode("", true),
        createBaseVNode("div", S, [
          a.enum && a.enum.length ? (openBlock(), createBlock(Z, {
            key: 0,
            canAddCustomValue: a.canAddCustomEnumValue,
            modelValue: a.modelValue,
            value: a.enum,
            "onUpdate:modelValue": l[0] || (l[0] = (o) => t("update:modelValue", o))
          }, null, 8, ["canAddCustomValue", "modelValue", "value"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            s2.value && e2.type === "password" ? (openBlock(), createElementBlock("input", mergeProps({ key: 0 }, e2.id ? { ...e2.$attrs, id: e2.id } : e2.$attrs, {
              autocomplete: "off",
              class: ["text-c-1 disabled:text-c-2 peer w-full min-w-0 border-none px-2 py-1.25 -outline-offset-1", { "scalar-password-input": e2.type === "password" }],
              "data-1p-ignore": "",
              readOnly: e2.readOnly,
              spellcheck: "false",
              type: f3.value,
              value: e2.modelValue,
              onInput: l[1] || (l[1] = (o) => t(
                "update:modelValue",
                o.target.value ?? ""
              ))
            }), null, 16, T)) : (openBlock(), createBlock(e, mergeProps({ key: 1 }, e2.$attrs, {
              id: e2.id,
              ref_key: "codeInput",
              ref: m,
              class: ["text-c-1 disabled:text-c-2 peer w-full min-w-0 border-none -outline-offset-1", [
                e2.type === "password" && e2.description && "pr-12",
                e2.description && "pr-8",
                e2.type === "password" && "scalar-password-input"
              ]],
              description: e2.description,
              disableCloseBrackets: "",
              disableTabIndent: "",
              envVariables: e2.envVariables,
              environment: e2.environment,
              lineWrapping: !!e2.lineWrapping,
              max: e2.max,
              min: e2.min,
              modelValue: e2.modelValue ?? "",
              readOnly: e2.readOnly,
              required: !!e2.required,
              spellcheck: "false",
              type: f3.value,
              workspace: e2.workspace,
              onBlur: V,
              onFocus: l[2] || (l[2] = (o) => t("inputFocus")),
              "onUpdate:modelValue": l[3] || (l[3] = (o) => t("update:modelValue", o))
            }), null, 16, ["id", "class", "description", "envVariables", "environment", "lineWrapping", "max", "min", "modelValue", "readOnly", "required", "type", "workspace"]))
          ], 64))
        ]),
        e2.$slots.warning ? (openBlock(), createElementBlock("div", N, [
          renderSlot(e2.$slots, "warning", {}, void 0, true)
        ])) : createCommentVNode("", true),
        renderSlot(e2.$slots, "icon", {}, void 0, true),
        e2.type === "password" ? (openBlock(), createBlock(unref(y), {
          key: 2,
          class: "-ml-.5 mr-1.25 h-6 w-6 self-center p-1.25",
          icon: s2.value ? "Show" : "Hide",
          label: s2.value ? "Show Password" : "Hide Password",
          onClick: l[4] || (l[4] = (o) => s2.value = !s2.value)
        }, null, 8, ["icon", "label"])) : createCommentVNode("", true)
      ]),
      _: 3
    }, 8, ["class"]));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/DataTable/DataTableInput.vue.js
var f2 = s(L, [["__scopeId", "data-v-a8683fd7"]]);

export {
  f2 as f
};
//# sourceMappingURL=chunk-VZ7KBDZM.js.map
