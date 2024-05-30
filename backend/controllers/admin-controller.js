const Contact = require("../models/contactModal");
const User = require("../models/userModel");
const getAllUsers = async (req, resp, next) => {
    try {
        const users = await User.find({}, { password: 0 });
        if (!users || users?.length === 0) {
            return resp.status(401).json({ message: "users not found!" })
        }
        resp.status(200).json(users)
    } catch (error) {
        next(error)
    }
}
const getUserById = async (req, resp, next) => {
    try {
        const userId = req.params.id;
        const user = await User.findOne({_id:userId}, { password: 0 });
        if (!user || user?.length === 0) {
            return resp.status(401).json({ message: "user not found!" })
        }
        resp.status(200).json(user)
    } catch (error) {
        next(error)
    }
}
const updateUser = async (req, resp, next) => {
    try {
        const id = req.params.id;
        const payload  = req.body;
        const user = await User.updateOne({_id:id}, { $set: payload });
        if (!user || user?.length === 0) {
            return resp.status(401).json({ message: "user not found!" })
        }
        resp.status(200).json(user)
    } catch (error) {
        next(error)
    }
}
const deleteUser = async (req, resp, next) => {
    try {
        const id = req.params.id;
        await User.deleteOne({ _id: id });
        return resp.status(200).json({ message: "User deleted:ok" })
    } catch (error) {
        next(error)
    }
}

const getAllContacts = async (req, resp) => {
    try {
        const contacts = await Contact.find();
        if (!contacts || contacts?.length === 0) {
            return resp.status(401).json({ message: "contacts not found!" })
        }
        resp.status(200).json(contacts)
    } catch (error) {
        next(error)
    }
}
const deleteContact = async (req, resp, next) => {
    try {
        const id = req.params.id;
        await Contact.deleteOne({ _id: id });
        return resp.status(200).json({ message: "Contact deleted:ok" })
    } catch (error) {
        next(error)
    }
}
module.exports = { getAllUsers, getUserById,updateUser, getAllContacts, deleteUser, deleteContact };