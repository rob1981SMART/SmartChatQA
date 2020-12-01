function module(t,e,n){var a,i,r,s,o,c,u,l,v,f;n.link("@babel/runtime/helpers/toConsumableArray",{default:function(t){a=t}},0),n.link("@babel/runtime/regenerator",{default:function(t){i=t}},1),n.link("meteor/meteor",{Meteor:function(t){r=t}},0),n.link("meteor/reactive-var",{ReactiveVar:function(t){s=t}},1),n.link("meteor/templating",{Template:function(t){o=t}},2),n.link("toastr",{default:function(t){c=t}},3),n.link("../../../../../utils",{t:function(t){u=t}},4),n.link("../../../../../authorization",{hasRole:function(t){l=t}},5),n.link("./visitorEdit.html"),n.link("../../../../../utils/client",{APIClient:function(t){v=t}},6),n.link("../customTemplates/register",{getCustomFormTemplate:function(t){f=t}},7);var g=100;o.visitorEdit.helpers({visitor:function(){return o.instance().visitor.get()},visitorCustomFields:function(){var t=o.instance().customFields.get();if(!t||0===t.length)return[];var e=[],n,a,i=(o.instance().visitor.get()||{}).livechatData,r=void 0===i?{}:i;return t.forEach((function(t){if("hidden"!==t.visibility&&"visitor"===t.scope){var n=r[t._id]?r[t._id]:"";e.push({name:t._id,label:t.label,value:n})}})),e},room:function(){return o.instance().room.get()},roomCustomFields:function(){var t=o.instance().customFields.get();if(!t||0===t.length)return[];var e=[],n,a,i=(o.instance().room.get()||{}).livechatData,r=void 0===i?{}:i;return t.forEach((function(t){if("hidden"!==t.visibility&&"room"===t.scope){var n=r[t._id]?r[t._id]:"";e.push({name:t._id,label:t.label,value:n})}})),e},email:function(){var t=o.instance().visitor.get();if(t.visitorEmails&&t.visitorEmails.length>0)return t.visitorEmails[0].address},phone:function(){var t=o.instance().visitor.get();if(t.phone&&t.phone.length>0)return t.phone[0].phoneNumber},tags:function(){return o.instance().tags.get()},availableUserTags:function(){return o.instance().availableUserTags.get()},hasAvailableTags:function(){var t=o.instance().availableTags.get();return t&&t.length>0},canRemoveTag:function(t,e){return l(r.userId(),["admin","livechat-manager"])||Array.isArray(t)&&(0===t.length||t.indexOf(e)>-1)},isSmsIntegration:function(){var t=o.instance().room.get();return!(!t||!t.sms)},customFieldsTemplate:function(){return f("livechatVisitorEditForm")}}),o.visitorEdit.onCreated(function(){function t(){var t=this,e,n,a,c,u;return i.async(function(){function f(f){for(;;)switch(f.prev=f.next){case 0:return this.visitor=new s,this.room=new s,this.tags=new s([]),this.availableTags=new s([]),this.agentDepartments=new s([]),this.availableUserTags=new s([]),this.customFields=new s([]),this.autorun(function(){function e(){var e,n,a,r;return i.async(function(){function s(s){for(;;)switch(s.prev=s.next){case 0:if(e=o.currentData(),!(n=e.visitorId)){s.next=7;break}return s.next=4,i.awrap(v.v1.get("livechat/visitors.info?visitorId="+n));case 4:a=s.sent,r=a.visitor,t.visitor.set(r);case 7:case"end":return s.stop()}}return s}())}return e}()),e=o.currentData().roomId,this.autorun(function(){function n(){var n,a,r,s;return i.async(function(){function o(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,i.awrap(v.v1.get("rooms.info?roomId="+e));case 2:return n=o.sent,a=n.room,o.next=6,i.awrap(v.v1.get("livechat/custom-fields?count="+g));case 6:r=o.sent,s=r.customFields,t.room.set(a),t.tags.set(a&&a.tags||[]),t.customFields.set(s||[]);case 11:case"end":return o.stop()}}return o}())}return n}()),n=r.userId(),f.next=13,i.awrap(v.v1.get("livechat/agents/"+n+"/departments"));case 13:a=f.sent,c=a.departments,u=c.map((function(t){return t.departmentId})),this.agentDepartments.set(u),r.call("livechat:getTagsList",(function(e,a){t.availableTags.set(a);var i=t.agentDepartments.get(),r=l(n,["admin","livechat-manager"]),s,o=(t.availableTags.get()||[]).filter((function(t){var e=t.departments;return r||0===e.length||e.some((function(t){return i.indexOf(t)>-1}))})).map((function(t){var e;return t.name}));t.availableUserTags.set(o)}));case 18:case"end":return f.stop()}}return f}(),null,this)}return t}()),o.visitorEdit.events({"submit form":function(t,e){var n=this;t.preventDefault();var a={_id:e.visitor.get()._id},i=e.room.get(),s=i._id,o=i.sms,l={_id:s};a.name=t.currentTarget.elements.name.value,a.email=t.currentTarget.elements.email.value,a.phone=t.currentTarget.elements.phone.value,a.livechatData={},$("[data-visitorLivechatData=true]").each((function(){a.livechatData[this.name]=$(this).val()||""})),l.topic=t.currentTarget.elements.topic.value,l.tags=e.tags.get(),l.livechatData={},$("[data-roomLivechatData=true]").each((function(){l.livechatData[this.name]=$(this).val()||""})),o&&delete a.phone,e.$(".customFormField").each((function(t,n){var a=e.$(n),i=a.attr("name");l[i]=a.val()})),r.call("livechat:saveInfo",a,l,(function(t){t?c.error(u(t.error)):(c.success(u("Saved")),n.save())}))},"click .remove-tag":function(t,e){var n=this.valueOf(),a=e.availableTags.get(),i=a&&a.length>0,s=e.availableUserTags.get();if(l(r.userId(),["admin","livechat-manager"])||!i||s&&-1!==s.indexOf(n)){t.stopPropagation(),t.preventDefault();var o=e.tags.get();o=o.filter((function(t){return t!==n})),e.tags.set(o)}},"click #addTag":function(t,e){if(t.stopPropagation(),t.preventDefault(),!$("#tagSelect").find(":selected").is(":disabled")){var n=a(e.tags.get()),i=$("#tagSelect").val();""===i||n.indexOf(i)>-1||(n.push(i),e.tags.set(n),$("#tagSelect").val("placeholder"))}},"keydown #tagInput":function(t,e){if(13===t.which){t.stopPropagation(),t.preventDefault();var n=a(e.tags.get()),i=$("#tagInput").val();if(""===i||n.indexOf(i)>-1)return;n.push(i),e.tags.set(n),$("#tagInput").val("")}},"click .cancel":function(){this.cancel()}})}
