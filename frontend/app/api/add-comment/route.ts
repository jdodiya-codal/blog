import {NextResponse} from 'next/server'
import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '911h91ed', // Replace with your project ID
  dataset: 'production', // Or your dataset name
  apiVersion: '2023-01-01', // Use a fixed date
  useCdn: false, // `false` if you want fresh data every time
  token: process.env.SANITY_WRITE_TOKEN, // Set in .env
})

export async function POST(req) {
  const body = await req.json()

  const {name, email, comment, post} = body

  if (!name || !email || !comment) {
    return NextResponse.json({error: 'Missing fields'}, {status: 400})
  }

  try {
    await client.create({
      _type: 'comment',
      name,
      email,
      comment,
      post,
      createdAt: new Date().toISOString(),
    })

    return NextResponse.json({success: true})
  } catch (err) {
    return NextResponse.json({error: 'Failed to submit comment'}, {status: 500})
  }
}
