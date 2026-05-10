import express from "express";

import { createAccount, getAccounts } from "./account.controller.js";

import { authMiddleware } from "../../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/create", authMiddleware, createAccount);

router.get("/", authMiddleware, getAccounts);

export default router;
