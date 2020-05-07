const { Router } = require("express");
const router = Router();
const { sendSms } = require("../twilio/sendSms");

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/send-sms", async (req, res) => {
  const response = await sendSms(req.body.message, req.body.phone);
  console.log(response.sid);
  res.send("received");
});

module.exports = router;
