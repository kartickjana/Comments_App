// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const commentItem = props => {
  const {commentDetails} = props
  const {id, name, comment, isLiked, initialClassName, date} = commentDetails
  const initial = name ? name[0].toUpperCase() : ''
  const likeTextClassName = isLiked ? 'button active' : 'button'
  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const postedTime = formatDistanceToNow(date)

  const onclickLike = () => {
    const {toggleIsLiked} = props
    toggleIsLiked(id)
  }

  const onDeleteComment = () => {
    const {deleteComment} = props
    deleteComment(id)
  }

  return (
    <li className="commentItem">
      <div className="commentContainer">
        <div className={initialClassName}>
          <p className="initial">{initial}</p>
        </div>
        <div>
          <div className="usernameTimeContainer">
            <p className="username">{name}</p>
            <p className="time">{postedTime} age</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="buttonsContainer">
        <div className="likeContainer">
          <img src={likeImageUrl} alt="like" className="likeImage" />
          <button
            className={likeTextClassName}
            type="button"
            onClick={onclickLike}
          >
            Like
          </button>
        </div>
        <button
          className="button"
          type="button"
          onClick={onDeleteComment}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="delete"
            alt="delete"
          />
        </button>
      </div>
      <hr className="commentLine" />
    </li>
  )
}

export default commentItem
