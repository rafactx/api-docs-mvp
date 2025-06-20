import {
  $ as $2,
  i as i2,
  k,
  m as m3,
  require_mime_type
} from "./chunk-ZIUKF2I6.js";
import {
  O
} from "./chunk-JYVXE3FK.js";
import {
  x
} from "./chunk-QNF3OMLY.js";
import {
  E as E2,
  p as p2,
  y
} from "./chunk-VNWCMRO3.js";
import {
  _ as _3,
  d,
  f
} from "./chunk-AUM3FYPR.js";
import {
  e
} from "./chunk-64TJZ2DX.js";
import {
  s as s2
} from "./chunk-RDVDQCBW.js";
import {
  RouterLink
} from "./chunk-DWEZQID4.js";
import {
  je,
  p,
  requestExampleParametersSchema,
  s
} from "./chunk-ZNV4Z3VE.js";
import {
  b as b2
} from "./chunk-XAH4TE55.js";
import {
  $,
  A,
  E,
  H,
  I,
  Me,
  P,
  REGEX,
  REQUEST_METHODS,
  Se,
  T,
  _,
  _3 as _2,
  b2 as b,
  be,
  c2 as c,
  canMethodHaveBody,
  ge,
  httpStatusCodes,
  i2 as i,
  isDefined,
  m,
  m2,
  makeUrlAbsolute,
  mergeUrls,
  u,
  u2
} from "./chunk-OYO2YRBV.js";
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
  isRef,
  mergeModels,
  mergeProps,
  nextTick,
  normalizeClass,
  normalizeStyle,
  onMounted,
  openBlock,
  readonly,
  ref,
  renderList,
  renderSlot,
  resolveDynamicComponent,
  toDisplayString,
  unref,
  useId,
  useModel,
  vShow,
  watch,
  withCtx,
  withDirectives,
  withKeys,
  withModifiers
} from "./chunk-XQNPNIQJ.js";
import {
  __toESM
} from "./chunk-DC5AMYBS.js";

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/utils/create-search-params.js
var createSearchParams = (query = []) => {
  const searchParams = new URLSearchParams();
  query.forEach((q) => {
    searchParams.append(q.name, q.value);
  });
  return searchParams;
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/httpsnippet-lite/esm/helpers/code-builder.js
var DEFAULT_INDENTATION_CHARACTER = "";
var DEFAULT_LINE_JOIN = "\n";
var CodeBuilder = class {
  /**
   * Helper object to format and aggragate lines of code.
   * Lines are aggregated in a `code` array, and need to be joined to obtain a proper code snippet.
   */
  constructor({ indent: indent2, join } = {}) {
    this.postProcessors = [];
    this.code = [];
    this.indentationCharacter = DEFAULT_INDENTATION_CHARACTER;
    this.lineJoin = DEFAULT_LINE_JOIN;
    this.indentLine = (line, indentationLevel = 0) => {
      const whitespace = this.indentationCharacter.repeat(indentationLevel);
      return `${whitespace}${line}`;
    };
    this.unshift = (line, indentationLevel) => {
      const newLine = this.indentLine(line, indentationLevel);
      this.code.unshift(newLine);
    };
    this.push = (line, indentationLevel) => {
      const newLine = this.indentLine(line, indentationLevel);
      this.code.push(newLine);
    };
    this.blank = () => {
      this.code.push("");
    };
    this.join = () => {
      const unreplacedCode = this.code.join(this.lineJoin);
      const replacedOutput = this.postProcessors.reduce(
        (accumulator, replacer) => replacer(accumulator),
        unreplacedCode
      );
      return replacedOutput;
    };
    this.addPostProcessor = (postProcessor) => {
      this.postProcessors = [...this.postProcessors, postProcessor];
    };
    this.indentationCharacter = indent2 || DEFAULT_INDENTATION_CHARACTER;
    this.lineJoin = join !== null && join !== void 0 ? join : DEFAULT_LINE_JOIN;
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/httpsnippet-lite/esm/helpers/escape.js
function escapeString(rawValue, options = {}) {
  const { delimiter = '"', escapeChar = "\\", escapeNewlines = true } = options;
  const stringValue = rawValue.toString();
  return [...stringValue].map((c2) => {
    if (c2 === "\b") {
      return `${escapeChar}b`;
    }
    if (c2 === "	") {
      return `${escapeChar}t`;
    }
    if (c2 === "\n") {
      if (escapeNewlines) {
        return `${escapeChar}n`;
      }
      return c2;
    }
    if (c2 === "\f") {
      return `${escapeChar}f`;
    }
    if (c2 === "\r") {
      if (escapeNewlines) {
        return `${escapeChar}r`;
      }
      return c2;
    }
    if (c2 === escapeChar) {
      return escapeChar + escapeChar;
    }
    if (c2 === delimiter) {
      return escapeChar + delimiter;
    }
    if (c2 < " " || c2 > "~") {
      return JSON.stringify(c2).slice(1, -1);
    }
    return c2;
  }).join("");
}
var escapeForSingleQuotes = (value) => escapeString(value, { delimiter: "'" });
var escapeForDoubleQuotes = (value) => escapeString(value, { delimiter: '"' });

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/httpsnippet-lite/esm/targets/c/libcurl/client.js
var libcurl = {
  info: {
    key: "libcurl",
    title: "Libcurl",
    link: "http://curl.haxx.se/libcurl",
    description: "Simple REST and HTTP API Client for C"
  },
  convert: ({ method, fullUrl, headersObj, allHeaders, postData }) => {
    const { push, blank, join } = new CodeBuilder({ indent: "  " });
    push("CURL *hnd = curl_easy_init();");
    blank();
    push(
      `curl_easy_setopt(hnd, CURLOPT_CUSTOMREQUEST, "${method.toUpperCase()}");`
    );
    push(`curl_easy_setopt(hnd, CURLOPT_URL, "${fullUrl}");`);
    const headers = Object.keys(headersObj);
    if (headers.length) {
      blank();
      push("struct curl_slist *headers = NULL;");
      headers.forEach((header) => {
        if (headersObj[header]) {
          push(
            `headers = curl_slist_append(headers, "${header}: ${escapeForDoubleQuotes(headersObj[header])}");`
          );
        } else {
          push(`headers = curl_slist_append(headers, "${header};");`);
        }
      });
      push("curl_easy_setopt(hnd, CURLOPT_HTTPHEADER, headers);");
    }
    if (allHeaders.cookie) {
      blank();
      push(`curl_easy_setopt(hnd, CURLOPT_COOKIE, "${allHeaders.cookie}");`);
    }
    if (postData !== null && postData !== void 0) {
      blank();
      if (postData.text) {
        push(
          `curl_easy_setopt(hnd, CURLOPT_POSTFIELDS, ${JSON.stringify(postData.text)});`
        );
      } else if (postData.mimeType === "application/x-www-form-urlencoded" && postData.params) {
        push(
          `curl_easy_setopt(hnd, CURLOPT_POSTFIELDS, "${createSearchParams(postData.params).toString()}");`
        );
      } else if (postData.mimeType === "multipart/form-data" && postData.params) {
        push("curl_mime *mime = curl_mime_init(hnd);");
        postData.params.forEach((param) => {
          blank();
          push("{");
          push(`curl_mimepart *part = curl_mime_addpart(mime);`, 1);
          if (param.name) {
            push(`curl_mime_name(part, "${param.name}");`, 1);
          }
          if (param.fileName) {
            push(`curl_mime_filedata(part, "${param.fileName}");`, 1);
          } else if (param.value) {
            push(`curl_mime_data(part, "${escapeForDoubleQuotes(param.value)}", CURL_ZERO_TERMINATED);`, 1);
          }
          push("}");
        });
        blank();
        push("curl_easy_setopt(hnd, CURLOPT_MIMEPOST, mime);");
      }
    }
    blank();
    push("CURLcode ret = curl_easy_perform(hnd);");
    return join();
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/utils/convertWithHttpSnippetLite.js
function convertWithHttpSnippetLite(client, request) {
  var _a, _b, _c, _d;
  const urlObject = new URL((request == null ? void 0 : request.url) ?? "");
  const url = urlObject.pathname === "/" ? urlObject.origin : urlObject.toString();
  const harRequest = {
    method: (request == null ? void 0 : request.method) ?? "GET",
    url,
    httpVersion: "HTTP/1.1",
    cookies: [],
    // Cookies are handled through headers
    headers: (request == null ? void 0 : request.headers) ?? [],
    headersSize: -1,
    bodySize: -1,
    queryString: Array.from(urlObject.searchParams.entries()).map(([name, value]) => ({
      name,
      value
    })),
    postData: request == null ? void 0 : request.postData
  };
  const allHeaders = ((harRequest == null ? void 0 : harRequest.headers) ?? []).reduce(
    (acc, header) => ({
      ...acc,
      [header.name]: header.value
    }),
    {}
  );
  const queryObj = (harRequest.queryString ?? []).reduce(
    (acc, param) => ({
      ...acc,
      [param.name]: param.value
    }),
    {}
  );
  const cookiesObj = (harRequest.cookies ?? []).reduce(
    (acc, cookie) => ({
      ...acc,
      [cookie.name]: cookie.value
    }),
    {}
  );
  const parsedUrl = new URL(harRequest.url);
  const uriObj = {
    protocol: parsedUrl.protocol,
    hostname: parsedUrl.hostname,
    host: parsedUrl.hostname,
    port: parsedUrl.port,
    pathname: parsedUrl.pathname.split("/").map((segment) => encodeURIComponent(decodeURIComponent(segment))).join("/") + parsedUrl.search,
    path: parsedUrl.pathname.split("/").map((segment) => encodeURIComponent(decodeURIComponent(segment))).join("/") + parsedUrl.search,
    search: parsedUrl.search,
    hash: parsedUrl.hash,
    href: parsedUrl.href,
    origin: parsedUrl.origin,
    password: parsedUrl.password,
    searchParams: parsedUrl.searchParams,
    username: parsedUrl.username,
    toString: parsedUrl.toString,
    toJSON: () => parsedUrl.toJSON()
  };
  const convertRequest = {
    url: harRequest.url,
    uriObj,
    method: ((_a = harRequest.method) == null ? void 0 : _a.toLocaleUpperCase()) ?? "GET",
    httpVersion: harRequest.httpVersion,
    cookies: harRequest.cookies ?? [],
    headers: harRequest.headers ?? [],
    headersSize: harRequest.headersSize ?? 0,
    headersObj: allHeaders ?? {},
    bodySize: harRequest.bodySize ?? 0,
    queryString: harRequest.queryString ?? [],
    postData: harRequest.postData ? {
      mimeType: harRequest.postData.mimeType ?? "application/json",
      text: harRequest.postData.text ?? "",
      params: harRequest.postData.params ?? [],
      paramsObj: ((_b = harRequest.postData.params) == null ? void 0 : _b.reduce(
        (acc, param) => {
          if (param.name && param.value !== void 0) {
            acc[param.name] = param.value;
          }
          return acc;
        },
        {}
      )) ?? {}
    } : void 0,
    allHeaders: allHeaders ?? {},
    fullUrl: harRequest.url,
    queryObj: queryObj ?? {},
    cookiesObj: cookiesObj ?? {}
  };
  if (((_c = convertRequest.postData) == null ? void 0 : _c.mimeType) === "application/json" && ((_d = convertRequest.postData) == null ? void 0 : _d.text)) {
    try {
      convertRequest.postData.jsonObj = JSON.parse(convertRequest.postData.text);
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  }
  if (typeof client.convert === "function") {
    return client.convert(convertRequest);
  }
  return "";
}

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/plugins/c/libcurl/libcurl.js
var cLibcurl = {
  target: "c",
  client: "libcurl",
  title: "Libcurl",
  generate(request) {
    return convertWithHttpSnippetLite(libcurl, request);
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/httpsnippet-lite/esm/helpers/headers.js
var getHeaderName = (headers, name) => Object.keys(headers).find(
  (header) => header.toLowerCase() === name.toLowerCase()
);
var getHeader = (headers, name) => {
  const headerName = getHeaderName(headers, name);
  if (!headerName) {
    return void 0;
  }
  return headers[headerName];
};
var hasHeader = (headers, name) => Boolean(getHeaderName(headers, name));

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/httpsnippet-lite/esm/targets/clojure/clj_http/client.js
var Keyword = class {
  constructor(name) {
    this.name = "";
    this.toString = () => `:${this.name}`;
    this.name = name;
  }
};
var File = class {
  constructor(path) {
    this.path = "";
    this.toString = () => `(clojure.java.io/file "${this.path}")`;
    this.path = path;
  }
};
var jsType = (input) => {
  if (input === void 0) {
    return null;
  }
  if (input === null) {
    return "null";
  }
  return input.constructor.name.toLowerCase();
};
var objEmpty = (input) => {
  if (jsType(input) === "object") {
    return Object.keys(input).length === 0;
  }
  return false;
};
var filterEmpty = (input) => {
  Object.keys(input).filter((x3) => objEmpty(input[x3])).forEach((x3) => {
    delete input[x3];
  });
  return input;
};
var padBlock = (padSize, input) => {
  const padding = " ".repeat(padSize);
  return input.replace(/\n/g, `
${padding}`);
};
var jsToEdn = (js) => {
  switch (jsType(js)) {
    case "string":
      return `"${js.replace(/"/g, '\\"')}"`;
    case "file":
      return js.toString();
    case "keyword":
      return js.toString();
    case "null":
      return "nil";
    case "regexp":
      return `#"${js.source}"`;
    case "object": {
      const obj = Object.keys(js).reduce((accumulator, key) => {
        const val = padBlock(key.length + 2, jsToEdn(js[key]));
        return `${accumulator}:${key} ${val}
 `;
      }, "").trim();
      return `{${padBlock(1, obj)}}`;
    }
    case "array": {
      const arr = js.reduce((accumulator, value) => `${accumulator} ${jsToEdn(value)}`, "").trim();
      return `[${padBlock(1, arr)}]`;
    }
    default:
      return js.toString();
  }
};
var clj_http = {
  info: {
    key: "clj_http",
    title: "clj-http",
    link: "https://github.com/dakrone/clj-http",
    description: "An idiomatic clojure http client wrapping the apache client."
  },
  convert: ({ queryObj, method, postData, url, allHeaders }, options) => {
    const { push, join } = new CodeBuilder({
      indent: options === null || options === void 0 ? void 0 : options.indent
    });
    const methods = ["get", "post", "put", "delete", "patch", "head", "options"];
    method = method.toLowerCase();
    if (!methods.includes(method)) {
      push("Method not supported");
      return join();
    }
    const params = {
      "headers": allHeaders,
      "query-params": queryObj
    };
    if (queryObj && Object.keys(queryObj).length > 0) {
      url = url.split("?")[0];
    }
    switch (postData === null || postData === void 0 ? void 0 : postData.mimeType) {
      case "application/json":
        {
          params["content-type"] = new Keyword("json");
          params["form-params"] = postData.jsonObj;
          const header = getHeaderName(params.headers, "content-type");
          if (header) {
            delete params.headers[header];
          }
        }
        break;
      case "application/x-www-form-urlencoded":
        {
          params["form-params"] = postData.paramsObj;
          const header = getHeaderName(params.headers, "content-type");
          if (header) {
            delete params.headers[header];
          }
        }
        break;
      case "text/plain":
        {
          params.body = postData.text;
          const header = getHeaderName(params.headers, "content-type");
          if (header) {
            delete params.headers[header];
          }
        }
        break;
      case "multipart/form-data": {
        if (postData.params) {
          params.multipart = postData.params.map((param) => {
            if (param.fileName && !param.value) {
              return {
                name: param.name,
                content: new File(param.fileName)
              };
            }
            return {
              name: param.name,
              content: param.value
            };
          });
          const header = getHeaderName(params.headers, "content-type");
          if (header) {
            delete params.headers[header];
          }
        }
        break;
      }
    }
    switch (getHeader(params.headers, "accept")) {
      case "application/json":
        {
          params.accept = new Keyword("json");
          const header = getHeaderName(params.headers, "accept");
          if (header) {
            delete params.headers[header];
          }
        }
        break;
    }
    push("(require '[clj-http.client :as client])\n");
    if (objEmpty(filterEmpty(params))) {
      push(`(client/${method} "${url}")`);
    } else {
      const padding = 11 + method.length + url.length;
      const formattedParams = padBlock(padding, jsToEdn(filterEmpty(params)));
      push(`(client/${method} "${url}" ${formattedParams})`);
    }
    return join();
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/plugins/clojure/clj_http/clj_http.js
var clojureCljhttp = {
  target: "clojure",
  client: "clj_http",
  title: "clj-http",
  generate(request) {
    return convertWithHttpSnippetLite(clj_http, request);
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/httpsnippet-lite/esm/targets/csharp/httpclient/client.js
var getDecompressionMethods = (allHeaders) => {
  let acceptEncodings = getHeader(allHeaders, "accept-encoding");
  if (!acceptEncodings) {
    return [];
  }
  const supportedMethods = {
    gzip: "DecompressionMethods.GZip",
    deflate: "DecompressionMethods.Deflate"
  };
  const methods = [];
  if (typeof acceptEncodings === "string") {
    acceptEncodings = [acceptEncodings];
  }
  acceptEncodings.forEach((acceptEncoding) => {
    acceptEncoding.split(",").forEach((encoding) => {
      const match = /\s*([^;\s]+)/.exec(encoding);
      if (match) {
        const method = supportedMethods[match[1]];
        if (method) {
          methods.push(method);
        }
      }
    });
  });
  return methods;
};
var httpclient = {
  info: {
    key: "httpclient",
    title: "HttpClient",
    link: "https://docs.microsoft.com/en-us/dotnet/api/system.net.http.httpclient",
    description: ".NET Standard HTTP Client"
  },
  convert: ({ allHeaders, postData, method, fullUrl }, options) => {
    let _a, _b;
    const opts = {
      indent: "    ",
      ...options
    };
    const { push, join } = new CodeBuilder({ indent: opts.indent });
    push("using System.Net.Http.Headers;");
    let clienthandler = "";
    const cookies = Boolean(allHeaders.cookie);
    const decompressionMethods = getDecompressionMethods(allHeaders);
    if (cookies || decompressionMethods.length) {
      clienthandler = "clientHandler";
      push("var clientHandler = new HttpClientHandler");
      push("{");
      if (cookies) {
        push("UseCookies = false,", 1);
      }
      if (decompressionMethods.length) {
        push(`AutomaticDecompression = ${decompressionMethods.join(" | ")},`, 1);
      }
      push("};");
    }
    push(`var client = new HttpClient(${clienthandler});`);
    push("var request = new HttpRequestMessage");
    push("{");
    const methods = [
      "GET",
      "POST",
      "PUT",
      "DELETE",
      "PATCH",
      "HEAD",
      "OPTIONS",
      "TRACE"
    ];
    method = method.toUpperCase();
    if (method && methods.includes(method)) {
      method = `HttpMethod.${method[0]}${method.substring(1).toLowerCase()}`;
    } else {
      method = `new HttpMethod("${method}")`;
    }
    push(`Method = ${method},`, 1);
    push(`RequestUri = new Uri("${fullUrl}"),`, 1);
    const headers = Object.keys(allHeaders).filter((header) => {
      switch (header.toLowerCase()) {
        case "content-type":
        case "content-length":
        case "accept-encoding":
          return false;
        default:
          return true;
      }
    });
    if (headers.length) {
      push("Headers =", 1);
      push("{", 1);
      headers.forEach((key) => {
        push(`{ "${key}", "${escapeForDoubleQuotes(allHeaders[key])}" },`, 2);
      });
      push("},", 1);
    }
    if (postData === null || postData === void 0 ? void 0 : postData.text) {
      const contentType = postData.mimeType;
      switch (contentType) {
        case "application/x-www-form-urlencoded":
          push(
            "Content = new FormUrlEncodedContent(new Dictionary<string, string>",
            1
          );
          push("{", 1);
          (_a = postData.params) === null || _a === void 0 ? void 0 : _a.forEach((param) => {
            push(`{ "${param.name}", "${param.value}" },`, 2);
          });
          push("}),", 1);
          break;
        case "multipart/form-data":
          push("Content = new MultipartFormDataContent", 1);
          push("{", 1);
          (_b = postData.params) === null || _b === void 0 ? void 0 : _b.forEach((param) => {
            push(
              `new StringContent(${JSON.stringify(param.value || "")})`,
              2
            );
            push("{", 2);
            push("Headers =", 3);
            push("{", 3);
            if (param.contentType) {
              push(
                `ContentType = new MediaTypeHeaderValue("${param.contentType}"),`,
                4
              );
            }
            push(
              'ContentDisposition = new ContentDispositionHeaderValue("form-data")',
              4
            );
            push("{", 4);
            push(`Name = "${param.name}",`, 5);
            if (param.fileName) {
              push(`FileName = "${param.fileName}",`, 5);
            }
            push("}", 4);
            push("}", 3);
            push("},", 2);
          });
          push("},", 1);
          break;
        default:
          push(
            `Content = new StringContent(${JSON.stringify((postData === null || postData === void 0 ? void 0 : postData.text) || "")})`,
            1
          );
          push("{", 1);
          push("Headers =", 2);
          push("{", 2);
          push(`ContentType = new MediaTypeHeaderValue("${contentType}")`, 3);
          push("}", 2);
          push("}", 1);
          break;
      }
    }
    push("};");
    push("using (var response = await client.SendAsync(request))");
    push("{");
    push("response.EnsureSuccessStatusCode();", 1);
    push("var body = await response.Content.ReadAsStringAsync();", 1);
    push("Console.WriteLine(body);", 1);
    push("}");
    return join();
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/plugins/csharp/httpclient/httpclient.js
var csharpHttpclient = {
  target: "csharp",
  client: "httpclient",
  title: "HttpClient",
  generate(request) {
    return convertWithHttpSnippetLite(httpclient, request);
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/httpsnippet-lite/esm/targets/csharp/restsharp/client.js
var restsharp = {
  info: {
    key: "restsharp",
    title: "RestSharp",
    link: "http://restsharp.org/",
    description: "Simple REST and HTTP API Client for .NET"
  },
  convert: ({ allHeaders, method, fullUrl, headersObj, cookies, postData }) => {
    const { push, join } = new CodeBuilder();
    const isSupportedMethod = [
      "GET",
      "POST",
      "PUT",
      "DELETE",
      "PATCH",
      "HEAD",
      "OPTIONS"
    ].includes(method.toUpperCase());
    if (!isSupportedMethod) {
      return "Method not supported";
    }
    push(`var client = new RestClient("${fullUrl}");`);
    push(`var request = new RestRequest(Method.${method.toUpperCase()});`);
    Object.keys(headersObj).forEach((key) => {
      push(
        `request.AddHeader("${key}", "${escapeForDoubleQuotes(headersObj[key])}");`
      );
    });
    cookies === null || cookies === void 0 ? void 0 : cookies.forEach(({ name, value }) => {
      push(`request.AddCookie("${name}", "${value}");`);
    });
    if (postData === null || postData === void 0 ? void 0 : postData.text) {
      const header = getHeader(allHeaders, "content-type");
      const text = JSON.stringify(postData.text);
      push(
        `request.AddParameter("${header}", ${text}, ParameterType.RequestBody);`
      );
    }
    push("IRestResponse response = client.Execute(request);");
    return join();
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/plugins/csharp/restsharp/restsharp.js
var csharpRestsharp = {
  target: "csharp",
  client: "restsharp",
  title: "RestSharp",
  generate(request) {
    return convertWithHttpSnippetLite(restsharp, request);
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/plugins/dart/http/http.js
var dartHttp = {
  target: "dart",
  client: "http",
  title: "Http",
  generate(request, options) {
    var _a, _b, _c;
    const normalizedRequest = {
      method: "GET",
      ...request
    };
    normalizedRequest.method = normalizedRequest.method.toUpperCase();
    let code = `import 'package:http/http.dart' as http;

void main() async {
`;
    let cookieHeader = "";
    let cookieString = "";
    if (normalizedRequest.cookies && normalizedRequest.cookies.length > 0) {
      cookieString = normalizedRequest.cookies.map((cookie) => `${encodeURIComponent(cookie.name)}=${encodeURIComponent(cookie.value)}`).join("; ");
      cookieHeader = `  "Cookie": "${cookieString}",
`;
    }
    const headers = ((_a = normalizedRequest.headers) == null ? void 0 : _a.reduce(
      (acc, header) => {
        if (header.value && !/[; ]/.test(header.name)) {
          acc[header.name] = header.value;
        }
        return acc;
      },
      {}
    )) || {};
    if (options == null ? void 0 : options.auth) {
      const { username, password } = options.auth;
      if (username && password) {
        const credentials = `${username}:${password}`;
        headers["Authorization"] = `'Basic ' + base64Encode(utf8.encode('${credentials}'))`;
      }
    }
    if (cookieHeader) {
      headers["Cookie"] = cookieString;
    }
    if (Object.keys(headers).length > 0) {
      code += "  final headers = <String,String>{\n";
      for (const [key, value] of Object.entries(headers)) {
        if (value.includes("utf8.encode")) {
          code += `    '${key}': ${value},
`;
        } else {
          code += `    '${key}': '${value}',
`;
        }
      }
      code += "  };\n\n";
    }
    const queryString = ((_b = normalizedRequest.queryString) == null ? void 0 : _b.length) ? "?" + normalizedRequest.queryString.map((param) => `${encodeURIComponent(param.name)}=${encodeURIComponent(param.value)}`).join("&") : "";
    const url = `${normalizedRequest.url}${queryString}`;
    let body = "";
    if (normalizedRequest.postData) {
      if (normalizedRequest.postData.mimeType === "application/json") {
        body = `  final body = r'${normalizedRequest.postData.text}';

`;
      } else if (normalizedRequest.postData.mimeType === "application/x-www-form-urlencoded") {
        body = `  final body = '${((_c = normalizedRequest.postData.params) == null ? void 0 : _c.map((param) => `${encodeURIComponent(param.name)}=${encodeURIComponent(param.value ?? "")}`).join("&")) || ""}';

`;
      } else if (normalizedRequest.postData.mimeType === "multipart/form-data") {
        body = "  final body = <String,String>{\n";
        for (const param of normalizedRequest.postData.params || []) {
          const value = param.value || "";
          const fileName = param.fileName || "";
          body += `    '${param.name}': '${fileName || value}',
`;
        }
        body += "  };\n\n";
      } else if (normalizedRequest.postData.mimeType === "application/octet-stream") {
        body = `  final body = '${normalizedRequest.postData.text}';

`;
      }
    }
    if (body) {
      code += body;
    }
    const method = normalizedRequest.method.toLowerCase();
    const headersPart = Object.keys(headers).length > 0 ? ", headers: headers" : "";
    const bodyPart = body ? ", body: body" : "";
    code += `  final response = await http.${method}(Uri.parse('${url}')${headersPart}${bodyPart});
`;
    code += "  print(response.body);\n";
    code += "}";
    return code;
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/httpsnippet-lite/esm/targets/go/native/client.js
var native = {
  info: {
    key: "native",
    title: "NewRequest",
    link: "http://golang.org/pkg/net/http/#NewRequest",
    description: "Golang HTTP client request"
  },
  convert: ({ postData, method, allHeaders, fullUrl }, options = {}) => {
    const { blank, push, join, addPostProcessor } = new CodeBuilder({ indent: "	" });
    const {
      showBoilerplate = true,
      checkErrors = false,
      printBody = true,
      timeout = -1,
      insecureSkipVerify = false
    } = options;
    const errorPlaceholder = checkErrors ? "err" : "_";
    const indent2 = showBoilerplate ? 1 : 0;
    const errorCheck = () => {
      if (checkErrors) {
        push("if err != nil {", indent2);
        push("panic(err)", indent2 + 1);
        push("}", indent2);
      }
    };
    const imports = /* @__PURE__ */ new Set();
    if (showBoilerplate) {
      push("package main");
      blank();
      push("import ()");
      addPostProcessor((code) => {
        const importArray = [...imports];
        importArray.sort();
        const importBlock = importArray.map((line) => `	"${line}"`).join("\n");
        return code.replace(/import \(\)/, `import (
${importBlock}
)`);
      });
      imports.add("fmt");
      imports.add("net/http");
      blank();
      push("func main() {");
    }
    if (insecureSkipVerify) {
      imports.add("crypto/tls");
      push(
        "insecureTransport := http.DefaultTransport.(*http.Transport).Clone()",
        indent2
      );
      push(
        "insecureTransport.TLSClientConfig = &tls.Config{InsecureSkipVerify: true}",
        indent2
      );
    }
    const hasTimeout = timeout > 0;
    const hasClient = hasTimeout || insecureSkipVerify;
    const client = hasClient ? "client" : "http.DefaultClient";
    if (hasClient) {
      push("client := http.Client{", indent2);
      if (hasTimeout) {
        imports.add("time");
        push(`Timeout: time.Duration(${timeout} * time.Second),`, indent2 + 1);
      }
      if (insecureSkipVerify) {
        push("Transport: insecureTransport,", indent2 + 1);
      }
      push("}", indent2);
      blank();
    }
    push(`url := "${fullUrl}"`, indent2);
    blank();
    if (postData !== null && postData !== void 0 && (postData.params || postData.text)) {
      if (postData.mimeType === "application/x-www-form-urlencoded" && postData.params) {
        imports.add("net/url");
        imports.add("strings");
        push("postData := url.Values{}", indent2);
        postData.params.forEach((param) => {
          push(
            `postData.Set("${param.name}", "${escapeForDoubleQuotes(param.value)}")`,
            indent2
          );
        });
        blank();
        push(
          `req, ${errorPlaceholder} := http.NewRequest("${method}", url, strings.NewReader(postData.Encode()))`,
          indent2
        );
      } else if (postData.mimeType === "multipart/form-data" && postData.params) {
        imports.add("bytes");
        imports.add("mime/multipart");
        push("payload := &bytes.Buffer{}", indent2);
        push("writer := multipart.NewWriter(payload)", indent2);
        postData.params.forEach((param) => {
          blank();
          if (param.fileName) {
            push(`part, ${errorPlaceholder} := writer.CreateFormFile("${param.name}", "${param.fileName}")`, indent2);
            errorCheck();
            blank();
            push(`f, ${errorPlaceholder} := os.Open("${param.fileName}")`, indent2);
            errorCheck();
            push("defer f.Close()", indent2);
            blank();
            push(`_, ${errorPlaceholder} = io.Copy(part, f)`, indent2);
            errorCheck();
          } else {
            push(`${errorPlaceholder} = writer.WriteField("${param.name}", "${escapeForDoubleQuotes(param.value)}")`, indent2);
            errorCheck();
          }
        });
        push("writer.Close()", indent2);
        blank();
        push(
          `req, ${errorPlaceholder} := http.NewRequest("${method}", url, payload)`,
          indent2
        );
      } else {
        imports.add("strings");
        push(
          `payload := strings.NewReader(${JSON.stringify(postData.text)})`,
          indent2
        );
        blank();
        push(
          `req, ${errorPlaceholder} := http.NewRequest("${method}", url, payload)`,
          indent2
        );
      }
    } else {
      push(
        `req, ${errorPlaceholder} := http.NewRequest("${method}", url, nil)`,
        indent2
      );
    }
    errorCheck();
    blank();
    if (postData !== null && postData !== void 0 && postData.mimeType === "multipart/form-data" && postData.params) {
      push(`req.Header.Set("Content-Type", writer.FormDataContentType())`, indent2);
    }
    if (Object.keys(allHeaders).length) {
      Object.keys(allHeaders).forEach((key) => {
        push(
          `req.Header.Add("${key}", "${escapeForDoubleQuotes(allHeaders[key])}")`,
          indent2
        );
      });
      blank();
    }
    push(`res, ${errorPlaceholder} := ${client}.Do(req)`, indent2);
    errorCheck();
    if (printBody) {
      imports.add("io");
      blank();
      push("defer res.Body.Close()", indent2);
      push(`body, ${errorPlaceholder} := io.ReadAll(res.Body)`, indent2);
      errorCheck();
    }
    blank();
    push("fmt.Println(res)", indent2);
    if (printBody) {
      push("fmt.Println(string(body))", indent2);
    }
    if (showBoilerplate) {
      blank();
      push("}");
    }
    return join();
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/plugins/go/native/native.js
var goNative = {
  target: "go",
  client: "native",
  title: "NewRequest",
  generate(request) {
    return convertWithHttpSnippetLite(native, request);
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/plugins/http/http11/http11.js
var httpHttp11 = {
  target: "http",
  client: "http1.1",
  title: "HTTP/1.1",
  generate(request) {
    const normalizedRequest = {
      method: "GET",
      headers: [],
      queryString: [],
      ...request
    };
    normalizedRequest.method = normalizedRequest.method.toUpperCase();
    let url;
    let path;
    try {
      url = new URL(normalizedRequest.url || "http://");
      path = url.pathname + (url.search || "");
    } catch (_error) {
      path = normalizedRequest.url || "/";
    }
    const hostname = (url == null ? void 0 : url.hostname) || "UNKNOWN_HOSTNAME";
    let requestString = `${normalizedRequest.method} ${path} HTTP/1.1\r
`;
    if (normalizedRequest.queryString.length) {
      const queryString = normalizedRequest.queryString.map((param) => `${encodeURIComponent(param.name)}=${encodeURIComponent(param.value)}`).join("&");
      requestString = `${normalizedRequest.method} ${path}?${queryString} HTTP/1.1\r
`;
    }
    const headers = /* @__PURE__ */ new Map();
    headers.set("Host", hostname);
    normalizedRequest.headers.forEach((header) => {
      if (headers.has(header.name)) {
        headers.set(header.name, `${headers.get(header.name)}, ${header.value}`);
      } else {
        headers.set(header.name, header.value);
      }
    });
    if (normalizedRequest.queryString.length) {
      const queryString = normalizedRequest.queryString.map((param) => `${encodeURIComponent(param.name)}=${encodeURIComponent(param.value)}`).join("&");
      requestString = `${normalizedRequest.method} ${path}?${queryString} HTTP/1.1\r
`;
    }
    let body = "";
    if (normalizedRequest.postData) {
      if (normalizedRequest.postData.mimeType === "application/json" && normalizedRequest.postData.text) {
        headers.set("Content-Type", "application/json");
        body = normalizedRequest.postData.text;
      } else if (normalizedRequest.postData.mimeType === "application/octet-stream" && normalizedRequest.postData.text) {
        headers.set("Content-Type", "application/octet-stream");
        body = normalizedRequest.postData.text;
      } else if (normalizedRequest.postData.mimeType === "application/x-www-form-urlencoded" && normalizedRequest.postData.params) {
        const formData = normalizedRequest.postData.params.map((param) => `${encodeURIComponent(param.name)}=${encodeURIComponent(param.value ?? "")}`).join("&");
        headers.set("Content-Type", "application/x-www-form-urlencoded");
        body = formData;
      } else if (normalizedRequest.postData.mimeType === "multipart/form-data" && normalizedRequest.postData.params) {
        const boundary = "----WebKitFormBoundary7MA4YWxkTrZu0gW";
        headers.set("Content-Type", `multipart/form-data; boundary=${boundary}`);
        body = normalizedRequest.postData.params.map((param) => {
          if (param.fileName) {
            return `--${boundary}\r
Content-Disposition: form-data; name="${param.name}"; filename="${param.fileName}"\r
\r
`;
          }
          return `--${boundary}\r
Content-Disposition: form-data; name="${param.name}"\r
\r
${param.value}\r
`;
        }).join("") + `--${boundary}--\r
`;
      }
    }
    headers.forEach((value, name) => {
      requestString += `${name}: ${value}\r
`;
    });
    requestString += `\r
${body}`;
    return requestString;
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/httpsnippet-lite/esm/targets/java/asynchttp/client.js
var asynchttp = {
  info: {
    key: "asynchttp",
    title: "AsyncHttp",
    link: "https://github.com/AsyncHttpClient/async-http-client",
    description: "Asynchronous Http and WebSocket Client library for Java"
  },
  convert: ({ method, allHeaders, postData, fullUrl }, options) => {
    const opts = {
      indent: "  ",
      ...options
    };
    const { blank, push, join } = new CodeBuilder({ indent: opts.indent });
    push("AsyncHttpClient client = new DefaultAsyncHttpClient();");
    push(`client.prepare("${method.toUpperCase()}", "${fullUrl}")`);
    Object.keys(allHeaders).forEach((key) => {
      push(
        `.setHeader("${key}", "${escapeForDoubleQuotes(allHeaders[key])}")`,
        1
      );
    });
    if (postData === null || postData === void 0 ? void 0 : postData.text) {
      push(`.setBody(${JSON.stringify(postData.text)})`, 1);
    }
    push(".execute()", 1);
    push(".toCompletableFuture()", 1);
    push(".thenAccept(System.out::println)", 1);
    push(".join();", 1);
    blank();
    push("client.close();");
    return join();
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/plugins/java/asynchttp/asynchttp.js
var javaAsynchttp = {
  target: "java",
  client: "asynchttp",
  title: "AsyncHttp",
  generate(request) {
    return convertWithHttpSnippetLite(asynchttp, request);
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/httpsnippet-lite/esm/targets/java/nethttp/client.js
var nethttp = {
  info: {
    key: "nethttp",
    title: "java.net.http",
    link: "https://openjdk.java.net/groups/net/httpclient/intro.html",
    description: "Java Standardized HTTP Client API"
  },
  convert: ({ allHeaders, fullUrl, method, postData }, options) => {
    const opts = {
      indent: "  ",
      ...options
    };
    const { push, join } = new CodeBuilder({ indent: opts.indent });
    push("HttpRequest request = HttpRequest.newBuilder()");
    push(`.uri(URI.create("${fullUrl}"))`, 2);
    Object.keys(allHeaders).forEach((key) => {
      push(`.header("${key}", "${escapeForDoubleQuotes(allHeaders[key])}")`, 2);
    });
    if (postData === null || postData === void 0 ? void 0 : postData.text) {
      push(
        `.method("${method.toUpperCase()}", HttpRequest.BodyPublishers.ofString(${JSON.stringify(postData.text)}))`,
        2
      );
    } else {
      push(
        `.method("${method.toUpperCase()}", HttpRequest.BodyPublishers.noBody())`,
        2
      );
    }
    push(".build();", 2);
    push(
      "HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());"
    );
    push("System.out.println(response.body());");
    return join();
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/plugins/java/nethttp/nethttp.js
var javaNethttp = {
  target: "java",
  client: "nethttp",
  title: "java.net.http",
  generate(request) {
    return convertWithHttpSnippetLite(nethttp, request);
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/httpsnippet-lite/esm/targets/java/okhttp/client.js
var okhttp = {
  info: {
    key: "okhttp",
    title: "OkHttp",
    link: "http://square.github.io/okhttp/",
    description: "An HTTP Request Client Library"
  },
  convert: ({ postData, method, fullUrl, allHeaders }, options) => {
    const opts = {
      indent: "  ",
      ...options
    };
    const { push, blank, join } = new CodeBuilder({ indent: opts.indent });
    const methods = ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"];
    const methodsWithBody = ["POST", "PUT", "DELETE", "PATCH"];
    push("OkHttpClient client = new OkHttpClient();");
    blank();
    if (postData !== null && postData !== void 0) {
      if (postData.mimeType === "application/x-www-form-urlencoded" && postData.params) {
        push("FormBody formBody = new FormBody.Builder()");
        postData.params.forEach((param) => {
          push(`.addEncoded("${param.name}", "${param.value}")`, 1);
        });
        push(".build();", 1);
        blank();
      } else if (postData.mimeType === "multipart/form-data" && postData.params) {
        push(`MultipartBody body = new MultipartBody.Builder()`);
        push(`.setType(MultipartBody.FORM)`, 1);
        postData.params.forEach((param) => {
          if (param.fileName !== void 0) {
            push(
              `.addFormDataPart("${param.name}", "${param.fileName}", RequestBody.create(MediaType.parse("application/octet-stream"), new File("${param.fileName}")))`,
              1
            );
          } else if (param.value !== void 0) {
            push(`.addFormDataPart("${param.name}", "${param.value}")`, 1);
          }
        });
        push(".build();", 1);
        blank();
      } else {
        push(`MediaType mediaType = MediaType.parse("${postData.mimeType}");`);
        push(`RequestBody body = RequestBody.create(mediaType, ${JSON.stringify(postData.text)});`);
      }
    }
    push("Request request = new Request.Builder()");
    push(`.url("${fullUrl}")`, 1);
    if (!methods.includes(method.toUpperCase())) {
      if (postData === null || postData === void 0 ? void 0 : postData.text) {
        push(`.method("${method.toUpperCase()}", body)`, 1);
      } else {
        push(`.method("${method.toUpperCase()}", null)`, 1);
      }
    } else if (methodsWithBody.includes(method.toUpperCase())) {
      if (postData === null || postData === void 0 ? void 0 : postData.text || postData.params) {
        push(`.${method.toLowerCase()}(body)`, 1);
      } else {
        push(`.${method.toLowerCase()}(null)`, 1);
      }
    } else {
      push(`.${method.toLowerCase()}()`, 1);
    }
    Object.keys(allHeaders).forEach((key) => {
      push(
        `.addHeader("${key}", "${escapeForDoubleQuotes(allHeaders[key])}")`,
        1
      );
    });
    push(".build();", 1);
    blank();
    push("Response response = client.newCall(request).execute();");
    return join();
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/plugins/java/okhttp/okhttp.js
var javaOkhttp = {
  target: "java",
  client: "okhttp",
  title: "OkHttp",
  generate(request) {
    return convertWithHttpSnippetLite(okhttp, request);
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/httpsnippet-lite/esm/targets/java/unirest/client.js
var unirest = {
  info: {
    key: "unirest",
    title: "Unirest",
    link: "http://unirest.io/java.html",
    description: "Lightweight HTTP Request Client Library"
  },
  convert: ({ method, allHeaders, postData, fullUrl }, options) => {
    const opts = {
      indent: "  ",
      ...options
    };
    const { join, push } = new CodeBuilder({ indent: opts.indent });
    const methods = ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"];
    if (!methods.includes(method.toUpperCase())) {
      push(
        `HttpResponse<String> response = Unirest.customMethod("${method.toUpperCase()}","${fullUrl}")`
      );
    } else {
      push(
        `HttpResponse<String> response = Unirest.${method.toLowerCase()}("${fullUrl}")`
      );
    }
    Object.keys(allHeaders).forEach((key) => {
      push(`.header("${key}", "${escapeForDoubleQuotes(allHeaders[key])}")`, 1);
    });
    if (postData === null || postData === void 0 ? void 0 : postData.text) {
      push(`.body(${JSON.stringify(postData.text)})`, 1);
    }
    push(".asString();", 1);
    return join();
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/plugins/java/unirest/unirest.js
var javaUnirest = {
  target: "java",
  client: "unirest",
  title: "Unirest",
  generate(request) {
    return convertWithHttpSnippetLite(unirest, request);
  }
};

// node_modules/.pnpm/is-regexp@3.1.0/node_modules/is-regexp/index.js
var { toString } = Object.prototype;
function isRegexp(value) {
  return toString.call(value) === "[object RegExp]";
}

// node_modules/.pnpm/is-obj@3.0.0/node_modules/is-obj/index.js
function isObject(value) {
  const type = typeof value;
  return value !== null && (type === "object" || type === "function");
}

// node_modules/.pnpm/get-own-enumerable-keys@1.0.0/node_modules/get-own-enumerable-keys/index.js
var { propertyIsEnumerable } = Object.prototype;
function getOwnEnumerableKeys(object) {
  return [
    ...Object.keys(object),
    ...Object.getOwnPropertySymbols(object).filter((key) => propertyIsEnumerable.call(object, key))
  ];
}

// node_modules/.pnpm/stringify-object@5.0.0/node_modules/stringify-object/index.js
function stringifyObject(input, options, pad) {
  const seen = [];
  return function stringify(input2, options2 = {}, pad2 = "") {
    const indent2 = options2.indent || "	";
    let tokens;
    if (options2.inlineCharacterLimit === void 0) {
      tokens = {
        newline: "\n",
        newlineOrSpace: "\n",
        pad: pad2,
        indent: pad2 + indent2
      };
    } else {
      tokens = {
        newline: "@@__STRINGIFY_OBJECT_NEW_LINE__@@",
        newlineOrSpace: "@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",
        pad: "@@__STRINGIFY_OBJECT_PAD__@@",
        indent: "@@__STRINGIFY_OBJECT_INDENT__@@"
      };
    }
    const expandWhiteSpace = (string) => {
      if (options2.inlineCharacterLimit === void 0) {
        return string;
      }
      const oneLined = string.replace(new RegExp(tokens.newline, "g"), "").replace(new RegExp(tokens.newlineOrSpace, "g"), " ").replace(new RegExp(tokens.pad + "|" + tokens.indent, "g"), "");
      if (oneLined.length <= options2.inlineCharacterLimit) {
        return oneLined;
      }
      return string.replace(new RegExp(tokens.newline + "|" + tokens.newlineOrSpace, "g"), "\n").replace(new RegExp(tokens.pad, "g"), pad2).replace(new RegExp(tokens.indent, "g"), pad2 + indent2);
    };
    if (seen.includes(input2)) {
      return '"[Circular]"';
    }
    if (input2 === null || input2 === void 0 || typeof input2 === "number" || typeof input2 === "boolean" || typeof input2 === "function" || typeof input2 === "symbol" || isRegexp(input2)) {
      return String(input2);
    }
    if (input2 instanceof Date) {
      return `new Date('${input2.toISOString()}')`;
    }
    if (Array.isArray(input2)) {
      if (input2.length === 0) {
        return "[]";
      }
      seen.push(input2);
      const returnValue = "[" + tokens.newline + input2.map((element, i3) => {
        const eol = input2.length - 1 === i3 ? tokens.newline : "," + tokens.newlineOrSpace;
        let value = stringify(element, options2, pad2 + indent2);
        if (options2.transform) {
          value = options2.transform(input2, i3, value);
        }
        return tokens.indent + value + eol;
      }).join("") + tokens.pad + "]";
      seen.pop();
      return expandWhiteSpace(returnValue);
    }
    if (isObject(input2)) {
      let objectKeys = getOwnEnumerableKeys(input2);
      if (options2.filter) {
        objectKeys = objectKeys.filter((element) => options2.filter(input2, element));
      }
      if (objectKeys.length === 0) {
        return "{}";
      }
      seen.push(input2);
      const returnValue = "{" + tokens.newline + objectKeys.map((element, index) => {
        const eol = objectKeys.length - 1 === index ? tokens.newline : "," + tokens.newlineOrSpace;
        const isSymbol = typeof element === "symbol";
        const isClassic = !isSymbol && /^[a-z$_][$\w]*$/i.test(element);
        const key = isSymbol || isClassic ? element : stringify(element, options2);
        let value = stringify(input2[element], options2, pad2 + indent2);
        if (options2.transform) {
          value = options2.transform(input2, element, value);
        }
        return tokens.indent + String(key) + ": " + value + eol;
      }).join("") + tokens.pad + "}";
      seen.pop();
      return expandWhiteSpace(returnValue);
    }
    input2 = input2.replace(/\\/g, "\\\\");
    input2 = String(input2).replace(/[\r\n]/g, (x3) => x3 === "\n" ? "\\n" : "\\r");
    if (options2.singleQuotes === false) {
      input2 = input2.replace(/"/g, '\\"');
      return `"${input2}"`;
    }
    input2 = input2.replace(/'/g, "\\'");
    return `'${input2}'`;
  }(input, options, pad);
}

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/httpsnippet-lite/esm/targets/javascript/axios/client.js
var axios = {
  info: {
    key: "axios",
    title: "Axios",
    link: "https://github.com/axios/axios",
    description: "Promise based HTTP client for the browser and node.js"
  },
  convert: ({ allHeaders, method, url, queryObj, postData }, options) => {
    const opts = {
      indent: "  ",
      ...options
    };
    const { blank, push, join, addPostProcessor } = new CodeBuilder({
      indent: opts.indent
    });
    push("import axios from 'axios';");
    blank();
    const requestOptions = {
      method,
      url
    };
    if (Object.keys(queryObj).length) {
      requestOptions.params = queryObj;
    }
    if (Object.keys(allHeaders).length) {
      requestOptions.headers = allHeaders;
    }
    switch (postData === null || postData === void 0 ? void 0 : postData.mimeType) {
      case "application/x-www-form-urlencoded":
        if (postData.params) {
          push("const encodedParams = new URLSearchParams();");
          postData.params.forEach((param) => {
            push(`encodedParams.set('${param.name}', '${param.value}');`);
          });
          blank();
          requestOptions.data = "encodedParams,";
          addPostProcessor(
            (code) => code.replace(/'encodedParams,'/, "encodedParams,")
          );
        }
        break;
      case "application/json":
        if (postData.jsonObj) {
          requestOptions.data = postData.jsonObj;
        }
        break;
      case "multipart/form-data":
        if (!postData.params) {
          break;
        }
        push("const form = new FormData();");
        postData.params.forEach((param) => {
          push(
            `form.append('${param.name}', '${param.value || param.fileName || ""}');`
          );
        });
        blank();
        requestOptions.data = "[form]";
        break;
      default:
        if (postData === null || postData === void 0 ? void 0 : postData.text) {
          requestOptions.data = postData.text;
        }
    }
    const optionString = stringifyObject(requestOptions, {
      indent: "  ",
      inlineCharacterLimit: 80
    }).replace('"[form]"', "form");
    push(`const options = ${optionString};`);
    blank();
    push("try {");
    push("const { data } = await axios.request(options);", 1);
    push("console.log(data);", 1);
    push("} catch (error) {");
    push("console.error(error);", 1);
    push("}");
    return join();
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/plugins/js/axios/axios.js
var jsAxios = {
  target: "js",
  client: "axios",
  title: "Axios",
  generate(request) {
    return convertWithHttpSnippetLite(axios, request);
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/utils/needsQuotes.js
function needsQuotes(key) {
  return /\s|-/.test(key);
}

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/utils/objectToString.js
var Unquoted = class {
  constructor(value) {
    this.value = value;
  }
};
function objectToString(obj, indent2 = 0) {
  const parts = [];
  const indentation = " ".repeat(indent2);
  const innerIndentation = " ".repeat(indent2 + 2);
  for (const [key, value] of Object.entries(obj)) {
    const formattedKey = needsQuotes(key) ? `'${key}'` : key;
    if (value instanceof Unquoted) {
      const lines = value.value.split("\n");
      let formattedValue = `${value.value}`;
      if (lines.length > 1) {
        formattedValue = lines.map((line, index) => {
          if (index === 0) {
            return line;
          }
          return `${innerIndentation}${line}`;
        }).join("\n");
      }
      parts.push(`${innerIndentation}${formattedKey}: ${formattedValue}`);
    } else if (Array.isArray(value)) {
      const arrayString = value.map((item) => {
        if (typeof item === "string") {
          return `'${item}'`;
        }
        if (item && typeof item === "object") {
          return objectToString(item, indent2 + 2);
        }
        return item;
      }).join(`, ${innerIndentation}`);
      parts.push(`${innerIndentation}${formattedKey}: [${arrayString}]`);
    } else if (value && typeof value === "object") {
      parts.push(`${innerIndentation}${formattedKey}: ${objectToString(value, indent2 + 2)}`);
    } else if (typeof value === "string") {
      const formattedValue = `'${value}'`;
      parts.push(`${innerIndentation}${formattedKey}: ${formattedValue}`);
    } else {
      parts.push(`${innerIndentation}${formattedKey}: ${value}`);
    }
  }
  return `{
${parts.join(",\n")}
${indentation}}`;
}

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/plugins/js/fetch/fetch.js
var jsFetch = {
  target: "js",
  client: "fetch",
  title: "Fetch",
  generate(request) {
    var _a, _b;
    const normalizedRequest = {
      method: "GET",
      ...request
    };
    let prefix = "";
    normalizedRequest.method = normalizedRequest.method.toUpperCase();
    const options = {
      method: normalizedRequest.method === "GET" ? void 0 : normalizedRequest.method
    };
    const searchParams = createSearchParams(normalizedRequest.queryString);
    const queryString = searchParams.size ? `?${searchParams.toString()}` : "";
    if ((_a = normalizedRequest.headers) == null ? void 0 : _a.length) {
      options.headers = {};
      normalizedRequest.headers.forEach((header) => {
        options.headers[header.name] = header.value;
      });
    }
    if ((_b = normalizedRequest.cookies) == null ? void 0 : _b.length) {
      options.headers = options.headers || {};
      normalizedRequest.cookies.forEach((cookie) => {
        options.headers["Set-Cookie"] = options.headers["Set-Cookie"] ? `${options.headers["Set-Cookie"]}; ${cookie.name}=${cookie.value}` : `${cookie.name}=${cookie.value}`;
      });
    }
    Object.keys(options).forEach((key) => {
      if (options[key] === void 0) {
        delete options[key];
      }
    });
    if (normalizedRequest.postData) {
      const { mimeType, text, params } = normalizedRequest.postData;
      if (mimeType === "application/json" && text) {
        try {
          options.body = new Unquoted(`JSON.stringify(${objectToString(JSON.parse(text))})`);
        } catch (e3) {
          options.body = text;
        }
      } else if (mimeType === "multipart/form-data" && params) {
        prefix = "const formData = new FormData()\n";
        params.forEach((param) => {
          if (param.fileName !== void 0) {
            prefix += `formData.append('${param.name}', new Blob([]), '${param.fileName}')
`;
          } else if (param.value !== void 0) {
            prefix += `formData.append('${param.name}', '${param.value}')
`;
          }
        });
        prefix += "\n";
        options.body = new Unquoted("formData");
      } else if (mimeType === "application/x-www-form-urlencoded" && params) {
        const form = Object.fromEntries(params.map((p5) => [p5.name, p5.value]));
        options.body = new Unquoted(`new URLSearchParams(${objectToString(form)})`);
      } else {
        options.body = normalizedRequest.postData.text;
      }
    }
    const jsonOptions = Object.keys(options).length ? `, ${objectToString(options)}` : "";
    return `${prefix}fetch('${normalizedRequest.url}${queryString}'${jsonOptions})`;
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/httpsnippet-lite/esm/targets/javascript/jquery/client.js
var jquery = {
  info: {
    key: "jquery",
    title: "jQuery",
    link: "http://api.jquery.com/jquery.ajax/",
    description: "Perform an asynchronous HTTP (Ajax) requests with jQuery"
  },
  convert: ({ fullUrl, method, allHeaders, postData }, options) => {
    let _a;
    const opts = {
      indent: "  ",
      ...options
    };
    const { blank, push, join } = new CodeBuilder({ indent: opts.indent });
    const settings = {
      async: true,
      crossDomain: true,
      url: fullUrl,
      method,
      headers: allHeaders
    };
    switch (postData === null || postData === void 0 ? void 0 : postData.mimeType) {
      case "application/x-www-form-urlencoded":
        settings.data = postData.paramsObj ? postData.paramsObj : postData.text;
        break;
      case "application/json":
        settings.processData = false;
        settings.data = postData.text;
        break;
      case "multipart/form-data":
        if (!postData.params) {
          break;
        }
        push("const form = new FormData();");
        postData.params.forEach((param) => {
          push(
            `form.append('${param.name}', '${param.value || param.fileName || ""}');`
          );
        });
        settings.processData = false;
        settings.contentType = false;
        settings.mimeType = "multipart/form-data";
        settings.data = "[form]";
        if (hasHeader(allHeaders, "content-type")) {
          if ((_a = getHeader(allHeaders, "content-type")) === null || _a === void 0 ? void 0 : _a.includes("boundary")) {
            const headerName = getHeaderName(allHeaders, "content-type");
            if (headerName) {
              delete settings.headers[headerName];
            }
          }
        }
        blank();
        break;
      default:
        if (postData === null || postData === void 0 ? void 0 : postData.text) {
          settings.data = postData.text;
        }
    }
    const stringifiedSettings = stringifyObject(settings, {
      indent: opts.indent
    }).replace("'[form]'", "form");
    push(`const settings = ${stringifiedSettings};`);
    blank();
    push("$.ajax(settings).done(function (response) {");
    push("console.log(response);", 1);
    push("});");
    return join();
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/plugins/js/jquery/jquery.js
var jsJquery = {
  target: "js",
  client: "jquery",
  title: "jQuery",
  generate(request) {
    return convertWithHttpSnippetLite(jquery, request);
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/plugins/js/ofetch/ofetch.js
var jsOfetch = {
  target: "js",
  client: "ofetch",
  title: "ofetch",
  generate(request) {
    var _a, _b;
    const normalizedRequest = {
      method: "GET",
      ...request
    };
    normalizedRequest.method = normalizedRequest.method.toUpperCase();
    const options = {
      method: normalizedRequest.method === "GET" ? void 0 : normalizedRequest.method
    };
    options.query = normalizedRequest.queryString;
    if ((_a = normalizedRequest.headers) == null ? void 0 : _a.length) {
      options.headers = {};
      normalizedRequest.headers.forEach((header) => {
        options.headers[header.name] = header.value;
      });
    }
    if ((_b = normalizedRequest.cookies) == null ? void 0 : _b.length) {
      options.headers = options.headers || {};
      normalizedRequest.cookies.forEach((cookie) => {
        options.headers["Set-Cookie"] = options.headers["Set-Cookie"] ? `${options.headers["Set-Cookie"]}; ${cookie.name}=${cookie.value}` : `${cookie.name}=${cookie.value}`;
      });
    }
    Object.keys(options).forEach((key) => {
      if (options[key] === void 0) {
        delete options[key];
      }
    });
    if (normalizedRequest.postData) {
      options.body = normalizedRequest.postData.text;
      if (normalizedRequest.postData.mimeType === "application/json") {
        options.body = JSON.parse(options.body);
      }
    }
    const jsonOptions = Object.keys(options).length ? `, ${objectToString(options)}` : "";
    return `import { ofetch } from 'ofetch'

ofetch('${normalizedRequest.url}'${jsonOptions})`;
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/httpsnippet-lite/esm/targets/javascript/xhr/client.js
var xhr = {
  info: {
    key: "xhr",
    title: "XMLHttpRequest",
    link: "https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest",
    description: "W3C Standard API that provides scripted client functionality"
  },
  convert: ({ postData, allHeaders, method, fullUrl }, options) => {
    let _a;
    const opts = {
      indent: "  ",
      cors: true,
      ...options
    };
    const { blank, push, join } = new CodeBuilder({ indent: opts.indent });
    switch (postData === null || postData === void 0 ? void 0 : postData.mimeType) {
      case "application/json":
        push(
          `const data = JSON.stringify(${stringifyObject(postData.jsonObj, {
            indent: opts.indent
          })});`
        );
        blank();
        break;
      case "multipart/form-data":
        if (!postData.params) {
          break;
        }
        push("const data = new FormData();");
        postData.params.forEach((param) => {
          push(
            `data.append('${param.name}', '${param.value || param.fileName || ""}');`
          );
        });
        if (hasHeader(allHeaders, "content-type")) {
          if ((_a = getHeader(allHeaders, "content-type")) === null || _a === void 0 ? void 0 : _a.includes("boundary")) {
            const headerName = getHeaderName(allHeaders, "content-type");
            if (headerName) {
              delete allHeaders[headerName];
            }
          }
        }
        blank();
        break;
      default:
        push(
          `const data = ${(postData === null || postData === void 0 ? void 0 : postData.text) ? `'${postData.text}'` : "null"};`
        );
        blank();
    }
    push("const xhr = new XMLHttpRequest();");
    if (opts.cors) {
      push("xhr.withCredentials = true;");
    }
    blank();
    push("xhr.addEventListener('readystatechange', function () {");
    push("if (this.readyState === this.DONE) {", 1);
    push("console.log(this.responseText);", 2);
    push("}", 1);
    push("});");
    blank();
    push(`xhr.open('${method}', '${fullUrl}');`);
    Object.keys(allHeaders).forEach((key) => {
      push(
        `xhr.setRequestHeader('${key}', '${escapeForSingleQuotes(allHeaders[key])}');`
      );
    });
    blank();
    push("xhr.send(data);");
    return join();
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/plugins/js/xhr/xhr.js
var jsXhr = {
  target: "js",
  client: "xhr",
  title: "XHR",
  generate(request) {
    return convertWithHttpSnippetLite(xhr, request);
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/httpsnippet-lite/esm/targets/kotlin/okhttp/client.js
var okhttp2 = {
  info: {
    key: "okhttp",
    title: "OkHttp",
    link: "http://square.github.io/okhttp/",
    description: "An HTTP Request Client Library"
  },
  convert: ({ postData, fullUrl, method, allHeaders }, options) => {
    const opts = {
      indent: "  ",
      ...options
    };
    const { blank, join, push } = new CodeBuilder({ indent: opts.indent });
    const methods = ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"];
    const methodsWithBody = ["POST", "PUT", "DELETE", "PATCH"];
    push("val client = OkHttpClient()");
    blank();
    if (postData !== null && postData !== void 0) {
      if (postData.mimeType === "application/x-www-form-urlencoded" && postData.params) {
        push("val formBody = FormBody.Builder()");
        postData.params.forEach((param) => {
          push(`.addEncoded("${param.name}", "${param.value}")`, 1);
        });
        push(".build()", 1);
        blank();
      } else if (postData.mimeType === "multipart/form-data" && postData.params) {
        push(`val body = MultipartBody.Builder()`);
        push(`.setType(MultipartBody.FORM)`, 1);
        postData.params.forEach((param) => {
          if (param.fileName !== void 0) {
            push(
              `.addFormDataPart("${param.name}", "${param.fileName}", RequestBody.create(MediaType.parse("application/octet-stream"), File("${param.fileName}")))`,
              1
            );
          } else if (param.value !== void 0) {
            push(`.addFormDataPart("${param.name}", "${param.value}")`, 1);
          }
        });
        push(`.build()`, 1);
        blank();
      } else {
        push(`val mediaType = MediaType.parse("${postData.mimeType}")`);
        push(`val body = RequestBody.create(mediaType, ${JSON.stringify(postData.text)})`);
      }
    }
    push("val request = Request.Builder()");
    push(`.url("${fullUrl}")`, 1);
    if (!methods.includes(method.toUpperCase())) {
      if (postData === null || postData === void 0 ? void 0 : postData.text) {
        push(`.method("${method.toUpperCase()}", body)`, 1);
      } else {
        push(`.method("${method.toUpperCase()}", null)`, 1);
      }
    } else if (methodsWithBody.includes(method.toUpperCase())) {
      if (postData === null || postData === void 0 ? void 0 : postData.text || postData.params) {
        push(`.${method.toLowerCase()}(body)`, 1);
      } else {
        push(`.${method.toLowerCase()}(null)`, 1);
      }
    } else {
      push(`.${method.toLowerCase()}()`, 1);
    }
    Object.keys(allHeaders).forEach((key) => {
      push(
        `.addHeader("${key}", "${escapeForDoubleQuotes(allHeaders[key])}")`,
        1
      );
    });
    push(".build()", 1);
    blank();
    push("val response = client.newCall(request).execute()");
    return join();
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/plugins/kotlin/okhttp/okhttp.js
var kotlinOkhttp = {
  target: "kotlin",
  client: "okhttp",
  title: "OkHttp",
  generate(request) {
    return convertWithHttpSnippetLite(okhttp2, request);
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/httpsnippet-lite/esm/targets/node/axios/client.js
var axios2 = {
  info: {
    key: "axios",
    title: "Axios",
    link: "https://github.com/axios/axios",
    description: "Promise based HTTP client for the browser and node.js"
  },
  convert: ({ method, url, queryObj, allHeaders, postData }, options) => {
    const opts = {
      indent: "  ",
      ...options
    };
    const { blank, join, push, addPostProcessor } = new CodeBuilder({
      indent: opts.indent
    });
    push("const axios = require('axios').default;");
    const reqOpts = {
      method,
      url
    };
    if (Object.keys(queryObj).length) {
      reqOpts.params = queryObj;
    }
    if (Object.keys(allHeaders).length) {
      reqOpts.headers = allHeaders;
    }
    switch (postData === null || postData === void 0 ? void 0 : postData.mimeType) {
      case "application/x-www-form-urlencoded":
        if (postData.params) {
          push("const { URLSearchParams } = require('url');");
          blank();
          push("const encodedParams = new URLSearchParams();");
          postData.params.forEach((param) => {
            push(`encodedParams.set('${param.name}', '${param.value}');`);
          });
          blank();
          reqOpts.data = "encodedParams,";
          addPostProcessor(
            (code) => code.replace(/'encodedParams,'/, "encodedParams,")
          );
        }
        break;
      case "application/json":
        blank();
        if (postData.jsonObj) {
          reqOpts.data = postData.jsonObj;
        }
        break;
      default:
        blank();
        if (postData === null || postData === void 0 ? void 0 : postData.text) {
          reqOpts.data = postData.text;
        }
    }
    const stringifiedOptions = stringifyObject(reqOpts, {
      indent: "  ",
      inlineCharacterLimit: 80
    });
    push(`const options = ${stringifiedOptions};`);
    blank();
    push("try {");
    push("const { data } = await axios.request(options);", 1);
    push("console.log(data);", 1);
    push("} catch (error) {");
    push("console.error(error);", 1);
    push("}");
    return join();
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/plugins/node/axios/axios.js
var nodeAxios = {
  target: "node",
  client: "axios",
  title: "Axios",
  generate(request) {
    return convertWithHttpSnippetLite(axios2, request);
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/plugins/node/fetch/fetch.js
var nodeFetch = {
  target: "node",
  client: "fetch",
  title: "Fetch",
  generate(request) {
    var _a, _b;
    const normalizedRequest = {
      method: "GET",
      ...request
    };
    let prefix = "";
    normalizedRequest.method = normalizedRequest.method.toUpperCase();
    const options = {
      method: normalizedRequest.method === "GET" ? void 0 : normalizedRequest.method
    };
    const searchParams = createSearchParams(normalizedRequest.queryString);
    const queryString = searchParams.size ? `?${searchParams.toString()}` : "";
    if ((_a = normalizedRequest.headers) == null ? void 0 : _a.length) {
      options.headers = {};
      normalizedRequest.headers.forEach((header) => {
        options.headers[header.name] = header.value;
      });
    }
    if ((_b = normalizedRequest.cookies) == null ? void 0 : _b.length) {
      options.headers = options.headers || {};
      normalizedRequest.cookies.forEach((cookie) => {
        options.headers["Set-Cookie"] = options.headers["Set-Cookie"] ? `${options.headers["Set-Cookie"]}; ${cookie.name}=${cookie.value}` : `${cookie.name}=${cookie.value}`;
      });
    }
    Object.keys(options).forEach((key) => {
      if (options[key] === void 0) {
        delete options[key];
      }
    });
    if (normalizedRequest.postData) {
      const { mimeType, text, params } = normalizedRequest.postData;
      let hasFsImport = false;
      if (mimeType === "application/json" && text) {
        try {
          options.body = new Unquoted(`JSON.stringify(${objectToString(JSON.parse(text))})`);
        } catch (e3) {
          options.body = text;
        }
      } else if (mimeType === "multipart/form-data" && params) {
        prefix = "const formData = new FormData()\n";
        params.forEach((param) => {
          if (param.fileName !== void 0) {
            if (!hasFsImport) {
              prefix = `import fs from 'node:fs'

${prefix}`;
              hasFsImport = true;
            }
            prefix += `formData.append('${param.name}', new Blob([fs.readFileSync('${param.fileName}')]), '${param.fileName}')
`;
          } else if (param.value !== void 0) {
            prefix += `formData.append('${param.name}', '${param.value}')
`;
          }
        });
        prefix += "\n";
        options.body = new Unquoted("formData");
      } else if (mimeType === "application/x-www-form-urlencoded" && params) {
        const form = Object.fromEntries(params.map((p5) => [p5.name, p5.value]));
        options.body = new Unquoted(`new URLSearchParams(${objectToString(form)})`);
      } else {
        options.body = normalizedRequest.postData.text;
      }
    }
    const jsonOptions = Object.keys(options).length ? `, ${objectToString(options)}` : "";
    return `${prefix}fetch('${normalizedRequest.url}${queryString}'${jsonOptions})`;
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/plugins/node/ofetch/ofetch.js
var nodeOfetch = {
  target: "node",
  client: "ofetch",
  title: "ofetch",
  generate(request) {
    var _a, _b;
    const normalizedRequest = {
      method: "GET",
      ...request
    };
    normalizedRequest.method = normalizedRequest.method.toUpperCase();
    const options = {
      method: normalizedRequest.method === "GET" ? void 0 : normalizedRequest.method
    };
    options.query = normalizedRequest.queryString;
    if ((_a = normalizedRequest.headers) == null ? void 0 : _a.length) {
      options.headers = {};
      normalizedRequest.headers.forEach((header) => {
        options.headers[header.name] = header.value;
      });
    }
    if ((_b = normalizedRequest.cookies) == null ? void 0 : _b.length) {
      options.headers = options.headers || {};
      normalizedRequest.cookies.forEach((cookie) => {
        options.headers["Set-Cookie"] = options.headers["Set-Cookie"] ? `${options.headers["Set-Cookie"]}; ${cookie.name}=${cookie.value}` : `${cookie.name}=${cookie.value}`;
      });
    }
    Object.keys(options).forEach((key) => {
      if (options[key] === void 0) {
        delete options[key];
      }
    });
    if (normalizedRequest.postData) {
      options.body = normalizedRequest.postData.text;
      if (normalizedRequest.postData.mimeType === "application/json") {
        options.body = JSON.parse(options.body);
      }
    }
    const jsonOptions = Object.keys(options).length ? `, ${objectToString(options)}` : "";
    return `import { ofetch } from 'ofetch'

ofetch('${normalizedRequest.url}'${jsonOptions})`;
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/plugins/node/undici/undici.js
var nodeUndici = {
  target: "node",
  client: "undici",
  title: "undici",
  generate(request) {
    var _a, _b;
    const normalizedRequest = {
      method: "GET",
      ...request
    };
    normalizedRequest.method = normalizedRequest.method.toUpperCase();
    const options = {
      method: normalizedRequest.method === "GET" ? void 0 : normalizedRequest.method
    };
    const searchParams = createSearchParams(normalizedRequest.queryString);
    const queryString = searchParams.size ? `?${searchParams.toString()}` : "";
    if ((_a = normalizedRequest.headers) == null ? void 0 : _a.length) {
      options.headers = {};
      normalizedRequest.headers.forEach((header) => {
        options.headers[header.name] = header.value;
      });
    }
    if ((_b = normalizedRequest.cookies) == null ? void 0 : _b.length) {
      options.headers = options.headers || {};
      normalizedRequest.cookies.forEach((cookie) => {
        options.headers["Set-Cookie"] = options.headers["Set-Cookie"] ? `${options.headers["Set-Cookie"]}; ${cookie.name}=${cookie.value}` : `${cookie.name}=${cookie.value}`;
      });
    }
    Object.keys(options).forEach((key) => {
      if (options[key] === void 0) {
        delete options[key];
      }
    });
    if (normalizedRequest.postData) {
      options.body = normalizedRequest.postData.text;
      if (normalizedRequest.postData.mimeType === "application/json") {
        options.body = new Unquoted(`JSON.stringify(${objectToString(JSON.parse(options.body))})`);
      }
    }
    const jsonOptions = Object.keys(options).length ? `, ${objectToString(options)}` : "";
    return `import { request } from 'undici'

const { statusCode, body } = await request('${normalizedRequest.url}${queryString}'${jsonOptions})`;
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/httpsnippet-lite/esm/targets/objc/helpers.js
var nsDeclaration = (nsClass, name, parameters, indent2) => {
  const opening = `${nsClass} *${name} = `;
  const literal = literalRepresentation(
    parameters,
    indent2 ? opening.length : void 0
  );
  return `${opening}${literal};`;
};
var literalRepresentation = (value, indentation) => {
  const join = indentation === void 0 ? ", " : `,
   ${" ".repeat(indentation)}`;
  switch (Object.prototype.toString.call(value)) {
    case "[object Number]":
      return `@${value}`;
    case "[object Array]": {
      const valuesRepresentation = value.map(
        (value2) => literalRepresentation(value2)
      );
      return `@[ ${valuesRepresentation.join(join)} ]`;
    }
    case "[object Object]": {
      const keyValuePairs = [];
      for (const key in value) {
        keyValuePairs.push(`@"${key}": ${literalRepresentation(value[key])}`);
      }
      return `@{ ${keyValuePairs.join(join)} }`;
    }
    case "[object Boolean]":
      return value ? "@YES" : "@NO";
    default:
      if (value === null || value === void 0) {
        return "";
      }
      return `@"${value.toString().replace(/"/g, '\\"')}"`;
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/httpsnippet-lite/esm/targets/objc/nsurlsession/client.js
var nsurlsession = {
  info: {
    key: "nsurlsession",
    title: "NSURLSession",
    link: "https://developer.apple.com/library/mac/documentation/Foundation/Reference/NSURLSession_class/index.html",
    description: "Foundation's NSURLSession request"
  },
  convert: ({ allHeaders, postData, method, fullUrl }, options) => {
    let _a;
    const opts = {
      indent: "    ",
      pretty: true,
      timeout: 10,
      ...options
    };
    const { push, join, blank } = new CodeBuilder({ indent: opts.indent });
    const req = {
      hasHeaders: false,
      hasBody: false
    };
    push("#import <Foundation/Foundation.h>");
    if (Object.keys(allHeaders).length) {
      req.hasHeaders = true;
      blank();
      push(nsDeclaration("NSDictionary", "headers", allHeaders, opts.pretty));
    }
    if (postData && (postData.text || postData.jsonObj || postData.params)) {
      req.hasBody = true;
      switch (postData.mimeType) {
        case "application/x-www-form-urlencoded":
          if ((_a = postData.params) === null || _a === void 0 ? void 0 : _a.length) {
            blank();
            const [head, ...tail] = postData.params;
            push(
              `NSMutableData *postData = [[NSMutableData alloc] initWithData:[@"${head.name}=${head.value}" dataUsingEncoding:NSUTF8StringEncoding]];`
            );
            tail.forEach(({ name, value }) => {
              push(
                `[postData appendData:[@"&${name}=${value}" dataUsingEncoding:NSUTF8StringEncoding]];`
              );
            });
          } else {
            req.hasBody = false;
          }
          break;
        case "application/json":
          if (postData.jsonObj) {
            push(
              nsDeclaration(
                "NSDictionary",
                "parameters",
                postData.jsonObj,
                opts.pretty
              )
            );
            blank();
            push(
              "NSData *postData = [NSJSONSerialization dataWithJSONObject:parameters options:0 error:nil];"
            );
          }
          break;
        case "multipart/form-data":
          push(
            nsDeclaration(
              "NSArray",
              "parameters",
              postData.params || [],
              opts.pretty
            )
          );
          push(`NSString *boundary = @"${postData.boundary}";`);
          blank();
          push("NSError *error;");
          push("NSMutableString *body = [NSMutableString string];");
          push("for (NSDictionary *param in parameters) {");
          push('[body appendFormat:@"--%@\\r\\n", boundary];', 1);
          push('if (param[@"fileName"]) {', 1);
          push(
            '[body appendFormat:@"Content-Disposition:form-data; name=\\"%@\\"; filename=\\"%@\\"\\r\\n", param[@"name"], param[@"fileName"]];',
            2
          );
          push(
            '[body appendFormat:@"Content-Type: %@\\r\\n\\r\\n", param[@"contentType"]];',
            2
          );
          push(
            '[body appendFormat:@"%@", [NSString stringWithContentsOfFile:param[@"fileName"] encoding:NSUTF8StringEncoding error:&error]];',
            2
          );
          push("if (error) {", 2);
          push('NSLog(@"%@", error);', 3);
          push("}", 2);
          push("} else {", 1);
          push(
            '[body appendFormat:@"Content-Disposition:form-data; name=\\"%@\\"\\r\\n\\r\\n", param[@"name"]];',
            2
          );
          push('[body appendFormat:@"%@", param[@"value"]];', 2);
          push("}", 1);
          push("}");
          push('[body appendFormat:@"\\r\\n--%@--\\r\\n", boundary];');
          push(
            "NSData *postData = [body dataUsingEncoding:NSUTF8StringEncoding];"
          );
          break;
        default:
          blank();
          push(
            `NSData *postData = [[NSData alloc] initWithData:[@"${postData.text}" dataUsingEncoding:NSUTF8StringEncoding]];`
          );
      }
    }
    blank();
    push(
      `NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"${fullUrl}"]`
    );
    push(
      "                                                       cachePolicy:NSURLRequestUseProtocolCachePolicy"
    );
    push(
      `                                                   timeoutInterval:${opts.timeout.toFixed(1)}];`
    );
    push(`[request setHTTPMethod:@"${method}"];`);
    if (req.hasHeaders) {
      push("[request setAllHTTPHeaderFields:headers];");
    }
    if (req.hasBody) {
      push("[request setHTTPBody:postData];");
    }
    blank();
    push("NSURLSession *session = [NSURLSession sharedSession];");
    push(
      "NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request"
    );
    push(
      "                                            completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {"
    );
    push("                                            if (error) {", 1);
    push('                                            NSLog(@"%@", error);', 2);
    push("                                            } else {", 1);
    push(
      "                                            NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;",
      2
    );
    push(
      '                                            NSLog(@"%@", httpResponse);',
      2
    );
    push("                                            }", 1);
    push("                                            }];");
    push("[dataTask resume];");
    return join();
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/plugins/objc/nsurlsession/nsurlsession.js
var objcNsurlsession = {
  target: "objc",
  client: "nsurlsession",
  title: "NSURLSession",
  generate(request) {
    return convertWithHttpSnippetLite(nsurlsession, request);
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/httpsnippet-lite/esm/targets/ocaml/cohttp/client.js
var cohttp = {
  info: {
    key: "cohttp",
    title: "CoHTTP",
    link: "https://github.com/mirage/ocaml-cohttp",
    description: "Cohttp is a very lightweight HTTP server using Lwt or Async for OCaml"
  },
  convert: ({ fullUrl, allHeaders, postData, method }, options) => {
    const opts = {
      indent: "  ",
      ...options
    };
    const methods = ["get", "post", "head", "delete", "patch", "put", "options"];
    const { push, blank, join } = new CodeBuilder({ indent: opts.indent });
    push("open Cohttp_lwt_unix");
    push("open Cohttp");
    push("open Lwt");
    blank();
    push(`let uri = Uri.of_string "${fullUrl}" in`);
    const headers = Object.keys(allHeaders);
    if (headers.length === 1) {
      push(
        `let headers = Header.add (Header.init ()) "${headers[0]}" "${escapeForDoubleQuotes(allHeaders[headers[0]])}" in`
      );
    } else if (headers.length > 1) {
      push("let headers = Header.add_list (Header.init ()) [");
      headers.forEach((key) => {
        push(`("${key}", "${escapeForDoubleQuotes(allHeaders[key])}");`, 1);
      });
      push("] in");
    }
    if (postData === null || postData === void 0 ? void 0 : postData.text) {
      push(
        `let body = Cohttp_lwt_body.of_string ${JSON.stringify(postData.text)} in`
      );
    }
    blank();
    const h = headers.length ? "~headers " : "";
    const b5 = (postData === null || postData === void 0 ? void 0 : postData.text) ? "~body " : "";
    const m8 = methods.includes(method.toLowerCase()) ? `\`${method.toUpperCase()}` : `(Code.method_of_string "${method}")`;
    push(`Client.call ${h}${b5}${m8} uri`);
    push(">>= fun (res, body_stream) ->");
    push("(* Do stuff with the result *)", 1);
    return join();
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/plugins/ocaml/cohttp/cohttp.js
var ocamlCohttp = {
  target: "ocaml",
  client: "cohttp",
  title: "Cohttp",
  generate(request) {
    return convertWithHttpSnippetLite(cohttp, request);
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/plugins/php/curl/curl.js
var phpCurl = {
  target: "php",
  client: "curl",
  title: "cURL",
  generate(request, configuration) {
    var _a, _b, _c, _d, _e;
    const normalizedRequest = {
      method: "GET",
      ...request
    };
    normalizedRequest.method = normalizedRequest.method.toUpperCase();
    const parts = [];
    const queryString = ((_a = normalizedRequest.queryString) == null ? void 0 : _a.length) ? "?" + normalizedRequest.queryString.map((param) => {
      const encodedName = encodeURIComponent(param.name);
      const encodedValue = encodeURIComponent(param.value);
      return `${encodedName}=${encodedValue}`;
    }).join("&") : "";
    const url = `${normalizedRequest.url}${queryString}`;
    parts.push(`$ch = curl_init("${url}");`);
    parts.push("");
    if (normalizedRequest.method === "POST") {
      parts.push("curl_setopt($ch, CURLOPT_POST, true);");
    }
    if (((_b = configuration == null ? void 0 : configuration.auth) == null ? void 0 : _b.username) && ((_c = configuration == null ? void 0 : configuration.auth) == null ? void 0 : _c.password)) {
      parts.push(`curl_setopt($ch, CURLOPT_USERPWD, '${configuration.auth.username}:${configuration.auth.password}');`);
    }
    if ((_d = normalizedRequest.headers) == null ? void 0 : _d.length) {
      const headerStrings = normalizedRequest.headers.map((header) => `'${header.name}: ${header.value}'`);
      parts.push(`curl_setopt($ch, CURLOPT_HTTPHEADER, [${headerStrings.join(", ")}]);`);
      const acceptEncoding = normalizedRequest.headers.find((header) => header.name.toLowerCase() === "accept-encoding");
      if (acceptEncoding && /gzip|deflate/.test(acceptEncoding.value)) {
        parts.push("curl_setopt($ch, CURLOPT_ENCODING, '');");
      }
    }
    if ((_e = normalizedRequest.cookies) == null ? void 0 : _e.length) {
      const cookieString = normalizedRequest.cookies.map((cookie) => {
        const encodedName = encodeURIComponent(cookie.name);
        const encodedValue = encodeURIComponent(cookie.value);
        return `${encodedName}=${encodedValue}`;
      }).join("; ");
      parts.push(`curl_setopt($ch, CURLOPT_COOKIE, '${cookieString}');`);
    }
    if (normalizedRequest.postData) {
      if (normalizedRequest.postData.mimeType === "application/json") {
        if (normalizedRequest.postData.text) {
          try {
            const jsonData = JSON.parse(normalizedRequest.postData.text);
            const phpArray = convertToPhpArray(jsonData);
            parts.push(`curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(${phpArray}));`);
          } catch {
            parts.push(`curl_setopt($ch, CURLOPT_POSTFIELDS, '${normalizedRequest.postData.text}');`);
          }
        }
      } else if (normalizedRequest.postData.mimeType === "multipart/form-data" && normalizedRequest.postData.params) {
        const formData = normalizedRequest.postData.params.reduce((acc, param) => {
          if (param.fileName !== void 0) {
            acc.push(`'${param.name}' => '@${param.fileName}'`);
          } else if (param.value !== void 0) {
            acc.push(`'${param.name}' => '${param.value}'`);
          }
          return acc;
        }, []);
        parts.push(`curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: multipart/form-data']);`);
        parts.push(`curl_setopt($ch, CURLOPT_POSTFIELDS, [${formData.join(", ")}]);`);
      } else if (normalizedRequest.postData.mimeType === "application/x-www-form-urlencoded" && normalizedRequest.postData.params) {
        const formData = normalizedRequest.postData.params.map((param) => {
          const encodedName = encodeURIComponent(param.name);
          const encodedValue = param.value ? encodeURIComponent(param.value) : "";
          return `${encodedName}=${encodedValue}`;
        }).join("&");
        parts.push(`curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/x-www-form-urlencoded']);`);
        parts.push(`curl_setopt($ch, CURLOPT_POSTFIELDS, '${formData}');`);
      } else if (normalizedRequest.postData.mimeType === "application/octet-stream") {
        parts.push(`curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/octet-stream']);`);
        parts.push(`curl_setopt($ch, CURLOPT_POSTFIELDS, '${normalizedRequest.postData.text || ""}');`);
      } else if (normalizedRequest.postData.text) {
        try {
          const jsonData = JSON.parse(normalizedRequest.postData.text);
          const phpArray = convertToPhpArray(jsonData);
          parts.push(`curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(${phpArray}));`);
        } catch {
          parts.push(`curl_setopt($ch, CURLOPT_POSTFIELDS, '${normalizedRequest.postData.text}');`);
        }
      }
    }
    parts.push("");
    parts.push("curl_exec($ch);");
    parts.push("");
    parts.push("curl_close($ch);");
    return parts.join("\n").replace(/\n\n\n/g, "\n\n");
  }
};
function indent(level) {
  return " ".repeat(level * 2);
}
function convertToPhpArray(data, indentLevel = 0) {
  if (data === null || data === void 0) {
    return "null";
  }
  if (typeof data === "string") {
    return `'${data.replace(/'/g, "\\'")}'`;
  }
  if (typeof data === "number" || typeof data === "boolean") {
    return String(data);
  }
  if (Array.isArray(data)) {
    if (data.length === 0) {
      return "[]";
    }
    const items = data.map((item) => convertToPhpArray(item, indentLevel + 1)).join(",\n" + indent(indentLevel + 1));
    return `[
${indent(indentLevel + 1)}${items}
${indent(indentLevel)}]`;
  }
  if (typeof data === "object") {
    const entries = Object.entries(data);
    if (entries.length === 0) {
      return "[]";
    }
    const items = entries.map(([key, value]) => `'${key}' => ${convertToPhpArray(value, indentLevel + 1)}`).join(",\n" + indent(indentLevel + 1));
    return `[
${indent(indentLevel + 1)}${items}
${indent(indentLevel)}]`;
  }
  return "null";
}

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/plugins/php/guzzle/guzzle.js
var phpGuzzle = {
  target: "php",
  client: "guzzle",
  title: "Guzzle",
  generate(request, configuration) {
    var _a;
    if (!request) {
      return "";
    }
    const options = {};
    const method = (request.method || "GET").toUpperCase();
    const url = request.url || "";
    if (request.headers && Array.isArray(request.headers) && request.headers.length > 0) {
      const headers = {};
      request.headers.forEach((header) => {
        if (headers[header.name] === void 0) {
          headers[header.name] = header.value;
        } else if (Array.isArray(headers[header.name])) {
          headers[header.name].push(header.value);
        } else {
          headers[header.name] = [headers[header.name], header.value];
        }
      });
      options.headers = headers;
    }
    if (request.queryString && request.queryString.length > 0) {
      const query = {};
      request.queryString.forEach((param) => {
        query[param.name] = param.value;
      });
      options.query = query;
    }
    if (request.cookies && request.cookies.length > 0) {
      const cookies = {};
      request.cookies.forEach((cookie) => {
        cookies[cookie.name] = cookie.value;
      });
      options.cookies = cookies;
    }
    if (((_a = configuration == null ? void 0 : configuration.auth) == null ? void 0 : _a.username) && configuration.auth.password) {
      options.auth = [configuration.auth.username, configuration.auth.password];
    }
    if (request.postData) {
      if (request.postData.mimeType === "application/json") {
        try {
          options.json = JSON.parse(request.postData.text || "{}");
        } catch (e3) {
          options.body = request.postData.text;
        }
      } else if (request.postData.mimeType === "multipart/form-data") {
        if (request.postData.params) {
          options.multipart = request.postData.params.map((param) => ({
            name: param.name,
            contents: param.fileName ? `fopen('${param.fileName}', 'r')` : param.value || ""
          }));
        } else if (request.postData.text) {
          try {
            options.form_params = JSON.parse(request.postData.text);
          } catch (e3) {
            options.body = request.postData.text;
          }
        }
      } else if (request.postData.mimeType === "application/x-www-form-urlencoded") {
        if (request.postData.params) {
          const formParams = {};
          request.postData.params.forEach((param) => {
            formParams[param.name] = param.value || "";
          });
          options.form_params = formParams;
        }
      } else {
        options.body = request.postData.text;
      }
    }
    if (request.headers && Array.isArray(request.headers) && request.headers.some((h) => h.name === "Accept-Encoding" && h.value.includes("gzip"))) {
      options.decode_content = true;
    }
    let code = "$client = new GuzzleHttp\\Client();\n\n";
    if (Object.keys(options).length > 0) {
      const formattedOptions = formatOptionsArray(options);
      code += `$response = $client->request('${method}', '${url}', ${formattedOptions});`;
    } else {
      code += `$response = $client->request('${method}', '${url}');`;
    }
    return code;
  }
};
function formatOptionsArray(options, indent2 = 0) {
  if (Object.keys(options).length === 0) return "[]";
  const spaces = " ".repeat(4);
  let result = "[\n";
  for (const [key, value] of Object.entries(options)) {
    const formattedValue = formatValue(value, indent2 + 1);
    result += `${spaces.repeat(indent2 + 1)}'${key}' => ${formattedValue},
`;
  }
  result += `${spaces.repeat(indent2)}]`;
  return result;
}
function formatValue(value, indent2) {
  if (value === null) return "null";
  if (typeof value === "boolean") return value ? "true" : "false";
  if (typeof value === "string" && value.startsWith("fopen(")) return value;
  if (typeof value === "string") return `'${value}'`;
  if (typeof value === "number") return value.toString();
  if (Array.isArray(value)) {
    if (value.length === 0) return "[]";
    const spaces = " ".repeat(4);
    let result = "[\n";
    value.forEach((item) => {
      const formattedItem = formatValue(item, indent2 + 1);
      result += `${spaces.repeat(indent2 + 1)}${formattedItem},
`;
    });
    result += `${spaces.repeat(indent2)}]`;
    return result;
  }
  if (typeof value === "object") {
    return formatOptionsArray(value, indent2);
  }
  return `'${value}'`;
}

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/httpsnippet-lite/esm/targets/powershell/common.js
var generatePowershellConvert = (command) => {
  const convert = ({
    method,
    headersObj,
    cookies,
    uriObj,
    fullUrl,
    postData,
    allHeaders
  }) => {
    const { push, join } = new CodeBuilder();
    const methods = ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"];
    if (!methods.includes(method.toUpperCase())) {
      return "Method not supported";
    }
    const commandOptions = [];
    const headers = Object.keys(headersObj);
    if (headers.length) {
      push("$headers=@{}");
      headers.forEach((key) => {
        if (key !== "connection") {
          push(
            `$headers.Add("${key}", "${escapeString(headersObj[key], { escapeChar: "`" })}")`
          );
        }
      });
      commandOptions.push("-Headers $headers");
    }
    if (cookies.length) {
      push(
        "$session = New-Object Microsoft.PowerShell.Commands.WebRequestSession"
      );
      cookies.forEach((cookie) => {
        push("$cookie = New-Object System.Net.Cookie");
        push(`$cookie.Name = '${cookie.name}'`);
        push(`$cookie.Value = '${cookie.value}'`);
        push(`$cookie.Domain = '${uriObj.host}'`);
        push("$session.Cookies.Add($cookie)");
      });
      commandOptions.push("-WebSession $session");
    }
    if (postData === null || postData === void 0 ? void 0 : postData.text) {
      commandOptions.push(
        `-ContentType '${escapeString(getHeader(allHeaders, "content-type"), {
          delimiter: "'",
          escapeChar: "`"
        })}'`
      );
      commandOptions.push(`-Body '${postData.text}'`);
    }
    push(
      `$response = ${command} -Uri '${fullUrl}' -Method ${method} ${commandOptions.join(" ")}`
    );
    return join();
  };
  return convert;
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/httpsnippet-lite/esm/targets/powershell/restmethod/client.js
var restmethod = {
  info: {
    key: "restmethod",
    title: "Invoke-RestMethod",
    link: "https://docs.microsoft.com/en-us/powershell/module/Microsoft.PowerShell.Utility/Invoke-RestMethod",
    description: "Powershell Invoke-RestMethod client"
  },
  convert: generatePowershellConvert("Invoke-RestMethod")
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/plugins/powershell/restmethod/restmethod.js
var powershellRestmethod = {
  target: "powershell",
  client: "restmethod",
  title: "Invoke-RestMethod",
  generate(request) {
    return convertWithHttpSnippetLite(restmethod, request);
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/httpsnippet-lite/esm/targets/powershell/webrequest/client.js
var webrequest = {
  info: {
    key: "webrequest",
    title: "Invoke-WebRequest",
    link: "https://docs.microsoft.com/en-us/powershell/module/Microsoft.PowerShell.Utility/Invoke-WebRequest",
    description: "Powershell Invoke-WebRequest client"
  },
  convert: generatePowershellConvert("Invoke-WebRequest")
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/plugins/powershell/webrequest/webrequest.js
var powershellWebrequest = {
  target: "powershell",
  client: "webrequest",
  title: "Invoke-WebRequest",
  generate(request) {
    return convertWithHttpSnippetLite(webrequest, request);
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/httpsnippet-lite/esm/targets/python/python3/client.js
var python3 = {
  info: {
    key: "python3",
    title: "http.client",
    link: "https://docs.python.org/3/library/http.client.html",
    description: "Python3 HTTP Client"
  },
  convert: ({ uriObj: { path, protocol, host }, postData, allHeaders, method }, options = {}) => {
    const { insecureSkipVerify = false } = options;
    const { push, blank, join } = new CodeBuilder();
    push("import http.client");
    if (insecureSkipVerify) {
      push("import ssl");
    }
    blank();
    if (protocol === "https:") {
      const sslContext = insecureSkipVerify ? ", context = ssl._create_unverified_context()" : "";
      push(`conn = http.client.HTTPSConnection("${host}"${sslContext})`);
      blank();
    } else {
      push(`conn = http.client.HTTPConnection("${host}")`);
      blank();
    }
    const payload = JSON.stringify(
      postData === null || postData === void 0 ? void 0 : postData.text
    );
    if (payload) {
      push(`payload = ${payload}`);
      blank();
    }
    const headers = allHeaders;
    const headerCount = Object.keys(headers).length;
    if (headerCount === 1) {
      for (const header in headers) {
        push(
          `headers = { '${header}': "${escapeForDoubleQuotes(headers[header])}" }`
        );
        blank();
      }
    } else if (headerCount > 1) {
      let count = 1;
      push("headers = {");
      for (const header in headers) {
        if (count++ !== headerCount) {
          push(`    '${header}': "${escapeForDoubleQuotes(headers[header])}",`);
        } else {
          push(`    '${header}': "${escapeForDoubleQuotes(headers[header])}"`);
        }
      }
      push("}");
      blank();
    }
    if (payload && headerCount) {
      push(`conn.request("${method}", "${path}", payload, headers)`);
    } else if (payload && !headerCount) {
      push(`conn.request("${method}", "${path}", payload)`);
    } else if (!payload && headerCount) {
      push(`conn.request("${method}", "${path}", headers=headers)`);
    } else {
      push(`conn.request("${method}", "${path}")`);
    }
    blank();
    push("res = conn.getresponse()");
    push("data = res.read()");
    blank();
    push('print(data.decode("utf-8"))');
    return join();
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/plugins/python/python3/python3.js
var pythonPython3 = {
  target: "python",
  client: "python3",
  title: "http.client",
  generate(request) {
    return convertWithHttpSnippetLite(python3, request);
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/plugins/python/requestsLike.js
var LENGTH_CONSIDERED_AS_SHORT = 40;
function convertToPythonSyntax(str) {
  const replacements = [
    ["true", "True"],
    ["false", "False"],
    ["null", "None"]
  ];
  let result = str;
  for (const [jsonVal, pythonVal] of replacements) {
    const patterns = [`(: )${jsonVal}(?=,|\\n)`, `^( +)${jsonVal}(?=,|\\n)`];
    for (const pattern of patterns) {
      result = result.replace(new RegExp(pattern, "gm"), `$1${pythonVal}`);
    }
  }
  return result;
}
function requestsLikeGenerate(clientVar, request, configuration) {
  var _a, _b, _c, _d, _e, _f;
  const normalizedRequest = {
    url: "https://example.com",
    method: "get",
    ...request
  };
  const method = normalizedRequest.method.toLowerCase();
  const options = {};
  if ((_a = normalizedRequest.headers) == null ? void 0 : _a.length) {
    options.headers = normalizedRequest.headers.reduce(
      (acc, header) => {
        if (!(header.name in acc)) {
          acc[header.name] = header.value;
        }
        return acc;
      },
      {}
    );
  }
  if ((_b = normalizedRequest.queryString) == null ? void 0 : _b.length) {
    options.params = Object.fromEntries(normalizedRequest.queryString.map((q) => [q.name, q.value]));
  }
  if ((_c = normalizedRequest.cookies) == null ? void 0 : _c.length) {
    options.cookies = Object.fromEntries(normalizedRequest.cookies.map((c2) => [c2.name, c2.value]));
  }
  if (((_d = configuration == null ? void 0 : configuration.auth) == null ? void 0 : _d.username) && ((_e = configuration == null ? void 0 : configuration.auth) == null ? void 0 : _e.password)) {
    options.auth = [configuration.auth.username, configuration.auth.password];
  }
  if (normalizedRequest.postData) {
    const { mimeType, text, params } = normalizedRequest.postData;
    if (mimeType === "application/json" && text) {
      try {
        options.json = JSON.parse(text);
      } catch {
        options.data = text;
      }
    } else if (mimeType === "application/octet-stream" && text) {
      options.data = text;
    } else if (mimeType === "multipart/form-data" && params) {
      const files = [];
      const formData = {};
      params.forEach((param) => {
        if (param.fileName !== void 0) {
          files.push({ key: param.name, file: `open("${param.fileName}", "rb")` });
        } else if (param.value !== void 0) {
          formData[param.name] = param.value;
        }
      });
      if (Object.keys(files).length) {
        options.files = files;
      }
      if (Object.keys(formData).length) {
        options.data = formData;
      }
    } else if (mimeType === "application/x-www-form-urlencoded" && params) {
      options.data = Object.fromEntries(params.map((p5) => [p5.name, p5.value]));
    }
  }
  const formattedParams = [];
  const urlParam = `"${normalizedRequest.url}"`;
  if (normalizedRequest.url.length > LENGTH_CONSIDERED_AS_SHORT) {
    formattedParams.push(urlParam);
  } else {
    formattedParams.push("");
  }
  for (const [key, value] of Object.entries(options)) {
    if (key === "auth") {
      formattedParams.push(
        `${key}=(${convertToPythonSyntax(JSON.stringify(value[0]))}, ${convertToPythonSyntax(JSON.stringify(value[1]))})`
      );
    } else if (key === "files") {
      const filesTuples = value.map(({ key: key2, file }) => `      ("${key2}", ${file})`);
      const filesStr = "[\n" + filesTuples.join(",\n") + "\n    ]";
      formattedParams.push(`${key}=${filesStr}`);
    } else if (key === "json") {
      const jsonString = convertToPythonSyntax(
        JSON.stringify(value, null, 2).split("\n").map((line, i3) => i3 === 0 ? line : "    " + line).join("\n")
      );
      formattedParams.push(`${key}=${jsonString}`);
    } else if (key === "data" && ((_f = normalizedRequest.postData) == null ? void 0 : _f.mimeType) === "application/octet-stream") {
      formattedParams.push(`${key}=b"${value}"`);
    } else {
      const str = convertToPythonSyntax(
        JSON.stringify(value, null, 2).split("\n").map((line, i3) => i3 === 0 ? line : "    " + line).join("\n")
      );
      formattedParams.push(`${key}=${str}`);
    }
  }
  if (normalizedRequest.url.length > LENGTH_CONSIDERED_AS_SHORT) {
    return `${clientVar}.${method}(
    ${formattedParams.join(",\n    ")}
)`;
  }
  if (formattedParams.length <= 1) {
    return `${clientVar}.${method}(${urlParam})`;
  }
  return `${clientVar}.${method}(${urlParam}${formattedParams.length > 1 ? "," : ""}
    ${formattedParams.slice(1).join(",\n    ")}
)`;
}

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/plugins/python/requests/requests.js
var pythonRequests = {
  target: "python",
  client: "requests",
  title: "Requests",
  generate(request, configuration) {
    return requestsLikeGenerate("requests", request, configuration);
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/plugins/python/httpx/sync.js
var pythonHttpxSync = {
  target: "python",
  client: "httpx_sync",
  title: "HTTPX (Sync)",
  generate(request, configuration) {
    return requestsLikeGenerate("httpx", request, configuration);
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/plugins/python/httpx/async.js
var pythonHttpxAsync = {
  target: "python",
  client: "httpx_async",
  title: "HTTPX (Async)",
  generate(request, configuration) {
    let formattedReq = requestsLikeGenerate("await client", request, configuration);
    formattedReq = formattedReq.split("\n").map((line) => line.trim() === "" ? line : "    " + line).join("\n");
    return `with httpx.AsyncClient() as client:
${formattedReq}`;
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/httpsnippet-lite/esm/targets/r/httr/client.js
var httr = {
  info: {
    key: "httr",
    title: "httr",
    link: "https://cran.r-project.org/web/packages/httr/vignettes/quickstart.html",
    description: "httr: Tools for Working with URLs and HTTP"
  },
  convert: ({ url, queryObj, queryString, postData, allHeaders, method }, options = {}) => {
    let _a, _b;
    const { push, blank, join } = new CodeBuilder({
      indent: (_a = options.indent) !== null && _a !== void 0 ? _a : "  "
    });
    push("library(httr)");
    blank();
    push(`url <- "${url}"`);
    blank();
    const qs = queryObj;
    delete queryObj.key;
    const entries = Object.entries(qs);
    const entriesCount = entries.length;
    if (entriesCount === 1) {
      const entry = entries[0];
      push(`queryString <- list(${entry[0]} = "${entry[1]}")`);
      blank();
    } else if (entriesCount > 1) {
      push("queryString <- list(");
      entries.forEach(([key, value], i3) => {
        const isLastItem = i3 !== entriesCount - 1;
        const maybeComma = isLastItem ? "," : "";
        push(`${key} = "${value}"${maybeComma}`, 1);
      });
      push(")");
      blank();
    }
    const payload = JSON.stringify(
      postData === null || postData === void 0 ? void 0 : postData.text
    );
    if (payload) {
      push(`payload <- ${payload}`);
      blank();
    }
    if (postData && (postData.text || postData.jsonObj || postData.params)) {
      switch (postData.mimeType) {
        case "application/x-www-form-urlencoded":
          push('encode <- "form"');
          blank();
          break;
        case "application/json":
          push('encode <- "json"');
          blank();
          break;
        case "multipart/form-data":
          push('encode <- "multipart"');
          blank();
          break;
        default:
          push('encode <- "raw"');
          blank();
          break;
      }
    }
    const cookieHeader = getHeader(allHeaders, "cookie");
    const acceptHeader = getHeader(allHeaders, "accept");
    const setCookies = cookieHeader ? `set_cookies(\`${String(cookieHeader).replace(/;/g, '", `').replace(/` /g, "`").replace(/[=]/g, '` = "')}")` : void 0;
    const setAccept = acceptHeader ? `accept("${escapeForDoubleQuotes(acceptHeader)}")` : void 0;
    const setContentType = `content_type("${escapeForDoubleQuotes((_b = postData === null || postData === void 0 ? void 0 : postData.mimeType) !== null && _b !== void 0 ? _b : "application/octet-stream")}")`;
    const otherHeaders = Object.entries(allHeaders).filter(
      ([key]) => !["cookie", "accept", "content-type"].includes(key.toLowerCase())
    ).map(([key, value]) => `'${key}' = '${escapeForSingleQuotes(value)}'`).join(", ");
    const setHeaders = otherHeaders ? `add_headers(${otherHeaders})` : void 0;
    let request = `response <- VERB("${method}", url`;
    if (payload) {
      request += ", body = payload";
    }
    if (queryString.length) {
      request += ", query = queryString";
    }
    const headerAdditions = [setHeaders, setContentType, setAccept, setCookies].filter((x3) => !!x3).join(", ");
    if (headerAdditions) {
      request += `, ${headerAdditions}`;
    }
    if (postData && (postData.text || postData.jsonObj || postData.params)) {
      request += ", encode = encode";
    }
    request += ")";
    push(request);
    blank();
    push('content(response, "text")');
    return join();
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/plugins/r/httr/httr.js
var rHttr = {
  target: "r",
  client: "httr",
  title: "httr",
  generate(request) {
    return convertWithHttpSnippetLite(httr, request);
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/httpsnippet-lite/esm/targets/ruby/native/client.js
var native2 = {
  info: {
    key: "native",
    title: "net::http",
    link: "http://ruby-doc.org/stdlib-2.2.1/libdoc/net/http/rdoc/Net/HTTP.html",
    description: "Ruby HTTP client"
  },
  convert: ({ uriObj, method: rawMethod, fullUrl, postData, allHeaders }, options = {}) => {
    const { insecureSkipVerify = false } = options;
    const { push, blank, join } = new CodeBuilder();
    push("require 'uri'");
    push("require 'net/http'");
    blank();
    const method = rawMethod.toUpperCase();
    const methods = [
      "GET",
      "POST",
      "HEAD",
      "DELETE",
      "PATCH",
      "PUT",
      "OPTIONS",
      "COPY",
      "LOCK",
      "UNLOCK",
      "MOVE",
      "TRACE"
    ];
    const capMethod = method.charAt(0) + method.substring(1).toLowerCase();
    if (!methods.includes(method)) {
      push(`class Net::HTTP::${capMethod} < Net::HTTPRequest`);
      push(`  METHOD = '${method.toUpperCase()}'`);
      push(
        `  REQUEST_HAS_BODY = '${(postData === null || postData === void 0 ? void 0 : postData.text) ? "true" : "false"}'`
      );
      push("  RESPONSE_HAS_BODY = true");
      push("end");
      blank();
    }
    push(`url = URI("${fullUrl}")`);
    blank();
    push("http = Net::HTTP.new(url.host, url.port)");
    if (uriObj.protocol === "https:") {
      push("http.use_ssl = true");
      if (insecureSkipVerify) {
        push("http.verify_mode = OpenSSL::SSL::VERIFY_NONE");
      }
    }
    blank();
    push(`request = Net::HTTP::${capMethod}.new(url)`);
    const headers = Object.keys(allHeaders);
    if (headers.length) {
      headers.forEach((key) => {
        push(`request["${key}"] = '${escapeForSingleQuotes(allHeaders[key])}'`);
      });
    }
    if (postData === null || postData === void 0 ? void 0 : postData.text) {
      push(`request.body = ${JSON.stringify(postData.text)}`);
    }
    blank();
    push("response = http.request(request)");
    push("puts response.read_body");
    return join();
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/plugins/ruby/native/native.js
var rubyNative = {
  target: "ruby",
  client: "native",
  title: "net::http",
  generate(request) {
    return convertWithHttpSnippetLite(native2, request);
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/plugins/shell/curl/curl.js
var shellCurl = {
  target: "shell",
  client: "curl",
  title: "Curl",
  generate(request, configuration) {
    var _a, _b, _c, _d, _e;
    const normalizedRequest = {
      method: "GET",
      ...request
    };
    normalizedRequest.method = normalizedRequest.method.toUpperCase();
    const parts = ["curl"];
    const queryString = ((_a = normalizedRequest.queryString) == null ? void 0 : _a.length) ? "?" + normalizedRequest.queryString.map((param) => {
      const encodedName = encodeURIComponent(param.name);
      const encodedValue = encodeURIComponent(param.value);
      return `${encodedName}=${encodedValue}`;
    }).join("&") : "";
    const url = `${normalizedRequest.url}${queryString}`;
    const hasSpecialChars = /[\s<>[\]{}|\\^%]/.test(url);
    const urlPart = queryString || hasSpecialChars ? `'${url}'` : url;
    parts[0] = `curl ${urlPart}`;
    if (normalizedRequest.method !== "GET") {
      parts.push(`--request ${normalizedRequest.method}`);
    }
    if (((_b = configuration == null ? void 0 : configuration.auth) == null ? void 0 : _b.username) && ((_c = configuration == null ? void 0 : configuration.auth) == null ? void 0 : _c.password)) {
      parts.push(`--user '${configuration.auth.username}:${configuration.auth.password}'`);
    }
    if ((_d = normalizedRequest.headers) == null ? void 0 : _d.length) {
      normalizedRequest.headers.forEach((header) => {
        parts.push(`--header '${header.name}: ${header.value}'`);
      });
      const acceptEncoding = normalizedRequest.headers.find((header) => header.name.toLowerCase() === "accept-encoding");
      if (acceptEncoding && /gzip|deflate/.test(acceptEncoding.value)) {
        parts.push("--compressed");
      }
    }
    if ((_e = normalizedRequest.cookies) == null ? void 0 : _e.length) {
      const cookieString = normalizedRequest.cookies.map((cookie) => {
        const encodedName = encodeURIComponent(cookie.name);
        const encodedValue = encodeURIComponent(cookie.value);
        return `${encodedName}=${encodedValue}`;
      }).join("; ");
      parts.push(`--cookie '${cookieString}'`);
    }
    if (normalizedRequest.postData) {
      if (normalizedRequest.postData.mimeType === "application/json") {
        if (normalizedRequest.postData.text) {
          try {
            const jsonData = JSON.parse(normalizedRequest.postData.text);
            const prettyJson = JSON.stringify(jsonData, null, 2);
            parts.push(`--data '${prettyJson}'`);
          } catch {
            parts.push(`--data '${normalizedRequest.postData.text}'`);
          }
        }
      } else if (normalizedRequest.postData.mimeType === "application/octet-stream") {
        parts.push(`--data-binary '${normalizedRequest.postData.text}'`);
      } else if (normalizedRequest.postData.mimeType === "application/x-www-form-urlencoded" && normalizedRequest.postData.params) {
        normalizedRequest.postData.params.forEach((param) => {
          parts.push(`--data-urlencode '${encodeURIComponent(param.name)}=${param.value}'`);
        });
      } else if (normalizedRequest.postData.mimeType === "multipart/form-data" && normalizedRequest.postData.params) {
        normalizedRequest.postData.params.forEach((param) => {
          if (param.fileName !== void 0) {
            parts.push(`--form '${param.name}=@${param.fileName}'`);
          } else {
            parts.push(`--form '${param.name}=${param.value}'`);
          }
        });
      } else {
        try {
          const jsonData = JSON.parse(normalizedRequest.postData.text ?? "");
          const prettyJson = JSON.stringify(jsonData, null, 2);
          parts.push(`--data '${prettyJson}'`);
        } catch {
          parts.push(`--data '${normalizedRequest.postData.text}'`);
        }
      }
    }
    return parts.join(" \\\n  ");
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/httpsnippet-lite/esm/helpers/shell.js
var quote = (value = "") => {
  const safe = /^[a-z0-9-_/.@%^=:]+$/i;
  const isShellSafe = safe.test(value);
  if (isShellSafe) {
    return value;
  }
  return `'${value.replace(/'/g, "'\\''")}'`;
};
var escape = (value) => value.replace(/\r/g, "\\r").replace(/\n/g, "\\n");

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/httpsnippet-lite/esm/targets/shell/httpie/client.js
var httpie = {
  info: {
    key: "httpie",
    title: "HTTPie",
    link: "http://httpie.org/",
    description: "a CLI, cURL-like tool for humans"
  },
  convert: ({ allHeaders, postData, queryObj, fullUrl, method, url }, options) => {
    var _a, _b;
    const opts = {
      body: false,
      cert: false,
      headers: false,
      indent: "  ",
      pretty: false,
      print: false,
      queryParams: false,
      short: false,
      style: false,
      timeout: false,
      verbose: false,
      verify: false,
      ...options
    };
    const { push, join, unshift } = new CodeBuilder({
      indent: opts.indent,
      // @ts-expect-error SEEMS LEGIT
      join: opts.indent !== false ? ` \\
${opts.indent}` : " "
    });
    let raw = false;
    const flags = [];
    if (opts.headers) {
      flags.push(opts.short ? "-h" : "--headers");
    }
    if (opts.body) {
      flags.push(opts.short ? "-b" : "--body");
    }
    if (opts.verbose) {
      flags.push(opts.short ? "-v" : "--verbose");
    }
    if (opts.print) {
      flags.push(`${opts.short ? "-p" : "--print"}=${opts.print}`);
    }
    if (opts.verify) {
      flags.push(`--verify=${opts.verify}`);
    }
    if (opts.cert) {
      flags.push(`--cert=${opts.cert}`);
    }
    if (opts.pretty) {
      flags.push(`--pretty=${opts.pretty}`);
    }
    if (opts.style) {
      flags.push(`--style=${opts.style}`);
    }
    if (opts.timeout) {
      flags.push(`--timeout=${opts.timeout}`);
    }
    if (opts.queryParams) {
      Object.keys(queryObj).forEach((name) => {
        const value = queryObj[name];
        if (Array.isArray(value)) {
          value.forEach((val) => {
            push(`${name}==${quote(val)}`);
          });
        } else {
          push(`${name}==${quote(value)}`);
        }
      });
    }
    Object.keys(allHeaders).sort().forEach((key) => {
      push(`${key}:${quote(allHeaders[key])}`);
    });
    if ((postData === null || postData === void 0 ? void 0 : postData.mimeType) === "application/x-www-form-urlencoded") {
      if ((_a = postData.params) == null ? void 0 : _a.length) {
        flags.push(opts.short ? "-f" : "--form");
        postData.params.forEach((param) => {
          push(`${param.name}=${quote(param.value)}`);
        });
      }
    } else if ((postData === null || postData === void 0 ? void 0 : postData.mimeType) === "multipart/form-data") {
      if ((_b = postData.params) == null ? void 0 : _b.length) {
        flags.push("--multipart");
        postData.params.forEach((param) => {
          if (param.fileName) {
            push(`${param.name}@${quote(param.fileName)}`);
          } else {
            push(`${param.name}='${quote(param.value)}'`);
          }
        });
      }
    } else {
      raw = true;
    }
    const cliFlags = flags.length ? `${flags.join(" ")} ` : "";
    url = quote(opts.queryParams ? url : fullUrl);
    unshift(`http ${cliFlags}${method} ${url}`);
    if (raw && (postData === null || postData === void 0 ? void 0 : postData.text)) {
      const postDataText = quote(postData.text);
      unshift(`echo ${postDataText} | `);
    }
    return join();
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/plugins/shell/httpie/httpie.js
var shellHttpie = {
  target: "shell",
  client: "httpie",
  title: "HTTPie",
  generate(request) {
    return convertWithHttpSnippetLite(httpie, request);
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/httpsnippet-lite/esm/targets/shell/wget/client.js
var wget = {
  info: {
    key: "wget",
    title: "Wget",
    link: "https://www.gnu.org/software/wget/",
    description: "a free software package for retrieving files using HTTP, HTTPS"
  },
  convert: ({ method, postData, allHeaders, fullUrl }, options) => {
    const opts = {
      indent: "  ",
      short: false,
      verbose: false,
      ...options
    };
    const { push, join } = new CodeBuilder({
      indent: opts.indent,
      // @ts-expect-error SEEMS LEGIT
      join: opts.indent !== false ? ` \\
${opts.indent}` : " "
    });
    if (opts.verbose) {
      push(`wget ${opts.short ? "-v" : "--verbose"}`);
    } else {
      push(`wget ${opts.short ? "-q" : "--quiet"}`);
    }
    push(`--method ${quote(method)}`);
    Object.keys(allHeaders).forEach((key) => {
      const header = `${key}: ${allHeaders[key]}`;
      push(`--header ${quote(header)}`);
    });
    if (postData === null || postData === void 0 ? void 0 : postData.text) {
      push(`--body-data ${escape(quote(postData.text))}`);
    }
    push(opts.short ? "-O" : "--output-document");
    push(`- ${quote(fullUrl)}`);
    return join();
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/plugins/shell/wget/wget.js
var shellWget = {
  target: "shell",
  client: "wget",
  title: "Wget",
  generate(request) {
    return convertWithHttpSnippetLite(wget, request);
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/httpsnippet-lite/esm/targets/swift/helpers.js
var buildString = (length, str) => str.repeat(length);
var concatArray = (arr, pretty, indentation, indentLevel) => {
  const currentIndent = buildString(indentLevel, indentation);
  const closingBraceIndent = buildString(indentLevel - 1, indentation);
  const join = pretty ? `,
${currentIndent}` : ", ";
  if (pretty) {
    return `[
${currentIndent}${arr.join(join)}
${closingBraceIndent}]`;
  }
  return `[${arr.join(join)}]`;
};
var literalDeclaration = (name, parameters, opts) => `let ${name} = ${literalRepresentation2(parameters, opts)}`;
var literalRepresentation2 = (value, opts, indentLevel) => {
  indentLevel = indentLevel === void 0 ? 1 : indentLevel + 1;
  switch (Object.prototype.toString.call(value)) {
    case "[object Number]":
      return value;
    case "[object Array]": {
      let pretty = false;
      const valuesRepresentation = value.map((v3) => {
        if (Object.prototype.toString.call(v3) === "[object Object]") {
          pretty = Object.keys(v3).length > 1;
        }
        return literalRepresentation2(v3, opts, indentLevel);
      });
      return concatArray(valuesRepresentation, pretty, opts.indent, indentLevel);
    }
    case "[object Object]": {
      const keyValuePairs = [];
      for (const key in value) {
        keyValuePairs.push(
          `"${key}": ${literalRepresentation2(value[key], opts, indentLevel)}`
        );
      }
      return concatArray(
        keyValuePairs,
        // @ts-expect-error needs better types
        opts.pretty && keyValuePairs.length > 1,
        // @ts-expect-error needs better types
        opts.indent,
        indentLevel
      );
    }
    case "[object Boolean]":
      return value.toString();
    default:
      if (value === null || value === void 0) {
        return "";
      }
      return `"${value.toString().replace(/"/g, '\\"')}"`;
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/httpsnippet-lite/esm/targets/swift/nsurlsession/client.js
var nsurlsession2 = {
  info: {
    key: "nsurlsession",
    title: "NSURLSession",
    link: "https://developer.apple.com/library/mac/documentation/Foundation/Reference/NSURLSession_class/index.html",
    description: "Foundation's NSURLSession request"
  },
  convert: ({ allHeaders, postData, fullUrl, method }, options) => {
    let _a;
    const opts = {
      indent: "  ",
      pretty: true,
      timeout: "10",
      ...options
    };
    const { push, blank, join } = new CodeBuilder({ indent: opts.indent });
    const req = {
      hasHeaders: false,
      hasBody: false
    };
    push("import Foundation");
    if (Object.keys(allHeaders).length) {
      req.hasHeaders = true;
      blank();
      push(literalDeclaration("headers", allHeaders, opts));
    }
    if (postData && (postData.text || postData.jsonObj || postData.params)) {
      req.hasBody = true;
      switch (postData.mimeType) {
        case "application/x-www-form-urlencoded":
          blank();
          if ((_a = postData.params) === null || _a === void 0 ? void 0 : _a.length) {
            const [head, ...tail] = postData.params;
            push(
              `let postData = NSMutableData(data: "${head.name}=${head.value}".data(using: String.Encoding.utf8)!)`
            );
            tail.forEach(({ name, value }) => {
              push(
                `postData.append("&${name}=${value}".data(using: String.Encoding.utf8)!)`
              );
            });
          } else {
            req.hasBody = false;
          }
          break;
        case "application/json":
          if (postData.jsonObj) {
            push(
              `${literalDeclaration("parameters", postData.jsonObj, opts)} as [String : Any]`
            );
            blank();
            push(
              "let postData = JSONSerialization.data(withJSONObject: parameters, options: [])"
            );
          }
          break;
        case "multipart/form-data":
          push(literalDeclaration("parameters", postData.params, opts));
          blank();
          push(`let boundary = "${postData.boundary}"`);
          blank();
          push('var body = ""');
          push("var error: NSError? = nil");
          push("for param in parameters {");
          push('let paramName = param["name"]!', 1);
          push('body += "--\\(boundary)\\r\\n"', 1);
          push(
            'body += "Content-Disposition:form-data; name=\\"\\(paramName)\\""',
            1
          );
          push('if let filename = param["fileName"] {', 1);
          push('let contentType = param["content-type"]!', 2);
          push(
            "let fileContent = String(contentsOfFile: filename, encoding: String.Encoding.utf8)",
            2
          );
          push("if (error != nil) {", 2);
          push("print(error as Any)", 3);
          push("}", 2);
          push('body += "; filename=\\"\\(filename)\\"\\r\\n"', 2);
          push('body += "Content-Type: \\(contentType)\\r\\n\\r\\n"', 2);
          push("body += fileContent", 2);
          push('} else if let paramValue = param["value"] {', 1);
          push('body += "\\r\\n\\r\\n\\(paramValue)"', 2);
          push("}", 1);
          push("}");
          break;
        default:
          blank();
          push(
            `let postData = NSData(data: "${postData.text}".data(using: String.Encoding.utf8)!)`
          );
      }
    }
    blank();
    push(
      `let request = NSMutableURLRequest(url: NSURL(string: "${fullUrl}")! as URL,`
    );
    push(
      "                                        cachePolicy: .useProtocolCachePolicy,"
    );
    push(
      // @ts-expect-error needs better types
      `                                    timeoutInterval: ${Number.parseInt(opts.timeout, 10).toFixed(1)})`
    );
    push(`request.httpMethod = "${method}"`);
    if (req.hasHeaders) {
      push("request.allHTTPHeaderFields = headers");
    }
    if (req.hasBody) {
      push("request.httpBody = postData as Data");
    }
    blank();
    push("let session = URLSession.shared");
    push(
      "let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in"
    );
    push("if (error != nil) {", 1);
    push("print(error as Any)", 2);
    push("} else {", 1);
    push("let httpResponse = response as? HTTPURLResponse", 2);
    push("print(httpResponse)", 2);
    push("}", 1);
    push("})");
    blank();
    push("dataTask.resume()");
    return join();
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/plugins/swift/nsurlsession/nsurlsession.js
var swiftNsurlsession = {
  target: "swift",
  client: "nsurlsession",
  title: "NSURLSession",
  generate(request) {
    return convertWithHttpSnippetLite(nsurlsession2, request);
  }
};

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/clients.js
var clients = [
  {
    key: "c",
    title: "C",
    default: "libcurl",
    clients: [cLibcurl]
  },
  {
    key: "csharp",
    title: "C#",
    default: "restsharp",
    clients: [csharpHttpclient, csharpRestsharp]
  },
  {
    key: "clojure",
    title: "Clojure",
    default: "clj_http",
    clients: [clojureCljhttp]
  },
  {
    key: "dart",
    title: "Dart",
    default: "http",
    clients: [dartHttp]
  },
  {
    key: "go",
    title: "Go",
    default: "native",
    clients: [goNative]
  },
  {
    key: "http",
    title: "HTTP",
    default: "http1.1",
    clients: [httpHttp11]
  },
  {
    key: "java",
    title: "Java",
    default: "unirest",
    clients: [javaAsynchttp, javaNethttp, javaOkhttp, javaUnirest]
  },
  {
    key: "js",
    title: "JavaScript",
    default: "fetch",
    clients: [jsFetch, jsAxios, jsOfetch, jsJquery, jsXhr]
  },
  {
    key: "kotlin",
    title: "Kotlin",
    default: "okhttp",
    clients: [kotlinOkhttp]
  },
  {
    key: "node",
    title: "Node.js",
    default: "fetch",
    clients: [nodeFetch, nodeAxios, nodeOfetch, nodeUndici]
  },
  {
    key: "objc",
    title: "Objective-C",
    default: "nsurlsession",
    clients: [objcNsurlsession]
  },
  {
    key: "ocaml",
    title: "OCaml",
    default: "cohttp",
    clients: [ocamlCohttp]
  },
  {
    key: "php",
    title: "PHP",
    default: "curl",
    clients: [phpCurl, phpGuzzle]
  },
  {
    key: "powershell",
    title: "Powershell",
    default: "webrequest",
    clients: [powershellWebrequest, powershellRestmethod]
  },
  {
    key: "python",
    title: "Python",
    default: "python3",
    clients: [pythonPython3, pythonRequests, pythonHttpxSync, pythonHttpxAsync]
  },
  {
    key: "r",
    title: "R",
    default: "httr",
    clients: [rHttr]
  },
  {
    key: "ruby",
    title: "Ruby",
    default: "native",
    clients: [rubyNative]
  },
  {
    key: "shell",
    title: "Shell",
    default: "curl",
    clients: [shellCurl, shellWget, shellHttpie]
  },
  {
    key: "swift",
    title: "Swift",
    default: "nsurlsession",
    clients: [swiftNsurlsession]
  }
];

// node_modules/.pnpm/@scalar+snippetz@0.3.1/node_modules/@scalar/snippetz/dist/snippetz.js
function snippetz() {
  function findPlugin(target, client) {
    var _a;
    return (_a = clients.find(({ key }) => key === target)) == null ? void 0 : _a.clients.find((plugin) => plugin.client === client);
  }
  return {
    print(target, client, request) {
      var _a;
      return (_a = findPlugin(target, client)) == null ? void 0 : _a.generate(request);
    },
    clients() {
      return clients;
    },
    plugins() {
      return clients.flatMap(
        ({ key, clients: clients2 }) => clients2.map((plugin) => ({
          target: key,
          client: plugin.client
        }))
      );
    },
    findPlugin,
    hasPlugin(target, client) {
      return Boolean(findPlugin(target, client));
    }
  };
}

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/SectionFilterButton.vue.js
var l = ["aria-controls", "aria-selected", "tabindex"];
var p3 = defineComponent({
  __name: "SectionFilterButton",
  props: {
    selected: { type: Boolean },
    controls: {}
  },
  setup(a5) {
    return (e3, c2) => (openBlock(), createElementBlock("button", {
      "aria-controls": e3.controls ?? "",
      "aria-selected": !!e3.selected,
      class: normalizeClass(["hover:bg-b-2 flex w-fit cursor-pointer items-center rounded p-1 px-2 text-center font-medium whitespace-nowrap has-[:focus-visible]:outline", { "text-c-1 pointer-events-none": e3.selected }]),
      role: "tab",
      tabindex: e3.selected ? 0 : -1,
      type: "button"
    }, [
      renderSlot(e3.$slots, "default")
    ], 10, l));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/SectionFilter.vue2.js
var _4 = { class: "request-section-content request-section-content-filter fade-request-section-content text-c-3 pointer-events-auto relative hidden w-full justify-end gap-[1.5px] rounded py-2 text-xs xl:flex" };
var $3 = { class: "context-bar-group-hover:text-c-1 absolute top-1/2 -right-[30px] flex -translate-y-1/2 items-center" };
var F = { class: "context-bar-group-hover:hidden mr-1.5" };
var K = defineComponent({
  __name: "SectionFilter",
  props: mergeModels({
    filters: { default: () => [] },
    filterIds: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(l2) {
    const t = useModel(l2, "modelValue"), r4 = ref(), c2 = (s5) => {
      const o = s5 === "prev" ? -1 : 1, e3 = t.value ? l2.filters.indexOf(t.value) : 0, n4 = l2.filters.length, d3 = (e3 + o + n4) % n4;
      t.value = l2.filters[d3], nextTick(() => {
        if (r4.value) {
          const u3 = r4.value.querySelector(
            'button[aria-selected="true"]'
          );
          u3 && u3.focus();
        }
      });
    };
    return (s5, o) => (openBlock(), createElementBlock("div", {
      ref_key: "tablist",
      ref: r4,
      class: "filter-hover context-bar-group ml-auto hidden lg:flex",
      role: "tablist",
      onKeydown: [
        o[0] || (o[0] = withKeys((e3) => c2("prev"), ["left"])),
        o[1] || (o[1] = withKeys((e3) => c2("next"), ["right"]))
      ]
    }, [
      createBaseVNode("div", _4, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(s5.filters, (e3) => {
          var n4;
          return openBlock(), createBlock(p3, {
            key: e3,
            class: "filter-hover-item",
            controls: (n4 = s5.filterIds) == null ? void 0 : n4[e3],
            role: "tab",
            selected: t.value === e3,
            onClick: (d3) => t.value = e3
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(e3), 1)
            ]),
            _: 2
          }, 1032, ["controls", "selected", "onClick"]);
        }), 128)),
        createBaseVNode("div", $3, [
          createBaseVNode("span", F, toDisplayString(t.value), 1),
          createVNode(unref(m2), {
            icon: "FilterList",
            size: "md",
            thickness: "2"
          })
        ])
      ])
    ], 544));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/SectionFilter.vue.js
var a = s(K, [["__scopeId", "data-v-cac0985e"]]);

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/libs/request.js
var m4 = (e3) => !!(e3.description || e3.type || e3.default || e3.format || e3.minimum || e3.maximum);
var n = (e3) => computed(() => {
  if (e3.value === void 0 || e3.value === "")
    return false;
  if (e3.type) {
    if (e3.type === "integer") {
      const a5 = Number(e3.value);
      if (isNaN(a5) || !Number.isInteger(a5))
        return "Value must be a whole number (e.g., 42)";
      if (e3.minimum !== void 0 && a5 < e3.minimum)
        return `Value must be ${e3.minimum} or greater`;
      if (e3.maximum !== void 0 && a5 > e3.maximum)
        return `Value must be ${e3.maximum} or less`;
    }
    if (e3.type === "number") {
      const a5 = Number(e3.value);
      if (isNaN(a5))
        return "Value must be a number (e.g., 42.5)";
      if (e3.minimum !== void 0 && a5 < e3.minimum)
        return `Value must be ${e3.minimum} or greater`;
      if (e3.maximum !== void 0 && a5 > e3.maximum)
        return `Value must be ${e3.maximum} or less`;
    }
    if (e3.type === "string" && e3.format) {
      if (e3.format === "date" && !/^\d{4}-\d{2}-\d{2}$/.test(e3.value))
        return "Please enter a valid date in YYYY-MM-DD format (e.g., 2024-03-20)";
      if (e3.format === "date-time" && !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})$/.test(e3.value))
        return "Please enter a valid date and time in RFC 3339 format (e.g., 2024-03-20T13:45:30Z)";
      if (e3.format === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e3.value))
        return "Please enter a valid email address (e.g., user@example.com)";
      if (e3.format === "uri" && !/^[a-zA-Z][a-zA-Z0-9+.-]*:.+$/.test(e3.value))
        return "Please enter a valid URI (e.g., https://example.com)";
    }
  }
  return false;
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/RequestSection/RequestTableTooltip.vue2.js
var y2 = ["aria-label", "role"];
var k2 = { class: "w-content text-xxs text-c-1 grid min-w-48 gap-1.5 rounded px-1.5 pt-2 pb-1.5 leading-none" };
var g = {
  key: 0,
  class: "text-error-1"
};
var b3 = {
  key: 1,
  class: "schema text-c-2 flex items-center"
};
var _5 = { key: 0 };
var I2 = { key: 1 };
var x2 = { key: 2 };
var S = { key: 3 };
var w = { key: 4 };
var B = {
  key: 2,
  class: "text-sm leading-snug text-pretty",
  style: { maxWidth: "16rem" }
};
var V = defineComponent({
  __name: "RequestTableTooltip",
  props: {
    item: {}
  },
  setup(u3) {
    const m8 = computed(() => !!n(u3.item).value);
    return (e3, C) => (openBlock(), createBlock(unref(b), {
      teleport: "",
      offset: 4,
      placement: "left"
    }, {
      popover: withCtx(() => [
        createBaseVNode("div", k2, [
          m8.value ? (openBlock(), createElementBlock("div", g, toDisplayString(unref(n)(e3.item).value), 1)) : e3.item.type || e3.item.format || e3.item.minimum || e3.item.maximum || e3.item.default ? (openBlock(), createElementBlock("div", b3, [
            e3.item.type ? (openBlock(), createElementBlock("span", _5, toDisplayString(e3.item.type), 1)) : createCommentVNode("", true),
            e3.item.format ? (openBlock(), createElementBlock("span", I2, toDisplayString(e3.item.format), 1)) : createCommentVNode("", true),
            e3.item.minimum ? (openBlock(), createElementBlock("span", x2, "min: " + toDisplayString(e3.item.minimum), 1)) : createCommentVNode("", true),
            e3.item.maximum ? (openBlock(), createElementBlock("span", S, "max: " + toDisplayString(e3.item.maximum), 1)) : createCommentVNode("", true),
            e3.item.default ? (openBlock(), createElementBlock("span", w, "default: " + toDisplayString(e3.item.default), 1)) : createCommentVNode("", true)
          ])) : createCommentVNode("", true),
          e3.item.description && !m8.value ? (openBlock(), createElementBlock("span", B, toDisplayString(e3.item.description), 1)) : createCommentVNode("", true)
        ])
      ]),
      default: withCtx(() => [
        createBaseVNode("button", {
          type: "button",
          "aria-label": m8.value ? "Input is invalid" : "More Information",
          class: "text-c-2 hover:text-c-1 hover:bg-b-2 rounded p-1",
          role: m8.value ? "alert" : "none"
        }, [
          m8.value ? (openBlock(), createBlock(unref(H), {
            key: 0,
            class: "text-orange size-3.5 brightness-90 hover:brightness-75"
          })) : (openBlock(), createBlock(unref(_), {
            key: 1,
            class: "text-c-2 hover:text-c-1 size-3.5"
          }))
        ], 8, y2)
      ]),
      _: 1
    }));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/RequestSection/RequestTableTooltip.vue.js
var a2 = s(V, [["__scopeId", "data-v-4df72868"]]);

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/RequestSection/RequestTable.vue2.js
var O2 = { class: "text-c-2 filemask flex w-full max-w-[100%] items-end justify-end overflow-hidden p-1" };
var A2 = ["onClick"];
var L = {
  key: 1,
  class: "p-0.5"
};
var ne = defineComponent({
  __name: "RequestTable",
  props: {
    items: {},
    hasCheckboxDisabled: { type: Boolean, default: false },
    showUploadButton: { type: Boolean, default: false },
    isGlobal: { type: Boolean, default: false },
    isReadOnly: { type: Boolean, default: false },
    environment: {},
    envVariables: {},
    workspace: {},
    invalidParams: {},
    label: {}
  },
  emits: ["updateRow", "toggleRow", "addRow", "deleteRow", "inputFocus", "inputBlur", "uploadFile", "removeFile"],
  setup(x3, { emit: F4 }) {
    const m8 = x3, t = F4, U3 = ["", "", "36px"], w2 = (e3, o, l2) => {
      t("updateRow", e3, o, l2);
    }, S2 = (e3) => {
      t("uploadFile", e3);
    }, T3 = (e3) => Array.isArray(e3.default) && e3.default.length === 1 ? e3.default[0] : e3.default, I4 = (e3) => !!(e3.key || e3.value);
    return (e3, o) => (openBlock(), createBlock(_3, {
      class: "group/table flex-1",
      columns: U3
    }, {
      default: withCtx(() => [
        createVNode(d, { class: "sr-only !block" }, {
          default: withCtx(() => [
            createVNode(x, null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(e3.label) + " Enabled", 1)
              ]),
              _: 1
            }),
            createVNode(x, null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(e3.label) + " Key", 1)
              ]),
              _: 1
            }),
            createVNode(x, null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(e3.label) + " Value", 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        (openBlock(true), createElementBlock(Fragment, null, renderList(e3.items, (l2, d3) => (openBlock(), createBlock(d, {
          id: l2.key,
          key: d3,
          class: normalizeClass({
            alert: unref(n)(l2).value,
            error: e3.invalidParams && e3.invalidParams.has(l2.key)
          })
        }, {
          default: withCtx(() => [
            e3.isGlobal ? (openBlock(), createBlock(unref(RouterLink), {
              key: 0,
              class: "text-c-2 flex items-center justify-center border-t !border-r",
              to: l2.route ?? {}
            }, {
              default: withCtx(() => [
                o[4] || (o[4] = createBaseVNode("span", { class: "sr-only" }, "Global", -1)),
                createVNode(unref(i), {
                  content: "Global cookies are shared across the whole workspace.",
                  placement: "top"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(m2), {
                      tabindex: "0",
                      class: "text-c-1",
                      icon: "Globe",
                      size: "xs"
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 2
            }, 1032, ["to"])) : (openBlock(), createBlock(y, {
              key: 1,
              class: "!border-r",
              disabled: m8.hasCheckboxDisabled,
              modelValue: l2.enabled,
              "onUpdate:modelValue": (a5) => t("toggleRow", d3, a5)
            }, null, 8, ["disabled", "modelValue", "onUpdate:modelValue"])),
            createVNode(f, null, {
              default: withCtx(() => [
                createVNode(e, {
                  "aria-label": `${e3.label} Key`,
                  disableCloseBrackets: "",
                  disabled: m8.isReadOnly,
                  disableEnter: "",
                  disableTabIndent: "",
                  lineWrapping: "",
                  envVariables: e3.envVariables,
                  environment: e3.environment,
                  modelValue: l2.key,
                  placeholder: "Key",
                  required: !!l2.required,
                  workspace: e3.workspace,
                  onBlur: o[0] || (o[0] = (a5) => t("inputBlur")),
                  onFocus: o[1] || (o[1] = (a5) => t("inputFocus")),
                  onSelectVariable: (a5) => w2(d3, "key", a5),
                  "onUpdate:modelValue": (a5) => t("updateRow", d3, "key", a5)
                }, null, 8, ["aria-label", "disabled", "envVariables", "environment", "modelValue", "required", "workspace", "onSelectVariable", "onUpdate:modelValue"])
              ]),
              _: 2
            }, 1024),
            createVNode(f, null, {
              default: withCtx(() => [
                createVNode(e, {
                  "aria-label": `${e3.label} Value`,
                  class: normalizeClass(
                    unref(m4)(l2) ? "pr-6 group-hover:pr-10 group-has-[.cm-focused]:pr-10" : "group-hover:pr-6 group-has-[.cm-focused]:pr-6"
                  ),
                  default: l2.default,
                  disableCloseBrackets: "",
                  disabled: m8.isReadOnly,
                  disableEnter: "",
                  disableTabIndent: "",
                  lineWrapping: "",
                  enum: l2.enum ?? [],
                  envVariables: e3.envVariables,
                  environment: e3.environment,
                  examples: l2.examples ?? [],
                  max: l2.maximum,
                  min: l2.minimum,
                  modelValue: l2.value,
                  nullable: !!l2.nullable,
                  placeholder: "Value",
                  type: l2.type,
                  workspace: e3.workspace,
                  onBlur: o[2] || (o[2] = (a5) => t("inputBlur")),
                  onFocus: o[3] || (o[3] = (a5) => t("inputFocus")),
                  onSelectVariable: (a5) => w2(d3, "value", a5),
                  "onUpdate:modelValue": (a5) => t("updateRow", d3, "value", a5)
                }, {
                  icon: withCtx(() => [
                    I4(l2) && !l2.required ? (openBlock(), createBlock(unref($), {
                      key: 0,
                      class: normalizeClass([{
                        "-mr-0.5": unref(m4)(l2)
                      }, "text-c-2 hover:text-c-1 hover:bg-b-2 z-context hidden h-fit rounded p-1 group-hover:flex group-has-[.cm-focused]:flex"]),
                      size: "sm",
                      variant: "ghost",
                      onClick: (a5) => t("deleteRow", d3)
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(A), { class: "size-3.5" })
                      ]),
                      _: 2
                    }, 1032, ["class", "onClick"])) : createCommentVNode("", true),
                    unref(m4)(l2) ? (openBlock(), createBlock(a2, {
                      key: 1,
                      item: { ...l2, default: T3(l2) }
                    }, null, 8, ["item"])) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1032, ["aria-label", "class", "default", "disabled", "enum", "envVariables", "environment", "examples", "max", "min", "modelValue", "nullable", "type", "workspace", "onSelectVariable", "onUpdate:modelValue"])
              ]),
              _: 2
            }, 1024),
            e3.showUploadButton ? (openBlock(), createBlock(f, {
              key: 2,
              class: "group/upload flex items-center justify-center whitespace-nowrap"
            }, {
              default: withCtx(() => {
                var a5;
                return [
                  l2.file ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    createBaseVNode("div", O2, [
                      createBaseVNode("span", null, toDisplayString((a5 = l2.file) == null ? void 0 : a5.name), 1)
                    ]),
                    createBaseVNode("button", {
                      class: "bg-b-2 centered-x centered-y absolute hidden w-[calc(100%_-_8px)] rounded p-0.5 text-center text-xs font-medium group-hover/upload:block",
                      type: "button",
                      onClick: (_8) => t("removeFile", d3)
                    }, " Delete ", 8, A2)
                  ], 64)) : (openBlock(), createElementBlock("div", L, [
                    createVNode(unref($), {
                      class: "bg-b-2 hover:bg-b-3 text-c-2 h-fit border-0 py-px shadow-none",
                      size: "sm",
                      variant: "outlined",
                      onClick: (_8) => S2(d3)
                    }, {
                      default: withCtx(() => [
                        o[5] || (o[5] = createBaseVNode("span", null, "Upload File", -1)),
                        createVNode(unref(m2), {
                          class: "ml-1",
                          icon: "Upload",
                          size: "xs",
                          thickness: "2.5"
                        })
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ]))
                ];
              }),
              _: 2
            }, 1024)) : createCommentVNode("", true)
          ]),
          _: 2
        }, 1032, ["id", "class"]))), 128))
      ]),
      _: 1
    }));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/RequestSection/RequestTable.vue.js
var m5 = s(ne, [["__scopeId", "data-v-d8146cd8"]]);

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/hooks/useFileDialog.js
function n2({ multiple: u3, accept: c2, onChange: l2, onError: t } = {}) {
  const i3 = ref(null);
  let e3;
  typeof document < "u" && (e3 = document.createElement("input"), e3.type = "file", e3.onchange = (p5) => {
    const s5 = p5.target;
    i3.value = s5.files, l2 == null || l2(i3.value);
  }, e3.onerror = () => t == null ? void 0 : t(), e3.multiple = u3, e3.accept = c2);
  const f4 = () => {
    if (!e3)
      return t == null ? void 0 : t();
    e3.click();
  };
  return {
    files: readonly(i3),
    open: f4
  };
}

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/RequestSection/RequestBody.vue2.js
var me = {
  key: 0,
  class: "text-c-3 flex min-h-10 w-full items-center justify-center border-t p-2 text-sm"
};
var ce = {
  key: 1,
  class: "flex items-center justify-center overflow-hidden border-t p-1.5"
};
var fe = { class: "text-c-2 w-full max-w-full overflow-hidden rounded border px-1.5 py-1 text-xs whitespace-nowrap" };
var Ue = defineComponent({
  __name: "RequestBody",
  props: {
    example: {},
    operation: {},
    environment: {},
    envVariables: {},
    workspace: {},
    title: {}
  },
  setup(l2) {
    const { requestExampleMutators: d3 } = je(), Q3 = {
      json: "json",
      xml: "xml",
      yaml: "yaml",
      edn: "edn",
      other: "html"
    }, x3 = Object.entries({
      multipartForm: "Multipart Form",
      formUrlEncoded: "Form URL Encoded",
      binaryFile: "Binary File",
      json: "JSON",
      xml: "XML",
      yaml: "YAML",
      edn: "EDN",
      other: "Other",
      none: "None"
    }).map(([e3, n4]) => ({
      id: e3,
      label: n4
    })), T3 = computed(() => {
      var o;
      const { activeBody: e3, formData: n4, raw: a5 } = l2.example.body;
      return e3 === "formData" ? (n4 == null ? void 0 : n4.encoding) === "urlencoded" ? "formUrlEncoded" : "multipartForm" : e3 === "binary" ? "binaryFile" : e3 === "raw" && (a5 != null && a5.encoding) ? a5.encoding === "html" ? "other" : a5.encoding : Object.keys(((o = l2.operation.requestBody) == null ? void 0 : o.content) || {})[0] || "none";
    }), p5 = computed({
      get: () => x3.find(
        (e3) => e3.id === T3.value
      ) ?? x3[x3.length - 1] ?? x3[0],
      set: (e3) => {
        e3 != null && e3.id && M(e3.id);
      }
    }), B3 = ref(null), Z2 = computed(() => {
      var n4;
      const e3 = (n4 = p5.value) == null ? void 0 : n4.id;
      return Q3[e3] ?? "plaintext";
    }), P3 = (e3) => {
      const n4 = v3.value;
      if (n4.length > e3) {
        const a5 = [...n4];
        a5.splice(e3, 1), d3.edit(
          l2.example.uid,
          "body.formData.value",
          a5
        );
      }
    }, N = (e3, n4, a5) => {
      var o, i3, u3, r4, f4, V2, J3;
      const t = v3.value;
      if (t.length > e3) {
        const s5 = [...t];
        s5[e3] = {
          ...s5[e3],
          value: ((o = s5[e3]) == null ? void 0 : o.value) || "",
          key: ((i3 = s5[e3]) == null ? void 0 : i3.key) || "",
          enabled: ((u3 = s5[e3]) == null ? void 0 : u3.enabled) ?? false,
          [n4]: a5 || ""
        }, (((r4 = s5[e3]) == null ? void 0 : r4.key) !== "" || ((f4 = s5[e3]) == null ? void 0 : f4.value) !== "") && (s5[e3].enabled = true), ((V2 = s5[e3]) == null ? void 0 : V2.key) === "" && ((J3 = s5[e3]) == null ? void 0 : J3.value) === "" && s5.splice(e3, 1), d3.edit(
          l2.example.uid,
          "body.formData.value",
          s5
        );
      } else {
        const s5 = [requestExampleParametersSchema.parse({ [n4]: a5 })];
        d3.edit(l2.example.uid, "body.formData.value", s5), nextTick(() => {
          var A4;
          if (!B3.value)
            return;
          (A4 = B3.value.querySelectorAll("input")[n4 === "key" ? 0 : 1]) == null || A4.focus();
        });
      }
      e3 === t.length - 1 && O3();
    }, v3 = computed(() => {
      var e3;
      return ((e3 = l2.example.body.formData) == null ? void 0 : e3.value) ?? [];
    }), R = () => {
      const e3 = v3.value[v3.value.length - 1];
      (!e3 || e3.key !== "" || e3.value !== "") && O3();
    }, O3 = () => {
      const e3 = requestExampleParametersSchema.parse({
        enabled: false
      }), n4 = [...v3.value, e3];
      l2.example.body.formData ? d3.edit(l2.example.uid, "body.formData.value", n4) : d3.edit(l2.example.uid, "body.formData", {
        value: n4,
        encoding: "form-data"
      });
    }, S2 = (e3, n4) => {
      const a5 = v3.value;
      if (a5.length > e3) {
        const t = [...a5];
        t[e3] && (t[e3].enabled = n4), d3.edit(
          l2.example.uid,
          "body.formData.value",
          t
        );
      }
    }, q = (e3) => d3.edit(l2.example.uid, "body.raw.value", e3), L4 = (e3) => {
      var n4;
      return e3 === "multipartForm" ? {
        activeBody: "formData",
        encoding: "form-data",
        header: "multipart/form-data"
      } : e3 === "formUrlEncoded" ? {
        activeBody: "formData",
        encoding: "urlencoded",
        header: "application/x-www-form-urlencoded"
      } : e3 === "binaryFile" ? {
        activeBody: "binary",
        encoding: void 0,
        header: "application/octet-stream"
      } : e3 === "json" ? {
        activeBody: "raw",
        encoding: "json",
        header: Object.keys(((n4 = l2.operation.requestBody) == null ? void 0 : n4.content) ?? {}).find((o) => o.includes("json") || o.endsWith("+json")) || "application/json"
      } : e3 === "xml" ? {
        activeBody: "raw",
        encoding: "xml",
        header: "application/xml"
      } : e3 === "yaml" ? {
        activeBody: "raw",
        encoding: "yaml",
        header: "application/yaml"
      } : e3 === "edn" ? {
        activeBody: "raw",
        encoding: "edn",
        header: "application/edn"
      } : e3 === "other" ? {
        activeBody: "raw",
        encoding: "html",
        header: "application/html"
      } : { activeBody: "raw", encoding: void 0, header: void 0 };
    }, M = (e3) => {
      var u3, r4;
      const { activeBody: n4, encoding: a5, header: t } = L4(e3);
      if (d3.edit(l2.example.uid, "body.activeBody", n4), a5 && n4 === "raw")
        d3.edit(l2.example.uid, "body.raw", {
          encoding: a5,
          value: ((u3 = l2.example.body.raw) == null ? void 0 : u3.value) ?? ""
        });
      else if (a5 && n4 === "formData")
        d3.edit(l2.example.uid, "body.formData", {
          encoding: a5,
          value: ((r4 = l2.example.body.formData) == null ? void 0 : r4.value) ?? []
        });
      else if (!a5 && n4 !== "binary") {
        const { raw: f4, ...V2 } = l2.example.body;
        d3.edit(l2.example.uid, "body", V2);
      }
      const o = [...l2.example.parameters.headers], i3 = o.findIndex(
        (f4) => f4.key.toLowerCase() === "content-type"
      );
      if (i3 >= 0)
        t && o[i3] ? o[i3].value = t : o[i3] && (n4 !== "raw" || e3 === "none") && o.splice(i3, 1);
      else if (t) {
        const f4 = o[o.length - 1];
        f4 && f4.key === "" && f4.value === "" ? o.splice(o.length - 1, 0, {
          key: "Content-Type",
          value: t,
          enabled: true
        }) : o.push({
          key: "Content-Type",
          value: t,
          enabled: true
        });
      }
      d3.edit(l2.example.uid, "parameters.headers", o);
    }, W2 = async (e3) => {
      const { open: n4 } = n2({
        onChange: async (a5) => {
          var o, i3;
          const t = a5 == null ? void 0 : a5[0];
          if (t) {
            const r4 = [...v3.value];
            r4[e3] = {
              ...r4[e3],
              file: t,
              value: ((o = r4[e3]) == null ? void 0 : o.value) || t.name,
              key: ((i3 = r4[e3]) == null ? void 0 : i3.key) || t.name,
              enabled: true
            }, d3.edit(
              l2.example.uid,
              "body.formData.value",
              r4
            ), R();
          }
        },
        multiple: false,
        accept: "*/*"
      });
      n4();
    }, I4 = () => d3.edit(l2.example.uid, "body.binary", void 0);
    function z2(e3) {
      const n4 = v3.value, a5 = [...n4], t = n4[e3], o = t == null ? void 0 : t.file;
      n4.length > 1 && (!(t != null && t.key) && !(t != null && t.value) || o && (t == null ? void 0 : t.key) === o.name && (t == null ? void 0 : t.value) === o.name) ? a5.splice(e3, 1) : a5[e3] && (a5[e3].file = void 0), d3.edit(l2.example.uid, "body.formData.value", a5);
    }
    function _8() {
      const { open: e3 } = n2({
        onChange: async (n4) => {
          const a5 = n4 == null ? void 0 : n4[0];
          a5 && d3.edit(l2.example.uid, "body.binary", a5);
        },
        multiple: false,
        accept: "*/*"
      });
      e3();
    }
    watch(
      p5,
      (e3) => {
        ["multipartForm", "formUrlEncoded"].includes((e3 == null ? void 0 : e3.id) || "") && R();
      },
      { immediate: true }
    ), watch(
      () => l2.example.uid,
      () => {
        l2.operation.method && canMethodHaveBody(l2.operation.method) && M(T3.value), ["multipartForm", "formUrlEncoded"].includes(
          T3.value
        ) && R();
      },
      { immediate: true }
    );
    const k4 = computed(() => {
      var o, i3, u3;
      const e3 = (o = p5.value) == null ? void 0 : o.id, { header: n4 } = L4(e3), a5 = ((i3 = l2.operation.requestBody) == null ? void 0 : i3.content) || {}, t = n4 ? ((u3 = a5[n4]) == null ? void 0 : u3.examples) || {} : {};
      return Object.entries(t).map(([r4, f4]) => ({
        id: r4,
        label: r4,
        value: f4
      }));
    }), U3 = computed({
      get: () => {
        var t;
        const e3 = ((t = l2.example.body.raw) == null ? void 0 : t.value) ?? "{}", n4 = JSON.parse(e3);
        return k4.value.find((o) => {
          const i3 = o.value;
          return JSON.stringify(i3.value) === JSON.stringify(n4);
        }) ?? k4.value[0];
      },
      set: (e3) => {
        if (e3 != null && e3.id) {
          const n4 = k4.value.find((a5) => a5.id === e3.id);
          if (n4) {
            const a5 = n4.value;
            q(JSON.stringify(a5.value, null, 2));
          }
        }
      }
    });
    return (e3, n4) => (openBlock(), createBlock(E2, null, {
      title: withCtx(() => [
        createTextVNode(toDisplayString(e3.title), 1)
      ]),
      default: withCtx(() => [
        createVNode(_3, {
          columns: [""],
          presentational: ""
        }, {
          default: withCtx(() => [
            createVNode(d, null, {
              default: withCtx(() => [
                createVNode(x, { class: "relative col-span-full flex h-8 cursor-pointer items-center justify-between !p-0" }, {
                  default: withCtx(() => [
                    createVNode(unref(P), {
                      modelValue: p5.value,
                      "onUpdate:modelValue": n4[0] || (n4[0] = (a5) => p5.value = a5),
                      options: unref(x3),
                      teleport: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(unref($), {
                          class: "text-c-2 hover:text-c-1 flex h-full w-fit gap-1.5 px-3 font-normal",
                          fullWidth: "",
                          variant: "ghost"
                        }, {
                          default: withCtx(() => {
                            var a5;
                            return [
                              createBaseVNode("span", null, toDisplayString((a5 = p5.value) == null ? void 0 : a5.label), 1),
                              createVNode(unref(m2), {
                                icon: "ChevronDown",
                                size: "md"
                              })
                            ];
                          }),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "options"]),
                    k4.value.length > 0 ? (openBlock(), createBlock(unref(P), {
                      key: 0,
                      modelValue: U3.value,
                      "onUpdate:modelValue": n4[1] || (n4[1] = (a5) => U3.value = a5),
                      options: k4.value,
                      side: "left",
                      teleport: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(unref($), {
                          class: "text-c-2 hover:text-c-1 flex h-full w-fit gap-1.5 px-2 font-normal",
                          fullWidth: "",
                          variant: "ghost"
                        }, {
                          default: withCtx(() => {
                            var a5;
                            return [
                              createBaseVNode("span", null, toDisplayString((a5 = U3.value) == null ? void 0 : a5.label), 1),
                              createVNode(unref(m2), {
                                icon: "ChevronDown",
                                size: "md"
                              })
                            ];
                          }),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "options"])) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(d, null, {
              default: withCtx(() => {
                var a5, t, o, i3, u3, r4;
                return [
                  ((a5 = p5.value) == null ? void 0 : a5.id) === "none" ? (openBlock(), createElementBlock("div", me, n4[2] || (n4[2] = [
                    createBaseVNode("span", null, "No Body", -1)
                  ]))) : ((t = p5.value) == null ? void 0 : t.id) === "binaryFile" ? (openBlock(), createElementBlock("div", ce, [
                    e3.example.body.binary ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      createBaseVNode("span", fe, toDisplayString(e3.example.body.binary.name), 1),
                      createVNode(unref($), {
                        class: "bg-b-2 hover:bg-b-3 text-c-2 ml-1 border-0 shadow-none",
                        size: "sm",
                        variant: "outlined",
                        onClick: I4
                      }, {
                        default: withCtx(() => n4[3] || (n4[3] = [
                          createTextVNode(" Delete ")
                        ])),
                        _: 1
                      })
                    ], 64)) : (openBlock(), createBlock(unref($), {
                      key: 1,
                      class: "bg-b-2 hover:bg-b-3 text-c-2 border-0 shadow-none",
                      size: "sm",
                      variant: "outlined",
                      onClick: _8
                    }, {
                      default: withCtx(() => [
                        n4[4] || (n4[4] = createBaseVNode("span", null, "Upload File", -1)),
                        createVNode(unref(m2), {
                          class: "ml-1",
                          icon: "Upload",
                          size: "xs",
                          thickness: "2.5"
                        })
                      ]),
                      _: 1
                    }))
                  ])) : ((o = p5.value) == null ? void 0 : o.id) == "multipartForm" ? (openBlock(), createBlock(m5, {
                    key: 2,
                    ref_key: "tableWrapperRef",
                    ref: B3,
                    class: "!m-0 rounded-t-none border-t-0 border-r-0 border-b-0 border-l-0 shadow-none",
                    columns: ["32px", "", "", "104px"],
                    envVariables: e3.envVariables,
                    environment: e3.environment,
                    items: v3.value,
                    showUploadButton: "",
                    workspace: e3.workspace,
                    onDeleteRow: P3,
                    onRemoveFile: z2,
                    onToggleRow: S2,
                    onUpdateRow: N,
                    onUploadFile: W2
                  }, null, 8, ["envVariables", "environment", "items", "workspace"])) : ((i3 = p5.value) == null ? void 0 : i3.id) == "formUrlEncoded" ? (openBlock(), createBlock(m5, {
                    key: 3,
                    ref_key: "tableWrapperRef",
                    ref: B3,
                    class: "!m-0 rounded-t-none border-t-0 border-r-0 border-b-0 border-l-0 shadow-none",
                    columns: ["32px", "", "", "104px"],
                    envVariables: e3.envVariables,
                    environment: e3.environment,
                    items: v3.value,
                    showUploadButton: "",
                    workspace: e3.workspace,
                    onDeleteRow: P3,
                    onRemoveFile: z2,
                    onToggleRow: S2,
                    onUpdateRow: N,
                    onUploadFile: W2
                  }, null, 8, ["envVariables", "environment", "items", "workspace"])) : (openBlock(), createBlock(e, {
                    key: 4,
                    class: "border-t px-1",
                    content: "",
                    envVariables: e3.envVariables,
                    environment: e3.environment,
                    language: Z2.value,
                    lineNumbers: "",
                    lint: "",
                    modelValue: ((r4 = (u3 = e3.example.body) == null ? void 0 : u3.raw) == null ? void 0 : r4.value) ?? "",
                    workspace: e3.workspace,
                    "onUpdate:modelValue": q
                  }, null, 8, ["envVariables", "environment", "language", "modelValue", "workspace"]))
                ];
              }),
              _: 1
            }),
            createVNode(d)
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/RequestSection/RequestBody.vue.js
var m6 = s(Ue, [["__scopeId", "data-v-124bfbc5"]]);

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/RequestSection/RequestParams.vue.js
var U = { class: "text-c-2 request-meta-buttons flex whitespace-nowrap opacity-0 group-hover/params:opacity-100 has-[:focus-visible]:opacity-100" };
var j = { class: "sr-only" };
var I3 = defineComponent({
  __name: "RequestParams",
  props: {
    example: {},
    environment: {},
    envVariables: {},
    workspace: {},
    title: {},
    label: {},
    paramKey: {},
    readOnlyEntries: { default: () => [] },
    invalidParams: {}
  },
  setup(t) {
    const { requestExampleMutators: s5 } = je(), n4 = computed(() => t.example.parameters[t.paramKey] ?? []);
    onMounted(() => {
      nextTick(() => {
        y3();
      });
    });
    const o = () => {
      const e3 = requestExampleParametersSchema.parse({ enabled: false }), a5 = [...n4.value, e3];
      s5.edit(t.example.uid, `parameters.${t.paramKey}`, a5);
    }, u3 = ref(null), K2 = (e3, a5, r4) => {
      const c2 = n4.value;
      if (c2.length > e3) {
        const l2 = [...c2];
        if (!l2[e3])
          return;
        l2[e3] = { ...l2[e3], [a5]: r4 }, (l2[e3].key !== "" || l2[e3].value !== "") && (l2[e3].enabled = true), l2[e3].key === "" && l2[e3].value === "" && l2.splice(e3, 1), s5.edit(
          t.example.uid,
          `parameters.${t.paramKey}`,
          l2
        );
      } else {
        const l2 = [requestExampleParametersSchema.parse({ [a5]: r4 })];
        s5.edit(t.example.uid, `parameters.${t.paramKey}`, l2), nextTick(() => {
          var h;
          if (!u3.value)
            return;
          (h = u3.value.querySelectorAll("input")[a5 === "key" ? 0 : 1]) == null || h.focus();
        });
      }
      e3 === c2.length - 1 && o();
    }, $4 = (e3, a5) => s5.edit(
      t.example.uid,
      `parameters.${t.paramKey}.${e3}.enabled`,
      a5
    ), q = () => {
      const e3 = n4.value.filter((a5) => a5.required);
      s5.edit(
        t.example.uid,
        `parameters.${t.paramKey}`,
        e3
      ), nextTick(() => o());
    }, E3 = (e3) => {
      const a5 = n4.value;
      if (a5.length > e3) {
        const r4 = [...a5];
        r4.splice(e3, 1), s5.edit(
          t.example.uid,
          `parameters.${t.paramKey}`,
          r4
        );
      }
    };
    function y3() {
      if (n4.value.length === 0)
        o();
      else if (n4.value.length >= 1) {
        const e3 = n4.value[n4.value.length - 1];
        e3 && e3.key !== "" && e3.value !== "" && o();
      }
    }
    const T3 = computed(
      () => n4.value.filter((e3) => e3.key || e3.value).length
    ), O3 = computed(() => n4.value.length > 1);
    watch(
      () => t.example,
      (e3, a5) => {
        e3 !== a5 && y3();
      },
      { immediate: true }
    );
    const b5 = computed(() => (t.readOnlyEntries ?? []).length > 0);
    return (e3, a5) => (openBlock(), createBlock(E2, {
      class: "group/params",
      itemCount: T3.value
    }, {
      title: withCtx(() => [
        createTextVNode(toDisplayString(e3.title), 1)
      ]),
      actions: withCtx(() => [
        createBaseVNode("div", U, [
          O3.value ? (openBlock(), createBlock(unref(i), {
            key: 0,
            content: "Clear optional parameters",
            placement: "left"
          }, {
            default: withCtx(() => [
              createVNode(unref($), {
                class: "pr-0.75 pl-1 transition-none",
                size: "sm",
                variant: "ghost",
                onClick: withModifiers(q, ["stop"])
              }, {
                default: withCtx(() => [
                  a5[0] || (a5[0] = createTextVNode(" Clear ")),
                  createBaseVNode("span", j, "All " + toDisplayString(e3.title), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ])
      ]),
      default: withCtx(() => [
        createBaseVNode("div", {
          ref_key: "tableWrapperRef",
          ref: u3
        }, [
          b5.value ? (openBlock(), createBlock(m5, {
            key: 0,
            class: normalizeClass(["flex-1", { "bg-c-3/5": b5.value }]),
            columns: ["32px", "", ""],
            envVariables: e3.envVariables,
            environment: e3.environment,
            invalidParams: e3.invalidParams,
            isGlobal: "",
            isReadOnly: "",
            items: e3.readOnlyEntries,
            label: e3.label,
            workspace: e3.workspace
          }, null, 8, ["class", "envVariables", "environment", "invalidParams", "items", "label", "workspace"])) : createCommentVNode("", true),
          createVNode(m5, {
            class: "flex-1",
            columns: ["32px", "", ""],
            envVariables: e3.envVariables,
            environment: e3.environment,
            invalidParams: e3.invalidParams,
            items: n4.value,
            label: e3.label,
            workspace: e3.workspace,
            onToggleRow: $4,
            onUpdateRow: K2,
            onDeleteRow: E3
          }, null, 8, ["envVariables", "environment", "invalidParams", "items", "label", "workspace"])
        ], 512)
      ]),
      _: 1
    }, 8, ["itemCount"]));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/RequestSection/RequestPathParams.vue.js
var A3 = defineComponent({
  __name: "RequestPathParams",
  props: {
    example: {},
    operation: {},
    paramKey: {},
    title: {},
    environment: {},
    envVariables: {},
    workspace: {},
    invalidParams: {}
  },
  setup(a5) {
    const { requestMutators: u3, requestExampleMutators: l2 } = je(), s5 = computed(
      () => a5.example.parameters[a5.paramKey].map((e3) => ({
        ...e3,
        enum: e3.enum
      }))
    ), v3 = (e3, r4, n4) => {
      var m8, t;
      const i3 = a5.example.parameters[a5.paramKey], o = (m8 = i3[e3]) == null ? void 0 : m8.key;
      if (o) {
        if (r4 === "key") {
          if ((t = i3[e3]) != null && t.required)
            return;
          if (n4) {
            const c2 = encodeURIComponent(o), p5 = encodeURIComponent(n4), k4 = new RegExp(`(?<=/):${c2}(?=[/?#]|$)`, "g"), w2 = a5.operation.path.replace(k4, `:${p5}`);
            u3.edit(a5.operation.uid, "path", w2);
          } else {
            i3.splice(e3, 1);
            const c2 = new RegExp(`/:${encodeURIComponent(o)}(?=[/?#]|$)`, "g"), p5 = a5.operation.path.replace(c2, "");
            u3.edit(a5.operation.uid, "path", p5);
          }
        }
        l2.edit(
          a5.example.uid,
          `parameters.${a5.paramKey}.${e3}.${r4}`,
          n4
        );
      }
    }, y3 = (e3) => {
      const r4 = s5.value;
      if (r4.length > e3) {
        const n4 = [...r4];
        n4.splice(e3, 1), l2.edit(
          a5.example.uid,
          `parameters.${a5.paramKey}`,
          n4
        );
      }
    }, P3 = (e3) => {
      var m8;
      const r4 = ((m8 = e3.match(REGEX.PATH)) == null ? void 0 : m8.map((t) => t.slice(1, -1))) || [], n4 = a5.example.parameters[a5.paramKey], i3 = new Map(n4.map((t) => [t.key, t])), o = r4.map(
        (t) => i3.get(t) || { key: t, value: "", enabled: true }
      );
      n4.forEach((t) => {
        !r4.includes(t.key) && (t.value || t.required) && o.push(t);
      }), n4.splice(0, n4.length, ...o), l2.edit(a5.example.uid, `parameters.${a5.paramKey}`, n4);
    }, g4 = (e3) => {
      e3 && P3(e3);
    };
    return watch(
      () => a5.operation.path,
      (e3) => {
        e3 && g4(e3);
      }
    ), (e3, r4) => (openBlock(), createBlock(E2, {
      itemCount: s5.value.length
    }, {
      title: withCtx(() => [
        createTextVNode(toDisplayString(e3.title), 1)
      ]),
      default: withCtx(() => [
        s5.value.length ? (openBlock(), createBlock(m5, {
          key: 0,
          class: "flex-1",
          columns: ["32px", "", ""],
          envVariables: e3.envVariables,
          environment: e3.environment,
          invalidParams: e3.invalidParams,
          items: s5.value,
          workspace: e3.workspace,
          onUpdateRow: v3,
          onDeleteRow: y3
        }, null, 8, ["envVariables", "environment", "invalidParams", "items", "workspace"])) : createCommentVNode("", true)
      ]),
      _: 1
    }, 8, ["itemCount"]));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Components/CodeSnippet/helpers/convert-to-har-request.js
var D = ({
  baseUrl: f4 = "",
  method: u3,
  body: a5,
  path: d3,
  cookies: p5,
  headers: n4,
  query: m8
}) => {
  var l2, s5, c2;
  const g4 = mergeUrls(f4, d3, void 0, true), r4 = {
    method: u3.toUpperCase(),
    url: g4.toString(),
    httpVersion: "HTTP/1.1",
    headers: [],
    queryString: [],
    cookies: [],
    headersSize: -1,
    bodySize: -1
  };
  if (p5.length && (r4.cookies = p5.filter((e3) => e3.enabled).map(({ key: e3, value: t }) => ({
    name: e3,
    value: t
  }))), n4.length && (r4.headers = n4.filter((e3) => e3.enabled && !(e3.key.toLowerCase() === "accept" && e3.value === "*/*")).map(({ key: e3, value: t }) => ({
    name: e3.replace(/\b\w/g, (o) => o.toUpperCase()),
    value: t
  }))), m8.length && (r4.queryString = m8.filter((e3) => e3.enabled).map(({ key: e3, value: t }) => ({
    name: e3,
    value: t
  }))), a5)
    try {
      const e3 = (l2 = n4.find((t) => t.key.toLowerCase() === "content-type")) == null ? void 0 : l2.value;
      if (a5.activeBody === "formData" && a5.formData) {
        const t = [];
        a5.formData.value.forEach(({ key: o, value: h, file: i3, enabled: v3 }) => {
          v3 && (i3 ? t.push({
            name: o || "blob",
            value: "BINARY",
            fileName: i3.name,
            contentType: i3.type || "application/octet-stream"
          }) : t.push({
            name: o,
            value: h
          }));
        }), ((s5 = a5.formData) == null ? void 0 : s5.encoding) === "urlencoded" ? r4.postData = {
          mimeType: e3 || "application/x-www-form-urlencoded",
          params: t
        } : r4.postData = {
          mimeType: e3 || "multipart/form-data",
          params: t
        };
      } else a5.activeBody === "raw" && a5.raw && (r4.postData = {
        mimeType: e3 || "application/json",
        text: ((c2 = a5.raw) == null ? void 0 : c2.value) ?? ""
      });
    } catch {
    }
  return r4;
};

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Components/CodeSnippet/helpers/get-har-request.js
var v = "YOUR_SECRET_TOKEN";
var g2 = ({
  operation: e3,
  example: u3,
  server: r4,
  securitySchemes: i3 = [],
  environment: E3
}) => {
  const n4 = E3 && Array.isArray(E3) ? Object.fromEntries(E3.map((t) => [t.key, t.value])) : E3 || {}, T3 = (() => {
    if (r4 != null && r4.url && (REGEX.VARIABLES.test(r4.url) || REGEX.PATH.test(r4.url))) {
      const t = Object.entries((r4 == null ? void 0 : r4.variables) || {}).reduce(
        (a5, [d3, l2]) => {
          var o, R;
          const c2 = (R = (o = u3 == null ? void 0 : u3.parameters) == null ? void 0 : o.path.find((b5) => b5.enabled && b5.key === d3)) == null ? void 0 : R.value;
          return c2 ? a5[d3] = p(c2, n4) : l2.default && (a5[d3] = p(l2.default, n4)), a5;
        },
        {}
      );
      return p(p(r4.url, n4), t);
    }
    return r4 == null ? void 0 : r4.url;
  })(), P3 = (() => {
    var a5;
    const t = (e3 == null ? void 0 : e3.path) ?? "/";
    if (t && (REGEX.VARIABLES.test(t) || REGEX.PATH.test(t))) {
      const d3 = (((a5 = u3 == null ? void 0 : u3.parameters) == null ? void 0 : a5.path) ?? []).reduce((l2, c2) => (c2.enabled && (l2[c2.key] = p(c2.value, n4)), l2), {});
      return p(p(t, n4), d3);
    }
    return t;
  })(), f4 = $2(i3, n4, v), y3 = [
    ...((u3 == null ? void 0 : u3.parameters.headers) ?? []).map((t) => ({
      ...t,
      value: REGEX.VARIABLES.test(t.value) || REGEX.PATH.test(t.value) ? p(t.value, n4) : t.value
    })) ?? [],
    ...Object.entries(f4.headers).map(([t, a5]) => ({
      key: t,
      value: a5,
      enabled: true
    }))
  ], S2 = [
    ...((u3 == null ? void 0 : u3.parameters.cookies) ?? []).map((t) => ({
      ...t,
      value: REGEX.VARIABLES.test(t.value) || REGEX.PATH.test(t.value) ? p(t.value, n4) : t.value
    })) ?? [],
    ...f4.cookies.map((t) => ({
      key: t.name,
      value: t.value,
      enabled: true
    }))
  ], h = [
    ...((u3 == null ? void 0 : u3.parameters.query) ?? []).map((t) => ({
      ...t,
      value: REGEX.VARIABLES.test(t.value) || REGEX.PATH.test(t.value) ? p(t.value, n4) : t.value
    })) ?? [],
    ...Array.from(f4.urlParams.entries()).map(([t, a5]) => ({
      key: t,
      value: a5,
      enabled: true
    }))
  ], H3 = (() => {
    var a5;
    const t = u3 == null ? void 0 : u3.body;
    return (a5 = t == null ? void 0 : t.raw) != null && a5.value && (REGEX.VARIABLES.test(t.raw.value) || REGEX.PATH.test(t.raw.value)) ? {
      ...t,
      raw: {
        ...t.raw,
        value: p(t.raw.value, n4)
      }
    } : t;
  })();
  return D({
    baseUrl: T3,
    method: (e3 == null ? void 0 : e3.method) ?? "get",
    path: P3,
    body: H3,
    cookies: S2,
    headers: y3,
    query: h
  });
};

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Components/CodeSnippet/helpers/get-snippet.js
var s3 = "ws://replace.me";
var f2 = (i3, t, {
  operation: l2,
  example: u3,
  server: c2,
  securitySchemes: g4 = [],
  environment: E3
}) => {
  var n4;
  try {
    const r4 = g2({
      operation: l2,
      example: u3,
      server: c2,
      securitySchemes: g4,
      environment: E3
    });
    if (!r4.url)
      return [new Error("Please enter a URL to see a code snippet"), null];
    const o = r4.url.startsWith("/") ? "" : "/";
    try {
      new URL(r4.url);
    } catch (e3) {
      console.error("[getSnippet] Invalid URL", e3), r4.url = `${s3}${o}${r4.url}`;
    }
    if (((n4 = r4.postData) == null ? void 0 : n4.mimeType) === "application/json")
      try {
        JSON.parse(r4.postData.text || "{}");
      } catch (e3) {
        return console.error("[getSnippet] Invalid JSON body", e3), [new Error("Invalid JSON body"), null];
      }
    const p5 = i3.replace("javascript", "js");
    if (snippetz().hasPlugin(p5, t)) {
      const e3 = snippetz().print(p5, t, r4);
      return e3 ? [null, e3.replace(`${s3}${o}`, "")] : [new Error("Error generating snippet"), null];
    }
  } catch (r4) {
    return console.error("[getSnippet] Error generating snippet", r4), [new Error("Error generating snippet"), null];
  }
  return [new Error("No snippet found"), null];
};

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Components/CodeSnippet/CodeSnippet.vue.js
var g3 = {
  key: 0,
  class: "text-c-3 flex min-h-16 items-center justify-center px-4 text-sm"
};
var B2 = defineComponent({
  __name: "CodeSnippet",
  props: {
    target: {},
    client: {},
    operation: {},
    server: {},
    example: {},
    securitySchemes: { default: () => [] },
    environment: {}
  },
  setup(t) {
    const i3 = computed(
      () => t.securitySchemes.flatMap((e3) => e3.type === "apiKey" ? e3.value : (e3 == null ? void 0 : e3.type) === "http" ? [
        e3.token,
        e3.password,
        btoa(`${e3.username}:${e3.password}`)
      ] : e3.type === "oauth2" ? Object.values(e3.flows).map((r4) => r4 == null ? void 0 : r4.token).filter(isDefined) : [])
    ), n4 = computed(() => {
      const [e3, r4] = f2(t.target, t.client, {
        operation: t.operation,
        example: t.example,
        server: t.server,
        securitySchemes: t.securitySchemes,
        environment: t.environment
      });
      return { error: e3, payload: r4 };
    }), o = computed(() => t.target === "shell" && t.client === "curl" ? "curl" : t.target ?? "plaintext");
    return (e3, r4) => n4.value.error ? (openBlock(), createElementBlock("div", g3, toDisplayString(n4.value.error.message), 1)) : n4.value.payload ? (openBlock(), createBlock(unref(T), {
      key: 1,
      class: "w-full",
      content: n4.value.payload,
      hideCredentials: i3.value,
      lang: o.value,
      lineNumbers: ""
    }, null, 8, ["content", "hideCredentials", "lang"])) : createCommentVNode("", true);
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/RequestSection/RequestCodeExample.vue2.js
var F2 = { class: "w-full" };
var G = { class: "-mx-1 flex flex-1" };
var J = { class: "bg-b-1 flex items-center justify-center overflow-hidden border-t" };
var le = defineComponent({
  __name: "RequestCodeExample",
  props: {
    collection: {},
    example: {},
    operation: {},
    server: {},
    workspace: {},
    environment: {}
  },
  setup(o) {
    var b5, K2, h, S2;
    const { securitySchemes: k4, workspaceMutators: w2 } = je(), f4 = computed(() => {
      var t, e3, l2;
      return d3.value.targetKey === "custom" && ((t = u3.value) == null ? void 0 : t.some(
        (n4) => n4.lang === d3.value.clientKey
      )) ? d3.value : {
        targetKey: ((e3 = o.workspace.selectedHttpClient) == null ? void 0 : e3.targetKey) ?? "js",
        clientKey: ((l2 = o.workspace.selectedHttpClient) == null ? void 0 : l2.clientKey) ?? "fetch"
      };
    }), u3 = computed(
      () => o.operation["x-codeSamples"] || o.operation["x-code-samples"] || o.operation["x-custom-examples"]
    ), d3 = ref(
      (b5 = u3.value) != null && b5.length ? {
        targetKey: "custom",
        clientKey: (K2 = u3.value[0]) == null ? void 0 : K2.lang
      } : {
        targetKey: ((h = o.workspace.selectedHttpClient) == null ? void 0 : h.targetKey) ?? "js",
        clientKey: ((S2 = o.workspace.selectedHttpClient) == null ? void 0 : S2.clientKey) ?? "fetch"
      }
    ), $4 = computed(() => (o.operation.selectedSecuritySchemeUids || o.collection.selectedSecuritySchemeUids || []).flat().map((e3) => k4[e3]).filter((e3) => !!e3)), v3 = computed(() => {
      const t = {}, e3 = snippetz().clients().map((n4) => ({
        label: n4.title,
        options: n4.clients.map((p5) => (t[`${n4.key},${p5.client}`] = p5.title, {
          id: `${n4.key},${p5.client}`,
          label: p5.title
        }))
      })), l2 = (o.operation["x-codeSamples"] || o.operation["x-code-samples"] || o.operation["x-custom-examples"] || []).map((n4) => ({
        id: `custom,${n4.lang}`,
        label: n4.label || n4.lang
      })), m8 = l2.length > 0 ? [
        {
          id: "customExamples",
          label: "Code Examples",
          options: l2.map((n4) => ({
            id: n4.id,
            label: n4.label ?? n4.id
          }))
        },
        ...e3
      ] : e3;
      return l2.forEach((n4) => {
        t[n4.id] = n4.label ?? n4.id;
      }), {
        options: m8,
        dict: t
      };
    }), s5 = computed(() => {
      const t = f4.value;
      if (t.targetKey === "custom") {
        const l2 = `custom,${t.clientKey}`;
        return {
          id: l2,
          label: v3.value.dict[l2] ?? "Unknown"
        };
      }
      const e3 = `${t.targetKey},${t.clientKey}`;
      return {
        id: e3,
        label: v3.value.dict[e3] ?? "Unknown"
      };
    }), E3 = computed(
      () => f4.value.targetKey
    ), B3 = computed(
      () => f4.value.clientKey
    ), V2 = ({ id: t }) => {
      const [e3, l2] = t.split(",");
      !e3 || !l2 || (d3.value = {
        targetKey: e3,
        clientKey: l2
      }, e3 !== "custom" && w2.edit(o.workspace.uid, "selectedHttpClient", {
        targetKey: e3,
        clientKey: l2
      }));
    }, g4 = computed(() => {
      var l2;
      if (!s5.value.id.startsWith("custom,"))
        return;
      const t = s5.value.id.split(",")[1], e3 = (l2 = u3.value) == null ? void 0 : l2.find((m8) => m8.lang === t);
      return e3 == null ? void 0 : e3.source;
    });
    return (t, e3) => (openBlock(), createElementBlock("div", F2, [
      createVNode(E2, {
        class: "group/preview w-full border-b-0",
        defaultOpen: false
      }, {
        title: withCtx(() => e3[0] || (e3[0] = [
          createTextVNode("Code Snippet")
        ])),
        actions: withCtx(() => [
          createBaseVNode("div", G, [
            createVNode(unref(c), {
              modelValue: s5.value,
              options: v3.value.options,
              placement: "bottom-end",
              "onUpdate:modelValue": V2
            }, {
              default: withCtx(() => [
                createVNode(unref($), {
                  class: "text-c-1 hover:bg-b-3 flex h-full w-fit gap-1.5 px-1.5 py-0.75 font-normal",
                  fullWidth: "",
                  variant: "ghost"
                }, {
                  default: withCtx(() => {
                    var l2;
                    return [
                      createBaseVNode("span", null, toDisplayString((l2 = s5.value) == null ? void 0 : l2.label), 1),
                      createVNode(unref(m2), {
                        icon: "ChevronDown",
                        size: "md"
                      })
                    ];
                  }),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["modelValue", "options"])
          ])
        ]),
        default: withCtx(() => [
          createVNode(_3, {
            columns: [""],
            presentational: ""
          }, {
            default: withCtx(() => [
              createVNode(d, null, {
                default: withCtx(() => [
                  createBaseVNode("div", J, [
                    g4.value ? (openBlock(), createBlock(unref(T), {
                      key: 0,
                      class: "px-3 py-1.5",
                      content: g4.value,
                      lang: s5.value.id.split(",")[1] ?? "plaintext"
                    }, null, 8, ["content", "lang"])) : (openBlock(), createBlock(unref(B2), {
                      key: 1,
                      class: "px-3 py-1.5",
                      client: B3.value,
                      example: t.example,
                      operation: t.operation,
                      securitySchemes: $4.value,
                      server: t.server,
                      target: E3.value,
                      environment: t.environment
                    }, null, 8, ["client", "example", "operation", "securitySchemes", "server", "target", "environment"]))
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/RequestSection/RequestCodeExample.vue.js
var r = s(le, [["__scopeId", "data-v-92438804"]]);

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/RequestSection/RequestSection.vue2.js
var _6 = { class: "group pointer-events-none flex flex-1 items-center gap-1 lg:pr-24" };
var ee = ["for"];
var ae = ["id", "placeholder", "value"];
var le2 = {
  key: 2,
  class: "text-c-1 flex h-8 items-center"
};
var oe = ["id", "role"];
var be2 = defineComponent({
  __name: "RequestSection",
  props: {
    collection: {},
    environment: {},
    envVariables: {},
    example: {},
    invalidParams: {},
    operation: {},
    selectedSecuritySchemeUids: {},
    server: {},
    workspace: {}
  },
  setup(l2) {
    const R = [
      "Auth",
      "Variables",
      "Cookies",
      "Headers",
      "Query",
      "Body"
      // 'Scripts',
    ], { requestMutators: w2, cookies: O3, securitySchemes: A4 } = je(), { layout: d3 } = s2(), q = computed(() => {
      const e3 = /* @__PURE__ */ new Set(["All", ...R]);
      return l2.example.parameters.path.length || e3.delete("Variables"), canMethodHaveBody(l2.operation.method ?? "get") || e3.delete("Body"), y3.value && e3.delete("Auth"), [...e3];
    }), t = computed(
      () => Object.fromEntries(
        q.value.map((e3) => [e3, useId()])
      )
    ), y3 = computed(
      () => d3 === "modal" && !l2.operation.security && !Object.keys(A4 ?? {}).length
    ), a5 = ref("All");
    watch(
      () => l2.operation,
      (e3) => {
        a5.value === "Body" && e3 && !canMethodHaveBody(e3.method) && (a5.value = "All");
      }
    );
    const E3 = (e3) => {
      const o = e3.target;
      w2.edit(l2.operation.uid, "summary", o.value);
    }, H3 = computed(
      () => (l2.workspace.cookies ?? []).map((e3) => O3[e3]).filter(isDefined).filter((e3) => e3.name).filter(
        (e3) => {
          var o;
          return k(((o = l2.server) == null ? void 0 : o.url) || l2.operation.path, e3.domain);
        }
      ).map((e3) => ({
        key: e3.name,
        value: e3.value,
        route: {
          name: "cookies",
          params: {
            cookies: e3.uid
          }
        },
        enabled: true
      }))
    ), N = () => l2.operation.summary ? l2.operation.summary : l2.operation.path.replace(REGEX.PROTOCOL, "") ? l2.operation.path.replace(REGEX.PROTOCOL, "") : "Request Name", g4 = useId(), I4 = i2().getViewComponents("request.section"), U3 = (e3, o) => w2.edit(l2.operation.uid, e3, o);
    return watch(
      () => y3.value,
      (e3) => {
        e3 && a5.value === "Auth" && (a5.value = "All");
      }
    ), (e3, o) => (openBlock(), createBlock(b2, {
      "aria-label": `Request: ${e3.operation.summary}`
    }, {
      title: withCtx(() => [
        createBaseVNode("div", _6, [
          unref(d3) !== "modal" ? (openBlock(), createElementBlock("label", {
            key: 0,
            class: "pointer-events-auto absolute top-0 left-0 h-full w-full cursor-text opacity-0",
            for: unref(g4)
          }, null, 8, ee)) : createCommentVNode("", true),
          unref(d3) !== "modal" ? (openBlock(), createElementBlock("input", {
            key: 1,
            id: unref(g4),
            class: "text-c-1 group-hover-input pointer-events-auto relative z-10 -ml-0.5 h-8 w-full rounded pl-1.25 has-[:focus-visible]:outline md:-ml-1.25",
            placeholder: N(),
            value: e3.operation.summary,
            onInput: E3
          }, null, 40, ae)) : (openBlock(), createElementBlock("span", le2, toDisplayString(e3.operation.summary), 1))
        ]),
        createVNode(a, {
          modelValue: a5.value,
          "onUpdate:modelValue": o[0] || (o[0] = (m8) => a5.value = m8),
          filterIds: t.value,
          filters: q.value
        }, null, 8, ["modelValue", "filterIds", "filters"])
      ]),
      default: withCtx(() => [
        createBaseVNode("div", {
          id: t.value.All,
          class: "request-section-content custom-scroll relative flex flex-1 flex-col",
          role: a5.value === "All" ? "tabpanel" : "none"
        }, [
          e3.collection && e3.workspace && (unref(d3) !== "modal" || Object.keys(unref(A4) ?? {}).length) ? withDirectives((openBlock(), createBlock(p2, {
            key: 0,
            id: t.value.Auth,
            class: "request-section-content-auth",
            collection: e3.collection,
            envVariables: e3.envVariables,
            environment: e3.environment,
            layout: "client",
            operation: e3.operation,
            role: a5.value === "All" ? "none" : "tabpanel",
            selectedSecuritySchemeUids: e3.selectedSecuritySchemeUids,
            server: e3.server,
            title: "Authentication",
            workspace: e3.workspace
          }, null, 8, ["id", "collection", "envVariables", "environment", "operation", "role", "selectedSecuritySchemeUids", "server", "workspace"])), [
            [
              vShow,
              !y3.value && (a5.value === "All" || a5.value === "Auth")
            ]
          ]) : createCommentVNode("", true),
          withDirectives(createVNode(A3, {
            id: t.value.Variables,
            class: "request-section-content-path-params",
            envVariables: e3.envVariables,
            environment: e3.environment,
            example: e3.example,
            invalidParams: e3.invalidParams,
            operation: e3.operation,
            paramKey: "path",
            role: a5.value === "All" ? "none" : "tabpanel",
            title: "Variables",
            workspace: e3.workspace
          }, null, 8, ["id", "envVariables", "environment", "example", "invalidParams", "operation", "role", "workspace"]), [
            [
              vShow,
              (a5.value === "All" || a5.value === "Variables") && e3.example.parameters.path.length
            ]
          ]),
          withDirectives(createVNode(I3, {
            id: t.value.Cookies,
            class: "request-section-content-cookies",
            envVariables: e3.envVariables,
            environment: e3.environment,
            example: e3.example,
            invalidParams: e3.invalidParams,
            label: "Cookie",
            operation: e3.operation,
            paramKey: "cookies",
            readOnlyEntries: H3.value,
            role: a5.value === "All" ? "none" : "tabpanel",
            title: "Cookies",
            workspace: e3.workspace
          }, null, 8, ["id", "envVariables", "environment", "example", "invalidParams", "operation", "readOnlyEntries", "role", "workspace"]), [
            [vShow, a5.value === "All" || a5.value === "Cookies"]
          ]),
          withDirectives(createVNode(I3, {
            id: t.value.Headers,
            class: "request-section-content-headers",
            envVariables: e3.envVariables,
            environment: e3.environment,
            example: e3.example,
            invalidParams: e3.invalidParams,
            label: "Header",
            operation: e3.operation,
            paramKey: "headers",
            role: a5.value === "All" ? "none" : "tabpanel",
            title: "Headers",
            workspace: e3.workspace
          }, null, 8, ["id", "envVariables", "environment", "example", "invalidParams", "operation", "role", "workspace"]), [
            [vShow, a5.value === "All" || a5.value === "Headers"]
          ]),
          withDirectives(createVNode(I3, {
            id: t.value.Query,
            class: "request-section-content-query",
            envVariables: e3.envVariables,
            environment: e3.environment,
            example: e3.example,
            invalidParams: e3.invalidParams,
            label: "Parameter",
            operation: e3.operation,
            paramKey: "query",
            role: a5.value === "All" ? "none" : "tabpanel",
            title: "Query Parameters",
            workspace: e3.workspace
          }, null, 8, ["id", "envVariables", "environment", "example", "invalidParams", "operation", "role", "workspace"]), [
            [vShow, a5.value === "All" || a5.value === "Query"]
          ]),
          e3.operation.method && (a5.value === "All" || a5.value === "Body") && unref(canMethodHaveBody)(e3.operation.method) ? (openBlock(), createBlock(m6, {
            key: 1,
            id: t.value.Body,
            class: "request-section-content-body",
            envVariables: e3.envVariables,
            environment: e3.environment,
            example: e3.example,
            operation: e3.operation,
            role: a5.value === "All" ? "none" : "tabpanel",
            title: "Body",
            workspace: e3.workspace
          }, null, 8, ["id", "envVariables", "environment", "example", "operation", "role", "workspace"])) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(I4), (m8) => (openBlock(), createBlock(unref(E), {
            key: m8.component
          }, {
            default: withCtx(() => [
              withDirectives((openBlock(), createBlock(resolveDynamicComponent(m8.component), {
                "onUpdate:operation": U3,
                operation: e3.operation
              }, null, 40, ["operation"])), [
                [vShow, a5.value === "All" || a5.value === m8.title]
              ])
            ]),
            _: 2
          }, 1024))), 128)),
          o[1] || (o[1] = createBaseVNode("div", { class: "flex flex-grow" }, null, -1)),
          createVNode(unref(E), null, {
            default: withCtx(() => [
              createVNode(r, {
                class: "request-section-content-code-example -mt-1/2 border-t",
                collection: e3.collection,
                example: e3.example,
                operation: e3.operation,
                server: e3.server,
                workspace: e3.workspace,
                environment: e3.envVariables
              }, null, 8, ["collection", "example", "operation", "server", "workspace", "environment"])
            ]),
            _: 1
          })
        ], 8, oe)
      ]),
      _: 1
    }, 8, ["aria-label"]));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/RequestSection/RequestSection.vue.js
var a3 = s(be2, [["__scopeId", "data-v-ca5f9f37"]]);

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/OpenApiClientButton.vue2.js
var k3 = ["href"];
var v2 = defineComponent({
  __name: "OpenApiClientButton",
  props: {
    buttonSource: {},
    source: { default: "api-reference" },
    isDevelopment: { type: Boolean },
    integration: {},
    url: {}
  },
  setup(o) {
    const a5 = computed(() => {
      const c2 = o.url ?? (typeof window < "u" ? window.location.href : void 0), t = makeUrlAbsolute(c2);
      if (!(t != null && t.length))
        return;
      const e3 = new URL(
        o.isDevelopment ? "http://localhost:5065" : "https://client.scalar.com"
      );
      if (e3.searchParams.set("url", t), o.integration !== null && e3.searchParams.set("integration", o.integration ?? "vue"), e3.searchParams.set("utm_source", "api-reference"), e3.searchParams.set("utm_medium", "button"), e3.searchParams.set("utm_campaign", o.buttonSource), o.source === "gitbook") {
        e3.searchParams.set("utm_source", "gitbook");
        const n4 = document.querySelector("img.dark\\:block[alt='Logo']"), r4 = document.querySelector("img.dark\\:hidden[alt='Logo']");
        n4 && n4 instanceof HTMLImageElement && e3.searchParams.set("dark_logo", encodeURIComponent(n4.src)), r4 && r4 instanceof HTMLImageElement && e3.searchParams.set("light_logo", encodeURIComponent(r4.src));
      }
      return e3.toString();
    });
    return (c2, t) => a5.value ? (openBlock(), createElementBlock("a", {
      key: 0,
      class: "open-api-client-button",
      href: a5.value,
      target: "_blank"
    }, [
      createVNode(unref(m2), {
        icon: "ExternalLink",
        size: "xs",
        thickness: "2.5"
      }),
      t[0] || (t[0] = createTextVNode(" Open API Client "))
    ], 8, k3)) : createCommentVNode("", true);
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/OpenApiClientButton.vue.js
var a4 = s(v2, [["__scopeId", "data-v-e913a538"]]);

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/libs/formatters.js
var s4 = (t, o = 2) => t > 1e3 ? (t / 1e3).toFixed(o) + "s" : t + "ms";

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/AddressBar/httpStatusCodeColors.js
var e2 = {
  100: {
    color: "text-yellow"
  },
  200: {
    color: "text-green"
  },
  202: {
    color: "text-green"
  },
  300: {
    color: "text-blue"
  },
  304: {
    color: "text-blue"
  },
  400: {
    color: "text-red"
  },
  401: {
    color: "text-orange"
  },
  422: {
    color: "text-yellow"
  },
  423: {
    color: "text-purple"
  },
  505: {
    color: "text-orange"
  }
};
var r2 = (o) => e2[o] || {
  /** default color */
  color: "text-grey"
};

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/AddressBar/AddressBarHistory.vue2.js
var L2 = { class: "min-w-0" };
var U2 = { class: "text-c-1 min-w-0 truncate" };
var Q = defineComponent({
  __name: "AddressBarHistory",
  props: {
    operation: {},
    target: {}
  },
  setup(f4) {
    const { requestHistory: h } = je(), d3 = computed(
      () => h.filter((r4) => r4.request.requestUid === f4.operation.uid).slice().reverse()
    );
    function g4(r4) {
      console.warn(
        "Restoring from the request history doesn’t work yet. Request History Item:",
        r4
      );
    }
    return (r4, m8) => (openBlock(), createBlock(unref(ge), { as: "div" }, {
      default: withCtx(({ open: v3 }) => [
        createVNode(unref(I), {
          offset: 0,
          resize: "",
          target: r4.target
        }, createSlots({
          default: withCtx(() => {
            var n4;
            return [
              (n4 = d3.value) != null && n4.length ? (openBlock(), createBlock(unref(Se), {
                key: 0,
                class: "address-bar-history-button z-context-plus text-c-3 focus:text-c-1 relative mr-1 rounded-lg p-1.5"
              }, {
                default: withCtx(() => [
                  createVNode(unref(m2), {
                    icon: "History",
                    size: "sm",
                    thickness: "2.25"
                  }),
                  m8[0] || (m8[0] = createBaseVNode("span", { class: "sr-only" }, "Request History", -1))
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ];
          }),
          _: 2
        }, [
          v3 ? {
            name: "floating",
            fn: withCtx(({ width: n4 }) => [
              createVNode(unref(Me), {
                class: "custom-scroll grid max-h-[inherit] grid-cols-[44px_1fr_repeat(3,auto)] items-center border-t p-0.75",
                static: "",
                style: normalizeStyle({ width: n4 })
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(d3.value, (t, k4) => (openBlock(), createBlock(unref(be), {
                    key: t.timestamp,
                    as: "button",
                    class: "font-code ui-active:*:bg-b-2 text-c-2 contents text-sm font-medium *:flex *:h-8 *:cursor-pointer *:items-center *:rounded-none *:px-1.5 *:first:rounded-l *:last:rounded-r",
                    value: k4,
                    onClick: (c2) => g4(t)
                  }, {
                    default: withCtx(() => {
                      var c2;
                      return [
                        t.response.method ? (openBlock(), createBlock(m3, {
                          key: 0,
                          class: "text-[11px]",
                          method: t.response.method
                        }, null, 8, ["method"])) : createCommentVNode("", true),
                        createBaseVNode("div", L2, [
                          createBaseVNode("div", U2, toDisplayString(t.response.path), 1)
                        ]),
                        createBaseVNode("div", null, toDisplayString(unref(s4)(t.response.duration)), 1),
                        createBaseVNode("div", {
                          class: normalizeClass([unref(r2)(t.response.status).color])
                        }, toDisplayString(t.response.status), 3),
                        createBaseVNode("div", null, toDisplayString((c2 = unref(httpStatusCodes)[t.response.status]) == null ? void 0 : c2.name), 1)
                      ];
                    }),
                    _: 2
                  }, 1032, ["value", "onClick"]))), 128))
                ]),
                _: 2
              }, 1032, ["style"]),
              createVNode(unref(m), { class: "-top-(--scalar-address-bar-height) rounded-lg" })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["target"])
      ]),
      _: 1
    }));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/AddressBar/AddressBarHistory.vue.js
var f3 = s(Q, [["__scopeId", "data-v-6a545fa1"]]);

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/Server/ServerDropdownItem.vue2.js
var P2 = ["aria-expanded"];
var j2 = { class: "overflow-hidden text-ellipsis whitespace-nowrap" };
var z = ["id"];
var L3 = { key: 0 };
var W = { class: "description text-c-3 px-3 py-1.5" };
var H2 = defineComponent({
  __name: "ServerDropdownItem",
  props: {
    collection: {},
    operation: {},
    server: {},
    serverOption: {},
    type: {}
  },
  emits: ["update:variable"],
  setup(g4, { emit: k4 }) {
    const e3 = g4, x3 = k4, f4 = useId(), { collectionMutators: m8, requestMutators: l2, servers: _8 } = je(), U3 = (r4, t) => {
      var i3, s5, n4, S2;
      if (b5(r4) && (t == null || t.stopPropagation()), o.value) {
        (s5 = (i3 = e3.operation) == null ? void 0 : i3.servers) != null && s5.length && l2.edit(e3.operation.uid, "selectedServerUid", null), e3.type === "collection" ? m8.edit(
          e3.collection.uid,
          "selectedServerUid",
          void 0
        ) : e3.type === "request" && e3.operation && l2.edit(e3.operation.uid, "selectedServerUid", null);
        return;
      }
      e3.type === "collection" && e3.collection ? ((S2 = (n4 = e3.operation) == null ? void 0 : n4.servers) != null && S2.length && l2.edit(e3.operation.uid, "selectedServerUid", null), m8.edit(
        e3.collection.uid,
        "selectedServerUid",
        r4
      )) : e3.type === "request" && e3.operation && l2.edit(e3.operation.uid, "selectedServerUid", r4);
    }, o = computed(() => {
      var r4;
      return e3.type === "collection" ? e3.collection.selectedServerUid === e3.serverOption.id && !((r4 = e3.operation) != null && r4.selectedServerUid) : e3.type === "request" && e3.operation ? e3.operation.selectedServerUid === e3.serverOption.id : false;
    }), b5 = (r4) => {
      if (!r4)
        return false;
      const t = _8[r4];
      return Object.keys((t == null ? void 0 : t.variables) ?? {}).length > 0;
    }, d3 = computed(
      () => {
        var r4;
        return o.value && b5(((r4 = e3.server) == null ? void 0 : r4.uid) ?? "");
      }
    ), w2 = (r4, t) => {
      x3("update:variable", r4, t);
    };
    return (r4, t) => {
      var i3, s5;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["group/item flex min-h-fit flex-col rounded border", { "border-transparent": !o.value }])
      }, [
        createBaseVNode("button", mergeProps(d3.value ? { "aria-controls": unref(f4) } : {}, {
          "aria-expanded": d3.value,
          class: ["flex min-h-8 cursor-pointer items-center gap-1.5 rounded px-1.5", o.value ? "text-c-1 bg-b-2" : "hover:bg-b-2"],
          type: "button",
          onClick: t[0] || (t[0] = (n4) => U3(r4.serverOption.id, n4))
        }), [
          createVNode(unref(u), { selected: o.value }, null, 8, ["selected"]),
          createBaseVNode("span", j2, toDisplayString(r4.serverOption.label), 1)
        ], 16, P2),
        d3.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          id: unref(f4),
          class: "bg-b-2 divide divide-y rounded-b border-t *:pl-4",
          onClick: t[1] || (t[1] = withModifiers(() => {
          }, ["stop"]))
        }, [
          createVNode(O, {
            variables: (i3 = r4.server) == null ? void 0 : i3.variables,
            "onUpdate:variable": w2
          }, null, 8, ["variables"]),
          (s5 = r4.server) != null && s5.description ? (openBlock(), createElementBlock("div", L3, [
            createBaseVNode("div", W, [
              createVNode(unref(_2), {
                value: r4.server.description
              }, null, 8, ["value"])
            ])
          ])) : createCommentVNode("", true)
        ], 8, z)) : createCommentVNode("", true)
      ], 2);
    };
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/Server/ServerDropdownItem.vue.js
var p4 = s(H2, [["__scopeId", "data-v-e86ebacd"]]);

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/Server/ServerDropdown.vue.js
var T2 = ["onClick"];
var j3 = { class: "flex h-4 w-4 items-center justify-center" };
var Q2 = defineComponent({
  __name: "ServerDropdown",
  props: {
    collection: {},
    operation: {},
    server: {},
    target: {}
  },
  setup(l2) {
    const { layout: U3 } = s2(), { servers: p5, collectionMutators: w2, events: A4, serverMutators: C } = je(), f4 = computed(
      () => {
        var e3, r4;
        return (r4 = (e3 = l2.operation) == null ? void 0 : e3.servers) == null ? void 0 : r4.map((t) => {
          var o;
          return {
            id: t,
            label: ((o = p5[t]) == null ? void 0 : o.url) ?? "Unknown server"
          };
        });
      }
    ), S2 = computed(
      () => {
        var e3, r4;
        return (
          // Filters out servers already present in the request
          (r4 = (e3 = l2.collection) == null ? void 0 : e3.servers) == null ? void 0 : r4.filter((t) => {
            var o, g4;
            return !((g4 = (o = l2.operation) == null ? void 0 : o.servers) != null && g4.includes(t));
          }).map((t) => {
            var o;
            return {
              id: t,
              label: ((o = p5[t]) == null ? void 0 : o.url) ?? "Unknown server"
            };
          })
        );
      }
    ), D2 = computed(
      () => {
        var e3, r4;
        return ((e3 = f4.value) == null ? void 0 : e3.length) && ((r4 = S2.value) == null ? void 0 : r4.length);
      }
    );
    watch([() => l2.collection, () => l2.operation], ([e3, r4]) => {
      var o;
      if (!e3 || e3.selectedServerUid || r4 != null && r4.selectedServerUid)
        return;
      const t = (o = l2.collection.servers) == null ? void 0 : o[0];
      t && w2.edit(l2.collection.uid, "selectedServerUid", t);
    });
    const B3 = () => A4.commandPalette.emit({
      commandName: "Add Server"
    }), N = computed(() => {
      var e3, r4, t;
      return (r4 = (e3 = l2.server) == null ? void 0 : e3.url) != null && r4.endsWith("/") ? l2.server.url.slice(0, -1) : ((t = l2.server) == null ? void 0 : t.url) || "";
    }), b5 = (e3, r4) => {
      if (!l2.server)
        return;
      const t = l2.server.variables || {};
      t[e3] = { ...t[e3], default: r4 }, C.edit(l2.server.uid, "variables", t);
    };
    return (e3, r4) => (openBlock(), createBlock(unref(b), {
      class: "max-h-[inherit] p-0 text-sm",
      focus: "",
      offset: 0,
      placement: "bottom-start",
      resize: "",
      target: e3.target,
      teleport: `#${e3.target}`
    }, {
      popover: withCtx(({ close: t }) => [
        createBaseVNode("div", {
          class: "custom-scroll flex max-h-[inherit] flex-col gap-1 border-t p-1",
          onClick: t
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(f4.value, (o) => (openBlock(), createBlock(p4, {
            key: o.id,
            collection: e3.collection,
            operation: e3.operation,
            server: e3.server,
            serverOption: o,
            type: "request",
            "onUpdate:variable": b5
          }, null, 8, ["collection", "operation", "server", "serverOption"]))), 128)),
          D2.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createVNode(unref(u2)),
            r4[2] || (r4[2] = createBaseVNode("div", { class: "text-xxs text-c-2 px-2.5 py-1" }, "Collection", -1))
          ], 64)) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(S2.value, (o) => (openBlock(), createBlock(p4, {
            key: o.id,
            collection: e3.collection,
            operation: e3.operation,
            server: e3.server,
            serverOption: o,
            type: "collection",
            "onUpdate:variable": b5
          }, null, 8, ["collection", "operation", "server", "serverOption"]))), 128)),
          unref(U3) !== "modal" ? (openBlock(), createElementBlock("button", {
            key: 1,
            class: "text-xxs hover:bg-b-2 flex cursor-pointer items-center gap-1.5 rounded p-1.75",
            type: "button",
            onClick: B3
          }, [
            createBaseVNode("div", j3, [
              createVNode(unref(m2), {
                icon: "Add",
                size: "sm"
              })
            ]),
            r4[3] || (r4[3] = createBaseVNode("span", null, "Add Server", -1))
          ])) : createCommentVNode("", true)
        ], 8, T2)
      ]),
      backdrop: withCtx(() => [
        createVNode(unref(m), { class: "-top-(--scalar-address-bar-height) rounded-lg" })
      ]),
      default: withCtx(() => [
        createVNode(unref($), {
          class: "z-context-plus hover:bg-b-2 font-code text-c-2 ml-0.75 h-auto gap-0.75 rounded border px-1.5 text-xs whitespace-nowrap lg:text-sm",
          variant: "ghost"
        }, {
          default: withCtx(() => {
            var t;
            return [
              (t = e3.operation) != null && t.selectedServerUid || e3.collection.selectedServerUid ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                r4[0] || (r4[0] = createBaseVNode("span", { class: "sr-only" }, "Server:", -1)),
                createTextVNode(" " + toDisplayString(N.value), 1)
              ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                r4[1] || (r4[1] = createBaseVNode("span", { class: "sr-only" }, "Add Server", -1)),
                createVNode(unref(m2), {
                  icon: "Add",
                  size: "xs"
                })
              ], 64))
            ];
          }),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["target", "teleport"]));
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/AddressBar/AddressBar.vue2.js
var F3 = ["id"];
var G2 = { class: "address-bar-bg-states text-xxs group relative order-last flex w-full max-w-[calc(100dvw-24px)] flex-1 flex-row items-stretch rounded-lg p-0.75 lg:order-none lg:max-w-[580px] lg:min-w-[580px] xl:max-w-[720px] xl:min-w-[720px]" };
var J2 = { class: "pointer-events-none absolute top-0 left-0 block h-full w-full overflow-hidden rounded-lg border" };
var X = { class: "z-context-plus flex gap-1" };
var Y = { class: "scroll-timeline-x scroll-timeline-x-hidden z-context-plus relative flex w-full bg-blend-normal" };
var Z = {
  "aria-hidden": "true",
  class: "inline-flex items-center gap-1"
};
var _7 = { class: "sr-only" };
var de = defineComponent({
  __name: "AddressBar",
  props: {
    collection: {},
    operation: {},
    server: {},
    environment: {},
    envVariables: {},
    workspace: {}
  },
  emits: ["importCurl"],
  setup(n4) {
    const p5 = useId(), { requestMutators: m8, events: c2 } = je(), { layout: v3 } = s2(), h = ref(null), x3 = ref(null), B3 = (e3) => {
      n4.operation.path !== e3 && m8.edit(n4.operation.uid, "path", e3);
    };
    watch(
      () => n4.operation.path,
      (e3) => {
        e3 && B3(e3);
      }
    );
    const t = ref(100), w2 = ref(0), r4 = ref(false), s5 = ref();
    function y3() {
      r4.value ? t.value -= (t.value - 15) / 60 : t.value -= w2.value / 20, t.value <= 0 && (clearInterval(s5.value), s5.value = void 0, t.value = 100, r4.value = false);
    }
    function C() {
      s5.value || (r4.value = true, s5.value = setInterval(y3, 20));
    }
    function R() {
      w2.value = t.value, r4.value = false;
    }
    function q() {
      clearInterval(s5.value), s5.value = void 0, t.value = 100, r4.value = false;
    }
    c2.requestStatus.on((e3) => {
      e3 === "start" && C(), e3 === "stop" && R(), e3 === "abort" && q();
    }), c2.focusAddressBar.on(() => {
      var e3, o, d3;
      v3 === "modal" ? (o = (e3 = x3.value) == null ? void 0 : e3.$el) == null || o.focus() : (d3 = h.value) == null || d3.focus();
    });
    function S2(e3) {
      m8.edit(n4.operation.uid, "method", e3);
    }
    function V2() {
      const { method: e3 } = n4.operation;
      return REQUEST_METHODS[e3].colorVar;
    }
    function g4() {
      r4.value || (r4.value = true, c2.executeRequest.emit({ requestUid: n4.operation.uid }));
    }
    c2.hotKeys.on((e3) => {
      var o;
      e3 != null && e3.focusAddressBar && ((o = h.value) == null || o.focus()), e3 != null && e3.executeRequest && g4();
    });
    function E3(e3) {
      m8.edit(n4.operation.uid, "path", e3);
    }
    return (e3, o) => {
      var d3;
      return openBlock(), createElementBlock("div", {
        id: unref(p5),
        class: "scalar-address-bar order-last flex h-(--scalar-address-bar-height) w-full [--scalar-address-bar-height:32px] lg:order-none lg:w-auto"
      }, [
        createBaseVNode("div", G2, [
          createBaseVNode("div", J2, [
            createBaseVNode("div", {
              class: "absolute top-0 left-0 z-[1002] h-full w-full",
              style: normalizeStyle({
                backgroundColor: `color-mix(in srgb, transparent 90%, ${V2()})`,
                transform: `translate3d(-${t.value}%,0,0)`
              })
            }, null, 4)
          ]),
          createBaseVNode("div", X, [
            createVNode(m3, {
              isEditable: unref(v3) !== "modal",
              isSquare: "",
              method: e3.operation.method,
              teleport: "",
              onChange: S2
            }, null, 8, ["isEditable", "method"])
          ]),
          createBaseVNode("div", Y, [
            e3.collection.servers.length ? (openBlock(), createBlock(unref(Q2), {
              key: 0,
              collection: e3.collection,
              layout: "client",
              operation: e3.operation,
              server: e3.server,
              target: unref(p5)
            }, null, 8, ["collection", "operation", "server", "target"])) : createCommentVNode("", true),
            o[1] || (o[1] = createBaseVNode("div", { class: "fade-left" }, null, -1)),
            createVNode(e, {
              ref_key: "addressBarRef",
              ref: h,
              "aria-label": "Path",
              class: "min-w-fit outline-none",
              disableCloseBrackets: "",
              disabled: unref(v3) === "modal",
              disableEnter: "",
              disableTabIndent: "",
              emitOnBlur: false,
              envVariables: e3.envVariables,
              environment: e3.environment,
              importCurl: "",
              modelValue: e3.operation.path,
              placeholder: (d3 = e3.server) != null && d3.uid && e3.collection.servers.includes(e3.server.uid) ? "" : "Enter a URL or cURL command",
              server: "",
              workspace: e3.workspace,
              onCurl: o[0] || (o[0] = (f4) => e3.$emit("importCurl", f4)),
              onSubmit: g4,
              "onUpdate:modelValue": E3
            }, null, 8, ["disabled", "envVariables", "environment", "modelValue", "placeholder", "workspace"]),
            o[2] || (o[2] = createBaseVNode("div", { class: "fade-right" }, null, -1))
          ]),
          createVNode(f3, {
            operation: e3.operation,
            target: unref(p5)
          }, null, 8, ["operation", "target"]),
          createVNode(unref($), {
            ref_key: "sendButtonRef",
            ref: x3,
            class: "z-context-plus relative h-auto shrink-0 overflow-hidden py-1 pr-2.5 pl-2 font-bold",
            disabled: r4.value,
            onClick: g4
          }, {
            default: withCtx(() => {
              var f4;
              return [
                createBaseVNode("span", Z, [
                  createVNode(unref(m2), {
                    class: "relative shrink-0 fill-current",
                    icon: "Play",
                    size: "xs"
                  }),
                  o[3] || (o[3] = createBaseVNode("span", { class: "text-xxs hidden lg:flex" }, "Send", -1))
                ]),
                createBaseVNode("span", _7, " Send " + toDisplayString(e3.operation.method) + " request to " + toDisplayString(((f4 = e3.server) == null ? void 0 : f4.url) ?? "") + toDisplayString(e3.operation.path), 1)
              ];
            }),
            _: 1
          }, 8, ["disabled"])
        ])
      ], 8, F3);
    };
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/components/AddressBar/AddressBar.vue.js
var d2 = s(de, [["__scopeId", "data-v-e050d490"]]);

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/libs/extractAttachmentFilename.js
var n3 = (e3) => {
  try {
    return decodeURIComponent(e3);
  } catch {
    return e3;
  }
};
function r3(e3) {
  var t, m8;
  let a5 = "";
  if (e3) {
    const c2 = ((t = e3.match(/filename\*=UTF-8''([^;]+)/)) == null ? void 0 : t[1]) ?? ((m8 = e3.match(/filename\s*=\s*"?([^";]+)"?/)) == null ? void 0 : m8[1]);
    c2 && (a5 = n3(c2.trim()));
  }
  return a5;
}

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/hooks/useResponseBody.js
var import_whatwg_mimetype = __toESM(require_mime_type(), 1);
function b4(t) {
  const l2 = (a5) => a5 instanceof Blob, e3 = computed(() => isRef(t.data) ? t.data.value : t.data), c2 = computed(() => isRef(t.headers) ? t.headers.value : t.headers), o = computed(() => {
    var n4;
    const a5 = ((n4 = c2.value.find((u3) => u3.name.toLowerCase() === "content-type")) == null ? void 0 : n4.value) ?? "";
    return new import_whatwg_mimetype.default(a5);
  }), s5 = computed(() => {
    var n4;
    const a5 = ((n4 = c2.value.find((u3) => u3.name.toLowerCase() === "content-disposition")) == null ? void 0 : n4.value) ?? "";
    return r3(a5);
  }), f4 = computed(() => l2(e3.value) ? URL.createObjectURL(e3.value) : typeof e3.value == "string" ? URL.createObjectURL(new Blob([e3.value], { type: o.value.toString() })) : e3.value instanceof Object && Object.keys(e3.value).length ? URL.createObjectURL(
    new Blob([JSON.stringify(e3.value)], {
      type: o.value.toString()
    })
  ) : "");
  return { mimeType: o, attachmentFilename: s5, dataUrl: f4 };
}

export {
  a4 as a,
  d2 as d,
  b4 as b,
  a as a2,
  snippetz,
  f2 as f,
  a3
};
//# sourceMappingURL=chunk-LRSR3S4X.js.map
