// This server exists ONLY for local development. It lets the contact form
// work when you run plain `npm run dev`, by mimicking the Netlify Function
// at netlify/functions/send-email.js. It is never used in production —
// Netlify runs the real function there instead.

import 'dotenv/config'
import express from 'express'
import { Resend } from 'resend'

const app = express()
app.use(express.json())

app.post('/.netlify/functions/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    if (!process.env.RESEND_API_KEY) {
      return res.status(500).json({
        error: 'RESEND_API_KEY is not set. Create a .env file in the project root with RESEND_API_KEY=your_key',
      })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'fk9719650@gmail.com',
      reply_to: email,
      subject: `New message from ${name}`,
      text: `From: ${name} (${email})\n\nMessage:\n${message}`,
    })

    if (error) {
      return res.status(500).json({ error: error.message })
    }

    return res.status(200).json({ success: true, data })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
})

const PORT = process.env.LOCAL_API_PORT || 8787
app.listen(PORT, () => {
  console.log(`Local dev API (mirroring the Netlify function) running on http://localhost:${PORT}`)
})
