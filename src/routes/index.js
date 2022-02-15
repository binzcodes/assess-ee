import express, { Router } from "express";
import { currencyConverter } from "./converter.controller.js";

const router = Router();

router.use(express.json());

router.post("/:currency", currencyConverter);

export default router;
