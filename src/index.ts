import express from 'express';
import router from './routes';

const app = express();

app.use(router);

app.listen(process.env.PORT, () =>
  // eslint-disable-next-line no-console
  console.log(`App running on ${process.env.PORT}`)
);
