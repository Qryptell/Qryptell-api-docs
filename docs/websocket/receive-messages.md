---
title: 📨 Receiving Messages
sidebar_position: 5
---

# Receiving Messages

Discover how to handle incoming messages from the LunarLoom WebSocket server in your client applications.

## Message Format

When your client application is connected to the WebSocket server, it can receive various types of messages, including user messages, system messages, and acknowledgment messages. Below is the format of the messages you can expect to receive:

```json
{
  "id": "message_id",
  "from": "sender_username",
  "to": "recipient_username"
  "time": "2024-01-26T09:06:03Z",
  "type": "USER_MSG",
  "content": "TEXT_MESSAGE",
  "message": "Hello, world!",
}
```

- **Id:** Unique identifier of the message.
- **From:** Sender of the message.
- **To:** Recipient of the message.
- **Type:** Type of the message, such as USER_MSG, SYSTEM_MSG, or ACK_MSG.
- **Time:** Timestamp indicating when the message was sent.
- **Content:** Content type of the message, such as TEXT_MESSAGE or FILE_MESSAGE.
- **Message:** Content of the message.

## Handling messages

Upon receiving a message from the WebSocket server, your client application should handle it appropriately based on the message
type and content. For instance, if it's a user message (USER_MSG), you might display it in the chat interface. If it's a system
message (SYSTEM_MSG), you might show it as a notification to the user. And if it's an acknowledgment message (ACK_MSG), you
might update the status of the sent message.

```js
// Handle incoming messages from the WebSocket server
socket.addEventListener('message', function(event) {
    const message = JSON.parse(event.data);

    // Determine the type of message and take appropriate actions
    switch(message.type) {
        case 'USER_MSG':
            // Handle user message
            displayUserMessage(message);
            break;
        case 'SYSTEM_MSG':
            // Handle system message
            displaySystemMessage(message);
            break;
        case 'ACK_MSG':
            // Handle acknowledgment message
            handleAcknowledgment(message);
            break;
        default:
            // Handle other message types
            handleOtherMessage(message);
            break;
    }
});
```
Handling incoming messages from the WebSocket server is crucial for real-time communication in your client application. By
understanding the message format and implementing appropriate handling logic, you can create a seamless and interactive user
experience.

## Sample Messages

Below are sample JSON messages representing a user message (USER_MSG) and an acknowledgment message (ACK_MSG) as they might be
received from the WebSocket server:

### User Message
```json
{
    "id": "f3bd13e8-0cfb-4ef4-a7e2-f29fb43478d3",
    "from": "john",
    "to": "rick",
    "type": "USER_MSG",
    "time": "2024-01-26T09:06:03Z",
    "content": "TEXT_MESSAGE",
    "message": "hai"
}
```

This message represents a user message where "hai" is sent from "john" to "rick" at the specified time.

### Acknowledgment Message

```json
{
    "id": "23213123",
    "from": "john",
    "type": "ACK_MSG",
    "time": "2024-01-26T09:06:03Z",
    "content": "MESSAGE_RECEIVED",
    "message": "f3bd13e8-0cfb-4ef4-a7e2-f29fb43478d3"
}
```
This message represents an acknowledgment message where the server confirms that the message with the ID 232131232
has been received and processed by the server at the specified time and the new id of the message created by server 
 is "f3bd13e8-0cfb-4ef4-a7e2-f29fb43478d3".

These sample messages serve to illustrate the structure and content of user and acknowledgment messages exchanged between
clients and the WebSocket server. Adjustments can be made according to the specific message formats and requirements of your
application.
