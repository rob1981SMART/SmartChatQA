function module(t,e,n){let i,o,a,s,r,g,l,c,m,u;n.link("meteor/templating",{Template(t){i=t}},0),n.link("meteor/reactive-var",{ReactiveVar(t){o=t}},1),n.link("meteor/rocketchat:tap-i18n",{TAPi18n(t){a=t}},2),n.link("meteor/tracker",{Tracker(t){s=t}},3),n.link("moment",{default(t){r=t}},4),n.link("underscore",{default(t){g=t}},5),n.link("../../../authorization",{hasAtLeastOnePermission(t){l=t}},6),n.link("../../lib/rocketchat",{integrations(t){c=t}},7),n.link("../../../ui-utils/client",{SideNav(t){m=t}},8),n.link("../../../utils/client",{APIClient(t){u=t}},9);const f=50;i.integrations.helpers({hasPermission:()=>l(["manage-outgoing-integrations","manage-own-outgoing-integrations","manage-incoming-integrations","manage-own-incoming-integrations"]),integrations:()=>i.instance().integrations.get(),dateFormated:t=>r(t).format("L LT"),eventTypeI18n:t=>a.__(c.outgoingEvents[t].label)}),i.integrations.onRendered(()=>{s.afterFlush(()=>{m.setFlex("adminFlex"),m.openFlex()})}),i.integrations.onCreated((async function(){this.integrations=new o([]),this.offset=new o(0),this.total=new o(0),this.autorun(async()=>{const t=this.offset.get(),{integrations:e,total:n}=await u.v1.get('integrations.list?sort={"type":1}&count='.concat(50,"&offset=").concat(t));this.total.set(n),this.integrations.set(this.integrations.get().concat(e))})})),i.integrations.events({"scroll .content":g.throttle((function(t,e){if(t.target.scrollTop>=t.target.scrollHeight-t.target.clientHeight){const t=e.integrations.get();if(e.total.get()<=t.length)return;return e.offset.set(e.offset.get()+50)}}),200)})}

