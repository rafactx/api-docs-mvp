import {
  r
} from "./chunk-J3LGAAIN.js";
import {
  x as x2
} from "./chunk-MAAJFZYL.js";
import {
  a,
  a2,
  a3,
  b,
  d
} from "./chunk-OX3PR3SF.js";
import "./chunk-JYVXE3FK.js";
import {
  x as x3
} from "./chunk-W6S5UKFC.js";
import {
  E as E2
} from "./chunk-M2W7IUYR.js";
import "./chunk-VZ7KBDZM.js";
import {
  _,
  d as d2,
  f as f2
} from "./chunk-NSHQAVSH.js";
import {
  useCodeMirror
} from "./chunk-SCACG3GA.js";
import {
  t
} from "./chunk-5US4T6AS.js";
import {
  i
} from "./chunk-L3KGBGBF.js";
import {
  A
} from "./chunk-CUZGNH74.js";
import {
  i as i2
} from "./chunk-BQ6EJ37V.js";
import "./chunk-OWXZB7P2.js";
import {
  m as m2
} from "./chunk-GOSQUSWR.js";
import {
  s as s2
} from "./chunk-RDVDQCBW.js";
import {
  u
} from "./chunk-S4LPBKVU.js";
import {
  b as b2
} from "./chunk-XAH4TE55.js";
import {
  useRoute,
  useRouter
} from "./chunk-DWEZQID4.js";
import {
  je,
  s,
  z
} from "./chunk-6M3JNKJN.js";
import {
  $,
  B4 as B,
  E,
  f,
  formatJsonOrYamlString,
  httpStatusCodes,
  m2 as m,
  prettyBytes,
  prettyPrintJson,
  useClipboard,
  x
} from "./chunk-OYO2YRBV.js";
import "./chunk-3FIKATP3.js";
import {
  Fragment,
  Transition,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createSlots,
  createTextVNode,
  createVNode,
  defineComponent,
  isRef,
  mergeProps,
  nextTick,
  normalizeClass,
  normalizeStyle,
  onBeforeUnmount,
  onMounted,
  openBlock,
  ref,
  renderList,
  renderSlot,
  resolveDynamicComponent,
  toDisplayString,
  toRef,
  unref,
  useId,
  vShow,
  watch,
  withCtx,
  withDirectives,
  withModifiers
} from "./chunk-XQNPNIQJ.js";
import {
  __commonJS,
  __toESM
} from "./chunk-DC5AMYBS.js";

