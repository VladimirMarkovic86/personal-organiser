function e(a) {
  throw a;
}
var h = void 0, l = !0, m = null, n = !1;
function aa() {
  return function(a) {
    return a
  }
}
function q(a) {
  return function() {
    return this[a]
  }
}
function ba(a) {
  return function() {
    return a
  }
}
var r, ca = this;
function s(a) {
  var b = typeof a;
  if("object" == b) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return b
      }
      var c = Object.prototype.toString.call(a);
      if("[object Window]" == c) {
        return"object"
      }
      if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == b && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return b
}
function da(a) {
  return"string" == typeof a
}
function ea(a) {
  return"function" == s(a)
}
function fa(a) {
  var b = typeof a;
  return"object" == b && a != m || "function" == b
}
function ga(a) {
  return a[ha] || (a[ha] = ++ia)
}
var ha = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), ia = 0;
function ja(a, b) {
  var c = a.split("."), d = ca;
  !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
  for(var f;c.length && (f = c.shift());) {
    !c.length && b !== h ? d[f] = b : d = d[f] ? d[f] : d[f] = {}
  }
}
function ka(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.zc = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
}
;function la(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}
function ma(a) {
  for(var b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296
  }
  return b
}
;var na = Array.prototype, oa = na.indexOf ? function(a, b, c) {
  return na.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == m ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if(da(a)) {
    return!da(b) || 1 != b.length ? -1 : a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, pa = na.forEach ? function(a, b, c) {
  na.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = da(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in f && b.call(c, f[g], g, a)
  }
};
var qa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function ra(a, b) {
  for(var c, d, f = 1;f < arguments.length;f++) {
    d = arguments[f];
    for(c in d) {
      a[c] = d[c]
    }
    for(var g = 0;g < qa.length;g++) {
      c = qa[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
;function sa(a, b) {
  var c = Array.prototype.slice.call(arguments), d = c.shift();
  "undefined" == typeof d && e(Error("[goog.string.format] Template required"));
  return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, j, k, p, t, x) {
    if("%" == p) {
      return"%"
    }
    var A = c.shift();
    "undefined" == typeof A && e(Error("[goog.string.format] Not enough arguments"));
    arguments[0] = A;
    return sa.ga[p].apply(m, arguments)
  })
}
sa.ga = {};
sa.ga.s = function(a, b, c) {
  return isNaN(c) || "" == c || a.length >= c ? a : a = -1 < b.indexOf("-", 0) ? a + Array(c - a.length + 1).join(" ") : Array(c - a.length + 1).join(" ") + a
};
sa.ga.f = function(a, b, c, d, f) {
  d = a.toString();
  isNaN(f) || "" == f || (d = a.toFixed(f));
  var g;
  g = 0 > a ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
  0 <= a && (d = g + d);
  if(isNaN(c) || d.length >= c) {
    return d
  }
  d = isNaN(f) ? Math.abs(a).toString() : Math.abs(a).toFixed(f);
  a = c - d.length - g.length;
  return d = 0 <= b.indexOf("-", 0) ? g + d + Array(a + 1).join(" ") : g + Array(a + 1).join(0 <= b.indexOf("0", 0) ? "0" : " ") + d
};
sa.ga.d = function(a, b, c, d, f, g, i, j) {
  return sa.ga.f(parseInt(a, 10), b, c, d, 0, g, i, j)
};
sa.ga.i = sa.ga.d;
sa.ga.u = sa.ga.d;
function ta(a, b) {
  a != m && this.append.apply(this, arguments)
}
ta.prototype.Ma = "";
ta.prototype.append = function(a, b, c) {
  this.Ma += a;
  if(b != m) {
    for(var d = 1;d < arguments.length;d++) {
      this.Ma += arguments[d]
    }
  }
  return this
};
ta.prototype.toString = q("Ma");
var ua;
ja("cljs.core.set_print_fn_BANG_", aa());
function va() {
  return wa(["\ufdd0:flush-on-newline", l, "\ufdd0:readably", l, "\ufdd0:meta", n, "\ufdd0:dup", n], l)
}
function u(a) {
  return a != m && a !== n
}
function xa(a) {
  return a == m
}
function v(a) {
  return u(a) ? n : l
}
function ya(a) {
  var b = da(a);
  return b ? "\ufdd0" !== a.charAt(0) : b
}
function w(a, b) {
  return a[s(b == m ? m : b)] ? l : a._ ? l : n
}
function y(a, b) {
  var c = b == m ? m : b.constructor, c = u(u(c) ? c.Ya : c) ? c.Ab : s(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""))
}
var za = {}, Aa = {};
function Ba(a) {
  if(a ? a.A : a) {
    return a.A(a)
  }
  var b;
  var c = Ba[s(a == m ? m : a)];
  c ? b = c : (c = Ba._) ? b = c : e(y("ICounted.-count", a));
  return b.call(m, a)
}
function Ca(a, b) {
  if(a ? a.H : a) {
    return a.H(a, b)
  }
  var c;
  var d = Ca[s(a == m ? m : a)];
  d ? c = d : (d = Ca._) ? c = d : e(y("ICollection.-conj", a));
  return c.call(m, a, b)
}
var Da = {}, z, Ea = m;
function Fa(a, b) {
  if(a ? a.t : a) {
    return a.t(a, b)
  }
  var c;
  var d = z[s(a == m ? m : a)];
  d ? c = d : (d = z._) ? c = d : e(y("IIndexed.-nth", a));
  return c.call(m, a, b)
}
function Ga(a, b, c) {
  if(a ? a.R : a) {
    return a.R(a, b, c)
  }
  var d;
  var f = z[s(a == m ? m : a)];
  f ? d = f : (f = z._) ? d = f : e(y("IIndexed.-nth", a));
  return d.call(m, a, b, c)
}
Ea = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Fa.call(this, a, b);
    case 3:
      return Ga.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ea.a = Fa;
Ea.b = Ga;
z = Ea;
var Ha = {};
function E(a) {
  if(a ? a.O : a) {
    return a.O(a)
  }
  var b;
  var c = E[s(a == m ? m : a)];
  c ? b = c : (c = E._) ? b = c : e(y("ISeq.-first", a));
  return b.call(m, a)
}
function F(a) {
  if(a ? a.P : a) {
    return a.P(a)
  }
  var b;
  var c = F[s(a == m ? m : a)];
  c ? b = c : (c = F._) ? b = c : e(y("ISeq.-rest", a));
  return b.call(m, a)
}
var Ja = {}, Ka, La = m;
function Ma(a, b) {
  if(a ? a.L : a) {
    return a.L(a, b)
  }
  var c;
  var d = Ka[s(a == m ? m : a)];
  d ? c = d : (d = Ka._) ? c = d : e(y("ILookup.-lookup", a));
  return c.call(m, a, b)
}
function Na(a, b, c) {
  if(a ? a.z : a) {
    return a.z(a, b, c)
  }
  var d;
  var f = Ka[s(a == m ? m : a)];
  f ? d = f : (f = Ka._) ? d = f : e(y("ILookup.-lookup", a));
  return d.call(m, a, b, c)
}
La = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ma.call(this, a, b);
    case 3:
      return Na.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
La.a = Ma;
La.b = Na;
Ka = La;
function Oa(a, b) {
  if(a ? a.Wa : a) {
    return a.Wa(a, b)
  }
  var c;
  var d = Oa[s(a == m ? m : a)];
  d ? c = d : (d = Oa._) ? c = d : e(y("IAssociative.-contains-key?", a));
  return c.call(m, a, b)
}
function Pa(a, b, c) {
  if(a ? a.ka : a) {
    return a.ka(a, b, c)
  }
  var d;
  var f = Pa[s(a == m ? m : a)];
  f ? d = f : (f = Pa._) ? d = f : e(y("IAssociative.-assoc", a));
  return d.call(m, a, b, c)
}
var Qa = {}, Ra = {};
function Sa(a) {
  if(a ? a.Rb : a) {
    return a.Rb(a)
  }
  var b;
  var c = Sa[s(a == m ? m : a)];
  c ? b = c : (c = Sa._) ? b = c : e(y("IMapEntry.-key", a));
  return b.call(m, a)
}
function Ta(a) {
  if(a ? a.Sb : a) {
    return a.Sb(a)
  }
  var b;
  var c = Ta[s(a == m ? m : a)];
  c ? b = c : (c = Ta._) ? b = c : e(y("IMapEntry.-val", a));
  return b.call(m, a)
}
var Ua = {}, Va = {};
function Wa(a) {
  if(a ? a.jc : a) {
    return a.state
  }
  var b;
  var c = Wa[s(a == m ? m : a)];
  c ? b = c : (c = Wa._) ? b = c : e(y("IDeref.-deref", a));
  return b.call(m, a)
}
var Xa = {};
function Ya(a) {
  if(a ? a.D : a) {
    return a.D(a)
  }
  var b;
  var c = Ya[s(a == m ? m : a)];
  c ? b = c : (c = Ya._) ? b = c : e(y("IMeta.-meta", a));
  return b.call(m, a)
}
var Za = {};
function $a(a, b) {
  if(a ? a.F : a) {
    return a.F(a, b)
  }
  var c;
  var d = $a[s(a == m ? m : a)];
  d ? c = d : (d = $a._) ? c = d : e(y("IWithMeta.-with-meta", a));
  return c.call(m, a, b)
}
var ab = {}, bb, cb = m;
function db(a, b) {
  if(a ? a.ya : a) {
    return a.ya(a, b)
  }
  var c;
  var d = bb[s(a == m ? m : a)];
  d ? c = d : (d = bb._) ? c = d : e(y("IReduce.-reduce", a));
  return c.call(m, a, b)
}
function eb(a, b, c) {
  if(a ? a.za : a) {
    return a.za(a, b, c)
  }
  var d;
  var f = bb[s(a == m ? m : a)];
  f ? d = f : (f = bb._) ? d = f : e(y("IReduce.-reduce", a));
  return d.call(m, a, b, c)
}
cb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return db.call(this, a, b);
    case 3:
      return eb.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
cb.a = db;
cb.b = eb;
bb = cb;
function fb(a, b) {
  if(a ? a.w : a) {
    return a.w(a, b)
  }
  var c;
  var d = fb[s(a == m ? m : a)];
  d ? c = d : (d = fb._) ? c = d : e(y("IEquiv.-equiv", a));
  return c.call(m, a, b)
}
function gb(a) {
  if(a ? a.C : a) {
    return a.C(a)
  }
  var b;
  var c = gb[s(a == m ? m : a)];
  c ? b = c : (c = gb._) ? b = c : e(y("IHash.-hash", a));
  return b.call(m, a)
}
var hb = {};
function ib(a) {
  if(a ? a.v : a) {
    return a.v(a)
  }
  var b;
  var c = ib[s(a == m ? m : a)];
  c ? b = c : (c = ib._) ? b = c : e(y("ISeqable.-seq", a));
  return b.call(m, a)
}
var jb = {};
function G(a, b) {
  if(a ? a.Vb : a) {
    return a.Vb(0, b)
  }
  var c;
  var d = G[s(a == m ? m : a)];
  d ? c = d : (d = G._) ? c = d : e(y("IWriter.-write", a));
  return c.call(m, a, b)
}
function kb(a) {
  if(a ? a.oc : a) {
    return m
  }
  var b;
  var c = kb[s(a == m ? m : a)];
  c ? b = c : (c = kb._) ? b = c : e(y("IWriter.-flush", a));
  return b.call(m, a)
}
function mb(a, b, c) {
  if(a ? a.Ub : a) {
    return a.Ub(a, b, c)
  }
  var d;
  var f = mb[s(a == m ? m : a)];
  f ? d = f : (f = mb._) ? d = f : e(y("IWatchable.-notify-watches", a));
  return d.call(m, a, b, c)
}
function nb(a) {
  if(a ? a.wa : a) {
    return a.wa(a)
  }
  var b;
  var c = nb[s(a == m ? m : a)];
  c ? b = c : (c = nb._) ? b = c : e(y("IEditableCollection.-as-transient", a));
  return b.call(m, a)
}
function ob(a, b) {
  if(a ? a.Ca : a) {
    return a.Ca(a, b)
  }
  var c;
  var d = ob[s(a == m ? m : a)];
  d ? c = d : (d = ob._) ? c = d : e(y("ITransientCollection.-conj!", a));
  return c.call(m, a, b)
}
function pb(a) {
  if(a ? a.Pa : a) {
    return a.Pa(a)
  }
  var b;
  var c = pb[s(a == m ? m : a)];
  c ? b = c : (c = pb._) ? b = c : e(y("ITransientCollection.-persistent!", a));
  return b.call(m, a)
}
function qb(a, b, c) {
  if(a ? a.Ba : a) {
    return a.Ba(a, b, c)
  }
  var d;
  var f = qb[s(a == m ? m : a)];
  f ? d = f : (f = qb._) ? d = f : e(y("ITransientAssociative.-assoc!", a));
  return d.call(m, a, b, c)
}
function rb(a) {
  if(a ? a.Pb : a) {
    return a.Pb()
  }
  var b;
  var c = rb[s(a == m ? m : a)];
  c ? b = c : (c = rb._) ? b = c : e(y("IChunk.-drop-first", a));
  return b.call(m, a)
}
function sb(a) {
  if(a ? a.jb : a) {
    return a.jb(a)
  }
  var b;
  var c = sb[s(a == m ? m : a)];
  c ? b = c : (c = sb._) ? b = c : e(y("IChunkedSeq.-chunked-first", a));
  return b.call(m, a)
}
function tb(a) {
  if(a ? a.Xa : a) {
    return a.Xa(a)
  }
  var b;
  var c = tb[s(a == m ? m : a)];
  c ? b = c : (c = tb._) ? b = c : e(y("IChunkedSeq.-chunked-rest", a));
  return b.call(m, a)
}
function ub(a) {
  this.xc = a;
  this.q = 0;
  this.h = 1073741824
}
ub.prototype.Vb = function(a, b) {
  return this.xc.append(b)
};
ub.prototype.oc = ba(m);
function vb(a) {
  var b = new ta, c = new ub(b);
  a.I(a, c, va());
  kb(c);
  return"" + H(b)
}
function wb(a, b, c, d, f) {
  this.Ia = a;
  this.name = b;
  this.ta = c;
  this.Ua = d;
  this.ec = f;
  this.q = 0;
  this.h = 2154168321
}
r = wb.prototype;
r.I = function(a, b) {
  return G(b, this.ta)
};
r.Tb = l;
r.C = function() {
  -1 === this.Ua && (this.Ua = xb.a ? xb.a(I.c ? I.c(this.Ia) : I.call(m, this.Ia), I.c ? I.c(this.name) : I.call(m, this.name)) : xb.call(m, I.c ? I.c(this.Ia) : I.call(m, this.Ia), I.c ? I.c(this.name) : I.call(m, this.name)));
  return this.Ua
};
r.F = function(a, b) {
  return new wb(this.Ia, this.name, this.ta, this.Ua, b)
};
r.D = q("ec");
var yb = m, yb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ka.b(b, this, m);
    case 3:
      return Ka.b(b, this, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
wb.prototype.call = yb;
wb.prototype.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
wb.prototype.w = function(a, b) {
  return b instanceof wb ? this.ta === b.ta : n
};
wb.prototype.toString = q("ta");
function J(a) {
  if(a == m) {
    return m
  }
  var b;
  if(b = a) {
    b = (b = a.h & 8388608) ? b : a.Aa
  }
  if(b) {
    return a.v(a)
  }
  if(a instanceof Array || ya(a)) {
    return 0 === a.length ? m : new zb(a, 0)
  }
  if(w(Ja, a)) {
    return ib(a)
  }
  e(Error([H(a), H("is not ISeqable")].join("")))
}
function K(a) {
  if(a == m) {
    return m
  }
  var b;
  if(b = a) {
    b = (b = a.h & 64) ? b : a.yb
  }
  if(b) {
    return a.O(a)
  }
  a = J(a);
  return a == m ? m : E(a)
}
function L(a) {
  if(a != m) {
    var b;
    if(b = a) {
      b = (b = a.h & 64) ? b : a.yb
    }
    if(b) {
      return a.P(a)
    }
    a = J(a);
    return a != m ? F(a) : M
  }
  return M
}
function N(a) {
  if(a == m) {
    a = m
  }else {
    var b;
    if(b = a) {
      b = (b = a.h & 128) ? b : a.Fc
    }
    a = b ? a.la(a) : J(L(a))
  }
  return a
}
var O, Ab = m;
function Bb(a, b) {
  var c = a === b;
  return c ? c : fb(a, b)
}
function Cb(a, b, c) {
  for(;;) {
    if(u(Ab.a(a, b))) {
      if(N(c)) {
        a = b, b = K(c), c = N(c)
      }else {
        return Ab.a(b, K(c))
      }
    }else {
      return n
    }
  }
}
function Db(a, b, c) {
  var d = m;
  2 < arguments.length && (d = R(Array.prototype.slice.call(arguments, 2), 0));
  return Cb.call(this, a, b, d)
}
Db.n = 2;
Db.j = function(a) {
  var b = K(a), a = N(a), c = K(a), a = L(a);
  return Cb(b, c, a)
};
Db.g = Cb;
Ab = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return l;
    case 2:
      return Bb.call(this, a, b);
    default:
      return Db.g(a, b, R(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ab.n = 2;
Ab.j = Db.j;
Ab.c = ba(l);
Ab.a = Bb;
Ab.g = Db.g;
O = Ab;
gb["null"] = ba(0);
Ua["null"] = l;
Aa["null"] = l;
Ba["null"] = ba(0);
fb["null"] = function(a, b) {
  return b == m
};
Za["null"] = l;
$a["null"] = ba(m);
Xa["null"] = l;
Ya["null"] = ba(m);
Qa["null"] = l;
Date.prototype.w = function(a, b) {
  var c = b instanceof Date;
  return c ? a.toString() === b.toString() : c
};
gb.number = function(a) {
  return Math.floor(a) % 2147483647
};
fb.number = function(a, b) {
  return a === b
};
gb["boolean"] = function(a) {
  return a === l ? 1 : 0
};
Xa["function"] = l;
Ya["function"] = ba(m);
za["function"] = l;
gb._ = function(a) {
  return ga(a)
};
var Eb, Fb = m;
function Gb(a, b) {
  var c = Ba(a);
  if(0 === c) {
    return b.B ? b.B() : b.call(m)
  }
  for(var d = z.a(a, 0), f = 1;;) {
    if(f < c) {
      d = b.a ? b.a(d, z.a(a, f)) : b.call(m, d, z.a(a, f)), f += 1
    }else {
      return d
    }
  }
}
function Hb(a, b, c) {
  for(var d = Ba(a), f = 0;;) {
    if(f < d) {
      c = b.a ? b.a(c, z.a(a, f)) : b.call(m, c, z.a(a, f)), f += 1
    }else {
      return c
    }
  }
}
function Ib(a, b, c, d) {
  for(var f = Ba(a);;) {
    if(d < f) {
      c = b.a ? b.a(c, z.a(a, d)) : b.call(m, c, z.a(a, d)), d += 1
    }else {
      return c
    }
  }
}
Fb = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return Gb.call(this, a, b);
    case 3:
      return Hb.call(this, a, b, c);
    case 4:
      return Ib.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Fb.a = Gb;
Fb.b = Hb;
Fb.o = Ib;
Eb = Fb;
var Jb, Kb = m;
function Lb(a, b) {
  var c = a.length;
  if(0 === a.length) {
    return b.B ? b.B() : b.call(m)
  }
  for(var d = a[0], f = 1;;) {
    if(f < c) {
      d = b.a ? b.a(d, a[f]) : b.call(m, d, a[f]), f += 1
    }else {
      return d
    }
  }
}
function Mb(a, b, c) {
  for(var d = a.length, f = 0;;) {
    if(f < d) {
      c = b.a ? b.a(c, a[f]) : b.call(m, c, a[f]), f += 1
    }else {
      return c
    }
  }
}
function Nb(a, b, c, d) {
  for(var f = a.length;;) {
    if(d < f) {
      c = b.a ? b.a(c, a[d]) : b.call(m, c, a[d]), d += 1
    }else {
      return c
    }
  }
}
Kb = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return Lb.call(this, a, b);
    case 3:
      return Mb.call(this, a, b, c);
    case 4:
      return Nb.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Kb.a = Lb;
Kb.b = Mb;
Kb.o = Nb;
Jb = Kb;
function Ob(a) {
  if(a) {
    var b = a.h & 2, a = (b ? b : a.kb) ? l : a.h ? n : w(Aa, a)
  }else {
    a = w(Aa, a)
  }
  return a
}
function Pb(a) {
  if(a) {
    var b = a.h & 16, a = (b ? b : a.Oa) ? l : a.h ? n : w(Da, a)
  }else {
    a = w(Da, a)
  }
  return a
}
function zb(a, b) {
  this.e = a;
  this.p = b;
  this.q = 0;
  this.h = 166199550
}
r = zb.prototype;
r.C = function(a) {
  return Qb.c ? Qb.c(a) : Qb.call(m, a)
};
r.la = function() {
  return this.p + 1 < this.e.length ? new zb(this.e, this.p + 1) : m
};
r.H = function(a, b) {
  return S.a ? S.a(b, a) : S.call(m, b, a)
};
r.toString = function() {
  return vb(this)
};
r.ya = function(a, b) {
  return Jb.o(this.e, b, this.e[this.p], this.p + 1)
};
r.za = function(a, b, c) {
  return Jb.o(this.e, b, c, this.p)
};
r.v = aa();
r.A = function() {
  return this.e.length - this.p
};
r.O = function() {
  return this.e[this.p]
};
r.P = function() {
  return this.p + 1 < this.e.length ? new zb(this.e, this.p + 1) : Rb.B ? Rb.B() : Rb.call(m)
};
r.w = function(a, b) {
  return Sb.a ? Sb.a(a, b) : Sb.call(m, a, b)
};
r.t = function(a, b) {
  var c = b + this.p;
  return c < this.e.length ? this.e[c] : m
};
r.R = function(a, b, c) {
  a = b + this.p;
  return a < this.e.length ? this.e[a] : c
};
r.K = function() {
  return M
};
var Tb, Ub = m;
function Vb(a) {
  return Ub.a(a, 0)
}
function Wb(a, b) {
  return b < a.length ? new zb(a, b) : m
}
Ub = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Vb.call(this, a);
    case 2:
      return Wb.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ub.c = Vb;
Ub.a = Wb;
Tb = Ub;
var R, Xb = m;
function Yb(a) {
  return Tb.a(a, 0)
}
function Zb(a, b) {
  return Tb.a(a, b)
}
Xb = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Yb.call(this, a);
    case 2:
      return Zb.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Xb.c = Yb;
Xb.a = Zb;
R = Xb;
Aa.array = l;
Ba.array = function(a) {
  return a.length
};
function $b(a) {
  return K(N(a))
}
fb._ = function(a, b) {
  return a === b
};
var T, ac = m;
function bc(a, b) {
  return a != m ? Ca(a, b) : Rb.c ? Rb.c(b) : Rb.call(m, b)
}
function cc(a, b, c) {
  for(;;) {
    if(u(c)) {
      a = ac.a(a, b), b = K(c), c = N(c)
    }else {
      return ac.a(a, b)
    }
  }
}
function dc(a, b, c) {
  var d = m;
  2 < arguments.length && (d = R(Array.prototype.slice.call(arguments, 2), 0));
  return cc.call(this, a, b, d)
}
dc.n = 2;
dc.j = function(a) {
  var b = K(a), a = N(a), c = K(a), a = L(a);
  return cc(b, c, a)
};
dc.g = cc;
ac = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return bc.call(this, a, b);
    default:
      return dc.g(a, b, R(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
ac.n = 2;
ac.j = dc.j;
ac.a = bc;
ac.g = dc.g;
T = ac;
function U(a) {
  if(Ob(a)) {
    a = Ba(a)
  }else {
    a: {
      for(var a = J(a), b = 0;;) {
        if(Ob(a)) {
          a = b + Ba(a);
          break a
        }
        a = N(a);
        b += 1
      }
      a = h
    }
  }
  return a
}
var ec, fc = m;
function gc(a, b) {
  for(;;) {
    a == m && e(Error("Index out of bounds"));
    if(0 === b) {
      if(J(a)) {
        return K(a)
      }
      e(Error("Index out of bounds"))
    }
    if(Pb(a)) {
      return z.a(a, b)
    }
    if(J(a)) {
      var c = N(a), d = b - 1, a = c, b = d
    }else {
      e(Error("Index out of bounds"))
    }
  }
}
function hc(a, b, c) {
  for(;;) {
    if(a == m) {
      return c
    }
    if(0 === b) {
      return J(a) ? K(a) : c
    }
    if(Pb(a)) {
      return z.b(a, b, c)
    }
    if(J(a)) {
      a = N(a), b -= 1
    }else {
      return c
    }
  }
}
fc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return gc.call(this, a, b);
    case 3:
      return hc.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
fc.a = gc;
fc.b = hc;
ec = fc;
var V, ic = m;
function jc(a, b) {
  var c;
  if(a == m) {
    c = m
  }else {
    if(c = a) {
      c = (c = a.h & 16) ? c : a.Oa
    }
    c = c ? a.t(a, Math.floor(b)) : a instanceof Array ? b < a.length ? a[b] : m : ya(a) ? b < a.length ? a[b] : m : ec.a(a, Math.floor(b))
  }
  return c
}
function kc(a, b, c) {
  if(a != m) {
    var d;
    if(d = a) {
      d = (d = a.h & 16) ? d : a.Oa
    }
    a = d ? a.R(a, Math.floor(b), c) : a instanceof Array ? b < a.length ? a[b] : c : ya(a) ? b < a.length ? a[b] : c : ec.b(a, Math.floor(b), c)
  }else {
    a = c
  }
  return a
}
ic = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return jc.call(this, a, b);
    case 3:
      return kc.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ic.a = jc;
ic.b = kc;
V = ic;
var W, lc = m;
function mc(a, b) {
  var c;
  if(a == m) {
    c = m
  }else {
    if(c = a) {
      c = (c = a.h & 256) ? c : a.kc
    }
    c = c ? a.L(a, b) : a instanceof Array ? b < a.length ? a[b] : m : ya(a) ? b < a.length ? a[b] : m : w(Ja, a) ? Ka.a(a, b) : m
  }
  return c
}
function nc(a, b, c) {
  if(a != m) {
    var d;
    if(d = a) {
      d = (d = a.h & 256) ? d : a.kc
    }
    a = d ? a.z(a, b, c) : a instanceof Array ? b < a.length ? a[b] : c : ya(a) ? b < a.length ? a[b] : c : w(Ja, a) ? Ka.b(a, b, c) : c
  }else {
    a = c
  }
  return a
}
lc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return mc.call(this, a, b);
    case 3:
      return nc.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
lc.a = mc;
lc.b = nc;
W = lc;
var oc, pc = m;
function qc(a, b, c) {
  return a != m ? Pa(a, b, c) : rc.a ? rc.a(b, c) : rc.call(m, b, c)
}
function sc(a, b, c, d) {
  for(;;) {
    if(a = pc.b(a, b, c), u(d)) {
      b = K(d), c = $b(d), d = N(N(d))
    }else {
      return a
    }
  }
}
function tc(a, b, c, d) {
  var f = m;
  3 < arguments.length && (f = R(Array.prototype.slice.call(arguments, 3), 0));
  return sc.call(this, a, b, c, f)
}
tc.n = 3;
tc.j = function(a) {
  var b = K(a), a = N(a), c = K(a), a = N(a), d = K(a), a = L(a);
  return sc(b, c, d, a)
};
tc.g = sc;
pc = function(a, b, c, d) {
  switch(arguments.length) {
    case 3:
      return qc.call(this, a, b, c);
    default:
      return tc.g(a, b, c, R(arguments, 3))
  }
  e(Error("Invalid arity: " + arguments.length))
};
pc.n = 3;
pc.j = tc.j;
pc.b = qc;
pc.g = tc.g;
oc = pc;
function uc(a) {
  var b = ea(a);
  return b ? b : a ? u(u(m) ? m : a.gc) ? l : a.Kc ? n : w(za, a) : w(za, a)
}
var xc = function vc(b, c) {
  var d;
  if(d = uc(b)) {
    d = b ? ((d = b.h & 262144) ? d : b.Jc) || (b.h ? 0 : w(Za, b)) : w(Za, b), d = !d
  }
  if(d) {
    if(h === ua) {
      ua = {};
      ua = function(b, c, d, f) {
        this.l = b;
        this.Lb = c;
        this.Cc = d;
        this.sc = f;
        this.q = 0;
        this.h = 393217
      };
      ua.Ya = l;
      ua.Ab = "cljs.core/t7848";
      ua.zb = function(b, c) {
        return G(c, "cljs.core/t7848")
      };
      var f = function(b, c) {
        return wc.a ? wc.a(b.Lb, c) : wc.call(m, b.Lb, c)
      };
      d = function(b, c) {
        var b = this, d = m;
        1 < arguments.length && (d = R(Array.prototype.slice.call(arguments, 1), 0));
        return f.call(this, b, d)
      };
      d.n = 1;
      d.j = function(b) {
        var c = K(b), b = L(b);
        return f(c, b)
      };
      d.g = f;
      ua.prototype.call = d;
      ua.prototype.apply = function(b, c) {
        b = this;
        return b.call.apply(b, [b].concat(c.slice()))
      };
      ua.prototype.gc = l;
      ua.prototype.D = q("sc");
      ua.prototype.F = function(b, c) {
        return new ua(this.l, this.Lb, this.Cc, c)
      }
    }
    d = new ua(c, b, vc, m);
    d = vc(d, c)
  }else {
    d = $a(b, c)
  }
  return d
};
function yc(a) {
  var b;
  b = a ? ((b = a.h & 131072) ? b : a.mc) || (a.h ? 0 : w(Xa, a)) : w(Xa, a);
  return b ? Ya(a) : m
}
var zc = {}, Ac = 0, I, Bc = m;
function Cc(a) {
  return Bc.a(a, l)
}
function Dc(a, b) {
  var c;
  ((c = da(a)) ? b : c) ? (255 < Ac && (zc = {}, Ac = 0), c = zc[a], "number" !== typeof c && (c = ma(a), zc[a] = c, Ac += 1)) : c = gb(a);
  return c
}
Bc = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Cc.call(this, a);
    case 2:
      return Dc.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Bc.c = Cc;
Bc.a = Dc;
I = Bc;
function Ec(a) {
  if(a) {
    var b = a.h & 16384, a = (b ? b : a.Ic) ? l : a.h ? n : w(Va, a)
  }else {
    a = w(Va, a)
  }
  return a
}
function Fc(a) {
  var b = a instanceof Gc;
  return b ? b : a instanceof Hc
}
function Ic(a, b, c, d, f) {
  for(;0 !== f;) {
    c[d] = a[b], d += 1, f -= 1, b += 1
  }
}
var Jc = {};
function Kc(a) {
  return a === l
}
function Lc(a) {
  return u(a) ? l : n
}
function Mc(a) {
  var b = da(a);
  return b ? "\ufdd0" === a.charAt(0) : b
}
function Nc(a, b) {
  return W.b(a, b, Jc) === Jc ? n : l
}
function Oc(a, b) {
  if(a === b) {
    return 0
  }
  if(a == m) {
    return-1
  }
  if(b == m) {
    return 1
  }
  if((a == m ? m : a.constructor) === (b == m ? m : b.constructor)) {
    var c;
    if(c = a) {
      c = (c = a.q & 2048) ? c : a.hc
    }
    return c ? a.ic(a, b) : a > b ? 1 : a < b ? -1 : 0
  }
  e(Error("compare on non-nil objects of different types"))
}
var Pc, Qc = m;
function Rc(a, b) {
  var c = U(a), d = U(b);
  return c < d ? -1 : c > d ? 1 : Qc.o(a, b, c, 0)
}
function Sc(a, b, c, d) {
  for(;;) {
    var f = Oc(V.a(a, d), V.a(b, d)), g = 0 === f;
    if(g ? d + 1 < c : g) {
      d += 1
    }else {
      return f
    }
  }
}
Qc = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return Rc.call(this, a, b);
    case 4:
      return Sc.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Qc.a = Rc;
Qc.o = Sc;
Pc = Qc;
var Tc, Uc = m;
function Vc(a, b) {
  var c = J(b);
  return c ? Wc.b ? Wc.b(a, K(c), N(c)) : Wc.call(m, a, K(c), N(c)) : a.B ? a.B() : a.call(m)
}
function Xc(a, b, c) {
  for(c = J(c);;) {
    if(c) {
      b = a.a ? a.a(b, K(c)) : a.call(m, b, K(c)), c = N(c)
    }else {
      return b
    }
  }
}
Uc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Vc.call(this, a, b);
    case 3:
      return Xc.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Uc.a = Vc;
Uc.b = Xc;
Tc = Uc;
var Wc, Yc = m;
function Zc(a, b) {
  var c;
  if(c = b) {
    c = (c = b.h & 524288) ? c : b.nc
  }
  return c ? b.ya(b, a) : b instanceof Array ? Jb.a(b, a) : ya(b) ? Jb.a(b, a) : w(ab, b) ? bb.a(b, a) : Tc.a(a, b)
}
function $c(a, b, c) {
  var d;
  if(d = c) {
    d = (d = c.h & 524288) ? d : c.nc
  }
  return d ? c.za(c, a, b) : c instanceof Array ? Jb.b(c, a, b) : ya(c) ? Jb.b(c, a, b) : w(ab, c) ? bb.b(c, a, b) : Tc.b(a, b, c)
}
Yc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Zc.call(this, a, b);
    case 3:
      return $c.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Yc.a = Zc;
Yc.b = $c;
Wc = Yc;
function ad(a) {
  return 0 <= a ? Math.floor.c ? Math.floor.c(a) : Math.floor.call(m, a) : Math.ceil.c ? Math.ceil.c(a) : Math.ceil.call(m, a)
}
function bd(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24
}
function cd(a) {
  for(var b = 1, a = J(a);;) {
    var c = a;
    if(u(c ? 0 < b : c)) {
      b -= 1, a = N(a)
    }else {
      return a
    }
  }
}
var dd, ed = m;
function fd(a) {
  return a == m ? "" : a.toString()
}
function gd(a, b) {
  return function(a, b) {
    for(;;) {
      if(u(b)) {
        var f = a.append(ed.c(K(b))), g = N(b), a = f, b = g
      }else {
        return ed.c(a)
      }
    }
  }.call(m, new ta(ed.c(a)), b)
}
function hd(a, b) {
  var c = m;
  1 < arguments.length && (c = R(Array.prototype.slice.call(arguments, 1), 0));
  return gd.call(this, a, c)
}
hd.n = 1;
hd.j = function(a) {
  var b = K(a), a = L(a);
  return gd(b, a)
};
hd.g = gd;
ed = function(a, b) {
  switch(arguments.length) {
    case 0:
      return"";
    case 1:
      return fd.call(this, a);
    default:
      return hd.g(a, R(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
ed.n = 1;
ed.j = hd.j;
ed.B = ba("");
ed.c = fd;
ed.g = hd.g;
dd = ed;
var H, id = m;
function jd(a) {
  return Mc(a) ? dd.g(":", R([a.substring(2, a.length)], 0)) : a == m ? "" : a.toString()
}
function kd(a, b) {
  return function(a, b) {
    for(;;) {
      if(u(b)) {
        var f = a.append(id.c(K(b))), g = N(b), a = f, b = g
      }else {
        return dd.c(a)
      }
    }
  }.call(m, new ta(id.c(a)), b)
}
function ld(a, b) {
  var c = m;
  1 < arguments.length && (c = R(Array.prototype.slice.call(arguments, 1), 0));
  return kd.call(this, a, c)
}
ld.n = 1;
ld.j = function(a) {
  var b = K(a), a = L(a);
  return kd(b, a)
};
ld.g = kd;
id = function(a, b) {
  switch(arguments.length) {
    case 0:
      return"";
    case 1:
      return jd.call(this, a);
    default:
      return ld.g(a, R(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
id.n = 1;
id.j = ld.j;
id.B = ba("");
id.c = jd;
id.g = ld.g;
H = id;
var md, nd = m, nd = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return a.substring(b);
    case 3:
      return a.substring(b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
nd.a = function(a, b) {
  return a.substring(b)
};
nd.b = function(a, b, c) {
  return a.substring(b, c)
};
md = nd;
var od, pd = m;
function qd(a) {
  return Mc(a) ? a : a instanceof wb ? dd.g("\ufdd0", R([":", md.a(a, 2)], 0)) : dd.g("\ufdd0", R([":", a], 0))
}
function rd(a, b) {
  return pd.c(dd.g(a, R(["/", b], 0)))
}
pd = function(a, b) {
  switch(arguments.length) {
    case 1:
      return qd.call(this, a);
    case 2:
      return rd.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
pd.c = qd;
pd.a = rd;
od = pd;
function Sb(a, b) {
  var c;
  c = b ? ((c = b.h & 16777216) ? c : b.Gc) || (b.h ? 0 : w(jb, b)) : w(jb, b);
  if(c) {
    a: {
      c = J(a);
      for(var d = J(b);;) {
        if(c == m) {
          c = d == m;
          break a
        }
        if(d != m && O.a(K(c), K(d))) {
          c = N(c), d = N(d)
        }else {
          c = n;
          break a
        }
      }
      c = h
    }
  }else {
    c = m
  }
  return Lc(c)
}
function xb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2)
}
function Qb(a) {
  return Wc.b(function(a, c) {
    return xb(a, I.a(c, n))
  }, I.a(K(a), n), N(a))
}
function td(a) {
  for(var b = 0, a = J(a);;) {
    if(a) {
      var c = K(a), b = (b + (I.c(ud.c ? ud.c(c) : ud.call(m, c)) ^ I.c(vd.c ? vd.c(c) : vd.call(m, c)))) % 4503599627370496, a = N(a)
    }else {
      return b
    }
  }
}
function wd(a, b, c, d, f) {
  this.l = a;
  this.Qa = b;
  this.ia = c;
  this.count = d;
  this.m = f;
  this.q = 0;
  this.h = 65413358
}
r = wd.prototype;
r.C = function(a) {
  var b = this.m;
  return b != m ? b : this.m = a = Qb(a)
};
r.la = function() {
  return 1 === this.count ? m : this.ia
};
r.H = function(a, b) {
  return new wd(this.l, b, a, this.count + 1, m)
};
r.toString = function() {
  return vb(this)
};
r.v = aa();
r.A = q("count");
r.O = q("Qa");
r.P = function() {
  return 1 === this.count ? M : this.ia
};
r.w = function(a, b) {
  return Sb(a, b)
};
r.F = function(a, b) {
  return new wd(b, this.Qa, this.ia, this.count, this.m)
};
r.D = q("l");
r.K = function() {
  return M
};
function xd(a) {
  this.l = a;
  this.q = 0;
  this.h = 65413326
}
r = xd.prototype;
r.C = ba(0);
r.la = ba(m);
r.H = function(a, b) {
  return new wd(this.l, b, m, 1, m)
};
r.toString = function() {
  return vb(this)
};
r.v = ba(m);
r.A = ba(0);
r.O = ba(m);
r.P = function() {
  return M
};
r.w = function(a, b) {
  return Sb(a, b)
};
r.F = function(a, b) {
  return new xd(b)
};
r.D = q("l");
r.K = aa();
var M = new xd(m), Rb;
function yd(a) {
  var b;
  if(a instanceof zb) {
    b = a.e
  }else {
    a: {
      for(b = [];;) {
        if(a != m) {
          b.push(a.O(a)), a = a.la(a)
        }else {
          break a
        }
      }
      b = h
    }
  }
  for(var a = b.length, c = M;;) {
    if(0 < a) {
      var d = a - 1, c = c.H(c, b[a - 1]), a = d
    }else {
      return c
    }
  }
}
function zd(a) {
  var b = m;
  0 < arguments.length && (b = R(Array.prototype.slice.call(arguments, 0), 0));
  return yd.call(this, b)
}
zd.n = 0;
zd.j = function(a) {
  a = J(a);
  return yd(a)
};
zd.g = yd;
Rb = zd;
function Ad(a, b, c, d) {
  this.l = a;
  this.Qa = b;
  this.ia = c;
  this.m = d;
  this.q = 0;
  this.h = 65405164
}
r = Ad.prototype;
r.C = function(a) {
  var b = this.m;
  return b != m ? b : this.m = a = Qb(a)
};
r.la = function() {
  return this.ia == m ? m : ib(this.ia)
};
r.H = function(a, b) {
  return new Ad(m, b, a, this.m)
};
r.toString = function() {
  return vb(this)
};
r.v = aa();
r.O = q("Qa");
r.P = function() {
  return this.ia == m ? M : this.ia
};
r.w = function(a, b) {
  return Sb(a, b)
};
r.F = function(a, b) {
  return new Ad(b, this.Qa, this.ia, this.m)
};
r.D = q("l");
r.K = function() {
  return xc(M, this.l)
};
function S(a, b) {
  var c = b == m;
  if(!c && (c = b)) {
    c = (c = b.h & 64) ? c : b.yb
  }
  return c ? new Ad(m, a, b, m) : new Ad(m, a, J(b), m)
}
Aa.string = l;
Ba.string = function(a) {
  return a.length
};
gb.string = function(a) {
  return ma(a)
};
function X(a) {
  this.Ib = a;
  this.q = 0;
  this.h = 1
}
var Bd = m, Bd = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      var d;
      d = a;
      d = this;
      if(b == m) {
        d = m
      }else {
        var f = b.ua;
        d = f == m ? Ka.b(b, d.Ib, m) : f[d.Ib]
      }
      return d;
    case 3:
      return b == m ? c : Ka.b(b, this.Ib, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
X.prototype.call = Bd;
X.prototype.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
var Cd = m, Cd = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return W.a(b, this.toString());
    case 3:
      return W.b(b, this.toString(), c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
String.prototype.call = Cd;
String.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
String.prototype.apply = function(a, b) {
  return 2 > b.length ? W.a(b[0], a) : W.b(b[0], a, b[1])
};
function Dd(a) {
  var b = a.x;
  if(a.Mb) {
    return b
  }
  a.x = b.B ? b.B() : b.call(m);
  a.Mb = l;
  return a.x
}
function Ed(a, b, c, d) {
  this.l = a;
  this.Mb = b;
  this.x = c;
  this.m = d;
  this.q = 0;
  this.h = 31850700
}
r = Ed.prototype;
r.C = function(a) {
  var b = this.m;
  return b != m ? b : this.m = a = Qb(a)
};
r.la = function(a) {
  return ib(a.P(a))
};
r.H = function(a, b) {
  return S(b, a)
};
r.toString = function() {
  return vb(this)
};
r.v = function(a) {
  return J(Dd(a))
};
r.O = function(a) {
  return K(Dd(a))
};
r.P = function(a) {
  return L(Dd(a))
};
r.w = function(a, b) {
  return Sb(a, b)
};
r.F = function(a, b) {
  return new Ed(b, this.Mb, this.x, this.m)
};
r.D = q("l");
r.K = function() {
  return xc(M, this.l)
};
function Fd(a, b) {
  this.ib = a;
  this.end = b;
  this.q = 0;
  this.h = 2
}
Fd.prototype.A = q("end");
Fd.prototype.add = function(a) {
  this.ib[this.end] = a;
  return this.end += 1
};
Fd.prototype.ja = function() {
  var a = new Gd(this.ib, 0, this.end);
  this.ib = m;
  return a
};
function Gd(a, b, c) {
  this.e = a;
  this.J = b;
  this.end = c;
  this.q = 0;
  this.h = 524306
}
r = Gd.prototype;
r.ya = function(a, b) {
  return Jb.o(this.e, b, this.e[this.J], this.J + 1)
};
r.za = function(a, b, c) {
  return Jb.o(this.e, b, c, this.J)
};
r.Pb = function() {
  this.J === this.end && e(Error("-drop-first of empty chunk"));
  return new Gd(this.e, this.J + 1, this.end)
};
r.t = function(a, b) {
  return this.e[this.J + b]
};
r.R = function(a, b, c) {
  return((a = 0 <= b) ? b < this.end - this.J : a) ? this.e[this.J + b] : c
};
r.A = function() {
  return this.end - this.J
};
var Hd, Id = m;
function Jd(a) {
  return new Gd(a, 0, a.length)
}
function Kd(a, b) {
  return new Gd(a, b, a.length)
}
function Ld(a, b, c) {
  return new Gd(a, b, c)
}
Id = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return Jd.call(this, a);
    case 2:
      return Kd.call(this, a, b);
    case 3:
      return Ld.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Id.c = Jd;
Id.a = Kd;
Id.b = Ld;
Hd = Id;
function Gc(a, b, c, d) {
  this.ja = a;
  this.qa = b;
  this.l = c;
  this.m = d;
  this.h = 31850604;
  this.q = 1536
}
r = Gc.prototype;
r.C = function(a) {
  var b = this.m;
  return b != m ? b : this.m = a = Qb(a)
};
r.H = function(a, b) {
  return S(b, a)
};
r.toString = function() {
  return vb(this)
};
r.v = aa();
r.O = function() {
  return z.a(this.ja, 0)
};
r.P = function() {
  return 1 < Ba(this.ja) ? new Gc(rb(this.ja), this.qa, this.l, m) : this.qa == m ? M : this.qa
};
r.Qb = function() {
  return this.qa == m ? m : this.qa
};
r.w = function(a, b) {
  return Sb(a, b)
};
r.F = function(a, b) {
  return new Gc(this.ja, this.qa, b, this.m)
};
r.D = q("l");
r.K = function() {
  return xc(M, this.l)
};
r.jb = q("ja");
r.Xa = function() {
  return this.qa == m ? M : this.qa
};
function Md(a, b) {
  return 0 === Ba(a) ? b : new Gc(a, b, m, m)
}
function Nd(a) {
  for(var b = [];;) {
    if(J(a)) {
      b.push(K(a)), a = N(a)
    }else {
      return b
    }
  }
}
function Od(a, b) {
  if(Ob(a)) {
    return U(a)
  }
  for(var c = a, d = b, f = 0;;) {
    var g;
    g = (g = 0 < d) ? J(c) : g;
    if(u(g)) {
      c = N(c), d -= 1, f += 1
    }else {
      return f
    }
  }
}
var Qd = function Pd(b) {
  return b == m ? m : N(b) == m ? J(K(b)) : S(K(b), Pd(N(b)))
}, Rd, Sd = m;
function Td() {
  return new Ed(m, n, ba(m), m)
}
function Ud(a) {
  return new Ed(m, n, function() {
    return a
  }, m)
}
function Vd(a, b) {
  return new Ed(m, n, function() {
    var c = J(a);
    return c ? Fc(c) ? Md(sb(c), Sd.a(tb(c), b)) : S(K(c), Sd.a(L(c), b)) : b
  }, m)
}
function Wd(a, b, c) {
  return function f(a, b) {
    return new Ed(m, n, function() {
      var c = J(a);
      return c ? Fc(c) ? Md(sb(c), f(tb(c), b)) : S(K(c), f(L(c), b)) : u(b) ? f(K(b), N(b)) : m
    }, m)
  }(Sd.a(a, b), c)
}
function Xd(a, b, c) {
  var d = m;
  2 < arguments.length && (d = R(Array.prototype.slice.call(arguments, 2), 0));
  return Wd.call(this, a, b, d)
}
Xd.n = 2;
Xd.j = function(a) {
  var b = K(a), a = N(a), c = K(a), a = L(a);
  return Wd(b, c, a)
};
Xd.g = Wd;
Sd = function(a, b, c) {
  switch(arguments.length) {
    case 0:
      return Td.call(this);
    case 1:
      return Ud.call(this, a);
    case 2:
      return Vd.call(this, a, b);
    default:
      return Xd.g(a, b, R(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Sd.n = 2;
Sd.j = Xd.j;
Sd.B = Td;
Sd.c = Ud;
Sd.a = Vd;
Sd.g = Xd.g;
Rd = Sd;
var Yd, Zd = m;
function $d(a, b, c) {
  return S(a, S(b, c))
}
function ae(a, b, c, d) {
  return S(a, S(b, S(c, d)))
}
function be(a, b, c, d, f) {
  return S(a, S(b, S(c, S(d, Qd(f)))))
}
function ce(a, b, c, d, f) {
  var g = m;
  4 < arguments.length && (g = R(Array.prototype.slice.call(arguments, 4), 0));
  return be.call(this, a, b, c, d, g)
}
ce.n = 4;
ce.j = function(a) {
  var b = K(a), a = N(a), c = K(a), a = N(a), d = K(a), a = N(a), f = K(a), a = L(a);
  return be(b, c, d, f, a)
};
ce.g = be;
Zd = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 1:
      return J(a);
    case 2:
      return S(a, b);
    case 3:
      return $d.call(this, a, b, c);
    case 4:
      return ae.call(this, a, b, c, d);
    default:
      return ce.g(a, b, c, d, R(arguments, 4))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Zd.n = 4;
Zd.j = ce.j;
Zd.c = function(a) {
  return J(a)
};
Zd.a = function(a, b) {
  return S(a, b)
};
Zd.b = $d;
Zd.o = ae;
Zd.g = ce.g;
Yd = Zd;
function de(a, b, c) {
  var d = J(c);
  if(0 === b) {
    return a.B ? a.B() : a.call(m)
  }
  var c = E(d), f = F(d);
  if(1 === b) {
    return a.c ? a.c(c) : a.c ? a.c(c) : a.call(m, c)
  }
  var d = E(f), g = F(f);
  if(2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(m, c, d)
  }
  var f = E(g), i = F(g);
  if(3 === b) {
    return a.b ? a.b(c, d, f) : a.b ? a.b(c, d, f) : a.call(m, c, d, f)
  }
  var g = E(i), j = F(i);
  if(4 === b) {
    return a.o ? a.o(c, d, f, g) : a.o ? a.o(c, d, f, g) : a.call(m, c, d, f, g)
  }
  i = E(j);
  j = F(j);
  if(5 === b) {
    return a.Q ? a.Q(c, d, f, g, i) : a.Q ? a.Q(c, d, f, g, i) : a.call(m, c, d, f, g, i)
  }
  var a = E(j), k = F(j);
  if(6 === b) {
    return a.Y ? a.Y(c, d, f, g, i, a) : a.Y ? a.Y(c, d, f, g, i, a) : a.call(m, c, d, f, g, i, a)
  }
  var j = E(k), p = F(k);
  if(7 === b) {
    return a.xa ? a.xa(c, d, f, g, i, a, j) : a.xa ? a.xa(c, d, f, g, i, a, j) : a.call(m, c, d, f, g, i, a, j)
  }
  var k = E(p), t = F(p);
  if(8 === b) {
    return a.wb ? a.wb(c, d, f, g, i, a, j, k) : a.wb ? a.wb(c, d, f, g, i, a, j, k) : a.call(m, c, d, f, g, i, a, j, k)
  }
  var p = E(t), x = F(t);
  if(9 === b) {
    return a.xb ? a.xb(c, d, f, g, i, a, j, k, p) : a.xb ? a.xb(c, d, f, g, i, a, j, k, p) : a.call(m, c, d, f, g, i, a, j, k, p)
  }
  var t = E(x), A = F(x);
  if(10 === b) {
    return a.lb ? a.lb(c, d, f, g, i, a, j, k, p, t) : a.lb ? a.lb(c, d, f, g, i, a, j, k, p, t) : a.call(m, c, d, f, g, i, a, j, k, p, t)
  }
  var x = E(A), D = F(A);
  if(11 === b) {
    return a.mb ? a.mb(c, d, f, g, i, a, j, k, p, t, x) : a.mb ? a.mb(c, d, f, g, i, a, j, k, p, t, x) : a.call(m, c, d, f, g, i, a, j, k, p, t, x)
  }
  var A = E(D), B = F(D);
  if(12 === b) {
    return a.nb ? a.nb(c, d, f, g, i, a, j, k, p, t, x, A) : a.nb ? a.nb(c, d, f, g, i, a, j, k, p, t, x, A) : a.call(m, c, d, f, g, i, a, j, k, p, t, x, A)
  }
  var D = E(B), P = F(B);
  if(13 === b) {
    return a.ob ? a.ob(c, d, f, g, i, a, j, k, p, t, x, A, D) : a.ob ? a.ob(c, d, f, g, i, a, j, k, p, t, x, A, D) : a.call(m, c, d, f, g, i, a, j, k, p, t, x, A, D)
  }
  var B = E(P), C = F(P);
  if(14 === b) {
    return a.pb ? a.pb(c, d, f, g, i, a, j, k, p, t, x, A, D, B) : a.pb ? a.pb(c, d, f, g, i, a, j, k, p, t, x, A, D, B) : a.call(m, c, d, f, g, i, a, j, k, p, t, x, A, D, B)
  }
  var P = E(C), Q = F(C);
  if(15 === b) {
    return a.qb ? a.qb(c, d, f, g, i, a, j, k, p, t, x, A, D, B, P) : a.qb ? a.qb(c, d, f, g, i, a, j, k, p, t, x, A, D, B, P) : a.call(m, c, d, f, g, i, a, j, k, p, t, x, A, D, B, P)
  }
  var C = E(Q), Ia = F(Q);
  if(16 === b) {
    return a.rb ? a.rb(c, d, f, g, i, a, j, k, p, t, x, A, D, B, P, C) : a.rb ? a.rb(c, d, f, g, i, a, j, k, p, t, x, A, D, B, P, C) : a.call(m, c, d, f, g, i, a, j, k, p, t, x, A, D, B, P, C)
  }
  var Q = E(Ia), lb = F(Ia);
  if(17 === b) {
    return a.sb ? a.sb(c, d, f, g, i, a, j, k, p, t, x, A, D, B, P, C, Q) : a.sb ? a.sb(c, d, f, g, i, a, j, k, p, t, x, A, D, B, P, C, Q) : a.call(m, c, d, f, g, i, a, j, k, p, t, x, A, D, B, P, C, Q)
  }
  var Ia = E(lb), sd = F(lb);
  if(18 === b) {
    return a.tb ? a.tb(c, d, f, g, i, a, j, k, p, t, x, A, D, B, P, C, Q, Ia) : a.tb ? a.tb(c, d, f, g, i, a, j, k, p, t, x, A, D, B, P, C, Q, Ia) : a.call(m, c, d, f, g, i, a, j, k, p, t, x, A, D, B, P, C, Q, Ia)
  }
  lb = E(sd);
  sd = F(sd);
  if(19 === b) {
    return a.ub ? a.ub(c, d, f, g, i, a, j, k, p, t, x, A, D, B, P, C, Q, Ia, lb) : a.ub ? a.ub(c, d, f, g, i, a, j, k, p, t, x, A, D, B, P, C, Q, Ia, lb) : a.call(m, c, d, f, g, i, a, j, k, p, t, x, A, D, B, P, C, Q, Ia, lb)
  }
  var wf = E(sd);
  F(sd);
  if(20 === b) {
    return a.vb ? a.vb(c, d, f, g, i, a, j, k, p, t, x, A, D, B, P, C, Q, Ia, lb, wf) : a.vb ? a.vb(c, d, f, g, i, a, j, k, p, t, x, A, D, B, P, C, Q, Ia, lb, wf) : a.call(m, c, d, f, g, i, a, j, k, p, t, x, A, D, B, P, C, Q, Ia, lb, wf)
  }
  e(Error("Only up to 20 arguments supported on functions"))
}
var wc, ee = m;
function fe(a, b) {
  var c = a.n;
  if(a.j) {
    var d = Od(b, c + 1);
    return d <= c ? de(a, d, b) : a.j(b)
  }
  return a.apply(a, Nd(b))
}
function ge(a, b, c) {
  b = Yd.a(b, c);
  c = a.n;
  if(a.j) {
    var d = Od(b, c + 1);
    return d <= c ? de(a, d, b) : a.j(b)
  }
  return a.apply(a, Nd(b))
}
function he(a, b, c, d) {
  b = Yd.b(b, c, d);
  c = a.n;
  return a.j ? (d = Od(b, c + 1), d <= c ? de(a, d, b) : a.j(b)) : a.apply(a, Nd(b))
}
function ie(a, b, c, d, f) {
  b = Yd.o(b, c, d, f);
  c = a.n;
  return a.j ? (d = Od(b, c + 1), d <= c ? de(a, d, b) : a.j(b)) : a.apply(a, Nd(b))
}
function je(a, b, c, d, f, g) {
  b = S(b, S(c, S(d, S(f, Qd(g)))));
  c = a.n;
  return a.j ? (d = Od(b, c + 1), d <= c ? de(a, d, b) : a.j(b)) : a.apply(a, Nd(b))
}
function ke(a, b, c, d, f, g) {
  var i = m;
  5 < arguments.length && (i = R(Array.prototype.slice.call(arguments, 5), 0));
  return je.call(this, a, b, c, d, f, i)
}
ke.n = 5;
ke.j = function(a) {
  var b = K(a), a = N(a), c = K(a), a = N(a), d = K(a), a = N(a), f = K(a), a = N(a), g = K(a), a = L(a);
  return je(b, c, d, f, g, a)
};
ke.g = je;
ee = function(a, b, c, d, f, g) {
  switch(arguments.length) {
    case 2:
      return fe.call(this, a, b);
    case 3:
      return ge.call(this, a, b, c);
    case 4:
      return he.call(this, a, b, c, d);
    case 5:
      return ie.call(this, a, b, c, d, f);
    default:
      return ke.g(a, b, c, d, f, R(arguments, 5))
  }
  e(Error("Invalid arity: " + arguments.length))
};
ee.n = 5;
ee.j = ke.j;
ee.a = fe;
ee.b = ge;
ee.o = he;
ee.Q = ie;
ee.g = ke.g;
wc = ee;
var le, me = m;
function ne(a, b) {
  return!O.a(a, b)
}
function oe(a, b, c) {
  return v(wc.o(O, a, b, c))
}
function pe(a, b, c) {
  var d = m;
  2 < arguments.length && (d = R(Array.prototype.slice.call(arguments, 2), 0));
  return oe.call(this, a, b, d)
}
pe.n = 2;
pe.j = function(a) {
  var b = K(a), a = N(a), c = K(a), a = L(a);
  return oe(b, c, a)
};
pe.g = oe;
me = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return n;
    case 2:
      return ne.call(this, a, b);
    default:
      return pe.g(a, b, R(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
me.n = 2;
me.j = pe.j;
me.c = ba(n);
me.a = ne;
me.g = pe.g;
le = me;
function qe(a, b) {
  for(;;) {
    if(J(b) == m) {
      return l
    }
    if(u(a.c ? a.c(K(b)) : a.call(m, K(b)))) {
      var c = a, d = N(b), a = c, b = d
    }else {
      return n
    }
  }
}
function re(a) {
  return a
}
function se() {
  function a(a, c, g) {
    var i = m;
    2 < arguments.length && (i = R(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, c, i)
  }
  function b(a, b, c) {
    return v(wc.o(xa, a, b, c))
  }
  var c = m;
  a.n = 2;
  a.j = function(a) {
    var c = K(a), a = N(a), g = K(a), a = L(a);
    return b(c, g, a)
  };
  a.g = b;
  c = function(b, c, g) {
    switch(arguments.length) {
      case 0:
        return v(xa.B ? xa.B() : xa.call(m));
      case 1:
        return v(xa.c ? xa.c(b) : xa.call(m, b));
      case 2:
        return v(xa.a ? xa.a(b, c) : xa.call(m, b));
      default:
        return a.g(b, c, R(arguments, 2))
    }
    e(Error("Invalid arity: " + arguments.length))
  };
  c.n = 2;
  c.j = a.j;
  return c
}
var te, ue = m;
function ve(a, b) {
  function c(a) {
    var b = m;
    0 < arguments.length && (b = R(Array.prototype.slice.call(arguments, 0), 0));
    return d.call(this, b)
  }
  function d(c) {
    return wc.b(a, b, c)
  }
  c.n = 0;
  c.j = function(a) {
    a = J(a);
    return d(a)
  };
  c.g = d;
  return c
}
function we(a, b, c) {
  function d(a) {
    var b = m;
    0 < arguments.length && (b = R(Array.prototype.slice.call(arguments, 0), 0));
    return f.call(this, b)
  }
  function f(d) {
    return wc.o(a, b, c, d)
  }
  d.n = 0;
  d.j = function(a) {
    a = J(a);
    return f(a)
  };
  d.g = f;
  return d
}
function xe(a, b, c, d) {
  function f(a) {
    var b = m;
    0 < arguments.length && (b = R(Array.prototype.slice.call(arguments, 0), 0));
    return g.call(this, b)
  }
  function g(f) {
    return wc.Q(a, b, c, d, f)
  }
  f.n = 0;
  f.j = function(a) {
    a = J(a);
    return g(a)
  };
  f.g = g;
  return f
}
function ye(a, b, c, d, f) {
  function g(a) {
    var b = m;
    0 < arguments.length && (b = R(Array.prototype.slice.call(arguments, 0), 0));
    return i.call(this, b)
  }
  function i(g) {
    return wc.Q(a, b, c, d, Rd.a(f, g))
  }
  g.n = 0;
  g.j = function(a) {
    a = J(a);
    return i(a)
  };
  g.g = i;
  return g
}
function ze(a, b, c, d, f) {
  var g = m;
  4 < arguments.length && (g = R(Array.prototype.slice.call(arguments, 4), 0));
  return ye.call(this, a, b, c, d, g)
}
ze.n = 4;
ze.j = function(a) {
  var b = K(a), a = N(a), c = K(a), a = N(a), d = K(a), a = N(a), f = K(a), a = L(a);
  return ye(b, c, d, f, a)
};
ze.g = ye;
ue = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 2:
      return ve.call(this, a, b);
    case 3:
      return we.call(this, a, b, c);
    case 4:
      return xe.call(this, a, b, c, d);
    default:
      return ze.g(a, b, c, d, R(arguments, 4))
  }
  e(Error("Invalid arity: " + arguments.length))
};
ue.n = 4;
ue.j = ze.j;
ue.a = ve;
ue.b = we;
ue.o = xe;
ue.g = ze.g;
te = ue;
var Ae, Be = m;
function Ce(a, b) {
  return new Ed(m, n, function() {
    var c = J(b);
    if(c) {
      if(Fc(c)) {
        for(var d = sb(c), f = U(d), g = new Fd(Array(f), 0), i = 0;;) {
          if(i < f) {
            var j = a.c ? a.c(z.a(d, i)) : a.call(m, z.a(d, i));
            g.add(j);
            i += 1
          }else {
            break
          }
        }
        return Md(g.ja(), Be.a(a, tb(c)))
      }
      return S(a.c ? a.c(K(c)) : a.call(m, K(c)), Be.a(a, L(c)))
    }
    return m
  }, m)
}
function De(a, b, c) {
  return new Ed(m, n, function() {
    var d = J(b), f = J(c);
    return(d ? f : d) ? S(a.a ? a.a(K(d), K(f)) : a.call(m, K(d), K(f)), Be.b(a, L(d), L(f))) : m
  }, m)
}
function Ee(a, b, c, d) {
  return new Ed(m, n, function() {
    var f = J(b), g = J(c), i = J(d);
    return(f ? g ? i : g : f) ? S(a.b ? a.b(K(f), K(g), K(i)) : a.call(m, K(f), K(g), K(i)), Be.o(a, L(f), L(g), L(i))) : m
  }, m)
}
function Fe(a, b, c, d, f) {
  return Be.a(function(b) {
    return wc.a(a, b)
  }, function i(a) {
    return new Ed(m, n, function() {
      var b = Be.a(J, a);
      return qe(re, b) ? S(Be.a(K, b), i(Be.a(L, b))) : m
    }, m)
  }(T.g(f, d, R([c, b], 0))))
}
function Ge(a, b, c, d, f) {
  var g = m;
  4 < arguments.length && (g = R(Array.prototype.slice.call(arguments, 4), 0));
  return Fe.call(this, a, b, c, d, g)
}
Ge.n = 4;
Ge.j = function(a) {
  var b = K(a), a = N(a), c = K(a), a = N(a), d = K(a), a = N(a), f = K(a), a = L(a);
  return Fe(b, c, d, f, a)
};
Ge.g = Fe;
Be = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 2:
      return Ce.call(this, a, b);
    case 3:
      return De.call(this, a, b, c);
    case 4:
      return Ee.call(this, a, b, c, d);
    default:
      return Ge.g(a, b, c, d, R(arguments, 4))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Be.n = 4;
Be.j = Ge.j;
Be.a = Ce;
Be.b = De;
Be.o = Ee;
Be.g = Ge.g;
Ae = Be;
var Ie = function He(b, c) {
  return new Ed(m, n, function() {
    if(0 < b) {
      var d = J(c);
      return d ? S(K(d), He(b - 1, L(d))) : m
    }
    return m
  }, m)
};
function Je(a) {
  return Y([Ie(8, a), new Ed(m, n, function() {
    var b;
    a: {
      b = 8;
      for(var c = a;;) {
        var c = J(c), d = 0 < b;
        if(u(d ? c : d)) {
          b -= 1, c = L(c)
        }else {
          b = c;
          break a
        }
      }
      b = h
    }
    return b
  }, m)])
}
var Ke, Le = m;
function Me(a) {
  return new Ed(m, n, function() {
    return S(a.B ? a.B() : a.call(m), Le.c(a))
  }, m)
}
function Ne(a, b) {
  return Ie(a, Le.c(b))
}
Le = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Me.call(this, a);
    case 2:
      return Ne.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Le.c = Me;
Le.a = Ne;
Ke = Le;
function Oe(a) {
  return function c(a, f) {
    return new Ed(m, n, function() {
      var g = J(a);
      return g ? S(K(g), c(L(g), f)) : J(f) ? c(K(f), L(f)) : m
    }, m)
  }(m, a)
}
var Pe, Qe = m;
function Re(a, b) {
  return Oe(Ae.a(a, b))
}
function Se(a, b, c) {
  return Oe(wc.o(Ae, a, b, c))
}
function Te(a, b, c) {
  var d = m;
  2 < arguments.length && (d = R(Array.prototype.slice.call(arguments, 2), 0));
  return Se.call(this, a, b, d)
}
Te.n = 2;
Te.j = function(a) {
  var b = K(a), a = N(a), c = K(a), a = L(a);
  return Se(b, c, a)
};
Te.g = Se;
Qe = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Re.call(this, a, b);
    default:
      return Te.g(a, b, R(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Qe.n = 2;
Qe.j = Te.j;
Qe.a = Re;
Qe.g = Te.g;
Pe = Qe;
var Ve = function Ue(b, c) {
  return new Ed(m, n, function() {
    var d = J(c);
    if(d) {
      if(Fc(d)) {
        for(var f = sb(d), g = U(f), i = new Fd(Array(g), 0), j = 0;;) {
          if(j < g) {
            if(u(b.c ? b.c(z.a(f, j)) : b.call(m, z.a(f, j)))) {
              var k = z.a(f, j);
              i.add(k)
            }
            j += 1
          }else {
            break
          }
        }
        return Md(i.ja(), Ue(b, tb(d)))
      }
      f = K(d);
      d = L(d);
      return u(b.c ? b.c(f) : b.call(m, f)) ? S(f, Ue(b, d)) : Ue(b, d)
    }
    return m
  }, m)
};
function We(a, b) {
  var c;
  if(a != m) {
    if(c = a) {
      c = (c = a.q & 4) ? c : a.Dc
    }
    c ? (c = Wc.b(ob, nb(a), b), c = pb(c)) : c = Wc.b(Ca, a, b)
  }else {
    c = Wc.b(T, M, b)
  }
  return c
}
var Xe, Ye = m;
function Ze(a, b, c) {
  var d = V.b(b, 0, m), b = cd(b);
  return u(b) ? oc.b(a, d, Ye.b(W.a(a, d), b, c)) : oc.b(a, d, c.c ? c.c(W.a(a, d)) : c.call(m, W.a(a, d)))
}
function $e(a, b, c, d) {
  var f = V.b(b, 0, m), b = cd(b);
  return u(b) ? oc.b(a, f, Ye.o(W.a(a, f), b, c, d)) : oc.b(a, f, c.a ? c.a(W.a(a, f), d) : c.call(m, W.a(a, f), d))
}
function af(a, b, c, d, f) {
  var g = V.b(b, 0, m), b = cd(b);
  return u(b) ? oc.b(a, g, Ye.Q(W.a(a, g), b, c, d, f)) : oc.b(a, g, c.b ? c.b(W.a(a, g), d, f) : c.call(m, W.a(a, g), d, f))
}
function bf(a, b, c, d, f, g) {
  var i = V.b(b, 0, m), b = cd(b);
  return u(b) ? oc.b(a, i, Ye.Y(W.a(a, i), b, c, d, f, g)) : oc.b(a, i, c.o ? c.o(W.a(a, i), d, f, g) : c.call(m, W.a(a, i), d, f, g))
}
function cf(a, b, c, d, f, g, i) {
  var j = V.b(b, 0, m), b = cd(b);
  return u(b) ? oc.b(a, j, wc.g(Ye, W.a(a, j), b, c, d, R([f, g, i], 0))) : oc.b(a, j, wc.g(c, W.a(a, j), d, f, g, R([i], 0)))
}
function df(a, b, c, d, f, g, i) {
  var j = m;
  6 < arguments.length && (j = R(Array.prototype.slice.call(arguments, 6), 0));
  return cf.call(this, a, b, c, d, f, g, j)
}
df.n = 6;
df.j = function(a) {
  var b = K(a), a = N(a), c = K(a), a = N(a), d = K(a), a = N(a), f = K(a), a = N(a), g = K(a), a = N(a), i = K(a), a = L(a);
  return cf(b, c, d, f, g, i, a)
};
df.g = cf;
Ye = function(a, b, c, d, f, g, i) {
  switch(arguments.length) {
    case 3:
      return Ze.call(this, a, b, c);
    case 4:
      return $e.call(this, a, b, c, d);
    case 5:
      return af.call(this, a, b, c, d, f);
    case 6:
      return bf.call(this, a, b, c, d, f, g);
    default:
      return df.g(a, b, c, d, f, g, R(arguments, 6))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ye.n = 6;
Ye.j = df.j;
Ye.b = Ze;
Ye.o = $e;
Ye.Q = af;
Ye.Y = bf;
Ye.g = df.g;
Xe = Ye;
function ef(a, b) {
  this.r = a;
  this.e = b
}
function ff(a) {
  a = a.k;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function gf(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var d = new ef(a, Array(32));
    d.e[0] = c;
    c = d;
    b -= 5
  }
}
var jf = function hf(b, c, d, f) {
  var g = new ef(d.r, d.e.slice()), i = b.k - 1 >>> c & 31;
  5 === c ? g.e[i] = f : (d = d.e[i], b = d != m ? hf(b, c - 5, d, f) : gf(m, c - 5, f), g.e[i] = b);
  return g
};
function kf(a, b) {
  var c = 0 <= b;
  if(c ? b < a.k : c) {
    if(b >= ff(a)) {
      return a.N
    }
    for(var c = a.root, d = a.shift;;) {
      if(0 < d) {
        var f = d - 5, c = c.e[b >>> d & 31], d = f
      }else {
        return c.e
      }
    }
  }else {
    e(Error([H("No item "), H(b), H(" in vector of length "), H(a.k)].join("")))
  }
}
var mf = function lf(b, c, d, f, g) {
  var i = new ef(d.r, d.e.slice());
  if(0 === c) {
    i.e[f & 31] = g
  }else {
    var j = f >>> c & 31, b = lf(b, c - 5, d.e[j], f, g);
    i.e[j] = b
  }
  return i
};
function nf(a, b, c, d, f, g) {
  this.l = a;
  this.k = b;
  this.shift = c;
  this.root = d;
  this.N = f;
  this.m = g;
  this.q = 4;
  this.h = 167668511
}
r = nf.prototype;
r.wa = function() {
  return new of(this.k, this.shift, pf.c ? pf.c(this.root) : pf.call(m, this.root), qf.c ? qf.c(this.N) : qf.call(m, this.N))
};
r.C = function(a) {
  var b = this.m;
  return b != m ? b : this.m = a = Qb(a)
};
r.L = function(a, b) {
  return a.R(a, b, m)
};
r.z = function(a, b, c) {
  return a.R(a, b, c)
};
r.ka = function(a, b, c) {
  var d = 0 <= b;
  if(d ? b < this.k : d) {
    return ff(a) <= b ? (a = this.N.slice(), a[b & 31] = c, new nf(this.l, this.k, this.shift, this.root, a, m)) : new nf(this.l, this.k, this.shift, mf(a, this.shift, this.root, b, c), this.N, m)
  }
  if(b === this.k) {
    return a.H(a, c)
  }
  e(Error([H("Index "), H(b), H(" out of bounds  [0,"), H(this.k), H("]")].join("")))
};
var rf = m, rf = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.L(this, b);
    case 3:
      return this.z(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = nf.prototype;
r.call = rf;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.H = function(a, b) {
  if(32 > this.k - ff(a)) {
    var c = this.N.slice();
    c.push(b);
    return new nf(this.l, this.k + 1, this.shift, this.root, c, m)
  }
  var d = this.k >>> 5 > 1 << this.shift, c = d ? this.shift + 5 : this.shift;
  if(d) {
    d = new ef(m, Array(32));
    d.e[0] = this.root;
    var f = gf(m, this.shift, new ef(m, this.N));
    d.e[1] = f
  }else {
    d = jf(a, this.shift, this.root, new ef(m, this.N))
  }
  return new nf(this.l, this.k + 1, c, d, [b], m)
};
r.Rb = function(a) {
  return a.t(a, 0)
};
r.Sb = function(a) {
  return a.t(a, 1)
};
r.toString = function() {
  return vb(this)
};
r.ya = function(a, b) {
  return Eb.a(a, b)
};
r.za = function(a, b, c) {
  return Eb.b(a, b, c)
};
r.v = function(a) {
  return 0 === this.k ? m : 32 > this.k ? R.c(this.N) : sf.b ? sf.b(a, 0, 0) : sf.call(m, a, 0, 0)
};
r.A = q("k");
r.w = function(a, b) {
  return Sb(a, b)
};
r.F = function(a, b) {
  return new nf(b, this.k, this.shift, this.root, this.N, this.m)
};
r.D = q("l");
r.t = function(a, b) {
  return kf(a, b)[b & 31]
};
r.R = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.k : d) ? a.t(a, b) : c
};
r.K = function() {
  return xc(tf, this.l)
};
var uf = new ef(m, Array(32)), tf = new nf(m, 0, 5, uf, [], 0);
function Y(a) {
  var b = a.length;
  if(32 > b) {
    return new nf(m, b, 5, uf, a, m)
  }
  for(var c = a.slice(0, 32), d = 32, f = nb(new nf(m, 32, 5, uf, c, m));;) {
    if(d < b) {
      c = d + 1, f = ob(f, a[d]), d = c
    }else {
      return pb(f)
    }
  }
}
function vf(a) {
  return pb(Wc.b(ob, nb(tf), a))
}
function xf(a) {
  var b = m;
  0 < arguments.length && (b = R(Array.prototype.slice.call(arguments, 0), 0));
  return vf(b)
}
xf.n = 0;
xf.j = function(a) {
  a = J(a);
  return vf(a)
};
xf.g = function(a) {
  return vf(a)
};
function Hc(a, b, c, d, f, g) {
  this.X = a;
  this.V = b;
  this.p = c;
  this.J = d;
  this.l = f;
  this.m = g;
  this.h = 31719660;
  this.q = 1536
}
r = Hc.prototype;
r.C = function(a) {
  var b = this.m;
  return b != m ? b : this.m = a = Qb(a)
};
r.la = function(a) {
  return this.J + 1 < this.V.length ? (a = sf.o ? sf.o(this.X, this.V, this.p, this.J + 1) : sf.call(m, this.X, this.V, this.p, this.J + 1), a == m ? m : a) : a.Qb(a)
};
r.H = function(a, b) {
  return S(b, a)
};
r.toString = function() {
  return vb(this)
};
r.v = aa();
r.O = function() {
  return this.V[this.J]
};
r.P = function(a) {
  return this.J + 1 < this.V.length ? (a = sf.o ? sf.o(this.X, this.V, this.p, this.J + 1) : sf.call(m, this.X, this.V, this.p, this.J + 1), a == m ? M : a) : a.Xa(a)
};
r.Qb = function() {
  var a = this.V.length, a = this.p + a < Ba(this.X) ? sf.b ? sf.b(this.X, this.p + a, 0) : sf.call(m, this.X, this.p + a, 0) : m;
  return a == m ? m : a
};
r.w = function(a, b) {
  return Sb(a, b)
};
r.F = function(a, b) {
  return sf.Q ? sf.Q(this.X, this.V, this.p, this.J, b) : sf.call(m, this.X, this.V, this.p, this.J, b)
};
r.K = function() {
  return xc(tf, this.l)
};
r.jb = function() {
  return Hd.a(this.V, this.J)
};
r.Xa = function() {
  var a = this.V.length, a = this.p + a < Ba(this.X) ? sf.b ? sf.b(this.X, this.p + a, 0) : sf.call(m, this.X, this.p + a, 0) : m;
  return a == m ? M : a
};
var sf, yf = m;
function zf(a, b, c) {
  return new Hc(a, kf(a, b), b, c, m, m)
}
function Af(a, b, c, d) {
  return new Hc(a, b, c, d, m, m)
}
function Bf(a, b, c, d, f) {
  return new Hc(a, b, c, d, f, m)
}
yf = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 3:
      return zf.call(this, a, b, c);
    case 4:
      return Af.call(this, a, b, c, d);
    case 5:
      return Bf.call(this, a, b, c, d, f)
  }
  e(Error("Invalid arity: " + arguments.length))
};
yf.b = zf;
yf.o = Af;
yf.Q = Bf;
sf = yf;
function pf(a) {
  return new ef({}, a.e.slice())
}
function qf(a) {
  var b = Array(32);
  Ic(a, 0, b, 0, a.length);
  return b
}
var Df = function Cf(b, c, d, f) {
  var d = b.root.r === d.r ? d : new ef(b.root.r, d.e.slice()), g = b.k - 1 >>> c & 31;
  if(5 === c) {
    b = f
  }else {
    var i = d.e[g], b = i != m ? Cf(b, c - 5, i, f) : gf(b.root.r, c - 5, f)
  }
  d.e[g] = b;
  return d
};
function of(a, b, c, d) {
  this.k = a;
  this.shift = b;
  this.root = c;
  this.N = d;
  this.h = 275;
  this.q = 88
}
var Ef = m, Ef = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.L(this, b);
    case 3:
      return this.z(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = of.prototype;
r.call = Ef;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.L = function(a, b) {
  return a.R(a, b, m)
};
r.z = function(a, b, c) {
  return a.R(a, b, c)
};
r.t = function(a, b) {
  if(this.root.r) {
    return kf(a, b)[b & 31]
  }
  e(Error("nth after persistent!"))
};
r.R = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.k : d) ? a.t(a, b) : c
};
r.A = function() {
  if(this.root.r) {
    return this.k
  }
  e(Error("count after persistent!"))
};
r.Ba = function(a, b, c) {
  var d;
  a: {
    if(a.root.r) {
      var f = 0 <= b;
      if(f ? b < a.k : f) {
        ff(a) <= b ? a.N[b & 31] = c : (d = function i(d, f) {
          var p = a.root.r === f.r ? f : new ef(a.root.r, f.e.slice());
          if(0 === d) {
            p.e[b & 31] = c
          }else {
            var t = b >>> d & 31, x = i(d - 5, p.e[t]);
            p.e[t] = x
          }
          return p
        }.call(m, a.shift, a.root), a.root = d);
        d = a;
        break a
      }
      if(b === a.k) {
        d = a.Ca(a, c);
        break a
      }
      e(Error([H("Index "), H(b), H(" out of bounds for TransientVector of length"), H(a.k)].join("")))
    }
    e(Error("assoc! after persistent!"))
  }
  return d
};
r.Ca = function(a, b) {
  if(this.root.r) {
    if(32 > this.k - ff(a)) {
      this.N[this.k & 31] = b
    }else {
      var c = new ef(this.root.r, this.N), d = Array(32);
      d[0] = b;
      this.N = d;
      if(this.k >>> 5 > 1 << this.shift) {
        var d = Array(32), f = this.shift + 5;
        d[0] = this.root;
        d[1] = gf(this.root.r, this.shift, c);
        this.root = new ef(this.root.r, d);
        this.shift = f
      }else {
        this.root = Df(a, this.shift, this.root, c)
      }
    }
    this.k += 1;
    return a
  }
  e(Error("conj! after persistent!"))
};
r.Pa = function(a) {
  if(this.root.r) {
    this.root.r = m;
    var a = this.k - ff(a), b = Array(a);
    Ic(this.N, 0, b, 0, a);
    return new nf(m, this.k, this.shift, this.root, b, m)
  }
  e(Error("persistent! called twice"))
};
function Ff(a, b, c, d) {
  this.l = a;
  this.$ = b;
  this.ra = c;
  this.m = d;
  this.q = 0;
  this.h = 31850572
}
r = Ff.prototype;
r.C = function(a) {
  var b = this.m;
  return b != m ? b : this.m = a = Qb(a)
};
r.H = function(a, b) {
  return S(b, a)
};
r.toString = function() {
  return vb(this)
};
r.v = aa();
r.O = function() {
  return K(this.$)
};
r.P = function(a) {
  var b = N(this.$);
  return b ? new Ff(this.l, b, this.ra, m) : this.ra == m ? a.K(a) : new Ff(this.l, this.ra, m, m)
};
r.w = function(a, b) {
  return Sb(a, b)
};
r.F = function(a, b) {
  return new Ff(b, this.$, this.ra, this.m)
};
r.D = q("l");
r.K = function() {
  return xc(M, this.l)
};
function Gf(a, b, c, d, f) {
  this.l = a;
  this.count = b;
  this.$ = c;
  this.ra = d;
  this.m = f;
  this.q = 0;
  this.h = 31858766
}
r = Gf.prototype;
r.C = function(a) {
  var b = this.m;
  return b != m ? b : this.m = a = Qb(a)
};
r.H = function(a, b) {
  var c;
  u(this.$) ? (c = this.ra, c = new Gf(this.l, this.count + 1, this.$, T.a(u(c) ? c : tf, b), m)) : c = new Gf(this.l, this.count + 1, T.a(this.$, b), tf, m);
  return c
};
r.toString = function() {
  return vb(this)
};
r.v = function() {
  var a = J(this.ra), b = this.$;
  return u(u(b) ? b : a) ? new Ff(m, this.$, J(a), m) : m
};
r.A = q("count");
r.O = function() {
  return K(this.$)
};
r.P = function(a) {
  return L(J(a))
};
r.w = function(a, b) {
  return Sb(a, b)
};
r.F = function(a, b) {
  return new Gf(b, this.count, this.$, this.ra, this.m)
};
r.D = q("l");
r.K = function() {
  return Hf
};
var Hf = new Gf(m, 0, m, tf, 0);
function If() {
  this.q = 0;
  this.h = 2097152
}
If.prototype.w = ba(n);
var Jf = new If;
function Kf(a, b) {
  var c;
  c = b == m ? n : b ? ((c = b.h & 1024) ? c : b.Ec) ? l : b.h ? n : w(Qa, b) : w(Qa, b);
  return Lc(c ? U(a) === U(b) ? qe(re, Ae.a(function(a) {
    return O.a(W.b(b, K(a), Jf), $b(a))
  }, a)) : m : m)
}
function Lf(a, b) {
  for(var c = b.length, d = 0;;) {
    if(d < c) {
      if(a === b[d]) {
        return d
      }
      d += 1
    }else {
      return m
    }
  }
}
function Mf(a, b) {
  var c = I.c(a), d = I.c(b);
  return c < d ? -1 : c > d ? 1 : 0
}
function Nf(a, b, c) {
  for(var d = a.keys, f = d.length, g = a.ua, a = yc(a), i = 0, j = nb(Of);;) {
    if(i < f) {
      var k = d[i], i = i + 1, j = qb(j, k, g[k])
    }else {
      return d = xc, b = qb(j, b, c), b = pb(b), d(b, a)
    }
  }
}
function Pf(a, b) {
  for(var c = {}, d = b.length, f = 0;;) {
    if(f < d) {
      var g = b[f];
      c[g] = a[g];
      f += 1
    }else {
      break
    }
  }
  return c
}
function Qf(a, b, c, d, f) {
  this.l = a;
  this.keys = b;
  this.ua = c;
  this.fb = d;
  this.m = f;
  this.q = 4;
  this.h = 16123663
}
r = Qf.prototype;
r.wa = function(a) {
  a = We(rc.B ? rc.B() : rc.call(m), a);
  return nb(a)
};
r.C = function(a) {
  var b = this.m;
  return b != m ? b : this.m = a = td(a)
};
r.L = function(a, b) {
  return a.z(a, b, m)
};
r.z = function(a, b, c) {
  return((a = da(b)) ? Lf(b, this.keys) != m : a) ? this.ua[b] : c
};
r.ka = function(a, b, c) {
  if(da(b)) {
    var d = this.fb > Rf;
    if(d ? d : this.keys.length >= Rf) {
      return Nf(a, b, c)
    }
    if(Lf(b, this.keys) != m) {
      return a = Pf(this.ua, this.keys), a[b] = c, new Qf(this.l, this.keys, a, this.fb + 1, m)
    }
    a = Pf(this.ua, this.keys);
    d = this.keys.slice();
    a[b] = c;
    d.push(b);
    return new Qf(this.l, d, a, this.fb + 1, m)
  }
  return Nf(a, b, c)
};
r.Wa = function(a, b) {
  var c = da(b);
  return(c ? Lf(b, this.keys) != m : c) ? l : n
};
var Sf = m, Sf = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.L(this, b);
    case 3:
      return this.z(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = Qf.prototype;
r.call = Sf;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.H = function(a, b) {
  return Ec(b) ? a.ka(a, z.a(b, 0), z.a(b, 1)) : Wc.b(Ca, a, b)
};
r.toString = function() {
  return vb(this)
};
r.v = function() {
  var a = this;
  return 0 < a.keys.length ? Ae.a(function(b) {
    return xf.g(R([b, a.ua[b]], 0))
  }, a.keys.sort(Mf)) : m
};
r.A = function() {
  return this.keys.length
};
r.w = function(a, b) {
  return Kf(a, b)
};
r.F = function(a, b) {
  return new Qf(b, this.keys, this.ua, this.fb, this.m)
};
r.D = q("l");
r.K = function() {
  return xc(Tf, this.l)
};
var Tf = new Qf(m, [], {}, 0, 0), Rf = 8;
function Uf(a, b) {
  var c = a.e, d = da(b);
  if(d ? d : "number" === typeof b) {
    a: {
      for(var d = c.length, f = 0;;) {
        if(d <= f) {
          c = -1;
          break a
        }
        if(b === c[f]) {
          c = f;
          break a
        }
        f += 2
      }
      c = h
    }
  }else {
    if(b instanceof wb) {
      a: {
        for(var d = c.length, f = b.ta, g = 0;;) {
          if(d <= g) {
            c = -1;
            break a
          }
          var i = c[g], j = i instanceof wb;
          if(j ? f === i.ta : j) {
            c = g;
            break a
          }
          g += 2
        }
        c = h
      }
    }else {
      if(b == m) {
        a: {
          d = c.length;
          for(f = 0;;) {
            if(d <= f) {
              c = -1;
              break a
            }
            if(c[f] == m) {
              c = f;
              break a
            }
            f += 2
          }
          c = h
        }
      }else {
        a: {
          d = c.length;
          for(f = 0;;) {
            if(d <= f) {
              c = -1;
              break a
            }
            if(O.a(b, c[f])) {
              c = f;
              break a
            }
            f += 2
          }
          c = h
        }
      }
    }
  }
  return c
}
function Vf(a, b, c, d) {
  this.l = a;
  this.k = b;
  this.e = c;
  this.m = d;
  this.q = 4;
  this.h = 16123663
}
r = Vf.prototype;
r.wa = function() {
  return new Wf({}, this.e.length, this.e.slice())
};
r.C = function(a) {
  var b = this.m;
  return b != m ? b : this.m = a = td(a)
};
r.L = function(a, b) {
  return a.z(a, b, m)
};
r.z = function(a, b, c) {
  a = Uf(a, b);
  return-1 === a ? c : this.e[a + 1]
};
r.ka = function(a, b, c) {
  var d = Uf(a, b);
  if(-1 === d) {
    if(this.k < Xf) {
      for(var d = a.e, a = d.length, f = Array(a + 2), g = 0;;) {
        if(g < a) {
          f[g] = d[g], g += 1
        }else {
          break
        }
      }
      f[a] = b;
      f[a + 1] = c;
      return new Vf(this.l, this.k + 1, f, m)
    }
    return $a(Pa(We(Of, a), b, c), this.l)
  }
  if(c === this.e[d + 1]) {
    return a
  }
  b = this.e.slice();
  b[d + 1] = c;
  return new Vf(this.l, this.k, b, m)
};
r.Wa = function(a, b) {
  return-1 !== Uf(a, b)
};
var Yf = m, Yf = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.L(this, b);
    case 3:
      return this.z(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = Vf.prototype;
r.call = Yf;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.H = function(a, b) {
  return Ec(b) ? a.ka(a, z.a(b, 0), z.a(b, 1)) : Wc.b(Ca, a, b)
};
r.toString = function() {
  return vb(this)
};
r.v = function() {
  var a = this, b;
  if(0 < a.k) {
    var c = a.e.length;
    b = function f(b) {
      return new Ed(m, n, function() {
        return b < c ? S(Y([a.e[b], a.e[b + 1]]), f(b + 2)) : m
      }, m)
    }(0)
  }else {
    b = m
  }
  return b
};
r.A = q("k");
r.w = function(a, b) {
  return Kf(a, b)
};
r.F = function(a, b) {
  return new Vf(b, this.k, this.e, this.m)
};
r.D = q("l");
r.K = function() {
  return $a(Zf, this.l)
};
var Zf = new Vf(m, 0, [], m), Xf = 8;
function wa(a, b) {
  var c = b ? a : a.slice();
  return new Vf(m, c.length / 2, c, m)
}
function Wf(a, b, c) {
  this.Da = a;
  this.ha = b;
  this.e = c;
  this.q = 56;
  this.h = 258
}
r = Wf.prototype;
r.Ba = function(a, b, c) {
  if(u(this.Da)) {
    var d = Uf(a, b);
    if(-1 === d) {
      if(this.ha + 2 <= 2 * Xf) {
        return this.ha += 2, this.e.push(b), this.e.push(c), a
      }
      a = $f.a ? $f.a(this.ha, this.e) : $f.call(m, this.ha, this.e);
      return qb(a, b, c)
    }
    c !== this.e[d + 1] && (this.e[d + 1] = c);
    return a
  }
  e(Error("assoc! after persistent!"))
};
r.Ca = function(a, b) {
  if(u(this.Da)) {
    var c;
    c = b ? ((c = b.h & 2048) ? c : b.lc) || (b.h ? 0 : w(Ra, b)) : w(Ra, b);
    if(c) {
      return a.Ba(a, ud.c ? ud.c(b) : ud.call(m, b), vd.c ? vd.c(b) : vd.call(m, b))
    }
    c = J(b);
    for(var d = a;;) {
      var f = K(c);
      if(u(f)) {
        c = N(c), d = d.Ba(d, ud.c ? ud.c(f) : ud.call(m, f), vd.c ? vd.c(f) : vd.call(m, f))
      }else {
        return d
      }
    }
  }else {
    e(Error("conj! after persistent!"))
  }
};
r.Pa = function() {
  if(u(this.Da)) {
    return this.Da = n, new Vf(m, ad((this.ha - this.ha % 2) / 2), this.e, m)
  }
  e(Error("persistent! called twice"))
};
r.L = function(a, b) {
  return a.z(a, b, m)
};
r.z = function(a, b, c) {
  if(u(this.Da)) {
    return a = Uf(a, b), -1 === a ? c : this.e[a + 1]
  }
  e(Error("lookup after persistent!"))
};
r.A = function() {
  if(u(this.Da)) {
    return ad((this.ha - this.ha % 2) / 2)
  }
  e(Error("count after persistent!"))
};
function $f(a, b) {
  for(var c = nb(Tf), d = 0;;) {
    if(d < a) {
      c = qb(c, b[d], b[d + 1]), d += 2
    }else {
      return c
    }
  }
}
function ag() {
  this.ea = n
}
function bg(a, b) {
  return da(a) ? a === b : O.a(a, b)
}
var cg, dg = m;
function eg(a, b, c) {
  a = a.slice();
  a[b] = c;
  return a
}
function fg(a, b, c, d, f) {
  a = a.slice();
  a[b] = c;
  a[d] = f;
  return a
}
dg = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 3:
      return eg.call(this, a, b, c);
    case 5:
      return fg.call(this, a, b, c, d, f)
  }
  e(Error("Invalid arity: " + arguments.length))
};
dg.b = eg;
dg.Q = fg;
cg = dg;
var gg, hg = m;
function ig(a, b, c, d) {
  a = a.Ga(b);
  a.e[c] = d;
  return a
}
function jg(a, b, c, d, f, g) {
  a = a.Ga(b);
  a.e[c] = d;
  a.e[f] = g;
  return a
}
hg = function(a, b, c, d, f, g) {
  switch(arguments.length) {
    case 4:
      return ig.call(this, a, b, c, d);
    case 6:
      return jg.call(this, a, b, c, d, f, g)
  }
  e(Error("Invalid arity: " + arguments.length))
};
hg.o = ig;
hg.Y = jg;
gg = hg;
function kg(a, b, c) {
  this.r = a;
  this.G = b;
  this.e = c
}
r = kg.prototype;
r.ba = function(a, b, c, d, f, g) {
  var i = 1 << (c >>> b & 31), j = bd(this.G & i - 1);
  if(0 === (this.G & i)) {
    var k = bd(this.G);
    if(2 * k < this.e.length) {
      a = this.Ga(a);
      b = a.e;
      g.ea = l;
      a: {
        c = 2 * (k - j);
        g = 2 * j + (c - 1);
        for(k = 2 * (j + 1) + (c - 1);;) {
          if(0 === c) {
            break a
          }
          b[k] = b[g];
          k -= 1;
          c -= 1;
          g -= 1
        }
      }
      b[2 * j] = d;
      b[2 * j + 1] = f;
      a.G |= i;
      return a
    }
    if(16 <= k) {
      j = Array(32);
      j[c >>> b & 31] = lg.ba(a, b + 5, c, d, f, g);
      for(f = d = 0;;) {
        if(32 > d) {
          0 !== (this.G >>> d & 1) && (j[d] = this.e[f] != m ? lg.ba(a, b + 5, I.c(this.e[f]), this.e[f], this.e[f + 1], g) : this.e[f + 1], f += 2), d += 1
        }else {
          break
        }
      }
      return new mg(a, k + 1, j)
    }
    b = Array(2 * (k + 4));
    Ic(this.e, 0, b, 0, 2 * j);
    b[2 * j] = d;
    b[2 * j + 1] = f;
    Ic(this.e, 2 * j, b, 2 * (j + 1), 2 * (k - j));
    g.ea = l;
    a = this.Ga(a);
    a.e = b;
    a.G |= i;
    return a
  }
  k = this.e[2 * j];
  i = this.e[2 * j + 1];
  if(k == m) {
    return k = i.ba(a, b + 5, c, d, f, g), k === i ? this : gg.o(this, a, 2 * j + 1, k)
  }
  if(bg(d, k)) {
    return f === i ? this : gg.o(this, a, 2 * j + 1, f)
  }
  g.ea = l;
  return gg.Y(this, a, 2 * j, m, 2 * j + 1, ng.xa ? ng.xa(a, b + 5, k, i, c, d, f) : ng.call(m, a, b + 5, k, i, c, d, f))
};
r.Sa = function() {
  return og.c ? og.c(this.e) : og.call(m, this.e)
};
r.Ga = function(a) {
  if(a === this.r) {
    return this
  }
  var b = bd(this.G), c = Array(0 > b ? 4 : 2 * (b + 1));
  Ic(this.e, 0, c, 0, 2 * b);
  return new kg(a, this.G, c)
};
r.aa = function(a, b, c, d, f) {
  var g = 1 << (b >>> a & 31), i = bd(this.G & g - 1);
  if(0 === (this.G & g)) {
    var j = bd(this.G);
    if(16 <= j) {
      i = Array(32);
      i[b >>> a & 31] = lg.aa(a + 5, b, c, d, f);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.G >>> c & 1) && (i[c] = this.e[d] != m ? lg.aa(a + 5, I.c(this.e[d]), this.e[d], this.e[d + 1], f) : this.e[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new mg(m, j + 1, i)
    }
    a = Array(2 * (j + 1));
    Ic(this.e, 0, a, 0, 2 * i);
    a[2 * i] = c;
    a[2 * i + 1] = d;
    Ic(this.e, 2 * i, a, 2 * (i + 1), 2 * (j - i));
    f.ea = l;
    return new kg(m, this.G | g, a)
  }
  j = this.e[2 * i];
  g = this.e[2 * i + 1];
  if(j == m) {
    return j = g.aa(a + 5, b, c, d, f), j === g ? this : new kg(m, this.G, cg.b(this.e, 2 * i + 1, j))
  }
  if(bg(c, j)) {
    return d === g ? this : new kg(m, this.G, cg.b(this.e, 2 * i + 1, d))
  }
  f.ea = l;
  return new kg(m, this.G, cg.Q(this.e, 2 * i, m, 2 * i + 1, ng.Y ? ng.Y(a + 5, j, g, b, c, d) : ng.call(m, a + 5, j, g, b, c, d)))
};
r.na = function(a, b, c, d) {
  var f = 1 << (b >>> a & 31);
  if(0 === (this.G & f)) {
    return d
  }
  var g = bd(this.G & f - 1), f = this.e[2 * g], g = this.e[2 * g + 1];
  return f == m ? g.na(a + 5, b, c, d) : bg(c, f) ? g : d
};
var lg = new kg(m, 0, []);
function mg(a, b, c) {
  this.r = a;
  this.k = b;
  this.e = c
}
r = mg.prototype;
r.ba = function(a, b, c, d, f, g) {
  var i = c >>> b & 31, j = this.e[i];
  if(j == m) {
    return a = gg.o(this, a, i, lg.ba(a, b + 5, c, d, f, g)), a.k += 1, a
  }
  b = j.ba(a, b + 5, c, d, f, g);
  return b === j ? this : gg.o(this, a, i, b)
};
r.Sa = function() {
  return pg.c ? pg.c(this.e) : pg.call(m, this.e)
};
r.Ga = function(a) {
  return a === this.r ? this : new mg(a, this.k, this.e.slice())
};
r.aa = function(a, b, c, d, f) {
  var g = b >>> a & 31, i = this.e[g];
  if(i == m) {
    return new mg(m, this.k + 1, cg.b(this.e, g, lg.aa(a + 5, b, c, d, f)))
  }
  a = i.aa(a + 5, b, c, d, f);
  return a === i ? this : new mg(m, this.k, cg.b(this.e, g, a))
};
r.na = function(a, b, c, d) {
  var f = this.e[b >>> a & 31];
  return f != m ? f.na(a + 5, b, c, d) : d
};
function qg(a, b, c) {
  for(var b = 2 * b, d = 0;;) {
    if(d < b) {
      if(bg(c, a[d])) {
        return d
      }
      d += 2
    }else {
      return-1
    }
  }
}
function rg(a, b, c, d) {
  this.r = a;
  this.ma = b;
  this.k = c;
  this.e = d
}
r = rg.prototype;
r.ba = function(a, b, c, d, f, g) {
  if(c === this.ma) {
    b = qg(this.e, this.k, d);
    if(-1 === b) {
      if(this.e.length > 2 * this.k) {
        return a = gg.Y(this, a, 2 * this.k, d, 2 * this.k + 1, f), g.ea = l, a.k += 1, a
      }
      c = this.e.length;
      b = Array(c + 2);
      Ic(this.e, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = f;
      g.ea = l;
      g = this.k + 1;
      a === this.r ? (this.e = b, this.k = g, a = this) : a = new rg(this.r, this.ma, g, b);
      return a
    }
    return this.e[b + 1] === f ? this : gg.o(this, a, b + 1, f)
  }
  return(new kg(a, 1 << (this.ma >>> b & 31), [m, this, m, m])).ba(a, b, c, d, f, g)
};
r.Sa = function() {
  return og.c ? og.c(this.e) : og.call(m, this.e)
};
r.Ga = function(a) {
  if(a === this.r) {
    return this
  }
  var b = Array(2 * (this.k + 1));
  Ic(this.e, 0, b, 0, 2 * this.k);
  return new rg(a, this.ma, this.k, b)
};
r.aa = function(a, b, c, d, f) {
  return b === this.ma ? (a = qg(this.e, this.k, c), -1 === a ? (a = this.e.length, b = Array(a + 2), Ic(this.e, 0, b, 0, a), b[a] = c, b[a + 1] = d, f.ea = l, new rg(m, this.ma, this.k + 1, b)) : O.a(this.e[a], d) ? this : new rg(m, this.ma, this.k, cg.b(this.e, a + 1, d))) : (new kg(m, 1 << (this.ma >>> a & 31), [m, this])).aa(a, b, c, d, f)
};
r.na = function(a, b, c, d) {
  a = qg(this.e, this.k, c);
  return 0 > a ? d : bg(c, this.e[a]) ? this.e[a + 1] : d
};
var ng, sg = m;
function tg(a, b, c, d, f, g) {
  var i = I.c(b);
  if(i === d) {
    return new rg(m, i, 2, [b, c, f, g])
  }
  var j = new ag;
  return lg.aa(a, i, b, c, j).aa(a, d, f, g, j)
}
function ug(a, b, c, d, f, g, i) {
  var j = I.c(c);
  if(j === f) {
    return new rg(m, j, 2, [c, d, g, i])
  }
  var k = new ag;
  return lg.ba(a, b, j, c, d, k).ba(a, b, f, g, i, k)
}
sg = function(a, b, c, d, f, g, i) {
  switch(arguments.length) {
    case 6:
      return tg.call(this, a, b, c, d, f, g);
    case 7:
      return ug.call(this, a, b, c, d, f, g, i)
  }
  e(Error("Invalid arity: " + arguments.length))
};
sg.Y = tg;
sg.xa = ug;
ng = sg;
function vg(a, b, c, d, f) {
  this.l = a;
  this.ca = b;
  this.p = c;
  this.da = d;
  this.m = f;
  this.q = 0;
  this.h = 31850572
}
r = vg.prototype;
r.C = function(a) {
  var b = this.m;
  return b != m ? b : this.m = a = Qb(a)
};
r.H = function(a, b) {
  return S(b, a)
};
r.toString = function() {
  return vb(this)
};
r.v = aa();
r.O = function() {
  return this.da == m ? Y([this.ca[this.p], this.ca[this.p + 1]]) : K(this.da)
};
r.P = function() {
  return this.da == m ? og.b ? og.b(this.ca, this.p + 2, m) : og.call(m, this.ca, this.p + 2, m) : og.b ? og.b(this.ca, this.p, N(this.da)) : og.call(m, this.ca, this.p, N(this.da))
};
r.w = function(a, b) {
  return Sb(a, b)
};
r.F = function(a, b) {
  return new vg(b, this.ca, this.p, this.da, this.m)
};
r.D = q("l");
r.K = function() {
  return xc(M, this.l)
};
var og, wg = m;
function xg(a) {
  return wg.b(a, 0, m)
}
function yg(a, b, c) {
  if(c == m) {
    for(c = a.length;;) {
      if(b < c) {
        if(a[b] != m) {
          return new vg(m, a, b, m, m)
        }
        var d = a[b + 1];
        if(u(d) && (d = d.Sa(), u(d))) {
          return new vg(m, a, b + 2, d, m)
        }
        b += 2
      }else {
        return m
      }
    }
  }else {
    return new vg(m, a, b, c, m)
  }
}
wg = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return xg.call(this, a);
    case 3:
      return yg.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
wg.c = xg;
wg.b = yg;
og = wg;
function zg(a, b, c, d, f) {
  this.l = a;
  this.ca = b;
  this.p = c;
  this.da = d;
  this.m = f;
  this.q = 0;
  this.h = 31850572
}
r = zg.prototype;
r.C = function(a) {
  var b = this.m;
  return b != m ? b : this.m = a = Qb(a)
};
r.H = function(a, b) {
  return S(b, a)
};
r.toString = function() {
  return vb(this)
};
r.v = aa();
r.O = function() {
  return K(this.da)
};
r.P = function() {
  return pg.o ? pg.o(m, this.ca, this.p, N(this.da)) : pg.call(m, m, this.ca, this.p, N(this.da))
};
r.w = function(a, b) {
  return Sb(a, b)
};
r.F = function(a, b) {
  return new zg(b, this.ca, this.p, this.da, this.m)
};
r.D = q("l");
r.K = function() {
  return xc(M, this.l)
};
var pg, Ag = m;
function Bg(a) {
  return Ag.o(m, a, 0, m)
}
function Cg(a, b, c, d) {
  if(d == m) {
    for(d = b.length;;) {
      if(c < d) {
        var f = b[c];
        if(u(f) && (f = f.Sa(), u(f))) {
          return new zg(a, b, c + 1, f, m)
        }
        c += 1
      }else {
        return m
      }
    }
  }else {
    return new zg(a, b, c, d, m)
  }
}
Ag = function(a, b, c, d) {
  switch(arguments.length) {
    case 1:
      return Bg.call(this, a);
    case 4:
      return Cg.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ag.c = Bg;
Ag.o = Cg;
pg = Ag;
function Dg(a, b, c, d, f, g) {
  this.l = a;
  this.k = b;
  this.root = c;
  this.S = d;
  this.U = f;
  this.m = g;
  this.q = 4;
  this.h = 16123663
}
r = Dg.prototype;
r.wa = function() {
  return new Eg({}, this.root, this.k, this.S, this.U)
};
r.C = function(a) {
  var b = this.m;
  return b != m ? b : this.m = a = td(a)
};
r.L = function(a, b) {
  return a.z(a, b, m)
};
r.z = function(a, b, c) {
  return b == m ? this.S ? this.U : c : this.root == m ? c : this.root.na(0, I.c(b), b, c)
};
r.ka = function(a, b, c) {
  if(b == m) {
    var d = this.S;
    return(d ? c === this.U : d) ? a : new Dg(this.l, this.S ? this.k : this.k + 1, this.root, l, c, m)
  }
  d = new ag;
  c = (this.root == m ? lg : this.root).aa(0, I.c(b), b, c, d);
  return c === this.root ? a : new Dg(this.l, d.ea ? this.k + 1 : this.k, c, this.S, this.U, m)
};
r.Wa = function(a, b) {
  return b == m ? this.S : this.root == m ? n : this.root.na(0, I.c(b), b, Jc) !== Jc
};
var Fg = m, Fg = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.L(this, b);
    case 3:
      return this.z(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = Dg.prototype;
r.call = Fg;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.H = function(a, b) {
  return Ec(b) ? a.ka(a, z.a(b, 0), z.a(b, 1)) : Wc.b(Ca, a, b)
};
r.toString = function() {
  return vb(this)
};
r.v = function() {
  if(0 < this.k) {
    var a = this.root != m ? this.root.Sa() : m;
    return this.S ? S(Y([m, this.U]), a) : a
  }
  return m
};
r.A = q("k");
r.w = function(a, b) {
  return Kf(a, b)
};
r.F = function(a, b) {
  return new Dg(b, this.k, this.root, this.S, this.U, this.m)
};
r.D = q("l");
r.K = function() {
  return $a(Of, this.l)
};
var Of = new Dg(m, 0, m, n, m, 0);
function Eg(a, b, c, d, f) {
  this.r = a;
  this.root = b;
  this.count = c;
  this.S = d;
  this.U = f;
  this.q = 56;
  this.h = 258
}
r = Eg.prototype;
r.Ba = function(a, b, c) {
  return Gg(a, b, c)
};
r.Ca = function(a, b) {
  var c;
  a: {
    if(a.r) {
      c = b ? ((c = b.h & 2048) ? c : b.lc) || (b.h ? 0 : w(Ra, b)) : w(Ra, b);
      if(c) {
        c = Gg(a, ud.c ? ud.c(b) : ud.call(m, b), vd.c ? vd.c(b) : vd.call(m, b));
        break a
      }
      c = J(b);
      for(var d = a;;) {
        var f = K(c);
        if(u(f)) {
          c = N(c), d = Gg(d, ud.c ? ud.c(f) : ud.call(m, f), vd.c ? vd.c(f) : vd.call(m, f))
        }else {
          c = d;
          break a
        }
      }
    }else {
      e(Error("conj! after persistent"))
    }
    c = h
  }
  return c
};
r.Pa = function(a) {
  var b;
  a.r ? (a.r = m, b = new Dg(m, a.count, a.root, a.S, a.U, m)) : e(Error("persistent! called twice"));
  return b
};
r.L = function(a, b) {
  return b == m ? this.S ? this.U : m : this.root == m ? m : this.root.na(0, I.c(b), b)
};
r.z = function(a, b, c) {
  return b == m ? this.S ? this.U : c : this.root == m ? c : this.root.na(0, I.c(b), b, c)
};
r.A = function() {
  if(this.r) {
    return this.count
  }
  e(Error("count after persistent!"))
};
function Gg(a, b, c) {
  if(a.r) {
    if(b == m) {
      a.U !== c && (a.U = c), a.S || (a.count += 1, a.S = l)
    }else {
      var d = new ag, b = (a.root == m ? lg : a.root).ba(a.r, 0, I.c(b), b, c, d);
      b !== a.root && (a.root = b);
      d.ea && (a.count += 1)
    }
    return a
  }
  e(Error("assoc! after persistent!"))
}
var rc;
function Hg(a) {
  for(var b = J(a), c = nb(Of);;) {
    if(b) {
      var a = N(N(b)), d = K(b), b = $b(b), c = qb(c, d, b), b = a
    }else {
      return pb(c)
    }
  }
}
function Ig(a) {
  var b = m;
  0 < arguments.length && (b = R(Array.prototype.slice.call(arguments, 0), 0));
  return Hg.call(this, b)
}
Ig.n = 0;
Ig.j = function(a) {
  a = J(a);
  return Hg(a)
};
Ig.g = Hg;
rc = Ig;
function ud(a) {
  return Sa(a)
}
function vd(a) {
  return Ta(a)
}
function Jg(a, b) {
  var c;
  a: {
    c = b;
    for(var d = re;;) {
      if(J(c)) {
        var f = d.c ? d.c(K(c)) : d.call(m, K(c));
        if(u(f)) {
          c = f;
          break a
        }
        c = N(c)
      }else {
        c = m;
        break a
      }
    }
    c = h
  }
  if(u(c)) {
    var g = function(b, c) {
      var d = K(c), f = $b(c);
      return Nc(b, d) ? oc.b(b, d, a.a ? a.a(W.a(b, d), f) : a.call(m, W.a(b, d), f)) : oc.b(b, d, f)
    };
    c = Wc.a(function(a, b) {
      return Wc.b(g, u(a) ? a : Tf, J(b))
    }, b)
  }else {
    c = m
  }
  return c
}
function Kg(a, b) {
  var c = m;
  1 < arguments.length && (c = R(Array.prototype.slice.call(arguments, 1), 0));
  return Jg.call(this, a, c)
}
Kg.n = 1;
Kg.j = function(a) {
  var b = K(a), a = L(a);
  return Jg(b, a)
};
Kg.g = Jg;
function Lg(a, b, c) {
  this.l = a;
  this.Ha = b;
  this.m = c;
  this.q = 4;
  this.h = 15077647
}
Lg.prototype.wa = function() {
  return new Mg(nb(this.Ha))
};
Lg.prototype.C = function(a) {
  var b = this.m;
  if(b != m) {
    return b
  }
  a: {
    b = 0;
    for(a = J(a);;) {
      if(a) {
        var c = K(a), b = (b + I.c(c)) % 4503599627370496, a = N(a)
      }else {
        break a
      }
    }
    b = h
  }
  return this.m = b
};
Lg.prototype.L = function(a, b) {
  return a.z(a, b, m)
};
Lg.prototype.z = function(a, b, c) {
  return u(Oa(this.Ha, b)) ? b : c
};
var Ng = m, Ng = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.L(this, b);
    case 3:
      return this.z(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = Lg.prototype;
r.call = Ng;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.H = function(a, b) {
  return new Lg(this.l, oc.b(this.Ha, b, m), m)
};
r.toString = function() {
  return vb(this)
};
r.v = function() {
  return J(Ae.a(K, this.Ha))
};
r.A = function() {
  return Ba(this.Ha)
};
r.w = function(a, b) {
  var c;
  c = b == m ? n : b ? ((c = b.h & 4096) ? c : b.Hc) ? l : b.h ? n : w(Ua, b) : w(Ua, b);
  return c ? (c = U(a) === U(b)) ? qe(function(b) {
    return Nc(a, b)
  }, b) : c : c
};
r.F = function(a, b) {
  return new Lg(b, this.Ha, this.m)
};
r.D = q("l");
r.K = function() {
  return xc(Og, this.l)
};
var Og = new Lg(m, Zf, 0);
function Pg(a) {
  var b = a.length;
  if(b / 2 <= Xf) {
    return new Lg(m, wa.a ? wa.a(a, l) : wa.call(m, a, l), m)
  }
  for(var c = 0, d = nb(Og);;) {
    if(c < b) {
      var f = c + 2, d = ob(d, a[c]), c = f
    }else {
      return pb(d)
    }
  }
}
function Mg(a) {
  this.va = a;
  this.h = 259;
  this.q = 136
}
var Qg = m, Qg = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ka.b(this.va, b, Jc) === Jc ? m : b;
    case 3:
      return Ka.b(this.va, b, Jc) === Jc ? c : b
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = Mg.prototype;
r.call = Qg;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.L = function(a, b) {
  return a.z(a, b, m)
};
r.z = function(a, b, c) {
  return Ka.b(this.va, b, Jc) === Jc ? c : b
};
r.A = function() {
  return U(this.va)
};
r.Ca = function(a, b) {
  this.va = qb(this.va, b, m);
  return a
};
r.Pa = function() {
  return new Lg(m, pb(this.va), m)
};
function Rg(a) {
  if(a && u(u(m) ? m : a.Tb)) {
    return a.name
  }
  if(ya(a)) {
    return a
  }
  if(Mc(a)) {
    var b = a.lastIndexOf("/", a.length - 2);
    return 0 > b ? md.a(a, 2) : md.a(a, b + 1)
  }
  e(Error([H("Doesn't support name: "), H(a)].join("")))
}
function Sg(a) {
  if(a && u(u(m) ? m : a.Tb)) {
    return a.Ia
  }
  if(Mc(a)) {
    var b = a.lastIndexOf("/", a.length - 2);
    return-1 < b ? md.b(a, 2, b) : m
  }
  e(Error([H("Doesn't support namespace: "), H(a)].join("")))
}
function Tg(a, b, c, d, f) {
  this.l = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.m = f;
  this.q = 0;
  this.h = 32375006
}
r = Tg.prototype;
r.C = function(a) {
  var b = this.m;
  return b != m ? b : this.m = a = Qb(a)
};
r.la = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new Tg(this.l, this.start + this.step, this.end, this.step, m) : m : this.start + this.step > this.end ? new Tg(this.l, this.start + this.step, this.end, this.step, m) : m
};
r.H = function(a, b) {
  return S(b, a)
};
r.toString = function() {
  return vb(this)
};
r.ya = function(a, b) {
  return Eb.a(a, b)
};
r.za = function(a, b, c) {
  return Eb.b(a, b, c)
};
r.v = function(a) {
  return 0 < this.step ? this.start < this.end ? a : m : this.start > this.end ? a : m
};
r.A = function(a) {
  return v(a.v(a)) ? 0 : Math.ceil((this.end - this.start) / this.step)
};
r.O = q("start");
r.P = function(a) {
  return a.v(a) != m ? new Tg(this.l, this.start + this.step, this.end, this.step, m) : M
};
r.w = function(a, b) {
  return Sb(a, b)
};
r.F = function(a, b) {
  return new Tg(b, this.start, this.end, this.step, this.m)
};
r.D = q("l");
r.t = function(a, b) {
  if(b < a.A(a)) {
    return this.start + b * this.step
  }
  var c = this.start > this.end;
  if(c ? 0 === this.step : c) {
    return this.start
  }
  e(Error("Index out of bounds"))
};
r.R = function(a, b, c) {
  c = b < a.A(a) ? this.start + b * this.step : ((a = this.start > this.end) ? 0 === this.step : a) ? this.start : c;
  return c
};
r.K = function() {
  return xc(M, this.l)
};
var Ug, Vg = m;
function Wg() {
  return Vg.b(0, Number.MAX_VALUE, 1)
}
function Xg(a) {
  return Vg.b(0, a, 1)
}
function Yg(a, b) {
  return Vg.b(a, b, 1)
}
function Zg(a, b, c) {
  return new Tg(m, a, b, c, m)
}
Vg = function(a, b, c) {
  switch(arguments.length) {
    case 0:
      return Wg.call(this);
    case 1:
      return Xg.call(this, a);
    case 2:
      return Yg.call(this, a, b);
    case 3:
      return Zg.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Vg.B = Wg;
Vg.c = Xg;
Vg.a = Yg;
Vg.b = Zg;
Ug = Vg;
var $g, ah = m;
function bh(a) {
  for(;;) {
    if(J(a)) {
      a = N(a)
    }else {
      return m
    }
  }
}
function ch(a, b) {
  for(;;) {
    var c = J(b);
    if(u(c ? 0 < a : c)) {
      var c = a - 1, d = N(b), a = c, b = d
    }else {
      return m
    }
  }
}
ah = function(a, b) {
  switch(arguments.length) {
    case 1:
      return bh.call(this, a);
    case 2:
      return ch.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ah.c = bh;
ah.a = ch;
$g = ah;
var dh, eh = m;
function fh(a) {
  $g.c(a);
  return a
}
function gh(a, b) {
  $g.a(a, b);
  return b
}
eh = function(a, b) {
  switch(arguments.length) {
    case 1:
      return fh.call(this, a);
    case 2:
      return gh.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
eh.c = fh;
eh.a = gh;
dh = eh;
function hh(a, b) {
  var c = a.exec(b);
  return O.a(K(c), b) ? 1 === U(c) ? K(c) : vf(c) : m
}
function ih(a, b) {
  var c = a.exec(b);
  return c == m ? m : 1 === U(c) ? K(c) : vf(c)
}
function jh(a) {
  var b = ih(/^(?:\(\?([idmsux]*)\))?(.*)/, a);
  V.b(b, 0, m);
  a = V.b(b, 1, m);
  b = V.b(b, 2, m);
  return RegExp(b, a)
}
function kh(a, b, c, d, f, g, i) {
  G(a, c);
  J(i) && (b.b ? b.b(K(i), a, g) : b.call(m, K(i), a, g));
  for(var c = J(N(i)), i = m, j = 0, k = 0;;) {
    if(k < j) {
      var p = i.t(i, k);
      G(a, d);
      b.b ? b.b(p, a, g) : b.call(m, p, a, g);
      k += 1
    }else {
      if(c = J(c)) {
        i = c, Fc(i) ? (c = sb(i), k = tb(i), i = c, j = U(c), c = k) : (c = K(i), G(a, d), b.b ? b.b(c, a, g) : b.call(m, c, a, g), c = N(i), i = m, j = 0), k = 0
      }else {
        break
      }
    }
  }
  return G(a, f)
}
function lh(a, b) {
  for(var c = J(b), d = m, f = 0, g = 0;;) {
    if(g < f) {
      var i = d.t(d, g);
      G(a, i);
      g += 1
    }else {
      if(c = J(c)) {
        d = c, Fc(d) ? (c = sb(d), f = tb(d), d = c, i = U(c), c = f, f = i) : (i = K(d), G(a, i), c = N(d), d = m, f = 0), g = 0
      }else {
        return m
      }
    }
  }
}
function mh(a, b) {
  var c = m;
  1 < arguments.length && (c = R(Array.prototype.slice.call(arguments, 1), 0));
  return lh.call(this, a, c)
}
mh.n = 1;
mh.j = function(a) {
  var b = K(a), a = L(a);
  return lh(b, a)
};
mh.g = lh;
var nh = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"}, ph = function oh(b, c, d) {
  if(b == m) {
    return G(c, "nil")
  }
  if(h === b) {
    return G(c, "#<undefined>")
  }
  var f;
  f = W.a(d, "\ufdd0:meta");
  u(f) && (f = b ? ((f = b.h & 131072) ? f : b.mc) ? l : b.h ? n : w(Xa, b) : w(Xa, b), f = u(f) ? yc(b) : f);
  u(f) && (G(c, "^"), oh(yc(b), c, d), G(c, " "));
  if(b == m) {
    return G(c, "nil")
  }
  if(b.Ya) {
    return b.zb(b, c, d)
  }
  if(f = b) {
    f = (f = b.h & 2147483648) ? f : b.M
  }
  return f ? b.I(b, c, d) : ((f = (b == m ? m : b.constructor) === Boolean) ? f : "number" === typeof b) ? G(c, "" + H(b)) : b instanceof Array ? kh(c, oh, "#<Array [", ", ", "]>", d, b) : da(b) ? Mc(b) ? (G(c, ":"), d = Sg(b), u(d) && mh.g(c, R(["" + H(d), "/"], 0)), G(c, Rg(b))) : b instanceof wb ? (d = Sg(b), u(d) && mh.g(c, R(["" + H(d), "/"], 0)), G(c, Rg(b))) : u((new X("\ufdd0:readably")).call(m, d)) ? G(c, [H('"'), H(b.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(b) {
    return nh[b]
  })), H('"')].join("")) : G(c, b) : uc(b) ? mh.g(c, R(["#<", "" + H(b), ">"], 0)) : b instanceof Date ? (d = function(b, c) {
    for(var d = "" + H(b);;) {
      if(U(d) < c) {
        d = [H("0"), H(d)].join("")
      }else {
        return d
      }
    }
  }, mh.g(c, R(['#inst "', "" + H(b.getUTCFullYear()), "-", d(b.getUTCMonth() + 1, 2), "-", d(b.getUTCDate(), 2), "T", d(b.getUTCHours(), 2), ":", d(b.getUTCMinutes(), 2), ":", d(b.getUTCSeconds(), 2), ".", d(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : u(b instanceof RegExp) ? mh.g(c, R(['#"', b.source, '"'], 0)) : mh.g(c, R(["#<", "" + H(b), ">"], 0))
};
function qh(a) {
  var b = va(), c = a == m;
  if(c ? c : v(J(a))) {
    b = ""
  }else {
    var c = H, d = new ta, f = new ub(d);
    a: {
      ph(K(a), f, b);
      for(var a = J(N(a)), g = m, i = 0, j = 0;;) {
        if(j < i) {
          var k = g.t(g, j);
          G(f, " ");
          ph(k, f, b);
          j += 1
        }else {
          if(a = J(a)) {
            g = a, Fc(g) ? (a = sb(g), i = tb(g), g = a, k = U(a), a = i, i = k) : (k = K(g), G(f, " "), ph(k, f, b), a = N(g), g = m, i = 0), j = 0
          }else {
            break a
          }
        }
      }
    }
    kb(f);
    b = "" + c(d)
  }
  return b
}
function rh(a) {
  var b = m;
  0 < arguments.length && (b = R(Array.prototype.slice.call(arguments, 0), 0));
  return qh(b)
}
rh.n = 0;
rh.j = function(a) {
  a = J(a);
  return qh(a)
};
rh.g = function(a) {
  return qh(a)
};
zb.prototype.M = l;
zb.prototype.I = function(a, b, c) {
  return kh(b, ph, "(", " ", ")", c, a)
};
Gc.prototype.M = l;
Gc.prototype.I = function(a, b, c) {
  return kh(b, ph, "(", " ", ")", c, a)
};
Vf.prototype.M = l;
Vf.prototype.I = function(a, b, c) {
  return kh(b, function(a) {
    return kh(b, ph, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
Gf.prototype.M = l;
Gf.prototype.I = function(a, b, c) {
  return kh(b, ph, "#queue [", " ", "]", c, J(a))
};
Ed.prototype.M = l;
Ed.prototype.I = function(a, b, c) {
  return kh(b, ph, "(", " ", ")", c, a)
};
vg.prototype.M = l;
vg.prototype.I = function(a, b, c) {
  return kh(b, ph, "(", " ", ")", c, a)
};
Hc.prototype.M = l;
Hc.prototype.I = function(a, b, c) {
  return kh(b, ph, "(", " ", ")", c, a)
};
Dg.prototype.M = l;
Dg.prototype.I = function(a, b, c) {
  return kh(b, function(a) {
    return kh(b, ph, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
Lg.prototype.M = l;
Lg.prototype.I = function(a, b, c) {
  return kh(b, ph, "#{", " ", "}", c, a)
};
nf.prototype.M = l;
nf.prototype.I = function(a, b, c) {
  return kh(b, ph, "[", " ", "]", c, a)
};
wd.prototype.M = l;
wd.prototype.I = function(a, b, c) {
  return kh(b, ph, "(", " ", ")", c, a)
};
xd.prototype.M = l;
xd.prototype.I = function(a, b) {
  return G(b, "()")
};
Ad.prototype.M = l;
Ad.prototype.I = function(a, b, c) {
  return kh(b, ph, "(", " ", ")", c, a)
};
Tg.prototype.M = l;
Tg.prototype.I = function(a, b, c) {
  return kh(b, ph, "(", " ", ")", c, a)
};
zg.prototype.M = l;
zg.prototype.I = function(a, b, c) {
  return kh(b, ph, "(", " ", ")", c, a)
};
Qf.prototype.M = l;
Qf.prototype.I = function(a, b, c) {
  return kh(b, function(a) {
    return kh(b, ph, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
nf.prototype.hc = l;
nf.prototype.ic = function(a, b) {
  return Pc.a(a, b)
};
function sh(a, b, c, d) {
  this.state = a;
  this.l = b;
  this.Ac = c;
  this.Bc = d;
  this.h = 2153938944;
  this.q = 2
}
r = sh.prototype;
r.C = function(a) {
  return ga(a)
};
r.Ub = function(a, b, c) {
  for(var d = J(this.Bc), f = m, g = 0, i = 0;;) {
    if(i < g) {
      var j = f.t(f, i), k = V.b(j, 0, m), j = V.b(j, 1, m);
      j.o ? j.o(k, a, b, c) : j.call(m, k, a, b, c);
      i += 1
    }else {
      if(d = J(d)) {
        Fc(d) ? (f = sb(d), d = tb(d), k = f, g = U(f), f = k) : (f = K(d), k = V.b(f, 0, m), j = V.b(f, 1, m), j.o ? j.o(k, a, b, c) : j.call(m, k, a, b, c), d = N(d), f = m, g = 0), i = 0
      }else {
        return m
      }
    }
  }
};
r.I = function(a, b, c) {
  G(b, "#<Atom: ");
  ph(this.state, b, c);
  return G(b, ">")
};
r.D = q("l");
r.jc = q("state");
r.w = function(a, b) {
  return a === b
};
var th, uh = m;
function vh(a) {
  return new sh(a, m, m, m)
}
function wh(a, b) {
  var c;
  c = b == m ? n : b ? ((c = b.h & 64) ? c : b.yb) ? l : b.h ? n : w(Ha, b) : w(Ha, b);
  var d = c ? wc.a(rc, b) : b;
  c = W.a(d, "\ufdd0:validator");
  d = W.a(d, "\ufdd0:meta");
  return new sh(a, d, c, m)
}
function xh(a, b) {
  var c = m;
  1 < arguments.length && (c = R(Array.prototype.slice.call(arguments, 1), 0));
  return wh.call(this, a, c)
}
xh.n = 1;
xh.j = function(a) {
  var b = K(a), a = L(a);
  return wh(b, a)
};
xh.g = wh;
uh = function(a, b) {
  switch(arguments.length) {
    case 1:
      return vh.call(this, a);
    default:
      return xh.g(a, R(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
uh.n = 1;
uh.j = xh.j;
uh.c = vh;
uh.g = xh.g;
th = uh;
function yh(a, b) {
  var c = a.Ac;
  u(c) && !u(c.c ? c.c(b) : c.call(m, b)) && e(Error([H("Assert failed: "), H("Validator rejected reference state"), H("\n"), H(rh.g(R([xc(Rb(new wb(m, "validate", "validate", 1233162959, m), new wb(m, "new-value", "new-value", 972165309, m)), rc("\ufdd0:line", 6673, "\ufdd0:column", 13))], 0)))].join("")));
  c = a.state;
  a.state = b;
  mb(a, c, b);
  return b
}
var zh, Ah = m;
function Bh(a, b) {
  return yh(a, b.c ? b.c(a.state) : b.call(m, a.state))
}
function Ch(a, b, c) {
  return yh(a, b.a ? b.a(a.state, c) : b.call(m, a.state, c))
}
function Dh(a, b, c, d) {
  return yh(a, b.b ? b.b(a.state, c, d) : b.call(m, a.state, c, d))
}
function Eh(a, b, c, d, f) {
  return yh(a, b.o ? b.o(a.state, c, d, f) : b.call(m, a.state, c, d, f))
}
function Fh(a, b, c, d, f, g) {
  return yh(a, wc.g(b, a.state, c, d, f, R([g], 0)))
}
function Gh(a, b, c, d, f, g) {
  var i = m;
  5 < arguments.length && (i = R(Array.prototype.slice.call(arguments, 5), 0));
  return Fh.call(this, a, b, c, d, f, i)
}
Gh.n = 5;
Gh.j = function(a) {
  var b = K(a), a = N(a), c = K(a), a = N(a), d = K(a), a = N(a), f = K(a), a = N(a), g = K(a), a = L(a);
  return Fh(b, c, d, f, g, a)
};
Gh.g = Fh;
Ah = function(a, b, c, d, f, g) {
  switch(arguments.length) {
    case 2:
      return Bh.call(this, a, b);
    case 3:
      return Ch.call(this, a, b, c);
    case 4:
      return Dh.call(this, a, b, c, d);
    case 5:
      return Eh.call(this, a, b, c, d, f);
    default:
      return Gh.g(a, b, c, d, f, R(arguments, 5))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ah.n = 5;
Ah.j = Gh.j;
Ah.a = Bh;
Ah.b = Ch;
Ah.o = Dh;
Ah.Q = Eh;
Ah.g = Gh.g;
zh = Ah;
function Hh(a) {
  this.Nb = a;
  this.q = 0;
  this.h = 2153775104
}
Hh.prototype.C = function(a) {
  return ma(rh.g(R([a], 0)))
};
Hh.prototype.I = function(a, b) {
  return G(b, [H('#uuid "'), H(this.Nb), H('"')].join(""))
};
Hh.prototype.w = function(a, b) {
  var c = b instanceof Hh;
  return c ? this.Nb === b.Nb : c
};
var Ih, Jh, Kh, Lh;
function Mh() {
  return ca.navigator ? ca.navigator.userAgent : m
}
Lh = Kh = Jh = Ih = n;
var Nh;
if(Nh = Mh()) {
  var Oh = ca.navigator;
  Ih = 0 == Nh.indexOf("Opera");
  Jh = !Ih && -1 != Nh.indexOf("MSIE");
  Kh = !Ih && -1 != Nh.indexOf("WebKit");
  Lh = !Ih && !Kh && "Gecko" == Oh.product
}
var Ph = Ih, Z = Jh, Qh = Lh, Rh = Kh, Sh = ca.navigator, Th = -1 != (Sh && Sh.platform || "").indexOf("Mac"), Uh;
a: {
  var Vh = "", Wh;
  if(Ph && ca.opera) {
    var Xh = ca.opera.version, Vh = "function" == typeof Xh ? Xh() : Xh
  }else {
    if(Qh ? Wh = /rv\:([^\);]+)(\)|;)/ : Z ? Wh = /MSIE\s+([^\);]+)(\)|;)/ : Rh && (Wh = /WebKit\/(\S+)/), Wh) {
      var Yh = Wh.exec(Mh()), Vh = Yh ? Yh[1] : ""
    }
  }
  if(Z) {
    var Zh, $h = ca.document;
    Zh = $h ? $h.documentMode : h;
    if(Zh > parseFloat(Vh)) {
      Uh = String(Zh);
      break a
    }
  }
  Uh = Vh
}
var ai = {};
function bi(a) {
  var b;
  if(!(b = ai[a])) {
    b = 0;
    for(var c = la(String(Uh)).split("."), d = la(String(a)).split("."), f = Math.max(c.length, d.length), g = 0;0 == b && g < f;g++) {
      var i = c[g] || "", j = d[g] || "", k = RegExp("(\\d*)(\\D*)", "g"), p = RegExp("(\\d*)(\\D*)", "g");
      do {
        var t = k.exec(i) || ["", "", ""], x = p.exec(j) || ["", "", ""];
        if(0 == t[0].length && 0 == x[0].length) {
          break
        }
        b = ((0 == t[1].length ? 0 : parseInt(t[1], 10)) < (0 == x[1].length ? 0 : parseInt(x[1], 10)) ? -1 : (0 == t[1].length ? 0 : parseInt(t[1], 10)) > (0 == x[1].length ? 0 : parseInt(x[1], 10)) ? 1 : 0) || ((0 == t[2].length) < (0 == x[2].length) ? -1 : (0 == t[2].length) > (0 == x[2].length) ? 1 : 0) || (t[2] < x[2] ? -1 : t[2] > x[2] ? 1 : 0)
      }while(0 == b)
    }
    b = ai[a] = 0 <= b
  }
  return b
}
var ci = {};
function di() {
  return ci[9] || (ci[9] = Z && !!document.documentMode && 9 <= document.documentMode)
}
;function ei(a, b, c, d, f) {
  if(!Z && (!Rh || !bi("525"))) {
    return l
  }
  if(Th && f) {
    return fi(a)
  }
  if(f && !d || !c && (17 == b || 18 == b) || Z && d && b == a) {
    return n
  }
  switch(a) {
    case 13:
      return!(Z && di());
    case 27:
      return!Rh
  }
  return fi(a)
}
function fi(a) {
  if(48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || Rh && 0 == a) {
    return l
  }
  switch(a) {
    case 32:
    ;
    case 63:
    ;
    case 107:
    ;
    case 109:
    ;
    case 110:
    ;
    case 111:
    ;
    case 186:
    ;
    case 59:
    ;
    case 189:
    ;
    case 187:
    ;
    case 61:
    ;
    case 188:
    ;
    case 190:
    ;
    case 191:
    ;
    case 192:
    ;
    case 222:
    ;
    case 219:
    ;
    case 220:
    ;
    case 221:
      return l;
    default:
      return n
  }
}
function gi(a) {
  switch(a) {
    case 61:
      return 187;
    case 59:
      return 186;
    case 224:
      return 91;
    case 0:
      return 224;
    default:
      return a
  }
}
;var hi;
!Z || di();
!Qh && !Z || Z && di() || Qh && bi("1.9.1");
var ii = Z && !bi("9");
function ji(a, b) {
  var c = b || document;
  return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : c.getElementsByClassName ? c.getElementsByClassName(a) : ki("*", a, b)
}
function li(a) {
  var b = document, c = m;
  return(c = b.querySelectorAll && b.querySelector ? b.querySelector("." + a) : ji(a, h)[0]) || m
}
function ki(a, b, c) {
  var d = document, c = c || d, a = a && "*" != a ? a.toUpperCase() : "";
  if(c.querySelectorAll && c.querySelector && (a || b)) {
    return c.querySelectorAll(a + (b ? "." + b : ""))
  }
  if(b && c.getElementsByClassName) {
    c = c.getElementsByClassName(b);
    if(a) {
      for(var d = {}, f = 0, g = 0, i;i = c[g];g++) {
        a == i.nodeName && (d[f++] = i)
      }
      d.length = f;
      return d
    }
    return c
  }
  c = c.getElementsByTagName(a || "*");
  if(b) {
    d = {};
    for(g = f = 0;i = c[g];g++) {
      a = i.className, "function" == typeof a.split && 0 <= oa(a.split(/\s+/), b) && (d[f++] = i)
    }
    d.length = f;
    return d
  }
  return c
}
function mi(a, b) {
  a.appendChild(b)
}
function ni(a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : m
}
var oi = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, pi = {IMG:" ", BR:"\n"};
function qi(a, b, c) {
  if(!(a.nodeName in oi)) {
    if(3 == a.nodeType) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in pi) {
        b.push(pi[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          qi(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function ri(a) {
  this.Bb = a || ca.document || document
}
r = ri.prototype;
r.Yb = function(a) {
  return da(a) ? this.Bb.getElementById(a) : a
};
r.createElement = function(a) {
  return this.Bb.createElement(a)
};
r.createTextNode = function(a) {
  return this.Bb.createTextNode(a)
};
r.appendChild = mi;
r.append = function(a, b) {
  function c(a) {
    a && f.appendChild(da(a) ? d.createTextNode(a) : a)
  }
  for(var d = 9 == a.nodeType ? a : a.ownerDocument || a.document, f = a, g = arguments, i = 1;i < g.length;i++) {
    var j = g[i], k = j, p = s(k);
    if(("array" == p || "object" == p && "number" == typeof k.length) && !(fa(j) && 0 < j.nodeType)) {
      k = pa;
      a: {
        if((p = j) && "number" == typeof p.length) {
          if(fa(p)) {
            p = "function" == typeof p.item || "string" == typeof p.item;
            break a
          }
          if(ea(p)) {
            p = "function" == typeof p.item;
            break a
          }
        }
        p = n
      }
      if(p) {
        if(p = j.length, 0 < p) {
          for(var t = Array(p), x = 0;x < p;x++) {
            t[x] = j[x]
          }
          j = t
        }else {
          j = []
        }
      }
      k(j, c)
    }else {
      c(j)
    }
  }
};
function si(a) {
  var b = a.type;
  if(b === h) {
    return m
  }
  switch(b.toLowerCase()) {
    case "checkbox":
    ;
    case "radio":
      return a.checked ? a.value : m;
    case "select-one":
      return b = a.selectedIndex, 0 <= b ? a.options[b].value : m;
    case "select-multiple":
      for(var b = [], c, d = 0;c = a.options[d];d++) {
        c.selected && b.push(c.value)
      }
      return b.length ? b : m;
    default:
      return a.value !== h ? a.value : m
  }
}
;!Z || di();
var ti = !Z || di(), ui = Z && !bi("8");
!Rh || bi("528");
Qh && bi("1.9b") || Z && bi("8") || Ph && bi("9.5") || Rh && bi("528");
Qh && !bi("8") || Z && bi("9");
function vi() {
  this.Xb = n
}
;function wi(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
wi.prototype.Ja = n;
wi.prototype.defaultPrevented = n;
wi.prototype.eb = l;
wi.prototype.preventDefault = function() {
  this.defaultPrevented = l;
  this.eb = n
};
function xi(a) {
  xi[" "](a);
  return a
}
xi[" "] = function() {
};
function yi(a, b) {
  a && this.Ra(a, b)
}
ka(yi, wi);
r = yi.prototype;
r.target = m;
r.relatedTarget = m;
r.offsetX = 0;
r.offsetY = 0;
r.clientX = 0;
r.clientY = 0;
r.screenX = 0;
r.screenY = 0;
r.button = 0;
r.keyCode = 0;
r.charCode = 0;
r.ctrlKey = n;
r.altKey = n;
r.shiftKey = n;
r.metaKey = n;
r.wc = n;
r.Eb = m;
r.Ra = function(a, b) {
  var c = this.type = a.type;
  wi.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(Qh) {
      var f;
      a: {
        try {
          xi(d.nodeName);
          f = l;
          break a
        }catch(g) {
        }
        f = n
      }
      f || (d = m)
    }
  }else {
    "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement)
  }
  this.relatedTarget = d;
  this.offsetX = Rh || a.offsetX !== h ? a.offsetX : a.layerX;
  this.offsetY = Rh || a.offsetY !== h ? a.offsetY : a.layerY;
  this.clientX = a.clientX !== h ? a.clientX : a.pageX;
  this.clientY = a.clientY !== h ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.wc = Th ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.Eb = a;
  a.defaultPrevented && this.preventDefault();
  delete this.Ja
};
r.preventDefault = function() {
  yi.zc.preventDefault.call(this);
  var a = this.Eb;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = n, ui) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
function zi() {
}
var Ai = 0;
r = zi.prototype;
r.key = 0;
r.La = n;
r.Ob = n;
r.Ra = function(a, b, c, d, f, g) {
  ea(a) ? this.$b = l : a && a.handleEvent && ea(a.handleEvent) ? this.$b = n : e(Error("Invalid listener argument"));
  this.Ta = a;
  this.dc = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.Hb = g;
  this.Ob = n;
  this.key = ++Ai;
  this.La = n
};
r.handleEvent = function(a) {
  return this.$b ? this.Ta.call(this.Hb || this.src, a) : this.Ta.handleEvent.call(this.Ta, a)
};
var Bi = {}, Ci = {}, Di = {}, Ei = {};
function Fi(a, b, c, d, f) {
  if(b) {
    if("array" == s(b)) {
      for(var g = 0;g < b.length;g++) {
        Fi(a, b[g], c, d, f)
      }
      return m
    }
    var d = !!d, i = Ci;
    b in i || (i[b] = {Z:0, W:0});
    i = i[b];
    d in i || (i[d] = {Z:0, W:0}, i.Z++);
    var i = i[d], j = ga(a), k;
    i.W++;
    if(i[j]) {
      k = i[j];
      for(g = 0;g < k.length;g++) {
        if(i = k[g], i.Ta == c && i.Hb == f) {
          if(i.La) {
            break
          }
          return k[g].key
        }
      }
    }else {
      k = i[j] = [], i.Z++
    }
    var p = Gi, t = ti ? function(a) {
      return p.call(t.src, t.key, a)
    } : function(a) {
      a = p.call(t.src, t.key, a);
      if(!a) {
        return a
      }
    }, g = t;
    g.src = a;
    i = new zi;
    i.Ra(c, g, a, b, d, f);
    c = i.key;
    g.key = c;
    k.push(i);
    Bi[c] = i;
    Di[j] || (Di[j] = []);
    Di[j].push(i);
    a.addEventListener ? (a == ca || !a.Wb) && a.addEventListener(b, g, d) : a.attachEvent(b in Ei ? Ei[b] : Ei[b] = "on" + b, g);
    return c
  }
  e(Error("Invalid event type"))
}
function Hi(a, b, c, d, f) {
  if("array" == s(b)) {
    for(var g = 0;g < b.length;g++) {
      Hi(a, b[g], c, d, f)
    }
  }else {
    d = !!d;
    a: {
      g = Ci;
      if(b in g && (g = g[b], d in g && (g = g[d], a = ga(a), g[a]))) {
        a = g[a];
        break a
      }
      a = m
    }
    if(a) {
      for(g = 0;g < a.length;g++) {
        if(a[g].Ta == c && a[g].capture == d && a[g].Hb == f) {
          Ii(a[g].key);
          break
        }
      }
    }
  }
}
function Ii(a) {
  if(Bi[a]) {
    var b = Bi[a];
    if(!b.La) {
      var c = b.src, d = b.type, f = b.dc, g = b.capture;
      c.removeEventListener ? (c == ca || !c.Wb) && c.removeEventListener(d, f, g) : c.detachEvent && c.detachEvent(d in Ei ? Ei[d] : Ei[d] = "on" + d, f);
      c = ga(c);
      if(Di[c]) {
        var f = Di[c], i = oa(f, b);
        0 <= i && na.splice.call(f, i, 1);
        0 == f.length && delete Di[c]
      }
      b.La = l;
      if(b = Ci[d][g][c]) {
        b.bc = l, Ji(d, g, c, b)
      }
      delete Bi[a]
    }
  }
}
function Ji(a, b, c, d) {
  if(!d.ab && d.bc) {
    for(var f = 0, g = 0;f < d.length;f++) {
      d[f].La ? d[f].dc.src = m : (f != g && (d[g] = d[f]), g++)
    }
    d.length = g;
    d.bc = n;
    0 == g && (delete Ci[a][b][c], Ci[a][b].Z--, 0 == Ci[a][b].Z && (delete Ci[a][b], Ci[a].Z--), 0 == Ci[a].Z && delete Ci[a])
  }
}
function Ki(a, b, c, d, f) {
  var g = 1, b = ga(b);
  if(a[b]) {
    a.W--;
    a = a[b];
    a.ab ? a.ab++ : a.ab = 1;
    try {
      for(var i = a.length, j = 0;j < i;j++) {
        var k = a[j];
        k && !k.La && (g &= Li(k, f) !== n)
      }
    }finally {
      a.ab--, Ji(c, d, b, a)
    }
  }
  return Boolean(g)
}
function Li(a, b) {
  a.Ob && Ii(a.key);
  return a.handleEvent(b)
}
function Gi(a, b) {
  if(!Bi[a]) {
    return l
  }
  var c = Bi[a], d = c.type, f = Ci;
  if(!(d in f)) {
    return l
  }
  var f = f[d], g, i;
  if(!ti) {
    var j;
    if(!(j = b)) {
      a: {
        j = ["window", "event"];
        for(var k = ca;g = j.shift();) {
          if(k[g] != m) {
            k = k[g]
          }else {
            j = m;
            break a
          }
        }
        j = k
      }
    }
    g = j;
    j = l in f;
    k = n in f;
    if(j) {
      if(0 > g.keyCode || g.returnValue != h) {
        return l
      }
      a: {
        var p = n;
        if(0 == g.keyCode) {
          try {
            g.keyCode = -1;
            break a
          }catch(t) {
            p = l
          }
        }
        if(p || g.returnValue == h) {
          g.returnValue = l
        }
      }
    }
    p = new yi;
    p.Ra(g, this);
    g = l;
    try {
      if(j) {
        for(var x = [], A = p.currentTarget;A;A = A.parentNode) {
          x.push(A)
        }
        i = f[l];
        i.W = i.Z;
        for(var D = x.length - 1;!p.Ja && 0 <= D && i.W;D--) {
          p.currentTarget = x[D], g &= Ki(i, x[D], d, l, p)
        }
        if(k) {
          i = f[n];
          i.W = i.Z;
          for(D = 0;!p.Ja && D < x.length && i.W;D++) {
            p.currentTarget = x[D], g &= Ki(i, x[D], d, n, p)
          }
        }
      }else {
        g = Li(c, p)
      }
    }finally {
      x && (x.length = 0)
    }
    return g
  }
  d = new yi(b, this);
  return g = Li(c, d)
}
;var Mi, Ni = document.createElement("div");
Ni.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
var Oi = O.a(Ni.firstChild.nodeType, 3), Pi = O.a(Ni.getElementsByTagName("tbody").length, 0);
O.a(Ni.getElementsByTagName("link").length, 0);
var Qi = /<|&#?\w+;/, Ri = /^\s+/, Si = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i, Ti = /<([\w:]+)/, Ui = /<tbody/i, Vi = Y([1, "<select multiple='multiple'>", "</select>"]), Wi = Y([1, "<table>", "</table>"]), Xi = Y([3, "<table><tbody><tr>", "</tr></tbody></table>"]), Yi;
a: {
  for(var Zi = "col \ufdd0:default tfoot caption optgroup legend area td thead th option tbody tr colgroup".split(" "), $i = [Y([2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"]), Y([0, "", ""]), Wi, Wi, Vi, Y([1, "<fieldset>", "</fieldset>"]), Y([1, "<map>", "</map>"]), Xi, Wi, Xi, Vi, Wi, Y([2, "<table><tbody>", "</tbody></table>"]), Wi], aj = Zi.length, bj = 0, cj = nb(Of);;) {
    if(bj < aj) {
      var dj = bj + 1, ej = qb(cj, Zi[bj], $i[bj]), bj = dj, cj = ej
    }else {
      Yi = pb(cj);
      break a
    }
  }
  Yi = h
}
function fj(a) {
  var b;
  ya(Si) ? b = a.replace(RegExp(String(Si).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), "<$1></$2>") : u(Si.hasOwnProperty("source")) ? b = a.replace(RegExp(Si.source, "g"), "<$1></$2>") : e([H("Invalid match arg: "), H(Si)].join(""));
  var c = ("" + H($b(ih(Ti, b)))).toLowerCase(), d = W.b(Yi, c, (new X("\ufdd0:default")).call(m, Yi)), a = V.b(d, 0, m), f = V.b(d, 1, m), d = V.b(d, 2, m);
  a: {
    var g = document.createElement("div");
    g.innerHTML = [H(f), H(b), H(d)].join("");
    for(d = g;;) {
      if(0 < a) {
        a -= 1, d = d.lastChild
      }else {
        a = d;
        break a
      }
    }
    a = h
  }
  if(u(Pi)) {
    a: {
      d = a;
      g = v(ih(Ui, b));
      ((c = O.a(c, "table")) ? g : c) ? (f = d.firstChild, f = u(f) ? d.firstChild.childNodes : f) : f = ((f = O.a(f, "<table>")) ? g : f) ? divchildNodes : tf;
      for(var f = J(f), d = m, i = g = 0;;) {
        if(i < g) {
          var c = d.t(d, i), j = O.a(c.nodeName, "tbody");
          (j ? O.a(c.childNodes.length, 0) : j) && c.parentNode.removeChild(c);
          i += 1
        }else {
          if(f = J(f)) {
            Fc(f) ? (d = sb(f), f = tb(f), c = d, g = U(d), d = c) : (c = K(f), ((d = O.a(c.nodeName, "tbody")) ? O.a(c.childNodes.length, 0) : d) && c.parentNode.removeChild(c), f = N(f), d = m, g = 0), i = 0
          }else {
            break a
          }
        }
      }
    }
  }
  f = (f = v(Oi)) ? ih(Ri, b) : f;
  u(f) && a.insertBefore(document.createTextNode(K(ih(Ri, b))), a.firstChild);
  return a.childNodes
}
function gj(a) {
  if(a ? a.Cb : a) {
    return a.Cb(a)
  }
  var b;
  var c = gj[s(a == m ? m : a)];
  c ? b = c : (c = gj._) ? b = c : e(y("DomContent.nodes", a));
  return b.call(m, a)
}
function hj(a) {
  if(a ? a.Db : a) {
    return a.Db(a)
  }
  var b;
  var c = hj[s(a == m ? m : a)];
  c ? b = c : (c = hj._) ? b = c : e(y("DomContent.single-node", a));
  return b.call(m, a)
}
function $(a) {
  a = Rg(a);
  return da(a) ? document.getElementById(a) : a
}
var kj = function ij(b) {
  h === Mi && (Mi = {}, Mi = function(b, d, f) {
    this.Na = b;
    this.fc = d;
    this.tc = f;
    this.q = 0;
    this.h = 393216
  }, Mi.Ya = l, Mi.Ab = "domina/t8697", Mi.zb = function(b, d) {
    return G(d, "domina/t8697")
  }, Mi.prototype.Cb = function() {
    return jj.c ? jj.c(ji(Rg(this.Na))) : jj.call(m, ji(Rg(this.Na)))
  }, Mi.prototype.Db = function() {
    return jj.c ? jj.c(li(Rg(this.Na))) : jj.call(m, li(Rg(this.Na)))
  }, Mi.prototype.D = q("tc"), Mi.prototype.F = function(b, d) {
    return new Mi(this.Na, this.fc, d)
  });
  return new Mi(b, ij, m)
};
function lj(a, b) {
  mj.b ? mj.b(mi, a, b) : mj.call(m, mi, a, b)
}
function nj(a, b) {
  mj.b ? mj.b(function(a, b) {
    a.insertBefore(b, a.childNodes[0] || m)
  }, a, b) : mj.call(m, function(a, b) {
    a.insertBefore(b, a.childNodes[0] || m)
  }, a, b);
  return a
}
function oj(a) {
  return $g.c(Ae.a(ni, gj(a)))
}
function pj(a) {
  var b = hj(a).attributes;
  return Wc.a(T, Ve(se(), Ae.a(function(a) {
    var a = b.item(a), d = a.nodeValue, f = le.a(m, d);
    return(f ? le.a("", d) : f) ? wa([od.c(a.nodeName.toLowerCase()), a.nodeValue], l) : m
  }, Ug.c(b.length))))
}
function qj(a) {
  a = hj(a);
  if(ii && "innerText" in a) {
    a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
  }else {
    var b = [];
    qi(a, b, l);
    a = b.join("")
  }
  a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
  a = a.replace(/\u200B/g, "");
  ii || (a = a.replace(/ +/g, " "));
  " " != a && (a = a.replace(/^\s*/, ""));
  return la(a)
}
function rj(a) {
  return si(hj(a))
}
function mj(a, b, c) {
  for(var b = gj(b), d = gj(c), c = document.createDocumentFragment(), f = J(d), g = m, i = 0, j = 0;;) {
    if(j < i) {
      var k = g.t(g, j);
      c.appendChild(k);
      j += 1
    }else {
      if(f = J(f)) {
        g = f, Fc(g) ? (f = sb(g), j = tb(g), g = f, i = U(f), f = j) : (f = K(g), c.appendChild(f), f = N(g), g = m, i = 0), j = 0
      }else {
        break
      }
    }
  }
  d = dh.c(Ke.a(U(b) - 1, function(a, b, c) {
    return function() {
      return c.cloneNode(l)
    }
  }(b, d, c)));
  return J(b) ? (a.a ? a.a(K(b), c) : a.call(m, K(b), c), dh.c(Ae.b(function(b, c) {
    return a.a ? a.a(b, c) : a.call(m, b, c)
  }, L(b), d))) : m
}
var sj, tj = m;
function uj(a) {
  return tj.a(a, 0)
}
function vj(a, b) {
  return b < a.length ? new Ed(m, n, function() {
    return S(a.item(b), tj.a(a, b + 1))
  }, m) : m
}
tj = function(a, b) {
  switch(arguments.length) {
    case 1:
      return uj.call(this, a);
    case 2:
      return vj.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
tj.c = uj;
tj.a = vj;
sj = tj;
var wj, xj = m;
function yj(a) {
  return xj.a(a, 0)
}
function zj(a, b) {
  return b < a.length ? new Ed(m, n, function() {
    return S(a[b], xj.a(a, b + 1))
  }, m) : m
}
xj = function(a, b) {
  switch(arguments.length) {
    case 1:
      return yj.call(this, a);
    case 2:
      return zj.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
xj.c = yj;
xj.a = zj;
wj = xj;
function Aj(a) {
  return u(a.item) ? sj.c(a) : wj.c(a)
}
function Bj(a) {
  if(u(a)) {
    var b = v(a.name);
    return b ? a.length : b
  }
  return a
}
function jj(a) {
  if(a == m) {
    a = M
  }else {
    var b;
    b = a ? ((b = a.h & 8388608) ? b : a.Aa) || (a.h ? 0 : w(hb, a)) : w(hb, a);
    a = b ? J(a) : u(Bj(a)) ? Aj(a) : J(Y([a]))
  }
  return a
}
gj._ = function(a) {
  if(a == m) {
    a = M
  }else {
    var b;
    b = a ? ((b = a.h & 8388608) ? b : a.Aa) || (a.h ? 0 : w(hb, a)) : w(hb, a);
    a = b ? J(a) : u(Bj(a)) ? Aj(a) : J(Y([a]))
  }
  return a
};
hj._ = function(a) {
  if(a == m) {
    a = m
  }else {
    var b;
    b = a ? ((b = a.h & 8388608) ? b : a.Aa) || (a.h ? 0 : w(hb, a)) : w(hb, a);
    a = b ? K(a) : u(Bj(a)) ? a.item(0) : a
  }
  return a
};
gj.string = function(a) {
  return dh.c(gj(u(ih(Qi, a)) ? fj(a) : document.createTextNode(a)))
};
hj.string = function(a) {
  return hj(u(ih(Qi, a)) ? fj(a) : document.createTextNode(a))
};
u("undefined" != typeof NodeList) && (r = NodeList.prototype, r.Aa = l, r.v = function(a) {
  return Aj(a)
}, r.Oa = l, r.t = function(a, b) {
  return a.item(b)
}, r.R = function(a, b, c) {
  return a.length <= b ? c : V.a(a, b)
}, r.kb = l, r.A = function(a) {
  return a.length
});
u("undefined" != typeof StaticNodeList) && (r = StaticNodeList.prototype, r.Aa = l, r.v = function(a) {
  return Aj(a)
}, r.Oa = l, r.t = function(a, b) {
  return a.item(b)
}, r.R = function(a, b, c) {
  return a.length <= b ? c : V.a(a, b)
}, r.kb = l, r.A = function(a) {
  return a.length
});
u("undefined" != typeof HTMLCollection) && (r = HTMLCollection.prototype, r.Aa = l, r.v = function(a) {
  return Aj(a)
}, r.Oa = l, r.t = function(a, b) {
  return a.item(b)
}, r.R = function(a, b, c) {
  return a.length <= b ? c : V.a(a, b)
}, r.kb = l, r.A = function(a) {
  return a.length
});
function Cj() {
  this.Xb = n
}
ka(Cj, vi);
r = Cj.prototype;
r.Wb = l;
r.cc = m;
r.addEventListener = function(a, b, c, d) {
  Fi(this, a, b, c, d)
};
r.removeEventListener = function(a, b, c, d) {
  Hi(this, a, b, c, d)
};
r.dispatchEvent = function(a) {
  var b = a.type || a, c = Ci;
  if(b in c) {
    if(da(a)) {
      a = new wi(a, this)
    }else {
      if(a instanceof wi) {
        a.target = a.target || this
      }else {
        var d = a, a = new wi(b, this);
        ra(a, d)
      }
    }
    var d = 1, f, c = c[b], b = l in c, g;
    if(b) {
      f = [];
      for(g = this;g;g = g.cc) {
        f.push(g)
      }
      g = c[l];
      g.W = g.Z;
      for(var i = f.length - 1;!a.Ja && 0 <= i && g.W;i--) {
        a.currentTarget = f[i], d &= Ki(g, f[i], a.type, l, a) && a.eb != n
      }
    }
    if(n in c) {
      if(g = c[n], g.W = g.Z, b) {
        for(i = 0;!a.Ja && i < f.length && g.W;i++) {
          a.currentTarget = f[i], d &= Ki(g, f[i], a.type, n, a) && a.eb != n
        }
      }else {
        for(f = this;!a.Ja && f && g.W;f = f.cc) {
          a.currentTarget = f, d &= Ki(g, f, a.type, n, a) && a.eb != n
        }
      }
    }
    a = Boolean(d)
  }else {
    a = l
  }
  return a
};
function Dj(a, b) {
  this.Xb = n;
  a && (this.$a && this.detach(), this.Fa = a, this.Za = Fi(this.Fa, "keypress", this, b), this.Jb = Fi(this.Fa, "keydown", this.qc, b, this), this.$a = Fi(this.Fa, "keyup", this.rc, b, this))
}
ka(Dj, Cj);
r = Dj.prototype;
r.Fa = m;
r.Za = m;
r.Jb = m;
r.$a = m;
r.pa = -1;
r.oa = -1;
var Ej = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, Fj = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, Gj = Z || 
Rh && bi("525");
r = Dj.prototype;
r.qc = function(a) {
  if(Rh && (17 == this.pa && !a.ctrlKey || 18 == this.pa && !a.altKey)) {
    this.oa = this.pa = -1
  }
  Gj && !ei(a.keyCode, this.pa, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.oa = Qh ? gi(a.keyCode) : a.keyCode
};
r.rc = function() {
  this.oa = this.pa = -1
};
r.handleEvent = function(a) {
  var b = a.Eb, c, d;
  Z && "keypress" == a.type ? (c = this.oa, d = 13 != c && 27 != c ? b.keyCode : 0) : Rh && "keypress" == a.type ? (c = this.oa, d = 0 <= b.charCode && 63232 > b.charCode && fi(c) ? b.charCode : 0) : Ph ? (c = this.oa, d = fi(c) ? b.keyCode : 0) : (c = b.keyCode || this.oa, d = b.charCode || 0, Th && (63 == d && 224 == c) && (c = 191));
  var f = c, g = b.keyIdentifier;
  c ? 63232 <= c && c in Ej ? f = Ej[c] : 25 == c && a.shiftKey && (f = 9) : g && g in Fj && (f = Fj[g]);
  a = f == this.pa;
  this.pa = f;
  b = new Hj(f, d, a, b);
  this.dispatchEvent(b)
};
r.Yb = q("Fa");
r.detach = function() {
  this.Za && (Ii(this.Za), Ii(this.Jb), Ii(this.$a), this.$a = this.Jb = this.Za = m);
  this.Fa = m;
  this.oa = this.pa = -1
};
function Hj(a, b, c, d) {
  d && this.Ra(d, h);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
ka(Hj, yi);
function Ij(a) {
  return Fi(new Dj(a), "key", function(b) {
    (function() {
      var a = O.a(b.keyCode, 48);
      return a || (a = O.a(b.keyCode, 49)) || (a = O.a(b.keyCode, 50)) || (a = O.a(b.keyCode, 51)) || (a = O.a(b.keyCode, 52)) || (a = O.a(b.keyCode, 53)) || (a = O.a(b.keyCode, 54)) || (a = O.a(b.keyCode, 55)) || (a = O.a(b.keyCode, 56)) || (a = O.a(b.keyCode, 57)) || (a = O.a(b.keyCode, 37)) || (a = O.a(b.keyCode, 39)) || (a = O.a(b.keyCode, 38)) || (a = O.a(b.keyCode, 40)) || (a = O.a(b.keyCode, 9)) || (a = O.a(b.keyCode, 8)) || (a = O.a(b.keyCode, 46)) || (a = O.a(b.keyCode, 36)) ? a : (a = O.a(b.keyCode, 
      35)) ? a : O.a(b.keyCode, 190)
    })() || b.preventDefault();
    var c;
    c = ih(/\./, rj(a));
    c = u(c) ? O.a(b.keyCode, 190) : c;
    return u(c) ? b.preventDefault() : m
  })
}
function Jj(a) {
  if(O.a((new X("\ufdd0:type")).call(m, pj($((new X("\ufdd0:id")).call(m, a)))), "radio") || 0 < U(rj($((new X("\ufdd0:id")).call(m, a))))) {
    return l
  }
  nj($([H("td"), H((new X("\ufdd0:id")).call(m, a))].join("")), [H('<div class="help">Value for field '), H(qj($([H("l"), H((new X("\ufdd0:id")).call(m, a))].join("")))), H(" is required</div>")].join(""));
  return n
}
function Kj(a) {
  var b;
  b = rj($((new X("\ufdd0:id")).call(m, a)));
  b = "number" === typeof(u(ih(/^-?\d+\.?\d[E]?-?\d*$|^-?\d+\.?\d*$/, b)) ? parseFloat(b) : b);
  if(u(b)) {
    return l
  }
  nj($([H("td"), H((new X("\ufdd0:id")).call(m, a))].join("")), "" + H('<div class="help">Given value is not a number</div>'));
  return n
}
function Lj(a, b, c) {
  return O.a(a, M) ? (nj($(b), [H('<div class="help">Select one option for '), H(c), H("</div>")].join("")), n) : l
}
;function Mj(a, b) {
  e(Error(wc.a(H, b)))
}
function Nj(a, b) {
  var c = m;
  1 < arguments.length && (c = R(Array.prototype.slice.call(arguments, 1), 0));
  return Mj.call(this, 0, c)
}
Nj.n = 1;
Nj.j = function(a) {
  K(a);
  a = L(a);
  return Mj(0, a)
};
Nj.g = Mj;
jh("([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
jh("([-+]?[0-9]+)/([0-9]+)");
jh("([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
jh("[:]?([^0-9/].*/)?([^0-9/][^/]*)");
jh("[0-9A-Fa-f]{2}");
jh("[0-9A-Fa-f]{4}");
function Oj(a) {
  var b = 0 === (a % 4 + 4) % 4;
  return u(b) ? (b = v(0 === (a % 100 + 100) % 100), u(b) ? b : 0 === (a % 400 + 400) % 400) : b
}
var Pj, Qj = Y([m, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]), Rj = Y([m, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
Pj = function(a, b) {
  return W.a(u(b) ? Rj : Qj, a)
};
var Sj, Tj = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
function Uj(a, b, c, d) {
  var f = a <= b;
  (f ? b <= c : f) || e(Error([H("Assert failed: "), H([H(d), H(" Failed:  "), H(a), H("<="), H(b), H("<="), H(c)].join("")), H("\n"), H(rh.g(R([xc(Rb(new wb(m, "<=", "<=", -1640529606, m), new wb(m, "low", "low", -1640424179, m), new wb(m, "n", "n", -1640531417, m), new wb(m, "high", "high", -1637329061, m)), rc("\ufdd0:line", 474, "\ufdd0:column", 25))], 0)))].join("")));
  return b
}
Sj = function(a) {
  var b = Ae.a(vf, Je(hh(Tj, a)));
  if(u(b)) {
    var c = V.b(b, 0, m);
    V.b(c, 0, m);
    var a = V.b(c, 1, m), d = V.b(c, 2, m), f = V.b(c, 3, m), g = V.b(c, 4, m), i = V.b(c, 5, m), j = V.b(c, 6, m), c = V.b(c, 7, m), k = V.b(b, 1, m);
    V.b(k, 0, m);
    V.b(k, 1, m);
    V.b(k, 2, m);
    k = function(a) {
      0 < arguments.length && R(Array.prototype.slice.call(arguments, 0), 0);
      return m
    };
    k.n = 0;
    k.j = function(a) {
      J(a);
      return m
    };
    k.g = ba(m);
    var p = Ae.a(function(a) {
      return Ae.a(function(a) {
        return parseInt(a, 10)
      }, a)
    }, Ae.b(function(a, b) {
      return Xe.b(b, Y([0]), a)
    }, Y([k, function(a) {
      return O.a(a, "-") ? "-1" : "1"
    }]), b)), t = V.b(p, 0, m);
    V.b(t, 0, m);
    var b = V.b(t, 1, m), k = V.b(t, 2, m), x = V.b(t, 3, m), A = V.b(t, 4, m), D = V.b(t, 5, m), B = V.b(t, 6, m), t = V.b(t, 7, m), P = V.b(p, 1, m), p = V.b(P, 0, m), C = V.b(P, 1, m), P = V.b(P, 2, m);
    return Y([v(a) ? 1970 : b, v(d) ? 1 : Uj(1, k, 12, "timestamp month field must be in range 1..12"), v(f) ? 1 : Uj(1, x, Pj.a ? Pj.a(k, Oj(b)) : Pj.call(m, k, Oj(b)), "timestamp day field must be in range 1..last day in month"), v(g) ? 0 : Uj(0, A, 23, "timestamp hour field must be in range 0..23"), v(i) ? 0 : Uj(0, D, 59, "timestamp minute field must be in range 0..59"), v(j) ? 0 : Uj(0, B, O.a(D, 59) ? 60 : 59, "timestamp second field must be in range 0..60"), v(c) ? 0 : Uj(0, t, 999, "timestamp millisecond field must be in range 0..999"), 
    p * (60 * C + P)])
  }
  return m
};
th.c(wa(["inst", function(a) {
  var b;
  if(ya(a)) {
    if(b = Sj.c ? Sj.c(a) : Sj.call(m, a), u(b)) {
      var a = V.b(b, 0, m), c = V.b(b, 1, m), d = V.b(b, 2, m), f = V.b(b, 3, m), g = V.b(b, 4, m), i = V.b(b, 5, m), j = V.b(b, 6, m);
      b = V.b(b, 7, m);
      b = new Date(Date.UTC(a, c - 1, d, f, g, i, j) - 6E4 * b)
    }else {
      b = Nj.g(m, R([[H("Unrecognized date/time syntax: "), H(a)].join("")], 0))
    }
  }else {
    b = Nj.g(m, R(["Instance literal expects a string for its timestamp."], 0))
  }
  return b
}, "uuid", function(a) {
  return ya(a) ? new Hh(a) : Nj.g(m, R(["UUID literal expects a string as its representation."], 0))
}, "queue", function(a) {
  return Ec(a) ? We(Hf, a) : Nj.g(m, R(["Queue literal expects a vector for its elements."], 0))
}], l));
th.c(m);
function Vj(a) {
  return v(/^[\s\xa0]*$/.test(a == m ? "" : String(a)))
}
function Wj() {
  var a = /^(?=.*\d).{4,8}$/;
  return function(b) {
    return Lc(hh(a, b))
  }
}
function Xj(a) {
  var b = [H("(?i)[a-z0-9!#$%&'*+/=?^_`{|}~-]+"), H("(?:\\.[a-z0-9!#$%&'*+/=?"), H("^_`{|}~-]+)*"), H("@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+"), H("[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")].join("");
  return Lc(hh(jh(b), a))
}
;function Yj(a, b, c) {
  return function(d) {
    d = d.c ? d.c(a) : d.call(m, a);
    return v(b.c ? b.c(d) : b.call(m, d)) ? wa([a, Y([c])], l) : m
  }
}
function Zj(a) {
  return wc.b(Kg, We, a)
}
function $j(a) {
  var b = m;
  0 < arguments.length && (b = R(Array.prototype.slice.call(arguments, 0), 0));
  return Zj.call(this, b)
}
$j.n = 0;
$j.j = function(a) {
  a = J(a);
  return Zj(a)
};
$j.g = Zj;
function ak(a, b) {
  return wc.a($j, Ae.a(function(b) {
    return b.c ? b.c(a) : b.call(m, a)
  }, Ae.a(te.a(wc, Yj), b)))
}
function bk(a, b) {
  var c = m;
  1 < arguments.length && (c = R(Array.prototype.slice.call(arguments, 1), 0));
  return ak.call(this, a, c)
}
bk.n = 1;
bk.j = function(a) {
  var b = K(a), a = L(a);
  return ak(b, a)
};
bk.g = ak;
function ck(a) {
  return!O.a(a, "- Select -")
}
function dk(a) {
  return bk.g(a, R([Y(["\ufdd0:ofirst-name", Vj, "First name can't be empty."]), Y(["\ufdd0:olast-name", Vj, "Last name can't be empty."]), Y(["\ufdd0:oemail", Vj, "Email can't be empty."]), Y(["\ufdd0:oemail", Xj, "Email not in valid format."]), Y(["\ufdd0:opassword", Vj, "Password can't be empty."]), Y(["\ufdd0:oconfirm-password", Vj, "Confirm password can't be empty."]), Y(["\ufdd0:oheight", Vj, "Height can't be empty."]), Y(["\ufdd0:oweight", Vj, "Weight can't be empty."]), Y(["\ufdd0:obirthday-day", 
  ck, "Birthday day can't be empty."]), Y(["\ufdd0:obirthday-month", ck, "Birthday month can't be empty."]), Y(["\ufdd0:obirthday-year", ck, "Birthday year can't be empty."]), Y(["\ufdd0:ogender", Vj, "Gender can't be empty."]), Y(["\ufdd0:odiet", Vj, "Diet can't be empty."]), Y(["\ufdd0:oactivity", Vj, "Activity can't be empty."])], 0))
}
;var ek;
ek = ba(l);
/*
 Portions of this code are from the Dojo Toolkit, received by
 The Closure Library Authors under the BSD license. All other code is
 Copyright 2005-2009 The Closure Library Authors. All Rights Reserved.

The "New" BSD License:

Copyright (c) 2005-2009, The Dojo Foundation
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

 Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
 Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation
    and/or other materials provided with the distribution.
 Neither the name of the Dojo Foundation nor the names of its contributors
    may be used to endorse or promote products derived from this software
    without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function fk(a, b) {
  var c = b || [];
  a && c.push(a);
  return c
}
var gk = Rh && "BackCompat" == document.compatMode, hk = document.firstChild.children ? "children" : "childNodes", ik = n;
function jk(a) {
  function b() {
    0 <= p && (C.id = c(p, B).replace(/\\/g, ""), p = -1);
    if(0 <= t) {
      var a = t == B ? m : c(t, B);
      0 > ">~+".indexOf(a) ? C.T = a : C.cb = a;
      t = -1
    }
    0 <= k && (C.fa.push(c(k + 1, B).replace(/\\/g, "")), k = -1)
  }
  function c(b, c) {
    return la(a.slice(b, c))
  }
  for(var a = 0 <= ">~+".indexOf(a.slice(-1)) ? a + " * " : a + " ", d = [], f = -1, g = -1, i = -1, j = -1, k = -1, p = -1, t = -1, x = "", A = "", D, B = 0, P = a.length, C = m, Q = m;x = A, A = a.charAt(B), B < P;B++) {
    if("\\" != x) {
      if(C || (D = B, C = {Ka:m, sa:[], Va:[], fa:[], T:m, cb:m, id:m, Gb:function() {
        return ik ? this.vc : this.T
      }}, t = B), 0 <= f) {
        if("]" == A) {
          Q.gb ? Q.Kb = c(i || f + 1, B) : Q.gb = c(f + 1, B);
          if((f = Q.Kb) && ('"' == f.charAt(0) || "'" == f.charAt(0))) {
            Q.Kb = f.slice(1, -1)
          }
          C.Va.push(Q);
          Q = m;
          f = i = -1
        }else {
          "=" == A && (i = 0 <= "|~^$*".indexOf(x) ? x : "", Q.type = i + A, Q.gb = c(f + 1, B - i.length), i = B + 1)
        }
      }else {
        0 <= g ? ")" == A && (0 <= j && (Q.value = c(g + 1, B)), j = g = -1) : "#" == A ? (b(), p = B + 1) : "." == A ? (b(), k = B) : ":" == A ? (b(), j = B) : "[" == A ? (b(), f = B, Q = {}) : "(" == A ? (0 <= j && (Q = {name:c(j + 1, B), value:m}, C.sa.push(Q)), g = B) : " " == A && x != A && (b(), 0 <= j && C.sa.push({name:c(j + 1, B)}), C.ac = C.sa.length || C.Va.length || C.fa.length, C.Lc = C.Ka = c(D, B), C.vc = C.T = C.cb ? m : C.T || "*", C.T && (C.T = C.T.toUpperCase()), d.length && d[d.length - 
        1].cb && (C.Zb = d.pop(), C.Ka = C.Zb.Ka + " " + C.Ka), d.push(C), C = m)
      }
    }
  }
  return d
}
function kk(a, b) {
  return!a ? b : !b ? a : function() {
    return a.apply(window, arguments) && b.apply(window, arguments)
  }
}
function lk(a) {
  return 1 == a.nodeType
}
function mk(a, b) {
  return!a ? "" : "class" == b ? a.className || "" : "for" == b ? a.htmlFor || "" : "style" == b ? a.style.cssText || "" : (ik ? a.getAttribute(b) : a.getAttribute(b, 2)) || ""
}
var nk = {"*=":function(a, b) {
  return function(c) {
    return 0 <= mk(c, a).indexOf(b)
  }
}, "^=":function(a, b) {
  return function(c) {
    return 0 == mk(c, a).indexOf(b)
  }
}, "$=":function(a, b) {
  return function(c) {
    c = " " + mk(c, a);
    return c.lastIndexOf(b) == c.length - b.length
  }
}, "~=":function(a, b) {
  var c = " " + b + " ";
  return function(b) {
    return 0 <= (" " + mk(b, a) + " ").indexOf(c)
  }
}, "|=":function(a, b) {
  b = " " + b;
  return function(c) {
    c = " " + mk(c, a);
    return c == b || 0 == c.indexOf(b + "-")
  }
}, "=":function(a, b) {
  return function(c) {
    return mk(c, a) == b
  }
}}, ok = "undefined" == typeof document.firstChild.nextElementSibling, pk = !ok ? "nextElementSibling" : "nextSibling", qk = !ok ? "previousElementSibling" : "previousSibling", rk = ok ? lk : ek;
function sk(a) {
  for(;a = a[qk];) {
    if(rk(a)) {
      return n
    }
  }
  return l
}
function tk(a) {
  for(;a = a[pk];) {
    if(rk(a)) {
      return n
    }
  }
  return l
}
function uk(a) {
  var b = a.parentNode, c = 0, d = b[hk], f = a._i || -1, g = b._l || -1;
  if(!d) {
    return-1
  }
  d = d.length;
  if(g == d && 0 <= f && 0 <= g) {
    return f
  }
  b._l = d;
  f = -1;
  for(b = b.firstElementChild || b.firstChild;b;b = b[pk]) {
    rk(b) && (b._i = ++c, a === b && (f = c))
  }
  return f
}
function vk(a) {
  return!(uk(a) % 2)
}
function wk(a) {
  return uk(a) % 2
}
var yk = {checked:function() {
  return function(a) {
    return a.checked || a.attributes.checked
  }
}, "first-child":function() {
  return sk
}, "last-child":function() {
  return tk
}, "only-child":function() {
  return function(a) {
    return!sk(a) || !tk(a) ? n : l
  }
}, empty:function() {
  return function(a) {
    for(var b = a.childNodes, a = a.childNodes.length - 1;0 <= a;a--) {
      var c = b[a].nodeType;
      if(1 === c || 3 == c) {
        return n
      }
    }
    return l
  }
}, contains:function(a, b) {
  var c = b.charAt(0);
  if('"' == c || "'" == c) {
    b = b.slice(1, -1)
  }
  return function(a) {
    return 0 <= a.innerHTML.indexOf(b)
  }
}, not:function(a, b) {
  var c = jk(b)[0], d = {Ea:1};
  "*" != c.T && (d.T = 1);
  c.fa.length || (d.fa = 1);
  var f = xk(c, d);
  return function(a) {
    return!f(a)
  }
}, "nth-child":function(a, b) {
  if("odd" == b) {
    return wk
  }
  if("even" == b) {
    return vk
  }
  if(-1 != b.indexOf("n")) {
    var c = b.split("n", 2), d = c[0] ? "-" == c[0] ? -1 : parseInt(c[0], 10) : 1, f = c[1] ? parseInt(c[1], 10) : 0, g = 0, i = -1;
    0 < d ? 0 > f ? f = f % d && d + f % d : 0 < f && (f >= d && (g = f - f % d), f %= d) : 0 > d && (d *= -1, 0 < f && (i = f, f %= d));
    if(0 < d) {
      return function(a) {
        a = uk(a);
        return a >= g && (0 > i || a <= i) && a % d == f
      }
    }
    b = f
  }
  var j = parseInt(b, 10);
  return function(a) {
    return uk(a) == j
  }
}}, zk = Z ? function(a) {
  var b = a.toLowerCase();
  "class" == b && (a = "className");
  return function(c) {
    return ik ? c.getAttribute(a) : c[a] || c[b]
  }
} : function(a) {
  return function(b) {
    return b && b.getAttribute && b.hasAttribute(a)
  }
};
function xk(a, b) {
  if(!a) {
    return ek
  }
  var b = b || {}, c = m;
  b.Ea || (c = kk(c, lk));
  b.T || "*" != a.T && (c = kk(c, function(b) {
    return b && b.tagName == a.Gb()
  }));
  b.fa || pa(a.fa, function(a, b) {
    var g = RegExp("(?:^|\\s)" + a + "(?:\\s|$)");
    c = kk(c, function(a) {
      return g.test(a.className)
    });
    c.count = b
  });
  b.sa || pa(a.sa, function(a) {
    var b = a.name;
    yk[b] && (c = kk(c, yk[b](b, a.value)))
  });
  b.Va || pa(a.Va, function(a) {
    var b, g = a.gb;
    a.type && nk[a.type] ? b = nk[a.type](g, a.Kb) : g.length && (b = zk(g));
    b && (c = kk(c, b))
  });
  b.id || a.id && (c = kk(c, function(b) {
    return!!b && b.id == a.id
  }));
  c || "default" in b || (c = ek);
  return c
}
var Ak = {};
function Bk(a) {
  var b = Ak[a.Ka];
  if(b) {
    return b
  }
  var c = a.Zb, c = c ? c.cb : "", d = xk(a, {Ea:1}), f = "*" == a.T, g = document.getElementsByClassName;
  if(c) {
    if(g = {Ea:1}, f && (g.T = 1), d = xk(a, g), "+" == c) {
      var i = d, b = function(a, b, c) {
        for(;a = a[pk];) {
          if(!ok || lk(a)) {
            (!c || Ck(a, c)) && i(a) && b.push(a);
            break
          }
        }
        return b
      }
    }else {
      if("~" == c) {
        var j = d, b = function(a, b, c) {
          for(a = a[pk];a;) {
            if(rk(a)) {
              if(c && !Ck(a, c)) {
                break
              }
              j(a) && b.push(a)
            }
            a = a[pk]
          }
          return b
        }
      }else {
        if(">" == c) {
          var k = d, k = k || ek, b = function(a, b, c) {
            for(var d = 0, f = a[hk];a = f[d++];) {
              rk(a) && ((!c || Ck(a, c)) && k(a, d)) && b.push(a)
            }
            return b
          }
        }
      }
    }
  }else {
    if(a.id) {
      d = !a.ac && f ? ek : xk(a, {Ea:1, id:1}), b = function(b, c) {
        var f = (b ? new ri(9 == b.nodeType ? b : b.ownerDocument || b.document) : hi || (hi = new ri)).Yb(a.id), g;
        if(g = f && d(f)) {
          if(!(g = 9 == b.nodeType)) {
            for(g = f.parentNode;g && g != b;) {
              g = g.parentNode
            }
            g = !!g
          }
        }
        if(g) {
          return fk(f, c)
        }
      }
    }else {
      if(g && /\{\s*\[native code\]\s*\}/.test(String(g)) && a.fa.length && !gk) {
        var d = xk(a, {Ea:1, fa:1, id:1}), p = a.fa.join(" "), b = function(a, b) {
          for(var c = fk(0, b), f, g = 0, i = a.getElementsByClassName(p);f = i[g++];) {
            d(f, a) && c.push(f)
          }
          return c
        }
      }else {
        !f && !a.ac ? b = function(b, c) {
          for(var d = fk(0, c), f, g = 0, i = b.getElementsByTagName(a.Gb());f = i[g++];) {
            d.push(f)
          }
          return d
        } : (d = xk(a, {Ea:1, T:1, id:1}), b = function(b, c) {
          for(var f = fk(0, c), g, i = 0, j = b.getElementsByTagName(a.Gb());g = j[i++];) {
            d(g, b) && f.push(g)
          }
          return f
        })
      }
    }
  }
  return Ak[a.Ka] = b
}
var Dk = {}, Ek = {};
function Fk(a) {
  var b = jk(la(a));
  if(1 == b.length) {
    var c = Bk(b[0]);
    return function(a) {
      if(a = c(a, [])) {
        a.bb = l
      }
      return a
    }
  }
  return function(a) {
    for(var a = fk(a), c, g, i = b.length, j, k, p = 0;p < i;p++) {
      k = [];
      c = b[p];
      g = a.length - 1;
      0 < g && (j = {}, k.bb = l);
      g = Bk(c);
      for(var t = 0;c = a[t];t++) {
        g(c, k, j)
      }
      if(!k.length) {
        break
      }
      a = k
    }
    return k
  }
}
var Gk = !!document.querySelectorAll && (!Rh || bi("526"));
function Hk(a, b) {
  if(Gk) {
    var c = Ek[a];
    if(c && !b) {
      return c
    }
  }
  if(c = Dk[a]) {
    return c
  }
  var c = a.charAt(0), d = -1 == a.indexOf(" ");
  0 <= a.indexOf("#") && d && (b = l);
  if(Gk && !b && -1 == ">~+".indexOf(c) && (!Z || -1 == a.indexOf(":")) && !(gk && 0 <= a.indexOf(".")) && -1 == a.indexOf(":contains") && -1 == a.indexOf("|=")) {
    var f = 0 <= ">~+".indexOf(a.charAt(a.length - 1)) ? a + " *" : a;
    return Ek[a] = function(b) {
      try {
        9 == b.nodeType || d || e("");
        var c = b.querySelectorAll(f);
        Z ? c.pc = l : c.bb = l;
        return c
      }catch(g) {
        return Hk(a, l)(b)
      }
    }
  }
  var g = a.split(/\s*,\s*/);
  return Dk[a] = 2 > g.length ? Fk(a) : function(a) {
    for(var b = 0, c = [], d;d = g[b++];) {
      c = c.concat(Fk(d)(a))
    }
    return c
  }
}
var Ik = 0, Jk = Z ? function(a) {
  return ik ? a.getAttribute("_uid") || a.setAttribute("_uid", ++Ik) || Ik : a.uniqueID
} : function(a) {
  return a._uid || (a._uid = ++Ik)
};
function Ck(a, b) {
  if(!b) {
    return 1
  }
  var c = Jk(a);
  return!b[c] ? b[c] = 1 : 0
}
function Kk(a) {
  if(a && a.bb) {
    return a
  }
  var b = [];
  if(!a || !a.length) {
    return b
  }
  a[0] && b.push(a[0]);
  if(2 > a.length) {
    return b
  }
  Ik++;
  if(Z && ik) {
    var c = Ik + "";
    a[0].setAttribute("_zipIdx", c);
    for(var d = 1, f;f = a[d];d++) {
      a[d].getAttribute("_zipIdx") != c && b.push(f), f.setAttribute("_zipIdx", c)
    }
  }else {
    if(Z && a.pc) {
      try {
        for(d = 1;f = a[d];d++) {
          lk(f) && b.push(f)
        }
      }catch(g) {
      }
    }else {
      a[0] && (a[0]._zipIdx = Ik);
      for(d = 1;f = a[d];d++) {
        a[d]._zipIdx != Ik && b.push(f), f._zipIdx = Ik
      }
    }
  }
  return b
}
function Lk(a, b) {
  if(!a) {
    return[]
  }
  if(a.constructor == Array) {
    return a
  }
  if(!da(a)) {
    return[a]
  }
  if(da(b) && (b = da(b) ? document.getElementById(b) : b, !b)) {
    return[]
  }
  var b = b || document, c = b.ownerDocument || b.documentElement;
  ik = b.contentType && "application/xml" == b.contentType || Ph && (b.doctype || "[object XMLDocument]" == c.toString()) || !!c && (Z ? c.xml : b.xmlVersion || c.xmlVersion);
  return(c = Hk(a)(b)) && c.bb ? c : Kk(c)
}
Lk.sa = yk;
ja("goog.dom.query", Lk);
ja("goog.dom.query.pseudos", Lk.sa);
var Mk, Nk, Ok = m;
function Pk(a) {
  return Ok.a(ki("html", h, h)[0], a)
}
function Qk(a, b) {
  h === Mk && (Mk = {}, Mk = function(a, b, f, g) {
    this.Fb = a;
    this.hb = b;
    this.yc = f;
    this.uc = g;
    this.q = 0;
    this.h = 393216
  }, Mk.Ya = l, Mk.Ab = "domina.css/t9097", Mk.zb = function(a, b) {
    return G(b, "domina.css/t9097")
  }, Mk.prototype.Cb = function() {
    var a = this;
    return Pe.a(function(b) {
      return jj(Lk(a.Fb, b))
    }, gj(a.hb))
  }, Mk.prototype.Db = function() {
    var a = this;
    return K(Ve(se(), Pe.a(function(b) {
      return jj(Lk(a.Fb, b))
    }, gj(a.hb))))
  }, Mk.prototype.D = q("uc"), Mk.prototype.F = function(a, b) {
    return new Mk(this.Fb, this.hb, this.yc, b)
  });
  return new Mk(b, a, Ok, m)
}
Ok = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Pk.call(this, a);
    case 2:
      return Qk.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ok.c = Pk;
Ok.a = Qk;
Nk = Ok;
var Rk = n, Sk = rj($("oemail"));
function Tk(a) {
  var b = O.a(a.currentTarget.readyState, 4);
  if(b ? O.a(a.currentTarget.status, 200) : b) {
    if(O.a(a.currentTarget.responseText, "no-exist")) {
      Rk = l
    }else {
      return Rk = n, nj($("tdoemail"), '<div class="help">Email already exists</div>')
    }
  }else {
    return m
  }
}
function Uk() {
  var a = rj($("oemail")), a = (new X("\ufdd0:oemail")).call(m, dk(wa(["\ufdd0:oemail", a], l)));
  return u(a) ? (nj($("tdoemail"), [H('<div class="help">'), H(K(a)), H("</div>")].join("")), n) : l
}
function Vk() {
  var a = $("opassword"), b = $("oconfirm-password");
  if(O.a(rj(a), rj(b))) {
    return l
  }
  nj($("tdoconfirm-password"), '<div class="help">Password and confirm password<br/> must have same value</div>');
  return n
}
function Wk() {
  var a = rj($("opassword")), a = (new X("\ufdd0:password")).call(m, bk.g(wa(["\ufdd0:password", a], l), R([Y(["\ufdd0:password", Wj(), "Password should contain at least<br/>one number, period and<br/>length should be 4 to 8 chars."])], 0)));
  return u(a) ? (nj($("tdopassword"), [H('<div class="help">'), H(K(a)), H("</div>")].join("")), n) : l
}
function Xk() {
  var a = Ae.a(pj, gj(Nk.c("input[id*='value'],input[id^='o']"))), b = gj(Nk.c("input[name='ogender']:checked")), c = gj(Nk.c("input[name='oactivity']:checked")), d = gj(Nk.c("input[name='odiet']:checked")), f = Ae.a(pj, gj(Nk.c("select[id*='birthday']"))), g = th.c(tf), i = th.c(tf);
  oj(kj("help"));
  for(var a = J(a), j = m, k = 0, p = 0;;) {
    if(p < k) {
      var t = j.t(j, p);
      zh.b(g, T, Jj.c ? Jj.c(t) : Jj.call(m, t));
      O.a((new X("\ufdd0:type")).call(m, t), "number") && zh.b(g, T, Kj.c ? Kj.c(t) : Kj.call(m, t));
      p += 1
    }else {
      if(a = J(a)) {
        j = a, Fc(j) ? (a = sb(j), p = tb(j), j = a, k = U(a), a = p) : (a = K(j), zh.b(g, T, Jj.c ? Jj.c(a) : Jj.call(m, a)), O.a((new X("\ufdd0:type")).call(m, a), "number") && zh.b(g, T, Kj.c ? Kj.c(a) : Kj.call(m, a)), a = N(j), j = m, k = 0), p = 0
      }else {
        break
      }
    }
  }
  zh.b(g, T, Lj.b ? Lj.b(b, "tdogender", "gender") : Lj.call(m, b, "tdogender", "gender"));
  zh.b(g, T, Lj.b ? Lj.b(c, "tdoactivity", "activity") : Lj.call(m, c, "tdoactivity", "activity"));
  zh.b(g, T, Lj.b ? Lj.b(d, "tdodiet", "diet") : Lj.call(m, d, "tdodiet", "diet"));
  zh.b(g, T, Vk());
  zh.b(g, T, Uk());
  zh.b(g, T, Wk());
  b = J(f);
  c = m;
  for(f = d = 0;;) {
    if(f < d) {
      a = c.t(c, f), zh.b(i, T, !O.a(rj($((new X("\ufdd0:id")).call(m, a))), "- Select -")), f += 1
    }else {
      if(b = J(b)) {
        c = b, Fc(c) ? (b = sb(c), f = tb(c), c = b, d = U(b), b = f) : (b = K(c), zh.b(i, T, !O.a(rj($((new X("\ufdd0:id")).call(m, b))), "- Select -")), b = N(c), c = m, d = 0), f = 0
      }else {
        break
      }
    }
  }
  zh.b(g, T, qe(Kc, Wa(i)));
  qe(Kc, Wa(i)) || nj($("tdobirthday"), '<div class="help">Choose all values for birthday<br/>instead of "- Select -"</div>');
  zh.b(g, T, Rk);
  v(Rk) && nj($("tdoemail"), '<div class="help">Email already exists</div>');
  $("ofirst-name").focus();
  return qe(Kc, Wa(g))
}
function Yk(a) {
  oj(Nk.c("select[id='obirthday-day'] option"));
  lj($("obirthday-day"), "<option> - Select - </option>");
  for(var a = J(We(tf, Ug.b(1, a, 1))), b = m, c = 0, d = 0;;) {
    if(d < c) {
      var f = b.t(b, d);
      lj($("obirthday-day"), [H('<option value="'), H(f), H('">'), H(f), H("</option>")].join(""));
      d += 1
    }else {
      if(a = J(a)) {
        b = a, Fc(b) ? (a = sb(b), c = tb(b), b = a, f = U(a), a = c, c = f) : (f = K(b), lj($("obirthday-day"), [H('<option value="'), H(f), H('">'), H(f), H("</option>")].join("")), a = N(b), b = m, c = 0), d = 0
      }else {
        return m
      }
    }
  }
}
function Zk() {
  var a = rj($("obirthday-month")), b = rj($("obirthday-year"));
  oj(kj("help"));
  var c = O.a(b, "- Select -");
  return(c ? c : O.a(a, "- Select -")) ? (nj($("tdobirthday"), '<div class="help">Choose all values for birthday<br/>instead of "- Select -"</div>'), oj(Nk.c("select[id='obirthday-day'] option"))) : Nc(Pg(["01", m, "12", m, "03", m, "05", m, "07", m, "08", m, "10", m]), a) ? Yk(32) : Nc(Pg(["11", m, "04", m, "06", m, "09", m]), a) ? Yk(31) : u(ih(/^-?\d+$/, parseFloat(b) / 4)) ? Yk(30) : Yk(29)
}
ja("personal_organiser.organism.jsorganism.init", function() {
  var a = document;
  if(u(u(a) ? document.getElementById : a)) {
    var a = $("organism-form"), b = Ae.a(pj, gj(Nk.c("input[id*='value']")));
    a.onsubmit = Xk;
    Ij.c ? Ij.c($("oheight")) : Ij.call(m, $("oheight"));
    Ij.c ? Ij.c($("oweight")) : Ij.call(m, $("oweight"));
    Fi($("oemail"), "change", function() {
      var a;
      a = rj($("oemail"));
      oj(kj("help"));
      if(O.a(Sk, rj($("oemail")))) {
        Rk = l, a = h
      }else {
        var b = new XMLHttpRequest;
        b.onreadystatechange = Tk;
        b.open("POST", [H("/check-email/"), H(a)].join(""), l);
        a = b.send()
      }
      return a
    });
    Fi($("obirthday-year"), "change", function() {
      return Zk()
    });
    Fi($("obirthday-month"), "change", function() {
      return Zk()
    });
    for(var a = J(b), b = m, c = 0, d = 0;;) {
      if(d < c) {
        var f = b.t(b, d);
        Ij.c ? Ij.c($((new X("\ufdd0:id")).call(m, f))) : Ij.call(m, $((new X("\ufdd0:id")).call(m, f)));
        d += 1
      }else {
        if(a = J(a)) {
          b = a, Fc(b) ? (a = sb(b), c = tb(b), b = a, f = U(a), a = c, c = f) : (f = K(b), Ij.c ? Ij.c($((new X("\ufdd0:id")).call(m, f))) : Ij.call(m, $((new X("\ufdd0:id")).call(m, f))), a = N(b), b = m, c = 0), d = 0
        }else {
          return m
        }
      }
    }
  }else {
    return m
  }
});
