// const express = require('express')
// const app = express()
// const mongoose = require('mongoose')
// const Contact = require("./models/contact.models")
// const contact = require('./models/contact.models')

// //data connection
// mongoose.connect('mongodb://127.0.0.1:27017/contact-crud')
// .then(()=>console.log("database connected"))


// //Middleware
// app.set('view engine','ejs')
// app.use(express.urlencoded({extended:false}))  //html form data accepts
// app.use(express.static('public'))              //for static file(css,image)


// app.listen(3000,()=>{
//     console.log('app is listening on port 3000')
// })

// // ROUTE
// app.get('/', async (req,res)=>{
//     const contacts = await Contact.find()
//     // res.json(contacts)
//      res.render('home' ,{contacts})
// })

// app.get('/show-contact/:id',async (req,res)=>{ 
//     // const contact = await Contact.findOne({_id: req.params.id})
//     const contact = await Contact.findById( req.params.id)    //mongosh method
//     res.render('show-contact' ,{contact})
//     // res.json(contact)
// })

// app.get('/add-contact',(req,res)=>{ res.render('add-contact')})

// app.post('/add-contact', async(req,res)=>{
//     await Contact.create(req.body)  //mongosh method
//     // const contact = await Contact.insertOne({
//     //     first_name: req.body.first_name,
//     //     last_name: req.body.last_name,
//     //     email: req.body.email,
//     //     phone: req.body.phone,
//     //     address: req.body.address
//     // })
//     // res.send(req.body)
//     res.redirect('/')
// })

// app.get('/update-contact/:id', async(req,res)=>{
//     const contact = await Contact.findById( req.params.id)    //mongosh method
//     res.render('update-contact',{contact})
// })

// app.post('/update-contact/:id', async(req,res)=> {
//     // const {first_name,last_name, email,phone,address} = req.body
//     // await Contact.findByIdAndUpdate(req.params.id, {first_name,last_name, email,phone,address}) 

//     await Contact.findByIdAndUpdate(req.params.id, req.body) 
//     res.redirect('/')
// })

// app.get('/delete-contact/:id', async(req,res)=>{
//     await Contact.findByIdAndDelete(req.params.id, req.body) 
//     res.redirect('/')
// })







//MVC
import express from 'express'
const app = express()

import ContactRoutes from './routes/contact.routes.js'
import {connectDB} from "./config/database.js"

const PORT = process.env.PORT

//database connect
connectDB()

//middleware
app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))

//routes
app.use('/',ContactRoutes)

app.listen(PORT,()=>{
    console.log('app is listening on port')
})



