import {pool} from '../config/config.js'

const getUsersdb = async()=>{
    let [data] =  await pool.query('SELECT * FROM users')
    return(data)

}
console.log(await getUsersdb());

const getUserdb = async(emailAdd)=>{
    let [[data]] = await pool.query('SELECT * FROM users WHERE emailAdd = ?',[emailAdd] )
    return(data)
}

const getUserIddb = async(id)=>{
    let [[data]] = await pool.query('SELECT * FROM users WHERE usersID = ?',[id] )
    return(data)
}

const insertUserdb  = async( firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile)=>{
    await pool.query(`INSERT INTO users(firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile) VALUES (?,?,?,?,?,?,?,?)`,[firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile ] )
}

const deleteUserdb = async(usersID)=>{
    await pool.query('DELETE FROM users WHERE usersID = ?',[usersID] )
}

const updateUserdb = async(firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile, id)=>{//this order does not
    await pool.query(`
        UPDATE users 
        SET firstName = ?,
        lastName = ?,
        userAge = ?,
        Gender = ?,
        userRole = ?, 
        emailAdd = ?, 
        userPass = ?, 
        userProfile = ? 
        WHERE usersID = ?
        `,[firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile, id] )//this order matters
}

export{getUsersdb,getUserdb,getUserIddb,insertUserdb,deleteUserdb,updateUserdb}   