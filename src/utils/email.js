import nodemailer from 'nodemailer';

// Create Gmail transporter
const createTransporter = () => {
  // Gmail SMTP configuration
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
      user: 'noreplyotpgova@gmail.com',
      pass: 'cvvjgllllyouffhw', // app password
    },
  });
};

/**
 * Send an email
 * @param {string} to - Recipient email
 * @param {string} subject - Email subject
 * @param {string} html - HTML email body
 * @returns {Promise} - Resolves with info about the sent email
 */
export const sendEmail = async (to, subject, html) => {
  try {
    const transporter = createTransporter();
    
    // Verify transporter configuration
    await transporter.verify();
    console.log('SMTP connection verified');

    const mailOptions = {
      from: '"Learning Platform" <noreplyotpgova@gmail.com>',
      to,
      subject,
      html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

export default sendEmail; 