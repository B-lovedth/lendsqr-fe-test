"use client";
import Icon from "@/components/layout/icon";
import styles from "./usersTable.module.scss";
import { User } from "@/types/user";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FiFilter, FiMoreVertical } from "react-icons/fi";

interface UsersTableProps {
  users: User[];
  onFilterToggle: () => void;
}

export default function UsersTable({ users, onFilterToggle }: UsersTableProps) {
const [openActionUserId, setOpenActionUserId] = useState<string | null>(null)
  const router = useRouter();
   const changeStatus = async (status: string, id:string) => {
    const res = await fetch(`https://688beb07cd9d22dda5cba641.mockapi.io/Users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    const updated = await res.json();
    console.log(updated)
  };
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Organization</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Date Joined</th>
            <th>Status</th>
            <th>
              <button onClick={onFilterToggle}>
                <FiFilter />
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.organization}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.dateJoined}</td>
              <td>
                <span
                  className={`${styles.badge} ${
                    styles[user.status.toLowerCase()]
                  }`}
                >
                  {user.status}
                </span>
              </td>
              <td>
                <button
                  className={styles.actionButton}
                  onClick={(e) => {
                    setOpenActionUserId(openActionUserId === user.id ? null : user.id);
                  }}> 
                <FiMoreVertical className={styles.menuIcon} />
                  </button>
              </td>
              {
                openActionUserId === user.id &&(

              <div className={styles.userActions}>
                <button
                  className={styles.viewDetails}
                  onClick={() => router.push(`/users/${user.id}`)}
                >
                 <FaEye/> <span>View Details</span>
                </button>
                <button
                  onClick={() =>
                    changeStatus("Blacklisted", user.id)
                   } 
                >
                <Icon src="/icons/user-delete.png" alt="Edit Icon" />
                <span>  Blacklist User</span>
                </button>
                <button
                  onClick={(e) => {
                    changeStatus("Active", user.id);}}
                >
                <Icon src="/icons/user-check-outline.png" alt="Edit Icon" />
                <span>Activate User</span>
                </button>
              </div>
                )
              }
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
