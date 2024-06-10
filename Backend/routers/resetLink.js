const express = require("express");
const nodeMailer = require("nodemailer");
const mailDesign = require("mailgen");

const resetRouter = express.Router();
//FUnction for create Random string
function randomString(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

resetRouter.post("/resetLink", async (req, res) => {
  const { userMail } = req.body;
  const code = randomString(5);
  try {
    //Mail design
    const mailGenerator = new mailDesign({
      theme: "default",
      product: {
        name: "Password Reset",
        link: "http://localhost:3000",
      },
    });

    const mail = mailGenerator.generate({
      body: {
        name: "Vignesh",
        intro: "Hi Vignesh",
        action: {
          instructions: "To reset your password, click the button below:",
          button: {
            color: "#22BC66",
            text: "Reset Password",
            link: `https://www.facebook.com`,
          },
        },
      },
    });

    const transporter = nodeMailer.createTransport({
      service: "gmail",
      auth: {
        user: "vigneshvickybsc1999@gmail.com",
        pass: "nudjwwnwfcovcrbb",
      },
    });
    const messages = {
      from: "vigneshvickybsc1999@gmail.com",
      to: userMail,
      subject: "Hi Security code",
      text: "Hi find your security code here",
      html: mail,
    };

    transporter
      .sendMail(messages)
      .then((info) => {
        res.status(200).json({ message: "Email sent" });
      })
      .catch((err) => {
        return res
          .status(500)
          .json({ message: "error sending mail " + err.message });
      });
  } catch (err) {
    res.status(500).json({ message: "server error " });
  }
});

module.exports = resetRouter;
