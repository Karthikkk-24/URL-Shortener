import axios from 'axios';
import cors from 'cors';
import express from 'express';


const app = express();

app.use(cors());
app.use(express.json());

app.post('/shorten', async (req, res) => {
    const { url } = req.body;
    res.send({url});
});

app.listen((3000), () => {
    console.log('Listening on port 3000');
});