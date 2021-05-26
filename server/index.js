import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postsRouter from './routes/posts.js';
import recentsRouter from './routes/recents.js';
import contactsRouter from './routes/contacts.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extend: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postsRouter);
app.use('/recents', recentsRouter);
app.use('/contacts', contactsRouter);

app.get('/', (req, res) => {
    res.send("Welcome to automation-club-site API");
})

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI || process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log("Server started on port : ",PORT)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);