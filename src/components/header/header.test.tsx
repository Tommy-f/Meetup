import { render, screen, } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { Header } from "./Header"

test('Should have a searchbar with specific placeholder text', () => {
  render(<Header />)
  const searchbarEl = screen.getByRole('searchbox') as HTMLInputElement;
  const placeholderEl = screen.queryByPlaceholderText(/sök efter event här!/i)
  expect(searchbarEl).toBeDefined()
  expect(placeholderEl).toBeInTheDocument()
})

test('Sort button should have a title', () => {
  render(<Header />)
  const titleEl = screen.getByText(/sort/i);
  expect(titleEl).toBeInTheDocument()
})
test('Should not be checked on initial render', () => {
  render(<Header />)
  const checkboxEl = screen.getByRole('checkbox') as HTMLInputElement;
  expect(checkboxEl).not.toBeChecked()
})

test('Should be checked when clicked', async () => {
  render(<Header />)
  const checkboxEl = await screen.findByTestId('toggle') as HTMLInputElement;
  expect(checkboxEl).not.toBeChecked()

  userEvent.click(checkboxEl)
  expect(checkboxEl).toBeChecked()
})

test('searchbar', async () => {
  render(<Header />)
  const searchbarEl = screen.getByRole('searchbox') as HTMLInputElement;
  expect(searchbarEl).toBeDefined()

  userEvent.type(searchbarEl, 'dsadasdasdsada')
  // const errorEl = screen.getByText(searchbarEl)
  // expect(errorEl).toBeInTheDocument()
})