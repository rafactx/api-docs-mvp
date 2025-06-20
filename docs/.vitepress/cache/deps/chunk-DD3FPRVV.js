import {
  b,
  h
} from "./chunk-ALQZ3NUE.js";
import {
  a
} from "./chunk-CFPXHNMA.js";
import {
  je
} from "./chunk-ZNV4Z3VE.js";
import {
  $,
  P,
  i,
  m2 as m,
  m4 as m2
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
  nextTick,
  normalizeClass,
  normalizeStyle,
  openBlock,
  ref,
  renderList,
  toDisplayString,
  unref,
  vModelText,
  watch,
  withCtx,
  withDirectives
} from "./chunk-XQNPNIQJ.js";

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Environment/EnvironmentColors.vue.js
var R = ["onClick"];
var T = ["placeholder"];
var U = defineComponent({
  __name: "EnvironmentColors",
  props: {
    activeColor: {},
    selector: { type: Boolean, default: false }
  },
  emits: ["select"],
  setup(x, { emit: F }) {
    const e = x, z = F, o = ref(""), C = ref(null), a2 = ref(false), u = ref(false), k = [
      { color: "#FFFFFF" },
      { color: "#EF0006" },
      { color: "#EDBE20" },
      { color: "#069061" },
      { color: "#FB892C" },
      { color: "#0082D0" },
      { color: "#5203D1" },
      { color: "#FFC0CB" }
    ], b3 = computed(() => e.activeColor && !k.some((l) => l.color === e.activeColor) || o.value ? `background-color: ${e.activeColor || o.value};` : "background: linear-gradient(to right, rgb(235, 87, 87), rgb(242, 201, 76), rgb(76, 183, 130), rgb(78, 167, 252), rgb(250, 96, 122));"), y = () => {
      a2.value = !a2.value, e.selector && (u.value = false), nextTick(() => {
        C.value && C.value.focus();
      });
    };
    watch(o, (l) => {
      l && !l.startsWith("#") && (o.value = `#${l}`), a2.value = true;
    });
    const B = () => {
      e.selector && (u.value = !u.value);
    }, g = (l) => {
      z("select", l), e.selector && (u.value = false);
    };
    return (l, i2) => (openBlock(), createElementBlock("div", null, [
      a2.value ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        e.selector && !u.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["flex cursor-pointer items-center justify-center rounded-full", e.selector ? "h-4 w-4" : "h-5 w-5"]),
          style: normalizeStyle({ backgroundColor: l.activeColor }),
          onClick: B
        }, [
          l.activeColor ? (openBlock(), createBlock(unref(m), {
            key: 0,
            class: normalizeClass(["text-c-btn", e.selector && "p-0.5"]),
            icon: "Checkmark",
            size: "xs"
          }, null, 8, ["class"])) : createCommentVNode("", true)
        ], 6)) : createCommentVNode("", true),
        u.value || !e.selector ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(["color-selector flex flex-row items-center justify-between gap-1.5 space-x-1", e.selector ? "h-4" : "min-h-10 min-w-[296px]"])
        }, [
          (openBlock(), createElementBlock(Fragment, null, renderList(k, (r) => createBaseVNode("div", {
            key: r.color,
            class: normalizeClass(["flex cursor-pointer items-center justify-center rounded-full", e.selector ? "h-4 w-4" : "h-5 w-5"]),
            style: normalizeStyle({ backgroundColor: r.color }),
            onClick: (L) => g(r.color)
          }, [
            l.activeColor === r.color && !o.value ? (openBlock(), createBlock(unref(m), {
              key: 0,
              class: normalizeClass(["text-c-btn", e.selector && "p-0.5"]),
              icon: "Checkmark",
              size: "xs"
            }, null, 8, ["class"])) : createCommentVNode("", true)
          ], 14, R)), 64)),
          i2[2] || (i2[2] = createBaseVNode("hr", { class: "border-ghost h-5 w-0.5 border-l" }, null, -1)),
          createBaseVNode("label", {
            class: normalizeClass(["z-10 flex cursor-pointer flex-row items-center justify-center gap-2 rounded-full", e.selector ? "h-4 w-4" : "h-5 w-5"]),
            style: normalizeStyle(b3.value),
            onClick: y
          }, [
            !a2.value && (l.activeColor === o.value || l.activeColor && !k.some((r) => r.color === l.activeColor)) ? (openBlock(), createBlock(unref(m), {
              key: 0,
              class: "text-c-btn",
              icon: "Checkmark",
              size: "xs"
            })) : createCommentVNode("", true)
          ], 6)
        ], 2)) : createCommentVNode("", true)
      ], 64)),
      a2.value ? (openBlock(), createElementBlock("div", {
        key: 1,
        class: normalizeClass(["color-selector flex flex-1 items-center gap-2 rounded", e.selector ? "h-4" : "min-h-10"])
      }, [
        createBaseVNode("span", {
          class: normalizeClass(["absolute rounded-full border border-dashed", e.selector ? "h-4 w-4" : "h-5 w-5"])
        }, null, 2),
        createBaseVNode("span", {
          class: normalizeClass(["z-[1] rounded-full", e.selector ? "h-4 w-4" : "h-5 w-5"]),
          style: normalizeStyle(b3.value)
        }, null, 6),
        withDirectives(createBaseVNode("input", {
          ref_key: "customColorInputRef",
          ref: C,
          "onUpdate:modelValue": i2[0] || (i2[0] = (r) => o.value = r),
          class: "w-full flex-1 border-transparent text-sm outline-none",
          placeholder: l.activeColor || "#000000",
          type: "text",
          onInput: i2[1] || (i2[1] = (r) => g(o.value))
        }, null, 40, T), [
          [vModelText, o.value]
        ]),
        createBaseVNode("button", {
          class: "text-c-3 hover:bg-b-2 rounded-lg p-1.5",
          type: "button",
          onClick: y
        }, [
          createVNode(unref(m), {
            icon: "Checkmark",
            size: "xs"
          })
        ])
      ], 2)) : createCommentVNode("", true)
    ]));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Environment/EnvironmentColorModal.vue.js
