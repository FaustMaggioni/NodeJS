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
    res.status(201).send({
        error: '', body: 'Creado correctamente'
    })
})

router.get('/message', (req, res) => {
    console.log("X")
    res.header({
        'custom-header': 'Valor personalizado'
    })
    res.send('Mensaje')
    console.log("headers", req.headers)
})

app.listen(3000);
console.log("App escucha en local host 3000")