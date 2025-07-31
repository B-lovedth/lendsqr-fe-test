import { sidebarSections } from "@/constants/navlinks";
import styles from "./sidebar.module.scss";
import { usePathname } from "next/navigation";
import Icon from "../layout/icon";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
const Sidebar=()=> {
  const pathname = usePathname();
  const { logout } = useAuth();
  const [isDropdown, setIsDropdown] = useState(false);

  return (
    <aside className={styles.sidebar}>
     <div className={styles.section}>
  <div className={styles.dropdown}>
    <button className={styles.dropdownToggle}
      onClick={() => setIsDropdown(!isDropdown)}>
      <Icon
        src="/icons/briefcase.png"
        alt="briefcase"
        size={20}
        className={styles.icon}
      />
      Select an Organization
    </button>
    {isDropdown && (
    <div className={styles.dropdownMenu}>
      <Link
        href="#"
        className={`${styles.link} styles.active : ""
        }`}
      >
        Lendsqr
      </Link>
      <Link
        href="#"
        className={`${styles.link} styles.active : ""
        }`}
      >
        GreatCorp
      </Link>
    </div>
    )}
  </div>
</div>

      <div className={styles.section}>
        <div className={styles.linkGroup}>
          <Link
            href="/dashboard"
            className={`${styles.link} ${
              pathname === "/dashboard" ? styles.active : ""
            }`}
          >
            <Icon
              src="/icons/home.png"
              alt="Dashboard"
              size={20}
              className={styles.icon}
            />
            Dashboard
          </Link>
        </div>
      </div>

      {sidebarSections.map((section) => (
        <div key={section.title} className={styles.section}>
          <p className={styles.sectionTitle}>{section.title}</p>
          <div className={styles.linkGroup}>
            {section.links.map((link) => {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.link} ${
                    pathname === link.href ? styles.active : ""
                  }`}
                >
                  <Icon
                    src={link.icon}
                    alt={link.label}
                    size={20}
                    className={styles.icon}
                  />
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
      <div className={styles.section}>
        <div className={styles.linkGroup}>
          <button
            onClick={() => logout()}
            className={`${styles.link} ${
              pathname === "/profile" ? styles.active : ""
            }`}
          >
            <Icon
              src="/icons/sign-out.png"
              alt="Profile"
              size={20}
              className={styles.icon}
            />
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;