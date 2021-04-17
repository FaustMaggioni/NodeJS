const express = require('express') //forma de traer modulos 
const router = express.Router();

const app = express();

app.use(express.json())
app.use(express.urlencoded({
    extended: false
}));

app.use(router);

router.post('/message', (req, res) => {
    console.log(req.query)
    console.log(req.body)
    res.send('Mensaje ' + req.body.text + ' añadido')
})

router.delete('/message', (req, res) => {
    console.log(req.query)
    res.send('Lista de mensajes')
})

router.get('/message', (req, res) => {
    console.log(req.headers)
})

app.listen(3000);
console.log("App escucha en local host 3000")