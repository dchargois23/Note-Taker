var express = require('express');
var path = require("path");
var app = express();
// var PORT = process.removeListener.PORT || 3000

var PORT = process.env.PORT || 3000;



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


require("./routing/apiroutes")(app);
require("./routing/htmlroutes")(app);




app.listen(PORT, function () {
    console.log("App listening on: http://localhost:" + PORT);
});
