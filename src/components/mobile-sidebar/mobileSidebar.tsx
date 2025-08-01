"use client";
import styles from "./mobileSidebar.module.scss";
import {sidebarSections  } from "@/constants/navlinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiX } from "react-icons/fi";
import Icon from "../layout/icon";
import { useState } from "react";

interface MobileSidebarProps {
  onClose: () => void;
  action:()=>void
}
const MobileSidebar=({ onClose, action }: MobileSidebarProps)=> {
  const pathname = usePathname();
    const [isDropdown, setIsDropdown] = useState(false);
  

  return (
    <aside className={styles.mobileSidebar}>
      <div className={styles.header}>
        <input
          type="text"
          placeholder="Search..."
          className={styles.search}
        />
        <button className={styles.close} onClick={onClose}>
          <FiX />
        </button>
      </div>
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

      {sidebarSections.map((section, i) => (
        <div key={i} className={styles.section}>
          <h4>{section.title}</h4>
          {section.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.link} ${
                pathname === link.href ? styles.active : ""
              }`}
              onClick={onClose}
            >
              <img src={link.icon} alt={link.label} className={styles.icon} />
              {link.label}
            </Link>
          ))}
        </div>
      ))}
      <div className={styles.section}>
        <div className={styles.linkGroup}>
          <button
            onClick={action}
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

export default MobileSidebar;