//declare variables + require libraries 
let express = require("express");
//connect with route folders
let app = express();
let PORT = process.env.PORT || 3000;
let apiRoutes = require("./routes/apiRoutes");
let htmlRoutes = require("./routes/htmlRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
});