(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[9],{334:function(e,t,a){"use strict";a(0);var r=a(107),l=a(324),c=a(241),i=a(314),s=a(12),o=a(18),n=a(58),d=a(297),b=a(305),j=a(1),g=["className","color","outline","size"],p=Object(d.a)((function(e){return{primaryBackground:{background:e.palette.primary.main,color:e.palette.background.paper},secondaryBackground:{background:e.palette.secondary.main,color:e.palette.background.paper},errorBackground:{background:e.palette.error.main,color:e.palette.background.paper},warningBackground:{background:e.palette.warning.dark,color:e.palette.background.paper},infoBackground:{background:e.palette.info.main,color:e.palette.background.paper},successBackground:{background:e.palette.success.dark,color:e.palette.background.paper},greyBackground:{background:e.palette.grey[500],color:e.palette.background.paper},primaryOutline:{background:e.palette.background.paper,color:e.palette.primary.main,border:"2px solid "+e.palette.primary.main},secondaryOutline:{background:e.palette.background.paper,color:e.palette.secondary.main,border:"2px solid "+e.palette.secondary.main},errorOutline:{background:e.palette.background.paper,color:e.palette.error.main,border:"2px solid "+e.palette.error.main},warningOutline:{background:e.palette.background.paper,color:e.palette.warning.dark,border:"2px solid "+e.palette.warning.dark},infoOutline:{background:e.palette.background.paper,color:e.palette.info.main,border:"2px solid "+e.palette.info.main},successOutline:{background:e.palette.background.paper,color:e.palette.success.dark,border:"2px solid "+e.palette.success.dark},greyOutline:{background:e.palette.background.paper,color:e.palette.grey[500],border:"2px solid "+e.palette.grey[500]},badge:{width:e.spacing(3.5),height:e.spacing(3.5)},xs:{width:e.spacing(4.25),height:e.spacing(4.25)},sm:{width:e.spacing(5),height:e.spacing(5)},md:{width:e.spacing(7),height:e.spacing(7)},lg:{width:e.spacing(9),height:e.spacing(9)},xl:{width:e.spacing(10.25),height:e.spacing(10.25)}}})),m=function(e){var t=e.className,a=e.color,r=e.outline,l=e.size,c=Object(n.a)(e,g),i=p(),d=[];return d=a?r?[i[a+"Outline"]].concat(Object(o.a)(d)):[i[a+"Background"]].concat(Object(o.a)(d)):d,d=l?[i[l]].concat(Object(o.a)(d)):d,t&&(d=t?[].concat(Object(o.a)(d),[t]):d),Object(j.jsx)(b.a,Object(s.a)({className:d.join(" ")},c))};t.a=function(e){var t=e.title,a=e.link,s=e.icon,o=Object(r.a)();return Object(j.jsx)(l.a,{title:t||"Reference",placement:"left",children:Object(j.jsxs)(c.a,{disableRipple:!0,children:[!s&&Object(j.jsx)(m,{component:i.a,href:a,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,children:Object(j.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(j.jsxs)("g",{clipPath:"url(#clip0)",children:[Object(j.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:o.palette.primary[800]}),Object(j.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:o.palette.primary.main}),Object(j.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:o.palette.primary[800]}),Object(j.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:o.palette.primary.main})]}),Object(j.jsx)("defs",{children:Object(j.jsx)("clipPath",{id:"clip0",children:Object(j.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),s&&Object(j.jsx)(m,{component:i.a,href:a,target:"_blank",size:"badge",color:"primary",outline:!0,children:s})]})})}},522:function(e,t,a){"use strict";a.r(t);var r=a(0),l=a.n(r),c=a(107),i=a(167),s=a(310),o=a(71),n=a(304),d=a(114),b=a(92),j=a(334),g=a(41),p=a(1),m=function(e){var t=e.bgcolor,a=e.title,r=e.data,d=e.dark,b=Object(c.a)();return Object(p.jsxs)(l.a.Fragment,{children:[Object(p.jsx)(i.a,{sx:{mb:3},children:Object(p.jsxs)(s.a,{sx:{display:"flex",justifyContent:"center",alignItems:"center",py:4.5,bgcolor:t,color:d?b.palette.grey[800]:"#ffffff"},children:[a&&Object(p.jsx)(o.a,{variant:"subtitle1",color:"inherit",children:a}),!a&&Object(p.jsx)(s.a,{sx:{p:1.15}})]})}),r&&Object(p.jsxs)(n.a,{container:!0,justifyContent:"space-between",alignItems:"center",children:[Object(p.jsx)(n.a,{item:!0,children:Object(p.jsx)(o.a,{variant:"subtitle2",children:r.label})}),Object(p.jsx)(n.a,{item:!0,children:Object(p.jsx)(o.a,{variant:"subtitle1",sx:{textTransform:"uppercase"},children:r.color})})]})]})};t.default=function(){var e=Object(c.a)();return Object(p.jsx)(b.a,{title:"Color Palette",secondary:Object(p.jsx)(j.a,{link:"https://next.material-ui.com/system/palette/"}),children:Object(p.jsxs)(n.a,{container:!0,spacing:g.b,children:[Object(p.jsx)(n.a,{item:!0,xs:12,children:Object(p.jsx)(d.a,{title:"Primary Color",children:Object(p.jsxs)(n.a,{container:!0,spacing:g.b,children:[Object(p.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(p.jsx)(m,{bgcolor:e.palette.primary.light,data:{label:"Shade-50",color:e.palette.primary.light},title:"primary.light",dark:!0})}),Object(p.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(p.jsx)(m,{bgcolor:e.palette.primary[200],data:{label:"Shade-200",color:e.palette.primary[200]},title:"primary[200]",dark:!0})}),Object(p.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(p.jsx)(m,{bgcolor:e.palette.primary.main,data:{label:"Shade-500",color:e.palette.primary.main},title:"primary.main"})}),Object(p.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(p.jsx)(m,{bgcolor:e.palette.primary.dark,data:{label:"Shade-600",color:e.palette.primary.dark},title:"primary.dark"})}),Object(p.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(p.jsx)(m,{bgcolor:e.palette.primary[800],data:{label:"Shade-800",color:e.palette.primary[800]},title:"primary[800]"})})]})})}),Object(p.jsx)(n.a,{item:!0,xs:12,children:Object(p.jsx)(d.a,{title:"Secondary Color",children:Object(p.jsxs)(n.a,{container:!0,spacing:g.b,children:[Object(p.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(p.jsx)(m,{bgcolor:e.palette.secondary.light,data:{label:"Shade-50",color:e.palette.secondary.light},title:"secondary.light",dark:!0})}),Object(p.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(p.jsx)(m,{bgcolor:e.palette.secondary[200],data:{label:"Shade-200",color:e.palette.secondary[200]},title:"secondary[200]",dark:!0})}),Object(p.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(p.jsx)(m,{bgcolor:e.palette.secondary.main,data:{label:"Shade-500",color:e.palette.secondary.main},title:"secondary.main"})}),Object(p.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(p.jsx)(m,{bgcolor:e.palette.secondary.dark,data:{label:"Shade-600",color:e.palette.secondary.dark},title:"secondary.dark"})}),Object(p.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(p.jsx)(m,{bgcolor:e.palette.secondary[800],data:{label:"Shade-800",color:e.palette.secondary[800]},title:"secondary[800]"})})]})})}),Object(p.jsx)(n.a,{item:!0,xs:12,children:Object(p.jsx)(d.a,{title:"Success Color",children:Object(p.jsxs)(n.a,{container:!0,spacing:g.b,children:[Object(p.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(p.jsx)(m,{bgcolor:e.palette.success.light,data:{label:"Shade-100",color:e.palette.success.light},title:"success.light",dark:!0})}),Object(p.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(p.jsx)(m,{bgcolor:e.palette.success[200],data:{label:"Shade-200",color:e.palette.success[200]},title:"success[200]"})}),Object(p.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(p.jsx)(m,{bgcolor:e.palette.success.main,data:{label:"Shade-400",color:e.palette.success.main},title:"success.main"})}),Object(p.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(p.jsx)(m,{bgcolor:e.palette.success.dark,data:{label:"Shade-700",color:e.palette.success.dark},title:"success.dark"})})]})})}),Object(p.jsx)(n.a,{item:!0,xs:12,children:Object(p.jsx)(d.a,{title:"Orange Color",children:Object(p.jsxs)(n.a,{container:!0,spacing:g.b,children:[Object(p.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(p.jsx)(m,{bgcolor:e.palette.orange.light,data:{label:"Shade-50",color:e.palette.orange.light},title:"orange.light",dark:!0})}),Object(p.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(p.jsx)(m,{bgcolor:e.palette.orange.main,data:{label:"Shade-200",color:e.palette.orange.main},title:"orange.main"})}),Object(p.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(p.jsx)(m,{bgcolor:e.palette.orange.dark,data:{label:"Shade-800",color:e.palette.orange.dark},title:"orange.dark"})})]})})}),Object(p.jsx)(n.a,{item:!0,xs:12,children:Object(p.jsx)(d.a,{title:"Error Color",children:Object(p.jsxs)(n.a,{container:!0,spacing:g.b,children:[Object(p.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(p.jsx)(m,{bgcolor:e.palette.error.light,data:{label:"Shade-50",color:e.palette.error.light},title:"error.light",dark:!0})}),Object(p.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(p.jsx)(m,{bgcolor:e.palette.error.main,data:{label:"Shade-200",color:e.palette.error.main},title:"error.main"})}),Object(p.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(p.jsx)(m,{bgcolor:e.palette.error.dark,data:{label:"Shade-800",color:e.palette.error.dark},title:"error.dark"})})]})})}),Object(p.jsx)(n.a,{item:!0,xs:12,children:Object(p.jsx)(d.a,{title:"Warning Color",children:Object(p.jsxs)(n.a,{container:!0,spacing:g.b,children:[Object(p.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(p.jsx)(m,{bgcolor:e.palette.warning.light,data:{label:"Shade-50",color:e.palette.warning.light},title:"warning.light",dark:!0})}),Object(p.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(p.jsx)(m,{bgcolor:e.palette.warning.main,data:{label:"Shade-100",color:e.palette.warning.main},title:"warning.main",dark:!0})}),Object(p.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(p.jsx)(m,{bgcolor:e.palette.warning.dark,data:{label:"Shade-500",color:e.palette.warning.dark},title:"warning.dark"})})]})})}),Object(p.jsx)(n.a,{item:!0,xs:12,children:Object(p.jsx)(d.a,{title:"Grey Color",children:Object(p.jsxs)(n.a,{container:!0,spacing:g.b,children:[Object(p.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(p.jsx)(m,{bgcolor:e.palette.grey[50],data:{label:"Shade-50",color:e.palette.grey[50]},title:"grey[50]",dark:!0})}),Object(p.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(p.jsx)(m,{bgcolor:e.palette.grey[100],data:{label:"Shade-100",color:e.palette.grey[100]},title:"grey[100]",dark:!0})}),Object(p.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(p.jsx)(m,{bgcolor:e.palette.grey[200],data:{label:"Shade-200",color:e.palette.grey[200]},title:"grey[200]",dark:!0})}),Object(p.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(p.jsx)(m,{bgcolor:e.palette.grey[300],data:{label:"Shade-300",color:e.palette.grey[300]},title:"grey[300]",dark:!0})}),Object(p.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(p.jsx)(m,{bgcolor:e.palette.grey[500],data:{label:"Shade-500",color:e.palette.grey[500]},title:"grey[500]"})}),Object(p.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(p.jsx)(m,{bgcolor:e.palette.grey[600],data:{label:"Shade-600",color:e.palette.grey[600]},title:"grey[600]"})}),Object(p.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(p.jsx)(m,{bgcolor:e.palette.grey[700],data:{label:"Shade-700",color:e.palette.grey[700]},title:"grey[700]"})}),Object(p.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(p.jsx)(m,{bgcolor:e.palette.grey[900],data:{label:"Shade-900",color:e.palette.grey[900]},title:"grey[900]"})}),Object(p.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:2,children:Object(p.jsx)(m,{bgcolor:"#fff",data:{label:"Pure White",color:"#ffffff"},title:"Pure White",dark:!0})})]})})})]})})}}}]);