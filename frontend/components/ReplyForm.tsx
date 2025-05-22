'use client'
import {useRouter} from 'next/navigation'
import {useState} from 'react'

export default function ReplyForm({postId, parentId}: {postId: string; parentId: string}) {
  const [form, setForm] = useState({name: '', email: '', comment: ''})
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    await fetch('/api/add-reply', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        ...form,
        postId,
        parentId,
      }),
    })

    setSubmitting(false)
    setSuccess(true)
    router.refresh()
    setForm({name: '', email: '', comment: ''})
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-6 bg-white rounded-xl shadow-lg max-w-full mx-auto mt-6"
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Reply to this comment</h3>

      {/* Name & Email in one line */}
      <div className="flex gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="flex-1 bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400
                   focus:outline-none focus:ring-2 focus:ring-[#F81539] focus:border-transparent transition"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="flex-1 bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400
                   focus:outline-none focus:ring-2 focus:ring-[#F81539] focus:border-transparent transition"
        />
      </div>

      {/* Comment textarea */}
      <textarea
        name="comment"
        placeholder="Write your reply..."
        value={form.comment}
        onChange={handleChange}
        required
        className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 text-gray-700 placeholder-gray-400
                 min-h-[100px] resize-none
                 focus:outline-none focus:ring-2 focus:ring-[#F81539] focus:border-transparent transition"
      />

      {/* Button stays the same */}
      <button
        type="submit"
        disabled={submitting}
        className="rounded-[12px] px-4 py-2 text-[14px] bg-[#F81539] text-white cursor-pointer"
      >
        {submitting ? 'Replying...' : 'Submit Reply'}
      </button>

      {success && <p className="text-green-600 text-sm mt-2">Reply posted!</p>}
    </form>
  )
}
