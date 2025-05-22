import React from 'react'
import {CalendarDays} from 'lucide-react' // Optional icon
import ReplyForm from './ReplyForm'

const CommentCard = ({comment, postId, level = 'first'}) => {
  const formattedDate = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  })
    .format(new Date(comment.createdAt))
    .replace(',', '')

  return (
    <div>
      <div className=" w-full  shadow-md p-4 mb-4 rounded-md flex gap-4">
        <img
          src={'/dummy_avatar.jpg'}
          alt={comment.name}
          className="w-14 h-14 rounded-full object-cover mt-1"
        />
        <div className="flex-1">
          <div className="font-semibold text-gray-800">{comment.name}</div>
          <div className="text-sm text-gray-500 flex items-center gap-1 mb-2">
            <CalendarDays size={16} className="text-gray-400" />
            {formattedDate}
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">{comment.comment}</p>
        </div>
      </div>
      {/* Nested Replies */}
      {comment.replies?.length > 0 && (
        <div className="ml-16 mt-2 space-y-2">
          {comment.replies.map((reply, id) => (
            <CommentCard comment={reply} key={id} postId={postId} level="second" />
          ))}
        </div>
      )}
      {/* Show reply form */}
      {level === 'first' && (
        <div className="ml-16 mt-2 space-y-2 mb-10">
          <ReplyForm postId={postId} parentId={comment._id} />
        </div>
      )}
    </div>
  )
}

export default CommentCard
