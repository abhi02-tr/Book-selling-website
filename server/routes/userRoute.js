import express from "express";

import { registerUser, getUser } from "../controller/user.controller.js";

const router = express.Router();

router.route("/")
    .post(registerUser)
    .get(getUser)

export default router;