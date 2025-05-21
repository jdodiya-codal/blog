import {NextResponse} from 'next/server'
import {createClient} from '@sanity/client'
import {nanoid} from 'nanoid'

const client = createClient({
  projectId: '911h91ed', // Replace with your project ID
  dataset: 'production', // Or your dataset name
  apiVersion: '2023-01-01', // Use a fixed date
  useCdn: false, // `false` if you want fresh data every time
  token: process.env.SANITY_WRITE_TOKEN, // Set in .env
})

export async function POST(req: Request) {
  try {
    const body = await req.json()

    await client.create({
      _type: 'formSubmission',
      ...body,
      submittedAt: new Date().toISOString(),
    })

    return NextResponse.json({success: true})
  } catch (error) {
    console.error('Submission failed:', error)
    return NextResponse.json({success: false, error: 'Failed to submit'}, {status: 500})
  }
}

// export async function POST(req: Request) {
//   try {
//     const {formTitle, fields} = await req.json()

//     const formattedFields = fields.map((field: any) => ({
//       ...field,
//       _key: nanoid(),
//     }))

//     const submission = await client.create({
//       _type: 'formSubmission',
//       formTitle,
//       fields: formattedFields,
//       submittedAt: new Date().toISOString(),
//     })

//     return NextResponse.json({success: true, id: submission._id})
//   } catch (err: any) {
//     console.error('Sanity submission failed:', err.message, err)
//     return NextResponse.json({success: false, error: 'Failed to submit'}, {status: 500})
//   }
// }
