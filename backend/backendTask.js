var express = require('express');
var app = express();
var count = 3;

app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());

var tasks = [
	{text: "Passar", done: false},
	{text: "Lavar", done: true},
	{text: "Secar", done: false}
];

app.listen(process.env.PORT || 3412);

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, HEAD, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  next();
});

app.get('/tasks', function(req, res) {
  res.json(tasks);
});

app.post('/tasks', function(req, res) {
	//count++;
	//req.body.id = count;
  	
  	tasks.push(req.body);
  	res.json(true);
});


app.delete('/contatos/:id', function(req, res) {
	var id = req.params.id
	console.log(req.params, req.body)
	contatos = contatos.filter(function(contato){
		return contato.id != id;
	});
  res.json(contatos);
});