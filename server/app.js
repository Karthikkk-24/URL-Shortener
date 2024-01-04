
import axios from 'axios';
import cors from 'cors';
import express from 'express';
import shortid from 'shortid';

const urlDatabase = {};

const app = express();

app.use(cors());
app.use(express.json());

app.post('/shorten', async (req, res) => {
    const { url } = req.body;
    const shortURL = shortid.generate();

    const nothing = urlDatabase[shortURL] = url;    

    res.send({nothing});
});

app.listen((3000), () => {
    console.log('Listening on port 3000');
});