// node_modules/.pnpm/shell-quote@1.8.3/node_modules/shell-quote/quote.js
var require_quote = __commonJS({
  "node_modules/.pnpm/shell-quote@1.8.3/node_modules/shell-quote/quote.js"(exports, module) {
    "use strict";
    module.exports = function quote(xs) {
      return xs.map(function(s9) {
        if (s9 === "") {
          return "''";
        }
        if (s9 && typeof s9 === "object") {
          return s9.op.replace(/(.)/g, "\\$1");
        }
        if (/["\s\\]/.test(s9) && !/'/.test(s9)) {
          return "'" + s9.replace(/(['])/g, "\\$1") + "'";
        }
        if (/["'\s]/.test(s9)) {
          return '"' + s9.replace(/(["\\$`!])/g, "\\$1") + '"';
        }
        return String(s9).replace(/([A-Za-z]:)?([#!"$&'()*,:;<=>?@[\\\]^`{|}])/g, "$1\\$2");
      }).join(" ");
    };
  }
});

// node_modules/.pnpm/shell-quote@1.8.3/node_modules/shell-quote/parse.js
var require_parse = __commonJS({
  "node_modules/.pnpm/shell-quote@1.8.3/node_modules/shell-quote/parse.js"(exports, module) {
    "use strict";
    var CONTROL = "(?:" + [
      "\\|\\|",
      "\\&\\&",
      ";;",
      "\\|\\&",
      "\\<\\(",
      "\\<\\<\\<",
      ">>",
      ">\\&",
      "<\\&",
      "[&;()|<>]"
    ].join("|") + ")";
    var controlRE = new RegExp("^" + CONTROL + "$");
    var META = "|&;()<> \\t";
    var SINGLE_QUOTE = '"((\\\\"|[^"])*?)"';
    var DOUBLE_QUOTE = "'((\\\\'|[^'])*?)'";
    var hash = /^#$/;
    var SQ = "'";
    var DQ = '"';
    var DS = "$";
    var TOKEN = "";
    var mult = 4294967296;
    for (i5 = 0; i5 < 4; i5++) {
      TOKEN += (mult * Math.random()).toString(16);
    }
    var i5;
    var startsWithToken = new RegExp("^" + TOKEN);
    function matchAll(s9, r3) {
      var origIndex = r3.lastIndex;
      var matches = [];
      var matchObj;
      while (matchObj = r3.exec(s9)) {
        matches.push(matchObj);
        if (r3.lastIndex === matchObj.index) {
          r3.lastIndex += 1;
        }
      }
      r3.lastIndex = origIndex;
      return matches;
    }
    function getVar(env, pre, key) {
      var r3 = typeof env === "function" ? env(key) : env[key];
      if (typeof r3 === "undefined" && key != "") {
        r3 = "";
      } else if (typeof r3 === "undefined") {
        r3 = "$";
      }
      if (typeof r3 === "object") {
        return pre + TOKEN + JSON.stringify(r3) + TOKEN;
      }
      return pre + r3;
    }
    function parseInternal(string, env, opts) {
      if (!opts) {
        opts = {};
      }
      var BS = opts.escape || "\\";
      var BAREWORD = "(\\" + BS + `['"` + META + `]|[^\\s'"` + META + "])+";
      var chunker = new RegExp([
        "(" + CONTROL + ")",
        // control chars
        "(" + BAREWORD + "|" + SINGLE_QUOTE + "|" + DOUBLE_QUOTE + ")+"
      ].join("|"), "g");
      var matches = matchAll(string, chunker);
      if (matches.length === 0) {
        return [];
      }
      if (!env) {
        env = {};
      }
      var commented = false;
      return matches.map(function(match) {
        var s9 = match[0];
        if (!s9 || commented) {
          return void 0;
        }
        if (controlRE.test(s9)) {
          return { op: s9 };
        }
        var quote = false;
        var esc = false;
        var out = "";
        var isGlob = false;
        var i6;
        function parseEnvVar() {
          i6 += 1;
          var varend;
          var varname;
          var char = s9.charAt(i6);
          if (char === "{") {
            i6 += 1;
            if (s9.charAt(i6) === "}") {
              throw new Error("Bad substitution: " + s9.slice(i6 - 2, i6 + 1));
            }
            varend = s9.indexOf("}", i6);
            if (varend < 0) {
              throw new Error("Bad substitution: " + s9.slice(i6));
            }
            varname = s9.slice(i6, varend);
            i6 = varend;
          } else if (/[*@#?$!_-]/.test(char)) {
            varname = char;
            i6 += 1;
          } else {
            var slicedFromI = s9.slice(i6);
            varend = slicedFromI.match(/[^\w\d_]/);
            if (!varend) {
              varname = slicedFromI;
              i6 = s9.length;
            } else {
              varname = slicedFromI.slice(0, varend.index);
              i6 += varend.index - 1;
            }
          }
          return getVar(env, "", varname);
        }
        for (i6 = 0; i6 < s9.length; i6++) {
          var c3 = s9.charAt(i6);
          isGlob = isGlob || !quote && (c3 === "*" || c3 === "?");
          if (esc) {
            out += c3;
            esc = false;
          } else if (quote) {
            if (c3 === quote) {
              quote = false;
            } else if (quote == SQ) {
              out += c3;
            } else {
              if (c3 === BS) {
                i6 += 1;
                c3 = s9.charAt(i6);
                if (c3 === DQ || c3 === BS || c3 === DS) {
                  out += c3;
                } else {
                  out += BS + c3;
                }
              } else if (c3 === DS) {
                out += parseEnvVar();
              } else {
                out += c3;
              }
            }
          } else if (c3 === DQ || c3 === SQ) {
            quote = c3;
          } else if (controlRE.test(c3)) {
            return { op: s9 };
          } else if (hash.test(c3)) {
            commented = true;
            var commentObj = { comment: string.slice(match.index + i6 + 1) };
            if (out.length) {
              return [out, commentObj];
            }
            return [commentObj];
          } else if (c3 === BS) {
            esc = true;
          } else if (c3 === DS) {
            out += parseEnvVar();
          } else {
            out += c3;
          }
        }
        if (isGlob) {
          return { op: "glob", pattern: out };
        }
        return out;
      }).reduce(function(prev, arg) {
        return typeof arg === "undefined" ? prev : prev.concat(arg);
      }, []);
    }
    module.exports = function parse(s9, env, opts) {
      var mapped = parseInternal(s9, env, opts);
      if (typeof env !== "function") {
        return mapped;
      }
      return mapped.reduce(function(acc, s10) {
        if (typeof s10 === "object") {
          return acc.concat(s10);
        }
        var xs = s10.split(RegExp("(" + TOKEN + ".*?" + TOKEN + ")", "g"));
        if (xs.length === 1) {
          return acc.concat(xs[0]);
        }
        return acc.concat(xs.filter(Boolean).map(function(x8) {
          if (startsWithToken.test(x8)) {
            return JSON.parse(x8.split(TOKEN)[1]);
          }
          return x8;
        }));
      }, []);
    };
  }
});

// node_modules/.pnpm/shell-quote@1.8.3/node_modules/shell-quote/index.js
var require_shell_quote = __commonJS({
  "node_modules/.pnpm/shell-quote@1.8.3/node_modules/shell-quote/index.js"(exports) {
    "use strict";
    exports.quote = require_quote();
    exports.parse = require_parse();
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/libs/parse-curl.js
var import_shell_quote = __toESM(require_shell_quote(), 1);
function b3(i5) {
  const e2 = (0, import_shell_quote.parse)(i5).map((o) => typeof o == "object" && "op" in o && o.op === "glob" ? o.pattern.trim() : typeof o == "string" ? o.trim() : o).filter((o) => o !== ""), a5 = { url: "" }, t2 = e2[Symbol.iterator]();
  let r3 = t2.next().value;
  for (; r3; )
    r3 === "-X" || r3 === "--request" ? h(t2, a5) : r3 === "--url" ? s3(t2, a5) : r3 === "-H" || r3 === "--header" ? p(t2, a5) : r3 === "--data" || r3 === "-d" || r3 === "--data-raw" || r3 === "--data-urlencode" || r3 === "--data-binary" || r3 === "--data-ascii" ? u2(t2, a5, i5) : typeof r3 == "string" && !a5.url && (r3.startsWith("http") || r3.startsWith("www.")) ? s3([r3][Symbol.iterator](), a5) : r3 === "-P" ? d3(t2, a5) : typeof r3 == "string" && r3.toLowerCase().includes("content-type") ? f3(r3, a5) : r3 === "-u" || r3 === "--user" ? m3(t2, a5) : (r3 === "-b" || r3 === "--cookie") && l(t2, a5), r3 = t2.next().value;
  return a5;
}
function h(i5, e2) {
  e2.method = i5.next().value.toLowerCase();
}
function s3(i5, e2) {
  const a5 = new URL(i5.next().value.replace(/['"]/g, ""));
  e2.servers = [a5.origin], e2.path = a5.pathname !== "/" ? a5.pathname : "", e2.url = e2.servers[0] + e2.path;
  const t2 = n(a5.search);
  e2.queryParameters = e2.queryParameters ? [...e2.queryParameters, ...t2] : t2;
}
function p(i5, e2) {
  const a5 = i5.next().value.split(/:(.*)/);
  e2.headers = e2.headers || {}, a5[1] !== void 0 ? e2.headers[a5[0].trim()] = a5[1].trim() : e2.headers[a5[0].trim()] = "";
}
function d3(i5, e2) {
  const a5 = i5.next().value.replace(/['"]/g, "").split("=");
  e2.pathVariables = e2.pathVariables || {}, a5[1] !== void 0 ? e2.pathVariables[a5[0].trim()] = a5[1].trim() : e2.pathVariables[a5[0].trim()] = "";
}
function n(i5) {
  const e2 = [];
  return new URL(i5, "http://example.com").searchParams.forEach((t2, r3) => {
    e2.push({ key: r3, value: t2 });
  }), e2;
}
function f3(i5, e2) {
  const a5 = i5.replace(/['"]/g, "").split(/:(.+)/);
  e2.headers = e2.headers || {}, a5[0] && (a5[1] !== void 0 ? e2.headers[a5[0].trim()] = a5[1].trim() : e2.headers[a5[0].trim()] = "");
}
function m3(i5, e2) {
  const a5 = i5.next().value;
  try {
    const t2 = btoa(a5);
    e2.headers = e2.headers || {}, e2.headers.Authorization = `Basic ${t2}`;
  } catch (t2) {
    console.warn("Could not base64 encode these HTTP basic auth credentials:", a5, t2);
  }
}
function l(i5, e2) {
  const a5 = i5.next().value;
  e2.headers = e2.headers || {}, e2.headers.Cookie ? e2.headers.Cookie += `; ${a5}` : e2.headers.Cookie = a5.replace(/;$/, "");
}
function u2(i5, e2, a5) {
  const t2 = i5.next().value;
  if (typeof t2 == "string" && (t2.startsWith("@") ? e2.body = "" : e2.body = t2, !e2.url || a5.includes("-G"))) {
    const r3 = n(`?${e2.body}`);
    e2.queryParameters = e2.queryParameters ? [...e2.queryParameters, ...r3] : r3;
  }
}

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/libs/importers/curl.js
function l2(o) {
  try {
    return JSON.parse(o);
  } catch {
    const s9 = {};
    return o.split("&").forEach((a5) => {
      const [r3, e2] = a5.split("=");
      r3 && e2 && (s9[decodeURIComponent(r3)] = decodeURIComponent(e2));
    }), s9;
  }
}
function C(o) {
  const s9 = b3(o), { method: a5 = "get", url: r3, body: e2 = "", headers: p7 = {}, servers: i5, queryParameters: m4 = [] } = s9, y = new URL(r3).pathname, d6 = e2 != null && e2.includes("=") && !e2.startsWith("{") ? "application/x-www-form-urlencoded" : p7["Content-Type"] || "", c3 = e2 ? l2(e2) : {}, u3 = [
    ...Array.isArray(m4) ? m4.map(({ key: n2, value: t2 }) => ({
      name: n2,
      in: "query",
      schema: { type: typeof t2, examples: [t2] }
    })) : [],
    ...Object.entries(p7 || {}).map(([n2, t2]) => ({
      name: n2,
      in: "header",
      schema: { type: typeof t2 },
      example: t2
    }))
  ];
  return {
    method: a5,
    url: r3,
    path: y,
    headers: p7,
    servers: i5 ?? [],
    ...Object.keys(c3).length > 0 && {
      requestBody: {
        content: {
          [d6]: {
            schema: {
              type: "object",
              properties: Object.fromEntries(
                Object.entries(c3).map(([n2, t2]) => [n2, { type: typeof t2 }])
              )
            },
            example: c3
          }
        }
      }
    },
    parameters: u3
  };
}

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/RequestSubpageHeader.vue2.js
var B2 = { class: "lg:min-h-header t-app__top-container flex w-full flex-wrap items-center justify-center border-b p-2 pt-2 lg:p-1 lg:pt-1" };
var S = { class: "mb-2 flex w-1/2 flex-row items-center gap-1 lg:mb-0 lg:flex-1 lg:px-1" };
var $2 = { class: "mb-2 flex w-1/2 flex-row items-center justify-end gap-1 lg:mb-0 lg:flex-1 lg:px-2.5" };
var O = defineComponent({
  __name: "RequestSubpageHeader",
  props: {
    collection: {},
    operation: {},
    server: {},
    environment: {},
    envVariables: {},
    workspace: {}
  },
  emits: ["hideModal", "importCurl"],
  setup(x8) {
    const { hideClientButton: u3, showSidebar: d6, integration: c3 } = je(), { isSidebarOpen: f5 } = m2(), { layout: n2 } = s2(), { currentRoute: b5 } = useRouter();
    return (e2, t2) => (openBlock(), createElementBlock("div", B2, [
      createBaseVNode("div", S, [
        unref(d6) ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["size-8", { hidden: unref(n2) === "modal" && !unref(f5) }])
        }, null, 2)) : createCommentVNode("", true)
      ]),
      createVNode(d, {
        collection: e2.collection,
        envVariables: e2.envVariables,
        environment: e2.environment,
        operation: e2.operation,
        server: e2.server,
        workspace: e2.workspace,
        onImportCurl: t2[0] || (t2[0] = (a5) => e2.$emit("importCurl", a5))
      }, null, 8, ["collection", "envVariables", "environment", "operation", "server", "workspace"]),
      createBaseVNode("div", $2, [
        unref(n2) === "modal" && e2.collection.documentUrl && !unref(u3) ? (openBlock(), createBlock(unref(a), {
          key: 0,
          buttonSource: "modal",
          class: "!w-fit lg:-mr-1",
          integration: unref(c3) ?? e2.collection.integration ?? null,
          source: unref(b5).query.source === "gitbook" ? "gitbook" : "api-reference",
          url: e2.collection.documentUrl
        }, null, 8, ["integration", "source", "url"])) : createCommentVNode("", true),
        unref(n2) === "modal" ? (openBlock(), createElementBlock("button", {
          key: 1,
          class: "app-exit-button gitbook-hidden zoomed:static zoomed:p-1 fixed top-2 right-2 rounded-full p-2",
          type: "button",
          onClick: t2[1] || (t2[1] = (a5) => e2.$emit("hideModal"))
        }, [
          createVNode(unref(m), {
            icon: "Close",
            size: "lg",
            thickness: "2"
          }),
          t2[3] || (t2[3] = createBaseVNode("span", { class: "sr-only" }, "Close Client", -1))
        ])) : createCommentVNode("", true),
        unref(n2) === "modal" ? (openBlock(), createElementBlock("button", {
          key: 2,
          class: "text-c-1 hover:bg-b-2 active:text-c-1 gitbook-show -mr-1.5 rounded p-2",
          type: "button",
          onClick: t2[2] || (t2[2] = (a5) => e2.$emit("hideModal"))
        }, [
          createVNode(unref(m), {
            icon: "Close",
            size: "md",
            thickness: "1.75"
          }),
          t2[4] || (t2[4] = createBaseVNode("span", { class: "sr-only" }, "Close Client", -1))
        ])) : createCommentVNode("", true)
      ])
    ]));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/RequestSubpageHeader.vue.js
var p2 = s(O, [["__scopeId", "data-v-c8df97c6"]]);

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/DataTable/DataTableText.vue.js
var i3 = { class: "flex-1 px-2 py-1.5 whitespace-nowrap" };
var x4 = defineComponent({
  __name: "DataTableText",
  props: {
    text: {}
  },
  setup(_2) {
    return (e2, f5) => (openBlock(), createBlock(f2, { class: "relative flex" }, {
      default: withCtx(() => [
        createBaseVNode("span", i3, [
          renderSlot(e2.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(e2.text), 1)
          ])
        ])
      ]),
      _: 3
    }));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/HelpfulLink.vue.js
var l3 = ["href"];
var p3 = defineComponent({
  __name: "HelpfulLink",
  props: {
    href: {}
  },
  setup(s9) {
    return (e2, f5) => (openBlock(), createElementBlock("a", {
      class: "decoration-c-3 cursor-help underline underline-offset-2",
      href: e2.href,
      rel: "noopener noreferrer",
      target: "_blank"
    }, [
      renderSlot(e2.$slots, "default")
    ], 8, l3));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/data/httpHeaders.js
var e = [
  {
    name: "Accept",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept"
  },
  {
    name: "Accept-CH",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-CH"
  },
  {
    name: "Accept-CH-Lifetime",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-CH-Lifetime"
  },
  {
    name: "Accept-Charset",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Charset"
  },
  {
    name: "Accept-Encoding",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding"
  },
  {
    name: "Accept-Language",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language"
  },
  {
    name: "Accept-Patch",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Patch"
  },
  {
    name: "Accept-Post",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Post"
  },
  {
    name: "Accept-Ranges",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Ranges"
  },
  {
    name: "Access-Control-Allow-Credentials",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials"
  },
  {
    name: "Access-Control-Allow-Headers",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers"
  },
  {
    name: "Access-Control-Allow-Methods",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods"
  },
  {
    name: "Access-Control-Allow-Origin",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin"
  },
  {
    name: "Access-Control-Expose-Headers",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers"
  },
  {
    name: "Access-Control-Max-Age",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Max-Age"
  },
  {
    name: "Access-Control-Request-Headers",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Request-Headers"
  },
  {
    name: "Access-Control-Request-Method",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Request-Method"
  },
  {
    name: "Age",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Age"
  },
  {
    name: "Allow",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Allow"
  },
  {
    name: "Alt-Svc",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Alt-Svc"
  },
  {
    name: "Alt-Used",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Alt-Used"
  },
  {
    name: "Authorization",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization"
  },
  {
    name: "Cache-Control",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control"
  },
  {
    name: "Clear-Site-Data",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Clear-Site-Data"
  },
  {
    name: "Connection",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Connection"
  },
  {
    name: "Content-Disposition",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition"
  },
  {
    name: "Content-DPR",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-DPR"
  },
  {
    name: "Content-Encoding",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Encoding"
  },
  {
    name: "Content-Language",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Language"
  },
  {
    name: "Content-Length",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Length"
  },
  {
    name: "Content-Location",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Location"
  },
  {
    name: "Content-Range",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Range"
  },
  {
    name: "Content-Security-Policy",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy"
  },
  {
    name: "Content-Security-Policy-Report-Only",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy-Report-Only"
  },
  {
    name: "Content-Type",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type"
  },
  {
    name: "Cookie",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cookie"
  },
  {
    name: "Critical-CH",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Critical-CH"
  },
  {
    name: "Cross-Origin-Embedder-Policy",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy"
  },
  {
    name: "Cross-Origin-Opener-Policy",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy"
  },
  {
    name: "Cross-Origin-Resource-Policy",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy"
  },
  {
    name: "Date",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Date"
  },
  {
    name: "Device-Memory",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Device-Memory"
  },
  {
    name: "Digest",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Digest"
  },
  {
    name: "DNT",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/DNT"
  },
  {
    name: "Downlink",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Downlink"
  },
  {
    name: "DPR",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/DPR"
  },
  {
    name: "Early-Data",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Early-Data"
  },
  {
    name: "ECT",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ECT"
  },
  {
    name: "ETag",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag"
  },
  {
    name: "Expect",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expect"
  },
  {
    name: "Expect-CT",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expect-CT"
  },
  {
    name: "Expires",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expires"
  },
  {
    name: "Forwarded",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Forwarded"
  },
  {
    name: "From",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/From"
  },
  {
    name: "Host",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Host"
  },
  {
    name: "If-Match",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Match"
  },
  {
    name: "If-Modified-Since",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Modified-Since"
  },
  {
    name: "If-None-Match",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match"
  },
  {
    name: "If-Range",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Range"
  },
  {
    name: "If-Unmodified-Since",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Unmodified-Since"
  },
  {
    name: "Keep-Alive",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Keep-Alive"
  },
  {
    name: "Large-Allocation",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Large-Allocation"
  },
  {
    name: "Last-Modified",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Last-Modified"
  },
  {
    name: "Link",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link"
  },
  {
    name: "Location",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Location"
  },
  {
    name: "Max-Forwards",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Max-Forwards"
  },
  {
    name: "NEL",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/NEL"
  },
  {
    name: "Origin",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin"
  },
  {
    name: "Permissions-Policy",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy"
  },
  {
    name: "Pragma",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Pragma"
  },
  {
    name: "Proxy-Authenticate",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Proxy-Authenticate"
  },
  {
    name: "Proxy-Authorization",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Proxy-Authorization"
  },
  {
    name: "Range",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range"
  },
  {
    name: "Referer",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer"
  },
  {
    name: "Referrer-Policy",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy"
  },
  {
    name: "Retry-After",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After"
  },
  {
    name: "RTT",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/RTT"
  },
  {
    name: "Save-Data",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Save-Data"
  },
  {
    name: "Sec-CH-Prefers-Reduced-Motion",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-Prefers-Reduced-Motion"
  },
  {
    name: "Sec-CH-Prefers-Reduced-Transparency",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-Prefers-Reduced-Transparency"
  },
  {
    name: "Sec-CH-UA",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA"
  },
  {
    name: "Sec-CH-UA-Arch",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Arch"
  },
  {
    name: "Sec-CH-UA-Bitness",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Bitness"
  },
  {
    name: "Sec-CH-UA-Full-Version",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Full-Version"
  },
  {
    name: "Sec-CH-UA-Full-Version-List",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Full-Version-List"
  },
  {
    name: "Sec-CH-UA-Mobile",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Mobile"
  },
  {
    name: "Sec-CH-UA-Model",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Model"
  },
  {
    name: "Sec-CH-UA-Platform",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Platform"
  },
  {
    name: "Sec-CH-UA-Platform-Version",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Platform-Version"
  },
  {
    name: "Sec-Fetch-Dest",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Dest"
  },
  {
    name: "Sec-Fetch-Mode",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Mode"
  },
  {
    name: "Sec-Fetch-Site",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Site"
  },
  {
    name: "Sec-Fetch-User",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-User"
  },
  {
    name: "Sec-GPC",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-GPC"
  },
  {
    name: "Sec-Purpose",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Purpose"
  },
  {
    name: "Sec-WebSocket-Accept",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-WebSocket-Accept"
  },
  {
    name: "Server",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server"
  },
  {
    name: "Server-Timing",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server-Timing"
  },
  {
    name: "Service-Worker-Navigation-Preload",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Service-Worker-Navigation-Preload"
  },
  {
    name: "Set-Cookie",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie"
  },
  {
    name: "SourceMap",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/SourceMap"
  },
  {
    name: "Strict-Transport-Security",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security"
  },
  {
    name: "TE",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/TE"
  },
  {
    name: "Timing-Allow-Origin",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Timing-Allow-Origin"
  },
  {
    name: "Tk",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Tk"
  },
  {
    name: "Trailer",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Trailer"
  },
  {
    name: "Transfer-Encoding",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Transfer-Encoding"
  },
  {
    name: "Upgrade",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade"
  },
  {
    name: "Upgrade-Insecure-Requests",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade-Insecure-Requests"
  },
  {
    name: "User-Agent",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent"
  },
  {
    name: "Vary",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary"
  },
  {
    name: "Via",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Via"
  },
  {
    name: "Viewport-Width",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Viewport-Width"
  },
  {
    name: "Want-Digest",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Want-Digest"
  },
  {
    name: "Warning",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Warning"
  },
  {
    name: "Width",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Width"
  },
  {
    name: "WWW-Authenticate",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/WWW-Authenticate"
  },
  {
    name: "X-Content-Type-Options",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options"
  },
  {
    name: "X-DNS-Prefetch-Control",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control"
  },
  {
    name: "Non-standard",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Non-standard"
  },
  {
    name: "X-Forwarded-For",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For"
  },
  {
    name: "Non-standard",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Non-standard"
  },
  {
    name: "X-Forwarded-Host",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-Host"
  },
  {
    name: "Non-standard",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Non-standard"
  },
  {
    name: "X-Forwarded-Proto",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-Proto"
  },
  {
    name: "Non-standard",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Non-standard"
  },
  {
    name: "X-Frame-Options",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options"
  },
  {
    name: "X-XSS-Protection",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection"
  },
  {
    name: "Cf-Cache-Status",
    url: "https://developers.cloudflare.com/cache/concepts/default-cache-behavior/#cloudflare-cache-responses"
  },
  {
    name: "Cf-Ray",
    url: "https://developers.cloudflare.com/fundamentals/get-started/reference/http-request-headers/#cf-ray"
  },
  {
    name: "Report-To",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/report-to"
  },
  {
    name: "X-Cloud-Trace-Context",
    url: "https://cloud.google.com/trace/docs/trace-context#legacy-http-header"
  },
  {
    name: "Speculation-Rules",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Speculation-Rules"
  }
];

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/ResponseSection/RequestHeaders.vue.js
var H = {
  key: 0,
  class: "max-h-[calc(100%-32px)] overflow-y-auto"
};
var C2 = {
  key: 1,
  class: "text-c-3 bg-b-1 flex min-h-12 items-center justify-center rounded border px-4 text-sm"
};
var D = defineComponent({
  __name: "RequestHeaders",
  props: {
    headers: {}
  },
  setup(v) {
    const m4 = (s9) => e.find(
      (t2) => t2.name.toLowerCase() === s9.toLowerCase()
    );
    return (s9, t2) => (openBlock(), createBlock(E2, {
      class: "overflow-auto",
      defaultOpen: false,
      itemCount: s9.headers.length
    }, {
      title: withCtx(() => t2[0] || (t2[0] = [
        createTextVNode("Request Headers")
      ])),
      default: withCtx(() => [
        s9.headers.length ? (openBlock(), createElementBlock("div", H, [
          createVNode(_, {
            columns: ["minmax(auto, min-content)", "minmax(50%, 1fr)"],
            scroll: ""
          }, {
            default: withCtx(() => [
              createVNode(d2, { class: "sr-only !block" }, {
                default: withCtx(() => [
                  createVNode(unref(x3), null, {
                    default: withCtx(() => t2[1] || (t2[1] = [
                      createTextVNode("Header Key")
                    ])),
                    _: 1
                  }),
                  createVNode(unref(x3), null, {
                    default: withCtx(() => t2[2] || (t2[2] = [
                      createTextVNode("Header Value")
                    ])),
                    _: 1
                  })
                ]),
                _: 1
              }),
              (openBlock(true), createElementBlock(Fragment, null, renderList(s9.headers, (o) => (openBlock(), createBlock(d2, {
                key: o.name,
                class: "group/row text-c-1"
              }, {
                default: withCtx(() => [
                  createVNode(x4, { class: "bg-b-1 sticky left-0 z-1 max-w-48 group-first/row:border-t-0" }, {
                    default: withCtx(() => {
                      var u3;
                      return [
                        typeof ((u3 = m4(o.name)) == null ? void 0 : u3.url) == "string" ? (openBlock(), createBlock(p3, {
                          key: 0,
                          class: "decoration-c-3",
                          href: m4(o.name).url
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(o.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["href"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                          createTextVNode(toDisplayString(o.name), 1)
                        ], 64))
                      ];
                    }),
                    _: 2
                  }, 1024),
                  createVNode(x4, {
                    class: "z-0 group-first/row:border-t-0",
                    text: o.value
                  }, null, 8, ["text"])
                ]),
                _: 2
              }, 1024))), 128))
            ]),
            _: 1
          })
        ])) : (openBlock(), createElementBlock("div", C2, " No Headers "))
      ]),
      _: 1
    }, 8, ["itemCount"]));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseBodyDownload.vue.js
var x5 = ["download", "href"];
var h2 = defineComponent({
  __name: "ResponseBodyDownload",
  props: {
    href: {},
    type: {},
    filename: {}
  },
  setup(s9) {
    const n2 = s9, r3 = computed(() => {
      var e2;
      const o = ((e2 = t(n2.type ?? "")) == null ? void 0 : e2.extension) ?? ".unknown";
      return n2.filename ? n2.filename : `response${o}`;
    });
    return (o, e2) => (openBlock(), createElementBlock("a", {
      class: "text-c-3 text-xxs hover:bg-b-3 no-underlin flex items-center gap-1 rounded px-1.5 py-0.5",
      download: `${r3.value}`,
      href: o.href,
      onClick: e2[0] || (e2[0] = withModifiers(() => {
      }, ["stop"]))
    }, [
      createVNode(unref(m), {
        icon: "Download",
        size: "xs"
      }),
      e2[1] || (e2[1] = createBaseVNode("span", null, [
        createBaseVNode("span", null, "Download"),
        createBaseVNode("span", { class: "sr-only" }, "Response Body")
      ], -1))
    ], 8, x5));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseBodyInfo.vue.js
var r2 = {};
var d4 = { class: "flex justify-center px-2 py-3" };
var f4 = { class: "text-c-3 p-2 text-sm" };
function l4(e2, _2) {
  return openBlock(), createElementBlock("div", d4, [
    createBaseVNode("div", f4, [
      renderSlot(e2.$slots, "default")
    ])
  ]);
}
var p4 = s(r2, [["render", l4]]);

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseBodyPreview.vue2.js
var c2 = ["src"];
var k = ["src", "type"];
var w = ["src", "type"];
var B3 = ["data", "type"];
var $3 = defineComponent({
  __name: "ResponseBodyPreview",
  props: {
    src: {},
    type: {},
    mode: {},
    alpha: { type: Boolean, default: false }
  },
  setup(u3) {
    const r3 = ref(false);
    return watch(
      () => u3.src,
      () => r3.value = false
    ), (e2, o) => !r3.value && e2.src ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(["flex justify-center overflow-auto rounded-b", { "bg-preview p-2": e2.alpha }])
    }, [
      e2.mode === "image" ? (openBlock(), createElementBlock("img", {
        key: 0,
        class: normalizeClass(["h-full max-w-full", { rounded: e2.alpha }]),
        src: e2.src,
        onError: o[0] || (o[0] = (t2) => r3.value = true)
      }, null, 42, c2)) : e2.mode === "video" ? (openBlock(), createElementBlock("video", {
        key: 1,
        autoplay: "",
        controls: "",
        width: "100%",
        onError: o[1] || (o[1] = (t2) => r3.value = true)
      }, [
        createBaseVNode("source", {
          src: e2.src,
          type: e2.type
        }, null, 8, k)
      ], 32)) : e2.mode === "audio" ? (openBlock(), createElementBlock("audio", {
        key: 2,
        class: "my-12",
        controls: "",
        onError: o[2] || (o[2] = (t2) => r3.value = true)
      }, [
        createBaseVNode("source", {
          src: e2.src,
          type: e2.type
        }, null, 8, w)
      ], 32)) : (openBlock(), createElementBlock("object", {
        key: 3,
        class: "aspect-[4/3] w-full",
        data: e2.src,
        type: e2.type,
        onError: o[3] || (o[3] = (t2) => r3.value = true)
      }, null, 40, B3))
    ], 2)) : (openBlock(), createBlock(p4, { key: 1 }, {
      default: withCtx(() => o[4] || (o[4] = [
        createTextVNode("Preview unavailable")
      ])),
      _: 1
    }));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseBodyPreview.vue.js
var s4 = s($3, [["__scopeId", "data-v-0956ad2d"]]);

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseBodyRaw.vue2.js
var k2 = { class: "body-raw grid min-h-0 overflow-hidden p-px outline-none has-[:focus-visible]:outline" };
var w2 = {
  key: 0,
  class: "scalar-code-copy"
};
var x6 = {
  class: "body-raw-scroller custom-scroll relative overflow-x-auto overscroll-contain",
  tabindex: "0"
};
var E3 = defineComponent({
  __name: "ResponseBodyRaw",
  props: {
    content: {},
    language: {}
  },
  setup(d6) {
    const r3 = d6, n2 = ref(null), { copyToClipboard: u3 } = useClipboard(), { codeMirror: p7 } = useCodeMirror({
      codeMirrorRef: n2,
      readOnly: true,
      lineNumbers: true,
      content: toRef(() => prettyPrintJson(r3.content)),
      language: toRef(() => r3.language),
      forceFoldGutter: true
    }), s9 = () => {
      var t2;
      return ((t2 = p7.value) == null ? void 0 : t2.state.doc.toString()) || "";
    };
    return (t2, o) => (openBlock(), createElementBlock("div", k2, [
      s9() ? (openBlock(), createElementBlock("div", w2, [
        createBaseVNode("button", {
          class: "copy-button",
          type: "button",
          onClick: o[0] || (o[0] = (R2) => unref(u3)(s9()))
        }, [
          o[1] || (o[1] = createBaseVNode("span", { class: "sr-only" }, "Copy content", -1)),
          createVNode(unref(m), {
            icon: "Clipboard",
            size: "md"
          })
        ])
      ])) : createCommentVNode("", true),
      createBaseVNode("div", x6, [
        createBaseVNode("div", {
          ref_key: "codeMirrorRef",
          ref: n2
        }, null, 512)
      ])
    ]));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseBodyRaw.vue.js
var s5 = s(E3, [["__scopeId", "data-v-96fbecd5"]]);

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseBodyToggle.vue.js
var a4 = { class: "text-c-3 text-xxs -my-1 flex justify-center gap-0.5 rounded p-0.5" };
var i4 = defineComponent({
  __name: "ResponseBodyToggle",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(p7) {
    return (e2, t2) => (openBlock(), createElementBlock("div", a4, [
      createBaseVNode("button", {
        class: normalizeClass(["hover:bg-b-3 rounded px-1", { "bg-b-3 text-c-1 cursor-default": e2.modelValue }]),
        type: "button",
        onClick: t2[0] || (t2[0] = withModifiers((s9) => e2.$emit("update:modelValue", true), ["stop"]))
      }, " Preview ", 2),
      createBaseVNode("button", {
        class: normalizeClass(["hover:bg-b-3 rounded px-1", { "bg-b-3 text-c-1 cursor-default": !e2.modelValue }]),
        type: "button",
        onClick: t2[1] || (t2[1] = withModifiers((s9) => e2.$emit("update:modelValue", false), ["stop"]))
      }, " Raw ", 2)
    ]));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseBody.vue2.js
var q = {
  key: 0,
  class: "bg-b-1 flex max-h-[calc(100%-32px)] flex-col overflow-hidden"
};
var z2 = { class: "box-content flex min-h-8 items-center justify-between border-y px-3" };
var A2 = { class: "text-xxs font-code leading-3" };
var Y = defineComponent({
  __name: "ResponseBody",
  props: {
    title: {},
    layout: {},
    data: {},
    headers: {}
  },
  setup(k3) {
    const c3 = k3, s9 = ref(true), p7 = computed(
      () => {
        var t2;
        return !!((t2 = e2.value) != null && t2.raw && e2.value.preview);
      }
    ), B6 = computed(() => s9.value || !p7.value), R2 = computed(() => !s9.value || !p7.value), { mimeType: i5, attachmentFilename: V2, dataUrl: l5 } = b({
      data: toRef(c3, "data"),
      headers: toRef(c3, "headers")
    }), e2 = computed(() => t(i5.value.essence));
    return (t2, u3) => (openBlock(), createBlock(E2, {
      class: "max-h-content overflow-y-hidden",
      layout: t2.layout
    }, createSlots({
      title: withCtx(() => [
        createTextVNode(toDisplayString(t2.title), 1)
      ]),
      default: withCtx(() => {
        var f5, v, y, h3;
        return [
          t2.data ? (openBlock(), createElementBlock("div", q, [
            createBaseVNode("div", z2, [
              createBaseVNode("span", A2, toDisplayString(unref(i5).essence), 1),
              p7.value ? (openBlock(), createBlock(i4, {
                key: 0,
                modelValue: s9.value,
                "onUpdate:modelValue": u3[0] || (u3[0] = (b5) => s9.value = b5)
              }, null, 8, ["modelValue"])) : createCommentVNode("", true)
            ]),
            (f5 = e2.value) != null && f5.raw && R2.value ? (openBlock(), createBlock(s5, {
              key: unref(l5),
              content: t2.data,
              language: e2.value.language
            }, null, 8, ["content", "language"])) : createCommentVNode("", true),
            (v = e2.value) != null && v.preview && B6.value ? (openBlock(), createBlock(s4, {
              key: unref(l5),
              alpha: e2.value.alpha,
              mode: e2.value.preview,
              src: unref(l5),
              type: unref(i5).essence
            }, null, 8, ["alpha", "mode", "src", "type"])) : createCommentVNode("", true),
            !((y = e2.value) != null && y.raw) && !((h3 = e2.value) != null && h3.preview) ? (openBlock(), createBlock(p4, { key: 2 }, {
              default: withCtx(() => u3[1] || (u3[1] = [
                createTextVNode(" Binary file ")
              ])),
              _: 1
            })) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ];
      }),
      _: 2
    }, [
      t2.data && unref(l5) ? {
        name: "actions",
        fn: withCtx(() => [
          createVNode(h2, {
            filename: unref(V2),
            href: unref(l5),
            type: unref(i5).essence
          }, null, 8, ["filename", "href", "type"])
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["layout"]));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseBody.vue.js
var s6 = s(Y, [["__scopeId", "data-v-2dcbd6aa"]]);

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseBodyStreaming.vue.js
var T = { class: "flex w-full items-center justify-between" };
var E4 = {
  key: 0,
  class: "mr-2 flex items-center gap-2"
};
var N = {
  key: 0,
  class: "text-red bg-b-danger sticky top-0 border-b p-2"
};
var V = {
  key: 1,
  class: "p-2"
};
var z3 = defineComponent({
  __name: "ResponseBodyStreaming",
  props: {
    reader: {}
  },
  setup(f5) {
    const e2 = x(), o = ref(""), a5 = ref(null), m4 = new TextDecoder(), r3 = ref(null), v = () => {
      r3.value && (r3.value.scrollTop = r3.value.scrollHeight);
    };
    watch(o, () => {
      nextTick(v);
    });
    async function x8() {
      try {
        for (; e2.isLoading; ) {
          const { done: n2, value: t2 } = await f5.reader.read();
          if (n2) {
            e2.stopLoading();
            break;
          }
          t2 && (o.value += m4.decode(t2, { stream: true }));
        }
      } catch (n2) {
        console.error("Error reading stream:", n2), e2.stopLoading(), a5.value = n2;
      } finally {
        o.value += m4.decode();
      }
    }
    return onMounted(() => {
      e2.startLoading(), x8(), a5.value = null;
    }), onBeforeUnmount(() => {
      f5.reader.cancel(), e2.stopLoading();
    }), (n2, t2) => (openBlock(), createBlock(E2, { class: "max-h-content overflow-y-hidden" }, {
      title: withCtx(() => [
        createBaseVNode("div", T, [
          t2[1] || (t2[1] = createBaseVNode("div", null, "Body", -1)),
          unref(e2).isLoading ? (openBlock(), createElementBlock("div", E4, [
            createVNode(unref(f), {
              loadingState: unref(e2),
              size: "xs"
            }, null, 8, ["loadingState"]),
            t2[0] || (t2[0] = createBaseVNode("span", { class: "text-c-2" }, " Listening… ", -1))
          ])) : createCommentVNode("", true)
        ])
      ]),
      default: withCtx(() => [
        createBaseVNode("div", {
          ref_key: "contentContainer",
          ref: r3,
          class: "text-xxs font-code h-full overflow-auto leading-2 whitespace-pre-wrap"
        }, [
          a5.value ? (openBlock(), createElementBlock("div", N, toDisplayString(a5.value.message), 1)) : createCommentVNode("", true),
          o.value ? (openBlock(), createElementBlock("div", V, toDisplayString(o.value), 1)) : createCommentVNode("", true)
        ], 512)
      ]),
      _: 1
    }));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseBodyVirtual.vue.js
var R = defineComponent({
  __name: "ResponseBodyVirtual",
  props: {
    content: {},
    data: {},
    headers: {}
  },
  setup(l5) {
    const o = l5, i5 = computed(() => formatJsonOrYamlString(o.content)), { mimeType: m4, attachmentFilename: d6, dataUrl: n2 } = b({
      data: toRef(o, "data"),
      headers: toRef(o, "headers")
    });
    return (w3, t2) => (openBlock(), createBlock(E2, { class: "!max-h-100% response-body-virtual overflow-x-auto" }, createSlots({
      title: withCtx(() => [
        t2[0] || (t2[0] = createTextVNode("Body"))
      ]),
      default: withCtx(() => [
        t2[1] || (t2[1] = createBaseVNode("div", { class: "font-code text-xxs rounded-t border border-b-0 px-2.5 py-1.5" }, " This response body is massive! Syntax highlighting won’t work here. ", -1)),
        createVNode(unref(B), {
          containerClass: "custom-scroll scalar-code-block border rounded-b flex flex-1 max-h-screen",
          contentClass: "language-plaintext whitespace-pre font-code text-base",
          lineHeight: 20,
          text: i5.value
        }, null, 8, ["text"])
      ]),
      _: 2
    }, [
      unref(n2) ? {
        name: "actions",
        fn: withCtx(() => [
          createVNode(h2, {
            filename: unref(d6),
            href: unref(n2),
            type: unref(m4).essence
          }, null, 8, ["filename", "href", "type"])
        ]),
        key: "0"
      } : void 0
    ]), 1024));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseCookies.vue.js
var d5 = {
  key: 1,
  class: "text-c-3 bg-b-1 flex min-h-[65px] items-center justify-center border-t px-4 text-sm"
};
var B4 = defineComponent({
  __name: "ResponseCookies",
  props: {
    cookies: {}
  },
  setup(x8) {
    return (s9, l5) => (openBlock(), createBlock(E2, { defaultOpen: false }, {
      title: withCtx(() => l5[0] || (l5[0] = [
        createTextVNode("Cookies")
      ])),
      default: withCtx(() => [
        (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          s9.cookies.length ? (openBlock(), createBlock(_, {
            key: 0,
            class: "flex-1",
            columns: ["", ""]
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(s9.cookies, (o) => (openBlock(), createBlock(d2, {
                key: o.name
              }, {
                default: withCtx(() => [
                  createVNode(x4, {
                    text: o.name
                  }, null, 8, ["text"]),
                  createVNode(x4, {
                    text: o.value
                  }, null, 8, ["text"])
                ]),
                _: 2
              }, 1024))), 128))
            ]),
            _: 1
          })) : (openBlock(), createElementBlock("div", d5, " No cookies "))
        ], 64))
      ]),
      _: 1
    }));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/assets/computer.ascii.js
var B5 = `                         .,,uod8B8bou,,.
                ..,uod8BBBBBBBBBBBBBBBBRPFT?l!i:.
           ||||||||||||||!?TFPRBBBBBBBBBBBBBBB8m=,
           ||||   '""^^!!||||||||||TFPRBBBVT!:...!
           ||||            '""^^!!|||||?!:.......!
           ||||                     ||||.........!
           ||||                     ||||.........!
           ||||                     ||||.........!
           ||||                     ||||.........!
           ||||                     ||||.........!
           ||||                     ||||.........!
           ||||,                    ||||.........\`
           |||||!!-._               ||||.......;.
           ':!|||||||||!!-._        ||||.....bBBBBWdou,.
         bBBBBB86foi!|||||||!!-..:|||!..bBBBBBBBBBBBBBBY!
         ::!?TFPRBBBBBB86foi!||||||||!!bBBBBBBBBBBBBBBY..!
         :::::::::!?TFPRBBBBBB86ftiaabBBBBBBBBBBBBBBY....!
         :::;\`"^!:;::::::!?TFPRBBBBBBBBBBBBBBBBBBBY......!
         ;::::::...''^::::::::::!?TFPRBBBBBBBBBBY........!
     .ob86foi;::::::::::::::::::::::::!?TFPRBY..........\`
    .b888888888886foi;:::::::::::::::::::::::..........\`
 .b888888888888888888886foi;::::::::::::::::..........
.b888888888888888888888888888886foi;:::::::::......\`
!Tf998888888888888888888888888888888886foi;:::....\`
  '"^!|Tf9988888888888888888888888888888888!::..\`
       '"^!|Tf998888888888888888888888889!! '\`
             '"^!|Tf9988888888888888888!!\`            iBBbo.
                  '"^!|Tf998888888889!\`             WBBBBbo.
                        '"^!|Tf9989!\`              YBBBP^'
                              '"^!\`               \`
`;

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseEmpty.vue2.js
var W = { class: "flex-center relative flex flex-1 flex-col gap-6 p-2 capitalize" };
var $4 = {
  key: 0,
  class: "scalar-version-number"
};
var j = { class: "text-c-3 right-4 mt-auto flex w-full flex-col items-end gap-2 text-sm" };
var U = defineComponent({
  __name: "ResponseEmpty",
  props: {
    collection: {},
    operation: {},
    workspace: {},
    numWorkspaceRequests: {}
  },
  setup(r3) {
    const { events: a5, requestMutators: x8 } = je(), g2 = useRoute(), b5 = useRouter(), { layout: n2 } = s2(), f5 = () => {
      var l5;
      const o = (l5 = r3.operation.tags) != null && l5.length ? { tags: r3.operation.tags[0] ? [r3.operation.tags[0]] : [] } : {}, e2 = x8.add(o, r3.collection.uid);
      e2 && (b5.push({
        name: "request",
        params: {
          workspace: r3.workspace.uid,
          request: e2.uid
        }
      }), nextTick(() => {
        a5.hotKeys.emit({
          focusAddressBar: new KeyboardEvent("keydown", { key: "l" })
        });
      }));
    }, k3 = (o) => {
      o != null && o.createNew && g2.name === "request" && f5();
    }, w3 = "2.5.9";
    return onMounted(() => a5.hotKeys.on(k3)), onBeforeUnmount(() => a5.hotKeys.off(k3)), (o, e2) => (openBlock(), createElementBlock("div", W, [
      createBaseVNode("div", {
        class: normalizeClass(["flex h-[calc(100%_-_50px)] flex-col items-center justify-center", {
          "hidden opacity-0": o.numWorkspaceRequests <= 1 && unref(n2) !== "modal"
        }])
      }, [
        unref(n2) !== "modal" ? (openBlock(), createElementBlock("div", $4, [
          createTextVNode(" Scalar App V" + toDisplayString(unref(w3)) + " Beta ", 1),
          e2[3] || (e2[3] = createBaseVNode("div", { class: "mt-2" }, [
            createBaseVNode("a", {
              href: "https://github.com/scalar/scalar/issues/2669",
              target: "_blank"
            }, " Roadmap ")
          ], -1))
        ])) : createCommentVNode("", true),
        e2[4] || (e2[4] = createBaseVNode("a", {
          class: "gitbook-show scalar-version-number",
          href: "https://www.scalar.com",
          target: "_blank"
        }, " Powered By Scalar.com ", -1)),
        createVNode(i, {
          art: unref(B5),
          class: "text-c-3"
        }, null, 8, ["art"])
      ], 2),
      unref(n2) !== "modal" ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["hidden h-[calc(100%_-_50px)] items-center justify-center pb-5", {
          "!flex opacity-100": o.numWorkspaceRequests == 1
        }])
      }, [
        createVNode(r)
      ], 2)) : createCommentVNode("", true),
      createBaseVNode("div", j, [
        unref(n2) !== "modal" ? (openBlock(), createElementBlock("button", {
          key: 0,
          class: "flex items-center gap-1.5",
          type: "button",
          onClick: e2[0] || (e2[0] = (l5) => unref(a5).commandPalette.emit())
        }, [
          e2[5] || (e2[5] = createTextVNode(" Get Started ")),
          createVNode(A, { hotkey: "k" })
        ])) : createCommentVNode("", true),
        unref(n2) === "desktop" ? (openBlock(), createElementBlock("button", {
          key: 1,
          class: "flex items-center gap-1.5",
          type: "button",
          onClick: e2[1] || (e2[1] = (l5) => f5())
        }, [
          e2[6] || (e2[6] = createTextVNode(" New Request ")),
          createVNode(A, { hotkey: "N" })
        ])) : createCommentVNode("", true),
        createBaseVNode("button", {
          class: "flex items-center gap-1.5",
          type: "button",
          onClick: e2[2] || (e2[2] = (l5) => unref(a5).executeRequest.emit())
        }, [
          e2[7] || (e2[7] = createTextVNode(" Send Request ")),
          createVNode(A, { hotkey: "↵" })
        ])
      ])
    ]));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseEmpty.vue.js
var s7 = s(U, [["__scopeId", "data-v-bb2369d4"]]);

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseHeaders.vue.js
var H2 = {
  key: 0,
  class: "max-h-[calc(100%-32px)] overflow-y-auto"
};
var C3 = {
  key: 1,
  class: "text-c-3 bg-b-1 flex min-h-12 items-center justify-center rounded border px-4 text-sm"
};
var T2 = defineComponent({
  __name: "ResponseHeaders",
  props: {
    headers: {}
  },
  setup(v) {
    const m4 = (s9) => e.find(
      (r3) => r3.name.toLowerCase() === s9.toLowerCase()
    );
    return (s9, r3) => (openBlock(), createBlock(E2, {
      class: "overflow-auto",
      defaultOpen: false,
      itemCount: s9.headers.length
    }, {
      title: withCtx(() => r3[0] || (r3[0] = [
        createTextVNode("Response Headers")
      ])),
      default: withCtx(() => [
        s9.headers.length ? (openBlock(), createElementBlock("div", H2, [
          createVNode(_, {
            columns: ["minmax(auto, min-content)", "minmax(50%, 1fr)"],
            scroll: ""
          }, {
            default: withCtx(() => [
              createVNode(d2, { class: "sr-only !block" }, {
                default: withCtx(() => [
                  createVNode(unref(x3), null, {
                    default: withCtx(() => r3[1] || (r3[1] = [
                      createTextVNode("Header Key")
                    ])),
                    _: 1
                  }),
                  createVNode(unref(x3), null, {
                    default: withCtx(() => r3[2] || (r3[2] = [
                      createTextVNode("Header Value")
                    ])),
                    _: 1
                  })
                ]),
                _: 1
              }),
              (openBlock(true), createElementBlock(Fragment, null, renderList(s9.headers, (o) => (openBlock(), createBlock(d2, {
                key: o.name,
                class: "group/row text-c-1"
              }, {
                default: withCtx(() => [
                  createVNode(x4, { class: "bg-b-1 sticky left-0 z-1 max-w-48 group-first/row:border-t-0" }, {
                    default: withCtx(() => {
                      var d6;
                      return [
                        typeof ((d6 = m4(o.name)) == null ? void 0 : d6.url) == "string" ? (openBlock(), createBlock(p3, {
                          key: 0,
                          class: "decoration-c-3",
                          href: m4(o.name).url
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(o.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["href"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                          createTextVNode(toDisplayString(o.name), 1)
                        ], 64))
                      ];
                    }),
                    _: 2
                  }, 1024),
                  createVNode(x4, {
                    class: "z-0 group-first/row:border-t-0",
                    text: o.value
                  }, null, 8, ["text"])
                ]),
                _: 2
              }, 1024))), 128))
            ]),
            _: 1
          })
        ])) : (openBlock(), createElementBlock("div", C3, " No Headers "))
      ]),
      _: 1
    }, 8, ["itemCount"]));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseLoadingOverlay.vue2.js
var L = {
  key: 0,
  class: "bg-b-1 z-overlay absolute inset-0 flex flex-col items-center justify-center gap-6"
};
var b4 = defineComponent({
  __name: "ResponseLoadingOverlay",
  setup(S2) {
    const { events: n2 } = je(), t2 = x(), a5 = ref();
    return n2.requestStatus.on((s9) => {
      s9 === "start" ? a5.value = setTimeout(() => t2.startLoading(), 1e3) : (clearTimeout(a5.value), a5.value = void 0, t2.stopLoading());
    }), (s9, o) => (openBlock(), createBlock(Transition, null, {
      default: withCtx(() => [
        unref(t2).isLoading ? (openBlock(), createElementBlock("div", L, [
          createVNode(unref(f), {
            class: "text-c-3",
            loadingState: unref(t2),
            size: "3xl"
          }, null, 8, ["loadingState"]),
          createVNode(unref($), {
            variant: "ghost",
            onClick: o[0] || (o[0] = (C4) => unref(n2).cancelRequest.emit())
          }, {
            default: withCtx(() => o[1] || (o[1] = [
              createTextVNode(" Cancel ")
            ])),
            _: 1
          })
        ])) : createCommentVNode("", true)
      ]),
      _: 1
    }));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseLoadingOverlay.vue.js
var p5 = s(b4, [["__scopeId", "data-v-62b8db3f"]]);

// node_modules/.pnpm/parse-ms@3.0.0/node_modules/parse-ms/index.js
function parseMilliseconds(milliseconds) {
  if (typeof milliseconds !== "number") {
    throw new TypeError("Expected a number");
  }
  const roundTowardsZero = milliseconds > 0 ? Math.floor : Math.ceil;
  return {
    days: roundTowardsZero(milliseconds / 864e5),
    hours: roundTowardsZero(milliseconds / 36e5) % 24,
    minutes: roundTowardsZero(milliseconds / 6e4) % 60,
    seconds: roundTowardsZero(milliseconds / 1e3) % 60,
    milliseconds: roundTowardsZero(milliseconds) % 1e3,
    microseconds: roundTowardsZero(milliseconds * 1e3) % 1e3,
    nanoseconds: roundTowardsZero(milliseconds * 1e6) % 1e3
  };
}

// node_modules/.pnpm/pretty-ms@8.0.0/node_modules/pretty-ms/index.js
var pluralize = (word, count) => count === 1 ? word : `${word}s`;
var SECOND_ROUNDING_EPSILON = 1e-7;
function prettyMilliseconds(milliseconds, options = {}) {
  if (!Number.isFinite(milliseconds)) {
    throw new TypeError("Expected a finite number");
  }
  if (options.colonNotation) {
    options.compact = false;
    options.formatSubMilliseconds = false;
    options.separateMilliseconds = false;
    options.verbose = false;
  }
  if (options.compact) {
    options.secondsDecimalDigits = 0;
    options.millisecondsDecimalDigits = 0;
  }
  const result = [];
  const floorDecimals = (value, decimalDigits) => {
    const flooredInterimValue = Math.floor(value * 10 ** decimalDigits + SECOND_ROUNDING_EPSILON);
    const flooredValue = Math.round(flooredInterimValue) / 10 ** decimalDigits;
    return flooredValue.toFixed(decimalDigits);
  };
  const add = (value, long, short, valueString) => {
    if ((result.length === 0 || !options.colonNotation) && value === 0 && !(options.colonNotation && short === "m")) {
      return;
    }
    valueString = (valueString || value || "0").toString();
    let prefix;
    let suffix;
    if (options.colonNotation) {
      prefix = result.length > 0 ? ":" : "";
      suffix = "";
      const wholeDigits = valueString.includes(".") ? valueString.split(".")[0].length : valueString.length;
      const minLength = result.length > 0 ? 2 : 1;
      valueString = "0".repeat(Math.max(0, minLength - wholeDigits)) + valueString;
    } else {
      prefix = "";
      suffix = options.verbose ? " " + pluralize(long, value) : short;
    }
    result.push(prefix + valueString + suffix);
  };
  const parsed = parseMilliseconds(milliseconds);
  add(Math.trunc(parsed.days / 365), "year", "y");
  add(parsed.days % 365, "day", "d");
  add(parsed.hours, "hour", "h");
  add(parsed.minutes, "minute", "m");
  if (options.separateMilliseconds || options.formatSubMilliseconds || !options.colonNotation && milliseconds < 1e3) {
    add(parsed.seconds, "second", "s");
    if (options.formatSubMilliseconds) {
      add(parsed.milliseconds, "millisecond", "ms");
      add(parsed.microseconds, "microsecond", "µs");
      add(parsed.nanoseconds, "nanosecond", "ns");
    } else {
      const millisecondsAndBelow = parsed.milliseconds + parsed.microseconds / 1e3 + parsed.nanoseconds / 1e6;
      const millisecondsDecimalDigits = typeof options.millisecondsDecimalDigits === "number" ? options.millisecondsDecimalDigits : 0;
      const roundedMiliseconds = millisecondsAndBelow >= 1 ? Math.round(millisecondsAndBelow) : Math.ceil(millisecondsAndBelow);
      const millisecondsString = millisecondsDecimalDigits ? millisecondsAndBelow.toFixed(millisecondsDecimalDigits) : roundedMiliseconds;
      add(
        Number.parseFloat(millisecondsString),
        "millisecond",
        "ms",
        millisecondsString
      );
    }
  } else {
    const seconds = milliseconds / 1e3 % 60;
    const secondsDecimalDigits = typeof options.secondsDecimalDigits === "number" ? options.secondsDecimalDigits : 1;
    const secondsFixed = floorDecimals(seconds, secondsDecimalDigits);
    const secondsString = options.keepDecimalsOnWholeSeconds ? secondsFixed : secondsFixed.replace(/\.0+$/, "");
    add(Number.parseFloat(secondsString), "second", "s", secondsString);
  }
  if (result.length === 0) {
    return "0" + (options.verbose ? " milliseconds" : "ms");
  }
  if (options.compact) {
    return result[0];
  }
  if (typeof options.unitCount === "number") {
    const separator = options.colonNotation ? "" : " ";
    return result.slice(0, Math.max(options.unitCount, 1)).join(separator);
  }
  return options.colonNotation ? result.join("") : result.join(" ");
}

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseMetaInformation.vue.js
var x7 = { class: "text-c-1 flex gap-1.5" };
var z4 = { key: 0 };
var D2 = { key: 0 };
var E5 = { key: 1 };
var $5 = defineComponent({
  __name: "ResponseMetaInformation",
  props: {
    response: {}
  },
  setup(g2) {
    const C4 = g2, { events: S2 } = je(), l5 = ref(), u3 = ref(0);
    S2.requestStatus.on((e2) => {
      e2 === "start" ? l5.value = setInterval(() => u3.value += 1e3, 1e3) : (clearInterval(l5.value), l5.value = void 0, u3.value = 0);
    });
    const i5 = (e2) => {
      var c3, m4;
      const t2 = Number.parseInt(
        ((c3 = e2.headers) == null ? void 0 : c3["Content-Length"]) || ((m4 = e2.headers) == null ? void 0 : m4["content-length"]) || "0",
        10
      );
      return t2 ? prettyBytes(t2) : void 0;
    }, s9 = computed(() => {
      const e2 = C4.response.status;
      if (e2)
        return httpStatusCodes[e2] ?? void 0;
    });
    return (e2, t2) => (openBlock(), createElementBlock("div", x7, [
      l5.value && u3.value ? (openBlock(), createElementBlock("span", z4, toDisplayString(unref(prettyMilliseconds)(u3.value)), 1)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        createBaseVNode("span", null, [
          t2[0] || (t2[0] = createBaseVNode("span", { class: "sr-only" }, "Response Information, Duration:", -1)),
          createTextVNode(" " + toDisplayString(unref(prettyMilliseconds)(e2.response.duration)), 1)
        ]),
        i5(e2.response) ? (openBlock(), createElementBlock("span", D2, [
          t2[1] || (t2[1] = createBaseVNode("span", { class: "sr-only" }, ", Size:", -1)),
          createTextVNode(" " + toDisplayString(i5(e2.response)), 1)
        ])) : createCommentVNode("", true),
        s9.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          t2[2] || (t2[2] = createBaseVNode("span", { class: "sr-only" }, ", Status:", -1)),
          s9.value.url ? (openBlock(), createBlock(p3, {
            key: 0,
            class: "flex items-center gap-1.5",
            href: s9.value.url
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(e2.response.status) + " " + toDisplayString(s9.value.name) + " ", 1),
              createBaseVNode("span", {
                class: "block h-1.5 w-1.5 rounded-full",
                style: normalizeStyle({ backgroundColor: s9.value.color })
              }, null, 4)
            ]),
            _: 1
          }, 8, ["href"])) : (openBlock(), createElementBlock("span", E5, [
            createTextVNode(toDisplayString(e2.response.status) + " " + toDisplayString(s9.value.name) + " ", 1),
            createBaseVNode("span", {
              class: "block h-1.5 w-1.5 rounded-full",
              style: normalizeStyle({ backgroundColor: s9.value.color })
            }, null, 4)
          ]))
        ], 64)) : createCommentVNode("", true)
      ], 64))
    ]));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseSection.vue2.js
var J = { class: "flex h-8 flex-1 items-center" };
var Q = ["id", "role"];
var g = 2e5;
var me = defineComponent({
  __name: "ResponseSection",
  props: {
    collection: {},
    operation: {},
    workspace: {},
    numWorkspaceRequests: {},
    response: {},
    requestResult: {}
  },
  setup(r3) {
    const R2 = i2().getViewComponents("response.section"), f5 = computed(() => {
      var o;
      const e2 = (o = r3.response) == null ? void 0 : o.headers;
      return e2 ? Object.keys(e2).map((n2) => ({
        name: n2,
        value: e2[n2] ?? "",
        required: false
      })) : [];
    }), q2 = computed(
      () => {
        var e2;
        return ((e2 = r3.response) == null ? void 0 : e2.cookieHeaderKeys.flatMap((o) => {
          var i5, p7;
          const n2 = (p7 = (i5 = r3.response) == null ? void 0 : i5.headers) == null ? void 0 : p7[o];
          return n2 ? {
            name: o,
            value: n2,
            required: false
          } : [];
        })) ?? [];
      }
    ), C4 = ["Cookies", "Headers", "Body"], s9 = ref("All"), h3 = computed(() => ["All", ...C4]), t2 = computed(
      () => Object.fromEntries(
        h3.value.map((e2) => [e2, useId()])
      )
    ), H3 = computed(() => {
      var i5, p7;
      if (!r3.response || !("size" in r3.response))
        return false;
      const e2 = ((i5 = r3.response.headers) == null ? void 0 : i5["content-type"]) || ((p7 = r3.response.headers) == null ? void 0 : p7["Content-Type"]);
      return !e2 || (r3.response.size ?? 0) <= g || e2.includes("text/html") ? false : [
        // Text types
        "text/",
        // JSON types
        "application/json",
        "application/ld+json",
        "application/problem+json",
        "application/vnd.api+json",
        // XML types
        "application/xml",
        "application/atom+xml",
        "application/rss+xml",
        "application/problem+xml",
        // Other structured text
        "application/javascript",
        "application/ecmascript",
        "application/x-yaml",
        "application/yaml",
        // Source code
        "application/x-httpd-php",
        "application/x-sh",
        "application/x-perl",
        "application/x-python",
        "application/x-ruby",
        "application/x-java-source",
        // Form data
        "application/x-www-form-urlencoded"
      ].some((u3) => e2.includes(u3)) && (r3.response.size ?? 0) > g;
    }), V2 = computed(
      () => {
        var e2;
        return ((e2 = r3.requestResult) == null ? void 0 : e2.request.parameters.headers.filter((o) => o.enabled).map((o) => ({
          name: o.key,
          value: o.value,
          required: true
        }))) ?? [];
      }
    );
    return (e2, o) => (openBlock(), createBlock(b2, { "aria-label": "Response" }, {
      title: withCtx(() => [
        createBaseVNode("div", J, [
          createBaseVNode("div", {
            "aria-live": "polite",
            class: normalizeClass(["flex items-center", { "animate-response-heading": e2.response }])
          }, [
            o[1] || (o[1] = createBaseVNode("span", { class: "response-heading pointer-events-none absolute" }, " Response ", -1)),
            e2.response ? (openBlock(), createBlock($5, {
              key: 0,
              class: "animate-response-children",
              response: e2.response
            }, null, 8, ["response"])) : createCommentVNode("", true)
          ], 2),
          createVNode(a2, {
            modelValue: s9.value,
            "onUpdate:modelValue": o[0] || (o[0] = (n2) => s9.value = n2),
            filterIds: t2.value,
            filters: h3.value
          }, null, 8, ["modelValue", "filterIds", "filters"])
        ])
      ]),
      default: withCtx(() => {
        var n2, i5, p7;
        return [
          createBaseVNode("div", {
            id: t2.value.All,
            class: normalizeClass(["custom-scroll response-section-content relative grid h-full justify-stretch", {
              "content-start": e2.response
            }]),
            role: s9.value === "All" && e2.response ? "tabpanel" : "none"
          }, [
            e2.response ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              s9.value === "All" || s9.value === "Cookies" ? (openBlock(), createBlock(B4, {
                key: 0,
                class: "response-section-content-cookies",
                id: t2.value.Cookies,
                cookies: q2.value,
                role: s9.value === "All" ? "none" : "tabpanel"
              }, null, 8, ["id", "cookies", "role"])) : createCommentVNode("", true),
              s9.value === "All" || s9.value === "Headers" ? (openBlock(), createBlock(D, {
                key: 1,
                class: "response-section-content-headers",
                id: t2.value.Headers,
                headers: V2.value,
                role: s9.value === "All" ? "none" : "tabpanel"
              }, null, 8, ["id", "headers", "role"])) : createCommentVNode("", true),
              s9.value === "All" || s9.value === "Headers" ? (openBlock(), createBlock(T2, {
                key: 2,
                class: "response-section-content-headers",
                id: t2.value.Headers,
                headers: f5.value,
                role: s9.value === "All" ? "none" : "tabpanel"
              }, null, 8, ["id", "headers", "role"])) : createCommentVNode("", true),
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(R2), (u3) => (openBlock(), createBlock(unref(E), {
                key: u3.component
              }, {
                default: withCtx(() => [
                  withDirectives((openBlock(), createBlock(resolveDynamicComponent(u3.component), mergeProps({ ref_for: true }, u3.props ?? {}), null, 16)), [
                    [vShow, s9.value === "All" || s9.value === u3.title]
                  ])
                ]),
                _: 2
              }, 1024))), 128)),
              s9.value === "All" || s9.value === "Body" ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
                "reader" in e2.response ? (openBlock(), createBlock(z3, {
                  key: 0,
                  class: "response-section-content-body",
                  id: t2.value.Body,
                  reader: e2.response.reader
                }, null, 8, ["id", "reader"])) : H3.value && typeof ((n2 = e2.response) == null ? void 0 : n2.data) == "string" ? (openBlock(), createBlock(R, {
                  key: 1,
                  id: t2.value.Body,
                  content: e2.response.data,
                  data: (i5 = e2.response) == null ? void 0 : i5.data,
                  headers: f5.value,
                  role: s9.value === "All" ? "none" : "tabpanel"
                }, null, 8, ["id", "content", "data", "headers", "role"])) : (openBlock(), createBlock(s6, {
                  key: 2,
                  class: "response-section-content-body",
                  id: t2.value.Body,
                  layout: "client",
                  active: true,
                  data: (p7 = e2.response) == null ? void 0 : p7.data,
                  headers: f5.value,
                  role: s9.value === "All" ? "none" : "tabpanel",
                  title: "Body"
                }, null, 8, ["id", "data", "headers", "role"]))
              ], 64)) : createCommentVNode("", true)
            ], 64)) : (openBlock(), createBlock(s7, {
              key: 0,
              collection: e2.collection,
              operation: e2.operation,
              workspace: e2.workspace,
              numWorkspaceRequests: e2.numWorkspaceRequests
            }, null, 8, ["collection", "operation", "workspace", "numWorkspaceRequests"])),
            createVNode(p5)
          ], 10, Q)
        ];
      }),
      _: 1
    }));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/ResponseSection/ResponseSection.vue.js
var s8 = s(me, [["__scopeId", "data-v-7138ed84"]]);

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/Request.vue2.js
var O2 = { class: "flex h-full" };
var T3 = {
  key: 0,
  class: "flex h-full flex-1 flex-col"
};
var re = defineComponent({
  __name: "Request",
  props: {
    invalidParams: {},
    selectedSecuritySchemeUids: {},
    requestResult: {}
  },
  emits: ["newTab"],
  setup($6) {
    const { events: R2 } = je(), { isSidebarOpen: a5 } = m2(), q2 = je(), { layout: h3 } = s2(), {
      activeCollection: r3,
      activeExample: m4,
      activeRequest: l5,
      activeWorkspace: i5,
      activeServer: p7,
      activeEnvVariables: d6,
      activeEnvironment: v,
      activeWorkspaceRequests: x8
    } = z(), { modalState: C4, requestHistory: V2 } = q2, w3 = computed(
      () => V2.findLast((o) => {
        var t2;
        return o.request.uid === ((t2 = m4.value) == null ? void 0 : t2.uid);
      })
    );
    function _2(o) {
      var t2;
      R2.commandPalette.emit({
        commandName: "Import from cURL",
        metaData: {
          parsedCurl: C(o),
          collectionUid: (t2 = r3.value) == null ? void 0 : t2.uid
        }
      });
    }
    return (o, t2) => unref(r3) && unref(i5) ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(["bg-b-1 relative z-0 flex h-full flex-1 flex-col overflow-hidden pt-0", {
        "!mr-0 !mb-0 !border-0": unref(h3) === "modal"
      }])
    }, [
      createBaseVNode("div", O2, [
        unref(l5) ? (openBlock(), createElementBlock("div", T3, [
          createVNode(p2, {
            modelValue: unref(a5),
            "onUpdate:modelValue": t2[0] || (t2[0] = (n2) => isRef(a5) ? a5.value = n2 : null),
            collection: unref(r3),
            envVariables: unref(d6),
            environment: unref(v),
            operation: unref(l5),
            server: unref(p7),
            workspace: unref(i5),
            onHideModal: t2[1] || (t2[1] = () => unref(C4).hide()),
            onImportCurl: _2
          }, null, 8, ["modelValue", "collection", "envVariables", "environment", "operation", "server", "workspace"]),
          createVNode(u, null, {
            default: withCtx(() => [
              unref(m4) ? (openBlock(), createBlock(x2, {
                key: 0,
                class: normalizeClass(["flex-1", [unref(a5) ? "sidebar-active-hide-layout" : ""]])
              }, {
                default: withCtx(() => {
                  var n2;
                  return [
                    createVNode(a3, {
                      collection: unref(r3),
                      envVariables: unref(d6),
                      environment: unref(v),
                      example: unref(m4),
                      invalidParams: o.invalidParams,
                      operation: unref(l5),
                      selectedSecuritySchemeUids: o.selectedSecuritySchemeUids,
                      server: unref(p7),
                      workspace: unref(i5)
                    }, null, 8, ["collection", "envVariables", "environment", "example", "invalidParams", "operation", "selectedSecuritySchemeUids", "server", "workspace"]),
                    createVNode(s8, {
                      collection: unref(r3),
                      operation: unref(l5),
                      workspace: unref(i5),
                      requestResult: o.requestResult,
                      numWorkspaceRequests: unref(x8).length,
                      response: (n2 = w3.value) == null ? void 0 : n2.response
                    }, null, 8, ["collection", "operation", "workspace", "requestResult", "numWorkspaceRequests", "response"])
                  ];
                }),
                _: 1
              }, 8, ["class"])) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ])) : (openBlock(), createBlock(r, { key: 1 }))
      ])
    ], 2)) : (openBlock(), createBlock(r, { key: 1 }));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/Request.vue.js
var p6 = s(re, [["__scopeId", "data-v-cbe958dd"]]);
export {
  p6 as default
};
//# sourceMappingURL=Request.vue-5CPTG6QC.js.map
