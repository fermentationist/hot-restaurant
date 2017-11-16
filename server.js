const maxTables = 5;
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
app.use(express.static("./"));

//========data structures=======//
let tables = [
	{name: "John Doe",
	 phone: "8005882300",
	 email: "this@that.com",
	 customerID: "JD"
	}
];

let waitlist = [
	{name: "Jane Doe",
	 phone: "7733485996",
	 email: "that@this.com",
	 customerID: "12345"
	}
];

//======json endpoints========//
app.get("/api/tables", function(req, res){
	res.json(tables);
});

app.get("/api/waitlist", function(req, res){
	res.json(waitlist);
});

//=======post handlers========//
app.post("/api/add", function(req, res){
	console.log("req.body =", req.body);
	let newReservation = req.body;
	if(tables.length < maxTables){
		tables.push(newReservation);
	}else{
		waitlist.push(newReservation);
	}
})









// app.post("/api/add",)



//=========start server=========//
app.listen(PORT, function(){
	console.log("Listening on port", PORT);
})