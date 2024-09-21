const express = require('express')
const cors = require('cors')
const bcrypt = require('bcryptjs')
require('dotenv').config()

const app = express();
// const port = 3000;

const corsOptions = {
    origin: 'http://localhost:5173', 
    allowedHeaders: ['Content-Type'], 
  };
  
app.use(cors(corsOptions));
app.use(express.json())

let user = []
let userId = 1

app.post('/signup', async (req, res) => {
    const {name, email, password} = req.body

    const existingUser = await user.find(user => user.email === email)
    if(existingUser){
        res.status(400).json("user already exists")
    }else{
        const myEncPassword = await bcrypt.hash(password, 10)
        const newUser = { id: userId++, name, email, myEncPassword}

        user.push(newUser)
        res.status(201).json(newUser)
    }
    
})

app.post('/login', async (req, res)=>{
    const {email, password} = req.body
    if(!(email && password))
    {
        res.status(400).json('Enter all fields')
    }

    const credentials = user.find(user => user.email === email)
    if(!credentials){
        res.status(404).json('user not found')
    }

    if(credentials.email == email && (await bcrypt.compare(password, credentials.myEncPassword))){
        res.status(200).send(`welcome ${credentials.name}`)
    }
    else{
        res.status(400).json('Invalid email or password')
    }
})

app.get('/user', (req, res)=>{
    if( user.length == 0 ){
        res.status(404).json('no users')
    }else{
        res.status(200).send(user)
        console.log(user)
    }
    
})

app.listen(process.env.PORT, (req, res) =>{
    console.log(`Server running on ${process.env.PORT}`)

})