import express, { Router } from "express";
import asyncHandler from "express-async-handler";

import { currencyConverter } from "./converter.controller.js";

const router = Router();

router.use(express.json());

router.post("/:currency", asyncHandler(currencyConverter));

export default router;
