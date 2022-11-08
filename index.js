const express = require('express');
const app = express();




app.get('/', (req, res) => {
  console.log('Hello World');
  res.send('<h1>Hello World</h1>');
})


app.listen(process.env.PORT || 5050, (err)=>{
    if(err){
        console.log(err)
    }
    console.log('Listening on 5050')
}) // listen on port 5000