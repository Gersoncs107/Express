const express = require("express")
const app = express()
const authorRouter = require("./routes/authorRouter")
const bookRouter = require("./routes/bookRouter")
const indexRouter = require("./routes/indexRouter")
const path = require("node:path")
const { text } = require("node:stream/consumers")

// app.use("/authors", authorRouter)
// app.use("/books",bookRouter)
// app.use("/", indexRouter)

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// app.get("/", (req, res)=> res.send("Hello World!"))

const PORT = 3000
app.listen(PORT, ()=> {
    console.log(`My first Express app - listening on port ${PORT}!`)
})

const links = [
    {href: "/", text: "Home"},
    {href: "about", text: "About"}
]

app.get("/", (req, res) => {
    res.render("index", {message: "EJS Rocks!"} )
})  

app.use((err, req, res, next) => {
    console.error(err);
    // We can now specify the `err.statusCode` that exists in our custom error class and if it does not exist it's probably an internal server error
    res.status(err.statusCode || 500).send(err.message);
  });

