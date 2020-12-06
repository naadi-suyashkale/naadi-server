const path = require('path');
const http = require('http');

const express = require('express');
const app = express();

const server = http.createServer(app);
const PORT = process.env.PORT || 3000;
const INDEX_PACKAGE = process.env.INDEX_PACKAGE || 'dashboard';
console.log(path.join(__dirname, '../builds/dashboard/build'));
app.use('/dashboard', express.static(path.join(__dirname, '../builds/dashboard')))
app.use('/packing', express.static(path.join(__dirname, '../builds/packing')))
app.use(express.static(path.join(__dirname, `../builds/${INDEX_PACKAGE}`)));

console.log('booting server;');
server.listen(PORT, ()=> {
  console.log(`Server is up and running on port ${PORT};`);
});