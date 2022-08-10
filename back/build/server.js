"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
require("reflect-metadata");
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const nodemailer_1 = __importDefault(require("./nodemailer"));
const postgres_1 = __importStar(require("./db/postgres"));
const geoip_lite_1 = __importDefault(require("geoip-lite"));
/* import { FRONTEND_URL } from "./constants"; */
/*---------------------------------*/
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.use((0, cors_1.default)());
/*----------------------------------- */
const PORT = process.env.PORT || 5000;
const connectServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, postgres_1.connectPostgres)();
        app.listen(PORT, () => {
            console.log("Port is good " + PORT);
        });
    }
    catch (error) {
        console.log(error, "error starting server");
    }
});
connectServer();
/*--------------ROUTES-----------------------*/
app.get("/", (req, res) => {
    res.send("hola");
});
app.get("/api/v1", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress || "";
    console.log("'IP: '", ip);
    console.log(req.headers["x-forwarded-for"]);
    if (typeof ip === "string" && ip.substring(0, 7) === "::ffff:") {
        ip = ip.substring(7);
    }
    let geo;
    if (typeof ip === "string") {
        const foundUser = yield postgres_1.default.User.findOneBy({ ip });
        if (!foundUser) {
            geo = geoip_lite_1.default.lookup(ip);
            if (geo) {
                const { country, city } = geo;
                const newUser = postgres_1.default.User.create({ ip, city, country });
                try {
                    yield postgres_1.default.User.save(newUser);
                    return res.sendStatus(201);
                }
                catch (error) {
                    console.log("Error saving user");
                    return res.sendStatus(400);
                }
            }
            console.log("error looking up geoIp");
            return res.sendStatus(400);
        }
        //we just save and the method on the User model will update the visits
        yield postgres_1.default.User.save(foundUser);
        res.sendStatus(200);
    }
    console.log(geo);
    res.sendStatus(204);
}));
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
