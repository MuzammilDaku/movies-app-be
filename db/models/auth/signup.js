const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const signupSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        
    }
})

signupSchema.pre('save',async function (next){
    if (this.isModified('password')){
        const hashedPassword =await bcrypt.hash(this.password,10)
        this.password= hashedPassword
        next()
    }else{
      return  next()
    }

})

const userData = new mongoose.model('UserData',signupSchema)
module.exports = userData