const express = require("express")
const app = express()

const path = require("path")

const PORTA = 3000

app.use(
    express.static(path.join(__dirname, "public"))
)

app.get("/", (req, res) => {
    res.redirect("/bufalo")
})

app.get("/bufalo", (req,res) =>{
    res.sendFile(path.join(__dirname, "views", "bufalo.html"))
})

app.get("/esquilo", (req,res) =>{
    res.sendFile(path.join(__dirname, "views", "esquilo.html"))
})

app.get("/ganso", (req,res) =>{
    res.sendFile(path.join(__dirname, "views", "ganso.html"))
})

app.get("/garca", (req,res) =>{
    res.sendFile(path.join(__dirname, "views", "garca.html"))
})

app.get("/leao", (req,res) =>{
    res.sendFile(path.join(__dirname, "views", "leao.html"))
})

app.get("/tartaruga", (req,res) =>{
    res.sendFile(path.join(__dirname, "views", "tartaruga.html"))
})

app.listen(PORTA,()=>{
    console.log(`Servidor rodando na porta: localhost:${PORTA}`)
})