import { CommentProps } from '../../interface/Comment.interface'
import styles from './comment.module.css'

export const Comment = (props: CommentProps) => {
  const { text } = props.comment
  const { firstName, lastName } = props.comment.user

  const initials = firstName.charAt(0) + '.' + lastName.charAt(0)
  const fullFirstName = firstName + '.' + lastName.charAt(0)

  return (
    <div className={styles.wrapper}>
        <div data-testid='commentCard' className={styles['comment-card']}>
          <div className={styles.picture}><p>{initials}</p></div>
          <div className={styles.testar}>
            <p className={styles.name}>{fullFirstName}</p>
            <div className={styles.comment}>{text}</div>
          </div>
        </div>
      </div>
  )
}