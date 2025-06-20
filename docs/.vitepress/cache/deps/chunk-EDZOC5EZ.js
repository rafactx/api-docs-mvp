import {
  computed,
  createElementBlock,
  defineComponent,
  normalizeClass,
  openBlock,
  ref,
  renderSlot,
  unref,
  withModifiers
} from "./chunk-XQNPNIQJ.js";

// node_modules/.pnpm/@scalar+draggable@0.2.0_typescript@5.8.3/node_modules/@scalar/draggable/dist/store.js
var r = ref(null);
var t = ref(null);

// node_modules/.pnpm/@scalar+draggable@0.2.0_typescript@5.8.3/node_modules/@scalar/draggable/dist/throttle.js
var o = (e, r2) => {
  let t2 = false;
  return (...l) => {
    t2 || (e(...l), t2 = true, setTimeout(() => t2 = false, r2));
  };
};

// node_modules/.pnpm/@scalar+draggable@0.2.0_typescript@5.8.3/node_modules/@scalar/draggable/dist/Draggable.vue2.js
var k = ["draggable"];
var O = defineComponent({
  __name: "Draggable",
  props: {
    ceiling: { default: 0.8 },
    floor: { default: 0.2 },
    isDraggable: { type: Boolean, default: true },
    isDroppable: { type: [Boolean, Function], default: true },
    parentIds: {},
    id: {}
  },
  emits: ["onDragEnd", "onDragStart"],
  setup(t2, { expose: b, emit: p }) {
    const d = p, l = computed(() => t2.parentIds.at(-1) ?? null), I = (e) => {
      !e.dataTransfer || !(e.target instanceof HTMLElement) || !t2.isDraggable || (e.target.classList.add("dragging"), e.dataTransfer.dropEffect = "move", e.dataTransfer.effectAllowed = "move", r.value = { id: t2.id, parentId: l.value }, d("onDragStart", { id: t2.id, parentId: l.value }));
    }, h = (e) => typeof t2.isDroppable == "function" ? t2.isDroppable(r.value, {
      id: t2.id,
      parentId: l.value,
      offset: e
    }) : t2.isDroppable, s2 = o((e) => {
      var g, c;
      if (!r.value || r.value.id === t2.id || t2.parentIds.includes(((g = r.value) == null ? void 0 : g.id) ?? ""))
        return;
      const a = (c = t.value) == null ? void 0 : c.offset, o2 = e.target.offsetHeight, f = t2.floor * o2, u = t2.ceiling * o2;
      let i = 3;
      e.offsetY <= 0 && a && a !== 3 ? i = a : e.offsetY <= f ? i = 0 : e.offsetY >= u ? i = 1 : e.offsetY > f && e.offsetY < u && (i = 2), h(i) && (t.value = { id: t2.id, parentId: l.value, offset: i });
    }, 25), E = ["above", "below", "asChild"], S = computed(() => {
      var a;
      let e = "sidebar-indent-nested";
      return t2.id === ((a = t.value) == null ? void 0 : a.id) && (e += ` dragover-${E[t.value.offset]}`), e;
    }), Y = () => {
      if (!t.value || !r.value)
        return;
      const e = { ...r.value }, a = { ...t.value };
      r.value = null, t.value = null, document.querySelectorAll("div.dragging").forEach((o2) => o2.classList.remove("dragging")), e.id !== a.id && d("onDragEnd", e, a);
    };
    return b({
      draggingItem: r,
      hoveredItem: t
    }), (e, a) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(S.value),
      draggable: e.isDraggable,
      onDragend: Y,
      onDragover: a[0] || (a[0] = withModifiers(
        //@ts-ignore
        (...o2) => unref(s2) && unref(s2)(...o2),
        ["prevent", "stop"]
      )),
      onDragstart: withModifiers(I, ["stop"])
    }, [
      renderSlot(e.$slots, "default", {}, void 0, true)
    ], 42, k));
  }
});

// node_modules/.pnpm/@scalar+draggable@0.2.0_typescript@5.8.3/node_modules/@scalar/draggable/dist/_virtual/_plugin-vue_export-helper.js
var s = (t2, e) => {
  const o2 = t2.__vccOpts || t2;
  for (const [r2, c] of e)
    o2[r2] = c;
  return o2;
};

// node_modules/.pnpm/@scalar+draggable@0.2.0_typescript@5.8.3/node_modules/@scalar/draggable/dist/Draggable.vue.js
var m = s(O, [["__scopeId", "data-v-a89d6a6e"]]);

export {
  m
};
//# sourceMappingURL=chunk-EDZOC5EZ.js.map
