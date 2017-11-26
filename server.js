const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();

app.set('port', PORT);


// set root directory for server
app.use(express.static(path.join(__dirname, 'dist')));

//redirect all requests to index
app.get('*', function(req,res){
  res.sendfile(path.join(__dirname, '/dist/index.html'))
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
