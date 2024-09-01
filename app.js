// const express = require("express");
// const app = express();
// const port = 4000;
// app.get("*", function (req, res) {
// 	res.end("Hello World");
// });
// app.listen(port, function () {
// 	console.log(
// 		"The server is running, " +
// 			" please, open your browser at http://localhost:%s",
// 		port
// 	);
// });

// app.get("/name/:user_name", function (req, res) {
// 	res.status(200);
// 	res.set("Content-type", "text/html");
// 	res.send(
// 		"<html><body>" +
// 			"<h1>Hello " +
// 			req.params.user_name +
// 			"</h1>" +
// 			"</body></html>"
// 	);
// });

const express = require("express");
const app = express();
const port = 4000;
// app.get("/name/:user_name", function (req, res) {
// 	res.status(200);
// 	res.set("Content-type", "text/html");
// 	res.send(
// 		"<html><body>" +
// 			"<h1>Hello " +
// 			req.params.user_name +
// 			"</h1>" +
// 			"</body></html>"
// 	);
// });

// app.get("*", function (req, res) {
// 	res.end("Hello World");
// });
app.listen(port, function () {
	console.log(
		"The server is running, " +
			" please, open your browser at http://localhost:%s",
		port
	);
});

var server = app.listen(3000, function (err) {
	if (err) console.log("server not running");
	else console.log("Calling app.listen's callback function.");
});

// app.get("/", function (req, res) {
// 	res.send("GET request to the homepage");
// });

// app.post("/", function (req, res) {
// 	res.send("POST request to the homepage");
// });

// app.all("/secret", function (req, res, next) {
// 	console.log("Accessing the secret section ...");
// 	next(); // move to the next handler
// });

// app.get("/ab+cd", function (req, res) {
// 	res.send("ab+cd");
// });

// app.get("/users/:userId/books/:bookId", function (req, res) {
// 	res.send(req.params); // {"userId": "34", "bookId": "8989"}
// });

// app
// 	.route("/book")
// 	.get(function (req, res) {
// 		res.send("Get a random book");
// 	})
// 	.post(function (req, res) {
// 		res.send("Add a book");
// 	})
// 	.put(function (req, res) {
// 		res.send("Update the book");
// 	});
app.set("view engine", "pug");
app.set("views", "./views");

app.get("/first_template", function (req, res) {
	res.render("first_view");
});
