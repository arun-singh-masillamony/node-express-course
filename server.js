const express =require('express');
const app= express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const mockUserData=[
    {name:'Mark'},
    {name:'Jill'}
]
app.post('/login',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const dummyUser ="Arunmass";
    const dummyPassword ="arunmass";

    if(username===dummyUser && password===dummyPassword){
        res.json({success:true, message:'Successfully login',token:'encrypt token'})
    }
    else{
        res.json({success:false, message:'Failed to login'})
    }
})

app.get('/user',(req,res)=>{
    res.json({
        Success:true,
        message:'Successfully got the users. Nice!',
        users:mockUserData
    })
})

app.get('/user/:id',(req,res)=>{
    console.log(req.params.id);
    res.json({
        success:true,
        message:'got one user',
        users:req.params.id
    })
})

app.listen(8000,()=>{
    console.log('server is running')
})