function module(e,t,n){var r,i,a,o,s,u,c,l,f,d;n.link("@babel/runtime/regenerator",{default:function(e){r=e}},0),n.link("@babel/runtime/helpers/objectSpread2",{default:function(e){i=e}},1),n.link("meteor/templating",{Template:function(e){a=e}},0),n.link("meteor/reactive-var",{ReactiveVar:function(e){o=e}},1),n.link("moment",{default:function(e){s=e}},2),n.link("toastr",{default:function(e){u=e}},3),n.link("../../../utils",{t:function(e){c=e},APIClient:function(e){l=e}},4),n.link("../../../lib/client/lib/formatDate",{formatDateAndTime:function(e){f=e}},5),n.link("../../../ui-utils/client",{modal:function(e){d=e}},6),n.link("./adminInvites.html"),a.adminInvites.helpers({formatDateAndTime:f,invites:function(){return a.instance().invites.get()},daysToExpire:function(){var e=this.expires,t;return this.days>0?e<Date.now()?c("Expired"):s(e).fromNow(!0):c("Never")},maxUsesLeft:function(){var e=this.maxUses,t=this.uses;return e>0?t>=e?0:e-t:c("Unlimited")}}),a.adminInvites.onCreated(function(){function e(){var e,t,n;return r.async(function(){function a(a){for(;;)switch(a.prev=a.next){case 0:return e=this,this.invites=new o([]),a.next=4,r.awrap(l.v1.get("listInvites"));case 4:if(a.t0=a.sent,a.t0){a.next=7;break}a.t0=[];case 7:t=a.t0,n=t.map((function(e){return i({},e,{createdAt:new Date(e.createdAt),expires:e.expires?new Date(e.expires):""})})),e.invites.set(n);case 10:case"end":return a.stop()}}return a}(),null,this)}return e}()),a.adminInvites.events({"click .js-remove":function(){function e(e,t){return r.async(function(){function n(n){for(;;)switch(n.prev=n.next){case 0:e.stopPropagation(),d.open({text:c("Are_you_sure_you_want_to_delete_this_record"),type:"warning",showCancelButton:!0,confirmButtonColor:"#DD6B55",confirmButtonText:c("Yes"),cancelButtonText:c("No"),closeOnConfirm:!0,html:!1},function(){function n(n){var i,a,o;return r.async(function(){function s(s){for(;;)switch(s.prev=s.next){case 0:if(n){s.next=2;break}return s.abrupt("return");case 2:return i=e.currentTarget,a=i.dataset.id,s.prev=4,s.next=7,r.awrap(l.v1.delete("removeInvite/"+a));case 7:(o=t.invites.get()||[]).splice(o.findIndex((function(e){return e._id===a})),1),t.invites.set(o),s.next=15;break;case 12:s.prev=12,s.t0=s.catch(4),u.error(c(s.t0.error));case 15:case"end":return s.stop()}}return s}(),null,null,[[4,12]])}return n}());case 2:case"end":return n.stop()}}return n}())}return e}()})}

