const mongoose = require('mongoose')
mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`).then(()=>console.log('database connected')).catch((e)=>{
    console.log(`data base error` ,e)
})