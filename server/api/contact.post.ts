import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, email, phone, subject, message } = body

  if (!name || !email || !subject || !message) {
    throw createError({ statusCode: 400, message: 'Champs requis manquants.' })
  }

  const config = useRuntimeConfig()

  const transporter = nodemailer.createTransport({
    host: config.smtpHost,
    port: Number(config.smtpPort) || 587,
    secure: Number(config.smtpPort) === 465,
    auth: {
      user: config.smtpUser,
      pass: config.smtpPass,
    },
  })

  await transporter.sendMail({
    from: `"Institut Kamole" <${config.smtpUser}>`,
    to: 'contact@institutkamole.com',
    replyTo: email,
    subject: `[Formulaire Contact] ${subject}`,
    html: `
      <h2>Nouveau message depuis le site Institut Kamole</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;font-weight:bold;background:#f0f4f8">Nom</td><td style="padding:8px">${name}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f0f4f8">Email</td><td style="padding:8px"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f0f4f8">Téléphone</td><td style="padding:8px">${phone || '—'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f0f4f8">Sujet</td><td style="padding:8px">${subject}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f0f4f8">Message</td><td style="padding:8px;white-space:pre-wrap">${message}</td></tr>
      </table>
    `,
  })

  return { success: true }
})
