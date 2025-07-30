import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import styles from "./topbar.module.scss";
import Link from "next/link";
import SearchBar from "../layout/searchbar/searchbar";
import ProfileDropdown from "../layout/profileDropdown/profileDropdown";
const Topbar: React.FC = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

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
    </header>
  );
}
export default Topbar;