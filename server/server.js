const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
var bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000;

const app = express()
dotenv.config();



app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
//app.use(express.json({ extended:true }));

//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());




const connection = async () => {

    try {
        await mongoose.connect(process.env.CONNECTION_URL,{useUnifiedTopology: true, useNewUrlParser: true,useFindAndModify: false  });
        console.log('Mongo Connected');

        app.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`));
        }catch(err) {
            console.error(err.message) 
            process.exit(1);
        }
} 
connection(); 

app.use('/',require('./api/user'));
app.use('/',require('./api/auth'));
app.use('/',require('./api/profile'));

app.get('/',(req,res) => {
  res.send('Hello To Login-Register-API API');
})


