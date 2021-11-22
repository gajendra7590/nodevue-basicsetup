var express = require('express')
var app = express();
var path = require('path');

const port = process.env.PORT || 3000;
 
//Import All Routes 
var auth = require('./router/auth');
var user = require('./router/user');  
 

app.use(express.static( path.join(__dirname, '../dist'))); 
// app.get('/', function(req, res) { 
//     res.sendFile(path.join(__dirname, '../dist/index2.html'));
// });

app.use('/auth', auth); 
app.use('/user', user); 


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});




