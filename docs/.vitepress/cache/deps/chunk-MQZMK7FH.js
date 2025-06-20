import {
  isMacOS
} from "./chunk-GOSQUSWR.js";
import {
  apiClientConfigurationSchema,
  collectionSchema,
  createExampleFromRequest,
  getNestedValue,
  requestSchema,
  securitySchemeSchema,
  serverSchema,
  tagSchema
} from "./chunk-6M3JNKJN.js";
import {
  isHttpMethod,
  schemaModel,
  z
} from "./chunk-OYO2YRBV.js";
import {
  inject,
  ref
} from "./chunk-XQNPNIQJ.js";

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/hooks/useClientConfig.js
var e = Symbol();
var m = () => inject(e, ref(apiClientConfigurationSchema.parse({})));

// node_modules/.pnpm/microdiff@1.5.0/node_modules/microdiff/dist/index.js
var richTypes = { Date: true, RegExp: true, String: true, Number: true };
function diff(obj, newObj, options = { cyclesFix: true }, _stack = []) {
  var _a, _b;
  let diffs = [];
  const isObjArray = Array.isArray(obj);
  for (const key in obj) {
    const objKey = obj[key];
    const path = isObjArray ? +key : key;
    if (!(key in newObj)) {
      diffs.push({
        type: "REMOVE",
        path: [path],
        oldValue: obj[key]
      });
      continue;
    }
    const newObjKey = newObj[key];
    const areCompatibleObjects = typeof objKey === "object" && typeof newObjKey === "object" && Array.isArray(objKey) === Array.isArray(newObjKey);
    if (objKey && newObjKey && areCompatibleObjects && !richTypes[(_b = (_a = Object.getPrototypeOf(objKey)) == null ? void 0 : _a.constructor) == null ? void 0 : _b.name] && (!options.cyclesFix || !_stack.includes(objKey))) {
      diffs.push.apply(diffs, diff(objKey, newObjKey, options, options.cyclesFix ? _stack.concat([objKey]) : []).map((difference) => {
        difference.path.unshift(path);
        return difference;
      }));
    } else if (objKey !== newObjKey && // treat NaN values as equivalent
    !(Number.isNaN(objKey) && Number.isNaN(newObjKey)) && !(areCompatibleObjects && (isNaN(objKey) ? objKey + "" === newObjKey + "" : +objKey === +newObjKey))) {
      diffs.push({
        path: [path],
        type: "CHANGE",
        value: newObjKey,
        oldValue: objKey
      });
    }
  }
  const isNewObjArray = Array.isArray(newObj);
  for (const key in newObj) {
    if (!(key in obj)) {
      diffs.push({
        type: "CREATE",
        path: [isNewObjArray ? +key : key],
        value: newObj[key]
      });
    }
  }
  return diffs;
}

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/views/Request/libs/watch-mode.js
var G = (e2, s = []) => {
  const t = [];
  let a = false;
  for (let u2 = 0; u2 < e2.length; u2++) {
    if (a) {
      a = false;
      continue;
    }
    const n = e2[u2], r = e2[u2 + 1];
    if (n) {
      if (s.length)
        n.path = [...s, ...n.path], r && (r.path = [...s, ...r.path]);
      else if (n.path[0] !== "paths") {
        t.push(n);
        continue;
      }
      if (n.type === "REMOVE" && (r == null ? void 0 : r.type) === "CREATE") {
        const [, l2, p] = n.path, [, o, h] = r.path, c2 = ["paths", o].filter((f2) => typeof f2 == "string");
        if (l2 !== o && t.push({
          type: "CHANGE",
          path: ["paths", "path"],
          oldValue: l2,
          value: o
        }), p && typeof h == "string" && p !== h && o && (t.push({
          type: "CHANGE",
          path: ["paths", o, "method"],
          oldValue: p,
          value: h
        }), c2.push(h)), s.length === 0) {
          const f2 = diff(n.oldValue, r.value);
          if (f2.length) {
            const g = G(f2, c2);
            t.push(...g);
          }
        }
        a = true;
      } else n.type === "CREATE" && n.path.length > 3 && typeof n.path.at(-1) != "number" ? t.push({ ...n, type: "CHANGE", oldValue: void 0 }) : n.type === "REMOVE" && n.path.length > 3 && typeof n.path.at(-1) != "number" ? t.push({ ...n, type: "CHANGE", value: void 0 }) : t.push(n);
    }
  }
  return t;
};
var v = (e2, s, t) => {
  for (const a of e2) {
    const u2 = s[a];
    if (u2 && t(u2))
      return u2;
  }
  return null;
};
var d = (e2) => e2 instanceof z.ZodOptional ? d(e2.unwrap()) : e2 instanceof z.ZodDefault ? d(e2._def.innerType) : e2 instanceof z.ZodEffects ? d(e2._def.schema) : e2 instanceof z.ZodCatch ? d(e2._def.innerType) : e2;
var _ = (e2, s) => {
  let t = e2;
  for (const a of s) {
    if (t = d(t), t instanceof z.ZodAny)
      return t;
    if (t instanceof z.ZodObject && typeof a == "string" && a in t.shape)
      t = t.shape[a];
    else if (t instanceof z.ZodArray)
      if (typeof a == "number")
        t = t.element;
      else if (typeof a == "string")
        if (t = t.element, t instanceof z.ZodObject && a in t.shape)
          t = t.shape[a];
        else
          return null;
      else
        return null;
    else if (t instanceof z.ZodRecord)
      t = t.valueSchema;
    else
      return null;
    t = d(t);
  }
  return t;
};
var E = (e2, s) => {
  const t = _(e2, s.path);
  if (!t)
    return null;
  const a = s.path.join("."), u2 = s.path.slice(0, -1).join(".");
  if (s.type === "REMOVE")
    return {
      path: a,
      pathMinusOne: u2,
      value: void 0
    };
  const n = schemaModel(s.value, t, false);
  return typeof n > "u" || n === null ? null : {
    path: a,
    pathMinusOne: u2,
    value: n
  };
};
var L = (e2, { activeCollection: s }, { collectionMutators: t }) => {
  if (!s.value)
    return false;
  if (typeof e2.path[e2.path.length - 1] == "number" && (e2.type === "CREATE" || e2.type === "REMOVE")) {
    const a = E(collectionSchema, {
      ...e2,
      path: e2.path
    });
    if (!a)
      return false;
    const u2 = [...getNestedValue(s.value, a.pathMinusOne)];
    e2.type === "CREATE" ? u2.push(a.value) : e2.type === "REMOVE" && u2.pop(), t.edit(s.value.uid, a.pathMinusOne, u2);
  } else {
    const a = E(collectionSchema, e2);
    if (!a)
      return false;
    t.edit(s.value.uid, a.path, a.value);
  }
  return true;
};
var T = (e2, s) => {
  const { requests: t, requestExamples: a, requestExampleMutators: u2 } = s, n = t[e2];
  n == null || n.examples.forEach((r) => {
    var p;
    const l2 = createExampleFromRequest(n, ((p = a[r]) == null ? void 0 : p.name) ?? "Default");
    l2 && u2.set({
      ...l2,
      uid: r
    });
  });
};
var P = (e2, { activeCollection: s }, t) => {
  if (!s.value)
    return false;
  const { requests: a, requestMutators: u2 } = t, [, n, r, ...l2] = e2.path;
  if (n === "path" && e2.type === "CHANGE")
    s.value.requests.forEach((p) => {
      var o;
      ((o = a[p]) == null ? void 0 : o.path) === e2.oldValue && u2.edit(p, "path", e2.value);
    });
  else if (r === "method" && e2.type === "CHANGE")
    s.value.requests.forEach((p) => {
      var o, h;
      ((o = a[p]) == null ? void 0 : o.method) === e2.oldValue && ((h = a[p]) == null ? void 0 : h.path) === n && u2.edit(p, "method", e2.value);
    });
  else if (e2.type !== "CHANGE" && typeof l2.at(-1) == "number") {
    const p = v(
      s.value.requests,
      a,
      (c2) => c2.path === n && c2.method === r
    ), o = E(requestSchema, {
      ...e2,
      path: e2.path.slice(3)
    });
    if (!p || !o)
      return false;
    const h = [...getNestedValue(p, o.pathMinusOne)];
    e2.type === "CREATE" ? h.push(o.value) : e2.type === "REMOVE" && h.pop(), u2.edit(p.uid, o.pathMinusOne, h), (e2.path[3] === "parameters" || e2.path[3] === "requestBody") && T(p.uid, t);
  } else if (e2.type === "CREATE") {
    const [p] = Object.entries(e2.value ?? {}), [o, h] = p ?? [], c2 = r ? e2.value : h, f2 = r || o, g = serverSchema.array().parse(c2.servers ?? []), { security: y, ...N } = c2, A = {
      ...N,
      method: isHttpMethod(f2) ? f2 : "get",
      path: n,
      parameters: c2.parameters ?? [],
      servers: g.map((m2) => m2.uid)
    };
    y != null && y.length && (A.security = y.map((m2) => {
      if (Object.keys(m2).length) {
        const [O] = Object.keys(m2);
        return O ? {
          [O]: m2[O]
        } : m2;
      }
      return m2;
    }));
    const b = schemaModel(A, requestSchema, false);
    if (!b)
      return false;
    u2.add(b, s.value.uid);
  } else if (e2.type === "REMOVE") {
    const p = v(
      s.value.requests,
      a,
      (o) => o.path === n && o.method === r
    );
    if (!p)
      return false;
    u2.delete(p, s.value.uid);
  } else if (e2.type === "CHANGE") {
    const p = v(
      s.value.requests,
      a,
      (h) => h.path === n && h.method === r
    ), o = E(requestSchema, { ...e2, path: l2 });
    if (!p || !o)
      return false;
    u2.edit(p.uid, o.path, o.value), (e2.path[3] === "parameters" || e2.path[3] === "requestBody") && T(p.uid, t);
  }
  return true;
};
var W = (e2, { activeCollection: s }, { servers: t, serverMutators: a }) => {
  if (!s.value)
    return false;
  const [, u2, ...n] = e2.path;
  if (n != null && n.length) {
    const r = s.value.servers[u2];
    if (!r)
      return false;
    const l2 = t[r], p = E(serverSchema, { ...e2, path: n });
    if (!l2 || !p)
      return false;
    const h = e2.type === "REMOVE" && n[n.length - 1] === "variables" ? {} : p.value;
    a.edit(r, p.path, h);
  } else if (e2.type === "REMOVE") {
    if (!s.value.servers[u2])
      return false;
    a.delete(s.value.servers[u2], s.value.uid);
  } else if (e2.type === "CREATE") {
    const r = schemaModel(e2.value, serverSchema, false);
    if (!r)
      return false;
    a.add(r, s.value.uid);
  }
  return true;
};
var I = (e2, { activeCollection: s }, { tags: t, tagMutators: a }) => {
  if (!s.value)
    return false;
  const [, u2, ...n] = e2.path;
  if (n != null && n.length) {
    const r = s.value.tags[u2];
    if (!r)
      return false;
    const l2 = t[r], p = E(tagSchema, { ...e2, path: n });
    if (!l2 || !p)
      return false;
    a.edit(r, p.path, p.value);
  } else if (e2.type === "REMOVE") {
    const r = s.value.tags[u2];
    if (!r)
      return false;
    const l2 = t[r];
    if (!l2)
      return false;
    a.delete(l2, s.value.uid);
  } else if (e2.type === "CREATE") {
    const r = schemaModel(e2.value, tagSchema, false);
    if (!r)
      return false;
    a.add(r, s.value.uid);
  }
  return true;
};
var w = (e2, s, t) => {
  const a = d(e2);
  if (a instanceof z.ZodUnion || a instanceof z.ZodDiscriminatedUnion) {
    for (const u2 of a.options)
      if (u2 instanceof z.ZodObject && s in u2.shape && u2.shape[s] instanceof z.ZodLiteral && u2.shape[s].value === t)
        return u2;
  }
  return null;
};
var J = (e2, { activeCollection: s }, { securitySchemes: t, securitySchemeMutators: a }) => {
  if (!s.value)
    return false;
  const [, , u2, ...n] = e2.path, r = t[u2] ?? v(
    s.value.securitySchemes,
    t,
    (l2) => l2.nameKey === u2
  );
  if (n != null && n.length) {
    const l2 = w(securitySchemeSchema, "type", (r == null ? void 0 : r.type) ?? "");
    if (!l2 || !r)
      return false;
    const p = E(l2, { ...e2, path: n });
    if (!p)
      return false;
    const o = p.path;
    a.edit(r.uid, o, p.value);
  } else if (e2.type === "REMOVE") {
    if (!r)
      return false;
    a.delete(r.uid);
  } else e2.type === "CREATE" && a.add(securitySchemeSchema.parse(e2.value), s.value.uid);
  return true;
};

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/libs/hot-keys.js
var f = [
  "Escape",
  "ArrowDown",
  "ArrowUp",
  "Enter",
  "F1",
  "F2",
  "F3",
  "F4",
  "F5",
  "F6",
  "F7",
  "F8",
  "F9",
  "F10",
  "F11",
  "F12"
];
var d2 = {
  Escape: { event: "closeModal" },
  Enter: { event: "executeRequest", modifiers: ["default"] },
  b: { event: "toggleSidebar", modifiers: ["default"] },
  k: { event: "openCommandPalette", modifiers: ["default"] },
  l: { event: "focusAddressBar", modifiers: ["default"] }
};
var c = (e2) => {
  if (!(e2.target instanceof HTMLElement))
    return false;
  const t = e2.target;
  return t.tagName === "INPUT" ? !f.includes(e2.key) : !!(t.tagName === "TEXTAREA" || t.getAttribute("contenteditable") || t.contentEditable === "true");
};
var l = {
  Alt: "altKey",
  Control: "ctrlKey",
  Shift: "shiftKey",
  Meta: "metaKey"
};
var u = (e2) => e2.map((t) => t === "default" ? isMacOS() ? "metaKey" : "ctrlKey" : l[t]);
var E2 = (e2, t, { hotKeys: o = d2, modifiers: n = ["default"] } = {}) => {
  const i = e2.key === " " ? "Space" : e2.key, r = o[i];
  r && (i === "Escape" ? t.emit({ [r.event]: e2 }) : u(r.modifiers || n).every((s) => e2[s] === true) ? t.emit({ [r.event]: e2 }) : !c(e2) && r.modifiers === void 0 && t.emit({ [r.event]: e2 }));
};

export {
  e,
  m,
  diff,
  G,
  L,
  P,
  W,
  I,
  J,
  u,
  E2 as E
};
//# sourceMappingURL=chunk-MQZMK7FH.js.map
