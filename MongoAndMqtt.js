var mongodb = require('mongodb');

var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://202.139.192.75/tgr2020/pm25/data');

mongodb.connect("mongodb://localhost:27017/users", (err, db) => {
    if (err) throw err;
    console.log("team V01D tgr05, Mongodb connected.")
})

client.on('connect', function () {
    console.log("team V01D tgr05, MQTT Connected.");
    client.subscribe('test');
})

client.on('message', function (topic, message) {
     console.log(topic.toString() + " => " + message.toString())
})
