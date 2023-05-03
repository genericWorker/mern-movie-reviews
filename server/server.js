const express = require('express');
const app = express(); 
const cors = require('cors');

const mongoose = require('mongoose'); 
require('dotenv').config();

const port = process.env.PORT || 5000;
console.log('port=' + port);
const uri = process.env.ATLAS; 
console.log('uri' + uri); 

app.use(cors());
app.use(express.json());

mongoose.connect(uri); 
const connection = mongoose.connection; 
connection.once('open', ()  => {
    console.log("MongoDB database connection established successfully"); 
}); 
 
const moviereviewsRouter = require("./routes/moviereviews");

app.use('/moviereviews', moviereviewsRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 

