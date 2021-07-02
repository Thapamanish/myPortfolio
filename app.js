const express = require("express");
const bodyParser = require("body-parser");
const nodeMailer = require("nodemailer");
const myemailkey = require("./variables.js")

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(express.json())

app.get("/", function(req, res){
  res.render("index");
});

app.post("/", function(req, res){

  const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: "iammanish041@gmail.com",
      pass: myemailkey.fuckoff
    }
  })
  const mailOptions = {
    from: req.body.email,
    to: "iammanish041@gmail.com",
    subject: `Message from ${req.body.name}: ${req.body.email}`,
    text: req.body.message
  }

  transporter.sendMail(mailOptions, (error, info)=>{
    if(error){
      console.log(error);
      res.send("error");
    }
    else{
      res.send("success");
    }
  })
});

app.get("/contents", function(req, res){
  res.render("contents");
});




app.listen(process.env.PORT || 3000, function(){
  console.log("Server is running!!");
});
