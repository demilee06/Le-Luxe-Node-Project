import{getProductsdb,getProductdb,addProductdb,updateProductdb} from '../model/productdb.js'

const getProducts = async(req,res)=>{
    res.json(await getProductsdb())//move to controller .tomorrow
}
const getProduct = async(req,res)=>{
    res.json(await getProductdb(req.params.id))//move to controller .tomorrow
}


const addProduct = async(req,res)=>{
    let {prodName, quantity, amount, Catergory, prodUrl} = req.body; 
    await addProductdb(prodName, quantity, amount, Catergory, prodUrl)
    res.send('Data was inserted successfully')
}

const updateProduct = async(req,res)=>{
    let {prodName, quantity, amount, Catergory, prodUrl} = req.body;
    let products = await getProductdb(req.params.id)
    prodName? prodName=prodName : prodName = users.prodName
    quantity? quantity=quantity : quantity = users.quantity
    amount? amount=amount : amount = users.amount
    Catergory? Catergory=Catergory : Catergory = users.Catergory
    prodUrl? prodUrl=prodUrl : prodUrl = users.prodUrl

 

    res.send('Updated was succesfully');
    await updateProductdb(req.params.id)
}

export{getProducts,getProduct,addProduct,updateProduct}