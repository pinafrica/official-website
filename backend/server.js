const PORT = process.env.PORT || 3000;
const http = require('http');
const app = require('./routes/index')

const server = http.createServer(app)
server.listen(PORT, (req, res) => {
    console.log(`server started successfully on port ${PORT}`)
});