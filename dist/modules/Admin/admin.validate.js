"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminValidation = void 0;
const zod_1 = __importDefault(require("zod"));
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const updateAdminSchema = zod_1.default.object({
    body: zod_1.default.object({
        name: zod_1.default.string().optional(),
        contactNumber: zod_1.default.string().optional(),
    }),
});
exports.adminValidation = {
    updateAdminSchema: updateAdminSchema,
    // add more schemas as needed
};
