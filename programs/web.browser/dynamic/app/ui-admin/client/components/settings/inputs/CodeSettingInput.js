function module(e,t,a){let l,n,r,o,i,c,s,u,d,m,g,h,p;function f(e){let{lineNumbers:t=!0,lineWrapping:r=!0,mode:o="javascript",gutters:i=["CodeMirror-linenumbers","CodeMirror-foldgutter"],foldGutter:c=!0,matchBrackets:s=!0,autoCloseBrackets:h=!0,matchTags:p=!0,showTrailingSpace:f=!0,highlightSelectionMatches:b=!0,readOnly:k,value:C,defaultValue:y,onChange:B}=e,E=n(e,["lineNumbers","lineWrapping","mode","gutters","foldGutter","matchBrackets","autoCloseBrackets","matchTags","showTrailingSpace","highlightSelectionMatches","readOnly","value","defaultValue","onChange"]);const[x,S]=g(),[T,v]=g(C||y),M=m();return d(()=>{let e;const l=async()=>{const l=await a.dynamicImport("codemirror/lib/codemirror.js");await a.dynamicImport("../../../../../ui/client/lib/codeMirror/codeMirror"),await a.dynamicImport("codemirror/lib/codemirror.css");const{current:n}=M;n&&((e=l.fromTextArea(n,{lineNumbers:t,lineWrapping:r,mode:o,gutters:i,foldGutter:c,matchBrackets:s,autoCloseBrackets:h,matchTags:p,showTrailingSpace:f,highlightSelectionMatches:b,readOnly:k})).on("change",e=>{const t=e.getValue();v(t),B(t)}),S(e))};return l(),()=>{e&&e.toTextArea()}},[M]),d(()=>{v(C)},[C]),d(()=>{x&&T!==x.getValue()&&x.setValue(T)},[x,M,T]),u.createElement("textarea",l({readOnly:!0,ref:M,style:{display:"none"},value:T},E))}function b(e){let{_id:t,label:a,value:l="",code:n,placeholder:d,readonly:m,autocomplete:g,disabled:b,hasResetButton:k,onChangeValue:C,onResetButtonClick:y}=e;const B=h(),[E,x]=s(!1),S=e=>{C(e)};return u.createElement(u.Fragment,null,u.createElement(c.Container,null,u.createElement(r,null,u.createElement(i.Label,{htmlFor:t,title:t},a),k&&u.createElement(p,{"data-qa-reset-setting-id":t,onClick:y}))),u.createElement("div",{className:["code-mirror-box",E&&"code-mirror-box-fullscreen content-background-color"].filter(Boolean).join(" ")},u.createElement("div",{className:"title"},a),u.createElement(f,{"data-qa-setting-id":t,id:t,mode:n,value:l,placeholder:d,disabled:b,readOnly:m,autoComplete:!1===g?"off":void 0,onChange:S}),u.createElement("div",{className:"buttons"},u.createElement(o,{primary:!0,onClick:()=>x()},B(E?"Exit_Full_Screen":"Full_Screen")))))}a.link("@babel/runtime/helpers/extends",{default(e){l=e}},0),a.link("@babel/runtime/helpers/objectWithoutProperties",{default(e){n=e}},1),a.export({CodeSettingInput:()=>b}),a.link("@rocket.chat/fuselage",{Box(e){r=e},Button(e){o=e},Field(e){i=e},Flex(e){c=e}},0),a.link("@rocket.chat/fuselage-hooks",{useToggle(e){s=e}},1),a.link("react",{default(e){u=e},useEffect(e){d=e},useRef(e){m=e},useState(e){g=e}},2),a.link("../../../../../../client/contexts/TranslationContext",{useTranslation(e){h=e}},3),a.link("../ResetSettingButton",{ResetSettingButton(e){p=e}},4)}
