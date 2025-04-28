const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

// Koneksi DB
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",      // isi sesuai config localmu
  database: "portfolio_db"
});

db.connect((err) => {
  if (err) {
    console.log("DB connection error:", err);
  } else {
    console.log("MySQL Connected!");
  }
});

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "********@gmail.com",
    pass: "********" // gunakan variabel env ya di real project
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body;
  const name = firstName + " " + lastName;

  // Kirim email
  const mail = {
    from: name,
    to: "********@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ code: 500, status: "Email failed", error });
    } else {
      // Simpan ke database
      const query = "INSERT INTO contact_messages (firstName, lastName, email, phone, message) VALUES (?, ?, ?, ?, ?)";
      db.query(query, [firstName, lastName, email, phone, message], (err, result) => {
        if (err) {
          console.log("DB Insert Error:", err);
          res.json({ code: 500, status: "DB Insert Failed", error: err });
        } else {
          res.json({ code: 200, status: "Message Sent and Saved" });
        }
      });
    }
  });
});
