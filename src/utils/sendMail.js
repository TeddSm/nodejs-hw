import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false, 
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const sendEmail = async (options) => {
  const mailOptions = {
    from: options.from || process.env.SMTP_FROM,
    to: options.to,
    subject: options.subject,
    html: options.html,
  };

  return await transporter.sendMail(mailOptions);
};