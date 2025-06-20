import {
  e
} from "./chunk-64TJZ2DX.js";
import "./chunk-RDVDQCBW.js";
import "./chunk-DWEZQID4.js";
import {
  je,
  s,
  z
} from "./chunk-ZNV4Z3VE.js";
import {
  b
} from "./chunk-XAH4TE55.js";
import {
  $,
  _3 as _,
  m2 as m
} from "./chunk-OYO2YRBV.js";
import "./chunk-3FIKATP3.js";
import {
  Fragment,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createVNode,
  defineComponent,
  nextTick,
  openBlock,
  ref,
  unref,
  watch,
  withCtx
} from "./chunk-XQNPNIQJ.js";
import "./chunk-DC5AMYBS.js";

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Collection/components/MarkdownInput.vue2.js
var z2 = { class: "flex h-full w-full flex-col gap-2 pt-8" };
var C = { class: "flex min-h-8 items-center justify-between gap-2 pl-1.5" };
var I = { class: "has-[:focus-visible]:bg-b-1 group relative z-1 flex flex-col rounded-lg" };
var B = { class: "flex h-full min-h-[calc(1rem*4)] flex-col" };
var $2 = {
  key: 1,
  class: "text-c-3 flex h-full items-center justify-center rounded-lg border p-4"
};
var D = defineComponent({
  __name: "MarkdownInput",
  props: {
    modelValue: {},
    environment: {},
    envVariables: {},
    workspace: {}
  },
  emits: ["update:modelValue"],
  setup(E, { emit: k }) {
    const g = k, t = ref("preview"), m3 = ref(null);
    return watch(t, (l) => {
      l === "edit" && nextTick(() => {
        var e2;
        (e2 = m3.value) == null || e2.focus();
      });
    }), (l, e2) => (openBlock(), createElementBlock("div", z2, [
      createBaseVNode("div", C, [
        e2[6] || (e2[6] = createBaseVNode("h3", { class: "font-bold" }, "Description", -1)),
        t.value === "preview" ? (openBlock(), createBlock(unref($), {
          key: 0,
          class: "text-c-2 hover:text-c-1 flex items-center gap-2",
          size: "sm",
          type: "button",
          variant: "outlined",
          onClick: e2[0] || (e2[0] = (r) => t.value = "edit")
        }, {
          default: withCtx(() => [
            createVNode(unref(m), {
              icon: "Pencil",
              size: "sm",
              thickness: "1.5"
            }),
            e2[5] || (e2[5] = createBaseVNode("span", null, "Edit", -1))
          ]),
          _: 1
        })) : createCommentVNode("", true)
      ]),
      createBaseVNode("div", I, [
        createBaseVNode("div", B, [
          t.value === "preview" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            l.modelValue && l.modelValue.trim().length ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              l.modelValue ? (openBlock(), createBlock(unref(_), {
                key: 0,
                class: "h-full flex-1 rounded border border-transparent p-1.5 hover:border-(--scalar-background-3)",
                value: l.modelValue,
                withImages: "",
                onDblclick: e2[1] || (e2[1] = (r) => t.value = "edit")
              }, null, 8, ["value"])) : createCommentVNode("", true),
              e2[7] || (e2[7] = createBaseVNode("div", { class: "brightness-lifted bg-b-1 absolute inset-0 -z-1 hidden rounded group-hover:block group-has-[:focus-visible]:hidden" }, null, -1))
            ], 64)) : (openBlock(), createElementBlock("div", $2, [
              createVNode(unref($), {
                class: "hover:bg-b-2 hover:text-c-1 text-c-2 flex items-center gap-2",
                size: "sm",
                variant: "ghost",
                onClick: e2[2] || (e2[2] = (r) => t.value = "edit")
              }, {
                default: withCtx(() => [
                  createVNode(unref(m), {
                    icon: "Pencil",
                    size: "sm",
                    thickness: "1.5"
                  }),
                  e2[8] || (e2[8] = createBaseVNode("span", null, "Write a description", -1))
                ]),
                _: 1
              })
            ]))
          ], 64)) : createCommentVNode("", true),
          t.value === "edit" ? (openBlock(), createBlock(e, {
            key: 1,
            ref_key: "codeInputRef",
            ref: m3,
            class: "h-full flex-1 border px-0.5 py-0",
            envVariables: l.envVariables,
            environment: l.environment,
            modelValue: l.modelValue,
            workspace: l.workspace,
            onBlur: e2[3] || (e2[3] = (r) => t.value = "preview"),
            "onUpdate:modelValue": e2[4] || (e2[4] = (r) => g("update:modelValue", r))
          }, null, 8, ["envVariables", "environment", "modelValue", "workspace"])) : createCommentVNode("", true)
        ])
      ])
    ]));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Collection/components/MarkdownInput.vue.js
var m2 = s(D, [["__scopeId", "data-v-1d968b50"]]);

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Collection/CollectionOverview.vue2.js
var M = defineComponent({
  __name: "CollectionOverview",
  setup(C2) {
    const {
      activeCollection: o,
      activeEnvironment: t,
      activeEnvVariables: s2,
      activeWorkspace: n
    } = z(), { collectionMutators: m3 } = je(), p = (i) => {
      o.value && m3.edit(o.value.uid, "info.description", i);
    };
    return (i, w) => (openBlock(), createBlock(b, null, {
      default: withCtx(() => {
        var r, a;
        return [
          unref(t) && unref(n) ? (openBlock(), createBlock(m2, {
            key: 0,
            envVariables: unref(s2),
            environment: unref(t),
            modelValue: ((a = (r = unref(o)) == null ? void 0 : r.info) == null ? void 0 : a.description) ?? "",
            workspace: unref(n),
            "onUpdate:modelValue": p
          }, null, 8, ["envVariables", "environment", "modelValue", "workspace"])) : createCommentVNode("", true)
        ];
      }),
      _: 1
    }));
  }
});
export {
  M as default
};
//# sourceMappingURL=CollectionOverview.vue-NARKFC22.js.map
