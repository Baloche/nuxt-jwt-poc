import jwt from 'jsonwebtoken'
import { jwtPublicKey } from './token.get'

export default defineEventHandler<{ body: { username: string, password: string } }>(async (event) => {
  const body = await readBody(event)
  const token = jwt.sign({ userId: `${body.username}-${body.password}` }, jwtPublicKey)
  setCookie(event, 'token', token, { httpOnly: true, sameSite: 'none', secure: true, maxAge: 60 * 60 * 24 * 7 })
  return null
})
