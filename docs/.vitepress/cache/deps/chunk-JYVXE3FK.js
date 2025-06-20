import {
  $,
  P,
  m2 as m
} from "./chunk-OYO2YRBV.js";
import {
  Fragment,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  mergeProps,
  normalizeClass,
  openBlock,
  renderList,
  toDisplayString,
  unref,
  vModelText,
  withCtx,
  withDirectives
} from "./chunk-XQNPNIQJ.js";

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/Server/ServerVariablesSelect.vue.js
var _ = {
  key: 0,
  class: "sr-only"
};
var x = defineComponent({
  __name: "ServerVariablesSelect",
  props: {
    enum: {},
    value: {},
    controls: {}
  },
  emits: ["change"],
  setup(u, { emit: m2 }) {
    const o = u, d = m2, t = computed(
      () => o.enum.map((e) => ({ id: e, label: e }))
    ), l = computed({
      get: () => t.value.find((e) => e.id === o.value),
      set: (e) => d("change", (e == null ? void 0 : e.id) ?? "")
    });
    return (e, n) => (openBlock(), createBlock(unref(P), {
      modelValue: l.value,
      "onUpdate:modelValue": n[0] || (n[0] = (p) => l.value = p),
      options: t.value
    }, {
      default: withCtx(() => [
        createVNode(unref($), {
          "aria-controls": e.controls,
          class: "h-8 w-full p-0 py-1.5 font-normal",
          variant: "ghost"
        }, {
          default: withCtx(() => [
            createBaseVNode("span", {
              class: normalizeClass({ "text-c-1": e.value })
            }, [
              e.value ? (openBlock(), createElementBlock("span", _, " Selected: ")) : createCommentVNode("", true),
              createTextVNode(" " + toDisplayString(e.value || "Select value"), 1)
            ], 2),
            createVNode(unref(m), {
              class: "ml-1",
              icon: "ChevronDown",
              size: "sm"
            })
          ]),
          _: 1
        }, 8, ["aria-controls"])
      ]),
      _: 1
    }, 8, ["modelValue", "options"]));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/Server/ServerVariablesTextbox.vue.js
var g = defineComponent({
  __name: "ServerVariablesTextbox",
  props: {
    value: {},
    controls: {}
  },
  emits: ["change"],
  setup(l, { emit: r }) {
    const a = l, n = r, t = computed({
      get: () => a.value,
      set: (e) => n("change", e)
    });
    return (e, o) => withDirectives((openBlock(), createElementBlock("input", mergeProps({
      "onUpdate:modelValue": o[0] || (o[0] = (s) => t.value = s)
    }, e.controls ? { ...e.$attrs, "aria-controls": e.controls } : {}, {
      autocomplete: "off",
      class: "text-c-1 w-full border-transparent px-1.5 -outline-offset-1 group-last/label:rounded-br-lg",
      placeholder: "value",
      spellcheck: "false",
      type: "text"
    }), null, 16)), [
      [vModelText, t.value]
    ]);
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/Server/ServerVariablesForm.vue.js
var j = { class: "mr-1.5 flex items-center py-1.5 pl-3 group-has-[input]/label:mr-0 after:content-[':']" };
var O = defineComponent({
  __name: "ServerVariablesForm",
  props: {
    variables: {},
    values: {},
    controls: {},
    layout: { default: "client" }
  },
  emits: ["update:variable"],
  setup(n, { emit: v }) {
    const d = v;
    function s(e, r) {
      d("update:variable", e, r);
    }
    const i = (e) => {
      var r, l, a;
      return (((r = n.values) == null ? void 0 : r[e]) ?? ((a = (l = n.variables) == null ? void 0 : l[e]) == null ? void 0 : a.default) ?? "").toString();
    };
    return (e, r) => e.variables && Object.keys(e.variables ?? {}).length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(Object.keys(e.variables), (l) => {
      var a, u, c, b, m2;
      return openBlock(), createElementBlock("label", {
        key: l,
        class: normalizeClass(["group/label flex w-full", e.layout === "reference" && "border-x border-b"])
      }, [
        createBaseVNode("span", j, toDisplayString(l), 1),
        (c = (u = (a = e.variables) == null ? void 0 : a[l]) == null ? void 0 : u.enum) != null && c.length ? (openBlock(), createBlock(x, {
          key: 0,
          controls: e.controls,
          enum: ((m2 = (b = e.variables[l]) == null ? void 0 : b.enum) == null ? void 0 : m2.map((t) => `${t}`)) ?? [],
          label: l,
          value: i(l),
          onChange: (t) => s(l, t)
        }, null, 8, ["controls", "enum", "label", "value", "onChange"])) : (openBlock(), createBlock(g, {
          key: 1,
          controls: e.controls,
          value: i(l),
          onChange: (t) => s(l, t)
        }, null, 8, ["controls", "value", "onChange"]))
      ], 2);
    }), 128)) : createCommentVNode("", true);
  }
});

export {
  O
};
//# sourceMappingURL=chunk-JYVXE3FK.js.map
