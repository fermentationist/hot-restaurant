//=========dependencies==========//
const express = require ("express");
const bodyParser = require ("body-parser");
const path = require ("path");

//=========initialize express server=========//
const app = express();
const PORT = process.env.PORT || 3000;

//==========configure middleware============//
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

//======html endpoints========//
app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservations", function(req, res){
	res.sendFile(path.join(__dirname, "reservations.html"));
});

app.get("/tables", function(req, res){
	res.sendFile(path.join(__dirname, "tables.html"));
});

//======json endpoints========//
app.get("/api/all", function(req, res){
	res.json(tables);
})

//========data structures=======//
let tables = [
	{name: "John Doe",
	 phone: "8005882300",
	 email: "this@that.com",
	 customerID: "JD"
	}
];

let waitlist = [];

// app.post("/api/add",)



//=========start server=========//
app.listen(PORT, function(){
	console.log("Listening on port", PORT);
})