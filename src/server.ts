import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World')
    res.json({message: 'Hello World'})
});

export default app;