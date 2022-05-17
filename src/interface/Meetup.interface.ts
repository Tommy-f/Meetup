import { User } from "./User.interface";
import { Comment } from "./Comment.interface";

export interface IMeetup {
  id: number
  title: string
  description: string
  createdDate: Date
  startDate: Date
  endDate: Date
  comments: Comment[]
  users: User[]
  maximumAttendees: number
  img: string
  creator: string
}

export interface MeetupProps {
  meetup: IMeetup
}