var b2 = { class: "flex flex-col gap-4" };
var M = defineComponent({
  __name: "EnvironmentColorModal",
  props: {
    state: {},
    selectedColor: {}
  },
  emits: ["cancel", "submit"],
  setup(r, { emit: a2 }) {
    const s = r, o = a2, e = ref(""), c = (t) => {
      e.value = t;
    }, i2 = () => {
      o("submit", e.value), e.value = "";
    };
    return (t, l) => (openBlock(), createBlock(unref(m2), {
      size: "xxs",
      state: t.state,
      title: "Edit Environment Color"
    }, {
      default: withCtx(() => [
        createBaseVNode("div", b2, [
          createVNode(U, {
            activeColor: e.value || s.selectedColor,
            class: "w-full p-1",
            onSelect: c
          }, null, 8, ["activeColor"]),
          createVNode(a, {
            onCancel: l[0] || (l[0] = (E) => o("cancel")),
            onSubmit: i2
          })
        ])
      ]),
      _: 1
    }, 8, ["state"]));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Environment/EnvironmentModal.vue.js
var j = { class: "flex items-start gap-2" };
var K = defineComponent({
  __name: "EnvironmentModal",
  props: {
    state: {},
    activeWorkspaceCollections: {},
    collectionId: {}
  },
  emits: ["cancel", "submit"],
  setup(g, { emit: F }) {
    const n = g, f = F, { events: S } = je(), i2 = ref(""), c = ref("#FFFFFF"), d = computed(() => [
      ...n.activeWorkspaceCollections.filter((t) => {
        var e;
        return ((e = t.info) == null ? void 0 : e.title) !== "Drafts";
      }).map((t) => {
        var e;
        return {
          id: t.uid,
          label: ((e = t.info) == null ? void 0 : e.title) ?? "Untitled Collection"
        };
      })
    ]), l = ref(
      d.value.find((t) => t.id === n.collectionId)
    ), { toast: b3 } = i(), V = (t) => {
      c.value = t;
    };
    watch(
      () => n.state.open,
      (t) => {
        t && (i2.value = "", c.value = "#FFFFFF", n.collectionId ? l.value = d.value.find(
          (e) => e.id === n.collectionId
        ) : l.value = void 0);
      }
    );
    const k = () => {
      var t, e, o, C;
      if (!i2.value.trim()) {
        b3("Please enter a name before adding an environment.", "error");
        return;
      }
      if (!((t = l.value) != null && t.id)) {
        b3("Please select a collection before adding an environment.", "error");
        return;
      }
      f("submit", {
        name: i2.value,
        color: c.value,
        type: ((e = l.value) == null ? void 0 : e.id) === "global" ? "global" : "collection",
        collectionId: ((o = l.value) == null ? void 0 : o.id) !== "global" ? (C = l.value) == null ? void 0 : C.id : void 0
      });
    }, y = () => {
      n.state.hide(), S.commandPalette.emit({ commandName: "Create Collection" });
    };
    return (t, e) => (openBlock(), createBlock(unref(m2), {
      bodyClass: "border-t-0 rounded-t-lg",
      size: "xs",
      state: t.state
    }, {
      default: withCtx(() => [
        createVNode(h, {
          disabled: !l.value || !i2.value.trim(),
          onCancel: e[2] || (e[2] = (o) => f("cancel")),
          onSubmit: k
        }, {
          options: withCtx(() => [
            createVNode(unref(P), {
              modelValue: l.value,
              "onUpdate:modelValue": e[1] || (e[1] = (o) => l.value = o),
              options: d.value,
              placeholder: "Select Type"
            }, {
              default: withCtx(() => [
                d.value.length > 0 ? (openBlock(), createBlock(unref($), {
                  key: 0,
                  class: "hover:bg-b-2 max-h-8 w-fit justify-between gap-1 p-2 text-xs",
                  variant: "outlined"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("span", {
                      class: normalizeClass(l.value ? "text-c-1" : "text-c-3")
                    }, toDisplayString(l.value ? l.value.label : "Select Collection"), 3),
                    createVNode(unref(m), {
                      class: "text-c-3",
                      icon: "ChevronDown",
                      size: "xs"
                    })
                  ]),
                  _: 1
                })) : (openBlock(), createBlock(unref($), {
                  key: 1,
                  class: "hover:bg-b-2 max-h-8 justify-between gap-1 p-2 text-xs",
                  variant: "outlined",
                  onClick: y
                }, {
                  default: withCtx(() => e[3] || (e[3] = [
                    createBaseVNode("span", { class: "text-c-1" }, "Create Collection", -1)
                  ])),
                  _: 1
                }))
              ]),
              _: 1
            }, 8, ["modelValue", "options"])
          ]),
          submit: withCtx(() => e[4] || (e[4] = [
            createTextVNode(" Add Environment ")
          ])),
          default: withCtx(() => [
            createBaseVNode("div", j, [
              createVNode(U, {
                activeColor: c.value,
                class: "peer",
                selector: "",
                onSelect: V
              }, null, 8, ["activeColor"]),
              createVNode(b, {
                modelValue: i2.value,
                "onUpdate:modelValue": e[0] || (e[0] = (o) => i2.value = o),
                class: "-mt-[.5px] !p-0 peer-has-[.color-selector]:hidden",
                placeholder: "Environment name"
              }, null, 8, ["modelValue"])
            ])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }, 8, ["state"]));
  }
});

export {
  M,
  K
};
//# sourceMappingURL=chunk-DD3FPRVV.js.map
