"use client";
import styles from "./mobileSidebar.module.scss";
import {sidebarSections  } from "@/constants/navlinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiX } from "react-icons/fi";

interface MobileSidebarProps {
  onClose: () => void;
}

export default function MobileSidebar({ onClose }: MobileSidebarProps) {
  const pathname = usePathname();

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
    </aside>
  );
}
