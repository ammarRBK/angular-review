var express = require ('express');
var app = express();

var morgan = require ('morgan');

app.use(morgan('dev'));

var bodyParser = require('body-parser');  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(__dirname+ '/./client'))

app.get('/',function(req,res){
	res.redirect('./views/index.html');
});

app.get('/trying',function(req,res){
	res.redirect('./views/trying.html');
});


var port = process.env.PORT || 4000;

app.listen(port,function (){
	console.log('app listining on port: ',port);
})