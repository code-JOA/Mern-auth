import express from 'express';
imprt dotev
const port = 5000; 

const app = express();

app.get('/', (req, res) => res.send('Server is ready'));

app.listen(port, () => console.log(`Server Started On port ${port}`));

