"use client";
import style from "./style.module.scss";
import SkeletonLayout from "@/components/layout/skeletonLoader/skeletonLoader";
import Sidebar from "@/components/sidebar/sidebar";
import MobileSidebar from "@/components/mobile-sidebar/mobileSidebar";
import Topbar from "@/components/topbar/topbar";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  useEffect(() => {
    if (!user && !loading) {
      router.replace("/login");
    }
  }, [user, loading, router]);

  if (loading) return <SkeletonLayout />;

  return (
    <>
      <Topbar onMenuClick={() => setIsMobileSidebarOpen(true)} />
      <div className={style.layout}>
        <div className={style.sidebarWrapper}>
          <Sidebar />
        </div>

        <main>{children}</main>
      </div>

      {isMobileSidebarOpen && (
        <MobileSidebar onClose={() => setIsMobileSidebarOpen(false)} />
      )}
    </>
  );
};

export default ProtectedLayout;
