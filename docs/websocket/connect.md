---
title: 🔗 Connect
sidebar_position: 3
---

# Web Socket Connection

In this section, you will learn how to connect to the Qryptell WebSocket server from your client applications. Establishing a WebSocket connection allows your clients to send and receive real-time messages, participate in chat conversations, and receive updates instantly.

## WebSocket URL

To connect to the Qryptell WebSocket server, use the following WebSocket URL format:
```http
ws://<server_address>:9000/ws?Authentication=<authentication_token>
```
replace `localhost:9000` with according url/port.

- `<server_address>`: The address where the WebSocket server is hosted.
- `<authentication_token>`: The authentication token required to authenticate your connection with the server.

### Example connection url
```http
ws://localhost:9000/ws?Authentication=jwt.access.token
```

## Connecting websocket

Once you have the WebSocket URL, you can establish a connection from your client application using the WebSocket API provided by your programming language or framework.

### Websocket connection Example

```javascript
const auth_token = "jwt authentication token"
const socket = new WebSocket('ws://localhost:9000/ws?Authentication='+auth_token);
```

Store and use this socket to send and receive messages using websocket.

### Disconnecting websocket

The websocket connection need to be closed after the use or when user leaves the page.

```javascript
socket.close()
```
