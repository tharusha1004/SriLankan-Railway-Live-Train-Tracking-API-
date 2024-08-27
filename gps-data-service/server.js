const express = require('express');
const bodyParser = require('body-parser');
const basicAuth = require('express-basic-auth');
const gpsRoutes = require('./src/routes/gpsRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./src/swagger/swagger.json');

require('dotenv').config();

const server = express();
server.use(bodyParser.json());

server.use(express.json());

server.use(basicAuth({
    users: { 'admin': '123456' },
    challenge: true,
}));

server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
server.use('/api', gpsRoutes);

const PORT = process.env.PORT || 3000;
server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});

module.exports = server;

















































































































































































































































































































































































































































































































































































































































































































































































































































































