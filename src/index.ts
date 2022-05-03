import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import router from './routes';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use(router);

app.listen(process.env.PORT, () =>
  // eslint-disable-next-line no-console
  console.log(`App running on ${process.env.PORT}`)
);
