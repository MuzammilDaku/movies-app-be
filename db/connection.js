const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB,{ useNewUrlParser: true,
    useUnifiedTopology: true,}).then(()=>console.log('database connected')).catch((e)=>{
    console.log(`data base error` ,e)
})