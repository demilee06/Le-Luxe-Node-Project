import {pool} from '../config/config.js'

const getProductsdb = async()=>{
    let [data] =  await pool.query('SELECT * FROM products')
    return(data)

}

const getProductdb = async(prodName)=>{
    let [[data]] = await pool.query('SELECT * FROM products WHERE prodName = ?',[prodName] )
    return(data)
}

const addProductdb  = async( prodName, quantity, amount, Catergory, prodUrl)=>{
    let [data] = await pool.query(`INSERT INTO users(prodName, quantity, amount, Catergory, prodUrl) VALUES (?,?,?,?,?,)`,[prodName, quantity, amount, Catergory, prodUrl] )
    // return data
}


const updateProductdb = async(prodID, prodName, quantity, amount, Catergory, prodUrl )=>{//this order does not
    await pool.query('UPDATE products SET prodName = ?,quantity = ?,amount = ?,Catergory = ?,prodUrl = ? WHERE prodID = ?',[prodName, quantity, amount, Catergory, prodUrl] )//this order matters
}

export{getProductsdb,getProductdb,addProductdb,updateProductdb}