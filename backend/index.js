const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = process.env.PORT || 5000;



async function main() {
  await mongoose.connect('mongodb+srv://onlinejobs0417:YFxeucKYclPlHLqz@veggify-react-app.q7q4k.mongodb.net/veggify-react-app?retryWrites=true&w=majority&appName=veggify-react-app');

  app.get('/', (req, res) => {
    res.send('App serve is running')
  })
}


main().then(() => console.log("Mongodb COnnected Succesfully!")).catch(err => console.log(err));



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})