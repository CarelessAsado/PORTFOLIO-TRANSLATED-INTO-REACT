"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv").config();
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const nodemailer_1 = __importDefault(require("./nodemailer"));
/* import { FRONTEND_URL } from "./constants"; */
/*---------------------------------*/
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.use((0, cors_1.default)());
/*----------------------------------- */
const PORT = process.env.PORT || 5000;
const connectServer = () => {
    app.listen(PORT, () => {
        console.log("Port is good " + PORT);
    });
};
connectServer();
/*--------------ROUTES-----------------------*/
app.get("/", (req, res) => {
    res.send("hola");
});
app.get("/api/v1", (req, res) => {
    console.log(req.ip);
    res.send("hola");
});
app.post("/api/v1", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    try {
        yield (0, nodemailer_1.default)(req.body);
        res.sendStatus(200);
    }
    catch (error) {
        res.status(404).json("Something went wrong");
    }
}));
//VER URL FRONT ACA EN BACK SI VA BIEN
//guardar ip en back
//loading en el front cuando este cargando el mail
