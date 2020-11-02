const express = require('express');
const app = express();
const PORT = 5000 || process.env.PORT;

app.get('/', (req, res) => {
  res.send({hi: 'Hello World'});
})

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${port}`)
})
