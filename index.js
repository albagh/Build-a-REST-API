import express from "express";
import moviesRoute from "./routes/movies.js";
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get("/", (req, res)=>{
    console.log("We're on the home page now");
    res.send("We're on the home page now")
})

app.use('/movies', moviesRoute);

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})