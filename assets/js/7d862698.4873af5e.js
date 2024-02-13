"use strict";(self.webpackChunklunar_loom_api_docs=self.webpackChunklunar_loom_api_docs||[]).push([[552],{596:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var o=t(5893),c=t(1151);const s={title:"\ud83d\udd17 Connect",sidebar_position:3},i="Web Socket Connection",r={id:"connect",title:"\ud83d\udd17 Connect",description:"In this section, you will learn how to connect to the Qryptell WebSocket server from your client applications. Establishing a WebSocket connection allows your clients to send and receive real-time messages, participate in chat conversations, and receive updates instantly.",source:"@site/docs/websocket/connect.md",sourceDirName:".",slug:"/connect",permalink:"/Qryptell-api-docs/websocket/connect",draft:!1,unlisted:!1,editUrl:"https://github.com/Qryptell/Qryptell-api-docs/edit/main/docs/websocket/connect.md",tags:[],version:"current",lastUpdatedAt:1707845448,formattedLastUpdatedAt:"Feb 13, 2024",sidebarPosition:3,frontMatter:{title:"\ud83d\udd17 Connect",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcab Getting Started",permalink:"/Qryptell-api-docs/websocket/getting-started"},next:{title:"\ud83d\udce4 Sending Messages",permalink:"/Qryptell-api-docs/websocket/send-messages"}},a={},l=[{value:"WebSocket URL",id:"websocket-url",level:2},{value:"Example connection url",id:"example-connection-url",level:3},{value:"Connecting websocket",id:"connecting-websocket",level:2},{value:"Websocket connection Example",id:"websocket-connection-example",level:3},{value:"Disconnecting websocket",id:"disconnecting-websocket",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"web-socket-connection",children:"Web Socket Connection"}),"\n",(0,o.jsx)(n.p,{children:"In this section, you will learn how to connect to the Qryptell WebSocket server from your client applications. Establishing a WebSocket connection allows your clients to send and receive real-time messages, participate in chat conversations, and receive updates instantly."}),"\n",(0,o.jsx)(n.h2,{id:"websocket-url",children:"WebSocket URL"}),"\n",(0,o.jsx)(n.p,{children:"To connect to the Qryptell WebSocket server, use the following WebSocket URL format:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-http",children:"ws://<server_address>:9000/ws?Authentication=<authentication_token>\n"})}),"\n",(0,o.jsxs)(n.p,{children:["replace ",(0,o.jsx)(n.code,{children:"localhost:9000"})," with according url/port."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"<server_address>"}),": The address where the WebSocket server is hosted."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"<authentication_token>"}),": The authentication token required to authenticate your connection with the server."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"example-connection-url",children:"Example connection url"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-http",children:"ws://localhost:9000/ws?Authentication=jwt.access.token\n"})}),"\n",(0,o.jsx)(n.h2,{id:"connecting-websocket",children:"Connecting websocket"}),"\n",(0,o.jsx)(n.p,{children:"Once you have the WebSocket URL, you can establish a connection from your client application using the WebSocket API provided by your programming language or framework."}),"\n",(0,o.jsx)(n.h3,{id:"websocket-connection-example",children:"Websocket connection Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const auth_token = \"jwt authentication token\"\nconst socket = new WebSocket('ws://localhost:9000/ws?Authentication='+auth_token);\n"})}),"\n",(0,o.jsx)(n.p,{children:"Store and use this socket to send and receive messages using websocket."}),"\n",(0,o.jsx)(n.h3,{id:"disconnecting-websocket",children:"Disconnecting websocket"}),"\n",(0,o.jsx)(n.p,{children:"The websocket connection need to be closed after the use or when user leaves the page."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"socket.close()\n"})})]})}function h(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>i});var o=t(7294);const c={},s=o.createContext(c);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);