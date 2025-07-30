import express, {Request, Response, Express} from "express";

const app: Express = express();
const port = 3001

app.get("/", (req: Request, res: Response)=>{
    res.send("aplication express");
})

app.listen(port,()=>{
    console.log(`SERVER rodando em http://localhost:${port}`)
})