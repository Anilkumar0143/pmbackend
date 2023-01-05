const express = require('express');
const app = express();
const bodypars = require('body-parser');
const mongo = require('mongoose');
const cors = require("cors");
const port =process.env.PORT || 3000;

app.use(cors());
app.use(bodypars.json());
app.use(bodypars.urlencoded({
    extended: false
}));
//db
mongo.set('strictQuery', true);
const connectdb = require('./db/connectdb');
connectdb();
const Router = require('./routers/main');
app.use(Router);

app.listen(port, () => {
  console.log('Server listening on port 3000');
});
