'use client'

import { ChangeEvent, useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { SignUpState } from '@/app/_types/signUp.types'
import useGetSearchParam from '@/app/_hook/common/useGetSearchParams'
import {
  validateForm,
  validateNickname,
} from '@/app/(route)/(withoutLayout)/join/_utils/validation'
import useNicknameValidation from '@/app/_hook/api/auth/useNicknameValidation'
import useSignUp from '@/app/_hook/api/auth/useSignUp'
import { setCookie } from 'cookies-next'
import { useRecoilValue } from 'recoil'
import { editProfileState } from '@/app/_atoms/editProfileState'
import useEditProfile from '@/app/_hook/api/auth/useEditProfile'
import UserInfoForm from './UserInfoForm'

export default function UserInfoField() {
  const router = useRouter()

  const recoilProfile = useRecoilValue(editProfileState)

  const token = useGetSearchParam('accessToken')

  const { mutateAsync: verifyUniqueNickname } = useNicknameValidation()
  const { mutateAsync: signUp } = useSignUp()
  const { mutateAsync: editProfile } = useEditProfile()

  const initialReviewState: SignUpState = {
    nickname: recoilProfile.nickname || '',
    career: recoilProfile.career,
    mbti: recoilProfile.mbti || null,
    content: recoilProfile.content || '',
    hobby: recoilProfile.hobby || '',
  }

  const [profile, setProfile] = useState<SignUpState>(initialReviewState)
  const [isDuplicated, setIsDuplicated] = useState<boolean>(true)
  const changeNickname = useMemo(
    () => recoilProfile.nickname,
    [recoilProfile.nickname],
  )

  useEffect(() => {
    if (token) {
      setCookie('accessToken', token)
    }
  }, [token])

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target

    setProfile((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  /* 닉네임 중복 확인 */
  const handleValidationNickname = async () => {
    const isValid = validateNickname(profile.nickname)

    if (!isValid) return

    const data = await verifyUniqueNickname(profile.nickname)

    if (data) {
      setIsDuplicated(true)
    } else {
      setIsDuplicated(false)
    }
  }

  /* 회원가입 */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const isChangeNickname =
      recoilProfile.career !== null && profile.nickname === changeNickname
        ? false
        : isDuplicated

    const isValid = validateForm({
      isDuplicated: isChangeNickname,
      career: profile.career,
      content: profile.content,
    })

    if (!isValid) return

    if (recoilProfile.career !== null) {
      const data = await editProfile(profile)

      if (data === 200) {
        setCookie('nickname', profile.nickname)

        router.push(`/mypage?nickname=${profile.nickname}`)
      }
    } else {
      const data = await signUp(profile)

      if (data === 200) {
        router.push('/')
      }
    }
  }

  return (
    <UserInfoForm
      profile={profile}
      isDuplicated={isDuplicated}
      handleChange={handleChange}
      handleValidationNickname={handleValidationNickname}
      handleSubmit={handleSubmit}
      setProfile={setProfile}
      setIsDuplicated={setIsDuplicated}
    />
  )
}
