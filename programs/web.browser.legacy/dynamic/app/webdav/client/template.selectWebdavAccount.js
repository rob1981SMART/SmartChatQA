function module(){Template.__checkName("selectWebdavAccount"),Template.selectWebdavAccount=new Template("Template.selectWebdavAccount",(function(){var t=this;return HTML.DIV({class:"flex-tab__result list-view"},"\n\t\t",HTML.UL({class:"list clearfix lines"},"\n\t\t\t",Blaze.Each((function(){return Spacebars.call(t.lookup("webdavAccounts"))}),(function(){return["\n\t\t\t\t",HTML.LI({class:"rc-member-list__user webdav-account",id:function(){return Spacebars.mustache(Spacebars.dot(t.lookup("."),"_id"))}},"\n\t\t\t\t\t",HTML.DIV({class:"rc-member-list__username"},"\n\t\t\t\t\t\t",Blaze.View("lookup:usernamePlusServer",(function(){return Spacebars.mustache(t.lookup("usernamePlusServer"),t.lookup("."))})),"\n\t\t\t\t\t"),"\n\t\t\t\t"),"\n\t\t\t"]})),"\n\t\t"),"\n\t")}))}
