import {pool} from '../config/config.js'

const getProductsdb = async()=>{
    let [data] =  await pool.query('SELECT * FROM products')
    return(data)

}
console.log(await getProductsdb());


const getProductdb = async(id)=>{
    let [[data]] = await pool.query('SELECT * FROM products WHERE prodID = ?',[id] )
    return(data)
}

const addProductdb  = async(prodName, quantity, amount, Catergory, prodUrl,prodDes)=>{
    await pool.query(`
        INSERT INTO products(prodName, quantity, amount, Catergory, prodUrl,prodDes) 
        VALUES (?,?,?,?,?,?)
        `,[prodName, quantity, amount, Catergory, prodUrl,prodDes])

}


const updateProductdb = async( prodName, quantity, amount, Catergory, prodUrl,prodDes,id )=>{//this order does not
    await pool.query('UPDATE products SET prodName = ?,quantity = ?,amount = ?,Catergory = ?,prodUrl = ?,prodDes = ? WHERE prodID = ?',[prodName, quantity, amount, Catergory, prodUrl,prodDes,id] )//this order matters
}

export{getProductsdb,getProductdb,addProductdb,updateProductdb}