(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,n,t){},12:function(e,n,t){"use strict";t.r(n);var a=t(5),c=t.n(a),r=t(4),i=t(1),l=(t(10),t(2)),s=t.n(l);function o(e,n){for(var t=[],a=e;a<=n;a+=1)t.push(a);return t}var u=t(0),j=function(e){var n=e.total,t=e.perPage,a=e.currentPage,c=e.onPageChange,r=e.onNextLink,i=e.onPrevLink,l=o(1,Math.ceil(n/t));return Object(u.jsxs)("ul",{className:"pagination",children:[Object(u.jsx)("li",{className:s()("page-item",{disabled:a<=1}),children:Object(u.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":a<=1?"true":"false",onClick:i,children:"\xab"})}),l.map((function(e){return Object(u.jsx)("li",{className:s()("page-item",{active:a===e}),children:Object(u.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return c(e)},children:e})},e)})),Object(u.jsx)("li",{className:s()("page-item",{disabled:a>=l.length}),children:Object(u.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":a>=l.length?"true":"false",onClick:function(){return r(l.length)},children:"\xbb"})})]})},d=o(1,42).map((function(e){return"Item ".concat(e)})),h=function(){var e=Object(i.useState)(5),n=Object(r.a)(e,2),t=n[0],a=n[1],c=Object(i.useState)(1),l=Object(r.a)(c,2),s=l[0],o=l[1],h=s*t-t,g=s*t,m=d.slice(h,g),b=h+1,p=h+m.length;return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{children:"Items with Pagination"}),Object(u.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(s," (items ").concat(b," - ").concat(p," of ").concat(d.length,")")}),Object(u.jsxs)("div",{className:"form-group row",children:[Object(u.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(u.jsx)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:t,onChange:function(e){a(Number(e.target.value)),o(1)},children:[3,5,10,20].map((function(e){return Object(u.jsx)("option",{value:e,children:e},e)}))})}),Object(u.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(u.jsx)(j,{total:d.length,perPage:t,currentPage:s,onPageChange:o,onNextLink:function(e){o((function(n){return n<e?n+1:n}))},onPrevLink:function(){o((function(e){return e>1?e-1:e}))}}),Object(u.jsx)("ul",{children:m.map((function(e){return Object(u.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};c.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.7c739a41.chunk.js.map