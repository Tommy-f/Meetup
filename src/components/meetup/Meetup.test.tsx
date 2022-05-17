import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import dateConverter from "../../Utils/dateConverter";
import isAttending from "../../Utils/isAttending";
import { Meetup } from "./Meetup";

const meetup = [
  {
    id: 1,
    title: 'My event',
    description: 'Text content',
    createdDate: new Date('2021-12-01'),
    startDate: new Date('2022-05-01'),
    endDate: new Date('2022-05-01'),
    comments: [
      {
        id: 1,
        text: 'My first comment',
        user: { id: 10, firstName: 'Erik', lastName: 'Lundin' }
      }
    ],
    users: [{ id: 15, firstName: 'Pelle', lastName: 'Depp' }, { id: 16, firstName: 'John', lastName: 'Long' }, { id: 17, firstName: 'Jet', lastName: 'Chan' }],
    maximumAttendees: 100,
    img: 'https://assets.biggreenegg.eu/app/uploads/2017/12/05133526/topimage-mango-filled-hamburgers-800x500-600x375.jpg',
    creator: 'Adam',
  },
  {
    id: 3,
    title: 'Music quiz !',
    description: 'Musik hela dagen',
    createdDate: new Date('2018-12-01'),
    startDate: new Date('2019-01-01'),
    endDate: new Date('2019-01-01'),
    comments: [],
    users: [{ id: 1, firstName: 'Viktor', lastName: 'Rejv' }, { id: 120, firstName: 'Erik', lastName: 'Lundin' },],
    maximumAttendees: 200,
    img: 'https://cdn2.photostockeditor.com/c/2912/animal-adult-black-puppy-in-yellow-raincoat-dog-dog-image.jpg',
    creator: 'Pedro',
  },
]
test('Should have a title', () => {

  render(
    <BrowserRouter><Meetup meetup={meetup[0]} /> </BrowserRouter>)
  const titleEl = screen.getByText(/My event/i)

  expect(titleEl).toBeInTheDocument()
})

test('Should have a description', () => {
  render( <BrowserRouter><Meetup meetup={meetup[0]} /> </BrowserRouter>)
  const descriptionEl = screen.getByText(/Text content/i)

  expect(descriptionEl).toBeInTheDocument()
})

test('Should display date in locale sv-se', () => {
  render( <BrowserRouter><Meetup meetup={meetup[0]} /></BrowserRouter>)
  const dateEl = screen.getByTestId('date').innerHTML
  const convertedDate = dateConverter(meetup[0].startDate)

  expect(dateEl).toEqual(convertedDate)
})

test('Should display number of attendees / maximum attendees', () => {
  render( <BrowserRouter><Meetup meetup={meetup[0]} /></BrowserRouter>)
  const numberOfAttendees = meetup[0].users.length
  const attendeesEl = screen.getByTestId('attendees').innerHTML

  expect(attendeesEl).toEqual(`${numberOfAttendees} av ${meetup[0].maximumAttendees} 👨`)
})

test('Should display number of comments', () => {
  render( <BrowserRouter><Meetup meetup={meetup[0]} /></BrowserRouter>)
  const numberOfComments = meetup[0].comments.length
  const commentEl = screen.getByTestId('comments').innerHTML

  expect(commentEl).toEqual(`${numberOfComments} 💬`)
})

test('Should not show that the users is attending', () => {
  render(<BrowserRouter><Meetup meetup={meetup[0]} /></BrowserRouter>)
  const attending = isAttending(meetup[0].users)
  const attendingEl = screen.queryByText(/attending/i)

  expect(attending).toBeFalsy()
  expect(attendingEl).toBeNull()
})

test('Should show that the users is attending meetup', () => {
  render(<BrowserRouter><Meetup meetup={meetup[1]} /></BrowserRouter>)
  const attending = isAttending(meetup[1].users)
  const attendingEl = screen.getByText(/anmäld/i)

  expect(attending).toBeTruthy()
  expect(attendingEl).toBeInTheDocument()
}) 