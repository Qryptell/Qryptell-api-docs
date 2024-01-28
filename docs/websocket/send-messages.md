---
title: 📤 Sending Messages
sidebar_position: 4
---

# Sending Messages

Explore how to send messages to the LunarLoom WebSocket server from your client applications and handle response.

## Send Message

Sending messages to websocket service.

### Message Format

Messages sent to the WebSocket server follow a specific format to ensure proper communication and handling. The message format includes the following fields:

- **Type:** The type of the message, which can be SYSTEM_MSG, USER_MSG, ACK_MSG, or any other custom type defined by the server.
- **Content:** The content of the message, which can be text, JSON objects, binary data, or any other data format supported by the server.
- **From:** The sender of the message (optional for some message types).
- **To:** The recipient of the message (optional for some message types).
- **Message ID:** The unique identifier of the message, which helps in tracking and identifying messages.

```json
{
  "id": "unique_message_id",
  "from": "sender_username",
  "to": "recipient_username"
  "type": "USER_MSG",
  "content": "TEXT_MESSAGE",
  "message": "Hello, world!",
}
```

#### Message Types

- **USER_MSG:**
        Represents user-generated messages.
        Used for regular chat messages between users.

- **ACK_MSG:**
        Acknowledgment message sent by the server.
        Indicates that a message has been successfully received or processed.

- **SYSTEM_MSG:**
        System-generated messages used for server notifications or error messages.

#### Message Contents

- **TEXT_MESSAGE:**
        Content type for text-based messages.
        Used for sending textual content between users.

- **FILE_MESSAGE:**
        Content type for file-based messages.
        Used for transferring files or binary data between users.

- **MESSAGE_RECEIVED:**
        Content type for acknowledgment messages (ACK_MSG).
        Indicates that a message has been received and processed by the server.

### Send Message - Example

When a message is ready to be sent, it's converted into a JSON format and sent to the WebSocket server. Adjustments can be made
to accommodate specific message formats and requirements of your application.

```js
function generateId() {
  // Generate a unique message ID 
  return id();
}

const id = generateId();

const userMessage = {
  'type': 'USER_MSG',
  'content': 'TEXT_MESSAGE',
  'message': 'Hello, world!',
  'from': 'john',
  'to': 'rick',
  'id': id
};

socket.send(JSON.stringify(userMessage));
```

## Handle Response

Handle acknowledgment messages (ACK_MSG) received from the LunarLoom WebSocket server in your client applications.

When you send a message to the WebSocket server, you may receive an acknowledgment message (ACK_MSG) in response. This message confirms that the server has received and processed the message successfully.

### ACK_MSG Format

Acknowledgment messages (ACK_MSG) are sent from the server to confirm the successful receipt and processing of a message. They typically include the following fields:

- **Id:** Specifies the ID of the acknowledgment message.
- **From:** Indicates the sender of the acknowledgment message.
- **Type:** Identifies the type of message, which is ACK_MSG.
- **Time:** Indicates the timestamp when the acknowledgment message was sent. The format is ISO 8601 with UTC timezone ("YYYY-MM-DDTHH:MM:SSZ").
- **Content:** Specifies the content of the acknowledgment message, which is MESSAGE_RECEIVED.
- **Message:** Contains the new message ID assigned by the server for tracking purposes.

```json
{
  "id": "23423", // message id send from the client
  "from": "john",
  "type": "ACK_MSG",
  "time": "2024-01-25T18:07:19Z",
  "content": "MESSAGE_RECEIVED",
  "message": "c07a6886-1a32-4b79-89ec-698fbb71c375" // messge id created by the server
}
```

### Handle Response - Example

When an acknowledgment message is received, it ensures that the message content is "MESSAGE_RECEIVED". If confirmed, it
extracts the new message ID and acknowledgment time, updates the message tracking accordingly, and handles the acknowledgment
time. Adjustments can be made to suit your application's specific needs.

```js
// Handle WebSocket messages
socket.addEventListener('message', function (event) {
    const message = JSON.parse(event.data);
    
    // Check if the received message is an ACK_MSG
    if (message.type === 'ACK_MSG') {
        // Check if ACK_MSG is for receiving message
        if (message.content === 'MESSAGE_RECEIVED') {
            const oldMessageId = message.id
            const newMessageId = message.message;
            
            updateMessageId(oldMessageId, newMessageId);
        }
    }
});
```
