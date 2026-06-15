const CLIENT_ID = import.meta.env.VITE_DISCORD_CLIENT_ID
const REDIRECT_URI = import.meta.env.VITE_DISCORD_REDIRECT_URI

export function getLoginUrl() {
  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    response_type: 'token',
    scope: 'identify guilds',
  })
  return `https://discord.com/api/oauth2/authorize?${params}`
}

export async function fetchUser(token) {
  const res = await fetch('https://discord.com/api/users/@me', {
    headers: { Authorization: `Bearer ${token}` },
  })
  if (!res.ok) throw new Error('Invalid token')
  return res.json()
}

export function getAvatar(user) {
  if (!user.avatar) return `https://cdn.discordapp.com/embed/avatars/${Number(user.discriminator) % 5}.png`
  return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`
}

export function saveToken(token) {
  localStorage.setItem('discord_token', token)
}

export function getToken() {
  return localStorage.getItem('discord_token')
}

export function clearToken() {
  localStorage.removeItem('discord_token')
}
