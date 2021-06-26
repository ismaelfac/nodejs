const express = require('express');
const initDB = require('./config/db');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

const userRouters = require('./app/routes/user');
const itemRouters = require('./app/routes/items');
const uploadRouters = require('./app/routes/upload');

    //for parsing json
    app.use(
        bodyParser.json({
            limit:'20mb',
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        })
    )
    // for parsing application/x-www-form-unlencoded
    app.use(
        bodyParser.urlencoded({
            limit: '20mb',
            extended: true,
        })
    )

app.use(userRouters);
app.use(itemRouters);
app.use(uploadRouters);

app.listen(port, () => {
    console.log('La aplicacion esta en Linea');
});

initDB();