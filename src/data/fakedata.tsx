import { IMeetup } from "../interface/Meetup.interface"

export const fakeups: IMeetup[] = [
  {
    id: 1,
    title: 'Hamburger mingle',
    description: 'Välkommen till stans godaste mingle! Vi står för maten och ni för minglet.',
    createdDate: new Date('2021-12-01'),
    startDate: new Date('2022-05-01'),
    endDate: new Date('2022-05-01'),
    comments: [],
    users: [{ id: 15, firstName: 'Pelle', lastName: 'Depp' }, { id: 16, firstName: 'John', lastName: 'Long' }, { id: 17, firstName: 'Jet', lastName: 'Chan' }],
    maximumAttendees: 100,
    img: 'https://assets.biggreenegg.eu/app/uploads/2017/12/05133526/topimage-mango-filled-hamburgers-800x500-600x375.jpg',
    creator: 'Adam',
  },
  {
    id: 2,
    title: 'Tech meet!',
    description: 'Nu är vi äntligen tillbaka! Årets Tech meet 2022 kommer bli det största genom tiderna.',
    createdDate: new Date('2022-04-01'),
    startDate: new Date('2022-05-03'),
    endDate: new Date('2022-05-03'),
    comments: [
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
    ],
    users: [{ id: 120, firstName: 'Henry', lastName: 'Andersson' }],
    maximumAttendees: 20,
    img: 'https://news.cgtn.com/news/2020-11-02/Analysis-China-is-betting-on-science-and-tech-like-never-before-V68V871ula/img/871ca9ce8b9941088260b6ed4ced4eeb/871ca9ce8b9941088260b6ed4ced4eeb.jpeg',
    creator: 'Daniel',
  },
  {
    id: 3,
    title: '”The Music quiz !',
    description: '”The Music Quiz” är det perfekta sättet att starta eller avsluta firmafesten. Här får deltagarna chans att visa upp sina kunskaper i musikens värld',
    createdDate: new Date('2018-12-01'),
    startDate: new Date('2019-01-01'),
    endDate: new Date('2019-01-01'),
    comments: [],
    users: [{ id: 1, firstName: 'Viktor', lastName: 'Rejv' }, { id: 2, firstName: 'Erik', lastName: 'Lundin' },],
    maximumAttendees: 200,
    img: 'https://cdn2.photostockeditor.com/c/2912/animal-adult-black-puppy-in-yellow-raincoat-dog-dog-image.jpg',
    creator: 'Fattaru',
  },

]