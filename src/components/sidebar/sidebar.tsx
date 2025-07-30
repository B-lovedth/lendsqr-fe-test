import { sidebarSections } from '@/constants/navlinks'
import styles from './sidebar.module.scss'
import { usePathname } from 'next/navigation'
import Icon from '../layout/icon'
import Link from 'next/link'
import Image from 'next/image'

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className={styles.sidebar}>

        <div className={styles.section}>
          <div className={styles.linkGroup}>
            <Link href="/dashboard" className={`${styles.link} ${pathname === '/dashboard' ? styles.active : ''}`}>
              <Icon src='/icons/home.png' alt='Dashboard' size={20} className={styles.icon} />
              Dashboard
            </Link>
          </div>
        </div>

      {sidebarSections.map(section => (
        <div key={section.title} className={styles.section}>
          <p className={styles.sectionTitle}>{section.title}</p>
          <div className={styles.linkGroup}>

            {section.links.map(link => {
              console.log("Link:", link.icon)
                return(
                   <Link
                key={link.href}
                href={link.href}
                className={`${styles.link} ${pathname === link.href ? styles.active : ''}`}
              >
                <Icon src={link.icon} alt={link.label} size={20} className={styles.icon} />            
                {link.label}
              </Link>
                )
            }
             
            )}
           
          </div>
        </div>
      ))}
    </aside>
  )
}
