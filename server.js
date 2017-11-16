<<<<<<< HEAD
=======
//=========dependencies==========//
>>>>>>> caa311f59b182e782f9f149a1903e7db75fb1d22
const express = require ("express");
const bodyParser = require ("body-parser");
const path = require ("path");

<<<<<<< HEAD
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

=======
//=========initialize express server=========//
const app = express();
const PORT = process.env.PORT || 3000;

//==========configure middleware============//
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

//======html endpoints========//
>>>>>>> caa311f59b182e782f9f149a1903e7db75fb1d22
app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservations", function(req, res){
	res.sendFile(path.join(__dirname, "reservations.html"));
});

app.get("/tables", function(req, res){
	res.sendFile(path.join(__dirname, "tables.html"));
});

<<<<<<< HEAD





=======
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
>>>>>>> caa311f59b182e782f9f149a1903e7db75fb1d22
app.listen(PORT, function(){
	console.log("Listening on port", PORT);
})