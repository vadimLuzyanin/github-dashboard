(this["webpackJsonpgithub-dashboard"]=this["webpackJsonpgithub-dashboard"]||[]).push([[0],{26:function(e,t,n){e.exports=n(39)},31:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),o=n.n(c),u=n(3),l=n(4),i=n(10),m=n(1),f=n(5),d=(n(31),function(){return r.a.createElement("div",{className:"lds-dual-ring"})});function s(){var e=Object(u.a)(["\n  padding: 1rem;\n"]);return s=function(){return e},e}function b(){var e=Object(u.a)(["\n  width: 100%;\n  max-width: 360px;\n"]);return b=function(){return e},e}function g(){var e=Object(u.a)(["\n  font-size: 2rem;\n  color: #f26419;\n"]);return g=function(){return e},e}function h(){var e=Object(u.a)(["\n  font-size: 2rem;\n  color: #f26419;\n  text-align: center;\n  padding: 2rem;\n"]);return h=function(){return e},e}function E(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  font-size: 1.5rem;\n  min-height: 75vh;\n  background-color: #2f4858;\n  margin-top: 1rem;\n"]);return E=function(){return e},e}var p=l.a.div(E()),v=l.a.div(h()),j=l.a.span(g()),O=l.a.img(b()),k=l.a.div(s()),x=function(){var e,t,n=Object(a.useState)(!1),c=Object(f.a)(n,2),o=c[0],u=c[1],l=Object(a.useState)(null),i=Object(f.a)(l,2),s=i[0],b=i[1],g=Object(a.useState)([]),h=Object(f.a)(g,2),E=h[0],x=h[1],S=Object(a.useState)(!1),y=Object(f.a)(S,2),z=y[0],w=y[1],_=Object(m.g)().currentRepoId;return Object(a.useEffect)((function(){var e="https://api.github.com/repositories/".concat(_);u(!0),fetch(e,{headers:{Authorization:"token ecb3455da3aab928cd06a9e8bfab728f8882a1c7"}}).then((function(e){if(e.ok)return e.json();w(!0)})).then((function(e){b(e),u(!1),e&&fetch(e.contributors_url,{headers:{Authorization:"token ecb3455da3aab928cd06a9e8bfab728f8882a1c7"}}).then((function(e){if(e.ok)return e.json();w(!0)})).then((function(e){return x(e)}))}))}),[_]),s&&(e=new Date(s.updated_at),t="".concat(e.getDate(),".").concat(e.getMonth(),".").concat(e.getFullYear()," ").concat(e.getHours(),":").concat(e.getMinutes())),r.a.createElement(p,null,z?r.a.createElement("div",null,"Error"):o?r.a.createElement(d,null):s&&r.a.createElement(a.Fragment,null,r.a.createElement(v,null,s.name),r.a.createElement("div",null,r.a.createElement(j,null,"Nickname:")," ",s.owner.login),r.a.createElement(O,{src:s.owner.avatar_url,alt:"profile pic"}),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(j,null,"Stars:")," ",s.stargazers_count),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(j,null,"Last commit:")," ",t),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(j,null,"Languages list:")," ",s.language),r.a.createElement("br",null),r.a.createElement(j,null,"Most active contributors:"),r.a.createElement("ul",null,E.slice(0,10).map((function(e){return r.a.createElement("li",{key:e.id},e.login)}))),r.a.createElement("br",null),r.a.createElement(j,null,"Description:")," ",r.a.createElement(k,null,s.description)))},S=n(25);function y(){var e=Object(u.a)(["\n  display: inline-block;\n  background-color: ",";\n  color: #33658a;\n  font-size: 2rem;\n  width: 2rem;\n  text-align: center;\n  margin: 0.5rem;\n  cursor: pointer;\n"]);return y=function(){return e},e}function z(){var e=Object(u.a)(["\n  text-align: center;\n"]);return z=function(){return e},e}function w(){var e=Object(u.a)(["\n  color: #86bbd8;\n"]);return w=function(){return e},e}function _(){var e=Object(u.a)(["\n  font-size: 2rem;\n  color: #f26419;\n  cursor: pointer;\n  text-decoration: underline;\n"]);return _=function(){return e},e}function I(){var e=Object(u.a)(["\n  padding: 2rem;\n  text-align: center;\n  font-size: 1.5rem;\n  background-color: #2f4858;\n  margin: 1rem 0;\n"]);return I=function(){return e},e}function M(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: 75vh;\n"]);return M=function(){return e},e}function D(){var e=Object(u.a)(["\n  height: 2rem;\n  padding-left: 1rem;\n  background-color: #86bbd8;\n  color: #2f4858;\n  width: 100%;\n  &::placeholder {\n    color: #2f4858;\n    opacity: 0.8;\n  }\n  margin: 1rem 0;\n"]);return D=function(){return e},e}var A=l.a.input(D()),C=l.a.div(M()),F=l.a.div(I()),q=l.a.div(_()),H=l.a.a(w()),L=l.a.div(z()),J=l.a.span(y(),(function(e){return e.isCurrentPage?"#f6ae2d":"#86bbd8"})),N=function(){var e=Object(a.useState)(localStorage.getItem("query")||""),t=Object(f.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)([]),u=Object(f.a)(o,2),l=u[0],m=u[1],s=Object(a.useState)([1]),b=Object(f.a)(s,2),g=b[0],h=b[1],E=Object(a.useState)(localStorage.getItem("page")||1),p=Object(f.a)(E,2),v=p[0],j=p[1],O=Object(a.useState)(!1),k=Object(f.a)(O,2),x=k[0],y=k[1],z=Object(a.useState)(!1),w=Object(f.a)(z,2),_=w[0],I=w[1],M=function(e,t){var n=Object(a.useState)(e),r=Object(f.a)(n,2),c=r[0],o=r[1];return Object(a.useEffect)((function(){var n=setTimeout((function(){o(e)}),t);return function(){clearTimeout(n)}}),[e,t]),c}(n,300);return Object(a.useEffect)((function(){var e="https://api.github.com/search/repositories?q=".concat(M||"stars:>0","&sort=stars&order=desc&per_page=10&page=").concat(v);y(!0),fetch(e,{headers:{Authorization:"token ecb3455da3aab928cd06a9e8bfab728f8882a1c7"}}).then((function(e){return e.ok||I(!0),e.json()})).then((function(e){var t=e.items.map((function(e){var t=new Date(e.updated_at),n="".concat(t.getDate(),".").concat(t.getMonth(),".").concat(t.getFullYear()," ").concat(t.getHours(),":").concat(t.getMinutes());return r.a.createElement(F,{key:e.id},r.a.createElement(i.b,{to:"".concat("/github-dashboard","/repos/").concat(e.id)},r.a.createElement(q,null,e.name)),r.a.createElement("br",null),"Stars: ",e.stargazers_count,r.a.createElement("br",null),"Last commit: ",n,r.a.createElement("br",null),r.a.createElement(H,{href:e.svn_url},"Github link"))}));m(t);var n=Math.ceil(e.total_count/10);n>10&&(n=10),h(n),y(!1),localStorage.setItem("query",M),localStorage.setItem("page",v)}))}),[M,v]),r.a.createElement(a.Fragment,null,r.a.createElement(A,{onChange:function(e){j(1),c(e.target.value)},value:n,placeholder:"Enter text for a search"}),r.a.createElement(C,null,_?r.a.createElement("div",null,"Error"):x?r.a.createElement(d,null):r.a.createElement("div",null,l)),r.a.createElement(L,null,Object(S.a)(Array(g)).map((function(e,t){return r.a.createElement(J,{key:"page"+t+1,onClick:function(){return j(t+1)},isCurrentPage:t+1===v},t+1)}))))};n(38);function P(){var e=Object(u.a)(["\n  color: #f26419;\n  font-size: 2rem;\n  text-align: center;\n  text-decoration: underline;\n  padding: 2rem;\n  background-color: #2f4858;\n"]);return P=function(){return e},e}function R(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 960px;\n  padding: 15px;\n  margin: 0 auto;\n  background-color: #33658a;\n  color: #f6ae2d;\n"]);return R=function(){return e},e}var T=l.a.div(R()),Y=l.a.div(P()),B=function(){return r.a.createElement(T,null,r.a.createElement(i.a,null,r.a.createElement(i.b,{to:"".concat("/github-dashboard","/")},r.a.createElement(Y,null,"Home page")),r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"".concat("/github-dashboard","/"),exact:!0},r.a.createElement(N,null)),r.a.createElement(m.b,{path:"".concat("/github-dashboard","/repos/:currentRepoId")},r.a.createElement(x,null)),r.a.createElement(m.a,{from:"*",to:"".concat("/github-dashboard")}))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.bdece623.chunk.js.map