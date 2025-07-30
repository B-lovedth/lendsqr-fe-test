import styles from './skeletonLoader.module.scss'

const SkeletonLayout=() =>{
  return (
    <div className={styles.wrapper}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarBlock} />
        {[...Array(6)].map((_, i) => (
          <div key={i} className={styles.sidebarItem} />
        ))}
      </aside>

      <div className={styles.content}>
        <div className={styles.topbar}>
          <div className={styles.logo} />
          <div className={styles.search} />
          <div className={styles.topActions}>
            <div className={styles.docs} />
            <div className={styles.bell} />
            <div className={styles.profile} />
          </div>
        </div>

        <main className={styles.main}>
          {[...Array(8)].map((_, i) => (
            <div key={i} className={styles.tableRow} />
          ))}
        </main>
      </div>
    </div>
  )
}
export default SkeletonLayout;