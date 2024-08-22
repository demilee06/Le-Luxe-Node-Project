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
    prodName? prodName=prodName : prodName = products.prodName
    quantity? quantity=quantity : quantity = products.quantity
    amount? amount=amount : amount = products.amount
    Catergory? Catergory=Catergory : Catergory = products.Catergory
    prodUrl? prodUrl=prodUrl : prodUrl = products.prodUrl

 

    res.send('Updated was succesfully');
    await updateProductdb(prodName, quantity, amount, Catergory, prodUrl,req.params.id)
}

export{getProducts,getProduct,addProduct,updateProduct}