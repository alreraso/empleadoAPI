const express  = require('express');
const cors = require('cors')
const bodyparser  = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyparser.json());

app.use(express.json());

app.use(require('./routes/index'))

app.listen(3000,()=>{
    console.log('server running fine on port 3000');
})