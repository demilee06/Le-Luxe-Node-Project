import express from 'express'
import{getProducts,getProduct,addProduct,updateProduct} from '../controller/productController.js'

const productRouter = express.Router()

productRouter.get('/products',getProducts)
productRouter.get('/products/:id',getProduct)
productRouter.post('/addProducts',addProduct)
productRouter.patch('/update/:id',updateProduct)

export{productRouter}