const jsonServer = require('json-server');
const auth = require('json-server-auth');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

// Bind the router db to the app
server.db = router.db;

// Apply middlewares
server.use(middlewares);
server.use(auth);
server.use(router);

const port = process.env.PORT || 9000;

if (process.env.NODE_ENV !== 'production') {
  server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
  });
}

module.exports = server;
