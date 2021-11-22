const connection = require('../db.config'); 

var AuthModel = {
    login() { 
        console.log('foo') 
    }, 
    register() { 
        console.log('bar') 
    },
    forgotPassword() { 
         
    }
} 
module.exports =  AuthModel

