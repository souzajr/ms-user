import express from 'express';
import router from './routes';

const app = express();

app.use(router);

app.listen(process.env.PORT, () =>
  console.log(`App running on ${process.env.PORT}`)
);
