const express = require('express')
const router = express.Router()
const userData = require('../db/models/auth/signup')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const generateToken = async(id) => {
  const token = await jwt.sign({id},process.env.SECRET_KEY,{expiresIn:'1h'})
  return token
}
router.post('/signup',async function (req,res){
    try{
        console.log(req.body)
    const data = new userData(req.body)
    await data.save()
    res.status(201).send('Successfull')
    }catch(e){
        res.status(404).send('not saved')
        console.log('catch error',e)
    }
})
router.post('/login',async function(req,res){
    try{
     console.log(req.body)
     const email = req.body.email
     const password = req.body.password
     const result = await userData.findOne({email:email})
     console.log(result)
     if(result){
          const userPassword = await bcrypt.compare(password,result.password)
          const token = await generateToken(result._id)
          console.log(token)
          console.log(userPassword)
          if(userPassword == true){
            res.status(200).send(token)

          }
          else{
            res.status(200).send('Password Dont Match')
          }
        }else{
        res.status(200).send('Not Found')
        // const password =
     }
    }catch(e){
      console.log('error in catch',e)
     res.status(500).send('internal error')
    }
})
router.post('/token',async function (req,res){
  try{
    const token = req.body.token
    const decoded = await jwt.verify(token,process.env.SECRET_KEY)
    const isVerfiedToken = await userData.findById(decoded.id)
    if(!isVerfiedToken){
      res.status(200).send('Not Verified')
    }
    else{
      res.status(200).send('valid')
    }
    console.log(isVerfiedToken)
  }catch(e){
    console.log('error in catch',e)
    res.status(200).send('expired')
  }

})



module.exports = router