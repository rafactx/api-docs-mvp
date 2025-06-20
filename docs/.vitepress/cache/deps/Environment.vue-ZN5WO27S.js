import {
  _,
  p
} from "./chunk-2NTM754O.js";
import {
  g
} from "./chunk-QMSDB3Q6.js";
import {
  x
} from "./chunk-524CYAFW.js";
import "./chunk-CUZGNH74.js";
import {
  d
} from "./chunk-TMV5K3GQ.js";
import {
  u
} from "./chunk-S4LPBKVU.js";
import {
  K,
  M
} from "./chunk-DD3FPRVV.js";
import "./chunk-ALQZ3NUE.js";
import {
  C
} from "./chunk-ZGQEBP2O.js";
import "./chunk-EDZOC5EZ.js";
import "./chunk-CFPXHNMA.js";
import {
  m as m4
} from "./chunk-NHYM5363.js";
import {
  m as m3
} from "./chunk-GOSQUSWR.js";
import {
  e
} from "./chunk-64TJZ2DX.js";
import "./chunk-RDVDQCBW.js";
import {
  useRoute,
  useRouter
} from "./chunk-DWEZQID4.js";
import {
  a,
  je,
  z
} from "./chunk-ZNV4Z3VE.js";
import {
  b
} from "./chunk-XAH4TE55.js";
import {
  $,
  W,
  i,
  m2 as m,
  m4 as m2
} from "./chunk-OYO2YRBV.js";
import "./chunk-3FIKATP3.js";
import {
  Fragment,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createSlots,
  createTextVNode,
  createVNode,
  defineComponent,
  normalizeClass,
  onBeforeUnmount,
  onMounted,
  openBlock,
  ref,
  renderList,
  toDisplayString,
  unref,
  vShow,
  watch,
  withCtx,
  withDirectives,
  withModifiers
} from "./chunk-XQNPNIQJ.js";
import "./chunk-DC5AMYBS.js";

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Environment/handle-drag.js
function U(l, v) {
  return {
    handleDragEnd: (t, d2) => {
      if (!t || !d2)
        return;
      const { id: s, parentId: i2 } = t, { id: x2, parentId: p2, offset: u2 } = d2;
      if (i2 !== p2)
        return;
      const e2 = l.value.find((n) => n.uid === i2);
      if (!e2 || !e2["x-scalar-environments"])
        return;
      const o = e2["x-scalar-environments"], r = Object.keys(o);
      ({ ...o });
      const f = r.findIndex((n) => n === s);
      r.splice(f, 1);
      const g2 = r.findIndex((n) => n === x2) + (u2 === 1 ? 1 : 0);
      r.splice(g2, 0, s);
      const I = r.reduce(
        (n, a2) => {
          const c = o[a2];
          return c && (n[a2] = c), n;
        },
        {}
      );
      e2["x-scalar-environments"] = I, v.edit(e2.uid, "x-scalar-environments", e2["x-scalar-environments"]);
    },
    isDroppable: (t, d2) => t.parentId === d2.parentId
  };
}

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Environment/Environment.vue2.js
var Be = { class: "flex-1" };
var Le = ["onClick"];
var Ke = { class: "flex h-5 max-w-[14px] items-center justify-center" };
var vn = defineComponent({
  __name: "Environment",
  setup(Ge) {
    const k = useRouter(), g2 = useRoute(), {
      activeWorkspace: p2,
      activeEnvironment: F,
      activeWorkspaceCollections: d2,
      activeEnvVariables: q
    } = z(), { events: N, workspaceMutators: Q, collectionMutators: x2 } = je(), { collapsedSidebarFolders: y, toggleSidebarFolder: w } = m3(), D = W(), I = W(), M2 = W(), R = ref(null), s = ref("default"), W2 = ref(""), h = ref(void 0), v = ref(void 0), S = ref(void 0), { toast: U2 } = i(), X = (e2) => JSON.parse(e2);
    function z2(e2, o, n) {
      var t;
      e2 && (o.uid === n ? U2(
        `Environment name already used in ${(t = o.info) == null ? void 0 : t.title}`,
        "error"
      ) : U2("Environment name already used in another collection", "error"));
    }
    const E = computed(() => d2.value.filter(
      (e2) => {
        var o;
        return ((o = e2.info) == null ? void 0 : o.title) !== "Drafts";
      }
    ));
    function Y(e2) {
      E.value.some(
        (n) => {
          const t = Object.keys(
            n["x-scalar-environments"] || {}
          ).includes(e2.name);
          return z2(t, n, e2.collectionId), t;
        }
      ) || (e2.collectionId && (x2.addEnvironment(
        e2.name,
        {
          variables: {},
          color: e2.color
        },
        e2.collectionId
      ), y[e2.collectionId] || w(e2.collectionId), k.push({
        name: "environment.collection",
        params: {
          [a.Collection]: e2.collectionId,
          [a.Environment]: e2.name
        }
      })), I.hide());
    }
    function Z(e2) {
      var n, t;
      if (!F)
        return;
      const o = X(e2);
      if (s.value === "default")
        Q.edit(
          (n = p2.value) == null ? void 0 : n.uid,
          "environments",
          o
        );
      else {
        const a2 = d2.value.find(
          (r) => {
            var m5;
            return (m5 = r["x-scalar-environments"]) == null ? void 0 : m5[s.value ?? ""];
          }
        );
        if ((t = a2 == null ? void 0 : a2["x-scalar-environments"]) != null && t[s.value ?? ""]) {
          const r = a2["x-scalar-environments"][s.value ?? ""];
          r && (r.variables = o, x2.edit(
            a2.uid,
            "x-scalar-environments",
            a2["x-scalar-environments"]
          ));
        }
      }
    }
    const $2 = (e2) => {
      h.value = e2, I.show();
    }, ee = (e2, o) => {
      v.value = e2, h.value = o, S.value = e2, M2.show();
    }, ne = (e2) => {
      var o, n, t;
      R.value = e2, W2.value = ((t = (n = (o = d2.value.find(
        (a2) => {
          var r;
          return (r = a2["x-scalar-environments"]) == null ? void 0 : r[e2];
        }
      )) == null ? void 0 : o["x-scalar-environments"]) == null ? void 0 : n[e2]) == null ? void 0 : t.color) ?? "", D.show();
    }, te = (e2) => {
      const o = R.value;
      typeof o == "string" && (d2.value.some(
        (t) => {
          var a2;
          return (a2 = t["x-scalar-environments"]) == null ? void 0 : a2[o];
        }
      ) && d2.value.forEach((t) => {
        var a2;
        (a2 = t["x-scalar-environments"]) != null && a2[o] && (t["x-scalar-environments"][o].color = e2, x2.edit(
          t.uid,
          "x-scalar-environments",
          t["x-scalar-environments"]
        ));
      }), D.hide());
    };
    function oe(e2) {
      var n;
      E.value.forEach((t) => {
        x2.removeEnvironment(e2, t.uid);
      });
      const o = E.value.flatMap(
        (t) => Object.keys(t["x-scalar-environments"] || {})
      );
      if (o.length > 0) {
        const t = o[o.length - 1];
        if (!t)
          return;
        const a2 = d2.value.find(
          (r) => Object.keys(r["x-scalar-environments"] || {}).includes(
            t
          )
        );
        s.value = t, k.push({
          name: "environment.collection",
          params: {
            [a.Collection]: a2 == null ? void 0 : a2.uid,
            [a.Environment]: t
          }
        }), a2 && !y[a2.uid] && w(a2.uid);
      } else
        s.value = "default", k.push({
          name: "environment.default",
          params: {
            [a.Workspace]: (n = p2.value) == null ? void 0 : n.uid
          }
        });
    }
    const ae = () => s.value === "default" ? "Global Environment" : s.value, re = () => {
      var e2, o, n, t;
      return s.value === "default" ? JSON.stringify((e2 = p2.value) == null ? void 0 : e2.environments, null, 2) : JSON.stringify(
        (t = (n = (o = d2.value.find(
          (a2) => {
            var r;
            return (r = a2["x-scalar-environments"]) == null ? void 0 : r[s.value ?? ""];
          }
        )) == null ? void 0 : o["x-scalar-environments"]) == null ? void 0 : n[s.value ?? ""]) == null ? void 0 : t.variables,
        null,
        2
      );
    }, le = (e2) => y[e2], A = (e2) => {
      e2 != null && e2.createNew && g2.name === "environment" && $2();
    };
    watch(
      () => [g2.params[a.Collection], g2.params[a.Environment]],
      ([e2, o]) => {
        e2 ? s.value = o : s.value = "default";
      }
    ), onMounted(() => {
      s.value = g2.params[a.Environment] || "default", N.hotKeys.on(A);
      const e2 = g2.params[a.Collection];
      e2 && !y[e2] && w(e2);
    }), onBeforeUnmount(() => N.hotKeys.off(A));
    const se = (e2, o, n) => {
      var a2, r;
      const t = n ? {
        name: "environment.collection",
        params: {
          [a.Workspace]: (a2 = p2.value) == null ? void 0 : a2.uid,
          [a.Collection]: n,
          [a.Environment]: o
        }
      } : {
        name: "environment.default",
        params: {
          [a.Workspace]: (r = p2.value) == null ? void 0 : r.uid,
          [a.Environment]: o
        }
      };
      e2.metaKey ? window.open(k.resolve(t).href, "_blank") : k.push(t);
    };
    function ie() {
      v.value = void 0, h.value = void 0, S.value = void 0, M2.hide();
    }
    function ue(e2) {
      E.value.some(
        (n) => {
          const t = Object.keys(
            n["x-scalar-environments"] || {}
          ).includes(e2);
          return z2(
            t,
            n,
            h.value
          ), t;
        }
      ) || (e2 && v.value !== "default" && d2.value.forEach((n) => {
        var t;
        if ((t = n["x-scalar-environments"]) != null && t[v.value ?? ""]) {
          const a2 = n["x-scalar-environments"], r = {};
          Object.keys(a2).forEach((m5) => {
            const V = a2[m5];
            V && (m5 === v.value ? r[e2] = V : r[m5] = V);
          }), n["x-scalar-environments"] = r, x2.edit(
            n.uid,
            "x-scalar-environments",
            n["x-scalar-environments"]
          );
        }
      }), e2 && s.value === v.value && (s.value = e2), v.value = void 0, h.value = void 0, S.value = void 0, M2.hide());
    }
    const { handleDragEnd: me, isDroppable: ce } = U(
      d2,
      x2
    );
    return (e2, o) => (openBlock(), createBlock(u, null, {
      default: withCtx(() => [
        createVNode(m4, { title: "Collections" }, {
          content: withCtx(() => [
            createBaseVNode("div", Be, [
              createVNode(_, null, {
                default: withCtx(() => [
                  (openBlock(), createBlock(p, {
                    key: "default",
                    class: "text-xs",
                    isCopyable: false,
                    to: {
                      name: "environment",
                      params: {
                        [unref(a).Environment]: "default"
                      }
                    },
                    type: "environment",
                    variable: {
                      name: "Global Environment",
                      uid: "default",
                      icon: "Globe",
                      isDefault: true
                    }
                  }, null, 8, ["to"])),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(E.value, (n) => {
                    var t;
                    return openBlock(), createElementBlock("li", {
                      key: n.uid,
                      class: "gap-1/2 flex flex-col"
                    }, [
                      createBaseVNode("button", {
                        class: "hover:bg-b-2 group flex w-full items-center gap-1.5 rounded p-1.5 text-left text-sm font-medium break-words",
                        type: "button",
                        onClick: (a2) => unref(w)(n.uid)
                      }, [
                        createBaseVNode("span", Ke, [
                          createVNode(unref(d), {
                            class: "text-sidebar-c-2 size-3.5 min-w-3.5 stroke-2 group-hover:hidden",
                            src: n["x-scalar-icon"] || "interface-content-folder"
                          }, null, 8, ["src"]),
                          createBaseVNode("div", {
                            class: normalizeClass({
                              "rotate-90": unref(y)[n.uid]
                            })
                          }, [
                            createVNode(unref(m), {
                              class: "text-c-3 hover:text-c-1 hidden text-sm group-hover:block",
                              icon: "ChevronRight",
                              size: "md"
                            })
                          ], 2)
                        ]),
                        createTextVNode(" " + toDisplayString(((t = n.info) == null ? void 0 : t.title) ?? ""), 1)
                      ], 8, Le),
                      withDirectives(createBaseVNode("div", {
                        class: normalizeClass({
                          "before:bg-border relative mb-[.5px] before:pointer-events-none before:absolute before:top-0 before:left-3 before:z-1 before:h-[calc(100%_+_.5px)] before:w-[.5px] last:mb-0 last:before:h-full": Object.keys(n["x-scalar-environments"] || {}).length > 0
                        })
                      }, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(n["x-scalar-environments"], (a2, r) => (openBlock(), createBlock(p, {
                          key: r,
                          class: "text-xs",
                          collectionId: n.uid,
                          isCopyable: false,
                          isDeletable: true,
                          isRenameable: true,
                          isDraggable: true,
                          isDroppable: unref(ce),
                          to: {
                            name: "environment.collection",
                            params: {
                              [unref(a).Collection]: n.uid,
                              [unref(a).Environment]: r
                            }
                          },
                          type: "environment",
                          variable: {
                            name: r,
                            uid: r,
                            color: a2.color ?? "#FFFFFF",
                            isDefault: false
                          },
                          warningMessage: "Are you sure you want to delete this environment?",
                          onClick: withModifiers((m5) => se(m5, r, n.uid), ["prevent"]),
                          onColorModal: (m5) => ne(r),
                          onDelete: (m5) => oe(r),
                          onRename: (m5) => ee(r, n.uid),
                          onOnDragEnd: unref(me)
                        }, null, 8, ["collectionId", "isDroppable", "to", "variable", "onClick", "onColorModal", "onDelete", "onRename", "onOnDragEnd"]))), 128)),
                        Object.keys(n["x-scalar-environments"] || {}).length === 0 ? (openBlock(), createBlock(unref($), {
                          key: 0,
                          class: "text-c-1 hover:bg-b-2 flex h-8 w-full justify-start gap-1.5 py-0 pl-6 text-xs",
                          variant: "ghost",
                          onClick: (a2) => $2(n.uid)
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(m), {
                              icon: "Add",
                              size: "sm"
                            }),
                            o[2] || (o[2] = createBaseVNode("span", null, "Add Environment", -1))
                          ]),
                          _: 2
                        }, 1032, ["onClick"])) : createCommentVNode("", true)
                      ], 2), [
                        [vShow, le(n.uid)]
                      ])
                    ]);
                  }), 128))
                ]),
                _: 1
              })
            ])
          ]),
          button: withCtx(() => [
            createVNode(g, {
              click: $2,
              hotkey: "N"
            }, {
              title: withCtx(() => o[3] || (o[3] = [
                createTextVNode(" Add Environment ")
              ])),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(x, { class: "flex-1" }, {
          default: withCtx(() => [
            createVNode(b, null, createSlots({
              default: withCtx(() => [
                s.value && unref(p2) ? (openBlock(), createBlock(e, {
                  key: 0,
                  class: "py-2 pr-2 pl-px md:px-4",
                  envVariables: unref(q),
                  environment: unref(F),
                  isCopyable: "",
                  language: "json",
                  lineNumbers: "",
                  lint: "",
                  modelValue: re(),
                  workspace: unref(p2),
                  "onUpdate:modelValue": Z
                }, null, 8, ["envVariables", "environment", "modelValue", "workspace"])) : createCommentVNode("", true)
              ]),
              _: 2
            }, [
              s.value ? {
                name: "title",
                fn: withCtx(() => [
                  createBaseVNode("span", null, toDisplayString(ae()), 1)
                ]),
                key: "0"
              } : void 0
            ]), 1024)
          ]),
          _: 1
        }),
        createVNode(M, {
          selectedColor: W2.value,
          state: unref(D),
          onCancel: o[0] || (o[0] = (n) => unref(D).hide()),
          onSubmit: te
        }, null, 8, ["selectedColor", "state"]),
        createVNode(K, {
          activeWorkspaceCollections: E.value,
          collectionId: h.value,
          state: unref(I),
          onCancel: o[1] || (o[1] = (n) => unref(I).hide()),
          onSubmit: Y
        }, null, 8, ["activeWorkspaceCollections", "collectionId", "state"]),
        createVNode(unref(m2), {
          size: "xxs",
          state: unref(M2),
          title: `Edit ${v.value}`
        }, {
          default: withCtx(() => [
            createVNode(C, {
              name: S.value ?? "",
              onClose: ie,
              onEdit: ue
            }, null, 8, ["name"])
          ]),
          _: 1
        }, 8, ["state", "title"])
      ]),
      _: 1
    }));
  }
});
export {
  vn as default
};
//# sourceMappingURL=Environment.vue-ZN5WO27S.js.map
