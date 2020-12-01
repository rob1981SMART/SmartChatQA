function module(t,n,e){var o,i,s,a,u,r,c,d,l,f,g;e.link("@babel/runtime/regenerator",{default:function(t){o=t}},0),e.link("meteor/reactive-var",{ReactiveVar:function(t){i=t}},0),e.link("meteor/tracker",{Tracker:function(t){s=t}},1),e.link("meteor/kadira:flow-router",{FlowRouter:function(t){a=t}},2),e.link("meteor/templating",{Template:function(t){u=t}},3),e.link("underscore",{default:function(t){r=t}},4),e.link("../../../ui-utils",{RocketChatTabBar:function(t){c=t},SideNav:function(t){d=t},TabBar:function(t){l=t}},5),e.link("../lib/CustomSounds",{CustomSounds:function(t){f=t}},6),e.link("../../../utils/client",{APIClient:function(t){g=t}},7);var m=50,p=500;u.adminSounds.helpers({searchText:function(){var t=u.instance();return t.filter&&t.filter.get()},isPlaying:function(t){return u.instance().isPlayingId.get()===t},customsounds:function(){return u.instance().sounds.get()},isLoading:function(){return u.instance().isLoading.get()},flexData:function(){return{tabBar:u.instance().tabBar,data:u.instance().tabBarData.get()}},onTableScroll:function(){var t=u.instance();return function(n){if(!(n.offsetHeight+n.scrollTop<n.scrollHeight-100)){var e=t.sounds.get();t.total.get()>e.length&&t.offset.set(t.offset.get()+m)}}},onTableItemClick:function(){var t=u.instance();return function(n){t.tabBarData.set({sound:t.sounds.get().find((function(t){return t._id===n._id})),onSuccess:t.onSuccessCallback}),t.tabBar.showGroup("custom-sounds-selected"),t.tabBar.open("admin-sound-info")}}}),u.adminSounds.onCreated((function(){var t=this,n=this;this.sounds=new i([]),this.offset=new i(0),this.total=new i(0),this.query=new i({}),this.isLoading=new i(!1),this.filter=new i(""),this.isPlayingId=new i(""),this.tabBar=new c,this.tabBar.showGroup(a.current().route.name),this.tabBarData=new i,l.addButton({groups:["custom-sounds","custom-sounds-selected"],id:"add-sound",i18nTitle:"Custom_Sound_Add",icon:"plus",template:"adminSoundEdit",order:1}),l.addButton({groups:["custom-sounds-selected"],id:"admin-sound-info",i18nTitle:"Custom_Sound_Info",icon:"customize",template:"adminSoundInfo",order:2}),this.onSuccessCallback=function(){return t.offset.set(0),t.loadSounds(t.query.get(),t.offset.get())},this.tabBarData.set({onSuccess:this.onSuccessCallback}),this.loadSounds=r.debounce(function(){function n(n,e){var i,s,a;return o.async(function(){function u(u){for(;;)switch(u.prev=u.next){case 0:return t.isLoading.set(!0),u.next=3,o.awrap(g.v1.get("custom-sounds.list?count="+m+"&offset="+e+"&query="+JSON.stringify(n)));case 3:i=u.sent,s=i.sounds,a=i.total,t.total.set(a),0===e?t.sounds.set(s):t.sounds.set(t.sounds.get().concat(s)),t.isLoading.set(!1);case 9:case"end":return u.stop()}}return u}())}return n}(),500),this.autorun((function(){var n=t.filter.get()&&t.filter.get().trim(),e=t.offset.get();if(n){var o={$regex:n,$options:"i"};return t.loadSounds({name:o},e)}return t.loadSounds({},e)}))})),u.adminSounds.onRendered((function(){return s.afterFlush((function(){d.setFlex("adminFlex"),d.openFlex()}))})),u.adminSounds.events({"keydown #sound-filter":function(t){13===t.which&&(t.stopPropagation(),t.preventDefault())},"keyup #sound-filter":function(t,n){t.stopPropagation(),t.preventDefault(),n.filter.set(t.currentTarget.value),n.offset.set(0)},"click .icon-play-circled":function(t,n){var e=this;t.preventDefault(),t.stopPropagation(),f.play(this._id);var o=document.getElementById(n.isPlayingId.get());o&&o.pause(),document.getElementById(this._id).onended=function(){n.isPlayingId.set(""),e.onended=null},n.isPlayingId.set(this._id)},"click .icon-pause-circled":function(t,n){t.preventDefault(),t.stopPropagation();var e=document.getElementById(this._id);e&&!e.paused&&e.pause(),n.isPlayingId.set("")},"click .icon-reset-circled":function(t){t.preventDefault(),t.stopPropagation();var n=document.getElementById(this._id);n&&(n.currentTime=0)}})}
