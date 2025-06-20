import { parse } from 'accept-language-parser'

const SUPPORTED_LANGUAGES = ['pt', 'en', 'es', 'fr']
const DEFAULT_LANGUAGE = 'pt'

export const config = {
  matcher: ['/'] // só executa na raiz
}

export function middleware(request: Request) {
  const url = new URL(request.url)
  const pathname = url.pathname

  // 1. Evita redirecionamento se já houver locale
  if (SUPPORTED_LANGUAGES.some(lang => pathname.startsWith(`/${lang}`))) {
    return new Response(null, { status: 204 }) // segue normalmente
  }

  // 2. Tenta cookie
  const cookieHeader = request.headers.get('cookie') || ''
  const cookies = Object.fromEntries(cookieHeader.split('; ').map(c => c.split('=')))
  const langCookie = cookies['nf_lang']

  if (langCookie && SUPPORTED_LANGUAGES.includes(langCookie)) {
    url.pathname = `/${langCookie}${pathname}`
    return Response.redirect(url, 307)
  }

  // 3. Tenta detectar idioma via Accept-Language
  const acceptLang = request.headers.get('accept-language') || ''
  const parsed = parse(acceptLang)
  const bestMatch = parsed.find(lang => SUPPORTED_LANGUAGES.includes(lang.code))

  if (bestMatch) {
    url.pathname = `/${bestMatch.code}${pathname}`
    return Response.redirect(url, 307)
  }

  // 4. Fallback
  url.pathname = `/${DEFAULT_LANGUAGE}${pathname}`
  return Response.redirect(url, 307)
}
