# Lendsqr FE Test - Admin Dashboard

A clean, mobile-responsive admin dashboard built with **Next.js 15**, **TypeScript**, **SCSS Modules**, and **MockAPI** as a cloud backend.

---

### 🚀 Live Deployment

🔗 [https://solomon-great-lendsqr-fe-test.vercel.app/login](https://solomon-great-lendsqr-fe-test.vercel.app/login)

---

### 🔐 Admin Login Credentials

- **Email:** `admin@lendsqr.com`  
- **Password:** `admin123`

---

### ⚙️ Tech Stack

- **Framework:** Next.js App Router (v15)
- **Language:** TypeScript
- **Styling:** SCSS Modules
- **State Management:** React Context API
- **Backend:** [MockAPI.io](https://mockapi.io)
- **Icons:** React Icons & PNGs from Figma

---


---

### ✅ Features

- 🔐 **Authentication with MockAPI**
- 📂 **Protected Routes** via `layout.tsx` + AuthContext
- 📱 **Mobile Sidebar** with collapsible sections and search
- 🎛️ **User Filtering** by organization, email, status, etc.
- 🔄 **Pagination & Dynamic Page Size**
- 📋 **User Table & Detail View**
- ✅ **Blacklist / Activate User** with status update (via `PATCH`)
- 🎨 **Skeleton Loaders** during async operations
- 📱 **Fully Responsive UI** for both desktop and mobile

---

### 🧪 API with MockAPI

MockAPI endpoints were used for dynamic data operations such as:

- `GET /userDetails` – fetch all users
- `GET /userDetails/:id` – fetch single user detail
- `PUT /userDetails/:id` – update user status

---

### 🛠️ Setup Instructions

```bash
# Install dependencies
yarn install

# Start Next.js dev server
yarn dev


