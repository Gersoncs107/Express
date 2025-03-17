const express = require("express")
const app = express()
const authorRouter = require("./routes/authorRouter")
const bookRouter = require("./routes/bookRouter")
const indexRouter = require("./routes/indexRouter")

app.use("/authors", authorRouter)
app.use("/books",bookRouter)
app.use("/", indexRouter)

app.get("/", (req, res)=> res.send("Hello World!"))

const PORT = 3000
app.listen(PORT, ()=> {
    console.log(`My first Express app - listening on port ${PORT}!`)
})

app.use((err,req, res, next) => {
    console.error(err)
    res.status(500).send(err)
})