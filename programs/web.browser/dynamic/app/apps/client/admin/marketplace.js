function module(e,t,s){let a,r,n,i,p,o,l,d,c,g,u,h,A,m,k,P,L,f,v;s.link("@babel/runtime/helpers/objectSpread2",{default(e){a=e}},0),s.link("meteor/kadira:flow-router",{FlowRouter(e){r=e}},0),s.link("meteor/reactive-dict",{ReactiveDict(e){n=e}},1),s.link("meteor/templating",{Template(e){i=e}},2),s.link("meteor/tracker",{Tracker(e){p=e}},3),s.link("../../../ui-utils/client",{SideNav(e){o=e},call(e){l=e}},4),s.link("../../../utils",{t(e){d=e}},5),s.link("../communication",{AppEvents(e){c=e}},6),s.link("../orchestrator",{Apps(e){g=e}},7),s.link("./helpers",{appButtonProps(e){u=e},appStatusSpanProps(e){h=e},checkCloudLogin(e){A=e},formatPrice(e){m=e},formatPricingPlan(e){k=e},handleAPIError(e){P=e},promptSubscription(e){L=e},triggerAppPopoverMenu(e){f=e},warnStatusChange(e){v=e}},8),s.link("./marketplace.html"),i.marketplace.onCreated((function(){this.state=new n({isLoggedInCloud:!0,apps:[],isLoading:!0,searchText:"",sortedColumn:"name",isAscendingOrder:!0,page:0,itemsPerPage:0,wasEndReached:!1}),(async()=>{try{this.state.set("isLoggedInCloud",await l("cloud:checkUserLoggedIn"))}catch(e){P(e)}try{const e=await g.getAppsFromMarketplace(),t=await g.getApps(),s=e.map(e=>{const s=t.find(t=>{let{id:s}=t;return s===e.id});return a({},e,s?{installed:!0,status:s.status,version:s.version,marketplaceVersion:e.version}:{status:void 0,marketplaceVersion:e.version})});this.state.set("apps",s)}catch(e){P(e)}finally{this.state.set("isLoading",!1)}})(),this.startAppWorking=e=>{const t=this.state.get("apps"),s=t.find(t=>{let{id:s}=t;return s===e});s.working=!0,this.state.set("apps",t)},this.stopAppWorking=e=>{const t=this.state.get("apps"),s=t.find(t=>{let{id:s}=t;return s===e});delete s.working,this.state.set("apps",t)},this.handleAppAddedOrUpdated=async e=>{try{const{status:t,version:s}=await g.getApp(e),r=await g.getAppFromMarketplace(e,s),n=[...this.state.get("apps").filter(t=>{let{id:s}=t;return s!==e}),a({},r,{installed:!0,status:t,version:s,marketplaceVersion:r.version})];this.state.set("apps",n)}catch(t){P(t)}},this.handleAppRemoved=e=>{const t=this.state.get("apps").map(t=>(t.id===e&&(delete t.installed,delete t.status,t.version=t.marketplaceVersion),t));this.state.set("apps",t)},this.handleAppStatusChange=e=>{let{appId:t,status:s}=e;const a=this.state.get("apps"),r=a.find(e=>{let{id:s}=e;return s===t});r&&(r.status=s,this.state.set("apps",a))},g.getWsListener().registerListener(c.APP_ADDED,this.handleAppAddedOrUpdated),g.getWsListener().registerListener(c.APP_UPDATED,this.handleAppAddedOrUpdated),g.getWsListener().registerListener(c.APP_REMOVED,this.handleAppRemoved),g.getWsListener().registerListener(c.APP_STATUS_CHANGE,this.handleAppStatusChange)})),i.marketplace.onDestroyed((function(){g.getWsListener().unregisterListener(c.APP_ADDED,this.handleAppAddedOrUpdated),g.getWsListener().unregisterListener(c.APP_UPDATED,this.handleAppAddedOrUpdated),g.getWsListener().unregisterListener(c.APP_REMOVED,this.handleAppRemoved),g.getWsListener().unregisterListener(c.APP_STATUS_CHANGE,this.handleAppStatusChange)})),i.marketplace.onRendered(()=>{p.afterFlush(()=>{o.setFlex("adminFlex"),o.openFlex()})}),i.marketplace.helpers({isLoggedInCloud:()=>i.instance().state.get("isLoggedInCloud"),isLoading:()=>i.instance().state.get("isLoading"),handleTableScroll(){const{state:e}=i.instance();if(!e.get("isLoading")&&!e.get("wasEndReached"))return t=>{let{offsetHeight:s,scrollTop:a,scrollHeight:r}=t;const n=s+a>=r-100;if(n)return e.set("page",e.get("page")+1)}},handleTableResize(){const{state:e}=i.instance();return function(){const t=this.$(".table-scroll");e.set("itemsPerPage",Math.ceil(t.height()/40+5))}},handleTableSort(){const{state:e}=i.instance();return t=>{e.set({page:0,wasEndReached:!1}),e.get("sortedColumn")!==t?e.set({sortedColumn:t,isAscendingOrder:!0}):e.set("isAscendingOrder",!e.get("isAscendingOrder"))}},isSortingBy:e=>i.instance().state.get("sortedColumn")===e,sortIcon(e){const{state:t}=i.instance();return e===t.get("sortedColumn")&&t.get("isAscendingOrder")?"sort-down":"sort-up"},apps(){const{state:e}=i.instance(),t=e.get("apps"),s=e.get("searchText").toLocaleLowerCase(),a=e.get("sortedColumn"),r=e.get("isAscendingOrder"),n=r?1:-1;return t.filter(e=>{let{name:t}=e;return t.toLocaleLowerCase().includes(s)}).sort((e,t)=>{let{[a]:s}=e,{[a]:r}=t;return n*String(s).localeCompare(String(r))})},purchaseTypeDisplay(e){let{purchaseType:t,price:s}=e;return d("subscription"===t?"Subscription":s>0?"Paid":"Free")},priceDisplay(e){let{purchaseType:t,pricingPlans:s,price:a}=e;return"subscription"===t?s&&Array.isArray(s)&&0!==s.length?k(s[0]):"-":a>0?m(a):"-"},appButtonProps:u,appStatusSpanProps:h}),i.marketplace.events({"click .js-cloud-login"(){r.go("cloud")},"submit .js-search-form":e=>(e.stopPropagation(),!1),"keyup .js-search"(e,t){t.state.set("searchText",e.currentTarget.value)},"click .js-open"(e,t){e.stopPropagation();const{currentTarget:s}=e,{id:a,version:n,marketplaceVersion:i}=t.state.get("apps").find(e=>{let{id:t}=e;return t===s.dataset.id});r.go("marketplace-app",{appId:a},{version:n||i})},async"click .js-install, click .js-update"(e,t){e.preventDefault(),e.stopPropagation();const s=await A();if(t.state.set("isLoggedInCloud",s),!s)return;const{currentTarget:a}=e,r=t.state.get("apps").find(e=>{let{id:t}=e;return t===a.dataset.id});t.startAppWorking(r.id);try{const{status:e}=await g.installApp(r.id,r.marketplaceVersion);v(r.name,e)}catch(n){P(n)}finally{t.stopAppWorking(r.id)}},async"click .js-purchase"(e,t){e.preventDefault(),e.stopPropagation();const s=await A();if(t.state.set("isLoggedInCloud",s),!s)return;const{currentTarget:a}=e,r=t.state.get("apps").find(e=>{let{id:t}=e;return t===a.dataset.id});t.startAppWorking(r.id),await L(r,async()=>{try{const{status:e}=await g.installApp(r.id,r.marketplaceVersion);v(r.name,e)}catch(e){P(e)}finally{t.stopAppWorking(r.id)}},t.stopAppWorking.bind(t,r.id))},"click .js-menu"(e,t){e.stopPropagation();const{currentTarget:s}=e,a=t.state.get("apps").find(e=>{let{id:t}=e;return t===s.dataset.id});f(a,s,t)}})}

