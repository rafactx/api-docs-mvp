import {
  inject,
  reactive,
  readonly,
  ref
} from "./chunk-XQNPNIQJ.js";

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/hooks/useSidebar.js
var O = ({ layout: t }) => {
  const e = reactive({}), r = ref(t !== "modal");
  return {
    collapsedSidebarFolders: e,
    isSidebarOpen: r
  };
};
var p = Symbol();
var m = () => {
  const t = inject(p);
  if (!t)
    throw new Error("useSidebar must have injected SIDEBAR_SYMBOL");
  const { collapsedSidebarFolders: e, isSidebarOpen: r } = t, s = (o, l) => e[o] = l, d = (o) => e[o] = !e[o], i = (o) => r.value = o, n = () => r.value = !r.value;
  return {
    /** State */
    collapsedSidebarFolders: readonly(e),
    isSidebarOpen: readonly(r),
    /** Actions */
    setCollapsedSidebarFolder: s,
    toggleSidebarFolder: d,
    setSidebarOpen: i,
    toggleSidebarOpen: n
  };
};

// node_modules/.pnpm/@scalar+helpers@0.0.4/node_modules/@scalar/helpers/dist/general/is-mac-os.js
var isMacOS = () => {
  var _a;
  if (typeof navigator === "undefined") {
    return false;
  }
  if ((_a = navigator.userAgentData) == null ? void 0 : _a.platform) {
    return navigator.userAgentData.platform.toLowerCase().includes("mac");
  }
  return /Mac/.test(navigator.userAgent);
};

export {
  O,
  p,
  m,
  isMacOS
};
//# sourceMappingURL=chunk-GOSQUSWR.js.map
