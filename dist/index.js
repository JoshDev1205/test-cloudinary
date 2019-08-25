"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
dotenv_1.config();
const path_1 = __importDefault(require("path"));
const cloudinary_1 = __importDefault(require("cloudinary"));
const imageToUpload = path_1.default.join(__dirname, 'whateva.jpg');
const imageToUploadAndEager = path_1.default.join(__dirname, 'whateva2.jpg');
const eagerOptions = {
    width: 200,
    height: 150,
    crop: 'scale',
    format: 'jpg',
};
const uploadImageToCloudinary = (imageFile, eagerOptions = {}) => __awaiter(this, void 0, void 0, function* () {
    try {
        const res = yield cloudinary_1.default.v2.uploader.upload(imageFile, {
            tags: 'basic_example',
            use_filename: true,
            unique_filename: false,
            overwrite: false,
            eager: eagerOptions,
        });
        console.log({ res });
        if (res.existing)
            return console.log('Archivo ya creado');
    }
    catch (error) {
        console.log({ error });
    }
});
// uploadImageToCloudinary(imageToUpload)
uploadImageToCloudinary(imageToUploadAndEager, eagerOptions);
//# sourceMappingURL=index.js.map