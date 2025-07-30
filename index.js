const express = require("express");

const app = express();
const port = 3001

app.get("/", (req, res)=>{
    res.send("aplicacao express");
})
app.listen(port,()=>{
    console.log(`SERVER rodando em localhost:${port}`)
})