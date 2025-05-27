import {NextResponse} from 'next/server'
import {createClient} from '@sanity/client'
import {Resend} from 'resend'

const client = createClient({
  projectId: process.env.PROJECT_ID,
  dataset: process.env.DATASET,
  apiVersion: process.env.API_VERSION,
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
})

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    await client.create({
      _type: 'formSubmission',
      ...body,
      submittedAt: new Date().toISOString(),
    })

    await resend.emails.send({
      from: 'Form Bot <onboarding@resend.dev>',
      to: 'jdodiya@codal.com',
      replyTo: body.email,
      subject: `📝 Impilo Pop New form submission from ${body.first_name} ${body.last_name}`,
      html: `
      <div style="
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
        max-width: 600px;
        margin: 20px auto;
        background: #ffffff;
        padding: 28px 32px;
        border-radius: 12px;
        border: 1px solid #e5e7eb;
        box-shadow: 0 4px 8px rgba(0,0,0,0.05);
        color: #1f2937;
      ">
        <h2 style="
          font-weight: 700;
          font-size: 24px;
          color: #111827;
          margin-bottom: 28px;
          letter-spacing: -0.02em;
        ">📬 New Contact Form Submission</h2>
        
        <table style="width: 100%; border-collapse: collapse; font-size: 16px;">
          <tr>
            <td style="
              padding: 12px 0;
              font-weight: 600;
              color: #4b5563;
              width: 110px;
              vertical-align: top;
            ">Name:</td>
            <td style="padding: 12px 0; color: #111827;">
              ${body.first_name} ${body.last_name}
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; font-weight: 600; color: #4b5563; vertical-align: top;">Email:</td>
            <td style="padding: 12px 0; color: #111827;">${body.email}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; font-weight: 600; color: #4b5563; vertical-align: top;">Phone:</td>
            <td style="padding: 12px 0; color: #111827;">${body.phone_number || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; font-weight: 600; color: #4b5563; vertical-align: top;">Message:</td>
            <td style="padding: 12px 0; color: #111827; white-space: pre-wrap; line-height: 1.5;">
              ${body.message}
            </td>
          </tr>
        </table>
    
        <hr style="
          margin: 32px 0;
          border: none;
          border-top: 1px solid #e5e7eb;
        " />
    
        <footer style="
          font-size: 12px;
          color: #9ca3af;
          text-align: center;
          letter-spacing: 0.02em;
        ">
          You received this email because someone submitted your contact form.
        </footer>
      </div>
    `,
    })

    return NextResponse.json({success: true})
  } catch (error) {
    console.error('Submission failed:', error)
    return NextResponse.json({success: false, error: 'Failed to submit'}, {status: 500})
  }
}
