const mongoose = require('mongoose');

const { deployCommands } = require('./utils/deployCommands')

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {

        // await mongoose.connect(
        //     process.env.MONGO_CLIENT,
        //     {
        //         useNewUrlParser: true,
        //         useUnifiedTopology: true,
        //         autoIndex: false
        //     },
        //     (err) => {
        //         if (err) return console.error(err);
        //     }
        // )

        console.log('Deploying Commands')
        deployCommands();

        console.log(`Ready! Logged in as ${client.user.tag}`);
    },
}