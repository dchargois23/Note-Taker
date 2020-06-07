var express = require('express');
var path = require("path");
var app = express();
// var PORT = process.removeListener.PORT || 3000

var PORT = process.env.PORT || 3000;


app.get('/', function (req, res) {
    res.send("Hello World");
})



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


require("./Routes/apiroutes")(app);
require("./Routes/htmlroutes")(app);




app.listen(PORT, function () {
    console.log("App listening on: http://localhost:" + PORT);
});
