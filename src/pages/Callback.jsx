import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchUser, saveToken } from '../discord'

export default function Callback() {
  const navigate = useNavigate()
  const [error, setError] = useState(null)

  useEffect(() => {
    const hash = window.location.hash.substring(1)
    const params = new URLSearchParams(hash)
    const token = params.get('access_token')

    if (!token) {
      setError('ไม่พบ token จาก Discord')
      return
    }

    saveToken(token)
    fetchUser(token)
      .then(() => navigate('/'))
      .catch(() => setError('Token ไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง'))
  }, [navigate])

  if (error) return (
    <div style={{ display:'flex', alignItems:'center', justifyContent:'center', minHeight:'100vh', flexDirection:'column', gap:16, color:'#ef4444' }}>
      <span style={{fontSize:32}}>⚠️</span>
      <p>{error}</p>
      <a href="/" style={{color:'#5865f2'}}>กลับหน้าแรก</a>
    </div>
  )

  return (
    <div style={{ display:'flex', alignItems:'center', justifyContent:'center', minHeight:'100vh', flexDirection:'column', gap:16, color:'#888' }}>
      <div className="spinner" />
      <p>กำลังเข้าสู่ระบบ...</p>
      <style>{`.spinner{width:36px;height:36px;border:3px solid #222;border-top-color:#5865f2;border-radius:50%;animation:spin .8s linear infinite}@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  )
}
