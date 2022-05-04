const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");

require("dotenv").config();

const app = express();

app.route("/").get(function (req, res) {
  res.sendFile(process.cwd() + "/public/index.html");
});
const PORT = process.env.PORT || 8083;

app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.static(path.join(__dirname, "node_modules/masonry-layout/dist"))
);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take out messages");
  }
});

app.post("/send", (req, res) => {
  let form = new multiparty.Form();
  let data = {};
  form.parse(req, function (err, fields) {
    console.log(fields);
    Object.keys(fields).forEach(function (property) {
      data[property] = fields[property].toString();
    });
    const mail = {
      form: data.name,
      to: process.env.EMAIL,
      subject: `${data.subject}`,
      text: `${data.name} at ${data.email} has sent the following message from the contact form \n"${data.message}"`,
    };
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send("Something went wrong.");
      } else {
        res.status(200).send("Email successfully sent to recipient!");
      }
    });
  });
});
