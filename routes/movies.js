var express = require('express')
var router = express.Router()
const Indian = require('../db/models/IndianModel')
const Hollywood = require('../db/models/HollywoodModel')
const Pakistani = require('../db/models/PakistaniModel')
const SouthIndian = require('../db/models/SouthModel')
router.post('/indian-movies',async function (req,res){
    try{
        console.log(req.body)
        const data = new Indian(req.body)
        const result = await data.save()
        res.status(201).send('done')
    }catch(e){
        res.send('error')
     console.log('error in catch',e)
    }
})
router.get('/indian-movies',async function(req,res){
    try{
      const data = await Indian.find()
      res.status(200).send(data)
    }catch(e){
      console.log(`error in catch`,e)
    }
})
router.delete(`/indian-movies/:id`,async function(req,res){
    try{
      const id = req.params.id
      const deleteUser = await Indian.findByIdAndDelete(id)
      res.status(200).send('Deleted')
    }catch(e){
      console.log(`error in catch`,e)
    }
})
router.patch(`/indian-movies/:id`,async function(req,res){
    try{
      const id = req.params.id
    console.log(id)
    console.log(req.body)
    const data = req.body
      await Indian.findByIdAndUpdate(id,data)
      res.status(200).send('Updated')
    }catch(e){
      console.log(`error in catch`,e)
    }
})
router.post('/hollywood-movies',async function (req,res){
    try{
        console.log(req.body)
        const data = new Hollywood(req.body)
        const result = await data.save()
        res.status(201).send('done')
    }catch(e){
        res.send('error')
     console.log('error in catch',e)
    }
})
router.get('/hollywood-movies',async function(req,res){
    try{
      const data = await Hollywood.find()
      res.status(200).send(data)
    }catch(e){
      console.log(`error in catch`,e)
    }
})
router.delete(`/hollywood-movies/:id`,async function(req,res){
  try{
    const id = req.params.id
    const deleteUser = await Hollywood.findByIdAndDelete(id)
    res.status(200).send('Deleted')
  }catch(e){
    console.log(`error in catch`,e)
  }
})
router.patch(`/hollywood-movies/:id`,async function(req,res){
  try{
    const id = req.params.id
  console.log(id)
  console.log(req.body)
  const data = req.body
    await Hollywood.findByIdAndUpdate(id,data)
    res.status(200).send('Updated')
  }catch(e){
    console.log(`error in catch`,e)
  }
})
router.post('/pakistani-movies',async function (req,res){
    try{
        console.log(req.body)
        const data = new Pakistani(req.body)
        const result = await data.save()
        res.status(201).send('done')
    }catch(e){
        res.send('error')
     console.log('error in catch',e)
    }
})
router.get('/pakistani-movies',async function(req,res){
    try{
      const data = await Pakistani.find()
      res.status(200).send(data)
    }catch(e){
      console.log(`error in catch`,e)
    }
})
router.delete(`/pakistani-movies/:id`,async function(req,res){
  try{
    const id = req.params.id
    const deleteUser = await Pakistani.findByIdAndDelete(id)
    res.status(200).send('Deleted')
  }catch(e){
    console.log(`error in catch`,e)
  }
})
router.patch(`/pakistani-movies/:id`,async function(req,res){
  try{
    const id = req.params.id
  console.log(id)
  console.log(req.body)
  const data = req.body
    await Pakistani.findByIdAndUpdate(id,data)
    res.status(200).send('Updated')
  }catch(e){
    console.log(`error in catch`,e)
  }
})
router.post('/south-movies',async function (req,res){
    try{
        console.log(req.body)
        const data = new SouthIndian(req.body)
        const result = await data.save()
        res.status(201).send('done')
    }catch(e){
        res.send('error')
     console.log('error in catch',e)
    }
})
router.get('/south-movies',async function(req,res){
    try{
      const data = await SouthIndian.find()
      res.status(200).send(data)
    }catch(e){
      console.log(`error in catch`,e)
    }
})
router.delete(`/south-movies/:id`,async function(req,res){
  try{
    const id = req.params.id
    const deleteUser = await SouthIndian.findByIdAndDelete(id)
    res.status(200).send('Deleted')
  }catch(e){
    console.log(`error in catch`,e)
  }
})
router.patch(`/south-movies/:id`,async function(req,res){
  try{
    const id = req.params.id
  console.log(id)
  console.log(req.body)
  const data = req.body
    await SouthIndian.findByIdAndUpdate(id,data)
    res.status(200).send('Updated')
  }catch(e){
    console.log(`error in catch`,e)
  }
})
router.get('/', async function(req, res) {
  try {
    const indianData = await Indian.find();
    const hollywoodData = await Hollywood.find();
    const southIndianData = await SouthIndian.find();
    const pakistaniData = await Pakistani.find();
    
    const allData = [...indianData, ...hollywoodData, ...southIndianData, ...pakistaniData];
    res.status(200).send(allData);
  } catch(e) {
    console.log(`Error in catch`, e);
    res.status(500).send('Internal Server Error');
  }
});
router.post('/',async function (req,res){
  try{
    console.log(req.body)
    const title = req.body.title
    const collections = [Indian,Hollywood,Pakistani,SouthIndian]
    let result = null
    for (let collection of collections){
      result = await collection.findOne({title:title})
      if(result){
        break;
      }
    }
    if(result){
      res.status(200).send([result])
      console.log(result)
    }
    else{
      // res.status(404).send('Not Found')
    }
    
  }
  catch(e){
    console.log('Catch error',e)
    res.status(500).send('Internal Server Erro')
  }
})

module.exports = router