const {PubSub} = require('@google-cloud/pubsub')
const pubSubClient = new PubSub()

function listenerForMessages(){
    const suscription = pubSubClient.subscription("pull_sub")
    const messageHandler = message => {
        console.log(`Mensaje recibido con ID: ${message.id}`)
        console.log(`\tTexto: ${message.data}`)
        console.log(`\tAtributos : ${JSON.stringify(message.attributes)}`)
        message.ack()
    }
    suscription.on("message",messageHandler)
}

listenerForMessages()