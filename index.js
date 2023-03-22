const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.use(express.static('public'))

//TODO: recuperar los roomates desde un archivo
let roommates = [];


app.post('/roommate', (req, res, next)=>{
  // TODO:
  fetch('https://randomuser.me/api')
    .then(resonse => resonse.json())
    .then(data => {
      // console.log(data);
      // 1. Almacenar el roommate en un archivo
      //TODO:
      roommates.push(data);

      // 2. retornar el roommate
      res.send(data);
    })
    .catch((error)=> console.log(error));
});

app.get('/roommates', (req, res, next)=>{
  // TODO:
  console.log('roommates', roommates);
  res.send(roommates);
});

app.get('/gastos', (req, res, next)=>{
  // TODO:
});

app.post('/gastos', (req, res, next)=>{
  // TODO:
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