const express = require('express')
const app = express()
const port = 3000 

//app.get or app.post or app.put or app.delete (path, handler)
app.get('/' , (req, res) => {
  res.send('Hello World!')
})

app.listen(port,() => {
  console.log('Example app listening on port ${port}')
})