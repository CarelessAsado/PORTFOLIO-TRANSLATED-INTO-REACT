"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EMAIL_ROD = exports.FRONTEND_URL = void 0;
exports.FRONTEND_URL = process.env.NODE_ENV
    ? "https://62e1b83ac9af450008fa268c--amazing-wright-70ac6b.netlify.app"
    : "http://localhost:3000";
exports.EMAIL_ROD = process.env.NODEMAIL;
