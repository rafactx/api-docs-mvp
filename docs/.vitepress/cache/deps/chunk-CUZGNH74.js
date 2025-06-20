import {
  isMacOS
} from "./chunk-GOSQUSWR.js";
import {
  useBindCx
} from "./chunk-OYO2YRBV.js";
import {
  computed,
  createBaseVNode,
  createElementBlock,
  defineComponent,
  guardReactiveProps,
  normalizeProps,
  openBlock,
  toDisplayString,
  unref
} from "./chunk-XQNPNIQJ.js";

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/ScalarHotkey.vue.js
var C = { "aria-hidden": "true" };
var w = { class: "sr-only" };
var A = defineComponent({
  __name: "ScalarHotkey",
  props: {
    hotkey: {},
    modifier: { default: () => ["Meta"] }
  },
  setup(e) {
    const d = {
      "⌘": "Command",
      "^": "Control",
      "⌥": "Option",
      "⇧": "Shift",
      "⇪": "Caps Lock",
      "↵": "Enter",
      "←": "Left Arrow",
      "→": "Right Arrow",
      "↑": "Up Arrow",
      "↓": "Down Arrow"
    }, c = {
      Meta: isMacOS() ? "⌘" : "^",
      default: isMacOS() ? "⌘" : "^",
      Shift: "⇧",
      Alt: "⌥",
      Control: "^"
    }, { cx: l } = useBindCx(), m = computed(() => `${e.modifier.map((o) => c[o]).join("+")} ${e.hotkey}`), f = computed(() => {
      const t = e.modifier.map((n) => n === "Meta" ? isMacOS() ? "Command" : "Control" : n).join("+"), o = d[e.hotkey] ?? e.hotkey;
      return `${t} ${o}`;
    });
    return (t, o) => (openBlock(), createElementBlock("div", normalizeProps(guardReactiveProps(
      unref(l)(
        "border-(--scalar-background-3) inline-block overflow-hidden rounded border text-xxs rounded-b px-1 font-medium uppercase"
      )
    )), [
      createBaseVNode("span", C, toDisplayString(m.value), 1),
      createBaseVNode("span", w, toDisplayString(f.value), 1)
    ], 16));
  }
});

export {
  A
};
//# sourceMappingURL=chunk-CUZGNH74.js.map
