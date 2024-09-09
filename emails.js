import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "senadev2024@gmail.com",
    pass: "dnszshlnvvymqwvv​",
  },
});


export let enviar_correo = async (emailTo, asunto ,content, mes) => {
    try {

        let envio = await transporter.sendMail({
            from: "senadev2024@gmail.com",
            to: emailTo,
            subject: asunto,
            text: content,
          })
          console.log (mes)

    }
    catch (error) {
        console.error ("No se pudo realizar el envío del correo electrónico "+error)
    }

    
}