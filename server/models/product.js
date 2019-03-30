const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:100,
        unique:1
    },
    description:{
        required:true,
        type:String,
        maxlength:100000
    },
    price:{
        type:Number,
        required:true,
        maxlength:255
    },
    brand:{
        type:Schema.Types.ObjectId,
        ref:"Brand",
        required:true,
    },
    os:{
        type:String,
        required:true,
        maxlength:500
    },
    processor:{
        type:String,
        required:true,
        maxlength:1000
    },
    display:{
        type:String,
        required:true,
        maxlength:1000
    },
    memory:{
        type:String,
        required:true,
        maxlength:1000
    },
    camera:{
        type:String,
        required:true,
        maxlength:1000
    },
    frequency:{
        type:String,
        maxlength:1000,
        default:"3G 4G LTE Band"
    },
    sold:{
        type:Number,
        maxlength:100,
        default:0
    },
    publish:{
        default:true,
        type:Boolean
    },
    images:{
        type:Array,
        default:[]
    }

},{timestamps:true});

const Product = mongoose.model("Product",productSchema);

module.exports = {Product};