import { User } from "./User.interface";

export interface Comment {
  id: number
  text: string
  user: User
}

export interface CommentProps {
  comment: Comment
}
