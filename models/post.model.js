const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    postContent: {
        type: String
    },
    postTitle: {
        type: String
    },
    userName: {
        type: String
    },
    dateTimeCreated: {
        type: Date,
        default: Date.now
    },
    category: {
        type: String,
        default: "Software Engineering"
    },
    _poastID: {
        type: Schema.Types.ObjectId
    }
})

let postModel = mongoose.model('postModel', PostSchema);
module.exports = postModel;