export const jwtPublicKey = 'This is the public key'

export default defineEventHandler((event) => {
  setResponseHeaders(event, {
    'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'Access-Control-Allow-Origin': 'https://epack-manager.new.com',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Expose-Headers': '*',
  })
  const token = getCookie(event, 'token')
  if (!token) {
    throw createError({ statusCode: 401 })
  }
  return token
})
