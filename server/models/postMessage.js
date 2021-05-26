import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    selectedFile: String,
    link: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const postMessage = mongoose.model('postMessage', postSchema);

export default postMessage;