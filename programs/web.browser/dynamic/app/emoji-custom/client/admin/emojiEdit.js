function module(e,i,t){let s,n,a,o,l,r,m;t.link("meteor/meteor",{Meteor(e){s=e}},0),t.link("meteor/templating",{Template(e){n=e}},1),t.link("meteor/rocketchat:tap-i18n",{TAPi18n(e){a=e}},2),t.link("toastr",{default(e){o=e}},3),t.link("underscore.string",{default(e){l=e}},4),t.link("../../../utils",{t(e){r=e},handleError(e){m=e}},5),n.emojiEdit.helpers({emoji:()=>n.instance().emoji,name(){return this.name||this._id}}),n.emojiEdit.events({"click .cancel"(e,i){e.stopPropagation(),e.preventDefault(),delete n.instance().emojiFile,i.cancel(i.find("form"))},"submit form"(e,i){e.stopPropagation(),e.preventDefault(),i.save(e.currentTarget)},"change input[type=file]"(e){const i=null!=e.originalEvent?e.originalEvent:e;let{files:t}=i.target;null!=t&&0!==t.length||(t=null!=i.dataTransfer&&null!=i.dataTransfer.files?i.dataTransfer.files:[]);for(const s in t)t.hasOwnProperty(s)&&(n.instance().emojiFile=t[s])}}),n.emojiEdit.onCreated((function(){null!=this.data?this.emoji=this.data.emoji:this.emoji=void 0,this.tabBar=n.currentData().tabBar,this.onSuccess=n.currentData().onSuccess,this.cancel=(e,i)=>{e.reset(),this.tabBar.close(),this.emoji&&this.data.back(i)},this.getEmojiData=()=>{const e={};return null!=this.emoji&&(e._id=this.emoji._id,e.previousName=this.emoji.name,e.extension=this.emoji.extension,e.previousExtension=this.emoji.extension),e.name=l.trim(this.$("#name").val()),e.aliases=l.trim(this.$("#aliases").val()),e.newFile=!1,e},this.validate=()=>{const e=this.getEmojiData(),i=[];e.name||i.push("Name"),e._id||this.emojiFile||i.push("Image");for(const t of i)o.error(a.__("error-the-field-is-required",{field:a.__(t)}));return this.emojiFile&&(/image\/.+/.test(this.emojiFile.type)||(i.push("FileType"),o.error(a.__("error-invalid-file-type")))),0===i.length},this.save=e=>{if(this.validate()){const i=this.getEmojiData();this.emojiFile&&(i.newFile=!0,i.extension=this.emojiFile.name.split(".").pop()),s.call("insertOrUpdateEmoji",i,(t,n)=>{if(n){if(this.emojiFile){o.info(a.__("Uploading_file"));const e=new FileReader;e.readAsBinaryString(this.emojiFile),e.onloadend=()=>{s.call("uploadEmojiCustom",e.result,this.emojiFile.type,i,e=>{null!=e&&(m(e),console.log(e))}),delete this.emojiFile,o.success(a.__("File_uploaded"))}}i._id?o.success(r("Custom_Emoji_Updated_Successfully")):o.success(r("Custom_Emoji_Added_Successfully")),this.onSuccess(),this.cancel(e,i.name)}t&&m(t)})}}}))}

