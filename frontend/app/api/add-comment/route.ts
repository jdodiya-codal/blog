import {NextResponse} from 'next/server'
import {createClient} from '@sanity/client'

const client = createClient({
  projectId: process.env.PROJECT_ID,
  dataset: process.env.DATASET,
  apiVersion: process.env.API_VERSION,
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
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
