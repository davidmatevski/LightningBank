const express = require("express");
const bodyParser = require("body-parser");
const handlebars = require("express-handlebars");
const path = require("path");
const session = require("express-session");

const accountController = require("./controllers/accountController");
const homeController = require("./controllers/homeController");
const profileController = require("./controllers/homeController");
const transactionController = require("./controllers/transactionController");

const database = require("./database");

const app = express();

app.set('views', path.join(__dirname, 'public', 'views'));
app.set('view engine', '.hbs');
app.engine('.hbs', handlebars({
    extname: '.hbs'
}));

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(session({
    secret: "asdfsdfsdf32f2r32ar",
    saveUninitialized: true,
    resave: false
}))

app.use((req, res, next) => {
    res.locals = req.session;

    next();
})

const HTTP_PORT = process.env.PORT || 8081;

app.use("/account", accountController);
app.use("/", homeController);
app.use("/profile", profileController);
app.use("/transaction", transactionController);


app.get("/", (req, res)=>{
    res.redirect("/home");
})

app.get("*", (req,res)=>{
    res.render("pageNotFound");
})

app.get("/lending", (req,res)=>{
    res.render("lending");
})

app.use((err,req,res,next)=>{
    
})

app.listen(HTTP_PORT, ()=>{
    console.log("Server listening...");

    database.init();
});

