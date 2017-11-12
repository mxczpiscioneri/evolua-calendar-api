import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import routes from './src/config/routes';
import config from './src/config/environment';

const app = express();

app.use(cors());
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(config.apiPrefix, routes);

app.listen(config.port, () => {
  console.log(`Port: ${config.port} Env: ${app.get('env')}`);
});

export default app;