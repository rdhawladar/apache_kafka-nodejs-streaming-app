const Kafka = require('kafka-node');
const config = require('./config');
const app = require('./app');

const client = new Kafka.KafkaClient({ kafkaHost: config.KafkaHost });
const producer = new Kafka.Producer(client, { requireAcks: 1, partitionerType: 2 });

const pushDataToKafka = (dataToPush) => {
    try {
        let payloadToKafkaTopic = [
            {
                topic: config.KafkaTopic,
                messages: JSON.stringify(dataToPush)
            }
        ];

        producer.send(payloadToKafkaTopic, (err, res) => {
            console.log('data: ', payloadToKafkaTopic);
            console.log('response: ', res);
            console.log('err: ', err);
        });

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

app.get('/push-data-to-producer', (req, res) => {
    pushDataToKafka(req.query) ?
        res.end('SUCCESS! Data successfully pushed to producer') :
        res.end('FAILED! Data failed to PUSH.');
});

