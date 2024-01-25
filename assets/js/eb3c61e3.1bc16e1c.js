"use strict";(self.webpackChunklunar_loom_api_docs=self.webpackChunklunar_loom_api_docs||[]).push([[362],{319:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=n(5893),a=n(1151);const r={title:"\ud83d\udce4 Sending Messages",sidebar_position:4},i="Sending Messages",o={id:"send-messages",title:"\ud83d\udce4 Sending Messages",description:"Explore how to send messages to the Lunar Loom WebSocket server from your client applications and handle response.",source:"@site/docs/websocket/send-messages.md",sourceDirName:".",slug:"/send-messages",permalink:"/LunarLoom-api-docs/websocket/send-messages",draft:!1,unlisted:!1,editUrl:"https://github.com/LoomingLunar/websocket/edit/main/send-messages.md",tags:[],version:"current",lastUpdatedAt:1706208322,formattedLastUpdatedAt:"Jan 25, 2024",sidebarPosition:4,frontMatter:{title:"\ud83d\udce4 Sending Messages",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd17 Connect",permalink:"/LunarLoom-api-docs/websocket/connect"}},d={},c=[{value:"Send Message",id:"send-message",level:2},{value:"Message Format",id:"message-format",level:3},{value:"Message Types",id:"message-types",level:4},{value:"Message Contents",id:"message-contents",level:4},{value:"Send Message - Example",id:"send-message---example",level:3},{value:"Handle Response",id:"handle-response",level:2},{value:"ACK_MSG Format",id:"ack_msg-format",level:3},{value:"Handle Response - Example",id:"handle-response---example",level:3}];function l(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"sending-messages",children:"Sending Messages"}),"\n",(0,t.jsx)(s.p,{children:"Explore how to send messages to the Lunar Loom WebSocket server from your client applications and handle response."}),"\n",(0,t.jsx)(s.h2,{id:"send-message",children:"Send Message"}),"\n",(0,t.jsx)(s.p,{children:"Sending messages to websocket service."}),"\n",(0,t.jsx)(s.h3,{id:"message-format",children:"Message Format"}),"\n",(0,t.jsx)(s.p,{children:"Messages sent to the WebSocket server follow a specific format to ensure proper communication and handling. The message format includes the following fields:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Type:"})," The type of the message, which can be SYSTEM_MSG, USER_MSG, ACK_MSG, or any other custom type defined by the server."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Content:"})," The content of the message, which can be text, JSON objects, binary data, or any other data format supported by the server."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"From:"})," The sender of the message (optional for some message types)."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"To:"})," The recipient of the message (optional for some message types)."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Message ID:"})," The unique identifier of the message, which helps in tracking and identifying messages."]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "id": "unique_message_id",\n  "from": "sender_username",\n  "to": "recipient_username"\n  "type": "USER_MSG",\n  "content": "TEXT_MESSAGE",\n  "message": "Hello, world!",\n}\n'})}),"\n",(0,t.jsx)(s.h4,{id:"message-types",children:"Message Types"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"USER_MSG:"}),"\nRepresents user-generated messages.\nUsed for regular chat messages between users."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"ACK_MSG:"}),"\nAcknowledgment message sent by the server.\nIndicates that a message has been successfully received or processed."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"SYSTEM_MSG:"}),"\nSystem-generated messages used for server notifications or error messages."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"message-contents",children:"Message Contents"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"TEXT_MESSAGE:"}),"\nContent type for text-based messages.\nUsed for sending textual content between users."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"FILE_MESSAGE:"}),"\nContent type for file-based messages.\nUsed for transferring files or binary data between users."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"MESSAGE_RECEIVED:"}),"\nContent type for acknowledgment messages (ACK_MSG).\nIndicates that a message has been received and processed by the server."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"send-message---example",children:"Send Message - Example"}),"\n",(0,t.jsx)(s.p,{children:"When a message is ready to be sent, it's converted into a JSON format and sent to the WebSocket server. Adjustments can be made\nto accommodate specific message formats and requirements of your application."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"function generateId() {\n  // Generate a unique message ID \n  return id();\n}\n\nconst id = generateId();\n\nconst userMessage = {\n  'type': 'USER_MSG',\n  'content': 'TEXT_MESSAGE',\n  'message': 'Hello, world!',\n  'from': 'john',\n  'to': 'rick',\n  'id': id\n};\n\nsocket.send(JSON.stringify(userMessage));\n"})}),"\n",(0,t.jsx)(s.h2,{id:"handle-response",children:"Handle Response"}),"\n",(0,t.jsx)(s.p,{children:"Handle acknowledgment messages (ACK_MSG) received from the Lunar Loom WebSocket server in your client applications."}),"\n",(0,t.jsx)(s.p,{children:"When you send a message to the WebSocket server, you may receive an acknowledgment message (ACK_MSG) in response. This message confirms that the server has received and processed the message successfully."}),"\n",(0,t.jsx)(s.h3,{id:"ack_msg-format",children:"ACK_MSG Format"}),"\n",(0,t.jsx)(s.p,{children:"Acknowledgment messages (ACK_MSG) are sent from the server to confirm the successful receipt and processing of a message. They typically include the following fields:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Id:"})," Specifies the ID of the acknowledgment message."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"From:"})," Indicates the sender of the acknowledgment message."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Type:"})," Identifies the type of message, which is ACK_MSG."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Time:"}),' Indicates the timestamp when the acknowledgment message was sent. The format is ISO 8601 with UTC timezone ("YYYY-MM-DDTHH:MM',":SSZ",'").']}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Content:"})," Specifies the content of the acknowledgment message, which is MESSAGE_RECEIVED."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Message:"})," Contains the new message ID assigned by the server for tracking purposes."]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "id": "23423", // message id send from the client\n  "from": "john",\n  "type": "ACK_MSG",\n  "time": "2024-01-25T18:07:19Z",\n  "content": "MESSAGE_RECEIVED",\n  "message": "c07a6886-1a32-4b79-89ec-698fbb71c375" // messge id created by the server\n}\n'})}),"\n",(0,t.jsx)(s.h3,{id:"handle-response---example",children:"Handle Response - Example"}),"\n",(0,t.jsx)(s.p,{children:'When an acknowledgment message is received, it ensures that the message content is "MESSAGE_RECEIVED". If confirmed, it\nextracts the new message ID and acknowledgment time, updates the message tracking accordingly, and handles the acknowledgment\ntime. Adjustments can be made to suit your application\'s specific needs.'}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"// Handle WebSocket messages\nsocket.addEventListener('message', function (event) {\n    const message = JSON.parse(event.data);\n    \n    // Check if the received message is an ACK_MSG\n    if (message.type === 'ACK_MSG') {\n        // Check if ACK_MSG is for receiving message\n        if (message.content === 'MESSAGE_RECEIVED') {\n            const oldMessageId = message.id\n            const newMessageId = message.message;\n            \n            updateMessageId(oldMessageId, newMessageId);\n        }\n    }\n});\n"})})]})}function h(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>i});var t=n(7294);const a={},r=t.createContext(a);function i(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);