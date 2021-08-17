const express = require('express');
const app = express()
const port = 3000

app.get("/",(req,res)=>{
    res.send("Hello from docker!");
})

app.listen(port,()=> {
    console.log(`Cineplex Listening from port ${port}`);
})