import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
    service: "Gmail",
    secure: true,
    auth: {
        user: "xldivin@gmail.com",
        pass: "wikn grzr yeuj gvie",
    },
});
export function sendEmail(newUser) {
    const mailOptions = {
        from: "xldivin@gmail.com",
        to: newUser.email,
        subject: "Welcome to Our Service",
        html: `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        /* Add your CSS styles here for the card design */
        .card {
          background-color: #f0f0f0;
          border: 1px solid #ddd;
          border-radius: 5px;
          padding: 20px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        }
    
        /* Style for the card title */
        .card-title {
          font-size: 24px;
          color: #333;
          margin-bottom: 10px;
        }
    
        /* Style for the card content */
        .card-content {
          font-size: 16px;
          color: #666;
        }
      </style>
    </head>
    <body>
  <div class="card">
    <h2 class="card-title">Welcome to Our Service</h2>
    <p class="card-content">
    Thank you for signing up! You can now start using our service.!
    </p>
  </div>
</body>
</html>
`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error sending email: " + error);
        }
        else {
            console.log("Email sent: " + info.response);
        }
    });
}
//# sourceMappingURL=sendEmail.js.map