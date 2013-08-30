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
var t, ca = this;
function u(a) {
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
  return"function" == u(a)
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
  return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, j, k, p, s, r) {
    if("%" == p) {
      return"%"
    }
    var x = c.shift();
    "undefined" == typeof x && e(Error("[goog.string.format] Not enough arguments"));
    arguments[0] = x;
    return ra.ga[p].apply(m, arguments)
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
sa.prototype.toString = q("Ma");
var ta;
ia("cljs.core.set_print_fn_BANG_", aa());
function ua() {
  return va(["\ufdd0:flush-on-newline", l, "\ufdd0:readably", l, "\ufdd0:meta", n, "\ufdd0:dup", n], l)
}
function w(a) {
  return a != m && a !== n
}
function wa(a) {
  return a == m
}
function xa(a) {
  return w(a) ? n : l
}
function ya(a) {
  var b = v(a);
  return b ? "\ufdd0" !== a.charAt(0) : b
}
function y(a, b) {
  return a[u(b == m ? m : b)] ? l : a._ ? l : n
}
function B(a, b) {
  var c = b == m ? m : b.constructor, c = w(w(c) ? c.Ca : c) ? c.Qa : u(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""))
}
var za = {}, Aa = {};
function Ba(a) {
  if(a ? a.z : a) {
    return a.z(a)
  }
  var b;
  var c = Ba[u(a == m ? m : a)];
  c ? b = c : (c = Ba._) ? b = c : e(B("ICounted.-count", a));
  return b.call(m, a)
}
function Ca(a, b) {
  if(a ? a.I : a) {
    return a.I(a, b)
  }
  var c;
  var d = Ca[u(a == m ? m : a)];
  d ? c = d : (d = Ca._) ? c = d : e(B("ICollection.-conj", a));
  return c.call(m, a, b)
}
var Ea = {}, D, Fa = m;
function Ga(a, b) {
  if(a ? a.v : a) {
    return a.v(a, b)
  }
  var c;
  var d = D[u(a == m ? m : a)];
  d ? c = d : (d = D._) ? c = d : e(B("IIndexed.-nth", a));
  return c.call(m, a, b)
}
function Ha(a, b, c) {
  if(a ? a.N : a) {
    return a.N(a, b, c)
  }
  var d;
  var f = D[u(a == m ? m : a)];
  f ? d = f : (f = D._) ? d = f : e(B("IIndexed.-nth", a));
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
  var c = E[u(a == m ? m : a)];
  c ? b = c : (c = E._) ? b = c : e(B("ISeq.-first", a));
  return b.call(m, a)
}
function F(a) {
  if(a ? a.R : a) {
    return a.R(a)
  }
  var b;
  var c = F[u(a == m ? m : a)];
  c ? b = c : (c = F._) ? b = c : e(B("ISeq.-rest", a));
  return b.call(m, a)
}
var Ja = {}, Ka, La = m;
function Ma(a, b) {
  if(a ? a.B : a) {
    return a.B(a, b)
  }
  var c;
  var d = Ka[u(a == m ? m : a)];
  d ? c = d : (d = Ka._) ? c = d : e(B("ILookup.-lookup", a));
  return c.call(m, a, b)
}
function Na(a, b, c) {
  if(a ? a.t : a) {
    return a.t(a, b, c)
  }
  var d;
  var f = Ka[u(a == m ? m : a)];
  f ? d = f : (f = Ka._) ? d = f : e(B("ILookup.-lookup", a));
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
  var d = Oa[u(a == m ? m : a)];
  d ? c = d : (d = Oa._) ? c = d : e(B("IAssociative.-contains-key?", a));
  return c.call(m, a, b)
}
function Pa(a, b, c) {
  if(a ? a.ja : a) {
    return a.ja(a, b, c)
  }
  var d;
  var f = Pa[u(a == m ? m : a)];
  f ? d = f : (f = Pa._) ? d = f : e(B("IAssociative.-assoc", a));
  return d.call(m, a, b, c)
}
var Qa = {}, Ra = {};
function Sa(a) {
  if(a ? a.Rb : a) {
    return a.Rb(a)
  }
  var b;
  var c = Sa[u(a == m ? m : a)];
  c ? b = c : (c = Sa._) ? b = c : e(B("IMapEntry.-key", a));
  return b.call(m, a)
}
function Ta(a) {
  if(a ? a.Sb : a) {
    return a.Sb(a)
  }
  var b;
  var c = Ta[u(a == m ? m : a)];
  c ? b = c : (c = Ta._) ? b = c : e(B("IMapEntry.-val", a));
  return b.call(m, a)
}
var Ua = {}, Va = {};
function Wa(a) {
  if(a ? a.jc : a) {
    return a.state
  }
  var b;
  var c = Wa[u(a == m ? m : a)];
  c ? b = c : (c = Wa._) ? b = c : e(B("IDeref.-deref", a));
  return b.call(m, a)
}
var Xa = {};
function Ya(a) {
  if(a ? a.C : a) {
    return a.C(a)
  }
  var b;
  var c = Ya[u(a == m ? m : a)];
  c ? b = c : (c = Ya._) ? b = c : e(B("IMeta.-meta", a));
  return b.call(m, a)
}
var Za = {};
function $a(a, b) {
  if(a ? a.D : a) {
    return a.D(a, b)
  }
  var c;
  var d = $a[u(a == m ? m : a)];
  d ? c = d : (d = $a._) ? c = d : e(B("IWithMeta.-with-meta", a));
  return c.call(m, a, b)
}
var ab = {}, cb, db = m;
function eb(a, b) {
  if(a ? a.xa : a) {
    return a.xa(a, b)
  }
  var c;
  var d = cb[u(a == m ? m : a)];
  d ? c = d : (d = cb._) ? c = d : e(B("IReduce.-reduce", a));
  return c.call(m, a, b)
}
function fb(a, b, c) {
  if(a ? a.ya : a) {
    return a.ya(a, b, c)
  }
  var d;
  var f = cb[u(a == m ? m : a)];
  f ? d = f : (f = cb._) ? d = f : e(B("IReduce.-reduce", a));
  return d.call(m, a, b, c)
}
db = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return eb.call(this, a, b);
    case 3:
      return fb.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
