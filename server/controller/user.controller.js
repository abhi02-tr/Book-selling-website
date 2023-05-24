import { UserModel } from "../model/user.model.js";

// post user data for storing
const registerUser = async (req, res, next) => {
    const user = req.body.data;
    const userModel = new UserModel(
        user
    );
    try {
        const data = await userModel.save();
        res.status(201).json({ data, message: "data added successfully." });
    }
    catch (err) {
        const error = new Error("Post Error problem");
        res.json({error});
        next(err);
    }
}

const getUser = async (req, res) => {
    try {
        const users = await UserModel.find({}).exec();
        res.status(200).json(users);
    } catch(err) {
        res.json({err});
        console.log(err);
    }
};


export { registerUser, getUser };