function module(e,t,l){let n,a,r,i,o,c,s,m,d,u,k,x,y,E,h,p,C;l.export({UserTab:()=>f}),l.link("react",{default(e){n=e},useMemo(e){a=e},useState(e){r=e},useCallback(e){i=e}},0),l.link("@rocket.chat/fuselage",{Box(e){o=e},Table(e){c=e},Flex(e){s=e},Avatar(e){m=e}},1),l.link("@rocket.chat/fuselage-hooks",{useMediaQuery(e){d=e}},2),l.link("../../../../../../../ee/app/engagement-dashboard/client/hooks/useEndpointData",{useEndpointData(e){u=e}},3),l.link("./DirectoryTable",{DirectoryTable(e){k=e},Th(e){x=e}},4),l.link("../../../../../../../client/contexts/TranslationContext",{useTranslation(e){y=e}},5),l.link("../../../../../../../client/contexts/RouterContext",{useRoute(e){E=e}},6),l.link("../../../../../../../client/contexts/AuthorizationContext",{usePermission(e){h=e}},7),l.link("../hooks",{useQuery(e){p=e},useFormatDate(e){C=e}},8);const w={whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"};function f(e){let{workspace:t="local"}=e;const[l,f]=r({}),[v,b]=r(["name","asc"]),g=h("view-full-other-user-info"),T=y(),D="external"===t,S=p(l,v,"users",t),A=d("(min-width: 1024px)"),R=e=>{const[t,l]=v;b(t!==e?[e,"asc"]:[e,"asc"===l?"desc":"asc"])},P=a(()=>[n.createElement(x,{key:"name",direction:v[1],active:"name"===v[0],onClick:R,sort:"name"},T("Name")),A&&g&&n.createElement(x,{key:"email",direction:v[1],active:"email"===v[0],onClick:R,sort:"email",style:{width:"200px"}},T("Email")),D&&n.createElement(x,{key:"origin",direction:v[1],active:"origin"===v[0],onClick:R,sort:"origin",style:{width:"200px"}},T("Domain")),A&&n.createElement(x,{key:"createdAt",direction:v[1],active:"createdAt"===v[0],onClick:R,sort:"createdAt",style:{width:"200px"}},T("Joined_at"))].filter(Boolean),[v,D,g,A]),_=E("direct"),z=h("view-outside-room"),B=h("view-d-room"),F=z&&B&&u("GET","directory",S)||{result:[]},I=a(()=>e=>t=>{"click"!==t.type&&"Enter"!==t.key||_.push({rid:e})},[_]),M=C(),Q=i(e=>{let{createdAt:t,emails:l,_id:a,username:r,name:i,domain:d,bio:u}=e;return n.createElement(c.Row,{key:a,onKeyDown:I(r),onClick:I(r),tabIndex:0,role:"link",action:!0},n.createElement(c.Cell,null,n.createElement(s.Container,null,n.createElement(o,null,n.createElement(s.Item,null,n.createElement(m,{size:"x40",title:r,url:r})),n.createElement(o,{style:w,grow:1,mi:"x8"},n.createElement(o,{display:"flex"},n.createElement(o,{textStyle:"p2",style:w,textColor:"default"},i||r)," ",n.createElement(o,{mi:"x4"})," ",n.createElement(o,{textStyle:"p1",textColor:"hint",style:w},r)),n.createElement(o,{textStyle:"p1",textColor:"hint",style:w}," ",u," "))))),A&&g&&n.createElement(c.Cell,{style:w},l&&l[0].address),D&&n.createElement(c.Cell,{style:w},d),A&&n.createElement(c.Cell,{textStyle:"p1",textColor:"hint",style:w},M(t)))},[A,D,g]);return n.createElement(k,{searchPlaceholder:T("Search_Users"),header:P,renderRow:Q,data:F,setParams:f})}}

