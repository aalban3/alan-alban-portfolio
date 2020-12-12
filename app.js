const path = require('path');
const jobs = require('./public/js/findjobs')
let express = require("express");
let app = express()
app.use(express.static("public")); // this tells express to serve our public directory for us 
app.use(express.static("lib"));
app.use(express.static("images"));
app.set("view engine","ejs") // when you use this, you don't need to use .ejs after every view file render
const conn = new jobs.Jobs();
app.get(["/","/home"],function(req,res){
    let jobList = []; 
    
    const allJobs = conn.queryDB()
        .then(data => {
            let company = [];
            let title = [];
            let location = [];
            let sdates = [];
            let edates = [];
            let image = [];
            let desc = [];
            data.forEach( (job) => {
                company.push(job.company);
                image.push(job.image);
                location.push(job.location);
                title.push(job.title);
                sdates.push(job.sdate);
                edates.push(job.edate);
                desc.push(job.description);
            })

            console.log(desc[1]);
            res.render("index", {company: company, img: image,location: location, title: title, sdates: sdates, edates: edates,desc:desc})
        })
        .catch(err => {
            console.log("Error retrireving values")
            console.log(err);
        })
    //res.render("index") // render needs an ejs file. Put it in the views folder (no need to reference views here)
})

app.get("/projects", function(req, res){
    res.render("projects");
})
// app.get("/updatedb",function(req, res){
//     const updates = conn.updateDB('')
//         .then(date => {
            
//         })
//     res.render("/");
// })
app.get("/skills", function(req, res){
    res.render("skills");
})
const port = process.env.port || 4000;
app.listen(port,function(){
    console.log("serving app!");
})


// index.ejs //

