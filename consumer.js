const kafka = require('kafka-node');
const config = require('./config');

try {
    const Consumer = kafka.Consumer;
    const client = new kafka.KafkaClient({
        idleConnection: 60 * 60 * 1000,
        kafkaHost: config.KafkaHost
    });

    let consumer = new Consumer(
        client,
        [
            {
                topic: config.KafkaTopic,
                partition: 1
            }
        ],
        {
            autoCommit: true,
            fetchMaxWaitMs: 1000,
            fetchMaxBytes: 1024 * 1024,
            encoding: 'utf8',
        }
    );

    consumer.on('message', async function (message) {
        console.log('message: ', JSON.parse(message.value));
    })

    consumer.on('error', function (error) {
        console.log('error', error);
    });
} catch (error) {
    console.log(error);
}
