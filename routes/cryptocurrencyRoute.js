import express from "express";
import {
  getCurrencies,
  convertCurrency,
  getSupportedVsCurrencies,
} from "../controllers/currencyController.js";
const cryptocurrencyRouter = express.Router();

cryptocurrencyRouter.get("/all-currencies", getCurrencies);
cryptocurrencyRouter.get("/convert-currency", convertCurrency);
cryptocurrencyRouter.get("/vs-currencies", getSupportedVsCurrencies);
export default cryptocurrencyRouter;
