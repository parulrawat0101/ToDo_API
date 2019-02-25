var express=require('express')
var bodyParser=require('body-parser')

var {mongoose}=require('./db/mongoose')
var {Todo}=require('./models/todo')
var {User}=require('./models/user')
var {ObjectID}=require('mongodb')


var app=express();
app.use(bodyParser.json());  //app.use()takes the middleware 


//setting route 
app.post('/todos',(req,resp)=>{
    var todo=new Todo({
        text:req.body.text// creating instance
    });
    todo.save().then((doc)=>{
        resp.send(doc)//inject in colectiion
    },(e)=>{
        resp.status(400).send(e)
    })

})


app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        res.send({todos})
    },(e)=>{
        res.status(400).send(e);
    })
})



app.get('/todos/:id',(req,res)=>{
    var id=req.params.id;
    if(!ObjectID.isValid(id)) {
        return res.status(404).send()
    } 
    Todo.findById(id).then((todo)=>{
        if(!todo) {
        return res.status(404).send()}
        console.log("todo isssssssssss",todo)
        res.send({todo})
    },(err)=>{console.log("errrrrr")}) 

})

var port=process.env.PORT
app.listen(port,()=>{
    console.log(`Started on port ${port}`)
})



 

module.exports={app}