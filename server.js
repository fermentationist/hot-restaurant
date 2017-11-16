const maxTables = 3;
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


function notDupe(guest){
	let result = true;
	tables.forEach(function(table){
		for(let prop in table){
			if (table[prop] === guest[prop]){ 
				console.log("table DUPE!!!!");
				result = false;
			}
		}
	});
	waitlist.forEach(function(party){
		for(let prop in party){
			if (party[prop] === guest[prop]){
				console.log("waitlist DUPE!!!!");
				result = false;
			}
		}
	});
	return result;
}

//=======post handlers========//
app.post("/api/add", function(req, res){
	console.log("req.body =", req.body);
	let responseString = "";
	let newReservation = req.body;
	if(tables.length < maxTables && notDupe(newReservation)){
		console.log('notDupe(newReservation)', notDupe(newReservation));
		tables.push(newReservation);
		responseString = "You successfully booked a reservation!";
	}else if(notDupe(newReservation)){
		waitlist.push(newReservation);
		responseString = "Unfortunately, all available tables have been booked. You are on the waitlist and will be contacted if a table becomes available.";
	}else{
		responseString = "Already on list.";
	}
	res.send(responseString);

})









// app.post("/api/add",)



//=========start server=========//
app.listen(PORT, function(){
	console.log("Listening on port", PORT);
})