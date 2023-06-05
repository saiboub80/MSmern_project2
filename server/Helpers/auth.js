const bcrypt = require('bcrypt')




const hidePassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(12,(err, salt) => {
            if(err){
                reject()
            }
            bcrypt.hash(password, salt, (err,hash) =>{
                if(err){
                    reject(err)
                }
                resolve(hash)
            })
        })
    })
}

const comparePassword = (password, hidden) => {
    return bcrypt.compare(password, hidden)
        
}

module.exports = {
    hidePassword,
    comparePassword
}