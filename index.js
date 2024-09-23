
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const router = require('./routes/routes');


const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());


// Parse URL-encoded bodies (for form data)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/demo', router)



app.listen(PORT,() => {
  console.log(`Server running on port ${PORT}`);
})