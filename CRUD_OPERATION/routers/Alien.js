const express = require('express')
const router=express.Router()
const  Alien= require('../model/Aliens')

router.get('/', async(req,res)=>{
    try{
const alines=  await Alien.find()
res.json(alines)
    }catch{
        res.send('Error' +err)
    }
})

router.get('/:id', async(req,res)=>{
    try{
const aline=  await Alien.findById(req.params.id)
res.json(aline)
    }catch{
        res.send('Error' +err)
    }
})




router.post('/',async(req,res)=>{
    const alien=new Alien( {
        name:req.body.name ,
        info:req.body.info,
        active:req.body.active,

    })
    try{
const a1= await alien.save()
res.json(a1)
    }catch(err){
res.send(   'Error')
    }
})

router.patch('/:id',async   (req,res)=>{
    try{
             const alien =await Alien.findById(req.params.id)
             alien.sub=req.body.sub
             const a1=await alien.save()
             res.json(a1)
    }catch(err ){
        res.send('Error')
    }
})

module.exports=router