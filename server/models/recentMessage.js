import mongoose from 'mongoose';

const recentSchema = mongoose.Schema({
    title: String,
    message: String,
    selectedFile: String,
    link: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const recentMessage = mongoose.model('recentMessage', recentSchema);

export default recentMessage;