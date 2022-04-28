if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express');
const cors = require('cors');
const app = express();
// const port = process.env.PORT || 3000; => Karena tidak menjalankan server jadi tidak masalah (dipindahkan ke bin/www)
const router = require('./routes');

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/', router);

// app.listen(port, () => {
//     console.log(`Currently listening on http://localhost:${port}`);
// })

module.exports = app;