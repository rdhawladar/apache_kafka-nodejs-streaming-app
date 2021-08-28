const kafka = require('kafka-node');
const config = require('./config');

const client = new kafka.KafkaClient({ kafkaHost: config.KafkaHost });

const options = [
    {
        topic: config.KafkaTopic,
        partitions: 1,
        replicationFactor: 1
    }
];

client.createTopics(options, (error, result) => {
    result.length ?
        console.log(result) :
        console.log(`::TOPIC CREATED! Topic '${config.KafkaTopic}' created successfully.`);
});
