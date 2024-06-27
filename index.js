require('dotenv').config();
const express = require('express');
const cors = require('cors');
const usersRoutes = require('./routes/users');
const middlewareLogRequest = require('./middleware/logs');
const successResponseHandler = require('./middleware/successHandler');
const { errorHandler, notFoundHandler } = require('./middleware/errorHandler');

const app = express();
const port =8000;

app.use(middlewareLogRequest);
app.use(cors());
app.use(express.json());

// Use the successResponseHandler middleware
app.use(successResponseHandler);

app.get('/', async (req, res) => {
    res.success({
        message: 'Hello this is API from Express Tutorial'
    });
});

app.use('/users', usersRoutes);

// Middleware untuk menangani rute yang tidak ditemukan
app.use(notFoundHandler);

// Middleware untuk menangani error
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server berhasil di running di http://localhost:${port}`);
})