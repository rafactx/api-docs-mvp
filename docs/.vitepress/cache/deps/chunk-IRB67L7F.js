import {
  m
} from "./chunk-GOSQUSWR.js";
import {
  s as s2
} from "./chunk-RDVDQCBW.js";
import {
  je,
  s
} from "./chunk-6M3JNKJN.js";
import {
  useMediaQuery
} from "./chunk-3FIKATP3.js";
import {
  Fragment,
  computed,
  createBaseVNode,
  createCommentVNode,
  createElementBlock,
  defineComponent,
  normalizeClass,
  normalizeStyle,
  openBlock,
  ref,
  renderSlot,
  toDisplayString,
  unref,
  vShow,
  withDirectives
} from "./chunk-XQNPNIQJ.js";

// node_modules/.pnpm/@scalar+use-hooks@0.2.2_typescript@5.8.3/node_modules/@scalar/use-hooks/dist/useBreakpoints/constants.js
var screens = {
  /** Mobile */
  xs: "(min-width: 400px)",
  /** Large Mobile */
  sm: "(min-width: 600px)",
  /** Tablet */
  md: "(min-width: 800px)",
  /** Desktop */
  lg: "(min-width: 1000px)",
  /** Ultrawide and larger */
  xl: "(min-width: 1200px)",
  /** Custom breakpoint for zoomed in screens (should trigger at about 200% zoom) */
  zoomed: "(max-width: 720px) and (max-height: 480px)"
};

// node_modules/.pnpm/@scalar+use-hooks@0.2.2_typescript@5.8.3/node_modules/@scalar/use-hooks/dist/useBreakpoints/useBreakpoints.js
function useBreakpoints() {
  const mediaQueries = Object.fromEntries(
    Object.entries(screens).map(([breakpoint, value]) => [breakpoint, useMediaQuery(value)])
  );
  const breakpoints = computed(
    () => Object.fromEntries(
      Object.entries(mediaQueries).map(([breakpoint, queryRef]) => [breakpoint, unref(queryRef)])
    )
  );
  return {
    /** The screen sizes defined in the preset */
    screens,
    /** Reactive media queries for each of the screen sizes */
    mediaQueries,
    /** The breakpoints as reactive media queries */
    breakpoints
  };
}

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/Sidebar/Sidebar.vue2.js
var B = {
  key: 0,
  class: "xl:min-h-header flex min-h-12 items-center justify-between px-3 py-1.5 text-sm md:px-[18px] md:py-2.5"
};
var I = { class: "m-0 text-sm font-medium whitespace-nowrap" };
var X = { class: "bg-b-1 relative sticky bottom-0 z-10 w-[inherit] pt-0 has-[.empty-sidebar-item]:border-t md:px-2.5 md:pb-2.5" };
var q = defineComponent({
  __name: "Sidebar",
  props: {
    title: {}
  },
  setup(R) {
    const { isSidebarOpen: y } = m(), { sidebarWidth: o, setSidebarWidth: i } = je(), { layout: c } = s2(), a = ref(false), p = ref(null), { breakpoints: d } = useBreakpoints(), w = (e) => {
      e.preventDefault();
      const f = e.clientX, x = Number.parseInt(
        getComputedStyle(p.value).width || o.value,
        10
      ), b = (k) => {
        a.value = true, document.body.classList.add("dragging");
        let s3 = x + k.clientX - f;
        s3 > 420 && (s3 = 420 + (s3 - 420) * 0.2), s3 < 240 && (s3 = 240), i(`${s3}px`);
      }, v = () => {
        a.value = false, document.body.classList.remove("dragging"), document.documentElement.removeEventListener("mousemove", b, false), document.documentElement.removeEventListener("mouseup", v, false), Number.parseInt(o.value, 10) > 420 ? i("360px") : Number.parseInt(o.value, 10) < 240 && i("240px");
      };
      document.documentElement.addEventListener("mousemove", b, false), document.documentElement.addEventListener("mouseup", v, false);
    };
    return (e, f) => withDirectives((openBlock(), createElementBlock("aside", {
      ref_key: "sidebarRef",
      ref: p,
      class: normalizeClass(["sidebar bg-b-1 relative flex min-w-full flex-1 flex-col overflow-hidden leading-3 md:min-w-fit md:flex-none md:border-r md:border-b-0", { dragging: a.value }]),
      style: normalizeStyle({ width: unref(d).lg ? unref(o) : "100%" })
    }, [
      renderSlot(e.$slots, "header", {}, void 0, true),
      unref(c) !== "modal" && e.title ? (openBlock(), createElementBlock("div", B, [
        createBaseVNode("h2", I, toDisplayString(e.title), 1),
        unref(d).lg ? createCommentVNode("", true) : renderSlot(e.$slots, "button", { key: 0 }, void 0, true)
      ])) : createCommentVNode("", true),
      createBaseVNode("div", {
        class: normalizeClass(["custom-scroll sidebar-height w-[inherit] pb-0 md:pb-[37px]", {
          "sidebar-mask": unref(c) !== "modal"
        }])
      }, [
        renderSlot(e.$slots, "content", {}, void 0, true)
      ], 2),
      unref(d).lg ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        createBaseVNode("div", X, [
          renderSlot(e.$slots, "button", {}, void 0, true)
        ]),
        createBaseVNode("div", {
          class: "resizer",
          onMousedown: w
        }, null, 32)
      ], 64)) : createCommentVNode("", true)
    ], 6)), [
      [vShow, unref(y)]
    ]);
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/Sidebar/Sidebar.vue.js
var m2 = s(q, [["__scopeId", "data-v-72824faa"]]);

export {
  useBreakpoints,
  m2 as m
};
//# sourceMappingURL=chunk-IRB67L7F.js.map
