const { Router } = require("express");
const router = Router();
const { sendSms } = require("../twilio/sendSms");
const sms = require("../models/sms");

router.get("/", async (req, res) => {
  const messages = await sms.find();
  messages.forEach((m) => console.log(m.Body));
  res.render("index");
});

router.post("/send-sms", async (req, res) => {
  const { message, phone } = req.body;

  if (!message || !phone) return res.json("Invalid message or phone");

  const result = await sendSms(req.body.message, req.body.phone);
  await sms.create({ Body: req.body.message, To: req.body.phone });

  res.redirect("/");
  console.log(result.sid);
});

module.exports = router;
