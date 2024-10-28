const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:jacksontech@cluster0.cgd0u.mongodb.net/cinema?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log('db is connected');
}).catch((err) => {
    console.log('db connection error', err);
})