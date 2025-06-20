import {
  q
} from "./chunk-WEGHB5FB.js";
import {
  w
} from "./chunk-CFPXHNMA.js";
import {
  O
} from "./chunk-JYVXE3FK.js";
import "./chunk-75A6VDJY.js";
import "./chunk-AUM3FYPR.js";
import "./chunk-64TJZ2DX.js";
import "./chunk-RDVDQCBW.js";
import "./chunk-DWEZQID4.js";
import {
  je,
  z
} from "./chunk-ZNV4Z3VE.js";
import "./chunk-XAH4TE55.js";
import {
  $,
  A,
  REGEX,
  W,
  _3 as _,
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
  createStaticVNode,
  createVNode,
  defineComponent,
  normalizeClass,
  openBlock,
  ref,
  renderList,
  toDisplayString,
  unref,
  watch,
  withCtx
} from "./chunk-XQNPNIQJ.js";
import "./chunk-DC5AMYBS.js";

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Collection/CollectionServerForm.vue.js
var W2 = defineComponent({
  __name: "CollectionServerForm",
  props: {
    collectionId: { default: "" },
    serverUid: { default: "" }
  },
  setup(v) {
    const l = v, { activeWorkspaceCollections: s } = z(), { servers: d, serverMutators: i } = je(), p = [
      {
        label: "URL",
        key: "url",
        placeholder: "https://void.scalar.com",
        type: "text"
      },
      {
        label: "Description",
        key: "description",
        placeholder: "Production",
        type: "text"
      }
    ], a = computed(() => {
      const e = s.value.find(
        (r) => r.uid === l.collectionId
      );
      return d[e && typeof l.serverUid == "string" && l.serverUid === "default" ? e.servers[0] ?? "" : (e == null ? void 0 : e.servers.find((r) => r === l.serverUid)) ?? ""];
    }), f = computed(() => {
      var e, r;
      return (e = a.value) != null && e.url ? ((r = a.value.url.match(REGEX.PATH)) == null ? void 0 : r.map((t) => t.slice(1, -1))) ?? [] : [];
    });
    watch(
      f,
      (e) => {
        if (!a.value)
          return;
        const r = a.value.variables ? { ...a.value.variables } : {};
        Object.keys(r).forEach((t) => {
          e.includes(t) || delete r[t];
        }), e.forEach((t) => {
          r[t] || (r[t] = { default: "" });
        }), i.edit(a.value.uid, "variables", r);
      },
      { immediate: true }
    );
    const m3 = (e, r) => {
      !s.value || !a.value || i.edit(a.value.uid, e, r);
    }, b = (e, r) => {
      if (!a.value)
        return;
      const t = a.value.variables || {};
      t[e] = { ...t[e], default: r }, i.edit(a.value.uid, "variables", t);
    };
    return (e, r) => {
      var t;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["divide-0.5 flex w-full flex-col divide-y rounded-b-lg text-sm", ((t = a.value) == null ? void 0 : t.variables) && "bg-b-1"])
      }, [
        a.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createVNode(q, {
            data: a.value,
            onUpdate: m3,
            options: p
          }, null, 8, ["data"]),
          a.value.variables ? (openBlock(), createBlock(O, {
            key: 0,
            variables: a.value.variables,
            "onUpdate:variable": b
          }, null, 8, ["variables"])) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true)
      ], 2);
    };
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Collection/CollectionServers.vue2.js
var T = { class: "flex h-full w-full flex-col gap-12 px-1.5 pt-8" };
var F = { class: "flex flex-col gap-4" };
var O2 = { class: "rounded-lg border" };
var R = { class: "bg-b-2 flex items-start justify-between rounded-t-lg py-1 pr-1 pl-3 text-sm" };
var W3 = {
  key: 1,
  class: "self-center"
};
var Y = { class: "text-c-3 flex h-full items-center justify-center rounded-lg border p-4" };
var te = defineComponent({
  __name: "CollectionServers",
  setup(q2) {
    const { activeCollection: l } = z(), { servers: v, events: x, serverMutators: h } = je(), d = W(), a = ref(null), _2 = computed(() => {
      var t;
      return !v || !((t = l.value) != null && t.servers) ? [] : Object.values(v).filter(
        (s) => {
          var i;
          return (i = l.value) == null ? void 0 : i.servers.includes(s.uid);
        }
      );
    }), S = () => x.commandPalette.emit({
      commandName: "Add Server"
    }), g = () => {
      var t;
      !((t = l.value) != null && t.uid) || !a.value || (h.delete(a.value, l.value.uid), d.hide());
    }, b = (t) => {
      a.value = t, d.show();
    };
    return (t, s) => {
      var i;
      return openBlock(), createElementBlock("div", T, [
        createBaseVNode("div", F, [
          s[2] || (s[2] = createStaticVNode('<div class="flex items-start justify-between gap-2"><div class="flex flex-col gap-2"><div class="flex h-8 items-center"><h3 class="font-bold">Servers</h3></div><p class="text-sm"> Add different base URLs for your API. You can use <code class="font-code text-c-2">{variables}</code> for dynamic parts. </p></div></div>', 1)),
          (openBlock(true), createElementBlock(Fragment, null, renderList(_2.value, (r, k) => (openBlock(), createElementBlock("div", {
            key: r.uid
          }, [
            createBaseVNode("div", O2, [
              createBaseVNode("div", R, [
                r.description ? (openBlock(), createBlock(unref(_), {
                  key: 0,
                  value: r.description,
                  class: "self-center"
                }, null, 8, ["value"])) : (openBlock(), createElementBlock("span", W3, "Server " + toDisplayString(k + 1), 1)),
                createVNode(unref($), {
                  class: "hover:bg-b-3 hover:text-c-1 h-fit p-1.25",
                  variant: "ghost",
                  onClick: (G) => b(r.uid)
                }, {
                  default: withCtx(() => [
                    createVNode(unref(A), { class: "size-3.5" })
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ]),
              unref(l) ? (openBlock(), createBlock(W2, {
                key: 0,
                collectionId: unref(l).uid,
                serverUid: r.uid
              }, null, 8, ["collectionId", "serverUid"])) : createCommentVNode("", true)
            ])
          ]))), 128)),
          createBaseVNode("div", Y, [
            createVNode(unref($), {
              class: "hover:bg-b-2 hover:text-c-1 flex items-center gap-2",
              size: "sm",
              variant: "ghost",
              onClick: S
            }, {
              default: withCtx(() => [
                createVNode(unref(m), {
                  class: "inline-flex",
                  icon: "Add",
                  size: "sm",
                  thickness: "1.5"
                }),
                s[1] || (s[1] = createBaseVNode("span", null, "Add Server", -1))
              ]),
              _: 1
            })
          ])
        ]),
        createVNode(unref(m2), {
          size: "xxs",
          state: unref(d),
          title: `Delete ${a.value ? (i = unref(v)[a.value]) == null ? void 0 : i.url : "Server"}`
        }, {
          default: withCtx(() => [
            createVNode(w, {
              variableName: "Server",
              warningMessage: "Are you sure you want to delete this server? This action cannot be undone.",
              onClose: s[0] || (s[0] = (r) => unref(d).hide()),
              onDelete: g
            })
          ]),
          _: 1
        }, 8, ["state", "title"])
      ]);
    };
  }
});
export {
  te as default
};
//# sourceMappingURL=CollectionServers.vue-NZS6ZB2S.js.map
