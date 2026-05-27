import express from"express";
import path from "path";

import {ENV} from "./lib/env.js"


const app = express();


const __dirname = path.resolve()


app.get("/", (req,res) => {
    res.status(200).json({msg:"sucess from api"})
})

// make our app ready for deployment

app.listen(ENV.PORT, () => console.log("server is running on 3000"));
