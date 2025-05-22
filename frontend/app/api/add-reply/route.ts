import {NextResponse} from 'next/server'
import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '911h91ed', // Replace with your project ID
  dataset: 'production', // Or your dataset name
  apiVersion: '2023-01-01', // Use a fixed date
  useCdn: false, // `false` if you want fresh data every time
  token: process.env.SANITY_WRITE_TOKEN, // Set in .env
})

export async function POST(req: Request) {
  const {name, email, comment, postId, parentId} = await req.json()

  const newComment = {
    _type: 'comment',
    name,
    email,
    comment,
    post: {
      _type: 'reference',
      _ref: postId,
    },
    ...(parentId && {
      parent: {
        _type: 'reference',
        _ref: parentId,
      },
    }),
    createdAt: new Date().toISOString(),
  }

  const created = await client.create(newComment)
  return NextResponse.json({success: true, comment: created})
}
