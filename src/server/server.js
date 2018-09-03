import express from 'express';
import path from 'path';
import http from 'http';

const app = express();
const routePath = path.join(__dirname, '..', '..', '..', 'dist/', 'index.html');

// Point static path to dist
app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('*', (req, res) => {
  res.sendFile(routePath);
  res.redirect('/');
});

/** Get port from environment and store in Express. */
const port = process.env.PORT || '3300';
app.set('port', port);

/** Create HTTP server. */
const server = http.createServer(app);
/** Listen on provided port, on all network interfaces. */
server.listen(port, () => console.log(`Server Running on port ${port}`));
