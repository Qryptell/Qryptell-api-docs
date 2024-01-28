---
title: 💫 Getting Started
sidebar_position: 2
---
# Getting Started

Welcome to the LunarLoom Auth Service "Getting Started" guide! Follow these steps to set up and run the Auth service locally for testing purposes.

***Note: Using a Auth server as a separate service is not recommended; it should only be employed for testing purposes.***

## Running locally

### Prerequisites

Before you begin, make sure you have the following prerequisites installed on your machine:

- **Node:** [Install Go](https://nodejs.org/en/download)
- **NPM:** [Install NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- **RabbitMQ:** [Install Redis](https://redis.io/download)
- **MySQL:** [Install RabbitMQ](https://www.rabbitmq.com/download.html)

Running the Auth service locally requires Redis as a dependency. Ensure Redis is running on your machine before starting the Auth service.

### Steps


1. **Clone the repository**
```bash
git clone https://github.com/LoomingLunar/LunarLoom-auth-service
cd LunarLoom-auth-service
```

2. **Install dependencies**
```bash
npm i
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

Running the Auth service directly on your host machine is suitable for local testing and development purposes. However, for production deployments, it is recommended to integrate the Auth service as part of a larger infrastructure using technologies like Kubernetes or other container orchestration solutions.

If you encounter any issues or have questions, feel free to refer to the comprehensive Auth Service Documentation or reach out to our support team.

Happy testing with LunarLoom Auth Service!
