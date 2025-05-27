import {NextResponse} from 'next/server'
import {createClient} from '@sanity/client'

const client = createClient({
  projectId: process.env.PROJECT_ID,
  dataset: process.env.DATASET,
  apiVersion: process.env.API_VERSION,
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
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
