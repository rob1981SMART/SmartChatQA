function module(e,t,r){let n,a,i,o,s,l,c,m,d,g,u,v,h,p,_,k,y,f,C;r.link("meteor/meteor",{Meteor(e){n=e}},0),r.link("meteor/reactive-var",{ReactiveVar(e){a=e}},1),r.link("meteor/random",{Random(e){i=e}},2),r.link("meteor/kadira:flow-router",{FlowRouter(e){o=e}},3),r.link("meteor/templating",{Template(e){s=e}},4),r.link("meteor/rocketchat:tap-i18n",{TAPi18n(e){l=e}},5),r.link("meteor/tracker",{Tracker(e){c=e}},6),r.link("highlight.js",{default(e){m=e}},7),r.link("toastr",{default(e){d=e}},8),r.link("./messageExample",{exampleMsg(e){g=e},exampleSettings(e){u=e},exampleUser(e){v=e}},9),r.link("../../../authorization",{hasAtLeastOnePermission(e){h=e}},10),r.link("../../../ui-utils",{modal(e){p=e},SideNav(e){_=e}},11),r.link("../../../utils/client",{t(e){k=e},handleError(e){y=e}},12),r.link("../../lib/rocketchat",{integrations(e){f=e}},13),r.link("../getIntegration",{getIntegration(e){C=e}},14),s.integrationsOutgoing.onCreated((async function e(){const t=s.instance().data.params?s.instance().data.params():void 0;this.record=new a({username:"rocket.cat",token:i.id(24),retryFailedCalls:!0,retryCount:6,retryDelay:"powers-of-ten",runOnEdits:!0}),this.updateRecord=()=>{this.record.set({enabled:"1"===$("[name=enabled]:checked").val().trim(),event:$("[name=event]").val().trim(),name:$("[name=name]").val().trim(),alias:$("[name=alias]").val().trim(),emoji:$("[name=emoji]").val().trim(),avatar:$("[name=avatar]").val().trim(),channel:$("[name=channel]").val()?$("[name=channel]").val().trim():void 0,username:$("[name=username]").val().trim(),triggerWords:$("[name=triggerWords]").val()?$("[name=triggerWords]").val().trim():void 0,urls:$("[name=urls]").val().trim(),token:$("[name=token]").val().trim(),scriptEnabled:"1"===$("[name=scriptEnabled]:checked").val().trim(),script:$("[name=script]").val().trim(),targetRoom:$("[name=targetRoom]").val()?$("[name=targetRoom]").val().trim():void 0,triggerWordAnywhere:"1"===$("[name=triggerWordAnywhere]:checked").val().trim(),retryFailedCalls:"1"===$("[name=retryFailedCalls]:checked").val().trim(),retryCount:$("[name=retryCount]").val()?$("[name=retryCount]").val().trim():6,retryDelay:$("[name=retryDelay]").val()?$("[name=retryDelay]").val().trim():"powers-of-ten",runOnEdits:"1"===$("[name=runOnEdits]:checked").val().trim()})};const r=await C(t.id,n.userId());if(t.id&&!r)return d.error(l.__("No_integration_found")),void o.go("admin-integrations");r.hasScriptError=r.scriptEnabled&&r.scriptError,this.record.set(r)})),s.integrationsOutgoing.helpers({exampleMsg:g,exampleUser:v,exampleSettings:u,join:(e,t)=>e&&e.join?e.join(t):e,showHistoryButton(){return this.params&&this.params()&&void 0!==this.params().id},hasPermission:()=>h(["manage-outgoing-integrations","manage-own-outgoing-integrations"]),data:()=>s.instance().record.get(),canDelete(){return this.params&&this.params()&&void 0!==this.params().id},eventTypes:()=>Object.values(f.outgoingEvents),hasTypeSelected(){const e=s.instance().record.get();return"string"==typeof e.event&&""!==e.event},shouldDisplayChannel(){const e=s.instance().record.get();return"string"==typeof e.event&&f.outgoingEvents[e.event].use.channel},shouldDisplayTriggerWords(){const e=s.instance().record.get();return"string"==typeof e.event&&f.outgoingEvents[e.event].use.triggerWords},shouldDisplayTargetRoom(){const e=s.instance().record.get();return"string"==typeof e.event&&f.outgoingEvents[e.event].use.targetRoom},exampleJson(){const e=s.instance().record.get(),t={username:e.alias,icon_emoji:e.emoji,icon_url:e.avatar,text:"Response text",attachments:[{title:"Rocket.Chat",title_link:"https://rocket.chat",text:"Rocket.Chat, the best open source chat",image_url:"/images/integration-attachment-example.png",color:"#764FA5"}]},r=[null,""];return Object.keys(t).forEach(e=>{r.includes(t[e])&&delete t[e]}),m.highlight("json",JSON.stringify(t,null,2)).value},editorOptions:()=>({lineNumbers:!0,mode:"javascript",gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter"],foldGutter:!0,matchBrackets:!0,autoCloseBrackets:!0,matchTags:!0,showTrailingSpace:!0,highlightSelectionMatches:!0})}),s.integrationsOutgoing.events({"blur input":(e,t)=>{t.updateRecord()},"click input[type=radio]":(e,t)=>{t.updateRecord()},"change select[name=event]":(e,t)=>{const r=t.record.get();r.event=$("[name=event]").val().trim(),t.record.set(r)},"click .rc-button.history":()=>{o.go("/admin/integrations/outgoing/".concat(o.getParam("id"),"/history"))},"click .expand":e=>{$(e.currentTarget).closest(".section").removeClass("section-collapsed"),$(e.currentTarget).closest("button").removeClass("expand").addClass("collapse").find("span").text(l.__("Collapse")),$(".CodeMirror").each((e,t)=>t.CodeMirror.refresh())},"click .collapse":e=>{$(e.currentTarget).closest(".section").addClass("section-collapsed"),$(e.currentTarget).closest("button").addClass("expand").removeClass("collapse").find("span").text(l.__("Expand"))},"click .rc-header__section-button > .delete":()=>{const e=s.instance().data.params();p.open({title:k("Are_you_sure"),text:k("You_will_not_be_able_to_recover"),type:"warning",showCancelButton:!0,confirmButtonColor:"#DD6B55",confirmButtonText:k("Yes_delete_it"),cancelButtonText:k("Cancel"),closeOnConfirm:!1,html:!1},()=>{n.call("deleteOutgoingIntegration",e.id,e=>{e?y(e):(p.open({title:k("Deleted"),text:k("Your_entry_has_been_deleted"),type:"success",timer:1e3,showConfirmButton:!1}),o.go("admin-integrations"))})})},"click .button-fullscreen":()=>{$(".code-mirror-box").addClass("code-mirror-box-fullscreen content-background-color"),$(".CodeMirror")[0].CodeMirror.refresh()},"click .button-restore":()=>{$(".code-mirror-box").removeClass("code-mirror-box-fullscreen content-background-color"),$(".CodeMirror")[0].CodeMirror.refresh()},"click .rc-header__section-button > .save":()=>{const e=$("[name=event]").val().trim(),t=$("[name=enabled]:checked").val().trim(),r=$("[name=name]").val().trim(),a=$("[name=impersonateUser]:checked").val().trim(),i=$("[name=alias]").val().trim(),c=$("[name=emoji]").val().trim(),m=$("[name=avatar]").val().trim(),g=$("[name=username]").val().trim(),u=$("[name=token]").val().trim(),v=$("[name=scriptEnabled]:checked").val().trim(),h=$("[name=script]").val().trim(),p=$("[name=retryFailedCalls]:checked").val().trim();let _=$("[name=urls]").val().trim(),k,C,b,x,E,R,w;if(""===g&&"0"===a)return d.error(l.__("The_username_is_required"));if(0===(_=_.split("\n").filter(e=>""!==e.trim())).length)return d.error(l.__("You_should_inform_one_url_at_least"));if(f.outgoingEvents[e].use.triggerWords&&(k=(k=$("[name=triggerWords]").val().trim()).split(",").filter(e=>""!==e.trim()),C=$("[name=triggerWordAnywhere]:checked").val().trim(),b=$("[name=runOnEdits]:checked").val().trim()),f.outgoingEvents[e].use.channel&&(!(x=$("[name=channel]").val().trim())||""===x.trim()))return d.error(l.__("error-the-field-is-required",{field:l.__("Channel")}));if(f.outgoingEvents[e].use.targetRoom&&(!(E=$("[name=targetRoom]").val().trim())||""===E.trim()))return d.error(l.__("error-the-field-is-required",{field:l.__("TargetRoom")}));"1"===p&&(R=parseInt($("[name=retryCount]").val().trim()),w=$("[name=retryDelay]").val().trim());const O={event:""!==e?e:void 0,enabled:"1"===t,username:g,channel:""!==x?x:void 0,targetRoom:""!==E?E:void 0,alias:""!==i?i:void 0,emoji:""!==c?c:void 0,avatar:""!==m?m:void 0,name:""!==r?r:void 0,triggerWords:""!==k?k:void 0,urls:""!==_?_:void 0,token:""!==u?u:void 0,script:""!==h?h:void 0,scriptEnabled:"1"===v,impersonateUser:"1"===a,retryFailedCalls:"1"===p,retryCount:R||6,retryDelay:w||"powers-of-ten",triggerWordAnywhere:"1"===C,runOnEdits:"1"===b},T=s.instance().data.params?s.instance().data.params():void 0;T&&T.id?n.call("updateOutgoingIntegration",T.id,O,e=>{if(e)return y(e);d.success(l.__("Integration_updated"))}):n.call("addOutgoingIntegration",O,(e,t)=>{if(e)return y(e);d.success(l.__("Integration_added")),o.go("admin-integrations-outgoing",{id:t._id})})}}),s.integrationsOutgoing.onRendered(()=>{c.afterFlush(()=>{_.setFlex("adminFlex"),_.openFlex()})})}
