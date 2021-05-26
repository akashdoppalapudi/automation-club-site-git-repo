import mongoose from 'mongoose';

const contactSchema = mongoose.Schema({
    designation: String,
    name: String,
    mail: String,
});

const contactMessage = mongoose.model('contactMessage', contactSchema);

export default contactMessage;