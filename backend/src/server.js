const app = require('./app')
const port = 3333;

app.listen(port, () => {
    console.log('Server on at port', port);
})