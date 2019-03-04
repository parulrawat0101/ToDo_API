//mongoclient lets you connect to mongo server
// const MongoClient=require('mongodb').MongoClient;
//destructuring
const {MongoClient,ObjectID}=require('mongodb');
//takes two arguments, 1. api(awa,heroku,local) 2.callback function
var obj=new ObjectID();
console.log(obj)


// var users={name:"Parul",
//             age:"21"}
// var {name}=user
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
        if(err){
            return console.log('Unable to connect MongoDB server')

        }
        console.log("connected to mongoDB server")
        var dbo = db.db('TodoApp');
        dbo.collection('Users').insertOne({   //store various key values pairs
            text:'something',
            completed:'false'

        }, (err,result)=>{
            if(err){
                console.log("unable"+err)
            }
            console.log(JSON.stringify(result.ops,undefined,2))
        })
        // var dbo = db.db('TodoApp');
        // dbo.collection('Users').insertOne({
        //     name:"Parul",
        //     Age:"21",
        //     location:"New Delhi"
        // },(err,result)=>{
        //     if(err){return console.log("Unable to insert user",err)}
        //     console.log(result.ops) 
        // })
}); 