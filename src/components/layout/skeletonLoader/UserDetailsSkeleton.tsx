'use client';
import styles from './skeleton.module.scss';

const UserDetailsSkeleton=()=> {
  return (
    <section className={styles.skeleton}>
      <div className={styles.header}>
        <div className={styles.avatar} />
        <div className={styles.meta}>
          <div className={styles.lineShort} />
          <div className={styles.lineMedium} />
          <div className={styles.lineTiny} />
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.title} />
        <div className={styles.grid}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div className={styles.field} key={i} />
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.title} />
        <div className={styles.grid}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div className={styles.field} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default UserDetailsSkeleton;