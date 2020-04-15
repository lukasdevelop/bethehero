const express = require('express')
const cors = require('cors')
const app = express();
const port = 3333;
const routes = require('./routes')

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(port, () => {
    console.log('Server on at port', port);
})