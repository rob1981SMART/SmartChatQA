function module(e,t,n){let s,l,a,i,o,r,c,u,p;function d(e){let{_id:t,sections:n}=e,d=l(e,["_id","sections"]);const h=1===n.length,_=c(),k=o("refreshClients"),m=r(),g=async()=>{try{await k(),m({type:"success",message:_("Clients_will_refresh_in_a_few_seconds")})}catch(e){m({type:"error",message:e})}};return i.createElement(u,s({_id:t},d,{headerButtons:i.createElement(i.Fragment,null,i.createElement(a,{onClick:g},_("Apply_and_refresh_all_clients")))}),n.map(e=>i.createElement(p,{key:e,groupId:t,hasReset:!1,sectionName:e,solo:h})))}n.link("@babel/runtime/helpers/extends",{default(e){s=e}},0),n.link("@babel/runtime/helpers/objectWithoutProperties",{default(e){l=e}},1),n.export({AssetsGroupPage:()=>d}),n.link("@rocket.chat/fuselage",{Button(e){a=e}},0),n.link("react",{default(e){i=e}},1),n.link("../../../../../../client/contexts/ServerContext",{useMethod(e){o=e}},2),n.link("../../../../../../client/contexts/ToastMessagesContext",{useToastMessageDispatch(e){r=e}},3),n.link("../../../../../../client/contexts/TranslationContext",{useTranslation(e){c=e}},4),n.link("../GroupPage",{GroupPage(e){u=e}},5),n.link("../Section",{Section(e){p=e}},6)}

