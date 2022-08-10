import nodemailer from "nodemailer";
import { EMAIL_ROD } from "../constants";
import getBody from "./template";

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: EMAIL_ROD,
    pass: process.env.NODEPWD,
  },
  tls: { rejectUnauthorized: false },
});

/*-----------------MAIL------------------------------*/
async function sendEmail(body: emailBody) {
  try {
    let info = await transporter.sendMail({
      from: `${EMAIL_ROD}>`, // sender address
      to: EMAIL_ROD,
      subject: "✅PORTFOLIO - CONTACT FORM ✅", // Subject line
      html: getBody(body), // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  } catch (error) {
    console.log(error, "errorrr NODEMAILER");
  }
}

export default sendEmail;
