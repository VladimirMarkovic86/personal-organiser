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
function r(a) {
  return function() {
    return a
  }
}
var s, ba = this;
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
  a.zc = b.prototype;
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
  return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, j, k, p, u, t) {
    if("%" == p) {
      return"%"
    }
    var y = c.shift();
    "undefined" == typeof y && e(Error("[goog.string.format] Not enough arguments"));
    arguments[0] = y;
    return qa.ga[p].apply(m, arguments)
  })
}
qa.ga = {};
qa.ga.s = function(a, b, c) {
  return isNaN(c) || "" == c || a.length >= c ? a : a = -1 < b.indexOf("-", 0) ? a + Array(c - a.length + 1).join(" ") : Array(c - a.length + 1).join(" ") + a
};
qa.ga.f = function(a, b, c, d, f) {
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
qa.ga.d = function(a, b, c, d, f, g, i, j) {
  return qa.ga.f(parseInt(a, 10), b, c, d, 0, g, i, j)
};
qa.ga.i = qa.ga.d;
qa.ga.u = qa.ga.d;
function ra(a, b) {
  a != m && this.append.apply(this, arguments)
}
ra.prototype.Ma = "";
ra.prototype.append = function(a, b, c) {
  this.Ma += a;
  if(b != m) {
    for(var d = 1;d < arguments.length;d++) {
      this.Ma += arguments[d]
    }
  }
  return this
};
ra.prototype.toString = q("Ma");
var sa;
ha("cljs.core.set_print_fn_BANG_", aa());
function ta() {
  return ua(["\ufdd0:flush-on-newline", l, "\ufdd0:readably", l, "\ufdd0:meta", n, "\ufdd0:dup", n], l)
}
function x(a) {
  return a != m && a !== n
}
function va(a) {
  return a == m
}
function wa(a) {
  return x(a) ? n : l
}
function xa(a) {
  var b = w(a);
  return b ? "\ufdd0" !== a.charAt(0) : b
}
function C(a, b) {
  return a[v(b == m ? m : b)] ? l : a._ ? l : n
}
function D(a, b) {
  var c = b == m ? m : b.constructor, c = x(x(c) ? c.Ca : c) ? c.Qa : v(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""))
}
var ya = {}, za = {};
function Aa(a) {
  if(a ? a.z : a) {
    return a.z(a)
  }
  var b;
  var c = Aa[v(a == m ? m : a)];
  c ? b = c : (c = Aa._) ? b = c : e(D("ICounted.-count", a));
  return b.call(m, a)
}
function Ba(a, b) {
  if(a ? a.I : a) {
    return a.I(a, b)
  }
  var c;
  var d = Ba[v(a == m ? m : a)];
  d ? c = d : (d = Ba._) ? c = d : e(D("ICollection.-conj", a));
  return c.call(m, a, b)
}
var Ca = {}, E, Ea = m;
function Fa(a, b) {
  if(a ? a.t : a) {
    return a.t(a, b)
  }
  var c;
  var d = E[v(a == m ? m : a)];
  d ? c = d : (d = E._) ? c = d : e(D("IIndexed.-nth", a));
  return c.call(m, a, b)
}
function Ga(a, b, c) {
  if(a ? a.N : a) {
    return a.N(a, b, c)
  }
  var d;
  var f = E[v(a == m ? m : a)];
  f ? d = f : (f = E._) ? d = f : e(D("IIndexed.-nth", a));
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
Ea.e = Ga;
E = Ea;
var Ha = {};
function F(a) {
  if(a ? a.O : a) {
    return a.O(a)
  }
  var b;
  var c = F[v(a == m ? m : a)];
  c ? b = c : (c = F._) ? b = c : e(D("ISeq.-first", a));
  return b.call(m, a)
}
function G(a) {
  if(a ? a.R : a) {
    return a.R(a)
  }
  var b;
  var c = G[v(a == m ? m : a)];
  c ? b = c : (c = G._) ? b = c : e(D("ISeq.-rest", a));
  return b.call(m, a)
}
var Ia = {}, Ja, Ka = m;
function La(a, b) {
  if(a ? a.B : a) {
    return a.B(a, b)
  }
  var c;
  var d = Ja[v(a == m ? m : a)];
  d ? c = d : (d = Ja._) ? c = d : e(D("ILookup.-lookup", a));
  return c.call(m, a, b)
}
function Ma(a, b, c) {
  if(a ? a.v : a) {
    return a.v(a, b, c)
  }
  var d;
  var f = Ja[v(a == m ? m : a)];
  f ? d = f : (f = Ja._) ? d = f : e(D("ILookup.-lookup", a));
  return d.call(m, a, b, c)
}
Ka = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return La.call(this, a, b);
    case 3:
      return Ma.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ka.a = La;
Ka.e = Ma;
Ja = Ka;
function Na(a, b) {
  if(a ? a.Xa : a) {
    return a.Xa(a, b)
  }
  var c;
  var d = Na[v(a == m ? m : a)];
  d ? c = d : (d = Na._) ? c = d : e(D("IAssociative.-contains-key?", a));
  return c.call(m, a, b)
}
function Oa(a, b, c) {
  if(a ? a.ja : a) {
    return a.ja(a, b, c)
  }
  var d;
  var f = Oa[v(a == m ? m : a)];
  f ? d = f : (f = Oa._) ? d = f : e(D("IAssociative.-assoc", a));
  return d.call(m, a, b, c)
}
var Pa = {}, Qa = {};
function Ra(a) {
  if(a ? a.Rb : a) {
    return a.Rb(a)
  }
  var b;
  var c = Ra[v(a == m ? m : a)];
  c ? b = c : (c = Ra._) ? b = c : e(D("IMapEntry.-key", a));
  return b.call(m, a)
}
function Sa(a) {
  if(a ? a.Sb : a) {
    return a.Sb(a)
  }
  var b;
  var c = Sa[v(a == m ? m : a)];
  c ? b = c : (c = Sa._) ? b = c : e(D("IMapEntry.-val", a));
  return b.call(m, a)
}
var Ta = {}, Ua = {};
function Va(a) {
  if(a ? a.jc : a) {
    return a.state
  }
  var b;
  var c = Va[v(a == m ? m : a)];
  c ? b = c : (c = Va._) ? b = c : e(D("IDeref.-deref", a));
  return b.call(m, a)
}
var Wa = {};
function Xa(a) {
  if(a ? a.C : a) {
    return a.C(a)
  }
  var b;
  var c = Xa[v(a == m ? m : a)];
  c ? b = c : (c = Xa._) ? b = c : e(D("IMeta.-meta", a));
  return b.call(m, a)
}
var Ya = {};
function Za(a, b) {
  if(a ? a.D : a) {
    return a.D(a, b)
  }
  var c;
  var d = Za[v(a == m ? m : a)];
  d ? c = d : (d = Za._) ? c = d : e(D("IWithMeta.-with-meta", a));
  return c.call(m, a, b)
}
var $a = {}, ab, cb = m;
function db(a, b) {
  if(a ? a.xa : a) {
    return a.xa(a, b)
  }
  var c;
  var d = ab[v(a == m ? m : a)];
  d ? c = d : (d = ab._) ? c = d : e(D("IReduce.-reduce", a));
  return c.call(m, a, b)
}
function eb(a, b, c) {
  if(a ? a.ya : a) {
    return a.ya(a, b, c)
  }
  var d;
  var f = ab[v(a == m ? m : a)];
  f ? d = f : (f = ab._) ? d = f : e(D("IReduce.-reduce", a));
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
cb.e = eb;
ab = cb;
function fb(a, b) {
  if(a ? a.G : a) {
    return a.G(a, b)
  }
  var c;
  var d = fb[v(a == m ? m : a)];
  d ? c = d : (d = fb._) ? c = d : e(D("IEquiv.-equiv", a));
  return c.call(m, a, b)
}
function gb(a) {
  if(a ? a.J : a) {
    return a.J(a)
  }
  var b;
  var c = gb[v(a == m ? m : a)];
  c ? b = c : (c = gb._) ? b = c : e(D("IHash.-hash", a));
  return b.call(m, a)
}
var hb = {};
function ib(a) {
  if(a ? a.w : a) {
    return a.w(a)
  }
  var b;
  var c = ib[v(a == m ? m : a)];
  c ? b = c : (c = ib._) ? b = c : e(D("ISeqable.-seq", a));
  return b.call(m, a)
}
var jb = {};
function H(a, b) {
  if(a ? a.Vb : a) {
    return a.Vb(0, b)
  }
  var c;
  var d = H[v(a == m ? m : a)];
  d ? c = d : (d = H._) ? c = d : e(D("IWriter.-write", a));
  return c.call(m, a, b)
}
function kb(a) {
  if(a ? a.oc : a) {
    return m
  }
  var b;
  var c = kb[v(a == m ? m : a)];
  c ? b = c : (c = kb._) ? b = c : e(D("IWriter.-flush", a));
  return b.call(m, a)
}
function lb(a, b, c) {
  if(a ? a.Ub : a) {
    return a.Ub(a, b, c)
  }
  var d;
  var f = lb[v(a == m ? m : a)];
  f ? d = f : (f = lb._) ? d = f : e(D("IWatchable.-notify-watches", a));
  return d.call(m, a, b, c)
}
function mb(a) {
  if(a ? a.va : a) {
    return a.va(a)
  }
  var b;
  var c = mb[v(a == m ? m : a)];
  c ? b = c : (c = mb._) ? b = c : e(D("IEditableCollection.-as-transient", a));
  return b.call(m, a)
}
function nb(a, b) {
  if(a ? a.pa : a) {
    return a.pa(a, b)
  }
  var c;
  var d = nb[v(a == m ? m : a)];
  d ? c = d : (d = nb._) ? c = d : e(D("ITransientCollection.-conj!", a));
  return c.call(m, a, b)
}
function ob(a) {
  if(a ? a.Ba : a) {
    return a.Ba(a)
  }
  var b;
  var c = ob[v(a == m ? m : a)];
  c ? b = c : (c = ob._) ? b = c : e(D("ITransientCollection.-persistent!", a));
  return b.call(m, a)
}
function pb(a, b, c) {
  if(a ? a.Aa : a) {
    return a.Aa(a, b, c)
  }
  var d;
  var f = pb[v(a == m ? m : a)];
  f ? d = f : (f = pb._) ? d = f : e(D("ITransientAssociative.-assoc!", a));
  return d.call(m, a, b, c)
}
function qb(a) {
  if(a ? a.Pb : a) {
    return a.Pb()
  }
  var b;
  var c = qb[v(a == m ? m : a)];
  c ? b = c : (c = qb._) ? b = c : e(D("IChunk.-drop-first", a));
  return b.call(m, a)
}
function I(a) {
  if(a ? a.kb : a) {
    return a.kb(a)
  }
  var b;
  var c = I[v(a == m ? m : a)];
  c ? b = c : (c = I._) ? b = c : e(D("IChunkedSeq.-chunked-first", a));
  return b.call(m, a)
}
function rb(a) {
  if(a ? a.Ya : a) {
    return a.Ya(a)
  }
  var b;
  var c = rb[v(a == m ? m : a)];
  c ? b = c : (c = rb._) ? b = c : e(D("IChunkedSeq.-chunked-rest", a));
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
sb.prototype.oc = r(m);
function tb(a) {
  var b = new ra, c = new sb(b);
  a.K(a, c, ta());
  kb(c);
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
  return H(b, this.sa)
};
s.Tb = l;
s.J = function() {
  -1 === this.Va && (this.Va = vb.a ? vb.a(K.b ? K.b(this.Ia) : K.call(m, this.Ia), K.b ? K.b(this.name) : K.call(m, this.name)) : vb.call(m, K.b ? K.b(this.Ia) : K.call(m, this.Ia), K.b ? K.b(this.name) : K.call(m, this.name)));
  return this.Va
};
s.D = function(a, b) {
  return new ub(this.Ia, this.name, this.sa, this.Va, b)
};
s.C = q("ec");
var wb = m, wb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ja.e(b, this, m);
    case 3:
      return Ja.e(b, this, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ub.prototype.call = wb;
ub.prototype.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
ub.prototype.G = function(a, b) {
  return b instanceof ub ? this.sa === b.sa : n
};
ub.prototype.toString = q("sa");
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
  if(a instanceof Array || xa(a)) {
    return 0 === a.length ? m : new xb(a, 0)
  }
  if(C(Ia, a)) {
    return ib(a)
  }
  e(Error([J(a), J("is not ISeqable")].join("")))
}
function N(a) {
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
  return a == m ? m : F(a)
}
function O(a) {
  if(a != m) {
    var b;
    if(b = a) {
      b = (b = a.h & 64) ? b : a.zb
    }
    if(b) {
      return a.R(a)
    }
    a = L(a);
    return a != m ? G(a) : yb
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
    a = b ? a.fa(a) : L(O(a))
  }
  return a
}
var Q, zb = m;
function Ab(a, b) {
  var c = a === b;
  return c ? c : fb(a, b)
}
function Bb(a, b, c) {
  for(;;) {
    if(x(zb.a(a, b))) {
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
  2 < arguments.length && (d = R(Array.prototype.slice.call(arguments, 2), 0));
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
      return Cb.g(a, b, R(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
zb.o = 2;
zb.k = Cb.k;
zb.b = r(l);
zb.a = Ab;
zb.g = Cb.g;
Q = zb;
gb["null"] = r(0);
Ta["null"] = l;
za["null"] = l;
Aa["null"] = r(0);
fb["null"] = function(a, b) {
  return b == m
};
Ya["null"] = l;
Za["null"] = r(m);
Wa["null"] = l;
Xa["null"] = r(m);
Pa["null"] = l;
Date.prototype.G = function(a, b) {
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
Wa["function"] = l;
Xa["function"] = r(m);
ya["function"] = l;
gb._ = function(a) {
  return ea(a)
};
var Db, Eb = m;
function Fb(a, b) {
  var c = Aa(a);
  if(0 === c) {
    return b.A ? b.A() : b.call(m)
  }
  for(var d = E.a(a, 0), f = 1;;) {
    if(f < c) {
      d = b.a ? b.a(d, E.a(a, f)) : b.call(m, d, E.a(a, f)), f += 1
    }else {
      return d
    }
  }
}
function Gb(a, b, c) {
  for(var d = Aa(a), f = 0;;) {
    if(f < d) {
      c = b.a ? b.a(c, E.a(a, f)) : b.call(m, c, E.a(a, f)), f += 1
    }else {
      return c
    }
  }
}
function Hb(a, b, c, d) {
  for(var f = Aa(a);;) {
    if(d < f) {
      c = b.a ? b.a(c, E.a(a, d)) : b.call(m, c, E.a(a, d)), d += 1
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
    var b = a.h & 2, a = (b ? b : a.lb) ? l : a.h ? n : C(za, a)
  }else {
    a = C(za, a)
  }
  return a
}
function Ob(a) {
  if(a) {
    var b = a.h & 16, a = (b ? b : a.Oa) ? l : a.h ? n : C(Ca, a)
  }else {
    a = C(Ca, a)
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
za.array = l;
Aa.array = function(a) {
  return a.length
};
function Zb(a) {
  return N(P(a))
}
fb._ = function(a, b) {
  return a === b
};
var $b, ac = m;
function bc(a, b) {
  return a != m ? Ba(a, b) : Qb.b ? Qb.b(b) : Qb.call(m, b)
}
function cc(a, b, c) {
  for(;;) {
    if(x(c)) {
      a = ac.a(a, b), b = N(c), c = P(c)
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
  var b = N(a), a = P(a), c = N(a), a = O(a);
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
function U(a) {
  if(Nb(a)) {
    a = Aa(a)
  }else {
    a: {
      for(var a = L(a), b = 0;;) {
        if(Nb(a)) {
          a = b + Aa(a);
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
        return N(a)
      }
      e(Error("Index out of bounds"))
    }
    if(Ob(a)) {
      return E.a(a, b)
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
      return L(a) ? N(a) : c
    }
    if(Ob(a)) {
      return E.e(a, b, c)
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
    c = c ? a.t(a, Math.floor(b)) : a instanceof Array ? b < a.length ? a[b] : m : xa(a) ? b < a.length ? a[b] : m : ec.a(a, Math.floor(b))
  }
  return c
}
function lc(a, b, c) {
  if(a != m) {
    var d;
    if(d = a) {
      d = (d = a.h & 16) ? d : a.Oa
    }
    a = d ? a.N(a, Math.floor(b), c) : a instanceof Array ? b < a.length ? a[b] : c : xa(a) ? b < a.length ? a[b] : c : ec.e(a, Math.floor(b), c)
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
    c = c ? a.B(a, b) : a instanceof Array ? b < a.length ? a[b] : m : xa(a) ? b < a.length ? a[b] : m : C(Ia, a) ? Ja.a(a, b) : m
  }
  return c
}
function pc(a, b, c) {
  if(a != m) {
    var d;
    if(d = a) {
      d = (d = a.h & 256) ? d : a.kc
    }
    a = d ? a.v(a, b, c) : a instanceof Array ? b < a.length ? a[b] : c : xa(a) ? b < a.length ? a[b] : c : C(Ia, a) ? Ja.e(a, b, c) : c
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
  return a != m ? Oa(a, b, c) : tc.a ? tc.a(b, c) : tc.call(m, b, c)
}
function uc(a, b, c, d) {
  for(;;) {
    if(a = rc.e(a, b, c), x(d)) {
      b = N(d), c = Zb(d), d = P(P(d))
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
  var b = N(a), a = P(a), c = N(a), a = P(a), d = N(a), a = O(a);
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
  var b = ca(a);
  return b ? b : a ? x(x(m) ? m : a.gc) ? l : a.Md ? n : C(ya, a) : C(ya, a)
}
var zc = function xc(b, c) {
  var d;
  if(d = wc(b)) {
    d = b ? ((d = b.h & 262144) ? d : b.Ld) || (b.h ? 0 : C(Ya, b)) : C(Ya, b), d = !d
  }
  if(d) {
    if(h === sa) {
      sa = {};
      sa = function(b, c, d, f) {
        this.m = b;
        this.Nb = c;
        this.Cc = d;
        this.sc = f;
        this.r = 0;
        this.h = 393217
      };
      sa.Ca = l;
      sa.Qa = "cljs.core/t7188";
      sa.Pa = function(b, c) {
        return H(c, "cljs.core/t7188")
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
        var c = N(b), b = O(b);
        return f(c, b)
      };
      d.g = f;
      sa.prototype.call = d;
      sa.prototype.apply = function(b, c) {
        b = this;
        return b.call.apply(b, [b].concat(c.slice()))
      };
      sa.prototype.gc = l;
      sa.prototype.C = q("sc");
      sa.prototype.D = function(b, c) {
        return new sa(this.m, this.Nb, this.Cc, c)
      }
    }
    d = new sa(c, b, xc, m);
    d = xc(d, c)
  }else {
    d = Za(b, c)
  }
  return d
};
function Ac(a) {
  var b;
  b = a ? ((b = a.h & 131072) ? b : a.mc) || (a.h ? 0 : C(Wa, a)) : C(Wa, a);
  return b ? Xa(a) : m
}
var Bc = {}, Cc = 0, K, Dc = m;
function Ec(a) {
  return Dc.a(a, l)
}
function Fc(a, b) {
  var c;
  ((c = w(a)) ? b : c) ? (255 < Cc && (Bc = {}, Cc = 0), c = Bc[a], "number" !== typeof c && (c = ka(a), Bc[a] = c, Cc += 1)) : c = gb(a);
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
    var b = a.h & 16384, a = (b ? b : a.Kd) ? l : a.h ? n : C(Ua, a)
  }else {
    a = C(Ua, a)
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
      c = (c = a.r & 2048) ? c : a.hc
    }
    return c ? a.ic(a, b) : a > b ? 1 : a < b ? -1 : 0
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
var Tc, Uc = m;
function Vc(a, b) {
  var c = L(b);
  return c ? Xc.e ? Xc.e(a, N(c), P(c)) : Xc.call(m, a, N(c), P(c)) : a.A ? a.A() : a.call(m)
}
function Yc(a, b, c) {
  for(c = L(c);;) {
    if(c) {
      b = a.a ? a.a(b, N(c)) : a.call(m, b, N(c)), c = P(c)
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
      return Yc.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Uc.a = Vc;
Uc.e = Yc;
Tc = Uc;
var Xc, Zc = m;
function $c(a, b) {
  var c;
  if(c = b) {
    c = (c = b.h & 524288) ? c : b.nc
  }
  return c ? b.xa(b, a) : b instanceof Array ? Ib.a(b, a) : xa(b) ? Ib.a(b, a) : C($a, b) ? ab.a(b, a) : Tc.a(a, b)
}
function ad(a, b, c) {
  var d;
  if(d = c) {
    d = (d = c.h & 524288) ? d : c.nc
  }
  return d ? c.ya(c, a, b) : c instanceof Array ? Ib.e(c, a, b) : xa(c) ? Ib.e(c, a, b) : C($a, c) ? ab.e(c, a, b) : Tc.e(a, b, c)
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
      if(x(b)) {
        var f = a.append(ed.b(N(b))), g = P(b), a = f, b = g
      }else {
        return ed.b(a)
      }
    }
  }.call(m, new ra(ed.b(a)), b)
}
function hd(a, b) {
  var c = m;
  1 < arguments.length && (c = R(Array.prototype.slice.call(arguments, 1), 0));
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
      return hd.g(a, R(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
ed.o = 1;
ed.k = hd.k;
ed.A = r("");
ed.b = fd;
ed.g = hd.g;
dd = ed;
var J, id = m;
function jd(a) {
  return Nc(a) ? dd.g(":", R([a.substring(2, a.length)], 0)) : a == m ? "" : a.toString()
}
function kd(a, b) {
  return function(a, b) {
    for(;;) {
      if(x(b)) {
        var f = a.append(id.b(N(b))), g = P(b), a = f, b = g
      }else {
        return dd.b(a)
      }
    }
  }.call(m, new ra(id.b(a)), b)
}
function ld(a, b) {
  var c = m;
  1 < arguments.length && (c = R(Array.prototype.slice.call(arguments, 1), 0));
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
      return ld.g(a, R(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
id.o = 1;
id.k = ld.k;
id.A = r("");
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
  return Nc(a) ? a : a instanceof ub ? dd.g("\ufdd0", R([":", md.a(a, 2)], 0)) : dd.g("\ufdd0", R([":", a], 0))
}
function rd(a, b) {
  return pd.b(dd.g(a, R(["/", b], 0)))
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
  c = b ? ((c = b.h & 16777216) ? c : b.Id) || (b.h ? 0 : C(jb, b)) : C(jb, b);
  if(c) {
    a: {
      c = L(a);
      for(var d = L(b);;) {
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
  return x(c) ? l : n
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
  for(var b = 0, a = L(a);;) {
    if(a) {
      var c = N(a), b = (b + (K.b(td.b ? td.b(c) : td.call(m, c)) ^ K.b(ud.b ? ud.b(c) : ud.call(m, c)))) % 4503599627370496, a = P(a)
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
s.z = q("count");
s.O = q("Ra");
s.R = function() {
  return 1 === this.count ? yb : this.ia
};
s.G = function(a, b) {
  return Rb(a, b)
};
s.D = function(a, b) {
  return new vd(b, this.Ra, this.ia, this.count, this.l)
};
s.C = q("m");
function wd(a) {
  this.m = a;
  this.r = 0;
  this.h = 65413326
}
s = wd.prototype;
s.J = r(0);
s.fa = r(m);
s.I = function(a, b) {
  return new vd(this.m, b, m, 1, m)
};
s.toString = function() {
  return tb(this)
};
s.w = r(m);
s.z = r(0);
s.O = r(m);
s.R = function() {
  return yb
};
s.G = function(a, b) {
  return Rb(a, b)
};
s.D = function(a, b) {
  return new wd(b)
};
s.C = q("m");
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
  return this.ia == m ? m : ib(this.ia)
};
s.I = function(a, b) {
  return new zd(m, b, a, this.l)
};
s.toString = function() {
  return tb(this)
};
s.w = aa();
s.O = q("Ra");
s.R = function() {
  return this.ia == m ? yb : this.ia
};
s.G = function(a, b) {
  return Rb(a, b)
};
s.D = function(a, b) {
  return new zd(b, this.Ra, this.ia, this.l)
};
s.C = q("m");
function S(a, b) {
  var c = b == m;
  if(!c && (c = b)) {
    c = (c = b.h & 64) ? c : b.zb
  }
  return c ? new zd(m, a, b, m) : new zd(m, a, L(b), m)
}
za.string = l;
Aa.string = function(a) {
  return a.length
};
gb.string = function(a) {
  return ka(a)
};
function Ad(a) {
  this.Jb = a;
  this.r = 0;
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
        var f = b.ta;
        d = f == m ? Ja.e(b, d.Jb, m) : f[d.Jb]
      }
      return d;
    case 3:
      return b == m ? c : Ja.e(b, this.Jb, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ad.prototype.call = Bd;
Ad.prototype.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
var Cd = m, Cd = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return mc.a(b, this.toString());
    case 3:
      return mc.e(b, this.toString(), c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
String.prototype.call = Cd;
String.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
String.prototype.apply = function(a, b) {
  return 2 > b.length ? mc.a(b[0], a) : mc.e(b[0], a, b[1])
};
function Dd(a) {
  var b = a.x;
  if(a.Ob) {
    return b
  }
  a.x = b.A ? b.A() : b.call(m);
  a.Ob = l;
  return a.x
}
function Ed(a, b, c, d) {
  this.m = a;
  this.Ob = b;
  this.x = c;
  this.l = d;
  this.r = 0;
  this.h = 31850700
}
s = Ed.prototype;
s.J = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Pb(a)
};
s.fa = function(a) {
  return ib(a.R(a))
};
s.I = function(a, b) {
  return S(b, a)
};
s.toString = function() {
  return tb(this)
};
s.w = function(a) {
  return L(Dd(a))
};
s.O = function(a) {
  return N(Dd(a))
};
s.R = function(a) {
  return O(Dd(a))
};
s.G = function(a, b) {
  return Rb(a, b)
};
s.D = function(a, b) {
  return new Ed(b, this.Ob, this.x, this.l)
};
s.C = q("m");
function Fd(a, b) {
  this.ib = a;
  this.end = b;
  this.r = 0;
  this.h = 2
}
Fd.prototype.z = q("end");
Fd.prototype.add = function(a) {
  this.ib[this.end] = a;
  return this.end += 1
};
Fd.prototype.aa = function() {
  var a = new Gd(this.ib, 0, this.end);
  this.ib = m;
  return a
};
function Gd(a, b, c) {
  this.c = a;
  this.H = b;
  this.end = c;
  this.r = 0;
  this.h = 524306
}
s = Gd.prototype;
s.xa = function(a, b) {
  return Ib.n(this.c, b, this.c[this.H], this.H + 1)
};
s.ya = function(a, b, c) {
  return Ib.n(this.c, b, c, this.H)
};
s.Pb = function() {
  this.H === this.end && e(Error("-drop-first of empty chunk"));
  return new Gd(this.c, this.H + 1, this.end)
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
Id.b = Jd;
Id.a = Kd;
Id.e = Ld;
Hd = Id;
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
  return E.a(this.aa, 0)
};
s.R = function() {
  return 1 < Aa(this.aa) ? new Ic(qb(this.aa), this.oa, this.m, m) : this.oa == m ? yb : this.oa
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
s.C = q("m");
s.kb = q("aa");
s.Ya = function() {
  return this.oa == m ? yb : this.oa
};
function Md(a, b) {
  return 0 === Aa(a) ? b : new Ic(a, b, m, m)
}
function Nd(a) {
  for(var b = [];;) {
    if(L(a)) {
      b.push(N(a)), a = P(a)
    }else {
      return b
    }
  }
}
function Od(a, b) {
  if(Nb(a)) {
    return U(a)
  }
  for(var c = a, d = b, f = 0;;) {
    var g;
    g = (g = 0 < d) ? L(c) : g;
    if(x(g)) {
      c = P(c), d -= 1, f += 1
    }else {
      return f
    }
  }
}
var Qd = function Pd(b) {
  return b == m ? m : P(b) == m ? L(N(b)) : S(N(b), Pd(P(b)))
}, Rd, Sd = m;
function Td(a, b, c) {
  return S(a, S(b, c))
}
function Ud(a, b, c, d) {
  return S(a, S(b, S(c, d)))
}
function Vd(a, b, c, d, f) {
  return S(a, S(b, S(c, S(d, Qd(f)))))
}
function Wd(a, b, c, d, f) {
  var g = m;
  4 < arguments.length && (g = R(Array.prototype.slice.call(arguments, 4), 0));
  return Vd.call(this, a, b, c, d, g)
}
Wd.o = 4;
Wd.k = function(a) {
  var b = N(a), a = P(a), c = N(a), a = P(a), d = N(a), a = P(a), f = N(a), a = O(a);
  return Vd(b, c, d, f, a)
};
Wd.g = Vd;
Sd = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 1:
      return L(a);
    case 2:
      return S(a, b);
    case 3:
      return Td.call(this, a, b, c);
    case 4:
      return Ud.call(this, a, b, c, d);
    default:
      return Wd.g(a, b, c, d, R(arguments, 4))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Sd.o = 4;
Sd.k = Wd.k;
Sd.b = function(a) {
  return L(a)
};
Sd.a = function(a, b) {
  return S(a, b)
};
Sd.e = Td;
Sd.n = Ud;
Sd.g = Wd.g;
Rd = Sd;
function Xd(a, b, c) {
  var d = L(c);
  if(0 === b) {
    return a.A ? a.A() : a.call(m)
  }
  var c = F(d), f = G(d);
  if(1 === b) {
    return a.b ? a.b(c) : a.b ? a.b(c) : a.call(m, c)
  }
  var d = F(f), g = G(f);
  if(2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(m, c, d)
  }
  var f = F(g), i = G(g);
  if(3 === b) {
    return a.e ? a.e(c, d, f) : a.e ? a.e(c, d, f) : a.call(m, c, d, f)
  }
  var g = F(i), j = G(i);
  if(4 === b) {
    return a.n ? a.n(c, d, f, g) : a.n ? a.n(c, d, f, g) : a.call(m, c, d, f, g)
  }
  i = F(j);
  j = G(j);
  if(5 === b) {
    return a.ba ? a.ba(c, d, f, g, i) : a.ba ? a.ba(c, d, f, g, i) : a.call(m, c, d, f, g, i)
  }
  var a = F(j), k = G(j);
  if(6 === b) {
    return a.ea ? a.ea(c, d, f, g, i, a) : a.ea ? a.ea(c, d, f, g, i, a) : a.call(m, c, d, f, g, i, a)
  }
  var j = F(k), p = G(k);
  if(7 === b) {
    return a.wa ? a.wa(c, d, f, g, i, a, j) : a.wa ? a.wa(c, d, f, g, i, a, j) : a.call(m, c, d, f, g, i, a, j)
  }
  var k = F(p), u = G(p);
  if(8 === b) {
    return a.xb ? a.xb(c, d, f, g, i, a, j, k) : a.xb ? a.xb(c, d, f, g, i, a, j, k) : a.call(m, c, d, f, g, i, a, j, k)
  }
  var p = F(u), t = G(u);
  if(9 === b) {
    return a.yb ? a.yb(c, d, f, g, i, a, j, k, p) : a.yb ? a.yb(c, d, f, g, i, a, j, k, p) : a.call(m, c, d, f, g, i, a, j, k, p)
  }
  var u = F(t), y = G(t);
  if(10 === b) {
    return a.mb ? a.mb(c, d, f, g, i, a, j, k, p, u) : a.mb ? a.mb(c, d, f, g, i, a, j, k, p, u) : a.call(m, c, d, f, g, i, a, j, k, p, u)
  }
  var t = F(y), B = G(y);
  if(11 === b) {
    return a.nb ? a.nb(c, d, f, g, i, a, j, k, p, u, t) : a.nb ? a.nb(c, d, f, g, i, a, j, k, p, u, t) : a.call(m, c, d, f, g, i, a, j, k, p, u, t)
  }
  var y = F(B), z = G(B);
  if(12 === b) {
    return a.ob ? a.ob(c, d, f, g, i, a, j, k, p, u, t, y) : a.ob ? a.ob(c, d, f, g, i, a, j, k, p, u, t, y) : a.call(m, c, d, f, g, i, a, j, k, p, u, t, y)
  }
  var B = F(z), T = G(z);
  if(13 === b) {
    return a.pb ? a.pb(c, d, f, g, i, a, j, k, p, u, t, y, B) : a.pb ? a.pb(c, d, f, g, i, a, j, k, p, u, t, y, B) : a.call(m, c, d, f, g, i, a, j, k, p, u, t, y, B)
  }
  var z = F(T), A = G(T);
  if(14 === b) {
    return a.qb ? a.qb(c, d, f, g, i, a, j, k, p, u, t, y, B, z) : a.qb ? a.qb(c, d, f, g, i, a, j, k, p, u, t, y, B, z) : a.call(m, c, d, f, g, i, a, j, k, p, u, t, y, B, z)
  }
  var T = F(A), M = G(A);
  if(15 === b) {
    return a.rb ? a.rb(c, d, f, g, i, a, j, k, p, u, t, y, B, z, T) : a.rb ? a.rb(c, d, f, g, i, a, j, k, p, u, t, y, B, z, T) : a.call(m, c, d, f, g, i, a, j, k, p, u, t, y, B, z, T)
  }
  var A = F(M), Da = G(M);
  if(16 === b) {
    return a.sb ? a.sb(c, d, f, g, i, a, j, k, p, u, t, y, B, z, T, A) : a.sb ? a.sb(c, d, f, g, i, a, j, k, p, u, t, y, B, z, T, A) : a.call(m, c, d, f, g, i, a, j, k, p, u, t, y, B, z, T, A)
  }
  var M = F(Da), bb = G(Da);
  if(17 === b) {
    return a.tb ? a.tb(c, d, f, g, i, a, j, k, p, u, t, y, B, z, T, A, M) : a.tb ? a.tb(c, d, f, g, i, a, j, k, p, u, t, y, B, z, T, A, M) : a.call(m, c, d, f, g, i, a, j, k, p, u, t, y, B, z, T, A, M)
  }
  var Da = F(bb), Wc = G(bb);
  if(18 === b) {
    return a.ub ? a.ub(c, d, f, g, i, a, j, k, p, u, t, y, B, z, T, A, M, Da) : a.ub ? a.ub(c, d, f, g, i, a, j, k, p, u, t, y, B, z, T, A, M, Da) : a.call(m, c, d, f, g, i, a, j, k, p, u, t, y, B, z, T, A, M, Da)
  }
  bb = F(Wc);
  Wc = G(Wc);
  if(19 === b) {
    return a.vb ? a.vb(c, d, f, g, i, a, j, k, p, u, t, y, B, z, T, A, M, Da, bb) : a.vb ? a.vb(c, d, f, g, i, a, j, k, p, u, t, y, B, z, T, A, M, Da, bb) : a.call(m, c, d, f, g, i, a, j, k, p, u, t, y, B, z, T, A, M, Da, bb)
  }
  var Te = F(Wc);
  G(Wc);
  if(20 === b) {
    return a.wb ? a.wb(c, d, f, g, i, a, j, k, p, u, t, y, B, z, T, A, M, Da, bb, Te) : a.wb ? a.wb(c, d, f, g, i, a, j, k, p, u, t, y, B, z, T, A, M, Da, bb, Te) : a.call(m, c, d, f, g, i, a, j, k, p, u, t, y, B, z, T, A, M, Da, bb, Te)
  }
  e(Error("Only up to 20 arguments supported on functions"))
}
var yc, Yd = m;
function Zd(a, b) {
  var c = a.o;
  if(a.k) {
    var d = Od(b, c + 1);
    return d <= c ? Xd(a, d, b) : a.k(b)
  }
  return a.apply(a, Nd(b))
}
function $d(a, b, c) {
  b = Rd.a(b, c);
  c = a.o;
  if(a.k) {
    var d = Od(b, c + 1);
    return d <= c ? Xd(a, d, b) : a.k(b)
  }
  return a.apply(a, Nd(b))
}
function ae(a, b, c, d) {
  b = Rd.e(b, c, d);
  c = a.o;
  return a.k ? (d = Od(b, c + 1), d <= c ? Xd(a, d, b) : a.k(b)) : a.apply(a, Nd(b))
}
function be(a, b, c, d, f) {
  b = Rd.n(b, c, d, f);
  c = a.o;
  return a.k ? (d = Od(b, c + 1), d <= c ? Xd(a, d, b) : a.k(b)) : a.apply(a, Nd(b))
}
function ce(a, b, c, d, f, g) {
  b = S(b, S(c, S(d, S(f, Qd(g)))));
  c = a.o;
  return a.k ? (d = Od(b, c + 1), d <= c ? Xd(a, d, b) : a.k(b)) : a.apply(a, Nd(b))
}
function de(a, b, c, d, f, g) {
  var i = m;
  5 < arguments.length && (i = R(Array.prototype.slice.call(arguments, 5), 0));
  return ce.call(this, a, b, c, d, f, i)
}
de.o = 5;
de.k = function(a) {
  var b = N(a), a = P(a), c = N(a), a = P(a), d = N(a), a = P(a), f = N(a), a = P(a), g = N(a), a = O(a);
  return ce(b, c, d, f, g, a)
};
de.g = ce;
Yd = function(a, b, c, d, f, g) {
  switch(arguments.length) {
    case 2:
      return Zd.call(this, a, b);
    case 3:
      return $d.call(this, a, b, c);
    case 4:
      return ae.call(this, a, b, c, d);
    case 5:
      return be.call(this, a, b, c, d, f);
    default:
      return de.g(a, b, c, d, f, R(arguments, 5))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Yd.o = 5;
Yd.k = de.k;
Yd.a = Zd;
Yd.e = $d;
Yd.n = ae;
Yd.ba = be;
Yd.g = de.g;
yc = Yd;
var ee, fe = m;
function ge(a, b) {
  return!Q.a(a, b)
}
function he(a, b, c) {
  return wa(yc.n(Q, a, b, c))
}
function ie(a, b, c) {
  var d = m;
  2 < arguments.length && (d = R(Array.prototype.slice.call(arguments, 2), 0));
  return he.call(this, a, b, d)
}
ie.o = 2;
ie.k = function(a) {
  var b = N(a), a = P(a), c = N(a), a = O(a);
  return he(b, c, a)
};
ie.g = he;
fe = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return n;
    case 2:
      return ge.call(this, a, b);
    default:
      return ie.g(a, b, R(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
fe.o = 2;
fe.k = ie.k;
fe.b = r(n);
fe.a = ge;
fe.g = ie.g;
ee = fe;
function je(a, b) {
  for(;;) {
    if(L(b) == m) {
      return l
    }
    if(x(a.b ? a.b(N(b)) : a.call(m, N(b)))) {
      var c = a, d = P(b), a = c, b = d
    }else {
      return n
    }
  }
}
function ke(a) {
  return a
}
function le() {
  function a(a, c, g) {
    var i = m;
    2 < arguments.length && (i = R(Array.prototype.slice.call(arguments, 2), 0));
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
        return a.g(b, c, R(arguments, 2))
    }
    e(Error("Invalid arity: " + arguments.length))
  };
  c.o = 2;
  c.k = a.k;
  return c
}
var me, ne = m;
function oe(a, b) {
  return new Ed(m, n, function() {
    var c = L(b);
    if(c) {
      if(Hc(c)) {
        for(var d = I(c), f = U(d), g = new Fd(Array(f), 0), i = 0;;) {
          if(i < f) {
            var j = a.b ? a.b(E.a(d, i)) : a.call(m, E.a(d, i));
            g.add(j);
            i += 1
          }else {
            break
          }
        }
        return Md(g.aa(), ne.a(a, rb(c)))
      }
      return S(a.b ? a.b(N(c)) : a.call(m, N(c)), ne.a(a, O(c)))
    }
    return m
  }, m)
}
function pe(a, b, c) {
  return new Ed(m, n, function() {
    var d = L(b), f = L(c);
    return(d ? f : d) ? S(a.a ? a.a(N(d), N(f)) : a.call(m, N(d), N(f)), ne.e(a, O(d), O(f))) : m
  }, m)
}
function qe(a, b, c, d) {
  return new Ed(m, n, function() {
    var f = L(b), g = L(c), i = L(d);
    return(f ? g ? i : g : f) ? S(a.e ? a.e(N(f), N(g), N(i)) : a.call(m, N(f), N(g), N(i)), ne.n(a, O(f), O(g), O(i))) : m
  }, m)
}
function re(a, b, c, d, f) {
  return ne.a(function(b) {
    return yc.a(a, b)
  }, function i(a) {
    return new Ed(m, n, function() {
      var b = ne.a(L, a);
      return je(ke, b) ? S(ne.a(N, b), i(ne.a(O, b))) : m
    }, m)
  }($b.g(f, d, R([c, b], 0))))
}
function se(a, b, c, d, f) {
  var g = m;
  4 < arguments.length && (g = R(Array.prototype.slice.call(arguments, 4), 0));
  return re.call(this, a, b, c, d, g)
}
se.o = 4;
se.k = function(a) {
  var b = N(a), a = P(a), c = N(a), a = P(a), d = N(a), a = P(a), f = N(a), a = O(a);
  return re(b, c, d, f, a)
};
se.g = re;
ne = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 2:
      return oe.call(this, a, b);
    case 3:
      return pe.call(this, a, b, c);
    case 4:
      return qe.call(this, a, b, c, d);
    default:
      return se.g(a, b, c, d, R(arguments, 4))
  }
  e(Error("Invalid arity: " + arguments.length))
};
ne.o = 4;
ne.k = se.k;
ne.a = oe;
ne.e = pe;
ne.n = qe;
ne.g = se.g;
me = ne;
var ue = function te(b, c) {
  return new Ed(m, n, function() {
    if(0 < b) {
      var d = L(c);
      return d ? S(N(d), te(b - 1, O(d))) : m
    }
    return m
  }, m)
}, ve, we = m;
function xe(a) {
  return new Ed(m, n, function() {
    return S(a.A ? a.A() : a.call(m), we.b(a))
  }, m)
}
function ye(a, b) {
  return ue(a, we.b(b))
}
we = function(a, b) {
  switch(arguments.length) {
    case 1:
      return xe.call(this, a);
    case 2:
      return ye.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
we.b = xe;
we.a = ye;
ve = we;
function ze(a) {
  return function c(a, f) {
    return new Ed(m, n, function() {
      var g = L(a);
      return g ? S(N(g), c(O(g), f)) : L(f) ? c(N(f), O(f)) : m
    }, m)
  }(m, a)
}
var Ae, Be = m;
function Ce(a, b) {
  return ze(me.a(a, b))
}
function De(a, b, c) {
  return ze(yc.n(me, a, b, c))
}
function Ee(a, b, c) {
  var d = m;
  2 < arguments.length && (d = R(Array.prototype.slice.call(arguments, 2), 0));
  return De.call(this, a, b, d)
}
Ee.o = 2;
Ee.k = function(a) {
  var b = N(a), a = P(a), c = N(a), a = O(a);
  return De(b, c, a)
};
Ee.g = De;
Be = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ce.call(this, a, b);
    default:
      return Ee.g(a, b, R(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Be.o = 2;
Be.k = Ee.k;
Be.a = Ce;
Be.g = Ee.g;
Ae = Be;
var Ge = function Fe(b, c) {
  return new Ed(m, n, function() {
    var d = L(c);
    if(d) {
      if(Hc(d)) {
        for(var f = I(d), g = U(f), i = new Fd(Array(g), 0), j = 0;;) {
          if(j < g) {
            if(x(b.b ? b.b(E.a(f, j)) : b.call(m, E.a(f, j)))) {
              var k = E.a(f, j);
              i.add(k)
            }
            j += 1
          }else {
            break
          }
        }
        return Md(i.aa(), Fe(b, rb(d)))
      }
      f = N(d);
      d = O(d);
      return x(b.b ? b.b(f) : b.call(m, f)) ? S(f, Fe(b, d)) : Fe(b, d)
    }
    return m
  }, m)
};
function He(a, b) {
  var c;
  if(a != m) {
    if(c = a) {
      c = (c = a.r & 4) ? c : a.Fd
    }
    c ? (c = Xc.e(nb, mb(a), b), c = ob(c)) : c = Xc.e(Ba, a, b)
  }else {
    c = Xc.e($b, yb, b)
  }
  return c
}
function Ie(a, b) {
  this.q = a;
  this.c = b
}
function Je(a) {
  a = a.j;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function Ke(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var d = new Ie(a, Array(32));
    d.c[0] = c;
    c = d;
    b -= 5
  }
}
var Me = function Le(b, c, d, f) {
  var g = new Ie(d.q, d.c.slice()), i = b.j - 1 >>> c & 31;
  5 === c ? g.c[i] = f : (d = d.c[i], b = d != m ? Le(b, c - 5, d, f) : Ke(m, c - 5, f), g.c[i] = b);
  return g
};
function Ne(a, b) {
  var c = 0 <= b;
  if(c ? b < a.j : c) {
    if(b >= Je(a)) {
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
var Pe = function Oe(b, c, d, f, g) {
  var i = new Ie(d.q, d.c.slice());
  if(0 === c) {
    i.c[f & 31] = g
  }else {
    var j = f >>> c & 31, b = Oe(b, c - 5, d.c[j], f, g);
    i.c[j] = b
  }
  return i
};
function Qe(a, b, c, d, f, g) {
  this.m = a;
  this.j = b;
  this.shift = c;
  this.root = d;
  this.L = f;
  this.l = g;
  this.r = 4;
  this.h = 167668511
}
s = Qe.prototype;
s.va = function() {
  return new Re(this.j, this.shift, Se.b ? Se.b(this.root) : Se.call(m, this.root), Ue.b ? Ue.b(this.L) : Ue.call(m, this.L))
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
    return Je(a) <= b ? (a = this.L.slice(), a[b & 31] = c, new Qe(this.m, this.j, this.shift, this.root, a, m)) : new Qe(this.m, this.j, this.shift, Pe(a, this.shift, this.root, b, c), this.L, m)
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
s = Qe.prototype;
s.call = Ve;
s.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
s.I = function(a, b) {
  if(32 > this.j - Je(a)) {
    var c = this.L.slice();
    c.push(b);
    return new Qe(this.m, this.j + 1, this.shift, this.root, c, m)
  }
  var d = this.j >>> 5 > 1 << this.shift, c = d ? this.shift + 5 : this.shift;
  if(d) {
    d = new Ie(m, Array(32));
    d.c[0] = this.root;
    var f = Ke(m, this.shift, new Ie(m, this.L));
    d.c[1] = f
  }else {
    d = Me(a, this.shift, this.root, new Ie(m, this.L))
  }
  return new Qe(this.m, this.j + 1, c, d, [b], m)
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
  return 0 === this.j ? m : 32 > this.j ? R.b(this.L) : V.e ? V.e(a, 0, 0) : V.call(m, a, 0, 0)
};
s.z = q("j");
s.G = function(a, b) {
  return Rb(a, b)
};
s.D = function(a, b) {
  return new Qe(b, this.j, this.shift, this.root, this.L, this.l)
};
s.C = q("m");
s.t = function(a, b) {
  return Ne(a, b)[b & 31]
};
s.N = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.j : d) ? a.t(a, b) : c
};
var We = new Ie(m, Array(32)), Xe = new Qe(m, 0, 5, We, [], 0);
function Ye(a) {
  var b = a.length;
  if(32 > b) {
    return new Qe(m, b, 5, We, a, m)
  }
  for(var c = a.slice(0, 32), d = 32, f = mb(new Qe(m, 32, 5, We, c, m));;) {
    if(d < b) {
      c = d + 1, f = nb(f, a[d]), d = c
    }else {
      return ob(f)
    }
  }
}
function Ze(a) {
  return ob(Xc.e(nb, mb(Xe), a))
}
function $e(a) {
  var b = m;
  0 < arguments.length && (b = R(Array.prototype.slice.call(arguments, 0), 0));
  return Ze(b)
}
$e.o = 0;
$e.k = function(a) {
  a = L(a);
  return Ze(a)
};
$e.g = function(a) {
  return Ze(a)
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
  return this.H + 1 < this.T.length ? (a = V.n ? V.n(this.V, this.T, this.p, this.H + 1) : V.call(m, this.V, this.T, this.p, this.H + 1), a == m ? m : a) : a.Qb(a)
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
  return this.H + 1 < this.T.length ? (a = V.n ? V.n(this.V, this.T, this.p, this.H + 1) : V.call(m, this.V, this.T, this.p, this.H + 1), a == m ? yb : a) : a.Ya(a)
};
s.Qb = function() {
  var a = this.T.length, a = this.p + a < Aa(this.V) ? V.e ? V.e(this.V, this.p + a, 0) : V.call(m, this.V, this.p + a, 0) : m;
  return a == m ? m : a
};
s.G = function(a, b) {
  return Rb(a, b)
};
s.D = function(a, b) {
  return V.ba ? V.ba(this.V, this.T, this.p, this.H, b) : V.call(m, this.V, this.T, this.p, this.H, b)
};
s.kb = function() {
  return Hd.a(this.T, this.H)
};
s.Ya = function() {
  var a = this.T.length, a = this.p + a < Aa(this.V) ? V.e ? V.e(this.V, this.p + a, 0) : V.call(m, this.V, this.p + a, 0) : m;
  return a == m ? yb : a
};
var V, af = m;
function bf(a, b, c) {
  return new Jc(a, Ne(a, b), b, c, m, m)
}
function cf(a, b, c, d) {
  return new Jc(a, b, c, d, m, m)
}
function df(a, b, c, d, f) {
  return new Jc(a, b, c, d, f, m)
}
af = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 3:
      return bf.call(this, a, b, c);
    case 4:
      return cf.call(this, a, b, c, d);
    case 5:
      return df.call(this, a, b, c, d, f)
  }
  e(Error("Invalid arity: " + arguments.length))
};
af.e = bf;
af.n = cf;
af.ba = df;
V = af;
function Se(a) {
  return new Ie({}, a.c.slice())
}
function Ue(a) {
  var b = Array(32);
  Kc(a, 0, b, 0, a.length);
  return b
}
var ff = function ef(b, c, d, f) {
  var d = b.root.q === d.q ? d : new Ie(b.root.q, d.c.slice()), g = b.j - 1 >>> c & 31;
  if(5 === c) {
    b = f
  }else {
    var i = d.c[g], b = i != m ? ef(b, c - 5, i, f) : Ke(b.root.q, c - 5, f)
  }
  d.c[g] = b;
  return d
};
function Re(a, b, c, d) {
  this.j = a;
  this.shift = b;
  this.root = c;
  this.L = d;
  this.h = 275;
  this.r = 88
}
var gf = m, gf = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.B(this, b);
    case 3:
      return this.v(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
s = Re.prototype;
s.call = gf;
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
    return Ne(a, b)[b & 31]
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
        Je(a) <= b ? a.L[b & 31] = c : (d = function i(d, f) {
          var p = a.root.q === f.q ? f : new Ie(a.root.q, f.c.slice());
          if(0 === d) {
            p.c[b & 31] = c
          }else {
            var u = b >>> d & 31, t = i(d - 5, p.c[u]);
            p.c[u] = t
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
s.pa = function(a, b) {
  if(this.root.q) {
    if(32 > this.j - Je(a)) {
      this.L[this.j & 31] = b
    }else {
      var c = new Ie(this.root.q, this.L), d = Array(32);
      d[0] = b;
      this.L = d;
      if(this.j >>> 5 > 1 << this.shift) {
        var d = Array(32), f = this.shift + 5;
        d[0] = this.root;
        d[1] = Ke(this.root.q, this.shift, c);
        this.root = new Ie(this.root.q, d);
        this.shift = f
      }else {
        this.root = ff(a, this.shift, this.root, c)
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
    var a = this.j - Je(a), b = Array(a);
    Kc(this.L, 0, b, 0, a);
    return new Qe(m, this.j, this.shift, this.root, b, m)
  }
  e(Error("persistent! called twice"))
};
function hf() {
  this.r = 0;
  this.h = 2097152
}
hf.prototype.G = r(n);
var jf = new hf;
function kf(a, b) {
  var c;
  c = b == m ? 0 : b ? ((c = b.h & 1024) ? c : b.Gd) || (b.h ? 0 : C(Pa, b)) : C(Pa, b);
  c = c ? U(a) === U(b) ? je(ke, me.a(function(a) {
    return Q.a(mc.e(b, N(a), jf), Zb(a))
  }, a)) : m : m;
  return x(c) ? l : n
}
function lf(a, b) {
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
function mf(a, b) {
  var c = K.b(a), d = K.b(b);
  return c < d ? -1 : c > d ? 1 : 0
}
function nf(a, b, c) {
  for(var d = a.keys, f = d.length, g = a.ta, a = Ac(a), i = 0, j = mb(of);;) {
    if(i < f) {
      var k = d[i], i = i + 1, j = pb(j, k, g[k])
    }else {
      return d = zc, b = pb(j, b, c), b = ob(b), d(b, a)
    }
  }
}
function pf(a, b) {
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
function qf(a, b, c, d, f) {
  this.m = a;
  this.keys = b;
  this.ta = c;
  this.fb = d;
  this.l = f;
  this.r = 4;
  this.h = 16123663
}
s = qf.prototype;
s.va = function(a) {
  a = He(tc.A ? tc.A() : tc.call(m), a);
  return mb(a)
};
s.J = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = sd(a)
};
s.B = function(a, b) {
  return a.v(a, b, m)
};
s.v = function(a, b, c) {
  return((a = w(b)) ? lf(b, this.keys) != m : a) ? this.ta[b] : c
};
s.ja = function(a, b, c) {
  if(w(b)) {
    var d = this.fb > rf;
    if(d ? d : this.keys.length >= rf) {
      return nf(a, b, c)
    }
    if(lf(b, this.keys) != m) {
      return a = pf(this.ta, this.keys), a[b] = c, new qf(this.m, this.keys, a, this.fb + 1, m)
    }
    a = pf(this.ta, this.keys);
    d = this.keys.slice();
    a[b] = c;
    d.push(b);
    return new qf(this.m, d, a, this.fb + 1, m)
  }
  return nf(a, b, c)
};
s.Xa = function(a, b) {
  var c = w(b);
  return(c ? lf(b, this.keys) != m : c) ? l : n
};
var sf = m, sf = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.B(this, b);
    case 3:
      return this.v(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
s = qf.prototype;
s.call = sf;
s.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
s.I = function(a, b) {
  return Gc(b) ? a.ja(a, E.a(b, 0), E.a(b, 1)) : Xc.e(Ba, a, b)
};
s.toString = function() {
  return tb(this)
};
s.w = function() {
  var a = this;
  return 0 < a.keys.length ? me.a(function(b) {
    return $e.g(R([b, a.ta[b]], 0))
  }, a.keys.sort(mf)) : m
};
s.z = function() {
  return this.keys.length
};
s.G = function(a, b) {
  return kf(a, b)
};
s.D = function(a, b) {
  return new qf(b, this.keys, this.ta, this.fb, this.l)
};
s.C = q("m");
var tf = new qf(m, [], {}, 0, 0), rf = 8;
function uf(a, b) {
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
function vf(a, b, c, d) {
  this.m = a;
  this.j = b;
  this.c = c;
  this.l = d;
  this.r = 4;
  this.h = 16123663
}
s = vf.prototype;
s.va = function() {
  return new wf({}, this.c.length, this.c.slice())
};
s.J = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = sd(a)
};
s.B = function(a, b) {
  return a.v(a, b, m)
};
s.v = function(a, b, c) {
  a = uf(a, b);
  return-1 === a ? c : this.c[a + 1]
};
s.ja = function(a, b, c) {
  var d = uf(a, b);
  if(-1 === d) {
    if(this.j < xf) {
      for(var d = a.c, a = d.length, f = Array(a + 2), g = 0;;) {
        if(g < a) {
          f[g] = d[g], g += 1
        }else {
          break
        }
      }
      f[a] = b;
      f[a + 1] = c;
      return new vf(this.m, this.j + 1, f, m)
    }
    return Za(Oa(He(of, a), b, c), this.m)
  }
  if(c === this.c[d + 1]) {
    return a
  }
  b = this.c.slice();
  b[d + 1] = c;
  return new vf(this.m, this.j, b, m)
};
s.Xa = function(a, b) {
  return-1 !== uf(a, b)
};
var yf = m, yf = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.B(this, b);
    case 3:
      return this.v(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
s = vf.prototype;
s.call = yf;
s.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
s.I = function(a, b) {
  return Gc(b) ? a.ja(a, E.a(b, 0), E.a(b, 1)) : Xc.e(Ba, a, b)
};
s.toString = function() {
  return tb(this)
};
s.w = function() {
  var a = this, b;
  if(0 < a.j) {
    var c = a.c.length;
    b = function f(b) {
      return new Ed(m, n, function() {
        return b < c ? S(Ye([a.c[b], a.c[b + 1]]), f(b + 2)) : m
      }, m)
    }(0)
  }else {
    b = m
  }
  return b
};
s.z = q("j");
s.G = function(a, b) {
  return kf(a, b)
};
s.D = function(a, b) {
  return new vf(b, this.j, this.c, this.l)
};
s.C = q("m");
var zf = new vf(m, 0, [], m), xf = 8;
function ua(a, b) {
  var c = b ? a : a.slice();
  return new vf(m, c.length / 2, c, m)
}
function wf(a, b, c) {
  this.Da = a;
  this.ha = b;
  this.c = c;
  this.r = 56;
  this.h = 258
}
s = wf.prototype;
s.Aa = function(a, b, c) {
  if(x(this.Da)) {
    var d = uf(a, b);
    if(-1 === d) {
      if(this.ha + 2 <= 2 * xf) {
        return this.ha += 2, this.c.push(b), this.c.push(c), a
      }
      a = Af.a ? Af.a(this.ha, this.c) : Af.call(m, this.ha, this.c);
      return pb(a, b, c)
    }
    c !== this.c[d + 1] && (this.c[d + 1] = c);
    return a
  }
  e(Error("assoc! after persistent!"))
};
s.pa = function(a, b) {
  if(x(this.Da)) {
    var c;
    c = b ? ((c = b.h & 2048) ? c : b.lc) || (b.h ? 0 : C(Qa, b)) : C(Qa, b);
    if(c) {
      return a.Aa(a, td.b ? td.b(b) : td.call(m, b), ud.b ? ud.b(b) : ud.call(m, b))
    }
    c = L(b);
    for(var d = a;;) {
      var f = N(c);
      if(x(f)) {
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
  if(x(this.Da)) {
    return this.Da = n, new vf(m, bd((this.ha - this.ha % 2) / 2), this.c, m)
  }
  e(Error("persistent! called twice"))
};
s.B = function(a, b) {
  return a.v(a, b, m)
};
s.v = function(a, b, c) {
  if(x(this.Da)) {
    return a = uf(a, b), -1 === a ? c : this.c[a + 1]
  }
  e(Error("lookup after persistent!"))
};
s.z = function() {
  if(x(this.Da)) {
    return bd((this.ha - this.ha % 2) / 2)
  }
  e(Error("count after persistent!"))
};
function Af(a, b) {
  for(var c = mb(tf), d = 0;;) {
    if(d < a) {
      c = pb(c, b[d], b[d + 1]), d += 2
    }else {
      return c
    }
  }
}
function Bf() {
  this.ca = n
}
function Cf(a, b) {
  return w(a) ? a === b : Q.a(a, b)
}
var Df, Ef = m;
function Ff(a, b, c) {
  a = a.slice();
  a[b] = c;
  return a
}
function Gf(a, b, c, d, f) {
  a = a.slice();
  a[b] = c;
  a[d] = f;
  return a
}
Ef = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 3:
      return Ff.call(this, a, b, c);
    case 5:
      return Gf.call(this, a, b, c, d, f)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ef.e = Ff;
Ef.ba = Gf;
Df = Ef;
var Hf, If = m;
function Jf(a, b, c, d) {
  a = a.Ga(b);
  a.c[c] = d;
  return a
}
function Kf(a, b, c, d, f, g) {
  a = a.Ga(b);
  a.c[c] = d;
  a.c[f] = g;
  return a
}
If = function(a, b, c, d, f, g) {
  switch(arguments.length) {
    case 4:
      return Jf.call(this, a, b, c, d);
    case 6:
      return Kf.call(this, a, b, c, d, f, g)
  }
  e(Error("Invalid arity: " + arguments.length))
};
If.n = Jf;
If.ea = Kf;
Hf = If;
function Lf(a, b, c) {
  this.q = a;
  this.F = b;
  this.c = c
}
s = Lf.prototype;
s.Y = function(a, b, c, d, f, g) {
  var i = 1 << (c >>> b & 31), j = cd(this.F & i - 1);
  if(0 === (this.F & i)) {
    var k = cd(this.F);
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
      j[c >>> b & 31] = Mf.Y(a, b + 5, c, d, f, g);
      for(f = d = 0;;) {
        if(32 > d) {
          0 !== (this.F >>> d & 1) && (j[d] = this.c[f] != m ? Mf.Y(a, b + 5, K.b(this.c[f]), this.c[f], this.c[f + 1], g) : this.c[f + 1], f += 2), d += 1
        }else {
          break
        }
      }
      return new Nf(a, k + 1, j)
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
    return k = i.Y(a, b + 5, c, d, f, g), k === i ? this : Hf.n(this, a, 2 * j + 1, k)
  }
  if(Cf(d, k)) {
    return f === i ? this : Hf.n(this, a, 2 * j + 1, f)
  }
  g.ca = l;
  return Hf.ea(this, a, 2 * j, m, 2 * j + 1, Of.wa ? Of.wa(a, b + 5, k, i, c, d, f) : Of.call(m, a, b + 5, k, i, c, d, f))
};
s.Ta = function() {
  return Pf.b ? Pf.b(this.c) : Pf.call(m, this.c)
};
s.Ga = function(a) {
  if(a === this.q) {
    return this
  }
  var b = cd(this.F), c = Array(0 > b ? 4 : 2 * (b + 1));
  Kc(this.c, 0, c, 0, 2 * b);
  return new Lf(a, this.F, c)
};
s.X = function(a, b, c, d, f) {
  var g = 1 << (b >>> a & 31), i = cd(this.F & g - 1);
  if(0 === (this.F & g)) {
    var j = cd(this.F);
    if(16 <= j) {
      i = Array(32);
      i[b >>> a & 31] = Mf.X(a + 5, b, c, d, f);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.F >>> c & 1) && (i[c] = this.c[d] != m ? Mf.X(a + 5, K.b(this.c[d]), this.c[d], this.c[d + 1], f) : this.c[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new Nf(m, j + 1, i)
    }
    a = Array(2 * (j + 1));
    Kc(this.c, 0, a, 0, 2 * i);
    a[2 * i] = c;
    a[2 * i + 1] = d;
    Kc(this.c, 2 * i, a, 2 * (i + 1), 2 * (j - i));
    f.ca = l;
    return new Lf(m, this.F | g, a)
  }
  j = this.c[2 * i];
  g = this.c[2 * i + 1];
  if(j == m) {
    return j = g.X(a + 5, b, c, d, f), j === g ? this : new Lf(m, this.F, Df.e(this.c, 2 * i + 1, j))
  }
  if(Cf(c, j)) {
    return d === g ? this : new Lf(m, this.F, Df.e(this.c, 2 * i + 1, d))
  }
  f.ca = l;
  return new Lf(m, this.F, Df.ba(this.c, 2 * i, m, 2 * i + 1, Of.ea ? Of.ea(a + 5, j, g, b, c, d) : Of.call(m, a + 5, j, g, b, c, d)))
};
s.la = function(a, b, c, d) {
  var f = 1 << (b >>> a & 31);
  if(0 === (this.F & f)) {
    return d
  }
  var g = cd(this.F & f - 1), f = this.c[2 * g], g = this.c[2 * g + 1];
  return f == m ? g.la(a + 5, b, c, d) : Cf(c, f) ? g : d
};
var Mf = new Lf(m, 0, []);
function Nf(a, b, c) {
  this.q = a;
  this.j = b;
  this.c = c
}
s = Nf.prototype;
s.Y = function(a, b, c, d, f, g) {
  var i = c >>> b & 31, j = this.c[i];
  if(j == m) {
    return a = Hf.n(this, a, i, Mf.Y(a, b + 5, c, d, f, g)), a.j += 1, a
  }
  b = j.Y(a, b + 5, c, d, f, g);
  return b === j ? this : Hf.n(this, a, i, b)
};
s.Ta = function() {
  return Qf.b ? Qf.b(this.c) : Qf.call(m, this.c)
};
s.Ga = function(a) {
  return a === this.q ? this : new Nf(a, this.j, this.c.slice())
};
s.X = function(a, b, c, d, f) {
  var g = b >>> a & 31, i = this.c[g];
  if(i == m) {
    return new Nf(m, this.j + 1, Df.e(this.c, g, Mf.X(a + 5, b, c, d, f)))
  }
  a = i.X(a + 5, b, c, d, f);
  return a === i ? this : new Nf(m, this.j, Df.e(this.c, g, a))
};
s.la = function(a, b, c, d) {
  var f = this.c[b >>> a & 31];
  return f != m ? f.la(a + 5, b, c, d) : d
};
function Rf(a, b, c) {
  for(var b = 2 * b, d = 0;;) {
    if(d < b) {
      if(Cf(c, a[d])) {
        return d
      }
      d += 2
    }else {
      return-1
    }
  }
}
function Sf(a, b, c, d) {
  this.q = a;
  this.ka = b;
  this.j = c;
  this.c = d
}
s = Sf.prototype;
s.Y = function(a, b, c, d, f, g) {
  if(c === this.ka) {
    b = Rf(this.c, this.j, d);
    if(-1 === b) {
      if(this.c.length > 2 * this.j) {
        return a = Hf.ea(this, a, 2 * this.j, d, 2 * this.j + 1, f), g.ca = l, a.j += 1, a
      }
      c = this.c.length;
      b = Array(c + 2);
      Kc(this.c, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = f;
      g.ca = l;
      g = this.j + 1;
      a === this.q ? (this.c = b, this.j = g, a = this) : a = new Sf(this.q, this.ka, g, b);
      return a
    }
    return this.c[b + 1] === f ? this : Hf.n(this, a, b + 1, f)
  }
  return(new Lf(a, 1 << (this.ka >>> b & 31), [m, this, m, m])).Y(a, b, c, d, f, g)
};
s.Ta = function() {
  return Pf.b ? Pf.b(this.c) : Pf.call(m, this.c)
};
s.Ga = function(a) {
  if(a === this.q) {
    return this
  }
  var b = Array(2 * (this.j + 1));
  Kc(this.c, 0, b, 0, 2 * this.j);
  return new Sf(a, this.ka, this.j, b)
};
s.X = function(a, b, c, d, f) {
  return b === this.ka ? (a = Rf(this.c, this.j, c), -1 === a ? (a = this.c.length, b = Array(a + 2), Kc(this.c, 0, b, 0, a), b[a] = c, b[a + 1] = d, f.ca = l, new Sf(m, this.ka, this.j + 1, b)) : Q.a(this.c[a], d) ? this : new Sf(m, this.ka, this.j, Df.e(this.c, a + 1, d))) : (new Lf(m, 1 << (this.ka >>> a & 31), [m, this])).X(a, b, c, d, f)
};
s.la = function(a, b, c, d) {
  a = Rf(this.c, this.j, c);
  return 0 > a ? d : Cf(c, this.c[a]) ? this.c[a + 1] : d
};
var Of, Tf = m;
function Uf(a, b, c, d, f, g) {
  var i = K.b(b);
  if(i === d) {
    return new Sf(m, i, 2, [b, c, f, g])
  }
  var j = new Bf;
  return Mf.X(a, i, b, c, j).X(a, d, f, g, j)
}
function Vf(a, b, c, d, f, g, i) {
  var j = K.b(c);
  if(j === f) {
    return new Sf(m, j, 2, [c, d, g, i])
  }
  var k = new Bf;
  return Mf.Y(a, b, j, c, d, k).Y(a, b, f, g, i, k)
}
Tf = function(a, b, c, d, f, g, i) {
  switch(arguments.length) {
    case 6:
      return Uf.call(this, a, b, c, d, f, g);
    case 7:
      return Vf.call(this, a, b, c, d, f, g, i)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Tf.ea = Uf;
Tf.wa = Vf;
Of = Tf;
function Wf(a, b, c, d, f) {
  this.m = a;
  this.Z = b;
  this.p = c;
  this.$ = d;
  this.l = f;
  this.r = 0;
  this.h = 31850572
}
s = Wf.prototype;
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
  return this.$ == m ? Ye([this.Z[this.p], this.Z[this.p + 1]]) : N(this.$)
};
s.R = function() {
  return this.$ == m ? Pf.e ? Pf.e(this.Z, this.p + 2, m) : Pf.call(m, this.Z, this.p + 2, m) : Pf.e ? Pf.e(this.Z, this.p, P(this.$)) : Pf.call(m, this.Z, this.p, P(this.$))
};
s.G = function(a, b) {
  return Rb(a, b)
};
s.D = function(a, b) {
  return new Wf(b, this.Z, this.p, this.$, this.l)
};
s.C = q("m");
var Pf, Xf = m;
function Yf(a) {
  return Xf.e(a, 0, m)
}
function Zf(a, b, c) {
  if(c == m) {
    for(c = a.length;;) {
      if(b < c) {
        if(a[b] != m) {
          return new Wf(m, a, b, m, m)
        }
        var d = a[b + 1];
        if(x(d) && (d = d.Ta(), x(d))) {
          return new Wf(m, a, b + 2, d, m)
        }
        b += 2
      }else {
        return m
      }
    }
  }else {
    return new Wf(m, a, b, c, m)
  }
}
Xf = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return Yf.call(this, a);
    case 3:
      return Zf.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Xf.b = Yf;
Xf.e = Zf;
Pf = Xf;
function $f(a, b, c, d, f) {
  this.m = a;
  this.Z = b;
  this.p = c;
  this.$ = d;
  this.l = f;
  this.r = 0;
  this.h = 31850572
}
s = $f.prototype;
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
  return N(this.$)
};
s.R = function() {
  return Qf.n ? Qf.n(m, this.Z, this.p, P(this.$)) : Qf.call(m, m, this.Z, this.p, P(this.$))
};
s.G = function(a, b) {
  return Rb(a, b)
};
s.D = function(a, b) {
  return new $f(b, this.Z, this.p, this.$, this.l)
};
s.C = q("m");
var Qf, ag = m;
function bg(a) {
  return ag.n(m, a, 0, m)
}
function cg(a, b, c, d) {
  if(d == m) {
    for(d = b.length;;) {
      if(c < d) {
        var f = b[c];
        if(x(f) && (f = f.Ta(), x(f))) {
          return new $f(a, b, c + 1, f, m)
        }
        c += 1
      }else {
        return m
      }
    }
  }else {
    return new $f(a, b, c, d, m)
  }
}
ag = function(a, b, c, d) {
  switch(arguments.length) {
    case 1:
      return bg.call(this, a);
    case 4:
      return cg.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ag.b = bg;
ag.n = cg;
Qf = ag;
function dg(a, b, c, d, f, g) {
  this.m = a;
  this.j = b;
  this.root = c;
  this.P = d;
  this.S = f;
  this.l = g;
  this.r = 4;
  this.h = 16123663
}
s = dg.prototype;
s.va = function() {
  return new eg({}, this.root, this.j, this.P, this.S)
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
    return(d ? c === this.S : d) ? a : new dg(this.m, this.P ? this.j : this.j + 1, this.root, l, c, m)
  }
  d = new Bf;
  c = (this.root == m ? Mf : this.root).X(0, K.b(b), b, c, d);
  return c === this.root ? a : new dg(this.m, d.ca ? this.j + 1 : this.j, c, this.P, this.S, m)
};
s.Xa = function(a, b) {
  return b == m ? this.P : this.root == m ? n : this.root.la(0, K.b(b), b, Lc) !== Lc
};
var fg = m, fg = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.B(this, b);
    case 3:
      return this.v(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
s = dg.prototype;
s.call = fg;
s.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
s.I = function(a, b) {
  return Gc(b) ? a.ja(a, E.a(b, 0), E.a(b, 1)) : Xc.e(Ba, a, b)
};
s.toString = function() {
  return tb(this)
};
s.w = function() {
  if(0 < this.j) {
    var a = this.root != m ? this.root.Ta() : m;
    return this.P ? S(Ye([m, this.S]), a) : a
  }
  return m
};
s.z = q("j");
s.G = function(a, b) {
  return kf(a, b)
};
s.D = function(a, b) {
  return new dg(b, this.j, this.root, this.P, this.S, this.l)
};
s.C = q("m");
var of = new dg(m, 0, m, n, m, 0);
function eg(a, b, c, d, f) {
  this.q = a;
  this.root = b;
  this.count = c;
  this.P = d;
  this.S = f;
  this.r = 56;
  this.h = 258
}
s = eg.prototype;
s.Aa = function(a, b, c) {
  return gg(a, b, c)
};
s.pa = function(a, b) {
  var c;
  a: {
    if(a.q) {
      c = b ? ((c = b.h & 2048) ? c : b.lc) || (b.h ? 0 : C(Qa, b)) : C(Qa, b);
      if(c) {
        c = gg(a, td.b ? td.b(b) : td.call(m, b), ud.b ? ud.b(b) : ud.call(m, b));
        break a
      }
      c = L(b);
      for(var d = a;;) {
        var f = N(c);
        if(x(f)) {
          c = P(c), d = gg(d, td.b ? td.b(f) : td.call(m, f), ud.b ? ud.b(f) : ud.call(m, f))
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
  a.q ? (a.q = m, b = new dg(m, a.count, a.root, a.P, a.S, m)) : e(Error("persistent! called twice"));
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
function gg(a, b, c) {
  if(a.q) {
    if(b == m) {
      a.S !== c && (a.S = c), a.P || (a.count += 1, a.P = l)
    }else {
      var d = new Bf, b = (a.root == m ? Mf : a.root).Y(a.q, 0, K.b(b), b, c, d);
      b !== a.root && (a.root = b);
      d.ca && (a.count += 1)
    }
    return a
  }
  e(Error("assoc! after persistent!"))
}
var tc;
function hg(a) {
  for(var b = L(a), c = mb(of);;) {
    if(b) {
      var a = P(P(b)), d = N(b), b = Zb(b), c = pb(c, d, b), b = a
    }else {
      return ob(c)
    }
  }
}
function ig(a) {
  var b = m;
  0 < arguments.length && (b = R(Array.prototype.slice.call(arguments, 0), 0));
  return hg.call(this, b)
}
ig.o = 0;
ig.k = function(a) {
  a = L(a);
  return hg(a)
};
ig.g = hg;
tc = ig;
function td(a) {
  return Ra(a)
}
function ud(a) {
  return Sa(a)
}
function jg(a, b, c) {
  this.m = a;
  this.Ha = b;
  this.l = c;
  this.r = 4;
  this.h = 15077647
}
jg.prototype.va = function() {
  return new kg(mb(this.Ha))
};
jg.prototype.J = function(a) {
  var b = this.l;
  if(b != m) {
    return b
  }
  a: {
    b = 0;
    for(a = L(a);;) {
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
jg.prototype.B = function(a, b) {
  return a.v(a, b, m)
};
jg.prototype.v = function(a, b, c) {
  return x(Na(this.Ha, b)) ? b : c
};
var lg = m, lg = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.B(this, b);
    case 3:
      return this.v(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
s = jg.prototype;
s.call = lg;
s.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
s.I = function(a, b) {
  return new jg(this.m, qc.e(this.Ha, b, m), m)
};
s.toString = function() {
  return tb(this)
};
s.w = function() {
  return L(me.a(N, this.Ha))
};
s.z = function() {
  return Aa(this.Ha)
};
s.G = function(a, b) {
  var c;
  c = b == m ? n : b ? ((c = b.h & 4096) ? c : b.Jd) ? l : b.h ? n : C(Ta, b) : C(Ta, b);
  return c ? (c = U(a) === U(b)) ? je(function(b) {
    return mc.e(a, b, Lc) === Lc ? n : l
  }, b) : c : c
};
s.D = function(a, b) {
  return new jg(b, this.Ha, this.l)
};
s.C = q("m");
var mg = new jg(m, zf, 0);
function ng(a, b) {
  var c = a.length;
  if(c / 2 <= xf) {
    return c = b ? a : a.slice(), new jg(m, ua.a ? ua.a(c, l) : ua.call(m, c, l), m)
  }
  for(var d = 0, f = mb(mg);;) {
    if(d < c) {
      var g = d + 2, f = nb(f, a[d]), d = g
    }else {
      return ob(f)
    }
  }
}
function kg(a) {
  this.ua = a;
  this.h = 259;
  this.r = 136
}
var og = m, og = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ja.e(this.ua, b, Lc) === Lc ? m : b;
    case 3:
      return Ja.e(this.ua, b, Lc) === Lc ? c : b
  }
  e(Error("Invalid arity: " + arguments.length))
};
s = kg.prototype;
s.call = og;
s.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
s.B = function(a, b) {
  return a.v(a, b, m)
};
s.v = function(a, b, c) {
  return Ja.e(this.ua, b, Lc) === Lc ? c : b
};
s.z = function() {
  return U(this.ua)
};
s.pa = function(a, b) {
  this.ua = pb(this.ua, b, m);
  return a
};
s.Ba = function() {
  return new jg(m, ob(this.ua), m)
};
var pg, qg = m;
function rg(a) {
  var b = a instanceof xb;
  if(b ? a.c.length < xf : b) {
    for(var a = a.c, b = a.length, c = Array(2 * b), d = 0;;) {
      if(d < b) {
        var f = 2 * d;
        c[f] = a[d];
        c[f + 1] = m;
        d += 1
      }else {
        return ng.a ? ng.a(c, l) : ng.call(m, c, l)
      }
    }
  }else {
    for(c = mb(mg);;) {
      if(a != m) {
        b = a.fa(a), c = c.pa(c, a.O(a)), a = b
      }else {
        return c.Ba(c)
      }
    }
  }
}
function sg(a) {
  var b = m;
  0 < arguments.length && (b = R(Array.prototype.slice.call(arguments, 0), 0));
  return rg.call(this, b)
}
sg.o = 0;
sg.k = function(a) {
  a = L(a);
  return rg(a)
};
sg.g = rg;
qg = function(a) {
  switch(arguments.length) {
    case 0:
      return mg;
    default:
      return sg.g(R(arguments, 0))
  }
  e(Error("Invalid arity: " + arguments.length))
};
qg.o = 0;
qg.k = sg.k;
qg.A = function() {
  return mg
};
qg.g = sg.g;
pg = qg;
function tg(a) {
  if(a && x(x(m) ? m : a.Tb)) {
    return a.name
  }
  if(xa(a)) {
    return a
  }
  if(Nc(a)) {
    var b = a.lastIndexOf("/", a.length - 2);
    return 0 > b ? md.a(a, 2) : md.a(a, b + 1)
  }
  e(Error([J("Doesn't support name: "), J(a)].join("")))
}
function ug(a) {
  if(a && x(x(m) ? m : a.Tb)) {
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
  return wa(a.w(a)) ? 0 : Math.ceil((this.end - this.start) / this.step)
};
s.O = q("start");
s.R = function(a) {
  return a.w(a) != m ? new vg(this.m, this.start + this.step, this.end, this.step, m) : yb
};
s.G = function(a, b) {
  return Rb(a, b)
};
s.D = function(a, b) {
  return new vg(b, this.start, this.end, this.step, this.l)
};
s.C = q("m");
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
    if(x(c ? 0 < a : c)) {
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
  return c == m ? m : 1 === U(c) ? N(c) : Ze(c)
}
function W(a, b, c, d, f, g, i) {
  H(a, c);
  L(i) && (b.e ? b.e(N(i), a, g) : b.call(m, N(i), a, g));
  for(var c = L(P(i)), i = m, j = 0, k = 0;;) {
    if(k < j) {
      var p = i.t(i, k);
      H(a, d);
      b.e ? b.e(p, a, g) : b.call(m, p, a, g);
      k += 1
    }else {
      if(c = L(c)) {
        i = c, Hc(i) ? (c = I(i), k = rb(i), i = c, j = U(c), c = k) : (c = N(i), H(a, d), b.e ? b.e(c, a, g) : b.call(m, c, a, g), c = P(i), i = m, j = 0), k = 0
      }else {
        break
      }
    }
  }
  return H(a, f)
}
function Lg(a, b) {
  for(var c = L(b), d = m, f = 0, g = 0;;) {
    if(g < f) {
      var i = d.t(d, g);
      H(a, i);
      g += 1
    }else {
      if(c = L(c)) {
        d = c, Hc(d) ? (c = I(d), f = rb(d), d = c, i = U(c), c = f, f = i) : (i = N(d), H(a, i), c = P(d), d = m, f = 0), g = 0
      }else {
        return m
      }
    }
  }
}
function Mg(a, b) {
  var c = m;
  1 < arguments.length && (c = R(Array.prototype.slice.call(arguments, 1), 0));
  return Lg.call(this, a, c)
}
Mg.o = 1;
Mg.k = function(a) {
  var b = N(a), a = O(a);
  return Lg(b, a)
};
Mg.g = Lg;
var Ng = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"}, X = function Og(b, c, d) {
  if(b == m) {
    return H(c, "nil")
  }
  if(h === b) {
    return H(c, "#<undefined>")
  }
  var f;
  f = mc.a(d, "\ufdd0:meta");
  x(f) && (f = b ? ((f = b.h & 131072) ? f : b.mc) ? l : b.h ? n : C(Wa, b) : C(Wa, b), f = x(f) ? Ac(b) : f);
  x(f) && (H(c, "^"), Og(Ac(b), c, d), H(c, " "));
  if(b == m) {
    return H(c, "nil")
  }
  if(b.Ca) {
    return b.Pa(b, c, d)
  }
  if(f = b) {
    f = (f = b.h & 2147483648) ? f : b.M
  }
  return f ? b.K(b, c, d) : ((f = (b == m ? m : b.constructor) === Boolean) ? f : "number" === typeof b) ? H(c, "" + J(b)) : b instanceof Array ? W(c, Og, "#<Array [", ", ", "]>", d, b) : w(b) ? Nc(b) ? (H(c, ":"), d = ug(b), x(d) && Mg.g(c, R(["" + J(d), "/"], 0)), H(c, tg(b))) : b instanceof ub ? (d = ug(b), x(d) && Mg.g(c, R(["" + J(d), "/"], 0)), H(c, tg(b))) : x((new Ad("\ufdd0:readably")).call(m, d)) ? H(c, [J('"'), J(b.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(b) {
    return Ng[b]
  })), J('"')].join("")) : H(c, b) : wc(b) ? Mg.g(c, R(["#<", "" + J(b), ">"], 0)) : b instanceof Date ? (d = function(b, c) {
    for(var d = "" + J(b);;) {
      if(U(d) < c) {
        d = [J("0"), J(d)].join("")
      }else {
        return d
      }
    }
  }, Mg.g(c, R(['#inst "', "" + J(b.getUTCFullYear()), "-", d(b.getUTCMonth() + 1, 2), "-", d(b.getUTCDate(), 2), "T", d(b.getUTCHours(), 2), ":", d(b.getUTCMinutes(), 2), ":", d(b.getUTCSeconds(), 2), ".", d(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : x(b instanceof RegExp) ? Mg.g(c, R(['#"', b.source, '"'], 0)) : Mg.g(c, R(["#<", "" + J(b), ">"], 0))
};
function Pg(a) {
  var b = ta(), c = a == m;
  if(c ? c : wa(L(a))) {
    b = ""
  }else {
    var c = J, d = new ra, f = new sb(d);
    a: {
      X(N(a), f, b);
      for(var a = L(P(a)), g = m, i = 0, j = 0;;) {
        if(j < i) {
          var k = g.t(g, j);
          H(f, " ");
          X(k, f, b);
          j += 1
        }else {
          if(a = L(a)) {
            g = a, Hc(g) ? (a = I(g), i = rb(g), g = a, k = U(a), a = i, i = k) : (k = N(g), H(f, " "), X(k, f, b), a = P(g), g = m, i = 0), j = 0
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
function Qg(a) {
  var b = m;
  0 < arguments.length && (b = R(Array.prototype.slice.call(arguments, 0), 0));
  return Pg(b)
}
Qg.o = 0;
Qg.k = function(a) {
  a = L(a);
  return Pg(a)
};
Qg.g = function(a) {
  return Pg(a)
};
xb.prototype.M = l;
xb.prototype.K = function(a, b, c) {
  return W(b, X, "(", " ", ")", c, a)
};
Ic.prototype.M = l;
Ic.prototype.K = function(a, b, c) {
  return W(b, X, "(", " ", ")", c, a)
};
vf.prototype.M = l;
vf.prototype.K = function(a, b, c) {
  return W(b, function(a) {
    return W(b, X, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
Ed.prototype.M = l;
Ed.prototype.K = function(a, b, c) {
  return W(b, X, "(", " ", ")", c, a)
};
Wf.prototype.M = l;
Wf.prototype.K = function(a, b, c) {
  return W(b, X, "(", " ", ")", c, a)
};
Jc.prototype.M = l;
Jc.prototype.K = function(a, b, c) {
  return W(b, X, "(", " ", ")", c, a)
};
dg.prototype.M = l;
dg.prototype.K = function(a, b, c) {
  return W(b, function(a) {
    return W(b, X, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
jg.prototype.M = l;
jg.prototype.K = function(a, b, c) {
  return W(b, X, "#{", " ", "}", c, a)
};
Qe.prototype.M = l;
Qe.prototype.K = function(a, b, c) {
  return W(b, X, "[", " ", "]", c, a)
};
vd.prototype.M = l;
vd.prototype.K = function(a, b, c) {
  return W(b, X, "(", " ", ")", c, a)
};
wd.prototype.M = l;
wd.prototype.K = function(a, b) {
  return H(b, "()")
};
zd.prototype.M = l;
zd.prototype.K = function(a, b, c) {
  return W(b, X, "(", " ", ")", c, a)
};
vg.prototype.M = l;
vg.prototype.K = function(a, b, c) {
  return W(b, X, "(", " ", ")", c, a)
};
$f.prototype.M = l;
$f.prototype.K = function(a, b, c) {
  return W(b, X, "(", " ", ")", c, a)
};
qf.prototype.M = l;
qf.prototype.K = function(a, b, c) {
  return W(b, function(a) {
    return W(b, X, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
Qe.prototype.hc = l;
Qe.prototype.ic = function(a, b) {
  return Pc.a(a, b)
};
function Rg(a, b, c, d) {
  this.state = a;
  this.m = b;
  this.Ac = c;
  this.Bc = d;
  this.h = 2153938944;
  this.r = 2
}
s = Rg.prototype;
s.J = function(a) {
  return ea(a)
};
s.Ub = function(a, b, c) {
  for(var d = L(this.Bc), f = m, g = 0, i = 0;;) {
    if(i < g) {
      var j = f.t(f, i), k = ic.e(j, 0, m), j = ic.e(j, 1, m);
      j.n ? j.n(k, a, b, c) : j.call(m, k, a, b, c);
      i += 1
    }else {
      if(d = L(d)) {
        Hc(d) ? (f = I(d), d = rb(d), k = f, g = U(f), f = k) : (f = N(d), k = ic.e(f, 0, m), j = ic.e(f, 1, m), j.n ? j.n(k, a, b, c) : j.call(m, k, a, b, c), d = P(d), f = m, g = 0), i = 0
      }else {
        return m
      }
    }
  }
};
s.K = function(a, b, c) {
  H(b, "#<Atom: ");
  X(this.state, b, c);
  return H(b, ">")
};
s.C = q("m");
s.jc = q("state");
s.G = function(a, b) {
  return a === b
};
var Sg, Tg = m;
function Ug(a) {
  return new Rg(a, m, m, m)
}
function Vg(a, b) {
  var c;
  c = b == m ? n : b ? ((c = b.h & 64) ? c : b.zb) ? l : b.h ? n : C(Ha, b) : C(Ha, b);
  var d = c ? yc.a(tc, b) : b;
  c = mc.a(d, "\ufdd0:validator");
  d = mc.a(d, "\ufdd0:meta");
  return new Rg(a, d, c, m)
}
function Wg(a, b) {
  var c = m;
  1 < arguments.length && (c = R(Array.prototype.slice.call(arguments, 1), 0));
  return Vg.call(this, a, c)
}
Wg.o = 1;
Wg.k = function(a) {
  var b = N(a), a = O(a);
  return Vg(b, a)
};
Wg.g = Vg;
Tg = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Ug.call(this, a);
    default:
      return Wg.g(a, R(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Tg.o = 1;
Tg.k = Wg.k;
Tg.b = Ug;
Tg.g = Wg.g;
Sg = Tg;
function Xg(a, b) {
  var c = a.Ac;
  x(c) && !x(c.b ? c.b(b) : c.call(m, b)) && e(Error([J("Assert failed: "), J("Validator rejected reference state"), J("\n"), J(Qg.g(R([zc(Qb(new ub(m, "validate", "validate", 1233162959, m), new ub(m, "new-value", "new-value", 972165309, m)), tc("\ufdd0:line", 6673, "\ufdd0:column", 13))], 0)))].join("")));
  c = a.state;
  a.state = b;
  lb(a, c, b);
  return b
}
var Yg, Zg = m;
function $g(a, b) {
  return Xg(a, b.b ? b.b(a.state) : b.call(m, a.state))
}
function ah(a, b, c) {
  return Xg(a, b.a ? b.a(a.state, c) : b.call(m, a.state, c))
}
function bh(a, b, c, d) {
  return Xg(a, b.e ? b.e(a.state, c, d) : b.call(m, a.state, c, d))
}
function ch(a, b, c, d, f) {
  return Xg(a, b.n ? b.n(a.state, c, d, f) : b.call(m, a.state, c, d, f))
}
function dh(a, b, c, d, f, g) {
  return Xg(a, yc.g(b, a.state, c, d, f, R([g], 0)))
}
function eh(a, b, c, d, f, g) {
  var i = m;
  5 < arguments.length && (i = R(Array.prototype.slice.call(arguments, 5), 0));
  return dh.call(this, a, b, c, d, f, i)
}
eh.o = 5;
eh.k = function(a) {
  var b = N(a), a = P(a), c = N(a), a = P(a), d = N(a), a = P(a), f = N(a), a = P(a), g = N(a), a = O(a);
  return dh(b, c, d, f, g, a)
};
eh.g = dh;
Zg = function(a, b, c, d, f, g) {
  switch(arguments.length) {
    case 2:
      return $g.call(this, a, b);
    case 3:
      return ah.call(this, a, b, c);
    case 4:
      return bh.call(this, a, b, c, d);
    case 5:
      return ch.call(this, a, b, c, d, f);
    default:
      return eh.g(a, b, c, d, f, R(arguments, 5))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Zg.o = 5;
Zg.k = eh.k;
Zg.a = $g;
Zg.e = ah;
Zg.n = bh;
Zg.ba = ch;
Zg.g = eh.g;
Yg = Zg;
var fh;
var gh, hh, ih, jh;
function kh() {
  return ba.navigator ? ba.navigator.userAgent : m
}
jh = ih = hh = gh = n;
var lh;
if(lh = kh()) {
  var mh = ba.navigator;
  gh = 0 == lh.indexOf("Opera");
  hh = !gh && -1 != lh.indexOf("MSIE");
  ih = !gh && -1 != lh.indexOf("WebKit");
  jh = !gh && !ih && "Gecko" == mh.product
}
var nh = gh, Y = hh, oh = jh, ph = ih, qh = ba.navigator, rh = -1 != (qh && qh.platform || "").indexOf("Mac"), sh;
a: {
  var th = "", uh;
  if(nh && ba.opera) {
    var vh = ba.opera.version, th = "function" == typeof vh ? vh() : vh
  }else {
    if(oh ? uh = /rv\:([^\);]+)(\)|;)/ : Y ? uh = /MSIE\s+([^\);]+)(\)|;)/ : ph && (uh = /WebKit\/(\S+)/), uh) {
      var wh = uh.exec(kh()), th = wh ? wh[1] : ""
    }
  }
  if(Y) {
    var xh, yh = ba.document;
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
    for(var c = ja(String(sh)).split("."), d = ja(String(a)).split("."), f = Math.max(c.length, d.length), g = 0;0 == b && g < f;g++) {
      var i = c[g] || "", j = d[g] || "", k = RegExp("(\\d*)(\\D*)", "g"), p = RegExp("(\\d*)(\\D*)", "g");
      do {
        var u = k.exec(i) || ["", "", ""], t = p.exec(j) || ["", "", ""];
        if(0 == u[0].length && 0 == t[0].length) {
          break
        }
        b = ((0 == u[1].length ? 0 : parseInt(u[1], 10)) < (0 == t[1].length ? 0 : parseInt(t[1], 10)) ? -1 : (0 == u[1].length ? 0 : parseInt(u[1], 10)) > (0 == t[1].length ? 0 : parseInt(t[1], 10)) ? 1 : 0) || ((0 == u[2].length) < (0 == t[2].length) ? -1 : (0 == u[2].length) > (0 == t[2].length) ? 1 : 0) || (u[2] < t[2] ? -1 : u[2] > t[2] ? 1 : 0)
      }while(0 == b)
    }
    b = zh[a] = 0 <= b
  }
  return b
}
var Bh = {};
function Ch() {
  return Bh[9] || (Bh[9] = Y && !!document.documentMode && 9 <= document.documentMode)
}
;!Y || Ch();
!oh && !Y || Y && Ch() || oh && Ah("1.9.1");
Y && Ah("9");
function Dh(a, b) {
  var c = b || document;
  return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : c.getElementsByClassName ? c.getElementsByClassName(a) : Eh("*", a, b)
}
function Fh(a) {
  var b = document, c = m;
  return(c = b.querySelectorAll && b.querySelector ? b.querySelector("." + a) : Dh(a, h)[0]) || m
}
function Eh(a, b, c) {
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
function Gh(a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : m
}
function Hh(a) {
  this.Bb = a || ba.document || document
}
s = Hh.prototype;
s.Yb = function(a) {
  return w(a) ? this.Bb.getElementById(a) : a
};
s.createElement = function(a) {
  return this.Bb.createElement(a)
};
s.createTextNode = function(a) {
  return this.Bb.createTextNode(a)
};
s.appendChild = function(a, b) {
  a.appendChild(b)
};
s.append = function(a, b) {
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
          for(var u = Array(p), t = 0;t < p;t++) {
            u[t] = j[t]
          }
          j = u
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
function Ih(a) {
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
;!Y || Ch();
var Jh = !Y || Ch(), Kh = Y && !Ah("8");
!ph || Ah("528");
oh && Ah("1.9b") || Y && Ah("8") || nh && Ah("9.5") || ph && Ah("528");
oh && !Ah("8") || Y && Ah("9");
function Lh() {
  this.Xb = n
}
;function Mh(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
Mh.prototype.Ja = n;
Mh.prototype.defaultPrevented = n;
Mh.prototype.eb = l;
Mh.prototype.preventDefault = function() {
  this.defaultPrevented = l;
  this.eb = n
};
var Nh = {Ic:"click", Nc:"dblclick", gd:"mousedown", ld:"mouseup", kd:"mouseover", jd:"mouseout", hd:"mousemove", xd:"selectstart", bd:"keypress", ad:"keydown", cd:"keyup", Gc:"blur", Vc:"focus", Oc:"deactivate", Wc:Y ? "focusin" : "DOMFocusIn", Xc:Y ? "focusout" : "DOMFocusOut", Hc:"change", wd:"select", yd:"submit", $c:"input", sd:"propertychange", Sc:"dragstart", Pc:"dragenter", Rc:"dragover", Qc:"dragleave", Tc:"drop", Cd:"touchstart", Bd:"touchmove", Ad:"touchend", zd:"touchcancel", Kc:"contextmenu", 
Uc:"error", Zc:"help", dd:"load", ed:"losecapture", td:"readystatechange", ud:"resize", vd:"scroll", Ed:"unload", Yc:"hashchange", od:"pagehide", pd:"pageshow", rd:"popstate", Lc:"copy", qd:"paste", Mc:"cut", Dc:"beforecopy", Ec:"beforecut", Fc:"beforepaste", nd:"online", md:"offline", fd:"message", Jc:"connect", Dd:ph ? "webkitTransitionEnd" : nh ? "oTransitionEnd" : "transitionend"};
function Oh(a) {
  Oh[" "](a);
  return a
}
Oh[" "] = function() {
};
function Ph(a, b) {
  a && this.Sa(a, b)
}
ia(Ph, Mh);
s = Ph.prototype;
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
s.ctrlKey = n;
s.altKey = n;
s.shiftKey = n;
s.metaKey = n;
s.wc = n;
s.Eb = m;
s.Sa = function(a, b) {
  var c = this.type = a.type;
  Mh.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(oh) {
      var f;
      a: {
        try {
          Oh(d.nodeName);
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
s.preventDefault = function() {
  Ph.zc.preventDefault.call(this);
  var a = this.Eb;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = n, Kh) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
function Qh() {
}
var Rh = 0;
s = Qh.prototype;
s.key = 0;
s.La = n;
s.jb = n;
s.Sa = function(a, b, c, d, f, g) {
  ca(a) ? this.$b = l : a && a.handleEvent && ca(a.handleEvent) ? this.$b = n : e(Error("Invalid listener argument"));
  this.Ua = a;
  this.dc = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.Ib = g;
  this.jb = n;
  this.key = ++Rh;
  this.La = n
};
s.handleEvent = function(a) {
  return this.$b ? this.Ua.call(this.Ib || this.src, a) : this.Ua.handleEvent.call(this.Ua, a)
};
var Sh = {}, Th = {}, Uh = {}, Vh = {};
function Wh(a, b, c, d, f) {
  if(b) {
    if("array" == v(b)) {
      for(var g = 0;g < b.length;g++) {
        Wh(a, b[g], c, d, f)
      }
      return m
    }
    var d = !!d, i = Th;
    b in i || (i[b] = {W:0, U:0});
    i = i[b];
    d in i || (i[d] = {W:0, U:0}, i.W++);
    var i = i[d], j = ea(a), k;
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
    var p = Xh, u = Jh ? function(a) {
      return p.call(u.src, u.key, a)
    } : function(a) {
      a = p.call(u.src, u.key, a);
      if(!a) {
        return a
      }
    }, g = u;
    g.src = a;
    i = new Qh;
    i.Sa(c, g, a, b, d, f);
    c = i.key;
    g.key = c;
    k.push(i);
    Sh[c] = i;
    Uh[j] || (Uh[j] = []);
    Uh[j].push(i);
    a.addEventListener ? (a == ba || !a.Wb) && a.addEventListener(b, g, d) : a.attachEvent(b in Vh ? Vh[b] : Vh[b] = "on" + b, g);
    return c
  }
  e(Error("Invalid event type"))
}
function Yh(a, b, c, d, f) {
  if("array" == v(b)) {
    for(var g = 0;g < b.length;g++) {
      Yh(a, b[g], c, d, f)
    }
    return m
  }
  a = Wh(a, b, c, d, f);
  Sh[a].jb = l;
  return a
}
function Zh(a, b, c, d, f) {
  if("array" == v(b)) {
    for(var g = 0;g < b.length;g++) {
      Zh(a, b[g], c, d, f)
    }
  }else {
    d = !!d;
    a: {
      g = Th;
      if(b in g && (g = g[b], d in g && (g = g[d], a = ea(a), g[a]))) {
        a = g[a];
        break a
      }
      a = m
    }
    if(a) {
      for(g = 0;g < a.length;g++) {
        if(a[g].Ua == c && a[g].capture == d && a[g].Ib == f) {
          $h(a[g].key);
          break
        }
      }
    }
  }
}
function $h(a) {
  if(Sh[a]) {
    var b = Sh[a];
    if(!b.La) {
      var c = b.src, d = b.type, f = b.dc, g = b.capture;
      c.removeEventListener ? (c == ba || !c.Wb) && c.removeEventListener(d, f, g) : c.detachEvent && c.detachEvent(d in Vh ? Vh[d] : Vh[d] = "on" + d, f);
      c = ea(c);
      if(Uh[c]) {
        var f = Uh[c], i = ma(f, b);
        0 <= i && la.splice.call(f, i, 1);
        0 == f.length && delete Uh[c]
      }
      b.La = l;
      if(b = Th[d][g][c]) {
        b.bc = l, ai(d, g, c, b)
      }
      delete Sh[a]
    }
  }
}
function ai(a, b, c, d) {
  if(!d.ab && d.bc) {
    for(var f = 0, g = 0;f < d.length;f++) {
      d[f].La ? d[f].dc.src = m : (f != g && (d[g] = d[f]), g++)
    }
    d.length = g;
    d.bc = n;
    0 == g && (delete Th[a][b][c], Th[a][b].W--, 0 == Th[a][b].W && (delete Th[a][b], Th[a].W--), 0 == Th[a].W && delete Th[a])
  }
}
function bi(a, b, c, d, f) {
  var g = 1, b = ea(b);
  if(a[b]) {
    a.U--;
    a = a[b];
    a.ab ? a.ab++ : a.ab = 1;
    try {
      for(var i = a.length, j = 0;j < i;j++) {
        var k = a[j];
        k && !k.La && (g &= ci(k, f) !== n)
      }
    }finally {
      a.ab--, ai(c, d, b, a)
    }
  }
  return Boolean(g)
}
function ci(a, b) {
  a.jb && $h(a.key);
  return a.handleEvent(b)
}
function Xh(a, b) {
  if(!Sh[a]) {
    return l
  }
  var c = Sh[a], d = c.type, f = Th;
  if(!(d in f)) {
    return l
  }
  var f = f[d], g, i;
  if(!Jh) {
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
          }catch(u) {
            p = l
          }
        }
        if(p || g.returnValue == h) {
          g.returnValue = l
        }
      }
    }
    p = new Ph;
    p.Sa(g, this);
    g = l;
    try {
      if(j) {
        for(var t = [], y = p.currentTarget;y;y = y.parentNode) {
          t.push(y)
        }
        i = f[l];
        i.U = i.W;
        for(var B = t.length - 1;!p.Ja && 0 <= B && i.U;B--) {
          p.currentTarget = t[B], g &= bi(i, t[B], d, l, p)
        }
        if(k) {
          i = f[n];
          i.U = i.W;
          for(B = 0;!p.Ja && B < t.length && i.U;B++) {
            p.currentTarget = t[B], g &= bi(i, t[B], d, n, p)
          }
        }
      }else {
        g = ci(c, p)
      }
    }finally {
      t && (t.length = 0)
    }
    return g
  }
  d = new Ph(b, this);
  return g = ci(c, d)
}
;var di, ei = document.createElement("div");
ei.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
var fi = Q.a(ei.firstChild.nodeType, 3), gi = Q.a(ei.getElementsByTagName("tbody").length, 0);
Q.a(ei.getElementsByTagName("link").length, 0);
var hi = /<|&#?\w+;/, ii = /^\s+/, ji = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i, ki = /<([\w:]+)/, li = /<tbody/i, mi = Ye([1, "<select multiple='multiple'>", "</select>"]), ni = Ye([1, "<table>", "</table>"]), oi = Ye([3, "<table><tbody><tr>", "</tr></tbody></table>"]), pi;
a: {
  for(var qi = "col \ufdd0:default tfoot caption optgroup legend area td thead th option tbody tr colgroup".split(" "), ri = [Ye([2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"]), Ye([0, "", ""]), ni, ni, mi, Ye([1, "<fieldset>", "</fieldset>"]), Ye([1, "<map>", "</map>"]), oi, ni, oi, mi, ni, Ye([2, "<table><tbody>", "</tbody></table>"]), ni], si = qi.length, ti = 0, ui = mb(of);;) {
    if(ti < si) {
      var vi = ti + 1, wi = pb(ui, qi[ti], ri[ti]), ti = vi, ui = wi
    }else {
      pi = ob(ui);
      break a
    }
  }
  pi = h
}
function xi(a) {
  var b;
  xa(ji) ? b = a.replace(RegExp(String(ji).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), "<$1></$2>") : x(ji.hasOwnProperty("source")) ? b = a.replace(RegExp(ji.source, "g"), "<$1></$2>") : e([J("Invalid match arg: "), J(ji)].join(""));
  var c = ("" + J(Zb(Kg(ki, b)))).toLowerCase(), d = mc.e(pi, c, (new Ad("\ufdd0:default")).call(m, pi)), a = ic.e(d, 0, m), f = ic.e(d, 1, m), d = ic.e(d, 2, m);
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
  if(x(gi)) {
    a: {
      d = a;
      g = wa(Kg(li, b));
      ((c = Q.a(c, "table")) ? g : c) ? (f = d.firstChild, f = x(f) ? d.firstChild.childNodes : f) : f = ((f = Q.a(f, "<table>")) ? g : f) ? divchildNodes : Xe;
      for(var f = L(f), d = m, i = g = 0;;) {
        if(i < g) {
          var c = d.t(d, i), j = Q.a(c.nodeName, "tbody");
          (j ? Q.a(c.childNodes.length, 0) : j) && c.parentNode.removeChild(c);
          i += 1
        }else {
          if(f = L(f)) {
            Hc(f) ? (d = I(f), f = rb(f), c = d, g = U(d), d = c) : (c = N(f), ((d = Q.a(c.nodeName, "tbody")) ? Q.a(c.childNodes.length, 0) : d) && c.parentNode.removeChild(c), f = P(f), d = m, g = 0), i = 0
          }else {
            break a
          }
        }
      }
    }
  }
  f = (f = wa(fi)) ? Kg(ii, b) : f;
  x(f) && a.insertBefore(document.createTextNode(N(Kg(ii, b))), a.firstChild);
  return a.childNodes
}
function yi(a) {
  if(a ? a.Cb : a) {
    return a.Cb(a)
  }
  var b;
  var c = yi[v(a == m ? m : a)];
  c ? b = c : (c = yi._) ? b = c : e(D("DomContent.nodes", a));
  return b.call(m, a)
}
function zi(a) {
  if(a ? a.Db : a) {
    return a.Db(a)
  }
  var b;
  var c = zi[v(a == m ? m : a)];
  c ? b = c : (c = zi._) ? b = c : e(D("DomContent.single-node", a));
  return b.call(m, a)
}
function Z(a) {
  a = tg(a);
  return w(a) ? document.getElementById(a) : a
}
var Ci = function Ai(b) {
  h === di && (di = {}, di = function(b, d, f) {
    this.Na = b;
    this.fc = d;
    this.tc = f;
    this.r = 0;
    this.h = 393216
  }, di.Ca = l, di.Qa = "domina/t8141", di.Pa = function(b, d) {
    return H(d, "domina/t8141")
  }, di.prototype.Cb = function() {
    return Bi.b ? Bi.b(Dh(tg(this.Na))) : Bi.call(m, Dh(tg(this.Na)))
  }, di.prototype.Db = function() {
    return Bi.b ? Bi.b(Fh(tg(this.Na))) : Bi.call(m, Fh(tg(this.Na)))
  }, di.prototype.C = q("tc"), di.prototype.D = function(b, d) {
    return new di(this.Na, this.fc, d)
  });
  return new di(b, Ai, m)
};
function Di(a, b, c) {
  for(var d = L(yi(a)), f = m, g = 0, i = 0;;) {
    if(i < g) {
      f.t(f, i).setAttribute(tg(b), yc.a(J, c)), i += 1
    }else {
      if(d = L(d)) {
        f = d, Hc(f) ? (d = I(f), i = rb(f), f = d, g = U(d), d = i) : (N(f).setAttribute(tg(b), yc.a(J, c)), d = P(f), f = m, g = 0), i = 0
      }else {
        break
      }
    }
  }
  return a
}
function Ei(a, b, c) {
  var d = m;
  2 < arguments.length && (d = R(Array.prototype.slice.call(arguments, 2), 0));
  return Di.call(this, a, b, d)
}
Ei.o = 2;
Ei.k = function(a) {
  var b = N(a), a = P(a), c = N(a), a = O(a);
  return Di(b, c, a)
};
Ei.g = Di;
function Fi(a, b) {
  for(var c = L(yi(a)), d = m, f = 0, g = 0;;) {
    if(g < f) {
      d.t(d, g).removeAttribute(tg(b)), g += 1
    }else {
      if(c = L(c)) {
        d = c, Hc(d) ? (c = I(d), g = rb(d), d = c, f = U(c), c = g) : (N(d).removeAttribute(tg(b)), c = P(d), d = m, f = 0), g = 0
      }else {
        break
      }
    }
  }
  return a
}
function Gi(a) {
  var b = zi(a).attributes;
  return Xc.a($b, Ge(le(), me.a(function(a) {
    var a = b.item(a), d = a.nodeValue, f = ee.a(m, d);
    return(f ? ee.a("", d) : f) ? ua([od.b(a.nodeName.toLowerCase()), a.nodeValue], l) : m
  }, wg.b(b.length))))
}
function Hi(a) {
  return Ih(zi(a))
}
function Ii(a, b, c) {
  for(var b = yi(b), d = yi(c), c = document.createDocumentFragment(), f = L(d), g = m, i = 0, j = 0;;) {
    if(j < i) {
      var k = g.t(g, j);
      c.appendChild(k);
      j += 1
    }else {
      if(f = L(f)) {
        g = f, Hc(g) ? (f = I(g), j = rb(g), g = f, i = U(f), f = j) : (f = N(g), c.appendChild(f), f = P(g), g = m, i = 0), j = 0
      }else {
        break
      }
    }
  }
  d = Gg.b(ve.a(U(b) - 1, function(a, b, c) {
    return function() {
      return c.cloneNode(l)
    }
  }(b, d, c)));
  return L(b) ? (a.a ? a.a(N(b), c) : a.call(m, N(b), c), Gg.b(me.e(function(b, c) {
    return a.a ? a.a(b, c) : a.call(m, b, c)
  }, O(b), d))) : m
}
var Ji, Ki = m;
function Li(a) {
  return Ki.a(a, 0)
}
function Mi(a, b) {
  return b < a.length ? new Ed(m, n, function() {
    return S(a.item(b), Ki.a(a, b + 1))
  }, m) : m
}
Ki = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Li.call(this, a);
    case 2:
      return Mi.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ki.b = Li;
Ki.a = Mi;
Ji = Ki;
var Ni, Oi = m;
function Pi(a) {
  return Oi.a(a, 0)
}
function Qi(a, b) {
  return b < a.length ? new Ed(m, n, function() {
    return S(a[b], Oi.a(a, b + 1))
  }, m) : m
}
Oi = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Pi.call(this, a);
    case 2:
      return Qi.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Oi.b = Pi;
Oi.a = Qi;
Ni = Oi;
function Ri(a) {
  return x(a.item) ? Ji.b(a) : Ni.b(a)
}
function Si(a) {
  if(x(a)) {
    var b = wa(a.name);
    return b ? a.length : b
  }
  return a
}
function Bi(a) {
  if(a == m) {
    a = yb
  }else {
    var b;
    b = a ? ((b = a.h & 8388608) ? b : a.za) || (a.h ? 0 : C(hb, a)) : C(hb, a);
    a = b ? L(a) : x(Si(a)) ? Ri(a) : L(Ye([a]))
  }
  return a
}
yi._ = function(a) {
  if(a == m) {
    a = yb
  }else {
    var b;
    b = a ? ((b = a.h & 8388608) ? b : a.za) || (a.h ? 0 : C(hb, a)) : C(hb, a);
    a = b ? L(a) : x(Si(a)) ? Ri(a) : L(Ye([a]))
  }
  return a
};
zi._ = function(a) {
  if(a == m) {
    a = m
  }else {
    var b;
    b = a ? ((b = a.h & 8388608) ? b : a.za) || (a.h ? 0 : C(hb, a)) : C(hb, a);
    a = b ? N(a) : x(Si(a)) ? a.item(0) : a
  }
  return a
};
yi.string = function(a) {
  return Gg.b(yi(x(Kg(hi, a)) ? xi(a) : document.createTextNode(a)))
};
zi.string = function(a) {
  return zi(x(Kg(hi, a)) ? xi(a) : document.createTextNode(a))
};
x("undefined" != typeof NodeList) && (s = NodeList.prototype, s.za = l, s.w = function(a) {
  return Ri(a)
}, s.Oa = l, s.t = function(a, b) {
  return a.item(b)
}, s.N = function(a, b, c) {
  return a.length <= b ? c : ic.a(a, b)
}, s.lb = l, s.z = function(a) {
  return a.length
});
x("undefined" != typeof StaticNodeList) && (s = StaticNodeList.prototype, s.za = l, s.w = function(a) {
  return Ri(a)
}, s.Oa = l, s.t = function(a, b) {
  return a.item(b)
}, s.N = function(a, b, c) {
  return a.length <= b ? c : ic.a(a, b)
}, s.lb = l, s.z = function(a) {
  return a.length
});
x("undefined" != typeof HTMLCollection) && (s = HTMLCollection.prototype, s.za = l, s.w = function(a) {
  return Ri(a)
}, s.Oa = l, s.t = function(a, b) {
  return a.item(b)
}, s.N = function(a, b, c) {
  return a.length <= b ? c : ic.a(a, b)
}, s.lb = l, s.z = function(a) {
  return a.length
});
var $, Ti = [], Ui = 0, Vi;
for(Vi in Nh) {
  Ti[Ui++] = Nh[Vi]
}
var Wi, Xi = me.a(od, Ti);
Wi = yc.a(pg, Xi);
var Yi = window.document.documentElement, $i = function Zi(b) {
  return function(c) {
    b.b ? b.b(function() {
      h === $ && ($ = {}, $ = function(b, c, g, i) {
        this.qa = b;
        this.Gb = c;
        this.Ab = g;
        this.Mb = i;
        this.r = 0;
        this.h = 393472
      }, $.Ca = l, $.Qa = "domina.events/t7959", $.Pa = function(b, c) {
        return H(c, "domina.events/t7959")
      }, $.prototype.B = function(b, c) {
        var g = this.qa[c];
        return x(g) ? g : this.qa[tg(c)]
      }, $.prototype.v = function(b, c, g) {
        b = b.B(b, c);
        return x(b) ? b : g
      }, $.prototype.C = q("Mb"), $.prototype.D = function(b, c) {
        return new $(this.qa, this.Gb, this.Ab, c)
      });
      return new $(c, b, Zi, m)
    }()) : b.call(m, function() {
      h === $ && ($ = function(b, c, g, i) {
        this.qa = b;
        this.Gb = c;
        this.Ab = g;
        this.Mb = i;
        this.r = 0;
        this.h = 393472
      }, $.Ca = l, $.Qa = "domina.events/t7959", $.Pa = function(b, c) {
        return H(c, "domina.events/t7959")
      }, $.prototype.B = function(b, c) {
        var g = this.qa[c];
        return x(g) ? g : this.qa[tg(c)]
      }, $.prototype.v = function(b, c, g) {
        b = b.B(b, c);
        return x(b) ? b : g
      }, $.prototype.C = q("Mb"), $.prototype.D = function(b, c) {
        return new $(this.qa, this.Gb, this.Ab, c)
      });
      return new $(c, b, Zi, m)
    }());
    return l
  }
};
function aj(a, b, c) {
  var d = $i(c), f = mc.e(Wi, b, Lc) !== Lc ? tg(b) : b;
  return Gg.b(function i(a) {
    return new Ed(m, n, function() {
      for(;;) {
        var b = L(a);
        if(b) {
          if(Hc(b)) {
            var c = I(b), u = U(c), t = new Fd(Array(u), 0);
            a: {
              for(var y = 0;;) {
                if(y < u) {
                  var B = E.a(c, y), B = x(n) ? Yh(B, f, d, n) : Wh(B, f, d, n);
                  t.add(B);
                  y += 1
                }else {
                  c = l;
                  break a
                }
              }
              c = h
            }
            return c ? Md(t.aa(), i(rb(b))) : Md(t.aa(), m)
          }
          t = N(b);
          return S(x(n) ? Yh(t, f, d, n) : Wh(t, f, d, n), i(O(b)))
        }
        return m
      }
    }, m)
  }(yi(a)))
}
var bj, cj = m;
function dj(a, b) {
  return cj.e(Yi, a, b)
}
cj = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return dj.call(this, a, b);
    case 3:
      return aj(a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
cj.a = dj;
cj.e = function(a, b, c) {
  return aj(a, b, c)
};
bj = cj;
function ej(a, b, c, d, f) {
  if(!Y && (!ph || !Ah("525"))) {
    return l
  }
  if(rh && f) {
    return fj(a)
  }
  if(f && !d || !c && (17 == b || 18 == b) || Y && d && b == a) {
    return n
  }
  switch(a) {
    case 13:
      return!(Y && Ch());
    case 27:
      return!ph
  }
  return fj(a)
}
function fj(a) {
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
function gj(a) {
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
;var hj;
hj = r(l);
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
function ij(a, b) {
  var c = b || [];
  a && c.push(a);
  return c
}
var jj = ph && "BackCompat" == document.compatMode, kj = document.firstChild.children ? "children" : "childNodes", lj = n;
function mj(a) {
  function b() {
    0 <= p && (A.id = c(p, z).replace(/\\/g, ""), p = -1);
    if(0 <= u) {
      var a = u == z ? m : c(u, z);
      0 > ">~+".indexOf(a) ? A.Q = a : A.cb = a;
      u = -1
    }
    0 <= k && (A.da.push(c(k + 1, z).replace(/\\/g, "")), k = -1)
  }
  function c(b, c) {
    return ja(a.slice(b, c))
  }
  for(var a = 0 <= ">~+".indexOf(a.slice(-1)) ? a + " * " : a + " ", d = [], f = -1, g = -1, i = -1, j = -1, k = -1, p = -1, u = -1, t = "", y = "", B, z = 0, T = a.length, A = m, M = m;t = y, y = a.charAt(z), z < T;z++) {
    if("\\" != t) {
      if(A || (B = z, A = {Ka:m, ra:[], Wa:[], da:[], Q:m, cb:m, id:m, Hb:function() {
        return lj ? this.vc : this.Q
      }}, u = z), 0 <= f) {
        if("]" == y) {
          M.gb ? M.Lb = c(i || f + 1, z) : M.gb = c(f + 1, z);
          if((f = M.Lb) && ('"' == f.charAt(0) || "'" == f.charAt(0))) {
            M.Lb = f.slice(1, -1)
          }
          A.Wa.push(M);
          M = m;
          f = i = -1
        }else {
          "=" == y && (i = 0 <= "|~^$*".indexOf(t) ? t : "", M.type = i + y, M.gb = c(f + 1, z - i.length), i = z + 1)
        }
      }else {
        0 <= g ? ")" == y && (0 <= j && (M.value = c(g + 1, z)), j = g = -1) : "#" == y ? (b(), p = z + 1) : "." == y ? (b(), k = z) : ":" == y ? (b(), j = z) : "[" == y ? (b(), f = z, M = {}) : "(" == y ? (0 <= j && (M = {name:c(j + 1, z), value:m}, A.ra.push(M)), g = z) : " " == y && t != y && (b(), 0 <= j && A.ra.push({name:c(j + 1, z)}), A.ac = A.ra.length || A.Wa.length || A.da.length, A.Nd = A.Ka = c(B, z), A.vc = A.Q = A.cb ? m : A.Q || "*", A.Q && (A.Q = A.Q.toUpperCase()), d.length && d[d.length - 
        1].cb && (A.Zb = d.pop(), A.Ka = A.Zb.Ka + " " + A.Ka), d.push(A), A = m)
      }
    }
  }
  return d
}
function nj(a, b) {
  return!a ? b : !b ? a : function() {
    return a.apply(window, arguments) && b.apply(window, arguments)
  }
}
function oj(a) {
  return 1 == a.nodeType
}
function pj(a, b) {
  return!a ? "" : "class" == b ? a.className || "" : "for" == b ? a.htmlFor || "" : "style" == b ? a.style.cssText || "" : (lj ? a.getAttribute(b) : a.getAttribute(b, 2)) || ""
}
var qj = {"*=":function(a, b) {
  return function(c) {
    return 0 <= pj(c, a).indexOf(b)
  }
}, "^=":function(a, b) {
  return function(c) {
    return 0 == pj(c, a).indexOf(b)
  }
}, "$=":function(a, b) {
  return function(c) {
    c = " " + pj(c, a);
    return c.lastIndexOf(b) == c.length - b.length
  }
}, "~=":function(a, b) {
  var c = " " + b + " ";
  return function(b) {
    return 0 <= (" " + pj(b, a) + " ").indexOf(c)
  }
}, "|=":function(a, b) {
  b = " " + b;
  return function(c) {
    c = " " + pj(c, a);
    return c == b || 0 == c.indexOf(b + "-")
  }
}, "=":function(a, b) {
  return function(c) {
    return pj(c, a) == b
  }
}}, rj = "undefined" == typeof document.firstChild.nextElementSibling, sj = !rj ? "nextElementSibling" : "nextSibling", tj = !rj ? "previousElementSibling" : "previousSibling", uj = rj ? oj : hj;
function vj(a) {
  for(;a = a[tj];) {
    if(uj(a)) {
      return n
    }
  }
  return l
}
function wj(a) {
  for(;a = a[sj];) {
    if(uj(a)) {
      return n
    }
  }
  return l
}
function xj(a) {
  var b = a.parentNode, c = 0, d = b[kj], f = a._i || -1, g = b._l || -1;
  if(!d) {
    return-1
  }
  d = d.length;
  if(g == d && 0 <= f && 0 <= g) {
    return f
  }
  b._l = d;
  f = -1;
  for(b = b.firstElementChild || b.firstChild;b;b = b[sj]) {
    uj(b) && (b._i = ++c, a === b && (f = c))
  }
  return f
}
function yj(a) {
  return!(xj(a) % 2)
}
function zj(a) {
  return xj(a) % 2
}
var Bj = {checked:function() {
  return function(a) {
    return a.checked || a.attributes.checked
  }
}, "first-child":function() {
  return vj
}, "last-child":function() {
  return wj
}, "only-child":function() {
  return function(a) {
    return!vj(a) || !wj(a) ? n : l
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
  var c = mj(b)[0], d = {Ea:1};
  "*" != c.Q && (d.Q = 1);
  c.da.length || (d.da = 1);
  var f = Aj(c, d);
  return function(a) {
    return!f(a)
  }
}, "nth-child":function(a, b) {
  if("odd" == b) {
    return zj
  }
  if("even" == b) {
    return yj
  }
  if(-1 != b.indexOf("n")) {
    var c = b.split("n", 2), d = c[0] ? "-" == c[0] ? -1 : parseInt(c[0], 10) : 1, f = c[1] ? parseInt(c[1], 10) : 0, g = 0, i = -1;
    0 < d ? 0 > f ? f = f % d && d + f % d : 0 < f && (f >= d && (g = f - f % d), f %= d) : 0 > d && (d *= -1, 0 < f && (i = f, f %= d));
    if(0 < d) {
      return function(a) {
        a = xj(a);
        return a >= g && (0 > i || a <= i) && a % d == f
      }
    }
    b = f
  }
  var j = parseInt(b, 10);
  return function(a) {
    return xj(a) == j
  }
}}, Cj = Y ? function(a) {
  var b = a.toLowerCase();
  "class" == b && (a = "className");
  return function(c) {
    return lj ? c.getAttribute(a) : c[a] || c[b]
  }
} : function(a) {
  return function(b) {
    return b && b.getAttribute && b.hasAttribute(a)
  }
};
function Aj(a, b) {
  if(!a) {
    return hj
  }
  var b = b || {}, c = m;
  b.Ea || (c = nj(c, oj));
  b.Q || "*" != a.Q && (c = nj(c, function(b) {
    return b && b.tagName == a.Hb()
  }));
  b.da || na(a.da, function(a, b) {
    var g = RegExp("(?:^|\\s)" + a + "(?:\\s|$)");
    c = nj(c, function(a) {
      return g.test(a.className)
    });
    c.count = b
  });
  b.ra || na(a.ra, function(a) {
    var b = a.name;
    Bj[b] && (c = nj(c, Bj[b](b, a.value)))
  });
  b.Wa || na(a.Wa, function(a) {
    var b, g = a.gb;
    a.type && qj[a.type] ? b = qj[a.type](g, a.Lb) : g.length && (b = Cj(g));
    b && (c = nj(c, b))
  });
  b.id || a.id && (c = nj(c, function(b) {
    return!!b && b.id == a.id
  }));
  c || "default" in b || (c = hj);
  return c
}
var Dj = {};
function Ej(a) {
  var b = Dj[a.Ka];
  if(b) {
    return b
  }
  var c = a.Zb, c = c ? c.cb : "", d = Aj(a, {Ea:1}), f = "*" == a.Q, g = document.getElementsByClassName;
  if(c) {
    if(g = {Ea:1}, f && (g.Q = 1), d = Aj(a, g), "+" == c) {
      var i = d, b = function(a, b, c) {
        for(;a = a[sj];) {
          if(!rj || oj(a)) {
            (!c || Fj(a, c)) && i(a) && b.push(a);
            break
          }
        }
        return b
      }
    }else {
      if("~" == c) {
        var j = d, b = function(a, b, c) {
          for(a = a[sj];a;) {
            if(uj(a)) {
              if(c && !Fj(a, c)) {
                break
              }
              j(a) && b.push(a)
            }
            a = a[sj]
          }
          return b
        }
      }else {
        if(">" == c) {
          var k = d, k = k || hj, b = function(a, b, c) {
            for(var d = 0, f = a[kj];a = f[d++];) {
              uj(a) && ((!c || Fj(a, c)) && k(a, d)) && b.push(a)
            }
            return b
          }
        }
      }
    }
  }else {
    if(a.id) {
      d = !a.ac && f ? hj : Aj(a, {Ea:1, id:1}), b = function(b, c) {
        var f = (b ? new Hh(9 == b.nodeType ? b : b.ownerDocument || b.document) : fh || (fh = new Hh)).Yb(a.id), g;
        if(g = f && d(f)) {
          if(!(g = 9 == b.nodeType)) {
            for(g = f.parentNode;g && g != b;) {
              g = g.parentNode
            }
            g = !!g
          }
        }
        if(g) {
          return ij(f, c)
        }
      }
    }else {
      if(g && /\{\s*\[native code\]\s*\}/.test(String(g)) && a.da.length && !jj) {
        var d = Aj(a, {Ea:1, da:1, id:1}), p = a.da.join(" "), b = function(a, b) {
          for(var c = ij(0, b), f, g = 0, i = a.getElementsByClassName(p);f = i[g++];) {
            d(f, a) && c.push(f)
          }
          return c
        }
      }else {
        !f && !a.ac ? b = function(b, c) {
          for(var d = ij(0, c), f, g = 0, i = b.getElementsByTagName(a.Hb());f = i[g++];) {
            d.push(f)
          }
          return d
        } : (d = Aj(a, {Ea:1, Q:1, id:1}), b = function(b, c) {
          for(var f = ij(0, c), g, i = 0, j = b.getElementsByTagName(a.Hb());g = j[i++];) {
            d(g, b) && f.push(g)
          }
          return f
        })
      }
    }
  }
  return Dj[a.Ka] = b
}
var Gj = {}, Hj = {};
function Ij(a) {
  var b = mj(ja(a));
  if(1 == b.length) {
    var c = Ej(b[0]);
    return function(a) {
      if(a = c(a, [])) {
        a.bb = l
      }
      return a
    }
  }
  return function(a) {
    for(var a = ij(a), c, g, i = b.length, j, k, p = 0;p < i;p++) {
      k = [];
      c = b[p];
      g = a.length - 1;
      0 < g && (j = {}, k.bb = l);
      g = Ej(c);
      for(var u = 0;c = a[u];u++) {
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
var Jj = !!document.querySelectorAll && (!ph || Ah("526"));
function Kj(a, b) {
  if(Jj) {
    var c = Hj[a];
    if(c && !b) {
      return c
    }
  }
  if(c = Gj[a]) {
    return c
  }
  var c = a.charAt(0), d = -1 == a.indexOf(" ");
  0 <= a.indexOf("#") && d && (b = l);
  if(Jj && !b && -1 == ">~+".indexOf(c) && (!Y || -1 == a.indexOf(":")) && !(jj && 0 <= a.indexOf(".")) && -1 == a.indexOf(":contains") && -1 == a.indexOf("|=")) {
    var f = 0 <= ">~+".indexOf(a.charAt(a.length - 1)) ? a + " *" : a;
    return Hj[a] = function(b) {
      try {
        9 == b.nodeType || d || e("");
        var c = b.querySelectorAll(f);
        Y ? c.pc = l : c.bb = l;
        return c
      }catch(g) {
        return Kj(a, l)(b)
      }
    }
  }
  var g = a.split(/\s*,\s*/);
  return Gj[a] = 2 > g.length ? Ij(a) : function(a) {
    for(var b = 0, c = [], d;d = g[b++];) {
      c = c.concat(Ij(d)(a))
    }
    return c
  }
}
var Lj = 0, Mj = Y ? function(a) {
  return lj ? a.getAttribute("_uid") || a.setAttribute("_uid", ++Lj) || Lj : a.uniqueID
} : function(a) {
  return a._uid || (a._uid = ++Lj)
};
function Fj(a, b) {
  if(!b) {
    return 1
  }
  var c = Mj(a);
  return!b[c] ? b[c] = 1 : 0
}
function Nj(a) {
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
  Lj++;
  if(Y && lj) {
    var c = Lj + "";
    a[0].setAttribute("_zipIdx", c);
    for(var d = 1, f;f = a[d];d++) {
      a[d].getAttribute("_zipIdx") != c && b.push(f), f.setAttribute("_zipIdx", c)
    }
  }else {
    if(Y && a.pc) {
      try {
        for(d = 1;f = a[d];d++) {
          oj(f) && b.push(f)
        }
      }catch(g) {
      }
    }else {
      a[0] && (a[0]._zipIdx = Lj);
      for(d = 1;f = a[d];d++) {
        a[d]._zipIdx != Lj && b.push(f), f._zipIdx = Lj
      }
    }
  }
  return b
}
function Oj(a, b) {
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
  lj = b.contentType && "application/xml" == b.contentType || nh && (b.doctype || "[object XMLDocument]" == c.toString()) || !!c && (Y ? c.xml : b.xmlVersion || c.xmlVersion);
  return(c = Kj(a)(b)) && c.bb ? c : Nj(c)
}
Oj.ra = Bj;
ha("goog.dom.query", Oj);
ha("goog.dom.query.pseudos", Oj.ra);
var Pj, Qj, Rj = m;
function Sj(a) {
  return Rj.a(Eh("html", h, h)[0], a)
}
function Tj(a, b) {
  h === Pj && (Pj = {}, Pj = function(a, b, f, g) {
    this.Fb = a;
    this.hb = b;
    this.yc = f;
    this.uc = g;
    this.r = 0;
    this.h = 393216
  }, Pj.Ca = l, Pj.Qa = "domina.css/t8548", Pj.Pa = function(a, b) {
    return H(b, "domina.css/t8548")
  }, Pj.prototype.Cb = function() {
    var a = this;
    return Ae.a(function(b) {
      return Bi(Oj(a.Fb, b))
    }, yi(a.hb))
  }, Pj.prototype.Db = function() {
    var a = this;
    return N(Ge(le(), Ae.a(function(b) {
      return Bi(Oj(a.Fb, b))
    }, yi(a.hb))))
  }, Pj.prototype.C = q("uc"), Pj.prototype.D = function(a, b) {
    return new Pj(this.Fb, this.hb, this.yc, b)
  });
  return new Pj(b, a, Rj, m)
}
Rj = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Sj.call(this, a);
    case 2:
      return Tj.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Rj.b = Sj;
Rj.a = Tj;
Qj = Rj;
function Uj() {
  this.Xb = n
}
ia(Uj, Lh);
s = Uj.prototype;
s.Wb = l;
s.cc = m;
s.addEventListener = function(a, b, c, d) {
  Wh(this, a, b, c, d)
};
s.removeEventListener = function(a, b, c, d) {
  Zh(this, a, b, c, d)
};
s.dispatchEvent = function(a) {
  var b = a.type || a, c = Th;
  if(b in c) {
    if(w(a)) {
      a = new Mh(a, this)
    }else {
      if(a instanceof Mh) {
        a.target = a.target || this
      }else {
        var d = a, a = new Mh(b, this);
        pa(a, d)
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
        a.currentTarget = f[i], d &= bi(g, f[i], a.type, l, a) && a.eb != n
      }
    }
    if(n in c) {
      if(g = c[n], g.U = g.W, b) {
        for(i = 0;!a.Ja && i < f.length && g.U;i++) {
          a.currentTarget = f[i], d &= bi(g, f[i], a.type, n, a) && a.eb != n
        }
      }else {
        for(f = this;!a.Ja && f && g.U;f = f.cc) {
          a.currentTarget = f, d &= bi(g, f, a.type, n, a) && a.eb != n
        }
      }
    }
    a = Boolean(d)
  }else {
    a = l
  }
  return a
};
function Vj(a, b) {
  this.Xb = n;
  a && (this.$a && this.detach(), this.Fa = a, this.Za = Wh(this.Fa, "keypress", this, b), this.Kb = Wh(this.Fa, "keydown", this.qc, b, this), this.$a = Wh(this.Fa, "keyup", this.rc, b, this))
}
ia(Vj, Uj);
s = Vj.prototype;
s.Fa = m;
s.Za = m;
s.Kb = m;
s.$a = m;
s.na = -1;
s.ma = -1;
var Wj = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, Xj = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, Yj = Y || 
ph && Ah("525");
s = Vj.prototype;
s.qc = function(a) {
  if(ph && (17 == this.na && !a.ctrlKey || 18 == this.na && !a.altKey)) {
    this.ma = this.na = -1
  }
  Yj && !ej(a.keyCode, this.na, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.ma = oh ? gj(a.keyCode) : a.keyCode
};
s.rc = function() {
  this.ma = this.na = -1
};
s.handleEvent = function(a) {
  var b = a.Eb, c, d;
  Y && "keypress" == a.type ? (c = this.ma, d = 13 != c && 27 != c ? b.keyCode : 0) : ph && "keypress" == a.type ? (c = this.ma, d = 0 <= b.charCode && 63232 > b.charCode && fj(c) ? b.charCode : 0) : nh ? (c = this.ma, d = fj(c) ? b.keyCode : 0) : (c = b.keyCode || this.ma, d = b.charCode || 0, rh && (63 == d && 224 == c) && (c = 191));
  var f = c, g = b.keyIdentifier;
  c ? 63232 <= c && c in Wj ? f = Wj[c] : 25 == c && a.shiftKey && (f = 9) : g && g in Xj && (f = Xj[g]);
  a = f == this.na;
  this.na = f;
  b = new Zj(f, d, a, b);
  this.dispatchEvent(b)
};
s.Yb = q("Fa");
s.detach = function() {
  this.Za && ($h(this.Za), $h(this.Kb), $h(this.$a), this.$a = this.Kb = this.Za = m);
  this.Fa = m;
  this.ma = this.na = -1
};
function Zj(a, b, c, d) {
  d && this.Sa(d, h);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
ia(Zj, Ph);
function $j(a) {
  Wh(new Vj(a), "key", function(b) {
    (function() {
      var a = Q.a(b.keyCode, 48);
      return a || (a = Q.a(b.keyCode, 49)) || (a = Q.a(b.keyCode, 50)) || (a = Q.a(b.keyCode, 51)) || (a = Q.a(b.keyCode, 52)) || (a = Q.a(b.keyCode, 53)) || (a = Q.a(b.keyCode, 54)) || (a = Q.a(b.keyCode, 55)) || (a = Q.a(b.keyCode, 56)) || (a = Q.a(b.keyCode, 57)) || (a = Q.a(b.keyCode, 37)) || (a = Q.a(b.keyCode, 39)) || (a = Q.a(b.keyCode, 38)) || (a = Q.a(b.keyCode, 40)) || (a = Q.a(b.keyCode, 9)) || (a = Q.a(b.keyCode, 8)) || (a = Q.a(b.keyCode, 46)) || (a = Q.a(b.keyCode, 36)) ? a : (a = Q.a(b.keyCode, 
      35)) ? a : Q.a(b.keyCode, 190)
    })() || b.preventDefault();
    var c;
    c = Kg(/\./, Hi(a));
    c = x(c) ? Q.a(b.keyCode, 190) : c;
    return x(c) ? b.preventDefault() : m
  })
}
function ak(a) {
  return Q.a((new Ad("\ufdd0:type")).call(m, Gi(Z((new Ad("\ufdd0:id")).call(m, a)))), "radio") ? l : 0 < U(Hi(Z((new Ad("\ufdd0:id")).call(m, a))))
}
function bk(a) {
  return"number" === typeof(x(Kg(/^-?\d+\.?\d[E]?-?\d*$|^-?\d+\.?\d*$/, a)) ? parseFloat(a) : a)
}
function ck() {
  var a = me.a(Gi, yi(Qj.b("input[id*='training-duration']"))), b = yi(Qj.b("input[name*='training-meal']:checked")), c = Sg.b(Xe), d = Ci("help");
  Cg.b(me.a(Gh, yi(d)));
  for(var a = L(a), d = m, f = 0, g = 0;;) {
    if(g < f) {
      var i = d.t(d, g);
      Yg.e(c, $b, ak(i));
      Q.a((new Ad("\ufdd0:type")).call(m, i), "number") && Yg.e(c, $b, bk(Hi(Z((new Ad("\ufdd0:id")).call(m, i)))));
      g += 1
    }else {
      if(a = L(a)) {
        d = a, Hc(d) ? (a = I(d), g = rb(d), d = a, f = U(a), a = g) : (a = N(d), Yg.e(c, $b, ak(a)), Q.a((new Ad("\ufdd0:type")).call(m, a), "number") && Yg.e(c, $b, bk(Hi(Z((new Ad("\ufdd0:id")).call(m, a))))), a = P(d), d = m, f = 0), g = 0
      }else {
        break
      }
    }
  }
  Yg.e(c, $b, !Q.a(b, yb));
  je(Mc, Va(c)) || (b = Z("error-msgs"), Ii.e ? Ii.e(function(a, b) {
    a.insertBefore(b, a.childNodes[0] || m)
  }, b, '<div class="help">Value for every training duration is required</div><div class="help">Select one option for training in time of which meal</div>') : Ii.call(m, function(a, b) {
    a.insertBefore(b, a.childNodes[0] || m)
  }, b, '<div class="help">Value for every training duration is required</div><div class="help">Select one option for training in time of which meal</div>'));
  return je(Mc, Va(c))
}
function dk(a) {
  Fi(Z(a), "checked");
  Ei.g(Z(a), "disabled", R(["disabled"], 0))
}
function ek(a) {
  dk([J("training-meal-breakfast"), J(a)].join(""));
  dk([J("training-meal-lunch"), J(a)].join(""));
  dk([J("training-meal-dinner"), J(a)].join(""));
  Ei.g(Z([J("training-duration"), J(a)].join("")), "value", R(["0"], 0));
  Ei.g(Z([J("training-duration"), J(a)].join("")), "readonly", R(["readonly"], 0));
  Fi(Z([J("training-meal-no"), J(a)].join("")), "disabled");
  return Ei.g(Z([J("training-meal-no"), J(a)].join("")), "checked", R(["checked"], 0))
}
function fk(a) {
  dk([J("training-meal-no"), J(a)].join(""));
  Ei.g(Z([J("training-meal-breakfast"), J(a)].join("")), "checked", R(["checked"], 0));
  Fi(Z([J("training-meal-breakfast"), J(a)].join("")), "disabled");
  Fi(Z([J("training-meal-lunch"), J(a)].join("")), "disabled");
  Fi(Z([J("training-meal-dinner"), J(a)].join("")), "disabled");
  return Fi(Z([J("training-duration"), J(a)].join("")), "readonly")
}
ha("personal_organiser.planishrane.jsplanishrane.init", function() {
  var a = document;
  if(x(x(a) ? document.getElementById : a)) {
    var b = Z("planishrane-form"), a = me.a(Gi, yi(Qj.b("input[id*='training-duration']")));
    b.onsubmit = ck;
    for(var b = L(Ye([1, 2, 3, 4, 5, 6, 7])), c = m, d = 0, f = 0;;) {
      if(f < d) {
        var g = c.t(c, f);
        Ei.g(Z([J("training-meal-no"), J(g)].join("")), "checked", R(["checked"], 0));
        bj.e(Z([J("training-coef"), J(g)].join("")), "\ufdd0:change", function(a, b, c, d, f) {
          return function() {
            return Q.a(Hi(Z([J("training-coef"), J(f)].join(""))), "0") ? ek(f) : fk(f)
          }
        }(b, c, d, f, g));
        f += 1
      }else {
        var i = L(b);
        if(i) {
          g = i;
          if(Hc(g)) {
            b = I(g), f = rb(g), c = b, d = U(b), b = f
          }else {
            var j = N(g);
            Ei.g(Z([J("training-meal-no"), J(j)].join("")), "checked", R(["checked"], 0));
            bj.e(Z([J("training-coef"), J(j)].join("")), "\ufdd0:change", function(a, b, c, d, f) {
              return function() {
                return Q.a(Hi(Z([J("training-coef"), J(f)].join(""))), "0") ? ek(f) : fk(f)
              }
            }(b, c, d, f, j, g, i));
            b = P(g);
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
        c = b.t(b, f), $j(Z((new Ad("\ufdd0:id")).call(m, c))), f += 1
      }else {
        if(a = L(a)) {
          b = a, Hc(b) ? (a = I(b), d = rb(b), b = a, c = U(a), a = d, d = c) : (c = N(b), $j(Z((new Ad("\ufdd0:id")).call(m, c))), a = P(b), b = m, d = 0), f = 0
        }else {
          return m
        }
      }
    }
  }else {
    return m
  }
});
