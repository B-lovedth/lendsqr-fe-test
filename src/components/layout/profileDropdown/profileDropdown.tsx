'use client'
import { useState, useRef, useEffect } from 'react'
import styles from './profileDropdown.module.scss'
import { FiChevronDown } from 'react-icons/fi'
import Image from 'next/image'
import { useAuth } from '@/context/AuthContext'

const ProfileDropdown=() =>{
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const {logout} = useAuth() 

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className={styles.profile} ref={ref}>
      <div className={styles.trigger} onClick={() => setOpen(!open)}>
        <Image src="/icons/avatar.png" alt="Admin" width={24} height={24} className={styles.avatar} />
        <span className={styles.name}>Adedeji</span>
        <FiChevronDown className={styles.chevron} />
      </div>

      {open && (
        <div className={styles.dropdown}>
          <a href="/profile">Profile</a>
          <button onClick={() => logout()}     >Logout</button>
        </div>
      )}
    </div>
  )
}

export default ProfileDropdown;