"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import styles from "./details.module.scss";
import { UserDetail } from "@/types/user";
import { BsArrowLeft } from "react-icons/bs";
import UserDetailsSkeleton from "@/components/layout/skeletonLoader/UserDetailsSkeleton";

export default function UserDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const [user, setUser] = useState<UserDetail | null>(null);
  const [selectedTab, setSelectedTab] = useState("General Details");

  const tabs = [
    "General Details",
    "Documents",
    "Bank Details",
    "Loans",
    "Savings",
    "App and System",
  ];
  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };
  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`https://688beb07cd9d22dda5cba641.mockapi.io/Users/${id}`);
      const data = await res.json();
      setUser(data);
    };
    fetchUser();
  }, [id]);

  if (!user) return <UserDetailsSkeleton/>
  
  const changeStatus = async (status: string) => {
    const res = await fetch(`https://688beb07cd9d22dda5cba641.mockapi.io/Users/${user.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    const updated = await res.json();
    setUser(updated);
  };
  return (
    <section className={styles.userDetails}>
      <button onClick={() => router.back()} className={styles.backButton}>
        <BsArrowLeft />
        Back to users
      </button>
      <div className={styles.top}>
        <h2>User Details</h2>
        <div className={styles.actions}>
         
          <button
            className={styles.blacklist}
            onClick={() => {
              changeStatus("Blacklisted");
            }}
          >
            Blacklist User
          </button>

          <button
            className={styles.activate}
            onClick={() => {
              changeStatus("Active");
            }}
          >
            Activate User
          </button>
        </div>
      </div>
      <div className={styles.header}>
        <div className={styles.userInfo}>
          <div className={styles.avatar}>👤</div>
          <div className={styles.meta}>
            <h2>{user.username}</h2>
            <p>{user.organization}</p>
          </div>
        </div>
        <div className={styles.tier}>
          {" "}
          <p> User Tier</p> ★★☆
        </div>
        <div className={styles.accountInfo}>
          <h2>{user.amount}</h2>
          <p>
            {user.bank}/{user.accountNumber}
          </p>
        </div>
        <div className={styles.tabs}>
            {
                tabs.map((tab,key)=>(
                <button
                    key={key}
                    className={`${styles.tab} ${selectedTab === tab ? styles.active : ""}`}
                    onClick={() => handleTabClick(tab)}>
                        {tab}
                    </button>

                ))
            }
        </div>
      </div>
      {selectedTab === "General Details" && (

      <div className={styles.body}>
        <div className={styles.section}>
          <h3>Personal Information</h3>
          <div className={styles.grid}>
            <div>
              <p>Phone</p>
              <strong> {user.phoneNumber}</strong>
            </div>
            <div>
              <p>Email</p>
              <strong> {user.email}</strong>
            </div>
            <div>
              <p>BVN</p>
              <strong> {user.bvn}</strong>
            </div>
            <div>
              <p>Gender</p>
              <strong>{user.gender}</strong>
            </div>
            <div>
              <p>Marital Status</p>
              <strong> {user.maritalStatus}</strong>
            </div>
            <div>
              <p>Children</p>
              <strong>{user.children}</strong>
            </div>
            <div>
              <p>Residence</p>
              <strong> {user.residence}</strong>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h3>Education & Employment</h3>
          <div className={styles.grid}>
            <div>
              <p>Level</p>
              <strong>{user.education.level}</strong>
            </div>
            <div>
              <p>Status</p>
              <strong>{user.education.status}</strong>
            </div>
            <div>
              <p>Sector</p>
              <strong> {user.education.sector}</strong>
            </div>
            <div>
              <p>Duration</p>
              <strong>{user.education.duration}</strong>
            </div>
            <div>
              <p>Office Email</p>
              <strong>{user.education.officeEmail}</strong>
            </div>
            <div>
              <p>Income</p>
              <strong>{user.education.income}</strong>
            </div>
            <div>
              <p>Repayment</p>
              <strong>{user.education.repayment}</strong>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h3>Socials</h3>
          <div className={styles.grid}>
            <div>
              <p>Twitter</p>
              <strong> {user.socials.twitter}</strong>
            </div>
            <div>
              <p>Facebook</p>
              <strong> {user.socials.facebook}</strong>
            </div>
            <div>
              <p>Instagram</p>
              <strong> {user.socials.instagram}</strong>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h3>Guarantors</h3>
          {user.guarantors.map((g, i) => (
            <div className={styles.grid} key={i}>
              <div>
                <p>Name</p>
                <strong> {g.name}</strong>
              </div>
              <div>
                <p>Email</p>
                <strong> {g.email}</strong>
              </div>
              <div>
                <p>Phone</p>
                <strong>{g.phoneNumber}</strong>
              </div>
              <div>
                <p>Relationship</p>
                <strong>{g.relationship}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
)}
    </section>
  );
}
