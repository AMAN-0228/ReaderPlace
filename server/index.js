const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 5000

app.get('/',(req,res)=>{
    res.send("HI")
})

app.listen(PORT,()=>{
    console.log(`sever is running on port ${PORT}`)
})