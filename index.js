import express from 'express'
import cors from 'cors'
import { userRouter } from './routes/userRoutes.js'
import { productRouter } from './routes/productRoute.js'

let port = process.env.PORT || 8080

const app = express()
app.use(express.json())
app.use(cors({
    origin:'*',
    credentials:true
}))

app.use(express.static('public'))
app.use('/users',userRouter)
app.use('/products',productRouter)

app.listen (port,()=>{
    console.log(`http://localhost:${port}`);
    
})

//must have a login for the backend to check if the token works in the backend