import styles from './Event.module.css'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Meetup } from '../components/meetup/Meetup'
import { IMeetup } from '../interface/Meetup.interface'
import { fakeups } from '../data/fakedata'
import { CommentSection } from '../components/commentSection/CommentSection'
import isAttending from '../Utils/isAttending'

function Event() {
  let navigate = useNavigate()
  let { id } = useParams()
  let idAsNumber = Number.parseInt(id!)

  const [meetup, setMeetup] = useState<IMeetup>()
  const [update, setUpdate] = useState<boolean>()

  function attendMeet() {
    const currentEvent = fakeups.find(e => e.id === meetup!.id)
    const user = { id: 120, firstName: 'Henry', lastName: 'Andersson' }
    currentEvent?.users.push(user)
    setUpdate(prevState => !prevState)
  }

  function unattendMeetup() {
    const currentEvent = fakeups.find(e => e.id === meetup!.id)
    const findIndex = currentEvent?.users.findIndex(user => user.id === 120)
    findIndex !== -1 && currentEvent?.users.splice(findIndex!, 1)
    setUpdate(prevState => !prevState)
  }

  function getMeetup(id: number) {
    const response = fakeups.find(e => e.id === id)
    if (response) setMeetup(response)
  }


  useEffect(() => {
    getMeetup(idAsNumber);
  }, [idAsNumber]);


  return (
    <>
    <div className={styles.header}>
      <button onClick={() => { navigate('/') }}>Gå tillbaka</button>
      </div>
      {
        meetup &&
        <>
          <Meetup meetup={meetup} />
          <div className={styles['attend-wrapper']}>
            {
            isAttending(meetup.users) 
            ? <button className={styles.unattend} onClick={unattendMeetup}>Avanmälan </button>
            : <button className={styles.attend} onClick={attendMeet}>Anmäl</button> 
            }
          </div>
          <CommentSection data={meetup.comments} meetupId={meetup.id} />
        </>
      }
    </>
  )
}

export default Event