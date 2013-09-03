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
function t(a) {
  return"string" == typeof a
}
function da(a) {
  return"function" == s(a)
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
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = Array.prototype.slice.call(arguments);
    b.unshift.apply(b, c);
    return a.apply(this, b)
  }
}
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
function na(a) {
  return String(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase()
  })
}
;var oa = Array.prototype, pa = oa.indexOf ? function(a, b, c) {
  return oa.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == m ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if(t(a)) {
    return!t(b) || 1 != b.length ? -1 : a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, qa = oa.forEach ? function(a, b, c) {
  oa.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = t(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in f && b.call(c, f[g], g, a)
  }
};
function ra(a, b) {
  for(var c in a) {
    b.call(h, a[c], c, a)
  }
}
var sa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function ta(a, b) {
  for(var c, d, f = 1;f < arguments.length;f++) {
    d = arguments[f];
    for(c in d) {
      a[c] = d[c]
    }
    for(var g = 0;g < sa.length;g++) {
      c = sa[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
;function ua(a, b) {
  var c = Array.prototype.slice.call(arguments), d = c.shift();
  "undefined" == typeof d && e(Error("[goog.string.format] Template required"));
  return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, j, k, p, v, u) {
    if("%" == p) {
      return"%"
    }
    var y = c.shift();
    "undefined" == typeof y && e(Error("[goog.string.format] Not enough arguments"));
    arguments[0] = y;
    return ua.ga[p].apply(m, arguments)
  })
}
ua.ga = {};
ua.ga.s = function(a, b, c) {
  return isNaN(c) || "" == c || a.length >= c ? a : a = -1 < b.indexOf("-", 0) ? a + Array(c - a.length + 1).join(" ") : Array(c - a.length + 1).join(" ") + a
};
ua.ga.f = function(a, b, c, d, f) {
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
ua.ga.d = function(a, b, c, d, f, g, i, j) {
  return ua.ga.f(parseInt(a, 10), b, c, d, 0, g, i, j)
};
ua.ga.i = ua.ga.d;
ua.ga.u = ua.ga.d;
function va(a, b) {
  a != m && this.append.apply(this, arguments)
}
va.prototype.Ma = "";
va.prototype.append = function(a, b, c) {
  this.Ma += a;
  if(b != m) {
    for(var d = 1;d < arguments.length;d++) {
      this.Ma += arguments[d]
    }
  }
  return this
};
va.prototype.toString = q("Ma");
var wa;
ja("cljs.core.set_print_fn_BANG_", aa());
function xa() {
  return ya(["\ufdd0:flush-on-newline", l, "\ufdd0:readably", l, "\ufdd0:meta", n, "\ufdd0:dup", n], l)
}
function w(a) {
  return a != m && a !== n
}
function za(a) {
  return a == m
}
function Aa(a) {
  return w(a) ? n : l
}
function Ba(a) {
  var b = t(a);
  return b ? "\ufdd0" !== a.charAt(0) : b
}
function x(a, b) {
  return a[s(b == m ? m : b)] ? l : a._ ? l : n
}
function z(a, b) {
  var c = b == m ? m : b.constructor, c = w(w(c) ? c.Ca : c) ? c.Qa : s(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""))
}
var Ca = {}, Da = {};
function Ea(a) {
  if(a ? a.z : a) {
    return a.z(a)
  }
  var b;
  var c = Ea[s(a == m ? m : a)];
  c ? b = c : (c = Ea._) ? b = c : e(z("ICounted.-count", a));
  return b.call(m, a)
}
function Ga(a, b) {
  if(a ? a.I : a) {
    return a.I(a, b)
  }
  var c;
  var d = Ga[s(a == m ? m : a)];
  d ? c = d : (d = Ga._) ? c = d : e(z("ICollection.-conj", a));
  return c.call(m, a, b)
}
var Ha = {}, A, Ia = m;
function Ja(a, b) {
  if(a ? a.q : a) {
    return a.q(a, b)
  }
  var c;
  var d = A[s(a == m ? m : a)];
  d ? c = d : (d = A._) ? c = d : e(z("IIndexed.-nth", a));
  return c.call(m, a, b)
}
function Ka(a, b, c) {
  if(a ? a.N : a) {
    return a.N(a, b, c)
  }
  var d;
  var f = A[s(a == m ? m : a)];
  f ? d = f : (f = A._) ? d = f : e(z("IIndexed.-nth", a));
  return d.call(m, a, b, c)
}
Ia = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ja.call(this, a, b);
    case 3:
      return Ka.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ia.a = Ja;
Ia.e = Ka;
A = Ia;
var La = {};
function E(a) {
  if(a ? a.O : a) {
    return a.O(a)
  }
  var b;
  var c = E[s(a == m ? m : a)];
  c ? b = c : (c = E._) ? b = c : e(z("ISeq.-first", a));
  return b.call(m, a)
}
function F(a) {
  if(a ? a.R : a) {
    return a.R(a)
  }
  var b;
  var c = F[s(a == m ? m : a)];
  c ? b = c : (c = F._) ? b = c : e(z("ISeq.-rest", a));
  return b.call(m, a)
}
var Ma = {}, Na, Oa = m;
function Pa(a, b) {
  if(a ? a.B : a) {
    return a.B(a, b)
  }
  var c;
  var d = Na[s(a == m ? m : a)];
  d ? c = d : (d = Na._) ? c = d : e(z("ILookup.-lookup", a));
  return c.call(m, a, b)
}
function Qa(a, b, c) {
  if(a ? a.v : a) {
    return a.v(a, b, c)
  }
  var d;
  var f = Na[s(a == m ? m : a)];
  f ? d = f : (f = Na._) ? d = f : e(z("ILookup.-lookup", a));
  return d.call(m, a, b, c)
}
Oa = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Pa.call(this, a, b);
    case 3:
      return Qa.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Oa.a = Pa;
Oa.e = Qa;
Na = Oa;
function Ra(a, b) {
  if(a ? a.Xa : a) {
    return a.Xa(a, b)
  }
  var c;
  var d = Ra[s(a == m ? m : a)];
  d ? c = d : (d = Ra._) ? c = d : e(z("IAssociative.-contains-key?", a));
  return c.call(m, a, b)
}
function Sa(a, b, c) {
  if(a ? a.ja : a) {
    return a.ja(a, b, c)
  }
  var d;
  var f = Sa[s(a == m ? m : a)];
  f ? d = f : (f = Sa._) ? d = f : e(z("IAssociative.-assoc", a));
  return d.call(m, a, b, c)
}
var Ta = {}, Ua = {};
function Va(a) {
  if(a ? a.Rb : a) {
    return a.Rb(a)
  }
  var b;
  var c = Va[s(a == m ? m : a)];
  c ? b = c : (c = Va._) ? b = c : e(z("IMapEntry.-key", a));
  return b.call(m, a)
}
function Wa(a) {
  if(a ? a.Sb : a) {
    return a.Sb(a)
  }
  var b;
  var c = Wa[s(a == m ? m : a)];
  c ? b = c : (c = Wa._) ? b = c : e(z("IMapEntry.-val", a));
  return b.call(m, a)
}
var Xa = {}, Ya = {};
function Za(a) {
  if(a ? a.jc : a) {
    return a.state
  }
  var b;
  var c = Za[s(a == m ? m : a)];
  c ? b = c : (c = Za._) ? b = c : e(z("IDeref.-deref", a));
  return b.call(m, a)
}
var $a = {};
function ab(a) {
  if(a ? a.C : a) {
    return a.C(a)
  }
  var b;
  var c = ab[s(a == m ? m : a)];
  c ? b = c : (c = ab._) ? b = c : e(z("IMeta.-meta", a));
  return b.call(m, a)
}
var bb = {};
function cb(a, b) {
  if(a ? a.D : a) {
    return a.D(a, b)
  }
  var c;
  var d = cb[s(a == m ? m : a)];
  d ? c = d : (d = cb._) ? c = d : e(z("IWithMeta.-with-meta", a));
  return c.call(m, a, b)
}
var db = {}, fb, gb = m;
function hb(a, b) {
  if(a ? a.xa : a) {
    return a.xa(a, b)
  }
  var c;
  var d = fb[s(a == m ? m : a)];
  d ? c = d : (d = fb._) ? c = d : e(z("IReduce.-reduce", a));
  return c.call(m, a, b)
}
function ib(a, b, c) {
  if(a ? a.ya : a) {
    return a.ya(a, b, c)
  }
  var d;
  var f = fb[s(a == m ? m : a)];
  f ? d = f : (f = fb._) ? d = f : e(z("IReduce.-reduce", a));
  return d.call(m, a, b, c)
}
gb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return hb.call(this, a, b);
    case 3:
      return ib.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
gb.a = hb;
gb.e = ib;
fb = gb;
function jb(a, b) {
  if(a ? a.G : a) {
    return a.G(a, b)
  }
  var c;
  var d = jb[s(a == m ? m : a)];
  d ? c = d : (d = jb._) ? c = d : e(z("IEquiv.-equiv", a));
  return c.call(m, a, b)
}
function kb(a) {
  if(a ? a.J : a) {
    return a.J(a)
  }
  var b;
  var c = kb[s(a == m ? m : a)];
  c ? b = c : (c = kb._) ? b = c : e(z("IHash.-hash", a));
  return b.call(m, a)
}
var lb = {};
function mb(a) {
  if(a ? a.w : a) {
    return a.w(a)
  }
  var b;
  var c = mb[s(a == m ? m : a)];
  c ? b = c : (c = mb._) ? b = c : e(z("ISeqable.-seq", a));
  return b.call(m, a)
}
var nb = {};
function G(a, b) {
  if(a ? a.Vb : a) {
    return a.Vb(0, b)
  }
  var c;
  var d = G[s(a == m ? m : a)];
  d ? c = d : (d = G._) ? c = d : e(z("IWriter.-write", a));
  return c.call(m, a, b)
}
function ob(a) {
  if(a ? a.oc : a) {
    return m
  }
  var b;
  var c = ob[s(a == m ? m : a)];
  c ? b = c : (c = ob._) ? b = c : e(z("IWriter.-flush", a));
  return b.call(m, a)
}
function pb(a, b, c) {
  if(a ? a.Ub : a) {
    return a.Ub(a, b, c)
  }
  var d;
  var f = pb[s(a == m ? m : a)];
  f ? d = f : (f = pb._) ? d = f : e(z("IWatchable.-notify-watches", a));
  return d.call(m, a, b, c)
}
function qb(a) {
  if(a ? a.va : a) {
    return a.va(a)
  }
  var b;
  var c = qb[s(a == m ? m : a)];
  c ? b = c : (c = qb._) ? b = c : e(z("IEditableCollection.-as-transient", a));
  return b.call(m, a)
}
function rb(a, b) {
  if(a ? a.pa : a) {
    return a.pa(a, b)
  }
  var c;
  var d = rb[s(a == m ? m : a)];
  d ? c = d : (d = rb._) ? c = d : e(z("ITransientCollection.-conj!", a));
  return c.call(m, a, b)
}
function sb(a) {
  if(a ? a.Ba : a) {
    return a.Ba(a)
  }
  var b;
  var c = sb[s(a == m ? m : a)];
  c ? b = c : (c = sb._) ? b = c : e(z("ITransientCollection.-persistent!", a));
  return b.call(m, a)
}
function tb(a, b, c) {
  if(a ? a.Aa : a) {
    return a.Aa(a, b, c)
  }
  var d;
  var f = tb[s(a == m ? m : a)];
  f ? d = f : (f = tb._) ? d = f : e(z("ITransientAssociative.-assoc!", a));
  return d.call(m, a, b, c)
}
function ub(a) {
  if(a ? a.Pb : a) {
    return a.Pb()
  }
  var b;
  var c = ub[s(a == m ? m : a)];
  c ? b = c : (c = ub._) ? b = c : e(z("IChunk.-drop-first", a));
  return b.call(m, a)
}
function H(a) {
  if(a ? a.kb : a) {
    return a.kb(a)
  }
  var b;
  var c = H[s(a == m ? m : a)];
  c ? b = c : (c = H._) ? b = c : e(z("IChunkedSeq.-chunked-first", a));
  return b.call(m, a)
}
function I(a) {
  if(a ? a.Ya : a) {
    return a.Ya(a)
  }
  var b;
  var c = I[s(a == m ? m : a)];
  c ? b = c : (c = I._) ? b = c : e(z("IChunkedSeq.-chunked-rest", a));
  return b.call(m, a)
}
function vb(a) {
  this.xc = a;
  this.t = 0;
  this.h = 1073741824
}
vb.prototype.Vb = function(a, b) {
  return this.xc.append(b)
};
vb.prototype.oc = ba(m);
function wb(a) {
  var b = new va, c = new vb(b);
  a.K(a, c, xa());
  ob(c);
  return"" + J(b)
}
function xb(a, b, c, d, f) {
  this.Ia = a;
  this.name = b;
  this.sa = c;
  this.Va = d;
  this.ec = f;
  this.t = 0;
  this.h = 2154168321
}
r = xb.prototype;
r.K = function(a, b) {
  return G(b, this.sa)
};
r.Tb = l;
r.J = function() {
  -1 === this.Va && (this.Va = yb.a ? yb.a(K.b ? K.b(this.Ia) : K.call(m, this.Ia), K.b ? K.b(this.name) : K.call(m, this.name)) : yb.call(m, K.b ? K.b(this.Ia) : K.call(m, this.Ia), K.b ? K.b(this.name) : K.call(m, this.name)));
  return this.Va
};
r.D = function(a, b) {
  return new xb(this.Ia, this.name, this.sa, this.Va, b)
};
r.C = q("ec");
var zb = m, zb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Na.e(b, this, m);
    case 3:
      return Na.e(b, this, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
xb.prototype.call = zb;
xb.prototype.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
xb.prototype.G = function(a, b) {
  return b instanceof xb ? this.sa === b.sa : n
};
xb.prototype.toString = q("sa");
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
  if(a instanceof Array || Ba(a)) {
    return 0 === a.length ? m : new Ab(a, 0)
  }
  if(x(Ma, a)) {
    return mb(a)
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
    return a != m ? F(a) : Bb
  }
  return Bb
}
function O(a) {
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
var Q, Cb = m;
function Db(a, b) {
  var c = a === b;
  return c ? c : jb(a, b)
}
function Eb(a, b, c) {
  for(;;) {
    if(w(Cb.a(a, b))) {
      if(O(c)) {
        a = b, b = M(c), c = O(c)
      }else {
        return Cb.a(b, M(c))
      }
    }else {
      return n
    }
  }
}
function Fb(a, b, c) {
  var d = m;
  2 < arguments.length && (d = R(Array.prototype.slice.call(arguments, 2), 0));
  return Eb.call(this, a, b, d)
}
Fb.o = 2;
Fb.k = function(a) {
  var b = M(a), a = O(a), c = M(a), a = N(a);
  return Eb(b, c, a)
};
Fb.g = Eb;
Cb = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return l;
    case 2:
      return Db.call(this, a, b);
    default:
      return Fb.g(a, b, R(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Cb.o = 2;
Cb.k = Fb.k;
Cb.b = ba(l);
Cb.a = Db;
Cb.g = Fb.g;
Q = Cb;
kb["null"] = ba(0);
Xa["null"] = l;
Da["null"] = l;
Ea["null"] = ba(0);
jb["null"] = function(a, b) {
  return b == m
};
bb["null"] = l;
cb["null"] = ba(m);
$a["null"] = l;
ab["null"] = ba(m);
Ta["null"] = l;
Date.prototype.G = function(a, b) {
  var c = b instanceof Date;
  return c ? a.toString() === b.toString() : c
};
kb.number = function(a) {
  return Math.floor(a) % 2147483647
};
jb.number = function(a, b) {
  return a === b
};
kb["boolean"] = function(a) {
  return a === l ? 1 : 0
};
$a["function"] = l;
ab["function"] = ba(m);
Ca["function"] = l;
kb._ = function(a) {
  return fa(a)
};
var Gb, Hb = m;
function Ib(a, b) {
  var c = Ea(a);
  if(0 === c) {
    return b.A ? b.A() : b.call(m)
  }
  for(var d = A.a(a, 0), f = 1;;) {
    if(f < c) {
      d = b.a ? b.a(d, A.a(a, f)) : b.call(m, d, A.a(a, f)), f += 1
    }else {
      return d
    }
  }
}
function Jb(a, b, c) {
  for(var d = Ea(a), f = 0;;) {
    if(f < d) {
      c = b.a ? b.a(c, A.a(a, f)) : b.call(m, c, A.a(a, f)), f += 1
    }else {
      return c
    }
  }
}
function Kb(a, b, c, d) {
  for(var f = Ea(a);;) {
    if(d < f) {
      c = b.a ? b.a(c, A.a(a, d)) : b.call(m, c, A.a(a, d)), d += 1
    }else {
      return c
    }
  }
}
Hb = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return Ib.call(this, a, b);
    case 3:
      return Jb.call(this, a, b, c);
    case 4:
      return Kb.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Hb.a = Ib;
Hb.e = Jb;
Hb.n = Kb;
Gb = Hb;
var Lb, Mb = m;
function Nb(a, b) {
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
function Ob(a, b, c) {
  for(var d = a.length, f = 0;;) {
    if(f < d) {
      c = b.a ? b.a(c, a[f]) : b.call(m, c, a[f]), f += 1
    }else {
      return c
    }
  }
}
function Pb(a, b, c, d) {
  for(var f = a.length;;) {
    if(d < f) {
      c = b.a ? b.a(c, a[d]) : b.call(m, c, a[d]), d += 1
    }else {
      return c
    }
  }
}
Mb = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return Nb.call(this, a, b);
    case 3:
      return Ob.call(this, a, b, c);
    case 4:
      return Pb.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Mb.a = Nb;
Mb.e = Ob;
Mb.n = Pb;
Lb = Mb;
function Qb(a) {
  if(a) {
    var b = a.h & 2, a = (b ? b : a.lb) ? l : a.h ? n : x(Da, a)
  }else {
    a = x(Da, a)
  }
  return a
}
function Rb(a) {
  if(a) {
    var b = a.h & 16, a = (b ? b : a.Oa) ? l : a.h ? n : x(Ha, a)
  }else {
    a = x(Ha, a)
  }
  return a
}
function Ab(a, b) {
  this.c = a;
  this.p = b;
  this.t = 0;
  this.h = 166199550
}
r = Ab.prototype;
r.J = function(a) {
  return Sb.b ? Sb.b(a) : Sb.call(m, a)
};
r.fa = function() {
  return this.p + 1 < this.c.length ? new Ab(this.c, this.p + 1) : m
};
r.I = function(a, b) {
  return S.a ? S.a(b, a) : S.call(m, b, a)
};
r.toString = function() {
  return wb(this)
};
r.xa = function(a, b) {
  return Lb.n(this.c, b, this.c[this.p], this.p + 1)
};
r.ya = function(a, b, c) {
  return Lb.n(this.c, b, c, this.p)
};
r.w = aa();
r.z = function() {
  return this.c.length - this.p
};
r.O = function() {
  return this.c[this.p]
};
r.R = function() {
  return this.p + 1 < this.c.length ? new Ab(this.c, this.p + 1) : Tb.A ? Tb.A() : Tb.call(m)
};
r.G = function(a, b) {
  return Ub.a ? Ub.a(a, b) : Ub.call(m, a, b)
};
r.q = function(a, b) {
  var c = b + this.p;
  return c < this.c.length ? this.c[c] : m
};
r.N = function(a, b, c) {
  a = b + this.p;
  return a < this.c.length ? this.c[a] : c
};
var Vb, Wb = m;
function Xb(a) {
  return Wb.a(a, 0)
}
function Yb(a, b) {
  return b < a.length ? new Ab(a, b) : m
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
Vb = Wb;
var R, Zb = m;
function $b(a) {
  return Vb.a(a, 0)
}
function ac(a, b) {
  return Vb.a(a, b)
}
Zb = function(a, b) {
  switch(arguments.length) {
    case 1:
      return $b.call(this, a);
    case 2:
      return ac.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Zb.b = $b;
Zb.a = ac;
R = Zb;
Da.array = l;
Ea.array = function(a) {
  return a.length
};
function bc(a) {
  return M(O(a))
}
jb._ = function(a, b) {
  return a === b
};
var cc, dc = m;
function ec(a, b) {
  return a != m ? Ga(a, b) : Tb.b ? Tb.b(b) : Tb.call(m, b)
}
function fc(a, b, c) {
  for(;;) {
    if(w(c)) {
      a = dc.a(a, b), b = M(c), c = O(c)
    }else {
      return dc.a(a, b)
    }
  }
}
function gc(a, b, c) {
  var d = m;
  2 < arguments.length && (d = R(Array.prototype.slice.call(arguments, 2), 0));
  return fc.call(this, a, b, d)
}
gc.o = 2;
gc.k = function(a) {
  var b = M(a), a = O(a), c = M(a), a = N(a);
  return fc(b, c, a)
};
gc.g = fc;
dc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return ec.call(this, a, b);
    default:
      return gc.g(a, b, R(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
dc.o = 2;
dc.k = gc.k;
dc.a = ec;
dc.g = gc.g;
cc = dc;
function T(a) {
  if(Qb(a)) {
    a = Ea(a)
  }else {
    a: {
      for(var a = L(a), b = 0;;) {
        if(Qb(a)) {
          a = b + Ea(a);
          break a
        }
        a = O(a);
        b += 1
      }
      a = h
    }
  }
  return a
}
var hc, ic = m;
function jc(a, b) {
  for(;;) {
    a == m && e(Error("Index out of bounds"));
    if(0 === b) {
      if(L(a)) {
        return M(a)
      }
      e(Error("Index out of bounds"))
    }
    if(Rb(a)) {
      return A.a(a, b)
    }
    if(L(a)) {
      var c = O(a), d = b - 1, a = c, b = d
    }else {
      e(Error("Index out of bounds"))
    }
  }
}
function kc(a, b, c) {
  for(;;) {
    if(a == m) {
      return c
    }
    if(0 === b) {
      return L(a) ? M(a) : c
    }
    if(Rb(a)) {
      return A.e(a, b, c)
    }
    if(L(a)) {
      a = O(a), b -= 1
    }else {
      return c
    }
  }
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
ic.e = kc;
hc = ic;
var lc, mc = m;
function nc(a, b) {
  var c;
  if(a == m) {
    c = m
  }else {
    if(c = a) {
      c = (c = a.h & 16) ? c : a.Oa
    }
    c = c ? a.q(a, Math.floor(b)) : a instanceof Array ? b < a.length ? a[b] : m : Ba(a) ? b < a.length ? a[b] : m : hc.a(a, Math.floor(b))
  }
  return c
}
function oc(a, b, c) {
  if(a != m) {
    var d;
    if(d = a) {
      d = (d = a.h & 16) ? d : a.Oa
    }
    a = d ? a.N(a, Math.floor(b), c) : a instanceof Array ? b < a.length ? a[b] : c : Ba(a) ? b < a.length ? a[b] : c : hc.e(a, Math.floor(b), c)
  }else {
    a = c
  }
  return a
}
mc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return nc.call(this, a, b);
    case 3:
      return oc.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
mc.a = nc;
mc.e = oc;
lc = mc;
var pc, qc = m;
function rc(a, b) {
  var c;
  if(a == m) {
    c = m
  }else {
    if(c = a) {
      c = (c = a.h & 256) ? c : a.kc
    }
    c = c ? a.B(a, b) : a instanceof Array ? b < a.length ? a[b] : m : Ba(a) ? b < a.length ? a[b] : m : x(Ma, a) ? Na.a(a, b) : m
  }
  return c
}
function sc(a, b, c) {
  if(a != m) {
    var d;
    if(d = a) {
      d = (d = a.h & 256) ? d : a.kc
    }
    a = d ? a.v(a, b, c) : a instanceof Array ? b < a.length ? a[b] : c : Ba(a) ? b < a.length ? a[b] : c : x(Ma, a) ? Na.e(a, b, c) : c
  }else {
    a = c
  }
  return a
}
qc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return rc.call(this, a, b);
    case 3:
      return sc.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
qc.a = rc;
qc.e = sc;
pc = qc;
var tc, uc = m;
function vc(a, b, c) {
  return a != m ? Sa(a, b, c) : wc.a ? wc.a(b, c) : wc.call(m, b, c)
}
function xc(a, b, c, d) {
  for(;;) {
    if(a = uc.e(a, b, c), w(d)) {
      b = M(d), c = bc(d), d = O(O(d))
    }else {
      return a
    }
  }
}
function yc(a, b, c, d) {
  var f = m;
  3 < arguments.length && (f = R(Array.prototype.slice.call(arguments, 3), 0));
  return xc.call(this, a, b, c, f)
}
yc.o = 3;
yc.k = function(a) {
  var b = M(a), a = O(a), c = M(a), a = O(a), d = M(a), a = N(a);
  return xc(b, c, d, a)
};
yc.g = xc;
uc = function(a, b, c, d) {
  switch(arguments.length) {
    case 3:
      return vc.call(this, a, b, c);
    default:
      return yc.g(a, b, c, R(arguments, 3))
  }
  e(Error("Invalid arity: " + arguments.length))
};
uc.o = 3;
uc.k = yc.k;
uc.e = vc;
uc.g = yc.g;
tc = uc;
function zc(a) {
  var b = da(a);
  return b ? b : a ? w(w(m) ? m : a.gc) ? l : a.Md ? n : x(Ca, a) : x(Ca, a)
}
var Cc = function Ac(b, c) {
  var d;
  if(d = zc(b)) {
    d = b ? ((d = b.h & 262144) ? d : b.Ld) || (b.h ? 0 : x(bb, b)) : x(bb, b), d = !d
  }
  if(d) {
    if(h === wa) {
      wa = {};
      wa = function(b, c, d, f) {
        this.m = b;
        this.Nb = c;
        this.Cc = d;
        this.uc = f;
        this.t = 0;
        this.h = 393217
      };
      wa.Ca = l;
      wa.Qa = "cljs.core/t9882";
      wa.Pa = function(b, c) {
        return G(c, "cljs.core/t9882")
      };
      var f = function(b, c) {
        return Bc.a ? Bc.a(b.Nb, c) : Bc.call(m, b.Nb, c)
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
      wa.prototype.call = d;
      wa.prototype.apply = function(b, c) {
        b = this;
        return b.call.apply(b, [b].concat(c.slice()))
      };
      wa.prototype.gc = l;
      wa.prototype.C = q("uc");
      wa.prototype.D = function(b, c) {
        return new wa(this.m, this.Nb, this.Cc, c)
      }
    }
    d = new wa(c, b, Ac, m);
    d = Ac(d, c)
  }else {
    d = cb(b, c)
  }
  return d
};
function Dc(a) {
  var b;
  b = a ? ((b = a.h & 131072) ? b : a.mc) || (a.h ? 0 : x($a, a)) : x($a, a);
  return b ? ab(a) : m
}
var Ec = {}, Fc = 0, K, Gc = m;
function Hc(a) {
  return Gc.a(a, l)
}
function Ic(a, b) {
  var c;
  ((c = t(a)) ? b : c) ? (255 < Fc && (Ec = {}, Fc = 0), c = Ec[a], "number" !== typeof c && (c = ma(a), Ec[a] = c, Fc += 1)) : c = kb(a);
  return c
}
Gc = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Hc.call(this, a);
    case 2:
      return Ic.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Gc.b = Hc;
Gc.a = Ic;
K = Gc;
function Jc(a) {
  if(a) {
    var b = a.h & 16384, a = (b ? b : a.Kd) ? l : a.h ? n : x(Ya, a)
  }else {
    a = x(Ya, a)
  }
  return a
}
function U(a) {
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
  var b = t(a);
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
      c = (c = a.t & 2048) ? c : a.hc
    }
    return c ? a.ic(a, b) : a > b ? 1 : a < b ? -1 : 0
  }
  e(Error("compare on non-nil objects of different types"))
}
var Rc, Sc = m;
function Tc(a, b) {
  var c = T(a), d = T(b);
  return c < d ? -1 : c > d ? 1 : Sc.n(a, b, c, 0)
}
function Uc(a, b, c, d) {
  for(;;) {
    var f = Qc(lc.a(a, d), lc.a(b, d)), g = 0 === f;
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
  var c = L(b);
  return c ? Yc.e ? Yc.e(a, M(c), O(c)) : Yc.call(m, a, M(c), O(c)) : a.A ? a.A() : a.call(m)
}
function Zc(a, b, c) {
  for(c = L(c);;) {
    if(c) {
      b = a.a ? a.a(b, M(c)) : a.call(m, b, M(c)), c = O(c)
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
      return Zc.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Wc.a = Xc;
Wc.e = Zc;
Vc = Wc;
var Yc, $c = m;
function ad(a, b) {
  var c;
  if(c = b) {
    c = (c = b.h & 524288) ? c : b.nc
  }
  return c ? b.xa(b, a) : b instanceof Array ? Lb.a(b, a) : Ba(b) ? Lb.a(b, a) : x(db, b) ? fb.a(b, a) : Vc.a(a, b)
}
function bd(a, b, c) {
  var d;
  if(d = c) {
    d = (d = c.h & 524288) ? d : c.nc
  }
  return d ? c.ya(c, a, b) : c instanceof Array ? Lb.e(c, a, b) : Ba(c) ? Lb.e(c, a, b) : x(db, c) ? fb.e(c, a, b) : Vc.e(a, b, c)
}
$c = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return ad.call(this, a, b);
    case 3:
      return bd.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
$c.a = ad;
$c.e = bd;
Yc = $c;
function cd(a) {
  return 0 <= a ? Math.floor.b ? Math.floor.b(a) : Math.floor.call(m, a) : Math.ceil.b ? Math.ceil.b(a) : Math.ceil.call(m, a)
}
function dd(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24
}
var ed, fd = m;
function hd(a) {
  return a == m ? "" : a.toString()
}
function id(a, b) {
  return function(a, b) {
    for(;;) {
      if(w(b)) {
        var f = a.append(fd.b(M(b))), g = O(b), a = f, b = g
      }else {
        return fd.b(a)
      }
    }
  }.call(m, new va(fd.b(a)), b)
}
function jd(a, b) {
  var c = m;
  1 < arguments.length && (c = R(Array.prototype.slice.call(arguments, 1), 0));
  return id.call(this, a, c)
}
jd.o = 1;
jd.k = function(a) {
  var b = M(a), a = N(a);
  return id(b, a)
};
jd.g = id;
fd = function(a, b) {
  switch(arguments.length) {
    case 0:
      return"";
    case 1:
      return hd.call(this, a);
    default:
      return jd.g(a, R(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
fd.o = 1;
fd.k = jd.k;
fd.A = ba("");
fd.b = hd;
fd.g = jd.g;
ed = fd;
var J, kd = m;
function ld(a) {
  return Pc(a) ? ed.g(":", R([a.substring(2, a.length)], 0)) : a == m ? "" : a.toString()
}
function md(a, b) {
  return function(a, b) {
    for(;;) {
      if(w(b)) {
        var f = a.append(kd.b(M(b))), g = O(b), a = f, b = g
      }else {
        return ed.b(a)
      }
    }
  }.call(m, new va(kd.b(a)), b)
}
function nd(a, b) {
  var c = m;
  1 < arguments.length && (c = R(Array.prototype.slice.call(arguments, 1), 0));
  return md.call(this, a, c)
}
nd.o = 1;
nd.k = function(a) {
  var b = M(a), a = N(a);
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
      return nd.g(a, R(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
kd.o = 1;
kd.k = nd.k;
kd.A = ba("");
kd.b = ld;
kd.g = nd.g;
J = kd;
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
  return Pc(a) ? a : a instanceof xb ? ed.g("\ufdd0", R([":", od.a(a, 2)], 0)) : ed.g("\ufdd0", R([":", a], 0))
}
function td(a, b) {
  return rd.b(ed.g(a, R(["/", b], 0)))
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
function Ub(a, b) {
  var c;
  c = b ? ((c = b.h & 16777216) ? c : b.Id) || (b.h ? 0 : x(nb, b)) : x(nb, b);
  if(c) {
    a: {
      c = L(a);
      for(var d = L(b);;) {
        if(c == m) {
          c = d == m;
          break a
        }
        if(d != m && Q.a(M(c), M(d))) {
          c = O(c), d = O(d)
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
function yb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2)
}
function Sb(a) {
  return Yc.e(function(a, c) {
    return yb(a, K.a(c, n))
  }, K.a(M(a), n), O(a))
}
function ud(a) {
  for(var b = 0, a = L(a);;) {
    if(a) {
      var c = M(a), b = (b + (K.b(vd.b ? vd.b(c) : vd.call(m, c)) ^ K.b(wd.b ? wd.b(c) : wd.call(m, c)))) % 4503599627370496, a = O(a)
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
  this.t = 0;
  this.h = 65413358
}
r = xd.prototype;
r.J = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Sb(a)
};
r.fa = function() {
  return 1 === this.count ? m : this.ia
};
r.I = function(a, b) {
  return new xd(this.m, b, a, this.count + 1, m)
};
r.toString = function() {
  return wb(this)
};
r.w = aa();
r.z = q("count");
r.O = q("Ra");
r.R = function() {
  return 1 === this.count ? Bb : this.ia
};
r.G = function(a, b) {
  return Ub(a, b)
};
r.D = function(a, b) {
  return new xd(b, this.Ra, this.ia, this.count, this.l)
};
r.C = q("m");
function yd(a) {
  this.m = a;
  this.t = 0;
  this.h = 65413326
}
r = yd.prototype;
r.J = ba(0);
r.fa = ba(m);
r.I = function(a, b) {
  return new xd(this.m, b, m, 1, m)
};
r.toString = function() {
  return wb(this)
};
r.w = ba(m);
r.z = ba(0);
r.O = ba(m);
r.R = function() {
  return Bb
};
r.G = function(a, b) {
  return Ub(a, b)
};
r.D = function(a, b) {
  return new yd(b)
};
r.C = q("m");
var Bb = new yd(m), Tb;
function zd(a) {
  var b;
  if(a instanceof Ab) {
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
  for(var a = b.length, c = Bb;;) {
    if(0 < a) {
      var d = a - 1, c = c.I(c, b[a - 1]), a = d
    }else {
      return c
    }
  }
}
function Ad(a) {
  var b = m;
  0 < arguments.length && (b = R(Array.prototype.slice.call(arguments, 0), 0));
  return zd.call(this, b)
}
Ad.o = 0;
Ad.k = function(a) {
  a = L(a);
  return zd(a)
};
Ad.g = zd;
Tb = Ad;
function Bd(a, b, c, d) {
  this.m = a;
  this.Ra = b;
  this.ia = c;
  this.l = d;
  this.t = 0;
  this.h = 65405164
}
r = Bd.prototype;
r.J = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Sb(a)
};
r.fa = function() {
  return this.ia == m ? m : mb(this.ia)
};
r.I = function(a, b) {
  return new Bd(m, b, a, this.l)
};
r.toString = function() {
  return wb(this)
};
r.w = aa();
r.O = q("Ra");
r.R = function() {
  return this.ia == m ? Bb : this.ia
};
r.G = function(a, b) {
  return Ub(a, b)
};
r.D = function(a, b) {
  return new Bd(b, this.Ra, this.ia, this.l)
};
r.C = q("m");
function S(a, b) {
  var c = b == m;
  if(!c && (c = b)) {
    c = (c = b.h & 64) ? c : b.zb
  }
  return c ? new Bd(m, a, b, m) : new Bd(m, a, L(b), m)
}
Da.string = l;
Ea.string = function(a) {
  return a.length
};
kb.string = function(a) {
  return ma(a)
};
function V(a) {
  this.Jb = a;
  this.t = 0;
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
        d = f == m ? Na.e(b, d.Jb, m) : f[d.Jb]
      }
      return d;
    case 3:
      return b == m ? c : Na.e(b, this.Jb, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
V.prototype.call = Cd;
V.prototype.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
var Dd = m, Dd = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return pc.a(b, this.toString());
    case 3:
      return pc.e(b, this.toString(), c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
String.prototype.call = Dd;
String.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
String.prototype.apply = function(a, b) {
  return 2 > b.length ? pc.a(b[0], a) : pc.e(b[0], a, b[1])
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
  this.t = 0;
  this.h = 31850700
}
r = Fd.prototype;
r.J = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Sb(a)
};
r.fa = function(a) {
  return mb(a.R(a))
};
r.I = function(a, b) {
  return S(b, a)
};
r.toString = function() {
  return wb(this)
};
r.w = function(a) {
  return L(Ed(a))
};
r.O = function(a) {
  return M(Ed(a))
};
r.R = function(a) {
  return N(Ed(a))
};
r.G = function(a, b) {
  return Ub(a, b)
};
r.D = function(a, b) {
  return new Fd(b, this.Ob, this.x, this.l)
};
r.C = q("m");
function Gd(a, b) {
  this.ib = a;
  this.end = b;
  this.t = 0;
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
  this.t = 0;
  this.h = 524306
}
r = Hd.prototype;
r.xa = function(a, b) {
  return Lb.n(this.c, b, this.c[this.H], this.H + 1)
};
r.ya = function(a, b, c) {
  return Lb.n(this.c, b, c, this.H)
};
r.Pb = function() {
  this.H === this.end && e(Error("-drop-first of empty chunk"));
  return new Hd(this.c, this.H + 1, this.end)
};
r.q = function(a, b) {
  return this.c[this.H + b]
};
r.N = function(a, b, c) {
  return((a = 0 <= b) ? b < this.end - this.H : a) ? this.c[this.H + b] : c
};
r.z = function() {
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
  this.t = 1536
}
r = Kc.prototype;
r.J = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Sb(a)
};
r.I = function(a, b) {
  return S(b, a)
};
r.toString = function() {
  return wb(this)
};
r.w = aa();
r.O = function() {
  return A.a(this.aa, 0)
};
r.R = function() {
  return 1 < Ea(this.aa) ? new Kc(ub(this.aa), this.oa, this.m, m) : this.oa == m ? Bb : this.oa
};
r.Qb = function() {
  return this.oa == m ? m : this.oa
};
r.G = function(a, b) {
  return Ub(a, b)
};
r.D = function(a, b) {
  return new Kc(this.aa, this.oa, b, this.l)
};
r.C = q("m");
r.kb = q("aa");
r.Ya = function() {
  return this.oa == m ? Bb : this.oa
};
function Nd(a, b) {
  return 0 === Ea(a) ? b : new Kc(a, b, m, m)
}
function Od(a) {
  for(var b = [];;) {
    if(L(a)) {
      b.push(M(a)), a = O(a)
    }else {
      return b
    }
  }
}
function Pd(a, b) {
  if(Qb(a)) {
    return T(a)
  }
  for(var c = a, d = b, f = 0;;) {
    var g;
    g = (g = 0 < d) ? L(c) : g;
    if(w(g)) {
      c = O(c), d -= 1, f += 1
    }else {
      return f
    }
  }
}
var Rd = function Qd(b) {
  return b == m ? m : O(b) == m ? L(M(b)) : S(M(b), Qd(O(b)))
}, Sd, Td = m;
function Ud(a, b, c) {
  return S(a, S(b, c))
}
function Vd(a, b, c, d) {
  return S(a, S(b, S(c, d)))
}
function Wd(a, b, c, d, f) {
  return S(a, S(b, S(c, S(d, Rd(f)))))
}
function Xd(a, b, c, d, f) {
  var g = m;
  4 < arguments.length && (g = R(Array.prototype.slice.call(arguments, 4), 0));
  return Wd.call(this, a, b, c, d, g)
}
Xd.o = 4;
Xd.k = function(a) {
  var b = M(a), a = O(a), c = M(a), a = O(a), d = M(a), a = O(a), f = M(a), a = N(a);
  return Wd(b, c, d, f, a)
};
Xd.g = Wd;
Td = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 1:
      return L(a);
    case 2:
      return S(a, b);
    case 3:
      return Ud.call(this, a, b, c);
    case 4:
      return Vd.call(this, a, b, c, d);
    default:
      return Xd.g(a, b, c, d, R(arguments, 4))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Td.o = 4;
Td.k = Xd.k;
Td.b = function(a) {
  return L(a)
};
Td.a = function(a, b) {
  return S(a, b)
};
Td.e = Ud;
Td.n = Vd;
Td.g = Xd.g;
Sd = Td;
function Yd(a, b, c) {
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
  var j = E(k), p = F(k);
  if(7 === b) {
    return a.wa ? a.wa(c, d, f, g, i, a, j) : a.wa ? a.wa(c, d, f, g, i, a, j) : a.call(m, c, d, f, g, i, a, j)
  }
  var k = E(p), v = F(p);
  if(8 === b) {
    return a.xb ? a.xb(c, d, f, g, i, a, j, k) : a.xb ? a.xb(c, d, f, g, i, a, j, k) : a.call(m, c, d, f, g, i, a, j, k)
  }
  var p = E(v), u = F(v);
  if(9 === b) {
    return a.yb ? a.yb(c, d, f, g, i, a, j, k, p) : a.yb ? a.yb(c, d, f, g, i, a, j, k, p) : a.call(m, c, d, f, g, i, a, j, k, p)
  }
  var v = E(u), y = F(u);
  if(10 === b) {
    return a.mb ? a.mb(c, d, f, g, i, a, j, k, p, v) : a.mb ? a.mb(c, d, f, g, i, a, j, k, p, v) : a.call(m, c, d, f, g, i, a, j, k, p, v)
  }
  var u = E(y), D = F(y);
  if(11 === b) {
    return a.nb ? a.nb(c, d, f, g, i, a, j, k, p, v, u) : a.nb ? a.nb(c, d, f, g, i, a, j, k, p, v, u) : a.call(m, c, d, f, g, i, a, j, k, p, v, u)
  }
  var y = E(D), B = F(D);
  if(12 === b) {
    return a.ob ? a.ob(c, d, f, g, i, a, j, k, p, v, u, y) : a.ob ? a.ob(c, d, f, g, i, a, j, k, p, v, u, y) : a.call(m, c, d, f, g, i, a, j, k, p, v, u, y)
  }
  var D = E(B), W = F(B);
  if(13 === b) {
    return a.pb ? a.pb(c, d, f, g, i, a, j, k, p, v, u, y, D) : a.pb ? a.pb(c, d, f, g, i, a, j, k, p, v, u, y, D) : a.call(m, c, d, f, g, i, a, j, k, p, v, u, y, D)
  }
  var B = E(W), C = F(W);
  if(14 === b) {
    return a.qb ? a.qb(c, d, f, g, i, a, j, k, p, v, u, y, D, B) : a.qb ? a.qb(c, d, f, g, i, a, j, k, p, v, u, y, D, B) : a.call(m, c, d, f, g, i, a, j, k, p, v, u, y, D, B)
  }
  var W = E(C), P = F(C);
  if(15 === b) {
    return a.rb ? a.rb(c, d, f, g, i, a, j, k, p, v, u, y, D, B, W) : a.rb ? a.rb(c, d, f, g, i, a, j, k, p, v, u, y, D, B, W) : a.call(m, c, d, f, g, i, a, j, k, p, v, u, y, D, B, W)
  }
  var C = E(P), Fa = F(P);
  if(16 === b) {
    return a.sb ? a.sb(c, d, f, g, i, a, j, k, p, v, u, y, D, B, W, C) : a.sb ? a.sb(c, d, f, g, i, a, j, k, p, v, u, y, D, B, W, C) : a.call(m, c, d, f, g, i, a, j, k, p, v, u, y, D, B, W, C)
  }
  var P = E(Fa), eb = F(Fa);
  if(17 === b) {
    return a.tb ? a.tb(c, d, f, g, i, a, j, k, p, v, u, y, D, B, W, C, P) : a.tb ? a.tb(c, d, f, g, i, a, j, k, p, v, u, y, D, B, W, C, P) : a.call(m, c, d, f, g, i, a, j, k, p, v, u, y, D, B, W, C, P)
  }
  var Fa = E(eb), gd = F(eb);
  if(18 === b) {
    return a.ub ? a.ub(c, d, f, g, i, a, j, k, p, v, u, y, D, B, W, C, P, Fa) : a.ub ? a.ub(c, d, f, g, i, a, j, k, p, v, u, y, D, B, W, C, P, Fa) : a.call(m, c, d, f, g, i, a, j, k, p, v, u, y, D, B, W, C, P, Fa)
  }
  eb = E(gd);
  gd = F(gd);
  if(19 === b) {
    return a.vb ? a.vb(c, d, f, g, i, a, j, k, p, v, u, y, D, B, W, C, P, Fa, eb) : a.vb ? a.vb(c, d, f, g, i, a, j, k, p, v, u, y, D, B, W, C, P, Fa, eb) : a.call(m, c, d, f, g, i, a, j, k, p, v, u, y, D, B, W, C, P, Fa, eb)
  }
  var cf = E(gd);
  F(gd);
  if(20 === b) {
    return a.wb ? a.wb(c, d, f, g, i, a, j, k, p, v, u, y, D, B, W, C, P, Fa, eb, cf) : a.wb ? a.wb(c, d, f, g, i, a, j, k, p, v, u, y, D, B, W, C, P, Fa, eb, cf) : a.call(m, c, d, f, g, i, a, j, k, p, v, u, y, D, B, W, C, P, Fa, eb, cf)
  }
  e(Error("Only up to 20 arguments supported on functions"))
}
var Bc, Zd = m;
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
  b = S(b, S(c, S(d, S(f, Rd(g)))));
  c = a.o;
  return a.k ? (d = Pd(b, c + 1), d <= c ? Yd(a, d, b) : a.k(b)) : a.apply(a, Od(b))
}
function ee(a, b, c, d, f, g) {
  var i = m;
  5 < arguments.length && (i = R(Array.prototype.slice.call(arguments, 5), 0));
  return de.call(this, a, b, c, d, f, i)
}
ee.o = 5;
ee.k = function(a) {
  var b = M(a), a = O(a), c = M(a), a = O(a), d = M(a), a = O(a), f = M(a), a = O(a), g = M(a), a = N(a);
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
      return ee.g(a, b, c, d, f, R(arguments, 5))
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
Bc = Zd;
var fe, ge = m;
function he(a, b) {
  return!Q.a(a, b)
}
function ie(a, b, c) {
  return Aa(Bc.n(Q, a, b, c))
}
function je(a, b, c) {
  var d = m;
  2 < arguments.length && (d = R(Array.prototype.slice.call(arguments, 2), 0));
  return ie.call(this, a, b, d)
}
je.o = 2;
je.k = function(a) {
  var b = M(a), a = O(a), c = M(a), a = N(a);
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
      return je.g(a, b, R(arguments, 2))
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
    if(L(b) == m) {
      return l
    }
    if(w(a.b ? a.b(M(b)) : a.call(m, M(b)))) {
      var c = a, d = O(b), a = c, b = d
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
    2 < arguments.length && (i = R(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, c, i)
  }
  function b(a, b, c) {
    return Aa(Bc.n(za, a, b, c))
  }
  var c = m;
  a.o = 2;
  a.k = function(a) {
    var c = M(a), a = O(a), g = M(a), a = N(a);
    return b(c, g, a)
  };
  a.g = b;
  c = function(b, c, g) {
    switch(arguments.length) {
      case 0:
        return Aa(za.A ? za.A() : za.call(m));
      case 1:
        return Aa(za.b ? za.b(b) : za.call(m, b));
      case 2:
        return Aa(za.a ? za.a(b, c) : za.call(m, b));
      default:
        return a.g(b, c, R(arguments, 2))
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
    var c = L(b);
    if(c) {
      if(U(c)) {
        for(var d = H(c), f = T(d), g = new Gd(Array(f), 0), i = 0;;) {
          if(i < f) {
            var j = a.b ? a.b(A.a(d, i)) : a.call(m, A.a(d, i));
            g.add(j);
            i += 1
          }else {
            break
          }
        }
        return Nd(g.aa(), oe.a(a, I(c)))
      }
      return S(a.b ? a.b(M(c)) : a.call(m, M(c)), oe.a(a, N(c)))
    }
    return m
  }, m)
}
function qe(a, b, c) {
  return new Fd(m, n, function() {
    var d = L(b), f = L(c);
    return(d ? f : d) ? S(a.a ? a.a(M(d), M(f)) : a.call(m, M(d), M(f)), oe.e(a, N(d), N(f))) : m
  }, m)
}
function re(a, b, c, d) {
  return new Fd(m, n, function() {
    var f = L(b), g = L(c), i = L(d);
    return(f ? g ? i : g : f) ? S(a.e ? a.e(M(f), M(g), M(i)) : a.call(m, M(f), M(g), M(i)), oe.n(a, N(f), N(g), N(i))) : m
  }, m)
}
function se(a, b, c, d, f) {
  return oe.a(function(b) {
    return Bc.a(a, b)
  }, function i(a) {
    return new Fd(m, n, function() {
      var b = oe.a(L, a);
      return ke(le, b) ? S(oe.a(M, b), i(oe.a(N, b))) : m
    }, m)
  }(cc.g(f, d, R([c, b], 0))))
}
function te(a, b, c, d, f) {
  var g = m;
  4 < arguments.length && (g = R(Array.prototype.slice.call(arguments, 4), 0));
  return se.call(this, a, b, c, d, g)
}
te.o = 4;
te.k = function(a) {
  var b = M(a), a = O(a), c = M(a), a = O(a), d = M(a), a = O(a), f = M(a), a = N(a);
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
      return te.g(a, b, c, d, R(arguments, 4))
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
      var d = L(c);
      return d ? S(M(d), ue(b - 1, N(d))) : m
    }
    return m
  }, m)
}, we, xe = m;
function ye(a) {
  return new Fd(m, n, function() {
    return S(a.A ? a.A() : a.call(m), xe.b(a))
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
      var g = L(a);
      return g ? S(M(g), c(N(g), f)) : L(f) ? c(M(f), N(f)) : m
    }, m)
  }(m, a)
}
var Be, Ce = m;
function De(a, b) {
  return Ae(ne.a(a, b))
}
function Ee(a, b, c) {
  return Ae(Bc.n(ne, a, b, c))
}
function Fe(a, b, c) {
  var d = m;
  2 < arguments.length && (d = R(Array.prototype.slice.call(arguments, 2), 0));
  return Ee.call(this, a, b, d)
}
Fe.o = 2;
Fe.k = function(a) {
  var b = M(a), a = O(a), c = M(a), a = N(a);
  return Ee(b, c, a)
};
Fe.g = Ee;
Ce = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return De.call(this, a, b);
    default:
      return Fe.g(a, b, R(arguments, 2))
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
    var d = L(c);
    if(d) {
      if(U(d)) {
        for(var f = H(d), g = T(f), i = new Gd(Array(g), 0), j = 0;;) {
          if(j < g) {
            if(w(b.b ? b.b(A.a(f, j)) : b.call(m, A.a(f, j)))) {
              var k = A.a(f, j);
              i.add(k)
            }
            j += 1
          }else {
            break
          }
        }
        return Nd(i.aa(), Ge(b, I(d)))
      }
      f = M(d);
      d = N(d);
      return w(b.b ? b.b(f) : b.call(m, f)) ? S(f, Ge(b, d)) : Ge(b, d)
    }
    return m
  }, m)
};
function Ie(a, b) {
  var c;
  if(a != m) {
    if(c = a) {
      c = (c = a.t & 4) ? c : a.Fd
    }
    c ? (c = Yc.e(rb, qb(a), b), c = sb(c)) : c = Yc.e(Ga, a, b)
  }else {
    c = Yc.e(cc, Bb, b)
  }
  return c
}
function Je(a, b) {
  this.r = a;
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
  var g = new Je(d.r, d.c.slice()), i = b.j - 1 >>> c & 31;
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
    e(Error([J("No item "), J(b), J(" in vector of length "), J(a.j)].join("")))
  }
}
var Qe = function Pe(b, c, d, f, g) {
  var i = new Je(d.r, d.c.slice());
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
  this.t = 4;
  this.h = 167668511
}
r = Re.prototype;
r.va = function() {
  return new Se(this.j, this.shift, Te.b ? Te.b(this.root) : Te.call(m, this.root), Ue.b ? Ue.b(this.L) : Ue.call(m, this.L))
};
r.J = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Sb(a)
};
r.B = function(a, b) {
  return a.N(a, b, m)
};
r.v = function(a, b, c) {
  return a.N(a, b, c)
};
r.ja = function(a, b, c) {
  var d = 0 <= b;
  if(d ? b < this.j : d) {
    return Ke(a) <= b ? (a = this.L.slice(), a[b & 31] = c, new Re(this.m, this.j, this.shift, this.root, a, m)) : new Re(this.m, this.j, this.shift, Qe(a, this.shift, this.root, b, c), this.L, m)
  }
  if(b === this.j) {
    return a.I(a, c)
  }
  e(Error([J("Index "), J(b), J(" out of bounds  [0,"), J(this.j), J("]")].join("")))
};
var Ve = m, Ve = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.B(this, b);
    case 3:
      return this.v(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = Re.prototype;
r.call = Ve;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.I = function(a, b) {
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
r.Rb = function(a) {
  return a.q(a, 0)
};
r.Sb = function(a) {
  return a.q(a, 1)
};
r.toString = function() {
  return wb(this)
};
r.xa = function(a, b) {
  return Gb.a(a, b)
};
r.ya = function(a, b, c) {
  return Gb.e(a, b, c)
};
r.w = function(a) {
  return 0 === this.j ? m : 32 > this.j ? R.b(this.L) : We.e ? We.e(a, 0, 0) : We.call(m, a, 0, 0)
};
r.z = q("j");
r.G = function(a, b) {
  return Ub(a, b)
};
r.D = function(a, b) {
  return new Re(b, this.j, this.shift, this.root, this.L, this.l)
};
r.C = q("m");
r.q = function(a, b) {
  return Oe(a, b)[b & 31]
};
r.N = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.j : d) ? a.q(a, b) : c
};
var Xe = new Je(m, Array(32)), Ye = new Re(m, 0, 5, Xe, [], 0);
function Ze(a) {
  var b = a.length;
  if(32 > b) {
    return new Re(m, b, 5, Xe, a, m)
  }
  for(var c = a.slice(0, 32), d = 32, f = qb(new Re(m, 32, 5, Xe, c, m));;) {
    if(d < b) {
      c = d + 1, f = rb(f, a[d]), d = c
    }else {
      return sb(f)
    }
  }
}
function $e(a) {
  return sb(Yc.e(rb, qb(Ye), a))
}
function af(a) {
  var b = m;
  0 < arguments.length && (b = R(Array.prototype.slice.call(arguments, 0), 0));
  return $e(b)
}
af.o = 0;
af.k = function(a) {
  a = L(a);
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
  this.t = 1536
}
r = Lc.prototype;
r.J = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Sb(a)
};
r.fa = function(a) {
  return this.H + 1 < this.T.length ? (a = We.n ? We.n(this.V, this.T, this.p, this.H + 1) : We.call(m, this.V, this.T, this.p, this.H + 1), a == m ? m : a) : a.Qb(a)
};
r.I = function(a, b) {
  return S(b, a)
};
r.toString = function() {
  return wb(this)
};
r.w = aa();
r.O = function() {
  return this.T[this.H]
};
r.R = function(a) {
  return this.H + 1 < this.T.length ? (a = We.n ? We.n(this.V, this.T, this.p, this.H + 1) : We.call(m, this.V, this.T, this.p, this.H + 1), a == m ? Bb : a) : a.Ya(a)
};
r.Qb = function() {
  var a = this.T.length, a = this.p + a < Ea(this.V) ? We.e ? We.e(this.V, this.p + a, 0) : We.call(m, this.V, this.p + a, 0) : m;
  return a == m ? m : a
};
r.G = function(a, b) {
  return Ub(a, b)
};
r.D = function(a, b) {
  return We.ba ? We.ba(this.V, this.T, this.p, this.H, b) : We.call(m, this.V, this.T, this.p, this.H, b)
};
r.kb = function() {
  return Id.a(this.T, this.H)
};
r.Ya = function() {
  var a = this.T.length, a = this.p + a < Ea(this.V) ? We.e ? We.e(this.V, this.p + a, 0) : We.call(m, this.V, this.p + a, 0) : m;
  return a == m ? Bb : a
};
var We, bf = m;
function df(a, b, c) {
  return new Lc(a, Oe(a, b), b, c, m, m)
}
function ef(a, b, c, d) {
  return new Lc(a, b, c, d, m, m)
}
function ff(a, b, c, d, f) {
  return new Lc(a, b, c, d, f, m)
}
bf = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 3:
      return df.call(this, a, b, c);
    case 4:
      return ef.call(this, a, b, c, d);
    case 5:
      return ff.call(this, a, b, c, d, f)
  }
  e(Error("Invalid arity: " + arguments.length))
};
bf.e = df;
bf.n = ef;
bf.ba = ff;
We = bf;
function Te(a) {
  return new Je({}, a.c.slice())
}
function Ue(a) {
  var b = Array(32);
  Mc(a, 0, b, 0, a.length);
  return b
}
var hf = function gf(b, c, d, f) {
  var d = b.root.r === d.r ? d : new Je(b.root.r, d.c.slice()), g = b.j - 1 >>> c & 31;
  if(5 === c) {
    b = f
  }else {
    var i = d.c[g], b = i != m ? gf(b, c - 5, i, f) : Le(b.root.r, c - 5, f)
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
  this.t = 88
}
var jf = m, jf = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.B(this, b);
    case 3:
      return this.v(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = Se.prototype;
r.call = jf;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.B = function(a, b) {
  return a.N(a, b, m)
};
r.v = function(a, b, c) {
  return a.N(a, b, c)
};
r.q = function(a, b) {
  if(this.root.r) {
    return Oe(a, b)[b & 31]
  }
  e(Error("nth after persistent!"))
};
r.N = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.j : d) ? a.q(a, b) : c
};
r.z = function() {
  if(this.root.r) {
    return this.j
  }
  e(Error("count after persistent!"))
};
r.Aa = function(a, b, c) {
  var d;
  a: {
    if(a.root.r) {
      var f = 0 <= b;
      if(f ? b < a.j : f) {
        Ke(a) <= b ? a.L[b & 31] = c : (d = function i(d, f) {
          var p = a.root.r === f.r ? f : new Je(a.root.r, f.c.slice());
          if(0 === d) {
            p.c[b & 31] = c
          }else {
            var v = b >>> d & 31, u = i(d - 5, p.c[v]);
            p.c[v] = u
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
      e(Error([J("Index "), J(b), J(" out of bounds for TransientVector of length"), J(a.j)].join("")))
    }
    e(Error("assoc! after persistent!"))
  }
  return d
};
r.pa = function(a, b) {
  if(this.root.r) {
    if(32 > this.j - Ke(a)) {
      this.L[this.j & 31] = b
    }else {
      var c = new Je(this.root.r, this.L), d = Array(32);
      d[0] = b;
      this.L = d;
      if(this.j >>> 5 > 1 << this.shift) {
        var d = Array(32), f = this.shift + 5;
        d[0] = this.root;
        d[1] = Le(this.root.r, this.shift, c);
        this.root = new Je(this.root.r, d);
        this.shift = f
      }else {
        this.root = hf(a, this.shift, this.root, c)
      }
    }
    this.j += 1;
    return a
  }
  e(Error("conj! after persistent!"))
};
r.Ba = function(a) {
  if(this.root.r) {
    this.root.r = m;
    var a = this.j - Ke(a), b = Array(a);
    Mc(this.L, 0, b, 0, a);
    return new Re(m, this.j, this.shift, this.root, b, m)
  }
  e(Error("persistent! called twice"))
};
function kf() {
  this.t = 0;
  this.h = 2097152
}
kf.prototype.G = ba(n);
var lf = new kf;
function mf(a, b) {
  var c;
  c = b == m ? 0 : b ? ((c = b.h & 1024) ? c : b.Gd) || (b.h ? 0 : x(Ta, b)) : x(Ta, b);
  c = c ? T(a) === T(b) ? ke(le, ne.a(function(a) {
    return Q.a(pc.e(b, M(a), lf), bc(a))
  }, a)) : m : m;
  return w(c) ? l : n
}
function nf(a, b) {
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
function of(a, b) {
  var c = K.b(a), d = K.b(b);
  return c < d ? -1 : c > d ? 1 : 0
}
function pf(a, b, c) {
  for(var d = a.keys, f = d.length, g = a.ta, a = Dc(a), i = 0, j = qb(qf);;) {
    if(i < f) {
      var k = d[i], i = i + 1, j = tb(j, k, g[k])
    }else {
      return d = Cc, b = tb(j, b, c), b = sb(b), d(b, a)
    }
  }
}
function rf(a, b) {
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
function sf(a, b, c, d, f) {
  this.m = a;
  this.keys = b;
  this.ta = c;
  this.fb = d;
  this.l = f;
  this.t = 4;
  this.h = 16123663
}
r = sf.prototype;
r.va = function(a) {
  a = Ie(wc.A ? wc.A() : wc.call(m), a);
  return qb(a)
};
r.J = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = ud(a)
};
r.B = function(a, b) {
  return a.v(a, b, m)
};
r.v = function(a, b, c) {
  return((a = t(b)) ? nf(b, this.keys) != m : a) ? this.ta[b] : c
};
r.ja = function(a, b, c) {
  if(t(b)) {
    var d = this.fb > tf;
    if(d ? d : this.keys.length >= tf) {
      return pf(a, b, c)
    }
    if(nf(b, this.keys) != m) {
      return a = rf(this.ta, this.keys), a[b] = c, new sf(this.m, this.keys, a, this.fb + 1, m)
    }
    a = rf(this.ta, this.keys);
    d = this.keys.slice();
    a[b] = c;
    d.push(b);
    return new sf(this.m, d, a, this.fb + 1, m)
  }
  return pf(a, b, c)
};
r.Xa = function(a, b) {
  var c = t(b);
  return(c ? nf(b, this.keys) != m : c) ? l : n
};
var uf = m, uf = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.B(this, b);
    case 3:
      return this.v(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = sf.prototype;
r.call = uf;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.I = function(a, b) {
  return Jc(b) ? a.ja(a, A.a(b, 0), A.a(b, 1)) : Yc.e(Ga, a, b)
};
r.toString = function() {
  return wb(this)
};
r.w = function() {
  var a = this;
  return 0 < a.keys.length ? ne.a(function(b) {
    return af.g(R([b, a.ta[b]], 0))
  }, a.keys.sort(of)) : m
};
r.z = function() {
  return this.keys.length
};
r.G = function(a, b) {
  return mf(a, b)
};
r.D = function(a, b) {
  return new sf(b, this.keys, this.ta, this.fb, this.l)
};
r.C = q("m");
var vf = new sf(m, [], {}, 0, 0), tf = 8;
function wf(a, b) {
  var c = a.c, d = t(b);
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
    if(b instanceof xb) {
      a: {
        for(var d = c.length, f = b.sa, g = 0;;) {
          if(d <= g) {
            c = -1;
            break a
          }
          var i = c[g], j = i instanceof xb;
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
function xf(a, b, c, d) {
  this.m = a;
  this.j = b;
  this.c = c;
  this.l = d;
  this.t = 4;
  this.h = 16123663
}
r = xf.prototype;
r.va = function() {
  return new yf({}, this.c.length, this.c.slice())
};
r.J = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = ud(a)
};
r.B = function(a, b) {
  return a.v(a, b, m)
};
r.v = function(a, b, c) {
  a = wf(a, b);
  return-1 === a ? c : this.c[a + 1]
};
r.ja = function(a, b, c) {
  var d = wf(a, b);
  if(-1 === d) {
    if(this.j < zf) {
      for(var d = a.c, a = d.length, f = Array(a + 2), g = 0;;) {
        if(g < a) {
          f[g] = d[g], g += 1
        }else {
          break
        }
      }
      f[a] = b;
      f[a + 1] = c;
      return new xf(this.m, this.j + 1, f, m)
    }
    return cb(Sa(Ie(qf, a), b, c), this.m)
  }
  if(c === this.c[d + 1]) {
    return a
  }
  b = this.c.slice();
  b[d + 1] = c;
  return new xf(this.m, this.j, b, m)
};
r.Xa = function(a, b) {
  return-1 !== wf(a, b)
};
var Af = m, Af = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.B(this, b);
    case 3:
      return this.v(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = xf.prototype;
r.call = Af;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.I = function(a, b) {
  return Jc(b) ? a.ja(a, A.a(b, 0), A.a(b, 1)) : Yc.e(Ga, a, b)
};
r.toString = function() {
  return wb(this)
};
r.w = function() {
  var a = this, b;
  if(0 < a.j) {
    var c = a.c.length;
    b = function f(b) {
      return new Fd(m, n, function() {
        return b < c ? S(Ze([a.c[b], a.c[b + 1]]), f(b + 2)) : m
      }, m)
    }(0)
  }else {
    b = m
  }
  return b
};
r.z = q("j");
r.G = function(a, b) {
  return mf(a, b)
};
r.D = function(a, b) {
  return new xf(b, this.j, this.c, this.l)
};
r.C = q("m");
var Bf = new xf(m, 0, [], m), zf = 8;
function ya(a, b) {
  var c = b ? a : a.slice();
  return new xf(m, c.length / 2, c, m)
}
function yf(a, b, c) {
  this.Da = a;
  this.ha = b;
  this.c = c;
  this.t = 56;
  this.h = 258
}
r = yf.prototype;
r.Aa = function(a, b, c) {
  if(w(this.Da)) {
    var d = wf(a, b);
    if(-1 === d) {
      if(this.ha + 2 <= 2 * zf) {
        return this.ha += 2, this.c.push(b), this.c.push(c), a
      }
      a = Cf.a ? Cf.a(this.ha, this.c) : Cf.call(m, this.ha, this.c);
      return tb(a, b, c)
    }
    c !== this.c[d + 1] && (this.c[d + 1] = c);
    return a
  }
  e(Error("assoc! after persistent!"))
};
r.pa = function(a, b) {
  if(w(this.Da)) {
    var c;
    c = b ? ((c = b.h & 2048) ? c : b.lc) || (b.h ? 0 : x(Ua, b)) : x(Ua, b);
    if(c) {
      return a.Aa(a, vd.b ? vd.b(b) : vd.call(m, b), wd.b ? wd.b(b) : wd.call(m, b))
    }
    c = L(b);
    for(var d = a;;) {
      var f = M(c);
      if(w(f)) {
        c = O(c), d = d.Aa(d, vd.b ? vd.b(f) : vd.call(m, f), wd.b ? wd.b(f) : wd.call(m, f))
      }else {
        return d
      }
    }
  }else {
    e(Error("conj! after persistent!"))
  }
};
r.Ba = function() {
  if(w(this.Da)) {
    return this.Da = n, new xf(m, cd((this.ha - this.ha % 2) / 2), this.c, m)
  }
  e(Error("persistent! called twice"))
};
r.B = function(a, b) {
  return a.v(a, b, m)
};
r.v = function(a, b, c) {
  if(w(this.Da)) {
    return a = wf(a, b), -1 === a ? c : this.c[a + 1]
  }
  e(Error("lookup after persistent!"))
};
r.z = function() {
  if(w(this.Da)) {
    return cd((this.ha - this.ha % 2) / 2)
  }
  e(Error("count after persistent!"))
};
function Cf(a, b) {
  for(var c = qb(vf), d = 0;;) {
    if(d < a) {
      c = tb(c, b[d], b[d + 1]), d += 2
    }else {
      return c
    }
  }
}
function Df() {
  this.ca = n
}
function Ef(a, b) {
  return t(a) ? a === b : Q.a(a, b)
}
var Ff, Gf = m;
function Hf(a, b, c) {
  a = a.slice();
  a[b] = c;
  return a
}
function If(a, b, c, d, f) {
  a = a.slice();
  a[b] = c;
  a[d] = f;
  return a
}
Gf = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 3:
      return Hf.call(this, a, b, c);
    case 5:
      return If.call(this, a, b, c, d, f)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Gf.e = Hf;
Gf.ba = If;
Ff = Gf;
var Jf, Kf = m;
function Lf(a, b, c, d) {
  a = a.Ga(b);
  a.c[c] = d;
  return a
}
function Mf(a, b, c, d, f, g) {
  a = a.Ga(b);
  a.c[c] = d;
  a.c[f] = g;
  return a
}
Kf = function(a, b, c, d, f, g) {
  switch(arguments.length) {
    case 4:
      return Lf.call(this, a, b, c, d);
    case 6:
      return Mf.call(this, a, b, c, d, f, g)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Kf.n = Lf;
Kf.ea = Mf;
Jf = Kf;
function Nf(a, b, c) {
  this.r = a;
  this.F = b;
  this.c = c
}
r = Nf.prototype;
r.Y = function(a, b, c, d, f, g) {
  var i = 1 << (c >>> b & 31), j = dd(this.F & i - 1);
  if(0 === (this.F & i)) {
    var k = dd(this.F);
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
      j[c >>> b & 31] = Of.Y(a, b + 5, c, d, f, g);
      for(f = d = 0;;) {
        if(32 > d) {
          0 !== (this.F >>> d & 1) && (j[d] = this.c[f] != m ? Of.Y(a, b + 5, K.b(this.c[f]), this.c[f], this.c[f + 1], g) : this.c[f + 1], f += 2), d += 1
        }else {
          break
        }
      }
      return new Pf(a, k + 1, j)
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
    return k = i.Y(a, b + 5, c, d, f, g), k === i ? this : Jf.n(this, a, 2 * j + 1, k)
  }
  if(Ef(d, k)) {
    return f === i ? this : Jf.n(this, a, 2 * j + 1, f)
  }
  g.ca = l;
  return Jf.ea(this, a, 2 * j, m, 2 * j + 1, Qf.wa ? Qf.wa(a, b + 5, k, i, c, d, f) : Qf.call(m, a, b + 5, k, i, c, d, f))
};
r.Ta = function() {
  return Rf.b ? Rf.b(this.c) : Rf.call(m, this.c)
};
r.Ga = function(a) {
  if(a === this.r) {
    return this
  }
  var b = dd(this.F), c = Array(0 > b ? 4 : 2 * (b + 1));
  Mc(this.c, 0, c, 0, 2 * b);
  return new Nf(a, this.F, c)
};
r.X = function(a, b, c, d, f) {
  var g = 1 << (b >>> a & 31), i = dd(this.F & g - 1);
  if(0 === (this.F & g)) {
    var j = dd(this.F);
    if(16 <= j) {
      i = Array(32);
      i[b >>> a & 31] = Of.X(a + 5, b, c, d, f);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.F >>> c & 1) && (i[c] = this.c[d] != m ? Of.X(a + 5, K.b(this.c[d]), this.c[d], this.c[d + 1], f) : this.c[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new Pf(m, j + 1, i)
    }
    a = Array(2 * (j + 1));
    Mc(this.c, 0, a, 0, 2 * i);
    a[2 * i] = c;
    a[2 * i + 1] = d;
    Mc(this.c, 2 * i, a, 2 * (i + 1), 2 * (j - i));
    f.ca = l;
    return new Nf(m, this.F | g, a)
  }
  j = this.c[2 * i];
  g = this.c[2 * i + 1];
  if(j == m) {
    return j = g.X(a + 5, b, c, d, f), j === g ? this : new Nf(m, this.F, Ff.e(this.c, 2 * i + 1, j))
  }
  if(Ef(c, j)) {
    return d === g ? this : new Nf(m, this.F, Ff.e(this.c, 2 * i + 1, d))
  }
  f.ca = l;
  return new Nf(m, this.F, Ff.ba(this.c, 2 * i, m, 2 * i + 1, Qf.ea ? Qf.ea(a + 5, j, g, b, c, d) : Qf.call(m, a + 5, j, g, b, c, d)))
};
r.la = function(a, b, c, d) {
  var f = 1 << (b >>> a & 31);
  if(0 === (this.F & f)) {
    return d
  }
  var g = dd(this.F & f - 1), f = this.c[2 * g], g = this.c[2 * g + 1];
  return f == m ? g.la(a + 5, b, c, d) : Ef(c, f) ? g : d
};
var Of = new Nf(m, 0, []);
function Pf(a, b, c) {
  this.r = a;
  this.j = b;
  this.c = c
}
r = Pf.prototype;
r.Y = function(a, b, c, d, f, g) {
  var i = c >>> b & 31, j = this.c[i];
  if(j == m) {
    return a = Jf.n(this, a, i, Of.Y(a, b + 5, c, d, f, g)), a.j += 1, a
  }
  b = j.Y(a, b + 5, c, d, f, g);
  return b === j ? this : Jf.n(this, a, i, b)
};
r.Ta = function() {
  return Sf.b ? Sf.b(this.c) : Sf.call(m, this.c)
};
r.Ga = function(a) {
  return a === this.r ? this : new Pf(a, this.j, this.c.slice())
};
r.X = function(a, b, c, d, f) {
  var g = b >>> a & 31, i = this.c[g];
  if(i == m) {
    return new Pf(m, this.j + 1, Ff.e(this.c, g, Of.X(a + 5, b, c, d, f)))
  }
  a = i.X(a + 5, b, c, d, f);
  return a === i ? this : new Pf(m, this.j, Ff.e(this.c, g, a))
};
r.la = function(a, b, c, d) {
  var f = this.c[b >>> a & 31];
  return f != m ? f.la(a + 5, b, c, d) : d
};
function Tf(a, b, c) {
  for(var b = 2 * b, d = 0;;) {
    if(d < b) {
      if(Ef(c, a[d])) {
        return d
      }
      d += 2
    }else {
      return-1
    }
  }
}
function Uf(a, b, c, d) {
  this.r = a;
  this.ka = b;
  this.j = c;
  this.c = d
}
r = Uf.prototype;
r.Y = function(a, b, c, d, f, g) {
  if(c === this.ka) {
    b = Tf(this.c, this.j, d);
    if(-1 === b) {
      if(this.c.length > 2 * this.j) {
        return a = Jf.ea(this, a, 2 * this.j, d, 2 * this.j + 1, f), g.ca = l, a.j += 1, a
      }
      c = this.c.length;
      b = Array(c + 2);
      Mc(this.c, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = f;
      g.ca = l;
      g = this.j + 1;
      a === this.r ? (this.c = b, this.j = g, a = this) : a = new Uf(this.r, this.ka, g, b);
      return a
    }
    return this.c[b + 1] === f ? this : Jf.n(this, a, b + 1, f)
  }
  return(new Nf(a, 1 << (this.ka >>> b & 31), [m, this, m, m])).Y(a, b, c, d, f, g)
};
r.Ta = function() {
  return Rf.b ? Rf.b(this.c) : Rf.call(m, this.c)
};
r.Ga = function(a) {
  if(a === this.r) {
    return this
  }
  var b = Array(2 * (this.j + 1));
  Mc(this.c, 0, b, 0, 2 * this.j);
  return new Uf(a, this.ka, this.j, b)
};
r.X = function(a, b, c, d, f) {
  return b === this.ka ? (a = Tf(this.c, this.j, c), -1 === a ? (a = this.c.length, b = Array(a + 2), Mc(this.c, 0, b, 0, a), b[a] = c, b[a + 1] = d, f.ca = l, new Uf(m, this.ka, this.j + 1, b)) : Q.a(this.c[a], d) ? this : new Uf(m, this.ka, this.j, Ff.e(this.c, a + 1, d))) : (new Nf(m, 1 << (this.ka >>> a & 31), [m, this])).X(a, b, c, d, f)
};
r.la = function(a, b, c, d) {
  a = Tf(this.c, this.j, c);
  return 0 > a ? d : Ef(c, this.c[a]) ? this.c[a + 1] : d
};
var Qf, Vf = m;
function Wf(a, b, c, d, f, g) {
  var i = K.b(b);
  if(i === d) {
    return new Uf(m, i, 2, [b, c, f, g])
  }
  var j = new Df;
  return Of.X(a, i, b, c, j).X(a, d, f, g, j)
}
function Xf(a, b, c, d, f, g, i) {
  var j = K.b(c);
  if(j === f) {
    return new Uf(m, j, 2, [c, d, g, i])
  }
  var k = new Df;
  return Of.Y(a, b, j, c, d, k).Y(a, b, f, g, i, k)
}
Vf = function(a, b, c, d, f, g, i) {
  switch(arguments.length) {
    case 6:
      return Wf.call(this, a, b, c, d, f, g);
    case 7:
      return Xf.call(this, a, b, c, d, f, g, i)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Vf.ea = Wf;
Vf.wa = Xf;
Qf = Vf;
function Yf(a, b, c, d, f) {
  this.m = a;
  this.Z = b;
  this.p = c;
  this.$ = d;
  this.l = f;
  this.t = 0;
  this.h = 31850572
}
r = Yf.prototype;
r.J = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Sb(a)
};
r.I = function(a, b) {
  return S(b, a)
};
r.toString = function() {
  return wb(this)
};
r.w = aa();
r.O = function() {
  return this.$ == m ? Ze([this.Z[this.p], this.Z[this.p + 1]]) : M(this.$)
};
r.R = function() {
  return this.$ == m ? Rf.e ? Rf.e(this.Z, this.p + 2, m) : Rf.call(m, this.Z, this.p + 2, m) : Rf.e ? Rf.e(this.Z, this.p, O(this.$)) : Rf.call(m, this.Z, this.p, O(this.$))
};
r.G = function(a, b) {
  return Ub(a, b)
};
r.D = function(a, b) {
  return new Yf(b, this.Z, this.p, this.$, this.l)
};
r.C = q("m");
var Rf, Zf = m;
function $f(a) {
  return Zf.e(a, 0, m)
}
function ag(a, b, c) {
  if(c == m) {
    for(c = a.length;;) {
      if(b < c) {
        if(a[b] != m) {
          return new Yf(m, a, b, m, m)
        }
        var d = a[b + 1];
        if(w(d) && (d = d.Ta(), w(d))) {
          return new Yf(m, a, b + 2, d, m)
        }
        b += 2
      }else {
        return m
      }
    }
  }else {
    return new Yf(m, a, b, c, m)
  }
}
Zf = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return $f.call(this, a);
    case 3:
      return ag.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Zf.b = $f;
Zf.e = ag;
Rf = Zf;
function bg(a, b, c, d, f) {
  this.m = a;
  this.Z = b;
  this.p = c;
  this.$ = d;
  this.l = f;
  this.t = 0;
  this.h = 31850572
}
r = bg.prototype;
r.J = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Sb(a)
};
r.I = function(a, b) {
  return S(b, a)
};
r.toString = function() {
  return wb(this)
};
r.w = aa();
r.O = function() {
  return M(this.$)
};
r.R = function() {
  return Sf.n ? Sf.n(m, this.Z, this.p, O(this.$)) : Sf.call(m, m, this.Z, this.p, O(this.$))
};
r.G = function(a, b) {
  return Ub(a, b)
};
r.D = function(a, b) {
  return new bg(b, this.Z, this.p, this.$, this.l)
};
r.C = q("m");
var Sf, cg = m;
function dg(a) {
  return cg.n(m, a, 0, m)
}
function eg(a, b, c, d) {
  if(d == m) {
    for(d = b.length;;) {
      if(c < d) {
        var f = b[c];
        if(w(f) && (f = f.Ta(), w(f))) {
          return new bg(a, b, c + 1, f, m)
        }
        c += 1
      }else {
        return m
      }
    }
  }else {
    return new bg(a, b, c, d, m)
  }
}
cg = function(a, b, c, d) {
  switch(arguments.length) {
    case 1:
      return dg.call(this, a);
    case 4:
      return eg.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
cg.b = dg;
cg.n = eg;
Sf = cg;
function fg(a, b, c, d, f, g) {
  this.m = a;
  this.j = b;
  this.root = c;
  this.P = d;
  this.S = f;
  this.l = g;
  this.t = 4;
  this.h = 16123663
}
r = fg.prototype;
r.va = function() {
  return new gg({}, this.root, this.j, this.P, this.S)
};
r.J = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = ud(a)
};
r.B = function(a, b) {
  return a.v(a, b, m)
};
r.v = function(a, b, c) {
  return b == m ? this.P ? this.S : c : this.root == m ? c : this.root.la(0, K.b(b), b, c)
};
r.ja = function(a, b, c) {
  if(b == m) {
    var d = this.P;
    return(d ? c === this.S : d) ? a : new fg(this.m, this.P ? this.j : this.j + 1, this.root, l, c, m)
  }
  d = new Df;
  c = (this.root == m ? Of : this.root).X(0, K.b(b), b, c, d);
  return c === this.root ? a : new fg(this.m, d.ca ? this.j + 1 : this.j, c, this.P, this.S, m)
};
r.Xa = function(a, b) {
  return b == m ? this.P : this.root == m ? n : this.root.la(0, K.b(b), b, Nc) !== Nc
};
var hg = m, hg = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.B(this, b);
    case 3:
      return this.v(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = fg.prototype;
r.call = hg;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.I = function(a, b) {
  return Jc(b) ? a.ja(a, A.a(b, 0), A.a(b, 1)) : Yc.e(Ga, a, b)
};
r.toString = function() {
  return wb(this)
};
r.w = function() {
  if(0 < this.j) {
    var a = this.root != m ? this.root.Ta() : m;
    return this.P ? S(Ze([m, this.S]), a) : a
  }
  return m
};
r.z = q("j");
r.G = function(a, b) {
  return mf(a, b)
};
r.D = function(a, b) {
  return new fg(b, this.j, this.root, this.P, this.S, this.l)
};
r.C = q("m");
var qf = new fg(m, 0, m, n, m, 0);
function gg(a, b, c, d, f) {
  this.r = a;
  this.root = b;
  this.count = c;
  this.P = d;
  this.S = f;
  this.t = 56;
  this.h = 258
}
r = gg.prototype;
r.Aa = function(a, b, c) {
  return ig(a, b, c)
};
r.pa = function(a, b) {
  var c;
  a: {
    if(a.r) {
      c = b ? ((c = b.h & 2048) ? c : b.lc) || (b.h ? 0 : x(Ua, b)) : x(Ua, b);
      if(c) {
        c = ig(a, vd.b ? vd.b(b) : vd.call(m, b), wd.b ? wd.b(b) : wd.call(m, b));
        break a
      }
      c = L(b);
      for(var d = a;;) {
        var f = M(c);
        if(w(f)) {
          c = O(c), d = ig(d, vd.b ? vd.b(f) : vd.call(m, f), wd.b ? wd.b(f) : wd.call(m, f))
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
r.Ba = function(a) {
  var b;
  a.r ? (a.r = m, b = new fg(m, a.count, a.root, a.P, a.S, m)) : e(Error("persistent! called twice"));
  return b
};
r.B = function(a, b) {
  return b == m ? this.P ? this.S : m : this.root == m ? m : this.root.la(0, K.b(b), b)
};
r.v = function(a, b, c) {
  return b == m ? this.P ? this.S : c : this.root == m ? c : this.root.la(0, K.b(b), b, c)
};
r.z = function() {
  if(this.r) {
    return this.count
  }
  e(Error("count after persistent!"))
};
function ig(a, b, c) {
  if(a.r) {
    if(b == m) {
      a.S !== c && (a.S = c), a.P || (a.count += 1, a.P = l)
    }else {
      var d = new Df, b = (a.root == m ? Of : a.root).Y(a.r, 0, K.b(b), b, c, d);
      b !== a.root && (a.root = b);
      d.ca && (a.count += 1)
    }
    return a
  }
  e(Error("assoc! after persistent!"))
}
var wc;
function jg(a) {
  for(var b = L(a), c = qb(qf);;) {
    if(b) {
      var a = O(O(b)), d = M(b), b = bc(b), c = tb(c, d, b), b = a
    }else {
      return sb(c)
    }
  }
}
function kg(a) {
  var b = m;
  0 < arguments.length && (b = R(Array.prototype.slice.call(arguments, 0), 0));
  return jg.call(this, b)
}
kg.o = 0;
kg.k = function(a) {
  a = L(a);
  return jg(a)
};
kg.g = jg;
wc = kg;
function vd(a) {
  return Va(a)
}
function wd(a) {
  return Wa(a)
}
function lg(a, b, c) {
  this.m = a;
  this.Ha = b;
  this.l = c;
  this.t = 4;
  this.h = 15077647
}
lg.prototype.va = function() {
  return new mg(qb(this.Ha))
};
lg.prototype.J = function(a) {
  var b = this.l;
  if(b != m) {
    return b
  }
  a: {
    b = 0;
    for(a = L(a);;) {
      if(a) {
        var c = M(a), b = (b + K.b(c)) % 4503599627370496, a = O(a)
      }else {
        break a
      }
    }
    b = h
  }
  return this.l = b
};
lg.prototype.B = function(a, b) {
  return a.v(a, b, m)
};
lg.prototype.v = function(a, b, c) {
  return w(Ra(this.Ha, b)) ? b : c
};
var ng = m, ng = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.B(this, b);
    case 3:
      return this.v(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = lg.prototype;
r.call = ng;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.I = function(a, b) {
  return new lg(this.m, tc.e(this.Ha, b, m), m)
};
r.toString = function() {
  return wb(this)
};
r.w = function() {
  return L(ne.a(M, this.Ha))
};
r.z = function() {
  return Ea(this.Ha)
};
r.G = function(a, b) {
  var c;
  c = b == m ? n : b ? ((c = b.h & 4096) ? c : b.Jd) ? l : b.h ? n : x(Xa, b) : x(Xa, b);
  return c ? (c = T(a) === T(b)) ? ke(function(b) {
    return pc.e(a, b, Nc) === Nc ? n : l
  }, b) : c : c
};
r.D = function(a, b) {
  return new lg(b, this.Ha, this.l)
};
r.C = q("m");
var og = new lg(m, Bf, 0);
function pg(a, b) {
  var c = a.length;
  if(c / 2 <= zf) {
    return c = b ? a : a.slice(), new lg(m, ya.a ? ya.a(c, l) : ya.call(m, c, l), m)
  }
  for(var d = 0, f = qb(og);;) {
    if(d < c) {
      var g = d + 2, f = rb(f, a[d]), d = g
    }else {
      return sb(f)
    }
  }
}
function mg(a) {
  this.ua = a;
  this.h = 259;
  this.t = 136
}
var qg = m, qg = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Na.e(this.ua, b, Nc) === Nc ? m : b;
    case 3:
      return Na.e(this.ua, b, Nc) === Nc ? c : b
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = mg.prototype;
r.call = qg;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.B = function(a, b) {
  return a.v(a, b, m)
};
r.v = function(a, b, c) {
  return Na.e(this.ua, b, Nc) === Nc ? c : b
};
r.z = function() {
  return T(this.ua)
};
r.pa = function(a, b) {
  this.ua = tb(this.ua, b, m);
  return a
};
r.Ba = function() {
  return new lg(m, sb(this.ua), m)
};
var rg, sg = m;
function tg(a) {
  var b = a instanceof Ab;
  if(b ? a.c.length < zf : b) {
    for(var a = a.c, b = a.length, c = Array(2 * b), d = 0;;) {
      if(d < b) {
        var f = 2 * d;
        c[f] = a[d];
        c[f + 1] = m;
        d += 1
      }else {
        return pg.a ? pg.a(c, l) : pg.call(m, c, l)
      }
    }
  }else {
    for(c = qb(og);;) {
      if(a != m) {
        b = a.fa(a), c = c.pa(c, a.O(a)), a = b
      }else {
        return c.Ba(c)
      }
    }
  }
}
function ug(a) {
  var b = m;
  0 < arguments.length && (b = R(Array.prototype.slice.call(arguments, 0), 0));
  return tg.call(this, b)
}
ug.o = 0;
ug.k = function(a) {
  a = L(a);
  return tg(a)
};
ug.g = tg;
sg = function(a) {
  switch(arguments.length) {
    case 0:
      return og;
    default:
      return ug.g(R(arguments, 0))
  }
  e(Error("Invalid arity: " + arguments.length))
};
sg.o = 0;
sg.k = ug.k;
sg.A = function() {
  return og
};
sg.g = ug.g;
rg = sg;
function vg(a) {
  if(a && w(w(m) ? m : a.Tb)) {
    return a.name
  }
  if(Ba(a)) {
    return a
  }
  if(Pc(a)) {
    var b = a.lastIndexOf("/", a.length - 2);
    return 0 > b ? od.a(a, 2) : od.a(a, b + 1)
  }
  e(Error([J("Doesn't support name: "), J(a)].join("")))
}
function wg(a) {
  if(a && w(w(m) ? m : a.Tb)) {
    return a.Ia
  }
  if(Pc(a)) {
    var b = a.lastIndexOf("/", a.length - 2);
    return-1 < b ? od.e(a, 2, b) : m
  }
  e(Error([J("Doesn't support namespace: "), J(a)].join("")))
}
function xg(a, b, c, d, f) {
  this.m = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.l = f;
  this.t = 0;
  this.h = 32375006
}
r = xg.prototype;
r.J = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Sb(a)
};
r.fa = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new xg(this.m, this.start + this.step, this.end, this.step, m) : m : this.start + this.step > this.end ? new xg(this.m, this.start + this.step, this.end, this.step, m) : m
};
r.I = function(a, b) {
  return S(b, a)
};
r.toString = function() {
  return wb(this)
};
r.xa = function(a, b) {
  return Gb.a(a, b)
};
r.ya = function(a, b, c) {
  return Gb.e(a, b, c)
};
r.w = function(a) {
  return 0 < this.step ? this.start < this.end ? a : m : this.start > this.end ? a : m
};
r.z = function(a) {
  return Aa(a.w(a)) ? 0 : Math.ceil((this.end - this.start) / this.step)
};
r.O = q("start");
r.R = function(a) {
  return a.w(a) != m ? new xg(this.m, this.start + this.step, this.end, this.step, m) : Bb
};
r.G = function(a, b) {
  return Ub(a, b)
};
r.D = function(a, b) {
  return new xg(b, this.start, this.end, this.step, this.l)
};
r.C = q("m");
r.q = function(a, b) {
  if(b < a.z(a)) {
    return this.start + b * this.step
  }
  var c = this.start > this.end;
  if(c ? 0 === this.step : c) {
    return this.start
  }
  e(Error("Index out of bounds"))
};
r.N = function(a, b, c) {
  c = b < a.z(a) ? this.start + b * this.step : ((a = this.start > this.end) ? 0 === this.step : a) ? this.start : c;
  return c
};
var yg, zg = m;
function Ag() {
  return zg.e(0, Number.MAX_VALUE, 1)
}
function Bg(a) {
  return zg.e(0, a, 1)
}
function Cg(a, b) {
  return zg.e(a, b, 1)
}
function Dg(a, b, c) {
  return new xg(m, a, b, c, m)
}
zg = function(a, b, c) {
  switch(arguments.length) {
    case 0:
      return Ag.call(this);
    case 1:
      return Bg.call(this, a);
    case 2:
      return Cg.call(this, a, b);
    case 3:
      return Dg.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
zg.A = Ag;
zg.b = Bg;
zg.a = Cg;
zg.e = Dg;
yg = zg;
var Eg, Fg = m;
function Gg(a) {
  for(;;) {
    if(L(a)) {
      a = O(a)
    }else {
      return m
    }
  }
}
function Hg(a, b) {
  for(;;) {
    var c = L(b);
    if(w(c ? 0 < a : c)) {
      var c = a - 1, d = O(b), a = c, b = d
    }else {
      return m
    }
  }
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
var Ig, Jg = m;
function Kg(a) {
  Eg.b(a);
  return a
}
function Lg(a, b) {
  Eg.a(a, b);
  return b
}
Jg = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Kg.call(this, a);
    case 2:
      return Lg.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Jg.b = Kg;
Jg.a = Lg;
Ig = Jg;
function Mg(a, b) {
  var c = a.exec(b);
  return c == m ? m : 1 === T(c) ? M(c) : $e(c)
}
function Ng(a, b, c, d, f, g, i) {
  G(a, c);
  L(i) && (b.e ? b.e(M(i), a, g) : b.call(m, M(i), a, g));
  for(var c = L(O(i)), i = m, j = 0, k = 0;;) {
    if(k < j) {
      var p = i.q(i, k);
      G(a, d);
      b.e ? b.e(p, a, g) : b.call(m, p, a, g);
      k += 1
    }else {
      if(c = L(c)) {
        i = c, U(i) ? (c = H(i), k = I(i), i = c, j = T(c), c = k) : (c = M(i), G(a, d), b.e ? b.e(c, a, g) : b.call(m, c, a, g), c = O(i), i = m, j = 0), k = 0
      }else {
        break
      }
    }
  }
  return G(a, f)
}
function Og(a, b) {
  for(var c = L(b), d = m, f = 0, g = 0;;) {
    if(g < f) {
      var i = d.q(d, g);
      G(a, i);
      g += 1
    }else {
      if(c = L(c)) {
        d = c, U(d) ? (c = H(d), f = I(d), d = c, i = T(c), c = f, f = i) : (i = M(d), G(a, i), c = O(d), d = m, f = 0), g = 0
      }else {
        return m
      }
    }
  }
}
function Pg(a, b) {
  var c = m;
  1 < arguments.length && (c = R(Array.prototype.slice.call(arguments, 1), 0));
  return Og.call(this, a, c)
}
Pg.o = 1;
Pg.k = function(a) {
  var b = M(a), a = N(a);
  return Og(b, a)
};
Pg.g = Og;
var Qg = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"}, Sg = function Rg(b, c, d) {
  if(b == m) {
    return G(c, "nil")
  }
  if(h === b) {
    return G(c, "#<undefined>")
  }
  var f;
  f = pc.a(d, "\ufdd0:meta");
  w(f) && (f = b ? ((f = b.h & 131072) ? f : b.mc) ? l : b.h ? n : x($a, b) : x($a, b), f = w(f) ? Dc(b) : f);
  w(f) && (G(c, "^"), Rg(Dc(b), c, d), G(c, " "));
  if(b == m) {
    return G(c, "nil")
  }
  if(b.Ca) {
    return b.Pa(b, c, d)
  }
  if(f = b) {
    f = (f = b.h & 2147483648) ? f : b.M
  }
  return f ? b.K(b, c, d) : ((f = (b == m ? m : b.constructor) === Boolean) ? f : "number" === typeof b) ? G(c, "" + J(b)) : b instanceof Array ? Ng(c, Rg, "#<Array [", ", ", "]>", d, b) : t(b) ? Pc(b) ? (G(c, ":"), d = wg(b), w(d) && Pg.g(c, R(["" + J(d), "/"], 0)), G(c, vg(b))) : b instanceof xb ? (d = wg(b), w(d) && Pg.g(c, R(["" + J(d), "/"], 0)), G(c, vg(b))) : w((new V("\ufdd0:readably")).call(m, d)) ? G(c, [J('"'), J(b.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(b) {
    return Qg[b]
  })), J('"')].join("")) : G(c, b) : zc(b) ? Pg.g(c, R(["#<", "" + J(b), ">"], 0)) : b instanceof Date ? (d = function(b, c) {
    for(var d = "" + J(b);;) {
      if(T(d) < c) {
        d = [J("0"), J(d)].join("")
      }else {
        return d
      }
    }
  }, Pg.g(c, R(['#inst "', "" + J(b.getUTCFullYear()), "-", d(b.getUTCMonth() + 1, 2), "-", d(b.getUTCDate(), 2), "T", d(b.getUTCHours(), 2), ":", d(b.getUTCMinutes(), 2), ":", d(b.getUTCSeconds(), 2), ".", d(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : w(b instanceof RegExp) ? Pg.g(c, R(['#"', b.source, '"'], 0)) : Pg.g(c, R(["#<", "" + J(b), ">"], 0))
};
function Tg(a) {
  var b = xa(), c = a == m;
  if(c ? c : Aa(L(a))) {
    b = ""
  }else {
    var c = J, d = new va, f = new vb(d);
    a: {
      Sg(M(a), f, b);
      for(var a = L(O(a)), g = m, i = 0, j = 0;;) {
        if(j < i) {
          var k = g.q(g, j);
          G(f, " ");
          Sg(k, f, b);
          j += 1
        }else {
          if(a = L(a)) {
            g = a, U(g) ? (a = H(g), i = I(g), g = a, k = T(a), a = i, i = k) : (k = M(g), G(f, " "), Sg(k, f, b), a = O(g), g = m, i = 0), j = 0
          }else {
            break a
          }
        }
      }
    }
    ob(f);
    b = "" + c(d)
  }
  return b
}
function Ug(a) {
  var b = m;
  0 < arguments.length && (b = R(Array.prototype.slice.call(arguments, 0), 0));
  return Tg(b)
}
Ug.o = 0;
Ug.k = function(a) {
  a = L(a);
  return Tg(a)
};
Ug.g = function(a) {
  return Tg(a)
};
Ab.prototype.M = l;
Ab.prototype.K = function(a, b, c) {
  return Ng(b, Sg, "(", " ", ")", c, a)
};
Kc.prototype.M = l;
Kc.prototype.K = function(a, b, c) {
  return Ng(b, Sg, "(", " ", ")", c, a)
};
xf.prototype.M = l;
xf.prototype.K = function(a, b, c) {
  return Ng(b, function(a) {
    return Ng(b, Sg, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
Fd.prototype.M = l;
Fd.prototype.K = function(a, b, c) {
  return Ng(b, Sg, "(", " ", ")", c, a)
};
Yf.prototype.M = l;
Yf.prototype.K = function(a, b, c) {
  return Ng(b, Sg, "(", " ", ")", c, a)
};
Lc.prototype.M = l;
Lc.prototype.K = function(a, b, c) {
  return Ng(b, Sg, "(", " ", ")", c, a)
};
fg.prototype.M = l;
fg.prototype.K = function(a, b, c) {
  return Ng(b, function(a) {
    return Ng(b, Sg, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
lg.prototype.M = l;
lg.prototype.K = function(a, b, c) {
  return Ng(b, Sg, "#{", " ", "}", c, a)
};
Re.prototype.M = l;
Re.prototype.K = function(a, b, c) {
  return Ng(b, Sg, "[", " ", "]", c, a)
};
xd.prototype.M = l;
xd.prototype.K = function(a, b, c) {
  return Ng(b, Sg, "(", " ", ")", c, a)
};
yd.prototype.M = l;
yd.prototype.K = function(a, b) {
  return G(b, "()")
};
Bd.prototype.M = l;
Bd.prototype.K = function(a, b, c) {
  return Ng(b, Sg, "(", " ", ")", c, a)
};
xg.prototype.M = l;
xg.prototype.K = function(a, b, c) {
  return Ng(b, Sg, "(", " ", ")", c, a)
};
bg.prototype.M = l;
bg.prototype.K = function(a, b, c) {
  return Ng(b, Sg, "(", " ", ")", c, a)
};
sf.prototype.M = l;
sf.prototype.K = function(a, b, c) {
  return Ng(b, function(a) {
    return Ng(b, Sg, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
Re.prototype.hc = l;
Re.prototype.ic = function(a, b) {
  return Rc.a(a, b)
};
function Vg(a, b, c, d) {
  this.state = a;
  this.m = b;
  this.Ac = c;
  this.Bc = d;
  this.h = 2153938944;
  this.t = 2
}
r = Vg.prototype;
r.J = function(a) {
  return fa(a)
};
r.Ub = function(a, b, c) {
  for(var d = L(this.Bc), f = m, g = 0, i = 0;;) {
    if(i < g) {
      var j = f.q(f, i), k = lc.e(j, 0, m), j = lc.e(j, 1, m);
      j.n ? j.n(k, a, b, c) : j.call(m, k, a, b, c);
      i += 1
    }else {
      if(d = L(d)) {
        U(d) ? (f = H(d), d = I(d), k = f, g = T(f), f = k) : (f = M(d), k = lc.e(f, 0, m), j = lc.e(f, 1, m), j.n ? j.n(k, a, b, c) : j.call(m, k, a, b, c), d = O(d), f = m, g = 0), i = 0
      }else {
        return m
      }
    }
  }
};
r.K = function(a, b, c) {
  G(b, "#<Atom: ");
  Sg(this.state, b, c);
  return G(b, ">")
};
r.C = q("m");
r.jc = q("state");
r.G = function(a, b) {
  return a === b
};
var Wg, Xg = m;
function Yg(a) {
  return new Vg(a, m, m, m)
}
function Zg(a, b) {
  var c;
  c = b == m ? n : b ? ((c = b.h & 64) ? c : b.zb) ? l : b.h ? n : x(La, b) : x(La, b);
  var d = c ? Bc.a(wc, b) : b;
  c = pc.a(d, "\ufdd0:validator");
  d = pc.a(d, "\ufdd0:meta");
  return new Vg(a, d, c, m)
}
function $g(a, b) {
  var c = m;
  1 < arguments.length && (c = R(Array.prototype.slice.call(arguments, 1), 0));
  return Zg.call(this, a, c)
}
$g.o = 1;
$g.k = function(a) {
  var b = M(a), a = N(a);
  return Zg(b, a)
};
$g.g = Zg;
Xg = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Yg.call(this, a);
    default:
      return $g.g(a, R(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Xg.o = 1;
Xg.k = $g.k;
Xg.b = Yg;
Xg.g = $g.g;
Wg = Xg;
function ah(a, b) {
  var c = a.Ac;
  w(c) && !w(c.b ? c.b(b) : c.call(m, b)) && e(Error([J("Assert failed: "), J("Validator rejected reference state"), J("\n"), J(Ug.g(R([Cc(Tb(new xb(m, "validate", "validate", 1233162959, m), new xb(m, "new-value", "new-value", 972165309, m)), wc("\ufdd0:line", 6673, "\ufdd0:column", 13))], 0)))].join("")));
  c = a.state;
  a.state = b;
  pb(a, c, b);
  return b
}
var bh, ch = m;
function dh(a, b) {
  return ah(a, b.b ? b.b(a.state) : b.call(m, a.state))
}
function eh(a, b, c) {
  return ah(a, b.a ? b.a(a.state, c) : b.call(m, a.state, c))
}
function fh(a, b, c, d) {
  return ah(a, b.e ? b.e(a.state, c, d) : b.call(m, a.state, c, d))
}
function gh(a, b, c, d, f) {
  return ah(a, b.n ? b.n(a.state, c, d, f) : b.call(m, a.state, c, d, f))
}
function hh(a, b, c, d, f, g) {
  return ah(a, Bc.g(b, a.state, c, d, f, R([g], 0)))
}
function ih(a, b, c, d, f, g) {
  var i = m;
  5 < arguments.length && (i = R(Array.prototype.slice.call(arguments, 5), 0));
  return hh.call(this, a, b, c, d, f, i)
}
ih.o = 5;
ih.k = function(a) {
  var b = M(a), a = O(a), c = M(a), a = O(a), d = M(a), a = O(a), f = M(a), a = O(a), g = M(a), a = N(a);
  return hh(b, c, d, f, g, a)
};
ih.g = hh;
ch = function(a, b, c, d, f, g) {
  switch(arguments.length) {
    case 2:
      return dh.call(this, a, b);
    case 3:
      return eh.call(this, a, b, c);
    case 4:
      return fh.call(this, a, b, c, d);
    case 5:
      return gh.call(this, a, b, c, d, f);
    default:
      return ih.g(a, b, c, d, f, R(arguments, 5))
  }
  e(Error("Invalid arity: " + arguments.length))
};
ch.o = 5;
ch.k = ih.k;
ch.a = dh;
ch.e = eh;
ch.n = fh;
ch.ba = gh;
ch.g = ih.g;
bh = ch;
var jh, kh, lh, mh;
function nh() {
  return ca.navigator ? ca.navigator.userAgent : m
}
mh = lh = kh = jh = n;
var oh;
if(oh = nh()) {
  var ph = ca.navigator;
  jh = 0 == oh.indexOf("Opera");
  kh = !jh && -1 != oh.indexOf("MSIE");
  lh = !jh && -1 != oh.indexOf("WebKit");
  mh = !jh && !lh && "Gecko" == ph.product
}
var qh = jh, X = kh, rh = mh, sh = lh, th = ca.navigator, uh = -1 != (th && th.platform || "").indexOf("Mac"), vh;
a: {
  var wh = "", xh;
  if(qh && ca.opera) {
    var yh = ca.opera.version, wh = "function" == typeof yh ? yh() : yh
  }else {
    if(rh ? xh = /rv\:([^\);]+)(\)|;)/ : X ? xh = /MSIE\s+([^\);]+)(\)|;)/ : sh && (xh = /WebKit\/(\S+)/), xh) {
      var zh = xh.exec(nh()), wh = zh ? zh[1] : ""
    }
  }
  if(X) {
    var Ah, Bh = ca.document;
    Ah = Bh ? Bh.documentMode : h;
    if(Ah > parseFloat(wh)) {
      vh = String(Ah);
      break a
    }
  }
  vh = wh
}
var Ch = {};
function Dh(a) {
  var b;
  if(!(b = Ch[a])) {
    b = 0;
    for(var c = la(String(vh)).split("."), d = la(String(a)).split("."), f = Math.max(c.length, d.length), g = 0;0 == b && g < f;g++) {
      var i = c[g] || "", j = d[g] || "", k = RegExp("(\\d*)(\\D*)", "g"), p = RegExp("(\\d*)(\\D*)", "g");
      do {
        var v = k.exec(i) || ["", "", ""], u = p.exec(j) || ["", "", ""];
        if(0 == v[0].length && 0 == u[0].length) {
          break
        }
        b = ((0 == v[1].length ? 0 : parseInt(v[1], 10)) < (0 == u[1].length ? 0 : parseInt(u[1], 10)) ? -1 : (0 == v[1].length ? 0 : parseInt(v[1], 10)) > (0 == u[1].length ? 0 : parseInt(u[1], 10)) ? 1 : 0) || ((0 == v[2].length) < (0 == u[2].length) ? -1 : (0 == v[2].length) > (0 == u[2].length) ? 1 : 0) || (v[2] < u[2] ? -1 : v[2] > u[2] ? 1 : 0)
      }while(0 == b)
    }
    b = Ch[a] = 0 <= b
  }
  return b
}
var Eh = {};
function Fh() {
  return Eh[9] || (Eh[9] = X && !!document.documentMode && 9 <= document.documentMode)
}
;function Gh(a, b, c, d, f) {
  if(!X && (!sh || !Dh("525"))) {
    return l
  }
  if(uh && f) {
    return Hh(a)
  }
  if(f && !d || !c && (17 == b || 18 == b) || X && d && b == a) {
    return n
  }
  switch(a) {
    case 13:
      return!(X && Fh());
    case 27:
      return!sh
  }
  return Hh(a)
}
function Hh(a) {
  if(48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || sh && 0 == a) {
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
function Ih(a) {
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
;var Jh;
!X || Fh();
!rh && !X || X && Fh() || rh && Dh("1.9.1");
var Kh = X && !Dh("9");
function Lh(a, b) {
  var c = b || document;
  return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : c.getElementsByClassName ? c.getElementsByClassName(a) : Mh("*", a, b)
}
function Nh(a) {
  var b = document, c = m;
  return(c = b.querySelectorAll && b.querySelector ? b.querySelector("." + a) : Lh(a, h)[0]) || m
}
function Mh(a, b, c) {
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
      a = i.className, "function" == typeof a.split && 0 <= pa(a.split(/\s+/), b) && (d[f++] = i)
    }
    d.length = f;
    return d
  }
  return c
}
function Oh(a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : m
}
var Ph = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, Qh = {IMG:" ", BR:"\n"};
function Rh(a, b, c) {
  if(!(a.nodeName in Ph)) {
    if(3 == a.nodeType) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in Qh) {
        b.push(Qh[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          Rh(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function Sh(a) {
  this.Bb = a || ca.document || document
}
r = Sh.prototype;
r.Yb = function(a) {
  return t(a) ? this.Bb.getElementById(a) : a
};
r.createElement = function(a) {
  return this.Bb.createElement(a)
};
r.createTextNode = function(a) {
  return this.Bb.createTextNode(a)
};
r.appendChild = function(a, b) {
  a.appendChild(b)
};
r.append = function(a, b) {
  function c(a) {
    a && f.appendChild(t(a) ? d.createTextNode(a) : a)
  }
  for(var d = 9 == a.nodeType ? a : a.ownerDocument || a.document, f = a, g = arguments, i = 1;i < g.length;i++) {
    var j = g[i], k = j, p = s(k);
    if(("array" == p || "object" == p && "number" == typeof k.length) && !(ea(j) && 0 < j.nodeType)) {
      k = qa;
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
          for(var v = Array(p), u = 0;u < p;u++) {
            v[u] = j[u]
          }
          j = v
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
function Th(a, b, c) {
  if(Ba(b)) {
    return a.replace(RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), c)
  }
  if(w(b.hasOwnProperty("source"))) {
    return a.replace(RegExp(b.source, "g"), c)
  }
  e([J("Invalid match arg: "), J(b)].join(""))
}
;function Uh(a, b, c) {
  a.style[na(c)] = b
}
;function Vh(a) {
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
;!X || Fh();
var Wh = !X || Fh(), Xh = X && !Dh("8");
!sh || Dh("528");
rh && Dh("1.9b") || X && Dh("8") || qh && Dh("9.5") || sh && Dh("528");
rh && !Dh("8") || X && Dh("9");
function Yh() {
  this.Xb = n
}
;function Zh(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
Zh.prototype.Ja = n;
Zh.prototype.defaultPrevented = n;
Zh.prototype.eb = l;
Zh.prototype.preventDefault = function() {
  this.defaultPrevented = l;
  this.eb = n
};
var $h = {Ic:"click", Nc:"dblclick", gd:"mousedown", ld:"mouseup", kd:"mouseover", jd:"mouseout", hd:"mousemove", xd:"selectstart", bd:"keypress", ad:"keydown", cd:"keyup", Gc:"blur", Vc:"focus", Oc:"deactivate", Wc:X ? "focusin" : "DOMFocusIn", Xc:X ? "focusout" : "DOMFocusOut", Hc:"change", wd:"select", yd:"submit", $c:"input", sd:"propertychange", Sc:"dragstart", Pc:"dragenter", Rc:"dragover", Qc:"dragleave", Tc:"drop", Cd:"touchstart", Bd:"touchmove", Ad:"touchend", zd:"touchcancel", Kc:"contextmenu", 
Uc:"error", Zc:"help", dd:"load", ed:"losecapture", td:"readystatechange", ud:"resize", vd:"scroll", Ed:"unload", Yc:"hashchange", od:"pagehide", pd:"pageshow", rd:"popstate", Lc:"copy", qd:"paste", Mc:"cut", Dc:"beforecopy", Ec:"beforecut", Fc:"beforepaste", nd:"online", md:"offline", fd:"message", Jc:"connect", Dd:sh ? "webkitTransitionEnd" : qh ? "oTransitionEnd" : "transitionend"};
function ai(a) {
  ai[" "](a);
  return a
}
ai[" "] = function() {
};
function bi(a, b) {
  a && this.Sa(a, b)
}
ka(bi, Zh);
r = bi.prototype;
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
r.Sa = function(a, b) {
  var c = this.type = a.type;
  Zh.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(rh) {
      var f;
      a: {
        try {
          ai(d.nodeName);
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
  this.offsetX = sh || a.offsetX !== h ? a.offsetX : a.layerX;
  this.offsetY = sh || a.offsetY !== h ? a.offsetY : a.layerY;
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
  this.wc = uh ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.Eb = a;
  a.defaultPrevented && this.preventDefault();
  delete this.Ja
};
r.preventDefault = function() {
  bi.zc.preventDefault.call(this);
  var a = this.Eb;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = n, Xh) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
function ci() {
}
var di = 0;
r = ci.prototype;
r.key = 0;
r.La = n;
r.jb = n;
r.Sa = function(a, b, c, d, f, g) {
  da(a) ? this.$b = l : a && a.handleEvent && da(a.handleEvent) ? this.$b = n : e(Error("Invalid listener argument"));
  this.Ua = a;
  this.dc = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.Ib = g;
  this.jb = n;
  this.key = ++di;
  this.La = n
};
r.handleEvent = function(a) {
  return this.$b ? this.Ua.call(this.Ib || this.src, a) : this.Ua.handleEvent.call(this.Ua, a)
};
var ei = {}, fi = {}, gi = {}, hi = {};
function ii(a, b, c, d, f) {
  if(b) {
    if("array" == s(b)) {
      for(var g = 0;g < b.length;g++) {
        ii(a, b[g], c, d, f)
      }
      return m
    }
    var d = !!d, i = fi;
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
    var p = ji, v = Wh ? function(a) {
      return p.call(v.src, v.key, a)
    } : function(a) {
      a = p.call(v.src, v.key, a);
      if(!a) {
        return a
      }
    }, g = v;
    g.src = a;
    i = new ci;
    i.Sa(c, g, a, b, d, f);
    c = i.key;
    g.key = c;
    k.push(i);
    ei[c] = i;
    gi[j] || (gi[j] = []);
    gi[j].push(i);
    a.addEventListener ? (a == ca || !a.Wb) && a.addEventListener(b, g, d) : a.attachEvent(b in hi ? hi[b] : hi[b] = "on" + b, g);
    return c
  }
  e(Error("Invalid event type"))
}
function ki(a, b, c, d, f) {
  if("array" == s(b)) {
    for(var g = 0;g < b.length;g++) {
      ki(a, b[g], c, d, f)
    }
    return m
  }
  a = ii(a, b, c, d, f);
  ei[a].jb = l;
  return a
}
function li(a, b, c, d, f) {
  if("array" == s(b)) {
    for(var g = 0;g < b.length;g++) {
      li(a, b[g], c, d, f)
    }
  }else {
    d = !!d;
    a: {
      g = fi;
      if(b in g && (g = g[b], d in g && (g = g[d], a = fa(a), g[a]))) {
        a = g[a];
        break a
      }
      a = m
    }
    if(a) {
      for(g = 0;g < a.length;g++) {
        if(a[g].Ua == c && a[g].capture == d && a[g].Ib == f) {
          mi(a[g].key);
          break
        }
      }
    }
  }
}
function mi(a) {
  if(ei[a]) {
    var b = ei[a];
    if(!b.La) {
      var c = b.src, d = b.type, f = b.dc, g = b.capture;
      c.removeEventListener ? (c == ca || !c.Wb) && c.removeEventListener(d, f, g) : c.detachEvent && c.detachEvent(d in hi ? hi[d] : hi[d] = "on" + d, f);
      c = fa(c);
      if(gi[c]) {
        var f = gi[c], i = pa(f, b);
        0 <= i && oa.splice.call(f, i, 1);
        0 == f.length && delete gi[c]
      }
      b.La = l;
      if(b = fi[d][g][c]) {
        b.bc = l, ni(d, g, c, b)
      }
      delete ei[a]
    }
  }
}
function ni(a, b, c, d) {
  if(!d.ab && d.bc) {
    for(var f = 0, g = 0;f < d.length;f++) {
      d[f].La ? d[f].dc.src = m : (f != g && (d[g] = d[f]), g++)
    }
    d.length = g;
    d.bc = n;
    0 == g && (delete fi[a][b][c], fi[a][b].W--, 0 == fi[a][b].W && (delete fi[a][b], fi[a].W--), 0 == fi[a].W && delete fi[a])
  }
}
function oi(a, b, c, d, f) {
  var g = 1, b = fa(b);
  if(a[b]) {
    a.U--;
    a = a[b];
    a.ab ? a.ab++ : a.ab = 1;
    try {
      for(var i = a.length, j = 0;j < i;j++) {
        var k = a[j];
        k && !k.La && (g &= pi(k, f) !== n)
      }
    }finally {
      a.ab--, ni(c, d, b, a)
    }
  }
  return Boolean(g)
}
function pi(a, b) {
  a.jb && mi(a.key);
  return a.handleEvent(b)
}
function ji(a, b) {
  if(!ei[a]) {
    return l
  }
  var c = ei[a], d = c.type, f = fi;
  if(!(d in f)) {
    return l
  }
  var f = f[d], g, i;
  if(!Wh) {
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
          }catch(v) {
            p = l
          }
        }
        if(p || g.returnValue == h) {
          g.returnValue = l
        }
      }
    }
    p = new bi;
    p.Sa(g, this);
    g = l;
    try {
      if(j) {
        for(var u = [], y = p.currentTarget;y;y = y.parentNode) {
          u.push(y)
        }
        i = f[l];
        i.U = i.W;
        for(var D = u.length - 1;!p.Ja && 0 <= D && i.U;D--) {
          p.currentTarget = u[D], g &= oi(i, u[D], d, l, p)
        }
        if(k) {
          i = f[n];
          i.U = i.W;
          for(D = 0;!p.Ja && D < u.length && i.U;D++) {
            p.currentTarget = u[D], g &= oi(i, u[D], d, n, p)
          }
        }
      }else {
        g = pi(c, p)
      }
    }finally {
      u && (u.length = 0)
    }
    return g
  }
  d = new bi(b, this);
  return g = pi(c, d)
}
;var qi, ri = document.createElement("div");
ri.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
var si = Q.a(ri.firstChild.nodeType, 3), ti = Q.a(ri.getElementsByTagName("tbody").length, 0);
Q.a(ri.getElementsByTagName("link").length, 0);
var ui = /<|&#?\w+;/, vi = /^\s+/, wi = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i, xi = /<([\w:]+)/, yi = /<tbody/i, zi = Ze([1, "<select multiple='multiple'>", "</select>"]), Ai = Ze([1, "<table>", "</table>"]), Bi = Ze([3, "<table><tbody><tr>", "</tr></tbody></table>"]), Ci;
a: {
  for(var Di = "col \ufdd0:default tfoot caption optgroup legend area td thead th option tbody tr colgroup".split(" "), Ei = [Ze([2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"]), Ze([0, "", ""]), Ai, Ai, zi, Ze([1, "<fieldset>", "</fieldset>"]), Ze([1, "<map>", "</map>"]), Bi, Ai, Bi, zi, Ai, Ze([2, "<table><tbody>", "</tbody></table>"]), Ai], Fi = Di.length, Gi = 0, Hi = qb(qf);;) {
    if(Gi < Fi) {
      var Ii = Gi + 1, Ji = tb(Hi, Di[Gi], Ei[Gi]), Gi = Ii, Hi = Ji
    }else {
      Ci = sb(Hi);
      break a
    }
  }
  Ci = h
}
function Ki(a) {
  var a = Th(a, wi, "<$1></$2>"), b = ("" + J(bc(Mg(xi, a)))).toLowerCase(), c = pc.e(Ci, b, (new V("\ufdd0:default")).call(m, Ci)), d = lc.e(c, 0, m), f = lc.e(c, 1, m), c = lc.e(c, 2, m);
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
  if(w(ti)) {
    a: {
      c = d;
      g = Aa(Mg(yi, a));
      ((b = Q.a(b, "table")) ? g : b) ? (f = c.firstChild, f = w(f) ? c.firstChild.childNodes : f) : f = ((f = Q.a(f, "<table>")) ? g : f) ? divchildNodes : Ye;
      for(var f = L(f), c = m, i = g = 0;;) {
        if(i < g) {
          var b = c.q(c, i), j = Q.a(b.nodeName, "tbody");
          (j ? Q.a(b.childNodes.length, 0) : j) && b.parentNode.removeChild(b);
          i += 1
        }else {
          if(f = L(f)) {
            U(f) ? (c = H(f), f = I(f), b = c, g = T(c), c = b) : (b = M(f), ((c = Q.a(b.nodeName, "tbody")) ? Q.a(b.childNodes.length, 0) : c) && b.parentNode.removeChild(b), f = O(f), c = m, g = 0), i = 0
          }else {
            break a
          }
        }
      }
    }
  }
  f = (f = Aa(si)) ? Mg(vi, a) : f;
  w(f) && d.insertBefore(document.createTextNode(M(Mg(vi, a))), d.firstChild);
  return d.childNodes
}
function Y(a) {
  if(a ? a.Cb : a) {
    return a.Cb(a)
  }
  var b;
  var c = Y[s(a == m ? m : a)];
  c ? b = c : (c = Y._) ? b = c : e(z("DomContent.nodes", a));
  return b.call(m, a)
}
function Li(a) {
  if(a ? a.Db : a) {
    return a.Db(a)
  }
  var b;
  var c = Li[s(a == m ? m : a)];
  c ? b = c : (c = Li._) ? b = c : e(z("DomContent.single-node", a));
  return b.call(m, a)
}
function Z(a) {
  a = vg(a);
  return t(a) ? document.getElementById(a) : a
}
var Oi = function Mi(b) {
  h === qi && (qi = {}, qi = function(b, d, f) {
    this.Na = b;
    this.fc = d;
    this.sc = f;
    this.t = 0;
    this.h = 393216
  }, qi.Ca = l, qi.Qa = "domina/t10835", qi.Pa = function(b, d) {
    return G(d, "domina/t10835")
  }, qi.prototype.Cb = function() {
    return Ni.b ? Ni.b(Lh(vg(this.Na))) : Ni.call(m, Lh(vg(this.Na)))
  }, qi.prototype.Db = function() {
    return Ni.b ? Ni.b(Nh(vg(this.Na))) : Ni.call(m, Nh(vg(this.Na)))
  }, qi.prototype.C = q("sc"), qi.prototype.D = function(b, d) {
    return new qi(this.Na, this.fc, d)
  });
  return new qi(b, Mi, m)
};
function Pi(a, b) {
  Qi.e ? Qi.e(function(a, b) {
    a.insertBefore(b, a.childNodes[0] || m)
  }, a, b) : Qi.call(m, function(a, b) {
    a.insertBefore(b, a.childNodes[0] || m)
  }, a, b)
}
function Ri() {
  var a = Oi("help");
  Eg.b(ne.a(Oh, Y(a)))
}
function Si(a) {
  var a = Li(a), b = vg("display"), a = a.style[na(b)] || "";
  return w(/^[\s\xa0]*$/.test(a == m ? "" : String(a))) ? m : a
}
function Ti(a, b, c) {
  for(var d = L(Y(a)), f = m, g = 0, i = 0;;) {
    if(i < g) {
      var j = f.q(f, i), k = vg(b), p = Bc.a(J, c);
      t(k) ? Uh(j, p, k) : ra(k, ia(Uh, j));
      i += 1
    }else {
      if(d = L(d)) {
        U(d) ? (g = H(d), d = I(d), f = g, g = T(g)) : (f = M(d), g = vg(b), i = Bc.a(J, c), t(g) ? Uh(f, i, g) : ra(g, ia(Uh, f)), d = O(d), f = m, g = 0), i = 0
      }else {
        break
      }
    }
  }
  return a
}
function Ui(a, b, c) {
  var d = m;
  2 < arguments.length && (d = R(Array.prototype.slice.call(arguments, 2), 0));
  return Ti.call(this, a, b, d)
}
Ui.o = 2;
Ui.k = function(a) {
  var b = M(a), a = O(a), c = M(a), a = N(a);
  return Ti(b, c, a)
};
Ui.g = Ti;
function Vi(a, b, c) {
  for(var d = L(Y(a)), f = m, g = 0, i = 0;;) {
    if(i < g) {
      f.q(f, i).setAttribute(vg(b), Bc.a(J, c)), i += 1
    }else {
      if(d = L(d)) {
        f = d, U(f) ? (d = H(f), i = I(f), f = d, g = T(d), d = i) : (M(f).setAttribute(vg(b), Bc.a(J, c)), d = O(f), f = m, g = 0), i = 0
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
  var b = M(a), a = O(a), c = M(a), a = N(a);
  return Vi(b, c, a)
};
Wi.g = Vi;
function Xi(a, b) {
  for(var c = L(Y(a)), d = m, f = 0, g = 0;;) {
    if(g < f) {
      d.q(d, g).removeAttribute(vg(b)), g += 1
    }else {
      if(c = L(c)) {
        d = c, U(d) ? (c = H(d), g = I(d), d = c, f = T(c), c = g) : (M(d).removeAttribute(vg(b)), c = O(d), d = m, f = 0), g = 0
      }else {
        break
      }
    }
  }
  return a
}
function Yi(a) {
  var b = Li(a).attributes;
  return Yc.a(cc, He(me(), ne.a(function(a) {
    var a = b.item(a), d = a.nodeValue, f = fe.a(m, d);
    return(f ? fe.a("", d) : f) ? ya([qd.b(a.nodeName.toLowerCase()), a.nodeValue], l) : m
  }, yg.b(b.length))))
}
function Zi(a) {
  a = Li(a);
  if(Kh && "innerText" in a) {
    a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
  }else {
    var b = [];
    Rh(a, b, l);
    a = b.join("")
  }
  a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
  a = a.replace(/\u200B/g, "");
  Kh || (a = a.replace(/ +/g, " "));
  " " != a && (a = a.replace(/^\s*/, ""));
  return la(a)
}
function $i(a) {
  return Vh(Li(a))
}
function Qi(a, b, c) {
  for(var b = Y(b), d = Y(c), c = document.createDocumentFragment(), f = L(d), g = m, i = 0, j = 0;;) {
    if(j < i) {
      var k = g.q(g, j);
      c.appendChild(k);
      j += 1
    }else {
      if(f = L(f)) {
        g = f, U(g) ? (f = H(g), j = I(g), g = f, i = T(f), f = j) : (f = M(g), c.appendChild(f), f = O(g), g = m, i = 0), j = 0
      }else {
        break
      }
    }
  }
  d = Ig.b(we.a(T(b) - 1, function(a, b, c) {
    return function() {
      return c.cloneNode(l)
    }
  }(b, d, c)));
  return L(b) ? (a.a ? a.a(M(b), c) : a.call(m, M(b), c), Ig.b(ne.e(function(b, c) {
    return a.a ? a.a(b, c) : a.call(m, b, c)
  }, N(b), d))) : m
}
var aj, bj = m;
function cj(a) {
  return bj.a(a, 0)
}
function dj(a, b) {
  return b < a.length ? new Fd(m, n, function() {
    return S(a.item(b), bj.a(a, b + 1))
  }, m) : m
}
bj = function(a, b) {
  switch(arguments.length) {
    case 1:
      return cj.call(this, a);
    case 2:
      return dj.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
bj.b = cj;
bj.a = dj;
aj = bj;
var ej, fj = m;
function gj(a) {
  return fj.a(a, 0)
}
function hj(a, b) {
  return b < a.length ? new Fd(m, n, function() {
    return S(a[b], fj.a(a, b + 1))
  }, m) : m
}
fj = function(a, b) {
  switch(arguments.length) {
    case 1:
      return gj.call(this, a);
    case 2:
      return hj.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
fj.b = gj;
fj.a = hj;
ej = fj;
function ij(a) {
  return w(a.item) ? aj.b(a) : ej.b(a)
}
function jj(a) {
  if(w(a)) {
    var b = Aa(a.name);
    return b ? a.length : b
  }
  return a
}
function Ni(a) {
  if(a == m) {
    a = Bb
  }else {
    var b;
    b = a ? ((b = a.h & 8388608) ? b : a.za) || (a.h ? 0 : x(lb, a)) : x(lb, a);
    a = b ? L(a) : w(jj(a)) ? ij(a) : L(Ze([a]))
  }
  return a
}
Y._ = function(a) {
  if(a == m) {
    a = Bb
  }else {
    var b;
    b = a ? ((b = a.h & 8388608) ? b : a.za) || (a.h ? 0 : x(lb, a)) : x(lb, a);
    a = b ? L(a) : w(jj(a)) ? ij(a) : L(Ze([a]))
  }
  return a
};
Li._ = function(a) {
  if(a == m) {
    a = m
  }else {
    var b;
    b = a ? ((b = a.h & 8388608) ? b : a.za) || (a.h ? 0 : x(lb, a)) : x(lb, a);
    a = b ? M(a) : w(jj(a)) ? a.item(0) : a
  }
  return a
};
Y.string = function(a) {
  return Ig.b(Y(w(Mg(ui, a)) ? Ki(a) : document.createTextNode(a)))
};
Li.string = function(a) {
  return Li(w(Mg(ui, a)) ? Ki(a) : document.createTextNode(a))
};
w("undefined" != typeof NodeList) && (r = NodeList.prototype, r.za = l, r.w = function(a) {
  return ij(a)
}, r.Oa = l, r.q = function(a, b) {
  return a.item(b)
}, r.N = function(a, b, c) {
  return a.length <= b ? c : lc.a(a, b)
}, r.lb = l, r.z = function(a) {
  return a.length
});
w("undefined" != typeof StaticNodeList) && (r = StaticNodeList.prototype, r.za = l, r.w = function(a) {
  return ij(a)
}, r.Oa = l, r.q = function(a, b) {
  return a.item(b)
}, r.N = function(a, b, c) {
  return a.length <= b ? c : lc.a(a, b)
}, r.lb = l, r.z = function(a) {
  return a.length
});
w("undefined" != typeof HTMLCollection) && (r = HTMLCollection.prototype, r.za = l, r.w = function(a) {
  return ij(a)
}, r.Oa = l, r.q = function(a, b) {
  return a.item(b)
}, r.N = function(a, b, c) {
  return a.length <= b ? c : lc.a(a, b)
}, r.lb = l, r.z = function(a) {
  return a.length
});
function kj() {
  this.Xb = n
}
ka(kj, Yh);
r = kj.prototype;
r.Wb = l;
r.cc = m;
r.addEventListener = function(a, b, c, d) {
  ii(this, a, b, c, d)
};
r.removeEventListener = function(a, b, c, d) {
  li(this, a, b, c, d)
};
r.dispatchEvent = function(a) {
  var b = a.type || a, c = fi;
  if(b in c) {
    if(t(a)) {
      a = new Zh(a, this)
    }else {
      if(a instanceof Zh) {
        a.target = a.target || this
      }else {
        var d = a, a = new Zh(b, this);
        ta(a, d)
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
        a.currentTarget = f[i], d &= oi(g, f[i], a.type, l, a) && a.eb != n
      }
    }
    if(n in c) {
      if(g = c[n], g.U = g.W, b) {
        for(i = 0;!a.Ja && i < f.length && g.U;i++) {
          a.currentTarget = f[i], d &= oi(g, f[i], a.type, n, a) && a.eb != n
        }
      }else {
        for(f = this;!a.Ja && f && g.U;f = f.cc) {
          a.currentTarget = f, d &= oi(g, f, a.type, n, a) && a.eb != n
        }
      }
    }
    a = Boolean(d)
  }else {
    a = l
  }
  return a
};
function lj(a, b) {
  this.Xb = n;
  a && (this.$a && this.detach(), this.Fa = a, this.Za = ii(this.Fa, "keypress", this, b), this.Kb = ii(this.Fa, "keydown", this.qc, b, this), this.$a = ii(this.Fa, "keyup", this.rc, b, this))
}
ka(lj, kj);
r = lj.prototype;
r.Fa = m;
r.Za = m;
r.Kb = m;
r.$a = m;
r.na = -1;
r.ma = -1;
var mj = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, nj = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, oj = X || 
sh && Dh("525");
r = lj.prototype;
r.qc = function(a) {
  if(sh && (17 == this.na && !a.ctrlKey || 18 == this.na && !a.altKey)) {
    this.ma = this.na = -1
  }
  oj && !Gh(a.keyCode, this.na, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.ma = rh ? Ih(a.keyCode) : a.keyCode
};
r.rc = function() {
  this.ma = this.na = -1
};
r.handleEvent = function(a) {
  var b = a.Eb, c, d;
  X && "keypress" == a.type ? (c = this.ma, d = 13 != c && 27 != c ? b.keyCode : 0) : sh && "keypress" == a.type ? (c = this.ma, d = 0 <= b.charCode && 63232 > b.charCode && Hh(c) ? b.charCode : 0) : qh ? (c = this.ma, d = Hh(c) ? b.keyCode : 0) : (c = b.keyCode || this.ma, d = b.charCode || 0, uh && (63 == d && 224 == c) && (c = 191));
  var f = c, g = b.keyIdentifier;
  c ? 63232 <= c && c in mj ? f = mj[c] : 25 == c && a.shiftKey && (f = 9) : g && g in nj && (f = nj[g]);
  a = f == this.na;
  this.na = f;
  b = new pj(f, d, a, b);
  this.dispatchEvent(b)
};
r.Yb = q("Fa");
r.detach = function() {
  this.Za && (mi(this.Za), mi(this.Kb), mi(this.$a), this.$a = this.Kb = this.Za = m);
  this.Fa = m;
  this.ma = this.na = -1
};
function pj(a, b, c, d) {
  d && this.Sa(d, h);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
ka(pj, bi);
function qj(a) {
  return ii(new lj(a), "key", function(b) {
    (function() {
      var a = Q.a(b.keyCode, 48);
      return a || (a = Q.a(b.keyCode, 49)) || (a = Q.a(b.keyCode, 50)) || (a = Q.a(b.keyCode, 51)) || (a = Q.a(b.keyCode, 52)) || (a = Q.a(b.keyCode, 53)) || (a = Q.a(b.keyCode, 54)) || (a = Q.a(b.keyCode, 55)) || (a = Q.a(b.keyCode, 56)) || (a = Q.a(b.keyCode, 57)) || (a = Q.a(b.keyCode, 37)) || (a = Q.a(b.keyCode, 39)) || (a = Q.a(b.keyCode, 38)) || (a = Q.a(b.keyCode, 40)) || (a = Q.a(b.keyCode, 9)) || (a = Q.a(b.keyCode, 8)) || (a = Q.a(b.keyCode, 46)) || (a = Q.a(b.keyCode, 36)) ? a : (a = Q.a(b.keyCode, 
      35)) ? a : Q.a(b.keyCode, 190)
    })() || b.preventDefault();
    var c;
    c = Mg(/\./, $i(a));
    c = w(c) ? Q.a(b.keyCode, 190) : c;
    return w(c) ? b.preventDefault() : m
  })
}
function rj(a) {
  return"number" === typeof(w(Mg(/^-?\d+\.?\d[E]?-?\d*$|^-?\d+\.?\d*$/, a)) ? parseFloat(a) : a)
}
function sj(a) {
  if(Q.a((new V("\ufdd0:type")).call(m, Yi(Z((new V("\ufdd0:id")).call(m, a)))), "radio") || 0 < T($i(Z((new V("\ufdd0:id")).call(m, a))))) {
    return l
  }
  Pi(Z([J("td"), J((new V("\ufdd0:id")).call(m, a))].join("")), [J('<div class="help">Value for field '), J(Zi(Z([J("l"), J((new V("\ufdd0:id")).call(m, a))].join("")))), J(" is required</div>")].join(""));
  return n
}
;var $, tj = [], uj = 0, vj;
for(vj in $h) {
  tj[uj++] = $h[vj]
}
var wj, xj = ne.a(qd, tj);
wj = Bc.a(rg, xj);
var yj = window.document.documentElement, Aj = function zj(b) {
  return function(c) {
    b.b ? b.b(function() {
      h === $ && ($ = {}, $ = function(b, c, g, i) {
        this.qa = b;
        this.Gb = c;
        this.Ab = g;
        this.Mb = i;
        this.t = 0;
        this.h = 393472
      }, $.Ca = l, $.Qa = "domina.events/t10653", $.Pa = function(b, c) {
        return G(c, "domina.events/t10653")
      }, $.prototype.B = function(b, c) {
        var g = this.qa[c];
        return w(g) ? g : this.qa[vg(c)]
      }, $.prototype.v = function(b, c, g) {
        b = b.B(b, c);
        return w(b) ? b : g
      }, $.prototype.C = q("Mb"), $.prototype.D = function(b, c) {
        return new $(this.qa, this.Gb, this.Ab, c)
      });
      return new $(c, b, zj, m)
    }()) : b.call(m, function() {
      h === $ && ($ = function(b, c, g, i) {
        this.qa = b;
        this.Gb = c;
        this.Ab = g;
        this.Mb = i;
        this.t = 0;
        this.h = 393472
      }, $.Ca = l, $.Qa = "domina.events/t10653", $.Pa = function(b, c) {
        return G(c, "domina.events/t10653")
      }, $.prototype.B = function(b, c) {
        var g = this.qa[c];
        return w(g) ? g : this.qa[vg(c)]
      }, $.prototype.v = function(b, c, g) {
        b = b.B(b, c);
        return w(b) ? b : g
      }, $.prototype.C = q("Mb"), $.prototype.D = function(b, c) {
        return new $(this.qa, this.Gb, this.Ab, c)
      });
      return new $(c, b, zj, m)
    }());
    return l
  }
};
function Bj(a, b, c) {
  var d = Aj(c), f = pc.e(wj, b, Nc) !== Nc ? vg(b) : b;
  return Ig.b(function i(a) {
    return new Fd(m, n, function() {
      for(;;) {
        var b = L(a);
        if(b) {
          if(U(b)) {
            var c = H(b), v = T(c), u = new Gd(Array(v), 0);
            a: {
              for(var y = 0;;) {
                if(y < v) {
                  var D = A.a(c, y), D = w(n) ? ki(D, f, d, n) : ii(D, f, d, n);
                  u.add(D);
                  y += 1
                }else {
                  c = l;
                  break a
                }
              }
              c = h
            }
            return c ? Nd(u.aa(), i(I(b))) : Nd(u.aa(), m)
          }
          u = M(b);
          return S(w(n) ? ki(u, f, d, n) : ii(u, f, d, n), i(N(b)))
        }
        return m
      }
    }, m)
  }(Y(a)))
}
var Cj, Dj = m;
function Ej(a, b) {
  return Dj.e(yj, a, b)
}
Dj = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ej.call(this, a, b);
    case 3:
      return Bj(a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Dj.a = Ej;
Dj.e = function(a, b, c) {
  return Bj(a, b, c)
};
Cj = Dj;
var Fj;
Fj = ba(l);
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
function Gj(a, b) {
  var c = b || [];
  a && c.push(a);
  return c
}
var Hj = sh && "BackCompat" == document.compatMode, Ij = document.firstChild.children ? "children" : "childNodes", Jj = n;
function Kj(a) {
  function b() {
    0 <= p && (C.id = c(p, B).replace(/\\/g, ""), p = -1);
    if(0 <= v) {
      var a = v == B ? m : c(v, B);
      0 > ">~+".indexOf(a) ? C.Q = a : C.cb = a;
      v = -1
    }
    0 <= k && (C.da.push(c(k + 1, B).replace(/\\/g, "")), k = -1)
  }
  function c(b, c) {
    return la(a.slice(b, c))
  }
  for(var a = 0 <= ">~+".indexOf(a.slice(-1)) ? a + " * " : a + " ", d = [], f = -1, g = -1, i = -1, j = -1, k = -1, p = -1, v = -1, u = "", y = "", D, B = 0, W = a.length, C = m, P = m;u = y, y = a.charAt(B), B < W;B++) {
    if("\\" != u) {
      if(C || (D = B, C = {Ka:m, ra:[], Wa:[], da:[], Q:m, cb:m, id:m, Hb:function() {
        return Jj ? this.vc : this.Q
      }}, v = B), 0 <= f) {
        if("]" == y) {
          P.gb ? P.Lb = c(i || f + 1, B) : P.gb = c(f + 1, B);
          if((f = P.Lb) && ('"' == f.charAt(0) || "'" == f.charAt(0))) {
            P.Lb = f.slice(1, -1)
          }
          C.Wa.push(P);
          P = m;
          f = i = -1
        }else {
          "=" == y && (i = 0 <= "|~^$*".indexOf(u) ? u : "", P.type = i + y, P.gb = c(f + 1, B - i.length), i = B + 1)
        }
      }else {
        0 <= g ? ")" == y && (0 <= j && (P.value = c(g + 1, B)), j = g = -1) : "#" == y ? (b(), p = B + 1) : "." == y ? (b(), k = B) : ":" == y ? (b(), j = B) : "[" == y ? (b(), f = B, P = {}) : "(" == y ? (0 <= j && (P = {name:c(j + 1, B), value:m}, C.ra.push(P)), g = B) : " " == y && u != y && (b(), 0 <= j && C.ra.push({name:c(j + 1, B)}), C.ac = C.ra.length || C.Wa.length || C.da.length, C.Nd = C.Ka = c(D, B), C.vc = C.Q = C.cb ? m : C.Q || "*", C.Q && (C.Q = C.Q.toUpperCase()), d.length && d[d.length - 
        1].cb && (C.Zb = d.pop(), C.Ka = C.Zb.Ka + " " + C.Ka), d.push(C), C = m)
      }
    }
  }
  return d
}
function Lj(a, b) {
  return!a ? b : !b ? a : function() {
    return a.apply(window, arguments) && b.apply(window, arguments)
  }
}
function Mj(a) {
  return 1 == a.nodeType
}
function Nj(a, b) {
  return!a ? "" : "class" == b ? a.className || "" : "for" == b ? a.htmlFor || "" : "style" == b ? a.style.cssText || "" : (Jj ? a.getAttribute(b) : a.getAttribute(b, 2)) || ""
}
var Oj = {"*=":function(a, b) {
  return function(c) {
    return 0 <= Nj(c, a).indexOf(b)
  }
}, "^=":function(a, b) {
  return function(c) {
    return 0 == Nj(c, a).indexOf(b)
  }
}, "$=":function(a, b) {
  return function(c) {
    c = " " + Nj(c, a);
    return c.lastIndexOf(b) == c.length - b.length
  }
}, "~=":function(a, b) {
  var c = " " + b + " ";
  return function(b) {
    return 0 <= (" " + Nj(b, a) + " ").indexOf(c)
  }
}, "|=":function(a, b) {
  b = " " + b;
  return function(c) {
    c = " " + Nj(c, a);
    return c == b || 0 == c.indexOf(b + "-")
  }
}, "=":function(a, b) {
  return function(c) {
    return Nj(c, a) == b
  }
}}, Pj = "undefined" == typeof document.firstChild.nextElementSibling, Qj = !Pj ? "nextElementSibling" : "nextSibling", Rj = !Pj ? "previousElementSibling" : "previousSibling", Sj = Pj ? Mj : Fj;
function Tj(a) {
  for(;a = a[Rj];) {
    if(Sj(a)) {
      return n
    }
  }
  return l
}
function Uj(a) {
  for(;a = a[Qj];) {
    if(Sj(a)) {
      return n
    }
  }
  return l
}
function Vj(a) {
  var b = a.parentNode, c = 0, d = b[Ij], f = a._i || -1, g = b._l || -1;
  if(!d) {
    return-1
  }
  d = d.length;
  if(g == d && 0 <= f && 0 <= g) {
    return f
  }
  b._l = d;
  f = -1;
  for(b = b.firstElementChild || b.firstChild;b;b = b[Qj]) {
    Sj(b) && (b._i = ++c, a === b && (f = c))
  }
  return f
}
function Wj(a) {
  return!(Vj(a) % 2)
}
function Xj(a) {
  return Vj(a) % 2
}
var Zj = {checked:function() {
  return function(a) {
    return a.checked || a.attributes.checked
  }
}, "first-child":function() {
  return Tj
}, "last-child":function() {
  return Uj
}, "only-child":function() {
  return function(a) {
    return!Tj(a) || !Uj(a) ? n : l
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
  var c = Kj(b)[0], d = {Ea:1};
  "*" != c.Q && (d.Q = 1);
  c.da.length || (d.da = 1);
  var f = Yj(c, d);
  return function(a) {
    return!f(a)
  }
}, "nth-child":function(a, b) {
  if("odd" == b) {
    return Xj
  }
  if("even" == b) {
    return Wj
  }
  if(-1 != b.indexOf("n")) {
    var c = b.split("n", 2), d = c[0] ? "-" == c[0] ? -1 : parseInt(c[0], 10) : 1, f = c[1] ? parseInt(c[1], 10) : 0, g = 0, i = -1;
    0 < d ? 0 > f ? f = f % d && d + f % d : 0 < f && (f >= d && (g = f - f % d), f %= d) : 0 > d && (d *= -1, 0 < f && (i = f, f %= d));
    if(0 < d) {
      return function(a) {
        a = Vj(a);
        return a >= g && (0 > i || a <= i) && a % d == f
      }
    }
    b = f
  }
  var j = parseInt(b, 10);
  return function(a) {
    return Vj(a) == j
  }
}}, $j = X ? function(a) {
  var b = a.toLowerCase();
  "class" == b && (a = "className");
  return function(c) {
    return Jj ? c.getAttribute(a) : c[a] || c[b]
  }
} : function(a) {
  return function(b) {
    return b && b.getAttribute && b.hasAttribute(a)
  }
};
function Yj(a, b) {
  if(!a) {
    return Fj
  }
  var b = b || {}, c = m;
  b.Ea || (c = Lj(c, Mj));
  b.Q || "*" != a.Q && (c = Lj(c, function(b) {
    return b && b.tagName == a.Hb()
  }));
  b.da || qa(a.da, function(a, b) {
    var g = RegExp("(?:^|\\s)" + a + "(?:\\s|$)");
    c = Lj(c, function(a) {
      return g.test(a.className)
    });
    c.count = b
  });
  b.ra || qa(a.ra, function(a) {
    var b = a.name;
    Zj[b] && (c = Lj(c, Zj[b](b, a.value)))
  });
  b.Wa || qa(a.Wa, function(a) {
    var b, g = a.gb;
    a.type && Oj[a.type] ? b = Oj[a.type](g, a.Lb) : g.length && (b = $j(g));
    b && (c = Lj(c, b))
  });
  b.id || a.id && (c = Lj(c, function(b) {
    return!!b && b.id == a.id
  }));
  c || "default" in b || (c = Fj);
  return c
}
var ak = {};
function bk(a) {
  var b = ak[a.Ka];
  if(b) {
    return b
  }
  var c = a.Zb, c = c ? c.cb : "", d = Yj(a, {Ea:1}), f = "*" == a.Q, g = document.getElementsByClassName;
  if(c) {
    if(g = {Ea:1}, f && (g.Q = 1), d = Yj(a, g), "+" == c) {
      var i = d, b = function(a, b, c) {
        for(;a = a[Qj];) {
          if(!Pj || Mj(a)) {
            (!c || ck(a, c)) && i(a) && b.push(a);
            break
          }
        }
        return b
      }
    }else {
      if("~" == c) {
        var j = d, b = function(a, b, c) {
          for(a = a[Qj];a;) {
            if(Sj(a)) {
              if(c && !ck(a, c)) {
                break
              }
              j(a) && b.push(a)
            }
            a = a[Qj]
          }
          return b
        }
      }else {
        if(">" == c) {
          var k = d, k = k || Fj, b = function(a, b, c) {
            for(var d = 0, f = a[Ij];a = f[d++];) {
              Sj(a) && ((!c || ck(a, c)) && k(a, d)) && b.push(a)
            }
            return b
          }
        }
      }
    }
  }else {
    if(a.id) {
      d = !a.ac && f ? Fj : Yj(a, {Ea:1, id:1}), b = function(b, c) {
        var f = (b ? new Sh(9 == b.nodeType ? b : b.ownerDocument || b.document) : Jh || (Jh = new Sh)).Yb(a.id), g;
        if(g = f && d(f)) {
          if(!(g = 9 == b.nodeType)) {
            for(g = f.parentNode;g && g != b;) {
              g = g.parentNode
            }
            g = !!g
          }
        }
        if(g) {
          return Gj(f, c)
        }
      }
    }else {
      if(g && /\{\s*\[native code\]\s*\}/.test(String(g)) && a.da.length && !Hj) {
        var d = Yj(a, {Ea:1, da:1, id:1}), p = a.da.join(" "), b = function(a, b) {
          for(var c = Gj(0, b), f, g = 0, i = a.getElementsByClassName(p);f = i[g++];) {
            d(f, a) && c.push(f)
          }
          return c
        }
      }else {
        !f && !a.ac ? b = function(b, c) {
          for(var d = Gj(0, c), f, g = 0, i = b.getElementsByTagName(a.Hb());f = i[g++];) {
            d.push(f)
          }
          return d
        } : (d = Yj(a, {Ea:1, Q:1, id:1}), b = function(b, c) {
          for(var f = Gj(0, c), g, i = 0, j = b.getElementsByTagName(a.Hb());g = j[i++];) {
            d(g, b) && f.push(g)
          }
          return f
        })
      }
    }
  }
  return ak[a.Ka] = b
}
var dk = {}, ek = {};
function fk(a) {
  var b = Kj(la(a));
  if(1 == b.length) {
    var c = bk(b[0]);
    return function(a) {
      if(a = c(a, [])) {
        a.bb = l
      }
      return a
    }
  }
  return function(a) {
    for(var a = Gj(a), c, g, i = b.length, j, k, p = 0;p < i;p++) {
      k = [];
      c = b[p];
      g = a.length - 1;
      0 < g && (j = {}, k.bb = l);
      g = bk(c);
      for(var v = 0;c = a[v];v++) {
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
var gk = !!document.querySelectorAll && (!sh || Dh("526"));
function hk(a, b) {
  if(gk) {
    var c = ek[a];
    if(c && !b) {
      return c
    }
  }
  if(c = dk[a]) {
    return c
  }
  var c = a.charAt(0), d = -1 == a.indexOf(" ");
  0 <= a.indexOf("#") && d && (b = l);
  if(gk && !b && -1 == ">~+".indexOf(c) && (!X || -1 == a.indexOf(":")) && !(Hj && 0 <= a.indexOf(".")) && -1 == a.indexOf(":contains") && -1 == a.indexOf("|=")) {
    var f = 0 <= ">~+".indexOf(a.charAt(a.length - 1)) ? a + " *" : a;
    return ek[a] = function(b) {
      try {
        9 == b.nodeType || d || e("");
        var c = b.querySelectorAll(f);
        X ? c.pc = l : c.bb = l;
        return c
      }catch(g) {
        return hk(a, l)(b)
      }
    }
  }
  var g = a.split(/\s*,\s*/);
  return dk[a] = 2 > g.length ? fk(a) : function(a) {
    for(var b = 0, c = [], d;d = g[b++];) {
      c = c.concat(fk(d)(a))
    }
    return c
  }
}
var ik = 0, jk = X ? function(a) {
  return Jj ? a.getAttribute("_uid") || a.setAttribute("_uid", ++ik) || ik : a.uniqueID
} : function(a) {
  return a._uid || (a._uid = ++ik)
};
function ck(a, b) {
  if(!b) {
    return 1
  }
  var c = jk(a);
  return!b[c] ? b[c] = 1 : 0
}
function kk(a) {
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
  ik++;
  if(X && Jj) {
    var c = ik + "";
    a[0].setAttribute("_zipIdx", c);
    for(var d = 1, f;f = a[d];d++) {
      a[d].getAttribute("_zipIdx") != c && b.push(f), f.setAttribute("_zipIdx", c)
    }
  }else {
    if(X && a.pc) {
      try {
        for(d = 1;f = a[d];d++) {
          Mj(f) && b.push(f)
        }
      }catch(g) {
      }
    }else {
      a[0] && (a[0]._zipIdx = ik);
      for(d = 1;f = a[d];d++) {
        a[d]._zipIdx != ik && b.push(f), f._zipIdx = ik
      }
    }
  }
  return b
}
function lk(a, b) {
  if(!a) {
    return[]
  }
  if(a.constructor == Array) {
    return a
  }
  if(!t(a)) {
    return[a]
  }
  if(t(b) && (b = t(b) ? document.getElementById(b) : b, !b)) {
    return[]
  }
  var b = b || document, c = b.ownerDocument || b.documentElement;
  Jj = b.contentType && "application/xml" == b.contentType || qh && (b.doctype || "[object XMLDocument]" == c.toString()) || !!c && (X ? c.xml : b.xmlVersion || c.xmlVersion);
  return(c = hk(a)(b)) && c.bb ? c : kk(c)
}
lk.ra = Zj;
ja("goog.dom.query", lk);
ja("goog.dom.query.pseudos", lk.ra);
var mk, nk, ok = m;
function pk(a) {
  return ok.a(Mh("html", h, h)[0], a)
}
function qk(a, b) {
  h === mk && (mk = {}, mk = function(a, b, f, g) {
    this.Fb = a;
    this.hb = b;
    this.yc = f;
    this.tc = g;
    this.t = 0;
    this.h = 393216
  }, mk.Ca = l, mk.Qa = "domina.css/t11242", mk.Pa = function(a, b) {
    return G(b, "domina.css/t11242")
  }, mk.prototype.Cb = function() {
    var a = this;
    return Be.a(function(b) {
      return Ni(lk(a.Fb, b))
    }, Y(a.hb))
  }, mk.prototype.Db = function() {
    var a = this;
    return M(He(me(), Be.a(function(b) {
      return Ni(lk(a.Fb, b))
    }, Y(a.hb))))
  }, mk.prototype.C = q("tc"), mk.prototype.D = function(a, b) {
    return new mk(this.Fb, this.hb, this.yc, b)
  });
  return new mk(b, a, ok, m)
}
ok = function(a, b) {
  switch(arguments.length) {
    case 1:
      return pk.call(this, a);
    case 2:
      return qk.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ok.b = pk;
ok.a = qk;
nk = ok;
function rk() {
  var a = ne.a(Yi, Y(nk.b("input[id*='training-duration']"))), b = Y(nk.b("input[name*='training-meal']:checked")), c = Wg.b(Ye);
  Ri();
  for(var a = L(a), d = m, f = 0, g = 0;;) {
    if(g < f) {
      var i = d.q(d, g);
      bh.e(c, cc, sj.b ? sj.b(i) : sj.call(m, i));
      Q.a((new V("\ufdd0:type")).call(m, i), "number") && bh.e(c, cc, rj.b ? rj.b($i(Z((new V("\ufdd0:id")).call(m, i)))) : rj.call(m, $i(Z((new V("\ufdd0:id")).call(m, i)))));
      g += 1
    }else {
      if(a = L(a)) {
        d = a, U(d) ? (a = H(d), g = I(d), d = a, f = T(a), a = g) : (a = M(d), bh.e(c, cc, sj.b ? sj.b(a) : sj.call(m, a)), Q.a((new V("\ufdd0:type")).call(m, a), "number") && bh.e(c, cc, rj.b ? rj.b($i(Z((new V("\ufdd0:id")).call(m, a)))) : rj.call(m, $i(Z((new V("\ufdd0:id")).call(m, a))))), a = O(d), d = m, f = 0), g = 0
      }else {
        break
      }
    }
  }
  bh.e(c, cc, !Q.a(b, Bb));
  ke(Oc, Za(c)) || Pi(Z("error-msgs"), '<div class="help">Value for every training duration is required</div><div class="help">Select one option for training in time of which meal</div>');
  return ke(Oc, Za(c))
}
function sk(a) {
  Xi(Z(a), "checked");
  Wi.g(Z(a), "disabled", R(["disabled"], 0))
}
function tk(a) {
  sk([J("training-meal-breakfast"), J(a)].join(""));
  sk([J("training-meal-lunch"), J(a)].join(""));
  sk([J("training-meal-dinner"), J(a)].join(""));
  Wi.g(Z([J("training-duration"), J(a)].join("")), "value", R(["0"], 0));
  Wi.g(Z([J("training-duration"), J(a)].join("")), "readonly", R(["readonly"], 0));
  Xi(Z([J("training-meal-no"), J(a)].join("")), "disabled");
  return Wi.g(Z([J("training-meal-no"), J(a)].join("")), "checked", R(["checked"], 0))
}
function uk(a) {
  sk([J("training-meal-no"), J(a)].join(""));
  Wi.g(Z([J("training-meal-breakfast"), J(a)].join("")), "checked", R(["checked"], 0));
  Xi(Z([J("training-meal-breakfast"), J(a)].join("")), "disabled");
  Xi(Z([J("training-meal-lunch"), J(a)].join("")), "disabled");
  Xi(Z([J("training-meal-dinner"), J(a)].join("")), "disabled");
  return Xi(Z([J("training-duration"), J(a)].join("")), "readonly")
}
ja("personal_organiser.planishrane.jsplanishrane.init", function() {
  var a = document;
  if(w(w(a) ? document.getElementById : a)) {
    var b = Z("planishrane-form"), a = ne.a(Yi, Y(nk.b("input[id*='training-duration']")));
    b.onsubmit = rk;
    for(var b = L(Ze([1, 2, 3, 4, 5, 6, 7])), c = m, d = 0, f = 0;;) {
      if(f < d) {
        var g = c.q(c, f);
        Wi.g(Z([J("training-meal-no"), J(g)].join("")), "checked", R(["checked"], 0));
        Cj.e(Z([J("training-coef"), J(g)].join("")), "\ufdd0:change", function(a, b, c, d, f) {
          return function() {
            return Q.a($i(Z([J("training-coef"), J(f)].join(""))), "0") ? tk(f) : uk(f)
          }
        }(b, c, d, f, g));
        f += 1
      }else {
        var i = L(b);
        if(i) {
          g = i;
          if(U(g)) {
            b = H(g), f = I(g), c = b, d = T(b), b = f
          }else {
            var j = M(g);
            Wi.g(Z([J("training-meal-no"), J(j)].join("")), "checked", R(["checked"], 0));
            Cj.e(Z([J("training-coef"), J(j)].join("")), "\ufdd0:change", function(a, b, c, d, f) {
              return function() {
                return Q.a($i(Z([J("training-coef"), J(f)].join(""))), "0") ? tk(f) : uk(f)
              }
            }(b, c, d, f, j, g, i));
            b = O(g);
            c = m;
            d = 0
          }
          f = 0
        }else {
          break
        }
      }
    }
    a = L(a);
    b = m;
    for(f = d = 0;;) {
      if(f < d) {
        c = b.q(b, f), qj.b ? qj.b(Z((new V("\ufdd0:id")).call(m, c))) : qj.call(m, Z((new V("\ufdd0:id")).call(m, c))), f += 1
      }else {
        if(a = L(a)) {
          b = a, U(b) ? (a = H(b), d = I(b), b = a, c = T(a), a = d, d = c) : (c = M(b), qj.b ? qj.b(Z((new V("\ufdd0:id")).call(m, c))) : qj.call(m, Z((new V("\ufdd0:id")).call(m, c))), a = O(b), b = m, d = 0), f = 0
        }else {
          return m
        }
      }
    }
  }else {
    return m
  }
});
ja("personal_organiser.planishrane.jsplanishrane_final.init", function() {
  var a = document;
  if(w(w(a) ? document.getElementById : a)) {
    for(var b = ne.a(Yi, Y(nk.b("input[id*='ingredient']"))), a = ne.a(Yi, Y(nk.b("input[id*='exit-ing']"))), c = L(b), d = m, f = 0, g = 0;;) {
      if(g < f) {
        var i = d.q(d, g);
        Cj.e(Z((new V("\ufdd0:id")).call(m, i)), "\ufdd0:click", function(a, c, d, f, g) {
          return function() {
            var a = Z(Th((new V("\ufdd0:id")).call(m, g), "ingredient", "meal"));
            if(Q.a(Mg(/none/, Si(a)), "none")) {
              Ui.g(a, "display", R(["block"], 0));
              for(var a = L(b), c = m, d = 0, f = 0;;) {
                if(f < d) {
                  var i = c.q(c, f);
                  Wi.g(Z((new V("\ufdd0:id")).call(m, i)), "disabled", R(["disabled"], 0));
                  f += 1
                }else {
                  if(a = L(a)) {
                    c = a, U(c) ? (a = H(c), d = I(c), c = a, i = T(a), a = d, d = i) : (i = M(c), Wi.g(Z((new V("\ufdd0:id")).call(m, i)), "disabled", R(["disabled"], 0)), a = O(c), c = m, d = 0), f = 0
                  }else {
                    return m
                  }
                }
              }
            }else {
              return m
            }
          }
        }(c, d, f, g, i));
        g += 1
      }else {
        var j = L(c);
        if(j) {
          i = j;
          if(U(i)) {
            c = H(i), g = I(i), d = c, f = T(c), c = g
          }else {
            var k = M(i);
            Cj.e(Z((new V("\ufdd0:id")).call(m, k)), "\ufdd0:click", function(a, c, d, f, g) {
              return function() {
                var a = Z(Th((new V("\ufdd0:id")).call(m, g), "ingredient", "meal"));
                if(Q.a(Mg(/none/, Si(a)), "none")) {
                  Ui.g(a, "display", R(["block"], 0));
                  for(var a = L(b), c = m, d = 0, f = 0;;) {
                    if(f < d) {
                      var i = c.q(c, f);
                      Wi.g(Z((new V("\ufdd0:id")).call(m, i)), "disabled", R(["disabled"], 0));
                      f += 1
                    }else {
                      if(a = L(a)) {
                        c = a, U(c) ? (a = H(c), d = I(c), c = a, i = T(a), a = d, d = i) : (i = M(c), Wi.g(Z((new V("\ufdd0:id")).call(m, i)), "disabled", R(["disabled"], 0)), a = O(c), c = m, d = 0), f = 0
                      }else {
                        return m
                      }
                    }
                  }
                }else {
                  return m
                }
              }
            }(c, d, f, g, k, i, j));
            c = O(i);
            d = m;
            f = 0
          }
          g = 0
        }else {
          break
        }
      }
    }
    a = L(a);
    c = m;
    for(g = f = 0;;) {
      if(g < f) {
        i = c.q(c, g), Cj.e(Z((new V("\ufdd0:id")).call(m, i)), "\ufdd0:click", function(a, c, d, f, g) {
          return function() {
            var a = Z(Th((new V("\ufdd0:id")).call(m, g), "exit-ing", "meal"));
            if(Q.a(Mg(/block/, Si(a)), "block")) {
              Ui.g(a, "display", R(["none"], 0));
              for(var a = L(b), c = m, d = 0, f = 0;;) {
                if(f < d) {
                  var i = c.q(c, f);
                  Xi(Z((new V("\ufdd0:id")).call(m, i)), "disabled");
                  f += 1
                }else {
                  if(a = L(a)) {
                    c = a, U(c) ? (a = H(c), d = I(c), c = a, i = T(a), a = d, d = i) : (i = M(c), Xi(Z((new V("\ufdd0:id")).call(m, i)), "disabled"), a = O(c), c = m, d = 0), f = 0
                  }else {
                    return m
                  }
                }
              }
            }else {
              return m
            }
          }
        }(a, c, f, g, i)), g += 1
      }else {
        if(j = L(a)) {
          d = j, U(d) ? (a = H(d), f = I(d), c = a, d = T(a), a = f, f = d) : (i = M(d), Cj.e(Z((new V("\ufdd0:id")).call(m, i)), "\ufdd0:click", function(a, c, d, f, g) {
            return function() {
              var a = Z(Th((new V("\ufdd0:id")).call(m, g), "exit-ing", "meal"));
              if(Q.a(Mg(/block/, Si(a)), "block")) {
                Ui.g(a, "display", R(["none"], 0));
                for(var a = L(b), c = m, d = 0, f = 0;;) {
                  if(f < d) {
                    var i = c.q(c, f);
                    Xi(Z((new V("\ufdd0:id")).call(m, i)), "disabled");
                    f += 1
                  }else {
                    if(a = L(a)) {
                      c = a, U(c) ? (a = H(c), d = I(c), c = a, i = T(a), a = d, d = i) : (i = M(c), Xi(Z((new V("\ufdd0:id")).call(m, i)), "disabled"), a = O(c), c = m, d = 0), f = 0
                    }else {
                      return m
                    }
                  }
                }
              }else {
                return m
              }
            }
          }(a, c, f, g, i, d, j)), a = O(d), c = m, f = 0), g = 0
        }else {
          return m
        }
      }
    }
  }else {
    return m
  }
});
function vk() {
  var a = ne.a(Yi, Y(nk.b("select"))), b = Wg.b(Ye);
  Ri();
  for(var a = L(a), c = m, d = 0, f = 0;;) {
    if(f < d) {
      var g = c.q(c, f);
      bh.e(b, cc, !Q.a($i(Z((new V("\ufdd0:id")).call(m, g))), "- Select -"));
      f += 1
    }else {
      if(a = L(a)) {
        c = a, U(c) ? (a = H(c), f = I(c), c = a, d = T(a), a = f) : (a = M(c), bh.e(b, cc, !Q.a($i(Z((new V("\ufdd0:id")).call(m, a))), "- Select -")), a = O(c), c = m, d = 0), f = 0
      }else {
        break
      }
    }
  }
  ke(Oc, Za(b)) || Pi(Oi("error-msgs"), '<div class="help">Choose meal for every day, meal instead of "- Select -"</div>');
  return ke(Oc, Za(b))
}
ja("personal_organiser.planishrane.jsplanishrane_result.init", function() {
  var a = document;
  return w(w(a) ? document.getElementById : a) ? Z("planishrane-form").onsubmit = vk : m
});
