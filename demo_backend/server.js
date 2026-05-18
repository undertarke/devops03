import express from 'express';
 
const app = express();

// localhost:8088
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// localhost:8088/demo
app.get('/demo', (req, res) => {
  res.send('đây là api demo');
});

// localhost:8088/test
app.get('/test', (req, res) => {
  res.send('đây là api TESTTTTT !!! ');
});



app.listen(8088);