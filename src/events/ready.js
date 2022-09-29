const mongoose = require('mongoose');



module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {

        await mongoose.connect(
            process.env.MONGO_CLIENT,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                autoIndex: false
            },
            (err) => {
                if (err) return console.error(err);
            }
        )

        console.log(`Ready! Logged in as ${client.user.tag}`);
    },
}