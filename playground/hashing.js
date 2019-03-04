const {SHA256}=require('crypto-js')
const jwt=require('jsonwebtoken')
// var message='I am user # 3'
// var hash=SHA256(message).toString();
// console.log(`the msg is ${message}`)
// console.log(`the hashed msg is ${hash}`)

// var data={
//     id:4   
// };
// var token={
//     data:data,
//     hash: SHA256(JSON.stringify(data)+'somesecret').toString()

// }
// var resultHash=SHA256(JSON.stringify(token.data)+'somesecret').toString();
// console.log(resultHash===token.hash)

var data={
    id:10
}
var token=jwt.sign(data,'123abc') //takes the object and signs and returns token value
var decoded=jwt.verify(token,'123abc')
console.log("decoded",decoded)




//jwt.verify