function module(){Template.__checkName("viewLogs"),Template.viewLogs=new Template("Template.viewLogs",(function(){var t=this;return Blaze.If((function(){return Spacebars.call(t.lookup("hasPermission"))}),(function(){return["\n\t\t",HTML.DIV({class:"section view-logs__terminal js-terminal"},"\n\t\t\t",Blaze.Each((function(){return Spacebars.call(t.lookup("logs"))}),(function(){return["\n\t\t\t\t",HTML.DIV({class:"view-logs__terminal-line"},"\n\t\t\t\t\t",Blaze.View("lookup:ansispan",(function(){return Spacebars.makeRaw(Spacebars.mustache(t.lookup("ansispan"),t.lookup("string")))})),"\n\t\t\t\t"),"\n\t\t\t"]})),"\n\t\t"),"\n\t\t",HTML.DIV({class:"view-logs__new-logs js-new-logs not color-primary-action-color"},"\n\t\t\t",HTML.I({class:"icon-down-big"}),"\n\t\t\t",HTML.SPAN(Blaze.View("lookup:_",(function(){return Spacebars.mustache(t.lookup("_"),"New_logs")}))),"\n\t\t"),"\n\t"]}),(function(){return["\n\t\t",Blaze.View("lookup:_",(function(){return Spacebars.mustache(t.lookup("_"),"Not_authorized")})),"\n\t"]}))}))}
