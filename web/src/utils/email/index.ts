import sgMail from "@sendgrid/mail";

const EmailUtil = {
  sendEmail(content: string) {
    console.log(import.meta.env);

    sgMail.setApiKey(import.meta.env.VITE_SENDGRID_API_KEY);

    const msg = {
      to: "contato@ricardobrasileiro.com",
      from: "jricardobgoncalves@gmail.com",
      subject: "Portfolio contact",
      text: "and easy to do anywhere, even with Node.js",
      html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    };

    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.error(error);
      });
  },
};

export default EmailUtil;
