var mongoose = require('mongoose')

const pakistaniSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    img:{
        type:String,
        required:true,
        unique:true
    },
  
})

 const Pakistani = new mongoose.model('Pakistani',pakistaniSchema)
 module.exports = Pakistani
