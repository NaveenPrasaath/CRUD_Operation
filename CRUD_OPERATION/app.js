const express = require('express')
const mongoose=require('mongoose')
const url='mongodb://localhost/AlienDB'
const app =express()

 mongoose.connect(url, {useNewUrlParser:true})
  const con =mongoose.connection


  con.on('open',()=>{
    console.log('connected')
  })

  app.use(express.json())
  const  alienRouter =require('./routers/Alien')
  app.use('/Alien',alienRouter)

  app.listen(9000,()=>{
    console.log('server started')
  })