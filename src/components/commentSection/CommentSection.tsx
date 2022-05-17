import styles from './commentsection.module.css'
import { Comment } from "../comment/Comment";
import { CommentsData } from '../../interface/ListComment.interface'
import { fakeups } from '../../data/fakedata';
import { useState, MouseEvent } from 'react';

export const CommentSection = (props: CommentsData) => {
  const { data, meetupId } = props

  const [comment, setComment] = useState("")

  const newComment = {
    id: Math.floor(Math.random() * 1000) + 1,
    text: comment,
    user: { id: 120, firstName: 'Henry', lastName: 'Andersson' }
  }

  function addComment(e: MouseEvent) {
    e.preventDefault();
    const data = fakeups.find(meet => meet.id === meetupId)
    data?.comments.unshift(newComment)
    setComment("")
  }

  const AllComments = data.map((comment) => {
    return <Comment key={comment.id} comment={comment} />
  })

  return (
    <div className={styles.wrapper}>
      <form className={styles['form-wrapper']}>
        <input
        className={styles.commentInput}
          data-testid='input'
          value={comment}
          onChange={e => setComment(e.target.value)}
          placeholder="Skriv en kommentar"
          type="text"
          name="comment"
          required
        />
        <button data-testid='formbutton' className={styles.btn} disabled={!comment} onClick={addComment} type="submit">Kommentera</button>
      </form>
      {AllComments}
    </div>
  )
}