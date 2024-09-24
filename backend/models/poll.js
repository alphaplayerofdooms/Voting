const mongoose=require('mongoose');

const pollSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    code:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    votingOn:{
        type:Boolean,
        default:true
    },
    questions:[
        {
            question:String
        }
       ],
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
    
},{timestamps:true});

const Poll=mongoose.model('Poll',pollSchema);
module.exports=Poll;