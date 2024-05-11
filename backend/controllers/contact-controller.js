const Contact = require("../models/contactModal");

const contactForm = async (req, resp) => {
  try {
    const response = req.body;
    await Contact.create(response);
    return resp.status(200).json({ message: "Message sent succesfuly!" });
  } catch (error) {
    console.log(error, ":message error");
    return resp.status(500).json({ message: "Message not sent!" });
  }
};
module.exports = contactForm;
