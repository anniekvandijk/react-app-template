import React from 'react';
import express from 'express';
import path from 'path';
import http from 'http';
import { renderToString } from 'react-dom/server';
import StaticRouter from 'react-router-dom/StaticRouter';
import Routes from '../shared/Routes';


const app = express();
const routePath = path.join(__dirname, '..', '..', '..', 'dist/', 'index.html');

// Point static path to dist
app.use(express.static(path.join(__dirname, '..', 'dist')));

app.use('/api/shows', (req, res) => {
  res.sendFile(path.join(__dirname, '../../test/mocks/shows.json'));
});

app.use('api/shows/add', (req, res) => {
  res.send({ response: 'hi' });
});

// app.use('*', (req, res) => {
//   res.sendFile(routePath);
// });

app.get('*', (req, res) => {
  const context = {};
  const content = renderToString(
    <StaticRouter location={req.url} context={context}>
      <Routes />
    </StaticRouter>
  );
  res.render(routePath, {title: 'Express', data: false, content });
});

/** Get port from environment and store in Express. */
const port = process.env.PORT || '3300';
app.set('port', port);

/** Create HTTP server. */
const server = http.createServer(app);
/** Listen on provided port, on all network interfaces. */
server.listen(port, () => console.log(`Server Running on port ${port}`));
