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

  return res.ok
}
