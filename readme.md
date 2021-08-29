
# NodeJS Streaming App with Apache Kakfa
## Features 
- API endpoint for creating data for Producer
- Create new topic 
- Producer Push data to kafka topic
- Consumer Pull Data from kafka topic

## Description
This is a sample streaming application built with Nodejs. With the nodejs you can push your data to specific kafka topic through Porducer and pull the realtime data from the kafta topic to through Consumer. It has an API endpint to send query data to producer and consumer will pull the data in real time.

## Project Structure
    .
    |-- app.js          # Initial file to start server
    |-- config.js       # Exports project configuration data
    |-- topic.js        # Create new topic
    |-- consumer.js     # Pull real time data from Producer
    |-- producer.js     # Push real time data to Producer
    |-- .env.example    # example data for .env file
    |-- readme.md       # Explains project installation and other informations

## Tools and Technology
*   Node.js
*   Apache Kafka
*   Express.js
*   Postman

## Installation
- Copy/rename `.env.example` file as `.env`. Change the data based on your environment.
- Start your kafka broker
- To install dependencies run `npm install `
- To start server run `npm start`. This command will create new topic with the name mentioned in the `.env` file if the topic doesn't exist. 
- Open postman and send data to producer with this `GET` request `localhost:3000/push-data-to-producer?name=Jon Doe&address=Bangladesh`
- Open another terminal and run `npm run consumer` to start consumer to pull real time data from producer.









