const express = require ("express");
const bodyParser = require ("body-parser");
const path = require ("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservations", function(req, res){
	res.sendFile(path.join(__dirname, "reservations.html"));
});

app.get("/tables", function(req, res){
	res.sendFile(path.join(__dirname, "tables.html"));
});






app.listen(PORT, function(){
	console.log("Listening on port", PORT);
})