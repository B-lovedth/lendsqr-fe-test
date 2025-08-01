'use client'

import styles from './userFilters.module.scss'
import { useState } from 'react'
export default function UserFilters({ onFilter }: { onFilter: (filters: any) => void }) {
  const [filters, setFilters] = useState({
    organization: '',
    username: '',
    email: '',
    date: '',
    phone: '',
    status: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value })
  }

  const reset = () => setFilters({
    organization: '', username: '', email: '', date: '', phone: '', status: ''
  })

  return (
    <div className={styles.panel}>
     
    <label>
      <p>Organization </p> 
      <select name="organization" value={filters.organization} onChange={handleChange}>
        <option value="">Select</option>
        <option value="Lendsqr">Lendstar</option>
        <option value="Irorun">Irorun</option>
      </select>
    </label>
    <label>
      Username
      <input name="username" placeholder="User" value={filters.username} onChange={handleChange} />
    </label>
    <label>
      Email
      <input name="email" placeholder="Email" value={filters.email} onChange={handleChange} />
    </label>
    <label>
      Date
      <input name="date" type="date" value={filters.date} onChange={handleChange} />
    </label>
    <label>
      Phone Number
      <input name="phone" placeholder="Phone Number" value={filters.phone} onChange={handleChange} />
    </label>
    <label>
      Status
      <select name="status" value={filters.status} onChange={handleChange}>
        <option value="">Select</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
        <option value="Pending">Pending</option>
        <option value="Blacklisted">Blacklisted</option>
      </select>
    </label>
     
      <div className={styles.actions}>
        <button className={styles.reset} onClick={reset}>Reset</button>
        <button className={styles.filter} onClick={() => onFilter(filters)}>Filter</button>
      </div>
    </div>
  )
}
