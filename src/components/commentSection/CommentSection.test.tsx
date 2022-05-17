import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CommentSection } from "./CommentSection";

const comments = [
  {
    id: 1,
    text: 'Så taggad!',
    user: { id: 10, firstName: 'Erik', lastName: 'Lundin' }
  },
  {
    id: 2,
    text: 'Hoppas det blir mycket från 90-talet',
    user: { id: 10, firstName: 'Viktor', lastName: 'Ochomdal' }
  },
  {
    id: 3,
    text: 'Kan man tävla i lag?',
    user: { id: 20, firstName: 'Nils', lastName: 'Oscar' }
  }
]

test('Submit button should default as disabled', () => {
  render(<CommentSection data={[]} meetupId={1} />)
  const buttonEl = screen.getByTestId('formbutton') as HTMLButtonElement

  expect(buttonEl).toBeInTheDocument()
  expect(buttonEl).toBeDisabled()
})

test('Input field should default as empty string', () => {
  render(<CommentSection data={[]} meetupId={1} />)
  const inputEl = screen.getByTestId('input') as HTMLInputElement

  expect(inputEl).toBeInTheDocument()
  expect(inputEl.value).toBe('')
})

test('Button should not be disabled when inputs exist', () => {
  render(<CommentSection data={[]} meetupId={1} />)
  const inputEl = screen.getByTestId('input') as HTMLInputElement
  const buttonEl = screen.getByTestId('formbutton') as HTMLButtonElement

  fireEvent.change(inputEl, {
    target: {
      value: 'A comment'
    }
  })

  expect(inputEl.value).toBe('A comment')
  expect(buttonEl).toBeEnabled()

  userEvent.click(buttonEl)
  expect(inputEl.value).toBe('')
})

test('Should display all 3 comments', () => {
  render(<CommentSection data={comments} meetupId={1} />)
  const commentEl = screen.getAllByTestId('commentCard')

  expect(commentEl).toHaveLength(3)
})