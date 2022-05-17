import styles from './meetup.module.css'
import { MeetupProps } from '../../interface/Meetup.interface';
import dateConverter from '../../Utils/dateConverter';
import isAttending from '../../Utils/isAttending';
import { useNavigate } from 'react-router-dom';

function Attending() {
  return <div className={styles.status}><p>Anmäld</p></div>
}

function NotAttending() {
  return null;
}


export const Meetup = (props: MeetupProps) => {
  const { id, title, description, startDate, img, users, maximumAttendees, comments } = props.meetup
  let navigate = useNavigate()

  return (
    <div className={styles.wrapper}>
      <div className={styles.card} onClick={() => navigate(`/event/${id}`)}>
        <div className={styles.header}>
          <h1>{title}</h1>
        </div>
        {isAttending(users) ? <Attending /> : <NotAttending />}
        <div className={styles.img}>
          <img className='img' src={img} alt="Event" />
        </div>
        <div className={styles.main}>
          {description}
        </div>
        <div className={styles.footer}>
          <div className={`${styles.stats} ${styles.date}`}>
            <p data-testid="date" className='startDate'>{dateConverter(startDate)}</p>
          </div>
          <div className={`${styles.stats} ${styles.attend}`}>
            <p data-testid="attendees">{users.length} av {maximumAttendees} 👨</p>
          </div>
          <div className={`${styles.stats} ${styles.comment}`}>
            <p data-testid="comments" >{comments.length} 💬</p>
          </div>
        </div>
      </div>
    </div >
  );
};

