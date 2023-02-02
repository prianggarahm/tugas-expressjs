require('dotenv').config();
const express = require('express');
const cors = require('cors');

const router = require('./routes/router');
const userRoute = require('./routes/userRoute');
const hobbyRoute = require('./routes/hobbyRoute');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

app.use('/', router);
// membuat router baru
app.use('/about-me', router);
app.use('/user', userRoute);
app.use('/hobby', hobbyRoute);

app.listen(process.env.SERVER_PORT, () => {
  console.log('Server Running');
});
