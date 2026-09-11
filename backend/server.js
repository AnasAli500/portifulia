const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const contactRoutes = require("./Router/contactRouter")
const loginRoutes = require("./Router/loginRout")
const cors = require("cors")

const app = express()

// Middleware
app.use(express.json())

app.use(cors())

// app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.Api).then(()=>{
    console.log("✅ connect successs")
}).catch(error => console.log(error))

// Routes
app.use("/api/contact", contactRoutes)
app.use("/api/auth", loginRoutes)




app.listen(PORT , console.log(`✅ IS RUNNING SERVER ${PORT}`))

