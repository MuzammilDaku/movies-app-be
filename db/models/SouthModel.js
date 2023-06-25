var mongoose = require('mongoose')

const southSchema = new mongoose.Schema({
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

 const South = new mongoose.model('South Indian',southSchema)
 module.exports = South
