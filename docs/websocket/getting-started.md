---
title: 💫 Getting Started
sidebar_position: 2
---
# Getting Started

Welcome to the Lunar Loom WebSocket Service "Getting Started" guide! Follow these steps to set up and run the WebSocket service locally for testing purposes.

***Note: Using a WebSocket server as a separate service is not recommended; it should only be employed for testing purposes.***

## Running locally

### Prerequisites

Before you begin, make sure you have the following prerequisites installed on your machine:

- **Go:** [Install Go](https://golang.org/doc/install)
- **Make:** Ensure that `make` is installed on your machine.
- **Redis:** [Install Redis](https://redis.io/download)

Running the WebSocket service locally requires Redis as a dependency. Ensure Redis is running on your machine before starting the WebSocket service.

### Steps


1. **Clone the repository**
```bash
git clone https://github.com/LoomingLunar/LunarLoom-websocket-service
cd LunarLoom-websocket-service
```

2. **Install dependencies**
```bash
go mod tidy
```

3. **Set Enviornment variables**

You need to set enviorment variabels to run the servic properly, those are

- **PORT**   port that server needed to run (if you not sepecify it select 9000 as default port)
- **REDIS_IP**   the port redis is running (service uses redis pub-sub for sending messages accross the server)
- **AUTH_SECRET**   secret used for jwt token

##### Sample enviornment file
```env
PORT=9000
REDIS_IP=localhost:6379
AUTH_SECRET=secret
```

4. **Run the server**
```bash
make run
```

## Running in Docker

### Prerequisites

Before you begin, make sure you have the following prerequisites installed on your machine:

- **Docker:** [Install Docker](https://docs.docker.com/get-docker/)
- **Docker Compose:** [Install Docker Compose](https://docs.docker.com/compose/install/) (if not included with Docker installation)

### Steps

1. **Get docker compose file**

Download the docker compose [file](https://github.com/LoomingLunar/LunarLoom-websocket-service/blob/main/docker-compose.yaml) or clone the websocket service and navigate to the directory.

1. **Run using docker**
```bash
docker-compose up -d
```

To stop running the server
```bash
docker-compose down
```

## Important Note

Running the WebSocket service directly on your host machine is suitable for local testing and development purposes. However, for production deployments, it is recommended to integrate the WebSocket service as part of a larger infrastructure using technologies like Kubernetes or other container orchestration solutions.

If you encounter any issues or have questions, feel free to refer to the comprehensive WebSocket Service Documentation or reach out to our support team.

Happy testing with Lunar Loom WebSocket Service!
