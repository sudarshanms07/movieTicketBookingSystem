import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import conectDB from './configs/db.js';
const app = express();
const port = 3000;

await conectDB()
//Middleware
app.use(express.json())
app.use(cors())


//API Routes
app.get('/',(req, res)=> res.send('Server is Live!'))

app.listen(port, ()=> console.log(`Server listening at http://localhost:${port}`));
