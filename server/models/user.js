var mongoose=require('mongoose')
const validator=require('validator')
const jwt=require('jsonwebtoken')

var UserSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim:true,
        minlength:1,
        unique: true,
        validate: validator.isEmail,
            // validator:(value)=>{
            //     return validator.isEmail(value); //returns true or false
            // },
            message:'{VALUE} is not a valid email'
        
    },
    password:{
        type: String,
        required: true,
        minlength: 6
    },
    token:[{
        access:[{
            type:String,
             required:true
        }],
        token:{
            type:String,
            required:true
        }
    }]
}) //new schema
UserSchema.methods.generateAuthToken=function() {
    var user=this;
    var access='auth'
    var token= jwt.sign({_id:user._id.toHexString(),access},'abc123').toString();
}

//model for users
var User=mongoose.model('Users',{
    email:{
        type:String,
        required:true,
        trim:true,
        minlength:1,
        unique: true,
        validate: validator.isEmail,
            // validator:(value)=>{
            //     return validator.isEmail(value); //returns true or false
            // },
            message:'{VALUE} is not a valid email'
        
    },
    password:{
        type: String,
        required: true,
        minlength: 6
    },
    token:[{
        access:[{
            type:String,
             required:true
        }],
        token:{
            type:String,
            required:true
        }
    }]

});

module.exports={User}