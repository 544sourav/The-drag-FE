(this.webpackJsonpthe_drag=this.webpackJsonpthe_drag||[]).push([[8],{236:function(e,t,l){"use strict";l.r(t);var c=l(2),n=(l(237),l(23)),o=l(17),a=l.n(o),s=l(35),i=l(1);a.a.config();t.default=e=>{let{helper:t,loading:l,close:o,setSelectedFilter:a}=e;const[r,j]=Object(c.useState)("des"),[b,d]=Object(c.useState)(""),[h,u]=Object(c.useState)(""),[p,O]=Object(c.useState)(""),[x,v]=Object(c.useState)(""),[m,g]=Object(c.useState)(!1);return Object(i.jsxs)("div",{className:"filter-popup",children:[Object(i.jsx)("h3",{children:"Search Filters"}),Object(i.jsxs)("form",{className:"filter-form",target:"_blank",onSubmit:e=>{e.preventDefault(),r||b||h||p||x?(t({type:b,count:x,sort:r,location:h,platform:p}),o()):g(!0)},children:[Object(i.jsxs)("div",{className:"sort",children:[Object(i.jsx)("label",{htmlFor:"sort",children:"Sort by"}),Object(i.jsxs)("select",{name:"sort",id:"sort",onChange:e=>{j(e.target.value),g(!1)},value:r,children:[Object(i.jsx)("option",{value:"",children:"Select an Option"}),Object(i.jsx)("option",{value:"asc",children:"Ascending (Followers)"}),Object(i.jsx)("option",{value:"des",children:"Descending (Followers)"})]})]}),Object(i.jsxs)("div",{className:"types",children:[Object(i.jsx)("label",{htmlFor:"type",children:"Type"}),Object(i.jsxs)("select",{name:"type",id:"type",onChange:e=>{d(e.target.value),g(!1)},value:b,className:"type-option",children:[Object(i.jsx)("option",{value:"",children:"Select an Option"}),n.a.map(((e,t)=>Object(i.jsx)("option",{value:e,children:e},t)))]})]}),Object(i.jsxs)("div",{className:"location",children:[Object(i.jsx)("label",{htmlFor:"location",children:"Location"}),Object(i.jsx)("input",{type:"text",name:"location",id:"location",placeholder:"Write Location",value:h,onChange:e=>{u(e.target.value),g(!1)}})]}),Object(i.jsxs)("div",{className:"platform",children:[Object(i.jsx)("label",{htmlFor:"platform",children:"Platform"}),Object(i.jsxs)("select",{name:"platform",id:"platform",onChange:e=>{O(e.target.value),g(!1)},value:p,children:[Object(i.jsx)("option",{value:"",children:"Select an Option"}),Object(i.jsx)("option",{value:"insta",children:"Instagram"}),Object(i.jsx)("option",{value:"linkedin",children:"LinkedIn"}),Object(i.jsx)("option",{value:"facebook",children:"Facebook"}),Object(i.jsx)("option",{value:"twitter",children:"Twitter"}),Object(i.jsx)("option",{value:"youtube",children:"YouTube"})]})]}),Object(i.jsxs)("div",{className:"follower-count",children:[Object(i.jsx)("label",{htmlFor:"follower-count",children:"Followers"}),Object(i.jsxs)("select",{name:"count",id:"count",onChange:e=>{v(e.target.value),g(!1)},value:x,children:[Object(i.jsx)("option",{value:"",children:"Select an Option"}),Object(i.jsx)("option",{value:"1-1000",children:"1 - 1000"}),Object(i.jsx)("option",{value:"1000-5000",children:"1000 - 5000"}),Object(i.jsx)("option",{value:"5000-10000",children:"5000 - 10,000"}),Object(i.jsx)("option",{value:"10000-50000",children:"10,000 - 50,000"}),Object(i.jsx)("option",{value:"50000-100000",children:"50,000 - 100000"}),Object(i.jsx)("option",{value:"100000-500000",children:"100000 - 500000"}),Object(i.jsx)("option",{value:"500000-700000",children:"500000 - 700000"}),Object(i.jsx)("option",{value:"700000-1000000",children:"700000 - 1000000"}),Object(i.jsx)("option",{value:"1000000-",children:"Above 1000000"})]})]}),Object(i.jsx)("div",{className:"done",children:Object(i.jsx)("button",{type:"submit",children:"Done"})}),m&&Object(i.jsx)("p",{className:"warning",children:"Please select at least one option before proceeding."})]}),Object(i.jsx)(s.a,{className:"close1",onClick:()=>o()})]})}},237:function(e,t,l){}}]);
//# sourceMappingURL=8.390f5410.chunk.js.map