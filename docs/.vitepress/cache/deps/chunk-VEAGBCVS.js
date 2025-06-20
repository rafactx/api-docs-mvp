import {
  s
} from "./chunk-ZNV4Z3VE.js";
import {
  Fragment,
  computed,
  createBaseVNode,
  createElementBlock,
  defineComponent,
  normalizeClass,
  normalizeStyle,
  openBlock,
  renderList,
  toDisplayString
} from "./chunk-XQNPNIQJ.js";

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/ScalarAsciiArt.vue2.js
var p = 500;
var l = 100;
var B = defineComponent({
  __name: "ScalarAsciiArt",
  props: {
    art: {},
    animate: { type: Boolean }
  },
  setup(u) {
    const d = u, n = computed(() => d.art.split(`
`)), g = (a, s2) => {
      var e, t, r, c;
      return {
        animationDuration: `${a * l}ms, ${p}ms`,
        animationTimingFunction: `steps(${a}), step-end`,
        animationDelay: `${s2 * l}ms, 0ms`,
        animationIterationCount: `1, ${((((e = n.value) == null ? void 0 : e.length) ?? 0) + (((c = (r = n.value) == null ? void 0 : r[((t = n.value) == null ? void 0 : t.length) - 1]) == null ? void 0 : c.length) ?? 0) + 5) * l / p}`
      };
    };
    return (a, s2) => (openBlock(), createElementBlock("div", {
      "aria-hidden": "true",
      class: normalizeClass(["ascii-art font-code flex flex-col items-start text-[6px] leading-[7px]", { "ascii-art-animate": a.animate }]),
      role: "presentation",
      inert: ""
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(n.value, (e, t) => (openBlock(), createElementBlock("span", {
        key: t,
        class: "inline-block",
        style: normalizeStyle({ width: `calc(${e.length + 1}ch)` })
      }, [
        createBaseVNode("span", {
          class: "inline-block whitespace-pre overflow-hidden",
          style: normalizeStyle(g(e.length, t))
        }, toDisplayString(e), 5)
      ], 4))), 128))
    ], 2));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/ScalarAsciiArt.vue.js
var i = s(B, [["__scopeId", "data-v-69ebd973"]]);

export {
  i
};
//# sourceMappingURL=chunk-VEAGBCVS.js.map
