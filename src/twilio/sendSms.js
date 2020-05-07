const config = require("../config");
const client = require("twilio")(config.accountSid, config.authToken);

/**
 *
 * @param {string} body - the sms body message
 * @param {string} phone - the phone to send the message
 */

async function sendSms(body, phone) {
  try {
    const message = await client.messages.create({
      to: phone,
      from: "urTwilioPhoneNumber",
      body: body,
    });
    return message;
    //console.log(message.sid);
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  sendSms,
};
