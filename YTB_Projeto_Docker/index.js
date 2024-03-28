const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Parece que funciona!? ou seja, não é que funfa mesmo.')
});

app.listen(port, () => {
  console.log(`App está na porta: ${port}`)
})