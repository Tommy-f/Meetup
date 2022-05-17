import { User } from '../interface/User.interface'

function isAttending(users: User[]) {
  const attending = users.find((user: { id: number; }) => user.id === 120)

  if (attending) return true
  return false
}

export default isAttending