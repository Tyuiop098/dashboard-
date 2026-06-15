import { getLoginUrl, getAvatar } from '../discord'
import styles from './Home.module.css'

const FEATURES = [
  { icon: '🛡️', title: 'Moderation', desc: 'Ban, kick, mute และ warn ผู้ใช้ได้ง่ายๆ ด้วยคำสั่งเดียว' },
  { icon: '🎵', title: 'Music', desc: 'เปิดเพลงในช่อง Voice ได้จาก YouTube และ Spotify' },
  { icon: '👋', title: 'Welcome', desc: 'ตั้งข้อความต้อนรับสมาชิกใหม่ได้อย่างอิสระ' },
  { icon: '⚙️', title: 'Auto-Role', desc: 'มอบ Role อัตโนมัติเมื่อมีสมาชิกเข้า Server' },
  { icon: '📊', title: 'Statistics', desc: 'ดูสถิติ Server และการใช้งานบอทแบบ real-time' },
  { icon: '🔔', title: 'Logging', desc: 'บันทึก log ทุกกิจกรรมใน Server ของคุณ' },
]

const STATS = [
  { value: '128+', label: 'Servers' },
  { value: '48K+', label: 'Users' },
  { value: '2.8K', label: 'Commands/day' },
  { value: '99.9%', label: 'Uptime' },
]

export default function Home({ user }) {
  const SERVER = import.meta.env.VITE_DISCORD_SERVER

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroContent}>
          <div className={styles.badge}>✦ Discord Bot</div>
          <h1 className={styles.heroTitle}>
            {user ? `ยินดีต้อนรับ, ${user.username}!` : 'พบกับ V33 BOT'}
          </h1>
          <p className={styles.heroDesc}>
            บอทอเนกประสงค์สำหรับ Discord Server ของคุณ<br />
            ครบทุกฟีเจอร์ในบอทเดียว
          </p>
          <div className={styles.heroBtns}>
            {!user && (
              <a href={getLoginUrl()} className={styles.btnPrimary}>
                <DiscordIcon /> Login with Discord
              </a>
            )}
            <a
              href={`https://discord.gg/${SERVER}`}
              target="_blank"
              rel="noreferrer"
              className={styles.btnOutline}
            >
              Join Server
            </a>
          </div>
          {user && (
            <div className={styles.userCard}>
              <img src={getAvatar(user)} alt="avatar" className={styles.userAvatar} />
              <div>
                <div className={styles.userName}>{user.username}</div>
                <div className={styles.userTag}>เข้าสู่ระบบแล้ว ✓</div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className={styles.statsSection} id="features">
        <div className={styles.statsGrid}>
          {STATS.map(s => (
            <div key={s.label} className={styles.statItem}>
              <div className={styles.statValue}>{s.value}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className={styles.featuresSection}>
        <div className={styles.sectionLabel}>FEATURES</div>
        <h2 className={styles.sectionTitle}>ทำได้ทุกอย่างที่คุณต้องการ</h2>
        <div className={styles.featuresGrid}>
          {FEATURES.map(f => (
            <div key={f.title} className={styles.featureCard}>
              <div className={styles.featureIcon}>{f.icon}</div>
              <div className={styles.featureTitle}>{f.title}</div>
              <div className={styles.featureDesc}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className={styles.contactSection} id="contact">
        <div className={styles.sectionLabel}>CONTACT</div>
        <h2 className={styles.sectionTitle}>ติดต่อเรา</h2>
        <p className={styles.contactDesc}>มีคำถาม หรืออยากได้ฟีเจอร์เพิ่ม? เข้ามาคุยกันได้เลยใน Discord Server ของเรา</p>
        <a
          href={`https://discord.gg/${SERVER}`}
          target="_blank"
          rel="noreferrer"
          className={styles.btnPrimary}
        >
          <DiscordIcon /> เข้าร่วม Discord Server
        </a>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <span>© 2025 V33 BOT · Made with ♥</span>
      </footer>
    </div>
  )
}

function DiscordIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 71 55" fill="currentColor">
      <path d="M60.1 4.9A58.5 58.5 0 0 0 45.6.8a40 40 0 0 0-1.8 3.6 54.2 54.2 0 0 0-16.2 0A39.2 39.2 0 0 0 25.8.8 58.4 58.4 0 0 0 11.3 5C1.6 19.6-1 33.8.3 47.8A58.8 58.8 0 0 0 18.1 55a44 44 0 0 0 3.8-6.1 38.3 38.3 0 0 1-6-2.9l1.5-1.1a42 42 0 0 0 35.9 0l1.5 1.1a38.4 38.4 0 0 1-6 2.9 43.8 43.8 0 0 0 3.8 6.1A58.7 58.7 0 0 0 70.7 47.8C72.2 31.6 67.9 17.6 60.1 4.9ZM23.7 39.2c-3.5 0-6.4-3.2-6.4-7.1s2.8-7.1 6.4-7.1c3.5 0 6.4 3.2 6.4 7.1s-2.9 7.1-6.4 7.1Zm23.6 0c-3.5 0-6.4-3.2-6.4-7.1s2.8-7.1 6.4-7.1c3.5 0 6.4 3.2 6.4 7.1s-2.9 7.1-6.4 7.1Z"/>
    </svg>
  )
}
