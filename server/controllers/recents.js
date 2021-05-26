import mongoose from 'mongoose';

import recentMessage from '../models/recentMessage.js';

export const getRecents = async (req, res) => {
    try {
        const recentMessages = await recentMessage.find();

        res.status(200).json(recentMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createRecent = async (req, res) => {
    const recent = req.body;
    const newRecent = new recentMessage(recent);
    try {
        await newRecent.save();
        res.status(201).json(newRecent);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const updateRecent = async (req, res) => {
    const { id } = req.params;
    const recent = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No recent with that Id : ", id);

    const updatedRecent = await recentMessage.findByIdAndUpdate(id, { ...recent, id }, { new: true });
    res.json(updatedRecent);
};

export const deleteRecent = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No recent with that Id : ", id);
    await recentMessage.findByIdAndRemove(id);
    res.json({ message: "Recent Deleted Successfully" });
};
