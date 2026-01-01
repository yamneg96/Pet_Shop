# 🐾 AddisPet — MVP Pet Shop Platform

AddisPet is a modern MVP pet shop and adoption platform built for **Addis Ababa, Ethiopia**.  
It focuses on simplicity, performance, and a smooth user experience.

---

## ✨ Features

- 🔐 Google Authentication (NextAuth)
- 🌗 Dark / Light Theme
- 💾 Save & Bookmark items
- 🛒 Basic Cart & Orders
- 💳 Payments (Chapa + Stripe/PayPal – MVP)
- 🎬 Smooth animations (Framer Motion / GSAP)
- 📱 Fully responsive design

---

## 🛠 Tech Stack

- **Frontend:** Next.js (App Router)
- **Backend:** Express.js
- **Database:** MongoDB
- **Auth:** Google OAuth
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Payments:** Chapa, Stripe, PayPal

---

## 🚀 Getting Started

### 1️⃣ Clone the project
```bash
git clone https://github.com/yourname/addis-pet-shop.git
cd addis-pet-shop
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Environment setup

Create `.env.local` and add:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret
GOOGLE_CLIENT_ID=your-id
GOOGLE_CLIENT_SECRET=your-secret
MONGO_URI=your-mongodb-uri
```

### 4️⃣ Run the app

```bash
npm run dev
```

---

## 🔐 Authentication

* Google OAuth only
* Secure JWT-based sessions
* Protected routes supported

---

## 📦 MVP Notes

* Payments may run in sandbox mode
* Admin is minimal
* Built for validation & iteration

---

## 📍 Target Market

🇪🇹 Addis Ababa, Ethiopia

---

## 📄 License

MIT
