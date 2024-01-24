/* url 검증 - 다나와, 네이버, 쿠팡만 허용 */
const validateUrl = (url: string) => {
  const urlPattern =
    /^(https?:\/\/)?(www\.)?(shopping\.naver\.com|prod\.danawa\.com|coupang\.com|smartstore\.naver.com)/

  if (!urlPattern.test(url)) {
    alert('사용 가능한 URL을 입력해 주세요.')

    return false
  }

  return true
}

export { validateUrl }
