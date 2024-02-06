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

- **Node:** [Install Node.js](https://nodejs.org/en/download)
- **NPM:** [Install NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- **RabbitMq:** [Install RabbitMQ](https://www.rabbitmq.com/download.html)
- **MySQL:** [Install MySQL](https://www.mysql.com/downloads/)
Running the Auth service locally requires RabbitMq and MySQL as a dependency. Ensure RabbitMq and MySQL is running on your machine before starting the Auth service.

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

- **PORT**   port that server needed to run 
- **RABBIT_MQ_URL**   the url of rabbitmq message broker 
- **JWT_ACCESS_SECRET**   secret used for jwt token
- **DB_HOST**   host name for mysql configuartion
- **DB_USER**   user name for mysql configuartion
- **DB_PASSWORD**   password of specified user for mysql configuartion
- **CLIENT_URL**   url which client is running
- **TEMP_USER_EXPIRY_TIME**   expiry time to remove user data from db with uncompleted register actions
- **USER_SERVICE_URL**   url which user service is running. in sum situations auth service need to connect to user service


##### Sample enviornment file
```env
PORT = 4000
RABBIT_MQ_URL="amqp://localhost"
JWT_ACCESS_SECRET =  "secret"
DB_HOST="localhost"
DB_USER="root"
DB_PASSWORD="pass"
CLIENT_URL="http://localhost:3000"
TEMP_USER_EXPIRY_TIME = 1000
USER_SERVICE_URL = "http://localhost:4001"
```

4. **Run Server**
    * **Run the server for development**
    ```bash
    npm run dev
    ```

    * **Run the server for production**
    ```bash
    npm run deploy
    ```

## Important Note

Running the Auth service directly on your host machine is suitable for local testing and development purposes. However, for production deployments, it is recommended to integrate the Auth service as part of a larger infrastructure using technologies like Kubernetes or other container orchestration solutions.

If you encounter any issues or have questions, feel free to refer to the comprehensive Auth Service Documentation or reach out to our support team.

Happy testing with LunarLoom Auth Service!
