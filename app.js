const express = require ('express')
const path = require ('path')

const app = express()

const dotenv = require('dotenv').config();

app.get('/', (req,res) => {
    
    res.sendFile(path.join(__dirname, '/views/index.html'))
});

app.get('/register', (req,res) => {
    
    res.sendFile(path.join(__dirname, '/views/register.html'))
});

app.get('/login', (req,res) => {
    
    res.sendFile(path.join(__dirname, '/views/login.html'))
});
3
app.listen(process.env.PORT, () => {
    console.log ("Servidor en Puerto"+ process.env.PORT + " | http://localhost:3000")
}) 


app.use(express.static('public'));

//npm install express ( activar express)
//npm init -y ( activar node)
