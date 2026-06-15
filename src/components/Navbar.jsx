import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getLoginUrl, getAvatar, clearToken } from '../discord'
import styles from './Navbar.module.css'

export default function Navbar({ user, setUser }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  function logout() {
    clearToken()
    setUser(null)
    navigate('/')
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoIcon}>V</span>
          <span className={styles.logoText}>V33 BOT</span>
        </Link>

        <div className={styles.links}>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
          {user ? (
            <div className={styles.userMenu}>
              <img src={getAvatar(user)} alt="avatar" className={styles.avatar}
                onClick={() => setMenuOpen(!menuOpen)} />
              <span className={styles.username} onClick={() => setMenuOpen(!menuOpen)}>
                {user.username}
              </span>
              {menuOpen && (
                <div className={styles.dropdown}>
                  <button onClick={logout}>Logout</button>
                </div>
              )}
            </div>
          ) : (
            <a href={getLoginUrl()} className={styles.loginBtn}>
              <DiscordIcon /> Login
            </a>
          )}
        </div>
      </div>
    </nav>
  )
}

function DiscordIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 71 55" fill="currentColor">
      <path d="M60.1 4.9A58.5 58.5 0 0 0 45.6.8a40 40 0 0 0-1.8 3.6 54.2 54.2 0 0 0-16.2 0A39.2 39.2 0 0 0 25.8.8 58.4 58.4 0 0 0 11.3 5C1.6 19.6-1 33.8.3 47.8A58.8 58.8 0 0 0 18.1 55a44 44 0 0 0 3.8-6.1 38.3 38.3 0 0 1-6-2.9l1.5-1.1a42 42 0 0 0 35.9 0l1.5 1.1a38.4 38.4 0 0 1-6 2.9 43.8 43.8 0 0 0 3.8 6.1A58.7 58.7 0 0 0 70.7 47.8C72.2 31.6 67.9 17.6 60.1 4.9ZM23.7 39.2c-3.5 0-6.4-3.2-6.4-7.1s2.8-7.1 6.4-7.1c3.5 0 6.4 3.2 6.4 7.1s-2.9 7.1-6.4 7.1Zm23.6 0c-3.5 0-6.4-3.2-6.4-7.1s2.8-7.1 6.4-7.1c3.5 0 6.4 3.2 6.4 7.1s-2.9 7.1-6.4 7.1Z"/>
    </svg>
  )
}
