import { render, screen } from "@testing-library/react";
import { Comment } from "./Comment";

const comment =
{
  id: 1,
  text: 'First comment',
  user: { id: 10, firstName: 'Erik', lastName: 'Lundin' }
}

test('Should display the users comment', () => {
  render(<Comment comment={comment} />)
  const commentEl = screen.getByText(/First comment/i)
  expect(commentEl).toBeInTheDocument()
})

test('Should display users initials and seperating them with .', () => {
  render(<Comment comment={comment} />)
  const initialsEl = screen.getByText(/e\.l/i)
  expect(initialsEl).toBeInTheDocument()
})

test('Should display users full firstname and inital of lastname', () => {
  render(<Comment comment={comment} />)
  const nameEl = screen.getByText(/erik\.l/i)
  expect(nameEl).toBeInTheDocument()
})
