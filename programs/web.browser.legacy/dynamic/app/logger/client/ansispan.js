function module(e,r,n){var a;n.link("@babel/runtime/helpers/slicedToArray",{default:function(e){a=e}},0),n.export({ansispan:function(){return p}});var l={30:"gray",31:"red",32:"lime",33:"yellow",34:"#6B98FF",35:"#FF00FF",36:"cyan",37:"white"},p=function(e){return e=e.replace(/\s/g,"&nbsp;").replace(/(\\n|\n)/g,"<br>").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/(.\d{8}-\d\d:\d\d:\d\d\.\d\d\d\(?.{0,2}\)?)/,'<span class="terminal-time">$1</span>').replace(/\033\[1m/g,"<strong>").replace(/\033\[22m/g,"</strong>").replace(/\033\[3m/g,"<em>").replace(/\033\[23m/g,"</em>").replace(/\033\[m/g,"</span>").replace(/\033\[0m/g,"</span>").replace(/\033\[39m/g,"</span>"),Object.entries(l).reduce((function(e,r){var n=a(r,2),l=n[0],p,c='<span style="color: '+n[1]+'">';return e.replace(new RegExp("\\033\\["+l+"m","g"),c).replace(new RegExp("\\033\\[0;"+l+"m","g"),c)}),e)}}

