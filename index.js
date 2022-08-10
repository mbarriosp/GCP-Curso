const express = require('express');
 const app = express();
 const PORT = 3000;
 app.get('/', function(req, res) {
 	res.json({"hello Santiago": "express with mongo y aquí estamos"});
 });
 app.listen(PORT, function(){
   console.log('Your node js server is running on PORT:',PORT);
 });
