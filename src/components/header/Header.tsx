import { HeaderProps } from '../../interface/Header.interface'
import styles from './header.module.css'


export const Header = (props: HeaderProps) => {

  const { onUserSearch, setSort } = props

  return (
    <div className={styles.wrapper}>
      <div>
        <input role="searchbox" className={styles.searchbar} onChange={onUserSearch} type="text" placeholder="Sök efter event här!" />
        <input data-testid="toggle" onChange={setSort} type="checkbox" name="sort" id="sort" /><label> Sortera i Kronologisk ordning</label>
      </div>
    </div>
  )
}
