'use client'
import {useState} from 'react'
import {SendHorizonal} from 'lucide-react'
import {useRouter} from 'next/navigation'

export default function AddCommentForm({id}) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    comment: '',
  })
  const router = useRouter()

  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch('/api/add-comment', {
        method: 'POST',
        body: JSON.stringify({
          ...form,
          post: {
            _type: 'reference',
            _ref: id,
          },
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!res.ok) throw new Error('Failed to post comment')
      router.refresh()
      setForm({name: '', email: '', comment: ''})
    } catch (err) {
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md w-full max-w-4xl">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        <span className="text-red-500 mr-2">●</span> Add Comment
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-800 mb-1">Name</label>
          <input
            type="text"
            name="name"
            className="w-full bg-gray-100 rounded-md px-4 py-2 outline-none"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-800 mb-1">Comment</label>
          <textarea
            name="comment"
            placeholder="Search Anything"
            rows={5}
            className="w-full h-full bg-gray-100 rounded-md px-4 py-2 outline-none"
            value={form.comment}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm text-gray-800 mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="w-full bg-gray-100 rounded-md px-4 py-2 outline-none"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Your Email"
          />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-2">
        <div className="text-sm font-medium text-gray-700">Rate The Usefulness Of The Article</div>

        <div className="flex items-center gap-2">
          <span>😡</span>
          <span>😕</span>
          <span>😐</span>
          <span>🙂</span>
          <span>😊</span>
          <button
            type="button"
            className="bg-green-400 hover:bg-green-500 text-white text-sm font-medium px-4 py-2 rounded-full"
          >
            😀 Good
          </button>
          <button
            type="submit"
            disabled={submitting}
            className="bg-rose-500 hover:bg-rose-600 text-white text-sm font-medium px-4 py-2 rounded-md flex items-center gap-1"
          >
            <SendHorizonal size={16} />
            {submitting ? 'Sending...' : 'Send Comment'}
          </button>
        </div>
      </div>
    </form>
  )
}
