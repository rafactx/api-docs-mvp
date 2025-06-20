import {
  REGEX,
  W,
  combineUrlAndPath,
  createHash,
  fetchDocument,
  isDefined,
  isHttpMethod,
  iterateTitle,
  json2xml,
  nanoid,
  normalizeMimeTypeObject,
  objectKeys,
  parse,
  prettyPrintJson,
  schemaModel,
  stringify,
  z
} from "./chunk-OYO2YRBV.js";
import {
  computed,
  inject,
  reactive,
  ref,
  toRaw
} from "./chunk-XQNPNIQJ.js";
import {
  __commonJS,
  __publicField,
  __toESM
} from "./chunk-DC5AMYBS.js";

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/compile/codegen/code.js
var require_code = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/compile/codegen/code.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.regexpCode = exports.getEsmExportName = exports.getProperty = exports.safeStringify = exports.stringify = exports.strConcat = exports.addCodeArg = exports.str = exports._ = exports.nil = exports._Code = exports.Name = exports.IDENTIFIER = exports._CodeOrName = void 0;
    var _CodeOrName = class {
    };
    exports._CodeOrName = _CodeOrName;
    exports.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    var Name = class extends _CodeOrName {
      constructor(s3) {
        super();
        if (!exports.IDENTIFIER.test(s3))
          throw new Error("CodeGen: name must be a valid identifier");
        this.str = s3;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        return false;
      }
      get names() {
        return { [this.str]: 1 };
      }
    };
    exports.Name = Name;
    var _Code = class extends _CodeOrName {
      constructor(code) {
        super();
        this._items = typeof code === "string" ? [code] : code;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        if (this._items.length > 1)
          return false;
        const item = this._items[0];
        return item === "" || item === '""';
      }
      get str() {
        var _a;
        return (_a = this._str) !== null && _a !== void 0 ? _a : this._str = this._items.reduce((s3, c2) => `${s3}${c2}`, "");
      }
      get names() {
        var _a;
        return (_a = this._names) !== null && _a !== void 0 ? _a : this._names = this._items.reduce((names, c2) => {
          if (c2 instanceof Name)
            names[c2.str] = (names[c2.str] || 0) + 1;
          return names;
        }, {});
      }
    };
    exports._Code = _Code;
    exports.nil = new _Code("");
    function _2(strs, ...args) {
      const code = [strs[0]];
      let i2 = 0;
      while (i2 < args.length) {
        addCodeArg(code, args[i2]);
        code.push(strs[++i2]);
      }
      return new _Code(code);
    }
    exports._ = _2;
    var plus = new _Code("+");
    function str(strs, ...args) {
      const expr = [safeStringify(strs[0])];
      let i2 = 0;
      while (i2 < args.length) {
        expr.push(plus);
        addCodeArg(expr, args[i2]);
        expr.push(plus, safeStringify(strs[++i2]));
      }
      optimize(expr);
      return new _Code(expr);
    }
    exports.str = str;
    function addCodeArg(code, arg) {
      if (arg instanceof _Code)
        code.push(...arg._items);
      else if (arg instanceof Name)
        code.push(arg);
      else
        code.push(interpolate(arg));
    }
    exports.addCodeArg = addCodeArg;
    function optimize(expr) {
      let i2 = 1;
      while (i2 < expr.length - 1) {
        if (expr[i2] === plus) {
          const res = mergeExprItems(expr[i2 - 1], expr[i2 + 1]);
          if (res !== void 0) {
            expr.splice(i2 - 1, 3, res);
            continue;
          }
          expr[i2++] = "+";
        }
        i2++;
      }
    }
    function mergeExprItems(a3, b) {
      if (b === '""')
        return a3;
      if (a3 === '""')
        return b;
      if (typeof a3 == "string") {
        if (b instanceof Name || a3[a3.length - 1] !== '"')
          return;
        if (typeof b != "string")
          return `${a3.slice(0, -1)}${b}"`;
        if (b[0] === '"')
          return a3.slice(0, -1) + b.slice(1);
        return;
      }
      if (typeof b == "string" && b[0] === '"' && !(a3 instanceof Name))
        return `"${a3}${b.slice(1)}`;
      return;
    }
    function strConcat(c1, c2) {
      return c2.emptyStr() ? c1 : c1.emptyStr() ? c2 : str`${c1}${c2}`;
    }
    exports.strConcat = strConcat;
    function interpolate(x) {
      return typeof x == "number" || typeof x == "boolean" || x === null ? x : safeStringify(Array.isArray(x) ? x.join(",") : x);
    }
    function stringify3(x) {
      return new _Code(safeStringify(x));
    }
    exports.stringify = stringify3;
    function safeStringify(x) {
      return JSON.stringify(x).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    exports.safeStringify = safeStringify;
    function getProperty(key) {
      return typeof key == "string" && exports.IDENTIFIER.test(key) ? new _Code(`.${key}`) : _2`[${key}]`;
    }
    exports.getProperty = getProperty;
    function getEsmExportName(key) {
      if (typeof key == "string" && exports.IDENTIFIER.test(key)) {
        return new _Code(`${key}`);
      }
      throw new Error(`CodeGen: invalid export name: ${key}, use explicit $id name mapping`);
    }
    exports.getEsmExportName = getEsmExportName;
    function regexpCode(rx) {
      return new _Code(rx.toString());
    }
    exports.regexpCode = regexpCode;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/compile/codegen/scope.js
var require_scope = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/compile/codegen/scope.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ValueScope = exports.ValueScopeName = exports.Scope = exports.varKinds = exports.UsedValueState = void 0;
    var code_1 = require_code();
    var ValueError = class extends Error {
      constructor(name) {
        super(`CodeGen: "code" for ${name} not defined`);
        this.value = name.value;
      }
    };
    var UsedValueState;
    (function(UsedValueState2) {
      UsedValueState2[UsedValueState2["Started"] = 0] = "Started";
      UsedValueState2[UsedValueState2["Completed"] = 1] = "Completed";
    })(UsedValueState || (exports.UsedValueState = UsedValueState = {}));
    exports.varKinds = {
      const: new code_1.Name("const"),
      let: new code_1.Name("let"),
      var: new code_1.Name("var")
    };
    var Scope = class {
      constructor({ prefixes, parent } = {}) {
        this._names = {};
        this._prefixes = prefixes;
        this._parent = parent;
      }
      toName(nameOrPrefix) {
        return nameOrPrefix instanceof code_1.Name ? nameOrPrefix : this.name(nameOrPrefix);
      }
      name(prefix) {
        return new code_1.Name(this._newName(prefix));
      }
      _newName(prefix) {
        const ng = this._names[prefix] || this._nameGroup(prefix);
        return `${prefix}${ng.index++}`;
      }
      _nameGroup(prefix) {
        var _a, _b;
        if (((_b = (_a = this._parent) === null || _a === void 0 ? void 0 : _a._prefixes) === null || _b === void 0 ? void 0 : _b.has(prefix)) || this._prefixes && !this._prefixes.has(prefix)) {
          throw new Error(`CodeGen: prefix "${prefix}" is not allowed in this scope`);
        }
        return this._names[prefix] = { prefix, index: 0 };
      }
    };
    exports.Scope = Scope;
    var ValueScopeName = class extends code_1.Name {
      constructor(prefix, nameStr) {
        super(nameStr);
        this.prefix = prefix;
      }
      setValue(value, { property, itemIndex }) {
        this.value = value;
        this.scopePath = (0, code_1._)`.${new code_1.Name(property)}[${itemIndex}]`;
      }
    };
    exports.ValueScopeName = ValueScopeName;
    var line = (0, code_1._)`\n`;
    var ValueScope = class extends Scope {
      constructor(opts) {
        super(opts);
        this._values = {};
        this._scope = opts.scope;
        this.opts = { ...opts, _n: opts.lines ? line : code_1.nil };
      }
      get() {
        return this._scope;
      }
      name(prefix) {
        return new ValueScopeName(prefix, this._newName(prefix));
      }
      value(nameOrPrefix, value) {
        var _a;
        if (value.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const name = this.toName(nameOrPrefix);
        const { prefix } = name;
        const valueKey = (_a = value.key) !== null && _a !== void 0 ? _a : value.ref;
        let vs = this._values[prefix];
        if (vs) {
          const _name = vs.get(valueKey);
          if (_name)
            return _name;
        } else {
          vs = this._values[prefix] = /* @__PURE__ */ new Map();
        }
        vs.set(valueKey, name);
        const s3 = this._scope[prefix] || (this._scope[prefix] = []);
        const itemIndex = s3.length;
        s3[itemIndex] = value.ref;
        name.setValue(value, { property: prefix, itemIndex });
        return name;
      }
      getValue(prefix, keyOrRef) {
        const vs = this._values[prefix];
        if (!vs)
          return;
        return vs.get(keyOrRef);
      }
      scopeRefs(scopeName, values = this._values) {
        return this._reduceValues(values, (name) => {
          if (name.scopePath === void 0)
            throw new Error(`CodeGen: name "${name}" has no value`);
          return (0, code_1._)`${scopeName}${name.scopePath}`;
        });
      }
      scopeCode(values = this._values, usedValues, getCode) {
        return this._reduceValues(values, (name) => {
          if (name.value === void 0)
            throw new Error(`CodeGen: name "${name}" has no value`);
          return name.value.code;
        }, usedValues, getCode);
      }
      _reduceValues(values, valueCode, usedValues = {}, getCode) {
        let code = code_1.nil;
        for (const prefix in values) {
          const vs = values[prefix];
          if (!vs)
            continue;
          const nameSet = usedValues[prefix] = usedValues[prefix] || /* @__PURE__ */ new Map();
          vs.forEach((name) => {
            if (nameSet.has(name))
              return;
            nameSet.set(name, UsedValueState.Started);
            let c2 = valueCode(name);
            if (c2) {
              const def = this.opts.es5 ? exports.varKinds.var : exports.varKinds.const;
              code = (0, code_1._)`${code}${def} ${name} = ${c2};${this.opts._n}`;
            } else if (c2 = getCode === null || getCode === void 0 ? void 0 : getCode(name)) {
              code = (0, code_1._)`${code}${c2}${this.opts._n}`;
            } else {
              throw new ValueError(name);
            }
            nameSet.set(name, UsedValueState.Completed);
          });
        }
        return code;
      }
    };
    exports.ValueScope = ValueScope;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/compile/codegen/index.js
var require_codegen = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/compile/codegen/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.or = exports.and = exports.not = exports.CodeGen = exports.operators = exports.varKinds = exports.ValueScopeName = exports.ValueScope = exports.Scope = exports.Name = exports.regexpCode = exports.stringify = exports.getProperty = exports.nil = exports.strConcat = exports.str = exports._ = void 0;
    var code_1 = require_code();
    var scope_1 = require_scope();
    var code_2 = require_code();
    Object.defineProperty(exports, "_", { enumerable: true, get: function() {
      return code_2._;
    } });
    Object.defineProperty(exports, "str", { enumerable: true, get: function() {
      return code_2.str;
    } });
    Object.defineProperty(exports, "strConcat", { enumerable: true, get: function() {
      return code_2.strConcat;
    } });
    Object.defineProperty(exports, "nil", { enumerable: true, get: function() {
      return code_2.nil;
    } });
    Object.defineProperty(exports, "getProperty", { enumerable: true, get: function() {
      return code_2.getProperty;
    } });
    Object.defineProperty(exports, "stringify", { enumerable: true, get: function() {
      return code_2.stringify;
    } });
    Object.defineProperty(exports, "regexpCode", { enumerable: true, get: function() {
      return code_2.regexpCode;
    } });
    Object.defineProperty(exports, "Name", { enumerable: true, get: function() {
      return code_2.Name;
    } });
    var scope_2 = require_scope();
    Object.defineProperty(exports, "Scope", { enumerable: true, get: function() {
      return scope_2.Scope;
    } });
    Object.defineProperty(exports, "ValueScope", { enumerable: true, get: function() {
      return scope_2.ValueScope;
    } });
    Object.defineProperty(exports, "ValueScopeName", { enumerable: true, get: function() {
      return scope_2.ValueScopeName;
    } });
    Object.defineProperty(exports, "varKinds", { enumerable: true, get: function() {
      return scope_2.varKinds;
    } });
    exports.operators = {
      GT: new code_1._Code(">"),
      GTE: new code_1._Code(">="),
      LT: new code_1._Code("<"),
      LTE: new code_1._Code("<="),
      EQ: new code_1._Code("==="),
      NEQ: new code_1._Code("!=="),
      NOT: new code_1._Code("!"),
      OR: new code_1._Code("||"),
      AND: new code_1._Code("&&"),
      ADD: new code_1._Code("+")
    };
    var Node = class {
      optimizeNodes() {
        return this;
      }
      optimizeNames(_names, _constants) {
        return this;
      }
    };
    var Def = class extends Node {
      constructor(varKind, name, rhs) {
        super();
        this.varKind = varKind;
        this.name = name;
        this.rhs = rhs;
      }
      render({ es5, _n }) {
        const varKind = es5 ? scope_1.varKinds.var : this.varKind;
        const rhs = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${varKind} ${this.name}${rhs};` + _n;
      }
      optimizeNames(names, constants) {
        if (!names[this.name.str])
          return;
        if (this.rhs)
          this.rhs = optimizeExpr(this.rhs, names, constants);
        return this;
      }
      get names() {
        return this.rhs instanceof code_1._CodeOrName ? this.rhs.names : {};
      }
    };
    var Assign = class extends Node {
      constructor(lhs, rhs, sideEffects) {
        super();
        this.lhs = lhs;
        this.rhs = rhs;
        this.sideEffects = sideEffects;
      }
      render({ _n }) {
        return `${this.lhs} = ${this.rhs};` + _n;
      }
      optimizeNames(names, constants) {
        if (this.lhs instanceof code_1.Name && !names[this.lhs.str] && !this.sideEffects)
          return;
        this.rhs = optimizeExpr(this.rhs, names, constants);
        return this;
      }
      get names() {
        const names = this.lhs instanceof code_1.Name ? {} : { ...this.lhs.names };
        return addExprNames(names, this.rhs);
      }
    };
    var AssignOp = class extends Assign {
      constructor(lhs, op, rhs, sideEffects) {
        super(lhs, rhs, sideEffects);
        this.op = op;
      }
      render({ _n }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + _n;
      }
    };
    var Label = class extends Node {
      constructor(label) {
        super();
        this.label = label;
        this.names = {};
      }
      render({ _n }) {
        return `${this.label}:` + _n;
      }
    };
    var Break = class extends Node {
      constructor(label) {
        super();
        this.label = label;
        this.names = {};
      }
      render({ _n }) {
        const label = this.label ? ` ${this.label}` : "";
        return `break${label};` + _n;
      }
    };
    var Throw = class extends Node {
      constructor(error) {
        super();
        this.error = error;
      }
      render({ _n }) {
        return `throw ${this.error};` + _n;
      }
      get names() {
        return this.error.names;
      }
    };
    var AnyCode = class extends Node {
      constructor(code) {
        super();
        this.code = code;
      }
      render({ _n }) {
        return `${this.code};` + _n;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(names, constants) {
        this.code = optimizeExpr(this.code, names, constants);
        return this;
      }
      get names() {
        return this.code instanceof code_1._CodeOrName ? this.code.names : {};
      }
    };
    var ParentNode = class extends Node {
      constructor(nodes = []) {
        super();
        this.nodes = nodes;
      }
      render(opts) {
        return this.nodes.reduce((code, n4) => code + n4.render(opts), "");
      }
      optimizeNodes() {
        const { nodes } = this;
        let i2 = nodes.length;
        while (i2--) {
          const n4 = nodes[i2].optimizeNodes();
          if (Array.isArray(n4))
            nodes.splice(i2, 1, ...n4);
          else if (n4)
            nodes[i2] = n4;
          else
            nodes.splice(i2, 1);
        }
        return nodes.length > 0 ? this : void 0;
      }
      optimizeNames(names, constants) {
        const { nodes } = this;
        let i2 = nodes.length;
        while (i2--) {
          const n4 = nodes[i2];
          if (n4.optimizeNames(names, constants))
            continue;
          subtractNames(names, n4.names);
          nodes.splice(i2, 1);
        }
        return nodes.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((names, n4) => addNames(names, n4.names), {});
      }
    };
    var BlockNode = class extends ParentNode {
      render(opts) {
        return "{" + opts._n + super.render(opts) + "}" + opts._n;
      }
    };
    var Root = class extends ParentNode {
    };
    var Else = class extends BlockNode {
    };
    Else.kind = "else";
    var If = class _If extends BlockNode {
      constructor(condition, nodes) {
        super(nodes);
        this.condition = condition;
      }
      render(opts) {
        let code = `if(${this.condition})` + super.render(opts);
        if (this.else)
          code += "else " + this.else.render(opts);
        return code;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const cond = this.condition;
        if (cond === true)
          return this.nodes;
        let e = this.else;
        if (e) {
          const ns = e.optimizeNodes();
          e = this.else = Array.isArray(ns) ? new Else(ns) : ns;
        }
        if (e) {
          if (cond === false)
            return e instanceof _If ? e : e.nodes;
          if (this.nodes.length)
            return this;
          return new _If(not(cond), e instanceof _If ? [e] : e.nodes);
        }
        if (cond === false || !this.nodes.length)
          return void 0;
        return this;
      }
      optimizeNames(names, constants) {
        var _a;
        this.else = (_a = this.else) === null || _a === void 0 ? void 0 : _a.optimizeNames(names, constants);
        if (!(super.optimizeNames(names, constants) || this.else))
          return;
        this.condition = optimizeExpr(this.condition, names, constants);
        return this;
      }
      get names() {
        const names = super.names;
        addExprNames(names, this.condition);
        if (this.else)
          addNames(names, this.else.names);
        return names;
      }
    };
    If.kind = "if";
    var For = class extends BlockNode {
    };
    For.kind = "for";
    var ForLoop = class extends For {
      constructor(iteration) {
        super();
        this.iteration = iteration;
      }
      render(opts) {
        return `for(${this.iteration})` + super.render(opts);
      }
      optimizeNames(names, constants) {
        if (!super.optimizeNames(names, constants))
          return;
        this.iteration = optimizeExpr(this.iteration, names, constants);
        return this;
      }
      get names() {
        return addNames(super.names, this.iteration.names);
      }
    };
    var ForRange = class extends For {
      constructor(varKind, name, from, to) {
        super();
        this.varKind = varKind;
        this.name = name;
        this.from = from;
        this.to = to;
      }
      render(opts) {
        const varKind = opts.es5 ? scope_1.varKinds.var : this.varKind;
        const { name, from, to } = this;
        return `for(${varKind} ${name}=${from}; ${name}<${to}; ${name}++)` + super.render(opts);
      }
      get names() {
        const names = addExprNames(super.names, this.from);
        return addExprNames(names, this.to);
      }
    };
    var ForIter = class extends For {
      constructor(loop, varKind, name, iterable) {
        super();
        this.loop = loop;
        this.varKind = varKind;
        this.name = name;
        this.iterable = iterable;
      }
      render(opts) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(opts);
      }
      optimizeNames(names, constants) {
        if (!super.optimizeNames(names, constants))
          return;
        this.iterable = optimizeExpr(this.iterable, names, constants);
        return this;
      }
      get names() {
        return addNames(super.names, this.iterable.names);
      }
    };
    var Func = class extends BlockNode {
      constructor(name, args, async) {
        super();
        this.name = name;
        this.args = args;
        this.async = async;
      }
      render(opts) {
        const _async = this.async ? "async " : "";
        return `${_async}function ${this.name}(${this.args})` + super.render(opts);
      }
    };
    Func.kind = "func";
    var Return = class extends ParentNode {
      render(opts) {
        return "return " + super.render(opts);
      }
    };
    Return.kind = "return";
    var Try = class extends BlockNode {
      render(opts) {
        let code = "try" + super.render(opts);
        if (this.catch)
          code += this.catch.render(opts);
        if (this.finally)
          code += this.finally.render(opts);
        return code;
      }
      optimizeNodes() {
        var _a, _b;
        super.optimizeNodes();
        (_a = this.catch) === null || _a === void 0 ? void 0 : _a.optimizeNodes();
        (_b = this.finally) === null || _b === void 0 ? void 0 : _b.optimizeNodes();
        return this;
      }
      optimizeNames(names, constants) {
        var _a, _b;
        super.optimizeNames(names, constants);
        (_a = this.catch) === null || _a === void 0 ? void 0 : _a.optimizeNames(names, constants);
        (_b = this.finally) === null || _b === void 0 ? void 0 : _b.optimizeNames(names, constants);
        return this;
      }
      get names() {
        const names = super.names;
        if (this.catch)
          addNames(names, this.catch.names);
        if (this.finally)
          addNames(names, this.finally.names);
        return names;
      }
    };
    var Catch = class extends BlockNode {
      constructor(error) {
        super();
        this.error = error;
      }
      render(opts) {
        return `catch(${this.error})` + super.render(opts);
      }
    };
    Catch.kind = "catch";
    var Finally = class extends BlockNode {
      render(opts) {
        return "finally" + super.render(opts);
      }
    };
    Finally.kind = "finally";
    var CodeGen = class {
      constructor(extScope, opts = {}) {
        this._values = {};
        this._blockStarts = [];
        this._constants = {};
        this.opts = { ...opts, _n: opts.lines ? "\n" : "" };
        this._extScope = extScope;
        this._scope = new scope_1.Scope({ parent: extScope });
        this._nodes = [new Root()];
      }
      toString() {
        return this._root.render(this.opts);
      }
      // returns unique name in the internal scope
      name(prefix) {
        return this._scope.name(prefix);
      }
      // reserves unique name in the external scope
      scopeName(prefix) {
        return this._extScope.name(prefix);
      }
      // reserves unique name in the external scope and assigns value to it
      scopeValue(prefixOrName, value) {
        const name = this._extScope.value(prefixOrName, value);
        const vs = this._values[name.prefix] || (this._values[name.prefix] = /* @__PURE__ */ new Set());
        vs.add(name);
        return name;
      }
      getScopeValue(prefix, keyOrRef) {
        return this._extScope.getValue(prefix, keyOrRef);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(scopeName) {
        return this._extScope.scopeRefs(scopeName, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(varKind, nameOrPrefix, rhs, constant) {
        const name = this._scope.toName(nameOrPrefix);
        if (rhs !== void 0 && constant)
          this._constants[name.str] = rhs;
        this._leafNode(new Def(varKind, name, rhs));
        return name;
      }
      // `const` declaration (`var` in es5 mode)
      const(nameOrPrefix, rhs, _constant) {
        return this._def(scope_1.varKinds.const, nameOrPrefix, rhs, _constant);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(nameOrPrefix, rhs, _constant) {
        return this._def(scope_1.varKinds.let, nameOrPrefix, rhs, _constant);
      }
      // `var` declaration with optional assignment
      var(nameOrPrefix, rhs, _constant) {
        return this._def(scope_1.varKinds.var, nameOrPrefix, rhs, _constant);
      }
      // assignment code
      assign(lhs, rhs, sideEffects) {
        return this._leafNode(new Assign(lhs, rhs, sideEffects));
      }
      // `+=` code
      add(lhs, rhs) {
        return this._leafNode(new AssignOp(lhs, exports.operators.ADD, rhs));
      }
      // appends passed SafeExpr to code or executes Block
      code(c2) {
        if (typeof c2 == "function")
          c2();
        else if (c2 !== code_1.nil)
          this._leafNode(new AnyCode(c2));
        return this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...keyValues) {
        const code = ["{"];
        for (const [key, value] of keyValues) {
          if (code.length > 1)
            code.push(",");
          code.push(key);
          if (key !== value || this.opts.es5) {
            code.push(":");
            (0, code_1.addCodeArg)(code, value);
          }
        }
        code.push("}");
        return new code_1._Code(code);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(condition, thenBody, elseBody) {
        this._blockNode(new If(condition));
        if (thenBody && elseBody) {
          this.code(thenBody).else().code(elseBody).endIf();
        } else if (thenBody) {
          this.code(thenBody).endIf();
        } else if (elseBody) {
          throw new Error('CodeGen: "else" body without "then" body');
        }
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(condition) {
        return this._elseNode(new If(condition));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new Else());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(If, Else);
      }
      _for(node, forBody) {
        this._blockNode(node);
        if (forBody)
          this.code(forBody).endFor();
        return this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(iteration, forBody) {
        return this._for(new ForLoop(iteration), forBody);
      }
      // `for` statement for a range of values
      forRange(nameOrPrefix, from, to, forBody, varKind = this.opts.es5 ? scope_1.varKinds.var : scope_1.varKinds.let) {
        const name = this._scope.toName(nameOrPrefix);
        return this._for(new ForRange(varKind, name, from, to), () => forBody(name));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(nameOrPrefix, iterable, forBody, varKind = scope_1.varKinds.const) {
        const name = this._scope.toName(nameOrPrefix);
        if (this.opts.es5) {
          const arr = iterable instanceof code_1.Name ? iterable : this.var("_arr", iterable);
          return this.forRange("_i", 0, (0, code_1._)`${arr}.length`, (i2) => {
            this.var(name, (0, code_1._)`${arr}[${i2}]`);
            forBody(name);
          });
        }
        return this._for(new ForIter("of", varKind, name, iterable), () => forBody(name));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(nameOrPrefix, obj, forBody, varKind = this.opts.es5 ? scope_1.varKinds.var : scope_1.varKinds.const) {
        if (this.opts.ownProperties) {
          return this.forOf(nameOrPrefix, (0, code_1._)`Object.keys(${obj})`, forBody);
        }
        const name = this._scope.toName(nameOrPrefix);
        return this._for(new ForIter("in", varKind, name, obj), () => forBody(name));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(For);
      }
      // `label` statement
      label(label) {
        return this._leafNode(new Label(label));
      }
      // `break` statement
      break(label) {
        return this._leafNode(new Break(label));
      }
      // `return` statement
      return(value) {
        const node = new Return();
        this._blockNode(node);
        this.code(value);
        if (node.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(Return);
      }
      // `try` statement
      try(tryBody, catchCode, finallyCode) {
        if (!catchCode && !finallyCode)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const node = new Try();
        this._blockNode(node);
        this.code(tryBody);
        if (catchCode) {
          const error = this.name("e");
          this._currNode = node.catch = new Catch(error);
          catchCode(error);
        }
        if (finallyCode) {
          this._currNode = node.finally = new Finally();
          this.code(finallyCode);
        }
        return this._endBlockNode(Catch, Finally);
      }
      // `throw` statement
      throw(error) {
        return this._leafNode(new Throw(error));
      }
      // start self-balancing block
      block(body, nodeCount) {
        this._blockStarts.push(this._nodes.length);
        if (body)
          this.code(body).endBlock(nodeCount);
        return this;
      }
      // end the current self-balancing block
      endBlock(nodeCount) {
        const len = this._blockStarts.pop();
        if (len === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const toClose = this._nodes.length - len;
        if (toClose < 0 || nodeCount !== void 0 && toClose !== nodeCount) {
          throw new Error(`CodeGen: wrong number of nodes: ${toClose} vs ${nodeCount} expected`);
        }
        this._nodes.length = len;
        return this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(name, args = code_1.nil, async, funcBody) {
        this._blockNode(new Func(name, args, async));
        if (funcBody)
          this.code(funcBody).endFunc();
        return this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(Func);
      }
      optimize(n4 = 1) {
        while (n4-- > 0) {
          this._root.optimizeNodes();
          this._root.optimizeNames(this._root.names, this._constants);
        }
      }
      _leafNode(node) {
        this._currNode.nodes.push(node);
        return this;
      }
      _blockNode(node) {
        this._currNode.nodes.push(node);
        this._nodes.push(node);
      }
      _endBlockNode(N1, N2) {
        const n4 = this._currNode;
        if (n4 instanceof N1 || N2 && n4 instanceof N2) {
          this._nodes.pop();
          return this;
        }
        throw new Error(`CodeGen: not in block "${N2 ? `${N1.kind}/${N2.kind}` : N1.kind}"`);
      }
      _elseNode(node) {
        const n4 = this._currNode;
        if (!(n4 instanceof If)) {
          throw new Error('CodeGen: "else" without "if"');
        }
        this._currNode = n4.else = node;
        return this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const ns = this._nodes;
        return ns[ns.length - 1];
      }
      set _currNode(node) {
        const ns = this._nodes;
        ns[ns.length - 1] = node;
      }
    };
    exports.CodeGen = CodeGen;
    function addNames(names, from) {
      for (const n4 in from)
        names[n4] = (names[n4] || 0) + (from[n4] || 0);
      return names;
    }
    function addExprNames(names, from) {
      return from instanceof code_1._CodeOrName ? addNames(names, from.names) : names;
    }
    function optimizeExpr(expr, names, constants) {
      if (expr instanceof code_1.Name)
        return replaceName(expr);
      if (!canOptimize(expr))
        return expr;
      return new code_1._Code(expr._items.reduce((items, c2) => {
        if (c2 instanceof code_1.Name)
          c2 = replaceName(c2);
        if (c2 instanceof code_1._Code)
          items.push(...c2._items);
        else
          items.push(c2);
        return items;
      }, []));
      function replaceName(n4) {
        const c2 = constants[n4.str];
        if (c2 === void 0 || names[n4.str] !== 1)
          return n4;
        delete names[n4.str];
        return c2;
      }
      function canOptimize(e) {
        return e instanceof code_1._Code && e._items.some((c2) => c2 instanceof code_1.Name && names[c2.str] === 1 && constants[c2.str] !== void 0);
      }
    }
    function subtractNames(names, from) {
      for (const n4 in from)
        names[n4] = (names[n4] || 0) - (from[n4] || 0);
    }
    function not(x) {
      return typeof x == "boolean" || typeof x == "number" || x === null ? !x : (0, code_1._)`!${par(x)}`;
    }
    exports.not = not;
    var andCode = mappend(exports.operators.AND);
    function and(...args) {
      return args.reduce(andCode);
    }
    exports.and = and;
    var orCode = mappend(exports.operators.OR);
    function or(...args) {
      return args.reduce(orCode);
    }
    exports.or = or;
    function mappend(op) {
      return (x, y2) => x === code_1.nil ? y2 : y2 === code_1.nil ? x : (0, code_1._)`${par(x)} ${op} ${par(y2)}`;
    }
    function par(x) {
      return x instanceof code_1.Name ? x : (0, code_1._)`(${x})`;
    }
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/compile/util.js
var require_util = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/compile/util.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.checkStrictMode = exports.getErrorPath = exports.Type = exports.useFunc = exports.setEvaluated = exports.evaluatedPropsToName = exports.mergeEvaluated = exports.eachItem = exports.unescapeJsonPointer = exports.escapeJsonPointer = exports.escapeFragment = exports.unescapeFragment = exports.schemaRefOrVal = exports.schemaHasRulesButRef = exports.schemaHasRules = exports.checkUnknownRules = exports.alwaysValidSchema = exports.toHash = void 0;
    var codegen_1 = require_codegen();
    var code_1 = require_code();
    function toHash(arr) {
      const hash = {};
      for (const item of arr)
        hash[item] = true;
      return hash;
    }
    exports.toHash = toHash;
    function alwaysValidSchema(it, schema) {
      if (typeof schema == "boolean")
        return schema;
      if (Object.keys(schema).length === 0)
        return true;
      checkUnknownRules(it, schema);
      return !schemaHasRules(schema, it.self.RULES.all);
    }
    exports.alwaysValidSchema = alwaysValidSchema;
    function checkUnknownRules(it, schema = it.schema) {
      const { opts, self } = it;
      if (!opts.strictSchema)
        return;
      if (typeof schema === "boolean")
        return;
      const rules = self.RULES.keywords;
      for (const key in schema) {
        if (!rules[key])
          checkStrictMode(it, `unknown keyword: "${key}"`);
      }
    }
    exports.checkUnknownRules = checkUnknownRules;
    function schemaHasRules(schema, rules) {
      if (typeof schema == "boolean")
        return !schema;
      for (const key in schema)
        if (rules[key])
          return true;
      return false;
    }
    exports.schemaHasRules = schemaHasRules;
    function schemaHasRulesButRef(schema, RULES) {
      if (typeof schema == "boolean")
        return !schema;
      for (const key in schema)
        if (key !== "$ref" && RULES.all[key])
          return true;
      return false;
    }
    exports.schemaHasRulesButRef = schemaHasRulesButRef;
    function schemaRefOrVal({ topSchemaRef, schemaPath }, schema, keyword, $data) {
      if (!$data) {
        if (typeof schema == "number" || typeof schema == "boolean")
          return schema;
        if (typeof schema == "string")
          return (0, codegen_1._)`${schema}`;
      }
      return (0, codegen_1._)`${topSchemaRef}${schemaPath}${(0, codegen_1.getProperty)(keyword)}`;
    }
    exports.schemaRefOrVal = schemaRefOrVal;
    function unescapeFragment(str) {
      return unescapeJsonPointer2(decodeURIComponent(str));
    }
    exports.unescapeFragment = unescapeFragment;
    function escapeFragment(str) {
      return encodeURIComponent(escapeJsonPointer2(str));
    }
    exports.escapeFragment = escapeFragment;
    function escapeJsonPointer2(str) {
      if (typeof str == "number")
        return `${str}`;
      return str.replace(/~/g, "~0").replace(/\//g, "~1");
    }
    exports.escapeJsonPointer = escapeJsonPointer2;
    function unescapeJsonPointer2(str) {
      return str.replace(/~1/g, "/").replace(/~0/g, "~");
    }
    exports.unescapeJsonPointer = unescapeJsonPointer2;
    function eachItem(xs, f2) {
      if (Array.isArray(xs)) {
        for (const x of xs)
          f2(x);
      } else {
        f2(xs);
      }
    }
    exports.eachItem = eachItem;
    function makeMergeEvaluated({ mergeNames, mergeToName, mergeValues, resultToName }) {
      return (gen, from, to, toName) => {
        const res = to === void 0 ? from : to instanceof codegen_1.Name ? (from instanceof codegen_1.Name ? mergeNames(gen, from, to) : mergeToName(gen, from, to), to) : from instanceof codegen_1.Name ? (mergeToName(gen, to, from), from) : mergeValues(from, to);
        return toName === codegen_1.Name && !(res instanceof codegen_1.Name) ? resultToName(gen, res) : res;
      };
    }
    exports.mergeEvaluated = {
      props: makeMergeEvaluated({
        mergeNames: (gen, from, to) => gen.if((0, codegen_1._)`${to} !== true && ${from} !== undefined`, () => {
          gen.if((0, codegen_1._)`${from} === true`, () => gen.assign(to, true), () => gen.assign(to, (0, codegen_1._)`${to} || {}`).code((0, codegen_1._)`Object.assign(${to}, ${from})`));
        }),
        mergeToName: (gen, from, to) => gen.if((0, codegen_1._)`${to} !== true`, () => {
          if (from === true) {
            gen.assign(to, true);
          } else {
            gen.assign(to, (0, codegen_1._)`${to} || {}`);
            setEvaluated(gen, to, from);
          }
        }),
        mergeValues: (from, to) => from === true ? true : { ...from, ...to },
        resultToName: evaluatedPropsToName
      }),
      items: makeMergeEvaluated({
        mergeNames: (gen, from, to) => gen.if((0, codegen_1._)`${to} !== true && ${from} !== undefined`, () => gen.assign(to, (0, codegen_1._)`${from} === true ? true : ${to} > ${from} ? ${to} : ${from}`)),
        mergeToName: (gen, from, to) => gen.if((0, codegen_1._)`${to} !== true`, () => gen.assign(to, from === true ? true : (0, codegen_1._)`${to} > ${from} ? ${to} : ${from}`)),
        mergeValues: (from, to) => from === true ? true : Math.max(from, to),
        resultToName: (gen, items) => gen.var("items", items)
      })
    };
    function evaluatedPropsToName(gen, ps) {
      if (ps === true)
        return gen.var("props", true);
      const props = gen.var("props", (0, codegen_1._)`{}`);
      if (ps !== void 0)
        setEvaluated(gen, props, ps);
      return props;
    }
    exports.evaluatedPropsToName = evaluatedPropsToName;
    function setEvaluated(gen, props, ps) {
      Object.keys(ps).forEach((p2) => gen.assign((0, codegen_1._)`${props}${(0, codegen_1.getProperty)(p2)}`, true));
    }
    exports.setEvaluated = setEvaluated;
    var snippets = {};
    function useFunc(gen, f2) {
      return gen.scopeValue("func", {
        ref: f2,
        code: snippets[f2.code] || (snippets[f2.code] = new code_1._Code(f2.code))
      });
    }
    exports.useFunc = useFunc;
    var Type;
    (function(Type2) {
      Type2[Type2["Num"] = 0] = "Num";
      Type2[Type2["Str"] = 1] = "Str";
    })(Type || (exports.Type = Type = {}));
    function getErrorPath(dataProp, dataPropType, jsPropertySyntax) {
      if (dataProp instanceof codegen_1.Name) {
        const isNumber = dataPropType === Type.Num;
        return jsPropertySyntax ? isNumber ? (0, codegen_1._)`"[" + ${dataProp} + "]"` : (0, codegen_1._)`"['" + ${dataProp} + "']"` : isNumber ? (0, codegen_1._)`"/" + ${dataProp}` : (0, codegen_1._)`"/" + ${dataProp}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
      }
      return jsPropertySyntax ? (0, codegen_1.getProperty)(dataProp).toString() : "/" + escapeJsonPointer2(dataProp);
    }
    exports.getErrorPath = getErrorPath;
    function checkStrictMode(it, msg, mode = it.opts.strictSchema) {
      if (!mode)
        return;
      msg = `strict mode: ${msg}`;
      if (mode === true)
        throw new Error(msg);
      it.self.logger.warn(msg);
    }
    exports.checkStrictMode = checkStrictMode;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/compile/names.js
var require_names = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/compile/names.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var names = {
      // validation function arguments
      data: new codegen_1.Name("data"),
      // data passed to validation function
      // args passed from referencing schema
      valCxt: new codegen_1.Name("valCxt"),
      // validation/data context - should not be used directly, it is destructured to the names below
      instancePath: new codegen_1.Name("instancePath"),
      parentData: new codegen_1.Name("parentData"),
      parentDataProperty: new codegen_1.Name("parentDataProperty"),
      rootData: new codegen_1.Name("rootData"),
      // root data - same as the data passed to the first/top validation function
      dynamicAnchors: new codegen_1.Name("dynamicAnchors"),
      // used to support recursiveRef and dynamicRef
      // function scoped variables
      vErrors: new codegen_1.Name("vErrors"),
      // null or array of validation errors
      errors: new codegen_1.Name("errors"),
      // counter of validation errors
      this: new codegen_1.Name("this"),
      // "globals"
      self: new codegen_1.Name("self"),
      scope: new codegen_1.Name("scope"),
      // JTD serialize/parse name for JSON string and position
      json: new codegen_1.Name("json"),
      jsonPos: new codegen_1.Name("jsonPos"),
      jsonLen: new codegen_1.Name("jsonLen"),
      jsonPart: new codegen_1.Name("jsonPart")
    };
    exports.default = names;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/compile/errors.js
var require_errors = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/compile/errors.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.extendErrors = exports.resetErrorsCount = exports.reportExtraError = exports.reportError = exports.keyword$DataError = exports.keywordError = void 0;
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var names_1 = require_names();
    exports.keywordError = {
      message: ({ keyword }) => (0, codegen_1.str)`must pass "${keyword}" keyword validation`
    };
    exports.keyword$DataError = {
      message: ({ keyword, schemaType }) => schemaType ? (0, codegen_1.str)`"${keyword}" keyword must be ${schemaType} ($data)` : (0, codegen_1.str)`"${keyword}" keyword is invalid ($data)`
    };
    function reportError(cxt, error = exports.keywordError, errorPaths, overrideAllErrors) {
      const { it } = cxt;
      const { gen, compositeRule, allErrors } = it;
      const errObj = errorObjectCode(cxt, error, errorPaths);
      if (overrideAllErrors !== null && overrideAllErrors !== void 0 ? overrideAllErrors : compositeRule || allErrors) {
        addError(gen, errObj);
      } else {
        returnErrors(it, (0, codegen_1._)`[${errObj}]`);
      }
    }
    exports.reportError = reportError;
    function reportExtraError(cxt, error = exports.keywordError, errorPaths) {
      const { it } = cxt;
      const { gen, compositeRule, allErrors } = it;
      const errObj = errorObjectCode(cxt, error, errorPaths);
      addError(gen, errObj);
      if (!(compositeRule || allErrors)) {
        returnErrors(it, names_1.default.vErrors);
      }
    }
    exports.reportExtraError = reportExtraError;
    function resetErrorsCount(gen, errsCount) {
      gen.assign(names_1.default.errors, errsCount);
      gen.if((0, codegen_1._)`${names_1.default.vErrors} !== null`, () => gen.if(errsCount, () => gen.assign((0, codegen_1._)`${names_1.default.vErrors}.length`, errsCount), () => gen.assign(names_1.default.vErrors, null)));
    }
    exports.resetErrorsCount = resetErrorsCount;
    function extendErrors({ gen, keyword, schemaValue, data, errsCount, it }) {
      if (errsCount === void 0)
        throw new Error("ajv implementation error");
      const err = gen.name("err");
      gen.forRange("i", errsCount, names_1.default.errors, (i2) => {
        gen.const(err, (0, codegen_1._)`${names_1.default.vErrors}[${i2}]`);
        gen.if((0, codegen_1._)`${err}.instancePath === undefined`, () => gen.assign((0, codegen_1._)`${err}.instancePath`, (0, codegen_1.strConcat)(names_1.default.instancePath, it.errorPath)));
        gen.assign((0, codegen_1._)`${err}.schemaPath`, (0, codegen_1.str)`${it.errSchemaPath}/${keyword}`);
        if (it.opts.verbose) {
          gen.assign((0, codegen_1._)`${err}.schema`, schemaValue);
          gen.assign((0, codegen_1._)`${err}.data`, data);
        }
      });
    }
    exports.extendErrors = extendErrors;
    function addError(gen, errObj) {
      const err = gen.const("err", errObj);
      gen.if((0, codegen_1._)`${names_1.default.vErrors} === null`, () => gen.assign(names_1.default.vErrors, (0, codegen_1._)`[${err}]`), (0, codegen_1._)`${names_1.default.vErrors}.push(${err})`);
      gen.code((0, codegen_1._)`${names_1.default.errors}++`);
    }
    function returnErrors(it, errs) {
      const { gen, validateName, schemaEnv } = it;
      if (schemaEnv.$async) {
        gen.throw((0, codegen_1._)`new ${it.ValidationError}(${errs})`);
      } else {
        gen.assign((0, codegen_1._)`${validateName}.errors`, errs);
        gen.return(false);
      }
    }
    var E = {
      keyword: new codegen_1.Name("keyword"),
      schemaPath: new codegen_1.Name("schemaPath"),
      // also used in JTD errors
      params: new codegen_1.Name("params"),
      propertyName: new codegen_1.Name("propertyName"),
      message: new codegen_1.Name("message"),
      schema: new codegen_1.Name("schema"),
      parentSchema: new codegen_1.Name("parentSchema")
    };
    function errorObjectCode(cxt, error, errorPaths) {
      const { createErrors } = cxt.it;
      if (createErrors === false)
        return (0, codegen_1._)`{}`;
      return errorObject(cxt, error, errorPaths);
    }
    function errorObject(cxt, error, errorPaths = {}) {
      const { gen, it } = cxt;
      const keyValues = [
        errorInstancePath(it, errorPaths),
        errorSchemaPath(cxt, errorPaths)
      ];
      extraErrorProps(cxt, error, keyValues);
      return gen.object(...keyValues);
    }
    function errorInstancePath({ errorPath }, { instancePath }) {
      const instPath = instancePath ? (0, codegen_1.str)`${errorPath}${(0, util_1.getErrorPath)(instancePath, util_1.Type.Str)}` : errorPath;
      return [names_1.default.instancePath, (0, codegen_1.strConcat)(names_1.default.instancePath, instPath)];
    }
    function errorSchemaPath({ keyword, it: { errSchemaPath } }, { schemaPath, parentSchema }) {
      let schPath = parentSchema ? errSchemaPath : (0, codegen_1.str)`${errSchemaPath}/${keyword}`;
      if (schemaPath) {
        schPath = (0, codegen_1.str)`${schPath}${(0, util_1.getErrorPath)(schemaPath, util_1.Type.Str)}`;
      }
      return [E.schemaPath, schPath];
    }
    function extraErrorProps(cxt, { params, message }, keyValues) {
      const { keyword, data, schemaValue, it } = cxt;
      const { opts, propertyName, topSchemaRef, schemaPath } = it;
      keyValues.push([E.keyword, keyword], [E.params, typeof params == "function" ? params(cxt) : params || (0, codegen_1._)`{}`]);
      if (opts.messages) {
        keyValues.push([E.message, typeof message == "function" ? message(cxt) : message]);
      }
      if (opts.verbose) {
        keyValues.push([E.schema, schemaValue], [E.parentSchema, (0, codegen_1._)`${topSchemaRef}${schemaPath}`], [names_1.default.data, data]);
      }
      if (propertyName)
        keyValues.push([E.propertyName, propertyName]);
    }
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/compile/validate/boolSchema.js
var require_boolSchema = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/compile/validate/boolSchema.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.boolOrEmptySchema = exports.topBoolOrEmptySchema = void 0;
    var errors_1 = require_errors();
    var codegen_1 = require_codegen();
    var names_1 = require_names();
    var boolError = {
      message: "boolean schema is false"
    };
    function topBoolOrEmptySchema(it) {
      const { gen, schema, validateName } = it;
      if (schema === false) {
        falseSchemaError(it, false);
      } else if (typeof schema == "object" && schema.$async === true) {
        gen.return(names_1.default.data);
      } else {
        gen.assign((0, codegen_1._)`${validateName}.errors`, null);
        gen.return(true);
      }
    }
    exports.topBoolOrEmptySchema = topBoolOrEmptySchema;
    function boolOrEmptySchema(it, valid) {
      const { gen, schema } = it;
      if (schema === false) {
        gen.var(valid, false);
        falseSchemaError(it);
      } else {
        gen.var(valid, true);
      }
    }
    exports.boolOrEmptySchema = boolOrEmptySchema;
    function falseSchemaError(it, overrideAllErrors) {
      const { gen, data } = it;
      const cxt = {
        gen,
        keyword: "false schema",
        data,
        schema: false,
        schemaCode: false,
        schemaValue: false,
        params: {},
        it
      };
      (0, errors_1.reportError)(cxt, boolError, void 0, overrideAllErrors);
    }
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/compile/rules.js
var require_rules = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/compile/rules.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getRules = exports.isJSONType = void 0;
    var _jsonTypes = ["string", "number", "integer", "boolean", "null", "object", "array"];
    var jsonTypes = new Set(_jsonTypes);
    function isJSONType(x) {
      return typeof x == "string" && jsonTypes.has(x);
    }
    exports.isJSONType = isJSONType;
    function getRules() {
      const groups = {
        number: { type: "number", rules: [] },
        string: { type: "string", rules: [] },
        array: { type: "array", rules: [] },
        object: { type: "object", rules: [] }
      };
      return {
        types: { ...groups, integer: true, boolean: true, null: true },
        rules: [{ rules: [] }, groups.number, groups.string, groups.array, groups.object],
        post: { rules: [] },
        all: {},
        keywords: {}
      };
    }
    exports.getRules = getRules;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/compile/validate/applicability.js
var require_applicability = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/compile/validate/applicability.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.shouldUseRule = exports.shouldUseGroup = exports.schemaHasRulesForType = void 0;
    function schemaHasRulesForType({ schema, self }, type) {
      const group = self.RULES.types[type];
      return group && group !== true && shouldUseGroup(schema, group);
    }
    exports.schemaHasRulesForType = schemaHasRulesForType;
    function shouldUseGroup(schema, group) {
      return group.rules.some((rule) => shouldUseRule(schema, rule));
    }
    exports.shouldUseGroup = shouldUseGroup;
    function shouldUseRule(schema, rule) {
      var _a;
      return schema[rule.keyword] !== void 0 || ((_a = rule.definition.implements) === null || _a === void 0 ? void 0 : _a.some((kwd) => schema[kwd] !== void 0));
    }
    exports.shouldUseRule = shouldUseRule;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/compile/validate/dataType.js
var require_dataType = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/compile/validate/dataType.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.reportTypeError = exports.checkDataTypes = exports.checkDataType = exports.coerceAndCheckDataType = exports.getJSONTypes = exports.getSchemaTypes = exports.DataType = void 0;
    var rules_1 = require_rules();
    var applicability_1 = require_applicability();
    var errors_1 = require_errors();
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var DataType;
    (function(DataType2) {
      DataType2[DataType2["Correct"] = 0] = "Correct";
      DataType2[DataType2["Wrong"] = 1] = "Wrong";
    })(DataType || (exports.DataType = DataType = {}));
    function getSchemaTypes(schema) {
      const types = getJSONTypes(schema.type);
      const hasNull = types.includes("null");
      if (hasNull) {
        if (schema.nullable === false)
          throw new Error("type: null contradicts nullable: false");
      } else {
        if (!types.length && schema.nullable !== void 0) {
          throw new Error('"nullable" cannot be used without "type"');
        }
        if (schema.nullable === true)
          types.push("null");
      }
      return types;
    }
    exports.getSchemaTypes = getSchemaTypes;
    function getJSONTypes(ts) {
      const types = Array.isArray(ts) ? ts : ts ? [ts] : [];
      if (types.every(rules_1.isJSONType))
        return types;
      throw new Error("type must be JSONType or JSONType[]: " + types.join(","));
    }
    exports.getJSONTypes = getJSONTypes;
    function coerceAndCheckDataType(it, types) {
      const { gen, data, opts } = it;
      const coerceTo = coerceToTypes(types, opts.coerceTypes);
      const checkTypes = types.length > 0 && !(coerceTo.length === 0 && types.length === 1 && (0, applicability_1.schemaHasRulesForType)(it, types[0]));
      if (checkTypes) {
        const wrongType = checkDataTypes(types, data, opts.strictNumbers, DataType.Wrong);
        gen.if(wrongType, () => {
          if (coerceTo.length)
            coerceData(it, types, coerceTo);
          else
            reportTypeError(it);
        });
      }
      return checkTypes;
    }
    exports.coerceAndCheckDataType = coerceAndCheckDataType;
    var COERCIBLE = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
    function coerceToTypes(types, coerceTypes) {
      return coerceTypes ? types.filter((t2) => COERCIBLE.has(t2) || coerceTypes === "array" && t2 === "array") : [];
    }
    function coerceData(it, types, coerceTo) {
      const { gen, data, opts } = it;
      const dataType = gen.let("dataType", (0, codegen_1._)`typeof ${data}`);
      const coerced = gen.let("coerced", (0, codegen_1._)`undefined`);
      if (opts.coerceTypes === "array") {
        gen.if((0, codegen_1._)`${dataType} == 'object' && Array.isArray(${data}) && ${data}.length == 1`, () => gen.assign(data, (0, codegen_1._)`${data}[0]`).assign(dataType, (0, codegen_1._)`typeof ${data}`).if(checkDataTypes(types, data, opts.strictNumbers), () => gen.assign(coerced, data)));
      }
      gen.if((0, codegen_1._)`${coerced} !== undefined`);
      for (const t2 of coerceTo) {
        if (COERCIBLE.has(t2) || t2 === "array" && opts.coerceTypes === "array") {
          coerceSpecificType(t2);
        }
      }
      gen.else();
      reportTypeError(it);
      gen.endIf();
      gen.if((0, codegen_1._)`${coerced} !== undefined`, () => {
        gen.assign(data, coerced);
        assignParentData(it, coerced);
      });
      function coerceSpecificType(t2) {
        switch (t2) {
          case "string":
            gen.elseIf((0, codegen_1._)`${dataType} == "number" || ${dataType} == "boolean"`).assign(coerced, (0, codegen_1._)`"" + ${data}`).elseIf((0, codegen_1._)`${data} === null`).assign(coerced, (0, codegen_1._)`""`);
            return;
          case "number":
            gen.elseIf((0, codegen_1._)`${dataType} == "boolean" || ${data} === null
              || (${dataType} == "string" && ${data} && ${data} == +${data})`).assign(coerced, (0, codegen_1._)`+${data}`);
            return;
          case "integer":
            gen.elseIf((0, codegen_1._)`${dataType} === "boolean" || ${data} === null
              || (${dataType} === "string" && ${data} && ${data} == +${data} && !(${data} % 1))`).assign(coerced, (0, codegen_1._)`+${data}`);
            return;
          case "boolean":
            gen.elseIf((0, codegen_1._)`${data} === "false" || ${data} === 0 || ${data} === null`).assign(coerced, false).elseIf((0, codegen_1._)`${data} === "true" || ${data} === 1`).assign(coerced, true);
            return;
          case "null":
            gen.elseIf((0, codegen_1._)`${data} === "" || ${data} === 0 || ${data} === false`);
            gen.assign(coerced, null);
            return;
          case "array":
            gen.elseIf((0, codegen_1._)`${dataType} === "string" || ${dataType} === "number"
              || ${dataType} === "boolean" || ${data} === null`).assign(coerced, (0, codegen_1._)`[${data}]`);
        }
      }
    }
    function assignParentData({ gen, parentData, parentDataProperty }, expr) {
      gen.if((0, codegen_1._)`${parentData} !== undefined`, () => gen.assign((0, codegen_1._)`${parentData}[${parentDataProperty}]`, expr));
    }
    function checkDataType(dataType, data, strictNums, correct = DataType.Correct) {
      const EQ = correct === DataType.Correct ? codegen_1.operators.EQ : codegen_1.operators.NEQ;
      let cond;
      switch (dataType) {
        case "null":
          return (0, codegen_1._)`${data} ${EQ} null`;
        case "array":
          cond = (0, codegen_1._)`Array.isArray(${data})`;
          break;
        case "object":
          cond = (0, codegen_1._)`${data} && typeof ${data} == "object" && !Array.isArray(${data})`;
          break;
        case "integer":
          cond = numCond((0, codegen_1._)`!(${data} % 1) && !isNaN(${data})`);
          break;
        case "number":
          cond = numCond();
          break;
        default:
          return (0, codegen_1._)`typeof ${data} ${EQ} ${dataType}`;
      }
      return correct === DataType.Correct ? cond : (0, codegen_1.not)(cond);
      function numCond(_cond = codegen_1.nil) {
        return (0, codegen_1.and)((0, codegen_1._)`typeof ${data} == "number"`, _cond, strictNums ? (0, codegen_1._)`isFinite(${data})` : codegen_1.nil);
      }
    }
    exports.checkDataType = checkDataType;
    function checkDataTypes(dataTypes, data, strictNums, correct) {
      if (dataTypes.length === 1) {
        return checkDataType(dataTypes[0], data, strictNums, correct);
      }
      let cond;
      const types = (0, util_1.toHash)(dataTypes);
      if (types.array && types.object) {
        const notObj = (0, codegen_1._)`typeof ${data} != "object"`;
        cond = types.null ? notObj : (0, codegen_1._)`!${data} || ${notObj}`;
        delete types.null;
        delete types.array;
        delete types.object;
      } else {
        cond = codegen_1.nil;
      }
      if (types.number)
        delete types.integer;
      for (const t2 in types)
        cond = (0, codegen_1.and)(cond, checkDataType(t2, data, strictNums, correct));
      return cond;
    }
    exports.checkDataTypes = checkDataTypes;
    var typeError = {
      message: ({ schema }) => `must be ${schema}`,
      params: ({ schema, schemaValue }) => typeof schema == "string" ? (0, codegen_1._)`{type: ${schema}}` : (0, codegen_1._)`{type: ${schemaValue}}`
    };
    function reportTypeError(it) {
      const cxt = getTypeErrorContext(it);
      (0, errors_1.reportError)(cxt, typeError);
    }
    exports.reportTypeError = reportTypeError;
    function getTypeErrorContext(it) {
      const { gen, data, schema } = it;
      const schemaCode = (0, util_1.schemaRefOrVal)(it, schema, "type");
      return {
        gen,
        keyword: "type",
        data,
        schema: schema.type,
        schemaCode,
        schemaValue: schemaCode,
        parentSchema: schema,
        params: {},
        it
      };
    }
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/compile/validate/defaults.js
var require_defaults = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/compile/validate/defaults.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.assignDefaults = void 0;
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    function assignDefaults(it, ty) {
      const { properties, items } = it.schema;
      if (ty === "object" && properties) {
        for (const key in properties) {
          assignDefault(it, key, properties[key].default);
        }
      } else if (ty === "array" && Array.isArray(items)) {
        items.forEach((sch, i2) => assignDefault(it, i2, sch.default));
      }
    }
    exports.assignDefaults = assignDefaults;
    function assignDefault(it, prop, defaultValue) {
      const { gen, compositeRule, data, opts } = it;
      if (defaultValue === void 0)
        return;
      const childData = (0, codegen_1._)`${data}${(0, codegen_1.getProperty)(prop)}`;
      if (compositeRule) {
        (0, util_1.checkStrictMode)(it, `default is ignored for: ${childData}`);
        return;
      }
      let condition = (0, codegen_1._)`${childData} === undefined`;
      if (opts.useDefaults === "empty") {
        condition = (0, codegen_1._)`${condition} || ${childData} === null || ${childData} === ""`;
      }
      gen.if(condition, (0, codegen_1._)`${childData} = ${(0, codegen_1.stringify)(defaultValue)}`);
    }
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/code.js
var require_code2 = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/code.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.validateUnion = exports.validateArray = exports.usePattern = exports.callValidateCode = exports.schemaProperties = exports.allSchemaProperties = exports.noPropertyInData = exports.propertyInData = exports.isOwnProperty = exports.hasPropFunc = exports.reportMissingProp = exports.checkMissingProp = exports.checkReportMissingProp = void 0;
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var names_1 = require_names();
    var util_2 = require_util();
    function checkReportMissingProp(cxt, prop) {
      const { gen, data, it } = cxt;
      gen.if(noPropertyInData(gen, data, prop, it.opts.ownProperties), () => {
        cxt.setParams({ missingProperty: (0, codegen_1._)`${prop}` }, true);
        cxt.error();
      });
    }
    exports.checkReportMissingProp = checkReportMissingProp;
    function checkMissingProp({ gen, data, it: { opts } }, properties, missing) {
      return (0, codegen_1.or)(...properties.map((prop) => (0, codegen_1.and)(noPropertyInData(gen, data, prop, opts.ownProperties), (0, codegen_1._)`${missing} = ${prop}`)));
    }
    exports.checkMissingProp = checkMissingProp;
    function reportMissingProp(cxt, missing) {
      cxt.setParams({ missingProperty: missing }, true);
      cxt.error();
    }
    exports.reportMissingProp = reportMissingProp;
    function hasPropFunc(gen) {
      return gen.scopeValue("func", {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        ref: Object.prototype.hasOwnProperty,
        code: (0, codegen_1._)`Object.prototype.hasOwnProperty`
      });
    }
    exports.hasPropFunc = hasPropFunc;
    function isOwnProperty(gen, data, property) {
      return (0, codegen_1._)`${hasPropFunc(gen)}.call(${data}, ${property})`;
    }
    exports.isOwnProperty = isOwnProperty;
    function propertyInData(gen, data, property, ownProperties) {
      const cond = (0, codegen_1._)`${data}${(0, codegen_1.getProperty)(property)} !== undefined`;
      return ownProperties ? (0, codegen_1._)`${cond} && ${isOwnProperty(gen, data, property)}` : cond;
    }
    exports.propertyInData = propertyInData;
    function noPropertyInData(gen, data, property, ownProperties) {
      const cond = (0, codegen_1._)`${data}${(0, codegen_1.getProperty)(property)} === undefined`;
      return ownProperties ? (0, codegen_1.or)(cond, (0, codegen_1.not)(isOwnProperty(gen, data, property))) : cond;
    }
    exports.noPropertyInData = noPropertyInData;
    function allSchemaProperties(schemaMap) {
      return schemaMap ? Object.keys(schemaMap).filter((p2) => p2 !== "__proto__") : [];
    }
    exports.allSchemaProperties = allSchemaProperties;
    function schemaProperties(it, schemaMap) {
      return allSchemaProperties(schemaMap).filter((p2) => !(0, util_1.alwaysValidSchema)(it, schemaMap[p2]));
    }
    exports.schemaProperties = schemaProperties;
    function callValidateCode({ schemaCode, data, it: { gen, topSchemaRef, schemaPath, errorPath }, it }, func, context, passSchema) {
      const dataAndSchema = passSchema ? (0, codegen_1._)`${schemaCode}, ${data}, ${topSchemaRef}${schemaPath}` : data;
      const valCxt = [
        [names_1.default.instancePath, (0, codegen_1.strConcat)(names_1.default.instancePath, errorPath)],
        [names_1.default.parentData, it.parentData],
        [names_1.default.parentDataProperty, it.parentDataProperty],
        [names_1.default.rootData, names_1.default.rootData]
      ];
      if (it.opts.dynamicRef)
        valCxt.push([names_1.default.dynamicAnchors, names_1.default.dynamicAnchors]);
      const args = (0, codegen_1._)`${dataAndSchema}, ${gen.object(...valCxt)}`;
      return context !== codegen_1.nil ? (0, codegen_1._)`${func}.call(${context}, ${args})` : (0, codegen_1._)`${func}(${args})`;
    }
    exports.callValidateCode = callValidateCode;
    var newRegExp = (0, codegen_1._)`new RegExp`;
    function usePattern({ gen, it: { opts } }, pattern) {
      const u = opts.unicodeRegExp ? "u" : "";
      const { regExp } = opts.code;
      const rx = regExp(pattern, u);
      return gen.scopeValue("pattern", {
        key: rx.toString(),
        ref: rx,
        code: (0, codegen_1._)`${regExp.code === "new RegExp" ? newRegExp : (0, util_2.useFunc)(gen, regExp)}(${pattern}, ${u})`
      });
    }
    exports.usePattern = usePattern;
    function validateArray(cxt) {
      const { gen, data, keyword, it } = cxt;
      const valid = gen.name("valid");
      if (it.allErrors) {
        const validArr = gen.let("valid", true);
        validateItems(() => gen.assign(validArr, false));
        return validArr;
      }
      gen.var(valid, true);
      validateItems(() => gen.break());
      return valid;
      function validateItems(notValid) {
        const len = gen.const("len", (0, codegen_1._)`${data}.length`);
        gen.forRange("i", 0, len, (i2) => {
          cxt.subschema({
            keyword,
            dataProp: i2,
            dataPropType: util_1.Type.Num
          }, valid);
          gen.if((0, codegen_1.not)(valid), notValid);
        });
      }
    }
    exports.validateArray = validateArray;
    function validateUnion(cxt) {
      const { gen, schema, keyword, it } = cxt;
      if (!Array.isArray(schema))
        throw new Error("ajv implementation error");
      const alwaysValid = schema.some((sch) => (0, util_1.alwaysValidSchema)(it, sch));
      if (alwaysValid && !it.opts.unevaluated)
        return;
      const valid = gen.let("valid", false);
      const schValid = gen.name("_valid");
      gen.block(() => schema.forEach((_sch, i2) => {
        const schCxt = cxt.subschema({
          keyword,
          schemaProp: i2,
          compositeRule: true
        }, schValid);
        gen.assign(valid, (0, codegen_1._)`${valid} || ${schValid}`);
        const merged = cxt.mergeValidEvaluated(schCxt, schValid);
        if (!merged)
          gen.if((0, codegen_1.not)(valid));
      }));
      cxt.result(valid, () => cxt.reset(), () => cxt.error(true));
    }
    exports.validateUnion = validateUnion;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/compile/validate/keyword.js
var require_keyword = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/compile/validate/keyword.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.validateKeywordUsage = exports.validSchemaType = exports.funcKeywordCode = exports.macroKeywordCode = void 0;
    var codegen_1 = require_codegen();
    var names_1 = require_names();
    var code_1 = require_code2();
    var errors_1 = require_errors();
    function macroKeywordCode(cxt, def) {
      const { gen, keyword, schema, parentSchema, it } = cxt;
      const macroSchema = def.macro.call(it.self, schema, parentSchema, it);
      const schemaRef = useKeyword(gen, keyword, macroSchema);
      if (it.opts.validateSchema !== false)
        it.self.validateSchema(macroSchema, true);
      const valid = gen.name("valid");
      cxt.subschema({
        schema: macroSchema,
        schemaPath: codegen_1.nil,
        errSchemaPath: `${it.errSchemaPath}/${keyword}`,
        topSchemaRef: schemaRef,
        compositeRule: true
      }, valid);
      cxt.pass(valid, () => cxt.error(true));
    }
    exports.macroKeywordCode = macroKeywordCode;
    function funcKeywordCode(cxt, def) {
      var _a;
      const { gen, keyword, schema, parentSchema, $data, it } = cxt;
      checkAsyncKeyword(it, def);
      const validate2 = !$data && def.compile ? def.compile.call(it.self, schema, parentSchema, it) : def.validate;
      const validateRef = useKeyword(gen, keyword, validate2);
      const valid = gen.let("valid");
      cxt.block$data(valid, validateKeyword);
      cxt.ok((_a = def.valid) !== null && _a !== void 0 ? _a : valid);
      function validateKeyword() {
        if (def.errors === false) {
          assignValid();
          if (def.modifying)
            modifyData(cxt);
          reportErrs(() => cxt.error());
        } else {
          const ruleErrs = def.async ? validateAsync() : validateSync();
          if (def.modifying)
            modifyData(cxt);
          reportErrs(() => addErrs(cxt, ruleErrs));
        }
      }
      function validateAsync() {
        const ruleErrs = gen.let("ruleErrs", null);
        gen.try(() => assignValid((0, codegen_1._)`await `), (e) => gen.assign(valid, false).if((0, codegen_1._)`${e} instanceof ${it.ValidationError}`, () => gen.assign(ruleErrs, (0, codegen_1._)`${e}.errors`), () => gen.throw(e)));
        return ruleErrs;
      }
      function validateSync() {
        const validateErrs = (0, codegen_1._)`${validateRef}.errors`;
        gen.assign(validateErrs, null);
        assignValid(codegen_1.nil);
        return validateErrs;
      }
      function assignValid(_await = def.async ? (0, codegen_1._)`await ` : codegen_1.nil) {
        const passCxt = it.opts.passContext ? names_1.default.this : names_1.default.self;
        const passSchema = !("compile" in def && !$data || def.schema === false);
        gen.assign(valid, (0, codegen_1._)`${_await}${(0, code_1.callValidateCode)(cxt, validateRef, passCxt, passSchema)}`, def.modifying);
      }
      function reportErrs(errors) {
        var _a2;
        gen.if((0, codegen_1.not)((_a2 = def.valid) !== null && _a2 !== void 0 ? _a2 : valid), errors);
      }
    }
    exports.funcKeywordCode = funcKeywordCode;
    function modifyData(cxt) {
      const { gen, data, it } = cxt;
      gen.if(it.parentData, () => gen.assign(data, (0, codegen_1._)`${it.parentData}[${it.parentDataProperty}]`));
    }
    function addErrs(cxt, errs) {
      const { gen } = cxt;
      gen.if((0, codegen_1._)`Array.isArray(${errs})`, () => {
        gen.assign(names_1.default.vErrors, (0, codegen_1._)`${names_1.default.vErrors} === null ? ${errs} : ${names_1.default.vErrors}.concat(${errs})`).assign(names_1.default.errors, (0, codegen_1._)`${names_1.default.vErrors}.length`);
        (0, errors_1.extendErrors)(cxt);
      }, () => cxt.error());
    }
    function checkAsyncKeyword({ schemaEnv }, def) {
      if (def.async && !schemaEnv.$async)
        throw new Error("async keyword in sync schema");
    }
    function useKeyword(gen, keyword, result) {
      if (result === void 0)
        throw new Error(`keyword "${keyword}" failed to compile`);
      return gen.scopeValue("keyword", typeof result == "function" ? { ref: result } : { ref: result, code: (0, codegen_1.stringify)(result) });
    }
    function validSchemaType(schema, schemaType, allowUndefined = false) {
      return !schemaType.length || schemaType.some((st) => st === "array" ? Array.isArray(schema) : st === "object" ? schema && typeof schema == "object" && !Array.isArray(schema) : typeof schema == st || allowUndefined && typeof schema == "undefined");
    }
    exports.validSchemaType = validSchemaType;
    function validateKeywordUsage({ schema, opts, self, errSchemaPath }, def, keyword) {
      if (Array.isArray(def.keyword) ? !def.keyword.includes(keyword) : def.keyword !== keyword) {
        throw new Error("ajv implementation error");
      }
      const deps = def.dependencies;
      if (deps === null || deps === void 0 ? void 0 : deps.some((kwd) => !Object.prototype.hasOwnProperty.call(schema, kwd))) {
        throw new Error(`parent schema must have dependencies of ${keyword}: ${deps.join(",")}`);
      }
      if (def.validateSchema) {
        const valid = def.validateSchema(schema[keyword]);
        if (!valid) {
          const msg = `keyword "${keyword}" value is invalid at path "${errSchemaPath}": ` + self.errorsText(def.validateSchema.errors);
          if (opts.validateSchema === "log")
            self.logger.error(msg);
          else
            throw new Error(msg);
        }
      }
    }
    exports.validateKeywordUsage = validateKeywordUsage;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/compile/validate/subschema.js
var require_subschema = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/compile/validate/subschema.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.extendSubschemaMode = exports.extendSubschemaData = exports.getSubschema = void 0;
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    function getSubschema(it, { keyword, schemaProp, schema, schemaPath, errSchemaPath, topSchemaRef }) {
      if (keyword !== void 0 && schema !== void 0) {
        throw new Error('both "keyword" and "schema" passed, only one allowed');
      }
      if (keyword !== void 0) {
        const sch = it.schema[keyword];
        return schemaProp === void 0 ? {
          schema: sch,
          schemaPath: (0, codegen_1._)`${it.schemaPath}${(0, codegen_1.getProperty)(keyword)}`,
          errSchemaPath: `${it.errSchemaPath}/${keyword}`
        } : {
          schema: sch[schemaProp],
          schemaPath: (0, codegen_1._)`${it.schemaPath}${(0, codegen_1.getProperty)(keyword)}${(0, codegen_1.getProperty)(schemaProp)}`,
          errSchemaPath: `${it.errSchemaPath}/${keyword}/${(0, util_1.escapeFragment)(schemaProp)}`
        };
      }
      if (schema !== void 0) {
        if (schemaPath === void 0 || errSchemaPath === void 0 || topSchemaRef === void 0) {
          throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
        }
        return {
          schema,
          schemaPath,
          topSchemaRef,
          errSchemaPath
        };
      }
      throw new Error('either "keyword" or "schema" must be passed');
    }
    exports.getSubschema = getSubschema;
    function extendSubschemaData(subschema, it, { dataProp, dataPropType: dpType, data, dataTypes, propertyName }) {
      if (data !== void 0 && dataProp !== void 0) {
        throw new Error('both "data" and "dataProp" passed, only one allowed');
      }
      const { gen } = it;
      if (dataProp !== void 0) {
        const { errorPath, dataPathArr, opts } = it;
        const nextData = gen.let("data", (0, codegen_1._)`${it.data}${(0, codegen_1.getProperty)(dataProp)}`, true);
        dataContextProps(nextData);
        subschema.errorPath = (0, codegen_1.str)`${errorPath}${(0, util_1.getErrorPath)(dataProp, dpType, opts.jsPropertySyntax)}`;
        subschema.parentDataProperty = (0, codegen_1._)`${dataProp}`;
        subschema.dataPathArr = [...dataPathArr, subschema.parentDataProperty];
      }
      if (data !== void 0) {
        const nextData = data instanceof codegen_1.Name ? data : gen.let("data", data, true);
        dataContextProps(nextData);
        if (propertyName !== void 0)
          subschema.propertyName = propertyName;
      }
      if (dataTypes)
        subschema.dataTypes = dataTypes;
      function dataContextProps(_nextData) {
        subschema.data = _nextData;
        subschema.dataLevel = it.dataLevel + 1;
        subschema.dataTypes = [];
        it.definedProperties = /* @__PURE__ */ new Set();
        subschema.parentData = it.data;
        subschema.dataNames = [...it.dataNames, _nextData];
      }
    }
    exports.extendSubschemaData = extendSubschemaData;
    function extendSubschemaMode(subschema, { jtdDiscriminator, jtdMetadata, compositeRule, createErrors, allErrors }) {
      if (compositeRule !== void 0)
        subschema.compositeRule = compositeRule;
      if (createErrors !== void 0)
        subschema.createErrors = createErrors;
      if (allErrors !== void 0)
        subschema.allErrors = allErrors;
      subschema.jtdDiscriminator = jtdDiscriminator;
      subschema.jtdMetadata = jtdMetadata;
    }
    exports.extendSubschemaMode = extendSubschemaMode;
  }
});

// node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/index.js
var require_fast_deep_equal = __commonJS({
  "node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/index.js"(exports, module) {
    "use strict";
    module.exports = function equal(a3, b) {
      if (a3 === b) return true;
      if (a3 && b && typeof a3 == "object" && typeof b == "object") {
        if (a3.constructor !== b.constructor) return false;
        var length, i2, keys2;
        if (Array.isArray(a3)) {
          length = a3.length;
          if (length != b.length) return false;
          for (i2 = length; i2-- !== 0; )
            if (!equal(a3[i2], b[i2])) return false;
          return true;
        }
        if (a3.constructor === RegExp) return a3.source === b.source && a3.flags === b.flags;
        if (a3.valueOf !== Object.prototype.valueOf) return a3.valueOf() === b.valueOf();
        if (a3.toString !== Object.prototype.toString) return a3.toString() === b.toString();
        keys2 = Object.keys(a3);
        length = keys2.length;
        if (length !== Object.keys(b).length) return false;
        for (i2 = length; i2-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys2[i2])) return false;
        for (i2 = length; i2-- !== 0; ) {
          var key = keys2[i2];
          if (!equal(a3[key], b[key])) return false;
        }
        return true;
      }
      return a3 !== a3 && b !== b;
    };
  }
});

// node_modules/.pnpm/json-schema-traverse@1.0.0/node_modules/json-schema-traverse/index.js
var require_json_schema_traverse = __commonJS({
  "node_modules/.pnpm/json-schema-traverse@1.0.0/node_modules/json-schema-traverse/index.js"(exports, module) {
    "use strict";
    var traverse2 = module.exports = function(schema, opts, cb) {
      if (typeof opts == "function") {
        cb = opts;
        opts = {};
      }
      cb = opts.cb || cb;
      var pre = typeof cb == "function" ? cb : cb.pre || function() {
      };
      var post = cb.post || function() {
      };
      _traverse(opts, pre, post, schema, "", schema);
    };
    traverse2.keywords = {
      additionalItems: true,
      items: true,
      contains: true,
      additionalProperties: true,
      propertyNames: true,
      not: true,
      if: true,
      then: true,
      else: true
    };
    traverse2.arrayKeywords = {
      items: true,
      allOf: true,
      anyOf: true,
      oneOf: true
    };
    traverse2.propsKeywords = {
      $defs: true,
      definitions: true,
      properties: true,
      patternProperties: true,
      dependencies: true
    };
    traverse2.skipKeywords = {
      default: true,
      enum: true,
      const: true,
      required: true,
      maximum: true,
      minimum: true,
      exclusiveMaximum: true,
      exclusiveMinimum: true,
      multipleOf: true,
      maxLength: true,
      minLength: true,
      pattern: true,
      format: true,
      maxItems: true,
      minItems: true,
      uniqueItems: true,
      maxProperties: true,
      minProperties: true
    };
    function _traverse(opts, pre, post, schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex) {
      if (schema && typeof schema == "object" && !Array.isArray(schema)) {
        pre(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
        for (var key in schema) {
          var sch = schema[key];
          if (Array.isArray(sch)) {
            if (key in traverse2.arrayKeywords) {
              for (var i2 = 0; i2 < sch.length; i2++)
                _traverse(opts, pre, post, sch[i2], jsonPtr + "/" + key + "/" + i2, rootSchema, jsonPtr, key, schema, i2);
            }
          } else if (key in traverse2.propsKeywords) {
            if (sch && typeof sch == "object") {
              for (var prop in sch)
                _traverse(opts, pre, post, sch[prop], jsonPtr + "/" + key + "/" + escapeJsonPtr(prop), rootSchema, jsonPtr, key, schema, prop);
            }
          } else if (key in traverse2.keywords || opts.allKeys && !(key in traverse2.skipKeywords)) {
            _traverse(opts, pre, post, sch, jsonPtr + "/" + key, rootSchema, jsonPtr, key, schema);
          }
        }
        post(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
      }
    }
    function escapeJsonPtr(str) {
      return str.replace(/~/g, "~0").replace(/\//g, "~1");
    }
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/compile/resolve.js
var require_resolve = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/compile/resolve.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getSchemaRefs = exports.resolveUrl = exports.normalizeId = exports._getFullPath = exports.getFullPath = exports.inlineRef = void 0;
    var util_1 = require_util();
    var equal = require_fast_deep_equal();
    var traverse2 = require_json_schema_traverse();
    var SIMPLE_INLINED = /* @__PURE__ */ new Set([
      "type",
      "format",
      "pattern",
      "maxLength",
      "minLength",
      "maxProperties",
      "minProperties",
      "maxItems",
      "minItems",
      "maximum",
      "minimum",
      "uniqueItems",
      "multipleOf",
      "required",
      "enum",
      "const"
    ]);
    function inlineRef(schema, limit = true) {
      if (typeof schema == "boolean")
        return true;
      if (limit === true)
        return !hasRef(schema);
      if (!limit)
        return false;
      return countKeys(schema) <= limit;
    }
    exports.inlineRef = inlineRef;
    var REF_KEYWORDS = /* @__PURE__ */ new Set([
      "$ref",
      "$recursiveRef",
      "$recursiveAnchor",
      "$dynamicRef",
      "$dynamicAnchor"
    ]);
    function hasRef(schema) {
      for (const key in schema) {
        if (REF_KEYWORDS.has(key))
          return true;
        const sch = schema[key];
        if (Array.isArray(sch) && sch.some(hasRef))
          return true;
        if (typeof sch == "object" && hasRef(sch))
          return true;
      }
      return false;
    }
    function countKeys(schema) {
      let count = 0;
      for (const key in schema) {
        if (key === "$ref")
          return Infinity;
        count++;
        if (SIMPLE_INLINED.has(key))
          continue;
        if (typeof schema[key] == "object") {
          (0, util_1.eachItem)(schema[key], (sch) => count += countKeys(sch));
        }
        if (count === Infinity)
          return Infinity;
      }
      return count;
    }
    function getFullPath(resolver, id = "", normalize3) {
      if (normalize3 !== false)
        id = normalizeId(id);
      const p2 = resolver.parse(id);
      return _getFullPath(resolver, p2);
    }
    exports.getFullPath = getFullPath;
    function _getFullPath(resolver, p2) {
      const serialized = resolver.serialize(p2);
      return serialized.split("#")[0] + "#";
    }
    exports._getFullPath = _getFullPath;
    var TRAILING_SLASH_HASH = /#\/?$/;
    function normalizeId(id) {
      return id ? id.replace(TRAILING_SLASH_HASH, "") : "";
    }
    exports.normalizeId = normalizeId;
    function resolveUrl(resolver, baseId, id) {
      id = normalizeId(id);
      return resolver.resolve(baseId, id);
    }
    exports.resolveUrl = resolveUrl;
    var ANCHOR = /^[a-z_][-a-z0-9._]*$/i;
    function getSchemaRefs(schema, baseId) {
      if (typeof schema == "boolean")
        return {};
      const { schemaId, uriResolver } = this.opts;
      const schId = normalizeId(schema[schemaId] || baseId);
      const baseIds = { "": schId };
      const pathPrefix = getFullPath(uriResolver, schId, false);
      const localRefs = {};
      const schemaRefs = /* @__PURE__ */ new Set();
      traverse2(schema, { allKeys: true }, (sch, jsonPtr, _2, parentJsonPtr) => {
        if (parentJsonPtr === void 0)
          return;
        const fullPath = pathPrefix + jsonPtr;
        let innerBaseId = baseIds[parentJsonPtr];
        if (typeof sch[schemaId] == "string")
          innerBaseId = addRef.call(this, sch[schemaId]);
        addAnchor.call(this, sch.$anchor);
        addAnchor.call(this, sch.$dynamicAnchor);
        baseIds[jsonPtr] = innerBaseId;
        function addRef(ref2) {
          const _resolve = this.opts.uriResolver.resolve;
          ref2 = normalizeId(innerBaseId ? _resolve(innerBaseId, ref2) : ref2);
          if (schemaRefs.has(ref2))
            throw ambiguos(ref2);
          schemaRefs.add(ref2);
          let schOrRef = this.refs[ref2];
          if (typeof schOrRef == "string")
            schOrRef = this.refs[schOrRef];
          if (typeof schOrRef == "object") {
            checkAmbiguosRef(sch, schOrRef.schema, ref2);
          } else if (ref2 !== normalizeId(fullPath)) {
            if (ref2[0] === "#") {
              checkAmbiguosRef(sch, localRefs[ref2], ref2);
              localRefs[ref2] = sch;
            } else {
              this.refs[ref2] = fullPath;
            }
          }
          return ref2;
        }
        function addAnchor(anchor) {
          if (typeof anchor == "string") {
            if (!ANCHOR.test(anchor))
              throw new Error(`invalid anchor "${anchor}"`);
            addRef.call(this, `#${anchor}`);
          }
        }
      });
      return localRefs;
      function checkAmbiguosRef(sch1, sch2, ref2) {
        if (sch2 !== void 0 && !equal(sch1, sch2))
          throw ambiguos(ref2);
      }
      function ambiguos(ref2) {
        return new Error(`reference "${ref2}" resolves to more than one schema`);
      }
    }
    exports.getSchemaRefs = getSchemaRefs;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/compile/validate/index.js
var require_validate = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/compile/validate/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getData = exports.KeywordCxt = exports.validateFunctionCode = void 0;
    var boolSchema_1 = require_boolSchema();
    var dataType_1 = require_dataType();
    var applicability_1 = require_applicability();
    var dataType_2 = require_dataType();
    var defaults_1 = require_defaults();
    var keyword_1 = require_keyword();
    var subschema_1 = require_subschema();
    var codegen_1 = require_codegen();
    var names_1 = require_names();
    var resolve_1 = require_resolve();
    var util_1 = require_util();
    var errors_1 = require_errors();
    function validateFunctionCode(it) {
      if (isSchemaObj(it)) {
        checkKeywords(it);
        if (schemaCxtHasRules(it)) {
          topSchemaObjCode(it);
          return;
        }
      }
      validateFunction(it, () => (0, boolSchema_1.topBoolOrEmptySchema)(it));
    }
    exports.validateFunctionCode = validateFunctionCode;
    function validateFunction({ gen, validateName, schema, schemaEnv, opts }, body) {
      if (opts.code.es5) {
        gen.func(validateName, (0, codegen_1._)`${names_1.default.data}, ${names_1.default.valCxt}`, schemaEnv.$async, () => {
          gen.code((0, codegen_1._)`"use strict"; ${funcSourceUrl(schema, opts)}`);
          destructureValCxtES5(gen, opts);
          gen.code(body);
        });
      } else {
        gen.func(validateName, (0, codegen_1._)`${names_1.default.data}, ${destructureValCxt(opts)}`, schemaEnv.$async, () => gen.code(funcSourceUrl(schema, opts)).code(body));
      }
    }
    function destructureValCxt(opts) {
      return (0, codegen_1._)`{${names_1.default.instancePath}="", ${names_1.default.parentData}, ${names_1.default.parentDataProperty}, ${names_1.default.rootData}=${names_1.default.data}${opts.dynamicRef ? (0, codegen_1._)`, ${names_1.default.dynamicAnchors}={}` : codegen_1.nil}}={}`;
    }
    function destructureValCxtES5(gen, opts) {
      gen.if(names_1.default.valCxt, () => {
        gen.var(names_1.default.instancePath, (0, codegen_1._)`${names_1.default.valCxt}.${names_1.default.instancePath}`);
        gen.var(names_1.default.parentData, (0, codegen_1._)`${names_1.default.valCxt}.${names_1.default.parentData}`);
        gen.var(names_1.default.parentDataProperty, (0, codegen_1._)`${names_1.default.valCxt}.${names_1.default.parentDataProperty}`);
        gen.var(names_1.default.rootData, (0, codegen_1._)`${names_1.default.valCxt}.${names_1.default.rootData}`);
        if (opts.dynamicRef)
          gen.var(names_1.default.dynamicAnchors, (0, codegen_1._)`${names_1.default.valCxt}.${names_1.default.dynamicAnchors}`);
      }, () => {
        gen.var(names_1.default.instancePath, (0, codegen_1._)`""`);
        gen.var(names_1.default.parentData, (0, codegen_1._)`undefined`);
        gen.var(names_1.default.parentDataProperty, (0, codegen_1._)`undefined`);
        gen.var(names_1.default.rootData, names_1.default.data);
        if (opts.dynamicRef)
          gen.var(names_1.default.dynamicAnchors, (0, codegen_1._)`{}`);
      });
    }
    function topSchemaObjCode(it) {
      const { schema, opts, gen } = it;
      validateFunction(it, () => {
        if (opts.$comment && schema.$comment)
          commentKeyword(it);
        checkNoDefault(it);
        gen.let(names_1.default.vErrors, null);
        gen.let(names_1.default.errors, 0);
        if (opts.unevaluated)
          resetEvaluated(it);
        typeAndKeywords(it);
        returnResults(it);
      });
      return;
    }
    function resetEvaluated(it) {
      const { gen, validateName } = it;
      it.evaluated = gen.const("evaluated", (0, codegen_1._)`${validateName}.evaluated`);
      gen.if((0, codegen_1._)`${it.evaluated}.dynamicProps`, () => gen.assign((0, codegen_1._)`${it.evaluated}.props`, (0, codegen_1._)`undefined`));
      gen.if((0, codegen_1._)`${it.evaluated}.dynamicItems`, () => gen.assign((0, codegen_1._)`${it.evaluated}.items`, (0, codegen_1._)`undefined`));
    }
    function funcSourceUrl(schema, opts) {
      const schId = typeof schema == "object" && schema[opts.schemaId];
      return schId && (opts.code.source || opts.code.process) ? (0, codegen_1._)`/*# sourceURL=${schId} */` : codegen_1.nil;
    }
    function subschemaCode(it, valid) {
      if (isSchemaObj(it)) {
        checkKeywords(it);
        if (schemaCxtHasRules(it)) {
          subSchemaObjCode(it, valid);
          return;
        }
      }
      (0, boolSchema_1.boolOrEmptySchema)(it, valid);
    }
    function schemaCxtHasRules({ schema, self }) {
      if (typeof schema == "boolean")
        return !schema;
      for (const key in schema)
        if (self.RULES.all[key])
          return true;
      return false;
    }
    function isSchemaObj(it) {
      return typeof it.schema != "boolean";
    }
    function subSchemaObjCode(it, valid) {
      const { schema, gen, opts } = it;
      if (opts.$comment && schema.$comment)
        commentKeyword(it);
      updateContext(it);
      checkAsyncSchema(it);
      const errsCount = gen.const("_errs", names_1.default.errors);
      typeAndKeywords(it, errsCount);
      gen.var(valid, (0, codegen_1._)`${errsCount} === ${names_1.default.errors}`);
    }
    function checkKeywords(it) {
      (0, util_1.checkUnknownRules)(it);
      checkRefsAndKeywords(it);
    }
    function typeAndKeywords(it, errsCount) {
      if (it.opts.jtd)
        return schemaKeywords(it, [], false, errsCount);
      const types = (0, dataType_1.getSchemaTypes)(it.schema);
      const checkedTypes = (0, dataType_1.coerceAndCheckDataType)(it, types);
      schemaKeywords(it, types, !checkedTypes, errsCount);
    }
    function checkRefsAndKeywords(it) {
      const { schema, errSchemaPath, opts, self } = it;
      if (schema.$ref && opts.ignoreKeywordsWithRef && (0, util_1.schemaHasRulesButRef)(schema, self.RULES)) {
        self.logger.warn(`$ref: keywords ignored in schema at path "${errSchemaPath}"`);
      }
    }
    function checkNoDefault(it) {
      const { schema, opts } = it;
      if (schema.default !== void 0 && opts.useDefaults && opts.strictSchema) {
        (0, util_1.checkStrictMode)(it, "default is ignored in the schema root");
      }
    }
    function updateContext(it) {
      const schId = it.schema[it.opts.schemaId];
      if (schId)
        it.baseId = (0, resolve_1.resolveUrl)(it.opts.uriResolver, it.baseId, schId);
    }
    function checkAsyncSchema(it) {
      if (it.schema.$async && !it.schemaEnv.$async)
        throw new Error("async schema in sync schema");
    }
    function commentKeyword({ gen, schemaEnv, schema, errSchemaPath, opts }) {
      const msg = schema.$comment;
      if (opts.$comment === true) {
        gen.code((0, codegen_1._)`${names_1.default.self}.logger.log(${msg})`);
      } else if (typeof opts.$comment == "function") {
        const schemaPath = (0, codegen_1.str)`${errSchemaPath}/$comment`;
        const rootName = gen.scopeValue("root", { ref: schemaEnv.root });
        gen.code((0, codegen_1._)`${names_1.default.self}.opts.$comment(${msg}, ${schemaPath}, ${rootName}.schema)`);
      }
    }
    function returnResults(it) {
      const { gen, schemaEnv, validateName, ValidationError, opts } = it;
      if (schemaEnv.$async) {
        gen.if((0, codegen_1._)`${names_1.default.errors} === 0`, () => gen.return(names_1.default.data), () => gen.throw((0, codegen_1._)`new ${ValidationError}(${names_1.default.vErrors})`));
      } else {
        gen.assign((0, codegen_1._)`${validateName}.errors`, names_1.default.vErrors);
        if (opts.unevaluated)
          assignEvaluated(it);
        gen.return((0, codegen_1._)`${names_1.default.errors} === 0`);
      }
    }
    function assignEvaluated({ gen, evaluated, props, items }) {
      if (props instanceof codegen_1.Name)
        gen.assign((0, codegen_1._)`${evaluated}.props`, props);
      if (items instanceof codegen_1.Name)
        gen.assign((0, codegen_1._)`${evaluated}.items`, items);
    }
    function schemaKeywords(it, types, typeErrors, errsCount) {
      const { gen, schema, data, allErrors, opts, self } = it;
      const { RULES } = self;
      if (schema.$ref && (opts.ignoreKeywordsWithRef || !(0, util_1.schemaHasRulesButRef)(schema, RULES))) {
        gen.block(() => keywordCode(it, "$ref", RULES.all.$ref.definition));
        return;
      }
      if (!opts.jtd)
        checkStrictTypes(it, types);
      gen.block(() => {
        for (const group of RULES.rules)
          groupKeywords(group);
        groupKeywords(RULES.post);
      });
      function groupKeywords(group) {
        if (!(0, applicability_1.shouldUseGroup)(schema, group))
          return;
        if (group.type) {
          gen.if((0, dataType_2.checkDataType)(group.type, data, opts.strictNumbers));
          iterateKeywords(it, group);
          if (types.length === 1 && types[0] === group.type && typeErrors) {
            gen.else();
            (0, dataType_2.reportTypeError)(it);
          }
          gen.endIf();
        } else {
          iterateKeywords(it, group);
        }
        if (!allErrors)
          gen.if((0, codegen_1._)`${names_1.default.errors} === ${errsCount || 0}`);
      }
    }
    function iterateKeywords(it, group) {
      const { gen, schema, opts: { useDefaults } } = it;
      if (useDefaults)
        (0, defaults_1.assignDefaults)(it, group.type);
      gen.block(() => {
        for (const rule of group.rules) {
          if ((0, applicability_1.shouldUseRule)(schema, rule)) {
            keywordCode(it, rule.keyword, rule.definition, group.type);
          }
        }
      });
    }
    function checkStrictTypes(it, types) {
      if (it.schemaEnv.meta || !it.opts.strictTypes)
        return;
      checkContextTypes(it, types);
      if (!it.opts.allowUnionTypes)
        checkMultipleTypes(it, types);
      checkKeywordTypes(it, it.dataTypes);
    }
    function checkContextTypes(it, types) {
      if (!types.length)
        return;
      if (!it.dataTypes.length) {
        it.dataTypes = types;
        return;
      }
      types.forEach((t2) => {
        if (!includesType(it.dataTypes, t2)) {
          strictTypesError(it, `type "${t2}" not allowed by context "${it.dataTypes.join(",")}"`);
        }
      });
      narrowSchemaTypes(it, types);
    }
    function checkMultipleTypes(it, ts) {
      if (ts.length > 1 && !(ts.length === 2 && ts.includes("null"))) {
        strictTypesError(it, "use allowUnionTypes to allow union type keyword");
      }
    }
    function checkKeywordTypes(it, ts) {
      const rules = it.self.RULES.all;
      for (const keyword in rules) {
        const rule = rules[keyword];
        if (typeof rule == "object" && (0, applicability_1.shouldUseRule)(it.schema, rule)) {
          const { type } = rule.definition;
          if (type.length && !type.some((t2) => hasApplicableType(ts, t2))) {
            strictTypesError(it, `missing type "${type.join(",")}" for keyword "${keyword}"`);
          }
        }
      }
    }
    function hasApplicableType(schTs, kwdT) {
      return schTs.includes(kwdT) || kwdT === "number" && schTs.includes("integer");
    }
    function includesType(ts, t2) {
      return ts.includes(t2) || t2 === "integer" && ts.includes("number");
    }
    function narrowSchemaTypes(it, withTypes) {
      const ts = [];
      for (const t2 of it.dataTypes) {
        if (includesType(withTypes, t2))
          ts.push(t2);
        else if (withTypes.includes("integer") && t2 === "number")
          ts.push("integer");
      }
      it.dataTypes = ts;
    }
    function strictTypesError(it, msg) {
      const schemaPath = it.schemaEnv.baseId + it.errSchemaPath;
      msg += ` at "${schemaPath}" (strictTypes)`;
      (0, util_1.checkStrictMode)(it, msg, it.opts.strictTypes);
    }
    var KeywordCxt = class {
      constructor(it, def, keyword) {
        (0, keyword_1.validateKeywordUsage)(it, def, keyword);
        this.gen = it.gen;
        this.allErrors = it.allErrors;
        this.keyword = keyword;
        this.data = it.data;
        this.schema = it.schema[keyword];
        this.$data = def.$data && it.opts.$data && this.schema && this.schema.$data;
        this.schemaValue = (0, util_1.schemaRefOrVal)(it, this.schema, keyword, this.$data);
        this.schemaType = def.schemaType;
        this.parentSchema = it.schema;
        this.params = {};
        this.it = it;
        this.def = def;
        if (this.$data) {
          this.schemaCode = it.gen.const("vSchema", getData(this.$data, it));
        } else {
          this.schemaCode = this.schemaValue;
          if (!(0, keyword_1.validSchemaType)(this.schema, def.schemaType, def.allowUndefined)) {
            throw new Error(`${keyword} value must be ${JSON.stringify(def.schemaType)}`);
          }
        }
        if ("code" in def ? def.trackErrors : def.errors !== false) {
          this.errsCount = it.gen.const("_errs", names_1.default.errors);
        }
      }
      result(condition, successAction, failAction) {
        this.failResult((0, codegen_1.not)(condition), successAction, failAction);
      }
      failResult(condition, successAction, failAction) {
        this.gen.if(condition);
        if (failAction)
          failAction();
        else
          this.error();
        if (successAction) {
          this.gen.else();
          successAction();
          if (this.allErrors)
            this.gen.endIf();
        } else {
          if (this.allErrors)
            this.gen.endIf();
          else
            this.gen.else();
        }
      }
      pass(condition, failAction) {
        this.failResult((0, codegen_1.not)(condition), void 0, failAction);
      }
      fail(condition) {
        if (condition === void 0) {
          this.error();
          if (!this.allErrors)
            this.gen.if(false);
          return;
        }
        this.gen.if(condition);
        this.error();
        if (this.allErrors)
          this.gen.endIf();
        else
          this.gen.else();
      }
      fail$data(condition) {
        if (!this.$data)
          return this.fail(condition);
        const { schemaCode } = this;
        this.fail((0, codegen_1._)`${schemaCode} !== undefined && (${(0, codegen_1.or)(this.invalid$data(), condition)})`);
      }
      error(append, errorParams, errorPaths) {
        if (errorParams) {
          this.setParams(errorParams);
          this._error(append, errorPaths);
          this.setParams({});
          return;
        }
        this._error(append, errorPaths);
      }
      _error(append, errorPaths) {
        ;
        (append ? errors_1.reportExtraError : errors_1.reportError)(this, this.def.error, errorPaths);
      }
      $dataError() {
        (0, errors_1.reportError)(this, this.def.$dataError || errors_1.keyword$DataError);
      }
      reset() {
        if (this.errsCount === void 0)
          throw new Error('add "trackErrors" to keyword definition');
        (0, errors_1.resetErrorsCount)(this.gen, this.errsCount);
      }
      ok(cond) {
        if (!this.allErrors)
          this.gen.if(cond);
      }
      setParams(obj, assign) {
        if (assign)
          Object.assign(this.params, obj);
        else
          this.params = obj;
      }
      block$data(valid, codeBlock, $dataValid = codegen_1.nil) {
        this.gen.block(() => {
          this.check$data(valid, $dataValid);
          codeBlock();
        });
      }
      check$data(valid = codegen_1.nil, $dataValid = codegen_1.nil) {
        if (!this.$data)
          return;
        const { gen, schemaCode, schemaType, def } = this;
        gen.if((0, codegen_1.or)((0, codegen_1._)`${schemaCode} === undefined`, $dataValid));
        if (valid !== codegen_1.nil)
          gen.assign(valid, true);
        if (schemaType.length || def.validateSchema) {
          gen.elseIf(this.invalid$data());
          this.$dataError();
          if (valid !== codegen_1.nil)
            gen.assign(valid, false);
        }
        gen.else();
      }
      invalid$data() {
        const { gen, schemaCode, schemaType, def, it } = this;
        return (0, codegen_1.or)(wrong$DataType(), invalid$DataSchema());
        function wrong$DataType() {
          if (schemaType.length) {
            if (!(schemaCode instanceof codegen_1.Name))
              throw new Error("ajv implementation error");
            const st = Array.isArray(schemaType) ? schemaType : [schemaType];
            return (0, codegen_1._)`${(0, dataType_2.checkDataTypes)(st, schemaCode, it.opts.strictNumbers, dataType_2.DataType.Wrong)}`;
          }
          return codegen_1.nil;
        }
        function invalid$DataSchema() {
          if (def.validateSchema) {
            const validateSchemaRef = gen.scopeValue("validate$data", { ref: def.validateSchema });
            return (0, codegen_1._)`!${validateSchemaRef}(${schemaCode})`;
          }
          return codegen_1.nil;
        }
      }
      subschema(appl, valid) {
        const subschema = (0, subschema_1.getSubschema)(this.it, appl);
        (0, subschema_1.extendSubschemaData)(subschema, this.it, appl);
        (0, subschema_1.extendSubschemaMode)(subschema, appl);
        const nextContext = { ...this.it, ...subschema, items: void 0, props: void 0 };
        subschemaCode(nextContext, valid);
        return nextContext;
      }
      mergeEvaluated(schemaCxt, toName) {
        const { it, gen } = this;
        if (!it.opts.unevaluated)
          return;
        if (it.props !== true && schemaCxt.props !== void 0) {
          it.props = util_1.mergeEvaluated.props(gen, schemaCxt.props, it.props, toName);
        }
        if (it.items !== true && schemaCxt.items !== void 0) {
          it.items = util_1.mergeEvaluated.items(gen, schemaCxt.items, it.items, toName);
        }
      }
      mergeValidEvaluated(schemaCxt, valid) {
        const { it, gen } = this;
        if (it.opts.unevaluated && (it.props !== true || it.items !== true)) {
          gen.if(valid, () => this.mergeEvaluated(schemaCxt, codegen_1.Name));
          return true;
        }
      }
    };
    exports.KeywordCxt = KeywordCxt;
    function keywordCode(it, keyword, def, ruleType) {
      const cxt = new KeywordCxt(it, def, keyword);
      if ("code" in def) {
        def.code(cxt, ruleType);
      } else if (cxt.$data && def.validate) {
        (0, keyword_1.funcKeywordCode)(cxt, def);
      } else if ("macro" in def) {
        (0, keyword_1.macroKeywordCode)(cxt, def);
      } else if (def.compile || def.validate) {
        (0, keyword_1.funcKeywordCode)(cxt, def);
      }
    }
    var JSON_POINTER = /^\/(?:[^~]|~0|~1)*$/;
    var RELATIVE_JSON_POINTER = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
    function getData($data, { dataLevel, dataNames, dataPathArr }) {
      let jsonPointer;
      let data;
      if ($data === "")
        return names_1.default.rootData;
      if ($data[0] === "/") {
        if (!JSON_POINTER.test($data))
          throw new Error(`Invalid JSON-pointer: ${$data}`);
        jsonPointer = $data;
        data = names_1.default.rootData;
      } else {
        const matches = RELATIVE_JSON_POINTER.exec($data);
        if (!matches)
          throw new Error(`Invalid JSON-pointer: ${$data}`);
        const up = +matches[1];
        jsonPointer = matches[2];
        if (jsonPointer === "#") {
          if (up >= dataLevel)
            throw new Error(errorMsg("property/index", up));
          return dataPathArr[dataLevel - up];
        }
        if (up > dataLevel)
          throw new Error(errorMsg("data", up));
        data = dataNames[dataLevel - up];
        if (!jsonPointer)
          return data;
      }
      let expr = data;
      const segments = jsonPointer.split("/");
      for (const segment of segments) {
        if (segment) {
          data = (0, codegen_1._)`${data}${(0, codegen_1.getProperty)((0, util_1.unescapeJsonPointer)(segment))}`;
          expr = (0, codegen_1._)`${expr} && ${data}`;
        }
      }
      return expr;
      function errorMsg(pointerType, up) {
        return `Cannot access ${pointerType} ${up} levels up, current level is ${dataLevel}`;
      }
    }
    exports.getData = getData;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/runtime/validation_error.js
var require_validation_error = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/runtime/validation_error.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ValidationError = class extends Error {
      constructor(errors) {
        super("validation failed");
        this.errors = errors;
        this.ajv = this.validation = true;
      }
    };
    exports.default = ValidationError;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/compile/ref_error.js
var require_ref_error = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/compile/ref_error.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var resolve_1 = require_resolve();
    var MissingRefError = class extends Error {
      constructor(resolver, baseId, ref2, msg) {
        super(msg || `can't resolve reference ${ref2} from id ${baseId}`);
        this.missingRef = (0, resolve_1.resolveUrl)(resolver, baseId, ref2);
        this.missingSchema = (0, resolve_1.normalizeId)((0, resolve_1.getFullPath)(resolver, this.missingRef));
      }
    };
    exports.default = MissingRefError;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/compile/index.js
var require_compile = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/compile/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveSchema = exports.getCompilingSchema = exports.resolveRef = exports.compileSchema = exports.SchemaEnv = void 0;
    var codegen_1 = require_codegen();
    var validation_error_1 = require_validation_error();
    var names_1 = require_names();
    var resolve_1 = require_resolve();
    var util_1 = require_util();
    var validate_1 = require_validate();
    var SchemaEnv = class {
      constructor(env) {
        var _a;
        this.refs = {};
        this.dynamicAnchors = {};
        let schema;
        if (typeof env.schema == "object")
          schema = env.schema;
        this.schema = env.schema;
        this.schemaId = env.schemaId;
        this.root = env.root || this;
        this.baseId = (_a = env.baseId) !== null && _a !== void 0 ? _a : (0, resolve_1.normalizeId)(schema === null || schema === void 0 ? void 0 : schema[env.schemaId || "$id"]);
        this.schemaPath = env.schemaPath;
        this.localRefs = env.localRefs;
        this.meta = env.meta;
        this.$async = schema === null || schema === void 0 ? void 0 : schema.$async;
        this.refs = {};
      }
    };
    exports.SchemaEnv = SchemaEnv;
    function compileSchema(sch) {
      const _sch = getCompilingSchema.call(this, sch);
      if (_sch)
        return _sch;
      const rootId = (0, resolve_1.getFullPath)(this.opts.uriResolver, sch.root.baseId);
      const { es5, lines } = this.opts.code;
      const { ownProperties } = this.opts;
      const gen = new codegen_1.CodeGen(this.scope, { es5, lines, ownProperties });
      let _ValidationError;
      if (sch.$async) {
        _ValidationError = gen.scopeValue("Error", {
          ref: validation_error_1.default,
          code: (0, codegen_1._)`require("ajv/dist/runtime/validation_error").default`
        });
      }
      const validateName = gen.scopeName("validate");
      sch.validateName = validateName;
      const schemaCxt = {
        gen,
        allErrors: this.opts.allErrors,
        data: names_1.default.data,
        parentData: names_1.default.parentData,
        parentDataProperty: names_1.default.parentDataProperty,
        dataNames: [names_1.default.data],
        dataPathArr: [codegen_1.nil],
        // TODO can its length be used as dataLevel if nil is removed?
        dataLevel: 0,
        dataTypes: [],
        definedProperties: /* @__PURE__ */ new Set(),
        topSchemaRef: gen.scopeValue("schema", this.opts.code.source === true ? { ref: sch.schema, code: (0, codegen_1.stringify)(sch.schema) } : { ref: sch.schema }),
        validateName,
        ValidationError: _ValidationError,
        schema: sch.schema,
        schemaEnv: sch,
        rootId,
        baseId: sch.baseId || rootId,
        schemaPath: codegen_1.nil,
        errSchemaPath: sch.schemaPath || (this.opts.jtd ? "" : "#"),
        errorPath: (0, codegen_1._)`""`,
        opts: this.opts,
        self: this
      };
      let sourceCode;
      try {
        this._compilations.add(sch);
        (0, validate_1.validateFunctionCode)(schemaCxt);
        gen.optimize(this.opts.code.optimize);
        const validateCode = gen.toString();
        sourceCode = `${gen.scopeRefs(names_1.default.scope)}return ${validateCode}`;
        if (this.opts.code.process)
          sourceCode = this.opts.code.process(sourceCode, sch);
        const makeValidate = new Function(`${names_1.default.self}`, `${names_1.default.scope}`, sourceCode);
        const validate2 = makeValidate(this, this.scope.get());
        this.scope.value(validateName, { ref: validate2 });
        validate2.errors = null;
        validate2.schema = sch.schema;
        validate2.schemaEnv = sch;
        if (sch.$async)
          validate2.$async = true;
        if (this.opts.code.source === true) {
          validate2.source = { validateName, validateCode, scopeValues: gen._values };
        }
        if (this.opts.unevaluated) {
          const { props, items } = schemaCxt;
          validate2.evaluated = {
            props: props instanceof codegen_1.Name ? void 0 : props,
            items: items instanceof codegen_1.Name ? void 0 : items,
            dynamicProps: props instanceof codegen_1.Name,
            dynamicItems: items instanceof codegen_1.Name
          };
          if (validate2.source)
            validate2.source.evaluated = (0, codegen_1.stringify)(validate2.evaluated);
        }
        sch.validate = validate2;
        return sch;
      } catch (e) {
        delete sch.validate;
        delete sch.validateName;
        if (sourceCode)
          this.logger.error("Error compiling schema, function code:", sourceCode);
        throw e;
      } finally {
        this._compilations.delete(sch);
      }
    }
    exports.compileSchema = compileSchema;
    function resolveRef(root, baseId, ref2) {
      var _a;
      ref2 = (0, resolve_1.resolveUrl)(this.opts.uriResolver, baseId, ref2);
      const schOrFunc = root.refs[ref2];
      if (schOrFunc)
        return schOrFunc;
      let _sch = resolve2.call(this, root, ref2);
      if (_sch === void 0) {
        const schema = (_a = root.localRefs) === null || _a === void 0 ? void 0 : _a[ref2];
        const { schemaId } = this.opts;
        if (schema)
          _sch = new SchemaEnv({ schema, schemaId, root, baseId });
      }
      if (_sch === void 0)
        return;
      return root.refs[ref2] = inlineOrCompile.call(this, _sch);
    }
    exports.resolveRef = resolveRef;
    function inlineOrCompile(sch) {
      if ((0, resolve_1.inlineRef)(sch.schema, this.opts.inlineRefs))
        return sch.schema;
      return sch.validate ? sch : compileSchema.call(this, sch);
    }
    function getCompilingSchema(schEnv) {
      for (const sch of this._compilations) {
        if (sameSchemaEnv(sch, schEnv))
          return sch;
      }
    }
    exports.getCompilingSchema = getCompilingSchema;
    function sameSchemaEnv(s1, s22) {
      return s1.schema === s22.schema && s1.root === s22.root && s1.baseId === s22.baseId;
    }
    function resolve2(root, ref2) {
      let sch;
      while (typeof (sch = this.refs[ref2]) == "string")
        ref2 = sch;
      return sch || this.schemas[ref2] || resolveSchema.call(this, root, ref2);
    }
    function resolveSchema(root, ref2) {
      const p2 = this.opts.uriResolver.parse(ref2);
      const refPath = (0, resolve_1._getFullPath)(this.opts.uriResolver, p2);
      let baseId = (0, resolve_1.getFullPath)(this.opts.uriResolver, root.baseId, void 0);
      if (Object.keys(root.schema).length > 0 && refPath === baseId) {
        return getJsonPointer.call(this, p2, root);
      }
      const id = (0, resolve_1.normalizeId)(refPath);
      const schOrRef = this.refs[id] || this.schemas[id];
      if (typeof schOrRef == "string") {
        const sch = resolveSchema.call(this, root, schOrRef);
        if (typeof (sch === null || sch === void 0 ? void 0 : sch.schema) !== "object")
          return;
        return getJsonPointer.call(this, p2, sch);
      }
      if (typeof (schOrRef === null || schOrRef === void 0 ? void 0 : schOrRef.schema) !== "object")
        return;
      if (!schOrRef.validate)
        compileSchema.call(this, schOrRef);
      if (id === (0, resolve_1.normalizeId)(ref2)) {
        const { schema } = schOrRef;
        const { schemaId } = this.opts;
        const schId = schema[schemaId];
        if (schId)
          baseId = (0, resolve_1.resolveUrl)(this.opts.uriResolver, baseId, schId);
        return new SchemaEnv({ schema, schemaId, root, baseId });
      }
      return getJsonPointer.call(this, p2, schOrRef);
    }
    exports.resolveSchema = resolveSchema;
    var PREVENT_SCOPE_CHANGE = /* @__PURE__ */ new Set([
      "properties",
      "patternProperties",
      "enum",
      "dependencies",
      "definitions"
    ]);
    function getJsonPointer(parsedRef, { baseId, schema, root }) {
      var _a;
      if (((_a = parsedRef.fragment) === null || _a === void 0 ? void 0 : _a[0]) !== "/")
        return;
      for (const part of parsedRef.fragment.slice(1).split("/")) {
        if (typeof schema === "boolean")
          return;
        const partSchema = schema[(0, util_1.unescapeFragment)(part)];
        if (partSchema === void 0)
          return;
        schema = partSchema;
        const schId = typeof schema === "object" && schema[this.opts.schemaId];
        if (!PREVENT_SCOPE_CHANGE.has(part) && schId) {
          baseId = (0, resolve_1.resolveUrl)(this.opts.uriResolver, baseId, schId);
        }
      }
      let env;
      if (typeof schema != "boolean" && schema.$ref && !(0, util_1.schemaHasRulesButRef)(schema, this.RULES)) {
        const $ref = (0, resolve_1.resolveUrl)(this.opts.uriResolver, baseId, schema.$ref);
        env = resolveSchema.call(this, root, $ref);
      }
      const { schemaId } = this.opts;
      env = env || new SchemaEnv({ schema, schemaId, root, baseId });
      if (env.schema !== env.root.schema)
        return env;
      return void 0;
    }
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/refs/data.json
var require_data = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/refs/data.json"(exports, module) {
    module.exports = {
      $id: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",
      description: "Meta-schema for $data reference (JSON AnySchema extension proposal)",
      type: "object",
      required: ["$data"],
      properties: {
        $data: {
          type: "string",
          anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }]
        }
      },
      additionalProperties: false
    };
  }
});

// node_modules/.pnpm/fast-uri@3.0.6/node_modules/fast-uri/lib/scopedChars.js
var require_scopedChars = __commonJS({
  "node_modules/.pnpm/fast-uri@3.0.6/node_modules/fast-uri/lib/scopedChars.js"(exports, module) {
    "use strict";
    var HEX = {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      a: 10,
      A: 10,
      b: 11,
      B: 11,
      c: 12,
      C: 12,
      d: 13,
      D: 13,
      e: 14,
      E: 14,
      f: 15,
      F: 15
    };
    module.exports = {
      HEX
    };
  }
});

// node_modules/.pnpm/fast-uri@3.0.6/node_modules/fast-uri/lib/utils.js
var require_utils = __commonJS({
  "node_modules/.pnpm/fast-uri@3.0.6/node_modules/fast-uri/lib/utils.js"(exports, module) {
    "use strict";
    var { HEX } = require_scopedChars();
    var IPV4_REG = /^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u;
    function normalizeIPv4(host) {
      if (findToken(host, ".") < 3) {
        return { host, isIPV4: false };
      }
      const matches = host.match(IPV4_REG) || [];
      const [address] = matches;
      if (address) {
        return { host: stripLeadingZeros(address, "."), isIPV4: true };
      } else {
        return { host, isIPV4: false };
      }
    }
    function stringArrayToHexStripped(input, keepZero = false) {
      let acc = "";
      let strip = true;
      for (const c2 of input) {
        if (HEX[c2] === void 0) return void 0;
        if (c2 !== "0" && strip === true) strip = false;
        if (!strip) acc += c2;
      }
      if (keepZero && acc.length === 0) acc = "0";
      return acc;
    }
    function getIPV6(input) {
      let tokenCount = 0;
      const output = { error: false, address: "", zone: "" };
      const address = [];
      const buffer = [];
      let isZone = false;
      let endipv6Encountered = false;
      let endIpv6 = false;
      function consume() {
        if (buffer.length) {
          if (isZone === false) {
            const hex = stringArrayToHexStripped(buffer);
            if (hex !== void 0) {
              address.push(hex);
            } else {
              output.error = true;
              return false;
            }
          }
          buffer.length = 0;
        }
        return true;
      }
      for (let i2 = 0; i2 < input.length; i2++) {
        const cursor = input[i2];
        if (cursor === "[" || cursor === "]") {
          continue;
        }
        if (cursor === ":") {
          if (endipv6Encountered === true) {
            endIpv6 = true;
          }
          if (!consume()) {
            break;
          }
          tokenCount++;
          address.push(":");
          if (tokenCount > 7) {
            output.error = true;
            break;
          }
          if (i2 - 1 >= 0 && input[i2 - 1] === ":") {
            endipv6Encountered = true;
          }
          continue;
        } else if (cursor === "%") {
          if (!consume()) {
            break;
          }
          isZone = true;
        } else {
          buffer.push(cursor);
          continue;
        }
      }
      if (buffer.length) {
        if (isZone) {
          output.zone = buffer.join("");
        } else if (endIpv6) {
          address.push(buffer.join(""));
        } else {
          address.push(stringArrayToHexStripped(buffer));
        }
      }
      output.address = address.join("");
      return output;
    }
    function normalizeIPv6(host) {
      if (findToken(host, ":") < 2) {
        return { host, isIPV6: false };
      }
      const ipv6 = getIPV6(host);
      if (!ipv6.error) {
        let newHost = ipv6.address;
        let escapedHost = ipv6.address;
        if (ipv6.zone) {
          newHost += "%" + ipv6.zone;
          escapedHost += "%25" + ipv6.zone;
        }
        return { host: newHost, escapedHost, isIPV6: true };
      } else {
        return { host, isIPV6: false };
      }
    }
    function stripLeadingZeros(str, token) {
      let out = "";
      let skip = true;
      const l = str.length;
      for (let i2 = 0; i2 < l; i2++) {
        const c2 = str[i2];
        if (c2 === "0" && skip) {
          if (i2 + 1 <= l && str[i2 + 1] === token || i2 + 1 === l) {
            out += c2;
            skip = false;
          }
        } else {
          if (c2 === token) {
            skip = true;
          } else {
            skip = false;
          }
          out += c2;
        }
      }
      return out;
    }
    function findToken(str, token) {
      let ind = 0;
      for (let i2 = 0; i2 < str.length; i2++) {
        if (str[i2] === token) ind++;
      }
      return ind;
    }
    var RDS1 = /^\.\.?\//u;
    var RDS2 = /^\/\.(?:\/|$)/u;
    var RDS3 = /^\/\.\.(?:\/|$)/u;
    var RDS5 = /^\/?(?:.|\n)*?(?=\/|$)/u;
    function removeDotSegments(input) {
      const output = [];
      while (input.length) {
        if (input.match(RDS1)) {
          input = input.replace(RDS1, "");
        } else if (input.match(RDS2)) {
          input = input.replace(RDS2, "/");
        } else if (input.match(RDS3)) {
          input = input.replace(RDS3, "/");
          output.pop();
        } else if (input === "." || input === "..") {
          input = "";
        } else {
          const im = input.match(RDS5);
          if (im) {
            const s3 = im[0];
            input = input.slice(s3.length);
            output.push(s3);
          } else {
            throw new Error("Unexpected dot segment condition");
          }
        }
      }
      return output.join("");
    }
    function normalizeComponentEncoding(components, esc) {
      const func = esc !== true ? escape : unescape;
      if (components.scheme !== void 0) {
        components.scheme = func(components.scheme);
      }
      if (components.userinfo !== void 0) {
        components.userinfo = func(components.userinfo);
      }
      if (components.host !== void 0) {
        components.host = func(components.host);
      }
      if (components.path !== void 0) {
        components.path = func(components.path);
      }
      if (components.query !== void 0) {
        components.query = func(components.query);
      }
      if (components.fragment !== void 0) {
        components.fragment = func(components.fragment);
      }
      return components;
    }
    function recomposeAuthority(components) {
      const uriTokens = [];
      if (components.userinfo !== void 0) {
        uriTokens.push(components.userinfo);
        uriTokens.push("@");
      }
      if (components.host !== void 0) {
        let host = unescape(components.host);
        const ipV4res = normalizeIPv4(host);
        if (ipV4res.isIPV4) {
          host = ipV4res.host;
        } else {
          const ipV6res = normalizeIPv6(ipV4res.host);
          if (ipV6res.isIPV6 === true) {
            host = `[${ipV6res.escapedHost}]`;
          } else {
            host = components.host;
          }
        }
        uriTokens.push(host);
      }
      if (typeof components.port === "number" || typeof components.port === "string") {
        uriTokens.push(":");
        uriTokens.push(String(components.port));
      }
      return uriTokens.length ? uriTokens.join("") : void 0;
    }
    module.exports = {
      recomposeAuthority,
      normalizeComponentEncoding,
      removeDotSegments,
      normalizeIPv4,
      normalizeIPv6,
      stringArrayToHexStripped
    };
  }
});

// node_modules/.pnpm/fast-uri@3.0.6/node_modules/fast-uri/lib/schemes.js
var require_schemes = __commonJS({
  "node_modules/.pnpm/fast-uri@3.0.6/node_modules/fast-uri/lib/schemes.js"(exports, module) {
    "use strict";
    var UUID_REG = /^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu;
    var URN_REG = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu;
    function isSecure(wsComponents) {
      return typeof wsComponents.secure === "boolean" ? wsComponents.secure : String(wsComponents.scheme).toLowerCase() === "wss";
    }
    function httpParse(components) {
      if (!components.host) {
        components.error = components.error || "HTTP URIs must have a host.";
      }
      return components;
    }
    function httpSerialize(components) {
      const secure = String(components.scheme).toLowerCase() === "https";
      if (components.port === (secure ? 443 : 80) || components.port === "") {
        components.port = void 0;
      }
      if (!components.path) {
        components.path = "/";
      }
      return components;
    }
    function wsParse(wsComponents) {
      wsComponents.secure = isSecure(wsComponents);
      wsComponents.resourceName = (wsComponents.path || "/") + (wsComponents.query ? "?" + wsComponents.query : "");
      wsComponents.path = void 0;
      wsComponents.query = void 0;
      return wsComponents;
    }
    function wsSerialize(wsComponents) {
      if (wsComponents.port === (isSecure(wsComponents) ? 443 : 80) || wsComponents.port === "") {
        wsComponents.port = void 0;
      }
      if (typeof wsComponents.secure === "boolean") {
        wsComponents.scheme = wsComponents.secure ? "wss" : "ws";
        wsComponents.secure = void 0;
      }
      if (wsComponents.resourceName) {
        const [path, query] = wsComponents.resourceName.split("?");
        wsComponents.path = path && path !== "/" ? path : void 0;
        wsComponents.query = query;
        wsComponents.resourceName = void 0;
      }
      wsComponents.fragment = void 0;
      return wsComponents;
    }
    function urnParse(urnComponents, options) {
      if (!urnComponents.path) {
        urnComponents.error = "URN can not be parsed";
        return urnComponents;
      }
      const matches = urnComponents.path.match(URN_REG);
      if (matches) {
        const scheme = options.scheme || urnComponents.scheme || "urn";
        urnComponents.nid = matches[1].toLowerCase();
        urnComponents.nss = matches[2];
        const urnScheme = `${scheme}:${options.nid || urnComponents.nid}`;
        const schemeHandler = SCHEMES[urnScheme];
        urnComponents.path = void 0;
        if (schemeHandler) {
          urnComponents = schemeHandler.parse(urnComponents, options);
        }
      } else {
        urnComponents.error = urnComponents.error || "URN can not be parsed.";
      }
      return urnComponents;
    }
    function urnSerialize(urnComponents, options) {
      const scheme = options.scheme || urnComponents.scheme || "urn";
      const nid = urnComponents.nid.toLowerCase();
      const urnScheme = `${scheme}:${options.nid || nid}`;
      const schemeHandler = SCHEMES[urnScheme];
      if (schemeHandler) {
        urnComponents = schemeHandler.serialize(urnComponents, options);
      }
      const uriComponents = urnComponents;
      const nss = urnComponents.nss;
      uriComponents.path = `${nid || options.nid}:${nss}`;
      options.skipEscape = true;
      return uriComponents;
    }
    function urnuuidParse(urnComponents, options) {
      const uuidComponents = urnComponents;
      uuidComponents.uuid = uuidComponents.nss;
      uuidComponents.nss = void 0;
      if (!options.tolerant && (!uuidComponents.uuid || !UUID_REG.test(uuidComponents.uuid))) {
        uuidComponents.error = uuidComponents.error || "UUID is not valid.";
      }
      return uuidComponents;
    }
    function urnuuidSerialize(uuidComponents) {
      const urnComponents = uuidComponents;
      urnComponents.nss = (uuidComponents.uuid || "").toLowerCase();
      return urnComponents;
    }
    var http = {
      scheme: "http",
      domainHost: true,
      parse: httpParse,
      serialize: httpSerialize
    };
    var https = {
      scheme: "https",
      domainHost: http.domainHost,
      parse: httpParse,
      serialize: httpSerialize
    };
    var ws = {
      scheme: "ws",
      domainHost: true,
      parse: wsParse,
      serialize: wsSerialize
    };
    var wss = {
      scheme: "wss",
      domainHost: ws.domainHost,
      parse: ws.parse,
      serialize: ws.serialize
    };
    var urn = {
      scheme: "urn",
      parse: urnParse,
      serialize: urnSerialize,
      skipNormalize: true
    };
    var urnuuid = {
      scheme: "urn:uuid",
      parse: urnuuidParse,
      serialize: urnuuidSerialize,
      skipNormalize: true
    };
    var SCHEMES = {
      http,
      https,
      ws,
      wss,
      urn,
      "urn:uuid": urnuuid
    };
    module.exports = SCHEMES;
  }
});

// node_modules/.pnpm/fast-uri@3.0.6/node_modules/fast-uri/index.js
var require_fast_uri = __commonJS({
  "node_modules/.pnpm/fast-uri@3.0.6/node_modules/fast-uri/index.js"(exports, module) {
    "use strict";
    var { normalizeIPv6, normalizeIPv4, removeDotSegments, recomposeAuthority, normalizeComponentEncoding } = require_utils();
    var SCHEMES = require_schemes();
    function normalize3(uri, options) {
      if (typeof uri === "string") {
        uri = serialize(parse3(uri, options), options);
      } else if (typeof uri === "object") {
        uri = parse3(serialize(uri, options), options);
      }
      return uri;
    }
    function resolve2(baseURI, relativeURI, options) {
      const schemelessOptions = Object.assign({ scheme: "null" }, options);
      const resolved = resolveComponents(parse3(baseURI, schemelessOptions), parse3(relativeURI, schemelessOptions), schemelessOptions, true);
      return serialize(resolved, { ...schemelessOptions, skipEscape: true });
    }
    function resolveComponents(base, relative2, options, skipNormalization) {
      const target = {};
      if (!skipNormalization) {
        base = parse3(serialize(base, options), options);
        relative2 = parse3(serialize(relative2, options), options);
      }
      options = options || {};
      if (!options.tolerant && relative2.scheme) {
        target.scheme = relative2.scheme;
        target.userinfo = relative2.userinfo;
        target.host = relative2.host;
        target.port = relative2.port;
        target.path = removeDotSegments(relative2.path || "");
        target.query = relative2.query;
      } else {
        if (relative2.userinfo !== void 0 || relative2.host !== void 0 || relative2.port !== void 0) {
          target.userinfo = relative2.userinfo;
          target.host = relative2.host;
          target.port = relative2.port;
          target.path = removeDotSegments(relative2.path || "");
          target.query = relative2.query;
        } else {
          if (!relative2.path) {
            target.path = base.path;
            if (relative2.query !== void 0) {
              target.query = relative2.query;
            } else {
              target.query = base.query;
            }
          } else {
            if (relative2.path.charAt(0) === "/") {
              target.path = removeDotSegments(relative2.path);
            } else {
              if ((base.userinfo !== void 0 || base.host !== void 0 || base.port !== void 0) && !base.path) {
                target.path = "/" + relative2.path;
              } else if (!base.path) {
                target.path = relative2.path;
              } else {
                target.path = base.path.slice(0, base.path.lastIndexOf("/") + 1) + relative2.path;
              }
              target.path = removeDotSegments(target.path);
            }
            target.query = relative2.query;
          }
          target.userinfo = base.userinfo;
          target.host = base.host;
          target.port = base.port;
        }
        target.scheme = base.scheme;
      }
      target.fragment = relative2.fragment;
      return target;
    }
    function equal(uriA, uriB, options) {
      if (typeof uriA === "string") {
        uriA = unescape(uriA);
        uriA = serialize(normalizeComponentEncoding(parse3(uriA, options), true), { ...options, skipEscape: true });
      } else if (typeof uriA === "object") {
        uriA = serialize(normalizeComponentEncoding(uriA, true), { ...options, skipEscape: true });
      }
      if (typeof uriB === "string") {
        uriB = unescape(uriB);
        uriB = serialize(normalizeComponentEncoding(parse3(uriB, options), true), { ...options, skipEscape: true });
      } else if (typeof uriB === "object") {
        uriB = serialize(normalizeComponentEncoding(uriB, true), { ...options, skipEscape: true });
      }
      return uriA.toLowerCase() === uriB.toLowerCase();
    }
    function serialize(cmpts, opts) {
      const components = {
        host: cmpts.host,
        scheme: cmpts.scheme,
        userinfo: cmpts.userinfo,
        port: cmpts.port,
        path: cmpts.path,
        query: cmpts.query,
        nid: cmpts.nid,
        nss: cmpts.nss,
        uuid: cmpts.uuid,
        fragment: cmpts.fragment,
        reference: cmpts.reference,
        resourceName: cmpts.resourceName,
        secure: cmpts.secure,
        error: ""
      };
      const options = Object.assign({}, opts);
      const uriTokens = [];
      const schemeHandler = SCHEMES[(options.scheme || components.scheme || "").toLowerCase()];
      if (schemeHandler && schemeHandler.serialize) schemeHandler.serialize(components, options);
      if (components.path !== void 0) {
        if (!options.skipEscape) {
          components.path = escape(components.path);
          if (components.scheme !== void 0) {
            components.path = components.path.split("%3A").join(":");
          }
        } else {
          components.path = unescape(components.path);
        }
      }
      if (options.reference !== "suffix" && components.scheme) {
        uriTokens.push(components.scheme, ":");
      }
      const authority = recomposeAuthority(components);
      if (authority !== void 0) {
        if (options.reference !== "suffix") {
          uriTokens.push("//");
        }
        uriTokens.push(authority);
        if (components.path && components.path.charAt(0) !== "/") {
          uriTokens.push("/");
        }
      }
      if (components.path !== void 0) {
        let s3 = components.path;
        if (!options.absolutePath && (!schemeHandler || !schemeHandler.absolutePath)) {
          s3 = removeDotSegments(s3);
        }
        if (authority === void 0) {
          s3 = s3.replace(/^\/\//u, "/%2F");
        }
        uriTokens.push(s3);
      }
      if (components.query !== void 0) {
        uriTokens.push("?", components.query);
      }
      if (components.fragment !== void 0) {
        uriTokens.push("#", components.fragment);
      }
      return uriTokens.join("");
    }
    var hexLookUp = Array.from({ length: 127 }, (_v, k3) => /[^!"$&'()*+,\-.;=_`a-z{}~]/u.test(String.fromCharCode(k3)));
    function nonSimpleDomain(value) {
      let code = 0;
      for (let i2 = 0, len = value.length; i2 < len; ++i2) {
        code = value.charCodeAt(i2);
        if (code > 126 || hexLookUp[code]) {
          return true;
        }
      }
      return false;
    }
    var URI_PARSE = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
    function parse3(uri, opts) {
      const options = Object.assign({}, opts);
      const parsed = {
        scheme: void 0,
        userinfo: void 0,
        host: "",
        port: void 0,
        path: "",
        query: void 0,
        fragment: void 0
      };
      const gotEncoding = uri.indexOf("%") !== -1;
      let isIP = false;
      if (options.reference === "suffix") uri = (options.scheme ? options.scheme + ":" : "") + "//" + uri;
      const matches = uri.match(URI_PARSE);
      if (matches) {
        parsed.scheme = matches[1];
        parsed.userinfo = matches[3];
        parsed.host = matches[4];
        parsed.port = parseInt(matches[5], 10);
        parsed.path = matches[6] || "";
        parsed.query = matches[7];
        parsed.fragment = matches[8];
        if (isNaN(parsed.port)) {
          parsed.port = matches[5];
        }
        if (parsed.host) {
          const ipv4result = normalizeIPv4(parsed.host);
          if (ipv4result.isIPV4 === false) {
            const ipv6result = normalizeIPv6(ipv4result.host);
            parsed.host = ipv6result.host.toLowerCase();
            isIP = ipv6result.isIPV6;
          } else {
            parsed.host = ipv4result.host;
            isIP = true;
          }
        }
        if (parsed.scheme === void 0 && parsed.userinfo === void 0 && parsed.host === void 0 && parsed.port === void 0 && parsed.query === void 0 && !parsed.path) {
          parsed.reference = "same-document";
        } else if (parsed.scheme === void 0) {
          parsed.reference = "relative";
        } else if (parsed.fragment === void 0) {
          parsed.reference = "absolute";
        } else {
          parsed.reference = "uri";
        }
        if (options.reference && options.reference !== "suffix" && options.reference !== parsed.reference) {
          parsed.error = parsed.error || "URI is not a " + options.reference + " reference.";
        }
        const schemeHandler = SCHEMES[(options.scheme || parsed.scheme || "").toLowerCase()];
        if (!options.unicodeSupport && (!schemeHandler || !schemeHandler.unicodeSupport)) {
          if (parsed.host && (options.domainHost || schemeHandler && schemeHandler.domainHost) && isIP === false && nonSimpleDomain(parsed.host)) {
            try {
              parsed.host = URL.domainToASCII(parsed.host.toLowerCase());
            } catch (e) {
              parsed.error = parsed.error || "Host's domain name can not be converted to ASCII: " + e;
            }
          }
        }
        if (!schemeHandler || schemeHandler && !schemeHandler.skipNormalize) {
          if (gotEncoding && parsed.scheme !== void 0) {
            parsed.scheme = unescape(parsed.scheme);
          }
          if (gotEncoding && parsed.host !== void 0) {
            parsed.host = unescape(parsed.host);
          }
          if (parsed.path) {
            parsed.path = escape(unescape(parsed.path));
          }
          if (parsed.fragment) {
            parsed.fragment = encodeURI(decodeURIComponent(parsed.fragment));
          }
        }
        if (schemeHandler && schemeHandler.parse) {
          schemeHandler.parse(parsed, options);
        }
      } else {
        parsed.error = parsed.error || "URI can not be parsed.";
      }
      return parsed;
    }
    var fastUri = {
      SCHEMES,
      normalize: normalize3,
      resolve: resolve2,
      resolveComponents,
      equal,
      serialize,
      parse: parse3
    };
    module.exports = fastUri;
    module.exports.default = fastUri;
    module.exports.fastUri = fastUri;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/runtime/uri.js
var require_uri = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/runtime/uri.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var uri = require_fast_uri();
    uri.code = 'require("ajv/dist/runtime/uri").default';
    exports.default = uri;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/core.js
var require_core = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/core.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CodeGen = exports.Name = exports.nil = exports.stringify = exports.str = exports._ = exports.KeywordCxt = void 0;
    var validate_1 = require_validate();
    Object.defineProperty(exports, "KeywordCxt", { enumerable: true, get: function() {
      return validate_1.KeywordCxt;
    } });
    var codegen_1 = require_codegen();
    Object.defineProperty(exports, "_", { enumerable: true, get: function() {
      return codegen_1._;
    } });
    Object.defineProperty(exports, "str", { enumerable: true, get: function() {
      return codegen_1.str;
    } });
    Object.defineProperty(exports, "stringify", { enumerable: true, get: function() {
      return codegen_1.stringify;
    } });
    Object.defineProperty(exports, "nil", { enumerable: true, get: function() {
      return codegen_1.nil;
    } });
    Object.defineProperty(exports, "Name", { enumerable: true, get: function() {
      return codegen_1.Name;
    } });
    Object.defineProperty(exports, "CodeGen", { enumerable: true, get: function() {
      return codegen_1.CodeGen;
    } });
    var validation_error_1 = require_validation_error();
    var ref_error_1 = require_ref_error();
    var rules_1 = require_rules();
    var compile_1 = require_compile();
    var codegen_2 = require_codegen();
    var resolve_1 = require_resolve();
    var dataType_1 = require_dataType();
    var util_1 = require_util();
    var $dataRefSchema = require_data();
    var uri_1 = require_uri();
    var defaultRegExp = (str, flags) => new RegExp(str, flags);
    defaultRegExp.code = "new RegExp";
    var META_IGNORE_OPTIONS = ["removeAdditional", "useDefaults", "coerceTypes"];
    var EXT_SCOPE_NAMES = /* @__PURE__ */ new Set([
      "validate",
      "serialize",
      "parse",
      "wrapper",
      "root",
      "schema",
      "keyword",
      "pattern",
      "formats",
      "validate$data",
      "func",
      "obj",
      "Error"
    ]);
    var removedOptions = {
      errorDataPath: "",
      format: "`validateFormats: false` can be used instead.",
      nullable: '"nullable" keyword is supported by default.',
      jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
      extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
      missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
      processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
      sourceCode: "Use option `code: {source: true}`",
      strictDefaults: "It is default now, see option `strict`.",
      strictKeywords: "It is default now, see option `strict`.",
      uniqueItems: '"uniqueItems" keyword is always validated.',
      unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
      cache: "Map is used as cache, schema object as key.",
      serialize: "Map is used as cache, schema object as key.",
      ajvErrors: "It is default now."
    };
    var deprecatedOptions = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    };
    var MAX_EXPRESSION = 200;
    function requiredOptions(o2) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
      const s3 = o2.strict;
      const _optz = (_a = o2.code) === null || _a === void 0 ? void 0 : _a.optimize;
      const optimize = _optz === true || _optz === void 0 ? 1 : _optz || 0;
      const regExp = (_c = (_b = o2.code) === null || _b === void 0 ? void 0 : _b.regExp) !== null && _c !== void 0 ? _c : defaultRegExp;
      const uriResolver = (_d = o2.uriResolver) !== null && _d !== void 0 ? _d : uri_1.default;
      return {
        strictSchema: (_f = (_e = o2.strictSchema) !== null && _e !== void 0 ? _e : s3) !== null && _f !== void 0 ? _f : true,
        strictNumbers: (_h = (_g = o2.strictNumbers) !== null && _g !== void 0 ? _g : s3) !== null && _h !== void 0 ? _h : true,
        strictTypes: (_k = (_j = o2.strictTypes) !== null && _j !== void 0 ? _j : s3) !== null && _k !== void 0 ? _k : "log",
        strictTuples: (_m = (_l = o2.strictTuples) !== null && _l !== void 0 ? _l : s3) !== null && _m !== void 0 ? _m : "log",
        strictRequired: (_p = (_o = o2.strictRequired) !== null && _o !== void 0 ? _o : s3) !== null && _p !== void 0 ? _p : false,
        code: o2.code ? { ...o2.code, optimize, regExp } : { optimize, regExp },
        loopRequired: (_q = o2.loopRequired) !== null && _q !== void 0 ? _q : MAX_EXPRESSION,
        loopEnum: (_r = o2.loopEnum) !== null && _r !== void 0 ? _r : MAX_EXPRESSION,
        meta: (_s = o2.meta) !== null && _s !== void 0 ? _s : true,
        messages: (_t = o2.messages) !== null && _t !== void 0 ? _t : true,
        inlineRefs: (_u = o2.inlineRefs) !== null && _u !== void 0 ? _u : true,
        schemaId: (_v = o2.schemaId) !== null && _v !== void 0 ? _v : "$id",
        addUsedSchema: (_w = o2.addUsedSchema) !== null && _w !== void 0 ? _w : true,
        validateSchema: (_x = o2.validateSchema) !== null && _x !== void 0 ? _x : true,
        validateFormats: (_y = o2.validateFormats) !== null && _y !== void 0 ? _y : true,
        unicodeRegExp: (_z = o2.unicodeRegExp) !== null && _z !== void 0 ? _z : true,
        int32range: (_0 = o2.int32range) !== null && _0 !== void 0 ? _0 : true,
        uriResolver
      };
    }
    var Ajv = class {
      constructor(opts = {}) {
        this.schemas = {};
        this.refs = {};
        this.formats = {};
        this._compilations = /* @__PURE__ */ new Set();
        this._loading = {};
        this._cache = /* @__PURE__ */ new Map();
        opts = this.opts = { ...opts, ...requiredOptions(opts) };
        const { es5, lines } = this.opts.code;
        this.scope = new codegen_2.ValueScope({ scope: {}, prefixes: EXT_SCOPE_NAMES, es5, lines });
        this.logger = getLogger(opts.logger);
        const formatOpt = opts.validateFormats;
        opts.validateFormats = false;
        this.RULES = (0, rules_1.getRules)();
        checkOptions.call(this, removedOptions, opts, "NOT SUPPORTED");
        checkOptions.call(this, deprecatedOptions, opts, "DEPRECATED", "warn");
        this._metaOpts = getMetaSchemaOptions.call(this);
        if (opts.formats)
          addInitialFormats.call(this);
        this._addVocabularies();
        this._addDefaultMetaSchema();
        if (opts.keywords)
          addInitialKeywords.call(this, opts.keywords);
        if (typeof opts.meta == "object")
          this.addMetaSchema(opts.meta);
        addInitialSchemas.call(this);
        opts.validateFormats = formatOpt;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data, meta, schemaId } = this.opts;
        let _dataRefSchema = $dataRefSchema;
        if (schemaId === "id") {
          _dataRefSchema = { ...$dataRefSchema };
          _dataRefSchema.id = _dataRefSchema.$id;
          delete _dataRefSchema.$id;
        }
        if (meta && $data)
          this.addMetaSchema(_dataRefSchema, _dataRefSchema[schemaId], false);
      }
      defaultMeta() {
        const { meta, schemaId } = this.opts;
        return this.opts.defaultMeta = typeof meta == "object" ? meta[schemaId] || meta : void 0;
      }
      validate(schemaKeyRef, data) {
        let v2;
        if (typeof schemaKeyRef == "string") {
          v2 = this.getSchema(schemaKeyRef);
          if (!v2)
            throw new Error(`no schema with key or ref "${schemaKeyRef}"`);
        } else {
          v2 = this.compile(schemaKeyRef);
        }
        const valid = v2(data);
        if (!("$async" in v2))
          this.errors = v2.errors;
        return valid;
      }
      compile(schema, _meta) {
        const sch = this._addSchema(schema, _meta);
        return sch.validate || this._compileSchemaEnv(sch);
      }
      compileAsync(schema, meta) {
        if (typeof this.opts.loadSchema != "function") {
          throw new Error("options.loadSchema should be a function");
        }
        const { loadSchema } = this.opts;
        return runCompileAsync.call(this, schema, meta);
        async function runCompileAsync(_schema, _meta) {
          await loadMetaSchema.call(this, _schema.$schema);
          const sch = this._addSchema(_schema, _meta);
          return sch.validate || _compileAsync.call(this, sch);
        }
        async function loadMetaSchema($ref) {
          if ($ref && !this.getSchema($ref)) {
            await runCompileAsync.call(this, { $ref }, true);
          }
        }
        async function _compileAsync(sch) {
          try {
            return this._compileSchemaEnv(sch);
          } catch (e) {
            if (!(e instanceof ref_error_1.default))
              throw e;
            checkLoaded.call(this, e);
            await loadMissingSchema.call(this, e.missingSchema);
            return _compileAsync.call(this, sch);
          }
        }
        function checkLoaded({ missingSchema: ref2, missingRef }) {
          if (this.refs[ref2]) {
            throw new Error(`AnySchema ${ref2} is loaded but ${missingRef} cannot be resolved`);
          }
        }
        async function loadMissingSchema(ref2) {
          const _schema = await _loadSchema.call(this, ref2);
          if (!this.refs[ref2])
            await loadMetaSchema.call(this, _schema.$schema);
          if (!this.refs[ref2])
            this.addSchema(_schema, ref2, meta);
        }
        async function _loadSchema(ref2) {
          const p2 = this._loading[ref2];
          if (p2)
            return p2;
          try {
            return await (this._loading[ref2] = loadSchema(ref2));
          } finally {
            delete this._loading[ref2];
          }
        }
      }
      // Adds schema to the instance
      addSchema(schema, key, _meta, _validateSchema = this.opts.validateSchema) {
        if (Array.isArray(schema)) {
          for (const sch of schema)
            this.addSchema(sch, void 0, _meta, _validateSchema);
          return this;
        }
        let id;
        if (typeof schema === "object") {
          const { schemaId } = this.opts;
          id = schema[schemaId];
          if (id !== void 0 && typeof id != "string") {
            throw new Error(`schema ${schemaId} must be string`);
          }
        }
        key = (0, resolve_1.normalizeId)(key || id);
        this._checkUnique(key);
        this.schemas[key] = this._addSchema(schema, _meta, key, _validateSchema, true);
        return this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(schema, key, _validateSchema = this.opts.validateSchema) {
        this.addSchema(schema, key, true, _validateSchema);
        return this;
      }
      //  Validate schema against its meta-schema
      validateSchema(schema, throwOrLogError) {
        if (typeof schema == "boolean")
          return true;
        let $schema;
        $schema = schema.$schema;
        if ($schema !== void 0 && typeof $schema != "string") {
          throw new Error("$schema must be a string");
        }
        $schema = $schema || this.opts.defaultMeta || this.defaultMeta();
        if (!$schema) {
          this.logger.warn("meta-schema not available");
          this.errors = null;
          return true;
        }
        const valid = this.validate($schema, schema);
        if (!valid && throwOrLogError) {
          const message = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(message);
          else
            throw new Error(message);
        }
        return valid;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(keyRef) {
        let sch;
        while (typeof (sch = getSchEnv.call(this, keyRef)) == "string")
          keyRef = sch;
        if (sch === void 0) {
          const { schemaId } = this.opts;
          const root = new compile_1.SchemaEnv({ schema: {}, schemaId });
          sch = compile_1.resolveSchema.call(this, root, keyRef);
          if (!sch)
            return;
          this.refs[keyRef] = sch;
        }
        return sch.validate || this._compileSchemaEnv(sch);
      }
      // Remove cached schema(s).
      // If no parameter is passed all schemas but meta-schemas are removed.
      // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
      // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
      removeSchema(schemaKeyRef) {
        if (schemaKeyRef instanceof RegExp) {
          this._removeAllSchemas(this.schemas, schemaKeyRef);
          this._removeAllSchemas(this.refs, schemaKeyRef);
          return this;
        }
        switch (typeof schemaKeyRef) {
          case "undefined":
            this._removeAllSchemas(this.schemas);
            this._removeAllSchemas(this.refs);
            this._cache.clear();
            return this;
          case "string": {
            const sch = getSchEnv.call(this, schemaKeyRef);
            if (typeof sch == "object")
              this._cache.delete(sch.schema);
            delete this.schemas[schemaKeyRef];
            delete this.refs[schemaKeyRef];
            return this;
          }
          case "object": {
            const cacheKey = schemaKeyRef;
            this._cache.delete(cacheKey);
            let id = schemaKeyRef[this.opts.schemaId];
            if (id) {
              id = (0, resolve_1.normalizeId)(id);
              delete this.schemas[id];
              delete this.refs[id];
            }
            return this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(definitions) {
        for (const def of definitions)
          this.addKeyword(def);
        return this;
      }
      addKeyword(kwdOrDef, def) {
        let keyword;
        if (typeof kwdOrDef == "string") {
          keyword = kwdOrDef;
          if (typeof def == "object") {
            this.logger.warn("these parameters are deprecated, see docs for addKeyword");
            def.keyword = keyword;
          }
        } else if (typeof kwdOrDef == "object" && def === void 0) {
          def = kwdOrDef;
          keyword = def.keyword;
          if (Array.isArray(keyword) && !keyword.length) {
            throw new Error("addKeywords: keyword must be string or non-empty array");
          }
        } else {
          throw new Error("invalid addKeywords parameters");
        }
        checkKeyword.call(this, keyword, def);
        if (!def) {
          (0, util_1.eachItem)(keyword, (kwd) => addRule.call(this, kwd));
          return this;
        }
        keywordMetaschema.call(this, def);
        const definition = {
          ...def,
          type: (0, dataType_1.getJSONTypes)(def.type),
          schemaType: (0, dataType_1.getJSONTypes)(def.schemaType)
        };
        (0, util_1.eachItem)(keyword, definition.type.length === 0 ? (k3) => addRule.call(this, k3, definition) : (k3) => definition.type.forEach((t2) => addRule.call(this, k3, definition, t2)));
        return this;
      }
      getKeyword(keyword) {
        const rule = this.RULES.all[keyword];
        return typeof rule == "object" ? rule.definition : !!rule;
      }
      // Remove keyword
      removeKeyword(keyword) {
        const { RULES } = this;
        delete RULES.keywords[keyword];
        delete RULES.all[keyword];
        for (const group of RULES.rules) {
          const i2 = group.rules.findIndex((rule) => rule.keyword === keyword);
          if (i2 >= 0)
            group.rules.splice(i2, 1);
        }
        return this;
      }
      // Add format
      addFormat(name, format) {
        if (typeof format == "string")
          format = new RegExp(format);
        this.formats[name] = format;
        return this;
      }
      errorsText(errors = this.errors, { separator = ", ", dataVar = "data" } = {}) {
        if (!errors || errors.length === 0)
          return "No errors";
        return errors.map((e) => `${dataVar}${e.instancePath} ${e.message}`).reduce((text, msg) => text + separator + msg);
      }
      $dataMetaSchema(metaSchema, keywordsJsonPointers) {
        const rules = this.RULES.all;
        metaSchema = JSON.parse(JSON.stringify(metaSchema));
        for (const jsonPointer of keywordsJsonPointers) {
          const segments = jsonPointer.split("/").slice(1);
          let keywords = metaSchema;
          for (const seg of segments)
            keywords = keywords[seg];
          for (const key in rules) {
            const rule = rules[key];
            if (typeof rule != "object")
              continue;
            const { $data } = rule.definition;
            const schema = keywords[key];
            if ($data && schema)
              keywords[key] = schemaOrData(schema);
          }
        }
        return metaSchema;
      }
      _removeAllSchemas(schemas, regex) {
        for (const keyRef in schemas) {
          const sch = schemas[keyRef];
          if (!regex || regex.test(keyRef)) {
            if (typeof sch == "string") {
              delete schemas[keyRef];
            } else if (sch && !sch.meta) {
              this._cache.delete(sch.schema);
              delete schemas[keyRef];
            }
          }
        }
      }
      _addSchema(schema, meta, baseId, validateSchema = this.opts.validateSchema, addSchema = this.opts.addUsedSchema) {
        let id;
        const { schemaId } = this.opts;
        if (typeof schema == "object") {
          id = schema[schemaId];
        } else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          else if (typeof schema != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let sch = this._cache.get(schema);
        if (sch !== void 0)
          return sch;
        baseId = (0, resolve_1.normalizeId)(id || baseId);
        const localRefs = resolve_1.getSchemaRefs.call(this, schema, baseId);
        sch = new compile_1.SchemaEnv({ schema, schemaId, meta, baseId, localRefs });
        this._cache.set(sch.schema, sch);
        if (addSchema && !baseId.startsWith("#")) {
          if (baseId)
            this._checkUnique(baseId);
          this.refs[baseId] = sch;
        }
        if (validateSchema)
          this.validateSchema(schema, true);
        return sch;
      }
      _checkUnique(id) {
        if (this.schemas[id] || this.refs[id]) {
          throw new Error(`schema with key or id "${id}" already exists`);
        }
      }
      _compileSchemaEnv(sch) {
        if (sch.meta)
          this._compileMetaSchema(sch);
        else
          compile_1.compileSchema.call(this, sch);
        if (!sch.validate)
          throw new Error("ajv implementation error");
        return sch.validate;
      }
      _compileMetaSchema(sch) {
        const currentOpts = this.opts;
        this.opts = this._metaOpts;
        try {
          compile_1.compileSchema.call(this, sch);
        } finally {
          this.opts = currentOpts;
        }
      }
    };
    Ajv.ValidationError = validation_error_1.default;
    Ajv.MissingRefError = ref_error_1.default;
    exports.default = Ajv;
    function checkOptions(checkOpts, options, msg, log = "error") {
      for (const key in checkOpts) {
        const opt = key;
        if (opt in options)
          this.logger[log](`${msg}: option ${key}. ${checkOpts[opt]}`);
      }
    }
    function getSchEnv(keyRef) {
      keyRef = (0, resolve_1.normalizeId)(keyRef);
      return this.schemas[keyRef] || this.refs[keyRef];
    }
    function addInitialSchemas() {
      const optsSchemas = this.opts.schemas;
      if (!optsSchemas)
        return;
      if (Array.isArray(optsSchemas))
        this.addSchema(optsSchemas);
      else
        for (const key in optsSchemas)
          this.addSchema(optsSchemas[key], key);
    }
    function addInitialFormats() {
      for (const name in this.opts.formats) {
        const format = this.opts.formats[name];
        if (format)
          this.addFormat(name, format);
      }
    }
    function addInitialKeywords(defs) {
      if (Array.isArray(defs)) {
        this.addVocabulary(defs);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const keyword in defs) {
        const def = defs[keyword];
        if (!def.keyword)
          def.keyword = keyword;
        this.addKeyword(def);
      }
    }
    function getMetaSchemaOptions() {
      const metaOpts = { ...this.opts };
      for (const opt of META_IGNORE_OPTIONS)
        delete metaOpts[opt];
      return metaOpts;
    }
    var noLogs = { log() {
    }, warn() {
    }, error() {
    } };
    function getLogger(logger) {
      if (logger === false)
        return noLogs;
      if (logger === void 0)
        return console;
      if (logger.log && logger.warn && logger.error)
        return logger;
      throw new Error("logger must implement log, warn and error methods");
    }
    var KEYWORD_NAME = /^[a-z_$][a-z0-9_$:-]*$/i;
    function checkKeyword(keyword, def) {
      const { RULES } = this;
      (0, util_1.eachItem)(keyword, (kwd) => {
        if (RULES.keywords[kwd])
          throw new Error(`Keyword ${kwd} is already defined`);
        if (!KEYWORD_NAME.test(kwd))
          throw new Error(`Keyword ${kwd} has invalid name`);
      });
      if (!def)
        return;
      if (def.$data && !("code" in def || "validate" in def)) {
        throw new Error('$data keyword must have "code" or "validate" function');
      }
    }
    function addRule(keyword, definition, dataType) {
      var _a;
      const post = definition === null || definition === void 0 ? void 0 : definition.post;
      if (dataType && post)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES } = this;
      let ruleGroup = post ? RULES.post : RULES.rules.find(({ type: t2 }) => t2 === dataType);
      if (!ruleGroup) {
        ruleGroup = { type: dataType, rules: [] };
        RULES.rules.push(ruleGroup);
      }
      RULES.keywords[keyword] = true;
      if (!definition)
        return;
      const rule = {
        keyword,
        definition: {
          ...definition,
          type: (0, dataType_1.getJSONTypes)(definition.type),
          schemaType: (0, dataType_1.getJSONTypes)(definition.schemaType)
        }
      };
      if (definition.before)
        addBeforeRule.call(this, ruleGroup, rule, definition.before);
      else
        ruleGroup.rules.push(rule);
      RULES.all[keyword] = rule;
      (_a = definition.implements) === null || _a === void 0 ? void 0 : _a.forEach((kwd) => this.addKeyword(kwd));
    }
    function addBeforeRule(ruleGroup, rule, before) {
      const i2 = ruleGroup.rules.findIndex((_rule) => _rule.keyword === before);
      if (i2 >= 0) {
        ruleGroup.rules.splice(i2, 0, rule);
      } else {
        ruleGroup.rules.push(rule);
        this.logger.warn(`rule ${before} is not defined`);
      }
    }
    function keywordMetaschema(def) {
      let { metaSchema } = def;
      if (metaSchema === void 0)
        return;
      if (def.$data && this.opts.$data)
        metaSchema = schemaOrData(metaSchema);
      def.validateSchema = this.compile(metaSchema, true);
    }
    var $dataRef = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function schemaOrData(schema) {
      return { anyOf: [schema, $dataRef] };
    }
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/core/ref.js
var require_ref = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/core/ref.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.callRef = exports.getValidate = void 0;
    var ref_error_1 = require_ref_error();
    var code_1 = require_code2();
    var codegen_1 = require_codegen();
    var names_1 = require_names();
    var compile_1 = require_compile();
    var util_1 = require_util();
    var def = {
      keyword: "$ref",
      schemaType: "string",
      code(cxt) {
        const { gen, schema: $ref, it } = cxt;
        const { baseId, schemaEnv: env, validateName, opts, self } = it;
        const { root } = env;
        if (($ref === "#" || $ref === "#/") && baseId === root.baseId)
          return callRootRef();
        const schOrEnv = compile_1.resolveRef.call(self, root, baseId, $ref);
        if (schOrEnv === void 0)
          throw new ref_error_1.default(it.opts.uriResolver, baseId, $ref);
        if (schOrEnv instanceof compile_1.SchemaEnv)
          return callValidate(schOrEnv);
        return inlineRefSchema(schOrEnv);
        function callRootRef() {
          if (env === root)
            return callRef(cxt, validateName, env, env.$async);
          const rootName = gen.scopeValue("root", { ref: root });
          return callRef(cxt, (0, codegen_1._)`${rootName}.validate`, root, root.$async);
        }
        function callValidate(sch) {
          const v2 = getValidate(cxt, sch);
          callRef(cxt, v2, sch, sch.$async);
        }
        function inlineRefSchema(sch) {
          const schName = gen.scopeValue("schema", opts.code.source === true ? { ref: sch, code: (0, codegen_1.stringify)(sch) } : { ref: sch });
          const valid = gen.name("valid");
          const schCxt = cxt.subschema({
            schema: sch,
            dataTypes: [],
            schemaPath: codegen_1.nil,
            topSchemaRef: schName,
            errSchemaPath: $ref
          }, valid);
          cxt.mergeEvaluated(schCxt);
          cxt.ok(valid);
        }
      }
    };
    function getValidate(cxt, sch) {
      const { gen } = cxt;
      return sch.validate ? gen.scopeValue("validate", { ref: sch.validate }) : (0, codegen_1._)`${gen.scopeValue("wrapper", { ref: sch })}.validate`;
    }
    exports.getValidate = getValidate;
    function callRef(cxt, v2, sch, $async) {
      const { gen, it } = cxt;
      const { allErrors, schemaEnv: env, opts } = it;
      const passCxt = opts.passContext ? names_1.default.this : codegen_1.nil;
      if ($async)
        callAsyncRef();
      else
        callSyncRef();
      function callAsyncRef() {
        if (!env.$async)
          throw new Error("async schema referenced by sync schema");
        const valid = gen.let("valid");
        gen.try(() => {
          gen.code((0, codegen_1._)`await ${(0, code_1.callValidateCode)(cxt, v2, passCxt)}`);
          addEvaluatedFrom(v2);
          if (!allErrors)
            gen.assign(valid, true);
        }, (e) => {
          gen.if((0, codegen_1._)`!(${e} instanceof ${it.ValidationError})`, () => gen.throw(e));
          addErrorsFrom(e);
          if (!allErrors)
            gen.assign(valid, false);
        });
        cxt.ok(valid);
      }
      function callSyncRef() {
        cxt.result((0, code_1.callValidateCode)(cxt, v2, passCxt), () => addEvaluatedFrom(v2), () => addErrorsFrom(v2));
      }
      function addErrorsFrom(source) {
        const errs = (0, codegen_1._)`${source}.errors`;
        gen.assign(names_1.default.vErrors, (0, codegen_1._)`${names_1.default.vErrors} === null ? ${errs} : ${names_1.default.vErrors}.concat(${errs})`);
        gen.assign(names_1.default.errors, (0, codegen_1._)`${names_1.default.vErrors}.length`);
      }
      function addEvaluatedFrom(source) {
        var _a;
        if (!it.opts.unevaluated)
          return;
        const schEvaluated = (_a = sch === null || sch === void 0 ? void 0 : sch.validate) === null || _a === void 0 ? void 0 : _a.evaluated;
        if (it.props !== true) {
          if (schEvaluated && !schEvaluated.dynamicProps) {
            if (schEvaluated.props !== void 0) {
              it.props = util_1.mergeEvaluated.props(gen, schEvaluated.props, it.props);
            }
          } else {
            const props = gen.var("props", (0, codegen_1._)`${source}.evaluated.props`);
            it.props = util_1.mergeEvaluated.props(gen, props, it.props, codegen_1.Name);
          }
        }
        if (it.items !== true) {
          if (schEvaluated && !schEvaluated.dynamicItems) {
            if (schEvaluated.items !== void 0) {
              it.items = util_1.mergeEvaluated.items(gen, schEvaluated.items, it.items);
            }
          } else {
            const items = gen.var("items", (0, codegen_1._)`${source}.evaluated.items`);
            it.items = util_1.mergeEvaluated.items(gen, items, it.items, codegen_1.Name);
          }
        }
      }
    }
    exports.callRef = callRef;
    exports.default = def;
  }
});

// node_modules/.pnpm/ajv-draft-04@1.0.0_ajv@8.17.1/node_modules/ajv-draft-04/dist/vocabulary/core.js
var require_core2 = __commonJS({
  "node_modules/.pnpm/ajv-draft-04@1.0.0_ajv@8.17.1/node_modules/ajv-draft-04/dist/vocabulary/core.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ref_1 = require_ref();
    var core = [
      "$schema",
      "id",
      "$defs",
      { keyword: "$comment" },
      "definitions",
      ref_1.default
    ];
    exports.default = core;
  }
});

// node_modules/.pnpm/ajv-draft-04@1.0.0_ajv@8.17.1/node_modules/ajv-draft-04/dist/vocabulary/validation/limitNumber.js
var require_limitNumber = __commonJS({
  "node_modules/.pnpm/ajv-draft-04@1.0.0_ajv@8.17.1/node_modules/ajv-draft-04/dist/vocabulary/validation/limitNumber.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require_core();
    var codegen_1 = require_codegen();
    var ops = codegen_1.operators;
    var KWDs = {
      maximum: {
        exclusive: "exclusiveMaximum",
        ops: [
          { okStr: "<=", ok: ops.LTE, fail: ops.GT },
          { okStr: "<", ok: ops.LT, fail: ops.GTE }
        ]
      },
      minimum: {
        exclusive: "exclusiveMinimum",
        ops: [
          { okStr: ">=", ok: ops.GTE, fail: ops.LT },
          { okStr: ">", ok: ops.GT, fail: ops.LTE }
        ]
      }
    };
    var error = {
      message: (cxt) => core_1.str`must be ${kwdOp(cxt).okStr} ${cxt.schemaCode}`,
      params: (cxt) => core_1._`{comparison: ${kwdOp(cxt).okStr}, limit: ${cxt.schemaCode}}`
    };
    var def = {
      keyword: Object.keys(KWDs),
      type: "number",
      schemaType: "number",
      $data: true,
      error,
      code(cxt) {
        const { data, schemaCode } = cxt;
        cxt.fail$data(core_1._`${data} ${kwdOp(cxt).fail} ${schemaCode} || isNaN(${data})`);
      }
    };
    function kwdOp(cxt) {
      var _a;
      const keyword = cxt.keyword;
      const opsIdx = ((_a = cxt.parentSchema) === null || _a === void 0 ? void 0 : _a[KWDs[keyword].exclusive]) ? 1 : 0;
      return KWDs[keyword].ops[opsIdx];
    }
    exports.default = def;
  }
});

// node_modules/.pnpm/ajv-draft-04@1.0.0_ajv@8.17.1/node_modules/ajv-draft-04/dist/vocabulary/validation/limitNumberExclusive.js
var require_limitNumberExclusive = __commonJS({
  "node_modules/.pnpm/ajv-draft-04@1.0.0_ajv@8.17.1/node_modules/ajv-draft-04/dist/vocabulary/validation/limitNumberExclusive.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var KWDs = {
      exclusiveMaximum: "maximum",
      exclusiveMinimum: "minimum"
    };
    var def = {
      keyword: Object.keys(KWDs),
      type: "number",
      schemaType: "boolean",
      code({ keyword, parentSchema }) {
        const limitKwd = KWDs[keyword];
        if (parentSchema[limitKwd] === void 0) {
          throw new Error(`${keyword} can only be used with ${limitKwd}`);
        }
      }
    };
    exports.default = def;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/validation/multipleOf.js
var require_multipleOf = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/validation/multipleOf.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var error = {
      message: ({ schemaCode }) => (0, codegen_1.str)`must be multiple of ${schemaCode}`,
      params: ({ schemaCode }) => (0, codegen_1._)`{multipleOf: ${schemaCode}}`
    };
    var def = {
      keyword: "multipleOf",
      type: "number",
      schemaType: "number",
      $data: true,
      error,
      code(cxt) {
        const { gen, data, schemaCode, it } = cxt;
        const prec = it.opts.multipleOfPrecision;
        const res = gen.let("res");
        const invalid = prec ? (0, codegen_1._)`Math.abs(Math.round(${res}) - ${res}) > 1e-${prec}` : (0, codegen_1._)`${res} !== parseInt(${res})`;
        cxt.fail$data((0, codegen_1._)`(${schemaCode} === 0 || (${res} = ${data}/${schemaCode}, ${invalid}))`);
      }
    };
    exports.default = def;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/runtime/ucs2length.js
var require_ucs2length = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/runtime/ucs2length.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function ucs2length(str) {
      const len = str.length;
      let length = 0;
      let pos = 0;
      let value;
      while (pos < len) {
        length++;
        value = str.charCodeAt(pos++);
        if (value >= 55296 && value <= 56319 && pos < len) {
          value = str.charCodeAt(pos);
          if ((value & 64512) === 56320)
            pos++;
        }
      }
      return length;
    }
    exports.default = ucs2length;
    ucs2length.code = 'require("ajv/dist/runtime/ucs2length").default';
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/validation/limitLength.js
var require_limitLength = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/validation/limitLength.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var ucs2length_1 = require_ucs2length();
    var error = {
      message({ keyword, schemaCode }) {
        const comp = keyword === "maxLength" ? "more" : "fewer";
        return (0, codegen_1.str)`must NOT have ${comp} than ${schemaCode} characters`;
      },
      params: ({ schemaCode }) => (0, codegen_1._)`{limit: ${schemaCode}}`
    };
    var def = {
      keyword: ["maxLength", "minLength"],
      type: "string",
      schemaType: "number",
      $data: true,
      error,
      code(cxt) {
        const { keyword, data, schemaCode, it } = cxt;
        const op = keyword === "maxLength" ? codegen_1.operators.GT : codegen_1.operators.LT;
        const len = it.opts.unicode === false ? (0, codegen_1._)`${data}.length` : (0, codegen_1._)`${(0, util_1.useFunc)(cxt.gen, ucs2length_1.default)}(${data})`;
        cxt.fail$data((0, codegen_1._)`${len} ${op} ${schemaCode}`);
      }
    };
    exports.default = def;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/validation/pattern.js
var require_pattern = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/validation/pattern.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var code_1 = require_code2();
    var codegen_1 = require_codegen();
    var error = {
      message: ({ schemaCode }) => (0, codegen_1.str)`must match pattern "${schemaCode}"`,
      params: ({ schemaCode }) => (0, codegen_1._)`{pattern: ${schemaCode}}`
    };
    var def = {
      keyword: "pattern",
      type: "string",
      schemaType: "string",
      $data: true,
      error,
      code(cxt) {
        const { data, $data, schema, schemaCode, it } = cxt;
        const u = it.opts.unicodeRegExp ? "u" : "";
        const regExp = $data ? (0, codegen_1._)`(new RegExp(${schemaCode}, ${u}))` : (0, code_1.usePattern)(cxt, schema);
        cxt.fail$data((0, codegen_1._)`!${regExp}.test(${data})`);
      }
    };
    exports.default = def;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/validation/limitProperties.js
var require_limitProperties = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/validation/limitProperties.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var error = {
      message({ keyword, schemaCode }) {
        const comp = keyword === "maxProperties" ? "more" : "fewer";
        return (0, codegen_1.str)`must NOT have ${comp} than ${schemaCode} properties`;
      },
      params: ({ schemaCode }) => (0, codegen_1._)`{limit: ${schemaCode}}`
    };
    var def = {
      keyword: ["maxProperties", "minProperties"],
      type: "object",
      schemaType: "number",
      $data: true,
      error,
      code(cxt) {
        const { keyword, data, schemaCode } = cxt;
        const op = keyword === "maxProperties" ? codegen_1.operators.GT : codegen_1.operators.LT;
        cxt.fail$data((0, codegen_1._)`Object.keys(${data}).length ${op} ${schemaCode}`);
      }
    };
    exports.default = def;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/validation/required.js
var require_required = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/validation/required.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var code_1 = require_code2();
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var error = {
      message: ({ params: { missingProperty } }) => (0, codegen_1.str)`must have required property '${missingProperty}'`,
      params: ({ params: { missingProperty } }) => (0, codegen_1._)`{missingProperty: ${missingProperty}}`
    };
    var def = {
      keyword: "required",
      type: "object",
      schemaType: "array",
      $data: true,
      error,
      code(cxt) {
        const { gen, schema, schemaCode, data, $data, it } = cxt;
        const { opts } = it;
        if (!$data && schema.length === 0)
          return;
        const useLoop = schema.length >= opts.loopRequired;
        if (it.allErrors)
          allErrorsMode();
        else
          exitOnErrorMode();
        if (opts.strictRequired) {
          const props = cxt.parentSchema.properties;
          const { definedProperties } = cxt.it;
          for (const requiredKey of schema) {
            if ((props === null || props === void 0 ? void 0 : props[requiredKey]) === void 0 && !definedProperties.has(requiredKey)) {
              const schemaPath = it.schemaEnv.baseId + it.errSchemaPath;
              const msg = `required property "${requiredKey}" is not defined at "${schemaPath}" (strictRequired)`;
              (0, util_1.checkStrictMode)(it, msg, it.opts.strictRequired);
            }
          }
        }
        function allErrorsMode() {
          if (useLoop || $data) {
            cxt.block$data(codegen_1.nil, loopAllRequired);
          } else {
            for (const prop of schema) {
              (0, code_1.checkReportMissingProp)(cxt, prop);
            }
          }
        }
        function exitOnErrorMode() {
          const missing = gen.let("missing");
          if (useLoop || $data) {
            const valid = gen.let("valid", true);
            cxt.block$data(valid, () => loopUntilMissing(missing, valid));
            cxt.ok(valid);
          } else {
            gen.if((0, code_1.checkMissingProp)(cxt, schema, missing));
            (0, code_1.reportMissingProp)(cxt, missing);
            gen.else();
          }
        }
        function loopAllRequired() {
          gen.forOf("prop", schemaCode, (prop) => {
            cxt.setParams({ missingProperty: prop });
            gen.if((0, code_1.noPropertyInData)(gen, data, prop, opts.ownProperties), () => cxt.error());
          });
        }
        function loopUntilMissing(missing, valid) {
          cxt.setParams({ missingProperty: missing });
          gen.forOf(missing, schemaCode, () => {
            gen.assign(valid, (0, code_1.propertyInData)(gen, data, missing, opts.ownProperties));
            gen.if((0, codegen_1.not)(valid), () => {
              cxt.error();
              gen.break();
            });
          }, codegen_1.nil);
        }
      }
    };
    exports.default = def;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/validation/limitItems.js
var require_limitItems = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/validation/limitItems.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var error = {
      message({ keyword, schemaCode }) {
        const comp = keyword === "maxItems" ? "more" : "fewer";
        return (0, codegen_1.str)`must NOT have ${comp} than ${schemaCode} items`;
      },
      params: ({ schemaCode }) => (0, codegen_1._)`{limit: ${schemaCode}}`
    };
    var def = {
      keyword: ["maxItems", "minItems"],
      type: "array",
      schemaType: "number",
      $data: true,
      error,
      code(cxt) {
        const { keyword, data, schemaCode } = cxt;
        const op = keyword === "maxItems" ? codegen_1.operators.GT : codegen_1.operators.LT;
        cxt.fail$data((0, codegen_1._)`${data}.length ${op} ${schemaCode}`);
      }
    };
    exports.default = def;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/runtime/equal.js
var require_equal = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/runtime/equal.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var equal = require_fast_deep_equal();
    equal.code = 'require("ajv/dist/runtime/equal").default';
    exports.default = equal;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/validation/uniqueItems.js
var require_uniqueItems = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/validation/uniqueItems.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var dataType_1 = require_dataType();
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var equal_1 = require_equal();
    var error = {
      message: ({ params: { i: i2, j } }) => (0, codegen_1.str)`must NOT have duplicate items (items ## ${j} and ${i2} are identical)`,
      params: ({ params: { i: i2, j } }) => (0, codegen_1._)`{i: ${i2}, j: ${j}}`
    };
    var def = {
      keyword: "uniqueItems",
      type: "array",
      schemaType: "boolean",
      $data: true,
      error,
      code(cxt) {
        const { gen, data, $data, schema, parentSchema, schemaCode, it } = cxt;
        if (!$data && !schema)
          return;
        const valid = gen.let("valid");
        const itemTypes = parentSchema.items ? (0, dataType_1.getSchemaTypes)(parentSchema.items) : [];
        cxt.block$data(valid, validateUniqueItems, (0, codegen_1._)`${schemaCode} === false`);
        cxt.ok(valid);
        function validateUniqueItems() {
          const i2 = gen.let("i", (0, codegen_1._)`${data}.length`);
          const j = gen.let("j");
          cxt.setParams({ i: i2, j });
          gen.assign(valid, true);
          gen.if((0, codegen_1._)`${i2} > 1`, () => (canOptimize() ? loopN : loopN2)(i2, j));
        }
        function canOptimize() {
          return itemTypes.length > 0 && !itemTypes.some((t2) => t2 === "object" || t2 === "array");
        }
        function loopN(i2, j) {
          const item = gen.name("item");
          const wrongType = (0, dataType_1.checkDataTypes)(itemTypes, item, it.opts.strictNumbers, dataType_1.DataType.Wrong);
          const indices = gen.const("indices", (0, codegen_1._)`{}`);
          gen.for((0, codegen_1._)`;${i2}--;`, () => {
            gen.let(item, (0, codegen_1._)`${data}[${i2}]`);
            gen.if(wrongType, (0, codegen_1._)`continue`);
            if (itemTypes.length > 1)
              gen.if((0, codegen_1._)`typeof ${item} == "string"`, (0, codegen_1._)`${item} += "_"`);
            gen.if((0, codegen_1._)`typeof ${indices}[${item}] == "number"`, () => {
              gen.assign(j, (0, codegen_1._)`${indices}[${item}]`);
              cxt.error();
              gen.assign(valid, false).break();
            }).code((0, codegen_1._)`${indices}[${item}] = ${i2}`);
          });
        }
        function loopN2(i2, j) {
          const eql = (0, util_1.useFunc)(gen, equal_1.default);
          const outer = gen.name("outer");
          gen.label(outer).for((0, codegen_1._)`;${i2}--;`, () => gen.for((0, codegen_1._)`${j} = ${i2}; ${j}--;`, () => gen.if((0, codegen_1._)`${eql}(${data}[${i2}], ${data}[${j}])`, () => {
            cxt.error();
            gen.assign(valid, false).break(outer);
          })));
        }
      }
    };
    exports.default = def;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/validation/const.js
var require_const = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/validation/const.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var equal_1 = require_equal();
    var error = {
      message: "must be equal to constant",
      params: ({ schemaCode }) => (0, codegen_1._)`{allowedValue: ${schemaCode}}`
    };
    var def = {
      keyword: "const",
      $data: true,
      error,
      code(cxt) {
        const { gen, data, $data, schemaCode, schema } = cxt;
        if ($data || schema && typeof schema == "object") {
          cxt.fail$data((0, codegen_1._)`!${(0, util_1.useFunc)(gen, equal_1.default)}(${data}, ${schemaCode})`);
        } else {
          cxt.fail((0, codegen_1._)`${schema} !== ${data}`);
        }
      }
    };
    exports.default = def;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/validation/enum.js
var require_enum = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/validation/enum.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var equal_1 = require_equal();
    var error = {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode }) => (0, codegen_1._)`{allowedValues: ${schemaCode}}`
    };
    var def = {
      keyword: "enum",
      schemaType: "array",
      $data: true,
      error,
      code(cxt) {
        const { gen, data, $data, schema, schemaCode, it } = cxt;
        if (!$data && schema.length === 0)
          throw new Error("enum must have non-empty array");
        const useLoop = schema.length >= it.opts.loopEnum;
        let eql;
        const getEql = () => eql !== null && eql !== void 0 ? eql : eql = (0, util_1.useFunc)(gen, equal_1.default);
        let valid;
        if (useLoop || $data) {
          valid = gen.let("valid");
          cxt.block$data(valid, loopEnum);
        } else {
          if (!Array.isArray(schema))
            throw new Error("ajv implementation error");
          const vSchema = gen.const("vSchema", schemaCode);
          valid = (0, codegen_1.or)(...schema.map((_x, i2) => equalCode(vSchema, i2)));
        }
        cxt.pass(valid);
        function loopEnum() {
          gen.assign(valid, false);
          gen.forOf("v", schemaCode, (v2) => gen.if((0, codegen_1._)`${getEql()}(${data}, ${v2})`, () => gen.assign(valid, true).break()));
        }
        function equalCode(vSchema, i2) {
          const sch = schema[i2];
          return typeof sch === "object" && sch !== null ? (0, codegen_1._)`${getEql()}(${data}, ${vSchema}[${i2}])` : (0, codegen_1._)`${data} === ${sch}`;
        }
      }
    };
    exports.default = def;
  }
});

// node_modules/.pnpm/ajv-draft-04@1.0.0_ajv@8.17.1/node_modules/ajv-draft-04/dist/vocabulary/validation/index.js
var require_validation = __commonJS({
  "node_modules/.pnpm/ajv-draft-04@1.0.0_ajv@8.17.1/node_modules/ajv-draft-04/dist/vocabulary/validation/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var limitNumber_1 = require_limitNumber();
    var limitNumberExclusive_1 = require_limitNumberExclusive();
    var multipleOf_1 = require_multipleOf();
    var limitLength_1 = require_limitLength();
    var pattern_1 = require_pattern();
    var limitProperties_1 = require_limitProperties();
    var required_1 = require_required();
    var limitItems_1 = require_limitItems();
    var uniqueItems_1 = require_uniqueItems();
    var const_1 = require_const();
    var enum_1 = require_enum();
    var validation = [
      // number
      limitNumber_1.default,
      limitNumberExclusive_1.default,
      multipleOf_1.default,
      // string
      limitLength_1.default,
      pattern_1.default,
      // object
      limitProperties_1.default,
      required_1.default,
      // array
      limitItems_1.default,
      uniqueItems_1.default,
      // any
      { keyword: "type", schemaType: ["string", "array"] },
      { keyword: "nullable", schemaType: "boolean" },
      const_1.default,
      enum_1.default
    ];
    exports.default = validation;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/applicator/additionalItems.js
var require_additionalItems = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/applicator/additionalItems.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.validateAdditionalItems = void 0;
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var error = {
      message: ({ params: { len } }) => (0, codegen_1.str)`must NOT have more than ${len} items`,
      params: ({ params: { len } }) => (0, codegen_1._)`{limit: ${len}}`
    };
    var def = {
      keyword: "additionalItems",
      type: "array",
      schemaType: ["boolean", "object"],
      before: "uniqueItems",
      error,
      code(cxt) {
        const { parentSchema, it } = cxt;
        const { items } = parentSchema;
        if (!Array.isArray(items)) {
          (0, util_1.checkStrictMode)(it, '"additionalItems" is ignored when "items" is not an array of schemas');
          return;
        }
        validateAdditionalItems(cxt, items);
      }
    };
    function validateAdditionalItems(cxt, items) {
      const { gen, schema, data, keyword, it } = cxt;
      it.items = true;
      const len = gen.const("len", (0, codegen_1._)`${data}.length`);
      if (schema === false) {
        cxt.setParams({ len: items.length });
        cxt.pass((0, codegen_1._)`${len} <= ${items.length}`);
      } else if (typeof schema == "object" && !(0, util_1.alwaysValidSchema)(it, schema)) {
        const valid = gen.var("valid", (0, codegen_1._)`${len} <= ${items.length}`);
        gen.if((0, codegen_1.not)(valid), () => validateItems(valid));
        cxt.ok(valid);
      }
      function validateItems(valid) {
        gen.forRange("i", items.length, len, (i2) => {
          cxt.subschema({ keyword, dataProp: i2, dataPropType: util_1.Type.Num }, valid);
          if (!it.allErrors)
            gen.if((0, codegen_1.not)(valid), () => gen.break());
        });
      }
    }
    exports.validateAdditionalItems = validateAdditionalItems;
    exports.default = def;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/applicator/items.js
var require_items = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/applicator/items.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.validateTuple = void 0;
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var code_1 = require_code2();
    var def = {
      keyword: "items",
      type: "array",
      schemaType: ["object", "array", "boolean"],
      before: "uniqueItems",
      code(cxt) {
        const { schema, it } = cxt;
        if (Array.isArray(schema))
          return validateTuple(cxt, "additionalItems", schema);
        it.items = true;
        if ((0, util_1.alwaysValidSchema)(it, schema))
          return;
        cxt.ok((0, code_1.validateArray)(cxt));
      }
    };
    function validateTuple(cxt, extraItems, schArr = cxt.schema) {
      const { gen, parentSchema, data, keyword, it } = cxt;
      checkStrictTuple(parentSchema);
      if (it.opts.unevaluated && schArr.length && it.items !== true) {
        it.items = util_1.mergeEvaluated.items(gen, schArr.length, it.items);
      }
      const valid = gen.name("valid");
      const len = gen.const("len", (0, codegen_1._)`${data}.length`);
      schArr.forEach((sch, i2) => {
        if ((0, util_1.alwaysValidSchema)(it, sch))
          return;
        gen.if((0, codegen_1._)`${len} > ${i2}`, () => cxt.subschema({
          keyword,
          schemaProp: i2,
          dataProp: i2
        }, valid));
        cxt.ok(valid);
      });
      function checkStrictTuple(sch) {
        const { opts, errSchemaPath } = it;
        const l = schArr.length;
        const fullTuple = l === sch.minItems && (l === sch.maxItems || sch[extraItems] === false);
        if (opts.strictTuples && !fullTuple) {
          const msg = `"${keyword}" is ${l}-tuple, but minItems or maxItems/${extraItems} are not specified or different at path "${errSchemaPath}"`;
          (0, util_1.checkStrictMode)(it, msg, opts.strictTuples);
        }
      }
    }
    exports.validateTuple = validateTuple;
    exports.default = def;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/applicator/prefixItems.js
var require_prefixItems = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/applicator/prefixItems.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var items_1 = require_items();
    var def = {
      keyword: "prefixItems",
      type: "array",
      schemaType: ["array"],
      before: "uniqueItems",
      code: (cxt) => (0, items_1.validateTuple)(cxt, "items")
    };
    exports.default = def;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/applicator/items2020.js
var require_items2020 = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/applicator/items2020.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var code_1 = require_code2();
    var additionalItems_1 = require_additionalItems();
    var error = {
      message: ({ params: { len } }) => (0, codegen_1.str)`must NOT have more than ${len} items`,
      params: ({ params: { len } }) => (0, codegen_1._)`{limit: ${len}}`
    };
    var def = {
      keyword: "items",
      type: "array",
      schemaType: ["object", "boolean"],
      before: "uniqueItems",
      error,
      code(cxt) {
        const { schema, parentSchema, it } = cxt;
        const { prefixItems } = parentSchema;
        it.items = true;
        if ((0, util_1.alwaysValidSchema)(it, schema))
          return;
        if (prefixItems)
          (0, additionalItems_1.validateAdditionalItems)(cxt, prefixItems);
        else
          cxt.ok((0, code_1.validateArray)(cxt));
      }
    };
    exports.default = def;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/applicator/contains.js
var require_contains = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/applicator/contains.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var error = {
      message: ({ params: { min, max } }) => max === void 0 ? (0, codegen_1.str)`must contain at least ${min} valid item(s)` : (0, codegen_1.str)`must contain at least ${min} and no more than ${max} valid item(s)`,
      params: ({ params: { min, max } }) => max === void 0 ? (0, codegen_1._)`{minContains: ${min}}` : (0, codegen_1._)`{minContains: ${min}, maxContains: ${max}}`
    };
    var def = {
      keyword: "contains",
      type: "array",
      schemaType: ["object", "boolean"],
      before: "uniqueItems",
      trackErrors: true,
      error,
      code(cxt) {
        const { gen, schema, parentSchema, data, it } = cxt;
        let min;
        let max;
        const { minContains, maxContains } = parentSchema;
        if (it.opts.next) {
          min = minContains === void 0 ? 1 : minContains;
          max = maxContains;
        } else {
          min = 1;
        }
        const len = gen.const("len", (0, codegen_1._)`${data}.length`);
        cxt.setParams({ min, max });
        if (max === void 0 && min === 0) {
          (0, util_1.checkStrictMode)(it, `"minContains" == 0 without "maxContains": "contains" keyword ignored`);
          return;
        }
        if (max !== void 0 && min > max) {
          (0, util_1.checkStrictMode)(it, `"minContains" > "maxContains" is always invalid`);
          cxt.fail();
          return;
        }
        if ((0, util_1.alwaysValidSchema)(it, schema)) {
          let cond = (0, codegen_1._)`${len} >= ${min}`;
          if (max !== void 0)
            cond = (0, codegen_1._)`${cond} && ${len} <= ${max}`;
          cxt.pass(cond);
          return;
        }
        it.items = true;
        const valid = gen.name("valid");
        if (max === void 0 && min === 1) {
          validateItems(valid, () => gen.if(valid, () => gen.break()));
        } else if (min === 0) {
          gen.let(valid, true);
          if (max !== void 0)
            gen.if((0, codegen_1._)`${data}.length > 0`, validateItemsWithCount);
        } else {
          gen.let(valid, false);
          validateItemsWithCount();
        }
        cxt.result(valid, () => cxt.reset());
        function validateItemsWithCount() {
          const schValid = gen.name("_valid");
          const count = gen.let("count", 0);
          validateItems(schValid, () => gen.if(schValid, () => checkLimits(count)));
        }
        function validateItems(_valid, block) {
          gen.forRange("i", 0, len, (i2) => {
            cxt.subschema({
              keyword: "contains",
              dataProp: i2,
              dataPropType: util_1.Type.Num,
              compositeRule: true
            }, _valid);
            block();
          });
        }
        function checkLimits(count) {
          gen.code((0, codegen_1._)`${count}++`);
          if (max === void 0) {
            gen.if((0, codegen_1._)`${count} >= ${min}`, () => gen.assign(valid, true).break());
          } else {
            gen.if((0, codegen_1._)`${count} > ${max}`, () => gen.assign(valid, false).break());
            if (min === 1)
              gen.assign(valid, true);
            else
              gen.if((0, codegen_1._)`${count} >= ${min}`, () => gen.assign(valid, true));
          }
        }
      }
    };
    exports.default = def;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/applicator/dependencies.js
var require_dependencies = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/applicator/dependencies.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.validateSchemaDeps = exports.validatePropertyDeps = exports.error = void 0;
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var code_1 = require_code2();
    exports.error = {
      message: ({ params: { property, depsCount, deps } }) => {
        const property_ies = depsCount === 1 ? "property" : "properties";
        return (0, codegen_1.str)`must have ${property_ies} ${deps} when property ${property} is present`;
      },
      params: ({ params: { property, depsCount, deps, missingProperty } }) => (0, codegen_1._)`{property: ${property},
    missingProperty: ${missingProperty},
    depsCount: ${depsCount},
    deps: ${deps}}`
      // TODO change to reference
    };
    var def = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: exports.error,
      code(cxt) {
        const [propDeps, schDeps] = splitDependencies(cxt);
        validatePropertyDeps(cxt, propDeps);
        validateSchemaDeps(cxt, schDeps);
      }
    };
    function splitDependencies({ schema }) {
      const propertyDeps = {};
      const schemaDeps = {};
      for (const key in schema) {
        if (key === "__proto__")
          continue;
        const deps = Array.isArray(schema[key]) ? propertyDeps : schemaDeps;
        deps[key] = schema[key];
      }
      return [propertyDeps, schemaDeps];
    }
    function validatePropertyDeps(cxt, propertyDeps = cxt.schema) {
      const { gen, data, it } = cxt;
      if (Object.keys(propertyDeps).length === 0)
        return;
      const missing = gen.let("missing");
      for (const prop in propertyDeps) {
        const deps = propertyDeps[prop];
        if (deps.length === 0)
          continue;
        const hasProperty = (0, code_1.propertyInData)(gen, data, prop, it.opts.ownProperties);
        cxt.setParams({
          property: prop,
          depsCount: deps.length,
          deps: deps.join(", ")
        });
        if (it.allErrors) {
          gen.if(hasProperty, () => {
            for (const depProp of deps) {
              (0, code_1.checkReportMissingProp)(cxt, depProp);
            }
          });
        } else {
          gen.if((0, codegen_1._)`${hasProperty} && (${(0, code_1.checkMissingProp)(cxt, deps, missing)})`);
          (0, code_1.reportMissingProp)(cxt, missing);
          gen.else();
        }
      }
    }
    exports.validatePropertyDeps = validatePropertyDeps;
    function validateSchemaDeps(cxt, schemaDeps = cxt.schema) {
      const { gen, data, keyword, it } = cxt;
      const valid = gen.name("valid");
      for (const prop in schemaDeps) {
        if ((0, util_1.alwaysValidSchema)(it, schemaDeps[prop]))
          continue;
        gen.if(
          (0, code_1.propertyInData)(gen, data, prop, it.opts.ownProperties),
          () => {
            const schCxt = cxt.subschema({ keyword, schemaProp: prop }, valid);
            cxt.mergeValidEvaluated(schCxt, valid);
          },
          () => gen.var(valid, true)
          // TODO var
        );
        cxt.ok(valid);
      }
    }
    exports.validateSchemaDeps = validateSchemaDeps;
    exports.default = def;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/applicator/propertyNames.js
var require_propertyNames = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/applicator/propertyNames.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var error = {
      message: "property name must be valid",
      params: ({ params }) => (0, codegen_1._)`{propertyName: ${params.propertyName}}`
    };
    var def = {
      keyword: "propertyNames",
      type: "object",
      schemaType: ["object", "boolean"],
      error,
      code(cxt) {
        const { gen, schema, data, it } = cxt;
        if ((0, util_1.alwaysValidSchema)(it, schema))
          return;
        const valid = gen.name("valid");
        gen.forIn("key", data, (key) => {
          cxt.setParams({ propertyName: key });
          cxt.subschema({
            keyword: "propertyNames",
            data: key,
            dataTypes: ["string"],
            propertyName: key,
            compositeRule: true
          }, valid);
          gen.if((0, codegen_1.not)(valid), () => {
            cxt.error(true);
            if (!it.allErrors)
              gen.break();
          });
        });
        cxt.ok(valid);
      }
    };
    exports.default = def;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/applicator/additionalProperties.js
var require_additionalProperties = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/applicator/additionalProperties.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var code_1 = require_code2();
    var codegen_1 = require_codegen();
    var names_1 = require_names();
    var util_1 = require_util();
    var error = {
      message: "must NOT have additional properties",
      params: ({ params }) => (0, codegen_1._)`{additionalProperty: ${params.additionalProperty}}`
    };
    var def = {
      keyword: "additionalProperties",
      type: ["object"],
      schemaType: ["boolean", "object"],
      allowUndefined: true,
      trackErrors: true,
      error,
      code(cxt) {
        const { gen, schema, parentSchema, data, errsCount, it } = cxt;
        if (!errsCount)
          throw new Error("ajv implementation error");
        const { allErrors, opts } = it;
        it.props = true;
        if (opts.removeAdditional !== "all" && (0, util_1.alwaysValidSchema)(it, schema))
          return;
        const props = (0, code_1.allSchemaProperties)(parentSchema.properties);
        const patProps = (0, code_1.allSchemaProperties)(parentSchema.patternProperties);
        checkAdditionalProperties();
        cxt.ok((0, codegen_1._)`${errsCount} === ${names_1.default.errors}`);
        function checkAdditionalProperties() {
          gen.forIn("key", data, (key) => {
            if (!props.length && !patProps.length)
              additionalPropertyCode(key);
            else
              gen.if(isAdditional(key), () => additionalPropertyCode(key));
          });
        }
        function isAdditional(key) {
          let definedProp;
          if (props.length > 8) {
            const propsSchema = (0, util_1.schemaRefOrVal)(it, parentSchema.properties, "properties");
            definedProp = (0, code_1.isOwnProperty)(gen, propsSchema, key);
          } else if (props.length) {
            definedProp = (0, codegen_1.or)(...props.map((p2) => (0, codegen_1._)`${key} === ${p2}`));
          } else {
            definedProp = codegen_1.nil;
          }
          if (patProps.length) {
            definedProp = (0, codegen_1.or)(definedProp, ...patProps.map((p2) => (0, codegen_1._)`${(0, code_1.usePattern)(cxt, p2)}.test(${key})`));
          }
          return (0, codegen_1.not)(definedProp);
        }
        function deleteAdditional(key) {
          gen.code((0, codegen_1._)`delete ${data}[${key}]`);
        }
        function additionalPropertyCode(key) {
          if (opts.removeAdditional === "all" || opts.removeAdditional && schema === false) {
            deleteAdditional(key);
            return;
          }
          if (schema === false) {
            cxt.setParams({ additionalProperty: key });
            cxt.error();
            if (!allErrors)
              gen.break();
            return;
          }
          if (typeof schema == "object" && !(0, util_1.alwaysValidSchema)(it, schema)) {
            const valid = gen.name("valid");
            if (opts.removeAdditional === "failing") {
              applyAdditionalSchema(key, valid, false);
              gen.if((0, codegen_1.not)(valid), () => {
                cxt.reset();
                deleteAdditional(key);
              });
            } else {
              applyAdditionalSchema(key, valid);
              if (!allErrors)
                gen.if((0, codegen_1.not)(valid), () => gen.break());
            }
          }
        }
        function applyAdditionalSchema(key, valid, errors) {
          const subschema = {
            keyword: "additionalProperties",
            dataProp: key,
            dataPropType: util_1.Type.Str
          };
          if (errors === false) {
            Object.assign(subschema, {
              compositeRule: true,
              createErrors: false,
              allErrors: false
            });
          }
          cxt.subschema(subschema, valid);
        }
      }
    };
    exports.default = def;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/applicator/properties.js
var require_properties = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/applicator/properties.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var validate_1 = require_validate();
    var code_1 = require_code2();
    var util_1 = require_util();
    var additionalProperties_1 = require_additionalProperties();
    var def = {
      keyword: "properties",
      type: "object",
      schemaType: "object",
      code(cxt) {
        const { gen, schema, parentSchema, data, it } = cxt;
        if (it.opts.removeAdditional === "all" && parentSchema.additionalProperties === void 0) {
          additionalProperties_1.default.code(new validate_1.KeywordCxt(it, additionalProperties_1.default, "additionalProperties"));
        }
        const allProps = (0, code_1.allSchemaProperties)(schema);
        for (const prop of allProps) {
          it.definedProperties.add(prop);
        }
        if (it.opts.unevaluated && allProps.length && it.props !== true) {
          it.props = util_1.mergeEvaluated.props(gen, (0, util_1.toHash)(allProps), it.props);
        }
        const properties = allProps.filter((p2) => !(0, util_1.alwaysValidSchema)(it, schema[p2]));
        if (properties.length === 0)
          return;
        const valid = gen.name("valid");
        for (const prop of properties) {
          if (hasDefault(prop)) {
            applyPropertySchema(prop);
          } else {
            gen.if((0, code_1.propertyInData)(gen, data, prop, it.opts.ownProperties));
            applyPropertySchema(prop);
            if (!it.allErrors)
              gen.else().var(valid, true);
            gen.endIf();
          }
          cxt.it.definedProperties.add(prop);
          cxt.ok(valid);
        }
        function hasDefault(prop) {
          return it.opts.useDefaults && !it.compositeRule && schema[prop].default !== void 0;
        }
        function applyPropertySchema(prop) {
          cxt.subschema({
            keyword: "properties",
            schemaProp: prop,
            dataProp: prop
          }, valid);
        }
      }
    };
    exports.default = def;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/applicator/patternProperties.js
var require_patternProperties = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/applicator/patternProperties.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var code_1 = require_code2();
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var util_2 = require_util();
    var def = {
      keyword: "patternProperties",
      type: "object",
      schemaType: "object",
      code(cxt) {
        const { gen, schema, data, parentSchema, it } = cxt;
        const { opts } = it;
        const patterns = (0, code_1.allSchemaProperties)(schema);
        const alwaysValidPatterns = patterns.filter((p2) => (0, util_1.alwaysValidSchema)(it, schema[p2]));
        if (patterns.length === 0 || alwaysValidPatterns.length === patterns.length && (!it.opts.unevaluated || it.props === true)) {
          return;
        }
        const checkProperties = opts.strictSchema && !opts.allowMatchingProperties && parentSchema.properties;
        const valid = gen.name("valid");
        if (it.props !== true && !(it.props instanceof codegen_1.Name)) {
          it.props = (0, util_2.evaluatedPropsToName)(gen, it.props);
        }
        const { props } = it;
        validatePatternProperties();
        function validatePatternProperties() {
          for (const pat of patterns) {
            if (checkProperties)
              checkMatchingProperties(pat);
            if (it.allErrors) {
              validateProperties(pat);
            } else {
              gen.var(valid, true);
              validateProperties(pat);
              gen.if(valid);
            }
          }
        }
        function checkMatchingProperties(pat) {
          for (const prop in checkProperties) {
            if (new RegExp(pat).test(prop)) {
              (0, util_1.checkStrictMode)(it, `property ${prop} matches pattern ${pat} (use allowMatchingProperties)`);
            }
          }
        }
        function validateProperties(pat) {
          gen.forIn("key", data, (key) => {
            gen.if((0, codegen_1._)`${(0, code_1.usePattern)(cxt, pat)}.test(${key})`, () => {
              const alwaysValid = alwaysValidPatterns.includes(pat);
              if (!alwaysValid) {
                cxt.subschema({
                  keyword: "patternProperties",
                  schemaProp: pat,
                  dataProp: key,
                  dataPropType: util_2.Type.Str
                }, valid);
              }
              if (it.opts.unevaluated && props !== true) {
                gen.assign((0, codegen_1._)`${props}[${key}]`, true);
              } else if (!alwaysValid && !it.allErrors) {
                gen.if((0, codegen_1.not)(valid), () => gen.break());
              }
            });
          });
        }
      }
    };
    exports.default = def;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/applicator/not.js
var require_not = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/applicator/not.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var util_1 = require_util();
    var def = {
      keyword: "not",
      schemaType: ["object", "boolean"],
      trackErrors: true,
      code(cxt) {
        const { gen, schema, it } = cxt;
        if ((0, util_1.alwaysValidSchema)(it, schema)) {
          cxt.fail();
          return;
        }
        const valid = gen.name("valid");
        cxt.subschema({
          keyword: "not",
          compositeRule: true,
          createErrors: false,
          allErrors: false
        }, valid);
        cxt.failResult(valid, () => cxt.reset(), () => cxt.error());
      },
      error: { message: "must NOT be valid" }
    };
    exports.default = def;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/applicator/anyOf.js
var require_anyOf = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/applicator/anyOf.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var code_1 = require_code2();
    var def = {
      keyword: "anyOf",
      schemaType: "array",
      trackErrors: true,
      code: code_1.validateUnion,
      error: { message: "must match a schema in anyOf" }
    };
    exports.default = def;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/applicator/oneOf.js
var require_oneOf = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/applicator/oneOf.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var error = {
      message: "must match exactly one schema in oneOf",
      params: ({ params }) => (0, codegen_1._)`{passingSchemas: ${params.passing}}`
    };
    var def = {
      keyword: "oneOf",
      schemaType: "array",
      trackErrors: true,
      error,
      code(cxt) {
        const { gen, schema, parentSchema, it } = cxt;
        if (!Array.isArray(schema))
          throw new Error("ajv implementation error");
        if (it.opts.discriminator && parentSchema.discriminator)
          return;
        const schArr = schema;
        const valid = gen.let("valid", false);
        const passing = gen.let("passing", null);
        const schValid = gen.name("_valid");
        cxt.setParams({ passing });
        gen.block(validateOneOf);
        cxt.result(valid, () => cxt.reset(), () => cxt.error(true));
        function validateOneOf() {
          schArr.forEach((sch, i2) => {
            let schCxt;
            if ((0, util_1.alwaysValidSchema)(it, sch)) {
              gen.var(schValid, true);
            } else {
              schCxt = cxt.subschema({
                keyword: "oneOf",
                schemaProp: i2,
                compositeRule: true
              }, schValid);
            }
            if (i2 > 0) {
              gen.if((0, codegen_1._)`${schValid} && ${valid}`).assign(valid, false).assign(passing, (0, codegen_1._)`[${passing}, ${i2}]`).else();
            }
            gen.if(schValid, () => {
              gen.assign(valid, true);
              gen.assign(passing, i2);
              if (schCxt)
                cxt.mergeEvaluated(schCxt, codegen_1.Name);
            });
          });
        }
      }
    };
    exports.default = def;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/applicator/allOf.js
var require_allOf = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/applicator/allOf.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var util_1 = require_util();
    var def = {
      keyword: "allOf",
      schemaType: "array",
      code(cxt) {
        const { gen, schema, it } = cxt;
        if (!Array.isArray(schema))
          throw new Error("ajv implementation error");
        const valid = gen.name("valid");
        schema.forEach((sch, i2) => {
          if ((0, util_1.alwaysValidSchema)(it, sch))
            return;
          const schCxt = cxt.subschema({ keyword: "allOf", schemaProp: i2 }, valid);
          cxt.ok(valid);
          cxt.mergeEvaluated(schCxt);
        });
      }
    };
    exports.default = def;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/applicator/if.js
var require_if = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/applicator/if.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var error = {
      message: ({ params }) => (0, codegen_1.str)`must match "${params.ifClause}" schema`,
      params: ({ params }) => (0, codegen_1._)`{failingKeyword: ${params.ifClause}}`
    };
    var def = {
      keyword: "if",
      schemaType: ["object", "boolean"],
      trackErrors: true,
      error,
      code(cxt) {
        const { gen, parentSchema, it } = cxt;
        if (parentSchema.then === void 0 && parentSchema.else === void 0) {
          (0, util_1.checkStrictMode)(it, '"if" without "then" and "else" is ignored');
        }
        const hasThen = hasSchema(it, "then");
        const hasElse = hasSchema(it, "else");
        if (!hasThen && !hasElse)
          return;
        const valid = gen.let("valid", true);
        const schValid = gen.name("_valid");
        validateIf();
        cxt.reset();
        if (hasThen && hasElse) {
          const ifClause = gen.let("ifClause");
          cxt.setParams({ ifClause });
          gen.if(schValid, validateClause("then", ifClause), validateClause("else", ifClause));
        } else if (hasThen) {
          gen.if(schValid, validateClause("then"));
        } else {
          gen.if((0, codegen_1.not)(schValid), validateClause("else"));
        }
        cxt.pass(valid, () => cxt.error(true));
        function validateIf() {
          const schCxt = cxt.subschema({
            keyword: "if",
            compositeRule: true,
            createErrors: false,
            allErrors: false
          }, schValid);
          cxt.mergeEvaluated(schCxt);
        }
        function validateClause(keyword, ifClause) {
          return () => {
            const schCxt = cxt.subschema({ keyword }, schValid);
            gen.assign(valid, schValid);
            cxt.mergeValidEvaluated(schCxt, valid);
            if (ifClause)
              gen.assign(ifClause, (0, codegen_1._)`${keyword}`);
            else
              cxt.setParams({ ifClause: keyword });
          };
        }
      }
    };
    function hasSchema(it, keyword) {
      const schema = it.schema[keyword];
      return schema !== void 0 && !(0, util_1.alwaysValidSchema)(it, schema);
    }
    exports.default = def;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/applicator/thenElse.js
var require_thenElse = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/applicator/thenElse.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var util_1 = require_util();
    var def = {
      keyword: ["then", "else"],
      schemaType: ["object", "boolean"],
      code({ keyword, parentSchema, it }) {
        if (parentSchema.if === void 0)
          (0, util_1.checkStrictMode)(it, `"${keyword}" without "if" is ignored`);
      }
    };
    exports.default = def;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/applicator/index.js
var require_applicator = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/applicator/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var additionalItems_1 = require_additionalItems();
    var prefixItems_1 = require_prefixItems();
    var items_1 = require_items();
    var items2020_1 = require_items2020();
    var contains_1 = require_contains();
    var dependencies_1 = require_dependencies();
    var propertyNames_1 = require_propertyNames();
    var additionalProperties_1 = require_additionalProperties();
    var properties_1 = require_properties();
    var patternProperties_1 = require_patternProperties();
    var not_1 = require_not();
    var anyOf_1 = require_anyOf();
    var oneOf_1 = require_oneOf();
    var allOf_1 = require_allOf();
    var if_1 = require_if();
    var thenElse_1 = require_thenElse();
    function getApplicator(draft2020 = false) {
      const applicator = [
        // any
        not_1.default,
        anyOf_1.default,
        oneOf_1.default,
        allOf_1.default,
        if_1.default,
        thenElse_1.default,
        // object
        propertyNames_1.default,
        additionalProperties_1.default,
        dependencies_1.default,
        properties_1.default,
        patternProperties_1.default
      ];
      if (draft2020)
        applicator.push(prefixItems_1.default, items2020_1.default);
      else
        applicator.push(additionalItems_1.default, items_1.default);
      applicator.push(contains_1.default);
      return applicator;
    }
    exports.default = getApplicator;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/format/format.js
var require_format = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/format/format.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var error = {
      message: ({ schemaCode }) => (0, codegen_1.str)`must match format "${schemaCode}"`,
      params: ({ schemaCode }) => (0, codegen_1._)`{format: ${schemaCode}}`
    };
    var def = {
      keyword: "format",
      type: ["number", "string"],
      schemaType: "string",
      $data: true,
      error,
      code(cxt, ruleType) {
        const { gen, data, $data, schema, schemaCode, it } = cxt;
        const { opts, errSchemaPath, schemaEnv, self } = it;
        if (!opts.validateFormats)
          return;
        if ($data)
          validate$DataFormat();
        else
          validateFormat();
        function validate$DataFormat() {
          const fmts = gen.scopeValue("formats", {
            ref: self.formats,
            code: opts.code.formats
          });
          const fDef = gen.const("fDef", (0, codegen_1._)`${fmts}[${schemaCode}]`);
          const fType = gen.let("fType");
          const format = gen.let("format");
          gen.if((0, codegen_1._)`typeof ${fDef} == "object" && !(${fDef} instanceof RegExp)`, () => gen.assign(fType, (0, codegen_1._)`${fDef}.type || "string"`).assign(format, (0, codegen_1._)`${fDef}.validate`), () => gen.assign(fType, (0, codegen_1._)`"string"`).assign(format, fDef));
          cxt.fail$data((0, codegen_1.or)(unknownFmt(), invalidFmt()));
          function unknownFmt() {
            if (opts.strictSchema === false)
              return codegen_1.nil;
            return (0, codegen_1._)`${schemaCode} && !${format}`;
          }
          function invalidFmt() {
            const callFormat = schemaEnv.$async ? (0, codegen_1._)`(${fDef}.async ? await ${format}(${data}) : ${format}(${data}))` : (0, codegen_1._)`${format}(${data})`;
            const validData = (0, codegen_1._)`(typeof ${format} == "function" ? ${callFormat} : ${format}.test(${data}))`;
            return (0, codegen_1._)`${format} && ${format} !== true && ${fType} === ${ruleType} && !${validData}`;
          }
        }
        function validateFormat() {
          const formatDef = self.formats[schema];
          if (!formatDef) {
            unknownFormat();
            return;
          }
          if (formatDef === true)
            return;
          const [fmtType, format, fmtRef] = getFormat(formatDef);
          if (fmtType === ruleType)
            cxt.pass(validCondition());
          function unknownFormat() {
            if (opts.strictSchema === false) {
              self.logger.warn(unknownMsg());
              return;
            }
            throw new Error(unknownMsg());
            function unknownMsg() {
              return `unknown format "${schema}" ignored in schema at path "${errSchemaPath}"`;
            }
          }
          function getFormat(fmtDef) {
            const code = fmtDef instanceof RegExp ? (0, codegen_1.regexpCode)(fmtDef) : opts.code.formats ? (0, codegen_1._)`${opts.code.formats}${(0, codegen_1.getProperty)(schema)}` : void 0;
            const fmt = gen.scopeValue("formats", { key: schema, ref: fmtDef, code });
            if (typeof fmtDef == "object" && !(fmtDef instanceof RegExp)) {
              return [fmtDef.type || "string", fmtDef.validate, (0, codegen_1._)`${fmt}.validate`];
            }
            return ["string", fmtDef, fmt];
          }
          function validCondition() {
            if (typeof formatDef == "object" && !(formatDef instanceof RegExp) && formatDef.async) {
              if (!schemaEnv.$async)
                throw new Error("async format in sync schema");
              return (0, codegen_1._)`await ${fmtRef}(${data})`;
            }
            return typeof format == "function" ? (0, codegen_1._)`${fmtRef}(${data})` : (0, codegen_1._)`${fmtRef}.test(${data})`;
          }
        }
      }
    };
    exports.default = def;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/format/index.js
var require_format2 = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/format/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var format_1 = require_format();
    var format = [format_1.default];
    exports.default = format;
  }
});

// node_modules/.pnpm/ajv-draft-04@1.0.0_ajv@8.17.1/node_modules/ajv-draft-04/dist/vocabulary/draft4.js
var require_draft4 = __commonJS({
  "node_modules/.pnpm/ajv-draft-04@1.0.0_ajv@8.17.1/node_modules/ajv-draft-04/dist/vocabulary/draft4.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require_core2();
    var validation_1 = require_validation();
    var applicator_1 = require_applicator();
    var format_1 = require_format2();
    var metadataVocabulary = ["title", "description", "default"];
    var draft4Vocabularies = [
      core_1.default,
      validation_1.default,
      applicator_1.default(),
      format_1.default,
      metadataVocabulary
    ];
    exports.default = draft4Vocabularies;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/discriminator/types.js
var require_types = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/discriminator/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DiscrError = void 0;
    var DiscrError;
    (function(DiscrError2) {
      DiscrError2["Tag"] = "tag";
      DiscrError2["Mapping"] = "mapping";
    })(DiscrError || (exports.DiscrError = DiscrError = {}));
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/discriminator/index.js
var require_discriminator = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/discriminator/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var types_1 = require_types();
    var compile_1 = require_compile();
    var ref_error_1 = require_ref_error();
    var util_1 = require_util();
    var error = {
      message: ({ params: { discrError, tagName } }) => discrError === types_1.DiscrError.Tag ? `tag "${tagName}" must be string` : `value of tag "${tagName}" must be in oneOf`,
      params: ({ params: { discrError, tag, tagName } }) => (0, codegen_1._)`{error: ${discrError}, tag: ${tagName}, tagValue: ${tag}}`
    };
    var def = {
      keyword: "discriminator",
      type: "object",
      schemaType: "object",
      error,
      code(cxt) {
        const { gen, data, schema, parentSchema, it } = cxt;
        const { oneOf } = parentSchema;
        if (!it.opts.discriminator) {
          throw new Error("discriminator: requires discriminator option");
        }
        const tagName = schema.propertyName;
        if (typeof tagName != "string")
          throw new Error("discriminator: requires propertyName");
        if (schema.mapping)
          throw new Error("discriminator: mapping is not supported");
        if (!oneOf)
          throw new Error("discriminator: requires oneOf keyword");
        const valid = gen.let("valid", false);
        const tag = gen.const("tag", (0, codegen_1._)`${data}${(0, codegen_1.getProperty)(tagName)}`);
        gen.if((0, codegen_1._)`typeof ${tag} == "string"`, () => validateMapping(), () => cxt.error(false, { discrError: types_1.DiscrError.Tag, tag, tagName }));
        cxt.ok(valid);
        function validateMapping() {
          const mapping = getMapping();
          gen.if(false);
          for (const tagValue in mapping) {
            gen.elseIf((0, codegen_1._)`${tag} === ${tagValue}`);
            gen.assign(valid, applyTagSchema(mapping[tagValue]));
          }
          gen.else();
          cxt.error(false, { discrError: types_1.DiscrError.Mapping, tag, tagName });
          gen.endIf();
        }
        function applyTagSchema(schemaProp) {
          const _valid = gen.name("valid");
          const schCxt = cxt.subschema({ keyword: "oneOf", schemaProp }, _valid);
          cxt.mergeEvaluated(schCxt, codegen_1.Name);
          return _valid;
        }
        function getMapping() {
          var _a;
          const oneOfMapping = {};
          const topRequired = hasRequired(parentSchema);
          let tagRequired = true;
          for (let i2 = 0; i2 < oneOf.length; i2++) {
            let sch = oneOf[i2];
            if ((sch === null || sch === void 0 ? void 0 : sch.$ref) && !(0, util_1.schemaHasRulesButRef)(sch, it.self.RULES)) {
              const ref2 = sch.$ref;
              sch = compile_1.resolveRef.call(it.self, it.schemaEnv.root, it.baseId, ref2);
              if (sch instanceof compile_1.SchemaEnv)
                sch = sch.schema;
              if (sch === void 0)
                throw new ref_error_1.default(it.opts.uriResolver, it.baseId, ref2);
            }
            const propSch = (_a = sch === null || sch === void 0 ? void 0 : sch.properties) === null || _a === void 0 ? void 0 : _a[tagName];
            if (typeof propSch != "object") {
              throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${tagName}"`);
            }
            tagRequired = tagRequired && (topRequired || hasRequired(sch));
            addMappings(propSch, i2);
          }
          if (!tagRequired)
            throw new Error(`discriminator: "${tagName}" must be required`);
          return oneOfMapping;
          function hasRequired({ required }) {
            return Array.isArray(required) && required.includes(tagName);
          }
          function addMappings(sch, i2) {
            if (sch.const) {
              addMapping(sch.const, i2);
            } else if (sch.enum) {
              for (const tagValue of sch.enum) {
                addMapping(tagValue, i2);
              }
            } else {
              throw new Error(`discriminator: "properties/${tagName}" must have "const" or "enum"`);
            }
          }
          function addMapping(tagValue, i2) {
            if (typeof tagValue != "string" || tagValue in oneOfMapping) {
              throw new Error(`discriminator: "${tagName}" values must be unique strings`);
            }
            oneOfMapping[tagValue] = i2;
          }
        }
      }
    };
    exports.default = def;
  }
});

// node_modules/.pnpm/ajv-draft-04@1.0.0_ajv@8.17.1/node_modules/ajv-draft-04/dist/refs/json-schema-draft-04.json
var require_json_schema_draft_04 = __commonJS({
  "node_modules/.pnpm/ajv-draft-04@1.0.0_ajv@8.17.1/node_modules/ajv-draft-04/dist/refs/json-schema-draft-04.json"(exports, module) {
    module.exports = {
      id: "http://json-schema.org/draft-04/schema#",
      $schema: "http://json-schema.org/draft-04/schema#",
      description: "Core schema meta-schema",
      definitions: {
        schemaArray: {
          type: "array",
          minItems: 1,
          items: { $ref: "#" }
        },
        positiveInteger: {
          type: "integer",
          minimum: 0
        },
        positiveIntegerDefault0: {
          allOf: [{ $ref: "#/definitions/positiveInteger" }, { default: 0 }]
        },
        simpleTypes: {
          enum: ["array", "boolean", "integer", "null", "number", "object", "string"]
        },
        stringArray: {
          type: "array",
          items: { type: "string" },
          minItems: 1,
          uniqueItems: true
        }
      },
      type: "object",
      properties: {
        id: {
          type: "string",
          format: "uri"
        },
        $schema: {
          type: "string",
          format: "uri"
        },
        title: {
          type: "string"
        },
        description: {
          type: "string"
        },
        default: {},
        multipleOf: {
          type: "number",
          minimum: 0,
          exclusiveMinimum: true
        },
        maximum: {
          type: "number"
        },
        exclusiveMaximum: {
          type: "boolean",
          default: false
        },
        minimum: {
          type: "number"
        },
        exclusiveMinimum: {
          type: "boolean",
          default: false
        },
        maxLength: { $ref: "#/definitions/positiveInteger" },
        minLength: { $ref: "#/definitions/positiveIntegerDefault0" },
        pattern: {
          type: "string",
          format: "regex"
        },
        additionalItems: {
          anyOf: [{ type: "boolean" }, { $ref: "#" }],
          default: {}
        },
        items: {
          anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }],
          default: {}
        },
        maxItems: { $ref: "#/definitions/positiveInteger" },
        minItems: { $ref: "#/definitions/positiveIntegerDefault0" },
        uniqueItems: {
          type: "boolean",
          default: false
        },
        maxProperties: { $ref: "#/definitions/positiveInteger" },
        minProperties: { $ref: "#/definitions/positiveIntegerDefault0" },
        required: { $ref: "#/definitions/stringArray" },
        additionalProperties: {
          anyOf: [{ type: "boolean" }, { $ref: "#" }],
          default: {}
        },
        definitions: {
          type: "object",
          additionalProperties: { $ref: "#" },
          default: {}
        },
        properties: {
          type: "object",
          additionalProperties: { $ref: "#" },
          default: {}
        },
        patternProperties: {
          type: "object",
          additionalProperties: { $ref: "#" },
          default: {}
        },
        dependencies: {
          type: "object",
          additionalProperties: {
            anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }]
          }
        },
        enum: {
          type: "array",
          minItems: 1,
          uniqueItems: true
        },
        type: {
          anyOf: [
            { $ref: "#/definitions/simpleTypes" },
            {
              type: "array",
              items: { $ref: "#/definitions/simpleTypes" },
              minItems: 1,
              uniqueItems: true
            }
          ]
        },
        allOf: { $ref: "#/definitions/schemaArray" },
        anyOf: { $ref: "#/definitions/schemaArray" },
        oneOf: { $ref: "#/definitions/schemaArray" },
        not: { $ref: "#" }
      },
      dependencies: {
        exclusiveMaximum: ["maximum"],
        exclusiveMinimum: ["minimum"]
      },
      default: {}
    };
  }
});

// node_modules/.pnpm/ajv-draft-04@1.0.0_ajv@8.17.1/node_modules/ajv-draft-04/dist/index.js
var require_dist = __commonJS({
  "node_modules/.pnpm/ajv-draft-04@1.0.0_ajv@8.17.1/node_modules/ajv-draft-04/dist/index.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CodeGen = exports.Name = exports.nil = exports.stringify = exports.str = exports._ = exports.KeywordCxt = void 0;
    var core_1 = require_core();
    var draft4_1 = require_draft4();
    var discriminator_1 = require_discriminator();
    var draft4MetaSchema = require_json_schema_draft_04();
    var META_SUPPORT_DATA = ["/properties"];
    var META_SCHEMA_ID = "http://json-schema.org/draft-04/schema";
    var Ajv = class extends core_1.default {
      constructor(opts = {}) {
        super({
          ...opts,
          schemaId: "id"
        });
      }
      _addVocabularies() {
        super._addVocabularies();
        draft4_1.default.forEach((v2) => this.addVocabulary(v2));
        if (this.opts.discriminator)
          this.addKeyword(discriminator_1.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        if (!this.opts.meta)
          return;
        const metaSchema = this.opts.$data ? this.$dataMetaSchema(draft4MetaSchema, META_SUPPORT_DATA) : draft4MetaSchema;
        this.addMetaSchema(metaSchema, META_SCHEMA_ID, false);
        this.refs["http://json-schema.org/schema"] = META_SCHEMA_ID;
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(META_SCHEMA_ID) ? META_SCHEMA_ID : void 0);
      }
    };
    module.exports = exports = Ajv;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Ajv;
    var core_2 = require_core();
    Object.defineProperty(exports, "KeywordCxt", { enumerable: true, get: function() {
      return core_2.KeywordCxt;
    } });
    var core_3 = require_core();
    Object.defineProperty(exports, "_", { enumerable: true, get: function() {
      return core_3._;
    } });
    Object.defineProperty(exports, "str", { enumerable: true, get: function() {
      return core_3.str;
    } });
    Object.defineProperty(exports, "stringify", { enumerable: true, get: function() {
      return core_3.stringify;
    } });
    Object.defineProperty(exports, "nil", { enumerable: true, get: function() {
      return core_3.nil;
    } });
    Object.defineProperty(exports, "Name", { enumerable: true, get: function() {
      return core_3.Name;
    } });
    Object.defineProperty(exports, "CodeGen", { enumerable: true, get: function() {
      return core_3.CodeGen;
    } });
  }
});

// node_modules/.pnpm/ajv-formats@3.0.1_ajv@8.17.1/node_modules/ajv-formats/dist/formats.js
var require_formats = __commonJS({
  "node_modules/.pnpm/ajv-formats@3.0.1_ajv@8.17.1/node_modules/ajv-formats/dist/formats.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.formatNames = exports.fastFormats = exports.fullFormats = void 0;
    function fmtDef(validate2, compare) {
      return { validate: validate2, compare };
    }
    exports.fullFormats = {
      // date: http://tools.ietf.org/html/rfc3339#section-5.6
      date: fmtDef(date, compareDate),
      // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
      time: fmtDef(getTime(true), compareTime),
      "date-time": fmtDef(getDateTime(true), compareDateTime),
      "iso-time": fmtDef(getTime(), compareIsoTime),
      "iso-date-time": fmtDef(getDateTime(), compareIsoDateTime),
      // duration: https://tools.ietf.org/html/rfc3339#appendix-A
      duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
      uri,
      "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
      // uri-template: https://tools.ietf.org/html/rfc6570
      "uri-template": /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
      // For the source: https://gist.github.com/dperini/729294
      // For test cases: https://mathiasbynens.be/demo/url-regex
      url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,
      email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
      hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
      // optimized https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9780596802837/ch07s16.html
      ipv4: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/,
      ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
      regex,
      // uuid: http://tools.ietf.org/html/rfc4122
      uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
      // JSON-pointer: https://tools.ietf.org/html/rfc6901
      // uri fragment: https://tools.ietf.org/html/rfc3986#appendix-A
      "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/,
      "json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
      // relative JSON-pointer: http://tools.ietf.org/html/draft-luff-relative-json-pointer-00
      "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
      // the following formats are used by the openapi specification: https://spec.openapis.org/oas/v3.0.0#data-types
      // byte: https://github.com/miguelmota/is-base64
      byte,
      // signed 32 bit integer
      int32: { type: "number", validate: validateInt32 },
      // signed 64 bit integer
      int64: { type: "number", validate: validateInt64 },
      // C-type float
      float: { type: "number", validate: validateNumber },
      // C-type double
      double: { type: "number", validate: validateNumber },
      // hint to the UI to hide input strings
      password: true,
      // unchecked string payload
      binary: true
    };
    exports.fastFormats = {
      ...exports.fullFormats,
      date: fmtDef(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, compareDate),
      time: fmtDef(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, compareTime),
      "date-time": fmtDef(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, compareDateTime),
      "iso-time": fmtDef(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, compareIsoTime),
      "iso-date-time": fmtDef(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, compareIsoDateTime),
      // uri: https://github.com/mafintosh/is-my-json-valid/blob/master/formats.js
      uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
      "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
      // email (sources from jsen validator):
      // http://stackoverflow.com/questions/201323/using-a-regular-expression-to-validate-an-email-address#answer-8829363
      // http://www.w3.org/TR/html5/forms.html#valid-e-mail-address (search for 'wilful violation')
      email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i
    };
    exports.formatNames = Object.keys(exports.fullFormats);
    function isLeapYear(year) {
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    }
    var DATE = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
    var DAYS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function date(str) {
      const matches = DATE.exec(str);
      if (!matches)
        return false;
      const year = +matches[1];
      const month = +matches[2];
      const day = +matches[3];
      return month >= 1 && month <= 12 && day >= 1 && day <= (month === 2 && isLeapYear(year) ? 29 : DAYS[month]);
    }
    function compareDate(d1, d2) {
      if (!(d1 && d2))
        return void 0;
      if (d1 > d2)
        return 1;
      if (d1 < d2)
        return -1;
      return 0;
    }
    var TIME = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
    function getTime(strictTimeZone) {
      return function time(str) {
        const matches = TIME.exec(str);
        if (!matches)
          return false;
        const hr = +matches[1];
        const min = +matches[2];
        const sec = +matches[3];
        const tz = matches[4];
        const tzSign = matches[5] === "-" ? -1 : 1;
        const tzH = +(matches[6] || 0);
        const tzM = +(matches[7] || 0);
        if (tzH > 23 || tzM > 59 || strictTimeZone && !tz)
          return false;
        if (hr <= 23 && min <= 59 && sec < 60)
          return true;
        const utcMin = min - tzM * tzSign;
        const utcHr = hr - tzH * tzSign - (utcMin < 0 ? 1 : 0);
        return (utcHr === 23 || utcHr === -1) && (utcMin === 59 || utcMin === -1) && sec < 61;
      };
    }
    function compareTime(s1, s22) {
      if (!(s1 && s22))
        return void 0;
      const t1 = (/* @__PURE__ */ new Date("2020-01-01T" + s1)).valueOf();
      const t2 = (/* @__PURE__ */ new Date("2020-01-01T" + s22)).valueOf();
      if (!(t1 && t2))
        return void 0;
      return t1 - t2;
    }
    function compareIsoTime(t1, t2) {
      if (!(t1 && t2))
        return void 0;
      const a1 = TIME.exec(t1);
      const a22 = TIME.exec(t2);
      if (!(a1 && a22))
        return void 0;
      t1 = a1[1] + a1[2] + a1[3];
      t2 = a22[1] + a22[2] + a22[3];
      if (t1 > t2)
        return 1;
      if (t1 < t2)
        return -1;
      return 0;
    }
    var DATE_TIME_SEPARATOR = /t|\s/i;
    function getDateTime(strictTimeZone) {
      const time = getTime(strictTimeZone);
      return function date_time(str) {
        const dateTime = str.split(DATE_TIME_SEPARATOR);
        return dateTime.length === 2 && date(dateTime[0]) && time(dateTime[1]);
      };
    }
    function compareDateTime(dt1, dt2) {
      if (!(dt1 && dt2))
        return void 0;
      const d1 = new Date(dt1).valueOf();
      const d2 = new Date(dt2).valueOf();
      if (!(d1 && d2))
        return void 0;
      return d1 - d2;
    }
    function compareIsoDateTime(dt1, dt2) {
      if (!(dt1 && dt2))
        return void 0;
      const [d1, t1] = dt1.split(DATE_TIME_SEPARATOR);
      const [d2, t2] = dt2.split(DATE_TIME_SEPARATOR);
      const res = compareDate(d1, d2);
      if (res === void 0)
        return void 0;
      return res || compareTime(t1, t2);
    }
    var NOT_URI_FRAGMENT = /\/|:/;
    var URI = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
    function uri(str) {
      return NOT_URI_FRAGMENT.test(str) && URI.test(str);
    }
    var BYTE = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
    function byte(str) {
      BYTE.lastIndex = 0;
      return BYTE.test(str);
    }
    var MIN_INT32 = -(2 ** 31);
    var MAX_INT32 = 2 ** 31 - 1;
    function validateInt32(value) {
      return Number.isInteger(value) && value <= MAX_INT32 && value >= MIN_INT32;
    }
    function validateInt64(value) {
      return Number.isInteger(value);
    }
    function validateNumber() {
      return true;
    }
    var Z_ANCHOR = /[^\\]\\Z/;
    function regex(str) {
      if (Z_ANCHOR.test(str))
        return false;
      try {
        new RegExp(str);
        return true;
      } catch (e) {
        return false;
      }
    }
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/core/id.js
var require_id = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/core/id.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var def = {
      keyword: "id",
      code() {
        throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
      }
    };
    exports.default = def;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/core/index.js
var require_core3 = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/core/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var id_1 = require_id();
    var ref_1 = require_ref();
    var core = [
      "$schema",
      "$id",
      "$defs",
      "$vocabulary",
      { keyword: "$comment" },
      "definitions",
      id_1.default,
      ref_1.default
    ];
    exports.default = core;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/validation/limitNumber.js
var require_limitNumber2 = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/validation/limitNumber.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var ops = codegen_1.operators;
    var KWDs = {
      maximum: { okStr: "<=", ok: ops.LTE, fail: ops.GT },
      minimum: { okStr: ">=", ok: ops.GTE, fail: ops.LT },
      exclusiveMaximum: { okStr: "<", ok: ops.LT, fail: ops.GTE },
      exclusiveMinimum: { okStr: ">", ok: ops.GT, fail: ops.LTE }
    };
    var error = {
      message: ({ keyword, schemaCode }) => (0, codegen_1.str)`must be ${KWDs[keyword].okStr} ${schemaCode}`,
      params: ({ keyword, schemaCode }) => (0, codegen_1._)`{comparison: ${KWDs[keyword].okStr}, limit: ${schemaCode}}`
    };
    var def = {
      keyword: Object.keys(KWDs),
      type: "number",
      schemaType: "number",
      $data: true,
      error,
      code(cxt) {
        const { keyword, data, schemaCode } = cxt;
        cxt.fail$data((0, codegen_1._)`${data} ${KWDs[keyword].fail} ${schemaCode} || isNaN(${data})`);
      }
    };
    exports.default = def;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/validation/index.js
var require_validation2 = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/validation/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var limitNumber_1 = require_limitNumber2();
    var multipleOf_1 = require_multipleOf();
    var limitLength_1 = require_limitLength();
    var pattern_1 = require_pattern();
    var limitProperties_1 = require_limitProperties();
    var required_1 = require_required();
    var limitItems_1 = require_limitItems();
    var uniqueItems_1 = require_uniqueItems();
    var const_1 = require_const();
    var enum_1 = require_enum();
    var validation = [
      // number
      limitNumber_1.default,
      multipleOf_1.default,
      // string
      limitLength_1.default,
      pattern_1.default,
      // object
      limitProperties_1.default,
      required_1.default,
      // array
      limitItems_1.default,
      uniqueItems_1.default,
      // any
      { keyword: "type", schemaType: ["string", "array"] },
      { keyword: "nullable", schemaType: "boolean" },
      const_1.default,
      enum_1.default
    ];
    exports.default = validation;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/metadata.js
var require_metadata = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/metadata.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.contentVocabulary = exports.metadataVocabulary = void 0;
    exports.metadataVocabulary = [
      "title",
      "description",
      "default",
      "deprecated",
      "readOnly",
      "writeOnly",
      "examples"
    ];
    exports.contentVocabulary = [
      "contentMediaType",
      "contentEncoding",
      "contentSchema"
    ];
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/draft7.js
var require_draft7 = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/draft7.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require_core3();
    var validation_1 = require_validation2();
    var applicator_1 = require_applicator();
    var format_1 = require_format2();
    var metadata_1 = require_metadata();
    var draft7Vocabularies = [
      core_1.default,
      validation_1.default,
      (0, applicator_1.default)(),
      format_1.default,
      metadata_1.metadataVocabulary,
      metadata_1.contentVocabulary
    ];
    exports.default = draft7Vocabularies;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/refs/json-schema-draft-07.json
var require_json_schema_draft_07 = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/refs/json-schema-draft-07.json"(exports, module) {
    module.exports = {
      $schema: "http://json-schema.org/draft-07/schema#",
      $id: "http://json-schema.org/draft-07/schema#",
      title: "Core schema meta-schema",
      definitions: {
        schemaArray: {
          type: "array",
          minItems: 1,
          items: { $ref: "#" }
        },
        nonNegativeInteger: {
          type: "integer",
          minimum: 0
        },
        nonNegativeIntegerDefault0: {
          allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }]
        },
        simpleTypes: {
          enum: ["array", "boolean", "integer", "null", "number", "object", "string"]
        },
        stringArray: {
          type: "array",
          items: { type: "string" },
          uniqueItems: true,
          default: []
        }
      },
      type: ["object", "boolean"],
      properties: {
        $id: {
          type: "string",
          format: "uri-reference"
        },
        $schema: {
          type: "string",
          format: "uri"
        },
        $ref: {
          type: "string",
          format: "uri-reference"
        },
        $comment: {
          type: "string"
        },
        title: {
          type: "string"
        },
        description: {
          type: "string"
        },
        default: true,
        readOnly: {
          type: "boolean",
          default: false
        },
        examples: {
          type: "array",
          items: true
        },
        multipleOf: {
          type: "number",
          exclusiveMinimum: 0
        },
        maximum: {
          type: "number"
        },
        exclusiveMaximum: {
          type: "number"
        },
        minimum: {
          type: "number"
        },
        exclusiveMinimum: {
          type: "number"
        },
        maxLength: { $ref: "#/definitions/nonNegativeInteger" },
        minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
        pattern: {
          type: "string",
          format: "regex"
        },
        additionalItems: { $ref: "#" },
        items: {
          anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }],
          default: true
        },
        maxItems: { $ref: "#/definitions/nonNegativeInteger" },
        minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
        uniqueItems: {
          type: "boolean",
          default: false
        },
        contains: { $ref: "#" },
        maxProperties: { $ref: "#/definitions/nonNegativeInteger" },
        minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
        required: { $ref: "#/definitions/stringArray" },
        additionalProperties: { $ref: "#" },
        definitions: {
          type: "object",
          additionalProperties: { $ref: "#" },
          default: {}
        },
        properties: {
          type: "object",
          additionalProperties: { $ref: "#" },
          default: {}
        },
        patternProperties: {
          type: "object",
          additionalProperties: { $ref: "#" },
          propertyNames: { format: "regex" },
          default: {}
        },
        dependencies: {
          type: "object",
          additionalProperties: {
            anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }]
          }
        },
        propertyNames: { $ref: "#" },
        const: true,
        enum: {
          type: "array",
          items: true,
          minItems: 1,
          uniqueItems: true
        },
        type: {
          anyOf: [
            { $ref: "#/definitions/simpleTypes" },
            {
              type: "array",
              items: { $ref: "#/definitions/simpleTypes" },
              minItems: 1,
              uniqueItems: true
            }
          ]
        },
        format: { type: "string" },
        contentMediaType: { type: "string" },
        contentEncoding: { type: "string" },
        if: { $ref: "#" },
        then: { $ref: "#" },
        else: { $ref: "#" },
        allOf: { $ref: "#/definitions/schemaArray" },
        anyOf: { $ref: "#/definitions/schemaArray" },
        oneOf: { $ref: "#/definitions/schemaArray" },
        not: { $ref: "#" }
      },
      default: true
    };
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/ajv.js
var require_ajv = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/ajv.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MissingRefError = exports.ValidationError = exports.CodeGen = exports.Name = exports.nil = exports.stringify = exports.str = exports._ = exports.KeywordCxt = exports.Ajv = void 0;
    var core_1 = require_core();
    var draft7_1 = require_draft7();
    var discriminator_1 = require_discriminator();
    var draft7MetaSchema = require_json_schema_draft_07();
    var META_SUPPORT_DATA = ["/properties"];
    var META_SCHEMA_ID = "http://json-schema.org/draft-07/schema";
    var Ajv = class extends core_1.default {
      _addVocabularies() {
        super._addVocabularies();
        draft7_1.default.forEach((v2) => this.addVocabulary(v2));
        if (this.opts.discriminator)
          this.addKeyword(discriminator_1.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        if (!this.opts.meta)
          return;
        const metaSchema = this.opts.$data ? this.$dataMetaSchema(draft7MetaSchema, META_SUPPORT_DATA) : draft7MetaSchema;
        this.addMetaSchema(metaSchema, META_SCHEMA_ID, false);
        this.refs["http://json-schema.org/schema"] = META_SCHEMA_ID;
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(META_SCHEMA_ID) ? META_SCHEMA_ID : void 0);
      }
    };
    exports.Ajv = Ajv;
    module.exports = exports = Ajv;
    module.exports.Ajv = Ajv;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Ajv;
    var validate_1 = require_validate();
    Object.defineProperty(exports, "KeywordCxt", { enumerable: true, get: function() {
      return validate_1.KeywordCxt;
    } });
    var codegen_1 = require_codegen();
    Object.defineProperty(exports, "_", { enumerable: true, get: function() {
      return codegen_1._;
    } });
    Object.defineProperty(exports, "str", { enumerable: true, get: function() {
      return codegen_1.str;
    } });
    Object.defineProperty(exports, "stringify", { enumerable: true, get: function() {
      return codegen_1.stringify;
    } });
    Object.defineProperty(exports, "nil", { enumerable: true, get: function() {
      return codegen_1.nil;
    } });
    Object.defineProperty(exports, "Name", { enumerable: true, get: function() {
      return codegen_1.Name;
    } });
    Object.defineProperty(exports, "CodeGen", { enumerable: true, get: function() {
      return codegen_1.CodeGen;
    } });
    var validation_error_1 = require_validation_error();
    Object.defineProperty(exports, "ValidationError", { enumerable: true, get: function() {
      return validation_error_1.default;
    } });
    var ref_error_1 = require_ref_error();
    Object.defineProperty(exports, "MissingRefError", { enumerable: true, get: function() {
      return ref_error_1.default;
    } });
  }
});

// node_modules/.pnpm/ajv-formats@3.0.1_ajv@8.17.1/node_modules/ajv-formats/dist/limit.js
var require_limit = __commonJS({
  "node_modules/.pnpm/ajv-formats@3.0.1_ajv@8.17.1/node_modules/ajv-formats/dist/limit.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.formatLimitDefinition = void 0;
    var ajv_1 = require_ajv();
    var codegen_1 = require_codegen();
    var ops = codegen_1.operators;
    var KWDs = {
      formatMaximum: { okStr: "<=", ok: ops.LTE, fail: ops.GT },
      formatMinimum: { okStr: ">=", ok: ops.GTE, fail: ops.LT },
      formatExclusiveMaximum: { okStr: "<", ok: ops.LT, fail: ops.GTE },
      formatExclusiveMinimum: { okStr: ">", ok: ops.GT, fail: ops.LTE }
    };
    var error = {
      message: ({ keyword, schemaCode }) => (0, codegen_1.str)`should be ${KWDs[keyword].okStr} ${schemaCode}`,
      params: ({ keyword, schemaCode }) => (0, codegen_1._)`{comparison: ${KWDs[keyword].okStr}, limit: ${schemaCode}}`
    };
    exports.formatLimitDefinition = {
      keyword: Object.keys(KWDs),
      type: "string",
      schemaType: "string",
      $data: true,
      error,
      code(cxt) {
        const { gen, data, schemaCode, keyword, it } = cxt;
        const { opts, self } = it;
        if (!opts.validateFormats)
          return;
        const fCxt = new ajv_1.KeywordCxt(it, self.RULES.all.format.definition, "format");
        if (fCxt.$data)
          validate$DataFormat();
        else
          validateFormat();
        function validate$DataFormat() {
          const fmts = gen.scopeValue("formats", {
            ref: self.formats,
            code: opts.code.formats
          });
          const fmt = gen.const("fmt", (0, codegen_1._)`${fmts}[${fCxt.schemaCode}]`);
          cxt.fail$data((0, codegen_1.or)((0, codegen_1._)`typeof ${fmt} != "object"`, (0, codegen_1._)`${fmt} instanceof RegExp`, (0, codegen_1._)`typeof ${fmt}.compare != "function"`, compareCode(fmt)));
        }
        function validateFormat() {
          const format = fCxt.schema;
          const fmtDef = self.formats[format];
          if (!fmtDef || fmtDef === true)
            return;
          if (typeof fmtDef != "object" || fmtDef instanceof RegExp || typeof fmtDef.compare != "function") {
            throw new Error(`"${keyword}": format "${format}" does not define "compare" function`);
          }
          const fmt = gen.scopeValue("formats", {
            key: format,
            ref: fmtDef,
            code: opts.code.formats ? (0, codegen_1._)`${opts.code.formats}${(0, codegen_1.getProperty)(format)}` : void 0
          });
          cxt.fail$data(compareCode(fmt));
        }
        function compareCode(fmt) {
          return (0, codegen_1._)`${fmt}.compare(${data}, ${schemaCode}) ${KWDs[keyword].fail} 0`;
        }
      },
      dependencies: ["format"]
    };
    var formatLimitPlugin = (ajv) => {
      ajv.addKeyword(exports.formatLimitDefinition);
      return ajv;
    };
    exports.default = formatLimitPlugin;
  }
});

// node_modules/.pnpm/ajv-formats@3.0.1_ajv@8.17.1/node_modules/ajv-formats/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/.pnpm/ajv-formats@3.0.1_ajv@8.17.1/node_modules/ajv-formats/dist/index.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var formats_1 = require_formats();
    var limit_1 = require_limit();
    var codegen_1 = require_codegen();
    var fullName = new codegen_1.Name("fullFormats");
    var fastName = new codegen_1.Name("fastFormats");
    var formatsPlugin = (ajv, opts = { keywords: true }) => {
      if (Array.isArray(opts)) {
        addFormats2(ajv, opts, formats_1.fullFormats, fullName);
        return ajv;
      }
      const [formats, exportName] = opts.mode === "fast" ? [formats_1.fastFormats, fastName] : [formats_1.fullFormats, fullName];
      const list = opts.formats || formats_1.formatNames;
      addFormats2(ajv, list, formats, exportName);
      if (opts.keywords)
        (0, limit_1.default)(ajv);
      return ajv;
    };
    formatsPlugin.get = (name, mode = "full") => {
      const formats = mode === "fast" ? formats_1.fastFormats : formats_1.fullFormats;
      const f2 = formats[name];
      if (!f2)
        throw new Error(`Unknown format "${name}"`);
      return f2;
    };
    function addFormats2(ajv, list, fs, exportName) {
      var _a;
      var _b;
      (_a = (_b = ajv.opts.code).formats) !== null && _a !== void 0 ? _a : _b.formats = (0, codegen_1._)`require("ajv-formats/dist/formats").${exportName}`;
      for (const f2 of list)
        ajv.addFormat(f2, fs[f2]);
    }
    module.exports = exports = formatsPlugin;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = formatsPlugin;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/dynamic/dynamicAnchor.js
var require_dynamicAnchor = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/dynamic/dynamicAnchor.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.dynamicAnchor = void 0;
    var codegen_1 = require_codegen();
    var names_1 = require_names();
    var compile_1 = require_compile();
    var ref_1 = require_ref();
    var def = {
      keyword: "$dynamicAnchor",
      schemaType: "string",
      code: (cxt) => dynamicAnchor(cxt, cxt.schema)
    };
    function dynamicAnchor(cxt, anchor) {
      const { gen, it } = cxt;
      it.schemaEnv.root.dynamicAnchors[anchor] = true;
      const v2 = (0, codegen_1._)`${names_1.default.dynamicAnchors}${(0, codegen_1.getProperty)(anchor)}`;
      const validate2 = it.errSchemaPath === "#" ? it.validateName : _getValidate(cxt);
      gen.if((0, codegen_1._)`!${v2}`, () => gen.assign(v2, validate2));
    }
    exports.dynamicAnchor = dynamicAnchor;
    function _getValidate(cxt) {
      const { schemaEnv, schema, self } = cxt.it;
      const { root, baseId, localRefs, meta } = schemaEnv.root;
      const { schemaId } = self.opts;
      const sch = new compile_1.SchemaEnv({ schema, schemaId, root, baseId, localRefs, meta });
      compile_1.compileSchema.call(self, sch);
      return (0, ref_1.getValidate)(cxt, sch);
    }
    exports.default = def;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/dynamic/dynamicRef.js
var require_dynamicRef = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/dynamic/dynamicRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.dynamicRef = void 0;
    var codegen_1 = require_codegen();
    var names_1 = require_names();
    var ref_1 = require_ref();
    var def = {
      keyword: "$dynamicRef",
      schemaType: "string",
      code: (cxt) => dynamicRef(cxt, cxt.schema)
    };
    function dynamicRef(cxt, ref2) {
      const { gen, keyword, it } = cxt;
      if (ref2[0] !== "#")
        throw new Error(`"${keyword}" only supports hash fragment reference`);
      const anchor = ref2.slice(1);
      if (it.allErrors) {
        _dynamicRef();
      } else {
        const valid = gen.let("valid", false);
        _dynamicRef(valid);
        cxt.ok(valid);
      }
      function _dynamicRef(valid) {
        if (it.schemaEnv.root.dynamicAnchors[anchor]) {
          const v2 = gen.let("_v", (0, codegen_1._)`${names_1.default.dynamicAnchors}${(0, codegen_1.getProperty)(anchor)}`);
          gen.if(v2, _callRef(v2, valid), _callRef(it.validateName, valid));
        } else {
          _callRef(it.validateName, valid)();
        }
      }
      function _callRef(validate2, valid) {
        return valid ? () => gen.block(() => {
          (0, ref_1.callRef)(cxt, validate2);
          gen.let(valid, true);
        }) : () => (0, ref_1.callRef)(cxt, validate2);
      }
    }
    exports.dynamicRef = dynamicRef;
    exports.default = def;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/dynamic/recursiveAnchor.js
var require_recursiveAnchor = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/dynamic/recursiveAnchor.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var dynamicAnchor_1 = require_dynamicAnchor();
    var util_1 = require_util();
    var def = {
      keyword: "$recursiveAnchor",
      schemaType: "boolean",
      code(cxt) {
        if (cxt.schema)
          (0, dynamicAnchor_1.dynamicAnchor)(cxt, "");
        else
          (0, util_1.checkStrictMode)(cxt.it, "$recursiveAnchor: false is ignored");
      }
    };
    exports.default = def;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/dynamic/recursiveRef.js
var require_recursiveRef = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/dynamic/recursiveRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var dynamicRef_1 = require_dynamicRef();
    var def = {
      keyword: "$recursiveRef",
      schemaType: "string",
      code: (cxt) => (0, dynamicRef_1.dynamicRef)(cxt, cxt.schema)
    };
    exports.default = def;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/dynamic/index.js
var require_dynamic = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/dynamic/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var dynamicAnchor_1 = require_dynamicAnchor();
    var dynamicRef_1 = require_dynamicRef();
    var recursiveAnchor_1 = require_recursiveAnchor();
    var recursiveRef_1 = require_recursiveRef();
    var dynamic = [dynamicAnchor_1.default, dynamicRef_1.default, recursiveAnchor_1.default, recursiveRef_1.default];
    exports.default = dynamic;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/validation/dependentRequired.js
var require_dependentRequired = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/validation/dependentRequired.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var dependencies_1 = require_dependencies();
    var def = {
      keyword: "dependentRequired",
      type: "object",
      schemaType: "object",
      error: dependencies_1.error,
      code: (cxt) => (0, dependencies_1.validatePropertyDeps)(cxt)
    };
    exports.default = def;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/applicator/dependentSchemas.js
var require_dependentSchemas = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/applicator/dependentSchemas.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var dependencies_1 = require_dependencies();
    var def = {
      keyword: "dependentSchemas",
      type: "object",
      schemaType: "object",
      code: (cxt) => (0, dependencies_1.validateSchemaDeps)(cxt)
    };
    exports.default = def;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/validation/limitContains.js
var require_limitContains = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/validation/limitContains.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var util_1 = require_util();
    var def = {
      keyword: ["maxContains", "minContains"],
      type: "array",
      schemaType: "number",
      code({ keyword, parentSchema, it }) {
        if (parentSchema.contains === void 0) {
          (0, util_1.checkStrictMode)(it, `"${keyword}" without "contains" is ignored`);
        }
      }
    };
    exports.default = def;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/next.js
var require_next = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/next.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var dependentRequired_1 = require_dependentRequired();
    var dependentSchemas_1 = require_dependentSchemas();
    var limitContains_1 = require_limitContains();
    var next = [dependentRequired_1.default, dependentSchemas_1.default, limitContains_1.default];
    exports.default = next;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/unevaluated/unevaluatedProperties.js
var require_unevaluatedProperties = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/unevaluated/unevaluatedProperties.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var names_1 = require_names();
    var error = {
      message: "must NOT have unevaluated properties",
      params: ({ params }) => (0, codegen_1._)`{unevaluatedProperty: ${params.unevaluatedProperty}}`
    };
    var def = {
      keyword: "unevaluatedProperties",
      type: "object",
      schemaType: ["boolean", "object"],
      trackErrors: true,
      error,
      code(cxt) {
        const { gen, schema, data, errsCount, it } = cxt;
        if (!errsCount)
          throw new Error("ajv implementation error");
        const { allErrors, props } = it;
        if (props instanceof codegen_1.Name) {
          gen.if((0, codegen_1._)`${props} !== true`, () => gen.forIn("key", data, (key) => gen.if(unevaluatedDynamic(props, key), () => unevaluatedPropCode(key))));
        } else if (props !== true) {
          gen.forIn("key", data, (key) => props === void 0 ? unevaluatedPropCode(key) : gen.if(unevaluatedStatic(props, key), () => unevaluatedPropCode(key)));
        }
        it.props = true;
        cxt.ok((0, codegen_1._)`${errsCount} === ${names_1.default.errors}`);
        function unevaluatedPropCode(key) {
          if (schema === false) {
            cxt.setParams({ unevaluatedProperty: key });
            cxt.error();
            if (!allErrors)
              gen.break();
            return;
          }
          if (!(0, util_1.alwaysValidSchema)(it, schema)) {
            const valid = gen.name("valid");
            cxt.subschema({
              keyword: "unevaluatedProperties",
              dataProp: key,
              dataPropType: util_1.Type.Str
            }, valid);
            if (!allErrors)
              gen.if((0, codegen_1.not)(valid), () => gen.break());
          }
        }
        function unevaluatedDynamic(evaluatedProps, key) {
          return (0, codegen_1._)`!${evaluatedProps} || !${evaluatedProps}[${key}]`;
        }
        function unevaluatedStatic(evaluatedProps, key) {
          const ps = [];
          for (const p2 in evaluatedProps) {
            if (evaluatedProps[p2] === true)
              ps.push((0, codegen_1._)`${key} !== ${p2}`);
          }
          return (0, codegen_1.and)(...ps);
        }
      }
    };
    exports.default = def;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/unevaluated/unevaluatedItems.js
var require_unevaluatedItems = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/unevaluated/unevaluatedItems.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var codegen_1 = require_codegen();
    var util_1 = require_util();
    var error = {
      message: ({ params: { len } }) => (0, codegen_1.str)`must NOT have more than ${len} items`,
      params: ({ params: { len } }) => (0, codegen_1._)`{limit: ${len}}`
    };
    var def = {
      keyword: "unevaluatedItems",
      type: "array",
      schemaType: ["boolean", "object"],
      error,
      code(cxt) {
        const { gen, schema, data, it } = cxt;
        const items = it.items || 0;
        if (items === true)
          return;
        const len = gen.const("len", (0, codegen_1._)`${data}.length`);
        if (schema === false) {
          cxt.setParams({ len: items });
          cxt.fail((0, codegen_1._)`${len} > ${items}`);
        } else if (typeof schema == "object" && !(0, util_1.alwaysValidSchema)(it, schema)) {
          const valid = gen.var("valid", (0, codegen_1._)`${len} <= ${items}`);
          gen.if((0, codegen_1.not)(valid), () => validateItems(valid, items));
          cxt.ok(valid);
        }
        it.items = true;
        function validateItems(valid, from) {
          gen.forRange("i", from, len, (i2) => {
            cxt.subschema({ keyword: "unevaluatedItems", dataProp: i2, dataPropType: util_1.Type.Num }, valid);
            if (!it.allErrors)
              gen.if((0, codegen_1.not)(valid), () => gen.break());
          });
        }
      }
    };
    exports.default = def;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/unevaluated/index.js
var require_unevaluated = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/unevaluated/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var unevaluatedProperties_1 = require_unevaluatedProperties();
    var unevaluatedItems_1 = require_unevaluatedItems();
    var unevaluated = [unevaluatedProperties_1.default, unevaluatedItems_1.default];
    exports.default = unevaluated;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/draft2020.js
var require_draft2020 = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/vocabularies/draft2020.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require_core3();
    var validation_1 = require_validation2();
    var applicator_1 = require_applicator();
    var dynamic_1 = require_dynamic();
    var next_1 = require_next();
    var unevaluated_1 = require_unevaluated();
    var format_1 = require_format2();
    var metadata_1 = require_metadata();
    var draft2020Vocabularies = [
      dynamic_1.default,
      core_1.default,
      validation_1.default,
      (0, applicator_1.default)(true),
      format_1.default,
      metadata_1.metadataVocabulary,
      metadata_1.contentVocabulary,
      next_1.default,
      unevaluated_1.default
    ];
    exports.default = draft2020Vocabularies;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/refs/json-schema-2020-12/schema.json
var require_schema = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/refs/json-schema-2020-12/schema.json"(exports, module) {
    module.exports = {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      $id: "https://json-schema.org/draft/2020-12/schema",
      $vocabulary: {
        "https://json-schema.org/draft/2020-12/vocab/core": true,
        "https://json-schema.org/draft/2020-12/vocab/applicator": true,
        "https://json-schema.org/draft/2020-12/vocab/unevaluated": true,
        "https://json-schema.org/draft/2020-12/vocab/validation": true,
        "https://json-schema.org/draft/2020-12/vocab/meta-data": true,
        "https://json-schema.org/draft/2020-12/vocab/format-annotation": true,
        "https://json-schema.org/draft/2020-12/vocab/content": true
      },
      $dynamicAnchor: "meta",
      title: "Core and Validation specifications meta-schema",
      allOf: [
        { $ref: "meta/core" },
        { $ref: "meta/applicator" },
        { $ref: "meta/unevaluated" },
        { $ref: "meta/validation" },
        { $ref: "meta/meta-data" },
        { $ref: "meta/format-annotation" },
        { $ref: "meta/content" }
      ],
      type: ["object", "boolean"],
      $comment: "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.",
      properties: {
        definitions: {
          $comment: '"definitions" has been replaced by "$defs".',
          type: "object",
          additionalProperties: { $dynamicRef: "#meta" },
          deprecated: true,
          default: {}
        },
        dependencies: {
          $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.',
          type: "object",
          additionalProperties: {
            anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }]
          },
          deprecated: true,
          default: {}
        },
        $recursiveAnchor: {
          $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".',
          $ref: "meta/core#/$defs/anchorString",
          deprecated: true
        },
        $recursiveRef: {
          $comment: '"$recursiveRef" has been replaced by "$dynamicRef".',
          $ref: "meta/core#/$defs/uriReferenceString",
          deprecated: true
        }
      }
    };
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/refs/json-schema-2020-12/meta/applicator.json
var require_applicator2 = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/refs/json-schema-2020-12/meta/applicator.json"(exports, module) {
    module.exports = {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      $id: "https://json-schema.org/draft/2020-12/meta/applicator",
      $vocabulary: {
        "https://json-schema.org/draft/2020-12/vocab/applicator": true
      },
      $dynamicAnchor: "meta",
      title: "Applicator vocabulary meta-schema",
      type: ["object", "boolean"],
      properties: {
        prefixItems: { $ref: "#/$defs/schemaArray" },
        items: { $dynamicRef: "#meta" },
        contains: { $dynamicRef: "#meta" },
        additionalProperties: { $dynamicRef: "#meta" },
        properties: {
          type: "object",
          additionalProperties: { $dynamicRef: "#meta" },
          default: {}
        },
        patternProperties: {
          type: "object",
          additionalProperties: { $dynamicRef: "#meta" },
          propertyNames: { format: "regex" },
          default: {}
        },
        dependentSchemas: {
          type: "object",
          additionalProperties: { $dynamicRef: "#meta" },
          default: {}
        },
        propertyNames: { $dynamicRef: "#meta" },
        if: { $dynamicRef: "#meta" },
        then: { $dynamicRef: "#meta" },
        else: { $dynamicRef: "#meta" },
        allOf: { $ref: "#/$defs/schemaArray" },
        anyOf: { $ref: "#/$defs/schemaArray" },
        oneOf: { $ref: "#/$defs/schemaArray" },
        not: { $dynamicRef: "#meta" }
      },
      $defs: {
        schemaArray: {
          type: "array",
          minItems: 1,
          items: { $dynamicRef: "#meta" }
        }
      }
    };
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/refs/json-schema-2020-12/meta/unevaluated.json
var require_unevaluated2 = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/refs/json-schema-2020-12/meta/unevaluated.json"(exports, module) {
    module.exports = {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      $id: "https://json-schema.org/draft/2020-12/meta/unevaluated",
      $vocabulary: {
        "https://json-schema.org/draft/2020-12/vocab/unevaluated": true
      },
      $dynamicAnchor: "meta",
      title: "Unevaluated applicator vocabulary meta-schema",
      type: ["object", "boolean"],
      properties: {
        unevaluatedItems: { $dynamicRef: "#meta" },
        unevaluatedProperties: { $dynamicRef: "#meta" }
      }
    };
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/refs/json-schema-2020-12/meta/content.json
var require_content = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/refs/json-schema-2020-12/meta/content.json"(exports, module) {
    module.exports = {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      $id: "https://json-schema.org/draft/2020-12/meta/content",
      $vocabulary: {
        "https://json-schema.org/draft/2020-12/vocab/content": true
      },
      $dynamicAnchor: "meta",
      title: "Content vocabulary meta-schema",
      type: ["object", "boolean"],
      properties: {
        contentEncoding: { type: "string" },
        contentMediaType: { type: "string" },
        contentSchema: { $dynamicRef: "#meta" }
      }
    };
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/refs/json-schema-2020-12/meta/core.json
var require_core4 = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/refs/json-schema-2020-12/meta/core.json"(exports, module) {
    module.exports = {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      $id: "https://json-schema.org/draft/2020-12/meta/core",
      $vocabulary: {
        "https://json-schema.org/draft/2020-12/vocab/core": true
      },
      $dynamicAnchor: "meta",
      title: "Core vocabulary meta-schema",
      type: ["object", "boolean"],
      properties: {
        $id: {
          $ref: "#/$defs/uriReferenceString",
          $comment: "Non-empty fragments not allowed.",
          pattern: "^[^#]*#?$"
        },
        $schema: { $ref: "#/$defs/uriString" },
        $ref: { $ref: "#/$defs/uriReferenceString" },
        $anchor: { $ref: "#/$defs/anchorString" },
        $dynamicRef: { $ref: "#/$defs/uriReferenceString" },
        $dynamicAnchor: { $ref: "#/$defs/anchorString" },
        $vocabulary: {
          type: "object",
          propertyNames: { $ref: "#/$defs/uriString" },
          additionalProperties: {
            type: "boolean"
          }
        },
        $comment: {
          type: "string"
        },
        $defs: {
          type: "object",
          additionalProperties: { $dynamicRef: "#meta" }
        }
      },
      $defs: {
        anchorString: {
          type: "string",
          pattern: "^[A-Za-z_][-A-Za-z0-9._]*$"
        },
        uriString: {
          type: "string",
          format: "uri"
        },
        uriReferenceString: {
          type: "string",
          format: "uri-reference"
        }
      }
    };
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/refs/json-schema-2020-12/meta/format-annotation.json
var require_format_annotation = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/refs/json-schema-2020-12/meta/format-annotation.json"(exports, module) {
    module.exports = {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      $id: "https://json-schema.org/draft/2020-12/meta/format-annotation",
      $vocabulary: {
        "https://json-schema.org/draft/2020-12/vocab/format-annotation": true
      },
      $dynamicAnchor: "meta",
      title: "Format vocabulary meta-schema for annotation results",
      type: ["object", "boolean"],
      properties: {
        format: { type: "string" }
      }
    };
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/refs/json-schema-2020-12/meta/meta-data.json
var require_meta_data = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/refs/json-schema-2020-12/meta/meta-data.json"(exports, module) {
    module.exports = {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      $id: "https://json-schema.org/draft/2020-12/meta/meta-data",
      $vocabulary: {
        "https://json-schema.org/draft/2020-12/vocab/meta-data": true
      },
      $dynamicAnchor: "meta",
      title: "Meta-data vocabulary meta-schema",
      type: ["object", "boolean"],
      properties: {
        title: {
          type: "string"
        },
        description: {
          type: "string"
        },
        default: true,
        deprecated: {
          type: "boolean",
          default: false
        },
        readOnly: {
          type: "boolean",
          default: false
        },
        writeOnly: {
          type: "boolean",
          default: false
        },
        examples: {
          type: "array",
          items: true
        }
      }
    };
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/refs/json-schema-2020-12/meta/validation.json
var require_validation3 = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/refs/json-schema-2020-12/meta/validation.json"(exports, module) {
    module.exports = {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      $id: "https://json-schema.org/draft/2020-12/meta/validation",
      $vocabulary: {
        "https://json-schema.org/draft/2020-12/vocab/validation": true
      },
      $dynamicAnchor: "meta",
      title: "Validation vocabulary meta-schema",
      type: ["object", "boolean"],
      properties: {
        type: {
          anyOf: [
            { $ref: "#/$defs/simpleTypes" },
            {
              type: "array",
              items: { $ref: "#/$defs/simpleTypes" },
              minItems: 1,
              uniqueItems: true
            }
          ]
        },
        const: true,
        enum: {
          type: "array",
          items: true
        },
        multipleOf: {
          type: "number",
          exclusiveMinimum: 0
        },
        maximum: {
          type: "number"
        },
        exclusiveMaximum: {
          type: "number"
        },
        minimum: {
          type: "number"
        },
        exclusiveMinimum: {
          type: "number"
        },
        maxLength: { $ref: "#/$defs/nonNegativeInteger" },
        minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" },
        pattern: {
          type: "string",
          format: "regex"
        },
        maxItems: { $ref: "#/$defs/nonNegativeInteger" },
        minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" },
        uniqueItems: {
          type: "boolean",
          default: false
        },
        maxContains: { $ref: "#/$defs/nonNegativeInteger" },
        minContains: {
          $ref: "#/$defs/nonNegativeInteger",
          default: 1
        },
        maxProperties: { $ref: "#/$defs/nonNegativeInteger" },
        minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" },
        required: { $ref: "#/$defs/stringArray" },
        dependentRequired: {
          type: "object",
          additionalProperties: {
            $ref: "#/$defs/stringArray"
          }
        }
      },
      $defs: {
        nonNegativeInteger: {
          type: "integer",
          minimum: 0
        },
        nonNegativeIntegerDefault0: {
          $ref: "#/$defs/nonNegativeInteger",
          default: 0
        },
        simpleTypes: {
          enum: ["array", "boolean", "integer", "null", "number", "object", "string"]
        },
        stringArray: {
          type: "array",
          items: { type: "string" },
          uniqueItems: true,
          default: []
        }
      }
    };
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/refs/json-schema-2020-12/index.js
var require_json_schema_2020_12 = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/refs/json-schema-2020-12/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var metaSchema = require_schema();
    var applicator = require_applicator2();
    var unevaluated = require_unevaluated2();
    var content = require_content();
    var core = require_core4();
    var format = require_format_annotation();
    var metadata = require_meta_data();
    var validation = require_validation3();
    var META_SUPPORT_DATA = ["/properties"];
    function addMetaSchema2020($data) {
      ;
      [
        metaSchema,
        applicator,
        unevaluated,
        content,
        core,
        with$data(this, format),
        metadata,
        with$data(this, validation)
      ].forEach((sch) => this.addMetaSchema(sch, void 0, false));
      return this;
      function with$data(ajv, sch) {
        return $data ? ajv.$dataMetaSchema(sch, META_SUPPORT_DATA) : sch;
      }
    }
    exports.default = addMetaSchema2020;
  }
});

// node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/2020.js
var require__ = __commonJS({
  "node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/2020.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MissingRefError = exports.ValidationError = exports.CodeGen = exports.Name = exports.nil = exports.stringify = exports.str = exports._ = exports.KeywordCxt = exports.Ajv2020 = void 0;
    var core_1 = require_core();
    var draft2020_1 = require_draft2020();
    var discriminator_1 = require_discriminator();
    var json_schema_2020_12_1 = require_json_schema_2020_12();
    var META_SCHEMA_ID = "https://json-schema.org/draft/2020-12/schema";
    var Ajv20202 = class extends core_1.default {
      constructor(opts = {}) {
        super({
          ...opts,
          dynamicRef: true,
          next: true,
          unevaluated: true
        });
      }
      _addVocabularies() {
        super._addVocabularies();
        draft2020_1.default.forEach((v2) => this.addVocabulary(v2));
        if (this.opts.discriminator)
          this.addKeyword(discriminator_1.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        const { $data, meta } = this.opts;
        if (!meta)
          return;
        json_schema_2020_12_1.default.call(this, $data);
        this.refs["http://json-schema.org/schema"] = META_SCHEMA_ID;
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(META_SCHEMA_ID) ? META_SCHEMA_ID : void 0);
      }
    };
    exports.Ajv2020 = Ajv20202;
    module.exports = exports = Ajv20202;
    module.exports.Ajv2020 = Ajv20202;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Ajv20202;
    var validate_1 = require_validate();
    Object.defineProperty(exports, "KeywordCxt", { enumerable: true, get: function() {
      return validate_1.KeywordCxt;
    } });
    var codegen_1 = require_codegen();
    Object.defineProperty(exports, "_", { enumerable: true, get: function() {
      return codegen_1._;
    } });
    Object.defineProperty(exports, "str", { enumerable: true, get: function() {
      return codegen_1.str;
    } });
    Object.defineProperty(exports, "stringify", { enumerable: true, get: function() {
      return codegen_1.stringify;
    } });
    Object.defineProperty(exports, "nil", { enumerable: true, get: function() {
      return codegen_1.nil;
    } });
    Object.defineProperty(exports, "Name", { enumerable: true, get: function() {
      return codegen_1.Name;
    } });
    Object.defineProperty(exports, "CodeGen", { enumerable: true, get: function() {
      return codegen_1.CodeGen;
    } });
    var validation_error_1 = require_validation_error();
    Object.defineProperty(exports, "ValidationError", { enumerable: true, get: function() {
      return validation_error_1.default;
    } });
    var ref_error_1 = require_ref_error();
    Object.defineProperty(exports, "MissingRefError", { enumerable: true, get: function() {
      return ref_error_1.default;
    } });
  }
});

// node_modules/.pnpm/jsonpointer@5.0.1/node_modules/jsonpointer/jsonpointer.js
var require_jsonpointer = __commonJS({
  "node_modules/.pnpm/jsonpointer@5.0.1/node_modules/jsonpointer/jsonpointer.js"(exports) {
    var hasExcape = /~/;
    var escapeMatcher = /~[01]/g;
    function escapeReplacer(m2) {
      switch (m2) {
        case "~1":
          return "/";
        case "~0":
          return "~";
      }
      throw new Error("Invalid tilde escape: " + m2);
    }
    function untilde(str) {
      if (!hasExcape.test(str)) return str;
      return str.replace(escapeMatcher, escapeReplacer);
    }
    function setter(obj, pointer2, value) {
      var part;
      var hasNextPart;
      for (var p2 = 1, len = pointer2.length; p2 < len; ) {
        if (pointer2[p2] === "constructor" || pointer2[p2] === "prototype" || pointer2[p2] === "__proto__") return obj;
        part = untilde(pointer2[p2++]);
        hasNextPart = len > p2;
        if (typeof obj[part] === "undefined") {
          if (Array.isArray(obj) && part === "-") {
            part = obj.length;
          }
          if (hasNextPart) {
            if (pointer2[p2] !== "" && pointer2[p2] < Infinity || pointer2[p2] === "-") obj[part] = [];
            else obj[part] = {};
          }
        }
        if (!hasNextPart) break;
        obj = obj[part];
      }
      var oldValue = obj[part];
      if (value === void 0) delete obj[part];
      else obj[part] = value;
      return oldValue;
    }
    function compilePointer(pointer2) {
      if (typeof pointer2 === "string") {
        pointer2 = pointer2.split("/");
        if (pointer2[0] === "") return pointer2;
        throw new Error("Invalid JSON pointer.");
      } else if (Array.isArray(pointer2)) {
        for (const part of pointer2) {
          if (typeof part !== "string" && typeof part !== "number") {
            throw new Error("Invalid JSON pointer. Must be of type string or number.");
          }
        }
        return pointer2;
      }
      throw new Error("Invalid JSON pointer.");
    }
    function get2(obj, pointer2) {
      if (typeof obj !== "object") throw new Error("Invalid input object.");
      pointer2 = compilePointer(pointer2);
      var len = pointer2.length;
      if (len === 1) return obj;
      for (var p2 = 1; p2 < len; ) {
        obj = obj[untilde(pointer2[p2++])];
        if (len === p2) return obj;
        if (typeof obj !== "object" || obj === null) return void 0;
      }
    }
    function set2(obj, pointer2, value) {
      if (typeof obj !== "object") throw new Error("Invalid input object.");
      pointer2 = compilePointer(pointer2);
      if (pointer2.length === 0) throw new Error("Invalid JSON pointer for set.");
      return setter(obj, pointer2, value);
    }
    function compile(pointer2) {
      var compiled = compilePointer(pointer2);
      return {
        get: function(object2) {
          return get2(object2, compiled);
        },
        set: function(object2, value) {
          return set2(object2, compiled, value);
        }
      };
    }
    exports.get = get2;
    exports.set = set2;
    exports.compile = compile;
  }
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/_virtual/_plugin-vue_export-helper.js
var s = (t2, e) => {
  const o2 = t2.__vccOpts || t2;
  for (const [r4, c2] of e)
    o2[r4] = c2;
  return o2;
};

// node_modules/.pnpm/@scalar+types@0.2.3/node_modules/@scalar/types/dist/legacy/reference-config.js
var XScalarStability = ((XScalarStability2) => {
  XScalarStability2["Deprecated"] = "deprecated";
  XScalarStability2["Experimental"] = "experimental";
  XScalarStability2["Stable"] = "stable";
  return XScalarStability2;
})(XScalarStability || {});

// node_modules/.pnpm/@scalar+helpers@0.0.4/node_modules/@scalar/helpers/dist/object/local-storage.js
var LS_KEYS = {
  COLLECTION: "collection",
  COOKIE: "cookie",
  ENVIRONMENT: "environment",
  REQUEST: "request",
  REQUEST_EXAMPLE: "requestExample",
  SECURITY_SCHEME: "securityScheme",
  SERVER: "server",
  TAG: "tag",
  WORKSPACE: "workspace"
};
var REFERENCE_LS_KEYS = {
  SELECTED_CLIENT: "scalar-reference-selected-client"
};
var CLIENT_LS_KEYS = {
  AUTH: "scalar-client-auth",
  SELECTED_SECURITY_SCHEMES: "scalar-client-selected-security-schemes"
};
var safeLocalStorage = () => typeof window === "undefined" ? {
  getItem: () => null,
  setItem: () => null,
  removeItem: () => null
} : localStorage;

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/libs/errors.js
var r = {
  DEFAULT: "An unknown error has occurred.",
  INVALID_URL: "The URL seems to be invalid. Try adding a valid URL.",
  INVALID_HEADER: "There is an invalid header present, please double check your params.",
  MISSING_FILE: "File uploads are not saved in history, you must re-upload the file.",
  REQUEST_ABORTED: "The request has been cancelled",
  REQUEST_FAILED: "An error occurred while making the request",
  URL_EMPTY: "The address bar input seems to be empty. Try adding a URL."
};
var t = (e, o2 = r.DEFAULT) => (console.error(e), e instanceof Error ? (e.message = n(e.message), e) : typeof e == "string" ? new Error(n(e)) : new Error(o2));
var n = (e) => e === "Failed to execute 'append' on 'FormData': parameter 2 is not of type 'Blob'." ? r.MISSING_FILE : e === "Failed to construct 'URL': Invalid URL" ? r.INVALID_URL : e === "Failed to execute 'fetch' on 'Window': Invalid name" ? r.INVALID_HEADER : e;

// node_modules/.pnpm/@scalar+oas-utils@0.4.6/node_modules/@scalar/oas-utils/dist/entities/shared/utility.js
var selectedSecuritySchemeUidSchema = z.union([
  z.string().brand(),
  z.string().brand().array()
]).array().default([]);

// node_modules/.pnpm/@scalar+oas-utils@0.4.6/node_modules/@scalar/oas-utils/dist/entities/spec/x-scalar-environments.js
var xScalarEnvVarSchema = z.union([
  z.object({
    description: z.string().optional(),
    default: z.string().default("")
  }),
  z.string()
]);
var xScalarEnvironmentSchema = z.object({
  description: z.string().optional(),
  color: z.string().optional(),
  /** A map of variables by name */
  variables: z.record(z.string(), xScalarEnvVarSchema)
});
var xScalarEnvironmentsSchema = z.record(
  /** Name */
  z.string(),
  /** Environment definition */
  xScalarEnvironmentSchema
);

// node_modules/.pnpm/@scalar+oas-utils@0.4.6/node_modules/@scalar/oas-utils/dist/entities/spec/x-scalar-secrets.js
var xScalarSecretVarSchema = z.object({
  description: z.string().optional(),
  example: z.string().optional()
});
var xScalarSecretsSchema = z.record(z.string(), xScalarSecretVarSchema);

// node_modules/.pnpm/@scalar+types@0.2.3/node_modules/@scalar/types/dist/utils/nanoid.js
var nanoidSchema = z.string().min(7).optional().default(() => nanoid());

// node_modules/.pnpm/@scalar+types@0.2.3/node_modules/@scalar/types/dist/entities/security-scheme.js
var commonProps = z.object({
  /* A description for security scheme. CommonMark syntax MAY be used for rich text representation. */
  description: z.string().optional()
});
var extendedSecuritySchema = z.object({
  uid: nanoidSchema.brand(),
  /** The name key that links a security requirement to a security object */
  nameKey: z.string().optional().default("")
});
var securitySchemeApiKeyIn = ["query", "header", "cookie"];
var oasSecuritySchemeApiKey = commonProps.extend({
  type: z.literal("apiKey"),
  /** REQUIRED. The name of the header, query or cookie parameter to be used. */
  name: z.string().optional().default(""),
  /** REQUIRED. The location of the API key. Valid values are "query", "header" or "cookie". */
  in: z.enum(securitySchemeApiKeyIn).optional().default("header").catch("header")
});
var apiKeyValueSchema = z.object({
  value: z.string().default("")
});
var securityApiKeySchema = oasSecuritySchemeApiKey.merge(extendedSecuritySchema).merge(apiKeyValueSchema);
var oasSecuritySchemeHttp = commonProps.extend({
  type: z.literal("http"),
  /**
   * REQUIRED. The name of the HTTP Authorization scheme to be used in the Authorization header as defined in
   * [RFC7235]. The values used SHOULD be registered in the IANA Authentication Scheme registry.
   */
  scheme: z.string().toLowerCase().pipe(z.enum(["basic", "bearer"])).optional().default("basic"),
  /**
   * A hint to the client to identify how the bearer token is formatted.
   * Bearer tokens are usually generated by an authorization server, so
   * this information is primarily for documentation purposes.
   */
  bearerFormat: z.union([z.literal("JWT"), z.string()]).optional().default("JWT")
});
var httpValueSchema = z.object({
  username: z.string().default(""),
  password: z.string().default(""),
  token: z.string().default("")
});
var securityHttpSchema = oasSecuritySchemeHttp.merge(extendedSecuritySchema).merge(httpValueSchema);
var oasSecuritySchemeOpenId = commonProps.extend({
  type: z.literal("openIdConnect"),
  /**
   * REQUIRED. OpenId Connect URL to discover OAuth2 configuration values. This MUST be in the
   * form of a URL. The OpenID Connect standard requires the use of TLS.
   */
  openIdConnectUrl: z.string().optional().default("")
});
var securityOpenIdSchema = oasSecuritySchemeOpenId.merge(extendedSecuritySchema);
var authorizationUrl = z.string().default("");
var tokenUrl = z.string().default("");
var flowsCommon = z.object({
  /**
   * The URL to be used for obtaining refresh tokens. This MUST be in the form of a
   * URL. The OAuth2 standard requires the use of TLS.
   */
  "refreshUrl": z.string().optional().default(""),
  /**
   * REQUIRED. The available scopes for the OAuth2 security scheme. A map
   * between the scope name and a short description for it. The map MAY be empty.
   */
  "scopes": z.record(z.string(), z.string().optional().default("")).optional().default({}).catch({}),
  "selectedScopes": z.array(z.string()).optional().default([]),
  /** Extension to save the client Id associated with an oauth flow */
  "x-scalar-client-id": z.string().optional().default(""),
  /** The auth token */
  "token": z.string().default(""),
  /** Additional query parameters for the OAuth authorization request. Example: { prompt: 'consent', audience: 'scalar' }. */
  "x-scalar-security-query": z.record(z.string(), z.string()).optional()
});
var defaultRedirectUri = typeof window !== "undefined" ? window.location.origin + window.location.pathname : "";
var pkceOptions = ["SHA-256", "plain", "no"];
var oasSecuritySchemeOauth2 = commonProps.extend({
  type: z.literal("oauth2"),
  /** The default scopes for the oauth flow */
  "x-default-scopes": z.string().or(z.array(z.string())).optional(),
  /** REQUIRED. An object containing configuration information for the flow types supported. */
  flows: z.object({
    /** Configuration for the OAuth Implicit flow */
    implicit: flowsCommon.extend({
      "type": z.literal("implicit").default("implicit"),
      authorizationUrl,
      "x-scalar-redirect-uri": z.string().optional().default(defaultRedirectUri)
    }),
    /** Configuration for the OAuth Resource Owner Password flow */
    password: flowsCommon.extend({
      type: z.literal("password").default("password"),
      tokenUrl,
      clientSecret: z.string().default(""),
      username: z.string().default(""),
      password: z.string().default("")
    }),
    /** Configuration for the OAuth Client Credentials flow. Previously called application in OpenAPI 2.0. */
    clientCredentials: flowsCommon.extend({
      type: z.literal("clientCredentials").default("clientCredentials"),
      tokenUrl,
      clientSecret: z.string().default("")
    }),
    /** Configuration for the OAuth Authorization Code flow. Previously called accessCode in OpenAPI 2.0.*/
    authorizationCode: flowsCommon.extend({
      "type": z.literal("authorizationCode").default("authorizationCode"),
      authorizationUrl,
      "x-usePkce": z.enum(pkceOptions).optional().default("no"),
      "x-scalar-redirect-uri": z.string().optional().default(defaultRedirectUri),
      tokenUrl,
      "clientSecret": z.string().default("")
    })
  }).partial().default({
    implicit: { type: "implicit", authorizationUrl: "http://localhost:8080" }
  })
});
var securityOauthSchema = oasSecuritySchemeOauth2.merge(extendedSecuritySchema);
var oasSecurityRequirementSchema = z.record(z.string(), z.array(z.string()).optional().default([]));
var oasSecuritySchemeSchema = z.union([
  oasSecuritySchemeApiKey,
  oasSecuritySchemeHttp,
  oasSecuritySchemeOauth2,
  oasSecuritySchemeOpenId
]);
var securitySchemeSchema = z.discriminatedUnion("type", [securityApiKeySchema, securityHttpSchema, securityOpenIdSchema, securityOauthSchema]).transform((data) => {
  var _a;
  if (data.type === "oauth2" && ((_a = data["x-default-scopes"]) == null ? void 0 : _a.length)) {
    const keys2 = Object.keys(data.flows);
    keys2.forEach((key) => {
      var _a2;
      if (((_a2 = data.flows[key]) == null ? void 0 : _a2.selectedScopes) && data["x-default-scopes"]) {
        data.flows[key].selectedScopes = [data["x-default-scopes"]].flat();
      }
    });
  }
  return data;
});

// node_modules/.pnpm/@scalar+helpers@0.0.4/node_modules/@scalar/helpers/dist/object/omit-undefined-values.js
var omitUndefinedValues = (data) => {
  if (Array.isArray(data)) {
    return data.map(
      (item) => typeof item === "object" && item !== null ? omitUndefinedValues(item) : item
    );
  }
  return Object.fromEntries(
    Object.entries(data).filter(([_2, value]) => value !== void 0).map(([key, value]) => {
      if (typeof value === "object" && value !== null) {
        return [key, omitUndefinedValues(value)];
      }
      return [key, value];
    })
  );
};

// node_modules/.pnpm/@scalar+openapi-types@0.3.3/node_modules/@scalar/openapi-types/dist/schemas/extensions/x-additional-properties-name.js
var XAdditionalPropertiesNameSchema = z.object({
  "x-additionalPropertiesName": z.string().optional().catch(void 0)
});

// node_modules/.pnpm/@scalar+openapi-types@0.3.3/node_modules/@scalar/openapi-types/dist/schemas/extensions/x-code-samples.js
var XCodeSampleSchema = z.object({
  lang: z.string().optional().catch(void 0),
  label: z.string().optional().catch(void 0),
  source: z.string()
});
var XCodeSamplesSchema = z.object({
  "x-codeSamples": XCodeSampleSchema.array().optional().catch(void 0),
  "x-code-samples": XCodeSampleSchema.array().optional().catch(void 0),
  "x-custom-examples": XCodeSampleSchema.array().optional().catch(void 0)
});

// node_modules/.pnpm/@scalar+openapi-types@0.3.3/node_modules/@scalar/openapi-types/dist/schemas/extensions/x-enum-descriptions.js
var XEnumDescriptionsSchema = z.object({
  "x-enumDescriptions": z.record(z.string(), z.string()).catch({})
});

// node_modules/.pnpm/@scalar+openapi-types@0.3.3/node_modules/@scalar/openapi-types/dist/schemas/extensions/x-internal.js
var XInternalSchema = z.object({
  "x-internal": z.boolean().optional().catch(void 0)
});

// node_modules/.pnpm/@scalar+openapi-types@0.3.3/node_modules/@scalar/openapi-types/dist/schemas/extensions/x-scalar-icon.js
var XScalarIconSchema = z.object({
  "x-scalar-icon": z.string().optional().catch(void 0)
});

// node_modules/.pnpm/@scalar+openapi-types@0.3.3/node_modules/@scalar/openapi-types/dist/schemas/extensions/x-scalar-ignore.js
var XScalarIgnoreSchema = z.object({
  "x-scalar-ignore": z.boolean().optional().catch(void 0)
});

// node_modules/.pnpm/@scalar+openapi-types@0.3.3/node_modules/@scalar/openapi-types/dist/schemas/extensions/x-scalar-redirect-uri.js
var XScalarRedirectUriSchema = z.object({
  "x-scalar-redirect-uri": z.string().optional().catch(void 0)
});

// node_modules/.pnpm/@scalar+openapi-types@0.3.3/node_modules/@scalar/openapi-types/dist/schemas/extensions/x-scalar-sdk-installation.js
var XScalarSdkInstallationSchema = z.object({
  "x-scalar-sdk-installation": z.object({
    lang: z.string(),
    source: z.string().optional().catch(void 0),
    description: z.string().optional().catch(void 0)
  }).array().optional().catch(void 0)
});

// node_modules/.pnpm/@scalar+openapi-types@0.3.3/node_modules/@scalar/openapi-types/dist/schemas/extensions/x-scalar-security-query.js
var XScalarSecurityQuery = z.object({
  "x-scalar-security-query": z.record(z.string(), z.string()).optional()
});

// node_modules/.pnpm/@scalar+openapi-types@0.3.3/node_modules/@scalar/openapi-types/dist/schemas/extensions/x-scalar-stability.js
var XScalarStabilityValues = {
  Deprecated: "deprecated",
  Experimental: "experimental",
  Stable: "stable"
};
var XScalarStabilitySchema = z.object({
  "x-scalar-stability": z.enum(Object.values(XScalarStabilityValues)).optional().catch(void 0)
});

// node_modules/.pnpm/@scalar+openapi-types@0.3.3/node_modules/@scalar/openapi-types/dist/schemas/extensions/x-tag-groups.js
var XTagGroupSchema = z.object({
  /**
   * The group name.
   */
  name: z.string(),
  /**
   * List of tags to include in this group.
   */
  tags: z.coerce.string().array().catch([])
});
var XTagGroupsSchema = XTagGroupSchema.array().catch([]);

// node_modules/.pnpm/@scalar+openapi-types@0.3.3/node_modules/@scalar/openapi-types/dist/schemas/extensions/x-use-pkce.js
var XUsePkceValues = ["SHA-256", "plain", "no"];
var XusePkceSchema = z.object({
  /**
   * Use x-usePkce to enable Proof Key for Code Exchange (PKCE) for the Oauth2 authorization code flow.
   */
  "x-usePkce": z.enum(XUsePkceValues).optional().default("no")
});

// node_modules/.pnpm/@scalar+openapi-types@0.3.3/node_modules/@scalar/openapi-types/dist/schemas/extensions/x-post-response.js
var PostResponseSchema = z.string();
var XPostResponseSchema = z.object({
  "x-post-response": PostResponseSchema.optional()
});

// node_modules/.pnpm/@scalar+oas-utils@0.4.6/node_modules/@scalar/oas-utils/dist/entities/spec/spec-objects.js
var oasLicenseSchema = z.object({
  /** REQUIRED. The license name used for the API. */
  name: z.string().optional().nullable().catch(null),
  /** An SPDX license expression for the API. The identifier field is mutually exclusive of the url field. */
  identifier: z.string().optional().catch(void 0),
  /**
   * A URI for the license used for the API. This MUST be in the form of a URI. The url field is mutually exclusive of the identifier field.
   */
  url: z.string().url().optional().catch(void 0)
}).transform(omitUndefinedValues);
var oasContactSchema = z.object({
  /** The identifying name of the contact person/organization. */
  name: z.string().optional(),
  /** The URL pointing to the contact information. This MUST be in the form of a URL. */
  url: z.string().url().optional().catch(void 0),
  /** The email address of the contact person/organization. This MUST be in the form of an email address. */
  email: z.string().optional().catch(void 0)
}).transform(omitUndefinedValues);
var oasInfoSchema = z.object({
  /** REQUIRED. The title of the API. */
  title: z.string().catch("API"),
  /** A short summary of the API. */
  summary: z.string().optional().catch(void 0),
  /** A description of the API. CommonMark syntax MAY be used for rich text representation. */
  description: z.string().optional().catch(void 0),
  /** A URL to the Terms of Service for the API. This MUST be in the form of a URL. */
  termsOfService: z.string().url().optional().catch(void 0),
  /** The contact information for the exposed API. */
  contact: oasContactSchema.optional().catch(void 0),
  /** The license information for the exposed API. */
  license: oasLicenseSchema.optional().catch(void 0),
  /**
   * REQUIRED. The version of the OpenAPI Document (which is distinct from the OpenAPI Specification version or the
   * version of the API being described or the version of the OpenAPI Description).
   */
  version: z.string().catch("1.0")
}).merge(XScalarSdkInstallationSchema).transform(omitUndefinedValues);
var oasExternalDocumentationSchema = z.object({
  /** A description of the target documentation. CommonMark syntax MAY be used for rich text representation. */
  description: z.string().optional().catch(void 0),
  /** REQUIRED. The URL for the target documentation. This MUST be in the form of a URL. */
  url: z.string()
}).transform(omitUndefinedValues);
var xScalarNestedSchema = z.object({
  tagName: z.string()
}).array();
var oasTagSchema = z.object({
  // TODO: Remove
  /**
   * @deprecated Needs to be remove as it is not a spec property
   */
  "type": z.literal("tag").optional().default("tag"),
  /** REQUIRED. The name of the tag. */
  "name": z.string(),
  /** A description for the tag. CommonMark syntax MAY be used for rich text representation. */
  "description": z.string().optional().catch(void 0),
  /** Additional external documentation for this tag. */
  "externalDocs": oasExternalDocumentationSchema.optional(),
  "x-scalar-children": xScalarNestedSchema.default([]).optional(),
  /** Hide collections */
  "x-internal": z.boolean().optional(),
  "x-scalar-ignore": z.boolean().optional()
});
var tagSchema = oasTagSchema.extend({
  uid: nanoidSchema.brand(),
  children: z.union([z.string().brand(), z.string().brand()]).array().default([])
});

// node_modules/.pnpm/@scalar+oas-utils@0.4.6/node_modules/@scalar/oas-utils/dist/entities/spec/collection.js
var oasCollectionSchema = z.object({
  /**
   * @deprecated
   *
   * Needs to be remove as it is not a spec property
   */
  "type": z.literal("collection").optional().default("collection"),
  "openapi": z.union([z.string(), z.literal("3.0.0"), z.literal("3.1.0"), z.literal("4.0.0")]).optional().default("3.1.0"),
  "jsonSchemaDialect": z.string().optional(),
  "info": oasInfoSchema.catch({
    title: "API",
    version: "1.0"
  }),
  /**
   * A declaration of which security mechanisms can be used across the API. The list of
   * values includes alternative security requirement objects that can be used. Only
   * one of the security requirement objects need to be satisfied to authorize a request.
   * Individual operations can override this definition. To make security optional, an empty
   * security requirement ({}) can be included in the array.
   */
  "security": z.array(oasSecurityRequirementSchema).optional().default([]),
  "externalDocs": oasExternalDocumentationSchema.optional().catch(void 0),
  /** TODO: Type these */
  "components": z.record(z.string(), z.unknown()).optional(),
  /** TODO: Type these */
  "webhooks": z.record(z.string(), z.unknown()).optional(),
  /** A custom icon representing the collection */
  "x-scalar-icon": z.string().optional().default("interface-content-folder"),
  "x-scalar-active-environment": z.string().optional(),
  "x-scalar-environments": xScalarEnvironmentsSchema.optional(),
  "x-scalar-secrets": xScalarSecretsSchema.optional()
  // These properties will be stripped out and mapped back as id lists
  // servers
  // paths/**
  // servers
  // tags
  // security
});
var extendedCollectionSchema = z.object({
  uid: nanoidSchema.brand(),
  /** A list of security schemes UIDs associated with the collection */
  securitySchemes: z.string().array().default([]),
  /** List of currently selected security scheme UIDs, these can be overridden per request */
  selectedSecuritySchemeUids: selectedSecuritySchemeUidSchema,
  /** The currently selected server */
  selectedServerUid: z.string().brand().optional(),
  /** UIDs which refer to servers on the workspace base */
  servers: z.string().brand().array().default([]),
  /** Request UIDs associated with a collection */
  requests: z.string().brand().array().default([]),
  /** Tag UIDs associated with the collection */
  tags: z.string().brand().array().default([]),
  /** List of requests without tags and top level tag "folders" */
  children: z.union([z.string().brand(), z.string().brand()]).array().default([]),
  /**
   * A link to where this document is stored
   *
   * - Used for watch mode
   * - Possibly useful for Git sync down the line
   */
  documentUrl: z.string().optional(),
  /**
   * Enables polling of OpenAPI document urls
   *
   * @remarks Only effective when `documentUrl` is set
   */
  watchMode: z.boolean().optional().default(false),
  /** Keeps track of which integration is associated with the specific collection */
  integration: z.string().nullable().optional(),
  /**
   * Selected authentication will be set at the collection level instead of the request level
   *
   * @default false
   */
  useCollectionSecurity: z.boolean().optional().default(false),
  /**
   * Status of the watcher from above
   *
   * @defaults to idle for all collections, doesn't mean that it can watch for changes
   */
  watchModeStatus: z.enum(["IDLE", "WATCHING", "ERROR"]).optional().default("IDLE")
});
var collectionSchema = oasCollectionSchema.merge(extendedCollectionSchema);

// node_modules/.pnpm/@scalar+oas-utils@0.4.6/node_modules/@scalar/oas-utils/dist/entities/spec/parameters.js
var parameterTypeSchema = z.enum(["path", "query", "header", "cookie"]);
var parameterStyleSchema = z.enum([
  "matrix",
  "simple",
  "form",
  "label",
  "spaceDelimited",
  "pipeDelimited",
  "deepObject"
]);
var parameterExampleSchema = z.unknown();
var oasParameterSchema = z.object({
  in: parameterTypeSchema,
  name: z.string(),
  description: z.string().optional(),
  /** Defaulted to false */
  required: z.boolean().optional().default(false),
  /** Defaulted to false */
  deprecated: z.boolean().optional().default(false),
  schema: z.unknown().optional(),
  content: z.unknown().optional(),
  /** Defaulted according to @url https://spec.openapis.org/oas/v3.1.0#parameter-object */
  style: parameterStyleSchema.optional(),
  explode: z.boolean().optional(),
  example: z.unknown().optional(),
  examples: z.union([
    z.record(
      z.string(),
      z.object({
        value: z.unknown().optional(),
        summary: z.string().optional(),
        externalValue: z.string().optional()
      })
    ),
    z.array(z.unknown())
  ]).optional()
});

// node_modules/.pnpm/@scalar+oas-utils@0.4.6/node_modules/@scalar/oas-utils/dist/entities/spec/server.js
var oasServerVariableSchema = z.object({
  /**
   * An enumeration of string values to be used if the substitution options are from a limited set. The array MUST NOT be empty.
   */
  enum: z.array(z.string()).optional(),
  /**
   * REQUIRED. The default value to use for substitution, which SHALL be sent if an alternate value is not supplied.
   * Note this behavior is different than the Schema Object's treatment of default values, because in those cases
   * parameter values are optional. If the enum is defined, the value MUST exist in the enum's values.
   */
  default: z.string().optional(),
  /**
   * An optional description for the server variable. CommonMark syntax MAY be used for rich text representation.
   */
  description: z.string().optional()
});
var extendedServerVariableSchema = oasServerVariableSchema.extend({
  /** The value of the variable */
  value: z.string().optional()
}).refine((data) => {
  if (Array.isArray(data.enum) && !data.enum.includes(data.default ?? "") && data.enum.length > 0) {
    data.default = data.enum[0];
  }
  if (Array.isArray(data.enum) && data.enum.length === 0) {
    delete data.enum;
  }
  return true;
});
var oasServerSchema = z.object({
  /**
   * REQUIRED. A URL to the target host. This URL supports Server Variables and MAY be relative, to indicate that
   * the host location is relative to the location where the OpenAPI document is being served. Variable substitutions
   * will be made when a variable is named in {brackets}.
   */
  url: z.string(),
  /**
   * An optional string describing the host designated by the URL. CommonMark syntax MAY be used for rich text
   * representation.
   */
  description: z.string().optional(),
  /** A map between a variable name and its value. The value is used for substitution in the server's URL template. */
  variables: z.record(z.string(), extendedServerVariableSchema).optional()
});
var serverSchema = oasServerSchema.extend({
  uid: nanoidSchema.brand()
});

// node_modules/.pnpm/@scalar+types@0.2.3/node_modules/@scalar/types/dist/api-client/api-client-plugin.js
var SectionViewSchema = z.object({
  title: z.string().optional(),
  // Since this is meant to be a Vue component, we'll use unknown
  component: z.unknown(),
  props: z.record(z.any()).optional()
});
var ViewsSchema = z.object({
  "request.section": z.array(SectionViewSchema),
  "response.section": z.array(SectionViewSchema)
});
var HooksSchema = z.object({
  onBeforeRequest: z.function().returns(z.union([z.void(), z.promise(z.void())])),
  onResponseReceived: z.function().args(
    z.object({
      response: z.instanceof(Response),
      // Ideally, we'd have the Operation type here, but we don't.
      operation: z.record(z.any())
    })
  ).returns(z.union([z.void(), z.promise(z.void())]))
});
var ApiClientPluginSchema = z.function().returns(
  z.object({
    name: z.string(),
    views: ViewsSchema,
    hooks: HooksSchema
  })
);

// node_modules/.pnpm/@scalar+types@0.2.3/node_modules/@scalar/types/dist/api-reference/api-reference-plugin.js
var OpenApiExtensionSchema = z.object({
  /**
   * Name of specification extension property. Has to start with `x-`.
   *
   * @example
   * ```yaml
   * x-custom-extension: foobar
   * ```
   */
  name: z.string().regex(/^x-/),
  /**
   * Vue component to render the specification extension
   */
  component: z.unknown(),
  /**
   * Custom renderer to render the specification extension
   */
  renderer: z.unknown().optional()
});
var ApiReferencePluginSchema = z.function().returns(
  z.object({
    name: z.string(),
    extensions: z.array(OpenApiExtensionSchema)
  })
);

// node_modules/.pnpm/@scalar+types@0.2.3/node_modules/@scalar/types/dist/api-reference/api-reference-configuration.js
var themeIdEnum = z.enum([
  "alternate",
  "default",
  "moon",
  "purple",
  "solarized",
  "bluePlanet",
  "deepSpace",
  "saturn",
  "kepler",
  "elysiajs",
  "fastify",
  "mars",
  "laserwave",
  "none"
]);
var searchHotKeyEnum = z.enum([
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
]);
var integrationEnum = z.enum([
  "adonisjs",
  "docusaurus",
  "dotnet",
  "elysiajs",
  "express",
  "fastapi",
  "fastify",
  "go",
  "hono",
  "html",
  "laravel",
  "litestar",
  "nestjs",
  "nextjs",
  "nitro",
  "nuxt",
  "platformatic",
  "react",
  "rust",
  "svelte",
  "vue"
]).nullable();
var specConfigurationSchema = z.object({
  /**
   * URL to an OpenAPI/Swagger document
   *
   * @deprecated Please move `url` to the top level and remove the `spec` prefix.
   *
   * @example
   * ```ts
   * const oldConfiguration = {
   *   spec: {
   *     url: 'https://example.com/openapi.json',
   *   },
   * }
   *
   * const newConfiguration = {
   *   url: 'https://example.com/openapi.json',
   * }
   * ```
   **/
  url: z.string().optional(),
  /**
   * Directly embed the OpenAPI document.
   * Can be a string, object, function returning an object, or null.
   *
   * @remarks It's recommended to pass a URL instead of content.
   *
   * @deprecated Please move `content` to the top level and remove the `spec` prefix.
   *
   * @example
   * ```ts
   * const oldConfiguration = {
   *   spec: {
   *     content: '…',
   *   },
   * }
   *
   * const newConfiguration = {
   *   content: '…',
   * }
   * ```
   **/
  content: z.union([z.string(), z.record(z.any()), z.function().returns(z.record(z.any())), z.null()]).optional(),
  /**
   * The title of the OpenAPI document.
   *
   * @example 'Scalar Galaxy'
   *
   * @deprecated Please move `title` to the top level and remove the `spec` prefix.
   */
  title: z.string().optional(),
  /**
   * The slug of the OpenAPI document used in the URL.
   *
   * If none is passed, the title will be used.
   *
   * If no title is used, it'll just use the index.
   *
   * @example 'scalar-galaxy'
   *
   * @deprecated Please move `slug` to the top level and remove the `spec` prefix.
   */
  slug: z.string().optional()
});
var pathRoutingSchema = z.object({
  /** Base path for the API reference */
  basePath: z.string()
});
var apiClientConfigurationSchema = z.object({
  /**
   * URL to an OpenAPI/Swagger document
   **/
  url: z.string().optional(),
  /**
   * Directly embed the OpenAPI document.
   * Can be a string, object, function returning an object, or null.
   *
   * @remarks It's recommended to pass a URL instead of content.
   **/
  content: z.union([z.string(), z.record(z.any()), z.function().returns(z.record(z.any())), z.null()]).optional(),
  /**
   * The title of the OpenAPI document.
   *
   * @example 'Scalar Galaxy'
   */
  title: z.string().optional(),
  /**
   * The slug of the OpenAPI document used in the URL.
   *
   * If none is passed, the title will be used.
   *
   * If no title is used, it'll just use the index.
   *
   * @example 'scalar-galaxy'
   */
  slug: z.string().optional(),
  /**
   * The OpenAPI/Swagger document to render
   *
   * @deprecated Use `url` and `content` on the top level instead.
   **/
  spec: specConfigurationSchema.optional(),
  /** Prefill authentication */
  authentication: z.any().optional(),
  // Temp until we bring in the new auth
  /** Base URL for the API server */
  baseServerURL: z.string().optional(),
  /**
   * Whether to hide the client button
   * @default false
   */
  hideClientButton: z.boolean().optional().default(false).catch(false),
  /** URL to a request proxy for the API client */
  proxyUrl: z.string().optional(),
  /** Key used with CTRL/CMD to open the search modal (defaults to 'k' e.g. CMD+k) */
  searchHotKey: searchHotKeyEnum.optional(),
  /** List of OpenAPI server objects */
  servers: z.array(z.any()).optional(),
  // Using any for OpenAPIV3_1.ServerObject
  /**
   * Whether to show the sidebar
   * @default true
   */
  showSidebar: z.boolean().optional().default(true).catch(true),
  /** A string to use one of the color presets */
  theme: themeIdEnum.optional().default("default").catch("default"),
  /** Integration type identifier */
  _integration: integrationEnum.optional(),
  /** onRequestSent is fired when a request is sent */
  onRequestSent: z.function().args(z.string()).returns(z.void()).optional(),
  /** Whether to persist auth to local storage */
  persistAuth: z.boolean().optional().default(false).catch(false),
  /** Plugins for the API client */
  plugins: z.array(ApiClientPluginSchema).optional()
});
var _apiReferenceConfigurationSchema = apiClientConfigurationSchema.merge(
  z.object({
    /**
     * The layout to use for the references
     * @default 'modern'
     */
    layout: z.enum(["modern", "classic"]).optional().default("modern").catch("modern"),
    /**
     * URL to a request proxy for the API client
     * @deprecated Use proxyUrl instead
     */
    proxy: z.string().optional(),
    /**
     * Plugins for the API reference
     */
    plugins: z.array(ApiReferencePluginSchema).optional(),
    /**
     * Allows the user to inject an editor for the spec
     * @default false
     */
    isEditable: z.boolean().optional().default(false).catch(false),
    /**
     * Controls whether the references show a loading state in the intro
     * @default false
     */
    isLoading: z.boolean().optional().default(false).catch(false),
    /**
     * Whether to show models in the sidebar, search, and content.
     * @default false
     */
    hideModels: z.boolean().optional().default(false).catch(false),
    /**
     * Whether to show the "Download OpenAPI Document" button
     * @default false
     */
    hideDownloadButton: z.boolean().optional().default(false).catch(false),
    /**
     * Whether to show the "Test Request" button
     * @default false
     */
    hideTestRequestButton: z.boolean().optional().default(false).catch(false),
    /**
     * Whether to show the sidebar search bar
     * @default false
     */
    hideSearch: z.boolean().optional().default(false).catch(false),
    /** Whether dark mode is on or off initially (light mode) */
    darkMode: z.boolean().optional(),
    /** forceDarkModeState makes it always this state no matter what */
    forceDarkModeState: z.enum(["dark", "light"]).optional(),
    /**
     * Whether to show the dark mode toggle
     * @default false
     */
    hideDarkModeToggle: z.boolean().optional().default(false).catch(false),
    /**
     * If used, passed data will be added to the HTML header
     * @see https://unhead.unjs.io/usage/composables/use-seo-meta
     */
    metaData: z.any().optional(),
    // Using any for UseSeoMetaInput since it's an external type
    /**
     * Path to a favicon image
     * @default undefined
     * @example '/favicon.svg'
     */
    favicon: z.string().optional(),
    /**
     * List of httpsnippet clients to hide from the clients menu
     * By default hides Unirest, pass `[]` to show all clients
     */
    hiddenClients: z.union([z.record(z.union([z.boolean(), z.array(z.string())])), z.array(z.string()), z.literal(true)]).optional(),
    /** Determine the HTTP client that's selected by default */
    defaultHttpClient: z.object({
      targetKey: z.custom(),
      clientKey: z.string()
    }).optional(),
    /** Custom CSS to be added to the page */
    customCss: z.string().optional(),
    /** onSpecUpdate is fired on spec/swagger content change */
    onSpecUpdate: z.function().args(z.string()).returns(z.void()).optional(),
    /** onServerChange is fired on selected server change */
    onServerChange: z.function().args(z.string()).returns(z.void()).optional(),
    /** onDocumentSelect is fired when the config is selected */
    onDocumentSelect: z.function().returns(z.void().or(z.void().promise())).optional(),
    /** Callback fired when the reference is fully loaded */
    onLoaded: z.function().returns(z.void().or(z.void().promise())).optional(),
    /**
     * onShowMore is fired when the user clicks the "Show more" button on the references
     * @param tagId - The ID of the tag that was clicked
     */
    onShowMore: z.function().args(z.string()).returns(z.void().or(z.void().promise())).optional(),
    /**
     * onSidebarClick is fired when the user clicks on a sidebar item
     * @param href - The href of the sidebar item that was clicked
     */
    onSidebarClick: z.function().args(z.string()).returns(z.void().or(z.void().promise())).optional(),
    /**
     * Route using paths instead of hashes, your server MUST support this
     * @example '/standalone-api-reference/:custom(.*)?'
     * @experimental
     * @default undefined
     */
    pathRouting: pathRoutingSchema.optional(),
    /**
     * Customize the heading portion of the hash
     * @param heading - The heading object
     * @returns A string ID used to generate the URL hash
     * @default (heading) => `#description/${heading.slug}`
     */
    generateHeadingSlug: z.function().args(
      z.object({
        slug: z.string().default("headingSlug")
      })
    ).returns(z.string()).optional(),
    /**
     * Customize the model portion of the hash
     * @param model - The model object with a name property
     * @returns A string ID used to generate the URL hash
     * @default (model) => slug(model.name)
     */
    generateModelSlug: z.function().args(
      z.object({
        name: z.string().default("modelName")
      })
    ).returns(z.string()).optional(),
    /**
     * Customize the tag portion of the hash
     * @param tag - The tag object
     * @returns A string ID used to generate the URL hash
     * @default (tag) => slug(tag.name)
     */
    generateTagSlug: z.function().args(
      z.object({
        name: z.string().default("tagName")
      })
    ).returns(z.string()).optional(),
    /**
     * Customize the operation portion of the hash
     * @param operation - The operation object
     * @returns A string ID used to generate the URL hash
     * @default (operation) => `${operation.method}${operation.path}`
     */
    generateOperationSlug: z.function().args(
      z.object({
        path: z.string(),
        operationId: z.string().optional(),
        method: z.string(),
        summary: z.string().optional()
      })
    ).returns(z.string()).optional(),
    /**
     * Customize the webhook portion of the hash
     * @param webhook - The webhook object
     * @returns A string ID used to generate the URL hash
     * @default (webhook) => slug(webhook.name)
     */
    generateWebhookSlug: z.function().args(
      z.object({
        name: z.string(),
        method: z.string().optional()
      })
    ).returns(z.string()).optional(),
    /**
     * To handle redirects, pass a function that will recieve:
     * - The current path with hash if pathRouting is enabled
     * - The current hash if hashRouting (default)
     * And then passes that to history.replaceState
     *
     * @example hashRouting (default)
     * ```ts
     * redirect: (hash: string) => hash.replace('#v1/old-path', '#v2/new-path')
     * ```
     * @example pathRouting
     * ```ts
     * redirect: (pathWithHash: string) => {
     *   if (pathWithHash.includes('#')) {
     *     return pathWithHash.replace('/v1/tags/user#operation/get-user', '/v1/tags/user/operation/get-user')
     *   }
     *   return null
     * }
     * ```
     */
    redirect: z.function().args(z.string()).returns(z.string().nullable().optional()).optional(),
    /**
     * Whether to include default fonts
     * @default true
     */
    withDefaultFonts: z.boolean().optional().default(true).catch(true),
    /** Whether to expand all tags by default */
    defaultOpenAllTags: z.boolean().optional(),
    /**
     * Function to sort tags
     * @default 'alpha' for alphabetical sorting
     */
    tagsSorter: z.union([z.literal("alpha"), z.function().args(z.any(), z.any()).returns(z.number())]).optional(),
    /**
     * Function to sort operations
     * @default 'alpha' for alphabetical sorting
     */
    operationsSorter: z.union([z.literal("alpha"), z.literal("method"), z.function().args(z.any(), z.any()).returns(z.number())]).optional()
  })
);
var OLD_PROXY_URL = "https://api.scalar.com/request-proxy";
var NEW_PROXY_URL = "https://proxy.scalar.com";
var migrateConfiguration = (_configuration) => {
  var _a, _b;
  const configuration = { ..._configuration };
  if ((_a = configuration.spec) == null ? void 0 : _a.url) {
    console.warn(
      `[DEPRECATED] You're using the deprecated 'spec.url' attribute. Remove the spec prefix and move the 'url' attribute to the top level.`
    );
    configuration.url = configuration.spec.url;
    delete configuration.spec;
  }
  if ((_b = configuration.spec) == null ? void 0 : _b.content) {
    console.warn(
      `[DEPRECATED] You're using the deprecated 'spec.content' attribute. Remove the spec prefix and move the 'content' attribute to the top level.`
    );
    configuration.content = configuration.spec.content;
    delete configuration.spec;
  }
  if (configuration.proxy) {
    console.warn(
      `[DEPRECATED] You're using the deprecated 'proxy' attribute, rename it to 'proxyUrl' or update the package.`
    );
    if (!configuration.proxyUrl) {
      configuration.proxyUrl = configuration.proxy;
    }
    delete configuration.proxy;
  }
  if (configuration.proxyUrl === OLD_PROXY_URL) {
    console.warn(`[DEPRECATED] Warning: configuration.proxyUrl points to our old proxy (${OLD_PROXY_URL}).`);
    console.warn(`[DEPRECATED] We are overwriting the value and use the new proxy URL (${NEW_PROXY_URL}) instead.`);
    console.warn(
      `[DEPRECATED] Action Required: You should manually update your configuration to use the new URL (${NEW_PROXY_URL}). Read more: https://github.com/scalar/scalar`
    );
    configuration.proxyUrl = NEW_PROXY_URL;
  }
  return configuration;
};
var apiReferenceConfigurationSchema = _apiReferenceConfigurationSchema.transform(migrateConfiguration);
var isConfigurationWithSources = (config) => Boolean(!Array.isArray(config) && config && "sources" in config && Array.isArray(config.sources));

// node_modules/.pnpm/@scalar+types@0.2.3/node_modules/@scalar/types/dist/api-reference/html-rendering-configuration.js
var htmlRenderingConfigurationSchema = z.object({
  /**
   * The URL to the Scalar API Reference JS CDN.
   *
   * Use this to pin a specific version of the Scalar API Reference.
   *
   * @default https://cdn.jsdelivr.net/npm/@scalar/api-reference
   *
   * @example https://cdn.jsdelivr.net/npm/@scalar/api-reference@1.25.122
   */
  cdn: z.string().optional().default("https://cdn.jsdelivr.net/npm/@scalar/api-reference"),
  /**
   * The title of the page.
   */
  pageTitle: z.string().optional().default("Scalar API Reference")
});

// node_modules/.pnpm/@scalar+oas-utils@0.4.6/node_modules/@scalar/oas-utils/dist/spec-getters/get-server-variable-examples.js
var getServerVariableExamples = (server) => {
  var _a;
  const examples = {};
  if (server.variables) {
    for (const [key, variable] of Object.entries(server.variables)) {
      examples[key] = ((_a = variable.enum) == null ? void 0 : _a.filter((v2) => typeof v2 === "string")) ?? [
        variable.default
      ];
    }
  }
  return examples;
};

// node_modules/.pnpm/@scalar+object-utils@1.2.1/node_modules/@scalar/object-utils/dist/arrays/types.js
function keysOf(obj) {
  return obj ? Object.keys(obj).map((k3) => String(k3)) : [];
}

// node_modules/.pnpm/@scalar+oas-utils@0.4.6/node_modules/@scalar/oas-utils/dist/spec-getters/get-example-from-schema.js
var MAX_LEVELS_DEEP = 5;
var MAX_PROPERTIES = 10;
var genericExampleValues = {
  // 'date-time': '1970-01-01T00:00:00Z',
  "date-time": (/* @__PURE__ */ new Date()).toISOString(),
  // 'date': '1970-01-01',
  "date": (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
  "email": "hello@example.com",
  "hostname": "example.com",
  // https://tools.ietf.org/html/rfc6531#section-3.3
  "idn-email": "jane.doe@example.com",
  // https://tools.ietf.org/html/rfc5890#section-2.3.2.3
  "idn-hostname": "example.com",
  "ipv4": "127.0.0.1",
  "ipv6": "51d4:7fab:bfbf:b7d7:b2cb:d4b4:3dad:d998",
  "iri-reference": "/entitiy/1",
  // https://tools.ietf.org/html/rfc3987
  "iri": "https://example.com/entity/123",
  "json-pointer": "/nested/objects",
  "password": "super-secret",
  "regex": "/[a-z]/",
  // https://tools.ietf.org/html/draft-handrews-relative-json-pointer-01
  "relative-json-pointer": "1/nested/objects",
  // full-time in https://tools.ietf.org/html/rfc3339#section-5.6
  // 'time': '00:00:00Z',
  "time": (/* @__PURE__ */ new Date()).toISOString().split("T")[1].split(".")[0],
  // either a URI or relative-reference https://tools.ietf.org/html/rfc3986#section-4.1
  "uri-reference": "../folder",
  "uri-template": "https://example.com/{id}",
  "uri": "https://example.com",
  "uuid": "123e4567-e89b-12d3-a456-426614174000",
  "object-id": "6592008029c8c3e4dc76256c"
};
function guessFromFormat(schema, makeUpRandomData = false, fallback = "") {
  if (schema.format === "binary") {
    return new File([""], "filename");
  }
  return makeUpRandomData ? genericExampleValues[schema.format] ?? fallback : "";
}
var resultCache = /* @__PURE__ */ new WeakMap();
function cache(schema, result) {
  if (typeof result !== "object" || result === null) {
    return result;
  }
  resultCache.set(schema, result);
  return result;
}
var getExampleFromSchema = (schema, options, level = 0, parentSchema, name) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q;
  if (resultCache.has(schema)) {
    return resultCache.get(schema);
  }
  if (level === MAX_LEVELS_DEEP + 1) {
    try {
      JSON.stringify(schema);
    } catch {
      return "[Circular Reference]";
    }
  }
  const makeUpRandomData = !!(options == null ? void 0 : options.emptyString);
  if (schema.deprecated) {
    return void 0;
  }
  if ((options == null ? void 0 : options.mode) === "write" && schema.readOnly || (options == null ? void 0 : options.mode) === "read" && schema.writeOnly) {
    return void 0;
  }
  if (schema["x-variable"]) {
    const value = (_a = options == null ? void 0 : options.variables) == null ? void 0 : _a[schema["x-variable"]];
    if (value !== void 0) {
      if (schema.type === "number" || schema.type === "integer") {
        return Number.parseInt(value, 10);
      }
      return cache(schema, value);
    }
  }
  if (Array.isArray(schema.examples) && schema.examples.length > 0) {
    return cache(schema, schema.examples[0]);
  }
  if (schema.example !== void 0) {
    return cache(schema, schema.example);
  }
  if (schema.default !== void 0) {
    return cache(schema, schema.default);
  }
  if (Array.isArray(schema.enum) && schema.enum.length > 0) {
    return cache(schema, schema.enum[0]);
  }
  const isObjectOrArray = schema.type === "object" || schema.type === "array" || !!((_c = (_b = schema.allOf) == null ? void 0 : _b.at) == null ? void 0 : _c.call(_b, 0)) || !!((_e = (_d = schema.anyOf) == null ? void 0 : _d.at) == null ? void 0 : _e.call(_d, 0)) || !!((_g = (_f = schema.oneOf) == null ? void 0 : _f.at) == null ? void 0 : _g.call(_f, 0));
  if (!isObjectOrArray && (options == null ? void 0 : options.omitEmptyAndOptionalProperties) === true) {
    const isRequired = schema.required === true || (parentSchema == null ? void 0 : parentSchema.required) === true || ((_h = parentSchema == null ? void 0 : parentSchema.required) == null ? void 0 : _h.includes(name ?? schema.name));
    if (!isRequired) {
      return void 0;
    }
  }
  if (schema.type === "object" || schema.properties !== void 0) {
    const response = {};
    let propertyCount = 0;
    if (schema.properties !== void 0) {
      for (const propertyName in schema.properties) {
        if (Object.prototype.hasOwnProperty.call(schema.properties, propertyName)) {
          if (level > 3 && propertyCount >= MAX_PROPERTIES) {
            response["..."] = "[Additional Properties Truncated]";
            break;
          }
          const property = schema.properties[propertyName];
          const propertyXmlTagName = (options == null ? void 0 : options.xml) ? (_i = property.xml) == null ? void 0 : _i.name : void 0;
          const value = getExampleFromSchema(property, options, level + 1, schema, propertyName);
          if (typeof value !== "undefined") {
            response[propertyXmlTagName ?? propertyName] = value;
            propertyCount++;
          }
        }
      }
    }
    if (schema.patternProperties !== void 0) {
      for (const pattern in schema.patternProperties) {
        if (Object.prototype.hasOwnProperty.call(schema.patternProperties, pattern)) {
          const property = schema.patternProperties[pattern];
          const exampleKey = pattern;
          response[exampleKey] = getExampleFromSchema(property, options, level + 1, schema, exampleKey);
        }
      }
    }
    if (schema.additionalProperties !== void 0) {
      const anyTypeIsValid = (
        // true
        schema.additionalProperties === true || // or an empty object {}
        typeof schema.additionalProperties === "object" && !Object.keys(schema.additionalProperties).length
      );
      if (anyTypeIsValid) {
        response["ANY_ADDITIONAL_PROPERTY"] = "anything";
      } else if (schema.additionalProperties !== false) {
        response["ANY_ADDITIONAL_PROPERTY"] = getExampleFromSchema(schema.additionalProperties, options, level + 1);
      }
    }
    if (schema.anyOf !== void 0) {
      Object.assign(response, getExampleFromSchema(schema.anyOf[0], options, level + 1));
    } else if (schema.oneOf !== void 0) {
      Object.assign(response, getExampleFromSchema(schema.oneOf[0], options, level + 1));
    } else if (schema.allOf !== void 0) {
      Object.assign(
        response,
        ...schema.allOf.map((item) => getExampleFromSchema(item, options, level + 1, schema)).filter((item) => item !== void 0)
      );
    }
    return cache(schema, response);
  }
  if (schema.type === "array" || schema.items !== void 0) {
    const itemsXmlTagName = (_k = (_j = schema == null ? void 0 : schema.items) == null ? void 0 : _j.xml) == null ? void 0 : _k.name;
    const wrapItems = !!((options == null ? void 0 : options.xml) && ((_l = schema.xml) == null ? void 0 : _l.wrapped) && itemsXmlTagName);
    if (schema.example !== void 0) {
      return cache(schema, wrapItems ? { [itemsXmlTagName]: schema.example } : schema.example);
    }
    if (schema.items) {
      if (schema.items.allOf) {
        if (schema.items.allOf[0].type === "object") {
          const mergedExample = getExampleFromSchema(
            { type: "object", allOf: schema.items.allOf },
            options,
            level + 1,
            schema
          );
          return cache(schema, wrapItems ? [{ [itemsXmlTagName]: mergedExample }] : [mergedExample]);
        }
        const examples = schema.items.allOf.map((item) => getExampleFromSchema(item, options, level + 1, schema)).filter((item) => item !== void 0);
        return cache(schema, wrapItems ? examples.map((example) => ({ [itemsXmlTagName]: example })) : examples);
      }
      const rules = ["anyOf", "oneOf"];
      for (const rule of rules) {
        if (!schema.items[rule]) {
          continue;
        }
        const schemas = schema.items[rule].slice(0, 1);
        const exampleFromRule = schemas.map((item) => getExampleFromSchema(item, options, level + 1, schema)).filter((item) => item !== void 0);
        return cache(schema, wrapItems ? [{ [itemsXmlTagName]: exampleFromRule }] : exampleFromRule);
      }
    }
    const isObject2 = ((_m = schema.items) == null ? void 0 : _m.type) === "object" || ((_n = schema.items) == null ? void 0 : _n.properties) !== void 0;
    const isArray = ((_o = schema.items) == null ? void 0 : _o.type) === "array" || ((_p = schema.items) == null ? void 0 : _p.items) !== void 0;
    if (((_q = schema.items) == null ? void 0 : _q.type) || isObject2 || isArray) {
      const exampleFromSchema = getExampleFromSchema(schema.items, options, level + 1);
      return wrapItems ? [{ [itemsXmlTagName]: exampleFromSchema }] : [exampleFromSchema];
    }
    return [];
  }
  const exampleValues = {
    string: guessFromFormat(schema, makeUpRandomData, options == null ? void 0 : options.emptyString),
    boolean: true,
    integer: schema.min ?? 1,
    number: schema.min ?? 1,
    array: []
  };
  if (schema.type !== void 0 && exampleValues[schema.type] !== void 0) {
    return cache(schema, exampleValues[schema.type]);
  }
  const discriminateSchema = schema.oneOf || schema.anyOf;
  if (Array.isArray(discriminateSchema) && discriminateSchema.length > 0) {
    const firstOneOfItem = discriminateSchema[0];
    return getExampleFromSchema(firstOneOfItem, options, level + 1);
  }
  if (Array.isArray(schema.allOf)) {
    let example = null;
    schema.allOf.forEach((allOfItem) => {
      const newExample = getExampleFromSchema(allOfItem, options, level + 1);
      example = typeof newExample === "object" && typeof example === "object" ? {
        ...example ?? {},
        ...newExample
      } : Array.isArray(newExample) && Array.isArray(example) ? [...example ?? {}, ...newExample] : newExample;
    });
    return cache(schema, example);
  }
  if (Array.isArray(schema.type)) {
    if (schema.type.includes("null")) {
      return null;
    }
    const exampleValue = exampleValues[schema.type[0]];
    if (exampleValue !== void 0) {
      return cache(schema, exampleValue);
    }
  }
  return null;
};

// node_modules/.pnpm/@scalar+oas-utils@0.4.6/node_modules/@scalar/oas-utils/dist/spec-getters/get-parameters-from-operation.js
function getParametersFromOperation(operationParameters = [], pathParameters = [], where, requiredOnly = true) {
  const parameters = [...pathParameters || [], ...operationParameters || []];
  const params = parameters.filter((parameter) => parameter.in === where).filter((parameter) => requiredOnly && parameter.required || !requiredOnly).map((parameter) => ({
    name: parameter.name ?? "Unknown Parameter",
    description: parameter.description ?? null,
    value: parameter.example ? parameter.example : parameter.schema ? getExampleFromSchema(parameter.schema, { mode: "write" }) : "",
    required: parameter.required ?? false,
    enabled: parameter.required ?? false
  }));
  return params.sort((a3, b) => {
    if (a3.required && !b.required) {
      return -1;
    }
    if (!a3.required && b.required) {
      return 1;
    }
    return 0;
  });
}

// node_modules/.pnpm/@scalar+oas-utils@0.4.6/node_modules/@scalar/oas-utils/dist/spec-getters/get-request-body-from-operation.js
function getParamsFromObject(obj, nested = false, field) {
  return Object.entries(obj).flatMap(([key, value]) => {
    const name = field ?? key;
    if (Array.isArray(value) && !nested) {
      return getParamsFromObject(value, true, key);
    }
    if (typeof value === "object" && !(value instanceof File) && value !== null) {
      value = JSON.stringify(value);
    }
    return [{ name, value }];
  });
}
var standardMimeTypes = [
  "application/json",
  "application/octet-stream",
  "application/x-www-form-urlencoded",
  "application/xml",
  "multipart/form-data",
  "text/plain"
];
function getRequestBodyFromOperation(operation, selectedExampleKey, omitEmptyAndOptionalProperties) {
  var _a, _b, _c, _d, _e, _f, _g;
  const originalContent = (_b = (_a = operation.information) == null ? void 0 : _a.requestBody) == null ? void 0 : _b.content;
  const content = normalizeMimeTypeObject(originalContent);
  const mimeType = standardMimeTypes.find((currentMimeType) => !!(content == null ? void 0 : content[currentMimeType])) ?? (Object.keys(content ?? {})[0] || "application/json");
  const isJsonLike = mimeType.includes("json") || mimeType.endsWith("+json");
  const examples = ((_c = content == null ? void 0 : content[mimeType]) == null ? void 0 : _c.examples) ?? ((_d = content == null ? void 0 : content["application/json"]) == null ? void 0 : _d.examples);
  const selectedExample = examples == null ? void 0 : examples[selectedExampleKey ?? Object.keys(examples ?? {})[0] ?? ""];
  if (selectedExample) {
    return {
      mimeType,
      text: prettyPrintJson(selectedExample == null ? void 0 : selectedExample.value)
    };
  }
  const bodyParameters = getParametersFromOperation(
    ((_e = operation.information) == null ? void 0 : _e.parameters) ?? [],
    operation.pathParameters ?? [],
    "body",
    false
  );
  if (bodyParameters.length > 0) {
    return {
      mimeType: "application/json",
      text: prettyPrintJson(((_f = bodyParameters[0]) == null ? void 0 : _f.value) ?? "")
    };
  }
  const formDataParameters = getParametersFromOperation(
    ((_g = operation.information) == null ? void 0 : _g.parameters) ?? [],
    operation.pathParameters ?? [],
    "formData",
    false
  );
  if (formDataParameters.length > 0) {
    return {
      mimeType: "application/x-www-form-urlencoded",
      params: formDataParameters.map((parameter) => ({
        name: parameter.name,
        /**
         * TODO: This value MUST be a string
         * Figure out why this is not always a string
         *
         * JSON.stringify is a TEMPORARY fix
         */
        value: typeof parameter.value === "string" ? parameter.value : JSON.stringify(parameter.value)
      }))
    };
  }
  if (!mimeType) {
    return null;
  }
  const requestBodyObject = content == null ? void 0 : content[mimeType];
  const example = (requestBodyObject == null ? void 0 : requestBodyObject.example) ? requestBodyObject == null ? void 0 : requestBodyObject.example : void 0;
  if (isJsonLike) {
    const exampleFromSchema = (requestBodyObject == null ? void 0 : requestBodyObject.schema) ? getExampleFromSchema(requestBodyObject == null ? void 0 : requestBodyObject.schema, {
      mode: "write",
      omitEmptyAndOptionalProperties: omitEmptyAndOptionalProperties ?? false
    }) : null;
    const body = example ?? exampleFromSchema;
    return {
      mimeType,
      text: body ? typeof body === "string" ? body : JSON.stringify(body, null, 2) : void 0
    };
  }
  if (mimeType === "application/xml") {
    const exampleFromSchema = (requestBodyObject == null ? void 0 : requestBodyObject.schema) ? getExampleFromSchema(requestBodyObject == null ? void 0 : requestBodyObject.schema, {
      xml: true,
      mode: "write"
    }) : null;
    return {
      mimeType,
      text: example ?? json2xml(exampleFromSchema, "  ")
    };
  }
  if (mimeType === "application/octet-stream") {
    return {
      mimeType,
      text: "BINARY"
    };
  }
  if (mimeType === "text/plain") {
    const exampleFromSchema = (requestBodyObject == null ? void 0 : requestBodyObject.schema) ? getExampleFromSchema(requestBodyObject == null ? void 0 : requestBodyObject.schema, {
      xml: true,
      mode: "write"
    }) : null;
    return {
      mimeType,
      text: example ?? exampleFromSchema ?? ""
    };
  }
  if (mimeType === "multipart/form-data" || mimeType === "application/x-www-form-urlencoded") {
    const exampleFromSchema = (requestBodyObject == null ? void 0 : requestBodyObject.schema) ? getExampleFromSchema(requestBodyObject == null ? void 0 : requestBodyObject.schema, {
      xml: true,
      mode: "write"
    }) : null;
    return {
      mimeType,
      params: getParamsFromObject(example ?? exampleFromSchema ?? {})
    };
  }
  return null;
}

// node_modules/.pnpm/@scalar+oas-utils@0.4.6/node_modules/@scalar/oas-utils/dist/entities/spec/request-examples.js
var requestExampleParametersSchema = z.object({
  key: z.string().default(""),
  value: z.coerce.string().default(""),
  enabled: z.boolean().default(true),
  file: z.any().optional(),
  description: z.string().optional(),
  required: z.boolean().optional(),
  enum: z.array(z.string()).optional(),
  examples: z.array(z.any()).optional(),
  type: z.union([
    // 'string'
    z.string(),
    // ['string', 'null']
    z.array(z.string())
  ]).optional(),
  format: z.string().optional(),
  minimum: z.number().optional(),
  maximum: z.number().optional(),
  default: z.any().optional(),
  nullable: z.boolean().optional()
}).transform((_data) => {
  const data = { ..._data };
  if (Array.isArray(data.type) && data.type.includes("null")) {
    data.nullable = true;
  }
  if (Array.isArray(data.type) && data.type.length === 2 && data.type.includes("null")) {
    data.type = data.type.find((item) => item !== "null");
  }
  return data;
});
var xScalarFileValueSchema = z.object({
  url: z.string(),
  base64: z.string().optional()
}).nullable();
var xScalarFormDataValue = z.union([
  z.object({
    type: z.literal("string"),
    value: z.string()
  }),
  z.object({
    type: z.literal("file"),
    file: xScalarFileValueSchema
  })
]);
var exampleRequestBodyEncoding = ["json", "text", "html", "javascript", "xml", "yaml", "edn"];
var exampleBodyMime = [
  "application/json",
  "text/plain",
  "text/html",
  "application/javascript",
  "application/xml",
  "application/yaml",
  "application/edn",
  "application/octet-stream",
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  /** Used for direct files */
  "binary"
];
var exampleRequestBodySchema = z.object({
  raw: z.object({
    encoding: z.enum(exampleRequestBodyEncoding),
    value: z.string().default(""),
    mimeType: z.string().optional()
  }).optional(),
  formData: z.object({
    encoding: z.union([z.literal("form-data"), z.literal("urlencoded")]).default("form-data"),
    value: requestExampleParametersSchema.array().default([])
  }).optional(),
  binary: z.instanceof(Blob).optional(),
  activeBody: z.union([z.literal("raw"), z.literal("formData"), z.literal("binary")]).default("raw")
});
var xScalarExampleBodySchema = z.object({
  encoding: z.enum(exampleBodyMime),
  /**
   * Body content as an object with a separately specified encoding or a simple pre-encoded string value
   *
   * Ideally we would convert any objects into the proper encoding on import
   */
  content: z.union([z.record(z.string(), z.any()), z.string()]),
  /** When the encoding is `binary` this will be used to link to the file */
  file: xScalarFileValueSchema.optional()
});
var requestExampleSchema = z.object({
  uid: nanoidSchema.brand(),
  type: z.literal("requestExample").optional().default("requestExample"),
  requestUid: z.string().brand().optional(),
  name: z.string().optional().default("Name"),
  body: exampleRequestBodySchema.optional().default({}),
  parameters: z.object({
    path: requestExampleParametersSchema.array().default([]),
    query: requestExampleParametersSchema.array().default([]),
    headers: requestExampleParametersSchema.array().default([{ key: "Accept", value: "*/*", enabled: true }]),
    cookies: requestExampleParametersSchema.array().default([])
  }).optional().default({}),
  /** TODO: Should this be deprecated? */
  serverVariables: z.record(z.string(), z.array(z.string())).optional()
});
var xScalarExampleParameterSchema = z.record(z.string(), z.string()).optional();
var xScalarExampleSchema = z.object({
  /** TODO: Should this be required? */
  name: z.string().optional(),
  body: xScalarExampleBodySchema.optional(),
  parameters: z.object({
    path: xScalarExampleParameterSchema,
    query: xScalarExampleParameterSchema,
    headers: xScalarExampleParameterSchema,
    cookies: xScalarExampleParameterSchema
  })
});
function createParamInstance(param) {
  var _a;
  const schema = param.schema;
  const firstExample = (() => {
    if (param.examples && !Array.isArray(param.examples) && objectKeys(param.examples).length > 0) {
      const exampleValues = Object.entries(param.examples).map(([_2, example2]) => {
        if (example2.externalValue) {
          return example2.externalValue;
        }
        return example2.value;
      });
      return { value: exampleValues[0], examples: exampleValues };
    }
    if (isDefined(param.example)) {
      return { value: param.example };
    }
    if (Array.isArray(param.examples) && param.examples.length > 0) {
      return { value: param.examples[0] };
    }
    if (isDefined(schema == null ? void 0 : schema.example)) {
      return { value: schema.example };
    }
    if (Array.isArray(schema == null ? void 0 : schema.examples) && schema.examples.length > 0) {
      if ((schema == null ? void 0 : schema.type) === "boolean") {
        return { value: schema.default ?? false };
      }
      return { value: schema.examples[0] };
    }
    if (param.content) {
      const firstContentType = objectKeys(param.content)[0];
      if (firstContentType) {
        const content = param.content[firstContentType];
        if (content == null ? void 0 : content.examples) {
          const firstExampleKey = Object.keys(content.examples)[0];
          if (firstExampleKey) {
            const example2 = content.examples[firstExampleKey];
            if (isDefined(example2 == null ? void 0 : example2.value)) {
              return { value: example2.value };
            }
          }
        }
        if (isDefined(content == null ? void 0 : content.example)) {
          return { value: content.example };
        }
      }
    }
    return null;
  })();
  const value = String((firstExample == null ? void 0 : firstExample.value) ?? (schema == null ? void 0 : schema.default) ?? "");
  const parseEnum = (() => {
    var _a2, _b;
    if ((schema == null ? void 0 : schema.enum) && (schema == null ? void 0 : schema.type) !== "string") {
      return (_a2 = schema.enum) == null ? void 0 : _a2.map(String);
    }
    if (((_b = schema == null ? void 0 : schema.items) == null ? void 0 : _b.enum) && (schema == null ? void 0 : schema.type) === "array") {
      return schema.items.enum.map(String);
    }
    return schema == null ? void 0 : schema.enum;
  })();
  const examples = (firstExample == null ? void 0 : firstExample.examples) || ((schema == null ? void 0 : schema.examples) && (schema == null ? void 0 : schema.type) !== "string" ? (_a = schema.examples) == null ? void 0 : _a.map(String) : schema == null ? void 0 : schema.examples);
  const example = schemaModel(
    {
      ...schema,
      key: param.name,
      value,
      description: param.description,
      required: param.required,
      /** Initialized all required properties to enabled */
      enabled: !!param.required,
      enum: parseEnum,
      examples
    },
    requestExampleParametersSchema,
    false
  );
  if (!example) {
    console.warn(`Example at ${param.name} is invalid.`);
    return requestExampleParametersSchema.parse({});
  }
  return example;
}
function createExampleFromRequest(request, name, server) {
  var _a;
  const parameters = {
    path: [],
    query: [],
    cookie: [],
    // deprecated TODO: add zod transform to remove
    header: [],
    headers: [{ key: "Accept", value: "*/*", enabled: true }]
  };
  (_a = request.parameters) == null ? void 0 : _a.forEach((p2) => parameters[p2.in].push(createParamInstance(p2)));
  if (parameters.header.length > 0) {
    parameters.headers = parameters.header;
    parameters.header = [];
  }
  const contentTypeHeader = parameters.headers.find((h2) => h2.key.toLowerCase() === "content-type");
  const body = {
    activeBody: "raw"
  };
  if (request.requestBody || (contentTypeHeader == null ? void 0 : contentTypeHeader.value)) {
    const requestBody = getRequestBodyFromOperation({
      information: {
        parameters: request.parameters ?? [],
        requestBody: request.requestBody
      }
    });
    const contentType = request.requestBody ? requestBody == null ? void 0 : requestBody.mimeType : contentTypeHeader == null ? void 0 : contentTypeHeader.value;
    if ((contentType == null ? void 0 : contentType.includes("/json")) || (contentType == null ? void 0 : contentType.endsWith("+json"))) {
      body.activeBody = "raw";
      body.raw = {
        encoding: "json",
        mimeType: contentType,
        value: (requestBody == null ? void 0 : requestBody.text) ?? JSON.stringify({})
      };
    }
    if (contentType === "application/xml") {
      body.activeBody = "raw";
      body.raw = {
        encoding: "xml",
        value: (requestBody == null ? void 0 : requestBody.text) ?? ""
      };
    }
    if (contentType === "application/octet-stream") {
      body.activeBody = "binary";
      body.binary = void 0;
    }
    if (contentType === "application/x-www-form-urlencoded" || contentType === "multipart/form-data") {
      body.activeBody = "formData";
      body.formData = {
        encoding: contentType === "application/x-www-form-urlencoded" ? "urlencoded" : "form-data",
        value: ((requestBody == null ? void 0 : requestBody.params) || []).map((param) => {
          if (param.value instanceof File) {
            return {
              key: param.name,
              value: "BINARY",
              file: param.value,
              enabled: true
            };
          }
          return {
            key: param.name,
            value: param.value || "",
            enabled: true
          };
        })
      };
    }
    if ((requestBody == null ? void 0 : requestBody.mimeType) && !contentTypeHeader && !requestBody.mimeType.startsWith("multipart/")) {
      parameters.headers.push({
        key: "Content-Type",
        value: requestBody.mimeType,
        enabled: true
      });
    }
  }
  const serverVariables = server ? getServerVariableExamples(server) : {};
  const example = schemaModel(
    {
      requestUid: request.uid,
      parameters,
      name,
      body,
      serverVariables
    },
    requestExampleSchema,
    false
  );
  if (!example) {
    console.warn(`Example at ${request.uid} is invalid.`);
    return requestExampleSchema.parse({});
  }
  return example;
}

// node_modules/.pnpm/@scalar+oas-utils@0.4.6/node_modules/@scalar/oas-utils/dist/entities/spec/requests.js
var requestMethods = ["connect", "delete", "get", "head", "options", "patch", "post", "put", "trace"];
var requestBodySchema = z.any();
var oasRequestSchema = z.object({
  /**
   * A list of tags for API documentation control. Tags can be used for logical
   * grouping of operations by resources or any other qualifier.
   *
   * These tags are the openapi spec tag names, not uids
   */
  "tags": z.string().array().optional(),
  /** A short summary of what the operation does. */
  "summary": z.string().optional(),
  /** A verbose explanation of the operation behavior. CommonMark syntax MAY be used for rich text representation. */
  "description": z.string().optional(),
  /**
   * Unique string used to identify the operation. The id MUST be unique among all operations described in the API.
   * The operationId value is case-sensitive. Tools and libraries MAY use the operationId to uniquely identify an
   * operation, therefore, it is RECOMMENDED to follow bin common programming naming conventions./
   */
  "operationId": z.string().optional(),
  /**
   * A declaration of which security mechanisms can be used across the API. The list of
   * values includes alternative security requirement objects that can be used. Only
   * one of the security requirement objects need to be satisfied to authorize a request.
   * Individual operations can override this definition. To make security optional, an empty
   * security requirement ({}) can be included in the array.
   */
  "security": z.array(oasSecurityRequirementSchema).optional(),
  /**
   * The request body applicable for this operation. The requestBody is fully supported in HTTP methods where the
   * HTTP 1.1 specification [RFC7231] has explicitly defined semantics for request bodies. In other cases where the
   * HTTP spec is vague (such as GET, HEAD and DELETE), requestBody is permitted but does not have well-defined
   * semantics and SHOULD be avoided if possible.
   */
  "requestBody": requestBodySchema.optional(),
  /**
   * Request parameters
   */
  "parameters": oasParameterSchema.array().optional(),
  /**
   * External documentation object
   */
  "externalDocs": oasExternalDocumentationSchema.optional(),
  "deprecated": z.boolean().optional(),
  /** Response formats */
  "responses": z.record(z.string(), z.any()).optional(),
  /** Callbacks */
  "callbacks": z.record(z.string(), z.record(z.string(), z.record(z.string(), z.any()))).optional(),
  /** xScalar examples */
  "x-scalar-examples": z.record(z.string(), xScalarExampleSchema).optional(),
  /** Hide operations */
  "x-internal": z.boolean().optional(),
  /** Ignore operations */
  "x-scalar-ignore": z.boolean().optional()
});
var ScalarStabilitySchema = z.object({
  "x-scalar-stability": z.enum([XScalarStability.Deprecated, XScalarStability.Experimental, XScalarStability.Stable]).optional().catch(void 0)
});
var extendedRequestSchema = z.object({
  type: z.literal("request").optional().default("request"),
  uid: nanoidSchema.brand(),
  /** Path Key */
  path: z.string().optional().default(""),
  /** Request Method */
  method: z.enum(requestMethods).default("get"),
  /** List of server UIDs specific to the request */
  servers: z.string().brand().array().default([]),
  /** The currently selected server */
  selectedServerUid: z.string().brand().optional().nullable().default(null),
  /** List of example UIDs associated with the request */
  examples: z.string().brand().array().default([]),
  /** List of security scheme UIDs associated with the request */
  selectedSecuritySchemeUids: selectedSecuritySchemeUidSchema
});
var requestSchema = oasRequestSchema.omit({ "x-scalar-examples": true }).merge(XCodeSamplesSchema).merge(ScalarStabilitySchema).merge(extendedRequestSchema).merge(XPostResponseSchema);

// node_modules/.pnpm/@scalar+object-utils@1.2.1/node_modules/@scalar/object-utils/dist/nested/nested.js
function setNestedValue(obj, path, value) {
  const keys2 = path.split(".");
  keys2.reduce((acc, current, idx) => {
    if (idx === keys2.length - 1) {
      acc[current] = value;
    }
    return acc[current];
  }, obj);
  return obj;
}
function getNestedValue(obj, path) {
  const keys2 = path.split(".");
  return keys2.reduce((acc, current) => {
    return acc[current];
  }, obj);
}

// node_modules/.pnpm/@scalar+object-utils@1.2.1/node_modules/@scalar/object-utils/dist/mutator-record/mutations.js
var Mutation = class {
  constructor(parentData, maxRecords = 5e3, debug = false) {
    /** Object reference for the given data to be tracked */
    __publicField(this, "parentData");
    /** Maximum number of record to keep (how many times you can 'undo' a mutation) */
    __publicField(this, "maxRecords");
    /** List of all mutation records */
    __publicField(this, "records", []);
    /** List of side effect handlers to run whenever the data changes */
    __publicField(this, "sideEffects", []);
    /** Active mutation index. Allows rolling forward and backwards */
    __publicField(this, "idx", 0);
    /** Optional debug messages */
    __publicField(this, "debug");
    this.maxRecords = maxRecords;
    this.parentData = parentData;
    this.debug = debug;
  }
  /** Mutate without saving a record. Private function. */
  _unsavedMutate(path, value) {
    setNestedValue(this.parentData, path, value);
    this.runSideEffects(path);
  }
  /** Side effects must take ONLY an object of the specified type and act on it */
  addSideEffect(triggers, effect, name, immediate = true) {
    this.sideEffects.push({ triggers, effect, name });
    if (immediate) {
      effect(this.parentData);
      if (this.debug) {
        console.info(`Running mutation side effect: ${name}`, "debug");
      }
    }
  }
  /** Runs all side effects that match the path trigger */
  runSideEffects(path) {
    this.sideEffects.forEach(({ effect, triggers, name }) => {
      const triggerEffect = triggers.some((trigger) => path.includes(trigger)) || path.length < 1;
      if (triggerEffect) {
        effect(this.parentData);
        if (this.debug) {
          console.info(`Running mutation side effect: ${name}`, "debug");
        }
      }
    });
  }
  /** Mutate an object with the new property value and run side effects */
  mutate(path, value, previousValue = null) {
    if (this.idx < this.records.length - 1) {
      this.records.splice(this.idx + 1);
    }
    const prev = getNestedValue(this.parentData, path);
    if (prev === value) {
      return;
    }
    setNestedValue(this.parentData, path, value);
    this.runSideEffects(path);
    this.records.push({
      prev: previousValue ?? prev,
      // Optional explicit previous value
      value,
      path
    });
    this.idx = this.records.length - 1;
    if (this.records.length > this.maxRecords) {
      this.records.shift();
    }
    if (this.debug) {
      console.info(`Set object '${this.idx}' '${path}' to ${value}`, "debug");
    }
  }
  /** Undo the previous mutation */
  undo() {
    if (this.idx < 0 || this.records.length < 1) {
      return false;
    }
    if (this.debug) {
      console.info("Undoing Mutation", "debug");
    }
    const record = this.records[this.idx];
    this.idx -= 1;
    if (record) {
      this._unsavedMutate(record.path, record.prev);
    }
    return true;
  }
  /** Roll forward to the next available mutation if its exists */
  redo() {
    if (this.idx > this.records.length - 2) {
      return false;
    }
    if (this.debug) {
      console.info("Redoing Mutation", "debug");
    }
    const record = this.records[this.idx + 1];
    this.idx += 1;
    if (record) {
      this._unsavedMutate(record.path, record.value);
    }
    return true;
  }
};

// node_modules/.pnpm/@scalar+object-utils@1.2.1/node_modules/@scalar/object-utils/dist/mutator-record/local-storage.js
var LS_CONFIG = {
  /** The debounce time in milliseconds for saving to localStorage per resource */
  DEBOUNCE_MS: 328,
  /** The max wait time in milliseconds for saving to localStorage per resource */
  MAX_WAIT_MS: 1e3
};

// node_modules/.pnpm/flatted@3.3.3/node_modules/flatted/esm/index.js
var { parse: $parse, stringify: $stringify } = JSON;
var { keys } = Object;
var Primitive = String;
var primitive = "string";
var ignore = {};
var object = "object";
var noop = (_2, value) => value;
var primitives = (value) => value instanceof Primitive ? Primitive(value) : value;
var Primitives = (_2, value) => typeof value === primitive ? new Primitive(value) : value;
var revive = (input, parsed, output, $) => {
  const lazy = [];
  for (let ke = keys(output), { length } = ke, y2 = 0; y2 < length; y2++) {
    const k3 = ke[y2];
    const value = output[k3];
    if (value instanceof Primitive) {
      const tmp = input[value];
      if (typeof tmp === object && !parsed.has(tmp)) {
        parsed.add(tmp);
        output[k3] = ignore;
        lazy.push({ k: k3, a: [input, parsed, tmp, $] });
      } else
        output[k3] = $.call(output, k3, tmp);
    } else if (output[k3] !== ignore)
      output[k3] = $.call(output, k3, value);
  }
  for (let { length } = lazy, i2 = 0; i2 < length; i2++) {
    const { k: k3, a: a3 } = lazy[i2];
    output[k3] = $.call(output, k3, revive.apply(null, a3));
  }
  return output;
};
var set = (known, input, value) => {
  const index = Primitive(input.push(value) - 1);
  known.set(value, index);
  return index;
};
var parse2 = (text, reviver) => {
  const input = $parse(text, Primitives).map(primitives);
  const value = input[0];
  const $ = reviver || noop;
  const tmp = typeof value === object && value ? revive(input, /* @__PURE__ */ new Set(), value, $) : value;
  return $.call({ "": tmp }, "", tmp);
};
var stringify2 = (value, replacer, space) => {
  const $ = replacer && typeof replacer === object ? (k3, v2) => k3 === "" || -1 < replacer.indexOf(k3) ? v2 : void 0 : replacer || noop;
  const known = /* @__PURE__ */ new Map();
  const input = [];
  const output = [];
  let i2 = +set(known, input, $.call({ "": value }, "", value));
  let firstRun = !i2;
  while (i2 < input.length) {
    firstRun = true;
    output[i2] = $stringify(input[i2++], replace, space);
  }
  return "[" + output.join(",") + "]";
  function replace(key, value2) {
    if (firstRun) {
      firstRun = !firstRun;
      return value2;
    }
    const after = $.call(this, key, value2);
    switch (typeof after) {
      case object:
        if (after === null) return after;
      case primitive:
        return known.get(after) || set(known, input, after);
    }
    return after;
  }
};

// node_modules/.pnpm/@scalar+object-utils@1.2.1/node_modules/@scalar/object-utils/dist/mutator-record/debounce.js
function debounce(fn, wait, { maxWait } = {}) {
  let timer = null;
  let maxTimer = null;
  return function(...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      maxTimer !== null ? clearTimeout(maxTimer) : null;
      maxTimer = null;
      fn.apply(this, args);
    }, wait);
    if (maxWait && !maxTimer) {
      maxTimer = setTimeout(() => {
        timer !== null ? clearTimeout(timer) : null;
        maxTimer = null;
        fn.apply(this, args);
      }, maxWait);
    }
  };
}

// node_modules/.pnpm/@scalar+object-utils@1.2.1/node_modules/@scalar/object-utils/dist/mutator-record/handlers.js
var MAX_MUTATION_RECORDS = 500;
function mutationFactory(entityMap, mutationMap, localStorageKey, maxNumberRecords = MAX_MUTATION_RECORDS) {
  function getMutator(uid) {
    const mutator = mutationMap[uid];
    if (!mutator) {
      console.warn(`Missing ${entityMap[uid] ? "mutator" : "object"} for uid: ${uid}`);
    }
    return mutator ?? null;
  }
  const onChange = localStorageKey ? debounce(() => localStorage.setItem(localStorageKey, stringify2(entityMap)), LS_CONFIG.DEBOUNCE_MS, {
    maxWait: LS_CONFIG.MAX_WAIT_MS
  }) : () => null;
  return {
    /** Adds a new item to the record of tracked items and creates a new mutation tracking instance */
    add: (item) => {
      entityMap[item.uid] = item;
      mutationMap[item.uid] = new Mutation(item, maxNumberRecords);
      onChange();
    },
    delete: (uid) => {
      if (!uid) {
        console.warn("[@scalar/object-utils] No uid provided to delete");
        return;
      }
      delete entityMap[uid];
      delete mutationMap[uid];
      onChange();
    },
    /** Destructive, overwrites a record to a new item and creates a new mutation tracking instance */
    set: (item) => {
      entityMap[item.uid] = item;
      mutationMap[item.uid] = new Mutation(item, maxNumberRecords);
      onChange();
    },
    /** Update a nested property and track the mutation */
    edit: (uid, path, value) => {
      if (!uid) {
        console.warn("[@scalar/object-utils] No uid provided to edit", path, value);
        return;
      }
      const mutator = getMutator(uid);
      mutator == null ? void 0 : mutator.mutate(path, value);
      onChange();
    },
    /** Commit an untracked edit to the object (undo/redo will not work) */
    untrackedEdit: (uid, path, value) => {
      const mutator = getMutator(uid);
      mutator == null ? void 0 : mutator._unsavedMutate(path, value);
      onChange();
    },
    /** Undo the last mutation */
    undo: (uid) => {
      const mutator = getMutator(uid);
      mutator == null ? void 0 : mutator.undo();
      onChange();
    },
    /** Redo a mutation if available */
    redo: (uid) => {
      const mutator = getMutator(uid);
      mutator == null ? void 0 : mutator.redo();
      onChange();
    },
    /** Destructive, clears the record */
    reset: () => {
      Object.keys(entityMap).forEach((uid) => {
        delete entityMap[uid];
        delete mutationMap[uid];
      });
      onChange();
    }
  };
}

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/store/collections.js
function T(s3) {
  const i2 = reactive({}), a3 = mutationFactory(i2, reactive({}), s3 && LS_KEYS.COLLECTION);
  return {
    collections: i2,
    collectionMutators: a3
  };
}
function Y({
  requests: s3,
  requestMutators: i2,
  requestExamples: a3,
  requestExampleMutators: v2,
  workspaces: C,
  workspaceMutators: d2,
  collections: c2,
  collectionMutators: l,
  tagMutators: E,
  serverMutators: h2
}) {
  return {
    addCollection: (e, o2) => {
      const t2 = collectionSchema.parse(e), n4 = C[o2];
      return n4 && d2.edit(o2, "collections", [...n4.collections, t2.uid]), l.add(t2), t2;
    },
    deleteCollection: (e, o2) => {
      var t2, n4;
      if (o2.uid) {
        if (((n4 = (t2 = c2[e.uid]) == null ? void 0 : t2.info) == null ? void 0 : n4.title) === "Drafts") {
          console.warn("The drafts collection cannot be deleted");
          return;
        }
        if (Object.values(c2).length === 1) {
          console.warn("You must have at least one collection");
          return;
        }
        e.tags.forEach((r4) => E.delete(r4)), e.requests.forEach((r4) => {
          const f2 = s3[r4];
          f2 && (i2.delete(r4), f2.examples.forEach((m2) => a3[m2] && v2.delete(m2)));
        }), e.servers.forEach((r4) => {
          r4 && h2.delete(r4);
        }), d2.edit(
          o2.uid,
          "collections",
          o2.collections.filter((r4) => r4 !== e.uid)
        ), l.delete(e.uid);
      }
    },
    addCollectionEnvironment: (e, o2, t2) => {
      const n4 = c2[t2];
      if (n4) {
        const r4 = n4["x-scalar-environments"] || {};
        l.edit(t2, "x-scalar-environments", {
          ...r4,
          [e]: o2
        });
      }
    },
    removeCollectionEnvironment: (e, o2) => {
      const t2 = c2[o2];
      if (t2) {
        const n4 = t2["x-scalar-environments"] || {};
        e in n4 && (delete n4[e], l.edit(o2, "x-scalar-environments", n4));
      }
    }
  };
}

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/store/cookies.js
function s2(r4) {
  const o2 = reactive({}), e = mutationFactory(o2, reactive({}), r4 && LS_KEYS.COOKIE);
  return {
    cookies: o2,
    cookieMutators: e
  };
}

// node_modules/.pnpm/@scalar+oas-utils@0.4.6/node_modules/@scalar/oas-utils/dist/entities/environment/environment.js
var environmentSchema = z.object({
  uid: z.string().brand(),
  name: z.string().optional().default("Default Environment"),
  color: z.string().optional().default("#FFFFFF"),
  value: z.string().default(""),
  isDefault: z.boolean().optional()
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/store/environment.js
function f(n4) {
  const t2 = reactive({}), e = mutationFactory(t2, reactive({}), n4 && LS_KEYS.ENVIRONMENT);
  return e.add(
    environmentSchema.parse({
      uid: "default",
      name: "Default Environment",
      color: "#FFFFFF",
      value: JSON.stringify({ exampleKey: "exampleValue" }, null, 2),
      isDefault: true
    })
  ), {
    environments: t2,
    environmentMutators: e
  };
}
function d({ environmentMutators: n4 }) {
  return { deleteEnvironment: (e) => {
    if (e === "default") {
      console.warn("Default environment cannot be deleted.");
      return;
    }
    n4.delete(e);
  } };
}

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/libs/event-bus.js
function a() {
  const t2 = /* @__PURE__ */ new Set();
  function f2(n4) {
    return t2.add(n4), () => o2(n4);
  }
  function r4(n4) {
    function e(...i2) {
      o2(e), n4(...i2);
    }
    return f2(e);
  }
  function o2(n4) {
    t2.delete(n4);
  }
  function c2() {
    t2.clear();
  }
  function u(n4) {
    t2 == null || t2.forEach((e) => e(n4));
  }
  return {
    on: f2,
    once: r4,
    off: o2,
    emit: u,
    reset: c2,
    listeners: () => Array.from(t2)
  };
}

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/store/events.js
function r2() {
  return {
    /**
     * Event bus to execute requests, usually triggered by the send button in the address bar
     * OR the keyboard shortcut
     */
    executeRequest: a(),
    /**
     * Event bus to focus the address bar or send button
     */
    focusAddressBar: a(),
    /**
     * Event bus to cancel requests, usually triggered by response loading overlay
     */
    cancelRequest: a(),
    /**
     * Event bus to keep track of when a request is started, stopped, or aborted
     */
    requestStatus: a(),
    /**
     * Event bus for controlling the Command Palette
     *
     * @param commandName - the command name you wish to execute, leave empty for the full palette
     */
    commandPalette: a(),
    /**
     * Event bus for handling hot keys
     */
    hotKeys: a()
  };
}

// node_modules/.pnpm/@scalar+openapi-parser@0.18.0/node_modules/@scalar/openapi-parser/dist/schemas/v2.0/schema.js
var schema_default = {
  "title": "A JSON Schema for Swagger 2.0 API.",
  "id": "http://swagger.io/v2/schema.json#",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "required": ["swagger", "info", "paths"],
  "additionalProperties": false,
  "patternProperties": {
    "^x-": {
      "$ref": "#/definitions/vendorExtension"
    }
  },
  "properties": {
    "swagger": {
      "type": "string",
      "enum": ["2.0"],
      "description": "The Swagger version of this document."
    },
    "info": {
      "$ref": "#/definitions/info"
    },
    "host": {
      "type": "string",
      "pattern": "^[^{}/ :\\\\]+(?::\\d+)?$",
      "description": "The host (name or ip) of the API. Example: 'swagger.io'"
    },
    "basePath": {
      "type": "string",
      "pattern": "^/",
      "description": "The base path to the API. Example: '/api'."
    },
    "schemes": {
      "$ref": "#/definitions/schemesList"
    },
    "consumes": {
      "description": "A list of MIME types accepted by the API.",
      "allOf": [
        {
          "$ref": "#/definitions/mediaTypeList"
        }
      ]
    },
    "produces": {
      "description": "A list of MIME types the API can produce.",
      "allOf": [
        {
          "$ref": "#/definitions/mediaTypeList"
        }
      ]
    },
    "paths": {
      "$ref": "#/definitions/paths"
    },
    "definitions": {
      "$ref": "#/definitions/definitions"
    },
    "parameters": {
      "$ref": "#/definitions/parameterDefinitions"
    },
    "responses": {
      "$ref": "#/definitions/responseDefinitions"
    },
    "security": {
      "$ref": "#/definitions/security"
    },
    "securityDefinitions": {
      "$ref": "#/definitions/securityDefinitions"
    },
    "tags": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/tag"
      },
      "uniqueItems": true
    },
    "externalDocs": {
      "$ref": "#/definitions/externalDocs"
    }
  },
  "definitions": {
    "info": {
      "type": "object",
      "description": "General information about the API.",
      "required": ["version", "title"],
      "additionalProperties": false,
      "patternProperties": {
        "^x-": {
          "$ref": "#/definitions/vendorExtension"
        }
      },
      "properties": {
        "title": {
          "type": "string",
          "description": "A unique and precise title of the API."
        },
        "version": {
          "type": "string",
          "description": "A semantic version number of the API."
        },
        "description": {
          "type": "string",
          "description": "A longer description of the API. Should be different from the title.  GitHub Flavored Markdown is allowed."
        },
        "termsOfService": {
          "type": "string",
          "description": "The terms of service for the API."
        },
        "contact": {
          "$ref": "#/definitions/contact"
        },
        "license": {
          "$ref": "#/definitions/license"
        }
      }
    },
    "contact": {
      "type": "object",
      "description": "Contact information for the owners of the API.",
      "additionalProperties": false,
      "properties": {
        "name": {
          "type": "string",
          "description": "The identifying name of the contact person/organization."
        },
        "url": {
          "type": "string",
          "description": "The URL pointing to the contact information.",
          "format": "uri"
        },
        "email": {
          "type": "string",
          "description": "The email address of the contact person/organization.",
          "format": "email"
        }
      },
      "patternProperties": {
        "^x-": {
          "$ref": "#/definitions/vendorExtension"
        }
      }
    },
    "license": {
      "type": "object",
      "required": ["name"],
      "additionalProperties": false,
      "properties": {
        "name": {
          "type": "string",
          "description": "The name of the license type. It's encouraged to use an OSI compatible license."
        },
        "url": {
          "type": "string",
          "description": "The URL pointing to the license.",
          "format": "uri"
        }
      },
      "patternProperties": {
        "^x-": {
          "$ref": "#/definitions/vendorExtension"
        }
      }
    },
    "paths": {
      "type": "object",
      "description": "Relative paths to the individual endpoints. They must be relative to the 'basePath'.",
      "patternProperties": {
        "^x-": {
          "$ref": "#/definitions/vendorExtension"
        },
        "^/": {
          "$ref": "#/definitions/pathItem"
        }
      },
      "additionalProperties": false
    },
    "definitions": {
      "type": "object",
      "additionalProperties": {
        "$ref": "#/definitions/schema"
      },
      "description": "One or more JSON objects describing the schemas being consumed and produced by the API."
    },
    "parameterDefinitions": {
      "type": "object",
      "additionalProperties": {
        "$ref": "#/definitions/parameter"
      },
      "description": "One or more JSON representations for parameters"
    },
    "responseDefinitions": {
      "type": "object",
      "additionalProperties": {
        "$ref": "#/definitions/response"
      },
      "description": "One or more JSON representations for responses"
    },
    "externalDocs": {
      "type": "object",
      "additionalProperties": false,
      "description": "information about external documentation",
      "required": ["url"],
      "properties": {
        "description": {
          "type": "string"
        },
        "url": {
          "type": "string",
          "format": "uri"
        }
      },
      "patternProperties": {
        "^x-": {
          "$ref": "#/definitions/vendorExtension"
        }
      }
    },
    "examples": {
      "type": "object",
      "additionalProperties": true
    },
    "mimeType": {
      "type": "string",
      "description": "The MIME type of the HTTP message."
    },
    "operation": {
      "type": "object",
      "required": ["responses"],
      "additionalProperties": false,
      "patternProperties": {
        "^x-": {
          "$ref": "#/definitions/vendorExtension"
        }
      },
      "properties": {
        "tags": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "uniqueItems": true
        },
        "summary": {
          "type": "string",
          "description": "A brief summary of the operation."
        },
        "description": {
          "type": "string",
          "description": "A longer description of the operation, GitHub Flavored Markdown is allowed."
        },
        "externalDocs": {
          "$ref": "#/definitions/externalDocs"
        },
        "operationId": {
          "type": "string",
          "description": "A unique identifier of the operation."
        },
        "produces": {
          "description": "A list of MIME types the API can produce.",
          "allOf": [
            {
              "$ref": "#/definitions/mediaTypeList"
            }
          ]
        },
        "consumes": {
          "description": "A list of MIME types the API can consume.",
          "allOf": [
            {
              "$ref": "#/definitions/mediaTypeList"
            }
          ]
        },
        "parameters": {
          "$ref": "#/definitions/parametersList"
        },
        "responses": {
          "$ref": "#/definitions/responses"
        },
        "schemes": {
          "$ref": "#/definitions/schemesList"
        },
        "deprecated": {
          "type": "boolean",
          "default": false
        },
        "security": {
          "$ref": "#/definitions/security"
        }
      }
    },
    "pathItem": {
      "type": "object",
      "additionalProperties": false,
      "patternProperties": {
        "^x-": {
          "$ref": "#/definitions/vendorExtension"
        }
      },
      "properties": {
        "$ref": {
          "type": "string"
        },
        "get": {
          "$ref": "#/definitions/operation"
        },
        "put": {
          "$ref": "#/definitions/operation"
        },
        "post": {
          "$ref": "#/definitions/operation"
        },
        "delete": {
          "$ref": "#/definitions/operation"
        },
        "options": {
          "$ref": "#/definitions/operation"
        },
        "head": {
          "$ref": "#/definitions/operation"
        },
        "patch": {
          "$ref": "#/definitions/operation"
        },
        "parameters": {
          "$ref": "#/definitions/parametersList"
        }
      }
    },
    "responses": {
      "type": "object",
      "description": "Response objects names can either be any valid HTTP status code or 'default'.",
      "minProperties": 1,
      "additionalProperties": false,
      "patternProperties": {
        "^([0-9]{3})$|^(default)$": {
          "$ref": "#/definitions/responseValue"
        },
        "^x-": {
          "$ref": "#/definitions/vendorExtension"
        }
      },
      "not": {
        "type": "object",
        "additionalProperties": false,
        "patternProperties": {
          "^x-": {
            "$ref": "#/definitions/vendorExtension"
          }
        }
      }
    },
    "responseValue": {
      "oneOf": [
        {
          "$ref": "#/definitions/response"
        },
        {
          "$ref": "#/definitions/jsonReference"
        }
      ]
    },
    "response": {
      "type": "object",
      "required": ["description"],
      "properties": {
        "description": {
          "type": "string"
        },
        "schema": {
          "oneOf": [
            {
              "$ref": "#/definitions/schema"
            },
            {
              "$ref": "#/definitions/fileSchema"
            }
          ]
        },
        "headers": {
          "$ref": "#/definitions/headers"
        },
        "examples": {
          "$ref": "#/definitions/examples"
        }
      },
      "additionalProperties": false,
      "patternProperties": {
        "^x-": {
          "$ref": "#/definitions/vendorExtension"
        }
      }
    },
    "headers": {
      "type": "object",
      "additionalProperties": {
        "$ref": "#/definitions/header"
      }
    },
    "header": {
      "type": "object",
      "additionalProperties": false,
      "required": ["type"],
      "properties": {
        "type": {
          "type": "string",
          "enum": ["string", "number", "integer", "boolean", "array"]
        },
        "format": {
          "type": "string"
        },
        "items": {
          "$ref": "#/definitions/primitivesItems"
        },
        "collectionFormat": {
          "$ref": "#/definitions/collectionFormat"
        },
        "default": {
          "$ref": "#/definitions/default"
        },
        "maximum": {
          "$ref": "#/definitions/maximum"
        },
        "exclusiveMaximum": {
          "$ref": "#/definitions/exclusiveMaximum"
        },
        "minimum": {
          "$ref": "#/definitions/minimum"
        },
        "exclusiveMinimum": {
          "$ref": "#/definitions/exclusiveMinimum"
        },
        "maxLength": {
          "$ref": "#/definitions/maxLength"
        },
        "minLength": {
          "$ref": "#/definitions/minLength"
        },
        "pattern": {
          "$ref": "#/definitions/pattern"
        },
        "maxItems": {
          "$ref": "#/definitions/maxItems"
        },
        "minItems": {
          "$ref": "#/definitions/minItems"
        },
        "uniqueItems": {
          "$ref": "#/definitions/uniqueItems"
        },
        "enum": {
          "$ref": "#/definitions/enum"
        },
        "multipleOf": {
          "$ref": "#/definitions/multipleOf"
        },
        "description": {
          "type": "string"
        }
      },
      "patternProperties": {
        "^x-": {
          "$ref": "#/definitions/vendorExtension"
        }
      }
    },
    "vendorExtension": {
      "description": "Any property starting with x- is valid.",
      "additionalProperties": true,
      "additionalItems": true
    },
    "bodyParameter": {
      "type": "object",
      "required": ["name", "in", "schema"],
      "patternProperties": {
        "^x-": {
          "$ref": "#/definitions/vendorExtension"
        }
      },
      "properties": {
        "description": {
          "type": "string",
          "description": "A brief description of the parameter. This could contain examples of use.  GitHub Flavored Markdown is allowed."
        },
        "name": {
          "type": "string",
          "description": "The name of the parameter."
        },
        "in": {
          "type": "string",
          "description": "Determines the location of the parameter.",
          "enum": ["body"]
        },
        "required": {
          "type": "boolean",
          "description": "Determines whether or not this parameter is required or optional.",
          "default": false
        },
        "schema": {
          "$ref": "#/definitions/schema"
        }
      },
      "additionalProperties": false
    },
    "headerParameterSubSchema": {
      "additionalProperties": false,
      "patternProperties": {
        "^x-": {
          "$ref": "#/definitions/vendorExtension"
        }
      },
      "properties": {
        "required": {
          "type": "boolean",
          "description": "Determines whether or not this parameter is required or optional.",
          "default": false
        },
        "in": {
          "type": "string",
          "description": "Determines the location of the parameter.",
          "enum": ["header"]
        },
        "description": {
          "type": "string",
          "description": "A brief description of the parameter. This could contain examples of use.  GitHub Flavored Markdown is allowed."
        },
        "name": {
          "type": "string",
          "description": "The name of the parameter."
        },
        "type": {
          "type": "string",
          "enum": ["string", "number", "boolean", "integer", "array"]
        },
        "format": {
          "type": "string"
        },
        "items": {
          "$ref": "#/definitions/primitivesItems"
        },
        "collectionFormat": {
          "$ref": "#/definitions/collectionFormat"
        },
        "default": {
          "$ref": "#/definitions/default"
        },
        "maximum": {
          "$ref": "#/definitions/maximum"
        },
        "exclusiveMaximum": {
          "$ref": "#/definitions/exclusiveMaximum"
        },
        "minimum": {
          "$ref": "#/definitions/minimum"
        },
        "exclusiveMinimum": {
          "$ref": "#/definitions/exclusiveMinimum"
        },
        "maxLength": {
          "$ref": "#/definitions/maxLength"
        },
        "minLength": {
          "$ref": "#/definitions/minLength"
        },
        "pattern": {
          "$ref": "#/definitions/pattern"
        },
        "maxItems": {
          "$ref": "#/definitions/maxItems"
        },
        "minItems": {
          "$ref": "#/definitions/minItems"
        },
        "uniqueItems": {
          "$ref": "#/definitions/uniqueItems"
        },
        "enum": {
          "$ref": "#/definitions/enum"
        },
        "multipleOf": {
          "$ref": "#/definitions/multipleOf"
        }
      }
    },
    "queryParameterSubSchema": {
      "additionalProperties": false,
      "patternProperties": {
        "^x-": {
          "$ref": "#/definitions/vendorExtension"
        }
      },
      "properties": {
        "required": {
          "type": "boolean",
          "description": "Determines whether or not this parameter is required or optional.",
          "default": false
        },
        "in": {
          "type": "string",
          "description": "Determines the location of the parameter.",
          "enum": ["query"]
        },
        "description": {
          "type": "string",
          "description": "A brief description of the parameter. This could contain examples of use.  GitHub Flavored Markdown is allowed."
        },
        "name": {
          "type": "string",
          "description": "The name of the parameter."
        },
        "allowEmptyValue": {
          "type": "boolean",
          "default": false,
          "description": "allows sending a parameter by name only or with an empty value."
        },
        "type": {
          "type": "string",
          "enum": ["string", "number", "boolean", "integer", "array"]
        },
        "format": {
          "type": "string"
        },
        "items": {
          "$ref": "#/definitions/primitivesItems"
        },
        "collectionFormat": {
          "$ref": "#/definitions/collectionFormatWithMulti"
        },
        "default": {
          "$ref": "#/definitions/default"
        },
        "maximum": {
          "$ref": "#/definitions/maximum"
        },
        "exclusiveMaximum": {
          "$ref": "#/definitions/exclusiveMaximum"
        },
        "minimum": {
          "$ref": "#/definitions/minimum"
        },
        "exclusiveMinimum": {
          "$ref": "#/definitions/exclusiveMinimum"
        },
        "maxLength": {
          "$ref": "#/definitions/maxLength"
        },
        "minLength": {
          "$ref": "#/definitions/minLength"
        },
        "pattern": {
          "$ref": "#/definitions/pattern"
        },
        "maxItems": {
          "$ref": "#/definitions/maxItems"
        },
        "minItems": {
          "$ref": "#/definitions/minItems"
        },
        "uniqueItems": {
          "$ref": "#/definitions/uniqueItems"
        },
        "enum": {
          "$ref": "#/definitions/enum"
        },
        "multipleOf": {
          "$ref": "#/definitions/multipleOf"
        }
      }
    },
    "formDataParameterSubSchema": {
      "additionalProperties": false,
      "patternProperties": {
        "^x-": {
          "$ref": "#/definitions/vendorExtension"
        }
      },
      "properties": {
        "required": {
          "type": "boolean",
          "description": "Determines whether or not this parameter is required or optional.",
          "default": false
        },
        "in": {
          "type": "string",
          "description": "Determines the location of the parameter.",
          "enum": ["formData"]
        },
        "description": {
          "type": "string",
          "description": "A brief description of the parameter. This could contain examples of use.  GitHub Flavored Markdown is allowed."
        },
        "name": {
          "type": "string",
          "description": "The name of the parameter."
        },
        "allowEmptyValue": {
          "type": "boolean",
          "default": false,
          "description": "allows sending a parameter by name only or with an empty value."
        },
        "type": {
          "type": "string",
          "enum": ["string", "number", "boolean", "integer", "array", "file"]
        },
        "format": {
          "type": "string"
        },
        "items": {
          "$ref": "#/definitions/primitivesItems"
        },
        "collectionFormat": {
          "$ref": "#/definitions/collectionFormatWithMulti"
        },
        "default": {
          "$ref": "#/definitions/default"
        },
        "maximum": {
          "$ref": "#/definitions/maximum"
        },
        "exclusiveMaximum": {
          "$ref": "#/definitions/exclusiveMaximum"
        },
        "minimum": {
          "$ref": "#/definitions/minimum"
        },
        "exclusiveMinimum": {
          "$ref": "#/definitions/exclusiveMinimum"
        },
        "maxLength": {
          "$ref": "#/definitions/maxLength"
        },
        "minLength": {
          "$ref": "#/definitions/minLength"
        },
        "pattern": {
          "$ref": "#/definitions/pattern"
        },
        "maxItems": {
          "$ref": "#/definitions/maxItems"
        },
        "minItems": {
          "$ref": "#/definitions/minItems"
        },
        "uniqueItems": {
          "$ref": "#/definitions/uniqueItems"
        },
        "enum": {
          "$ref": "#/definitions/enum"
        },
        "multipleOf": {
          "$ref": "#/definitions/multipleOf"
        }
      }
    },
    "pathParameterSubSchema": {
      "additionalProperties": false,
      "patternProperties": {
        "^x-": {
          "$ref": "#/definitions/vendorExtension"
        }
      },
      "required": ["required"],
      "properties": {
        "required": {
          "type": "boolean",
          "enum": [true],
          "description": "Determines whether or not this parameter is required or optional."
        },
        "in": {
          "type": "string",
          "description": "Determines the location of the parameter.",
          "enum": ["path"]
        },
        "description": {
          "type": "string",
          "description": "A brief description of the parameter. This could contain examples of use.  GitHub Flavored Markdown is allowed."
        },
        "name": {
          "type": "string",
          "description": "The name of the parameter."
        },
        "type": {
          "type": "string",
          "enum": ["string", "number", "boolean", "integer", "array"]
        },
        "format": {
          "type": "string"
        },
        "items": {
          "$ref": "#/definitions/primitivesItems"
        },
        "collectionFormat": {
          "$ref": "#/definitions/collectionFormat"
        },
        "default": {
          "$ref": "#/definitions/default"
        },
        "maximum": {
          "$ref": "#/definitions/maximum"
        },
        "exclusiveMaximum": {
          "$ref": "#/definitions/exclusiveMaximum"
        },
        "minimum": {
          "$ref": "#/definitions/minimum"
        },
        "exclusiveMinimum": {
          "$ref": "#/definitions/exclusiveMinimum"
        },
        "maxLength": {
          "$ref": "#/definitions/maxLength"
        },
        "minLength": {
          "$ref": "#/definitions/minLength"
        },
        "pattern": {
          "$ref": "#/definitions/pattern"
        },
        "maxItems": {
          "$ref": "#/definitions/maxItems"
        },
        "minItems": {
          "$ref": "#/definitions/minItems"
        },
        "uniqueItems": {
          "$ref": "#/definitions/uniqueItems"
        },
        "enum": {
          "$ref": "#/definitions/enum"
        },
        "multipleOf": {
          "$ref": "#/definitions/multipleOf"
        }
      }
    },
    "nonBodyParameter": {
      "type": "object",
      "required": ["name", "in", "type"],
      "oneOf": [
        {
          "$ref": "#/definitions/headerParameterSubSchema"
        },
        {
          "$ref": "#/definitions/formDataParameterSubSchema"
        },
        {
          "$ref": "#/definitions/queryParameterSubSchema"
        },
        {
          "$ref": "#/definitions/pathParameterSubSchema"
        }
      ]
    },
    "parameter": {
      "oneOf": [
        {
          "$ref": "#/definitions/bodyParameter"
        },
        {
          "$ref": "#/definitions/nonBodyParameter"
        }
      ]
    },
    "schema": {
      "type": "object",
      "description": "A deterministic version of a JSON Schema object.",
      "patternProperties": {
        "^x-": {
          "$ref": "#/definitions/vendorExtension"
        }
      },
      "properties": {
        "$ref": {
          "type": "string"
        },
        "format": {
          "type": "string"
        },
        "title": {
          "$ref": "http://json-schema.org/draft-04/schema#/properties/title"
        },
        "description": {
          "$ref": "http://json-schema.org/draft-04/schema#/properties/description"
        },
        "default": {
          "$ref": "http://json-schema.org/draft-04/schema#/properties/default"
        },
        "multipleOf": {
          "$ref": "http://json-schema.org/draft-04/schema#/properties/multipleOf"
        },
        "maximum": {
          "$ref": "http://json-schema.org/draft-04/schema#/properties/maximum"
        },
        "exclusiveMaximum": {
          "$ref": "http://json-schema.org/draft-04/schema#/properties/exclusiveMaximum"
        },
        "minimum": {
          "$ref": "http://json-schema.org/draft-04/schema#/properties/minimum"
        },
        "exclusiveMinimum": {
          "$ref": "http://json-schema.org/draft-04/schema#/properties/exclusiveMinimum"
        },
        "maxLength": {
          "$ref": "http://json-schema.org/draft-04/schema#/definitions/positiveInteger"
        },
        "minLength": {
          "$ref": "http://json-schema.org/draft-04/schema#/definitions/positiveIntegerDefault0"
        },
        "pattern": {
          "$ref": "http://json-schema.org/draft-04/schema#/properties/pattern"
        },
        "maxItems": {
          "$ref": "http://json-schema.org/draft-04/schema#/definitions/positiveInteger"
        },
        "minItems": {
          "$ref": "http://json-schema.org/draft-04/schema#/definitions/positiveIntegerDefault0"
        },
        "uniqueItems": {
          "$ref": "http://json-schema.org/draft-04/schema#/properties/uniqueItems"
        },
        "maxProperties": {
          "$ref": "http://json-schema.org/draft-04/schema#/definitions/positiveInteger"
        },
        "minProperties": {
          "$ref": "http://json-schema.org/draft-04/schema#/definitions/positiveIntegerDefault0"
        },
        "required": {
          "$ref": "http://json-schema.org/draft-04/schema#/definitions/stringArray"
        },
        "enum": {
          "$ref": "http://json-schema.org/draft-04/schema#/properties/enum"
        },
        "additionalProperties": {
          "anyOf": [
            {
              "$ref": "#/definitions/schema"
            },
            {
              "type": "boolean"
            }
          ],
          "default": {}
        },
        "type": {
          "$ref": "http://json-schema.org/draft-04/schema#/properties/type"
        },
        "items": {
          "anyOf": [
            {
              "$ref": "#/definitions/schema"
            },
            {
              "type": "array",
              "minItems": 1,
              "items": {
                "$ref": "#/definitions/schema"
              }
            }
          ],
          "default": {}
        },
        "allOf": {
          "type": "array",
          "minItems": 1,
          "items": {
            "$ref": "#/definitions/schema"
          }
        },
        "properties": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/definitions/schema"
          },
          "default": {}
        },
        "discriminator": {
          "type": "string"
        },
        "readOnly": {
          "type": "boolean",
          "default": false
        },
        "xml": {
          "$ref": "#/definitions/xml"
        },
        "externalDocs": {
          "$ref": "#/definitions/externalDocs"
        },
        "example": {}
      },
      "additionalProperties": false
    },
    "fileSchema": {
      "type": "object",
      "description": "A deterministic version of a JSON Schema object.",
      "patternProperties": {
        "^x-": {
          "$ref": "#/definitions/vendorExtension"
        }
      },
      "required": ["type"],
      "properties": {
        "format": {
          "type": "string"
        },
        "title": {
          "$ref": "http://json-schema.org/draft-04/schema#/properties/title"
        },
        "description": {
          "$ref": "http://json-schema.org/draft-04/schema#/properties/description"
        },
        "default": {
          "$ref": "http://json-schema.org/draft-04/schema#/properties/default"
        },
        "required": {
          "$ref": "http://json-schema.org/draft-04/schema#/definitions/stringArray"
        },
        "type": {
          "type": "string",
          "enum": ["file"]
        },
        "readOnly": {
          "type": "boolean",
          "default": false
        },
        "externalDocs": {
          "$ref": "#/definitions/externalDocs"
        },
        "example": {}
      },
      "additionalProperties": false
    },
    "primitivesItems": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "type": {
          "type": "string",
          "enum": ["string", "number", "integer", "boolean", "array"]
        },
        "format": {
          "type": "string"
        },
        "items": {
          "$ref": "#/definitions/primitivesItems"
        },
        "collectionFormat": {
          "$ref": "#/definitions/collectionFormat"
        },
        "default": {
          "$ref": "#/definitions/default"
        },
        "maximum": {
          "$ref": "#/definitions/maximum"
        },
        "exclusiveMaximum": {
          "$ref": "#/definitions/exclusiveMaximum"
        },
        "minimum": {
          "$ref": "#/definitions/minimum"
        },
        "exclusiveMinimum": {
          "$ref": "#/definitions/exclusiveMinimum"
        },
        "maxLength": {
          "$ref": "#/definitions/maxLength"
        },
        "minLength": {
          "$ref": "#/definitions/minLength"
        },
        "pattern": {
          "$ref": "#/definitions/pattern"
        },
        "maxItems": {
          "$ref": "#/definitions/maxItems"
        },
        "minItems": {
          "$ref": "#/definitions/minItems"
        },
        "uniqueItems": {
          "$ref": "#/definitions/uniqueItems"
        },
        "enum": {
          "$ref": "#/definitions/enum"
        },
        "multipleOf": {
          "$ref": "#/definitions/multipleOf"
        }
      },
      "patternProperties": {
        "^x-": {
          "$ref": "#/definitions/vendorExtension"
        }
      }
    },
    "security": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/securityRequirement"
      },
      "uniqueItems": true
    },
    "securityRequirement": {
      "type": "object",
      "additionalProperties": {
        "type": "array",
        "items": {
          "type": "string"
        },
        "uniqueItems": true
      }
    },
    "xml": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "name": {
          "type": "string"
        },
        "namespace": {
          "type": "string"
        },
        "prefix": {
          "type": "string"
        },
        "attribute": {
          "type": "boolean",
          "default": false
        },
        "wrapped": {
          "type": "boolean",
          "default": false
        }
      },
      "patternProperties": {
        "^x-": {
          "$ref": "#/definitions/vendorExtension"
        }
      }
    },
    "tag": {
      "type": "object",
      "additionalProperties": false,
      "required": ["name"],
      "properties": {
        "name": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "externalDocs": {
          "$ref": "#/definitions/externalDocs"
        }
      },
      "patternProperties": {
        "^x-": {
          "$ref": "#/definitions/vendorExtension"
        }
      }
    },
    "securityDefinitions": {
      "type": "object",
      "additionalProperties": {
        "oneOf": [
          {
            "$ref": "#/definitions/basicAuthenticationSecurity"
          },
          {
            "$ref": "#/definitions/apiKeySecurity"
          },
          {
            "$ref": "#/definitions/oauth2ImplicitSecurity"
          },
          {
            "$ref": "#/definitions/oauth2PasswordSecurity"
          },
          {
            "$ref": "#/definitions/oauth2ApplicationSecurity"
          },
          {
            "$ref": "#/definitions/oauth2AccessCodeSecurity"
          }
        ]
      }
    },
    "basicAuthenticationSecurity": {
      "type": "object",
      "additionalProperties": false,
      "required": ["type"],
      "properties": {
        "type": {
          "type": "string",
          "enum": ["basic"]
        },
        "description": {
          "type": "string"
        }
      },
      "patternProperties": {
        "^x-": {
          "$ref": "#/definitions/vendorExtension"
        }
      }
    },
    "apiKeySecurity": {
      "type": "object",
      "additionalProperties": false,
      "required": ["type", "name", "in"],
      "properties": {
        "type": {
          "type": "string",
          "enum": ["apiKey"]
        },
        "name": {
          "type": "string"
        },
        "in": {
          "type": "string",
          "enum": ["header", "query"]
        },
        "description": {
          "type": "string"
        }
      },
      "patternProperties": {
        "^x-": {
          "$ref": "#/definitions/vendorExtension"
        }
      }
    },
    "oauth2ImplicitSecurity": {
      "type": "object",
      "additionalProperties": false,
      "required": ["type", "flow", "authorizationUrl"],
      "properties": {
        "type": {
          "type": "string",
          "enum": ["oauth2"]
        },
        "flow": {
          "type": "string",
          "enum": ["implicit"]
        },
        "scopes": {
          "$ref": "#/definitions/oauth2Scopes"
        },
        "authorizationUrl": {
          "type": "string",
          "format": "uri"
        },
        "description": {
          "type": "string"
        }
      },
      "patternProperties": {
        "^x-": {
          "$ref": "#/definitions/vendorExtension"
        }
      }
    },
    "oauth2PasswordSecurity": {
      "type": "object",
      "additionalProperties": false,
      "required": ["type", "flow", "tokenUrl"],
      "properties": {
        "type": {
          "type": "string",
          "enum": ["oauth2"]
        },
        "flow": {
          "type": "string",
          "enum": ["password"]
        },
        "scopes": {
          "$ref": "#/definitions/oauth2Scopes"
        },
        "tokenUrl": {
          "type": "string",
          "format": "uri"
        },
        "description": {
          "type": "string"
        }
      },
      "patternProperties": {
        "^x-": {
          "$ref": "#/definitions/vendorExtension"
        }
      }
    },
    "oauth2ApplicationSecurity": {
      "type": "object",
      "additionalProperties": false,
      "required": ["type", "flow", "tokenUrl"],
      "properties": {
        "type": {
          "type": "string",
          "enum": ["oauth2"]
        },
        "flow": {
          "type": "string",
          "enum": ["application"]
        },
        "scopes": {
          "$ref": "#/definitions/oauth2Scopes"
        },
        "tokenUrl": {
          "type": "string",
          "format": "uri"
        },
        "description": {
          "type": "string"
        }
      },
      "patternProperties": {
        "^x-": {
          "$ref": "#/definitions/vendorExtension"
        }
      }
    },
    "oauth2AccessCodeSecurity": {
      "type": "object",
      "additionalProperties": false,
      "required": ["type", "flow", "authorizationUrl", "tokenUrl"],
      "properties": {
        "type": {
          "type": "string",
          "enum": ["oauth2"]
        },
        "flow": {
          "type": "string",
          "enum": ["accessCode"]
        },
        "scopes": {
          "$ref": "#/definitions/oauth2Scopes"
        },
        "authorizationUrl": {
          "type": "string",
          "format": "uri"
        },
        "tokenUrl": {
          "type": "string",
          "format": "uri"
        },
        "description": {
          "type": "string"
        }
      },
      "patternProperties": {
        "^x-": {
          "$ref": "#/definitions/vendorExtension"
        }
      }
    },
    "oauth2Scopes": {
      "type": "object",
      "additionalProperties": {
        "type": "string"
      }
    },
    "mediaTypeList": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/mimeType"
      },
      "uniqueItems": true
    },
    "parametersList": {
      "type": "array",
      "description": "The parameters needed to send a valid API call.",
      "additionalItems": false,
      "items": {
        "oneOf": [
          {
            "$ref": "#/definitions/parameter"
          },
          {
            "$ref": "#/definitions/jsonReference"
          }
        ]
      },
      "uniqueItems": true
    },
    "schemesList": {
      "type": "array",
      "description": "The transfer protocol of the API.",
      "items": {
        "type": "string",
        "enum": ["http", "https", "ws", "wss"]
      },
      "uniqueItems": true
    },
    "collectionFormat": {
      "type": "string",
      "enum": ["csv", "ssv", "tsv", "pipes"],
      "default": "csv"
    },
    "collectionFormatWithMulti": {
      "type": "string",
      "enum": ["csv", "ssv", "tsv", "pipes", "multi"],
      "default": "csv"
    },
    "title": {
      "$ref": "http://json-schema.org/draft-04/schema#/properties/title"
    },
    "description": {
      "$ref": "http://json-schema.org/draft-04/schema#/properties/description"
    },
    "default": {
      "$ref": "http://json-schema.org/draft-04/schema#/properties/default"
    },
    "multipleOf": {
      "$ref": "http://json-schema.org/draft-04/schema#/properties/multipleOf"
    },
    "maximum": {
      "$ref": "http://json-schema.org/draft-04/schema#/properties/maximum"
    },
    "exclusiveMaximum": {
      "$ref": "http://json-schema.org/draft-04/schema#/properties/exclusiveMaximum"
    },
    "minimum": {
      "$ref": "http://json-schema.org/draft-04/schema#/properties/minimum"
    },
    "exclusiveMinimum": {
      "$ref": "http://json-schema.org/draft-04/schema#/properties/exclusiveMinimum"
    },
    "maxLength": {
      "$ref": "http://json-schema.org/draft-04/schema#/definitions/positiveInteger"
    },
    "minLength": {
      "$ref": "http://json-schema.org/draft-04/schema#/definitions/positiveIntegerDefault0"
    },
    "pattern": {
      "$ref": "http://json-schema.org/draft-04/schema#/properties/pattern"
    },
    "maxItems": {
      "$ref": "http://json-schema.org/draft-04/schema#/definitions/positiveInteger"
    },
    "minItems": {
      "$ref": "http://json-schema.org/draft-04/schema#/definitions/positiveIntegerDefault0"
    },
    "uniqueItems": {
      "$ref": "http://json-schema.org/draft-04/schema#/properties/uniqueItems"
    },
    "enum": {
      "$ref": "http://json-schema.org/draft-04/schema#/properties/enum"
    },
    "jsonReference": {
      "type": "object",
      "required": ["$ref"],
      "additionalProperties": false,
      "properties": {
        "$ref": {
          "type": "string"
        }
      }
    }
  }
};

// node_modules/.pnpm/@scalar+openapi-parser@0.18.0/node_modules/@scalar/openapi-parser/dist/schemas/v3.0/schema.js
var schema_default2 = {
  "id": "https://spec.openapis.org/oas/3.0/schema/2021-09-28",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "description": "The description of OpenAPI v3.0.x documents, as defined by https://spec.openapis.org/oas/v3.0.3",
  "type": "object",
  "required": ["openapi", "info", "paths"],
  "properties": {
    "openapi": {
      "type": "string",
      "pattern": "^3\\.0\\.\\d(-.+)?$"
    },
    "info": {
      "$ref": "#/definitions/Info"
    },
    "externalDocs": {
      "$ref": "#/definitions/ExternalDocumentation"
    },
    "servers": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/Server"
      }
    },
    "security": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/SecurityRequirement"
      }
    },
    "tags": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/Tag"
      },
      "uniqueItems": true
    },
    "paths": {
      "$ref": "#/definitions/Paths"
    },
    "components": {
      "$ref": "#/definitions/Components"
    }
  },
  "patternProperties": {
    "^x-": {}
  },
  "additionalProperties": false,
  "definitions": {
    "Reference": {
      "type": "object",
      "required": ["$ref"],
      "patternProperties": {
        "^\\$ref$": {
          "type": "string",
          "format": "uri-reference"
        }
      }
    },
    "Info": {
      "type": "object",
      "required": ["title", "version"],
      "properties": {
        "title": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "termsOfService": {
          "type": "string",
          "format": "uri-reference"
        },
        "contact": {
          "$ref": "#/definitions/Contact"
        },
        "license": {
          "$ref": "#/definitions/License"
        },
        "version": {
          "type": "string"
        }
      },
      "patternProperties": {
        "^x-": {}
      },
      "additionalProperties": false
    },
    "Contact": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "url": {
          "type": "string",
          "format": "uri-reference"
        },
        "email": {
          "type": "string",
          "format": "email"
        }
      },
      "patternProperties": {
        "^x-": {}
      },
      "additionalProperties": false
    },
    "License": {
      "type": "object",
      "required": ["name"],
      "properties": {
        "name": {
          "type": "string"
        },
        "url": {
          "type": "string",
          "format": "uri-reference"
        }
      },
      "patternProperties": {
        "^x-": {}
      },
      "additionalProperties": false
    },
    "Server": {
      "type": "object",
      "required": ["url"],
      "properties": {
        "url": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "variables": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/definitions/ServerVariable"
          }
        }
      },
      "patternProperties": {
        "^x-": {}
      },
      "additionalProperties": false
    },
    "ServerVariable": {
      "type": "object",
      "required": ["default"],
      "properties": {
        "enum": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "default": {
          "type": "string"
        },
        "description": {
          "type": "string"
        }
      },
      "patternProperties": {
        "^x-": {}
      },
      "additionalProperties": false
    },
    "Components": {
      "type": "object",
      "properties": {
        "schemas": {
          "type": "object",
          "patternProperties": {
            "^[a-zA-Z0-9\\.\\-_]+$": {
              "oneOf": [
                {
                  "$ref": "#/definitions/Schema"
                },
                {
                  "$ref": "#/definitions/Reference"
                }
              ]
            }
          }
        },
        "responses": {
          "type": "object",
          "patternProperties": {
            "^[a-zA-Z0-9\\.\\-_]+$": {
              "oneOf": [
                {
                  "$ref": "#/definitions/Reference"
                },
                {
                  "$ref": "#/definitions/Response"
                }
              ]
            }
          }
        },
        "parameters": {
          "type": "object",
          "patternProperties": {
            "^[a-zA-Z0-9\\.\\-_]+$": {
              "oneOf": [
                {
                  "$ref": "#/definitions/Reference"
                },
                {
                  "$ref": "#/definitions/Parameter"
                }
              ]
            }
          }
        },
        "examples": {
          "type": "object",
          "patternProperties": {
            "^[a-zA-Z0-9\\.\\-_]+$": {
              "oneOf": [
                {
                  "$ref": "#/definitions/Reference"
                },
                {
                  "$ref": "#/definitions/Example"
                }
              ]
            }
          }
        },
        "requestBodies": {
          "type": "object",
          "patternProperties": {
            "^[a-zA-Z0-9\\.\\-_]+$": {
              "oneOf": [
                {
                  "$ref": "#/definitions/Reference"
                },
                {
                  "$ref": "#/definitions/RequestBody"
                }
              ]
            }
          }
        },
        "headers": {
          "type": "object",
          "patternProperties": {
            "^[a-zA-Z0-9\\.\\-_]+$": {
              "oneOf": [
                {
                  "$ref": "#/definitions/Reference"
                },
                {
                  "$ref": "#/definitions/Header"
                }
              ]
            }
          }
        },
        "securitySchemes": {
          "type": "object",
          "patternProperties": {
            "^[a-zA-Z0-9\\.\\-_]+$": {
              "oneOf": [
                {
                  "$ref": "#/definitions/Reference"
                },
                {
                  "$ref": "#/definitions/SecurityScheme"
                }
              ]
            }
          }
        },
        "links": {
          "type": "object",
          "patternProperties": {
            "^[a-zA-Z0-9\\.\\-_]+$": {
              "oneOf": [
                {
                  "$ref": "#/definitions/Reference"
                },
                {
                  "$ref": "#/definitions/Link"
                }
              ]
            }
          }
        },
        "callbacks": {
          "type": "object",
          "patternProperties": {
            "^[a-zA-Z0-9\\.\\-_]+$": {
              "oneOf": [
                {
                  "$ref": "#/definitions/Reference"
                },
                {
                  "$ref": "#/definitions/Callback"
                }
              ]
            }
          }
        }
      },
      "patternProperties": {
        "^x-": {}
      },
      "additionalProperties": false
    },
    "Schema": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string"
        },
        "multipleOf": {
          "type": "number",
          "minimum": 0,
          "exclusiveMinimum": true
        },
        "maximum": {
          "type": "number"
        },
        "exclusiveMaximum": {
          "type": "boolean",
          "default": false
        },
        "minimum": {
          "type": "number"
        },
        "exclusiveMinimum": {
          "type": "boolean",
          "default": false
        },
        "maxLength": {
          "type": "integer",
          "minimum": 0
        },
        "minLength": {
          "type": "integer",
          "minimum": 0,
          "default": 0
        },
        "pattern": {
          "type": "string",
          "format": "regex"
        },
        "maxItems": {
          "type": "integer",
          "minimum": 0
        },
        "minItems": {
          "type": "integer",
          "minimum": 0,
          "default": 0
        },
        "uniqueItems": {
          "type": "boolean",
          "default": false
        },
        "maxProperties": {
          "type": "integer",
          "minimum": 0
        },
        "minProperties": {
          "type": "integer",
          "minimum": 0,
          "default": 0
        },
        "required": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "minItems": 1,
          "uniqueItems": true
        },
        "enum": {
          "type": "array",
          "items": {},
          "minItems": 1,
          "uniqueItems": false
        },
        "type": {
          "type": "string",
          "enum": ["array", "boolean", "integer", "number", "object", "string"]
        },
        "not": {
          "oneOf": [
            {
              "$ref": "#/definitions/Schema"
            },
            {
              "$ref": "#/definitions/Reference"
            }
          ]
        },
        "allOf": {
          "type": "array",
          "items": {
            "oneOf": [
              {
                "$ref": "#/definitions/Schema"
              },
              {
                "$ref": "#/definitions/Reference"
              }
            ]
          }
        },
        "oneOf": {
          "type": "array",
          "items": {
            "oneOf": [
              {
                "$ref": "#/definitions/Schema"
              },
              {
                "$ref": "#/definitions/Reference"
              }
            ]
          }
        },
        "anyOf": {
          "type": "array",
          "items": {
            "oneOf": [
              {
                "$ref": "#/definitions/Schema"
              },
              {
                "$ref": "#/definitions/Reference"
              }
            ]
          }
        },
        "items": {
          "oneOf": [
            {
              "$ref": "#/definitions/Schema"
            },
            {
              "$ref": "#/definitions/Reference"
            }
          ]
        },
        "properties": {
          "type": "object",
          "additionalProperties": {
            "oneOf": [
              {
                "$ref": "#/definitions/Schema"
              },
              {
                "$ref": "#/definitions/Reference"
              }
            ]
          }
        },
        "additionalProperties": {
          "oneOf": [
            {
              "$ref": "#/definitions/Schema"
            },
            {
              "$ref": "#/definitions/Reference"
            },
            {
              "type": "boolean"
            }
          ],
          "default": true
        },
        "description": {
          "type": "string"
        },
        "format": {
          "type": "string"
        },
        "default": {},
        "nullable": {
          "type": "boolean",
          "default": false
        },
        "discriminator": {
          "$ref": "#/definitions/Discriminator"
        },
        "readOnly": {
          "type": "boolean",
          "default": false
        },
        "writeOnly": {
          "type": "boolean",
          "default": false
        },
        "example": {},
        "externalDocs": {
          "$ref": "#/definitions/ExternalDocumentation"
        },
        "deprecated": {
          "type": "boolean",
          "default": false
        },
        "xml": {
          "$ref": "#/definitions/XML"
        }
      },
      "patternProperties": {
        "^x-": {}
      },
      "additionalProperties": false
    },
    "Discriminator": {
      "type": "object",
      "required": ["propertyName"],
      "properties": {
        "propertyName": {
          "type": "string"
        },
        "mapping": {
          "type": "object",
          "additionalProperties": {
            "type": "string"
          }
        }
      }
    },
    "XML": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "namespace": {
          "type": "string",
          "format": "uri"
        },
        "prefix": {
          "type": "string"
        },
        "attribute": {
          "type": "boolean",
          "default": false
        },
        "wrapped": {
          "type": "boolean",
          "default": false
        }
      },
      "patternProperties": {
        "^x-": {}
      },
      "additionalProperties": false
    },
    "Response": {
      "type": "object",
      "required": ["description"],
      "properties": {
        "description": {
          "type": "string"
        },
        "headers": {
          "type": "object",
          "additionalProperties": {
            "oneOf": [
              {
                "$ref": "#/definitions/Header"
              },
              {
                "$ref": "#/definitions/Reference"
              }
            ]
          }
        },
        "content": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/definitions/MediaType"
          }
        },
        "links": {
          "type": "object",
          "additionalProperties": {
            "oneOf": [
              {
                "$ref": "#/definitions/Link"
              },
              {
                "$ref": "#/definitions/Reference"
              }
            ]
          }
        }
      },
      "patternProperties": {
        "^x-": {}
      },
      "additionalProperties": false
    },
    "MediaType": {
      "type": "object",
      "properties": {
        "schema": {
          "oneOf": [
            {
              "$ref": "#/definitions/Schema"
            },
            {
              "$ref": "#/definitions/Reference"
            }
          ]
        },
        "example": {},
        "examples": {
          "type": "object",
          "additionalProperties": {
            "oneOf": [
              {
                "$ref": "#/definitions/Example"
              },
              {
                "$ref": "#/definitions/Reference"
              }
            ]
          }
        },
        "encoding": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/definitions/Encoding"
          }
        }
      },
      "patternProperties": {
        "^x-": {}
      },
      "additionalProperties": false,
      "allOf": [
        {
          "$ref": "#/definitions/ExampleXORExamples"
        }
      ]
    },
    "Example": {
      "type": "object",
      "properties": {
        "summary": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "value": {},
        "externalValue": {
          "type": "string",
          "format": "uri-reference"
        }
      },
      "patternProperties": {
        "^x-": {}
      },
      "additionalProperties": false
    },
    "Header": {
      "type": "object",
      "properties": {
        "description": {
          "type": "string"
        },
        "required": {
          "type": "boolean",
          "default": false
        },
        "deprecated": {
          "type": "boolean",
          "default": false
        },
        "allowEmptyValue": {
          "type": "boolean",
          "default": false
        },
        "style": {
          "type": "string",
          "enum": ["simple"],
          "default": "simple"
        },
        "explode": {
          "type": "boolean"
        },
        "allowReserved": {
          "type": "boolean",
          "default": false
        },
        "schema": {
          "oneOf": [
            {
              "$ref": "#/definitions/Schema"
            },
            {
              "$ref": "#/definitions/Reference"
            }
          ]
        },
        "content": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/definitions/MediaType"
          },
          "minProperties": 1,
          "maxProperties": 1
        },
        "example": {},
        "examples": {
          "type": "object",
          "additionalProperties": {
            "oneOf": [
              {
                "$ref": "#/definitions/Example"
              },
              {
                "$ref": "#/definitions/Reference"
              }
            ]
          }
        }
      },
      "patternProperties": {
        "^x-": {}
      },
      "additionalProperties": false,
      "allOf": [
        {
          "$ref": "#/definitions/ExampleXORExamples"
        },
        {
          "$ref": "#/definitions/SchemaXORContent"
        }
      ]
    },
    "Paths": {
      "type": "object",
      "patternProperties": {
        "^\\/": {
          "$ref": "#/definitions/PathItem"
        },
        "^x-": {}
      },
      "additionalProperties": false
    },
    "PathItem": {
      "type": "object",
      "properties": {
        "$ref": {
          "type": "string"
        },
        "summary": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "servers": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Server"
          }
        },
        "parameters": {
          "type": "array",
          "items": {
            "oneOf": [
              {
                "$ref": "#/definitions/Parameter"
              },
              {
                "$ref": "#/definitions/Reference"
              }
            ]
          },
          "uniqueItems": true
        }
      },
      "patternProperties": {
        "^(get|put|post|delete|options|head|patch|trace)$": {
          "$ref": "#/definitions/Operation"
        },
        "^x-": {}
      },
      "additionalProperties": false
    },
    "Operation": {
      "type": "object",
      "required": ["responses"],
      "properties": {
        "tags": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "summary": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "externalDocs": {
          "$ref": "#/definitions/ExternalDocumentation"
        },
        "operationId": {
          "type": "string"
        },
        "parameters": {
          "type": "array",
          "items": {
            "oneOf": [
              {
                "$ref": "#/definitions/Parameter"
              },
              {
                "$ref": "#/definitions/Reference"
              }
            ]
          },
          "uniqueItems": true
        },
        "requestBody": {
          "oneOf": [
            {
              "$ref": "#/definitions/RequestBody"
            },
            {
              "$ref": "#/definitions/Reference"
            }
          ]
        },
        "responses": {
          "$ref": "#/definitions/Responses"
        },
        "callbacks": {
          "type": "object",
          "additionalProperties": {
            "oneOf": [
              {
                "$ref": "#/definitions/Callback"
              },
              {
                "$ref": "#/definitions/Reference"
              }
            ]
          }
        },
        "deprecated": {
          "type": "boolean",
          "default": false
        },
        "security": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/SecurityRequirement"
          }
        },
        "servers": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Server"
          }
        }
      },
      "patternProperties": {
        "^x-": {}
      },
      "additionalProperties": false
    },
    "Responses": {
      "type": "object",
      "properties": {
        "default": {
          "oneOf": [
            {
              "$ref": "#/definitions/Response"
            },
            {
              "$ref": "#/definitions/Reference"
            }
          ]
        }
      },
      "patternProperties": {
        "^[1-5](?:\\d{2}|XX)$": {
          "oneOf": [
            {
              "$ref": "#/definitions/Response"
            },
            {
              "$ref": "#/definitions/Reference"
            }
          ]
        },
        "^x-": {}
      },
      "minProperties": 1,
      "additionalProperties": false
    },
    "SecurityRequirement": {
      "type": "object",
      "additionalProperties": {
        "type": "array",
        "items": {
          "type": "string"
        }
      }
    },
    "Tag": {
      "type": "object",
      "required": ["name"],
      "properties": {
        "name": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "externalDocs": {
          "$ref": "#/definitions/ExternalDocumentation"
        }
      },
      "patternProperties": {
        "^x-": {}
      },
      "additionalProperties": false
    },
    "ExternalDocumentation": {
      "type": "object",
      "required": ["url"],
      "properties": {
        "description": {
          "type": "string"
        },
        "url": {
          "type": "string",
          "format": "uri-reference"
        }
      },
      "patternProperties": {
        "^x-": {}
      },
      "additionalProperties": false
    },
    "ExampleXORExamples": {
      "description": "Example and examples are mutually exclusive",
      "not": {
        "required": ["example", "examples"]
      }
    },
    "SchemaXORContent": {
      "description": "Schema and content are mutually exclusive, at least one is required",
      "not": {
        "required": ["schema", "content"]
      },
      "oneOf": [
        {
          "required": ["schema"]
        },
        {
          "required": ["content"],
          "description": "Some properties are not allowed if content is present",
          "allOf": [
            {
              "not": {
                "required": ["style"]
              }
            },
            {
              "not": {
                "required": ["explode"]
              }
            },
            {
              "not": {
                "required": ["allowReserved"]
              }
            },
            {
              "not": {
                "required": ["example"]
              }
            },
            {
              "not": {
                "required": ["examples"]
              }
            }
          ]
        }
      ]
    },
    "Parameter": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "in": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "required": {
          "type": "boolean",
          "default": false
        },
        "deprecated": {
          "type": "boolean",
          "default": false
        },
        "allowEmptyValue": {
          "type": "boolean",
          "default": false
        },
        "style": {
          "type": "string"
        },
        "explode": {
          "type": "boolean"
        },
        "allowReserved": {
          "type": "boolean",
          "default": false
        },
        "schema": {
          "oneOf": [
            {
              "$ref": "#/definitions/Schema"
            },
            {
              "$ref": "#/definitions/Reference"
            }
          ]
        },
        "content": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/definitions/MediaType"
          },
          "minProperties": 1,
          "maxProperties": 1
        },
        "example": {},
        "examples": {
          "type": "object",
          "additionalProperties": {
            "oneOf": [
              {
                "$ref": "#/definitions/Example"
              },
              {
                "$ref": "#/definitions/Reference"
              }
            ]
          }
        }
      },
      "patternProperties": {
        "^x-": {}
      },
      "additionalProperties": false,
      "required": ["name", "in"],
      "allOf": [
        {
          "$ref": "#/definitions/ExampleXORExamples"
        },
        {
          "$ref": "#/definitions/SchemaXORContent"
        },
        {
          "$ref": "#/definitions/ParameterLocation"
        }
      ]
    },
    "ParameterLocation": {
      "description": "Parameter location",
      "oneOf": [
        {
          "description": "Parameter in path",
          "required": ["required"],
          "properties": {
            "in": {
              "enum": ["path"]
            },
            "style": {
              "enum": ["matrix", "label", "simple"],
              "default": "simple"
            },
            "required": {
              "enum": [true]
            }
          }
        },
        {
          "description": "Parameter in query",
          "properties": {
            "in": {
              "enum": ["query"]
            },
            "style": {
              "enum": ["form", "spaceDelimited", "pipeDelimited", "deepObject"],
              "default": "form"
            }
          }
        },
        {
          "description": "Parameter in header",
          "properties": {
            "in": {
              "enum": ["header"]
            },
            "style": {
              "enum": ["simple"],
              "default": "simple"
            }
          }
        },
        {
          "description": "Parameter in cookie",
          "properties": {
            "in": {
              "enum": ["cookie"]
            },
            "style": {
              "enum": ["form"],
              "default": "form"
            }
          }
        }
      ]
    },
    "RequestBody": {
      "type": "object",
      "required": ["content"],
      "properties": {
        "description": {
          "type": "string"
        },
        "content": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/definitions/MediaType"
          }
        },
        "required": {
          "type": "boolean",
          "default": false
        }
      },
      "patternProperties": {
        "^x-": {}
      },
      "additionalProperties": false
    },
    "SecurityScheme": {
      "oneOf": [
        {
          "$ref": "#/definitions/APIKeySecurityScheme"
        },
        {
          "$ref": "#/definitions/HTTPSecurityScheme"
        },
        {
          "$ref": "#/definitions/OAuth2SecurityScheme"
        },
        {
          "$ref": "#/definitions/OpenIdConnectSecurityScheme"
        }
      ]
    },
    "APIKeySecurityScheme": {
      "type": "object",
      "required": ["type", "name", "in"],
      "properties": {
        "type": {
          "type": "string",
          "enum": ["apiKey"]
        },
        "name": {
          "type": "string"
        },
        "in": {
          "type": "string",
          "enum": ["header", "query", "cookie"]
        },
        "description": {
          "type": "string"
        }
      },
      "patternProperties": {
        "^x-": {}
      },
      "additionalProperties": false
    },
    "HTTPSecurityScheme": {
      "type": "object",
      "required": ["scheme", "type"],
      "properties": {
        "scheme": {
          "type": "string"
        },
        "bearerFormat": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "type": {
          "type": "string",
          "enum": ["http"]
        }
      },
      "patternProperties": {
        "^x-": {}
      },
      "additionalProperties": false,
      "oneOf": [
        {
          "description": "Bearer",
          "properties": {
            "scheme": {
              "type": "string",
              "pattern": "^[Bb][Ee][Aa][Rr][Ee][Rr]$"
            }
          }
        },
        {
          "description": "Non Bearer",
          "not": {
            "required": ["bearerFormat"]
          },
          "properties": {
            "scheme": {
              "not": {
                "type": "string",
                "pattern": "^[Bb][Ee][Aa][Rr][Ee][Rr]$"
              }
            }
          }
        }
      ]
    },
    "OAuth2SecurityScheme": {
      "type": "object",
      "required": ["type", "flows"],
      "properties": {
        "type": {
          "type": "string",
          "enum": ["oauth2"]
        },
        "flows": {
          "$ref": "#/definitions/OAuthFlows"
        },
        "description": {
          "type": "string"
        }
      },
      "patternProperties": {
        "^x-": {}
      },
      "additionalProperties": false
    },
    "OpenIdConnectSecurityScheme": {
      "type": "object",
      "required": ["type", "openIdConnectUrl"],
      "properties": {
        "type": {
          "type": "string",
          "enum": ["openIdConnect"]
        },
        "openIdConnectUrl": {
          "type": "string",
          "format": "uri-reference"
        },
        "description": {
          "type": "string"
        }
      },
      "patternProperties": {
        "^x-": {}
      },
      "additionalProperties": false
    },
    "OAuthFlows": {
      "type": "object",
      "properties": {
        "implicit": {
          "$ref": "#/definitions/ImplicitOAuthFlow"
        },
        "password": {
          "$ref": "#/definitions/PasswordOAuthFlow"
        },
        "clientCredentials": {
          "$ref": "#/definitions/ClientCredentialsFlow"
        },
        "authorizationCode": {
          "$ref": "#/definitions/AuthorizationCodeOAuthFlow"
        }
      },
      "patternProperties": {
        "^x-": {}
      },
      "additionalProperties": false
    },
    "ImplicitOAuthFlow": {
      "type": "object",
      "required": ["authorizationUrl", "scopes"],
      "properties": {
        "authorizationUrl": {
          "type": "string",
          "format": "uri-reference"
        },
        "refreshUrl": {
          "type": "string",
          "format": "uri-reference"
        },
        "scopes": {
          "type": "object",
          "additionalProperties": {
            "type": "string"
          }
        }
      },
      "patternProperties": {
        "^x-": {}
      },
      "additionalProperties": false
    },
    "PasswordOAuthFlow": {
      "type": "object",
      "required": ["tokenUrl", "scopes"],
      "properties": {
        "tokenUrl": {
          "type": "string",
          "format": "uri-reference"
        },
        "refreshUrl": {
          "type": "string",
          "format": "uri-reference"
        },
        "scopes": {
          "type": "object",
          "additionalProperties": {
            "type": "string"
          }
        }
      },
      "patternProperties": {
        "^x-": {}
      },
      "additionalProperties": false
    },
    "ClientCredentialsFlow": {
      "type": "object",
      "required": ["tokenUrl", "scopes"],
      "properties": {
        "tokenUrl": {
          "type": "string",
          "format": "uri-reference"
        },
        "refreshUrl": {
          "type": "string",
          "format": "uri-reference"
        },
        "scopes": {
          "type": "object",
          "additionalProperties": {
            "type": "string"
          }
        }
      },
      "patternProperties": {
        "^x-": {}
      },
      "additionalProperties": false
    },
    "AuthorizationCodeOAuthFlow": {
      "type": "object",
      "required": ["authorizationUrl", "tokenUrl", "scopes"],
      "properties": {
        "authorizationUrl": {
          "type": "string",
          "format": "uri-reference"
        },
        "tokenUrl": {
          "type": "string",
          "format": "uri-reference"
        },
        "refreshUrl": {
          "type": "string",
          "format": "uri-reference"
        },
        "scopes": {
          "type": "object",
          "additionalProperties": {
            "type": "string"
          }
        }
      },
      "patternProperties": {
        "^x-": {}
      },
      "additionalProperties": false
    },
    "Link": {
      "type": "object",
      "properties": {
        "operationId": {
          "type": "string"
        },
        "operationRef": {
          "type": "string",
          "format": "uri-reference"
        },
        "parameters": {
          "type": "object",
          "additionalProperties": {}
        },
        "requestBody": {},
        "description": {
          "type": "string"
        },
        "server": {
          "$ref": "#/definitions/Server"
        }
      },
      "patternProperties": {
        "^x-": {}
      },
      "additionalProperties": false,
      "not": {
        "description": "Operation Id and Operation Ref are mutually exclusive",
        "required": ["operationId", "operationRef"]
      }
    },
    "Callback": {
      "type": "object",
      "additionalProperties": {
        "$ref": "#/definitions/PathItem"
      },
      "patternProperties": {
        "^x-": {}
      }
    },
    "Encoding": {
      "type": "object",
      "properties": {
        "contentType": {
          "type": "string"
        },
        "headers": {
          "type": "object",
          "additionalProperties": {
            "oneOf": [
              {
                "$ref": "#/definitions/Header"
              },
              {
                "$ref": "#/definitions/Reference"
              }
            ]
          }
        },
        "style": {
          "type": "string",
          "enum": ["form", "spaceDelimited", "pipeDelimited", "deepObject"]
        },
        "explode": {
          "type": "boolean"
        },
        "allowReserved": {
          "type": "boolean",
          "default": false
        }
      },
      "additionalProperties": false
    }
  }
};

// node_modules/.pnpm/@scalar+openapi-parser@0.18.0/node_modules/@scalar/openapi-parser/dist/schemas/v3.1/schema.js
var schema_default3 = {
  "$id": "https://spec.openapis.org/oas/3.1/schema/2022-10-07",
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "description": "The description of OpenAPI v3.1.x documents without schema validation, as defined by https://spec.openapis.org/oas/v3.1.0",
  "type": "object",
  "properties": {
    "openapi": {
      "type": "string",
      "pattern": "^3\\.1\\.\\d+(-.+)?$"
    },
    "info": {
      "$ref": "#/$defs/info"
    },
    "jsonSchemaDialect": {
      "type": "string",
      "format": "uri-reference",
      "default": "https://spec.openapis.org/oas/3.1/dialect/base"
    },
    "servers": {
      "type": "array",
      "items": {
        "$ref": "#/$defs/server"
      },
      "default": [
        {
          "url": "/"
        }
      ]
    },
    "paths": {
      "$ref": "#/$defs/paths"
    },
    "webhooks": {
      "type": "object",
      "additionalProperties": {
        "$ref": "#/$defs/path-item-or-reference"
      }
    },
    "components": {
      "$ref": "#/$defs/components"
    },
    "security": {
      "type": "array",
      "items": {
        "$ref": "#/$defs/security-requirement"
      }
    },
    "tags": {
      "type": "array",
      "items": {
        "$ref": "#/$defs/tag"
      }
    },
    "externalDocs": {
      "$ref": "#/$defs/external-documentation"
    }
  },
  "required": ["openapi", "info"],
  "anyOf": [
    {
      "required": ["paths"]
    },
    {
      "required": ["components"]
    },
    {
      "required": ["webhooks"]
    }
  ],
  "$ref": "#/$defs/specification-extensions",
  "unevaluatedProperties": false,
  "$defs": {
    "info": {
      "$comment": "https://spec.openapis.org/oas/v3.1.0#info-object",
      "type": "object",
      "properties": {
        "title": {
          "type": "string"
        },
        "summary": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "termsOfService": {
          "type": "string",
          "format": "uri-reference"
        },
        "contact": {
          "$ref": "#/$defs/contact"
        },
        "license": {
          "$ref": "#/$defs/license"
        },
        "version": {
          "type": "string"
        }
      },
      "required": ["title", "version"],
      "$ref": "#/$defs/specification-extensions",
      "unevaluatedProperties": false
    },
    "contact": {
      "$comment": "https://spec.openapis.org/oas/v3.1.0#contact-object",
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "url": {
          "type": "string",
          "format": "uri-reference"
        },
        "email": {
          "type": "string",
          "format": "email"
        }
      },
      "$ref": "#/$defs/specification-extensions",
      "unevaluatedProperties": false
    },
    "license": {
      "$comment": "https://spec.openapis.org/oas/v3.1.0#license-object",
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "identifier": {
          "type": "string"
        },
        "url": {
          "type": "string",
          "format": "uri-reference"
        }
      },
      "required": ["name"],
      "dependentSchemas": {
        "identifier": {
          "not": {
            "required": ["url"]
          }
        }
      },
      "$ref": "#/$defs/specification-extensions",
      "unevaluatedProperties": false
    },
    "server": {
      "$comment": "https://spec.openapis.org/oas/v3.1.0#server-object",
      "type": "object",
      "properties": {
        "url": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "variables": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/$defs/server-variable"
          }
        }
      },
      "required": ["url"],
      "$ref": "#/$defs/specification-extensions",
      "unevaluatedProperties": false
    },
    "server-variable": {
      "$comment": "https://spec.openapis.org/oas/v3.1.0#server-variable-object",
      "type": "object",
      "properties": {
        "enum": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "minItems": 1
        },
        "default": {
          "type": "string"
        },
        "description": {
          "type": "string"
        }
      },
      "required": ["default"],
      "$ref": "#/$defs/specification-extensions",
      "unevaluatedProperties": false
    },
    "components": {
      "$comment": "https://spec.openapis.org/oas/v3.1.0#components-object",
      "type": "object",
      "properties": {
        "schemas": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/$defs/schema"
          }
        },
        "responses": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/$defs/response-or-reference"
          }
        },
        "parameters": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/$defs/parameter-or-reference"
          }
        },
        "examples": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/$defs/example-or-reference"
          }
        },
        "requestBodies": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/$defs/request-body-or-reference"
          }
        },
        "headers": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/$defs/header-or-reference"
          }
        },
        "securitySchemes": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/$defs/security-scheme-or-reference"
          }
        },
        "links": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/$defs/link-or-reference"
          }
        },
        "callbacks": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/$defs/callbacks-or-reference"
          }
        },
        "pathItems": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/$defs/path-item-or-reference"
          }
        }
      },
      "patternProperties": {
        "^(schemas|responses|parameters|examples|requestBodies|headers|securitySchemes|links|callbacks|pathItems)$": {
          "$comment": "Enumerating all of the property names in the regex above is necessary for unevaluatedProperties to work as expected",
          "propertyNames": {
            "pattern": "^[a-zA-Z0-9._-]+$"
          }
        }
      },
      "$ref": "#/$defs/specification-extensions",
      "unevaluatedProperties": false
    },
    "paths": {
      "$comment": "https://spec.openapis.org/oas/v3.1.0#paths-object",
      "type": "object",
      "patternProperties": {
        "^/": {
          "$ref": "#/$defs/path-item"
        }
      },
      "$ref": "#/$defs/specification-extensions",
      "unevaluatedProperties": false
    },
    "path-item": {
      "$comment": "https://spec.openapis.org/oas/v3.1.0#path-item-object",
      "type": "object",
      "properties": {
        "summary": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "servers": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/server"
          }
        },
        "parameters": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/parameter-or-reference"
          }
        },
        "get": {
          "$ref": "#/$defs/operation"
        },
        "put": {
          "$ref": "#/$defs/operation"
        },
        "post": {
          "$ref": "#/$defs/operation"
        },
        "delete": {
          "$ref": "#/$defs/operation"
        },
        "options": {
          "$ref": "#/$defs/operation"
        },
        "head": {
          "$ref": "#/$defs/operation"
        },
        "patch": {
          "$ref": "#/$defs/operation"
        },
        "trace": {
          "$ref": "#/$defs/operation"
        }
      },
      "$ref": "#/$defs/specification-extensions",
      "unevaluatedProperties": false
    },
    "path-item-or-reference": {
      "if": {
        "type": "object",
        "required": ["$ref"]
      },
      "then": {
        "$ref": "#/$defs/reference"
      },
      "else": {
        "$ref": "#/$defs/path-item"
      }
    },
    "operation": {
      "$comment": "https://spec.openapis.org/oas/v3.1.0#operation-object",
      "type": "object",
      "properties": {
        "tags": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "summary": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "externalDocs": {
          "$ref": "#/$defs/external-documentation"
        },
        "operationId": {
          "type": "string"
        },
        "parameters": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/parameter-or-reference"
          }
        },
        "requestBody": {
          "$ref": "#/$defs/request-body-or-reference"
        },
        "responses": {
          "$ref": "#/$defs/responses"
        },
        "callbacks": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/$defs/callbacks-or-reference"
          }
        },
        "deprecated": {
          "default": false,
          "type": "boolean"
        },
        "security": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/security-requirement"
          }
        },
        "servers": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/server"
          }
        }
      },
      "$ref": "#/$defs/specification-extensions",
      "unevaluatedProperties": false
    },
    "external-documentation": {
      "$comment": "https://spec.openapis.org/oas/v3.1.0#external-documentation-object",
      "type": "object",
      "properties": {
        "description": {
          "type": "string"
        },
        "url": {
          "type": "string",
          "format": "uri-reference"
        }
      },
      "required": ["url"],
      "$ref": "#/$defs/specification-extensions",
      "unevaluatedProperties": false
    },
    "parameter": {
      "$comment": "https://spec.openapis.org/oas/v3.1.0#parameter-object",
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "in": {
          "enum": ["query", "header", "path", "cookie"]
        },
        "description": {
          "type": "string"
        },
        "required": {
          "default": false,
          "type": "boolean"
        },
        "deprecated": {
          "default": false,
          "type": "boolean"
        },
        "schema": {
          "$ref": "#/$defs/schema"
        },
        "content": {
          "$ref": "#/$defs/content",
          "minProperties": 1,
          "maxProperties": 1
        }
      },
      "required": ["name", "in"],
      "oneOf": [
        {
          "required": ["schema"]
        },
        {
          "required": ["content"]
        }
      ],
      "if": {
        "properties": {
          "in": {
            "const": "query"
          }
        },
        "required": ["in"]
      },
      "then": {
        "properties": {
          "allowEmptyValue": {
            "default": false,
            "type": "boolean"
          }
        }
      },
      "dependentSchemas": {
        "schema": {
          "properties": {
            "style": {
              "type": "string"
            },
            "explode": {
              "type": "boolean"
            }
          },
          "allOf": [
            {
              "$ref": "#/$defs/examples"
            },
            {
              "$ref": "#/$defs/parameter/dependentSchemas/schema/$defs/styles-for-path"
            },
            {
              "$ref": "#/$defs/parameter/dependentSchemas/schema/$defs/styles-for-header"
            },
            {
              "$ref": "#/$defs/parameter/dependentSchemas/schema/$defs/styles-for-query"
            },
            {
              "$ref": "#/$defs/parameter/dependentSchemas/schema/$defs/styles-for-cookie"
            },
            {
              "$ref": "#/$defs/parameter/dependentSchemas/schema/$defs/styles-for-form"
            }
          ],
          "$defs": {
            "styles-for-path": {
              "if": {
                "properties": {
                  "in": {
                    "const": "path"
                  }
                },
                "required": ["in"]
              },
              "then": {
                "properties": {
                  "name": {
                    "pattern": "[^/#?]+$"
                  },
                  "style": {
                    "default": "simple",
                    "enum": ["matrix", "label", "simple"]
                  },
                  "required": {
                    "const": true
                  }
                },
                "required": ["required"]
              }
            },
            "styles-for-header": {
              "if": {
                "properties": {
                  "in": {
                    "const": "header"
                  }
                },
                "required": ["in"]
              },
              "then": {
                "properties": {
                  "style": {
                    "default": "simple",
                    "const": "simple"
                  }
                }
              }
            },
            "styles-for-query": {
              "if": {
                "properties": {
                  "in": {
                    "const": "query"
                  }
                },
                "required": ["in"]
              },
              "then": {
                "properties": {
                  "style": {
                    "default": "form",
                    "enum": ["form", "spaceDelimited", "pipeDelimited", "deepObject"]
                  },
                  "allowReserved": {
                    "default": false,
                    "type": "boolean"
                  }
                }
              }
            },
            "styles-for-cookie": {
              "if": {
                "properties": {
                  "in": {
                    "const": "cookie"
                  }
                },
                "required": ["in"]
              },
              "then": {
                "properties": {
                  "style": {
                    "default": "form",
                    "const": "form"
                  }
                }
              }
            },
            "styles-for-form": {
              "if": {
                "properties": {
                  "style": {
                    "const": "form"
                  }
                },
                "required": ["style"]
              },
              "then": {
                "properties": {
                  "explode": {
                    "default": true
                  }
                }
              },
              "else": {
                "properties": {
                  "explode": {
                    "default": false
                  }
                }
              }
            }
          }
        }
      },
      "$ref": "#/$defs/specification-extensions",
      "unevaluatedProperties": false
    },
    "parameter-or-reference": {
      "if": {
        "type": "object",
        "required": ["$ref"]
      },
      "then": {
        "$ref": "#/$defs/reference"
      },
      "else": {
        "$ref": "#/$defs/parameter"
      }
    },
    "request-body": {
      "$comment": "https://spec.openapis.org/oas/v3.1.0#request-body-object",
      "type": "object",
      "properties": {
        "description": {
          "type": "string"
        },
        "content": {
          "$ref": "#/$defs/content"
        },
        "required": {
          "default": false,
          "type": "boolean"
        }
      },
      "required": ["content"],
      "$ref": "#/$defs/specification-extensions",
      "unevaluatedProperties": false
    },
    "request-body-or-reference": {
      "if": {
        "type": "object",
        "required": ["$ref"]
      },
      "then": {
        "$ref": "#/$defs/reference"
      },
      "else": {
        "$ref": "#/$defs/request-body"
      }
    },
    "content": {
      "$comment": "https://spec.openapis.org/oas/v3.1.0#fixed-fields-10",
      "type": "object",
      "additionalProperties": {
        "$ref": "#/$defs/media-type"
      },
      "propertyNames": {
        "format": "media-range"
      }
    },
    "media-type": {
      "$comment": "https://spec.openapis.org/oas/v3.1.0#media-type-object",
      "type": "object",
      "properties": {
        "schema": {
          "$ref": "#/$defs/schema"
        },
        "encoding": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/$defs/encoding"
          }
        }
      },
      "allOf": [
        {
          "$ref": "#/$defs/specification-extensions"
        },
        {
          "$ref": "#/$defs/examples"
        }
      ],
      "unevaluatedProperties": false
    },
    "encoding": {
      "$comment": "https://spec.openapis.org/oas/v3.1.0#encoding-object",
      "type": "object",
      "properties": {
        "contentType": {
          "type": "string",
          "format": "media-range"
        },
        "headers": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/$defs/header-or-reference"
          }
        },
        "style": {
          "default": "form",
          "enum": ["form", "spaceDelimited", "pipeDelimited", "deepObject"]
        },
        "explode": {
          "type": "boolean"
        },
        "allowReserved": {
          "default": false,
          "type": "boolean"
        }
      },
      "allOf": [
        {
          "$ref": "#/$defs/specification-extensions"
        },
        {
          "$ref": "#/$defs/encoding/$defs/explode-default"
        }
      ],
      "unevaluatedProperties": false,
      "$defs": {
        "explode-default": {
          "if": {
            "properties": {
              "style": {
                "const": "form"
              }
            },
            "required": ["style"]
          },
          "then": {
            "properties": {
              "explode": {
                "default": true
              }
            }
          },
          "else": {
            "properties": {
              "explode": {
                "default": false
              }
            }
          }
        }
      }
    },
    "responses": {
      "$comment": "https://spec.openapis.org/oas/v3.1.0#responses-object",
      "type": "object",
      "properties": {
        "default": {
          "$ref": "#/$defs/response-or-reference"
        }
      },
      "patternProperties": {
        "^[1-5](?:[0-9]{2}|XX)$": {
          "$ref": "#/$defs/response-or-reference"
        }
      },
      "minProperties": 1,
      "$ref": "#/$defs/specification-extensions",
      "unevaluatedProperties": false
    },
    "response": {
      "$comment": "https://spec.openapis.org/oas/v3.1.0#response-object",
      "type": "object",
      "properties": {
        "description": {
          "type": "string"
        },
        "headers": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/$defs/header-or-reference"
          }
        },
        "content": {
          "$ref": "#/$defs/content"
        },
        "links": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/$defs/link-or-reference"
          }
        }
      },
      "required": ["description"],
      "$ref": "#/$defs/specification-extensions",
      "unevaluatedProperties": false
    },
    "response-or-reference": {
      "if": {
        "type": "object",
        "required": ["$ref"]
      },
      "then": {
        "$ref": "#/$defs/reference"
      },
      "else": {
        "$ref": "#/$defs/response"
      }
    },
    "callbacks": {
      "$comment": "https://spec.openapis.org/oas/v3.1.0#callback-object",
      "type": "object",
      "$ref": "#/$defs/specification-extensions",
      "additionalProperties": {
        "$ref": "#/$defs/path-item-or-reference"
      }
    },
    "callbacks-or-reference": {
      "if": {
        "type": "object",
        "required": ["$ref"]
      },
      "then": {
        "$ref": "#/$defs/reference"
      },
      "else": {
        "$ref": "#/$defs/callbacks"
      }
    },
    "example": {
      "$comment": "https://spec.openapis.org/oas/v3.1.0#example-object",
      "type": "object",
      "properties": {
        "summary": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "value": true,
        "externalValue": {
          "type": "string",
          "format": "uri-reference"
        }
      },
      "not": {
        "required": ["value", "externalValue"]
      },
      "$ref": "#/$defs/specification-extensions",
      "unevaluatedProperties": false
    },
    "example-or-reference": {
      "if": {
        "type": "object",
        "required": ["$ref"]
      },
      "then": {
        "$ref": "#/$defs/reference"
      },
      "else": {
        "$ref": "#/$defs/example"
      }
    },
    "link": {
      "$comment": "https://spec.openapis.org/oas/v3.1.0#link-object",
      "type": "object",
      "properties": {
        "operationRef": {
          "type": "string",
          "format": "uri-reference"
        },
        "operationId": {
          "type": "string"
        },
        "parameters": {
          "$ref": "#/$defs/map-of-strings"
        },
        "requestBody": true,
        "description": {
          "type": "string"
        },
        "body": {
          "$ref": "#/$defs/server"
        }
      },
      "oneOf": [
        {
          "required": ["operationRef"]
        },
        {
          "required": ["operationId"]
        }
      ],
      "$ref": "#/$defs/specification-extensions",
      "unevaluatedProperties": false
    },
    "link-or-reference": {
      "if": {
        "type": "object",
        "required": ["$ref"]
      },
      "then": {
        "$ref": "#/$defs/reference"
      },
      "else": {
        "$ref": "#/$defs/link"
      }
    },
    "header": {
      "$comment": "https://spec.openapis.org/oas/v3.1.0#header-object",
      "type": "object",
      "properties": {
        "description": {
          "type": "string"
        },
        "required": {
          "default": false,
          "type": "boolean"
        },
        "deprecated": {
          "default": false,
          "type": "boolean"
        },
        "schema": {
          "$ref": "#/$defs/schema"
        },
        "content": {
          "$ref": "#/$defs/content",
          "minProperties": 1,
          "maxProperties": 1
        }
      },
      "oneOf": [
        {
          "required": ["schema"]
        },
        {
          "required": ["content"]
        }
      ],
      "dependentSchemas": {
        "schema": {
          "properties": {
            "style": {
              "default": "simple",
              "const": "simple"
            },
            "explode": {
              "default": false,
              "type": "boolean"
            }
          },
          "$ref": "#/$defs/examples"
        }
      },
      "$ref": "#/$defs/specification-extensions",
      "unevaluatedProperties": false
    },
    "header-or-reference": {
      "if": {
        "type": "object",
        "required": ["$ref"]
      },
      "then": {
        "$ref": "#/$defs/reference"
      },
      "else": {
        "$ref": "#/$defs/header"
      }
    },
    "tag": {
      "$comment": "https://spec.openapis.org/oas/v3.1.0#tag-object",
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "externalDocs": {
          "$ref": "#/$defs/external-documentation"
        }
      },
      "required": ["name"],
      "$ref": "#/$defs/specification-extensions",
      "unevaluatedProperties": false
    },
    "reference": {
      "$comment": "https://spec.openapis.org/oas/v3.1.0#reference-object",
      "type": "object",
      "properties": {
        "$ref": {
          "type": "string",
          "format": "uri-reference"
        },
        "summary": {
          "type": "string"
        },
        "description": {
          "type": "string"
        }
      },
      "unevaluatedProperties": false
    },
    "schema": {
      "$comment": "https://spec.openapis.org/oas/v3.1.0#schema-object",
      "$dynamicAnchor": "meta",
      "type": ["object", "boolean"]
    },
    "security-scheme": {
      "$comment": "https://spec.openapis.org/oas/v3.1.0#security-scheme-object",
      "type": "object",
      "properties": {
        "type": {
          "enum": ["apiKey", "http", "mutualTLS", "oauth2", "openIdConnect"]
        },
        "description": {
          "type": "string"
        }
      },
      "required": ["type"],
      "allOf": [
        {
          "$ref": "#/$defs/specification-extensions"
        },
        {
          "$ref": "#/$defs/security-scheme/$defs/type-apikey"
        },
        {
          "$ref": "#/$defs/security-scheme/$defs/type-http"
        },
        {
          "$ref": "#/$defs/security-scheme/$defs/type-http-bearer"
        },
        {
          "$ref": "#/$defs/security-scheme/$defs/type-oauth2"
        },
        {
          "$ref": "#/$defs/security-scheme/$defs/type-oidc"
        }
      ],
      "unevaluatedProperties": false,
      "$defs": {
        "type-apikey": {
          "if": {
            "properties": {
              "type": {
                "const": "apiKey"
              }
            },
            "required": ["type"]
          },
          "then": {
            "properties": {
              "name": {
                "type": "string"
              },
              "in": {
                "enum": ["query", "header", "cookie"]
              }
            },
            "required": ["name", "in"]
          }
        },
        "type-http": {
          "if": {
            "properties": {
              "type": {
                "const": "http"
              }
            },
            "required": ["type"]
          },
          "then": {
            "properties": {
              "scheme": {
                "type": "string"
              }
            },
            "required": ["scheme"]
          }
        },
        "type-http-bearer": {
          "if": {
            "properties": {
              "type": {
                "const": "http"
              },
              "scheme": {
                "type": "string",
                "pattern": "^[Bb][Ee][Aa][Rr][Ee][Rr]$"
              }
            },
            "required": ["type", "scheme"]
          },
          "then": {
            "properties": {
              "bearerFormat": {
                "type": "string"
              }
            }
          }
        },
        "type-oauth2": {
          "if": {
            "properties": {
              "type": {
                "const": "oauth2"
              }
            },
            "required": ["type"]
          },
          "then": {
            "properties": {
              "flows": {
                "$ref": "#/$defs/oauth-flows"
              }
            },
            "required": ["flows"]
          }
        },
        "type-oidc": {
          "if": {
            "properties": {
              "type": {
                "const": "openIdConnect"
              }
            },
            "required": ["type"]
          },
          "then": {
            "properties": {
              "openIdConnectUrl": {
                "type": "string",
                "format": "uri-reference"
              }
            },
            "required": ["openIdConnectUrl"]
          }
        }
      }
    },
    "security-scheme-or-reference": {
      "if": {
        "type": "object",
        "required": ["$ref"]
      },
      "then": {
        "$ref": "#/$defs/reference"
      },
      "else": {
        "$ref": "#/$defs/security-scheme"
      }
    },
    "oauth-flows": {
      "type": "object",
      "properties": {
        "implicit": {
          "$ref": "#/$defs/oauth-flows/$defs/implicit"
        },
        "password": {
          "$ref": "#/$defs/oauth-flows/$defs/password"
        },
        "clientCredentials": {
          "$ref": "#/$defs/oauth-flows/$defs/client-credentials"
        },
        "authorizationCode": {
          "$ref": "#/$defs/oauth-flows/$defs/authorization-code"
        }
      },
      "$ref": "#/$defs/specification-extensions",
      "unevaluatedProperties": false,
      "$defs": {
        "implicit": {
          "type": "object",
          "properties": {
            "authorizationUrl": {
              "type": "string",
              "format": "uri-reference"
            },
            "refreshUrl": {
              "type": "string",
              "format": "uri-reference"
            },
            "scopes": {
              "$ref": "#/$defs/map-of-strings"
            }
          },
          "required": ["authorizationUrl", "scopes"],
          "$ref": "#/$defs/specification-extensions",
          "unevaluatedProperties": false
        },
        "password": {
          "type": "object",
          "properties": {
            "tokenUrl": {
              "type": "string",
              "format": "uri-reference"
            },
            "refreshUrl": {
              "type": "string",
              "format": "uri-reference"
            },
            "scopes": {
              "$ref": "#/$defs/map-of-strings"
            }
          },
          "required": ["tokenUrl", "scopes"],
          "$ref": "#/$defs/specification-extensions",
          "unevaluatedProperties": false
        },
        "client-credentials": {
          "type": "object",
          "properties": {
            "tokenUrl": {
              "type": "string",
              "format": "uri-reference"
            },
            "refreshUrl": {
              "type": "string",
              "format": "uri-reference"
            },
            "scopes": {
              "$ref": "#/$defs/map-of-strings"
            }
          },
          "required": ["tokenUrl", "scopes"],
          "$ref": "#/$defs/specification-extensions",
          "unevaluatedProperties": false
        },
        "authorization-code": {
          "type": "object",
          "properties": {
            "authorizationUrl": {
              "type": "string",
              "format": "uri-reference"
            },
            "tokenUrl": {
              "type": "string",
              "format": "uri-reference"
            },
            "refreshUrl": {
              "type": "string",
              "format": "uri-reference"
            },
            "scopes": {
              "$ref": "#/$defs/map-of-strings"
            }
          },
          "required": ["authorizationUrl", "tokenUrl", "scopes"],
          "$ref": "#/$defs/specification-extensions",
          "unevaluatedProperties": false
        }
      }
    },
    "security-requirement": {
      "$comment": "https://spec.openapis.org/oas/v3.1.0#security-requirement-object",
      "type": "object",
      "additionalProperties": {
        "type": "array",
        "items": {
          "type": "string"
        }
      }
    },
    "specification-extensions": {
      "$comment": "https://spec.openapis.org/oas/v3.1.0#specification-extensions",
      "patternProperties": {
        "^x-": true
      }
    },
    "examples": {
      "properties": {
        "example": true,
        "examples": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/$defs/example-or-reference"
          }
        }
      }
    },
    "map-of-strings": {
      "type": "object",
      "additionalProperties": {
        "type": "string"
      }
    }
  }
};

// node_modules/.pnpm/@scalar+openapi-parser@0.18.0/node_modules/@scalar/openapi-parser/dist/configuration/index.js
var OpenApiSpecifications = {
  "2.0": schema_default,
  "3.0": schema_default2,
  "3.1": schema_default3
};
var OpenApiVersions = Object.keys(OpenApiSpecifications);
var ERRORS = {
  EMPTY_OR_INVALID: "Can’t find JSON, YAML or filename in data.",
  // URI_MUST_BE_STRING: 'uri parameter or $id attribute must be a string',
  OPENAPI_VERSION_NOT_SUPPORTED: "Can’t find supported Swagger/OpenAPI version in the provided document, version must be a string.",
  INVALID_REFERENCE: "Can’t resolve reference: %s",
  EXTERNAL_REFERENCE_NOT_FOUND: "Can’t resolve external reference: %s",
  FILE_DOES_NOT_EXIST: "File does not exist: %s",
  NO_CONTENT: "No content found"
};

// node_modules/.pnpm/@scalar+openapi-parser@0.18.0/node_modules/@scalar/openapi-parser/dist/utils/is-object.js
var isObject = (obj) => typeof obj === "object" && !Array.isArray(obj) && obj !== null;

// node_modules/.pnpm/@scalar+openapi-parser@0.18.0/node_modules/@scalar/openapi-parser/dist/utils/details.js
function details(specification) {
  if (specification === null) {
    return {
      version: void 0,
      specificationType: void 0,
      specificationVersion: void 0
    };
  }
  if (isObject(specification)) {
    for (const version of new Set(OpenApiVersions)) {
      const specificationType = version === "2.0" ? "swagger" : "openapi";
      const value = specification[specificationType];
      if (typeof value === "string" && value.startsWith(version)) {
        return {
          version,
          specificationType,
          specificationVersion: value
        };
      }
    }
  }
  return {
    version: void 0,
    specificationType: void 0,
    specificationVersion: void 0
  };
}

// node_modules/.pnpm/@scalar+openapi-parser@0.18.0/node_modules/@scalar/openapi-parser/dist/utils/get-entrypoint.js
function getEntrypoint(filesystem) {
  return filesystem == null ? void 0 : filesystem.find((file) => file.isEntrypoint);
}

// node_modules/.pnpm/@scalar+openapi-parser@0.18.0/node_modules/@scalar/openapi-parser/dist/utils/traverse.js
function traverse(content, transform, path = []) {
  const result = {};
  for (const [key, value] of Object.entries(content)) {
    const currentPath = [...path, key];
    if (Array.isArray(value)) {
      result[key] = value.map((item, index) => {
        if (typeof item === "object" && !Array.isArray(item) && item !== null) {
          return traverse(item, transform, [...currentPath, index.toString()]);
        }
        return item;
      });
      continue;
    }
    if (typeof value === "object" && value !== null) {
      result[key] = traverse(value, transform, currentPath);
      continue;
    }
    result[key] = value;
  }
  return transform(result, path);
}

// node_modules/.pnpm/@scalar+openapi-parser@0.18.0/node_modules/@scalar/openapi-parser/dist/utils/get-list-of-references.js
function getListOfReferences(specification) {
  const references = [];
  if (!specification || typeof specification !== "object") {
    return references;
  }
  traverse(specification, (value) => {
    if (value.$ref && typeof value.$ref === "string" && !value.$ref.startsWith("#")) {
      references.push(value.$ref.split("#")[0]);
    }
    return value;
  });
  return [...new Set(references)];
}

// node_modules/.pnpm/@scalar+openapi-parser@0.18.0/node_modules/@scalar/openapi-parser/dist/utils/is-filesystem.js
function isFilesystem(value) {
  return typeof value !== "undefined" && Array.isArray(value) && value.length > 0 && value.some((file) => file.isEntrypoint === true);
}

// node_modules/.pnpm/@scalar+openapi-parser@0.18.0/node_modules/@scalar/openapi-parser/dist/utils/normalize.js
function normalize(content) {
  if (content === null) {
    return void 0;
  }
  if (typeof content === "string") {
    if (content.trim() === "") {
      return void 0;
    }
    try {
      return JSON.parse(content);
    } catch (_error) {
      const hasColon = /^[^:]+:/.test(content);
      const isJson2 = content.slice(0, 50).trimStart().startsWith("{");
      if (!hasColon || isJson2) {
        return void 0;
      }
      return parse(content, {
        maxAliasCount: 1e4
      });
    }
  }
  if (isFilesystem(content)) {
    return content;
  }
  return content;
}

// node_modules/.pnpm/@scalar+openapi-parser@0.18.0/node_modules/@scalar/openapi-parser/dist/utils/make-filesystem.js
function makeFilesystem(value, overwrites = {}) {
  if (isFilesystem(value)) {
    return value;
  }
  const specification = normalize(value);
  return [
    {
      isEntrypoint: true,
      specification,
      filename: null,
      dir: "./",
      references: getListOfReferences(specification),
      ...overwrites
    }
  ];
}

// node_modules/.pnpm/@scalar+openapi-parser@0.18.0/node_modules/@scalar/openapi-parser/dist/utils/unescape-json-pointer.js
function unescapeJsonPointer(uri) {
  return decodeURI(uri.replace(/~1/g, "/").replace(/~0/g, "~"));
}

// node_modules/.pnpm/@scalar+openapi-parser@0.18.0/node_modules/@scalar/openapi-parser/dist/utils/get-segments-from-path.js
function getSegmentsFromPath(path) {
  return (
    // /paths/~1test
    path.split("/").slice(1).map(unescapeJsonPointer)
  );
}

// node_modules/.pnpm/@scalar+openapi-parser@0.18.0/node_modules/@scalar/openapi-parser/dist/utils/resolve-references.js
function resolveReferences(input, options, file, errors = []) {
  const clonedInput = structuredClone(input);
  const filesystem = makeFilesystem(clonedInput);
  const entrypoint = getEntrypoint(filesystem);
  const finalInput = (file == null ? void 0 : file.specification) ?? entrypoint.specification;
  if (!isObject(finalInput)) {
    if (options == null ? void 0 : options.throwOnError) {
      throw new Error(ERRORS.NO_CONTENT);
    }
    return {
      valid: false,
      errors,
      schema: finalInput
    };
  }
  dereference(finalInput, filesystem, file ?? entrypoint, /* @__PURE__ */ new WeakSet(), errors, options);
  errors = errors.filter(
    (error, index, self) => index === self.findIndex((t2) => t2.message === error.message && t2.code === error.code)
  );
  return {
    valid: errors.length === 0,
    errors,
    schema: finalInput
  };
}
function dereference(schema, filesystem, entrypoint, resolvedSchemas, errors, options) {
  var _a;
  if (schema === null || resolvedSchemas.has(schema)) {
    return;
  }
  resolvedSchemas.add(schema);
  function resolveExternal(externalFile) {
    dereference(externalFile.specification, filesystem, externalFile, resolvedSchemas, errors, options);
    return externalFile;
  }
  while (schema.$ref !== void 0) {
    const resolved = resolveUri(schema.$ref, options, entrypoint, filesystem, resolveExternal, errors);
    if (typeof resolved !== "object" || resolved === null) {
      break;
    }
    const dereferencedRef = schema.$ref;
    delete schema.$ref;
    for (const key of Object.keys(resolved)) {
      if (schema[key] === void 0) {
        schema[key] = resolved[key];
      }
    }
    if (dereferencedRef) {
      (_a = options == null ? void 0 : options.onDereference) == null ? void 0 : _a.call(options, { schema, ref: dereferencedRef });
    }
  }
  for (const value of Object.values(schema)) {
    if (typeof value === "object" && value !== null) {
      dereference(value, filesystem, entrypoint, resolvedSchemas, errors, options);
    }
  }
}
function resolveUri(uri, options, file, filesystem, resolve2, errors) {
  if (typeof uri !== "string") {
    if (options == null ? void 0 : options.throwOnError) {
      throw new Error(ERRORS.INVALID_REFERENCE.replace("%s", uri));
    }
    errors.push({
      code: "INVALID_REFERENCE",
      message: ERRORS.INVALID_REFERENCE.replace("%s", uri)
    });
    return void 0;
  }
  const [prefix, path] = uri.split("#", 2);
  const isDifferentFile = prefix !== file.filename;
  if (prefix && isDifferentFile) {
    const externalReference = filesystem.find((entry) => {
      return entry.filename === prefix;
    });
    if (!externalReference) {
      if (options == null ? void 0 : options.throwOnError) {
        throw new Error(ERRORS.EXTERNAL_REFERENCE_NOT_FOUND.replace("%s", prefix));
      }
      errors.push({
        code: "EXTERNAL_REFERENCE_NOT_FOUND",
        message: ERRORS.EXTERNAL_REFERENCE_NOT_FOUND.replace("%s", prefix)
      });
      return void 0;
    }
    if (path === void 0) {
      return externalReference.specification;
    }
    return resolveUri(`#${path}`, options, resolve2(externalReference), filesystem, resolve2, errors);
  }
  const segments = getSegmentsFromPath(path);
  try {
    return segments.reduce((acc, key) => {
      return acc[key];
    }, file.specification);
  } catch (_error) {
    if (options == null ? void 0 : options.throwOnError) {
      throw new Error(ERRORS.INVALID_REFERENCE.replace("%s", uri));
    }
    errors.push({
      code: "INVALID_REFERENCE",
      message: ERRORS.INVALID_REFERENCE.replace("%s", uri)
    });
  }
  return void 0;
}

// node_modules/.pnpm/@scalar+openapi-parser@0.18.0/node_modules/@scalar/openapi-parser/dist/utils/dereference.js
async function dereference2(value, options) {
  const filesystem = makeFilesystem(value);
  const entrypoint = getEntrypoint(filesystem);
  const result = resolveReferences(filesystem, options);
  return {
    specification: entrypoint.specification,
    errors: result.errors,
    schema: result.schema,
    ...details(entrypoint.specification)
  };
}

// node_modules/.pnpm/@scalar+openapi-parser@0.18.0/node_modules/@scalar/openapi-parser/dist/utils/escape-json-pointer.js
function escapeJsonPointer(str) {
  return str.replace(/~/g, "~0").replace(/\//g, "~1");
}

// node_modules/.pnpm/@scalar+openapi-parser@0.18.0/node_modules/@scalar/openapi-parser/dist/utils/is-json.js
function isJson(value) {
  try {
    JSON.parse(value);
    return true;
  } catch {
    return false;
  }
}

// node_modules/.pnpm/@scalar+openapi-parser@0.18.0/node_modules/@scalar/openapi-parser/dist/utils/is-yaml.js
function isYaml(value) {
  if (!value.includes("\n")) {
    return false;
  }
  try {
    parse(value, {
      maxAliasCount: 1e4
    });
    return true;
  } catch (_error) {
    return false;
  }
}

// node_modules/.pnpm/@scalar+openapi-parser@0.18.0/node_modules/@scalar/openapi-parser/dist/utils/load/load.js
async function load(value, options) {
  var _a, _b, _c, _d, _e, _f;
  const errors = [];
  if ((_a = options == null ? void 0 : options.filesystem) == null ? void 0 : _a.find((entry) => entry.filename === value)) {
    return {
      specification: (_b = getEntrypoint(options.filesystem)) == null ? void 0 : _b.specification,
      filesystem: options.filesystem,
      errors
    };
  }
  const plugin = (_c = options == null ? void 0 : options.plugins) == null ? void 0 : _c.find((thisPlugin) => thisPlugin.check(value));
  let content;
  if (plugin) {
    try {
      content = normalize(await plugin.get(value));
    } catch (_error) {
      if (options == null ? void 0 : options.throwOnError) {
        throw new Error(ERRORS.EXTERNAL_REFERENCE_NOT_FOUND.replace("%s", value));
      }
      errors.push({
        code: "EXTERNAL_REFERENCE_NOT_FOUND",
        message: ERRORS.EXTERNAL_REFERENCE_NOT_FOUND.replace("%s", value)
      });
      return {
        specification: null,
        filesystem: [],
        errors
      };
    }
  } else {
    content = normalize(value);
  }
  if (content === void 0) {
    if (options == null ? void 0 : options.throwOnError) {
      throw new Error("No content to load");
    }
    errors.push({
      code: "NO_CONTENT",
      message: ERRORS.NO_CONTENT
    });
    return {
      specification: null,
      filesystem: [],
      errors
    };
  }
  let filesystem = makeFilesystem(content, {
    filename: (options == null ? void 0 : options.filename) ?? null
  });
  const newEntry = (options == null ? void 0 : options.filename) ? filesystem.find((entry) => entry.filename === (options == null ? void 0 : options.filename)) : getEntrypoint(filesystem);
  const listOfReferences = newEntry.references ?? getListOfReferences(content);
  if (listOfReferences.length === 0) {
    return {
      specification: (_d = getEntrypoint(filesystem)) == null ? void 0 : _d.specification,
      filesystem,
      errors
    };
  }
  for (const reference of listOfReferences) {
    const otherPlugin = (_e = options == null ? void 0 : options.plugins) == null ? void 0 : _e.find((thisPlugin) => thisPlugin.check(reference));
    if (!otherPlugin) {
      continue;
    }
    const target = otherPlugin.check(reference) && otherPlugin.resolvePath ? otherPlugin.resolvePath(value, reference) : reference;
    if (filesystem.find((entry) => entry.filename === reference)) {
      continue;
    }
    const { filesystem: referencedFiles, errors: newErrors } = await load(target, {
      ...options,
      // Make the filename the exact same value as the $ref
      // TODO: This leads to problems, if there are multiple references with the same file name but in different folders
      filename: reference
    });
    errors.push(...newErrors);
    filesystem = [
      ...filesystem,
      ...referencedFiles.map((file) => {
        return {
          ...file,
          isEntrypoint: false
        };
      })
    ];
  }
  return {
    specification: (_f = getEntrypoint(filesystem)) == null ? void 0 : _f.specification,
    filesystem,
    errors
  };
}

// node_modules/.pnpm/@scalar+openapi-parser@0.18.0/node_modules/@scalar/openapi-parser/dist/utils/to-json.js
var toJson = (value) => JSON.stringify(value, null, 2);

// node_modules/.pnpm/@scalar+openapi-parser@0.18.0/node_modules/@scalar/openapi-parser/dist/utils/to-yaml.js
var toYaml = (value) => stringify(value);

// node_modules/.pnpm/@scalar+openapi-parser@0.18.0/node_modules/@scalar/openapi-parser/dist/utils/upgrade-from-three-to-three-one.js
var SCHEMA_SEGMENTS = /* @__PURE__ */ new Set([
  "properties",
  "items",
  "allOf",
  "anyOf",
  "oneOf",
  "not",
  "additionalProperties",
  "schema"
]);
function isSchemaPath(path) {
  if (path.some((segment) => SCHEMA_SEGMENTS.has(segment))) {
    return true;
  }
  if (path.some((segment) => segment.endsWith("Schema"))) {
    return true;
  }
  if (path.length >= 2 && path[0] === "components" && path[1] === "schemas") {
    return true;
  }
  return false;
}
function upgradeFromThreeToThreeOne(originalContent) {
  let content = originalContent;
  if (content === null || typeof content.openapi !== "string" || !content.openapi.startsWith("3.0")) {
    return content;
  }
  content.openapi = "3.1.1";
  content = traverse(content, applyChangesToDocument);
  return content;
}
var applyChangesToDocument = (schema, path) => {
  if (schema.type !== "undefined" && schema.nullable === true) {
    schema.type = [schema.type, "null"];
    delete schema.nullable;
  }
  if (schema.exclusiveMinimum === true) {
    schema.exclusiveMinimum = schema.minimum;
    delete schema.minimum;
  } else if (schema.exclusiveMinimum === false) {
    delete schema.exclusiveMinimum;
  }
  if (schema.exclusiveMaximum === true) {
    schema.exclusiveMaximum = schema.maximum;
    delete schema.maximum;
  } else if (schema.exclusiveMaximum === false) {
    delete schema.exclusiveMaximum;
  }
  if (schema.example !== void 0) {
    if (isSchemaPath(path)) {
      schema.examples = [schema.example];
    } else {
      schema.examples = {
        default: {
          value: schema.example
        }
      };
    }
    delete schema.example;
  }
  if (schema.type === "object" && schema.properties !== void 0) {
    const parentPath = path.slice(0, -1);
    const isMultipart = parentPath.some((segment, index) => {
      return segment === "content" && path[index + 1] === "multipart/form-data";
    });
    if (isMultipart) {
      for (const value of Object.values(schema.properties)) {
        if (typeof value === "object" && value !== null && "type" in value && "format" in value && value.type === "string" && value.format === "binary") {
          ;
          value.contentMediaType = "application/octet-stream";
          delete value.format;
        }
      }
    }
  }
  if (path.includes("content") && path.includes("application/octet-stream")) {
    return {};
  }
  if (schema.type === "string") {
    if (schema.format === "binary") {
      return {
        type: "string",
        contentMediaType: "application/octet-stream"
      };
    }
    if (schema.format === "base64") {
      return {
        type: "string",
        contentEncoding: "base64"
      };
    }
    if (schema.format === "byte") {
      const parentPath = path.slice(0, -1);
      const contentMediaType = parentPath.find((_2, index) => path[index - 1] === "content");
      return {
        type: "string",
        contentEncoding: "base64",
        contentMediaType
      };
    }
  }
  if (schema["x-webhooks"] !== void 0) {
    schema.webhooks = schema["x-webhooks"];
    delete schema["x-webhooks"];
  }
  return schema;
};

// node_modules/.pnpm/@scalar+openapi-parser@0.18.0/node_modules/@scalar/openapi-parser/dist/utils/upgrade-from-two-to-three.js
function upgradeFromTwoToThree(originalSpecification) {
  var _a, _b, _c;
  let specification = originalSpecification;
  if (specification !== null && typeof specification === "object" && typeof specification.swagger === "string" && ((_a = specification.swagger) == null ? void 0 : _a.startsWith("2.0"))) {
    specification.openapi = "3.0.4";
    delete specification.swagger;
  } else {
    return specification;
  }
  if (specification.host) {
    const schemes = Array.isArray(specification.schemes) && ((_b = specification.schemes) == null ? void 0 : _b.length) ? specification.schemes : ["http"];
    specification.servers = schemes.map((scheme) => ({
      url: `${scheme}://${specification.host}${specification.basePath ?? ""}`
    }));
    delete specification.basePath;
    delete specification.schemes;
    delete specification.host;
  } else if (specification.basePath) {
    specification.servers = [{ url: specification.basePath }];
    delete specification.basePath;
  }
  if (specification.definitions) {
    specification.components = Object.assign({}, specification.components, {
      schemas: specification.definitions
    });
    delete specification.definitions;
    specification = traverse(specification, (schema) => {
      if (typeof schema.$ref === "string" && schema.$ref.startsWith("#/definitions/")) {
        schema.$ref = schema.$ref.replace(/^#\/definitions\//, "#/components/schemas/");
      }
      return schema;
    });
  }
  specification = traverse(specification, (schema) => {
    if (schema.type === "file") {
      schema.type = "string";
      schema.format = "binary";
    }
    return schema;
  });
  if (typeof specification.paths === "object") {
    for (const path in specification.paths) {
      if (Object.hasOwn(specification.paths, path)) {
        const pathItem = specification.paths[path];
        for (const method in pathItem) {
          if (Object.hasOwn(pathItem, method)) {
            const operationItem = pathItem[method];
            if (operationItem.parameters) {
              const bodyParameter = structuredClone(
                operationItem.parameters.find((parameter) => parameter.in === "body") ?? {}
              );
              if (bodyParameter && Object.keys(bodyParameter).length) {
                delete bodyParameter.name;
                delete bodyParameter.in;
                const consumes = specification.consumes ?? operationItem.consumes ?? ["application/json"];
                if (typeof operationItem.requestBody !== "object") {
                  operationItem.requestBody = {};
                }
                if (typeof operationItem.requestBody.content !== "object") {
                  operationItem.requestBody.content = {};
                }
                const { schema, ...requestBody } = bodyParameter;
                operationItem.requestBody = {
                  ...operationItem.requestBody,
                  ...requestBody
                };
                for (const type of consumes) {
                  operationItem.requestBody.content[type] = {
                    schema
                  };
                }
              }
              operationItem.parameters = operationItem.parameters.filter(
                (parameter) => parameter.in !== "body"
              );
              delete operationItem.consumes;
              const formDataParameters = operationItem.parameters.filter(
                (parameter) => parameter.in === "formData"
              );
              if (formDataParameters.length > 0) {
                if (typeof operationItem.requestBody !== "object") {
                  operationItem.requestBody = {};
                }
                if (typeof operationItem.requestBody.content !== "object") {
                  operationItem.requestBody.content = {};
                }
                operationItem.requestBody.content["application/x-www-form-urlencoded"] = {
                  schema: {
                    type: "object",
                    properties: {},
                    required: []
                    // Initialize required array
                  }
                };
                for (const param of formDataParameters) {
                  operationItem.requestBody.content["application/x-www-form-urlencoded"].schema.properties[param.name] = {
                    type: param.type,
                    description: param.description
                  };
                  if (param.required) {
                    operationItem.requestBody.content["application/x-www-form-urlencoded"].schema.required.push(
                      param.name
                    );
                  }
                }
                operationItem.parameters = operationItem.parameters.filter(
                  (parameter) => parameter.in !== "formData"
                );
              }
              operationItem.parameters = operationItem.parameters.map(
                (parameter) => transformParameterObject(parameter)
              );
            }
            if (operationItem.responses) {
              for (const response in operationItem.responses) {
                if (Object.hasOwn(operationItem.responses, response)) {
                  const responseItem = operationItem.responses[response];
                  if (responseItem.headers) {
                    responseItem.headers = Object.entries(responseItem.headers).reduce((acc, [name, header]) => {
                      return {
                        [name]: transformParameterObject(header),
                        ...acc
                      };
                    }, {});
                  }
                  if (responseItem.schema) {
                    const produces = specification.produces ?? operationItem.produces ?? ["application/json"];
                    if (typeof responseItem.content !== "object") {
                      responseItem.content = {};
                    }
                    for (const type of produces) {
                      responseItem.content[type] = {
                        schema: responseItem.schema
                      };
                    }
                    delete responseItem.schema;
                  }
                }
              }
            }
            delete operationItem.produces;
            if (((_c = operationItem.parameters) == null ? void 0 : _c.length) === 0) {
              delete operationItem.parameters;
            }
          }
        }
      }
    }
  }
  if (specification.securityDefinitions) {
    if (typeof specification.components !== "object") {
      specification.components = {};
    }
    specification.components = specification.components;
    Object.assign(specification.components, { securitySchemes: {} });
    for (const [key, securityScheme] of Object.entries(specification.securityDefinitions)) {
      if (typeof securityScheme === "object") {
        if ("type" in securityScheme && securityScheme.type === "oauth2") {
          const { flow, authorizationUrl: authorizationUrl2, tokenUrl: tokenUrl2, scopes } = securityScheme;
          Object.assign(specification.components.securitySchemes, {
            [key]: {
              type: "oauth2",
              flows: {
                [flow]: Object.assign(
                  {},
                  authorizationUrl2 && { authorizationUrl: authorizationUrl2 },
                  tokenUrl2 && { tokenUrl: tokenUrl2 },
                  scopes && { scopes }
                )
              }
            }
          });
        } else if ("type" in securityScheme && securityScheme.type === "basic") {
          Object.assign(specification.components.securitySchemes, {
            [key]: {
              type: "http",
              scheme: "basic"
            }
          });
        } else {
          Object.assign(specification.components.securitySchemes, {
            [key]: securityScheme
          });
        }
      }
    }
    delete specification.securityDefinitions;
  }
  return specification;
}
function transformItemsObject(obj) {
  const schemaProperties = [
    "type",
    "format",
    "items",
    "maximum",
    "exclusiveMaximum",
    "minimum",
    "exclusiveMinimum",
    "maxLength",
    "minLength",
    "pattern",
    "maxItems",
    "minItems",
    "uniqueItems",
    "enum",
    "multipleOf"
  ];
  return schemaProperties.reduce((acc, property) => {
    if (Object.hasOwn(obj, property)) {
      acc[property] = obj[property];
      delete obj[property];
    }
    return acc;
  }, {});
}
function transformParameterObject(parameter) {
  const serializationStyle = getParameterSerializationStyle(parameter);
  const schema = transformItemsObject(parameter);
  delete parameter.collectionFormat;
  delete parameter.default;
  return {
    schema,
    ...serializationStyle,
    ...parameter
  };
}
var querySerialization = {
  ssv: {
    style: "spaceDelimited",
    explode: false
  },
  pipes: {
    style: "pipeDelimited",
    explode: false
  },
  multi: {
    style: "form",
    explode: true
  },
  csv: {
    style: "form",
    explode: false
  },
  tsv: {}
};
var pathAndHeaderSerialization = {
  ssv: {},
  pipes: {},
  multi: {},
  csv: {
    style: "simple",
    explode: false
  },
  tsv: {}
};
var serializationStyles = {
  header: pathAndHeaderSerialization,
  query: querySerialization,
  path: pathAndHeaderSerialization
};
function getParameterSerializationStyle(parameter) {
  if (parameter.type !== "array" || !(parameter.in === "query" || parameter.in === "path" || parameter.in === "header")) {
    return {};
  }
  const collectionFormat = parameter.collectionFormat ?? "csv";
  return serializationStyles[parameter.in][collectionFormat];
}

// node_modules/.pnpm/@scalar+openapi-parser@0.18.0/node_modules/@scalar/openapi-parser/dist/utils/upgrade.js
var upgraders = [
  // Swagger 2.0 -> OpenAPI 3.0
  upgradeFromTwoToThree,
  // OpenAPI 3.0 -> OpenAPI 3.1
  upgradeFromThreeToThreeOne
];
function upgrade(value) {
  if (!value) {
    return {
      specification: null,
      version: "3.1"
    };
  }
  const result = upgraders.reduce(
    (currentSpecification, upgrader) => upgrader(currentSpecification),
    isFilesystem(value) ? getEntrypoint(value).specification : normalize(value)
  );
  return {
    specification: result,
    // TODO: Make dynamic
    version: "3.1"
  };
}

// node_modules/.pnpm/@scalar+openapi-parser@0.18.0/node_modules/@scalar/openapi-parser/dist/lib/Validator/Validator.js
var import_ajv_draft_04 = __toESM(require_dist(), 1);
var import_ajv_formats = __toESM(require_dist2(), 1);
var import__ = __toESM(require__(), 1);

// node_modules/.pnpm/@scalar+openapi-parser@0.18.0/node_modules/@scalar/openapi-parser/dist/utils/betterAjvErrors/utils.js
var isXError = (x) => (error) => error.keyword === x;
var isRequiredError = isXError("required");
var isAnyOfError = isXError("anyOf");
var isEnumError = isXError("enum");

// node_modules/.pnpm/@scalar+openapi-parser@0.18.0/node_modules/@scalar/openapi-parser/dist/utils/betterAjvErrors/validation-errors/enum.js
var import_jsonpointer = __toESM(require_jsonpointer(), 1);

// node_modules/.pnpm/@scalar+openapi-parser@0.18.0/node_modules/@scalar/openapi-parser/dist/polyfills/path.js
function normalizeArray(parts, allowAboveRoot) {
  let up = 0;
  for (let i2 = parts.length - 1; i2 >= 0; i2--) {
    const last = parts[i2];
    if (last === ".") {
      parts.splice(i2, 1);
    } else if (last === "..") {
      parts.splice(i2, 1);
      up++;
    } else if (up) {
      parts.splice(i2, 1);
      up--;
    }
  }
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift("..");
    }
  }
  return parts;
}
var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^/]+?|)(\.[^./]*|))(?:[/]*)$/;
var splitPath = (filename) => splitPathRe.exec(filename).slice(1);
function resolve(...parameters) {
  let resolvedPath = "", resolvedAbsolute = false;
  for (let i2 = parameters.length - 1; i2 >= -1 && !resolvedAbsolute; i2--) {
    const path = i2 >= 0 ? parameters[i2] : "/";
    if (typeof path !== "string") {
      throw new TypeError("Arguments to path.resolve must be strings");
    }
    if (!path) {
      continue;
    }
    resolvedPath = path + "/" + resolvedPath;
    resolvedAbsolute = path.charAt(0) === "/";
  }
  resolvedPath = normalizeArray(
    filter(resolvedPath.split("/"), (p2) => !!p2),
    !resolvedAbsolute
  ).join("/");
  return (resolvedAbsolute ? "/" : "") + resolvedPath || ".";
}
function normalize2(path) {
  const isPathAbsolute = isAbsolute(path), trailingSlash = substr(path, -1) === "/";
  path = normalizeArray(
    filter(path.split("/"), (p2) => !!p2),
    !isPathAbsolute
  ).join("/");
  if (!path && !isPathAbsolute) {
    path = ".";
  }
  if (path && trailingSlash) {
    path += "/";
  }
  return (isPathAbsolute ? "/" : "") + path;
}
function isAbsolute(path) {
  return path.charAt(0) === "/";
}
function join(...paths) {
  return normalize2(
    filter(paths, (p2, _index) => {
      if (typeof p2 !== "string") {
        throw new TypeError("Arguments to path.join must be strings");
      }
      return p2;
    }).join("/")
  );
}
function relative(from, to) {
  from = resolve(from).substr(1);
  to = resolve(to).substr(1);
  function trim(arr) {
    let start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== "") {
        break;
      }
    }
    let end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== "") {
        break;
      }
    }
    if (start > end) {
      return [];
    }
    return arr.slice(start, end - start + 1);
  }
  const fromParts = trim(from.split("/"));
  const toParts = trim(to.split("/"));
  const length = Math.min(fromParts.length, toParts.length);
  let samePartsLength = length;
  for (let i2 = 0; i2 < length; i2++) {
    if (fromParts[i2] !== toParts[i2]) {
      samePartsLength = i2;
      break;
    }
  }
  let outputParts = [];
  for (let i2 = samePartsLength; i2 < fromParts.length; i2++) {
    outputParts.push("..");
  }
  outputParts = outputParts.concat(toParts.slice(samePartsLength));
  return outputParts.join("/");
}
var sep = "/";
var delimiter = ":";
function dirname(path) {
  const result = splitPath(path), root = result[0];
  let dir = result[1];
  if (!root && !dir) {
    return ".";
  }
  if (dir) {
    dir = dir.substr(0, dir.length - 1);
  }
  return root + dir;
}
function basename(path, ext) {
  let f2 = splitPath(path)[2];
  if (ext && f2.substr(-1 * ext.length) === ext) {
    f2 = f2.substr(0, f2.length - ext.length);
  }
  return f2;
}
function extname(path) {
  return splitPath(path)[3];
}
var path_default = {
  extname,
  basename,
  dirname,
  sep,
  delimiter,
  relative,
  join,
  isAbsolute,
  normalize: normalize2,
  resolve
};
function filter(xs, f2) {
  if (xs.filter) {
    return xs.filter(f2);
  }
  const res = [];
  for (let i2 = 0; i2 < xs.length; i2++) {
    if (f2(xs[i2], i2, xs)) {
      res.push(xs[i2]);
    }
  }
  return res;
}
var substr = "ab".substr(-1) === "b" ? (str, start, len) => str.substr(start, len) : (str, start, len) => {
  if (start < 0) {
    start = str.length + start;
  }
  return str.substr(start, len);
};

// node_modules/.pnpm/@scalar+openapi-parser@0.18.0/node_modules/@scalar/openapi-parser/dist/utils/bundle/value-generator.js
async function getHash(value) {
  const encoder = new TextEncoder();
  const data = encoder.encode(value);
  const hashBuffer = await crypto.subtle.digest("SHA-1", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  const hash = hashHex.substring(0, 7);
  return hash.match(/^\d+$/) ? "a" + hash.substring(1) : hash;
}
async function generateUniqueValue(compress, value, compressedToValue, prevCompressedValue, depth = 0) {
  const MAX_DEPTH = 100;
  if (depth >= MAX_DEPTH) {
    throw "Can not generate unique compressed values";
  }
  const compressedValue = await compress(prevCompressedValue ?? value);
  if (compressedToValue[compressedValue] !== void 0 && compressedToValue[compressedValue] !== value) {
    return generateUniqueValue(compress, value, compressedToValue, compressedValue, depth + 1);
  }
  compressedToValue[compressedValue] = value;
  return compressedValue;
}
var uniqueValueGeneratorFactory = (compress, compressedToValue) => {
  const valueToCompressed = Object.fromEntries(Object.entries(compressedToValue).map(([key, value]) => [value, key]));
  return {
    /**
     * Generates a unique compressed value for the given input string.
     * First checks if a compressed value already exists in the cache.
     * If not, generates a new unique compressed value and stores it in the cache.
     *
     * @param value - The original string value to compress
     * @returns A Promise that resolves to the compressed string value
     *
     * @example
     * const generator = uniqueValueGeneratorFactory(compress, {})
     * const compressed = await generator.generate('example.com/schema.json')
     * // Returns a unique compressed value like 'example'
     */
    generate: async (value) => {
      const cache2 = valueToCompressed[value];
      if (cache2) {
        return cache2;
      }
      const generatedValue = await generateUniqueValue(compress, value, compressedToValue);
      const compressedValue = generatedValue.match(/^\d+$/) ? `a${generatedValue}` : generatedValue;
      valueToCompressed[value] = compressedValue;
      return compressedValue;
    }
  };
};

// node_modules/.pnpm/@scalar+openapi-parser@0.18.0/node_modules/@scalar/openapi-parser/dist/utils/bundle/bundle.js
function isRemoteUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}
function isFilePath(value) {
  return !isRemoteUrl(value) && !isYaml(value) && !isJson(value);
}
function isLocalRef(value) {
  return value.startsWith("#");
}
async function resolveContents(value, plugins) {
  const plugin = plugins.find((p2) => p2.validate(value));
  if (plugin) {
    return plugin.exec(value);
  }
  return {
    ok: false
  };
}
function getNestedValue2(target, segments) {
  return segments.reduce((acc, key) => {
    if (acc === void 0) {
      return void 0;
    }
    return acc[key];
  }, target);
}
function setValueAtPath(obj, path2, value) {
  if (path2 === "") {
    throw new Error("Cannot set value at root ('') pointer");
  }
  const parts = getSegmentsFromPath(path2);
  let current = obj;
  for (let i2 = 0; i2 < parts.length; i2++) {
    const key = parts[i2];
    const isLast = i2 === parts.length - 1;
    const nextKey = parts[i2 + 1];
    const shouldBeArray = /^\d+$/.test(nextKey ?? "");
    if (isLast) {
      current[key] = value;
    } else {
      if (!(key in current) || typeof current[key] !== "object") {
        current[key] = shouldBeArray ? [] : {};
      }
      current = current[key];
    }
  }
}
function resolveReferencePath(base, relativePath) {
  if (isRemoteUrl(relativePath)) {
    return relativePath;
  }
  if (isRemoteUrl(base)) {
    const url = new URL(base);
    const mergedPath = path_default.join(path_default.dirname(url.pathname), relativePath);
    return new URL(mergedPath, base).toString();
  }
  return path_default.join(path_default.dirname(base), relativePath);
}
function prefixInternalRef(input, prefix) {
  if (!isLocalRef(input)) {
    throw "Please provide an internal ref";
  }
  return `#/${prefix.map(escapeJsonPointer).join("/")}${input.substring(1)}`;
}
function prefixInternalRefRecursive(input, prefix) {
  if (!isObject(input)) {
    return;
  }
  Object.values(input).forEach((el) => prefixInternalRefRecursive(el, prefix));
  if (typeof input === "object" && "$ref" in input && typeof input["$ref"] === "string") {
    const ref2 = input["$ref"];
    if (!isLocalRef(ref2)) {
      return;
    }
    return input["$ref"] = prefixInternalRef(ref2, prefix);
  }
}
var resolveAndCopyReferences = (targetDocument, sourceDocument, referencePath, externalRefsKey, documentKey, processedNodes = /* @__PURE__ */ new Set()) => {
  const referencedValue = getNestedValue2(sourceDocument, getSegmentsFromPath(referencePath));
  if (processedNodes.has(referencedValue)) {
    return;
  }
  processedNodes.add(referencedValue);
  setValueAtPath(targetDocument, referencePath, referencedValue);
  const traverse2 = (node) => {
    if (!node || typeof node !== "object") {
      return;
    }
    if ("$ref" in node && typeof node["$ref"] === "string") {
      if (node["$ref"].startsWith(`#/${externalRefsKey}/${escapeJsonPointer(documentKey)}`)) {
        resolveAndCopyReferences(
          targetDocument,
          sourceDocument,
          node["$ref"].substring(1),
          documentKey,
          externalRefsKey,
          processedNodes
        );
      }
    }
    for (const value of Object.values(node)) {
      traverse2(value);
    }
  };
  traverse2(referencedValue);
};
var extensions = {
  /**
   * Custom OpenAPI extension key used to store external references.
   * This key will contain all bundled external documents.
   * The x-ext key is used to maintain a clean separation between the main
   * OpenAPI document and its bundled external references.
   */
  externalDocuments: "x-ext",
  /**
   * Custom OpenAPI extension key used to maintain a mapping between
   * hashed keys and their original URLs in x-ext.
   * This mapping is essential for tracking the source of bundled references
   */
  externalDocumentsMappings: "x-ext-urls"
};
async function bundle(input, config) {
  const cache2 = config.cache ?? /* @__PURE__ */ new Map();
  const resolveInput = async () => {
    if (typeof input !== "string") {
      return input;
    }
    const result = await resolveContents(input, config.plugins);
    if (result.ok && typeof result.data === "object") {
      return result.data;
    }
    throw new Error(
      "Failed to resolve input: Please provide a valid string value or pass a loader to process the input"
    );
  };
  const rawSpecification = await resolveInput();
  const documentRoot = config.root ?? rawSpecification;
  const isPartialBundling = config.root !== void 0 && config.root !== rawSpecification;
  const processedNodes = config.visitedNodes ?? /* @__PURE__ */ new Set();
  const defaultOrigin = () => {
    if (typeof input !== "string") {
      return "";
    }
    if (isRemoteUrl(input) || isFilePath(input)) {
      return input;
    }
    return "";
  };
  if (documentRoot[extensions.externalDocumentsMappings] === void 0) {
    documentRoot[extensions.externalDocumentsMappings] = {};
  }
  const { generate } = uniqueValueGeneratorFactory(
    config.compress ?? getHash,
    documentRoot[extensions.externalDocumentsMappings]
  );
  const bundler = async (root, origin = defaultOrigin(), isChunkParent = false) => {
    var _a, _b, _c, _d, _e, _f;
    if (!isObject(root) && !Array.isArray(root)) {
      return;
    }
    if (processedNodes.has(root)) {
      return;
    }
    processedNodes.add(root);
    if (typeof root === "object" && "$ref" in root && typeof root["$ref"] === "string") {
      const ref2 = root["$ref"];
      const isChunk = "$global" in root && typeof root["$global"] === "boolean" && root["$global"];
      if (isLocalRef(ref2)) {
        if (isPartialBundling) {
          await bundler(getNestedValue2(documentRoot, getSegmentsFromPath(ref2.substring(1))), origin, isChunkParent);
        }
        return;
      }
      const [prefix, path2 = ""] = ref2.split("#", 2);
      const resolvedPath = resolveReferencePath(origin, prefix);
      const compressedPath = await generate(resolvedPath);
      const seen = cache2.has(resolvedPath);
      if (!seen) {
        cache2.set(resolvedPath, resolveContents(resolvedPath, config.plugins));
      }
      (_b = (_a = config == null ? void 0 : config.hooks) == null ? void 0 : _a.onResolveStart) == null ? void 0 : _b.call(_a, root);
      const result = await cache2.get(resolvedPath);
      if (result.ok) {
        if (!seen) {
          if (!isChunk) {
            prefixInternalRefRecursive(result.data, [extensions.externalDocuments, compressedPath]);
          }
          await bundler(result.data, isChunk ? origin : resolvedPath, isChunk);
          setValueAtPath(
            documentRoot,
            `/${extensions.externalDocumentsMappings}/${escapeJsonPointer(compressedPath)}`,
            resolvedPath
          );
        }
        if (config.treeShake === true) {
          resolveAndCopyReferences(
            documentRoot,
            { [extensions.externalDocuments]: { [compressedPath]: result.data } },
            prefixInternalRef(`#${path2}`, [extensions.externalDocuments, compressedPath]).substring(1),
            extensions.externalDocuments,
            compressedPath
          );
        } else if (!seen) {
          setValueAtPath(documentRoot, `/${extensions.externalDocuments}/${compressedPath}`, result.data);
        }
        root.$ref = prefixInternalRef(`#${path2}`, [extensions.externalDocuments, compressedPath]);
        (_d = (_c = config == null ? void 0 : config.hooks) == null ? void 0 : _c.onResolveSuccess) == null ? void 0 : _d.call(_c, root);
        return;
      }
      (_f = (_e = config == null ? void 0 : config.hooks) == null ? void 0 : _e.onResolveError) == null ? void 0 : _f.call(_e, root);
      return console.warn(
        `Failed to resolve external reference "${resolvedPath}". The reference may be invalid, inaccessible, or missing a loader for this type of reference.`
      );
    }
    await Promise.all(
      Object.entries(root).map(async ([key, value]) => {
        if (key === extensions.externalDocuments) {
          return;
        }
        await bundler(value, origin, isChunkParent);
      })
    );
  };
  await bundler(rawSpecification);
  if (!config.urlMap && !isPartialBundling) {
    delete documentRoot[extensions.externalDocumentsMappings];
  }
  return rawSpecification;
}

// node_modules/.pnpm/@scalar+oas-utils@0.4.6/node_modules/@scalar/oas-utils/dist/transforms/import-spec.js
var dereferenceDocument = async (document2, { shouldLoad = true } = {}) => {
  if (document2 === null || typeof document2 === "string" && document2.trim() === "") {
    console.warn("[@scalar/oas-utils] Empty OpenAPI document provided.");
    return {
      schema: {},
      errors: []
    };
  }
  let filesystem = document2;
  let loadErrors = [];
  if (shouldLoad) {
    const response = await load(document2).catch((e) => ({
      errors: [
        {
          code: e.code,
          message: e.message
        }
      ],
      filesystem: []
    }));
    filesystem = response.filesystem;
    loadErrors = response.errors ?? [];
  }
  const { specification } = upgrade(filesystem);
  const { schema, errors: derefErrors = [] } = await dereference2(specification);
  return {
    schema,
    errors: [...loadErrors, ...derefErrors]
  };
};
var parseSchema = async (originalDocument, {
  shouldLoad = true,
  /** If a dereferenced document is provided, we will skip the dereferencing step. */
  dereferencedDocument = void 0
} = {}) => {
  const { schema, errors } = dereferencedDocument ? {
    schema: dereferencedDocument,
    errors: []
  } : (
    // Otherwise, dereference the original document
    await dereferenceDocument(originalDocument ?? "", {
      shouldLoad
    })
  );
  if (!schema) {
    console.warn("[@scalar/oas-utils] OpenAPI Parser Warning: Schema is undefined");
  }
  return {
    /**
     * Temporary fix for the parser returning an empty array
     * TODO: remove this once the parser is fixed
     */
    schema: Array.isArray(schema) ? {} : schema,
    errors
  };
};
var getSelectedSecuritySchemeUids = (securityRequirements, preferredSecurityNames = [], securitySchemeMap) => {
  const names = securityRequirements[0] && !preferredSecurityNames.length ? [securityRequirements[0]] : preferredSecurityNames;
  const uids = names.map(
    (name) => Array.isArray(name) ? name.map((k3) => securitySchemeMap[k3]).filter(isDefined) : securitySchemeMap[name]
  ).filter(isDefined);
  return uids;
};
var getSlugUid = (slug) => `slug-uid-${slug}`;
async function importSpecToWorkspace(content, {
  /** If a dereferenced document is provided, we will skip the dereferencing step. */
  dereferencedDocument,
  authentication,
  baseServerURL,
  documentUrl,
  servers: configuredServers,
  useCollectionSecurity = false,
  slug,
  shouldLoad,
  watchMode = false
} = {}) {
  var _a, _b, _c, _d;
  const { schema, errors } = await parseSchema(content, { shouldLoad, dereferencedDocument });
  const importWarnings = [...errors.map((e) => e.message)];
  if (!schema) {
    return { importWarnings, error: true, collection: void 0 };
  }
  const start = performance.now();
  const requests = [];
  const collectionServers = getServersFromOpenApiDocument(configuredServers || schema.servers, {
    baseServerURL
  });
  const operationServers = [];
  if (!collectionServers.length) {
    const fallbackUrl = getFallbackUrl();
    if (fallbackUrl) {
      collectionServers.push(serverSchema.parse({ url: fallbackUrl }));
    }
  }
  const tagNames = /* @__PURE__ */ new Set();
  const security = ((_a = schema.components) == null ? void 0 : _a.securitySchemes) ?? (schema == null ? void 0 : schema.securityDefinitions) ?? {};
  if ((authentication == null ? void 0 : authentication.oAuth2) || (authentication == null ? void 0 : authentication.apiKey) || (authentication == null ? void 0 : authentication.http)) {
    console.warn(
      `DEPRECATION WARNING: It looks like you're using legacy authentication config. Please migrate to use the updated config. See https://github.com/scalar/scalar/blob/main/documentation/configuration.md#authentication-partial This will be removed in a future version.`
    );
  }
  const securitySchemes = (_c = (_b = Object.entries(security)).map) == null ? void 0 : _c.call(_b, ([nameKey, _scheme]) => {
    var _a2, _b2, _c2, _d2, _e;
    const payload = {
      ..._scheme,
      // Add the new auth config overrides, we keep the old code below for backwards compatibility
      ...((_a2 = authentication == null ? void 0 : authentication.securitySchemes) == null ? void 0 : _a2[nameKey]) ?? {},
      nameKey
    };
    if (payload.type === "oauth2" && payload.flows) {
      const flowKeys = Object.keys(payload.flows);
      flowKeys.forEach((key) => {
        var _a3, _b3, _c3, _d3, _e2;
        if (!((_a3 = payload.flows) == null ? void 0 : _a3[key]) || _scheme.type !== "oauth2") {
          return;
        }
        const authFlow = ((_d3 = (_c3 = (_b3 = authentication == null ? void 0 : authentication.securitySchemes) == null ? void 0 : _b3[nameKey]) == null ? void 0 : _c3.flows) == null ? void 0 : _d3[key]) ?? {};
        payload.flows[key] = {
          ...((_e2 = _scheme.flows) == null ? void 0 : _e2[key]) ?? {},
          ...authFlow
        };
        const flow = payload.flows[key];
        flow.type = key;
        if (authentication == null ? void 0 : authentication.oAuth2) {
          if (authentication.oAuth2.accessToken) {
            flow.token = authentication.oAuth2.accessToken;
          }
          if (authentication.oAuth2.clientId) {
            flow["x-scalar-client-id"] = authentication.oAuth2.clientId;
          }
          if (authentication.oAuth2.scopes) {
            flow.selectedScopes = authentication.oAuth2.scopes;
          }
          if (flow.type === "password") {
            flow.username = authentication.oAuth2.username;
            flow.password = authentication.oAuth2.password;
          }
        }
        if (Array.isArray(flow.scopes)) {
          flow.scopes = flow.scopes.reduce((prev, s3) => ({ ...prev, [s3]: "" }), {});
        }
        if (flow["x-defaultClientId"]) {
          flow["x-scalar-client-id"] = flow["x-defaultClientId"];
        }
      });
    } else if (authentication) {
      if (payload.type === "apiKey" && ((_b2 = authentication.apiKey) == null ? void 0 : _b2.token)) {
        payload.value = authentication.apiKey.token;
      } else if (payload.type === "http") {
        if (payload.scheme === "basic" && ((_c2 = authentication.http) == null ? void 0 : _c2.basic)) {
          payload.username = authentication.http.basic.username ?? "";
          payload.password = authentication.http.basic.password ?? "";
        } else if (payload.scheme === "bearer" && ((_e = (_d2 = authentication.http) == null ? void 0 : _d2.bearer) == null ? void 0 : _e.token)) {
          payload.token = authentication.http.bearer.token ?? "";
        }
      }
    }
    const scheme = schemaModel(payload, securitySchemeSchema, false);
    if (!scheme) {
      importWarnings.push(`Security scheme ${nameKey} is invalid.`);
    }
    return scheme;
  }).filter((v2) => !!v2);
  const securitySchemeMap = {};
  securitySchemes.forEach((s3) => {
    securitySchemeMap[s3.nameKey] = s3.uid;
  });
  keysOf(schema.paths ?? {}).forEach((pathString) => {
    var _a2;
    const path = (_a2 = schema == null ? void 0 : schema.paths) == null ? void 0 : _a2[pathString];
    if (!path) {
      return;
    }
    const pathServers = serverSchema.array().parse(path.servers ?? []);
    for (const server of pathServers) {
      collectionServers.push(server);
    }
    const methods = Object.keys(path).filter(isHttpMethod);
    methods.forEach((method) => {
      var _a3, _b2;
      const operation = path[method];
      if (!operation) {
        return;
      }
      const operationLevelServers = serverSchema.array().parse(operation.servers ?? []);
      for (const server of operationLevelServers) {
        operationServers.push(server);
      }
      (_a3 = operation.tags) == null ? void 0 : _a3.forEach((t2) => tagNames.add(t2));
      const { security: operationSecurity, ...operationWithoutSecurity } = operation;
      const securityRequirements2 = (operationSecurity ?? schema.security ?? []).map((s3) => {
        const keys2 = Object.keys(s3);
        return keys2.length > 1 ? keys2 : keys2[0];
      }).filter(isDefined);
      const preferredSecurityNames2 = [(authentication == null ? void 0 : authentication.preferredSecurityScheme) ?? []].flat().filter((name) => {
        if (Array.isArray(name)) {
          return securityRequirements2.some(
            (r4) => Array.isArray(r4) && r4.length === name.length && r4.every((v2, i2) => v2 === name[i2])
          );
        }
        return securityRequirements2.includes(name);
      });
      const selectedSecuritySchemeUids2 = securityRequirements2.length && !useCollectionSecurity ? getSelectedSecuritySchemeUids(securityRequirements2, preferredSecurityNames2, securitySchemeMap) : [];
      const requestPayload = {
        ...operationWithoutSecurity,
        method,
        path: pathString,
        security: operationSecurity,
        selectedServerUid: (_b2 = operationLevelServers == null ? void 0 : operationLevelServers[0]) == null ? void 0 : _b2.uid,
        selectedSecuritySchemeUids: selectedSecuritySchemeUids2,
        // Merge path and operation level parameters
        parameters: [...(path == null ? void 0 : path.parameters) ?? [], ...operation.parameters ?? []],
        servers: [...pathServers, ...operationLevelServers].map((s3) => s3.uid)
      };
      if (requestPayload.examples) {
        console.warn("[@scalar/api-client] operation.examples is not a valid openapi property");
        delete requestPayload.examples;
      }
      const request = schemaModel(requestPayload, requestSchema, false);
      if (!request) {
        importWarnings.push(`${method} Request at ${path} is invalid.`);
      } else {
        requests.push(request);
      }
    });
  });
  const tags = schemaModel((schema == null ? void 0 : schema.tags) ?? [], tagSchema.array(), false) ?? [];
  tags.forEach((t2) => tagNames.delete(t2.name));
  tagNames.forEach((name) => name && tags.push(tagSchema.parse({ name })));
  const tagMap = {};
  tags.forEach((t2) => {
    tagMap[t2.name] = t2;
  });
  const collectionChildren = new Set(tags.map((t2) => t2.uid));
  tags.forEach((t2) => {
    var _a2;
    (_a2 = t2["x-scalar-children"]) == null ? void 0 : _a2.forEach((c2) => {
      var _a3;
      const nestedUid = (_a3 = tagMap[c2.tagName]) == null ? void 0 : _a3.uid;
      if (nestedUid) {
        t2.children.push(nestedUid);
        collectionChildren.delete(nestedUid);
      }
    });
  });
  requests.forEach((r4) => {
    var _a2;
    if ((_a2 = r4.tags) == null ? void 0 : _a2.length) {
      r4.tags.forEach((t2) => {
        var _a3;
        (_a3 = tagMap[t2]) == null ? void 0 : _a3.children.push(r4.uid);
      });
    } else {
      collectionChildren.add(r4.uid);
    }
  });
  const examples = [];
  requests.forEach((request) => {
    const example = createExampleFromRequest(request, "Default Example");
    examples.push(example);
    request.examples.push(example.uid);
  });
  const securityRequirements = (schema.security ?? []).map((s3) => {
    const keys2 = Object.keys(s3);
    return keys2.length > 1 ? keys2 : keys2[0];
  }).filter(isDefined);
  const preferredSecurityNames = [(authentication == null ? void 0 : authentication.preferredSecurityScheme) ?? []].flat();
  const selectedSecuritySchemeUids = (securityRequirements.length || (preferredSecurityNames == null ? void 0 : preferredSecurityNames.length)) && useCollectionSecurity ? getSelectedSecuritySchemeUids(securityRequirements, preferredSecurityNames, securitySchemeMap) : [];
  const slugObj = (slug == null ? void 0 : slug.length) ? { uid: getSlugUid(slug) } : {};
  const collection = collectionSchema.parse({
    ...slugObj,
    ...schema,
    watchMode,
    documentUrl,
    useCollectionSecurity,
    requests: requests.map((r4) => r4.uid),
    servers: collectionServers.map((s3) => s3.uid),
    tags: tags.map((t2) => t2.uid),
    children: [...collectionChildren],
    security: schema.security ?? [{}],
    selectedServerUid: (_d = collectionServers == null ? void 0 : collectionServers[0]) == null ? void 0 : _d.uid,
    selectedSecuritySchemeUids,
    components: {
      ...schema.components
    },
    securitySchemes: securitySchemes.map((s3) => s3.uid)
  });
  const end = performance.now();
  console.log(`workspace: ${Math.round(end - start)} ms`);
  return {
    error: false,
    servers: [...collectionServers, ...operationServers],
    schema,
    requests,
    examples,
    collection,
    tags,
    securitySchemes
  };
}
function getServersFromOpenApiDocument(servers, { baseServerURL } = {}) {
  if (!servers || !Array.isArray(servers)) {
    return [];
  }
  return servers.map((server) => {
    var _a;
    try {
      const parsedSchema = serverSchema.parse(server);
      if ((_a = parsedSchema == null ? void 0 : parsedSchema.url) == null ? void 0 : _a.startsWith("/")) {
        if (baseServerURL) {
          parsedSchema.url = combineUrlAndPath(baseServerURL, parsedSchema.url);
          return parsedSchema;
        }
        const fallbackUrl = getFallbackUrl();
        if (fallbackUrl) {
          parsedSchema.url = combineUrlAndPath(fallbackUrl, parsedSchema.url.replace(/^\//, ""));
          return parsedSchema;
        }
      }
      return parsedSchema;
    } catch (error) {
      console.warn("Oops, that’s an invalid server configuration.");
      console.warn("Server:", server);
      console.warn("Error:", error);
      return void 0;
    }
  }).filter(isDefined);
}
function getFallbackUrl() {
  var _a;
  if (typeof window === "undefined") {
    return void 0;
  }
  if (typeof ((_a = window == null ? void 0 : window.location) == null ? void 0 : _a.origin) !== "string") {
    return void 0;
  }
  return window.location.origin;
}

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/store/import-spec.js
var F = {};
function O({
  requestMutators: s3,
  collectionMutators: l,
  serverMutators: m2,
  tagMutators: p2,
  securitySchemeMutators: d2,
  requestExampleMutators: f2,
  workspaceMutators: u,
  workspaces: h2
}) {
  const n4 = async (t2, a3, e = {}) => {
    var i2;
    const c2 = toRaw(t2), r4 = await importSpecToWorkspace(c2, e);
    if (r4.error) {
      console.group("IMPORT ERRORS"), r4.importWarnings.forEach((o2) => console.warn(o2)), console.groupEnd();
      return;
    }
    return e.documentUrl && typeof c2 == "string" && (F[e.documentUrl] = {
      hash: createHash(c2),
      schema: r4.schema
    }), r4.examples.forEach((o2) => f2.add(o2)), r4.requests.forEach((o2) => s3.add(o2)), r4.tags.forEach((o2) => p2.add(o2)), r4.servers.forEach((o2) => m2.add(o2)), r4.securitySchemes.forEach((o2) => d2.add(o2)), l.add(r4.collection), u.edit(a3, "collections", [
      ...((i2 = h2[a3]) == null ? void 0 : i2.collections) ?? [],
      r4.collection.uid
    ]), r4;
  };
  async function E(t2, a3, {
    proxyUrl: e,
    ...c2
  } = {}) {
    try {
      const r4 = await fetchDocument(t2, e);
      return [
        null,
        await n4(r4, a3, {
          documentUrl: t2,
          ...c2
        })
      ];
    } catch (r4) {
      return console.error("Failed to fetch spec from URL:", r4), [t(r4), null];
    }
  }
  return {
    importSpecFile: n4,
    importSpecFromUrl: E
  };
}

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/store/request-example.js
function T2(o2) {
  const t2 = reactive({}), m2 = mutationFactory(
    t2,
    reactive({}),
    o2 && LS_KEYS.REQUEST_EXAMPLE
  );
  return {
    requestExamples: t2,
    requestExampleMutators: m2
  };
}
function _({
  requestExamples: o2,
  requestExampleMutators: t2,
  requestMutators: m2,
  requests: p2
}) {
  return {
    addRequestExample: (e, a3) => {
      const r4 = a3 ?? iterateTitle(
        (e.summary ?? "Example") + " #1",
        (l) => e.examples.some((s3) => {
          var d2;
          return ((d2 = o2[s3]) == null ? void 0 : d2.name) === l;
        })
      ), i2 = createExampleFromRequest(e, r4);
      return t2.add(i2), m2.edit(e.uid, "examples", [...e.examples, i2.uid]), i2;
    },
    deleteRequestExample: (e) => {
      var a3;
      e.requestUid && (m2.edit(
        e.requestUid,
        "examples",
        ((a3 = p2[e.requestUid]) == null ? void 0 : a3.examples.filter((r4) => r4 !== e.uid)) || []
      ), t2.delete(e.uid));
    }
  };
}

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/store/requests.js
function Q(p2) {
  const f2 = reactive({}), q2 = mutationFactory(f2, reactive({}), p2 && LS_KEYS.REQUEST);
  return {
    requests: f2,
    requestMutators: q2
  };
}
function g({
  requestExamples: p2,
  requestExampleMutators: f2,
  requestMutators: q2,
  collectionMutators: c2,
  collections: n4,
  tags: m2,
  tagMutators: R2
}, E) {
  return {
    addRequest: (r4, t2) => {
      var l;
      const e = schemaModel(r4, requestSchema, false);
      if (!e)
        return console.error("INVALID REQUEST DATA", r4);
      const s3 = n4[t2], u = createExampleFromRequest(
        e,
        iterateTitle(
          (e.summary ?? "Example") + " #1",
          (h2) => e.examples.some((a3) => {
            var o2;
            return h2 === ((o2 = p2[a3]) == null ? void 0 : o2.name);
          })
        )
      );
      return e.examples.push(u.uid), q2.add(e), f2.add(u), s3 && c2.edit(t2, "requests", [...s3.requests, e.uid]), (l = e.tags) != null && l.length ? e.tags.forEach((h2) => {
        const a3 = s3 == null ? void 0 : s3.tags.find((o2) => {
          var x;
          return ((x = m2[o2]) == null ? void 0 : x.name) === h2;
        });
        a3 && m2[a3] ? R2.edit(a3, "children", [...m2[a3].children, e.uid]) : E({ name: h2, children: [e.uid] }, t2);
      }) : s3 && c2.edit(t2, "children", [...s3.children, e.uid]), e;
    },
    deleteRequest: (r4, t2) => {
      var s3;
      const e = n4[t2];
      r4.examples.forEach((u) => f2.delete(u)), e && (c2.edit(
        t2,
        "requests",
        e.requests.filter((u) => u !== r4.uid)
      ), c2.edit(
        t2,
        "children",
        e.children.filter((u) => u !== r4.uid)
      ), (s3 = r4.tags) == null || s3.forEach((u) => {
        var h2;
        const l = e.tags.find((a3) => {
          var o2;
          return ((o2 = m2[a3]) == null ? void 0 : o2.name) === u;
        });
        l && R2.edit(l, "children", ((h2 = m2[l]) == null ? void 0 : h2.children.filter((a3) => a3 !== r4.uid)) || []);
      })), q2.delete(r4.uid);
    },
    findRequestParents: O2({ collections: n4, tags: m2 })
  };
}
function O2({
  collections: p2,
  tags: f2
}) {
  function q2(c2) {
    const n4 = Object.values(p2).find((i2) => {
      var d2;
      return (d2 = i2.requests) == null ? void 0 : d2.includes(c2.uid);
    });
    if (!n4)
      return [];
    const m2 = Object.keys(f2).reduce(
      (i2, d2) => (i2[d2] = [], i2),
      { [n4 == null ? void 0 : n4.uid]: [] }
    );
    function R2(i2, d2) {
      d2.forEach((r4) => {
        var t2;
        return (t2 = m2[r4]) == null ? void 0 : t2.push(...i2.children);
      }), i2.children.forEach((r4) => {
        f2[r4] && R2(f2[r4], [...d2, r4]);
      });
    }
    R2(n4, [n4.uid]);
    const E = /* @__PURE__ */ new Set();
    return Object.entries(m2).forEach(([i2, d2]) => {
      d2.includes(c2.uid) && E.add(i2);
    }), [...E];
  }
  return q2;
}
function k() {
  return { request: requestSchema.parse({
    method: "get",
    parameters: [],
    path: "",
    summary: "My First Request",
    examples: []
  }) };
}

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/store/security-schemes.js
function v(S) {
  const i2 = reactive({}), u = mutationFactory(
    i2,
    reactive({}),
    S && LS_KEYS.SECURITY_SCHEME
  );
  return {
    securitySchemes: i2,
    securitySchemeMutators: u
  };
}
function k2({
  securitySchemeMutators: S,
  collectionMutators: i2,
  collections: u,
  requests: s3,
  requestMutators: y2
}) {
  return {
    addSecurityScheme: (t2, e) => {
      const r4 = securitySchemeSchema.parse(t2);
      return S.add(r4), e && u[e] && i2.edit(e, "securitySchemes", [
        ...u[e].securitySchemes,
        r4.uid
      ]), r4;
    },
    deleteSecurityScheme: (t2) => {
      Object.values(u).forEach((e) => {
        e.securitySchemes.includes(t2) && i2.edit(
          e.uid,
          "securitySchemes",
          e.securitySchemes.filter((r4) => r4 !== t2)
        );
      }), Object.values(s3).forEach((e) => {
        var r4, m2, d2, a3;
        (r4 = e.security) != null && r4.some((c2) => Object.keys(c2).includes(t2)) && y2.edit(
          e.uid,
          "security",
          (d2 = (m2 = s3[e.uid]) == null ? void 0 : m2.security) == null ? void 0 : d2.filter((c2) => !Object.keys(c2).includes(t2))
        ), e.selectedSecuritySchemeUids.flat().includes(t2) && y2.edit(
          e.uid,
          "selectedSecuritySchemeUids",
          (a3 = e.selectedSecuritySchemeUids) == null ? void 0 : a3.filter((c2) => Array.isArray(c2) ? !c2.includes(t2) : c2 !== t2)
        );
      }), S.delete(t2);
    }
  };
}

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/store/servers.js
function R(s3) {
  const r4 = reactive({}), v2 = mutationFactory(r4, reactive({}), s3 && LS_KEYS.SERVER);
  return {
    servers: r4,
    serverMutators: v2
  };
}
function h({
  serverMutators: s3,
  collections: r4,
  collectionMutators: v2,
  requests: f2,
  requestMutators: d2
}) {
  return {
    addServer: (S, e) => {
      const t2 = serverSchema.parse(S);
      return r4[e] ? v2.edit(e, "servers", [
        ...r4[e].servers,
        t2.uid
      ]) : f2[e] && d2.edit(e, "servers", [...f2[e].servers, t2.uid]), s3.add(t2), t2;
    },
    deleteServer: (S, e) => {
      r4[e] && (v2.edit(
        e,
        "servers",
        r4[e].servers.filter((t2) => t2 !== S)
      ), s3.delete(S));
    }
  };
}

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/store/tags.js
function L(d2) {
  const a3 = reactive({}), s3 = mutationFactory(a3, reactive({}), d2 && LS_KEYS.TAG);
  return {
    tags: a3,
    tagMutators: s3
  };
}
function q({
  collectionMutators: d2,
  collections: a3,
  requests: s3,
  requestMutators: c2,
  tagMutators: m2
}) {
  return { addTag: (t2, n4) => {
    const r4 = a3[n4], e = schemaModel(t2, tagSchema, false);
    return !e || !r4 ? console.error("INVALID TAG DATA", t2) : (d2.edit(n4, "tags", [...r4.tags, e.uid]), d2.edit(n4, "children", [...r4.children, e.uid]), m2.add(e), e);
  }, deleteTag: (t2, n4) => {
    const r4 = a3[n4];
    r4 && (d2.edit(
      n4,
      "tags",
      r4.tags.filter((e) => e !== t2.uid)
    ), d2.edit(
      n4,
      "children",
      r4.children.filter((e) => e !== t2.uid)
    ), t2.children.forEach((e) => {
      var u;
      const f2 = s3[e];
      if (!f2)
        return;
      const i2 = (u = f2.tags) == null ? void 0 : u.filter((h2) => h2 !== t2.name);
      c2.edit(f2.uid, "tags", i2), !(i2 != null && i2.length) && !r4.children.includes(e) && d2.edit(n4, "children", [...r4.children, e]);
    }), m2.delete(t2.uid));
  } };
}

// node_modules/.pnpm/@scalar+themes@0.13.3/node_modules/@scalar/themes/dist/fonts/fonts.css2.js
var defaultFonts = '/* Inter (--scalar-font) */\n/* cyrillic-ext */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(https://fonts.scalar.com/inter-cyrillic-ext.woff2) format("woff2");\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(https://fonts.scalar.com/inter-cyrillic.woff2) format("woff2");\n  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(https://fonts.scalar.com/inter-greek-ext.woff2) format("woff2");\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(https://fonts.scalar.com/inter-greek.woff2) format("woff2");\n  unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(https://fonts.scalar.com/inter-vietnamese.woff2) format("woff2");\n  unicode-range:\n    U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,\n    U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323,\n    U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(https://fonts.scalar.com/inter-latin-ext.woff2) format("woff2");\n  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113,\n    U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(https://fonts.scalar.com/inter-latin.woff2) format("woff2");\n  unicode-range:\n    U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,\n    U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,\n    U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* JetBrains Mono (--scalar-font-code) */\n/* cyrillic-ext */\n@font-face {\n  font-family: "JetBrains Mono";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.scalar.com/mono-cyrillic-ext.woff2) format("woff2");\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: "JetBrains Mono";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.scalar.com/mono-cyrillic.woff2) format("woff2");\n  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek */\n@font-face {\n  font-family: "JetBrains Mono";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.scalar.com/mono-greek.woff2) format("woff2");\n  unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: "JetBrains Mono";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.scalar.com/mono-vietnamese.woff2) format("woff2");\n  unicode-range:\n    U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,\n    U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323,\n    U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: "JetBrains Mono";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.scalar.com/mono-latin-ext.woff2) format("woff2");\n  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113,\n    U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: "JetBrains Mono";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.scalar.com/mono-latin.woff2) format("woff2");\n  unicode-range:\n    U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,\n    U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,\n    U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n';

// node_modules/.pnpm/@scalar+themes@0.13.3/node_modules/@scalar/themes/dist/presets/alternate.css.js
var alternateTheme = "/* basic theme */\n:root {\n  --scalar-text-decoration: underline;\n  --scalar-text-decoration-hover: underline;\n}\n\n.dark-mode {\n  --scalar-background-1: #131313;\n  --scalar-background-2: #1d1d1d;\n  --scalar-background-3: #272727;\n  --scalar-background-card: #1d1d1d;\n\n  --scalar-color-1: rgba(255, 255, 255, 0.9);\n  --scalar-color-2: rgba(255, 255, 255, 0.62);\n  --scalar-color-3: rgba(255, 255, 255, 0.44);\n\n  --scalar-color-accent: var(--scalar-color-1);\n  --scalar-background-accent: var(--scalar-background-3);\n\n  --scalar-border-color: #2a2b2a;\n}\n\n.light-mode,\n.light-mode .dark-mode {\n  --scalar-background-1: #f9f9f9;\n  --scalar-background-2: #f1f1f1;\n  --scalar-background-3: #e7e7e7;\n  --scalar-background-card: #fff;\n\n  --scalar-color-1: #2a2f45;\n  --scalar-color-2: #757575;\n  --scalar-color-3: #8e8e8e;\n\n  --scalar-color-accent: var(--scalar-color-1);\n  --scalar-background-accent: var(--scalar-background-3);\n\n  --scalar-border-color: rgba(0, 0, 0, 0.1);\n}\n\n/* Document Sidebar */\n.t-doc__sidebar {\n  --scalar-color-green: var(--scalar-color-1);\n  --scalar-color-red: var(--scalar-color-1);\n  --scalar-color-yellow: var(--scalar-color-1);\n  --scalar-color-blue: var(--scalar-color-1);\n  --scalar-color-orange: var(--scalar-color-1);\n  --scalar-color-purple: var(--scalar-color-1);\n}\n\n.light-mode .t-doc__sidebar,\n.dark-mode .t-doc__sidebar {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n\n  --scalar-sidebar-item-hover-background: var(--scalar-background-2);\n  --scalar-sidebar-item-hover-color: currentColor;\n\n  --scalar-sidebar-item-active-background: var(--scalar-background-accent);\n  --scalar-sidebar-color-active: var(--scalar-color-accent);\n\n  --scalar-sidebar-search-background: transparent;\n  --scalar-sidebar-search-color: var(--scalar-color-3);\n  --scalar-sidebar-search-border-color: var(--scalar-border-color);\n}\n/* advanced */\n.light-mode .dark-mode,\n.light-mode {\n  --scalar-color-green: #069061;\n  --scalar-color-red: #ef0006;\n  --scalar-color-yellow: #edbe20;\n  --scalar-color-blue: #0082d0;\n  --scalar-color-orange: #fb892c;\n  --scalar-color-purple: #5203d1;\n\n  --scalar-button-1: rgba(0, 0, 0, 1);\n  --scalar-button-1-hover: rgba(0, 0, 0, 0.8);\n  --scalar-button-1-color: rgba(255, 255, 255, 0.9);\n}\n.dark-mode {\n  --scalar-color-green: #00b648;\n  --scalar-color-red: #dd2f2c;\n  --scalar-color-yellow: #ffc90d;\n  --scalar-color-blue: #4eb3ec;\n  --scalar-color-orange: #ff8d4d;\n  --scalar-color-purple: #b191f9;\n\n  --scalar-button-1: rgba(255, 255, 255, 1);\n  --scalar-button-1-hover: rgba(255, 255, 255, 0.9);\n  --scalar-button-1-color: black;\n}\n\n.scalar-api-client__item,\n.scalar-card,\n.dark-mode .dark-mode.scalar-card {\n  --scalar-background-1: var(--scalar-background-card);\n  --scalar-background-2: var(--scalar-background-1);\n  --scalar-background-3: var(--scalar-background-1);\n}\n.dark-mode .dark-mode.scalar-card {\n  --scalar-background-3: var(--scalar-background-3);\n}\n\n.light-mode *::selection {\n  background-color: color-mix(in srgb, var(--scalar-color-blue), transparent 70%);\n}\n.dark-mode *::selection {\n  background-color: color-mix(in srgb, var(--scalar-color-blue), transparent 50%);\n}\n";

// node_modules/.pnpm/@scalar+themes@0.13.3/node_modules/@scalar/themes/dist/presets/bluePlanet.css.js
var bluePlanetTheme = "/* basic theme */\n:root {\n  --scalar-text-decoration: underline;\n  --scalar-text-decoration-hover: underline;\n}\n.light-mode {\n  --scalar-background-1: #f0f2f5;\n  --scalar-background-2: #eaecf0;\n  --scalar-background-3: #e0e2e6;\n  --scalar-border-color: rgb(213 213 213);\n\n  --scalar-color-1: rgb(9, 9, 11);\n  --scalar-color-2: rgb(113, 113, 122);\n  --scalar-color-3: rgba(25, 25, 28, 0.5);\n\n  --scalar-color-accent: var(--scalar-color-1);\n  --scalar-background-accent: #8ab4f81f;\n}\n.light-mode .scalar-card.dark-mode,\n.dark-mode {\n  --scalar-background-1: #000e23;\n  --scalar-background-2: #01132e;\n  --scalar-background-3: #03193b;\n  --scalar-border-color: #2e394c;\n\n  --scalar-color-1: #fafafa;\n  --scalar-color-2: rgb(161, 161, 170);\n  --scalar-color-3: rgba(255, 255, 255, 0.533);\n\n  --scalar-color-accent: var(--scalar-color-1);\n  --scalar-background-accent: #8ab4f81f;\n\n  --scalar-code-language-color-supersede: var(--scalar-color-1);\n}\n/* Document Sidebar */\n.light-mode .t-doc__sidebar,\n.dark-mode .t-doc__sidebar {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n\n  --scalar-sidebar-item-hover-background: var(--scalar-background-2);\n  --scalar-sidebar-item-hover-color: currentColor;\n\n  --scalar-sidebar-item-active-background: var(--scalar-background-3);\n  --scalar-sidebar-color-active: var(--scalar-color-accent);\n\n  --scalar-sidebar-search-background: rgba(255, 255, 255, 0.1);\n  --scalar-sidebar-search-border-color: var(--scalar-border-color);\n  --scalar-sidebar-search-color: var(--scalar-color-3);\n  z-index: 1;\n}\n.light-mode .t-doc__sidebar {\n  --scalar-sidebar-search-background: white;\n}\n/* advanced */\n.light-mode {\n  --scalar-color-green: #069061;\n  --scalar-color-red: #ef0006;\n  --scalar-color-yellow: #edbe20;\n  --scalar-color-blue: #0082d0;\n  --scalar-color-orange: #fb892c;\n  --scalar-color-purple: #5203d1;\n\n  --scalar-button-1: rgba(0, 0, 0, 1);\n  --scalar-button-1-hover: rgba(0, 0, 0, 0.8);\n  --scalar-button-1-color: rgba(255, 255, 255, 0.9);\n}\n.dark-mode {\n  --scalar-color-green: rgba(69, 255, 165, 0.823);\n  --scalar-color-red: #ff8589;\n  --scalar-color-yellow: #ffcc4d;\n  --scalar-color-blue: #6bc1fe;\n  --scalar-color-orange: #f98943;\n  --scalar-color-purple: #b191f9;\n\n  --scalar-button-1: rgba(255, 255, 255, 1);\n  --scalar-button-1-hover: rgba(255, 255, 255, 0.9);\n  --scalar-button-1-color: black;\n}\n/* Custom theme */\n/* Document header */\n@keyframes headerbackground {\n  from {\n    background: transparent;\n    backdrop-filter: none;\n  }\n  to {\n    background: var(--scalar-header-background-1);\n    backdrop-filter: blur(12px);\n  }\n}\n\n.light-mode .t-doc__header,\n.dark-mode .t-doc__header {\n  animation: headerbackground forwards;\n  animation-timeline: scroll();\n  animation-range: 0px 200px;\n}\n\n/* Document Layout */\n.dark-mode .t-doc .layout-content {\n  background: transparent;\n}\n\n.dark-mode h2.t-editor__heading,\n.dark-mode .t-editor__page-title h1,\n.dark-mode h1.section-header:not(::selection),\n.dark-mode .markdown h1,\n.dark-mode .markdown h2,\n.dark-mode .markdown h3,\n.dark-mode .markdown h4,\n.dark-mode .markdown h5,\n.dark-mode .markdown h6 {\n  -webkit-text-fill-color: transparent;\n  background-image: linear-gradient(to right bottom, rgb(255, 255, 255) 30%, rgba(255, 255, 255, 0.38));\n  -webkit-background-clip: text;\n  background-clip: text;\n}\n/* Hero Section Flare */\n.section-flare-item:nth-of-type(1) {\n  --c1: #ffffff;\n  --c2: #babfd8;\n  --c3: #2e8bb2;\n  --c4: #1a8593;\n  --c5: #0a143e;\n  --c6: #0a0f52;\n  --c7: #2341b8;\n\n  --solid: var(--c1), var(--c2), var(--c3), var(--c4), var(--c5), var(--c6), var(--c7);\n  --solid-wrap: var(--solid), var(--c1);\n  --trans:\n    var(--c1), transparent, var(--c2), transparent, var(--c3),\n    transparent, var(--c4), transparent, var(--c5), transparent, var(--c6),\n    transparent, var(--c7);\n  --trans-wrap: var(--trans), transparent, var(--c1);\n\n  background: radial-gradient(circle, var(--trans)), conic-gradient(from 180deg, var(--trans-wrap)),\n    radial-gradient(circle, var(--trans)), conic-gradient(var(--solid-wrap));\n  width: 70vw;\n  height: 700px;\n  border-radius: 50%;\n  filter: blur(100px);\n  z-index: 0;\n  right: 0;\n  position: absolute;\n  transform: rotate(-45deg);\n  top: -300px;\n  opacity: 0.3;\n}\n.section-flare-item:nth-of-type(3) {\n  --star-color: #6b9acc;\n  --star-color2: #446b8d;\n  --star-color3: #3e5879;\n  background-image: radial-gradient(2px 2px at 20px 30px, var(--star-color2), rgba(0, 0, 0, 0)),\n    radial-gradient(2px 2px at 40px 70px, var(--star-color), rgba(0, 0, 0, 0)),\n    radial-gradient(2px 2px at 50px 160px, var(--star-color3), rgba(0, 0, 0, 0)),\n    radial-gradient(2px 2px at 90px 40px, var(--star-color), rgba(0, 0, 0, 0)),\n    radial-gradient(2px 2px at 130px 80px, var(--star-color), rgba(0, 0, 0, 0)),\n    radial-gradient(2px 2px at 160px 120px, var(--star-color3), rgba(0, 0, 0, 0));\n  background-repeat: repeat;\n  background-size: 200px 200px;\n  width: 100%;\n  height: 100%;\n  mask-image: radial-gradient(ellipse at 100% 0%, black 40%, transparent 70%);\n}\n.section-flare {\n  top: -150px !important;\n  height: 100vh;\n  background: linear-gradient(#000, var(--scalar-background-1));\n  width: 100vw;\n  overflow-x: hidden;\n}\n.light-mode .section-flare {\n  display: none;\n}\n.light-mode .scalar-card {\n  --scalar-background-1: #fff;\n  --scalar-background-2: #fff;\n  --scalar-background-3: #fff;\n}\n\n*::selection {\n  background-color: color-mix(in srgb, var(--scalar-color-blue), transparent 60%);\n}\n\n@media (max-width: 1000px) {\n  .light-mode .t-doc__sidebar,\n  .dark-mode .t-doc__sidebar {\n    --scalar-sidebar-background-1: var(--scalar-background-1);\n  }\n  .light-mode .t-doc__header,\n  .dark-mode .t-doc__header {\n    animation: none;\n    background: var(--scalar-header-background-1);\n    backdrop-filter: blur(12px);\n  }\n}\n";

// node_modules/.pnpm/@scalar+themes@0.13.3/node_modules/@scalar/themes/dist/presets/deepSpace.css.js
var deepSpaceTheme = '/* basic theme */\n:root {\n  --scalar-text-decoration: underline;\n  --scalar-text-decoration-hover: underline;\n}\n.light-mode {\n  --scalar-color-1: rgb(9, 9, 11);\n  --scalar-color-2: rgb(113, 113, 122);\n  --scalar-color-3: rgba(25, 25, 28, 0.5);\n  --scalar-color-accent: var(--scalar-color-1);\n\n  --scalar-background-1: #fff;\n  --scalar-background-2: #f4f4f5;\n  --scalar-background-3: #e3e3e6;\n  --scalar-background-accent: #8ab4f81f;\n\n  --scalar-border-color: rgb(228, 228, 231);\n  --scalar-code-language-color-supersede: var(--scalar-color-1);\n}\n.dark-mode {\n  --scalar-color-1: #fafafa;\n  --scalar-color-2: rgb(161, 161, 170);\n  --scalar-color-3: rgba(255, 255, 255, 0.533);\n  --scalar-color-accent: var(--scalar-color-1);\n\n  --scalar-background-1: #09090b;\n  --scalar-background-2: #18181b;\n  --scalar-background-3: #2c2c30;\n  --scalar-background-accent: #8ab4f81f;\n\n  --scalar-border-color: rgba(255, 255, 255, 0.16);\n  --scalar-code-language-color-supersede: var(--scalar-color-1);\n}\n\n/* Document Sidebar */\n.light-mode .t-doc__sidebar,\n.dark-mode .t-doc__sidebar {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n\n  --scalar-sidebar-item-hover-color: currentColor;\n  --scalar-sidebar-item-hover-background: var(--scalar-background-2);\n\n  --scalar-sidebar-item-active-background: var(--scalar-background-3);\n  --scalar-sidebar-color-active: var(--scalar-color-accent);\n\n  --scalar-sidebar-search-background: transparent;\n  --scalar-sidebar-search-border-color: var(--scalar-border-color);\n  --scalar-sidebar-search-color: var(--scalar-color-3);\n}\n.light-mode .t-doc__sidebar {\n  --scalar-sidebar-item-active-background: var(--scalar-background-2);\n}\n/* advanced */\n.light-mode {\n  --scalar-color-green: #069061;\n  --scalar-color-red: #ef0006;\n  --scalar-color-yellow: #edbe20;\n  --scalar-color-blue: #0082d0;\n  --scalar-color-orange: #fb892c;\n  --scalar-color-purple: #5203d1;\n\n  --scalar-button-1: rgba(0, 0, 0, 1);\n  --scalar-button-1-hover: rgba(0, 0, 0, 0.8);\n  --scalar-button-1-color: rgba(255, 255, 255, 0.9);\n}\n.dark-mode {\n  --scalar-color-green: rgba(69, 255, 165, 0.823);\n  --scalar-color-red: #ff8589;\n  --scalar-color-yellow: #ffcc4d;\n  --scalar-color-blue: #6bc1fe;\n  --scalar-color-orange: #f98943;\n  --scalar-color-purple: #b191f9;\n\n  --scalar-button-1: rgba(255, 255, 255, 1);\n  --scalar-button-1-hover: rgba(255, 255, 255, 0.9);\n  --scalar-button-1-color: black;\n}\n/* Custom theme */\n.dark-mode h2.t-editor__heading,\n.dark-mode .t-editor__page-title h1,\n.dark-mode h1.section-header:not(::selection),\n.dark-mode .markdown h1,\n.dark-mode .markdown h2,\n.dark-mode .markdown h3,\n.dark-mode .markdown h4,\n.dark-mode .markdown h5,\n.dark-mode .markdown h6 {\n  -webkit-text-fill-color: transparent;\n  background-image: linear-gradient(to right bottom, rgb(255, 255, 255) 30%, rgba(255, 255, 255, 0.38));\n  -webkit-background-clip: text;\n  background-clip: text;\n}\n.examples .scalar-card-footer {\n  --scalar-background-3: transparent;\n  padding-top: 0;\n}\n/* Hero section flare */\n.section-flare {\n  width: 100vw;\n  height: 550px;\n  position: absolute;\n}\n.section-flare-item:nth-of-type(1) {\n  position: absolute;\n  width: 100vw;\n  height: 550px;\n  --stripesDark: repeating-linear-gradient(100deg, #000 0%, #000 7%, transparent 10%, transparent 12%, #000 16%);\n  --rainbow: repeating-linear-gradient(100deg, #fff 10%, #fff 16%, #fff 22%, #fff 30%);\n  background-image: var(--stripesDark), var(--rainbow);\n  background-size: 300%, 200%;\n  background-position: 50% 50%, 50% 50%;\n  filter: invert(100%);\n  -webkit-mask-image: radial-gradient(ellipse at 100% 0%, black 40%, transparent 70%);\n  mask-image: radial-gradient(ellipse at 100% 0%, black 40%, transparent 70%);\n  pointer-events: none;\n  opacity: 0.07;\n}\n.dark-mode .section-flare-item:nth-of-type(1) {\n  background-image: var(--stripesDark), var(--rainbow);\n  filter: opacity(50%) saturate(200%);\n  opacity: 0.25;\n  height: 350px;\n}\n.section-flare-item:nth-of-type(1):after {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-image: var(--stripesDark), var(--rainbow);\n  background-size: 200%, 100%;\n  background-attachment: fixed;\n  mix-blend-mode: difference;\n}\n.dark-mode .section-flare:after {\n  background-image: var(--stripesDark), var(--rainbow);\n}\n.section-flare-item:nth-of-type(2) {\n  --star-color: #fff;\n  --star-color2: #fff;\n  --star-color3: #fff;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background-image: radial-gradient(2px 2px at 20px 30px, var(--star-color2), rgba(0, 0, 0, 0)),\n    radial-gradient(2px 2px at 40px 70px, var(--star-color), rgba(0, 0, 0, 0)),\n    radial-gradient(2px 2px at 50px 160px, var(--star-color3), rgba(0, 0, 0, 0)),\n    radial-gradient(2px 2px at 90px 40px, var(--star-color), rgba(0, 0, 0, 0)),\n    radial-gradient(2px 2px at 130px 80px, var(--star-color), rgba(0, 0, 0, 0)),\n    radial-gradient(2px 2px at 160px 120px, var(--star-color3), rgba(0, 0, 0, 0));\n  background-repeat: repeat;\n  background-size: 200px 200px;\n  mask-image: radial-gradient(ellipse at 100% 0%, black 40%, transparent 70%);\n  opacity: 0.2;\n}\n.light-mode *::selection {\n  background-color: color-mix(in srgb, var(--scalar-color-blue), transparent 70%);\n}\n.dark-mode *::selection {\n  background-color: color-mix(in srgb, var(--scalar-color-blue), transparent 50%);\n}\n\n/* document header */\n.light-mode .t-doc__header,\n.dark-mode .t-doc__header {\n  animation: headerbackground forwards;\n  animation-timeline: scroll();\n  animation-range: 0px 200px;\n}\n@keyframes headerbackground {\n  from {\n    background: transparent;\n    backdrop-filter: none;\n  }\n  to {\n    background: var(--scalar-header-background-1);\n    backdrop-filter: blur(12px);\n  }\n}\n/* remove flare on safari to prevent dropped frames on scroll */\n@supports (-webkit-hyphens: none) {\n  .section-flare {\n    display: none;\n  }\n}\n\n/* document background */\n.light-mode .t-doc .layout-content,\n.dark-mode .t-doc .layout-content {\n  background: transparent;\n}\n';

// node_modules/.pnpm/@scalar+themes@0.13.3/node_modules/@scalar/themes/dist/presets/default.css.js
var defaultTheme = "/* basic theme */\n:root {\n  --scalar-text-decoration: underline;\n  --scalar-text-decoration-hover: underline;\n}\n.light-mode {\n  --scalar-background-1: #fff;\n  --scalar-background-2: #f6f6f6;\n  --scalar-background-3: #e7e7e7;\n  --scalar-background-accent: #8ab4f81f;\n\n  --scalar-color-1: #2a2f45;\n  --scalar-color-2: #757575;\n  --scalar-color-3: #8e8e8e;\n\n  --scalar-color-accent: var(--scalar-color-1);\n  --scalar-border-color: #dfdfdf;\n}\n.dark-mode {\n  --scalar-background-1: #0f0f0f;\n  --scalar-background-2: #1a1a1a;\n  --scalar-background-3: #272727;\n\n  --scalar-color-1: #e7e7e7;\n  --scalar-color-2: #a4a4a4;\n  --scalar-color-3: #797979;\n\n  --scalar-color-accent: var(--scalar-color-1);\n  --scalar-background-accent: #3ea6ff1f;\n\n  --scalar-border-color: #2d2d2d;\n}\n/* Document Sidebar */\n.light-mode .t-doc__sidebar,\n.dark-mode .t-doc__sidebar {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n\n  --scalar-sidebar-item-hover-background: var(--scalar-background-2);\n  --scalar-sidebar-item-hover-color: currentColor;\n\n  --scalar-sidebar-item-active-background: var(--scalar-background-2);\n  --scalar-sidebar-color-active: var(--scalar-color-1);\n\n  --scalar-sidebar-indent-border: var(--scalar-sidebar-border-color);\n  --scalar-sidebar-indent-border-hover: var(--scalar-sidebar-border-color);\n  --scalar-sidebar-indent-border-active: var(--scalar-sidebar-border-color);\n\n  --scalar-sidebar-search-background: transparent;\n  --scalar-sidebar-search-color: var(--scalar-color-3);\n  --scalar-sidebar-search-border-color: var(--scalar-border-color);\n}\n/* advanced */\n.light-mode {\n  --scalar-color-green: #069061;\n  --scalar-color-red: #ef0006;\n  --scalar-color-yellow: #edbe20;\n  --scalar-color-blue: #0082d0;\n  --scalar-color-orange: #fb892c;\n  --scalar-color-purple: #5203d1;\n\n  --scalar-button-1: rgba(0, 0, 0, 1);\n  --scalar-button-1-hover: rgba(0, 0, 0, 0.8);\n  --scalar-button-1-color: rgba(255, 255, 255, 0.9);\n\n  --scalar-tooltip-background: color-mix(in srgb, #1a1a1a, transparent 10%);\n  --scalar-tooltip-color: color-mix(in srgb, #fff, transparent 15%);\n\n  --scalar-color-alert: color-mix(in srgb, var(--scalar-color-orange), var(--scalar-color-1) 20%);\n  --scalar-color-danger: color-mix(in srgb, var(--scalar-color-red), var(--scalar-color-1) 20%);\n\n  --scalar-background-alert: color-mix(in srgb, var(--scalar-color-orange), var(--scalar-background-1) 95%);\n  --scalar-background-danger: color-mix(in srgb, var(--scalar-color-red), var(--scalar-background-1) 95%);\n}\n.dark-mode {\n  --scalar-color-green: #00b648;\n  --scalar-color-red: #dc1b19;\n  --scalar-color-yellow: #ffc90d;\n  --scalar-color-blue: #4eb3ec;\n  --scalar-color-orange: #ff8d4d;\n  --scalar-color-purple: #b191f9;\n\n  --scalar-button-1: rgba(255, 255, 255, 1);\n  --scalar-button-1-hover: rgba(255, 255, 255, 0.9);\n  --scalar-button-1-color: black;\n\n  --scalar-tooltip-background: color-mix(in srgb, var(--scalar-background-1), #fff 10%);\n  --scalar-tooltip-color: color-mix(in srgb, #fff, transparent 5%);\n\n  --scalar-color-danger: color-mix(in srgb, var(--scalar-color-red), var(--scalar-background-1) 20%);\n\n  --scalar-background-alert: color-mix(in srgb, var(--scalar-color-orange), var(--scalar-background-1) 95%);\n  --scalar-background-danger: color-mix(in srgb, var(--scalar-color-red), var(--scalar-background-1) 95%);\n}\n@supports (color: color(display-p3 1 1 1)) {\n  .light-mode {\n    --scalar-color-accent: var(--scalar-color-1);\n    --scalar-color-green: color(display-p3 0.023529 0.564706 0.380392 / 1.0);\n    --scalar-color-red: color(display-p3 0.937255 0.0 0.023529 / 1.0);\n    --scalar-color-yellow: color(display-p3 0.929412 0.745098 0.12549 / 1.0);\n    --scalar-color-blue: color(display-p3 0.0 0.509804 0.815686 / 1.0);\n    --scalar-color-orange: color(display-p3 0.984314 0.537255 0.172549 / 1.0);\n    --scalar-color-purple: color(display-p3 0.321569 0.011765 0.819608 / 1.0);\n  }\n  .dark-mode {\n    --scalar-color-accent: var(--scalar-color-1);\n    --scalar-color-green: color(display-p3 0.0 0.713725 0.282353 / 1.0);\n    --scalar-color-red: color(display-p3 0.862745 0.105882 0.098039 / 1.0);\n    --scalar-color-yellow: color(display-p3 1.0 0.788235 0.05098 / 1.0);\n    --scalar-color-blue: color(display-p3 0.305882 0.701961 0.92549 / 1.0);\n    --scalar-color-orange: color(display-p3 1.0 0.552941 0.301961 / 1.0);\n    --scalar-color-purple: color(display-p3 0.694118 0.568627 0.976471 / 1.0);\n  }\n}\n";

// node_modules/.pnpm/@scalar+themes@0.13.3/node_modules/@scalar/themes/dist/presets/elysiajs.css.js
var elysiajsTheme = '.light-mode {\n  --scalar-color-1: #2a2f45;\n  --scalar-color-2: #757575;\n  --scalar-color-3: #8e8e8e;\n  --scalar-color-accent: #f06292;\n\n  --scalar-background-1: #fff;\n  --scalar-background-2: #f6f6f6;\n  --scalar-background-3: #e7e7e7;\n\n  --scalar-border-color: rgba(0, 0, 0, 0.1);\n}\n.dark-mode {\n  --scalar-color-1: rgba(255, 255, 255, 0.9);\n  --scalar-color-2: rgba(156, 163, 175, 1);\n  --scalar-color-3: rgba(255, 255, 255, 0.44);\n  --scalar-color-accent: #f06292;\n\n  --scalar-background-1: #111728;\n  --scalar-background-2: #1e293b;\n  --scalar-background-3: #334155;\n  --scalar-background-accent: #f062921f;\n\n  --scalar-border-color: rgba(255, 255, 255, 0.1);\n}\n\n/* Document Sidebar */\n.light-mode .t-doc__sidebar,\n.dark-mode .t-doc__sidebar {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n\n  --scalar-sidebar-item-hover-background: var(--scalar-background-2);\n  --scalar-sidebar-item-hover-color: currentColor;\n\n  --scalar-sidebar-item-active-background: #f062921f;\n  --scalar-sidebar-color-active: var(--scalar-color-accent);\n\n  --scalar-sidebar-search-background: transparent;\n  --scalar-sidebar-search-color: var(--scalar-color-3);\n  --scalar-sidebar-search-border-color: var(--scalar-border-color);\n}\n\n/* advanced */\n.light-mode {\n  --scalar-button-1: rgb(49 53 56);\n  --scalar-button-1-color: #fff;\n  --scalar-button-1-hover: rgb(28 31 33);\n\n  --scalar-color-green: #069061;\n  --scalar-color-red: #ef0006;\n  --scalar-color-yellow: #edbe20;\n  --scalar-color-blue: #0082d0;\n  --scalar-color-orange: #fb892c;\n  --scalar-color-purple: #5203d1;\n\n  --scalar-scrollbar-color: rgba(0, 0, 0, 0.18);\n  --scalar-scrollbar-color-active: rgba(0, 0, 0, 0.36);\n}\n.dark-mode {\n  --scalar-button-1: #f6f6f6;\n  --scalar-button-1-color: #000;\n  --scalar-button-1-hover: #e7e7e7;\n\n  --scalar-color-green: #a3ffa9;\n  --scalar-color-red: #ffa3a3;\n  --scalar-color-yellow: #fffca3;\n  --scalar-color-blue: #a5d6ff;\n  --scalar-color-orange: #e2ae83;\n  --scalar-color-purple: #d2a8ff;\n\n  --scalar-scrollbar-color: rgba(255, 255, 255, 0.24);\n  --scalar-scrollbar-color-active: rgba(255, 255, 255, 0.48);\n}\n.section-flare {\n  width: 100%;\n  height: 400px;\n  position: absolute;\n}\n.section-flare-item:first-of-type:before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  --stripes: repeating-linear-gradient(100deg, #fff 0%, #fff 0%, transparent 2%, transparent 12%, #fff 17%);\n  --stripesDark: repeating-linear-gradient(100deg, #000 0%, #000 0%, transparent 10%, transparent 12%, #000 17%);\n  --rainbow: repeating-linear-gradient(100deg, #60a5fa 10%, #e879f9 16%, #5eead4 22%, #60a5fa 30%);\n  contain: strict;\n  contain-intrinsic-size: 100vw 40vh;\n  background-image: var(--stripesDark), var(--rainbow);\n  background-size: 300%, 200%;\n  background-position: 50% 50%, 50% 50%;\n  filter: opacity(20%) saturate(200%);\n  -webkit-mask-image: radial-gradient(ellipse at 100% 0%, black 40%, transparent 70%);\n  mask-image: radial-gradient(ellipse at 100% 0%, black 40%, transparent 70%);\n  pointer-events: none;\n}\n.section-flare-item:first-of-type:after {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-image: var(--stripes), var(--rainbow);\n  background-size: 200%, 100%;\n  background-attachment: fixed;\n  mix-blend-mode: difference;\n  background-image: var(--stripesDark), var(--rainbow);\n  pointer-events: none;\n}\n.light-mode .section-flare-item:first-of-type:after,\n.light-mode .section-flare-item:first-of-type:before {\n  background-image: var(--stripes), var(--rainbow);\n  filter: opacity(4%) saturate(200%);\n}\n';

// node_modules/.pnpm/@scalar+themes@0.13.3/node_modules/@scalar/themes/dist/presets/fastify.css.js
var fastifyTheme = ".light-mode {\n  color-scheme: light;\n  --scalar-color-1: #1c1e21;\n  --scalar-color-2: #757575;\n  --scalar-color-3: #8e8e8e;\n  --scalar-color-disabled: #b4b1b1;\n  --scalar-color-ghost: #a7a7a7;\n  --scalar-color-accent: #2f8555;\n  --scalar-background-1: #fff;\n  --scalar-background-2: #f5f5f5;\n  --scalar-background-3: #ededed;\n  --scalar-background-4: rgba(0, 0, 0, 0.06);\n  --scalar-background-accent: #2f85551f;\n\n  --scalar-border-color: rgba(0, 0, 0, 0.1);\n  --scalar-scrollbar-color: rgba(0, 0, 0, 0.18);\n  --scalar-scrollbar-color-active: rgba(0, 0, 0, 0.36);\n  --scalar-lifted-brightness: 1;\n  --scalar-backdrop-brightness: 1;\n\n  --scalar-shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.11);\n  --scalar-shadow-2: rgba(0, 0, 0, 0.08) 0px 13px 20px 0px, rgba(0, 0, 0, 0.08) 0px 3px 8px 0px, #eeeeed 0px 0 0 1px;\n\n  --scalar-button-1: rgb(49 53 56);\n  --scalar-button-1-color: #fff;\n  --scalar-button-1-hover: rgb(28 31 33);\n\n  --scalar-color-green: #007300;\n  --scalar-color-red: #af272b;\n  --scalar-color-yellow: #b38200;\n  --scalar-color-blue: #3b8ba5;\n  --scalar-color-orange: #fb892c;\n  --scalar-color-purple: #5203d1;\n}\n\n.dark-mode {\n  color-scheme: dark;\n  --scalar-color-1: rgba(255, 255, 255, 0.9);\n  --scalar-color-2: rgba(255, 255, 255, 0.62);\n  --scalar-color-3: rgba(255, 255, 255, 0.44);\n  --scalar-color-disabled: rgba(255, 255, 255, 0.34);\n  --scalar-color-ghost: rgba(255, 255, 255, 0.26);\n  --scalar-color-accent: #27c2a0;\n  --scalar-background-1: #1b1b1d;\n  --scalar-background-2: #242526;\n  --scalar-background-3: #3b3b3b;\n  --scalar-background-4: rgba(255, 255, 255, 0.06);\n  --scalar-background-accent: #27c2a01f;\n\n  --scalar-border-color: rgba(255, 255, 255, 0.1);\n  --scalar-scrollbar-color: rgba(255, 255, 255, 0.24);\n  --scalar-scrollbar-color-active: rgba(255, 255, 255, 0.48);\n  --scalar-lifted-brightness: 1.45;\n  --scalar-backdrop-brightness: 0.5;\n\n  --scalar-shadow-1: 0 1px 3px 0 rgb(0, 0, 0, 0.1);\n  --scalar-shadow-2: rgba(15, 15, 15, 0.2) 0px 3px 6px, rgba(15, 15, 15, 0.4) 0px 9px 24px, 0 0 0 1px\n    rgba(255, 255, 255, 0.1);\n\n  --scalar-button-1: #f6f6f6;\n  --scalar-button-1-color: #000;\n  --scalar-button-1-hover: #e7e7e7;\n\n  --scalar-color-green: #26b226;\n  --scalar-color-red: #fb565b;\n  --scalar-color-yellow: #ffc426;\n  --scalar-color-blue: #6ecfef;\n  --scalar-color-orange: #ff8d4d;\n  --scalar-color-purple: #b191f9;\n}\n";

// node_modules/.pnpm/@scalar+themes@0.13.3/node_modules/@scalar/themes/dist/presets/kepler.css.js
var keplerTheme = "/* basic theme */\n.light-mode {\n  --scalar-color-1: #2a2f45;\n  --scalar-color-2: #757575;\n  --scalar-color-3: #8e8e8e;\n  --scalar-color-accent: #7070ff;\n\n  --scalar-background-1: #fff;\n  --scalar-background-2: #f6f6f6;\n  --scalar-background-3: #e7e7e7;\n  --scalar-background-accent: #7070ff1f;\n\n  --scalar-border-color: rgba(0, 0, 0, 0.1);\n\n  --scalar-code-language-color-supersede: var(--scalar-color-3);\n}\n.dark-mode {\n  --scalar-color-1: #f7f8f8;\n  --scalar-color-2: rgb(180, 188, 208);\n  --scalar-color-3: #b4bcd099;\n  --scalar-color-accent: #828fff;\n\n  --scalar-background-1: #000212;\n  --scalar-background-2: #0d0f1e;\n  --scalar-background-3: #232533;\n  --scalar-background-accent: #8ab4f81f;\n\n  --scalar-border-color: #313245;\n  --scalar-code-language-color-supersede: var(--scalar-color-3);\n}\n/* Document Sidebar */\n.light-mode .t-doc__sidebar {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-item-hover-color: currentColor;\n  --scalar-sidebar-item-hover-background: var(--scalar-background-2);\n  --scalar-sidebar-item-active-background: var(--scalar-background-accent);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-color-active: var(--scalar-color-accent);\n  --scalar-sidebar-search-background: rgba(0, 0, 0, 0.05);\n  --scalar-sidebar-search-border-color: 1px solid rgba(0, 0, 0, 0.05);\n  --scalar-sidebar-search-color: var(--scalar-color-3);\n  --scalar-background-2: rgba(0, 0, 0, 0.03);\n}\n.dark-mode .t-doc__sidebar {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-item-hover-color: currentColor;\n  --scalar-sidebar-item-hover-background: var(--scalar-background-2);\n  --scalar-sidebar-item-active-background: rgba(255, 255, 255, 0.1);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-color-active: var(--scalar-color-accent);\n  --scalar-sidebar-search-background: rgba(255, 255, 255, 0.1);\n  --scalar-sidebar-search-border-color: 1px solid rgba(255, 255, 255, 0.05);\n  --scalar-sidebar-search-color: var(--scalar-color-3);\n}\n/* advanced */\n.light-mode {\n  --scalar-color-green: #069061;\n  --scalar-color-red: #ef0006;\n  --scalar-color-yellow: #edbe20;\n  --scalar-color-blue: #0082d0;\n  --scalar-color-orange: #fb892c;\n  --scalar-color-purple: #5203d1;\n\n  --scalar-button-1: rgba(0, 0, 0, 1);\n  --scalar-button-1-hover: rgba(0, 0, 0, 0.8);\n  --scalar-button-1-color: rgba(255, 255, 255, 0.9);\n}\n.dark-mode {\n  --scalar-color-green: #00b648;\n  --scalar-color-red: #dc1b19;\n  --scalar-color-yellow: #ffc90d;\n  --scalar-color-blue: #4eb3ec;\n  --scalar-color-orange: #ff8d4d;\n  --scalar-color-purple: #b191f9;\n\n  --scalar-button-1: rgba(255, 255, 255, 1);\n  --scalar-button-1-hover: rgba(255, 255, 255, 0.9);\n  --scalar-button-1-color: black;\n}\n/* Custom Theme */\n.dark-mode h2.t-editor__heading,\n.dark-mode .t-editor__page-title h1,\n.dark-mode h1.section-header:not(::selection),\n.dark-mode .markdown h1,\n.dark-mode .markdown h2,\n.dark-mode .markdown h3,\n.dark-mode .markdown h4,\n.dark-mode .markdown h5,\n.dark-mode .markdown h6 {\n  -webkit-text-fill-color: transparent;\n  background-image: linear-gradient(to right bottom, rgb(255, 255, 255) 30%, rgba(255, 255, 255, 0.38));\n  -webkit-background-clip: text;\n  background-clip: text;\n}\n.sidebar-search {\n  backdrop-filter: blur(12px);\n}\n@keyframes headerbackground {\n  from {\n    background: transparent;\n    backdrop-filter: none;\n  }\n  to {\n    background: var(--scalar-header-background-1);\n    backdrop-filter: blur(12px);\n  }\n}\n.dark-mode .scalar-card {\n  background: rgba(255, 255, 255, 0.05) !important;\n}\n.dark-mode .scalar-card * {\n  --scalar-background-2: transparent !important;\n  --scalar-background-1: transparent !important;\n}\n.light-mode .dark-mode.scalar-card *,\n.light-mode .dark-mode.scalar-card {\n  --scalar-background-1: #0d0f1e !important;\n  --scalar-background-2: #0d0f1e !important;\n  --scalar-background-3: #191b29 !important;\n}\n.light-mode .dark-mode.scalar-card {\n  background: #191b29 !important;\n}\n.badge {\n  box-shadow: 0 0 0 1px var(--scalar-border-color);\n  margin-right: 6px;\n}\n\n.table-row.required-parameter .table-row-item:nth-of-type(2):after {\n  background: transparent;\n  box-shadow: none;\n}\n/* Hero Section Flare */\n.section-flare {\n  width: 100vw;\n  background: radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, 0.3), transparent);\n  height: 100vh;\n}\n.light-mode *::selection {\n  background-color: color-mix(in srgb, var(--scalar-color-accent), transparent 70%);\n}\n.dark-mode *::selection {\n  background-color: color-mix(in srgb, var(--scalar-color-accent), transparent 50%);\n}\n\n/* document layout */\n.light-mode .t-doc .layout-content,\n.dark-mode .t-doc .layout-content {\n  background: transparent;\n}\n";

// node_modules/.pnpm/@scalar+themes@0.13.3/node_modules/@scalar/themes/dist/presets/mars.css.js
var marsTheme = "/* basic theme */\n:root {\n  --scalar-text-decoration: underline;\n  --scalar-text-decoration-hover: underline;\n}\n.light-mode {\n  --scalar-background-1: #f9f6f0;\n  --scalar-background-2: #f2efe8;\n  --scalar-background-3: #e9e7e2;\n  --scalar-border-color: rgba(203, 165, 156, 0.6);\n\n  --scalar-color-1: #c75549;\n  --scalar-color-2: #c75549;\n  --scalar-color-3: #c75549;\n\n  --scalar-color-accent: #c75549;\n  --scalar-background-accent: #dcbfa81f;\n\n  --scalar-code-language-color-supersede: var(--scalar-color-1);\n}\n.dark-mode {\n  --scalar-background-1: #140507;\n  --scalar-background-2: #20090c;\n  --scalar-background-3: #321116;\n  --scalar-border-color: #3c3031;\n\n  --scalar-color-1: rgba(255, 255, 255, 0.9);\n  --scalar-color-2: rgba(255, 255, 255, 0.62);\n  --scalar-color-3: rgba(255, 255, 255, 0.44);\n\n  --scalar-color-accent: rgba(255, 255, 255, 0.9);\n  --scalar-background-accent: #441313;\n\n  --scalar-code-language-color-supersede: var(--scalar-color-1);\n}\n\n/* Document Sidebar */\n.light-mode .t-doc__sidebar,\n.dark-mode .t-doc__sidebar {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n\n  --scalar-sidebar-item-hover-color: currentColor;\n  --scalar-sidebar-item-hover-background: var(--scalar-background-2);\n\n  --scalar-sidebar-item-active-background: var(--scalar-background-3);\n  --scalar-sidebar-color-active: var(--scalar-color-accent);\n\n  --scalar-sidebar-search-background: rgba(255, 255, 255, 0.1);\n  --scalar-sidebar-search-color: var(--scalar-color-3);\n  --scalar-sidebar-search-border-color: var(--scalar-border-color);\n  z-index: 1;\n}\n/* advanced */\n.light-mode {\n  --scalar-color-green: #09533a;\n  --scalar-color-red: #aa181d;\n  --scalar-color-yellow: #ab8d2b;\n  --scalar-color-blue: #19689a;\n  --scalar-color-orange: #b26c34;\n  --scalar-color-purple: #4c2191;\n\n  --scalar-button-1: rgba(0, 0, 0, 1);\n  --scalar-button-1-hover: rgba(0, 0, 0, 0.8);\n  --scalar-button-1-color: rgba(255, 255, 255, 0.9);\n}\n.dark-mode {\n  --scalar-color-green: rgba(69, 255, 165, 0.823);\n  --scalar-color-red: #ff8589;\n  --scalar-color-yellow: #ffcc4d;\n  --scalar-color-blue: #6bc1fe;\n  --scalar-color-orange: #f98943;\n  --scalar-color-purple: #b191f9;\n\n  --scalar-button-1: rgba(255, 255, 255, 1);\n  --scalar-button-1-hover: rgba(255, 255, 255, 0.9);\n  --scalar-button-1-color: black;\n}\n/* Custom Theme */\n.dark-mode h2.t-editor__heading,\n.dark-mode .t-editor__page-title h1,\n.dark-mode h1.section-header:not(::selection),\n.dark-mode .markdown h1,\n.dark-mode .markdown h2,\n.dark-mode .markdown h3,\n.dark-mode .markdown h4,\n.dark-mode .markdown h5,\n.dark-mode .markdown h6 {\n  -webkit-text-fill-color: transparent;\n  background-image: linear-gradient(to right bottom, rgb(255, 255, 255) 30%, rgba(255, 255, 255, 0.38));\n  -webkit-background-clip: text;\n  background-clip: text;\n}\n.light-mode .t-doc__sidebar {\n  --scalar-sidebar-search-background: white;\n}\n.examples .scalar-card-footer {\n  --scalar-background-3: transparent;\n  padding-top: 0;\n}\n/* Hero section flare */\n.section-flare {\n  overflow-x: hidden;\n  height: 100vh;\n  left: initial;\n}\n.section-flare-item:nth-of-type(1) {\n  background: #d25019;\n  position: relative;\n  top: -150px;\n  right: -400px;\n  width: 80vw;\n  height: 500px;\n  margin-top: -150px;\n  border-radius: 50%;\n  filter: blur(100px);\n  z-index: 0;\n}\n.light-mode .section-flare {\n  display: none;\n}\n*::selection {\n  background-color: color-mix(in srgb, var(--scalar-color-red), transparent 75%);\n}\n\n/* document layout */\n.dark-mode .t-doc .layout-content {\n  background: transparent;\n}\n";

// node_modules/.pnpm/@scalar+themes@0.13.3/node_modules/@scalar/themes/dist/presets/moon.css.js
var moonTheme = ".light-mode {\n  color-scheme: light;\n  --scalar-color-1: #000000;\n  --scalar-color-2: #000000;\n  --scalar-color-3: #000000;\n  --scalar-color-accent: #645b0f;\n  --scalar-background-1: #ccc9b3;\n  --scalar-background-2: #c2bfaa;\n  --scalar-background-3: #b8b5a1;\n  --scalar-background-accent: #000000;\n\n  --scalar-border-color: rgba(0, 0, 0, 0.2);\n  --scalar-scrollbar-color: rgba(0, 0, 0, 0.18);\n  --scalar-scrollbar-color-active: rgba(0, 0, 0, 0.36);\n  --scalar-lifted-brightness: 1;\n  --scalar-backdrop-brightness: 1;\n\n  --scalar-shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.11);\n  --scalar-shadow-2: rgba(0, 0, 0, 0.08) 0px 13px 20px 0px, rgba(0, 0, 0, 0.08) 0px 3px 8px 0px,\n    var(--scalar-border-color) 0px 0 0 1px;\n\n  --scalar-button-1: rgb(49 53 56);\n  --scalar-button-1-color: #fff;\n  --scalar-button-1-hover: rgb(28 31 33);\n\n  --scalar-color-red: #b91c1c;\n  --scalar-color-orange: #a16207;\n  --scalar-color-green: #047857;\n  --scalar-color-blue: #1d4ed8;\n  --scalar-color-orange: #c2410c;\n  --scalar-color-purple: #6d28d9;\n}\n\n.dark-mode {\n  color-scheme: dark;\n  --scalar-color-1: #fffef3;\n  --scalar-color-2: #fffef3;\n  --scalar-color-3: #fffef3;\n  --scalar-color-accent: #c3b531;\n  --scalar-background-1: #313332;\n  --scalar-background-2: #393b3a;\n  --scalar-background-3: #414342;\n  --scalar-background-accent: #fffef3;\n\n  --scalar-border-color: #505452;\n  --scalar-scrollbar-color: rgba(255, 255, 255, 0.24);\n  --scalar-scrollbar-color-active: rgba(255, 255, 255, 0.48);\n  --scalar-lifted-brightness: 1.45;\n  --scalar-backdrop-brightness: 0.5;\n\n  --scalar-shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.11);\n  --scalar-shadow-2: rgba(15, 15, 15, 0.2) 0px 3px 6px, rgba(15, 15, 15, 0.4) 0px 9px 24px, 0 0 0 1px\n    rgba(255, 255, 255, 0.1);\n\n  --scalar-button-1: #f6f6f6;\n  --scalar-button-1-color: #000;\n  --scalar-button-1-hover: #e7e7e7;\n\n  --scalar-color-green: #00b648;\n  --scalar-color-red: #dc1b19;\n  --scalar-color-yellow: #ffc90d;\n  --scalar-color-blue: #4eb3ec;\n  --scalar-color-orange: #ff8d4d;\n  --scalar-color-purple: #b191f9;\n}\n\n/* Sidebar */\n.light-mode .t-doc__sidebar,\n.dark-mode .t-doc__sidebar {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n\n  --scalar-sidebar-item-hover-background: var(--scalar-background-2);\n  --scalar-sidebar-item-hover-color: currentColor;\n\n  --scalar-sidebar-item-active-background: var(--scalar-background-3);\n  --scalar-sidebar-color-active: var(--scalar-color-1);\n\n  --scalar-sidebar-search-background: transparent;\n  --scalar-sidebar-search-color: var(--scalar-color-3);\n  --scalar-sidebar-search-border-color: var(--scalar-border-color);\n}\n*::selection {\n  background-color: color-mix(in srgb, var(--scalar-color-accent), transparent 80%);\n}\n";

// node_modules/.pnpm/@scalar+themes@0.13.3/node_modules/@scalar/themes/dist/presets/laserwave.css.js
var laserwaveTheme = "/* basic theme */\n.light-mode {\n  color-scheme: light;\n  --scalar-color-1: #322b3b;\n  --scalar-color-2: #645676;\n  --scalar-color-3: #9789a9;\n  --scalar-color-accent: #40b4c4;\n\n  --scalar-background-1: #fff;\n  --scalar-background-2: #f4f2f7;\n  --scalar-background-3: #cfc7dc;\n  --scalar-background-accent: #f3fafb;\n\n  --scalar-border-color: #e4e0eb;\n}\n.dark-mode {\n  color-scheme: dark;\n  --scalar-color-1: #fff;\n  --scalar-color-2: #b8b6ba;\n  --scalar-color-3: #706c74;\n  --scalar-color-accent: #ed78c2;\n\n  --scalar-background-1: #27212e;\n  --scalar-background-2: #322c39;\n  --scalar-background-3: #4c4059;\n  --scalar-background-accent: #eb64b91f;\n\n  --scalar-border-color: rgba(255, 255, 255, 0.1);\n}\n\n/* Sidebar */\n.light-mode .t-doc__sidebar {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-item-hover-color: currentColor;\n  --scalar-sidebar-item-hover-background: var(--scalar-background-2);\n  --scalar-sidebar-item-active-background: var(--scalar-background-accent);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-color-active: var(--scalar-color-accent);\n  --scalar-sidebar-search-background: var(--scalar-background-2);\n  --scalar-sidebar-search-border-color: var(--scalar-sidebar-border-color);\n  --scalar-sidebar-search--color: var(--scalar-color-3);\n}\n.dark-mode .t-doc__sidebar {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-item-hover-color: currentColor;\n  --scalar-sidebar-item-hover-background: var(--scalar-background-2);\n  --scalar-sidebar-item-active-background: var(--scalar-background-accent);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-color-active: var(--scalar-color-accent);\n  --scalar-sidebar-search-background: var(--scalar-background-2);\n  --scalar-sidebar-search-border-color: #514c56;\n  --scalar-sidebar-search--color: var(--scalar-color-3);\n}\n/* advanced */\n.light-mode {\n  --scalar-button-1: rgb(49 53 56);\n  --scalar-button-1-color: #fff;\n  --scalar-button-1-hover: rgb(28 31 33);\n\n  --scalar-color-green: #74dfc4;\n  --scalar-color-red: #d887f5;\n  --scalar-color-yellow: #ffe261;\n  --scalar-color-blue: #40b4c4;\n  --scalar-color-orange: #ff52bf;\n  --scalar-color-purple: #91889b;\n\n  --scalar-scrollbar-color: rgba(0, 0, 0, 0.18);\n  --scalar-scrollbar-color-active: rgba(0, 0, 0, 0.36);\n}\n.dark-mode {\n  --scalar-button-1: #f6f6f6;\n  --scalar-button-1-color: #27212e;\n  --scalar-button-1-hover: #e7e7e7;\n\n  --scalar-color-green: #74dfc4;\n  --scalar-color-red: #d887f5;\n  --scalar-color-yellow: #ffe261;\n  --scalar-color-blue: #40b4c4;\n  --scalar-color-orange: #ff52bf;\n  --scalar-color-purple: #91889b;\n\n  --scalar-scrollbar-color: rgba(255, 255, 255, 0.24);\n  --scalar-scrollbar-color-active: rgba(255, 255, 255, 0.48);\n}\n/* Radius */\n:root {\n  --scalar-radius: 2px;\n  --scalar-radius-lg: 3px;\n  --scalar-radius-xl: 4px;\n}\n/* P3 color support */\n@supports (color: color(display-p3 1 1 1)) {\n  .light-mode {\n    --scalar-color-accent: color(display-p3 0.25098 0.705882 0.768627 / 1.0);\n    --scalar-color-green: color(display-p3 0.454902 0.87451 0.768627 / 1.0);\n    --scalar-color-red: color(display-p3 0.847059 0.529412 0.960784 / 1.0);\n    --scalar-color-yellow: color(display-p3 1.0 0.886275 0.380392 / 1.0);\n    --scalar-color-blue: color(display-p3 0.25098 0.705882 0.768627 / 1.0);\n    --scalar-color-orange: color(display-p3 1.0 0.321569 0.74902 / 1.0);\n    --scalar-color-purple: color(display-p3 0.568627 0.533333 0.607843 / 1.0);\n  }\n  .dark-mode {\n    --scalar-color-accent: color(display-p3 0.929412 0.470588 0.760784 / 1.0);\n    --scalar-color-green: color(display-p3 0.454902 0.87451 0.768627 / 1.0);\n    --scalar-color-red: color(display-p3 0.847059 0.529412 0.960784 / 1.0);\n    --scalar-color-yellow: color(display-p3 1.0 0.886275 0.380392 / 1.0);\n    --scalar-color-blue: color(display-p3 0.25098 0.705882 0.768627 / 1.0);\n    --scalar-color-orange: color(display-p3 1.0 0.321569 0.74902 / 1.0);\n    --scalar-color-purple: color(display-p3 0.568627 0.533333 0.607843 / 1.0);\n  }\n}\n";

// node_modules/.pnpm/@scalar+themes@0.13.3/node_modules/@scalar/themes/dist/presets/purple.css.js
var purpleTheme = "/* basic theme */\n.light-mode {\n  --scalar-background-1: #fff;\n  --scalar-background-2: #f5f6f8;\n  --scalar-background-3: #eceef1;\n\n  --scalar-color-1: #2a2f45;\n  --scalar-color-2: #757575;\n  --scalar-color-3: #8e8e8e;\n\n  --scalar-color-accent: #5469d4;\n  --scalar-background-accent: #5469d41f;\n\n  --scalar-border-color: rgba(215, 215, 206, 0.68);\n}\n.dark-mode {\n  --scalar-background-1: #15171c;\n  --scalar-background-2: #1c1e24;\n  --scalar-background-3: #22252b;\n\n  --scalar-color-1: #fafafa;\n  --scalar-color-2: #c9ced8;\n  --scalar-color-3: #8c99ad;\n\n  --scalar-color-accent: #5469d4;\n  --scalar-background-accent: #5469d41f;\n\n  --scalar-border-color: #3f4145;\n}\n/* Document Sidebar */\n.light-mode .t-doc__sidebar,\n.dark-mode .t-doc__sidebar {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n\n  --scalar-sidebar-item-hover-color: currentColor;\n  --scalar-sidebar-item-hover-background: var(--scalar-background-3);\n\n  --scalar-sidebar-item-active-background: var(--scalar-background-accent);\n  --scalar-sidebar-color-active: var(--scalar-color-accent);\n\n  --scalar-sidebar-search-background: var(--scalar-background-1);\n  --scalar-sidebar-search-color: var(--scalar-color-3);\n  --scalar-sidebar-search-border-color: var(--scalar-border-color);\n}\n\n/* advanced */\n.light-mode {\n  --scalar-color-green: #17803d;\n  --scalar-color-red: #e10909;\n  --scalar-color-yellow: #edbe20;\n  --scalar-color-blue: #1763a6;\n  --scalar-color-orange: #e25b09;\n  --scalar-color-purple: #5c3993;\n\n  --scalar-button-1: rgba(0, 0, 0, 1);\n  --scalar-button-1-hover: rgba(0, 0, 0, 0.8);\n  --scalar-button-1-color: rgba(255, 255, 255, 0.9);\n}\n.dark-mode {\n  --scalar-color-green: #30a159;\n  --scalar-color-red: #dc1b19;\n  --scalar-color-yellow: #eec644;\n  --scalar-color-blue: #2b7abf;\n  --scalar-color-orange: #f07528;\n  --scalar-color-purple: #7a59b1;\n\n  --scalar-button-1: rgba(255, 255, 255, 1);\n  --scalar-button-1-hover: rgba(255, 255, 255, 0.9);\n  --scalar-button-1-color: black;\n}\n.light-mode *::selection {\n  background-color: color-mix(in srgb, var(--scalar-color-accent), transparent 70%);\n}\n.dark-mode *::selection {\n  background-color: color-mix(in srgb, var(--scalar-color-accent), transparent 50%);\n}\n";

// node_modules/.pnpm/@scalar+themes@0.13.3/node_modules/@scalar/themes/dist/presets/saturn.css.js
var saturnTheme = "/* basic theme */\n.light-mode {\n  --scalar-background-1: #f3f3ee;\n  --scalar-background-2: #e8e8e3;\n  --scalar-background-3: #e4e4df;\n  --scalar-border-color: rgba(215, 215, 206, 0.85);\n\n  --scalar-color-1: #2a2f45;\n  --scalar-color-2: #757575;\n  --scalar-color-3: #8e8e8e;\n\n  --scalar-color-accent: #1763a6;\n  --scalar-background-accent: #1f648e1f;\n}\n.dark-mode {\n  --scalar-background-1: #09090b;\n  --scalar-background-2: #18181b;\n  --scalar-background-3: #2c2c30;\n  --scalar-border-color: rgba(255, 255, 255, 0.17);\n\n  --scalar-color-1: #fafafa;\n  --scalar-color-2: rgb(161, 161, 170);\n  --scalar-color-3: rgba(255, 255, 255, 0.533);\n\n  --scalar-color-accent: #4eb3ec;\n  --scalar-background-accent: #8ab4f81f;\n}\n/* Document Sidebar */\n.light-mode .t-doc__sidebar,\n.dark-mode .t-doc__sidebar {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n\n  --scalar-sidebar-item-hover-background: var(--scalar-background-2);\n  --scalar-sidebar-item-hover-color: currentColor;\n\n  --scalar-sidebar-item-active-background: var(--scalar-background-3);\n  --scalar-sidebar-color-active: var(--scalar-color-1);\n\n  --scalar-sidebar-search-background: var(--scalar-background-1);\n  --scalar-sidebar-search-border-color: var(--scalar-border-color);\n  --scalar-sidebar-search-color: var(--scalar-color-3);\n}\n\n/* advanced */\n.light-mode {\n  --scalar-color-green: #17803d;\n  --scalar-color-red: #e10909;\n  --scalar-color-yellow: #edbe20;\n  --scalar-color-blue: #1763a6;\n  --scalar-color-orange: #e25b09;\n  --scalar-color-purple: #5c3993;\n\n  --scalar-button-1: rgba(0, 0, 0, 1);\n  --scalar-button-1-hover: rgba(0, 0, 0, 0.8);\n  --scalar-button-1-color: rgba(255, 255, 255, 0.9);\n}\n.dark-mode {\n  --scalar-color-green: #30a159;\n  --scalar-color-red: #dc1b19;\n  --scalar-color-yellow: #eec644;\n  --scalar-color-blue: #2b7abf;\n  --scalar-color-orange: #f07528;\n  --scalar-color-purple: #7a59b1;\n\n  --scalar-button-1: rgba(255, 255, 255, 1);\n  --scalar-button-1-hover: rgba(255, 255, 255, 0.9);\n  --scalar-button-1-color: black;\n}\n.dark-mode h2.t-editor__heading,\n.dark-mode .t-editor__page-title h1,\n.dark-mode h1.section-header:not(::selection),\n.dark-mode .markdown h1,\n.dark-mode .markdown h2,\n.dark-mode .markdown h3,\n.dark-mode .markdown h4,\n.dark-mode .markdown h5,\n.dark-mode .markdown h6 {\n  -webkit-text-fill-color: transparent;\n  background-image: linear-gradient(to right bottom, rgb(255, 255, 255) 30%, rgba(255, 255, 255, 0.38));\n  -webkit-background-clip: text;\n  background-clip: text;\n}\n.light-mode *::selection {\n  background-color: color-mix(in srgb, var(--scalar-color-accent), transparent 70%);\n}\n.dark-mode *::selection {\n  background-color: color-mix(in srgb, var(--scalar-color-accent), transparent 50%);\n}\n";

// node_modules/.pnpm/@scalar+themes@0.13.3/node_modules/@scalar/themes/dist/presets/solarized.css.js
var solarizedTheme = ".light-mode {\n  color-scheme: light;\n  --scalar-color-1: #584c27;\n  --scalar-color-2: #616161;\n  --scalar-color-3: #a89f84;\n  --scalar-color-accent: #b58900;\n  --scalar-background-1: #fdf6e3;\n  --scalar-background-2: #eee8d5;\n  --scalar-background-3: #ddd6c1;\n  --scalar-background-accent: #b589001f;\n\n  --scalar-border-color: #ded8c8;\n  --scalar-scrollbar-color: rgba(0, 0, 0, 0.18);\n  --scalar-scrollbar-color-active: rgba(0, 0, 0, 0.36);\n  --scalar-lifted-brightness: 1;\n  --scalar-backdrop-brightness: 1;\n\n  --scalar-shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.11);\n  --scalar-shadow-2: rgba(0, 0, 0, 0.08) 0px 13px 20px 0px, rgba(0, 0, 0, 0.08) 0px 3px 8px 0px, #eeeeed 0px 0 0 1px;\n\n  --scalar-button-1: rgb(49 53 56);\n  --scalar-button-1-color: #fff;\n  --scalar-button-1-hover: rgb(28 31 33);\n\n  --scalar-color-red: #b91c1c;\n  --scalar-color-orange: #a16207;\n  --scalar-color-green: #047857;\n  --scalar-color-blue: #1d4ed8;\n  --scalar-color-orange: #c2410c;\n  --scalar-color-purple: #6d28d9;\n}\n\n.dark-mode {\n  color-scheme: dark;\n  --scalar-color-1: #fff;\n  --scalar-color-2: #cccccc;\n  --scalar-color-3: #6d8890;\n  --scalar-color-accent: #007acc;\n  --scalar-background-1: #00212b;\n  --scalar-background-2: #012b36;\n  --scalar-background-3: #004052;\n  --scalar-background-accent: #015a6f;\n\n  --scalar-border-color: #2f4851;\n  --scalar-scrollbar-color: rgba(255, 255, 255, 0.24);\n  --scalar-scrollbar-color-active: rgba(255, 255, 255, 0.48);\n  --scalar-lifted-brightness: 1.45;\n  --scalar-backdrop-brightness: 0.5;\n\n  --scalar-shadow-1: 0 1px 3px 0 rgb(0, 0, 0, 0.1);\n  --scalar-shadow-2: rgba(15, 15, 15, 0.2) 0px 3px 6px, rgba(15, 15, 15, 0.4) 0px 9px 24px, 0 0 0 1px\n    rgba(255, 255, 255, 0.1);\n\n  --scalar-button-1: #f6f6f6;\n  --scalar-button-1-color: #000;\n  --scalar-button-1-hover: #e7e7e7;\n\n  --scalar-color-green: #00b648;\n  --scalar-color-red: #dc1b19;\n  --scalar-color-yellow: #ffc90d;\n  --scalar-color-blue: #4eb3ec;\n  --scalar-color-orange: #ff8d4d;\n  --scalar-color-purple: #b191f9;\n}\n\n/* Sidebar */\n.light-mode .t-doc__sidebar {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-item-hover-color: currentColor;\n  --scalar-sidebar-item-hover-background: var(--scalar-background-2);\n  --scalar-sidebar-item-active-background: var(--scalar-background-accent);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-color-active: var(--scalar-color-accent);\n  --scalar-sidebar-search-background: var(--scalar-background-2);\n  --scalar-sidebar-search-border-color: var(--scalar-sidebar-search-background);\n  --scalar-sidebar-search--color: var(--scalar-color-3);\n}\n\n.dark-mode .sidebar {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-item-hover-color: currentColor;\n  --scalar-sidebar-item-hover-background: var(--scalar-background-2);\n  --scalar-sidebar-item-active-background: var(--scalar-background-accent);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-color-active: var(--scalar-sidebar-color-1);\n  --scalar-sidebar-search-background: var(--scalar-background-2);\n  --scalar-sidebar-search-border-color: var(--scalar-sidebar-search-background);\n  --scalar-sidebar-search--color: var(--scalar-color-3);\n}\n*::selection {\n  background-color: color-mix(in srgb, var(--scalar-color-accent), transparent 70%);\n}\n";

// node_modules/.pnpm/@scalar+themes@0.13.3/node_modules/@scalar/themes/dist/utilities/has-obtrusive-scrollbars.js
function hasObtrusiveScrollbars() {
  if (typeof window === "undefined") {
    return false;
  }
  const parent = document.createElement("div");
  parent.setAttribute("style", "width:30px;height:30px;overflow-y:scroll;");
  parent.classList.add("scrollbar-test");
  const child = document.createElement("div");
  child.setAttribute("style", "width:100%;height:40px");
  parent.appendChild(child);
  document.body.appendChild(parent);
  const firstChild = parent.firstChild;
  const scrollbarWidth = 30 - firstChild.clientWidth;
  document.body.removeChild(parent);
  return !!scrollbarWidth;
}

// node_modules/.pnpm/@scalar+themes@0.13.3/node_modules/@scalar/themes/dist/index.js
var themeIds = [
  "alternate",
  "default",
  "moon",
  "purple",
  "solarized",
  "bluePlanet",
  "deepSpace",
  "saturn",
  "kepler",
  "elysiajs",
  "fastify",
  "mars",
  "laserwave",
  "none"
];
var themeLabels = {
  default: "Default",
  alternate: "Alternate",
  moon: "Moon",
  purple: "Purple",
  solarized: "Solarized",
  elysiajs: "Elysia.js",
  fastify: "Fastify",
  bluePlanet: "Blue Planet",
  saturn: "Saturn",
  kepler: "Kepler-11e",
  mars: "Mars",
  deepSpace: "Deep Space",
  laserwave: "Laserwave",
  none: ""
};
var presets = {
  default: {
    uid: "qTQR9jSM8E-LihpyZzPOi",
    name: "Default",
    description: "Default Scalar theme",
    theme: defaultTheme,
    slug: "default"
  },
  alternate: {
    uid: "2skUDSH4S8HYFF9yXysr-",
    name: "Alternate",
    description: "Alternate Scalar theme",
    theme: alternateTheme,
    slug: "alternate"
  },
  moon: {
    uid: "DG9ZUNp5lJhDeX_kPX4Bl",
    name: "Moon",
    description: "Lunar styles",
    theme: moonTheme,
    slug: "moon"
  },
  purple: {
    uid: "pE_1ysxcZ-y2LM1GGNBUv",
    name: "Purple",
    description: "Purple Scalar theme",
    theme: purpleTheme,
    slug: "purple"
  },
  solarized: {
    uid: "BdGVG1vf-4nYl3wJKyj8l",
    name: "Solarized",
    description: "Solarized Scalar theme",
    theme: solarizedTheme,
    slug: "solarized"
  },
  bluePlanet: {
    uid: "X12IfAvl7ue-42V2lW40S",
    name: "Blue Planet",
    description: "Blue Planet Scalar theme",
    theme: bluePlanetTheme,
    slug: "blue-planet"
  },
  deepSpace: {
    uid: "K8b38NWQiicq4-zXGXKdI",
    name: "Deep Space",
    description: "Deep Space Scalar theme",
    theme: deepSpaceTheme,
    slug: "deep-space"
  },
  saturn: {
    uid: "1jyAjmbIZQG-RUU4Ugk9o",
    name: "Saturn",
    description: "Saturn Scalar theme",
    theme: saturnTheme,
    slug: "saturn"
  },
  kepler: {
    uid: "jZ6dnWbtqQ0Hz3s9jLPH0",
    name: "Kepler-11e",
    description: "Kepler-11e Scalar theme",
    theme: keplerTheme,
    slug: "kepler-11e"
  },
  mars: {
    uid: "YY4LQgwiXix55-TmMz9qd",
    name: "Mars",
    description: "Mars Scalar theme",
    theme: marsTheme,
    slug: "mars"
  },
  laserwave: {
    uid: "c5fZEi-K-hP-xXf885dkf",
    name: "Laserwave",
    description: "Laserwave Scalar theme",
    theme: laserwaveTheme,
    slug: "laserwave"
  },
  elysiajs: {
    uid: "nEVZkRmCylPkT0o9YJa7y",
    name: "Elysia.js",
    description: "Elysia.js theme",
    theme: elysiajsTheme,
    slug: "elysiajs"
  },
  fastify: {
    uid: "nTZcdcM2_yHFZFxTQe9Kk",
    name: "Fastify",
    description: "Fastify theme",
    theme: fastifyTheme,
    slug: "fastify"
  }
};
var themePresets = Object.values(presets);
var getThemeStyles = (themeId, opts) => {
  var _a;
  const { fonts = true, layer = "scalar-theme" } = opts ?? {};
  const styles = [
    ((_a = presets[themeId || "default"]) == null ? void 0 : _a.theme) ?? defaultTheme,
    fonts ? defaultFonts : ""
  ].join("");
  if (layer) {
    return `@layer ${layer} {
${styles}}`;
  }
  return styles;
};

// node_modules/.pnpm/@scalar+oas-utils@0.4.6/node_modules/@scalar/oas-utils/dist/entities/hotkeys/hotkeys.js
var HOTKEY_EVENT_NAMES = [
  "addTopNav",
  "closeModal",
  "closeTopNav",
  "createNew",
  "executeRequest",
  "focusAddressBar",
  "focusRequestSearch",
  "jumpToLastTab",
  "jumpToTab",
  "navigateSearchResultsDown",
  "navigateSearchResultsUp",
  "navigateTopNavLeft",
  "navigateTopNavRight",
  "openCommandPalette",
  "selectSearchResult",
  "toggleSidebar"
];
var KEYDOWN_KEYS = [
  "Space",
  "Backspace",
  "Tab",
  "Enter",
  "Escape",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "End",
  "Home",
  "PageDown",
  "PageUp",
  "Delete",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "*",
  "+",
  "-",
  ".",
  "/",
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
  "F12",
  ";",
  "=",
  ",",
  "-",
  ".",
  "/",
  "`",
  "[",
  "\\",
  "]",
  ""
];

// node_modules/.pnpm/@scalar+oas-utils@0.4.6/node_modules/@scalar/oas-utils/dist/entities/workspace/workspace.js
var modifier = z.enum(["Meta", "Control", "Shift", "Alt", "default"]).optional().default("default");
var modifiers = z.array(modifier).optional().default(["default"]);
var hotKeys = z.record(
  z.enum(KEYDOWN_KEYS),
  z.object({
    modifiers: modifiers.optional(),
    event: z.enum(HOTKEY_EVENT_NAMES)
  })
);
var hotKeyConfigSchema = z.object({
  modifiers,
  hotKeys: hotKeys.optional()
}).optional();
var workspaceSchema = z.object({
  uid: nanoidSchema.brand(),
  name: z.string().default("Default Workspace"),
  /** Workspace description */
  description: z.string().default("Basic Scalar Workspace"),
  /** List of all collection uids in a given workspace */
  collections: z.array(z.string().brand()).default([]),
  /** List of all environment uids in a given workspace, TODO: why is this a record? */
  environments: z.record(z.string()).default({}),
  /** Customize hotkeys */
  hotKeyConfig: hotKeyConfigSchema,
  /** Active Environment ID to use for requests  */
  activeEnvironmentId: z.string().optional().default("default"),
  /** List of all cookie uids in a given workspace */
  cookies: z.array(z.string().brand()).default([]),
  /** Workspace level proxy for all requests to be sent through */
  proxyUrl: z.string().optional(),
  /** Workspace level theme, we might move this to user level later */
  themeId: z.enum(themeIds).optional().default("default").catch("default"),
  /** Currently selected snippet client */
  selectedHttpClient: z.object({
    targetKey: z.string(),
    clientKey: z.string()
  }).optional().default({
    targetKey: "shell",
    clientKey: "curl"
  })
});

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/store/workspace.js
function D(o2) {
  const e = reactive({}), r4 = mutationFactory(e, reactive({}), o2 && LS_KEYS.WORKSPACE);
  return {
    workspaces: e,
    workspaceMutators: r4
  };
}
function F2({
  workspaces: o2,
  workspaceMutators: e,
  collectionMutators: r4,
  requestMutators: i2,
  requestExampleMutators: p2
}) {
  return {
    addWorkspace: (a3 = {}) => {
      const { request: t2 } = k(), c2 = requestExampleSchema.parse({
        name: "Example",
        requestUid: t2.uid
      });
      t2.examples.push(c2.uid);
      const s3 = collectionSchema.parse({
        info: {
          title: "Drafts"
        },
        children: [t2.uid],
        requests: [t2.uid]
      }), n4 = workspaceSchema.parse({
        ...a3,
        collections: [s3.uid]
      });
      return p2.add(c2), i2.add(t2), r4.add(s3), e.add(n4), n4;
    },
    deleteWorkspace: (a3) => {
      if (Object.keys(o2).length <= 1) {
        console.warn("The last workspace cannot be deleted.");
        return;
      }
      e.delete(a3);
    }
  };
}

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/store/store.js
var ge = ({
  useLocalStorage: e = true,
  showSidebar: C = true,
  proxyUrl: a3,
  theme: y2,
  hideClientButton: D2 = false,
  _integration: A
}) => {
  const { collections: n4, collectionMutators: c2 } = T(e), { tags: i2, tagMutators: m2 } = L(e), { requests: l, requestMutators: p2 } = Q(e), { requestExamples: u, requestExampleMutators: v2 } = T2(e), { cookies: E, cookieMutators: b } = s2(e), { environments: M, environmentMutators: x } = f(e), { servers: q2, serverMutators: S } = R(e), { securitySchemes: w, securitySchemeMutators: f2 } = v(e), { workspaces: d2, workspaceMutators: o2 } = D(e), t2 = {
    collections: n4,
    collectionMutators: c2,
    tags: i2,
    tagMutators: m2,
    requests: l,
    requestMutators: p2,
    requestExamples: u,
    requestExampleMutators: v2,
    environmentMutators: x,
    serverMutators: S,
    securitySchemeMutators: f2,
    workspaces: d2,
    workspaceMutators: o2
  }, { addTag: k3, deleteTag: T3 } = q(t2), { addRequest: I, deleteRequest: O3, findRequestParents: g2 } = g(t2, k3), { deleteEnvironment: j } = d(t2), { addServer: P2, deleteServer: B } = h(t2), { addCollection: H, deleteCollection: K } = Y(t2), { addRequestExample: Y3, deleteRequestExample: _2 } = _(t2), { addWorkspace: z3, deleteWorkspace: G } = F2(t2), { addSecurityScheme: J, deleteSecurityScheme: N } = k2(t2), { addCollectionEnvironment: h2, removeCollectionEnvironment: F3 } = Y(t2), Q2 = reactive([]), { importSpecFile: U, importSpecFromUrl: V } = O(t2), W2 = ref((e ? localStorage == null ? void 0 : localStorage.getItem("sidebarWidth") : void 0) || "280px"), X = (s3) => {
    W2.value = s3, e && (localStorage == null || localStorage.setItem("sidebarWidth", s3));
  }, Z = W();
  Object.values(d2).forEach(({ uid: s3 }) => {
    a3 && o2.edit(s3, "proxyUrl", a3), y2 && o2.edit(s3, "themeId", y2);
  }), typeof window < "u" && (window.dataDump = () => ({
    collections: toRaw(n4),
    cookies: toRaw(E),
    environments: toRaw(M),
    requestExamples: toRaw(u),
    requests: toRaw(l),
    securitySchemes: toRaw(w),
    servers: toRaw(q2),
    tags: toRaw(i2),
    workspaces: toRaw(d2)
  }));
  const $ = r2();
  return {
    // ---------------------------------------------------------------------------
    // STATE
    workspaces: d2,
    collections: n4,
    tags: i2,
    cookies: E,
    environments: M,
    requestExamples: u,
    requests: l,
    servers: q2,
    securitySchemes: w,
    modalState: Z,
    events: $,
    sidebarWidth: W2,
    setSidebarWidth: X,
    proxyUrl: a3,
    // ---------------------------------------------------------------------------
    // CONFIGURATION "PROPS"
    // TODO: move these to their own store
    hideClientButton: D2,
    showSidebar: C,
    integration: A,
    // ---------------------------------------------------------------------------
    // METHODS
    importSpecFile: U,
    importSpecFromUrl: V,
    cookieMutators: b,
    collectionMutators: {
      ...c2,
      rawAdd: c2.add,
      add: H,
      delete: K,
      addEnvironment: h2,
      removeEnvironment: F3
    },
    environmentMutators: {
      ...x,
      delete: j
    },
    requestMutators: {
      ...p2,
      rawAdd: p2.add,
      add: I,
      delete: O3
    },
    findRequestParents: g2,
    requestExampleMutators: {
      ...v2,
      rawAdd: v2.add,
      add: Y3,
      delete: _2
    },
    requestHistory: Q2,
    securitySchemeMutators: {
      ...f2,
      rawAdd: f2.add,
      add: J,
      delete: N
    },
    serverMutators: {
      ...S,
      rawAdd: S.add,
      add: P2,
      delete: B
    },
    tagMutators: {
      ...m2,
      rawAdd: m2.add,
      add: k3,
      delete: T3
    },
    workspaceMutators: {
      ...o2,
      rawAdd: o2.add,
      add: z3,
      delete: G
    },
    addCollectionEnvironment: h2,
    removeCollectionEnvironment: F3
  };
};
var qe = Symbol();
var je = () => {
  const e = inject(qe);
  if (!e)
    throw new Error("Workspace store not provided");
  return e;
};

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/routes.js
var a2 = ((e) => (e.Request = "request", e.Examples = "examples", e.Cookies = "cookies", e.Collection = "collection", e.Schema = "schema", e.Environment = "environment", e.Servers = "servers", e.Workspace = "workspace", e.Settings = "settings", e))(a2 || {});
var o = "activeWorkspace";
function n2() {
  const e = localStorage.getItem(o);
  return e ? {
    name: "request.root",
    params: {
      workspace: e
    }
  } : {
    name: "workspace.default"
  };
}
var r3 = [
  {
    name: "request.root",
    path: "",
    component: () => import("./RequestRoot.vue-YCXQQBCK.js"),
    redirect: (e) => ({
      name: "request",
      params: { ...e.params, request: "default" }
    }),
    children: [
      {
        name: "request",
        path: "request/:request",
        component: () => import("./Request.vue-5CPTG6QC.js")
      },
      {
        name: "request.examples",
        path: "request/:request/examples/:examples",
        component: () => import("./Request.vue-5CPTG6QC.js")
      },
      {
        name: "collection",
        path: "collection/:collection",
        component: () => import("./Collection.vue-W32CVSCB.js"),
        redirect: () => ({
          name: "collection.overview"
        }),
        children: [
          {
            name: "collection.overview",
            path: "overview",
            component: () => import("./CollectionOverview.vue-JZMVRDR2.js")
          },
          {
            name: "collection.servers",
            path: "servers",
            component: () => import("./CollectionServers.vue-N46HXRVN.js"),
            children: [
              {
                name: "collection.servers.edit",
                path: ":servers",
                component: () => import("./CollectionServers.vue-N46HXRVN.js")
              }
            ]
          },
          {
            name: "collection.environment",
            path: "environment",
            component: () => import("./CollectionEnvironment.vue-EB65FMBA.js")
          },
          {
            name: "collection.authentication",
            path: "authentication",
            component: () => import("./CollectionAuthentication.vue-5WOY5I3E.js")
          },
          {
            name: "collection.cookies",
            path: "cookies",
            component: () => import("./CollectionCookies.vue-JTHFXHL4.js")
          },
          {
            name: "collection.scripts",
            path: "scripts",
            component: () => import("./CollectionScripts.vue-OMY35ODY.js")
          },
          {
            name: "collection.sync",
            path: "sync",
            component: () => import("./CollectionSync.vue-5NEKX7BN.js")
          },
          {
            name: "collection.settings",
            path: "settings",
            component: () => import("./CollectionSettings.vue-S2ADYHIT.js")
          }
        ]
      }
    ]
  }
];
var c = [
  {
    name: "root",
    path: "/",
    redirect: n2
  },
  {
    name: "workspace.default",
    path: "/workspace",
    redirect: {
      name: "workspace",
      params: {
        workspace: "default"
      }
    }
  },
  {
    name: "workspace",
    path: "/workspace/:workspace",
    redirect: {
      name: "request.root"
    },
    children: r3
  }
];
var m = [
  {
    name: "root",
    path: "/",
    redirect: n2
  },
  {
    name: "workspace.default",
    path: "/workspace",
    redirect: {
      name: "request.root",
      params: {
        workspace: "default"
      }
    }
  },
  {
    name: "workspace",
    path: "/workspace/:workspace",
    redirect: {
      name: "request.root"
    },
    children: [
      ...r3,
      {
        name: "environment.default",
        path: "environment",
        redirect: (e) => ({
          name: "environment",
          params: { ...e.params, environment: "default" }
        })
      },
      {
        name: "environment",
        path: "environment/:environment",
        component: () => import("./Environment.vue-FRLSTDKW.js")
      },
      {
        name: "environment.collection",
        path: "environment/:collection/:environment",
        component: () => import("./Environment.vue-FRLSTDKW.js"),
        props: true
      },
      {
        name: "cookies.default",
        path: "cookies",
        redirect: (e) => ({
          name: "cookies",
          params: { ...e.params, cookies: "default" }
        })
      },
      {
        name: "cookies",
        path: "cookies/:cookies",
        component: () => import("./Cookies.vue-ZPWJG7QW.js")
      },
      {
        name: "servers.default",
        path: "servers",
        redirect: (e) => ({
          name: "servers",
          params: {
            ...e.params,
            collection: "default",
            servers: "default"
          }
        })
      },
      {
        name: "settings.default",
        path: "settings",
        redirect: (e) => ({
          name: "settings",
          params: { ...e.params, settings: "general" }
        })
      },
      {
        name: "settings",
        path: "settings/:settings",
        component: () => import("./Settings.vue-ZDKVE6EE.js")
      }
    ]
  }
];

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/libs/string-template.js
function i(c2, o2) {
  const n4 = c2.split(".").reduce((s3, r4) => s3 == null ? void 0 : s3[r4], o2);
  return typeof n4 == "string" ? n4 : JSON.stringify(n4);
}
function p(c2, o2) {
  let t2 = c2;
  const n4 = /* @__PURE__ */ new Set();
  return t2 = t2.replace(REGEX.VARIABLES, (s3, r4) => {
    const e = r4.trim();
    n4.add(e);
    const u = i(e, o2);
    return isDefined(u) && u !== "" ? u : `{{${e}}}`;
  }), t2 = t2.replace(REGEX.PATH, (s3, r4) => {
    const e = r4.trim();
    if (n4.has(e))
      return `{${e}}`;
    const u = i(e, o2);
    return isDefined(u) && u !== "" ? u : `{${e}}`;
  }), t2 = t2.replace(/:\b[\w.]+\b/g, (s3) => {
    const r4 = s3.slice(1);
    if (n4.has(r4))
      return s3;
    const e = i(r4, o2);
    return isDefined(e) && e !== "" ? e : s3;
  }), t2;
}
function y(c2) {
  function o2(t2, n4) {
    const s3 = Object.keys(t2), r4 = [];
    return s3.forEach((e) => {
      const u = n4 ? `${n4}.${e}` : e;
      typeof t2[e] == "object" ? r4.push(...o2(t2[e], u)) : r4.push([u, String(t2[e])]);
    }), r4;
  }
  return o2(c2);
}

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/store/router-params.js
function n3(t2) {
  return () => {
    const a3 = {
      [a2.Collection]: "default",
      [a2.Environment]: "default",
      [a2.Request]: "default",
      [a2.Examples]: "default",
      [a2.Schema]: "default",
      [a2.Cookies]: "default",
      [a2.Servers]: "default",
      [a2.Workspace]: "default",
      [a2.Settings]: "default"
    }, u = t2 == null ? void 0 : t2.currentRoute.value;
    return u && Object.keys(a3).forEach((f2) => {
      u.params[f2] && (a3[f2] = u.params[f2]);
    }), a3;
  };
}

// node_modules/.pnpm/@scalar+api-client@2.5.9_tailwindcss@4.1.10_typescript@5.8.3/node_modules/@scalar/api-client/dist/store/active-entities.js
var Y2 = ({
  collections: l,
  requestExamples: O3,
  requests: E,
  router: N,
  servers: p2,
  workspaces: I
}) => {
  const s3 = computed(n3(N)), r4 = computed(
    () => I[s3.value[a2.Workspace]] ?? Object.values(I)[0]
  ), d2 = computed(
    () => {
      var e;
      return ((e = r4.value) == null ? void 0 : e.collections.map((t2) => l[t2]).filter(isDefined).sort((t2, n4) => {
        var v2, o2;
        return ((v2 = t2.info) == null ? void 0 : v2.title) === "Drafts" ? 1 : ((o2 = n4.info) == null ? void 0 : o2.title) === "Drafts" ? -1 : 0;
      })) ?? [];
    }
  ), h2 = computed(
    () => {
      var e;
      return (e = d2.value) == null ? void 0 : e.flatMap((t2) => t2.servers.map((n4) => p2[n4]));
    }
  ), U = computed(
    () => {
      var e;
      return ((e = d2.value) == null ? void 0 : e.flatMap((t2) => t2.requests)) ?? [];
    }
  ), F3 = computed(() => {
    var t2, n4, v2, o2, u, a3, c2, b, y2;
    if (!((t2 = r4.value) != null && t2.activeEnvironmentId))
      return environmentSchema.parse({
        uid: "default",
        color: "#FFFFFF",
        name: "No Environment",
        value: JSON.stringify((n4 = r4.value) == null ? void 0 : n4.environments, null, 2)
      });
    const e = d2.value.find(
      (j) => {
        var g2, x;
        return (x = j["x-scalar-environments"]) == null ? void 0 : x[((g2 = r4.value) == null ? void 0 : g2.activeEnvironmentId) ?? ""];
      }
    );
    return e && ((v2 = r4.value) != null && v2.activeEnvironmentId) ? environmentSchema.parse({
      uid: r4.value.activeEnvironmentId,
      name: r4.value.activeEnvironmentId,
      value: JSON.stringify(
        (a3 = (u = e["x-scalar-environments"]) == null ? void 0 : u[(o2 = r4.value) == null ? void 0 : o2.activeEnvironmentId]) == null ? void 0 : a3.variables,
        null,
        2
      ),
      color: ((y2 = (b = e["x-scalar-environments"]) == null ? void 0 : b[(c2 = r4.value) == null ? void 0 : c2.activeEnvironmentId]) == null ? void 0 : y2.color) || "#FFFFFF",
      isDefault: false
    }) : environmentSchema.parse({
      uid: "default",
      color: "#FFFFFF",
      name: "No Environment",
      value: JSON.stringify(r4.value.environments, null, 2)
    });
  }), f2 = computed(() => {
    var n4;
    const e = s3.value[a2.Request], t2 = l[s3.value.collection] || l[((n4 = r4.value) == null ? void 0 : n4.collections[0]) ?? ""];
    return E[e] || E[(t2 == null ? void 0 : t2.requests[0]) ?? ""] || Object.values(E)[0];
  }), q2 = computed(() => {
    var t2;
    const e = s3.value[a2.Examples] === "default" ? ((t2 = f2.value) == null ? void 0 : t2.examples[0]) || "" : s3.value[a2.Examples];
    return O3[e];
  }), S = computed(() => {
    var v2, o2, u;
    const e = l[s3.value[a2.Collection]];
    if (e)
      return e;
    const t2 = (v2 = f2.value) == null ? void 0 : v2.uid;
    if (t2)
      return Object.values(l).find((a3) => {
        var c2;
        return (c2 = a3.requests) == null ? void 0 : c2.includes(t2);
      });
    const n4 = ((o2 = r4.value) == null ? void 0 : o2.collections[0]) ?? ((u = l[0]) == null ? void 0 : u.uid) ?? "";
    return l[n4];
  }), A = computed(() => {
    var e, t2;
    if ((e = f2.value) != null && e.selectedServerUid) {
      const n4 = p2[f2.value.selectedServerUid];
      if (n4)
        return n4;
    }
    if ((t2 = S.value) != null && t2.selectedServerUid) {
      const n4 = p2[S.value.selectedServerUid];
      if (n4)
        return n4;
    }
  }), R2 = computed(
    () => {
      var e;
      return s3.value[a2.Cookies] === "default" ? ((e = r4.value) == null ? void 0 : e.cookies[0]) ?? "default" : s3.value[a2.Cookies];
    }
  ), W2 = computed(() => {
    var u;
    const e = ((u = r4.value) == null ? void 0 : u.environments) ?? {}, t2 = F3.value.uid ? JSON.parse(F3.value.value) : {}, n4 = y(e).map(([a3, c2]) => ({
      key: a3,
      value: c2,
      source: "global"
    })), v2 = y(t2).map(([a3, c2]) => ({
      key: a3,
      value: c2,
      source: "collection"
    })), o2 = /* @__PURE__ */ new Map();
    return v2.forEach((a3) => {
      o2.set(a3.key, a3);
    }), n4.forEach((a3) => {
      o2.has(a3.key) || o2.set(a3.key, a3);
    }), Array.from(o2.values());
  });
  return {
    activeCollection: S,
    activeCookieId: R2,
    activeExample: q2,
    activeRequest: f2,
    activeRouterParams: s3,
    activeEnvironment: F3,
    activeServer: A,
    activeWorkspace: r4,
    activeWorkspaceCollections: d2,
    activeWorkspaceServers: h2,
    activeEnvVariables: W2,
    activeWorkspaceRequests: U
  };
};
var P = Symbol();
var z2 = () => {
  const l = inject(P);
  if (!l)
    throw new Error("Active entities store not provided");
  return l;
};

export {
  normalize,
  unescapeJsonPointer,
  dereference2 as dereference,
  escapeJsonPointer,
  toJson,
  toYaml,
  upgrade,
  isRemoteUrl,
  bundle,
  s,
  nanoidSchema,
  pkceOptions,
  securitySchemeSchema,
  tagSchema,
  collectionSchema,
  serverSchema,
  XScalarStability,
  apiClientConfigurationSchema,
  apiReferenceConfigurationSchema,
  isConfigurationWithSources,
  getExampleFromSchema,
  requestExampleParametersSchema,
  requestExampleSchema,
  createExampleFromRequest,
  requestSchema,
  LS_KEYS,
  REFERENCE_LS_KEYS,
  CLIENT_LS_KEYS,
  safeLocalStorage,
  getNestedValue,
  parse2 as parse,
  stringify2 as stringify,
  environmentSchema,
  parseSchema,
  getSlugUid,
  getServersFromOpenApiDocument,
  r,
  t,
  F,
  k,
  hasObtrusiveScrollbars,
  themeLabels,
  getThemeStyles,
  workspaceSchema,
  ge,
  qe,
  je,
  p,
  a2 as a,
  c,
  Y2 as Y,
  P,
  z2 as z
};
//# sourceMappingURL=chunk-6M3JNKJN.js.map
