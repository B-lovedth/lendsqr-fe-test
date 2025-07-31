import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import styles from "./topbar.module.scss";
import Link from "next/link";
import SearchBar from "../layout/searchbar/searchbar";
import ProfileDropdown from "../layout/profileDropdown/profileDropdown";
import { FiMenu } from "react-icons/fi";

interface TopbarProps {
  onMenuClick: () => void;
}
const Topbar: React.FC<TopbarProps> = ({onMenuClick}:TopbarProps) => {
  return (
   <header className={styles.topbar}>
      <div className={styles.left}>
        <img src="/img/logo.svg" alt="Lendsqr Logo" />
      </div>

      <div className={styles.center}>
        <SearchBar />
      </div>

      <div className={styles.right}>
        <a href="/docs" className={styles.docs}>Docs</a>
        <Link href='/notifications' className={styles.notifications}>
          <img src="/icons/notification.png" alt="Notifications" className={styles.icon} />
        </Link>
        <ProfileDropdown />
      </div>
      <button className={styles.menuButton} onClick={onMenuClick}>
        <FiMenu />
      </button>
    </header>
  );
}
export default Topbar;