const {PubSub} = require('@google-cloud/pubsub')
const pubSubClient = new PubSub()

async function publishMessage(){
    const dataBuffer = Buffer.from("New Message From Pub/Sub")
    const customAttributes = {origin:'app_publisher.js', foo:'bar'}

    try {
       const messageId = await pubSubClient.topic('tutorial_tema').publish(dataBuffer,customAttributes)
       console.log(`Mensaje ${messageId} publicado`)

    } catch (error) {
        console.error(`Ha ocurrido el siguiente error: ${error}`)
    }
}

publishMessage()