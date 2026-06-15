# V33 BOT — Dashboard

Landing page สำหรับ V33 BOT พร้อม Login with Discord

## Tech Stack
- React 18 + Vite
- React Router v6
- CSS Modules

## Setup

### 1. Clone & Install
```bash
git clone https://github.com/YOUR_USERNAME/v33bot-dashboard.git
cd v33bot-dashboard
npm install
```

### 2. ตั้งค่า .env
```bash
cp .env.example .env
```
แก้ไข `.env`:
```
VITE_DISCORD_CLIENT_ID=1493997261452218520
VITE_DISCORD_REDIRECT_URI=http://localhost:5173/callback
VITE_DISCORD_SERVER=jYxCgsmHGk
```

### 3. ตั้งค่า Discord Developer Portal
1. ไปที่ https://discord.com/developers/applications
2. เลือก Application ของคุณ
3. ไปที่ **OAuth2 → Redirects**
4. เพิ่ม `http://localhost:5173/callback` (dev)
5. เพิ่ม `https://your-domain.vercel.app/callback` (production)

### 4. Run dev
```bash
npm run dev
```

## Deploy บน Vercel

### วิธีที่ 1: Vercel CLI
```bash
npm i -g vercel
vercel
```

### วิธีที่ 2: GitHub + Vercel Dashboard
1. Push code ขึ้น GitHub
2. ไปที่ https://vercel.com → New Project
3. Import repository นี้
4. ตั้งค่า Environment Variables:
   - `VITE_DISCORD_CLIENT_ID` = `1493997261452218520`
   - `VITE_DISCORD_REDIRECT_URI` = `https://YOUR_DOMAIN.vercel.app/callback`
   - `VITE_DISCORD_SERVER` = `jYxCgsmHGk`
5. Deploy!

### หลัง Deploy
อย่าลืมเพิ่ม Redirect URI จริงใน Discord Developer Portal ด้วยนะ

## โครงสร้างไฟล์
```
src/
├── components/
│   ├── Navbar.jsx
│   └── Navbar.module.css
├── pages/
│   ├── Home.jsx
│   ├── Home.module.css
│   └── Callback.jsx
├── discord.js       ← Discord OAuth utils
├── App.jsx
├── main.jsx
└── index.css
```
