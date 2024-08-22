import express from 'express'
import{getProducts,getProduct,addProduct,updateProduct} from '../controller/productController.js'

const productRouter = express.Router()

productRouter.get('/',getProducts)
productRouter.get('/:id',getProduct)
productRouter.post('/addProduct',addProduct)
productRouter.patch('/update/:id',updateProduct)

export{productRouter}