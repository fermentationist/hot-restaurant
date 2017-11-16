const maxTables = 5;
//=========dependencies==========//
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

//=========initialize express server=========//
const app = express();
const PORT = process.env.PORT || 3000;

//==========configure middleware============//
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(express.static("./"));

//========data structures=======//
let tables = [
    {
        name: "John Doe1",
        phone: "80058823001",
        email: "this@that.com1",
        customerID: "JD1"
	},
    {
        name: "John Doe2",
        phone: "80058823002",
        email: "this@that.com2",
        customerID: "JD2"
	},
    {
        name: "John Doe3",
        phone: "80058823003",
        email: "this@that.com3",
        customerID: "JD3"
	},
    {
        name: "John Doe4",
        phone: "80058823004",
        email: "this@that.com4",
        customerID: "JD4"
	},
    {
        name: "John Doe5",
        phone: "80058823005",
        email: "this@that.com5",
        customerID: "JD5"
	}
];

let waitlist = [
    {
        name: "Jane Doe6",
        phone: "77334859966",
        email: "that@this.com6",
        customerID: "123456"
	},
    {
        name: "Jane Doe7",
        phone: "77334859967",
        email: "that@this.com7",
        customerID: "123457"
	},
    {
        name: "Jane Doe8",
        phone: "77334859968",
        email: "that@this.com8",
        customerID: "123458"
	}
];

//======json endpoints========//
app.get("/api/tables", function (req, res) {
    res.json(tables);
});

app.get("/api/waitlist", function (req, res) {
    res.json(waitlist);
});


function notDupe(guest) {
    let result = true;
    tables.forEach(function (table) {
        for (let prop in table) {
            if (table[prop] === guest[prop]) {
                console.log("table DUPE!!!!");
                result = false;
            }
        }
    });
    waitlist.forEach(function (party) {
        for (let prop in party) {
            if (party[prop] === guest[prop]) {
                console.log("waitlist DUPE!!!!");
                result = false;
            }
        }
    });
    return result;
}

//=======post handlers========//
app.post("/api/add", function (req, res) {
    console.log("req.body =", req.body);
    let responseString = "";
    let newReservation = req.body;
    if (tables.length < maxTables && notDupe(newReservation)) {
        console.log('notDupe(newReservation)', notDupe(newReservation));
        tables.push(newReservation);
        responseString = "You successfully booked a reservation!";
    } else if (notDupe(newReservation)) {
        waitlist.push(newReservation);
        responseString = "Unfortunately, all available tables have been booked. You are on the waitlist and will be contacted if a table becomes available.";
    } else {
        responseString = "Already on list.";
    }
    res.send(responseString);

})

//=========start server=========//
app.listen(PORT, function () {
    console.log("Listening on port", PORT);
})
