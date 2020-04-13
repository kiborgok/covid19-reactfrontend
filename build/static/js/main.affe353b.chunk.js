(window["webpackJsonpestimator-frontend"]=window["webpackJsonpestimator-frontend"]||[]).push([[0],{31:function(e,t,a){e.exports=a(44)},37:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(12),o=a.n(r),c=a(9),m=a(8),s=a(50),u=a(47),d=a(48),i=a(25),p=(a(36),a(37),a(49)),E=a(51),h=function(e){return n.a.createElement("div",{className:"form-wrapper"},n.a.createElement(p.a,{onSubmit:e.onSubmit},n.a.createElement(p.a.Group,{controlId:"data-population"},n.a.createElement(p.a.Label,null,"Population"),n.a.createElement(p.a.Control,{type:"number",value:e.population,onChange:function(t){return e.setPopulation(t.target.value)},placeholder:"90000000",min:"1",required:!0})),n.a.createElement(p.a.Group,{controlId:"data-time-to-elapse"},n.a.createElement(p.a.Label,null,"Time To Elapse"),n.a.createElement(p.a.Control,{type:"number",value:e.timeToElapse,onChange:function(t){return e.setTimeToElapse(t.target.value)},placeholder:"56",min:"1",required:!0})),n.a.createElement(p.a.Group,{controlId:"data-reported-cases"},n.a.createElement(p.a.Label,null,"Reported Cases"),n.a.createElement(p.a.Control,{type:"number",value:e.reportedCases,onChange:function(t){return e.setReportedCases(t.target.value)},placeholder:"400000",min:"1",required:!0})),n.a.createElement(p.a.Group,{controlId:"data-total-hospital-beds"},n.a.createElement(p.a.Label,null,"Total Hospital Beds"),n.a.createElement(p.a.Control,{type:"number",value:e.totalHospitalBeds,onChange:function(t){return e.setTotalHospitalBeds(t.target.value)},placeholder:"90000",min:"1",required:!0})),n.a.createElement(p.a.Group,{controlId:"data-period-type"},n.a.createElement(p.a.Label,null,"Period Type"),n.a.createElement(p.a.Control,{as:"select",value:e.periodType,onChange:function(t){return e.setPeriodType(t.target.value)}},n.a.createElement("option",{value:"days"},"Days"),n.a.createElement("option",{value:"weeks"},"Weeks"),n.a.createElement("option",{value:"months"},"Months"))),n.a.createElement(E.a,{className:"raise-button",id:"data-go-estimate",variant:"info",size:"lg",block:"block",type:"submit"},"Go Estimate")))},b=a(46),y=function(e){var t=e.impact_data,a=10*t.reportedCases,l=Math.trunc(a*e.normalizePeriod(t.periodType,t.timeToElapse)),r=Math.trunc(.15*l),o=Math.trunc(t.totalHospitalBeds-r),c=Math.trunc(.05*l),m=Math.trunc(.02*l);return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",null,"Impact Estimation"),n.a.createElement(b.a,{striped:!0,bordered:!0,hover:!0},n.a.createElement("thead",null,n.a.createElement("tr",{className:"blue-color"},n.a.createElement("th",null,"Currently Infected"),n.a.createElement("th",null,"Infections By Requested Time"),n.a.createElement("th",null,"Severe Cases By Requested Time"),n.a.createElement("th",null,"Hospital Beds By Requested Time"),n.a.createElement("th",null,"Cases For ICU By Requested Time"),n.a.createElement("th",null,"Cases For Ventilators By Requested Time"))),n.a.createElement("tbody",null,Object.keys(t).length>0?n.a.createElement("tr",null,n.a.createElement("td",null,a),n.a.createElement("td",null,l),n.a.createElement("td",null,r),n.a.createElement("td",null,o),n.a.createElement("td",null,c),n.a.createElement("td",null,m)):n.a.createElement("tr",null,n.a.createElement("td",{colSpan:3},"No Data")))))},T=function(e){var t=e.severeImpact_data,a=50*t.reportedCases,l=Math.trunc(a*e.normalizePeriod(t.periodType,t.timeToElapse)),r=Math.trunc(.15*l),o=Math.trunc(t.totalHospitalBeds-r),c=Math.trunc(.05*l),m=Math.trunc(.02*l);return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",null,"Severe Impact Estimation"),n.a.createElement(b.a,{striped:!0,bordered:!0,hover:!0},n.a.createElement("thead",null,n.a.createElement("tr",{className:"blue-color"},n.a.createElement("th",null,"Currently Infected"),n.a.createElement("th",null,"Infections By Requested Time"),n.a.createElement("th",null,"Severe Cases By Requested Time"),n.a.createElement("th",null,"Hospital Beds By Requested Time"),n.a.createElement("th",null,"Cases For ICU By Requested Time"),n.a.createElement("th",null,"Cases For Ventilators By Requested Time"))),n.a.createElement("tbody",null,Object.keys(t).length>0?n.a.createElement("tr",null,n.a.createElement("td",null,a),n.a.createElement("td",null,l),n.a.createElement("td",null,r),n.a.createElement("td",null,o),n.a.createElement("td",null,c),n.a.createElement("td",null,m)):n.a.createElement("tr",null,n.a.createElement("td",{colSpan:3},"No Data")))))},v=function(e){var t=e.data,a=function(e,t){var a=Math.pow(2,Math.trunc(t/3)),l=7*t,n=30*t;switch(e){case"days":return a;case"weeks":return a=Math.pow(2,Math.trunc(l/3));case"months":return a=Math.pow(2,Math.trunc(n/3));default:return t}};return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",null,"Data To Estimate"),n.a.createElement(b.a,{striped:!0,bordered:!0,hover:!0},n.a.createElement("thead",null,n.a.createElement("tr",{className:"blue-color"},n.a.createElement("th",null,"Population"),n.a.createElement("th",null,"Time To Elapse"),n.a.createElement("th",null,"Reported Cases"),n.a.createElement("th",null,"Total Hospital Beds"),n.a.createElement("th",null,"Period Type"))),n.a.createElement("tbody",null,Object.keys(t).length>0?n.a.createElement("tr",{key:1},n.a.createElement("td",null,t.population),n.a.createElement("td",null,t.timeToElapse),n.a.createElement("td",null,t.reportedCases),n.a.createElement("td",null,t.totalHospitalBeds),n.a.createElement("td",null,t.periodType)):n.a.createElement("tr",null,n.a.createElement("td",{colSpan:3},"No users")))),n.a.createElement(y,{normalizePeriod:a,impact_data:t}),n.a.createElement(T,{normalizePeriod:a,severeImpact_data:t}))};var C=function(){var e=Object(l.useState)(47e6),t=Object(m.a)(e,2),a=t[0],r=t[1],o=Object(l.useState)(28),p=Object(m.a)(o,2),E=p[0],b=p[1],y=Object(l.useState)(1760),T=Object(m.a)(y,2),C=T[0],f=T[1],B=Object(l.useState)(7e4),g=Object(m.a)(B,2),M=g[0],I=g[1],j=Object(l.useState)("days"),w=Object(m.a)(j,2),O=w[0],S=w[1],q=Object(l.useState)({population:a,timeToElapse:E,reportedCases:C,totalHospitalBeds:M,periodType:O}),N=Object(m.a)(q,2),R=N[0],H=N[1];return n.a.createElement(c.a,null,n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement(s.a,{variant:"light"},n.a.createElement(u.a,null,n.a.createElement(s.a.Brand,null,n.a.createElement(c.b,{to:"/",style:{color:"#007bff"}},"Covid19 Estimator"))))),n.a.createElement(u.a,null,n.a.createElement(d.a,{style:{display:"flex",flexWrap:"noWrap"}},n.a.createElement(i.a,{md:12,className:"column-one"},n.a.createElement("div",{className:"wrapper"},n.a.createElement(h,{population:a,timeToElapse:E,reportedCases:C,totalHospitalBeds:M,periodType:O,onSubmit:function(e){e.preventDefault(),H({population:a,timeToElapse:E,reportedCases:C,totalHospitalBeds:M,periodType:O}),console.log(R)},data:R,setPopulation:r,setTimeToElapse:b,setReportedCases:f,setTotalHospitalBeds:I,setPeriodType:S}))),n.a.createElement(i.a,{md:12,className:"column-one"},n.a.createElement("div",{className:"wrapper"},n.a.createElement(v,{data:R})))))))};o.a.render(n.a.createElement(c.a,null,n.a.createElement(C,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.affe353b.chunk.js.map