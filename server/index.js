import path from 'path';
import {fileURLToPath} from 'url';

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import helmet from 'helmet';
import morgan from 'morgan';

//* CONFIGURATIONS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.urlencoded({limit: '30mb', extended: true}));
app.use(express.json({limit: '30mb', extended: true}));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: 'cross-origin'}));
app.use(morgon('common'));
app.use(cors());
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));
