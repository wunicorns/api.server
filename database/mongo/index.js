const mongoose = require('mongoose');

mongoose.model.exports = {
    connect: DB_HOST =>{
        mongoose.set('uewNewUrlParser', true);
        mongoose.set('useFindAndModify', false);
        mongoose.set('useCreateIndex', true);
        mongoose.set('useUnifiedTopology', true);
        mongoose.connect(DB_HOST);
        mongoose.connection.on('error', err=>{
            console.error(err);
            console.log(err);
        });
        process.exit();
    },
    close: ()=>{
        mongoose.connection.close();
    }
}