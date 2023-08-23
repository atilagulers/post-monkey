import path from 'path';
import {fileURLToPath} from 'url';

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import helmet from 'helmet';
import morgan from 'morgan';
import {register} from './controllers/auth.js';

//* CONFIGURATIONS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.urlencoded({limit: '30mb', extended: true}));
app.use(express.json({limit: '30mb', extended: true}));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: 'cross-origin'}));
app.use(morgan('common'));
app.use(cors());
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

//* FILE STORAGE
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/assets');
  },
  filename: function (req, file, cb) {
    const originalName = file.originalname;
    const extname = path.extname(originalName);
    const fileNameWithoutExt = path.basename(originalName, extname);
    const uniqueFileName = `${fileNameWithoutExt}-${Date.now()}${extname}`;
    cb(null, uniqueFileName);
  },
});

const upload = multer({storage});

//* ROUTES WITH FILES
app.get('/auth/register', register);
app.post('/auth/register', upload.single('picture'), register);

//* ERROR HANDLER
import errorHandler from './middleware/errorHandler.js';

app.use(errorHandler);

//* MONGOOSE SETUP
const PORT = process.env.PORT | 3000;

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await app.listen(PORT);

    console.log(`Server is listening on port ${PORT}`);
  } catch (error) {
    console.error('Error starting the server:', error);
  }
}

startServer();
