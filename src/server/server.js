import express from 'express';
import path from 'path';
import http from 'http';

const app = express();
const routePath = path.join(__dirname, '..', '..', '..', 'dist/', 'index.html');

// Point static path to dist
app.use(express.static(path.join(__dirname, '..', 'dist')));

app.use('/mockdata', (req, res) => {
  res.sendFile(path.join(__dirname, './mock.json'));
});

app.use('/*', (req, res) => {
  res.sendFile(routePath);
});

/** Get port from environment and store in Express. */
const port = process.env.PORT || '3300';
app.set('port', port);

/** Create HTTP server. */
const server = http.createServer(app);
/** Listen on provided port, on all network interfaces. */
server.listen(port, () => console.log(`Server Running on port ${port}`));
