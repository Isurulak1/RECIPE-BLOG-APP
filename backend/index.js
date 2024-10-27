const express = require('express')
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());


async function main() {
  await mongoose.connect('mongodb+srv://onlinejobs0417:YFxeucKYclPlHLqz@veggify-react-app.q7q4k.mongodb.net/veggify-react-app?retryWrites=true&w=majority&appName=veggify-react-app');

}


main().then(() => console.log("Mongodb COnnected Succesfully!")).catch(err => console.log(err));

//routes
const ItemRoutes = require('./src/routes/itemRoute');
const CategoryRoutes = require('./src/routes/categoryRoute');

app.use('/api', ItemRoutes);
app.use('/api', CategoryRoutes);


app.get('/', (req, res) => {
  res.send('App serve is running')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})