import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    testDetails: String,
    file: String,
    appointment:String,
    uhid:String,
    createdDate: {
        type: Date,
        default: new Date(),
    },
    modifiedDate: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;