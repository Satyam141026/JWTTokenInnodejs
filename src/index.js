//import Area
const express=require('express')
const app=express();
const db=require('./config/db')
const jwt=require('jsonwebtoken');
const token=jwt.sign({_id:123456},'oklabs',{ expiresIn:60*60});
//jwt.sign({p:v},key,{expiry time})  //token for 1h

console.log('token',token)

try {
 
        const decoded=jwt.verify(token,'oklabs')
        console.log(decoded,'decoded')
    
 
} catch (error) {
    console.log('error',error)
}


//midleware
app.use(express.json())

//Route
 
app.post('/api',((req,resp)=>{
     resp.status(201).json(req.body)
}))

app.listen(process.env.PORT || 5001,()=>{
    console.log('the db is connection succesful the port is hte '+process.env.PORT)

})