const express = require('express');
const connect = require('./config/db');
const bodyParser = require('body-parser');
const router = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const profileRoutes = require('./routes/profileRoutes');

const app = express();


connect();
app.use(bodyParser.json());
app.use('/', router);
app.use('/', postRoutes);
app.use('/', profileRoutes);
const PORT = 5000;
app.listen(PORT, () => console.log(`Your App is runnding ${PORT}`));