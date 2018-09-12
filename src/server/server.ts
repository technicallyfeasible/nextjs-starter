import { Request, Response } from 'express';
import express = require('express');
import next = require('next');

import { Router } from './routes';
import api from './api/index';

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    Router.forEachPattern((page: string, pattern: string, defaultParams: any) =>
      server.get(pattern, (req: Request, res: Response) =>
        app.render(req, res, `/${page}`, {
          ...defaultParams,
          ...req.query,
          ...req.params,
        })
    ));

    server.use('/api', api);

    server.get('*', (req: Request, res: Response) => handle(req, res));
    server.listen(port);
  });
