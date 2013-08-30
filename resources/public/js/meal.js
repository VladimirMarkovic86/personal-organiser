function e(a) {
  throw a;
}
var h = void 0, l = !0, m = null, p = !1;
function aa() {
  return function(a) {
    return a
  }
}
function r(a) {
  return function() {
    return this[a]
  }
}
function ba(a) {
  return function() {
    return a
  }
}
var s, ca = this;
function t(a) {
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
function v(a) {
  return"string" == typeof a
}
function da(a) {
  return"function" == t(a)
}
function ea(a) {
  var b = typeof a;
  return"object" == b && a != m || "function" == b
}
function fa(a) {
  return a[ga] || (a[ga] = ++ha)
}
var ga = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), ha = 0;
function ia(a, b) {
  var c = a.split("."), d = ca;
  !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
  for(var f;c.length && (f = c.shift());) {
    !c.length && b !== h ? d[f] = b : d = d[f] ? d[f] : d[f] = {}
  }
}
function ja(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.zc = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
}
;function ka(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}
function la(a) {
  for(var b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296
  }
  return b
}
;var ma = Array.prototype, na = ma.indexOf ? function(a, b, c) {
  return ma.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == m ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if(v(a)) {
    return!v(b) || 1 != b.length ? -1 : a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, oa = ma.forEach ? function(a, b, c) {
  ma.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = v(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in f && b.call(c, f[g], g, a)
  }
};
var pa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function qa(a, b) {
  for(var c, d, f = 1;f < arguments.length;f++) {
    d = arguments[f];
    for(c in d) {
      a[c] = d[c]
    }
    for(var g = 0;g < pa.length;g++) {
      c = pa[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
;function ra(a, b) {
  var c = Array.prototype.slice.call(arguments), d = c.shift();
  "undefined" == typeof d && e(Error("[goog.string.format] Template required"));
  return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, j, k, n, q, u) {
    if("%" == n) {
      return"%"
    }
    var x = c.shift();
    "undefined" == typeof x && e(Error("[goog.string.format] Not enough arguments"));
    arguments[0] = x;
    return ra.ga[n].apply(m, arguments)
  })
}
ra.ga = {};
ra.ga.s = function(a, b, c) {
  return isNaN(c) || "" == c || a.length >= c ? a : a = -1 < b.indexOf("-", 0) ? a + Array(c - a.length + 1).join(" ") : Array(c - a.length + 1).join(" ") + a
};
ra.ga.f = function(a, b, c, d, f) {
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
ra.ga.d = function(a, b, c, d, f, g, i, j) {
  return ra.ga.f(parseInt(a, 10), b, c, d, 0, g, i, j)
};
ra.ga.i = ra.ga.d;
ra.ga.u = ra.ga.d;
function sa(a, b) {
  a != m && this.append.apply(this, arguments)
}
sa.prototype.Ma = "";
sa.prototype.append = function(a, b, c) {
  this.Ma += a;
  if(b != m) {
    for(var d = 1;d < arguments.length;d++) {
      this.Ma += arguments[d]
    }
  }
  return this
};
sa.prototype.toString = r("Ma");
var ta;
ia("cljs.core.set_print_fn_BANG_", aa());
function ua() {
  return va(["\ufdd0:flush-on-newline", l, "\ufdd0:readably", l, "\ufdd0:meta", p, "\ufdd0:dup", p], l)
}
function w(a) {
  return a != m && a !== p
}
function wa(a) {
  return a == m
}
function xa(a) {
  return w(a) ? p : l
}
function ya(a) {
  var b = v(a);
  return b ? "\ufdd0" !== a.charAt(0) : b
}
function y(a, b) {
  return a[t(b == m ? m : b)] ? l : a._ ? l : p
}
function z(a, b) {
  var c = b == m ? m : b.constructor, c = w(w(c) ? c.Ca : c) ? c.Qa : t(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""))
}
var za = {}, Aa = {};
function Ba(a) {
  if(a ? a.z : a) {
    return a.z(a)
  }
  var b;
  var c = Ba[t(a == m ? m : a)];
  c ? b = c : (c = Ba._) ? b = c : e(z("ICounted.-count", a));
  return b.call(m, a)
}
function Ca(a, b) {
  if(a ? a.I : a) {
    return a.I(a, b)
  }
  var c;
  var d = Ca[t(a == m ? m : a)];
  d ? c = d : (d = Ca._) ? c = d : e(z("ICollection.-conj", a));
  return c.call(m, a, b)
}
var Da = {}, D, Fa = m;
function Ga(a, b) {
  if(a ? a.t : a) {
    return a.t(a, b)
  }
  var c;
  var d = D[t(a == m ? m : a)];
  d ? c = d : (d = D._) ? c = d : e(z("IIndexed.-nth", a));
  return c.call(m, a, b)
}
function Ha(a, b, c) {
  if(a ? a.N : a) {
    return a.N(a, b, c)
  }
  var d;
  var f = D[t(a == m ? m : a)];
  f ? d = f : (f = D._) ? d = f : e(z("IIndexed.-nth", a));
  return d.call(m, a, b, c)
}
Fa = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ga.call(this, a, b);
    case 3:
      return Ha.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Fa.a = Ga;
Fa.e = Ha;
D = Fa;
var Ia = {};
function E(a) {
  if(a ? a.O : a) {
    return a.O(a)
  }
  var b;
  var c = E[t(a == m ? m : a)];
  c ? b = c : (c = E._) ? b = c : e(z("ISeq.-first", a));
  return b.call(m, a)
}
function F(a) {
  if(a ? a.R : a) {
    return a.R(a)
  }
  var b;
  var c = F[t(a == m ? m : a)];
  c ? b = c : (c = F._) ? b = c : e(z("ISeq.-rest", a));
  return b.call(m, a)
}
var Ja = {}, Ka, La = m;
function Ma(a, b) {
  if(a ? a.B : a) {
    return a.B(a, b)
  }
  var c;
  var d = Ka[t(a == m ? m : a)];
  d ? c = d : (d = Ka._) ? c = d : e(z("ILookup.-lookup", a));
  return c.call(m, a, b)
}
function Na(a, b, c) {
  if(a ? a.v : a) {
    return a.v(a, b, c)
  }
  var d;
  var f = Ka[t(a == m ? m : a)];
  f ? d = f : (f = Ka._) ? d = f : e(z("ILookup.-lookup", a));
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
La.e = Na;
Ka = La;
function Oa(a, b) {
  if(a ? a.Xa : a) {
    return a.Xa(a, b)
  }
  var c;
  var d = Oa[t(a == m ? m : a)];
  d ? c = d : (d = Oa._) ? c = d : e(z("IAssociative.-contains-key?", a));
  return c.call(m, a, b)
}
function Pa(a, b, c) {
  if(a ? a.ja : a) {
    return a.ja(a, b, c)
  }
  var d;
  var f = Pa[t(a == m ? m : a)];
  f ? d = f : (f = Pa._) ? d = f : e(z("IAssociative.-assoc", a));
  return d.call(m, a, b, c)
}
var Qa = {}, Ra = {};
function Sa(a) {
  if(a ? a.Rb : a) {
    return a.Rb(a)
  }
  var b;
  var c = Sa[t(a == m ? m : a)];
  c ? b = c : (c = Sa._) ? b = c : e(z("IMapEntry.-key", a));
  return b.call(m, a)
}
function Ta(a) {
  if(a ? a.Sb : a) {
    return a.Sb(a)
  }
  var b;
  var c = Ta[t(a == m ? m : a)];
  c ? b = c : (c = Ta._) ? b = c : e(z("IMapEntry.-val", a));
  return b.call(m, a)
}
var Ua = {}, Va = {};
function Wa(a) {
  if(a ? a.jc : a) {
    return a.state
  }
  var b;
  var c = Wa[t(a == m ? m : a)];
  c ? b = c : (c = Wa._) ? b = c : e(z("IDeref.-deref", a));
  return b.call(m, a)
}
var Xa = {};
function Ya(a) {
  if(a ? a.C : a) {
    return a.C(a)
  }
  var b;
  var c = Ya[t(a == m ? m : a)];
  c ? b = c : (c = Ya._) ? b = c : e(z("IMeta.-meta", a));
  return b.call(m, a)
}
var Za = {};
function $a(a, b) {
  if(a ? a.D : a) {
    return a.D(a, b)
  }
  var c;
  var d = $a[t(a == m ? m : a)];
  d ? c = d : (d = $a._) ? c = d : e(z("IWithMeta.-with-meta", a));
  return c.call(m, a, b)
}
var ab = {}, bb, cb = m;
function db(a, b) {
  if(a ? a.xa : a) {
    return a.xa(a, b)
  }
  var c;
  var d = bb[t(a == m ? m : a)];
  d ? c = d : (d = bb._) ? c = d : e(z("IReduce.-reduce", a));
  return c.call(m, a, b)
}
function fb(a, b, c) {
  if(a ? a.ya : a) {
    return a.ya(a, b, c)
  }
  var d;
  var f = bb[t(a == m ? m : a)];
  f ? d = f : (f = bb._) ? d = f : e(z("IReduce.-reduce", a));
  return d.call(m, a, b, c)
}
cb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return db.call(this, a, b);
    case 3:
      return fb.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
cb.a = db;
cb.e = fb;
bb = cb;
function gb(a, b) {
  if(a ? a.G : a) {
    return a.G(a, b)
  }
  var c;
  var d = gb[t(a == m ? m : a)];
  d ? c = d : (d = gb._) ? c = d : e(z("IEquiv.-equiv", a));
  return c.call(m, a, b)
}
function hb(a) {
  if(a ? a.J : a) {
    return a.J(a)
  }
  var b;
  var c = hb[t(a == m ? m : a)];
  c ? b = c : (c = hb._) ? b = c : e(z("IHash.-hash", a));
  return b.call(m, a)
}
var ib = {};
function jb(a) {
  if(a ? a.w : a) {
    return a.w(a)
  }
  var b;
  var c = jb[t(a == m ? m : a)];
  c ? b = c : (c = jb._) ? b = c : e(z("ISeqable.-seq", a));
  return b.call(m, a)
}
var kb = {};
function G(a, b) {
  if(a ? a.Vb : a) {
    return a.Vb(0, b)
  }
  var c;
  var d = G[t(a == m ? m : a)];
  d ? c = d : (d = G._) ? c = d : e(z("IWriter.-write", a));
  return c.call(m, a, b)
}
function lb(a) {
  if(a ? a.oc : a) {
    return m
  }
  var b;
  var c = lb[t(a == m ? m : a)];
  c ? b = c : (c = lb._) ? b = c : e(z("IWriter.-flush", a));
  return b.call(m, a)
}
function mb(a, b, c) {
  if(a ? a.Ub : a) {
    return a.Ub(a, b, c)
  }
  var d;
  var f = mb[t(a == m ? m : a)];
  f ? d = f : (f = mb._) ? d = f : e(z("IWatchable.-notify-watches", a));
  return d.call(m, a, b, c)
}
function nb(a) {
  if(a ? a.va : a) {
    return a.va(a)
  }
  var b;
  var c = nb[t(a == m ? m : a)];
  c ? b = c : (c = nb._) ? b = c : e(z("IEditableCollection.-as-transient", a));
  return b.call(m, a)
}
function ob(a, b) {
  if(a ? a.pa : a) {
    return a.pa(a, b)
  }
  var c;
  var d = ob[t(a == m ? m : a)];
  d ? c = d : (d = ob._) ? c = d : e(z("ITransientCollection.-conj!", a));
  return c.call(m, a, b)
}
function pb(a) {
  if(a ? a.Ba : a) {
    return a.Ba(a)
  }
  var b;
  var c = pb[t(a == m ? m : a)];
  c ? b = c : (c = pb._) ? b = c : e(z("ITransientCollection.-persistent!", a));
  return b.call(m, a)
}
function qb(a, b, c) {
  if(a ? a.Aa : a) {
    return a.Aa(a, b, c)
  }
  var d;
  var f = qb[t(a == m ? m : a)];
  f ? d = f : (f = qb._) ? d = f : e(z("ITransientAssociative.-assoc!", a));
  return d.call(m, a, b, c)
}
function rb(a) {
  if(a ? a.Pb : a) {
    return a.Pb()
  }
  var b;
  var c = rb[t(a == m ? m : a)];
  c ? b = c : (c = rb._) ? b = c : e(z("IChunk.-drop-first", a));
  return b.call(m, a)
}
function H(a) {
  if(a ? a.kb : a) {
    return a.kb(a)
  }
  var b;
  var c = H[t(a == m ? m : a)];
  c ? b = c : (c = H._) ? b = c : e(z("IChunkedSeq.-chunked-first", a));
  return b.call(m, a)
}
function I(a) {
  if(a ? a.Ya : a) {
    return a.Ya(a)
  }
  var b;
  var c = I[t(a == m ? m : a)];
  c ? b = c : (c = I._) ? b = c : e(z("IChunkedSeq.-chunked-rest", a));
  return b.call(m, a)
}
function sb(a) {
  this.xc = a;
  this.r = 0;
  this.h = 1073741824
}
sb.prototype.Vb = function(a, b) {
  return this.xc.append(b)
};
sb.prototype.oc = ba(m);
function tb(a) {
  var b = new sa, c = new sb(b);
  a.K(a, c, ua());
  lb(c);
  return"" + J(b)
}
function ub(a, b, c, d, f) {
  this.Ia = a;
  this.name = b;
  this.sa = c;
  this.Va = d;
  this.ec = f;
  this.r = 0;
  this.h = 2154168321
}
s = ub.prototype;
s.K = function(a, b) {
  return G(b, this.sa)
};
s.Tb = l;
s.J = function() {
  -1 === this.Va && (this.Va = vb.a ? vb.a(K.b ? K.b(this.Ia) : K.call(m, this.Ia), K.b ? K.b(this.name) : K.call(m, this.name)) : vb.call(m, K.b ? K.b(this.Ia) : K.call(m, this.Ia), K.b ? K.b(this.name) : K.call(m, this.name)));
  return this.Va
};
s.D = function(a, b) {
  return new ub(this.Ia, this.name, this.sa, this.Va, b)
};
s.C = r("ec");
var wb = m, wb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ka.e(b, this, m);
    case 3:
      return Ka.e(b, this, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ub.prototype.call = wb;
ub.prototype.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
ub.prototype.G = function(a, b) {
  return b instanceof ub ? this.sa === b.sa : p
};
ub.prototype.toString = r("sa");
function L(a) {
  if(a == m) {
    return m
  }
  var b;
  if(b = a) {
    b = (b = a.h & 8388608) ? b : a.za
  }
  if(b) {
    return a.w(a)
  }
  if(a instanceof Array || ya(a)) {
    return 0 === a.length ? m : new xb(a, 0)
  }
  if(y(Ja, a)) {
    return jb(a)
  }
  e(Error([J(a), J("is not ISeqable")].join("")))
}
function M(a) {
  if(a == m) {
    return m
  }
  var b;
  if(b = a) {
    b = (b = a.h & 64) ? b : a.zb
  }
  if(b) {
    return a.O(a)
  }
  a = L(a);
  return a == m ? m : E(a)
}
function N(a) {
  if(a != m) {
    var b;
    if(b = a) {
      b = (b = a.h & 64) ? b : a.zb
    }
    if(b) {
      return a.R(a)
    }
    a = L(a);
    return a != m ? F(a) : yb
  }
  return yb
}
function P(a) {
  if(a == m) {
    a = m
  }else {
    var b;
    if(b = a) {
      b = (b = a.h & 128) ? b : a.Hd
    }
    a = b ? a.fa(a) : L(N(a))
  }
  return a
}
var Q, zb = m;
function Ab(a, b) {
  var c = a === b;
  return c ? c : gb(a, b)
}
function Bb(a, b, c) {
  for(;;) {
    if(w(zb.a(a, b))) {
      if(P(c)) {
        a = b, b = M(c), c = P(c)
      }else {
        return zb.a(b, M(c))
      }
    }else {
      return p
    }
  }
}
function Cb(a, b, c) {
  var d = m;
  2 < arguments.length && (d = R(Array.prototype.slice.call(arguments, 2), 0));
  return Bb.call(this, a, b, d)
}
Cb.o = 2;
Cb.k = function(a) {
  var b = M(a), a = P(a), c = M(a), a = N(a);
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
      return Cb.g(a, b, R(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
zb.o = 2;
zb.k = Cb.k;
zb.b = ba(l);
zb.a = Ab;
zb.g = Cb.g;
Q = zb;
hb["null"] = ba(0);
Ua["null"] = l;
Aa["null"] = l;
Ba["null"] = ba(0);
gb["null"] = function(a, b) {
  return b == m
};
Za["null"] = l;
$a["null"] = ba(m);
Xa["null"] = l;
Ya["null"] = ba(m);
Qa["null"] = l;
Date.prototype.G = function(a, b) {
  var c = b instanceof Date;
  return c ? a.toString() === b.toString() : c
};
hb.number = function(a) {
  return Math.floor(a) % 2147483647
};
gb.number = function(a, b) {
  return a === b
};
hb["boolean"] = function(a) {
  return a === l ? 1 : 0
};
Xa["function"] = l;
Ya["function"] = ba(m);
za["function"] = l;
hb._ = function(a) {
  return fa(a)
};
var Db, Eb = m;
function Fb(a, b) {
  var c = Ba(a);
  if(0 === c) {
    return b.A ? b.A() : b.call(m)
  }
  for(var d = D.a(a, 0), f = 1;;) {
    if(f < c) {
      d = b.a ? b.a(d, D.a(a, f)) : b.call(m, d, D.a(a, f)), f += 1
    }else {
      return d
    }
  }
}
function Gb(a, b, c) {
  for(var d = Ba(a), f = 0;;) {
    if(f < d) {
      c = b.a ? b.a(c, D.a(a, f)) : b.call(m, c, D.a(a, f)), f += 1
    }else {
      return c
    }
  }
}
function Hb(a, b, c, d) {
  for(var f = Ba(a);;) {
    if(d < f) {
      c = b.a ? b.a(c, D.a(a, d)) : b.call(m, c, D.a(a, d)), d += 1
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
    var b = a.h & 2, a = (b ? b : a.lb) ? l : a.h ? p : y(Aa, a)
  }else {
    a = y(Aa, a)
  }
  return a
}
function Ob(a) {
  if(a) {
    var b = a.h & 16, a = (b ? b : a.Oa) ? l : a.h ? p : y(Da, a)
  }else {
    a = y(Da, a)
  }
  return a
}
function xb(a, b) {
  this.c = a;
  this.p = b;
  this.r = 0;
  this.h = 166199550
}
s = xb.prototype;
s.J = function(a) {
  return Pb.b ? Pb.b(a) : Pb.call(m, a)
};
s.fa = function() {
  return this.p + 1 < this.c.length ? new xb(this.c, this.p + 1) : m
};
s.I = function(a, b) {
  return S.a ? S.a(b, a) : S.call(m, b, a)
};
s.toString = function() {
  return tb(this)
};
s.xa = function(a, b) {
  return Ib.n(this.c, b, this.c[this.p], this.p + 1)
};
s.ya = function(a, b, c) {
  return Ib.n(this.c, b, c, this.p)
};
s.w = aa();
s.z = function() {
  return this.c.length - this.p
};
s.O = function() {
  return this.c[this.p]
};
s.R = function() {
  return this.p + 1 < this.c.length ? new xb(this.c, this.p + 1) : Qb.A ? Qb.A() : Qb.call(m)
};
s.G = function(a, b) {
  return Rb.a ? Rb.a(a, b) : Rb.call(m, a, b)
};
s.t = function(a, b) {
  var c = b + this.p;
  return c < this.c.length ? this.c[c] : m
};
s.N = function(a, b, c) {
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
var R, Wb = m;
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
R = Wb;
Aa.array = l;
Ba.array = function(a) {
  return a.length
};
function Zb(a) {
  return M(P(a))
}
gb._ = function(a, b) {
  return a === b
};
var $b, ac = m;
function bc(a, b) {
  return a != m ? Ca(a, b) : Qb.b ? Qb.b(b) : Qb.call(m, b)
}
function cc(a, b, c) {
  for(;;) {
    if(w(c)) {
      a = ac.a(a, b), b = M(c), c = P(c)
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
dc.o = 2;
dc.k = function(a) {
  var b = M(a), a = P(a), c = M(a), a = N(a);
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
ac.o = 2;
ac.k = dc.k;
ac.a = bc;
ac.g = dc.g;
$b = ac;
function T(a) {
  if(Nb(a)) {
    a = Ba(a)
  }else {
    a: {
      for(var a = L(a), b = 0;;) {
        if(Nb(a)) {
          a = b + Ba(a);
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
      if(L(a)) {
        return M(a)
      }
      e(Error("Index out of bounds"))
    }
    if(Ob(a)) {
      return D.a(a, b)
    }
    if(L(a)) {
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
      return L(a) ? M(a) : c
    }
    if(Ob(a)) {
      return D.e(a, b, c)
    }
    if(L(a)) {
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
      c = (c = a.h & 16) ? c : a.Oa
    }
    c = c ? a.t(a, Math.floor(b)) : a instanceof Array ? b < a.length ? a[b] : m : ya(a) ? b < a.length ? a[b] : m : ec.a(a, Math.floor(b))
  }
  return c
}
function lc(a, b, c) {
  if(a != m) {
    var d;
    if(d = a) {
      d = (d = a.h & 16) ? d : a.Oa
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
      c = (c = a.h & 256) ? c : a.kc
    }
    c = c ? a.B(a, b) : a instanceof Array ? b < a.length ? a[b] : m : ya(a) ? b < a.length ? a[b] : m : y(Ja, a) ? Ka.a(a, b) : m
  }
  return c
}
function pc(a, b, c) {
  if(a != m) {
    var d;
    if(d = a) {
      d = (d = a.h & 256) ? d : a.kc
    }
    a = d ? a.v(a, b, c) : a instanceof Array ? b < a.length ? a[b] : c : ya(a) ? b < a.length ? a[b] : c : y(Ja, a) ? Ka.e(a, b, c) : c
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
  return a != m ? Pa(a, b, c) : tc.a ? tc.a(b, c) : tc.call(m, b, c)
}
function uc(a, b, c, d) {
  for(;;) {
    if(a = rc.e(a, b, c), w(d)) {
      b = M(d), c = Zb(d), d = P(P(d))
    }else {
      return a
    }
  }
}
function vc(a, b, c, d) {
  var f = m;
  3 < arguments.length && (f = R(Array.prototype.slice.call(arguments, 3), 0));
  return uc.call(this, a, b, c, f)
}
vc.o = 3;
vc.k = function(a) {
  var b = M(a), a = P(a), c = M(a), a = P(a), d = M(a), a = N(a);
  return uc(b, c, d, a)
};
vc.g = uc;
rc = function(a, b, c, d) {
  switch(arguments.length) {
    case 3:
      return sc.call(this, a, b, c);
    default:
      return vc.g(a, b, c, R(arguments, 3))
  }
  e(Error("Invalid arity: " + arguments.length))
};
rc.o = 3;
rc.k = vc.k;
rc.e = sc;
rc.g = vc.g;
qc = rc;
function wc(a) {
  var b = da(a);
  return b ? b : a ? w(w(m) ? m : a.gc) ? l : a.Md ? p : y(za, a) : y(za, a)
}
var zc = function xc(b, c) {
  var d;
  if(d = wc(b)) {
    d = b ? ((d = b.h & 262144) ? d : b.Ld) || (b.h ? 0 : y(Za, b)) : y(Za, b), d = !d
  }
  if(d) {
    if(h === ta) {
      ta = {};
      ta = function(b, c, d, f) {
        this.m = b;
        this.Nb = c;
        this.Cc = d;
        this.sc = f;
        this.r = 0;
        this.h = 393217
      };
      ta.Ca = l;
      ta.Qa = "cljs.core/t5885";
      ta.Pa = function(b, c) {
        return G(c, "cljs.core/t5885")
      };
      var f = function(b, c) {
        return yc.a ? yc.a(b.Nb, c) : yc.call(m, b.Nb, c)
      };
      d = function(b, c) {
        var b = this, d = m;
        1 < arguments.length && (d = R(Array.prototype.slice.call(arguments, 1), 0));
        return f.call(this, b, d)
      };
      d.o = 1;
      d.k = function(b) {
        var c = M(b), b = N(b);
        return f(c, b)
      };
      d.g = f;
      ta.prototype.call = d;
      ta.prototype.apply = function(b, c) {
        b = this;
        return b.call.apply(b, [b].concat(c.slice()))
      };
      ta.prototype.gc = l;
      ta.prototype.C = r("sc");
      ta.prototype.D = function(b, c) {
        return new ta(this.m, this.Nb, this.Cc, c)
      }
    }
    d = new ta(c, b, xc, m);
    d = xc(d, c)
  }else {
    d = $a(b, c)
  }
  return d
};
function Ac(a) {
  var b;
  b = a ? ((b = a.h & 131072) ? b : a.mc) || (a.h ? 0 : y(Xa, a)) : y(Xa, a);
  return b ? Ya(a) : m
}
var Bc = {}, Cc = 0, K, Dc = m;
function Ec(a) {
  return Dc.a(a, l)
}
function Fc(a, b) {
  var c;
  ((c = v(a)) ? b : c) ? (255 < Cc && (Bc = {}, Cc = 0), c = Bc[a], "number" !== typeof c && (c = la(a), Bc[a] = c, Cc += 1)) : c = hb(a);
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
    var b = a.h & 16384, a = (b ? b : a.Kd) ? l : a.h ? p : y(Va, a)
  }else {
    a = y(Va, a)
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
  var b = v(a);
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
      c = (c = a.r & 2048) ? c : a.hc
    }
    return c ? a.ic(a, b) : a > b ? 1 : a < b ? -1 : 0
  }
  e(Error("compare on non-nil objects of different types"))
}
var Pc, Qc = m;
function Rc(a, b) {
  var c = T(a), d = T(b);
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
var Tc, Uc = m;
function Vc(a, b) {
  var c = L(b);
  return c ? Wc.e ? Wc.e(a, M(c), P(c)) : Wc.call(m, a, M(c), P(c)) : a.A ? a.A() : a.call(m)
}
function Xc(a, b, c) {
  for(c = L(c);;) {
    if(c) {
      b = a.a ? a.a(b, M(c)) : a.call(m, b, M(c)), c = P(c)
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
Uc.e = Xc;
Tc = Uc;
var Wc, Yc = m;
function Zc(a, b) {
  var c;
  if(c = b) {
    c = (c = b.h & 524288) ? c : b.nc
  }
  return c ? b.xa(b, a) : b instanceof Array ? Ib.a(b, a) : ya(b) ? Ib.a(b, a) : y(ab, b) ? bb.a(b, a) : Tc.a(a, b)
}
function $c(a, b, c) {
  var d;
  if(d = c) {
    d = (d = c.h & 524288) ? d : c.nc
  }
  return d ? c.ya(c, a, b) : c instanceof Array ? Ib.e(c, a, b) : ya(c) ? Ib.e(c, a, b) : y(ab, c) ? bb.e(c, a, b) : Tc.e(a, b, c)
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
Yc.e = $c;
Wc = Yc;
function ad(a) {
  return 0 <= a ? Math.floor.b ? Math.floor.b(a) : Math.floor.call(m, a) : Math.ceil.b ? Math.ceil.b(a) : Math.ceil.call(m, a)
}
function bd(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24
}
var cd, dd = m;
function ed(a) {
  return a == m ? "" : a.toString()
}
function fd(a, b) {
  return function(a, b) {
    for(;;) {
      if(w(b)) {
        var f = a.append(dd.b(M(b))), g = P(b), a = f, b = g
      }else {
        return dd.b(a)
      }
    }
  }.call(m, new sa(dd.b(a)), b)
}
function gd(a, b) {
  var c = m;
  1 < arguments.length && (c = R(Array.prototype.slice.call(arguments, 1), 0));
  return fd.call(this, a, c)
}
gd.o = 1;
gd.k = function(a) {
  var b = M(a), a = N(a);
  return fd(b, a)
};
gd.g = fd;
dd = function(a, b) {
  switch(arguments.length) {
    case 0:
      return"";
    case 1:
      return ed.call(this, a);
    default:
      return gd.g(a, R(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
dd.o = 1;
dd.k = gd.k;
dd.A = ba("");
dd.b = ed;
dd.g = gd.g;
cd = dd;
var J, id = m;
function jd(a) {
  return Nc(a) ? cd.g(":", R([a.substring(2, a.length)], 0)) : a == m ? "" : a.toString()
}
function kd(a, b) {
  return function(a, b) {
    for(;;) {
      if(w(b)) {
        var f = a.append(id.b(M(b))), g = P(b), a = f, b = g
      }else {
        return cd.b(a)
      }
    }
  }.call(m, new sa(id.b(a)), b)
}
function ld(a, b) {
  var c = m;
  1 < arguments.length && (c = R(Array.prototype.slice.call(arguments, 1), 0));
  return kd.call(this, a, c)
}
ld.o = 1;
ld.k = function(a) {
  var b = M(a), a = N(a);
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
id.o = 1;
id.k = ld.k;
id.A = ba("");
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
  return Nc(a) ? a : a instanceof ub ? cd.g("\ufdd0", R([":", md.a(a, 2)], 0)) : cd.g("\ufdd0", R([":", a], 0))
}
function rd(a, b) {
  return pd.b(cd.g(a, R(["/", b], 0)))
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
  c = b ? ((c = b.h & 16777216) ? c : b.Id) || (b.h ? 0 : y(kb, b)) : y(kb, b);
  if(c) {
    a: {
      c = L(a);
      for(var d = L(b);;) {
        if(c == m) {
          c = d == m;
          break a
        }
        if(d != m && Q.a(M(c), M(d))) {
          c = P(c), d = P(d)
        }else {
          c = p;
          break a
        }
      }
      c = h
    }
  }else {
    c = m
  }
  return w(c) ? l : p
}
function vb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2)
}
function Pb(a) {
  return Wc.e(function(a, c) {
    return vb(a, K.a(c, p))
  }, K.a(M(a), p), P(a))
}
function sd(a) {
  for(var b = 0, a = L(a);;) {
    if(a) {
      var c = M(a), b = (b + (K.b(td.b ? td.b(c) : td.call(m, c)) ^ K.b(ud.b ? ud.b(c) : ud.call(m, c)))) % 4503599627370496, a = P(a)
    }else {
      return b
    }
  }
}
function vd(a, b, c, d, f) {
  this.m = a;
  this.Ra = b;
  this.ia = c;
  this.count = d;
  this.l = f;
  this.r = 0;
  this.h = 65413358
}
s = vd.prototype;
s.J = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Pb(a)
};
s.fa = function() {
  return 1 === this.count ? m : this.ia
};
s.I = function(a, b) {
  return new vd(this.m, b, a, this.count + 1, m)
};
s.toString = function() {
  return tb(this)
};
s.w = aa();
s.z = r("count");
s.O = r("Ra");
s.R = function() {
  return 1 === this.count ? yb : this.ia
};
s.G = function(a, b) {
  return Rb(a, b)
};
s.D = function(a, b) {
  return new vd(b, this.Ra, this.ia, this.count, this.l)
};
s.C = r("m");
function wd(a) {
  this.m = a;
  this.r = 0;
  this.h = 65413326
}
s = wd.prototype;
s.J = ba(0);
s.fa = ba(m);
s.I = function(a, b) {
  return new vd(this.m, b, m, 1, m)
};
s.toString = function() {
  return tb(this)
};
s.w = ba(m);
s.z = ba(0);
s.O = ba(m);
s.R = function() {
  return yb
};
s.G = function(a, b) {
  return Rb(a, b)
};
s.D = function(a, b) {
  return new wd(b)
};
s.C = r("m");
var yb = new wd(m), Qb;
function xd(a) {
  var b;
  if(a instanceof xb) {
    b = a.c
  }else {
    a: {
      for(b = [];;) {
        if(a != m) {
          b.push(a.O(a)), a = a.fa(a)
        }else {
          break a
        }
      }
      b = h
    }
  }
  for(var a = b.length, c = yb;;) {
    if(0 < a) {
      var d = a - 1, c = c.I(c, b[a - 1]), a = d
    }else {
      return c
    }
  }
}
function yd(a) {
  var b = m;
  0 < arguments.length && (b = R(Array.prototype.slice.call(arguments, 0), 0));
  return xd.call(this, b)
}
yd.o = 0;
yd.k = function(a) {
  a = L(a);
  return xd(a)
};
yd.g = xd;
Qb = yd;
function zd(a, b, c, d) {
  this.m = a;
  this.Ra = b;
  this.ia = c;
  this.l = d;
  this.r = 0;
  this.h = 65405164
}
s = zd.prototype;
s.J = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Pb(a)
};
s.fa = function() {
  return this.ia == m ? m : jb(this.ia)
};
s.I = function(a, b) {
  return new zd(m, b, a, this.l)
};
s.toString = function() {
  return tb(this)
};
s.w = aa();
s.O = r("Ra");
s.R = function() {
  return this.ia == m ? yb : this.ia
};
s.G = function(a, b) {
  return Rb(a, b)
};
s.D = function(a, b) {
  return new zd(b, this.Ra, this.ia, this.l)
};
s.C = r("m");
function S(a, b) {
  var c = b == m;
  if(!c && (c = b)) {
    c = (c = b.h & 64) ? c : b.zb
  }
  return c ? new zd(m, a, b, m) : new zd(m, a, L(b), m)
}
Aa.string = l;
Ba.string = function(a) {
  return a.length
};
hb.string = function(a) {
  return la(a)
};
function V(a) {
  this.Jb = a;
  this.r = 0;
  this.h = 1
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
        var f = b.ta;
        d = f == m ? Ka.e(b, d.Jb, m) : f[d.Jb]
      }
      return d;
    case 3:
      return b == m ? c : Ka.e(b, this.Jb, c)
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
  if(a.Ob) {
    return b
  }
  a.x = b.A ? b.A() : b.call(m);
  a.Ob = l;
  return a.x
}
function Dd(a, b, c, d) {
  this.m = a;
  this.Ob = b;
  this.x = c;
  this.l = d;
  this.r = 0;
  this.h = 31850700
}
s = Dd.prototype;
s.J = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Pb(a)
};
s.fa = function(a) {
  return jb(a.R(a))
};
s.I = function(a, b) {
  return S(b, a)
};
s.toString = function() {
  return tb(this)
};
s.w = function(a) {
  return L(Cd(a))
};
s.O = function(a) {
  return M(Cd(a))
};
s.R = function(a) {
  return N(Cd(a))
};
s.G = function(a, b) {
  return Rb(a, b)
};
s.D = function(a, b) {
  return new Dd(b, this.Ob, this.x, this.l)
};
s.C = r("m");
function Ed(a, b) {
  this.ib = a;
  this.end = b;
  this.r = 0;
  this.h = 2
}
Ed.prototype.z = r("end");
Ed.prototype.add = function(a) {
  this.ib[this.end] = a;
  return this.end += 1
};
Ed.prototype.aa = function() {
  var a = new Fd(this.ib, 0, this.end);
  this.ib = m;
  return a
};
function Fd(a, b, c) {
  this.c = a;
  this.H = b;
  this.end = c;
  this.r = 0;
  this.h = 524306
}
s = Fd.prototype;
s.xa = function(a, b) {
  return Ib.n(this.c, b, this.c[this.H], this.H + 1)
};
s.ya = function(a, b, c) {
  return Ib.n(this.c, b, c, this.H)
};
s.Pb = function() {
  this.H === this.end && e(Error("-drop-first of empty chunk"));
  return new Fd(this.c, this.H + 1, this.end)
};
s.t = function(a, b) {
  return this.c[this.H + b]
};
s.N = function(a, b, c) {
  return((a = 0 <= b) ? b < this.end - this.H : a) ? this.c[this.H + b] : c
};
s.z = function() {
  return this.end - this.H
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
  this.aa = a;
  this.oa = b;
  this.m = c;
  this.l = d;
  this.h = 31850604;
  this.r = 1536
}
s = Ic.prototype;
s.J = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Pb(a)
};
s.I = function(a, b) {
  return S(b, a)
};
s.toString = function() {
  return tb(this)
};
s.w = aa();
s.O = function() {
  return D.a(this.aa, 0)
};
s.R = function() {
  return 1 < Ba(this.aa) ? new Ic(rb(this.aa), this.oa, this.m, m) : this.oa == m ? yb : this.oa
};
s.Qb = function() {
  return this.oa == m ? m : this.oa
};
s.G = function(a, b) {
  return Rb(a, b)
};
s.D = function(a, b) {
  return new Ic(this.aa, this.oa, b, this.l)
};
s.C = r("m");
s.kb = r("aa");
s.Ya = function() {
  return this.oa == m ? yb : this.oa
};
function Ld(a, b) {
  return 0 === Ba(a) ? b : new Ic(a, b, m, m)
}
function Md(a) {
  for(var b = [];;) {
    if(L(a)) {
      b.push(M(a)), a = P(a)
    }else {
      return b
    }
  }
}
function Nd(a, b) {
  if(Nb(a)) {
    return T(a)
  }
  for(var c = a, d = b, f = 0;;) {
    var g;
    g = (g = 0 < d) ? L(c) : g;
    if(w(g)) {
      c = P(c), d -= 1, f += 1
    }else {
      return f
    }
  }
}
var Pd = function Od(b) {
  return b == m ? m : P(b) == m ? L(M(b)) : S(M(b), Od(P(b)))
}, Qd, Rd = m;
function Sd(a, b, c) {
  return S(a, S(b, c))
}
function Td(a, b, c, d) {
  return S(a, S(b, S(c, d)))
}
function Ud(a, b, c, d, f) {
  return S(a, S(b, S(c, S(d, Pd(f)))))
}
function Vd(a, b, c, d, f) {
  var g = m;
  4 < arguments.length && (g = R(Array.prototype.slice.call(arguments, 4), 0));
  return Ud.call(this, a, b, c, d, g)
}
Vd.o = 4;
Vd.k = function(a) {
  var b = M(a), a = P(a), c = M(a), a = P(a), d = M(a), a = P(a), f = M(a), a = N(a);
  return Ud(b, c, d, f, a)
};
Vd.g = Ud;
Rd = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 1:
      return L(a);
    case 2:
      return S(a, b);
    case 3:
      return Sd.call(this, a, b, c);
    case 4:
      return Td.call(this, a, b, c, d);
    default:
      return Vd.g(a, b, c, d, R(arguments, 4))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Rd.o = 4;
Rd.k = Vd.k;
Rd.b = function(a) {
  return L(a)
};
Rd.a = function(a, b) {
  return S(a, b)
};
Rd.e = Sd;
Rd.n = Td;
Rd.g = Vd.g;
Qd = Rd;
function Wd(a, b, c) {
  var d = L(c);
  if(0 === b) {
    return a.A ? a.A() : a.call(m)
  }
  var c = E(d), f = F(d);
  if(1 === b) {
    return a.b ? a.b(c) : a.b ? a.b(c) : a.call(m, c)
  }
  var d = E(f), g = F(f);
  if(2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(m, c, d)
  }
  var f = E(g), i = F(g);
  if(3 === b) {
    return a.e ? a.e(c, d, f) : a.e ? a.e(c, d, f) : a.call(m, c, d, f)
  }
  var g = E(i), j = F(i);
  if(4 === b) {
    return a.n ? a.n(c, d, f, g) : a.n ? a.n(c, d, f, g) : a.call(m, c, d, f, g)
  }
  i = E(j);
  j = F(j);
  if(5 === b) {
    return a.ba ? a.ba(c, d, f, g, i) : a.ba ? a.ba(c, d, f, g, i) : a.call(m, c, d, f, g, i)
  }
  var a = E(j), k = F(j);
  if(6 === b) {
    return a.ea ? a.ea(c, d, f, g, i, a) : a.ea ? a.ea(c, d, f, g, i, a) : a.call(m, c, d, f, g, i, a)
  }
  var j = E(k), n = F(k);
  if(7 === b) {
    return a.wa ? a.wa(c, d, f, g, i, a, j) : a.wa ? a.wa(c, d, f, g, i, a, j) : a.call(m, c, d, f, g, i, a, j)
  }
  var k = E(n), q = F(n);
  if(8 === b) {
    return a.xb ? a.xb(c, d, f, g, i, a, j, k) : a.xb ? a.xb(c, d, f, g, i, a, j, k) : a.call(m, c, d, f, g, i, a, j, k)
  }
  var n = E(q), u = F(q);
  if(9 === b) {
    return a.yb ? a.yb(c, d, f, g, i, a, j, k, n) : a.yb ? a.yb(c, d, f, g, i, a, j, k, n) : a.call(m, c, d, f, g, i, a, j, k, n)
  }
  var q = E(u), x = F(u);
  if(10 === b) {
    return a.mb ? a.mb(c, d, f, g, i, a, j, k, n, q) : a.mb ? a.mb(c, d, f, g, i, a, j, k, n, q) : a.call(m, c, d, f, g, i, a, j, k, n, q)
  }
  var u = E(x), C = F(x);
  if(11 === b) {
    return a.nb ? a.nb(c, d, f, g, i, a, j, k, n, q, u) : a.nb ? a.nb(c, d, f, g, i, a, j, k, n, q, u) : a.call(m, c, d, f, g, i, a, j, k, n, q, u)
  }
  var x = E(C), A = F(C);
  if(12 === b) {
    return a.ob ? a.ob(c, d, f, g, i, a, j, k, n, q, u, x) : a.ob ? a.ob(c, d, f, g, i, a, j, k, n, q, u, x) : a.call(m, c, d, f, g, i, a, j, k, n, q, u, x)
  }
  var C = E(A), U = F(A);
  if(13 === b) {
    return a.pb ? a.pb(c, d, f, g, i, a, j, k, n, q, u, x, C) : a.pb ? a.pb(c, d, f, g, i, a, j, k, n, q, u, x, C) : a.call(m, c, d, f, g, i, a, j, k, n, q, u, x, C)
  }
  var A = E(U), B = F(U);
  if(14 === b) {
    return a.qb ? a.qb(c, d, f, g, i, a, j, k, n, q, u, x, C, A) : a.qb ? a.qb(c, d, f, g, i, a, j, k, n, q, u, x, C, A) : a.call(m, c, d, f, g, i, a, j, k, n, q, u, x, C, A)
  }
  var U = E(B), O = F(B);
  if(15 === b) {
    return a.rb ? a.rb(c, d, f, g, i, a, j, k, n, q, u, x, C, A, U) : a.rb ? a.rb(c, d, f, g, i, a, j, k, n, q, u, x, C, A, U) : a.call(m, c, d, f, g, i, a, j, k, n, q, u, x, C, A, U)
  }
  var B = E(O), Ea = F(O);
  if(16 === b) {
    return a.sb ? a.sb(c, d, f, g, i, a, j, k, n, q, u, x, C, A, U, B) : a.sb ? a.sb(c, d, f, g, i, a, j, k, n, q, u, x, C, A, U, B) : a.call(m, c, d, f, g, i, a, j, k, n, q, u, x, C, A, U, B)
  }
  var O = E(Ea), eb = F(Ea);
  if(17 === b) {
    return a.tb ? a.tb(c, d, f, g, i, a, j, k, n, q, u, x, C, A, U, B, O) : a.tb ? a.tb(c, d, f, g, i, a, j, k, n, q, u, x, C, A, U, B, O) : a.call(m, c, d, f, g, i, a, j, k, n, q, u, x, C, A, U, B, O)
  }
  var Ea = E(eb), hd = F(eb);
  if(18 === b) {
    return a.ub ? a.ub(c, d, f, g, i, a, j, k, n, q, u, x, C, A, U, B, O, Ea) : a.ub ? a.ub(c, d, f, g, i, a, j, k, n, q, u, x, C, A, U, B, O, Ea) : a.call(m, c, d, f, g, i, a, j, k, n, q, u, x, C, A, U, B, O, Ea)
  }
  eb = E(hd);
  hd = F(hd);
  if(19 === b) {
    return a.vb ? a.vb(c, d, f, g, i, a, j, k, n, q, u, x, C, A, U, B, O, Ea, eb) : a.vb ? a.vb(c, d, f, g, i, a, j, k, n, q, u, x, C, A, U, B, O, Ea, eb) : a.call(m, c, d, f, g, i, a, j, k, n, q, u, x, C, A, U, B, O, Ea, eb)
  }
  var bf = E(hd);
  F(hd);
  if(20 === b) {
    return a.wb ? a.wb(c, d, f, g, i, a, j, k, n, q, u, x, C, A, U, B, O, Ea, eb, bf) : a.wb ? a.wb(c, d, f, g, i, a, j, k, n, q, u, x, C, A, U, B, O, Ea, eb, bf) : a.call(m, c, d, f, g, i, a, j, k, n, q, u, x, C, A, U, B, O, Ea, eb, bf)
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
  b = S(b, S(c, S(d, S(f, Pd(g)))));
  c = a.o;
  return a.k ? (d = Nd(b, c + 1), d <= c ? Wd(a, d, b) : a.k(b)) : a.apply(a, Md(b))
}
function ce(a, b, c, d, f, g) {
  var i = m;
  5 < arguments.length && (i = R(Array.prototype.slice.call(arguments, 5), 0));
  return be.call(this, a, b, c, d, f, i)
}
ce.o = 5;
ce.k = function(a) {
  var b = M(a), a = P(a), c = M(a), a = P(a), d = M(a), a = P(a), f = M(a), a = P(a), g = M(a), a = N(a);
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
      return ce.g(a, b, c, d, f, R(arguments, 5))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Xd.o = 5;
Xd.k = ce.k;
Xd.a = Yd;
Xd.e = Zd;
Xd.n = $d;
Xd.ba = ae;
Xd.g = ce.g;
yc = Xd;
var de, ee = m;
function fe(a, b) {
  return!Q.a(a, b)
}
function ge(a, b, c) {
  return xa(yc.n(Q, a, b, c))
}
function he(a, b, c) {
  var d = m;
  2 < arguments.length && (d = R(Array.prototype.slice.call(arguments, 2), 0));
  return ge.call(this, a, b, d)
}
he.o = 2;
he.k = function(a) {
  var b = M(a), a = P(a), c = M(a), a = N(a);
  return ge(b, c, a)
};
he.g = ge;
ee = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return p;
    case 2:
      return fe.call(this, a, b);
    default:
      return he.g(a, b, R(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
ee.o = 2;
ee.k = he.k;
ee.b = ba(p);
ee.a = fe;
ee.g = he.g;
de = ee;
function ie(a, b) {
  for(;;) {
    if(L(b) == m) {
      return l
    }
    if(w(a.b ? a.b(M(b)) : a.call(m, M(b)))) {
      var c = a, d = P(b), a = c, b = d
    }else {
      return p
    }
  }
}
function je(a) {
  return a
}
function ke() {
  function a(a, c, g) {
    var i = m;
    2 < arguments.length && (i = R(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, c, i)
  }
  function b(a, b, c) {
    return xa(yc.n(wa, a, b, c))
  }
  var c = m;
  a.o = 2;
  a.k = function(a) {
    var c = M(a), a = P(a), g = M(a), a = N(a);
    return b(c, g, a)
  };
  a.g = b;
  c = function(b, c, g) {
    switch(arguments.length) {
      case 0:
        return xa(wa.A ? wa.A() : wa.call(m));
      case 1:
        return xa(wa.b ? wa.b(b) : wa.call(m, b));
      case 2:
        return xa(wa.a ? wa.a(b, c) : wa.call(m, b));
      default:
        return a.g(b, c, R(arguments, 2))
    }
    e(Error("Invalid arity: " + arguments.length))
  };
  c.o = 2;
  c.k = a.k;
  return c
}
var le, me = m;
function ne(a, b) {
  return new Dd(m, p, function() {
    var c = L(b);
    if(c) {
      if(Hc(c)) {
        for(var d = H(c), f = T(d), g = new Ed(Array(f), 0), i = 0;;) {
          if(i < f) {
            var j = a.b ? a.b(D.a(d, i)) : a.call(m, D.a(d, i));
            g.add(j);
            i += 1
          }else {
            break
          }
        }
        return Ld(g.aa(), me.a(a, I(c)))
      }
      return S(a.b ? a.b(M(c)) : a.call(m, M(c)), me.a(a, N(c)))
    }
    return m
  }, m)
}
function oe(a, b, c) {
  return new Dd(m, p, function() {
    var d = L(b), f = L(c);
    return(d ? f : d) ? S(a.a ? a.a(M(d), M(f)) : a.call(m, M(d), M(f)), me.e(a, N(d), N(f))) : m
  }, m)
}
function pe(a, b, c, d) {
  return new Dd(m, p, function() {
    var f = L(b), g = L(c), i = L(d);
    return(f ? g ? i : g : f) ? S(a.e ? a.e(M(f), M(g), M(i)) : a.call(m, M(f), M(g), M(i)), me.n(a, N(f), N(g), N(i))) : m
  }, m)
}
function qe(a, b, c, d, f) {
  return me.a(function(b) {
    return yc.a(a, b)
  }, function i(a) {
    return new Dd(m, p, function() {
      var b = me.a(L, a);
      return ie(je, b) ? S(me.a(M, b), i(me.a(N, b))) : m
    }, m)
  }($b.g(f, d, R([c, b], 0))))
}
function re(a, b, c, d, f) {
  var g = m;
  4 < arguments.length && (g = R(Array.prototype.slice.call(arguments, 4), 0));
  return qe.call(this, a, b, c, d, g)
}
re.o = 4;
re.k = function(a) {
  var b = M(a), a = P(a), c = M(a), a = P(a), d = M(a), a = P(a), f = M(a), a = N(a);
  return qe(b, c, d, f, a)
};
re.g = qe;
me = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 2:
      return ne.call(this, a, b);
    case 3:
      return oe.call(this, a, b, c);
    case 4:
      return pe.call(this, a, b, c, d);
    default:
      return re.g(a, b, c, d, R(arguments, 4))
  }
  e(Error("Invalid arity: " + arguments.length))
};
me.o = 4;
me.k = re.k;
me.a = ne;
me.e = oe;
me.n = pe;
me.g = re.g;
le = me;
var te = function se(b, c) {
  return new Dd(m, p, function() {
    if(0 < b) {
      var d = L(c);
      return d ? S(M(d), se(b - 1, N(d))) : m
    }
    return m
  }, m)
}, ue, ve = m;
function we(a) {
  return new Dd(m, p, function() {
    return S(a.A ? a.A() : a.call(m), ve.b(a))
  }, m)
}
function xe(a, b) {
  return te(a, ve.b(b))
}
ve = function(a, b) {
  switch(arguments.length) {
    case 1:
      return we.call(this, a);
    case 2:
      return xe.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ve.b = we;
ve.a = xe;
ue = ve;
function ye(a) {
  return function c(a, f) {
    return new Dd(m, p, function() {
      var g = L(a);
      return g ? S(M(g), c(N(g), f)) : L(f) ? c(M(f), N(f)) : m
    }, m)
  }(m, a)
}
var ze, Ae = m;
function Be(a, b) {
  return ye(le.a(a, b))
}
function Ce(a, b, c) {
  return ye(yc.n(le, a, b, c))
}
function De(a, b, c) {
  var d = m;
  2 < arguments.length && (d = R(Array.prototype.slice.call(arguments, 2), 0));
  return Ce.call(this, a, b, d)
}
De.o = 2;
De.k = function(a) {
  var b = M(a), a = P(a), c = M(a), a = N(a);
  return Ce(b, c, a)
};
De.g = Ce;
Ae = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Be.call(this, a, b);
    default:
      return De.g(a, b, R(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ae.o = 2;
Ae.k = De.k;
Ae.a = Be;
Ae.g = De.g;
ze = Ae;
var Fe = function Ee(b, c) {
  return new Dd(m, p, function() {
    var d = L(c);
    if(d) {
      if(Hc(d)) {
        for(var f = H(d), g = T(f), i = new Ed(Array(g), 0), j = 0;;) {
          if(j < g) {
            if(w(b.b ? b.b(D.a(f, j)) : b.call(m, D.a(f, j)))) {
              var k = D.a(f, j);
              i.add(k)
            }
            j += 1
          }else {
            break
          }
        }
        return Ld(i.aa(), Ee(b, I(d)))
      }
      f = M(d);
      d = N(d);
      return w(b.b ? b.b(f) : b.call(m, f)) ? S(f, Ee(b, d)) : Ee(b, d)
    }
    return m
  }, m)
};
function Ge(a, b) {
  var c;
  if(a != m) {
    if(c = a) {
      c = (c = a.r & 4) ? c : a.Fd
    }
    c ? (c = Wc.e(ob, nb(a), b), c = pb(c)) : c = Wc.e(Ca, a, b)
  }else {
    c = Wc.e($b, yb, b)
  }
  return c
}
function He(a, b) {
  this.q = a;
  this.c = b
}
function Ie(a) {
  a = a.j;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function Je(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var d = new He(a, Array(32));
    d.c[0] = c;
    c = d;
    b -= 5
  }
}
var Le = function Ke(b, c, d, f) {
  var g = new He(d.q, d.c.slice()), i = b.j - 1 >>> c & 31;
  5 === c ? g.c[i] = f : (d = d.c[i], b = d != m ? Ke(b, c - 5, d, f) : Je(m, c - 5, f), g.c[i] = b);
  return g
};
function Me(a, b) {
  var c = 0 <= b;
  if(c ? b < a.j : c) {
    if(b >= Ie(a)) {
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
    e(Error([J("No item "), J(b), J(" in vector of length "), J(a.j)].join("")))
  }
}
var Oe = function Ne(b, c, d, f, g) {
  var i = new He(d.q, d.c.slice());
  if(0 === c) {
    i.c[f & 31] = g
  }else {
    var j = f >>> c & 31, b = Ne(b, c - 5, d.c[j], f, g);
    i.c[j] = b
  }
  return i
};
function Pe(a, b, c, d, f, g) {
  this.m = a;
  this.j = b;
  this.shift = c;
  this.root = d;
  this.L = f;
  this.l = g;
  this.r = 4;
  this.h = 167668511
}
s = Pe.prototype;
s.va = function() {
  return new Qe(this.j, this.shift, Re.b ? Re.b(this.root) : Re.call(m, this.root), Se.b ? Se.b(this.L) : Se.call(m, this.L))
};
s.J = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Pb(a)
};
s.B = function(a, b) {
  return a.N(a, b, m)
};
s.v = function(a, b, c) {
  return a.N(a, b, c)
};
s.ja = function(a, b, c) {
  var d = 0 <= b;
  if(d ? b < this.j : d) {
    return Ie(a) <= b ? (a = this.L.slice(), a[b & 31] = c, new Pe(this.m, this.j, this.shift, this.root, a, m)) : new Pe(this.m, this.j, this.shift, Oe(a, this.shift, this.root, b, c), this.L, m)
  }
  if(b === this.j) {
    return a.I(a, c)
  }
  e(Error([J("Index "), J(b), J(" out of bounds  [0,"), J(this.j), J("]")].join("")))
};
var Te = m, Te = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.B(this, b);
    case 3:
      return this.v(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
s = Pe.prototype;
s.call = Te;
s.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
s.I = function(a, b) {
  if(32 > this.j - Ie(a)) {
    var c = this.L.slice();
    c.push(b);
    return new Pe(this.m, this.j + 1, this.shift, this.root, c, m)
  }
  var d = this.j >>> 5 > 1 << this.shift, c = d ? this.shift + 5 : this.shift;
  if(d) {
    d = new He(m, Array(32));
    d.c[0] = this.root;
    var f = Je(m, this.shift, new He(m, this.L));
    d.c[1] = f
  }else {
    d = Le(a, this.shift, this.root, new He(m, this.L))
  }
  return new Pe(this.m, this.j + 1, c, d, [b], m)
};
s.Rb = function(a) {
  return a.t(a, 0)
};
s.Sb = function(a) {
  return a.t(a, 1)
};
s.toString = function() {
  return tb(this)
};
s.xa = function(a, b) {
  return Db.a(a, b)
};
s.ya = function(a, b, c) {
  return Db.e(a, b, c)
};
s.w = function(a) {
  return 0 === this.j ? m : 32 > this.j ? R.b(this.L) : W.e ? W.e(a, 0, 0) : W.call(m, a, 0, 0)
};
s.z = r("j");
s.G = function(a, b) {
  return Rb(a, b)
};
s.D = function(a, b) {
  return new Pe(b, this.j, this.shift, this.root, this.L, this.l)
};
s.C = r("m");
s.t = function(a, b) {
  return Me(a, b)[b & 31]
};
s.N = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.j : d) ? a.t(a, b) : c
};
var Ue = new He(m, Array(32)), Ve = new Pe(m, 0, 5, Ue, [], 0);
function We(a) {
  var b = a.length;
  if(32 > b) {
    return new Pe(m, b, 5, Ue, a, m)
  }
  for(var c = a.slice(0, 32), d = 32, f = nb(new Pe(m, 32, 5, Ue, c, m));;) {
    if(d < b) {
      c = d + 1, f = ob(f, a[d]), d = c
    }else {
      return pb(f)
    }
  }
}
function Xe(a) {
  return pb(Wc.e(ob, nb(Ve), a))
}
function Ye(a) {
  var b = m;
  0 < arguments.length && (b = R(Array.prototype.slice.call(arguments, 0), 0));
  return Xe(b)
}
Ye.o = 0;
Ye.k = function(a) {
  a = L(a);
  return Xe(a)
};
Ye.g = function(a) {
  return Xe(a)
};
function Jc(a, b, c, d, f, g) {
  this.V = a;
  this.T = b;
  this.p = c;
  this.H = d;
  this.m = f;
  this.l = g;
  this.h = 31719660;
  this.r = 1536
}
s = Jc.prototype;
s.J = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Pb(a)
};
s.fa = function(a) {
  return this.H + 1 < this.T.length ? (a = W.n ? W.n(this.V, this.T, this.p, this.H + 1) : W.call(m, this.V, this.T, this.p, this.H + 1), a == m ? m : a) : a.Qb(a)
};
s.I = function(a, b) {
  return S(b, a)
};
s.toString = function() {
  return tb(this)
};
s.w = aa();
s.O = function() {
  return this.T[this.H]
};
s.R = function(a) {
  return this.H + 1 < this.T.length ? (a = W.n ? W.n(this.V, this.T, this.p, this.H + 1) : W.call(m, this.V, this.T, this.p, this.H + 1), a == m ? yb : a) : a.Ya(a)
};
s.Qb = function() {
  var a = this.T.length, a = this.p + a < Ba(this.V) ? W.e ? W.e(this.V, this.p + a, 0) : W.call(m, this.V, this.p + a, 0) : m;
  return a == m ? m : a
};
s.G = function(a, b) {
  return Rb(a, b)
};
s.D = function(a, b) {
  return W.ba ? W.ba(this.V, this.T, this.p, this.H, b) : W.call(m, this.V, this.T, this.p, this.H, b)
};
s.kb = function() {
  return Gd.a(this.T, this.H)
};
s.Ya = function() {
  var a = this.T.length, a = this.p + a < Ba(this.V) ? W.e ? W.e(this.V, this.p + a, 0) : W.call(m, this.V, this.p + a, 0) : m;
  return a == m ? yb : a
};
var W, Ze = m;
function $e(a, b, c) {
  return new Jc(a, Me(a, b), b, c, m, m)
}
function af(a, b, c, d) {
  return new Jc(a, b, c, d, m, m)
}
function cf(a, b, c, d, f) {
  return new Jc(a, b, c, d, f, m)
}
Ze = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 3:
      return $e.call(this, a, b, c);
    case 4:
      return af.call(this, a, b, c, d);
    case 5:
      return cf.call(this, a, b, c, d, f)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ze.e = $e;
Ze.n = af;
Ze.ba = cf;
W = Ze;
function Re(a) {
  return new He({}, a.c.slice())
}
function Se(a) {
  var b = Array(32);
  Kc(a, 0, b, 0, a.length);
  return b
}
var ef = function df(b, c, d, f) {
  var d = b.root.q === d.q ? d : new He(b.root.q, d.c.slice()), g = b.j - 1 >>> c & 31;
  if(5 === c) {
    b = f
  }else {
    var i = d.c[g], b = i != m ? df(b, c - 5, i, f) : Je(b.root.q, c - 5, f)
  }
  d.c[g] = b;
  return d
};
function Qe(a, b, c, d) {
  this.j = a;
  this.shift = b;
  this.root = c;
  this.L = d;
  this.h = 275;
  this.r = 88
}
var ff = m, ff = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.B(this, b);
    case 3:
      return this.v(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
s = Qe.prototype;
s.call = ff;
s.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
s.B = function(a, b) {
  return a.N(a, b, m)
};
s.v = function(a, b, c) {
  return a.N(a, b, c)
};
s.t = function(a, b) {
  if(this.root.q) {
    return Me(a, b)[b & 31]
  }
  e(Error("nth after persistent!"))
};
s.N = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.j : d) ? a.t(a, b) : c
};
s.z = function() {
  if(this.root.q) {
    return this.j
  }
  e(Error("count after persistent!"))
};
s.Aa = function(a, b, c) {
  var d;
  a: {
    if(a.root.q) {
      var f = 0 <= b;
      if(f ? b < a.j : f) {
        Ie(a) <= b ? a.L[b & 31] = c : (d = function i(d, f) {
          var n = a.root.q === f.q ? f : new He(a.root.q, f.c.slice());
          if(0 === d) {
            n.c[b & 31] = c
          }else {
            var q = b >>> d & 31, u = i(d - 5, n.c[q]);
            n.c[q] = u
          }
          return n
        }.call(m, a.shift, a.root), a.root = d);
        d = a;
        break a
      }
      if(b === a.j) {
        d = a.pa(a, c);
        break a
      }
      e(Error([J("Index "), J(b), J(" out of bounds for TransientVector of length"), J(a.j)].join("")))
    }
    e(Error("assoc! after persistent!"))
  }
  return d
};
s.pa = function(a, b) {
  if(this.root.q) {
    if(32 > this.j - Ie(a)) {
      this.L[this.j & 31] = b
    }else {
      var c = new He(this.root.q, this.L), d = Array(32);
      d[0] = b;
      this.L = d;
      if(this.j >>> 5 > 1 << this.shift) {
        var d = Array(32), f = this.shift + 5;
        d[0] = this.root;
        d[1] = Je(this.root.q, this.shift, c);
        this.root = new He(this.root.q, d);
        this.shift = f
      }else {
        this.root = ef(a, this.shift, this.root, c)
      }
    }
    this.j += 1;
    return a
  }
  e(Error("conj! after persistent!"))
};
s.Ba = function(a) {
  if(this.root.q) {
    this.root.q = m;
    var a = this.j - Ie(a), b = Array(a);
    Kc(this.L, 0, b, 0, a);
    return new Pe(m, this.j, this.shift, this.root, b, m)
  }
  e(Error("persistent! called twice"))
};
function gf() {
  this.r = 0;
  this.h = 2097152
}
gf.prototype.G = ba(p);
var hf = new gf;
function jf(a, b) {
  var c;
  c = b == m ? 0 : b ? ((c = b.h & 1024) ? c : b.Gd) || (b.h ? 0 : y(Qa, b)) : y(Qa, b);
  c = c ? T(a) === T(b) ? ie(je, le.a(function(a) {
    return Q.a(mc.e(b, M(a), hf), Zb(a))
  }, a)) : m : m;
  return w(c) ? l : p
}
function kf(a, b) {
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
function lf(a, b) {
  var c = K.b(a), d = K.b(b);
  return c < d ? -1 : c > d ? 1 : 0
}
function mf(a, b, c) {
  for(var d = a.keys, f = d.length, g = a.ta, a = Ac(a), i = 0, j = nb(nf);;) {
    if(i < f) {
      var k = d[i], i = i + 1, j = qb(j, k, g[k])
    }else {
      return d = zc, b = qb(j, b, c), b = pb(b), d(b, a)
    }
  }
}
function of(a, b) {
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
function pf(a, b, c, d, f) {
  this.m = a;
  this.keys = b;
  this.ta = c;
  this.fb = d;
  this.l = f;
  this.r = 4;
  this.h = 16123663
}
s = pf.prototype;
s.va = function(a) {
  a = Ge(tc.A ? tc.A() : tc.call(m), a);
  return nb(a)
};
s.J = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = sd(a)
};
s.B = function(a, b) {
  return a.v(a, b, m)
};
s.v = function(a, b, c) {
  return((a = v(b)) ? kf(b, this.keys) != m : a) ? this.ta[b] : c
};
s.ja = function(a, b, c) {
  if(v(b)) {
    var d = this.fb > qf;
    if(d ? d : this.keys.length >= qf) {
      return mf(a, b, c)
    }
    if(kf(b, this.keys) != m) {
      return a = of(this.ta, this.keys), a[b] = c, new pf(this.m, this.keys, a, this.fb + 1, m)
    }
    a = of(this.ta, this.keys);
    d = this.keys.slice();
    a[b] = c;
    d.push(b);
    return new pf(this.m, d, a, this.fb + 1, m)
  }
  return mf(a, b, c)
};
s.Xa = function(a, b) {
  var c = v(b);
  return(c ? kf(b, this.keys) != m : c) ? l : p
};
var rf = m, rf = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.B(this, b);
    case 3:
      return this.v(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
s = pf.prototype;
s.call = rf;
s.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
s.I = function(a, b) {
  return Gc(b) ? a.ja(a, D.a(b, 0), D.a(b, 1)) : Wc.e(Ca, a, b)
};
s.toString = function() {
  return tb(this)
};
s.w = function() {
  var a = this;
  return 0 < a.keys.length ? le.a(function(b) {
    return Ye.g(R([b, a.ta[b]], 0))
  }, a.keys.sort(lf)) : m
};
s.z = function() {
  return this.keys.length
};
s.G = function(a, b) {
  return jf(a, b)
};
s.D = function(a, b) {
  return new pf(b, this.keys, this.ta, this.fb, this.l)
};
s.C = r("m");
var sf = new pf(m, [], {}, 0, 0), qf = 8;
function tf(a, b) {
  var c = a.c, d = v(b);
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
        for(var d = c.length, f = b.sa, g = 0;;) {
          if(d <= g) {
            c = -1;
            break a
          }
          var i = c[g], j = i instanceof ub;
          if(j ? f === i.sa : j) {
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
function uf(a, b, c, d) {
  this.m = a;
  this.j = b;
  this.c = c;
  this.l = d;
  this.r = 4;
  this.h = 16123663
}
s = uf.prototype;
s.va = function() {
  return new vf({}, this.c.length, this.c.slice())
};
s.J = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = sd(a)
};
s.B = function(a, b) {
  return a.v(a, b, m)
};
s.v = function(a, b, c) {
  a = tf(a, b);
  return-1 === a ? c : this.c[a + 1]
};
s.ja = function(a, b, c) {
  var d = tf(a, b);
  if(-1 === d) {
    if(this.j < wf) {
      for(var d = a.c, a = d.length, f = Array(a + 2), g = 0;;) {
        if(g < a) {
          f[g] = d[g], g += 1
        }else {
          break
        }
      }
      f[a] = b;
      f[a + 1] = c;
      return new uf(this.m, this.j + 1, f, m)
    }
    return $a(Pa(Ge(nf, a), b, c), this.m)
  }
  if(c === this.c[d + 1]) {
    return a
  }
  b = this.c.slice();
  b[d + 1] = c;
  return new uf(this.m, this.j, b, m)
};
s.Xa = function(a, b) {
  return-1 !== tf(a, b)
};
var xf = m, xf = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.B(this, b);
    case 3:
      return this.v(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
s = uf.prototype;
s.call = xf;
s.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
s.I = function(a, b) {
  return Gc(b) ? a.ja(a, D.a(b, 0), D.a(b, 1)) : Wc.e(Ca, a, b)
};
s.toString = function() {
  return tb(this)
};
s.w = function() {
  var a = this, b;
  if(0 < a.j) {
    var c = a.c.length;
    b = function f(b) {
      return new Dd(m, p, function() {
        return b < c ? S(We([a.c[b], a.c[b + 1]]), f(b + 2)) : m
      }, m)
    }(0)
  }else {
    b = m
  }
  return b
};
s.z = r("j");
s.G = function(a, b) {
  return jf(a, b)
};
s.D = function(a, b) {
  return new uf(b, this.j, this.c, this.l)
};
s.C = r("m");
var yf = new uf(m, 0, [], m), wf = 8;
function va(a, b) {
  var c = b ? a : a.slice();
  return new uf(m, c.length / 2, c, m)
}
function vf(a, b, c) {
  this.Da = a;
  this.ha = b;
  this.c = c;
  this.r = 56;
  this.h = 258
}
s = vf.prototype;
s.Aa = function(a, b, c) {
  if(w(this.Da)) {
    var d = tf(a, b);
    if(-1 === d) {
      if(this.ha + 2 <= 2 * wf) {
        return this.ha += 2, this.c.push(b), this.c.push(c), a
      }
      a = zf.a ? zf.a(this.ha, this.c) : zf.call(m, this.ha, this.c);
      return qb(a, b, c)
    }
    c !== this.c[d + 1] && (this.c[d + 1] = c);
    return a
  }
  e(Error("assoc! after persistent!"))
};
s.pa = function(a, b) {
  if(w(this.Da)) {
    var c;
    c = b ? ((c = b.h & 2048) ? c : b.lc) || (b.h ? 0 : y(Ra, b)) : y(Ra, b);
    if(c) {
      return a.Aa(a, td.b ? td.b(b) : td.call(m, b), ud.b ? ud.b(b) : ud.call(m, b))
    }
    c = L(b);
    for(var d = a;;) {
      var f = M(c);
      if(w(f)) {
        c = P(c), d = d.Aa(d, td.b ? td.b(f) : td.call(m, f), ud.b ? ud.b(f) : ud.call(m, f))
      }else {
        return d
      }
    }
  }else {
    e(Error("conj! after persistent!"))
  }
};
s.Ba = function() {
  if(w(this.Da)) {
    return this.Da = p, new uf(m, ad((this.ha - this.ha % 2) / 2), this.c, m)
  }
  e(Error("persistent! called twice"))
};
s.B = function(a, b) {
  return a.v(a, b, m)
};
s.v = function(a, b, c) {
  if(w(this.Da)) {
    return a = tf(a, b), -1 === a ? c : this.c[a + 1]
  }
  e(Error("lookup after persistent!"))
};
s.z = function() {
  if(w(this.Da)) {
    return ad((this.ha - this.ha % 2) / 2)
  }
  e(Error("count after persistent!"))
};
function zf(a, b) {
  for(var c = nb(sf), d = 0;;) {
    if(d < a) {
      c = qb(c, b[d], b[d + 1]), d += 2
    }else {
      return c
    }
  }
}
function Af() {
  this.ca = p
}
function Bf(a, b) {
  return v(a) ? a === b : Q.a(a, b)
}
var Cf, Df = m;
function Ef(a, b, c) {
  a = a.slice();
  a[b] = c;
  return a
}
function Ff(a, b, c, d, f) {
  a = a.slice();
  a[b] = c;
  a[d] = f;
  return a
}
Df = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 3:
      return Ef.call(this, a, b, c);
    case 5:
      return Ff.call(this, a, b, c, d, f)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Df.e = Ef;
Df.ba = Ff;
Cf = Df;
var Gf, Hf = m;
function If(a, b, c, d) {
  a = a.Ga(b);
  a.c[c] = d;
  return a
}
function Jf(a, b, c, d, f, g) {
  a = a.Ga(b);
  a.c[c] = d;
  a.c[f] = g;
  return a
}
Hf = function(a, b, c, d, f, g) {
  switch(arguments.length) {
    case 4:
      return If.call(this, a, b, c, d);
    case 6:
      return Jf.call(this, a, b, c, d, f, g)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Hf.n = If;
Hf.ea = Jf;
Gf = Hf;
function Kf(a, b, c) {
  this.q = a;
  this.F = b;
  this.c = c
}
s = Kf.prototype;
s.Y = function(a, b, c, d, f, g) {
  var i = 1 << (c >>> b & 31), j = bd(this.F & i - 1);
  if(0 === (this.F & i)) {
    var k = bd(this.F);
    if(2 * k < this.c.length) {
      a = this.Ga(a);
      b = a.c;
      g.ca = l;
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
      a.F |= i;
      return a
    }
    if(16 <= k) {
      j = Array(32);
      j[c >>> b & 31] = Lf.Y(a, b + 5, c, d, f, g);
      for(f = d = 0;;) {
        if(32 > d) {
          0 !== (this.F >>> d & 1) && (j[d] = this.c[f] != m ? Lf.Y(a, b + 5, K.b(this.c[f]), this.c[f], this.c[f + 1], g) : this.c[f + 1], f += 2), d += 1
        }else {
          break
        }
      }
      return new Mf(a, k + 1, j)
    }
    b = Array(2 * (k + 4));
    Kc(this.c, 0, b, 0, 2 * j);
    b[2 * j] = d;
    b[2 * j + 1] = f;
    Kc(this.c, 2 * j, b, 2 * (j + 1), 2 * (k - j));
    g.ca = l;
    a = this.Ga(a);
    a.c = b;
    a.F |= i;
    return a
  }
  k = this.c[2 * j];
  i = this.c[2 * j + 1];
  if(k == m) {
    return k = i.Y(a, b + 5, c, d, f, g), k === i ? this : Gf.n(this, a, 2 * j + 1, k)
  }
  if(Bf(d, k)) {
    return f === i ? this : Gf.n(this, a, 2 * j + 1, f)
  }
  g.ca = l;
  return Gf.ea(this, a, 2 * j, m, 2 * j + 1, Nf.wa ? Nf.wa(a, b + 5, k, i, c, d, f) : Nf.call(m, a, b + 5, k, i, c, d, f))
};
s.Ta = function() {
  return Of.b ? Of.b(this.c) : Of.call(m, this.c)
};
s.Ga = function(a) {
  if(a === this.q) {
    return this
  }
  var b = bd(this.F), c = Array(0 > b ? 4 : 2 * (b + 1));
  Kc(this.c, 0, c, 0, 2 * b);
  return new Kf(a, this.F, c)
};
s.X = function(a, b, c, d, f) {
  var g = 1 << (b >>> a & 31), i = bd(this.F & g - 1);
  if(0 === (this.F & g)) {
    var j = bd(this.F);
    if(16 <= j) {
      i = Array(32);
      i[b >>> a & 31] = Lf.X(a + 5, b, c, d, f);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.F >>> c & 1) && (i[c] = this.c[d] != m ? Lf.X(a + 5, K.b(this.c[d]), this.c[d], this.c[d + 1], f) : this.c[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new Mf(m, j + 1, i)
    }
    a = Array(2 * (j + 1));
    Kc(this.c, 0, a, 0, 2 * i);
    a[2 * i] = c;
    a[2 * i + 1] = d;
    Kc(this.c, 2 * i, a, 2 * (i + 1), 2 * (j - i));
    f.ca = l;
    return new Kf(m, this.F | g, a)
  }
  j = this.c[2 * i];
  g = this.c[2 * i + 1];
  if(j == m) {
    return j = g.X(a + 5, b, c, d, f), j === g ? this : new Kf(m, this.F, Cf.e(this.c, 2 * i + 1, j))
  }
  if(Bf(c, j)) {
    return d === g ? this : new Kf(m, this.F, Cf.e(this.c, 2 * i + 1, d))
  }
  f.ca = l;
  return new Kf(m, this.F, Cf.ba(this.c, 2 * i, m, 2 * i + 1, Nf.ea ? Nf.ea(a + 5, j, g, b, c, d) : Nf.call(m, a + 5, j, g, b, c, d)))
};
s.la = function(a, b, c, d) {
  var f = 1 << (b >>> a & 31);
  if(0 === (this.F & f)) {
    return d
  }
  var g = bd(this.F & f - 1), f = this.c[2 * g], g = this.c[2 * g + 1];
  return f == m ? g.la(a + 5, b, c, d) : Bf(c, f) ? g : d
};
var Lf = new Kf(m, 0, []);
function Mf(a, b, c) {
  this.q = a;
  this.j = b;
  this.c = c
}
s = Mf.prototype;
s.Y = function(a, b, c, d, f, g) {
  var i = c >>> b & 31, j = this.c[i];
  if(j == m) {
    return a = Gf.n(this, a, i, Lf.Y(a, b + 5, c, d, f, g)), a.j += 1, a
  }
  b = j.Y(a, b + 5, c, d, f, g);
  return b === j ? this : Gf.n(this, a, i, b)
};
s.Ta = function() {
  return Pf.b ? Pf.b(this.c) : Pf.call(m, this.c)
};
s.Ga = function(a) {
  return a === this.q ? this : new Mf(a, this.j, this.c.slice())
};
s.X = function(a, b, c, d, f) {
  var g = b >>> a & 31, i = this.c[g];
  if(i == m) {
    return new Mf(m, this.j + 1, Cf.e(this.c, g, Lf.X(a + 5, b, c, d, f)))
  }
  a = i.X(a + 5, b, c, d, f);
  return a === i ? this : new Mf(m, this.j, Cf.e(this.c, g, a))
};
s.la = function(a, b, c, d) {
  var f = this.c[b >>> a & 31];
  return f != m ? f.la(a + 5, b, c, d) : d
};
function Qf(a, b, c) {
  for(var b = 2 * b, d = 0;;) {
    if(d < b) {
      if(Bf(c, a[d])) {
        return d
      }
      d += 2
    }else {
      return-1
    }
  }
}
function Rf(a, b, c, d) {
  this.q = a;
  this.ka = b;
  this.j = c;
  this.c = d
}
s = Rf.prototype;
s.Y = function(a, b, c, d, f, g) {
  if(c === this.ka) {
    b = Qf(this.c, this.j, d);
    if(-1 === b) {
      if(this.c.length > 2 * this.j) {
        return a = Gf.ea(this, a, 2 * this.j, d, 2 * this.j + 1, f), g.ca = l, a.j += 1, a
      }
      c = this.c.length;
      b = Array(c + 2);
      Kc(this.c, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = f;
      g.ca = l;
      g = this.j + 1;
      a === this.q ? (this.c = b, this.j = g, a = this) : a = new Rf(this.q, this.ka, g, b);
      return a
    }
    return this.c[b + 1] === f ? this : Gf.n(this, a, b + 1, f)
  }
  return(new Kf(a, 1 << (this.ka >>> b & 31), [m, this, m, m])).Y(a, b, c, d, f, g)
};
s.Ta = function() {
  return Of.b ? Of.b(this.c) : Of.call(m, this.c)
};
s.Ga = function(a) {
  if(a === this.q) {
    return this
  }
  var b = Array(2 * (this.j + 1));
  Kc(this.c, 0, b, 0, 2 * this.j);
  return new Rf(a, this.ka, this.j, b)
};
s.X = function(a, b, c, d, f) {
  return b === this.ka ? (a = Qf(this.c, this.j, c), -1 === a ? (a = this.c.length, b = Array(a + 2), Kc(this.c, 0, b, 0, a), b[a] = c, b[a + 1] = d, f.ca = l, new Rf(m, this.ka, this.j + 1, b)) : Q.a(this.c[a], d) ? this : new Rf(m, this.ka, this.j, Cf.e(this.c, a + 1, d))) : (new Kf(m, 1 << (this.ka >>> a & 31), [m, this])).X(a, b, c, d, f)
};
s.la = function(a, b, c, d) {
  a = Qf(this.c, this.j, c);
  return 0 > a ? d : Bf(c, this.c[a]) ? this.c[a + 1] : d
};
var Nf, Sf = m;
function Tf(a, b, c, d, f, g) {
  var i = K.b(b);
  if(i === d) {
    return new Rf(m, i, 2, [b, c, f, g])
  }
  var j = new Af;
  return Lf.X(a, i, b, c, j).X(a, d, f, g, j)
}
function Uf(a, b, c, d, f, g, i) {
  var j = K.b(c);
  if(j === f) {
    return new Rf(m, j, 2, [c, d, g, i])
  }
  var k = new Af;
  return Lf.Y(a, b, j, c, d, k).Y(a, b, f, g, i, k)
}
Sf = function(a, b, c, d, f, g, i) {
  switch(arguments.length) {
    case 6:
      return Tf.call(this, a, b, c, d, f, g);
    case 7:
      return Uf.call(this, a, b, c, d, f, g, i)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Sf.ea = Tf;
Sf.wa = Uf;
Nf = Sf;
function Vf(a, b, c, d, f) {
  this.m = a;
  this.Z = b;
  this.p = c;
  this.$ = d;
  this.l = f;
  this.r = 0;
  this.h = 31850572
}
s = Vf.prototype;
s.J = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Pb(a)
};
s.I = function(a, b) {
  return S(b, a)
};
s.toString = function() {
  return tb(this)
};
s.w = aa();
s.O = function() {
  return this.$ == m ? We([this.Z[this.p], this.Z[this.p + 1]]) : M(this.$)
};
s.R = function() {
  return this.$ == m ? Of.e ? Of.e(this.Z, this.p + 2, m) : Of.call(m, this.Z, this.p + 2, m) : Of.e ? Of.e(this.Z, this.p, P(this.$)) : Of.call(m, this.Z, this.p, P(this.$))
};
s.G = function(a, b) {
  return Rb(a, b)
};
s.D = function(a, b) {
  return new Vf(b, this.Z, this.p, this.$, this.l)
};
s.C = r("m");
var Of, Wf = m;
function Xf(a) {
  return Wf.e(a, 0, m)
}
function Yf(a, b, c) {
  if(c == m) {
    for(c = a.length;;) {
      if(b < c) {
        if(a[b] != m) {
          return new Vf(m, a, b, m, m)
        }
        var d = a[b + 1];
        if(w(d) && (d = d.Ta(), w(d))) {
          return new Vf(m, a, b + 2, d, m)
        }
        b += 2
      }else {
        return m
      }
    }
  }else {
    return new Vf(m, a, b, c, m)
  }
}
Wf = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return Xf.call(this, a);
    case 3:
      return Yf.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Wf.b = Xf;
Wf.e = Yf;
Of = Wf;
function Zf(a, b, c, d, f) {
  this.m = a;
  this.Z = b;
  this.p = c;
  this.$ = d;
  this.l = f;
  this.r = 0;
  this.h = 31850572
}
s = Zf.prototype;
s.J = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Pb(a)
};
s.I = function(a, b) {
  return S(b, a)
};
s.toString = function() {
  return tb(this)
};
s.w = aa();
s.O = function() {
  return M(this.$)
};
s.R = function() {
  return Pf.n ? Pf.n(m, this.Z, this.p, P(this.$)) : Pf.call(m, m, this.Z, this.p, P(this.$))
};
s.G = function(a, b) {
  return Rb(a, b)
};
s.D = function(a, b) {
  return new Zf(b, this.Z, this.p, this.$, this.l)
};
s.C = r("m");
var Pf, $f = m;
function ag(a) {
  return $f.n(m, a, 0, m)
}
function bg(a, b, c, d) {
  if(d == m) {
    for(d = b.length;;) {
      if(c < d) {
        var f = b[c];
        if(w(f) && (f = f.Ta(), w(f))) {
          return new Zf(a, b, c + 1, f, m)
        }
        c += 1
      }else {
        return m
      }
    }
  }else {
    return new Zf(a, b, c, d, m)
  }
}
$f = function(a, b, c, d) {
  switch(arguments.length) {
    case 1:
      return ag.call(this, a);
    case 4:
      return bg.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
$f.b = ag;
$f.n = bg;
Pf = $f;
function cg(a, b, c, d, f, g) {
  this.m = a;
  this.j = b;
  this.root = c;
  this.P = d;
  this.S = f;
  this.l = g;
  this.r = 4;
  this.h = 16123663
}
s = cg.prototype;
s.va = function() {
  return new dg({}, this.root, this.j, this.P, this.S)
};
s.J = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = sd(a)
};
s.B = function(a, b) {
  return a.v(a, b, m)
};
s.v = function(a, b, c) {
  return b == m ? this.P ? this.S : c : this.root == m ? c : this.root.la(0, K.b(b), b, c)
};
s.ja = function(a, b, c) {
  if(b == m) {
    var d = this.P;
    return(d ? c === this.S : d) ? a : new cg(this.m, this.P ? this.j : this.j + 1, this.root, l, c, m)
  }
  d = new Af;
  c = (this.root == m ? Lf : this.root).X(0, K.b(b), b, c, d);
  return c === this.root ? a : new cg(this.m, d.ca ? this.j + 1 : this.j, c, this.P, this.S, m)
};
s.Xa = function(a, b) {
  return b == m ? this.P : this.root == m ? p : this.root.la(0, K.b(b), b, Lc) !== Lc
};
var eg = m, eg = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.B(this, b);
    case 3:
      return this.v(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
s = cg.prototype;
s.call = eg;
s.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
s.I = function(a, b) {
  return Gc(b) ? a.ja(a, D.a(b, 0), D.a(b, 1)) : Wc.e(Ca, a, b)
};
s.toString = function() {
  return tb(this)
};
s.w = function() {
  if(0 < this.j) {
    var a = this.root != m ? this.root.Ta() : m;
    return this.P ? S(We([m, this.S]), a) : a
  }
  return m
};
s.z = r("j");
s.G = function(a, b) {
  return jf(a, b)
};
s.D = function(a, b) {
  return new cg(b, this.j, this.root, this.P, this.S, this.l)
};
s.C = r("m");
var nf = new cg(m, 0, m, p, m, 0);
function dg(a, b, c, d, f) {
  this.q = a;
  this.root = b;
  this.count = c;
  this.P = d;
  this.S = f;
  this.r = 56;
  this.h = 258
}
s = dg.prototype;
s.Aa = function(a, b, c) {
  return fg(a, b, c)
};
s.pa = function(a, b) {
  var c;
  a: {
    if(a.q) {
      c = b ? ((c = b.h & 2048) ? c : b.lc) || (b.h ? 0 : y(Ra, b)) : y(Ra, b);
      if(c) {
        c = fg(a, td.b ? td.b(b) : td.call(m, b), ud.b ? ud.b(b) : ud.call(m, b));
        break a
      }
      c = L(b);
      for(var d = a;;) {
        var f = M(c);
        if(w(f)) {
          c = P(c), d = fg(d, td.b ? td.b(f) : td.call(m, f), ud.b ? ud.b(f) : ud.call(m, f))
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
s.Ba = function(a) {
  var b;
  a.q ? (a.q = m, b = new cg(m, a.count, a.root, a.P, a.S, m)) : e(Error("persistent! called twice"));
  return b
};
s.B = function(a, b) {
  return b == m ? this.P ? this.S : m : this.root == m ? m : this.root.la(0, K.b(b), b)
};
s.v = function(a, b, c) {
  return b == m ? this.P ? this.S : c : this.root == m ? c : this.root.la(0, K.b(b), b, c)
};
s.z = function() {
  if(this.q) {
    return this.count
  }
  e(Error("count after persistent!"))
};
function fg(a, b, c) {
  if(a.q) {
    if(b == m) {
      a.S !== c && (a.S = c), a.P || (a.count += 1, a.P = l)
    }else {
      var d = new Af, b = (a.root == m ? Lf : a.root).Y(a.q, 0, K.b(b), b, c, d);
      b !== a.root && (a.root = b);
      d.ca && (a.count += 1)
    }
    return a
  }
  e(Error("assoc! after persistent!"))
}
var tc;
function gg(a) {
  for(var b = L(a), c = nb(nf);;) {
    if(b) {
      var a = P(P(b)), d = M(b), b = Zb(b), c = qb(c, d, b), b = a
    }else {
      return pb(c)
    }
  }
}
function hg(a) {
  var b = m;
  0 < arguments.length && (b = R(Array.prototype.slice.call(arguments, 0), 0));
  return gg.call(this, b)
}
hg.o = 0;
hg.k = function(a) {
  a = L(a);
  return gg(a)
};
hg.g = gg;
tc = hg;
function td(a) {
  return Sa(a)
}
function ud(a) {
  return Ta(a)
}
function ig(a, b, c) {
  this.m = a;
  this.Ha = b;
  this.l = c;
  this.r = 4;
  this.h = 15077647
}
ig.prototype.va = function() {
  return new jg(nb(this.Ha))
};
ig.prototype.J = function(a) {
  var b = this.l;
  if(b != m) {
    return b
  }
  a: {
    b = 0;
    for(a = L(a);;) {
      if(a) {
        var c = M(a), b = (b + K.b(c)) % 4503599627370496, a = P(a)
      }else {
        break a
      }
    }
    b = h
  }
  return this.l = b
};
ig.prototype.B = function(a, b) {
  return a.v(a, b, m)
};
ig.prototype.v = function(a, b, c) {
  return w(Oa(this.Ha, b)) ? b : c
};
var kg = m, kg = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.B(this, b);
    case 3:
      return this.v(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
s = ig.prototype;
s.call = kg;
s.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
s.I = function(a, b) {
  return new ig(this.m, qc.e(this.Ha, b, m), m)
};
s.toString = function() {
  return tb(this)
};
s.w = function() {
  return L(le.a(M, this.Ha))
};
s.z = function() {
  return Ba(this.Ha)
};
s.G = function(a, b) {
  var c;
  c = b == m ? p : b ? ((c = b.h & 4096) ? c : b.Jd) ? l : b.h ? p : y(Ua, b) : y(Ua, b);
  return c ? (c = T(a) === T(b)) ? ie(function(b) {
    return mc.e(a, b, Lc) === Lc ? p : l
  }, b) : c : c
};
s.D = function(a, b) {
  return new ig(b, this.Ha, this.l)
};
s.C = r("m");
var lg = new ig(m, yf, 0);
function mg(a, b) {
  var c = a.length;
  if(c / 2 <= wf) {
    return c = b ? a : a.slice(), new ig(m, va.a ? va.a(c, l) : va.call(m, c, l), m)
  }
  for(var d = 0, f = nb(lg);;) {
    if(d < c) {
      var g = d + 2, f = ob(f, a[d]), d = g
    }else {
      return pb(f)
    }
  }
}
function jg(a) {
  this.ua = a;
  this.h = 259;
  this.r = 136
}
var ng = m, ng = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ka.e(this.ua, b, Lc) === Lc ? m : b;
    case 3:
      return Ka.e(this.ua, b, Lc) === Lc ? c : b
  }
  e(Error("Invalid arity: " + arguments.length))
};
s = jg.prototype;
s.call = ng;
s.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
s.B = function(a, b) {
  return a.v(a, b, m)
};
s.v = function(a, b, c) {
  return Ka.e(this.ua, b, Lc) === Lc ? c : b
};
s.z = function() {
  return T(this.ua)
};
s.pa = function(a, b) {
  this.ua = qb(this.ua, b, m);
  return a
};
s.Ba = function() {
  return new ig(m, pb(this.ua), m)
};
var og, pg = m;
function qg(a) {
  var b = a instanceof xb;
  if(b ? a.c.length < wf : b) {
    for(var a = a.c, b = a.length, c = Array(2 * b), d = 0;;) {
      if(d < b) {
        var f = 2 * d;
        c[f] = a[d];
        c[f + 1] = m;
        d += 1
      }else {
        return mg.a ? mg.a(c, l) : mg.call(m, c, l)
      }
    }
  }else {
    for(c = nb(lg);;) {
      if(a != m) {
        b = a.fa(a), c = c.pa(c, a.O(a)), a = b
      }else {
        return c.Ba(c)
      }
    }
  }
}
function rg(a) {
  var b = m;
  0 < arguments.length && (b = R(Array.prototype.slice.call(arguments, 0), 0));
  return qg.call(this, b)
}
rg.o = 0;
rg.k = function(a) {
  a = L(a);
  return qg(a)
};
rg.g = qg;
pg = function(a) {
  switch(arguments.length) {
    case 0:
      return lg;
    default:
      return rg.g(R(arguments, 0))
  }
  e(Error("Invalid arity: " + arguments.length))
};
pg.o = 0;
pg.k = rg.k;
pg.A = function() {
  return lg
};
pg.g = rg.g;
og = pg;
function sg(a) {
  return function c(a, f) {
    return new Dd(m, p, function() {
      return function(a, d) {
        for(;;) {
          var f = a, k = ic.e(f, 0, m);
          if(f = L(f)) {
            if(mc.e(d, k, Lc) === Lc) {
              return S(k, c(N(f), $b.a(d, k)))
            }
            k = N(f);
            f = d;
            a = k;
            d = f
          }else {
            return m
          }
        }
      }.call(m, a, f)
    }, m)
  }(a, lg)
}
function tg(a) {
  if(a && w(w(m) ? m : a.Tb)) {
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
function ug(a) {
  if(a && w(w(m) ? m : a.Tb)) {
    return a.Ia
  }
  if(Nc(a)) {
    var b = a.lastIndexOf("/", a.length - 2);
    return-1 < b ? md.e(a, 2, b) : m
  }
  e(Error([J("Doesn't support namespace: "), J(a)].join("")))
}
function vg(a, b, c, d, f) {
  this.m = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.l = f;
  this.r = 0;
  this.h = 32375006
}
s = vg.prototype;
s.J = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Pb(a)
};
s.fa = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new vg(this.m, this.start + this.step, this.end, this.step, m) : m : this.start + this.step > this.end ? new vg(this.m, this.start + this.step, this.end, this.step, m) : m
};
s.I = function(a, b) {
  return S(b, a)
};
s.toString = function() {
  return tb(this)
};
s.xa = function(a, b) {
  return Db.a(a, b)
};
s.ya = function(a, b, c) {
  return Db.e(a, b, c)
};
s.w = function(a) {
  return 0 < this.step ? this.start < this.end ? a : m : this.start > this.end ? a : m
};
s.z = function(a) {
  return xa(a.w(a)) ? 0 : Math.ceil((this.end - this.start) / this.step)
};
s.O = r("start");
s.R = function(a) {
  return a.w(a) != m ? new vg(this.m, this.start + this.step, this.end, this.step, m) : yb
};
s.G = function(a, b) {
  return Rb(a, b)
};
s.D = function(a, b) {
  return new vg(b, this.start, this.end, this.step, this.l)
};
s.C = r("m");
s.t = function(a, b) {
  if(b < a.z(a)) {
    return this.start + b * this.step
  }
  var c = this.start > this.end;
  if(c ? 0 === this.step : c) {
    return this.start
  }
  e(Error("Index out of bounds"))
};
s.N = function(a, b, c) {
  c = b < a.z(a) ? this.start + b * this.step : ((a = this.start > this.end) ? 0 === this.step : a) ? this.start : c;
  return c
};
var wg, xg = m;
function yg() {
  return xg.e(0, Number.MAX_VALUE, 1)
}
function zg(a) {
  return xg.e(0, a, 1)
}
function Ag(a, b) {
  return xg.e(a, b, 1)
}
function Bg(a, b, c) {
  return new vg(m, a, b, c, m)
}
xg = function(a, b, c) {
  switch(arguments.length) {
    case 0:
      return yg.call(this);
    case 1:
      return zg.call(this, a);
    case 2:
      return Ag.call(this, a, b);
    case 3:
      return Bg.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
xg.A = yg;
xg.b = zg;
xg.a = Ag;
xg.e = Bg;
wg = xg;
var Cg, Dg = m;
function Eg(a) {
  for(;;) {
    if(L(a)) {
      a = P(a)
    }else {
      return m
    }
  }
}
function Fg(a, b) {
  for(;;) {
    var c = L(b);
    if(w(c ? 0 < a : c)) {
      var c = a - 1, d = P(b), a = c, b = d
    }else {
      return m
    }
  }
}
Dg = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Eg.call(this, a);
    case 2:
      return Fg.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Dg.b = Eg;
Dg.a = Fg;
Cg = Dg;
var Gg, Hg = m;
function Ig(a) {
  Cg.b(a);
  return a
}
function Jg(a, b) {
  Cg.a(a, b);
  return b
}
Hg = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Ig.call(this, a);
    case 2:
      return Jg.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Hg.b = Ig;
Hg.a = Jg;
Gg = Hg;
function Kg(a, b) {
  var c = a.exec(b);
  return c == m ? m : 1 === T(c) ? M(c) : Xe(c)
}
function Lg(a, b, c, d, f, g, i) {
  G(a, c);
  L(i) && (b.e ? b.e(M(i), a, g) : b.call(m, M(i), a, g));
  for(var c = L(P(i)), i = m, j = 0, k = 0;;) {
    if(k < j) {
      var n = i.t(i, k);
      G(a, d);
      b.e ? b.e(n, a, g) : b.call(m, n, a, g);
      k += 1
    }else {
      if(c = L(c)) {
        i = c, Hc(i) ? (c = H(i), k = I(i), i = c, j = T(c), c = k) : (c = M(i), G(a, d), b.e ? b.e(c, a, g) : b.call(m, c, a, g), c = P(i), i = m, j = 0), k = 0
      }else {
        break
      }
    }
  }
  return G(a, f)
}
function Mg(a, b) {
  for(var c = L(b), d = m, f = 0, g = 0;;) {
    if(g < f) {
      var i = d.t(d, g);
      G(a, i);
      g += 1
    }else {
      if(c = L(c)) {
        d = c, Hc(d) ? (c = H(d), f = I(d), d = c, i = T(c), c = f, f = i) : (i = M(d), G(a, i), c = P(d), d = m, f = 0), g = 0
      }else {
        return m
      }
    }
  }
}
function Ng(a, b) {
  var c = m;
  1 < arguments.length && (c = R(Array.prototype.slice.call(arguments, 1), 0));
  return Mg.call(this, a, c)
}
Ng.o = 1;
Ng.k = function(a) {
  var b = M(a), a = N(a);
  return Mg(b, a)
};
Ng.g = Mg;
var Og = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"}, Qg = function Pg(b, c, d) {
  if(b == m) {
    return G(c, "nil")
  }
  if(h === b) {
    return G(c, "#<undefined>")
  }
  var f;
  f = mc.a(d, "\ufdd0:meta");
  w(f) && (f = b ? ((f = b.h & 131072) ? f : b.mc) ? l : b.h ? p : y(Xa, b) : y(Xa, b), f = w(f) ? Ac(b) : f);
  w(f) && (G(c, "^"), Pg(Ac(b), c, d), G(c, " "));
  if(b == m) {
    return G(c, "nil")
  }
  if(b.Ca) {
    return b.Pa(b, c, d)
  }
  if(f = b) {
    f = (f = b.h & 2147483648) ? f : b.M
  }
  return f ? b.K(b, c, d) : ((f = (b == m ? m : b.constructor) === Boolean) ? f : "number" === typeof b) ? G(c, "" + J(b)) : b instanceof Array ? Lg(c, Pg, "#<Array [", ", ", "]>", d, b) : v(b) ? Nc(b) ? (G(c, ":"), d = ug(b), w(d) && Ng.g(c, R(["" + J(d), "/"], 0)), G(c, tg(b))) : b instanceof ub ? (d = ug(b), w(d) && Ng.g(c, R(["" + J(d), "/"], 0)), G(c, tg(b))) : w((new V("\ufdd0:readably")).call(m, d)) ? G(c, [J('"'), J(b.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(b) {
    return Og[b]
  })), J('"')].join("")) : G(c, b) : wc(b) ? Ng.g(c, R(["#<", "" + J(b), ">"], 0)) : b instanceof Date ? (d = function(b, c) {
    for(var d = "" + J(b);;) {
      if(T(d) < c) {
        d = [J("0"), J(d)].join("")
      }else {
        return d
      }
    }
  }, Ng.g(c, R(['#inst "', "" + J(b.getUTCFullYear()), "-", d(b.getUTCMonth() + 1, 2), "-", d(b.getUTCDate(), 2), "T", d(b.getUTCHours(), 2), ":", d(b.getUTCMinutes(), 2), ":", d(b.getUTCSeconds(), 2), ".", d(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : w(b instanceof RegExp) ? Ng.g(c, R(['#"', b.source, '"'], 0)) : Ng.g(c, R(["#<", "" + J(b), ">"], 0))
};
function Rg(a) {
  var b = ua(), c = a == m;
  if(c ? c : xa(L(a))) {
    b = ""
  }else {
    var c = J, d = new sa, f = new sb(d);
    a: {
      Qg(M(a), f, b);
      for(var a = L(P(a)), g = m, i = 0, j = 0;;) {
        if(j < i) {
          var k = g.t(g, j);
          G(f, " ");
          Qg(k, f, b);
          j += 1
        }else {
          if(a = L(a)) {
            g = a, Hc(g) ? (a = H(g), i = I(g), g = a, k = T(a), a = i, i = k) : (k = M(g), G(f, " "), Qg(k, f, b), a = P(g), g = m, i = 0), j = 0
          }else {
            break a
          }
        }
      }
    }
    lb(f);
    b = "" + c(d)
  }
  return b
}
function Sg(a) {
  var b = m;
  0 < arguments.length && (b = R(Array.prototype.slice.call(arguments, 0), 0));
  return Rg(b)
}
Sg.o = 0;
Sg.k = function(a) {
  a = L(a);
  return Rg(a)
};
Sg.g = function(a) {
  return Rg(a)
};
xb.prototype.M = l;
xb.prototype.K = function(a, b, c) {
  return Lg(b, Qg, "(", " ", ")", c, a)
};
Ic.prototype.M = l;
Ic.prototype.K = function(a, b, c) {
  return Lg(b, Qg, "(", " ", ")", c, a)
};
uf.prototype.M = l;
uf.prototype.K = function(a, b, c) {
  return Lg(b, function(a) {
    return Lg(b, Qg, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
Dd.prototype.M = l;
Dd.prototype.K = function(a, b, c) {
  return Lg(b, Qg, "(", " ", ")", c, a)
};
Vf.prototype.M = l;
Vf.prototype.K = function(a, b, c) {
  return Lg(b, Qg, "(", " ", ")", c, a)
};
Jc.prototype.M = l;
Jc.prototype.K = function(a, b, c) {
  return Lg(b, Qg, "(", " ", ")", c, a)
};
cg.prototype.M = l;
cg.prototype.K = function(a, b, c) {
  return Lg(b, function(a) {
    return Lg(b, Qg, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
ig.prototype.M = l;
ig.prototype.K = function(a, b, c) {
  return Lg(b, Qg, "#{", " ", "}", c, a)
};
Pe.prototype.M = l;
Pe.prototype.K = function(a, b, c) {
  return Lg(b, Qg, "[", " ", "]", c, a)
};
vd.prototype.M = l;
vd.prototype.K = function(a, b, c) {
  return Lg(b, Qg, "(", " ", ")", c, a)
};
wd.prototype.M = l;
wd.prototype.K = function(a, b) {
  return G(b, "()")
};
zd.prototype.M = l;
zd.prototype.K = function(a, b, c) {
  return Lg(b, Qg, "(", " ", ")", c, a)
};
vg.prototype.M = l;
vg.prototype.K = function(a, b, c) {
  return Lg(b, Qg, "(", " ", ")", c, a)
};
Zf.prototype.M = l;
Zf.prototype.K = function(a, b, c) {
  return Lg(b, Qg, "(", " ", ")", c, a)
};
pf.prototype.M = l;
pf.prototype.K = function(a, b, c) {
  return Lg(b, function(a) {
    return Lg(b, Qg, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
Pe.prototype.hc = l;
Pe.prototype.ic = function(a, b) {
  return Pc.a(a, b)
};
function Tg(a, b, c, d) {
  this.state = a;
  this.m = b;
  this.Ac = c;
  this.Bc = d;
  this.h = 2153938944;
  this.r = 2
}
s = Tg.prototype;
s.J = function(a) {
  return fa(a)
};
s.Ub = function(a, b, c) {
  for(var d = L(this.Bc), f = m, g = 0, i = 0;;) {
    if(i < g) {
      var j = f.t(f, i), k = ic.e(j, 0, m), j = ic.e(j, 1, m);
      j.n ? j.n(k, a, b, c) : j.call(m, k, a, b, c);
      i += 1
    }else {
      if(d = L(d)) {
        Hc(d) ? (f = H(d), d = I(d), k = f, g = T(f), f = k) : (f = M(d), k = ic.e(f, 0, m), j = ic.e(f, 1, m), j.n ? j.n(k, a, b, c) : j.call(m, k, a, b, c), d = P(d), f = m, g = 0), i = 0
      }else {
        return m
      }
    }
  }
};
s.K = function(a, b, c) {
  G(b, "#<Atom: ");
  Qg(this.state, b, c);
  return G(b, ">")
};
s.C = r("m");
s.jc = r("state");
s.G = function(a, b) {
  return a === b
};
var Ug, Vg = m;
function Wg(a) {
  return new Tg(a, m, m, m)
}
function Xg(a, b) {
  var c;
  c = b == m ? p : b ? ((c = b.h & 64) ? c : b.zb) ? l : b.h ? p : y(Ia, b) : y(Ia, b);
  var d = c ? yc.a(tc, b) : b;
  c = mc.a(d, "\ufdd0:validator");
  d = mc.a(d, "\ufdd0:meta");
  return new Tg(a, d, c, m)
}
function Yg(a, b) {
  var c = m;
  1 < arguments.length && (c = R(Array.prototype.slice.call(arguments, 1), 0));
  return Xg.call(this, a, c)
}
Yg.o = 1;
Yg.k = function(a) {
  var b = M(a), a = N(a);
  return Xg(b, a)
};
Yg.g = Xg;
Vg = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Wg.call(this, a);
    default:
      return Yg.g(a, R(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Vg.o = 1;
Vg.k = Yg.k;
Vg.b = Wg;
Vg.g = Yg.g;
Ug = Vg;
function Zg(a, b) {
  var c = a.Ac;
  w(c) && !w(c.b ? c.b(b) : c.call(m, b)) && e(Error([J("Assert failed: "), J("Validator rejected reference state"), J("\n"), J(Sg.g(R([zc(Qb(new ub(m, "validate", "validate", 1233162959, m), new ub(m, "new-value", "new-value", 972165309, m)), tc("\ufdd0:line", 6673, "\ufdd0:column", 13))], 0)))].join("")));
  c = a.state;
  a.state = b;
  mb(a, c, b);
  return b
}
var $g, ah = m;
function bh(a, b) {
  return Zg(a, b.b ? b.b(a.state) : b.call(m, a.state))
}
function ch(a, b, c) {
  return Zg(a, b.a ? b.a(a.state, c) : b.call(m, a.state, c))
}
function dh(a, b, c, d) {
  return Zg(a, b.e ? b.e(a.state, c, d) : b.call(m, a.state, c, d))
}
function eh(a, b, c, d, f) {
  return Zg(a, b.n ? b.n(a.state, c, d, f) : b.call(m, a.state, c, d, f))
}
function fh(a, b, c, d, f, g) {
  return Zg(a, yc.g(b, a.state, c, d, f, R([g], 0)))
}
function gh(a, b, c, d, f, g) {
  var i = m;
  5 < arguments.length && (i = R(Array.prototype.slice.call(arguments, 5), 0));
  return fh.call(this, a, b, c, d, f, i)
}
gh.o = 5;
gh.k = function(a) {
  var b = M(a), a = P(a), c = M(a), a = P(a), d = M(a), a = P(a), f = M(a), a = P(a), g = M(a), a = N(a);
  return fh(b, c, d, f, g, a)
};
gh.g = fh;
ah = function(a, b, c, d, f, g) {
  switch(arguments.length) {
    case 2:
      return bh.call(this, a, b);
    case 3:
      return ch.call(this, a, b, c);
    case 4:
      return dh.call(this, a, b, c, d);
    case 5:
      return eh.call(this, a, b, c, d, f);
    default:
      return gh.g(a, b, c, d, f, R(arguments, 5))
  }
  e(Error("Invalid arity: " + arguments.length))
};
ah.o = 5;
ah.k = gh.k;
ah.a = bh;
ah.e = ch;
ah.n = dh;
ah.ba = eh;
ah.g = gh.g;
$g = ah;
var hh, ih, jh, kh;
function lh() {
  return ca.navigator ? ca.navigator.userAgent : m
}
kh = jh = ih = hh = p;
var mh;
if(mh = lh()) {
  var nh = ca.navigator;
  hh = 0 == mh.indexOf("Opera");
  ih = !hh && -1 != mh.indexOf("MSIE");
  jh = !hh && -1 != mh.indexOf("WebKit");
  kh = !hh && !jh && "Gecko" == nh.product
}
var oh = hh, X = ih, ph = kh, qh = jh, rh = ca.navigator, sh = -1 != (rh && rh.platform || "").indexOf("Mac"), th;
a: {
  var uh = "", vh;
  if(oh && ca.opera) {
    var wh = ca.opera.version, uh = "function" == typeof wh ? wh() : wh
  }else {
    if(ph ? vh = /rv\:([^\);]+)(\)|;)/ : X ? vh = /MSIE\s+([^\);]+)(\)|;)/ : qh && (vh = /WebKit\/(\S+)/), vh) {
      var xh = vh.exec(lh()), uh = xh ? xh[1] : ""
    }
  }
  if(X) {
    var yh, zh = ca.document;
    yh = zh ? zh.documentMode : h;
    if(yh > parseFloat(uh)) {
      th = String(yh);
      break a
    }
  }
  th = uh
}
var Ah = {};
function Bh(a) {
  var b;
  if(!(b = Ah[a])) {
    b = 0;
    for(var c = ka(String(th)).split("."), d = ka(String(a)).split("."), f = Math.max(c.length, d.length), g = 0;0 == b && g < f;g++) {
      var i = c[g] || "", j = d[g] || "", k = RegExp("(\\d*)(\\D*)", "g"), n = RegExp("(\\d*)(\\D*)", "g");
      do {
        var q = k.exec(i) || ["", "", ""], u = n.exec(j) || ["", "", ""];
        if(0 == q[0].length && 0 == u[0].length) {
          break
        }
        b = ((0 == q[1].length ? 0 : parseInt(q[1], 10)) < (0 == u[1].length ? 0 : parseInt(u[1], 10)) ? -1 : (0 == q[1].length ? 0 : parseInt(q[1], 10)) > (0 == u[1].length ? 0 : parseInt(u[1], 10)) ? 1 : 0) || ((0 == q[2].length) < (0 == u[2].length) ? -1 : (0 == q[2].length) > (0 == u[2].length) ? 1 : 0) || (q[2] < u[2] ? -1 : q[2] > u[2] ? 1 : 0)
      }while(0 == b)
    }
    b = Ah[a] = 0 <= b
  }
  return b
}
var Ch = {};
function Dh() {
  return Ch[9] || (Ch[9] = X && !!document.documentMode && 9 <= document.documentMode)
}
;function Eh(a, b, c, d, f) {
  if(!X && (!qh || !Bh("525"))) {
    return l
  }
  if(sh && f) {
    return Fh(a)
  }
  if(f && !d || !c && (17 == b || 18 == b) || X && d && b == a) {
    return p
  }
  switch(a) {
    case 13:
      return!(X && Dh());
    case 27:
      return!qh
  }
  return Fh(a)
}
function Fh(a) {
  if(48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || qh && 0 == a) {
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
      return p
  }
}
function Gh(a) {
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
;var Hh;
!X || Dh();
!ph && !X || X && Dh() || ph && Bh("1.9.1");
var Ih = X && !Bh("9");
function Jh(a, b) {
  var c = b || document;
  return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : c.getElementsByClassName ? c.getElementsByClassName(a) : Kh("*", a, b)
}
function Lh(a) {
  var b = document, c = m;
  return(c = b.querySelectorAll && b.querySelector ? b.querySelector("." + a) : Jh(a, h)[0]) || m
}
function Kh(a, b, c) {
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
      a = i.className, "function" == typeof a.split && 0 <= na(a.split(/\s+/), b) && (d[f++] = i)
    }
    d.length = f;
    return d
  }
  return c
}
function Mh(a, b) {
  a.appendChild(b)
}
function Nh(a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : m
}
var Oh = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, Ph = {IMG:" ", BR:"\n"};
function Qh(a, b, c) {
  if(!(a.nodeName in Oh)) {
    if(3 == a.nodeType) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in Ph) {
        b.push(Ph[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          Qh(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function Rh(a) {
  this.Bb = a || ca.document || document
}
s = Rh.prototype;
s.Yb = function(a) {
  return v(a) ? this.Bb.getElementById(a) : a
};
s.createElement = function(a) {
  return this.Bb.createElement(a)
};
s.createTextNode = function(a) {
  return this.Bb.createTextNode(a)
};
s.appendChild = Mh;
s.append = function(a, b) {
  function c(a) {
    a && f.appendChild(v(a) ? d.createTextNode(a) : a)
  }
  for(var d = 9 == a.nodeType ? a : a.ownerDocument || a.document, f = a, g = arguments, i = 1;i < g.length;i++) {
    var j = g[i], k = j, n = t(k);
    if(("array" == n || "object" == n && "number" == typeof k.length) && !(ea(j) && 0 < j.nodeType)) {
      k = oa;
      a: {
        if((n = j) && "number" == typeof n.length) {
          if(ea(n)) {
            n = "function" == typeof n.item || "string" == typeof n.item;
            break a
          }
          if(da(n)) {
            n = "function" == typeof n.item;
            break a
          }
        }
        n = p
      }
      if(n) {
        if(n = j.length, 0 < n) {
          for(var q = Array(n), u = 0;u < n;u++) {
            q[u] = j[u]
          }
          j = q
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
function Sh(a, b, c) {
  if(ya(b)) {
    return a.replace(RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), c)
  }
  if(w(b.hasOwnProperty("source"))) {
    return a.replace(RegExp(b.source, "g"), c)
  }
  e([J("Invalid match arg: "), J(b)].join(""))
}
var Th, Uh = m;
function Vh(a, b) {
  return Xe(("" + J(a)).split(b))
}
function Wh(a, b, c) {
  if(1 > c) {
    return Xe(("" + J(a)).split(b))
  }
  for(var d = Ve;;) {
    if(Q.a(c, 1)) {
      return $b.a(d, a)
    }
    var f = Kg(b, a);
    if(w(f)) {
      var g = f, f = a.indexOf(g), g = a.substring(f + T(g)), c = c - 1, d = $b.a(d, a.substring(0, f)), a = g
    }else {
      return $b.a(d, a)
    }
  }
}
Uh = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Vh.call(this, a, b);
    case 3:
      return Wh.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Uh.a = Vh;
Uh.e = Wh;
Th = Uh;
function Xh(a) {
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
;!X || Dh();
var Yh = !X || Dh(), Zh = X && !Bh("8");
!qh || Bh("528");
ph && Bh("1.9b") || X && Bh("8") || oh && Bh("9.5") || qh && Bh("528");
ph && !Bh("8") || X && Bh("9");
function $h() {
  this.Xb = p
}
;function ai(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
ai.prototype.Ja = p;
ai.prototype.defaultPrevented = p;
ai.prototype.eb = l;
ai.prototype.preventDefault = function() {
  this.defaultPrevented = l;
  this.eb = p
};
var bi = {Ic:"click", Nc:"dblclick", gd:"mousedown", ld:"mouseup", kd:"mouseover", jd:"mouseout", hd:"mousemove", xd:"selectstart", bd:"keypress", ad:"keydown", cd:"keyup", Gc:"blur", Vc:"focus", Oc:"deactivate", Wc:X ? "focusin" : "DOMFocusIn", Xc:X ? "focusout" : "DOMFocusOut", Hc:"change", wd:"select", yd:"submit", $c:"input", sd:"propertychange", Sc:"dragstart", Pc:"dragenter", Rc:"dragover", Qc:"dragleave", Tc:"drop", Cd:"touchstart", Bd:"touchmove", Ad:"touchend", zd:"touchcancel", Kc:"contextmenu", 
Uc:"error", Zc:"help", dd:"load", ed:"losecapture", td:"readystatechange", ud:"resize", vd:"scroll", Ed:"unload", Yc:"hashchange", od:"pagehide", pd:"pageshow", rd:"popstate", Lc:"copy", qd:"paste", Mc:"cut", Dc:"beforecopy", Ec:"beforecut", Fc:"beforepaste", nd:"online", md:"offline", fd:"message", Jc:"connect", Dd:qh ? "webkitTransitionEnd" : oh ? "oTransitionEnd" : "transitionend"};
function ci(a) {
  ci[" "](a);
  return a
}
ci[" "] = function() {
};
function di(a, b) {
  a && this.Sa(a, b)
}
ja(di, ai);
s = di.prototype;
s.target = m;
s.relatedTarget = m;
s.offsetX = 0;
s.offsetY = 0;
s.clientX = 0;
s.clientY = 0;
s.screenX = 0;
s.screenY = 0;
s.button = 0;
s.keyCode = 0;
s.charCode = 0;
s.ctrlKey = p;
s.altKey = p;
s.shiftKey = p;
s.metaKey = p;
s.wc = p;
s.Eb = m;
s.Sa = function(a, b) {
  var c = this.type = a.type;
  ai.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(ph) {
      var f;
      a: {
        try {
          ci(d.nodeName);
          f = l;
          break a
        }catch(g) {
        }
        f = p
      }
      f || (d = m)
    }
  }else {
    "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement)
  }
  this.relatedTarget = d;
  this.offsetX = qh || a.offsetX !== h ? a.offsetX : a.layerX;
  this.offsetY = qh || a.offsetY !== h ? a.offsetY : a.layerY;
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
  this.wc = sh ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.Eb = a;
  a.defaultPrevented && this.preventDefault();
  delete this.Ja
};
s.preventDefault = function() {
  di.zc.preventDefault.call(this);
  var a = this.Eb;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = p, Zh) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
function ei() {
}
var fi = 0;
s = ei.prototype;
s.key = 0;
s.La = p;
s.jb = p;
s.Sa = function(a, b, c, d, f, g) {
  da(a) ? this.$b = l : a && a.handleEvent && da(a.handleEvent) ? this.$b = p : e(Error("Invalid listener argument"));
  this.Ua = a;
  this.dc = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.Ib = g;
  this.jb = p;
  this.key = ++fi;
  this.La = p
};
s.handleEvent = function(a) {
  return this.$b ? this.Ua.call(this.Ib || this.src, a) : this.Ua.handleEvent.call(this.Ua, a)
};
var gi = {}, hi = {}, ii = {}, ji = {};
function ki(a, b, c, d, f) {
  if(b) {
    if("array" == t(b)) {
      for(var g = 0;g < b.length;g++) {
        ki(a, b[g], c, d, f)
      }
      return m
    }
    var d = !!d, i = hi;
    b in i || (i[b] = {W:0, U:0});
    i = i[b];
    d in i || (i[d] = {W:0, U:0}, i.W++);
    var i = i[d], j = fa(a), k;
    i.U++;
    if(i[j]) {
      k = i[j];
      for(g = 0;g < k.length;g++) {
        if(i = k[g], i.Ua == c && i.Ib == f) {
          if(i.La) {
            break
          }
          return k[g].key
        }
      }
    }else {
      k = i[j] = [], i.W++
    }
    var n = li, q = Yh ? function(a) {
      return n.call(q.src, q.key, a)
    } : function(a) {
      a = n.call(q.src, q.key, a);
      if(!a) {
        return a
      }
    }, g = q;
    g.src = a;
    i = new ei;
    i.Sa(c, g, a, b, d, f);
    c = i.key;
    g.key = c;
    k.push(i);
    gi[c] = i;
    ii[j] || (ii[j] = []);
    ii[j].push(i);
    a.addEventListener ? (a == ca || !a.Wb) && a.addEventListener(b, g, d) : a.attachEvent(b in ji ? ji[b] : ji[b] = "on" + b, g);
    return c
  }
  e(Error("Invalid event type"))
}
function mi(a, b, c, d, f) {
  if("array" == t(b)) {
    for(var g = 0;g < b.length;g++) {
      mi(a, b[g], c, d, f)
    }
    return m
  }
  a = ki(a, b, c, d, f);
  gi[a].jb = l;
  return a
}
function ni(a, b, c, d, f) {
  if("array" == t(b)) {
    for(var g = 0;g < b.length;g++) {
      ni(a, b[g], c, d, f)
    }
  }else {
    d = !!d;
    a: {
      g = hi;
      if(b in g && (g = g[b], d in g && (g = g[d], a = fa(a), g[a]))) {
        a = g[a];
        break a
      }
      a = m
    }
    if(a) {
      for(g = 0;g < a.length;g++) {
        if(a[g].Ua == c && a[g].capture == d && a[g].Ib == f) {
          oi(a[g].key);
          break
        }
      }
    }
  }
}
function oi(a) {
  if(gi[a]) {
    var b = gi[a];
    if(!b.La) {
      var c = b.src, d = b.type, f = b.dc, g = b.capture;
      c.removeEventListener ? (c == ca || !c.Wb) && c.removeEventListener(d, f, g) : c.detachEvent && c.detachEvent(d in ji ? ji[d] : ji[d] = "on" + d, f);
      c = fa(c);
      if(ii[c]) {
        var f = ii[c], i = na(f, b);
        0 <= i && ma.splice.call(f, i, 1);
        0 == f.length && delete ii[c]
      }
      b.La = l;
      if(b = hi[d][g][c]) {
        b.bc = l, pi(d, g, c, b)
      }
      delete gi[a]
    }
  }
}
function pi(a, b, c, d) {
  if(!d.ab && d.bc) {
    for(var f = 0, g = 0;f < d.length;f++) {
      d[f].La ? d[f].dc.src = m : (f != g && (d[g] = d[f]), g++)
    }
    d.length = g;
    d.bc = p;
    0 == g && (delete hi[a][b][c], hi[a][b].W--, 0 == hi[a][b].W && (delete hi[a][b], hi[a].W--), 0 == hi[a].W && delete hi[a])
  }
}
function qi(a, b, c, d, f) {
  var g = 1, b = fa(b);
  if(a[b]) {
    a.U--;
    a = a[b];
    a.ab ? a.ab++ : a.ab = 1;
    try {
      for(var i = a.length, j = 0;j < i;j++) {
        var k = a[j];
        k && !k.La && (g &= ri(k, f) !== p)
      }
    }finally {
      a.ab--, pi(c, d, b, a)
    }
  }
  return Boolean(g)
}
function ri(a, b) {
  a.jb && oi(a.key);
  return a.handleEvent(b)
}
function li(a, b) {
  if(!gi[a]) {
    return l
  }
  var c = gi[a], d = c.type, f = hi;
  if(!(d in f)) {
    return l
  }
  var f = f[d], g, i;
  if(!Yh) {
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
    k = p in f;
    if(j) {
      if(0 > g.keyCode || g.returnValue != h) {
        return l
      }
      a: {
        var n = p;
        if(0 == g.keyCode) {
          try {
            g.keyCode = -1;
            break a
          }catch(q) {
            n = l
          }
        }
        if(n || g.returnValue == h) {
          g.returnValue = l
        }
      }
    }
    n = new di;
    n.Sa(g, this);
    g = l;
    try {
      if(j) {
        for(var u = [], x = n.currentTarget;x;x = x.parentNode) {
          u.push(x)
        }
        i = f[l];
        i.U = i.W;
        for(var C = u.length - 1;!n.Ja && 0 <= C && i.U;C--) {
          n.currentTarget = u[C], g &= qi(i, u[C], d, l, n)
        }
        if(k) {
          i = f[p];
          i.U = i.W;
          for(C = 0;!n.Ja && C < u.length && i.U;C++) {
            n.currentTarget = u[C], g &= qi(i, u[C], d, p, n)
          }
        }
      }else {
        g = ri(c, n)
      }
    }finally {
      u && (u.length = 0)
    }
    return g
  }
  d = new di(b, this);
  return g = ri(c, d)
}
;var si, ti = document.createElement("div");
ti.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
var ui = Q.a(ti.firstChild.nodeType, 3), vi = Q.a(ti.getElementsByTagName("tbody").length, 0);
Q.a(ti.getElementsByTagName("link").length, 0);
var wi = /<|&#?\w+;/, xi = /^\s+/, yi = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i, zi = /<([\w:]+)/, Ai = /<tbody/i, Bi = We([1, "<select multiple='multiple'>", "</select>"]), Ci = We([1, "<table>", "</table>"]), Di = We([3, "<table><tbody><tr>", "</tr></tbody></table>"]), Ei;
a: {
  for(var Fi = "col \ufdd0:default tfoot caption optgroup legend area td thead th option tbody tr colgroup".split(" "), Gi = [We([2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"]), We([0, "", ""]), Ci, Ci, Bi, We([1, "<fieldset>", "</fieldset>"]), We([1, "<map>", "</map>"]), Di, Ci, Di, Bi, Ci, We([2, "<table><tbody>", "</tbody></table>"]), Ci], Hi = Fi.length, Ii = 0, Ji = nb(nf);;) {
    if(Ii < Hi) {
      var Ki = Ii + 1, Li = qb(Ji, Fi[Ii], Gi[Ii]), Ii = Ki, Ji = Li
    }else {
      Ei = pb(Ji);
      break a
    }
  }
  Ei = h
}
function Mi(a) {
  var a = Sh(a, yi, "<$1></$2>"), b = ("" + J(Zb(Kg(zi, a)))).toLowerCase(), c = mc.e(Ei, b, (new V("\ufdd0:default")).call(m, Ei)), d = ic.e(c, 0, m), f = ic.e(c, 1, m), c = ic.e(c, 2, m);
  a: {
    var g = document.createElement("div");
    g.innerHTML = [J(f), J(a), J(c)].join("");
    for(c = g;;) {
      if(0 < d) {
        d -= 1, c = c.lastChild
      }else {
        d = c;
        break a
      }
    }
    d = h
  }
  if(w(vi)) {
    a: {
      c = d;
      g = xa(Kg(Ai, a));
      ((b = Q.a(b, "table")) ? g : b) ? (f = c.firstChild, f = w(f) ? c.firstChild.childNodes : f) : f = ((f = Q.a(f, "<table>")) ? g : f) ? divchildNodes : Ve;
      for(var f = L(f), c = m, i = g = 0;;) {
        if(i < g) {
          var b = c.t(c, i), j = Q.a(b.nodeName, "tbody");
          (j ? Q.a(b.childNodes.length, 0) : j) && b.parentNode.removeChild(b);
          i += 1
        }else {
          if(f = L(f)) {
            Hc(f) ? (c = H(f), f = I(f), b = c, g = T(c), c = b) : (b = M(f), ((c = Q.a(b.nodeName, "tbody")) ? Q.a(b.childNodes.length, 0) : c) && b.parentNode.removeChild(b), f = P(f), c = m, g = 0), i = 0
          }else {
            break a
          }
        }
      }
    }
  }
  f = (f = xa(ui)) ? Kg(xi, a) : f;
  w(f) && d.insertBefore(document.createTextNode(M(Kg(xi, a))), d.firstChild);
  return d.childNodes
}
function Y(a) {
  if(a ? a.Cb : a) {
    return a.Cb(a)
  }
  var b;
  var c = Y[t(a == m ? m : a)];
  c ? b = c : (c = Y._) ? b = c : e(z("DomContent.nodes", a));
  return b.call(m, a)
}
function Ni(a) {
  if(a ? a.Db : a) {
    return a.Db(a)
  }
  var b;
  var c = Ni[t(a == m ? m : a)];
  c ? b = c : (c = Ni._) ? b = c : e(z("DomContent.single-node", a));
  return b.call(m, a)
}
function Z(a) {
  a = tg(a);
  return v(a) ? document.getElementById(a) : a
}
var Qi = function Oi(b) {
  h === si && (si = {}, si = function(b, d, f) {
    this.Na = b;
    this.fc = d;
    this.tc = f;
    this.r = 0;
    this.h = 393216
  }, si.Ca = l, si.Qa = "domina/t6845", si.Pa = function(b, d) {
    return G(d, "domina/t6845")
  }, si.prototype.Cb = function() {
    return Pi.b ? Pi.b(Jh(tg(this.Na))) : Pi.call(m, Jh(tg(this.Na)))
  }, si.prototype.Db = function() {
    return Pi.b ? Pi.b(Lh(tg(this.Na))) : Pi.call(m, Lh(tg(this.Na)))
  }, si.prototype.C = r("tc"), si.prototype.D = function(b, d) {
    return new si(this.Na, this.fc, d)
  });
  return new si(b, Oi, m)
};
function Ri(a, b) {
  Si.e ? Si.e(Mh, a, b) : Si.call(m, Mh, a, b);
  return a
}
function Ti(a, b) {
  Si.e ? Si.e(function(a, b) {
    a.insertBefore(b, a.childNodes[0] || m)
  }, a, b) : Si.call(m, function(a, b) {
    a.insertBefore(b, a.childNodes[0] || m)
  }, a, b)
}
function Ui(a) {
  Cg.b(le.a(Nh, Y(a)))
}
function Vi(a, b, c) {
  for(var d = L(Y(a)), f = m, g = 0, i = 0;;) {
    if(i < g) {
      f.t(f, i).setAttribute(tg(b), yc.a(J, c)), i += 1
    }else {
      if(d = L(d)) {
        f = d, Hc(f) ? (d = H(f), i = I(f), f = d, g = T(d), d = i) : (M(f).setAttribute(tg(b), yc.a(J, c)), d = P(f), f = m, g = 0), i = 0
      }else {
        break
      }
    }
  }
  return a
}
function Wi(a, b, c) {
  var d = m;
  2 < arguments.length && (d = R(Array.prototype.slice.call(arguments, 2), 0));
  return Vi.call(this, a, b, d)
}
Wi.o = 2;
Wi.k = function(a) {
  var b = M(a), a = P(a), c = M(a), a = N(a);
  return Vi(b, c, a)
};
Wi.g = Vi;
function Xi(a) {
  var b = Ni(a).attributes;
  return Wc.a($b, Fe(ke(), le.a(function(a) {
    var a = b.item(a), d = a.nodeValue, f = de.a(m, d);
    return(f ? de.a("", d) : f) ? va([od.b(a.nodeName.toLowerCase()), a.nodeValue], l) : m
  }, wg.b(b.length))))
}
function Yi(a) {
  a = Ni(a);
  if(Ih && "innerText" in a) {
    a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
  }else {
    var b = [];
    Qh(a, b, l);
    a = b.join("")
  }
  a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
  a = a.replace(/\u200B/g, "");
  Ih || (a = a.replace(/ +/g, " "));
  " " != a && (a = a.replace(/^\s*/, ""));
  return ka(a)
}
function Zi(a) {
  return Xh(Ni(a))
}
function Si(a, b, c) {
  for(var b = Y(b), d = Y(c), c = document.createDocumentFragment(), f = L(d), g = m, i = 0, j = 0;;) {
    if(j < i) {
      var k = g.t(g, j);
      c.appendChild(k);
      j += 1
    }else {
      if(f = L(f)) {
        g = f, Hc(g) ? (f = H(g), j = I(g), g = f, i = T(f), f = j) : (f = M(g), c.appendChild(f), f = P(g), g = m, i = 0), j = 0
      }else {
        break
      }
    }
  }
  d = Gg.b(ue.a(T(b) - 1, function(a, b, c) {
    return function() {
      return c.cloneNode(l)
    }
  }(b, d, c)));
  return L(b) ? (a.a ? a.a(M(b), c) : a.call(m, M(b), c), Gg.b(le.e(function(b, c) {
    return a.a ? a.a(b, c) : a.call(m, b, c)
  }, N(b), d))) : m
}
var $i, aj = m;
function bj(a) {
  return aj.a(a, 0)
}
function cj(a, b) {
  return b < a.length ? new Dd(m, p, function() {
    return S(a.item(b), aj.a(a, b + 1))
  }, m) : m
}
aj = function(a, b) {
  switch(arguments.length) {
    case 1:
      return bj.call(this, a);
    case 2:
      return cj.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
aj.b = bj;
aj.a = cj;
$i = aj;
var dj, ej = m;
function fj(a) {
  return ej.a(a, 0)
}
function gj(a, b) {
  return b < a.length ? new Dd(m, p, function() {
    return S(a[b], ej.a(a, b + 1))
  }, m) : m
}
ej = function(a, b) {
  switch(arguments.length) {
    case 1:
      return fj.call(this, a);
    case 2:
      return gj.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ej.b = fj;
ej.a = gj;
dj = ej;
function hj(a) {
  return w(a.item) ? $i.b(a) : dj.b(a)
}
function ij(a) {
  if(w(a)) {
    var b = xa(a.name);
    return b ? a.length : b
  }
  return a
}
function Pi(a) {
  if(a == m) {
    a = yb
  }else {
    var b;
    b = a ? ((b = a.h & 8388608) ? b : a.za) || (a.h ? 0 : y(ib, a)) : y(ib, a);
    a = b ? L(a) : w(ij(a)) ? hj(a) : L(We([a]))
  }
  return a
}
Y._ = function(a) {
  if(a == m) {
    a = yb
  }else {
    var b;
    b = a ? ((b = a.h & 8388608) ? b : a.za) || (a.h ? 0 : y(ib, a)) : y(ib, a);
    a = b ? L(a) : w(ij(a)) ? hj(a) : L(We([a]))
  }
  return a
};
Ni._ = function(a) {
  if(a == m) {
    a = m
  }else {
    var b;
    b = a ? ((b = a.h & 8388608) ? b : a.za) || (a.h ? 0 : y(ib, a)) : y(ib, a);
    a = b ? M(a) : w(ij(a)) ? a.item(0) : a
  }
  return a
};
Y.string = function(a) {
  return Gg.b(Y(w(Kg(wi, a)) ? Mi(a) : document.createTextNode(a)))
};
Ni.string = function(a) {
  return Ni(w(Kg(wi, a)) ? Mi(a) : document.createTextNode(a))
};
w("undefined" != typeof NodeList) && (s = NodeList.prototype, s.za = l, s.w = function(a) {
  return hj(a)
}, s.Oa = l, s.t = function(a, b) {
  return a.item(b)
}, s.N = function(a, b, c) {
  return a.length <= b ? c : ic.a(a, b)
}, s.lb = l, s.z = function(a) {
  return a.length
});
w("undefined" != typeof StaticNodeList) && (s = StaticNodeList.prototype, s.za = l, s.w = function(a) {
  return hj(a)
}, s.Oa = l, s.t = function(a, b) {
  return a.item(b)
}, s.N = function(a, b, c) {
  return a.length <= b ? c : ic.a(a, b)
}, s.lb = l, s.z = function(a) {
  return a.length
});
w("undefined" != typeof HTMLCollection) && (s = HTMLCollection.prototype, s.za = l, s.w = function(a) {
  return hj(a)
}, s.Oa = l, s.t = function(a, b) {
  return a.item(b)
}, s.N = function(a, b, c) {
  return a.length <= b ? c : ic.a(a, b)
}, s.lb = l, s.z = function(a) {
  return a.length
});
function jj() {
  this.Xb = p
}
ja(jj, $h);
s = jj.prototype;
s.Wb = l;
s.cc = m;
s.addEventListener = function(a, b, c, d) {
  ki(this, a, b, c, d)
};
s.removeEventListener = function(a, b, c, d) {
  ni(this, a, b, c, d)
};
s.dispatchEvent = function(a) {
  var b = a.type || a, c = hi;
  if(b in c) {
    if(v(a)) {
      a = new ai(a, this)
    }else {
      if(a instanceof ai) {
        a.target = a.target || this
      }else {
        var d = a, a = new ai(b, this);
        qa(a, d)
      }
    }
    var d = 1, f, c = c[b], b = l in c, g;
    if(b) {
      f = [];
      for(g = this;g;g = g.cc) {
        f.push(g)
      }
      g = c[l];
      g.U = g.W;
      for(var i = f.length - 1;!a.Ja && 0 <= i && g.U;i--) {
        a.currentTarget = f[i], d &= qi(g, f[i], a.type, l, a) && a.eb != p
      }
    }
    if(p in c) {
      if(g = c[p], g.U = g.W, b) {
        for(i = 0;!a.Ja && i < f.length && g.U;i++) {
          a.currentTarget = f[i], d &= qi(g, f[i], a.type, p, a) && a.eb != p
        }
      }else {
        for(f = this;!a.Ja && f && g.U;f = f.cc) {
          a.currentTarget = f, d &= qi(g, f, a.type, p, a) && a.eb != p
        }
      }
    }
    a = Boolean(d)
  }else {
    a = l
  }
  return a
};
function kj(a, b) {
  this.Xb = p;
  a && (this.$a && this.detach(), this.Fa = a, this.Za = ki(this.Fa, "keypress", this, b), this.Kb = ki(this.Fa, "keydown", this.qc, b, this), this.$a = ki(this.Fa, "keyup", this.rc, b, this))
}
ja(kj, jj);
s = kj.prototype;
s.Fa = m;
s.Za = m;
s.Kb = m;
s.$a = m;
s.na = -1;
s.ma = -1;
var lj = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, mj = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, nj = X || 
qh && Bh("525");
s = kj.prototype;
s.qc = function(a) {
  if(qh && (17 == this.na && !a.ctrlKey || 18 == this.na && !a.altKey)) {
    this.ma = this.na = -1
  }
  nj && !Eh(a.keyCode, this.na, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.ma = ph ? Gh(a.keyCode) : a.keyCode
};
s.rc = function() {
  this.ma = this.na = -1
};
s.handleEvent = function(a) {
  var b = a.Eb, c, d;
  X && "keypress" == a.type ? (c = this.ma, d = 13 != c && 27 != c ? b.keyCode : 0) : qh && "keypress" == a.type ? (c = this.ma, d = 0 <= b.charCode && 63232 > b.charCode && Fh(c) ? b.charCode : 0) : oh ? (c = this.ma, d = Fh(c) ? b.keyCode : 0) : (c = b.keyCode || this.ma, d = b.charCode || 0, sh && (63 == d && 224 == c) && (c = 191));
  var f = c, g = b.keyIdentifier;
  c ? 63232 <= c && c in lj ? f = lj[c] : 25 == c && a.shiftKey && (f = 9) : g && g in mj && (f = mj[g]);
  a = f == this.na;
  this.na = f;
  b = new oj(f, d, a, b);
  this.dispatchEvent(b)
};
s.Yb = r("Fa");
s.detach = function() {
  this.Za && (oi(this.Za), oi(this.Kb), oi(this.$a), this.$a = this.Kb = this.Za = m);
  this.Fa = m;
  this.ma = this.na = -1
};
function oj(a, b, c, d) {
  d && this.Sa(d, h);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
ja(oj, di);
function pj(a) {
  return ki(new kj(a), "key", function(b) {
    (function() {
      var a = Q.a(b.keyCode, 48);
      return a || (a = Q.a(b.keyCode, 49)) || (a = Q.a(b.keyCode, 50)) || (a = Q.a(b.keyCode, 51)) || (a = Q.a(b.keyCode, 52)) || (a = Q.a(b.keyCode, 53)) || (a = Q.a(b.keyCode, 54)) || (a = Q.a(b.keyCode, 55)) || (a = Q.a(b.keyCode, 56)) || (a = Q.a(b.keyCode, 57)) || (a = Q.a(b.keyCode, 37)) || (a = Q.a(b.keyCode, 39)) || (a = Q.a(b.keyCode, 38)) || (a = Q.a(b.keyCode, 40)) || (a = Q.a(b.keyCode, 9)) || (a = Q.a(b.keyCode, 8)) || (a = Q.a(b.keyCode, 46)) || (a = Q.a(b.keyCode, 36)) ? a : (a = Q.a(b.keyCode, 
      35)) ? a : Q.a(b.keyCode, 190)
    })() || b.preventDefault();
    var c;
    c = Kg(/\./, Zi(a));
    c = w(c) ? Q.a(b.keyCode, 190) : c;
    return w(c) ? b.preventDefault() : m
  })
}
function qj(a) {
  if(Q.a((new V("\ufdd0:type")).call(m, Xi(Z((new V("\ufdd0:id")).call(m, a)))), "radio") || 0 < T(Zi(Z((new V("\ufdd0:id")).call(m, a))))) {
    return l
  }
  Ti(Z([J("td"), J((new V("\ufdd0:id")).call(m, a))].join("")), [J('<div class="help">Value for field '), J(Yi(Z([J("l"), J((new V("\ufdd0:id")).call(m, a))].join("")))), J(" is required</div>")].join(""));
  return p
}
function rj(a, b, c) {
  return Q.a(a, yb) ? (Ti(Z(b), [J('<div class="help">Select one option for '), J(c), J("</div>")].join("")), p) : l
}
;var $, sj = [], tj = 0, uj;
for(uj in bi) {
  sj[tj++] = bi[uj]
}
var vj, wj = le.a(od, sj);
vj = yc.a(og, wj);
var xj = window.document.documentElement, zj = function yj(b) {
  return function(c) {
    b.b ? b.b(function() {
      h === $ && ($ = {}, $ = function(b, c, g, i) {
        this.qa = b;
        this.Gb = c;
        this.Ab = g;
        this.Mb = i;
        this.r = 0;
        this.h = 393472
      }, $.Ca = l, $.Qa = "domina.events/t6656", $.Pa = function(b, c) {
        return G(c, "domina.events/t6656")
      }, $.prototype.B = function(b, c) {
        var g = this.qa[c];
        return w(g) ? g : this.qa[tg(c)]
      }, $.prototype.v = function(b, c, g) {
        b = b.B(b, c);
        return w(b) ? b : g
      }, $.prototype.C = r("Mb"), $.prototype.D = function(b, c) {
        return new $(this.qa, this.Gb, this.Ab, c)
      });
      return new $(c, b, yj, m)
    }()) : b.call(m, function() {
      h === $ && ($ = function(b, c, g, i) {
        this.qa = b;
        this.Gb = c;
        this.Ab = g;
        this.Mb = i;
        this.r = 0;
        this.h = 393472
      }, $.Ca = l, $.Qa = "domina.events/t6656", $.Pa = function(b, c) {
        return G(c, "domina.events/t6656")
      }, $.prototype.B = function(b, c) {
        var g = this.qa[c];
        return w(g) ? g : this.qa[tg(c)]
      }, $.prototype.v = function(b, c, g) {
        b = b.B(b, c);
        return w(b) ? b : g
      }, $.prototype.C = r("Mb"), $.prototype.D = function(b, c) {
        return new $(this.qa, this.Gb, this.Ab, c)
      });
      return new $(c, b, yj, m)
    }());
    return l
  }
};
function Aj(a, b, c) {
  var d = zj(c), f = mc.e(vj, b, Lc) !== Lc ? tg(b) : b;
  return Gg.b(function i(a) {
    return new Dd(m, p, function() {
      for(;;) {
        var b = L(a);
        if(b) {
          if(Hc(b)) {
            var c = H(b), q = T(c), u = new Ed(Array(q), 0);
            a: {
              for(var x = 0;;) {
                if(x < q) {
                  var C = D.a(c, x), C = w(p) ? mi(C, f, d, p) : ki(C, f, d, p);
                  u.add(C);
                  x += 1
                }else {
                  c = l;
                  break a
                }
              }
              c = h
            }
            return c ? Ld(u.aa(), i(I(b))) : Ld(u.aa(), m)
          }
          u = M(b);
          return S(w(p) ? mi(u, f, d, p) : ki(u, f, d, p), i(N(b)))
        }
        return m
      }
    }, m)
  }(Y(a)))
}
var Bj, Cj = m;
function Dj(a, b) {
  return Cj.e(xj, a, b)
}
Cj = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Dj.call(this, a, b);
    case 3:
      return Aj(a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Cj.a = Dj;
Cj.e = function(a, b, c) {
  return Aj(a, b, c)
};
Bj = Cj;
var Ej;
Ej = ba(l);
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
function Fj(a, b) {
  var c = b || [];
  a && c.push(a);
  return c
}
var Gj = qh && "BackCompat" == document.compatMode, Hj = document.firstChild.children ? "children" : "childNodes", Ij = p;
function Jj(a) {
  function b() {
    0 <= n && (B.id = c(n, A).replace(/\\/g, ""), n = -1);
    if(0 <= q) {
      var a = q == A ? m : c(q, A);
      0 > ">~+".indexOf(a) ? B.Q = a : B.cb = a;
      q = -1
    }
    0 <= k && (B.da.push(c(k + 1, A).replace(/\\/g, "")), k = -1)
  }
  function c(b, c) {
    return ka(a.slice(b, c))
  }
  for(var a = 0 <= ">~+".indexOf(a.slice(-1)) ? a + " * " : a + " ", d = [], f = -1, g = -1, i = -1, j = -1, k = -1, n = -1, q = -1, u = "", x = "", C, A = 0, U = a.length, B = m, O = m;u = x, x = a.charAt(A), A < U;A++) {
    if("\\" != u) {
      if(B || (C = A, B = {Ka:m, ra:[], Wa:[], da:[], Q:m, cb:m, id:m, Hb:function() {
        return Ij ? this.vc : this.Q
      }}, q = A), 0 <= f) {
        if("]" == x) {
          O.gb ? O.Lb = c(i || f + 1, A) : O.gb = c(f + 1, A);
          if((f = O.Lb) && ('"' == f.charAt(0) || "'" == f.charAt(0))) {
            O.Lb = f.slice(1, -1)
          }
          B.Wa.push(O);
          O = m;
          f = i = -1
        }else {
          "=" == x && (i = 0 <= "|~^$*".indexOf(u) ? u : "", O.type = i + x, O.gb = c(f + 1, A - i.length), i = A + 1)
        }
      }else {
        0 <= g ? ")" == x && (0 <= j && (O.value = c(g + 1, A)), j = g = -1) : "#" == x ? (b(), n = A + 1) : "." == x ? (b(), k = A) : ":" == x ? (b(), j = A) : "[" == x ? (b(), f = A, O = {}) : "(" == x ? (0 <= j && (O = {name:c(j + 1, A), value:m}, B.ra.push(O)), g = A) : " " == x && u != x && (b(), 0 <= j && B.ra.push({name:c(j + 1, A)}), B.ac = B.ra.length || B.Wa.length || B.da.length, B.Nd = B.Ka = c(C, A), B.vc = B.Q = B.cb ? m : B.Q || "*", B.Q && (B.Q = B.Q.toUpperCase()), d.length && d[d.length - 
        1].cb && (B.Zb = d.pop(), B.Ka = B.Zb.Ka + " " + B.Ka), d.push(B), B = m)
      }
    }
  }
  return d
}
function Kj(a, b) {
  return!a ? b : !b ? a : function() {
    return a.apply(window, arguments) && b.apply(window, arguments)
  }
}
function Lj(a) {
  return 1 == a.nodeType
}
function Mj(a, b) {
  return!a ? "" : "class" == b ? a.className || "" : "for" == b ? a.htmlFor || "" : "style" == b ? a.style.cssText || "" : (Ij ? a.getAttribute(b) : a.getAttribute(b, 2)) || ""
}
var Nj = {"*=":function(a, b) {
  return function(c) {
    return 0 <= Mj(c, a).indexOf(b)
  }
}, "^=":function(a, b) {
  return function(c) {
    return 0 == Mj(c, a).indexOf(b)
  }
}, "$=":function(a, b) {
  return function(c) {
    c = " " + Mj(c, a);
    return c.lastIndexOf(b) == c.length - b.length
  }
}, "~=":function(a, b) {
  var c = " " + b + " ";
  return function(b) {
    return 0 <= (" " + Mj(b, a) + " ").indexOf(c)
  }
}, "|=":function(a, b) {
  b = " " + b;
  return function(c) {
    c = " " + Mj(c, a);
    return c == b || 0 == c.indexOf(b + "-")
  }
}, "=":function(a, b) {
  return function(c) {
    return Mj(c, a) == b
  }
}}, Oj = "undefined" == typeof document.firstChild.nextElementSibling, Pj = !Oj ? "nextElementSibling" : "nextSibling", Qj = !Oj ? "previousElementSibling" : "previousSibling", Rj = Oj ? Lj : Ej;
function Sj(a) {
  for(;a = a[Qj];) {
    if(Rj(a)) {
      return p
    }
  }
  return l
}
function Tj(a) {
  for(;a = a[Pj];) {
    if(Rj(a)) {
      return p
    }
  }
  return l
}
function Uj(a) {
  var b = a.parentNode, c = 0, d = b[Hj], f = a._i || -1, g = b._l || -1;
  if(!d) {
    return-1
  }
  d = d.length;
  if(g == d && 0 <= f && 0 <= g) {
    return f
  }
  b._l = d;
  f = -1;
  for(b = b.firstElementChild || b.firstChild;b;b = b[Pj]) {
    Rj(b) && (b._i = ++c, a === b && (f = c))
  }
  return f
}
function Vj(a) {
  return!(Uj(a) % 2)
}
function Wj(a) {
  return Uj(a) % 2
}
var Yj = {checked:function() {
  return function(a) {
    return a.checked || a.attributes.checked
  }
}, "first-child":function() {
  return Sj
}, "last-child":function() {
  return Tj
}, "only-child":function() {
  return function(a) {
    return!Sj(a) || !Tj(a) ? p : l
  }
}, empty:function() {
  return function(a) {
    for(var b = a.childNodes, a = a.childNodes.length - 1;0 <= a;a--) {
      var c = b[a].nodeType;
      if(1 === c || 3 == c) {
        return p
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
  var c = Jj(b)[0], d = {Ea:1};
  "*" != c.Q && (d.Q = 1);
  c.da.length || (d.da = 1);
  var f = Xj(c, d);
  return function(a) {
    return!f(a)
  }
}, "nth-child":function(a, b) {
  if("odd" == b) {
    return Wj
  }
  if("even" == b) {
    return Vj
  }
  if(-1 != b.indexOf("n")) {
    var c = b.split("n", 2), d = c[0] ? "-" == c[0] ? -1 : parseInt(c[0], 10) : 1, f = c[1] ? parseInt(c[1], 10) : 0, g = 0, i = -1;
    0 < d ? 0 > f ? f = f % d && d + f % d : 0 < f && (f >= d && (g = f - f % d), f %= d) : 0 > d && (d *= -1, 0 < f && (i = f, f %= d));
    if(0 < d) {
      return function(a) {
        a = Uj(a);
        return a >= g && (0 > i || a <= i) && a % d == f
      }
    }
    b = f
  }
  var j = parseInt(b, 10);
  return function(a) {
    return Uj(a) == j
  }
}}, Zj = X ? function(a) {
  var b = a.toLowerCase();
  "class" == b && (a = "className");
  return function(c) {
    return Ij ? c.getAttribute(a) : c[a] || c[b]
  }
} : function(a) {
  return function(b) {
    return b && b.getAttribute && b.hasAttribute(a)
  }
};
function Xj(a, b) {
  if(!a) {
    return Ej
  }
  var b = b || {}, c = m;
  b.Ea || (c = Kj(c, Lj));
  b.Q || "*" != a.Q && (c = Kj(c, function(b) {
    return b && b.tagName == a.Hb()
  }));
  b.da || oa(a.da, function(a, b) {
    var g = RegExp("(?:^|\\s)" + a + "(?:\\s|$)");
    c = Kj(c, function(a) {
      return g.test(a.className)
    });
    c.count = b
  });
  b.ra || oa(a.ra, function(a) {
    var b = a.name;
    Yj[b] && (c = Kj(c, Yj[b](b, a.value)))
  });
  b.Wa || oa(a.Wa, function(a) {
    var b, g = a.gb;
    a.type && Nj[a.type] ? b = Nj[a.type](g, a.Lb) : g.length && (b = Zj(g));
    b && (c = Kj(c, b))
  });
  b.id || a.id && (c = Kj(c, function(b) {
    return!!b && b.id == a.id
  }));
  c || "default" in b || (c = Ej);
  return c
}
var $j = {};
function ak(a) {
  var b = $j[a.Ka];
  if(b) {
    return b
  }
  var c = a.Zb, c = c ? c.cb : "", d = Xj(a, {Ea:1}), f = "*" == a.Q, g = document.getElementsByClassName;
  if(c) {
    if(g = {Ea:1}, f && (g.Q = 1), d = Xj(a, g), "+" == c) {
      var i = d, b = function(a, b, c) {
        for(;a = a[Pj];) {
          if(!Oj || Lj(a)) {
            (!c || bk(a, c)) && i(a) && b.push(a);
            break
          }
        }
        return b
      }
    }else {
      if("~" == c) {
        var j = d, b = function(a, b, c) {
          for(a = a[Pj];a;) {
            if(Rj(a)) {
              if(c && !bk(a, c)) {
                break
              }
              j(a) && b.push(a)
            }
            a = a[Pj]
          }
          return b
        }
      }else {
        if(">" == c) {
          var k = d, k = k || Ej, b = function(a, b, c) {
            for(var d = 0, f = a[Hj];a = f[d++];) {
              Rj(a) && ((!c || bk(a, c)) && k(a, d)) && b.push(a)
            }
            return b
          }
        }
      }
    }
  }else {
    if(a.id) {
      d = !a.ac && f ? Ej : Xj(a, {Ea:1, id:1}), b = function(b, c) {
        var f = (b ? new Rh(9 == b.nodeType ? b : b.ownerDocument || b.document) : Hh || (Hh = new Rh)).Yb(a.id), g;
        if(g = f && d(f)) {
          if(!(g = 9 == b.nodeType)) {
            for(g = f.parentNode;g && g != b;) {
              g = g.parentNode
            }
            g = !!g
          }
        }
        if(g) {
          return Fj(f, c)
        }
      }
    }else {
      if(g && /\{\s*\[native code\]\s*\}/.test(String(g)) && a.da.length && !Gj) {
        var d = Xj(a, {Ea:1, da:1, id:1}), n = a.da.join(" "), b = function(a, b) {
          for(var c = Fj(0, b), f, g = 0, i = a.getElementsByClassName(n);f = i[g++];) {
            d(f, a) && c.push(f)
          }
          return c
        }
      }else {
        !f && !a.ac ? b = function(b, c) {
          for(var d = Fj(0, c), f, g = 0, i = b.getElementsByTagName(a.Hb());f = i[g++];) {
            d.push(f)
          }
          return d
        } : (d = Xj(a, {Ea:1, Q:1, id:1}), b = function(b, c) {
          for(var f = Fj(0, c), g, i = 0, j = b.getElementsByTagName(a.Hb());g = j[i++];) {
            d(g, b) && f.push(g)
          }
          return f
        })
      }
    }
  }
  return $j[a.Ka] = b
}
var ck = {}, dk = {};
function ek(a) {
  var b = Jj(ka(a));
  if(1 == b.length) {
    var c = ak(b[0]);
    return function(a) {
      if(a = c(a, [])) {
        a.bb = l
      }
      return a
    }
  }
  return function(a) {
    for(var a = Fj(a), c, g, i = b.length, j, k, n = 0;n < i;n++) {
      k = [];
      c = b[n];
      g = a.length - 1;
      0 < g && (j = {}, k.bb = l);
      g = ak(c);
      for(var q = 0;c = a[q];q++) {
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
var fk = !!document.querySelectorAll && (!qh || Bh("526"));
function gk(a, b) {
  if(fk) {
    var c = dk[a];
    if(c && !b) {
      return c
    }
  }
  if(c = ck[a]) {
    return c
  }
  var c = a.charAt(0), d = -1 == a.indexOf(" ");
  0 <= a.indexOf("#") && d && (b = l);
  if(fk && !b && -1 == ">~+".indexOf(c) && (!X || -1 == a.indexOf(":")) && !(Gj && 0 <= a.indexOf(".")) && -1 == a.indexOf(":contains") && -1 == a.indexOf("|=")) {
    var f = 0 <= ">~+".indexOf(a.charAt(a.length - 1)) ? a + " *" : a;
    return dk[a] = function(b) {
      try {
        9 == b.nodeType || d || e("");
        var c = b.querySelectorAll(f);
        X ? c.pc = l : c.bb = l;
        return c
      }catch(g) {
        return gk(a, l)(b)
      }
    }
  }
  var g = a.split(/\s*,\s*/);
  return ck[a] = 2 > g.length ? ek(a) : function(a) {
    for(var b = 0, c = [], d;d = g[b++];) {
      c = c.concat(ek(d)(a))
    }
    return c
  }
}
var hk = 0, ik = X ? function(a) {
  return Ij ? a.getAttribute("_uid") || a.setAttribute("_uid", ++hk) || hk : a.uniqueID
} : function(a) {
  return a._uid || (a._uid = ++hk)
};
function bk(a, b) {
  if(!b) {
    return 1
  }
  var c = ik(a);
  return!b[c] ? b[c] = 1 : 0
}
function jk(a) {
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
  hk++;
  if(X && Ij) {
    var c = hk + "";
    a[0].setAttribute("_zipIdx", c);
    for(var d = 1, f;f = a[d];d++) {
      a[d].getAttribute("_zipIdx") != c && b.push(f), f.setAttribute("_zipIdx", c)
    }
  }else {
    if(X && a.pc) {
      try {
        for(d = 1;f = a[d];d++) {
          Lj(f) && b.push(f)
        }
      }catch(g) {
      }
    }else {
      a[0] && (a[0]._zipIdx = hk);
      for(d = 1;f = a[d];d++) {
        a[d]._zipIdx != hk && b.push(f), f._zipIdx = hk
      }
    }
  }
  return b
}
function kk(a, b) {
  if(!a) {
    return[]
  }
  if(a.constructor == Array) {
    return a
  }
  if(!v(a)) {
    return[a]
  }
  if(v(b) && (b = v(b) ? document.getElementById(b) : b, !b)) {
    return[]
  }
  var b = b || document, c = b.ownerDocument || b.documentElement;
  Ij = b.contentType && "application/xml" == b.contentType || oh && (b.doctype || "[object XMLDocument]" == c.toString()) || !!c && (X ? c.xml : b.xmlVersion || c.xmlVersion);
  return(c = gk(a)(b)) && c.bb ? c : jk(c)
}
kk.ra = Yj;
ia("goog.dom.query", kk);
ia("goog.dom.query.pseudos", kk.ra);
var lk, mk, nk = m;
function ok(a) {
  return nk.a(Kh("html", h, h)[0], a)
}
function pk(a, b) {
  h === lk && (lk = {}, lk = function(a, b, f, g) {
    this.Fb = a;
    this.hb = b;
    this.yc = f;
    this.uc = g;
    this.r = 0;
    this.h = 393216
  }, lk.Ca = l, lk.Qa = "domina.css/t7245", lk.Pa = function(a, b) {
    return G(b, "domina.css/t7245")
  }, lk.prototype.Cb = function() {
    var a = this;
    return ze.a(function(b) {
      return Pi(kk(a.Fb, b))
    }, Y(a.hb))
  }, lk.prototype.Db = function() {
    var a = this;
    return M(Fe(ke(), ze.a(function(b) {
      return Pi(kk(a.Fb, b))
    }, Y(a.hb))))
  }, lk.prototype.C = r("uc"), lk.prototype.D = function(a, b) {
    return new lk(this.Fb, this.hb, this.yc, b)
  });
  return new lk(b, a, nk, m)
}
nk = function(a, b) {
  switch(arguments.length) {
    case 1:
      return ok.call(this, a);
    case 2:
      return pk.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
nk.b = ok;
nk.a = pk;
mk = nk;
function qk() {
  var a = le.a(Xi, Y(mk.b("input[id='mlname'],textarea"))), b = le.a(Xi, Y(mk.b("input[id*='grams'],input[id*='quantity']"))), c = Y(mk.b("input[name='mltype']:checked")), d = le.a(Xi, Y(mk.b("select[id*='ingredient']"))), f = Ge(Ve, le.a(Zi, Y(mk.b("select[id*='ingredient']")))), g = Ug.b(Ve), i = Ug.b(Ve), j = Ug.b(Ve);
  Ui(Qi("help"));
  for(var a = L(a), k = m, n = 0, q = 0;;) {
    if(q < n) {
      var u = k.t(k, q);
      $g.e(g, $b, qj.b ? qj.b(u) : qj.call(m, u));
      q += 1
    }else {
      if(a = L(a)) {
        k = a, Hc(k) ? (a = H(k), q = I(k), k = a, n = T(a), a = q) : (a = M(k), $g.e(g, $b, qj.b ? qj.b(a) : qj.call(m, a)), a = P(k), k = m, n = 0), q = 0
      }else {
        break
      }
    }
  }
  b = L(b);
  a = m;
  for(n = k = 0;;) {
    if(n < k) {
      q = a.t(a, n), $g.e(j, $b, 0 < T(Zi(Z((new V("\ufdd0:id")).call(m, q))))), n += 1
    }else {
      if(b = L(b)) {
        a = b, Hc(a) ? (b = H(a), n = I(a), a = b, k = T(b), b = n) : (b = M(a), $g.e(j, $b, 0 < T(Zi(Z((new V("\ufdd0:id")).call(m, b))))), b = P(a), a = m, k = 0), n = 0
      }else {
        break
      }
    }
  }
  $g.e(g, $b, ie(Mc, Wa(j)));
  ie(Mc, Wa(j)) || Ti(Z("error-msgs"), '<div class="help">Value for ingredient grams and quantity is required</div>');
  d = L(d);
  j = m;
  for(a = b = 0;;) {
    if(a < b) {
      k = j.t(j, a), $g.e(i, $b, !Q.a(Zi(Z((new V("\ufdd0:id")).call(m, k))), "- Select -")), a += 1
    }else {
      if(d = L(d)) {
        j = d, Hc(j) ? (d = H(j), a = I(j), j = d, b = T(d), d = a) : (d = M(j), $g.e(i, $b, !Q.a(Zi(Z((new V("\ufdd0:id")).call(m, d))), "- Select -")), d = P(j), j = m, b = 0), a = 0
      }else {
        break
      }
    }
  }
  $g.e(g, $b, ie(Mc, Wa(i)));
  ie(Mc, Wa(i)) || Ti(Z("error-msgs"), '<div class="help">Choose grocery for every ingredient instead of "- Select -"</div>');
  $g.e(g, $b, rj.e ? rj.e(c, "tdmltype", "type") : rj.call(m, c, "tdmltype", "type"));
  $g.e(g, $b, Q.a(T(f), T(sg(f))));
  Q.a(T(f), T(sg(f))) || Ti(Z("error-msgs"), '<div class="help">Every grocery can be selected only once</div>');
  return ie(Mc, Wa(g))
}
function rk(a, b) {
  return Sh(a, b.b ? b.b(0) : b.call(m, 0), b.b ? b.b(1) : b.call(m, 1))
}
function sk(a, b) {
  var c = Ni(b).innerHTML;
  return Wc.e(rk, c, We([We(["ingredient1", [J("ingredient"), J(a)].join("")]), We(["igrams1", [J("igrams"), J(a)].join("")]), We(["iquantity1", [J("iquantity"), J(a)].join("")]), We(["iremove1", [J("iremove"), J(a)].join("")])]))
}
function tk(a, b) {
  if(Q.a(T(Ge(Ve, le.a(Zi, Y(mk.b("select[id*='ingredient']"))))), 1)) {
    return alert("Meal should contain at least one ingredient")
  }
  Ui(Z([J("ingredient-row"), J(a)].join("")));
  return Wi.g(b, "value", R([Sh(Sh(Sh([J(";"), J(Zi(b)), J(";")].join(""), [J(";"), J(a), J(";")].join(""), ";"), /;$/, ""), /^;/, "")], 0))
}
ia("personal_organiser.meal.jsmeal.init", function() {
  var a = document;
  if(w(w(a) ? document.getElementById : a)) {
    var b = Z("meal-form"), c = Z("ingredient-indexes"), d = Z("ingredient-row1"), f = Qi("ingredients-tbody"), a = le.a(Xi, Y(mk.b("input[id*='grams'],input[id*='quantity']")));
    b.onsubmit = qk;
    Bj.e(Z("add-ingredient"), "\ufdd0:click", function() {
      var a, b = Zi(c), b = Th.a(b, ";").call(m, T(Th.a(b, ";")) - 1);
      a = parseInt(b) + 1;
      Wi.g(c, "value", R([[J(Zi(c)), J(";"), J(a)].join("")], 0));
      Ri(f, [J('<tr id="ingredient-row'), J(a), J('">'), J(sk(a, d)), J("</tr>")].join(""));
      Bj.e(Z([J("iremove"), J(a)].join("")), "\ufdd0:click", function() {
        return tk(a, c)
      });
      pj.b ? pj.b(Z([J("igrams"), J(a)].join(""))) : pj.call(m, Z([J("igrams"), J(a)].join("")));
      return pj.b ? pj.b(Z([J("iquantity"), J(a)].join(""))) : pj.call(m, Z([J("iquantity"), J(a)].join("")))
    });
    a: {
      for(var b = le.a(Xi, Y(mk.b("a[id*='remove']"))), b = L(b), g = m, i = 0, j = 0;;) {
        if(j < i) {
          var k = g.t(g, j);
          Bj.e(Z((new V("\ufdd0:id")).call(m, k)), "\ufdd0:click", function(a, b, d, f, g) {
            return function() {
              return tk(parseInt(Sh((new V("\ufdd0:id")).call(m, g), "iremove", "")), c)
            }
          }(b, g, i, j, k));
          j += 1
        }else {
          var n = L(b);
          if(n) {
            var q = n;
            Hc(q) ? (b = H(q), i = I(q), g = b, q = T(b), b = i, i = q) : (k = M(q), Bj.e(Z((new V("\ufdd0:id")).call(m, k)), "\ufdd0:click", function(a, b, d, f, g) {
              return function() {
                return tk(parseInt(Sh((new V("\ufdd0:id")).call(m, g), "iremove", "")), c)
              }
            }(b, g, i, j, k, q, n)), b = P(q), g = m, i = 0);
            j = 0
          }else {
            break a
          }
        }
      }
    }
    a = L(a);
    b = m;
    for(i = q = 0;;) {
      if(i < q) {
        g = b.t(b, i), pj.b ? pj.b(Z((new V("\ufdd0:id")).call(m, g))) : pj.call(m, Z((new V("\ufdd0:id")).call(m, g))), i += 1
      }else {
        if(a = L(a)) {
          b = a, Hc(b) ? (a = H(b), q = I(b), b = a, g = T(a), a = q, q = g) : (g = M(b), pj.b ? pj.b(Z((new V("\ufdd0:id")).call(m, g))) : pj.call(m, Z((new V("\ufdd0:id")).call(m, g))), a = P(b), b = m, q = 0), i = 0
        }else {
          return m
        }
      }
    }
  }else {
    return m
  }
});
function uk(a) {
  var b = Q.a(a.currentTarget.readyState, 4);
  return(b ? Q.a(a.currentTarget.status, 200) : b) ? (Ui(Z([J("meal-"), J(a.currentTarget.responseText)].join(""))), Ri(Qi("middle-column"), '<div class="help">Meal successfully deleted</div>')) : m
}
function vk(a) {
  var b = new XMLHttpRequest;
  b.onreadystatechange = uk;
  b.open("DELETE", [J("/delete-meal/"), J(a)].join(""), l);
  return b.send()
}
ia("personal_organiser.meal.jsmealtbl.init", function() {
  var a;
  a = document;
  if(w(w(a) ? document.getElementById : a)) {
    a: {
      a = le.a(Xi, Y(mk.b("a[id*='delete']")));
      a = L(a);
      for(var b = m, c = 0, d = 0;;) {
        if(d < c) {
          var f = b.t(b, d);
          Bj.e(Z((new V("\ufdd0:id")).call(m, f)), "\ufdd0:click", function(a, b, c, d, f) {
            return function() {
              return vk(Sh((new V("\ufdd0:id")).call(m, f), "mldelete", ""))
            }
          }(a, b, c, d, f));
          d += 1
        }else {
          var g = L(a);
          if(g) {
            var i = g;
            Hc(i) ? (a = H(i), c = I(i), b = a, i = T(a), a = c, c = i) : (f = M(i), Bj.e(Z((new V("\ufdd0:id")).call(m, f)), "\ufdd0:click", function(a, b, c, d, f) {
              return function() {
                return vk(Sh((new V("\ufdd0:id")).call(m, f), "mldelete", ""))
              }
            }(a, b, c, d, f, i, g)), a = P(i), b = m, c = 0);
            d = 0
          }else {
            a = m;
            break a
          }
        }
      }
      a = h
    }
  }else {
    a = m
  }
  return a
});
