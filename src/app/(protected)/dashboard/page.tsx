'use client';
import styles from './dashboard.module.scss';

export default function DashboardPage() {
  return (
    <section className={styles.dashboard}>
      <h1>Welcome back 👋</h1>
      <p className={styles.sub}>Here’s a quick overview of the platform</p>

      <div className={styles.cards}>
        <div className={styles.card}>
          <h3>Total Users</h3>
          <p>2,312</p>
        </div>
        <div className={styles.card}>
          <h3>Active Loans</h3>
          <p>843</p>
        </div>
        <div className={styles.card}>
          <h3>Pending Requests</h3>
          <p>129</p>
        </div>
      </div>
    </section>
  );
}
