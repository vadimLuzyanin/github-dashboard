(this["webpackJsonpgithub-dashboard"]=this["webpackJsonpgithub-dashboard"]||[]).push([[0],{26:function(e,n,t){e.exports=t(39)},31:function(e,n,t){},38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(21),u=t.n(c),l=t(3),o=t(4),i=t(10),m=t(1),f=t(5),s=(t(31),function(){return r.a.createElement("div",{className:"lds-dual-ring"})});function d(){var e=Object(l.a)(["\n  padding: 1rem;\n"]);return d=function(){return e},e}function b(){var e=Object(l.a)(["\n  width: 100%;\n  max-width: 360px;\n"]);return b=function(){return e},e}function g(){var e=Object(l.a)(["\n  font-size: 2rem;\n  color: #f26419;\n"]);return g=function(){return e},e}function E(){var e=Object(l.a)(["\n  font-size: 2rem;\n  color: #f26419;\n  text-align: center;\n  padding: 2rem;\n"]);return E=function(){return e},e}function p(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  font-size: 1.5rem;\n  min-height: 75vh;\n  background-color: #2f4858;\n  margin-top: 1rem;\n"]);return p=function(){return e},e}var v=o.a.div(p()),h=o.a.div(E()),j=o.a.span(g()),O=o.a.img(b()),k=o.a.div(d()),x=function(){var e,n,t=Object(a.useState)(!1),c=Object(f.a)(t,2),u=c[0],l=c[1],o=Object(a.useState)(null),i=Object(f.a)(o,2),d=i[0],b=i[1],g=Object(a.useState)([]),E=Object(f.a)(g,2),p=E[0],x=E[1],S=Object(a.useState)(!1),y=Object(f.a)(S,2),z=y[0],w=y[1],_=Object(m.g)().currentRepoId;return Object(a.useEffect)((function(){var e="https://api.github.com/repositories/".concat(_);l(!0),fetch(e,{headers:{Authorization:"token ecb3455da3aab928cd06a9e8bfab728f8882a1c7"}}).then((function(e){if(e.ok)return e.json();w(!0)})).then((function(e){b(e),l(!1),e&&fetch(e.contributors_url,{headers:{Authorization:"token ecb3455da3aab928cd06a9e8bfab728f8882a1c7"}}).then((function(e){if(e.ok)return e.json();w(!0)})).then((function(e){return x(e)}))}))}),[_]),d&&(e=new Date(d.updated_at),n="".concat(e.getDate(),".").concat(e.getMonth(),".").concat(e.getFullYear()," ").concat(e.getHours(),":").concat(e.getMinutes())),r.a.createElement("div",null,r.a.createElement(v,null,z?r.a.createElement("div",null,"Error"):u?r.a.createElement(s,null):d&&r.a.createElement(a.Fragment,null,r.a.createElement(h,null,d.name),r.a.createElement("div",null,r.a.createElement(j,null,"Nickname:")," ",d.owner.login),r.a.createElement(O,{src:d.owner.avatar_url,alt:"profile pic"}),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(j,null,"Stars:")," ",d.stargazers_count),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(j,null,"Last commit:")," ",n),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(j,null,"Languages list:")," ",d.language),r.a.createElement("br",null),r.a.createElement(j,null,"Most active contributors:"),r.a.createElement("ul",null,p.slice(0,10).map((function(e){return r.a.createElement("li",{key:e.id},e.login)}))),r.a.createElement("br",null),r.a.createElement(j,null,"Description:")," ",r.a.createElement(k,null,d.description))))},S=t(25);function y(){var e=Object(l.a)(["\n  display: inline-block;\n  background-color: ",";\n  color: #33658a;\n  font-size: 2rem;\n  width: 2rem;\n  text-align: center;\n  margin: 0.5rem;\n  cursor: pointer;\n"]);return y=function(){return e},e}function z(){var e=Object(l.a)(["\n  text-align: center;\n"]);return z=function(){return e},e}function w(){var e=Object(l.a)(["\n  color: #86bbd8;\n"]);return w=function(){return e},e}function _(){var e=Object(l.a)(["\n  font-size: 2rem;\n  color: #f26419;\n  cursor: pointer;\n  text-decoration: underline;\n"]);return _=function(){return e},e}function M(){var e=Object(l.a)(["\n  padding: 2rem;\n  text-align: center;\n  font-size: 1.5rem;\n  background-color: #2f4858;\n  margin: 1rem 0;\n"]);return M=function(){return e},e}function D(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: 75vh;\n"]);return D=function(){return e},e}function A(){var e=Object(l.a)(["\n  height: 2rem;\n  padding-left: 1rem;\n  background-color: #86bbd8;\n  color: #2f4858;\n  width: 100%;\n  &::placeholder {\n    color: #2f4858;\n    opacity: 0.8;\n  }\n  margin: 1rem 0;\n"]);return A=function(){return e},e}var C=o.a.input(A()),F=o.a.div(D()),H=o.a.div(M()),I=o.a.div(_()),L=o.a.a(w()),J=o.a.div(z()),N=o.a.span(y(),(function(e){return e.isCurrentPage?"#f6ae2d":"#86bbd8"})),P=function(){var e=Object(a.useState)(""),n=Object(f.a)(e,2),t=n[0],c=n[1],u=Object(a.useState)([]),l=Object(f.a)(u,2),o=l[0],m=l[1],d=Object(a.useState)([1]),b=Object(f.a)(d,2),g=b[0],E=b[1],p=Object(a.useState)(1),v=Object(f.a)(p,2),h=v[0],j=v[1],O=Object(a.useState)(!1),k=Object(f.a)(O,2),x=k[0],y=k[1],z=Object(a.useState)(!1),w=Object(f.a)(z,2),_=w[0],M=w[1],D=function(e,n){var t=Object(a.useState)(e),r=Object(f.a)(t,2),c=r[0],u=r[1];return Object(a.useEffect)((function(){var t=setTimeout((function(){u(e)}),n);return function(){clearTimeout(t)}}),[e,n]),c}(t,300);return Object(a.useEffect)((function(){var e="https://api.github.com/search/repositories?q=".concat(D||"stars:>0","&sort=stars&order=desc&per_page=10&page=").concat(h);y(!0),fetch(e,{headers:{Authorization:"token ecb3455da3aab928cd06a9e8bfab728f8882a1c7"}}).then((function(e){return e.ok||M(!0),e.json()})).then((function(e){var n=e.items.map((function(e){var n=new Date(e.updated_at),t="".concat(n.getDate(),".").concat(n.getMonth(),".").concat(n.getFullYear()," ").concat(n.getHours(),":").concat(n.getMinutes());return r.a.createElement(H,{key:e.id},r.a.createElement(i.b,{to:"/repos/".concat(e.id)},r.a.createElement(I,null,e.name)),r.a.createElement("br",null),"Stars: ",e.stargazers_count,r.a.createElement("br",null),"Last commit: ",t,r.a.createElement("br",null),r.a.createElement(L,{href:e.svn_url},"Github link"))}));m(n);var t=Math.ceil(e.total_count/10);t>10&&(t=10),E(t),y(!1)}))}),[D,h]),r.a.createElement(a.Fragment,null,r.a.createElement(C,{onChange:function(e){j(1),c(e.target.value)},value:t,placeholder:"Enter text for a search"}),r.a.createElement(F,null,_?r.a.createElement("div",null,"Error"):x?r.a.createElement(s,null):r.a.createElement("div",null,o)),r.a.createElement(J,null,Object(S.a)(Array(g)).map((function(e,n){return r.a.createElement(N,{key:"page"+n+1,onClick:function(){return j(n+1)},isCurrentPage:n+1===h},n+1)}))))};t(38);function R(){var e=Object(l.a)(["\n  color: #f26419;\n  font-size: 2rem;\n  text-align: center;\n  text-decoration: underline;\n  padding: 2rem;\n  background-color: #2f4858;\n"]);return R=function(){return e},e}function T(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 960px;\n  padding: 15px;\n  margin: 0 auto;\n  background-color: #33658a;\n  color: #f6ae2d;\n"]);return T=function(){return e},e}var Y=o.a.div(T()),q=o.a.div(R()),B=function(){return r.a.createElement(Y,null,r.a.createElement(i.a,null,r.a.createElement(i.b,{to:"/"},r.a.createElement(q,null,"Home page")),r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",exact:!0},r.a.createElement(P,null)),r.a.createElement(m.b,{path:"/repos/:currentRepoId"},r.a.createElement(x,null)),r.a.createElement(m.a,{from:"*",to:"/"}))))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.aae8996b.chunk.js.map