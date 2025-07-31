import styles from './userCards.module.scss'

const stats = [
  { label: 'USERS', value: '2,453', icon: '/icons/hero-user.png' },
  { label: 'ACTIVE USERS', value: '2,453', icon: '/icons/hero-active.png' },
  { label: 'USERS WITH LOANS', value: '12,453', icon: '/icons/hero-loans.png' },
  { label: 'USERS WITH SAVINGS', value: '102,453', icon: '/icons/hero-saving.png' },
]

export default function UserCards() {
  return (
    <div className={styles.cards}>
      {stats.map(({ label, value, icon }) => (
        <div className={styles.card} key={label}>
          <img src={icon} alt={label} className={styles.icon} />
          <p className={styles.label}>{label}</p>
          <h3 className={styles.value}>{value}</h3>
        </div>
      ))}
    </div>
  )
}
