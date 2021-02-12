const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema( {
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    profileImg:{
        type:String
    },
    profession:{
        type:String,
        required:true
    },
    city:{
        type:'String',
        required:true
    },
    bio:{
        type:String,
    },
    hobby:{
        type:[String]
    }
})

module.exports = Profile = mongoose.model('profile',ProfileSchema);