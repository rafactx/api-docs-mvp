import {
  createFocusTrap
} from "./chunk-7K7M7B6N.js";
import {
  notNullish,
  toArray,
  tryOnScopeDispose,
  unrefElement
} from "./chunk-LLQE2CBJ.js";
import {
  computed,
  shallowRef,
  toValue,
  watch
} from "./chunk-XQNPNIQJ.js";
import "./chunk-DC5AMYBS.js";

// node_modules/.pnpm/@vueuse+integrations@12.8.2_focus-trap@7.6.5_fuse.js@7.1.0_typescript@5.8.3/node_modules/@vueuse/integrations/useFocusTrap.mjs
function useFocusTrap(target, options = {}) {
  let trap;
  const { immediate, ...focusTrapOptions } = options;
  const hasFocus = shallowRef(false);
  const isPaused = shallowRef(false);
  const activate = (opts) => trap && trap.activate(opts);
  const deactivate = (opts) => trap && trap.deactivate(opts);
  const pause = () => {
    if (trap) {
      trap.pause();
      isPaused.value = true;
    }
  };
  const unpause = () => {
    if (trap) {
      trap.unpause();
      isPaused.value = false;
    }
  };
  const targets = computed(() => {
    const _targets = toValue(target);
    return toArray(_targets).map((el) => {
      const _el = toValue(el);
      return typeof _el === "string" ? _el : unrefElement(_el);
    }).filter(notNullish);
  });
  watch(
    targets,
    (els) => {
      if (!els.length)
        return;
      trap = createFocusTrap(els, {
        ...focusTrapOptions,
        onActivate() {
          hasFocus.value = true;
          if (options.onActivate)
            options.onActivate();
        },
        onDeactivate() {
          hasFocus.value = false;
          if (options.onDeactivate)
            options.onDeactivate();
        }
      });
      if (immediate)
        activate();
    },
    { flush: "post" }
  );
  tryOnScopeDispose(() => deactivate());
  return {
    hasFocus,
    isPaused,
    activate,
    deactivate,
    pause,
    unpause
  };
}
export {
  useFocusTrap
};
//# sourceMappingURL=vitepress___@vueuse_integrations_useFocusTrap.js.map
