require('dotenv').config();

const config = {
    KafkaHost: process.env.HOST_ADDRESS + process.env.KAFKA_HOST_PORT,
    KafkaTopic: process.env.TOPIC_NAME,
};

module.exports = config;
