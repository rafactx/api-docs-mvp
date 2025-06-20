import {
  cookieSchema
} from "./chunk-WJY4MU6S.js";
import {
  p,
  s
} from "./chunk-ZNV4Z3VE.js";
import {
  P,
  REQUEST_METHODS,
  cva,
  cx,
  getHttpMethodInfo,
  isDefined,
  shouldUseProxy
} from "./chunk-OYO2YRBV.js";
import {
  computed,
  createBaseVNode,
  createBlock,
  createElementBlock,
  defineComponent,
  inject,
  normalizeClass,
  openBlock,
  toDisplayString,
  unref,
  withCtx
} from "./chunk-XQNPNIQJ.js";
import {
  __commonJS
} from "./chunk-DC5AMYBS.js";

// node_modules/.pnpm/whatwg-mimetype@4.0.0/node_modules/whatwg-mimetype/lib/utils.js
var require_utils = __commonJS({
  "node_modules/.pnpm/whatwg-mimetype@4.0.0/node_modules/whatwg-mimetype/lib/utils.js"(exports) {
    "use strict";
    exports.removeLeadingAndTrailingHTTPWhitespace = (string) => {
      return string.replace(/^[ \t\n\r]+/u, "").replace(/[ \t\n\r]+$/u, "");
    };
    exports.removeTrailingHTTPWhitespace = (string) => {
      return string.replace(/[ \t\n\r]+$/u, "");
    };
    exports.isHTTPWhitespaceChar = (char) => {
      return char === " " || char === "	" || char === "\n" || char === "\r";
    };
    exports.solelyContainsHTTPTokenCodePoints = (string) => {
      return /^[-!#$%&'*+.^_`|~A-Za-z0-9]*$/u.test(string);
    };
    exports.soleyContainsHTTPQuotedStringTokenCodePoints = (string) => {
      return /^[\t\u0020-\u007E\u0080-\u00FF]*$/u.test(string);
    };
    exports.asciiLowercase = (string) => {
      return string.replace(/[A-Z]/ug, (l2) => l2.toLowerCase());
    };
    exports.collectAnHTTPQuotedString = (input, position) => {
      let value = "";
      position++;
      while (true) {
        while (position < input.length && input[position] !== '"' && input[position] !== "\\") {
          value += input[position];
          ++position;
        }
        if (position >= input.length) {
          break;
        }
        const quoteOrBackslash = input[position];
        ++position;
        if (quoteOrBackslash === "\\") {
          if (position >= input.length) {
            value += "\\";
            break;
          }
          value += input[position];
          ++position;
        } else {
          break;
        }
      }
      return [value, position];
    };
  }
});

// node_modules/.pnpm/whatwg-mimetype@4.0.0/node_modules/whatwg-mimetype/lib/mime-type-parameters.js
var require_mime_type_parameters = __commonJS({
  "node_modules/.pnpm/whatwg-mimetype@4.0.0/node_modules/whatwg-mimetype/lib/mime-type-parameters.js"(exports, module) {
    "use strict";
    var {
      asciiLowercase,
      solelyContainsHTTPTokenCodePoints,
      soleyContainsHTTPQuotedStringTokenCodePoints
    } = require_utils();
    module.exports = class MIMETypeParameters {
      constructor(map) {
        this._map = map;
      }
      get size() {
        return this._map.size;
      }
      get(name) {
        name = asciiLowercase(String(name));
        return this._map.get(name);
      }
      has(name) {
        name = asciiLowercase(String(name));
        return this._map.has(name);
      }
      set(name, value) {
        name = asciiLowercase(String(name));
        value = String(value);
        if (!solelyContainsHTTPTokenCodePoints(name)) {
          throw new Error(`Invalid MIME type parameter name "${name}": only HTTP token code points are valid.`);
        }
        if (!soleyContainsHTTPQuotedStringTokenCodePoints(value)) {
          throw new Error(`Invalid MIME type parameter value "${value}": only HTTP quoted-string token code points are valid.`);
        }
        return this._map.set(name, value);
      }
      clear() {
        this._map.clear();
      }
      delete(name) {
        name = asciiLowercase(String(name));
        return this._map.delete(name);
      }
      forEach(callbackFn, thisArg) {
        this._map.forEach(callbackFn, thisArg);
      }
      keys() {
        return this._map.keys();
      }
      values() {
        return this._map.values();
      }
      entries() {
        return this._map.entries();
      }
      [Symbol.iterator]() {
        return this._map[Symbol.iterator]();
      }
    };
  }
});

// node_modules/.pnpm/whatwg-mimetype@4.0.0/node_modules/whatwg-mimetype/lib/parser.js
var require_parser = __commonJS({
  "node_modules/.pnpm/whatwg-mimetype@4.0.0/node_modules/whatwg-mimetype/lib/parser.js"(exports, module) {
    "use strict";
    var {
      removeLeadingAndTrailingHTTPWhitespace,
      removeTrailingHTTPWhitespace,
      isHTTPWhitespaceChar,
      solelyContainsHTTPTokenCodePoints,
      soleyContainsHTTPQuotedStringTokenCodePoints,
      asciiLowercase,
      collectAnHTTPQuotedString
    } = require_utils();
    module.exports = (input) => {
      input = removeLeadingAndTrailingHTTPWhitespace(input);
      let position = 0;
      let type = "";
      while (position < input.length && input[position] !== "/") {
        type += input[position];
        ++position;
      }
      if (type.length === 0 || !solelyContainsHTTPTokenCodePoints(type)) {
        return null;
      }
      if (position >= input.length) {
        return null;
      }
      ++position;
      let subtype = "";
      while (position < input.length && input[position] !== ";") {
        subtype += input[position];
        ++position;
      }
      subtype = removeTrailingHTTPWhitespace(subtype);
      if (subtype.length === 0 || !solelyContainsHTTPTokenCodePoints(subtype)) {
        return null;
      }
      const mimeType = {
        type: asciiLowercase(type),
        subtype: asciiLowercase(subtype),
        parameters: /* @__PURE__ */ new Map()
      };
      while (position < input.length) {
        ++position;
        while (isHTTPWhitespaceChar(input[position])) {
          ++position;
        }
        let parameterName = "";
        while (position < input.length && input[position] !== ";" && input[position] !== "=") {
          parameterName += input[position];
          ++position;
        }
        parameterName = asciiLowercase(parameterName);
        if (position < input.length) {
          if (input[position] === ";") {
            continue;
          }
          ++position;
        }
        let parameterValue = null;
        if (input[position] === '"') {
          [parameterValue, position] = collectAnHTTPQuotedString(input, position);
          while (position < input.length && input[position] !== ";") {
            ++position;
          }
        } else {
          parameterValue = "";
          while (position < input.length && input[position] !== ";") {
            parameterValue += input[position];
            ++position;
          }
          parameterValue = removeTrailingHTTPWhitespace(parameterValue);
          if (parameterValue === "") {
            continue;
          }
        }
        if (parameterName.length > 0 && solelyContainsHTTPTokenCodePoints(parameterName) && soleyContainsHTTPQuotedStringTokenCodePoints(parameterValue) && !mimeType.parameters.has(parameterName)) {
          mimeType.parameters.set(parameterName, parameterValue);
        }
      }
      return mimeType;
    };
  }
});

// node_modules/.pnpm/whatwg-mimetype@4.0.0/node_modules/whatwg-mimetype/lib/serializer.js
var require_serializer = __commonJS({
  "node_modules/.pnpm/whatwg-mimetype@4.0.0/node_modules/whatwg-mimetype/lib/serializer.js"(exports, module) {
    "use strict";
    var { solelyContainsHTTPTokenCodePoints } = require_utils();
    module.exports = (mimeType) => {
      let serialization = `${mimeType.type}/${mimeType.subtype}`;
      if (mimeType.parameters.size === 0) {
        return serialization;
      }
      for (let [name, value] of mimeType.parameters) {
        serialization += ";";
        serialization += name;
        serialization += "=";
        if (!solelyContainsHTTPTokenCodePoints(value) || value.length === 0) {
          value = value.replace(/(["\\])/ug, "\\$1");
          value = `"${value}"`;
        }
        serialization += value;
      }
      return serialization;
    };
  }
});

// node_modules/.pnpm/whatwg-mimetype@4.0.0/node_modules/whatwg-mimetype/lib/mime-type.js
var require_mime_type = __commonJS({
  "node_modules/.pnpm/whatwg-mimetype@4.0.0/node_modules/whatwg-mimetype/lib/mime-type.js"(exports, module) {
    "use strict";
    var MIMETypeParameters = require_mime_type_parameters();
    var parse = require_parser();
    var serialize = require_serializer();
    var {
      asciiLowercase,
      solelyContainsHTTPTokenCodePoints
    } = require_utils();
    module.exports = class MIMEType {
      constructor(string) {
        string = String(string);
        const result = parse(string);
        if (result === null) {
          throw new Error(`Could not parse MIME type string "${string}"`);
        }
        this._type = result.type;
        this._subtype = result.subtype;
        this._parameters = new MIMETypeParameters(result.parameters);
      }
      static parse(string) {
        try {
          return new this(string);
        } catch (e) {
          return null;
        }
      }
      get essence() {
        return `${this.type}/${this.subtype}`;
      }
      get type() {
        return this._type;
      }
      set type(value) {
        value = asciiLowercase(String(value));
        if (value.length === 0) {
          throw new Error("Invalid type: must be a non-empty string");
        }
        if (!solelyContainsHTTPTokenCodePoints(value)) {
          throw new Error(`Invalid type ${value}: must contain only HTTP token code points`);
        }
        this._type = value;
      }
      get subtype() {
        return this._subtype;
      }
      set subtype(value) {
        value = asciiLowercase(String(value));
        if (value.length === 0) {
          throw new Error("Invalid subtype: must be a non-empty string");
        }
        if (!solelyContainsHTTPTokenCodePoints(value)) {
          throw new Error(`Invalid subtype ${value}: must contain only HTTP token code points`);
        }
        this._subtype = value;
      }
      get parameters() {
        return this._parameters;
      }
      toString() {
        return serialize(this);
      }
      isJavaScript({ prohibitParameters = false } = {}) {
        switch (this._type) {
          case "text": {
            switch (this._subtype) {
              case "ecmascript":
              case "javascript":
              case "javascript1.0":
              case "javascript1.1":
              case "javascript1.2":
              case "javascript1.3":
              case "javascript1.4":
              case "javascript1.5":
              case "jscript":
              case "livescript":
              case "x-ecmascript":
              case "x-javascript": {
                return !prohibitParameters || this._parameters.size === 0;
              }
              default: {
                return false;
              }
            }
          }
          case "application": {
            switch (this._subtype) {
              case "ecmascript":
              case "javascript":
              case "x-ecmascript":
              case "x-javascript": {
                return !prohibitParameters || this._parameters.size === 0;
              }
              default: {
                return false;
              }
            }
          }
          default: {
            return false;
          }
        }
      }
      isXML() {
        return this._subtype === "xml" && (this._type === "text" || this._type === "application") || this._subtype.endsWith("+xml");
      }
      isHTML() {
        return this._subtype === "html" && this._type === "text";
      }
    };
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/plugins/plugin-manager.js
var s2 = ({ plugins: o = [] }) => {
  const a = /* @__PURE__ */ new Map();
  return o.forEach((r) => {
    const e = r();
    a.set(e.name, e);
  }), {
    /**
     * Get all components for a specific view
     */
    getViewComponents: (r) => Array.from(a.values()).flatMap((e) => e.views[r] || []),
    /**
     * Execute a hook for a specific event
     */
    executeHook: (r, ...e) => {
      const t2 = Array.from(a.values()).flatMap((n) => n.hooks[r] || []);
      return Promise.all(
        t2.map((n) => n(...e))
      );
    }
  };
};

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/plugins/hooks/usePluginManager.js
var t = Symbol();
var i = () => {
  const r = inject(t);
  return r || s2({});
};

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/libs/send-request/set-request-cookies.js
var l = "/";
function C({
  example: a,
  env: t2,
  globalCookies: e,
  serverUrl: o,
  proxyUrl: r
}) {
  const n = [], h = shouldUseProxy(r, o), i2 = W(
    h ? r : o ?? "http://localhost"
  );
  return e.forEach((s3) => {
    const { name: c, value: u, domain: m2, ...d } = s3;
    !k(o, m2) || !c || n.push(
      cookieSchema.parse({
        name: c,
        value: u,
        domain: m2,
        path: d.path
      })
    );
  }), a.parameters.cookies.forEach((s3) => {
    !s3.enabled || !s3.key || n.push(
      cookieSchema.parse({
        name: s3.key,
        value: p(s3.value, t2),
        domain: i2,
        path: l
      })
    );
  }), {
    cookieParams: n
  };
}
var W = (a) => {
  const t2 = new URL(a.startsWith("http") ? a : `http://${a}`).hostname;
  return t2.match(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/) || t2.match(/^[a-fA-F0-9:]+$/) || t2.startsWith(".") ? t2 : `.${t2}`;
};
var k = (a, t2) => {
  if (!a || !t2)
    return true;
  try {
    const e = a.startsWith("http") ? a : `http://${a}`, o = new URL(e).hostname, r = !t2, n = t2 === o, h = t2.startsWith(".") && t2 === `.${o}`, i2 = t2.startsWith(".") && (o == null ? void 0 : o.endsWith(t2));
    return r || n || i2 || h;
  } catch {
    return false;
  }
};
var D = (a, t2) => {
  const e = a.map((o) => `${o.name}=${o.value}`).join("; ");
  return t2 ? `${t2}; ${e}`.trim() : e.trim();
};

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/libs/send-request/build-request-security.js
var $ = (l2 = [], i2 = {}, s3 = "") => {
  const t2 = {}, e = [], f = new URLSearchParams();
  return l2.forEach((a) => {
    var p2;
    if (a.type === "apiKey") {
      const o = p(a.value, i2) || s3;
      a.in === "header" && (t2[a.name] = o), a.in === "query" && f.append(a.name, o), a.in === "cookie" && e.push(
        cookieSchema.parse({
          uid: a.uid,
          name: a.name,
          value: o,
          path: "/"
        })
      );
    }
    if (a.type === "http")
      if (a.scheme === "basic") {
        const o = p(a.username, i2), u = p(a.password, i2), r = `${o}:${u}`;
        t2.Authorization = `Basic ${r === ":" ? "username:password" : btoa(r)}`;
      } else {
        const o = p(a.token, i2);
        t2.Authorization = `Bearer ${o || s3}`;
      }
    if (a.type === "oauth2") {
      const u = (p2 = Object.values(a.flows).filter(isDefined).find((r) => r.token)) == null ? void 0 : p2.token;
      t2.Authorization = `Bearer ${u || s3}`;
    }
  }), { headers: t2, cookies: e, urlParams: f };
};

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/HttpMethod/HttpMethod.vue2.js
var H = defineComponent({
  __name: "HttpMethod",
  props: {
    isSquare: { type: Boolean, default: false },
    method: {},
    isEditable: { type: Boolean, default: false }
  },
  emits: ["change"],
  setup(b, { emit: h }) {
    const r = b, v = h, a = computed(() => getHttpMethodInfo(r.method)), n = Object.entries(REQUEST_METHODS).map(([e]) => ({
      id: e,
      label: e.toUpperCase(),
      color: getHttpMethodInfo(e).colorClass
    })), i2 = computed({
      get: () => n.find(({ id: e }) => e === r.method),
      set: (e) => (e == null ? void 0 : e.id) && v("change", e.id)
    }), d = cva({
      base: "text-center font-code text-3xs justify-center items-center flex",
      variants: {
        isSquare: {
          true: "px-2.5 whitespace-nowrap font-bold border-r h-fit m-auto",
          false: "rounded-full"
        },
        isEditable: {
          true: "http-bg-gradient rounded-md border border-r",
          false: "cursor-auto"
        }
      }
    }), E = computed(() => a.value.short);
    return (e, u) => e.isEditable ? (openBlock(), createBlock(unref(P), {
      key: 0,
      modelValue: i2.value,
      "onUpdate:modelValue": u[0] || (u[0] = (S) => i2.value = S),
      class: "font-code scalar-client mt-1 text-sm",
      options: unref(n)
    }, {
      default: withCtx(() => [
        createBaseVNode("div", {
          class: normalizeClass(["h-full", { "pointer-events-none": !e.isEditable }])
        }, [
          createBaseVNode("button", {
            class: normalizeClass(["relative h-full", unref(cx)(unref(d)({ isSquare: e.isSquare, isEditable: e.isEditable }), a.value.colorClass)]),
            type: "button"
          }, [
            createBaseVNode("span", null, toDisplayString(E.value), 1)
          ], 2)
        ], 2)
      ]),
      _: 1
    }, 8, ["modelValue", "options"])) : (openBlock(), createElementBlock("div", {
      key: 1,
      class: normalizeClass(["relative gap-1 whitespace-nowrap", unref(cx)(unref(d)({ isSquare: e.isSquare, isEditable: e.isEditable }), a.value.colorClass)]),
      type: "button"
    }, toDisplayString(a.value.short), 3));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/HttpMethod/HttpMethod.vue.js
var m = s(H, [["__scopeId", "data-v-076b14a1"]]);

export {
  m,
  require_mime_type,
  s2 as s,
  t,
  i,
  C,
  k,
  D,
  $
};
//# sourceMappingURL=chunk-ZIUKF2I6.js.map
