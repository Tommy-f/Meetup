import { useState, ChangeEvent } from "react"
import { Header } from "../components/header/Header"
import { Meetup } from "../components/meetup/Meetup"
import { fakeups } from "../data/fakedata"
import { useToggle } from "../hooks/useToggle"

function Home() {

const [filter, setFilter] = useState('')
const [sort, setSort] = useToggle()


if (sort === true) {
  fakeups.sort((a: any, b: any) => a.startDate - b.startDate)
} else {
  fakeups.sort((a: any, b: any) => b.createdDate - a.createdDate)
}

const results = fakeups.filter(f => f.title.toLowerCase().includes(filter) || filter === '')

const onUserSearch = (event: ChangeEvent<HTMLInputElement>) => {
  const lowerCaseUserInput = event.target.value.toLowerCase()
  setFilter(lowerCaseUserInput)
}

const AllMeetups = results.map((meetup) => {
  return (
    <div key={meetup.id} >
      <Meetup meetup={meetup} />
    </div>
  )
})

  return (
    <div className="wrapper">
    <Header onUserSearch={onUserSearch} setSort={setSort} />
    {AllMeetups}
  </div>
  )
}

export default Home