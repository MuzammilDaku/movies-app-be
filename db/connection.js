const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/movies-app',{ useNewUrlParser: true,
    useUnifiedTopology: true,}).then(()=>console.log('database connected')).catch((e)=>{
    console.log(`data base error` ,e)
})