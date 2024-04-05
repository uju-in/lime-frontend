export async function fetchTokenValidity(accessToken: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/members/check/jwt`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  )

  const data = await res.json()

  if (!res.ok) {
    throw data
  }

  return res.ok
}
