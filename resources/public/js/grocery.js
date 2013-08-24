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
function s(a) {
  return function() {
    return a
  }
}
var u, ba = this;
function v(a) {
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
function w(a) {
  return"string" == typeof a
}
function ca(a) {
  return"function" == v(a)
}
function da(a) {
  var b = typeof a;
  return"object" == b && a != m || "function" == b
}
function ea(a) {
  return a[fa] || (a[fa] = ++ga)
}
var fa = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), ga = 0;
function ha(a, b) {
  var c = a.split("."), d = ba;
  !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
  for(var f;c.length && (f = c.shift());) {
    !c.length && b !== h ? d[f] = b : d = d[f] ? d[f] : d[f] = {}
  }
}
function ia(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.vc = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
}
;function ja(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}
function ka(a) {
  for(var b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296
  }
  return b
}
;var la = Array.prototype, ma = la.indexOf ? function(a, b, c) {
  return la.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == m ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if(w(a)) {
    return!w(b) || 1 != b.length ? -1 : a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, na = la.forEach ? function(a, b, c) {
  la.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = w(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in f && b.call(c, f[g], g, a)
  }
};
var oa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function pa(a, b) {
  for(var c, d, f = 1;f < arguments.length;f++) {
    d = arguments[f];
    for(c in d) {
      a[c] = d[c]
    }
    for(var g = 0;g < oa.length;g++) {
      c = oa[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
;function qa(a, b) {
  var c = Array.prototype.slice.call(arguments), d = c.shift();
  "undefined" == typeof d && e(Error("[goog.string.format] Template required"));
  return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, j, k, p, r, t) {
    if("%" == p) {
      return"%"
    }
    var x = c.shift();
    "undefined" == typeof x && e(Error("[goog.string.format] Not enough arguments"));
    arguments[0] = x;
    return qa.fa[p].apply(m, arguments)
  })
}
qa.fa = {};
qa.fa.s = function(a, b, c) {
  return isNaN(c) || "" == c || a.length >= c ? a : a = -1 < b.indexOf("-", 0) ? a + Array(c - a.length + 1).join(" ") : Array(c - a.length + 1).join(" ") + a
};
qa.fa.f = function(a, b, c, d, f) {
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
qa.fa.d = function(a, b, c, d, f, g, i, j) {
  return qa.fa.f(parseInt(a, 10), b, c, d, 0, g, i, j)
};
qa.fa.i = qa.fa.d;
qa.fa.u = qa.fa.d;
function ra(a, b) {
  a != m && this.append.apply(this, arguments)
}
ra.prototype.Ka = "";
ra.prototype.append = function(a, b, c) {
  this.Ka += a;
  if(b != m) {
    for(var d = 1;d < arguments.length;d++) {
      this.Ka += arguments[d]
    }
  }
  return this
};
ra.prototype.toString = q("Ka");
var sa;
ha("cljs.core.set_print_fn_BANG_", aa());
function ta() {
  return ua(["\ufdd0:flush-on-newline", l, "\ufdd0:readably", l, "\ufdd0:meta", n, "\ufdd0:dup", n], l)
}
function y(a) {
  return a != m && a !== n
}
function va(a) {
  return a == m
}
function wa(a) {
  return y(a) ? n : l
}
function ya(a) {
  var b = w(a);
  return b ? "\ufdd0" !== a.charAt(0) : b
}
function B(a, b) {
  return a[v(b == m ? m : b)] ? l : a._ ? l : n
}
function D(a, b) {
  var c = b == m ? m : b.constructor, c = y(y(c) ? c.Va : c) ? c.xb : v(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""))
}
var za = {}, Aa = {};
function E(a) {
  if(a ? a.z : a) {
    return a.z(a)
  }
  var b;
  var c = E[v(a == m ? m : a)];
  c ? b = c : (c = E._) ? b = c : e(D("ICounted.-count", a));
  return b.call(m, a)
}
function Ba(a, b) {
  if(a ? a.H : a) {
    return a.H(a, b)
  }
  var c;
  var d = Ba[v(a == m ? m : a)];
  d ? c = d : (d = Ba._) ? c = d : e(D("ICollection.-conj", a));
  return c.call(m, a, b)
}
var Ca = {}, F, Da = m;
function Ea(a, b) {
  if(a ? a.v : a) {
    return a.v(a, b)
  }
  var c;
  var d = F[v(a == m ? m : a)];
  d ? c = d : (d = F._) ? c = d : e(D("IIndexed.-nth", a));
  return c.call(m, a, b)
}
function Fa(a, b, c) {
  if(a ? a.N : a) {
    return a.N(a, b, c)
  }
  var d;
  var f = F[v(a == m ? m : a)];
  f ? d = f : (f = F._) ? d = f : e(D("IIndexed.-nth", a));
  return d.call(m, a, b, c)
}
Da = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ea.call(this, a, b);
    case 3:
      return Fa.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Da.a = Ea;
Da.e = Fa;
F = Da;
var Ga = {};
function G(a) {
  if(a ? a.O : a) {
    return a.O(a)
  }
  var b;
  var c = G[v(a == m ? m : a)];
  c ? b = c : (c = G._) ? b = c : e(D("ISeq.-first", a));
  return b.call(m, a)
}
function H(a) {
  if(a ? a.R : a) {
    return a.R(a)
  }
  var b;
  var c = H[v(a == m ? m : a)];
  c ? b = c : (c = H._) ? b = c : e(D("ISeq.-rest", a));
  return b.call(m, a)
}
var Ha = {}, Ia, Ja = m;
function Ka(a, b) {
  if(a ? a.K : a) {
    return a.K(a, b)
  }
  var c;
  var d = Ia[v(a == m ? m : a)];
  d ? c = d : (d = Ia._) ? c = d : e(D("ILookup.-lookup", a));
  return c.call(m, a, b)
}
function La(a, b, c) {
  if(a ? a.t : a) {
    return a.t(a, b, c)
  }
  var d;
  var f = Ia[v(a == m ? m : a)];
  f ? d = f : (f = Ia._) ? d = f : e(D("ILookup.-lookup", a));
  return d.call(m, a, b, c)
}
Ja = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ka.call(this, a, b);
    case 3:
      return La.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ja.a = Ka;
Ja.e = La;
Ia = Ja;
function Ma(a, b) {
  if(a ? a.Ta : a) {
    return a.Ta(a, b)
  }
  var c;
  var d = Ma[v(a == m ? m : a)];
  d ? c = d : (d = Ma._) ? c = d : e(D("IAssociative.-contains-key?", a));
  return c.call(m, a, b)
}
function Na(a, b, c) {
  if(a ? a.ja : a) {
    return a.ja(a, b, c)
  }
  var d;
  var f = Na[v(a == m ? m : a)];
  f ? d = f : (f = Na._) ? d = f : e(D("IAssociative.-assoc", a));
  return d.call(m, a, b, c)
}
var Oa = {}, Pa = {};
function Qa(a) {
  if(a ? a.Nb : a) {
    return a.Nb(a)
  }
  var b;
  var c = Qa[v(a == m ? m : a)];
  c ? b = c : (c = Qa._) ? b = c : e(D("IMapEntry.-key", a));
  return b.call(m, a)
}
function Ra(a) {
  if(a ? a.Ob : a) {
    return a.Ob(a)
  }
  var b;
  var c = Ra[v(a == m ? m : a)];
  c ? b = c : (c = Ra._) ? b = c : e(D("IMapEntry.-val", a));
  return b.call(m, a)
}
var Sa = {}, Ta = {};
function Ua(a) {
  if(a ? a.fc : a) {
    return a.state
  }
  var b;
  var c = Ua[v(a == m ? m : a)];
  c ? b = c : (c = Ua._) ? b = c : e(D("IDeref.-deref", a));
  return b.call(m, a)
}
var Va = {};
function Wa(a) {
  if(a ? a.F : a) {
    return a.F(a)
  }
  var b;
  var c = Wa[v(a == m ? m : a)];
  c ? b = c : (c = Wa._) ? b = c : e(D("IMeta.-meta", a));
  return b.call(m, a)
}
var Xa = {};
function Ya(a, b) {
  if(a ? a.G : a) {
    return a.G(a, b)
  }
  var c;
  var d = Ya[v(a == m ? m : a)];
  d ? c = d : (d = Ya._) ? c = d : e(D("IWithMeta.-with-meta", a));
  return c.call(m, a, b)
}
var $a = {}, ab, bb = m;
function cb(a, b) {
  if(a ? a.wa : a) {
    return a.wa(a, b)
  }
  var c;
  var d = ab[v(a == m ? m : a)];
  d ? c = d : (d = ab._) ? c = d : e(D("IReduce.-reduce", a));
  return c.call(m, a, b)
}
function db(a, b, c) {
  if(a ? a.xa : a) {
    return a.xa(a, b, c)
  }
  var d;
  var f = ab[v(a == m ? m : a)];
  f ? d = f : (f = ab._) ? d = f : e(D("IReduce.-reduce", a));
  return d.call(m, a, b, c)
}
bb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return cb.call(this, a, b);
    case 3:
      return db.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
bb.a = cb;
bb.e = db;
ab = bb;
function eb(a, b) {
  if(a ? a.C : a) {
    return a.C(a, b)
  }
  var c;
  var d = eb[v(a == m ? m : a)];
  d ? c = d : (d = eb._) ? c = d : e(D("IEquiv.-equiv", a));
  return c.call(m, a, b)
}
function fb(a) {
  if(a ? a.I : a) {
    return a.I(a)
  }
  var b;
  var c = fb[v(a == m ? m : a)];
  c ? b = c : (c = fb._) ? b = c : e(D("IHash.-hash", a));
  return b.call(m, a)
}
var gb = {};
function hb(a) {
  if(a ? a.w : a) {
    return a.w(a)
  }
  var b;
  var c = hb[v(a == m ? m : a)];
  c ? b = c : (c = hb._) ? b = c : e(D("ISeqable.-seq", a));
  return b.call(m, a)
}
var ib = {};
function I(a, b) {
  if(a ? a.Rb : a) {
    return a.Rb(0, b)
  }
  var c;
  var d = I[v(a == m ? m : a)];
  d ? c = d : (d = I._) ? c = d : e(D("IWriter.-write", a));
  return c.call(m, a, b)
}
function jb(a) {
  if(a ? a.kc : a) {
    return m
  }
  var b;
  var c = jb[v(a == m ? m : a)];
  c ? b = c : (c = jb._) ? b = c : e(D("IWriter.-flush", a));
  return b.call(m, a)
}
function kb(a, b, c) {
  if(a ? a.Qb : a) {
    return a.Qb(a, b, c)
  }
  var d;
  var f = kb[v(a == m ? m : a)];
  f ? d = f : (f = kb._) ? d = f : e(D("IWatchable.-notify-watches", a));
  return d.call(m, a, b, c)
}
function lb(a) {
  if(a ? a.ua : a) {
    return a.ua(a)
  }
  var b;
  var c = lb[v(a == m ? m : a)];
  c ? b = c : (c = lb._) ? b = c : e(D("IEditableCollection.-as-transient", a));
  return b.call(m, a)
}
function mb(a, b) {
  if(a ? a.pa : a) {
    return a.pa(a, b)
  }
  var c;
  var d = mb[v(a == m ? m : a)];
  d ? c = d : (d = mb._) ? c = d : e(D("ITransientCollection.-conj!", a));
  return c.call(m, a, b)
}
function nb(a) {
  if(a ? a.Aa : a) {
    return a.Aa(a)
  }
  var b;
  var c = nb[v(a == m ? m : a)];
  c ? b = c : (c = nb._) ? b = c : e(D("ITransientCollection.-persistent!", a));
  return b.call(m, a)
}
function ob(a, b, c) {
  if(a ? a.za : a) {
    return a.za(a, b, c)
  }
  var d;
  var f = ob[v(a == m ? m : a)];
  f ? d = f : (f = ob._) ? d = f : e(D("ITransientAssociative.-assoc!", a));
  return d.call(m, a, b, c)
}
function pb(a) {
  if(a ? a.Lb : a) {
    return a.Lb()
  }
  var b;
  var c = pb[v(a == m ? m : a)];
  c ? b = c : (c = pb._) ? b = c : e(D("IChunk.-drop-first", a));
  return b.call(m, a)
}
function qb(a) {
  if(a ? a.gb : a) {
    return a.gb(a)
  }
  var b;
  var c = qb[v(a == m ? m : a)];
  c ? b = c : (c = qb._) ? b = c : e(D("IChunkedSeq.-chunked-first", a));
  return b.call(m, a)
}
function rb(a) {
  if(a ? a.Ua : a) {
    return a.Ua(a)
  }
  var b;
  var c = rb[v(a == m ? m : a)];
  c ? b = c : (c = rb._) ? b = c : e(D("IChunkedSeq.-chunked-rest", a));
  return b.call(m, a)
}
function sb(a) {
  this.tc = a;
  this.r = 0;
  this.j = 1073741824
}
sb.prototype.Rb = function(a, b) {
  return this.tc.append(b)
};
sb.prototype.kc = s(m);
function tb(a) {
  var b = new ra, c = new sb(b);
  a.J(a, c, ta());
  jb(c);
  return"" + J(b)
}
function ub(a, b, c, d, f) {
  this.Ga = a;
  this.name = b;
  this.ra = c;
  this.Ra = d;
  this.ac = f;
  this.r = 0;
  this.j = 2154168321
}
u = ub.prototype;
u.J = function(a, b) {
  return I(b, this.ra)
};
u.Pb = l;
u.I = function() {
  -1 === this.Ra && (this.Ra = vb.a ? vb.a(K.b ? K.b(this.Ga) : K.call(m, this.Ga), K.b ? K.b(this.name) : K.call(m, this.name)) : vb.call(m, K.b ? K.b(this.Ga) : K.call(m, this.Ga), K.b ? K.b(this.name) : K.call(m, this.name)));
  return this.Ra
};
u.G = function(a, b) {
  return new ub(this.Ga, this.name, this.ra, this.Ra, b)
};
u.F = q("ac");
var wb = m, wb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ia.e(b, this, m);
    case 3:
      return Ia.e(b, this, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ub.prototype.call = wb;
ub.prototype.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
ub.prototype.C = function(a, b) {
  return b instanceof ub ? this.ra === b.ra : n
};
ub.prototype.toString = q("ra");
function M(a) {
  if(a == m) {
    return m
  }
  var b;
  if(b = a) {
    b = (b = a.j & 8388608) ? b : a.ya
  }
  if(b) {
    return a.w(a)
  }
  if(a instanceof Array || ya(a)) {
    return 0 === a.length ? m : new xb(a, 0)
  }
  if(B(Ha, a)) {
    return hb(a)
  }
  e(Error([J(a), J("is not ISeqable")].join("")))
}
function N(a) {
  if(a == m) {
    return m
  }
  var b;
  if(b = a) {
    b = (b = a.j & 64) ? b : a.vb
  }
  if(b) {
    return a.O(a)
  }
  a = M(a);
  return a == m ? m : G(a)
}
function O(a) {
  if(a != m) {
    var b;
    if(b = a) {
      b = (b = a.j & 64) ? b : a.vb
    }
    if(b) {
      return a.R(a)
    }
    a = M(a);
    return a != m ? H(a) : yb
  }
  return yb
}
function P(a) {
  if(a == m) {
    a = m
  }else {
    var b;
    if(b = a) {
      b = (b = a.j & 128) ? b : a.Dd
    }
    a = b ? a.ea(a) : M(O(a))
  }
  return a
}
var Q, zb = m;
function Ab(a, b) {
  var c = a === b;
  return c ? c : eb(a, b)
}
function Bb(a, b, c) {
  for(;;) {
    if(y(zb.a(a, b))) {
      if(P(c)) {
        a = b, b = N(c), c = P(c)
      }else {
        return zb.a(b, N(c))
      }
    }else {
      return n
    }
  }
}
function Cb(a, b, c) {
  var d = m;
  2 < arguments.length && (d = S(Array.prototype.slice.call(arguments, 2), 0));
  return Bb.call(this, a, b, d)
}
Cb.o = 2;
Cb.k = function(a) {
  var b = N(a), a = P(a), c = N(a), a = O(a);
  return Bb(b, c, a)
};
Cb.g = Bb;
zb = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return l;
    case 2:
      return Ab.call(this, a, b);
    default:
      return Cb.g(a, b, S(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
zb.o = 2;
zb.k = Cb.k;
zb.b = s(l);
zb.a = Ab;
zb.g = Cb.g;
Q = zb;
fb["null"] = s(0);
Sa["null"] = l;
Aa["null"] = l;
E["null"] = s(0);
eb["null"] = function(a, b) {
  return b == m
};
Xa["null"] = l;
Ya["null"] = s(m);
Va["null"] = l;
Wa["null"] = s(m);
Oa["null"] = l;
Date.prototype.C = function(a, b) {
  var c = b instanceof Date;
  return c ? a.toString() === b.toString() : c
};
fb.number = function(a) {
  return Math.floor(a) % 2147483647
};
eb.number = function(a, b) {
  return a === b
};
fb["boolean"] = function(a) {
  return a === l ? 1 : 0
};
Va["function"] = l;
Wa["function"] = s(m);
za["function"] = l;
fb._ = function(a) {
  return ea(a)
};
var Db, Eb = m;
function Fb(a, b) {
  var c = E(a);
  if(0 === c) {
    return b.A ? b.A() : b.call(m)
  }
  for(var d = F.a(a, 0), f = 1;;) {
    if(f < c) {
      d = b.a ? b.a(d, F.a(a, f)) : b.call(m, d, F.a(a, f)), f += 1
    }else {
      return d
    }
  }
}
function Gb(a, b, c) {
  for(var d = E(a), f = 0;;) {
    if(f < d) {
      c = b.a ? b.a(c, F.a(a, f)) : b.call(m, c, F.a(a, f)), f += 1
    }else {
      return c
    }
  }
}
function Hb(a, b, c, d) {
  for(var f = E(a);;) {
    if(d < f) {
      c = b.a ? b.a(c, F.a(a, d)) : b.call(m, c, F.a(a, d)), d += 1
    }else {
      return c
    }
  }
}
Eb = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return Fb.call(this, a, b);
    case 3:
      return Gb.call(this, a, b, c);
    case 4:
      return Hb.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Eb.a = Fb;
Eb.e = Gb;
Eb.n = Hb;
Db = Eb;
var Ib, Jb = m;
function Kb(a, b) {
  var c = a.length;
  if(0 === a.length) {
    return b.A ? b.A() : b.call(m)
  }
  for(var d = a[0], f = 1;;) {
    if(f < c) {
      d = b.a ? b.a(d, a[f]) : b.call(m, d, a[f]), f += 1
    }else {
      return d
    }
  }
}
function Lb(a, b, c) {
  for(var d = a.length, f = 0;;) {
    if(f < d) {
      c = b.a ? b.a(c, a[f]) : b.call(m, c, a[f]), f += 1
    }else {
      return c
    }
  }
}
function Mb(a, b, c, d) {
  for(var f = a.length;;) {
    if(d < f) {
      c = b.a ? b.a(c, a[d]) : b.call(m, c, a[d]), d += 1
    }else {
      return c
    }
  }
}
Jb = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return Kb.call(this, a, b);
    case 3:
      return Lb.call(this, a, b, c);
    case 4:
      return Mb.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Jb.a = Kb;
Jb.e = Lb;
Jb.n = Mb;
Ib = Jb;
function Nb(a) {
  if(a) {
    var b = a.j & 2, a = (b ? b : a.hb) ? l : a.j ? n : B(Aa, a)
  }else {
    a = B(Aa, a)
  }
  return a
}
function Ob(a) {
  if(a) {
    var b = a.j & 16, a = (b ? b : a.Ma) ? l : a.j ? n : B(Ca, a)
  }else {
    a = B(Ca, a)
  }
  return a
}
function xb(a, b) {
  this.c = a;
  this.p = b;
  this.r = 0;
  this.j = 166199550
}
u = xb.prototype;
u.I = function(a) {
  return Pb.b ? Pb.b(a) : Pb.call(m, a)
};
u.ea = function() {
  return this.p + 1 < this.c.length ? new xb(this.c, this.p + 1) : m
};
u.H = function(a, b) {
  return T.a ? T.a(b, a) : T.call(m, b, a)
};
u.toString = function() {
  return tb(this)
};
u.wa = function(a, b) {
  return Ib.n(this.c, b, this.c[this.p], this.p + 1)
};
u.xa = function(a, b, c) {
  return Ib.n(this.c, b, c, this.p)
};
u.w = aa();
u.z = function() {
  return this.c.length - this.p
};
u.O = function() {
  return this.c[this.p]
};
u.R = function() {
  return this.p + 1 < this.c.length ? new xb(this.c, this.p + 1) : Qb.A ? Qb.A() : Qb.call(m)
};
u.C = function(a, b) {
  return Rb.a ? Rb.a(a, b) : Rb.call(m, a, b)
};
u.v = function(a, b) {
  var c = b + this.p;
  return c < this.c.length ? this.c[c] : m
};
u.N = function(a, b, c) {
  a = b + this.p;
  return a < this.c.length ? this.c[a] : c
};
var Sb, Tb = m;
function Ub(a) {
  return Tb.a(a, 0)
}
function Vb(a, b) {
  return b < a.length ? new xb(a, b) : m
}
Tb = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Ub.call(this, a);
    case 2:
      return Vb.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Tb.b = Ub;
Tb.a = Vb;
Sb = Tb;
var S, Wb = m;
function Xb(a) {
  return Sb.a(a, 0)
}
function Yb(a, b) {
  return Sb.a(a, b)
}
Wb = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Xb.call(this, a);
    case 2:
      return Yb.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Wb.b = Xb;
Wb.a = Yb;
S = Wb;
Aa.array = l;
E.array = function(a) {
  return a.length
};
function Zb(a) {
  return N(P(a))
}
eb._ = function(a, b) {
  return a === b
};
var $b, ac = m;
function bc(a, b) {
  return a != m ? Ba(a, b) : Qb.b ? Qb.b(b) : Qb.call(m, b)
}
function cc(a, b, c) {
  for(;;) {
    if(y(c)) {
      a = ac.a(a, b), b = N(c), c = P(c)
    }else {
      return ac.a(a, b)
    }
  }
}
function dc(a, b, c) {
  var d = m;
  2 < arguments.length && (d = S(Array.prototype.slice.call(arguments, 2), 0));
  return cc.call(this, a, b, d)
}
dc.o = 2;
dc.k = function(a) {
  var b = N(a), a = P(a), c = N(a), a = O(a);
  return cc(b, c, a)
};
dc.g = cc;
ac = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return bc.call(this, a, b);
    default:
      return dc.g(a, b, S(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
ac.o = 2;
ac.k = dc.k;
ac.a = bc;
ac.g = dc.g;
$b = ac;
function U(a) {
  if(Nb(a)) {
    a = E(a)
  }else {
    a: {
      for(var a = M(a), b = 0;;) {
        if(Nb(a)) {
          a = b + E(a);
          break a
        }
        a = P(a);
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
      if(M(a)) {
        return N(a)
      }
      e(Error("Index out of bounds"))
    }
    if(Ob(a)) {
      return F.a(a, b)
    }
    if(M(a)) {
      var c = P(a), d = b - 1, a = c, b = d
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
      return M(a) ? N(a) : c
    }
    if(Ob(a)) {
      return F.e(a, b, c)
    }
    if(M(a)) {
      a = P(a), b -= 1
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
fc.e = hc;
ec = fc;
var ic, jc = m;
function kc(a, b) {
  var c;
  if(a == m) {
    c = m
  }else {
    if(c = a) {
      c = (c = a.j & 16) ? c : a.Ma
    }
    c = c ? a.v(a, Math.floor(b)) : a instanceof Array ? b < a.length ? a[b] : m : ya(a) ? b < a.length ? a[b] : m : ec.a(a, Math.floor(b))
  }
  return c
}
function lc(a, b, c) {
  if(a != m) {
    var d;
    if(d = a) {
      d = (d = a.j & 16) ? d : a.Ma
    }
    a = d ? a.N(a, Math.floor(b), c) : a instanceof Array ? b < a.length ? a[b] : c : ya(a) ? b < a.length ? a[b] : c : ec.e(a, Math.floor(b), c)
  }else {
    a = c
  }
  return a
}
jc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return kc.call(this, a, b);
    case 3:
      return lc.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
jc.a = kc;
jc.e = lc;
ic = jc;
var mc, nc = m;
function oc(a, b) {
  var c;
  if(a == m) {
    c = m
  }else {
    if(c = a) {
      c = (c = a.j & 256) ? c : a.gc
    }
    c = c ? a.K(a, b) : a instanceof Array ? b < a.length ? a[b] : m : ya(a) ? b < a.length ? a[b] : m : B(Ha, a) ? Ia.a(a, b) : m
  }
  return c
}
function pc(a, b, c) {
  if(a != m) {
    var d;
    if(d = a) {
      d = (d = a.j & 256) ? d : a.gc
    }
    a = d ? a.t(a, b, c) : a instanceof Array ? b < a.length ? a[b] : c : ya(a) ? b < a.length ? a[b] : c : B(Ha, a) ? Ia.e(a, b, c) : c
  }else {
    a = c
  }
  return a
}
nc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return oc.call(this, a, b);
    case 3:
      return pc.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
nc.a = oc;
nc.e = pc;
mc = nc;
var qc, rc = m;
function sc(a, b, c) {
  return a != m ? Na(a, b, c) : tc.a ? tc.a(b, c) : tc.call(m, b, c)
}
function uc(a, b, c, d) {
  for(;;) {
    if(a = rc.e(a, b, c), y(d)) {
      b = N(d), c = Zb(d), d = P(P(d))
    }else {
      return a
    }
  }
}
function vc(a, b, c, d) {
  var f = m;
  3 < arguments.length && (f = S(Array.prototype.slice.call(arguments, 3), 0));
  return uc.call(this, a, b, c, f)
}
vc.o = 3;
vc.k = function(a) {
  var b = N(a), a = P(a), c = N(a), a = P(a), d = N(a), a = O(a);
  return uc(b, c, d, a)
};
vc.g = uc;
rc = function(a, b, c, d) {
  switch(arguments.length) {
    case 3:
      return sc.call(this, a, b, c);
    default:
      return vc.g(a, b, c, S(arguments, 3))
  }
  e(Error("Invalid arity: " + arguments.length))
};
rc.o = 3;
rc.k = vc.k;
rc.e = sc;
rc.g = vc.g;
qc = rc;
function wc(a) {
  var b = ca(a);
  return b ? b : a ? y(y(m) ? m : a.cc) ? l : a.Id ? n : B(za, a) : B(za, a)
}
var zc = function xc(b, c) {
  var d;
  if(d = wc(b)) {
    d = b ? ((d = b.j & 262144) ? d : b.Hd) || (b.j ? 0 : B(Xa, b)) : B(Xa, b), d = !d
  }
  if(d) {
    if(h === sa) {
      sa = {};
      sa = function(b, c, d, f) {
        this.m = b;
        this.Ib = c;
        this.yc = d;
        this.oc = f;
        this.r = 0;
        this.j = 393217
      };
      sa.Va = l;
      sa.xb = "cljs.core/t3801";
      sa.wb = function(b, c) {
        return I(c, "cljs.core/t3801")
      };
      var f = function(b, c) {
        return yc.a ? yc.a(b.Ib, c) : yc.call(m, b.Ib, c)
      };
      d = function(b, c) {
        var b = this, d = m;
        1 < arguments.length && (d = S(Array.prototype.slice.call(arguments, 1), 0));
        return f.call(this, b, d)
      };
      d.o = 1;
      d.k = function(b) {
        var c = N(b), b = O(b);
        return f(c, b)
      };
      d.g = f;
      sa.prototype.call = d;
      sa.prototype.apply = function(b, c) {
        b = this;
        return b.call.apply(b, [b].concat(c.slice()))
      };
      sa.prototype.cc = l;
      sa.prototype.F = q("oc");
      sa.prototype.G = function(b, c) {
        return new sa(this.m, this.Ib, this.yc, c)
      }
    }
    d = new sa(c, b, xc, m);
    d = xc(d, c)
  }else {
    d = Ya(b, c)
  }
  return d
};
function Ac(a) {
  var b;
  b = a ? ((b = a.j & 131072) ? b : a.ic) || (a.j ? 0 : B(Va, a)) : B(Va, a);
  return b ? Wa(a) : m
}
var Bc = {}, Cc = 0, K, Dc = m;
function Ec(a) {
  return Dc.a(a, l)
}
function Fc(a, b) {
  var c;
  ((c = w(a)) ? b : c) ? (255 < Cc && (Bc = {}, Cc = 0), c = Bc[a], "number" !== typeof c && (c = ka(a), Bc[a] = c, Cc += 1)) : c = fb(a);
  return c
}
Dc = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Ec.call(this, a);
    case 2:
      return Fc.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Dc.b = Ec;
Dc.a = Fc;
K = Dc;
function Gc(a) {
  if(a) {
    var b = a.j & 16384, a = (b ? b : a.Gd) ? l : a.j ? n : B(Ta, a)
  }else {
    a = B(Ta, a)
  }
  return a
}
function Hc(a) {
  var b = a instanceof Ic;
  return b ? b : a instanceof Jc
}
function Kc(a, b, c, d, f) {
  for(;0 !== f;) {
    c[d] = a[b], d += 1, f -= 1, b += 1
  }
}
var Lc = {};
function Mc(a) {
  return a === l
}
function Nc(a) {
  var b = w(a);
  return b ? "\ufdd0" === a.charAt(0) : b
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
      c = (c = a.r & 2048) ? c : a.dc
    }
    return c ? a.ec(a, b) : a > b ? 1 : a < b ? -1 : 0
  }
  e(Error("compare on non-nil objects of different types"))
}
var Pc, Qc = m;
function Rc(a, b) {
  var c = U(a), d = U(b);
  return c < d ? -1 : c > d ? 1 : Qc.n(a, b, c, 0)
}
function Sc(a, b, c, d) {
  for(;;) {
    var f = Oc(ic.a(a, d), ic.a(b, d)), g = 0 === f;
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
Qc.n = Sc;
Pc = Qc;
var Tc, Vc = m;
function Wc(a, b) {
  var c = M(b);
  return c ? Xc.e ? Xc.e(a, N(c), P(c)) : Xc.call(m, a, N(c), P(c)) : a.A ? a.A() : a.call(m)
}
function Yc(a, b, c) {
  for(c = M(c);;) {
    if(c) {
      b = a.a ? a.a(b, N(c)) : a.call(m, b, N(c)), c = P(c)
    }else {
      return b
    }
  }
}
Vc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Wc.call(this, a, b);
    case 3:
      return Yc.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Vc.a = Wc;
Vc.e = Yc;
Tc = Vc;
var Xc, Zc = m;
function $c(a, b) {
  var c;
  if(c = b) {
    c = (c = b.j & 524288) ? c : b.jc
  }
  return c ? b.wa(b, a) : b instanceof Array ? Ib.a(b, a) : ya(b) ? Ib.a(b, a) : B($a, b) ? ab.a(b, a) : Tc.a(a, b)
}
function ad(a, b, c) {
  var d;
  if(d = c) {
    d = (d = c.j & 524288) ? d : c.jc
  }
  return d ? c.xa(c, a, b) : c instanceof Array ? Ib.e(c, a, b) : ya(c) ? Ib.e(c, a, b) : B($a, c) ? ab.e(c, a, b) : Tc.e(a, b, c)
}
Zc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return $c.call(this, a, b);
    case 3:
      return ad.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Zc.a = $c;
Zc.e = ad;
Xc = Zc;
function bd(a) {
  return 0 <= a ? Math.floor.b ? Math.floor.b(a) : Math.floor.call(m, a) : Math.ceil.b ? Math.ceil.b(a) : Math.ceil.call(m, a)
}
function cd(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24
}
var dd, ed = m;
function fd(a) {
  return a == m ? "" : a.toString()
}
function gd(a, b) {
  return function(a, b) {
    for(;;) {
      if(y(b)) {
        var f = a.append(ed.b(N(b))), g = P(b), a = f, b = g
      }else {
        return ed.b(a)
      }
    }
  }.call(m, new ra(ed.b(a)), b)
}
function hd(a, b) {
  var c = m;
  1 < arguments.length && (c = S(Array.prototype.slice.call(arguments, 1), 0));
  return gd.call(this, a, c)
}
hd.o = 1;
hd.k = function(a) {
  var b = N(a), a = O(a);
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
      return hd.g(a, S(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
ed.o = 1;
ed.k = hd.k;
ed.A = s("");
ed.b = fd;
ed.g = hd.g;
dd = ed;
var J, id = m;
function jd(a) {
  return Nc(a) ? dd.g(":", S([a.substring(2, a.length)], 0)) : a == m ? "" : a.toString()
}
function kd(a, b) {
  return function(a, b) {
    for(;;) {
      if(y(b)) {
        var f = a.append(id.b(N(b))), g = P(b), a = f, b = g
      }else {
        return dd.b(a)
      }
    }
  }.call(m, new ra(id.b(a)), b)
}
function ld(a, b) {
  var c = m;
  1 < arguments.length && (c = S(Array.prototype.slice.call(arguments, 1), 0));
  return kd.call(this, a, c)
}
ld.o = 1;
ld.k = function(a) {
  var b = N(a), a = O(a);
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
      return ld.g(a, S(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
id.o = 1;
id.k = ld.k;
id.A = s("");
id.b = jd;
id.g = ld.g;
J = id;
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
nd.e = function(a, b, c) {
  return a.substring(b, c)
};
md = nd;
var od, pd = m;
function qd(a) {
  return Nc(a) ? a : a instanceof ub ? dd.g("\ufdd0", S([":", md.a(a, 2)], 0)) : dd.g("\ufdd0", S([":", a], 0))
}
function rd(a, b) {
  return pd.b(dd.g(a, S(["/", b], 0)))
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
pd.b = qd;
pd.a = rd;
od = pd;
function Rb(a, b) {
  var c;
  c = b ? ((c = b.j & 16777216) ? c : b.Ed) || (b.j ? 0 : B(ib, b)) : B(ib, b);
  if(c) {
    a: {
      c = M(a);
      for(var d = M(b);;) {
        if(c == m) {
          c = d == m;
          break a
        }
        if(d != m && Q.a(N(c), N(d))) {
          c = P(c), d = P(d)
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
  return y(c) ? l : n
}
function vb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2)
}
function Pb(a) {
  return Xc.e(function(a, c) {
    return vb(a, K.a(c, n))
  }, K.a(N(a), n), P(a))
}
function sd(a) {
  for(var b = 0, a = M(a);;) {
    if(a) {
      var c = N(a), b = (b + (K.b(td.b ? td.b(c) : td.call(m, c)) ^ K.b(ud.b ? ud.b(c) : ud.call(m, c)))) % 4503599627370496, a = P(a)
    }else {
      return b
    }
  }
}
function vd(a, b, c, d, f) {
  this.m = a;
  this.Na = b;
  this.ha = c;
  this.count = d;
  this.l = f;
  this.r = 0;
  this.j = 65413358
}
u = vd.prototype;
u.I = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Pb(a)
};
u.ea = function() {
  return 1 === this.count ? m : this.ha
};
u.H = function(a, b) {
  return new vd(this.m, b, a, this.count + 1, m)
};
u.toString = function() {
  return tb(this)
};
u.w = aa();
u.z = q("count");
u.O = q("Na");
u.R = function() {
  return 1 === this.count ? yb : this.ha
};
u.C = function(a, b) {
  return Rb(a, b)
};
u.G = function(a, b) {
  return new vd(b, this.Na, this.ha, this.count, this.l)
};
u.F = q("m");
function wd(a) {
  this.m = a;
  this.r = 0;
  this.j = 65413326
}
u = wd.prototype;
u.I = s(0);
u.ea = s(m);
u.H = function(a, b) {
  return new vd(this.m, b, m, 1, m)
};
u.toString = function() {
  return tb(this)
};
u.w = s(m);
u.z = s(0);
u.O = s(m);
u.R = function() {
  return yb
};
u.C = function(a, b) {
  return Rb(a, b)
};
u.G = function(a, b) {
  return new wd(b)
};
u.F = q("m");
var yb = new wd(m), Qb;
function xd(a) {
  var b;
  if(a instanceof xb) {
    b = a.c
  }else {
    a: {
      for(b = [];;) {
        if(a != m) {
          b.push(a.O(a)), a = a.ea(a)
        }else {
          break a
        }
      }
      b = h
    }
  }
  for(var a = b.length, c = yb;;) {
    if(0 < a) {
      var d = a - 1, c = c.H(c, b[a - 1]), a = d
    }else {
      return c
    }
  }
}
function yd(a) {
  var b = m;
  0 < arguments.length && (b = S(Array.prototype.slice.call(arguments, 0), 0));
  return xd.call(this, b)
}
yd.o = 0;
yd.k = function(a) {
  a = M(a);
  return xd(a)
};
yd.g = xd;
Qb = yd;
function zd(a, b, c, d) {
  this.m = a;
  this.Na = b;
  this.ha = c;
  this.l = d;
  this.r = 0;
  this.j = 65405164
}
u = zd.prototype;
u.I = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Pb(a)
};
u.ea = function() {
  return this.ha == m ? m : hb(this.ha)
};
u.H = function(a, b) {
  return new zd(m, b, a, this.l)
};
u.toString = function() {
  return tb(this)
};
u.w = aa();
u.O = q("Na");
u.R = function() {
  return this.ha == m ? yb : this.ha
};
u.C = function(a, b) {
  return Rb(a, b)
};
u.G = function(a, b) {
  return new zd(b, this.Na, this.ha, this.l)
};
u.F = q("m");
function T(a, b) {
  var c = b == m;
  if(!c && (c = b)) {
    c = (c = b.j & 64) ? c : b.vb
  }
  return c ? new zd(m, a, b, m) : new zd(m, a, M(b), m)
}
Aa.string = l;
E.string = function(a) {
  return a.length
};
fb.string = function(a) {
  return ka(a)
};
function V(a) {
  this.Fb = a;
  this.r = 0;
  this.j = 1
}
var Ad = m, Ad = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      var d;
      d = a;
      d = this;
      if(b == m) {
        d = m
      }else {
        var f = b.sa;
        d = f == m ? Ia.e(b, d.Fb, m) : f[d.Fb]
      }
      return d;
    case 3:
      return b == m ? c : Ia.e(b, this.Fb, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
V.prototype.call = Ad;
V.prototype.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
var Bd = m, Bd = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return mc.a(b, this.toString());
    case 3:
      return mc.e(b, this.toString(), c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
String.prototype.call = Bd;
String.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
String.prototype.apply = function(a, b) {
  return 2 > b.length ? mc.a(b[0], a) : mc.e(b[0], a, b[1])
};
function Cd(a) {
  var b = a.x;
  if(a.Jb) {
    return b
  }
  a.x = b.A ? b.A() : b.call(m);
  a.Jb = l;
  return a.x
}
function Dd(a, b, c, d) {
  this.m = a;
  this.Jb = b;
  this.x = c;
  this.l = d;
  this.r = 0;
  this.j = 31850700
}
u = Dd.prototype;
u.I = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Pb(a)
};
u.ea = function(a) {
  return hb(a.R(a))
};
u.H = function(a, b) {
  return T(b, a)
};
u.toString = function() {
  return tb(this)
};
u.w = function(a) {
  return M(Cd(a))
};
u.O = function(a) {
  return N(Cd(a))
};
u.R = function(a) {
  return O(Cd(a))
};
u.C = function(a, b) {
  return Rb(a, b)
};
u.G = function(a, b) {
  return new Dd(b, this.Jb, this.x, this.l)
};
u.F = q("m");
function Ed(a, b) {
  this.fb = a;
  this.end = b;
  this.r = 0;
  this.j = 2
}
Ed.prototype.z = q("end");
Ed.prototype.add = function(a) {
  this.fb[this.end] = a;
  return this.end += 1
};
Ed.prototype.ia = function() {
  var a = new Fd(this.fb, 0, this.end);
  this.fb = m;
  return a
};
function Fd(a, b, c) {
  this.c = a;
  this.D = b;
  this.end = c;
  this.r = 0;
  this.j = 524306
}
u = Fd.prototype;
u.wa = function(a, b) {
  return Ib.n(this.c, b, this.c[this.D], this.D + 1)
};
u.xa = function(a, b, c) {
  return Ib.n(this.c, b, c, this.D)
};
u.Lb = function() {
  this.D === this.end && e(Error("-drop-first of empty chunk"));
  return new Fd(this.c, this.D + 1, this.end)
};
u.v = function(a, b) {
  return this.c[this.D + b]
};
u.N = function(a, b, c) {
  return((a = 0 <= b) ? b < this.end - this.D : a) ? this.c[this.D + b] : c
};
u.z = function() {
  return this.end - this.D
};
var Gd, Hd = m;
function Id(a) {
  return new Fd(a, 0, a.length)
}
function Jd(a, b) {
  return new Fd(a, b, a.length)
}
function Kd(a, b, c) {
  return new Fd(a, b, c)
}
Hd = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return Id.call(this, a);
    case 2:
      return Jd.call(this, a, b);
    case 3:
      return Kd.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Hd.b = Id;
Hd.a = Jd;
Hd.e = Kd;
Gd = Hd;
function Ic(a, b, c, d) {
  this.ia = a;
  this.oa = b;
  this.m = c;
  this.l = d;
  this.j = 31850604;
  this.r = 1536
}
u = Ic.prototype;
u.I = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Pb(a)
};
u.H = function(a, b) {
  return T(b, a)
};
u.toString = function() {
  return tb(this)
};
u.w = aa();
u.O = function() {
  return F.a(this.ia, 0)
};
u.R = function() {
  return 1 < E(this.ia) ? new Ic(pb(this.ia), this.oa, this.m, m) : this.oa == m ? yb : this.oa
};
u.Mb = function() {
  return this.oa == m ? m : this.oa
};
u.C = function(a, b) {
  return Rb(a, b)
};
u.G = function(a, b) {
  return new Ic(this.ia, this.oa, b, this.l)
};
u.F = q("m");
u.gb = q("ia");
u.Ua = function() {
  return this.oa == m ? yb : this.oa
};
function Ld(a, b) {
  return 0 === E(a) ? b : new Ic(a, b, m, m)
}
function Md(a) {
  for(var b = [];;) {
    if(M(a)) {
      b.push(N(a)), a = P(a)
    }else {
      return b
    }
  }
}
function Nd(a, b) {
  if(Nb(a)) {
    return U(a)
  }
  for(var c = a, d = b, f = 0;;) {
    var g;
    g = (g = 0 < d) ? M(c) : g;
    if(y(g)) {
      c = P(c), d -= 1, f += 1
    }else {
      return f
    }
  }
}
var Pd = function Od(b) {
  return b == m ? m : P(b) == m ? M(N(b)) : T(N(b), Od(P(b)))
}, Qd, Rd = m;
function Sd(a, b, c) {
  return T(a, T(b, c))
}
function Td(a, b, c, d) {
  return T(a, T(b, T(c, d)))
}
function Ud(a, b, c, d, f) {
  return T(a, T(b, T(c, T(d, Pd(f)))))
}
function Vd(a, b, c, d, f) {
  var g = m;
  4 < arguments.length && (g = S(Array.prototype.slice.call(arguments, 4), 0));
  return Ud.call(this, a, b, c, d, g)
}
Vd.o = 4;
Vd.k = function(a) {
  var b = N(a), a = P(a), c = N(a), a = P(a), d = N(a), a = P(a), f = N(a), a = O(a);
  return Ud(b, c, d, f, a)
};
Vd.g = Ud;
Rd = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 1:
      return M(a);
    case 2:
      return T(a, b);
    case 3:
      return Sd.call(this, a, b, c);
    case 4:
      return Td.call(this, a, b, c, d);
    default:
      return Vd.g(a, b, c, d, S(arguments, 4))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Rd.o = 4;
Rd.k = Vd.k;
Rd.b = function(a) {
  return M(a)
};
Rd.a = function(a, b) {
  return T(a, b)
};
Rd.e = Sd;
Rd.n = Td;
Rd.g = Vd.g;
Qd = Rd;
function Wd(a, b, c) {
  var d = M(c);
  if(0 === b) {
    return a.A ? a.A() : a.call(m)
  }
  var c = G(d), f = H(d);
  if(1 === b) {
    return a.b ? a.b(c) : a.b ? a.b(c) : a.call(m, c)
  }
  var d = G(f), g = H(f);
  if(2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(m, c, d)
  }
  var f = G(g), i = H(g);
  if(3 === b) {
    return a.e ? a.e(c, d, f) : a.e ? a.e(c, d, f) : a.call(m, c, d, f)
  }
  var g = G(i), j = H(i);
  if(4 === b) {
    return a.n ? a.n(c, d, f, g) : a.n ? a.n(c, d, f, g) : a.call(m, c, d, f, g)
  }
  i = G(j);
  j = H(j);
  if(5 === b) {
    return a.aa ? a.aa(c, d, f, g, i) : a.aa ? a.aa(c, d, f, g, i) : a.call(m, c, d, f, g, i)
  }
  var a = G(j), k = H(j);
  if(6 === b) {
    return a.da ? a.da(c, d, f, g, i, a) : a.da ? a.da(c, d, f, g, i, a) : a.call(m, c, d, f, g, i, a)
  }
  var j = G(k), p = H(k);
  if(7 === b) {
    return a.va ? a.va(c, d, f, g, i, a, j) : a.va ? a.va(c, d, f, g, i, a, j) : a.call(m, c, d, f, g, i, a, j)
  }
  var k = G(p), r = H(p);
  if(8 === b) {
    return a.tb ? a.tb(c, d, f, g, i, a, j, k) : a.tb ? a.tb(c, d, f, g, i, a, j, k) : a.call(m, c, d, f, g, i, a, j, k)
  }
  var p = G(r), t = H(r);
  if(9 === b) {
    return a.ub ? a.ub(c, d, f, g, i, a, j, k, p) : a.ub ? a.ub(c, d, f, g, i, a, j, k, p) : a.call(m, c, d, f, g, i, a, j, k, p)
  }
  var r = G(t), x = H(t);
  if(10 === b) {
    return a.ib ? a.ib(c, d, f, g, i, a, j, k, p, r) : a.ib ? a.ib(c, d, f, g, i, a, j, k, p, r) : a.call(m, c, d, f, g, i, a, j, k, p, r)
  }
  var t = G(x), C = H(x);
  if(11 === b) {
    return a.jb ? a.jb(c, d, f, g, i, a, j, k, p, r, t) : a.jb ? a.jb(c, d, f, g, i, a, j, k, p, r, t) : a.call(m, c, d, f, g, i, a, j, k, p, r, t)
  }
  var x = G(C), z = H(C);
  if(12 === b) {
    return a.kb ? a.kb(c, d, f, g, i, a, j, k, p, r, t, x) : a.kb ? a.kb(c, d, f, g, i, a, j, k, p, r, t, x) : a.call(m, c, d, f, g, i, a, j, k, p, r, t, x)
  }
  var C = G(z), R = H(z);
  if(13 === b) {
    return a.lb ? a.lb(c, d, f, g, i, a, j, k, p, r, t, x, C) : a.lb ? a.lb(c, d, f, g, i, a, j, k, p, r, t, x, C) : a.call(m, c, d, f, g, i, a, j, k, p, r, t, x, C)
  }
  var z = G(R), A = H(R);
  if(14 === b) {
    return a.mb ? a.mb(c, d, f, g, i, a, j, k, p, r, t, x, C, z) : a.mb ? a.mb(c, d, f, g, i, a, j, k, p, r, t, x, C, z) : a.call(m, c, d, f, g, i, a, j, k, p, r, t, x, C, z)
  }
  var R = G(A), L = H(A);
  if(15 === b) {
    return a.nb ? a.nb(c, d, f, g, i, a, j, k, p, r, t, x, C, z, R) : a.nb ? a.nb(c, d, f, g, i, a, j, k, p, r, t, x, C, z, R) : a.call(m, c, d, f, g, i, a, j, k, p, r, t, x, C, z, R)
  }
  var A = G(L), xa = H(L);
  if(16 === b) {
    return a.ob ? a.ob(c, d, f, g, i, a, j, k, p, r, t, x, C, z, R, A) : a.ob ? a.ob(c, d, f, g, i, a, j, k, p, r, t, x, C, z, R, A) : a.call(m, c, d, f, g, i, a, j, k, p, r, t, x, C, z, R, A)
  }
  var L = G(xa), Za = H(xa);
  if(17 === b) {
    return a.pb ? a.pb(c, d, f, g, i, a, j, k, p, r, t, x, C, z, R, A, L) : a.pb ? a.pb(c, d, f, g, i, a, j, k, p, r, t, x, C, z, R, A, L) : a.call(m, c, d, f, g, i, a, j, k, p, r, t, x, C, z, R, A, L)
  }
  var xa = G(Za), Uc = H(Za);
  if(18 === b) {
    return a.qb ? a.qb(c, d, f, g, i, a, j, k, p, r, t, x, C, z, R, A, L, xa) : a.qb ? a.qb(c, d, f, g, i, a, j, k, p, r, t, x, C, z, R, A, L, xa) : a.call(m, c, d, f, g, i, a, j, k, p, r, t, x, C, z, R, A, L, xa)
  }
  Za = G(Uc);
  Uc = H(Uc);
  if(19 === b) {
    return a.rb ? a.rb(c, d, f, g, i, a, j, k, p, r, t, x, C, z, R, A, L, xa, Za) : a.rb ? a.rb(c, d, f, g, i, a, j, k, p, r, t, x, C, z, R, A, L, xa, Za) : a.call(m, c, d, f, g, i, a, j, k, p, r, t, x, C, z, R, A, L, xa, Za)
  }
  var Ne = G(Uc);
  H(Uc);
  if(20 === b) {
    return a.sb ? a.sb(c, d, f, g, i, a, j, k, p, r, t, x, C, z, R, A, L, xa, Za, Ne) : a.sb ? a.sb(c, d, f, g, i, a, j, k, p, r, t, x, C, z, R, A, L, xa, Za, Ne) : a.call(m, c, d, f, g, i, a, j, k, p, r, t, x, C, z, R, A, L, xa, Za, Ne)
  }
  e(Error("Only up to 20 arguments supported on functions"))
}
var yc, Xd = m;
function Yd(a, b) {
  var c = a.o;
  if(a.k) {
    var d = Nd(b, c + 1);
    return d <= c ? Wd(a, d, b) : a.k(b)
  }
  return a.apply(a, Md(b))
}
function Zd(a, b, c) {
  b = Qd.a(b, c);
  c = a.o;
  if(a.k) {
    var d = Nd(b, c + 1);
    return d <= c ? Wd(a, d, b) : a.k(b)
  }
  return a.apply(a, Md(b))
}
function $d(a, b, c, d) {
  b = Qd.e(b, c, d);
  c = a.o;
  return a.k ? (d = Nd(b, c + 1), d <= c ? Wd(a, d, b) : a.k(b)) : a.apply(a, Md(b))
}
function ae(a, b, c, d, f) {
  b = Qd.n(b, c, d, f);
  c = a.o;
  return a.k ? (d = Nd(b, c + 1), d <= c ? Wd(a, d, b) : a.k(b)) : a.apply(a, Md(b))
}
function be(a, b, c, d, f, g) {
  b = T(b, T(c, T(d, T(f, Pd(g)))));
  c = a.o;
  return a.k ? (d = Nd(b, c + 1), d <= c ? Wd(a, d, b) : a.k(b)) : a.apply(a, Md(b))
}
function ce(a, b, c, d, f, g) {
  var i = m;
  5 < arguments.length && (i = S(Array.prototype.slice.call(arguments, 5), 0));
  return be.call(this, a, b, c, d, f, i)
}
ce.o = 5;
ce.k = function(a) {
  var b = N(a), a = P(a), c = N(a), a = P(a), d = N(a), a = P(a), f = N(a), a = P(a), g = N(a), a = O(a);
  return be(b, c, d, f, g, a)
};
ce.g = be;
Xd = function(a, b, c, d, f, g) {
  switch(arguments.length) {
    case 2:
      return Yd.call(this, a, b);
    case 3:
      return Zd.call(this, a, b, c);
    case 4:
      return $d.call(this, a, b, c, d);
    case 5:
      return ae.call(this, a, b, c, d, f);
    default:
      return ce.g(a, b, c, d, f, S(arguments, 5))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Xd.o = 5;
Xd.k = ce.k;
Xd.a = Yd;
Xd.e = Zd;
Xd.n = $d;
Xd.aa = ae;
Xd.g = ce.g;
yc = Xd;
var de, ee = m;
function fe(a, b) {
  return!Q.a(a, b)
}
function ge(a, b, c) {
  return wa(yc.n(Q, a, b, c))
}
function he(a, b, c) {
  var d = m;
  2 < arguments.length && (d = S(Array.prototype.slice.call(arguments, 2), 0));
  return ge.call(this, a, b, d)
}
he.o = 2;
he.k = function(a) {
  var b = N(a), a = P(a), c = N(a), a = O(a);
  return ge(b, c, a)
};
he.g = ge;
ee = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return n;
    case 2:
      return fe.call(this, a, b);
    default:
      return he.g(a, b, S(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
ee.o = 2;
ee.k = he.k;
ee.b = s(n);
ee.a = fe;
ee.g = he.g;
de = ee;
function ie(a, b) {
  for(;;) {
    if(M(b) == m) {
      return l
    }
    if(y(a.b ? a.b(N(b)) : a.call(m, N(b)))) {
      var c = a, d = P(b), a = c, b = d
    }else {
      return n
    }
  }
}
function je(a) {
  return a
}
function ke() {
  function a(a, c, g) {
    var i = m;
    2 < arguments.length && (i = S(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, c, i)
  }
  function b(a, b, c) {
    return wa(yc.n(va, a, b, c))
  }
  var c = m;
  a.o = 2;
  a.k = function(a) {
    var c = N(a), a = P(a), g = N(a), a = O(a);
    return b(c, g, a)
  };
  a.g = b;
  c = function(b, c, g) {
    switch(arguments.length) {
      case 0:
        return wa(va.A ? va.A() : va.call(m));
      case 1:
        return wa(va.b ? va.b(b) : va.call(m, b));
      case 2:
        return wa(va.a ? va.a(b, c) : va.call(m, b));
      default:
        return a.g(b, c, S(arguments, 2))
    }
    e(Error("Invalid arity: " + arguments.length))
  };
  c.o = 2;
  c.k = a.k;
  return c
}
var le, W = m;
function me(a, b) {
  return new Dd(m, n, function() {
    var c = M(b);
    if(c) {
      if(Hc(c)) {
        for(var d = qb(c), f = U(d), g = new Ed(Array(f), 0), i = 0;;) {
          if(i < f) {
            var j = a.b ? a.b(F.a(d, i)) : a.call(m, F.a(d, i));
            g.add(j);
            i += 1
          }else {
            break
          }
        }
        return Ld(g.ia(), W.a(a, rb(c)))
      }
      return T(a.b ? a.b(N(c)) : a.call(m, N(c)), W.a(a, O(c)))
    }
    return m
  }, m)
}
function ne(a, b, c) {
  return new Dd(m, n, function() {
    var d = M(b), f = M(c);
    return(d ? f : d) ? T(a.a ? a.a(N(d), N(f)) : a.call(m, N(d), N(f)), W.e(a, O(d), O(f))) : m
  }, m)
}
function oe(a, b, c, d) {
  return new Dd(m, n, function() {
    var f = M(b), g = M(c), i = M(d);
    return(f ? g ? i : g : f) ? T(a.e ? a.e(N(f), N(g), N(i)) : a.call(m, N(f), N(g), N(i)), W.n(a, O(f), O(g), O(i))) : m
  }, m)
}
function pe(a, b, c, d, f) {
  return W.a(function(b) {
    return yc.a(a, b)
  }, function i(a) {
    return new Dd(m, n, function() {
      var b = W.a(M, a);
      return ie(je, b) ? T(W.a(N, b), i(W.a(O, b))) : m
    }, m)
  }($b.g(f, d, S([c, b], 0))))
}
function qe(a, b, c, d, f) {
  var g = m;
  4 < arguments.length && (g = S(Array.prototype.slice.call(arguments, 4), 0));
  return pe.call(this, a, b, c, d, g)
}
qe.o = 4;
qe.k = function(a) {
  var b = N(a), a = P(a), c = N(a), a = P(a), d = N(a), a = P(a), f = N(a), a = O(a);
  return pe(b, c, d, f, a)
};
qe.g = pe;
W = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 2:
      return me.call(this, a, b);
    case 3:
      return ne.call(this, a, b, c);
    case 4:
      return oe.call(this, a, b, c, d);
    default:
      return qe.g(a, b, c, d, S(arguments, 4))
  }
  e(Error("Invalid arity: " + arguments.length))
};
W.o = 4;
W.k = qe.k;
W.a = me;
W.e = ne;
W.n = oe;
W.g = qe.g;
le = W;
var se = function re(b, c) {
  return new Dd(m, n, function() {
    if(0 < b) {
      var d = M(c);
      return d ? T(N(d), re(b - 1, O(d))) : m
    }
    return m
  }, m)
}, te, ue = m;
function ve(a) {
  return new Dd(m, n, function() {
    return T(a.A ? a.A() : a.call(m), ue.b(a))
  }, m)
}
function we(a, b) {
  return se(a, ue.b(b))
}
ue = function(a, b) {
  switch(arguments.length) {
    case 1:
      return ve.call(this, a);
    case 2:
      return we.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ue.b = ve;
ue.a = we;
te = ue;
function xe(a) {
  return function c(a, f) {
    return new Dd(m, n, function() {
      var g = M(a);
      return g ? T(N(g), c(O(g), f)) : M(f) ? c(N(f), O(f)) : m
    }, m)
  }(m, a)
}
var ye, ze = m;
function Ae(a, b) {
  return xe(le.a(a, b))
}
function Be(a, b, c) {
  return xe(yc.n(le, a, b, c))
}
function Ce(a, b, c) {
  var d = m;
  2 < arguments.length && (d = S(Array.prototype.slice.call(arguments, 2), 0));
  return Be.call(this, a, b, d)
}
Ce.o = 2;
Ce.k = function(a) {
  var b = N(a), a = P(a), c = N(a), a = O(a);
  return Be(b, c, a)
};
Ce.g = Be;
ze = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ae.call(this, a, b);
    default:
      return Ce.g(a, b, S(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
ze.o = 2;
ze.k = Ce.k;
ze.a = Ae;
ze.g = Ce.g;
ye = ze;
var Ee = function De(b, c) {
  return new Dd(m, n, function() {
    var d = M(c);
    if(d) {
      if(Hc(d)) {
        for(var f = qb(d), g = U(f), i = new Ed(Array(g), 0), j = 0;;) {
          if(j < g) {
            if(y(b.b ? b.b(F.a(f, j)) : b.call(m, F.a(f, j)))) {
              var k = F.a(f, j);
              i.add(k)
            }
            j += 1
          }else {
            break
          }
        }
        return Ld(i.ia(), De(b, rb(d)))
      }
      f = N(d);
      d = O(d);
      return y(b.b ? b.b(f) : b.call(m, f)) ? T(f, De(b, d)) : De(b, d)
    }
    return m
  }, m)
};
function Fe(a, b) {
  var c;
  if(a != m) {
    if(c = a) {
      c = (c = a.r & 4) ? c : a.Bd
    }
    c ? (c = Xc.e(mb, lb(a), b), c = nb(c)) : c = Xc.e(Ba, a, b)
  }else {
    c = Xc.e($b, yb, b)
  }
  return c
}
function Ge(a, b) {
  this.q = a;
  this.c = b
}
function He(a) {
  a = a.h;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function Ie(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var d = new Ge(a, Array(32));
    d.c[0] = c;
    c = d;
    b -= 5
  }
}
var Ke = function Je(b, c, d, f) {
  var g = new Ge(d.q, d.c.slice()), i = b.h - 1 >>> c & 31;
  5 === c ? g.c[i] = f : (d = d.c[i], b = d != m ? Je(b, c - 5, d, f) : Ie(m, c - 5, f), g.c[i] = b);
  return g
};
function Le(a, b) {
  var c = 0 <= b;
  if(c ? b < a.h : c) {
    if(b >= He(a)) {
      return a.L
    }
    for(var c = a.root, d = a.shift;;) {
      if(0 < d) {
        var f = d - 5, c = c.c[b >>> d & 31], d = f
      }else {
        return c.c
      }
    }
  }else {
    e(Error([J("No item "), J(b), J(" in vector of length "), J(a.h)].join("")))
  }
}
var Oe = function Me(b, c, d, f, g) {
  var i = new Ge(d.q, d.c.slice());
  if(0 === c) {
    i.c[f & 31] = g
  }else {
    var j = f >>> c & 31, b = Me(b, c - 5, d.c[j], f, g);
    i.c[j] = b
  }
  return i
};
function Pe(a, b, c, d, f, g) {
  this.m = a;
  this.h = b;
  this.shift = c;
  this.root = d;
  this.L = f;
  this.l = g;
  this.r = 4;
  this.j = 167668511
}
u = Pe.prototype;
u.ua = function() {
  return new Qe(this.h, this.shift, Re.b ? Re.b(this.root) : Re.call(m, this.root), Se.b ? Se.b(this.L) : Se.call(m, this.L))
};
u.I = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Pb(a)
};
u.K = function(a, b) {
  return a.N(a, b, m)
};
u.t = function(a, b, c) {
  return a.N(a, b, c)
};
u.ja = function(a, b, c) {
  var d = 0 <= b;
  if(d ? b < this.h : d) {
    return He(a) <= b ? (a = this.L.slice(), a[b & 31] = c, new Pe(this.m, this.h, this.shift, this.root, a, m)) : new Pe(this.m, this.h, this.shift, Oe(a, this.shift, this.root, b, c), this.L, m)
  }
  if(b === this.h) {
    return a.H(a, c)
  }
  e(Error([J("Index "), J(b), J(" out of bounds  [0,"), J(this.h), J("]")].join("")))
};
var Te = m, Te = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.K(this, b);
    case 3:
      return this.t(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
u = Pe.prototype;
u.call = Te;
u.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
u.H = function(a, b) {
  if(32 > this.h - He(a)) {
    var c = this.L.slice();
    c.push(b);
    return new Pe(this.m, this.h + 1, this.shift, this.root, c, m)
  }
  var d = this.h >>> 5 > 1 << this.shift, c = d ? this.shift + 5 : this.shift;
  if(d) {
    d = new Ge(m, Array(32));
    d.c[0] = this.root;
    var f = Ie(m, this.shift, new Ge(m, this.L));
    d.c[1] = f
  }else {
    d = Ke(a, this.shift, this.root, new Ge(m, this.L))
  }
  return new Pe(this.m, this.h + 1, c, d, [b], m)
};
u.Nb = function(a) {
  return a.v(a, 0)
};
u.Ob = function(a) {
  return a.v(a, 1)
};
u.toString = function() {
  return tb(this)
};
u.wa = function(a, b) {
  return Db.a(a, b)
};
u.xa = function(a, b, c) {
  return Db.e(a, b, c)
};
u.w = function(a) {
  return 0 === this.h ? m : 32 > this.h ? S.b(this.L) : X.e ? X.e(a, 0, 0) : X.call(m, a, 0, 0)
};
u.z = q("h");
u.C = function(a, b) {
  return Rb(a, b)
};
u.G = function(a, b) {
  return new Pe(b, this.h, this.shift, this.root, this.L, this.l)
};
u.F = q("m");
u.v = function(a, b) {
  return Le(a, b)[b & 31]
};
u.N = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.h : d) ? a.v(a, b) : c
};
var Ue = new Ge(m, Array(32)), Ve = new Pe(m, 0, 5, Ue, [], 0);
function We(a) {
  var b = a.length;
  if(32 > b) {
    return new Pe(m, b, 5, Ue, a, m)
  }
  for(var c = a.slice(0, 32), d = 32, f = lb(new Pe(m, 32, 5, Ue, c, m));;) {
    if(d < b) {
      c = d + 1, f = mb(f, a[d]), d = c
    }else {
      return nb(f)
    }
  }
}
function Xe(a) {
  return nb(Xc.e(mb, lb(Ve), a))
}
function Ye(a) {
  var b = m;
  0 < arguments.length && (b = S(Array.prototype.slice.call(arguments, 0), 0));
  return Xe(b)
}
Ye.o = 0;
Ye.k = function(a) {
  a = M(a);
  return Xe(a)
};
Ye.g = function(a) {
  return Xe(a)
};
function Jc(a, b, c, d, f, g) {
  this.V = a;
  this.T = b;
  this.p = c;
  this.D = d;
  this.m = f;
  this.l = g;
  this.j = 31719660;
  this.r = 1536
}
u = Jc.prototype;
u.I = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Pb(a)
};
u.ea = function(a) {
  return this.D + 1 < this.T.length ? (a = X.n ? X.n(this.V, this.T, this.p, this.D + 1) : X.call(m, this.V, this.T, this.p, this.D + 1), a == m ? m : a) : a.Mb(a)
};
u.H = function(a, b) {
  return T(b, a)
};
u.toString = function() {
  return tb(this)
};
u.w = aa();
u.O = function() {
  return this.T[this.D]
};
u.R = function(a) {
  return this.D + 1 < this.T.length ? (a = X.n ? X.n(this.V, this.T, this.p, this.D + 1) : X.call(m, this.V, this.T, this.p, this.D + 1), a == m ? yb : a) : a.Ua(a)
};
u.Mb = function() {
  var a = this.T.length, a = this.p + a < E(this.V) ? X.e ? X.e(this.V, this.p + a, 0) : X.call(m, this.V, this.p + a, 0) : m;
  return a == m ? m : a
};
u.C = function(a, b) {
  return Rb(a, b)
};
u.G = function(a, b) {
  return X.aa ? X.aa(this.V, this.T, this.p, this.D, b) : X.call(m, this.V, this.T, this.p, this.D, b)
};
u.gb = function() {
  return Gd.a(this.T, this.D)
};
u.Ua = function() {
  var a = this.T.length, a = this.p + a < E(this.V) ? X.e ? X.e(this.V, this.p + a, 0) : X.call(m, this.V, this.p + a, 0) : m;
  return a == m ? yb : a
};
var X, Ze = m;
function $e(a, b, c) {
  return new Jc(a, Le(a, b), b, c, m, m)
}
function af(a, b, c, d) {
  return new Jc(a, b, c, d, m, m)
}
function bf(a, b, c, d, f) {
  return new Jc(a, b, c, d, f, m)
}
Ze = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 3:
      return $e.call(this, a, b, c);
    case 4:
      return af.call(this, a, b, c, d);
    case 5:
      return bf.call(this, a, b, c, d, f)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ze.e = $e;
Ze.n = af;
Ze.aa = bf;
X = Ze;
function Re(a) {
  return new Ge({}, a.c.slice())
}
function Se(a) {
  var b = Array(32);
  Kc(a, 0, b, 0, a.length);
  return b
}
var df = function cf(b, c, d, f) {
  var d = b.root.q === d.q ? d : new Ge(b.root.q, d.c.slice()), g = b.h - 1 >>> c & 31;
  if(5 === c) {
    b = f
  }else {
    var i = d.c[g], b = i != m ? cf(b, c - 5, i, f) : Ie(b.root.q, c - 5, f)
  }
  d.c[g] = b;
  return d
};
function Qe(a, b, c, d) {
  this.h = a;
  this.shift = b;
  this.root = c;
  this.L = d;
  this.j = 275;
  this.r = 88
}
var ef = m, ef = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.K(this, b);
    case 3:
      return this.t(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
u = Qe.prototype;
u.call = ef;
u.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
u.K = function(a, b) {
  return a.N(a, b, m)
};
u.t = function(a, b, c) {
  return a.N(a, b, c)
};
u.v = function(a, b) {
  if(this.root.q) {
    return Le(a, b)[b & 31]
  }
  e(Error("nth after persistent!"))
};
u.N = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.h : d) ? a.v(a, b) : c
};
u.z = function() {
  if(this.root.q) {
    return this.h
  }
  e(Error("count after persistent!"))
};
u.za = function(a, b, c) {
  var d;
  a: {
    if(a.root.q) {
      var f = 0 <= b;
      if(f ? b < a.h : f) {
        He(a) <= b ? a.L[b & 31] = c : (d = function i(d, f) {
          var p = a.root.q === f.q ? f : new Ge(a.root.q, f.c.slice());
          if(0 === d) {
            p.c[b & 31] = c
          }else {
            var r = b >>> d & 31, t = i(d - 5, p.c[r]);
            p.c[r] = t
          }
          return p
        }.call(m, a.shift, a.root), a.root = d);
        d = a;
        break a
      }
      if(b === a.h) {
        d = a.pa(a, c);
        break a
      }
      e(Error([J("Index "), J(b), J(" out of bounds for TransientVector of length"), J(a.h)].join("")))
    }
    e(Error("assoc! after persistent!"))
  }
  return d
};
u.pa = function(a, b) {
  if(this.root.q) {
    if(32 > this.h - He(a)) {
      this.L[this.h & 31] = b
    }else {
      var c = new Ge(this.root.q, this.L), d = Array(32);
      d[0] = b;
      this.L = d;
      if(this.h >>> 5 > 1 << this.shift) {
        var d = Array(32), f = this.shift + 5;
        d[0] = this.root;
        d[1] = Ie(this.root.q, this.shift, c);
        this.root = new Ge(this.root.q, d);
        this.shift = f
      }else {
        this.root = df(a, this.shift, this.root, c)
      }
    }
    this.h += 1;
    return a
  }
  e(Error("conj! after persistent!"))
};
u.Aa = function(a) {
  if(this.root.q) {
    this.root.q = m;
    var a = this.h - He(a), b = Array(a);
    Kc(this.L, 0, b, 0, a);
    return new Pe(m, this.h, this.shift, this.root, b, m)
  }
  e(Error("persistent! called twice"))
};
function ff() {
  this.r = 0;
  this.j = 2097152
}
ff.prototype.C = s(n);
var gf = new ff;
function hf(a, b) {
  var c;
  c = b == m ? 0 : b ? ((c = b.j & 1024) ? c : b.Cd) || (b.j ? 0 : B(Oa, b)) : B(Oa, b);
  c = c ? U(a) === U(b) ? ie(je, le.a(function(a) {
    return Q.a(mc.e(b, N(a), gf), Zb(a))
  }, a)) : m : m;
  return y(c) ? l : n
}
function jf(a, b) {
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
function kf(a, b) {
  var c = K.b(a), d = K.b(b);
  return c < d ? -1 : c > d ? 1 : 0
}
function lf(a, b, c) {
  for(var d = a.keys, f = d.length, g = a.sa, a = Ac(a), i = 0, j = lb(mf);;) {
    if(i < f) {
      var k = d[i], i = i + 1, j = ob(j, k, g[k])
    }else {
      return d = zc, b = ob(j, b, c), b = nb(b), d(b, a)
    }
  }
}
function nf(a, b) {
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
function of(a, b, c, d, f) {
  this.m = a;
  this.keys = b;
  this.sa = c;
  this.bb = d;
  this.l = f;
  this.r = 4;
  this.j = 16123663
}
u = of.prototype;
u.ua = function(a) {
  a = Fe(tc.A ? tc.A() : tc.call(m), a);
  return lb(a)
};
u.I = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = sd(a)
};
u.K = function(a, b) {
  return a.t(a, b, m)
};
u.t = function(a, b, c) {
  return((a = w(b)) ? jf(b, this.keys) != m : a) ? this.sa[b] : c
};
u.ja = function(a, b, c) {
  if(w(b)) {
    var d = this.bb > pf;
    if(d ? d : this.keys.length >= pf) {
      return lf(a, b, c)
    }
    if(jf(b, this.keys) != m) {
      return a = nf(this.sa, this.keys), a[b] = c, new of(this.m, this.keys, a, this.bb + 1, m)
    }
    a = nf(this.sa, this.keys);
    d = this.keys.slice();
    a[b] = c;
    d.push(b);
    return new of(this.m, d, a, this.bb + 1, m)
  }
  return lf(a, b, c)
};
u.Ta = function(a, b) {
  var c = w(b);
  return(c ? jf(b, this.keys) != m : c) ? l : n
};
var qf = m, qf = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.K(this, b);
    case 3:
      return this.t(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
u = of.prototype;
u.call = qf;
u.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
u.H = function(a, b) {
  return Gc(b) ? a.ja(a, F.a(b, 0), F.a(b, 1)) : Xc.e(Ba, a, b)
};
u.toString = function() {
  return tb(this)
};
u.w = function() {
  var a = this;
  return 0 < a.keys.length ? le.a(function(b) {
    return Ye.g(S([b, a.sa[b]], 0))
  }, a.keys.sort(kf)) : m
};
u.z = function() {
  return this.keys.length
};
u.C = function(a, b) {
  return hf(a, b)
};
u.G = function(a, b) {
  return new of(b, this.keys, this.sa, this.bb, this.l)
};
u.F = q("m");
var rf = new of(m, [], {}, 0, 0), pf = 8;
function sf(a, b) {
  var c = a.c, d = w(b);
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
    if(b instanceof ub) {
      a: {
        for(var d = c.length, f = b.ra, g = 0;;) {
          if(d <= g) {
            c = -1;
            break a
          }
          var i = c[g], j = i instanceof ub;
          if(j ? f === i.ra : j) {
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
            if(Q.a(b, c[f])) {
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
function tf(a, b, c, d) {
  this.m = a;
  this.h = b;
  this.c = c;
  this.l = d;
  this.r = 4;
  this.j = 16123663
}
u = tf.prototype;
u.ua = function() {
  return new uf({}, this.c.length, this.c.slice())
};
u.I = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = sd(a)
};
u.K = function(a, b) {
  return a.t(a, b, m)
};
u.t = function(a, b, c) {
  a = sf(a, b);
  return-1 === a ? c : this.c[a + 1]
};
u.ja = function(a, b, c) {
  var d = sf(a, b);
  if(-1 === d) {
    if(this.h < vf) {
      for(var d = a.c, a = d.length, f = Array(a + 2), g = 0;;) {
        if(g < a) {
          f[g] = d[g], g += 1
        }else {
          break
        }
      }
      f[a] = b;
      f[a + 1] = c;
      return new tf(this.m, this.h + 1, f, m)
    }
    return Ya(Na(Fe(mf, a), b, c), this.m)
  }
  if(c === this.c[d + 1]) {
    return a
  }
  b = this.c.slice();
  b[d + 1] = c;
  return new tf(this.m, this.h, b, m)
};
u.Ta = function(a, b) {
  return-1 !== sf(a, b)
};
var wf = m, wf = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.K(this, b);
    case 3:
      return this.t(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
u = tf.prototype;
u.call = wf;
u.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
u.H = function(a, b) {
  return Gc(b) ? a.ja(a, F.a(b, 0), F.a(b, 1)) : Xc.e(Ba, a, b)
};
u.toString = function() {
  return tb(this)
};
u.w = function() {
  var a = this, b;
  if(0 < a.h) {
    var c = a.c.length;
    b = function f(b) {
      return new Dd(m, n, function() {
        return b < c ? T(We([a.c[b], a.c[b + 1]]), f(b + 2)) : m
      }, m)
    }(0)
  }else {
    b = m
  }
  return b
};
u.z = q("h");
u.C = function(a, b) {
  return hf(a, b)
};
u.G = function(a, b) {
  return new tf(b, this.h, this.c, this.l)
};
u.F = q("m");
var xf = new tf(m, 0, [], m), vf = 8;
function ua(a, b) {
  var c = b ? a : a.slice();
  return new tf(m, c.length / 2, c, m)
}
function uf(a, b, c) {
  this.Ba = a;
  this.ga = b;
  this.c = c;
  this.r = 56;
  this.j = 258
}
u = uf.prototype;
u.za = function(a, b, c) {
  if(y(this.Ba)) {
    var d = sf(a, b);
    if(-1 === d) {
      if(this.ga + 2 <= 2 * vf) {
        return this.ga += 2, this.c.push(b), this.c.push(c), a
      }
      a = yf.a ? yf.a(this.ga, this.c) : yf.call(m, this.ga, this.c);
      return ob(a, b, c)
    }
    c !== this.c[d + 1] && (this.c[d + 1] = c);
    return a
  }
  e(Error("assoc! after persistent!"))
};
u.pa = function(a, b) {
  if(y(this.Ba)) {
    var c;
    c = b ? ((c = b.j & 2048) ? c : b.hc) || (b.j ? 0 : B(Pa, b)) : B(Pa, b);
    if(c) {
      return a.za(a, td.b ? td.b(b) : td.call(m, b), ud.b ? ud.b(b) : ud.call(m, b))
    }
    c = M(b);
    for(var d = a;;) {
      var f = N(c);
      if(y(f)) {
        c = P(c), d = d.za(d, td.b ? td.b(f) : td.call(m, f), ud.b ? ud.b(f) : ud.call(m, f))
      }else {
        return d
      }
    }
  }else {
    e(Error("conj! after persistent!"))
  }
};
u.Aa = function() {
  if(y(this.Ba)) {
    return this.Ba = n, new tf(m, bd((this.ga - this.ga % 2) / 2), this.c, m)
  }
  e(Error("persistent! called twice"))
};
u.K = function(a, b) {
  return a.t(a, b, m)
};
u.t = function(a, b, c) {
  if(y(this.Ba)) {
    return a = sf(a, b), -1 === a ? c : this.c[a + 1]
  }
  e(Error("lookup after persistent!"))
};
u.z = function() {
  if(y(this.Ba)) {
    return bd((this.ga - this.ga % 2) / 2)
  }
  e(Error("count after persistent!"))
};
function yf(a, b) {
  for(var c = lb(rf), d = 0;;) {
    if(d < a) {
      c = ob(c, b[d], b[d + 1]), d += 2
    }else {
      return c
    }
  }
}
function zf() {
  this.ba = n
}
function Af(a, b) {
  return w(a) ? a === b : Q.a(a, b)
}
var Bf, Cf = m;
function Df(a, b, c) {
  a = a.slice();
  a[b] = c;
  return a
}
function Ef(a, b, c, d, f) {
  a = a.slice();
  a[b] = c;
  a[d] = f;
  return a
}
Cf = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 3:
      return Df.call(this, a, b, c);
    case 5:
      return Ef.call(this, a, b, c, d, f)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Cf.e = Df;
Cf.aa = Ef;
Bf = Cf;
var Ff, Gf = m;
function Hf(a, b, c, d) {
  a = a.Ea(b);
  a.c[c] = d;
  return a
}
function If(a, b, c, d, f, g) {
  a = a.Ea(b);
  a.c[c] = d;
  a.c[f] = g;
  return a
}
Gf = function(a, b, c, d, f, g) {
  switch(arguments.length) {
    case 4:
      return Hf.call(this, a, b, c, d);
    case 6:
      return If.call(this, a, b, c, d, f, g)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Gf.n = Hf;
Gf.da = If;
Ff = Gf;
function Jf(a, b, c) {
  this.q = a;
  this.B = b;
  this.c = c
}
u = Jf.prototype;
u.Y = function(a, b, c, d, f, g) {
  var i = 1 << (c >>> b & 31), j = cd(this.B & i - 1);
  if(0 === (this.B & i)) {
    var k = cd(this.B);
    if(2 * k < this.c.length) {
      a = this.Ea(a);
      b = a.c;
      g.ba = l;
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
      a.B |= i;
      return a
    }
    if(16 <= k) {
      j = Array(32);
      j[c >>> b & 31] = Kf.Y(a, b + 5, c, d, f, g);
      for(f = d = 0;;) {
        if(32 > d) {
          0 !== (this.B >>> d & 1) && (j[d] = this.c[f] != m ? Kf.Y(a, b + 5, K.b(this.c[f]), this.c[f], this.c[f + 1], g) : this.c[f + 1], f += 2), d += 1
        }else {
          break
        }
      }
      return new Lf(a, k + 1, j)
    }
    b = Array(2 * (k + 4));
    Kc(this.c, 0, b, 0, 2 * j);
    b[2 * j] = d;
    b[2 * j + 1] = f;
    Kc(this.c, 2 * j, b, 2 * (j + 1), 2 * (k - j));
    g.ba = l;
    a = this.Ea(a);
    a.c = b;
    a.B |= i;
    return a
  }
  k = this.c[2 * j];
  i = this.c[2 * j + 1];
  if(k == m) {
    return k = i.Y(a, b + 5, c, d, f, g), k === i ? this : Ff.n(this, a, 2 * j + 1, k)
  }
  if(Af(d, k)) {
    return f === i ? this : Ff.n(this, a, 2 * j + 1, f)
  }
  g.ba = l;
  return Ff.da(this, a, 2 * j, m, 2 * j + 1, Mf.va ? Mf.va(a, b + 5, k, i, c, d, f) : Mf.call(m, a, b + 5, k, i, c, d, f))
};
u.Pa = function() {
  return Nf.b ? Nf.b(this.c) : Nf.call(m, this.c)
};
u.Ea = function(a) {
  if(a === this.q) {
    return this
  }
  var b = cd(this.B), c = Array(0 > b ? 4 : 2 * (b + 1));
  Kc(this.c, 0, c, 0, 2 * b);
  return new Jf(a, this.B, c)
};
u.X = function(a, b, c, d, f) {
  var g = 1 << (b >>> a & 31), i = cd(this.B & g - 1);
  if(0 === (this.B & g)) {
    var j = cd(this.B);
    if(16 <= j) {
      i = Array(32);
      i[b >>> a & 31] = Kf.X(a + 5, b, c, d, f);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.B >>> c & 1) && (i[c] = this.c[d] != m ? Kf.X(a + 5, K.b(this.c[d]), this.c[d], this.c[d + 1], f) : this.c[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new Lf(m, j + 1, i)
    }
    a = Array(2 * (j + 1));
    Kc(this.c, 0, a, 0, 2 * i);
    a[2 * i] = c;
    a[2 * i + 1] = d;
    Kc(this.c, 2 * i, a, 2 * (i + 1), 2 * (j - i));
    f.ba = l;
    return new Jf(m, this.B | g, a)
  }
  j = this.c[2 * i];
  g = this.c[2 * i + 1];
  if(j == m) {
    return j = g.X(a + 5, b, c, d, f), j === g ? this : new Jf(m, this.B, Bf.e(this.c, 2 * i + 1, j))
  }
  if(Af(c, j)) {
    return d === g ? this : new Jf(m, this.B, Bf.e(this.c, 2 * i + 1, d))
  }
  f.ba = l;
  return new Jf(m, this.B, Bf.aa(this.c, 2 * i, m, 2 * i + 1, Mf.da ? Mf.da(a + 5, j, g, b, c, d) : Mf.call(m, a + 5, j, g, b, c, d)))
};
u.la = function(a, b, c, d) {
  var f = 1 << (b >>> a & 31);
  if(0 === (this.B & f)) {
    return d
  }
  var g = cd(this.B & f - 1), f = this.c[2 * g], g = this.c[2 * g + 1];
  return f == m ? g.la(a + 5, b, c, d) : Af(c, f) ? g : d
};
var Kf = new Jf(m, 0, []);
function Lf(a, b, c) {
  this.q = a;
  this.h = b;
  this.c = c
}
u = Lf.prototype;
u.Y = function(a, b, c, d, f, g) {
  var i = c >>> b & 31, j = this.c[i];
  if(j == m) {
    return a = Ff.n(this, a, i, Kf.Y(a, b + 5, c, d, f, g)), a.h += 1, a
  }
  b = j.Y(a, b + 5, c, d, f, g);
  return b === j ? this : Ff.n(this, a, i, b)
};
u.Pa = function() {
  return Of.b ? Of.b(this.c) : Of.call(m, this.c)
};
u.Ea = function(a) {
  return a === this.q ? this : new Lf(a, this.h, this.c.slice())
};
u.X = function(a, b, c, d, f) {
  var g = b >>> a & 31, i = this.c[g];
  if(i == m) {
    return new Lf(m, this.h + 1, Bf.e(this.c, g, Kf.X(a + 5, b, c, d, f)))
  }
  a = i.X(a + 5, b, c, d, f);
  return a === i ? this : new Lf(m, this.h, Bf.e(this.c, g, a))
};
u.la = function(a, b, c, d) {
  var f = this.c[b >>> a & 31];
  return f != m ? f.la(a + 5, b, c, d) : d
};
function Pf(a, b, c) {
  for(var b = 2 * b, d = 0;;) {
    if(d < b) {
      if(Af(c, a[d])) {
        return d
      }
      d += 2
    }else {
      return-1
    }
  }
}
function Qf(a, b, c, d) {
  this.q = a;
  this.ka = b;
  this.h = c;
  this.c = d
}
u = Qf.prototype;
u.Y = function(a, b, c, d, f, g) {
  if(c === this.ka) {
    b = Pf(this.c, this.h, d);
    if(-1 === b) {
      if(this.c.length > 2 * this.h) {
        return a = Ff.da(this, a, 2 * this.h, d, 2 * this.h + 1, f), g.ba = l, a.h += 1, a
      }
      c = this.c.length;
      b = Array(c + 2);
      Kc(this.c, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = f;
      g.ba = l;
      g = this.h + 1;
      a === this.q ? (this.c = b, this.h = g, a = this) : a = new Qf(this.q, this.ka, g, b);
      return a
    }
    return this.c[b + 1] === f ? this : Ff.n(this, a, b + 1, f)
  }
  return(new Jf(a, 1 << (this.ka >>> b & 31), [m, this, m, m])).Y(a, b, c, d, f, g)
};
u.Pa = function() {
  return Nf.b ? Nf.b(this.c) : Nf.call(m, this.c)
};
u.Ea = function(a) {
  if(a === this.q) {
    return this
  }
  var b = Array(2 * (this.h + 1));
  Kc(this.c, 0, b, 0, 2 * this.h);
  return new Qf(a, this.ka, this.h, b)
};
u.X = function(a, b, c, d, f) {
  return b === this.ka ? (a = Pf(this.c, this.h, c), -1 === a ? (a = this.c.length, b = Array(a + 2), Kc(this.c, 0, b, 0, a), b[a] = c, b[a + 1] = d, f.ba = l, new Qf(m, this.ka, this.h + 1, b)) : Q.a(this.c[a], d) ? this : new Qf(m, this.ka, this.h, Bf.e(this.c, a + 1, d))) : (new Jf(m, 1 << (this.ka >>> a & 31), [m, this])).X(a, b, c, d, f)
};
u.la = function(a, b, c, d) {
  a = Pf(this.c, this.h, c);
  return 0 > a ? d : Af(c, this.c[a]) ? this.c[a + 1] : d
};
var Mf, Rf = m;
function Sf(a, b, c, d, f, g) {
  var i = K.b(b);
  if(i === d) {
    return new Qf(m, i, 2, [b, c, f, g])
  }
  var j = new zf;
  return Kf.X(a, i, b, c, j).X(a, d, f, g, j)
}
function Tf(a, b, c, d, f, g, i) {
  var j = K.b(c);
  if(j === f) {
    return new Qf(m, j, 2, [c, d, g, i])
  }
  var k = new zf;
  return Kf.Y(a, b, j, c, d, k).Y(a, b, f, g, i, k)
}
Rf = function(a, b, c, d, f, g, i) {
  switch(arguments.length) {
    case 6:
      return Sf.call(this, a, b, c, d, f, g);
    case 7:
      return Tf.call(this, a, b, c, d, f, g, i)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Rf.da = Sf;
Rf.va = Tf;
Mf = Rf;
function Uf(a, b, c, d, f) {
  this.m = a;
  this.Z = b;
  this.p = c;
  this.$ = d;
  this.l = f;
  this.r = 0;
  this.j = 31850572
}
u = Uf.prototype;
u.I = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Pb(a)
};
u.H = function(a, b) {
  return T(b, a)
};
u.toString = function() {
  return tb(this)
};
u.w = aa();
u.O = function() {
  return this.$ == m ? We([this.Z[this.p], this.Z[this.p + 1]]) : N(this.$)
};
u.R = function() {
  return this.$ == m ? Nf.e ? Nf.e(this.Z, this.p + 2, m) : Nf.call(m, this.Z, this.p + 2, m) : Nf.e ? Nf.e(this.Z, this.p, P(this.$)) : Nf.call(m, this.Z, this.p, P(this.$))
};
u.C = function(a, b) {
  return Rb(a, b)
};
u.G = function(a, b) {
  return new Uf(b, this.Z, this.p, this.$, this.l)
};
u.F = q("m");
var Nf, Vf = m;
function Wf(a) {
  return Vf.e(a, 0, m)
}
function Xf(a, b, c) {
  if(c == m) {
    for(c = a.length;;) {
      if(b < c) {
        if(a[b] != m) {
          return new Uf(m, a, b, m, m)
        }
        var d = a[b + 1];
        if(y(d) && (d = d.Pa(), y(d))) {
          return new Uf(m, a, b + 2, d, m)
        }
        b += 2
      }else {
        return m
      }
    }
  }else {
    return new Uf(m, a, b, c, m)
  }
}
Vf = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return Wf.call(this, a);
    case 3:
      return Xf.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Vf.b = Wf;
Vf.e = Xf;
Nf = Vf;
function Yf(a, b, c, d, f) {
  this.m = a;
  this.Z = b;
  this.p = c;
  this.$ = d;
  this.l = f;
  this.r = 0;
  this.j = 31850572
}
u = Yf.prototype;
u.I = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Pb(a)
};
u.H = function(a, b) {
  return T(b, a)
};
u.toString = function() {
  return tb(this)
};
u.w = aa();
u.O = function() {
  return N(this.$)
};
u.R = function() {
  return Of.n ? Of.n(m, this.Z, this.p, P(this.$)) : Of.call(m, m, this.Z, this.p, P(this.$))
};
u.C = function(a, b) {
  return Rb(a, b)
};
u.G = function(a, b) {
  return new Yf(b, this.Z, this.p, this.$, this.l)
};
u.F = q("m");
var Of, Zf = m;
function $f(a) {
  return Zf.n(m, a, 0, m)
}
function ag(a, b, c, d) {
  if(d == m) {
    for(d = b.length;;) {
      if(c < d) {
        var f = b[c];
        if(y(f) && (f = f.Pa(), y(f))) {
          return new Yf(a, b, c + 1, f, m)
        }
        c += 1
      }else {
        return m
      }
    }
  }else {
    return new Yf(a, b, c, d, m)
  }
}
Zf = function(a, b, c, d) {
  switch(arguments.length) {
    case 1:
      return $f.call(this, a);
    case 4:
      return ag.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Zf.b = $f;
Zf.n = ag;
Of = Zf;
function bg(a, b, c, d, f, g) {
  this.m = a;
  this.h = b;
  this.root = c;
  this.P = d;
  this.S = f;
  this.l = g;
  this.r = 4;
  this.j = 16123663
}
u = bg.prototype;
u.ua = function() {
  return new cg({}, this.root, this.h, this.P, this.S)
};
u.I = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = sd(a)
};
u.K = function(a, b) {
  return a.t(a, b, m)
};
u.t = function(a, b, c) {
  return b == m ? this.P ? this.S : c : this.root == m ? c : this.root.la(0, K.b(b), b, c)
};
u.ja = function(a, b, c) {
  if(b == m) {
    var d = this.P;
    return(d ? c === this.S : d) ? a : new bg(this.m, this.P ? this.h : this.h + 1, this.root, l, c, m)
  }
  d = new zf;
  c = (this.root == m ? Kf : this.root).X(0, K.b(b), b, c, d);
  return c === this.root ? a : new bg(this.m, d.ba ? this.h + 1 : this.h, c, this.P, this.S, m)
};
u.Ta = function(a, b) {
  return b == m ? this.P : this.root == m ? n : this.root.la(0, K.b(b), b, Lc) !== Lc
};
var dg = m, dg = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.K(this, b);
    case 3:
      return this.t(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
u = bg.prototype;
u.call = dg;
u.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
u.H = function(a, b) {
  return Gc(b) ? a.ja(a, F.a(b, 0), F.a(b, 1)) : Xc.e(Ba, a, b)
};
u.toString = function() {
  return tb(this)
};
u.w = function() {
  if(0 < this.h) {
    var a = this.root != m ? this.root.Pa() : m;
    return this.P ? T(We([m, this.S]), a) : a
  }
  return m
};
u.z = q("h");
u.C = function(a, b) {
  return hf(a, b)
};
u.G = function(a, b) {
  return new bg(b, this.h, this.root, this.P, this.S, this.l)
};
u.F = q("m");
var mf = new bg(m, 0, m, n, m, 0);
function cg(a, b, c, d, f) {
  this.q = a;
  this.root = b;
  this.count = c;
  this.P = d;
  this.S = f;
  this.r = 56;
  this.j = 258
}
u = cg.prototype;
u.za = function(a, b, c) {
  return eg(a, b, c)
};
u.pa = function(a, b) {
  var c;
  a: {
    if(a.q) {
      c = b ? ((c = b.j & 2048) ? c : b.hc) || (b.j ? 0 : B(Pa, b)) : B(Pa, b);
      if(c) {
        c = eg(a, td.b ? td.b(b) : td.call(m, b), ud.b ? ud.b(b) : ud.call(m, b));
        break a
      }
      c = M(b);
      for(var d = a;;) {
        var f = N(c);
        if(y(f)) {
          c = P(c), d = eg(d, td.b ? td.b(f) : td.call(m, f), ud.b ? ud.b(f) : ud.call(m, f))
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
u.Aa = function(a) {
  var b;
  a.q ? (a.q = m, b = new bg(m, a.count, a.root, a.P, a.S, m)) : e(Error("persistent! called twice"));
  return b
};
u.K = function(a, b) {
  return b == m ? this.P ? this.S : m : this.root == m ? m : this.root.la(0, K.b(b), b)
};
u.t = function(a, b, c) {
  return b == m ? this.P ? this.S : c : this.root == m ? c : this.root.la(0, K.b(b), b, c)
};
u.z = function() {
  if(this.q) {
    return this.count
  }
  e(Error("count after persistent!"))
};
function eg(a, b, c) {
  if(a.q) {
    if(b == m) {
      a.S !== c && (a.S = c), a.P || (a.count += 1, a.P = l)
    }else {
      var d = new zf, b = (a.root == m ? Kf : a.root).Y(a.q, 0, K.b(b), b, c, d);
      b !== a.root && (a.root = b);
      d.ba && (a.count += 1)
    }
    return a
  }
  e(Error("assoc! after persistent!"))
}
var tc;
function fg(a) {
  for(var b = M(a), c = lb(mf);;) {
    if(b) {
      var a = P(P(b)), d = N(b), b = Zb(b), c = ob(c, d, b), b = a
    }else {
      return nb(c)
    }
  }
}
function gg(a) {
  var b = m;
  0 < arguments.length && (b = S(Array.prototype.slice.call(arguments, 0), 0));
  return fg.call(this, b)
}
gg.o = 0;
gg.k = function(a) {
  a = M(a);
  return fg(a)
};
gg.g = fg;
tc = gg;
function td(a) {
  return Qa(a)
}
function ud(a) {
  return Ra(a)
}
function hg(a, b, c) {
  this.m = a;
  this.Fa = b;
  this.l = c;
  this.r = 4;
  this.j = 15077647
}
hg.prototype.ua = function() {
  return new ig(lb(this.Fa))
};
hg.prototype.I = function(a) {
  var b = this.l;
  if(b != m) {
    return b
  }
  a: {
    b = 0;
    for(a = M(a);;) {
      if(a) {
        var c = N(a), b = (b + K.b(c)) % 4503599627370496, a = P(a)
      }else {
        break a
      }
    }
    b = h
  }
  return this.l = b
};
hg.prototype.K = function(a, b) {
  return a.t(a, b, m)
};
hg.prototype.t = function(a, b, c) {
  return y(Ma(this.Fa, b)) ? b : c
};
var jg = m, jg = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.K(this, b);
    case 3:
      return this.t(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
u = hg.prototype;
u.call = jg;
u.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
u.H = function(a, b) {
  return new hg(this.m, qc.e(this.Fa, b, m), m)
};
u.toString = function() {
  return tb(this)
};
u.w = function() {
  return M(le.a(N, this.Fa))
};
u.z = function() {
  return E(this.Fa)
};
u.C = function(a, b) {
  var c;
  c = b == m ? n : b ? ((c = b.j & 4096) ? c : b.Fd) ? l : b.j ? n : B(Sa, b) : B(Sa, b);
  return c ? (c = U(a) === U(b)) ? ie(function(b) {
    return mc.e(a, b, Lc) === Lc ? n : l
  }, b) : c : c
};
u.G = function(a, b) {
  return new hg(b, this.Fa, this.l)
};
u.F = q("m");
var kg = new hg(m, xf, 0);
function lg(a, b) {
  var c = a.length;
  if(c / 2 <= vf) {
    return c = b ? a : a.slice(), new hg(m, ua.a ? ua.a(c, l) : ua.call(m, c, l), m)
  }
  for(var d = 0, f = lb(kg);;) {
    if(d < c) {
      var g = d + 2, f = mb(f, a[d]), d = g
    }else {
      return nb(f)
    }
  }
}
function ig(a) {
  this.ta = a;
  this.j = 259;
  this.r = 136
}
var mg = m, mg = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ia.e(this.ta, b, Lc) === Lc ? m : b;
    case 3:
      return Ia.e(this.ta, b, Lc) === Lc ? c : b
  }
  e(Error("Invalid arity: " + arguments.length))
};
u = ig.prototype;
u.call = mg;
u.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
u.K = function(a, b) {
  return a.t(a, b, m)
};
u.t = function(a, b, c) {
  return Ia.e(this.ta, b, Lc) === Lc ? c : b
};
u.z = function() {
  return U(this.ta)
};
u.pa = function(a, b) {
  this.ta = ob(this.ta, b, m);
  return a
};
u.Aa = function() {
  return new hg(m, nb(this.ta), m)
};
var ng, og = m;
function pg(a) {
  var b = a instanceof xb;
  if(b ? a.c.length < vf : b) {
    for(var a = a.c, b = a.length, c = Array(2 * b), d = 0;;) {
      if(d < b) {
        var f = 2 * d;
        c[f] = a[d];
        c[f + 1] = m;
        d += 1
      }else {
        return lg.a ? lg.a(c, l) : lg.call(m, c, l)
      }
    }
  }else {
    for(c = lb(kg);;) {
      if(a != m) {
        b = a.ea(a), c = c.pa(c, a.O(a)), a = b
      }else {
        return c.Aa(c)
      }
    }
  }
}
function qg(a) {
  var b = m;
  0 < arguments.length && (b = S(Array.prototype.slice.call(arguments, 0), 0));
  return pg.call(this, b)
}
qg.o = 0;
qg.k = function(a) {
  a = M(a);
  return pg(a)
};
qg.g = pg;
og = function(a) {
  switch(arguments.length) {
    case 0:
      return kg;
    default:
      return qg.g(S(arguments, 0))
  }
  e(Error("Invalid arity: " + arguments.length))
};
og.o = 0;
og.k = qg.k;
og.A = function() {
  return kg
};
og.g = qg.g;
ng = og;
function rg(a) {
  if(a && y(y(m) ? m : a.Pb)) {
    return a.name
  }
  if(ya(a)) {
    return a
  }
  if(Nc(a)) {
    var b = a.lastIndexOf("/", a.length - 2);
    return 0 > b ? md.a(a, 2) : md.a(a, b + 1)
  }
  e(Error([J("Doesn't support name: "), J(a)].join("")))
}
function sg(a) {
  if(a && y(y(m) ? m : a.Pb)) {
    return a.Ga
  }
  if(Nc(a)) {
    var b = a.lastIndexOf("/", a.length - 2);
    return-1 < b ? md.e(a, 2, b) : m
  }
  e(Error([J("Doesn't support namespace: "), J(a)].join("")))
}
function tg(a, b, c, d, f) {
  this.m = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.l = f;
  this.r = 0;
  this.j = 32375006
}
u = tg.prototype;
u.I = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Pb(a)
};
u.ea = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new tg(this.m, this.start + this.step, this.end, this.step, m) : m : this.start + this.step > this.end ? new tg(this.m, this.start + this.step, this.end, this.step, m) : m
};
u.H = function(a, b) {
  return T(b, a)
};
u.toString = function() {
  return tb(this)
};
u.wa = function(a, b) {
  return Db.a(a, b)
};
u.xa = function(a, b, c) {
  return Db.e(a, b, c)
};
u.w = function(a) {
  return 0 < this.step ? this.start < this.end ? a : m : this.start > this.end ? a : m
};
u.z = function(a) {
  return wa(a.w(a)) ? 0 : Math.ceil((this.end - this.start) / this.step)
};
u.O = q("start");
u.R = function(a) {
  return a.w(a) != m ? new tg(this.m, this.start + this.step, this.end, this.step, m) : yb
};
u.C = function(a, b) {
  return Rb(a, b)
};
u.G = function(a, b) {
  return new tg(b, this.start, this.end, this.step, this.l)
};
u.F = q("m");
u.v = function(a, b) {
  if(b < a.z(a)) {
    return this.start + b * this.step
  }
  var c = this.start > this.end;
  if(c ? 0 === this.step : c) {
    return this.start
  }
  e(Error("Index out of bounds"))
};
u.N = function(a, b, c) {
  c = b < a.z(a) ? this.start + b * this.step : ((a = this.start > this.end) ? 0 === this.step : a) ? this.start : c;
  return c
};
var ug, vg = m;
function wg() {
  return vg.e(0, Number.MAX_VALUE, 1)
}
function xg(a) {
  return vg.e(0, a, 1)
}
function yg(a, b) {
  return vg.e(a, b, 1)
}
function zg(a, b, c) {
  return new tg(m, a, b, c, m)
}
vg = function(a, b, c) {
  switch(arguments.length) {
    case 0:
      return wg.call(this);
    case 1:
      return xg.call(this, a);
    case 2:
      return yg.call(this, a, b);
    case 3:
      return zg.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
vg.A = wg;
vg.b = xg;
vg.a = yg;
vg.e = zg;
ug = vg;
var Ag, Bg = m;
function Cg(a) {
  for(;;) {
    if(M(a)) {
      a = P(a)
    }else {
      return m
    }
  }
}
function Dg(a, b) {
  for(;;) {
    var c = M(b);
    if(y(c ? 0 < a : c)) {
      var c = a - 1, d = P(b), a = c, b = d
    }else {
      return m
    }
  }
}
Bg = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Cg.call(this, a);
    case 2:
      return Dg.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Bg.b = Cg;
Bg.a = Dg;
Ag = Bg;
var Eg, Fg = m;
function Gg(a) {
  Ag.b(a);
  return a
}
function Hg(a, b) {
  Ag.a(a, b);
  return b
}
Fg = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Gg.call(this, a);
    case 2:
      return Hg.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Fg.b = Gg;
Fg.a = Hg;
Eg = Fg;
function Ig(a, b) {
  var c = a.exec(b);
  return c == m ? m : 1 === U(c) ? N(c) : Xe(c)
}
function Y(a, b, c, d, f, g, i) {
  I(a, c);
  M(i) && (b.e ? b.e(N(i), a, g) : b.call(m, N(i), a, g));
  for(var c = M(P(i)), i = m, j = 0, k = 0;;) {
    if(k < j) {
      var p = i.v(i, k);
      I(a, d);
      b.e ? b.e(p, a, g) : b.call(m, p, a, g);
      k += 1
    }else {
      if(c = M(c)) {
        i = c, Hc(i) ? (c = qb(i), k = rb(i), i = c, j = U(c), c = k) : (c = N(i), I(a, d), b.e ? b.e(c, a, g) : b.call(m, c, a, g), c = P(i), i = m, j = 0), k = 0
      }else {
        break
      }
    }
  }
  return I(a, f)
}
function Jg(a, b) {
  for(var c = M(b), d = m, f = 0, g = 0;;) {
    if(g < f) {
      var i = d.v(d, g);
      I(a, i);
      g += 1
    }else {
      if(c = M(c)) {
        d = c, Hc(d) ? (c = qb(d), f = rb(d), d = c, i = U(c), c = f, f = i) : (i = N(d), I(a, i), c = P(d), d = m, f = 0), g = 0
      }else {
        return m
      }
    }
  }
}
function Kg(a, b) {
  var c = m;
  1 < arguments.length && (c = S(Array.prototype.slice.call(arguments, 1), 0));
  return Jg.call(this, a, c)
}
Kg.o = 1;
Kg.k = function(a) {
  var b = N(a), a = O(a);
  return Jg(b, a)
};
Kg.g = Jg;
var Lg = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"}, Z = function Mg(b, c, d) {
  if(b == m) {
    return I(c, "nil")
  }
  if(h === b) {
    return I(c, "#<undefined>")
  }
  var f;
  f = mc.a(d, "\ufdd0:meta");
  y(f) && (f = b ? ((f = b.j & 131072) ? f : b.ic) ? l : b.j ? n : B(Va, b) : B(Va, b), f = y(f) ? Ac(b) : f);
  y(f) && (I(c, "^"), Mg(Ac(b), c, d), I(c, " "));
  if(b == m) {
    return I(c, "nil")
  }
  if(b.Va) {
    return b.wb(b, c, d)
  }
  if(f = b) {
    f = (f = b.j & 2147483648) ? f : b.M
  }
  return f ? b.J(b, c, d) : ((f = (b == m ? m : b.constructor) === Boolean) ? f : "number" === typeof b) ? I(c, "" + J(b)) : b instanceof Array ? Y(c, Mg, "#<Array [", ", ", "]>", d, b) : w(b) ? Nc(b) ? (I(c, ":"), d = sg(b), y(d) && Kg.g(c, S(["" + J(d), "/"], 0)), I(c, rg(b))) : b instanceof ub ? (d = sg(b), y(d) && Kg.g(c, S(["" + J(d), "/"], 0)), I(c, rg(b))) : y((new V("\ufdd0:readably")).call(m, d)) ? I(c, [J('"'), J(b.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(b) {
    return Lg[b]
  })), J('"')].join("")) : I(c, b) : wc(b) ? Kg.g(c, S(["#<", "" + J(b), ">"], 0)) : b instanceof Date ? (d = function(b, c) {
    for(var d = "" + J(b);;) {
      if(U(d) < c) {
        d = [J("0"), J(d)].join("")
      }else {
        return d
      }
    }
  }, Kg.g(c, S(['#inst "', "" + J(b.getUTCFullYear()), "-", d(b.getUTCMonth() + 1, 2), "-", d(b.getUTCDate(), 2), "T", d(b.getUTCHours(), 2), ":", d(b.getUTCMinutes(), 2), ":", d(b.getUTCSeconds(), 2), ".", d(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : y(b instanceof RegExp) ? Kg.g(c, S(['#"', b.source, '"'], 0)) : Kg.g(c, S(["#<", "" + J(b), ">"], 0))
};
function Ng(a) {
  var b = ta(), c = a == m;
  if(c ? c : wa(M(a))) {
    b = ""
  }else {
    var c = J, d = new ra, f = new sb(d);
    a: {
      Z(N(a), f, b);
      for(var a = M(P(a)), g = m, i = 0, j = 0;;) {
        if(j < i) {
          var k = g.v(g, j);
          I(f, " ");
          Z(k, f, b);
          j += 1
        }else {
          if(a = M(a)) {
            g = a, Hc(g) ? (a = qb(g), i = rb(g), g = a, k = U(a), a = i, i = k) : (k = N(g), I(f, " "), Z(k, f, b), a = P(g), g = m, i = 0), j = 0
          }else {
            break a
          }
        }
      }
    }
    jb(f);
    b = "" + c(d)
  }
  return b
}
function Og(a) {
  var b = m;
  0 < arguments.length && (b = S(Array.prototype.slice.call(arguments, 0), 0));
  return Ng(b)
}
Og.o = 0;
Og.k = function(a) {
  a = M(a);
  return Ng(a)
};
Og.g = function(a) {
  return Ng(a)
};
xb.prototype.M = l;
xb.prototype.J = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, a)
};
Ic.prototype.M = l;
Ic.prototype.J = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, a)
};
tf.prototype.M = l;
tf.prototype.J = function(a, b, c) {
  return Y(b, function(a) {
    return Y(b, Z, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
Dd.prototype.M = l;
Dd.prototype.J = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, a)
};
Uf.prototype.M = l;
Uf.prototype.J = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, a)
};
Jc.prototype.M = l;
Jc.prototype.J = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, a)
};
bg.prototype.M = l;
bg.prototype.J = function(a, b, c) {
  return Y(b, function(a) {
    return Y(b, Z, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
hg.prototype.M = l;
hg.prototype.J = function(a, b, c) {
  return Y(b, Z, "#{", " ", "}", c, a)
};
Pe.prototype.M = l;
Pe.prototype.J = function(a, b, c) {
  return Y(b, Z, "[", " ", "]", c, a)
};
vd.prototype.M = l;
vd.prototype.J = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, a)
};
wd.prototype.M = l;
wd.prototype.J = function(a, b) {
  return I(b, "()")
};
zd.prototype.M = l;
zd.prototype.J = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, a)
};
tg.prototype.M = l;
tg.prototype.J = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, a)
};
Yf.prototype.M = l;
Yf.prototype.J = function(a, b, c) {
  return Y(b, Z, "(", " ", ")", c, a)
};
of.prototype.M = l;
of.prototype.J = function(a, b, c) {
  return Y(b, function(a) {
    return Y(b, Z, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
Pe.prototype.dc = l;
Pe.prototype.ec = function(a, b) {
  return Pc.a(a, b)
};
function Pg(a, b, c, d) {
  this.state = a;
  this.m = b;
  this.wc = c;
  this.xc = d;
  this.j = 2153938944;
  this.r = 2
}
u = Pg.prototype;
u.I = function(a) {
  return ea(a)
};
u.Qb = function(a, b, c) {
  for(var d = M(this.xc), f = m, g = 0, i = 0;;) {
    if(i < g) {
      var j = f.v(f, i), k = ic.e(j, 0, m), j = ic.e(j, 1, m);
      j.n ? j.n(k, a, b, c) : j.call(m, k, a, b, c);
      i += 1
    }else {
      if(d = M(d)) {
        Hc(d) ? (f = qb(d), d = rb(d), k = f, g = U(f), f = k) : (f = N(d), k = ic.e(f, 0, m), j = ic.e(f, 1, m), j.n ? j.n(k, a, b, c) : j.call(m, k, a, b, c), d = P(d), f = m, g = 0), i = 0
      }else {
        return m
      }
    }
  }
};
u.J = function(a, b, c) {
  I(b, "#<Atom: ");
  Z(this.state, b, c);
  return I(b, ">")
};
u.F = q("m");
u.fc = q("state");
u.C = function(a, b) {
  return a === b
};
var Qg, Rg = m;
function Sg(a) {
  return new Pg(a, m, m, m)
}
function Tg(a, b) {
  var c;
  c = b == m ? n : b ? ((c = b.j & 64) ? c : b.vb) ? l : b.j ? n : B(Ga, b) : B(Ga, b);
  var d = c ? yc.a(tc, b) : b;
  c = mc.a(d, "\ufdd0:validator");
  d = mc.a(d, "\ufdd0:meta");
  return new Pg(a, d, c, m)
}
function Ug(a, b) {
  var c = m;
  1 < arguments.length && (c = S(Array.prototype.slice.call(arguments, 1), 0));
  return Tg.call(this, a, c)
}
Ug.o = 1;
Ug.k = function(a) {
  var b = N(a), a = O(a);
  return Tg(b, a)
};
Ug.g = Tg;
Rg = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Sg.call(this, a);
    default:
      return Ug.g(a, S(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Rg.o = 1;
Rg.k = Ug.k;
Rg.b = Sg;
Rg.g = Ug.g;
Qg = Rg;
function Vg(a, b) {
  var c = a.wc;
  y(c) && !y(c.b ? c.b(b) : c.call(m, b)) && e(Error([J("Assert failed: "), J("Validator rejected reference state"), J("\n"), J(Og.g(S([zc(Qb(new ub(m, "validate", "validate", 1233162959, m), new ub(m, "new-value", "new-value", 972165309, m)), tc("\ufdd0:line", 6673, "\ufdd0:column", 13))], 0)))].join("")));
  c = a.state;
  a.state = b;
  kb(a, c, b);
  return b
}
var Wg, Xg = m;
function Yg(a, b) {
  return Vg(a, b.b ? b.b(a.state) : b.call(m, a.state))
}
function Zg(a, b, c) {
  return Vg(a, b.a ? b.a(a.state, c) : b.call(m, a.state, c))
}
function $g(a, b, c, d) {
  return Vg(a, b.e ? b.e(a.state, c, d) : b.call(m, a.state, c, d))
}
function ah(a, b, c, d, f) {
  return Vg(a, b.n ? b.n(a.state, c, d, f) : b.call(m, a.state, c, d, f))
}
function bh(a, b, c, d, f, g) {
  return Vg(a, yc.g(b, a.state, c, d, f, S([g], 0)))
}
function ch(a, b, c, d, f, g) {
  var i = m;
  5 < arguments.length && (i = S(Array.prototype.slice.call(arguments, 5), 0));
  return bh.call(this, a, b, c, d, f, i)
}
ch.o = 5;
ch.k = function(a) {
  var b = N(a), a = P(a), c = N(a), a = P(a), d = N(a), a = P(a), f = N(a), a = P(a), g = N(a), a = O(a);
  return bh(b, c, d, f, g, a)
};
ch.g = bh;
Xg = function(a, b, c, d, f, g) {
  switch(arguments.length) {
    case 2:
      return Yg.call(this, a, b);
    case 3:
      return Zg.call(this, a, b, c);
    case 4:
      return $g.call(this, a, b, c, d);
    case 5:
      return ah.call(this, a, b, c, d, f);
    default:
      return ch.g(a, b, c, d, f, S(arguments, 5))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Xg.o = 5;
Xg.k = ch.k;
Xg.a = Yg;
Xg.e = Zg;
Xg.n = $g;
Xg.aa = ah;
Xg.g = ch.g;
Wg = Xg;
var dh, eh, fh, gh;
function hh() {
  return ba.navigator ? ba.navigator.userAgent : m
}
gh = fh = eh = dh = n;
var ih;
if(ih = hh()) {
  var jh = ba.navigator;
  dh = 0 == ih.indexOf("Opera");
  eh = !dh && -1 != ih.indexOf("MSIE");
  fh = !dh && -1 != ih.indexOf("WebKit");
  gh = !dh && !fh && "Gecko" == jh.product
}
var kh = dh, $ = eh, lh = gh, mh = fh, nh = ba.navigator, oh = -1 != (nh && nh.platform || "").indexOf("Mac"), ph;
a: {
  var qh = "", rh;
  if(kh && ba.opera) {
    var sh = ba.opera.version, qh = "function" == typeof sh ? sh() : sh
  }else {
    if(lh ? rh = /rv\:([^\);]+)(\)|;)/ : $ ? rh = /MSIE\s+([^\);]+)(\)|;)/ : mh && (rh = /WebKit\/(\S+)/), rh) {
      var th = rh.exec(hh()), qh = th ? th[1] : ""
    }
  }
  if($) {
    var uh, vh = ba.document;
    uh = vh ? vh.documentMode : h;
    if(uh > parseFloat(qh)) {
      ph = String(uh);
      break a
    }
  }
  ph = qh
}
var wh = {};
function xh(a) {
  var b;
  if(!(b = wh[a])) {
    b = 0;
    for(var c = ja(String(ph)).split("."), d = ja(String(a)).split("."), f = Math.max(c.length, d.length), g = 0;0 == b && g < f;g++) {
      var i = c[g] || "", j = d[g] || "", k = RegExp("(\\d*)(\\D*)", "g"), p = RegExp("(\\d*)(\\D*)", "g");
      do {
        var r = k.exec(i) || ["", "", ""], t = p.exec(j) || ["", "", ""];
        if(0 == r[0].length && 0 == t[0].length) {
          break
        }
        b = ((0 == r[1].length ? 0 : parseInt(r[1], 10)) < (0 == t[1].length ? 0 : parseInt(t[1], 10)) ? -1 : (0 == r[1].length ? 0 : parseInt(r[1], 10)) > (0 == t[1].length ? 0 : parseInt(t[1], 10)) ? 1 : 0) || ((0 == r[2].length) < (0 == t[2].length) ? -1 : (0 == r[2].length) > (0 == t[2].length) ? 1 : 0) || (r[2] < t[2] ? -1 : r[2] > t[2] ? 1 : 0)
      }while(0 == b)
    }
    b = wh[a] = 0 <= b
  }
  return b
}
var yh = {};
function zh() {
  return yh[9] || (yh[9] = $ && !!document.documentMode && 9 <= document.documentMode)
}
;!$ || zh();
var Ah = !$ || zh(), Bh = $ && !xh("8");
!mh || xh("528");
lh && xh("1.9b") || $ && xh("8") || kh && xh("9.5") || mh && xh("528");
lh && !xh("8") || $ && xh("9");
function Ch() {
  this.Tb = n
}
;function Dh(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
Dh.prototype.Ha = n;
Dh.prototype.defaultPrevented = n;
Dh.prototype.ab = l;
Dh.prototype.preventDefault = function() {
  this.defaultPrevented = l;
  this.ab = n
};
var Eh = {Ec:"click", Jc:"dblclick", cd:"mousedown", gd:"mouseup", fd:"mouseover", ed:"mouseout", dd:"mousemove", td:"selectstart", Yc:"keypress", Xc:"keydown", Zc:"keyup", Cc:"blur", Rc:"focus", Kc:"deactivate", Sc:$ ? "focusin" : "DOMFocusIn", Tc:$ ? "focusout" : "DOMFocusOut", Dc:"change", sd:"select", ud:"submit", Wc:"input", od:"propertychange", Oc:"dragstart", Lc:"dragenter", Nc:"dragover", Mc:"dragleave", Pc:"drop", yd:"touchstart", xd:"touchmove", wd:"touchend", vd:"touchcancel", Gc:"contextmenu", 
Qc:"error", Vc:"help", $c:"load", ad:"losecapture", pd:"readystatechange", qd:"resize", rd:"scroll", Ad:"unload", Uc:"hashchange", kd:"pagehide", ld:"pageshow", nd:"popstate", Hc:"copy", md:"paste", Ic:"cut", zc:"beforecopy", Ac:"beforecut", Bc:"beforepaste", jd:"online", hd:"offline", bd:"message", Fc:"connect", zd:mh ? "webkitTransitionEnd" : kh ? "oTransitionEnd" : "transitionend"};
function Fh(a) {
  Fh[" "](a);
  return a
}
Fh[" "] = function() {
};
function Gh(a, b) {
  a && this.Oa(a, b)
}
ia(Gh, Dh);
u = Gh.prototype;
u.target = m;
u.relatedTarget = m;
u.offsetX = 0;
u.offsetY = 0;
u.clientX = 0;
u.clientY = 0;
u.screenX = 0;
u.screenY = 0;
u.button = 0;
u.keyCode = 0;
u.charCode = 0;
u.ctrlKey = n;
u.altKey = n;
u.shiftKey = n;
u.metaKey = n;
u.sc = n;
u.Bb = m;
u.Oa = function(a, b) {
  var c = this.type = a.type;
  Dh.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(lh) {
      var f;
      a: {
        try {
          Fh(d.nodeName);
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
  this.offsetX = mh || a.offsetX !== h ? a.offsetX : a.layerX;
  this.offsetY = mh || a.offsetY !== h ? a.offsetY : a.layerY;
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
  this.sc = oh ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.Bb = a;
  a.defaultPrevented && this.preventDefault();
  delete this.Ha
};
u.preventDefault = function() {
  Gh.vc.preventDefault.call(this);
  var a = this.Bb;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = n, Bh) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
function Hh() {
}
var Ih = 0;
u = Hh.prototype;
u.key = 0;
u.Ja = n;
u.Kb = n;
u.Oa = function(a, b, c, d, f, g) {
  ca(a) ? this.Wb = l : a && a.handleEvent && ca(a.handleEvent) ? this.Wb = n : e(Error("Invalid listener argument"));
  this.Qa = a;
  this.$b = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.Eb = g;
  this.Kb = n;
  this.key = ++Ih;
  this.Ja = n
};
u.handleEvent = function(a) {
  return this.Wb ? this.Qa.call(this.Eb || this.src, a) : this.Qa.handleEvent.call(this.Qa, a)
};
var Jh = {}, Kh = {}, Lh = {}, Mh = {};
function Nh(a, b, c, d, f) {
  if(b) {
    if("array" == v(b)) {
      for(var g = 0;g < b.length;g++) {
        Nh(a, b[g], c, d, f)
      }
      return m
    }
    var d = !!d, i = Kh;
    b in i || (i[b] = {W:0, U:0});
    i = i[b];
    d in i || (i[d] = {W:0, U:0}, i.W++);
    var i = i[d], j = ea(a), k;
    i.U++;
    if(i[j]) {
      k = i[j];
      for(g = 0;g < k.length;g++) {
        if(i = k[g], i.Qa == c && i.Eb == f) {
          if(i.Ja) {
            break
          }
          return k[g].key
        }
      }
    }else {
      k = i[j] = [], i.W++
    }
    var p = Oh, r = Ah ? function(a) {
      return p.call(r.src, r.key, a)
    } : function(a) {
      a = p.call(r.src, r.key, a);
      if(!a) {
        return a
      }
    }, g = r;
    g.src = a;
    i = new Hh;
    i.Oa(c, g, a, b, d, f);
    c = i.key;
    g.key = c;
    k.push(i);
    Jh[c] = i;
    Lh[j] || (Lh[j] = []);
    Lh[j].push(i);
    a.addEventListener ? (a == ba || !a.Sb) && a.addEventListener(b, g, d) : a.attachEvent(b in Mh ? Mh[b] : Mh[b] = "on" + b, g);
    return c
  }
  e(Error("Invalid event type"))
}
function Ph(a, b, c, d, f) {
  if("array" == v(b)) {
    for(var g = 0;g < b.length;g++) {
      Ph(a, b[g], c, d, f)
    }
  }else {
    d = !!d;
    a: {
      g = Kh;
      if(b in g && (g = g[b], d in g && (g = g[d], a = ea(a), g[a]))) {
        a = g[a];
        break a
      }
      a = m
    }
    if(a) {
      for(g = 0;g < a.length;g++) {
        if(a[g].Qa == c && a[g].capture == d && a[g].Eb == f) {
          Qh(a[g].key);
          break
        }
      }
    }
  }
}
function Qh(a) {
  if(Jh[a]) {
    var b = Jh[a];
    if(!b.Ja) {
      var c = b.src, d = b.type, f = b.$b, g = b.capture;
      c.removeEventListener ? (c == ba || !c.Sb) && c.removeEventListener(d, f, g) : c.detachEvent && c.detachEvent(d in Mh ? Mh[d] : Mh[d] = "on" + d, f);
      c = ea(c);
      if(Lh[c]) {
        var f = Lh[c], i = ma(f, b);
        0 <= i && la.splice.call(f, i, 1);
        0 == f.length && delete Lh[c]
      }
      b.Ja = l;
      if(b = Kh[d][g][c]) {
        b.Yb = l, Rh(d, g, c, b)
      }
      delete Jh[a]
    }
  }
}
function Rh(a, b, c, d) {
  if(!d.Ya && d.Yb) {
    for(var f = 0, g = 0;f < d.length;f++) {
      d[f].Ja ? d[f].$b.src = m : (f != g && (d[g] = d[f]), g++)
    }
    d.length = g;
    d.Yb = n;
    0 == g && (delete Kh[a][b][c], Kh[a][b].W--, 0 == Kh[a][b].W && (delete Kh[a][b], Kh[a].W--), 0 == Kh[a].W && delete Kh[a])
  }
}
function Sh(a, b, c, d, f) {
  var g = 1, b = ea(b);
  if(a[b]) {
    a.U--;
    a = a[b];
    a.Ya ? a.Ya++ : a.Ya = 1;
    try {
      for(var i = a.length, j = 0;j < i;j++) {
        var k = a[j];
        k && !k.Ja && (g &= Th(k, f) !== n)
      }
    }finally {
      a.Ya--, Rh(c, d, b, a)
    }
  }
  return Boolean(g)
}
function Th(a, b) {
  a.Kb && Qh(a.key);
  return a.handleEvent(b)
}
function Oh(a, b) {
  if(!Jh[a]) {
    return l
  }
  var c = Jh[a], d = c.type, f = Kh;
  if(!(d in f)) {
    return l
  }
  var f = f[d], g, i;
  if(!Ah) {
    var j;
    if(!(j = b)) {
      a: {
        j = ["window", "event"];
        for(var k = ba;g = j.shift();) {
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
          }catch(r) {
            p = l
          }
        }
        if(p || g.returnValue == h) {
          g.returnValue = l
        }
      }
    }
    p = new Gh;
    p.Oa(g, this);
    g = l;
    try {
      if(j) {
        for(var t = [], x = p.currentTarget;x;x = x.parentNode) {
          t.push(x)
        }
        i = f[l];
        i.U = i.W;
        for(var C = t.length - 1;!p.Ha && 0 <= C && i.U;C--) {
          p.currentTarget = t[C], g &= Sh(i, t[C], d, l, p)
        }
        if(k) {
          i = f[n];
          i.U = i.W;
          for(C = 0;!p.Ha && C < t.length && i.U;C++) {
            p.currentTarget = t[C], g &= Sh(i, t[C], d, n, p)
          }
        }
      }else {
        g = Th(c, p)
      }
    }finally {
      t && (t.length = 0)
    }
    return g
  }
  d = new Gh(b, this);
  return g = Th(c, d)
}
;var Uh;
!$ || zh();
!lh && !$ || $ && zh() || lh && xh("1.9.1");
var Vh = $ && !xh("9");
function Wh(a, b) {
  var c = b || document;
  return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : c.getElementsByClassName ? c.getElementsByClassName(a) : Xh("*", a, b)
}
function Yh(a) {
  var b = document, c = m;
  return(c = b.querySelectorAll && b.querySelector ? b.querySelector("." + a) : Wh(a, h)[0]) || m
}
function Xh(a, b, c) {
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
      a = i.className, "function" == typeof a.split && 0 <= ma(a.split(/\s+/), b) && (d[f++] = i)
    }
    d.length = f;
    return d
  }
  return c
}
function Zh(a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : m
}
var $h = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, ai = {IMG:" ", BR:"\n"};
function bi(a, b, c) {
  if(!(a.nodeName in $h)) {
    if(3 == a.nodeType) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in ai) {
        b.push(ai[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          bi(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function ci(a) {
  this.yb = a || ba.document || document
}
u = ci.prototype;
u.Ub = function(a) {
  return w(a) ? this.yb.getElementById(a) : a
};
u.createElement = function(a) {
  return this.yb.createElement(a)
};
u.createTextNode = function(a) {
  return this.yb.createTextNode(a)
};
u.appendChild = function(a, b) {
  a.appendChild(b)
};
u.append = function(a, b) {
  function c(a) {
    a && f.appendChild(w(a) ? d.createTextNode(a) : a)
  }
  for(var d = 9 == a.nodeType ? a : a.ownerDocument || a.document, f = a, g = arguments, i = 1;i < g.length;i++) {
    var j = g[i], k = j, p = v(k);
    if(("array" == p || "object" == p && "number" == typeof k.length) && !(da(j) && 0 < j.nodeType)) {
      k = na;
      a: {
        if((p = j) && "number" == typeof p.length) {
          if(da(p)) {
            p = "function" == typeof p.item || "string" == typeof p.item;
            break a
          }
          if(ca(p)) {
            p = "function" == typeof p.item;
            break a
          }
        }
        p = n
      }
      if(p) {
        if(p = j.length, 0 < p) {
          for(var r = Array(p), t = 0;t < p;t++) {
            r[t] = j[t]
          }
          j = r
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
var di, ei = document.createElement("div");
ei.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
var fi = Q.a(ei.firstChild.nodeType, 3), gi = Q.a(ei.getElementsByTagName("tbody").length, 0);
Q.a(ei.getElementsByTagName("link").length, 0);
function hi(a) {
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
;var ii = /<|&#?\w+;/, ji = /^\s+/, ki = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i, li = /<([\w:]+)/, mi = /<tbody/i, ni = We([1, "<select multiple='multiple'>", "</select>"]), oi = We([1, "<table>", "</table>"]), pi = We([3, "<table><tbody><tr>", "</tr></tbody></table>"]), qi;
a: {
  for(var ri = "col \ufdd0:default tfoot caption optgroup legend area td thead th option tbody tr colgroup".split(" "), si = [We([2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"]), We([0, "", ""]), oi, oi, ni, We([1, "<fieldset>", "</fieldset>"]), We([1, "<map>", "</map>"]), pi, oi, pi, ni, oi, We([2, "<table><tbody>", "</tbody></table>"]), oi], ti = ri.length, ui = 0, vi = lb(mf);;) {
    if(ui < ti) {
      var wi = ui + 1, xi = ob(vi, ri[ui], si[ui]), ui = wi, vi = xi
    }else {
      qi = nb(vi);
      break a
    }
  }
  qi = h
}
function yi(a) {
  var b;
  ya(ki) ? b = a.replace(RegExp(String(ki).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), "<$1></$2>") : y(ki.hasOwnProperty("source")) ? b = a.replace(RegExp(ki.source, "g"), "<$1></$2>") : e([J("Invalid match arg: "), J(ki)].join(""));
  var c = ("" + J(Zb(Ig(li, b)))).toLowerCase(), d = mc.e(qi, c, (new V("\ufdd0:default")).call(m, qi)), a = ic.e(d, 0, m), f = ic.e(d, 1, m), d = ic.e(d, 2, m);
  a: {
    var g = document.createElement("div");
    g.innerHTML = [J(f), J(b), J(d)].join("");
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
  if(y(gi)) {
    a: {
      d = a;
      g = wa(Ig(mi, b));
      ((c = Q.a(c, "table")) ? g : c) ? (f = d.firstChild, f = y(f) ? d.firstChild.childNodes : f) : f = ((f = Q.a(f, "<table>")) ? g : f) ? divchildNodes : Ve;
      for(var f = M(f), d = m, i = g = 0;;) {
        if(i < g) {
          var c = d.v(d, i), j = Q.a(c.nodeName, "tbody");
          (j ? Q.a(c.childNodes.length, 0) : j) && c.parentNode.removeChild(c);
          i += 1
        }else {
          if(f = M(f)) {
            Hc(f) ? (d = qb(f), f = rb(f), c = d, g = U(d), d = c) : (c = N(f), ((d = Q.a(c.nodeName, "tbody")) ? Q.a(c.childNodes.length, 0) : d) && c.parentNode.removeChild(c), f = P(f), d = m, g = 0), i = 0
          }else {
            break a
          }
        }
      }
    }
  }
  f = (f = wa(fi)) ? Ig(ji, b) : f;
  y(f) && a.insertBefore(document.createTextNode(N(Ig(ji, b))), a.firstChild);
  return a.childNodes
}
function zi(a) {
  if(a ? a.zb : a) {
    return a.zb(a)
  }
  var b;
  var c = zi[v(a == m ? m : a)];
  c ? b = c : (c = zi._) ? b = c : e(D("DomContent.nodes", a));
  return b.call(m, a)
}
function Ai(a) {
  if(a ? a.Ab : a) {
    return a.Ab(a)
  }
  var b;
  var c = Ai[v(a == m ? m : a)];
  c ? b = c : (c = Ai._) ? b = c : e(D("DomContent.single-node", a));
  return b.call(m, a)
}
function Bi(a) {
  a = rg(a);
  return w(a) ? document.getElementById(a) : a
}
var Ei = function Ci(b) {
  h === di && (di = {}, di = function(b, d, f) {
    this.La = b;
    this.bc = d;
    this.pc = f;
    this.r = 0;
    this.j = 393216
  }, di.Va = l, di.xb = "domina/t4769", di.wb = function(b, d) {
    return I(d, "domina/t4769")
  }, di.prototype.zb = function() {
    return Di.b ? Di.b(Wh(rg(this.La))) : Di.call(m, Wh(rg(this.La)))
  }, di.prototype.Ab = function() {
    return Di.b ? Di.b(Yh(rg(this.La))) : Di.call(m, Yh(rg(this.La)))
  }, di.prototype.F = q("pc"), di.prototype.G = function(b, d) {
    return new di(this.La, this.bc, d)
  });
  return new di(b, Ci, m)
};
function Fi(a, b) {
  Gi.e ? Gi.e(function(a, b) {
    a.insertBefore(b, a.childNodes[0] || m)
  }, a, b) : Gi.call(m, function(a, b) {
    a.insertBefore(b, a.childNodes[0] || m)
  }, a, b)
}
function Hi(a) {
  var b = Ai(a).attributes;
  return Xc.a($b, Ee(ke(), le.a(function(a) {
    var a = b.item(a), d = a.nodeValue, f = de.a(m, d);
    return(f ? de.a("", d) : f) ? ua([od.b(a.nodeName.toLowerCase()), a.nodeValue], l) : m
  }, ug.b(b.length))))
}
function Ii(a) {
  a = Ai(a);
  if(Vh && "innerText" in a) {
    a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
  }else {
    var b = [];
    bi(a, b, l);
    a = b.join("")
  }
  a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
  a = a.replace(/\u200B/g, "");
  Vh || (a = a.replace(/ +/g, " "));
  " " != a && (a = a.replace(/^\s*/, ""));
  return ja(a)
}
function Ji(a) {
  return hi(Ai(a))
}
function Gi(a, b, c) {
  for(var b = zi(b), d = zi(c), c = document.createDocumentFragment(), f = M(d), g = m, i = 0, j = 0;;) {
    if(j < i) {
      var k = g.v(g, j);
      c.appendChild(k);
      j += 1
    }else {
      if(f = M(f)) {
        g = f, Hc(g) ? (f = qb(g), j = rb(g), g = f, i = U(f), f = j) : (f = N(g), c.appendChild(f), f = P(g), g = m, i = 0), j = 0
      }else {
        break
      }
    }
  }
  d = Eg.b(te.a(U(b) - 1, function(a, b, c) {
    return function() {
      return c.cloneNode(l)
    }
  }(b, d, c)));
  return M(b) ? (a.a ? a.a(N(b), c) : a.call(m, N(b), c), Eg.b(le.e(function(b, c) {
    return a.a ? a.a(b, c) : a.call(m, b, c)
  }, O(b), d))) : m
}
var Ki, Li = m;
function Mi(a) {
  return Li.a(a, 0)
}
function Ni(a, b) {
  return b < a.length ? new Dd(m, n, function() {
    return T(a.item(b), Li.a(a, b + 1))
  }, m) : m
}
Li = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Mi.call(this, a);
    case 2:
      return Ni.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Li.b = Mi;
Li.a = Ni;
Ki = Li;
var Oi, Pi = m;
function Qi(a) {
  return Pi.a(a, 0)
}
function Ri(a, b) {
  return b < a.length ? new Dd(m, n, function() {
    return T(a[b], Pi.a(a, b + 1))
  }, m) : m
}
Pi = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Qi.call(this, a);
    case 2:
      return Ri.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Pi.b = Qi;
Pi.a = Ri;
Oi = Pi;
function Si(a) {
  return y(a.item) ? Ki.b(a) : Oi.b(a)
}
function Ti(a) {
  if(y(a)) {
    var b = wa(a.name);
    return b ? a.length : b
  }
  return a
}
function Di(a) {
  if(a == m) {
    a = yb
  }else {
    var b;
    b = a ? ((b = a.j & 8388608) ? b : a.ya) || (a.j ? 0 : B(gb, a)) : B(gb, a);
    a = b ? M(a) : y(Ti(a)) ? Si(a) : M(We([a]))
  }
  return a
}
zi._ = function(a) {
  if(a == m) {
    a = yb
  }else {
    var b;
    b = a ? ((b = a.j & 8388608) ? b : a.ya) || (a.j ? 0 : B(gb, a)) : B(gb, a);
    a = b ? M(a) : y(Ti(a)) ? Si(a) : M(We([a]))
  }
  return a
};
Ai._ = function(a) {
  if(a == m) {
    a = m
  }else {
    var b;
    b = a ? ((b = a.j & 8388608) ? b : a.ya) || (a.j ? 0 : B(gb, a)) : B(gb, a);
    a = b ? N(a) : y(Ti(a)) ? a.item(0) : a
  }
  return a
};
zi.string = function(a) {
  return Eg.b(zi(y(Ig(ii, a)) ? yi(a) : document.createTextNode(a)))
};
Ai.string = function(a) {
  return Ai(y(Ig(ii, a)) ? yi(a) : document.createTextNode(a))
};
y("undefined" != typeof NodeList) && (u = NodeList.prototype, u.ya = l, u.w = function(a) {
  return Si(a)
}, u.Ma = l, u.v = function(a, b) {
  return a.item(b)
}, u.N = function(a, b, c) {
  return a.length <= b ? c : ic.a(a, b)
}, u.hb = l, u.z = function(a) {
  return a.length
});
y("undefined" != typeof StaticNodeList) && (u = StaticNodeList.prototype, u.ya = l, u.w = function(a) {
  return Si(a)
}, u.Ma = l, u.v = function(a, b) {
  return a.item(b)
}, u.N = function(a, b, c) {
  return a.length <= b ? c : ic.a(a, b)
}, u.hb = l, u.z = function(a) {
  return a.length
});
y("undefined" != typeof HTMLCollection) && (u = HTMLCollection.prototype, u.ya = l, u.w = function(a) {
  return Si(a)
}, u.Ma = l, u.v = function(a, b) {
  return a.item(b)
}, u.N = function(a, b, c) {
  return a.length <= b ? c : ic.a(a, b)
}, u.hb = l, u.z = function(a) {
  return a.length
});
var Ui = [], Vi = 0, Wi;
for(Wi in Eh) {
  Ui[Vi++] = Eh[Wi]
}
var Xi = le.a(od, Ui);
yc.a(ng, Xi);
function Yi(a, b, c, d, f) {
  if(!$ && (!mh || !xh("525"))) {
    return l
  }
  if(oh && f) {
    return Zi(a)
  }
  if(f && !d || !c && (17 == b || 18 == b) || $ && d && b == a) {
    return n
  }
  switch(a) {
    case 13:
      return!($ && zh());
    case 27:
      return!mh
  }
  return Zi(a)
}
function Zi(a) {
  if(48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || mh && 0 == a) {
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
function $i(a) {
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
;var aj;
aj = s(l);
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
function bj(a, b) {
  var c = b || [];
  a && c.push(a);
  return c
}
var cj = mh && "BackCompat" == document.compatMode, dj = document.firstChild.children ? "children" : "childNodes", ej = n;
function fj(a) {
  function b() {
    0 <= p && (A.id = c(p, z).replace(/\\/g, ""), p = -1);
    if(0 <= r) {
      var a = r == z ? m : c(r, z);
      0 > ">~+".indexOf(a) ? A.Q = a : A.$a = a;
      r = -1
    }
    0 <= k && (A.ca.push(c(k + 1, z).replace(/\\/g, "")), k = -1)
  }
  function c(b, c) {
    return ja(a.slice(b, c))
  }
  for(var a = 0 <= ">~+".indexOf(a.slice(-1)) ? a + " * " : a + " ", d = [], f = -1, g = -1, i = -1, j = -1, k = -1, p = -1, r = -1, t = "", x = "", C, z = 0, R = a.length, A = m, L = m;t = x, x = a.charAt(z), z < R;z++) {
    if("\\" != t) {
      if(A || (C = z, A = {Ia:m, qa:[], Sa:[], ca:[], Q:m, $a:m, id:m, Db:function() {
        return ej ? this.rc : this.Q
      }}, r = z), 0 <= f) {
        if("]" == x) {
          L.cb ? L.Hb = c(i || f + 1, z) : L.cb = c(f + 1, z);
          if((f = L.Hb) && ('"' == f.charAt(0) || "'" == f.charAt(0))) {
            L.Hb = f.slice(1, -1)
          }
          A.Sa.push(L);
          L = m;
          f = i = -1
        }else {
          "=" == x && (i = 0 <= "|~^$*".indexOf(t) ? t : "", L.type = i + x, L.cb = c(f + 1, z - i.length), i = z + 1)
        }
      }else {
        0 <= g ? ")" == x && (0 <= j && (L.value = c(g + 1, z)), j = g = -1) : "#" == x ? (b(), p = z + 1) : "." == x ? (b(), k = z) : ":" == x ? (b(), j = z) : "[" == x ? (b(), f = z, L = {}) : "(" == x ? (0 <= j && (L = {name:c(j + 1, z), value:m}, A.qa.push(L)), g = z) : " " == x && t != x && (b(), 0 <= j && A.qa.push({name:c(j + 1, z)}), A.Xb = A.qa.length || A.Sa.length || A.ca.length, A.Jd = A.Ia = c(C, z), A.rc = A.Q = A.$a ? m : A.Q || "*", A.Q && (A.Q = A.Q.toUpperCase()), d.length && d[d.length - 
        1].$a && (A.Vb = d.pop(), A.Ia = A.Vb.Ia + " " + A.Ia), d.push(A), A = m)
      }
    }
  }
  return d
}
function gj(a, b) {
  return!a ? b : !b ? a : function() {
    return a.apply(window, arguments) && b.apply(window, arguments)
  }
}
function hj(a) {
  return 1 == a.nodeType
}
function ij(a, b) {
  return!a ? "" : "class" == b ? a.className || "" : "for" == b ? a.htmlFor || "" : "style" == b ? a.style.cssText || "" : (ej ? a.getAttribute(b) : a.getAttribute(b, 2)) || ""
}
var jj = {"*=":function(a, b) {
  return function(c) {
    return 0 <= ij(c, a).indexOf(b)
  }
}, "^=":function(a, b) {
  return function(c) {
    return 0 == ij(c, a).indexOf(b)
  }
}, "$=":function(a, b) {
  return function(c) {
    c = " " + ij(c, a);
    return c.lastIndexOf(b) == c.length - b.length
  }
}, "~=":function(a, b) {
  var c = " " + b + " ";
  return function(b) {
    return 0 <= (" " + ij(b, a) + " ").indexOf(c)
  }
}, "|=":function(a, b) {
  b = " " + b;
  return function(c) {
    c = " " + ij(c, a);
    return c == b || 0 == c.indexOf(b + "-")
  }
}, "=":function(a, b) {
  return function(c) {
    return ij(c, a) == b
  }
}}, kj = "undefined" == typeof document.firstChild.nextElementSibling, lj = !kj ? "nextElementSibling" : "nextSibling", mj = !kj ? "previousElementSibling" : "previousSibling", nj = kj ? hj : aj;
function oj(a) {
  for(;a = a[mj];) {
    if(nj(a)) {
      return n
    }
  }
  return l
}
function pj(a) {
  for(;a = a[lj];) {
    if(nj(a)) {
      return n
    }
  }
  return l
}
function qj(a) {
  var b = a.parentNode, c = 0, d = b[dj], f = a._i || -1, g = b._l || -1;
  if(!d) {
    return-1
  }
  d = d.length;
  if(g == d && 0 <= f && 0 <= g) {
    return f
  }
  b._l = d;
  f = -1;
  for(b = b.firstElementChild || b.firstChild;b;b = b[lj]) {
    nj(b) && (b._i = ++c, a === b && (f = c))
  }
  return f
}
function rj(a) {
  return!(qj(a) % 2)
}
function sj(a) {
  return qj(a) % 2
}
var uj = {checked:function() {
  return function(a) {
    return a.checked || a.attributes.checked
  }
}, "first-child":function() {
  return oj
}, "last-child":function() {
  return pj
}, "only-child":function() {
  return function(a) {
    return!oj(a) || !pj(a) ? n : l
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
  var c = fj(b)[0], d = {Ca:1};
  "*" != c.Q && (d.Q = 1);
  c.ca.length || (d.ca = 1);
  var f = tj(c, d);
  return function(a) {
    return!f(a)
  }
}, "nth-child":function(a, b) {
  if("odd" == b) {
    return sj
  }
  if("even" == b) {
    return rj
  }
  if(-1 != b.indexOf("n")) {
    var c = b.split("n", 2), d = c[0] ? "-" == c[0] ? -1 : parseInt(c[0], 10) : 1, f = c[1] ? parseInt(c[1], 10) : 0, g = 0, i = -1;
    0 < d ? 0 > f ? f = f % d && d + f % d : 0 < f && (f >= d && (g = f - f % d), f %= d) : 0 > d && (d *= -1, 0 < f && (i = f, f %= d));
    if(0 < d) {
      return function(a) {
        a = qj(a);
        return a >= g && (0 > i || a <= i) && a % d == f
      }
    }
    b = f
  }
  var j = parseInt(b, 10);
  return function(a) {
    return qj(a) == j
  }
}}, vj = $ ? function(a) {
  var b = a.toLowerCase();
  "class" == b && (a = "className");
  return function(c) {
    return ej ? c.getAttribute(a) : c[a] || c[b]
  }
} : function(a) {
  return function(b) {
    return b && b.getAttribute && b.hasAttribute(a)
  }
};
function tj(a, b) {
  if(!a) {
    return aj
  }
  var b = b || {}, c = m;
  b.Ca || (c = gj(c, hj));
  b.Q || "*" != a.Q && (c = gj(c, function(b) {
    return b && b.tagName == a.Db()
  }));
  b.ca || na(a.ca, function(a, b) {
    var g = RegExp("(?:^|\\s)" + a + "(?:\\s|$)");
    c = gj(c, function(a) {
      return g.test(a.className)
    });
    c.count = b
  });
  b.qa || na(a.qa, function(a) {
    var b = a.name;
    uj[b] && (c = gj(c, uj[b](b, a.value)))
  });
  b.Sa || na(a.Sa, function(a) {
    var b, g = a.cb;
    a.type && jj[a.type] ? b = jj[a.type](g, a.Hb) : g.length && (b = vj(g));
    b && (c = gj(c, b))
  });
  b.id || a.id && (c = gj(c, function(b) {
    return!!b && b.id == a.id
  }));
  c || "default" in b || (c = aj);
  return c
}
var wj = {};
function xj(a) {
  var b = wj[a.Ia];
  if(b) {
    return b
  }
  var c = a.Vb, c = c ? c.$a : "", d = tj(a, {Ca:1}), f = "*" == a.Q, g = document.getElementsByClassName;
  if(c) {
    if(g = {Ca:1}, f && (g.Q = 1), d = tj(a, g), "+" == c) {
      var i = d, b = function(a, b, c) {
        for(;a = a[lj];) {
          if(!kj || hj(a)) {
            (!c || yj(a, c)) && i(a) && b.push(a);
            break
          }
        }
        return b
      }
    }else {
      if("~" == c) {
        var j = d, b = function(a, b, c) {
          for(a = a[lj];a;) {
            if(nj(a)) {
              if(c && !yj(a, c)) {
                break
              }
              j(a) && b.push(a)
            }
            a = a[lj]
          }
          return b
        }
      }else {
        if(">" == c) {
          var k = d, k = k || aj, b = function(a, b, c) {
            for(var d = 0, f = a[dj];a = f[d++];) {
              nj(a) && ((!c || yj(a, c)) && k(a, d)) && b.push(a)
            }
            return b
          }
        }
      }
    }
  }else {
    if(a.id) {
      d = !a.Xb && f ? aj : tj(a, {Ca:1, id:1}), b = function(b, c) {
        var f = (b ? new ci(9 == b.nodeType ? b : b.ownerDocument || b.document) : Uh || (Uh = new ci)).Ub(a.id), g;
        if(g = f && d(f)) {
          if(!(g = 9 == b.nodeType)) {
            for(g = f.parentNode;g && g != b;) {
              g = g.parentNode
            }
            g = !!g
          }
        }
        if(g) {
          return bj(f, c)
        }
      }
    }else {
      if(g && /\{\s*\[native code\]\s*\}/.test(String(g)) && a.ca.length && !cj) {
        var d = tj(a, {Ca:1, ca:1, id:1}), p = a.ca.join(" "), b = function(a, b) {
          for(var c = bj(0, b), f, g = 0, i = a.getElementsByClassName(p);f = i[g++];) {
            d(f, a) && c.push(f)
          }
          return c
        }
      }else {
        !f && !a.Xb ? b = function(b, c) {
          for(var d = bj(0, c), f, g = 0, i = b.getElementsByTagName(a.Db());f = i[g++];) {
            d.push(f)
          }
          return d
        } : (d = tj(a, {Ca:1, Q:1, id:1}), b = function(b, c) {
          for(var f = bj(0, c), g, i = 0, j = b.getElementsByTagName(a.Db());g = j[i++];) {
            d(g, b) && f.push(g)
          }
          return f
        })
      }
    }
  }
  return wj[a.Ia] = b
}
var zj = {}, Aj = {};
function Bj(a) {
  var b = fj(ja(a));
  if(1 == b.length) {
    var c = xj(b[0]);
    return function(a) {
      if(a = c(a, [])) {
        a.Za = l
      }
      return a
    }
  }
  return function(a) {
    for(var a = bj(a), c, g, i = b.length, j, k, p = 0;p < i;p++) {
      k = [];
      c = b[p];
      g = a.length - 1;
      0 < g && (j = {}, k.Za = l);
      g = xj(c);
      for(var r = 0;c = a[r];r++) {
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
var Cj = !!document.querySelectorAll && (!mh || xh("526"));
function Dj(a, b) {
  if(Cj) {
    var c = Aj[a];
    if(c && !b) {
      return c
    }
  }
  if(c = zj[a]) {
    return c
  }
  var c = a.charAt(0), d = -1 == a.indexOf(" ");
  0 <= a.indexOf("#") && d && (b = l);
  if(Cj && !b && -1 == ">~+".indexOf(c) && (!$ || -1 == a.indexOf(":")) && !(cj && 0 <= a.indexOf(".")) && -1 == a.indexOf(":contains") && -1 == a.indexOf("|=")) {
    var f = 0 <= ">~+".indexOf(a.charAt(a.length - 1)) ? a + " *" : a;
    return Aj[a] = function(b) {
      try {
        9 == b.nodeType || d || e("");
        var c = b.querySelectorAll(f);
        $ ? c.lc = l : c.Za = l;
        return c
      }catch(g) {
        return Dj(a, l)(b)
      }
    }
  }
  var g = a.split(/\s*,\s*/);
  return zj[a] = 2 > g.length ? Bj(a) : function(a) {
    for(var b = 0, c = [], d;d = g[b++];) {
      c = c.concat(Bj(d)(a))
    }
    return c
  }
}
var Ej = 0, Fj = $ ? function(a) {
  return ej ? a.getAttribute("_uid") || a.setAttribute("_uid", ++Ej) || Ej : a.uniqueID
} : function(a) {
  return a._uid || (a._uid = ++Ej)
};
function yj(a, b) {
  if(!b) {
    return 1
  }
  var c = Fj(a);
  return!b[c] ? b[c] = 1 : 0
}
function Gj(a) {
  if(a && a.Za) {
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
  Ej++;
  if($ && ej) {
    var c = Ej + "";
    a[0].setAttribute("_zipIdx", c);
    for(var d = 1, f;f = a[d];d++) {
      a[d].getAttribute("_zipIdx") != c && b.push(f), f.setAttribute("_zipIdx", c)
    }
  }else {
    if($ && a.lc) {
      try {
        for(d = 1;f = a[d];d++) {
          hj(f) && b.push(f)
        }
      }catch(g) {
      }
    }else {
      a[0] && (a[0]._zipIdx = Ej);
      for(d = 1;f = a[d];d++) {
        a[d]._zipIdx != Ej && b.push(f), f._zipIdx = Ej
      }
    }
  }
  return b
}
function Hj(a, b) {
  if(!a) {
    return[]
  }
  if(a.constructor == Array) {
    return a
  }
  if(!w(a)) {
    return[a]
  }
  if(w(b) && (b = w(b) ? document.getElementById(b) : b, !b)) {
    return[]
  }
  var b = b || document, c = b.ownerDocument || b.documentElement;
  ej = b.contentType && "application/xml" == b.contentType || kh && (b.doctype || "[object XMLDocument]" == c.toString()) || !!c && ($ ? c.xml : b.xmlVersion || c.xmlVersion);
  return(c = Dj(a)(b)) && c.Za ? c : Gj(c)
}
Hj.qa = uj;
ha("goog.dom.query", Hj);
ha("goog.dom.query.pseudos", Hj.qa);
var Ij, Jj, Kj = m;
function Lj(a) {
  return Kj.a(Xh("html", h, h)[0], a)
}
function Mj(a, b) {
  h === Ij && (Ij = {}, Ij = function(a, b, f, g) {
    this.Cb = a;
    this.eb = b;
    this.uc = f;
    this.qc = g;
    this.r = 0;
    this.j = 393216
  }, Ij.Va = l, Ij.xb = "domina.css/t5169", Ij.wb = function(a, b) {
    return I(b, "domina.css/t5169")
  }, Ij.prototype.zb = function() {
    var a = this;
    return ye.a(function(b) {
      return Di(Hj(a.Cb, b))
    }, zi(a.eb))
  }, Ij.prototype.Ab = function() {
    var a = this;
    return N(Ee(ke(), ye.a(function(b) {
      return Di(Hj(a.Cb, b))
    }, zi(a.eb))))
  }, Ij.prototype.F = q("qc"), Ij.prototype.G = function(a, b) {
    return new Ij(this.Cb, this.eb, this.uc, b)
  });
  return new Ij(b, a, Kj, m)
}
Kj = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Lj.call(this, a);
    case 2:
      return Mj.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Kj.b = Lj;
Kj.a = Mj;
Jj = Kj;
function Nj() {
  this.Tb = n
}
ia(Nj, Ch);
u = Nj.prototype;
u.Sb = l;
u.Zb = m;
u.addEventListener = function(a, b, c, d) {
  Nh(this, a, b, c, d)
};
u.removeEventListener = function(a, b, c, d) {
  Ph(this, a, b, c, d)
};
u.dispatchEvent = function(a) {
  var b = a.type || a, c = Kh;
  if(b in c) {
    if(w(a)) {
      a = new Dh(a, this)
    }else {
      if(a instanceof Dh) {
        a.target = a.target || this
      }else {
        var d = a, a = new Dh(b, this);
        pa(a, d)
      }
    }
    var d = 1, f, c = c[b], b = l in c, g;
    if(b) {
      f = [];
      for(g = this;g;g = g.Zb) {
        f.push(g)
      }
      g = c[l];
      g.U = g.W;
      for(var i = f.length - 1;!a.Ha && 0 <= i && g.U;i--) {
        a.currentTarget = f[i], d &= Sh(g, f[i], a.type, l, a) && a.ab != n
      }
    }
    if(n in c) {
      if(g = c[n], g.U = g.W, b) {
        for(i = 0;!a.Ha && i < f.length && g.U;i++) {
          a.currentTarget = f[i], d &= Sh(g, f[i], a.type, n, a) && a.ab != n
        }
      }else {
        for(f = this;!a.Ha && f && g.U;f = f.Zb) {
          a.currentTarget = f, d &= Sh(g, f, a.type, n, a) && a.ab != n
        }
      }
    }
    a = Boolean(d)
  }else {
    a = l
  }
  return a
};
function Oj(a, b) {
  this.Tb = n;
  a && (this.Xa && this.detach(), this.Da = a, this.Wa = Nh(this.Da, "keypress", this, b), this.Gb = Nh(this.Da, "keydown", this.mc, b, this), this.Xa = Nh(this.Da, "keyup", this.nc, b, this))
}
ia(Oj, Nj);
u = Oj.prototype;
u.Da = m;
u.Wa = m;
u.Gb = m;
u.Xa = m;
u.na = -1;
u.ma = -1;
var Pj = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, Qj = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, Rj = $ || 
mh && xh("525");
u = Oj.prototype;
u.mc = function(a) {
  if(mh && (17 == this.na && !a.ctrlKey || 18 == this.na && !a.altKey)) {
    this.ma = this.na = -1
  }
  Rj && !Yi(a.keyCode, this.na, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.ma = lh ? $i(a.keyCode) : a.keyCode
};
u.nc = function() {
  this.ma = this.na = -1
};
u.handleEvent = function(a) {
  var b = a.Bb, c, d;
  $ && "keypress" == a.type ? (c = this.ma, d = 13 != c && 27 != c ? b.keyCode : 0) : mh && "keypress" == a.type ? (c = this.ma, d = 0 <= b.charCode && 63232 > b.charCode && Zi(c) ? b.charCode : 0) : kh ? (c = this.ma, d = Zi(c) ? b.keyCode : 0) : (c = b.keyCode || this.ma, d = b.charCode || 0, oh && (63 == d && 224 == c) && (c = 191));
  var f = c, g = b.keyIdentifier;
  c ? 63232 <= c && c in Pj ? f = Pj[c] : 25 == c && a.shiftKey && (f = 9) : g && g in Qj && (f = Qj[g]);
  a = f == this.na;
  this.na = f;
  b = new Sj(f, d, a, b);
  this.dispatchEvent(b)
};
u.Ub = q("Da");
u.detach = function() {
  this.Wa && (Qh(this.Wa), Qh(this.Gb), Qh(this.Xa), this.Xa = this.Gb = this.Wa = m);
  this.Da = m;
  this.ma = this.na = -1
};
function Sj(a, b, c, d) {
  d && this.Oa(d, h);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
ia(Sj, Gh);
function Tj(a) {
  Nh(new Oj(a), "key", function(b) {
    (function() {
      var a = Q.a(b.keyCode, 48);
      return a || (a = Q.a(b.keyCode, 49)) || (a = Q.a(b.keyCode, 50)) || (a = Q.a(b.keyCode, 51)) || (a = Q.a(b.keyCode, 52)) || (a = Q.a(b.keyCode, 53)) || (a = Q.a(b.keyCode, 54)) || (a = Q.a(b.keyCode, 55)) || (a = Q.a(b.keyCode, 56)) || (a = Q.a(b.keyCode, 57)) || (a = Q.a(b.keyCode, 37)) || (a = Q.a(b.keyCode, 39)) || (a = Q.a(b.keyCode, 38)) || (a = Q.a(b.keyCode, 40)) || (a = Q.a(b.keyCode, 9)) || (a = Q.a(b.keyCode, 8)) || (a = Q.a(b.keyCode, 46)) || (a = Q.a(b.keyCode, 36)) ? a : (a = Q.a(b.keyCode, 
      35)) ? a : Q.a(b.keyCode, 190)
    })() || b.preventDefault();
    var c;
    c = Ig(/\./, Ji(a));
    c = y(c) ? Q.a(b.keyCode, 190) : c;
    return y(c) ? b.preventDefault() : m
  })
}
function Uj(a) {
  if(Q.a((new V("\ufdd0:type")).call(m, Hi(Bi((new V("\ufdd0:id")).call(m, a)))), "radio") || 0 < U(Ji(Bi((new V("\ufdd0:id")).call(m, a))))) {
    return l
  }
  Fi(Bi([J("td"), J((new V("\ufdd0:id")).call(m, a))].join("")), [J('<div class="help">Value for field '), J(Ii(Bi([J("l"), J((new V("\ufdd0:id")).call(m, a))].join("")))), J(" is required</div>")].join(""));
  return n
}
function Vj(a) {
  var b;
  b = Ji(Bi((new V("\ufdd0:id")).call(m, a)));
  b = "number" === typeof(y(Ig(/^-?\d+\.?\d[E]?-?\d*$|^-?\d+\.?\d*$/, b)) ? parseFloat(b) : b);
  if(y(b)) {
    return l
  }
  Fi(Bi([J("td"), J((new V("\ufdd0:id")).call(m, a))].join("")), [J('<div class="help">Not a number '), J((new V("\ufdd0:type")).call(m, a)), J("</div>")].join(""));
  return n
}
function Wj(a) {
  return Q.a(a, yb) ? (Fi(Bi([J("tdg"), J("origin")].join("")), [J('<div class="help">Select one option for '), J("origin"), J("</div>")].join("")), n) : l
}
function Xj() {
  var a = le.a(Hi, zi(Jj.b("input[id*='value'],input[id^='g'],textarea"))), b = zi(Jj.b("input[name='gorigin']:checked")), c = Qg.b(Ve), d = Ei("help");
  Ag.b(le.a(Zh, zi(d)));
  for(var a = M(a), d = m, f = 0, g = 0;;) {
    if(g < f) {
      var i = d.v(d, g);
      Wg.e(c, $b, Uj(i));
      Q.a((new V("\ufdd0:type")).call(m, i), "number") && Wg.e(c, $b, Vj(i));
      g += 1
    }else {
      if(a = M(a)) {
        d = a, Hc(d) ? (a = qb(d), g = rb(d), d = a, f = U(a), a = g) : (a = N(d), Wg.e(c, $b, Uj(a)), Q.a((new V("\ufdd0:type")).call(m, a), "number") && Wg.e(c, $b, Vj(a)), a = P(d), d = m, f = 0), g = 0
      }else {
        break
      }
    }
  }
  Wg.e(c, $b, Wj(b));
  return ie(Mc, Ua(c))
}
ha("personal_organiser.grocery.jsgrocery.init", function() {
  var a = document;
  if(y(y(a) ? document.getElementById : a)) {
    var a = Bi("grocery-form"), b = le.a(Hi, zi(Jj.b("input[id*='value']")));
    a.onsubmit = Xj;
    Tj(Bi("gcalories"));
    Tj(Bi("gfats"));
    Tj(Bi("gproteins"));
    Tj(Bi("gcarbohydrates"));
    Tj(Bi("gwater"));
    for(var a = M(b), b = m, c = 0, d = 0;;) {
      if(d < c) {
        var f = b.v(b, d);
        Tj(Bi((new V("\ufdd0:id")).call(m, f)));
        d += 1
      }else {
        if(a = M(a)) {
          b = a, Hc(b) ? (a = qb(b), c = rb(b), b = a, f = U(a), a = c, c = f) : (f = N(b), Tj(Bi((new V("\ufdd0:id")).call(m, f))), a = P(b), b = m, c = 0), d = 0
        }else {
          return m
        }
      }
    }
  }else {
    return m
  }
});
