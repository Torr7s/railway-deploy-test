import express from 'express';

const app = express();

app.get('/', (request, response) => {
  response.send('Hello, World!');
});

app.listen(process.env.PORT || 8080);