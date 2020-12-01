function module(t,e,o){let n,a,s,i,r,l,c,m,u,d,g,h,f,p,k,b;o.link("meteor/tracker",{Tracker(t){n=t}},0),o.link("meteor/reactive-var",{ReactiveVar(t){a=t}},1),o.link("meteor/kadira:flow-router",{FlowRouter(t){s=t}},2),o.link("meteor/session",{Session(t){i=t}},3),o.link("meteor/templating",{Template(t){r=t}},4),o.link("meteor/rocketchat:tap-i18n",{TAPi18n(t){l=t}},5),o.link("underscore",{default(t){c=t}},6),o.link("../../../ui-utils",{SideNav(t){m=t},RocketChatTabBar(t){u=t},TabBar(t){d=t}},7),o.link("../../../utils",{t(t){g=t},roomTypes(t){h=t}},8),o.link("../../../authorization",{hasAllPermission(t){f=t}},9),o.link("../../../channel-settings",{ChannelSettings(t){p=t}},10),o.link("../../../utils/lib/getAvatarURL",{getAvatarURL(t){k=t}},11),o.link("../../../utils/client",{APIClient(t){b=t}},12);const v=50,R=500;r.adminRooms.helpers({url(){return"d"===this.t?k({username:"@".concat(this.usernames[0])}):h.getConfig(this.t).getAvatarPath(this)},getIcon(){return h.getIcon(this)},roomName(){return"d"===this.t?this.usernames.join(" x "):h.getRoomName(this.t,this)},searchText(){const t=r.instance();return t.filter&&t.filter.get()},rooms:()=>r.instance().rooms.get(),isLoading:()=>r.instance().isLoading.get(),roomCount:()=>r.instance().rooms.get().length,type(){return l.__(h.getConfig(this.t).label)},default(){return this.default?g("True"):g("False")},flexData:()=>({tabBar:r.instance().tabBar,data:r.instance().tabBarData.get()}),onTableScroll(){const t=r.instance();return function(e){if(e.offsetHeight+e.scrollTop<e.scrollHeight-100)return;const o=t.rooms.get();t.total.get()>o.length&&t.offset.set(t.offset.get()+50)}},onTableItemClick(){const t=r.instance();return function(e){i.set("adminRoomsSelected",{rid:e._id}),t.tabBarData.set({room:t.rooms.get().find(t=>t._id===e._id),onSuccess:t.onSuccessCallback}),t.tabBar.open("admin-room")}}}),r.adminRooms.onCreated((function(){var t=this;const e=this;this.offset=new a(0),this.total=new a(0),this.filter=new a(""),this.types=new a([]),this.rooms=new a([]),this.ready=new a(!0),this.isLoading=new a(!1),this.tabBar=new u,this.tabBarData=new a,this.tabBar.showGroup(s.current().route.name),d.addButton({groups:["admin-rooms"],id:"admin-room",i18nTitle:"Room_Info",icon:"info-circled",template:"adminRoomInfo",order:7}),p.addOption({group:["admin-room"],id:"make-default",template:"channelSettingsDefault",data:()=>({room:e.tabBarData.get().room,onSuccess:e.tabBarData.get().onSuccess}),validation:()=>f("view-room-administration")}),p.addOption({group:["admin-room"],id:"make-featured",template:"channelSettingsFeatured",data:()=>({room:e.tabBarData.get().room,onSuccess:e.tabBarData.get().onSuccess}),validation:()=>f("view-room-administration")}),this.onSuccessCallback=()=>(e.offset.set(0),e.loadRooms(e.types.get(),e.filter.get(),e.offset.get())),this.tabBarData.set({onSuccess:e.onSuccessCallback});const o=t=>t.reduce((t,e)=>t+="types[]=".concat(e,"&"),"");this.loadRooms=c.debounce((async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0;t.isLoading.set(!0);let s="rooms.adminRooms?count=".concat(50,"&offset=").concat(a,"&").concat(o(e));n&&(s+="filter=".concat(encodeURIComponent(n)));const{rooms:i,total:r}=await b.v1.get(s);t.total.set(r),0===a?t.rooms.set(i):t.rooms.set(t.rooms.get().concat(i)),t.isLoading.set(!1)}),500);const n=["c","d","p"];this.autorun(()=>{e.filter.get(),e.types.get(),e.offset.set(0)}),this.autorun(()=>{const t=e.filter.get(),o=e.offset.get();let a=e.types.get();return 0===a.length&&(a=n),this.loadRooms(a,t,o)}),this.getSearchTypes=function(){return c.map($("[name=room-type]:checked"),(function(t){return $(t).val()}))}})),r.adminRooms.onRendered((function(){n.afterFlush((function(){m.setFlex("adminFlex"),m.openFlex()}))})),r.adminRooms.events({"keydown #rooms-filter"(t){13===t.which&&(t.stopPropagation(),t.preventDefault())},"keyup #rooms-filter"(t,e){t.stopPropagation(),t.preventDefault(),e.filter.set(t.currentTarget.value)},"change [name=room-type]"(t,e){e.types.set(e.getSearchTypes())}})}
