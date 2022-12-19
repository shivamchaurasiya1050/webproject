const express = require("express");
const hbs=require("hbs");
const app = express();
const port = 8000;
const path =require("path")
const staticPath=path.join(__dirname, "../public");
const template_path=path.join(__dirname, "../templates/views");
const partial_path=path.join(__dirname, "../templates/partials");
// console.log(path.join(__dirname,""));
app.set('view engine','hbs')
app.set('views',template_path);
hbs.registerPartials(partial_path);

// static path------

app.use(express.static(staticPath))

// routing--------------
app.get("", (req, res) => {
    res.render('index')
});

app.get("/about", (req, res) => {
    res.render('about')
});

app.get("/weather", (req, res) => {
    res.render('weather')
});

app.get("*", (req, res) => {
    res.render('404error',{
        errorMsg:"Opps! page not found"
    })
});


app.listen(port, () => {
    console.log(`Listening to the port at ${port}`)
});