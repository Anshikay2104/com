const mongoose =require('mongoose')

const userSchema = new mongoose.Schema({

    firstName:{
        type: String
    },
    lastName:{
        type: String
        },
    email:{
        type: String,
        unique:true
    },
    password:{
        type: String
    },
    isDeleted:{
        type:Boolean,
        default:false
    },

}, {timestamps:true}
)

// const prodDescription = new mongoose.Schema({
//     product_id:{
//         type: mongoose.Schema.Types.ObjectId,
//         unique:true
//     },
//     prod_des:{
//         type:String
//     },
//     prod_img:{
//         type:String
//     },
//     prod_price:{
//         type:Number
//     },
//     prod_name:{
//         type:String
//     }

// })

module.exports = mongoose.model('User', userSchema)

