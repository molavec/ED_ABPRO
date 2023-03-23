const express = require('express');

const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.use(express.static('public'));

app.use(express.json());

//TODO: recuperar los roomates desde un archivo
let roommates = [];
let gastos = [];


app.post('/roommate', (req, res, next) => {
  fetch('https://randomuser.me/api')
    .then(resonse => resonse.json())
    .then(data => {
      // console.log(data);
      // 1. Almacenar el roommate en un archivo
      //TODO:
      const roommate = {
        nombre: data.results[0].name.first + ' ' + data.results[0].name.last,
        debe: 0,
        recibe: 0,
      }
      roommates.push(roommate);
      // console.log('roommates', roommates)

      // 2. retornar el roommate
      res.send(data);
    })
    .catch((error)=> console.log(error));
});

app.get('/roommates', (req, res, next)=>{
  // console.log('roommates', roommates);
  res.send(roommates);
});

app.get('/gastos', (req, res, next)=>{
  res.send(gastos);
});

app.post('/gasto', (req, res, next)=>{
  console.log('req.body', req.body);
  gastos.push(req.body);
  res.send(req.body);    // echo the result back
});

app.put('/gastos', (req, res, next)=>{
  // TODO:
});

app.delete('/gastos', (req, res, next)=>{
  // TODO:
});

app.get('/', (req, res) => {
  res.render('index');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})