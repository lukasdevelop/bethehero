const express = require('express')
const app = express();
const port = 3000;
const routes = express.Router();

app.use(routes);

routes.get('/', (req, res) => {
    res.send('Server on')
})
app.listen(port, ()=>{
    console.log('Server on at port', port);
})