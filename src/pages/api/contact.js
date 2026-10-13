import { sendEmail } from "../../lib/smtp-mail";
import { getEmail } from "../../lib/api";

async function sendEmail(req, res) {
  const email = await getEmail();

  try {
    await sendEmail({
      to: email.emailFormulario,

      subject: `*Novo contato através do formulário* - ${req.body.nome}`,
      replyTo: req.body.email,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html lang="pt">
          <body>
            <div style="margin-left: 20px;margin-right: 20px; font-family: sans-serif;">
              <p><b>Nome:</b> ${req.body.nome}</p>
              <p><b>E-mail:</b> ${req.body.email}</p>
              <p><b>Telefone:</b> ${req.body.telefone}</p>
              <div style="font-size: 16px;">
                <b>Mensagem:</b><br />
                <p>${req.body.mensagem}</p>
              </div>
            </div>
          </body>
        </html>`,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
