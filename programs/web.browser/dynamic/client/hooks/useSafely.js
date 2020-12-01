function module(e,t,c){let n,u,r;c.export({useSafely:()=>l}),c.link("@rocket.chat/fuselage-hooks",{useMutableCallback(e){n=e}},0),c.link("react",{useEffect(e){u=e},useRef(e){r=e}},1);const l=e=>{let[t,c]=e;const l=r();u(()=>(l.current=!0,()=>{l.current=!1}));const o=n((function(){l.current&&c(...arguments)}));return[t,o]}}

