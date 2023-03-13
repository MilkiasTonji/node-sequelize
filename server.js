import * as dotenv from 'dotenv'
dotenv.config()


import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'

import DBConnection from './src/database/index.js';

const app = express()
const PORT = process.env.PORT || 3000


// middlewares
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/static', express.static('src/public'))

app.use(cors())
// database connectoin
DBConnection().then((res)=> {
    if(res.success){
        console.log(res.message)
    }
    else{
        console.error(res.error)
    }
})

app.listen(PORT, ()=> {
    console.log(`App running at ${PORT}`)
})

