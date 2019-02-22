var mongoose=require('mongoose')

//model for todo
var Todo= mongoose.model('Todo',{
    text:{
       type:String,
       required: true,     //mandatory to fill this
       minlength: 1,        //not empty
       trim:true       //remove leading and trailing spaces
    },
    completed:{
        type:Boolean,
        default: false
    },
    completedAt:{
        type:Number,
        default:null
    }
})
module.exports={
    Todo:Todo
}