const server = require('./server');
const port = process.argv[2] || 3040;

server.listen(parseInt(port), () => {
  console.log(`server running on port ${port}`);
});



