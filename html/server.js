const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use('/assets',express.static('assets', {
    etag:false,
    maxAge:'5h'
}));
//si pongo etag false no usa el cache por defecto
//maxAge ponemos el tiempo que queremos que tarde en actualizar el cache


app.get('/', function(req, res){
    // res.sendFile('index.html',{
    //      root: __dirname
    // });
   res.render('index');
});

app.listen(3000);