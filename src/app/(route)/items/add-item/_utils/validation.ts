/* url 검증 - 다나와, 네이버, 쿠팡만 허용 */
const validateUrl = (url: string) => {
  const urlPattern =
    /^(https?:\/\/)?(www\.)?(shopping\.naver\.com|prod\.danawa\.com|coupang\.com)/

  if (!urlPattern.test(url)) {
    alert('쿠팡, 네이버 쇼핑, 다나와만 사용 가능합니다!')

    return false
  }

  return true
}

export { validateUrl }
