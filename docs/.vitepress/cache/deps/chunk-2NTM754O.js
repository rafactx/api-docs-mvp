import {
  m as m3
} from "./chunk-EDZOC5EZ.js";
import {
  w
} from "./chunk-CFPXHNMA.js";
import {
  useRouter
} from "./chunk-DWEZQID4.js";
import {
  s
} from "./chunk-ZNV4Z3VE.js";
import {
  W,
  m2 as m,
  m4 as m2,
  useClipboard
} from "./chunk-OYO2YRBV.js";
import {
  Fragment,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createVNode,
  defineComponent,
  normalizeClass,
  normalizeStyle,
  openBlock,
  ref,
  renderSlot,
  resolveComponent,
  toDisplayString,
  unref,
  withCtx,
  withModifiers
} from "./chunk-XQNPNIQJ.js";

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/Sidebar/SidebarList.vue.js
var s2 = {};
var l = { class: "gap-1/2 flex flex-col px-3 pb-[75px]" };
function n(e, f) {
  return openBlock(), createElementBlock("ul", l, [
    renderSlot(e.$slots, "default")
  ]);
}
var _ = s(s2, [["render", n]]);

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/Sidebar/SidebarListElementActions.vue.js
var E = { class: "absolute right-1 flex opacity-0 group-hover:opacity-100" };
var R = defineComponent({
  __name: "SidebarListElementActions",
  props: {
    variable: {},
    warningMessage: {},
    isCopyable: { type: Boolean },
    isDeletable: { type: Boolean },
    isRenameable: { type: Boolean }
  },
  emits: ["delete", "rename"],
  setup(d, { emit: p2 }) {
    const b = p2, o = ref({ action: "None", name: "" }), s3 = W(), { copyToClipboard: v } = useClipboard();
    function f(e) {
      o.value = { action: e, name: d.variable.name }, s3.show();
    }
    function c() {
      s3.hide(), o.value = { action: "None", name: "" };
    }
    function y(e) {
      b("delete", e), c();
    }
    return (e, t) => (openBlock(), createElementBlock(Fragment, null, [
      createBaseVNode("div", E, [
        e.isCopyable ? (openBlock(), createElementBlock("button", {
          key: 0,
          class: "text-c-3 hover:bg-b-3 hover:text-c-1 rounded p-[5px]",
          type: "button",
          onClick: t[0] || (t[0] = (u) => unref(v)(e.variable.name))
        }, [
          createVNode(unref(m), {
            class: "h-3 w-3",
            icon: "Clipboard"
          })
        ])) : createCommentVNode("", true),
        e.isRenameable ? (openBlock(), createElementBlock("button", {
          key: 1,
          class: "text-c-3 hover:bg-b-3 hover:text-c-1 rounded p-[5px]",
          type: "button",
          onClick: t[1] || (t[1] = (u) => b("rename", e.variable.uid))
        }, [
          createVNode(unref(m), {
            class: "h-3 w-3",
            icon: "Edit"
          })
        ])) : createCommentVNode("", true),
        !e.variable.isDefault && e.isDeletable ? (openBlock(), createElementBlock("button", {
          key: 2,
          class: "text-c-3 hover:bg-b-3 hover:text-c-1 rounded p-1",
          type: "button",
          onClick: t[2] || (t[2] = withModifiers((u) => f(
            "Delete"
            /* Delete */
          ), ["prevent"]))
        }, [
          createVNode(unref(m), {
            class: "h-3.5 w-3.5",
            icon: "Close"
          })
        ])) : createCommentVNode("", true)
      ]),
      createVNode(unref(m2), {
        size: "sm",
        state: unref(s3),
        title: `${o.value.action} ${o.value.name}`
      }, {
        default: withCtx(() => [
          o.value.action === "Delete" ? (openBlock(), createBlock(w, {
            key: 0,
            variableName: o.value.name,
            warningMessage: e.warningMessage,
            onClose: c,
            onDelete: t[3] || (t[3] = (u) => y(e.variable.uid))
          }, null, 8, ["variableName", "warningMessage"])) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["state", "title"])
    ], 64));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/Sidebar/SidebarListElement.vue2.js
var O = { class: "empty-variable-name line-clamp-1 text-sm break-all group-hover:pr-5" };
var q = defineComponent({
  __name: "SidebarListElement",
  props: {
    variable: {},
    warningMessage: {},
    to: {},
    isDeletable: { type: Boolean },
    isCopyable: { type: Boolean },
    isRenameable: { type: Boolean },
    isDraggable: { type: Boolean, default: false },
    isDroppable: { type: [Boolean, Function], default: false },
    collectionId: {}
  },
  emits: ["delete", "colorModal", "rename", "onDragEnd"],
  setup(i, { emit: u }) {
    const o = u, t = useRouter(), f = (e) => {
      e.metaKey ? window.open(t.resolve(i.to).href, "_blank") : t.push(i.to);
    }, c = (e) => {
      o("delete", e);
    }, v = (e) => {
      o("colorModal", e);
    }, D = (e) => {
      o("rename", e);
    }, y = ref(null), s3 = computed(() => ({
      ceiling: 0.5,
      floor: 0.5
    }));
    return (e, l2) => {
      const k = resolveComponent("router-link");
      return openBlock(), createElementBlock("li", null, [
        createVNode(unref(m3), {
          id: e.variable.uid,
          ref_key: "draggableRef",
          ref: y,
          ceiling: s3.value.ceiling,
          floor: s3.value.floor,
          isDraggable: e.isDraggable,
          isDroppable: e.isDroppable,
          parentIds: e.collectionId ? [e.collectionId] : [],
          onOnDragEnd: l2[2] || (l2[2] = (...a) => e.$emit("onDragEnd", ...a))
        }, {
          default: withCtx(() => [
            createVNode(k, {
              class: normalizeClass(["text-c-2 hover:bg-b-2 group relative flex h-8 items-center gap-1.5 rounded py-1 pr-1.5 font-medium no-underline", [e.variable.color ? "pl-5" : "pl-1.5"]]),
              exactActiveClass: "bg-b-2 !text-c-1",
              role: "button",
              to: e.to,
              onClick: l2[1] || (l2[1] = withModifiers((a) => f(a), ["prevent"]))
            }, {
              default: withCtx(() => [
                e.variable.color ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  class: "hover:bg-b-3 rounded p-1.5",
                  type: "button",
                  onClick: l2[0] || (l2[0] = (a) => v(e.variable.uid))
                }, [
                  createBaseVNode("div", {
                    class: "h-2.5 w-2.5 rounded-xl",
                    style: normalizeStyle({ backgroundColor: e.variable.color })
                  }, null, 4)
                ])) : createCommentVNode("", true),
                e.variable.icon ? (openBlock(), createBlock(unref(m), {
                  key: 1,
                  class: "text-sidebar-c-2 size-3.5 stroke-[2.25]",
                  icon: e.variable.icon
                }, null, 8, ["icon"])) : createCommentVNode("", true),
                createBaseVNode("span", O, toDisplayString(e.variable.name), 1),
                createVNode(R, {
                  isCopyable: !!e.isCopyable,
                  isDeletable: !!e.isDeletable,
                  isRenameable: !!e.isRenameable,
                  variable: { ...e.variable, isDefault: e.variable.isDefault ?? false },
                  warningMessage: e.warningMessage,
                  onDelete: c,
                  onRename: D
                }, null, 8, ["isCopyable", "isDeletable", "isRenameable", "variable", "warningMessage"])
              ]),
              _: 1
            }, 8, ["class", "to"])
          ]),
          _: 1
        }, 8, ["id", "ceiling", "floor", "isDraggable", "isDroppable", "parentIds"])
      ]);
    };
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/Sidebar/SidebarListElement.vue.js
var p = s(q, [["__scopeId", "data-v-0b6c70e4"]]);

export {
  _,
  p
};
//# sourceMappingURL=chunk-2NTM754O.js.map
