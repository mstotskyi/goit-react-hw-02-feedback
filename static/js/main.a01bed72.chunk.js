(this["webpackJsonpoit-react-hw-01-components"]=this["webpackJsonpoit-react-hw-01-components"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(3),o=n.n(r),s=(n(13),n(4)),i=n(5),d=n(6),u=n(8),b=n(7),j=(n(14),n(0));function l(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,r=e.positivePercentage;return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:t}),Object(j.jsx)("p",{children:n}),Object(j.jsx)("p",{children:c}),Object(j.jsx)("p",{children:a}),Object(j.jsxs)("p",{children:[r,"%"]})]})}function h(e){var t=e.message;return Object(j.jsx)("p",{children:t})}function v(e){var t=e.options,n=e.onLeaveFeedback;return Object(j.jsx)("div",{className:"counter",children:t.map((function(e){return Object(j.jsx)("button",{className:"btn",name:e,onClick:n,children:e},e)}))})}function p(e){var t=e.title,n=e.children;return Object(j.jsxs)("section",{className:"App",children:[Object(j.jsx)("h1",{className:"title",children:t}),n]})}var O=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){var n=t.currentTarget.name;e.setState((function(e){return Object(s.a)({},n,e[n]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.countTotalFeedback();if(0!==t){var n=e.state.good;return Math.round(100*n/t)}},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.countTotalFeedback(),t=this.countPositiveFeedbackPercentage(),n=this.state,c=n.good,a=n.neutral,r=n.bad,o=Object.keys(this.state);return Object(j.jsxs)(p,{title:"Please leave feedback",children:[Object(j.jsx)(v,{options:o,onLeaveFeedback:this.onLeaveFeedback}),0!==e?Object(j.jsx)(l,{good:c,neutral:a,bad:r,total:e,positivePercentage:t}):Object(j.jsx)(h,{message:"No feedback given"})]})}}]),n}(c.Component),f=O;o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.a01bed72.chunk.js.map