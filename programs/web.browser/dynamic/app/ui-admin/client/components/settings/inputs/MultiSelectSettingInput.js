function module(e,t,l){let n,a,i,o,r,u,c,d;function s(e){let{_id:t,label:l,value:s=[],placeholder:m,readonly:g,disabled:k,values:p=[],hasResetButton:h,onChangeValue:x,onResetButtonClick:C,autocomplete:E}=e;const S=c(),b=e=>{x&&x(e)},f=E?o:r;return u.createElement(u.Fragment,null,u.createElement(a.Container,null,u.createElement(i,null,u.createElement(n.Label,{htmlFor:t,title:t},l),h&&u.createElement(d,{"data-qa-reset-setting-id":t,onClick:C}))),u.createElement(f,{"data-qa-setting-id":t,id:t,value:s,placeholder:m,disabled:k,readOnly:g,onChange:b,options:p.map(e=>{let{key:t,i18nLabel:l}=e;return[t,S(l)]})}))}l.export({MultiSelectSettingInput:()=>s}),l.link("@rocket.chat/fuselage",{Field(e){n=e},Flex(e){a=e},Box(e){i=e},MultiSelectFiltered(e){o=e},MultiSelect(e){r=e}},0),l.link("react",{default(e){u=e}},1),l.link("../../../../../../client/contexts/TranslationContext",{useTranslation(e){c=e}},2),l.link("../ResetSettingButton",{ResetSettingButton(e){d=e}},3),l.exportDefault(s)}

