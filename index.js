import express from "express";
// import dirName from "path";
// import url from "url";

const app=express();
const port= 3000;

app.listen(port,()=>{
    console.log("Listening at port:",port);
});

app.get("/",(req,res)=>{
    const today  = new Date();
    const day= today.getDay();

    let type="a weekday";
    let comment= "it's time to work hard";

    if (day === 0 || day === 6) {
        type = "the weekend";
        adv = "it's time to have some fun";
      }

    res.render("index.ejs",{
        dayType: type,
        comments: comment,
    });
});