db.a = eb;
db.e = fb;
cb = db;
function gb(a, b) {
  if(a ? a.G : a) {
    return a.G(a, b)
  }
  var c;
  var d = gb[u(a == m ? m : a)];
  d ? c = d : (d = gb._) ? c = d : e(B("IEquiv.-equiv", a));
  return c.call(m, a, b)
}
function hb(a) {
  if(a ? a.J : a) {
    return a.J(a)
  }
  var b;
  var c = hb[u(a == m ? m : a)];
  c ? b = c : (c = hb._) ? b = c : e(B("IHash.-hash", a));
  return b.call(m, a)
}
var ib = {};
function jb(a) {
  if(a ? a.w : a) {
    return a.w(a)
  }
  var b;
  var c = jb[u(a == m ? m : a)];
  c ? b = c : (c = jb._) ? b = c : e(B("ISeqable.-seq", a));
  return b.call(m, a)
}
var kb = {};
function G(a, b) {
  if(a ? a.Vb : a) {
    return a.Vb(0, b)
  }
  var c;
  var d = G[u(a == m ? m : a)];
  d ? c = d : (d = G._) ? c = d : e(B("IWriter.-write", a));
  return c.call(m, a, b)
}
function lb(a) {
  if(a ? a.oc : a) {
    return m
  }
  var b;
  var c = lb[u(a == m ? m : a)];
  c ? b = c : (c = lb._) ? b = c : e(B("IWriter.-flush", a));
  return b.call(m, a)
}
function mb(a, b, c) {
  if(a ? a.Ub : a) {
    return a.Ub(a, b, c)
  }
  var d;
  var f = mb[u(a == m ? m : a)];
  f ? d = f : (f = mb._) ? d = f : e(B("IWatchable.-notify-watches", a));
  return d.call(m, a, b, c)
}
function nb(a) {
  if(a ? a.va : a) {
    return a.va(a)
  }
  var b;
  var c = nb[u(a == m ? m : a)];
  c ? b = c : (c = nb._) ? b = c : e(B("IEditableCollection.-as-transient", a));
  return b.call(m, a)
}
function ob(a, b) {
  if(a ? a.pa : a) {
    return a.pa(a, b)
  }
  var c;
  var d = ob[u(a == m ? m : a)];
  d ? c = d : (d = ob._) ? c = d : e(B("ITransientCollection.-conj!", a));
  return c.call(m, a, b)
}
function pb(a) {
  if(a ? a.Ba : a) {
    return a.Ba(a)
  }
  var b;
  var c = pb[u(a == m ? m : a)];
  c ? b = c : (c = pb._) ? b = c : e(B("ITransientCollection.-persistent!", a));
  return b.call(m, a)
}
function qb(a, b, c) {
  if(a ? a.Aa : a) {
    return a.Aa(a, b, c)
  }
  var d;
  var f = qb[u(a == m ? m : a)];
  f ? d = f : (f = qb._) ? d = f : e(B("ITransientAssociative.-assoc!", a));
  return d.call(m, a, b, c)
}
function rb(a) {
  if(a ? a.Pb : a) {
    return a.Pb()
  }
  var b;
  var c = rb[u(a == m ? m : a)];
  c ? b = c : (c = rb._) ? b = c : e(B("IChunk.-drop-first", a));
  return b.call(m, a)
}
function sb(a) {
  if(a ? a.kb : a) {
    return a.kb(a)
  }
  var b;
  var c = sb[u(a == m ? m : a)];
  c ? b = c : (c = sb._) ? b = c : e(B("IChunkedSeq.-chunked-first", a));
  return b.call(m, a)
}
function tb(a) {
  if(a ? a.Ya : a) {
    return a.Ya(a)
  }
  var b;
  var c = tb[u(a == m ? m : a)];
  c ? b = c : (c = tb._) ? b = c : e(B("IChunkedSeq.-chunked-rest", a));
  return b.call(m, a)
}
function ub(a) {
  this.xc = a;
  this.r = 0;
  this.h = 1073741824
}
ub.prototype.Vb = function(a, b) {
  return this.xc.append(b)
};
ub.prototype.oc = ba(m);
function vb(a) {
  var b = new sa, c = new ub(b);
  a.K(a, c, ua());
  lb(c);
  return"" + H(b)
}
function wb(a, b, c, d, f) {
  this.Ia = a;
  this.name = b;
  this.sa = c;
  this.Va = d;
  this.ec = f;
  this.r = 0;
  this.h = 2154168321
}
t = wb.prototype;
t.K = function(a, b) {
  return G(b, this.sa)
};
t.Tb = l;
t.J = function() {
  -1 === this.Va && (this.Va = xb.a ? xb.a(I.b ? I.b(this.Ia) : I.call(m, this.Ia), I.b ? I.b(this.name) : I.call(m, this.name)) : xb.call(m, I.b ? I.b(this.Ia) : I.call(m, this.Ia), I.b ? I.b(this.name) : I.call(m, this.name)));
  return this.Va
};
t.D = function(a, b) {
  return new wb(this.Ia, this.name, this.sa, this.Va, b)
};
t.C = q("ec");
var yb = m, yb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ka.e(b, this, m);
    case 3:
      return Ka.e(b, this, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
wb.prototype.call = yb;
wb.prototype.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
wb.prototype.G = function(a, b) {
  return b instanceof wb ? this.sa === b.sa : n
};
wb.prototype.toString = q("sa");
function J(a) {
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
    return 0 === a.length ? m : new zb(a, 0)
  }
  if(y(Ja, a)) {
    return jb(a)
  }
  e(Error([H(a), H("is not ISeqable")].join("")))
}
function K(a) {
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
  a = J(a);
  return a == m ? m : E(a)
}
function L(a) {
  if(a != m) {
    var b;
    if(b = a) {
      b = (b = a.h & 64) ? b : a.zb
    }
    if(b) {
      return a.R(a)
    }
    a = J(a);
    return a != m ? F(a) : Ab
  }
  return Ab
}
function N(a) {
  if(a == m) {
    a = m
  }else {
    var b;
    if(b = a) {
      b = (b = a.h & 128) ? b : a.Hd
    }
    a = b ? a.fa(a) : J(L(a))
  }
  return a
}
var O, Bb = m;
function Cb(a, b) {
  var c = a === b;
  return c ? c : gb(a, b)
}
function Db(a, b, c) {
  for(;;) {
    if(w(Bb.a(a, b))) {
      if(N(c)) {
        a = b, b = K(c), c = N(c)
      }else {
        return Bb.a(b, K(c))
      }
    }else {
      return n
    }
  }
}
function Eb(a, b, c) {
  var d = m;
  2 < arguments.length && (d = P(Array.prototype.slice.call(arguments, 2), 0));
  return Db.call(this, a, b, d)
}
Eb.o = 2;
Eb.k = function(a) {
  var b = K(a), a = N(a), c = K(a), a = L(a);
  return Db(b, c, a)
};
Eb.g = Db;
Bb = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return l;
    case 2:
      return Cb.call(this, a, b);
    default:
      return Eb.g(a, b, P(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Bb.o = 2;
Bb.k = Eb.k;
Bb.b = ba(l);
Bb.a = Cb;
Bb.g = Eb.g;
O = Bb;
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
var Fb, Gb = m;
function Hb(a, b) {
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
function Ib(a, b, c) {
  for(var d = Ba(a), f = 0;;) {
    if(f < d) {
      c = b.a ? b.a(c, D.a(a, f)) : b.call(m, c, D.a(a, f)), f += 1
    }else {
      return c
    }
  }
}
function Jb(a, b, c, d) {
  for(var f = Ba(a);;) {
    if(d < f) {
      c = b.a ? b.a(c, D.a(a, d)) : b.call(m, c, D.a(a, d)), d += 1
    }else {
      return c
    }
  }
}
Gb = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return Hb.call(this, a, b);
    case 3:
      return Ib.call(this, a, b, c);
    case 4:
      return Jb.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Gb.a = Hb;
Gb.e = Ib;
Gb.n = Jb;
Fb = Gb;
var Kb, Lb = m;
function Mb(a, b) {
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
function Nb(a, b, c) {
  for(var d = a.length, f = 0;;) {
    if(f < d) {
      c = b.a ? b.a(c, a[f]) : b.call(m, c, a[f]), f += 1
    }else {
      return c
    }
  }
}
function Ob(a, b, c, d) {
  for(var f = a.length;;) {
    if(d < f) {
      c = b.a ? b.a(c, a[d]) : b.call(m, c, a[d]), d += 1
    }else {
      return c
    }
  }
}
Lb = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return Mb.call(this, a, b);
    case 3:
      return Nb.call(this, a, b, c);
    case 4:
      return Ob.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Lb.a = Mb;
Lb.e = Nb;
Lb.n = Ob;
Kb = Lb;
function Pb(a) {
  if(a) {
    var b = a.h & 2, a = (b ? b : a.lb) ? l : a.h ? n : y(Aa, a)
  }else {
    a = y(Aa, a)
  }
  return a
}
function Qb(a) {
  if(a) {
    var b = a.h & 16, a = (b ? b : a.Oa) ? l : a.h ? n : y(Ea, a)
  }else {
    a = y(Ea, a)
  }
  return a
}
function zb(a, b) {
  this.c = a;
  this.p = b;
  this.r = 0;
  this.h = 166199550
}
t = zb.prototype;
t.J = function(a) {
  return Rb.b ? Rb.b(a) : Rb.call(m, a)
};
t.fa = function() {
  return this.p + 1 < this.c.length ? new zb(this.c, this.p + 1) : m
};
t.I = function(a, b) {
  return Q.a ? Q.a(b, a) : Q.call(m, b, a)
};
t.toString = function() {
  return vb(this)
};
t.xa = function(a, b) {
  return Kb.n(this.c, b, this.c[this.p], this.p + 1)
};
t.ya = function(a, b, c) {
  return Kb.n(this.c, b, c, this.p)
};
t.w = aa();
t.z = function() {
  return this.c.length - this.p
};
t.O = function() {
  return this.c[this.p]
};
t.R = function() {
  return this.p + 1 < this.c.length ? new zb(this.c, this.p + 1) : Sb.A ? Sb.A() : Sb.call(m)
};
t.G = function(a, b) {
  return Tb.a ? Tb.a(a, b) : Tb.call(m, a, b)
};
t.v = function(a, b) {
  var c = b + this.p;
  return c < this.c.length ? this.c[c] : m
};
t.N = function(a, b, c) {
  a = b + this.p;
  return a < this.c.length ? this.c[a] : c
};
var Ub, Vb = m;
function Wb(a) {
  return Vb.a(a, 0)
}
function Xb(a, b) {
  return b < a.length ? new zb(a, b) : m
}
Vb = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Wb.call(this, a);
    case 2:
      return Xb.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Vb.b = Wb;
Vb.a = Xb;
Ub = Vb;
var P, Yb = m;
function Zb(a) {
  return Ub.a(a, 0)
}
function $b(a, b) {
  return Ub.a(a, b)
}
Yb = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Zb.call(this, a);
    case 2:
      return $b.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Yb.b = Zb;
Yb.a = $b;
P = Yb;
Aa.array = l;
Ba.array = function(a) {
  return a.length
};
function ac(a) {
  return K(N(a))
}
gb._ = function(a, b) {
  return a === b
};
var bc, cc = m;
function dc(a, b) {
  return a != m ? Ca(a, b) : Sb.b ? Sb.b(b) : Sb.call(m, b)
}
function ec(a, b, c) {
  for(;;) {
    if(w(c)) {
      a = cc.a(a, b), b = K(c), c = N(c)
    }else {
      return cc.a(a, b)
    }
  }
}
function fc(a, b, c) {
  var d = m;
  2 < arguments.length && (d = P(Array.prototype.slice.call(arguments, 2), 0));
  return ec.call(this, a, b, d)
}
fc.o = 2;
fc.k = function(a) {
  var b = K(a), a = N(a), c = K(a), a = L(a);
  return ec(b, c, a)
};
fc.g = ec;
cc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return dc.call(this, a, b);
    default:
      return fc.g(a, b, P(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
cc.o = 2;
cc.k = fc.k;
cc.a = dc;
cc.g = fc.g;
bc = cc;
function R(a) {
  if(Pb(a)) {
    a = Ba(a)
  }else {
    a: {
      for(var a = J(a), b = 0;;) {
        if(Pb(a)) {
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
var gc, hc = m;
function ic(a, b) {
  for(;;) {
    a == m && e(Error("Index out of bounds"));
    if(0 === b) {
      if(J(a)) {
        return K(a)
      }
      e(Error("Index out of bounds"))
    }
    if(Qb(a)) {
      return D.a(a, b)
    }
    if(J(a)) {
      var c = N(a), d = b - 1, a = c, b = d
    }else {
      e(Error("Index out of bounds"))
    }
  }
}
function jc(a, b, c) {
  for(;;) {
    if(a == m) {
      return c
    }
    if(0 === b) {
      return J(a) ? K(a) : c
    }
    if(Qb(a)) {
      return D.e(a, b, c)
    }
    if(J(a)) {
      a = N(a), b -= 1
    }else {
      return c
    }
  }
}
hc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return ic.call(this, a, b);
    case 3:
      return jc.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
hc.a = ic;
hc.e = jc;
gc = hc;
var kc, lc = m;
function mc(a, b) {
  var c;
  if(a == m) {
    c = m
  }else {
    if(c = a) {
      c = (c = a.h & 16) ? c : a.Oa
    }
    c = c ? a.v(a, Math.floor(b)) : a instanceof Array ? b < a.length ? a[b] : m : ya(a) ? b < a.length ? a[b] : m : gc.a(a, Math.floor(b))
  }
  return c
}
function nc(a, b, c) {
  if(a != m) {
    var d;
    if(d = a) {
      d = (d = a.h & 16) ? d : a.Oa
    }
    a = d ? a.N(a, Math.floor(b), c) : a instanceof Array ? b < a.length ? a[b] : c : ya(a) ? b < a.length ? a[b] : c : gc.e(a, Math.floor(b), c)
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
lc.e = nc;
kc = lc;
var oc, pc = m;
function qc(a, b) {
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
function rc(a, b, c) {
  if(a != m) {
    var d;
    if(d = a) {
      d = (d = a.h & 256) ? d : a.kc
    }
    a = d ? a.t(a, b, c) : a instanceof Array ? b < a.length ? a[b] : c : ya(a) ? b < a.length ? a[b] : c : y(Ja, a) ? Ka.e(a, b, c) : c
  }else {
    a = c
  }
  return a
}
pc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return qc.call(this, a, b);
    case 3:
      return rc.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
pc.a = qc;
pc.e = rc;
oc = pc;
var sc, tc = m;
function uc(a, b, c) {
  return a != m ? Pa(a, b, c) : vc.a ? vc.a(b, c) : vc.call(m, b, c)
}
function wc(a, b, c, d) {
  for(;;) {
    if(a = tc.e(a, b, c), w(d)) {
      b = K(d), c = ac(d), d = N(N(d))
    }else {
      return a
    }
  }
}
function xc(a, b, c, d) {
  var f = m;
  3 < arguments.length && (f = P(Array.prototype.slice.call(arguments, 3), 0));
  return wc.call(this, a, b, c, f)
}
xc.o = 3;
xc.k = function(a) {
  var b = K(a), a = N(a), c = K(a), a = N(a), d = K(a), a = L(a);
  return wc(b, c, d, a)
};
xc.g = wc;
tc = function(a, b, c, d) {
  switch(arguments.length) {
    case 3:
      return uc.call(this, a, b, c);
    default:
      return xc.g(a, b, c, P(arguments, 3))
  }
  e(Error("Invalid arity: " + arguments.length))
};
tc.o = 3;
tc.k = xc.k;
tc.e = uc;
tc.g = xc.g;
sc = tc;
function yc(a) {
  var b = da(a);
  return b ? b : a ? w(w(m) ? m : a.gc) ? l : a.Md ? n : y(za, a) : y(za, a)
}
var Bc = function zc(b, c) {
  var d;
  if(d = yc(b)) {
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
      ta.Qa = "cljs.core/t3821";
      ta.Pa = function(b, c) {
        return G(c, "cljs.core/t3821")
      };
      var f = function(b, c) {
        return Ac.a ? Ac.a(b.Nb, c) : Ac.call(m, b.Nb, c)
      };
      d = function(b, c) {
        var b = this, d = m;
        1 < arguments.length && (d = P(Array.prototype.slice.call(arguments, 1), 0));
        return f.call(this, b, d)
      };
      d.o = 1;
      d.k = function(b) {
        var c = K(b), b = L(b);
        return f(c, b)
      };
      d.g = f;
      ta.prototype.call = d;
      ta.prototype.apply = function(b, c) {
        b = this;
        return b.call.apply(b, [b].concat(c.slice()))
      };
      ta.prototype.gc = l;
      ta.prototype.C = q("sc");
      ta.prototype.D = function(b, c) {
        return new ta(this.m, this.Nb, this.Cc, c)
      }
    }
    d = new ta(c, b, zc, m);
    d = zc(d, c)
  }else {
    d = $a(b, c)
  }
  return d
};
function Cc(a) {
  var b;
  b = a ? ((b = a.h & 131072) ? b : a.mc) || (a.h ? 0 : y(Xa, a)) : y(Xa, a);
  return b ? Ya(a) : m
}
var Dc = {}, Ec = 0, I, Fc = m;
function Gc(a) {
  return Fc.a(a, l)
}
function Hc(a, b) {
  var c;
  ((c = v(a)) ? b : c) ? (255 < Ec && (Dc = {}, Ec = 0), c = Dc[a], "number" !== typeof c && (c = la(a), Dc[a] = c, Ec += 1)) : c = hb(a);
  return c
}
Fc = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Gc.call(this, a);
    case 2:
      return Hc.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Fc.b = Gc;
Fc.a = Hc;
I = Fc;
function Ic(a) {
  if(a) {
    var b = a.h & 16384, a = (b ? b : a.Kd) ? l : a.h ? n : y(Va, a)
  }else {
    a = y(Va, a)
  }
  return a
}
function Jc(a) {
  var b = a instanceof Kc;
  return b ? b : a instanceof Lc
}
function Mc(a, b, c, d, f) {
  for(;0 !== f;) {
    c[d] = a[b], d += 1, f -= 1, b += 1
  }
}
var Nc = {};
function Oc(a) {
  return a === l
}
function Pc(a) {
  var b = v(a);
  return b ? "\ufdd0" === a.charAt(0) : b
}
function Qc(a, b) {
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
var Rc, Sc = m;
function Tc(a, b) {
  var c = R(a), d = R(b);
  return c < d ? -1 : c > d ? 1 : Sc.n(a, b, c, 0)
}
function Uc(a, b, c, d) {
  for(;;) {
    var f = Qc(kc.a(a, d), kc.a(b, d)), g = 0 === f;
    if(g ? d + 1 < c : g) {
      d += 1
    }else {
      return f
    }
  }
}
Sc = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return Tc.call(this, a, b);
    case 4:
      return Uc.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Sc.a = Tc;
Sc.n = Uc;
Rc = Sc;
var Vc, Wc = m;
function Xc(a, b) {
  var c = J(b);
  return c ? Yc.e ? Yc.e(a, K(c), N(c)) : Yc.call(m, a, K(c), N(c)) : a.A ? a.A() : a.call(m)
}
function $c(a, b, c) {
  for(c = J(c);;) {
    if(c) {
      b = a.a ? a.a(b, K(c)) : a.call(m, b, K(c)), c = N(c)
    }else {
      return b
    }
  }
}
Wc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Xc.call(this, a, b);
    case 3:
      return $c.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Wc.a = Xc;
Wc.e = $c;
Vc = Wc;
var Yc, ad = m;
function bd(a, b) {
  var c;
  if(c = b) {
    c = (c = b.h & 524288) ? c : b.nc
  }
  return c ? b.xa(b, a) : b instanceof Array ? Kb.a(b, a) : ya(b) ? Kb.a(b, a) : y(ab, b) ? cb.a(b, a) : Vc.a(a, b)
}
function cd(a, b, c) {
  var d;
  if(d = c) {
    d = (d = c.h & 524288) ? d : c.nc
  }
  return d ? c.ya(c, a, b) : c instanceof Array ? Kb.e(c, a, b) : ya(c) ? Kb.e(c, a, b) : y(ab, c) ? cb.e(c, a, b) : Vc.e(a, b, c)
}
ad = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return bd.call(this, a, b);
    case 3:
      return cd.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ad.a = bd;
ad.e = cd;
Yc = ad;
function dd(a) {
  return 0 <= a ? Math.floor.b ? Math.floor.b(a) : Math.floor.call(m, a) : Math.ceil.b ? Math.ceil.b(a) : Math.ceil.call(m, a)
}
function ed(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24
}
var fd, gd = m;
function hd(a) {
  return a == m ? "" : a.toString()
}
function id(a, b) {
  return function(a, b) {
    for(;;) {
      if(w(b)) {
        var f = a.append(gd.b(K(b))), g = N(b), a = f, b = g
      }else {
        return gd.b(a)
      }
    }
  }.call(m, new sa(gd.b(a)), b)
}
function jd(a, b) {
  var c = m;
  1 < arguments.length && (c = P(Array.prototype.slice.call(arguments, 1), 0));
  return id.call(this, a, c)
}
jd.o = 1;
jd.k = function(a) {
  var b = K(a), a = L(a);
  return id(b, a)
};
jd.g = id;
gd = function(a, b) {
  switch(arguments.length) {
    case 0:
      return"";
    case 1:
      return hd.call(this, a);
    default:
      return jd.g(a, P(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
gd.o = 1;
gd.k = jd.k;
gd.A = ba("");
gd.b = hd;
gd.g = jd.g;
fd = gd;
var H, kd = m;
function ld(a) {
  return Pc(a) ? fd.g(":", P([a.substring(2, a.length)], 0)) : a == m ? "" : a.toString()
}
function md(a, b) {
  return function(a, b) {
    for(;;) {
      if(w(b)) {
        var f = a.append(kd.b(K(b))), g = N(b), a = f, b = g
      }else {
        return fd.b(a)
      }
    }
  }.call(m, new sa(kd.b(a)), b)
}
function nd(a, b) {
  var c = m;
  1 < arguments.length && (c = P(Array.prototype.slice.call(arguments, 1), 0));
  return md.call(this, a, c)
}
nd.o = 1;
nd.k = function(a) {
  var b = K(a), a = L(a);
  return md(b, a)
};
nd.g = md;
kd = function(a, b) {
  switch(arguments.length) {
    case 0:
      return"";
    case 1:
      return ld.call(this, a);
    default:
      return nd.g(a, P(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
kd.o = 1;
kd.k = nd.k;
kd.A = ba("");
kd.b = ld;
kd.g = nd.g;
H = kd;
var od, pd = m, pd = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return a.substring(b);
    case 3:
      return a.substring(b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
pd.a = function(a, b) {
  return a.substring(b)
};
pd.e = function(a, b, c) {
  return a.substring(b, c)
};
od = pd;
var qd, rd = m;
function sd(a) {
  return Pc(a) ? a : a instanceof wb ? fd.g("\ufdd0", P([":", od.a(a, 2)], 0)) : fd.g("\ufdd0", P([":", a], 0))
}
function td(a, b) {
  return rd.b(fd.g(a, P(["/", b], 0)))
}
rd = function(a, b) {
  switch(arguments.length) {
    case 1:
      return sd.call(this, a);
    case 2:
      return td.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
rd.b = sd;
rd.a = td;
qd = rd;
function Tb(a, b) {
  var c;
  c = b ? ((c = b.h & 16777216) ? c : b.Id) || (b.h ? 0 : y(kb, b)) : y(kb, b);
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
  return w(c) ? l : n
}
function xb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2)
}
function Rb(a) {
  return Yc.e(function(a, c) {
    return xb(a, I.a(c, n))
  }, I.a(K(a), n), N(a))
}
function ud(a) {
  for(var b = 0, a = J(a);;) {
    if(a) {
      var c = K(a), b = (b + (I.b(vd.b ? vd.b(c) : vd.call(m, c)) ^ I.b(wd.b ? wd.b(c) : wd.call(m, c)))) % 4503599627370496, a = N(a)
    }else {
      return b
    }
  }
}
function xd(a, b, c, d, f) {
  this.m = a;
  this.Ra = b;
  this.ia = c;
  this.count = d;
  this.l = f;
  this.r = 0;
  this.h = 65413358
}
t = xd.prototype;
t.J = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Rb(a)
};
t.fa = function() {
  return 1 === this.count ? m : this.ia
};
t.I = function(a, b) {
  return new xd(this.m, b, a, this.count + 1, m)
};
t.toString = function() {
  return vb(this)
};
t.w = aa();
t.z = q("count");
t.O = q("Ra");
t.R = function() {
  return 1 === this.count ? Ab : this.ia
};
t.G = function(a, b) {
  return Tb(a, b)
};
t.D = function(a, b) {
  return new xd(b, this.Ra, this.ia, this.count, this.l)
};
t.C = q("m");
function yd(a) {
  this.m = a;
  this.r = 0;
  this.h = 65413326
}
t = yd.prototype;
t.J = ba(0);
t.fa = ba(m);
t.I = function(a, b) {
  return new xd(this.m, b, m, 1, m)
};
t.toString = function() {
  return vb(this)
};
t.w = ba(m);
t.z = ba(0);
t.O = ba(m);
t.R = function() {
  return Ab
};
t.G = function(a, b) {
  return Tb(a, b)
};
t.D = function(a, b) {
  return new yd(b)
};
t.C = q("m");
var Ab = new yd(m), Sb;
function zd(a) {
  var b;
  if(a instanceof zb) {
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
  for(var a = b.length, c = Ab;;) {
    if(0 < a) {
      var d = a - 1, c = c.I(c, b[a - 1]), a = d
    }else {
      return c
    }
  }
}
function Ad(a) {
  var b = m;
  0 < arguments.length && (b = P(Array.prototype.slice.call(arguments, 0), 0));
  return zd.call(this, b)
}
Ad.o = 0;
Ad.k = function(a) {
  a = J(a);
  return zd(a)
};
Ad.g = zd;
Sb = Ad;
function Bd(a, b, c, d) {
  this.m = a;
  this.Ra = b;
  this.ia = c;
  this.l = d;
  this.r = 0;
  this.h = 65405164
}
t = Bd.prototype;
t.J = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Rb(a)
};
t.fa = function() {
  return this.ia == m ? m : jb(this.ia)
};
t.I = function(a, b) {
  return new Bd(m, b, a, this.l)
};
t.toString = function() {
  return vb(this)
};
t.w = aa();
t.O = q("Ra");
t.R = function() {
  return this.ia == m ? Ab : this.ia
};
t.G = function(a, b) {
  return Tb(a, b)
};
t.D = function(a, b) {
  return new Bd(b, this.Ra, this.ia, this.l)
};
t.C = q("m");
function Q(a, b) {
  var c = b == m;
  if(!c && (c = b)) {
    c = (c = b.h & 64) ? c : b.zb
  }
  return c ? new Bd(m, a, b, m) : new Bd(m, a, J(b), m)
}
Aa.string = l;
Ba.string = function(a) {
  return a.length
};
hb.string = function(a) {
  return la(a)
};
function S(a) {
  this.Jb = a;
  this.r = 0;
  this.h = 1
}
var Cd = m, Cd = function(a, b, c) {
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
S.prototype.call = Cd;
S.prototype.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
var Dd = m, Dd = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return oc.a(b, this.toString());
    case 3:
      return oc.e(b, this.toString(), c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
String.prototype.call = Dd;
String.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
String.prototype.apply = function(a, b) {
  return 2 > b.length ? oc.a(b[0], a) : oc.e(b[0], a, b[1])
};
function Ed(a) {
  var b = a.x;
  if(a.Ob) {
    return b
  }
  a.x = b.A ? b.A() : b.call(m);
  a.Ob = l;
  return a.x
}
function Fd(a, b, c, d) {
  this.m = a;
  this.Ob = b;
  this.x = c;
  this.l = d;
  this.r = 0;
  this.h = 31850700
}
t = Fd.prototype;
t.J = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Rb(a)
};
t.fa = function(a) {
  return jb(a.R(a))
};
t.I = function(a, b) {
  return Q(b, a)
};
t.toString = function() {
  return vb(this)
};
t.w = function(a) {
  return J(Ed(a))
};
t.O = function(a) {
  return K(Ed(a))
};
t.R = function(a) {
  return L(Ed(a))
};
t.G = function(a, b) {
  return Tb(a, b)
};
t.D = function(a, b) {
  return new Fd(b, this.Ob, this.x, this.l)
};
t.C = q("m");
function Gd(a, b) {
  this.ib = a;
  this.end = b;
  this.r = 0;
  this.h = 2
}
Gd.prototype.z = q("end");
Gd.prototype.add = function(a) {
  this.ib[this.end] = a;
  return this.end += 1
};
Gd.prototype.aa = function() {
  var a = new Hd(this.ib, 0, this.end);
  this.ib = m;
  return a
};
function Hd(a, b, c) {
  this.c = a;
  this.H = b;
  this.end = c;
  this.r = 0;
  this.h = 524306
}
t = Hd.prototype;
t.xa = function(a, b) {
  return Kb.n(this.c, b, this.c[this.H], this.H + 1)
};
t.ya = function(a, b, c) {
  return Kb.n(this.c, b, c, this.H)
};
t.Pb = function() {
  this.H === this.end && e(Error("-drop-first of empty chunk"));
  return new Hd(this.c, this.H + 1, this.end)
};
t.v = function(a, b) {
  return this.c[this.H + b]
};
t.N = function(a, b, c) {
  return((a = 0 <= b) ? b < this.end - this.H : a) ? this.c[this.H + b] : c
};
t.z = function() {
  return this.end - this.H
};
var Id, Jd = m;
function Kd(a) {
  return new Hd(a, 0, a.length)
}
function Ld(a, b) {
  return new Hd(a, b, a.length)
}
function Md(a, b, c) {
  return new Hd(a, b, c)
}
Jd = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return Kd.call(this, a);
    case 2:
      return Ld.call(this, a, b);
    case 3:
      return Md.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Jd.b = Kd;
Jd.a = Ld;
Jd.e = Md;
Id = Jd;
function Kc(a, b, c, d) {
  this.aa = a;
  this.oa = b;
  this.m = c;
  this.l = d;
  this.h = 31850604;
  this.r = 1536
}
t = Kc.prototype;
t.J = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Rb(a)
};
t.I = function(a, b) {
  return Q(b, a)
};
t.toString = function() {
  return vb(this)
};
t.w = aa();
t.O = function() {
  return D.a(this.aa, 0)
};
t.R = function() {
  return 1 < Ba(this.aa) ? new Kc(rb(this.aa), this.oa, this.m, m) : this.oa == m ? Ab : this.oa
};
t.Qb = function() {
  return this.oa == m ? m : this.oa
};
t.G = function(a, b) {
  return Tb(a, b)
};
t.D = function(a, b) {
  return new Kc(this.aa, this.oa, b, this.l)
};
t.C = q("m");
t.kb = q("aa");
t.Ya = function() {
  return this.oa == m ? Ab : this.oa
};
function Nd(a, b) {
  return 0 === Ba(a) ? b : new Kc(a, b, m, m)
}
function Od(a) {
  for(var b = [];;) {
    if(J(a)) {
      b.push(K(a)), a = N(a)
    }else {
      return b
    }
  }
}
function Pd(a, b) {
  if(Pb(a)) {
    return R(a)
  }
  for(var c = a, d = b, f = 0;;) {
    var g;
    g = (g = 0 < d) ? J(c) : g;
    if(w(g)) {
      c = N(c), d -= 1, f += 1
    }else {
      return f
    }
  }
}
var Rd = function Qd(b) {
  return b == m ? m : N(b) == m ? J(K(b)) : Q(K(b), Qd(N(b)))
}, Sd, Td = m;
function Ud(a, b, c) {
  return Q(a, Q(b, c))
}
function Vd(a, b, c, d) {
  return Q(a, Q(b, Q(c, d)))
}
function Wd(a, b, c, d, f) {
  return Q(a, Q(b, Q(c, Q(d, Rd(f)))))
}
function Xd(a, b, c, d, f) {
  var g = m;
  4 < arguments.length && (g = P(Array.prototype.slice.call(arguments, 4), 0));
  return Wd.call(this, a, b, c, d, g)
}
Xd.o = 4;
Xd.k = function(a) {
  var b = K(a), a = N(a), c = K(a), a = N(a), d = K(a), a = N(a), f = K(a), a = L(a);
  return Wd(b, c, d, f, a)
};
Xd.g = Wd;
Td = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 1:
      return J(a);
    case 2:
      return Q(a, b);
    case 3:
      return Ud.call(this, a, b, c);
    case 4:
      return Vd.call(this, a, b, c, d);
    default:
      return Xd.g(a, b, c, d, P(arguments, 4))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Td.o = 4;
Td.k = Xd.k;
Td.b = function(a) {
  return J(a)
};
Td.a = function(a, b) {
  return Q(a, b)
};
Td.e = Ud;
Td.n = Vd;
Td.g = Xd.g;
Sd = Td;
function Yd(a, b, c) {
  var d = J(c);
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
  var j = E(k), p = F(k);
  if(7 === b) {
    return a.wa ? a.wa(c, d, f, g, i, a, j) : a.wa ? a.wa(c, d, f, g, i, a, j) : a.call(m, c, d, f, g, i, a, j)
  }
  var k = E(p), s = F(p);
  if(8 === b) {
    return a.xb ? a.xb(c, d, f, g, i, a, j, k) : a.xb ? a.xb(c, d, f, g, i, a, j, k) : a.call(m, c, d, f, g, i, a, j, k)
  }
  var p = E(s), r = F(s);
  if(9 === b) {
    return a.yb ? a.yb(c, d, f, g, i, a, j, k, p) : a.yb ? a.yb(c, d, f, g, i, a, j, k, p) : a.call(m, c, d, f, g, i, a, j, k, p)
  }
  var s = E(r), x = F(r);
  if(10 === b) {
    return a.mb ? a.mb(c, d, f, g, i, a, j, k, p, s) : a.mb ? a.mb(c, d, f, g, i, a, j, k, p, s) : a.call(m, c, d, f, g, i, a, j, k, p, s)
  }
  var r = E(x), C = F(x);
  if(11 === b) {
    return a.nb ? a.nb(c, d, f, g, i, a, j, k, p, s, r) : a.nb ? a.nb(c, d, f, g, i, a, j, k, p, s, r) : a.call(m, c, d, f, g, i, a, j, k, p, s, r)
  }
  var x = E(C), z = F(C);
  if(12 === b) {
    return a.ob ? a.ob(c, d, f, g, i, a, j, k, p, s, r, x) : a.ob ? a.ob(c, d, f, g, i, a, j, k, p, s, r, x) : a.call(m, c, d, f, g, i, a, j, k, p, s, r, x)
  }
  var C = E(z), T = F(z);
  if(13 === b) {
    return a.pb ? a.pb(c, d, f, g, i, a, j, k, p, s, r, x, C) : a.pb ? a.pb(c, d, f, g, i, a, j, k, p, s, r, x, C) : a.call(m, c, d, f, g, i, a, j, k, p, s, r, x, C)
  }
  var z = E(T), A = F(T);
  if(14 === b) {
    return a.qb ? a.qb(c, d, f, g, i, a, j, k, p, s, r, x, C, z) : a.qb ? a.qb(c, d, f, g, i, a, j, k, p, s, r, x, C, z) : a.call(m, c, d, f, g, i, a, j, k, p, s, r, x, C, z)
  }
  var T = E(A), M = F(A);
  if(15 === b) {
    return a.rb ? a.rb(c, d, f, g, i, a, j, k, p, s, r, x, C, z, T) : a.rb ? a.rb(c, d, f, g, i, a, j, k, p, s, r, x, C, z, T) : a.call(m, c, d, f, g, i, a, j, k, p, s, r, x, C, z, T)
  }
  var A = E(M), Da = F(M);
  if(16 === b) {
    return a.sb ? a.sb(c, d, f, g, i, a, j, k, p, s, r, x, C, z, T, A) : a.sb ? a.sb(c, d, f, g, i, a, j, k, p, s, r, x, C, z, T, A) : a.call(m, c, d, f, g, i, a, j, k, p, s, r, x, C, z, T, A)
  }
  var M = E(Da), bb = F(Da);
  if(17 === b) {
    return a.tb ? a.tb(c, d, f, g, i, a, j, k, p, s, r, x, C, z, T, A, M) : a.tb ? a.tb(c, d, f, g, i, a, j, k, p, s, r, x, C, z, T, A, M) : a.call(m, c, d, f, g, i, a, j, k, p, s, r, x, C, z, T, A, M)
  }
  var Da = E(bb), Zc = F(bb);
  if(18 === b) {
    return a.ub ? a.ub(c, d, f, g, i, a, j, k, p, s, r, x, C, z, T, A, M, Da) : a.ub ? a.ub(c, d, f, g, i, a, j, k, p, s, r, x, C, z, T, A, M, Da) : a.call(m, c, d, f, g, i, a, j, k, p, s, r, x, C, z, T, A, M, Da)
  }
  bb = E(Zc);
  Zc = F(Zc);
  if(19 === b) {
    return a.vb ? a.vb(c, d, f, g, i, a, j, k, p, s, r, x, C, z, T, A, M, Da, bb) : a.vb ? a.vb(c, d, f, g, i, a, j, k, p, s, r, x, C, z, T, A, M, Da, bb) : a.call(m, c, d, f, g, i, a, j, k, p, s, r, x, C, z, T, A, M, Da, bb)
  }
  var Te = E(Zc);
  F(Zc);
  if(20 === b) {
    return a.wb ? a.wb(c, d, f, g, i, a, j, k, p, s, r, x, C, z, T, A, M, Da, bb, Te) : a.wb ? a.wb(c, d, f, g, i, a, j, k, p, s, r, x, C, z, T, A, M, Da, bb, Te) : a.call(m, c, d, f, g, i, a, j, k, p, s, r, x, C, z, T, A, M, Da, bb, Te)
  }
  e(Error("Only up to 20 arguments supported on functions"))
}
var Ac, Zd = m;
function $d(a, b) {
  var c = a.o;
  if(a.k) {
    var d = Pd(b, c + 1);
    return d <= c ? Yd(a, d, b) : a.k(b)
  }
  return a.apply(a, Od(b))
}
function ae(a, b, c) {
  b = Sd.a(b, c);
  c = a.o;
  if(a.k) {
    var d = Pd(b, c + 1);
    return d <= c ? Yd(a, d, b) : a.k(b)
  }
  return a.apply(a, Od(b))
}
function be(a, b, c, d) {
  b = Sd.e(b, c, d);
  c = a.o;
  return a.k ? (d = Pd(b, c + 1), d <= c ? Yd(a, d, b) : a.k(b)) : a.apply(a, Od(b))
}
function ce(a, b, c, d, f) {
  b = Sd.n(b, c, d, f);
  c = a.o;
  return a.k ? (d = Pd(b, c + 1), d <= c ? Yd(a, d, b) : a.k(b)) : a.apply(a, Od(b))
}
function de(a, b, c, d, f, g) {
  b = Q(b, Q(c, Q(d, Q(f, Rd(g)))));
  c = a.o;
  return a.k ? (d = Pd(b, c + 1), d <= c ? Yd(a, d, b) : a.k(b)) : a.apply(a, Od(b))
}
function ee(a, b, c, d, f, g) {
  var i = m;
  5 < arguments.length && (i = P(Array.prototype.slice.call(arguments, 5), 0));
  return de.call(this, a, b, c, d, f, i)
}
ee.o = 5;
ee.k = function(a) {
  var b = K(a), a = N(a), c = K(a), a = N(a), d = K(a), a = N(a), f = K(a), a = N(a), g = K(a), a = L(a);
  return de(b, c, d, f, g, a)
};
ee.g = de;
Zd = function(a, b, c, d, f, g) {
  switch(arguments.length) {
    case 2:
      return $d.call(this, a, b);
    case 3:
      return ae.call(this, a, b, c);
    case 4:
      return be.call(this, a, b, c, d);
    case 5:
      return ce.call(this, a, b, c, d, f);
    default:
      return ee.g(a, b, c, d, f, P(arguments, 5))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Zd.o = 5;
Zd.k = ee.k;
Zd.a = $d;
Zd.e = ae;
Zd.n = be;
Zd.ba = ce;
Zd.g = ee.g;
Ac = Zd;
var fe, ge = m;
function he(a, b) {
  return!O.a(a, b)
}
function ie(a, b, c) {
  return xa(Ac.n(O, a, b, c))
}
function je(a, b, c) {
  var d = m;
  2 < arguments.length && (d = P(Array.prototype.slice.call(arguments, 2), 0));
  return ie.call(this, a, b, d)
}
je.o = 2;
je.k = function(a) {
  var b = K(a), a = N(a), c = K(a), a = L(a);
  return ie(b, c, a)
};
je.g = ie;
ge = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return n;
    case 2:
      return he.call(this, a, b);
    default:
      return je.g(a, b, P(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
ge.o = 2;
ge.k = je.k;
ge.b = ba(n);
ge.a = he;
ge.g = je.g;
fe = ge;
function ke(a, b) {
  for(;;) {
    if(J(b) == m) {
      return l
    }
    if(w(a.b ? a.b(K(b)) : a.call(m, K(b)))) {
      var c = a, d = N(b), a = c, b = d
    }else {
      return n
    }
  }
}
function le(a) {
  return a
}
function me() {
  function a(a, c, g) {
    var i = m;
    2 < arguments.length && (i = P(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, c, i)
  }
  function b(a, b, c) {
    return xa(Ac.n(wa, a, b, c))
  }
  var c = m;
  a.o = 2;
  a.k = function(a) {
    var c = K(a), a = N(a), g = K(a), a = L(a);
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
        return a.g(b, c, P(arguments, 2))
    }
    e(Error("Invalid arity: " + arguments.length))
  };
  c.o = 2;
  c.k = a.k;
  return c
}
var ne, oe = m;
function pe(a, b) {
  return new Fd(m, n, function() {
    var c = J(b);
    if(c) {
      if(Jc(c)) {
        for(var d = sb(c), f = R(d), g = new Gd(Array(f), 0), i = 0;;) {
          if(i < f) {
            var j = a.b ? a.b(D.a(d, i)) : a.call(m, D.a(d, i));
            g.add(j);
            i += 1
          }else {
            break
          }
        }
        return Nd(g.aa(), oe.a(a, tb(c)))
      }
      return Q(a.b ? a.b(K(c)) : a.call(m, K(c)), oe.a(a, L(c)))
    }
    return m
  }, m)
}
function qe(a, b, c) {
  return new Fd(m, n, function() {
    var d = J(b), f = J(c);
    return(d ? f : d) ? Q(a.a ? a.a(K(d), K(f)) : a.call(m, K(d), K(f)), oe.e(a, L(d), L(f))) : m
  }, m)
}
function re(a, b, c, d) {
  return new Fd(m, n, function() {
    var f = J(b), g = J(c), i = J(d);
    return(f ? g ? i : g : f) ? Q(a.e ? a.e(K(f), K(g), K(i)) : a.call(m, K(f), K(g), K(i)), oe.n(a, L(f), L(g), L(i))) : m
  }, m)
}
function se(a, b, c, d, f) {
  return oe.a(function(b) {
    return Ac.a(a, b)
  }, function i(a) {
    return new Fd(m, n, function() {
      var b = oe.a(J, a);
      return ke(le, b) ? Q(oe.a(K, b), i(oe.a(L, b))) : m
    }, m)
  }(bc.g(f, d, P([c, b], 0))))
}
function te(a, b, c, d, f) {
  var g = m;
  4 < arguments.length && (g = P(Array.prototype.slice.call(arguments, 4), 0));
  return se.call(this, a, b, c, d, g)
}
te.o = 4;
te.k = function(a) {
  var b = K(a), a = N(a), c = K(a), a = N(a), d = K(a), a = N(a), f = K(a), a = L(a);
  return se(b, c, d, f, a)
};
te.g = se;
oe = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 2:
      return pe.call(this, a, b);
    case 3:
      return qe.call(this, a, b, c);
    case 4:
      return re.call(this, a, b, c, d);
    default:
      return te.g(a, b, c, d, P(arguments, 4))
  }
  e(Error("Invalid arity: " + arguments.length))
};
oe.o = 4;
oe.k = te.k;
oe.a = pe;
oe.e = qe;
oe.n = re;
oe.g = te.g;
ne = oe;
var ve = function ue(b, c) {
  return new Fd(m, n, function() {
    if(0 < b) {
      var d = J(c);
      return d ? Q(K(d), ue(b - 1, L(d))) : m
    }
    return m
  }, m)
}, we, xe = m;
function ye(a) {
  return new Fd(m, n, function() {
    return Q(a.A ? a.A() : a.call(m), xe.b(a))
  }, m)
}
function ze(a, b) {
  return ve(a, xe.b(b))
}
xe = function(a, b) {
  switch(arguments.length) {
    case 1:
      return ye.call(this, a);
    case 2:
      return ze.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
xe.b = ye;
xe.a = ze;
we = xe;
function Ae(a) {
  return function c(a, f) {
    return new Fd(m, n, function() {
      var g = J(a);
      return g ? Q(K(g), c(L(g), f)) : J(f) ? c(K(f), L(f)) : m
    }, m)
  }(m, a)
}
var Be, Ce = m;
function De(a, b) {
  return Ae(ne.a(a, b))
}
function Ee(a, b, c) {
  return Ae(Ac.n(ne, a, b, c))
}
function Fe(a, b, c) {
  var d = m;
  2 < arguments.length && (d = P(Array.prototype.slice.call(arguments, 2), 0));
  return Ee.call(this, a, b, d)
}
Fe.o = 2;
Fe.k = function(a) {
  var b = K(a), a = N(a), c = K(a), a = L(a);
  return Ee(b, c, a)
};
Fe.g = Ee;
Ce = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return De.call(this, a, b);
    default:
      return Fe.g(a, b, P(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ce.o = 2;
Ce.k = Fe.k;
Ce.a = De;
Ce.g = Fe.g;
Be = Ce;
var He = function Ge(b, c) {
  return new Fd(m, n, function() {
    var d = J(c);
    if(d) {
      if(Jc(d)) {
        for(var f = sb(d), g = R(f), i = new Gd(Array(g), 0), j = 0;;) {
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
        return Nd(i.aa(), Ge(b, tb(d)))
      }
      f = K(d);
      d = L(d);
      return w(b.b ? b.b(f) : b.call(m, f)) ? Q(f, Ge(b, d)) : Ge(b, d)
    }
    return m
  }, m)
};
function Ie(a, b) {
  var c;
  if(a != m) {
    if(c = a) {
      c = (c = a.r & 4) ? c : a.Fd
    }
    c ? (c = Yc.e(ob, nb(a), b), c = pb(c)) : c = Yc.e(Ca, a, b)
  }else {
    c = Yc.e(bc, Ab, b)
  }
  return c
}
function Je(a, b) {
  this.q = a;
  this.c = b
}
function Ke(a) {
  a = a.j;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function Le(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var d = new Je(a, Array(32));
    d.c[0] = c;
    c = d;
    b -= 5
  }
}
var Ne = function Me(b, c, d, f) {
  var g = new Je(d.q, d.c.slice()), i = b.j - 1 >>> c & 31;
  5 === c ? g.c[i] = f : (d = d.c[i], b = d != m ? Me(b, c - 5, d, f) : Le(m, c - 5, f), g.c[i] = b);
  return g
};
function Oe(a, b) {
  var c = 0 <= b;
  if(c ? b < a.j : c) {
    if(b >= Ke(a)) {
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
    e(Error([H("No item "), H(b), H(" in vector of length "), H(a.j)].join("")))
  }
}
var Qe = function Pe(b, c, d, f, g) {
  var i = new Je(d.q, d.c.slice());
  if(0 === c) {
    i.c[f & 31] = g
  }else {
    var j = f >>> c & 31, b = Pe(b, c - 5, d.c[j], f, g);
    i.c[j] = b
  }
  return i
};
function Re(a, b, c, d, f, g) {
  this.m = a;
  this.j = b;
  this.shift = c;
  this.root = d;
  this.L = f;
  this.l = g;
  this.r = 4;
  this.h = 167668511
}
t = Re.prototype;
t.va = function() {
  return new Se(this.j, this.shift, Ue.b ? Ue.b(this.root) : Ue.call(m, this.root), Ve.b ? Ve.b(this.L) : Ve.call(m, this.L))
};
t.J = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Rb(a)
};
t.B = function(a, b) {
  return a.N(a, b, m)
};
t.t = function(a, b, c) {
  return a.N(a, b, c)
};
t.ja = function(a, b, c) {
  var d = 0 <= b;
  if(d ? b < this.j : d) {
    return Ke(a) <= b ? (a = this.L.slice(), a[b & 31] = c, new Re(this.m, this.j, this.shift, this.root, a, m)) : new Re(this.m, this.j, this.shift, Qe(a, this.shift, this.root, b, c), this.L, m)
  }
  if(b === this.j) {
    return a.I(a, c)
  }
  e(Error([H("Index "), H(b), H(" out of bounds  [0,"), H(this.j), H("]")].join("")))
};
var We = m, We = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.B(this, b);
    case 3:
      return this.t(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
t = Re.prototype;
t.call = We;
t.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
t.I = function(a, b) {
  if(32 > this.j - Ke(a)) {
    var c = this.L.slice();
    c.push(b);
    return new Re(this.m, this.j + 1, this.shift, this.root, c, m)
  }
  var d = this.j >>> 5 > 1 << this.shift, c = d ? this.shift + 5 : this.shift;
  if(d) {
    d = new Je(m, Array(32));
    d.c[0] = this.root;
    var f = Le(m, this.shift, new Je(m, this.L));
    d.c[1] = f
  }else {
    d = Ne(a, this.shift, this.root, new Je(m, this.L))
  }
  return new Re(this.m, this.j + 1, c, d, [b], m)
};
t.Rb = function(a) {
  return a.v(a, 0)
};
t.Sb = function(a) {
  return a.v(a, 1)
};
t.toString = function() {
  return vb(this)
};
t.xa = function(a, b) {
  return Fb.a(a, b)
};
t.ya = function(a, b, c) {
  return Fb.e(a, b, c)
};
t.w = function(a) {
  return 0 === this.j ? m : 32 > this.j ? P.b(this.L) : U.e ? U.e(a, 0, 0) : U.call(m, a, 0, 0)
};
t.z = q("j");
t.G = function(a, b) {
  return Tb(a, b)
};
t.D = function(a, b) {
  return new Re(b, this.j, this.shift, this.root, this.L, this.l)
};
t.C = q("m");
t.v = function(a, b) {
  return Oe(a, b)[b & 31]
};
t.N = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.j : d) ? a.v(a, b) : c
};
var Xe = new Je(m, Array(32)), Ye = new Re(m, 0, 5, Xe, [], 0);
function Ze(a) {
  var b = a.length;
  if(32 > b) {
    return new Re(m, b, 5, Xe, a, m)
  }
  for(var c = a.slice(0, 32), d = 32, f = nb(new Re(m, 32, 5, Xe, c, m));;) {
    if(d < b) {
      c = d + 1, f = ob(f, a[d]), d = c
    }else {
      return pb(f)
    }
  }
}
function $e(a) {
  return pb(Yc.e(ob, nb(Ye), a))
}
function af(a) {
  var b = m;
  0 < arguments.length && (b = P(Array.prototype.slice.call(arguments, 0), 0));
  return $e(b)
}
af.o = 0;
af.k = function(a) {
  a = J(a);
  return $e(a)
};
af.g = function(a) {
  return $e(a)
};
function Lc(a, b, c, d, f, g) {
  this.V = a;
  this.T = b;
  this.p = c;
  this.H = d;
  this.m = f;
  this.l = g;
  this.h = 31719660;
  this.r = 1536
}
t = Lc.prototype;
t.J = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Rb(a)
};
t.fa = function(a) {
  return this.H + 1 < this.T.length ? (a = U.n ? U.n(this.V, this.T, this.p, this.H + 1) : U.call(m, this.V, this.T, this.p, this.H + 1), a == m ? m : a) : a.Qb(a)
};
t.I = function(a, b) {
  return Q(b, a)
};
t.toString = function() {
  return vb(this)
};
t.w = aa();
t.O = function() {
  return this.T[this.H]
};
t.R = function(a) {
  return this.H + 1 < this.T.length ? (a = U.n ? U.n(this.V, this.T, this.p, this.H + 1) : U.call(m, this.V, this.T, this.p, this.H + 1), a == m ? Ab : a) : a.Ya(a)
};
t.Qb = function() {
  var a = this.T.length, a = this.p + a < Ba(this.V) ? U.e ? U.e(this.V, this.p + a, 0) : U.call(m, this.V, this.p + a, 0) : m;
  return a == m ? m : a
};
t.G = function(a, b) {
  return Tb(a, b)
};
t.D = function(a, b) {
  return U.ba ? U.ba(this.V, this.T, this.p, this.H, b) : U.call(m, this.V, this.T, this.p, this.H, b)
};
t.kb = function() {
  return Id.a(this.T, this.H)
};
t.Ya = function() {
  var a = this.T.length, a = this.p + a < Ba(this.V) ? U.e ? U.e(this.V, this.p + a, 0) : U.call(m, this.V, this.p + a, 0) : m;
  return a == m ? Ab : a
};
var U, bf = m;
function cf(a, b, c) {
  return new Lc(a, Oe(a, b), b, c, m, m)
}
function df(a, b, c, d) {
  return new Lc(a, b, c, d, m, m)
}
function ef(a, b, c, d, f) {
  return new Lc(a, b, c, d, f, m)
}
bf = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 3:
      return cf.call(this, a, b, c);
    case 4:
      return df.call(this, a, b, c, d);
    case 5:
      return ef.call(this, a, b, c, d, f)
  }
  e(Error("Invalid arity: " + arguments.length))
};
bf.e = cf;
bf.n = df;
bf.ba = ef;
U = bf;
function Ue(a) {
  return new Je({}, a.c.slice())
}
function Ve(a) {
  var b = Array(32);
  Mc(a, 0, b, 0, a.length);
  return b
}
var gf = function ff(b, c, d, f) {
  var d = b.root.q === d.q ? d : new Je(b.root.q, d.c.slice()), g = b.j - 1 >>> c & 31;
  if(5 === c) {
    b = f
  }else {
    var i = d.c[g], b = i != m ? ff(b, c - 5, i, f) : Le(b.root.q, c - 5, f)
  }
  d.c[g] = b;
  return d
};
function Se(a, b, c, d) {
  this.j = a;
  this.shift = b;
  this.root = c;
  this.L = d;
  this.h = 275;
  this.r = 88
}
var hf = m, hf = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.B(this, b);
    case 3:
      return this.t(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
t = Se.prototype;
t.call = hf;
t.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
t.B = function(a, b) {
  return a.N(a, b, m)
};
t.t = function(a, b, c) {
  return a.N(a, b, c)
};
t.v = function(a, b) {
  if(this.root.q) {
    return Oe(a, b)[b & 31]
  }
  e(Error("nth after persistent!"))
};
t.N = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.j : d) ? a.v(a, b) : c
};
t.z = function() {
  if(this.root.q) {
    return this.j
  }
  e(Error("count after persistent!"))
};
t.Aa = function(a, b, c) {
  var d;
  a: {
    if(a.root.q) {
      var f = 0 <= b;
      if(f ? b < a.j : f) {
        Ke(a) <= b ? a.L[b & 31] = c : (d = function i(d, f) {
          var p = a.root.q === f.q ? f : new Je(a.root.q, f.c.slice());
          if(0 === d) {
            p.c[b & 31] = c
          }else {
            var s = b >>> d & 31, r = i(d - 5, p.c[s]);
            p.c[s] = r
          }
          return p
        }.call(m, a.shift, a.root), a.root = d);
        d = a;
        break a
      }
      if(b === a.j) {
        d = a.pa(a, c);
        break a
      }
      e(Error([H("Index "), H(b), H(" out of bounds for TransientVector of length"), H(a.j)].join("")))
    }
    e(Error("assoc! after persistent!"))
  }
  return d
};
t.pa = function(a, b) {
  if(this.root.q) {
    if(32 > this.j - Ke(a)) {
      this.L[this.j & 31] = b
    }else {
      var c = new Je(this.root.q, this.L), d = Array(32);
      d[0] = b;
      this.L = d;
      if(this.j >>> 5 > 1 << this.shift) {
        var d = Array(32), f = this.shift + 5;
        d[0] = this.root;
        d[1] = Le(this.root.q, this.shift, c);
        this.root = new Je(this.root.q, d);
        this.shift = f
      }else {
        this.root = gf(a, this.shift, this.root, c)
      }
    }
    this.j += 1;
    return a
  }
  e(Error("conj! after persistent!"))
};
t.Ba = function(a) {
  if(this.root.q) {
    this.root.q = m;
    var a = this.j - Ke(a), b = Array(a);
    Mc(this.L, 0, b, 0, a);
    return new Re(m, this.j, this.shift, this.root, b, m)
  }
  e(Error("persistent! called twice"))
};
function jf() {
  this.r = 0;
  this.h = 2097152
}
jf.prototype.G = ba(n);
var kf = new jf;
function lf(a, b) {
  var c;
  c = b == m ? 0 : b ? ((c = b.h & 1024) ? c : b.Gd) || (b.h ? 0 : y(Qa, b)) : y(Qa, b);
  c = c ? R(a) === R(b) ? ke(le, ne.a(function(a) {
    return O.a(oc.e(b, K(a), kf), ac(a))
  }, a)) : m : m;
  return w(c) ? l : n
}
function mf(a, b) {
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
function nf(a, b) {
  var c = I.b(a), d = I.b(b);
  return c < d ? -1 : c > d ? 1 : 0
}
function of(a, b, c) {
  for(var d = a.keys, f = d.length, g = a.ta, a = Cc(a), i = 0, j = nb(pf);;) {
    if(i < f) {
      var k = d[i], i = i + 1, j = qb(j, k, g[k])
    }else {
      return d = Bc, b = qb(j, b, c), b = pb(b), d(b, a)
    }
  }
}
function qf(a, b) {
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
function rf(a, b, c, d, f) {
  this.m = a;
  this.keys = b;
  this.ta = c;
  this.fb = d;
  this.l = f;
  this.r = 4;
  this.h = 16123663
}
t = rf.prototype;
t.va = function(a) {
  a = Ie(vc.A ? vc.A() : vc.call(m), a);
  return nb(a)
};
t.J = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = ud(a)
};
t.B = function(a, b) {
  return a.t(a, b, m)
};
t.t = function(a, b, c) {
  return((a = v(b)) ? mf(b, this.keys) != m : a) ? this.ta[b] : c
};
t.ja = function(a, b, c) {
  if(v(b)) {
    var d = this.fb > sf;
    if(d ? d : this.keys.length >= sf) {
      return of(a, b, c)
    }
    if(mf(b, this.keys) != m) {
      return a = qf(this.ta, this.keys), a[b] = c, new rf(this.m, this.keys, a, this.fb + 1, m)
    }
    a = qf(this.ta, this.keys);
    d = this.keys.slice();
    a[b] = c;
    d.push(b);
    return new rf(this.m, d, a, this.fb + 1, m)
  }
  return of(a, b, c)
};
t.Xa = function(a, b) {
  var c = v(b);
  return(c ? mf(b, this.keys) != m : c) ? l : n
};
var tf = m, tf = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.B(this, b);
    case 3:
      return this.t(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
t = rf.prototype;
t.call = tf;
t.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
t.I = function(a, b) {
  return Ic(b) ? a.ja(a, D.a(b, 0), D.a(b, 1)) : Yc.e(Ca, a, b)
};
t.toString = function() {
  return vb(this)
};
t.w = function() {
  var a = this;
  return 0 < a.keys.length ? ne.a(function(b) {
    return af.g(P([b, a.ta[b]], 0))
  }, a.keys.sort(nf)) : m
};
t.z = function() {
  return this.keys.length
};
t.G = function(a, b) {
  return lf(a, b)
};
t.D = function(a, b) {
  return new rf(b, this.keys, this.ta, this.fb, this.l)
};
t.C = q("m");
var uf = new rf(m, [], {}, 0, 0), sf = 8;
function vf(a, b) {
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
    if(b instanceof wb) {
      a: {
        for(var d = c.length, f = b.sa, g = 0;;) {
          if(d <= g) {
            c = -1;
            break a
          }
          var i = c[g], j = i instanceof wb;
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
function wf(a, b, c, d) {
  this.m = a;
  this.j = b;
  this.c = c;
  this.l = d;
  this.r = 4;
  this.h = 16123663
}
t = wf.prototype;
t.va = function() {
  return new xf({}, this.c.length, this.c.slice())
};
t.J = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = ud(a)
};
t.B = function(a, b) {
  return a.t(a, b, m)
};
t.t = function(a, b, c) {
  a = vf(a, b);
  return-1 === a ? c : this.c[a + 1]
};
t.ja = function(a, b, c) {
  var d = vf(a, b);
  if(-1 === d) {
    if(this.j < yf) {
      for(var d = a.c, a = d.length, f = Array(a + 2), g = 0;;) {
        if(g < a) {
          f[g] = d[g], g += 1
        }else {
          break
        }
      }
      f[a] = b;
      f[a + 1] = c;
      return new wf(this.m, this.j + 1, f, m)
    }
    return $a(Pa(Ie(pf, a), b, c), this.m)
  }
  if(c === this.c[d + 1]) {
    return a
  }
  b = this.c.slice();
  b[d + 1] = c;
  return new wf(this.m, this.j, b, m)
};
t.Xa = function(a, b) {
  return-1 !== vf(a, b)
};
var zf = m, zf = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.B(this, b);
    case 3:
      return this.t(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
t = wf.prototype;
t.call = zf;
t.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
t.I = function(a, b) {
  return Ic(b) ? a.ja(a, D.a(b, 0), D.a(b, 1)) : Yc.e(Ca, a, b)
};
t.toString = function() {
  return vb(this)
};
t.w = function() {
  var a = this, b;
  if(0 < a.j) {
    var c = a.c.length;
    b = function f(b) {
      return new Fd(m, n, function() {
        return b < c ? Q(Ze([a.c[b], a.c[b + 1]]), f(b + 2)) : m
      }, m)
    }(0)
  }else {
    b = m
  }
  return b
};
t.z = q("j");
t.G = function(a, b) {
  return lf(a, b)
};
t.D = function(a, b) {
  return new wf(b, this.j, this.c, this.l)
};
t.C = q("m");
var Af = new wf(m, 0, [], m), yf = 8;
function va(a, b) {
  var c = b ? a : a.slice();
  return new wf(m, c.length / 2, c, m)
}
function xf(a, b, c) {
  this.Da = a;
  this.ha = b;
  this.c = c;
  this.r = 56;
  this.h = 258
}
t = xf.prototype;
t.Aa = function(a, b, c) {
  if(w(this.Da)) {
    var d = vf(a, b);
    if(-1 === d) {
      if(this.ha + 2 <= 2 * yf) {
        return this.ha += 2, this.c.push(b), this.c.push(c), a
      }
      a = Bf.a ? Bf.a(this.ha, this.c) : Bf.call(m, this.ha, this.c);
      return qb(a, b, c)
    }
    c !== this.c[d + 1] && (this.c[d + 1] = c);
    return a
  }
  e(Error("assoc! after persistent!"))
};
t.pa = function(a, b) {
  if(w(this.Da)) {
    var c;
    c = b ? ((c = b.h & 2048) ? c : b.lc) || (b.h ? 0 : y(Ra, b)) : y(Ra, b);
    if(c) {
      return a.Aa(a, vd.b ? vd.b(b) : vd.call(m, b), wd.b ? wd.b(b) : wd.call(m, b))
    }
    c = J(b);
    for(var d = a;;) {
      var f = K(c);
      if(w(f)) {
        c = N(c), d = d.Aa(d, vd.b ? vd.b(f) : vd.call(m, f), wd.b ? wd.b(f) : wd.call(m, f))
      }else {
        return d
      }
    }
  }else {
    e(Error("conj! after persistent!"))
  }
};
t.Ba = function() {
  if(w(this.Da)) {
    return this.Da = n, new wf(m, dd((this.ha - this.ha % 2) / 2), this.c, m)
  }
  e(Error("persistent! called twice"))
};
t.B = function(a, b) {
  return a.t(a, b, m)
};
t.t = function(a, b, c) {
  if(w(this.Da)) {
    return a = vf(a, b), -1 === a ? c : this.c[a + 1]
  }
  e(Error("lookup after persistent!"))
};
t.z = function() {
  if(w(this.Da)) {
    return dd((this.ha - this.ha % 2) / 2)
  }
  e(Error("count after persistent!"))
};
function Bf(a, b) {
  for(var c = nb(uf), d = 0;;) {
    if(d < a) {
      c = qb(c, b[d], b[d + 1]), d += 2
    }else {
      return c
    }
  }
}
function Cf() {
  this.ca = n
}
function Df(a, b) {
  return v(a) ? a === b : O.a(a, b)
}
var Ef, Ff = m;
function Gf(a, b, c) {
  a = a.slice();
  a[b] = c;
  return a
}
function Hf(a, b, c, d, f) {
  a = a.slice();
  a[b] = c;
  a[d] = f;
  return a
}
Ff = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 3:
      return Gf.call(this, a, b, c);
    case 5:
      return Hf.call(this, a, b, c, d, f)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ff.e = Gf;
Ff.ba = Hf;
Ef = Ff;
var If, Jf = m;
function Kf(a, b, c, d) {
  a = a.Ga(b);
  a.c[c] = d;
  return a
}
function Lf(a, b, c, d, f, g) {
  a = a.Ga(b);
  a.c[c] = d;
  a.c[f] = g;
  return a
}
Jf = function(a, b, c, d, f, g) {
  switch(arguments.length) {
    case 4:
      return Kf.call(this, a, b, c, d);
    case 6:
      return Lf.call(this, a, b, c, d, f, g)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Jf.n = Kf;
Jf.ea = Lf;
If = Jf;
function Mf(a, b, c) {
  this.q = a;
  this.F = b;
  this.c = c
}
t = Mf.prototype;
t.Y = function(a, b, c, d, f, g) {
  var i = 1 << (c >>> b & 31), j = ed(this.F & i - 1);
  if(0 === (this.F & i)) {
    var k = ed(this.F);
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
      j[c >>> b & 31] = Nf.Y(a, b + 5, c, d, f, g);
      for(f = d = 0;;) {
        if(32 > d) {
          0 !== (this.F >>> d & 1) && (j[d] = this.c[f] != m ? Nf.Y(a, b + 5, I.b(this.c[f]), this.c[f], this.c[f + 1], g) : this.c[f + 1], f += 2), d += 1
        }else {
          break
        }
      }
      return new Of(a, k + 1, j)
    }
    b = Array(2 * (k + 4));
    Mc(this.c, 0, b, 0, 2 * j);
    b[2 * j] = d;
    b[2 * j + 1] = f;
    Mc(this.c, 2 * j, b, 2 * (j + 1), 2 * (k - j));
    g.ca = l;
    a = this.Ga(a);
    a.c = b;
    a.F |= i;
    return a
  }
  k = this.c[2 * j];
  i = this.c[2 * j + 1];
  if(k == m) {
    return k = i.Y(a, b + 5, c, d, f, g), k === i ? this : If.n(this, a, 2 * j + 1, k)
  }
  if(Df(d, k)) {
    return f === i ? this : If.n(this, a, 2 * j + 1, f)
  }
  g.ca = l;
  return If.ea(this, a, 2 * j, m, 2 * j + 1, Pf.wa ? Pf.wa(a, b + 5, k, i, c, d, f) : Pf.call(m, a, b + 5, k, i, c, d, f))
};
t.Ta = function() {
  return Qf.b ? Qf.b(this.c) : Qf.call(m, this.c)
};
t.Ga = function(a) {
  if(a === this.q) {
    return this
  }
  var b = ed(this.F), c = Array(0 > b ? 4 : 2 * (b + 1));
  Mc(this.c, 0, c, 0, 2 * b);
  return new Mf(a, this.F, c)
};
t.X = function(a, b, c, d, f) {
  var g = 1 << (b >>> a & 31), i = ed(this.F & g - 1);
  if(0 === (this.F & g)) {
    var j = ed(this.F);
    if(16 <= j) {
      i = Array(32);
      i[b >>> a & 31] = Nf.X(a + 5, b, c, d, f);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.F >>> c & 1) && (i[c] = this.c[d] != m ? Nf.X(a + 5, I.b(this.c[d]), this.c[d], this.c[d + 1], f) : this.c[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new Of(m, j + 1, i)
    }
    a = Array(2 * (j + 1));
    Mc(this.c, 0, a, 0, 2 * i);
    a[2 * i] = c;
    a[2 * i + 1] = d;
    Mc(this.c, 2 * i, a, 2 * (i + 1), 2 * (j - i));
    f.ca = l;
    return new Mf(m, this.F | g, a)
  }
  j = this.c[2 * i];
  g = this.c[2 * i + 1];
  if(j == m) {
    return j = g.X(a + 5, b, c, d, f), j === g ? this : new Mf(m, this.F, Ef.e(this.c, 2 * i + 1, j))
  }
  if(Df(c, j)) {
    return d === g ? this : new Mf(m, this.F, Ef.e(this.c, 2 * i + 1, d))
  }
  f.ca = l;
  return new Mf(m, this.F, Ef.ba(this.c, 2 * i, m, 2 * i + 1, Pf.ea ? Pf.ea(a + 5, j, g, b, c, d) : Pf.call(m, a + 5, j, g, b, c, d)))
};
t.la = function(a, b, c, d) {
  var f = 1 << (b >>> a & 31);
  if(0 === (this.F & f)) {
    return d
  }
  var g = ed(this.F & f - 1), f = this.c[2 * g], g = this.c[2 * g + 1];
  return f == m ? g.la(a + 5, b, c, d) : Df(c, f) ? g : d
};
var Nf = new Mf(m, 0, []);
function Of(a, b, c) {
  this.q = a;
  this.j = b;
  this.c = c
}
t = Of.prototype;
t.Y = function(a, b, c, d, f, g) {
  var i = c >>> b & 31, j = this.c[i];
  if(j == m) {
    return a = If.n(this, a, i, Nf.Y(a, b + 5, c, d, f, g)), a.j += 1, a
  }
  b = j.Y(a, b + 5, c, d, f, g);
  return b === j ? this : If.n(this, a, i, b)
};
t.Ta = function() {
  return Rf.b ? Rf.b(this.c) : Rf.call(m, this.c)
};
t.Ga = function(a) {
  return a === this.q ? this : new Of(a, this.j, this.c.slice())
};
t.X = function(a, b, c, d, f) {
  var g = b >>> a & 31, i = this.c[g];
  if(i == m) {
    return new Of(m, this.j + 1, Ef.e(this.c, g, Nf.X(a + 5, b, c, d, f)))
  }
  a = i.X(a + 5, b, c, d, f);
  return a === i ? this : new Of(m, this.j, Ef.e(this.c, g, a))
};
t.la = function(a, b, c, d) {
  var f = this.c[b >>> a & 31];
  return f != m ? f.la(a + 5, b, c, d) : d
};
function Sf(a, b, c) {
  for(var b = 2 * b, d = 0;;) {
    if(d < b) {
      if(Df(c, a[d])) {
        return d
      }
      d += 2
    }else {
      return-1
    }
  }
}
function Tf(a, b, c, d) {
  this.q = a;
  this.ka = b;
  this.j = c;
  this.c = d
}
t = Tf.prototype;
t.Y = function(a, b, c, d, f, g) {
  if(c === this.ka) {
    b = Sf(this.c, this.j, d);
    if(-1 === b) {
      if(this.c.length > 2 * this.j) {
        return a = If.ea(this, a, 2 * this.j, d, 2 * this.j + 1, f), g.ca = l, a.j += 1, a
      }
      c = this.c.length;
      b = Array(c + 2);
      Mc(this.c, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = f;
      g.ca = l;
      g = this.j + 1;
      a === this.q ? (this.c = b, this.j = g, a = this) : a = new Tf(this.q, this.ka, g, b);
      return a
    }
    return this.c[b + 1] === f ? this : If.n(this, a, b + 1, f)
  }
  return(new Mf(a, 1 << (this.ka >>> b & 31), [m, this, m, m])).Y(a, b, c, d, f, g)
};
t.Ta = function() {
  return Qf.b ? Qf.b(this.c) : Qf.call(m, this.c)
};
t.Ga = function(a) {
  if(a === this.q) {
    return this
  }
  var b = Array(2 * (this.j + 1));
  Mc(this.c, 0, b, 0, 2 * this.j);
  return new Tf(a, this.ka, this.j, b)
};
t.X = function(a, b, c, d, f) {
  return b === this.ka ? (a = Sf(this.c, this.j, c), -1 === a ? (a = this.c.length, b = Array(a + 2), Mc(this.c, 0, b, 0, a), b[a] = c, b[a + 1] = d, f.ca = l, new Tf(m, this.ka, this.j + 1, b)) : O.a(this.c[a], d) ? this : new Tf(m, this.ka, this.j, Ef.e(this.c, a + 1, d))) : (new Mf(m, 1 << (this.ka >>> a & 31), [m, this])).X(a, b, c, d, f)
};
t.la = function(a, b, c, d) {
  a = Sf(this.c, this.j, c);
  return 0 > a ? d : Df(c, this.c[a]) ? this.c[a + 1] : d
};
var Pf, Uf = m;
function Vf(a, b, c, d, f, g) {
  var i = I.b(b);
  if(i === d) {
    return new Tf(m, i, 2, [b, c, f, g])
  }
  var j = new Cf;
  return Nf.X(a, i, b, c, j).X(a, d, f, g, j)
}
function Wf(a, b, c, d, f, g, i) {
  var j = I.b(c);
  if(j === f) {
    return new Tf(m, j, 2, [c, d, g, i])
  }
  var k = new Cf;
  return Nf.Y(a, b, j, c, d, k).Y(a, b, f, g, i, k)
}
Uf = function(a, b, c, d, f, g, i) {
  switch(arguments.length) {
    case 6:
      return Vf.call(this, a, b, c, d, f, g);
    case 7:
      return Wf.call(this, a, b, c, d, f, g, i)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Uf.ea = Vf;
Uf.wa = Wf;
Pf = Uf;
function Xf(a, b, c, d, f) {
  this.m = a;
  this.Z = b;
  this.p = c;
  this.$ = d;
  this.l = f;
  this.r = 0;
  this.h = 31850572
}
t = Xf.prototype;
t.J = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Rb(a)
};
t.I = function(a, b) {
  return Q(b, a)
};
t.toString = function() {
  return vb(this)
};
t.w = aa();
t.O = function() {
  return this.$ == m ? Ze([this.Z[this.p], this.Z[this.p + 1]]) : K(this.$)
};
t.R = function() {
  return this.$ == m ? Qf.e ? Qf.e(this.Z, this.p + 2, m) : Qf.call(m, this.Z, this.p + 2, m) : Qf.e ? Qf.e(this.Z, this.p, N(this.$)) : Qf.call(m, this.Z, this.p, N(this.$))
};
t.G = function(a, b) {
  return Tb(a, b)
};
t.D = function(a, b) {
  return new Xf(b, this.Z, this.p, this.$, this.l)
};
t.C = q("m");
var Qf, Yf = m;
function Zf(a) {
  return Yf.e(a, 0, m)
}
function $f(a, b, c) {
  if(c == m) {
    for(c = a.length;;) {
      if(b < c) {
        if(a[b] != m) {
          return new Xf(m, a, b, m, m)
        }
        var d = a[b + 1];
        if(w(d) && (d = d.Ta(), w(d))) {
          return new Xf(m, a, b + 2, d, m)
        }
        b += 2
      }else {
        return m
      }
    }
  }else {
    return new Xf(m, a, b, c, m)
  }
}
Yf = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return Zf.call(this, a);
    case 3:
      return $f.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Yf.b = Zf;
Yf.e = $f;
Qf = Yf;
function ag(a, b, c, d, f) {
  this.m = a;
  this.Z = b;
  this.p = c;
  this.$ = d;
  this.l = f;
  this.r = 0;
  this.h = 31850572
}
t = ag.prototype;
t.J = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Rb(a)
};
t.I = function(a, b) {
  return Q(b, a)
};
t.toString = function() {
  return vb(this)
};
t.w = aa();
t.O = function() {
  return K(this.$)
};
t.R = function() {
  return Rf.n ? Rf.n(m, this.Z, this.p, N(this.$)) : Rf.call(m, m, this.Z, this.p, N(this.$))
};
t.G = function(a, b) {
  return Tb(a, b)
};
t.D = function(a, b) {
  return new ag(b, this.Z, this.p, this.$, this.l)
};
t.C = q("m");
var Rf, bg = m;
function cg(a) {
  return bg.n(m, a, 0, m)
}
function dg(a, b, c, d) {
  if(d == m) {
    for(d = b.length;;) {
      if(c < d) {
        var f = b[c];
        if(w(f) && (f = f.Ta(), w(f))) {
          return new ag(a, b, c + 1, f, m)
        }
        c += 1
      }else {
        return m
      }
    }
  }else {
    return new ag(a, b, c, d, m)
  }
}
bg = function(a, b, c, d) {
  switch(arguments.length) {
    case 1:
      return cg.call(this, a);
    case 4:
      return dg.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
bg.b = cg;
bg.n = dg;
Rf = bg;
function eg(a, b, c, d, f, g) {
  this.m = a;
  this.j = b;
  this.root = c;
  this.P = d;
  this.S = f;
  this.l = g;
  this.r = 4;
  this.h = 16123663
}
t = eg.prototype;
t.va = function() {
  return new fg({}, this.root, this.j, this.P, this.S)
};
t.J = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = ud(a)
};
t.B = function(a, b) {
  return a.t(a, b, m)
};
t.t = function(a, b, c) {
  return b == m ? this.P ? this.S : c : this.root == m ? c : this.root.la(0, I.b(b), b, c)
};
t.ja = function(a, b, c) {
  if(b == m) {
    var d = this.P;
    return(d ? c === this.S : d) ? a : new eg(this.m, this.P ? this.j : this.j + 1, this.root, l, c, m)
  }
  d = new Cf;
  c = (this.root == m ? Nf : this.root).X(0, I.b(b), b, c, d);
  return c === this.root ? a : new eg(this.m, d.ca ? this.j + 1 : this.j, c, this.P, this.S, m)
};
t.Xa = function(a, b) {
  return b == m ? this.P : this.root == m ? n : this.root.la(0, I.b(b), b, Nc) !== Nc
};
var gg = m, gg = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.B(this, b);
    case 3:
      return this.t(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
t = eg.prototype;
t.call = gg;
t.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
t.I = function(a, b) {
  return Ic(b) ? a.ja(a, D.a(b, 0), D.a(b, 1)) : Yc.e(Ca, a, b)
};
t.toString = function() {
  return vb(this)
};
t.w = function() {
  if(0 < this.j) {
    var a = this.root != m ? this.root.Ta() : m;
    return this.P ? Q(Ze([m, this.S]), a) : a
  }
  return m
};
t.z = q("j");
t.G = function(a, b) {
  return lf(a, b)
};
t.D = function(a, b) {
  return new eg(b, this.j, this.root, this.P, this.S, this.l)
};
t.C = q("m");
var pf = new eg(m, 0, m, n, m, 0);
function fg(a, b, c, d, f) {
  this.q = a;
  this.root = b;
  this.count = c;
  this.P = d;
  this.S = f;
  this.r = 56;
  this.h = 258
}
t = fg.prototype;
t.Aa = function(a, b, c) {
  return hg(a, b, c)
};
t.pa = function(a, b) {
  var c;
  a: {
    if(a.q) {
      c = b ? ((c = b.h & 2048) ? c : b.lc) || (b.h ? 0 : y(Ra, b)) : y(Ra, b);
      if(c) {
        c = hg(a, vd.b ? vd.b(b) : vd.call(m, b), wd.b ? wd.b(b) : wd.call(m, b));
        break a
      }
      c = J(b);
      for(var d = a;;) {
        var f = K(c);
        if(w(f)) {
          c = N(c), d = hg(d, vd.b ? vd.b(f) : vd.call(m, f), wd.b ? wd.b(f) : wd.call(m, f))
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
t.Ba = function(a) {
  var b;
  a.q ? (a.q = m, b = new eg(m, a.count, a.root, a.P, a.S, m)) : e(Error("persistent! called twice"));
  return b
};
t.B = function(a, b) {
  return b == m ? this.P ? this.S : m : this.root == m ? m : this.root.la(0, I.b(b), b)
};
t.t = function(a, b, c) {
  return b == m ? this.P ? this.S : c : this.root == m ? c : this.root.la(0, I.b(b), b, c)
};
t.z = function() {
  if(this.q) {
    return this.count
  }
  e(Error("count after persistent!"))
};
function hg(a, b, c) {
  if(a.q) {
    if(b == m) {
      a.S !== c && (a.S = c), a.P || (a.count += 1, a.P = l)
    }else {
      var d = new Cf, b = (a.root == m ? Nf : a.root).Y(a.q, 0, I.b(b), b, c, d);
      b !== a.root && (a.root = b);
      d.ca && (a.count += 1)
    }
    return a
  }
  e(Error("assoc! after persistent!"))
}
var vc;
function ig(a) {
  for(var b = J(a), c = nb(pf);;) {
    if(b) {
      var a = N(N(b)), d = K(b), b = ac(b), c = qb(c, d, b), b = a
    }else {
      return pb(c)
    }
  }
}
function jg(a) {
  var b = m;
  0 < arguments.length && (b = P(Array.prototype.slice.call(arguments, 0), 0));
  return ig.call(this, b)
}
jg.o = 0;
jg.k = function(a) {
  a = J(a);
  return ig(a)
};
jg.g = ig;
vc = jg;
function vd(a) {
  return Sa(a)
}
function wd(a) {
  return Ta(a)
}
function kg(a, b, c) {
  this.m = a;
  this.Ha = b;
  this.l = c;
  this.r = 4;
  this.h = 15077647
}
kg.prototype.va = function() {
  return new lg(nb(this.Ha))
};
kg.prototype.J = function(a) {
  var b = this.l;
  if(b != m) {
    return b
  }
  a: {
    b = 0;
    for(a = J(a);;) {
      if(a) {
        var c = K(a), b = (b + I.b(c)) % 4503599627370496, a = N(a)
      }else {
        break a
      }
    }
    b = h
  }
  return this.l = b
};
kg.prototype.B = function(a, b) {
  return a.t(a, b, m)
};
kg.prototype.t = function(a, b, c) {
  return w(Oa(this.Ha, b)) ? b : c
};
var mg = m, mg = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.B(this, b);
    case 3:
      return this.t(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
t = kg.prototype;
t.call = mg;
t.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
t.I = function(a, b) {
  return new kg(this.m, sc.e(this.Ha, b, m), m)
};
t.toString = function() {
  return vb(this)
};
t.w = function() {
  return J(ne.a(K, this.Ha))
};
t.z = function() {
  return Ba(this.Ha)
};
t.G = function(a, b) {
  var c;
  c = b == m ? n : b ? ((c = b.h & 4096) ? c : b.Jd) ? l : b.h ? n : y(Ua, b) : y(Ua, b);
  return c ? (c = R(a) === R(b)) ? ke(function(b) {
    return oc.e(a, b, Nc) === Nc ? n : l
  }, b) : c : c
};
t.D = function(a, b) {
  return new kg(b, this.Ha, this.l)
};
t.C = q("m");
var ng = new kg(m, Af, 0);
function og(a, b) {
  var c = a.length;
  if(c / 2 <= yf) {
    return c = b ? a : a.slice(), new kg(m, va.a ? va.a(c, l) : va.call(m, c, l), m)
  }
  for(var d = 0, f = nb(ng);;) {
    if(d < c) {
      var g = d + 2, f = ob(f, a[d]), d = g
    }else {
      return pb(f)
    }
  }
}
function lg(a) {
  this.ua = a;
  this.h = 259;
  this.r = 136
}
var pg = m, pg = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ka.e(this.ua, b, Nc) === Nc ? m : b;
    case 3:
      return Ka.e(this.ua, b, Nc) === Nc ? c : b
  }
  e(Error("Invalid arity: " + arguments.length))
};
t = lg.prototype;
t.call = pg;
t.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
t.B = function(a, b) {
  return a.t(a, b, m)
};
t.t = function(a, b, c) {
  return Ka.e(this.ua, b, Nc) === Nc ? c : b
};
t.z = function() {
  return R(this.ua)
};
t.pa = function(a, b) {
  this.ua = qb(this.ua, b, m);
  return a
};
t.Ba = function() {
  return new kg(m, pb(this.ua), m)
};
var qg, rg = m;
function sg(a) {
  var b = a instanceof zb;
  if(b ? a.c.length < yf : b) {
    for(var a = a.c, b = a.length, c = Array(2 * b), d = 0;;) {
      if(d < b) {
        var f = 2 * d;
        c[f] = a[d];
        c[f + 1] = m;
        d += 1
      }else {
        return og.a ? og.a(c, l) : og.call(m, c, l)
      }
    }
  }else {
    for(c = nb(ng);;) {
      if(a != m) {
        b = a.fa(a), c = c.pa(c, a.O(a)), a = b
      }else {
        return c.Ba(c)
      }
    }
  }
}
function tg(a) {
  var b = m;
  0 < arguments.length && (b = P(Array.prototype.slice.call(arguments, 0), 0));
  return sg.call(this, b)
}
tg.o = 0;
tg.k = function(a) {
  a = J(a);
  return sg(a)
};
tg.g = sg;
rg = function(a) {
  switch(arguments.length) {
    case 0:
      return ng;
    default:
      return tg.g(P(arguments, 0))
  }
  e(Error("Invalid arity: " + arguments.length))
};
rg.o = 0;
rg.k = tg.k;
rg.A = function() {
  return ng
};
rg.g = tg.g;
qg = rg;
function ug(a) {
  if(a && w(w(m) ? m : a.Tb)) {
    return a.name
  }
  if(ya(a)) {
    return a
  }
  if(Pc(a)) {
    var b = a.lastIndexOf("/", a.length - 2);
    return 0 > b ? od.a(a, 2) : od.a(a, b + 1)
  }
  e(Error([H("Doesn't support name: "), H(a)].join("")))
}
function vg(a) {
  if(a && w(w(m) ? m : a.Tb)) {
    return a.Ia
  }
  if(Pc(a)) {
    var b = a.lastIndexOf("/", a.length - 2);
    return-1 < b ? od.e(a, 2, b) : m
  }
  e(Error([H("Doesn't support namespace: "), H(a)].join("")))
}
function wg(a, b, c, d, f) {
  this.m = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.l = f;
  this.r = 0;
  this.h = 32375006
}
t = wg.prototype;
t.J = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Rb(a)
};
t.fa = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new wg(this.m, this.start + this.step, this.end, this.step, m) : m : this.start + this.step > this.end ? new wg(this.m, this.start + this.step, this.end, this.step, m) : m
};
t.I = function(a, b) {
  return Q(b, a)
};
t.toString = function() {
  return vb(this)
};
t.xa = function(a, b) {
  return Fb.a(a, b)
};
t.ya = function(a, b, c) {
  return Fb.e(a, b, c)
};
t.w = function(a) {
  return 0 < this.step ? this.start < this.end ? a : m : this.start > this.end ? a : m
};
t.z = function(a) {
  return xa(a.w(a)) ? 0 : Math.ceil((this.end - this.start) / this.step)
};
t.O = q("start");
t.R = function(a) {
  return a.w(a) != m ? new wg(this.m, this.start + this.step, this.end, this.step, m) : Ab
};
t.G = function(a, b) {
  return Tb(a, b)
};
t.D = function(a, b) {
  return new wg(b, this.start, this.end, this.step, this.l)
};
t.C = q("m");
t.v = function(a, b) {
  if(b < a.z(a)) {
    return this.start + b * this.step
  }
  var c = this.start > this.end;
  if(c ? 0 === this.step : c) {
    return this.start
  }
  e(Error("Index out of bounds"))
};
t.N = function(a, b, c) {
  c = b < a.z(a) ? this.start + b * this.step : ((a = this.start > this.end) ? 0 === this.step : a) ? this.start : c;
  return c
};
var xg, yg = m;
function zg() {
  return yg.e(0, Number.MAX_VALUE, 1)
}
function Ag(a) {
  return yg.e(0, a, 1)
}
function Bg(a, b) {
  return yg.e(a, b, 1)
}
function Cg(a, b, c) {
  return new wg(m, a, b, c, m)
}
yg = function(a, b, c) {
  switch(arguments.length) {
    case 0:
      return zg.call(this);
    case 1:
      return Ag.call(this, a);
    case 2:
      return Bg.call(this, a, b);
    case 3:
      return Cg.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
yg.A = zg;
yg.b = Ag;
yg.a = Bg;
yg.e = Cg;
xg = yg;
var Dg, Eg = m;
function Fg(a) {
  for(;;) {
    if(J(a)) {
      a = N(a)
    }else {
      return m
    }
  }
}
function Gg(a, b) {
  for(;;) {
    var c = J(b);
    if(w(c ? 0 < a : c)) {
      var c = a - 1, d = N(b), a = c, b = d
    }else {
      return m
    }
  }
}
Eg = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Fg.call(this, a);
    case 2:
      return Gg.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Eg.b = Fg;
Eg.a = Gg;
Dg = Eg;
var Hg, Ig = m;
function Jg(a) {
  Dg.b(a);
  return a
}
function Kg(a, b) {
  Dg.a(a, b);
  return b
}
Ig = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Jg.call(this, a);
    case 2:
      return Kg.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ig.b = Jg;
Ig.a = Kg;
Hg = Ig;
function Lg(a, b) {
  var c = a.exec(b);
  return c == m ? m : 1 === R(c) ? K(c) : $e(c)
}
function V(a, b, c, d, f, g, i) {
  G(a, c);
  J(i) && (b.e ? b.e(K(i), a, g) : b.call(m, K(i), a, g));
  for(var c = J(N(i)), i = m, j = 0, k = 0;;) {
    if(k < j) {
      var p = i.v(i, k);
      G(a, d);
      b.e ? b.e(p, a, g) : b.call(m, p, a, g);
      k += 1
    }else {
      if(c = J(c)) {
        i = c, Jc(i) ? (c = sb(i), k = tb(i), i = c, j = R(c), c = k) : (c = K(i), G(a, d), b.e ? b.e(c, a, g) : b.call(m, c, a, g), c = N(i), i = m, j = 0), k = 0
      }else {
        break
      }
    }
  }
  return G(a, f)
}
function Mg(a, b) {
  for(var c = J(b), d = m, f = 0, g = 0;;) {
    if(g < f) {
      var i = d.v(d, g);
      G(a, i);
      g += 1
    }else {
      if(c = J(c)) {
        d = c, Jc(d) ? (c = sb(d), f = tb(d), d = c, i = R(c), c = f, f = i) : (i = K(d), G(a, i), c = N(d), d = m, f = 0), g = 0
      }else {
        return m
      }
    }
  }
}
function Ng(a, b) {
  var c = m;
  1 < arguments.length && (c = P(Array.prototype.slice.call(arguments, 1), 0));
  return Mg.call(this, a, c)
}
Ng.o = 1;
Ng.k = function(a) {
  var b = K(a), a = L(a);
  return Mg(b, a)
};
Ng.g = Mg;
var Og = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"}, W = function Pg(b, c, d) {
  if(b == m) {
    return G(c, "nil")
  }
  if(h === b) {
    return G(c, "#<undefined>")
  }
  var f;
  f = oc.a(d, "\ufdd0:meta");
  w(f) && (f = b ? ((f = b.h & 131072) ? f : b.mc) ? l : b.h ? n : y(Xa, b) : y(Xa, b), f = w(f) ? Cc(b) : f);
  w(f) && (G(c, "^"), Pg(Cc(b), c, d), G(c, " "));
  if(b == m) {
    return G(c, "nil")
  }
  if(b.Ca) {
    return b.Pa(b, c, d)
  }
  if(f = b) {
    f = (f = b.h & 2147483648) ? f : b.M
  }
  return f ? b.K(b, c, d) : ((f = (b == m ? m : b.constructor) === Boolean) ? f : "number" === typeof b) ? G(c, "" + H(b)) : b instanceof Array ? V(c, Pg, "#<Array [", ", ", "]>", d, b) : v(b) ? Pc(b) ? (G(c, ":"), d = vg(b), w(d) && Ng.g(c, P(["" + H(d), "/"], 0)), G(c, ug(b))) : b instanceof wb ? (d = vg(b), w(d) && Ng.g(c, P(["" + H(d), "/"], 0)), G(c, ug(b))) : w((new S("\ufdd0:readably")).call(m, d)) ? G(c, [H('"'), H(b.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(b) {
    return Og[b]
  })), H('"')].join("")) : G(c, b) : yc(b) ? Ng.g(c, P(["#<", "" + H(b), ">"], 0)) : b instanceof Date ? (d = function(b, c) {
    for(var d = "" + H(b);;) {
      if(R(d) < c) {
        d = [H("0"), H(d)].join("")
      }else {
        return d
      }
    }
  }, Ng.g(c, P(['#inst "', "" + H(b.getUTCFullYear()), "-", d(b.getUTCMonth() + 1, 2), "-", d(b.getUTCDate(), 2), "T", d(b.getUTCHours(), 2), ":", d(b.getUTCMinutes(), 2), ":", d(b.getUTCSeconds(), 2), ".", d(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : w(b instanceof RegExp) ? Ng.g(c, P(['#"', b.source, '"'], 0)) : Ng.g(c, P(["#<", "" + H(b), ">"], 0))
};
function Qg(a) {
  var b = ua(), c = a == m;
  if(c ? c : xa(J(a))) {
    b = ""
  }else {
    var c = H, d = new sa, f = new ub(d);
    a: {
      W(K(a), f, b);
      for(var a = J(N(a)), g = m, i = 0, j = 0;;) {
        if(j < i) {
          var k = g.v(g, j);
          G(f, " ");
          W(k, f, b);
          j += 1
        }else {
          if(a = J(a)) {
            g = a, Jc(g) ? (a = sb(g), i = tb(g), g = a, k = R(a), a = i, i = k) : (k = K(g), G(f, " "), W(k, f, b), a = N(g), g = m, i = 0), j = 0
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
function Rg(a) {
  var b = m;
  0 < arguments.length && (b = P(Array.prototype.slice.call(arguments, 0), 0));
  return Qg(b)
}
Rg.o = 0;
Rg.k = function(a) {
  a = J(a);
  return Qg(a)
};
Rg.g = function(a) {
  return Qg(a)
};
zb.prototype.M = l;
zb.prototype.K = function(a, b, c) {
  return V(b, W, "(", " ", ")", c, a)
};
Kc.prototype.M = l;
Kc.prototype.K = function(a, b, c) {
  return V(b, W, "(", " ", ")", c, a)
};
wf.prototype.M = l;
wf.prototype.K = function(a, b, c) {
  return V(b, function(a) {
    return V(b, W, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
Fd.prototype.M = l;
Fd.prototype.K = function(a, b, c) {
  return V(b, W, "(", " ", ")", c, a)
};
Xf.prototype.M = l;
Xf.prototype.K = function(a, b, c) {
  return V(b, W, "(", " ", ")", c, a)
};
Lc.prototype.M = l;
Lc.prototype.K = function(a, b, c) {
  return V(b, W, "(", " ", ")", c, a)
};
eg.prototype.M = l;
eg.prototype.K = function(a, b, c) {
  return V(b, function(a) {
    return V(b, W, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
kg.prototype.M = l;
kg.prototype.K = function(a, b, c) {
  return V(b, W, "#{", " ", "}", c, a)
};
Re.prototype.M = l;
Re.prototype.K = function(a, b, c) {
  return V(b, W, "[", " ", "]", c, a)
};
xd.prototype.M = l;
xd.prototype.K = function(a, b, c) {
  return V(b, W, "(", " ", ")", c, a)
};
yd.prototype.M = l;
yd.prototype.K = function(a, b) {
  return G(b, "()")
};
Bd.prototype.M = l;
Bd.prototype.K = function(a, b, c) {
  return V(b, W, "(", " ", ")", c, a)
};
wg.prototype.M = l;
wg.prototype.K = function(a, b, c) {
  return V(b, W, "(", " ", ")", c, a)
};
ag.prototype.M = l;
ag.prototype.K = function(a, b, c) {
  return V(b, W, "(", " ", ")", c, a)
};
rf.prototype.M = l;
rf.prototype.K = function(a, b, c) {
  return V(b, function(a) {
    return V(b, W, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
Re.prototype.hc = l;
Re.prototype.ic = function(a, b) {
  return Rc.a(a, b)
};
function Sg(a, b, c, d) {
  this.state = a;
  this.m = b;
  this.Ac = c;
  this.Bc = d;
  this.h = 2153938944;
  this.r = 2
}
t = Sg.prototype;
t.J = function(a) {
  return fa(a)
};
t.Ub = function(a, b, c) {
  for(var d = J(this.Bc), f = m, g = 0, i = 0;;) {
    if(i < g) {
      var j = f.v(f, i), k = kc.e(j, 0, m), j = kc.e(j, 1, m);
      j.n ? j.n(k, a, b, c) : j.call(m, k, a, b, c);
      i += 1
    }else {
      if(d = J(d)) {
        Jc(d) ? (f = sb(d), d = tb(d), k = f, g = R(f), f = k) : (f = K(d), k = kc.e(f, 0, m), j = kc.e(f, 1, m), j.n ? j.n(k, a, b, c) : j.call(m, k, a, b, c), d = N(d), f = m, g = 0), i = 0
      }else {
        return m
      }
    }
  }
};
t.K = function(a, b, c) {
  G(b, "#<Atom: ");
  W(this.state, b, c);
  return G(b, ">")
};
t.C = q("m");
t.jc = q("state");
t.G = function(a, b) {
  return a === b
};
var Tg, Ug = m;
function Vg(a) {
  return new Sg(a, m, m, m)
}
function Wg(a, b) {
  var c;
  c = b == m ? n : b ? ((c = b.h & 64) ? c : b.zb) ? l : b.h ? n : y(Ia, b) : y(Ia, b);
  var d = c ? Ac.a(vc, b) : b;
  c = oc.a(d, "\ufdd0:validator");
  d = oc.a(d, "\ufdd0:meta");
  return new Sg(a, d, c, m)
}
function Xg(a, b) {
  var c = m;
  1 < arguments.length && (c = P(Array.prototype.slice.call(arguments, 1), 0));
  return Wg.call(this, a, c)
}
Xg.o = 1;
Xg.k = function(a) {
  var b = K(a), a = L(a);
  return Wg(b, a)
};
Xg.g = Wg;
Ug = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Vg.call(this, a);
    default:
      return Xg.g(a, P(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ug.o = 1;
Ug.k = Xg.k;
Ug.b = Vg;
Ug.g = Xg.g;
Tg = Ug;
function Yg(a, b) {
  var c = a.Ac;
  w(c) && !w(c.b ? c.b(b) : c.call(m, b)) && e(Error([H("Assert failed: "), H("Validator rejected reference state"), H("\n"), H(Rg.g(P([Bc(Sb(new wb(m, "validate", "validate", 1233162959, m), new wb(m, "new-value", "new-value", 972165309, m)), vc("\ufdd0:line", 6673, "\ufdd0:column", 13))], 0)))].join("")));
  c = a.state;
  a.state = b;
  mb(a, c, b);
  return b
}
var Zg, $g = m;
function ah(a, b) {
  return Yg(a, b.b ? b.b(a.state) : b.call(m, a.state))
}
function bh(a, b, c) {
  return Yg(a, b.a ? b.a(a.state, c) : b.call(m, a.state, c))
}
function ch(a, b, c, d) {
  return Yg(a, b.e ? b.e(a.state, c, d) : b.call(m, a.state, c, d))
}
function dh(a, b, c, d, f) {
  return Yg(a, b.n ? b.n(a.state, c, d, f) : b.call(m, a.state, c, d, f))
}
function eh(a, b, c, d, f, g) {
  return Yg(a, Ac.g(b, a.state, c, d, f, P([g], 0)))
}
function fh(a, b, c, d, f, g) {
  var i = m;
  5 < arguments.length && (i = P(Array.prototype.slice.call(arguments, 5), 0));
  return eh.call(this, a, b, c, d, f, i)
}
fh.o = 5;
fh.k = function(a) {
  var b = K(a), a = N(a), c = K(a), a = N(a), d = K(a), a = N(a), f = K(a), a = N(a), g = K(a), a = L(a);
  return eh(b, c, d, f, g, a)
};
fh.g = eh;
$g = function(a, b, c, d, f, g) {
  switch(arguments.length) {
    case 2:
      return ah.call(this, a, b);
    case 3:
      return bh.call(this, a, b, c);
    case 4:
      return ch.call(this, a, b, c, d);
    case 5:
      return dh.call(this, a, b, c, d, f);
    default:
      return fh.g(a, b, c, d, f, P(arguments, 5))
  }
  e(Error("Invalid arity: " + arguments.length))
};
$g.o = 5;
$g.k = fh.k;
$g.a = ah;
$g.e = bh;
$g.n = ch;
$g.ba = dh;
$g.g = fh.g;
Zg = $g;
var gh, hh, ih, jh;
function kh() {
  return ca.navigator ? ca.navigator.userAgent : m
}
jh = ih = hh = gh = n;
var lh;
if(lh = kh()) {
  var mh = ca.navigator;
  gh = 0 == lh.indexOf("Opera");
  hh = !gh && -1 != lh.indexOf("MSIE");
  ih = !gh && -1 != lh.indexOf("WebKit");
  jh = !gh && !ih && "Gecko" == mh.product
}
var nh = gh, X = hh, oh = jh, ph = ih, qh = ca.navigator, rh = -1 != (qh && qh.platform || "").indexOf("Mac"), sh;
a: {
  var th = "", uh;
  if(nh && ca.opera) {
    var vh = ca.opera.version, th = "function" == typeof vh ? vh() : vh
  }else {
    if(oh ? uh = /rv\:([^\);]+)(\)|;)/ : X ? uh = /MSIE\s+([^\);]+)(\)|;)/ : ph && (uh = /WebKit\/(\S+)/), uh) {
      var wh = uh.exec(kh()), th = wh ? wh[1] : ""
    }
  }
  if(X) {
    var xh, yh = ca.document;
    xh = yh ? yh.documentMode : h;
    if(xh > parseFloat(th)) {
      sh = String(xh);
      break a
    }
  }
  sh = th
}
var zh = {};
function Ah(a) {
  var b;
  if(!(b = zh[a])) {
    b = 0;
    for(var c = ka(String(sh)).split("."), d = ka(String(a)).split("."), f = Math.max(c.length, d.length), g = 0;0 == b && g < f;g++) {
      var i = c[g] || "", j = d[g] || "", k = RegExp("(\\d*)(\\D*)", "g"), p = RegExp("(\\d*)(\\D*)", "g");
      do {
        var s = k.exec(i) || ["", "", ""], r = p.exec(j) || ["", "", ""];
        if(0 == s[0].length && 0 == r[0].length) {
          break
        }
        b = ((0 == s[1].length ? 0 : parseInt(s[1], 10)) < (0 == r[1].length ? 0 : parseInt(r[1], 10)) ? -1 : (0 == s[1].length ? 0 : parseInt(s[1], 10)) > (0 == r[1].length ? 0 : parseInt(r[1], 10)) ? 1 : 0) || ((0 == s[2].length) < (0 == r[2].length) ? -1 : (0 == s[2].length) > (0 == r[2].length) ? 1 : 0) || (s[2] < r[2] ? -1 : s[2] > r[2] ? 1 : 0)
      }while(0 == b)
    }
    b = zh[a] = 0 <= b
  }
  return b
}
var Bh = {};
function Ch() {
  return Bh[9] || (Bh[9] = X && !!document.documentMode && 9 <= document.documentMode)
}
;function Dh(a, b, c, d, f) {
  if(!X && (!ph || !Ah("525"))) {
    return l
  }
  if(rh && f) {
    return Eh(a)
  }
  if(f && !d || !c && (17 == b || 18 == b) || X && d && b == a) {
    return n
  }
  switch(a) {
    case 13:
      return!(X && Ch());
    case 27:
      return!ph
  }
  return Eh(a)
}
function Eh(a) {
  if(48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || ph && 0 == a) {
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
function Fh(a) {
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
;var Gh;
!X || Ch();
!oh && !X || X && Ch() || oh && Ah("1.9.1");
var Hh = X && !Ah("9");
function Ih(a, b) {
  var c = b || document;
  return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : c.getElementsByClassName ? c.getElementsByClassName(a) : Jh("*", a, b)
}
function Kh(a) {
  var b = document, c = m;
  return(c = b.querySelectorAll && b.querySelector ? b.querySelector("." + a) : Ih(a, h)[0]) || m
}
function Jh(a, b, c) {
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
function Lh(a, b) {
  a.appendChild(b)
}
function Mh(a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : m
}
var Nh = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, Oh = {IMG:" ", BR:"\n"};
function Ph(a, b, c) {
  if(!(a.nodeName in Nh)) {
    if(3 == a.nodeType) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in Oh) {
        b.push(Oh[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          Ph(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function Qh(a) {
  this.Bb = a || ca.document || document
}
t = Qh.prototype;
t.Yb = function(a) {
  return v(a) ? this.Bb.getElementById(a) : a
};
t.createElement = function(a) {
  return this.Bb.createElement(a)
};
t.createTextNode = function(a) {
  return this.Bb.createTextNode(a)
};
t.appendChild = Lh;
t.append = function(a, b) {
  function c(a) {
    a && f.appendChild(v(a) ? d.createTextNode(a) : a)
  }
  for(var d = 9 == a.nodeType ? a : a.ownerDocument || a.document, f = a, g = arguments, i = 1;i < g.length;i++) {
    var j = g[i], k = j, p = u(k);
    if(("array" == p || "object" == p && "number" == typeof k.length) && !(ea(j) && 0 < j.nodeType)) {
      k = oa;
      a: {
        if((p = j) && "number" == typeof p.length) {
          if(ea(p)) {
            p = "function" == typeof p.item || "string" == typeof p.item;
            break a
          }
          if(da(p)) {
            p = "function" == typeof p.item;
            break a
          }
        }
        p = n
      }
      if(p) {
        if(p = j.length, 0 < p) {
          for(var s = Array(p), r = 0;r < p;r++) {
            s[r] = j[r]
          }
          j = s
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
function Rh(a, b, c) {
  if(ya(b)) {
    return a.replace(RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), c)
  }
  if(w(b.hasOwnProperty("source"))) {
    return a.replace(RegExp(b.source, "g"), c)
  }
  e([H("Invalid match arg: "), H(b)].join(""))
}
;function Sh(a) {
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
;!X || Ch();
var Th = !X || Ch(), Uh = X && !Ah("8");
!ph || Ah("528");
oh && Ah("1.9b") || X && Ah("8") || nh && Ah("9.5") || ph && Ah("528");
oh && !Ah("8") || X && Ah("9");
function Vh() {
  this.Xb = n
}
;function Wh(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
Wh.prototype.Ja = n;
Wh.prototype.defaultPrevented = n;
Wh.prototype.eb = l;
Wh.prototype.preventDefault = function() {
  this.defaultPrevented = l;
  this.eb = n
};
var Xh = {Ic:"click", Nc:"dblclick", gd:"mousedown", ld:"mouseup", kd:"mouseover", jd:"mouseout", hd:"mousemove", xd:"selectstart", bd:"keypress", ad:"keydown", cd:"keyup", Gc:"blur", Vc:"focus", Oc:"deactivate", Wc:X ? "focusin" : "DOMFocusIn", Xc:X ? "focusout" : "DOMFocusOut", Hc:"change", wd:"select", yd:"submit", $c:"input", sd:"propertychange", Sc:"dragstart", Pc:"dragenter", Rc:"dragover", Qc:"dragleave", Tc:"drop", Cd:"touchstart", Bd:"touchmove", Ad:"touchend", zd:"touchcancel", Kc:"contextmenu", 
Uc:"error", Zc:"help", dd:"load", ed:"losecapture", td:"readystatechange", ud:"resize", vd:"scroll", Ed:"unload", Yc:"hashchange", od:"pagehide", pd:"pageshow", rd:"popstate", Lc:"copy", qd:"paste", Mc:"cut", Dc:"beforecopy", Ec:"beforecut", Fc:"beforepaste", nd:"online", md:"offline", fd:"message", Jc:"connect", Dd:ph ? "webkitTransitionEnd" : nh ? "oTransitionEnd" : "transitionend"};
function Yh(a) {
  Yh[" "](a);
  return a
}
Yh[" "] = function() {
};
function Zh(a, b) {
  a && this.Sa(a, b)
}
ja(Zh, Wh);
t = Zh.prototype;
t.target = m;
t.relatedTarget = m;
t.offsetX = 0;
t.offsetY = 0;
t.clientX = 0;
t.clientY = 0;
t.screenX = 0;
t.screenY = 0;
t.button = 0;
t.keyCode = 0;
t.charCode = 0;
t.ctrlKey = n;
t.altKey = n;
t.shiftKey = n;
t.metaKey = n;
t.wc = n;
t.Eb = m;
t.Sa = function(a, b) {
  var c = this.type = a.type;
  Wh.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(oh) {
      var f;
      a: {
        try {
          Yh(d.nodeName);
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
  this.offsetX = ph || a.offsetX !== h ? a.offsetX : a.layerX;
  this.offsetY = ph || a.offsetY !== h ? a.offsetY : a.layerY;
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
  this.wc = rh ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.Eb = a;
  a.defaultPrevented && this.preventDefault();
  delete this.Ja
};
t.preventDefault = function() {
  Zh.zc.preventDefault.call(this);
  var a = this.Eb;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = n, Uh) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
function $h() {
}
var ai = 0;
t = $h.prototype;
t.key = 0;
t.La = n;
t.jb = n;
t.Sa = function(a, b, c, d, f, g) {
  da(a) ? this.$b = l : a && a.handleEvent && da(a.handleEvent) ? this.$b = n : e(Error("Invalid listener argument"));
  this.Ua = a;
  this.dc = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.Ib = g;
  this.jb = n;
  this.key = ++ai;
  this.La = n
};
t.handleEvent = function(a) {
  return this.$b ? this.Ua.call(this.Ib || this.src, a) : this.Ua.handleEvent.call(this.Ua, a)
};
var bi = {}, ci = {}, di = {}, ei = {};
function fi(a, b, c, d, f) {
  if(b) {
    if("array" == u(b)) {
      for(var g = 0;g < b.length;g++) {
        fi(a, b[g], c, d, f)
      }
      return m
    }
    var d = !!d, i = ci;
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
    var p = gi, s = Th ? function(a) {
      return p.call(s.src, s.key, a)
    } : function(a) {
      a = p.call(s.src, s.key, a);
      if(!a) {
        return a
      }
    }, g = s;
    g.src = a;
    i = new $h;
    i.Sa(c, g, a, b, d, f);
    c = i.key;
    g.key = c;
    k.push(i);
    bi[c] = i;
    di[j] || (di[j] = []);
    di[j].push(i);
    a.addEventListener ? (a == ca || !a.Wb) && a.addEventListener(b, g, d) : a.attachEvent(b in ei ? ei[b] : ei[b] = "on" + b, g);
    return c
  }
  e(Error("Invalid event type"))
}
function hi(a, b, c, d, f) {
  if("array" == u(b)) {
    for(var g = 0;g < b.length;g++) {
      hi(a, b[g], c, d, f)
    }
    return m
  }
  a = fi(a, b, c, d, f);
  bi[a].jb = l;
  return a
}
function ii(a, b, c, d, f) {
  if("array" == u(b)) {
    for(var g = 0;g < b.length;g++) {
      ii(a, b[g], c, d, f)
    }
  }else {
    d = !!d;
    a: {
      g = ci;
      if(b in g && (g = g[b], d in g && (g = g[d], a = fa(a), g[a]))) {
        a = g[a];
        break a
      }
      a = m
    }
    if(a) {
      for(g = 0;g < a.length;g++) {
        if(a[g].Ua == c && a[g].capture == d && a[g].Ib == f) {
          ji(a[g].key);
          break
        }
      }
    }
  }
}
function ji(a) {
  if(bi[a]) {
    var b = bi[a];
    if(!b.La) {
      var c = b.src, d = b.type, f = b.dc, g = b.capture;
      c.removeEventListener ? (c == ca || !c.Wb) && c.removeEventListener(d, f, g) : c.detachEvent && c.detachEvent(d in ei ? ei[d] : ei[d] = "on" + d, f);
      c = fa(c);
      if(di[c]) {
        var f = di[c], i = na(f, b);
        0 <= i && ma.splice.call(f, i, 1);
        0 == f.length && delete di[c]
      }
      b.La = l;
      if(b = ci[d][g][c]) {
        b.bc = l, ki(d, g, c, b)
      }
      delete bi[a]
    }
  }
}
function ki(a, b, c, d) {
  if(!d.ab && d.bc) {
    for(var f = 0, g = 0;f < d.length;f++) {
      d[f].La ? d[f].dc.src = m : (f != g && (d[g] = d[f]), g++)
    }
    d.length = g;
    d.bc = n;
    0 == g && (delete ci[a][b][c], ci[a][b].W--, 0 == ci[a][b].W && (delete ci[a][b], ci[a].W--), 0 == ci[a].W && delete ci[a])
  }
}
function li(a, b, c, d, f) {
  var g = 1, b = fa(b);
  if(a[b]) {
    a.U--;
    a = a[b];
    a.ab ? a.ab++ : a.ab = 1;
    try {
      for(var i = a.length, j = 0;j < i;j++) {
        var k = a[j];
        k && !k.La && (g &= mi(k, f) !== n)
      }
    }finally {
      a.ab--, ki(c, d, b, a)
    }
  }
  return Boolean(g)
}
function mi(a, b) {
  a.jb && ji(a.key);
  return a.handleEvent(b)
}
function gi(a, b) {
  if(!bi[a]) {
    return l
  }
  var c = bi[a], d = c.type, f = ci;
  if(!(d in f)) {
    return l
  }
  var f = f[d], g, i;
  if(!Th) {
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
          }catch(s) {
            p = l
          }
        }
        if(p || g.returnValue == h) {
          g.returnValue = l
        }
      }
    }
    p = new Zh;
    p.Sa(g, this);
    g = l;
    try {
      if(j) {
        for(var r = [], x = p.currentTarget;x;x = x.parentNode) {
          r.push(x)
        }
        i = f[l];
        i.U = i.W;
        for(var C = r.length - 1;!p.Ja && 0 <= C && i.U;C--) {
          p.currentTarget = r[C], g &= li(i, r[C], d, l, p)
        }
        if(k) {
          i = f[n];
          i.U = i.W;
          for(C = 0;!p.Ja && C < r.length && i.U;C++) {
            p.currentTarget = r[C], g &= li(i, r[C], d, n, p)
          }
        }
      }else {
        g = mi(c, p)
      }
    }finally {
      r && (r.length = 0)
    }
    return g
  }
  d = new Zh(b, this);
  return g = mi(c, d)
}
;var ni, oi = document.createElement("div");
oi.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
var pi = O.a(oi.firstChild.nodeType, 3), qi = O.a(oi.getElementsByTagName("tbody").length, 0);
O.a(oi.getElementsByTagName("link").length, 0);
var ri = /<|&#?\w+;/, si = /^\s+/, ti = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i, ui = /<([\w:]+)/, vi = /<tbody/i, wi = Ze([1, "<select multiple='multiple'>", "</select>"]), xi = Ze([1, "<table>", "</table>"]), yi = Ze([3, "<table><tbody><tr>", "</tr></tbody></table>"]), zi;
a: {
  for(var Ai = "col \ufdd0:default tfoot caption optgroup legend area td thead th option tbody tr colgroup".split(" "), Bi = [Ze([2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"]), Ze([0, "", ""]), xi, xi, wi, Ze([1, "<fieldset>", "</fieldset>"]), Ze([1, "<map>", "</map>"]), yi, xi, yi, wi, xi, Ze([2, "<table><tbody>", "</tbody></table>"]), xi], Ci = Ai.length, Di = 0, Ei = nb(pf);;) {
    if(Di < Ci) {
      var Fi = Di + 1, Gi = qb(Ei, Ai[Di], Bi[Di]), Di = Fi, Ei = Gi
    }else {
      zi = pb(Ei);
      break a
    }
  }
  zi = h
}
function Hi(a) {
  var a = Rh(a, ti, "<$1></$2>"), b = ("" + H(ac(Lg(ui, a)))).toLowerCase(), c = oc.e(zi, b, (new S("\ufdd0:default")).call(m, zi)), d = kc.e(c, 0, m), f = kc.e(c, 1, m), c = kc.e(c, 2, m);
  a: {
    var g = document.createElement("div");
    g.innerHTML = [H(f), H(a), H(c)].join("");
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
  if(w(qi)) {
    a: {
      c = d;
      g = xa(Lg(vi, a));
      ((b = O.a(b, "table")) ? g : b) ? (f = c.firstChild, f = w(f) ? c.firstChild.childNodes : f) : f = ((f = O.a(f, "<table>")) ? g : f) ? divchildNodes : Ye;
      for(var f = J(f), c = m, i = g = 0;;) {
        if(i < g) {
          var b = c.v(c, i), j = O.a(b.nodeName, "tbody");
          (j ? O.a(b.childNodes.length, 0) : j) && b.parentNode.removeChild(b);
          i += 1
        }else {
          if(f = J(f)) {
            Jc(f) ? (c = sb(f), f = tb(f), b = c, g = R(c), c = b) : (b = K(f), ((c = O.a(b.nodeName, "tbody")) ? O.a(b.childNodes.length, 0) : c) && b.parentNode.removeChild(b), f = N(f), c = m, g = 0), i = 0
          }else {
            break a
          }
        }
      }
    }
  }
  f = (f = xa(pi)) ? Lg(si, a) : f;
  w(f) && d.insertBefore(document.createTextNode(K(Lg(si, a))), d.firstChild);
  return d.childNodes
}
function Ii(a) {
  if(a ? a.Cb : a) {
    return a.Cb(a)
  }
  var b;
  var c = Ii[u(a == m ? m : a)];
  c ? b = c : (c = Ii._) ? b = c : e(B("DomContent.nodes", a));
  return b.call(m, a)
}
function Ji(a) {
  if(a ? a.Db : a) {
    return a.Db(a)
  }
  var b;
  var c = Ji[u(a == m ? m : a)];
  c ? b = c : (c = Ji._) ? b = c : e(B("DomContent.single-node", a));
  return b.call(m, a)
}
function Y(a) {
  a = ug(a);
  return v(a) ? document.getElementById(a) : a
}
var Mi = function Ki(b) {
  h === ni && (ni = {}, ni = function(b, d, f) {
    this.Na = b;
    this.fc = d;
    this.tc = f;
    this.r = 0;
    this.h = 393216
  }, ni.Ca = l, ni.Qa = "domina/t4789", ni.Pa = function(b, d) {
    return G(d, "domina/t4789")
  }, ni.prototype.Cb = function() {
    return Li.b ? Li.b(Ih(ug(this.Na))) : Li.call(m, Ih(ug(this.Na)))
  }, ni.prototype.Db = function() {
    return Li.b ? Li.b(Kh(ug(this.Na))) : Li.call(m, Kh(ug(this.Na)))
  }, ni.prototype.C = q("tc"), ni.prototype.D = function(b, d) {
    return new ni(this.Na, this.fc, d)
  });
  return new ni(b, Ki, m)
};
function Ni(a) {
  var b = Mi("middle-column");
  Oi.e ? Oi.e(Lh, b, a) : Oi.call(m, Lh, b, a);
  return b
}
function Pi(a, b) {
  Oi.e ? Oi.e(function(a, b) {
    a.insertBefore(b, a.childNodes[0] || m)
  }, a, b) : Oi.call(m, function(a, b) {
    a.insertBefore(b, a.childNodes[0] || m)
  }, a, b)
}
function Qi(a) {
  Dg.b(ne.a(Mh, Ii(a)))
}
function Ri(a) {
  var b = Ji(a).attributes;
  return Yc.a(bc, He(me(), ne.a(function(a) {
    var a = b.item(a), d = a.nodeValue, f = fe.a(m, d);
    return(f ? fe.a("", d) : f) ? va([qd.b(a.nodeName.toLowerCase()), a.nodeValue], l) : m
  }, xg.b(b.length))))
}
function Si(a) {
  a = Ji(a);
  if(Hh && "innerText" in a) {
    a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
  }else {
    var b = [];
    Ph(a, b, l);
    a = b.join("")
  }
  a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
  a = a.replace(/\u200B/g, "");
  Hh || (a = a.replace(/ +/g, " "));
  " " != a && (a = a.replace(/^\s*/, ""));
  return ka(a)
}
function Ti(a) {
  return Sh(Ji(a))
}
function Oi(a, b, c) {
  for(var b = Ii(b), d = Ii(c), c = document.createDocumentFragment(), f = J(d), g = m, i = 0, j = 0;;) {
    if(j < i) {
      var k = g.v(g, j);
      c.appendChild(k);
      j += 1
    }else {
      if(f = J(f)) {
        g = f, Jc(g) ? (f = sb(g), j = tb(g), g = f, i = R(f), f = j) : (f = K(g), c.appendChild(f), f = N(g), g = m, i = 0), j = 0
      }else {
        break
      }
    }
  }
  d = Hg.b(we.a(R(b) - 1, function(a, b, c) {
    return function() {
      return c.cloneNode(l)
    }
  }(b, d, c)));
  return J(b) ? (a.a ? a.a(K(b), c) : a.call(m, K(b), c), Hg.b(ne.e(function(b, c) {
    return a.a ? a.a(b, c) : a.call(m, b, c)
  }, L(b), d))) : m
}
var Ui, Vi = m;
function Wi(a) {
  return Vi.a(a, 0)
}
function Xi(a, b) {
  return b < a.length ? new Fd(m, n, function() {
    return Q(a.item(b), Vi.a(a, b + 1))
  }, m) : m
}
Vi = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Wi.call(this, a);
    case 2:
      return Xi.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Vi.b = Wi;
Vi.a = Xi;
Ui = Vi;
var Yi, Zi = m;
function $i(a) {
  return Zi.a(a, 0)
}
function aj(a, b) {
  return b < a.length ? new Fd(m, n, function() {
    return Q(a[b], Zi.a(a, b + 1))
  }, m) : m
}
Zi = function(a, b) {
  switch(arguments.length) {
    case 1:
      return $i.call(this, a);
    case 2:
      return aj.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Zi.b = $i;
Zi.a = aj;
Yi = Zi;
function bj(a) {
  return w(a.item) ? Ui.b(a) : Yi.b(a)
}
function cj(a) {
  if(w(a)) {
    var b = xa(a.name);
    return b ? a.length : b
  }
  return a
}
function Li(a) {
  if(a == m) {
    a = Ab
  }else {
    var b;
    b = a ? ((b = a.h & 8388608) ? b : a.za) || (a.h ? 0 : y(ib, a)) : y(ib, a);
    a = b ? J(a) : w(cj(a)) ? bj(a) : J(Ze([a]))
  }
  return a
}
Ii._ = function(a) {
  if(a == m) {
    a = Ab
  }else {
    var b;
    b = a ? ((b = a.h & 8388608) ? b : a.za) || (a.h ? 0 : y(ib, a)) : y(ib, a);
    a = b ? J(a) : w(cj(a)) ? bj(a) : J(Ze([a]))
  }
  return a
};
Ji._ = function(a) {
  if(a == m) {
    a = m
  }else {
    var b;
    b = a ? ((b = a.h & 8388608) ? b : a.za) || (a.h ? 0 : y(ib, a)) : y(ib, a);
    a = b ? K(a) : w(cj(a)) ? a.item(0) : a
  }
  return a
};
Ii.string = function(a) {
  return Hg.b(Ii(w(Lg(ri, a)) ? Hi(a) : document.createTextNode(a)))
};
Ji.string = function(a) {
  return Ji(w(Lg(ri, a)) ? Hi(a) : document.createTextNode(a))
};
w("undefined" != typeof NodeList) && (t = NodeList.prototype, t.za = l, t.w = function(a) {
  return bj(a)
}, t.Oa = l, t.v = function(a, b) {
  return a.item(b)
}, t.N = function(a, b, c) {
  return a.length <= b ? c : kc.a(a, b)
}, t.lb = l, t.z = function(a) {
  return a.length
});
w("undefined" != typeof StaticNodeList) && (t = StaticNodeList.prototype, t.za = l, t.w = function(a) {
  return bj(a)
}, t.Oa = l, t.v = function(a, b) {
  return a.item(b)
}, t.N = function(a, b, c) {
  return a.length <= b ? c : kc.a(a, b)
}, t.lb = l, t.z = function(a) {
  return a.length
});
w("undefined" != typeof HTMLCollection) && (t = HTMLCollection.prototype, t.za = l, t.w = function(a) {
  return bj(a)
}, t.Oa = l, t.v = function(a, b) {
  return a.item(b)
}, t.N = function(a, b, c) {
  return a.length <= b ? c : kc.a(a, b)
}, t.lb = l, t.z = function(a) {
  return a.length
});
function dj() {
  this.Xb = n
}
ja(dj, Vh);
t = dj.prototype;
t.Wb = l;
t.cc = m;
t.addEventListener = function(a, b, c, d) {
  fi(this, a, b, c, d)
};
t.removeEventListener = function(a, b, c, d) {
  ii(this, a, b, c, d)
};
t.dispatchEvent = function(a) {
  var b = a.type || a, c = ci;
  if(b in c) {
    if(v(a)) {
      a = new Wh(a, this)
    }else {
      if(a instanceof Wh) {
        a.target = a.target || this
      }else {
        var d = a, a = new Wh(b, this);
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
        a.currentTarget = f[i], d &= li(g, f[i], a.type, l, a) && a.eb != n
      }
    }
    if(n in c) {
      if(g = c[n], g.U = g.W, b) {
        for(i = 0;!a.Ja && i < f.length && g.U;i++) {
          a.currentTarget = f[i], d &= li(g, f[i], a.type, n, a) && a.eb != n
        }
      }else {
        for(f = this;!a.Ja && f && g.U;f = f.cc) {
          a.currentTarget = f, d &= li(g, f, a.type, n, a) && a.eb != n
        }
      }
    }
    a = Boolean(d)
  }else {
    a = l
  }
  return a
};
function ej(a, b) {
  this.Xb = n;
  a && (this.$a && this.detach(), this.Fa = a, this.Za = fi(this.Fa, "keypress", this, b), this.Kb = fi(this.Fa, "keydown", this.qc, b, this), this.$a = fi(this.Fa, "keyup", this.rc, b, this))
}
ja(ej, dj);
t = ej.prototype;
t.Fa = m;
t.Za = m;
t.Kb = m;
t.$a = m;
t.na = -1;
t.ma = -1;
var fj = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, gj = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, hj = X || 
ph && Ah("525");
t = ej.prototype;
t.qc = function(a) {
  if(ph && (17 == this.na && !a.ctrlKey || 18 == this.na && !a.altKey)) {
    this.ma = this.na = -1
  }
  hj && !Dh(a.keyCode, this.na, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.ma = oh ? Fh(a.keyCode) : a.keyCode
};
t.rc = function() {
  this.ma = this.na = -1
};
t.handleEvent = function(a) {
  var b = a.Eb, c, d;
  X && "keypress" == a.type ? (c = this.ma, d = 13 != c && 27 != c ? b.keyCode : 0) : ph && "keypress" == a.type ? (c = this.ma, d = 0 <= b.charCode && 63232 > b.charCode && Eh(c) ? b.charCode : 0) : nh ? (c = this.ma, d = Eh(c) ? b.keyCode : 0) : (c = b.keyCode || this.ma, d = b.charCode || 0, rh && (63 == d && 224 == c) && (c = 191));
  var f = c, g = b.keyIdentifier;
  c ? 63232 <= c && c in fj ? f = fj[c] : 25 == c && a.shiftKey && (f = 9) : g && g in gj && (f = gj[g]);
  a = f == this.na;
  this.na = f;
  b = new ij(f, d, a, b);
  this.dispatchEvent(b)
};
t.Yb = q("Fa");
t.detach = function() {
  this.Za && (ji(this.Za), ji(this.Kb), ji(this.$a), this.$a = this.Kb = this.Za = m);
  this.Fa = m;
  this.ma = this.na = -1
};
function ij(a, b, c, d) {
  d && this.Sa(d, h);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
ja(ij, Zh);
function Z(a) {
  return fi(new ej(a), "key", function(b) {
    (function() {
      var a = O.a(b.keyCode, 48);
      return a || (a = O.a(b.keyCode, 49)) || (a = O.a(b.keyCode, 50)) || (a = O.a(b.keyCode, 51)) || (a = O.a(b.keyCode, 52)) || (a = O.a(b.keyCode, 53)) || (a = O.a(b.keyCode, 54)) || (a = O.a(b.keyCode, 55)) || (a = O.a(b.keyCode, 56)) || (a = O.a(b.keyCode, 57)) || (a = O.a(b.keyCode, 37)) || (a = O.a(b.keyCode, 39)) || (a = O.a(b.keyCode, 38)) || (a = O.a(b.keyCode, 40)) || (a = O.a(b.keyCode, 9)) || (a = O.a(b.keyCode, 8)) || (a = O.a(b.keyCode, 46)) || (a = O.a(b.keyCode, 36)) ? a : (a = O.a(b.keyCode, 
      35)) ? a : O.a(b.keyCode, 190)
    })() || b.preventDefault();
    var c;
    c = Lg(/\./, Ti(a));
    c = w(c) ? O.a(b.keyCode, 190) : c;
    return w(c) ? b.preventDefault() : m
  })
}
function jj(a) {
  if(O.a((new S("\ufdd0:type")).call(m, Ri(Y((new S("\ufdd0:id")).call(m, a)))), "radio") || 0 < R(Ti(Y((new S("\ufdd0:id")).call(m, a))))) {
    return l
  }
  Pi(Y([H("td"), H((new S("\ufdd0:id")).call(m, a))].join("")), [H('<div class="help">Value for field '), H(Si(Y([H("l"), H((new S("\ufdd0:id")).call(m, a))].join("")))), H(" is required</div>")].join(""));
  return n
}
function kj(a) {
  var b;
  b = Ti(Y((new S("\ufdd0:id")).call(m, a)));
  b = "number" === typeof(w(Lg(/^-?\d+\.?\d[E]?-?\d*$|^-?\d+\.?\d*$/, b)) ? parseFloat(b) : b);
  if(w(b)) {
    return l
  }
  Pi(Y([H("td"), H((new S("\ufdd0:id")).call(m, a))].join("")), "" + H('<div class="help">Given value is not a number</div>'));
  return n
}
function lj(a, b, c) {
  return O.a(a, Ab) ? (Pi(Y(b), [H('<div class="help">Select one option for '), H(c), H("</div>")].join("")), n) : l
}
;var $, mj = [], nj = 0, oj;
for(oj in Xh) {
  mj[nj++] = Xh[oj]
}
var pj, qj = ne.a(qd, mj);
pj = Ac.a(qg, qj);
var rj = window.document.documentElement, tj = function sj(b) {
  return function(c) {
    b.b ? b.b(function() {
      h === $ && ($ = {}, $ = function(b, c, g, i) {
        this.qa = b;
        this.Gb = c;
        this.Ab = g;
        this.Mb = i;
        this.r = 0;
        this.h = 393472
      }, $.Ca = l, $.Qa = "domina.events/t4592", $.Pa = function(b, c) {
        return G(c, "domina.events/t4592")
      }, $.prototype.B = function(b, c) {
        var g = this.qa[c];
        return w(g) ? g : this.qa[ug(c)]
      }, $.prototype.t = function(b, c, g) {
        b = b.B(b, c);
        return w(b) ? b : g
      }, $.prototype.C = q("Mb"), $.prototype.D = function(b, c) {
        return new $(this.qa, this.Gb, this.Ab, c)
      });
      return new $(c, b, sj, m)
    }()) : b.call(m, function() {
      h === $ && ($ = function(b, c, g, i) {
        this.qa = b;
        this.Gb = c;
        this.Ab = g;
        this.Mb = i;
        this.r = 0;
        this.h = 393472
      }, $.Ca = l, $.Qa = "domina.events/t4592", $.Pa = function(b, c) {
        return G(c, "domina.events/t4592")
      }, $.prototype.B = function(b, c) {
        var g = this.qa[c];
        return w(g) ? g : this.qa[ug(c)]
      }, $.prototype.t = function(b, c, g) {
        b = b.B(b, c);
        return w(b) ? b : g
      }, $.prototype.C = q("Mb"), $.prototype.D = function(b, c) {
        return new $(this.qa, this.Gb, this.Ab, c)
      });
      return new $(c, b, sj, m)
    }());
    return l
  }
};
function uj(a, b, c) {
  var d = tj(c), f = oc.e(pj, b, Nc) !== Nc ? ug(b) : b;
  return Hg.b(function i(a) {
    return new Fd(m, n, function() {
      for(;;) {
        var b = J(a);
        if(b) {
          if(Jc(b)) {
            var c = sb(b), s = R(c), r = new Gd(Array(s), 0);
            a: {
              for(var x = 0;;) {
                if(x < s) {
                  var C = D.a(c, x), C = w(n) ? hi(C, f, d, n) : fi(C, f, d, n);
                  r.add(C);
                  x += 1
                }else {
                  c = l;
                  break a
                }
              }
              c = h
            }
            return c ? Nd(r.aa(), i(tb(b))) : Nd(r.aa(), m)
          }
          r = K(b);
          return Q(w(n) ? hi(r, f, d, n) : fi(r, f, d, n), i(L(b)))
        }
        return m
      }
    }, m)
  }(Ii(a)))
}
var vj, wj = m;
function xj(a, b) {
  return wj.e(rj, a, b)
}
wj = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return xj.call(this, a, b);
    case 3:
      return uj(a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
wj.a = xj;
wj.e = function(a, b, c) {
  return uj(a, b, c)
};
vj = wj;
var yj;
yj = ba(l);
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
function zj(a, b) {
  var c = b || [];
  a && c.push(a);
  return c
}
var Aj = ph && "BackCompat" == document.compatMode, Bj = document.firstChild.children ? "children" : "childNodes", Cj = n;
function Dj(a) {
  function b() {
    0 <= p && (A.id = c(p, z).replace(/\\/g, ""), p = -1);
    if(0 <= s) {
      var a = s == z ? m : c(s, z);
      0 > ">~+".indexOf(a) ? A.Q = a : A.cb = a;
      s = -1
    }
    0 <= k && (A.da.push(c(k + 1, z).replace(/\\/g, "")), k = -1)
  }
  function c(b, c) {
    return ka(a.slice(b, c))
  }
  for(var a = 0 <= ">~+".indexOf(a.slice(-1)) ? a + " * " : a + " ", d = [], f = -1, g = -1, i = -1, j = -1, k = -1, p = -1, s = -1, r = "", x = "", C, z = 0, T = a.length, A = m, M = m;r = x, x = a.charAt(z), z < T;z++) {
    if("\\" != r) {
      if(A || (C = z, A = {Ka:m, ra:[], Wa:[], da:[], Q:m, cb:m, id:m, Hb:function() {
        return Cj ? this.vc : this.Q
      }}, s = z), 0 <= f) {
        if("]" == x) {
          M.gb ? M.Lb = c(i || f + 1, z) : M.gb = c(f + 1, z);
          if((f = M.Lb) && ('"' == f.charAt(0) || "'" == f.charAt(0))) {
            M.Lb = f.slice(1, -1)
          }
          A.Wa.push(M);
          M = m;
          f = i = -1
        }else {
          "=" == x && (i = 0 <= "|~^$*".indexOf(r) ? r : "", M.type = i + x, M.gb = c(f + 1, z - i.length), i = z + 1)
        }
      }else {
        0 <= g ? ")" == x && (0 <= j && (M.value = c(g + 1, z)), j = g = -1) : "#" == x ? (b(), p = z + 1) : "." == x ? (b(), k = z) : ":" == x ? (b(), j = z) : "[" == x ? (b(), f = z, M = {}) : "(" == x ? (0 <= j && (M = {name:c(j + 1, z), value:m}, A.ra.push(M)), g = z) : " " == x && r != x && (b(), 0 <= j && A.ra.push({name:c(j + 1, z)}), A.ac = A.ra.length || A.Wa.length || A.da.length, A.Nd = A.Ka = c(C, z), A.vc = A.Q = A.cb ? m : A.Q || "*", A.Q && (A.Q = A.Q.toUpperCase()), d.length && d[d.length - 
        1].cb && (A.Zb = d.pop(), A.Ka = A.Zb.Ka + " " + A.Ka), d.push(A), A = m)
      }
    }
  }
  return d
}
function Ej(a, b) {
  return!a ? b : !b ? a : function() {
    return a.apply(window, arguments) && b.apply(window, arguments)
  }
}
function Fj(a) {
  return 1 == a.nodeType
}
function Gj(a, b) {
  return!a ? "" : "class" == b ? a.className || "" : "for" == b ? a.htmlFor || "" : "style" == b ? a.style.cssText || "" : (Cj ? a.getAttribute(b) : a.getAttribute(b, 2)) || ""
}
var Hj = {"*=":function(a, b) {
  return function(c) {
    return 0 <= Gj(c, a).indexOf(b)
  }
}, "^=":function(a, b) {
  return function(c) {
    return 0 == Gj(c, a).indexOf(b)
  }
}, "$=":function(a, b) {
  return function(c) {
    c = " " + Gj(c, a);
    return c.lastIndexOf(b) == c.length - b.length
  }
}, "~=":function(a, b) {
  var c = " " + b + " ";
  return function(b) {
    return 0 <= (" " + Gj(b, a) + " ").indexOf(c)
  }
}, "|=":function(a, b) {
  b = " " + b;
  return function(c) {
    c = " " + Gj(c, a);
    return c == b || 0 == c.indexOf(b + "-")
  }
}, "=":function(a, b) {
  return function(c) {
    return Gj(c, a) == b
  }
}}, Ij = "undefined" == typeof document.firstChild.nextElementSibling, Jj = !Ij ? "nextElementSibling" : "nextSibling", Kj = !Ij ? "previousElementSibling" : "previousSibling", Lj = Ij ? Fj : yj;
function Mj(a) {
  for(;a = a[Kj];) {
    if(Lj(a)) {
      return n
    }
  }
  return l
}
function Nj(a) {
  for(;a = a[Jj];) {
    if(Lj(a)) {
      return n
    }
  }
  return l
}
function Oj(a) {
  var b = a.parentNode, c = 0, d = b[Bj], f = a._i || -1, g = b._l || -1;
  if(!d) {
    return-1
  }
  d = d.length;
  if(g == d && 0 <= f && 0 <= g) {
    return f
  }
  b._l = d;
  f = -1;
  for(b = b.firstElementChild || b.firstChild;b;b = b[Jj]) {
    Lj(b) && (b._i = ++c, a === b && (f = c))
  }
  return f
}
function Pj(a) {
  return!(Oj(a) % 2)
}
function Qj(a) {
  return Oj(a) % 2
}
var Sj = {checked:function() {
  return function(a) {
    return a.checked || a.attributes.checked
  }
}, "first-child":function() {
  return Mj
}, "last-child":function() {
  return Nj
}, "only-child":function() {
  return function(a) {
    return!Mj(a) || !Nj(a) ? n : l
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
  var c = Dj(b)[0], d = {Ea:1};
  "*" != c.Q && (d.Q = 1);
  c.da.length || (d.da = 1);
  var f = Rj(c, d);
  return function(a) {
    return!f(a)
  }
}, "nth-child":function(a, b) {
  if("odd" == b) {
    return Qj
  }
  if("even" == b) {
    return Pj
  }
  if(-1 != b.indexOf("n")) {
    var c = b.split("n", 2), d = c[0] ? "-" == c[0] ? -1 : parseInt(c[0], 10) : 1, f = c[1] ? parseInt(c[1], 10) : 0, g = 0, i = -1;
    0 < d ? 0 > f ? f = f % d && d + f % d : 0 < f && (f >= d && (g = f - f % d), f %= d) : 0 > d && (d *= -1, 0 < f && (i = f, f %= d));
    if(0 < d) {
      return function(a) {
        a = Oj(a);
        return a >= g && (0 > i || a <= i) && a % d == f
      }
    }
    b = f
  }
  var j = parseInt(b, 10);
  return function(a) {
    return Oj(a) == j
  }
}}, Tj = X ? function(a) {
  var b = a.toLowerCase();
  "class" == b && (a = "className");
  return function(c) {
    return Cj ? c.getAttribute(a) : c[a] || c[b]
  }
} : function(a) {
  return function(b) {
    return b && b.getAttribute && b.hasAttribute(a)
  }
};
function Rj(a, b) {
  if(!a) {
    return yj
  }
  var b = b || {}, c = m;
  b.Ea || (c = Ej(c, Fj));
  b.Q || "*" != a.Q && (c = Ej(c, function(b) {
    return b && b.tagName == a.Hb()
  }));
  b.da || oa(a.da, function(a, b) {
    var g = RegExp("(?:^|\\s)" + a + "(?:\\s|$)");
    c = Ej(c, function(a) {
      return g.test(a.className)
    });
    c.count = b
  });
  b.ra || oa(a.ra, function(a) {
    var b = a.name;
    Sj[b] && (c = Ej(c, Sj[b](b, a.value)))
  });
  b.Wa || oa(a.Wa, function(a) {
    var b, g = a.gb;
    a.type && Hj[a.type] ? b = Hj[a.type](g, a.Lb) : g.length && (b = Tj(g));
    b && (c = Ej(c, b))
  });
  b.id || a.id && (c = Ej(c, function(b) {
    return!!b && b.id == a.id
  }));
  c || "default" in b || (c = yj);
  return c
}
var Uj = {};
function Vj(a) {
  var b = Uj[a.Ka];
  if(b) {
    return b
  }
  var c = a.Zb, c = c ? c.cb : "", d = Rj(a, {Ea:1}), f = "*" == a.Q, g = document.getElementsByClassName;
  if(c) {
    if(g = {Ea:1}, f && (g.Q = 1), d = Rj(a, g), "+" == c) {
      var i = d, b = function(a, b, c) {
        for(;a = a[Jj];) {
          if(!Ij || Fj(a)) {
            (!c || Wj(a, c)) && i(a) && b.push(a);
            break
          }
        }
        return b
      }
    }else {
      if("~" == c) {
        var j = d, b = function(a, b, c) {
          for(a = a[Jj];a;) {
            if(Lj(a)) {
              if(c && !Wj(a, c)) {
                break
              }
              j(a) && b.push(a)
            }
            a = a[Jj]
          }
          return b
        }
      }else {
        if(">" == c) {
          var k = d, k = k || yj, b = function(a, b, c) {
            for(var d = 0, f = a[Bj];a = f[d++];) {
              Lj(a) && ((!c || Wj(a, c)) && k(a, d)) && b.push(a)
            }
            return b
          }
        }
      }
    }
  }else {
    if(a.id) {
      d = !a.ac && f ? yj : Rj(a, {Ea:1, id:1}), b = function(b, c) {
        var f = (b ? new Qh(9 == b.nodeType ? b : b.ownerDocument || b.document) : Gh || (Gh = new Qh)).Yb(a.id), g;
        if(g = f && d(f)) {
          if(!(g = 9 == b.nodeType)) {
            for(g = f.parentNode;g && g != b;) {
              g = g.parentNode
            }
            g = !!g
          }
        }
        if(g) {
          return zj(f, c)
        }
      }
    }else {
      if(g && /\{\s*\[native code\]\s*\}/.test(String(g)) && a.da.length && !Aj) {
        var d = Rj(a, {Ea:1, da:1, id:1}), p = a.da.join(" "), b = function(a, b) {
          for(var c = zj(0, b), f, g = 0, i = a.getElementsByClassName(p);f = i[g++];) {
            d(f, a) && c.push(f)
          }
          return c
        }
      }else {
        !f && !a.ac ? b = function(b, c) {
          for(var d = zj(0, c), f, g = 0, i = b.getElementsByTagName(a.Hb());f = i[g++];) {
            d.push(f)
          }
          return d
        } : (d = Rj(a, {Ea:1, Q:1, id:1}), b = function(b, c) {
          for(var f = zj(0, c), g, i = 0, j = b.getElementsByTagName(a.Hb());g = j[i++];) {
            d(g, b) && f.push(g)
          }
          return f
        })
      }
    }
  }
  return Uj[a.Ka] = b
}
var Xj = {}, Yj = {};
function Zj(a) {
  var b = Dj(ka(a));
  if(1 == b.length) {
    var c = Vj(b[0]);
    return function(a) {
      if(a = c(a, [])) {
        a.bb = l
      }
      return a
    }
  }
  return function(a) {
    for(var a = zj(a), c, g, i = b.length, j, k, p = 0;p < i;p++) {
      k = [];
      c = b[p];
      g = a.length - 1;
      0 < g && (j = {}, k.bb = l);
      g = Vj(c);
      for(var s = 0;c = a[s];s++) {
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
var $j = !!document.querySelectorAll && (!ph || Ah("526"));
function ak(a, b) {
  if($j) {
    var c = Yj[a];
    if(c && !b) {
      return c
    }
  }
  if(c = Xj[a]) {
    return c
  }
  var c = a.charAt(0), d = -1 == a.indexOf(" ");
  0 <= a.indexOf("#") && d && (b = l);
  if($j && !b && -1 == ">~+".indexOf(c) && (!X || -1 == a.indexOf(":")) && !(Aj && 0 <= a.indexOf(".")) && -1 == a.indexOf(":contains") && -1 == a.indexOf("|=")) {
    var f = 0 <= ">~+".indexOf(a.charAt(a.length - 1)) ? a + " *" : a;
    return Yj[a] = function(b) {
      try {
        9 == b.nodeType || d || e("");
        var c = b.querySelectorAll(f);
        X ? c.pc = l : c.bb = l;
        return c
      }catch(g) {
        return ak(a, l)(b)
      }
    }
  }
  var g = a.split(/\s*,\s*/);
  return Xj[a] = 2 > g.length ? Zj(a) : function(a) {
    for(var b = 0, c = [], d;d = g[b++];) {
      c = c.concat(Zj(d)(a))
    }
    return c
  }
}
var bk = 0, ck = X ? function(a) {
  return Cj ? a.getAttribute("_uid") || a.setAttribute("_uid", ++bk) || bk : a.uniqueID
} : function(a) {
  return a._uid || (a._uid = ++bk)
};
function Wj(a, b) {
  if(!b) {
    return 1
  }
  var c = ck(a);
  return!b[c] ? b[c] = 1 : 0
}
function dk(a) {
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
  bk++;
  if(X && Cj) {
    var c = bk + "";
    a[0].setAttribute("_zipIdx", c);
    for(var d = 1, f;f = a[d];d++) {
      a[d].getAttribute("_zipIdx") != c && b.push(f), f.setAttribute("_zipIdx", c)
    }
  }else {
    if(X && a.pc) {
      try {
        for(d = 1;f = a[d];d++) {
          Fj(f) && b.push(f)
        }
      }catch(g) {
      }
    }else {
      a[0] && (a[0]._zipIdx = bk);
      for(d = 1;f = a[d];d++) {
        a[d]._zipIdx != bk && b.push(f), f._zipIdx = bk
      }
    }
  }
  return b
}
function ek(a, b) {
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
  Cj = b.contentType && "application/xml" == b.contentType || nh && (b.doctype || "[object XMLDocument]" == c.toString()) || !!c && (X ? c.xml : b.xmlVersion || c.xmlVersion);
  return(c = ak(a)(b)) && c.bb ? c : dk(c)
}
ek.ra = Sj;
ia("goog.dom.query", ek);
ia("goog.dom.query.pseudos", ek.ra);
var fk, gk, hk = m;
function ik(a) {
  return hk.a(Jh("html", h, h)[0], a)
}
function jk(a, b) {
  h === fk && (fk = {}, fk = function(a, b, f, g) {
    this.Fb = a;
    this.hb = b;
    this.yc = f;
    this.uc = g;
    this.r = 0;
    this.h = 393216
  }, fk.Ca = l, fk.Qa = "domina.css/t5189", fk.Pa = function(a, b) {
    return G(b, "domina.css/t5189")
  }, fk.prototype.Cb = function() {
    var a = this;
    return Be.a(function(b) {
      return Li(ek(a.Fb, b))
    }, Ii(a.hb))
  }, fk.prototype.Db = function() {
    var a = this;
    return K(He(me(), Be.a(function(b) {
      return Li(ek(a.Fb, b))
    }, Ii(a.hb))))
  }, fk.prototype.C = q("uc"), fk.prototype.D = function(a, b) {
    return new fk(this.Fb, this.hb, this.yc, b)
  });
  return new fk(b, a, hk, m)
}
hk = function(a, b) {
  switch(arguments.length) {
    case 1:
      return ik.call(this, a);
    case 2:
      return jk.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
hk.b = ik;
hk.a = jk;
gk = hk;
function kk(a) {
  var b = O.a(a.currentTarget.readyState, 4);
  if(b ? O.a(a.currentTarget.status, 200) : b) {
    a = a.currentTarget.responseText;
    Qi(Mi("help"));
    if(O.a(a, "nodelete")) {
      return Ni('<div class="help">There are meals that contain this grocery, so it can not be deleted</div>')
    }
    Qi(Y([H("grocery-"), H(a)].join("")));
    return Ni('<div class="help">Grocery successfully deleted</div>')
  }
  return m
}
function lk(a) {
  var b = new XMLHttpRequest;
  b.onreadystatechange = kk;
  b.open("DELETE", [H("/delete-grocery/"), H(a)].join(""), l);
  return b.send()
}
ia("personal_organiser.grocery.jsgrocerytbl.init", function() {
  var a = document;
  if(w(w(a) ? document.getElementById : a)) {
    a: {
      for(var a = ne.a(Ri, Ii(gk.b("a[id*='delete']"))), a = J(a), b = m, c = 0, d = 0;;) {
        if(d < c) {
          var f = b.v(b, d);
          vj.e(Y((new S("\ufdd0:id")).call(m, f)), "\ufdd0:click", function(a, b, c, d, f) {
            return function() {
              return lk(Rh((new S("\ufdd0:id")).call(m, f), "gdelete", ""))
            }
          }(a, b, c, d, f));
          d += 1
        }else {
          var g = J(a);
          if(g) {
            var i = g;
            Jc(i) ? (a = sb(i), c = tb(i), b = a, i = R(a), a = c, c = i) : (f = K(i), vj.e(Y((new S("\ufdd0:id")).call(m, f)), "\ufdd0:click", function(a, b, c, d, f) {
              return function() {
                return lk(Rh((new S("\ufdd0:id")).call(m, f), "gdelete", ""))
              }
            }(a, b, c, d, f, i, g)), a = N(i), b = m, c = 0);
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
function mk() {
  var a = ne.a(Ri, Ii(gk.b("input[id*='value'],input[id^='g'],textarea"))), b = Ii(gk.b("input[name='gorigin']:checked")), c = Tg.b(Ye);
  Qi(Mi("help"));
  for(var a = J(a), d = m, f = 0, g = 0;;) {
    if(g < f) {
      var i = d.v(d, g);
      Zg.e(c, bc, jj.b ? jj.b(i) : jj.call(m, i));
      O.a((new S("\ufdd0:type")).call(m, i), "number") && Zg.e(c, bc, kj.b ? kj.b(i) : kj.call(m, i));
      g += 1
    }else {
      if(a = J(a)) {
        d = a, Jc(d) ? (a = sb(d), g = tb(d), d = a, f = R(a), a = g) : (a = K(d), Zg.e(c, bc, jj.b ? jj.b(a) : jj.call(m, a)), O.a((new S("\ufdd0:type")).call(m, a), "number") && Zg.e(c, bc, kj.b ? kj.b(a) : kj.call(m, a)), a = N(d), d = m, f = 0), g = 0
      }else {
        break
      }
    }
  }
  Zg.e(c, bc, lj.e ? lj.e(b, "tdgorigin", "origin") : lj.call(m, b, "tdgorigin", "origin"));
  return ke(Oc, Wa(c))
}
ia("personal_organiser.grocery.jsgrocery.init", function() {
  var a = document;
  if(w(w(a) ? document.getElementById : a)) {
    var a = Y("grocery-form"), b = ne.a(Ri, Ii(gk.b("input[id*='value']")));
    a.onsubmit = mk;
    Z.b ? Z.b(Y("gcalories")) : Z.call(m, Y("gcalories"));
    Z.b ? Z.b(Y("gfats")) : Z.call(m, Y("gfats"));
    Z.b ? Z.b(Y("gproteins")) : Z.call(m, Y("gproteins"));
    Z.b ? Z.b(Y("gcarbohydrates")) : Z.call(m, Y("gcarbohydrates"));
    Z.b ? Z.b(Y("gwater")) : Z.call(m, Y("gwater"));
    for(var a = J(b), b = m, c = 0, d = 0;;) {
      if(d < c) {
        var f = b.v(b, d);
        Z.b ? Z.b(Y((new S("\ufdd0:id")).call(m, f))) : Z.call(m, Y((new S("\ufdd0:id")).call(m, f)));
        d += 1
      }else {
        if(a = J(a)) {
          b = a, Jc(b) ? (a = sb(b), c = tb(b), b = a, f = R(a), a = c, c = f) : (f = K(b), Z.b ? Z.b(Y((new S("\ufdd0:id")).call(m, f))) : Z.call(m, Y((new S("\ufdd0:id")).call(m, f))), a = N(b), b = m, c = 0), d = 0
        }else {
          return m
        }
      }
    }
  }else {
    return m
  }
});
