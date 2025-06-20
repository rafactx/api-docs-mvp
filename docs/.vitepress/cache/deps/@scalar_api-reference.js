import {
  E as E2,
  J,
  diff,
  e
} from "./chunk-TIVSEWPD.js";
import {
  useBreakpoints
} from "./chunk-NHYM5363.js";
import {
  a,
  f,
  snippetz
} from "./chunk-LRSR3S4X.js";
import {
  s as s3,
  t as t2
} from "./chunk-ZIUKF2I6.js";
import {
  cookieSchema
} from "./chunk-WJY4MU6S.js";
import {
  O as O2,
  isMacOS,
  p as p2
} from "./chunk-GOSQUSWR.js";
import {
  O
} from "./chunk-JYVXE3FK.js";
import "./chunk-QNF3OMLY.js";
import {
  p as p3
} from "./chunk-VNWCMRO3.js";
import "./chunk-75A6VDJY.js";
import "./chunk-AUM3FYPR.js";
import "./chunk-64TJZ2DX.js";
import {
  Fuse,
  t
} from "./chunk-RDVDQCBW.js";
import {
  RouterView,
  createMemoryHistory,
  createRouter
} from "./chunk-DWEZQID4.js";
import {
  LS_KEYS,
  P as P2,
  REFERENCE_LS_KEYS,
  XScalarStability,
  Y,
  apiClientConfigurationSchema,
  apiReferenceConfigurationSchema,
  bundle,
  c as c2,
  collectionSchema,
  createExampleFromRequest,
  dereference,
  environmentSchema,
  escapeJsonPointer,
  ge,
  getExampleFromSchema,
  getServersFromOpenApiDocument,
  getSlugUid,
  getThemeStyles,
  hasObtrusiveScrollbars,
  isConfigurationWithSources,
  isRemoteUrl,
  je,
  normalize,
  parse,
  qe,
  requestExampleSchema,
  requestSchema,
  s as s2,
  safeLocalStorage,
  securitySchemeSchema,
  serverSchema,
  stringify,
  tagSchema,
  themeLabels,
  toJson,
  toYaml,
  unescapeJsonPointer,
  upgrade,
  workspaceSchema,
  z
} from "./chunk-ZNV4Z3VE.js";
import "./chunk-XAH4TE55.js";
import {
  $,
  B,
  B3 as B2,
  C,
  C2,
  E,
  Ie,
  L,
  N,
  P,
  Q,
  T,
  V,
  W,
  _2 as _,
  _3 as _2,
  c,
  camelToTitleWords,
  capitalize,
  combineUrlAndPath,
  cva,
  fetchDocument,
  getHeadings,
  getHttpMethodInfo,
  httpMethods,
  i,
  isDefined,
  isHttpMethod,
  isJsonString,
  k,
  k2,
  l,
  m2 as m,
  m4 as m2,
  me,
  nanoid,
  normalizeMimeTypeObject,
  objectKeys,
  p2 as p,
  pe,
  prettyPrintJson,
  s,
  schemaModel,
  splitContent,
  useClipboard,
  useColorMode,
  v,
  v2,
  w2 as w,
  x3 as x,
  xe,
  y,
  ye
} from "./chunk-OYO2YRBV.js";
import {
  useDebounceFn,
  useElementHover,
  useEventBus,
  useFavicon,
  useIntersectionObserver,
  useMediaQuery,
  useResizeObserver,
  watchDebounced
} from "./chunk-3FIKATP3.js";
import {
  createHooks
} from "./chunk-NUEIQ42I.js";
import {
  createFocusTrap
} from "./chunk-7K7M7B6N.js";
import {
  Fragment,
  computed,
  createApp,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createSlots,
  createStaticVNode,
  createTextVNode,
  createVNode,
  defineComponent,
  getCurrentInstance,
  getCurrentScope,
  guardReactiveProps,
  h,
  inject,
  isReactive,
  isRef,
  mergeProps,
  nextTick,
  normalizeClass,
  normalizeProps,
  normalizeStyle,
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onDeactivated,
  onMounted,
  onScopeDispose,
  onServerPrefetch,
  onUnmounted,
  openBlock,
  provide,
  reactive,
  readonly,
  ref,
  renderList,
  renderSlot,
  resolveComponent,
  resolveDynamicComponent,
  shallowRef,
  toDisplayString,
  toRaw,
  toRef,
  toValue,
  unref,
  useId,
  vModelCheckbox,
  vShow,
  version,
  watch,
  watchEffect,
  withCtx,
  withDirectives,
  withKeys,
  withModifiers
} from "./chunk-XQNPNIQJ.js";
import {
  __export
} from "./chunk-DC5AMYBS.js";

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/helpers/json-path-utils.js
function parseJsonPointer(pointer) {
  return pointer.split("/").filter((segment, index) => (index !== 0 || segment !== "#") && segment);
}
function getValueByPath(obj, pointer) {
  return pointer.reduce((acc, part) => {
    if (acc === void 0 || acc === null) {
      return void 0;
    }
    return acc[part];
  }, obj);
}

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/helpers/general.js
function isObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function isLocalRef(value) {
  return value.startsWith("#");
}

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/helpers/proxy.js
var TARGET_SYMBOL = Symbol("target");
function createProxyHandler(sourceDocument, resolvedProxyCache) {
  return {
    get(target, property, receiver) {
      if (property === TARGET_SYMBOL) {
        return target;
      }
      if (property === "__isProxy") {
        return true;
      }
      const value = Reflect.get(target, property, receiver);
      const deepResolveNestedRefs = (value2) => {
        if (!isObject(value2)) {
          return value2;
        }
        if ("$ref" in value2) {
          const ref2 = value2.$ref;
          if (isLocalRef(ref2)) {
            const referencePath = parseJsonPointer(ref2);
            const resolvedValue = getValueByPath(sourceDocument, referencePath);
            return deepResolveNestedRefs(resolvedValue);
          }
        }
        return createMagicProxy(value2, sourceDocument, resolvedProxyCache);
      };
      return deepResolveNestedRefs(value);
    },
    set(target, property, newValue, receiver) {
      const rawTarget = isReactive(target) ? toRaw(target) : target;
      const currentValue = rawTarget[property];
      if (isObject(currentValue) && "$ref" in currentValue && typeof currentValue.$ref === "string" && isLocalRef(currentValue.$ref)) {
        const referencePath = parseJsonPointer(currentValue.$ref);
        const targetObject = getValueByPath(sourceDocument, referencePath.slice(0, -1));
        const lastPathSegment = referencePath[referencePath.length - 1];
        if (targetObject && lastPathSegment) {
          targetObject[lastPathSegment] = newValue;
        }
      } else {
        Reflect.set(rawTarget, property, newValue, receiver);
      }
      return true;
    },
    has(target, key) {
      if (typeof key === "string" && key !== "$ref" && typeof target.$ref === "string" && isLocalRef(target.$ref)) {
        const referencePath = parseJsonPointer(target["$ref"]);
        const resolvedValue = getValueByPath(sourceDocument, referencePath);
        return resolvedValue ? key in resolvedValue : false;
      }
      return key in target;
    },
    ownKeys(target) {
      if ("$ref" in target && typeof target.$ref === "string" && isLocalRef(target.$ref)) {
        const referencePath = parseJsonPointer(target["$ref"]);
        const resolvedValue = getValueByPath(sourceDocument, referencePath);
        return resolvedValue ? Reflect.ownKeys(resolvedValue) : [];
      }
      return Reflect.ownKeys(target);
    },
    getOwnPropertyDescriptor(target, key) {
      if ("$ref" in target && key !== "$ref" && typeof target.$ref === "string" && isLocalRef(target.$ref)) {
        const referencePath = parseJsonPointer(target["$ref"]);
        const resolvedValue = getValueByPath(sourceDocument, referencePath);
        if (resolvedValue) {
          return Object.getOwnPropertyDescriptor(resolvedValue, key);
        }
      }
      return Object.getOwnPropertyDescriptor(target, key);
    }
  };
}
function createMagicProxy(targetObject, sourceDocument = targetObject, resolvedProxyCache) {
  if (!isObject(targetObject)) {
    return targetObject;
  }
  const rawTarget = isReactive(targetObject) ? toRaw(targetObject) : targetObject;
  if (resolvedProxyCache == null ? void 0 : resolvedProxyCache.has(rawTarget)) {
    const cachedValue = resolvedProxyCache.get(rawTarget);
    if (cachedValue) {
      return cachedValue;
    }
  }
  const handler = createProxyHandler(sourceDocument, resolvedProxyCache);
  const proxy = new Proxy(rawTarget, handler);
  if (resolvedProxyCache) {
    resolvedProxyCache.set(rawTarget, proxy);
  }
  return proxy;
}

// node_modules/.pnpm/@scalar+openapi-parser@0.18.0/node_modules/@scalar/openapi-parser/dist/utils/bundle/create-limiter.js
function createLimiter(maxConcurrent) {
  let activeCount = 0;
  const queue = [];
  const next = () => {
    if (queue.length === 0 || activeCount >= maxConcurrent) {
      return;
    }
    const resolve = queue.shift();
    if (resolve) {
      resolve();
    }
  };
  const run = async (fn) => {
    if (activeCount >= maxConcurrent) {
      await new Promise((resolve) => queue.push(resolve));
    }
    activeCount++;
    try {
      const result = await fn();
      return result;
    } finally {
      activeCount--;
      next();
    }
  };
  return run;
}

// node_modules/.pnpm/@scalar+openapi-parser@0.18.0/node_modules/@scalar/openapi-parser/dist/utils/bundle/plugins/fetch-urls/index.js
async function fetchUrl(url, limiter, config) {
  var _a, _b;
  try {
    const domain = new URL(url).host;
    const headers = (_b = (_a = config == null ? void 0 : config.headers) == null ? void 0 : _a.find((a22) => a22.domains.find((d18) => d18 === domain) !== void 0)) == null ? void 0 : _b.headers;
    const exec = (config == null ? void 0 : config.fetch) ?? fetch;
    const result = await limiter(
      () => exec(url, {
        headers
      })
    );
    if (result.ok) {
      const body = await result.text();
      return {
        ok: true,
        data: normalize(body)
      };
    }
    return {
      ok: false
    };
  } catch {
    return {
      ok: false
    };
  }
}
function fetchUrls(config) {
  const limiter = (config == null ? void 0 : config.limit) ? createLimiter(config.limit) : (fn) => fn();
  return {
    validate: isRemoteUrl,
    exec: (value) => fetchUrl(value, limiter, config)
  };
}

// node_modules/.pnpm/github-slugger@2.0.0/node_modules/github-slugger/regex.js
var regex = /[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g;

// node_modules/.pnpm/github-slugger@2.0.0/node_modules/github-slugger/index.js
var own = Object.hasOwnProperty;
var BananaSlug = class {
  /**
   * Create a new slug class.
   */
  constructor() {
    this.occurrences;
    this.reset();
  }
  /**
   * Generate a unique slug.
  *
  * Tracks previously generated slugs: repeated calls with the same value
  * will result in different slugs.
  * Use the `slug` function to get same slugs.
   *
   * @param  {string} value
   *   String of text to slugify
   * @param  {boolean} [maintainCase=false]
   *   Keep the current case, otherwise make all lowercase
   * @return {string}
   *   A unique slug string
   */
  slug(value, maintainCase) {
    const self2 = this;
    let result = slug(value, maintainCase === true);
    const originalSlug = result;
    while (own.call(self2.occurrences, result)) {
      self2.occurrences[originalSlug]++;
      result = originalSlug + "-" + self2.occurrences[originalSlug];
    }
    self2.occurrences[result] = 0;
    return result;
  }
  /**
   * Reset - Forget all previous slugs
   *
   * @return void
   */
  reset() {
    this.occurrences = /* @__PURE__ */ Object.create(null);
  }
};
function slug(value, maintainCase) {
  if (typeof value !== "string") return "";
  if (!maintainCase) value = value.toLowerCase();
  return value.replace(regex, "").replace(/ /g, "-");
}

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/navigation/helpers/utils.js
var withSlugs = (headings, slugger) => headings.map((heading) => {
  return {
    ...heading,
    slug: slugger.slug(heading.value)
  };
});
function getHeadingsFromMarkdown(input) {
  const slugger = new BananaSlug();
  const headings = getHeadings(input);
  return withSlugs(headings, slugger);
}
var getLowestHeadingLevel = (headings) => {
  const lowestLevel = Math.min(...headings.map((heading) => heading.depth));
  if (lowestLevel >= 1 && lowestLevel <= 6) {
    return lowestLevel;
  }
  return 1;
};

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/navigation/helpers/traverse-description.js
var DEFAULT_INTRODUCTION_SLUG = "introduction";
var traverseDescription = (description, titlesMap, getHeadingId) => {
  var _a;
  if (!(description == null ? void 0 : description.trim())) {
    return [];
  }
  const headings = getHeadingsFromMarkdown(description);
  const lowestLevel = getLowestHeadingLevel(headings);
  const entries = [];
  let currentParent = null;
  if (description && !description.trim().startsWith("#")) {
    const heading = {
      depth: 1,
      value: "Introduction",
      slug: DEFAULT_INTRODUCTION_SLUG
    };
    const id = getHeadingId(heading);
    const title = heading.value;
    entries.push({
      id,
      title,
      type: "text"
    });
    titlesMap.set(id, title);
  }
  for (const heading of headings) {
    if (heading.depth !== lowestLevel && heading.depth !== lowestLevel + 1) {
      continue;
    }
    const entry = {
      id: getHeadingId(heading),
      title: heading.value,
      type: "text"
    };
    titlesMap.set(entry.id, entry.title);
    if (heading.depth === lowestLevel) {
      entry.children = [];
      entries.push(entry);
      currentParent = entry;
    } else if (currentParent) {
      (_a = currentParent.children) == null ? void 0 : _a.push(entry);
    }
  }
  return entries;
};

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/navigation/helpers/get-tag.js
var getTag = (tagsMap, name) => {
  if (!tagsMap.get(name)) {
    tagsMap.set(name, { entries: [], tag: { name } });
  }
  return tagsMap.get(name);
};

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/schemas/v3.1/type-guard.js
var isReference = (value) => {
  return typeof value === "object" && value !== null && "$ref" in value;
};

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/navigation/helpers/traverse-paths.js
var createOperationEntry = (ref2, operation, method, path = "Unknown", tag, titlesMap, getOperationId) => {
  const id = getOperationId({ ...operation, method, path }, tag);
  titlesMap.set(id, operation.summary ?? path);
  return {
    id,
    title: operation.summary ?? path,
    path,
    method,
    ref: ref2,
    type: "operation"
  };
};
var traversePaths = (content, tagsMap, titlesMap, getOperationId) => {
  Object.entries(content.paths ?? {}).forEach(([path, pathItem]) => {
    const pathEntries = Object.entries(pathItem ?? {});
    pathEntries.forEach(([method, operation]) => {
      var _a, _b;
      if (isReference(operation)) {
        return;
      }
      if (operation["x-internal"] || operation["x-scalar-ignore"] || !isHttpMethod(method)) {
        return;
      }
      const ref2 = `#/paths/${escapeJsonPointer(path)}/${method}`;
      if ((_a = operation.tags) == null ? void 0 : _a.length) {
        operation.tags.forEach((tagName) => {
          var _a2;
          const { tag } = getTag(tagsMap, tagName);
          (_a2 = tagsMap.get(tagName)) == null ? void 0 : _a2.entries.push(createOperationEntry(ref2, operation, method, path, tag, titlesMap, getOperationId));
        });
      } else {
        const { tag } = getTag(tagsMap, "default");
        (_b = tagsMap.get("default")) == null ? void 0 : _b.entries.push(createOperationEntry(ref2, operation, method, path, tag, titlesMap, getOperationId));
      }
    });
  });
};

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/navigation/helpers/traverse-schemas.js
var createModelEntry = (ref2, name = "Unknown", titlesMap, getModelId, tag) => {
  const id = getModelId({ name }, tag);
  titlesMap.set(id, name);
  return {
    id,
    title: name,
    name,
    ref: ref2,
    type: "model"
  };
};
var traverseSchemas = (content, tagsMap, titlesMap, getModelId) => {
  var _a;
  const schemas = ((_a = content.components) == null ? void 0 : _a.schemas) ?? {};
  const untagged = [];
  for (const name in schemas) {
    if (schemas[name]["x-internal"] || schemas[name]["x-scalar-ignore"] || !Object.hasOwn(schemas, name)) {
      continue;
    }
    const ref2 = `#/content/components/schemas/${name}`;
    if (schemas[name]["x-tags"]) {
      schemas[name]["x-tags"].forEach((tagName) => {
        var _a2;
        const { tag } = getTag(tagsMap, tagName);
        (_a2 = tagsMap.get(tagName)) == null ? void 0 : _a2.entries.push(createModelEntry(ref2, name, titlesMap, getModelId, tag));
      });
    } else {
      untagged.push(createModelEntry(ref2, name, titlesMap, getModelId));
    }
  }
  return untagged;
};

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/navigation/helpers/traverse-tags.js
var createTagEntry = (tag, titlesMap, getTagId, children, isGroup = false) => {
  const id = getTagId(tag);
  const title = tag["x-displayName"] ?? tag.name ?? "Untitled Tag";
  titlesMap.set(id, title);
  return {
    id,
    title,
    name: tag.name || title,
    children,
    isGroup,
    type: "tag"
  };
};
var getSortedTagEntries = (_keys, tagsMap, titlesMap, { getTagId, tagsSorter, operationsSorter }) => {
  const hasDefault = _keys.includes("default");
  const keys2 = hasDefault ? _keys.filter((key) => key !== "default") : _keys;
  if (tagsSorter === "alpha") {
    keys2.sort((a22, b9) => {
      const nameA = getTag(tagsMap, a22).tag["x-displayName"] || a22 || "Untitled Tag";
      const nameB = getTag(tagsMap, b9).tag["x-displayName"] || b9 || "Untitled Tag";
      return nameA.localeCompare(nameB);
    });
  } else if (typeof tagsSorter === "function") {
    keys2.sort((a22, b9) => tagsSorter(getTag(tagsMap, a22).tag, getTag(tagsMap, b9).tag));
  }
  if (hasDefault) {
    keys2.push("default");
  }
  return keys2.flatMap((key) => {
    const { tag, entries } = getTag(tagsMap, key);
    if (tag["x-internal"] || tag["x-scalar-ignore"]) {
      return [];
    }
    if (operationsSorter === "alpha") {
      entries.sort((a22, b9) => "method" in a22 && "method" in b9 ? a22.title.localeCompare(b9.title) : 0);
    } else if (operationsSorter === "method") {
      entries.sort((a22, b9) => "method" in a22 && "method" in b9 ? a22.method.localeCompare(b9.method) : 0);
    } else if (typeof operationsSorter === "function") {
      entries.sort((a22, b9) => {
        if (a22.type !== "operation" && a22.type !== "webhook" || b9.type !== "operation" && b9.type !== "webhook") {
          return 0;
        }
        const pathA = a22.type === "operation" ? a22.path : a22.name;
        const pathB = b9.type === "operation" ? b9.path : b9.name;
        return operationsSorter(
          { method: a22.method, path: pathA, ref: a22.ref },
          { method: b9.method, path: pathB, ref: b9.ref }
        );
      });
    }
    return entries.length ? createTagEntry(tag, titlesMap, getTagId, entries) : [];
  });
};
var traverseTags = (content, tagsMap, titlesMap, { getTagId, tagsSorter, operationsSorter }) => {
  if (content["x-tagGroups"]) {
    const tagGroups = content["x-tagGroups"];
    return tagGroups.flatMap((tagGroup) => {
      const entries = getSortedTagEntries(tagGroup.tags ?? [], tagsMap, titlesMap, {
        getTagId,
        tagsSorter,
        operationsSorter
      });
      return entries.length ? createTagEntry(tagGroup, titlesMap, getTagId, entries, true) : [];
    });
  }
  const keys2 = Array.from(tagsMap.keys());
  const tags = getSortedTagEntries(keys2, tagsMap, titlesMap, { getTagId, tagsSorter, operationsSorter });
  if (tags.length === 1 && tags[0].title === "default") {
    return tags[0].children ?? [];
  }
  return tags;
};

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/navigation/helpers/traverse-webhooks.js
var createWebhookEntry = (ref2, method, name = "Unknown", title = "Unknown", titlesMap, getWebhookId, tag) => {
  const id = getWebhookId({ name, method }, tag);
  titlesMap.set(id, title);
  return {
    id,
    title,
    name,
    ref: ref2,
    method,
    type: "webhook"
  };
};
var traverseWebhooks = (content, tagsMap, titlesMap, getWebhookId) => {
  const untagged = [];
  Object.entries(content.webhooks ?? {}).forEach(([name, pathItemObject]) => {
    const pathEntries = Object.entries(pathItemObject ?? {});
    pathEntries.forEach(([method, operation]) => {
      var _a;
      if (isReference(operation)) {
        return;
      }
      const ref2 = `#/webhooks/${name}/${method}`;
      if (operation["x-internal"] || operation["x-scalar-ignore"]) {
        return;
      }
      if ((_a = operation.tags) == null ? void 0 : _a.length) {
        operation.tags.forEach((tagName) => {
          var _a2;
          const { tag } = getTag(tagsMap, tagName);
          (_a2 = tagsMap.get(tagName)) == null ? void 0 : _a2.entries.push(
            createWebhookEntry(ref2, method, name, operation.summary ?? name, titlesMap, getWebhookId, tag)
          );
        });
      } else {
        untagged.push(createWebhookEntry(ref2, method, name, operation.summary ?? name, titlesMap, getWebhookId));
      }
    });
  });
  return untagged;
};

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/navigation/helpers/traverse-document.js
var traverseDocument = (document2, {
  hideModels = false,
  tagsSorter = "alpha",
  operationsSorter = "alpha",
  getHeadingId = (heading) => heading.value,
  getOperationId = (operation) => operation.summary ?? "",
  getWebhookId = (webhook) => (webhook == null ? void 0 : webhook.name) ?? "webhooks",
  getModelId = (model) => (model == null ? void 0 : model.name) ?? "",
  getTagId = (tag) => tag.name ?? ""
}) => {
  var _a, _b, _c;
  const titles = /* @__PURE__ */ new Map();
  const tagsMap = new Map(
    ((_a = document2.tags) == null ? void 0 : _a.map((tag) => [tag.name ?? "Untitled Tag", { tag, entries: [] }])) ?? []
  );
  const entries = traverseDescription((_b = document2.info) == null ? void 0 : _b.description, titles, getHeadingId);
  traversePaths(document2, tagsMap, titles, getOperationId);
  const untaggedWebhooks = traverseWebhooks(document2, tagsMap, titles, getWebhookId);
  const tagsEntries = traverseTags(document2, tagsMap, titles, {
    getTagId,
    tagsSorter,
    operationsSorter
  });
  entries.push(...tagsEntries);
  if (untaggedWebhooks.length) {
    entries.push({
      id: getWebhookId(),
      title: "Webhooks",
      children: untaggedWebhooks,
      type: "text"
    });
  }
  if (!hideModels && ((_c = document2.components) == null ? void 0 : _c.schemas)) {
    const untaggedModels = traverseSchemas(document2, tagsMap, titles, getModelId);
    if (untaggedModels.length) {
      entries.push({
        id: getModelId(),
        title: "Models",
        children: untaggedModels,
        type: "text"
      });
    }
  }
  return { entries, titles };
};

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/schemas/extensions.js
var extensions = {
  document: {
    navigation: "x-scalar-navigation",
    activeAuth: "x-scalar-active-auth",
    activeServer: "x-scalar-active-server"
  },
  workspace: {
    darkMode: "x-scalar-dark-mode",
    defaultClient: "x-scalar-default-client",
    activeDocument: "x-scalar-active-document",
    theme: "x-scalar-theme"
  }
};

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/value/guard/guard.mjs
function IsAsyncIterator(value) {
  return IsObject(value) && globalThis.Symbol.asyncIterator in value;
}
function IsIterator(value) {
  return IsObject(value) && globalThis.Symbol.iterator in value;
}
function IsStandardObject(value) {
  return IsObject(value) && (globalThis.Object.getPrototypeOf(value) === Object.prototype || globalThis.Object.getPrototypeOf(value) === null);
}
function IsPromise(value) {
  return value instanceof globalThis.Promise;
}
function IsDate(value) {
  return value instanceof Date && globalThis.Number.isFinite(value.getTime());
}
function IsMap(value) {
  return value instanceof globalThis.Map;
}
function IsSet(value) {
  return value instanceof globalThis.Set;
}
function IsTypedArray(value) {
  return globalThis.ArrayBuffer.isView(value);
}
function IsUint8Array(value) {
  return value instanceof globalThis.Uint8Array;
}
function HasPropertyKey(value, key) {
  return key in value;
}
function IsObject(value) {
  return value !== null && typeof value === "object";
}
function IsArray(value) {
  return globalThis.Array.isArray(value) && !globalThis.ArrayBuffer.isView(value);
}
function IsUndefined(value) {
  return value === void 0;
}
function IsNull(value) {
  return value === null;
}
function IsBoolean(value) {
  return typeof value === "boolean";
}
function IsNumber(value) {
  return typeof value === "number";
}
function IsInteger(value) {
  return globalThis.Number.isInteger(value);
}
function IsBigInt(value) {
  return typeof value === "bigint";
}
function IsString(value) {
  return typeof value === "string";
}
function IsFunction(value) {
  return typeof value === "function";
}
function IsSymbol(value) {
  return typeof value === "symbol";
}
function IsValueType(value) {
  return IsBigInt(value) || IsBoolean(value) || IsNull(value) || IsNumber(value) || IsString(value) || IsSymbol(value) || IsUndefined(value);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/system/policy.mjs
var TypeSystemPolicy;
(function(TypeSystemPolicy2) {
  TypeSystemPolicy2.InstanceMode = "default";
  TypeSystemPolicy2.ExactOptionalPropertyTypes = false;
  TypeSystemPolicy2.AllowArrayObject = false;
  TypeSystemPolicy2.AllowNaN = false;
  TypeSystemPolicy2.AllowNullVoid = false;
  function IsExactOptionalProperty(value, key) {
    return TypeSystemPolicy2.ExactOptionalPropertyTypes ? key in value : value[key] !== void 0;
  }
  TypeSystemPolicy2.IsExactOptionalProperty = IsExactOptionalProperty;
  function IsObjectLike(value) {
    const isObject3 = IsObject(value);
    return TypeSystemPolicy2.AllowArrayObject ? isObject3 : isObject3 && !IsArray(value);
  }
  TypeSystemPolicy2.IsObjectLike = IsObjectLike;
  function IsRecordLike(value) {
    return IsObjectLike(value) && !(value instanceof Date) && !(value instanceof Uint8Array);
  }
  TypeSystemPolicy2.IsRecordLike = IsRecordLike;
  function IsNumberLike(value) {
    return TypeSystemPolicy2.AllowNaN ? IsNumber(value) : Number.isFinite(value);
  }
  TypeSystemPolicy2.IsNumberLike = IsNumberLike;
  function IsVoidLike(value) {
    const isUndefined = IsUndefined(value);
    return TypeSystemPolicy2.AllowNullVoid ? isUndefined || value === null : isUndefined;
  }
  TypeSystemPolicy2.IsVoidLike = IsVoidLike;
})(TypeSystemPolicy || (TypeSystemPolicy = {}));

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/registry/format.mjs
var format_exports = {};
__export(format_exports, {
  Clear: () => Clear,
  Delete: () => Delete,
  Entries: () => Entries,
  Get: () => Get,
  Has: () => Has,
  Set: () => Set2
});
var map = /* @__PURE__ */ new Map();
function Entries() {
  return new Map(map);
}
function Clear() {
  return map.clear();
}
function Delete(format) {
  return map.delete(format);
}
function Has(format) {
  return map.has(format);
}
function Set2(format, func) {
  map.set(format, func);
}
function Get(format) {
  return map.get(format);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/registry/type.mjs
var type_exports = {};
__export(type_exports, {
  Clear: () => Clear2,
  Delete: () => Delete2,
  Entries: () => Entries2,
  Get: () => Get2,
  Has: () => Has2,
  Set: () => Set3
});
var map2 = /* @__PURE__ */ new Map();
function Entries2() {
  return new Map(map2);
}
function Clear2() {
  return map2.clear();
}
function Delete2(kind) {
  return map2.delete(kind);
}
function Has2(kind) {
  return map2.has(kind);
}
function Set3(kind, func) {
  map2.set(kind, func);
}
function Get2(kind) {
  return map2.get(kind);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/guard/value.mjs
var value_exports = {};
__export(value_exports, {
  HasPropertyKey: () => HasPropertyKey2,
  IsArray: () => IsArray2,
  IsAsyncIterator: () => IsAsyncIterator2,
  IsBigInt: () => IsBigInt2,
  IsBoolean: () => IsBoolean2,
  IsDate: () => IsDate2,
  IsFunction: () => IsFunction2,
  IsIterator: () => IsIterator2,
  IsNull: () => IsNull2,
  IsNumber: () => IsNumber2,
  IsObject: () => IsObject2,
  IsRegExp: () => IsRegExp,
  IsString: () => IsString2,
  IsSymbol: () => IsSymbol2,
  IsUint8Array: () => IsUint8Array2,
  IsUndefined: () => IsUndefined2
});
function HasPropertyKey2(value, key) {
  return key in value;
}
function IsAsyncIterator2(value) {
  return IsObject2(value) && !IsArray2(value) && !IsUint8Array2(value) && Symbol.asyncIterator in value;
}
function IsArray2(value) {
  return Array.isArray(value);
}
function IsBigInt2(value) {
  return typeof value === "bigint";
}
function IsBoolean2(value) {
  return typeof value === "boolean";
}
function IsDate2(value) {
  return value instanceof globalThis.Date;
}
function IsFunction2(value) {
  return typeof value === "function";
}
function IsIterator2(value) {
  return IsObject2(value) && !IsArray2(value) && !IsUint8Array2(value) && Symbol.iterator in value;
}
function IsNull2(value) {
  return value === null;
}
function IsNumber2(value) {
  return typeof value === "number";
}
function IsObject2(value) {
  return typeof value === "object" && value !== null;
}
function IsRegExp(value) {
  return value instanceof globalThis.RegExp;
}
function IsString2(value) {
  return typeof value === "string";
}
function IsSymbol2(value) {
  return typeof value === "symbol";
}
function IsUint8Array2(value) {
  return value instanceof globalThis.Uint8Array;
}
function IsUndefined2(value) {
  return value === void 0;
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/create/immutable.mjs
function ImmutableArray(value) {
  return globalThis.Object.freeze(value).map((value2) => Immutable(value2));
}
function ImmutableDate(value) {
  return value;
}
function ImmutableUint8Array(value) {
  return value;
}
function ImmutableRegExp(value) {
  return value;
}
function ImmutableObject(value) {
  const result = {};
  for (const key of Object.getOwnPropertyNames(value)) {
    result[key] = Immutable(value[key]);
  }
  for (const key of Object.getOwnPropertySymbols(value)) {
    result[key] = Immutable(value[key]);
  }
  return globalThis.Object.freeze(result);
}
function Immutable(value) {
  return IsArray2(value) ? ImmutableArray(value) : IsDate2(value) ? ImmutableDate(value) : IsUint8Array2(value) ? ImmutableUint8Array(value) : IsRegExp(value) ? ImmutableRegExp(value) : IsObject2(value) ? ImmutableObject(value) : value;
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/clone/value.mjs
function ArrayType(value) {
  return value.map((value2) => Visit(value2));
}
function DateType(value) {
  return new Date(value.getTime());
}
function Uint8ArrayType(value) {
  return new Uint8Array(value);
}
function RegExpType(value) {
  return new RegExp(value.source, value.flags);
}
function ObjectType(value) {
  const result = {};
  for (const key of Object.getOwnPropertyNames(value)) {
    result[key] = Visit(value[key]);
  }
  for (const key of Object.getOwnPropertySymbols(value)) {
    result[key] = Visit(value[key]);
  }
  return result;
}
function Visit(value) {
  return IsArray2(value) ? ArrayType(value) : IsDate2(value) ? DateType(value) : IsUint8Array2(value) ? Uint8ArrayType(value) : IsRegExp(value) ? RegExpType(value) : IsObject2(value) ? ObjectType(value) : value;
}
function Clone(value) {
  return Visit(value);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/create/type.mjs
function CreateType(schema, options) {
  const result = options !== void 0 ? { ...options, ...schema } : schema;
  switch (TypeSystemPolicy.InstanceMode) {
    case "freeze":
      return Immutable(result);
    case "clone":
      return Clone(result);
    default:
      return result;
  }
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/symbols/symbols.mjs
var TransformKind = Symbol.for("TypeBox.Transform");
var ReadonlyKind = Symbol.for("TypeBox.Readonly");
var OptionalKind = Symbol.for("TypeBox.Optional");
var Hint = Symbol.for("TypeBox.Hint");
var Kind = Symbol.for("TypeBox.Kind");

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/unsafe/unsafe.mjs
function Unsafe(options = {}) {
  return CreateType({ [Kind]: options[Kind] ?? "Unsafe" }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/error/error.mjs
var TypeBoxError = class extends Error {
  constructor(message) {
    super(message);
  }
};

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/system/system.mjs
var TypeSystemDuplicateTypeKind = class extends TypeBoxError {
  constructor(kind) {
    super(`Duplicate type kind '${kind}' detected`);
  }
};
var TypeSystemDuplicateFormat = class extends TypeBoxError {
  constructor(kind) {
    super(`Duplicate string format '${kind}' detected`);
  }
};
var TypeSystem;
(function(TypeSystem2) {
  function Type2(kind, check) {
    if (type_exports.Has(kind))
      throw new TypeSystemDuplicateTypeKind(kind);
    type_exports.Set(kind, check);
    return (options = {}) => Unsafe({ ...options, [Kind]: kind });
  }
  TypeSystem2.Type = Type2;
  function Format2(format, check) {
    if (format_exports.Has(format))
      throw new TypeSystemDuplicateFormat(format);
    format_exports.Set(format, check);
    return format;
  }
  TypeSystem2.Format = Format2;
})(TypeSystem || (TypeSystem = {}));

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/mapped/mapped-result.mjs
function MappedResult(properties) {
  return CreateType({
    [Kind]: "MappedResult",
    properties
  });
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/discard/discard.mjs
function DiscardKey(value, key) {
  const { [key]: _13, ...rest } = value;
  return rest;
}
function Discard(value, keys2) {
  return keys2.reduce((acc, key) => DiscardKey(acc, key), value);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/array/array.mjs
function Array2(items, options) {
  return CreateType({ [Kind]: "Array", type: "array", items }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/async-iterator/async-iterator.mjs
function AsyncIterator(items, options) {
  return CreateType({ [Kind]: "AsyncIterator", type: "AsyncIterator", items }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/constructor/constructor.mjs
function Constructor(parameters, returns, options) {
  return CreateType({ [Kind]: "Constructor", type: "Constructor", parameters, returns }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/function/function.mjs
function Function2(parameters, returns, options) {
  return CreateType({ [Kind]: "Function", type: "Function", parameters, returns }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/computed/computed.mjs
function Computed(target, parameters, options) {
  return CreateType({ [Kind]: "Computed", target, parameters }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/never/never.mjs
function Never(options) {
  return CreateType({ [Kind]: "Never", not: {} }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/guard/kind.mjs
var kind_exports = {};
__export(kind_exports, {
  IsAny: () => IsAny,
  IsArgument: () => IsArgument,
  IsArray: () => IsArray3,
  IsAsyncIterator: () => IsAsyncIterator3,
  IsBigInt: () => IsBigInt3,
  IsBoolean: () => IsBoolean3,
  IsComputed: () => IsComputed,
  IsConstructor: () => IsConstructor,
  IsDate: () => IsDate3,
  IsFunction: () => IsFunction3,
  IsImport: () => IsImport,
  IsInteger: () => IsInteger2,
  IsIntersect: () => IsIntersect,
  IsIterator: () => IsIterator3,
  IsKind: () => IsKind,
  IsKindOf: () => IsKindOf,
  IsLiteral: () => IsLiteral,
  IsLiteralBoolean: () => IsLiteralBoolean,
  IsLiteralNumber: () => IsLiteralNumber,
  IsLiteralString: () => IsLiteralString,
  IsLiteralValue: () => IsLiteralValue,
  IsMappedKey: () => IsMappedKey,
  IsMappedResult: () => IsMappedResult,
  IsNever: () => IsNever,
  IsNot: () => IsNot,
  IsNull: () => IsNull3,
  IsNumber: () => IsNumber3,
  IsObject: () => IsObject3,
  IsOptional: () => IsOptional,
  IsPromise: () => IsPromise2,
  IsProperties: () => IsProperties,
  IsReadonly: () => IsReadonly,
  IsRecord: () => IsRecord,
  IsRecursive: () => IsRecursive,
  IsRef: () => IsRef,
  IsRegExp: () => IsRegExp2,
  IsSchema: () => IsSchema,
  IsString: () => IsString3,
  IsSymbol: () => IsSymbol3,
  IsTemplateLiteral: () => IsTemplateLiteral,
  IsThis: () => IsThis,
  IsTransform: () => IsTransform,
  IsTuple: () => IsTuple,
  IsUint8Array: () => IsUint8Array3,
  IsUndefined: () => IsUndefined3,
  IsUnion: () => IsUnion,
  IsUnknown: () => IsUnknown,
  IsUnsafe: () => IsUnsafe,
  IsVoid: () => IsVoid
});
function IsReadonly(value) {
  return IsObject2(value) && value[ReadonlyKind] === "Readonly";
}
function IsOptional(value) {
  return IsObject2(value) && value[OptionalKind] === "Optional";
}
function IsAny(value) {
  return IsKindOf(value, "Any");
}
function IsArgument(value) {
  return IsKindOf(value, "Argument");
}
function IsArray3(value) {
  return IsKindOf(value, "Array");
}
function IsAsyncIterator3(value) {
  return IsKindOf(value, "AsyncIterator");
}
function IsBigInt3(value) {
  return IsKindOf(value, "BigInt");
}
function IsBoolean3(value) {
  return IsKindOf(value, "Boolean");
}
function IsComputed(value) {
  return IsKindOf(value, "Computed");
}
function IsConstructor(value) {
  return IsKindOf(value, "Constructor");
}
function IsDate3(value) {
  return IsKindOf(value, "Date");
}
function IsFunction3(value) {
  return IsKindOf(value, "Function");
}
function IsImport(value) {
  return IsKindOf(value, "Import");
}
function IsInteger2(value) {
  return IsKindOf(value, "Integer");
}
function IsProperties(value) {
  return IsObject2(value);
}
function IsIntersect(value) {
  return IsKindOf(value, "Intersect");
}
function IsIterator3(value) {
  return IsKindOf(value, "Iterator");
}
function IsKindOf(value, kind) {
  return IsObject2(value) && Kind in value && value[Kind] === kind;
}
function IsLiteralString(value) {
  return IsLiteral(value) && IsString2(value.const);
}
function IsLiteralNumber(value) {
  return IsLiteral(value) && IsNumber2(value.const);
}
function IsLiteralBoolean(value) {
  return IsLiteral(value) && IsBoolean2(value.const);
}
function IsLiteralValue(value) {
  return IsBoolean2(value) || IsNumber2(value) || IsString2(value);
}
function IsLiteral(value) {
  return IsKindOf(value, "Literal");
}
function IsMappedKey(value) {
  return IsKindOf(value, "MappedKey");
}
function IsMappedResult(value) {
  return IsKindOf(value, "MappedResult");
}
function IsNever(value) {
  return IsKindOf(value, "Never");
}
function IsNot(value) {
  return IsKindOf(value, "Not");
}
function IsNull3(value) {
  return IsKindOf(value, "Null");
}
function IsNumber3(value) {
  return IsKindOf(value, "Number");
}
function IsObject3(value) {
  return IsKindOf(value, "Object");
}
function IsPromise2(value) {
  return IsKindOf(value, "Promise");
}
function IsRecord(value) {
  return IsKindOf(value, "Record");
}
function IsRecursive(value) {
  return IsObject2(value) && Hint in value && value[Hint] === "Recursive";
}
function IsRef(value) {
  return IsKindOf(value, "Ref");
}
function IsRegExp2(value) {
  return IsKindOf(value, "RegExp");
}
function IsString3(value) {
  return IsKindOf(value, "String");
}
function IsSymbol3(value) {
  return IsKindOf(value, "Symbol");
}
function IsTemplateLiteral(value) {
  return IsKindOf(value, "TemplateLiteral");
}
function IsThis(value) {
  return IsKindOf(value, "This");
}
function IsTransform(value) {
  return IsObject2(value) && TransformKind in value;
}
function IsTuple(value) {
  return IsKindOf(value, "Tuple");
}
function IsUndefined3(value) {
  return IsKindOf(value, "Undefined");
}
function IsUnion(value) {
  return IsKindOf(value, "Union");
}
function IsUint8Array3(value) {
  return IsKindOf(value, "Uint8Array");
}
function IsUnknown(value) {
  return IsKindOf(value, "Unknown");
}
function IsUnsafe(value) {
  return IsKindOf(value, "Unsafe");
}
function IsVoid(value) {
  return IsKindOf(value, "Void");
}
function IsKind(value) {
  return IsObject2(value) && Kind in value && IsString2(value[Kind]);
}
function IsSchema(value) {
  return IsAny(value) || IsArgument(value) || IsArray3(value) || IsBoolean3(value) || IsBigInt3(value) || IsAsyncIterator3(value) || IsComputed(value) || IsConstructor(value) || IsDate3(value) || IsFunction3(value) || IsInteger2(value) || IsIntersect(value) || IsIterator3(value) || IsLiteral(value) || IsMappedKey(value) || IsMappedResult(value) || IsNever(value) || IsNot(value) || IsNull3(value) || IsNumber3(value) || IsObject3(value) || IsPromise2(value) || IsRecord(value) || IsRef(value) || IsRegExp2(value) || IsString3(value) || IsSymbol3(value) || IsTemplateLiteral(value) || IsThis(value) || IsTuple(value) || IsUndefined3(value) || IsUnion(value) || IsUint8Array3(value) || IsUnknown(value) || IsUnsafe(value) || IsVoid(value) || IsKind(value);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/optional/optional.mjs
function RemoveOptional(schema) {
  return CreateType(Discard(schema, [OptionalKind]));
}
function AddOptional(schema) {
  return CreateType({ ...schema, [OptionalKind]: "Optional" });
}
function OptionalWithFlag(schema, F6) {
  return F6 === false ? RemoveOptional(schema) : AddOptional(schema);
}
function Optional(schema, enable) {
  const F6 = enable ?? true;
  return IsMappedResult(schema) ? OptionalFromMappedResult(schema, F6) : OptionalWithFlag(schema, F6);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/optional/optional-from-mapped-result.mjs
function FromProperties(P10, F6) {
  const Acc = {};
  for (const K22 of globalThis.Object.getOwnPropertyNames(P10))
    Acc[K22] = Optional(P10[K22], F6);
  return Acc;
}
function FromMappedResult(R8, F6) {
  return FromProperties(R8.properties, F6);
}
function OptionalFromMappedResult(R8, F6) {
  const P10 = FromMappedResult(R8, F6);
  return MappedResult(P10);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/intersect/intersect-create.mjs
function IntersectCreate(T9, options = {}) {
  const allObjects = T9.every((schema) => IsObject3(schema));
  const clonedUnevaluatedProperties = IsSchema(options.unevaluatedProperties) ? { unevaluatedProperties: options.unevaluatedProperties } : {};
  return CreateType(options.unevaluatedProperties === false || IsSchema(options.unevaluatedProperties) || allObjects ? { ...clonedUnevaluatedProperties, [Kind]: "Intersect", type: "object", allOf: T9 } : { ...clonedUnevaluatedProperties, [Kind]: "Intersect", allOf: T9 }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/intersect/intersect-evaluated.mjs
function IsIntersectOptional(types) {
  return types.every((left) => IsOptional(left));
}
function RemoveOptionalFromType(type) {
  return Discard(type, [OptionalKind]);
}
function RemoveOptionalFromRest(types) {
  return types.map((left) => IsOptional(left) ? RemoveOptionalFromType(left) : left);
}
function ResolveIntersect(types, options) {
  return IsIntersectOptional(types) ? Optional(IntersectCreate(RemoveOptionalFromRest(types), options)) : IntersectCreate(RemoveOptionalFromRest(types), options);
}
function IntersectEvaluated(types, options = {}) {
  if (types.length === 1)
    return CreateType(types[0], options);
  if (types.length === 0)
    return Never(options);
  if (types.some((schema) => IsTransform(schema)))
    throw new Error("Cannot intersect transform types");
  return ResolveIntersect(types, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/intersect/intersect.mjs
function Intersect(types, options) {
  if (types.length === 1)
    return CreateType(types[0], options);
  if (types.length === 0)
    return Never(options);
  if (types.some((schema) => IsTransform(schema)))
    throw new Error("Cannot intersect transform types");
  return IntersectCreate(types, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/union/union-create.mjs
function UnionCreate(T9, options) {
  return CreateType({ [Kind]: "Union", anyOf: T9 }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/union/union-evaluated.mjs
function IsUnionOptional(types) {
  return types.some((type) => IsOptional(type));
}
function RemoveOptionalFromRest2(types) {
  return types.map((left) => IsOptional(left) ? RemoveOptionalFromType2(left) : left);
}
function RemoveOptionalFromType2(T9) {
  return Discard(T9, [OptionalKind]);
}
function ResolveUnion(types, options) {
  const isOptional = IsUnionOptional(types);
  return isOptional ? Optional(UnionCreate(RemoveOptionalFromRest2(types), options)) : UnionCreate(RemoveOptionalFromRest2(types), options);
}
function UnionEvaluated(T9, options) {
  return T9.length === 1 ? CreateType(T9[0], options) : T9.length === 0 ? Never(options) : ResolveUnion(T9, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/union/union.mjs
function Union(types, options) {
  return types.length === 0 ? Never(options) : types.length === 1 ? CreateType(types[0], options) : UnionCreate(types, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/template-literal/parse.mjs
var TemplateLiteralParserError = class extends TypeBoxError {
};
function Unescape(pattern) {
  return pattern.replace(/\\\$/g, "$").replace(/\\\*/g, "*").replace(/\\\^/g, "^").replace(/\\\|/g, "|").replace(/\\\(/g, "(").replace(/\\\)/g, ")");
}
function IsNonEscaped(pattern, index, char) {
  return pattern[index] === char && pattern.charCodeAt(index - 1) !== 92;
}
function IsOpenParen(pattern, index) {
  return IsNonEscaped(pattern, index, "(");
}
function IsCloseParen(pattern, index) {
  return IsNonEscaped(pattern, index, ")");
}
function IsSeparator(pattern, index) {
  return IsNonEscaped(pattern, index, "|");
}
function IsGroup(pattern) {
  if (!(IsOpenParen(pattern, 0) && IsCloseParen(pattern, pattern.length - 1)))
    return false;
  let count = 0;
  for (let index = 0; index < pattern.length; index++) {
    if (IsOpenParen(pattern, index))
      count += 1;
    if (IsCloseParen(pattern, index))
      count -= 1;
    if (count === 0 && index !== pattern.length - 1)
      return false;
  }
  return true;
}
function InGroup(pattern) {
  return pattern.slice(1, pattern.length - 1);
}
function IsPrecedenceOr(pattern) {
  let count = 0;
  for (let index = 0; index < pattern.length; index++) {
    if (IsOpenParen(pattern, index))
      count += 1;
    if (IsCloseParen(pattern, index))
      count -= 1;
    if (IsSeparator(pattern, index) && count === 0)
      return true;
  }
  return false;
}
function IsPrecedenceAnd(pattern) {
  for (let index = 0; index < pattern.length; index++) {
    if (IsOpenParen(pattern, index))
      return true;
  }
  return false;
}
function Or(pattern) {
  let [count, start] = [0, 0];
  const expressions = [];
  for (let index = 0; index < pattern.length; index++) {
    if (IsOpenParen(pattern, index))
      count += 1;
    if (IsCloseParen(pattern, index))
      count -= 1;
    if (IsSeparator(pattern, index) && count === 0) {
      const range2 = pattern.slice(start, index);
      if (range2.length > 0)
        expressions.push(TemplateLiteralParse(range2));
      start = index + 1;
    }
  }
  const range = pattern.slice(start);
  if (range.length > 0)
    expressions.push(TemplateLiteralParse(range));
  if (expressions.length === 0)
    return { type: "const", const: "" };
  if (expressions.length === 1)
    return expressions[0];
  return { type: "or", expr: expressions };
}
function And(pattern) {
  function Group(value, index) {
    if (!IsOpenParen(value, index))
      throw new TemplateLiteralParserError(`TemplateLiteralParser: Index must point to open parens`);
    let count = 0;
    for (let scan = index; scan < value.length; scan++) {
      if (IsOpenParen(value, scan))
        count += 1;
      if (IsCloseParen(value, scan))
        count -= 1;
      if (count === 0)
        return [index, scan];
    }
    throw new TemplateLiteralParserError(`TemplateLiteralParser: Unclosed group parens in expression`);
  }
  function Range(pattern2, index) {
    for (let scan = index; scan < pattern2.length; scan++) {
      if (IsOpenParen(pattern2, scan))
        return [index, scan];
    }
    return [index, pattern2.length];
  }
  const expressions = [];
  for (let index = 0; index < pattern.length; index++) {
    if (IsOpenParen(pattern, index)) {
      const [start, end] = Group(pattern, index);
      const range = pattern.slice(start, end + 1);
      expressions.push(TemplateLiteralParse(range));
      index = end;
    } else {
      const [start, end] = Range(pattern, index);
      const range = pattern.slice(start, end);
      if (range.length > 0)
        expressions.push(TemplateLiteralParse(range));
      index = end - 1;
    }
  }
  return expressions.length === 0 ? { type: "const", const: "" } : expressions.length === 1 ? expressions[0] : { type: "and", expr: expressions };
}
function TemplateLiteralParse(pattern) {
  return IsGroup(pattern) ? TemplateLiteralParse(InGroup(pattern)) : IsPrecedenceOr(pattern) ? Or(pattern) : IsPrecedenceAnd(pattern) ? And(pattern) : { type: "const", const: Unescape(pattern) };
}
function TemplateLiteralParseExact(pattern) {
  return TemplateLiteralParse(pattern.slice(1, pattern.length - 1));
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/template-literal/finite.mjs
var TemplateLiteralFiniteError = class extends TypeBoxError {
};
function IsNumberExpression(expression) {
  return expression.type === "or" && expression.expr.length === 2 && expression.expr[0].type === "const" && expression.expr[0].const === "0" && expression.expr[1].type === "const" && expression.expr[1].const === "[1-9][0-9]*";
}
function IsBooleanExpression(expression) {
  return expression.type === "or" && expression.expr.length === 2 && expression.expr[0].type === "const" && expression.expr[0].const === "true" && expression.expr[1].type === "const" && expression.expr[1].const === "false";
}
function IsStringExpression(expression) {
  return expression.type === "const" && expression.const === ".*";
}
function IsTemplateLiteralExpressionFinite(expression) {
  return IsNumberExpression(expression) || IsStringExpression(expression) ? false : IsBooleanExpression(expression) ? true : expression.type === "and" ? expression.expr.every((expr) => IsTemplateLiteralExpressionFinite(expr)) : expression.type === "or" ? expression.expr.every((expr) => IsTemplateLiteralExpressionFinite(expr)) : expression.type === "const" ? true : (() => {
    throw new TemplateLiteralFiniteError(`Unknown expression type`);
  })();
}
function IsTemplateLiteralFinite(schema) {
  const expression = TemplateLiteralParseExact(schema.pattern);
  return IsTemplateLiteralExpressionFinite(expression);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/template-literal/generate.mjs
var TemplateLiteralGenerateError = class extends TypeBoxError {
};
function* GenerateReduce(buffer) {
  if (buffer.length === 1)
    return yield* buffer[0];
  for (const left of buffer[0]) {
    for (const right of GenerateReduce(buffer.slice(1))) {
      yield `${left}${right}`;
    }
  }
}
function* GenerateAnd(expression) {
  return yield* GenerateReduce(expression.expr.map((expr) => [...TemplateLiteralExpressionGenerate(expr)]));
}
function* GenerateOr(expression) {
  for (const expr of expression.expr)
    yield* TemplateLiteralExpressionGenerate(expr);
}
function* GenerateConst(expression) {
  return yield expression.const;
}
function* TemplateLiteralExpressionGenerate(expression) {
  return expression.type === "and" ? yield* GenerateAnd(expression) : expression.type === "or" ? yield* GenerateOr(expression) : expression.type === "const" ? yield* GenerateConst(expression) : (() => {
    throw new TemplateLiteralGenerateError("Unknown expression");
  })();
}
function TemplateLiteralGenerate(schema) {
  const expression = TemplateLiteralParseExact(schema.pattern);
  return IsTemplateLiteralExpressionFinite(expression) ? [...TemplateLiteralExpressionGenerate(expression)] : [];
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/literal/literal.mjs
function Literal(value, options) {
  return CreateType({
    [Kind]: "Literal",
    const: value,
    type: typeof value
  }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/boolean/boolean.mjs
function Boolean2(options) {
  return CreateType({ [Kind]: "Boolean", type: "boolean" }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/bigint/bigint.mjs
function BigInt2(options) {
  return CreateType({ [Kind]: "BigInt", type: "bigint" }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/number/number.mjs
function Number2(options) {
  return CreateType({ [Kind]: "Number", type: "number" }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/string/string.mjs
function String2(options) {
  return CreateType({ [Kind]: "String", type: "string" }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/template-literal/syntax.mjs
function* FromUnion(syntax) {
  const trim = syntax.trim().replace(/"|'/g, "");
  return trim === "boolean" ? yield Boolean2() : trim === "number" ? yield Number2() : trim === "bigint" ? yield BigInt2() : trim === "string" ? yield String2() : yield (() => {
    const literals = trim.split("|").map((literal) => Literal(literal.trim()));
    return literals.length === 0 ? Never() : literals.length === 1 ? literals[0] : UnionEvaluated(literals);
  })();
}
function* FromTerminal(syntax) {
  if (syntax[1] !== "{") {
    const L6 = Literal("$");
    const R8 = FromSyntax(syntax.slice(1));
    return yield* [L6, ...R8];
  }
  for (let i15 = 2; i15 < syntax.length; i15++) {
    if (syntax[i15] === "}") {
      const L6 = FromUnion(syntax.slice(2, i15));
      const R8 = FromSyntax(syntax.slice(i15 + 1));
      return yield* [...L6, ...R8];
    }
  }
  yield Literal(syntax);
}
function* FromSyntax(syntax) {
  for (let i15 = 0; i15 < syntax.length; i15++) {
    if (syntax[i15] === "$") {
      const L6 = Literal(syntax.slice(0, i15));
      const R8 = FromTerminal(syntax.slice(i15));
      return yield* [L6, ...R8];
    }
  }
  yield Literal(syntax);
}
function TemplateLiteralSyntax(syntax) {
  return [...FromSyntax(syntax)];
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/patterns/patterns.mjs
var PatternBoolean = "(true|false)";
var PatternNumber = "(0|[1-9][0-9]*)";
var PatternString = "(.*)";
var PatternNever = "(?!.*)";
var PatternBooleanExact = `^${PatternBoolean}$`;
var PatternNumberExact = `^${PatternNumber}$`;
var PatternStringExact = `^${PatternString}$`;
var PatternNeverExact = `^${PatternNever}$`;

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/template-literal/pattern.mjs
var TemplateLiteralPatternError = class extends TypeBoxError {
};
function Escape(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Visit2(schema, acc) {
  return IsTemplateLiteral(schema) ? schema.pattern.slice(1, schema.pattern.length - 1) : IsUnion(schema) ? `(${schema.anyOf.map((schema2) => Visit2(schema2, acc)).join("|")})` : IsNumber3(schema) ? `${acc}${PatternNumber}` : IsInteger2(schema) ? `${acc}${PatternNumber}` : IsBigInt3(schema) ? `${acc}${PatternNumber}` : IsString3(schema) ? `${acc}${PatternString}` : IsLiteral(schema) ? `${acc}${Escape(schema.const.toString())}` : IsBoolean3(schema) ? `${acc}${PatternBoolean}` : (() => {
    throw new TemplateLiteralPatternError(`Unexpected Kind '${schema[Kind]}'`);
  })();
}
function TemplateLiteralPattern(kinds) {
  return `^${kinds.map((schema) => Visit2(schema, "")).join("")}$`;
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/template-literal/union.mjs
function TemplateLiteralToUnion(schema) {
  const R8 = TemplateLiteralGenerate(schema);
  const L6 = R8.map((S9) => Literal(S9));
  return UnionEvaluated(L6);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/template-literal/template-literal.mjs
function TemplateLiteral(unresolved, options) {
  const pattern = IsString2(unresolved) ? TemplateLiteralPattern(TemplateLiteralSyntax(unresolved)) : TemplateLiteralPattern(unresolved);
  return CreateType({ [Kind]: "TemplateLiteral", type: "string", pattern }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/indexed/indexed-property-keys.mjs
function FromTemplateLiteral(templateLiteral) {
  const keys2 = TemplateLiteralGenerate(templateLiteral);
  return keys2.map((key) => key.toString());
}
function FromUnion2(types) {
  const result = [];
  for (const type of types)
    result.push(...IndexPropertyKeys(type));
  return result;
}
function FromLiteral(literalValue) {
  return [literalValue.toString()];
}
function IndexPropertyKeys(type) {
  return [...new Set(IsTemplateLiteral(type) ? FromTemplateLiteral(type) : IsUnion(type) ? FromUnion2(type.anyOf) : IsLiteral(type) ? FromLiteral(type.const) : IsNumber3(type) ? ["[number]"] : IsInteger2(type) ? ["[number]"] : [])];
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/indexed/indexed-from-mapped-result.mjs
function FromProperties2(type, properties, options) {
  const result = {};
  for (const K22 of Object.getOwnPropertyNames(properties)) {
    result[K22] = Index(type, IndexPropertyKeys(properties[K22]), options);
  }
  return result;
}
function FromMappedResult2(type, mappedResult, options) {
  return FromProperties2(type, mappedResult.properties, options);
}
function IndexFromMappedResult(type, mappedResult, options) {
  const properties = FromMappedResult2(type, mappedResult, options);
  return MappedResult(properties);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/indexed/indexed.mjs
function FromRest(types, key) {
  return types.map((type) => IndexFromPropertyKey(type, key));
}
function FromIntersectRest(types) {
  return types.filter((type) => !IsNever(type));
}
function FromIntersect(types, key) {
  return IntersectEvaluated(FromIntersectRest(FromRest(types, key)));
}
function FromUnionRest(types) {
  return types.some((L6) => IsNever(L6)) ? [] : types;
}
function FromUnion3(types, key) {
  return UnionEvaluated(FromUnionRest(FromRest(types, key)));
}
function FromTuple(types, key) {
  return key in types ? types[key] : key === "[number]" ? UnionEvaluated(types) : Never();
}
function FromArray(type, key) {
  return key === "[number]" ? type : Never();
}
function FromProperty(properties, propertyKey) {
  return propertyKey in properties ? properties[propertyKey] : Never();
}
function IndexFromPropertyKey(type, propertyKey) {
  return IsIntersect(type) ? FromIntersect(type.allOf, propertyKey) : IsUnion(type) ? FromUnion3(type.anyOf, propertyKey) : IsTuple(type) ? FromTuple(type.items ?? [], propertyKey) : IsArray3(type) ? FromArray(type.items, propertyKey) : IsObject3(type) ? FromProperty(type.properties, propertyKey) : Never();
}
function IndexFromPropertyKeys(type, propertyKeys) {
  return propertyKeys.map((propertyKey) => IndexFromPropertyKey(type, propertyKey));
}
function FromSchema(type, propertyKeys) {
  return UnionEvaluated(IndexFromPropertyKeys(type, propertyKeys));
}
function Index(type, key, options) {
  if (IsRef(type) || IsRef(key)) {
    const error = `Index types using Ref parameters require both Type and Key to be of TSchema`;
    if (!IsSchema(type) || !IsSchema(key))
      throw new TypeBoxError(error);
    return Computed("Index", [type, key]);
  }
  if (IsMappedResult(key))
    return IndexFromMappedResult(type, key, options);
  if (IsMappedKey(key))
    return IndexFromMappedKey(type, key, options);
  return CreateType(IsSchema(key) ? FromSchema(type, IndexPropertyKeys(key)) : FromSchema(type, key), options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/indexed/indexed-from-mapped-key.mjs
function MappedIndexPropertyKey(type, key, options) {
  return { [key]: Index(type, [key], Clone(options)) };
}
function MappedIndexPropertyKeys(type, propertyKeys, options) {
  return propertyKeys.reduce((result, left) => {
    return { ...result, ...MappedIndexPropertyKey(type, left, options) };
  }, {});
}
function MappedIndexProperties(type, mappedKey, options) {
  return MappedIndexPropertyKeys(type, mappedKey.keys, options);
}
function IndexFromMappedKey(type, mappedKey, options) {
  const properties = MappedIndexProperties(type, mappedKey, options);
  return MappedResult(properties);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/iterator/iterator.mjs
function Iterator(items, options) {
  return CreateType({ [Kind]: "Iterator", type: "Iterator", items }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/object/object.mjs
function RequiredKeys(properties) {
  const keys2 = [];
  for (let key in properties) {
    if (!IsOptional(properties[key]))
      keys2.push(key);
  }
  return keys2;
}
function _Object(properties, options) {
  const required = RequiredKeys(properties);
  const schematic = required.length > 0 ? { [Kind]: "Object", type: "object", properties, required } : { [Kind]: "Object", type: "object", properties };
  return CreateType(schematic, options);
}
var Object2 = _Object;

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/promise/promise.mjs
function Promise2(item, options) {
  return CreateType({ [Kind]: "Promise", type: "Promise", item }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/readonly/readonly.mjs
function RemoveReadonly(schema) {
  return CreateType(Discard(schema, [ReadonlyKind]));
}
function AddReadonly(schema) {
  return CreateType({ ...schema, [ReadonlyKind]: "Readonly" });
}
function ReadonlyWithFlag(schema, F6) {
  return F6 === false ? RemoveReadonly(schema) : AddReadonly(schema);
}
function Readonly(schema, enable) {
  const F6 = enable ?? true;
  return IsMappedResult(schema) ? ReadonlyFromMappedResult(schema, F6) : ReadonlyWithFlag(schema, F6);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/readonly/readonly-from-mapped-result.mjs
function FromProperties3(K6, F6) {
  const Acc = {};
  for (const K22 of globalThis.Object.getOwnPropertyNames(K6))
    Acc[K22] = Readonly(K6[K22], F6);
  return Acc;
}
function FromMappedResult3(R8, F6) {
  return FromProperties3(R8.properties, F6);
}
function ReadonlyFromMappedResult(R8, F6) {
  const P10 = FromMappedResult3(R8, F6);
  return MappedResult(P10);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/tuple/tuple.mjs
function Tuple(types, options) {
  return CreateType(types.length > 0 ? { [Kind]: "Tuple", type: "array", items: types, additionalItems: false, minItems: types.length, maxItems: types.length } : { [Kind]: "Tuple", type: "array", minItems: types.length, maxItems: types.length }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/sets/set.mjs
function SetIncludes(T9, S9) {
  return T9.includes(S9);
}
function SetDistinct(T9) {
  return [...new Set(T9)];
}
function SetIntersect(T9, S9) {
  return T9.filter((L6) => S9.includes(L6));
}
function SetIntersectManyResolve(T9, Init) {
  return T9.reduce((Acc, L6) => {
    return SetIntersect(Acc, L6);
  }, Init);
}
function SetIntersectMany(T9) {
  return T9.length === 1 ? T9[0] : T9.length > 1 ? SetIntersectManyResolve(T9.slice(1), T9[0]) : [];
}
function SetUnionMany(T9) {
  const Acc = [];
  for (const L6 of T9)
    Acc.push(...L6);
  return Acc;
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/mapped/mapped.mjs
function FromMappedResult4(K6, P10) {
  return K6 in P10 ? FromSchemaType(K6, P10[K6]) : MappedResult(P10);
}
function MappedKeyToKnownMappedResultProperties(K6) {
  return { [K6]: Literal(K6) };
}
function MappedKeyToUnknownMappedResultProperties(P10) {
  const Acc = {};
  for (const L6 of P10)
    Acc[L6] = Literal(L6);
  return Acc;
}
function MappedKeyToMappedResultProperties(K6, P10) {
  return SetIncludes(P10, K6) ? MappedKeyToKnownMappedResultProperties(K6) : MappedKeyToUnknownMappedResultProperties(P10);
}
function FromMappedKey(K6, P10) {
  const R8 = MappedKeyToMappedResultProperties(K6, P10);
  return FromMappedResult4(K6, R8);
}
function FromRest2(K6, T9) {
  return T9.map((L6) => FromSchemaType(K6, L6));
}
function FromProperties4(K6, T9) {
  const Acc = {};
  for (const K22 of globalThis.Object.getOwnPropertyNames(T9))
    Acc[K22] = FromSchemaType(K6, T9[K22]);
  return Acc;
}
function FromSchemaType(K6, T9) {
  const options = { ...T9 };
  return (
    // unevaluated modifier types
    IsOptional(T9) ? Optional(FromSchemaType(K6, Discard(T9, [OptionalKind]))) : IsReadonly(T9) ? Readonly(FromSchemaType(K6, Discard(T9, [ReadonlyKind]))) : (
      // unevaluated mapped types
      IsMappedResult(T9) ? FromMappedResult4(K6, T9.properties) : IsMappedKey(T9) ? FromMappedKey(K6, T9.keys) : (
        // unevaluated types
        IsConstructor(T9) ? Constructor(FromRest2(K6, T9.parameters), FromSchemaType(K6, T9.returns), options) : IsFunction3(T9) ? Function2(FromRest2(K6, T9.parameters), FromSchemaType(K6, T9.returns), options) : IsAsyncIterator3(T9) ? AsyncIterator(FromSchemaType(K6, T9.items), options) : IsIterator3(T9) ? Iterator(FromSchemaType(K6, T9.items), options) : IsIntersect(T9) ? Intersect(FromRest2(K6, T9.allOf), options) : IsUnion(T9) ? Union(FromRest2(K6, T9.anyOf), options) : IsTuple(T9) ? Tuple(FromRest2(K6, T9.items ?? []), options) : IsObject3(T9) ? Object2(FromProperties4(K6, T9.properties), options) : IsArray3(T9) ? Array2(FromSchemaType(K6, T9.items), options) : IsPromise2(T9) ? Promise2(FromSchemaType(K6, T9.item), options) : T9
      )
    )
  );
}
function MappedFunctionReturnType(K6, T9) {
  const Acc = {};
  for (const L6 of K6)
    Acc[L6] = FromSchemaType(L6, T9);
  return Acc;
}
function Mapped(key, map3, options) {
  const K6 = IsSchema(key) ? IndexPropertyKeys(key) : key;
  const RT = map3({ [Kind]: "MappedKey", keys: K6 });
  const R8 = MappedFunctionReturnType(K6, RT);
  return Object2(R8, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/ref/ref.mjs
function Ref(...args) {
  const [$ref, options] = typeof args[0] === "string" ? [args[0], args[1]] : [args[0].$id, args[1]];
  if (typeof $ref !== "string")
    throw new TypeBoxError("Ref: $ref must be a string");
  return CreateType({ [Kind]: "Ref", $ref }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/keyof/keyof-property-keys.mjs
function FromRest3(types) {
  const result = [];
  for (const L6 of types)
    result.push(KeyOfPropertyKeys(L6));
  return result;
}
function FromIntersect2(types) {
  const propertyKeysArray = FromRest3(types);
  const propertyKeys = SetUnionMany(propertyKeysArray);
  return propertyKeys;
}
function FromUnion4(types) {
  const propertyKeysArray = FromRest3(types);
  const propertyKeys = SetIntersectMany(propertyKeysArray);
  return propertyKeys;
}
function FromTuple2(types) {
  return types.map((_13, indexer) => indexer.toString());
}
function FromArray2(_13) {
  return ["[number]"];
}
function FromProperties5(T9) {
  return globalThis.Object.getOwnPropertyNames(T9);
}
function FromPatternProperties(patternProperties) {
  if (!includePatternProperties)
    return [];
  const patternPropertyKeys = globalThis.Object.getOwnPropertyNames(patternProperties);
  return patternPropertyKeys.map((key) => {
    return key[0] === "^" && key[key.length - 1] === "$" ? key.slice(1, key.length - 1) : key;
  });
}
function KeyOfPropertyKeys(type) {
  return IsIntersect(type) ? FromIntersect2(type.allOf) : IsUnion(type) ? FromUnion4(type.anyOf) : IsTuple(type) ? FromTuple2(type.items ?? []) : IsArray3(type) ? FromArray2(type.items) : IsObject3(type) ? FromProperties5(type.properties) : IsRecord(type) ? FromPatternProperties(type.patternProperties) : [];
}
var includePatternProperties = false;
function KeyOfPattern(schema) {
  includePatternProperties = true;
  const keys2 = KeyOfPropertyKeys(schema);
  includePatternProperties = false;
  const pattern = keys2.map((key) => `(${key})`);
  return `^(${pattern.join("|")})$`;
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/keyof/keyof.mjs
function FromComputed(target, parameters) {
  return Computed("KeyOf", [Computed(target, parameters)]);
}
function FromRef($ref) {
  return Computed("KeyOf", [Ref($ref)]);
}
function KeyOfFromType(type, options) {
  const propertyKeys = KeyOfPropertyKeys(type);
  const propertyKeyTypes = KeyOfPropertyKeysToRest(propertyKeys);
  const result = UnionEvaluated(propertyKeyTypes);
  return CreateType(result, options);
}
function KeyOfPropertyKeysToRest(propertyKeys) {
  return propertyKeys.map((L6) => L6 === "[number]" ? Number2() : Literal(L6));
}
function KeyOf(type, options) {
  return IsComputed(type) ? FromComputed(type.target, type.parameters) : IsRef(type) ? FromRef(type.$ref) : IsMappedResult(type) ? KeyOfFromMappedResult(type, options) : KeyOfFromType(type, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/keyof/keyof-from-mapped-result.mjs
function FromProperties6(properties, options) {
  const result = {};
  for (const K22 of globalThis.Object.getOwnPropertyNames(properties))
    result[K22] = KeyOf(properties[K22], Clone(options));
  return result;
}
function FromMappedResult5(mappedResult, options) {
  return FromProperties6(mappedResult.properties, options);
}
function KeyOfFromMappedResult(mappedResult, options) {
  const properties = FromMappedResult5(mappedResult, options);
  return MappedResult(properties);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/keyof/keyof-property-entries.mjs
function KeyOfPropertyEntries(schema) {
  const keys2 = KeyOfPropertyKeys(schema);
  const schemas = IndexFromPropertyKeys(schema, keys2);
  return keys2.map((_13, index) => [keys2[index], schemas[index]]);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/extends/extends-undefined.mjs
function Intersect2(schema) {
  return schema.allOf.every((schema2) => ExtendsUndefinedCheck(schema2));
}
function Union2(schema) {
  return schema.anyOf.some((schema2) => ExtendsUndefinedCheck(schema2));
}
function Not(schema) {
  return !ExtendsUndefinedCheck(schema.not);
}
function ExtendsUndefinedCheck(schema) {
  return schema[Kind] === "Intersect" ? Intersect2(schema) : schema[Kind] === "Union" ? Union2(schema) : schema[Kind] === "Not" ? Not(schema) : schema[Kind] === "Undefined" ? true : false;
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/errors/function.mjs
function DefaultErrorFunction(error) {
  switch (error.errorType) {
    case ValueErrorType.ArrayContains:
      return "Expected array to contain at least one matching value";
    case ValueErrorType.ArrayMaxContains:
      return `Expected array to contain no more than ${error.schema.maxContains} matching values`;
    case ValueErrorType.ArrayMinContains:
      return `Expected array to contain at least ${error.schema.minContains} matching values`;
    case ValueErrorType.ArrayMaxItems:
      return `Expected array length to be less or equal to ${error.schema.maxItems}`;
    case ValueErrorType.ArrayMinItems:
      return `Expected array length to be greater or equal to ${error.schema.minItems}`;
    case ValueErrorType.ArrayUniqueItems:
      return "Expected array elements to be unique";
    case ValueErrorType.Array:
      return "Expected array";
    case ValueErrorType.AsyncIterator:
      return "Expected AsyncIterator";
    case ValueErrorType.BigIntExclusiveMaximum:
      return `Expected bigint to be less than ${error.schema.exclusiveMaximum}`;
    case ValueErrorType.BigIntExclusiveMinimum:
      return `Expected bigint to be greater than ${error.schema.exclusiveMinimum}`;
    case ValueErrorType.BigIntMaximum:
      return `Expected bigint to be less or equal to ${error.schema.maximum}`;
    case ValueErrorType.BigIntMinimum:
      return `Expected bigint to be greater or equal to ${error.schema.minimum}`;
    case ValueErrorType.BigIntMultipleOf:
      return `Expected bigint to be a multiple of ${error.schema.multipleOf}`;
    case ValueErrorType.BigInt:
      return "Expected bigint";
    case ValueErrorType.Boolean:
      return "Expected boolean";
    case ValueErrorType.DateExclusiveMinimumTimestamp:
      return `Expected Date timestamp to be greater than ${error.schema.exclusiveMinimumTimestamp}`;
    case ValueErrorType.DateExclusiveMaximumTimestamp:
      return `Expected Date timestamp to be less than ${error.schema.exclusiveMaximumTimestamp}`;
    case ValueErrorType.DateMinimumTimestamp:
      return `Expected Date timestamp to be greater or equal to ${error.schema.minimumTimestamp}`;
    case ValueErrorType.DateMaximumTimestamp:
      return `Expected Date timestamp to be less or equal to ${error.schema.maximumTimestamp}`;
    case ValueErrorType.DateMultipleOfTimestamp:
      return `Expected Date timestamp to be a multiple of ${error.schema.multipleOfTimestamp}`;
    case ValueErrorType.Date:
      return "Expected Date";
    case ValueErrorType.Function:
      return "Expected function";
    case ValueErrorType.IntegerExclusiveMaximum:
      return `Expected integer to be less than ${error.schema.exclusiveMaximum}`;
    case ValueErrorType.IntegerExclusiveMinimum:
      return `Expected integer to be greater than ${error.schema.exclusiveMinimum}`;
    case ValueErrorType.IntegerMaximum:
      return `Expected integer to be less or equal to ${error.schema.maximum}`;
    case ValueErrorType.IntegerMinimum:
      return `Expected integer to be greater or equal to ${error.schema.minimum}`;
    case ValueErrorType.IntegerMultipleOf:
      return `Expected integer to be a multiple of ${error.schema.multipleOf}`;
    case ValueErrorType.Integer:
      return "Expected integer";
    case ValueErrorType.IntersectUnevaluatedProperties:
      return "Unexpected property";
    case ValueErrorType.Intersect:
      return "Expected all values to match";
    case ValueErrorType.Iterator:
      return "Expected Iterator";
    case ValueErrorType.Literal:
      return `Expected ${typeof error.schema.const === "string" ? `'${error.schema.const}'` : error.schema.const}`;
    case ValueErrorType.Never:
      return "Never";
    case ValueErrorType.Not:
      return "Value should not match";
    case ValueErrorType.Null:
      return "Expected null";
    case ValueErrorType.NumberExclusiveMaximum:
      return `Expected number to be less than ${error.schema.exclusiveMaximum}`;
    case ValueErrorType.NumberExclusiveMinimum:
      return `Expected number to be greater than ${error.schema.exclusiveMinimum}`;
    case ValueErrorType.NumberMaximum:
      return `Expected number to be less or equal to ${error.schema.maximum}`;
    case ValueErrorType.NumberMinimum:
      return `Expected number to be greater or equal to ${error.schema.minimum}`;
    case ValueErrorType.NumberMultipleOf:
      return `Expected number to be a multiple of ${error.schema.multipleOf}`;
    case ValueErrorType.Number:
      return "Expected number";
    case ValueErrorType.Object:
      return "Expected object";
    case ValueErrorType.ObjectAdditionalProperties:
      return "Unexpected property";
    case ValueErrorType.ObjectMaxProperties:
      return `Expected object to have no more than ${error.schema.maxProperties} properties`;
    case ValueErrorType.ObjectMinProperties:
      return `Expected object to have at least ${error.schema.minProperties} properties`;
    case ValueErrorType.ObjectRequiredProperty:
      return "Expected required property";
    case ValueErrorType.Promise:
      return "Expected Promise";
    case ValueErrorType.RegExp:
      return "Expected string to match regular expression";
    case ValueErrorType.StringFormatUnknown:
      return `Unknown format '${error.schema.format}'`;
    case ValueErrorType.StringFormat:
      return `Expected string to match '${error.schema.format}' format`;
    case ValueErrorType.StringMaxLength:
      return `Expected string length less or equal to ${error.schema.maxLength}`;
    case ValueErrorType.StringMinLength:
      return `Expected string length greater or equal to ${error.schema.minLength}`;
    case ValueErrorType.StringPattern:
      return `Expected string to match '${error.schema.pattern}'`;
    case ValueErrorType.String:
      return "Expected string";
    case ValueErrorType.Symbol:
      return "Expected symbol";
    case ValueErrorType.TupleLength:
      return `Expected tuple to have ${error.schema.maxItems || 0} elements`;
    case ValueErrorType.Tuple:
      return "Expected tuple";
    case ValueErrorType.Uint8ArrayMaxByteLength:
      return `Expected byte length less or equal to ${error.schema.maxByteLength}`;
    case ValueErrorType.Uint8ArrayMinByteLength:
      return `Expected byte length greater or equal to ${error.schema.minByteLength}`;
    case ValueErrorType.Uint8Array:
      return "Expected Uint8Array";
    case ValueErrorType.Undefined:
      return "Expected undefined";
    case ValueErrorType.Union:
      return "Expected union value";
    case ValueErrorType.Void:
      return "Expected void";
    case ValueErrorType.Kind:
      return `Expected kind '${error.schema[Kind]}'`;
    default:
      return "Unknown error type";
  }
}
var errorFunction = DefaultErrorFunction;
function GetErrorFunction() {
  return errorFunction;
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/value/deref/deref.mjs
var TypeDereferenceError = class extends TypeBoxError {
  constructor(schema) {
    super(`Unable to dereference schema with $id '${schema.$ref}'`);
    this.schema = schema;
  }
};
function Resolve(schema, references) {
  const target = references.find((target2) => target2.$id === schema.$ref);
  if (target === void 0)
    throw new TypeDereferenceError(schema);
  return Deref(target, references);
}
function Pushref(schema, references) {
  if (!IsString(schema.$id) || references.some((target) => target.$id === schema.$id))
    return references;
  references.push(schema);
  return references;
}
function Deref(schema, references) {
  return schema[Kind] === "This" || schema[Kind] === "Ref" ? Resolve(schema, references) : schema;
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/value/hash/hash.mjs
var ValueHashError = class extends TypeBoxError {
  constructor(value) {
    super(`Unable to hash value`);
    this.value = value;
  }
};
var ByteMarker;
(function(ByteMarker2) {
  ByteMarker2[ByteMarker2["Undefined"] = 0] = "Undefined";
  ByteMarker2[ByteMarker2["Null"] = 1] = "Null";
  ByteMarker2[ByteMarker2["Boolean"] = 2] = "Boolean";
  ByteMarker2[ByteMarker2["Number"] = 3] = "Number";
  ByteMarker2[ByteMarker2["String"] = 4] = "String";
  ByteMarker2[ByteMarker2["Object"] = 5] = "Object";
  ByteMarker2[ByteMarker2["Array"] = 6] = "Array";
  ByteMarker2[ByteMarker2["Date"] = 7] = "Date";
  ByteMarker2[ByteMarker2["Uint8Array"] = 8] = "Uint8Array";
  ByteMarker2[ByteMarker2["Symbol"] = 9] = "Symbol";
  ByteMarker2[ByteMarker2["BigInt"] = 10] = "BigInt";
})(ByteMarker || (ByteMarker = {}));
var Accumulator = BigInt("14695981039346656037");
var [Prime, Size] = [BigInt("1099511628211"), BigInt(
  "18446744073709551616"
  /* 2 ^ 64 */
)];
var Bytes = Array.from({ length: 256 }).map((_13, i15) => BigInt(i15));
var F64 = new Float64Array(1);
var F64In = new DataView(F64.buffer);
var F64Out = new Uint8Array(F64.buffer);
function* NumberToBytes(value) {
  const byteCount = value === 0 ? 1 : Math.ceil(Math.floor(Math.log2(value) + 1) / 8);
  for (let i15 = 0; i15 < byteCount; i15++) {
    yield value >> 8 * (byteCount - 1 - i15) & 255;
  }
}
function ArrayType2(value) {
  FNV1A64(ByteMarker.Array);
  for (const item of value) {
    Visit3(item);
  }
}
function BooleanType(value) {
  FNV1A64(ByteMarker.Boolean);
  FNV1A64(value ? 1 : 0);
}
function BigIntType(value) {
  FNV1A64(ByteMarker.BigInt);
  F64In.setBigInt64(0, value);
  for (const byte of F64Out) {
    FNV1A64(byte);
  }
}
function DateType2(value) {
  FNV1A64(ByteMarker.Date);
  Visit3(value.getTime());
}
function NullType(value) {
  FNV1A64(ByteMarker.Null);
}
function NumberType(value) {
  FNV1A64(ByteMarker.Number);
  F64In.setFloat64(0, value);
  for (const byte of F64Out) {
    FNV1A64(byte);
  }
}
function ObjectType2(value) {
  FNV1A64(ByteMarker.Object);
  for (const key of globalThis.Object.getOwnPropertyNames(value).sort()) {
    Visit3(key);
    Visit3(value[key]);
  }
}
function StringType(value) {
  FNV1A64(ByteMarker.String);
  for (let i15 = 0; i15 < value.length; i15++) {
    for (const byte of NumberToBytes(value.charCodeAt(i15))) {
      FNV1A64(byte);
    }
  }
}
function SymbolType(value) {
  FNV1A64(ByteMarker.Symbol);
  Visit3(value.description);
}
function Uint8ArrayType2(value) {
  FNV1A64(ByteMarker.Uint8Array);
  for (let i15 = 0; i15 < value.length; i15++) {
    FNV1A64(value[i15]);
  }
}
function UndefinedType(value) {
  return FNV1A64(ByteMarker.Undefined);
}
function Visit3(value) {
  if (IsArray(value))
    return ArrayType2(value);
  if (IsBoolean(value))
    return BooleanType(value);
  if (IsBigInt(value))
    return BigIntType(value);
  if (IsDate(value))
    return DateType2(value);
  if (IsNull(value))
    return NullType(value);
  if (IsNumber(value))
    return NumberType(value);
  if (IsObject(value))
    return ObjectType2(value);
  if (IsString(value))
    return StringType(value);
  if (IsSymbol(value))
    return SymbolType(value);
  if (IsUint8Array(value))
    return Uint8ArrayType2(value);
  if (IsUndefined(value))
    return UndefinedType(value);
  throw new ValueHashError(value);
}
function FNV1A64(byte) {
  Accumulator = Accumulator ^ Bytes[byte];
  Accumulator = Accumulator * Prime % Size;
}
function Hash(value) {
  Accumulator = BigInt("14695981039346656037");
  Visit3(value);
  return Accumulator;
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/any/any.mjs
function Any(options) {
  return CreateType({ [Kind]: "Any" }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/unknown/unknown.mjs
function Unknown(options) {
  return CreateType({ [Kind]: "Unknown" }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/guard/type.mjs
var type_exports2 = {};
__export(type_exports2, {
  IsAny: () => IsAny2,
  IsArgument: () => IsArgument2,
  IsArray: () => IsArray4,
  IsAsyncIterator: () => IsAsyncIterator4,
  IsBigInt: () => IsBigInt4,
  IsBoolean: () => IsBoolean4,
  IsComputed: () => IsComputed2,
  IsConstructor: () => IsConstructor2,
  IsDate: () => IsDate4,
  IsFunction: () => IsFunction4,
  IsImport: () => IsImport2,
  IsInteger: () => IsInteger3,
  IsIntersect: () => IsIntersect2,
  IsIterator: () => IsIterator4,
  IsKind: () => IsKind2,
  IsKindOf: () => IsKindOf2,
  IsLiteral: () => IsLiteral2,
  IsLiteralBoolean: () => IsLiteralBoolean2,
  IsLiteralNumber: () => IsLiteralNumber2,
  IsLiteralString: () => IsLiteralString2,
  IsLiteralValue: () => IsLiteralValue2,
  IsMappedKey: () => IsMappedKey2,
  IsMappedResult: () => IsMappedResult2,
  IsNever: () => IsNever2,
  IsNot: () => IsNot2,
  IsNull: () => IsNull4,
  IsNumber: () => IsNumber4,
  IsObject: () => IsObject4,
  IsOptional: () => IsOptional2,
  IsPromise: () => IsPromise3,
  IsProperties: () => IsProperties2,
  IsReadonly: () => IsReadonly2,
  IsRecord: () => IsRecord2,
  IsRecursive: () => IsRecursive2,
  IsRef: () => IsRef2,
  IsRegExp: () => IsRegExp3,
  IsSchema: () => IsSchema2,
  IsString: () => IsString4,
  IsSymbol: () => IsSymbol4,
  IsTemplateLiteral: () => IsTemplateLiteral2,
  IsThis: () => IsThis2,
  IsTransform: () => IsTransform2,
  IsTuple: () => IsTuple2,
  IsUint8Array: () => IsUint8Array4,
  IsUndefined: () => IsUndefined4,
  IsUnion: () => IsUnion2,
  IsUnionLiteral: () => IsUnionLiteral,
  IsUnknown: () => IsUnknown2,
  IsUnsafe: () => IsUnsafe2,
  IsVoid: () => IsVoid2,
  TypeGuardUnknownTypeError: () => TypeGuardUnknownTypeError
});
var TypeGuardUnknownTypeError = class extends TypeBoxError {
};
var KnownTypes = [
  "Argument",
  "Any",
  "Array",
  "AsyncIterator",
  "BigInt",
  "Boolean",
  "Computed",
  "Constructor",
  "Date",
  "Enum",
  "Function",
  "Integer",
  "Intersect",
  "Iterator",
  "Literal",
  "MappedKey",
  "MappedResult",
  "Not",
  "Null",
  "Number",
  "Object",
  "Promise",
  "Record",
  "Ref",
  "RegExp",
  "String",
  "Symbol",
  "TemplateLiteral",
  "This",
  "Tuple",
  "Undefined",
  "Union",
  "Uint8Array",
  "Unknown",
  "Void"
];
function IsPattern(value) {
  try {
    new RegExp(value);
    return true;
  } catch {
    return false;
  }
}
function IsControlCharacterFree(value) {
  if (!IsString2(value))
    return false;
  for (let i15 = 0; i15 < value.length; i15++) {
    const code = value.charCodeAt(i15);
    if (code >= 7 && code <= 13 || code === 27 || code === 127) {
      return false;
    }
  }
  return true;
}
function IsAdditionalProperties(value) {
  return IsOptionalBoolean(value) || IsSchema2(value);
}
function IsOptionalBigInt(value) {
  return IsUndefined2(value) || IsBigInt2(value);
}
function IsOptionalNumber(value) {
  return IsUndefined2(value) || IsNumber2(value);
}
function IsOptionalBoolean(value) {
  return IsUndefined2(value) || IsBoolean2(value);
}
function IsOptionalString(value) {
  return IsUndefined2(value) || IsString2(value);
}
function IsOptionalPattern(value) {
  return IsUndefined2(value) || IsString2(value) && IsControlCharacterFree(value) && IsPattern(value);
}
function IsOptionalFormat(value) {
  return IsUndefined2(value) || IsString2(value) && IsControlCharacterFree(value);
}
function IsOptionalSchema(value) {
  return IsUndefined2(value) || IsSchema2(value);
}
function IsReadonly2(value) {
  return IsObject2(value) && value[ReadonlyKind] === "Readonly";
}
function IsOptional2(value) {
  return IsObject2(value) && value[OptionalKind] === "Optional";
}
function IsAny2(value) {
  return IsKindOf2(value, "Any") && IsOptionalString(value.$id);
}
function IsArgument2(value) {
  return IsKindOf2(value, "Argument") && IsNumber2(value.index);
}
function IsArray4(value) {
  return IsKindOf2(value, "Array") && value.type === "array" && IsOptionalString(value.$id) && IsSchema2(value.items) && IsOptionalNumber(value.minItems) && IsOptionalNumber(value.maxItems) && IsOptionalBoolean(value.uniqueItems) && IsOptionalSchema(value.contains) && IsOptionalNumber(value.minContains) && IsOptionalNumber(value.maxContains);
}
function IsAsyncIterator4(value) {
  return IsKindOf2(value, "AsyncIterator") && value.type === "AsyncIterator" && IsOptionalString(value.$id) && IsSchema2(value.items);
}
function IsBigInt4(value) {
  return IsKindOf2(value, "BigInt") && value.type === "bigint" && IsOptionalString(value.$id) && IsOptionalBigInt(value.exclusiveMaximum) && IsOptionalBigInt(value.exclusiveMinimum) && IsOptionalBigInt(value.maximum) && IsOptionalBigInt(value.minimum) && IsOptionalBigInt(value.multipleOf);
}
function IsBoolean4(value) {
  return IsKindOf2(value, "Boolean") && value.type === "boolean" && IsOptionalString(value.$id);
}
function IsComputed2(value) {
  return IsKindOf2(value, "Computed") && IsString2(value.target) && IsArray2(value.parameters) && value.parameters.every((schema) => IsSchema2(schema));
}
function IsConstructor2(value) {
  return IsKindOf2(value, "Constructor") && value.type === "Constructor" && IsOptionalString(value.$id) && IsArray2(value.parameters) && value.parameters.every((schema) => IsSchema2(schema)) && IsSchema2(value.returns);
}
function IsDate4(value) {
  return IsKindOf2(value, "Date") && value.type === "Date" && IsOptionalString(value.$id) && IsOptionalNumber(value.exclusiveMaximumTimestamp) && IsOptionalNumber(value.exclusiveMinimumTimestamp) && IsOptionalNumber(value.maximumTimestamp) && IsOptionalNumber(value.minimumTimestamp) && IsOptionalNumber(value.multipleOfTimestamp);
}
function IsFunction4(value) {
  return IsKindOf2(value, "Function") && value.type === "Function" && IsOptionalString(value.$id) && IsArray2(value.parameters) && value.parameters.every((schema) => IsSchema2(schema)) && IsSchema2(value.returns);
}
function IsImport2(value) {
  return IsKindOf2(value, "Import") && HasPropertyKey2(value, "$defs") && IsObject2(value.$defs) && IsProperties2(value.$defs) && HasPropertyKey2(value, "$ref") && IsString2(value.$ref) && value.$ref in value.$defs;
}
function IsInteger3(value) {
  return IsKindOf2(value, "Integer") && value.type === "integer" && IsOptionalString(value.$id) && IsOptionalNumber(value.exclusiveMaximum) && IsOptionalNumber(value.exclusiveMinimum) && IsOptionalNumber(value.maximum) && IsOptionalNumber(value.minimum) && IsOptionalNumber(value.multipleOf);
}
function IsProperties2(value) {
  return IsObject2(value) && Object.entries(value).every(([key, schema]) => IsControlCharacterFree(key) && IsSchema2(schema));
}
function IsIntersect2(value) {
  return IsKindOf2(value, "Intersect") && (IsString2(value.type) && value.type !== "object" ? false : true) && IsArray2(value.allOf) && value.allOf.every((schema) => IsSchema2(schema) && !IsTransform2(schema)) && IsOptionalString(value.type) && (IsOptionalBoolean(value.unevaluatedProperties) || IsOptionalSchema(value.unevaluatedProperties)) && IsOptionalString(value.$id);
}
function IsIterator4(value) {
  return IsKindOf2(value, "Iterator") && value.type === "Iterator" && IsOptionalString(value.$id) && IsSchema2(value.items);
}
function IsKindOf2(value, kind) {
  return IsObject2(value) && Kind in value && value[Kind] === kind;
}
function IsLiteralString2(value) {
  return IsLiteral2(value) && IsString2(value.const);
}
function IsLiteralNumber2(value) {
  return IsLiteral2(value) && IsNumber2(value.const);
}
function IsLiteralBoolean2(value) {
  return IsLiteral2(value) && IsBoolean2(value.const);
}
function IsLiteral2(value) {
  return IsKindOf2(value, "Literal") && IsOptionalString(value.$id) && IsLiteralValue2(value.const);
}
function IsLiteralValue2(value) {
  return IsBoolean2(value) || IsNumber2(value) || IsString2(value);
}
function IsMappedKey2(value) {
  return IsKindOf2(value, "MappedKey") && IsArray2(value.keys) && value.keys.every((key) => IsNumber2(key) || IsString2(key));
}
function IsMappedResult2(value) {
  return IsKindOf2(value, "MappedResult") && IsProperties2(value.properties);
}
function IsNever2(value) {
  return IsKindOf2(value, "Never") && IsObject2(value.not) && Object.getOwnPropertyNames(value.not).length === 0;
}
function IsNot2(value) {
  return IsKindOf2(value, "Not") && IsSchema2(value.not);
}
function IsNull4(value) {
  return IsKindOf2(value, "Null") && value.type === "null" && IsOptionalString(value.$id);
}
function IsNumber4(value) {
  return IsKindOf2(value, "Number") && value.type === "number" && IsOptionalString(value.$id) && IsOptionalNumber(value.exclusiveMaximum) && IsOptionalNumber(value.exclusiveMinimum) && IsOptionalNumber(value.maximum) && IsOptionalNumber(value.minimum) && IsOptionalNumber(value.multipleOf);
}
function IsObject4(value) {
  return IsKindOf2(value, "Object") && value.type === "object" && IsOptionalString(value.$id) && IsProperties2(value.properties) && IsAdditionalProperties(value.additionalProperties) && IsOptionalNumber(value.minProperties) && IsOptionalNumber(value.maxProperties);
}
function IsPromise3(value) {
  return IsKindOf2(value, "Promise") && value.type === "Promise" && IsOptionalString(value.$id) && IsSchema2(value.item);
}
function IsRecord2(value) {
  return IsKindOf2(value, "Record") && value.type === "object" && IsOptionalString(value.$id) && IsAdditionalProperties(value.additionalProperties) && IsObject2(value.patternProperties) && ((schema) => {
    const keys2 = Object.getOwnPropertyNames(schema.patternProperties);
    return keys2.length === 1 && IsPattern(keys2[0]) && IsObject2(schema.patternProperties) && IsSchema2(schema.patternProperties[keys2[0]]);
  })(value);
}
function IsRecursive2(value) {
  return IsObject2(value) && Hint in value && value[Hint] === "Recursive";
}
function IsRef2(value) {
  return IsKindOf2(value, "Ref") && IsOptionalString(value.$id) && IsString2(value.$ref);
}
function IsRegExp3(value) {
  return IsKindOf2(value, "RegExp") && IsOptionalString(value.$id) && IsString2(value.source) && IsString2(value.flags) && IsOptionalNumber(value.maxLength) && IsOptionalNumber(value.minLength);
}
function IsString4(value) {
  return IsKindOf2(value, "String") && value.type === "string" && IsOptionalString(value.$id) && IsOptionalNumber(value.minLength) && IsOptionalNumber(value.maxLength) && IsOptionalPattern(value.pattern) && IsOptionalFormat(value.format);
}
function IsSymbol4(value) {
  return IsKindOf2(value, "Symbol") && value.type === "symbol" && IsOptionalString(value.$id);
}
function IsTemplateLiteral2(value) {
  return IsKindOf2(value, "TemplateLiteral") && value.type === "string" && IsString2(value.pattern) && value.pattern[0] === "^" && value.pattern[value.pattern.length - 1] === "$";
}
function IsThis2(value) {
  return IsKindOf2(value, "This") && IsOptionalString(value.$id) && IsString2(value.$ref);
}
function IsTransform2(value) {
  return IsObject2(value) && TransformKind in value;
}
function IsTuple2(value) {
  return IsKindOf2(value, "Tuple") && value.type === "array" && IsOptionalString(value.$id) && IsNumber2(value.minItems) && IsNumber2(value.maxItems) && value.minItems === value.maxItems && // empty
  (IsUndefined2(value.items) && IsUndefined2(value.additionalItems) && value.minItems === 0 || IsArray2(value.items) && value.items.every((schema) => IsSchema2(schema)));
}
function IsUndefined4(value) {
  return IsKindOf2(value, "Undefined") && value.type === "undefined" && IsOptionalString(value.$id);
}
function IsUnionLiteral(value) {
  return IsUnion2(value) && value.anyOf.every((schema) => IsLiteralString2(schema) || IsLiteralNumber2(schema));
}
function IsUnion2(value) {
  return IsKindOf2(value, "Union") && IsOptionalString(value.$id) && IsObject2(value) && IsArray2(value.anyOf) && value.anyOf.every((schema) => IsSchema2(schema));
}
function IsUint8Array4(value) {
  return IsKindOf2(value, "Uint8Array") && value.type === "Uint8Array" && IsOptionalString(value.$id) && IsOptionalNumber(value.minByteLength) && IsOptionalNumber(value.maxByteLength);
}
function IsUnknown2(value) {
  return IsKindOf2(value, "Unknown") && IsOptionalString(value.$id);
}
function IsUnsafe2(value) {
  return IsKindOf2(value, "Unsafe");
}
function IsVoid2(value) {
  return IsKindOf2(value, "Void") && value.type === "void" && IsOptionalString(value.$id);
}
function IsKind2(value) {
  return IsObject2(value) && Kind in value && IsString2(value[Kind]) && !KnownTypes.includes(value[Kind]);
}
function IsSchema2(value) {
  return IsObject2(value) && (IsAny2(value) || IsArgument2(value) || IsArray4(value) || IsBoolean4(value) || IsBigInt4(value) || IsAsyncIterator4(value) || IsComputed2(value) || IsConstructor2(value) || IsDate4(value) || IsFunction4(value) || IsInteger3(value) || IsIntersect2(value) || IsIterator4(value) || IsLiteral2(value) || IsMappedKey2(value) || IsMappedResult2(value) || IsNever2(value) || IsNot2(value) || IsNull4(value) || IsNumber4(value) || IsObject4(value) || IsPromise3(value) || IsRecord2(value) || IsRef2(value) || IsRegExp3(value) || IsString4(value) || IsSymbol4(value) || IsTemplateLiteral2(value) || IsThis2(value) || IsTuple2(value) || IsUndefined4(value) || IsUnion2(value) || IsUint8Array4(value) || IsUnknown2(value) || IsUnsafe2(value) || IsVoid2(value) || IsKind2(value));
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/extends/extends-check.mjs
var ExtendsResolverError = class extends TypeBoxError {
};
var ExtendsResult;
(function(ExtendsResult2) {
  ExtendsResult2[ExtendsResult2["Union"] = 0] = "Union";
  ExtendsResult2[ExtendsResult2["True"] = 1] = "True";
  ExtendsResult2[ExtendsResult2["False"] = 2] = "False";
})(ExtendsResult || (ExtendsResult = {}));
function IntoBooleanResult(result) {
  return result === ExtendsResult.False ? result : ExtendsResult.True;
}
function Throw(message) {
  throw new ExtendsResolverError(message);
}
function IsStructuralRight(right) {
  return type_exports2.IsNever(right) || type_exports2.IsIntersect(right) || type_exports2.IsUnion(right) || type_exports2.IsUnknown(right) || type_exports2.IsAny(right);
}
function StructuralRight(left, right) {
  return type_exports2.IsNever(right) ? FromNeverRight(left, right) : type_exports2.IsIntersect(right) ? FromIntersectRight(left, right) : type_exports2.IsUnion(right) ? FromUnionRight(left, right) : type_exports2.IsUnknown(right) ? FromUnknownRight(left, right) : type_exports2.IsAny(right) ? FromAnyRight(left, right) : Throw("StructuralRight");
}
function FromAnyRight(left, right) {
  return ExtendsResult.True;
}
function FromAny(left, right) {
  return type_exports2.IsIntersect(right) ? FromIntersectRight(left, right) : type_exports2.IsUnion(right) && right.anyOf.some((schema) => type_exports2.IsAny(schema) || type_exports2.IsUnknown(schema)) ? ExtendsResult.True : type_exports2.IsUnion(right) ? ExtendsResult.Union : type_exports2.IsUnknown(right) ? ExtendsResult.True : type_exports2.IsAny(right) ? ExtendsResult.True : ExtendsResult.Union;
}
function FromArrayRight(left, right) {
  return type_exports2.IsUnknown(left) ? ExtendsResult.False : type_exports2.IsAny(left) ? ExtendsResult.Union : type_exports2.IsNever(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromArray3(left, right) {
  return type_exports2.IsObject(right) && IsObjectArrayLike(right) ? ExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : !type_exports2.IsArray(right) ? ExtendsResult.False : IntoBooleanResult(Visit4(left.items, right.items));
}
function FromAsyncIterator(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : !type_exports2.IsAsyncIterator(right) ? ExtendsResult.False : IntoBooleanResult(Visit4(left.items, right.items));
}
function FromBigInt(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports2.IsObject(right) ? FromObjectRight(left, right) : type_exports2.IsRecord(right) ? FromRecordRight(left, right) : type_exports2.IsBigInt(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromBooleanRight(left, right) {
  return type_exports2.IsLiteralBoolean(left) ? ExtendsResult.True : type_exports2.IsBoolean(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromBoolean(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports2.IsObject(right) ? FromObjectRight(left, right) : type_exports2.IsRecord(right) ? FromRecordRight(left, right) : type_exports2.IsBoolean(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromConstructor(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports2.IsObject(right) ? FromObjectRight(left, right) : !type_exports2.IsConstructor(right) ? ExtendsResult.False : left.parameters.length > right.parameters.length ? ExtendsResult.False : !left.parameters.every((schema, index) => IntoBooleanResult(Visit4(right.parameters[index], schema)) === ExtendsResult.True) ? ExtendsResult.False : IntoBooleanResult(Visit4(left.returns, right.returns));
}
function FromDate(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports2.IsObject(right) ? FromObjectRight(left, right) : type_exports2.IsRecord(right) ? FromRecordRight(left, right) : type_exports2.IsDate(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromFunction(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports2.IsObject(right) ? FromObjectRight(left, right) : !type_exports2.IsFunction(right) ? ExtendsResult.False : left.parameters.length > right.parameters.length ? ExtendsResult.False : !left.parameters.every((schema, index) => IntoBooleanResult(Visit4(right.parameters[index], schema)) === ExtendsResult.True) ? ExtendsResult.False : IntoBooleanResult(Visit4(left.returns, right.returns));
}
function FromIntegerRight(left, right) {
  return type_exports2.IsLiteral(left) && value_exports.IsNumber(left.const) ? ExtendsResult.True : type_exports2.IsNumber(left) || type_exports2.IsInteger(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromInteger(left, right) {
  return type_exports2.IsInteger(right) || type_exports2.IsNumber(right) ? ExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : type_exports2.IsObject(right) ? FromObjectRight(left, right) : type_exports2.IsRecord(right) ? FromRecordRight(left, right) : ExtendsResult.False;
}
function FromIntersectRight(left, right) {
  return right.allOf.every((schema) => Visit4(left, schema) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
function FromIntersect3(left, right) {
  return left.allOf.some((schema) => Visit4(schema, right) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
function FromIterator(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : !type_exports2.IsIterator(right) ? ExtendsResult.False : IntoBooleanResult(Visit4(left.items, right.items));
}
function FromLiteral2(left, right) {
  return type_exports2.IsLiteral(right) && right.const === left.const ? ExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : type_exports2.IsObject(right) ? FromObjectRight(left, right) : type_exports2.IsRecord(right) ? FromRecordRight(left, right) : type_exports2.IsString(right) ? FromStringRight(left, right) : type_exports2.IsNumber(right) ? FromNumberRight(left, right) : type_exports2.IsInteger(right) ? FromIntegerRight(left, right) : type_exports2.IsBoolean(right) ? FromBooleanRight(left, right) : ExtendsResult.False;
}
function FromNeverRight(left, right) {
  return ExtendsResult.False;
}
function FromNever(left, right) {
  return ExtendsResult.True;
}
function UnwrapTNot(schema) {
  let [current, depth] = [schema, 0];
  while (true) {
    if (!type_exports2.IsNot(current))
      break;
    current = current.not;
    depth += 1;
  }
  return depth % 2 === 0 ? current : Unknown();
}
function FromNot(left, right) {
  return type_exports2.IsNot(left) ? Visit4(UnwrapTNot(left), right) : type_exports2.IsNot(right) ? Visit4(left, UnwrapTNot(right)) : Throw("Invalid fallthrough for Not");
}
function FromNull(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports2.IsObject(right) ? FromObjectRight(left, right) : type_exports2.IsRecord(right) ? FromRecordRight(left, right) : type_exports2.IsNull(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromNumberRight(left, right) {
  return type_exports2.IsLiteralNumber(left) ? ExtendsResult.True : type_exports2.IsNumber(left) || type_exports2.IsInteger(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromNumber(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports2.IsObject(right) ? FromObjectRight(left, right) : type_exports2.IsRecord(right) ? FromRecordRight(left, right) : type_exports2.IsInteger(right) || type_exports2.IsNumber(right) ? ExtendsResult.True : ExtendsResult.False;
}
function IsObjectPropertyCount(schema, count) {
  return Object.getOwnPropertyNames(schema.properties).length === count;
}
function IsObjectStringLike(schema) {
  return IsObjectArrayLike(schema);
}
function IsObjectSymbolLike(schema) {
  return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "description" in schema.properties && type_exports2.IsUnion(schema.properties.description) && schema.properties.description.anyOf.length === 2 && (type_exports2.IsString(schema.properties.description.anyOf[0]) && type_exports2.IsUndefined(schema.properties.description.anyOf[1]) || type_exports2.IsString(schema.properties.description.anyOf[1]) && type_exports2.IsUndefined(schema.properties.description.anyOf[0]));
}
function IsObjectNumberLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
function IsObjectBooleanLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
function IsObjectBigIntLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
function IsObjectDateLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
function IsObjectUint8ArrayLike(schema) {
  return IsObjectArrayLike(schema);
}
function IsObjectFunctionLike(schema) {
  const length = Number2();
  return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "length" in schema.properties && IntoBooleanResult(Visit4(schema.properties["length"], length)) === ExtendsResult.True;
}
function IsObjectConstructorLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
function IsObjectArrayLike(schema) {
  const length = Number2();
  return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "length" in schema.properties && IntoBooleanResult(Visit4(schema.properties["length"], length)) === ExtendsResult.True;
}
function IsObjectPromiseLike(schema) {
  const then = Function2([Any()], Any());
  return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "then" in schema.properties && IntoBooleanResult(Visit4(schema.properties["then"], then)) === ExtendsResult.True;
}
function Property(left, right) {
  return Visit4(left, right) === ExtendsResult.False ? ExtendsResult.False : type_exports2.IsOptional(left) && !type_exports2.IsOptional(right) ? ExtendsResult.False : ExtendsResult.True;
}
function FromObjectRight(left, right) {
  return type_exports2.IsUnknown(left) ? ExtendsResult.False : type_exports2.IsAny(left) ? ExtendsResult.Union : type_exports2.IsNever(left) || type_exports2.IsLiteralString(left) && IsObjectStringLike(right) || type_exports2.IsLiteralNumber(left) && IsObjectNumberLike(right) || type_exports2.IsLiteralBoolean(left) && IsObjectBooleanLike(right) || type_exports2.IsSymbol(left) && IsObjectSymbolLike(right) || type_exports2.IsBigInt(left) && IsObjectBigIntLike(right) || type_exports2.IsString(left) && IsObjectStringLike(right) || type_exports2.IsSymbol(left) && IsObjectSymbolLike(right) || type_exports2.IsNumber(left) && IsObjectNumberLike(right) || type_exports2.IsInteger(left) && IsObjectNumberLike(right) || type_exports2.IsBoolean(left) && IsObjectBooleanLike(right) || type_exports2.IsUint8Array(left) && IsObjectUint8ArrayLike(right) || type_exports2.IsDate(left) && IsObjectDateLike(right) || type_exports2.IsConstructor(left) && IsObjectConstructorLike(right) || type_exports2.IsFunction(left) && IsObjectFunctionLike(right) ? ExtendsResult.True : type_exports2.IsRecord(left) && type_exports2.IsString(RecordKey(left)) ? (() => {
    return right[Hint] === "Record" ? ExtendsResult.True : ExtendsResult.False;
  })() : type_exports2.IsRecord(left) && type_exports2.IsNumber(RecordKey(left)) ? (() => {
    return IsObjectPropertyCount(right, 0) ? ExtendsResult.True : ExtendsResult.False;
  })() : ExtendsResult.False;
}
function FromObject(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports2.IsRecord(right) ? FromRecordRight(left, right) : !type_exports2.IsObject(right) ? ExtendsResult.False : (() => {
    for (const key of Object.getOwnPropertyNames(right.properties)) {
      if (!(key in left.properties) && !type_exports2.IsOptional(right.properties[key])) {
        return ExtendsResult.False;
      }
      if (type_exports2.IsOptional(right.properties[key])) {
        return ExtendsResult.True;
      }
      if (Property(left.properties[key], right.properties[key]) === ExtendsResult.False) {
        return ExtendsResult.False;
      }
    }
    return ExtendsResult.True;
  })();
}
function FromPromise(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports2.IsObject(right) && IsObjectPromiseLike(right) ? ExtendsResult.True : !type_exports2.IsPromise(right) ? ExtendsResult.False : IntoBooleanResult(Visit4(left.item, right.item));
}
function RecordKey(schema) {
  return PatternNumberExact in schema.patternProperties ? Number2() : PatternStringExact in schema.patternProperties ? String2() : Throw("Unknown record key pattern");
}
function RecordValue(schema) {
  return PatternNumberExact in schema.patternProperties ? schema.patternProperties[PatternNumberExact] : PatternStringExact in schema.patternProperties ? schema.patternProperties[PatternStringExact] : Throw("Unable to get record value schema");
}
function FromRecordRight(left, right) {
  const [Key, Value] = [RecordKey(right), RecordValue(right)];
  return type_exports2.IsLiteralString(left) && type_exports2.IsNumber(Key) && IntoBooleanResult(Visit4(left, Value)) === ExtendsResult.True ? ExtendsResult.True : type_exports2.IsUint8Array(left) && type_exports2.IsNumber(Key) ? Visit4(left, Value) : type_exports2.IsString(left) && type_exports2.IsNumber(Key) ? Visit4(left, Value) : type_exports2.IsArray(left) && type_exports2.IsNumber(Key) ? Visit4(left, Value) : type_exports2.IsObject(left) ? (() => {
    for (const key of Object.getOwnPropertyNames(left.properties)) {
      if (Property(Value, left.properties[key]) === ExtendsResult.False) {
        return ExtendsResult.False;
      }
    }
    return ExtendsResult.True;
  })() : ExtendsResult.False;
}
function FromRecord(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports2.IsObject(right) ? FromObjectRight(left, right) : !type_exports2.IsRecord(right) ? ExtendsResult.False : Visit4(RecordValue(left), RecordValue(right));
}
function FromRegExp(left, right) {
  const L6 = type_exports2.IsRegExp(left) ? String2() : left;
  const R8 = type_exports2.IsRegExp(right) ? String2() : right;
  return Visit4(L6, R8);
}
function FromStringRight(left, right) {
  return type_exports2.IsLiteral(left) && value_exports.IsString(left.const) ? ExtendsResult.True : type_exports2.IsString(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromString(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports2.IsObject(right) ? FromObjectRight(left, right) : type_exports2.IsRecord(right) ? FromRecordRight(left, right) : type_exports2.IsString(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromSymbol(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports2.IsObject(right) ? FromObjectRight(left, right) : type_exports2.IsRecord(right) ? FromRecordRight(left, right) : type_exports2.IsSymbol(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromTemplateLiteral2(left, right) {
  return type_exports2.IsTemplateLiteral(left) ? Visit4(TemplateLiteralToUnion(left), right) : type_exports2.IsTemplateLiteral(right) ? Visit4(left, TemplateLiteralToUnion(right)) : Throw("Invalid fallthrough for TemplateLiteral");
}
function IsArrayOfTuple(left, right) {
  return type_exports2.IsArray(right) && left.items !== void 0 && left.items.every((schema) => Visit4(schema, right.items) === ExtendsResult.True);
}
function FromTupleRight(left, right) {
  return type_exports2.IsNever(left) ? ExtendsResult.True : type_exports2.IsUnknown(left) ? ExtendsResult.False : type_exports2.IsAny(left) ? ExtendsResult.Union : ExtendsResult.False;
}
function FromTuple3(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports2.IsObject(right) && IsObjectArrayLike(right) ? ExtendsResult.True : type_exports2.IsArray(right) && IsArrayOfTuple(left, right) ? ExtendsResult.True : !type_exports2.IsTuple(right) ? ExtendsResult.False : value_exports.IsUndefined(left.items) && !value_exports.IsUndefined(right.items) || !value_exports.IsUndefined(left.items) && value_exports.IsUndefined(right.items) ? ExtendsResult.False : value_exports.IsUndefined(left.items) && !value_exports.IsUndefined(right.items) ? ExtendsResult.True : left.items.every((schema, index) => Visit4(schema, right.items[index]) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
function FromUint8Array(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports2.IsObject(right) ? FromObjectRight(left, right) : type_exports2.IsRecord(right) ? FromRecordRight(left, right) : type_exports2.IsUint8Array(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromUndefined(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports2.IsObject(right) ? FromObjectRight(left, right) : type_exports2.IsRecord(right) ? FromRecordRight(left, right) : type_exports2.IsVoid(right) ? FromVoidRight(left, right) : type_exports2.IsUndefined(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromUnionRight(left, right) {
  return right.anyOf.some((schema) => Visit4(left, schema) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
function FromUnion5(left, right) {
  return left.anyOf.every((schema) => Visit4(schema, right) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
function FromUnknownRight(left, right) {
  return ExtendsResult.True;
}
function FromUnknown(left, right) {
  return type_exports2.IsNever(right) ? FromNeverRight(left, right) : type_exports2.IsIntersect(right) ? FromIntersectRight(left, right) : type_exports2.IsUnion(right) ? FromUnionRight(left, right) : type_exports2.IsAny(right) ? FromAnyRight(left, right) : type_exports2.IsString(right) ? FromStringRight(left, right) : type_exports2.IsNumber(right) ? FromNumberRight(left, right) : type_exports2.IsInteger(right) ? FromIntegerRight(left, right) : type_exports2.IsBoolean(right) ? FromBooleanRight(left, right) : type_exports2.IsArray(right) ? FromArrayRight(left, right) : type_exports2.IsTuple(right) ? FromTupleRight(left, right) : type_exports2.IsObject(right) ? FromObjectRight(left, right) : type_exports2.IsUnknown(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromVoidRight(left, right) {
  return type_exports2.IsUndefined(left) ? ExtendsResult.True : type_exports2.IsUndefined(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromVoid(left, right) {
  return type_exports2.IsIntersect(right) ? FromIntersectRight(left, right) : type_exports2.IsUnion(right) ? FromUnionRight(left, right) : type_exports2.IsUnknown(right) ? FromUnknownRight(left, right) : type_exports2.IsAny(right) ? FromAnyRight(left, right) : type_exports2.IsObject(right) ? FromObjectRight(left, right) : type_exports2.IsVoid(right) ? ExtendsResult.True : ExtendsResult.False;
}
function Visit4(left, right) {
  return (
    // resolvable
    type_exports2.IsTemplateLiteral(left) || type_exports2.IsTemplateLiteral(right) ? FromTemplateLiteral2(left, right) : type_exports2.IsRegExp(left) || type_exports2.IsRegExp(right) ? FromRegExp(left, right) : type_exports2.IsNot(left) || type_exports2.IsNot(right) ? FromNot(left, right) : (
      // standard
      type_exports2.IsAny(left) ? FromAny(left, right) : type_exports2.IsArray(left) ? FromArray3(left, right) : type_exports2.IsBigInt(left) ? FromBigInt(left, right) : type_exports2.IsBoolean(left) ? FromBoolean(left, right) : type_exports2.IsAsyncIterator(left) ? FromAsyncIterator(left, right) : type_exports2.IsConstructor(left) ? FromConstructor(left, right) : type_exports2.IsDate(left) ? FromDate(left, right) : type_exports2.IsFunction(left) ? FromFunction(left, right) : type_exports2.IsInteger(left) ? FromInteger(left, right) : type_exports2.IsIntersect(left) ? FromIntersect3(left, right) : type_exports2.IsIterator(left) ? FromIterator(left, right) : type_exports2.IsLiteral(left) ? FromLiteral2(left, right) : type_exports2.IsNever(left) ? FromNever(left, right) : type_exports2.IsNull(left) ? FromNull(left, right) : type_exports2.IsNumber(left) ? FromNumber(left, right) : type_exports2.IsObject(left) ? FromObject(left, right) : type_exports2.IsRecord(left) ? FromRecord(left, right) : type_exports2.IsString(left) ? FromString(left, right) : type_exports2.IsSymbol(left) ? FromSymbol(left, right) : type_exports2.IsTuple(left) ? FromTuple3(left, right) : type_exports2.IsPromise(left) ? FromPromise(left, right) : type_exports2.IsUint8Array(left) ? FromUint8Array(left, right) : type_exports2.IsUndefined(left) ? FromUndefined(left, right) : type_exports2.IsUnion(left) ? FromUnion5(left, right) : type_exports2.IsUnknown(left) ? FromUnknown(left, right) : type_exports2.IsVoid(left) ? FromVoid(left, right) : Throw(`Unknown left type operand '${left[Kind]}'`)
    )
  );
}
function ExtendsCheck(left, right) {
  return Visit4(left, right);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/extends/extends-from-mapped-result.mjs
function FromProperties7(P10, Right, True, False, options) {
  const Acc = {};
  for (const K22 of globalThis.Object.getOwnPropertyNames(P10))
    Acc[K22] = Extends(P10[K22], Right, True, False, Clone(options));
  return Acc;
}
function FromMappedResult6(Left, Right, True, False, options) {
  return FromProperties7(Left.properties, Right, True, False, options);
}
function ExtendsFromMappedResult(Left, Right, True, False, options) {
  const P10 = FromMappedResult6(Left, Right, True, False, options);
  return MappedResult(P10);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/extends/extends.mjs
function ExtendsResolve(left, right, trueType, falseType) {
  const R8 = ExtendsCheck(left, right);
  return R8 === ExtendsResult.Union ? Union([trueType, falseType]) : R8 === ExtendsResult.True ? trueType : falseType;
}
function Extends(L6, R8, T9, F6, options) {
  return IsMappedResult(L6) ? ExtendsFromMappedResult(L6, R8, T9, F6, options) : IsMappedKey(L6) ? CreateType(ExtendsFromMappedKey(L6, R8, T9, F6, options)) : CreateType(ExtendsResolve(L6, R8, T9, F6), options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/extends/extends-from-mapped-key.mjs
function FromPropertyKey(K6, U7, L6, R8, options) {
  return {
    [K6]: Extends(Literal(K6), U7, L6, R8, Clone(options))
  };
}
function FromPropertyKeys(K6, U7, L6, R8, options) {
  return K6.reduce((Acc, LK) => {
    return { ...Acc, ...FromPropertyKey(LK, U7, L6, R8, options) };
  }, {});
}
function FromMappedKey2(K6, U7, L6, R8, options) {
  return FromPropertyKeys(K6.keys, U7, L6, R8, options);
}
function ExtendsFromMappedKey(T9, U7, L6, R8, options) {
  const P10 = FromMappedKey2(T9, U7, L6, R8, options);
  return MappedResult(P10);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/value/check/check.mjs
var ValueCheckUnknownTypeError = class extends TypeBoxError {
  constructor(schema) {
    super(`Unknown type`);
    this.schema = schema;
  }
};
function IsAnyOrUnknown(schema) {
  return schema[Kind] === "Any" || schema[Kind] === "Unknown";
}
function IsDefined(value) {
  return value !== void 0;
}
function FromAny2(schema, references, value) {
  return true;
}
function FromArgument(schema, references, value) {
  return true;
}
function FromArray4(schema, references, value) {
  if (!IsArray(value))
    return false;
  if (IsDefined(schema.minItems) && !(value.length >= schema.minItems)) {
    return false;
  }
  if (IsDefined(schema.maxItems) && !(value.length <= schema.maxItems)) {
    return false;
  }
  if (!value.every((value2) => Visit5(schema.items, references, value2))) {
    return false;
  }
  if (schema.uniqueItems === true && !function() {
    const set2 = /* @__PURE__ */ new Set();
    for (const element of value) {
      const hashed = Hash(element);
      if (set2.has(hashed)) {
        return false;
      } else {
        set2.add(hashed);
      }
    }
    return true;
  }()) {
    return false;
  }
  if (!(IsDefined(schema.contains) || IsNumber(schema.minContains) || IsNumber(schema.maxContains))) {
    return true;
  }
  const containsSchema = IsDefined(schema.contains) ? schema.contains : Never();
  const containsCount = value.reduce((acc, value2) => Visit5(containsSchema, references, value2) ? acc + 1 : acc, 0);
  if (containsCount === 0) {
    return false;
  }
  if (IsNumber(schema.minContains) && containsCount < schema.minContains) {
    return false;
  }
  if (IsNumber(schema.maxContains) && containsCount > schema.maxContains) {
    return false;
  }
  return true;
}
function FromAsyncIterator2(schema, references, value) {
  return IsAsyncIterator(value);
}
function FromBigInt2(schema, references, value) {
  if (!IsBigInt(value))
    return false;
  if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    return false;
  }
  if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    return false;
  }
  if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
    return false;
  }
  if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
    return false;
  }
  if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === BigInt(0))) {
    return false;
  }
  return true;
}
function FromBoolean2(schema, references, value) {
  return IsBoolean(value);
}
function FromConstructor2(schema, references, value) {
  return Visit5(schema.returns, references, value.prototype);
}
function FromDate2(schema, references, value) {
  if (!IsDate(value))
    return false;
  if (IsDefined(schema.exclusiveMaximumTimestamp) && !(value.getTime() < schema.exclusiveMaximumTimestamp)) {
    return false;
  }
  if (IsDefined(schema.exclusiveMinimumTimestamp) && !(value.getTime() > schema.exclusiveMinimumTimestamp)) {
    return false;
  }
  if (IsDefined(schema.maximumTimestamp) && !(value.getTime() <= schema.maximumTimestamp)) {
    return false;
  }
  if (IsDefined(schema.minimumTimestamp) && !(value.getTime() >= schema.minimumTimestamp)) {
    return false;
  }
  if (IsDefined(schema.multipleOfTimestamp) && !(value.getTime() % schema.multipleOfTimestamp === 0)) {
    return false;
  }
  return true;
}
function FromFunction2(schema, references, value) {
  return IsFunction(value);
}
function FromImport(schema, references, value) {
  const definitions = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  return Visit5(target, [...references, ...definitions], value);
}
function FromInteger2(schema, references, value) {
  if (!IsInteger(value)) {
    return false;
  }
  if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    return false;
  }
  if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    return false;
  }
  if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
    return false;
  }
  if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
    return false;
  }
  if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
    return false;
  }
  return true;
}
function FromIntersect4(schema, references, value) {
  const check1 = schema.allOf.every((schema2) => Visit5(schema2, references, value));
  if (schema.unevaluatedProperties === false) {
    const keyPattern = new RegExp(KeyOfPattern(schema));
    const check2 = Object.getOwnPropertyNames(value).every((key) => keyPattern.test(key));
    return check1 && check2;
  } else if (IsSchema(schema.unevaluatedProperties)) {
    const keyCheck = new RegExp(KeyOfPattern(schema));
    const check2 = Object.getOwnPropertyNames(value).every((key) => keyCheck.test(key) || Visit5(schema.unevaluatedProperties, references, value[key]));
    return check1 && check2;
  } else {
    return check1;
  }
}
function FromIterator2(schema, references, value) {
  return IsIterator(value);
}
function FromLiteral3(schema, references, value) {
  return value === schema.const;
}
function FromNever2(schema, references, value) {
  return false;
}
function FromNot2(schema, references, value) {
  return !Visit5(schema.not, references, value);
}
function FromNull2(schema, references, value) {
  return IsNull(value);
}
function FromNumber2(schema, references, value) {
  if (!TypeSystemPolicy.IsNumberLike(value))
    return false;
  if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    return false;
  }
  if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    return false;
  }
  if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
    return false;
  }
  if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
    return false;
  }
  if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
    return false;
  }
  return true;
}
function FromObject2(schema, references, value) {
  if (!TypeSystemPolicy.IsObjectLike(value))
    return false;
  if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
    return false;
  }
  if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
    return false;
  }
  const knownKeys = Object.getOwnPropertyNames(schema.properties);
  for (const knownKey of knownKeys) {
    const property = schema.properties[knownKey];
    if (schema.required && schema.required.includes(knownKey)) {
      if (!Visit5(property, references, value[knownKey])) {
        return false;
      }
      if ((ExtendsUndefinedCheck(property) || IsAnyOrUnknown(property)) && !(knownKey in value)) {
        return false;
      }
    } else {
      if (TypeSystemPolicy.IsExactOptionalProperty(value, knownKey) && !Visit5(property, references, value[knownKey])) {
        return false;
      }
    }
  }
  if (schema.additionalProperties === false) {
    const valueKeys = Object.getOwnPropertyNames(value);
    if (schema.required && schema.required.length === knownKeys.length && valueKeys.length === knownKeys.length) {
      return true;
    } else {
      return valueKeys.every((valueKey) => knownKeys.includes(valueKey));
    }
  } else if (typeof schema.additionalProperties === "object") {
    const valueKeys = Object.getOwnPropertyNames(value);
    return valueKeys.every((key) => knownKeys.includes(key) || Visit5(schema.additionalProperties, references, value[key]));
  } else {
    return true;
  }
}
function FromPromise2(schema, references, value) {
  return IsPromise(value);
}
function FromRecord2(schema, references, value) {
  if (!TypeSystemPolicy.IsRecordLike(value)) {
    return false;
  }
  if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
    return false;
  }
  if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
    return false;
  }
  const [patternKey, patternSchema] = Object.entries(schema.patternProperties)[0];
  const regex2 = new RegExp(patternKey);
  const check1 = Object.entries(value).every(([key, value2]) => {
    return regex2.test(key) ? Visit5(patternSchema, references, value2) : true;
  });
  const check2 = typeof schema.additionalProperties === "object" ? Object.entries(value).every(([key, value2]) => {
    return !regex2.test(key) ? Visit5(schema.additionalProperties, references, value2) : true;
  }) : true;
  const check3 = schema.additionalProperties === false ? Object.getOwnPropertyNames(value).every((key) => {
    return regex2.test(key);
  }) : true;
  return check1 && check2 && check3;
}
function FromRef2(schema, references, value) {
  return Visit5(Deref(schema, references), references, value);
}
function FromRegExp2(schema, references, value) {
  const regex2 = new RegExp(schema.source, schema.flags);
  if (IsDefined(schema.minLength)) {
    if (!(value.length >= schema.minLength))
      return false;
  }
  if (IsDefined(schema.maxLength)) {
    if (!(value.length <= schema.maxLength))
      return false;
  }
  return regex2.test(value);
}
function FromString2(schema, references, value) {
  if (!IsString(value)) {
    return false;
  }
  if (IsDefined(schema.minLength)) {
    if (!(value.length >= schema.minLength))
      return false;
  }
  if (IsDefined(schema.maxLength)) {
    if (!(value.length <= schema.maxLength))
      return false;
  }
  if (IsDefined(schema.pattern)) {
    const regex2 = new RegExp(schema.pattern);
    if (!regex2.test(value))
      return false;
  }
  if (IsDefined(schema.format)) {
    if (!format_exports.Has(schema.format))
      return false;
    const func = format_exports.Get(schema.format);
    return func(value);
  }
  return true;
}
function FromSymbol2(schema, references, value) {
  return IsSymbol(value);
}
function FromTemplateLiteral3(schema, references, value) {
  return IsString(value) && new RegExp(schema.pattern).test(value);
}
function FromThis(schema, references, value) {
  return Visit5(Deref(schema, references), references, value);
}
function FromTuple4(schema, references, value) {
  if (!IsArray(value)) {
    return false;
  }
  if (schema.items === void 0 && !(value.length === 0)) {
    return false;
  }
  if (!(value.length === schema.maxItems)) {
    return false;
  }
  if (!schema.items) {
    return true;
  }
  for (let i15 = 0; i15 < schema.items.length; i15++) {
    if (!Visit5(schema.items[i15], references, value[i15]))
      return false;
  }
  return true;
}
function FromUndefined2(schema, references, value) {
  return IsUndefined(value);
}
function FromUnion6(schema, references, value) {
  return schema.anyOf.some((inner) => Visit5(inner, references, value));
}
function FromUint8Array2(schema, references, value) {
  if (!IsUint8Array(value)) {
    return false;
  }
  if (IsDefined(schema.maxByteLength) && !(value.length <= schema.maxByteLength)) {
    return false;
  }
  if (IsDefined(schema.minByteLength) && !(value.length >= schema.minByteLength)) {
    return false;
  }
  return true;
}
function FromUnknown2(schema, references, value) {
  return true;
}
function FromVoid2(schema, references, value) {
  return TypeSystemPolicy.IsVoidLike(value);
}
function FromKind(schema, references, value) {
  if (!type_exports.Has(schema[Kind]))
    return false;
  const func = type_exports.Get(schema[Kind]);
  return func(schema, value);
}
function Visit5(schema, references, value) {
  const references_ = IsDefined(schema.$id) ? Pushref(schema, references) : references;
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Any":
      return FromAny2(schema_, references_, value);
    case "Argument":
      return FromArgument(schema_, references_, value);
    case "Array":
      return FromArray4(schema_, references_, value);
    case "AsyncIterator":
      return FromAsyncIterator2(schema_, references_, value);
    case "BigInt":
      return FromBigInt2(schema_, references_, value);
    case "Boolean":
      return FromBoolean2(schema_, references_, value);
    case "Constructor":
      return FromConstructor2(schema_, references_, value);
    case "Date":
      return FromDate2(schema_, references_, value);
    case "Function":
      return FromFunction2(schema_, references_, value);
    case "Import":
      return FromImport(schema_, references_, value);
    case "Integer":
      return FromInteger2(schema_, references_, value);
    case "Intersect":
      return FromIntersect4(schema_, references_, value);
    case "Iterator":
      return FromIterator2(schema_, references_, value);
    case "Literal":
      return FromLiteral3(schema_, references_, value);
    case "Never":
      return FromNever2(schema_, references_, value);
    case "Not":
      return FromNot2(schema_, references_, value);
    case "Null":
      return FromNull2(schema_, references_, value);
    case "Number":
      return FromNumber2(schema_, references_, value);
    case "Object":
      return FromObject2(schema_, references_, value);
    case "Promise":
      return FromPromise2(schema_, references_, value);
    case "Record":
      return FromRecord2(schema_, references_, value);
    case "Ref":
      return FromRef2(schema_, references_, value);
    case "RegExp":
      return FromRegExp2(schema_, references_, value);
    case "String":
      return FromString2(schema_, references_, value);
    case "Symbol":
      return FromSymbol2(schema_, references_, value);
    case "TemplateLiteral":
      return FromTemplateLiteral3(schema_, references_, value);
    case "This":
      return FromThis(schema_, references_, value);
    case "Tuple":
      return FromTuple4(schema_, references_, value);
    case "Undefined":
      return FromUndefined2(schema_, references_, value);
    case "Union":
      return FromUnion6(schema_, references_, value);
    case "Uint8Array":
      return FromUint8Array2(schema_, references_, value);
    case "Unknown":
      return FromUnknown2(schema_, references_, value);
    case "Void":
      return FromVoid2(schema_, references_, value);
    default:
      if (!type_exports.Has(schema_[Kind]))
        throw new ValueCheckUnknownTypeError(schema_);
      return FromKind(schema_, references_, value);
  }
}
function Check(...args) {
  return args.length === 3 ? Visit5(args[0], args[1], args[2]) : Visit5(args[0], [], args[1]);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/errors/errors.mjs
var ValueErrorType;
(function(ValueErrorType2) {
  ValueErrorType2[ValueErrorType2["ArrayContains"] = 0] = "ArrayContains";
  ValueErrorType2[ValueErrorType2["ArrayMaxContains"] = 1] = "ArrayMaxContains";
  ValueErrorType2[ValueErrorType2["ArrayMaxItems"] = 2] = "ArrayMaxItems";
  ValueErrorType2[ValueErrorType2["ArrayMinContains"] = 3] = "ArrayMinContains";
  ValueErrorType2[ValueErrorType2["ArrayMinItems"] = 4] = "ArrayMinItems";
  ValueErrorType2[ValueErrorType2["ArrayUniqueItems"] = 5] = "ArrayUniqueItems";
  ValueErrorType2[ValueErrorType2["Array"] = 6] = "Array";
  ValueErrorType2[ValueErrorType2["AsyncIterator"] = 7] = "AsyncIterator";
  ValueErrorType2[ValueErrorType2["BigIntExclusiveMaximum"] = 8] = "BigIntExclusiveMaximum";
  ValueErrorType2[ValueErrorType2["BigIntExclusiveMinimum"] = 9] = "BigIntExclusiveMinimum";
  ValueErrorType2[ValueErrorType2["BigIntMaximum"] = 10] = "BigIntMaximum";
  ValueErrorType2[ValueErrorType2["BigIntMinimum"] = 11] = "BigIntMinimum";
  ValueErrorType2[ValueErrorType2["BigIntMultipleOf"] = 12] = "BigIntMultipleOf";
  ValueErrorType2[ValueErrorType2["BigInt"] = 13] = "BigInt";
  ValueErrorType2[ValueErrorType2["Boolean"] = 14] = "Boolean";
  ValueErrorType2[ValueErrorType2["DateExclusiveMaximumTimestamp"] = 15] = "DateExclusiveMaximumTimestamp";
  ValueErrorType2[ValueErrorType2["DateExclusiveMinimumTimestamp"] = 16] = "DateExclusiveMinimumTimestamp";
  ValueErrorType2[ValueErrorType2["DateMaximumTimestamp"] = 17] = "DateMaximumTimestamp";
  ValueErrorType2[ValueErrorType2["DateMinimumTimestamp"] = 18] = "DateMinimumTimestamp";
  ValueErrorType2[ValueErrorType2["DateMultipleOfTimestamp"] = 19] = "DateMultipleOfTimestamp";
  ValueErrorType2[ValueErrorType2["Date"] = 20] = "Date";
  ValueErrorType2[ValueErrorType2["Function"] = 21] = "Function";
  ValueErrorType2[ValueErrorType2["IntegerExclusiveMaximum"] = 22] = "IntegerExclusiveMaximum";
  ValueErrorType2[ValueErrorType2["IntegerExclusiveMinimum"] = 23] = "IntegerExclusiveMinimum";
  ValueErrorType2[ValueErrorType2["IntegerMaximum"] = 24] = "IntegerMaximum";
  ValueErrorType2[ValueErrorType2["IntegerMinimum"] = 25] = "IntegerMinimum";
  ValueErrorType2[ValueErrorType2["IntegerMultipleOf"] = 26] = "IntegerMultipleOf";
  ValueErrorType2[ValueErrorType2["Integer"] = 27] = "Integer";
  ValueErrorType2[ValueErrorType2["IntersectUnevaluatedProperties"] = 28] = "IntersectUnevaluatedProperties";
  ValueErrorType2[ValueErrorType2["Intersect"] = 29] = "Intersect";
  ValueErrorType2[ValueErrorType2["Iterator"] = 30] = "Iterator";
  ValueErrorType2[ValueErrorType2["Kind"] = 31] = "Kind";
  ValueErrorType2[ValueErrorType2["Literal"] = 32] = "Literal";
  ValueErrorType2[ValueErrorType2["Never"] = 33] = "Never";
  ValueErrorType2[ValueErrorType2["Not"] = 34] = "Not";
  ValueErrorType2[ValueErrorType2["Null"] = 35] = "Null";
  ValueErrorType2[ValueErrorType2["NumberExclusiveMaximum"] = 36] = "NumberExclusiveMaximum";
  ValueErrorType2[ValueErrorType2["NumberExclusiveMinimum"] = 37] = "NumberExclusiveMinimum";
  ValueErrorType2[ValueErrorType2["NumberMaximum"] = 38] = "NumberMaximum";
  ValueErrorType2[ValueErrorType2["NumberMinimum"] = 39] = "NumberMinimum";
  ValueErrorType2[ValueErrorType2["NumberMultipleOf"] = 40] = "NumberMultipleOf";
  ValueErrorType2[ValueErrorType2["Number"] = 41] = "Number";
  ValueErrorType2[ValueErrorType2["ObjectAdditionalProperties"] = 42] = "ObjectAdditionalProperties";
  ValueErrorType2[ValueErrorType2["ObjectMaxProperties"] = 43] = "ObjectMaxProperties";
  ValueErrorType2[ValueErrorType2["ObjectMinProperties"] = 44] = "ObjectMinProperties";
  ValueErrorType2[ValueErrorType2["ObjectRequiredProperty"] = 45] = "ObjectRequiredProperty";
  ValueErrorType2[ValueErrorType2["Object"] = 46] = "Object";
  ValueErrorType2[ValueErrorType2["Promise"] = 47] = "Promise";
  ValueErrorType2[ValueErrorType2["RegExp"] = 48] = "RegExp";
  ValueErrorType2[ValueErrorType2["StringFormatUnknown"] = 49] = "StringFormatUnknown";
  ValueErrorType2[ValueErrorType2["StringFormat"] = 50] = "StringFormat";
  ValueErrorType2[ValueErrorType2["StringMaxLength"] = 51] = "StringMaxLength";
  ValueErrorType2[ValueErrorType2["StringMinLength"] = 52] = "StringMinLength";
  ValueErrorType2[ValueErrorType2["StringPattern"] = 53] = "StringPattern";
  ValueErrorType2[ValueErrorType2["String"] = 54] = "String";
  ValueErrorType2[ValueErrorType2["Symbol"] = 55] = "Symbol";
  ValueErrorType2[ValueErrorType2["TupleLength"] = 56] = "TupleLength";
  ValueErrorType2[ValueErrorType2["Tuple"] = 57] = "Tuple";
  ValueErrorType2[ValueErrorType2["Uint8ArrayMaxByteLength"] = 58] = "Uint8ArrayMaxByteLength";
  ValueErrorType2[ValueErrorType2["Uint8ArrayMinByteLength"] = 59] = "Uint8ArrayMinByteLength";
  ValueErrorType2[ValueErrorType2["Uint8Array"] = 60] = "Uint8Array";
  ValueErrorType2[ValueErrorType2["Undefined"] = 61] = "Undefined";
  ValueErrorType2[ValueErrorType2["Union"] = 62] = "Union";
  ValueErrorType2[ValueErrorType2["Void"] = 63] = "Void";
})(ValueErrorType || (ValueErrorType = {}));
var ValueErrorsUnknownTypeError = class extends TypeBoxError {
  constructor(schema) {
    super("Unknown type");
    this.schema = schema;
  }
};
function EscapeKey(key) {
  return key.replace(/~/g, "~0").replace(/\//g, "~1");
}
function IsDefined2(value) {
  return value !== void 0;
}
var ValueErrorIterator = class {
  constructor(iterator) {
    this.iterator = iterator;
  }
  [Symbol.iterator]() {
    return this.iterator;
  }
  /** Returns the first value error or undefined if no errors */
  First() {
    const next = this.iterator.next();
    return next.done ? void 0 : next.value;
  }
};
function Create(errorType, schema, path, value, errors = []) {
  return {
    type: errorType,
    schema,
    path,
    value,
    message: GetErrorFunction()({ errorType, path, schema, value, errors }),
    errors
  };
}
function* FromAny3(schema, references, path, value) {
}
function* FromArgument2(schema, references, path, value) {
}
function* FromArray5(schema, references, path, value) {
  if (!IsArray(value)) {
    return yield Create(ValueErrorType.Array, schema, path, value);
  }
  if (IsDefined2(schema.minItems) && !(value.length >= schema.minItems)) {
    yield Create(ValueErrorType.ArrayMinItems, schema, path, value);
  }
  if (IsDefined2(schema.maxItems) && !(value.length <= schema.maxItems)) {
    yield Create(ValueErrorType.ArrayMaxItems, schema, path, value);
  }
  for (let i15 = 0; i15 < value.length; i15++) {
    yield* Visit6(schema.items, references, `${path}/${i15}`, value[i15]);
  }
  if (schema.uniqueItems === true && !function() {
    const set2 = /* @__PURE__ */ new Set();
    for (const element of value) {
      const hashed = Hash(element);
      if (set2.has(hashed)) {
        return false;
      } else {
        set2.add(hashed);
      }
    }
    return true;
  }()) {
    yield Create(ValueErrorType.ArrayUniqueItems, schema, path, value);
  }
  if (!(IsDefined2(schema.contains) || IsDefined2(schema.minContains) || IsDefined2(schema.maxContains))) {
    return;
  }
  const containsSchema = IsDefined2(schema.contains) ? schema.contains : Never();
  const containsCount = value.reduce((acc, value2, index) => Visit6(containsSchema, references, `${path}${index}`, value2).next().done === true ? acc + 1 : acc, 0);
  if (containsCount === 0) {
    yield Create(ValueErrorType.ArrayContains, schema, path, value);
  }
  if (IsNumber(schema.minContains) && containsCount < schema.minContains) {
    yield Create(ValueErrorType.ArrayMinContains, schema, path, value);
  }
  if (IsNumber(schema.maxContains) && containsCount > schema.maxContains) {
    yield Create(ValueErrorType.ArrayMaxContains, schema, path, value);
  }
}
function* FromAsyncIterator3(schema, references, path, value) {
  if (!IsAsyncIterator(value))
    yield Create(ValueErrorType.AsyncIterator, schema, path, value);
}
function* FromBigInt3(schema, references, path, value) {
  if (!IsBigInt(value))
    return yield Create(ValueErrorType.BigInt, schema, path, value);
  if (IsDefined2(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    yield Create(ValueErrorType.BigIntExclusiveMaximum, schema, path, value);
  }
  if (IsDefined2(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    yield Create(ValueErrorType.BigIntExclusiveMinimum, schema, path, value);
  }
  if (IsDefined2(schema.maximum) && !(value <= schema.maximum)) {
    yield Create(ValueErrorType.BigIntMaximum, schema, path, value);
  }
  if (IsDefined2(schema.minimum) && !(value >= schema.minimum)) {
    yield Create(ValueErrorType.BigIntMinimum, schema, path, value);
  }
  if (IsDefined2(schema.multipleOf) && !(value % schema.multipleOf === BigInt(0))) {
    yield Create(ValueErrorType.BigIntMultipleOf, schema, path, value);
  }
}
function* FromBoolean3(schema, references, path, value) {
  if (!IsBoolean(value))
    yield Create(ValueErrorType.Boolean, schema, path, value);
}
function* FromConstructor3(schema, references, path, value) {
  yield* Visit6(schema.returns, references, path, value.prototype);
}
function* FromDate3(schema, references, path, value) {
  if (!IsDate(value))
    return yield Create(ValueErrorType.Date, schema, path, value);
  if (IsDefined2(schema.exclusiveMaximumTimestamp) && !(value.getTime() < schema.exclusiveMaximumTimestamp)) {
    yield Create(ValueErrorType.DateExclusiveMaximumTimestamp, schema, path, value);
  }
  if (IsDefined2(schema.exclusiveMinimumTimestamp) && !(value.getTime() > schema.exclusiveMinimumTimestamp)) {
    yield Create(ValueErrorType.DateExclusiveMinimumTimestamp, schema, path, value);
  }
  if (IsDefined2(schema.maximumTimestamp) && !(value.getTime() <= schema.maximumTimestamp)) {
    yield Create(ValueErrorType.DateMaximumTimestamp, schema, path, value);
  }
  if (IsDefined2(schema.minimumTimestamp) && !(value.getTime() >= schema.minimumTimestamp)) {
    yield Create(ValueErrorType.DateMinimumTimestamp, schema, path, value);
  }
  if (IsDefined2(schema.multipleOfTimestamp) && !(value.getTime() % schema.multipleOfTimestamp === 0)) {
    yield Create(ValueErrorType.DateMultipleOfTimestamp, schema, path, value);
  }
}
function* FromFunction3(schema, references, path, value) {
  if (!IsFunction(value))
    yield Create(ValueErrorType.Function, schema, path, value);
}
function* FromImport2(schema, references, path, value) {
  const definitions = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  yield* Visit6(target, [...references, ...definitions], path, value);
}
function* FromInteger3(schema, references, path, value) {
  if (!IsInteger(value))
    return yield Create(ValueErrorType.Integer, schema, path, value);
  if (IsDefined2(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    yield Create(ValueErrorType.IntegerExclusiveMaximum, schema, path, value);
  }
  if (IsDefined2(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    yield Create(ValueErrorType.IntegerExclusiveMinimum, schema, path, value);
  }
  if (IsDefined2(schema.maximum) && !(value <= schema.maximum)) {
    yield Create(ValueErrorType.IntegerMaximum, schema, path, value);
  }
  if (IsDefined2(schema.minimum) && !(value >= schema.minimum)) {
    yield Create(ValueErrorType.IntegerMinimum, schema, path, value);
  }
  if (IsDefined2(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
    yield Create(ValueErrorType.IntegerMultipleOf, schema, path, value);
  }
}
function* FromIntersect5(schema, references, path, value) {
  let hasError = false;
  for (const inner of schema.allOf) {
    for (const error of Visit6(inner, references, path, value)) {
      hasError = true;
      yield error;
    }
  }
  if (hasError) {
    return yield Create(ValueErrorType.Intersect, schema, path, value);
  }
  if (schema.unevaluatedProperties === false) {
    const keyCheck = new RegExp(KeyOfPattern(schema));
    for (const valueKey of Object.getOwnPropertyNames(value)) {
      if (!keyCheck.test(valueKey)) {
        yield Create(ValueErrorType.IntersectUnevaluatedProperties, schema, `${path}/${valueKey}`, value);
      }
    }
  }
  if (typeof schema.unevaluatedProperties === "object") {
    const keyCheck = new RegExp(KeyOfPattern(schema));
    for (const valueKey of Object.getOwnPropertyNames(value)) {
      if (!keyCheck.test(valueKey)) {
        const next = Visit6(schema.unevaluatedProperties, references, `${path}/${valueKey}`, value[valueKey]).next();
        if (!next.done)
          yield next.value;
      }
    }
  }
}
function* FromIterator3(schema, references, path, value) {
  if (!IsIterator(value))
    yield Create(ValueErrorType.Iterator, schema, path, value);
}
function* FromLiteral4(schema, references, path, value) {
  if (!(value === schema.const))
    yield Create(ValueErrorType.Literal, schema, path, value);
}
function* FromNever3(schema, references, path, value) {
  yield Create(ValueErrorType.Never, schema, path, value);
}
function* FromNot3(schema, references, path, value) {
  if (Visit6(schema.not, references, path, value).next().done === true)
    yield Create(ValueErrorType.Not, schema, path, value);
}
function* FromNull3(schema, references, path, value) {
  if (!IsNull(value))
    yield Create(ValueErrorType.Null, schema, path, value);
}
function* FromNumber3(schema, references, path, value) {
  if (!TypeSystemPolicy.IsNumberLike(value))
    return yield Create(ValueErrorType.Number, schema, path, value);
  if (IsDefined2(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    yield Create(ValueErrorType.NumberExclusiveMaximum, schema, path, value);
  }
  if (IsDefined2(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    yield Create(ValueErrorType.NumberExclusiveMinimum, schema, path, value);
  }
  if (IsDefined2(schema.maximum) && !(value <= schema.maximum)) {
    yield Create(ValueErrorType.NumberMaximum, schema, path, value);
  }
  if (IsDefined2(schema.minimum) && !(value >= schema.minimum)) {
    yield Create(ValueErrorType.NumberMinimum, schema, path, value);
  }
  if (IsDefined2(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
    yield Create(ValueErrorType.NumberMultipleOf, schema, path, value);
  }
}
function* FromObject3(schema, references, path, value) {
  if (!TypeSystemPolicy.IsObjectLike(value))
    return yield Create(ValueErrorType.Object, schema, path, value);
  if (IsDefined2(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
    yield Create(ValueErrorType.ObjectMinProperties, schema, path, value);
  }
  if (IsDefined2(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
    yield Create(ValueErrorType.ObjectMaxProperties, schema, path, value);
  }
  const requiredKeys = Array.isArray(schema.required) ? schema.required : [];
  const knownKeys = Object.getOwnPropertyNames(schema.properties);
  const unknownKeys = Object.getOwnPropertyNames(value);
  for (const requiredKey of requiredKeys) {
    if (unknownKeys.includes(requiredKey))
      continue;
    yield Create(ValueErrorType.ObjectRequiredProperty, schema.properties[requiredKey], `${path}/${EscapeKey(requiredKey)}`, void 0);
  }
  if (schema.additionalProperties === false) {
    for (const valueKey of unknownKeys) {
      if (!knownKeys.includes(valueKey)) {
        yield Create(ValueErrorType.ObjectAdditionalProperties, schema, `${path}/${EscapeKey(valueKey)}`, value[valueKey]);
      }
    }
  }
  if (typeof schema.additionalProperties === "object") {
    for (const valueKey of unknownKeys) {
      if (knownKeys.includes(valueKey))
        continue;
      yield* Visit6(schema.additionalProperties, references, `${path}/${EscapeKey(valueKey)}`, value[valueKey]);
    }
  }
  for (const knownKey of knownKeys) {
    const property = schema.properties[knownKey];
    if (schema.required && schema.required.includes(knownKey)) {
      yield* Visit6(property, references, `${path}/${EscapeKey(knownKey)}`, value[knownKey]);
      if (ExtendsUndefinedCheck(schema) && !(knownKey in value)) {
        yield Create(ValueErrorType.ObjectRequiredProperty, property, `${path}/${EscapeKey(knownKey)}`, void 0);
      }
    } else {
      if (TypeSystemPolicy.IsExactOptionalProperty(value, knownKey)) {
        yield* Visit6(property, references, `${path}/${EscapeKey(knownKey)}`, value[knownKey]);
      }
    }
  }
}
function* FromPromise3(schema, references, path, value) {
  if (!IsPromise(value))
    yield Create(ValueErrorType.Promise, schema, path, value);
}
function* FromRecord3(schema, references, path, value) {
  if (!TypeSystemPolicy.IsRecordLike(value))
    return yield Create(ValueErrorType.Object, schema, path, value);
  if (IsDefined2(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
    yield Create(ValueErrorType.ObjectMinProperties, schema, path, value);
  }
  if (IsDefined2(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
    yield Create(ValueErrorType.ObjectMaxProperties, schema, path, value);
  }
  const [patternKey, patternSchema] = Object.entries(schema.patternProperties)[0];
  const regex2 = new RegExp(patternKey);
  for (const [propertyKey, propertyValue] of Object.entries(value)) {
    if (regex2.test(propertyKey))
      yield* Visit6(patternSchema, references, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
  }
  if (typeof schema.additionalProperties === "object") {
    for (const [propertyKey, propertyValue] of Object.entries(value)) {
      if (!regex2.test(propertyKey))
        yield* Visit6(schema.additionalProperties, references, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
    }
  }
  if (schema.additionalProperties === false) {
    for (const [propertyKey, propertyValue] of Object.entries(value)) {
      if (regex2.test(propertyKey))
        continue;
      return yield Create(ValueErrorType.ObjectAdditionalProperties, schema, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
    }
  }
}
function* FromRef3(schema, references, path, value) {
  yield* Visit6(Deref(schema, references), references, path, value);
}
function* FromRegExp3(schema, references, path, value) {
  if (!IsString(value))
    return yield Create(ValueErrorType.String, schema, path, value);
  if (IsDefined2(schema.minLength) && !(value.length >= schema.minLength)) {
    yield Create(ValueErrorType.StringMinLength, schema, path, value);
  }
  if (IsDefined2(schema.maxLength) && !(value.length <= schema.maxLength)) {
    yield Create(ValueErrorType.StringMaxLength, schema, path, value);
  }
  const regex2 = new RegExp(schema.source, schema.flags);
  if (!regex2.test(value)) {
    return yield Create(ValueErrorType.RegExp, schema, path, value);
  }
}
function* FromString3(schema, references, path, value) {
  if (!IsString(value))
    return yield Create(ValueErrorType.String, schema, path, value);
  if (IsDefined2(schema.minLength) && !(value.length >= schema.minLength)) {
    yield Create(ValueErrorType.StringMinLength, schema, path, value);
  }
  if (IsDefined2(schema.maxLength) && !(value.length <= schema.maxLength)) {
    yield Create(ValueErrorType.StringMaxLength, schema, path, value);
  }
  if (IsString(schema.pattern)) {
    const regex2 = new RegExp(schema.pattern);
    if (!regex2.test(value)) {
      yield Create(ValueErrorType.StringPattern, schema, path, value);
    }
  }
  if (IsString(schema.format)) {
    if (!format_exports.Has(schema.format)) {
      yield Create(ValueErrorType.StringFormatUnknown, schema, path, value);
    } else {
      const format = format_exports.Get(schema.format);
      if (!format(value)) {
        yield Create(ValueErrorType.StringFormat, schema, path, value);
      }
    }
  }
}
function* FromSymbol3(schema, references, path, value) {
  if (!IsSymbol(value))
    yield Create(ValueErrorType.Symbol, schema, path, value);
}
function* FromTemplateLiteral4(schema, references, path, value) {
  if (!IsString(value))
    return yield Create(ValueErrorType.String, schema, path, value);
  const regex2 = new RegExp(schema.pattern);
  if (!regex2.test(value)) {
    yield Create(ValueErrorType.StringPattern, schema, path, value);
  }
}
function* FromThis2(schema, references, path, value) {
  yield* Visit6(Deref(schema, references), references, path, value);
}
function* FromTuple5(schema, references, path, value) {
  if (!IsArray(value))
    return yield Create(ValueErrorType.Tuple, schema, path, value);
  if (schema.items === void 0 && !(value.length === 0)) {
    return yield Create(ValueErrorType.TupleLength, schema, path, value);
  }
  if (!(value.length === schema.maxItems)) {
    return yield Create(ValueErrorType.TupleLength, schema, path, value);
  }
  if (!schema.items) {
    return;
  }
  for (let i15 = 0; i15 < schema.items.length; i15++) {
    yield* Visit6(schema.items[i15], references, `${path}/${i15}`, value[i15]);
  }
}
function* FromUndefined3(schema, references, path, value) {
  if (!IsUndefined(value))
    yield Create(ValueErrorType.Undefined, schema, path, value);
}
function* FromUnion7(schema, references, path, value) {
  if (Check(schema, references, value))
    return;
  const errors = schema.anyOf.map((variant) => new ValueErrorIterator(Visit6(variant, references, path, value)));
  yield Create(ValueErrorType.Union, schema, path, value, errors);
}
function* FromUint8Array3(schema, references, path, value) {
  if (!IsUint8Array(value))
    return yield Create(ValueErrorType.Uint8Array, schema, path, value);
  if (IsDefined2(schema.maxByteLength) && !(value.length <= schema.maxByteLength)) {
    yield Create(ValueErrorType.Uint8ArrayMaxByteLength, schema, path, value);
  }
  if (IsDefined2(schema.minByteLength) && !(value.length >= schema.minByteLength)) {
    yield Create(ValueErrorType.Uint8ArrayMinByteLength, schema, path, value);
  }
}
function* FromUnknown3(schema, references, path, value) {
}
function* FromVoid3(schema, references, path, value) {
  if (!TypeSystemPolicy.IsVoidLike(value))
    yield Create(ValueErrorType.Void, schema, path, value);
}
function* FromKind2(schema, references, path, value) {
  const check = type_exports.Get(schema[Kind]);
  if (!check(schema, value))
    yield Create(ValueErrorType.Kind, schema, path, value);
}
function* Visit6(schema, references, path, value) {
  const references_ = IsDefined2(schema.$id) ? [...references, schema] : references;
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Any":
      return yield* FromAny3(schema_, references_, path, value);
    case "Argument":
      return yield* FromArgument2(schema_, references_, path, value);
    case "Array":
      return yield* FromArray5(schema_, references_, path, value);
    case "AsyncIterator":
      return yield* FromAsyncIterator3(schema_, references_, path, value);
    case "BigInt":
      return yield* FromBigInt3(schema_, references_, path, value);
    case "Boolean":
      return yield* FromBoolean3(schema_, references_, path, value);
    case "Constructor":
      return yield* FromConstructor3(schema_, references_, path, value);
    case "Date":
      return yield* FromDate3(schema_, references_, path, value);
    case "Function":
      return yield* FromFunction3(schema_, references_, path, value);
    case "Import":
      return yield* FromImport2(schema_, references_, path, value);
    case "Integer":
      return yield* FromInteger3(schema_, references_, path, value);
    case "Intersect":
      return yield* FromIntersect5(schema_, references_, path, value);
    case "Iterator":
      return yield* FromIterator3(schema_, references_, path, value);
    case "Literal":
      return yield* FromLiteral4(schema_, references_, path, value);
    case "Never":
      return yield* FromNever3(schema_, references_, path, value);
    case "Not":
      return yield* FromNot3(schema_, references_, path, value);
    case "Null":
      return yield* FromNull3(schema_, references_, path, value);
    case "Number":
      return yield* FromNumber3(schema_, references_, path, value);
    case "Object":
      return yield* FromObject3(schema_, references_, path, value);
    case "Promise":
      return yield* FromPromise3(schema_, references_, path, value);
    case "Record":
      return yield* FromRecord3(schema_, references_, path, value);
    case "Ref":
      return yield* FromRef3(schema_, references_, path, value);
    case "RegExp":
      return yield* FromRegExp3(schema_, references_, path, value);
    case "String":
      return yield* FromString3(schema_, references_, path, value);
    case "Symbol":
      return yield* FromSymbol3(schema_, references_, path, value);
    case "TemplateLiteral":
      return yield* FromTemplateLiteral4(schema_, references_, path, value);
    case "This":
      return yield* FromThis2(schema_, references_, path, value);
    case "Tuple":
      return yield* FromTuple5(schema_, references_, path, value);
    case "Undefined":
      return yield* FromUndefined3(schema_, references_, path, value);
    case "Union":
      return yield* FromUnion7(schema_, references_, path, value);
    case "Uint8Array":
      return yield* FromUint8Array3(schema_, references_, path, value);
    case "Unknown":
      return yield* FromUnknown3(schema_, references_, path, value);
    case "Void":
      return yield* FromVoid3(schema_, references_, path, value);
    default:
      if (!type_exports.Has(schema_[Kind]))
        throw new ValueErrorsUnknownTypeError(schema);
      return yield* FromKind2(schema_, references_, path, value);
  }
}
function Errors(...args) {
  const iterator = args.length === 3 ? Visit6(args[0], args[1], "", args[2]) : Visit6(args[0], [], "", args[1]);
  return new ValueErrorIterator(iterator);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/value/assert/assert.mjs
var __classPrivateFieldSet = function(receiver, state, value, kind, f15) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f15) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f15 : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f15.call(receiver, value) : f15 ? f15.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = function(receiver, state, kind, f15) {
  if (kind === "a" && !f15) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f15 : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f15 : kind === "a" ? f15.call(receiver) : f15 ? f15.value : state.get(receiver);
};
var _AssertError_instances;
var _AssertError_iterator;
var _AssertError_Iterator;
var AssertError = class extends TypeBoxError {
  constructor(iterator) {
    const error = iterator.First();
    super(error === void 0 ? "Invalid Value" : error.message);
    _AssertError_instances.add(this);
    _AssertError_iterator.set(this, void 0);
    __classPrivateFieldSet(this, _AssertError_iterator, iterator, "f");
    this.error = error;
  }
  /** Returns an iterator for each error in this value. */
  Errors() {
    return new ValueErrorIterator(__classPrivateFieldGet(this, _AssertError_instances, "m", _AssertError_Iterator).call(this));
  }
};
_AssertError_iterator = /* @__PURE__ */ new WeakMap(), _AssertError_instances = /* @__PURE__ */ new WeakSet(), _AssertError_Iterator = function* _AssertError_Iterator2() {
  if (this.error)
    yield this.error;
  yield* __classPrivateFieldGet(this, _AssertError_iterator, "f");
};
function AssertValue(schema, references, value) {
  if (Check(schema, references, value))
    return;
  throw new AssertError(Errors(schema, references, value));
}
function Assert(...args) {
  return args.length === 3 ? AssertValue(args[0], args[1], args[2]) : AssertValue(args[0], [], args[1]);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/value/clone/clone.mjs
function FromObject4(value) {
  const Acc = {};
  for (const key of Object.getOwnPropertyNames(value)) {
    Acc[key] = Clone2(value[key]);
  }
  for (const key of Object.getOwnPropertySymbols(value)) {
    Acc[key] = Clone2(value[key]);
  }
  return Acc;
}
function FromArray6(value) {
  return value.map((element) => Clone2(element));
}
function FromTypedArray(value) {
  return value.slice();
}
function FromMap(value) {
  return new Map(Clone2([...value.entries()]));
}
function FromSet(value) {
  return new Set(Clone2([...value.entries()]));
}
function FromDate4(value) {
  return new Date(value.toISOString());
}
function FromValue(value) {
  return value;
}
function Clone2(value) {
  if (IsArray(value))
    return FromArray6(value);
  if (IsDate(value))
    return FromDate4(value);
  if (IsTypedArray(value))
    return FromTypedArray(value);
  if (IsMap(value))
    return FromMap(value);
  if (IsSet(value))
    return FromSet(value);
  if (IsObject(value))
    return FromObject4(value);
  if (IsValueType(value))
    return FromValue(value);
  throw new Error("ValueClone: Unable to clone value");
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/value/create/create.mjs
var ValueCreateError = class extends TypeBoxError {
  constructor(schema, message) {
    super(message);
    this.schema = schema;
  }
};
function FromDefault(value) {
  return IsFunction(value) ? value() : Clone2(value);
}
function FromAny4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return {};
  }
}
function FromArgument3(schema, references) {
  return {};
}
function FromArray7(schema, references) {
  if (schema.uniqueItems === true && !HasPropertyKey(schema, "default")) {
    throw new ValueCreateError(schema, "Array with the uniqueItems constraint requires a default value");
  } else if ("contains" in schema && !HasPropertyKey(schema, "default")) {
    throw new ValueCreateError(schema, "Array with the contains constraint requires a default value");
  } else if ("default" in schema) {
    return FromDefault(schema.default);
  } else if (schema.minItems !== void 0) {
    return Array.from({ length: schema.minItems }).map((item) => {
      return Visit7(schema.items, references);
    });
  } else {
    return [];
  }
}
function FromAsyncIterator4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return async function* () {
    }();
  }
}
function FromBigInt4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return BigInt(0);
  }
}
function FromBoolean4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return false;
  }
}
function FromConstructor4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    const value = Visit7(schema.returns, references);
    if (typeof value === "object" && !Array.isArray(value)) {
      return class {
        constructor() {
          for (const [key, val] of Object.entries(value)) {
            const self2 = this;
            self2[key] = val;
          }
        }
      };
    } else {
      return class {
      };
    }
  }
}
function FromDate5(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.minimumTimestamp !== void 0) {
    return new Date(schema.minimumTimestamp);
  } else {
    return /* @__PURE__ */ new Date();
  }
}
function FromFunction4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return () => Visit7(schema.returns, references);
  }
}
function FromImport3(schema, references) {
  const definitions = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  return Visit7(target, [...references, ...definitions]);
}
function FromInteger4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.minimum !== void 0) {
    return schema.minimum;
  } else {
    return 0;
  }
}
function FromIntersect6(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    const value = schema.allOf.reduce((acc, schema2) => {
      const next = Visit7(schema2, references);
      return typeof next === "object" ? { ...acc, ...next } : next;
    }, {});
    if (!Check(schema, references, value))
      throw new ValueCreateError(schema, "Intersect produced invalid value. Consider using a default value.");
    return value;
  }
}
function FromIterator4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return function* () {
    }();
  }
}
function FromLiteral5(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return schema.const;
  }
}
function FromNever4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    throw new ValueCreateError(schema, "Never types cannot be created. Consider using a default value.");
  }
}
function FromNot4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    throw new ValueCreateError(schema, "Not types must have a default value");
  }
}
function FromNull4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return null;
  }
}
function FromNumber4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.minimum !== void 0) {
    return schema.minimum;
  } else {
    return 0;
  }
}
function FromObject5(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    const required = new Set(schema.required);
    const Acc = {};
    for (const [key, subschema] of Object.entries(schema.properties)) {
      if (!required.has(key))
        continue;
      Acc[key] = Visit7(subschema, references);
    }
    return Acc;
  }
}
function FromPromise4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return Promise.resolve(Visit7(schema.item, references));
  }
}
function FromRecord4(schema, references) {
  const [keyPattern, valueSchema] = Object.entries(schema.patternProperties)[0];
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else if (!(keyPattern === PatternStringExact || keyPattern === PatternNumberExact)) {
    const propertyKeys = keyPattern.slice(1, keyPattern.length - 1).split("|");
    const Acc = {};
    for (const key of propertyKeys)
      Acc[key] = Visit7(valueSchema, references);
    return Acc;
  } else {
    return {};
  }
}
function FromRef4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return Visit7(Deref(schema, references), references);
  }
}
function FromRegExp4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    throw new ValueCreateError(schema, "RegExp types cannot be created. Consider using a default value.");
  }
}
function FromString4(schema, references) {
  if (schema.pattern !== void 0) {
    if (!HasPropertyKey(schema, "default")) {
      throw new ValueCreateError(schema, "String types with patterns must specify a default value");
    } else {
      return FromDefault(schema.default);
    }
  } else if (schema.format !== void 0) {
    if (!HasPropertyKey(schema, "default")) {
      throw new ValueCreateError(schema, "String types with formats must specify a default value");
    } else {
      return FromDefault(schema.default);
    }
  } else {
    if (HasPropertyKey(schema, "default")) {
      return FromDefault(schema.default);
    } else if (schema.minLength !== void 0) {
      return Array.from({ length: schema.minLength }).map(() => " ").join("");
    } else {
      return "";
    }
  }
}
function FromSymbol4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else if ("value" in schema) {
    return Symbol.for(schema.value);
  } else {
    return Symbol();
  }
}
function FromTemplateLiteral5(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  }
  if (!IsTemplateLiteralFinite(schema))
    throw new ValueCreateError(schema, "Can only create template literals that produce a finite variants. Consider using a default value.");
  const generated = TemplateLiteralGenerate(schema);
  return generated[0];
}
function FromThis3(schema, references) {
  if (recursiveDepth++ > recursiveMaxDepth)
    throw new ValueCreateError(schema, "Cannot create recursive type as it appears possibly infinite. Consider using a default.");
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return Visit7(Deref(schema, references), references);
  }
}
function FromTuple6(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  }
  if (schema.items === void 0) {
    return [];
  } else {
    return Array.from({ length: schema.minItems }).map((_13, index) => Visit7(schema.items[index], references));
  }
}
function FromUndefined4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return void 0;
  }
}
function FromUnion8(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.anyOf.length === 0) {
    throw new Error("ValueCreate.Union: Cannot create Union with zero variants");
  } else {
    return Visit7(schema.anyOf[0], references);
  }
}
function FromUint8Array4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.minByteLength !== void 0) {
    return new Uint8Array(schema.minByteLength);
  } else {
    return new Uint8Array(0);
  }
}
function FromUnknown4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return {};
  }
}
function FromVoid4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return void 0;
  }
}
function FromKind3(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    throw new Error("User defined types must specify a default value");
  }
}
function Visit7(schema, references) {
  const references_ = Pushref(schema, references);
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Any":
      return FromAny4(schema_, references_);
    case "Argument":
      return FromArgument3(schema_, references_);
    case "Array":
      return FromArray7(schema_, references_);
    case "AsyncIterator":
      return FromAsyncIterator4(schema_, references_);
    case "BigInt":
      return FromBigInt4(schema_, references_);
    case "Boolean":
      return FromBoolean4(schema_, references_);
    case "Constructor":
      return FromConstructor4(schema_, references_);
    case "Date":
      return FromDate5(schema_, references_);
    case "Function":
      return FromFunction4(schema_, references_);
    case "Import":
      return FromImport3(schema_, references_);
    case "Integer":
      return FromInteger4(schema_, references_);
    case "Intersect":
      return FromIntersect6(schema_, references_);
    case "Iterator":
      return FromIterator4(schema_, references_);
    case "Literal":
      return FromLiteral5(schema_, references_);
    case "Never":
      return FromNever4(schema_, references_);
    case "Not":
      return FromNot4(schema_, references_);
    case "Null":
      return FromNull4(schema_, references_);
    case "Number":
      return FromNumber4(schema_, references_);
    case "Object":
      return FromObject5(schema_, references_);
    case "Promise":
      return FromPromise4(schema_, references_);
    case "Record":
      return FromRecord4(schema_, references_);
    case "Ref":
      return FromRef4(schema_, references_);
    case "RegExp":
      return FromRegExp4(schema_, references_);
    case "String":
      return FromString4(schema_, references_);
    case "Symbol":
      return FromSymbol4(schema_, references_);
    case "TemplateLiteral":
      return FromTemplateLiteral5(schema_, references_);
    case "This":
      return FromThis3(schema_, references_);
    case "Tuple":
      return FromTuple6(schema_, references_);
    case "Undefined":
      return FromUndefined4(schema_, references_);
    case "Union":
      return FromUnion8(schema_, references_);
    case "Uint8Array":
      return FromUint8Array4(schema_, references_);
    case "Unknown":
      return FromUnknown4(schema_, references_);
    case "Void":
      return FromVoid4(schema_, references_);
    default:
      if (!type_exports.Has(schema_[Kind]))
        throw new ValueCreateError(schema_, "Unknown type");
      return FromKind3(schema_, references_);
  }
}
var recursiveMaxDepth = 512;
var recursiveDepth = 0;
function Create2(...args) {
  recursiveDepth = 0;
  return args.length === 2 ? Visit7(args[0], args[1]) : Visit7(args[0], []);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/value/cast/cast.mjs
var ValueCastError = class extends TypeBoxError {
  constructor(schema, message) {
    super(message);
    this.schema = schema;
  }
};
function ScoreUnion(schema, references, value) {
  if (schema[Kind] === "Object" && typeof value === "object" && !IsNull(value)) {
    const object = schema;
    const keys2 = Object.getOwnPropertyNames(value);
    const entries = Object.entries(object.properties);
    const [point, max] = [1 / entries.length, entries.length];
    return entries.reduce((acc, [key, schema2]) => {
      const literal = schema2[Kind] === "Literal" && schema2.const === value[key] ? max : 0;
      const checks = Check(schema2, references, value[key]) ? point : 0;
      const exists = keys2.includes(key) ? point : 0;
      return acc + (literal + checks + exists);
    }, 0);
  } else {
    return Check(schema, references, value) ? 1 : 0;
  }
}
function SelectUnion(union, references, value) {
  const schemas = union.anyOf.map((schema) => Deref(schema, references));
  let [select, best] = [schemas[0], 0];
  for (const schema of schemas) {
    const score = ScoreUnion(schema, references, value);
    if (score > best) {
      select = schema;
      best = score;
    }
  }
  return select;
}
function CastUnion(union, references, value) {
  if ("default" in union) {
    return typeof value === "function" ? union.default : Clone2(union.default);
  } else {
    const schema = SelectUnion(union, references, value);
    return Cast(schema, references, value);
  }
}
function DefaultClone(schema, references, value) {
  return Check(schema, references, value) ? Clone2(value) : Create2(schema, references);
}
function Default(schema, references, value) {
  return Check(schema, references, value) ? value : Create2(schema, references);
}
function FromArray8(schema, references, value) {
  if (Check(schema, references, value))
    return Clone2(value);
  const created = IsArray(value) ? Clone2(value) : Create2(schema, references);
  const minimum = IsNumber(schema.minItems) && created.length < schema.minItems ? [...created, ...Array.from({ length: schema.minItems - created.length }, () => null)] : created;
  const maximum = IsNumber(schema.maxItems) && minimum.length > schema.maxItems ? minimum.slice(0, schema.maxItems) : minimum;
  const casted = maximum.map((value2) => Visit8(schema.items, references, value2));
  if (schema.uniqueItems !== true)
    return casted;
  const unique = [...new Set(casted)];
  if (!Check(schema, references, unique))
    throw new ValueCastError(schema, "Array cast produced invalid data due to uniqueItems constraint");
  return unique;
}
function FromConstructor5(schema, references, value) {
  if (Check(schema, references, value))
    return Create2(schema, references);
  const required = new Set(schema.returns.required || []);
  const result = function() {
  };
  for (const [key, property] of Object.entries(schema.returns.properties)) {
    if (!required.has(key) && value.prototype[key] === void 0)
      continue;
    result.prototype[key] = Visit8(property, references, value.prototype[key]);
  }
  return result;
}
function FromImport4(schema, references, value) {
  const definitions = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  return Visit8(target, [...references, ...definitions], value);
}
function FromIntersect7(schema, references, value) {
  const created = Create2(schema, references);
  const mapped = IsObject(created) && IsObject(value) ? { ...created, ...value } : value;
  return Check(schema, references, mapped) ? mapped : Create2(schema, references);
}
function FromNever5(schema, references, value) {
  throw new ValueCastError(schema, "Never types cannot be cast");
}
function FromObject6(schema, references, value) {
  if (Check(schema, references, value))
    return value;
  if (value === null || typeof value !== "object")
    return Create2(schema, references);
  const required = new Set(schema.required || []);
  const result = {};
  for (const [key, property] of Object.entries(schema.properties)) {
    if (!required.has(key) && value[key] === void 0)
      continue;
    result[key] = Visit8(property, references, value[key]);
  }
  if (typeof schema.additionalProperties === "object") {
    const propertyNames = Object.getOwnPropertyNames(schema.properties);
    for (const propertyName of Object.getOwnPropertyNames(value)) {
      if (propertyNames.includes(propertyName))
        continue;
      result[propertyName] = Visit8(schema.additionalProperties, references, value[propertyName]);
    }
  }
  return result;
}
function FromRecord5(schema, references, value) {
  if (Check(schema, references, value))
    return Clone2(value);
  if (value === null || typeof value !== "object" || Array.isArray(value) || value instanceof Date)
    return Create2(schema, references);
  const subschemaPropertyName = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const subschema = schema.patternProperties[subschemaPropertyName];
  const result = {};
  for (const [propKey, propValue] of Object.entries(value)) {
    result[propKey] = Visit8(subschema, references, propValue);
  }
  return result;
}
function FromRef5(schema, references, value) {
  return Visit8(Deref(schema, references), references, value);
}
function FromThis4(schema, references, value) {
  return Visit8(Deref(schema, references), references, value);
}
function FromTuple7(schema, references, value) {
  if (Check(schema, references, value))
    return Clone2(value);
  if (!IsArray(value))
    return Create2(schema, references);
  if (schema.items === void 0)
    return [];
  return schema.items.map((schema2, index) => Visit8(schema2, references, value[index]));
}
function FromUnion9(schema, references, value) {
  return Check(schema, references, value) ? Clone2(value) : CastUnion(schema, references, value);
}
function Visit8(schema, references, value) {
  const references_ = IsString(schema.$id) ? Pushref(schema, references) : references;
  const schema_ = schema;
  switch (schema[Kind]) {
    case "Array":
      return FromArray8(schema_, references_, value);
    case "Constructor":
      return FromConstructor5(schema_, references_, value);
    case "Import":
      return FromImport4(schema_, references_, value);
    case "Intersect":
      return FromIntersect7(schema_, references_, value);
    case "Never":
      return FromNever5(schema_, references_, value);
    case "Object":
      return FromObject6(schema_, references_, value);
    case "Record":
      return FromRecord5(schema_, references_, value);
    case "Ref":
      return FromRef5(schema_, references_, value);
    case "This":
      return FromThis4(schema_, references_, value);
    case "Tuple":
      return FromTuple7(schema_, references_, value);
    case "Union":
      return FromUnion9(schema_, references_, value);
    case "Date":
    case "Symbol":
    case "Uint8Array":
      return DefaultClone(schema, references, value);
    default:
      return Default(schema_, references_, value);
  }
}
function Cast(...args) {
  return args.length === 3 ? Visit8(args[0], args[1], args[2]) : Visit8(args[0], [], args[1]);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/value/clean/clean.mjs
function IsCheckable(schema) {
  return IsKind(schema) && schema[Kind] !== "Unsafe";
}
function FromArray9(schema, references, value) {
  if (!IsArray(value))
    return value;
  return value.map((value2) => Visit9(schema.items, references, value2));
}
function FromImport5(schema, references, value) {
  const definitions = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  return Visit9(target, [...references, ...definitions], value);
}
function FromIntersect8(schema, references, value) {
  const unevaluatedProperties = schema.unevaluatedProperties;
  const intersections = schema.allOf.map((schema2) => Visit9(schema2, references, Clone2(value)));
  const composite = intersections.reduce((acc, value2) => IsObject(value2) ? { ...acc, ...value2 } : value2, {});
  if (!IsObject(value) || !IsObject(composite) || !IsKind(unevaluatedProperties))
    return composite;
  const knownkeys = KeyOfPropertyKeys(schema);
  for (const key of Object.getOwnPropertyNames(value)) {
    if (knownkeys.includes(key))
      continue;
    if (Check(unevaluatedProperties, references, value[key])) {
      composite[key] = Visit9(unevaluatedProperties, references, value[key]);
    }
  }
  return composite;
}
function FromObject7(schema, references, value) {
  if (!IsObject(value) || IsArray(value))
    return value;
  const additionalProperties = schema.additionalProperties;
  for (const key of Object.getOwnPropertyNames(value)) {
    if (HasPropertyKey(schema.properties, key)) {
      value[key] = Visit9(schema.properties[key], references, value[key]);
      continue;
    }
    if (IsKind(additionalProperties) && Check(additionalProperties, references, value[key])) {
      value[key] = Visit9(additionalProperties, references, value[key]);
      continue;
    }
    delete value[key];
  }
  return value;
}
function FromRecord6(schema, references, value) {
  if (!IsObject(value))
    return value;
  const additionalProperties = schema.additionalProperties;
  const propertyKeys = Object.getOwnPropertyNames(value);
  const [propertyKey, propertySchema] = Object.entries(schema.patternProperties)[0];
  const propertyKeyTest = new RegExp(propertyKey);
  for (const key of propertyKeys) {
    if (propertyKeyTest.test(key)) {
      value[key] = Visit9(propertySchema, references, value[key]);
      continue;
    }
    if (IsKind(additionalProperties) && Check(additionalProperties, references, value[key])) {
      value[key] = Visit9(additionalProperties, references, value[key]);
      continue;
    }
    delete value[key];
  }
  return value;
}
function FromRef6(schema, references, value) {
  return Visit9(Deref(schema, references), references, value);
}
function FromThis5(schema, references, value) {
  return Visit9(Deref(schema, references), references, value);
}
function FromTuple8(schema, references, value) {
  if (!IsArray(value))
    return value;
  if (IsUndefined(schema.items))
    return [];
  const length = Math.min(value.length, schema.items.length);
  for (let i15 = 0; i15 < length; i15++) {
    value[i15] = Visit9(schema.items[i15], references, value[i15]);
  }
  return value.length > length ? value.slice(0, length) : value;
}
function FromUnion10(schema, references, value) {
  for (const inner of schema.anyOf) {
    if (IsCheckable(inner) && Check(inner, references, value)) {
      return Visit9(inner, references, value);
    }
  }
  return value;
}
function Visit9(schema, references, value) {
  const references_ = IsString(schema.$id) ? Pushref(schema, references) : references;
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Array":
      return FromArray9(schema_, references_, value);
    case "Import":
      return FromImport5(schema_, references_, value);
    case "Intersect":
      return FromIntersect8(schema_, references_, value);
    case "Object":
      return FromObject7(schema_, references_, value);
    case "Record":
      return FromRecord6(schema_, references_, value);
    case "Ref":
      return FromRef6(schema_, references_, value);
    case "This":
      return FromThis5(schema_, references_, value);
    case "Tuple":
      return FromTuple8(schema_, references_, value);
    case "Union":
      return FromUnion10(schema_, references_, value);
    default:
      return value;
  }
}
function Clean(...args) {
  return args.length === 3 ? Visit9(args[0], args[1], args[2]) : Visit9(args[0], [], args[1]);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/value/convert/convert.mjs
function IsStringNumeric(value) {
  return IsString(value) && !isNaN(value) && !isNaN(parseFloat(value));
}
function IsValueToString(value) {
  return IsBigInt(value) || IsBoolean(value) || IsNumber(value);
}
function IsValueTrue(value) {
  return value === true || IsNumber(value) && value === 1 || IsBigInt(value) && value === BigInt("1") || IsString(value) && (value.toLowerCase() === "true" || value === "1");
}
function IsValueFalse(value) {
  return value === false || IsNumber(value) && (value === 0 || Object.is(value, -0)) || IsBigInt(value) && value === BigInt("0") || IsString(value) && (value.toLowerCase() === "false" || value === "0" || value === "-0");
}
function IsTimeStringWithTimeZone(value) {
  return IsString(value) && /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i.test(value);
}
function IsTimeStringWithoutTimeZone(value) {
  return IsString(value) && /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)?$/i.test(value);
}
function IsDateTimeStringWithTimeZone(value) {
  return IsString(value) && /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i.test(value);
}
function IsDateTimeStringWithoutTimeZone(value) {
  return IsString(value) && /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)?$/i.test(value);
}
function IsDateString(value) {
  return IsString(value) && /^\d\d\d\d-[0-1]\d-[0-3]\d$/i.test(value);
}
function TryConvertLiteralString(value, target) {
  const conversion = TryConvertString(value);
  return conversion === target ? conversion : value;
}
function TryConvertLiteralNumber(value, target) {
  const conversion = TryConvertNumber(value);
  return conversion === target ? conversion : value;
}
function TryConvertLiteralBoolean(value, target) {
  const conversion = TryConvertBoolean(value);
  return conversion === target ? conversion : value;
}
function TryConvertLiteral(schema, value) {
  return IsString(schema.const) ? TryConvertLiteralString(value, schema.const) : IsNumber(schema.const) ? TryConvertLiteralNumber(value, schema.const) : IsBoolean(schema.const) ? TryConvertLiteralBoolean(value, schema.const) : value;
}
function TryConvertBoolean(value) {
  return IsValueTrue(value) ? true : IsValueFalse(value) ? false : value;
}
function TryConvertBigInt(value) {
  const truncateInteger = (value2) => value2.split(".")[0];
  return IsStringNumeric(value) ? BigInt(truncateInteger(value)) : IsNumber(value) ? BigInt(Math.trunc(value)) : IsValueFalse(value) ? BigInt(0) : IsValueTrue(value) ? BigInt(1) : value;
}
function TryConvertString(value) {
  return IsSymbol(value) && value.description !== void 0 ? value.description.toString() : IsValueToString(value) ? value.toString() : value;
}
function TryConvertNumber(value) {
  return IsStringNumeric(value) ? parseFloat(value) : IsValueTrue(value) ? 1 : IsValueFalse(value) ? 0 : value;
}
function TryConvertInteger(value) {
  return IsStringNumeric(value) ? parseInt(value) : IsNumber(value) ? Math.trunc(value) : IsValueTrue(value) ? 1 : IsValueFalse(value) ? 0 : value;
}
function TryConvertNull(value) {
  return IsString(value) && value.toLowerCase() === "null" ? null : value;
}
function TryConvertUndefined(value) {
  return IsString(value) && value === "undefined" ? void 0 : value;
}
function TryConvertDate(value) {
  return IsDate(value) ? value : IsNumber(value) ? new Date(value) : IsValueTrue(value) ? /* @__PURE__ */ new Date(1) : IsValueFalse(value) ? /* @__PURE__ */ new Date(0) : IsStringNumeric(value) ? new Date(parseInt(value)) : IsTimeStringWithoutTimeZone(value) ? /* @__PURE__ */ new Date(`1970-01-01T${value}.000Z`) : IsTimeStringWithTimeZone(value) ? /* @__PURE__ */ new Date(`1970-01-01T${value}`) : IsDateTimeStringWithoutTimeZone(value) ? /* @__PURE__ */ new Date(`${value}.000Z`) : IsDateTimeStringWithTimeZone(value) ? new Date(value) : IsDateString(value) ? /* @__PURE__ */ new Date(`${value}T00:00:00.000Z`) : value;
}
function Default2(value) {
  return value;
}
function FromArray10(schema, references, value) {
  const elements = IsArray(value) ? value : [value];
  return elements.map((element) => Visit10(schema.items, references, element));
}
function FromBigInt5(schema, references, value) {
  return TryConvertBigInt(value);
}
function FromBoolean5(schema, references, value) {
  return TryConvertBoolean(value);
}
function FromDate6(schema, references, value) {
  return TryConvertDate(value);
}
function FromImport6(schema, references, value) {
  const definitions = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  return Visit10(target, [...references, ...definitions], value);
}
function FromInteger5(schema, references, value) {
  return TryConvertInteger(value);
}
function FromIntersect9(schema, references, value) {
  return schema.allOf.reduce((value2, schema2) => Visit10(schema2, references, value2), value);
}
function FromLiteral6(schema, references, value) {
  return TryConvertLiteral(schema, value);
}
function FromNull5(schema, references, value) {
  return TryConvertNull(value);
}
function FromNumber5(schema, references, value) {
  return TryConvertNumber(value);
}
function FromObject8(schema, references, value) {
  if (!IsObject(value))
    return value;
  for (const propertyKey of Object.getOwnPropertyNames(schema.properties)) {
    if (!HasPropertyKey(value, propertyKey))
      continue;
    value[propertyKey] = Visit10(schema.properties[propertyKey], references, value[propertyKey]);
  }
  return value;
}
function FromRecord7(schema, references, value) {
  const isConvertable = IsObject(value);
  if (!isConvertable)
    return value;
  const propertyKey = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const property = schema.patternProperties[propertyKey];
  for (const [propKey, propValue] of Object.entries(value)) {
    value[propKey] = Visit10(property, references, propValue);
  }
  return value;
}
function FromRef7(schema, references, value) {
  return Visit10(Deref(schema, references), references, value);
}
function FromString5(schema, references, value) {
  return TryConvertString(value);
}
function FromSymbol5(schema, references, value) {
  return IsString(value) || IsNumber(value) ? Symbol(value) : value;
}
function FromThis6(schema, references, value) {
  return Visit10(Deref(schema, references), references, value);
}
function FromTuple9(schema, references, value) {
  const isConvertable = IsArray(value) && !IsUndefined(schema.items);
  if (!isConvertable)
    return value;
  return value.map((value2, index) => {
    return index < schema.items.length ? Visit10(schema.items[index], references, value2) : value2;
  });
}
function FromUndefined5(schema, references, value) {
  return TryConvertUndefined(value);
}
function FromUnion11(schema, references, value) {
  for (const subschema of schema.anyOf) {
    const converted = Visit10(subschema, references, Clone2(value));
    if (!Check(subschema, references, converted))
      continue;
    return converted;
  }
  return value;
}
function Visit10(schema, references, value) {
  const references_ = Pushref(schema, references);
  const schema_ = schema;
  switch (schema[Kind]) {
    case "Array":
      return FromArray10(schema_, references_, value);
    case "BigInt":
      return FromBigInt5(schema_, references_, value);
    case "Boolean":
      return FromBoolean5(schema_, references_, value);
    case "Date":
      return FromDate6(schema_, references_, value);
    case "Import":
      return FromImport6(schema_, references_, value);
    case "Integer":
      return FromInteger5(schema_, references_, value);
    case "Intersect":
      return FromIntersect9(schema_, references_, value);
    case "Literal":
      return FromLiteral6(schema_, references_, value);
    case "Null":
      return FromNull5(schema_, references_, value);
    case "Number":
      return FromNumber5(schema_, references_, value);
    case "Object":
      return FromObject8(schema_, references_, value);
    case "Record":
      return FromRecord7(schema_, references_, value);
    case "Ref":
      return FromRef7(schema_, references_, value);
    case "String":
      return FromString5(schema_, references_, value);
    case "Symbol":
      return FromSymbol5(schema_, references_, value);
    case "This":
      return FromThis6(schema_, references_, value);
    case "Tuple":
      return FromTuple9(schema_, references_, value);
    case "Undefined":
      return FromUndefined5(schema_, references_, value);
    case "Union":
      return FromUnion11(schema_, references_, value);
    default:
      return Default2(value);
  }
}
function Convert(...args) {
  return args.length === 3 ? Visit10(args[0], args[1], args[2]) : Visit10(args[0], [], args[1]);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/value/transform/decode.mjs
var TransformDecodeCheckError = class extends TypeBoxError {
  constructor(schema, value, error) {
    super(`Unable to decode value as it does not match the expected schema`);
    this.schema = schema;
    this.value = value;
    this.error = error;
  }
};
var TransformDecodeError = class extends TypeBoxError {
  constructor(schema, path, value, error) {
    super(error instanceof Error ? error.message : "Unknown error");
    this.schema = schema;
    this.path = path;
    this.value = value;
    this.error = error;
  }
};
function Default3(schema, path, value) {
  try {
    return IsTransform(schema) ? schema[TransformKind].Decode(value) : value;
  } catch (error) {
    throw new TransformDecodeError(schema, path, value, error);
  }
}
function FromArray11(schema, references, path, value) {
  return IsArray(value) ? Default3(schema, path, value.map((value2, index) => Visit11(schema.items, references, `${path}/${index}`, value2))) : Default3(schema, path, value);
}
function FromIntersect10(schema, references, path, value) {
  if (!IsObject(value) || IsValueType(value))
    return Default3(schema, path, value);
  const knownEntries = KeyOfPropertyEntries(schema);
  const knownKeys = knownEntries.map((entry) => entry[0]);
  const knownProperties = { ...value };
  for (const [knownKey, knownSchema] of knownEntries)
    if (knownKey in knownProperties) {
      knownProperties[knownKey] = Visit11(knownSchema, references, `${path}/${knownKey}`, knownProperties[knownKey]);
    }
  if (!IsTransform(schema.unevaluatedProperties)) {
    return Default3(schema, path, knownProperties);
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const unevaluatedProperties = schema.unevaluatedProperties;
  const unknownProperties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.includes(key)) {
      unknownProperties[key] = Default3(unevaluatedProperties, `${path}/${key}`, unknownProperties[key]);
    }
  return Default3(schema, path, unknownProperties);
}
function FromImport7(schema, references, path, value) {
  const additional = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  const result = Visit11(target, [...references, ...additional], path, value);
  return Default3(schema, path, result);
}
function FromNot5(schema, references, path, value) {
  return Default3(schema, path, Visit11(schema.not, references, path, value));
}
function FromObject9(schema, references, path, value) {
  if (!IsObject(value))
    return Default3(schema, path, value);
  const knownKeys = KeyOfPropertyKeys(schema);
  const knownProperties = { ...value };
  for (const key of knownKeys) {
    if (!HasPropertyKey(knownProperties, key))
      continue;
    if (IsUndefined(knownProperties[key]) && (!IsUndefined3(schema.properties[key]) || TypeSystemPolicy.IsExactOptionalProperty(knownProperties, key)))
      continue;
    knownProperties[key] = Visit11(schema.properties[key], references, `${path}/${key}`, knownProperties[key]);
  }
  if (!IsSchema(schema.additionalProperties)) {
    return Default3(schema, path, knownProperties);
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const additionalProperties = schema.additionalProperties;
  const unknownProperties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.includes(key)) {
      unknownProperties[key] = Default3(additionalProperties, `${path}/${key}`, unknownProperties[key]);
    }
  return Default3(schema, path, unknownProperties);
}
function FromRecord8(schema, references, path, value) {
  if (!IsObject(value))
    return Default3(schema, path, value);
  const pattern = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const knownKeys = new RegExp(pattern);
  const knownProperties = { ...value };
  for (const key of Object.getOwnPropertyNames(value))
    if (knownKeys.test(key)) {
      knownProperties[key] = Visit11(schema.patternProperties[pattern], references, `${path}/${key}`, knownProperties[key]);
    }
  if (!IsSchema(schema.additionalProperties)) {
    return Default3(schema, path, knownProperties);
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const additionalProperties = schema.additionalProperties;
  const unknownProperties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.test(key)) {
      unknownProperties[key] = Default3(additionalProperties, `${path}/${key}`, unknownProperties[key]);
    }
  return Default3(schema, path, unknownProperties);
}
function FromRef8(schema, references, path, value) {
  const target = Deref(schema, references);
  return Default3(schema, path, Visit11(target, references, path, value));
}
function FromThis7(schema, references, path, value) {
  const target = Deref(schema, references);
  return Default3(schema, path, Visit11(target, references, path, value));
}
function FromTuple10(schema, references, path, value) {
  return IsArray(value) && IsArray(schema.items) ? Default3(schema, path, schema.items.map((schema2, index) => Visit11(schema2, references, `${path}/${index}`, value[index]))) : Default3(schema, path, value);
}
function FromUnion12(schema, references, path, value) {
  for (const subschema of schema.anyOf) {
    if (!Check(subschema, references, value))
      continue;
    const decoded = Visit11(subschema, references, path, value);
    return Default3(schema, path, decoded);
  }
  return Default3(schema, path, value);
}
function Visit11(schema, references, path, value) {
  const references_ = Pushref(schema, references);
  const schema_ = schema;
  switch (schema[Kind]) {
    case "Array":
      return FromArray11(schema_, references_, path, value);
    case "Import":
      return FromImport7(schema_, references_, path, value);
    case "Intersect":
      return FromIntersect10(schema_, references_, path, value);
    case "Not":
      return FromNot5(schema_, references_, path, value);
    case "Object":
      return FromObject9(schema_, references_, path, value);
    case "Record":
      return FromRecord8(schema_, references_, path, value);
    case "Ref":
      return FromRef8(schema_, references_, path, value);
    case "Symbol":
      return Default3(schema_, path, value);
    case "This":
      return FromThis7(schema_, references_, path, value);
    case "Tuple":
      return FromTuple10(schema_, references_, path, value);
    case "Union":
      return FromUnion12(schema_, references_, path, value);
    default:
      return Default3(schema_, path, value);
  }
}
function TransformDecode(schema, references, value) {
  return Visit11(schema, references, "", value);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/value/transform/encode.mjs
var TransformEncodeCheckError = class extends TypeBoxError {
  constructor(schema, value, error) {
    super(`The encoded value does not match the expected schema`);
    this.schema = schema;
    this.value = value;
    this.error = error;
  }
};
var TransformEncodeError = class extends TypeBoxError {
  constructor(schema, path, value, error) {
    super(`${error instanceof Error ? error.message : "Unknown error"}`);
    this.schema = schema;
    this.path = path;
    this.value = value;
    this.error = error;
  }
};
function Default4(schema, path, value) {
  try {
    return IsTransform(schema) ? schema[TransformKind].Encode(value) : value;
  } catch (error) {
    throw new TransformEncodeError(schema, path, value, error);
  }
}
function FromArray12(schema, references, path, value) {
  const defaulted = Default4(schema, path, value);
  return IsArray(defaulted) ? defaulted.map((value2, index) => Visit12(schema.items, references, `${path}/${index}`, value2)) : defaulted;
}
function FromImport8(schema, references, path, value) {
  const additional = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  const result = Default4(schema, path, value);
  return Visit12(target, [...references, ...additional], path, result);
}
function FromIntersect11(schema, references, path, value) {
  const defaulted = Default4(schema, path, value);
  if (!IsObject(value) || IsValueType(value))
    return defaulted;
  const knownEntries = KeyOfPropertyEntries(schema);
  const knownKeys = knownEntries.map((entry) => entry[0]);
  const knownProperties = { ...defaulted };
  for (const [knownKey, knownSchema] of knownEntries)
    if (knownKey in knownProperties) {
      knownProperties[knownKey] = Visit12(knownSchema, references, `${path}/${knownKey}`, knownProperties[knownKey]);
    }
  if (!IsTransform(schema.unevaluatedProperties)) {
    return knownProperties;
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const unevaluatedProperties = schema.unevaluatedProperties;
  const properties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.includes(key)) {
      properties[key] = Default4(unevaluatedProperties, `${path}/${key}`, properties[key]);
    }
  return properties;
}
function FromNot6(schema, references, path, value) {
  return Default4(schema.not, path, Default4(schema, path, value));
}
function FromObject10(schema, references, path, value) {
  const defaulted = Default4(schema, path, value);
  if (!IsObject(defaulted))
    return defaulted;
  const knownKeys = KeyOfPropertyKeys(schema);
  const knownProperties = { ...defaulted };
  for (const key of knownKeys) {
    if (!HasPropertyKey(knownProperties, key))
      continue;
    if (IsUndefined(knownProperties[key]) && (!IsUndefined3(schema.properties[key]) || TypeSystemPolicy.IsExactOptionalProperty(knownProperties, key)))
      continue;
    knownProperties[key] = Visit12(schema.properties[key], references, `${path}/${key}`, knownProperties[key]);
  }
  if (!IsSchema(schema.additionalProperties)) {
    return knownProperties;
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const additionalProperties = schema.additionalProperties;
  const properties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.includes(key)) {
      properties[key] = Default4(additionalProperties, `${path}/${key}`, properties[key]);
    }
  return properties;
}
function FromRecord9(schema, references, path, value) {
  const defaulted = Default4(schema, path, value);
  if (!IsObject(value))
    return defaulted;
  const pattern = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const knownKeys = new RegExp(pattern);
  const knownProperties = { ...defaulted };
  for (const key of Object.getOwnPropertyNames(value))
    if (knownKeys.test(key)) {
      knownProperties[key] = Visit12(schema.patternProperties[pattern], references, `${path}/${key}`, knownProperties[key]);
    }
  if (!IsSchema(schema.additionalProperties)) {
    return knownProperties;
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const additionalProperties = schema.additionalProperties;
  const properties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.test(key)) {
      properties[key] = Default4(additionalProperties, `${path}/${key}`, properties[key]);
    }
  return properties;
}
function FromRef9(schema, references, path, value) {
  const target = Deref(schema, references);
  const resolved = Visit12(target, references, path, value);
  return Default4(schema, path, resolved);
}
function FromThis8(schema, references, path, value) {
  const target = Deref(schema, references);
  const resolved = Visit12(target, references, path, value);
  return Default4(schema, path, resolved);
}
function FromTuple11(schema, references, path, value) {
  const value1 = Default4(schema, path, value);
  return IsArray(schema.items) ? schema.items.map((schema2, index) => Visit12(schema2, references, `${path}/${index}`, value1[index])) : [];
}
function FromUnion13(schema, references, path, value) {
  for (const subschema of schema.anyOf) {
    if (!Check(subschema, references, value))
      continue;
    const value1 = Visit12(subschema, references, path, value);
    return Default4(schema, path, value1);
  }
  for (const subschema of schema.anyOf) {
    const value1 = Visit12(subschema, references, path, value);
    if (!Check(schema, references, value1))
      continue;
    return Default4(schema, path, value1);
  }
  return Default4(schema, path, value);
}
function Visit12(schema, references, path, value) {
  const references_ = Pushref(schema, references);
  const schema_ = schema;
  switch (schema[Kind]) {
    case "Array":
      return FromArray12(schema_, references_, path, value);
    case "Import":
      return FromImport8(schema_, references_, path, value);
    case "Intersect":
      return FromIntersect11(schema_, references_, path, value);
    case "Not":
      return FromNot6(schema_, references_, path, value);
    case "Object":
      return FromObject10(schema_, references_, path, value);
    case "Record":
      return FromRecord9(schema_, references_, path, value);
    case "Ref":
      return FromRef9(schema_, references_, path, value);
    case "This":
      return FromThis8(schema_, references_, path, value);
    case "Tuple":
      return FromTuple11(schema_, references_, path, value);
    case "Union":
      return FromUnion13(schema_, references_, path, value);
    default:
      return Default4(schema_, path, value);
  }
}
function TransformEncode(schema, references, value) {
  return Visit12(schema, references, "", value);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/value/transform/has.mjs
function FromArray13(schema, references) {
  return IsTransform(schema) || Visit13(schema.items, references);
}
function FromAsyncIterator5(schema, references) {
  return IsTransform(schema) || Visit13(schema.items, references);
}
function FromConstructor6(schema, references) {
  return IsTransform(schema) || Visit13(schema.returns, references) || schema.parameters.some((schema2) => Visit13(schema2, references));
}
function FromFunction5(schema, references) {
  return IsTransform(schema) || Visit13(schema.returns, references) || schema.parameters.some((schema2) => Visit13(schema2, references));
}
function FromIntersect12(schema, references) {
  return IsTransform(schema) || IsTransform(schema.unevaluatedProperties) || schema.allOf.some((schema2) => Visit13(schema2, references));
}
function FromImport9(schema, references) {
  const additional = globalThis.Object.getOwnPropertyNames(schema.$defs).reduce((result, key) => [...result, schema.$defs[key]], []);
  const target = schema.$defs[schema.$ref];
  return IsTransform(schema) || Visit13(target, [...additional, ...references]);
}
function FromIterator5(schema, references) {
  return IsTransform(schema) || Visit13(schema.items, references);
}
function FromNot7(schema, references) {
  return IsTransform(schema) || Visit13(schema.not, references);
}
function FromObject11(schema, references) {
  return IsTransform(schema) || Object.values(schema.properties).some((schema2) => Visit13(schema2, references)) || IsSchema(schema.additionalProperties) && Visit13(schema.additionalProperties, references);
}
function FromPromise5(schema, references) {
  return IsTransform(schema) || Visit13(schema.item, references);
}
function FromRecord10(schema, references) {
  const pattern = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const property = schema.patternProperties[pattern];
  return IsTransform(schema) || Visit13(property, references) || IsSchema(schema.additionalProperties) && IsTransform(schema.additionalProperties);
}
function FromRef10(schema, references) {
  if (IsTransform(schema))
    return true;
  return Visit13(Deref(schema, references), references);
}
function FromThis9(schema, references) {
  if (IsTransform(schema))
    return true;
  return Visit13(Deref(schema, references), references);
}
function FromTuple12(schema, references) {
  return IsTransform(schema) || !IsUndefined(schema.items) && schema.items.some((schema2) => Visit13(schema2, references));
}
function FromUnion14(schema, references) {
  return IsTransform(schema) || schema.anyOf.some((schema2) => Visit13(schema2, references));
}
function Visit13(schema, references) {
  const references_ = Pushref(schema, references);
  const schema_ = schema;
  if (schema.$id && visited.has(schema.$id))
    return false;
  if (schema.$id)
    visited.add(schema.$id);
  switch (schema[Kind]) {
    case "Array":
      return FromArray13(schema_, references_);
    case "AsyncIterator":
      return FromAsyncIterator5(schema_, references_);
    case "Constructor":
      return FromConstructor6(schema_, references_);
    case "Function":
      return FromFunction5(schema_, references_);
    case "Import":
      return FromImport9(schema_, references_);
    case "Intersect":
      return FromIntersect12(schema_, references_);
    case "Iterator":
      return FromIterator5(schema_, references_);
    case "Not":
      return FromNot7(schema_, references_);
    case "Object":
      return FromObject11(schema_, references_);
    case "Promise":
      return FromPromise5(schema_, references_);
    case "Record":
      return FromRecord10(schema_, references_);
    case "Ref":
      return FromRef10(schema_, references_);
    case "This":
      return FromThis9(schema_, references_);
    case "Tuple":
      return FromTuple12(schema_, references_);
    case "Union":
      return FromUnion14(schema_, references_);
    default:
      return IsTransform(schema);
  }
}
var visited = /* @__PURE__ */ new Set();
function HasTransform(schema, references) {
  visited.clear();
  return Visit13(schema, references);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/value/decode/decode.mjs
function Decode(...args) {
  const [schema, references, value] = args.length === 3 ? [args[0], args[1], args[2]] : [args[0], [], args[1]];
  if (!Check(schema, references, value))
    throw new TransformDecodeCheckError(schema, value, Errors(schema, references, value).First());
  return HasTransform(schema, references) ? TransformDecode(schema, references, value) : value;
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/value/default/default.mjs
function ValueOrDefault(schema, value) {
  const defaultValue = HasPropertyKey(schema, "default") ? schema.default : void 0;
  const clone = IsFunction(defaultValue) ? defaultValue() : Clone2(defaultValue);
  return IsUndefined(value) ? clone : IsObject(value) && IsObject(clone) ? Object.assign(clone, value) : value;
}
function HasDefaultProperty(schema) {
  return IsKind(schema) && "default" in schema;
}
function FromArray14(schema, references, value) {
  if (IsArray(value)) {
    for (let i15 = 0; i15 < value.length; i15++) {
      value[i15] = Visit14(schema.items, references, value[i15]);
    }
    return value;
  }
  const defaulted = ValueOrDefault(schema, value);
  if (!IsArray(defaulted))
    return defaulted;
  for (let i15 = 0; i15 < defaulted.length; i15++) {
    defaulted[i15] = Visit14(schema.items, references, defaulted[i15]);
  }
  return defaulted;
}
function FromDate7(schema, references, value) {
  return IsDate(value) ? value : ValueOrDefault(schema, value);
}
function FromImport10(schema, references, value) {
  const definitions = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  return Visit14(target, [...references, ...definitions], value);
}
function FromIntersect13(schema, references, value) {
  const defaulted = ValueOrDefault(schema, value);
  return schema.allOf.reduce((acc, schema2) => {
    const next = Visit14(schema2, references, defaulted);
    return IsObject(next) ? { ...acc, ...next } : next;
  }, {});
}
function FromObject12(schema, references, value) {
  const defaulted = ValueOrDefault(schema, value);
  if (!IsObject(defaulted))
    return defaulted;
  const knownPropertyKeys = Object.getOwnPropertyNames(schema.properties);
  for (const key of knownPropertyKeys) {
    const propertyValue = Visit14(schema.properties[key], references, defaulted[key]);
    if (IsUndefined(propertyValue))
      continue;
    defaulted[key] = Visit14(schema.properties[key], references, defaulted[key]);
  }
  if (!HasDefaultProperty(schema.additionalProperties))
    return defaulted;
  for (const key of Object.getOwnPropertyNames(defaulted)) {
    if (knownPropertyKeys.includes(key))
      continue;
    defaulted[key] = Visit14(schema.additionalProperties, references, defaulted[key]);
  }
  return defaulted;
}
function FromRecord11(schema, references, value) {
  const defaulted = ValueOrDefault(schema, value);
  if (!IsObject(defaulted))
    return defaulted;
  const additionalPropertiesSchema = schema.additionalProperties;
  const [propertyKeyPattern, propertySchema] = Object.entries(schema.patternProperties)[0];
  const knownPropertyKey = new RegExp(propertyKeyPattern);
  for (const key of Object.getOwnPropertyNames(defaulted)) {
    if (!(knownPropertyKey.test(key) && HasDefaultProperty(propertySchema)))
      continue;
    defaulted[key] = Visit14(propertySchema, references, defaulted[key]);
  }
  if (!HasDefaultProperty(additionalPropertiesSchema))
    return defaulted;
  for (const key of Object.getOwnPropertyNames(defaulted)) {
    if (knownPropertyKey.test(key))
      continue;
    defaulted[key] = Visit14(additionalPropertiesSchema, references, defaulted[key]);
  }
  return defaulted;
}
function FromRef11(schema, references, value) {
  return Visit14(Deref(schema, references), references, ValueOrDefault(schema, value));
}
function FromThis10(schema, references, value) {
  return Visit14(Deref(schema, references), references, value);
}
function FromTuple13(schema, references, value) {
  const defaulted = ValueOrDefault(schema, value);
  if (!IsArray(defaulted) || IsUndefined(schema.items))
    return defaulted;
  const [items, max] = [schema.items, Math.max(schema.items.length, defaulted.length)];
  for (let i15 = 0; i15 < max; i15++) {
    if (i15 < items.length)
      defaulted[i15] = Visit14(items[i15], references, defaulted[i15]);
  }
  return defaulted;
}
function FromUnion15(schema, references, value) {
  const defaulted = ValueOrDefault(schema, value);
  for (const inner of schema.anyOf) {
    const result = Visit14(inner, references, Clone2(defaulted));
    if (Check(inner, references, result)) {
      return result;
    }
  }
  return defaulted;
}
function Visit14(schema, references, value) {
  const references_ = Pushref(schema, references);
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Array":
      return FromArray14(schema_, references_, value);
    case "Date":
      return FromDate7(schema_, references_, value);
    case "Import":
      return FromImport10(schema_, references_, value);
    case "Intersect":
      return FromIntersect13(schema_, references_, value);
    case "Object":
      return FromObject12(schema_, references_, value);
    case "Record":
      return FromRecord11(schema_, references_, value);
    case "Ref":
      return FromRef11(schema_, references_, value);
    case "This":
      return FromThis10(schema_, references_, value);
    case "Tuple":
      return FromTuple13(schema_, references_, value);
    case "Union":
      return FromUnion15(schema_, references_, value);
    default:
      return ValueOrDefault(schema_, value);
  }
}
function Default5(...args) {
  return args.length === 3 ? Visit14(args[0], args[1], args[2]) : Visit14(args[0], [], args[1]);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/value/pointer/pointer.mjs
var pointer_exports = {};
__export(pointer_exports, {
  Delete: () => Delete3,
  Format: () => Format,
  Get: () => Get3,
  Has: () => Has3,
  Set: () => Set4,
  ValuePointerRootDeleteError: () => ValuePointerRootDeleteError,
  ValuePointerRootSetError: () => ValuePointerRootSetError
});
var ValuePointerRootSetError = class extends TypeBoxError {
  constructor(value, path, update) {
    super("Cannot set root value");
    this.value = value;
    this.path = path;
    this.update = update;
  }
};
var ValuePointerRootDeleteError = class extends TypeBoxError {
  constructor(value, path) {
    super("Cannot delete root value");
    this.value = value;
    this.path = path;
  }
};
function Escape2(component) {
  return component.indexOf("~") === -1 ? component : component.replace(/~1/g, "/").replace(/~0/g, "~");
}
function* Format(pointer) {
  if (pointer === "")
    return;
  let [start, end] = [0, 0];
  for (let i15 = 0; i15 < pointer.length; i15++) {
    const char = pointer.charAt(i15);
    if (char === "/") {
      if (i15 === 0) {
        start = i15 + 1;
      } else {
        end = i15;
        yield Escape2(pointer.slice(start, end));
        start = i15 + 1;
      }
    } else {
      end = i15;
    }
  }
  yield Escape2(pointer.slice(start));
}
function Set4(value, pointer, update) {
  if (pointer === "")
    throw new ValuePointerRootSetError(value, pointer, update);
  let [owner, next, key] = [null, value, ""];
  for (const component of Format(pointer)) {
    if (next[component] === void 0)
      next[component] = {};
    owner = next;
    next = next[component];
    key = component;
  }
  owner[key] = update;
}
function Delete3(value, pointer) {
  if (pointer === "")
    throw new ValuePointerRootDeleteError(value, pointer);
  let [owner, next, key] = [null, value, ""];
  for (const component of Format(pointer)) {
    if (next[component] === void 0 || next[component] === null)
      return;
    owner = next;
    next = next[component];
    key = component;
  }
  if (Array.isArray(owner)) {
    const index = parseInt(key);
    owner.splice(index, 1);
  } else {
    delete owner[key];
  }
}
function Has3(value, pointer) {
  if (pointer === "")
    return true;
  let [owner, next, key] = [null, value, ""];
  for (const component of Format(pointer)) {
    if (next[component] === void 0)
      return false;
    owner = next;
    next = next[component];
    key = component;
  }
  return Object.getOwnPropertyNames(owner).includes(key);
}
function Get3(value, pointer) {
  if (pointer === "")
    return value;
  let current = value;
  for (const component of Format(pointer)) {
    if (current[component] === void 0)
      return void 0;
    current = current[component];
  }
  return current;
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/value/equal/equal.mjs
function ObjectType3(left, right) {
  if (!IsObject(right))
    return false;
  const leftKeys = [...Object.keys(left), ...Object.getOwnPropertySymbols(left)];
  const rightKeys = [...Object.keys(right), ...Object.getOwnPropertySymbols(right)];
  if (leftKeys.length !== rightKeys.length)
    return false;
  return leftKeys.every((key) => Equal(left[key], right[key]));
}
function DateType3(left, right) {
  return IsDate(right) && left.getTime() === right.getTime();
}
function ArrayType3(left, right) {
  if (!IsArray(right) || left.length !== right.length)
    return false;
  return left.every((value, index) => Equal(value, right[index]));
}
function TypedArrayType(left, right) {
  if (!IsTypedArray(right) || left.length !== right.length || Object.getPrototypeOf(left).constructor.name !== Object.getPrototypeOf(right).constructor.name)
    return false;
  return left.every((value, index) => Equal(value, right[index]));
}
function ValueType(left, right) {
  return left === right;
}
function Equal(left, right) {
  if (IsDate(left))
    return DateType3(left, right);
  if (IsTypedArray(left))
    return TypedArrayType(left, right);
  if (IsArray(left))
    return ArrayType3(left, right);
  if (IsObject(left))
    return ObjectType3(left, right);
  if (IsValueType(left))
    return ValueType(left, right);
  throw new Error("ValueEquals: Unable to compare value");
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/value/delta/delta.mjs
var Insert = Object2({
  type: Literal("insert"),
  path: String2(),
  value: Unknown()
});
var Update = Object2({
  type: Literal("update"),
  path: String2(),
  value: Unknown()
});
var Delete4 = Object2({
  type: Literal("delete"),
  path: String2()
});
var Edit = Union([Insert, Update, Delete4]);
var ValueDiffError = class extends TypeBoxError {
  constructor(value, message) {
    super(message);
    this.value = value;
  }
};
function CreateUpdate(path, value) {
  return { type: "update", path, value };
}
function CreateInsert(path, value) {
  return { type: "insert", path, value };
}
function CreateDelete(path) {
  return { type: "delete", path };
}
function AssertDiffable(value) {
  if (globalThis.Object.getOwnPropertySymbols(value).length > 0)
    throw new ValueDiffError(value, "Cannot diff objects with symbols");
}
function* ObjectType4(path, current, next) {
  AssertDiffable(current);
  AssertDiffable(next);
  if (!IsStandardObject(next))
    return yield CreateUpdate(path, next);
  const currentKeys = globalThis.Object.getOwnPropertyNames(current);
  const nextKeys = globalThis.Object.getOwnPropertyNames(next);
  for (const key of nextKeys) {
    if (HasPropertyKey(current, key))
      continue;
    yield CreateInsert(`${path}/${key}`, next[key]);
  }
  for (const key of currentKeys) {
    if (!HasPropertyKey(next, key))
      continue;
    if (Equal(current, next))
      continue;
    yield* Visit15(`${path}/${key}`, current[key], next[key]);
  }
  for (const key of currentKeys) {
    if (HasPropertyKey(next, key))
      continue;
    yield CreateDelete(`${path}/${key}`);
  }
}
function* ArrayType4(path, current, next) {
  if (!IsArray(next))
    return yield CreateUpdate(path, next);
  for (let i15 = 0; i15 < Math.min(current.length, next.length); i15++) {
    yield* Visit15(`${path}/${i15}`, current[i15], next[i15]);
  }
  for (let i15 = 0; i15 < next.length; i15++) {
    if (i15 < current.length)
      continue;
    yield CreateInsert(`${path}/${i15}`, next[i15]);
  }
  for (let i15 = current.length - 1; i15 >= 0; i15--) {
    if (i15 < next.length)
      continue;
    yield CreateDelete(`${path}/${i15}`);
  }
}
function* TypedArrayType2(path, current, next) {
  if (!IsTypedArray(next) || current.length !== next.length || globalThis.Object.getPrototypeOf(current).constructor.name !== globalThis.Object.getPrototypeOf(next).constructor.name)
    return yield CreateUpdate(path, next);
  for (let i15 = 0; i15 < Math.min(current.length, next.length); i15++) {
    yield* Visit15(`${path}/${i15}`, current[i15], next[i15]);
  }
}
function* ValueType2(path, current, next) {
  if (current === next)
    return;
  yield CreateUpdate(path, next);
}
function* Visit15(path, current, next) {
  if (IsStandardObject(current))
    return yield* ObjectType4(path, current, next);
  if (IsArray(current))
    return yield* ArrayType4(path, current, next);
  if (IsTypedArray(current))
    return yield* TypedArrayType2(path, current, next);
  if (IsValueType(current))
    return yield* ValueType2(path, current, next);
  throw new ValueDiffError(current, "Unable to diff value");
}
function Diff(current, next) {
  return [...Visit15("", current, next)];
}
function IsRootUpdate(edits) {
  return edits.length > 0 && edits[0].path === "" && edits[0].type === "update";
}
function IsIdentity(edits) {
  return edits.length === 0;
}
function Patch(current, edits) {
  if (IsRootUpdate(edits)) {
    return Clone2(edits[0].value);
  }
  if (IsIdentity(edits)) {
    return Clone2(current);
  }
  const clone = Clone2(current);
  for (const edit of edits) {
    switch (edit.type) {
      case "insert": {
        pointer_exports.Set(clone, edit.path, edit.value);
        break;
      }
      case "update": {
        pointer_exports.Set(clone, edit.path, edit.value);
        break;
      }
      case "delete": {
        pointer_exports.Delete(clone, edit.path);
        break;
      }
    }
  }
  return clone;
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/value/encode/encode.mjs
function Encode(...args) {
  const [schema, references, value] = args.length === 3 ? [args[0], args[1], args[2]] : [args[0], [], args[1]];
  const encoded = HasTransform(schema, references) ? TransformEncode(schema, references, value) : value;
  if (!Check(schema, references, encoded))
    throw new TransformEncodeCheckError(schema, encoded, Errors(schema, references, encoded).First());
  return encoded;
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/value/mutate/mutate.mjs
function IsStandardObject2(value) {
  return IsObject(value) && !IsArray(value);
}
var ValueMutateError = class extends TypeBoxError {
  constructor(message) {
    super(message);
  }
};
function ObjectType5(root, path, current, next) {
  if (!IsStandardObject2(current)) {
    pointer_exports.Set(root, path, Clone2(next));
  } else {
    const currentKeys = Object.getOwnPropertyNames(current);
    const nextKeys = Object.getOwnPropertyNames(next);
    for (const currentKey of currentKeys) {
      if (!nextKeys.includes(currentKey)) {
        delete current[currentKey];
      }
    }
    for (const nextKey of nextKeys) {
      if (!currentKeys.includes(nextKey)) {
        current[nextKey] = null;
      }
    }
    for (const nextKey of nextKeys) {
      Visit16(root, `${path}/${nextKey}`, current[nextKey], next[nextKey]);
    }
  }
}
function ArrayType5(root, path, current, next) {
  if (!IsArray(current)) {
    pointer_exports.Set(root, path, Clone2(next));
  } else {
    for (let index = 0; index < next.length; index++) {
      Visit16(root, `${path}/${index}`, current[index], next[index]);
    }
    current.splice(next.length);
  }
}
function TypedArrayType3(root, path, current, next) {
  if (IsTypedArray(current) && current.length === next.length) {
    for (let i15 = 0; i15 < current.length; i15++) {
      current[i15] = next[i15];
    }
  } else {
    pointer_exports.Set(root, path, Clone2(next));
  }
}
function ValueType3(root, path, current, next) {
  if (current === next)
    return;
  pointer_exports.Set(root, path, next);
}
function Visit16(root, path, current, next) {
  if (IsArray(next))
    return ArrayType5(root, path, current, next);
  if (IsTypedArray(next))
    return TypedArrayType3(root, path, current, next);
  if (IsStandardObject2(next))
    return ObjectType5(root, path, current, next);
  if (IsValueType(next))
    return ValueType3(root, path, current, next);
}
function IsNonMutableValue(value) {
  return IsTypedArray(value) || IsValueType(value);
}
function IsMismatchedValue(current, next) {
  return IsStandardObject2(current) && IsArray(next) || IsArray(current) && IsStandardObject2(next);
}
function Mutate(current, next) {
  if (IsNonMutableValue(current) || IsNonMutableValue(next))
    throw new ValueMutateError("Only object and array types can be mutated at the root level");
  if (IsMismatchedValue(current, next))
    throw new ValueMutateError("Cannot assign due type mismatch of assignable values");
  Visit16(current, "", current, next);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/value/parse/parse.mjs
var ParseError = class extends TypeBoxError {
  constructor(message) {
    super(message);
  }
};
var ParseRegistry;
(function(ParseRegistry2) {
  const registry = /* @__PURE__ */ new Map([
    ["Assert", (type, references, value) => {
      Assert(type, references, value);
      return value;
    }],
    ["Cast", (type, references, value) => Cast(type, references, value)],
    ["Clean", (type, references, value) => Clean(type, references, value)],
    ["Clone", (_type, _references, value) => Clone2(value)],
    ["Convert", (type, references, value) => Convert(type, references, value)],
    ["Decode", (type, references, value) => HasTransform(type, references) ? TransformDecode(type, references, value) : value],
    ["Default", (type, references, value) => Default5(type, references, value)],
    ["Encode", (type, references, value) => HasTransform(type, references) ? TransformEncode(type, references, value) : value]
  ]);
  function Delete5(key) {
    registry.delete(key);
  }
  ParseRegistry2.Delete = Delete5;
  function Set5(key, callback) {
    registry.set(key, callback);
  }
  ParseRegistry2.Set = Set5;
  function Get4(key) {
    return registry.get(key);
  }
  ParseRegistry2.Get = Get4;
})(ParseRegistry || (ParseRegistry = {}));
var ParseDefault = [
  "Clone",
  "Clean",
  "Default",
  "Convert",
  "Assert",
  "Decode"
];
function ParseValue(operations, type, references, value) {
  return operations.reduce((value2, operationKey) => {
    const operation = ParseRegistry.Get(operationKey);
    if (IsUndefined(operation))
      throw new ParseError(`Unable to find Parse operation '${operationKey}'`);
    return operation(type, references, value2);
  }, value);
}
function Parse(...args) {
  const [operations, schema, references, value] = args.length === 4 ? [args[0], args[1], args[2], args[3]] : args.length === 3 ? IsArray(args[0]) ? [args[0], args[1], [], args[2]] : [ParseDefault, args[0], args[1], args[2]] : args.length === 2 ? [ParseDefault, args[0], [], args[1]] : (() => {
    throw new ParseError("Invalid Arguments");
  })();
  return ParseValue(operations, schema, references, value);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/value/value/value.mjs
var value_exports2 = {};
__export(value_exports2, {
  Assert: () => Assert,
  Cast: () => Cast,
  Check: () => Check,
  Clean: () => Clean,
  Clone: () => Clone2,
  Convert: () => Convert,
  Create: () => Create2,
  Decode: () => Decode,
  Default: () => Default5,
  Diff: () => Diff,
  Edit: () => Edit,
  Encode: () => Encode,
  Equal: () => Equal,
  Errors: () => Errors,
  Hash: () => Hash,
  Mutate: () => Mutate,
  Parse: () => Parse,
  Patch: () => Patch,
  ValueErrorIterator: () => ValueErrorIterator
});

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/schemas/typebox-coerce.js
var coerceValue = (schema, value) => {
  return value_exports2.Cast(schema, value_exports2.Convert(schema, value));
};

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/clone/type.mjs
function CloneType(schema, options) {
  return options === void 0 ? Clone(schema) : Clone({ ...options, ...schema });
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/argument/argument.mjs
function Argument(index) {
  return CreateType({ [Kind]: "Argument", index });
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/awaited/awaited.mjs
function FromComputed2(target, parameters) {
  return Computed("Awaited", [Computed(target, parameters)]);
}
function FromRef12($ref) {
  return Computed("Awaited", [Ref($ref)]);
}
function FromIntersect14(types) {
  return Intersect(FromRest4(types));
}
function FromUnion16(types) {
  return Union(FromRest4(types));
}
function FromPromise6(type) {
  return Awaited(type);
}
function FromRest4(types) {
  return types.map((type) => Awaited(type));
}
function Awaited(type, options) {
  return CreateType(IsComputed(type) ? FromComputed2(type.target, type.parameters) : IsIntersect(type) ? FromIntersect14(type.allOf) : IsUnion(type) ? FromUnion16(type.anyOf) : IsPromise2(type) ? FromPromise6(type.item) : IsRef(type) ? FromRef12(type.$ref) : type, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/composite/composite.mjs
function CompositeKeys(T9) {
  const Acc = [];
  for (const L6 of T9)
    Acc.push(...KeyOfPropertyKeys(L6));
  return SetDistinct(Acc);
}
function FilterNever(T9) {
  return T9.filter((L6) => !IsNever(L6));
}
function CompositeProperty(T9, K6) {
  const Acc = [];
  for (const L6 of T9)
    Acc.push(...IndexFromPropertyKeys(L6, [K6]));
  return FilterNever(Acc);
}
function CompositeProperties(T9, K6) {
  const Acc = {};
  for (const L6 of K6) {
    Acc[L6] = IntersectEvaluated(CompositeProperty(T9, L6));
  }
  return Acc;
}
function Composite(T9, options) {
  const K6 = CompositeKeys(T9);
  const P10 = CompositeProperties(T9, K6);
  const R8 = Object2(P10, options);
  return R8;
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/date/date.mjs
function Date2(options) {
  return CreateType({ [Kind]: "Date", type: "Date" }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/null/null.mjs
function Null(options) {
  return CreateType({ [Kind]: "Null", type: "null" }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/symbol/symbol.mjs
function Symbol2(options) {
  return CreateType({ [Kind]: "Symbol", type: "symbol" }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/undefined/undefined.mjs
function Undefined(options) {
  return CreateType({ [Kind]: "Undefined", type: "undefined" }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/uint8array/uint8array.mjs
function Uint8Array2(options) {
  return CreateType({ [Kind]: "Uint8Array", type: "Uint8Array" }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/const/const.mjs
function FromArray15(T9) {
  return T9.map((L6) => FromValue2(L6, false));
}
function FromProperties8(value) {
  const Acc = {};
  for (const K6 of globalThis.Object.getOwnPropertyNames(value))
    Acc[K6] = Readonly(FromValue2(value[K6], false));
  return Acc;
}
function ConditionalReadonly(T9, root) {
  return root === true ? T9 : Readonly(T9);
}
function FromValue2(value, root) {
  return IsAsyncIterator2(value) ? ConditionalReadonly(Any(), root) : IsIterator2(value) ? ConditionalReadonly(Any(), root) : IsArray2(value) ? Readonly(Tuple(FromArray15(value))) : IsUint8Array2(value) ? Uint8Array2() : IsDate2(value) ? Date2() : IsObject2(value) ? ConditionalReadonly(Object2(FromProperties8(value)), root) : IsFunction2(value) ? ConditionalReadonly(Function2([], Unknown()), root) : IsUndefined2(value) ? Undefined() : IsNull2(value) ? Null() : IsSymbol2(value) ? Symbol2() : IsBigInt2(value) ? BigInt2() : IsNumber2(value) ? Literal(value) : IsBoolean2(value) ? Literal(value) : IsString2(value) ? Literal(value) : Object2({});
}
function Const(T9, options) {
  return CreateType(FromValue2(T9, true), options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/constructor-parameters/constructor-parameters.mjs
function ConstructorParameters(schema, options) {
  return IsConstructor(schema) ? Tuple(schema.parameters, options) : Never(options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/enum/enum.mjs
function Enum(item, options) {
  if (IsUndefined2(item))
    throw new Error("Enum undefined or empty");
  const values1 = globalThis.Object.getOwnPropertyNames(item).filter((key) => isNaN(key)).map((key) => item[key]);
  const values2 = [...new Set(values1)];
  const anyOf = values2.map((value) => Literal(value));
  return Union(anyOf, { ...options, [Hint]: "Enum" });
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/exclude/exclude-from-template-literal.mjs
function ExcludeFromTemplateLiteral(L6, R8) {
  return Exclude(TemplateLiteralToUnion(L6), R8);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/exclude/exclude.mjs
function ExcludeRest(L6, R8) {
  const excluded = L6.filter((inner) => ExtendsCheck(inner, R8) === ExtendsResult.False);
  return excluded.length === 1 ? excluded[0] : Union(excluded);
}
function Exclude(L6, R8, options = {}) {
  if (IsTemplateLiteral(L6))
    return CreateType(ExcludeFromTemplateLiteral(L6, R8), options);
  if (IsMappedResult(L6))
    return CreateType(ExcludeFromMappedResult(L6, R8), options);
  return CreateType(IsUnion(L6) ? ExcludeRest(L6.anyOf, R8) : ExtendsCheck(L6, R8) !== ExtendsResult.False ? Never() : L6, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/exclude/exclude-from-mapped-result.mjs
function FromProperties9(P10, U7) {
  const Acc = {};
  for (const K22 of globalThis.Object.getOwnPropertyNames(P10))
    Acc[K22] = Exclude(P10[K22], U7);
  return Acc;
}
function FromMappedResult7(R8, T9) {
  return FromProperties9(R8.properties, T9);
}
function ExcludeFromMappedResult(R8, T9) {
  const P10 = FromMappedResult7(R8, T9);
  return MappedResult(P10);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/extract/extract-from-template-literal.mjs
function ExtractFromTemplateLiteral(L6, R8) {
  return Extract(TemplateLiteralToUnion(L6), R8);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/extract/extract.mjs
function ExtractRest(L6, R8) {
  const extracted = L6.filter((inner) => ExtendsCheck(inner, R8) !== ExtendsResult.False);
  return extracted.length === 1 ? extracted[0] : Union(extracted);
}
function Extract(L6, R8, options) {
  if (IsTemplateLiteral(L6))
    return CreateType(ExtractFromTemplateLiteral(L6, R8), options);
  if (IsMappedResult(L6))
    return CreateType(ExtractFromMappedResult(L6, R8), options);
  return CreateType(IsUnion(L6) ? ExtractRest(L6.anyOf, R8) : ExtendsCheck(L6, R8) !== ExtendsResult.False ? L6 : Never(), options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/extract/extract-from-mapped-result.mjs
function FromProperties10(P10, T9) {
  const Acc = {};
  for (const K22 of globalThis.Object.getOwnPropertyNames(P10))
    Acc[K22] = Extract(P10[K22], T9);
  return Acc;
}
function FromMappedResult8(R8, T9) {
  return FromProperties10(R8.properties, T9);
}
function ExtractFromMappedResult(R8, T9) {
  const P10 = FromMappedResult8(R8, T9);
  return MappedResult(P10);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/instance-type/instance-type.mjs
function InstanceType(schema, options) {
  return IsConstructor(schema) ? CreateType(schema.returns, options) : Never(options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/readonly-optional/readonly-optional.mjs
function ReadonlyOptional(schema) {
  return Readonly(Optional(schema));
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/record/record.mjs
function RecordCreateFromPattern(pattern, T9, options) {
  return CreateType({ [Kind]: "Record", type: "object", patternProperties: { [pattern]: T9 } }, options);
}
function RecordCreateFromKeys(K6, T9, options) {
  const result = {};
  for (const K22 of K6)
    result[K22] = T9;
  return Object2(result, { ...options, [Hint]: "Record" });
}
function FromTemplateLiteralKey(K6, T9, options) {
  return IsTemplateLiteralFinite(K6) ? RecordCreateFromKeys(IndexPropertyKeys(K6), T9, options) : RecordCreateFromPattern(K6.pattern, T9, options);
}
function FromUnionKey(key, type, options) {
  return RecordCreateFromKeys(IndexPropertyKeys(Union(key)), type, options);
}
function FromLiteralKey(key, type, options) {
  return RecordCreateFromKeys([key.toString()], type, options);
}
function FromRegExpKey(key, type, options) {
  return RecordCreateFromPattern(key.source, type, options);
}
function FromStringKey(key, type, options) {
  const pattern = IsUndefined2(key.pattern) ? PatternStringExact : key.pattern;
  return RecordCreateFromPattern(pattern, type, options);
}
function FromAnyKey(_13, type, options) {
  return RecordCreateFromPattern(PatternStringExact, type, options);
}
function FromNeverKey(_key, type, options) {
  return RecordCreateFromPattern(PatternNeverExact, type, options);
}
function FromBooleanKey(_key, type, options) {
  return Object2({ true: type, false: type }, options);
}
function FromIntegerKey(_key, type, options) {
  return RecordCreateFromPattern(PatternNumberExact, type, options);
}
function FromNumberKey(_13, type, options) {
  return RecordCreateFromPattern(PatternNumberExact, type, options);
}
function Record(key, type, options = {}) {
  return IsUnion(key) ? FromUnionKey(key.anyOf, type, options) : IsTemplateLiteral(key) ? FromTemplateLiteralKey(key, type, options) : IsLiteral(key) ? FromLiteralKey(key.const, type, options) : IsBoolean3(key) ? FromBooleanKey(key, type, options) : IsInteger2(key) ? FromIntegerKey(key, type, options) : IsNumber3(key) ? FromNumberKey(key, type, options) : IsRegExp2(key) ? FromRegExpKey(key, type, options) : IsString3(key) ? FromStringKey(key, type, options) : IsAny(key) ? FromAnyKey(key, type, options) : IsNever(key) ? FromNeverKey(key, type, options) : Never(options);
}
function RecordPattern(record) {
  return globalThis.Object.getOwnPropertyNames(record.patternProperties)[0];
}
function RecordKey2(type) {
  const pattern = RecordPattern(type);
  return pattern === PatternStringExact ? String2() : pattern === PatternNumberExact ? Number2() : String2({ pattern });
}
function RecordValue2(type) {
  return type.patternProperties[RecordPattern(type)];
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/instantiate/instantiate.mjs
function FromConstructor7(args, type) {
  type.parameters = FromTypes(args, type.parameters);
  type.returns = FromType(args, type.returns);
  return type;
}
function FromFunction6(args, type) {
  type.parameters = FromTypes(args, type.parameters);
  type.returns = FromType(args, type.returns);
  return type;
}
function FromIntersect15(args, type) {
  type.allOf = FromTypes(args, type.allOf);
  return type;
}
function FromUnion17(args, type) {
  type.anyOf = FromTypes(args, type.anyOf);
  return type;
}
function FromTuple14(args, type) {
  if (IsUndefined2(type.items))
    return type;
  type.items = FromTypes(args, type.items);
  return type;
}
function FromArray16(args, type) {
  type.items = FromType(args, type.items);
  return type;
}
function FromAsyncIterator6(args, type) {
  type.items = FromType(args, type.items);
  return type;
}
function FromIterator6(args, type) {
  type.items = FromType(args, type.items);
  return type;
}
function FromPromise7(args, type) {
  type.item = FromType(args, type.item);
  return type;
}
function FromObject13(args, type) {
  const mappedProperties = FromProperties11(args, type.properties);
  return { ...type, ...Object2(mappedProperties) };
}
function FromRecord12(args, type) {
  const mappedKey = FromType(args, RecordKey2(type));
  const mappedValue = FromType(args, RecordValue2(type));
  const result = Record(mappedKey, mappedValue);
  return { ...type, ...result };
}
function FromArgument4(args, argument) {
  return argument.index in args ? args[argument.index] : Unknown();
}
function FromProperty2(args, type) {
  const isReadonly2 = IsReadonly(type);
  const isOptional = IsOptional(type);
  const mapped = FromType(args, type);
  return isReadonly2 && isOptional ? ReadonlyOptional(mapped) : isReadonly2 && !isOptional ? Readonly(mapped) : !isReadonly2 && isOptional ? Optional(mapped) : mapped;
}
function FromProperties11(args, properties) {
  return globalThis.Object.getOwnPropertyNames(properties).reduce((result, key) => {
    return { ...result, [key]: FromProperty2(args, properties[key]) };
  }, {});
}
function FromTypes(args, types) {
  return types.map((type) => FromType(args, type));
}
function FromType(args, type) {
  return IsConstructor(type) ? FromConstructor7(args, type) : IsFunction3(type) ? FromFunction6(args, type) : IsIntersect(type) ? FromIntersect15(args, type) : IsUnion(type) ? FromUnion17(args, type) : IsTuple(type) ? FromTuple14(args, type) : IsArray3(type) ? FromArray16(args, type) : IsAsyncIterator3(type) ? FromAsyncIterator6(args, type) : IsIterator3(type) ? FromIterator6(args, type) : IsPromise2(type) ? FromPromise7(args, type) : IsObject3(type) ? FromObject13(args, type) : IsRecord(type) ? FromRecord12(args, type) : IsArgument(type) ? FromArgument4(args, type) : type;
}
function Instantiate(type, args) {
  return FromType(args, CloneType(type));
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/integer/integer.mjs
function Integer(options) {
  return CreateType({ [Kind]: "Integer", type: "integer" }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/intrinsic/intrinsic-from-mapped-key.mjs
function MappedIntrinsicPropertyKey(K6, M7, options) {
  return {
    [K6]: Intrinsic(Literal(K6), M7, Clone(options))
  };
}
function MappedIntrinsicPropertyKeys(K6, M7, options) {
  const result = K6.reduce((Acc, L6) => {
    return { ...Acc, ...MappedIntrinsicPropertyKey(L6, M7, options) };
  }, {});
  return result;
}
function MappedIntrinsicProperties(T9, M7, options) {
  return MappedIntrinsicPropertyKeys(T9["keys"], M7, options);
}
function IntrinsicFromMappedKey(T9, M7, options) {
  const P10 = MappedIntrinsicProperties(T9, M7, options);
  return MappedResult(P10);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/intrinsic/intrinsic.mjs
function ApplyUncapitalize(value) {
  const [first, rest] = [value.slice(0, 1), value.slice(1)];
  return [first.toLowerCase(), rest].join("");
}
function ApplyCapitalize(value) {
  const [first, rest] = [value.slice(0, 1), value.slice(1)];
  return [first.toUpperCase(), rest].join("");
}
function ApplyUppercase(value) {
  return value.toUpperCase();
}
function ApplyLowercase(value) {
  return value.toLowerCase();
}
function FromTemplateLiteral6(schema, mode, options) {
  const expression = TemplateLiteralParseExact(schema.pattern);
  const finite = IsTemplateLiteralExpressionFinite(expression);
  if (!finite)
    return { ...schema, pattern: FromLiteralValue(schema.pattern, mode) };
  const strings = [...TemplateLiteralExpressionGenerate(expression)];
  const literals = strings.map((value) => Literal(value));
  const mapped = FromRest5(literals, mode);
  const union = Union(mapped);
  return TemplateLiteral([union], options);
}
function FromLiteralValue(value, mode) {
  return typeof value === "string" ? mode === "Uncapitalize" ? ApplyUncapitalize(value) : mode === "Capitalize" ? ApplyCapitalize(value) : mode === "Uppercase" ? ApplyUppercase(value) : mode === "Lowercase" ? ApplyLowercase(value) : value : value.toString();
}
function FromRest5(T9, M7) {
  return T9.map((L6) => Intrinsic(L6, M7));
}
function Intrinsic(schema, mode, options = {}) {
  return (
    // Intrinsic-Mapped-Inference
    IsMappedKey(schema) ? IntrinsicFromMappedKey(schema, mode, options) : (
      // Standard-Inference
      IsTemplateLiteral(schema) ? FromTemplateLiteral6(schema, mode, options) : IsUnion(schema) ? Union(FromRest5(schema.anyOf, mode), options) : IsLiteral(schema) ? Literal(FromLiteralValue(schema.const, mode), options) : (
        // Default Type
        CreateType(schema, options)
      )
    )
  );
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/intrinsic/capitalize.mjs
function Capitalize(T9, options = {}) {
  return Intrinsic(T9, "Capitalize", options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/intrinsic/lowercase.mjs
function Lowercase(T9, options = {}) {
  return Intrinsic(T9, "Lowercase", options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/intrinsic/uncapitalize.mjs
function Uncapitalize(T9, options = {}) {
  return Intrinsic(T9, "Uncapitalize", options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/intrinsic/uppercase.mjs
function Uppercase(T9, options = {}) {
  return Intrinsic(T9, "Uppercase", options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/omit/omit-from-mapped-result.mjs
function FromProperties12(properties, propertyKeys, options) {
  const result = {};
  for (const K22 of globalThis.Object.getOwnPropertyNames(properties))
    result[K22] = Omit(properties[K22], propertyKeys, Clone(options));
  return result;
}
function FromMappedResult9(mappedResult, propertyKeys, options) {
  return FromProperties12(mappedResult.properties, propertyKeys, options);
}
function OmitFromMappedResult(mappedResult, propertyKeys, options) {
  const properties = FromMappedResult9(mappedResult, propertyKeys, options);
  return MappedResult(properties);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/omit/omit.mjs
function FromIntersect16(types, propertyKeys) {
  return types.map((type) => OmitResolve(type, propertyKeys));
}
function FromUnion18(types, propertyKeys) {
  return types.map((type) => OmitResolve(type, propertyKeys));
}
function FromProperty3(properties, key) {
  const { [key]: _13, ...R8 } = properties;
  return R8;
}
function FromProperties13(properties, propertyKeys) {
  return propertyKeys.reduce((T9, K22) => FromProperty3(T9, K22), properties);
}
function FromObject14(properties, propertyKeys) {
  const options = Discard(properties, [TransformKind, "$id", "required", "properties"]);
  const omittedProperties = FromProperties13(properties["properties"], propertyKeys);
  return Object2(omittedProperties, options);
}
function UnionFromPropertyKeys(propertyKeys) {
  const result = propertyKeys.reduce((result2, key) => IsLiteralValue(key) ? [...result2, Literal(key)] : result2, []);
  return Union(result);
}
function OmitResolve(properties, propertyKeys) {
  return IsIntersect(properties) ? Intersect(FromIntersect16(properties.allOf, propertyKeys)) : IsUnion(properties) ? Union(FromUnion18(properties.anyOf, propertyKeys)) : IsObject3(properties) ? FromObject14(properties, propertyKeys) : Object2({});
}
function Omit(type, key, options) {
  const typeKey = IsArray2(key) ? UnionFromPropertyKeys(key) : key;
  const propertyKeys = IsSchema(key) ? IndexPropertyKeys(key) : key;
  const isTypeRef = IsRef(type);
  const isKeyRef = IsRef(key);
  return IsMappedResult(type) ? OmitFromMappedResult(type, propertyKeys, options) : IsMappedKey(key) ? OmitFromMappedKey(type, key, options) : isTypeRef && isKeyRef ? Computed("Omit", [type, typeKey], options) : !isTypeRef && isKeyRef ? Computed("Omit", [type, typeKey], options) : isTypeRef && !isKeyRef ? Computed("Omit", [type, typeKey], options) : CreateType({ ...OmitResolve(type, propertyKeys), ...options });
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/omit/omit-from-mapped-key.mjs
function FromPropertyKey2(type, key, options) {
  return { [key]: Omit(type, [key], Clone(options)) };
}
function FromPropertyKeys2(type, propertyKeys, options) {
  return propertyKeys.reduce((Acc, LK) => {
    return { ...Acc, ...FromPropertyKey2(type, LK, options) };
  }, {});
}
function FromMappedKey3(type, mappedKey, options) {
  return FromPropertyKeys2(type, mappedKey.keys, options);
}
function OmitFromMappedKey(type, mappedKey, options) {
  const properties = FromMappedKey3(type, mappedKey, options);
  return MappedResult(properties);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/pick/pick-from-mapped-result.mjs
function FromProperties14(properties, propertyKeys, options) {
  const result = {};
  for (const K22 of globalThis.Object.getOwnPropertyNames(properties))
    result[K22] = Pick(properties[K22], propertyKeys, Clone(options));
  return result;
}
function FromMappedResult10(mappedResult, propertyKeys, options) {
  return FromProperties14(mappedResult.properties, propertyKeys, options);
}
function PickFromMappedResult(mappedResult, propertyKeys, options) {
  const properties = FromMappedResult10(mappedResult, propertyKeys, options);
  return MappedResult(properties);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/pick/pick.mjs
function FromIntersect17(types, propertyKeys) {
  return types.map((type) => PickResolve(type, propertyKeys));
}
function FromUnion19(types, propertyKeys) {
  return types.map((type) => PickResolve(type, propertyKeys));
}
function FromProperties15(properties, propertyKeys) {
  const result = {};
  for (const K22 of propertyKeys)
    if (K22 in properties)
      result[K22] = properties[K22];
  return result;
}
function FromObject15(T9, K6) {
  const options = Discard(T9, [TransformKind, "$id", "required", "properties"]);
  const properties = FromProperties15(T9["properties"], K6);
  return Object2(properties, options);
}
function UnionFromPropertyKeys2(propertyKeys) {
  const result = propertyKeys.reduce((result2, key) => IsLiteralValue(key) ? [...result2, Literal(key)] : result2, []);
  return Union(result);
}
function PickResolve(properties, propertyKeys) {
  return IsIntersect(properties) ? Intersect(FromIntersect17(properties.allOf, propertyKeys)) : IsUnion(properties) ? Union(FromUnion19(properties.anyOf, propertyKeys)) : IsObject3(properties) ? FromObject15(properties, propertyKeys) : Object2({});
}
function Pick(type, key, options) {
  const typeKey = IsArray2(key) ? UnionFromPropertyKeys2(key) : key;
  const propertyKeys = IsSchema(key) ? IndexPropertyKeys(key) : key;
  const isTypeRef = IsRef(type);
  const isKeyRef = IsRef(key);
  return IsMappedResult(type) ? PickFromMappedResult(type, propertyKeys, options) : IsMappedKey(key) ? PickFromMappedKey(type, key, options) : isTypeRef && isKeyRef ? Computed("Pick", [type, typeKey], options) : !isTypeRef && isKeyRef ? Computed("Pick", [type, typeKey], options) : isTypeRef && !isKeyRef ? Computed("Pick", [type, typeKey], options) : CreateType({ ...PickResolve(type, propertyKeys), ...options });
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/pick/pick-from-mapped-key.mjs
function FromPropertyKey3(type, key, options) {
  return {
    [key]: Pick(type, [key], Clone(options))
  };
}
function FromPropertyKeys3(type, propertyKeys, options) {
  return propertyKeys.reduce((result, leftKey) => {
    return { ...result, ...FromPropertyKey3(type, leftKey, options) };
  }, {});
}
function FromMappedKey4(type, mappedKey, options) {
  return FromPropertyKeys3(type, mappedKey.keys, options);
}
function PickFromMappedKey(type, mappedKey, options) {
  const properties = FromMappedKey4(type, mappedKey, options);
  return MappedResult(properties);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/partial/partial.mjs
function FromComputed3(target, parameters) {
  return Computed("Partial", [Computed(target, parameters)]);
}
function FromRef13($ref) {
  return Computed("Partial", [Ref($ref)]);
}
function FromProperties16(properties) {
  const partialProperties = {};
  for (const K6 of globalThis.Object.getOwnPropertyNames(properties))
    partialProperties[K6] = Optional(properties[K6]);
  return partialProperties;
}
function FromObject16(type) {
  const options = Discard(type, [TransformKind, "$id", "required", "properties"]);
  const properties = FromProperties16(type["properties"]);
  return Object2(properties, options);
}
function FromRest6(types) {
  return types.map((type) => PartialResolve(type));
}
function PartialResolve(type) {
  return (
    // Mappable
    IsComputed(type) ? FromComputed3(type.target, type.parameters) : IsRef(type) ? FromRef13(type.$ref) : IsIntersect(type) ? Intersect(FromRest6(type.allOf)) : IsUnion(type) ? Union(FromRest6(type.anyOf)) : IsObject3(type) ? FromObject16(type) : (
      // Intrinsic
      IsBigInt3(type) ? type : IsBoolean3(type) ? type : IsInteger2(type) ? type : IsLiteral(type) ? type : IsNull3(type) ? type : IsNumber3(type) ? type : IsString3(type) ? type : IsSymbol3(type) ? type : IsUndefined3(type) ? type : (
        // Passthrough
        Object2({})
      )
    )
  );
}
function Partial(type, options) {
  if (IsMappedResult(type)) {
    return PartialFromMappedResult(type, options);
  } else {
    return CreateType({ ...PartialResolve(type), ...options });
  }
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/partial/partial-from-mapped-result.mjs
function FromProperties17(K6, options) {
  const Acc = {};
  for (const K22 of globalThis.Object.getOwnPropertyNames(K6))
    Acc[K22] = Partial(K6[K22], Clone(options));
  return Acc;
}
function FromMappedResult11(R8, options) {
  return FromProperties17(R8.properties, options);
}
function PartialFromMappedResult(R8, options) {
  const P10 = FromMappedResult11(R8, options);
  return MappedResult(P10);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/required/required.mjs
function FromComputed4(target, parameters) {
  return Computed("Required", [Computed(target, parameters)]);
}
function FromRef14($ref) {
  return Computed("Required", [Ref($ref)]);
}
function FromProperties18(properties) {
  const requiredProperties = {};
  for (const K6 of globalThis.Object.getOwnPropertyNames(properties))
    requiredProperties[K6] = Discard(properties[K6], [OptionalKind]);
  return requiredProperties;
}
function FromObject17(type) {
  const options = Discard(type, [TransformKind, "$id", "required", "properties"]);
  const properties = FromProperties18(type["properties"]);
  return Object2(properties, options);
}
function FromRest7(types) {
  return types.map((type) => RequiredResolve(type));
}
function RequiredResolve(type) {
  return (
    // Mappable
    IsComputed(type) ? FromComputed4(type.target, type.parameters) : IsRef(type) ? FromRef14(type.$ref) : IsIntersect(type) ? Intersect(FromRest7(type.allOf)) : IsUnion(type) ? Union(FromRest7(type.anyOf)) : IsObject3(type) ? FromObject17(type) : (
      // Intrinsic
      IsBigInt3(type) ? type : IsBoolean3(type) ? type : IsInteger2(type) ? type : IsLiteral(type) ? type : IsNull3(type) ? type : IsNumber3(type) ? type : IsString3(type) ? type : IsSymbol3(type) ? type : IsUndefined3(type) ? type : (
        // Passthrough
        Object2({})
      )
    )
  );
}
function Required(type, options) {
  if (IsMappedResult(type)) {
    return RequiredFromMappedResult(type, options);
  } else {
    return CreateType({ ...RequiredResolve(type), ...options });
  }
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/required/required-from-mapped-result.mjs
function FromProperties19(P10, options) {
  const Acc = {};
  for (const K22 of globalThis.Object.getOwnPropertyNames(P10))
    Acc[K22] = Required(P10[K22], options);
  return Acc;
}
function FromMappedResult12(R8, options) {
  return FromProperties19(R8.properties, options);
}
function RequiredFromMappedResult(R8, options) {
  const P10 = FromMappedResult12(R8, options);
  return MappedResult(P10);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/module/compute.mjs
function DereferenceParameters(moduleProperties, types) {
  return types.map((type) => {
    return IsRef(type) ? Dereference(moduleProperties, type.$ref) : FromType2(moduleProperties, type);
  });
}
function Dereference(moduleProperties, ref2) {
  return ref2 in moduleProperties ? IsRef(moduleProperties[ref2]) ? Dereference(moduleProperties, moduleProperties[ref2].$ref) : FromType2(moduleProperties, moduleProperties[ref2]) : Never();
}
function FromAwaited(parameters) {
  return Awaited(parameters[0]);
}
function FromIndex(parameters) {
  return Index(parameters[0], parameters[1]);
}
function FromKeyOf(parameters) {
  return KeyOf(parameters[0]);
}
function FromPartial(parameters) {
  return Partial(parameters[0]);
}
function FromOmit(parameters) {
  return Omit(parameters[0], parameters[1]);
}
function FromPick(parameters) {
  return Pick(parameters[0], parameters[1]);
}
function FromRequired(parameters) {
  return Required(parameters[0]);
}
function FromComputed5(moduleProperties, target, parameters) {
  const dereferenced = DereferenceParameters(moduleProperties, parameters);
  return target === "Awaited" ? FromAwaited(dereferenced) : target === "Index" ? FromIndex(dereferenced) : target === "KeyOf" ? FromKeyOf(dereferenced) : target === "Partial" ? FromPartial(dereferenced) : target === "Omit" ? FromOmit(dereferenced) : target === "Pick" ? FromPick(dereferenced) : target === "Required" ? FromRequired(dereferenced) : Never();
}
function FromArray17(moduleProperties, type) {
  return Array2(FromType2(moduleProperties, type));
}
function FromAsyncIterator7(moduleProperties, type) {
  return AsyncIterator(FromType2(moduleProperties, type));
}
function FromConstructor8(moduleProperties, parameters, instanceType) {
  return Constructor(FromTypes2(moduleProperties, parameters), FromType2(moduleProperties, instanceType));
}
function FromFunction7(moduleProperties, parameters, returnType) {
  return Function2(FromTypes2(moduleProperties, parameters), FromType2(moduleProperties, returnType));
}
function FromIntersect18(moduleProperties, types) {
  return Intersect(FromTypes2(moduleProperties, types));
}
function FromIterator7(moduleProperties, type) {
  return Iterator(FromType2(moduleProperties, type));
}
function FromObject18(moduleProperties, properties) {
  return Object2(globalThis.Object.keys(properties).reduce((result, key) => {
    return { ...result, [key]: FromType2(moduleProperties, properties[key]) };
  }, {}));
}
function FromRecord13(moduleProperties, type) {
  const [value, pattern] = [FromType2(moduleProperties, RecordValue2(type)), RecordPattern(type)];
  const result = CloneType(type);
  result.patternProperties[pattern] = value;
  return result;
}
function FromTransform(moduleProperties, transform) {
  return IsRef(transform) ? { ...Dereference(moduleProperties, transform.$ref), [TransformKind]: transform[TransformKind] } : transform;
}
function FromTuple15(moduleProperties, types) {
  return Tuple(FromTypes2(moduleProperties, types));
}
function FromUnion20(moduleProperties, types) {
  return Union(FromTypes2(moduleProperties, types));
}
function FromTypes2(moduleProperties, types) {
  return types.map((type) => FromType2(moduleProperties, type));
}
function FromType2(moduleProperties, type) {
  return (
    // Modifiers
    IsOptional(type) ? CreateType(FromType2(moduleProperties, Discard(type, [OptionalKind])), type) : IsReadonly(type) ? CreateType(FromType2(moduleProperties, Discard(type, [ReadonlyKind])), type) : (
      // Transform
      IsTransform(type) ? CreateType(FromTransform(moduleProperties, type), type) : (
        // Types
        IsArray3(type) ? CreateType(FromArray17(moduleProperties, type.items), type) : IsAsyncIterator3(type) ? CreateType(FromAsyncIterator7(moduleProperties, type.items), type) : IsComputed(type) ? CreateType(FromComputed5(moduleProperties, type.target, type.parameters)) : IsConstructor(type) ? CreateType(FromConstructor8(moduleProperties, type.parameters, type.returns), type) : IsFunction3(type) ? CreateType(FromFunction7(moduleProperties, type.parameters, type.returns), type) : IsIntersect(type) ? CreateType(FromIntersect18(moduleProperties, type.allOf), type) : IsIterator3(type) ? CreateType(FromIterator7(moduleProperties, type.items), type) : IsObject3(type) ? CreateType(FromObject18(moduleProperties, type.properties), type) : IsRecord(type) ? CreateType(FromRecord13(moduleProperties, type)) : IsTuple(type) ? CreateType(FromTuple15(moduleProperties, type.items || []), type) : IsUnion(type) ? CreateType(FromUnion20(moduleProperties, type.anyOf), type) : type
      )
    )
  );
}
function ComputeType(moduleProperties, key) {
  return key in moduleProperties ? FromType2(moduleProperties, moduleProperties[key]) : Never();
}
function ComputeModuleProperties(moduleProperties) {
  return globalThis.Object.getOwnPropertyNames(moduleProperties).reduce((result, key) => {
    return { ...result, [key]: ComputeType(moduleProperties, key) };
  }, {});
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/module/module.mjs
var TModule = class {
  constructor($defs) {
    const computed2 = ComputeModuleProperties($defs);
    const identified = this.WithIdentifiers(computed2);
    this.$defs = identified;
  }
  /** `[Json]` Imports a Type by Key. */
  Import(key, options) {
    const $defs = { ...this.$defs, [key]: CreateType(this.$defs[key], options) };
    return CreateType({ [Kind]: "Import", $defs, $ref: key });
  }
  // prettier-ignore
  WithIdentifiers($defs) {
    return globalThis.Object.getOwnPropertyNames($defs).reduce((result, key) => {
      return { ...result, [key]: { ...$defs[key], $id: key } };
    }, {});
  }
};
function Module(properties) {
  return new TModule(properties);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/not/not.mjs
function Not2(type, options) {
  return CreateType({ [Kind]: "Not", not: type }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/parameters/parameters.mjs
function Parameters(schema, options) {
  return IsFunction3(schema) ? Tuple(schema.parameters, options) : Never();
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/recursive/recursive.mjs
var Ordinal = 0;
function Recursive(callback, options = {}) {
  if (IsUndefined2(options.$id))
    options.$id = `T${Ordinal++}`;
  const thisType = CloneType(callback({ [Kind]: "This", $ref: `${options.$id}` }));
  thisType.$id = options.$id;
  return CreateType({ [Hint]: "Recursive", ...thisType }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/regexp/regexp.mjs
function RegExp2(unresolved, options) {
  const expr = IsString2(unresolved) ? new globalThis.RegExp(unresolved) : unresolved;
  return CreateType({ [Kind]: "RegExp", type: "RegExp", source: expr.source, flags: expr.flags }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/rest/rest.mjs
function RestResolve(T9) {
  return IsIntersect(T9) ? T9.allOf : IsUnion(T9) ? T9.anyOf : IsTuple(T9) ? T9.items ?? [] : [];
}
function Rest(T9) {
  return RestResolve(T9);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/return-type/return-type.mjs
function ReturnType(schema, options) {
  return IsFunction3(schema) ? CreateType(schema.returns, options) : Never(options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/transform/transform.mjs
var TransformDecodeBuilder = class {
  constructor(schema) {
    this.schema = schema;
  }
  Decode(decode) {
    return new TransformEncodeBuilder(this.schema, decode);
  }
};
var TransformEncodeBuilder = class {
  constructor(schema, decode) {
    this.schema = schema;
    this.decode = decode;
  }
  EncodeTransform(encode, schema) {
    const Encode2 = (value) => schema[TransformKind].Encode(encode(value));
    const Decode2 = (value) => this.decode(schema[TransformKind].Decode(value));
    const Codec = { Encode: Encode2, Decode: Decode2 };
    return { ...schema, [TransformKind]: Codec };
  }
  EncodeSchema(encode, schema) {
    const Codec = { Decode: this.decode, Encode: encode };
    return { ...schema, [TransformKind]: Codec };
  }
  Encode(encode) {
    return IsTransform(this.schema) ? this.EncodeTransform(encode, this.schema) : this.EncodeSchema(encode, this.schema);
  }
};
function Transform(schema) {
  return new TransformDecodeBuilder(schema);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/void/void.mjs
function Void(options) {
  return CreateType({ [Kind]: "Void", type: "void" }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/type/type.mjs
var type_exports3 = {};
__export(type_exports3, {
  Any: () => Any,
  Argument: () => Argument,
  Array: () => Array2,
  AsyncIterator: () => AsyncIterator,
  Awaited: () => Awaited,
  BigInt: () => BigInt2,
  Boolean: () => Boolean2,
  Capitalize: () => Capitalize,
  Composite: () => Composite,
  Const: () => Const,
  Constructor: () => Constructor,
  ConstructorParameters: () => ConstructorParameters,
  Date: () => Date2,
  Enum: () => Enum,
  Exclude: () => Exclude,
  Extends: () => Extends,
  Extract: () => Extract,
  Function: () => Function2,
  Index: () => Index,
  InstanceType: () => InstanceType,
  Instantiate: () => Instantiate,
  Integer: () => Integer,
  Intersect: () => Intersect,
  Iterator: () => Iterator,
  KeyOf: () => KeyOf,
  Literal: () => Literal,
  Lowercase: () => Lowercase,
  Mapped: () => Mapped,
  Module: () => Module,
  Never: () => Never,
  Not: () => Not2,
  Null: () => Null,
  Number: () => Number2,
  Object: () => Object2,
  Omit: () => Omit,
  Optional: () => Optional,
  Parameters: () => Parameters,
  Partial: () => Partial,
  Pick: () => Pick,
  Promise: () => Promise2,
  Readonly: () => Readonly,
  ReadonlyOptional: () => ReadonlyOptional,
  Record: () => Record,
  Recursive: () => Recursive,
  Ref: () => Ref,
  RegExp: () => RegExp2,
  Required: () => Required,
  Rest: () => Rest,
  ReturnType: () => ReturnType,
  String: () => String2,
  Symbol: () => Symbol2,
  TemplateLiteral: () => TemplateLiteral,
  Transform: () => Transform,
  Tuple: () => Tuple,
  Uint8Array: () => Uint8Array2,
  Uncapitalize: () => Uncapitalize,
  Undefined: () => Undefined,
  Union: () => Union,
  Unknown: () => Unknown,
  Unsafe: () => Unsafe,
  Uppercase: () => Uppercase,
  Void: () => Void
});

// node_modules/.pnpm/@sinclair+typebox@0.34.33/node_modules/@sinclair/typebox/build/esm/type/type/index.mjs
var Type = type_exports3;

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/schemas/v3.1/compose.js
var compose = (...args) => {
  return Type.Composite(args);
};

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/schemas/v3.1/strict/extensions.js
var ExtensionsSchema = Type.Record(Type.TemplateLiteral("x-${string}"), Type.Unknown());

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/schemas/v3.1/strict/contact.js
var ContactObjectSchema = compose(
  Type.Object({
    /** The identifying name of the contact person/organization. */
    name: Type.Optional(Type.String()),
    /** The URI for the contact information. This MUST be in the form of a URI. */
    url: Type.Optional(Type.String()),
    /** The email address of the contact person/organization. This MUST be in the form of an email address. */
    email: Type.Optional(Type.String())
  }),
  ExtensionsSchema
);

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/schemas/v3.1/strict/license.js
var LicenseObjectSchema = compose(
  Type.Object({
    /** REQUIRED. The license name used for the API. */
    name: Type.Optional(Type.String()),
    /** An SPDX license expression for the API. The identifier field is mutually exclusive of the url field. */
    identifier: Type.Optional(Type.String()),
    /** A URI for the license used for the API. This MUST be in the form of a URI. The url field is mutually exclusive of the identifier field. */
    url: Type.Optional(Type.String())
  }),
  ExtensionsSchema
);

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/schemas/v3.1/strict/info.js
var InfoObjectSchema = compose(
  Type.Object({
    /** REQUIRED. The title of the API. */
    title: Type.String(),
    /** A short summary of the API. */
    summary: Type.Optional(Type.String()),
    /** A description of the API. CommonMark syntax MAY be used for rich text representation. */
    description: Type.Optional(Type.String()),
    /** A URI for the Terms of Service for the API. This MUST be in the form of a URI. */
    termsOfService: Type.Optional(Type.String()),
    /** The contact information for the exposed API. */
    contact: Type.Optional(ContactObjectSchema),
    /** The license information for the exposed API. */
    license: Type.Optional(LicenseObjectSchema),
    /** REQUIRED. The version of the OpenAPI Document (which is distinct from the OpenAPI Specification version or the version of the API being described or the version of the OpenAPI Description). */
    version: Type.String()
  }),
  ExtensionsSchema
);

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/schemas/v3.1/strict/server-variable.js
var ServerVariableObjectSchema = compose(
  Type.Object({
    /** An enumeration of string values to be used if the substitution options are from a limited set. The array MUST NOT be empty. */
    enum: Type.Optional(Type.Array(Type.String())),
    /** REQUIRED. The default value to use for substitution, which SHALL be sent if an alternate value is not supplied. If the enum is defined, the value MUST exist in the enum's values. Note that this behavior is different from the Schema Object's default keyword, which documents the receiver's behavior rather than inserting the value into the data. */
    default: Type.Optional(Type.String()),
    /** An optional description for the server variable. CommonMark syntax MAY be used for rich text representation. */
    description: Type.Optional(Type.String())
  }),
  ExtensionsSchema
);

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/schemas/v3.1/strict/server.js
var ServerObjectSchema = compose(
  Type.Object({
    /** REQUIRED. A URL to the target host. This URL supports Server Variables and MAY be relative, to indicate that the host location is relative to the location where the document containing the Server Object is being served. Variable substitutions will be made when a variable is named in {braces}. */
    url: Type.String(),
    /** An optional string describing the host designated by the URL. CommonMark syntax MAY be used for rich text representation. */
    description: Type.Optional(Type.String()),
    /** A map between a variable name and its value. The value is used for substitution in the server's URL template. */
    variables: Type.Optional(Type.Record(Type.String(), ServerVariableObjectSchema))
  }),
  ExtensionsSchema
);

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/schemas/v3.1/strict/callback.js
var callbackObjectSchemaBuilder = (pathItem) => compose(
  Type.Record(
    Type.String(),
    /** A Path Item Object used to define a callback request and expected responses. A complete example is available. */
    pathItem
  ),
  ExtensionsSchema
);

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/schemas/v3.1/strict/external-documentation.js
var ExternalDocumentationObjectSchema = compose(
  Type.Object({
    /** A description of the target documentation. CommonMark syntax MAY be used for rich text representation. */
    description: Type.Optional(Type.String()),
    /** REQUIRED. The URI for the target documentation. This MUST be in the form of a URI. */
    url: Type.String()
  }),
  ExtensionsSchema
);

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/schemas/v3.1/strict/reference.js
var ReferenceObjectExtensionsSchema = Type.Object({
  /** Indicates the current status of the reference resolution. Can be either 'loading' while fetching the reference or 'error' if the resolution failed. */
  "$status": Type.Optional(Type.Union([Type.Literal("loading"), Type.Literal("error")])),
  /** Indicates whether this reference should be resolved globally across all documents, rather than just within the current document context. */
  "$global": Type.Optional(Type.Boolean())
});
var ReferenceObjectSchema = compose(
  Type.Object({
    /** REQUIRED. The reference identifier. This MUST be in the form of a URI. */
    "$ref": Type.String(),
    /** A short summary which by default SHOULD override that of the referenced component. If the referenced object-type does not allow a summary field, then this field has no effect. */
    summary: Type.Optional(Type.String()),
    /** A description which by default SHOULD override that of the referenced component. CommonMark syntax MAY be used for rich text representation. If the referenced object-type does not allow a description field, then this field has no effect. */
    description: Type.Optional(Type.String())
  }),
  ReferenceObjectExtensionsSchema,
  ExtensionsSchema
);

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/schemas/v3.1/strict/encoding.js
var encodingObjectSchemaBuilder = (header) => compose(
  Type.Object({
    /** The Content-Type for encoding a specific property. The value is a comma-separated list, each element of which is either a specific media type (e.g. image/png) or a wildcard media type (e.g. image/*). Default value depends on the property type as shown in the table below. */
    contentType: Type.Optional(Type.String()),
    /** A map allowing additional information to be provided as headers. Content-Type is described separately and SHALL be ignored in this section. This field SHALL be ignored if the request body media type is not a multipart. */
    headers: Type.Optional(Type.Record(Type.String(), Type.Union([header, ReferenceObjectSchema])))
  }),
  ExtensionsSchema
);

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/schemas/v3.1/strict/example.js
var ExampleObjectSchema = compose(
  Type.Object({
    /** Short description for the example. */
    summary: Type.Optional(Type.String()),
    /** Long description for the example. CommonMark syntax MAY be used for rich text representation. */
    description: Type.Optional(Type.String()),
    /** Embedded literal example. The value field and externalValue field are mutually exclusive. To represent examples of media types that cannot naturally represented in JSON or YAML, use a string value to contain the example, escaping where necessary. */
    value: Type.Optional(Type.Any()),
    /** A URI that identifies the literal example. This provides the capability to reference examples that cannot easily be included in JSON or YAML documents. The value field and externalValue field are mutually exclusive. See the rules for resolving Relative References. */
    externalValue: Type.Optional(Type.String())
  }),
  ExtensionsSchema
);

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/schemas/v3.1/strict/discriminator.js
var DiscriminatorObjectSchema = compose(
  Type.Object({
    /** REQUIRED. The name of the property in the payload that will hold the discriminating value. This property SHOULD be required in the payload schema, as the behavior when the property is absent is undefined. */
    propertyName: Type.String(),
    /** An object to hold mappings between payload values and schema names or URI references. */
    mapping: Type.Optional(Type.Record(Type.String(), Type.String()))
  }),
  ExtensionsSchema
);

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/schemas/v3.1/strict/xml.js
var XMLObjectSchema = compose(
  Type.Object({
    /** Replaces the name of the element/attribute used for the described schema property. When defined within items, it will affect the name of the individual XML elements within the list. When defined alongside type being "array" (outside the items), it will affect the wrapping element if and only if wrapped is true. If wrapped is false, it will be ignored. */
    name: Type.Optional(Type.String()),
    /** The URI of the namespace definition. Value MUST be in the form of a non-relative URI. */
    namespace: Type.Optional(Type.String()),
    /** The prefix to be used for the name. */
    prefix: Type.Optional(Type.String()),
    /** Declares whether the property definition translates to an attribute instead of an element. Default value is false. */
    attribute: Type.Optional(Type.Boolean()),
    /** MAY be used only for an array definition. Signifies whether the array is wrapped (for example, <books><book/><book/></books>) or unwrapped (<book/><book/>). Default value is false. The definition takes effect only when defined alongside type being "array" (outside the items). */
    wrapped: Type.Optional(Type.Boolean())
  }),
  ExtensionsSchema
);

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/schemas/v3.1/strict/schema.js
var SchemaExtensionsSchema = Type.Partial(
  Type.Object({
    "x-tags": Type.Array(Type.String())
  })
);
var SchemaObjectSchema = compose(
  Type.Object({
    /** Adds support for polymorphism. The discriminator is used to determine which of a set of schemas a payload is expected to satisfy. See Composition and Inheritance for more details. */
    discriminator: Type.Optional(DiscriminatorObjectSchema),
    /** This MAY be used only on property schemas. It has no effect on root schemas. Adds additional metadata to describe the XML representation of this property. */
    xml: Type.Optional(XMLObjectSchema),
    /** Additional external documentation for this schema. */
    externalDocs: Type.Optional(ExternalDocumentationObjectSchema),
    /**
     * A free-form field to include an example of an instance for this schema. To represent examples that cannot be naturally represented in JSON or YAML, a string value can be used to contain the example with escaping where necessary.
     *
     * Deprecated: The example field has been deprecated in favor of the JSON Schema examples keyword. Use of example is discouraged, and later versions of this specification may remove it.
     */
    example: Type.Optional(Type.Any())
  }),
  ExtensionsSchema,
  SchemaExtensionsSchema,
  Type.Record(Type.String(), Type.Unknown())
);

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/schemas/v3.1/strict/header.js
var HeaderObjectSchemaBase = compose(
  Type.Object({
    /** A brief description of the header. This could contain examples of use. CommonMark syntax MAY be used for rich text representation. */
    description: Type.Optional(Type.String()),
    /** Determines whether this header is mandatory. The default value is false. */
    required: Type.Optional(Type.Boolean()),
    /** Specifies that the header is deprecated and SHOULD be transitioned out of usage. Default value is false. */
    deprecated: Type.Optional(Type.Boolean())
  }),
  ExtensionsSchema
);
var HeaderObjectWithSchemaSchema = compose(
  HeaderObjectSchemaBase,
  Type.Object({
    /** Describes how the header value will be serialized. The default (and only legal value for headers) is "simple". */
    style: Type.Optional(Type.String()),
    /** When this is true, header values of type array or object generate a single header whose value is a comma-separated list of the array items or key-value pairs of the map, see Style Examples. For other data types this field has no effect. The default value is false. */
    explode: Type.Optional(Type.Boolean()),
    /** The schema defining the type used for the header. */
    schema: Type.Optional(Type.Union([SchemaObjectSchema, ReferenceObjectSchema])),
    /** Example of the header's potential value; see Working With Examples. https://swagger.io/specification/#working-with-examples */
    example: Type.Any(),
    /** Examples of the header's potential value; see Working With Examples. https://swagger.io/specification/#working-with-examples */
    examples: Type.Optional(Type.Record(Type.String(), Type.Union([ExampleObjectSchema, ReferenceObjectSchema])))
  })
);
var headerObjectSchemaBuilder = (mediaType) => Type.Union([
  HeaderObjectWithSchemaSchema,
  // @ts-ignore
  compose(
    HeaderObjectSchemaBase,
    Type.Object({
      content: Type.Optional(Type.Record(Type.String(), mediaType))
    })
  )
]);

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/schemas/v3.1/strict/media-type.js
var mediaTypeObjectSchemaBuilder = (encoding) => (
  // @ts-ignore
  compose(
    Type.Object({
      /** The schema defining the content of the request, response, parameter, or header. */
      // @ts-ignore
      schema: Type.Optional(SchemaObjectSchema),
      /** Example of the media type */
      example: Type.Optional(Type.Any()),
      /** Examples of the media type */
      examples: Type.Optional(Type.Record(Type.String(), Type.Union([ExampleObjectSchema, ReferenceObjectSchema]))),
      /** A map between a property name and its encoding information. The key, being the property name, MUST exist in the schema as a property. The encoding field SHALL only apply to Request Body Objects, and only when the media type is multipart or application/x-www-form-urlencoded. If no Encoding Object is provided for a property, the behavior is determined by the default values documented for the Encoding Object. */
      encoding: Type.Optional(Type.Record(Type.String(), encoding))
    }),
    ExtensionsSchema
  )
);

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/schemas/v3.1/strict/media-header-encoding.js
var EncodingObjectSchema = Type.Recursive(
  (This) => encodingObjectSchemaBuilder(headerObjectSchemaBuilder(mediaTypeObjectSchemaBuilder(This)))
);
var MediaTypeObjectSchema = Type.Recursive(
  (This) => mediaTypeObjectSchemaBuilder(encodingObjectSchemaBuilder(headerObjectSchemaBuilder(This)))
);
var HeaderObjectSchema = Type.Recursive(
  (This) => headerObjectSchemaBuilder(mediaTypeObjectSchemaBuilder(encodingObjectSchemaBuilder(This)))
);

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/schemas/v3.1/strict/parameter.js
var ParameterObjectBaseSchema = compose(
  Type.Object({
    /** REQUIRED. The name of the parameter. Parameter names are case sensitive.
     *    - If in is "path", the name field MUST correspond to a template expression occurring within the path field in the Paths Object. See Path Templating for further information.
     *    - If in is "header" and the name field is "Accept", "Content-Type" or "Authorization", the parameter definition SHALL be ignored.
     *    - For all other cases, the name corresponds to the parameter name used by the in field. */
    name: Type.String(),
    /** REQUIRED. The location of the parameter. Possible values are "query", "header", "path" or "cookie". */
    in: Type.String(),
    /** A brief description of the parameter. This could contain examples of use. CommonMark syntax MAY be used for rich text representation. */
    description: Type.Optional(Type.String()),
    /** Determines whether this parameter is mandatory. If the parameter location is "path", this field is REQUIRED and its value MUST be true. Otherwise, the field MAY be included and its default value is false. */
    required: Type.Optional(Type.Boolean()),
    /** Specifies that a parameter is deprecated and SHOULD be transitioned out of usage. Default value is false. */
    deprecated: Type.Optional(Type.Boolean()),
    /** If true, clients MAY pass a zero-length string value in place of parameters that would otherwise be omitted entirely, which the server SHOULD interpret as the parameter being unused. Default value is false. If style is used, and if behavior is n/a (cannot be serialized), the value of allowEmptyValue SHALL be ignored. Interactions between this field and the parameter's Schema Object are implementation-defined. This field is valid only for query parameters. Use of this field is NOT RECOMMENDED, and it is likely to be removed in a later revision. */
    allowEmptyValue: Type.Optional(Type.Boolean())
  }),
  ExtensionsSchema
);
var ParameterObjectWithSchemaSchema = compose(
  ParameterObjectBaseSchema,
  Type.Object({
    /** Describes how the header value will be serialized. The default (and only legal value for headers) is "simple". */
    style: Type.Optional(Type.String()),
    /** When this is true, header values of type array or object generate a single header whose value is a comma-separated list of the array items or key-value pairs of the map, see Style Examples. For other data types this field has no effect. The default value is false. */
    explode: Type.Optional(Type.Boolean()),
    /** The schema defining the type used for the header. */
    schema: Type.Optional(Type.Union([SchemaObjectSchema, ReferenceObjectSchema])),
    /** Example of the header's potential value; see Working With Examples. https://swagger.io/specification/#working-with-examples */
    example: Type.Any(),
    /** Examples of the header's potential value; see Working With Examples. https://swagger.io/specification/#working-with-examples */
    examples: Type.Optional(Type.Record(Type.String(), Type.Union([ExampleObjectSchema, ReferenceObjectSchema])))
  })
);
var ParameterObjectWithContentSchema = compose(
  ParameterObjectBaseSchema,
  Type.Object({
    content: Type.Optional(Type.Record(Type.String(), MediaTypeObjectSchema))
  })
);
var ParameterObjectSchema = Type.Union([ParameterObjectWithSchemaSchema, ParameterObjectWithContentSchema]);

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/schemas/v3.1/strict/request-body.js
var RequestBodyObjectSchema = compose(
  Type.Object({
    /** A brief description of the request body. This could contain examples of use. CommonMark syntax MAY be used for rich text representation. */
    description: Type.Optional(Type.String()),
    /** REQUIRED. The content of the request body. The key is a media type or media type range and the value describes it. For requests that match multiple keys, only the most specific key is applicable. e.g. "text/plain" overrides "text/* */
    content: Type.Record(Type.String(), MediaTypeObjectSchema),
    /** Determines if the request body is required in the request. Defaults to false. */
    required: Type.Optional(Type.Boolean())
  }),
  ExtensionsSchema
);

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/schemas/v3.1/strict/link.js
var LinkObjectSchema = compose(
  Type.Object({
    /** A URI reference to an OAS operation. This field is mutually exclusive of the operationId field, and MUST point to an Operation Object. Relative operationRef values MAY be used to locate an existing Operation Object in the OpenAPI Description. */
    operationRef: Type.Optional(Type.String()),
    /** The name of an existing, resolvable OAS operation, as defined with a unique operationId. This field is mutually exclusive of the operationRef field. */
    operationId: Type.Optional(Type.String()),
    /** A map representing parameters to pass to an operation as specified with operationId or identified via operationRef. The key is the parameter name to be used (optionally qualified with the parameter location, e.g. path.id for an id parameter in the path), whereas the value can be a constant or an expression to be evaluated and passed to the linked operation. */
    parameters: Type.Optional(Type.Record(Type.String(), Type.Any())),
    /** A literal value or {expression} to use as a request body when calling the target operation. */
    requestBody: Type.Optional(Type.Any()),
    /** A description of the link. CommonMark syntax MAY be used for rich text representation. */
    description: Type.Optional(Type.String()),
    /** A server object to be used by the target operation. */
    server: Type.Optional(ServerObjectSchema)
  }),
  ExtensionsSchema
);

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/schemas/v3.1/strict/response.js
var ResponseObjectSchema = compose(
  Type.Object({
    /** REQUIRED. A description of the response. CommonMark syntax MAY be used for rich text representation. */
    description: Type.String(),
    /** Maps a header name to its definition. RFC7230 states header names are case insensitive. If a response header is defined with the name "Content-Type", it SHALL be ignored. */
    headers: Type.Optional(Type.Record(Type.String(), Type.Union([HeaderObjectSchema, ReferenceObjectSchema]))),
    /** A map containing descriptions of potential response payloads. The key is a media type or media type range and the value describes it. For responses that match multiple keys, only the most specific key is applicable. e.g. "text/plain" overrides "text/*"  */
    content: Type.Optional(Type.Record(Type.String(), MediaTypeObjectSchema)),
    /** A map of operations links that can be followed from the response. The key of the map is a short name for the link, following the naming constraints of the names for Component Objects. */
    links: Type.Optional(Type.Record(Type.String(), Type.Union([LinkObjectSchema, ReferenceObjectSchema])))
  }),
  ExtensionsSchema
);

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/schemas/v3.1/strict/responses.js
var ResponsesObjectSchema = compose(
  Type.Record(Type.String(), Type.Union([ResponseObjectSchema, ReferenceObjectSchema])),
  ExtensionsSchema
);

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/schemas/v3.1/strict/security-requirement.js
var SecurityRequirementObjectSchema = compose(
  Type.Record(
    Type.String(),
    /** Each name MUST correspond to a security scheme which is declared in the Security Schemes under the Components Object. If the security scheme is of type "oauth2" or "openIdConnect", then the value is a list of scope names required for the execution, and the list MAY be empty if authorization does not require a specified scope. For other security scheme types, the array MAY contain a list of role names which are required for the execution, but are not otherwise defined or exchanged in-band. */
    Type.Array(Type.String())
  ),
  ExtensionsSchema
);

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/schemas/v3.1/strict/operation.js
var operationObjectSchemaBuilder = (callback) => Type.Union([
  compose(
    Type.Object({
      /** A list of tags for API documentation control. Tags can be used for logical grouping of operations by resources or any other qualifier. */
      tags: Type.Optional(Type.Array(Type.String())),
      /** A short summary of what the operation does. */
      summary: Type.Optional(Type.String()),
      /** A verbose explanation of the operation behavior. CommonMark syntax MAY be used for rich text representation. */
      description: Type.Optional(Type.String()),
      /** Additional external documentation for this operation. */
      externalDocs: Type.Optional(ExternalDocumentationObjectSchema),
      /** Unique string used to identify the operation. The id MUST be unique among all operations described in the API. The operationId value is case-sensitive. Tools and libraries MAY use the operationId to uniquely identify an operation, therefore, it is RECOMMENDED to follow common programming naming conventions. */
      operationId: Type.Optional(Type.String()),
      /** A list of parameters that are applicable for this operation. If a parameter is already defined at the Path Item, the new definition will override it but can never remove it. The list MUST NOT include duplicated parameters. A unique parameter is defined by a combination of a name and location. The list can use the Reference Object to link to parameters that are defined in the OpenAPI Object's components.parameters. */
      parameters: Type.Optional(Type.Array(Type.Union([ParameterObjectSchema, ReferenceObjectSchema]))),
      /** The request body applicable for this operation. The requestBody is fully supported in HTTP methods where the HTTP 1.1 specification RFC7231 has explicitly defined semantics for request bodies. In other cases where the HTTP spec is vague (such as GET, HEAD and DELETE), requestBody is permitted but does not have well-defined semantics and SHOULD be avoided if possible. */
      requestBody: Type.Optional(Type.Union([RequestBodyObjectSchema, ReferenceObjectSchema])),
      /** The list of possible responses as they are returned from executing this operation. */
      responses: Type.Optional(ResponsesObjectSchema),
      /** Declares this operation to be deprecated. Consumers SHOULD refrain from usage of the declared operation. Default value is false. */
      deprecated: Type.Optional(Type.Boolean()),
      /** A declaration of which security mechanisms can be used for this operation. The list of values includes alternative Security Requirement Objects that can be used. Only one of the Security Requirement Objects need to be satisfied to authorize a request. To make security optional, an empty security requirement ({}) can be included in the array. This definition overrides any declared top-level security. To remove a top-level security declaration, an empty array can be used. */
      security: Type.Optional(Type.Array(SecurityRequirementObjectSchema)),
      /** An alternative servers array to service this operation. If a servers array is specified at the Path Item Object or OpenAPI Object level, it will be overridden by this value. */
      servers: Type.Optional(Type.Array(ServerObjectSchema)),
      /** A map of possible out-of band callbacks related to the parent operation. The key is a unique identifier for the Callback Object. Each value in the map is a Callback Object that describes a request that may be initiated by the API provider and the expected responses. */
      callbacks: Type.Optional(Type.Record(Type.String(), Type.Union([callback, ReferenceObjectSchema])))
    }),
    ExtensionsSchema
  ),
  ReferenceObjectSchema
]);

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/schemas/v3.1/strict/path-item.js
var pathItemObjectSchemaBuilder = (operation) => compose(
  Type.Object({
    /**
     * Allows for a referenced definition of this path item. The value MUST be in the form of a URI, and the referenced structure MUST be in the form of a Path Item Object. In case a Path Item Object field appears both in the defined object and the referenced object, the behavior is undefined. See the rules for resolving Relative References.
     *
     * Note: The behavior of $ref with adjacent properties is likely to change in future versions of this specification to bring it into closer alignment with the behavior of the Reference Object.
     */
    "$ref": Type.Optional(Type.String()),
    /** An optional string summary, intended to apply to all operations in this path. */
    summary: Type.Optional(Type.String()),
    /** An optional string description, intended to apply to all operations in this path. CommonMark syntax MAY be used for rich text representation. */
    description: Type.Optional(Type.String()),
    /** A definition of a GET operation on this path. */
    get: Type.Optional(operation),
    /** A definition of a PUT operation on this path. */
    put: Type.Optional(operation),
    /** A definition of a POST operation on this path. */
    post: Type.Optional(operation),
    /** A definition of a DELETE operation on this path. */
    delete: Type.Optional(operation),
    /** A definition of a PATCH operation on this path. */
    patch: Type.Optional(operation),
    /** A definition of a TRACE operation on this path. */
    trace: Type.Optional(operation),
    /** An alternative servers array to service all operations in this path. If a servers array is specified at the OpenAPI Object level, it will be overridden by this value. */
    servers: Type.Optional(Type.Array(ServerObjectSchema)),
    /** A list of parameters that are applicable for all the operations described under this path. These parameters can be overridden at the operation level, but cannot be removed there. The list MUST NOT include duplicated parameters. A unique parameter is defined by a combination of a name and location. The list can use the Reference Object to link to parameters that are defined in the OpenAPI Object's components.parameters. */
    parameters: Type.Optional(Type.Array(Type.Union([ParameterObjectSchema, ReferenceObjectSchema])))
  }),
  ExtensionsSchema
);

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/schemas/v3.1/strict/path-operations.js
var OperationObjectSchema = Type.Recursive(
  (This) => operationObjectSchemaBuilder(callbackObjectSchemaBuilder(pathItemObjectSchemaBuilder(This)))
);
var CallbackObjectSchema = Type.Recursive(
  (This) => callbackObjectSchemaBuilder(pathItemObjectSchemaBuilder(operationObjectSchemaBuilder(This)))
);
var PathItemObjectSchema = Type.Recursive(
  (This) => pathItemObjectSchemaBuilder(operationObjectSchemaBuilder(callbackObjectSchemaBuilder(This)))
);

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/schemas/v3.1/strict/paths.js
var PathsObjectSchema = compose(
  Type.Record(
    Type.String(),
    /** A relative path to an individual endpoint. The field name MUST begin with a forward slash (/). The path is appended (no relative URL resolution) to the expanded URL from the Server Object's url field in order to construct the full URL. Path templating is allowed. When matching URLs, concrete (non-templated) paths would be matched before their templated counterparts. Templated paths with the same hierarchy but different templated names MUST NOT exist as they are identical. In case of ambiguous matching, it's up to the tooling to decide which one to use. */
    PathItemObjectSchema
  ),
  ExtensionsSchema
);

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/schemas/v3.1/strict/oauth-flow.js
var OAuthFlowObjectSchema = compose(
  Type.Object({
    /** REQUIRED. The authorization URL to be used for this flow. This MUST be in the form of a URL. The OAuth2 standard requires the use of TLS. */
    authorizationUrl: Type.String(),
    /** REQUIRED. The token URL to be used for this flow. This MUST be in the form of a URL. The OAuth2 standard requires the use of TLS. */
    tokenUrl: Type.String(),
    /** The URL to be used for obtaining refresh tokens. This MUST be in the form of a URL. The OAuth2 standard requires the use of TLS. */
    refreshUrl: Type.Optional(Type.String()),
    /** REQUIRED. The available scopes for the OAuth2 security scheme. A map between the scope name and a short description for it. The map MAY be empty. */
    scopes: Type.Record(Type.String(), Type.String())
  }),
  ExtensionsSchema
);

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/schemas/v3.1/strict/oauthflows.js
var OAuthFlowsObjectSchema = compose(
  Type.Object({
    /** Configuration for the OAuth Implicit flow */
    implicit: Type.Optional(OAuthFlowObjectSchema),
    /** Configuration for the OAuth Resource Owner Password flow */
    password: Type.Optional(OAuthFlowObjectSchema),
    /** Configuration for the OAuth Client Credentials flow. Previously called application in OpenAPI 2.0. */
    clientCredentials: Type.Optional(OAuthFlowObjectSchema),
    /** Configuration for the OAuth Authorization Code flow. Previously called accessCode in OpenAPI 2.0. */
    authorizationCode: Type.Optional(OAuthFlowObjectSchema)
  }),
  ExtensionsSchema
);

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/schemas/v3.1/strict/security-scheme.js
var DescriptionSchema = compose(
  Type.Object({
    /** A description for security scheme. CommonMark syntax MAY be used for rich text representation. */
    description: Type.Optional(Type.String())
  }),
  ExtensionsSchema
);
var ApiKeySchema = compose(
  DescriptionSchema,
  Type.Object({
    /** REQUIRED. The type of the security scheme. Valid values are "apiKey", "http", "mutualTLS", "oauth2", "openIdConnect". */
    type: Type.Literal("apiKey"),
    /** REQUIRED. The name of the header, query or cookie parameter to be used. */
    name: Type.String(),
    /** REQUIRED. The location of the API key. Valid values are "query", "header", or "cookie". */
    in: Type.String()
  })
);
var HttpSchema = compose(
  DescriptionSchema,
  Type.Object({
    /** REQUIRED. The type of the security scheme. Valid values are "apiKey", "http", "mutualTLS", "oauth2", "openIdConnect". */
    type: Type.Literal("http"),
    /** REQUIRED. The name of the HTTP Authentication scheme to be used in the Authorization header as defined in RFC7235. The values used SHOULD be registered in the IANA Authentication Scheme registry. The value is case-insensitive, as defined in RFC7235. */
    scheme: Type.String(),
    /** A hint to the client to identify how the bearer token is formatted. Bearer tokens are usually generated by an authorization server, so this information is primarily for documentation purposes. */
    bearerFormat: Type.Optional(Type.String())
  })
);
var OAuth2 = compose(
  DescriptionSchema,
  Type.Object({
    /** REQUIRED. The type of the security scheme. Valid values are "apiKey", "http", "mutualTLS", "oauth2", "openIdConnect". */
    type: Type.Literal("oauth2"),
    /** REQUIRED. An object containing configuration information for the flow types supported. */
    flows: OAuthFlowsObjectSchema
  })
);
var OpenIdConnect = compose(
  DescriptionSchema,
  Type.Object({
    /** REQUIRED. The type of the security scheme. Valid values are "apiKey", "http", "mutualTLS", "oauth2", "openIdConnect". */
    type: Type.Literal("openIdConnect"),
    /** REQUIRED. Well-known URL to discover the [[OpenID-Connect-Discovery]] provider metadata. */
    openIdConnectUrl: Type.String()
  })
);
var SecuritySchemeObjectSchema = Type.Union([ApiKeySchema, HttpSchema, OAuth2, OpenIdConnect]);

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/schemas/v3.1/strict/components.js
var ComponentsObjectSchema = compose(
  Type.Object({
    /** An object to hold reusable Schema Objects. */
    schemas: Type.Optional(Type.Record(Type.String(), SchemaObjectSchema)),
    /** An object to hold reusable Response Objects. */
    responses: Type.Optional(Type.Record(Type.String(), Type.Union([ResponseObjectSchema, ReferenceObjectSchema]))),
    /** An object to hold reusable Parameter Objects. */
    parameters: Type.Optional(Type.Record(Type.String(), Type.Union([ParameterObjectSchema, ReferenceObjectSchema]))),
    /** An object to hold reusable Example Objects. */
    examples: Type.Optional(Type.Record(Type.String(), Type.Union([ExampleObjectSchema, ReferenceObjectSchema]))),
    /** An object to hold reusable Request Body Objects. */
    requestBodies: Type.Optional(
      Type.Record(Type.String(), Type.Union([RequestBodyObjectSchema, ReferenceObjectSchema]))
    ),
    /** An object to hold reusable Header Objects. */
    headers: Type.Optional(Type.Record(Type.String(), Type.Union([HeaderObjectSchema, ReferenceObjectSchema]))),
    /** An object to hold reusable Security Scheme Objects. */
    securitySchemes: Type.Optional(
      Type.Record(Type.String(), Type.Union([SecuritySchemeObjectSchema, ReferenceObjectSchema]))
    ),
    /** An object to hold reusable Link Objects. */
    links: Type.Optional(Type.Record(Type.String(), Type.Union([LinkObjectSchema, ReferenceObjectSchema]))),
    /** An object to hold reusable Callback Objects. */
    callbacks: Type.Optional(Type.Record(Type.String(), Type.Union([CallbackObjectSchema, ReferenceObjectSchema]))),
    /** An object to hold reusable Path Item Objects. */
    pathItems: Type.Optional(Type.Record(Type.String(), PathItemObjectSchema))
  }),
  ExtensionsSchema
);

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/schemas/v3.1/strict/tag.js
var TagExtensionsSchema = Type.Partial(
  Type.Object({
    "x-displayName": Type.String()
  })
);
var TagObjectSchema = compose(
  Type.Object({
    /** REQUIRED. The name of the tag. */
    name: Type.String(),
    /** A description for the tag. CommonMark syntax MAY be used for rich text representation. */
    description: Type.Optional(Type.String()),
    /** Additional external documentation for this tag. */
    externalDocs: Type.Optional(ExternalDocumentationObjectSchema)
  }),
  TagExtensionsSchema,
  ExtensionsSchema
);

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/schemas/v3.1/strict/openapi-document.js
var OpenApiExtensionsSchema = Type.Partial(
  Type.Object({
    "x-tagGroups": Type.Array(
      compose(
        Type.Object({
          tags: Type.Array(Type.String())
        }),
        TagObjectSchema
      )
    )
  })
);
var OpenAPIDocumentSchema = compose(
  Type.Object({
    /** REQUIRED. This string MUST be the version number of the OpenAPI Specification that the OpenAPI Document uses. The openapi field SHOULD be used by tooling to interpret the OpenAPI Document. This is not related to the API info.version string. */
    openapi: Type.String(),
    /** REQUIRED. Provides metadata about the API. The metadata MAY be used by tooling as required. */
    info: InfoObjectSchema,
    /** The default value for the $schema keyword within Schema Objects contained within this OAS document. This MUST be in the form of a URI. */
    jsonSchemaDialect: Type.Optional(Type.String()),
    /** An array of Server Objects, which provide connectivity information to a target server. If the servers field is not provided, or is an empty array, the default value would be a Server Object with a url value of /. */
    servers: Type.Optional(Type.Array(ServerObjectSchema)),
    /** The available paths and operations for the API. */
    paths: Type.Optional(PathsObjectSchema),
    /** The incoming webhooks that MAY be received as part of this API and that the API consumer MAY choose to implement. Closely related to the callbacks feature, this section describes requests initiated other than by an API call, for example by an out of band registration. The key name is a unique string to refer to each webhook, while the (optionally referenced) Path Item Object describes a request that may be initiated by the API provider and the expected responses. An example is available. */
    webhooks: Type.Optional(Type.Record(Type.String(), PathItemObjectSchema)),
    /** An element to hold various Objects for the OpenAPI Description. */
    components: Type.Optional(ComponentsObjectSchema),
    /** A declaration of which security mechanisms can be used across the API. The list of values includes alternative Security Requirement Objects that can be used. Only one of the Security Requirement Objects need to be satisfied to authorize a request. Individual operations can override this definition. The list can be incomplete, up to being empty or absent. To make security explicitly optional, an empty security requirement ({}) can be included in the array. */
    security: Type.Optional(Type.Array(SecurityRequirementObjectSchema)),
    /** A list of tags used by the OpenAPI Description with additional metadata. The order of the tags can be used to reflect on their order by the parsing tools. Not all tags that are used by the Operation Object must be declared. The tags that are not declared MAY be organized randomly or based on the tools' logic. Each tag name in the list MUST be unique. */
    tags: Type.Optional(Type.Array(TagObjectSchema)),
    /** Additional external documentation. */
    externalDocs: Type.Optional(ExternalDocumentationObjectSchema)
  }),
  ExtensionsSchema,
  OpenApiExtensionsSchema
);

// node_modules/.pnpm/@scalar+workspace-store@0.5.2_typescript@5.8.3/node_modules/@scalar/workspace-store/dist/client.js
async function loadDocument(workspaceDocument) {
  if ("url" in workspaceDocument) {
    return fetchUrls().exec(workspaceDocument.url);
  }
  return {
    ok: true,
    data: workspaceDocument.document
  };
}
function createWorkspaceStore(workspaceProps) {
  var _a;
  const workspace = reactive({
    ...workspaceProps == null ? void 0 : workspaceProps.meta,
    documents: {},
    /**
     * Returns the currently active document from the workspace.
     * The active document is determined by the 'x-scalar-active-document' metadata field,
     * falling back to the first document in the workspace if no active document is specified.
     *
     * @returns The active document or undefined if no document is found
     */
    get activeDocument() {
      const activeDocumentKey = workspace[extensions.workspace.activeDocument] ?? Object.keys(workspace.documents)[0] ?? "";
      return workspace.documents[activeDocumentKey];
    }
  });
  function addDocumentSync(input) {
    const { name, meta } = input;
    const document2 = coerceValue(OpenAPIDocumentSchema, upgrade(input.document).specification);
    if (document2[extensions.document.navigation] === void 0) {
      document2[extensions.document.navigation] = traverseDocument(document2, input.config ?? {}).entries;
    }
    workspace.documents[name] = createMagicProxy({ ...document2, ...meta });
  }
  (_a = workspaceProps == null ? void 0 : workspaceProps.documents) == null ? void 0 : _a.forEach(addDocumentSync);
  const visitedNodesCache = /* @__PURE__ */ new Set();
  return {
    /**
     * Returns the reactive workspace object with an additional activeDocument getter
     */
    get workspace() {
      return workspace;
    },
    /**
     * Updates a specific metadata field in the workspace
     * @param key - The metadata field to update
     * @param value - The new value for the field
     * @example
     * // Update the workspace title
     * update('x-scalar-active-document', 'document-name')
     */
    update(key, value) {
      if (key === "__proto__" || key === "constructor" || key === "prototype") {
        throw new Error("Invalid key: cannot modify prototype");
      }
      Object.assign(workspace, { [key]: value });
    },
    /**
     * Updates a specific metadata field in a document
     * @param name - The name of the document to update ('active' or a specific document name)
     * @param key - The metadata field to update
     * @param value - The new value for the field
     * @throws Error if the specified document doesn't exist
     * @example
     * // Update the auth of the active document
     * updateDocument('active', 'x-scalar-active-auth', 'Bearer')
     * // Update the auth of a specific document
     * updateDocument('document-name', 'x-scalar-active-auth', 'Bearer')
     */
    updateDocument(name, key, value) {
      const currentDocument = workspace.documents[name === "active" ? workspace[extensions.workspace.activeDocument] ?? Object.keys(workspace.documents)[0] ?? "" : name];
      if (!currentDocument) {
        throw "Please select a valid document";
      }
      Object.assign(currentDocument, { [key]: value });
    },
    /**
     * Resolves a reference in the active document by following the provided path and resolving any external $ref references.
     * This method traverses the document structure following the given path and resolves any $ref references it encounters.
     * During resolution, it sets a loading status and updates the reference with the resolved content.
     *
     * @param path - Array of strings representing the path to the reference (e.g. ['paths', '/users', 'get', 'responses', '200'])
     * @throws Error if the path is invalid or empty
     * @example
     * // Resolve a reference in the active document
     * resolve(['paths', '/users', 'get', 'responses', '200'])
     */
    resolve: async (path) => {
      const activeDocument = workspace.activeDocument;
      const target = getValueByPath(activeDocument, path);
      if (!isObject(target)) {
        console.error(
          `Invalid path provided for resolution. Path: [${path.join(", ")}]. Found value of type: ${typeof target}. Expected an object.`
        );
        return;
      }
      return bundle(target, {
        root: activeDocument,
        treeShake: false,
        plugins: [fetchUrls()],
        urlMap: false,
        hooks: {
          onResolveStart: (node) => {
            node["$status"] = "loading";
          },
          onResolveError: (node) => {
            node["$status"] = "error";
          }
        },
        visitedNodes: visitedNodesCache
      });
    },
    /**
     * Adds a new document to the workspace
     * @param document - The document content to add. This should be a valid OpenAPI/Swagger document or other supported format
     * @param meta - Metadata for the document, including its name and other properties defined in WorkspaceDocumentMeta
     * @example
     * // Add a new OpenAPI document to the workspace
     * store.addDocument({
     *   name: 'name',
     *   document: {
     *     openapi: '3.0.0',
     *     info: { title: 'title' },
     *   },
     *   meta: {
     *     'x-scalar-active-auth': 'Bearer',
     *     'x-scalar-active-server': 'production'
     *   }
     * })
     */
    addDocument: async (input) => {
      const { name, meta, config } = input;
      const resolve = await loadDocument(input);
      if (!resolve.ok || !isObject(resolve.data)) {
        console.error(`Can not load the document '${name}'`);
        workspace.documents[name] = {
          ...meta
        };
        return;
      }
      addDocumentSync({ document: resolve.data, name, meta, config });
    },
    /**
     * Similar to addDocument but requires and in-mem object to be provided and loads the document synchronously
     * @param document - The document content to add. This should be a valid OpenAPI/Swagger document or other supported format
     * @param meta - Metadata for the document, including its name and other properties defined in WorkspaceDocumentMeta
     * @example
     * // Add a new OpenAPI document to the workspace
     * store.addDocument({
     *   name: 'name',
     *   document: {
     *     openapi: '3.0.0',
     *     info: { title: 'title' },
     *   },
     *   meta: {
     *     'x-scalar-active-auth': 'Bearer',
     *     'x-scalar-active-server': 'production'
     *   }
     * })
     */
    addDocumentSync
  };
}

// node_modules/.pnpm/packrup@0.1.2/node_modules/packrup/dist/index.mjs
function unpackToArray(input, options) {
  const unpacked = [];
  const kFn = options.resolveKeyData || ((ctx) => ctx.key);
  const vFn = options.resolveValueData || ((ctx) => ctx.value);
  for (const [k12, v11] of Object.entries(input)) {
    unpacked.push(...(Array.isArray(v11) ? v11 : [v11]).map((i15) => {
      const ctx = { key: k12, value: i15 };
      const val = vFn(ctx);
      if (typeof val === "object")
        return unpackToArray(val, options);
      if (Array.isArray(val))
        return val;
      return {
        [typeof options.key === "function" ? options.key(ctx) : options.key]: kFn(ctx),
        [typeof options.value === "function" ? options.value(ctx) : options.value]: val
      };
    }).flat());
  }
  return unpacked;
}
function unpackToString(value, options) {
  return Object.entries(value).map(([key, value2]) => {
    if (typeof value2 === "object")
      value2 = unpackToString(value2, options);
    if (options.resolve) {
      const resolved = options.resolve({ key, value: value2 });
      if (typeof resolved !== "undefined")
        return resolved;
    }
    if (typeof value2 === "number")
      value2 = value2.toString();
    if (typeof value2 === "string" && options.wrapValue) {
      value2 = value2.replace(new RegExp(options.wrapValue, "g"), `\\${options.wrapValue}`);
      value2 = `${options.wrapValue}${value2}${options.wrapValue}`;
    }
    return `${key}${options.keyValueSeparator || ""}${value2}`;
  }).join(options.entrySeparator || "");
}

// node_modules/.pnpm/@unhead+shared@1.11.20/node_modules/@unhead/shared/dist/index.mjs
var TagsWithInnerContent = /* @__PURE__ */ new Set(["title", "titleTemplate", "script", "style", "noscript"]);
var HasElementTags = /* @__PURE__ */ new Set([
  "base",
  "meta",
  "link",
  "style",
  "script",
  "noscript"
]);
var ValidHeadTags = /* @__PURE__ */ new Set([
  "title",
  "titleTemplate",
  "templateParams",
  "base",
  "htmlAttrs",
  "bodyAttrs",
  "meta",
  "link",
  "style",
  "script",
  "noscript"
]);
var UniqueTags = /* @__PURE__ */ new Set(["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"]);
var TagConfigKeys = /* @__PURE__ */ new Set(["tagPosition", "tagPriority", "tagDuplicateStrategy", "children", "innerHTML", "textContent", "processTemplateParams"]);
var IsBrowser = typeof window !== "undefined";
var composableNames = [
  "getActiveHead",
  "useHead",
  "useSeoMeta",
  "useHeadSafe",
  "useServerHead",
  "useServerSeoMeta",
  "useServerHeadSafe"
];
function defineHeadPlugin(plugin) {
  return plugin;
}
function hashCode(s19) {
  let h10 = 9;
  for (let i15 = 0; i15 < s19.length; )
    h10 = Math.imul(h10 ^ s19.charCodeAt(i15++), 9 ** 9);
  return ((h10 ^ h10 >>> 9) + 65536).toString(16).substring(1, 8).toLowerCase();
}
function hashTag(tag) {
  if (tag._h) {
    return tag._h;
  }
  if (tag._d) {
    return hashCode(tag._d);
  }
  let content = `${tag.tag}:${tag.textContent || tag.innerHTML || ""}:`;
  for (const key in tag.props) {
    content += `${key}:${String(tag.props[key])},`;
  }
  return hashCode(content);
}
var p4 = (p22) => ({ keyValue: p22, metaKey: "property" });
var k3 = (p22) => ({ keyValue: p22 });
var MetaPackingSchema = {
  appleItunesApp: {
    unpack: {
      entrySeparator: ", ",
      resolve({ key, value }) {
        return `${fixKeyCase(key)}=${value}`;
      }
    }
  },
  articleExpirationTime: p4("article:expiration_time"),
  articleModifiedTime: p4("article:modified_time"),
  articlePublishedTime: p4("article:published_time"),
  bookReleaseDate: p4("book:release_date"),
  charset: {
    metaKey: "charset"
  },
  contentSecurityPolicy: {
    unpack: {
      entrySeparator: "; ",
      resolve({ key, value }) {
        return `${fixKeyCase(key)} ${value}`;
      }
    },
    metaKey: "http-equiv"
  },
  contentType: {
    metaKey: "http-equiv"
  },
  defaultStyle: {
    metaKey: "http-equiv"
  },
  fbAppId: p4("fb:app_id"),
  msapplicationConfig: k3("msapplication-Config"),
  msapplicationTileColor: k3("msapplication-TileColor"),
  msapplicationTileImage: k3("msapplication-TileImage"),
  ogAudioSecureUrl: p4("og:audio:secure_url"),
  ogAudioUrl: p4("og:audio"),
  ogImageSecureUrl: p4("og:image:secure_url"),
  ogImageUrl: p4("og:image"),
  ogSiteName: p4("og:site_name"),
  ogVideoSecureUrl: p4("og:video:secure_url"),
  ogVideoUrl: p4("og:video"),
  profileFirstName: p4("profile:first_name"),
  profileLastName: p4("profile:last_name"),
  profileUsername: p4("profile:username"),
  refresh: {
    metaKey: "http-equiv",
    unpack: {
      entrySeparator: ";",
      resolve({ key, value }) {
        if (key === "seconds")
          return `${value}`;
      }
    }
  },
  robots: {
    unpack: {
      entrySeparator: ", ",
      resolve({ key, value }) {
        if (typeof value === "boolean")
          return `${fixKeyCase(key)}`;
        else
          return `${fixKeyCase(key)}:${value}`;
      }
    }
  },
  xUaCompatible: {
    metaKey: "http-equiv"
  }
};
var openGraphNamespaces = /* @__PURE__ */ new Set([
  "og",
  "book",
  "article",
  "profile"
]);
function resolveMetaKeyType(key) {
  var _a;
  const fKey = fixKeyCase(key);
  const prefixIndex = fKey.indexOf(":");
  if (openGraphNamespaces.has(fKey.substring(0, prefixIndex)))
    return "property";
  return ((_a = MetaPackingSchema[key]) == null ? void 0 : _a.metaKey) || "name";
}
function resolveMetaKeyValue(key) {
  var _a;
  return ((_a = MetaPackingSchema[key]) == null ? void 0 : _a.keyValue) || fixKeyCase(key);
}
function fixKeyCase(key) {
  const updated = key.replace(/([A-Z])/g, "-$1").toLowerCase();
  const prefixIndex = updated.indexOf("-");
  const fKey = updated.substring(0, prefixIndex);
  if (fKey === "twitter" || openGraphNamespaces.has(fKey))
    return key.replace(/([A-Z])/g, ":$1").toLowerCase();
  return updated;
}
function changeKeyCasingDeep(input) {
  if (Array.isArray(input)) {
    return input.map((entry) => changeKeyCasingDeep(entry));
  }
  if (typeof input !== "object" || Array.isArray(input))
    return input;
  const output = {};
  for (const key in input) {
    if (!Object.prototype.hasOwnProperty.call(input, key)) {
      continue;
    }
    output[fixKeyCase(key)] = changeKeyCasingDeep(input[key]);
  }
  return output;
}
function resolvePackedMetaObjectValue(value, key) {
  const definition = MetaPackingSchema[key];
  if (key === "refresh")
    return `${value.seconds};url=${value.url}`;
  return unpackToString(
    changeKeyCasingDeep(value),
    {
      keyValueSeparator: "=",
      entrySeparator: ", ",
      resolve({ value: value2, key: key2 }) {
        if (value2 === null)
          return "";
        if (typeof value2 === "boolean")
          return `${key2}`;
      },
      ...definition == null ? void 0 : definition.unpack
    }
  );
}
var ObjectArrayEntries = /* @__PURE__ */ new Set(["og:image", "og:video", "og:audio", "twitter:image"]);
function sanitize(input) {
  const out = {};
  for (const k22 in input) {
    if (!Object.prototype.hasOwnProperty.call(input, k22)) {
      continue;
    }
    const v11 = input[k22];
    if (String(v11) !== "false" && k22)
      out[k22] = v11;
  }
  return out;
}
function handleObjectEntry(key, v11) {
  const value = sanitize(v11);
  const fKey = fixKeyCase(key);
  const attr = resolveMetaKeyType(fKey);
  if (ObjectArrayEntries.has(fKey)) {
    const input = {};
    for (const k22 in value) {
      if (!Object.prototype.hasOwnProperty.call(value, k22)) {
        continue;
      }
      input[`${key}${k22 === "url" ? "" : `${k22[0].toUpperCase()}${k22.slice(1)}`}`] = value[k22];
    }
    return unpackMeta(input).sort((a22, b9) => {
      var _a, _b;
      return (((_a = a22[attr]) == null ? void 0 : _a.length) || 0) - (((_b = b9[attr]) == null ? void 0 : _b.length) || 0);
    });
  }
  return [{ [attr]: fKey, ...value }];
}
function unpackMeta(input) {
  const extras = [];
  const primitives = {};
  for (const key in input) {
    if (!Object.prototype.hasOwnProperty.call(input, key)) {
      continue;
    }
    const value = input[key];
    if (!Array.isArray(value)) {
      if (typeof value === "object" && value) {
        if (ObjectArrayEntries.has(fixKeyCase(key))) {
          extras.push(...handleObjectEntry(key, value));
          continue;
        }
        primitives[key] = sanitize(value);
      } else {
        primitives[key] = value;
      }
      continue;
    }
    for (const v11 of value) {
      extras.push(...typeof v11 === "string" ? unpackMeta({ [key]: v11 }) : handleObjectEntry(key, v11));
    }
  }
  const meta = unpackToArray(primitives, {
    key({ key }) {
      return resolveMetaKeyType(key);
    },
    value({ key }) {
      return key === "charset" ? "charset" : "content";
    },
    resolveKeyData({ key }) {
      return resolveMetaKeyValue(key);
    },
    resolveValueData({ value, key }) {
      if (value === null)
        return "_null";
      if (typeof value === "object")
        return resolvePackedMetaObjectValue(value, key);
      return typeof value === "number" ? value.toString() : value;
    }
  });
  return [...extras, ...meta].map((m38) => {
    if (m38.content === "_null")
      m38.content = null;
    return m38;
  });
}
function thenable(val, thenFn) {
  if (val instanceof Promise) {
    return val.then(thenFn);
  }
  return thenFn(val);
}
function normaliseTag(tagName, input, e11, normalizedProps) {
  const props = normalizedProps || normaliseProps(
    // explicitly check for an object
    // @ts-expect-error untyped
    typeof input === "object" && typeof input !== "function" && !(input instanceof Promise) ? { ...input } : { [tagName === "script" || tagName === "noscript" || tagName === "style" ? "innerHTML" : "textContent"]: input },
    tagName === "templateParams" || tagName === "titleTemplate"
  );
  if (props instanceof Promise) {
    return props.then((val) => normaliseTag(tagName, input, e11, val));
  }
  const tag = {
    tag: tagName,
    props
  };
  for (const k12 of TagConfigKeys) {
    const val = tag.props[k12] !== void 0 ? tag.props[k12] : e11[k12];
    if (val !== void 0) {
      if (!(k12 === "innerHTML" || k12 === "textContent" || k12 === "children") || TagsWithInnerContent.has(tag.tag)) {
        tag[k12 === "children" ? "innerHTML" : k12] = val;
      }
      delete tag.props[k12];
    }
  }
  if (tag.props.body) {
    tag.tagPosition = "bodyClose";
    delete tag.props.body;
  }
  if (tag.tag === "script") {
    if (typeof tag.innerHTML === "object") {
      tag.innerHTML = JSON.stringify(tag.innerHTML);
      tag.props.type = tag.props.type || "application/json";
    }
  }
  return Array.isArray(tag.props.content) ? tag.props.content.map((v11) => ({ ...tag, props: { ...tag.props, content: v11 } })) : tag;
}
function normaliseStyleClassProps(key, v11) {
  var _a;
  const sep = key === "class" ? " " : ";";
  if (v11 && typeof v11 === "object" && !Array.isArray(v11)) {
    v11 = Object.entries(v11).filter(([, v22]) => v22).map(([k12, v22]) => key === "style" ? `${k12}:${v22}` : k12);
  }
  return (_a = String(Array.isArray(v11) ? v11.join(sep) : v11)) == null ? void 0 : _a.split(sep).filter((c8) => Boolean(c8.trim())).join(sep);
}
function nestedNormaliseProps(props, virtual, keys2, startIndex) {
  for (let i15 = startIndex; i15 < keys2.length; i15 += 1) {
    const k12 = keys2[i15];
    if (k12 === "class" || k12 === "style") {
      props[k12] = normaliseStyleClassProps(k12, props[k12]);
      continue;
    }
    if (props[k12] instanceof Promise) {
      return props[k12].then((val) => {
        props[k12] = val;
        return nestedNormaliseProps(props, virtual, keys2, i15);
      });
    }
    if (!virtual && !TagConfigKeys.has(k12)) {
      const v11 = String(props[k12]);
      const isDataKey = k12.startsWith("data-");
      if (v11 === "true" || v11 === "") {
        props[k12] = isDataKey ? "true" : true;
      } else if (!props[k12]) {
        if (isDataKey && v11 === "false")
          props[k12] = "false";
        else
          delete props[k12];
      }
    }
  }
}
function normaliseProps(props, virtual = false) {
  const resolvedProps = nestedNormaliseProps(props, virtual, Object.keys(props), 0);
  if (resolvedProps instanceof Promise) {
    return resolvedProps.then(() => props);
  }
  return props;
}
var TagEntityBits = 10;
function nestedNormaliseEntryTags(headTags, tagPromises, startIndex) {
  for (let i15 = startIndex; i15 < tagPromises.length; i15 += 1) {
    const tags = tagPromises[i15];
    if (tags instanceof Promise) {
      return tags.then((val) => {
        tagPromises[i15] = val;
        return nestedNormaliseEntryTags(headTags, tagPromises, i15);
      });
    }
    if (Array.isArray(tags)) {
      headTags.push(...tags);
    } else {
      headTags.push(tags);
    }
  }
}
function normaliseEntryTags(e11) {
  const tagPromises = [];
  const input = e11.resolvedInput;
  for (const k12 in input) {
    if (!Object.prototype.hasOwnProperty.call(input, k12)) {
      continue;
    }
    const v11 = input[k12];
    if (v11 === void 0 || !ValidHeadTags.has(k12)) {
      continue;
    }
    if (Array.isArray(v11)) {
      for (const props of v11) {
        tagPromises.push(normaliseTag(k12, props, e11));
      }
      continue;
    }
    tagPromises.push(normaliseTag(k12, v11, e11));
  }
  if (tagPromises.length === 0) {
    return [];
  }
  const headTags = [];
  return thenable(nestedNormaliseEntryTags(headTags, tagPromises, 0), () => headTags.map((t8, i15) => {
    t8._e = e11._i;
    e11.mode && (t8._m = e11.mode);
    t8._p = (e11._i << TagEntityBits) + i15;
    return t8;
  }));
}
var NetworkEvents = /* @__PURE__ */ new Set(["onload", "onerror", "onabort", "onprogress", "onloadstart"]);
var TAG_WEIGHTS = {
  // tags
  base: -10,
  title: 10
};
var TAG_ALIASES = {
  // relative scores to their default values
  critical: -80,
  high: -10,
  low: 20
};
function tagWeight(tag) {
  const priority = tag.tagPriority;
  if (typeof priority === "number")
    return priority;
  let weight = 100;
  if (tag.tag === "meta") {
    if (tag.props["http-equiv"] === "content-security-policy")
      weight = -30;
    else if (tag.props.charset)
      weight = -20;
    else if (tag.props.name === "viewport")
      weight = -15;
  } else if (tag.tag === "link" && tag.props.rel === "preconnect") {
    weight = 20;
  } else if (tag.tag in TAG_WEIGHTS) {
    weight = TAG_WEIGHTS[tag.tag];
  }
  if (priority && priority in TAG_ALIASES) {
    return weight + TAG_ALIASES[priority];
  }
  return weight;
}
var SortModifiers = [{ prefix: "before:", offset: -1 }, { prefix: "after:", offset: 1 }];
var allowedMetaProperties = ["name", "property", "http-equiv"];
function tagDedupeKey(tag) {
  const { props, tag: tagName } = tag;
  if (UniqueTags.has(tagName))
    return tagName;
  if (tagName === "link" && props.rel === "canonical")
    return "canonical";
  if (props.charset)
    return "charset";
  if (props.id) {
    return `${tagName}:id:${props.id}`;
  }
  for (const n7 of allowedMetaProperties) {
    if (props[n7] !== void 0) {
      return `${tagName}:${n7}:${props[n7]}`;
    }
  }
  return false;
}
var sepSub = "%separator";
function sub(p19, token, isJson2 = false) {
  var _a;
  let val;
  if (token === "s" || token === "pageTitle") {
    val = p19.pageTitle;
  } else if (token.includes(".")) {
    const dotIndex = token.indexOf(".");
    val = (_a = p19[token.substring(0, dotIndex)]) == null ? void 0 : _a[token.substring(dotIndex + 1)];
  } else {
    val = p19[token];
  }
  if (val !== void 0) {
    return isJson2 ? (val || "").replace(/"/g, '\\"') : val || "";
  }
  return void 0;
}
var sepSubRe = new RegExp(`${sepSub}(?:\\s*${sepSub})*`, "g");
function processTemplateParams(s19, p19, sep, isJson2 = false) {
  if (typeof s19 !== "string" || !s19.includes("%"))
    return s19;
  let decoded = s19;
  try {
    decoded = decodeURI(s19);
  } catch {
  }
  const tokens = decoded.match(/%\w+(?:\.\w+)?/g);
  if (!tokens) {
    return s19;
  }
  const hasSepSub = s19.includes(sepSub);
  s19 = s19.replace(/%\w+(?:\.\w+)?/g, (token) => {
    if (token === sepSub || !tokens.includes(token)) {
      return token;
    }
    const re2 = sub(p19, token.slice(1), isJson2);
    return re2 !== void 0 ? re2 : token;
  }).trim();
  if (hasSepSub) {
    if (s19.endsWith(sepSub))
      s19 = s19.slice(0, -sepSub.length);
    if (s19.startsWith(sepSub))
      s19 = s19.slice(sepSub.length);
    s19 = s19.replace(sepSubRe, sep).trim();
  }
  return s19;
}
function resolveTitleTemplate(template, title) {
  if (template == null)
    return title || null;
  if (typeof template === "function")
    return template(title);
  return template;
}

// node_modules/.pnpm/@unhead+dom@1.11.20/node_modules/@unhead/dom/dist/index.mjs
async function renderDOMHead(head, options = {}) {
  const dom = options.document || head.resolvedOptions.document;
  if (!dom || !head.dirty)
    return;
  const beforeRenderCtx = { shouldRender: true, tags: [] };
  await head.hooks.callHook("dom:beforeRender", beforeRenderCtx);
  if (!beforeRenderCtx.shouldRender)
    return;
  if (head._domUpdatePromise) {
    return head._domUpdatePromise;
  }
  head._domUpdatePromise = new Promise(async (resolve) => {
    var _a;
    const tags = (await head.resolveTags()).map((tag) => ({
      tag,
      id: HasElementTags.has(tag.tag) ? hashTag(tag) : tag.tag,
      shouldRender: true
    }));
    let state = head._dom;
    if (!state) {
      state = {
        elMap: { htmlAttrs: dom.documentElement, bodyAttrs: dom.body }
      };
      const takenDedupeKeys = /* @__PURE__ */ new Set();
      for (const key of ["body", "head"]) {
        const children = (_a = dom[key]) == null ? void 0 : _a.children;
        for (const c8 of children) {
          const tag = c8.tagName.toLowerCase();
          if (!HasElementTags.has(tag)) {
            continue;
          }
          const t8 = {
            tag,
            props: await normaliseProps(
              c8.getAttributeNames().reduce((props, name) => ({ ...props, [name]: c8.getAttribute(name) }), {})
            ),
            innerHTML: c8.innerHTML
          };
          const dedupeKey = tagDedupeKey(t8);
          let d18 = dedupeKey;
          let i15 = 1;
          while (d18 && takenDedupeKeys.has(d18))
            d18 = `${dedupeKey}:${i15++}`;
          if (d18) {
            t8._d = d18;
            takenDedupeKeys.add(d18);
          }
          state.elMap[c8.getAttribute("data-hid") || hashTag(t8)] = c8;
        }
      }
    }
    state.pendingSideEffects = { ...state.sideEffects };
    state.sideEffects = {};
    function track(id, scope, fn) {
      const k12 = `${id}:${scope}`;
      state.sideEffects[k12] = fn;
      delete state.pendingSideEffects[k12];
    }
    function trackCtx({ id, $el, tag }) {
      const isAttrTag = tag.tag.endsWith("Attrs");
      state.elMap[id] = $el;
      if (!isAttrTag) {
        if (tag.textContent && tag.textContent !== $el.textContent) {
          $el.textContent = tag.textContent;
        }
        if (tag.innerHTML && tag.innerHTML !== $el.innerHTML) {
          $el.innerHTML = tag.innerHTML;
        }
        track(id, "el", () => {
          var _a2;
          (_a2 = state.elMap[id]) == null ? void 0 : _a2.remove();
          delete state.elMap[id];
        });
      }
      if (tag._eventHandlers) {
        for (const k12 in tag._eventHandlers) {
          if (!Object.prototype.hasOwnProperty.call(tag._eventHandlers, k12)) {
            continue;
          }
          if ($el.getAttribute(`data-${k12}`) !== "") {
            (tag.tag === "bodyAttrs" ? dom.defaultView : $el).addEventListener(
              // onload -> load
              k12.substring(2),
              tag._eventHandlers[k12].bind($el)
            );
            $el.setAttribute(`data-${k12}`, "");
          }
        }
      }
      for (const k12 in tag.props) {
        if (!Object.prototype.hasOwnProperty.call(tag.props, k12)) {
          continue;
        }
        const value = tag.props[k12];
        const ck = `attr:${k12}`;
        if (k12 === "class") {
          if (!value) {
            continue;
          }
          for (const c8 of value.split(" ")) {
            isAttrTag && track(id, `${ck}:${c8}`, () => $el.classList.remove(c8));
            !$el.classList.contains(c8) && $el.classList.add(c8);
          }
        } else if (k12 === "style") {
          if (!value) {
            continue;
          }
          for (const c8 of value.split(";")) {
            const propIndex = c8.indexOf(":");
            const k22 = c8.substring(0, propIndex).trim();
            const v11 = c8.substring(propIndex + 1).trim();
            track(id, `${ck}:${k22}`, () => {
              $el.style.removeProperty(k22);
            });
            $el.style.setProperty(k22, v11);
          }
        } else {
          $el.getAttribute(k12) !== value && $el.setAttribute(k12, value === true ? "" : String(value));
          isAttrTag && track(id, ck, () => $el.removeAttribute(k12));
        }
      }
    }
    const pending = [];
    const frag = {
      bodyClose: void 0,
      bodyOpen: void 0,
      head: void 0
    };
    for (const ctx of tags) {
      const { tag, shouldRender, id } = ctx;
      if (!shouldRender)
        continue;
      if (tag.tag === "title") {
        dom.title = tag.textContent;
        continue;
      }
      ctx.$el = ctx.$el || state.elMap[id];
      if (ctx.$el) {
        trackCtx(ctx);
      } else if (HasElementTags.has(tag.tag)) {
        pending.push(ctx);
      }
    }
    for (const ctx of pending) {
      const pos = ctx.tag.tagPosition || "head";
      ctx.$el = dom.createElement(ctx.tag.tag);
      trackCtx(ctx);
      frag[pos] = frag[pos] || dom.createDocumentFragment();
      frag[pos].appendChild(ctx.$el);
    }
    for (const ctx of tags)
      await head.hooks.callHook("dom:renderTag", ctx, dom, track);
    frag.head && dom.head.appendChild(frag.head);
    frag.bodyOpen && dom.body.insertBefore(frag.bodyOpen, dom.body.firstChild);
    frag.bodyClose && dom.body.appendChild(frag.bodyClose);
    for (const k12 in state.pendingSideEffects) {
      state.pendingSideEffects[k12]();
    }
    head._dom = state;
    await head.hooks.callHook("dom:rendered", { renders: tags });
    resolve();
  }).finally(() => {
    head._domUpdatePromise = void 0;
    head.dirty = false;
  });
  return head._domUpdatePromise;
}
function debouncedRenderDOMHead(head, options = {}) {
  const fn = options.delayFn || ((fn2) => setTimeout(fn2, 10));
  return head._domDebouncedUpdatePromise = head._domDebouncedUpdatePromise || new Promise((resolve) => fn(() => {
    return renderDOMHead(head, options).then(() => {
      delete head._domDebouncedUpdatePromise;
      resolve();
    });
  }));
}
function DomPlugin(options) {
  return defineHeadPlugin((head) => {
    var _a, _b;
    const initialPayload = ((_b = (_a = head.resolvedOptions.document) == null ? void 0 : _a.head.querySelector('script[id="unhead:payload"]')) == null ? void 0 : _b.innerHTML) || false;
    if (initialPayload) {
      head.push(JSON.parse(initialPayload));
    }
    return {
      mode: "client",
      hooks: {
        "entries:updated": (head2) => {
          debouncedRenderDOMHead(head2, options);
        }
      }
    };
  });
}

// node_modules/.pnpm/unhead@1.11.20/node_modules/unhead/dist/index.mjs
var UsesMergeStrategy = /* @__PURE__ */ new Set(["templateParams", "htmlAttrs", "bodyAttrs"]);
var DedupePlugin = defineHeadPlugin({
  hooks: {
    "tag:normalise": ({ tag }) => {
      if (tag.props.hid) {
        tag.key = tag.props.hid;
        delete tag.props.hid;
      }
      if (tag.props.vmid) {
        tag.key = tag.props.vmid;
        delete tag.props.vmid;
      }
      if (tag.props.key) {
        tag.key = tag.props.key;
        delete tag.props.key;
      }
      const generatedKey = tagDedupeKey(tag);
      if (generatedKey && !generatedKey.startsWith("meta:og:") && !generatedKey.startsWith("meta:twitter:")) {
        delete tag.key;
      }
      const dedupe = generatedKey || (tag.key ? `${tag.tag}:${tag.key}` : false);
      if (dedupe)
        tag._d = dedupe;
    },
    "tags:resolve": (ctx) => {
      const deduping = /* @__PURE__ */ Object.create(null);
      for (const tag of ctx.tags) {
        const dedupeKey = (tag.key ? `${tag.tag}:${tag.key}` : tag._d) || hashTag(tag);
        const dupedTag = deduping[dedupeKey];
        if (dupedTag) {
          let strategy = tag == null ? void 0 : tag.tagDuplicateStrategy;
          if (!strategy && UsesMergeStrategy.has(tag.tag))
            strategy = "merge";
          if (strategy === "merge") {
            const oldProps = dupedTag.props;
            if (oldProps.style && tag.props.style) {
              if (oldProps.style[oldProps.style.length - 1] !== ";") {
                oldProps.style += ";";
              }
              tag.props.style = `${oldProps.style} ${tag.props.style}`;
            }
            if (oldProps.class && tag.props.class) {
              tag.props.class = `${oldProps.class} ${tag.props.class}`;
            } else if (oldProps.class) {
              tag.props.class = oldProps.class;
            }
            deduping[dedupeKey].props = {
              ...oldProps,
              ...tag.props
            };
            continue;
          } else if (tag._e === dupedTag._e) {
            dupedTag._duped = dupedTag._duped || [];
            tag._d = `${dupedTag._d}:${dupedTag._duped.length + 1}`;
            dupedTag._duped.push(tag);
            continue;
          } else if (tagWeight(tag) > tagWeight(dupedTag)) {
            continue;
          }
        }
        const hasProps = tag.innerHTML || tag.textContent || Object.keys(tag.props).length !== 0;
        if (!hasProps && HasElementTags.has(tag.tag)) {
          delete deduping[dedupeKey];
          continue;
        }
        deduping[dedupeKey] = tag;
      }
      const newTags = [];
      for (const key in deduping) {
        const tag = deduping[key];
        const dupes = tag._duped;
        newTags.push(tag);
        if (dupes) {
          delete tag._duped;
          newTags.push(...dupes);
        }
      }
      ctx.tags = newTags;
      ctx.tags = ctx.tags.filter((t8) => !(t8.tag === "meta" && (t8.props.name || t8.props.property) && !t8.props.content));
    }
  }
});
var ValidEventTags = /* @__PURE__ */ new Set(["script", "link", "bodyAttrs"]);
var EventHandlersPlugin = defineHeadPlugin((head) => ({
  hooks: {
    "tags:resolve": (ctx) => {
      for (const tag of ctx.tags) {
        if (!ValidEventTags.has(tag.tag)) {
          continue;
        }
        const props = tag.props;
        for (const key in props) {
          if (key[0] !== "o" || key[1] !== "n") {
            continue;
          }
          if (!Object.prototype.hasOwnProperty.call(props, key)) {
            continue;
          }
          const value = props[key];
          if (typeof value !== "function") {
            continue;
          }
          if (head.ssr && NetworkEvents.has(key)) {
            props[key] = `this.dataset.${key}fired = true`;
          } else {
            delete props[key];
          }
          tag._eventHandlers = tag._eventHandlers || {};
          tag._eventHandlers[key] = value;
        }
        if (head.ssr && tag._eventHandlers && (tag.props.src || tag.props.href)) {
          tag.key = tag.key || hashCode(tag.props.src || tag.props.href);
        }
      }
    },
    "dom:renderTag": ({ $el, tag }) => {
      var _a, _b;
      const dataset = $el == null ? void 0 : $el.dataset;
      if (!dataset) {
        return;
      }
      for (const k12 in dataset) {
        if (!k12.endsWith("fired")) {
          continue;
        }
        const ek = k12.slice(0, -5);
        if (!NetworkEvents.has(ek)) {
          continue;
        }
        (_b = (_a = tag._eventHandlers) == null ? void 0 : _a[ek]) == null ? void 0 : _b.call($el, new Event(ek.substring(2)));
      }
    }
  }
}));
var DupeableTags = /* @__PURE__ */ new Set(["link", "style", "script", "noscript"]);
var HashKeyedPlugin = defineHeadPlugin({
  hooks: {
    "tag:normalise": ({ tag }) => {
      if (tag.key && DupeableTags.has(tag.tag)) {
        tag.props["data-hid"] = tag._h = hashCode(tag.key);
      }
    }
  }
});
var PayloadPlugin = defineHeadPlugin({
  mode: "server",
  hooks: {
    "tags:beforeResolve": (ctx) => {
      const payload = {};
      let hasPayload = false;
      for (const tag of ctx.tags) {
        if (tag._m !== "server" || tag.tag !== "titleTemplate" && tag.tag !== "templateParams" && tag.tag !== "title") {
          continue;
        }
        payload[tag.tag] = tag.tag === "title" || tag.tag === "titleTemplate" ? tag.textContent : tag.props;
        hasPayload = true;
      }
      if (hasPayload) {
        ctx.tags.push({
          tag: "script",
          innerHTML: JSON.stringify(payload),
          props: { id: "unhead:payload", type: "application/json" }
        });
      }
    }
  }
});
var SortPlugin = defineHeadPlugin({
  hooks: {
    "tags:resolve": (ctx) => {
      var _a;
      for (const tag of ctx.tags) {
        if (typeof tag.tagPriority !== "string") {
          continue;
        }
        for (const { prefix, offset } of SortModifiers) {
          if (!tag.tagPriority.startsWith(prefix)) {
            continue;
          }
          const key = tag.tagPriority.substring(prefix.length);
          const position = (_a = ctx.tags.find((tag2) => tag2._d === key)) == null ? void 0 : _a._p;
          if (position !== void 0) {
            tag._p = position + offset;
            break;
          }
        }
      }
      ctx.tags.sort((a22, b9) => {
        const aWeight = tagWeight(a22);
        const bWeight = tagWeight(b9);
        if (aWeight < bWeight) {
          return -1;
        } else if (aWeight > bWeight) {
          return 1;
        }
        return a22._p - b9._p;
      });
    }
  }
});
var SupportedAttrs = {
  meta: "content",
  link: "href",
  htmlAttrs: "lang"
};
var contentAttrs = ["innerHTML", "textContent"];
var TemplateParamsPlugin = defineHeadPlugin((head) => ({
  hooks: {
    "tags:resolve": (ctx) => {
      var _a;
      const { tags } = ctx;
      let templateParams;
      for (let i15 = 0; i15 < tags.length; i15 += 1) {
        const tag = tags[i15];
        if (tag.tag !== "templateParams") {
          continue;
        }
        templateParams = ctx.tags.splice(i15, 1)[0].props;
        i15 -= 1;
      }
      const params = templateParams || {};
      const sep = params.separator || "|";
      delete params.separator;
      params.pageTitle = processTemplateParams(
        // find templateParams
        params.pageTitle || ((_a = tags.find((tag) => tag.tag === "title")) == null ? void 0 : _a.textContent) || "",
        params,
        sep
      );
      for (const tag of tags) {
        if (tag.processTemplateParams === false) {
          continue;
        }
        const v11 = SupportedAttrs[tag.tag];
        if (v11 && typeof tag.props[v11] === "string") {
          tag.props[v11] = processTemplateParams(tag.props[v11], params, sep);
        } else if (tag.processTemplateParams || tag.tag === "titleTemplate" || tag.tag === "title") {
          for (const p19 of contentAttrs) {
            if (typeof tag[p19] === "string")
              tag[p19] = processTemplateParams(tag[p19], params, sep, tag.tag === "script" && tag.props.type.endsWith("json"));
          }
        }
      }
      head._templateParams = params;
      head._separator = sep;
    },
    "tags:afterResolve": ({ tags }) => {
      let title;
      for (let i15 = 0; i15 < tags.length; i15 += 1) {
        const tag = tags[i15];
        if (tag.tag === "title" && tag.processTemplateParams !== false) {
          title = tag;
        }
      }
      if (title == null ? void 0 : title.textContent) {
        title.textContent = processTemplateParams(title.textContent, head._templateParams, head._separator);
      }
    }
  }
}));
var TitleTemplatePlugin = defineHeadPlugin({
  hooks: {
    "tags:resolve": (ctx) => {
      const { tags } = ctx;
      let titleTag;
      let titleTemplateTag;
      for (let i15 = 0; i15 < tags.length; i15 += 1) {
        const tag = tags[i15];
        if (tag.tag === "title") {
          titleTag = tag;
        } else if (tag.tag === "titleTemplate") {
          titleTemplateTag = tag;
        }
      }
      if (titleTemplateTag && titleTag) {
        const newTitle = resolveTitleTemplate(
          titleTemplateTag.textContent,
          titleTag.textContent
        );
        if (newTitle !== null) {
          titleTag.textContent = newTitle || titleTag.textContent;
        } else {
          ctx.tags.splice(ctx.tags.indexOf(titleTag), 1);
        }
      } else if (titleTemplateTag) {
        const newTitle = resolveTitleTemplate(
          titleTemplateTag.textContent
        );
        if (newTitle !== null) {
          titleTemplateTag.textContent = newTitle;
          titleTemplateTag.tag = "title";
          titleTemplateTag = void 0;
        }
      }
      if (titleTemplateTag) {
        ctx.tags.splice(ctx.tags.indexOf(titleTemplateTag), 1);
      }
    }
  }
});
var XSSPlugin = defineHeadPlugin({
  hooks: {
    "tags:afterResolve": (ctx) => {
      for (const tag of ctx.tags) {
        if (typeof tag.innerHTML === "string") {
          if (tag.innerHTML && (tag.props.type === "application/ld+json" || tag.props.type === "application/json")) {
            tag.innerHTML = tag.innerHTML.replace(/</g, "\\u003C");
          } else {
            tag.innerHTML = tag.innerHTML.replace(new RegExp(`</${tag.tag}`, "g"), `<\\/${tag.tag}`);
          }
        }
      }
    }
  }
});
var activeHead;
function createHead(options = {}) {
  const head = createHeadCore(options);
  head.use(DomPlugin());
  return activeHead = head;
}
function filterMode(mode, ssr) {
  return !mode || mode === "server" && ssr || mode === "client" && !ssr;
}
function createHeadCore(options = {}) {
  const hooks = createHooks();
  hooks.addHooks(options.hooks || {});
  options.document = options.document || (IsBrowser ? document : void 0);
  const ssr = !options.document;
  const updated = () => {
    head.dirty = true;
    hooks.callHook("entries:updated", head);
  };
  let entryCount = 0;
  let entries = [];
  const plugins = [];
  const head = {
    plugins,
    dirty: false,
    resolvedOptions: options,
    hooks,
    headEntries() {
      return entries;
    },
    use(p19) {
      const plugin = typeof p19 === "function" ? p19(head) : p19;
      if (!plugin.key || !plugins.some((p22) => p22.key === plugin.key)) {
        plugins.push(plugin);
        filterMode(plugin.mode, ssr) && hooks.addHooks(plugin.hooks || {});
      }
    },
    push(input, entryOptions) {
      entryOptions == null ? true : delete entryOptions.head;
      const entry = {
        _i: entryCount++,
        input,
        ...entryOptions
      };
      if (filterMode(entry.mode, ssr)) {
        entries.push(entry);
        updated();
      }
      return {
        dispose() {
          entries = entries.filter((e11) => e11._i !== entry._i);
          updated();
        },
        // a patch is the same as creating a new entry, just a nice DX
        patch(input2) {
          for (const e11 of entries) {
            if (e11._i === entry._i) {
              e11.input = entry.input = input2;
            }
          }
          updated();
        }
      };
    },
    async resolveTags() {
      const resolveCtx = { tags: [], entries: [...entries] };
      await hooks.callHook("entries:resolve", resolveCtx);
      for (const entry of resolveCtx.entries) {
        const resolved = entry.resolvedInput || entry.input;
        entry.resolvedInput = await (entry.transform ? entry.transform(resolved) : resolved);
        if (entry.resolvedInput) {
          for (const tag of await normaliseEntryTags(entry)) {
            const tagCtx = { tag, entry, resolvedOptions: head.resolvedOptions };
            await hooks.callHook("tag:normalise", tagCtx);
            resolveCtx.tags.push(tagCtx.tag);
          }
        }
      }
      await hooks.callHook("tags:beforeResolve", resolveCtx);
      await hooks.callHook("tags:resolve", resolveCtx);
      await hooks.callHook("tags:afterResolve", resolveCtx);
      return resolveCtx.tags;
    },
    ssr
  };
  [
    DedupePlugin,
    PayloadPlugin,
    EventHandlersPlugin,
    HashKeyedPlugin,
    SortPlugin,
    TemplateParamsPlugin,
    TitleTemplatePlugin,
    XSSPlugin,
    ...(options == null ? void 0 : options.plugins) || []
  ].forEach((p19) => head.use(p19));
  head.hooks.callHook("init", head);
  return head;
}
function getActiveHead() {
  return activeHead;
}
var ScriptProxyTarget = Symbol("ScriptProxyTarget");
function scriptProxy() {
}
scriptProxy[ScriptProxyTarget] = true;

// node_modules/.pnpm/@unhead+vue@1.11.20_vue@3.5.17_typescript@5.8.3_/node_modules/@unhead/vue/dist/shared/vue.ziyDaVMR.mjs
var Vue3 = version[0] === "3";
function resolveUnref(r8) {
  return typeof r8 === "function" ? r8() : unref(r8);
}
function resolveUnrefHeadInput(ref2) {
  if (ref2 instanceof Promise || ref2 instanceof Date || ref2 instanceof RegExp)
    return ref2;
  const root = resolveUnref(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r8) => resolveUnrefHeadInput(r8));
  if (typeof root === "object") {
    const resolved = {};
    for (const k12 in root) {
      if (!Object.prototype.hasOwnProperty.call(root, k12)) {
        continue;
      }
      if (k12 === "titleTemplate" || k12[0] === "o" && k12[1] === "n") {
        resolved[k12] = unref(root[k12]);
        continue;
      }
      resolved[k12] = resolveUnrefHeadInput(root[k12]);
    }
    return resolved;
  }
  return root;
}
var VueReactivityPlugin = defineHeadPlugin({
  hooks: {
    "entries:resolve": (ctx) => {
      for (const entry of ctx.entries)
        entry.resolvedInput = resolveUnrefHeadInput(entry.input);
    }
  }
});
var headSymbol = "usehead";
function vueInstall(head) {
  const plugin = {
    install(app) {
      if (Vue3) {
        app.config.globalProperties.$unhead = head;
        app.config.globalProperties.$head = head;
        app.provide(headSymbol, head);
      }
    }
  };
  return plugin.install;
}
function createHead2(options = {}) {
  options.domDelayFn = options.domDelayFn || ((fn) => nextTick(() => setTimeout(() => fn(), 0)));
  const head = createHead(options);
  head.use(VueReactivityPlugin);
  head.install = vueInstall(head);
  return head;
}
var _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var globalKey = "__unhead_injection_handler__";
function injectHead() {
  if (globalKey in _global) {
    return _global[globalKey]();
  }
  const head = inject(headSymbol);
  if (!head && true)
    console.warn("Unhead is missing Vue context, falling back to shared context. This may have unexpected results.");
  return head || getActiveHead();
}

// node_modules/.pnpm/@unhead+vue@1.11.20_vue@3.5.17_typescript@5.8.3_/node_modules/@unhead/vue/dist/shared/vue.-sixQ7xP.mjs
function useHead(input, options = {}) {
  const head = options.head || injectHead();
  if (head) {
    if (!head.ssr)
      return clientUseHead(head, input, options);
    return head.push(input, options);
  }
}
function clientUseHead(head, input, options = {}) {
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e11) => {
    entry.patch(e11);
  });
  const vm = getCurrentInstance();
  if (vm) {
    onBeforeUnmount(() => {
      entry.dispose();
    });
    onDeactivated(() => {
      deactivated.value = true;
    });
    onActivated(() => {
      deactivated.value = false;
    });
  }
  return entry;
}

// node_modules/.pnpm/@unhead+vue@1.11.20_vue@3.5.17_typescript@5.8.3_/node_modules/@unhead/vue/dist/index.mjs
var coreComposableNames = [
  "injectHead"
];
var unheadVueComposablesImports = {
  "@unhead/vue": [...coreComposableNames, ...composableNames]
};
function useSeoMeta(input, options) {
  const { title, titleTemplate, ...meta } = input;
  return useHead({
    title,
    titleTemplate,
    // @ts-expect-error runtime type
    _flatMeta: meta
  }, {
    ...options,
    transform(t8) {
      const meta2 = unpackMeta({ ...t8._flatMeta });
      delete t8._flatMeta;
      return {
        // @ts-expect-error runtime type
        ...t8,
        meta: meta2
      };
    }
  });
}

// node_modules/.pnpm/@scalar+helpers@0.0.4/node_modules/@scalar/helpers/dist/testing/sleep.js
var sleep = (ms) => new Promise((r8) => setTimeout(r8, ms));

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/_virtual/_plugin-vue_export-helper.js
var s5 = (t8, e11) => {
  const o4 = t8.__vccOpts || t8;
  for (const [r8, c8] of e11)
    o4[r8] = c8;
  return o4;
};

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/ClassicHeader.vue.js
var n2 = {};
var d2 = { class: "references-classic-header-container" };
var a2 = { class: "references-classic-header" };
function i2(e11, l11) {
  return openBlock(), createElementBlock("div", d2, [
    createBaseVNode("div", a2, [
      renderSlot(e11.$slots, "default", {}, void 0, true),
      renderSlot(e11.$slots, "dark-mode-toggle", {}, void 0, true)
    ])
  ]);
}
var u = s5(n2, [["render", i2], ["__scopeId", "data-v-a860f78f"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/GettingStarted.vue2.js
var S = { class: "start custom-scroll" };
var x2 = { class: "start-copy" };
var b2 = { class: "start-cta" };
var k4 = { class: "start-row" };
var Z = { class: "start-section start-section-colors" };
var E3 = ["onClick"];
var P3 = defineComponent({
  __name: "GettingStarted",
  props: {
    theme: {}
  },
  emits: ["changeTheme", "loadSwaggerFile", "linkSwaggerFile", "updateContent"],
  setup(F6, { emit: g11 }) {
    const m38 = g11, h10 = [
      "default",
      "alternate",
      "moon",
      "purple",
      "solarized",
      "bluePlanet",
      "saturn",
      "kepler",
      "mars",
      "deepSpace"
    ];
    async function u11() {
      const s19 = await fetch(
        "https://cdn.jsdelivr.net/npm/@scalar/galaxy/dist/latest.yaml"
      );
      m38("updateContent", await s19.text());
    }
    return (s19, a22) => (openBlock(), createElementBlock("div", S, [
      createBaseVNode("div", x2, [
        a22[3] || (a22[3] = createStaticVNode('<div class="start-logo" data-v-0aca3a20><svg height="36" viewBox="0 0 36 36" width="36" xmlns="http://www.w3.org/2000/svg" data-v-0aca3a20><path d="M18 0a18 18 0 1 1 0 36 18 18 0 0 1 0-36Zm11.2 6.5c-3.3-3.3-11.1-1-17.4 5.3-6.2 6.3-8.6 14-5.3 17.4 3.3 3.3 11 .9 17.3-5.4 6.3-6.2 8.7-14 5.4-17.3ZM17.6 12a6.3 6.3 0 1 1 0 12.7 6.3 6.3 0 0 1 0-12.7Z" fill="currentColor" fill-rule="evenodd" data-v-0aca3a20></path></svg></div><h1 class="start-h1" data-v-0aca3a20>Swagger Editor</h1><p class="start-p" data-v-0aca3a20> Welcome to the Scalar API References + Swagger Editor, a Free &amp; Open-Source tool that takes your Swagger/OAS file and generates Beautiful API references. </p>', 3)),
        createBaseVNode("div", b2, [
          createVNode(unref($), {
            fullWidth: "",
            onClick: u11
          }, {
            default: withCtx(() => a22[1] || (a22[1] = [
              createTextVNode(" Show Example ")
            ])),
            _: 1
          }),
          createVNode(unref($), {
            fullWidth: "",
            variant: "outlined",
            onClick: a22[0] || (a22[0] = (t8) => s19.$emit("loadSwaggerFile"))
          }, {
            default: withCtx(() => a22[2] || (a22[2] = [
              createTextVNode(" Upload File ")
            ])),
            _: 1
          })
        ])
      ]),
      createBaseVNode("div", k4, [
        a22[5] || (a22[5] = createStaticVNode('<div class="start-section start-section-integrations" data-v-0aca3a20><div class="start-h2" data-v-0aca3a20>INTEGRATIONS</div><a class="start-item" href="https://github.com/scalar/scalar/tree/main/integrations/fastify#readme" target="_blank" data-v-0aca3a20><svg fill="currentColor" height="16" viewBox="0 0 19 16" width="19" xmlns="http://www.w3.org/2000/svg" data-v-0aca3a20><path d="m18.2 3.1.8-2V.9l-4.7 1.3C15.2 1 15 0 15 0s-2.5 1.6-4.3 1.5c-2 0-3.6.8-4 1-1.8 1.2-2.5 3.3-3.2 3.8L0 8.9 2.3 8l-2 2.5c.2.3 1.2 1.6 2.1 1.3l.4-.1 1.6.5-.7-1 .2-.2.9.3-.1-.8.9.3-.1-.8.3-.1 1-3.5 3.7-2.6-.3.7A4 4 0 0 1 8 7l-.6.2c-.5.5-.7.7-.8 2.5a2 2 0 0 1 1 0c1.6.4 2.2 2.3 1.7 2.9l-.7.6H8v.6h-.7v.5l-.2.2c-.7 0-1.4-.6-1.4-.6 0 .5.4 1.3.4 1.3s1.7 1.1 2.7.7c1-.4.7-2.3 2.8-3.2l3.3-.9.8-2.2-1.7.5v-2l2.5-.6.9-2.2-3.4.9v-2l4.2-1.1Z" fill="currentColor" fill-rule="nonzero" data-v-0aca3a20></path></svg><span data-v-0aca3a20>Fastify</span></a><a class="start-item" href="https://github.com/scalar/scalar/blob/main/documentation/integrations/html-js.md#html" target="_blank" data-v-0aca3a20><svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-0aca3a20><g data-v-0aca3a20><path d="M22.5 1.5h-21A1.5 1.5 0 0 0 0 3v3a1.5 1.5 0 0 0 1.5 1.5h21A1.5 1.5 0 0 0 24 6V3a1.5 1.5 0 0 0-1.5-1.5Zm-19.25 3A1.25 1.25 0 1 1 4.5 5.75 1.25 1.25 0 0 1 3.25 4.5ZM8.5 5.75A1.25 1.25 0 1 1 9.75 4.5 1.25 1.25 0 0 1 8.5 5.75Z" fill="currentColor" data-v-0aca3a20></path><path d="M22.5 9h-21A1.5 1.5 0 0 0 0 10.5v3A1.5 1.5 0 0 0 1.5 15h21a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 22.5 9ZM3.25 12a1.25 1.25 0 1 1 1.25 1.25A1.25 1.25 0 0 1 3.25 12Zm5.25 1.25A1.25 1.25 0 1 1 9.75 12a1.25 1.25 0 0 1-1.25 1.25Z" fill="currentColor" data-v-0aca3a20></path><path d="M22.5 16.5h-21A1.5 1.5 0 0 0 0 18v3a1.5 1.5 0 0 0 1.5 1.5h21A1.5 1.5 0 0 0 24 21v-3a1.5 1.5 0 0 0-1.5-1.5Zm-19.25 3a1.25 1.25 0 1 1 1.25 1.25 1.25 1.25 0 0 1-1.25-1.25Zm5.25 1.25a1.25 1.25 0 1 1 1.25-1.25 1.25 1.25 0 0 1-1.25 1.25Z" fill="currentColor" data-v-0aca3a20></path></g></svg><span data-v-0aca3a20>CDN</span></a><a class="start-item" href="https://github.com/scalar/scalar/blob/main/packages/api-reference/README.md#vuejs" target="_blank" data-v-0aca3a20><svg height="170" viewBox="0 0 196.3 170" width="196.3" xmlns="http://www.w3.org/2000/svg" data-v-0aca3a20><g fill="currentColor" fill-rule="nonzero" data-v-0aca3a20><polygon points="39.23 0 0 0 2.9450761 5.1010782 98.16 170.02 196.32 0 157.06 0 98.16 102.01 42.175701 5.0991171" data-v-0aca3a20></polygon><polygon points="75.5 2.009956e-14 0 2.009956e-14 2.94 5.1 78.44871 5.1 98.16 39.26 117.87937 5.1 193.38 5.1 196.325 0 120.82 7.8065636e-15 114.97322 2.009956e-14 98.16 29.037153 81.35 2.009956e-14" data-v-0aca3a20></polygon></g></svg><span data-v-0aca3a20>Vue</span></a><a class="start-item" href="https://github.com/scalar/scalar/blob/main/packages/api-reference-react/README.md#usage" target="_blank" data-v-0aca3a20><svg height="23.3" viewBox="0 0 22 23.3" width="22" xmlns="http://www.w3.org/2000/svg" data-v-0aca3a20><g fill="none" fill-rule="evenodd" data-v-0aca3a20><circle cx="11" cy="11.6" fill="currentColor" fill-rule="nonzero" r="2" data-v-0aca3a20></circle><g stroke="currentColor" data-v-0aca3a20><ellipse cx="11" cy="11.6" rx="11" ry="4.2" data-v-0aca3a20></ellipse><ellipse cx="11" cy="11.6" rx="11" ry="4.2" transform="rotate(60 11 11.6)" data-v-0aca3a20></ellipse><ellipse cx="11" cy="11.6" rx="11" ry="4.2" transform="rotate(120 11 11.6)" data-v-0aca3a20></ellipse></g></g></svg><span data-v-0aca3a20>React</span></a></div>', 1)),
        createBaseVNode("div", Z, [
          a22[4] || (a22[4] = createBaseVNode("p", { class: "start-h2" }, "THEMING", -1)),
          (openBlock(), createElementBlock(Fragment, null, renderList(h10, (t8) => createBaseVNode("div", {
            key: t8,
            class: normalizeClass(["start-item", { "start-item-active": t8 === s19.theme }]),
            onClick: (B12) => s19.$emit("changeTheme", { id: t8, label: unref(themeLabels)[t8] })
          }, toDisplayString(unref(themeLabels)[t8]), 11, E3)), 64))
        ])
      ]),
      a22[6] || (a22[6] = createStaticVNode('<p class="start-h1" data-v-0aca3a20>Features</p><ul class="start-ul" data-v-0aca3a20><li data-v-0aca3a20><p class="start-h3" data-v-0aca3a20>Customize</p> Bring your typography &amp; color palettes, or use our themes! </li><li data-v-0aca3a20><p class="start-h3" data-v-0aca3a20>Testing</p> A deeply integrated Rest API Client (Also Free &amp; Open-Source) </li><li data-v-0aca3a20><p class="start-h3" data-v-0aca3a20>Search</p> Fully integrated Search (Using fuse.js) </li><li data-v-0aca3a20><p class="start-h3" data-v-0aca3a20>Hosting</p> Free subdomain hosting on https://apidocumentation.com </li><li data-v-0aca3a20><p class="start-h3" data-v-0aca3a20>OpenAPI &amp; Swagger</p> Support for OpenAPI 3.1, OpenAPI 3.0, and Swagger 2.0 </li><li data-v-0aca3a20><p class="start-h3" data-v-0aca3a20>Code Samples</p> Code samples to show off your API in most popular languages </li></ul>', 2))
    ]));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/GettingStarted.vue.js
var m5 = s5(P3, [["__scopeId", "data-v-0aca3a20"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/Lazy/lazyBus.js
var s6 = Symbol();
var e3 = useEventBus(s6);

// node_modules/.pnpm/@scalar+helpers@0.0.4/node_modules/@scalar/helpers/dist/dom/scroll-to-id.js
var scrollToId = async (id, focus) => {
  const scrollToElement = (element2) => {
    element2.scrollIntoView();
    if (focus) {
      element2.focus();
    }
  };
  const element = document.getElementById(id);
  if (element) {
    scrollToElement(element);
    return;
  }
  const stopTime = Date.now() + 1e3;
  const tryScroll = () => {
    const element2 = document.getElementById(id);
    if (element2) {
      scrollToElement(element2);
      return;
    }
    if (Date.now() < stopTime) {
      requestAnimationFrame(tryScroll);
    }
  };
  requestAnimationFrame(tryScroll);
};

// node_modules/.pnpm/@scalar+helpers@0.0.4/node_modules/@scalar/helpers/dist/testing/measure.js
var measure = (name, fn) => {
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  const duration = Math.round(end - start);
  console.info(`${name}: ${duration} ms`);
  return result;
};

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/libs/markdown.js
var s7 = (n7, e11) => n7.map((t8) => ({
  ...t8,
  slug: e11.slug(t8.value)
}));
function i3(n7) {
  const e11 = new BananaSlug(), t8 = getHeadings(n7);
  return s7(t8, e11);
}
var l2 = (n7) => {
  const e11 = Math.min(...n7.map((t8) => t8.depth));
  return e11 >= 1 && e11 <= 6 ? e11 : 1;
};

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/traverse-schema/helpers/traverse-description.js
var f2 = "introduction";
var v3 = (n7, l11, u11) => {
  var i15;
  if (!(n7 != null && n7.trim()))
    return [];
  const h10 = i3(n7), o4 = l2(h10), r8 = [];
  let s19 = null;
  if (n7 && !n7.trim().startsWith("#")) {
    const e11 = {
      depth: 1,
      value: "Introduction",
      slug: f2
    }, t8 = u11(e11), a22 = e11.value;
    r8.push({
      id: t8,
      title: a22
    }), l11.set(t8, a22);
  }
  for (const e11 of h10) {
    if (e11.depth !== o4 && e11.depth !== o4 + 1)
      continue;
    const t8 = {
      id: u11(e11),
      title: e11.value
    };
    l11.set(t8.id, t8.title), e11.depth === o4 ? (t8.children = [], r8.push(t8), s19 = t8) : s19 && ((i15 = s19.children) == null || i15.push(t8));
  }
  return r8;
};

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/traverse-schema/helpers/get-tag.js
var r = (g11, e11) => {
  let t8 = g11.get(e11);
  return t8 || (t8 = { entries: [], tag: { name: e11 } }, g11.set(e11, t8)), t8;
};

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/traverse-schema/helpers/traverse-paths.js
var x3 = (r8, s19, t8 = "Unknown", n7, c8, u11) => {
  const h10 = u11({ ...r8, method: s19, path: t8 }, n7);
  return c8.set(h10, r8.summary ?? t8), {
    id: h10,
    title: r8.summary ?? t8,
    path: t8,
    method: s19,
    operation: r8
  };
};
var a3 = (r8, s19, t8, n7) => {
  Object.entries(r8.paths ?? {}).forEach(([c8, u11]) => {
    Object.entries(u11 ?? {}).forEach(([l11, e11]) => {
      var E9, g11;
      if (!(e11["x-internal"] || e11["x-scalar-ignore"] || !httpMethods.has(l11)))
        if ((E9 = e11.tags) != null && E9.length)
          e11.tags.forEach((f15) => {
            var i15;
            const { tag: y11 } = r(s19, f15);
            (i15 = s19.get(f15)) == null || i15.entries.push(x3(e11, l11, c8, y11, t8, n7));
          });
        else {
          const { tag: f15 } = r(s19, "default");
          (g11 = s19.get("default")) == null || g11.entries.push(x3(e11, l11, c8, f15, t8, n7));
        }
    });
  });
};

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/traverse-schema/helpers/traverse-schemas.js
var u2 = (c8, s19 = "Unkown", o4, r8, t8) => {
  const e11 = r8({ name: s19 }, t8);
  return o4.set(e11, s19), {
    id: e11,
    title: s19,
    name: s19,
    schema: c8
  };
};
var m6 = (c8, s19, o4, r8) => {
  var i15, a22;
  const t8 = ((i15 = c8.components) == null ? void 0 : i15.schemas) ?? {}, e11 = [];
  for (const n7 in t8)
    t8[n7]["x-internal"] || t8[n7]["x-scalar-ignore"] || !Object.hasOwn(t8, n7) || ((a22 = t8[n7]["x-tags"]) != null && a22.length ? t8[n7]["x-tags"].forEach((h10) => {
      var g11;
      const { tag: f15 } = r(s19, h10);
      (g11 = s19.get(h10)) == null || g11.entries.push(u2(t8[n7], n7, o4, r8, f15));
    }) : e11.push(u2(t8[n7], n7, o4, r8)));
  return e11;
};

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/traverse-schema/helpers/traverse-tags.js
var p5 = (n7, o4, m38, c8, h10 = false) => {
  const r8 = m38(n7), f15 = n7["x-displayName"] || n7.name || "Untitled Tag";
  return o4.set(r8, f15), {
    id: r8,
    title: f15,
    tag: n7,
    children: c8,
    isGroup: h10
  };
};
var u3 = (n7, o4, m38, { getTagId: c8, tagsSorter: h10, operationsSorter: r8 }) => {
  const f15 = n7.includes("default"), l11 = f15 ? n7.filter((s19) => s19 !== "default") : n7;
  return h10 === "alpha" ? l11.sort((s19, i15) => {
    const a22 = r(o4, s19).tag["x-displayName"] || s19 || "Untitle Tag", t8 = r(o4, i15).tag["x-displayName"] || i15 || "Untitled Tag";
    return a22.localeCompare(t8);
  }) : typeof h10 == "function" && l11.sort((s19, i15) => h10(r(o4, s19).tag, r(o4, i15).tag)), f15 && l11.push("default"), l11.flatMap((s19) => {
    const { tag: i15, entries: a22 } = r(o4, s19);
    return i15["x-internal"] || i15["x-scalar-ignore"] ? [] : (r8 === "alpha" ? a22.sort((t8, e11) => "method" in t8 && "method" in e11 ? t8.title.localeCompare(e11.title) : 0) : r8 === "method" ? a22.sort((t8, e11) => "method" in t8 && "method" in e11 ? t8.method.localeCompare(e11.method) : 0) : typeof r8 == "function" && a22.sort((t8, e11) => {
      if (!("method" in t8) || !("method" in e11))
        return 0;
      const x14 = "path" in t8 ? t8.path : t8.name, y11 = "path" in e11 ? e11.path : e11.name, g11 = "operation" in t8 ? t8.operation : t8.webhook, T9 = "operation" in e11 ? e11.operation : e11.webhook;
      return r8(
        { method: t8.method, path: x14, operation: g11 },
        { method: e11.method, path: y11, operation: T9 }
      );
    }), a22.length ? p5(i15, m38, c8, a22) : []);
  });
};
var k5 = (n7, o4, m38, { getTagId: c8, tagsSorter: h10, operationsSorter: r8 }) => {
  if (n7["x-tagGroups"])
    return n7["x-tagGroups"].flatMap((i15) => {
      const a22 = u3(i15.tags ?? [], o4, m38, {
        getTagId: c8,
        tagsSorter: h10,
        operationsSorter: r8
      });
      return a22.length ? p5(i15, m38, c8, a22, true) : [];
    });
  const f15 = Array.from(o4.keys()), l11 = u3(f15, o4, m38, { getTagId: c8, tagsSorter: h10, operationsSorter: r8 });
  return l11.length === 1 && l11[0].title === "default" ? l11[0].children ?? [] : l11;
};

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/traverse-schema/helpers/traverse-webhooks.js
var i4 = (e11, r8, t8 = "Unknown", n7, c8, h10) => {
  const g11 = e11.summary || t8, o4 = c8({ name: t8, method: r8 }, h10);
  return n7.set(o4, g11), {
    id: o4,
    title: g11,
    name: t8,
    webhook: e11,
    method: r8
  };
};
var x4 = (e11, r8, t8, n7) => {
  const c8 = [];
  return Object.entries(e11.webhooks ?? {}).forEach(([h10, g11]) => {
    Object.entries(g11 ?? {}).forEach(([u11, s19]) => {
      var f15;
      s19["x-internal"] || s19["x-scalar-ignore"] || ((f15 = s19.tags) != null && f15.length ? s19.tags.forEach((E9) => {
        var b9;
        const { tag: k12 } = r(r8, E9);
        (b9 = r8.get(E9)) == null || b9.entries.push(i4(s19, u11, h10, t8, n7, k12));
      }) : c8.push(i4(s19, u11, h10, t8, n7)));
    });
  }), c8;
};

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/traverse-schema/helpers/traverse-document.js
var x5 = (e11, { config: a22, getHeadingId: v11, getOperationId: c8, getWebhookId: i15, getModelId: n7, getTagId: f15 }) => {
  var h10, l11, m38;
  const r8 = /* @__PURE__ */ new Map(), t8 = new Map(
    ((h10 = e11.tags) == null ? void 0 : h10.map((s19) => [s19.name ?? "Untitled Tag", { tag: s19, entries: [] }])) ?? []
  );
  a3(e11, t8, r8, c8);
  const o4 = v3((l11 = e11.info) == null ? void 0 : l11.description, r8, v11), p19 = x4(e11, t8, r8, i15), g11 = k5(e11, t8, r8, {
    getTagId: f15,
    tagsSorter: a22.value.tagsSorter,
    operationsSorter: a22.value.operationsSorter
  });
  if (o4.push(...g11), p19.length && o4.push({
    id: i15(),
    isWebhooks: true,
    title: "Webhooks",
    children: p19
  }), !a22.value.hideModels && ((m38 = e11.components) != null && m38.schemas)) {
    const s19 = m6(e11, t8, r8, n7);
    s19.length && o4.push({
      id: n7(),
      title: "Models",
      children: s19
    });
  }
  return { entries: o4, titles: r8 };
};

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/sidebar/helpers/create-sidebar.js
var x6 = (i15, o4) => {
  const r8 = reactive({}), m38 = ref(false), a22 = (e11) => r8[e11] = !r8[e11], c8 = (e11, t8) => r8[e11] = t8, n7 = (e11, t8) => {
    const s19 = o4.getSectionId(e11);
    if (s19 && s19 !== e11)
      if (r8[s19])
        scrollToId(e11, t8);
      else {
        const f15 = e3.on((d18) => {
          d18.id === e11 && (scrollToId(e11, t8), f15());
        });
        c8(s19, true);
      }
  }, u11 = computed(() => {
    const e11 = measure("traverseDocument", () => x5(i15.value, o4));
    return o4.config.value.defaultOpenAllTags && e11.entries.forEach((t8) => c8(t8.id, true)), e11;
  });
  return {
    collapsedSidebarItems: r8,
    isSidebarOpen: m38,
    items: u11,
    scrollToOperation: n7,
    setCollapsedSidebarItem: c8,
    toggleCollapsedSidebarItem: a22
  };
};

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/sidebar/hooks/useSidebar.js
var i5 = Symbol();
var l3 = (e11, r8) => {
  if (e11 && r8) {
    const a22 = x6(e11, r8);
    return provide(i5, a22), a22;
  }
  const o4 = inject(i5);
  if (!o4)
    throw new Error(
      "useSidebar() was called without a collection and no sidebar instance was found. Make sure to call useSidebar(collection) in a parent component first."
    );
  return o4;
};

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/MobileHeader.vue2.js
var p6 = { class: "references-mobile-header t-doc__header" };
var b3 = { class: "references-mobile-breadcrumbs" };
var _3 = { class: "references-mobile-header-actions" };
var M = defineComponent({
  __name: "MobileHeader",
  props: {
    breadcrumb: {}
  },
  setup(f15) {
    const { isSidebarOpen: e11 } = l3();
    return (r8, n7) => (openBlock(), createElementBlock("div", p6, [
      createVNode(unref(y), {
        icon: unref(e11) ? "Close" : "Menu",
        label: unref(e11) ? "Close Menu" : "Open Menu",
        size: "md",
        onClick: n7[0] || (n7[0] = (h10) => e11.value = !unref(e11))
      }, null, 8, ["icon", "label"]),
      createBaseVNode("span", b3, toDisplayString(r8.breadcrumb), 1),
      createBaseVNode("div", _3, [
        renderSlot(r8.$slots, "actions", {}, void 0, true)
      ])
    ]));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/MobileHeader.vue.js
var f3 = s5(M, [["__scopeId", "data-v-fa8b013a"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/libs/openapi.js
function p7(e11, t8) {
  var n7;
  let r8 = e11;
  const i15 = (n7 = t8.required) == null ? void 0 : n7.includes(e11);
  return r8 += i15 ? " REQUIRED " : " optional ", t8.properties[e11] && (r8 += t8.properties[e11].type, t8.properties[e11].description && (r8 += " " + t8.properties[e11].description)), r8;
}
function d3(e11) {
  var i15;
  const t8 = ["Body"], r8 = (i15 = e11 == null ? void 0 : e11.schema) == null ? void 0 : i15.properties;
  return r8 && Object.keys(r8).forEach((n7) => {
    if (!e11.schema)
      return;
    t8.push(p7(n7, e11.schema));
    const s19 = r8[n7];
    s19.type === "object" && !!s19.properties && s19.properties && Object.keys(s19.properties).forEach((u11) => {
      var a22, f15;
      t8.push(`${u11} ${(f15 = (a22 = s19.properties) == null ? void 0 : a22[u11]) == null ? void 0 : f15.type}`);
    });
  }), t8;
}
function O3(e11) {
  var t8, r8, i15;
  try {
    const n7 = (i15 = (r8 = (t8 = e11 == null ? void 0 : e11.information) == null ? void 0 : t8.requestBody) == null ? void 0 : r8.content) == null ? void 0 : i15["application/json"];
    if (!n7)
      throw new Error("Body not found");
    return d3(n7);
  } catch {
    return false;
  }
}
function y2(e11) {
  var r8, i15;
  if (!e11)
    return {};
  const t8 = (
    // OpenAPI 3.x
    Object.keys(((r8 = e11 == null ? void 0 : e11.components) == null ? void 0 : r8.schemas) ?? {}).length ? (i15 = e11 == null ? void 0 : e11.components) == null ? void 0 : i15.schemas : (
      // Fallback
      {}
    )
  );
  return Object.keys(t8 ?? {}).forEach((n7) => {
    var s19, c8;
    (((s19 = t8[n7]) == null ? void 0 : s19["x-internal"]) === true || ((c8 = t8[n7]) == null ? void 0 : c8["x-scalar-ignore"]) === true) && delete t8[n7];
  }), t8;
}
var x7 = (e11) => e11 ? !!Object.keys(y2(e11) ?? {}).length : false;
function l4(e11, t8) {
  for (const [r8, i15] of Object.entries(e11))
    i15 !== null && typeof i15 == "object" ? (t8[r8] ?? (t8[r8] = new i15.__proto__.constructor()), l4(i15, t8[r8])) : typeof i15 < "u" && (t8[r8] = i15);
  return t8;
}
function g(e11) {
  return l4(e11 ?? {}, {
    info: {
      title: "",
      description: "",
      termsOfService: "",
      version: "",
      license: {
        name: "",
        url: ""
      },
      contact: {
        email: ""
      }
    },
    servers: [],
    tags: []
  });
}
function b4(e11) {
  return e11.deprecated !== void 0 ? e11.deprecated : !!(e11["x-scalar-stability"] && e11["x-scalar-stability"] === XScalarStability.Deprecated);
}
function m7(e11) {
  return e11.deprecated ? XScalarStability.Deprecated : e11["x-scalar-stability"];
}
function E4(e11) {
  const t8 = m7(e11);
  return t8 === XScalarStability.Deprecated ? "text-red" : t8 === XScalarStability.Experimental ? "text-orange" : t8 === XScalarStability.Stable ? "text-green" : "";
}

// node_modules/.pnpm/@scalar+helpers@0.0.4/node_modules/@scalar/helpers/dist/http/normalize-http-method.js
var DEFAULT_REQUEST_METHOD = "get";
var normalizeHttpMethod = (method) => {
  if (typeof method !== "string") {
    console.warn(`Request method is not a string. Using ${DEFAULT_REQUEST_METHOD} as the default.`);
    return DEFAULT_REQUEST_METHOD;
  }
  const normalizedMethod = method.trim().toLowerCase();
  if (!isHttpMethod(normalizedMethod)) {
    console.warn(
      `${method || "Request method"} is not a valid request method. Using ${DEFAULT_REQUEST_METHOD} as the default.`
    );
    return DEFAULT_REQUEST_METHOD;
  }
  return normalizedMethod;
};

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/helpers/parse.js
var I = (s19, i15) => new Promise((e11, b9) => {
  try {
    return e11(s19 ? k6(s19, i15) : k6(g()));
  } catch (p19) {
    console.error("[@scalar/api-reference]", "Failed to parse the OpenAPI document. It might be invalid?"), console.error(p19), b9(p19);
  }
  return e11(k6(g()));
});
var k6 = (s19, i15) => {
  let e11 = {};
  s19 && typeof s19 == "object" ? e11 = s19 : e11 = g(), e11.tags || (e11.tags = []), e11.paths || (e11.paths = {}), e11.components || (e11.components = {}), e11.webhooks || (e11.webhooks = {}), e11.servers || (e11.servers = []), e11.security || (e11.security = []);
  const b9 = [], p19 = (o4) => {
    var h10;
    !("children" in o4) || !((h10 = o4.children) != null && h10.length) || o4.children.forEach((a22) => {
      var _a;
      var f15, u11, t8, n7, g11;
      let r8 = (f15 = e11.tags) == null ? void 0 : f15.findIndex((d18) => "tag" in o4 && d18.name === o4.tag.name);
      r8 === -1 && "tag" in o4 && (e11.tags.push({
        name: o4.tag.name,
        operations: []
      }), r8 = e11.tags.length - 1), (_a = e11.tags[r8]).operations || (_a.operations = []), "tag" in a22 ? p19(a22) : "operation" in a22 ? e11.tags[r8].operations.push({
        id: a22.id,
        httpVerb: normalizeHttpMethod(a22.method),
        path: a22.path,
        name: a22.operation.summary || a22.path || "",
        description: a22.operation.description || "",
        isWebhook: false,
        information: a22.operation,
        pathParameters: (t8 = (u11 = e11.paths) == null ? void 0 : u11[a22.path ?? ""]) == null ? void 0 : t8.parameters
      }) : "webhook" in a22 && e11.tags[r8].operations.push({
        id: a22.id,
        httpVerb: normalizeHttpMethod(a22.method),
        path: a22.name,
        name: a22.webhook.summary || a22.name || "",
        description: a22.webhook.description || "",
        isWebhook: true,
        information: a22.webhook,
        pathParameters: (g11 = (n7 = e11.webhooks) == null ? void 0 : n7[a22.name ?? ""]) == null ? void 0 : g11.parameters
      });
    });
  };
  return i15 == null || i15.forEach((o4) => {
    var h10, a22, r8, f15, u11;
    if (o4.id.startsWith("tag/default") && "operation" in o4) {
      let t8 = (h10 = e11.tags) == null ? void 0 : h10.findIndex((n7) => n7.name === "default");
      t8 === -1 && (e11.tags.push({
        name: "default",
        description: "",
        operations: []
      }), t8 = e11.tags.length - 1), e11.tags[t8].operations.push({
        id: o4.id,
        httpVerb: normalizeHttpMethod(o4.method),
        path: o4.path,
        name: o4.operation.summary || o4.path || "",
        description: o4.operation.description || "",
        isWebhook: false,
        information: o4.operation,
        pathParameters: (r8 = (a22 = e11.paths) == null ? void 0 : a22[o4.path ?? ""]) == null ? void 0 : r8.parameters
      });
    }
    "tag" in o4 && o4.isGroup && ((f15 = o4.children) != null && f15.length) ? o4.children.forEach(p19) : "tag" in o4 && p19(o4), "isWebhooks" in o4 && o4.isWebhooks && ((u11 = o4.children) != null && u11.length) && o4.children.forEach((t8) => {
      var n7, g11;
      "webhook" in t8 && t8.name && t8.method && b9.push({
        id: t8.id,
        httpVerb: normalizeHttpMethod(t8.method),
        path: t8.name,
        name: t8.webhook.summary || t8.name || "",
        description: t8.webhook.description || "",
        isWebhook: true,
        information: t8.webhook,
        pathParameters: (g11 = (n7 = e11.webhooks) == null ? void 0 : n7[t8.name ?? ""]) == null ? void 0 : g11.parameters
      });
    });
  }), {
    ...e11,
    webhooks: b9
  };
};

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/hooks/useConfig.js
var r2 = Symbol();
var f4 = () => inject(
  r2,
  computed(() => apiReferenceConfigurationSchema.parse({}))
);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/hooks/useNavState.js
var P4 = Symbol();
var U = ref(false);
var x8 = ref("");
var k7 = ref("");
var T2 = (f15) => {
  const { isIntersectionEnabled: p19, hash: r8, hashPrefix: u11 } = inject(P4, {
    isIntersectionEnabled: U,
    hash: x8,
    hashPrefix: k7
  }), t8 = f15 ?? f4(), c8 = (e11) => {
    var a22;
    if (!t8.value.pathRouting)
      return "";
    const n7 = new RegExp("^" + ((a22 = t8.value.pathRouting) == null ? void 0 : a22.basePath) + "/?");
    return decodeURIComponent(e11.replace(n7, ""));
  }, v11 = (e11 = r8.value) => {
    var h10;
    const n7 = (h10 = e11.match(/(tag\/[^/]+)/)) == null ? void 0 : h10[0], a22 = e11.startsWith("model") ? "models" : "", o4 = e11.startsWith("webhook") ? "webhooks" : "";
    return n7 || a22 || o4;
  }, g11 = () => t8.value.pathRouting ? c8(window.location.pathname) : (
    // Must remove the prefix from the hash as the internal hash value should be pure
    decodeURIComponent(window.location.hash.replace(/^#/, "")).slice(u11.value.length)
  ), m38 = () => r8.value = g11(), $5 = (e11, n7 = window.location.href) => {
    const a22 = new URL(n7);
    t8.value.pathRouting ? a22.pathname = combineUrlAndPath(t8.value.pathRouting.basePath, e11) : a22.hash = u11.value + e11, r8.value = e11, window.history.replaceState({}, "", a22);
  }, I10 = (e11, n7 = window.location.href, a22 = window.location.search) => {
    const o4 = new URL(n7);
    return t8.value.pathRouting ? o4.pathname = combineUrlAndPath(t8.value.pathRouting.basePath, e11) : o4.hash = u11.value + e11, o4.search = a22, o4.toString();
  }, w9 = (e11 = r8.value) => `${u11.value}${e11}`, S9 = (e11) => typeof t8.value.generateHeadingSlug == "function" ? `${t8.value.generateHeadingSlug(e11)}` : e11.slug ? `description/${e11.slug}` : "", R8 = (e11, n7) => {
    if (!(e11 != null && e11.name))
      return "models";
    const a22 = n7 ? `${s19(n7)}/` : "";
    return typeof t8.value.generateModelSlug == "function" ? `${a22}model/${t8.value.generateModelSlug(e11)}` : `${a22}model/${slug(e11.name)}`;
  }, s19 = (e11) => typeof t8.value.generateTagSlug == "function" ? `tag/${t8.value.generateTagSlug(e11)}` : `tag/${slug(e11.name ?? "")}`;
  return {
    hash: r8,
    /** Sets the prefix for the hash */
    setHashPrefix: (e11) => {
      u11.value = e11;
    },
    /**
     * Gets the full hash with the prefix
     * @param hashTarget The hash to target with the return
     * @returns The full hash
     */
    getFullHash: w9,
    /**
     * Gets the hashed url with the prefix
     * @param replacementHash The hash to replace the current hash with
     * @param url The url to get the hashed url from
     * @returns The hashed url
     */
    getHashedUrl: I10,
    /**
     * Replaces the URL state with the new url and hash
     * Replacement is used so that hash changes don't trigger the url hash watcher and cause a scroll
     */
    replaceUrlState: $5,
    getReferenceId: g11,
    getWebhookId: (e11, n7) => {
      if (!(e11 != null && e11.name))
        return "webhooks";
      const a22 = n7 ? `${s19(n7)}/` : "";
      return typeof t8.value.generateWebhookSlug == "function" ? `${a22}webhook/${t8.value.generateWebhookSlug(e11)}` : `${a22}webhook/${e11.method}/${slug(e11.name)}`;
    },
    getModelId: R8,
    getHeadingId: S9,
    getOperationId: (e11, n7) => typeof t8.value.generateOperationSlug == "function" ? `${s19(n7)}/${t8.value.generateOperationSlug({
      path: e11.path,
      operationId: e11.operationId,
      method: e11.method,
      summary: e11.summary
    })}` : `${s19(n7)}/${e11.method}${e11.path}`,
    getPathRoutingId: c8,
    getSectionId: v11,
    getTagId: s19,
    isIntersectionEnabled: p19,
    updateHash: m38
  };
};

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/libs/download.js
var v4 = Symbol("download");
var L2 = useEventBus(v4);
function E5(e11, n7) {
  return n7 && !isJsonString(e11) ? toJson(normalize(e11)) : !n7 && isJsonString(e11) ? toYaml(normalize(e11)) : e11;
}
function y3() {
  try {
    return new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window
    });
  } catch {
    return new MouseEvent("click", {
      bubbles: true,
      cancelable: true
    });
  }
}
function R(e11, n7, c8) {
  const t8 = c8 === "json" || !isDefined(c8) && isJsonString(e11), l11 = E5(e11, t8), i15 = t8 ? ".json" : ".yaml", u11 = t8 ? "application/json" : "application/x-yaml", m38 = n7 ? n7 + i15 : "openapi" + i15, d18 = new Blob([l11], { type: u11 }), s19 = URL.createObjectURL(d18), o4 = document.createElement("a");
  o4.href = s19, o4.download = m38, o4.dispatchEvent(y3()), setTimeout(() => {
    window.URL.revokeObjectURL(s19), o4.remove();
  }, 100);
}

// node_modules/.pnpm/@scalar+helpers@0.0.4/node_modules/@scalar/helpers/dist/object/object-replace.js
var objectReplace = (target, replacement) => {
  Object.keys(target).forEach((key) => {
    if (!Object.hasOwn(replacement, key)) {
      delete target[key];
    }
  });
  Object.assign(target, replacement);
  return target;
};

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/stores/useHttpClientStore.js
var y4 = {
  targetKey: "shell",
  clientKey: "curl"
};
var { clients: H } = snippetz();
function d4(t8) {
  var n7;
  return ((n7 = r3.value.find((e11) => e11.key === t8.targetKey)) == null ? void 0 : n7.title) ?? t8.targetKey;
}
function K(t8) {
  var n7, e11;
  return ((e11 = (n7 = r3.value.find((i15) => i15.key === t8.targetKey)) == null ? void 0 : n7.clients.find((i15) => i15.client === t8.clientKey)) == null ? void 0 : e11.title) ?? t8.clientKey;
}
var L3 = computed(() => d4(l5));
var S2 = computed(() => K(l5));
function b5(t8, n7) {
  return n7.value === true ? [] : t8.flatMap((e11) => {
    var i15;
    return typeof n7.value != "object" ? [] : Array.isArray(n7.value) ? (e11.clients = e11.clients.filter(
      // @ts-expect-error Typescript, chill. It’s all good. It has to be an array.
      (s19) => !n7.value.includes(s19.client)
    ), e11.clients.length ? [e11] : []) : n7.value[e11.key] === true ? [] : (Array.isArray(n7.value[e11.key]) && (e11.clients = e11.clients.filter((s19) => !// @ts-expect-error We checked whether it’s an Array already.
    n7.value[e11.key].includes(s19.client))), (i15 = e11 == null ? void 0 : e11.clients) != null && i15.length ? [e11] : []);
  });
}
var r3 = computed(() => b5(H(), c3));
var c3 = ref({});
var f5 = ref();
function _4(t8) {
  t8 !== void 0 && (f5.value = t8, T3(u4()));
}
var u4 = () => {
  var t8, n7, e11, i15;
  return v5(f5.value) ? f5.value : v5(y4) ? y4 : {
    targetKey: (t8 = r3.value[0]) == null ? void 0 : t8.key,
    clientKey: (i15 = (e11 = (n7 = r3.value[0]) == null ? void 0 : n7.clients) == null ? void 0 : e11[0]) == null ? void 0 : i15.client
  };
};
function v5(t8) {
  return t8 === void 0 ? false : !!r3.value.find(
    (n7) => n7.key === t8.targetKey && n7.clients.find((e11) => e11.client === t8.clientKey)
  );
}
function h2() {
  objectReplace(l5, u4());
}
var l5 = reactive(u4());
var T3 = (t8) => {
  Object.assign(l5, {
    ...l5,
    ...t8
  }), safeLocalStorage().setItem(REFERENCE_LS_KEYS.SELECTED_CLIENT, JSON.stringify(l5));
};
var R2 = () => ({
  httpClient: readonly(l5),
  resetState: h2,
  setHttpClient: T3,
  setDefaultHttpClient: _4,
  excludedClients: readonly(c3),
  setExcludedClients: (t8) => {
    c3.value = t8, objectReplace(l5, u4());
  },
  availableTargets: r3,
  getClientTitle: K,
  getTargetTitle: d4,
  httpTargetTitle: L3,
  httpClientTitle: S2
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/DocumentSource/hooks/useDocumentFetcher.js
function l6({
  configuration: o4
}) {
  const t8 = ref("");
  return watch(
    () => toValue(o4),
    async (n7) => {
      var r8;
      if (!n7)
        return;
      const e11 = await m8(n7, (r8 = toValue(o4)) == null ? void 0 : r8.proxyUrl);
      typeof e11 == "string" && (t8.value = e11.trim());
    },
    { immediate: true, deep: true }
  ), {
    originalDocument: t8
  };
}
var m8 = async ({ url: o4, content: t8 }, n7) => {
  if (o4 && !t8)
    try {
      const r8 = await measure(`fetch(${o4})`, async () => await fetchDocument(o4, n7));
      return console.info("size:", Math.round(r8.length / 1024), "kB"), r8;
    } catch (r8) {
      console.error("Failed to fetch OpenAPI document from URL:", r8);
    }
  const e11 = typeof t8 == "function" ? t8() : t8;
  if (typeof e11 == "string")
    return e11;
  if (typeof e11 == "object")
    return prettyPrintJson(e11);
};

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/DocumentSource/hooks/useDocumentSource.js
function C3({
  originalDocument: c8,
  dereferencedDocument: o4,
  configuration: i15
}) {
  const { originalDocument: g11 } = l6({
    configuration: i15
  }), s19 = computed(() => c8 ? toValue(c8) : toValue(g11)), a22 = ref(""), h10 = computed(() => o4 ? toValue(o4) : toValue(u11)), u11 = ref({
    openapi: "3.1.0",
    info: {
      title: "",
      version: ""
    },
    paths: {}
  });
  watch(
    () => toValue(s19),
    async (p19) => {
      if (!p19)
        return;
      const t8 = normalize(p19);
      if (a22.value = typeof t8 == "object" && (t8.openapi || t8.swagger) || "", o4)
        return;
      const w9 = !a22.value.startsWith("3.1") ? (
        // Upgrade needed
        measure("upgrade", () => {
          const { specification: n7 } = upgrade(t8);
          return n7;
        })
      ) : (
        // Skip the upgrade
        t8
      ), v11 = await measure("dereference", async () => {
        const { schema: n7, errors: r8 } = await dereference(w9);
        return r8 != null && r8.length && console.warn(
          `Please open an issue on https://github.com/scalar/scalar
`,
          `Scalar OpenAPI Parser Warning:
`,
          r8
        ), n7 === void 0 && console.error("Failed to dereference the OpenAPI document", r8), n7;
      });
      u11.value = v11;
    },
    { immediate: true }
  );
  const m38 = ge({
    useLocalStorage: false,
    ...toValue(i15) ?? apiReferenceConfigurationSchema.parse({})
  }), S9 = Y(m38);
  return {
    originalDocument: s19,
    originalOpenApiVersion: a22,
    dereferencedDocument: h10,
    workspaceStore: m38,
    activeEntitiesStore: S9
  };
}

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/DownloadLink/openapi-version-symbol.js
var o = Symbol("openApiVersion");

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/plugins/plugin-manager.js
var r4 = ({ plugins: o4 = [] }) => {
  const s19 = /* @__PURE__ */ new Map();
  return o4.forEach((e11) => {
    const n7 = e11();
    s19.set(n7.name, n7);
  }), {
    /**
     * Get all extensions with the given name from registered plugins
     */
    getSpecificationExtensions: (e11) => {
      const n7 = [];
      for (const i15 of s19.values())
        for (const t8 of i15.extensions)
          t8.name === e11 && n7.push(t8);
      return n7;
    }
  };
};

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/plugins/hooks/usePluginManager.js
var t3 = Symbol();
var i6 = () => {
  const r8 = inject(t3);
  return r8 || r4({});
};

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/HttpMethod/HttpMethod.vue.js
var C4 = defineComponent({
  __name: "HttpMethod",
  props: {
    as: {},
    property: {},
    short: { type: Boolean },
    method: {}
  },
  setup(p19) {
    const e11 = p19, t8 = computed(() => getHttpMethodInfo(e11.method)), a22 = computed(() => normalizeHttpMethod(e11.method));
    return (o4, v11) => (openBlock(), createBlock(resolveDynamicComponent(o4.as ?? "span"), {
      class: "uppercase",
      style: normalizeStyle({ [o4.property || "color"]: t8.value.colorVar })
    }, {
      default: withCtx(() => [
        renderSlot(o4.$slots, "default"),
        createTextVNode(" " + toDisplayString(o4.short ? t8.value.short : a22.value), 1)
      ]),
      _: 3
    }, 8, ["style"]));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Sidebar/SidebarHttpBadge.vue2.js
var h3 = defineComponent({
  __name: "SidebarHttpBadge",
  props: {
    method: {},
    active: { type: Boolean }
  },
  setup(p19) {
    return (e11, m38) => (openBlock(), createBlock(unref(C4), {
      class: normalizeClass([
        "flex items-center justify-end gap-1",
        "sidebar-heading-type",
        `sidebar-heading-type--${e11.method.toLowerCase()}`,
        { "sidebar-heading-type-active": e11.active }
      ]),
      method: e11.method,
      property: "--method-color",
      short: ""
    }, {
      default: withCtx(() => [
        renderSlot(e11.$slots, "default", {}, void 0, true)
      ]),
      _: 3
    }, 8, ["class", "method"]));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Sidebar/SidebarHttpBadge.vue.js
var d5 = s5(h3, [["__scopeId", "data-v-43724d28"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Sidebar/SidebarElement.vue2.js
var P5 = ["id"];
var z2 = {
  key: 0,
  class: "sidebar-heading-chevron"
};
var D = ["aria-expanded"];
var F = ["href", "tabindex"];
var G = { class: "sidebar-heading-link-title" };
var W2 = {
  key: 0,
  class: "sidebar-heading-link-method"
};
var j = {
  key: 1,
  class: "action-menu"
};
var te = defineComponent({
  __name: "SidebarElement",
  props: {
    id: {},
    item: {},
    isActive: { type: Boolean },
    hasChildren: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["toggleOpen"],
  setup(C11, { emit: y11 }) {
    const o4 = C11, m38 = y11, { getFullHash: u11, isIntersectionEnabled: s19, replaceUrlState: w9 } = T2(), i15 = f4(), c8 = async () => {
      s19.value = false, o4.hasChildren && m38("toggleOpen"), await sleep(100), s19.value = true;
    }, S9 = () => {
      if (i15.value.pathRouting)
        return combineUrlAndPath(i15.value.pathRouting.basePath, o4.item.id);
      if (typeof window < "u") {
        const e11 = new URL(window.location.href);
        return e11.hash = u11(o4.item.id), `${e11.pathname}${e11.search}${e11.hash}`;
      }
      return `#${u11(o4.item.id)}`;
    }, B12 = async (e11) => {
      var t8, f15;
      (f15 = (t8 = i15.value).onSidebarClick) == null || f15.call(t8, o4.item.id), i15.value.pathRouting && (e11.preventDefault(), o4.hasChildren && m38("toggleOpen"), m38("toggleOpen"), s19.value = false, w9(o4.item.id), scrollToId(o4.item.id), await sleep(100), s19.value = true);
    };
    return (e11, t8) => (openBlock(), createElementBlock("li", {
      id: e11.id,
      class: "sidebar-group-item"
    }, [
      createBaseVNode("div", {
        class: normalizeClass(["sidebar-heading", {
          "sidebar-group-item__folder": e11.hasChildren,
          active_page: e11.isActive,
          deprecated: "deprecated" in e11.item && e11.item.deprecated
        }]),
        onClick: c8
      }, [
        e11.hasChildren && !unref(i15).defaultOpenAllTags ? (openBlock(), createElementBlock("p", z2, [
          createBaseVNode("button", {
            "aria-expanded": e11.open,
            class: "toggle-nested-icon",
            type: "button",
            onClick: withModifiers(c8, ["stop"])
          }, [
            createVNode(unref(k), { open: e11.open }, {
              label: withCtx(() => [
                createTextVNode(toDisplayString(e11.open ? "Collapse" : "Expand") + " " + toDisplayString(e11.item.title), 1)
              ]),
              _: 1
            }, 8, ["open"])
          ], 8, D),
          t8[0] || (t8[0] = createTextVNode("   "))
        ])) : createCommentVNode("", true),
        createBaseVNode("a", {
          class: "sidebar-heading-link",
          href: S9(),
          tabindex: e11.hasChildren ? -1 : 0,
          onClick: B12
        }, [
          createBaseVNode("p", G, toDisplayString(e11.item.title), 1),
          "method" in e11.item && !e11.hasChildren ? (openBlock(), createElementBlock("p", W2, [
            t8[1] || (t8[1] = createTextVNode("   ")),
            t8[2] || (t8[2] = createBaseVNode("span", { class: "sr-only" }, "HTTP Method: ", -1)),
            createVNode(d5, {
              active: e11.isActive,
              method: e11.item.method
            }, {
              default: withCtx(() => [
                "webhook" in e11.item ? (openBlock(), createBlock(unref(_), {
                  key: 0,
                  weight: "bold",
                  style: normalizeStyle({
                    color: unref(getHttpMethodInfo)(e11.item.method).colorVar
                  })
                }, null, 8, ["style"])) : createCommentVNode("", true)
              ]),
              _: 1
            }, 8, ["active", "method"])
          ])) : createCommentVNode("", true)
        ], 8, F)
      ], 2),
      e11.open ? renderSlot(e11.$slots, "default", { key: 0 }, void 0, true) : createCommentVNode("", true),
      e11.$slots["action-menu"] ? (openBlock(), createElementBlock("div", j, [
        renderSlot(e11.$slots, "action-menu", {}, void 0, true)
      ])) : createCommentVNode("", true)
    ], 8, P5));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Sidebar/SidebarElement.vue.js
var m9 = s5(te, [["__scopeId", "data-v-b6cecb8a"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Sidebar/SidebarGroup.vue2.js
var p8 = defineComponent({
  __name: "SidebarGroup",
  props: {
    level: {}
  },
  setup(a22) {
    return (e11, n7) => (openBlock(), createElementBlock("ul", {
      class: "sidebar-group sidebar-indent-nested",
      style: normalizeStyle({ "--scalar-sidebar-level": e11.level })
    }, [
      renderSlot(e11.$slots, "default", {}, void 0, true)
    ], 4));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Sidebar/SidebarGroup.vue.js
var m10 = s5(p8, [["__scopeId", "data-v-39c84840"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Sidebar/Sidebar.vue2.js
var R3 = { class: "sidebar" };
var U2 = ["aria-label"];
var j2 = { class: "sidebar-group-title" };
var q = -160;
var X = defineComponent({
  __name: "Sidebar",
  props: {
    title: {}
  },
  setup(x14) {
    const { hash: d18, isIntersectionEnabled: I10 } = T2(), { items: O11, toggleCollapsedSidebarItem: _13, collapsedSidebarItems: g11 } = l3(), f15 = ref(null), l11 = ref(true);
    watch(d18, (e11) => {
      !I10.value || l11.value || typeof window > "u" || E9(e11);
    });
    const E9 = (e11) => {
      var t8, s19, S9, k12;
      const r8 = document.getElementById(`sidebar-${e11}`);
      if (!r8 || !f15.value)
        return;
      let i15 = q;
      r8.getAttribute("data-sidebar-type") === "heading" ? i15 += r8.offsetTop + ((t8 = r8.getElementsByClassName("sidebar-heading")) == null ? void 0 : t8[0]).offsetHeight : i15 += r8.offsetTop + (((s19 = r8.parentElement) == null ? void 0 : s19.offsetTop) ?? 0) + (((k12 = (S9 = r8.parentElement) == null ? void 0 : S9.parentElement) == null ? void 0 : k12.offsetTop) ?? 0), f15.value.scrollTo({ top: i15, behavior: "smooth" });
    }, B12 = (e11) => {
      if (!f15.value)
        return;
      const r8 = new MutationObserver((i15, t8) => {
        document.getElementById(`sidebar-${e11}`) && (E9(e11), l11.value = false, t8.disconnect());
      });
      return r8.observe(f15.value, {
        childList: true,
        subtree: true
      }), r8;
    }, v11 = (e11) => d18.value === e11 ? true : d18.value.includes("/description/") ? d18.value.split("/description/")[0] === e11 : false;
    onMounted(() => {
      const e11 = B12(d18.value);
      d18.value || setTimeout(() => l11.value = false, 300), onUnmounted(() => {
        e11 == null || e11.disconnect();
      });
    });
    const b9 = (e11) => {
      var r8;
      return "children" in e11 && (((r8 = e11.children) == null ? void 0 : r8.length) ?? 0) > 0;
    };
    return (e11, r8) => (openBlock(), createElementBlock("div", R3, [
      renderSlot(e11.$slots, "sidebar-start", {}, void 0, true),
      createBaseVNode("nav", {
        ref_key: "scrollerEl",
        ref: f15,
        "aria-label": `Table of contents for ${e11.title}`,
        class: "sidebar-pages custom-scroll custom-scroll-self-contain-overflow"
      }, [
        createVNode(m10, { level: 0 }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(O11).entries, (i15) => (openBlock(), createElementBlock(Fragment, {
              key: i15.id
            }, [
              "isGroup" in i15 && i15.isGroup ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createBaseVNode("li", j2, toDisplayString(i15.title), 1),
                (openBlock(true), createElementBlock(Fragment, null, renderList(i15.children, (t8) => (openBlock(), createBlock(m9, {
                  key: t8.id,
                  id: `sidebar-${t8.id}`,
                  "data-sidebar-type": "heading",
                  hasChildren: b9(t8),
                  isActive: v11(t8.id),
                  item: t8,
                  open: unref(g11)[t8.id] ?? false,
                  onToggleOpen: async () => {
                    l11.value = true, unref(_13)(t8.id), await unref(sleep)(100), l11.value = false;
                  }
                }, {
                  default: withCtx(() => [
                    b9(t8) ? (openBlock(), createBlock(m10, {
                      key: 0,
                      level: 1
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(t8.children, (s19) => (openBlock(), createBlock(m9, {
                          key: s19.id,
                          id: `sidebar-${s19.id}`,
                          isActive: v11(s19.id),
                          item: s19
                        }, null, 8, ["id", "isActive", "item"]))), 128))
                      ]),
                      _: 2
                    }, 1024)) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1032, ["id", "hasChildren", "isActive", "item", "open", "onToggleOpen"]))), 128))
              ], 64)) : (openBlock(), createBlock(m9, {
                key: 1,
                id: `sidebar-${i15.id}`,
                "data-sidebar-type": "heading",
                hasChildren: b9(i15),
                isActive: v11(i15.id),
                item: i15,
                open: unref(g11)[i15.id] ?? false,
                onToggleOpen: async () => {
                  l11.value = true, unref(_13)(i15.id), await unref(sleep)(100), l11.value = false;
                }
              }, {
                default: withCtx(() => [
                  b9(i15) ? (openBlock(), createBlock(m10, {
                    key: 0,
                    level: 1
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(i15.children, (t8) => (openBlock(), createBlock(m9, {
                        key: t8.id,
                        id: `sidebar-${t8.id}`,
                        isActive: v11(t8.id),
                        item: t8
                      }, null, 8, ["id", "isActive", "item"]))), 128))
                    ]),
                    _: 2
                  }, 1024)) : createCommentVNode("", true)
                ]),
                _: 2
              }, 1032, ["id", "hasChildren", "isActive", "item", "open", "onToggleOpen"]))
            ], 64))), 128))
          ]),
          _: 1
        })
      ], 8, U2),
      renderSlot(e11.$slots, "sidebar-end", {}, void 0, true)
    ]));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Sidebar/Sidebar.vue.js
var p9 = s5(X, [["__scopeId", "data-v-66291b32"]]);

// node_modules/.pnpm/@scalar+openapi-types@0.3.3/node_modules/@scalar/openapi-types/dist/helpers/is-dereferenced.js
var isDereferenced = (obj) => typeof obj === "object" && obj !== null && !("$ref" in obj && typeof obj.$ref === "string");

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/hooks/useOperation.js
function l7(s19) {
  return {
    parameterMap: computed(() => {
      var h10;
      const o4 = {
        path: [],
        query: [],
        header: [],
        cookie: [],
        body: [],
        formData: []
      };
      s19.pathParameters && s19.pathParameters.forEach((i15) => {
        i15.in === "path" ? o4.path.push(i15) : i15.in === "query" ? o4.query.push(i15) : i15.in === "header" ? o4.header.push(i15) : i15.in === "cookie" ? o4.cookie.push(i15) : i15.in === "body" ? o4.body.push(i15) : i15.in === "formData" && o4.formData.push(i15);
      });
      const f15 = ((h10 = s19.information) == null ? void 0 : h10.parameters) ?? [];
      return f15 && f15.forEach((i15) => {
        isDereferenced(i15) && (i15.in === "path" ? o4.path.push(i15) : i15.in === "query" ? o4.query.push(i15) : i15.in === "header" ? o4.header.push(i15) : i15.in === "cookie" ? o4.cookie.push(i15) : i15.in === "body" ? o4.body.push(i15) : i15.in === "formData" && o4.formData.push(i15));
      }), o4;
    })
  };
}

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/Search/useSearchIndex.js
function w2({
  specification: q7
}) {
  const { getHeadingId: H6, getModelId: L6, getTagId: C11 } = T2(), F6 = f4(), a22 = ref([]), d18 = ref([]), i15 = ref(), l11 = ref(""), y11 = new Fuse(a22.value, {
    keys: ["title", "description", "body"]
  }), b9 = () => {
    i15.value = 0, d18.value = y11.search(l11.value);
  };
  watch(l11, (e11) => {
    e11.length ? b9() : d18.value = [];
  });
  function N7() {
    l11.value = "", i15.value = void 0, d18.value = [];
  }
  const g11 = computed(() => l11.value.length === 0 ? a22.value.slice(0, 25).map((f15) => ({
    item: f15
  })) : d18.value.slice(0, 25)), W8 = computed(
    () => typeof i15.value == "number" ? g11.value[i15.value] : void 0
  );
  return watch(
    q7,
    (e11) => {
      var E9, x14, V11;
      a22.value = [];
      const f15 = [], I10 = i3(((E9 = e11 == null ? void 0 : e11.info) == null ? void 0 : E9.description) ?? "");
      if (I10.length && (I10.forEach((t8) => {
        f15.push({
          type: "heading",
          title: `Info > ${t8.value}`,
          description: "",
          href: `#${H6(t8)}`,
          tag: t8.slug,
          body: ""
        });
      }), a22.value = a22.value.concat(f15)), (x14 = e11 == null ? void 0 : e11.tags) != null && x14.length)
        (V11 = e11 == null ? void 0 : e11.tags) == null || V11.forEach((t8) => {
          const h10 = {
            title: t8["x-displayName"] ?? t8.name,
            href: `#${C11(t8)}`,
            description: t8.description,
            type: "tag",
            tag: t8.name,
            body: ""
          };
          a22.value.push(h10), t8.operations && t8.operations.forEach((s19) => {
            var n7;
            const { parameterMap: o4 } = l7(s19), u11 = O3(s19) || o4.value;
            let r8 = null;
            typeof u11 != "boolean" && (r8 = u11);
            const c8 = {
              type: "req",
              title: s19.name ?? s19.path,
              href: `#${s19.id}`,
              operationId: (n7 = s19.information) == null ? void 0 : n7.operationId,
              description: s19.description ?? "",
              httpVerb: s19.httpVerb,
              path: s19.path,
              tag: t8.name,
              operation: s19
            };
            r8 && (c8.body = r8), a22.value.push(c8);
          });
        });
      else if (e11 != null && e11.paths) {
        const t8 = e11.paths;
        Object.keys(t8 ?? {}).forEach((h10) => {
          Object.keys((t8 == null ? void 0 : t8[h10]) ?? {}).forEach((s19) => {
            var u11, r8;
            const o4 = (u11 = t8 == null ? void 0 : t8[h10]) == null ? void 0 : u11[s19];
            if (isHttpMethod(s19) && o4) {
              const { parameterMap: c8 } = l7({ ...o4, information: o4 }), n7 = O3(o4) || c8.value;
              let p19 = null;
              typeof n7 != "boolean" && (p19 = n7);
              const R8 = {
                type: "req",
                title: o4.name ?? o4.path,
                href: `#${o4.id}`,
                operationId: (r8 = o4.information) == null ? void 0 : r8.operationId,
                description: o4.description ?? "",
                httpVerb: o4.httpVerb,
                path: o4.path,
                operation: o4
              };
              p19 && (R8.body = p19), a22.value.push(R8);
            }
          });
        });
      }
      const M7 = e11 == null ? void 0 : e11.webhooks, D7 = [];
      M7 && M7.forEach((t8) => {
        D7.push({
          type: "webhook",
          title: "Webhook",
          href: `#${t8.id}`,
          description: `${t8.name}`,
          httpVerb: t8.httpVerb,
          tag: t8.name,
          body: ""
        }), a22.value = a22.value.concat(D7);
      });
      const v11 = F6.value.hideModels ? {} : y2(e11), $5 = [];
      v11 && (Object.keys(v11).forEach((t8) => {
        $5.push({
          type: "model",
          title: "Model",
          href: `#${L6({ name: t8 })}`,
          description: v11[t8].title ?? t8,
          tag: t8,
          body: ""
        });
      }), a22.value = a22.value.concat($5)), y11.setCollection(a22.value);
    },
    { immediate: true }
  ), {
    resetSearch: N7,
    fuseSearch: b9,
    selectedSearchIndex: i15,
    selectedSearchResult: W8,
    searchResultsWithPlaceholderResults: g11,
    searchText: l11
  };
}

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/Search/SearchModal.vue2.js
var le = { class: "sr-only" };
var ie = { class: "sr-only" };
var ve = defineComponent({
  __name: "SearchModal",
  props: {
    parsedSpec: {},
    modalState: {}
  },
  setup(F6) {
    const m38 = F6, q7 = toRef(m38, "parsedSpec"), S9 = nanoid(), I10 = `${S9}-search-result`, w9 = `${S9}-search-instructions`, v11 = (o4) => `${S9}${o4}`, {
      resetSearch: D7,
      fuseSearch: L6,
      selectedSearchIndex: r8,
      selectedSearchResult: k12,
      searchResultsWithPlaceholderResults: u11,
      searchText: p19
    } = w2({
      specification: q7
    }), M7 = {
      heading: "DocsPage",
      model: "Brackets",
      req: "Terminal",
      tag: "CodeFolder",
      webhook: "Terminal"
    }, P10 = {
      heading: "Document Heading",
      req: "Request",
      tag: "Tag",
      model: "",
      // The title of the entry is already "Model"
      webhook: ""
      // The title of the entry is already "Webhook"
    }, H6 = ref(null);
    watch(
      () => m38.modalState.open,
      (o4) => {
        o4 && D7();
      }
    );
    const { setCollapsedSidebarItem: U7 } = l3(), K6 = /#(tag\/[^/]*)/;
    function V11(o4) {
      let t8 = "models";
      const e11 = o4.item.href.match(K6);
      e11 != null && e11.length && e11.length > 1 && (t8 = e11[1]), U7(t8, true);
      const a22 = o4.item.href.replace("#", "");
      if (document.getElementById(a22))
        scrollToId(a22), m38.modalState.hide();
      else {
        const i15 = e3.on((f15) => {
          f15.id === a22 && (scrollToId(a22), i15(), m38.modalState.hide());
        });
      }
    }
    watch(r8, (o4) => {
      var a22;
      if (typeof o4 != "number")
        return;
      const t8 = u11.value[o4], e11 = v11(t8 == null ? void 0 : t8.item.href);
      (a22 = document.getElementById(e11)) == null || a22.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    });
    const B12 = (o4) => {
      const t8 = o4 === "up" ? -1 : 1, e11 = u11.value.length;
      if (typeof r8.value == "number") {
        const a22 = (r8.value + t8 + e11) % e11;
        r8.value = a22;
      } else
        r8.value = t8 === -1 ? e11 - 1 : 0;
    };
    function z10(o4) {
      const t8 = new URL(window.location.href);
      return t8.hash = o4, t8.toString();
    }
    function O11() {
      if (!r8.value)
        return;
      const o4 = u11.value;
      V11(o4[r8.value]);
    }
    return (o4, t8) => (openBlock(), createBlock(unref(m2), {
      "aria-label": "Reference Search",
      state: o4.modalState,
      variant: "search"
    }, {
      default: withCtx(() => [
        createBaseVNode("div", {
          ref_key: "searchModalRef",
          ref: H6,
          class: "ref-search-container",
          role: "search"
        }, [
          createVNode(unref(p), {
            modelValue: unref(p19),
            "onUpdate:modelValue": t8[0] || (t8[0] = (e11) => isRef(p19) ? p19.value = e11 : null),
            "aria-activedescendant": unref(k12) ? v11(unref(k12).item.href) : void 0,
            "aria-autocomplete": "list",
            "aria-controls": I10,
            "aria-describedby": w9,
            role: "combobox",
            onBlur: t8[1] || (t8[1] = (e11) => r8.value = void 0),
            onInput: unref(L6),
            onKeydown: [
              t8[2] || (t8[2] = withKeys(withModifiers((e11) => B12("down"), ["stop", "prevent"]), ["down"])),
              withKeys(withModifiers(O11, ["stop", "prevent"]), ["enter"]),
              t8[3] || (t8[3] = withKeys(withModifiers((e11) => B12("up"), ["stop", "prevent"]), ["up"]))
            ]
          }, null, 8, ["modelValue", "aria-activedescendant", "onInput", "onKeydown"])
        ], 512),
        createVNode(unref(x), {
          id: I10,
          "aria-label": "Reference Search Results",
          class: "ref-search-results custom-scroll",
          noResults: !unref(u11).length
        }, {
          query: withCtx(() => [
            createTextVNode(toDisplayString(unref(p19)), 1)
          ]),
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(u11), (e11, a22) => (openBlock(), createBlock(unref(B2), {
              id: v11(e11.item.href),
              key: e11.refIndex,
              href: z10(e11.item.href),
              icon: M7[e11.item.type],
              selected: unref(r8) === a22,
              onClick: (i15) => V11(e11),
              onFocus: (i15) => r8.value = a22
            }, createSlots({
              default: withCtx(() => {
                var i15, f15, C11, T9;
                return [
                  createBaseVNode("span", {
                    class: normalizeClass({
                      deprecated: (f15 = (i15 = e11.item.operation) == null ? void 0 : i15.information) == null ? void 0 : f15.deprecated
                    })
                  }, [
                    createBaseVNode("span", le, [
                      createTextVNode(toDisplayString(P10[e11.item.type]) + ":  ", 1),
                      (T9 = (C11 = e11.item.operation) == null ? void 0 : C11.information) != null && T9.deprecated ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                        createTextVNode(" (Deprecated)  ")
                      ], 64)) : createCommentVNode("", true)
                    ]),
                    createTextVNode(" " + toDisplayString(e11.item.title) + " ", 1),
                    t8[4] || (t8[4] = createBaseVNode("span", { class: "sr-only" }, ",", -1))
                  ], 2)
                ];
              }),
              _: 2
            }, [
              e11.item.type !== "webhook" && (e11.item.httpVerb || e11.item.path) && e11.item.path !== e11.item.title ? {
                name: "description",
                fn: withCtx(() => [
                  t8[5] || (t8[5] = createBaseVNode("span", { class: "sr-only" }, "Path: ", -1)),
                  createTextVNode(" " + toDisplayString(e11.item.path), 1)
                ]),
                key: "0"
              } : e11.item.description ? {
                name: "description",
                fn: withCtx(() => [
                  t8[6] || (t8[6] = createBaseVNode("span", { class: "sr-only" }, "Description: ", -1)),
                  createTextVNode(" " + toDisplayString(e11.item.description), 1)
                ]),
                key: "1"
              } : void 0,
              e11.item.type === "req" ? {
                name: "addon",
                fn: withCtx(() => [
                  createVNode(d5, {
                    "aria-hidden": "true",
                    method: e11.item.httpVerb ?? "get"
                  }, null, 8, ["method"]),
                  createBaseVNode("span", ie, " HTTP Method: " + toDisplayString(e11.item.httpVerb ?? "get") + ", ", 1)
                ]),
                key: "2"
              } : void 0
            ]), 1032, ["id", "href", "icon", "selected", "onClick", "onFocus"]))), 128))
          ]),
          _: 1
        }, 8, ["noResults"]),
        createBaseVNode("div", {
          id: w9,
          class: "ref-search-meta"
        }, t8[7] || (t8[7] = [
          createBaseVNode("span", {
            "aria-hidden": "true",
            class: "contents"
          }, [
            createBaseVNode("span", null, "↑↓ Navigate"),
            createBaseVNode("span", null, "⏎ Select")
          ], -1),
          createBaseVNode("span", { class: "sr-only" }, " Press up arrow / down arrow to navigate, enter to select, type to filter results ", -1)
        ]))
      ]),
      _: 1
    }, 8, ["state"]));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/Search/SearchModal.vue.js
var p10 = s5(ve, [["__scopeId", "data-v-1d306466"]]);

// node_modules/.pnpm/@vueuse+shared@11.3.0_vue@3.5.17_typescript@5.8.3_/node_modules/@vueuse/shared/index.mjs
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function toValue2(r8) {
  return typeof r8 === "function" ? r8() : unref(r8);
}
var isClient = typeof window !== "undefined" && typeof document !== "undefined";
var isWorker = typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
var notNullish = (val) => val != null;
var isIOS = getIsIOS();
function getIsIOS() {
  var _a, _b;
  return isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((_b = window == null ? void 0 : window.navigator) == null ? void 0 : _b.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function cacheStringFunction(fn) {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
var camelizeRE = /-(\w)/g;
var camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_13, c8) => c8 ? c8.toUpperCase() : "");
});
function identity(arg) {
  return arg;
}

// node_modules/.pnpm/@vueuse+core@11.3.0_vue@3.5.17_typescript@5.8.3_/node_modules/@vueuse/core/index.mjs
var defaultDocument = isClient ? window.document : void 0;
var defaultNavigator = isClient ? window.navigator : void 0;
var defaultLocation = isClient ? window.location : void 0;
function unrefElement(elRef) {
  var _a;
  const plain = toValue2(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
var _global2 = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var globalKey2 = "__vueuse_ssr_handlers__";
var handlers = getHandlers();
function getHandlers() {
  if (!(globalKey2 in _global2))
    _global2[globalKey2] = _global2[globalKey2] || {};
  return _global2[globalKey2];
}
var defaultState = {
  x: 0,
  y: 0,
  pointerId: 0,
  pressure: 0,
  tiltX: 0,
  tiltY: 0,
  width: 0,
  height: 0,
  twist: 0,
  pointerType: null
};
var keys = Object.keys(defaultState);
var DEFAULT_UNITS = [
  { max: 6e4, value: 1e3, name: "second" },
  { max: 276e4, value: 6e4, name: "minute" },
  { max: 72e6, value: 36e5, name: "hour" },
  { max: 5184e5, value: 864e5, name: "day" },
  { max: 24192e5, value: 6048e5, name: "week" },
  { max: 28512e6, value: 2592e6, name: "month" },
  { max: Number.POSITIVE_INFINITY, value: 31536e6, name: "year" }
];
var _TransitionPresets = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
var TransitionPresets = Object.assign({}, { linear: identity }, _TransitionPresets);

// node_modules/.pnpm/@vueuse+integrations@11.3.0_focus-trap@7.6.5_fuse.js@7.1.0_vue@3.5.17_typescript@5.8.3_/node_modules/@vueuse/integrations/useFocusTrap.mjs
function useFocusTrap(target, options = {}) {
  let trap;
  const { immediate, ...focusTrapOptions } = options;
  const hasFocus = ref(false);
  const isPaused = ref(false);
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
    const _targets = toValue2(target);
    return (Array.isArray(_targets) ? _targets : [_targets]).map((el) => {
      const _el = toValue2(el);
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

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/layouts/Modal/ApiClientModal.vue2.js
var V2 = { class: "scalar scalar-app" };
var $2 = { class: "scalar-container" };
var g2 = ["id"];
var q2 = defineComponent({
  __name: "ApiClientModal",
  setup(H6) {
    const { activeWorkspace: m38 } = z(), { modalState: o4, events: n7 } = je(), l11 = ref(null), s19 = useId(), { activate: u11, deactivate: p19 } = useFocusTrap(l11, {
      allowOutsideClick: true,
      fallbackFocus: `#${s19}`
    }), c8 = (e11) => {
      var t8;
      return E2(e11, n7.hotKeys, (t8 = m38.value) == null ? void 0 : t8.hotKeyConfig);
    };
    watch(
      () => o4.open,
      (e11) => {
        e11 ? (window.addEventListener("keydown", c8), document.documentElement.style.overflow = "hidden", u11({ checkCanFocusTrap: () => nextTick() })) : (window.removeEventListener("keydown", c8), document.documentElement.style.removeProperty("overflow"), p19());
      }
    ), onBeforeMount(() => l());
    const i15 = (e11) => (e11 == null ? void 0 : e11.closeModal) && o4.open && o4.hide();
    return onMounted(() => n7.hotKeys.on(i15)), onBeforeUnmount(() => {
      document.documentElement.style.removeProperty("overflow"), n7.hotKeys.off(i15);
    }), (e11, t8) => withDirectives((openBlock(), createElementBlock("div", V2, [
      createBaseVNode("div", $2, [
        createBaseVNode("div", {
          id: unref(s19),
          ref_key: "client",
          ref: l11,
          "aria-label": "API Client",
          "aria-modal": "true",
          class: "scalar-app-layout scalar-client",
          role: "dialog",
          tabindex: "-1"
        }, [
          createVNode(unref(k2), null, {
            default: withCtx(() => [
              createVNode(unref(RouterView), { key: "$route.fullPath" })
            ]),
            _: 1
          })
        ], 8, g2),
        createBaseVNode("div", {
          class: "scalar-app-exit",
          onClick: t8[0] || (t8[0] = (I10) => unref(o4).hide())
        })
      ])
    ], 512)), [
      [vShow, unref(o4).open]
    ]);
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/layouts/Modal/ApiClientModal.vue.js
var a4 = s2(q2, [["__scopeId", "data-v-45e9730e"]]);

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/router.js
var u5 = () => createRouter({
  history: createMemoryHistory(),
  routes: c2
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/libs/get-request-uid-by-path-method.js
var c4 = (o4, r8) => {
  var s19;
  const { requestUid: a22, method: e11, path: t8 } = r8 ?? {};
  return a22 || ((s19 = Object.values(o4).find(
    (d18) => d18.path.toLowerCase() === (t8 == null ? void 0 : t8.toLowerCase()) && d18.method.toLowerCase() === (e11 == null ? void 0 : e11.toLowerCase())
  )) == null ? void 0 : s19.uid) || Object.keys(o4)[0];
};

// node_modules/.pnpm/@scalar+oas-utils@0.4.6/node_modules/@scalar/oas-utils/dist/migrations/data-version.js
var DATA_VERSION = "2.5.0";
var DATA_VERSION_LS_LEY = "scalar_api_client_data_version";

// node_modules/.pnpm/@scalar+oas-utils@0.4.6/node_modules/@scalar/oas-utils/dist/migrations/local-storage.js
var parseLocalStorage = (lsKey) => {
  const item = localStorage.getItem(lsKey) || "[{}]";
  const data = item[0] === "[" ? parse(item) : JSON.parse(item);
  return data;
};
var getLocalStorageVersion = () => {
  const collectionStr = localStorage.getItem("collection");
  const dataVersion = localStorage.getItem(DATA_VERSION_LS_LEY);
  if (dataVersion) {
    return dataVersion;
  }
  if (!(collectionStr == null ? void 0 : collectionStr.length) || (collectionStr == null ? void 0 : collectionStr[0]) === "{") {
    return "0.0.0";
  }
  try {
    const [collection] = Object.values(parse(collectionStr) ?? {});
    if ((collection == null ? void 0 : collection.type) === "collection") {
      return "2.1.0";
    }
    return "0.0.0";
  } catch (e11) {
    console.error(e11);
    return "0.0.0";
  }
};

// node_modules/.pnpm/@scalar+oas-utils@0.4.6/node_modules/@scalar/oas-utils/dist/migrations/semver.js
var semverLessThan = (left, right) => {
  const parseSemver = (version2) => {
    const [major = 0, minor = 0, patch = 0] = version2.split(".").map((part) => Number.parseInt(part, 10));
    return { major, minor, patch };
  };
  const { major: major1, minor: minor1, patch: patch1 } = parseSemver(left);
  const { major: major2, minor: minor2, patch: patch2 } = parseSemver(right);
  if (major1 < major2) {
    return true;
  }
  if (major1 > major2) {
    return false;
  }
  if (minor1 < minor2) {
    return true;
  }
  if (minor1 > minor2) {
    return false;
  }
  return patch1 < patch2;
};

// node_modules/.pnpm/@scalar+oas-utils@0.4.6/node_modules/@scalar/oas-utils/dist/migrations/v-2.1.0/migration.js
var migrate_v_2_1_0 = (data) => {
  console.info("Performing data migration v-0.0.0 to v-2.1.0");
  const oldData = {
    ...data,
    // @ts-expect-error Tags used to be called folders
    folders: parseLocalStorage("folder")
  };
  const flattenChildren = (childUids) => childUids.reduce(
    (prev, uid) => {
      var _a;
      const request = oldData.requests[uid];
      if (request) {
        prev.requestUids.add(uid);
        (_a = request.securitySchemeUids) == null ? void 0 : _a.forEach((s19) => prev.authUids.add(s19));
      } else if (oldData.folders[uid]) {
        const { requestUids, tagUids, authUids } = flattenChildren(oldData.folders[uid].childUids ?? []);
        prev.tagUids.add(uid);
        requestUids.forEach((r8) => prev.requestUids.add(r8));
        tagUids.forEach((t8) => prev.tagUids.add(t8));
        authUids.forEach((a22) => prev.authUids.add(a22));
      }
      return prev;
    },
    {
      requestUids: /* @__PURE__ */ new Set(),
      tagUids: /* @__PURE__ */ new Set(),
      authUids: /* @__PURE__ */ new Set()
    }
  );
  const migrateAuth = (scheme) => {
    if (scheme.type === "apiKey") {
      return { type: "apiKey", name: scheme.name, value: scheme.value ?? "" };
    }
    if (scheme.type === "http") {
      return {
        type: "http",
        username: scheme.value ?? "",
        password: scheme.secondValue ?? "",
        token: scheme.value ?? ""
      };
    }
    if (scheme.type === "oauth2" && scheme.flow.type === "implicit") {
      return {
        type: "oauth-implicit",
        token: scheme.flow.token ?? ""
      };
    }
    if (scheme.type === "oauth2" && scheme.flow.type === "password") {
      return {
        type: "oauth-password",
        token: scheme.flow.token ?? "",
        username: scheme.flow.value ?? "",
        password: scheme.flow.secondValue ?? "",
        clientSecret: scheme.flow.clientSecret ?? ""
      };
    }
    if (scheme.type === "oauth2" && scheme.flow.type === "clientCredentials") {
      return {
        type: "oauth-clientCredentials",
        token: scheme.flow.token ?? "",
        clientSecret: scheme.flow.clientSecret ?? ""
      };
    }
    if (scheme.type === "oauth2" && scheme.flow.type === "authorizationCode") {
      return {
        type: "oauth-authorizationCode",
        token: scheme.flow.token ?? "",
        clientSecret: scheme.flow.clientSecret ?? ""
      };
    }
    return {
      type: "apiKey",
      name: "",
      value: ""
    };
  };
  const requestSecurityDict = {};
  const collections = Object.values(oldData.collections ?? {}).reduce((prev, c8) => {
    var _a, _b, _c, _d, _e, _f, _g;
    const { requestUids, tagUids, authUids } = flattenChildren(c8.childUids ?? []);
    const securitySchemesSet = /* @__PURE__ */ new Set([...authUids, ...Object.values(c8.securitySchemeDict ?? {})]);
    const securitySchemes2 = [...securitySchemesSet];
    requestUids.forEach((r8) => requestSecurityDict[r8] = securitySchemes2);
    const auth = securitySchemes2.reduce(
      (_prev, uid) => {
        const scheme = oldData.securitySchemes[uid];
        if ((scheme == null ? void 0 : scheme.uid) && _prev) {
          _prev[uid] = migrateAuth(scheme);
        }
        return _prev;
      },
      {}
    );
    prev[c8.uid] = {
      "type": "collection",
      "openapi": ((_a = c8.spec) == null ? void 0 : _a.openapi) || "3.1.0",
      "info": ((_b = c8.spec) == null ? void 0 : _b.info) || { title: "OpenAPI Spec", version: "0.0.1" },
      "security": ((_c = c8.spec) == null ? void 0 : _c.security) || [],
      "externalDocs": (_d = c8.spec) == null ? void 0 : _d.externalDocs,
      "uid": c8.uid,
      securitySchemes: securitySchemes2,
      "selectedSecuritySchemeUids": [],
      "selectedServerUid": c8.selectedServerUid || ((_f = (_e = c8.spec) == null ? void 0 : _e.serverUids) == null ? void 0 : _f[0]) || "",
      "servers": ((_g = c8.spec) == null ? void 0 : _g.serverUids) || [],
      "requests": [...requestUids],
      "tags": [...tagUids],
      auth,
      "children": c8.childUids || [],
      "x-scalar-icon": "interface-content-folder",
      "watchMode": false,
      "watchModeStatus": "IDLE"
    };
    return prev;
  }, {});
  const cookies = oldData.cookies ?? {};
  const environments = Object.values(oldData.environments ?? {}).reduce(
    (prev, e11) => {
      prev[e11.uid] = {
        ...e11,
        value: e11.raw ?? ""
      };
      return prev;
    },
    {}
  );
  const requests = Object.values(oldData.requests ?? {}).reduce((prev, r8) => {
    var _a, _b, _c, _d, _e;
    const parameters = [
      ...Object.values(((_a = r8.parameters) == null ? void 0 : _a.path) ?? {}),
      ...Object.values(((_b = r8.parameters) == null ? void 0 : _b.query) ?? {}),
      ...Object.values(((_c = r8.parameters) == null ? void 0 : _c.headers) ?? {}),
      ...Object.values(((_d = r8.parameters) == null ? void 0 : _d.cookies) ?? {})
    ].filter((p19) => p19);
    const selectedSecuritySchemeUids = (r8.selectedSecuritySchemeUids || []).filter(
      (s19) => {
        var _a2;
        return (_a2 = requestSecurityDict[r8.uid]) == null ? void 0 : _a2.includes(s19);
      }
    );
    prev[r8.uid] = {
      ...r8,
      parameters,
      type: "request",
      method: ((_e = r8.method) == null ? void 0 : _e.toLowerCase()) ?? "get",
      examples: r8.childUids || [],
      selectedSecuritySchemeUids,
      selectedServerUid: "",
      servers: []
    };
    return prev;
  }, {});
  const requestExamples = Object.values(oldData.requestExamples ?? {}).reduce(
    (prev, e11) => {
      prev[e11.uid] = {
        ...e11,
        type: "requestExample"
      };
      return prev;
    },
    {}
  );
  const migrateFlow = (flow) => {
    const base = {
      refreshUrl: flow.refreshUrl || "",
      selectedScopes: flow.selectedScopes || [],
      scopes: flow.scopes || {}
    };
    if (flow.type === "implicit") {
      return {
        ...flow,
        ...base,
        "type": "implicit",
        "x-scalar-redirect-uri": ("redirectUri" in flow ? flow.redirectUri : "") || ""
      };
    }
    if (flow.type === "password") {
      return {
        ...flow,
        ...base,
        tokenUrl: flow.tokenUrl || ""
      };
    }
    if (flow.type === "clientCredentials") {
      return {
        ...flow,
        ...base,
        tokenUrl: flow.tokenUrl || ""
      };
    }
    return {
      ...flow,
      ...base,
      "x-usePkce": "no",
      "x-scalar-redirect-uri": ("redirectUri" in flow ? flow.redirectUri : "") || "",
      "authorizationUrl": flow.authorizationUrl || "",
      "tokenUrl": flow.tokenUrl || ""
    };
  };
  const getNameKey = (scheme) => {
    switch (scheme == null ? void 0 : scheme.type) {
      case "apiKey":
        return `${capitalize(scheme.in)}`;
      case "http": {
        return `${capitalize(scheme.scheme)} Authentication`;
      }
      case "oauth2":
        return camelToTitleWords(scheme.flow.type);
      case "openIdConnect":
        return "Open ID Connect";
      default:
        return "None";
    }
  };
  const securitySchemes = Object.values(oldData.securitySchemes ?? {}).reduce(
    (prev, s19) => {
      prev[s19.uid] = s19.type === "oauth2" ? {
        ...s19,
        "nameKey": getNameKey(s19),
        "x-scalar-client-id": s19.clientId || "",
        "flow": migrateFlow(s19.flow)
      } : { ...s19, nameKey: getNameKey(s19) };
      return prev;
    },
    {}
  );
  const servers = Object.values(oldData.servers ?? {}).reduce((prev, s19) => {
    prev[s19.uid] = {
      ...s19,
      variables: s19.variables ?? {}
    };
    return prev;
  }, {});
  const tags = Object.values(oldData.folders ?? {}).reduce((prev, f15) => {
    prev[f15.uid] = {
      "type": "tag",
      "uid": f15.uid,
      "name": f15.name || "unknownTag",
      "description": f15.description,
      "children": f15.childUids || [],
      "x-scalar-children": []
    };
    return prev;
  }, {});
  const workspaces = Object.values(oldData.workspaces ?? {}).reduce((prev, w9) => {
    prev[w9.uid] = {
      ...w9,
      description: w9.description ?? "Basic Scalar Workspace",
      cookies: w9.cookieUids || [],
      collections: w9.collectionUids || [],
      environments: w9.environmentUids || []
    };
    return prev;
  }, {});
  return {
    collections,
    cookies,
    environments,
    requestExamples,
    requests,
    securitySchemes,
    servers,
    tags,
    workspaces
  };
};

// node_modules/.pnpm/@scalar+oas-utils@0.4.6/node_modules/@scalar/oas-utils/dist/migrations/v-2.2.0/migration.js
var migrateSecurityScheme = (scheme, auth) => {
  if (scheme.type === "apiKey" && auth.type === "apiKey") {
    return {
      ...scheme,
      value: auth.value
    };
  }
  if (scheme.type === "http" && auth.type === "http") {
    return {
      ...scheme,
      username: auth.username,
      password: auth.password,
      token: auth.token
    };
  }
  if (scheme.type === "oauth2") {
    const { flow, ..._scheme } = scheme;
    if (flow.type === "implicit" && auth.type === "oauth-implicit") {
      return {
        ..._scheme,
        flows: {
          implicit: {
            ...flow,
            "scopes": flow.scopes,
            "token": auth.token,
            "x-scalar-client-id": _scheme["x-scalar-client-id"]
          }
        }
      };
    }
    if (flow.type === "password" && auth.type === "oauth-password") {
      return {
        ..._scheme,
        flows: {
          password: {
            ...flow,
            "username": auth.username,
            "password": auth.password,
            "token": auth.token,
            "clientSecret": auth.clientSecret,
            "scopes": flow.scopes,
            "x-scalar-client-id": _scheme["x-scalar-client-id"]
          }
        }
      };
    }
    if (flow.type === "clientCredentials" && auth.type === "oauth-clientCredentials") {
      return {
        ..._scheme,
        flows: {
          clientCredentials: {
            ...flow,
            "token": auth.token,
            "clientSecret": auth.clientSecret,
            "scopes": flow.scopes,
            "x-scalar-client-id": _scheme["x-scalar-client-id"]
          }
        }
      };
    }
    if (flow.type === "authorizationCode" && auth.type === "oauth-authorizationCode") {
      return {
        ..._scheme,
        flows: {
          authorizationCode: {
            ...flow,
            "token": auth.token,
            "clientSecret": auth.clientSecret,
            "scopes": flow.scopes,
            "x-scalar-client-id": _scheme["x-scalar-client-id"]
          }
        }
      };
    }
  }
  return null;
};
var migrate_v_2_2_0 = (data) => {
  console.info("Performing data migration v-2.1.0 to v-2.2.0");
  const securitySchemes = Object.values(data.securitySchemes).reduce(
    (prev, s19) => {
      var _a;
      const collection = Object.values(data.collections).find((c8) => c8.securitySchemes.includes(s19.uid));
      const auth = (_a = collection == null ? void 0 : collection.auth) == null ? void 0 : _a[s19.uid];
      if (!auth) {
        return prev;
      }
      const newScheme = migrateSecurityScheme(s19, auth);
      if (newScheme) {
        prev[s19.uid] = newScheme;
      }
      return prev;
    },
    {}
  );
  const servers = data.servers;
  return {
    ...data,
    securitySchemes,
    servers
  };
};

// node_modules/.pnpm/@scalar+oas-utils@0.4.6/node_modules/@scalar/oas-utils/dist/migrations/v-2.3.0/migration.js
var migrate_v_2_3_0 = (data) => {
  console.info("Performing data migration v-2.2.0 to v-2.3.0");
  const environments = data.environments;
  const workspaces = Object.values(data.workspaces).reduce((prev, w9) => {
    const workspaceEnvironments = {};
    Object.entries(environments).forEach(([envId, envData]) => {
      const parsedData = typeof envData.value === "string" ? JSON.parse(envData.value) : envData.value;
      if (envId === "default") {
        Object.assign(workspaceEnvironments, parsedData);
      }
    });
    prev[w9.uid] = {
      ...w9,
      environments: workspaceEnvironments
    };
    return prev;
  }, {});
  const collections = Object.values(data.collections).reduce((prev, c8) => {
    prev[c8.uid] = {
      ...c8,
      "x-scalar-environments": c8["x-scalar-environments"] || {}
    };
    return prev;
  }, {});
  Object.values(workspaces).forEach((workspace) => {
    Object.entries(environments).forEach(([envKey, envData]) => {
      if (envKey !== "default") {
        const parsedData = typeof envData.value === "string" ? JSON.parse(envData.value) : envData.value;
        const envName = envData.name;
        Object.values(collections).forEach((collection) => {
          collection["x-scalar-environments"] = collection["x-scalar-environments"] || {};
          collection["x-scalar-environments"][envName] = {
            variables: parsedData
          };
          if (workspace.activeEnvironmentId === envKey) {
            collection["x-scalar-active-environment"] = envName ?? "";
          }
        });
      }
    });
  });
  return {
    ...data,
    collections,
    workspaces
  };
};

// node_modules/.pnpm/@scalar+oas-utils@0.4.6/node_modules/@scalar/oas-utils/dist/migrations/v-2.4.0/migration.js
var migrate_v_2_4_0 = (data) => {
  console.info("Performing data migration v-2.3.0 to v-2.4.0");
  const collections = Object.values(data.collections).reduce((prev, c8) => {
    var _a;
    if (((_a = c8.info) == null ? void 0 : _a.title) === "Drafts") {
      c8.servers = [];
      Object.values(data.requests).forEach((request) => {
        if (request.selectedServerUid && c8.requests.includes(request.uid)) {
          const server = data.servers[request.selectedServerUid];
          if (server) {
            request.path = `${server.url}${request.path}`;
          }
          request.selectedServerUid = "";
        }
      });
    }
    prev[c8.uid] = c8;
    return prev;
  }, {});
  return {
    ...data,
    collections
  };
};

// node_modules/.pnpm/@scalar+oas-utils@0.4.6/node_modules/@scalar/oas-utils/dist/migrations/v-2.5.0/migration.js
var migrate_v_2_5_0 = (data) => {
  console.info("Performing data migration v-2.4.0 to v-2.5.0");
  const cookies = Object.entries(data.cookies || {}).reduce((acc, [key, cookie]) => {
    acc[key] = {
      ...cookie,
      uid: cookie.uid
    };
    return acc;
  }, {});
  const collections = Object.entries(data.collections || {}).reduce(
    (acc, [key, collection]) => {
      acc[key] = {
        ...collection,
        info: collection.info ?? {
          title: "API",
          version: "1.0"
        },
        uid: collection.uid,
        selectedSecuritySchemeUids: collection.selectedSecuritySchemeUids,
        servers: collection.servers.map((uid) => uid),
        tags: collection.tags.map((uid) => uid),
        requests: collection.requests.map((uid) => uid),
        children: collection.children.map((uid) => uid),
        selectedServerUid: collection.selectedServerUid,
        useCollectionSecurity: false
      };
      return acc;
    },
    {}
  );
  const environments = Object.entries(data.environments || {}).reduce(
    (acc, [key, environment]) => {
      acc[key] = {
        ...environment,
        uid: environment.uid
      };
      return acc;
    },
    {}
  );
  const requests = Object.entries(data.requests || {}).reduce(
    (acc, [key, request]) => {
      acc[key] = {
        ...request,
        uid: request.uid,
        servers: request.servers,
        selectedServerUid: request.selectedServerUid,
        examples: request.examples,
        selectedSecuritySchemeUids: request.selectedSecuritySchemeUids
      };
      return acc;
    },
    {}
  );
  const requestExamples = Object.entries(data.requestExamples || {}).reduce(
    (acc, [key, example]) => {
      const headers = example.parameters.headers;
      const hasAcceptHeader = headers.some((header) => header.key.toLowerCase() === "accept");
      if (!hasAcceptHeader) {
        headers.unshift({ key: "Accept", value: "*/*", enabled: true });
      }
      acc[key] = {
        ...example,
        uid: example.uid,
        requestUid: example.requestUid,
        parameters: {
          ...example.parameters,
          headers
        }
      };
      return acc;
    },
    {}
  );
  const securitySchemes = Object.entries(data.securitySchemes || {}).reduce(
    (acc, [key, securityScheme]) => {
      acc[key] = {
        ...securityScheme,
        uid: securityScheme.uid
      };
      return acc;
    },
    {}
  );
  const servers = Object.entries(data.servers || {}).reduce((acc, [key, server]) => {
    acc[key] = {
      ...server,
      uid: server.uid,
      variables: Object.entries(server.variables || {}).reduce((variablesAcc, [variableKey, variable]) => {
        var _a;
        variablesAcc[variableKey] = {
          default: variable.default ?? "",
          description: variable.description ?? "",
          ...((_a = variable.enum) == null ? void 0 : _a.length) && { enum: variable.enum }
        };
        return variablesAcc;
      }, {})
    };
    return acc;
  }, {});
  const tags = Object.entries(data.tags || {}).reduce((acc, [key, tag]) => {
    acc[key] = {
      ...tag,
      uid: tag.uid,
      children: tag.children
    };
    return acc;
  }, {});
  const workspaces = Object.entries(data.workspaces || {}).reduce(
    (acc, [key, workspace]) => {
      acc[key] = {
        ...workspace,
        uid: workspace.uid,
        collections: workspace.collections.map((uid) => uid),
        cookies: workspace.cookies.map((uid) => uid),
        selectedHttpClient: {
          targetKey: "shell",
          clientKey: "curl"
        }
      };
      return acc;
    },
    {}
  );
  return {
    ...data,
    collections,
    cookies,
    environments,
    requests,
    requestExamples,
    securitySchemes,
    servers,
    tags,
    workspaces
  };
};

// node_modules/.pnpm/@scalar+oas-utils@0.4.6/node_modules/@scalar/oas-utils/dist/migrations/migrator.js
var migrator = () => {
  const dataVersion = getLocalStorageVersion();
  console.info("Data version: " + dataVersion);
  let data = {
    collections: parseLocalStorage("collection"),
    cookies: parseLocalStorage("cookie"),
    environments: parseLocalStorage("environment"),
    requestExamples: parseLocalStorage("requestExample"),
    requests: parseLocalStorage("request"),
    securitySchemes: parseLocalStorage("securityScheme"),
    servers: parseLocalStorage("server"),
    tags: parseLocalStorage("tag"),
    workspaces: parseLocalStorage("workspace")
  };
  if (semverLessThan(dataVersion, "2.1.0")) {
    data = migrate_v_2_1_0(data);
  }
  if (semverLessThan(dataVersion, "2.2.0")) {
    data = migrate_v_2_2_0(data);
  }
  if (semverLessThan(dataVersion, "2.3.0")) {
    data = migrate_v_2_3_0(data);
  }
  if (semverLessThan(dataVersion, "2.4.0")) {
    data = migrate_v_2_4_0(data);
  }
  if (semverLessThan(dataVersion, "2.5.0")) {
    data = migrate_v_2_5_0(data);
  }
  data = {
    collections: Object.values(data.collections),
    cookies: Object.values(data.cookies),
    environments: Object.values(data.environments),
    requestExamples: Object.values(data.requestExamples),
    requests: Object.values(data.requests),
    securitySchemes: Object.values(data.securitySchemes),
    servers: Object.values(data.servers),
    tags: Object.values(data.tags),
    workspaces: Object.values(data.workspaces)
  };
  return data;
};

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/libs/local-storage.js
var e4 = (o4, t8, s19) => o4.forEach((a22) => {
  const r8 = schemaModel(a22, t8, false);
  r8 && s19(r8);
});
var z3 = (o4) => {
  const {
    collectionMutators: t8,
    cookieMutators: s19,
    environmentMutators: a22,
    tagMutators: r8,
    requestExampleMutators: m38,
    requestMutators: d18,
    serverMutators: u11,
    securitySchemeMutators: i15,
    workspaceMutators: l11
  } = o4;
  try {
    const {
      collections: c8,
      cookies: n7,
      environments: S9,
      requestExamples: h10,
      requests: p19,
      servers: A3,
      securitySchemes: w9,
      tags: M7,
      workspaces: f15
    } = migrator();
    e4(c8, collectionSchema, t8.rawAdd), e4(n7, cookieSchema, s19.add), e4(S9, environmentSchema, a22.add), e4(h10, requestExampleSchema, m38.rawAdd), e4(p19, requestSchema, d18.rawAdd), e4(A3, serverSchema, u11.rawAdd), e4(w9, securitySchemeSchema, i15.rawAdd), e4(M7, tagSchema, r8.rawAdd), e4(f15, workspaceSchema, l11.rawAdd), localStorage.setItem(DATA_VERSION_LS_LEY, DATA_VERSION);
  } catch (c8) {
    console.error(c8);
  }
};

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/libs/create-client.js
var xe2 = ({
  el: L6,
  appComponent: b9,
  configuration: y11 = {},
  isReadOnly: n7 = false,
  store: E9,
  persistData: k12 = true,
  mountOnInitialize: I10 = true,
  layout: m38 = "desktop",
  router: u11
}) => {
  const s19 = ref(apiClientConfigurationSchema.parse(y11)), a22 = E9 || ge({
    proxyUrl: s19.value.proxyUrl,
    theme: s19.value.theme,
    showSidebar: s19.value.showSidebar ?? true,
    hideClientButton: s19.value.hideClientButton ?? false,
    _integration: s19.value._integration,
    useLocalStorage: k12
  }), f15 = Y({ ...a22, router: u11 }), q7 = O2({ layout: m38 }), B12 = s3({
    plugins: s19.value.plugins ?? []
  }), S9 = () => {
    try {
      return typeof window < "u" && window.localStorage !== void 0;
    } catch {
      return false;
    }
  };
  if (S9() && localStorage.getItem(LS_KEYS.WORKSPACE) && !n7)
    try {
      const e11 = {};
      let t8 = 0, r8 = 0, o4 = "";
      for (o4 in localStorage)
        Object.prototype.hasOwnProperty.call(localStorage, o4) && (r8 = (localStorage[o4].length + o4.length) * 2, t8 += r8, e11[o4] = (r8 / 1024).toFixed(2) + " KB");
      e11.Total = (t8 / 1024).toFixed(2) + " KB", console.table(e11), z3(a22);
    } catch (e11) {
      console.warn("Failed to load from localStorage:", e11);
    }
  else if (!n7 && !s19.value.url && !s19.value.content) {
    if (a22.workspaceMutators.add({
      uid: "default",
      name: "Workspace",
      proxyUrl: s19.value.proxyUrl
    }), S9())
      try {
        localStorage.setItem(DATA_VERSION_LS_LEY, DATA_VERSION);
      } catch (e11) {
        console.warn("Failed to set localStorage version:", e11);
      }
  } else {
    const e11 = workspaceSchema.parse({
      uid: "default",
      name: "Workspace",
      proxyUrl: s19.value.proxyUrl
    });
    a22.workspaceMutators.rawAdd(e11);
  }
  const i15 = createApp(b9);
  i15.use(u11), i15.provide(qe, a22), i15.provide(t, m38), i15.provide(P2, f15), i15.provide(p2, q7), i15.provide(e, s19), i15.provide(t2, B12), i15.config.idPrefix = "scalar-client";
  const {
    collectionMutators: P10,
    importSpecFile: T9,
    importSpecFromUrl: R8,
    modalState: v11,
    requests: h10,
    securitySchemes: Y5,
    securitySchemeMutators: N7,
    servers: g11,
    workspaceMutators: F6,
    requestExampleMutators: j8
  } = a22, { activeCollection: p19, activeWorkspace: d18 } = f15, w9 = (e11 = L6) => {
    if (!e11) {
      console.error(
        "[@scalar/api-client-modal] Could not create the API client.",
        "Invalid HTML element provided.",
        "Read more: https://github.com/scalar/scalar/tree/main/packages/api-client"
      );
      return;
    }
    i15.mount(e11);
  };
  I10 && w9();
  const M7 = (e11) => {
    const t8 = c4(h10, e11);
    t8 ? u11.push({
      name: "request",
      query: e11 != null && e11._source ? { source: e11._source } : {},
      params: {
        workspace: "default",
        request: t8
      }
    }) : console.warn("[@scalar/api-client] Could not find request for path and method", e11);
  }, A3 = () => {
    var e11;
    a22.collectionMutators.reset(), a22.requestMutators.reset(), a22.requestExampleMutators.reset(), a22.securitySchemeMutators.reset(), a22.serverMutators.reset(), a22.tagMutators.reset(), F6.edit((e11 = d18.value) == null ? void 0 : e11.uid, "collections", []);
  };
  return {
    /** The vue app instance for the modal, be careful with this */
    app: i15,
    resetStore: A3,
    /**
     * Update the API client config
     *
     * Deletes the current store before importing again for now, in the future will Diff and only update what is needed
     */
    updateConfig: async (e11) => {
      var r8, o4;
      const t8 = apiClientConfigurationSchema.parse(e11);
      if (t8.url || t8.content || t8.servers || t8.authentication || t8.slug || t8.title || t8.baseServerURL || t8.proxyUrl || t8.showSidebar) {
        A3();
        const c8 = {
          ...t8,
          useCollectionSecurity: n7
        };
        s19.value = c8, t8.url ? await R8(t8.url, ((r8 = d18.value) == null ? void 0 : r8.uid) ?? "default", c8) : t8.content ? await T9(t8.content, ((o4 = d18.value) == null ? void 0 : o4.uid) ?? "default", c8) : console.error(
          "[@scalar/api-client-modal] Could not create the API client.",
          'Please provide an OpenAPI document: { url: "…" }',
          "Read more: https://github.com/scalar/scalar/tree/main/packages/api-client"
        );
      }
    },
    /** Update the currently selected server via URL */
    updateServer: (e11) => {
      var r8;
      const t8 = Object.values(g11).find((o4) => o4.url === e11);
      t8 && p19.value && P10.edit((r8 = p19.value) == null ? void 0 : r8.uid, "selectedServerUid", t8.uid);
    },
    /** Update the currently selected server via URL */
    onUpdateServer: (e11) => {
      watch(
        () => {
          var t8;
          return (t8 = p19.value) == null ? void 0 : t8.selectedServerUid;
        },
        (t8) => {
          const r8 = Object.values(g11).find((o4) => o4.uid === t8);
          r8 != null && r8.url && e11(r8.url);
        }
      );
    },
    /**
     * Update the auth values, we currently don't change the auth selection
     */
    updateAuth: ({
      nameKey: e11,
      propertyKey: t8,
      value: r8
    }) => {
      const c8 = Object.values(Y5).find((l11) => l11.nameKey === e11);
      c8 && N7.edit(c8.uid, t8, r8);
    },
    /** Route to a method + path */
    route: M7,
    /** Open the API client modal and optionally route to a request */
    open: (e11) => {
      const { method: t8, path: r8, requestUid: o4 } = e11 ?? {};
      (t8 && r8 || o4) && M7(e11), v11.open = true;
    },
    /** Mount the references to a given element */
    mount: w9,
    /** State for controlling the modal */
    modalState: v11,
    /* The workspace store */
    store: a22,
    /** Update the currently selected example */
    updateExample: (e11, t8) => {
      var l11, _13, O11, U7, x14;
      if (!e11 || !t8)
        return;
      const r8 = Object.values(h10).find(
        ({ operationId: W8, path: K6 }) => W8 === t8 || K6 === t8
      );
      if (!r8)
        return;
      const o4 = Object.keys(((l11 = r8.requestBody) == null ? void 0 : l11.content) || {})[0] || "", c8 = (x14 = (U7 = (O11 = (_13 = r8.requestBody) == null ? void 0 : _13.content) == null ? void 0 : O11[o4]) == null ? void 0 : U7.examples) == null ? void 0 : x14[e11];
      c8 && j8.edit(r8.examples[0], "body.raw.value", prettyPrintJson(c8.value));
    }
  };
};

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/layouts/Modal/create-api-client-modal.js
var y5 = async ({
  el: l11 = null,
  configuration: e11 = {},
  mountOnInitialize: r8 = true,
  store: t8
}) => {
  const n7 = {
    ...e11
  }, o4 = xe2({
    el: l11,
    appComponent: a4,
    configuration: n7,
    persistData: false,
    isReadOnly: true,
    store: t8,
    mountOnInitialize: r8,
    router: u5(),
    layout: "modal"
  }), { importSpecFile: s19, importSpecFromUrl: u11 } = o4.store;
  return t8 || (e11.url ? await u11(e11.url, "default", {
    proxyUrl: e11.proxyUrl,
    useCollectionSecurity: true,
    ...e11
  }) : e11.content && await s19(e11.content, "default", {
    useCollectionSecurity: true,
    ...e11
  })), o4;
};

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/ApiClientModal/useApiClient.js
var n3 = ref(null);
var a6 = () => ({
  client: n3,
  init: async (i15) => {
    const t8 = await y5(i15);
    return n3.value = t8, t8;
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/Search/SearchButton.vue2.js
var N2 = { class: "sidebar-search-input" };
var T4 = { class: "sidebar-search-shortcut" };
var V3 = { class: "sidebar-search-key" };
var G2 = defineComponent({
  __name: "SearchButton",
  props: {
    spec: {},
    searchHotKey: { default: "k" }
  },
  setup(f15) {
    const h10 = f15, i15 = ref(), s19 = W(), { client: y11 } = a6(), d18 = (o4) => {
      var e11;
      (isMacOS() ? o4.metaKey : o4.ctrlKey) && o4.key === h10.searchHotKey && !((e11 = y11.value) != null && e11.modalState.open) && (o4.preventDefault(), o4.stopPropagation(), s19.open ? s19.hide() : s19.show());
    };
    watch(
      () => s19.open,
      (o4, e11) => {
        !o4 && e11 && nextTick(() => {
          var c8;
          (c8 = i15.value) == null || c8.focus();
        });
      }
    ), onMounted(() => window.addEventListener("keydown", d18)), onBeforeUnmount(() => window.removeEventListener("keydown", d18));
    function k12() {
      s19.show();
    }
    return (o4, e11) => (openBlock(), createElementBlock(Fragment, null, [
      createBaseVNode("button", {
        ref_key: "button",
        ref: i15,
        class: normalizeClass(["sidebar-search", o4.$attrs.class]),
        role: "search",
        type: "button",
        onClick: k12
      }, [
        createVNode(unref(v), {
          class: "scalar-search-icon",
          weight: "bold"
        }),
        createBaseVNode("div", N2, [
          e11[3] || (e11[3] = createBaseVNode("span", { class: "sr-only" }, "Open Search", -1)),
          e11[4] || (e11[4] = createBaseVNode("span", {
            "aria-hidden": "true",
            class: "sidebar-search-placeholder"
          }, " Search ", -1)),
          createBaseVNode("span", T4, [
            e11[2] || (e11[2] = createBaseVNode("span", { class: "sr-only" }, "Keyboard Shortcut:", -1)),
            createBaseVNode("kbd", V3, [
              unref(isMacOS)() ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createTextVNode("⌘")
              ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                e11[0] || (e11[0] = createBaseVNode("span", { class: "sr-only" }, "CTRL", -1)),
                e11[1] || (e11[1] = createBaseVNode("span", { "aria-hidden": "true" }, "⌃", -1))
              ], 64)),
              createTextVNode(" " + toDisplayString(o4.searchHotKey), 1)
            ])
          ])
        ])
      ], 2),
      createVNode(p10, {
        modalState: unref(s19),
        parsedSpec: o4.spec
      }, null, 8, ["modalState", "parsedSpec"])
    ], 64));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/Search/SearchButton.vue.js
var m12 = s5(G2, [["__scopeId", "data-v-065378cc"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/ScreenReader.vue2.js
var s9 = {
  key: 0,
  class: "screenreader-only"
};
var d6 = defineComponent({
  __name: "ScreenReader",
  props: {
    if: { type: Boolean, default: true }
  },
  setup(a22) {
    return (e11, l11) => e11.$props.if ? (openBlock(), createElementBlock("span", s9, [
      renderSlot(e11.$slots, "default", {}, void 0, true)
    ])) : renderSlot(e11.$slots, "default", { key: 1 }, void 0, true);
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/ScreenReader.vue.js
var f7 = s5(d6, [["__scopeId", "data-v-df2e1026"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Section/SectionHeaderTag.vue2.js
var d7 = defineComponent({
  __name: "SectionHeaderTag",
  props: {
    level: { default: 1 }
  },
  setup(s19) {
    return (e11, c8) => (openBlock(), createBlock(resolveDynamicComponent(`h${e11.level}`), { class: "section-header-label" }, {
      default: withCtx(() => [
        renderSlot(e11.$slots, "default", {}, void 0, true)
      ]),
      _: 3
    }));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Section/SectionHeaderTag.vue.js
var e5 = s5(d7, [["__scopeId", "data-v-f1ac6c38"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/Tag/OperationsListItem.vue2.js
var H2 = ["href"];
var N3 = { class: "flex min-w-[62px] flex-row items-center justify-end gap-2" };
var W3 = defineComponent({
  __name: "OperationsListItem",
  props: {
    transformedOperation: {},
    collection: {},
    isCollapsed: { type: Boolean }
  },
  setup(a22) {
    const { scrollToOperation: m38 } = l3(), p19 = async (e11) => {
      m38(e11.id, true);
    }, d18 = computed(
      () => {
        var e11, o4;
        return ((e11 = a22.transformedOperation) == null ? void 0 : e11.name) || ((o4 = a22.transformedOperation) == null ? void 0 : o4.path);
      }
    );
    return (e11, o4) => (openBlock(), createElementBlock("li", {
      key: e11.transformedOperation.id,
      class: "contents"
    }, [
      e11.isCollapsed ? (openBlock(), createBlock(unref(e5), {
        key: 0,
        class: "sr-only",
        level: 3
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(d18.value) + " (Hidden) ", 1)
        ]),
        _: 1
      })) : createCommentVNode("", true),
      createBaseVNode("a", {
        class: "endpoint",
        href: `#${e11.transformedOperation.id}`,
        onClick: o4[0] || (o4[0] = withModifiers((I10) => p19(e11.transformedOperation), ["prevent"]))
      }, [
        createBaseVNode("div", N3, [
          e11.transformedOperation.isWebhook ? (openBlock(), createBlock(unref(_), {
            key: 0,
            style: normalizeStyle({
              color: unref(getHttpMethodInfo)(e11.transformedOperation.httpVerb).colorVar
            })
          }, null, 8, ["style"])) : createCommentVNode("", true),
          createVNode(unref(C4), {
            class: "endpoint-method min-w-0",
            method: e11.transformedOperation.httpVerb
          }, null, 8, ["method"])
        ]),
        createBaseVNode("span", {
          class: normalizeClass(["endpoint-path", {
            deprecated: unref(b4)(
              e11.transformedOperation.information
            )
          }])
        }, toDisplayString(e11.transformedOperation.path), 3)
      ], 8, H2)
    ]));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/Tag/OperationsListItem.vue.js
var m13 = s5(W3, [["__scopeId", "data-v-fd24f64e"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Card/Card.vue.js
var n4 = {};
var s10 = { class: "scalar-card" };
function a7(e11, d18) {
  return openBlock(), createElementBlock("div", s10, [
    renderSlot(e11.$slots, "default", {}, void 0, true)
  ]);
}
var i7 = s5(n4, [["render", a7], ["__scopeId", "data-v-b5be456e"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Card/CardContent.vue2.js
var d8 = defineComponent({
  __name: "CardContent",
  props: {
    muted: { type: Boolean },
    contrast: { type: Boolean },
    frameless: { type: Boolean },
    transparent: { type: Boolean },
    borderless: { type: Boolean }
  },
  setup(n7) {
    return (e11, l11) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["scalar-card-content", {
        "scalar-card--muted": e11.muted,
        "scalar-card--contrast": e11.contrast,
        "scalar-card--frameless": e11.frameless,
        "scalar-card--transparent": e11.transparent,
        "scalar-card--borderless": e11.borderless
      }])
    }, [
      renderSlot(e11.$slots, "default", {}, void 0, true)
    ], 2));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Card/CardContent.vue.js
var d9 = s5(d8, [["__scopeId", "data-v-dd83e46e"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Card/CardHeader.vue2.js
var i8 = { class: "scalar-card-header-slots" };
var h4 = { class: "scalar-card-header-slot scalar-card-header-title" };
var m14 = { class: "scalar-card-header-slot scalar-card-header-actions" };
var B3 = defineComponent({
  __name: "CardHeader",
  props: {
    muted: { type: Boolean },
    contrast: { type: Boolean },
    frameless: { type: Boolean },
    transparent: { type: Boolean },
    borderless: { type: Boolean }
  },
  setup(t8) {
    const o4 = t8;
    return (a22, _13) => (openBlock(), createBlock(d9, mergeProps(o4, { class: "scalar-card-header" }), {
      default: withCtx(() => [
        createBaseVNode("div", i8, [
          createBaseVNode("div", h4, [
            renderSlot(a22.$slots, "default", {}, void 0, true)
          ]),
          createBaseVNode("div", m14, [
            renderSlot(a22.$slots, "actions", {}, void 0, true)
          ])
        ])
      ]),
      _: 3
    }, 16));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Card/CardHeader.vue.js
var e6 = s5(B3, [["__scopeId", "data-v-838dc259"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/Tag/OperationsList.vue2.js
var h5 = ["aria-label"];
var F2 = defineComponent({
  __name: "OperationsList",
  props: {
    tag: {},
    collection: {},
    isCollapsed: { type: Boolean }
  },
  setup(c8) {
    const l11 = c8, n7 = computed(() => l11.tag["x-displayName"] ?? l11.tag.name);
    return (e11, s19) => {
      var i15;
      return ((i15 = e11.tag.operations) == null ? void 0 : i15.length) > 0 ? (openBlock(), createBlock(unref(i7), {
        key: 0,
        class: "scalar-card-sticky"
      }, {
        default: withCtx(() => [
          createVNode(unref(e6), { muted: "" }, {
            default: withCtx(() => [
              createVNode(f7, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(n7.value), 1)
                ]),
                _: 1
              }),
              s19[0] || (s19[0] = createTextVNode(" Operations "))
            ]),
            _: 1
          }),
          createVNode(unref(d9), {
            class: "custom-scroll",
            muted: ""
          }, {
            default: withCtx(() => [
              createBaseVNode("ul", {
                "aria-label": `${n7.value} endpoints`,
                class: "endpoints"
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(e11.tag.operations, (d18) => (openBlock(), createBlock(m13, {
                  key: d18.id,
                  collection: e11.collection,
                  isCollapsed: e11.isCollapsed,
                  transformedOperation: d18
                }, null, 8, ["collection", "isCollapsed", "transformedOperation"]))), 128))
              ], 8, h5)
            ]),
            _: 1
          })
        ]),
        _: 1
      })) : createCommentVNode("", true);
    };
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/Tag/OperationsList.vue.js
var a8 = s5(F2, [["__scopeId", "data-v-b3881ce4"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/IntersectionObserver.vue.js
var x9 = defineComponent({
  __name: "IntersectionObserver",
  props: {
    id: {},
    is: {}
  },
  emits: ["intersecting"],
  setup(o4, { emit: r8 }) {
    const i15 = o4, s19 = r8, n7 = ref(), c8 = (e11) => {
      const t8 = e11.offsetHeight;
      return `${t8 / 2}px 0px ${t8 / 2}px 0px`;
    }, a22 = (e11) => e11.offsetHeight < window.innerHeight ? 0.8 : 0.5;
    return onMounted(() => {
      if (n7.value) {
        const e11 = {
          rootMargin: c8(n7.value),
          threshold: a22(n7.value)
        };
        useIntersectionObserver(
          n7,
          ([{ isIntersecting: t8 }]) => {
            t8 && i15.id && s19("intersecting");
          },
          e11
        );
      }
    }), (e11, t8) => (openBlock(), createBlock(resolveDynamicComponent(e11.is ?? "div"), {
      id: e11.id,
      ref_key: "intersectionObserverRef",
      ref: n7
    }, {
      default: withCtx(() => [
        renderSlot(e11.$slots, "default")
      ]),
      _: 3
    }, 8, ["id"]));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Section/Section.vue2.js
var v6 = defineComponent({
  __name: "Section",
  props: {
    id: {},
    label: {}
  },
  setup(i15) {
    const e11 = i15, { getSectionId: r8, isIntersectionEnabled: n7, replaceUrlState: s19 } = T2(), { setCollapsedSidebarItem: a22 } = l3();
    function l11() {
      var t8, o4;
      !e11.label || !n7.value || (s19(e11.id ?? ""), ((t8 = e11.id) != null && t8.startsWith("model") || (o4 = e11.id) != null && o4.startsWith("webhook")) && a22(r8(e11.id), true));
    }
    return (t8, o4) => (openBlock(), createBlock(x9, {
      is: "section",
      id: t8.id,
      class: "section",
      onIntersecting: l11
    }, {
      default: withCtx(() => [
        renderSlot(t8.$slots, "default", {}, void 0, true)
      ]),
      _: 3
    }, 8, ["id"]));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Section/Section.vue.js
var p11 = s5(v6, [["__scopeId", "data-v-393971a5"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/LoadingSkeleton.vue2.js
var m15 = defineComponent({
  __name: "LoadingSkeleton",
  props: {
    lines: { default: 1 }
  },
  setup(i15) {
    return (e11, p19) => (openBlock(true), createElementBlock(Fragment, null, renderList([...Array(e11.lines).keys()], (r8) => (openBlock(), createElementBlock("div", {
      key: r8,
      class: normalizeClass(["loading", { "single-line": e11.lines === 1 }])
    }, null, 2))), 128));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/LoadingSkeleton.vue.js
var e7 = s5(m15, [["__scopeId", "data-v-c90b2c46"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Section/SectionHeader.vue2.js
var l8 = { class: "section-header-wrapper" };
var h6 = defineComponent({
  __name: "SectionHeader",
  props: {
    loading: { type: Boolean },
    tight: { type: Boolean }
  },
  setup(d18) {
    return (e11, p19) => (openBlock(), createElementBlock("div", l8, [
      e11.loading ? (openBlock(), createBlock(e7, { key: 0 })) : (openBlock(), createElementBlock("div", {
        key: 1,
        class: normalizeClass(["section-header", { tight: e11.tight }])
      }, [
        renderSlot(e11.$slots, "default", {}, void 0, true)
      ], 2))
    ]));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Section/SectionHeader.vue.js
var a9 = s5(h6, [["__scopeId", "data-v-f8e38d9f"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Anchor/Anchor.vue2.js
var N4 = { class: "label" };
var x10 = ["id"];
var S3 = { class: "anchor" };
var V4 = ["aria-describedby"];
var I2 = defineComponent({
  __name: "Anchor",
  props: {
    id: {}
  },
  setup(n7) {
    const t8 = useId(), { copyToClipboard: r8 } = useClipboard(), { getHashedUrl: a22 } = T2(), d18 = () => {
      r8(a22(n7.id));
    };
    return (i15, e11) => (openBlock(), createElementBlock("span", N4, [
      createBaseVNode("span", {
        id: unref(t8),
        class: "contents"
      }, [
        renderSlot(i15.$slots, "default", {}, void 0, true)
      ], 8, x10),
      createBaseVNode("span", S3, [
        e11[2] || (e11[2] = createBaseVNode("span", null, "​", -1)),
        createBaseVNode("button", {
          "aria-describedby": unref(t8),
          class: "anchor-copy",
          type: "button",
          onClick: withModifiers(d18, ["stop"])
        }, [
          e11[1] || (e11[1] = createBaseVNode("span", { "aria-hidden": "true" }, "#", -1)),
          createVNode(f7, null, {
            default: withCtx(() => e11[0] || (e11[0] = [
              createTextVNode("Copy link")
            ])),
            _: 1
          })
        ], 8, V4)
      ])
    ]));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Anchor/Anchor.vue.js
var m16 = s5(I2, [["__scopeId", "data-v-2f3e206c"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Section/SectionContent.vue2.js
var s11 = { class: "section-content" };
var f8 = defineComponent({
  __name: "SectionContent",
  props: {
    loading: { type: Boolean, default: false }
  },
  setup(c8) {
    return (e11, i15) => (openBlock(), createElementBlock("div", s11, [
      e11.loading ? (openBlock(), createBlock(e7, {
        key: 1,
        lines: 8
      })) : renderSlot(e11.$slots, "default", { key: 0 }, void 0, true)
    ]));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Section/SectionContent.vue.js
var p12 = s5(f8, [["__scopeId", "data-v-9735459e"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Section/SectionColumns.vue.js
var r5 = {};
var s12 = { class: "section-columns" };
function d10(e11, _13) {
  return openBlock(), createElementBlock("div", s12, [
    renderSlot(e11.$slots, "default", {}, void 0, true)
  ]);
}
var a10 = s5(r5, [["render", d10], ["__scopeId", "data-v-8b9602bf"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Section/SectionColumn.vue.js
var r6 = {};
var s13 = { class: "section-column" };
function d11(e11, _13) {
  return openBlock(), createElementBlock("div", s13, [
    renderSlot(e11.$slots, "default", {}, void 0, true)
  ]);
}
var f9 = s5(r6, [["render", d11], ["__scopeId", "data-v-699c28e3"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/SpecificationExtension/SpecificationExtension.vue.js
var N5 = {
  key: 0,
  class: "text-base"
};
var O4 = defineComponent({
  __name: "SpecificationExtension",
  props: {
    value: {}
  },
  setup(i15) {
    const { getSpecificationExtensions: f15 } = i6();
    function d18(t8) {
      return Object.keys(t8 ?? {}).filter(
        (n7) => n7.startsWith("x-")
      );
    }
    function v11(t8) {
      return t8.flatMap((n7) => f15(n7)).filter((n7) => n7.component);
    }
    const g11 = computed(() => d18(i15.value)), a22 = computed(
      () => v11(g11.value)
    );
    return (t8, n7) => typeof t8.value == "object" && a22.value.length ? (openBlock(), createElementBlock("div", N5, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(a22.value, (e11) => (openBlock(), createBlock(unref(E), null, {
        default: withCtx(() => {
          var u11, m38;
          return [
            e11.renderer ? (openBlock(), createBlock(resolveDynamicComponent(e11.renderer), mergeProps({
              key: 0,
              ref_for: true
            }, {
              [e11.name]: (u11 = t8.value) == null ? void 0 : u11[e11.name],
              component: e11.component
            }), null, 16)) : (openBlock(), createBlock(resolveDynamicComponent(e11.component), mergeProps({
              key: 1,
              ref_for: true
            }, { [e11.name]: (m38 = t8.value) == null ? void 0 : m38[e11.name] }), null, 16))
          ];
        }),
        _: 2
      }, 1024))), 256))
    ])) : createCommentVNode("", true);
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/Tag/Tag.vue.js
var P6 = defineComponent({
  __name: "Tag",
  props: {
    id: {},
    tag: {},
    collection: {},
    headerId: {},
    isCollapsed: { type: Boolean }
  },
  setup(f15) {
    const l11 = f15, { getTagId: c8 } = T2(), i15 = f4(), r8 = computed(() => l11.id || c8(l11.tag) || ""), g11 = computed(() => l11.tag["x-displayName"] ?? l11.tag.name);
    return (a22, n7) => (openBlock(), createBlock(unref(p11), {
      id: r8.value,
      label: a22.tag.name.toUpperCase(),
      role: "none"
    }, {
      default: withCtx(() => [
        withDirectives(createVNode(unref(a9), null, {
          default: withCtx(() => [
            createVNode(unref(m16), { id: r8.value }, {
              default: withCtx(() => [
                createVNode(unref(e5), {
                  id: a22.headerId,
                  level: 2
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(g11.value) + " ", 1),
                    a22.isCollapsed ? (openBlock(), createBlock(f7, { key: 0 }, {
                      default: withCtx(() => n7[0] || (n7[0] = [
                        createTextVNode(" (Collapsed)")
                      ])),
                      _: 1
                    })) : createCommentVNode("", true)
                  ]),
                  _: 1
                }, 8, ["id"])
              ]),
              _: 1
            }, 8, ["id"])
          ]),
          _: 1
        }, 512), [
          [vShow, !unref(i15).isLoading]
        ]),
        createVNode(unref(p12), {
          loading: unref(i15).isLoading
        }, {
          default: withCtx(() => [
            createVNode(unref(a10), null, {
              default: withCtx(() => [
                createVNode(unref(f9), null, {
                  default: withCtx(() => [
                    createVNode(unref(_2), {
                      clamp: a22.isCollapsed ? "7" : false,
                      value: a22.tag.description,
                      withImages: ""
                    }, null, 8, ["clamp", "value"])
                  ]),
                  _: 1
                }),
                createVNode(unref(f9), null, {
                  default: withCtx(() => [
                    createVNode(a8, {
                      collection: a22.collection,
                      tag: a22.tag
                    }, null, 8, ["collection", "tag"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["loading"]),
        createVNode(unref(O4), { value: a22.tag }, null, 8, ["value"])
      ]),
      _: 1
    }, 8, ["id", "label"]));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/ShowMoreButton.vue2.js
var b6 = defineComponent({
  __name: "ShowMoreButton",
  props: {
    id: {}
  },
  setup(t8) {
    const { setCollapsedSidebarItem: n7 } = l3(), r8 = f4(), c8 = () => {
      var e11, o4;
      n7(t8.id, true), (o4 = (e11 = r8.value).onShowMore) == null || o4.call(e11, t8.id);
    };
    return (e11, o4) => (openBlock(), createElementBlock("button", {
      class: "show-more",
      type: "button",
      onClick: c8
    }, [
      o4[0] || (o4[0] = createTextVNode(" Show More ")),
      createVNode(unref(m), {
        class: "show-more-icon",
        icon: "ChevronDown"
      })
    ]));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/ShowMoreButton.vue.js
var _5 = s5(b6, [["__scopeId", "data-v-c46d29d9"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Section/SectionContainer.vue.js
var c5 = {};
var s14 = { class: "section-container" };
function a11(e11, i15) {
  return openBlock(), createElementBlock("div", s14, [
    renderSlot(e11.$slots, "default", {}, void 0, true)
  ]);
}
var l9 = s5(c5, [["render", a11], ["__scopeId", "data-v-3afcb4e7"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/Tag/TagSection.vue2.js
var V5 = defineComponent({
  __name: "TagSection",
  props: {
    id: {},
    tag: {},
    collection: {},
    spec: {}
  },
  setup(m38) {
    const o4 = m38, p19 = ref(), s19 = ref(), c8 = useId(), { collapsedSidebarItems: d18 } = l3(), { getTagId: g11 } = T2(), l11 = computed(() => o4.id || g11(o4.tag) || ""), u11 = computed(
      () => {
        var e11, t8;
        return ((e11 = o4.spec.tags) == null ? void 0 : e11.length) && ((t8 = o4.spec.tags) == null ? void 0 : t8.length) > 1;
      }
    ), h10 = computed(
      () => {
        var e11, t8;
        return u11.value || ((e11 = o4.tag) == null ? void 0 : e11.name) !== "default" || ((t8 = o4.tag) == null ? void 0 : t8.description) !== "";
      }
    );
    async function k12() {
      var e11, t8;
      await nextTick(), (t8 = (e11 = s19.value) == null ? void 0 : e11.querySelector("button")) == null || t8.focus();
    }
    return (e11, t8) => (openBlock(), createBlock(unref(l9), {
      ref_key: "sectionContainerRef",
      ref: p19,
      "aria-labelledby": unref(c8),
      class: "tag-section-container",
      role: "region"
    }, {
      default: withCtx(() => [
        h10.value ? (openBlock(), createBlock(P6, {
          key: 0,
          id: e11.id,
          collection: e11.collection,
          headerId: unref(c8),
          isCollapsed: !unref(d18)[l11.value],
          tag: e11.tag
        }, null, 8, ["id", "collection", "headerId", "isCollapsed", "tag"])) : createCommentVNode("", true),
        !unref(d18)[l11.value] && u11.value ? (openBlock(), createBlock(_5, {
          key: 1,
          id: l11.value,
          "aria-label": `Show all ${e11.tag["x-displayName"] ?? e11.tag.name} endpoints`,
          onClick: k12
        }, null, 8, ["id", "aria-label"])) : (openBlock(), createElementBlock("div", {
          key: 2,
          ref_key: "contentsRef",
          ref: s19,
          class: "contents"
        }, [
          renderSlot(e11.$slots, "default", {}, void 0, true)
        ], 512))
      ]),
      _: 3
    }, 8, ["aria-labelledby"]));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/Tag/TagSection.vue.js
var f10 = s5(V5, [["__scopeId", "data-v-e5bbfee4"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/blocks/constants.js
var t4 = {
  EMPTY_PATH: "Path cannot be empty. Please provide a path to the operation you want to display."
};

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/blocks/helpers/getPointer.js
function m17(o4) {
  o4.unshift("#");
  const r8 = o4.map((t8) => escapeJsonPointer(t8.trim())).filter(Boolean).join("/");
  if (r8 === "#")
    throw new Error(t4.EMPTY_PATH);
  return r8;
}

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/blocks/hooks/useBlockProps.js
function h7({ store: t8, location: o4, collection: n7 }) {
  return {
    operation: computed(() => {
      if (!(t8 != null && t8.collections) || !t8.requests)
        return;
      const s19 = Object.values(t8.requests).filter(
        (e11) => n7.requests.includes(e11.uid)
      );
      if (!o4.startsWith("#/paths/"))
        throw new Error(
          "Invalid location, try using #/paths/$YOUR_ENDPOINT/$HTTP_METHOD. You can use the getPointer helper to generate a valid location: getPointer(['paths', '/planets/{planetId}', 'get'])"
        );
      return s19.find((e11) => {
        const i15 = unescapeJsonPointer(o4.split("/")[2]), r8 = o4.split("/")[3].toLocaleLowerCase();
        return e11.method === r8 && e11.path === i15;
      });
    })
  };
}

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/hooks/useDiscriminator.js
var V6 = Symbol("discriminator-context");
var w3 = Symbol("example-context");
function j3(r8) {
  var e11;
  if ((e11 = r8 == null ? void 0 : r8.discriminator) != null && e11.mapping)
    return r8.discriminator.mapping;
}
function E6(r8) {
  var e11;
  return (e11 = r8 == null ? void 0 : r8.discriminator) == null ? void 0 : e11.propertyName;
}
function D2(r8) {
  return (r8 == null ? void 0 : r8.discriminator) !== void 0;
}
function I3(r8, e11) {
  var o4;
  if (!r8 || !e11 || r8.type !== "object" || !r8.properties)
    return null;
  for (const [p19, i15] of Object.entries(e11))
    if (typeof i15 == "object" && i15 !== null && "discriminator" in i15 && ((o4 = i15.discriminator) != null && o4.propertyName)) {
      const n7 = i15.discriminator.propertyName;
      if (r8.properties[n7])
        return p19;
    }
  return null;
}
function x11(r8) {
  if (r8)
    return r8.type === "array" && r8.items && typeof r8.items == "object" && !("$ref" in r8.items) ? r8.items : r8;
}
function T5(r8, e11, o4) {
  var l11;
  if (!((l11 = r8.discriminator) != null && l11.mapping) || !e11)
    return;
  const p19 = r8.discriminator.mapping[e11];
  if (!p19)
    return;
  const i15 = p19.split("/").pop();
  if (!i15 || !o4[i15])
    return;
  const n7 = o4[i15];
  if (n7.allOf) {
    const d18 = {
      type: n7.type || "object",
      properties: {},
      required: [],
      ...r8.title ? { title: r8.title } : {},
      ...r8.name ? { name: r8.name } : {}
    }, y11 = {}, a22 = /* @__PURE__ */ new Set();
    r8.required && r8.required.forEach((u11) => a22.add(u11));
    for (const u11 of n7.allOf)
      if ("$ref" in u11) {
        const s19 = u11.$ref.split("/").pop();
        if (s19 && o4[s19]) {
          const t8 = o4[s19];
          t8.properties && Object.assign(y11, t8.properties), t8.required && t8.required.forEach((f15) => a22.add(f15));
        }
      } else "properties" in u11 && (Object.assign(y11, u11.properties), "required" in u11 && Array.isArray(u11.required) && u11.required.forEach((s19) => a22.add(s19)));
    return d18.properties = y11, d18.required = Array.from(a22), d18;
  }
  return {
    type: n7.type || r8.type,
    properties: {
      ...r8.properties || {},
      ...n7.properties || {}
    },
    required: [...r8.required || [], ...n7.required || []],
    // Preserve discriminator
    discriminator: r8.discriminator,
    // Preserve title and name from base schema
    ...r8.title ? { title: r8.title } : {},
    ...r8.name ? { name: r8.name } : {}
  };
}
function X2({ schema: r8, schemas: e11, onSchemaChange: o4 }) {
  const p19 = computed(() => x11(r8)), i15 = computed(() => j3(p19.value)), n7 = computed(() => i15.value && Object.keys(i15.value)[0] || ""), l11 = ref(n7.value);
  watch(
    n7,
    (t8) => {
      t8 && !l11.value && (l11.value = t8);
    },
    { immediate: true }
  );
  const d18 = computed(() => E6(p19.value)), y11 = computed(() => D2(p19.value)), a22 = computed(() => {
    if (!p19.value || !e11 || !l11.value)
      return r8;
    const t8 = T5(
      p19.value,
      l11.value,
      e11
    );
    if (!t8)
      return r8;
    const f15 = (r8 == null ? void 0 : r8.type) === "array" ? {
      type: "array",
      items: t8,
      ...r8.title ? { title: r8.title } : {},
      ...r8.name ? { name: r8.name } : {}
    } : t8;
    return o4 == null || o4(f15), f15;
  }), u11 = (t8) => {
    if ("default" in t8)
      return t8.default;
    if ("example" in t8)
      return t8.example;
    switch (t8.type) {
      case "string":
        return "";
      case "integer":
      case "number":
        return t8.nullable ? null : 0;
      case "boolean":
        return false;
      case "array":
        return [];
      case "object":
        return {};
      default:
        return null;
    }
  };
  return {
    selectedType: l11,
    discriminatorMapping: i15,
    defaultType: n7,
    discriminatorPropertyName: d18,
    hasDiscriminator: y11,
    mergedSchema: a22,
    generateExampleValue: (t8 = false) => {
      if (!a22.value)
        return t8 ? [] : {};
      const f15 = {}, v11 = a22.value.type === "array" ? a22.value.items : a22.value;
      return "properties" in v11 && v11.properties && Object.entries(v11.properties).forEach(([g11, N7]) => {
        const m38 = N7;
        m38 !== null && (f15[g11] = u11(m38));
      }), d18.value && l11.value && (f15[d18.value] = l11.value), JSON.parse(JSON.stringify(t8 ? [f15] : f15));
    }
  };
}

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/hooks/useOperationDiscriminator.js
function x12(e11) {
  return e11 ? !!(e11.discriminator || e11.type === "array" && e11.items && typeof e11.items == "object" && "discriminator" in e11.items) : false;
}
function B4(e11, y11) {
  var s19, c8, m38, u11;
  const n7 = (u11 = (m38 = (c8 = (s19 = e11.information) == null ? void 0 : s19.requestBody) == null ? void 0 : c8.content) == null ? void 0 : m38["application/json"]) == null ? void 0 : u11.schema, a22 = computed(() => x12(n7)), g11 = a22.value ? X2({
    schema: n7,
    schemas: y11,
    onSchemaChange: (r8) => {
      var l11, p19, d18;
      (d18 = (p19 = (l11 = e11.information) == null ? void 0 : l11.requestBody) == null ? void 0 : p19.content) != null && d18["application/json"] && (e11.information.requestBody.content["application/json"].schema = r8);
    }
  }) : {
    selectedType: ref(""),
    discriminatorMapping: computed(() => ({})),
    discriminatorPropertyName: computed(() => ""),
    hasDiscriminator: computed(() => false),
    mergedSchema: computed(() => n7),
    generateExampleValue: () => ({})
  }, {
    selectedType: o4,
    discriminatorMapping: v11,
    discriminatorPropertyName: D7,
    hasDiscriminator: S9,
    mergedSchema: T9,
    generateExampleValue: C11
  } = g11;
  if (a22.value) {
    const r8 = computed(() => ({
      selectedType: o4.value || void 0,
      discriminatorMapping: v11.value || {},
      discriminatorPropertyName: D7.value || "",
      hasDiscriminator: S9.value,
      mergedSchema: T9.value
    }));
    provide(V6, r8), provide(w3, {
      generateExampleValue: C11
    });
  } else
    provide(
      V6,
      computed(() => null)
    ), provide(w3, {
      generateExampleValue: () => ({})
    });
  return {
    hasSchemaDiscriminator: a22,
    handleDiscriminatorChange: (r8) => {
      a22.value && (o4.value = r8);
    }
  };
}

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/OperationPath.vue2.js
var k8 = { key: 0 };
var B5 = defineComponent({
  __name: "OperationPath",
  props: {
    path: {},
    deprecated: { type: Boolean }
  },
  setup(s19) {
    const p19 = s19, c8 = (a22) => a22.startsWith("{") && a22.endsWith("}"), i15 = computed(() => p19.path.split(/({[^}]+})/));
    return (a22, y11) => (openBlock(), createElementBlock("span", {
      class: normalizeClass(["operation-path", { deprecated: a22.deprecated }])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(i15.value, (n7, l11) => (openBlock(), createElementBlock(Fragment, { key: l11 }, [
        c8(n7) ? (openBlock(), createElementBlock("em", k8, toDisplayString(n7), 1)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createTextVNode(toDisplayString(n7), 1)
        ], 64))
      ], 64))), 128))
    ], 2));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/OperationPath.vue.js
var c6 = s5(B5, [["__scopeId", "data-v-ec6c8861"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/Operation/components/ContentTypeSelect.vue.js
var O5 = defineComponent({
  __name: "ContentTypeSelect",
  props: {
    requestBody: {},
    defaultValue: {}
  },
  emits: ["selectContentType"],
  setup(y11, { emit: x14 }) {
    const t8 = y11, C11 = x14, T9 = (e11) => {
      e11 != null && e11.id && C11("selectContentType", { contentType: e11.id });
    }, a22 = computed(() => {
      var e11;
      return (e11 = t8.requestBody) != null && e11.content ? Object.keys(t8.requestBody.content) : [];
    }), l11 = ref(
      t8.defaultValue || a22.value[0]
    ), u11 = computed({
      get: () => d18.value.find((e11) => e11.id === l11.value),
      set: (e11) => {
        e11 && (l11.value = e11.id);
      }
    }), d18 = computed(() => a22.value.map((e11) => ({
      id: e11,
      label: e11
    }))), i15 = cva({
      base: "font-normal text-c-2 bg-b-2 py-0.75 flex cursor-pointer items-center gap-1 rounded-full text-xs",
      variants: {
        dropdown: {
          true: "border hover:text-c-1 pl-2 pr-1.5",
          false: "px-2"
        }
      }
    });
    return (e11, o4) => t8 != null && t8.requestBody && a22.value.length > 1 ? (openBlock(), createBlock(unref(P), {
      key: 0,
      modelValue: u11.value,
      "onUpdate:modelValue": [
        o4[0] || (o4[0] = (b9) => u11.value = b9),
        T9
      ],
      class: "font-normal",
      options: d18.value,
      placement: "bottom-end"
    }, {
      default: withCtx(() => [
        createVNode(unref($), {
          class: normalizeClass(["h-fit", unref(i15)({ dropdown: true })]),
          variant: "ghost"
        }, {
          default: withCtx(() => [
            createVNode(f7, null, {
              default: withCtx(() => o4[1] || (o4[1] = [
                createTextVNode("Selected Content Type:")
              ])),
              _: 1
            }),
            createBaseVNode("span", null, toDisplayString(l11.value), 1),
            createVNode(unref(m), {
              class: "ui-open:rotate-180 ml-auto",
              icon: "ChevronDown",
              size: "sm",
              thickness: "2"
            })
          ]),
          _: 1
        }, 8, ["class"])
      ]),
      _: 1
    }, 8, ["modelValue", "options"])) : (openBlock(), createElementBlock("div", {
      key: 1,
      class: normalizeClass(unref(i15)({ dropdown: false })),
      tabindex: "0"
    }, [
      createBaseVNode("span", null, toDisplayString(l11.value), 1)
    ], 2));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/merge-all-of-schemas.js
function o2(f15, e11 = 0) {
  return e11 >= 20 || !Array.isArray(f15) || f15.length === 0 ? {} : f15.reduce((p19, r8) => {
    if (!r8 || typeof r8 != "object")
      return p19;
    if (r8.allOf) {
      const i15 = o2(r8.allOf, e11 + 1);
      return o2([p19, i15], e11 + 1);
    }
    const t8 = typeof p19 == "object" ? { ...p19 } : {};
    if (r8.properties && (t8.properties = n5(t8.properties || {}, r8.properties, e11 + 1)), r8.items) {
      if (r8.type === "array")
        t8.items = O6(t8.items || {}, r8.items, e11 + 1);
      else if (r8.type === "object" && r8.items.allOf) {
        const i15 = o2(r8.items.allOf, e11 + 1);
        t8.properties = n5(
          t8.properties || {},
          i15.properties || {},
          e11 + 1
        );
      }
    }
    return m18(t8, r8, e11 + 1);
  }, {});
}
function n5(f15, e11, p19 = 0) {
  if (p19 >= 20)
    return f15;
  const r8 = typeof f15 == "object" ? { ...f15 } : {};
  return Object.entries(e11).forEach(([t8, i15]) => {
    var s19;
    if (!i15 || typeof i15 != "object") {
      r8[t8] = i15;
      return;
    }
    if (!r8[t8]) {
      i15.type === "array" && ((s19 = i15.items) != null && s19.allOf) ? r8[t8] = {
        ...i15,
        items: o2(i15.items.allOf, p19 + 1)
      } : i15.allOf ? r8[t8] = o2(i15.allOf, p19 + 1) : r8[t8] = i15;
      return;
    }
    if (i15.allOf)
      r8[t8] = o2([r8[t8], ...i15.allOf], p19 + 1);
    else if (i15.type === "array" && i15.items)
      r8[t8] = {
        ...r8[t8],
        type: "array",
        items: O6(r8[t8].items || {}, i15.items, p19 + 1)
      };
    else {
      const l11 = r8[t8].properties || i15.properties ? n5(r8[t8].properties || {}, i15.properties || {}, p19 + 1) : void 0;
      r8[t8] = {
        ...r8[t8],
        ...i15
      }, l11 && (r8[t8].properties = l11);
    }
  }), r8;
}
function O6(f15, e11, p19 = 0) {
  if (p19 >= 20)
    return f15;
  if (f15.allOf || e11.allOf) {
    const t8 = [...f15.allOf || [f15], ...e11.allOf || [e11]];
    return o2(t8, p19 + 1);
  }
  const r8 = {
    ...f15,
    ...e11
  };
  return (r8.properties || e11.properties) && (r8.properties = n5(r8.properties || {}, e11.properties || {}, p19 + 1)), r8;
}
var m18 = (f15, e11, p19 = 0) => {
  if (p19 >= 20)
    return f15;
  const r8 = typeof f15 == "object" ? { ...f15 } : {};
  return e11.required && Array.isArray(e11.required) && (r8.required = [...f15.required || [], ...e11.required]), e11.type && !f15.type && (r8.type = e11.type), e11.title && !f15.title && (r8.title = e11.title), e11.name && !f15.name && (r8.name = e11.name), e11.description && !f15.description && (r8.description = e11.description), ["oneOf", "anyOf"].forEach((t8) => {
    const i15 = e11[t8];
    i15 && i15.forEach((s19) => {
      s19.properties && (r8.properties = n5(r8.properties || {}, s19.properties, p19 + 1));
    });
  }), r8;
};

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/optimizeValueForDisplay.js
var m19 = ["oneOf", "anyOf", "allOf", "not"];
function O7(i15) {
  var p19;
  if (!i15 || typeof i15 != "object")
    return i15;
  let r8 = { ...i15 };
  const o4 = m19.find((t8) => r8 == null ? void 0 : r8[t8]);
  if (!o4 || o4 === "not")
    return r8;
  const c8 = r8 == null ? void 0 : r8[o4];
  if (!Array.isArray(c8))
    return r8;
  const l11 = c8.map((t8) => {
    if (t8.allOf && Array.isArray(t8.allOf)) {
      const s19 = o2(t8.allOf);
      return Object.keys(t8).forEach((f15) => {
        !m19.includes(f15) && !(f15 in s19) && (s19[f15] = t8[f15]);
      }), s19;
    }
    return t8;
  });
  l11.some((t8) => t8.type === "null") && (r8.nullable = true);
  const n7 = l11.filter((t8) => t8.type !== "null");
  return n7.length === 1 && (r8 != null && r8[o4]) ? (r8 = { ...r8, ...n7[0] }, r8 == null || delete r8[o4], r8) : (Array.isArray(r8 == null ? void 0 : r8[o4]) && ((p19 = r8 == null ? void 0 : r8[o4]) == null ? void 0 : p19.length) > 1 && (r8[o4] = n7), r8);
}

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaHeading.vue2.js
var s15 = {
  key: 0,
  class: "schema-type"
};
var u6 = ["title"];
var v7 = defineComponent({
  __name: "SchemaHeading",
  props: {
    value: { type: [Object, Boolean] },
    name: {}
  },
  setup(m38) {
    return (e11, i15) => typeof e11.value == "object" ? (openBlock(), createElementBlock("span", s15, [
      createBaseVNode("span", {
        class: "schema-type-icon",
        title: typeof e11.value.type == "string" ? e11.value.type : Array.isArray(e11.value.type) ? e11.value.type.join(" | ") : "unkown type"
      }, [
        e11.value.type === "object" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createTextVNode(" {} ")
        ], 64)) : createCommentVNode("", true),
        e11.value.type === "array" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createTextVNode(" [] ")
        ], 64)) : createCommentVNode("", true),
        e11.value.enum ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
          createTextVNode(" enum ")
        ], 64)) : createCommentVNode("", true)
      ], 8, u6),
      e11.name ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createTextVNode(toDisplayString(e11.name), 1)
      ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        createTextVNode(toDisplayString(e11.value.type), 1)
      ], 64))
    ])) : createCommentVNode("", true);
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaHeading.vue.js
var r7 = s5(v7, [["__scopeId", "data-v-eec32394"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/Schema/Schema.vue2.js
var ie2 = {
  key: 0,
  class: "schema-card-description"
};
var le2 = {
  key: 0,
  class: "schema-properties"
};
var ue = defineComponent({
  __name: "Schema",
  props: {
    value: { type: [Object, Boolean] },
    level: { default: 0 },
    name: {},
    compact: { type: Boolean },
    noncollapsible: { type: Boolean, default: false },
    hideHeading: { type: Boolean },
    additionalProperties: { type: Boolean },
    hideModelNames: { type: Boolean, default: false },
    schemas: {},
    discriminator: {},
    discriminatorMapping: {},
    discriminatorPropertyName: {},
    hasDiscriminator: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(X7, { emit: G7 }) {
    const o4 = X7, J5 = G7, r8 = inject(V6, null), y11 = computed(
      () => {
        var e11;
        return ((e11 = r8 == null ? void 0 : r8.value) == null ? void 0 : e11.discriminatorMapping) || o4.discriminatorMapping || {};
      }
    ), c8 = computed(
      () => {
        var e11;
        return ((e11 = r8 == null ? void 0 : r8.value) == null ? void 0 : e11.discriminatorPropertyName) || o4.discriminatorPropertyName || "";
      }
    ), D7 = computed(
      () => {
        var e11;
        return ((e11 = r8 == null ? void 0 : r8.value) == null ? void 0 : e11.selectedType) || o4.discriminator;
      }
    ), O11 = (e11) => e11 !== null && typeof e11 == "object" && "type" in e11 && e11.type === "object", a22 = computed(() => {
      var s19;
      const e11 = (s19 = r8 == null ? void 0 : r8.value) == null ? void 0 : s19.mergedSchema, S9 = o4.value;
      return e11 && o4.level === 0 && o4.hasDiscriminator && O11(S9) && O11(e11) ? e11 : o4.value;
    }), j8 = computed(() => !(o4.noncollapsible || o4.level === 0)), K6 = computed(() => {
      var e11;
      return !(!((e11 = a22.value) != null && e11.description) || typeof a22.value.description != "string" || a22.value.allOf || a22.value.oneOf || a22.value.anyOf || a22.value.enum || o4.level === 0);
    }), B12 = (e11) => o4.noncollapsible && e11.stopPropagation(), g11 = (e11) => {
      J5("update:modelValue", e11);
    };
    return (e11, S9) => typeof e11.value == "object" && Object.keys(e11.value).length ? (openBlock(), createBlock(unref(N), {
      key: 0,
      defaultOpen: e11.noncollapsible
    }, {
      default: withCtx(({ open: s19 }) => {
        var w9, C11;
        return [
          createBaseVNode("div", {
            class: normalizeClass(["schema-card", [
              `schema-card--level-${e11.level}`,
              { "schema-card--compact": e11.compact, "schema-card--open": s19 },
              { "border-t": e11.additionalProperties && s19 }
            ]])
          }, [
            K6.value ? (openBlock(), createElementBlock("div", ie2, [
              (w9 = a22.value) != null && w9.enum ? createCommentVNode("", true) : (openBlock(), createBlock(unref(_2), {
                key: 0,
                value: (C11 = a22.value) == null ? void 0 : C11.description
              }, null, 8, ["value"]))
            ])) : createCommentVNode("", true),
            createBaseVNode("div", {
              class: normalizeClass(["schema-properties", {
                "schema-properties-open": s19
              }])
            }, [
              e11.additionalProperties ? withDirectives((openBlock(), createElementBlock("div", le2, [
                createVNode(unref(Q), {
                  as: "button",
                  class: "schema-card-title schema-card-title--compact",
                  onClickCapture: B12
                }, {
                  default: withCtx(() => [
                    createVNode(unref(m), {
                      class: "schema-card-title-icon",
                      icon: "Add",
                      size: "sm"
                    }),
                    S9[0] || (S9[0] = createTextVNode(" Show additional properties ")),
                    e11.name ? (openBlock(), createBlock(f7, { key: 0 }, {
                      default: withCtx(() => [
                        createTextVNode("for " + toDisplayString(e11.name), 1)
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ], 512)), [
                [vShow, !s19]
              ]) : j8.value ? withDirectives((openBlock(), createBlock(unref(Q), {
                key: 1,
                as: e11.noncollapsible ? "div" : "button",
                class: normalizeClass(["schema-card-title", { "schema-card-title--compact": e11.compact }]),
                style: normalizeStyle({
                  top: `calc(var(--refs-header-height) +  calc(var(--schema-title-height) * ${e11.level}))`
                }),
                onClickCapture: B12
              }, {
                default: withCtx(() => {
                  var f15, N7, l11;
                  return [
                    e11.compact ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      createVNode(unref(m), {
                        class: normalizeClass(["schema-card-title-icon", { "schema-card-title-icon--open": s19 }]),
                        icon: "Add",
                        size: "sm"
                      }, null, 8, ["class"]),
                      s19 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                        createTextVNode(" Hide " + toDisplayString(((f15 = e11.value) == null ? void 0 : f15.title) ?? "Child Attributes"), 1)
                      ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                        createTextVNode(" Show " + toDisplayString(((N7 = e11.value) == null ? void 0 : N7.title) ?? "Child Attributes"), 1)
                      ], 64)),
                      e11.name ? (openBlock(), createBlock(f7, { key: 2 }, {
                        default: withCtx(() => [
                          createTextVNode("for " + toDisplayString(e11.name), 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                      createVNode(unref(m), {
                        class: normalizeClass(["schema-card-title-icon", { "schema-card-title-icon--open": s19 }]),
                        icon: "Add",
                        size: "sm"
                      }, null, 8, ["class"]),
                      createVNode(r7, {
                        name: ((l11 = e11.value) == null ? void 0 : l11.title) ?? e11.name,
                        value: e11.value
                      }, null, 8, ["name", "value"])
                    ], 64))
                  ];
                }),
                _: 2
              }, 1032, ["as", "class", "style"])), [
                [vShow, !e11.hideHeading && !(e11.noncollapsible && e11.compact)]
              ]) : createCommentVNode("", true),
              createVNode(unref(V), {
                as: "ul",
                static: !j8.value
              }, {
                default: withCtx(() => {
                  var f15, N7;
                  return [
                    a22.value && typeof a22.value == "object" && ("properties" in a22.value || "additionalProperties" in a22.value || "patternProperties" in a22.value) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      a22.value.properties ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(Object.keys(a22.value.properties), (l11) => {
                        var k12, A3, T9, z10, U7, q7;
                        return openBlock(), createBlock(p13, {
                          key: l11,
                          compact: e11.compact,
                          hideHeading: e11.hideHeading,
                          level: e11.level + 1,
                          name: l11,
                          hideModelNames: e11.hideModelNames,
                          required: ((k12 = a22.value.required) == null ? void 0 : k12.includes(l11)) || ((A3 = a22.value.properties[l11]) == null ? void 0 : A3.required) === true,
                          schemas: e11.schemas,
                          resolvedSchema: a22.value.properties[l11],
                          value: {
                            ...a22.value.properties[l11],
                            parent: a22.value,
                            isDiscriminator: l11 === c8.value || ((T9 = a22.value.discriminator) == null ? void 0 : T9.propertyName) === l11
                          },
                          discriminatorMapping: ((z10 = a22.value.discriminator) == null ? void 0 : z10.mapping) || y11.value,
                          discriminatorPropertyName: ((U7 = a22.value.discriminator) == null ? void 0 : U7.propertyName) || c8.value,
                          isDiscriminator: l11 === (((q7 = a22.value.discriminator) == null ? void 0 : q7.propertyName) || c8.value),
                          modelValue: D7.value,
                          "onUpdate:modelValue": g11
                        }, null, 8, ["compact", "hideHeading", "level", "name", "hideModelNames", "required", "schemas", "resolvedSchema", "value", "discriminatorMapping", "discriminatorPropertyName", "isDiscriminator", "modelValue"]);
                      }), 128)) : createCommentVNode("", true),
                      a22.value.patternProperties ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(Object.keys(a22.value.patternProperties), (l11) => {
                        var k12;
                        return openBlock(), createBlock(p13, {
                          key: l11,
                          compact: e11.compact,
                          hideHeading: e11.hideHeading,
                          level: e11.level,
                          name: l11,
                          hideModelNames: e11.hideModelNames,
                          pattern: "",
                          schemas: e11.schemas,
                          value: ((k12 = e11.value.discriminator) == null ? void 0 : k12.propertyName) === l11 ? e11.value : a22.value.patternProperties[l11],
                          discriminatorMapping: y11.value,
                          discriminatorPropertyName: c8.value,
                          "onUpdate:modelValue": g11
                        }, null, 8, ["compact", "hideHeading", "level", "name", "hideModelNames", "schemas", "value", "discriminatorMapping", "discriminatorPropertyName"]);
                      }), 128)) : createCommentVNode("", true),
                      a22.value.additionalProperties ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                        a22.value.additionalProperties === true || Object.keys(a22.value.additionalProperties).length === 0 || !("type" in a22.value.additionalProperties) ? (openBlock(), createBlock(p13, {
                          key: 0,
                          additional: "",
                          compact: e11.compact,
                          hideHeading: e11.hideHeading,
                          hideModelNames: e11.hideModelNames,
                          level: e11.level,
                          noncollapsible: "",
                          schemas: e11.schemas,
                          value: {
                            type: "anything",
                            ...typeof a22.value.additionalProperties == "object" ? a22.value.additionalProperties : {}
                          },
                          discriminatorMapping: y11.value,
                          discriminatorPropertyName: c8.value,
                          "onUpdate:modelValue": g11
                        }, null, 8, ["compact", "hideHeading", "hideModelNames", "level", "schemas", "value", "discriminatorMapping", "discriminatorPropertyName"])) : (openBlock(), createBlock(p13, {
                          key: 1,
                          additional: "",
                          compact: e11.compact,
                          hideHeading: e11.hideHeading,
                          hideModelNames: e11.hideModelNames,
                          level: e11.level,
                          noncollapsible: "",
                          schemas: e11.schemas,
                          value: ((f15 = e11.value.discriminator) == null ? void 0 : f15.propertyName) === e11.name ? e11.value : a22.value.additionalProperties,
                          discriminatorMapping: y11.value,
                          discriminatorPropertyName: c8.value,
                          "onUpdate:modelValue": g11
                        }, null, 8, ["compact", "hideHeading", "hideModelNames", "level", "schemas", "value", "discriminatorMapping", "discriminatorPropertyName"]))
                      ], 64)) : createCommentVNode("", true)
                    ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                      a22.value ? (openBlock(), createBlock(p13, {
                        key: 0,
                        compact: e11.compact,
                        hideHeading: e11.hideHeading,
                        hideModelNames: e11.hideModelNames,
                        level: e11.level,
                        name: a22.value.name,
                        schemas: e11.schemas,
                        value: ((N7 = e11.value.discriminator) == null ? void 0 : N7.propertyName) === e11.name ? e11.value : a22.value,
                        discriminatorMapping: y11.value,
                        discriminatorPropertyName: c8.value,
                        modelValue: D7.value,
                        "onUpdate:modelValue": g11
                      }, null, 8, ["compact", "hideHeading", "hideModelNames", "level", "name", "schemas", "value", "discriminatorMapping", "discriminatorPropertyName", "modelValue"])) : createCommentVNode("", true)
                    ], 64))
                  ];
                }),
                _: 1
              }, 8, ["static"])
            ], 2)
          ], 2)
        ];
      }),
      _: 1
    }, 8, ["defaultOpen"])) : createCommentVNode("", true);
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/Schema/Schema.vue.js
var a12 = s5(ue, [["__scopeId", "data-v-f1fb3dcb"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/schema-name.js
function s16(t8) {
  if (!t8)
    return null;
  if ("title" in t8 && t8.title)
    return t8.title;
  if ("name" in t8 && t8.name)
    return t8.name;
  if ("$ref" in t8) {
    const n7 = t8.$ref.match(/\/([^\/]+)$/);
    if (n7)
      return n7[1];
  }
  if ("type" in t8 && t8.type === "array" && "items" in t8 && t8.items)
    return `Array of ${"type" in t8.items && t8.items.type || "any"}`;
  if ("type" in t8 && t8.type)
    return Array.isArray(t8.type) ? t8.type.join(" | ") : t8.type;
  if (typeof t8 == "object") {
    const r8 = Object.keys(t8);
    if (r8.length > 0)
      return r8[0];
  }
  return null;
}
function b7(t8, r8) {
  var n7, y11;
  if (!t8 || !r8 || typeof r8 != "object" || t8.type !== "array" && t8.type !== "object")
    return null;
  for (const [e11, i15] of Object.entries(r8))
    if (i15.type === t8.type && (t8.type === "array" && ((n7 = i15.items) == null ? void 0 : n7.type) === ((y11 = t8.items) == null ? void 0 : y11.type) || t8.type === "object" && i15.properties && t8.properties && stringify(i15.properties) === stringify(t8.properties)))
      return e11;
  return null;
}
function p14(t8, r8) {
  return t8 === "array" ? `${t8} ${r8}[]` : `${t8} ${r8}`;
}
function u7(t8, r8, n7 = false, y11) {
  var o4;
  if (!(t8 != null && t8.type))
    return null;
  if (n7)
    return t8.type === "array" && ((o4 = t8.items) != null && o4.type) ? `array ${t8.items.type}[]` : null;
  const e11 = s16(t8);
  if (e11 && (t8.title || t8.name))
    return t8.type === "array" ? `array ${e11}[]` : e11;
  const i15 = b7(t8, r8);
  if (i15)
    return t8.type === "array" ? `array ${i15}[]` : i15;
  if (t8.type === "array" && t8.items) {
    if (y11) {
      const m38 = y11(t8.items, r8);
      if (m38)
        return p14(t8.type, m38);
    }
    if (t8.items.title || t8.items.name)
      return p14(t8.type, t8.items.title || t8.items.name);
    const f15 = s16(t8.items);
    return f15 && f15 !== t8.items.type ? p14(t8.type, f15) : t8.items.type ? p14(t8.type, t8.items.type) : p14(t8.type, "object");
  }
  return e11 && e11 !== t8.type ? e11.startsWith("Array of ") ? `array ${e11.replace("Array of ", "")}[]` : e11 : null;
}

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/schema-composition.js
var t5 = ["oneOf", "anyOf", "allOf", "not"];
function i9(o4) {
  return t5.some((n7) => o4[n7] !== void 0);
}

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaComposition.vue.js
var K2 = { class: "property-rule" };
var P7 = {
  class: "composition-selector bg-b-1.5 hover:bg-b-2 flex w-full cursor-pointer items-center gap-1 rounded-t-lg border border-b-0 px-2 py-1.25 pr-3 text-left",
  type: "button"
};
var Q2 = { class: "text-c-2" };
var X3 = { class: "composition-selector-label text-c-1" };
var Y2 = { class: "composition-panel" };
var W4 = {
  key: 0,
  class: "property-description border-x border-t p-2"
};
var te2 = defineComponent({
  __name: "SchemaComposition",
  props: {
    composition: {},
    schemas: {},
    name: {},
    value: {},
    level: {},
    compact: { type: Boolean },
    hideHeading: { type: Boolean }
  },
  setup(s19) {
    const v11 = ref(0), B12 = computed(() => k12.value), C11 = computed(
      () => B12.value.map(
        (e11, o4) => ({
          id: String(o4),
          label: s16(e11) || "Schema"
        })
      )
    ), O11 = computed({
      get: () => C11.value.find(
        (e11) => e11.id === String(v11.value)
      ),
      set: (e11) => v11.value = Number(e11.id)
    }), D7 = computed(() => {
      var i15;
      const e11 = ["oneOf", "anyOf"].includes(s19.composition), o4 = s19.composition === "allOf" && ((i15 = s19.value[s19.composition]) == null ? void 0 : i15.some((l11) => i9(l11)));
      return e11 || o4;
    }), I10 = (e11) => e11.find((o4) => i9(o4)), L6 = (e11) => !e11.allOf || !Array.isArray(e11.allOf) ? false : e11.allOf.some(
      (o4) => o4.oneOf || o4.anyOf || o4.allOf
    ), S9 = (e11) => e11.allOf && Array.isArray(e11.allOf) ? L6(e11) ? e11 : o2(e11.allOf) : e11, k12 = computed(() => {
      const e11 = s19.value[s19.composition], o4 = I10(e11);
      return !o4 || s19.composition !== "allOf" && o4.allOf ? e11.map(S9) : (o4.oneOf || o4.anyOf || o4.allOf).map(S9);
    }), U7 = (e11) => {
      var o4, i15;
      if (e11 === "allOf") {
        const l11 = (i15 = (o4 = s19.value) == null ? void 0 : o4[e11]) == null ? void 0 : i15.find(
          (m38) => i9(m38)
        );
        if (l11 != null && l11.oneOf)
          return "One of";
        if (l11 != null && l11.anyOf)
          return "Any of";
      }
      return e11.replace(/([A-Z])/g, " $1").replace(/^./, (l11) => l11.toUpperCase()).toLowerCase().replace(/^(\w)/, (l11) => l11.toUpperCase());
    }, a22 = computed(
      () => k12.value[v11.value]
    ), h10 = computed(() => {
      var e11;
      return (e11 = a22.value) != null && e11.oneOf ? "oneOf" : "anyOf";
    }), q7 = computed(() => {
      var o4;
      const e11 = h10.value;
      return (o4 = a22.value) == null ? void 0 : o4[e11];
    }), z10 = computed(() => {
      const e11 = a22.value;
      return e11 ? !!(e11.properties || e11.type || e11.nullable || e11.const !== void 0 || e11.enum || e11.allOf || e11.oneOf || e11.anyOf || e11.items) : false;
    });
    return (e11, o4) => {
      var l11, m38, A3, H6;
      const i15 = resolveComponent("SchemaComposition", true);
      return openBlock(), createElementBlock("div", K2, [
        e11.composition === "allOf" && e11.value[e11.composition].some((n7) => n7.oneOf || n7.anyOf) ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(e11.value[e11.composition].filter(
          (n7) => !n7.oneOf && !n7.anyOf
        ), (n7, E9) => (openBlock(), createBlock(a12, {
          key: E9,
          compact: e11.compact,
          level: e11.level,
          name: e11.name,
          noncollapsible: e11.level == 0,
          schemas: e11.schemas,
          value: n7
        }, null, 8, ["compact", "level", "name", "noncollapsible", "schemas", "value"]))), 128)) : createCommentVNode("", true),
        D7.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createVNode(unref(P), {
            modelValue: O11.value,
            "onUpdate:modelValue": o4[0] || (o4[0] = (n7) => O11.value = n7),
            options: C11.value,
            resize: ""
          }, {
            default: withCtx(() => {
              var n7;
              return [
                createBaseVNode("button", P7, [
                  createBaseVNode("span", Q2, toDisplayString(U7(e11.composition)), 1),
                  createBaseVNode("span", X3, toDisplayString(((n7 = O11.value) == null ? void 0 : n7.label) || "Schema"), 1),
                  createVNode(unref(C))
                ])
              ];
            }),
            _: 1
          }, 8, ["modelValue", "options"]),
          createBaseVNode("div", Y2, [
            (l11 = a22.value) != null && l11.description ? (openBlock(), createElementBlock("div", W4, [
              createVNode(unref(_2), {
                value: a22.value.description
              }, null, 8, ["value"])
            ])) : createCommentVNode("", true),
            z10.value ? (openBlock(), createBlock(a12, {
              key: 1,
              compact: e11.compact,
              level: e11.level + 1,
              hideHeading: e11.hideHeading,
              name: e11.name,
              noncollapsible: true,
              schemas: e11.schemas,
              value: (m38 = a22.value) != null && m38.properties ? {
                type: "object",
                properties: a22.value.properties,
                required: a22.value.required
              } : a22.value
            }, null, 8, ["compact", "level", "hideHeading", "name", "schemas", "value"])) : createCommentVNode("", true),
            (A3 = a22.value) != null && A3.oneOf || (H6 = a22.value) != null && H6.anyOf ? (openBlock(), createBlock(i15, {
              key: 2,
              compact: e11.compact,
              composition: h10.value,
              hideHeading: e11.hideHeading,
              level: e11.level + 1,
              name: e11.name,
              noncollapsible: true,
              schemas: e11.schemas,
              value: {
                [h10.value]: q7.value
              }
            }, null, 8, ["compact", "composition", "hideHeading", "level", "name", "schemas", "value"])) : createCommentVNode("", true)
          ])
        ], 64)) : (openBlock(), createBlock(a12, {
          key: 2,
          compact: e11.compact,
          level: e11.level,
          name: e11.name,
          noncollapsible: e11.level == 0,
          schemas: e11.schemas,
          value: unref(o2)(e11.value[e11.composition])
        }, null, 8, ["compact", "level", "name", "noncollapsible", "schemas", "value"]))
      ]);
    };
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaDiscriminator.vue.js
var S4 = {
  class: "bg-b-1.5 hover:bg-b-2 mt-2 flex w-full items-center gap-1 rounded border px-2 py-1.25",
  type: "button"
};
var _6 = { class: "composition-selector-label text-c-1 relative" };
var M2 = defineComponent({
  __name: "SchemaDiscriminator",
  props: {
    discriminatorMapping: {},
    discriminator: {}
  },
  emits: ["update:modelValue"],
  setup(i15, { emit: c8 }) {
    const m38 = ref(""), d18 = c8, u11 = (e11) => {
      m38.value = e11, d18("update:modelValue", e11);
    }, a22 = computed(() => i15.discriminatorMapping ? Object.keys(i15.discriminatorMapping).map((e11) => ({
      id: e11,
      label: e11
    })) : []), o4 = computed({
      get: () => a22.value.find(
        (e11) => e11.id === i15.discriminator
      ),
      set: (e11) => {
        e11 != null && e11.id && u11(e11.id);
      }
    });
    return (e11, r8) => (openBlock(), createBlock(unref(P), {
      modelValue: o4.value,
      "onUpdate:modelValue": r8[0] || (r8[0] = (t8) => o4.value = t8),
      options: a22.value,
      resize: ""
    }, {
      default: withCtx(() => {
        var t8;
        return [
          createBaseVNode("button", S4, [
            createBaseVNode("span", _6, toDisplayString(((t8 = o4.value) == null ? void 0 : t8.label) || "Schema"), 1),
            createVNode(unref(C), { class: "z-1" })
          ])
        ];
      }),
      _: 1
    }, 8, ["modelValue", "options"]));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/formatExample.js
function t6(r8) {
  return Array.isArray(r8) ? `[${r8.map((n7) => typeof n7 == "string" ? `"${n7.toString().trim()}"` : typeof n7 == "object" ? JSON.stringify(n7) : n7 === void 0 ? "undefined" : n7 === null ? "null" : n7).join(", ")}]` : r8 === null ? "null" : typeof r8 == "object" ? "value" in r8 ? r8.value : "externalValue" in r8 ? r8.externalValue : JSON.stringify(r8) : r8 === void 0 ? "undefined" : typeof r8 == "string" ? r8.trim() : r8.toString().trim();
}

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaPropertyExamples.vue2.js
var f11 = {
  key: 0,
  class: "property-example"
};
var g3 = { class: "property-example-value-list" };
var h8 = {
  key: 1,
  class: "property-example"
};
var k9 = {
  type: "button",
  class: "property-example-label"
};
var C6 = { class: "property-example-value-list" };
var _7 = ["onClick"];
var z4 = defineComponent({
  __name: "SchemaPropertyExamples",
  props: {
    examples: {},
    example: {}
  },
  setup(E9) {
    const { copyToClipboard: m38 } = useClipboard();
    return (t8, s19) => (openBlock(), createElementBlock(Fragment, null, [
      t8.example ? (openBlock(), createElementBlock("div", f11, [
        s19[1] || (s19[1] = createBaseVNode("button", {
          type: "button",
          class: "property-example-label"
        }, [
          createBaseVNode("span", null, "Example")
        ], -1)),
        createBaseVNode("div", g3, [
          createBaseVNode("button", {
            type: "button",
            class: "property-example-value group",
            onClick: s19[0] || (s19[0] = (a22) => unref(m38)(String(unref(t6)(t8.example))))
          }, [
            createBaseVNode("span", null, toDisplayString(unref(t6)(t8.example)), 1),
            createVNode(unref(m), {
              icon: "Clipboard",
              size: "xs",
              class: "group-hover:text-c-1 text-c-3 ml-auto min-h-3 min-w-3"
            })
          ])
        ])
      ])) : createCommentVNode("", true),
      t8.examples && typeof t8.examples == "object" && Object.keys(t8.examples).length > 0 ? (openBlock(), createElementBlock("div", h8, [
        createBaseVNode("button", k9, [
          createBaseVNode("span", null, toDisplayString(Object.keys(t8.examples).length === 1 ? "Example" : "Examples"), 1)
        ]),
        createBaseVNode("div", C6, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(t8.examples, (a22, d18) => (openBlock(), createElementBlock("button", {
            type: "button",
            key: d18,
            class: "property-example-value group",
            onClick: (S9) => unref(m38)(String(unref(t6)(a22)))
          }, [
            createBaseVNode("span", null, toDisplayString(unref(t6)(a22)), 1),
            createVNode(unref(m), {
              icon: "Clipboard",
              size: "xs",
              class: "text-c-3 group-hover:text-c-1 ml-auto min-h-3 min-w-3"
            })
          ], 8, _7))), 128))
        ])
      ])) : createCommentVNode("", true)
    ], 64));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaPropertyExamples.vue.js
var m20 = s5(z4, [["__scopeId", "data-v-1b238a2e"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaPropertyDetail.vue2.js
var d12 = {
  key: 0,
  class: "property-detail-prefix"
};
var i10 = {
  key: 1,
  class: "property-detail-value"
};
var u8 = {
  key: 2,
  class: "property-detail-value"
};
var m21 = defineComponent({
  __name: "SchemaPropertyDetail",
  props: {
    truncate: { type: Boolean },
    code: { type: Boolean }
  },
  setup(c8) {
    return (e11, s19) => (openBlock(), createElementBlock("span", {
      class: normalizeClass(["property-detail", { "property-detail-truncate": e11.truncate }])
    }, [
      e11.$slots.prefix ? (openBlock(), createElementBlock("div", d12, [
        renderSlot(e11.$slots, "prefix", {}, void 0, true),
        s19[0] || (s19[0] = createTextVNode("  "))
      ])) : createCommentVNode("", true),
      e11.code ? (openBlock(), createElementBlock("code", i10, [
        renderSlot(e11.$slots, "default", {}, void 0, true)
      ])) : (openBlock(), createElementBlock("span", u8, [
        renderSlot(e11.$slots, "default", {}, void 0, true)
      ]))
    ], 2));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaPropertyDetail.vue.js
var m22 = s5(m21, [["__scopeId", "data-v-3ae98a1b"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Badge/Badge.vue.js
var n6 = {};
var d13 = { class: "badge" };
function s17(e11, a22) {
  return openBlock(), createElementBlock("div", d13, [
    renderSlot(e11.$slots, "default", {}, void 0, true)
  ]);
}
var l10 = s5(n6, [["render", s17], ["__scopeId", "data-v-1eb90c5b"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaPropertyHeading.vue2.js
var R4 = { class: "property-heading" };
var G3 = {
  key: 1,
  class: "property-discriminator"
};
var K3 = {
  key: 3,
  class: "property-additional"
};
var Q3 = {
  key: 4,
  class: "property-pattern"
};
var U3 = {
  key: 5,
  class: "property-deprecated"
};
var W5 = {
  key: 6,
  class: "property-const"
};
var X4 = {
  key: 8,
  class: "property-write-only"
};
var Y3 = {
  key: 9,
  class: "property-read-only"
};
var Z2 = {
  key: 10,
  class: "property-required"
};
var ae = defineComponent({
  __name: "SchemaPropertyHeading",
  props: {
    value: {},
    enum: { type: Boolean },
    required: { type: Boolean, default: false },
    additional: { type: Boolean },
    pattern: { type: Boolean },
    withExamples: { type: Boolean, default: true },
    hideModelNames: { type: Boolean, default: false },
    schemas: {}
  },
  setup(r8) {
    const L6 = (e11) => (e11 == null ? void 0 : e11.default) === null ? "null" : Array.isArray(e11 == null ? void 0 : e11.default) && e11.default.length === 1 ? e11.default[0] : typeof (e11 == null ? void 0 : e11.default) == "string" ? JSON.stringify(e11.default) : e11 == null ? void 0 : e11.default, D7 = computed(() => {
      var e11, t8, s19, f15, y11, N7;
      if (isDefined((e11 = r8.value) == null ? void 0 : e11.const))
        return (t8 = r8.value) == null ? void 0 : t8.const;
      if (((f15 = (s19 = r8.value) == null ? void 0 : s19.enum) == null ? void 0 : f15.length) === 1)
        return r8.value.enum[0];
      if ((y11 = r8.value) != null && y11.items) {
        if (isDefined(r8.value.items.const))
          return r8.value.items.const;
        if (((N7 = r8.value.items.enum) == null ? void 0 : N7.length) === 1)
          return r8.value.items.enum[0];
      }
      return null;
    }), T9 = computed(() => {
      var e11, t8, s19, f15, y11;
      return Array.isArray((e11 = r8.value) == null ? void 0 : e11.type) ? r8.value.type.join(" | ") : (t8 = r8.value) != null && t8.title ? r8.value.title : (s19 = r8.value) != null && s19.name ? r8.value.name : (f15 = r8.value) != null && f15.type && r8.value.contentEncoding ? `${r8.value.type} • ${r8.value.contentEncoding}` : ((y11 = r8.value) == null ? void 0 : y11.type) ?? "";
    }), M7 = computed(() => r8.value ? u7(
      r8.value,
      r8.schemas,
      r8.hideModelNames,
      I3
    ) : null);
    return (e11, t8) => {
      var s19, f15, y11, N7, q7, w9, E9, P10, $5, I10, O11, V11;
      return openBlock(), createElementBlock("div", R4, [
        e11.$slots.name ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["property-name", { deprecated: (s19 = e11.value) == null ? void 0 : s19.deprecated }])
        }, [
          e11.pattern ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            t8[0] || (t8[0] = createTextVNode("/")),
            renderSlot(e11.$slots, "name", {}, void 0, true),
            t8[1] || (t8[1] = createTextVNode("/"))
          ], 64)) : renderSlot(e11.$slots, "name", { key: 0 }, void 0, true)
        ], 2)) : createCommentVNode("", true),
        (f15 = e11.value) != null && f15.isDiscriminator ? (openBlock(), createElementBlock("div", G3, " Discriminator ")) : createCommentVNode("", true),
        e11.value ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
          (y11 = e11.value) != null && y11.type ? (openBlock(), createBlock(m22, { key: 0 }, {
            default: withCtx(() => {
              var b9;
              return [
                createVNode(f7, null, {
                  default: withCtx(() => t8[2] || (t8[2] = [
                    createTextVNode("Type:")
                  ])),
                  _: 1
                }),
                M7.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  createTextVNode(toDisplayString(M7.value), 1)
                ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(T9.value) + " " + toDisplayString((b9 = e11.value) != null && b9.nullable ? " | nullable" : ""), 1)
                ], 64))
              ];
            }),
            _: 1
          })) : createCommentVNode("", true),
          e11.value.minItems || e11.value.maxItems ? (openBlock(), createBlock(m22, { key: 1 }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(e11.value.minItems) + "…" + toDisplayString(e11.value.maxItems), 1)
            ]),
            _: 1
          })) : createCommentVNode("", true),
          e11.value.minLength ? (openBlock(), createBlock(m22, { key: 2 }, {
            prefix: withCtx(() => t8[3] || (t8[3] = [
              createTextVNode("min:")
            ])),
            default: withCtx(() => [
              createTextVNode(" " + toDisplayString(e11.value.minLength), 1)
            ]),
            _: 1
          })) : createCommentVNode("", true),
          e11.value.maxLength ? (openBlock(), createBlock(m22, { key: 3 }, {
            prefix: withCtx(() => t8[4] || (t8[4] = [
              createTextVNode("max:")
            ])),
            default: withCtx(() => [
              createTextVNode(" " + toDisplayString(e11.value.maxLength), 1)
            ]),
            _: 1
          })) : createCommentVNode("", true),
          e11.value.uniqueItems ? (openBlock(), createBlock(m22, { key: 4 }, {
            default: withCtx(() => t8[5] || (t8[5] = [
              createTextVNode(" unique! ")
            ])),
            _: 1
          })) : createCommentVNode("", true),
          e11.value.format ? (openBlock(), createBlock(m22, { key: 5 }, {
            default: withCtx(() => [
              createVNode(f7, null, {
                default: withCtx(() => t8[6] || (t8[6] = [
                  createTextVNode("Format:")
                ])),
                _: 1
              }),
              createTextVNode(" " + toDisplayString(e11.value.format), 1)
            ]),
            _: 1
          })) : createCommentVNode("", true),
          unref(isDefined)(e11.value.minimum) && e11.value.exclusiveMinimum ? (openBlock(), createBlock(m22, { key: 6 }, {
            prefix: withCtx(() => t8[7] || (t8[7] = [
              createTextVNode("greater than:")
            ])),
            default: withCtx(() => [
              createTextVNode(" " + toDisplayString(e11.value.minimum), 1)
            ]),
            _: 1
          })) : createCommentVNode("", true),
          unref(isDefined)(e11.value.minimum) && !e11.value.exclusiveMinimum ? (openBlock(), createBlock(m22, { key: 7 }, {
            prefix: withCtx(() => t8[8] || (t8[8] = [
              createTextVNode("min:")
            ])),
            default: withCtx(() => [
              createTextVNode(" " + toDisplayString(e11.value.minimum), 1)
            ]),
            _: 1
          })) : createCommentVNode("", true),
          unref(isDefined)(e11.value.maximum) && e11.value.exclusiveMaximum ? (openBlock(), createBlock(m22, { key: 8 }, {
            prefix: withCtx(() => t8[9] || (t8[9] = [
              createTextVNode("less than:")
            ])),
            default: withCtx(() => [
              createTextVNode(" " + toDisplayString(e11.value.maximum), 1)
            ]),
            _: 1
          })) : createCommentVNode("", true),
          unref(isDefined)(e11.value.maximum) && !e11.value.exclusiveMaximum ? (openBlock(), createBlock(m22, { key: 9 }, {
            prefix: withCtx(() => t8[10] || (t8[10] = [
              createTextVNode("max:")
            ])),
            default: withCtx(() => [
              createTextVNode(" " + toDisplayString(e11.value.maximum), 1)
            ]),
            _: 1
          })) : createCommentVNode("", true),
          unref(isDefined)(e11.value.multipleOf) ? (openBlock(), createBlock(m22, { key: 10 }, {
            prefix: withCtx(() => t8[11] || (t8[11] = [
              createTextVNode("multiple of:")
            ])),
            default: withCtx(() => [
              createTextVNode(" " + toDisplayString(e11.value.multipleOf), 1)
            ]),
            _: 1
          })) : createCommentVNode("", true),
          e11.value.pattern ? (openBlock(), createBlock(m22, {
            key: 11,
            code: "",
            truncate: ""
          }, {
            default: withCtx(() => [
              createVNode(f7, null, {
                default: withCtx(() => t8[12] || (t8[12] = [
                  createTextVNode("Pattern:")
                ])),
                _: 1
              }),
              createTextVNode(" " + toDisplayString(e11.value.pattern), 1)
            ]),
            _: 1
          })) : createCommentVNode("", true),
          e11.$props.enum ? (openBlock(), createBlock(m22, { key: 12 }, {
            default: withCtx(() => t8[13] || (t8[13] = [
              createTextVNode("enum")
            ])),
            _: 1
          })) : createCommentVNode("", true),
          e11.value.default !== void 0 ? (openBlock(), createBlock(m22, {
            key: 13,
            truncate: ""
          }, {
            prefix: withCtx(() => t8[14] || (t8[14] = [
              createTextVNode("default:")
            ])),
            default: withCtx(() => [
              createTextVNode(" " + toDisplayString(L6(e11.value)), 1)
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true),
        e11.additional ? (openBlock(), createElementBlock("div", K3, [
          (N7 = e11.value) != null && N7["x-additionalPropertiesName"] ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createTextVNode(toDisplayString(e11.value["x-additionalPropertiesName"]), 1)
          ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createTextVNode("additional properties")
          ], 64))
        ])) : createCommentVNode("", true),
        e11.pattern ? (openBlock(), createElementBlock("div", Q3, [
          createVNode(unref(l10), null, {
            default: withCtx(() => t8[15] || (t8[15] = [
              createTextVNode("pattern")
            ])),
            _: 1
          })
        ])) : createCommentVNode("", true),
        (q7 = e11.value) != null && q7.deprecated ? (openBlock(), createElementBlock("div", U3, [
          createVNode(unref(l10), null, {
            default: withCtx(() => t8[16] || (t8[16] = [
              createTextVNode("deprecated")
            ])),
            _: 1
          })
        ])) : createCommentVNode("", true),
        unref(isDefined)(D7.value) ? (openBlock(), createElementBlock("div", W5, [
          createVNode(m22, { truncate: "" }, {
            prefix: withCtx(() => t8[17] || (t8[17] = [
              createTextVNode("const:")
            ])),
            default: withCtx(() => [
              createTextVNode(" " + toDisplayString(D7.value), 1)
            ]),
            _: 1
          })
        ])) : (openBlock(), createElementBlock(Fragment, { key: 7 }, [
          ((w9 = e11.value) == null ? void 0 : w9.nullable) === true ? (openBlock(), createBlock(m22, { key: 0 }, {
            default: withCtx(() => t8[18] || (t8[18] = [
              createTextVNode(" nullable ")
            ])),
            _: 1
          })) : createCommentVNode("", true)
        ], 64)),
        (E9 = e11.value) != null && E9.writeOnly ? (openBlock(), createElementBlock("div", X4, " write-only ")) : (P10 = e11.value) != null && P10.readOnly ? (openBlock(), createElementBlock("div", Y3, " read-only ")) : createCommentVNode("", true),
        e11.required ? (openBlock(), createElementBlock("div", Z2, " required ")) : createCommentVNode("", true),
        e11.withExamples ? (openBlock(), createBlock(m20, {
          key: 11,
          examples: ($5 = e11.value) == null ? void 0 : $5.examples,
          example: ((I10 = e11.value) == null ? void 0 : I10.example) || ((V11 = (O11 = e11.value) == null ? void 0 : O11.items) == null ? void 0 : V11.example)
        }, null, 8, ["examples", "example"])) : createCommentVNode("", true)
      ]);
    };
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaPropertyHeading.vue.js
var m23 = s5(ae, [["__scopeId", "data-v-71dbcd77"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaProperty.vue2.js
var pe2 = {
  key: 1,
  class: "property-description"
};
var ce = {
  key: 2,
  class: "property-description"
};
var de = {
  key: 3,
  class: "property-enum"
};
var ue2 = {
  key: 0,
  class: "property-list"
};
var ye2 = { class: "property-heading" };
var he = { class: "property-name" };
var fe = { class: "property-description" };
var ge2 = {
  key: 1,
  class: "property-enum-values"
};
var ve2 = { class: "property-enum-value-label" };
var be = { class: "property-enum-value-label" };
var ke = {
  key: 4,
  class: "children"
};
var De = {
  key: 0,
  class: "children"
};
var Ve = defineComponent({
  __name: "SchemaProperty",
  props: {
    is: {},
    value: {},
    noncollapsible: { type: Boolean },
    level: { default: 0 },
    name: {},
    required: { type: Boolean, default: false },
    compact: { type: Boolean, default: false },
    description: {},
    additional: { type: Boolean },
    pattern: { type: Boolean },
    withExamples: { type: Boolean, default: true },
    hideModelNames: { type: Boolean, default: false },
    schemas: {},
    hideHeading: { type: Boolean },
    discriminatorMapping: {},
    discriminatorPropertyName: {},
    isDiscriminator: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(q7, { emit: F6 }) {
    const D7 = q7, $5 = F6, E9 = {
      integer: {
        _default: "Integer numbers.",
        int32: "Signed 32-bit integers (commonly used integer type).",
        int64: "Signed 64-bit integers (long type)."
      },
      string: {
        date: "full-date notation as defined by RFC 3339, section 5.6, for example, 2017-07-21",
        "date-time": "the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z",
        password: "a hint to UIs to mask the input",
        base64: "base64-encoded characters, for example, U3dhZ2dlciByb2Nrcw==",
        byte: "base64-encoded characters, for example, U3dhZ2dlciByb2Nrcw==",
        binary: "binary data, used to describe files"
      }
    }, P10 = (e11, n7) => n7 != null && n7.properties || n7 != null && n7.additionalProperties || n7 != null && n7.patternProperties || n7 != null && n7.allOf ? null : e11 || (n7 == null ? void 0 : n7.description) || null, C11 = (e11) => !e11 || !E9[e11.type] ? null : E9[e11.type][e11.format || e11.contentEncoding || "_default"], u11 = (e11) => {
      var n7;
      return (e11 == null ? void 0 : e11.enum) || ((n7 = e11 == null ? void 0 : e11.items) == null ? void 0 : n7.enum) || [];
    }, H6 = computed(
      () => u11(i15.value).length > 9
    ), V11 = computed(() => H6.value ? 5 : 9), z10 = computed(
      () => u11(i15.value).slice(0, V11.value)
    ), L6 = computed(
      () => u11(i15.value).slice(V11.value)
    ), i15 = computed(() => O7(D7.value)), d18 = inject(V6, null), s19 = computed(() => {
      var e11;
      return D7.level > 0 ? i15.value : (e11 = d18 == null ? void 0 : d18.value) != null && e11.mergedSchema ? d18.value.mergedSchema : i15.value;
    }), Z5 = computed(() => {
      var e11;
      return ((e11 = d18 == null ? void 0 : d18.value) == null ? void 0 : e11.selectedType) || (D7.discriminatorMapping ? Object.keys(D7.discriminatorMapping)[0] : "");
    }), X7 = (e11, n7, y11, N7, S9) => n7 || y11 || N7 || (e11 == null ? void 0 : e11.deprecated) || (e11 == null ? void 0 : e11.const) || (e11 == null ? void 0 : e11.enum) && e11.enum.length === 1 || (e11 == null ? void 0 : e11.type) || (e11 == null ? void 0 : e11.nullable) === true || (e11 == null ? void 0 : e11.writeOnly) || (e11 == null ? void 0 : e11.readOnly) || S9, j8 = (e11) => {
      $5("update:modelValue", e11);
    }, w9 = computed(() => {
      const e11 = i15.value;
      if (!(e11 != null && e11.items) || typeof e11.items != "object")
        return false;
      const n7 = e11.items;
      return "type" in n7 && ["object"].includes(n7.type) || "$ref" in n7 || "discriminator" in n7 || "allOf" in n7 || "oneOf" in n7 || "anyOf" in n7;
    }), G7 = (e11) => {
      const n7 = i15.value;
      return !(n7 != null && n7.items) || typeof n7.items != "object" || !(e11 in n7.items) ? false : !w9.value;
    }, J5 = computed(() => w9.value), K6 = computed(() => {
      if (!i15.value)
        return false;
      const e11 = i15.value, n7 = e11.type === "object" || Array.isArray(e11.type) && e11.type.includes("object"), y11 = e11.properties || e11.additionalProperties;
      return n7 && y11;
    }), Q6 = computed(() => {
      var n7;
      if (!((n7 = i15.value) != null && n7["x-enumDescriptions"]))
        return false;
      const e11 = i15.value["x-enumDescriptions"];
      return typeof e11 == "object" && !Array.isArray(e11);
    });
    return (e11, n7) => {
      var y11;
      return openBlock(), createBlock(resolveDynamicComponent(e11.is ?? "li"), {
        class: normalizeClass(["property", [
          (P10(e11.description, i15.value), ""),
          `property--level-${e11.level}`,
          {
            "property--compact": e11.compact,
            "property--deprecated": (y11 = i15.value) == null ? void 0 : y11.deprecated
          }
        ]])
      }, {
        default: withCtx(() => {
          var N7, S9, A3;
          return [
            X7(
              i15.value,
              e11.name,
              e11.additional,
              e11.pattern,
              e11.required
            ) ? (openBlock(), createBlock(m23, {
              key: 0,
              additional: e11.additional,
              enum: u11(i15.value).length > 0,
              pattern: e11.pattern,
              required: e11.required,
              value: i15.value,
              schemas: e11.schemas,
              hideModelNames: e11.hideModelNames
            }, createSlots({ _: 2 }, [
              e11.name ? {
                name: "name",
                fn: withCtx(() => [
                  createTextVNode(toDisplayString(e11.name), 1)
                ]),
                key: "0"
              } : void 0,
              (N7 = i15.value) != null && N7.example ? {
                name: "example",
                fn: withCtx(() => [
                  createTextVNode(" Example: " + toDisplayString(i15.value.example), 1)
                ]),
                key: "1"
              } : void 0
            ]), 1032, ["additional", "enum", "pattern", "required", "value", "schemas", "hideModelNames"])) : createCommentVNode("", true),
            P10(e11.description, i15.value) ? (openBlock(), createElementBlock("div", pe2, [
              createVNode(unref(_2), {
                value: P10(e11.description, i15.value)
              }, null, 8, ["value"])
            ])) : C11(i15.value) ? (openBlock(), createElementBlock("div", ce, [
              createVNode(unref(_2), {
                value: C11(i15.value) || ""
              }, null, 8, ["value"])
            ])) : createCommentVNode("", true),
            ((S9 = u11(i15.value)) == null ? void 0 : S9.length) > 0 && !e11.isDiscriminator ? (openBlock(), createElementBlock("div", de, [
              Q6.value ? (openBlock(), createElementBlock("div", ue2, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(u11(i15.value), (a22) => {
                  var c8, b9;
                  return openBlock(), createElementBlock("div", {
                    key: a22,
                    class: "property"
                  }, [
                    createBaseVNode("div", ye2, [
                      createBaseVNode("div", he, toDisplayString(a22), 1)
                    ]),
                    createBaseVNode("div", fe, [
                      createVNode(unref(_2), {
                        value: (b9 = (c8 = i15.value) == null ? void 0 : c8["x-enumDescriptions"]) == null ? void 0 : b9[a22]
                      }, null, 8, ["value"])
                    ])
                  ]);
                }), 128))
              ])) : (openBlock(), createElementBlock("ul", ge2, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(z10.value, (a22) => (openBlock(), createElementBlock("li", {
                  key: a22,
                  class: "property-enum-value"
                }, [
                  createBaseVNode("span", ve2, toDisplayString(a22), 1)
                ]))), 128)),
                H6.value ? (openBlock(), createBlock(unref(N), { key: 0 }, {
                  default: withCtx(({ open: a22 }) => [
                    createVNode(unref(V), null, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(L6.value, (c8) => (openBlock(), createElementBlock("li", {
                          key: c8,
                          class: "property-enum-value"
                        }, [
                          createBaseVNode("span", be, toDisplayString(c8), 1)
                        ]))), 128))
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Q), { class: "enum-toggle-button" }, {
                      default: withCtx(() => [
                        createVNode(unref(m), {
                          class: normalizeClass(["enum-toggle-button-icon", { "enum-toggle-button-icon--open": a22 }]),
                          icon: "Add",
                          size: "sm"
                        }, null, 8, ["class"]),
                        createTextVNode(" " + toDisplayString(a22 ? "Hide values" : "Show all values"), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ]))
            ])) : createCommentVNode("", true),
            K6.value ? (openBlock(), createElementBlock("div", ke, [
              createVNode(a12, {
                compact: e11.compact,
                level: e11.level + 1,
                name: e11.name,
                noncollapsible: e11.noncollapsible,
                value: s19.value,
                resolvedSchema: s19.value,
                discriminatorMapping: e11.discriminatorMapping,
                discriminatorPropertyName: e11.discriminatorPropertyName,
                schemas: e11.schemas,
                "onUpdate:modelValue": j8
              }, null, 8, ["compact", "level", "name", "noncollapsible", "value", "resolvedSchema", "discriminatorMapping", "discriminatorPropertyName", "schemas"])
            ])) : createCommentVNode("", true),
            (A3 = i15.value) != null && A3.items && typeof i15.value.items == "object" ? (openBlock(), createElementBlock(Fragment, { key: 5 }, [
              J5.value ? (openBlock(), createElementBlock("div", De, [
                createVNode(a12, {
                  compact: e11.compact,
                  level: e11.level + 1,
                  name: e11.name,
                  noncollapsible: e11.noncollapsible,
                  value: s19.value && typeof s19.value == "object" && "items" in s19.value ? s19.value.items : i15.value.items,
                  resolvedSchema: s19.value && typeof s19.value == "object" && "items" in s19.value ? s19.value.items : i15.value.items,
                  discriminatorMapping: e11.discriminatorMapping,
                  discriminatorPropertyName: e11.discriminatorPropertyName,
                  schemas: e11.schemas,
                  "onUpdate:modelValue": j8
                }, null, 8, ["compact", "level", "name", "noncollapsible", "value", "resolvedSchema", "discriminatorMapping", "discriminatorPropertyName", "schemas"])
              ])) : createCommentVNode("", true)
            ], 64)) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(m19), (a22) => {
              var c8, b9, I10;
              return openBlock(), createElementBlock(Fragment, { key: a22 }, [
                (c8 = i15.value) != null && c8[a22] && !((b9 = i15.value) != null && b9.items && typeof a22 == "string" && typeof i15.value.items == "object" && a22 in i15.value.items) ? (openBlock(), createBlock(te2, {
                  key: 0,
                  compact: e11.compact,
                  composition: a22,
                  hideHeading: e11.hideHeading,
                  level: e11.level,
                  name: e11.name,
                  noncollapsible: e11.noncollapsible,
                  schemas: e11.schemas,
                  value: i15.value
                }, null, 8, ["compact", "composition", "hideHeading", "level", "name", "noncollapsible", "schemas", "value"])) : G7(a22) ? (openBlock(), createBlock(te2, {
                  key: 1,
                  compact: e11.compact,
                  composition: a22,
                  hideHeading: e11.hideHeading,
                  level: e11.level,
                  name: e11.name,
                  noncollapsible: e11.noncollapsible,
                  schemas: e11.schemas,
                  value: (I10 = i15.value) == null ? void 0 : I10.items
                }, null, 8, ["compact", "composition", "hideHeading", "level", "name", "noncollapsible", "schemas", "value"])) : createCommentVNode("", true)
              ], 64);
            }), 128)),
            e11.isDiscriminator && e11.discriminatorMapping && e11.compact ? (openBlock(), createBlock(M2, {
              key: 6,
              "discriminator-mapping": e11.discriminatorMapping,
              discriminator: Z5.value,
              "onUpdate:modelValue": j8
            }, null, 8, ["discriminator-mapping", "discriminator"])) : createCommentVNode("", true),
            createVNode(unref(O4), { value: i15.value }, null, 8, ["value"])
          ];
        }),
        _: 1
      }, 8, ["class"]);
    };
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaProperty.vue.js
var p13 = s5(Ve, [["__scopeId", "data-v-28e7d196"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/Operation/components/ParameterHeaders.vue2.js
var V7 = defineComponent({
  __name: "ParameterHeaders",
  props: {
    headers: {}
  },
  setup(x14) {
    function h10(t8) {
      return t8.schema !== void 0;
    }
    return (t8, y11) => (openBlock(), createBlock(unref(N), null, {
      default: withCtx(({ open: r8 }) => [
        createBaseVNode("div", {
          class: normalizeClass(["headers-card headers-card--compact", [{ "headers-card--open": r8 }]])
        }, [
          createBaseVNode("div", {
            class: normalizeClass(["headers-properties", { "headers-properties-open": r8 }])
          }, [
            createVNode(unref(Q), {
              class: "headers-card-title headers-card-title--compact",
              style: {
                top: "calc(var(--refs-header-height)))"
              }
            }, {
              default: withCtx(() => [
                createVNode(unref(m), {
                  class: normalizeClass(["headers-card-title-icon", { "headers-card-title-icon--open": r8 }]),
                  icon: "Add",
                  size: "sm"
                }, null, 8, ["class"]),
                r8 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  createTextVNode(" Hide Headers ")
                ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(" Show Headers ")
                ], 64))
              ]),
              _: 2
            }, 1024),
            createVNode(unref(V), null, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(t8.headers, (s19, n7) => (openBlock(), createBlock(p13, {
                  key: n7,
                  description: s19.description,
                  name: `${n7}`,
                  value: h10(s19) ? s19.schema : void 0
                }, null, 8, ["description", "name", "value"]))), 128))
              ]),
              _: 1
            })
          ], 2)
        ], 2)
      ]),
      _: 1
    }));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/Operation/components/ParameterHeaders.vue.js
var m24 = s5(V7, [["__scopeId", "data-v-9293fa9e"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/Operation/components/ParameterListItem.vue2.js
var H3 = {
  key: 0,
  class: "parameter-item group/parameter-item relative"
};
var L4 = { class: "parameter-item-name" };
var M3 = { class: "parameter-item-type" };
var R5 = { class: "absolute top-2.5 right-0 opacity-0 group-focus-within/parameter-item:opacity-100 group-hover/parameter-item:opacity-100" };
var U4 = defineComponent({
  __name: "ParameterListItem",
  props: {
    parameter: {},
    showChildren: { type: Boolean, default: false },
    collapsableItems: { type: Boolean, default: false },
    withExamples: { type: Boolean, default: true },
    schemas: {}
  },
  setup(w9) {
    const a22 = w9, g11 = computed(() => a22.parameter.content ? Object.keys(a22.parameter.content) : []), t8 = ref(
      g11.value[0]
    );
    a22.parameter.content && "application/json" in a22.parameter.content && (t8.value = "application/json");
    const m38 = computed(() => !!(a22.collapsableItems && (a22.parameter.content || a22.parameter.headers || a22.parameter.schema))), C11 = computed(() => a22.parameter.readOnly !== true);
    return (e11, d18) => C11.value ? (openBlock(), createElementBlock("li", H3, [
      createVNode(unref(N), null, {
        default: withCtx(({ open: n7 }) => [
          m38.value ? (openBlock(), createBlock(unref(Q), {
            key: 0,
            class: normalizeClass(["parameter-item-trigger flex", { "parameter-item-trigger-open": n7 }])
          }, {
            default: withCtx(() => [
              createVNode(unref(m), {
                class: "parameter-item-icon size-4.5",
                icon: n7 ? "ChevronDown" : "ChevronRight",
                thickness: "1.5"
              }, null, 8, ["icon"]),
              createBaseVNode("span", L4, toDisplayString(e11.parameter.name), 1),
              createBaseVNode("span", M3, [
                e11.parameter.description ? (openBlock(), createBlock(unref(_2), {
                  key: 0,
                  class: "markdown",
                  value: e11.parameter.description
                }, null, 8, ["value"])) : createCommentVNode("", true)
              ])
            ]),
            _: 2
          }, 1032, ["class"])) : createCommentVNode("", true),
          createVNode(unref(V), {
            class: "parameter-item-container parameter-item-container-markdown",
            static: !m38.value
          }, {
            default: withCtx(() => {
              var h10, f15, v11, y11, k12;
              return [
                e11.parameter.headers ? (openBlock(), createBlock(m24, {
                  key: 0,
                  headers: e11.parameter.headers
                }, null, 8, ["headers"])) : createCommentVNode("", true),
                createVNode(unref(p13), {
                  is: "div",
                  compact: "",
                  description: m38.value ? "" : e11.parameter.description,
                  name: m38.value ? "" : e11.parameter.name,
                  noncollapsible: true,
                  required: e11.parameter.required,
                  schemas: e11.schemas,
                  value: {
                    ...e11.parameter.content ? (f15 = (h10 = e11.parameter.content) == null ? void 0 : h10[t8.value]) == null ? void 0 : f15.schema : e11.parameter.schema,
                    deprecated: e11.parameter.deprecated,
                    ...unref(isDefined)(e11.parameter.example) && { example: e11.parameter.example },
                    examples: e11.parameter.content ? {
                      ...e11.parameter.examples,
                      ...(y11 = (v11 = e11.parameter.content) == null ? void 0 : v11[t8.value]) == null ? void 0 : y11.examples
                    } : e11.parameter.examples || ((k12 = e11.parameter.schema) == null ? void 0 : k12.examples)
                  },
                  withExamples: e11.withExamples
                }, null, 8, ["description", "name", "required", "schemas", "value", "withExamples"])
              ];
            }),
            _: 1
          }, 8, ["static"])
        ]),
        _: 1
      }),
      createBaseVNode("div", R5, [
        m38.value && a22.parameter.content ? (openBlock(), createBlock(O5, {
          key: 0,
          class: "parameter-item-content-type",
          defaultValue: t8.value,
          requestBody: a22.parameter,
          onSelectContentType: d18[0] || (d18[0] = ({ contentType: n7 }) => t8.value = n7)
        }, null, 8, ["defaultValue", "requestBody"])) : createCommentVNode("", true)
      ])
    ])) : createCommentVNode("", true);
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/Operation/components/ParameterListItem.vue.js
var a13 = s5(U4, [["__scopeId", "data-v-5d044e0e"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/Operation/components/ParameterList.vue2.js
var d14 = {
  key: 0,
  class: "parameter-list"
};
var u9 = { class: "parameter-list-title" };
var f12 = { class: "parameter-list-items" };
var E7 = defineComponent({
  __name: "ParameterList",
  props: {
    parameters: {},
    showChildren: { type: Boolean, default: false },
    collapsableItems: { type: Boolean, default: false },
    withExamples: { type: Boolean, default: true },
    schemas: {}
  },
  setup(w9) {
    return (e11, _13) => {
      var a22;
      return (a22 = e11.parameters) != null && a22.length ? (openBlock(), createElementBlock("div", d14, [
        createBaseVNode("div", u9, [
          renderSlot(e11.$slots, "title", {}, void 0, true)
        ]),
        createBaseVNode("ul", f12, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(e11.parameters, (s19) => (openBlock(), createBlock(a13, {
            key: s19.name,
            collapsableItems: e11.collapsableItems,
            parameter: s19,
            schemas: e11.schemas,
            showChildren: e11.showChildren,
            withExamples: e11.withExamples
          }, null, 8, ["collapsableItems", "parameter", "schemas", "showChildren", "withExamples"]))), 128))
        ])
      ])) : createCommentVNode("", true);
    };
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/Operation/components/ParameterList.vue.js
var e8 = s5(E7, [["__scopeId", "data-v-dabf3ac7"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/Operation/components/RequestBody.vue2.js
var _8 = { key: 0 };
var O8 = { class: "request-body-header" };
var R6 = { class: "request-body-title" };
var g4 = {
  key: 0,
  class: "request-body-required"
};
var N6 = {
  key: 0,
  class: "request-body-description"
};
var T6 = {
  key: 0,
  class: "request-body-schema"
};
var M4 = {
  key: 1,
  class: "request-body-schema"
};
var z5 = defineComponent({
  __name: "RequestBody",
  props: {
    requestBody: {},
    schemas: {}
  },
  emits: ["update:modelValue"],
  setup(c8, { emit: k12 }) {
    var q7;
    const V11 = k12, v11 = computed(
      () => {
        var e11;
        return Object.keys(((e11 = c8.requestBody) == null ? void 0 : e11.content) ?? {});
      }
    ), t8 = ref("application/json");
    (q7 = c8.requestBody) != null && q7.content && v11.value.length > 0 && (t8.value = v11.value[0]);
    const m38 = computed(() => {
      var r8, u11, B12;
      const e11 = (B12 = (u11 = (r8 = c8.requestBody) == null ? void 0 : r8.content) == null ? void 0 : u11[t8.value]) == null ? void 0 : B12.schema;
      if ((e11 == null ? void 0 : e11.type) !== "object" || !e11.properties)
        return null;
      const s19 = Object.entries(e11.properties);
      if (s19.length < 13)
        return null;
      const { properties: p19, ...o4 } = e11;
      return {
        visibleProperties: {
          ...o4,
          properties: Object.fromEntries(s19.slice(0, 12))
        },
        collapsedProperties: {
          ...o4,
          properties: Object.fromEntries(s19.slice(12))
        }
      };
    }), h10 = (e11) => {
      V11("update:modelValue", e11);
    };
    return (e11, s19) => {
      var p19, o4, r8;
      return e11.requestBody ? (openBlock(), createElementBlock("div", _8, [
        createBaseVNode("div", O8, [
          createBaseVNode("span", R6, [
            renderSlot(e11.$slots, "title", {}, void 0, true),
            e11.requestBody.required ? (openBlock(), createElementBlock("div", g4, " required ")) : createCommentVNode("", true)
          ]),
          createVNode(O5, {
            defaultValue: t8.value,
            requestBody: e11.requestBody,
            onSelectContentType: s19[0] || (s19[0] = ({ contentType: u11 }) => t8.value = u11)
          }, null, 8, ["defaultValue", "requestBody"]),
          e11.requestBody.description ? (openBlock(), createElementBlock("div", N6, [
            createVNode(unref(_2), {
              value: e11.requestBody.description
            }, null, 8, ["value"])
          ])) : createCommentVNode("", true)
        ]),
        m38.value ? (openBlock(), createElementBlock("div", T6, [
          createVNode(unref(a12), {
            compact: "",
            name: "Request Body",
            noncollapsible: "",
            schemas: e11.schemas,
            value: m38.value.visibleProperties,
            "onUpdate:modelValue": h10
          }, null, 8, ["schemas", "value"]),
          createVNode(unref(a12), {
            additionalProperties: "",
            compact: "",
            name: "Request Body",
            schemas: e11.schemas,
            value: m38.value.collapsedProperties
          }, null, 8, ["schemas", "value"])
        ])) : (p19 = e11.requestBody.content) != null && p19[t8.value] ? (openBlock(), createElementBlock("div", M4, [
          createVNode(unref(a12), {
            compact: "",
            name: "Request Body",
            noncollapsible: "",
            schemas: e11.schemas,
            value: (r8 = (o4 = e11.requestBody.content) == null ? void 0 : o4[t8.value]) == null ? void 0 : r8.schema,
            "onUpdate:modelValue": h10
          }, null, 8, ["schemas", "value"])
        ])) : createCommentVNode("", true)
      ])) : createCommentVNode("", true);
    };
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/Operation/components/RequestBody.vue.js
var m25 = s5(z5, [["__scopeId", "data-v-6c0fd437"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/Operation/components/OperationParameters.vue.js
var C7 = defineComponent({
  __name: "OperationParameters",
  props: {
    parameters: { default: () => [] },
    requestBody: {},
    schemas: {}
  },
  emits: ["update:modelValue"],
  setup(p19, { emit: d18 }) {
    const l11 = d18, n7 = (s19) => {
      l11("update:modelValue", s19);
    }, a22 = (s19) => {
      var e11;
      return ((e11 = p19.parameters) == null ? void 0 : e11.filter((u11) => u11.in === s19)) ?? [];
    };
    return (s19, e11) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(e8, {
        parameters: a22("path"),
        schemas: s19.schemas
      }, {
        title: withCtx(() => e11[0] || (e11[0] = [
          createTextVNode("Path Parameters")
        ])),
        _: 1
      }, 8, ["parameters", "schemas"]),
      createVNode(e8, {
        parameters: a22("query"),
        schemas: s19.schemas
      }, {
        title: withCtx(() => e11[1] || (e11[1] = [
          createTextVNode("Query Parameters")
        ])),
        _: 1
      }, 8, ["parameters", "schemas"]),
      createVNode(e8, {
        parameters: a22("header"),
        schemas: s19.schemas
      }, {
        title: withCtx(() => e11[2] || (e11[2] = [
          createTextVNode("Headers")
        ])),
        _: 1
      }, 8, ["parameters", "schemas"]),
      createVNode(e8, {
        parameters: a22("cookie"),
        schemas: s19.schemas
      }, {
        title: withCtx(() => e11[3] || (e11[3] = [
          createTextVNode("Cookies")
        ])),
        _: 1
      }, 8, ["parameters", "schemas"]),
      s19.requestBody ? (openBlock(), createBlock(m25, {
        key: 0,
        requestBody: s19.requestBody,
        schemas: s19.schemas,
        "onUpdate:modelValue": n7
      }, {
        title: withCtx(() => e11[4] || (e11[4] = [
          createTextVNode("Body")
        ])),
        _: 1
      }, 8, ["requestBody", "schemas"])) : createCommentVNode("", true)
    ], 64));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/Operation/hooks/useResponses.js
function u10(n7) {
  return { responses: computed(() => {
    const e11 = [];
    return n7 && Object.entries(n7).forEach(([c8, t8]) => {
      var r8;
      e11.push({
        name: c8,
        description: t8.description,
        content: t8.content,
        headers: t8.headers,
        schema: (r8 = t8.content) == null ? void 0 : r8.schema
      });
    }), e11;
  }) };
}

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/Operation/components/OperationResponses.vue.js
var d15 = defineComponent({
  __name: "OperationResponses",
  props: {
    responses: {},
    collapsableItems: { type: Boolean, default: true },
    schemas: {}
  },
  setup(o4) {
    const t8 = o4, { responses: a22 } = u10(t8.responses);
    return (e11, s19) => (openBlock(), createBlock(e8, {
      collapsableItems: e11.collapsableItems,
      parameters: unref(a22),
      schemas: e11.schemas,
      withExamples: false
    }, {
      title: withCtx(() => s19[0] || (s19[0] = [
        createTextVNode("Responses")
      ])),
      _: 1
    }, 8, ["collapsableItems", "parameters", "schemas"]));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Section/SectionAccordion.vue2.js
var B6 = { class: "section-accordion-button-content" };
var y6 = {
  key: 0,
  class: "section-accordion-button-actions"
};
var D3 = {
  key: 0,
  class: "section-accordion-description"
};
var w4 = { class: "section-accordion-content-card" };
var A = defineComponent({
  __name: "SectionAccordion",
  props: {
    id: {},
    transparent: { type: Boolean }
  },
  setup(E9) {
    const i15 = ref(), u11 = useElementHover(i15);
    return (o4, N7) => (openBlock(), createBlock(x9, {
      id: o4.id,
      class: "section-wrapper"
    }, {
      default: withCtx(() => [
        createVNode(unref(N), {
          as: "section",
          class: normalizeClass(["section-accordion", { "section-accordion-transparent": o4.transparent }])
        }, {
          default: withCtx(({ open: r8 }) => [
            createVNode(unref(Q), {
              ref_key: "button",
              ref: i15,
              class: "section-accordion-button"
            }, {
              default: withCtx(() => [
                createBaseVNode("div", B6, [
                  renderSlot(o4.$slots, "title", {}, void 0, true)
                ]),
                o4.$slots.actions ? (openBlock(), createElementBlock("div", y6, [
                  renderSlot(o4.$slots, "actions", {
                    active: unref(u11) || r8
                  }, void 0, true)
                ])) : createCommentVNode("", true),
                createVNode(unref(m), {
                  class: "section-accordion-chevron size-5",
                  icon: r8 ? "ChevronDown" : "ChevronRight"
                }, null, 8, ["icon"])
              ]),
              _: 2
            }, 1536),
            createVNode(unref(V), { class: "section-accordion-content" }, {
              default: withCtx(() => [
                o4.$slots.description ? (openBlock(), createElementBlock("div", D3, [
                  renderSlot(o4.$slots, "description", {}, void 0, true)
                ])) : createCommentVNode("", true),
                createBaseVNode("div", w4, [
                  renderSlot(o4.$slots, "default", {}, void 0, true)
                ])
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 8, ["id"]));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Section/SectionAccordion.vue.js
var i11 = s5(A, [["__scopeId", "data-v-a371c135"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/ExampleResponses/ExampleResponse.vue2.js
var i12 = {
  key: 2,
  class: "empty-state"
};
var _9 = defineComponent({
  __name: "ExampleResponse",
  props: {
    response: {}
  },
  setup(u11) {
    return (e11, d18) => {
      var s19, t8, r8, a22;
      return (s19 = e11.response) != null && s19.example ? (openBlock(), createBlock(unref(T), {
        key: 0,
        class: "bg-b-2 -outline-offset-2",
        content: (t8 = e11.response) == null ? void 0 : t8.example,
        lang: "json"
      }, null, 8, ["content"])) : (r8 = e11.response) != null && r8.schema ? (openBlock(), createBlock(unref(T), {
        key: 1,
        class: "bg-b-2 -outline-offset-2",
        content: unref(getExampleFromSchema)((a22 = e11.response) == null ? void 0 : a22.schema, {
          emptyString: "string",
          mode: "read"
        }),
        lang: "json"
      }, null, 8, ["content"])) : (openBlock(), createElementBlock("div", i12, " No Body "));
    };
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/ExampleResponses/ExampleResponse.vue.js
var m26 = s5(_9, [["__scopeId", "data-v-8261a319"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Card/CardTabHeader.vue2.js
var g5 = defineComponent({
  __name: "CardTabHeader",
  emits: ["change"],
  setup(p19, { emit: s19 }) {
    const c8 = s19, n7 = (e11) => {
      c8("change", e11);
    };
    return (e11, _13) => (openBlock(), createBlock(e6, { class: "scalar-card-header scalar-card-header-tabs" }, {
      actions: withCtx(() => [
        renderSlot(e11.$slots, "actions", {}, void 0, true)
      ]),
      default: withCtx(() => [
        createVNode(unref(me), { onChange: n7 }, {
          default: withCtx(() => [
            createVNode(unref(pe), { class: "tab-list custom-scroll" }, {
              default: withCtx(() => [
                renderSlot(e11.$slots, "default", {}, void 0, true)
              ]),
              _: 3
            })
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Card/CardTabHeader.vue.js
var e9 = s5(g5, [["__scopeId", "data-v-03fdb072"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Card/CardTab.vue2.js
var i13 = defineComponent({
  __name: "CardTab",
  setup(m38) {
    return (t8, d18) => (openBlock(), createBlock(unref(xe), { as: "template" }, {
      default: withCtx(({ selected: a22 }) => [
        createBaseVNode("button", {
          class: normalizeClass(["tab", { "tab-selected": a22 }]),
          type: "button"
        }, [
          createBaseVNode("span", null, [
            renderSlot(t8.$slots, "default", {}, void 0, true)
          ])
        ], 2)
      ]),
      _: 3
    }));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Card/CardTab.vue.js
var m27 = s5(i13, [["__scopeId", "data-v-d0e07e65"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Card/CardFooter.vue2.js
var i14 = defineComponent({
  __name: "CardFooter",
  props: {
    muted: { type: Boolean },
    contrast: { type: Boolean },
    frameless: { type: Boolean },
    transparent: { type: Boolean },
    borderless: { type: Boolean }
  },
  setup(e11) {
    const o4 = e11;
    return (t8, m38) => (openBlock(), createBlock(d9, normalizeProps(guardReactiveProps(o4)), {
      default: withCtx(() => [
        renderSlot(t8.$slots, "default", {}, void 0, true)
      ]),
      _: 3
    }, 16));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Card/CardFooter.vue.js
var m28 = s5(i14, [["__scopeId", "data-v-7621d1be"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/ExampleRequest/TextSelect.vue.js
var g6 = { class: "text-select-label" };
var f13 = ["aria-controls", "tabindex", "value"];
var k10 = ["label"];
var y7 = ["value"];
var V8 = ["value"];
var S5 = defineComponent({
  __name: "TextSelect",
  props: {
    modelValue: {},
    options: {},
    controls: {}
  },
  emits: ["update:modelValue"],
  setup(i15) {
    const d18 = i15, c8 = computed(
      () => d18.options.flatMap((e11) => e11.options ?? e11).length
    );
    return (e11, n7) => (openBlock(), createElementBlock("label", {
      class: normalizeClass(["text-select", c8.value === 1 ? "text-select--single-option" : ""])
    }, [
      createBaseVNode("span", g6, [
        renderSlot(e11.$slots, "default")
      ]),
      createBaseVNode("select", {
        "aria-controls": e11.controls,
        tabindex: e11.options.length === 1 ? -1 : 0,
        value: e11.modelValue,
        onInput: n7[0] || (n7[0] = (t8) => e11.$emit("update:modelValue", t8.target.value))
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(e11.options, (t8) => (openBlock(), createElementBlock(Fragment, {
          key: t8.value
        }, [
          t8.options ? (openBlock(), createElementBlock("optgroup", {
            key: 0,
            label: t8.label
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(t8.options, (a22) => (openBlock(), createElementBlock("option", {
              key: a22.value,
              value: a22.value
            }, toDisplayString(a22.label), 9, y7))), 128))
          ], 8, k10)) : (openBlock(), createElementBlock("option", {
            key: t8.value,
            value: t8.value
          }, toDisplayString(t8.label), 9, V8))
        ], 64))), 128))
      ], 40, f13)
    ], 2));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/ExampleRequest/ExamplePicker.vue2.js
var O9 = defineComponent({
  __name: "ExamplePicker",
  props: {
    examples: {}
  },
  emits: ["update:modelValue"],
  setup(n7, { emit: u11 }) {
    const a22 = n7, i15 = u11, l11 = ref(Object.keys(a22.examples)[0]);
    function c8(e11) {
      e11 && (l11.value = e11);
    }
    watch(
      () => a22.examples,
      () => {
        c8(Object.keys(a22.examples)[0]);
      },
      { immediate: true }
    ), watch(
      l11,
      () => {
        l11.value && i15("update:modelValue", l11.value);
      },
      { immediate: true }
    );
    function o4(e11) {
      if (!e11)
        return "Select an example";
      const t8 = a22.examples[e11];
      return (t8 == null ? void 0 : t8.summary) ?? e11;
    }
    return (e11, t8) => (openBlock(), createBlock(S5, {
      modelValue: l11.value,
      "onUpdate:modelValue": t8[0] || (t8[0] = (m38) => l11.value = m38),
      class: "example-selector",
      options: Object.keys(e11.examples).map((m38) => ({
        label: o4(m38),
        value: m38
      }))
    }, {
      default: withCtx(() => [
        createVNode(f7, null, {
          default: withCtx(() => t8[1] || (t8[1] = [
            createTextVNode("Selected Example Values:")
          ])),
          _: 1
        }),
        createTextVNode(" " + toDisplayString(o4(l11.value)), 1)
      ]),
      _: 1
    }, 8, ["modelValue", "options"]));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/ExampleRequest/ExamplePicker.vue.js
var m29 = s5(O9, [["__scopeId", "data-v-a7e22e14"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/ExampleResponses/ExampleResponses.vue2.js
var Z3 = {
  key: 1,
  class: "scalar-card-checkbox"
};
var $3 = ["aria-controls"];
var z6 = { class: "scalar-card-container custom-scroll" };
var ee = {
  key: 1,
  class: "response-description"
};
var de2 = defineComponent({
  __name: "ExampleResponses",
  props: {
    responses: {}
  },
  setup(w9) {
    const n7 = useId(), { copyToClipboard: V11 } = useClipboard(), p19 = ref(), h10 = computed(() => Object.keys(w9.responses ?? {}).sort()), y11 = computed(
      () => !!l11.value.examples
    ), j8 = ref(0), i15 = computed(() => {
      var a22;
      const e11 = h10.value[j8.value];
      return (a22 = w9.responses) == null ? void 0 : a22[e11];
    }), l11 = computed(() => {
      var m38;
      const e11 = normalizeMimeTypeObject(
        (m38 = i15.value) == null ? void 0 : m38.content
      ), a22 = objectKeys(e11 ?? {});
      return (
        // OpenAPI 3.x
        (e11 == null ? void 0 : e11["application/json"]) ?? (e11 == null ? void 0 : e11["application/xml"]) ?? (e11 == null ? void 0 : e11["text/plain"]) ?? (e11 == null ? void 0 : e11["text/html"]) ?? (e11 == null ? void 0 : e11["*/*"]) ?? // Take the first key - in the future we may want to use the selected content type
        (e11 == null ? void 0 : e11[a22[0]]) ?? // Swagger 2.0
        i15.value
      );
    }), _13 = () => {
      if (!y11.value)
        return l11.value.example;
      if (Array.isArray(l11.value.examples))
        return l11.value.examples[0];
      const e11 = Object.keys(l11.value.examples)[0];
      return l11.value.examples[e11];
    }, b9 = computed(() => ({
      ...l11.value,
      example: y11.value && p19.value ? l11.value.examples[p19.value].value ?? l11.value.examples[p19.value] : _13()
    })), B12 = (e11) => {
      j8.value = e11, p19.value = void 0;
    }, S9 = ref(false);
    return (e11, a22) => h10.value.length ? (openBlock(), createBlock(unref(i7), {
      key: 0,
      "aria-label": "Example Responses",
      role: "region"
    }, {
      default: withCtx(() => {
        var m38;
        return [
          createVNode(unref(e9), {
            muted: "",
            x: "as",
            onChange: B12
          }, {
            actions: withCtx(() => {
              var t8, d18;
              return [
                (t8 = l11.value) != null && t8.example ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  class: "code-copy",
                  type: "button",
                  onClick: a22[0] || (a22[0] = () => {
                    var c8;
                    return unref(V11)((c8 = l11.value) == null ? void 0 : c8.example);
                  })
                }, [
                  createVNode(unref(m), {
                    icon: "Clipboard",
                    width: "12px"
                  })
                ])) : createCommentVNode("", true),
                (d18 = l11.value) != null && d18.schema ? (openBlock(), createElementBlock("label", Z3, [
                  a22[4] || (a22[4] = createTextVNode(" Show Schema ")),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": a22[1] || (a22[1] = (c8) => S9.value = c8),
                    "aria-controls": unref(n7),
                    class: "scalar-card-checkbox-input",
                    type: "checkbox"
                  }, null, 8, $3), [
                    [vModelCheckbox, S9.value]
                  ]),
                  a22[5] || (a22[5] = createBaseVNode("span", { class: "scalar-card-checkbox-checkmark" }, null, -1))
                ])) : createCommentVNode("", true)
              ];
            }),
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(h10.value, (t8) => (openBlock(), createBlock(unref(m27), {
                key: t8,
                "aria-controls": unref(n7)
              }, {
                default: withCtx(() => [
                  createVNode(f7, null, {
                    default: withCtx(() => a22[3] || (a22[3] = [
                      createTextVNode("Status:")
                    ])),
                    _: 1
                  }),
                  createTextVNode(" " + toDisplayString(t8), 1)
                ]),
                _: 2
              }, 1032, ["aria-controls"]))), 128))
            ]),
            _: 1
          }),
          createBaseVNode("div", z6, [
            createVNode(unref(d9), { muted: "" }, {
              default: withCtx(() => {
                var t8;
                return [
                  (t8 = l11.value) != null && t8.schema ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    S9.value && b9.value ? (openBlock(), createBlock(unref(T), {
                      key: 0,
                      id: unref(n7),
                      class: "-outline-offset-2",
                      content: b9.value,
                      lang: "json"
                    }, null, 8, ["id", "content"])) : (openBlock(), createBlock(m26, {
                      key: 1,
                      id: unref(n7),
                      response: b9.value
                    }, null, 8, ["id", "response"]))
                  ], 64)) : (openBlock(), createBlock(m26, {
                    key: 1,
                    id: unref(n7),
                    response: b9.value
                  }, null, 8, ["id", "response"]))
                ];
              }),
              _: 1
            })
          ]),
          (m38 = i15.value) != null && m38.description || y11.value ? (openBlock(), createBlock(unref(m28), {
            key: 0,
            class: "response-card-footer",
            muted: ""
          }, {
            default: withCtx(() => {
              var t8, d18;
              return [
                y11.value ? (openBlock(), createBlock(unref(m29), {
                  key: 0,
                  class: "response-example-selector",
                  examples: (t8 = l11.value) == null ? void 0 : t8.examples,
                  "onUpdate:modelValue": a22[2] || (a22[2] = (c8) => p19.value = c8)
                }, null, 8, ["examples"])) : (d18 = i15.value) != null && d18.description ? (openBlock(), createElementBlock("div", ee, [
                  createVNode(unref(_2), {
                    class: "markdown",
                    value: i15.value.description
                  }, null, 8, ["value"])
                ])) : createCommentVNode("", true)
              ];
            }),
            _: 1
          })) : createCommentVNode("", true)
        ];
      }),
      _: 1
    })) : createCommentVNode("", true);
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/ExampleResponses/ExampleResponses.vue.js
var m30 = s5(de2, [["__scopeId", "data-v-027e0301"]]);

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/RequestSection/helpers/filter-security-requirements.js
var c7 = (s19, m38 = [], n7 = {}) => {
  const a22 = new Set(
    s19.map((e11) => Object.keys(e11).sort().join(","))
  );
  return m38.reduce((e11, r8) => {
    const o4 = Array.isArray(r8) ? r8 : [r8], p19 = o4.map((t8) => {
      var i15;
      return (i15 = n7[t8]) == null ? void 0 : i15.nameKey;
    }).sort().join(",");
    return a22.has(p19) && e11.push(...o4.map((t8) => n7[t8]).filter(isDefined)), e11;
  }, []);
};

// node_modules/.pnpm/@scalar+helpers@0.0.4/node_modules/@scalar/helpers/dist/dom/freeze-element.js
var freezeElement = (element) => {
  if (!element) {
    return () => null;
  }
  const rect = element.getBoundingClientRect();
  const initialViewportTop = rect.top;
  let rafId = null;
  const observer = new MutationObserver((mutations) => {
    const shouldProcess = mutations.some(
      (mutation) => mutation.type === "childList" || mutation.type === "attributes" && (mutation.attributeName === "style" || mutation.attributeName === "class")
    );
    if (!shouldProcess) {
      return;
    }
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
    }
    rafId = requestAnimationFrame(() => {
      const newRect = element.getBoundingClientRect();
      const currentViewportTop = newRect.top;
      if (currentViewportTop !== initialViewportTop) {
        const diff2 = currentViewportTop - initialViewportTop;
        window.scrollBy(0, diff2);
      }
      rafId = null;
    });
  });
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["style", "class"],
    characterData: false
  });
  return () => {
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
    }
    observer.disconnect();
  };
};

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/legacy/stores/useExampleStore.js
var o3 = ref();
var t7 = ref();
var p15 = () => ({
  selectedExampleKey: o3,
  operationId: t7
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/ExampleRequest/ExampleRequest.vue2.js
var je2 = ["id"];
var Re = ["id"];
var we = {
  key: 0,
  class: "request-card-footer-addon"
};
var Je = { class: "request-header" };
var rt = defineComponent({
  __name: "ExampleRequest",
  props: {
    server: {},
    collection: {},
    operation: {},
    request: {},
    method: {},
    fallback: { type: Boolean },
    schemas: {}
  },
  setup(l11) {
    const { selectedExampleKey: M7, operationId: ae3 } = p15(), { requestExamples: b9, securitySchemes: A3, requestExampleMutators: $5 } = je(), le3 = f4(), {
      httpClient: u11,
      setHttpClient: re2,
      availableTargets: F6,
      httpTargetTitle: oe,
      httpClientTitle: se
    } = R2(), S9 = useId(), x14 = ref(false), k12 = inject(w3), y11 = inject(V6), T9 = computed(() => {
      var e11;
      return (e11 = y11 == null ? void 0 : y11.value) == null ? void 0 : e11.selectedType;
    }), P10 = computed(
      () => {
        var e11;
        return ((e11 = y11 == null ? void 0 : y11.value) == null ? void 0 : e11.hasDiscriminator) || false;
      }
    ), d18 = computed(() => {
      var t8;
      const e11 = ["x-custom-examples", "x-codeSamples", "x-code-samples"];
      for (const a22 of e11)
        if ((t8 = l11.operation) != null && t8[a22])
          return [...l11.operation[a22]];
      return [];
    }), o4 = ref(
      // Default to first custom example
      d18.value.length ? {
        targetKey: "customExamples",
        clientKey: 0
      } : (
        // Otherwise use the globally selected HTTP client
        {
          targetKey: u11.targetKey,
          clientKey: u11.clientKey
        }
      )
    );
    watch(u11, () => {
      o4.value = {
        targetKey: u11.targetKey,
        clientKey: u11.clientKey
      };
    });
    const X7 = computed(() => {
      const e11 = C11.value;
      return Object.keys(e11).length > 1;
    }), ne = () => {
      var h10, q7, E9;
      if (o4.value.targetKey === "customExamples")
        return ((h10 = d18.value[o4.value.clientKey]) == null ? void 0 : h10.source) ?? "";
      const e11 = u11.clientKey, t8 = u11.targetKey, a22 = l11.request || requestSchema.parse({
        uid: l11.operation.operationId || "temp-request",
        method: l11.method,
        path: l11.operation.path,
        parameters: l11.operation.parameters || [],
        requestBody: l11.operation.requestBody,
        examples: [],
        type: "request",
        selectedSecuritySchemeUids: [],
        selectedServerUid: "",
        servers: [],
        summary: l11.operation.summary || "Example Request"
      });
      let i15 = b9[((E9 = (q7 = l11.request) == null ? void 0 : q7.examples) == null ? void 0 : E9[0]) ?? ""];
      if (!i15) {
        const m38 = C11.value, B12 = Object.keys(m38)[0];
        i15 = createExampleFromRequest(a22, B12);
      }
      const p19 = c7(
        l11.operation.security || l11.collection.security,
        l11.collection.selectedSecuritySchemeUids,
        A3
      ), [f15, O11] = f(t8, e11, {
        operation: l11.request,
        example: i15,
        server: l11.server,
        securitySchemes: p19
      });
      return f15 ? f15.message ?? "" : O11;
    }, z10 = computed(() => {
      try {
        return ne();
      } catch (e11) {
        return console.error("[generateSnippet]", e11), "";
      }
    }), C11 = computed(() => {
      var a22;
      if (!isDereferenced(l11.operation.requestBody))
        return {};
      const e11 = ((a22 = l11.operation.requestBody) == null ? void 0 : a22.content) ?? {}, t8 = Object.values(e11)[0];
      return (t8 == null ? void 0 : t8.examples) ?? {};
    }), ue4 = computed(() => {
      var t8, a22;
      const e11 = (
        // Specified language
        ((t8 = o4.value) == null ? void 0 : t8.targetKey) === "customExamples" ? ((a22 = d18.value[o4.value.clientKey]) == null ? void 0 : a22.lang) ?? "plaintext" : (
          // Or language for the globally selected HTTP client
          u11.targetKey
        )
      );
      return e11 === "shell" && z10.value.includes("curl") ? "curl" : e11 === "Objective-C" ? "objc" : e11;
    }), ie3 = computed(
      () => Object.values(A3).flatMap((e11) => e11.type === "apiKey" ? e11.value : (e11 == null ? void 0 : e11.type) === "http" ? [
        e11.token,
        e11.password,
        btoa(`${e11.username}:${e11.password}`)
      ] : e11.type === "oauth2" ? Object.values(e11.flows).map((t8) => t8.token) : [])
    ), ce2 = computed(() => {
      const e11 = F6.value.map((t8) => ({
        value: t8.key,
        label: t8.title,
        options: t8.clients.map((a22) => ({
          value: JSON.stringify({
            targetKey: t8.key,
            clientKey: a22.client
          }),
          label: a22.title
        }))
      }));
      return d18.value.length && e11.unshift({
        value: "customExamples",
        label: "Examples",
        options: d18.value.map((t8, a22) => ({
          value: JSON.stringify({
            targetKey: "customExamples",
            clientKey: a22
          }),
          label: t8.label ?? t8.lang ?? `Example #${a22 + 1}`
        }))
      }), e11;
    }), V11 = ref(null);
    function me2(e11) {
      const t8 = JSON.parse(e11);
      if (V11.value) {
        const a22 = freezeElement(V11.value.$el);
        setTimeout(() => {
          a22();
        }, 300);
      }
      t8.targetKey === "customExamples" || o4.value.targetKey === "customExamples" && t8.targetKey === u11.targetKey && t8.clientKey === u11.clientKey ? o4.value = t8 : re2(t8);
    }
    function de4(e11) {
      var i15, p19;
      M7.value = e11, ae3.value = l11.operation.operationId;
      const t8 = b9[((p19 = (i15 = l11.request) == null ? void 0 : i15.examples) == null ? void 0 : p19[0]) ?? ""], a22 = C11.value[e11];
      if (t8 && (a22 != null && a22.value))
        try {
          $5.edit(
            t8.uid,
            "body.raw.value",
            JSON.stringify(a22.value, null, 2)
          );
        } catch (f15) {
          console.error("[handleExampleUpdate]", f15);
        }
    }
    onMounted(() => {
      P10.value && T9.value && !x14.value && L6(T9.value);
    });
    const L6 = (e11) => {
      var t8, a22, i15, p19, f15, O11, h10, q7, E9;
      if (!x14.value)
        try {
          x14.value = true;
          const m38 = b9[l11.operation.examples[0]];
          if (m38 && (k12 != null && k12.generateExampleValue)) {
            const B12 = (a22 = (t8 = m38.body) == null ? void 0 : t8.raw) != null && a22.value ? JSON.parse(m38.body.raw.value) : void 0, j8 = k12.generateExampleValue(
              Array.isArray(B12)
            );
            if ($5.edit(
              m38.uid,
              "body.raw.value",
              JSON.stringify(j8, null, 2)
            ), (p19 = (i15 = l11.request) == null ? void 0 : i15.examples) != null && p19[0]) {
              const v11 = b9[(O11 = (f15 = l11.request) == null ? void 0 : f15.examples) == null ? void 0 : O11[0]];
              v11 && $5.edit(
                v11.uid,
                "body.raw.value",
                JSON.stringify(j8, null, 2)
              );
            }
            if ((E9 = (q7 = (h10 = l11.operation.requestBody) == null ? void 0 : h10.content) == null ? void 0 : q7["application/json"]) != null && E9.examples) {
              const v11 = l11.operation.requestBody.content["application/json"].examples;
              Object.keys(v11).forEach((W8) => {
                var G7;
                (G7 = v11[W8]) != null && G7.value && (v11[W8].value = j8);
              });
            }
          }
        } catch (m38) {
          console.error("[handleDiscriminatorChange]", m38);
        } finally {
          x14.value = false;
        }
    };
    return watch(T9, (e11) => {
      e11 && P10.value && !x14.value && L6();
    }), (e11, t8) => unref(F6).length || d18.value.length ? (openBlock(), createBlock(unref(i7), {
      key: 0,
      "aria-labelledby": `${unref(S9)}-header`,
      class: "dark-mode",
      ref_key: "elem",
      ref: V11,
      role: "region"
    }, {
      default: withCtx(() => [
        createVNode(unref(e6), { muted: "" }, {
          actions: withCtx(() => [
            createVNode(S5, {
              class: "request-client-picker",
              controls: `${unref(S9)}-example`,
              modelValue: JSON.stringify(o4.value),
              options: ce2.value,
              "onUpdate:modelValue": me2
            }, {
              default: withCtx(() => [
                o4.value.targetKey === "customExamples" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  createVNode(f7, null, {
                    default: withCtx(() => t8[1] || (t8[1] = [
                      createTextVNode("Selected Example:")
                    ])),
                    _: 1
                  }),
                  createTextVNode(" " + toDisplayString(d18.value[o4.value.clientKey].label ?? "Example"), 1)
                ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createVNode(f7, null, {
                    default: withCtx(() => t8[2] || (t8[2] = [
                      createTextVNode("Selected HTTP client:")
                    ])),
                    _: 1
                  }),
                  createTextVNode(" " + toDisplayString(unref(oe)) + " " + toDisplayString(unref(se)), 1)
                ], 64))
              ]),
              _: 1
            }, 8, ["controls", "modelValue", "options"])
          ]),
          default: withCtx(() => [
            createBaseVNode("div", {
              id: `${unref(S9)}-header`,
              class: "request-header"
            }, [
              createVNode(f7, null, {
                default: withCtx(() => t8[0] || (t8[0] = [
                  createTextVNode("Request Example for")
                ])),
                _: 1
              }),
              createVNode(unref(C4), {
                as: "span",
                class: "request-method",
                method: e11.method
              }, null, 8, ["method"]),
              renderSlot(e11.$slots, "header", {}, void 0, true)
            ], 8, je2)
          ]),
          _: 3
        }),
        createVNode(unref(d9), {
          borderless: "",
          class: "request-editor-section custom-scroll",
          frameless: ""
        }, {
          default: withCtx(() => [
            createBaseVNode("div", {
              id: `${unref(S9)}-example`,
              class: "code-snippet"
            }, [
              createVNode(unref(T), {
                class: "bg-b-2 -outline-offset-2",
                content: z10.value,
                hideCredentials: ie3.value,
                lang: ue4.value,
                lineNumbers: ""
              }, null, 8, ["content", "hideCredentials", "lang"])
            ], 8, Re)
          ]),
          _: 1
        }),
        (X7.value || !unref(le3).hideTestRequestButton) && e11.$slots.footer ? (openBlock(), createBlock(unref(m28), {
          key: 0,
          class: "request-card-footer",
          contrast: ""
        }, {
          default: withCtx(() => [
            X7.value ? (openBlock(), createElementBlock("div", we, [
              createVNode(m29, {
                class: "request-example-selector",
                examples: C11.value,
                modelValue: unref(M7),
                "onUpdate:modelValue": de4
              }, null, 8, ["examples", "modelValue"])
            ])) : createCommentVNode("", true),
            renderSlot(e11.$slots, "footer", {}, void 0, true)
          ]),
          _: 3
        })) : createCommentVNode("", true)
      ]),
      _: 3
    }, 8, ["aria-labelledby"])) : e11.fallback ? (openBlock(), createBlock(unref(i7), {
      key: 1,
      class: "dark-mode"
    }, {
      default: withCtx(() => [
        createVNode(unref(d9), { class: "request-card-simple" }, {
          default: withCtx(() => [
            createBaseVNode("div", Je, [
              createVNode(unref(C4), {
                as: "span",
                class: "request-method",
                method: e11.method
              }, null, 8, ["method"]),
              renderSlot(e11.$slots, "header", {}, void 0, true)
            ]),
            renderSlot(e11.$slots, "footer", {}, void 0, true)
          ]),
          _: 3
        })
      ]),
      _: 3
    })) : createCommentVNode("", true);
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/ExampleRequest/ExampleRequest.vue.js
var p16 = s5(rt, [["__scopeId", "data-v-3a3b2243"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/TestRequestButton/TestRequestButton.vue2.js
var v8 = ["method"];
var S6 = defineComponent({
  __name: "TestRequestButton",
  props: {
    operation: {}
  },
  setup(o4) {
    const { client: t8 } = a6(), p19 = f4(), l11 = computed(
      () => p19.value.hideTestRequestButton !== true
    ), m38 = () => {
      var e11;
      o4.operation && ((e11 = t8 == null ? void 0 : t8.value) != null && e11.open) && t8.value.open({
        requestUid: o4.operation.uid
      });
    };
    return (e11, n7) => e11.operation && l11.value ? (openBlock(), createElementBlock("button", {
      key: 0,
      class: "show-api-client-button",
      method: e11.operation.method,
      type: "button",
      onClick: withModifiers(m38, ["stop"])
    }, [
      createVNode(unref(m), {
        icon: "Play",
        size: "sm"
      }),
      n7[0] || (n7[0] = createBaseVNode("span", null, "Test Request", -1)),
      createVNode(f7, null, {
        default: withCtx(() => [
          createTextVNode("(" + toDisplayString(e11.operation.method) + " " + toDisplayString(e11.operation.path) + ")", 1)
        ]),
        _: 1
      })
    ], 8, v8)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
      createTextVNode(" ")
    ], 64));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/TestRequestButton/TestRequestButton.vue.js
var a15 = s5(S6, [["__scopeId", "data-v-4263a1c2"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/Operation/layouts/ClassicLayout.vue2.js
var M5 = { class: "operation-title" };
var j4 = { class: "operation-details" };
var F3 = { class: "endpoint-label" };
var G4 = { class: "endpoint-label-path" };
var H4 = { class: "endpoint-label-name" };
var J2 = { class: "endpoint-content" };
var K4 = { class: "operation-details-card" };
var Q4 = { class: "operation-details-card-item" };
var X5 = { class: "operation-details-card-item" };
var ue3 = defineComponent({
  __name: "ClassicLayout",
  props: {
    collection: {},
    server: {},
    request: {},
    transformedOperation: {},
    schemas: {}
  },
  emits: ["update:modelValue"],
  setup(Y5, { emit: O11 }) {
    const { copyToClipboard: v11 } = useClipboard(), y11 = f4(), b9 = O11, d18 = (e11) => {
      b9("update:modelValue", e11);
    };
    return (e11, s19) => {
      var m38;
      return openBlock(), createBlock(unref(i11), {
        id: e11.transformedOperation.id,
        class: "reference-endpoint",
        transparent: ""
      }, createSlots({
        title: withCtx(() => [
          createBaseVNode("div", M5, [
            createBaseVNode("div", j4, [
              createVNode(unref(C4), {
                class: "endpoint-type",
                method: e11.transformedOperation.httpVerb,
                short: ""
              }, null, 8, ["method"]),
              createVNode(unref(m16), {
                id: e11.transformedOperation.id,
                class: "endpoint-anchor"
              }, {
                default: withCtx(() => [
                  createBaseVNode("h3", F3, [
                    createBaseVNode("div", G4, [
                      createVNode(c6, {
                        deprecated: unref(b4)(e11.transformedOperation.information),
                        path: e11.transformedOperation.path
                      }, null, 8, ["deprecated", "path"])
                    ]),
                    createBaseVNode("div", H4, toDisplayString(e11.transformedOperation.name), 1),
                    unref(m7)(e11.transformedOperation.information) ? (openBlock(), createBlock(unref(l10), {
                      key: 0,
                      class: normalizeClass(
                        unref(E4)(e11.transformedOperation.information)
                      )
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(m7)(e11.transformedOperation.information)), 1)
                      ]),
                      _: 1
                    }, 8, ["class"])) : createCommentVNode("", true),
                    e11.transformedOperation.isWebhook ? (openBlock(), createBlock(unref(l10), {
                      key: 1,
                      class: "font-code text-green flex w-fit items-center justify-center gap-1"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(_), { weight: "bold" }),
                        s19[1] || (s19[1] = createTextVNode("Webhook "))
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ])
                ]),
                _: 1
              }, 8, ["id"])
            ])
          ])
        ]),
        actions: withCtx(({ active: g11 }) => {
          var l11;
          return [
            g11 && e11.request ? (openBlock(), createBlock(unref(a15), {
              key: 0,
              operation: e11.request
            }, null, 8, ["operation"])) : (l11 = unref(y11)) != null && l11.hideTestRequestButton ? createCommentVNode("", true) : (openBlock(), createBlock(unref(m), {
              key: 1,
              class: "endpoint-try-hint size-6",
              icon: "Play",
              thickness: "1.75px"
            })),
            createVNode(unref(y), {
              class: "endpoint-copy p-0.5",
              icon: "Clipboard",
              label: "Copy endpoint URL",
              size: "xs",
              variant: "ghost",
              onClick: s19[0] || (s19[0] = withModifiers((Z5) => unref(v11)(e11.transformedOperation.path), ["stop"]))
            })
          ];
        }),
        default: withCtx(() => [
          createBaseVNode("div", J2, [
            createBaseVNode("div", K4, [
              createBaseVNode("div", Q4, [
                createVNode(C7, {
                  operation: e11.transformedOperation.information,
                  schemas: e11.schemas,
                  "onUpdate:modelValue": d18
                }, null, 8, ["operation", "schemas"])
              ]),
              createBaseVNode("div", X5, [
                createVNode(d15, {
                  collapsableItems: false,
                  responses: e11.transformedOperation.information.responses,
                  schemas: e11.schemas
                }, null, 8, ["responses", "schemas"])
              ])
            ]),
            createVNode(unref(m30), {
              responses: e11.transformedOperation.information.responses
            }, null, 8, ["responses"]),
            createVNode(unref(p16), {
              request: e11.request,
              method: e11.transformedOperation.httpVerb,
              collection: e11.collection,
              operation: e11.transformedOperation.information,
              server: e11.server,
              "onUpdate:modelValue": d18
            }, null, 8, ["request", "method", "collection", "operation", "server"])
          ])
        ]),
        _: 2
      }, [
        (m38 = e11.transformedOperation.information) != null && m38.description ? {
          name: "description",
          fn: withCtx(() => [
            createVNode(unref(_2), {
              value: e11.transformedOperation.information.description,
              withImages: "",
              withAnchors: "",
              transformType: "heading",
              anchorPrefix: e11.transformedOperation.id
            }, null, 8, ["value", "anchorPrefix"])
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["id"]);
    };
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/Operation/layouts/ClassicLayout.vue.js
var s18 = s5(ue3, [["__scopeId", "data-v-bbf0f07b"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/Operation/components/callbacks/Callback.vue2.js
var y8 = {
  key: 0,
  class: "group"
};
var _10 = { class: "font-code bg-b-1 callback-sticky-offset sticky flex cursor-pointer flex-row items-center gap-2 border-t py-3 text-sm group-open:flex-wrap" };
var q3 = { class: "text-c-1 truncate leading-3 group-open:whitespace-normal" };
var B8 = { class: "text-c-2" };
var v9 = { class: "callback-operation-container flex flex-col gap-2" };
var I4 = defineComponent({
  __name: "Callback",
  props: {
    callback: {},
    collection: {},
    method: {},
    name: {},
    schemas: {},
    url: {}
  },
  setup(t8) {
    const c8 = computed(
      () => schemaModel({ ...t8.callback, path: t8.url, method: t8.method }, requestSchema, false)
    );
    return (e11, x14) => e11.collection && c8.value ? (openBlock(), createElementBlock("details", y8, [
      createBaseVNode("summary", _10, [
        createVNode(unref(L), { class: "text-c-3 group-hover:text-c-1 absolute -left-5 size-4 transition-transform group-open:rotate-90" }),
        createVNode(unref(C4), {
          as: "span",
          class: "request-method",
          method: e11.method
        }, null, 8, ["method"]),
        createBaseVNode("div", q3, [
          createTextVNode(toDisplayString(e11.name) + " ", 1),
          createBaseVNode("span", B8, toDisplayString(e11.url), 1)
        ])
      ]),
      createBaseVNode("div", v9, [
        createVNode(C7, {
          requestBody: e11.callback.requestBody,
          parameters: e11.callback.parameters,
          schemas: e11.schemas
        }, null, 8, ["requestBody", "parameters", "schemas"]),
        createVNode(d15, {
          collapsableItems: false,
          responses: e11.callback.responses,
          schemas: e11.schemas
        }, null, 8, ["responses", "schemas"])
      ])
    ])) : createCommentVNode("", true);
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/Operation/components/callbacks/Callback.vue.js
var m31 = s5(I4, [["__scopeId", "data-v-f1d7309a"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/Operation/components/callbacks/Callbacks.vue.js
var f14 = { class: "mt-6 gap-3" };
var g8 = defineComponent({
  __name: "Callbacks",
  props: {
    callbacks: {},
    collection: {},
    schemas: {}
  },
  setup(h10) {
    return (c8, o4) => (openBlock(), createElementBlock("div", f14, [
      o4[0] || (o4[0] = createBaseVNode("div", { class: "text-c-1 my-3 text-lg font-medium" }, "Callbacks", -1)),
      (openBlock(true), createElementBlock(Fragment, null, renderList(c8.callbacks, (a22, r8) => (openBlock(), createElementBlock(Fragment, { key: r8 }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(a22, (s19, m38) => (openBlock(), createElementBlock(Fragment, null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(s19, (u11, i15) => (openBlock(), createBlock(m31, {
            callback: u11,
            collection: c8.collection,
            method: i15,
            name: r8,
            schemas: c8.schemas,
            url: m38
          }, null, 8, ["callback", "collection", "method", "name", "schemas", "url"]))), 256))
        ], 64))), 256))
      ], 64))), 128))
    ]));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/Operation/layouts/ModernLayout.vue2.js
var j5 = { class: "operation-details" };
var z7 = { class: "examples" };
var pe3 = defineComponent({
  __name: "ModernLayout",
  props: {
    collection: {},
    server: {},
    request: {},
    transformedOperation: {},
    schemas: {}
  },
  emits: ["update:modelValue"],
  setup(F6, { emit: g11 }) {
    const y11 = g11, d18 = useId(), k12 = f4(), p19 = (e11) => {
      y11("update:modelValue", e11);
    };
    return (e11, f15) => (openBlock(), createBlock(unref(p11), {
      id: e11.transformedOperation.id,
      "aria-labelledby": unref(d18),
      label: e11.transformedOperation.name,
      tabindex: "-1"
    }, {
      default: withCtx(() => [
        createVNode(unref(p12), {
          loading: unref(k12).isLoading
        }, {
          default: withCtx(() => [
            unref(m7)(e11.transformedOperation.information) ? (openBlock(), createBlock(unref(l10), {
              key: 0,
              class: normalizeClass(unref(E4)(e11.transformedOperation.information))
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(m7)(e11.transformedOperation.information)), 1)
              ]),
              _: 1
            }, 8, ["class"])) : createCommentVNode("", true),
            e11.transformedOperation.isWebhook ? (openBlock(), createBlock(unref(l10), {
              key: 1,
              class: "font-code text-green flex w-fit items-center justify-center gap-1"
            }, {
              default: withCtx(() => [
                createVNode(unref(_), { weight: "bold" }),
                f15[0] || (f15[0] = createTextVNode("Webhook "))
              ]),
              _: 1
            })) : createCommentVNode("", true),
            createBaseVNode("div", {
              class: normalizeClass(
                unref(b4)(e11.transformedOperation.information) ? "deprecated" : ""
              )
            }, [
              createVNode(unref(a9), null, {
                default: withCtx(() => [
                  createVNode(unref(m16), {
                    id: e11.transformedOperation.id
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(e5), {
                        id: unref(d18),
                        level: 3
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(e11.transformedOperation.name), 1)
                        ]),
                        _: 1
                      }, 8, ["id"])
                    ]),
                    _: 1
                  }, 8, ["id"])
                ]),
                _: 1
              })
            ], 2),
            createVNode(unref(a10), null, {
              default: withCtx(() => [
                createVNode(unref(f9), null, {
                  default: withCtx(() => [
                    createBaseVNode("div", j5, [
                      createVNode(unref(_2), {
                        value: e11.transformedOperation.information.description,
                        withImages: "",
                        withAnchors: "",
                        transformType: "heading",
                        anchorPrefix: e11.transformedOperation.id
                      }, null, 8, ["value", "anchorPrefix"]),
                      createVNode(C7, {
                        parameters: e11.transformedOperation.information.parameters,
                        requestBody: e11.transformedOperation.information.requestBody,
                        schemas: e11.schemas,
                        "onUpdate:modelValue": p19
                      }, null, 8, ["parameters", "requestBody", "schemas"]),
                      createVNode(d15, {
                        responses: e11.transformedOperation.information.responses,
                        schemas: e11.schemas
                      }, null, 8, ["responses", "schemas"]),
                      createVNode(unref(E), null, {
                        default: withCtx(() => [
                          e11.transformedOperation.information.callbacks ? (openBlock(), createBlock(g8, {
                            key: 0,
                            callbacks: e11.transformedOperation.information.callbacks,
                            collection: e11.collection,
                            schemas: e11.schemas
                          }, null, 8, ["callbacks", "collection", "schemas"])) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                }),
                createVNode(unref(f9), null, {
                  default: withCtx(() => [
                    createBaseVNode("div", z7, [
                      createVNode(unref(E), null, {
                        default: withCtx(() => [
                          createVNode(unref(p16), {
                            request: e11.request,
                            method: e11.transformedOperation.httpVerb,
                            collection: e11.collection,
                            fallback: "",
                            operation: e11.transformedOperation.information,
                            server: e11.server,
                            schemas: e11.schemas,
                            "onUpdate:modelValue": p19
                          }, createSlots({
                            header: withCtx(() => [
                              createVNode(c6, {
                                class: "example-path",
                                deprecated: e11.transformedOperation.information.deprecated,
                                path: e11.transformedOperation.path
                              }, null, 8, ["deprecated", "path"])
                            ]),
                            _: 2
                          }, [
                            e11.request ? {
                              name: "footer",
                              fn: withCtx(() => [
                                createVNode(unref(a15), { operation: e11.request }, null, 8, ["operation"])
                              ]),
                              key: "0"
                            } : void 0
                          ]), 1032, ["request", "method", "collection", "operation", "server", "schemas"])
                        ]),
                        _: 1
                      }),
                      createVNode(unref(E), null, {
                        default: withCtx(() => [
                          createVNode(unref(m30), {
                            responses: e11.transformedOperation.information.responses,
                            style: { "margin-top": "12px" }
                          }, null, 8, ["responses"])
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }, 8, ["id", "aria-labelledby", "label"]));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/Operation/layouts/ModernLayout.vue.js
var m32 = s5(pe3, [["__scopeId", "data-v-ae05c30d"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/Operation/Operation.vue.js
var D5 = defineComponent({
  __name: "Operation",
  props: {
    layout: { default: "modern" },
    transformedOperation: {},
    collection: {},
    server: {},
    schemas: {}
  },
  setup(r8) {
    const s19 = je(), { handleDiscriminatorChange: l11 } = B4(
      r8.transformedOperation,
      r8.schemas
    ), { operation: o4 } = h7({
      store: s19,
      collection: r8.collection,
      location: m17([
        "paths",
        r8.transformedOperation.path,
        r8.transformedOperation.httpVerb.toLowerCase()
      ])
    }), i15 = computed(() => {
      var e11;
      if (!o4.value)
        return r8.server;
      if ((e11 = o4.value) != null && e11.selectedServerUid) {
        const a22 = s19.servers[o4.value.selectedServerUid];
        if (a22)
          return a22;
      }
      return r8.server;
    });
    return (e11, a22) => e11.collection ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
      e11.layout === "classic" ? (openBlock(), createBlock(s18, {
        key: 0,
        collection: e11.collection,
        request: unref(o4),
        transformedOperation: e11.transformedOperation,
        schemas: e11.schemas,
        server: i15.value,
        "onUpdate:modelValue": unref(l11)
      }, null, 8, ["collection", "request", "transformedOperation", "schemas", "server", "onUpdate:modelValue"])) : (openBlock(), createBlock(m32, {
        key: 1,
        collection: e11.collection,
        request: unref(o4),
        transformedOperation: e11.transformedOperation,
        schemas: e11.schemas,
        server: i15.value,
        "onUpdate:modelValue": unref(l11)
      }, null, 8, ["collection", "request", "transformedOperation", "schemas", "server", "onUpdate:modelValue"]))
    ], 64)) : createCommentVNode("", true);
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/Lazy/Loading.vue.js
var C8 = ref(false);
var pe4 = defineComponent({
  __name: "Loading",
  props: {
    collection: {},
    server: {},
    layout: { default: "modern" },
    parsedSpec: {}
  },
  setup(L6) {
    const u11 = L6, _13 = ref(false), w9 = ref([]), I10 = ref([]), { getModelId: O11, getSectionId: B12, getTagId: N7, hash: r8, isIntersectionEnabled: g11 } = T2(), z10 = ref(
      !C8.value && u11.layout !== "classic" && r8.value
    );
    watch(
      () => {
        var t8;
        return (t8 = u11.parsedSpec.tags) == null ? void 0 : t8.length;
      },
      (t8) => {
        var e11, d18;
        if (!r8.value || typeof t8 != "number" || !u11.parsedSpec.tags)
          return;
        const n7 = B12();
        if (n7.startsWith("tag")) {
          let a22 = 0;
          const c8 = ((e11 = u11.parsedSpec.tags) == null ? void 0 : e11.findIndex(
            (i15) => N7(i15) === n7
          )) ?? 0;
          a22 = (d18 = u11.parsedSpec.tags[c8]) == null ? void 0 : d18.operations.findIndex(
            ({ id: i15 }) => i15 === r8.value
          );
          const s19 = u11.parsedSpec.tags[c8];
          if (!s19)
            return;
          s19.name !== "default" && (_13.value = n7 !== r8.value && n7.startsWith("tag")), w9.value.push({
            ...s19,
            lazyOperations: s19.operations.slice(a22, a22 + 2).map((i15) => ({
              ...i15,
              // Prefix the id with lazy- to avoid collisions with the real ids
              id: "lazy-" + i15.id
            }))
          }), r8.value.includes("/description/") && (typeof window < "u" && scrollToId(r8.value), setTimeout(() => g11.value = true, 1e3));
        } else if (r8.value.startsWith("model")) {
          const a22 = Object.keys(y2(u11.parsedSpec) ?? {}), [, c8] = r8.value.toLowerCase().split("/"), s19 = r8.value === "models" ? 0 : a22.findIndex((i15) => i15.toLowerCase() === c8);
          if (s19 === -1)
            return;
          I10.value = a22.slice(s19, s19 + 3);
        } else
          typeof window < "u" && scrollToId(r8.value), setTimeout(() => g11.value = true, 1e3);
      },
      { immediate: true }
    );
    const M7 = e3.on(({ id: t8 }) => {
      const n7 = r8.value;
      !n7 || t8 !== n7 || (M7(), setTimeout(() => {
        typeof window < "u" && scrollToId(n7), z10.value = false, C8.value = true, setTimeout(() => {
          g11.value = true;
        }, 1e3);
      }, 300));
    });
    return onMounted(() => {
      r8.value || (C8.value = true, setTimeout(() => {
        g11.value = true;
      }, 1e3));
    }), (t8, n7) => withDirectives((openBlock(), createElementBlock("div", {
      class: normalizeClass(["references-loading", {
        "references-loading-hidden-tag": _13.value,
        "references-loading-top-spacer": w9.value.length
      }])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(w9.value, (e11, d18) => (openBlock(), createElementBlock(Fragment, {
        key: e11.name + d18
      }, [
        e11.operations && e11.operations.length > 0 ? (openBlock(), createBlock(unref(f10), {
          key: 0,
          collection: t8.collection,
          spec: t8.parsedSpec,
          tag: e11
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(e11.lazyOperations, (a22) => (openBlock(), createBlock(unref(D5), {
              key: a22.id,
              collection: t8.collection,
              layout: t8.layout,
              server: t8.server,
              transformedOperation: a22
            }, null, 8, ["collection", "layout", "server", "transformedOperation"]))), 128))
          ]),
          _: 2
        }, 1032, ["collection", "spec", "tag"])) : createCommentVNode("", true)
      ], 64))), 128)),
      I10.value.length ? (openBlock(), createBlock(unref(l9), { key: 0 }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(I10.value, (e11) => (openBlock(), createBlock(unref(p11), {
            key: e11,
            label: e11
          }, {
            default: withCtx(() => {
              var d18;
              return [
                (d18 = unref(y2)(t8.parsedSpec)) != null && d18[e11] ? (openBlock(), createBlock(unref(p12), { key: 0 }, {
                  default: withCtx(() => {
                    var a22;
                    return [
                      createVNode(unref(a9), null, {
                        default: withCtx(() => [
                          createVNode(unref(m16), {
                            id: "lazy-" + unref(O11)({ name: e11 })
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(e5), { level: 2 }, {
                                default: withCtx(() => {
                                  var c8;
                                  return [
                                    createTextVNode(toDisplayString(((c8 = unref(y2)(t8.parsedSpec)) == null ? void 0 : c8[e11]).title ?? e11), 1)
                                  ];
                                }),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["id"])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(a12), {
                        name: e11,
                        noncollapsible: "",
                        value: (a22 = unref(y2)(t8.parsedSpec)) == null ? void 0 : a22[e11]
                      }, null, 8, ["name", "value"])
                    ];
                  }),
                  _: 2
                }, 1024)) : createCommentVNode("", true)
              ];
            }),
            _: 2
          }, 1032, ["label"]))), 128))
        ]),
        _: 1
      })) : createCommentVNode("", true)
    ], 2)), [
      [vShow, z10.value]
    ]);
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/DownloadLink/DownloadLink.vue2.js
var B9 = {
  key: 0,
  class: "download-container group"
};
var I5 = defineComponent({
  __name: "DownloadLink",
  props: {
    title: {}
  },
  setup(a22) {
    const m38 = f4(), p19 = new BananaSlug(), f15 = computed(() => p19.slug(a22.title ?? "")), e11 = (n7) => {
      L2.emit({ id: "", filename: f15.value, format: n7 });
    };
    return (n7, o4) => {
      var l11;
      return (l11 = unref(m38)) != null && l11.hideDownloadButton ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", B9, [
        createBaseVNode("button", {
          type: "button",
          class: "download-button",
          onClick: o4[0] || (o4[0] = withModifiers((g11) => e11("json"), ["prevent"])),
          variant: "ghost"
        }, [
          o4[3] || (o4[3] = createBaseVNode("span", null, " Download OpenAPI Document ", -1)),
          createVNode(l10, { class: "extension hidden group-hover:flex" }, {
            default: withCtx(() => o4[2] || (o4[2] = [
              createTextVNode("json")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("button", {
          type: "button",
          class: "download-button",
          onClick: o4[1] || (o4[1] = withModifiers((g11) => e11("yaml"), ["prevent"])),
          variant: "ghost"
        }, [
          o4[5] || (o4[5] = createBaseVNode("span", null, " Download OpenAPI Document ", -1)),
          createVNode(l10, { class: "extension hidden group-hover:flex" }, {
            default: withCtx(() => o4[4] || (o4[4] = [
              createTextVNode("yaml")
            ])),
            _: 1
          })
        ])
      ]));
    };
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/DownloadLink/DownloadLink.vue.js
var m33 = s5(I5, [["__scopeId", "data-v-3c00dd17"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/Introduction/Description.vue2.js
var F4 = {
  key: 0,
  class: "introduction-description"
};
var U5 = defineComponent({
  __name: "Description",
  props: {
    value: {}
  },
  setup(m38) {
    const o4 = m38, p19 = computed(() => {
      if (!o4.value)
        return [];
      const e11 = new BananaSlug();
      return splitContent(o4.value).map((t8) => {
        const [r8] = getHeadings(t8);
        return {
          id: r8 ? l11({
            ...r8,
            slug: e11.slug(r8.value)
          }) : void 0,
          content: t8
        };
      });
    }), { getHeadingId: l11, getFullHash: g11, isIntersectionEnabled: f15, replaceUrlState: v11 } = T2();
    function h10(e11 = "") {
      f15.value && v11(e11);
    }
    const _13 = new BananaSlug(), k12 = (e11) => (e11.data = {
      hProperties: {
        id: l11({
          depth: e11.depth,
          value: e11.children[0].value,
          slug: _13.slug(e11.children[0].value)
        })
      }
    }, e11);
    return (e11, y11) => e11.value ? (openBlock(), createElementBlock("div", F4, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(p19.value, (t8) => (openBlock(), createElementBlock(Fragment, {
        key: t8.id
      }, [
        t8.id ? (openBlock(), createBlock(x9, {
          key: 0,
          id: unref(g11)(t8.id),
          class: "introduction-description-heading",
          onIntersecting: () => h10(t8.id)
        }, {
          default: withCtx(() => [
            createVNode(unref(_2), {
              transform: k12,
              transformType: "heading",
              value: t8.content
            }, null, 8, ["value"])
          ]),
          _: 2
        }, 1032, ["id", "onIntersecting"])) : (openBlock(), createBlock(unref(_2), {
          key: 1,
          value: t8.content,
          withImages: ""
        }, null, 8, ["value"]))
      ], 64))), 128))
    ])) : createCommentVNode("", true);
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/Introduction/Description.vue.js
var a16 = s5(U5, [["__scopeId", "data-v-2843ffaf"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/Introduction/Introduction.vue2.js
var G5 = { class: "flex gap-1" };
var Y4 = { class: "sticky-cards" };
var lo = defineComponent({
  __name: "Introduction",
  props: {
    document: {}
  },
  setup(i15) {
    const { getHeadingId: V11 } = T2(), c8 = inject(o), s19 = computed(() => {
      var o4, r8;
      return typeof ((o4 = i15.document.info) == null ? void 0 : o4.version) == "string" ? i15.document.info.version.toString().match(/^\d/) ? `v${i15.document.info.version}` : i15.document.info.version : typeof ((r8 = i15.document.info) == null ? void 0 : r8.version) == "number" ? `v${i15.document.info.version}` : void 0;
    }), v11 = f4();
    return onMounted(() => {
      var o4, r8;
      return (r8 = (o4 = v11.value).onLoaded) == null ? void 0 : r8.call(o4);
    }), (o4, r8) => (openBlock(), createBlock(unref(l9), null, {
      default: withCtx(() => [
        createVNode(unref(p11), {
          class: "introduction-section gap-12",
          id: unref(V11)({
            slug: unref(f2),
            depth: 1,
            value: "Introduction"
          })
        }, {
          default: withCtx(() => {
            var p19, g11, S9, C11;
            return [
              createVNode(unref(p12), {
                loading: unref(v11).isLoading ?? (!((g11 = (p19 = o4.document) == null ? void 0 : p19.info) != null && g11.description) && !((C11 = (S9 = o4.document) == null ? void 0 : S9.info) != null && C11.title))
              }, {
                default: withCtx(() => {
                  var N7;
                  return [
                    createBaseVNode("div", G5, [
                      s19.value ? (openBlock(), createBlock(unref(l10), { key: 0 }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(s19.value), 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      unref(c8) ? (openBlock(), createBlock(unref(l10), { key: 1 }, {
                        default: withCtx(() => [
                          createTextVNode("OAS " + toDisplayString(unref(c8)), 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    createVNode(unref(a9), {
                      loading: !((N7 = o4.document.info) != null && N7.title),
                      tight: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(e5), { level: 1 }, {
                          default: withCtx(() => {
                            var d18;
                            return [
                              createTextVNode(toDisplayString((d18 = o4.document.info) == null ? void 0 : d18.title), 1)
                            ];
                          }),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["loading"]),
                    createVNode(unref(a10), null, {
                      default: withCtx(() => [
                        createVNode(unref(f9), null, {
                          default: withCtx(() => {
                            var d18, h10;
                            return [
                              createVNode(m33, {
                                title: (d18 = o4.document.info) == null ? void 0 : d18.title
                              }, null, 8, ["title"]),
                              createVNode(a16, {
                                value: (h10 = o4.document.info) == null ? void 0 : h10.description
                              }, null, 8, ["value"])
                            ];
                          }),
                          _: 1
                        }),
                        o4.$slots.aside ? (openBlock(), createBlock(unref(f9), { key: 0 }, {
                          default: withCtx(() => [
                            createBaseVNode("div", Y4, [
                              renderSlot(o4.$slots, "aside", {}, void 0, true)
                            ])
                          ]),
                          _: 3
                        })) : createCommentVNode("", true)
                      ]),
                      _: 3
                    }),
                    createVNode(unref(O4), { value: o4.document }, null, 8, ["value"]),
                    createVNode(unref(O4), {
                      value: o4.document.info
                    }, null, 8, ["value"])
                  ];
                }),
                _: 3
              }, 8, ["loading"]),
              renderSlot(o4.$slots, "after", {}, void 0, true)
            ];
          }),
          _: 3
        }, 8, ["id"])
      ]),
      _: 3
    }));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/Introduction/Introduction.vue.js
var m34 = s5(lo, [["__scopeId", "data-v-fa96ab44"]]);

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/Server/ServerSelector.vue.js
var W6 = { class: "overflow-x-auto" };
var z8 = {
  key: 1,
  class: "text-c-1 flex h-auto w-full items-center gap-0.75 rounded-b-lg px-3 py-1.5 text-xs whitespace-nowrap lg:text-sm"
};
var C9 = { class: "overflow-x-auto" };
var j6 = defineComponent({
  __name: "ServerSelector",
  props: {
    collection: {},
    server: {},
    target: {}
  },
  emits: ["updateServer"],
  setup(l11, { emit: S9 }) {
    const u11 = S9, { servers: o4, collectionMutators: c8 } = je(), a22 = computed(
      () => {
        var t8;
        return (t8 = l11.collection) == null ? void 0 : t8.servers.map((e11) => {
          var r8;
          return {
            id: e11,
            label: ((r8 = o4[e11]) == null ? void 0 : r8.url) ?? "Unknown server"
          };
        });
      }
    ), d18 = computed({
      get: () => l11.server ? a22.value.find((t8) => t8.id === l11.server.uid) : void 0,
      set: (t8) => {
        var r8;
        if (!t8)
          return;
        c8.edit(
          l11.collection.uid,
          "selectedServerUid",
          t8.id
        );
        const e11 = (r8 = o4[t8.id]) == null ? void 0 : r8.url;
        e11 && u11("updateServer", e11);
      }
    });
    watch(
      () => l11.collection,
      (t8) => {
        var r8, f15;
        if (!t8 || t8.selectedServerUid)
          return;
        const e11 = (r8 = l11.collection.servers) == null ? void 0 : r8[0];
        e11 && (c8.edit(l11.collection.uid, "selectedServerUid", e11), (f15 = o4[e11]) != null && f15.url && u11("updateServer", o4[e11].url));
      }
    );
    const v11 = computed(() => {
      var t8, e11, r8;
      return (e11 = (t8 = l11.server) == null ? void 0 : t8.url) != null && e11.endsWith("/") ? l11.server.url.slice(0, -1) : ((r8 = l11.server) == null ? void 0 : r8.url) || "";
    });
    return (t8, e11) => a22.value.length > 1 ? (openBlock(), createBlock(unref(P), {
      key: 0,
      modelValue: d18.value,
      "onUpdate:modelValue": e11[0] || (e11[0] = (r8) => d18.value = r8),
      options: a22.value,
      placement: "bottom-start",
      resize: "",
      target: t8.target,
      teleport: `#${t8.target}`
    }, {
      default: withCtx(() => [
        createVNode(unref($), {
          class: "bg-b-1 text-c-1 h-auto w-full justify-start gap-0.75 overflow-x-auto rounded-t-none rounded-b-lg px-3 py-1.5 text-xs font-normal whitespace-nowrap -outline-offset-1 lg:text-sm",
          variant: "ghost"
        }, {
          default: withCtx(() => [
            e11[1] || (e11[1] = createBaseVNode("span", { class: "sr-only" }, "Server:", -1)),
            createBaseVNode("span", W6, toDisplayString(v11.value), 1),
            createVNode(unref(m), {
              class: "text-c-2",
              icon: "ChevronDown",
              size: "sm"
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue", "options", "target", "teleport"])) : (openBlock(), createElementBlock("div", z8, [
      e11[2] || (e11[2] = createBaseVNode("span", { class: "sr-only" }, "Server:", -1)),
      createBaseVNode("span", C9, toDisplayString(v11.value), 1)
    ]));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/BaseUrl/BaseUrl.vue.js
var M6 = ["id"];
var q4 = defineComponent({
  __name: "BaseUrl",
  props: {
    collection: {},
    server: {}
  },
  setup(l11) {
    const { serverMutators: b9 } = je(), s19 = useId(), p19 = f4(), f15 = (e11, o4) => {
      if (!l11.server)
        return;
      const r8 = l11.server.variables || {};
      r8[e11] = { ...r8[e11], default: o4 }, b9.edit(l11.server.uid, "variables", r8);
    }, g11 = (e11) => {
      var o4, r8;
      (r8 = (o4 = p19.value).onServerChange) == null || r8.call(o4, e11);
    };
    return (e11, o4) => {
      var r8, n7, i15, d18, c8;
      return openBlock(), createElementBlock(Fragment, null, [
        o4[0] || (o4[0] = createBaseVNode("label", { class: "bg-b-2 flex h-8 items-center rounded-t-lg border border-b-0 px-3 py-2.5 text-sm font-medium" }, " Server ", -1)),
        createBaseVNode("div", {
          id: unref(s19),
          class: normalizeClass(["border", {
            "rounded-b-lg": !((r8 = e11.server) != null && r8.description)
          }])
        }, [
          (i15 = (n7 = e11.collection) == null ? void 0 : n7.servers) != null && i15.length ? (openBlock(), createBlock(unref(j6), {
            key: 0,
            collection: e11.collection,
            server: e11.server,
            target: unref(s19),
            onUpdateServer: g11
          }, null, 8, ["collection", "server", "target"])) : createCommentVNode("", true)
        ], 10, M6),
        createVNode(unref(O), {
          variables: (d18 = e11.server) == null ? void 0 : d18.variables,
          layout: "reference",
          "onUpdate:variable": f15
        }, null, 8, ["variables"]),
        (c8 = e11.server) != null && c8.description ? (openBlock(), createBlock(unref(_2), {
          key: 0,
          class: "text-c-3 rounded-b-lg border border-t-0 px-3 py-1.5",
          value: e11.server.description
        }, null, 8, ["value"])) : createCommentVNode("", true)
      ], 64);
    };
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/ClientLibraries/useFeaturedHttpClients.js
function K5() {
  const { availableTargets: r8 } = R2(), n7 = [
    {
      targetKey: "shell",
      clientKey: "curl"
    },
    {
      targetKey: "ruby",
      clientKey: "native"
    },
    {
      targetKey: "node",
      clientKey: "undici"
    },
    {
      targetKey: "php",
      clientKey: "guzzle"
    },
    {
      targetKey: "python",
      clientKey: "python3"
    }
  ].filter(
    (e11) => r8.value.find((t8) => t8.key === e11.targetKey && t8.clients.find((i15) => i15.client === e11.clientKey))
  );
  return {
    /** The featured http clients */
    featuredClients: n7,
    /** Whether a client is featured */
    isFeatured: (e11) => n7.some((t8) => t8.targetKey === e11.targetKey && t8.clientKey === e11.clientKey)
  };
}

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/ClientLibraries/ClientSelector.vue2.js
var F5 = { class: "client-libraries-text" };
var H5 = ["aria-controls", "value"];
var I6 = ["label"];
var J3 = ["aria-label", "value"];
var O10 = {
  "aria-hidden": "true",
  class: "client-libraries-icon__more"
};
var V9 = {
  key: 1,
  class: "client-libraries-icon",
  height: "50",
  role: "presentation",
  viewBox: "0 0 50 50",
  width: "50",
  xmlns: "http://www.w3.org/2000/svg"
};
var j7 = {
  key: 0,
  class: "client-libraries-text client-libraries-text-more"
};
var q5 = defineComponent({
  __name: "ClientSelector",
  props: {
    morePanel: {}
  },
  setup(z10) {
    const {
      httpClient: i15,
      setHttpClient: v11,
      availableTargets: y11,
      getClientTitle: d18,
      getTargetTitle: k12
    } = R2(), { featuredClients: K6, isFeatured: _13 } = K5(), C11 = ref(), m38 = (s19) => `programming-language-${s19 === "js" ? "javascript" : s19}`, h10 = (s19) => s19.targetKey === i15.targetKey && s19.clientKey === i15.clientKey;
    return (s19, a22) => (openBlock(), createElementBlock("div", {
      ref_key: "containerRef",
      ref: C11,
      class: "client-libraries-content"
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(K6), (t8) => (openBlock(), createBlock(unref(xe), {
        key: t8.clientKey,
        class: normalizeClass(["client-libraries rendered-code-sdks", {
          "client-libraries__active": h10(t8)
        }])
      }, {
        default: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(`client-libraries-icon__${t8.targetKey}`)
          }, [
            createVNode(unref(m), {
              class: "client-libraries-icon",
              icon: m38(t8.targetKey)
            }, null, 8, ["icon"])
          ], 2),
          createBaseVNode("span", F5, toDisplayString(unref(k12)(t8)), 1)
        ]),
        _: 2
      }, 1032, ["class"]))), 128)),
      createBaseVNode("label", {
        class: normalizeClass(["client-libraries client-libraries__select", {
          "client-libraries__active": unref(i15) && !unref(_13)(unref(i15))
        }])
      }, [
        createBaseVNode("select", {
          "aria-controls": s19.morePanel,
          class: "language-select",
          value: JSON.stringify(unref(i15)),
          onInput: a22[0] || (a22[0] = (t8) => unref(v11)(JSON.parse(t8.target.value)))
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(y11), (t8) => (openBlock(), createElementBlock("optgroup", {
            key: t8.key,
            label: t8.title
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(t8.clients, (o4) => (openBlock(), createElementBlock("option", {
              key: o4.client,
              "aria-label": `${t8.title} ${unref(d18)({
                targetKey: t8.key,
                clientKey: o4.client
              })}`,
              value: JSON.stringify({
                targetKey: t8.key,
                clientKey: o4.client
              })
            }, toDisplayString(unref(d18)({
              targetKey: t8.key,
              clientKey: o4.client
            })), 9, J3))), 128))
          ], 8, I6))), 128))
        ], 40, H5),
        createBaseVNode("div", O10, [
          unref(i15) && !unref(_13)(unref(i15)) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(`client-libraries-icon__${unref(i15).targetKey}`)
          }, [
            createVNode(unref(m), {
              class: "client-libraries-icon",
              icon: m38(unref(i15).targetKey)
            }, null, 8, ["icon"])
          ], 2)) : (openBlock(), createElementBlock("svg", V9, a22[1] || (a22[1] = [
            createBaseVNode("g", {
              fill: "currentColor",
              "fill-rule": "nonzero"
            }, [
              createBaseVNode("path", { d: "M10.71 25.3a3.87 3.87 0 1 0 7.74 0 3.87 3.87 0 0 0-7.74 0M21.13 25.3a3.87 3.87 0 1 0 7.74 0 3.87 3.87 0 0 0-7.74 0M31.55 25.3a3.87 3.87 0 1 0 7.74 0 3.87 3.87 0 0 0-7.74 0" })
            ], -1)
          ])))
        ]),
        unref(y11).length ? (openBlock(), createElementBlock("span", j7, " More ")) : createCommentVNode("", true),
        a22[2] || (a22[2] = createBaseVNode("span", { class: "sr-only" }, "Select from all clients", -1))
      ], 2)
    ], 512));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/ClientLibraries/ClientSelector.vue.js
var m35 = s5(q5, [["__scopeId", "data-v-502b1c76"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/ClientLibraries/ClientLibraries.vue2.js
var Z4 = { key: 0 };
var $4 = ["id"];
var X6 = {
  key: 1,
  class: "selected-client card-footer border-t-0 p-0",
  role: "tabpanel",
  tabindex: "1"
};
var ee2 = ["id"];
var de3 = defineComponent({
  __name: "ClientLibraries",
  setup(te4) {
    const {
      availableTargets: T9,
      httpTargetTitle: k12,
      httpClientTitle: x14,
      getClientTitle: E9,
      getTargetTitle: L6,
      httpClient: a22,
      setHttpClient: _13
    } = R2(), { featuredClients: d18, isFeatured: S9 } = K5(), I10 = je(), g11 = ref(0), v11 = useId(), C11 = useId();
    watch(
      a22,
      (t8) => {
        t8 && (g11.value = d18.findIndex(
          (o4) => o4.targetKey === t8.targetKey && o4.clientKey === t8.clientKey
        ));
      },
      { immediate: true }
    );
    function N7(t8) {
      const o4 = d18[t8];
      o4 && _13(o4);
    }
    onMounted(() => {
      const t8 = localStorage.getItem(REFERENCE_LS_KEYS.SELECTED_CLIENT);
      t8 && _13(JSON.parse(t8));
    });
    const r8 = computed(() => {
      var c8;
      const t8 = Object.values(I10.collections)[0], o4 = (c8 = t8 == null ? void 0 : t8.info) == null ? void 0 : c8["x-scalar-sdk-installation"];
      if (!Array.isArray(o4) || !(o4 != null && o4.length))
        return;
      const s19 = o4.find(
        (u11) => {
          var f15;
          return u11.lang.toLowerCase() === ((f15 = a22 == null ? void 0 : a22.targetKey) == null ? void 0 : f15.toLowerCase());
        }
      );
      if (s19)
        return s19;
    });
    return (t8, o4) => unref(T9).length ? (openBlock(), createElementBlock("div", Z4, [
      createVNode(unref(me), {
        manual: "",
        selectedIndex: g11.value,
        onChange: N7
      }, {
        default: withCtx(() => [
          createBaseVNode("div", {
            id: unref(v11),
            class: "client-libraries-heading"
          }, " Client Libraries ", 8, $4),
          createVNode(unref(pe), {
            "aria-labelledby": unref(v11),
            class: "client-libraries-list"
          }, {
            default: withCtx(() => [
              createVNode(m35, {
                featured: unref(d18),
                morePanel: unref(C11)
              }, null, 8, ["featured", "morePanel"])
            ]),
            _: 1
          }, 8, ["aria-labelledby"]),
          createVNode(unref(Ie), null, {
            default: withCtx(() => {
              var s19, c8;
              return [
                (s19 = r8.value) != null && s19.source || (c8 = r8.value) != null && c8.description ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  r8.value.description ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: normalizeClass(["selected-client card-footer -outline-offset-2", r8.value.source && "rounded-b-none"]),
                    role: "tabpanel",
                    tabindex: "0"
                  }, [
                    createVNode(unref(_2), {
                      value: r8.value.description
                    }, null, 8, ["value"])
                  ], 2)) : createCommentVNode("", true),
                  r8.value.source ? (openBlock(), createElementBlock("div", X6, [
                    createVNode(unref(T), {
                      lang: "shell",
                      content: r8.value.source,
                      copy: true,
                      class: "rounded-t-none rounded-b-lg px-3 py-2 -outline-offset-1 has-focus:outline"
                    }, null, 8, ["content"])
                  ])) : createCommentVNode("", true)
                ], 64)) : unref(a22) && unref(S9)(unref(a22)) ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(unref(d18), (u11, f15) => (openBlock(), createBlock(unref(ye), {
                  key: f15,
                  class: "selected-client card-footer -outline-offset-2"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(E9)(u11)) + " " + toDisplayString(unref(L6)(u11)), 1)
                  ]),
                  _: 2
                }, 1024))), 128)) : (openBlock(), createElementBlock("div", {
                  key: 2,
                  id: unref(C11),
                  class: "selected-client card-footer -outline-offset-2",
                  role: "tabpanel",
                  tabindex: "0"
                }, toDisplayString(unref(x14)) + " " + toDisplayString(unref(k12)), 9, ee2))
              ];
            }),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["selectedIndex"])
    ])) : createCommentVNode("", true);
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/ClientLibraries/ClientLibraries.vue.js
var a17 = s5(de3, [["__scopeId", "data-v-681c8e27"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Section/SectionContainerAccordion.vue2.js
var p17 = { class: "section-accordion-wrapper" };
var m36 = { class: "section-accordion-title" };
var B10 = defineComponent({
  __name: "SectionContainerAccordion",
  setup(h10) {
    return (c8, v11) => (openBlock(), createElementBlock("div", p17, [
      createVNode(unref(N), {
        as: "div",
        class: "section-accordion",
        defaultOpen: ""
      }, {
        default: withCtx(({ open: s19 }) => [
          createVNode(unref(Q), { class: "section-accordion-button" }, {
            default: withCtx(() => [
              createVNode(unref(m), {
                class: "section-accordion-chevron size-6",
                icon: s19 ? "ChevronDown" : "ChevronRight"
              }, null, 8, ["icon"]),
              createBaseVNode("div", m36, [
                renderSlot(c8.$slots, "title", {}, void 0, true)
              ])
            ]),
            _: 2
          }, 1024),
          createVNode(unref(V), { class: "section-accordion-content" }, {
            default: withCtx(() => [
              renderSlot(c8.$slots, "default", {}, void 0, true)
            ]),
            _: 3
          })
        ]),
        _: 3
      })
    ]));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Section/SectionContainerAccordion.vue.js
var a18 = s5(B10, [["__scopeId", "data-v-6f297947"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/Tag/TagAccordion.vue2.js
var B11 = defineComponent({
  __name: "TagAccordion",
  props: {
    tag: {}
  },
  setup(S9) {
    const { getTagId: r8 } = T2();
    return (o4, v11) => (openBlock(), createBlock(unref(a18), { class: "tag-section" }, {
      title: withCtx(() => [
        createVNode(unref(a9), { class: "tag-name" }, {
          default: withCtx(() => [
            createVNode(unref(m16), {
              id: unref(r8)(o4.tag)
            }, {
              default: withCtx(() => [
                createVNode(unref(e5), { level: 2 }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(o4.tag.name), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["id"])
          ]),
          _: 1
        }),
        createVNode(unref(_2), {
          class: "tag-description",
          value: o4.tag.description,
          withImages: ""
        }, null, 8, ["value"])
      ]),
      default: withCtx(() => [
        renderSlot(o4.$slots, "default", {}, void 0, true)
      ]),
      _: 3
    }));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/Tag/TagAccordion.vue.js
var d16 = s5(B11, [["__scopeId", "data-v-ab8ddc14"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/Lazy/Lazy.vue2.js
var y9 = defineComponent({
  __name: "Lazy",
  props: {
    id: {},
    isLazy: { type: Boolean, default: true },
    lazyTimeout: { default: 0 }
  },
  setup(d18) {
    const e11 = d18, l11 = (t8 = () => {
    }) => {
      typeof window > "u" || ("requestIdleCallback" in window ? setTimeout(() => window.requestIdleCallback(t8), e11.lazyTimeout) : setTimeout(() => nextTick(t8), e11.lazyTimeout ?? 300));
    }, o4 = ref(!e11.isLazy);
    return e11.isLazy ? l11(() => {
      o4.value = true, e11.id && nextTick(() => e3.emit({ id: e11.id }));
    }) : e11.id && nextTick(() => e3.emit({ id: e11.id })), (t8, f15) => o4.value ? renderSlot(t8.$slots, "default", { key: 0 }) : createCommentVNode("", true);
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/Tag/TagList.vue.js
var q6 = defineComponent({
  __name: "TagList",
  props: {
    id: {},
    collection: {},
    tags: {},
    spec: {},
    layout: {},
    server: {},
    schemas: {}
  },
  setup(i15) {
    const { getTagId: a22, hash: L6 } = T2(), { collapsedSidebarItems: c8 } = l3(), g11 = computed(
      () => i15.layout === "classic" ? d16 : f10
    ), z10 = computed(
      () => i15.tags.findIndex((e11) => !c8[a22(e11)]) + 1
    ), m38 = (e11) => i15.layout !== "classic" && !L6.value.startsWith("model") && e11 > z10.value;
    return (e11, O11) => (openBlock(true), createElementBlock(Fragment, null, renderList(e11.tags, (r8, d18) => (openBlock(), createBlock(unref(y9), {
      id: e11.id || unref(a22)(r8),
      key: e11.id || unref(a22)(r8),
      isLazy: m38(d18)
    }, {
      default: withCtx(() => [
        (openBlock(), createBlock(resolveDynamicComponent(g11.value), {
          id: e11.id || unref(a22)(r8),
          collection: e11.collection,
          spec: e11.spec,
          tag: r8
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(r8.operations, (l11, k12) => (openBlock(), createBlock(unref(y9), {
              id: l11.id,
              key: l11.id,
              isLazy: m38(d18) || unref(c8)[unref(a22)(r8)] && k12 > 0
            }, {
              default: withCtx(() => [
                createVNode(unref(E), null, {
                  default: withCtx(() => [
                    createVNode(unref(D5), {
                      collection: e11.collection,
                      layout: e11.layout,
                      schemas: e11.schemas,
                      server: e11.server,
                      transformedOperation: l11
                    }, null, 8, ["collection", "layout", "schemas", "server", "transformedOperation"])
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1032, ["id", "isLazy"]))), 128))
          ]),
          _: 2
        }, 1032, ["id", "collection", "spec", "tag"]))
      ]),
      _: 2
    }, 1032, ["id", "isLazy"]))), 128));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/Models/ModelsAccordion.vue2.js
var T7 = {
  key: 0,
  class: "properties"
};
var w5 = { key: 1 };
var J4 = defineComponent({
  __name: "ModelsAccordion",
  props: {
    schemas: {}
  },
  setup(b9) {
    const s19 = b9, g11 = computed(() => s19.schemas ? Object.entries(s19.schemas).map(([m38, i15]) => ({
      name: m38,
      schema: i15
    })) : []), { getModelId: a22 } = T2();
    return (m38, i15) => s19.schemas ? (openBlock(), createBlock(unref(a18), {
      key: 0,
      class: "reference-models"
    }, {
      title: withCtx(() => [
        createVNode(unref(a9), { level: 2 }, {
          default: withCtx(() => i15[0] || (i15[0] = [
            createTextVNode("Models")
          ])),
          _: 1
        })
      ]),
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList(g11.value, ({ name: l11, schema: r8 }) => (openBlock(), createBlock(unref(i11), {
          id: unref(a22)({ name: l11 }),
          key: l11,
          label: l11
        }, {
          title: withCtx(() => [
            createVNode(unref(m16), {
              id: unref(a22)({ name: l11 }),
              class: "reference-models-anchor"
            }, {
              default: withCtx(() => [
                createVNode(unref(e5), { level: 3 }, {
                  default: withCtx(() => [
                    createVNode(unref(r7), {
                      class: "reference-models-label",
                      name: r8.title ?? l11,
                      value: r8
                    }, null, 8, ["name", "value"])
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1032, ["id"])
          ]),
          default: withCtx(() => [
            r8 != null && r8.properties ? (openBlock(), createElementBlock("div", T7, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(Object.entries(r8.properties), ([d18, q7]) => {
                var f15, p19, _13;
                return openBlock(), createBlock(unref(p13), {
                  key: d18,
                  name: d18,
                  required: ((f15 = r8.required) == null ? void 0 : f15.includes(d18)) || ((_13 = (p19 = r8.properties) == null ? void 0 : p19[d18]) == null ? void 0 : _13.required) === true,
                  value: q7
                }, null, 8, ["name", "required", "value"]);
              }), 128))
            ])) : (openBlock(), createElementBlock("div", w5, [
              createVNode(unref(p13), { value: r8 }, null, 8, ["value"])
            ]))
          ]),
          _: 2
        }, 1032, ["id", "label"]))), 128))
      ]),
      _: 1
    })) : createCommentVNode("", true);
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/Models/ModelsAccordion.vue.js
var e10 = s5(J4, [["__scopeId", "data-v-ce1dd773"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Section/CompactSection.vue2.js
var I7 = { class: "collapsible-section" };
var V10 = ["id", "aria-controls", "aria-expanded"];
var R7 = defineComponent({
  __name: "CompactSection",
  props: {
    id: {},
    label: {}
  },
  setup(d18) {
    const a22 = d18, { hash: p19 } = T2(), e11 = ref(false), l11 = useId();
    return watch(
      p19,
      async (o4) => {
        o4 === a22.id && !e11.value && (e11.value = true, await nextTick(), scrollToId(a22.id));
      },
      { immediate: true }
    ), (o4, i15) => (openBlock(), createElementBlock("div", I7, [
      createBaseVNode("button", {
        id: o4.id,
        "aria-controls": unref(l11),
        "aria-expanded": e11.value,
        class: normalizeClass(["collapsible-section-trigger", { "collapsible-section-trigger-open": e11.value }]),
        type: "button",
        onClick: i15[0] || (i15[0] = ($5) => e11.value = !e11.value)
      }, [
        createVNode(unref(m), {
          icon: e11.value ? "ChevronDown" : "ChevronRight",
          size: "md",
          thickness: "1.5"
        }, null, 8, ["icon"]),
        createVNode(m16, {
          id: o4.id,
          class: "collapsible-section-header"
        }, {
          default: withCtx(() => [
            renderSlot(o4.$slots, "heading", {}, void 0, true)
          ]),
          _: 3
        }, 8, ["id"])
      ], 10, V10),
      e11.value ? (openBlock(), createBlock(p11, {
        key: 0,
        id: unref(l11),
        class: "collapsible-section-content",
        label: o4.label
      }, {
        default: withCtx(() => [
          renderSlot(o4.$slots, "default", {}, void 0, true)
        ]),
        _: 3
      }, 8, ["id", "label"])) : createCommentVNode("", true)
    ]));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Section/CompactSection.vue.js
var a19 = s5(R7, [["__scopeId", "data-v-4b9f7b57"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/Models/Models.vue2.js
var S7 = 10;
var U6 = defineComponent({
  __name: "Models",
  props: {
    schemas: {}
  },
  setup(v11) {
    const i15 = v11, n7 = useId(), { collapsedSidebarItems: _13 } = l3(), { getModelId: a22 } = T2(), d18 = computed(
      () => Object.keys(i15.schemas ?? {}).length <= S7 || _13[a22()]
    ), b9 = computed(() => {
      const t8 = Object.keys(i15.schemas ?? {});
      return d18.value ? t8 : t8.slice(0, S7);
    });
    return (t8, c8) => t8.schemas ? (openBlock(), createBlock(unref(l9), {
      key: 0,
      id: "models"
    }, {
      default: withCtx(() => [
        createVNode(unref(p11), { "aria-labelledby": unref(n7) }, {
          default: withCtx(() => [
            createVNode(unref(a9), null, {
              default: withCtx(() => [
                createVNode(unref(e5), {
                  id: unref(n7),
                  level: 2
                }, {
                  default: withCtx(() => c8[0] || (c8[0] = [
                    createTextVNode(" Models ")
                  ])),
                  _: 1
                }, 8, ["id"])
              ]),
              _: 1
            }),
            createVNode(unref(y9), {
              id: "models",
              isLazy: false
            }),
            createBaseVNode("div", {
              class: normalizeClass(["models-list", { "models-list-truncated": !d18.value }])
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(b9.value, (s19) => (openBlock(), createBlock(unref(y9), {
                id: unref(a22)({ name: s19 }),
                key: s19,
                isLazy: ""
              }, {
                default: withCtx(() => [
                  createVNode(unref(a19), {
                    id: unref(a22)({ name: s19 }),
                    class: "models-list-item",
                    label: s19
                  }, {
                    heading: withCtx(() => [
                      createVNode(unref(e5), { level: 3 }, {
                        default: withCtx(() => [
                          createVNode(unref(r7), {
                            name: t8.schemas[s19].title ?? s19,
                            value: t8.schemas[s19]
                          }, null, 8, ["name", "value"])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    default: withCtx(() => [
                      createVNode(unref(E), null, {
                        default: withCtx(() => [
                          createVNode(unref(a12), {
                            noncollapsible: "",
                            hideHeading: true,
                            hideModelNames: true,
                            schemas: t8.schemas,
                            level: 1,
                            value: t8.schemas[s19]
                          }, null, 8, ["schemas", "value"])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["id", "label"])
                ]),
                _: 2
              }, 1032, ["id"]))), 128))
            ], 2),
            d18.value ? createCommentVNode("", true) : (openBlock(), createBlock(_5, {
              key: 0,
              id: unref(a22)(),
              class: "show-more-models"
            }, null, 8, ["id"]))
          ]),
          _: 1
        }, 8, ["aria-labelledby"])
      ]),
      _: 1
    })) : createCommentVNode("", true);
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/Models/Models.vue.js
var p18 = s5(U6, [["__scopeId", "data-v-4228514f"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/Content.vue2.js
var ee3 = { class: "narrow-references-container" };
var re = {
  key: 0,
  class: "scalar-reference-intro-server scalar-client introduction-card-item text-sm leading-normal [--scalar-address-bar-height:0px]"
};
var ae2 = {
  key: 1,
  class: "scalar-reference-intro-auth scalar-client introduction-card-item leading-normal"
};
var he2 = defineComponent({
  __name: "Content",
  props: {
    document: {},
    parsedSpec: {},
    layout: { default: "modern" }
  },
  setup($5) {
    const M7 = $5, u11 = f4(), { collections: B12, securitySchemes: N7, servers: h10 } = je(), {
      activeCollection: W8,
      activeEnvVariables: L6,
      activeEnvironment: j8,
      activeWorkspace: g11
    } = z(), a22 = computed(() => {
      if (u11.value.slug) {
        const e11 = B12[getSlugUid(u11.value.slug)];
        if (e11)
          return e11;
      }
      return W8.value;
    }), o4 = computed(() => {
      if (a22.value) {
        if (a22.value.selectedServerUid) {
          const e11 = h10[a22.value.selectedServerUid];
          if (e11)
            return e11;
        }
        return h10[a22.value.servers[0]];
      }
    }), q7 = computed(
      () => M7.layout === "classic" ? "after" : "aside"
    );
    return (e11, k12) => {
      var b9, C11, w9, A3, V11;
      return openBlock(), createElementBlock(Fragment, null, [
        k12[0] || (k12[0] = createStaticVNode('<div class="section-flare" data-v-86bac6ee><div class="section-flare-item" data-v-86bac6ee></div><div class="section-flare-item" data-v-86bac6ee></div><div class="section-flare-item" data-v-86bac6ee></div><div class="section-flare-item" data-v-86bac6ee></div><div class="section-flare-item" data-v-86bac6ee></div><div class="section-flare-item" data-v-86bac6ee></div><div class="section-flare-item" data-v-86bac6ee></div><div class="section-flare-item" data-v-86bac6ee></div></div>', 1)),
        createBaseVNode("div", ee3, [
          renderSlot(e11.$slots, "start", {}, void 0, true),
          a22.value ? (openBlock(), createBlock(unref(pe4), {
            key: 0,
            collection: a22.value,
            layout: e11.layout,
            parsedSpec: e11.parsedSpec,
            server: o4.value
          }, null, 8, ["collection", "layout", "parsedSpec", "server"])) : createCommentVNode("", true),
          (C11 = (b9 = e11.document) == null ? void 0 : b9.info) != null && C11.title || (A3 = (w9 = e11.document) == null ? void 0 : w9.info) != null && A3.description ? (openBlock(), createBlock(unref(m34), {
            key: 1,
            document: e11.document
          }, {
            [q7.value]: withCtx(() => [
              createVNode(unref(E), null, {
                default: withCtx(() => {
                  var n7, l11, d18;
                  return [
                    createBaseVNode("div", {
                      class: normalizeClass(["introduction-card", { "introduction-card-row": e11.layout === "classic" }])
                    }, [
                      (l11 = (n7 = a22.value) == null ? void 0 : n7.servers) != null && l11.length ? (openBlock(), createElementBlock("div", re, [
                        createVNode(unref(q4), {
                          collection: a22.value,
                          server: o4.value
                        }, null, 8, ["collection", "server"])
                      ])) : createCommentVNode("", true),
                      a22.value && unref(g11) && Object.keys(unref(N7) ?? {}).length ? (openBlock(), createElementBlock("div", ae2, [
                        createVNode(unref(p3), {
                          collection: a22.value,
                          envVariables: unref(L6),
                          environment: unref(j8),
                          layout: "reference",
                          persistAuth: unref(u11).persistAuth,
                          selectedSecuritySchemeUids: ((d18 = a22.value) == null ? void 0 : d18.selectedSecuritySchemeUids) ?? [],
                          server: o4.value,
                          title: "Authentication",
                          workspace: unref(g11)
                        }, null, 8, ["collection", "envVariables", "environment", "persistAuth", "selectedSecuritySchemeUids", "server", "workspace"])
                      ])) : createCommentVNode("", true),
                      createVNode(unref(a17), { class: "introduction-card-item scalar-reference-intro-clients" })
                    ], 2)
                  ];
                }),
                _: 1
              })
            ]),
            _: 2
          }, 1032, ["document"])) : renderSlot(e11.$slots, "empty-state", { key: 2 }, void 0, true),
          e11.parsedSpec.tags && a22.value ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
            e11.parsedSpec["x-tagGroups"] ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(e11.parsedSpec["x-tagGroups"], (n7) => (openBlock(), createBlock(unref(q6), {
              key: n7.name,
              collection: a22.value,
              layout: e11.layout,
              server: o4.value,
              spec: e11.parsedSpec,
              tags: n7.tags.map((l11) => {
                var d18;
                return (d18 = e11.parsedSpec.tags) == null ? void 0 : d18.find((z10) => z10.name === l11);
              }).filter((l11) => !!l11)
            }, null, 8, ["collection", "layout", "server", "spec", "tags"]))), 128)) : (openBlock(), createBlock(unref(q6), {
              key: 1,
              collection: a22.value,
              layout: e11.layout,
              schemas: unref(y2)(e11.parsedSpec),
              server: o4.value,
              spec: e11.parsedSpec,
              tags: e11.parsedSpec.tags
            }, null, 8, ["collection", "layout", "schemas", "server", "spec", "tags"]))
          ], 64)) : createCommentVNode("", true),
          (V11 = e11.parsedSpec.webhooks) != null && V11.length && a22.value ? (openBlock(), createBlock(unref(q6), {
            key: 4,
            id: "webhooks",
            collection: a22.value,
            layout: e11.layout,
            schemas: unref(y2)(e11.parsedSpec),
            server: o4.value,
            spec: e11.parsedSpec,
            tags: [
              {
                name: "Webhooks",
                description: "",
                operations: e11.parsedSpec.webhooks
              }
            ]
          }, null, 8, ["collection", "layout", "schemas", "server", "spec", "tags"])) : createCommentVNode("", true),
          unref(x7)(e11.parsedSpec) && !unref(u11).hideModels ? (openBlock(), createElementBlock(Fragment, { key: 5 }, [
            e11.layout === "classic" ? (openBlock(), createBlock(unref(e10), {
              key: 0,
              schemas: unref(y2)(e11.parsedSpec)
            }, null, 8, ["schemas"])) : (openBlock(), createBlock(unref(p18), {
              key: 1,
              schemas: unref(y2)(e11.parsedSpec)
            }, null, 8, ["schemas"]))
          ], 64)) : createCommentVNode("", true),
          renderSlot(e11.$slots, "end", {}, void 0, true)
        ])
      ], 64);
    };
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/Content/Content.vue.js
var a20 = s5(he2, [["__scopeId", "data-v-86bac6ee"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/features/ApiClientModal/ApiClientModal.vue.js
var z9 = defineComponent({
  __name: "ApiClientModal",
  props: {
    configuration: {},
    dereferencedDocument: {}
  },
  setup(n7) {
    const a22 = ref(null), { client: c8, init: v11 } = a6(), { selectedExampleKey: p19, operationId: s19 } = p15(), u11 = z(), i15 = je(), { isIntersectionEnabled: m38 } = T2();
    return onMounted(() => {
      a22.value && v11({
        el: a22.value,
        configuration: n7.configuration,
        store: i15
      });
    }), watchDebounced(
      () => n7.dereferencedDocument,
      (e11) => {
        var r8, o4;
        e11 && (u11.activeCollection.value && ((r8 = c8.value) == null || r8.resetStore()), i15.importSpecFile(void 0, "default", {
          dereferencedDocument: e11,
          shouldLoad: false,
          documentUrl: (o4 = n7.configuration) == null ? void 0 : o4.url,
          useCollectionSecurity: true,
          ...n7.configuration
        }));
      }
    ), watchDebounced(
      () => n7.configuration,
      (e11, r8) => {
        if (!r8 || !u11.activeCollection.value)
          return;
        const o4 = u11.activeCollection.value, f15 = diff(r8, e11);
        if (!f15.some(
          (t8) => t8.path[0] === "url" || t8.path[0] === "content" || t8.path[1] === "url" || t8.path[1] === "content"
        )) {
          if (f15.forEach((t8) => {
            t8.path[0] === "authentication" && J(t8, u11, i15);
          }), e11.servers || r8.servers) {
            o4.servers.forEach((l11) => {
              i15.serverMutators.delete(l11, o4.uid);
            });
            const t8 = getServersFromOpenApiDocument(
              e11.servers ?? n7.dereferencedDocument.servers,
              {
                baseServerURL: e11.baseServerURL
              }
            );
            t8.forEach((l11) => {
              i15.serverMutators.add(l11, o4.uid);
            }), t8.length && i15.collectionMutators.edit(
              o4.uid,
              "selectedServerUid",
              t8[t8.length - 1].uid
            );
          }
        }
        m38.value = false, setTimeout(() => {
          m38.value = true;
        }, 1e3);
      },
      { deep: true, debounce: 300 }
    ), watch(p19, (e11) => {
      c8.value && e11 && s19.value && c8.value.updateExample(e11, s19.value);
    }), onBeforeUnmount(() => {
      var e11;
      return (e11 = c8.value) == null ? void 0 : e11.app.unmount();
    }), (e11, r8) => (openBlock(), createElementBlock("div", {
      ref_key: "el",
      ref: a22
    }, null, 512));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/ApiReferenceLayout.vue2.js
var lt = ["innerHTML"];
var st = { class: "references-header" };
var ut = ["aria-label"];
var dt = { class: "references-navigation-list" };
var ct = { key: 0 };
var mt = {
  key: 1,
  class: "scalar-api-references-standalone-search"
};
var ft = { key: 1 };
var vt = { class: "references-editor" };
var pt = { class: "references-editor-textarea" };
var gt = ["aria-label"];
var ht = {
  key: 0,
  class: "w-64 empty:hidden"
};
var St = {
  key: 0,
  class: "references-footer"
};
var qt = defineComponent({
  inheritAttrs: false,
  __name: "ApiReferenceLayout",
  props: {
    configuration: {},
    dereferencedDocument: {},
    originalDocument: {},
    isDark: { type: Boolean },
    parsedSpec: {},
    rawSpec: {}
  },
  emits: ["changeTheme", "updateContent", "loadSwaggerFile", "linkSwaggerFile", "toggleDarkMode"],
  setup(M7) {
    const t8 = computed(
      () => apiReferenceConfigurationSchema.parse(M7.configuration)
    ), { initializeToasts: j8, toast: q7 } = i();
    j8((e11) => q7(e11));
    const {
      originalDocument: J5,
      originalOpenApiVersion: X7,
      dereferencedDocument: d18,
      workspaceStore: Z5,
      activeEntitiesStore: x14
    } = C3({
      configuration: t8,
      dereferencedDocument: M7.dereferencedDocument,
      originalDocument: M7.originalDocument
    });
    provide(o, X7), provide(qe, Z5), provide(P2, x14);
    const ee4 = useMediaQuery("(min-width: 1150px)"), te4 = ref("100dvh"), w9 = ref(null);
    useResizeObserver(w9, (e11) => {
      te4.value = e11[0].contentRect.height + "px";
    });
    const oe = computed(hasObtrusiveScrollbars), R8 = T2(t8), { isSidebarOpen: B12, setCollapsedSidebarItem: L6, scrollToOperation: re2, items: H6 } = l3(d18, {
      ...R8,
      config: t8
    }), {
      getReferenceId: ae3,
      getPathRoutingId: ne,
      getSectionId: ie3,
      getTagId: le3,
      hash: O11,
      isIntersectionEnabled: A3,
      updateHash: P10,
      replaceUrlState: se
    } = R8;
    if (t8.value.redirect && typeof window < "u") {
      const e11 = t8.value.redirect(
        (t8.value.pathRouting ? window.location.pathname : "") + window.location.hash
      );
      e11 && history.replaceState({}, "", e11);
    }
    onBeforeMount(() => {
      P10(), l();
    });
    const _13 = async (e11) => {
      var o4;
      A3.value = false, P10(), e11 ? re2(e11) : (o4 = w9.value) == null || o4.scrollTo(0, 0), await sleep(100), A3.value = true;
    }, F6 = ref(0);
    onMounted(() => {
      var n7, i15, C11;
      history.scrollRestoration = "manual";
      const e11 = (i15 = (n7 = w9.value) == null ? void 0 : n7.parentElement) == null ? void 0 : i15.getBoundingClientRect(), o4 = (C11 = w9.value) == null ? void 0 : C11.getBoundingClientRect();
      if (e11 && o4) {
        const $5 = o4.top - e11.top;
        F6.value = $5 < 2 ? 0 : $5;
      }
      window.onhashchange = () => {
        _13(ae3());
      }, window.onpopstate = () => t8.value.pathRouting && _13(ne(window.location.pathname)), window.addEventListener("scroll", N7, { passive: true });
    });
    const ue4 = computed(
      () => ee4.value || !t8.value.isEditable
    ), N7 = useDebounceFn(() => {
      window.scrollY < 50 && se("");
    }), V11 = ref(false);
    watch(d18, (e11) => {
      var o4, n7;
      if (!(V11.value || !((o4 = e11.tags) != null && o4.length))) {
        if (O11.value) {
          const i15 = ie3(O11.value);
          i15 && L6(i15, true);
        } else {
          const i15 = (n7 = e11.tags) == null ? void 0 : n7[0];
          i15 && L6(le3(i15), true);
        }
        V11.value = true;
      }
    });
    const k12 = ref(g());
    watch(
      d18,
      async (e11) => {
        if (!e11)
          return;
        const o4 = await I(e11, H6.value.entries);
        k12.value = o4;
      },
      { immediate: true }
    );
    const c8 = computed(() => {
      var e11;
      return {
        spec: k12.value,
        breadcrumb: ((e11 = H6.value) == null ? void 0 : e11.titles.get(O11.value)) ?? ""
      };
    });
    onMounted(
      () => L2.on(({ filename: e11, format: o4 }) => {
        R(
          toValue(J5) || toValue(M7.rawSpec) || "",
          e11,
          o4
        );
      })
    ), onUnmounted(() => {
      window.removeEventListener("scroll", N7), L2.reset();
    }), s(() => useId()), provide(t, "modal"), provide(r2, t8), provide(
      t3,
      r4({
        plugins: t8.value.plugins
      })
    );
    function U7(e11, o4) {
      watch(
        () => t8.value[e11],
        (n7) => {
          typeof n7 < "u" && o4(n7);
        },
        { immediate: true }
      );
    }
    const { setExcludedClients: de4, setDefaultHttpClient: ce2 } = R2();
    U7("defaultHttpClient", ce2), U7("hiddenClients", de4);
    const me2 = computed(
      () => `<style>
  ${getThemeStyles(t8.value.theme, {
        fonts: t8.value.withDefaultFonts
      })}</style>`
    ), { mediaQueries: fe2 } = useBreakpoints(), ve3 = false;
    return watch(fe2.lg, (e11, o4) => {
      o4 && !e11 && (B12.value = false);
    }), watch(O11, (e11, o4) => {
      e11 && e11 !== o4 && (B12.value = false);
    }), (e11, o4) => {
      var n7, i15, C11, $5, Y5;
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", { innerHTML: me2.value }, null, 8, lt),
        createBaseVNode("div", {
          ref_key: "documentEl",
          ref: w9,
          class: normalizeClass(["scalar-app scalar-api-reference references-layout", [
            {
              "scalar-api-references-standalone-mobile": t8.value.showSidebar ?? true,
              "scalar-scrollbars-obtrusive": oe.value,
              "references-editable": t8.value.isEditable,
              "references-sidebar": t8.value.showSidebar,
              "references-sidebar-mobile-open": unref(B12),
              "references-classic": t8.value.layout === "classic"
            },
            e11.$attrs.class
          ]]),
          style: normalizeStyle({
            "--scalar-y-offset": `var(--scalar-custom-header-height, ${F6.value}px)`
          })
        }, [
          createBaseVNode("div", st, [
            t8.value.layout === "modern" && (t8.value.showSidebar ?? true) ? (openBlock(), createBlock(f3, {
              key: 0,
              breadcrumb: c8.value.breadcrumb
            }, null, 8, ["breadcrumb"])) : createCommentVNode("", true),
            renderSlot(e11.$slots, "header", normalizeProps(guardReactiveProps(c8.value)), void 0, true)
          ]),
          t8.value.showSidebar ? (openBlock(), createElementBlock("aside", {
            key: 0,
            "aria-label": `Sidebar for ${(i15 = (n7 = unref(d18)) == null ? void 0 : n7.info) == null ? void 0 : i15.title}`,
            class: "references-navigation t-doc__sidebar"
          }, [
            createBaseVNode("div", dt, [
              createVNode(unref(E), null, {
                default: withCtx(() => {
                  var S9, m38;
                  return [
                    createVNode(unref(p9), {
                      title: ((m38 = (S9 = unref(d18)) == null ? void 0 : S9.info) == null ? void 0 : m38.title) ?? "The OpenAPI Schema"
                    }, {
                      "sidebar-start": withCtx(() => {
                        var I10;
                        return [
                          e11.$slots["document-selector"] ? (openBlock(), createElementBlock("div", ct, [
                            renderSlot(e11.$slots, "document-selector", {}, void 0, true)
                          ])) : createCommentVNode("", true),
                          t8.value.hideSearch ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", mt, [
                            createVNode(unref(m12), {
                              searchHotKey: (I10 = t8.value) == null ? void 0 : I10.searchHotKey,
                              spec: k12.value
                            }, null, 8, ["searchHotKey", "spec"])
                          ])),
                          renderSlot(e11.$slots, "sidebar-start", normalizeProps(guardReactiveProps(c8.value)), void 0, true)
                        ];
                      }),
                      "sidebar-end": withCtx(() => [
                        renderSlot(e11.$slots, "sidebar-end", normalizeProps(guardReactiveProps(c8.value)), () => [
                          createVNode(unref(w), { class: "darklight-reference" }, {
                            toggle: withCtx(() => [
                              t8.value.hideDarkModeToggle ? (openBlock(), createElementBlock("span", ft)) : (openBlock(), createBlock(unref(B), {
                                key: 0,
                                modelValue: e11.isDark,
                                "onUpdate:modelValue": o4[0] || (o4[0] = (I10) => e11.$emit("toggleDarkMode"))
                              }, null, 8, ["modelValue"]))
                            ]),
                            default: withCtx(() => [
                              t8.value.hideClientButton ? createCommentVNode("", true) : (openBlock(), createBlock(unref(a), {
                                key: 0,
                                buttonSource: "sidebar",
                                integration: t8.value._integration,
                                isDevelopment: ve3,
                                url: t8.value.url
                              }, null, 8, ["integration", "url"]))
                            ]),
                            _: 1
                          })
                        ], true)
                      ]),
                      _: 3
                    }, 8, ["title"])
                  ];
                }),
                _: 3
              })
            ])
          ], 8, ut)) : createCommentVNode("", true),
          withDirectives(createBaseVNode("div", vt, [
            createBaseVNode("div", pt, [
              renderSlot(e11.$slots, "editor", normalizeProps(guardReactiveProps(c8.value)), void 0, true)
            ])
          ], 512), [
            [vShow, t8.value.isEditable]
          ]),
          ue4.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createBaseVNode("main", {
              "aria-label": `Open API Documentation for ${($5 = (C11 = unref(d18)) == null ? void 0 : C11.info) == null ? void 0 : $5.title}`,
              class: "references-rendered"
            }, [
              createVNode(unref(a20), {
                layout: t8.value.layout,
                document: unref(d18),
                parsedSpec: k12.value
              }, createSlots({
                start: withCtx(() => [
                  renderSlot(e11.$slots, "content-start", normalizeProps(guardReactiveProps(c8.value)), () => [
                    t8.value.layout === "classic" ? (openBlock(), createBlock(u, { key: 0 }, {
                      "dark-mode-toggle": withCtx(() => [
                        t8.value.hideDarkModeToggle ? createCommentVNode("", true) : (openBlock(), createBlock(unref(c), {
                          key: 0,
                          class: "text-c-2 hover:text-c-1",
                          mode: e11.isDark ? "dark" : "light",
                          style: { transform: "scale(1.4)" },
                          variant: "icon",
                          onClick: o4[1] || (o4[1] = (S9) => e11.$emit("toggleDarkMode"))
                        }, null, 8, ["mode"]))
                      ]),
                      default: withCtx(() => [
                        e11.$slots["document-selector"] ? (openBlock(), createElementBlock("div", ht, [
                          renderSlot(e11.$slots, "document-selector", {}, void 0, true)
                        ])) : createCommentVNode("", true),
                        t8.value.hideSearch ? createCommentVNode("", true) : (openBlock(), createBlock(unref(m12), {
                          key: 1,
                          class: "t-doc__sidebar",
                          searchHotKey: t8.value.searchHotKey,
                          spec: k12.value
                        }, null, 8, ["searchHotKey", "spec"]))
                      ]),
                      _: 3
                    })) : createCommentVNode("", true)
                  ], true)
                ]),
                end: withCtx(() => [
                  renderSlot(e11.$slots, "content-end", normalizeProps(guardReactiveProps(c8.value)), void 0, true)
                ]),
                _: 2
              }, [
                (Y5 = t8.value) != null && Y5.isEditable ? {
                  name: "empty-state",
                  fn: withCtx(() => {
                    var S9;
                    return [
                      createVNode(m5, {
                        theme: ((S9 = t8.value) == null ? void 0 : S9.theme) || "default",
                        onChangeTheme: o4[2] || (o4[2] = (m38) => e11.$emit("changeTheme", m38)),
                        onLinkSwaggerFile: o4[3] || (o4[3] = (m38) => e11.$emit("linkSwaggerFile")),
                        onLoadSwaggerFile: o4[4] || (o4[4] = (m38) => e11.$emit("loadSwaggerFile")),
                        onUpdateContent: o4[5] || (o4[5] = (m38) => e11.$emit("updateContent", m38))
                      }, null, 8, ["theme"])
                    ];
                  }),
                  key: "0"
                } : void 0
              ]), 1032, ["layout", "document", "parsedSpec"])
            ], 8, gt),
            e11.$slots.footer ? (openBlock(), createElementBlock("div", St, [
              renderSlot(e11.$slots, "footer", normalizeProps(guardReactiveProps(c8.value)), void 0, true)
            ])) : createCommentVNode("", true)
          ], 64)) : createCommentVNode("", true),
          createVNode(unref(z9), {
            configuration: t8.value,
            dereferencedDocument: unref(d18)
          }, null, 8, ["configuration", "dereferencedDocument"])
        ], 6),
        createVNode(unref(v2))
      ], 64);
    };
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/ApiReferenceLayout.vue.js
var a21 = s5(qt, [["__scopeId", "data-v-790b49f0"]]);

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/hooks/useMultipleDocuments.js
var w7 = "api";
var h9 = new BananaSlug();
var C10 = (t8) => t8 ? (Array.isArray(t8) ? t8 : [t8]).flatMap((u11) => {
  if (isConfigurationWithSources(u11)) {
    const { sources: s19, ...r8 } = u11;
    return (s19 == null ? void 0 : s19.map((m38) => ({ ...r8, ...m38 }))) ?? [];
  }
  return [u11];
}).map((u11, s19) => u11 && I9(u11, s19)).filter(isDefined) : [];
var I9 = (t8, a22 = 0) => {
  const e11 = {
    ...t8,
    // @ts-expect-error this is before parsing so we transform the old style
    ...t8.spec ?? {}
  };
  if (!(!(e11 != null && e11.url) && !(e11 != null && e11.content)))
    return h9.reset(), e11.title ? {
      ...e11,
      slug: e11.slug || h9.slug(e11.title),
      title: e11.title
    } : e11.slug ? {
      ...e11,
      title: e11.slug
    } : {
      ...e11,
      slug: `api-${a22 + 1}`,
      title: `API #${a22 + 1}`
    };
};
var T8 = ({
  configuration: t8,
  initialIndex: a22,
  isIntersectionEnabled: e11,
  hash: u11,
  hashPrefix: s19
}) => {
  const r8 = computed(() => C10(t8.value)), f15 = ref((() => {
    if (typeof window > "u")
      return typeof a22 == "number" ? a22 : 0;
    const n7 = new URL(window.location.href).searchParams.get(w7);
    if (n7) {
      const o4 = r8.value.findIndex((p19) => p19.slug === n7);
      if (o4 !== -1)
        return o4;
      const i15 = Number.parseInt(n7, 10);
      if (!isNaN(i15) && i15 >= 0 && i15 < r8.value.length)
        return i15;
    }
    const l11 = r8.value.findIndex((o4) => "default" in o4 && o4.default === true);
    return l11 !== -1 ? l11 : typeof a22 == "number" ? a22 : 0;
  })()), c8 = computed(() => {
    var n7, l11;
    return t8.value && isConfigurationWithSources(t8.value) ? {
      ...t8.value,
      ...(l11 = (n7 = t8.value) == null ? void 0 : n7.sources) == null ? void 0 : l11[f15.value],
      ...r8.value[f15.value]
    } : {
      ...[t8.value].flat()[f15.value] ?? {},
      ...r8.value[f15.value]
    };
  });
  return watch(
    f15,
    (d18) => {
      var i15, p19, v11;
      if (typeof window > "u" || r8.value.length === 1)
        return;
      const n7 = new URL(window.location.href), l11 = r8.value[d18];
      c8.value.pathRouting && (n7.pathname = ((i15 = c8.value.pathRouting) == null ? void 0 : i15.basePath) ?? "");
      const o4 = (l11 == null ? void 0 : l11.slug) ?? d18.toString();
      n7.searchParams.set(w7, o4), n7.hash = "", window.history.replaceState({}, "", n7.toString()), u11.value = "", s19.value = "", e11.value = false, typeof window < "u" && window.scrollTo({ top: 0, behavior: "instant" }), (v11 = (p19 = c8.value).onDocumentSelect) == null || v11.call(p19);
    },
    { flush: "sync" }
  ), {
    selectedConfiguration: c8,
    availableDocuments: r8,
    selectedDocumentIndex: f15,
    isIntersectionEnabled: e11,
    hash: u11,
    hashPrefix: s19
  };
};

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/v2/events/listeners.js
function m37(t8, e11, r8) {
  watch(
    () => t8.value,
    (n7) => {
      n7 && n7.addEventListener(e11, r8);
    },
    { immediate: true }
  ), onBeforeUnmount(() => {
    t8.value && t8.value.removeEventListener(e11, r8);
  });
}

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/DocumentSelector/DocumentSelector.vue.js
var w8 = {
  key: 0,
  class: "document-selector -mb-1 p-3 pb-0"
};
var S8 = {
  class: "group/dropdown-label hover:bg-b-2 text-c-2 flex w-full cursor-pointer items-center rounded border py-1.75 pr-1.5 pl-1.75",
  tabindex: "0"
};
var _12 = { class: "text-c-1 overflow-hidden text-sm font-medium text-ellipsis" };
var y10 = defineComponent({
  __name: "DocumentSelector",
  props: {
    options: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(l11, { emit: c8 }) {
    const m38 = c8, u11 = computed(() => {
      var e11;
      return l11.options && ((e11 = l11.options) == null ? void 0 : e11.length) > 1;
    }), r8 = computed(
      () => {
        var e11;
        return ((e11 = l11.options) == null ? void 0 : e11.map((o4, t8) => ({
          id: String(t8),
          // Get the display text for the selected option
          label: o4.title || o4.slug || `API #${t8 + 1}`
        }))) || [];
      }
    ), n7 = computed({
      get: () => r8.value.find(({ id: e11 }) => e11 === String(l11.modelValue)),
      set: (e11) => m38("update:modelValue", Number(e11.id))
    });
    return (e11, o4) => u11.value ? (openBlock(), createElementBlock("div", w8, [
      createVNode(unref(P), {
        modelValue: n7.value,
        "onUpdate:modelValue": o4[0] || (o4[0] = (t8) => n7.value = t8),
        options: r8.value,
        resize: ""
      }, {
        default: withCtx(() => {
          var t8;
          return [
            createBaseVNode("div", S8, [
              createVNode(unref(C2), {
                class: "mr-1.5 h-3 w-3 text-current",
                weight: "bold"
              }),
              createBaseVNode("span", _12, toDisplayString(((t8 = n7.value) == null ? void 0 : t8.label) || "Select API"), 1)
            ])
          ];
        }),
        _: 1
      }, 8, ["modelValue", "options"])
    ])) : createCommentVNode("", true);
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/v2/ApiReferenceWorkspace.vue.js
var te3 = defineComponent({
  __name: "ApiReferenceWorkspace",
  props: {
    configuration: {},
    getWorkspaceStore: { type: Function }
  },
  setup(k12) {
    const u11 = k12, {
      availableDocuments: v11,
      selectedConfiguration: o4,
      selectedDocumentIndex: s19,
      isIntersectionEnabled: g11,
      hash: C11,
      hashPrefix: M7
    } = T8({
      configuration: toRef(u11, "configuration"),
      isIntersectionEnabled: ref(false),
      hash: ref(""),
      hashPrefix: ref("")
    });
    provide(P4, { isIntersectionEnabled: g11, hash: C11, hashPrefix: M7 });
    const D7 = shallowRef(null), n7 = u11.getWorkspaceStore();
    onServerPrefetch(() => {
    }), onMounted(() => {
    }), m37(D7, "scalar-update-dark-mode", (e11) => {
      n7.update("x-scalar-dark-mode", e11.data.value);
    });
    const { toggleColorMode: S9, isDarkMode: h10 } = useColorMode({
      initialColorMode: o4.value.darkMode ? "dark" : void 0,
      overrideColorMode: o4.value.forceDarkModeState
    });
    watch(
      () => o4.value.darkMode,
      (e11) => n7.update("x-scalar-dark-mode", !!e11)
    ), watch(
      () => h10.value,
      (e11) => n7.update("x-scalar-dark-mode", e11),
      { immediate: true }
    ), o4.value.metaData && useSeoMeta(o4.value.metaData);
    const x14 = computed(() => o4.value.favicon);
    return useFavicon(x14), (e11, r8) => {
      var m38;
      return openBlock(), createElementBlock(Fragment, null, [
        (m38 = unref(o4)) != null && m38.customCss ? (openBlock(), createBlock(resolveDynamicComponent("style"), { key: 0 }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(o4).customCss), 1)
          ]),
          _: 1
        })) : createCommentVNode("", true),
        createVNode(a21, {
          configuration: unref(o4),
          isDark: !!unref(n7).workspace["x-scalar-dark-mode"],
          onToggleDarkMode: r8[1] || (r8[1] = () => unref(S9)()),
          onUpdateContent: r8[2] || (r8[2] = (i15) => e11.$emit("updateContent", i15))
        }, {
          footer: withCtx(() => [
            renderSlot(e11.$slots, "footer")
          ]),
          "content-end": withCtx(() => [
            renderSlot(e11.$slots, "footer")
          ]),
          "document-selector": withCtx(() => [
            createVNode(unref(y10), {
              modelValue: unref(s19),
              "onUpdate:modelValue": r8[0] || (r8[0] = (i15) => isRef(s19) ? s19.value = i15 : null),
              options: unref(v11)
            }, null, 8, ["modelValue", "options"])
          ]),
          "sidebar-start": withCtx(() => [
            renderSlot(e11.$slots, "sidebar-start")
          ]),
          _: 3
        }, 8, ["configuration", "isDark"])
      ], 64);
    };
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/components/ApiReference.vue.js
var g9 = defineComponent({
  __name: "ApiReference",
  props: {
    configuration: {}
  },
  setup(i15) {
    const o4 = createWorkspaceStore();
    return (e11, f15) => (openBlock(), createBlock(te3, {
      getWorkspaceStore: () => unref(o4),
      configuration: e11.configuration
    }, null, 8, ["getWorkspaceStore", "configuration"]));
  }
});

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/standalone/lib/html-api.js
var g10 = (a22, s19) => {
  const r8 = "scalar-refs", t8 = reactive({
    // Either the configuration will be the second arugment or it MUST be the first (configuration only)
    configuration: s19 ?? a22 ?? {}
  });
  let n7 = createApp(() => h(g9, t8));
  if (n7.use(createHead2()), n7.config.idPrefix = r8, s19) {
    const e11 = typeof a22 == "string" ? document.querySelector(a22) : a22;
    e11 ? n7.mount(e11) : console.error("Could not find a mount point for API References:", a22);
  }
  document.addEventListener(
    "scalar:reload-references",
    () => {
      if (console.warn(
        "scalar:reload-references event has been deprecated, please use the scalarInstance.app.mount method instead."
      ), !t8.configuration)
        return;
      const e11 = typeof a22 == "string" ? document.querySelector(a22) : a22;
      e11 && (e11 && !document.body.contains(e11) && document.body.appendChild(e11), n7.unmount(), n7 = createApp(() => h(g9, t8)), n7.use(createHead2()), n7.config.idPrefix = r8, n7.mount(e11));
    },
    false
  );
  const o4 = () => {
    delete t8.configuration, n7.unmount();
  };
  return document.addEventListener(
    "scalar:destroy-references",
    () => {
      console.warn("scalar:destroy-references event has been deprecated, please use scalarInstance.destroy instead."), o4();
    },
    false
  ), document.addEventListener(
    "scalar:update-references-config",
    (e11) => {
      console.warn(
        "scalar:update-references-config event has been deprecated, please use scalarInstance.updateConfiguration instead."
      ), "detail" in e11 && Object.assign(t8, e11.detail);
    },
    false
  ), {
    app: n7,
    getConfiguration: () => t8.configuration ?? {},
    updateConfiguration: (e11) => {
      t8.configuration = e11;
    },
    destroy: o4
  };
};

// node_modules/.pnpm/@scalar+api-reference@1.31.15_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-reference/dist/index.js
(function() {
  try {
    if (typeof document === "undefined" || document.getElementById("scalar-style-api-reference"))
      return;
    setTimeout(() => {
      if (getComputedStyle(document.body).getPropertyValue("--scalar-loaded-api-reference") === "true")
        return;
      const elementStyle = document.createElement("style");
      elementStyle.setAttribute("id", "scalar-style-api-reference");
      elementStyle.appendChild(document.createTextNode(`.references-classic-header[data-v-a860f78f]{display:flex;align-items:center;justify-content:space-between;gap:12px;max-width:var(--refs-content-max-width);margin:auto;padding:12px 0}.references-classic-header-container[data-v-a860f78f]{padding:0 60px}@container narrow-references-container (max-width: 900px){.references-classic-header[data-v-a860f78f]{padding:12px 24px}.references-classic-header-container[data-v-a860f78f]{padding:0}}.references-classic-header-icon[data-v-a860f78f]{height:24px;color:var(--scalar-color-1)}.start[data-v-0aca3a20]{padding:24px;display:flex;flex-flow:wrap;justify-content:space-between;position:relative;z-index:0}.swagger-editor .start[data-v-0aca3a20]{padding-top:24px}.start-h1[data-v-0aca3a20]{font-size:var(--scalar-heading-2);margin-top:0;line-height:1.45;margin-bottom:0;font-weight:var(--scalar-bold);color:var(--scalar-color-1);width:100%;position:relative}.start-h3[data-v-0aca3a20]{font-size:var(--scalar-paragraph);margin-top:0;margin-bottom:6px;display:block;line-height:1.45;font-weight:var(--scalar-bold);color:var(--scalar-color-1);width:100%}.start-h1[data-v-0aca3a20]:not(:first-of-type){margin-top:24px}.start-p[data-v-0aca3a20]{font-size:var(--scalar-paragraph);color:var(--scalar-color-2);line-height:1.5;width:100%;margin-top:12px}.start-ul[data-v-0aca3a20]{margin-top:12px;font-size:var(--scalar-paragraph);line-height:1.5;padding-left:0;list-style:initial;display:flex;flex-flow:wrap;gap:24px}.start-ul li[data-v-0aca3a20]{margin:0;padding:0;list-style:none;width:calc(50% - 24px);color:var(--scalar-color-2)}.start-ul li[data-v-0aca3a20]:first-of-type{margin-top:0}.start-section[data-v-0aca3a20]{width:100%;margin-bottom:12px;display:flex;flex-flow:wrap}.start-section[data-v-0aca3a20]:last-of-type{margin-bottom:48px}.start-h2[data-v-0aca3a20]{background:var(--scalar-background-2);border-top-left-radius:var(--scalar-radius-lg);border-top-right-radius:var(--scalar-radius-lg);border:1px solid var(--scalar-border-color);color:var(--scalar-color-3);font-size:var(--scalar-mini);font-weight:var(--scalar-semibold);padding:9px;width:100%}.start-item[data-v-0aca3a20]{align-items:center;background:var(--scalar-background-2);border-right:1px solid var(--scalar-border-color);border-bottom:1px solid var(--scalar-border-color);color:var(--scalar-color-1);cursor:pointer;display:flex;flex:1;font-size:var(--scalar-mini);font-weight:var(--scalar-semibold);padding:9px;text-transform:capitalize;-webkit-user-select:none;user-select:none}.start-section-integrations .start-item[data-v-0aca3a20]:first-of-type{border-bottom-left-radius:var(--scalar-radius-lg);border-left:1px solid var(--scalar-border-color)}.start-section-integrations .start-item[data-v-0aca3a20]:last-of-type{border-bottom-right-radius:var(--scalar-radius-lg)}.start-section-colors .start-item[data-v-0aca3a20]{min-width:33.33%}.start-section-colors .start-item[data-v-0aca3a20]:nth-child(3n+2){border-left:1px solid var(--scalar-border-color)}.start-section-colors .start-item[data-v-0aca3a20]:last-of-type,.start-section-colors .start-item-active[data-v-0aca3a20]:last-of-type:before{border-radius:0 0 var(--scalar-radius-lg) var(--scalar-radius-lg)}.start-item[data-v-0aca3a20]:empty{pointer-events:none}.start-item svg[data-v-0aca3a20]{width:14px;height:14px;margin-right:6px}.start-item[data-v-0aca3a20]:hover{background:var(--scalar-background-3)}.start-item-active[data-v-0aca3a20]{z-index:10;position:relative;color:var(--scalar-color-1)}.start-item-active[data-v-0aca3a20]:before{border:1px solid var(--scalar-color-1);content:"";inset:-1px;pointer-events:none;position:absolute}.start-section-color .start-item[data-v-0aca3a20]{text-transform:capitalize}.start-cta[data-v-0aca3a20]{display:flex;gap:12px;width:100%;margin-top:24px;margin-bottom:0}.start-row[data-v-0aca3a20]{width:100%;margin-top:12px;overflow:hidden}.start-hero-copy[data-v-0aca3a20]{background:var(--scalar-background-2);padding:12px;border-radius:var(--scalar-radius-lg)}.start-p-small[data-v-0aca3a20]{font-weight:var(--scalar-semibold);font-size:var(--scalar-mini);color:var(--scalar-color-2);margin-bottom:12px;line-height:1.4}.start-cta[data-v-0aca3a20]{margin-bottom:12px;width:fit-content;white-space:nowrap}.start-copy[data-v-0aca3a20]{padding:76px 48px 48px;display:flex;justify-content:center;align-items:center;flex-direction:column;text-align:center}.start-logo[data-v-0aca3a20]{color:var(--scalar-color-1);margin-bottom:24px;width:72px;aspect-ratio:1;position:relative;box-shadow:var(--scalar-shadow-2);border-radius:50%}.start-logo[data-v-0aca3a20]:before{content:"";width:300%;aspect-ratio:1;left:-100%;top:-100%;position:absolute;z-index:-1;border-radius:50%;background-size:24px 24px;box-shadow:inset 0 0 50px var(--scalar-background-1),inset 0 0 50px var(--scalar-background-1);background-image:linear-gradient(to right,var(--scalar-border-color) 1px,transparent 1px),linear-gradient(to bottom,var(--scalar-border-color) 1px,transparent 1px)}.start-logo svg[data-v-0aca3a20]{width:100%;height:auto;background:var(--scalar-background-1);padding:3px;border-radius:50%;position:relative}@media screen and (max-width: 600px){.start-section-colors .start-item[data-v-0aca3a20],.start-item[data-v-0aca3a20]{width:100%;border-radius:0;border-right:none;border-top:1px solid var(--scalar-border-color)}.start-item[data-v-0aca3a20]:empty{display:none}.start-h2[data-v-0aca3a20]{border-bottom:none}.start li[data-v-0aca3a20]{width:100%}.start-copy[data-v-0aca3a20]{padding:48px 0 24px}}@media screen and (max-width: 1000px){.start[data-v-0aca3a20]{padding:0;overflow:auto}}.references-mobile-header[data-v-fa8b013a]{display:none;align-items:center;height:100%;width:100dvw;padding:0 8px;background:var(--scalar-background-1);border-bottom:1px solid var(--scalar-border-color)}.references-mobile-breadcrumbs[data-v-fa8b013a]{flex:1;min-width:0;font-size:var(--scalar-small);font-weight:var(--scalar-semibold);color:var(--scalar-color-1);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.references-mobile-header-actions[data-v-fa8b013a]{display:flex;flex-direction:row;gap:4px;height:24px;align-items:center;padding-left:4px}@media (max-width: 1000px){.references-mobile-header[data-v-fa8b013a]{display:flex}}.sidebar-heading-type[data-v-43724d28]{display:block;min-width:3.9em;overflow:hidden;line-height:14px;flex-shrink:0;color:#fff;color:color-mix(in srgb,var(--method-color, var(--scalar-color-1)),transparent 0%);text-transform:uppercase;font-size:10px;font-weight:var(--scalar-bold);text-align:right;position:relative;font-family:var(--scalar-font-code);white-space:nowrap;margin-left:3px}.sidebar-heading[data-v-b6cecb8a]{display:flex;gap:6px;color:var(--scalar-sidebar-color-2, var(--scalar-color-2));font-size:var(--scalar-mini);font-weight:var(--scalar-semibold);word-break:break-word;line-height:1.385;max-width:100%;position:relative;cursor:pointer;border-radius:var(--scalar-radius);flex:1;padding-right:9px;-webkit-user-select:none;user-select:none}.sidebar-heading-link-method[data-v-b6cecb8a]{margin:0}.sidebar-heading.deprecated .sidebar-heading-link-title[data-v-b6cecb8a]{text-decoration:line-through}.sidebar-heading-link-title[data-v-b6cecb8a]{margin:0}.sidebar-heading[data-v-b6cecb8a]:hover{background:var( --scalar-sidebar-item-hover-background, var(--scalar-background-2) )}.sidebar-heading:hover .sidebar-heading-link-title[data-v-b6cecb8a]{color:var(--scalar-sidebar-item-hover-color)}.sidebar-heading-link[data-v-b6cecb8a]:focus-visible{outline:none}.sidebar-heading[data-v-b6cecb8a]:has(>.sidebar-heading-link:focus-visible){z-index:1;outline:1px solid var(--scalar-color-accent)}.active_page.sidebar-heading[data-v-b6cecb8a]:hover,.active_page.sidebar-heading[data-v-b6cecb8a]{color:var(--scalar-sidebar-color-active, var(--scalar-color-accent));background:var( --scalar-sidebar-item-active-background, var(--scalar-background-accent) )}.active_page.sidebar-heading p[data-v-b6cecb8a]{font-weight:var(--scalar-sidebar-font-weight-active, var(--scalar-semibold))}.active_page.sidebar-heading:hover .sidebar-heading-link-title[data-v-b6cecb8a]{color:var(--scalar-sidebar-color-active, var(--scalar-color-accent))}.sidebar-indent-nested .sidebar-indent-nested .sidebar-heading[data-v-b6cecb8a]:before{content:"";position:absolute;top:0;left:calc((var(--scalar-sidebar-level) * 12px));width:var(--scalar-border-width);height:100%;background:var(--scalar-sidebar-indent-border)}.sidebar-indent-nested .sidebar-indent-nested .sidebar-heading[data-v-b6cecb8a]:hover:before{background:var(--scalar-sidebar-indent-border-hover)}.sidebar-indent-nested .sidebar-indent-nested .active_page.sidebar-heading[data-v-b6cecb8a]:before{background:var(--scalar-sidebar-indent-border-active)}.sidebar-heading-link[data-v-b6cecb8a]{text-decoration:none;color:inherit;padding:6px 0;display:flex;flex:1;justify-content:space-between;gap:2px}.sidebar-heading p[data-v-b6cecb8a]{height:fit-content;display:flex;align-items:center;font-weight:var(--scalar-sidebar-font-weight, var(--scalar-semibold))}.sidebar-heading p[data-v-b6cecb8a]:empty{display:none}.link-icon[data-v-b6cecb8a]{position:relative;left:4px}.sidebar-icon[data-v-b6cecb8a]{display:flex;align-items:center;justify-content:center;margin-right:6px;width:13px;height:13px}.sidebar-icon>svg[data-v-b6cecb8a]{width:13px;height:13px}.sidebar-group-item[data-v-b6cecb8a]{position:relative}.sidebar-heading-chevron[data-v-b6cecb8a]{margin:5px -5.5px 5px -9px}.sidebar-heading-chevron .toggle-nested-icon[data-v-b6cecb8a]:focus-visible{outline:none}.sidebar-heading[data-v-b6cecb8a]:has(.sidebar-heading-chevron .toggle-nested-icon:focus-visible){outline:none;box-shadow:inset 0 0 0 1px var(--scalar-color-accent)}.toggle-nested-icon[data-v-b6cecb8a]{color:var(--scalar-color-3);width:20px;height:20px;display:flex;align-items:center;justify-content:center}.active_page .toggle-nested-icon[data-v-b6cecb8a]{color:var(--scalar-sidebar-color-active, var(--scalar-color-accent))}.toggle-nested-icon[data-v-b6cecb8a]:hover,.toggle-nested-icon[data-v-b6cecb8a]:focus-visible{color:currentColor}.action-menu[data-v-b6cecb8a]{position:absolute;top:5px;right:5px;display:flex;gap:6px}.action-menu[data-v-b6cecb8a] .button-wrapper button{opacity:0;width:20px;height:20px;padding:4px}.action-menu[data-v-b6cecb8a]:hover .button-wrapper button,.action-menu[data-v-b6cecb8a] .button-wrapper button:hover,.sidebar-heading:hover~.action-menu[data-v-b6cecb8a] .button-wrapper button,.action-menu[data-v-b6cecb8a] .button-wrapper button[aria-expanded=true]{opacity:1}.sidebar-heading[data-v-b6cecb8a]:has(~.action-menu:hover){color:var(--scalar-sidebar-color-1, var(--scalar-color-1));background:var( --scalar-sidebar-item-hover-background, var(--scalar-background-2) )}.sidebar-group-item__folder[data-v-b6cecb8a]{color:var(--scalar-sidebar-color-1, var(--scalar-color-1));text-transform:var(--scalar-tag-text-transform, initial)}.sidebar-group[data-v-39c84840]{list-style:none;width:100%;margin:0;padding:0}.sidebar-indent-nested[data-v-39c84840] .sidebar-heading{padding-left:calc((var(--scalar-sidebar-level) * var(--scalar-sidebar-indent-base)) + 12px)!important}.sidebar-indent-nested[data-v-39c84840] .sidebar-heading .toggle-nested-icon{left:calc((var(--scalar-sidebar-level) * var(--scalar-sidebar-indent-base)) + 2px)!important}:where(.sidebar-indent-nested[data-v-39c84840]) .sidebar-heading{color:var(--scalar-sidebar-color-1, var(--scalar-color-1))}:where(.sidebar-indent-nested[data-v-39c84840]) :where(.sidebar-indent-nested) .sidebar-heading{color:var(--scalar-sidebar-color-2, var(--scalar-color-2))}.sidebar[data-v-66291b32]{--scalar-sidebar-indent-base: 12px;--scalar-sidebar-font-weight-active: var(--scalar-semibold);--scalar-sidebar-font-weight: var(--scalar-semibold)}.sidebar[data-v-66291b32]{flex:1;height:100%;display:flex;flex-direction:column;border-right:var(--scalar-border-width) solid var(--scalar-sidebar-border-color, var(--scalar-border-color));background:var(--scalar-sidebar-background-1, var(--scalar-background-1));--scalar-sidebar-level: 0}.sidebar-pages[data-v-66291b32]{flex:1;padding:9px 12px}@media (max-width: 1000px){.sidebar[data-v-66291b32]{min-height:0;border-right:none}.sidebar-pages[data-v-66291b32]{padding-top:12px}}.sidebar-group-title[data-v-66291b32]{color:var(--scalar-sidebar-color-1);font-size:var(--scalar-mini);padding:12px 6px 6px;font-weight:var(--scalar-semibold);text-transform:uppercase;word-break:break-word;line-height:1.385}.sidebar-group-item+.sidebar-group-title[data-v-66291b32]{border-top:var(--scalar-border-width) solid var(--scalar-sidebar-border-color);margin-top:9px}a[data-v-1d306466]{text-decoration:none}.ref-search-container[data-v-1d306466]{display:flex;flex-direction:column;padding:12px 12px 0}.ref-search-results[data-v-1d306466]{padding:12px}.ref-search-meta[data-v-1d306466]{background:var(--scalar-background-3);border-bottom-left-radius:var(--scalar-radius-lg);border-bottom-right-radius:var(--scalar-radius-lg);padding:6px 12px;font-size:var(--scalar-font-size-4);color:var(--scalar-color-3);font-weight:var(--scalar-semibold);display:flex;gap:12px}.deprecated[data-v-1d306466]{text-decoration:line-through}.sidebar-search[data-v-065378cc]{display:flex;align-items:center;position:relative;padding:0 3px 0 9px;min-width:254px;max-width:100%;font-family:var(--scalar-font);background:var( --scalar-sidebar-search-background, var(--scalar-background-1) );color:var(--scalar-sidebar-color-2, var(--scalar-color-2));border-radius:var(--scalar-radius);box-shadow:inset 0 0 0 .5px var( --scalar-sidebar-search-border-color, var(--scalar-sidebar-border-color, var(--scalar-border-color)) );cursor:pointer;-webkit-appearance:none;appearance:none}.sidebar-search-input[data-v-065378cc]{font-size:var(--scalar-mini);font-weight:var(--scalar-semibold);height:31px;-webkit-user-select:none;user-select:none;z-index:10;position:relative;display:flex;width:100%;justify-content:space-between;align-items:center}.sidebar-search-key[data-v-065378cc]{text-transform:uppercase;background-color:var(--scalar-background-2);padding:3px 5px;margin:2px;border-radius:var(--scalar-radius);color:var(--scalar-sidebar-color-2, var(--scalar-color-2))}.scalar-search-icon[data-v-065378cc]{padding:0;margin-right:6px;flex-shrink:0;width:12px;height:12px}.screenreader-only[data-v-df2e1026]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.section-header-label[data-v-f1ac6c38]{display:inline}.endpoint[data-v-fd24f64e]{display:flex;white-space:nowrap;cursor:pointer;text-decoration:none}.endpoint:hover .endpoint-path[data-v-fd24f64e],.endpoint:focus-visible .endpoint-path[data-v-fd24f64e]{text-decoration:underline}.endpoint .post[data-v-fd24f64e],.endpoint .get[data-v-fd24f64e],.endpoint .delete[data-v-fd24f64e],.endpoint .put[data-v-fd24f64e]{white-space:nowrap}.endpoint-method[data-v-fd24f64e],.endpoint-path[data-v-fd24f64e]{color:var(--scalar-color-1);min-width:62px;display:inline-block;line-height:1.55;font-family:var(--scalar-font-code);font-size:var(--scalar-small);cursor:pointer}.endpoint-method[data-v-fd24f64e]{text-align:right}.endpoint-path[data-v-fd24f64e]{margin-left:12px;text-transform:initial}.deprecated[data-v-fd24f64e]{text-decoration:line-through}.scalar-card[data-v-b5be456e]{all:unset;font-family:var(--scalar-font);font-size:var(--scalar-font-size-3);border-radius:var(--scalar-radius-lg);overflow:hidden;border:var(--scalar-border-width) solid var(--scalar-border-color);background:var(--scalar-background-2);display:flex;flex-direction:column;max-height:calc(((var(--full-height) - var(--refs-header-height)) - 60px) / 2);position:relative}@media (max-width: 600px){.scalar-card[data-v-b5be456e]{max-height:unset}}.scalar-card-sticky[data-v-b5be456e]{position:sticky;top:calc(var(--refs-header-height) + 24px)}.scalar-card-content[data-v-dd83e46e]{overflow:auto;border-bottom:var(--scalar-border-width) solid var(--scalar-border-color);display:grid}.scalar-card-content[data-v-dd83e46e] .simple-table .simple-header{display:none}.scalar-card-content[data-v-dd83e46e]:last-of-type,.scalar-card-content.scalar-card--borderless[data-v-dd83e46e]{border-bottom:none}.scalar-card--muted[data-v-dd83e46e]{background:var(--scalar-background-2)}.scalar-card--contrast[data-v-dd83e46e]{background:var(--scalar-background-3)}.scalar-card--frameless[data-v-dd83e46e]{padding:0}.scalar-card--transparent[data-v-dd83e46e]{background:var(--scalar-background-1)}.scalar-card-header[data-v-838dc259]{font-weight:var(--scalar-semibold);font-size:var(--scalar-mini);color:var(--scalar-color-3);padding:9px 3px 9px 12px;flex-shrink:0}.scalar-card-header.scalar-card--borderless[data-v-838dc259]+.scalar-card-content{margin-top:-9px}.scalar-card-header-slots[data-v-838dc259]{display:flex;justify-content:space-between;line-height:1.35}.scalar-card-header-title[data-v-838dc259]{text-transform:uppercase;flex:1;min-width:0;text-overflow:ellipsis;overflow:hidden}.scalar-card-header-actions[data-v-838dc259]{display:flex}.endpoints[data-v-b3881ce4]{overflow:auto;background:var(--scalar-background-2);padding:10px 12px}.section[data-v-393971a5]{position:relative;display:flex;flex-direction:column;max-width:var(--refs-content-max-width);margin:auto;padding:90px 0;scroll-margin-top:var(--refs-header-height)}.section[data-v-393971a5]:has(~div.contents){border-bottom:var(--scalar-border-width) solid var(--scalar-border-color)}.references-classic .section[data-v-393971a5]{padding:48px 0;gap:24px}@container narrow-references-container (max-width: 900px){.references-classic .section[data-v-393971a5],.section[data-v-393971a5]{padding:48px 24px}}.section[data-v-393971a5]:not(:last-of-type){border-bottom:var(--scalar-border-width) solid var(--scalar-border-color)}.loading[data-v-c90b2c46]{background:var(--scalar-background-3);animation:loading-skeleton-c90b2c46 1.5s infinite alternate;border-radius:var(--scalar-radius-lg);min-height:1.6em;margin:.6em 0;max-width:100%}.loading[data-v-c90b2c46]:first-of-type{min-height:3em;margin-bottom:24px;margin-top:0}.loading[data-v-c90b2c46]:last-of-type{width:60%}.loading.single-line[data-v-c90b2c46]{min-height:3em;margin:.6em 0;max-width:80%}@keyframes loading-skeleton-c90b2c46{0%{opacity:1}to{opacity:.33}}.section-header-wrapper[data-v-f8e38d9f]{grid-template-columns:1fr;display:grid}@media (min-width:1200px){.section-header-wrapper[data-v-f8e38d9f]{grid-template-columns:repeat(2,1fr)}}.section-header[data-v-f8e38d9f]{font-size:var(--font-size,var(--scalar-heading-1));font-weight:var(--font-weight,var(--scalar-bold));color:var(--scalar-color-1);word-wrap:break-word;margin-top:0;margin-bottom:12px;line-height:1.45}.section-header.tight[data-v-f8e38d9f]{margin-bottom:6px}.section-header.loading[data-v-f8e38d9f]{width:80%}.label[data-v-2f3e206c]{position:relative;display:inline-block;word-break:break-all}.anchor[data-v-2f3e206c]{position:relative;display:inline-block;opacity:0}.anchor-copy[data-v-2f3e206c]{position:absolute;left:0;top:50%;transform:translateY(-50%);cursor:pointer;padding:0 6px;color:var(--scalar-color-3);font-weight:var(--scalar-semibold);font-size:.8em}.anchor-copy[data-v-2f3e206c]:hover,.anchor-copy[data-v-2f3e206c]:focus-visible{color:var(--scalar-color-2)}.label:hover .anchor[data-v-2f3e206c],.label:has(:focus-visible) .anchor[data-v-2f3e206c]{opacity:1}@container narrow-references-container (max-width: 900px){.section-content--with-columns[data-v-9735459e]{flex-direction:column;gap:24px}}.section-columns[data-v-8b9602bf]{display:flex;gap:48px}@container narrow-references-container (max-width: 900px){.section-columns[data-v-8b9602bf]{flex-direction:column;gap:24px}}.section-column[data-v-699c28e3]{flex:1;min-width:0}@container narrow-references-container (max-width: 900px){.section-column[data-v-699c28e3]:nth-of-type(2){padding-top:0}}.show-more[data-v-c46d29d9]{-webkit-appearance:none;appearance:none;border:none;border:var(--scalar-border-width) solid var(--scalar-border-color);margin:auto;padding:8px 12px 8px 16px;border-radius:30px;color:var(--scalar-color-1);font-weight:var(--scalar-semibold);font-size:var(--scalar-small);display:flex;align-items:center;justify-content:center;position:relative;top:-48px}.show-more[data-v-c46d29d9]:hover{background:var(--scalar-background-2);cursor:pointer}.show-more-icon[data-v-c46d29d9]{width:16px!important;height:16px!important;margin-left:3px}.show-more[data-v-c46d29d9]:active{box-shadow:0 0 0 1px var(--scalar-border-color)}@container narrow-references-container (max-width: 900px){.show-more[data-v-c46d29d9]{top:-24px}}.section-container[data-v-3afcb4e7]{position:relative;padding:0 60px;width:100%;border-top:var(--scalar-border-width) solid var(--scalar-border-color)}.section-container[data-v-3afcb4e7]:has(.introduction-section){border-top:none}@container narrow-references-container (max-width: 900px){.section-container[data-v-3afcb4e7]{padding:0}}.section-container[data-v-e5bbfee4]{border-top:var(--scalar-border-width) solid var(--scalar-border-color)}.section-container[data-v-e5bbfee4]:has(.show-more){background-color:color-mix(in srgb,var(--scalar-background-2),transparent)}.operation-path[data-v-ec6c8861]{overflow:hidden;word-wrap:break-word;font-weight:var(--scalar-semibold);line-break:anywhere}.deprecated[data-v-ec6c8861]{text-decoration:line-through}.schema-type-icon[data-v-eec32394]{color:var(--scalar-color-1);display:none}.schema-type[data-v-eec32394]{font-family:var(--scalar-font-code);color:var(--scalar-color-1)}.error[data-v-f1fb3dcb]{background-color:var(--scalar-color-red)}.schema-card[data-v-f1fb3dcb]{z-index:0;font-size:var(--scalar-font-size-4);color:var(--scalar-color-1)}.schema-card-title[data-v-f1fb3dcb]{height:var(--schema-title-height);padding:6px 8px;display:flex;align-items:center;gap:4px;color:var(--scalar-color-2);font-weight:var(--scalar-semibold);font-size:var(--scalar-micro);border-bottom:var(--scalar-border-width) solid transparent}button.schema-card-title[data-v-f1fb3dcb]{cursor:pointer}button.schema-card-title[data-v-f1fb3dcb]:hover{color:var(--scalar-color-1)}.schema-card-title-icon--open[data-v-f1fb3dcb]{transform:rotate(45deg)}.schema-properties-open>.schema-card-title[data-v-f1fb3dcb]{border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom:var(--scalar-border-width) solid var(--scalar-border-color)}.schema-properties-open>.schema-properties[data-v-f1fb3dcb]{width:fit-content}.schema-card-description+.schema-properties[data-v-f1fb3dcb]{width:fit-content}.schema-card-description+.schema-properties[data-v-f1fb3dcb]{margin-top:8px}.schema-properties-open.schema-properties[data-v-f1fb3dcb],.schema-properties-open>.schema-card--open[data-v-f1fb3dcb]{width:100%}.schema-properties[data-v-f1fb3dcb]{display:flex;flex-direction:column;border:var(--scalar-border-width) solid var(--scalar-border-color);border-radius:var(--scalar-radius-lg);width:fit-content}.schema-properties-name[data-v-f1fb3dcb]{width:100%}.schema-properties .schema-properties[data-v-f1fb3dcb]{border-radius:13.5px}.schema-properties .schema-properties.schema-properties-open[data-v-f1fb3dcb]{border-radius:var(--scalar-radius-lg)}.schema-properties-open[data-v-f1fb3dcb]{width:100%}.schema-card--compact[data-v-f1fb3dcb]{align-self:flex-start}.schema-card--compact.schema-card--open[data-v-f1fb3dcb]{align-self:initial}.schema-card-title--compact[data-v-f1fb3dcb]{color:var(--scalar-color-2);padding:6px;height:auto;border-bottom:none}.schema-card-title--compact>.schema-card-title-icon[data-v-f1fb3dcb]{margin:0}.schema-card-title--compact>.schema-card-title-icon--open[data-v-f1fb3dcb]{transform:rotate(45deg)}.schema-properties-open>.schema-card-title--compact[data-v-f1fb3dcb]{position:static}.property--level-0>.schema-properties>.schema-card--level-0>.schema-properties[data-v-f1fb3dcb]{border:none}.property--level-0 .schema-card--level-0:not(.schema-card--compact) .property--level-1[data-v-f1fb3dcb]{padding:0 0 8px}:not(.composition-panel)>.schema-card--compact.schema-card--level-0>.schema-properties[data-v-f1fb3dcb]{border:none}[data-v-f1fb3dcb] .schema-card-description p{font-size:var(--scalar-mini, var(--scalar-paragraph));color:var(--scalar-color-2);line-height:1.5;display:block;margin-bottom:6px}.children .schema-card-description[data-v-f1fb3dcb]:first-of-type{padding-top:0}.property-example[data-v-1b238a2e]{display:flex;flex-direction:column;font-size:var(--scalar-micro);position:relative}.property-example[data-v-1b238a2e]:hover:before{content:"";position:absolute;top:0;left:0;width:100%;height:20px;border-radius:var(--scalar-radius)}.property-example:hover .property-example-label span[data-v-1b238a2e]{color:var(--scalar-color-1)}.property-example-label span[data-v-1b238a2e]{color:var(--scalar-color-3);position:relative;border-bottom:var(--scalar-border-width) dotted currentColor}.property-example-value[data-v-1b238a2e]{font-family:var(--scalar-font-code);display:flex;gap:8px;align-items:center;width:100%;padding:6px}.property-example-value span[data-v-1b238a2e]{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.property-example-value[data-v-1b238a2e] svg{color:var(--scalar-color-3)}.property-example-value[data-v-1b238a2e]:hover svg{color:var(--scalar-color-1)}.property-example-value[data-v-1b238a2e]{background:var(--scalar-background-2);border:var(--scalar-border-width) solid var(--scalar-border-color);border-radius:var(--scalar-radius)}.property-example-value-list[data-v-1b238a2e]{position:absolute;top:18px;left:50%;transform:translate3d(-50%,0,0);overflow:auto;background-color:var(--scalar-background-1);box-shadow:var(--scalar-shadow-1);border-radius:var(--scalar-radius-lg);border:var(--scalar-border-width) solid var(--scalar-border-color);padding:9px;min-width:200px;max-width:300px;flex-direction:column;gap:3px;display:none;z-index:10}.property-example:hover .property-example-value-list[data-v-1b238a2e],.property-example:focus-within .property-example-value-list[data-v-1b238a2e]{display:flex}.property-detail[data-v-3ae98a1b]{display:inline-flex}.property-detail+.property-detail[data-v-3ae98a1b]:before{display:block;content:"·";margin:0 .5ch}.property-detail-truncate[data-v-3ae98a1b]{overflow:hidden}.property-detail-truncate>.property-detail-value[data-v-3ae98a1b]{overflow:hidden;text-overflow:ellipsis}.property-detail-prefix[data-v-3ae98a1b]{color:var(--scalar-color-2)}code.property-detail-value[data-v-3ae98a1b]{font-family:var(--scalar-font-code);font-size:var(--scalar-font-size-3);color:var(--scalar-color-2);background:var(--scalar-background-3);padding:0 4px;border:.5px solid var(--scalar-border-color);border-radius:var(--scalar-radius)}.badge[data-v-1eb90c5b]{color:var(--scalar-color-2);font-size:var(--scalar-micro);background:var(--scalar-background-2);border:var(--scalar-border-width) solid var(--scalar-border-color);padding:2px 6px;border-radius:12px;font-weight:var(--scalar-semibold);display:inline-block;text-transform:uppercase}.property-heading[data-v-71dbcd77]{display:flex;flex-wrap:wrap;align-items:baseline;row-gap:9px;white-space:nowrap}.property-heading[data-v-71dbcd77]:has(+.children),.property-heading[data-v-71dbcd77]:has(+.property-rule){margin-bottom:9px}.property-heading[data-v-71dbcd77]>*{margin-right:9px}.property-heading[data-v-71dbcd77]:last-child{margin-right:0}.property-heading>.property-detail[data-v-71dbcd77]:not(:last-of-type){margin-right:0}.property-name[data-v-71dbcd77]{font-family:var(--scalar-font-code);font-weight:var(--scalar-semibold);font-size:var(--scalar-font-size-3);overflow:hidden;white-space:normal;overflow-wrap:break-word}.property-additional[data-v-71dbcd77]{font-family:var(--scalar-font-code)}.property-required[data-v-71dbcd77],.property-optional[data-v-71dbcd77]{color:var(--scalar-color-2)}.property-required[data-v-71dbcd77]{font-size:var(--scalar-micro);color:var(--scalar-color-orange)}.property-read-only[data-v-71dbcd77]{font-size:var(--scalar-micro);color:var(--scalar-color-blue)}.property-write-only[data-v-71dbcd77]{font-size:var(--scalar-micro);color:var(--scalar-color-green)}.property-discriminator[data-v-71dbcd77]{font-size:var(--scalar-micro);color:var(--scalar-color-purple)}.property-detail[data-v-71dbcd77]{font-size:var(--scalar-micro);color:var(--scalar-color-2);display:flex;align-items:center;min-width:0}.property-const[data-v-71dbcd77]{color:var(--scalar-color-1)}.deprecated[data-v-71dbcd77]{text-decoration:line-through}.property[data-v-28e7d196]{color:var(--scalar-color-1);display:flex;flex-direction:column;padding:8px;font-size:var(--scalar-mini);position:relative}.property.property--level-0[data-v-28e7d196]:has(.property-rule .schema-properties.schema-properties-open>ul li.property){padding-top:0}.property[data-v-28e7d196]:hover{z-index:1}.property--compact.property--level-0[data-v-28e7d196],.property--compact.property--level-1[data-v-28e7d196]{padding:8px 0}.composition-panel .property.property.property.property--level-0[data-v-28e7d196]{padding:0}.property--compact.property--level-0 .composition-panel .property--compact.property--level-1[data-v-28e7d196]{padding:8px}.property[data-v-28e7d196]:has(>.property-rule:nth-of-type(1)):not(.property--compact){padding-top:8px;padding-bottom:8px}.property--deprecated[data-v-28e7d196]{background:repeating-linear-gradient(-45deg,var(--scalar-background-2) 0,var(--scalar-background-2) 2px,transparent 2px,transparent 5px);background-size:100%}.property--deprecated[data-v-28e7d196]>*{opacity:.75}.property-description[data-v-28e7d196]{margin-top:6px;line-height:1.4;font-size:var(--scalar-small)}.property-heading:empty+.property-description[data-v-28e7d196]:last-of-type,.property-description[data-v-28e7d196]:first-of-type:last-of-type{margin-top:0}.property-description[data-v-28e7d196]:has(+.property-rule){margin-bottom:9px}[data-v-28e7d196] .property-description *{color:var(--scalar-color-2)!important}.property[data-v-28e7d196]:not(:last-of-type){border-bottom:var(--scalar-border-width) solid var(--scalar-border-color)}.property-description+.children[data-v-28e7d196],.children+.property-rule[data-v-28e7d196]{margin-top:9px}.children[data-v-28e7d196]{display:flex;flex-direction:column}.children .property--compact.property--level-1[data-v-28e7d196]{padding:12px}.property-example-value[data-v-28e7d196]{all:unset;font-family:var(--scalar-font-code);padding:6px;border-top:var(--scalar-border-width) solid var(--scalar-border-color)}.property-rule[data-v-28e7d196]{border-radius:var(--scalar-radius-lg);display:flex;flex-direction:column}.property-rule[data-v-28e7d196] .composition-panel .schema-card .schema-properties.schema-properties-open{border-top-left-radius:0;border-top-right-radius:0}.property-enum-value[data-v-28e7d196]{color:var(--scalar-color-3);line-height:1.5;word-break:break-word;display:flex;align-items:stretch;position:relative}.property-enum-value-label[data-v-28e7d196]{display:flex;padding:3px 0;font-family:var(--scalar-font-code)}.property-enum-value:last-of-type .property-enum-value-label[data-v-28e7d196]{padding-bottom:0}.property-enum-value[data-v-28e7d196]:before{content:"";margin-right:12px;width:var(--scalar-border-width);display:block;background:currentColor;color:var(--scalar-color-3)}.property-enum-value[data-v-28e7d196]:after{content:"";position:absolute;top:50%;left:0;width:8px;height:var(--scalar-border-width);background:currentColor}.property-enum-value[data-v-28e7d196]:last-of-type:after{bottom:0;height:50%;background:var(--scalar-background-1);border-top:var(--scalar-border-width) solid currentColor}.property-enum-values[data-v-28e7d196]{margin-top:8px;list-style:none}.property-example[data-v-28e7d196]{background:transparent;border:none;display:flex;flex-direction:row;gap:8px}.property-example-label[data-v-28e7d196],.property-example-value[data-v-28e7d196]{padding:3px 0 0}.property-example-value[data-v-28e7d196]{background:var(--scalar-background-2);border-top:0;border-radius:var(--scalar-radius);padding:3px 4px}.property-list[data-v-28e7d196]{border:var(--scalar-border-width) solid var(--scalar-border-color);border-radius:var(--scalar-radius);margin-top:10px}.property-list .property[data-v-28e7d196]:last-of-type{padding-bottom:10px}.property-name[data-v-28e7d196]{font-family:var(--scalar-font-code);font-weight:var(--scalar-semibold)}.enum-toggle-button[data-v-28e7d196]{align-items:center;border:var(--scalar-border-width) solid var(--scalar-border-color);border-radius:13.5px;cursor:pointer;color:var(--scalar-color-2);display:flex;font-weight:var(--scalar-semibold);gap:4px;margin-top:8px;padding:6px 10px;-webkit-user-select:none;user-select:none;white-space:nowrap}.enum-toggle-button[data-v-28e7d196]:hover{color:var(--scalar-color-1)}.enum-toggle-button-icon--open[data-v-28e7d196]{transform:rotate(45deg)}.headers-card[data-v-9293fa9e]{z-index:0;margin-top:12px;margin-bottom:6px;position:relative;font-size:var(--scalar-font-size-4);color:var(--scalar-color-1);align-self:flex-start}.headers-card.headers-card--open[data-v-9293fa9e]{align-self:initial}.headers-card-title[data-v-9293fa9e]{padding:6px 10px;display:flex;align-items:center;gap:4px;color:var(--scalar-color-3);font-weight:var(--scalar-semibold);font-size:var(--scalar-micro);border-radius:13.5px}button.headers-card-title[data-v-9293fa9e]{cursor:pointer}button.headers-card-title[data-v-9293fa9e]:hover{color:var(--scalar-color-1)}.headers-card-title-icon--open[data-v-9293fa9e]{transform:rotate(45deg)}.headers-properties[data-v-9293fa9e]{display:flex;flex-direction:column;border:var(--scalar-border-width) solid var(--scalar-border-color);border-radius:13.5px;width:fit-content}.headers-properties-open>.headers-card-title[data-v-9293fa9e]{border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom:var(--scalar-border-width) solid var(--scalar-border-color)}.headers-properties-open[data-v-9293fa9e]{border-radius:var(--scalar-radius-lg);width:100%}.headers-card .property[data-v-9293fa9e]:last-of-type{padding-bottom:10px}.headers-card-title>.headers-card-title-icon[data-v-9293fa9e]{width:10px;height:10px;margin:0}.headers-card-title>.headers-card-title-icon--open[data-v-9293fa9e]{transform:rotate(45deg)}.parameter-item[data-v-5d044e0e]{display:flex;flex-direction:column;border-top:var(--scalar-border-width) solid var(--scalar-border-color)}.parameter-item:last-of-type .parameter-schema[data-v-5d044e0e]{padding-bottom:0}.parameter-item-container[data-v-5d044e0e]{padding:0}.parameter-item-headers[data-v-5d044e0e]{border:var(--scalar-border-width) solid var(--scalar-border-color)}.parameter-item-name[data-v-5d044e0e]{margin-right:6px;font-weight:var(--scalar-semibold);font-size:var(--scalar-font-size-3);font-family:var(--scalar-font-code);color:var(--scalar-color-1)}.parameter-item-type[data-v-5d044e0e]{font-size:var(--scalar-micro);color:var(--scalar-color-2);margin-right:6px;line-height:1.4;white-space:nowrap;text-overflow:ellipsis;width:100%;overflow:hidden}.parameter-item-trigger-open .parameter-item-type[data-v-5d044e0e]{white-space:normal}.parameter-item-trigger+.parameter-item-container[data-v-5d044e0e] .property--level-0>.property-heading .property-detail-value{font-size:var(--scalar-micro)}.parameter-item-required-optional[data-v-5d044e0e]{color:var(--scalar-color-2);font-weight:var(--scalar-semibold);margin-right:6px;position:relative}.parameter-item--required[data-v-5d044e0e]{text-transform:uppercase;font-size:var(--scalar-micro);font-weight:var(--scalar-semibold);color:var(--scalar-color-orange)}.parameter-item-description[data-v-5d044e0e]{margin-top:3px!important;font-size:var(--scalar-small);color:var(--scalar-color-2);line-height:1.4}.parameter-item-description[data-v-5d044e0e] p{margin-top:4px;font-size:var(--scalar-small);color:var(--scalar-color-2);line-height:1.4}.parameter-schema[data-v-5d044e0e]{padding-bottom:9px;margin-top:3px}.parameter-item-trigger[data-v-5d044e0e]{padding:12px 0;cursor:pointer;outline:none;text-align:left;position:relative;align-items:baseline}.parameter-item-trigger-open[data-v-5d044e0e]{padding-bottom:0}.parameter-item-trigger[data-v-5d044e0e]:after{content:"";position:absolute;height:10px;width:100%;bottom:0}.parameter-item-icon[data-v-5d044e0e]{color:var(--scalar-color-3);left:-19px;position:absolute;top:11px}.parameter-item-trigger:hover .parameter-item-icon[data-v-5d044e0e],.parameter-item-trigger:focus-visible .parameter-item-icon[data-v-5d044e0e]{color:var(--scalar-color-1)}.parameter-item-trigger:focus-visible .parameter-item-icon[data-v-5d044e0e]{outline:1px solid var(--scalar-color-accent);outline-offset:2px;border-radius:var(--scalar-radius)}.parameter-list[data-v-dabf3ac7]{margin-top:24px}.parameter-list-title[data-v-dabf3ac7]{font-size:var(--scalar-font-size-2);font-weight:var(--scalar-semibold);color:var(--scalar-color-1);line-height:1.45;margin-top:12px;margin-bottom:12px}.parameter-list-items[data-v-dabf3ac7]{list-style:none;padding:0;margin:0 0 12px;font-size:var(--scalar-small)}.request-body-header[data-v-6c0fd437]{display:flex;align-items:center;justify-content:space-between;margin-top:24px;padding-bottom:12px;border-bottom:var(--scalar-border-width) solid var(--scalar-border-color);flex-flow:wrap}.request-body-title[data-v-6c0fd437]{display:flex;align-items:center;gap:8px;font-size:var(--scalar-font-size-2);font-weight:var(--scalar-semibold);color:var(--scalar-color-1)}.request-body-required[data-v-6c0fd437]{font-size:var(--scalar-micro);color:var(--scalar-color-orange);font-weight:400}.request-body-description[data-v-6c0fd437]{margin-top:6px;font-size:var(--scalar-small);width:100%}.request-body-description[data-v-6c0fd437] .markdown *{color:var(--scalar-color-2)!important}.section-wrapper[data-v-a371c135]{color:var(--scalar-color-1);padding-top:12px;margin-top:-12px}.section-accordion[data-v-a371c135]{display:flex;flex-direction:column;border-radius:var(--scalar-radius-lg);background:var(--scalar-background-2)}.section-accordion-transparent[data-v-a371c135]{background:transparent;border:1px solid var(--scalar-border-color)}.section-accordion-button[data-v-a371c135]{padding:6px}.section-accordion-button[data-v-a371c135]{display:flex;align-items:center;gap:6px;cursor:pointer}.section-accordion-button-content[data-v-a371c135]{flex:1;min-width:0}.section-accordion-button-actions[data-v-a371c135]{display:flex;align-items:center;gap:6px;color:var(--scalar-color-3)}.section-accordion-chevron[data-v-a371c135]{margin-right:4px;cursor:pointer;opacity:1;color:var(--scalar-color-3)}.section-accordion-button:hover .section-accordion-chevron[data-v-a371c135]{color:var(--scalar-color-1)}.section-accordion-content[data-v-a371c135]{border-top:1px solid var(--scalar-border-color);display:flex;flex-direction:column}.section-accordion-description[data-v-a371c135]{font-weight:var(--scalar-semibold);font-size:var(--scalar-mini);color:var(--scalar-color--1);padding:10px 12px 0}.section-accordion-content-card[data-v-a371c135] .property:last-of-type{padding-bottom:9px}.empty-state[data-v-8261a319]{margin:10px 0 10px 12px;text-align:center;font-size:var(--scalar-micro);min-height:56px;display:flex;align-items:center;justify-content:center;border-radius:var(--scalar-radius-lg);color:var(--scalar-color-2)}.rule-title[data-v-8261a319]{font-family:var(--scalar-font-code);color:var(--scalar-color-1);display:inline-block;margin:12px 0 6px;border-radius:var(--scalar-radius)}.rule[data-v-8261a319]{margin:0 12px;border-radius:var(--scalar-radius-lg)}.rule-items[data-v-8261a319]{counter-reset:list-number;display:flex;flex-direction:column;gap:12px;border-left:1px solid var(--scalar-border-color);padding:12px 0}.rule-item[data-v-8261a319]{counter-increment:list-number;border:1px solid var(--scalar-border-color);border-radius:var(--scalar-radius-lg);overflow:hidden;margin-left:24px}.rule-item[data-v-8261a319]:before{border:1px solid var(--scalar-border-color);border-top:0;border-right:0;content:" ";display:block;width:24px;height:6px;border-radius:0 0 0 var(--scalar-radius-lg);margin-top:6px;color:var(--scalar-color-2);transform:translate(-25px);color:var(--scalar-color-1);position:absolute}.tab-list[data-v-03fdb072]{display:flex;gap:6px;position:relative;flex:1;padding:9px 12px;overflow:auto}.scalar-card-header.scalar-card-header-tabs[data-v-03fdb072]{padding:0}.tab[data-v-d0e07e65]{background:none;border:none;font-size:var(--scalar-mini);font-family:var(--scalar-font);color:var(--scalar-color-2);font-weight:var(--scalar-semibold);line-height:calc(var(--scalar-mini) + 2px);white-space:nowrap;cursor:pointer;padding:0;margin-right:3px;text-transform:uppercase;position:relative;line-height:1.35}.tab[data-v-d0e07e65]:before{content:"";position:absolute;z-index:0;left:-6px;top:-6px;width:calc(100% + 12px);height:calc(100% + 12px);border-radius:var(--scalar-radius);background:var(--scalar-background-3);opacity:0}.tab[data-v-d0e07e65]:hover:before,.tab[data-v-d0e07e65]:focus-visible:before{opacity:1}.tab[data-v-d0e07e65]:focus-visible:before{outline:1px solid var(--scalar-color-accent)}.tab span[data-v-d0e07e65]{z-index:1;position:relative}.tab-selected[data-v-d0e07e65]{color:var(--scalar-color-1);text-decoration:underline;text-underline-offset:var(--scalar-micro)}.scalar-card-footer[data-v-7621d1be]{flex-shrink:0}.text-select{position:relative;height:fit-content}.text-select:has(:focus-visible) .text-select-label{outline:1px solid var(--scalar-color-accent);outline-offset:4px;border-radius:calc(var(--scalar-radius) / 2)}.text-select--single-option{pointer-events:none}.text-select select{border:none;outline:none;cursor:pointer;background:var(--scalar-background-3);box-shadow:-2px 0 0 0 var(--scalar-background-3);position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;-moz-appearance:none;-webkit-appearance:none;appearance:none}.text-select span{font-size:var(--scalar-mini);color:var(--scalar-color-2);font-weight:var(--scalar-semibold);white-space:nowrap;display:flex;align-items:center;justify-content:center}.text-select:hover span{color:var(--scalar-color-1)}.text-select:not(.text-select--single-option) span:after{content:"";width:7px;height:7px;transform:rotate(45deg) translate3d(-2px,-2px,0);display:block;margin-left:6px;box-shadow:1px 1px 0 currentColor}.text-select span:hover{background:var(--scalar-background-2)}.example-selector[data-v-a7e22e14]{padding:4px}.markdown[data-v-027e0301] *{margin:0}.code-copy[data-v-027e0301]{display:flex;align-items:center;justify-content:center;appearance:none;-webkit-appearance:none;outline:none;background:transparent;cursor:pointer;color:var(--scalar-color-3);border:none;padding:0;margin-right:12px}.code-copy[data-v-027e0301]:hover{color:var(--scalar-color-1)}.code-copy svg[data-v-027e0301]{width:13px;height:13px}.response-card-footer[data-v-027e0301]{display:flex;flex-direction:column;flex-shrink:0;padding:10px 12px;gap:8px;border-top:var(--scalar-border-width) solid var(--scalar-border-color)}.response-example-selector[data-v-027e0301]{align-self:flex-start;margin:-4px}.response-description[data-v-027e0301]{font-weight:var(--scalar-semibold);font-size:var(--scalar-micro);color:var(--scalar-color--1);display:flex;align-items:center;box-sizing:border-box}.schema-type[data-v-027e0301]{font-size:var(--scalar-micro);color:var(--scalar-color-2);font-weight:var(--scalar-semibold);background:var(--scalar-background-3);padding:2px 4px;border-radius:4px;margin-right:4px}.schema-example[data-v-027e0301]{font-size:var(--scalar-micro);color:var(--scalar-color-2);font-weight:var(--scalar-semibold)}.example-response-tab[data-v-027e0301]{display:block;margin:6px}.scalar-card-container[data-v-027e0301]{flex:1;background:var(--scalar-background-2);display:grid}.scalar-card-container[data-v-027e0301] .cm-scroller{overflow-y:hidden}.scalar-card-checkbox[data-v-027e0301]{display:flex;align-items:center;justify-content:center;position:relative;min-height:17px;cursor:pointer;-webkit-user-select:none;user-select:none;font-weight:var(--scalar-semibold);font-size:var(--scalar-mini);color:var(--scalar-color-2);width:fit-content;white-space:nowrap;margin-right:9px;gap:6px}.scalar-card-checkbox:has(.scalar-card-checkbox-input:focus-visible) .scalar-card-checkbox-checkmark[data-v-027e0301]{outline:1px solid var(--scalar-color-accent)}.scalar-card-checkbox[data-v-027e0301]:hover{color:var(--scalar-color--1)}.scalar-card-checkbox .scalar-card-checkbox-input[data-v-027e0301]{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.scalar-card-checkbox-checkmark[data-v-027e0301]{height:17px;width:17px;border-radius:var(--scalar-radius);background-color:transparent;background-color:var(--scalar-background-3);box-shadow:inset 0 0 0 1px var(--scalar-border-color)}.scalar-card-checkbox[data-v-027e0301]:has(.scalar-card-checkbox-input:checked){color:var(--scalar-color-1)}.scalar-card-checkbox .scalar-card-checkbox-input:checked~.scalar-card-checkbox-checkmark[data-v-027e0301]{background-color:var(--scalar-button-1);box-shadow:none}.scalar-card-checkbox-checkmark[data-v-027e0301]:after{content:"";position:absolute;display:none}.scalar-card-checkbox .scalar-card-checkbox-input:checked~.scalar-card-checkbox-checkmark[data-v-027e0301]:after{display:block}.scalar-card-checkbox .scalar-card-checkbox-checkmark[data-v-027e0301]:after{right:6px;top:36.5%;width:5px;height:9px;border:solid 1px var(--scalar-button-1-color);border-width:0 1.5px 1.5px 0;transform:rotate(45deg)}.request[data-v-3a3b2243]{display:flex;flex-wrap:nowrap}.request-header[data-v-3a3b2243]{display:flex;gap:6px;text-transform:initial}.request-method[data-v-3a3b2243]{font-family:var(--scalar-font-code);text-transform:uppercase}.request-client-picker[data-v-3a3b2243]{padding-left:12px;padding-right:9px}.request-card-footer[data-v-3a3b2243]{display:flex;justify-content:flex-end;padding:6px;flex-shrink:0}.request-card-footer-addon[data-v-3a3b2243]{display:flex;align-items:center;flex:1;min-width:0}.request-editor-section[data-v-3a3b2243]{display:flex;flex:1}.request-card-simple[data-v-3a3b2243]{display:flex;align-items:center;justify-content:space-between;padding:8px 8px 8px 12px;font-size:var(--scalar-small)}.code-snippet[data-v-3a3b2243]{display:flex;flex-direction:column;width:100%}.show-api-client-button[data-v-4263a1c2]{-webkit-appearance:none;appearance:none;border:none;padding:4px 6px;white-space:nowrap;border-radius:var(--scalar-radius);display:flex;justify-content:center;align-items:center;font-weight:var(--scalar-semibold);font-size:var(--scalar-mini);color:var(--scalar-background-2);font-family:var(--scalar-font);background:var(--scalar-button-1);position:relative;cursor:pointer;box-sizing:border-box;box-shadow:inset 0 0 0 1px #0000001a;outline-offset:2px}.show-api-client-button span[data-v-4263a1c2],.show-api-client-button svg[data-v-4263a1c2]{fill:currentColor;color:var(--scalar-button-1-color);z-index:1}.show-api-client-button[data-v-4263a1c2]:hover{background:var(--scalar-button-1-hover)}.show-api-client-button svg[data-v-4263a1c2]{margin-right:4px}.operation-title[data-v-bbf0f07b]{justify-content:space-between;display:flex}.operation-details[data-v-bbf0f07b]{flex-shrink:1;align-items:center;gap:9px;min-width:0;margin-top:0;display:flex}.endpoint-type[data-v-bbf0f07b]{z-index:0;width:60px;font-size:var(--scalar-small);text-transform:uppercase;font-weight:var(--scalar-bold);font-family:var(--scalar-font);flex-shrink:0;justify-content:center;align-items:center;gap:6px;padding:6px;display:flex;position:relative}.endpoint-type[data-v-bbf0f07b]:after{content:"";z-index:-1;opacity:.15;border-radius:var(--scalar-radius-lg);background:currentColor;position:absolute;inset:0}.endpoint-anchor[data-v-bbf0f07b]{flex-shrink:1;align-items:center;min-width:0;font-size:20px;display:flex}.endpoint-anchor.label[data-v-bbf0f07b]{display:flex}.endpoint-label[data-v-bbf0f07b]{min-width:0;color:var(--scalar-color-1);flex-shrink:1;align-items:baseline;gap:9px;display:flex}.endpoint-label-path[data-v-bbf0f07b]{font-family:var(--scalar-font-code);font-size:var(--scalar-mini);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.endpoint-label-path[data-v-bbf0f07b] em{color:var(--scalar-color-2)}.endpoint-label-name[data-v-bbf0f07b]{color:var(--scalar-color-2);font-size:var(--scalar-small);text-overflow:ellipsis;white-space:nowrap;flex-shrink:1000000000;overflow:hidden}.endpoint-try-hint[data-v-bbf0f07b]{flex-shrink:0;padding:2px}.endpoint-copy[data-v-bbf0f07b]{color:currentColor}.endpoint-copy[data-v-bbf0f07b] svg{stroke-width:2px}.endpoint-content[data-v-bbf0f07b]{grid-auto-columns:1fr;grid-auto-flow:row;gap:9px;padding:9px;display:grid}@media (min-width:1000px){.endpoint-content[data-v-bbf0f07b]{grid-auto-flow:column}}@container (max-width:900px){.endpoint-content[data-v-bbf0f07b]{grid-template-columns:1fr}}.endpoint-content[data-v-bbf0f07b]>*{max-height:unset}.operation-details-card[data-v-bbf0f07b]{flex-direction:column;gap:12px;display:flex}.operation-details-card-item[data-v-bbf0f07b] .parameter-list{border:1px solid var(--scalar-border-color);border-radius:var(--scalar-radius-lg);margin-top:0}.operation-details-card-item[data-v-bbf0f07b]{flex-direction:column;gap:12px;display:flex}.operation-details-card-item[data-v-bbf0f07b] .parameter-list-items{margin-bottom:0}.operation-details-card[data-v-bbf0f07b] .parameter-item:last-of-type .parameter-schema{padding-bottom:12px}.operation-details-card[data-v-bbf0f07b] .parameter-list .parameter-list{margin-bottom:12px}.operation-details-card[data-v-bbf0f07b] .parameter-item{margin:0;padding:0 9px}.operation-details-card[data-v-bbf0f07b] .property{margin:0;padding:9px}:is(.operation-details-card[data-v-bbf0f07b] .parameter-list-title,.operation-details-card[data-v-bbf0f07b] .request-body-title){text-transform:uppercase;font-weight:var(--scalar-bold);font-size:var(--scalar-mini);color:var(--scalar-color-2);margin:0;padding:9px;line-height:1.33}.callback-sticky-offset[data-v-f1d7309a]{top:var(--refs-header-height, 0px);z-index:100}.callback-operation-container[data-v-f1d7309a] .request-body-header{--scalar-font-size-2: var(--scalar-font-size-4);margin-top:0;padding:8px;border-bottom:none;border:.5px solid var(--scalar-border-color);border-radius:var(--scalar-radius-lg) var(--scalar-radius-lg) 0 0;background:color-mix(in srgb,var(--scalar-background-2) 50%,transparent)}.callback-operation-container[data-v-f1d7309a] .request-body-description{margin-top:0}.callback-operation-container[data-v-f1d7309a] ul li.property.property--level-1{padding:8px}.callback-operation-container[data-v-f1d7309a] .request-body-schema{background-color:var(--scalar-background-1);border:var(--scalar-border-width) solid var(--scalar-border-color);border-top:none;overflow:hidden;border-radius:0 0 var(--scalar-radius-lg) var(--scalar-radius-lg)}.callback-operation-container[data-v-f1d7309a] .parameter-list{margin-top:0}.callback-operation-container[data-v-f1d7309a] .parameter-list-title{background:color-mix(in srgb,var(--scalar-background-2) 50%,transparent);border-radius:var(--scalar-radius-lg) var(--scalar-radius-lg) 0 0;padding:8px;margin-bottom:0;border:var(--scalar-border-width) solid var(--scalar-border-color);border-bottom:none;--scalar-font-size-2: var(--scalar-font-size-4)}.callback-operation-container[data-v-f1d7309a] .parameter-list-items{border:var(--scalar-border-width) solid var(--scalar-border-color);border-radius:0 0 var(--scalar-radius-lg) var(--scalar-radius-lg)}.callback-operation-container[data-v-f1d7309a] .parameter-list-items>li:first-of-type{border-top:none}.callback-operation-container[data-v-f1d7309a] .parameter-list-items>li{padding:0 8px}.examples[data-v-ae05c30d]{position:sticky;top:calc(var(--refs-header-height) + 24px)}.deprecated[data-v-ae05c30d] *{text-decoration:line-through}.example-path[data-v-ae05c30d]{color:var(--scalar-color-2);font-family:var(--scalar-font-code)}.example-path[data-v-ae05c30d] em{color:var(--scalar-color-1);font-style:normal}.references-loading{position:absolute;top:0;left:0;right:0;z-index:1;grid-area:rendered;background:var(--scalar-background-1)}.references-loading-top-spacer{top:-1px}.references-loading-hidden-tag .section-container>.section:first-child{display:none}@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){[data-v-3c00dd17],[data-v-3c00dd17]:before,[data-v-3c00dd17]:after,[data-v-3c00dd17]::backdrop{--tw-outline-style:solid}}}.download-container[data-v-3c00dd17]{z-index:0;flex-direction:column;gap:16px;width:fit-content;margin:0 .5px 24px;display:flex;position:relative}.download-container[data-v-3c00dd17]:has(:focus-visible):before,.download-container[data-v-3c00dd17]:hover:before{content:"";border-radius:var(--scalar-radius-lg);width:calc(100% + 24px);height:90px;box-shadow:var(--scalar-shadow-2);pointer-events:none;background:var(--scalar-background-1);position:absolute;top:-11px;left:-12px}.download-button[data-v-3c00dd17]{color:var(--scalar-link-color);cursor:pointer;outline:none;justify-content:center;align-items:center;gap:4px;height:fit-content;padding:0;display:flex;position:relative;white-space:nowrap!important}.download-button[data-v-3c00dd17]:before{border-radius:var(--scalar-radius);content:"";width:calc(100% + 18px);height:calc(100% + 16px);position:absolute;top:-8px;left:-9px}.download-button[data-v-3c00dd17]:hover:before{background:var(--scalar-background-2);border:var(--scalar-border-width)solid var(--scalar-border-color)}.download-button[data-v-3c00dd17]:focus-visible:before{background:var(--scalar-background-2);border:var(--scalar-border-width)solid var(--scalar-border-color);outline-style:var(--tw-outline-style);outline-width:1px}.download-button span[data-v-3c00dd17]{--font-color:var(--scalar-link-color,var(--scalar-color-accent));--font-visited:var(--scalar-link-color-visited,var(--scalar-color-2));-webkit-text-decoration:var(--scalar-text-decoration);text-decoration:var(--scalar-text-decoration);color:var(--font-color);font-weight:var(--scalar-link-font-weight,var(--scalar-semibold));text-underline-offset:.25rem;text-decoration-thickness:1px;-webkit-text-decoration-color:var(--font-color);text-decoration-color:var(--font-color)}@supports (color:color-mix(in lab,red,red)){.download-button span[data-v-3c00dd17]{-webkit-text-decoration-color:color-mix(in srgb,var(--font-color)30%,transparent);text-decoration-color:color-mix(in srgb,var(--font-color)30%,transparent)}}.download-button span[data-v-3c00dd17]{z-index:1;align-items:center;gap:6px;line-height:1.625;display:flex}.download-button:hover span[data-v-3c00dd17]{color:var(--scalar-link-color-hover,var(--scalar-color-accent));-webkit-text-decoration:var(--scalar-text-decoration-hover);text-decoration:var(--scalar-text-decoration-hover)}.download-button[data-v-3c00dd17]:nth-of-type(2){clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.download-container:has(:focus-visible) .download-button[data-v-3c00dd17]:nth-of-type(2),.download-container:hover .download-button[data-v-3c00dd17]:nth-of-type(2){clip:auto;white-space:normal;width:auto;height:auto;margin:0;padding:0;position:absolute;top:42px;overflow:visible}.extension[data-v-3c00dd17]{z-index:1;background:var(--scalar-link-color,var(--scalar-color-accent));color:var(--scalar-background-1)}.download-container:has(:focus-visible) .extension[data-v-3c00dd17],.download-container:hover .extension[data-v-3c00dd17]{opacity:1}.introduction-description-heading[data-v-2843ffaf]{scroll-margin-top:64px}.introduction-description[data-v-2843ffaf]{display:flex;flex-direction:column}.references-classic .introduction-description[data-v-2843ffaf] img{max-width:720px}.sticky-cards[data-v-fa96ab44]{display:flex;flex-direction:column;position:sticky;top:calc(var(--refs-header-height) + 24px)}.client-libraries-content[data-v-502b1c76]{container:client-libraries-content / inline-size;display:flex;justify-content:center;overflow:hidden;padding:0 12px;background-color:var(--scalar-background-1);border-left:var(--scalar-border-width) solid var(--scalar-border-color);border-right:var(--scalar-border-width) solid var(--scalar-border-color)}.client-libraries[data-v-502b1c76]{display:flex;align-items:center;justify-content:center;width:100%;position:relative;cursor:pointer;white-space:nowrap;padding:8px 2px;gap:6px;color:var(--scalar-color-3);border-bottom:1px solid transparent;-webkit-user-select:none;user-select:none}.client-libraries[data-v-502b1c76]:first-child{border-radius:var(--scalar-radius) 0 0 0}.client-libraries[data-v-502b1c76]:not(.client-libraries__active):hover:before{content:"";position:absolute;width:calc(100% - 4px);height:calc(100% - 4px);background:var(--scalar-background-2);left:2px;top:2px;z-index:0;border-radius:var(--scalar-radius)}.client-libraries[data-v-502b1c76]:active{color:var(--scalar-color-1)}.client-libraries[data-v-502b1c76]:focus-visible{outline:none;box-shadow:inset 0 0 0 1px var(--scalar-color-accent)}@media screen and (max-width: 450px){.client-libraries[data-v-502b1c76]:nth-of-type(4),.client-libraries[data-v-502b1c76]:nth-of-type(5){display:none}}.client-libraries-icon[data-v-502b1c76]{max-width:14px;max-height:14px;min-width:14px;width:100%;aspect-ratio:1;display:flex;align-items:center;justify-content:center;position:relative;box-sizing:border-box;color:currentColor}.client-libraries-icon__more svg[data-v-502b1c76]{height:initial}@container client-libraries-content (width < 400px){.client-libraries__select[data-v-502b1c76]{width:fit-content}.client-libraries__select .client-libraries-icon__more+span[data-v-502b1c76]{display:none}}@container client-libraries-content (width < 380px){.client-libraries[data-v-502b1c76]{width:100%}.client-libraries span[data-v-502b1c76]{display:none}}.client-libraries__active[data-v-502b1c76]{color:var(--scalar-color-1);border-bottom:1px solid var(--scalar-color-1)}@keyframes codeloader-502b1c76{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.client-libraries .client-libraries-text[data-v-502b1c76]{font-size:var(--scalar-mini);font-weight:var(--scalar-semibold);position:relative;display:flex;align-items:center}.client-libraries__active .client-libraries-text[data-v-502b1c76]{color:var(--scalar-color-1)}.client-libraries__select select[data-v-502b1c76]{background:var(--scalar-background-3);color:var(--scalar-color-2);opacity:0;height:100%;width:100%;aspect-ratio:1;position:absolute;top:0;left:0;cursor:pointer;z-index:1;-webkit-appearance:none;appearance:none;border:none}.client-libraries__select[data-v-502b1c76]:has(select:focus-visible){border-radius:var(--scalar-radius);box-shadow:inset 0 0 0 1px var(--scalar-color-accent)}@media screen and (max-width: 600px){.references-classic .client-libraries[data-v-502b1c76]{flex-direction:column}}.selected-client[data-v-681c8e27]{color:var(--scalar-color-1);font-size:var(--scalar-mini);font-family:var(--scalar-font-code);padding:9px 12px;border-top:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background:var(--scalar-background-1);border:var(--scalar-border-width) solid var(--scalar-border-color);border-bottom-left-radius:var(--scalar-radius-lg);border-bottom-right-radius:var(--scalar-radius-lg);min-height:fit-content}.client-libraries-heading[data-v-681c8e27]{font-weight:var(--scalar-semibold);font-size:var(--scalar-mini);color:var(--scalar-color-1);padding:9px 12px;background-color:var(--scalar-background-2);display:flex;align-items:center;max-height:32px;border:var(--scalar-border-width) solid var(--scalar-border-color);border-top-left-radius:var(--scalar-radius-lg);border-top-right-radius:var(--scalar-radius-lg)}[data-v-681c8e27] .scalar-codeblock-pre .hljs{margin-top:8px}.section-accordion-wrapper[data-v-6f297947]{padding:0 60px}.section-accordion[data-v-6f297947]{position:relative;width:100%;max-width:var(--refs-content-max-width);margin:auto}.section-accordion-content[data-v-6f297947]{display:flex;flex-direction:column;gap:12px;padding-top:12px}.section-accordion-button[data-v-6f297947]{width:100%;display:flex;cursor:pointer;padding:6px 0;margin:-6px 0;border-radius:var(--scalar-radius)}.section-accordion-chevron[data-v-6f297947]{position:absolute;left:-24px;top:10px;color:var(--scalar-color-3)}.section-accordion-button:hover .section-accordion-chevron[data-v-6f297947]{color:var(--scalar-color-1)}.section-accordion-title[data-v-6f297947]{display:flex;flex-direction:column;align-items:flex-start;flex:1;padding:0 6px}.section-accordion-title[data-v-6f297947] .section-header-wrapper{grid-template-columns:1fr}.section-accordion-title[data-v-6f297947] .section-header{margin-bottom:0}@container narrow-references-container (max-width: 900px){.section-accordion-chevron[data-v-6f297947]{width:16px;left:-16px;top:14px}.section-accordion-wrapper[data-v-6f297947]{padding:calc(var(--refs-header-height)) 24px 0 24px}}.tag-section[data-v-ab8ddc14]{margin-bottom:48px}.tag-name[data-v-ab8ddc14]{text-transform:capitalize}.tag-description[data-v-ab8ddc14]{padding-bottom:4px;text-align:left}.reference-models[data-v-ce1dd773]{margin-bottom:48px}.reference-models-anchor[data-v-ce1dd773]{display:flex;align-items:center;font-size:20px;padding-left:6px;color:var(--scalar-color-1)}.reference-models-label[data-v-ce1dd773]{font-size:var(--scalar-mini)}.reference-models-label[data-v-ce1dd773] em{font-weight:var(--scalar-bold)}.collapsible-section[data-v-4b9f7b57]{border-top:var(--scalar-border-width) solid var(--scalar-border-color);position:relative}.collapsible-section-header[data-v-4b9f7b57]{color:var(--scalar-color-1)}.collapsible-section .collapsible-section-trigger[data-v-4b9f7b57]{display:flex;align-items:center;cursor:pointer;padding:10px 0;font-size:var(--scalar-font-size-3);z-index:1;position:relative}.collapsible-section-trigger svg[data-v-4b9f7b57]{color:var(--scalar-color-3);position:absolute;left:-19px}.collapsible-section:hover .collapsible-section-trigger svg[data-v-4b9f7b57]{color:var(--scalar-color-1)}.collapsible-section .collapsible-section-trigger[data-v-4b9f7b57] .anchor-copy{line-height:18.5px}.collapsible-section-content[data-v-4b9f7b57]{padding:0;margin:0;scroll-margin-top:140px}.collapsible-section:not(:last-child) .collapsible-section-content[data-v-4b9f7b57]{margin-bottom:10px}.models-list[data-v-4228514f]{display:contents}.models-list-truncated .models-list-item[data-v-4228514f]:last-child{border-bottom:var(--scalar-border-width) solid var(--scalar-border-color)}.show-more-models[data-v-4228514f]{margin-top:32px;top:0}.models-list-item[data-v-4228514f]:hover{z-index:10}.narrow-references-container{container-name:narrow-references-container;container-type:inline-size}.render-loading[data-v-86bac6ee]{height:calc(var(--full-height) - var(--refs-header-height));display:flex;align-items:center;justify-content:center}.introduction-card[data-v-86bac6ee]{display:flex;flex-direction:column}.introduction-card-item[data-v-86bac6ee]{display:flex;margin-bottom:12px;flex-direction:column;justify-content:start}.introduction-card-item[data-v-86bac6ee]:has(.description) .server-form-container{border-bottom-left-radius:0;border-bottom-right-radius:0}.introduction-card-item[data-v-86bac6ee] .request-item{border-bottom:0}.introduction-card-title[data-v-86bac6ee]{font-weight:var(--scalar-semibold);font-size:var(--scalar-mini);color:var(--scalar-color-3)}.introduction-card-row[data-v-86bac6ee]{gap:24px}@media (min-width: 600px){.introduction-card-row[data-v-86bac6ee]{flex-flow:row wrap}}.introduction-card-row[data-v-86bac6ee]>*{flex:1}@media (min-width: 600px){.introduction-card-row[data-v-86bac6ee]>*{min-width:min-content}}@media (max-width: 600px){.introduction-card-row[data-v-86bac6ee]>*{max-width:100%}}@container (max-width: 900px){.introduction-card-row[data-v-86bac6ee]{flex-direction:column;align-items:stretch;gap:0px}}.introduction-card[data-v-86bac6ee] .security-scheme-label{text-transform:uppercase;font-weight:var(--scalar-semibold)}.references-classic .introduction-card-row[data-v-86bac6ee] .scalar-card:nth-of-type(2) .scalar-card-header{display:none}.references-classic .introduction-card-row[data-v-86bac6ee] .scalar-card:nth-of-type(2) .scalar-card-header.scalar-card--borderless+.scalar-card-content{margin-top:0}.section-flare[data-v-86bac6ee]{top:0;right:0;pointer-events:none}/*! tailwindcss v4.1.8 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-divide-y-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-space-x-reverse:0;--tw-content:""}}}@layer scalar-base{@supports (color:color-mix(in lab,red,red)){.light-mode{--scalar-color-alert:color-mix(in srgb,var(--scalar-color-orange),var(--scalar-color-1)20%)}}@supports (color:color-mix(in lab,red,red)){.light-mode{--scalar-color-danger:color-mix(in srgb,var(--scalar-color-red),var(--scalar-color-1)20%)}}@supports (color:color-mix(in lab,red,red)){.light-mode{--scalar-background-alert:color-mix(in srgb,var(--scalar-color-orange),var(--scalar-background-1)95%)}}@supports (color:color-mix(in lab,red,red)){.light-mode{--scalar-background-danger:color-mix(in srgb,var(--scalar-color-red),var(--scalar-background-1)95%)}}@supports (color:color-mix(in lab,red,red)){.dark-mode{--scalar-tooltip-background:color-mix(in srgb,var(--scalar-background-1),#fff 10%)}}@supports (color:color-mix(in lab,red,red)){.dark-mode{--scalar-color-danger:color-mix(in srgb,var(--scalar-color-red),var(--scalar-background-1)20%)}}@supports (color:color-mix(in lab,red,red)){.dark-mode{--scalar-background-alert:color-mix(in srgb,var(--scalar-color-orange),var(--scalar-background-1)95%)}}@supports (color:color-mix(in lab,red,red)){.dark-mode{--scalar-background-danger:color-mix(in srgb,var(--scalar-color-red),var(--scalar-background-1)95%)}}:root,:host{--leading-snug:1.375;--leading-normal:1.5;--ease-in-out:cubic-bezier(.4,0,.2,1);--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1)}:root,:host{--leading-snug:1.375;--ease-in-out:cubic-bezier(.4,0,.2,1);--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1)}@supports (color:color-mix(in lab,red,red)){.light-mode{--scalar-color-alert:var(--scalar-color-orange)}@supports (color:color-mix(in lab,red,red)){.light-mode{--scalar-color-alert:color-mix(in srgb,var(--scalar-color-orange),var(--scalar-color-1)20%)}}.light-mode{--scalar-color-danger:var(--scalar-color-red)}@supports (color:color-mix(in lab,red,red)){.light-mode{--scalar-color-danger:color-mix(in srgb,var(--scalar-color-red),var(--scalar-color-1)20%)}}.light-mode{--scalar-background-alert:var(--scalar-color-orange)}@supports (color:color-mix(in lab,red,red)){.light-mode{--scalar-background-alert:color-mix(in srgb,var(--scalar-color-orange),var(--scalar-background-1)95%)}}.light-mode{--scalar-background-danger:var(--scalar-color-red)}@supports (color:color-mix(in lab,red,red)){.light-mode{--scalar-background-danger:color-mix(in srgb,var(--scalar-color-red),var(--scalar-background-1)95%)}}.dark-mode{--scalar-tooltip-background:var(--scalar-background-1)}@supports (color:color-mix(in lab,red,red)){.dark-mode{--scalar-tooltip-background:color-mix(in srgb,var(--scalar-background-1),#fff 10%)}}.dark-mode{--scalar-color-danger:var(--scalar-color-red)}@supports (color:color-mix(in lab,red,red)){.dark-mode{--scalar-color-danger:color-mix(in srgb,var(--scalar-color-red),var(--scalar-background-1)20%)}}.dark-mode{--scalar-background-alert:var(--scalar-color-orange)}@supports (color:color-mix(in lab,red,red)){.dark-mode{--scalar-background-alert:color-mix(in srgb,var(--scalar-color-orange),var(--scalar-background-1)95%)}}.dark-mode{--scalar-background-danger:var(--scalar-color-red)}@supports (color:color-mix(in lab,red,red)){.dark-mode{--scalar-background-danger:color-mix(in srgb,var(--scalar-color-red),var(--scalar-background-1)95%)}}}body{line-height:inherit;margin:0}:root{--scalar-border-width:.5px;--scalar-radius:3px;--scalar-radius-lg:6px;--scalar-radius-xl:8px;--scalar-font:"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;--scalar-font-code:"JetBrains Mono",ui-monospace,Menlo,Monaco,"Cascadia Mono","Segoe UI Mono","Roboto Mono","Oxygen Mono","Ubuntu Monospace","Source Code Pro","Fira Mono","Droid Sans Mono","Courier New",monospace;--scalar-heading-1:24px;--scalar-page-description:16px;--scalar-heading-2:20px;--scalar-heading-3:20px;--scalar-heading-4:16px;--scalar-heading-5:16px;--scalar-heading-6:16px;--scalar-paragraph:16px;--scalar-small:14px;--scalar-mini:13px;--scalar-micro:12px;--scalar-bold:600;--scalar-semibold:500;--scalar-regular:400;--scalar-font-size-1:21px;--scalar-font-size-2:16px;--scalar-font-size-3:14px;--scalar-font-size-4:13px;--scalar-font-size-5:12px;--scalar-font-size-6:12px;--scalar-font-size-7:10px;--scalar-line-height-1:32px;--scalar-line-height-2:24px;--scalar-line-height-3:20px;--scalar-line-height-4:18px;--scalar-line-height-5:16px;--scalar-font-medium:500;--scalar-font-bold:700;--scalar-text-decoration:none;--scalar-text-decoration-hover:underline;--scalar-link-font-weight:inherit;--scalar-sidebar-indent:18px}.dark-mode{color-scheme:dark;--scalar-scrollbar-color:#ffffff2e;--scalar-scrollbar-color-active:#ffffff5c;--scalar-button-1:#fff;--scalar-button-1-hover:#ffffffe6;--scalar-button-1-color:black;--scalar-shadow-1:0 1px 3px 0 #0000001a;--scalar-shadow-2:0 0 0 .5px var(--scalar-border-color),#0f0f0f33 0px 3px 6px,#0f0f0f66 0px 9px 24px;--scalar-lifted-brightness:1.45;--scalar-backdrop-brightness:.5;--scalar-link-color:var(--scalar-color-accent);--scalar-link-color-hover:var(--scalar-color-accent);--scalar-text-decoration-color:currentColor;--scalar-text-decoration-color-hover:currentColor}.light-mode{color-scheme:light;--scalar-scrollbar-color-active:#0000005c;--scalar-scrollbar-color:#0000002e;--scalar-button-1:#000;--scalar-button-1-hover:#000c;--scalar-button-1-color:#ffffffe6;--scalar-shadow-1:0 1px 3px 0 #0000001c;--scalar-shadow-2:#00000014 0px 13px 20px 0px,#00000014 0px 3px 8px 0px,#eeeeed 0px 0 0 .5px;--scalar-lifted-brightness:1;--scalar-backdrop-brightness:1;--scalar-link-color:var(--scalar-color-accent);--scalar-link-color-hover:var(--scalar-color-accent);--scalar-text-decoration-color:currentColor;--scalar-text-decoration-color-hover:currentColor}.light-mode .dark-mode{color-scheme:dark!important}@media (max-width:460px){:root{--scalar-font-size-1:22px;--scalar-font-size-2:14px;--scalar-font-size-3:12px}}@media (max-width:720px){:root{--scalar-heading-1:24px;--scalar-page-description:20px}}:root{--scalar-text-decoration:underline;--scalar-text-decoration-hover:underline}.light-mode{--scalar-background-1:#fff;--scalar-background-2:#f6f6f6;--scalar-background-3:#e7e7e7;--scalar-background-accent:#8ab4f81f;--scalar-color-1:#2a2f45;--scalar-color-2:#757575;--scalar-color-3:#8e8e8e;--scalar-color-accent:var(--scalar-color-1);--scalar-border-color:#dfdfdf}.dark-mode{--scalar-background-1:#0f0f0f;--scalar-background-2:#1a1a1a;--scalar-background-3:#272727;--scalar-color-1:#e7e7e7;--scalar-color-2:#a4a4a4;--scalar-color-3:#797979;--scalar-color-accent:var(--scalar-color-1);--scalar-background-accent:#3ea6ff1f;--scalar-border-color:#2d2d2d}.light-mode .t-doc__sidebar,.dark-mode .t-doc__sidebar{--scalar-sidebar-background-1:var(--scalar-background-1);--scalar-sidebar-color-1:var(--scalar-color-1);--scalar-sidebar-color-2:var(--scalar-color-2);--scalar-sidebar-border-color:var(--scalar-border-color);--scalar-sidebar-item-hover-background:var(--scalar-background-2);--scalar-sidebar-item-hover-color:currentColor;--scalar-sidebar-item-active-background:var(--scalar-background-2);--scalar-sidebar-color-active:var(--scalar-color-1);--scalar-sidebar-indent-border:var(--scalar-sidebar-border-color);--scalar-sidebar-indent-border-hover:var(--scalar-sidebar-border-color);--scalar-sidebar-indent-border-active:var(--scalar-sidebar-border-color);--scalar-sidebar-search-background:transparent;--scalar-sidebar-search-color:var(--scalar-color-3);--scalar-sidebar-search-border-color:var(--scalar-border-color)}.light-mode{--scalar-color-green:#069061;--scalar-color-red:#ef0006;--scalar-color-yellow:#edbe20;--scalar-color-blue:#0082d0;--scalar-color-orange:#fb892c;--scalar-color-purple:#5203d1;--scalar-button-1:#000;--scalar-button-1-hover:#000c;--scalar-button-1-color:#ffffffe6;--scalar-tooltip-background:#1a1a1ae6;--scalar-tooltip-color:#ffffffd9;--scalar-color-alert:var(--scalar-color-orange)}@supports (color:color-mix(in lab,red,red)){.light-mode{--scalar-color-alert:var(--scalar-color-orange)}@supports (color:color-mix(in lab,red,red)){.light-mode{--scalar-color-alert:var(--scalar-color-orange)}@supports (color:color-mix(in lab,red,red)){.light-mode{--scalar-color-alert:color-mix(in srgb,var(--scalar-color-orange),var(--scalar-color-1)20%)}}}}.light-mode{--scalar-color-danger:var(--scalar-color-red)}@supports (color:color-mix(in lab,red,red)){.light-mode{--scalar-color-danger:var(--scalar-color-red)}@supports (color:color-mix(in lab,red,red)){.light-mode{--scalar-color-danger:var(--scalar-color-red)}@supports (color:color-mix(in lab,red,red)){.light-mode{--scalar-color-danger:color-mix(in srgb,var(--scalar-color-red),var(--scalar-color-1)20%)}}}}.light-mode{--scalar-background-alert:var(--scalar-color-orange)}@supports (color:color-mix(in lab,red,red)){.light-mode{--scalar-background-alert:var(--scalar-color-orange)}@supports (color:color-mix(in lab,red,red)){.light-mode{--scalar-background-alert:var(--scalar-color-orange)}@supports (color:color-mix(in lab,red,red)){.light-mode{--scalar-background-alert:color-mix(in srgb,var(--scalar-color-orange),var(--scalar-background-1)95%)}}}}.light-mode{--scalar-background-danger:var(--scalar-color-red)}@supports (color:color-mix(in lab,red,red)){.light-mode{--scalar-background-danger:var(--scalar-color-red)}@supports (color:color-mix(in lab,red,red)){.light-mode{--scalar-background-danger:var(--scalar-color-red)}@supports (color:color-mix(in lab,red,red)){.light-mode{--scalar-background-danger:color-mix(in srgb,var(--scalar-color-red),var(--scalar-background-1)95%)}}}}.dark-mode{--scalar-color-green:#00b648;--scalar-color-red:#dc1b19;--scalar-color-yellow:#ffc90d;--scalar-color-blue:#4eb3ec;--scalar-color-orange:#ff8d4d;--scalar-color-purple:#b191f9;--scalar-button-1:#fff;--scalar-button-1-hover:#ffffffe6;--scalar-button-1-color:black;--scalar-tooltip-background:var(--scalar-background-1)}@supports (color:color-mix(in lab,red,red)){.dark-mode{--scalar-tooltip-background:var(--scalar-background-1)}@supports (color:color-mix(in lab,red,red)){.dark-mode{--scalar-tooltip-background:var(--scalar-background-1)}@supports (color:color-mix(in lab,red,red)){.dark-mode{--scalar-tooltip-background:color-mix(in srgb,var(--scalar-background-1),#fff 10%)}}}}.dark-mode{--scalar-tooltip-color:#fffffff2;--scalar-color-danger:var(--scalar-color-red)}@supports (color:color-mix(in lab,red,red)){.dark-mode{--scalar-color-danger:var(--scalar-color-red)}@supports (color:color-mix(in lab,red,red)){.dark-mode{--scalar-color-danger:var(--scalar-color-red)}@supports (color:color-mix(in lab,red,red)){.dark-mode{--scalar-color-danger:color-mix(in srgb,var(--scalar-color-red),var(--scalar-background-1)20%)}}}}.dark-mode{--scalar-background-alert:var(--scalar-color-orange)}@supports (color:color-mix(in lab,red,red)){.dark-mode{--scalar-background-alert:var(--scalar-color-orange)}@supports (color:color-mix(in lab,red,red)){.dark-mode{--scalar-background-alert:var(--scalar-color-orange)}@supports (color:color-mix(in lab,red,red)){.dark-mode{--scalar-background-alert:color-mix(in srgb,var(--scalar-color-orange),var(--scalar-background-1)95%)}}}}.dark-mode{--scalar-background-danger:var(--scalar-color-red)}@supports (color:color-mix(in lab,red,red)){.dark-mode{--scalar-background-danger:var(--scalar-color-red)}@supports (color:color-mix(in lab,red,red)){.dark-mode{--scalar-background-danger:var(--scalar-color-red)}@supports (color:color-mix(in lab,red,red)){.dark-mode{--scalar-background-danger:color-mix(in srgb,var(--scalar-color-red),var(--scalar-background-1)95%)}}}}@supports (color:color(display-p3 1 1 1)){.light-mode{--scalar-color-accent:var(--scalar-color-1);--scalar-color-green:color(display-p3 .023529 .564706 .380392);--scalar-color-red:color(display-p3 .937255 0 .023529);--scalar-color-yellow:color(display-p3 .929412 .745098 .12549);--scalar-color-blue:color(display-p3 0 .509804 .815686);--scalar-color-orange:color(display-p3 .984314 .537255 .172549);--scalar-color-purple:color(display-p3 .321569 .011765 .819608)}.dark-mode{--scalar-color-accent:var(--scalar-color-1);--scalar-color-green:color(display-p3 0 .713725 .282353);--scalar-color-red:color(display-p3 .862745 .105882 .098039);--scalar-color-yellow:color(display-p3 1 .788235 .05098);--scalar-color-blue:color(display-p3 .305882 .701961 .92549);--scalar-color-orange:color(display-p3 1 .552941 .301961);--scalar-color-purple:color(display-p3 .694118 .568627 .976471)}}:root,:host{--leading-snug:1.375;--ease-in-out:cubic-bezier(.4,0,.2,1);--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--leading-normal:1.5}}@layer scalar-theme;.scalar-app .\\@container{container-type:inline-size}.scalar-app .top-2\\.5{top:10px}.scalar-app .-left-5{left:-20px}.scalar-app .my-3{margin-block:12px}.scalar-app .mt-6{margin-top:24px}.scalar-app .size-4\\.5{width:18px;height:18px}.scalar-app .min-h-3{min-height:12px}.scalar-app .min-h-dvh{min-height:100dvh}.scalar-app .w-96{width:384px}.scalar-app .min-w-3{min-width:12px}.scalar-app .min-w-\\[62px\\]{min-width:62px}.scalar-app .flex-shrink,.scalar-app .shrink{flex-shrink:1}.scalar-app .content-end{align-content:flex-end}.scalar-app .overflow-x-scroll{overflow-x:scroll}.scalar-app .rounded-b-none{border-bottom-right-radius:0;border-bottom-left-radius:0}@supports (color:color-mix(in lab,red,red)){.scalar-app .bg-b-1\\.5{background-color:color-mix(in srgb,var(--scalar-background-1),var(--scalar-background-2))}}.scalar-app .py-1\\.75{padding-block:7px}.scalar-app .pl-1\\.75{padding-left:7px}.scalar-app .text-current{color:currentColor}.scalar-app .italic{font-style:italic}.scalar-app .-outline-offset-2{outline-offset:-2px}.scalar-app .\\[--scalar-address-bar-height\\:0px\\]{--scalar-address-bar-height:0px}.scalar-app .group-open\\:rotate-90:is(:where(.group):is([open],:popover-open,:open) *){rotate:90deg}.scalar-app .group-open\\:flex-wrap:is(:where(.group):is([open],:popover-open,:open) *){flex-wrap:wrap}.scalar-app .group-open\\:whitespace-normal:is(:where(.group):is([open],:popover-open,:open) *){white-space:normal}.scalar-app .group-focus-within\\/parameter-item\\:opacity-100:is(:where(.group\\/parameter-item):focus-within *){opacity:1}@media (hover:hover){.scalar-app .group-hover\\:flex:is(:where(.group):hover *){display:flex}.scalar-app .group-hover\\:text-c-1:is(:where(.group):hover *){color:var(--scalar-color-1)}.scalar-app .group-hover\\/parameter-item\\:opacity-100:is(:where(.group\\/parameter-item):hover *){opacity:1}}.scalar-app .empty\\:hidden:empty{display:none}@media (hover:hover){.scalar-app .hover\\:bg-b-2:hover{background-color:var(--scalar-background-2)}.scalar-app .hover\\:text-c-1:hover{color:var(--scalar-color-1)}}.scalar-app .has-focus\\:outline:has(:focus){outline-style:var(--tw-outline-style);outline-width:1px}@supports (color:color-mix(in lab,red,red)){.scalar-app .bg-b-1\\.5{background-color:var(--scalar-background-1)}@supports (color:color-mix(in lab,red,red)){.scalar-app .bg-b-1\\.5{background-color:color-mix(in srgb,var(--scalar-background-1),var(--scalar-background-2))}}}@media (hover:hover){.scalar-app .group-hover\\:text-c-1:is(:where(.group):hover *),.scalar-app .group-hover\\/button\\:text-c-1:is(:where(.group\\/button):hover *){color:var(--scalar-color-1)}.scalar-app .group-hover\\/item\\:opacity-100:is(:where(.group\\/item):hover *){opacity:1}.scalar-app .hover\\:bg-b-2:hover{background-color:var(--scalar-background-2)}.scalar-app .hover\\:bg-b-3:hover{background-color:var(--scalar-background-3)}.scalar-app .hover\\:bg-h-btn:hover{background-color:var(--scalar-button-1-hover)}.scalar-app .hover\\:text-c-1:hover{color:var(--scalar-color-1)}.scalar-app .hover\\:underline:hover{text-decoration-line:underline}.scalar-app .hover\\:brightness-90:hover{--tw-brightness:brightness(90%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-divide-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-ordinal{syntax:"*";inherits:false}@property --tw-slashed-zero{syntax:"*";inherits:false}@property --tw-numeric-figure{syntax:"*";inherits:false}@property --tw-numeric-spacing{syntax:"*";inherits:false}@property --tw-numeric-fraction{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@keyframes fade-in-f525638b{0%{opacity:0}70%{opacity:0}to{opacity:1}}@keyframes rotate-f525638b{0%{transform:scale(3.5)rotate(0)}to{transform:scale(3.5)rotate(360deg)}}@supports (color:color-mix(in lab,red,red)){.scalar-app .markdown a{-webkit-text-decoration-color:color-mix(in srgb,var(--font-color)30%,transparent);text-decoration-color:color-mix(in srgb,var(--font-color)30%,transparent)}}@supports (color:color-mix(in lab,red,red)){.scalar-app .markdown .markdown-alert{background-color:color-mix(in srgb,var(--scalar-background-2),transparent)}}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@keyframes fadein-layout-589f8aa0{0%{opacity:0}to{opacity:1}}@keyframes fadein-modal-589f8aa0{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translate(0)}}@supports (color:color-mix(in lab,red,red)){.search-background[data-v-466c736b]{background:color-mix(in srgb,var(--scalar-background-1),var(--scalar-background-2))}}:where(.scalar-app){font-family:var(--scalar-font);color:var(--scalar-color-1);-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.15}:where(.scalar-app) *,:where(.scalar-app) :before,:where(.scalar-app) :after{box-sizing:border-box;border-style:solid;border-width:0;border-color:var(--scalar-border-color);outline-width:1px;outline-style:none;outline-color:var(--scalar-color-accent);font-feature-settings:inherit;font-variation-settings:inherit;font-family:inherit;font-size:inherit;font-weight:inherit;line-height:inherit;color:inherit;margin:unset;padding:unset;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}:where(.scalar-app) :before,:where(.scalar-app) :after{--tw-content:""}:where(.scalar-app) button,:where(.scalar-app) input,:where(.scalar-app) optgroup,:where(.scalar-app) select,:where(.scalar-app) textarea{background:0 0}:where(.scalar-app) ::file-selector-button{background:0 0}:where(.scalar-app) ol,:where(.scalar-app) ul,:where(.scalar-app) menu{list-style:none}:where(.scalar-app) input:where(:not([type=button],[type=reset],[type=submit])),:where(.scalar-app) select,:where(.scalar-app) textarea{border-radius:var(--scalar-radius);border-width:1px}:where(.scalar-app) input::placeholder{color:var(--scalar-color-3);font-family:var(--scalar-font)}:where(.scalar-app) input[type=search]::-webkit-search-cancel-button{-webkit-appearance:none;appearance:none}:where(.scalar-app) input[type=search]::-webkit-search-decoration{-webkit-appearance:none;appearance:none}:where(.scalar-app) summary::-webkit-details-marker{display:none}:where(.scalar-app) input:-webkit-autofill{-webkit-background-clip:text!important;background-clip:text!important}:where(.scalar-app) :focus-visible{border-radius:var(--scalar-radius);outline-style:solid}:where(.scalar-app) button:focus-visible,:where(.scalar-app) [role=button]:focus-visible{outline-offset:-1px}:where(.scalar-app) button,:where(.scalar-app) [role=button]{cursor:pointer}:where(.scalar-app) :disabled{cursor:default}:where(.scalar-app) img,:where(.scalar-app) svg,:where(.scalar-app) video,:where(.scalar-app) canvas,:where(.scalar-app) audio,:where(.scalar-app) iframe,:where(.scalar-app) embed,:where(.scalar-app) object{vertical-align:middle;display:block}:where(.scalar-app) [hidden]{display:none}.scalar-app .cm-scroller,.scalar-app .custom-scroll{scrollbar-color:transparent transparent;scrollbar-width:thin;-webkit-overflow-scrolling:touch;overflow-y:auto}.scalar-app .custom-scroll-self-contain-overflow{overscroll-behavior:contain}.scalar-app .cm-scroller:hover,.scalar-app .custom-scroll:hover,.scalar-app.scalar-scrollbars-obtrusive .cm-scroller,.scalar-app.scalar-scrollbars-obtrusive .custom-scroll{scrollbar-color:var(--scalar-scrollbar-color,transparent)transparent}.scalar-app .cm-scroller:hover::-webkit-scrollbar-thumb{background:var(--scalar-scrollbar-color);background-clip:content-box;border:3px solid #0000}.scalar-app .custom-scroll:hover::-webkit-scrollbar-thumb{background:var(--scalar-scrollbar-color);background-clip:content-box;border:3px solid #0000}.scalar-app .cm-scroller::-webkit-scrollbar-thumb:active{background:var(--scalar-scrollbar-color-active);background-clip:content-box;border:3px solid #0000}.scalar-app .custom-scroll::-webkit-scrollbar-thumb:active{background:var(--scalar-scrollbar-color-active);background-clip:content-box;border:3px solid #0000}.scalar-app .cm-scroller::-webkit-scrollbar-corner{background:0 0}.scalar-app .custom-scroll::-webkit-scrollbar-corner{background:0 0}.scalar-app .cm-scroller::-webkit-scrollbar{width:12px;height:12px}.scalar-app .custom-scroll::-webkit-scrollbar{width:12px;height:12px}.scalar-app .cm-scroller::-webkit-scrollbar-track{background:0 0}.scalar-app .custom-scroll::-webkit-scrollbar-track{background:0 0}.scalar-app .cm-scroller::-webkit-scrollbar-thumb{background:padding-box content-box;border:3px solid #0000;border-radius:20px}.scalar-app .custom-scroll::-webkit-scrollbar-thumb{background:padding-box content-box;border:3px solid #0000;border-radius:20px}@media (pointer:coarse){.scalar-app .cm-scroller,.scalar-app .custom-scroll{padding-right:12px}}.scalar-app .invisible{visibility:hidden}.scalar-app .inset-y-0{inset-block:0}.scalar-app .top-0\\.5{top:2px}.scalar-app .top-22{top:88px}.scalar-app .top-px{top:1px}.scalar-app .left-1\\.75{left:7px}.scalar-app .left-2\\.5{left:10px}.scalar-app .left-4{left:16px}.scalar-app .left-border{left:var(--scalar-border-width)}.scalar-app .left-px{left:1px}.scalar-app .z-\\[1001\\]{z-index:1001}.scalar-app .z-tooltip{z-index:99999}.scalar-app .-m-1\\.5{margin:-6px}.scalar-app .-m-px{margin:-1px}.scalar-app .-mx-0\\.75{margin-inline:-3px}.scalar-app .-mx-px{margin-inline:-1px}.scalar-app .mx-px{margin-inline:1px}.scalar-app .-my-1\\.5{margin-block:-6px}.scalar-app .my-0\\.75{margin-block:3px}.scalar-app .-mt-1\\.5{margin-top:-6px}.scalar-app .mt-0{margin-top:0}.scalar-app .mt-\\[15svh\\]{margin-top:15svh}.scalar-app .mt-\\[20svh\\]{margin-top:20svh}.scalar-app .-mr-0\\.25{margin-right:-1px}.scalar-app .mr-0{margin-right:0}.scalar-app .mr-\\[calc\\(18px-var\\(--scalar-sidebar-indent\\)\\)\\]{margin-right:calc(18px - var(--scalar-sidebar-indent))}.scalar-app .-mb-1{margin-bottom:-4px}.scalar-app .-ml-0\\.75{margin-left:-3px}.scalar-app .line-clamp-4{-webkit-line-clamp:4;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.scalar-app .\\!hidden{display:none!important}.scalar-app .inline{display:inline}.scalar-app .size-2{width:8px;height:8px}.scalar-app .size-3{width:12px;height:12px}.scalar-app .size-6{width:24px;height:24px}.scalar-app .size-\\[23px\\]{width:23px;height:23px}.scalar-app .size-full{width:100%;height:100%}.scalar-app .h-24{height:96px}.scalar-app .h-32{height:128px}.scalar-app .h-\\[100dvh\\]{height:100dvh}.scalar-app .h-border{height:var(--scalar-border-width)}.scalar-app .h-dvh{height:100dvh}.scalar-app .max-h-20{max-height:80px}.scalar-app .max-h-\\[80svh\\]{max-height:80svh}.scalar-app .max-h-\\[90svh\\]{max-height:90svh}.scalar-app .max-h-dvh{max-height:100dvh}.scalar-app .max-h-radix-popper{max-height:calc(var(--radix-popper-available-height) - 8px)}.scalar-app .min-h-5{min-height:20px}.scalar-app .min-h-6{min-height:24px}.scalar-app .min-h-96{min-height:384px}.scalar-app .min-h-header{min-height:48px}.scalar-app .w-12{width:48px}.scalar-app .w-16{width:64px}.scalar-app .w-24{width:96px}.scalar-app .w-32{width:128px}.scalar-app .w-40{width:160px}.scalar-app .w-48{width:192px}.scalar-app .w-\\[38px\\]{width:38px}.scalar-app .w-\\[100dvw\\]{width:100dvw}.scalar-app .w-\\[calc\\(100vw-12px\\)\\]{width:calc(100vw - 12px)}.scalar-app .w-\\[var\\(--scalar-sidebar-indent\\)\\]{width:var(--scalar-sidebar-indent)}.scalar-app .w-border{width:var(--scalar-border-width)}.scalar-app .w-min{width:min-content}.scalar-app .max-w-\\[360px\\]{max-width:360px}.scalar-app .max-w-\\[480px\\]{max-width:480px}.scalar-app .max-w-\\[540px\\]{max-width:540px}.scalar-app .max-w-\\[640px\\]{max-width:640px}.scalar-app .max-w-\\[800px\\]{max-width:800px}.scalar-app .max-w-\\[1000px\\]{max-width:1000px}.scalar-app .max-w-xs{max-width:320px}.scalar-app .min-w-5{min-width:20px}.scalar-app .min-w-6{min-width:24px}.scalar-app .min-w-max{min-width:max-content}.scalar-app .min-w-min{min-width:min-content}.scalar-app .shrink{flex-shrink:1}.scalar-app .translate-x-2\\.5{--tw-translate-x:10px;translate:var(--tw-translate-x)var(--tw-translate-y)}.scalar-app .translate-x-\\[14px\\]{--tw-translate-x:14px;translate:var(--tw-translate-x)var(--tw-translate-y)}.scalar-app .rotate-180{rotate:180deg}.scalar-app .cursor-not-allowed{cursor:not-allowed}.scalar-app .appearance-none{-webkit-appearance:none;appearance:none}.scalar-app .items-baseline{align-items:baseline}.scalar-app .gap-16{gap:64px}.scalar-app .gap-x-4{column-gap:16px}.scalar-app .gap-y-8{row-gap:32px}.scalar-app .overflow-y-scroll{overflow-y:scroll}.scalar-app .rounded-none{border-radius:0}.scalar-app .border-1,.scalar-app .border-\\[1px\\]{border-style:var(--tw-border-style);border-width:1px}.scalar-app .border-solid{--tw-border-style:solid;border-style:solid}.scalar-app .border-border{border-color:var(--scalar-border-color)}.scalar-app .border-c-alert{border-color:var(--scalar-color-alert)}.scalar-app .border-c-danger{border-color:var(--scalar-color-danger)}.scalar-app .border-red{border-color:var(--scalar-color-red)}.scalar-app .border-sidebar-border{border-color:var(--scalar-sidebar-border-color,var(--scalar-border-color))}.scalar-app .bg-b-1,.scalar-app .bg-b-1\\.5{background-color:var(--scalar-background-1)}@supports (color:color-mix(in lab,red,red)){.scalar-app .bg-b-1\\.5{background-color:var(--scalar-background-1)}@supports (color:color-mix(in lab,red,red)){.scalar-app .bg-b-1\\.5{background-color:var(--scalar-background-1)}@supports (color:color-mix(in lab,red,red)){.scalar-app .bg-b-1\\.5{background-color:color-mix(in srgb,var(--scalar-background-1),var(--scalar-background-2))}}}}.scalar-app .bg-b-alert{background-color:var(--scalar-background-alert)}.scalar-app .bg-b-btn{background-color:var(--scalar-button-1)}.scalar-app .bg-b-tooltip{background-color:var(--scalar-tooltip-background)}.scalar-app .bg-backdrop{background-color:#00000038}.scalar-app .bg-border{background-color:var(--scalar-border-color)}.scalar-app .bg-c-danger{background-color:var(--scalar-color-danger)}.scalar-app .bg-red{background-color:var(--scalar-color-red)}.scalar-app .bg-sidebar-b-1{background-color:var(--scalar-sidebar-background-1,var(--scalar-background-1))}.scalar-app .bg-sidebar-indent-border{background-color:var(--scalar-sidebar-indent-border,var(--scalar-border-color))}.scalar-app .bg-transparent{background-color:#0000}.scalar-app .bg-white{background-color:#fff}.scalar-app .p-6{padding:24px}.scalar-app .px-9{padding-inline:36px}.scalar-app .py-4{padding-block:16px}.scalar-app .text-lg{font-size:var(--scalar-font-size-2)}.scalar-app .text-nowrap{text-wrap:nowrap}.scalar-app .text-wrap{text-wrap:wrap}.scalar-app .text-c-accent{color:var(--scalar-color-accent)}.scalar-app .text-c-alert{color:var(--scalar-color-alert)}.scalar-app .text-c-danger{color:var(--scalar-color-danger)}.scalar-app .text-c-tooltip{color:var(--scalar-tooltip-color)}.scalar-app .text-white{color:#fff}.scalar-app .ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.scalar-app .opacity-40{opacity:.4}.scalar-app .shadow-sm{--tw-shadow:var(--tw-shadow-color,#00000017)0px 1px 4px;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.scalar-app .outline-offset-1{outline-offset:1px}.scalar-app .outline-offset-\\[-1px\\]{outline-offset:-1px}.scalar-app .backdrop-blur{--tw-backdrop-blur:blur(8px);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.scalar-app .duration-100{--tw-duration:.1s;transition-duration:.1s}:is(.scalar-app .\\*\\:flex-1>*){flex:1}:is(.scalar-app .\\*\\:gap-px>*){gap:1px}@media (hover:hover){.scalar-app .group-hover\\:text-c-1:is(:where(.group):hover *),.scalar-app .group-hover\\/button\\:text-c-1:is(:where(.group\\/button):hover *){color:var(--scalar-color-1)}.scalar-app .group-hover\\/item\\:opacity-100:is(:where(.group\\/item):hover *){opacity:1}}.scalar-app .group-focus-visible\\/toggle\\:outline:is(:where(.group\\/toggle):focus-visible *){outline-style:var(--tw-outline-style);outline-width:1px}.scalar-app .peer-checked\\:text-c-2:is(:where(.peer):checked~*){color:var(--scalar-color-2)}.scalar-app .peer-checked\\:opacity-100:is(:where(.peer):checked~*){opacity:1}.scalar-app .placeholder\\:font-\\[inherit\\]::placeholder{font-family:inherit}.scalar-app .focus-within\\:outline-none:focus-within{--tw-outline-style:none;outline-style:none}@media (hover:hover){.scalar-app .hover\\:bg-b-2:hover{background-color:var(--scalar-background-2)}.scalar-app .hover\\:bg-b-3:hover{background-color:var(--scalar-background-3)}.scalar-app .hover\\:bg-h-btn:hover{background-color:var(--scalar-button-1-hover)}.scalar-app .hover\\:text-c-1:hover{color:var(--scalar-color-1)}.scalar-app .hover\\:underline:hover{text-decoration-line:underline}.scalar-app .hover\\:brightness-90:hover{--tw-brightness:brightness(90%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}}.scalar-app .focus-visible\\:border-c-btn:focus-visible{border-color:var(--scalar-button-1-color)}.scalar-app .focus-visible\\:ring-1:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.scalar-app .focus-visible\\:ring-c-accent:focus-visible{--tw-ring-color:var(--scalar-color-accent)}.scalar-app .focus-visible\\:outline:focus-visible{outline-style:var(--tw-outline-style);outline-width:1px}.scalar-app .active\\:bg-b-btn:active{background-color:var(--scalar-button-1)}.scalar-app .active\\:shadow-none:active{--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.scalar-app .active\\:brightness-90:active{--tw-brightness:brightness(90%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.scalar-app .has-\\[\\:focus-visible\\]\\:outline:has(:focus-visible),.scalar-app .has-\\[input\\:focus-visible\\]\\:outline:has(:is(input:focus-visible)){outline-style:var(--tw-outline-style);outline-width:1px}@media (min-width:800px){.scalar-app .md\\:w-\\[calc\\(100vw-16px\\)\\]{width:calc(100vw - 16px)}}@media (min-width:1000px){.scalar-app .lg\\:w-\\[calc\\(100vw-32px\\)\\]{width:calc(100vw - 32px)}.scalar-app .lg\\:w-full{width:100%}}.scalar-app .dark\\:bg-b-3:where(.dark-mode,.dark-mode *){background-color:var(--scalar-background-3)}.scalar-app .dark\\:bg-backdrop-dark:where(.dark-mode,.dark-mode *){background-color:#00000073}@media (hover:hover){.scalar-app .dark\\:hover\\:bg-b-3:where(.dark-mode,.dark-mode *):hover{background-color:var(--scalar-background-3)}}.scalar-app .ui-open\\:rotate-180[data-headlessui-state~=open],:where([data-headlessui-state~=open]) :is(.scalar-app .ui-open\\:rotate-180){rotate:180deg}@media (max-width:720px) and (max-height:480px){.scalar-app .zoomed\\:\\!whitespace-normal{white-space:normal!important}}.loader-wrapper[data-v-f525638b]{--loader-size:50%;justify-content:center;align-items:center;display:flex;position:relative}.svg-loader[data-v-f525638b]{width:var(--loader-size);height:var(--loader-size);fill:none;stroke:currentColor;background-color:#0000;top:1rem;right:.9rem;overflow:visible}.svg-path[data-v-f525638b]{stroke-width:12px;fill:none;transition:all .3s}.svg-x-mark[data-v-f525638b]{stroke-dasharray:57;stroke-dashoffset:57px;transition-delay:0s}.svg-check-mark[data-v-f525638b]{stroke-dasharray:149;stroke-dashoffset:149px;transition-delay:0s}.icon-is-invalid .svg-x-mark[data-v-f525638b],.icon-is-valid .svg-check-mark[data-v-f525638b]{stroke-dashoffset:0;transition-delay:.3s}.circular-loader[data-v-f525638b]{transform-origin:50%;background:0 0;animation:.7s linear infinite rotate-f525638b,.4s fade-in-f525638b;transform:scale(3.5)}.loader-path[data-v-f525638b]{stroke-dasharray:50 200;stroke-dashoffset:-100px;stroke-linecap:round}.loader-path-off[data-v-f525638b]{stroke-dasharray:50 200;stroke-dashoffset:-100px;opacity:0;transition:opacity .3s}.scalar-code-block{background:inherit;padding:.75rem;position:relative;overflow:auto}.scalar-code-block:hover .copy-button,.copy-button:focus-visible{opacity:100}.scalar-codeblock-pre{all:unset;text-wrap:nowrap;white-space-collapse:preserve;background:0 0;border-radius:0;width:fit-content;margin:0}.scalar-code-copy{justify-content:flex-end;align-items:flex-start;display:flex;position:sticky;inset:0}.copy-button{background-color:var(--scalar-background-2);border:1px solid var(--scalar-border-color);color:var(--scalar-color-3);cursor:pointer;opacity:0;border-radius:3px;align-items:center;height:30px;margin-bottom:-30px;padding:5px;transition:opacity .15s ease-in-out,color .15s ease-in-out;display:flex;position:relative;top:0;right:0}.scalar-code-copy,.copy-button{background:inherit}.copy-button:hover{color:var(--scalar-color-1)}.copy-button svg{stroke-width:1.5px}.toggle-icon-ellipse[data-v-60be8692]{background:var(--scalar-background-1);border-radius:50%;width:7px;height:7px;transition:width .3s ease-in-out,height .3s ease-in-out;display:inline-block;position:relative;overflow:hidden;box-shadow:inset 0 0 0 1px}.toggle-icon-moon-mask[data-v-60be8692]{background:var(--scalar-background-1);border:1px solid;border-radius:50%;width:100%;height:100%;transition:transform .3s ease-in-out;display:block;position:absolute;bottom:2.5px;left:2.5px;transform:translate(4px,-4px)}.toggle-icon-sun-ray[data-v-60be8692]{background:currentColor;border-radius:8px;width:12px;height:1px;transition:transform .3s ease-in-out;position:absolute}.toggle-icon-sun-ray[data-v-60be8692]:nth-of-type(2){transform:rotate(90deg)}.toggle-icon-sun-ray[data-v-60be8692]:nth-of-type(3){transform:rotate(45deg)}.toggle-icon-sun-ray[data-v-60be8692]:nth-of-type(4){transform:rotate(-45deg)}.toggle-icon-dark .toggle-icon-ellipse[data-v-60be8692]{width:10px;height:10px;-webkit-mask-image:radial-gradient(circle at 0 100%,pink 10px,#0000 12px);mask-image:radial-gradient(circle at 0 100%,pink 10px,#0000 12px)}.toggle-icon-dark .toggle-icon-sun-ray[data-v-60be8692]{transform:scale(0)}.toggle-icon-dark .toggle-icon-moon-mask[data-v-60be8692]{transform:translateZ(0)}.scalar-icon[data-v-b651bb23],.scalar-icon[data-v-b651bb23] *{stroke-width:var(--c07589c2)}.scalar-app :where(code.hljs) *{font-size:inherit;font-family:var(--scalar-font-code);text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;-moz-tab-size:4;tab-size:4;line-height:1.4}.scalar-app code.hljs{all:unset;font-size:inherit;color:var(--scalar-color-2);font-family:var(--scalar-font-code);counter-reset:linenumber;display:inline-block}.scalar-app .hljs{color:var(--scalar-color-2);background:0 0}.scalar-app .hljs .line:before{color:var(--scalar-color-3);counter-increment:linenumber;content:counter(linenumber);min-width:calc(var(--line-digits)*1ch);text-align:right;margin-right:.7em;display:inline-block}.scalar-app .hljs-comment,.scalar-app .hljs-quote{color:var(--scalar-color-3);font-style:italic}.scalar-app .hljs-number{color:var(--scalar-color-orange)}.scalar-app .hljs-regexp,.scalar-app .hljs-string,.scalar-app .hljs-built_in{color:var(--scalar-color-blue)}.scalar-app .hljs-title.class_{color:var(--scalar-color-1)}.scalar-app .hljs-keyword{color:var(--scalar-color-purple)}.scalar-app .hljs-title.function_{color:var(--scalar-color-orange)}.scalar-app .hljs-subst,.scalar-app .hljs-name{color:var(--scalar-color-blue)}.scalar-app .hljs-attr,.scalar-app .hljs-attribute{color:var(--scalar-color-1)}.scalar-app .hljs-addition,.scalar-app .hljs-literal,.scalar-app .hljs-selector-tag,.scalar-app .hljs-type{color:var(--scalar-color-green)}.scalar-app .hljs-selector-attr,.scalar-app .hljs-selector-pseudo{color:var(--scalar-color-orange)}.scalar-app .hljs-doctag,.scalar-app .hljs-section,.scalar-app .hljs-title{color:var(--scalar-color-blue)}.scalar-app .hljs-selector-id,.scalar-app .hljs-template-variable,.scalar-app .hljs-variable{color:var(--scalar-color-1)}.scalar-app .hljs-name,.scalar-app .hljs-section,.scalar-app .hljs-strong{font-weight:var(--scalar-semibold)}.scalar-app .hljs-bullet,.scalar-app .hljs-link,.scalar-app .hljs-meta,.scalar-app .hljs-symbol{color:var(--scalar-color-blue)}.scalar-app .hljs-deletion{color:var(--scalar-color-red)}.scalar-app .hljs-formula{background:var(--scalar-color-1)}.scalar-app .hljs-emphasis{font-style:italic}.scalar-app .credential .credential-value{color:#0000;font-size:0}.scalar-app .credential:after{content:"·····";color:var(--scalar-color-3);-webkit-user-select:none;user-select:none}.hljs.language-html{color:var(--scalar-color-1)}.hljs.language-html .hljs-attr{color:var(--scalar-color-2)}.hljs.language-curl .hljs-string{color:var(--scalar-color-blue)}.hljs.language-curl .hljs-literal{color:var(--scalar-color-1)}.hljs.language-php .hljs-variable{color:var(--scalar-color-blue)}.hljs.language-objectivec .hljs-meta{color:var(--scalar-color-1)}.hljs.language-objectivec .hljs-built_in,.hljs-built_in{color:var(--scalar-color-orange)}.scalar-app .markdown{--scalar-refs-heading-spacing:24px;--markdown-border:var(--scalar-border-width)solid var(--scalar-border-color);--markdown-spacing-sm:12px;--markdown-spacing-md:16px;--markdown-line-height:1.625;font-family:var(--scalar-font);word-break:break-word}.scalar-app .markdown>*{margin-bottom:var(--markdown-spacing-md)}.scalar-app .markdown>:not(h1):not(h2):not(h3):not(h4):not(h5):not(h6):last-child{margin-bottom:0}.scalar-app .markdown h1{--font-size:1.5rem;--markdown-line-height:32px}.scalar-app .markdown h2,.scalar-app .markdown h3{--font-size:1.25rem;--markdown-line-height:1.3}.scalar-app .markdown h4,.scalar-app .markdown h5,.scalar-app .markdown h6{--font-size:1rem}.scalar-app .markdown h1,.scalar-app .markdown h2,.scalar-app .markdown h3,.scalar-app .markdown h4,.scalar-app .markdown h5,.scalar-app .markdown h6{font-size:var(--font-size);font-weight:var(--scalar-bold);margin-top:var(--scalar-refs-heading-spacing);margin-bottom:var(--markdown-spacing-sm);scroll-margin-top:1rem;display:block}.scalar-app .markdown b,.scalar-app .markdown strong{font-weight:var(--scalar-bold)}.scalar-app .markdown p{color:inherit;line-height:var(--markdown-line-height);display:block}.scalar-app .markdown img{border-radius:var(--scalar-radius);max-width:100%;overflow:hidden}.scalar-app .markdown ul:not(.contains-task-list),.scalar-app .markdown ol{flex-direction:column;gap:2px;display:flex}.scalar-app .markdown ul:not(.contains-task-list){list-style-position:inside}.scalar-app .markdown ul{list-style-type:disc}.scalar-app .markdown li{line-height:var(--markdown-line-height);position:relative}.scalar-app .markdown ul li{padding-left:var(--markdown-spacing-md)}.scalar-app .markdown ol{counter-reset:item;padding-left:37.5px}.scalar-app .markdown ol li:before{content:counter(item)".";counter-increment:item;font:var(--scalar-font);font-weight:var(--scalar-semibold);line-height:var(--markdown-line-height);margin-right:var(--markdown-spacing-sm);position:absolute;top:0;left:-24px}.scalar-app .markdown ol li:before,.scalar-app .markdown ol ol ol li:before,.scalar-app .markdown ol ol ol ol ol ol li:before{content:counter(item,decimal)"."}.scalar-app .markdown ol ol li:before,.scalar-app .markdown ol ol ol ol li:before,.scalar-app .markdown ol ol ol ol ol ol ol li:before{content:counter(item,lower-alpha)"."}.scalar-app .markdown ol ol li:before,.scalar-app .markdown ol ol ol ol ol li:before,.scalar-app .markdown ol ol ol ol ol ol ol ol li:before{content:counter(item,lower-roman)"."}.scalar-app .markdown ul:first-of-type li:first-of-type{margin-top:0}.scalar-app .markdown table{table-layout:fixed;border-collapse:collapse;width:100%;box-shadow:0 0 0 var(--scalar-border-width) var(--scalar-border-color);border-radius:var(--scalar-radius);margin:1em 0;display:table;position:relative;overflow-x:auto}.scalar-app .markdown tbody,.scalar-app .markdown thead{vertical-align:middle}.scalar-app .markdown tbody{display:table-row-group}.scalar-app .markdown thead{display:table-header-group}.scalar-app .markdown tr{border-color:inherit;vertical-align:inherit;display:table-row}.scalar-app .markdown td,.scalar-app .markdown th{vertical-align:top;min-width:1em;line-height:var(--markdown-line-height);word-break:initial;font-size:var(--scalar-small);color:var(--scalar-color-1);border-right:var(--markdown-border);border-bottom:var(--markdown-border);padding:8.5px 16px;display:table-cell;position:relative}.scalar-app .markdown td>*,.scalar-app .markdown th>*{margin-bottom:0}.scalar-app .markdown th:empty{display:none}.scalar-app .markdown td:first-of-type,.scalar-app .markdown th:first-of-type{border-left:none}.scalar-app .markdown td:last-of-type,.scalar-app .markdown th:last-of-type{border-right:none}.scalar-app .markdown tr:last-of-type td{border-bottom:none}.scalar-app .markdown th{font-weight:var(--scalar-bold);text-align:left;background:var(--scalar-background-2);border-left-color:#0000}.scalar-app .markdown th:first-of-type{border-top-left-radius:var(--scalar-radius)}.scalar-app .markdown th:last-of-type{border-top-right-radius:var(--scalar-radius)}.scalar-app .markdown tr>[align=left]{text-align:left}.scalar-app .markdown tr>[align=right]{text-align:right}.scalar-app .markdown tr>[align=center]{text-align:center}.scalar-app .markdown details{border:var(--markdown-border);border-radius:var(--scalar-radius);color:var(--scalar-color-1)}.scalar-app .markdown details>:not(summary){margin:var(--markdown-spacing-md);margin-bottom:0}.scalar-app .markdown details>p:has(>strong):not(:has(:not(strong))){margin-bottom:8px}.scalar-app .markdown details>p:has(>strong):not(:has(:not(strong)))+*{margin-top:0}.scalar-app .markdown details>table{width:calc(100% - calc(var(--markdown-spacing-md)*2))}.scalar-app .markdown summary{background-color:var(--scalar-background-2);border-radius:var(--scalar-radius);align-items:top;height:40px;font-weight:var(--scalar-semibold);cursor:pointer;-webkit-user-select:none;user-select:none;padding:11px 0 11px 37px;display:flex;position:relative}.scalar-app .markdown details[open]{padding-bottom:var(--markdown-spacing-md)}.scalar-app .markdown details[open] summary{border-bottom:var(--markdown-border);border-bottom-right-radius:0;border-bottom-left-radius:0}.scalar-app .markdown summary:after{content:"";top:calc(var(--markdown-spacing-sm) + 1px);width:var(--markdown-spacing-md);height:var(--markdown-spacing-md);background-color:var(--scalar-color-3);display:block;position:absolute;left:10px;-webkit-mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256"><path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path></svg>');mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256"><path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path></svg>')}.scalar-app .markdown summary:hover:after{background-color:var(--scalar-color-1)}.scalar-app .markdown details[open] summary:after{transform:rotate(90deg)}.scalar-app .markdown a{--font-color:var(--scalar-link-color,var(--scalar-color-accent));--font-visited:var(--scalar-link-color-visited,var(--scalar-color-2));-webkit-text-decoration:var(--scalar-text-decoration);text-decoration:var(--scalar-text-decoration);color:var(--font-color);font-weight:var(--scalar-link-font-weight,var(--scalar-semibold));text-underline-offset:.25rem;text-decoration-thickness:1px;-webkit-text-decoration-color:var(--font-color);text-decoration-color:var(--font-color)}@supports (color:color-mix(in lab,red,red)){.scalar-app .markdown a{-webkit-text-decoration-color:var(--font-color)}@supports (color:color-mix(in lab,red,red)){.scalar-app .markdown a{-webkit-text-decoration-color:color-mix(in srgb,var(--font-color)30%,transparent)}}.scalar-app .markdown a{-webkit-text-decoration-color:var(--font-color);text-decoration-color:var(--font-color)}@supports (color:color-mix(in lab,red,red)){.scalar-app .markdown a{-webkit-text-decoration-color:color-mix(in srgb,var(--font-color)30%,transparent);text-decoration-color:color-mix(in srgb,var(--font-color)30%,transparent)}}}.scalar-app .markdown a:hover{color:var(--scalar-link-color-hover,var(--scalar-color-accent));-webkit-text-decoration:var(--scalar-text-decoration-hover);text-decoration:var(--scalar-text-decoration-hover)}.scalar-app .markdown a:visited{color:var(--font-visited)}.scalar-app .markdown em{font-style:italic}.scalar-app .markdown sup,.scalar-app .markdown sub{font-size:var(--scalar-micro);font-weight:450}.scalar-app .markdown sup{vertical-align:super}.scalar-app .markdown sub{vertical-align:sub}.scalar-app .markdown del{text-decoration:line-through}.scalar-app .markdown code{font-family:var(--scalar-font-code);background-color:var(--scalar-background-2);box-shadow:0 0 0 var(--scalar-border-width) var(--scalar-border-color);font-size:var(--scalar-micro);border-radius:2px;padding:0 3px}.scalar-app .markdown .hljs{font-size:var(--scalar-small)}.scalar-app .markdown pre code{white-space:pre;padding:var(--markdown-spacing-sm);margin:var(--markdown-spacing-sm)0;-webkit-overflow-scrolling:touch;min-width:100px;max-width:100%;line-height:1.5;display:block;overflow-x:auto}.scalar-app .markdown hr{border:none;border-bottom:var(--markdown-border)}.scalar-app .markdown blockquote{border-left:1px solid var(--scalar-color-1);padding-left:var(--markdown-spacing-md);font-weight:var(--scalar-bold);font-size:var(--scalar-heading-2);margin:0;display:block}.scalar-app .markdown .contains-task-list{flex-direction:column;gap:2px;list-style:none;display:flex}.scalar-app .markdown .contains-task-list li{align-items:center;gap:10.5px;padding-left:10.5px;display:flex}.scalar-app .markdown .contains-task-list input{-webkit-appearance:none;appearance:none;width:var(--markdown-spacing-md);height:var(--markdown-spacing-md);border:1px solid var(--scalar-color-3);border-radius:var(--scalar-radius);place-content:center;display:flex;position:relative}.scalar-app .markdown .contains-task-list input:checked{background-color:var(--scalar-color-1);border-color:var(--scalar-color-1)}.scalar-app .markdown .contains-task-list input[type=checkbox]:before{content:"";border:solid var(--scalar-background-1);opacity:0;border-width:0 1.5px 1.5px 0;width:5px;height:10px;position:absolute;top:1px;left:5px;transform:rotate(45deg)}.scalar-app .markdown .contains-task-list input[type=checkbox]:checked:before{opacity:1}.scalar-app .markdown .markdown-alert{border-radius:var(--scalar-radius-lg);background-color:var(--scalar-background-2);align-items:stretch}@supports (color:color-mix(in lab,red,red)){.scalar-app .markdown .markdown-alert{background-color:var(--scalar-background-2)}@supports (color:color-mix(in lab,red,red)){.scalar-app .markdown .markdown-alert{background-color:color-mix(in srgb,var(--scalar-background-2),transparent)}}}.scalar-app .markdown .markdown-alert{border:var(--markdown-border);font-size:var(--scalar-small);gap:var(--markdown-spacing-sm);padding:calc(var(--markdown-spacing-sm) - .5px);padding-left:42px;display:flex;position:relative}.scalar-app .markdown .markdown-alert:before{content:"";left:var(--markdown-spacing-sm);top:calc(var(--markdown-spacing-sm) + .5px);background-color:currentColor;width:16px;height:16px;position:absolute;-webkit-mask-position:50%;mask-position:50%;-webkit-mask-size:contain;mask-size:contain;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.scalar-app .markdown .markdown-alert.markdown-alert-note:before,.scalar-app .markdown .markdown-alert.markdown-alert-tip:before{-webkit-mask-image:url('data:image/svg+xml,<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 17v-6a.5.5 0 0 0-.5-.5l-.5.001h-1M12 17h-2m2 0h2m-2 5c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10.75 7.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" fill="currentColor"/></svg>');mask-image:url('data:image/svg+xml,<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 17v-6a.5.5 0 0 0-.5-.5l-.5.001h-1M12 17h-2m2 0h2m-2 5c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10.75 7.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" fill="currentColor"/></svg>')}.scalar-app .markdown .markdown-alert.markdown-alert-important:before,.scalar-app .markdown .markdown-alert.markdown-alert-warning:before{-webkit-mask-image:url('data:image/svg+xml,<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 8v4m10 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11 16a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" fill="currentColor"/></svg>');mask-image:url('data:image/svg+xml,<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 8v4m10 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11 16a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" fill="currentColor"/></svg>')}.scalar-app .markdown .markdown-alert.markdown-alert-caution:before{color:var(--scalar-color-red);-webkit-mask-image:url('data:image/svg+xml,<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 8v4m3.312-10a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11 16a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" fill="currentColor"/></svg>');mask-image:url('data:image/svg+xml,<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 8v4m3.312-10a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11 16a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" fill="currentColor"/></svg>')}.scalar-app .markdown .markdown-alert.markdown-alert-success:before{color:var(--scalar-color-green);-webkit-mask-image:url('data:image/svg+xml,<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 9.5 10.5 15 8 12.5m14-.5c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>');mask-image:url('data:image/svg+xml,<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 9.5 10.5 15 8 12.5m14-.5c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>')}.scalar-app .markdown .markdown-alert.markdown-alert-note:before{color:var(--scalar-color-blue)}.scalar-app .markdown .markdown-alert.markdown-alert-tip:before{color:var(--scalar-color-2)}.scalar-app .markdown .markdown-alert.markdown-alert-important:before{color:var(--scalar-color-purple)}.scalar-app .markdown .markdown-alert.markdown-alert-warning:before{color:var(--scalar-color-orange)}.scalar-app .markdown .markdown-alert .markdown-alert-content{margin:0;line-height:20px}.dark-mode .scalar-dropdown-item[data-v-cc5bd05e]:hover{filter:brightness(1.1)}.group\\/item>.group\\/button>.scalar-sidebar-indent .scalar-sidebar-indent-border[data-v-88b1a676]{inset-block:-1px}.group\\/item:first-child>.group\\/button>.scalar-sidebar-indent .scalar-sidebar-indent-border[data-v-88b1a676]{top:0}.group\\/item:last-child>.group\\/button>.scalar-sidebar-indent .scalar-sidebar-indent-border[data-v-88b1a676]{bottom:0}:where(body)>.scalar-tooltip{--scalar-tooltip-padding:8px;padding:calc(var(--scalar-tooltip-padding) + var(--scalar-tooltip-offset));z-index:99999;max-width:320px;font-size:var(--scalar-font-size-5);--tw-leading:var(--scalar-line-height-5);line-height:var(--scalar-line-height-5);--tw-font-weight:var(--scalar-semibold);font-weight:var(--scalar-semibold);overflow-wrap:break-word;color:var(--scalar-tooltip-color)}:where(body)>.scalar-tooltip:before{content:"";inset:var(--scalar-tooltip-offset);z-index:-1;border-radius:var(--scalar-radius);background-color:var(--scalar-tooltip-background);--tw-backdrop-blur:blur(8px);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);position:absolute}:where(body)>.scalar-tooltip:before:where(){--tw-shadow:inset 0 0 0 var(--tw-shadow-color,calc(var(--scalar-border-width)*2))var(--scalar-border-color);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.dark-mode .scalar-dropdown-item[data-v-457c1cd3]:hover{filter:brightness(1.1)}.scalar-modal-layout[data-v-589f8aa0]{animation:.3s ease-in-out forwards fadein-layout-589f8aa0}.scalar-modal[data-v-589f8aa0]{box-shadow:var(--scalar-shadow-2);animation:.3s ease-in-out .1s forwards fadein-modal-589f8aa0;transform:translateY(10px)}.scalar-modal-layout-full[data-v-589f8aa0]{opacity:1!important;background:0 0!important}.modal-content-search .modal-body[data-v-589f8aa0]{flex-direction:column;max-height:440px;padding:0;display:flex;overflow:hidden}@media (max-width:720px) and (max-height:480px){.scalar-modal-layout .scalar-modal[data-v-589f8aa0]{max-height:90svh;margin-top:5svh}}.full-size-styles[data-v-589f8aa0]{margin:initial;border-right:var(--scalar-border-width)solid var(--scalar-border-color);animation:.3s ease-in-out forwards fadein-layout-589f8aa0;left:0;transform:translate(0);background-color:var(--scalar-background-1)!important;max-height:100%!important;box-shadow:none!important;border-radius:0!important;position:absolute!important;top:0!important}@media (min-width:800px){.full-size-styles[data-v-589f8aa0]{width:50dvw!important}}.full-size-styles[data-v-589f8aa0]:after{content:"";width:50dvw;height:100dvh;position:absolute;top:0;right:-50dvw}.search-background[data-v-466c736b]{background:var(--scalar-background-1)}@supports (color:color-mix(in lab,red,red)){.search-background[data-v-466c736b]{background:var(--scalar-background-1)}@supports (color:color-mix(in lab,red,red)){.search-background[data-v-466c736b]{background:color-mix(in srgb,var(--scalar-background-1),var(--scalar-background-2))}}}.search-background[data-v-466c736b]:focus-within{background:0 0}.scalar-app .pointer-events-auto{pointer-events:auto}.scalar-app .pointer-events-none{pointer-events:none}.scalar-app .collapse{visibility:collapse}.scalar-app .visible{visibility:visible}.scalar-app .floating-bg:before{background-color:var(--scalar-background-2);border-radius:var(--scalar-radius);content:"";opacity:0;z-index:1;width:calc(100% + 8px);height:calc(100% - 4px);transition:opacity .2s ease-in-out;position:absolute;top:2.5px;left:-4px}.scalar-app .floating-bg:hover:before{opacity:1}.scalar-app .centered{--tw-translate-y:-50%;--tw-translate-x:-50%;translate:var(--tw-translate-x)var(--tw-translate-y);position:absolute;top:50%;left:50%}.scalar-app .centered-y{--tw-translate-y:-50%;translate:var(--tw-translate-x)var(--tw-translate-y);position:absolute;top:50%}.scalar-app .centered-x{--tw-translate-x:-50%;translate:var(--tw-translate-x)var(--tw-translate-y);position:absolute;left:50%}.scalar-app .sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.scalar-app .absolute{position:absolute}.scalar-app .fixed{position:fixed}.scalar-app .relative{position:relative}.scalar-app .static{position:static}.scalar-app .sticky{position:sticky}.scalar-app .inset-0{inset:0}.scalar-app .inset-x-1{inset-inline:4px}.scalar-app .-top-\\(--scalar-address-bar-height\\){top:calc(var(--scalar-address-bar-height)*-1)}.scalar-app .-top-\\[104px\\]{top:-104px}.scalar-app .top-0{top:0}.scalar-app .top-1\\/2{top:50%}.scalar-app .top-2{top:8px}.scalar-app .top-12{top:48px}.scalar-app .-right-\\[30px\\]{right:-30px}.scalar-app .right-0{right:0}.scalar-app .right-1{right:4px}.scalar-app .right-1\\.5{right:6px}.scalar-app .right-1\\/2{right:50%}.scalar-app .right-2{right:8px}.scalar-app .right-4{right:16px}.scalar-app .right-7{right:28px}.scalar-app .right-14{right:56px}.scalar-app .right-16{right:64px}.scalar-app .bottom-0{bottom:0}.scalar-app .bottom-1{bottom:4px}.scalar-app .bottom-1\\/2{bottom:50%}.scalar-app .bottom-\\[var\\(--scalar-border-width\\)\\]{bottom:var(--scalar-border-width)}.scalar-app .left-0{left:0}.scalar-app .left-1\\/2{left:50%}.scalar-app .left-3{left:12px}.scalar-app .-z-1{z-index:-1}.scalar-app .z-0{z-index:0}.scalar-app .z-1{z-index:1}.scalar-app .z-10{z-index:10}.scalar-app .z-20{z-index:20}.scalar-app .z-50{z-index:50}.scalar-app .z-\\[1\\]{z-index:1}.scalar-app .z-\\[1002\\]{z-index:1002}.scalar-app .z-context{z-index:1000}.scalar-app .z-context-plus{z-index:1001}.scalar-app .z-overlay{z-index:10000}.scalar-app .order-last{order:9999}.scalar-app .col-span-full{grid-column:1/-1}.scalar-app .container{width:100%}@media (min-width:400px){.scalar-app .container{max-width:400px}}@media (min-width:600px){.scalar-app .container{max-width:600px}}@media (min-width:800px){.scalar-app .container{max-width:800px}}@media (min-width:1000px){.scalar-app .container{max-width:1000px}}@media (min-width:1200px){.scalar-app .container{max-width:1200px}}@media (min-width:96rem){.scalar-app .container{max-width:96rem}}.scalar-app .\\!m-0{margin:0!important}.scalar-app .m-0{margin:0}.scalar-app .m-4{margin:16px}.scalar-app .m-auto{margin:auto}.scalar-app .-mx-0\\.25{margin-inline:-1px}.scalar-app .-mx-1{margin-inline:-4px}.scalar-app .mx-auto{margin-inline:auto}.scalar-app .-my-1{margin-block:-4px}.scalar-app .my-1\\.25{margin-block:5px}.scalar-app .my-12{margin-block:48px}.scalar-app .-mt-\\[\\.5px\\]{margin-top:-.5px}.scalar-app .mt-1{margin-top:4px}.scalar-app .mt-1\\.5{margin-top:6px}.scalar-app .mt-2{margin-top:8px}.scalar-app .mt-3{margin-top:12px}.scalar-app .mt-5{margin-top:20px}.scalar-app .mt-10{margin-top:40px}.scalar-app .mt-auto{margin-top:auto}.scalar-app .\\!mr-0{margin-right:0!important}.scalar-app .-mr-0\\.5{margin-right:-2px}.scalar-app .-mr-1{margin-right:-4px}.scalar-app .-mr-1\\.5{margin-right:-6px}.scalar-app .-mr-3{margin-right:-12px}.scalar-app .mr-0\\.5{margin-right:2px}.scalar-app .mr-0\\.75{margin-right:3px}.scalar-app .mr-1{margin-right:4px}.scalar-app .mr-1\\.5{margin-right:6px}.scalar-app .mr-1\\.25{margin-right:5px}.scalar-app .mr-2{margin-right:8px}.scalar-app .mr-2\\.5{margin-right:10px}.scalar-app .mr-3{margin-right:12px}.scalar-app .mr-\\[6\\.25px\\]{margin-right:6.25px}.scalar-app .mr-auto{margin-right:auto}.scalar-app .\\!mb-0{margin-bottom:0!important}.scalar-app .-mb-0\\.25{margin-bottom:-1px}.scalar-app .-mb-\\[var\\(--scalar-border-width\\)\\]{margin-bottom:calc(var(--scalar-border-width)*-1)}.scalar-app .mb-0{margin-bottom:0}.scalar-app .mb-1{margin-bottom:4px}.scalar-app .mb-1\\.5{margin-bottom:6px}.scalar-app .mb-2{margin-bottom:8px}.scalar-app .mb-4{margin-bottom:16px}.scalar-app .mb-\\[\\.5px\\]{margin-bottom:.5px}.scalar-app .-ml-0\\.5{margin-left:-2px}.scalar-app .-ml-1{margin-left:-4px}.scalar-app .-ml-2{margin-left:-8px}.scalar-app .-ml-12{margin-left:-48px}.scalar-app .ml-0\\.5{margin-left:2px}.scalar-app .ml-0\\.75{margin-left:3px}.scalar-app .ml-1{margin-left:4px}.scalar-app .ml-1\\.25{margin-left:5px}.scalar-app .ml-3{margin-left:12px}.scalar-app .ml-auto{margin-left:auto}.scalar-app .box-border{box-sizing:border-box}.scalar-app .box-content{box-sizing:content-box}.scalar-app .flex-center{justify-content:center;align-items:center;display:flex}.scalar-app .line-clamp-1{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.scalar-app .\\!block{display:block!important}.scalar-app .\\!flex{display:flex!important}.scalar-app .block{display:block}.scalar-app .contents{display:contents}.scalar-app .flex{display:flex}.scalar-app .grid{display:grid}.scalar-app .hidden{display:none}.scalar-app .inline-block{display:inline-block}.scalar-app .inline-flex{display:inline-flex}.scalar-app .table{display:table}.scalar-app .aspect-\\[4\\/3\\]{aspect-ratio:4/3}.scalar-app .aspect-square{aspect-ratio:1}.scalar-app .size-2\\.5{width:10px;height:10px}.scalar-app .size-3\\.5{width:14px;height:14px}.scalar-app .size-3\\/4{width:75%;height:75%}.scalar-app .size-4{width:16px;height:16px}.scalar-app .size-5{width:20px;height:20px}.scalar-app .size-7{width:28px;height:28px}.scalar-app .size-8{width:32px;height:32px}.scalar-app .size-10{width:40px;height:40px}.scalar-app .h-\\(--scalar-address-bar-height\\){height:var(--scalar-address-bar-height)}.scalar-app .h-1\\.5{height:6px}.scalar-app .h-2\\.5{height:10px}.scalar-app .h-2\\.25{height:9px}.scalar-app .h-3{height:12px}.scalar-app .h-3\\.5{height:14px}.scalar-app .h-4{height:16px}.scalar-app .h-5{height:20px}.scalar-app .h-6{height:24px}.scalar-app .h-7{height:28px}.scalar-app .h-8{height:32px}.scalar-app .h-9{height:36px}.scalar-app .h-10{height:40px}.scalar-app .h-12{height:48px}.scalar-app .h-64{height:256px}.scalar-app .h-\\[68px\\]{height:68px}.scalar-app .h-\\[calc\\(100\\%-273\\.5px\\)\\]{height:calc(100% - 273.5px)}.scalar-app .h-\\[calc\\(100\\%_-_50px\\)\\]{height:calc(100% - 50px)}.scalar-app .h-auto{height:auto}.scalar-app .h-fit{height:fit-content}.scalar-app .h-full{height:100%}.scalar-app .h-header{height:48px}.scalar-app .h-px{height:1px}.scalar-app .h-screen{height:100vh}.scalar-app .\\!max-h-\\[initial\\]{max-height:initial!important}.scalar-app .max-h-8{max-height:32px}.scalar-app .max-h-40{max-height:160px}.scalar-app .max-h-\\[40dvh\\]{max-height:40dvh}.scalar-app .max-h-\\[50dvh\\]{max-height:50dvh}.scalar-app .max-h-\\[60svh\\]{max-height:60svh}.scalar-app .max-h-\\[calc\\(100\\%-32px\\)\\]{max-height:calc(100% - 32px)}.scalar-app .max-h-\\[inherit\\]{max-height:inherit}.scalar-app .max-h-fit{max-height:fit-content}.scalar-app .max-h-screen{max-height:100vh}.scalar-app .min-h-0{min-height:0}.scalar-app .min-h-8{min-height:32px}.scalar-app .min-h-10{min-height:40px}.scalar-app .min-h-11{min-height:44px}.scalar-app .min-h-12{min-height:48px}.scalar-app .min-h-16{min-height:64px}.scalar-app .min-h-20{min-height:80px}.scalar-app .min-h-\\[65px\\]{min-height:65px}.scalar-app .min-h-\\[calc\\(1rem\\*4\\)\\]{min-height:4rem}.scalar-app .min-h-\\[calc\\(4rem\\+0\\.5px\\)\\]{min-height:calc(4rem + .5px)}.scalar-app .min-h-\\[calc\\(4rem\\+1px\\)\\]{min-height:calc(4rem + 1px)}.scalar-app .min-h-fit{min-height:fit-content}.scalar-app .\\!w-fit{width:fit-content!important}.scalar-app .w-0\\.5{width:2px}.scalar-app .w-1\\.5{width:6px}.scalar-app .w-1\\/2{width:50%}.scalar-app .w-2{width:8px}.scalar-app .w-2\\.5{width:10px}.scalar-app .w-2\\.25{width:9px}.scalar-app .w-3{width:12px}.scalar-app .w-3\\.5{width:14px}.scalar-app .w-4{width:16px}.scalar-app .w-5{width:20px}.scalar-app .w-6{width:24px}.scalar-app .w-7{width:28px}.scalar-app .w-8{width:32px}.scalar-app .w-10{width:40px}.scalar-app .w-20{width:80px}.scalar-app .w-56{width:224px}.scalar-app .w-64{width:256px}.scalar-app .w-72{width:288px}.scalar-app .w-\\[60px\\]{width:60px}.scalar-app .w-\\[calc\\(100\\%-10px\\)\\]{width:calc(100% - 10px)}.scalar-app .w-\\[calc\\(100\\%_-_8px\\)\\]{width:calc(100% - 8px)}.scalar-app .w-\\[inherit\\]{width:inherit}.scalar-app .w-auto{width:auto}.scalar-app .w-dvw{width:100dvw}.scalar-app .w-fit{width:fit-content}.scalar-app .w-full{width:100%}.scalar-app .w-max{width:max-content}.scalar-app .max-w-8{max-width:32px}.scalar-app .max-w-40{max-width:160px}.scalar-app .max-w-48{max-width:192px}.scalar-app .max-w-\\[14px\\]{max-width:14px}.scalar-app .max-w-\\[37px\\]{max-width:37px}.scalar-app .max-w-\\[100\\%\\]{max-width:100%}.scalar-app .max-w-\\[150px\\]{max-width:150px}.scalar-app .max-w-\\[380px\\]{max-width:380px}.scalar-app .max-w-\\[420px\\]{max-width:420px}.scalar-app .max-w-\\[720px\\]{max-width:720px}.scalar-app .max-w-\\[calc\\(100dvw-24px\\)\\]{max-width:calc(100dvw - 24px)}.scalar-app .max-w-full{max-width:100%}.scalar-app .min-w-0{min-width:0}.scalar-app .min-w-2\\.25{min-width:9px}.scalar-app .min-w-3\\.5{min-width:14px}.scalar-app .min-w-4{min-width:16px}.scalar-app .min-w-8{min-width:32px}.scalar-app .min-w-48{min-width:192px}.scalar-app .min-w-\\[37px\\]{min-width:37px}.scalar-app .min-w-\\[296px\\]{min-width:296px}.scalar-app .min-w-fit{min-width:fit-content}.scalar-app .min-w-full{min-width:100%}.scalar-app .flex-1{flex:1}.scalar-app .shrink-0{flex-shrink:0}.scalar-app .flex-grow{flex-grow:1}.scalar-app .-translate-x-1\\/2{--tw-translate-x:-50%;translate:var(--tw-translate-x)var(--tw-translate-y)}.scalar-app .translate-x-0{--tw-translate-x:0px;translate:var(--tw-translate-x)var(--tw-translate-y)}.scalar-app .translate-x-1\\/2{--tw-translate-x:50%;translate:var(--tw-translate-x)var(--tw-translate-y)}.scalar-app .-translate-y-1\\/2{--tw-translate-y:-50%;translate:var(--tw-translate-x)var(--tw-translate-y)}.scalar-app .translate-y-1\\/2{--tw-translate-y:50%;translate:var(--tw-translate-x)var(--tw-translate-y)}.scalar-app .scale-75{--tw-scale-x:75%;--tw-scale-y:75%;--tw-scale-z:75%;scale:var(--tw-scale-x)var(--tw-scale-y)}.scalar-app .rotate-90{rotate:90deg}.scalar-app .transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.scalar-app .cursor-auto{cursor:auto}.scalar-app .cursor-default{cursor:default}.scalar-app .cursor-grab{cursor:grab}.scalar-app .cursor-help{cursor:help}.scalar-app .cursor-pointer{cursor:pointer}.scalar-app .cursor-text{cursor:text}.scalar-app .resize{resize:both}.scalar-app .resize-none{resize:none}.scalar-app .auto-rows-\\[32px\\]{grid-auto-rows:32px}.scalar-app .auto-rows-auto{grid-auto-rows:auto}.scalar-app .grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.scalar-app .grid-cols-\\[44px_1fr_repeat\\(3\\,auto\\)\\]{grid-template-columns:44px 1fr repeat(3,auto)}.scalar-app .grid-cols-\\[auto_1fr\\]{grid-template-columns:auto 1fr}.scalar-app .grid-cols-\\[repeat\\(auto-fill\\,minmax\\(32px\\,1fr\\)\\)\\]{grid-template-columns:repeat(auto-fill,minmax(32px,1fr))}.scalar-app .flex-col{flex-direction:column}.scalar-app .flex-row{flex-direction:row}.scalar-app .flex-wrap{flex-wrap:wrap}.scalar-app .content-between{align-content:space-between}.scalar-app .content-start{align-content:flex-start}.scalar-app .items-center{align-items:center}.scalar-app .items-end{align-items:flex-end}.scalar-app .items-start{align-items:flex-start}.scalar-app .items-stretch{align-items:stretch}.scalar-app .justify-between{justify-content:space-between}.scalar-app .justify-center{justify-content:center}.scalar-app .justify-end{justify-content:flex-end}.scalar-app .justify-start{justify-content:flex-start}.scalar-app .justify-stretch{justify-content:stretch}.scalar-app .\\!gap-2{gap:8px!important}.scalar-app .gap-0\\.5{gap:2px}.scalar-app .gap-0\\.75{gap:3px}.scalar-app .gap-1{gap:4px}.scalar-app .gap-1\\.5{gap:6px}.scalar-app .gap-1\\.75{gap:7px}.scalar-app .gap-2{gap:8px}.scalar-app .gap-2\\.5{gap:10px}.scalar-app .gap-3{gap:12px}.scalar-app .gap-4{gap:16px}.scalar-app .gap-6{gap:24px}.scalar-app .gap-8{gap:32px}.scalar-app .gap-10{gap:40px}.scalar-app .gap-12{gap:48px}.scalar-app .gap-\\[1\\.5px\\]{gap:1.5px}.scalar-app .gap-px{gap:1px}.scalar-app .gap-x-2\\.5{column-gap:10px}:where(.scalar-app .space-x-1>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(4px*var(--tw-space-x-reverse));margin-inline-end:calc(4px*calc(1 - var(--tw-space-x-reverse)))}:where(.scalar-app .divide-y>:not(:last-child)){--tw-divide-y-reverse:0;border-bottom-style:var(--tw-border-style);border-top-style:var(--tw-border-style);border-top-width:calc(var(--scalar-border-width)*var(--tw-divide-y-reverse));border-bottom-width:calc(var(--scalar-border-width)*calc(1 - var(--tw-divide-y-reverse)))}.scalar-app .self-center{align-self:center}.scalar-app .truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.scalar-app .overflow-auto{overflow:auto}.scalar-app .overflow-hidden{overflow:hidden}.scalar-app .overflow-visible{overflow:visible}.scalar-app .overflow-x-auto{overflow-x:auto}.scalar-app .overflow-y-auto{overflow-y:auto}.scalar-app .overflow-y-hidden{overflow-y:hidden}.scalar-app .overscroll-contain{overscroll-behavior:contain}.scalar-app .\\!rounded-none{border-radius:0!important}.scalar-app .rounded{border-radius:var(--scalar-radius)}.scalar-app .rounded-\\[10px\\]{border-radius:10px}.scalar-app .rounded-full{border-radius:9999px}.scalar-app .rounded-lg{border-radius:var(--scalar-radius-lg)}.scalar-app .rounded-md{border-radius:var(--scalar-radius)}.scalar-app .rounded-px{border-radius:1px}.scalar-app .rounded-xl{border-radius:var(--scalar-radius-xl)}.scalar-app .rounded-t{border-top-left-radius:var(--scalar-radius);border-top-right-radius:var(--scalar-radius)}.scalar-app .rounded-t-lg{border-top-left-radius:var(--scalar-radius-lg);border-top-right-radius:var(--scalar-radius-lg)}.scalar-app .rounded-t-none{border-top-left-radius:0;border-top-right-radius:0}.scalar-app .rounded-b{border-bottom-right-radius:var(--scalar-radius);border-bottom-left-radius:var(--scalar-radius)}.scalar-app .rounded-b-lg{border-bottom-right-radius:var(--scalar-radius-lg);border-bottom-left-radius:var(--scalar-radius-lg)}.scalar-app .\\!border-0{border-style:var(--tw-border-style)!important;border-width:0!important}.scalar-app .border{border-style:var(--tw-border-style);border-width:var(--scalar-border-width)}.scalar-app .border-0{border-style:var(--tw-border-style);border-width:0}.scalar-app .border-\\[1\\.5px\\]{border-style:var(--tw-border-style);border-width:1.5px}.scalar-app .border-\\[1px\\]{border-style:var(--tw-border-style);border-width:1px}.scalar-app .border-x{border-inline-style:var(--tw-border-style);border-inline-width:var(--scalar-border-width)}.scalar-app .border-y{border-block-style:var(--tw-border-style);border-block-width:var(--scalar-border-width)}.scalar-app .border-t{border-top-style:var(--tw-border-style);border-top-width:var(--scalar-border-width)}.scalar-app .border-t-0{border-top-style:var(--tw-border-style);border-top-width:0}.scalar-app .\\!border-r{border-right-style:var(--tw-border-style)!important;border-right-width:var(--scalar-border-width)!important}.scalar-app .border-r{border-right-style:var(--tw-border-style);border-right-width:var(--scalar-border-width)}.scalar-app .border-r-0{border-right-style:var(--tw-border-style);border-right-width:0}.scalar-app .border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:var(--scalar-border-width)}.scalar-app .border-b-0{border-bottom-style:var(--tw-border-style);border-bottom-width:0}.scalar-app .border-b-\\[1px\\]{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.scalar-app .border-l{border-left-style:var(--tw-border-style);border-left-width:var(--scalar-border-width)}.scalar-app .border-l-0{border-left-style:var(--tw-border-style);border-left-width:0}.scalar-app .border-dashed{--tw-border-style:dashed;border-style:dashed}.scalar-app .border-none{--tw-border-style:none;border-style:none}.scalar-app .\\!border-current{border-color:currentColor!important}.scalar-app .border-\\(--scalar-background-3\\){border-color:var(--scalar-background-3)}.scalar-app .border-c-1{border-color:var(--scalar-color-1)}.scalar-app .border-c-3{border-color:var(--scalar-color-3)}.scalar-app .border-transparent{border-color:#0000}.scalar-app .border-r-transparent{border-right-color:#0000}.scalar-app .bg-b-1{background-color:var(--scalar-background-1)}.scalar-app .bg-b-2{background-color:var(--scalar-background-2)}.scalar-app .bg-b-3{background-color:var(--scalar-background-3)}.scalar-app .bg-b-danger{background-color:var(--scalar-background-danger)}.scalar-app .bg-c-3\\/5{background-color:var(--scalar-color-3)}@supports (color:color-mix(in lab,red,red)){.scalar-app .bg-c-3\\/5{background-color:var(--scalar-color-3)}@supports (color:color-mix(in lab,red,red)){.scalar-app .bg-c-3\\/5{background-color:color-mix(in oklab,var(--scalar-color-3)5%,transparent)}}}.scalar-app .bg-c-accent{background-color:var(--scalar-color-accent)}.scalar-app .bg-current{background-color:currentColor}.scalar-app .bg-grey{background-color:var(--scalar-color-3)}.scalar-app .bg-sidebar-b-active{background-color:var(--scalar-sidebar-item-active-background,var(--scalar-background-2))}.scalar-app .bg-none{background-image:none}.scalar-app .fill-current{fill:currentColor}.scalar-app .stroke-2{stroke-width:2px}.scalar-app .stroke-\\[1\\.5\\]{stroke-width:1.5px}.scalar-app .stroke-\\[1\\.75\\]{stroke-width:1.75px}.scalar-app .stroke-\\[2\\.25\\]{stroke-width:2.25px}.scalar-app .object-contain{object-fit:contain}.scalar-app .\\!p-0{padding:0!important}.scalar-app .p-0{padding:0}.scalar-app .p-0\\.5{padding:2px}.scalar-app .p-0\\.75{padding:3px}.scalar-app .p-1{padding:4px}.scalar-app .p-1\\.5{padding:6px}.scalar-app .p-1\\.25{padding:5px}.scalar-app .p-1\\.75{padding:7px}.scalar-app .p-2{padding:8px}.scalar-app .p-3{padding:12px}.scalar-app .p-4{padding:16px}.scalar-app .p-\\[3px\\]{padding:3px}.scalar-app .p-\\[5px\\]{padding:5px}.scalar-app .p-px{padding:1px}.scalar-app .\\!px-3{padding-inline:12px!important}.scalar-app .px-0{padding-inline:0}.scalar-app .px-0\\.5{padding-inline:2px}.scalar-app .px-1{padding-inline:4px}.scalar-app .px-1\\.5{padding-inline:6px}.scalar-app .px-2{padding-inline:8px}.scalar-app .px-2\\.5{padding-inline:10px}.scalar-app .px-3{padding-inline:12px}.scalar-app .px-4{padding-inline:16px}.scalar-app .px-5{padding-inline:20px}.scalar-app .px-6{padding-inline:24px}.scalar-app .px-8{padding-inline:32px}.scalar-app .\\!py-1\\.5{padding-block:6px!important}.scalar-app .py-0{padding-block:0}.scalar-app .py-0\\.5{padding-block:2px}.scalar-app .py-0\\.25{padding-block:1px}.scalar-app .py-0\\.75{padding-block:3px}.scalar-app .py-1{padding-block:4px}.scalar-app .py-1\\.5{padding-block:6px}.scalar-app .py-1\\.25{padding-block:5px}.scalar-app .py-2{padding-block:8px}.scalar-app .py-2\\.5{padding-block:10px}.scalar-app .py-3{padding-block:12px}.scalar-app .py-5{padding-block:20px}.scalar-app .py-8{padding-block:32px}.scalar-app .py-px{padding-block:1px}.scalar-app .\\!pt-0{padding-top:0!important}.scalar-app .pt-0{padding-top:0}.scalar-app .pt-2{padding-top:8px}.scalar-app .pt-3{padding-top:12px}.scalar-app .pt-4{padding-top:16px}.scalar-app .pt-6{padding-top:24px}.scalar-app .pt-8{padding-top:32px}.scalar-app .pt-px{padding-top:1px}.scalar-app .pr-0{padding-right:0}.scalar-app .pr-0\\.75{padding-right:3px}.scalar-app .pr-1{padding-right:4px}.scalar-app .pr-1\\.5{padding-right:6px}.scalar-app .pr-2{padding-right:8px}.scalar-app .pr-2\\.5{padding-right:10px}.scalar-app .pr-2\\.25{padding-right:9px}.scalar-app .pr-3{padding-right:12px}.scalar-app .pr-6{padding-right:24px}.scalar-app .pr-8{padding-right:32px}.scalar-app .pr-9{padding-right:36px}.scalar-app .pr-10{padding-right:40px}.scalar-app .pr-12{padding-right:48px}.scalar-app .pr-\\[26px\\]{padding-right:26px}.scalar-app .pb-0{padding-bottom:0}.scalar-app .pb-1\\.5{padding-bottom:6px}.scalar-app .pb-2{padding-bottom:8px}.scalar-app .pb-3{padding-bottom:12px}.scalar-app .pb-5{padding-bottom:20px}.scalar-app .pb-6{padding-bottom:24px}.scalar-app .pb-8{padding-bottom:32px}.scalar-app .pb-14{padding-bottom:56px}.scalar-app .pb-\\[75px\\]{padding-bottom:75px}.scalar-app .\\!pl-3{padding-left:12px!important}.scalar-app .pl-1{padding-left:4px}.scalar-app .pl-1\\.5{padding-left:6px}.scalar-app .pl-1\\.25{padding-left:5px}.scalar-app .pl-2{padding-left:8px}.scalar-app .pl-3{padding-left:12px}.scalar-app .pl-5{padding-left:20px}.scalar-app .pl-6{padding-left:24px}.scalar-app .pl-8{padding-left:32px}.scalar-app .pl-9{padding-left:36px}.scalar-app .pl-12{padding-left:48px}.scalar-app .pl-px{padding-left:1px}.scalar-app .text-center{text-align:center}.scalar-app .text-left{text-align:left}.scalar-app .text-right{text-align:right}.scalar-app .font-code{font-family:var(--scalar-font-code)}.scalar-app .font-sans{font-family:var(--scalar-font)}.scalar-app .text-3xs{font-size:var(--scalar-font-size-7)}.scalar-app .text-\\[6px\\]{font-size:6px}.scalar-app .text-\\[11px\\]{font-size:11px}.scalar-app .text-\\[21px\\]{font-size:21px}.scalar-app .text-base{font-size:var(--scalar-font-size-3)}.scalar-app .text-sm{font-size:var(--scalar-font-size-4)}.scalar-app .text-xl{font-size:var(--scalar-font-size-1)}.scalar-app .text-xs{font-size:var(--scalar-font-size-5)}.scalar-app .text-xxs{font-size:var(--scalar-font-size-6)}.scalar-app .\\!leading-\\[6px\\]{--tw-leading:6px!important;line-height:6px!important}.scalar-app .leading-2{--tw-leading:var(--scalar-line-height-2);line-height:var(--scalar-line-height-2)}.scalar-app .leading-3{--tw-leading:var(--scalar-line-height-3);line-height:var(--scalar-line-height-3)}.scalar-app .leading-5{--tw-leading:var(--scalar-line-height-5);line-height:var(--scalar-line-height-5)}.scalar-app .leading-\\[1\\.44\\]{--tw-leading:1.44;line-height:1.44}.scalar-app .leading-\\[7px\\]{--tw-leading:7px;line-height:7px}.scalar-app .leading-\\[21px\\]{--tw-leading:21px;line-height:21px}.scalar-app .leading-\\[normal\\]{--tw-leading:normal;line-height:normal}.scalar-app .leading-none{--tw-leading:1;line-height:1}.scalar-app .leading-normal{--tw-leading:var(--leading-normal);line-height:var(--leading-normal)}.scalar-app .leading-snug{--tw-leading:var(--leading-snug);line-height:var(--leading-snug)}.scalar-app .font-bold{--tw-font-weight:var(--scalar-bold);font-weight:var(--scalar-bold)}.scalar-app .font-medium{--tw-font-weight:var(--scalar-semibold);font-weight:var(--scalar-semibold)}.scalar-app .font-normal{--tw-font-weight:var(--scalar-regular);font-weight:var(--scalar-regular)}.scalar-app .text-balance{text-wrap:balance}.scalar-app .text-pretty{text-wrap:pretty}.scalar-app .break-words{overflow-wrap:break-word}.scalar-app .break-all{word-break:break-all}.scalar-app .text-ellipsis{text-overflow:ellipsis}.scalar-app .whitespace-nowrap{white-space:nowrap}.scalar-app .whitespace-pre{white-space:pre}.scalar-app .whitespace-pre-wrap{white-space:pre-wrap}.scalar-app .\\!text-c-1{color:var(--scalar-color-1)!important}.scalar-app .text-b-1{color:var(--scalar-background-1)}.scalar-app .text-blue{color:var(--scalar-color-blue)}.scalar-app .text-border{color:var(--scalar-border-color)}.scalar-app .text-c-1{color:var(--scalar-color-1)}.scalar-app .text-c-2{color:var(--scalar-color-2)}.scalar-app .text-c-3{color:var(--scalar-color-3)}.scalar-app .text-c-btn{color:var(--scalar-button-1-color)}.scalar-app .text-green{color:var(--scalar-color-green)}.scalar-app .text-grey{color:var(--scalar-color-3)}.scalar-app .text-orange{color:var(--scalar-color-orange)}.scalar-app .text-purple{color:var(--scalar-color-purple)}.scalar-app .text-red{color:var(--scalar-color-red)}.scalar-app .text-sidebar-c-2{color:var(--scalar-sidebar-color-2,var(--scalar-color-2))}.scalar-app .text-sidebar-c-active{color:var(--scalar-sidebar-color-active,currentColor)}.scalar-app .text-transparent{color:#0000}.scalar-app .text-yellow{color:var(--scalar-color-yellow)}.scalar-app .capitalize{text-transform:capitalize}.scalar-app .lowercase{text-transform:lowercase}.scalar-app .uppercase{text-transform:uppercase}.scalar-app .no-underline{text-decoration-line:none}.scalar-app .underline{text-decoration-line:underline}.scalar-app .decoration-c-3{-webkit-text-decoration-color:var(--scalar-color-3);text-decoration-color:var(--scalar-color-3)}.scalar-app .underline-offset-2{text-underline-offset:2px}.scalar-app .opacity-0{opacity:0}.scalar-app .opacity-25{opacity:.25}.scalar-app .opacity-50{opacity:.5}.scalar-app .opacity-100{opacity:1}.scalar-app .bg-blend-normal{background-blend-mode:normal}.scalar-app .mix-blend-luminosity{mix-blend-mode:luminosity}.scalar-app .shadow{--tw-shadow:var(--scalar-shadow-1);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.scalar-app .shadow-\\[-8px_0_4px_var\\(--scalar-background-1\\)\\]{--tw-shadow:-8px 0 4px var(--tw-shadow-color,var(--scalar-background-1));box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.scalar-app .shadow-\\[0_-8px_0_8px_var\\(--scalar-background-1\\)\\,0_0_8px_8px_var\\(--scalar-background-1\\)\\]{--tw-shadow:0 -8px 0 8px var(--tw-shadow-color,var(--scalar-background-1)),0 0 8px 8px var(--tw-shadow-color,var(--scalar-background-1));box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.scalar-app .shadow-border{--tw-shadow:inset 0 0 0 var(--tw-shadow-color,calc(var(--scalar-border-width)*2))var(--scalar-border-color);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.scalar-app .shadow-lg{--tw-shadow:var(--scalar-shadow-2);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.scalar-app .shadow-none{--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.scalar-app .outline{outline-style:var(--tw-outline-style);outline-width:1px}.scalar-app .-outline-offset-1{outline-offset:-1px}.scalar-app .outline-offset-2{outline-offset:2px}.scalar-app .outline-b-3{outline-color:var(--scalar-background-3)}.scalar-app .blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.scalar-app .brightness-90{--tw-brightness:brightness(90%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.scalar-app .brightness-\\[\\.9\\]{--tw-brightness:brightness(.9);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.scalar-app .brightness-lifted{--tw-brightness:brightness(var(--scalar-lifted-brightness));filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.scalar-app .filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.scalar-app .backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.scalar-app .transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,visibility,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.scalar-app .transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.scalar-app .transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.scalar-app .transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.scalar-app .transition-none{transition-property:none}.scalar-app .duration-150{--tw-duration:.15s;transition-duration:.15s}.scalar-app .duration-200{--tw-duration:.2s;transition-duration:.2s}.scalar-app .duration-300{--tw-duration:.3s;transition-duration:.3s}.scalar-app .ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.scalar-app .outline-none{--tw-outline-style:none;outline-style:none}.scalar-app .select-none{-webkit-user-select:none;user-select:none}.scalar-app .\\[--scalar-address-bar-height\\:32px\\]{--scalar-address-bar-height:32px}.scalar-app .app-drag-region{-webkit-app-region:drag}.scalar-app .app-no-drag-region{-webkit-app-region:no-drag}:is(.scalar-app .\\*\\:flex>*){display:flex}:is(.scalar-app .\\*\\:h-8>*){height:32px}:is(.scalar-app .\\*\\:cursor-pointer>*){cursor:pointer}:is(.scalar-app .\\*\\:items-center>*){align-items:center}:is(.scalar-app .\\*\\:rounded-none>*){border-radius:0}:is(.scalar-app .\\*\\:border-t>*){border-top-style:var(--tw-border-style);border-top-width:var(--scalar-border-width)}:is(.scalar-app .\\*\\:border-b-0>*){border-bottom-style:var(--tw-border-style);border-bottom-width:0}:is(.scalar-app .\\*\\:px-1\\.5>*){padding-inline:6px}:is(.scalar-app .\\*\\:pl-4>*){padding-left:16px}.scalar-app .group-first\\/row\\:border-t-0:is(:where(.group\\/row):first-child *){border-top-style:var(--tw-border-style);border-top-width:0}.scalar-app .group-last\\:border-b-transparent:is(:where(.group):last-child *){border-bottom-color:#0000}.scalar-app .group-last\\/label\\:rounded-br-lg:is(:where(.group\\/label):last-child *){border-bottom-right-radius:var(--scalar-radius-lg)}@media (hover:hover){.scalar-app .group-hover\\:block:is(:where(.group):hover *){display:block}.scalar-app .group-hover\\:flex:is(:where(.group):hover *){display:flex}.scalar-app .group-hover\\:hidden:is(:where(.group):hover *){display:none}.scalar-app .group-hover\\:inline:is(:where(.group):hover *){display:inline}.scalar-app .group-hover\\:pr-5:is(:where(.group):hover *){padding-right:20px}.scalar-app .group-hover\\:pr-6:is(:where(.group):hover *){padding-right:24px}.scalar-app .group-hover\\:pr-10:is(:where(.group):hover *){padding-right:40px}.scalar-app .group-hover\\:text-c-1:is(:where(.group):hover *){color:var(--scalar-color-1)}.scalar-app .group-hover\\:opacity-80:is(:where(.group):hover *){opacity:.8}.scalar-app .group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}.scalar-app .group-hover\\/auth\\:line-clamp-none:is(:where(.group\\/auth):hover *){-webkit-line-clamp:unset;-webkit-box-orient:horizontal;display:block;overflow:visible}.scalar-app .group-hover\\/cell\\:opacity-100:is(:where(.group\\/cell):hover *){opacity:1}.scalar-app .group-hover\\/item\\:flex:is(:where(.group\\/item):hover *){display:flex}.scalar-app .group-hover\\/params\\:opacity-100:is(:where(.group\\/params):hover *){opacity:1}.scalar-app .group-hover\\/scopes-accordion\\:text-c-2:is(:where(.group\\/scopes-accordion):hover *){color:var(--scalar-color-2)}.scalar-app .group-hover\\/upload\\:block:is(:where(.group\\/upload):hover *){display:block}}.scalar-app .group-focus-visible\\:opacity-100:is(:where(.group):focus-visible *){opacity:1}.scalar-app .group-focus-visible\\:outline:is(:where(.group):focus-visible *){outline-style:var(--tw-outline-style);outline-width:1px}.scalar-app .group-has-\\[\\.cm-focused\\]\\:z-1:is(:where(.group):has(.cm-focused) *){z-index:1}.scalar-app .group-has-\\[\\.cm-focused\\]\\:flex:is(:where(.group):has(.cm-focused) *){display:flex}.scalar-app .group-has-\\[\\.cm-focused\\]\\:pr-6:is(:where(.group):has(.cm-focused) *){padding-right:24px}.scalar-app .group-has-\\[\\.cm-focused\\]\\:pr-10:is(:where(.group):has(.cm-focused) *){padding-right:40px}.scalar-app .group-has-\\[\\:focus-visible\\]\\:hidden:is(:where(.group):has(:focus-visible) *){display:none}.scalar-app .group-has-\\[\\:focus-visible\\]\\:opacity-100:is(:where(.group):has(:focus-visible) *){opacity:1}.scalar-app .group-has-\\[\\:focus-visible\\]\\/cell\\:border-c-accent:is(:where(.group\\/cell):has(:focus-visible) *){border-color:var(--scalar-color-accent)}.scalar-app .group-has-\\[\\:focus-visible\\]\\/cell\\:opacity-100:is(:where(.group\\/cell):has(:focus-visible) *){opacity:1}.scalar-app .group-has-\\[\\:focus-visible\\]\\/input\\:block:is(:where(.group\\/input):has(:focus-visible) *){display:block}.scalar-app .group-has-\\[input\\]\\/label\\:mr-0:is(:where(.group\\/label):has(:is(input)) *){margin-right:0}.scalar-app .group-\\[\\.alert\\]\\:bg-b-alert:is(:where(.group).alert *){background-color:var(--scalar-background-alert)}.scalar-app .group-\\[\\.alert\\]\\:bg-transparent:is(:where(.group).alert *){background-color:#0000}.scalar-app .group-\\[\\.alert\\]\\:shadow-none:is(:where(.group).alert *){--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.scalar-app .group-\\[\\.alert\\]\\:outline-orange:is(:where(.group).alert *){outline-color:var(--scalar-color-orange)}.scalar-app .group-\\[\\.error\\]\\:bg-b-danger:is(:where(.group).error *){background-color:var(--scalar-background-danger)}.scalar-app .group-\\[\\.error\\]\\:bg-transparent:is(:where(.group).error *){background-color:#0000}.scalar-app .group-\\[\\.error\\]\\:text-red:is(:where(.group).error *){color:var(--scalar-color-red)}.scalar-app .group-\\[\\.error\\]\\:shadow-none:is(:where(.group).error *){--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.scalar-app .group-\\[\\.error\\]\\:outline-red:is(:where(.group).error *){outline-color:var(--scalar-color-red)}.scalar-app .peer-checked\\:text-c-1:is(:where(.peer):checked~*){color:var(--scalar-color-1)}.scalar-app .peer-has-\\[\\.cm-focused\\]\\:opacity-0:is(:where(.peer):has(.cm-focused)~*){opacity:0}.scalar-app .peer-has-\\[\\.color-selector\\]\\:hidden:is(:where(.peer):has(.color-selector)~*){display:none}.scalar-app .before\\:pointer-events-none:before{content:var(--tw-content);pointer-events:none}.scalar-app .before\\:absolute:before{content:var(--tw-content);position:absolute}.scalar-app .before\\:top-0:before{content:var(--tw-content);top:0}.scalar-app .before\\:left-3:before{content:var(--tw-content);left:12px}.scalar-app .before\\:left-\\[calc\\(\\.75rem_\\+_\\.5px\\)\\]:before{content:var(--tw-content);left:calc(.75rem + .5px)}.scalar-app .before\\:z-1:before{content:var(--tw-content);z-index:1}.scalar-app .before\\:h-\\[calc\\(100\\%_\\+_\\.5px\\)\\]:before{content:var(--tw-content);height:calc(100% + .5px)}.scalar-app .before\\:w-\\[\\.5px\\]:before{content:var(--tw-content);width:.5px}.scalar-app .before\\:bg-border:before{content:var(--tw-content);background-color:var(--scalar-border-color)}.scalar-app .after\\:content-\\[\\'\\:\\'\\]:after{--tw-content:":";content:var(--tw-content)}:is(.scalar-app .\\*\\:first\\:rounded-l>*):first-child{border-top-left-radius:var(--scalar-radius);border-bottom-left-radius:var(--scalar-radius)}:is(.scalar-app .\\*\\:first\\:border-t-0>*):first-child,:is(.scalar-app .first\\:\\*\\:border-t-0:first-child>*){border-top-style:var(--tw-border-style);border-top-width:0}.scalar-app .last\\:mb-0:last-child{margin-bottom:0}.scalar-app .last\\:border-r-0:last-child{border-right-style:var(--tw-border-style);border-right-width:0}:is(.scalar-app .\\*\\:last\\:rounded-r>*):last-child{border-top-right-radius:var(--scalar-radius);border-bottom-right-radius:var(--scalar-radius)}.scalar-app .last\\:before\\:h-full:last-child:before{content:var(--tw-content);height:100%}.scalar-app .last-of-type\\:first-of-type\\:border-b-0:last-of-type:first-of-type{border-bottom-style:var(--tw-border-style);border-bottom-width:0}.scalar-app .focus-within\\:z-20:focus-within{z-index:20}.scalar-app .focus-within\\:border-\\(--scalar-background-3\\):focus-within{border-color:var(--scalar-background-3)}.scalar-app .focus-within\\:bg-b-1:focus-within{background-color:var(--scalar-background-1)}.scalar-app .focus-within\\:text-c-1:focus-within{color:var(--scalar-color-1)}@media (hover:hover){.scalar-app .hover\\:cursor-default:hover{cursor:default}.scalar-app .hover\\:border-\\(--scalar-background-3\\):hover{border-color:var(--scalar-background-3)}.scalar-app .hover\\:border-inherit:hover{border-color:inherit}.scalar-app .hover\\:bg-b-2:hover{background-color:var(--scalar-background-2)}.scalar-app .hover\\:bg-b-3:hover{background-color:var(--scalar-background-3)}.scalar-app .hover\\:bg-inherit:hover{background-color:inherit}.scalar-app .hover\\:bg-sidebar-b-active:hover{background-color:var(--scalar-sidebar-item-active-background,var(--scalar-background-2))}.scalar-app .hover\\:whitespace-normal:hover{white-space:normal}.scalar-app .hover\\:text-c-1:hover{color:var(--scalar-color-1)}.scalar-app .hover\\:text-c-2:hover{color:var(--scalar-color-2)}.scalar-app .hover\\:underline:hover{text-decoration-line:underline}.scalar-app .hover\\:brightness-75:hover{--tw-brightness:brightness(75%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}}.scalar-app .focus\\:text-c-1:focus{color:var(--scalar-color-1)}.scalar-app .focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.scalar-app .focus-visible\\:z-10:focus-visible{z-index:10}.scalar-app .active\\:text-c-1:active{color:var(--scalar-color-1)}.scalar-app .disabled\\:cursor-default:disabled{cursor:default}.scalar-app .disabled\\:text-c-2:disabled{color:var(--scalar-color-2)}.scalar-app .has-\\[\\.empty-sidebar-item\\]\\:border-t:has(.empty-sidebar-item){border-top-style:var(--tw-border-style);border-top-width:var(--scalar-border-width)}.scalar-app .has-\\[\\:focus-visible\\]\\:absolute:has(:focus-visible){position:absolute}.scalar-app .has-\\[\\:focus-visible\\]\\:z-1:has(:focus-visible){z-index:1}.scalar-app .has-\\[\\:focus-visible\\]\\:rounded-\\[4px\\]:has(:focus-visible){border-radius:4px}.scalar-app .has-\\[\\:focus-visible\\]\\:bg-b-1:has(:focus-visible){background-color:var(--scalar-background-1)}.scalar-app .has-\\[\\:focus-visible\\]\\:opacity-100:has(:focus-visible){opacity:1}.scalar-app .has-\\[\\:focus-visible\\]\\:outline:has(:focus-visible){outline-style:var(--tw-outline-style);outline-width:1px}@media (min-width:600px){.scalar-app .sm\\:not-sr-only{clip:auto;white-space:normal;width:auto;height:auto;margin:0;padding:0;position:static;overflow:visible}.scalar-app .sm\\:order-none{order:0}.scalar-app .sm\\:mr-1\\.5{margin-right:6px}.scalar-app .sm\\:mb-1\\.5{margin-bottom:6px}.scalar-app .sm\\:ml-1\\.5{margin-left:6px}.scalar-app .sm\\:flex{display:flex}.scalar-app .sm\\:hidden{display:none}.scalar-app .sm\\:max-w-max{max-width:max-content}.scalar-app .sm\\:min-w-max{min-width:max-content}.scalar-app .sm\\:flex-col{flex-direction:column}.scalar-app .sm\\:flex-row{flex-direction:row}.scalar-app .sm\\:justify-between{justify-content:space-between}.scalar-app .sm\\:gap-px{gap:1px}.scalar-app .sm\\:rounded{border-radius:var(--scalar-radius)}.scalar-app .sm\\:rounded-lg{border-radius:var(--scalar-radius-lg)}.scalar-app .sm\\:px-2{padding-inline:8px}.scalar-app .sm\\:px-3{padding-inline:12px}.scalar-app .sm\\:py-1\\.5{padding-block:6px}:is(.scalar-app .sm\\:\\*\\:rounded-lg>*){border-radius:var(--scalar-radius-lg)}}@media (min-width:800px){.scalar-app .md\\:right-10{right:40px}.scalar-app .md\\:bottom-10{bottom:40px}.scalar-app .md\\:mx-auto{margin-inline:auto}.scalar-app .md\\:-ml-1\\.25{margin-left:-5px}.scalar-app .md\\:ml-1\\.5{margin-left:6px}.scalar-app .md\\:block{display:block}.scalar-app .md\\:grid{display:grid}.scalar-app .md\\:w-full{width:100%}.scalar-app .md\\:max-w-\\[720px\\]{max-width:720px}.scalar-app .md\\:min-w-fit{min-width:fit-content}.scalar-app .md\\:flex-none{flex:none}.scalar-app .md\\:translate-x-0{--tw-translate-x:0px;translate:var(--tw-translate-x)var(--tw-translate-y)}.scalar-app .md\\:translate-y-0{--tw-translate-y:0px;translate:var(--tw-translate-x)var(--tw-translate-y)}.scalar-app .md\\:grid-cols-\\[1fr_720px_1fr\\]{grid-template-columns:1fr 720px 1fr}.scalar-app .md\\:flex-row{flex-direction:row}.scalar-app .md\\:border-r{border-right-style:var(--tw-border-style);border-right-width:var(--scalar-border-width)}.scalar-app .md\\:border-b-0{border-bottom-style:var(--tw-border-style);border-bottom-width:0}.scalar-app .md\\:p-1\\.5{padding:6px}.scalar-app .md\\:px-0{padding-inline:0}.scalar-app .md\\:px-1\\.5{padding-inline:6px}.scalar-app .md\\:px-2{padding-inline:8px}.scalar-app .md\\:px-2\\.5{padding-inline:10px}.scalar-app .md\\:px-4{padding-inline:16px}.scalar-app .md\\:px-\\[18px\\]{padding-inline:18px}.scalar-app .md\\:py-2\\.5{padding-block:10px}.scalar-app .md\\:pb-2\\.5{padding-bottom:10px}.scalar-app .md\\:pb-\\[37px\\]{padding-bottom:37px}.scalar-app .md\\:pl-0{padding-left:0}:is(.scalar-app .md\\:\\*\\:border-t-0>*){border-top-style:var(--tw-border-style);border-top-width:0}}@media (min-width:1000px){.scalar-app .lg\\:order-none{order:0}.scalar-app .lg\\:-mr-1{margin-right:-4px}.scalar-app .lg\\:mb-0{margin-bottom:0}.scalar-app .lg\\:flex{display:flex}.scalar-app .lg\\:min-h-header{min-height:48px}.scalar-app .lg\\:w-auto{width:auto}.scalar-app .lg\\:max-w-\\[580px\\]{max-width:580px}.scalar-app .lg\\:min-w-\\[580px\\]{min-width:580px}.scalar-app .lg\\:flex-1{flex:1}.scalar-app .lg\\:p-1{padding:4px}.scalar-app .lg\\:px-1{padding-inline:4px}.scalar-app .lg\\:px-2\\.5{padding-inline:10px}.scalar-app .lg\\:pt-1{padding-top:4px}.scalar-app .lg\\:pr-24{padding-right:96px}.scalar-app .lg\\:text-sm{font-size:var(--scalar-font-size-4)}}@media (min-width:1200px){.scalar-app .xl\\:\\!flex{display:flex!important}.scalar-app .xl\\:flex{display:flex}.scalar-app .xl\\:hidden{display:none}.scalar-app .xl\\:h-fit{height:fit-content}.scalar-app .xl\\:h-full{height:100%}.scalar-app .xl\\:min-h-header{min-height:48px}.scalar-app .xl\\:max-w-\\[720px\\]{max-width:720px}.scalar-app .xl\\:min-w-0{min-width:0}.scalar-app .xl\\:min-w-\\[720px\\]{min-width:720px}.scalar-app .xl\\:flex-row{flex-direction:row}.scalar-app .xl\\:overflow-auto{overflow:auto}.scalar-app .xl\\:overflow-hidden{overflow:hidden}.scalar-app .xl\\:rounded-none{border-radius:0}.scalar-app .xl\\:pr-0\\.5{padding-right:2px}.scalar-app .xl\\:pl-2{padding-left:8px}:is(.scalar-app .\\*\\:xl\\:border-t-0>*){border-top-style:var(--tw-border-style);border-top-width:0}:is(.scalar-app .\\*\\:xl\\:border-l>*){border-left-style:var(--tw-border-style);border-left-width:var(--scalar-border-width)}:is(.scalar-app .\\*\\:first\\:xl\\:border-l-0>*):first-child{border-left-style:var(--tw-border-style);border-left-width:0}}.scalar-app .dark\\:bg-b-2:where(.dark-mode,.dark-mode *){background-color:var(--scalar-background-2)}@media (hover:hover){.scalar-app .hover\\:dark\\:bg-b-2:hover:where(.dark-mode,.dark-mode *){background-color:var(--scalar-background-2)}}.scalar-app .ui-open\\:rotate-90[data-headlessui-state~=open],:where([data-headlessui-state~=open]) :is(.scalar-app .ui-open\\:rotate-90){rotate:90deg}.scalar-app .ui-not-open\\:invisible[data-headlessui-state]:not([data-headlessui-state~=open]),:where([data-headlessui-state]:not([data-headlessui-state~=open])) :is(.scalar-app .ui-not-open\\:invisible):not([data-headlessui-state]){visibility:hidden}.scalar-app .ui-not-open\\:rotate-0[data-headlessui-state]:not([data-headlessui-state~=open]),:where([data-headlessui-state]:not([data-headlessui-state~=open])) :is(.scalar-app .ui-not-open\\:rotate-0):not([data-headlessui-state]){rotate:none}.scalar-app .ui-checked\\:bg-b-3[data-headlessui-state~=checked],:where([data-headlessui-state~=checked]) :is(.scalar-app .ui-checked\\:bg-b-3){background-color:var(--scalar-background-3)}.scalar-app .ui-active\\:bg-b-2[data-headlessui-state~=active],:where([data-headlessui-state~=active]) :is(.scalar-app .ui-active\\:bg-b-2),:is(.scalar-app .ui-active\\:\\*\\:bg-b-2[data-headlessui-state~=active]>*),:is(:where([data-headlessui-state~=active]) :is(.scalar-app .ui-active\\:\\*\\:bg-b-2)>*){background-color:var(--scalar-background-2)}@media (max-width:720px) and (max-height:480px){.scalar-app .zoomed\\:static{position:static}.scalar-app .zoomed\\:p-1{padding:4px}}.app-platform-mac :is(.scalar-app .mac\\:pl-\\[72px\\]){padding-left:72px}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-content{syntax:"*";inherits:false;initial-value:""}.nav-item[data-v-b81bd85a]{cursor:pointer;border-radius:var(--scalar-radius-lg);background:var(--scalar-background-3);border:var(--scalar-border-width)solid var(--scalar-background-2);color:var(--scalar-color-3);flex:1;justify-content:center;align-items:center;min-width:0;padding:4.5px;display:flex;position:relative;overflow:hidden}.dark-mode .nav-item[data-v-b81bd85a]{background:var(--scalar-background-2)}@supports (color:color-mix(in lab,red,red)){.dark-mode .nav-item[data-v-b81bd85a]{background:color-mix(in srgb,var(--scalar-background-2),transparent)}}.nav-item-icon-copy[data-v-b81bd85a]{white-space:nowrap;max-width:100%;-webkit-mask-image:linear-gradient(to left,transparent 0,var(--scalar-background-2)20px);mask-image:linear-gradient(to left,transparent 0,var(--scalar-background-2)20px);overflow:hidden}.nav-item:hover .nav-item-icon-copy[data-v-b81bd85a]{-webkit-mask-image:linear-gradient(to left,transparent 20px,var(--scalar-background-2)40px);mask-image:linear-gradient(to left,transparent 20px,var(--scalar-background-2)40px)}.nav-item-copy[data-v-b81bd85a]{max-width:calc(100% - 20px)}.nav-item[data-v-b81bd85a]:hover{color:var(--scalar-color-1)}.nav-item__active[data-v-b81bd85a]{background-color:var(--scalar-background-1);color:var(--scalar-color-1);border-color:var(--scalar-border-color)}.dark-mode .nav-item__active[data-v-b81bd85a]{background-color:var(--scalar-background-2)}.nav-item-close[data-v-b81bd85a]{border-radius:var(--scalar-radius);stroke-width:1.5px;max-width:20px;color:var(--scalar-color-3);opacity:0;background:0 0;margin-left:-20px;padding:2px;position:absolute;right:3px}.nav-item:hover .nav-item-close[data-v-b81bd85a]{opacity:1}.nav-item-close[data-v-b81bd85a]:hover{background-color:var(--scalar-background-4)}.nav-item__active .nav-item-close[data-v-b81bd85a]:hover{background-color:var(--scalar-background-2)}.download-app-button[data-v-cb45fa05]{box-shadow:0 0 0 .5px var(--scalar-border-color);background:linear-gradient(#ffffffbf,#00000009)}.dark-mode .download-app-button[data-v-cb45fa05]{background:linear-gradient(#ffffff1a,#00000026)}.download-app-button[data-v-cb45fa05]:hover{background:linear-gradient(#00000009,#ffffffbf)}.dark-mode .download-app-button[data-v-cb45fa05]:hover{background:linear-gradient(#00000026,#ffffff1a)}.http-bg-gradient[data-v-076b14a1]{background:linear-gradient(#ffffffbf,#00000009)}.http-bg-gradient[data-v-076b14a1]:hover{background:linear-gradient(#00000009,#ffffffbf)}.dark-mode .http-bg-gradient[data-v-076b14a1]{background:linear-gradient(#ffffff09,#00000026)}.dark-mode .http-bg-gradient[data-v-076b14a1]:hover{background:linear-gradient(#00000026,#ffffff09)}.scroll-timeline-x[data-v-19cf46d6]{scroll-timeline:--scroll-timeline x;scroll-timeline:--scroll-timeline horizontal;-ms-overflow-style:none;scrollbar-width:none;overflow:auto}.commandmenu[data-v-b0ea498c]{box-shadow:var(--scalar-shadow-2);border-radius:var(--scalar-radius-lg);background-color:var(--scalar-background-1);opacity:0;width:100%;max-width:580px;max-height:60dvh;margin:12px;animation:.3s ease-in-out .1s forwards fadeincommandmenu-b0ea498c;position:fixed;top:150px;left:50%;transform:translate(-50%,10px)}.commandmenu-overlay[data-v-b0ea498c]{cursor:pointer;background:#0003;animation:.3s ease-in-out forwards fadeincommand-b0ea498c;position:fixed;inset:0}@keyframes fadeincommand-b0ea498c{0%{opacity:0}to{opacity:1}}@keyframes fadeincommandmenu-b0ea498c{0%{opacity:0;transform:translate(-50%,10px)}to{opacity:1;transform:translate(-50%)}}.scalar .scalar-app-layout[data-v-45e9730e]{background:var(--scalar-background-1);opacity:0;border:var(--scalar-border-width)solid var(--scalar-border-color);border-radius:8px;width:100%;max-width:1390px;height:calc(100% - 120px);margin:auto;animation:.35s forwards scalarapiclientfadein-45e9730e;position:relative;overflow:hidden}@media (max-width:720px) and (max-height:480px){.scalar .scalar-app-layout[data-v-45e9730e]{height:100%;max-height:90svh}}@keyframes scalarapiclientfadein-45e9730e{0%{opacity:0}to{opacity:1}}.scalar .scalar-app-exit[data-v-45e9730e]{cursor:pointer;z-index:-1;background:#00000038;width:100vw;height:100vh;transition:all .3s ease-in-out;animation:.35s forwards scalardrawerexitfadein-45e9730e;position:fixed;top:0;left:0}.dark-mode .scalar .scalar-app-exit[data-v-45e9730e]{background:#00000073}.scalar .scalar-app-exit[data-v-45e9730e]:before{text-align:center;color:#fff;opacity:.6;font-family:sans-serif;font-size:30px;font-weight:100;line-height:50px;position:absolute;top:0;right:12px}.scalar .scalar-app-exit[data-v-45e9730e]:hover:before{opacity:1}@keyframes scalardrawerexitfadein-45e9730e{0%{opacity:0}to{opacity:1}}.scalar-container[data-v-45e9730e]{visibility:visible;z-index:10000;justify-content:center;align-items:center;width:100%;height:100%;display:flex;position:fixed;top:0;bottom:0;left:0;overflow:hidden}.scalar .url-form-input[data-v-45e9730e]{min-height:auto!important}.scalar .scalar-container[data-v-45e9730e]{line-height:normal}.scalar .scalar-app-header span[data-v-45e9730e]{color:var(--scalar-color-3)}.scalar .scalar-app-header a[data-v-45e9730e]{color:var(--scalar-color-1)}.scalar .scalar-app-header a[data-v-45e9730e]:hover{text-decoration:underline}.scalar-activate[data-v-45e9730e]{cursor:pointer;align-items:center;gap:6px;width:fit-content;margin:0 .75rem .75rem auto;font-size:.875rem;font-weight:600;line-height:24px;display:flex}.scalar-activate-button[data-v-45e9730e]{color:var(--scalar-color-blue);-webkit-appearance:none;appearance:none;background:0 0;border:none;outline:none;align-items:center;gap:6px;padding:0 .5rem;display:flex}.scalar-activate:hover .scalar-activate-button[data-v-45e9730e]{background:var(--scalar-background-3);border-radius:3px}.scalar-modal-layout .scalar-button-danger[data-v-a93bfefe]{background:var(--scalar-color-red)}@supports (color:color-mix(in lab,red,red)){.scalar-modal-layout .scalar-button-danger[data-v-a93bfefe]{background:color-mix(in srgb,var(--scalar-color-red),transparent 95%)}}.scalar-modal-layout .scalar-button-danger[data-v-a93bfefe]{color:var(--scalar-color-red)}.scalar-modal-layout .scalar-button-danger[data-v-a93bfefe]:hover,.scalar-modal-layout .scalar-button-danger[data-v-a93bfefe]:focus{background:var(--scalar-color-red)}@supports (color:color-mix(in lab,red,red)){.scalar-modal-layout .scalar-button-danger[data-v-a93bfefe]:hover,.scalar-modal-layout .scalar-button-danger[data-v-a93bfefe]:focus{background:color-mix(in srgb,var(--scalar-color-red),transparent 90%)}}.fade-request-section-content[data-v-cac0985e]{background:linear-gradient(to left,var(--scalar-background-1)64%,transparent)}.filter-hover[data-v-cac0985e]{height:100%;padding-left:24px;padding-right:39px;transition:width 0s ease-in-out .2s;position:absolute;right:0;overflow:hidden}.filter-hover[data-v-cac0985e]:hover,.filter-hover[data-v-cac0985e]:has(:focus-visible){z-index:10;width:100%}.filter-hover[data-v-cac0985e]:before{content:"";background-color:var(--scalar-background-1);opacity:0;pointer-events:none;width:100%;height:100%;transition:all .3s ease-in-out;position:absolute;top:0;left:0}.filter-hover-item[data-v-cac0985e]{opacity:0}.filter-hover-item[data-v-cac0985e]:not(:last-of-type){transform:translateY(3px)}.filter-hover:hover .filter-hover-item[data-v-cac0985e]{transition:opacity .2s ease-in-out,transform .2s ease-in-out}.filter-hover:hover .filter-hover-item[data-v-cac0985e]:last-of-type{transition-delay:50ms}.filter-hover:hover .filter-hover-item[data-v-cac0985e]:nth-last-of-type(2){transition-delay:.1s}.filter-hover:hover .filter-hover-item[data-v-cac0985e]:nth-last-of-type(3){transition-delay:.15s}.filter-hover:hover .filter-hover-item[data-v-cac0985e]:nth-last-of-type(4){transition-delay:.2s}.filter-hover:hover .filter-hover-item[data-v-cac0985e]:nth-last-of-type(5){transition-delay:.25s}.filter-hover:hover .filter-hover-item[data-v-cac0985e]:nth-last-of-type(6){transition-delay:.3s}.filter-hover:hover .filter-hover-item[data-v-cac0985e]:nth-last-of-type(7){transition-delay:.35s}.filter-hover:hover .filter-hover-item[data-v-cac0985e],.filter-hover:has(:focus-visible) .filter-hover-item[data-v-cac0985e]{opacity:1;transform:translateZ(0)}.filter-hover[data-v-cac0985e]:hover:before,.filter-hover[data-v-cac0985e]:has(:focus-visible):before{opacity:.9;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.context-bar-group:hover .context-bar-group-hover\\:text-c-1[data-v-cac0985e],.context-bar-group:has(:focus-visible) .context-bar-group-hover\\:text-c-1[data-v-cac0985e]{--tw-text-opacity:1;color:rgb(var(--scalar-color-1)/var(--tw-text-opacity))}.context-bar-group:hover .context-bar-group-hover\\:hidden[data-v-cac0985e],.context-bar-group:has(:focus-visible) .context-bar-group-hover\\:hidden[data-v-cac0985e]{display:none}.light-mode .bg-preview[data-v-0956ad2d]{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23000' fill-opacity='10%25'%3E%3Crect width='8' height='8' /%3E%3Crect x='8' y='8' width='8' height='8' /%3E%3C/svg%3E")}.dark-mode .bg-preview[data-v-0956ad2d]{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23FFF' fill-opacity='10%25'%3E%3Crect width='8' height='8' /%3E%3Crect x='8' y='8' width='8' height='8' /%3E%3C/svg%3E")}[data-v-96fbecd5] .cm-editor{font-size:var(--scalar-mini);background-color:#0000;outline:none}[data-v-96fbecd5] .cm-gutters{background-color:var(--scalar-background-1);border-radius:var(--scalar-radius)0 0 var(--scalar-radius)}.body-raw[data-v-96fbecd5] .cm-scroller{width:fit-content;overflow:visible}.scalar-code-copy[data-v-96fbecd5]{z-index:10;pointer-events:none;align-items:flex-start;display:flex;position:sticky;top:6px;right:6px;transform:translate(-6px)}.copy-button[data-v-96fbecd5]{background-color:var(--scalar-background-1);border:1px solid var(--scalar-border-color);color:var(--scalar-color-3);cursor:pointer;opacity:0;pointer-events:auto;border-radius:3px;align-items:center;height:30px;padding:6px;transition:opacity .15s ease-in-out,color .15s ease-in-out;display:flex}.body-raw:hover .copy-button[data-v-96fbecd5],.copy-button[data-v-96fbecd5]:focus-visible{opacity:1}.copy-button[data-v-96fbecd5]:hover{color:var(--scalar-color-1)}.scalar-code-block[data-v-2dcbd6aa] .hljs *{font-size:var(--scalar-mini)}.response-body-virtual[data-headlessui-state=open],.response-body-virtual[data-headlessui-state=open] .diclosure-panel{flex-direction:column;flex-grow:1;display:flex}.ascii-art-animate .ascii-art-line[data-v-69ebd973]{border-right:1ch solid #0000;animation:4s step-end 1s both typewriter-69ebd973,.5s step-end infinite blinkTextCursor-69ebd973}@keyframes typewriter-69ebd973{0%{width:0}to{width:100%}}@keyframes blinkTextCursor-69ebd973{0%{border-right-color:currentColor}50%{border-right-color:#0000}}.keycap-n[data-v-6e1f579f]{background:-webkit-linear-gradient(5deg,transparent 30%,var(--scalar-color-3)50%);-webkit-text-fill-color:transparent;-webkit-background-clip:text}.keycap-hotkey[data-v-6e1f579f]{line-height:26px;position:absolute;top:32px}.scalar-version-number[data-v-bb2369d4]{width:76px;height:76px;font-size:8px;font-family:var(--scalar-font-code);box-shadow:inset 2px 0 0 2px var(--scalar-background-2);text-align:center;text-transform:initial;-webkit-text-decoration-color:var(--scalar-color-3);text-decoration-color:var(--scalar-color-3);border-radius:9px 9px 16px 12px;flex-direction:column;justify-content:center;align-items:center;margin-top:-113px;margin-left:-36px;line-height:11px;display:flex;position:absolute;transform:skewY(13deg)}.scalar-version-number a[data-v-bb2369d4]{background:var(--scalar-background-2);border:.5px solid var(--scalar-border-color);border-radius:3px;padding:2px 4px;font-weight:700;text-decoration:none}.gitbook-show[data-v-bb2369d4]{display:none}.v-enter-active[data-v-62b8db3f]{transition:opacity .5s}.v-enter-from[data-v-62b8db3f]{opacity:0}.animate-response-heading .response-heading[data-v-7138ed84]{opacity:1;animation:.2s ease-in-out forwards push-response-7138ed84}@keyframes push-response-7138ed84{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-4px)}}.animate-response-heading .animate-response-children[data-v-7138ed84]{opacity:0;animation:.2s ease-in-out 50ms forwards response-spans-7138ed84}@keyframes response-spans-7138ed84{0%{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}[data-v-bd8ced90] .cm-editor{background:0 0;outline:none;height:100%;padding:0}[data-v-bd8ced90] .cm-placeholder{color:var(--scalar-color-3)}[data-v-bd8ced90] .cm-content{font-family:var(--scalar-font-code);font-size:var(--scalar-small);max-height:20px;padding:8px 0}[data-v-bd8ced90] .cm-tooltip{filter:brightness(var(--scalar-lifted-brightness));border-radius:var(--scalar-radius);box-shadow:var(--scalar-shadow-2);background:0 0!important;border:none!important;outline:none!important;overflow:hidden!important}[data-v-bd8ced90] .cm-tooltip-autocomplete ul li{padding:3px 6px!important}[data-v-bd8ced90] .cm-completionIcon-type:after{color:var(--scalar-color-3)!important}[data-v-bd8ced90] .cm-tooltip-autocomplete ul li[aria-selected]{background:var(--scalar-background-2)!important;color:var(--scalar-color-1)!important}[data-v-bd8ced90] .cm-tooltip-autocomplete ul{position:relative;padding:6px!important}[data-v-bd8ced90] .cm-tooltip-autocomplete ul li:hover{border-radius:3px;color:var(--scalar-color-1)!important;background:var(--scalar-background-3)!important}[data-v-bd8ced90] .cm-activeLine,[data-v-bd8ced90] .cm-activeLineGutter{background-color:#0000}[data-v-bd8ced90] .cm-selectionMatch,[data-v-bd8ced90] .cm-matchingBracket{border-radius:var(--scalar-radius);background:var(--scalar-background-4)!important}[data-v-bd8ced90] .cm-css-color-picker-wrapper{outline:1px solid var(--scalar-background-3);border-radius:3px;display:inline-flex;overflow:hidden}[data-v-bd8ced90] .cm-gutters{color:var(--scalar-color-3);font-size:var(--scalar-mini);background-color:#0000;border-right:none;border-radius:0 0 0 3px;line-height:1.44}[data-v-bd8ced90] .cm-gutters:before{content:"";border-radius:var(--scalar-radius)0 0 var(--scalar-radius);background-color:var(--scalar-background-1);width:calc(100% - 2px);height:calc(100% - 4px);position:absolute;top:2px;left:2px}[data-v-bd8ced90] .cm-gutterElement{justify-content:flex-end;align-items:center;display:flex;position:relative;font-family:var(--scalar-font-code)!important;padding:0 6px 0 8px!important}[data-v-bd8ced90] .cm-gutter+.cm-gutter :not(.cm-foldGutter) .cm-gutterElement{padding-left:0!important}[data-v-bd8ced90] .cm-scroller{overflow:auto}.peer:hover .copy-button[data-v-bd8ced90],.copy-button[data-v-bd8ced90]:focus-visible{opacity:100}.scalar-code-copy[data-v-bd8ced90]{justify-content:flex-end;align-items:flex-start;display:flex;position:sticky;inset:0}.copy-button[data-v-bd8ced90]{background-color:var(--scalar-background-2);border:1px solid var(--scalar-border-color);color:var(--scalar-color-3);cursor:pointer;opacity:0;border-radius:3px;align-items:center;height:30px;margin-bottom:-30px;padding:6px;transition:opacity .15s ease-in-out,color .15s ease-in-out;display:flex;position:relative;top:0;right:0}.scalar-code-copy[data-v-bd8ced90],.copy-button[data-v-bd8ced90]{background:inherit}.copy-button[data-v-bd8ced90]:hover{color:var(--scalar-color-1)}.copy-button svg[data-v-bd8ced90]{stroke-width:1.5px}.line-wrapping[data-v-bd8ced90]:focus-within .cm-content{white-space:break-spaces;word-break:break-all;min-height:fit-content}.cm-pill{--tw-bg-base:var(--scalar-color-1);color:var(--tw-bg-base);font-size:var(--scalar-mini);border-radius:30px;padding:0 9px;display:inline-block;background:var(--tw-bg-base)!important}@supports (color:color-mix(in lab,red,red)){.cm-pill{background:color-mix(in srgb,var(--tw-bg-base),transparent 94%)!important}}.cm-pill.bg-grey{background:var(--scalar-background-3)!important}.dark-mode .cm-pill{background:var(--tw-bg-base)!important}@supports (color:color-mix(in lab,red,red)){.dark-mode .cm-pill{background:color-mix(in srgb,var(--tw-bg-base),transparent 90%)!important}}.cm-pill:first-of-type{margin-left:0}.cm-editor .cm-widgetBuffer{display:none}.cm-foldPlaceholder:hover{color:var(--scalar-color-1)}.cm-foldGutter .cm-gutterElement{font-size:var(--scalar-heading-4);padding:2px!important}.cm-foldGutter .cm-gutterElement:first-of-type{display:none}.cm-foldGutter .cm-gutterElement .cm-foldMarker{padding:2px}.cm-foldGutter .cm-gutterElement:hover .cm-foldMarker{background:var(--scalar-background-2);border-radius:var(--scalar-radius);color:var(--scalar-color-1)}.schema>span[data-v-4df72868]:not(:first-child):before{content:"·";margin:0 .5ch;display:block}.schema>span[data-v-4df72868]{white-space:nowrap;display:flex}[data-v-d8146cd8] .cm-editor{padding:0}[data-v-d8146cd8] .cm-content{font-family:var(--scalar-font);font-size:var(--scalar-mini);background-color:#0000;align-items:center;width:100%;padding:6px 8px;display:flex}[data-v-d8146cd8] .cm-content:has(.cm-pill){padding:6px 8px}[data-v-d8146cd8] .cm-content .cm-pill:not(:last-of-type){margin-right:.5px}[data-v-d8146cd8] .cm-content .cm-pill:not(:first-of-type){margin-left:.5px}[data-v-d8146cd8] .cm-line{text-overflow:ellipsis;padding:0;overflow:hidden}.filemask[data-v-d8146cd8]{-webkit-mask-image:linear-gradient(to right,transparent 0,var(--scalar-background-2)20px);mask-image:linear-gradient(to right,transparent 0,var(--scalar-background-2)20px)}[data-v-124bfbc5] .cm-content{font-size:var(--scalar-mini)}[data-v-a8683fd7] .cm-editor{padding:0}[data-v-a8683fd7] .cm-content{font-family:var(--scalar-font);font-size:var(--scalar-mini);background-color:#0000;align-items:center;width:100%;padding:6px 8px;display:flex}[data-v-a8683fd7] .cm-content:has(.cm-pill){padding:6px 8px}[data-v-a8683fd7] .cm-content .cm-pill:not(:last-of-type){margin-right:.5px}[data-v-a8683fd7] .cm-content .cm-pill:not(:first-of-type){margin-left:.5px}[data-v-a8683fd7] .cm-line{text-overflow:ellipsis;padding:0;overflow:hidden}.required[data-v-a8683fd7]:after{content:"Required"}input[data-v-a8683fd7]::placeholder{color:var(--scalar-color-3)}.scalar-password-input[data-v-a8683fd7]{text-security:disc;-webkit-text-security:disc;-moz-text-security:disc}.auth-blend-required[data-v-7289bc09] .scalar-input-required,.auth-blend-required[data-v-7289bc09] .required{background:var(--scalar-background-2);--tw-bg-base:var(--scalar-background-2);--tw-shadow:-8px 0 4px var(--scalar-background-2)}.request-example-references-header[data-v-7289bc09]+tr>td{border-top:0;border-top-left-radius:0;border-top-right-radius:0}.scalar-data-table .auth-description-container .auth-description[data-v-7289bc09]{outline:.5px solid var(--scalar-border-color)}.scalar-data-table .auth-description-container:hover .auth-description[data-v-7289bc09]{height:auto;position:absolute}.auth-combobox-position[data-v-d0e4c96f]{margin-left:120px}.scroll-timeline-x[data-v-d0e4c96f]{scroll-timeline:--scroll-timeline x;scroll-timeline:--scroll-timeline horizontal;scrollbar-width:none;-ms-overflow-style:none;overflow:auto}.fade-left[data-v-d0e4c96f],.fade-right[data-v-d0e4c96f]{content:"";pointer-events:none;height:100%;min-height:24px;animation-name:fadein-d0e4c96f;animation-duration:1ms;animation-direction:reverse;animation-timeline:--scroll-timeline;position:sticky}.fade-left[data-v-d0e4c96f]{background:linear-gradient(-90deg,var(--scalar-background-1)0%,var(--scalar-background-1)60%,var(--scalar-background-1)100%)}@supports (color:color-mix(in lab,red,red)){.fade-left[data-v-d0e4c96f]{background:linear-gradient(-90deg,color-mix(in srgb,var(--scalar-background-1),transparent 100%)0%,color-mix(in srgb,var(--scalar-background-1),transparent 20%)60%,var(--scalar-background-1)100%)}}.fade-left[data-v-d0e4c96f]{min-width:3px;animation-direction:normal;left:-1px}.fade-right[data-v-d0e4c96f]{background:linear-gradient(90deg,var(--scalar-background-1)0%,var(--scalar-background-1)60%,var(--scalar-background-1)100%)}@supports (color:color-mix(in lab,red,red)){.fade-right[data-v-d0e4c96f]{background:linear-gradient(90deg,color-mix(in srgb,var(--scalar-background-1),transparent 100%)0%,color-mix(in srgb,var(--scalar-background-1),transparent 20%)60%,var(--scalar-background-1)100%)}}.fade-right[data-v-d0e4c96f]{min-width:24px;margin-left:-20px;top:0;right:-1px}@keyframes fadein-d0e4c96f{0%{opacity:0}15%{opacity:1}}.auth-combobox-position[data-v-653ceb53]{margin-left:120px}.scroll-timeline-x[data-v-653ceb53]{scroll-timeline:--scroll-timeline x;scroll-timeline:--scroll-timeline horizontal;scrollbar-width:none;-ms-overflow-style:none;overflow:auto}.fade-left[data-v-653ceb53],.fade-right[data-v-653ceb53]{content:"";pointer-events:none;height:100%;min-height:24px;animation-name:fadein-653ceb53;animation-duration:1ms;animation-direction:reverse;animation-timeline:--scroll-timeline;position:sticky}.fade-left[data-v-653ceb53]{background:linear-gradient(-90deg,var(--scalar-background-1)0%,var(--scalar-background-1)60%,var(--scalar-background-1)100%)}@supports (color:color-mix(in lab,red,red)){.fade-left[data-v-653ceb53]{background:linear-gradient(-90deg,color-mix(in srgb,var(--scalar-background-1),transparent 100%)0%,color-mix(in srgb,var(--scalar-background-1),transparent 20%)60%,var(--scalar-background-1)100%)}}.fade-left[data-v-653ceb53]{min-width:3px;animation-direction:normal;left:-1px}.fade-right[data-v-653ceb53]{background:linear-gradient(90deg,var(--scalar-background-1)0%,var(--scalar-background-1)60%,var(--scalar-background-1)100%)}@supports (color:color-mix(in lab,red,red)){.fade-right[data-v-653ceb53]{background:linear-gradient(90deg,color-mix(in srgb,var(--scalar-background-1),transparent 100%)0%,color-mix(in srgb,var(--scalar-background-1),transparent 20%)60%,var(--scalar-background-1)100%)}}.fade-right[data-v-653ceb53]{min-width:24px;margin-left:-20px;top:0;right:-1px}@keyframes fadein-653ceb53{0%{opacity:0}15%{opacity:1}}[data-v-92438804] code.hljs *{font-size:var(--scalar-mini)}.request-section-content[data-v-ca5f9f37]{--scalar-border-width:.5px}.request-section-content-filter[data-v-ca5f9f37]{box-shadow:0 -10px 0 10px var(--scalar-background-1)}.request-item:focus-within .request-meta-buttons[data-v-ca5f9f37]{opacity:1}.group-hover-input[data-v-ca5f9f37]{border-width:var(--scalar-border-width);border-color:#0000}.group:hover .group-hover-input[data-v-ca5f9f37]{background:var(--scalar-background-1)}@supports (color:color-mix(in lab,red,red)){.group:hover .group-hover-input[data-v-ca5f9f37]{background:color-mix(in srgb,var(--scalar-background-1),var(--scalar-background-2))}}.group:hover .group-hover-input[data-v-ca5f9f37]{border-color:var(--scalar-border-color)}.group-hover-input[data-v-ca5f9f37]:focus{border-color:var(--scalar-border-color)!important;background:0 0!important}@media (min-width:800px){.has-no-import-url,.has-import-url{contain:paint;max-width:100dvw;overflow-x:hidden}.has-no-import-url .scalar-client>main{opacity:1;background:var(--scalar-background-1);animation:.3s ease-in-out forwards transform-restore-layout}.has-import-url .scalar-client>main{opacity:0;border:var(--scalar-border-width)solid var(--scalar-border-color);z-index:10000;border-radius:12px;animation:.3s ease-in-out forwards transform-fade-layout;overflow:hidden;transform:scale(.85)translate(calc(50dvw + 80px))}.has-import-url .scalar-client .sidenav{display:none}.has-no-import-url .scalar-app,.has-import-url .scalar-app{background:var(--scalar-background-1)!important}}@keyframes transform-fade-layout{0%{opacity:0;transform:scale(.85)translate(calc(50dvw + 80px),10px)}to{opacity:1;transform:scale(.85)translate(calc(50dvw + 80px))}}@keyframes transform-restore-layout{0%{opacity:1;transform:scale(.85)translate(calc(50dvw + 80px))}to{opacity:1;transform:scale(1)translate(0)}}.openapi-color{color:var(--scalar-color-green)}.section-flare{position:fixed;top:0;right:-50dvw}#scalar-client{background-color:var(--scalar-background-2);flex-direction:column;width:100dvw;height:100dvh;display:flex;position:relative}.dark-mode #scalar-client{background-color:var(--scalar-background-1)}@supports (color:color-mix(in lab,red,red)){.dark-mode #scalar-client{background-color:color-mix(in srgb,var(--scalar-background-1)65%,black)}}.open-api-client-button[data-v-e913a538]{cursor:pointer;text-align:center;white-space:nowrap;width:100%;height:31px;font-size:var(--scalar-mini);font-weight:var(--scalar-semibold);border-radius:var(--scalar-radius);box-shadow:0 0 0 .5px var(--scalar-border-color);color:var(--scalar-sidebar-color-1);justify-content:center;align-items:center;gap:6px;padding:9px 12px;line-height:1.385;text-decoration:none;display:flex}.open-api-client-button[data-v-e913a538]:hover{background:var(--scalar-sidebar-item-hover-background,var(--scalar-background-2))}.address-bar-history-button[data-v-6a545fa1]:hover{background:var(--scalar-background-3)}.address-bar-history-button[data-v-6a545fa1]:focus-within{background:var(--scalar-background-2)}.description[data-v-e86ebacd] .markdown{font-weight:var(--scalar-semibold);color:var(--scalar-color--1);padding:0;display:block}.description[data-v-e86ebacd] .markdown>:first-child{margin-top:0}[data-v-e050d490] .cm-editor{outline:none;width:100%;height:100%}[data-v-e050d490] .cm-line{padding:0}[data-v-e050d490] .cm-content{font-size:var(--scalar-mini);align-items:center;padding:0;display:flex}.scroll-timeline-x[data-v-e050d490]{scroll-timeline:--scroll-timeline x;scroll-timeline:--scroll-timeline horizontal;-ms-overflow-style:none}.scroll-timeline-x-hidden[data-v-e050d490]{overflow-x:auto}.scroll-timeline-x-hidden[data-v-e050d490] .cm-scroller{scrollbar-width:none;-ms-overflow-style:none;padding-right:20px;overflow:auto}.scroll-timeline-x-hidden[data-v-e050d490]::-webkit-scrollbar{width:0;height:0;display:none}.scroll-timeline-x-hidden[data-v-e050d490] .cm-scroller::-webkit-scrollbar{width:0;height:0;display:none}.scroll-timeline-x-address[data-v-e050d490]{scrollbar-width:none;line-height:27px}.scroll-timeline-x-address[data-v-e050d490]:after{content:"";cursor:text;width:24px;height:100%;position:absolute;right:0}.scroll-timeline-x-address[data-v-e050d490]:empty:before{content:"Enter URL or cURL request";color:var(--scalar-color-3);pointer-events:none}.fade-left[data-v-e050d490],.fade-right[data-v-e050d490]{content:"";pointer-events:none;z-index:1;height:100%;animation-name:fadein-e050d490;animation-duration:1ms;animation-direction:reverse;animation-timeline:--scroll-timeline;position:sticky}.fade-left[data-v-e050d490]{background:linear-gradient(-90deg,var(--scalar-address-bar-bg)0%,var(--scalar-address-bar-bg)30%,var(--scalar-address-bar-bg)100%)}@supports (color:color-mix(in lab,red,red)){.fade-left[data-v-e050d490]{background:linear-gradient(-90deg,color-mix(in srgb,var(--scalar-address-bar-bg),transparent 100%)0%,color-mix(in srgb,var(--scalar-address-bar-bg),transparent 20%)30%,var(--scalar-address-bar-bg)100%)}}.fade-left[data-v-e050d490]{min-width:6px;animation-direction:normal;left:-1px}.fade-right[data-v-e050d490]{background:linear-gradient(90deg,var(--scalar-address-bar-bg)0%,var(--scalar-address-bar-bg)30%,var(--scalar-address-bar-bg)100%)}@supports (color:color-mix(in lab,red,red)){.fade-right[data-v-e050d490]{background:linear-gradient(90deg,color-mix(in srgb,var(--scalar-address-bar-bg),transparent 100%)0%,color-mix(in srgb,var(--scalar-address-bar-bg),transparent 20%)30%,var(--scalar-address-bar-bg)100%)}}.fade-right[data-v-e050d490]{min-width:24px;right:-1px}@keyframes fadein-e050d490{0%{opacity:0}1%{opacity:1}}.address-bar-bg-states[data-v-e050d490]{--scalar-address-bar-bg:var(--scalar-background-1)}@supports (color:color-mix(in lab,red,red)){.address-bar-bg-states[data-v-e050d490]{--scalar-address-bar-bg:color-mix(in srgb,var(--scalar-background-1),var(--scalar-background-2))}}.address-bar-bg-states[data-v-e050d490]{background:var(--scalar-address-bar-bg)}.address-bar-bg-states[data-v-e050d490]:has(.cm-focused){--scalar-address-bar-bg:var(--scalar-background-1);border-color:var(--scalar-border-color);outline:1px solid var(--scalar-color-accent)}.address-bar-bg-states:has(.cm-focused) .fade-left[data-v-e050d490],.address-bar-bg-states:has(.cm-focused) .fade-right[data-v-e050d490]{--scalar-address-bar-bg:var(--scalar-background-1)}.sidebar-height[data-v-72824faa]{min-height:100%}@media (min-width:800px){.sidebar-mask[data-v-72824faa]{-webkit-mask-image:linear-gradient(0,transparent 0,transparent 0,var(--scalar-background-2)30px);mask-image:linear-gradient(0,transparent 0,transparent 0,var(--scalar-background-2)30px)}}.resizer[data-v-72824faa]{cursor:col-resize;border-right:2px solid #0000;width:5px;transition:border-right-color .3s;position:absolute;top:0;bottom:0;right:0}.resizer[data-v-72824faa]:hover,.dragging .resizer[data-v-72824faa]{border-right-color:var(--scalar-background-3)}.dragging[data-v-72824faa]{cursor:col-resize}.dragging[data-v-72824faa]:before{content:"";width:100%;height:100%;display:block;position:absolute}.ellipsis-position[data-v-709241c2]{transform:translate(calc(-100% - 4.5px))}.indent-border-line-offset[data-v-3e34b330]:before{left:var(--d6dab45e)}.indent-padding-left[data-v-3e34b330]{padding-left:calc(var(--07f1324d) + 6px)}.sidebar-folderitem[data-v-3e34b330] .ellipsis-position{right:6px;transform:none}.search-button-fade[data-v-7db729e2]{background:linear-gradient(var(--scalar-background-1)32px,var(--scalar-background-1)38px,transparent)}@supports (color:color-mix(in lab,red,red)){.search-button-fade[data-v-7db729e2]{background:linear-gradient(var(--scalar-background-1)32px,color-mix(in srgb,var(--scalar-background-1),transparent)38px,transparent)}}.empty-sidebar-item-content[data-v-7db729e2]{display:none}.empty-sidebar-item .empty-sidebar-item-content[data-v-7db729e2]{display:block}.rabbitjump[data-v-7db729e2]{opacity:0}.empty-sidebar-item:hover .rabbitjump[data-v-7db729e2]{opacity:1;animation:.5s step-end infinite rabbitAnimation-7db729e2}.empty-sidebar-item:hover .rabbitsit[data-v-7db729e2]{opacity:0;animation:.5s step-end infinite rabbitAnimation2-7db729e2}.empty-sidebar-item:hover .rabbit-ascii[data-v-7db729e2]{animation:8s linear infinite rabbitRun-7db729e2}@keyframes rabbitRun-7db729e2{0%{transform:translateZ(0)}25%{transform:translate(250px)}25.01%{transform:translate(-250px)}75%{transform:translate(250px)}75.01%{transform:translate(-250px)}to{transform:translateZ(0)}}@keyframes rabbitAnimation-7db729e2{0%,to{opacity:1}50%{opacity:0}}@keyframes rabbitAnimation2-7db729e2{0%,to{opacity:0}50%{opacity:1;transform:translateY(-8px)}}.request-text-color-text[data-v-8a88f90a]{color:var(--scalar-color-1);background:linear-gradient(var(--scalar-background-1),var(--scalar-background-3));box-shadow:0 0 0 1px var(--scalar-border-color)}@media screen and (max-width:800px){.sidebar-active-hide-layout[data-v-8a88f90a]{display:none}.sidebar-active-width[data-v-8a88f90a]{width:100%}}.gitbook-show[data-v-c8df97c6]{display:none}.app-exit-button[data-v-c8df97c6]{color:#fff;background:#0000001a}.app-exit-button[data-v-c8df97c6]:hover{background:#ffffff1a}.request-text-color-text[data-v-cbe958dd]{color:var(--scalar-color-1);background:linear-gradient(var(--scalar-background-1),var(--scalar-background-3));box-shadow:0 0 0 1px var(--scalar-border-color)}@media screen and (max-width:800px){.sidebar-active-hide-layout[data-v-cbe958dd]{display:none}.sidebar-active-width[data-v-cbe958dd]{width:100%}}.group-hover-input[data-v-fced736a]{border-width:var(--scalar-border-width);border-color:#0000}.group:hover .group-hover-input[data-v-fced736a]{background:var(--scalar-background-1)}@supports (color:color-mix(in lab,red,red)){.group:hover .group-hover-input[data-v-fced736a]{background:color-mix(in srgb,var(--scalar-background-1),var(--scalar-background-2))}}.group:hover .group-hover-input[data-v-fced736a]{border-color:var(--scalar-border-color)}.group-hover-input[data-v-fced736a]:focus{border-color:var(--scalar-border-color)!important;background:0 0!important}[data-v-faabb883] .markdown h2{font-size:var(--scalar-font-size-2)}[data-v-1d968b50] .cm-content{min-height:fit-content}[data-v-1d968b50] .cm-scroller{max-width:100%;overflow:auto hidden}[data-v-efc6e074] .cm-editor{padding:0}[data-v-efc6e074] .cm-content{font-family:var(--scalar-font);font-size:var(--scalar-mini);background-color:#0000;align-items:center;width:100%;padding:6px 8px;display:flex}[data-v-efc6e074] .cm-content:has(.cm-pill){padding:6px 8px}[data-v-efc6e074] .cm-content .cm-pill:not(:last-of-type){margin-right:.5px}[data-v-efc6e074] .cm-content .cm-pill:not(:first-of-type){margin-left:.5px}[data-v-efc6e074] .cm-line{text-overflow:ellipsis;padding:0;overflow:hidden}.scalar-collection-auth[data-v-cc87292e]{border:var(--scalar-border-width)solid var(--scalar-border-color);border-radius:var(--scalar-radius-lg);overflow:hidden}.scalar-button-danger[data-v-5170f3be]{background:var(--scalar-color-red)}@supports (color:color-mix(in lab,red,red)){.scalar-button-danger[data-v-5170f3be]{background:color-mix(in srgb,var(--scalar-color-red),transparent 95%)}}.scalar-button-danger[data-v-5170f3be]{color:var(--scalar-color-red)}.scalar-button-danger[data-v-5170f3be]:hover,.scalar-button-danger[data-v-5170f3be]:focus{background:var(--scalar-color-red)}@supports (color:color-mix(in lab,red,red)){.scalar-button-danger[data-v-5170f3be]:hover,.scalar-button-danger[data-v-5170f3be]:focus{background:color-mix(in srgb,var(--scalar-color-red),transparent 90%)}}.dragover-asChild[data-v-a89d6a6e],.dragover-above[data-v-a89d6a6e],.dragover-below[data-v-a89d6a6e]{position:relative}.dragover-above[data-v-a89d6a6e]:after,.dragover-below[data-v-a89d6a6e]:after{content:"";background:var(--scalar-color-blue);width:100%;height:3px;display:block;position:absolute;top:-1.5px}@supports (color:color-mix(in lab,red,red)){.dragover-above[data-v-a89d6a6e]:after,.dragover-below[data-v-a89d6a6e]:after{background:color-mix(in srgb,var(--scalar-color-blue),transparent 85%)}}.dragover-above[data-v-a89d6a6e]:after,.dragover-below[data-v-a89d6a6e]:after{pointer-events:none;border-radius:var(--scalar-radius)}.dragover-below[data-v-a89d6a6e]:after{top:initial;bottom:-1.5px}.dragover-asChild[data-v-a89d6a6e]:after{content:"";background:var(--scalar-color-blue);width:100%;height:100%;display:block;position:absolute;top:0;left:0}@supports (color:color-mix(in lab,red,red)){.dragover-asChild[data-v-a89d6a6e]:after{background:color-mix(in srgb,var(--scalar-color-blue),transparent 85%)}}.dragover-asChild[data-v-a89d6a6e]:after{pointer-events:none;border-radius:var(--scalar-radius)}.empty-variable-name[data-v-0b6c70e4]:empty:before{content:"Untitled";color:var(--scalar-color-3)}.form-group[data-v-694018d6]{margin-bottom:1rem}.modal-actions[data-v-694018d6]{justify-content:flex-end;gap:1rem;display:flex}:root{--scalar-loaded-api-reference:true}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@layer scalar-config{.scalar-api-reference[data-v-790b49f0]{--refs-sidebar-width: var(--scalar-sidebar-width, 0px);--refs-header-height: calc( var(--scalar-y-offset) + var(--scalar-header-height, 0px) );--refs-content-max-width: var(--scalar-content-max-width, 1540px)}.scalar-api-reference.references-classic[data-v-790b49f0]{--refs-content-max-width: var(--scalar-content-max-width, 1420px);min-height:100dvh;--refs-sidebar-width: 0}}.references-layout[data-v-790b49f0]{min-height:100dvh;min-width:100%;max-width:100%;flex:1;--full-height: 100dvh;display:grid;grid-template-rows:var(--scalar-header-height, 0px) repeat(2,auto);grid-template-columns:var(--refs-sidebar-width) 1fr;grid-template-areas:"header header" "navigation rendered" "footer footer";background:var(--scalar-background-1)}.references-header[data-v-790b49f0]{grid-area:header;position:sticky;top:var(--scalar-custom-header-height, 0px);z-index:1000;height:var(--scalar-header-height, 0px)}.references-editor[data-v-790b49f0]{grid-area:editor;display:flex;min-width:0;background:var(--scalar-background-1)}.references-navigation[data-v-790b49f0]{grid-area:navigation}.references-rendered[data-v-790b49f0]{position:relative;grid-area:rendered;min-width:0;background:var(--scalar-background-1)}.scalar-api-reference.references-classic[data-v-790b49f0],.references-classic .references-rendered[data-v-790b49f0]{--full-height: fit-content !important;height:initial!important;max-height:initial!important}.references-navigation-list[data-v-790b49f0]{position:sticky;top:var(--refs-header-height);height:calc(100dvh - var(--refs-header-height));background:var(--scalar-sidebar-background-1, var(--scalar-background-1));overflow-y:auto;display:flex;flex-direction:column}.references-editor-textarea[data-v-790b49f0]{position:sticky;top:var(--refs-header-height);height:calc(var(--full-height) - var(--refs-header-height));display:flex;min-width:0;flex:1}.references-editable[data-v-790b49f0]{grid-template-columns:var(--refs-sidebar-width) 1fr 1fr;grid-template-areas:"header header header" "navigation editor rendered" "footer footer footer"}@layer scalar-config{.references-sidebar[data-v-790b49f0]{--refs-sidebar-width: var(--scalar-sidebar-width, 280px)}}.references-footer[data-v-790b49f0]{grid-area:footer}@media (max-width: 1150px){.references-layout[data-v-790b49f0]{grid-template-columns:var(--refs-sidebar-width) 1fr 0px}}@media (max-width: 1000px){.references-layout[data-v-790b49f0]{grid-template-columns:auto;grid-template-rows:var(--scalar-header-height, 0px) 0px auto auto;grid-template-areas:"header" "navigation" "rendered" "footer"}.references-editable[data-v-790b49f0]{grid-template-areas:"header" "navigation" "editor"}.references-navigation[data-v-790b49f0],.references-rendered[data-v-790b49f0]{max-height:unset}.references-rendered[data-v-790b49f0]{position:static}.references-navigation[data-v-790b49f0]{display:none;z-index:10}.references-sidebar-mobile-open .references-navigation[data-v-790b49f0]{display:block;top:var(--refs-header-height);height:calc(100dvh - var(--refs-header-height));width:100%;position:sticky}.references-navigation-list[data-v-790b49f0]{position:absolute;top:-1px;height:calc(var(--full-height) - var(--refs-header-height) + 1px);width:100%;border-top:1px solid var(--scalar-border-color);display:flex;flex-direction:column}}@media (max-width: 1000px){.scalar-api-references-standalone-mobile[data-v-790b49f0]{--scalar-header-height: 50px}}.scalar-api-references-standalone-search[data-v-790b49f0]{display:flex;flex-direction:column;padding:12px 12px 6px}.darklight-reference[data-v-790b49f0]{width:100%;margin-top:auto}@layer scalar-base{body{margin:0;background-color:var(--scalar-background-1)}}
`));
      document.head.appendChild(elementStyle);
      console.warn("Auto-loading the references css through js has been deprecated. Please import the css directly. Visit https://github.com/scalar/scalar for more info.");
    }, 0);
  } catch (error) {
    console.error(error, "unable to concat style inside the bundled file");
  }
})();
export {
  g9 as ApiReference,
  a21 as ApiReferenceLayout,
  i7 as Card,
  d9 as CardContent,
  m28 as CardFooter,
  e6 as CardHeader,
  m27 as CardTab,
  e9 as CardTabHeader,
  m5 as GettingStarted,
  m12 as SearchButton,
  p10 as SearchModal,
  p9 as Sidebar,
  g10 as createApiReference,
  g as createEmptySpecification,
  I as parse,
  R2 as useHttpClientStore,
  T2 as useNavState,
  l3 as useSidebar
};
//# sourceMappingURL=@scalar_api-reference.js.map
