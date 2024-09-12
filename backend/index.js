import express from 'express';
import userRouter from './routes/users.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', userRouter);

app.listen(8800);