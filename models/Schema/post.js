const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    postContent: { type: String, required: true },
    postTitle: { type: String, required: true },
    userName: { type: String, required: true },
    dateTimeCreated: { type: Date, default: Date.now, required: true },
    category: { type: String, default: "Software Engineering" },
    _poastID: { type: Schema.Types.ObjectId }
})

let postModel = mongoose.model('postModel', PostSchema);
module.exports = postModel;

// module.exports = ({ mongoose }) => {
//     const postSchema = new mongoose.Schema(
//         {
//             postContent: { type: String, required: true },
//             postTitle: { type: String, required: true },
//             userName: { type: String, required: true },
//             dateTimeCreated: { type: Date, default: Date.now, required: true },
//             category: { type: String, default: "Software Engineering" },
//             _poastID: { type: Schema.Types.ObjectId }
//         }
//     );
//     return postSchema;
// }