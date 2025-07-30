import styles from './searchbar.module.scss'
import { FiSearch } from 'react-icons/fi'

export default function SearchBar() {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search for anything"
        className={styles.input}
      />
      <button  className={styles.icon}>

      <FiSearch/>
      </button>
    </div>
  )
}
