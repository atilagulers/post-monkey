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

//* MIDDLEWARES
import errorHandler from './src/middleware/errorHandler.js';
import notFound from './src/middleware/notFound.js';
import {verifyToken} from './src/middleware/auth.js';

//* ROUTES WITH FILES
//import {createPost} from './controllers/posts.js';

//import {register} from './src/controllers/auth.js';
//app.post('/auth/register', upload.single('picture'), register);
//app.post('/posts', verifyToken, upload.single('picture'), createPost);

//* ROUTES
import authRouter from './src/routes/authRoutes.js';
import usersRouter from './src/routes/userRoutes.js';
import postsRouter from './src/routes/postRoutes.js';

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', verifyToken, usersRouter);
app.use('/api/v1/posts', verifyToken, postsRouter);

app.use(errorHandler);
app.use(notFound);

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
