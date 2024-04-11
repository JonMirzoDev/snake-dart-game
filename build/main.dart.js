(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q)){b[q]=a[q]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(Object.getPrototypeOf(r)&&Object.getPrototypeOf(r).p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++){inherit(b[s],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var s=a
a[b]=s
a[c]=function(){a[c]=function(){A.fA(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else{r=a[b]}}finally{if(r===q){a[b]=null}a[c]=function(){return this[b]}}return r}}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s){A.fB(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.cB(b)
return new s(c,this)}:function(){if(s===null)s=A.cB(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.cB(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
cE(a,b,c,d){return{i:a,p:b,e:c,x:d}},
dt(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.cC==null){A.fp()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.cX("Return interceptor for "+A.k(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.bZ
if(o==null)o=$.bZ=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.fu(a)
if(p!=null)return p
if(typeof a=="function")return B.A
s=Object.getPrototypeOf(a)
if(s==null)return B.k
if(s===Object.prototype)return B.k
if(typeof q=="function"){o=$.bZ
if(o==null)o=$.bZ=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.f,enumerable:false,writable:true,configurable:true})
return B.f}return B.f},
e0(a,b){a.fixed$length=Array
return a},
Y(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ad.prototype
return J.aO.prototype}if(typeof a=="string")return J.a0.prototype
if(a==null)return J.ae.prototype
if(typeof a=="boolean")return J.aN.prototype
if(Array.isArray(a))return J.v.prototype
if(typeof a!="object"){if(typeof a=="function")return J.T.prototype
if(typeof a=="symbol")return J.aR.prototype
if(typeof a=="bigint")return J.aQ.prototype
return a}if(a instanceof A.f)return a
return J.dt(a)},
fk(a){if(typeof a=="string")return J.a0.prototype
if(a==null)return a
if(Array.isArray(a))return J.v.prototype
if(typeof a!="object"){if(typeof a=="function")return J.T.prototype
if(typeof a=="symbol")return J.aR.prototype
if(typeof a=="bigint")return J.aQ.prototype
return a}if(a instanceof A.f)return a
return J.dt(a)},
dM(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Y(a).m(a,b)},
bl(a){return J.Y(a).gj(a)},
cG(a){return J.fk(a).gk(a)},
dN(a){return J.Y(a).gu(a)},
aC(a){return J.Y(a).h(a)},
ac:function ac(){},
aN:function aN(){},
ae:function ae(){},
w:function w(){},
U:function U(){},
aU:function aU(){},
ao:function ao(){},
T:function T(){},
aQ:function aQ(){},
aR:function aR(){},
v:function v(a){this.$ti=a},
bq:function bq(a){this.$ti=a},
aF:function aF(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aP:function aP(){},
ad:function ad(){},
aO:function aO(){},
a0:function a0(){}},A={cp:function cp(){},
cV(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
bi(a,b,c){return a},
cD(a){var s,r
for(s=$.u.length,r=0;r<s;++r)if(a===$.u[r])return!0
return!1},
dY(){return new A.am("No element")},
ag:function ag(a){this.a=a},
aa:function aa(){},
ah:function ah(){},
an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
a1:function a1(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dA(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
k(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.aC(a)
return s},
aV(a){var s,r=$.cP
if(r==null)r=$.cP=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
bx(a){return A.e3(a)},
e3(a){var s,r,q,p
if(a instanceof A.f)return A.q(A.bj(a),null)
s=J.Y(a)
if(s===B.y||s===B.B||t.E.b(a)){r=B.h(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.q(A.bj(a),null)},
e4(a){if(typeof a=="number"||A.cz(a))return J.aC(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.K)return a.h(0)
return"Instance of '"+A.bx(a)+"'"},
y(a,b){if(a==null)J.cG(a)
throw A.d(A.fi(a,b))},
fi(a,b){var s,r="index"
if(!A.dg(b))return new A.J(!0,b,r,null)
s=A.be(J.cG(a))
if(b<0||b>=s)return A.cN(b,s,a,r)
return A.e6(b,r)},
d(a){return A.dv(new Error(),a)},
dv(a,b){var s
if(b==null)b=new A.E()
a.dartException=b
s=A.fC
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:s})
a.name=""}else a.toString=s
return a},
fC(){return J.aC(this.dartException)},
cl(a){throw A.d(a)},
dz(a,b){throw A.dv(b,a)},
dy(a){throw A.d(A.cn(a))},
F(a){var s,r,q,p,o,n
a=A.fy(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.bh([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.bB(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
bC(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
cW(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
cq(a,b){var s=b==null,r=s?null:b.method
return new A.aS(a,r,s?null:b.receiver)},
Q(a){var s
if(a==null)return new A.bw(a)
if(a instanceof A.ab){s=a.a
return A.P(a,s==null?t.K.a(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.P(a,a.dartException)
return A.fb(a)},
P(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
fb(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.aC(r,16)&8191)===10)switch(q){case 438:return A.P(a,A.cq(A.k(s)+" (Error "+q+")",null))
case 445:case 5007:A.k(s)
return A.P(a,new A.aj())}}if(a instanceof TypeError){p=$.dC()
o=$.dD()
n=$.dE()
m=$.dF()
l=$.dI()
k=$.dJ()
j=$.dH()
$.dG()
i=$.dL()
h=$.dK()
g=p.p(s)
if(g!=null)return A.P(a,A.cq(A.bf(s),g))
else{g=o.p(s)
if(g!=null){g.method="call"
return A.P(a,A.cq(A.bf(s),g))}else if(n.p(s)!=null||m.p(s)!=null||l.p(s)!=null||k.p(s)!=null||j.p(s)!=null||m.p(s)!=null||i.p(s)!=null||h.p(s)!=null){A.bf(s)
return A.P(a,new A.aj())}}return A.P(a,new A.b2(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.al()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.P(a,new A.J(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.al()
return a},
O(a){var s
if(a instanceof A.ab)return a.b
if(a==null)return new A.aq(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.aq(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
fx(a){if(a==null)return J.bl(a)
if(typeof a=="object")return A.aV(a)
return J.bl(a)},
eQ(a,b,c,d,e,f){t.Z.a(a)
switch(A.be(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(new A.bL("Unsupported number of arguments for wrapped closure"))},
aA(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.fg(a,b)
a.$identity=s
return s},
fg(a,b){var s
switch(b){case 0:s=a.$0
break
case 1:s=a.$1
break
case 2:s=a.$2
break
case 3:s=a.$3
break
case 4:s=a.$4
break
default:s=null}if(s!=null)return s.bind(a)
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.eQ)},
dV(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.aY().constructor.prototype):Object.create(new A.Z(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.cM(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.dR(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.cM(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
dR(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.dP)}throw A.d("Error in functionType of tearoff")},
dS(a,b,c,d){var s=A.cL
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
cM(a,b,c,d){if(c)return A.dU(a,b,d)
return A.dS(b.length,d,a,b)},
dT(a,b,c,d){var s=A.cL,r=A.dQ
switch(b?-1:a){case 0:throw A.d(new A.aW("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
dU(a,b,c){var s,r
if($.cJ==null)$.cJ=A.cI("interceptor")
if($.cK==null)$.cK=A.cI("receiver")
s=b.length
r=A.dT(s,c,a,b)
return r},
cB(a){return A.dV(a)},
dP(a,b){return A.c5(v.typeUniverse,A.bj(a.a),b)},
cL(a){return a.a},
dQ(a){return a.b},
cI(a){var s,r,q,p=new A.Z("receiver","interceptor"),o=J.e0(Object.getOwnPropertyNames(p),t.X)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.d(A.cm("Field name "+a+" not found.",null))},
fA(a){throw A.d(new A.b8(a))},
fl(a){return v.getIsolateTag(a)},
h9(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
fu(a){var s,r,q,p,o,n=A.bf($.du.$1(a)),m=$.cf[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.cj[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.eC($.dn.$2(a,n))
if(q!=null){m=$.cf[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.cj[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.ck(s)
$.cf[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.cj[n]=s
return s}if(p==="-"){o=A.ck(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.dw(a,s)
if(p==="*")throw A.d(A.cX(n))
if(v.leafTags[n]===true){o=A.ck(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.dw(a,s)},
dw(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.cE(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
ck(a){return J.cE(a,!1,null,!!a.$ifK)},
fw(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.ck(s)
else return J.cE(s,c,null,null)},
fp(){if(!0===$.cC)return
$.cC=!0
A.fq()},
fq(){var s,r,q,p,o,n,m,l
$.cf=Object.create(null)
$.cj=Object.create(null)
A.fo()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.dx.$1(o)
if(n!=null){m=A.fw(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
fo(){var s,r,q,p,o,n,m=B.p()
m=A.a6(B.q,A.a6(B.r,A.a6(B.i,A.a6(B.i,A.a6(B.t,A.a6(B.u,A.a6(B.v(B.h),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.du=new A.cg(p)
$.dn=new A.ch(o)
$.dx=new A.ci(n)},
a6(a,b){return a(b)||b},
fh(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
fy(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
bB:function bB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aj:function aj(){},
aS:function aS(a,b,c){this.a=a
this.b=b
this.c=c},
b2:function b2(a){this.a=a},
bw:function bw(a){this.a=a},
ab:function ab(a,b){this.a=a
this.b=b},
aq:function aq(a){this.a=a
this.b=null},
K:function K(){},
aI:function aI(){},
aJ:function aJ(){},
b0:function b0(){},
aY:function aY(){},
Z:function Z(a,b){this.a=a
this.b=b},
b8:function b8(a){this.a=a},
aW:function aW(a){this.a=a},
af:function af(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bu:function bu(a,b){this.a=a
this.b=b
this.c=null},
cg:function cg(a){this.a=a},
ch:function ch(a){this.a=a},
ci:function ci(a){this.a=a},
r(a){A.dz(new A.ag("Field '"+a+"' has not been initialized."),new Error())},
fB(a){A.dz(new A.ag("Field '"+a+"' has been assigned during initialization."),new Error())},
ee(a){var s=new A.bI(a)
return s.b=s},
bI:function bI(a){this.a=a
this.b=null},
cQ(a,b){var s=b.c
return s==null?b.c=A.cx(a,b.x,!0):s},
cs(a,b){var s=b.c
return s==null?b.c=A.au(a,"A",[b.x]):s},
cR(a){var s=a.w
if(s===6||s===7||s===8)return A.cR(a.x)
return s===12||s===13},
e8(a){return a.as},
ds(a){return A.c4(v.typeUniverse,a,!1)},
N(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.N(a1,s,a3,a4)
if(r===s)return a2
return A.d7(a1,r,!0)
case 7:s=a2.x
r=A.N(a1,s,a3,a4)
if(r===s)return a2
return A.cx(a1,r,!0)
case 8:s=a2.x
r=A.N(a1,s,a3,a4)
if(r===s)return a2
return A.d5(a1,r,!0)
case 9:q=a2.y
p=A.a5(a1,q,a3,a4)
if(p===q)return a2
return A.au(a1,a2.x,p)
case 10:o=a2.x
n=A.N(a1,o,a3,a4)
m=a2.y
l=A.a5(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.cv(a1,n,l)
case 11:k=a2.x
j=a2.y
i=A.a5(a1,j,a3,a4)
if(i===j)return a2
return A.d6(a1,k,i)
case 12:h=a2.x
g=A.N(a1,h,a3,a4)
f=a2.y
e=A.f8(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.d4(a1,g,e)
case 13:d=a2.y
a4+=d.length
c=A.a5(a1,d,a3,a4)
o=a2.x
n=A.N(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.cw(a1,n,c,!0)
case 14:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.d(A.aH("Attempted to substitute unexpected RTI kind "+a0))}},
a5(a,b,c,d){var s,r,q,p,o=b.length,n=A.c6(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.N(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
f9(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.c6(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.N(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
f8(a,b,c,d){var s,r=b.a,q=A.a5(a,r,c,d),p=b.b,o=A.a5(a,p,c,d),n=b.c,m=A.f9(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.ba()
s.a=q
s.b=o
s.c=m
return s},
bh(a,b){a[v.arrayRti]=b
return a},
dq(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.fn(s)
return a.$S()}return null},
fr(a,b){var s
if(A.cR(b))if(a instanceof A.K){s=A.dq(a)
if(s!=null)return s}return A.bj(a)},
bj(a){if(a instanceof A.f)return A.de(a)
if(Array.isArray(a))return A.ax(a)
return A.cy(J.Y(a))},
ax(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
de(a){var s=a.$ti
return s!=null?s:A.cy(a)},
cy(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.eP(a,s)},
eP(a,b){var s=a instanceof A.K?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.ex(v.typeUniverse,s.name)
b.$ccache=r
return r},
fn(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.c4(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
fm(a){return A.a7(A.de(a))},
f7(a){var s=a instanceof A.K?A.dq(a):null
if(s!=null)return s
if(t.R.b(a))return J.dN(a).a
if(Array.isArray(a))return A.ax(a)
return A.bj(a)},
a7(a){var s=a.r
return s==null?a.r=A.db(a):s},
db(a){var s,r,q=a.as,p=q.replace(/\*/g,"")
if(p===q)return a.r=new A.c3(a)
s=A.c4(v.typeUniverse,p,!0)
r=s.r
return r==null?s.r=A.db(s):r},
eO(a){var s,r,q,p,o,n,m=this
if(m===t.K)return A.H(m,a,A.eV)
if(!A.I(m))if(!(m===t._))s=!1
else s=!0
else s=!0
if(s)return A.H(m,a,A.eZ)
s=m.w
if(s===7)return A.H(m,a,A.eM)
if(s===1)return A.H(m,a,A.dh)
r=s===6?m.x:m
q=r.w
if(q===8)return A.H(m,a,A.eR)
if(r===t.S)p=A.dg
else if(r===t.i||r===t.p)p=A.eU
else if(r===t.N)p=A.eX
else p=r===t.y?A.cz:null
if(p!=null)return A.H(m,a,p)
if(q===9){o=r.x
if(r.y.every(A.fs)){m.f="$i"+o
if(o==="aT")return A.H(m,a,A.eT)
return A.H(m,a,A.eY)}}else if(q===11){n=A.fh(r.x,r.y)
return A.H(m,a,n==null?A.dh:n)}return A.H(m,a,A.eK)},
H(a,b,c){a.b=c
return a.b(b)},
eN(a){var s,r=this,q=A.eJ
if(!A.I(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.eD
else if(r===t.K)q=A.eB
else{s=A.aB(r)
if(s)q=A.eL}r.a=q
return r.a(a)},
bg(a){var s,r=a.w
if(!A.I(a))if(!(a===t._))if(!(a===t.A))if(r!==7)if(!(r===6&&A.bg(a.x)))s=r===8&&A.bg(a.x)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
else s=!0
return s},
eK(a){var s=this
if(a==null)return A.bg(s)
return A.ft(v.typeUniverse,A.fr(a,s),s)},
eM(a){if(a==null)return!0
return this.x.b(a)},
eY(a){var s,r=this
if(a==null)return A.bg(r)
s=r.f
if(a instanceof A.f)return!!a[s]
return!!J.Y(a)[s]},
eT(a){var s,r=this
if(a==null)return A.bg(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.f)return!!a[s]
return!!J.Y(a)[s]},
eJ(a){var s=this
if(a==null){if(A.aB(s))return a}else if(s.b(a))return a
A.dc(a,s)},
eL(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.dc(a,s)},
dc(a,b){throw A.d(A.en(A.cZ(a,A.q(b,null))))},
cZ(a,b){return A.bo(a)+": type '"+A.q(A.f7(a),null)+"' is not a subtype of type '"+b+"'"},
en(a){return new A.as("TypeError: "+a)},
m(a,b){return new A.as("TypeError: "+A.cZ(a,b))},
eR(a){var s=this,r=s.w===6?s.x:s
return r.x.b(a)||A.cs(v.typeUniverse,r).b(a)},
eV(a){return a!=null},
eB(a){if(a!=null)return a
throw A.d(A.m(a,"Object"))},
eZ(a){return!0},
eD(a){return a},
dh(a){return!1},
cz(a){return!0===a||!1===a},
h_(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.m(a,"bool"))},
h1(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.m(a,"bool"))},
h0(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.m(a,"bool?"))},
h2(a){if(typeof a=="number")return a
throw A.d(A.m(a,"double"))},
h4(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.m(a,"double"))},
h3(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.m(a,"double?"))},
dg(a){return typeof a=="number"&&Math.floor(a)===a},
be(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.m(a,"int"))},
h6(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.m(a,"int"))},
h5(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.m(a,"int?"))},
eU(a){return typeof a=="number"},
da(a){if(typeof a=="number")return a
throw A.d(A.m(a,"num"))},
h7(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.m(a,"num"))},
eA(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.m(a,"num?"))},
eX(a){return typeof a=="string"},
bf(a){if(typeof a=="string")return a
throw A.d(A.m(a,"String"))},
h8(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.m(a,"String"))},
eC(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.m(a,"String?"))},
dk(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.q(a[q],b)
return s},
f2(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.dk(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.q(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
dd(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.bh([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.a.n(a5,"T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){k=a5.length
j=k-1-p
if(!(j>=0))return A.y(a5,j)
m=B.z.ae(m+l,a5[j])
i=a6[p]
h=i.w
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.q(i,a5)}m+=">"}else{m=""
r=null}o=a4.x
g=a4.y
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.q(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.q(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.q(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.q(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
q(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6)return A.q(a.x,b)
if(l===7){s=a.x
r=A.q(s,b)
q=s.w
return(q===12||q===13?"("+r+")":r)+"?"}if(l===8)return"FutureOr<"+A.q(a.x,b)+">"
if(l===9){p=A.fa(a.x)
o=a.y
return o.length>0?p+("<"+A.dk(o,b)+">"):p}if(l===11)return A.f2(a,b)
if(l===12)return A.dd(a,b,null)
if(l===13)return A.dd(a.x,b,a.y)
if(l===14){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.y(b,n)
return b[n]}return"?"},
fa(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
ey(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
ex(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.c4(a,b,!1)
else if(typeof m=="number"){s=m
r=A.av(a,5,"#")
q=A.c6(s)
for(p=0;p<s;++p)q[p]=r
o=A.au(a,b,q)
n[b]=o
return o}else return m},
ev(a,b){return A.d8(a.tR,b)},
eu(a,b){return A.d8(a.eT,b)},
c4(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.d2(A.d0(a,null,b,c))
r.set(b,s)
return s},
c5(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.d2(A.d0(a,b,c,!0))
q.set(c,r)
return r},
ew(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.cv(a,b,c.w===10?c.y:[c])
p.set(s,q)
return q},
G(a,b){b.a=A.eN
b.b=A.eO
return b},
av(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.x(null,null)
s.w=b
s.as=c
r=A.G(a,s)
a.eC.set(c,r)
return r},
d7(a,b,c){var s,r=b.as+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.es(a,b,r,c)
a.eC.set(r,s)
return s},
es(a,b,c,d){var s,r,q
if(d){s=b.w
if(!A.I(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.x(null,null)
q.w=6
q.x=b
q.as=c
return A.G(a,q)},
cx(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.er(a,b,r,c)
a.eC.set(r,s)
return s},
er(a,b,c,d){var s,r,q,p
if(d){s=b.w
if(!A.I(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.aB(b.x)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.x
if(q.w===8&&A.aB(q.x))return q
else return A.cQ(a,b)}}p=new A.x(null,null)
p.w=7
p.x=b
p.as=c
return A.G(a,p)},
d5(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.ep(a,b,r,c)
a.eC.set(r,s)
return s},
ep(a,b,c,d){var s,r
if(d){s=b.w
if(A.I(b)||b===t.K||b===t._)return b
else if(s===1)return A.au(a,"A",[b])
else if(b===t.P||b===t.T)return t.Y}r=new A.x(null,null)
r.w=8
r.x=b
r.as=c
return A.G(a,r)},
et(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.x(null,null)
s.w=14
s.x=b
s.as=q
r=A.G(a,s)
a.eC.set(q,r)
return r},
at(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
eo(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
au(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.at(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.x(null,null)
r.w=9
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.G(a,r)
a.eC.set(p,q)
return q},
cv(a,b,c){var s,r,q,p,o,n
if(b.w===10){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.at(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.x(null,null)
o.w=10
o.x=s
o.y=r
o.as=q
n=A.G(a,o)
a.eC.set(q,n)
return n},
d6(a,b,c){var s,r,q="+"+(b+"("+A.at(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.x(null,null)
s.w=11
s.x=b
s.y=c
s.as=q
r=A.G(a,s)
a.eC.set(q,r)
return r},
d4(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.at(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.at(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.eo(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.x(null,null)
p.w=12
p.x=b
p.y=c
p.as=r
o=A.G(a,p)
a.eC.set(r,o)
return o},
cw(a,b,c,d){var s,r=b.as+("<"+A.at(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.eq(a,b,c,r,d)
a.eC.set(r,s)
return s},
eq(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.c6(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.N(a,b,r,0)
m=A.a5(a,c,r,0)
return A.cw(a,n,m,c!==m)}}l=new A.x(null,null)
l.w=13
l.x=b
l.y=c
l.as=d
return A.G(a,l)},
d0(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
d2(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.eh(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.d1(a,r,l,k,!1)
else if(q===46)r=A.d1(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.M(a.u,a.e,k.pop()))
break
case 94:k.push(A.et(a.u,k.pop()))
break
case 35:k.push(A.av(a.u,5,"#"))
break
case 64:k.push(A.av(a.u,2,"@"))
break
case 126:k.push(A.av(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.ej(a,k)
break
case 38:A.ei(a,k)
break
case 42:p=a.u
k.push(A.d7(p,A.M(p,a.e,k.pop()),a.n))
break
case 63:p=a.u
k.push(A.cx(p,A.M(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.d5(p,A.M(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.eg(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.d3(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.el(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-2)
break
case 43:n=l.indexOf("(",r)
k.push(l.substring(r,n))
k.push(-4)
k.push(a.p)
a.p=k.length
r=n+1
break
default:throw"Bad character "+q}}}m=k.pop()
return A.M(a.u,a.e,m)},
eh(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
d1(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===10)o=o.x
n=A.ey(s,o.x)[p]
if(n==null)A.cl('No "'+p+'" in "'+A.e8(o)+'"')
d.push(A.c5(s,o,n))}else d.push(p)
return m},
ej(a,b){var s,r=a.u,q=A.d_(a,b),p=b.pop()
if(typeof p=="string")b.push(A.au(r,p,q))
else{s=A.M(r,a.e,p)
switch(s.w){case 12:b.push(A.cw(r,s,q,a.n))
break
default:b.push(A.cv(r,s,q))
break}}},
eg(a,b){var s,r,q,p,o,n=null,m=a.u,l=b.pop()
if(typeof l=="number")switch(l){case-1:s=b.pop()
r=n
break
case-2:r=b.pop()
s=n
break
default:b.push(l)
r=n
s=r
break}else{b.push(l)
r=n
s=r}q=A.d_(a,b)
l=b.pop()
switch(l){case-3:l=b.pop()
if(s==null)s=m.sEA
if(r==null)r=m.sEA
p=A.M(m,a.e,l)
o=new A.ba()
o.a=q
o.b=s
o.c=r
b.push(A.d4(m,p,o))
return
case-4:b.push(A.d6(m,b.pop(),q))
return
default:throw A.d(A.aH("Unexpected state under `()`: "+A.k(l)))}},
ei(a,b){var s=b.pop()
if(0===s){b.push(A.av(a.u,1,"0&"))
return}if(1===s){b.push(A.av(a.u,4,"1&"))
return}throw A.d(A.aH("Unexpected extended operation "+A.k(s)))},
d_(a,b){var s=b.splice(a.p)
A.d3(a.u,a.e,s)
a.p=b.pop()
return s},
M(a,b,c){if(typeof c=="string")return A.au(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.ek(a,b,c)}else return c},
d3(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.M(a,b,c[s])},
el(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.M(a,b,c[s])},
ek(a,b,c){var s,r,q=b.w
if(q===10){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==9)throw A.d(A.aH("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.d(A.aH("Bad index "+c+" for "+b.h(0)))},
ft(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.i(a,b,null,c,null,!1)?1:0
r.set(c,s)}if(0===s)return!1
if(1===s)return!0
return!0},
i(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(!A.I(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.w
if(r===4)return!0
if(A.I(b))return!1
if(b.w!==1)s=!1
else s=!0
if(s)return!0
q=r===14
if(q)if(A.i(a,c[b.x],c,d,e,!1))return!0
p=d.w
s=b===t.P||b===t.T
if(s){if(p===8)return A.i(a,b,c,d.x,e,!1)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return A.i(a,b.x,c,d,e,!1)
if(r===6)return A.i(a,b.x,c,d,e,!1)
return r!==7}if(r===6)return A.i(a,b.x,c,d,e,!1)
if(p===6){s=A.cQ(a,d)
return A.i(a,b,c,s,e,!1)}if(r===8){if(!A.i(a,b.x,c,d,e,!1))return!1
return A.i(a,A.cs(a,b),c,d,e,!1)}if(r===7){s=A.i(a,t.P,c,d,e,!1)
return s&&A.i(a,b.x,c,d,e,!1)}if(p===8){if(A.i(a,b,c,d.x,e,!1))return!0
return A.i(a,b,c,A.cs(a,d),e,!1)}if(p===7){s=A.i(a,b,c,t.P,e,!1)
return s||A.i(a,b,c,d.x,e,!1)}if(q)return!1
s=r!==12
if((!s||r===13)&&d===t.Z)return!0
o=r===11
if(o&&d===t.L)return!0
if(p===13){if(b===t.g)return!0
if(r!==13)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.i(a,j,c,i,e,!1)||!A.i(a,i,e,j,c,!1))return!1}return A.df(a,b.x,c,d.x,e,!1)}if(p===12){if(b===t.g)return!0
if(s)return!1
return A.df(a,b,c,d,e,!1)}if(r===9){if(p!==9)return!1
return A.eS(a,b,c,d,e,!1)}if(o&&p===11)return A.eW(a,b,c,d,e,!1)
return!1},
df(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.i(a3,a4.x,a5,a6.x,a7,!1))return!1
s=a4.y
r=a6.y
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.i(a3,p[h],a7,g,a5,!1))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.i(a3,p[o+h],a7,g,a5,!1))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.i(a3,k[h],a7,g,a5,!1))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;!0;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.i(a3,e[a+2],a7,g,a5,!1))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
eS(a,b,c,d,e,f){var s,r,q,p,o,n=b.x,m=d.x
for(;n!==m;){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.c5(a,b,r[o])
return A.d9(a,p,null,c,d.y,e,!1)}return A.d9(a,b.y,null,c,d.y,e,!1)},
d9(a,b,c,d,e,f,g){var s,r=b.length
for(s=0;s<r;++s)if(!A.i(a,b[s],d,e[s],f,!1))return!1
return!0},
eW(a,b,c,d,e,f){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.i(a,r[s],c,q[s],e,!1))return!1
return!0},
aB(a){var s,r=a.w
if(!(a===t.P||a===t.T))if(!A.I(a))if(r!==7)if(!(r===6&&A.aB(a.x)))s=r===8&&A.aB(a.x)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
fs(a){var s
if(!A.I(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
I(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
d8(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
c6(a){return a>0?new Array(a):v.typeUniverse.sEA},
x:function x(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
ba:function ba(){this.c=this.b=this.a=null},
c3:function c3(a){this.a=a},
b9:function b9(){},
as:function as(a){this.a=a},
ea(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.fd()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.aA(new A.bF(q),1)).observe(s,{childList:true})
return new A.bE(q,s,r)}else if(self.setImmediate!=null)return A.fe()
return A.ff()},
eb(a){self.scheduleImmediate(A.aA(new A.bG(t.M.a(a)),0))},
ec(a){self.setImmediate(A.aA(new A.bH(t.M.a(a)),0))},
ed(a){t.M.a(a)
A.em(0,a)},
em(a,b){var s=new A.c1()
s.am(a,b)
return s},
f0(a){return new A.b5(new A.j($.h,a.i("j<0>")),a.i("b5<0>"))},
eH(a,b){a.$2(0,null)
b.b=!0
return b.a},
eE(a,b){A.eI(a,b)},
eG(a,b){b.S(0,a)},
eF(a,b){b.a7(A.Q(a),A.O(a))},
eI(a,b){var s,r,q=new A.c7(b),p=new A.c8(b)
if(a instanceof A.j)a.a5(q,p,t.z)
else{s=t.z
if(a instanceof A.j)a.V(q,p,s)
else{r=new A.j($.h,t.c)
r.a=8
r.c=a
r.a5(q,p,s)}}},
fc(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.h.ac(new A.cb(s),t.o,t.S,t.z)},
bm(a,b){var s=A.bi(a,"error",t.K)
return new A.a9(s,b==null?A.dO(a):b)},
dO(a){var s
if(t.Q.b(a)){s=a.gH()
if(s!=null)return s}return B.w},
cu(a,b){var s,r,q
for(s=t.c;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.D()
b.B(a)
A.a3(b,q)}else{q=t.F.a(b.c)
b.a3(a)
a.P(q)}},
ef(a,b){var s,r,q,p={},o=p.a=a
for(s=t.c;r=o.a,(r&4)!==0;o=a){a=s.a(o.c)
p.a=a}if((r&24)===0){q=t.F.a(b.c)
b.a3(o)
p.a.P(q)
return}if((r&16)===0&&b.c==null){b.B(o)
return}b.a^=2
A.X(null,null,b.b,t.M.a(new A.bP(p,b)))},
a3(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.n,r=t.F,q=t.e;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.c9(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.a3(c.a,b)
p.a=k
j=k.a}o=c.a
i=o.c
p.b=m
p.c=i
if(n){h=b.c
h=(h&1)!==0||(h&15)===8}else h=!0
if(h){g=b.b.b
if(m){o=o.b===g
o=!(o||o)}else o=!1
if(o){s.a(i)
A.c9(i.a,i.b)
return}f=$.h
if(f!==g)$.h=g
else f=null
b=b.c
if((b&15)===8)new A.bW(p,c,m).$0()
else if(n){if((b&1)!==0)new A.bV(p,i).$0()}else if((b&2)!==0)new A.bU(c,p).$0()
if(f!=null)$.h=f
b=p.c
if(b instanceof A.j){o=p.a.$ti
o=o.i("A<2>").b(b)||!o.y[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.E(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.cu(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.E(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
f3(a,b){var s
if(t.C.b(a))return b.ac(a,t.z,t.K,t.l)
s=t.w
if(s.b(a))return s.a(a)
throw A.d(A.cH(a,"onError",u.c))},
f1(){var s,r
for(s=$.a4;s!=null;s=$.a4){$.az=null
r=s.b
$.a4=r
if(r==null)$.ay=null
s.a.$0()}},
f6(){$.cA=!0
try{A.f1()}finally{$.az=null
$.cA=!1
if($.a4!=null)$.cF().$1(A.dp())}},
dl(a){var s=new A.b6(a),r=$.ay
if(r==null){$.a4=$.ay=s
if(!$.cA)$.cF().$1(A.dp())}else $.ay=r.b=s},
f5(a){var s,r,q,p=$.a4
if(p==null){A.dl(a)
$.az=$.ay
return}s=new A.b6(a)
r=$.az
if(r==null){s.b=p
$.a4=$.az=s}else{q=r.b
s.b=q
$.az=r.b=s
if(q==null)$.ay=s}},
fz(a){var s,r=null,q=$.h
if(B.b===q){A.X(r,r,B.b,a)
return}s=!1
if(s){A.X(r,r,q,t.M.a(a))
return}A.X(r,r,q,t.M.a(q.a6(a)))},
fO(a,b){A.bi(a,"stream",t.K)
return new A.bc(b.i("bc<0>"))},
c9(a,b){A.f5(new A.ca(a,b))},
di(a,b,c,d,e){var s,r=$.h
if(r===c)return d.$0()
$.h=c
s=r
try{r=d.$0()
return r}finally{$.h=s}},
dj(a,b,c,d,e,f,g){var s,r=$.h
if(r===c)return d.$1(e)
$.h=c
s=r
try{r=d.$1(e)
return r}finally{$.h=s}},
f4(a,b,c,d,e,f,g,h,i){var s,r=$.h
if(r===c)return d.$2(e,f)
$.h=c
s=r
try{r=d.$2(e,f)
return r}finally{$.h=s}},
X(a,b,c,d){t.M.a(d)
if(B.b!==c)d=c.a6(d)
A.dl(d)},
bF:function bF(a){this.a=a},
bE:function bE(a,b,c){this.a=a
this.b=b
this.c=c},
bG:function bG(a){this.a=a},
bH:function bH(a){this.a=a},
c1:function c1(){},
c2:function c2(a,b){this.a=a
this.b=b},
b5:function b5(a,b){this.a=a
this.b=!1
this.$ti=b},
c7:function c7(a){this.a=a},
c8:function c8(a){this.a=a},
cb:function cb(a){this.a=a},
a9:function a9(a,b){this.a=a
this.b=b},
b7:function b7(){},
ar:function ar(a,b){this.a=a
this.$ti=b},
W:function W(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
j:function j(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
bM:function bM(a,b){this.a=a
this.b=b},
bT:function bT(a,b){this.a=a
this.b=b},
bQ:function bQ(a){this.a=a},
bR:function bR(a){this.a=a},
bS:function bS(a,b,c){this.a=a
this.b=b
this.c=c},
bP:function bP(a,b){this.a=a
this.b=b},
bO:function bO(a,b){this.a=a
this.b=b},
bN:function bN(a,b,c){this.a=a
this.b=b
this.c=c},
bW:function bW(a,b,c){this.a=a
this.b=b
this.c=c},
bX:function bX(a){this.a=a},
bV:function bV(a,b){this.a=a
this.b=b},
bU:function bU(a,b){this.a=a
this.b=b},
b6:function b6(a){this.a=a
this.b=null},
aZ:function aZ(){},
bz:function bz(a,b){this.a=a
this.b=b},
bA:function bA(a,b){this.a=a
this.b=b},
bc:function bc(a){this.$ti=a},
aw:function aw(){},
ca:function ca(a,b){this.a=a
this.b=b},
bb:function bb(){},
c_:function c_(a,b){this.a=a
this.b=b},
c0:function c0(a,b,c){this.a=a
this.b=b
this.c=c},
e2(a,b){return new A.af(a.i("@<0>").l(b).i("af<1,2>"))},
cO(a){var s,r={}
if(A.cD(a))return"{...}"
s=new A.b_("")
try{B.a.n($.u,a)
s.a+="{"
r.a=!0
a.aI(0,new A.bv(r,s))
s.a+="}"}finally{if(0>=$.u.length)return A.y($.u,-1)
$.u.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
ai:function ai(){},
bv:function bv(a,b){this.a=a
this.b=b},
dW(a,b){a=A.d(a)
if(a==null)a=t.K.a(a)
a.stack=b.h(0)
throw a
throw A.d("unreachable")},
cU(a,b,c){var s,r=A.ax(b),q=new J.aF(b,b.length,r.i("aF<1>"))
if(!q.q())return a
if(c.length===0){r=r.c
do{s=q.d
a+=A.k(s==null?r.a(s):s)}while(q.q())}else{s=q.d
a+=A.k(s==null?r.c.a(s):s)
for(r=r.c;q.q();){s=q.d
a=a+c+A.k(s==null?r.a(s):s)}}return a},
bo(a){if(typeof a=="number"||A.cz(a)||a==null)return J.aC(a)
if(typeof a=="string")return JSON.stringify(a)
return A.e4(a)},
dX(a,b){A.bi(a,"error",t.K)
A.bi(b,"stackTrace",t.l)
A.dW(a,b)},
aH(a){return new A.aG(a)},
cm(a,b){return new A.J(!1,null,b,a)},
cH(a,b,c){return new A.J(!0,a,b,c)},
e5(a){var s=null
return new A.ak(s,s,!1,s,s,a)},
e6(a,b){return new A.ak(null,null,!0,a,b,"Value not in range")},
e7(a,b){return a},
cN(a,b,c,d){return new A.aM(b,!0,a,d,"Index out of range")},
b4(a){return new A.b3(a)},
cX(a){return new A.b1(a)},
cT(a){return new A.am(a)},
cn(a){return new A.aK(a)},
e_(a,b,c){var s,r
if(A.cD(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.bh([],t.s)
B.a.n($.u,a)
try{A.f_(a,s)}finally{if(0>=$.u.length)return A.y($.u,-1)
$.u.pop()}r=A.cU(b,t.U.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
dZ(a,b,c){var s,r
if(A.cD(a))return b+"..."+c
s=new A.b_(b)
B.a.n($.u,a)
try{r=s
r.a=A.cU(r.a,a,", ")}finally{if(0>=$.u.length)return A.y($.u,-1)
$.u.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
f_(a,b){var s,r,q,p,o,n,m,l=a.gaa(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.q())return
s=A.k(l.gF())
B.a.n(b,s)
k+=s.length+2;++j}if(!l.q()){if(j<=5)return
if(0>=b.length)return A.y(b,-1)
r=b.pop()
if(0>=b.length)return A.y(b,-1)
q=b.pop()}else{p=l.gF();++j
if(!l.q()){if(j<=4){B.a.n(b,A.k(p))
return}r=A.k(p)
if(0>=b.length)return A.y(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gF();++j
for(;l.q();p=o,o=n){n=l.gF();++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.y(b,-1)
k-=b.pop().length+2;--j}B.a.n(b,"...")
return}}q=A.k(p)
r=A.k(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.y(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.n(b,m)
B.a.n(b,q)
B.a.n(b,r)},
e:function e(){},
aG:function aG(a){this.a=a},
E:function E(){},
J:function J(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ak:function ak(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
aM:function aM(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
b3:function b3(a){this.a=a},
b1:function b1(a){this.a=a},
am:function am(a){this.a=a},
aK:function aK(a){this.a=a},
al:function al(){},
bL:function bL(a){this.a=a},
z:function z(){},
l:function l(){},
f:function f(){},
bd:function bd(){},
b_:function b_(a){this.a=a},
ct(a,b,c,d,e){var s=A.dm(new A.bK(c),t.B),r=s!=null
if(r&&!0){t.D.a(s)
if(r)B.o.ao(a,b,s,!1)}return new A.ap(a,b,s,!1,e.i("ap<0>"))},
dm(a,b){var s=$.h
if(s===B.b)return a
return s.aG(a,b)},
c:function c(){},
aD:function aD(){},
aE:function aE(){},
R:function R(){},
a_:function a_(){},
bn:function bn(){},
b:function b(){},
a:function a(){},
n:function n(){},
aL:function aL(){},
B:function B(){},
C:function C(){},
aX:function aX(){},
p:function p(){},
a2:function a2(){},
bD:function bD(a){this.a=a},
co:function co(a,b){this.a=a
this.$ti=b},
bJ:function bJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ap:function ap(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
bK:function bK(a){this.a=a},
bY:function bY(){},
o:function o(a,b,c){this.a=a
this.b=b
this.$ti=c},
fv(){var s,r,q=t.r.a(document.querySelector("#canvas"))
$.cd=q
if(q!=null)q.focus()
q=$.cd
q=q==null?null:B.x.af(q,"2d")
$.ce=t.V.a(q)
q=new A.bp()
s=$.cd
r=s.width
r.toString
q.b=B.c.a4(r,10)
s=s.height
s.toString
q.c=B.c.a4(s,10)
q.d=A.cS()
q.sI(t.H.a(q.R()))
$.ez.b=q
q.A()},
dr(a,b){var s,r,q=$.ce
if(q!=null){B.d.sa8(q,b)
B.d.sah(q,"white")}s=B.c.ad(a.a*10)
r=B.c.ad(a.b*10)
q=$.ce
if(q!=null){q.fillRect(s,r,10,10)
q.strokeRect(s,r,10,10)}},
e1(){var s=new A.br(A.e2(t.S,t.y))
s.ak()
return s},
cS(){var s=new A.by(B.e)
s.al()
return s},
br:function br(a){this.a=a},
bs:function bs(a){this.a=a},
bt:function bt(a){this.a=a},
by:function by(a){this.a=$
this.b=a},
bp:function bp(){var _=this
_.a=0
_.e=_.d=_.c=_.b=$}},B={}
var w=[A,J,B]
var $={}
A.cp.prototype={}
J.ac.prototype={
m(a,b){return a===b},
gj(a){return A.aV(a)},
h(a){return"Instance of '"+A.bx(a)+"'"},
gu(a){return A.a7(A.cy(this))}}
J.aN.prototype={
h(a){return String(a)},
gj(a){return a?519018:218159},
gu(a){return A.a7(t.y)},
$iD:1,
$icc:1}
J.ae.prototype={
m(a,b){return null==b},
h(a){return"null"},
gj(a){return 0},
$iD:1,
$il:1}
J.w.prototype={}
J.U.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.aU.prototype={}
J.ao.prototype={}
J.T.prototype={
h(a){var s=a[$.dB()]
if(s==null)return this.aj(a)
return"JavaScript function for "+J.aC(s)},
$iS:1}
J.aQ.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.aR.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.v.prototype={
n(a,b){A.ax(a).c.a(b)
if(!!a.fixed$length)A.cl(A.b4("add"))
a.push(b)},
gt(a){if(a.length>0)return a[0]
throw A.d(A.dY())},
h(a){return A.dZ(a,"[","]")},
gj(a){return A.aV(a)},
gk(a){return a.length},
$iz:1,
$iaT:1}
J.bq.prototype={}
J.aF.prototype={
q(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.dy(q)
throw A.d(q)}s=r.c
if(s>=p){r.sa2(null)
return!1}r.sa2(q[s]);++r.c
return!0},
sa2(a){this.d=this.$ti.i("1?").a(a)}}
J.aP.prototype={
ad(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.b4(""+a+".toInt()"))},
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gj(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
a4(a,b){return(a|0)===a?a/b|0:this.aE(a,b)},
aE(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.b4("Result of truncating division is "+A.k(s)+": "+A.k(a)+" ~/ "+b))},
aC(a,b){var s
if(a>0)s=this.aB(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
aB(a,b){return b>31?0:a>>>b},
gu(a){return A.a7(t.p)},
$it:1}
J.ad.prototype={
gu(a){return A.a7(t.S)},
$iD:1,
$ia8:1}
J.aO.prototype={
gu(a){return A.a7(t.i)},
$iD:1}
J.a0.prototype={
ae(a,b){return a+b},
h(a){return a},
gj(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gu(a){return A.a7(t.N)},
gk(a){return a.length},
$iD:1,
$iV:1}
A.ag.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.aa.prototype={}
A.ah.prototype={
gaa(a){return new A.a1(this,this.gk(0),this.$ti.i("a1<1>"))}}
A.an.prototype={
gav(){var s=this.a.length
return s},
gaD(){var s=this.a.length,r=this.b
if(r>s)return s
return r},
gk(a){var s=this.a.length,r=this.b
if(r>=s)return 0
return s-r}}
A.a1.prototype={
gF(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s,r,q,p=this,o=p.a,n=o.gk(0)
if(p.b!==n)throw A.d(A.cn(o))
s=p.c
if(s>=n){p.sY(null)
return!1}r=o.gaD()+s
q=o.gav()
if(r>=q)A.cl(A.cN(s,o.gk(0),o,"index"))
o=o.a
if(!(r<o.length))return A.y(o,r)
p.sY(o[r]);++p.c
return!0},
sY(a){this.d=this.$ti.i("1?").a(a)}}
A.bB.prototype={
p(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.aj.prototype={
h(a){return"Null check operator used on a null value"}}
A.aS.prototype={
h(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.b2.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.bw.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.ab.prototype={}
A.aq.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iL:1}
A.K.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.dA(r==null?"unknown":r)+"'"},
$iS:1,
gaR(){return this},
$C:"$1",
$R:1,
$D:null}
A.aI.prototype={$C:"$0",$R:0}
A.aJ.prototype={$C:"$2",$R:2}
A.b0.prototype={}
A.aY.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.dA(s)+"'"}}
A.Z.prototype={
m(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.Z))return!1
return this.$_target===b.$_target&&this.a===b.a},
gj(a){return(A.fx(this.a)^A.aV(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bx(this.a)+"'")}}
A.b8.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.aW.prototype={
h(a){return"RuntimeError: "+this.a}}
A.af.prototype={
gk(a){return this.a},
ag(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.aK(b)},
aK(a){var s,r,q=this.d
if(q==null)return null
s=q[J.bl(a)&1073741823]
r=this.a9(s,a)
if(r<0)return null
return s[r].b},
X(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"){s=m.b
m.Z(s==null?m.b=m.N():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.Z(r==null?m.c=m.N():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.N()
p=J.bl(b)&1073741823
o=q[p]
if(o==null)q[p]=[m.O(b,c)]
else{n=m.a9(o,b)
if(n>=0)o[n].b=c
else o.push(m.O(b,c))}}},
aI(a,b){var s,r,q=this
q.$ti.i("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.d(A.cn(q))
s=s.c}},
Z(a,b,c){var s,r=this.$ti
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.O(b,c)
else s.b=c},
O(a,b){var s=this,r=s.$ti,q=new A.bu(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.r=s.r+1&1073741823
return q},
a9(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.dM(a[r].a,b))return r
return-1},
h(a){return A.cO(this)},
N(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.bu.prototype={}
A.cg.prototype={
$1(a){return this.a(a)},
$S:5}
A.ch.prototype={
$2(a,b){return this.a(a,b)},
$S:6}
A.ci.prototype={
$1(a){return this.a(A.bf(a))},
$S:7}
A.bI.prototype={}
A.x.prototype={
i(a){return A.c5(v.typeUniverse,this,a)},
l(a){return A.ew(v.typeUniverse,this,a)}}
A.ba.prototype={}
A.c3.prototype={
h(a){return A.q(this.a,null)}}
A.b9.prototype={
h(a){return this.a}}
A.as.prototype={$iE:1}
A.bF.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:2}
A.bE.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:8}
A.bG.prototype={
$0(){this.a.$0()},
$S:3}
A.bH.prototype={
$0(){this.a.$0()},
$S:3}
A.c1.prototype={
am(a,b){if(self.setTimeout!=null)self.setTimeout(A.aA(new A.c2(this,b),0),a)
else throw A.d(A.b4("`setTimeout()` not found."))}}
A.c2.prototype={
$0(){this.b.$0()},
$S:0}
A.b5.prototype={
S(a,b){var s,r=this,q=r.$ti
q.i("1/?").a(b)
if(b==null)b=q.c.a(b)
if(!r.b)r.a.ap(b)
else{s=r.a
if(q.i("A<1>").b(b))s.a0(b)
else s.K(b)}},
a7(a,b){var s=this.a
if(this.b)s.v(a,b)
else s.aq(a,b)}}
A.c7.prototype={
$1(a){return this.a.$2(0,a)},
$S:9}
A.c8.prototype={
$2(a,b){this.a.$2(1,new A.ab(a,t.l.a(b)))},
$S:10}
A.cb.prototype={
$2(a,b){this.a(A.be(a),b)},
$S:11}
A.a9.prototype={
h(a){return A.k(this.a)},
$ie:1,
gH(){return this.b}}
A.b7.prototype={
a7(a,b){var s
A.bi(a,"error",t.K)
s=this.a
if((s.a&30)!==0)throw A.d(A.cT("Future already completed"))
s.v(a,b)}}
A.ar.prototype={
S(a,b){var s,r=this.$ti
r.i("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.d(A.cT("Future already completed"))
s.a1(r.i("1/").a(b))}}
A.W.prototype={
aL(a){if((this.c&15)!==6)return!0
return this.b.b.U(t.m.a(this.d),a.a,t.y,t.K)},
aJ(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.C.b(q))p=l.aN(q,m,a.b,o,n,t.l)
else p=l.U(t.w.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.h.b(A.Q(s))){if((r.c&1)!==0)throw A.d(A.cm("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.cm("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.j.prototype={
a3(a){this.a=this.a&1|4
this.c=a},
V(a,b,c){var s,r,q,p=this.$ti
p.l(c).i("1/(2)").a(a)
s=$.h
if(s===B.b){if(b!=null&&!t.C.b(b)&&!t.w.b(b))throw A.d(A.cH(b,"onError",u.c))}else{c.i("@<0/>").l(p.c).i("1(2)").a(a)
if(b!=null)b=A.f3(b,s)}r=new A.j(s,c.i("j<0>"))
q=b==null?1:3
this.J(new A.W(r,q,a,b,p.i("@<1>").l(c).i("W<1,2>")))
return r},
aQ(a,b){return this.V(a,null,b)},
a5(a,b,c){var s,r=this.$ti
r.l(c).i("1/(2)").a(a)
s=new A.j($.h,c.i("j<0>"))
this.J(new A.W(s,19,a,b,r.i("@<1>").l(c).i("W<1,2>")))
return s},
aA(a){this.a=this.a&1|16
this.c=a},
B(a){this.a=a.a&30|this.a&1
this.c=a.c},
J(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.c.a(r.c)
if((s.a&24)===0){s.J(a)
return}r.B(s)}A.X(null,null,r.b,t.M.a(new A.bM(r,a)))}},
P(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.c.a(m.c)
if((n.a&24)===0){n.P(a)
return}m.B(n)}l.a=m.E(a)
A.X(null,null,m.b,t.M.a(new A.bT(l,m)))}},
D(){var s=t.F.a(this.c)
this.c=null
return this.E(s)},
E(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
a_(a){var s,r,q,p=this
p.a^=2
try{a.V(new A.bQ(p),new A.bR(p),t.P)}catch(q){s=A.Q(q)
r=A.O(q)
A.fz(new A.bS(p,s,r))}},
a1(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("A<1>").b(a))if(q.b(a))A.cu(a,r)
else r.a_(a)
else{s=r.D()
q.c.a(a)
r.a=8
r.c=a
A.a3(r,s)}},
K(a){var s,r=this
r.$ti.c.a(a)
s=r.D()
r.a=8
r.c=a
A.a3(r,s)},
v(a,b){var s
t.l.a(b)
s=this.D()
this.aA(A.bm(a,b))
A.a3(this,s)},
ap(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("A<1>").b(a)){this.a0(a)
return}this.ar(a)},
ar(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.X(null,null,s.b,t.M.a(new A.bO(s,a)))},
a0(a){var s=this.$ti
s.i("A<1>").a(a)
if(s.b(a)){A.ef(a,this)
return}this.a_(a)},
aq(a,b){this.a^=2
A.X(null,null,this.b,t.M.a(new A.bN(this,a,b)))},
$iA:1}
A.bM.prototype={
$0(){A.a3(this.a,this.b)},
$S:0}
A.bT.prototype={
$0(){A.a3(this.b,this.a.a)},
$S:0}
A.bQ.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.K(p.$ti.c.a(a))}catch(q){s=A.Q(q)
r=A.O(q)
p.v(s,r)}},
$S:2}
A.bR.prototype={
$2(a,b){this.a.v(t.K.a(a),t.l.a(b))},
$S:12}
A.bS.prototype={
$0(){this.a.v(this.b,this.c)},
$S:0}
A.bP.prototype={
$0(){A.cu(this.a.a,this.b)},
$S:0}
A.bO.prototype={
$0(){this.a.K(this.b)},
$S:0}
A.bN.prototype={
$0(){this.a.v(this.b,this.c)},
$S:0}
A.bW.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.aM(t.O.a(q.d),t.z)}catch(p){s=A.Q(p)
r=A.O(p)
q=m.c&&t.n.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.n.a(m.b.a.c)
else o.c=A.bm(s,r)
o.b=!0
return}if(l instanceof A.j&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.n.a(l.c)
q.b=!0}return}if(l instanceof A.j){n=m.b.a
q=m.a
q.c=l.aQ(new A.bX(n),t.z)
q.b=!1}},
$S:0}
A.bX.prototype={
$1(a){return this.a},
$S:13}
A.bV.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.U(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.Q(l)
r=A.O(l)
q=this.a
q.c=A.bm(s,r)
q.b=!0}},
$S:0}
A.bU.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.n.a(m.a.a.c)
p=m.b
if(p.a.aL(s)&&p.a.e!=null){p.c=p.a.aJ(s)
p.b=!1}}catch(o){r=A.Q(o)
q=A.O(o)
p=t.n.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.bm(r,q)
n.b=!0}},
$S:0}
A.b6.prototype={}
A.aZ.prototype={
gk(a){var s,r,q=this,p={},o=new A.j($.h,t.a)
p.a=0
s=q.$ti
r=s.i("~(1)?").a(new A.bz(p,q))
t.j.a(new A.bA(p,o))
A.ct(q.a,q.b,r,!1,s.c)
return o}}
A.bz.prototype={
$1(a){this.b.$ti.c.a(a);++this.a.a},
$S(){return this.b.$ti.i("~(1)")}}
A.bA.prototype={
$0(){this.b.a1(this.a.a)},
$S:0}
A.bc.prototype={}
A.aw.prototype={$icY:1}
A.ca.prototype={
$0(){A.dX(this.a,this.b)},
$S:0}
A.bb.prototype={
aO(a){var s,r,q
t.M.a(a)
try{if(B.b===$.h){a.$0()
return}A.di(null,null,this,a,t.o)}catch(q){s=A.Q(q)
r=A.O(q)
A.c9(t.K.a(s),t.l.a(r))}},
aP(a,b,c){var s,r,q
c.i("~(0)").a(a)
c.a(b)
try{if(B.b===$.h){a.$1(b)
return}A.dj(null,null,this,a,b,t.o,c)}catch(q){s=A.Q(q)
r=A.O(q)
A.c9(t.K.a(s),t.l.a(r))}},
a6(a){return new A.c_(this,t.M.a(a))},
aG(a,b){return new A.c0(this,b.i("~(0)").a(a),b)},
aM(a,b){b.i("0()").a(a)
if($.h===B.b)return a.$0()
return A.di(null,null,this,a,b)},
U(a,b,c,d){c.i("@<0>").l(d).i("1(2)").a(a)
d.a(b)
if($.h===B.b)return a.$1(b)
return A.dj(null,null,this,a,b,c,d)},
aN(a,b,c,d,e,f){d.i("@<0>").l(e).l(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.h===B.b)return a.$2(b,c)
return A.f4(null,null,this,a,b,c,d,e,f)},
ac(a,b,c,d){return b.i("@<0>").l(c).l(d).i("1(2,3)").a(a)}}
A.c_.prototype={
$0(){return this.a.aO(this.b)},
$S:0}
A.c0.prototype={
$1(a){var s=this.c
return this.a.aP(this.b,s.a(a),s)},
$S(){return this.c.i("~(0)")}}
A.ai.prototype={
gk(a){return this.a},
h(a){return A.cO(this)},
$icr:1}
A.bv.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.k(a)
r.a=s+": "
r.a+=A.k(b)},
$S:14}
A.e.prototype={
gH(){return A.O(this.$thrownJsError)}}
A.aG.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.bo(s)
return"Assertion failed"}}
A.E.prototype={}
A.J.prototype={
gM(){return"Invalid argument"+(!this.a?"(s)":"")},
gL(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gM()+q+o
if(!s.a)return n
return n+s.gL()+": "+A.bo(s.gT())},
gT(){return this.b}}
A.ak.prototype={
gT(){return A.eA(this.b)},
gM(){return"RangeError"},
gL(){var s,r=this.e
if(r==null)s=""
else s=": Not greater than or equal to "+A.k(r)
return s}}
A.aM.prototype={
gT(){return A.be(this.b)},
gM(){return"RangeError"},
gL(){if(A.be(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gk(a){return this.f}}
A.b3.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.b1.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.am.prototype={
h(a){return"Bad state: "+this.a}}
A.aK.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bo(s)+"."}}
A.al.prototype={
h(a){return"Stack Overflow"},
gH(){return null},
$ie:1}
A.bL.prototype={
h(a){return"Exception: "+this.a}}
A.z.prototype={
gk(a){var s,r=this.gaa(this)
for(s=0;r.q();)++s
return s},
h(a){return A.e_(this,"(",")")}}
A.l.prototype={
gj(a){return A.f.prototype.gj.call(this,0)},
h(a){return"null"}}
A.f.prototype={$if:1,
m(a,b){return this===b},
gj(a){return A.aV(this)},
h(a){return"Instance of '"+A.bx(this)+"'"},
gu(a){return A.fm(this)},
toString(){return this.h(this)}}
A.bd.prototype={
h(a){return""},
$iL:1}
A.b_.prototype={
gk(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.c.prototype={}
A.aD.prototype={
h(a){var s=String(a)
s.toString
return s}}
A.aE.prototype={
h(a){var s=String(a)
s.toString
return s}}
A.R.prototype={
af(a,b){return a.getContext(b)},
$iR:1}
A.a_.prototype={
sa8(a,b){a.fillStyle=b},
sah(a,b){a.strokeStyle=b},
$ia_:1}
A.bn.prototype={
h(a){var s=String(a)
s.toString
return s}}
A.b.prototype={
h(a){var s=a.localName
s.toString
return s}}
A.a.prototype={$ia:1}
A.n.prototype={
ao(a,b,c,d){return a.addEventListener(b,A.aA(t.D.a(c),1),!1)},
$in:1}
A.aL.prototype={
gk(a){return a.length}}
A.B.prototype={$iB:1}
A.C.prototype={
h(a){var s=a.nodeValue
return s==null?this.ai(a):s}}
A.aX.prototype={
gk(a){return a.length}}
A.p.prototype={}
A.a2.prototype={
gaF(a){var s=new A.j($.h,t.q),r=t.f.a(new A.bD(new A.ar(s,t.d)))
this.aw(a)
r=A.dm(r,t.p)
r.toString
this.az(a,r)
return s},
az(a,b){var s=a.requestAnimationFrame(A.aA(t.f.a(b),1))
s.toString
return s},
aw(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=["ms","moz","webkit","o"]
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[r[q]+"CancelAnimationFrame"]||b[r[q]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
A.bD.prototype={
$1(a){this.a.S(0,A.da(a))},
$S:15}
A.co.prototype={}
A.bJ.prototype={}
A.ap.prototype={$ie9:1}
A.bK.prototype={
$1(a){return this.a.$1(t.B.a(a))},
$S:16}
A.bY.prototype={
ab(a){if(a<=0||a>4294967296)throw A.d(A.e5("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
A.o.prototype={
h(a){return"Point("+this.a+", "+this.b+")"},
m(a,b){if(b==null)return!1
return b instanceof A.o&&this.a===b.a&&this.b===b.b},
gj(a){var s=B.c.gj(this.a),r=B.c.gj(this.b),q=A.cV(A.cV(0,s),r)
q=q+((q&67108863)<<3)&536870911
q^=q>>>11
return q+((q&16383)<<15)&536870911}}
A.br.prototype={
ak(){var s,r,q=window
q.toString
s=t.x
r=t.v
A.ct(q,"keydown",s.a(new A.bs(this)),!1,r)
q=window
q.toString
A.ct(q,"keyup",s.a(new A.bt(this)),!1,r)},
G(a){var s=this.a.ag(0,a)
return s===!0}}
A.bs.prototype={
$1(a){var s=t.v.a(a).keyCode
s.toString
this.a.a.X(0,s,!0)},
$S:4}
A.bt.prototype={
$1(a){var s=t.v.a(a).keyCode
s.toString
this.a.a.X(0,s,!1)},
$S:4}
A.by.prototype={
al(){var s,r,q,p,o=A.bh(new Array(6),t.W)
for(s=t.H,r=5,q=0;q<6;++q,r=p){p=r-1
o[q]=new A.o(r,0,s)}this.san(t.t.a(o))},
W(){var s,r,q,p,o=this.a
o===$&&A.r("_body")
s=B.a.gt(o)
r=s.$ti
q=r.a(this.b)
p=r.c
r=A.ax(o).c.a(new A.o(p.a(s.a+q.a),p.a(s.b+q.b),r))
if(!!o.fixed$length)A.cl(A.b4("insert"))
o.splice(0,0,r)},
au(){var s,r,q=this.a
q===$&&A.r("_body")
s=q.length
r=0
for(;r<q.length;q.length===s||(0,A.dy)(q),++r)A.dr(q[r],"green")},
aH(){var s,r,q,p=this.a
p===$&&A.r("_body")
s=A.ax(p).i("an<1>")
p=new A.an(p,1,null,s)
A.e7(1,"start")
p=new A.a1(p,p.gk(0),s.i("a1<1>"))
s=s.c
for(;p.q();){r=p.d
if(r==null)r=s.a(r)
q=B.a.gt(this.a)
if(q instanceof A.o&&r.a===q.a&&r.b===q.b)return!0}return!1},
san(a){this.a=t.t.a(a)},
sC(a){this.b=t.H.a(a)}}
A.bp.prototype={
R(){var s,r=this.b
r===$&&A.r("_rightEdgeX")
r=B.j.ab(r)
s=this.c
s===$&&A.r("_bottomEdgeY")
return new A.o(r,B.j.ab(s),t.H)},
A(){var s=0,r=A.f0(t.o),q,p=this,o,n,m,l,k
var $async$A=A.fc(function(a,b){if(a===1)return A.eF(b,r)
while(true)switch(s){case 0:l=window
l.toString
k=A
s=3
return A.eE(B.o.gaF(l),$async$A)
case 3:l=k.da(b)
if(l-p.a>60){p.a=l
l=$.ce
if(l!=null){B.d.sa8(l,"white")
o=$.cd
n=o==null
m=n?null:o.width
if(m==null)m=0
o=n?null:o.height
l.fillRect(0,0,m,o==null?0:o)}l=p.e
l===$&&A.r("_food")
A.dr(l,"blue")
l=p.d
l===$&&A.r("_snake")
if($.bk().G(37)&&!l.b.m(0,B.e))l.sC(B.n)
else if($.bk().G(39)&&!l.b.m(0,B.n))l.sC(B.e)
else if($.bk().G(38)&&!l.b.m(0,B.l))l.sC(B.m)
else if($.bk().G(40)&&!l.b.m(0,B.m))l.sC(B.l)
l.W()
o=l.a
o===$&&A.r("_body")
if(0>=o.length){q=A.y(o,-1)
s=1
break}o.pop()
l.au()
l=p.d.a
l===$&&A.r("_body")
if(B.a.gt(l).m(0,p.e)){p.d.W()
p.sI(t.H.a(p.R()))}l=p.d.a
l===$&&A.r("_body")
if(B.a.gt(l).a>-1){l=p.d.a
l===$&&A.r("_body")
l=B.a.gt(l)
o=p.b
o===$&&A.r("_rightEdgeX")
if(l.a<o){l=p.d.a
l===$&&A.r("_body")
if(B.a.gt(l).b>-1){l=p.d.a
l===$&&A.r("_body")
l=B.a.gt(l)
o=p.c
o===$&&A.r("_bottomEdgeY")
l=l.b>=o||p.d.aH()}else l=!0}else l=!0}else l=!0
if(l){p.d=A.cS()
p.sI(t.H.a(p.R()))}}p.A()
case 1:return A.eG(q,r)}})
return A.eH($async$A,r)},
sI(a){this.e=t.H.a(a)}};(function aliases(){var s=J.ac.prototype
s.ai=s.h
s=J.U.prototype
s.aj=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0
s(A,"fd","eb",1)
s(A,"fe","ec",1)
s(A,"ff","ed",1)
r(A,"dp","f6",0)})();(function inheritance(){var s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.f,null)
r(A.f,[A.cp,J.ac,J.aF,A.e,A.z,A.a1,A.bB,A.bw,A.ab,A.aq,A.K,A.ai,A.bu,A.bI,A.x,A.ba,A.c3,A.c1,A.b5,A.a9,A.b7,A.W,A.j,A.b6,A.aZ,A.bc,A.aw,A.al,A.bL,A.l,A.bd,A.b_,A.co,A.ap,A.bY,A.o,A.br,A.by,A.bp])
r(J.ac,[J.aN,J.ae,J.w,J.aQ,J.aR,J.aP,J.a0])
r(J.w,[J.U,J.v,A.n,A.a_,A.bn,A.a])
r(J.U,[J.aU,J.ao,J.T])
s(J.bq,J.v)
r(J.aP,[J.ad,J.aO])
r(A.e,[A.ag,A.E,A.aS,A.b2,A.b8,A.aW,A.b9,A.aG,A.J,A.b3,A.b1,A.am,A.aK])
s(A.aa,A.z)
s(A.ah,A.aa)
s(A.an,A.ah)
s(A.aj,A.E)
r(A.K,[A.aI,A.aJ,A.b0,A.cg,A.ci,A.bF,A.bE,A.c7,A.bQ,A.bX,A.bz,A.c0,A.bD,A.bK,A.bs,A.bt])
r(A.b0,[A.aY,A.Z])
s(A.af,A.ai)
r(A.aJ,[A.ch,A.c8,A.cb,A.bR,A.bv])
s(A.as,A.b9)
r(A.aI,[A.bG,A.bH,A.c2,A.bM,A.bT,A.bS,A.bP,A.bO,A.bN,A.bW,A.bV,A.bU,A.bA,A.ca,A.c_])
s(A.ar,A.b7)
s(A.bb,A.aw)
r(A.J,[A.ak,A.aM])
r(A.n,[A.C,A.a2])
s(A.b,A.C)
s(A.c,A.b)
r(A.c,[A.aD,A.aE,A.R,A.aL,A.aX])
s(A.p,A.a)
s(A.B,A.p)
s(A.bJ,A.aZ)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{a8:"int",fj:"double",t:"num",V:"String",cc:"bool",l:"Null",aT:"List",f:"Object",cr:"Map"},mangledNames:{},types:["~()","~(~())","l(@)","l()","~(B)","@(@)","@(@,V)","@(V)","l(~())","~(@)","l(@,L)","~(a8,@)","l(f,L)","j<@>(@)","~(f?,f?)","~(t)","~(a)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.ev(v.typeUniverse,JSON.parse('{"aU":"U","ao":"U","T":"U","fD":"a","fI":"a","fL":"b","fE":"c","fM":"c","fF":"p","fJ":"C","fH":"C","aN":{"cc":[],"D":[]},"ae":{"l":[],"D":[]},"v":{"aT":["1"],"z":["1"]},"bq":{"v":["1"],"aT":["1"],"z":["1"]},"aP":{"t":[]},"ad":{"a8":[],"t":[],"D":[]},"aO":{"t":[],"D":[]},"a0":{"V":[],"D":[]},"ag":{"e":[]},"aa":{"z":["1"]},"ah":{"z":["1"]},"an":{"ah":["1"],"z":["1"]},"aj":{"E":[],"e":[]},"aS":{"e":[]},"b2":{"e":[]},"aq":{"L":[]},"K":{"S":[]},"aI":{"S":[]},"aJ":{"S":[]},"b0":{"S":[]},"aY":{"S":[]},"Z":{"S":[]},"b8":{"e":[]},"aW":{"e":[]},"af":{"ai":["1","2"],"cr":["1","2"]},"b9":{"e":[]},"as":{"E":[],"e":[]},"j":{"A":["1"]},"a9":{"e":[]},"ar":{"b7":["1"]},"aw":{"cY":[]},"bb":{"aw":[],"cY":[]},"ai":{"cr":["1","2"]},"a8":{"t":[]},"aG":{"e":[]},"E":{"e":[]},"J":{"e":[]},"ak":{"e":[]},"aM":{"e":[]},"b3":{"e":[]},"b1":{"e":[]},"am":{"e":[]},"aK":{"e":[]},"al":{"e":[]},"bd":{"L":[]},"B":{"a":[]},"c":{"n":[]},"aD":{"n":[]},"aE":{"n":[]},"R":{"n":[]},"b":{"n":[]},"aL":{"n":[]},"C":{"n":[]},"aX":{"n":[]},"p":{"a":[]},"a2":{"n":[]},"bJ":{"aZ":["1"]},"ap":{"e9":["1"]}}'))
A.eu(v.typeUniverse,JSON.parse('{"aa":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.ds
return{n:s("a9"),Q:s("e"),B:s("a"),Z:s("S"),e:s("A<@>"),U:s("z<@>"),W:s("v<o<t>>"),s:s("v<V>"),b:s("v<@>"),T:s("ae"),g:s("T"),v:s("B"),t:s("aT<o<t>>"),P:s("l"),K:s("f"),H:s("o<t>"),L:s("fN"),l:s("L"),N:s("V"),R:s("D"),h:s("E"),E:s("ao"),c:s("j<@>"),a:s("j<a8>"),q:s("j<t>"),d:s("ar<t>"),y:s("cc"),m:s("cc(f)"),i:s("fj"),z:s("@"),O:s("@()"),w:s("@(f)"),C:s("@(f,L)"),S:s("a8"),A:s("0&*"),_:s("f*"),r:s("R?"),V:s("a_?"),Y:s("A<l>?"),X:s("f?"),F:s("W<@,@>?"),D:s("@(a)?"),j:s("~()?"),x:s("~(B)?"),p:s("t"),o:s("~"),M:s("~()"),f:s("~(t)")}})();(function constants(){B.x=A.R.prototype
B.d=A.a_.prototype
B.y=J.ac.prototype
B.a=J.v.prototype
B.c=J.ad.prototype
B.z=J.a0.prototype
B.A=J.T.prototype
B.B=J.w.prototype
B.k=J.aU.prototype
B.f=J.ao.prototype
B.o=A.a2.prototype
B.h=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.p=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.v=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.q=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.u=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.t=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.r=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.i=function(hooks) { return hooks; }

B.j=new A.bY()
B.b=new A.bb()
B.w=new A.bd()
B.l=new A.o(0,1,t.H)
B.m=new A.o(0,-1,t.H)
B.e=new A.o(1,0,t.H)
B.n=new A.o(-1,0,t.H)})();(function staticFields(){$.bZ=null
$.u=A.bh([],A.ds("v<f>"))
$.cP=null
$.cK=null
$.cJ=null
$.du=null
$.dn=null
$.dx=null
$.cf=null
$.cj=null
$.cC=null
$.a4=null
$.ay=null
$.az=null
$.cA=!1
$.h=B.b
$.ez=A.ee("game")
$.cd=null
$.ce=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"fG","dB",()=>A.fl("_$dart_dartClosure"))
s($,"fP","dC",()=>A.F(A.bC({
toString:function(){return"$receiver$"}})))
s($,"fQ","dD",()=>A.F(A.bC({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"fR","dE",()=>A.F(A.bC(null)))
s($,"fS","dF",()=>A.F(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"fV","dI",()=>A.F(A.bC(void 0)))
s($,"fW","dJ",()=>A.F(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"fU","dH",()=>A.F(A.cW(null)))
s($,"fT","dG",()=>A.F(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"fY","dL",()=>A.F(A.cW(void 0)))
s($,"fX","dK",()=>A.F(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"fZ","cF",()=>A.ea())
r($,"ha","bk",()=>A.e1())})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.w,MediaError:J.w,NavigatorUserMediaError:J.w,OverconstrainedError:J.w,PositionError:J.w,GeolocationPositionError:J.w,WebGLRenderingContext:J.w,WebGL2RenderingContext:J.w,HTMLAudioElement:A.c,HTMLBRElement:A.c,HTMLBaseElement:A.c,HTMLBodyElement:A.c,HTMLButtonElement:A.c,HTMLContentElement:A.c,HTMLDListElement:A.c,HTMLDataElement:A.c,HTMLDataListElement:A.c,HTMLDetailsElement:A.c,HTMLDialogElement:A.c,HTMLDivElement:A.c,HTMLEmbedElement:A.c,HTMLFieldSetElement:A.c,HTMLHRElement:A.c,HTMLHeadElement:A.c,HTMLHeadingElement:A.c,HTMLHtmlElement:A.c,HTMLIFrameElement:A.c,HTMLImageElement:A.c,HTMLInputElement:A.c,HTMLLIElement:A.c,HTMLLabelElement:A.c,HTMLLegendElement:A.c,HTMLLinkElement:A.c,HTMLMapElement:A.c,HTMLMediaElement:A.c,HTMLMenuElement:A.c,HTMLMetaElement:A.c,HTMLMeterElement:A.c,HTMLModElement:A.c,HTMLOListElement:A.c,HTMLObjectElement:A.c,HTMLOptGroupElement:A.c,HTMLOptionElement:A.c,HTMLOutputElement:A.c,HTMLParagraphElement:A.c,HTMLParamElement:A.c,HTMLPictureElement:A.c,HTMLPreElement:A.c,HTMLProgressElement:A.c,HTMLQuoteElement:A.c,HTMLScriptElement:A.c,HTMLShadowElement:A.c,HTMLSlotElement:A.c,HTMLSourceElement:A.c,HTMLSpanElement:A.c,HTMLStyleElement:A.c,HTMLTableCaptionElement:A.c,HTMLTableCellElement:A.c,HTMLTableDataCellElement:A.c,HTMLTableHeaderCellElement:A.c,HTMLTableColElement:A.c,HTMLTableElement:A.c,HTMLTableRowElement:A.c,HTMLTableSectionElement:A.c,HTMLTemplateElement:A.c,HTMLTextAreaElement:A.c,HTMLTimeElement:A.c,HTMLTitleElement:A.c,HTMLTrackElement:A.c,HTMLUListElement:A.c,HTMLUnknownElement:A.c,HTMLVideoElement:A.c,HTMLDirectoryElement:A.c,HTMLFontElement:A.c,HTMLFrameElement:A.c,HTMLFrameSetElement:A.c,HTMLMarqueeElement:A.c,HTMLElement:A.c,HTMLAnchorElement:A.aD,HTMLAreaElement:A.aE,HTMLCanvasElement:A.R,CanvasRenderingContext2D:A.a_,DOMException:A.bn,MathMLElement:A.b,SVGAElement:A.b,SVGAnimateElement:A.b,SVGAnimateMotionElement:A.b,SVGAnimateTransformElement:A.b,SVGAnimationElement:A.b,SVGCircleElement:A.b,SVGClipPathElement:A.b,SVGDefsElement:A.b,SVGDescElement:A.b,SVGDiscardElement:A.b,SVGEllipseElement:A.b,SVGFEBlendElement:A.b,SVGFEColorMatrixElement:A.b,SVGFEComponentTransferElement:A.b,SVGFECompositeElement:A.b,SVGFEConvolveMatrixElement:A.b,SVGFEDiffuseLightingElement:A.b,SVGFEDisplacementMapElement:A.b,SVGFEDistantLightElement:A.b,SVGFEFloodElement:A.b,SVGFEFuncAElement:A.b,SVGFEFuncBElement:A.b,SVGFEFuncGElement:A.b,SVGFEFuncRElement:A.b,SVGFEGaussianBlurElement:A.b,SVGFEImageElement:A.b,SVGFEMergeElement:A.b,SVGFEMergeNodeElement:A.b,SVGFEMorphologyElement:A.b,SVGFEOffsetElement:A.b,SVGFEPointLightElement:A.b,SVGFESpecularLightingElement:A.b,SVGFESpotLightElement:A.b,SVGFETileElement:A.b,SVGFETurbulenceElement:A.b,SVGFilterElement:A.b,SVGForeignObjectElement:A.b,SVGGElement:A.b,SVGGeometryElement:A.b,SVGGraphicsElement:A.b,SVGImageElement:A.b,SVGLineElement:A.b,SVGLinearGradientElement:A.b,SVGMarkerElement:A.b,SVGMaskElement:A.b,SVGMetadataElement:A.b,SVGPathElement:A.b,SVGPatternElement:A.b,SVGPolygonElement:A.b,SVGPolylineElement:A.b,SVGRadialGradientElement:A.b,SVGRectElement:A.b,SVGScriptElement:A.b,SVGSetElement:A.b,SVGStopElement:A.b,SVGStyleElement:A.b,SVGElement:A.b,SVGSVGElement:A.b,SVGSwitchElement:A.b,SVGSymbolElement:A.b,SVGTSpanElement:A.b,SVGTextContentElement:A.b,SVGTextElement:A.b,SVGTextPathElement:A.b,SVGTextPositioningElement:A.b,SVGTitleElement:A.b,SVGUseElement:A.b,SVGViewElement:A.b,SVGGradientElement:A.b,SVGComponentTransferFunctionElement:A.b,SVGFEDropShadowElement:A.b,SVGMPathElement:A.b,Element:A.b,AbortPaymentEvent:A.a,AnimationEvent:A.a,AnimationPlaybackEvent:A.a,ApplicationCacheErrorEvent:A.a,BackgroundFetchClickEvent:A.a,BackgroundFetchEvent:A.a,BackgroundFetchFailEvent:A.a,BackgroundFetchedEvent:A.a,BeforeInstallPromptEvent:A.a,BeforeUnloadEvent:A.a,BlobEvent:A.a,CanMakePaymentEvent:A.a,ClipboardEvent:A.a,CloseEvent:A.a,CustomEvent:A.a,DeviceMotionEvent:A.a,DeviceOrientationEvent:A.a,ErrorEvent:A.a,ExtendableEvent:A.a,ExtendableMessageEvent:A.a,FetchEvent:A.a,FontFaceSetLoadEvent:A.a,ForeignFetchEvent:A.a,GamepadEvent:A.a,HashChangeEvent:A.a,InstallEvent:A.a,MediaEncryptedEvent:A.a,MediaKeyMessageEvent:A.a,MediaQueryListEvent:A.a,MediaStreamEvent:A.a,MediaStreamTrackEvent:A.a,MessageEvent:A.a,MIDIConnectionEvent:A.a,MIDIMessageEvent:A.a,MutationEvent:A.a,NotificationEvent:A.a,PageTransitionEvent:A.a,PaymentRequestEvent:A.a,PaymentRequestUpdateEvent:A.a,PopStateEvent:A.a,PresentationConnectionAvailableEvent:A.a,PresentationConnectionCloseEvent:A.a,ProgressEvent:A.a,PromiseRejectionEvent:A.a,PushEvent:A.a,RTCDataChannelEvent:A.a,RTCDTMFToneChangeEvent:A.a,RTCPeerConnectionIceEvent:A.a,RTCTrackEvent:A.a,SecurityPolicyViolationEvent:A.a,SensorErrorEvent:A.a,SpeechRecognitionError:A.a,SpeechRecognitionEvent:A.a,SpeechSynthesisEvent:A.a,StorageEvent:A.a,SyncEvent:A.a,TrackEvent:A.a,TransitionEvent:A.a,WebKitTransitionEvent:A.a,VRDeviceEvent:A.a,VRDisplayEvent:A.a,VRSessionEvent:A.a,MojoInterfaceRequestEvent:A.a,ResourceProgressEvent:A.a,USBConnectionEvent:A.a,IDBVersionChangeEvent:A.a,AudioProcessingEvent:A.a,OfflineAudioCompletionEvent:A.a,WebGLContextEvent:A.a,Event:A.a,InputEvent:A.a,SubmitEvent:A.a,EventTarget:A.n,HTMLFormElement:A.aL,KeyboardEvent:A.B,Document:A.C,HTMLDocument:A.C,Node:A.C,HTMLSelectElement:A.aX,CompositionEvent:A.p,FocusEvent:A.p,MouseEvent:A.p,DragEvent:A.p,PointerEvent:A.p,TextEvent:A.p,TouchEvent:A.p,WheelEvent:A.p,UIEvent:A.p,Window:A.a2,DOMWindow:A.a2})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,DOMException:true,MathMLElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,KeyboardEvent:true,Document:true,HTMLDocument:true,Node:false,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,MouseEvent:true,DragEvent:true,PointerEvent:true,TextEvent:true,TouchEvent:true,WheelEvent:true,UIEvent:false,Window:true,DOMWindow:true})})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$1$1=function(a){return this(a)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.fv
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=main.dart.js.map
