const express =require('express');
const app= express();

const mockUserData=[
    {name:'Mark'},
    {name:'Jill'}
]

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