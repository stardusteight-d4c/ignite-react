import nodemailer from "nodemailer";

// NODEMAILER CONFIGURATION
export async function sendEmailVerification(email: string, name: string, token: string) {
  var transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.ethereal.email",
    auth: {
      user: "stardusteight.d4cc@gmail.com",
      pass: process.env.TWO_STEP_VERIF_PASS, // get in google Two-step verification
      // 1. Google Account 2. Security > Enable two-step verification 3. Generate app password
    },
  });

  // SEND EMAIL WITH DEFINED TRANSPORT OBJECT
  await transporter.sendMail({
    subject: "Verificação de Email",
    from: '"Event Platform 👻" <stardusteight.d4cc@gmail.com>',
    to: email,
    text: `Verificação de Email - Olá, ${name}! Obrigado por se inscrever, aqui está seu código de confirmação: ${token}`,
    html: `
      <div>
      <h2>Verificação de Email</h2>
      <p>Olá, ${name}!</p>
      <p>Obrigado por se inscrever, aqui está seu código de confirmação:</p>
      <h3 style="color:black;">${token}</h3>
      </div>`,
  });
}
