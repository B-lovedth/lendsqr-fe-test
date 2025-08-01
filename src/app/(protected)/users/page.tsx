"use client";

import { useEffect, useState } from "react";
import UserCards from "./user-cards/userCards";
import UserFilters from "./user-filters/userFilters";
import UsersTable from "./user-table/usersTable";
import styles from "./page.module.scss";
import { UserDetail } from "@/types/user";
const UsersPage = () => {
  const [filters, setFilters] = useState<any>({});
  const [page, setPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [pageSize, setPageSize] = useState(10);

  const [users, setUsers] = useState<UserDetail[]>([]);
  const fetchUsers = async () => {
    try {
      const res = await fetch(
        "https://688beb07cd9d22dda5cba641.mockapi.io/Users"
      );
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error("Failed to fetch users:", err);
    }
  };
  useEffect(() => {
    fetchUsers();
  });
  const handleToggleFilters = () => {
    setShowFilters((prev) => !prev);
  };

  const handleFilter = (filters: any) => {
    setFilters(filters);
    setShowFilters(false);
  };

  const filtered = users.filter((user) => {
    return (
      (!filters.organization || user.organization === filters.organization) &&
      (!filters.username ||
        user.username.toLowerCase().includes(filters.username.toLowerCase())) &&
      (!filters.email ||
        user.email.toLowerCase().includes(filters.email.toLowerCase())) &&
      (!filters.phoneNumber || user.phoneNumber.includes(filters.phone)) &&
      (!filters.status || user.status === filters.status)
    );
  });

  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);
  const totalPages = Math.ceil(filtered.length / pageSize);

  function getPaginationPages(current: number, total: number) {
    const delta = 2;
    const range = [];

    for (
      let i = Math.max(2, current - delta);
      i <= Math.min(total - 1, current + delta);
      i++
    ) {
      range.push(i);
    }

    if (current - delta > 2) range.unshift("...");
    if (current + delta < total - 1) range.push("...");

    range.unshift(1);
    if (total > 1) range.push(total);

    return range;
  }

  return (
    <section className={styles.usersPage}>
      <h1>Users</h1>
      <UserCards />
      <div style={{ position: "relative" }}>
        {showFilters && <UserFilters onFilter={handleFilter} />}
        <UsersTable users={paginated} onFilterToggle={handleToggleFilters} />
        <div
          style={{
            gap: "1rem",
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1rem",
            flexWrap: "wrap",
          }}
        >
          <div>
            Showing{" "}
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setPage(1); // Reset to page 1
              }}
              style={{
                padding: "4px 8px",
                borderRadius: 4,
                border: "1px solid #ccc",
              }}
            >
              {[10, 25, 50, 100].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>{" "}
            out of {filtered.length}
          </div>

          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              style={{
                padding: "6px 10px",
                background: "#eee",
                color: "#000",
                border: "none",
                borderRadius: 4,
                cursor: page === 1 ? "not-allowed" : "pointer",
              }}
            >
              {"<"}
            </button>

            {getPaginationPages(page, totalPages).map((p, i) => (
              <button
                key={i}
                onClick={() => typeof p === "number" && setPage(p)}
                disabled={p === "..."}
                style={{
                  padding: "6px 10px",
                  fontWeight: page === p ? "Bold" : "400",
                  background:"transparent",
                  color:"#000",
                  border: "none",
                  borderRadius: 4,
                  cursor: p === "..." ? "default" : "pointer",
                }}
              >
                {p}
              </button>
            ))}

            <button
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={page === totalPages}
              style={{
                padding: "6px 10px",
                background: "#eee",
                color: "#000",
                border: "none",
                borderRadius: 4,
                cursor: page === totalPages ? "not-allowed" : "pointer",
              }}
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsersPage;
