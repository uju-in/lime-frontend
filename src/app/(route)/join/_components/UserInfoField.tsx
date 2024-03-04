'use client'

import { ChangeEvent, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { SignUpState } from '@/app/_types/signUp.types'
import useGetSearchParam from '@/app/_hook/common/useGetSearchParams'
import {
  validateForm,
  validateNickname,
} from '@/app/(route)/join/_utils/validation'
import CategorySelector from '@/app/_components/categorySelector'
import useNicknameValidation from '@/app/_hook/api/auth/useNicknameValidation'
import useSignUp from '@/app/_hook/api/auth/useSignUp'
import { setCookie } from '@/app/_utils/cookie'
import { cn } from '@/app/_utils/twMerge'
import CareerSelector from './CareerSelector'

export default function UserInfoField() {
  const router = useRouter()

  const token = useGetSearchParam('accessToken')

  const { mutateAsync: verifyUniqueNickname } = useNicknameValidation()
  const { mutateAsync: signUp } = useSignUp()

  const [isDuplicated, setIsDuplicated] = useState<boolean>(true)
  const [profile, setProfile] = useState<SignUpState>({
    nickname: '',
    career: null,
    mbti: '',
    content: '',
    hobby: '',
  })

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

    const isValid = validateForm({
      isDuplicated,
      career: profile.career,
      content: profile.content,
    })

    if (!isValid) return

    const data = await signUp(profile)

    if (data === 200) {
      router.push('/')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-[436px]">
        <label htmlFor="nickname" className="font-[600]">
          닉네임
        </label>
        <div className="mt-[16px]">
          <input
            id="nickname"
            name="nickname"
            minLength={1}
            maxLength={25}
            disabled={!isDuplicated}
            onChange={handleChange}
            placeholder="닉네임을 입력해 주세요. (최대 25자)"
            className={cn(
              'mr-[16px] h-[48px] w-[324px] rounded-[4px] border border-[#BDBDBD] px-[12px] outline-0',
              {
                'bg-[#DADADA]': !isDuplicated,
                'bg-white': isDuplicated,
              },
            )}
          />
          <button
            className="h-[48px] w-[96px] rounded-[4px] bg-black font-[600] text-white"
            type="button"
            onClick={
              isDuplicated
                ? handleValidationNickname
                : () => setIsDuplicated(true)
            }
          >
            {isDuplicated ? '중복확인' : '변경'}
          </button>
        </div>
      </div>
      <div className="mt-[36px]">
        <label htmlFor="content" className="font-[600]">
          자기소개
        </label>
        <textarea
          id="content"
          name="content"
          maxLength={300}
          placeholder="자기소개를 입력해 주세요. (최대 300자)"
          className="mt-[16px] h-[140px] w-[436px] resize-none rounded-[4px] border border-[#BDBDBD] px-[12px] pt-[14px] outline-0"
          onChange={handleChange}
          required
        />
      </div>
      <div className="mt-[36px]">
        <label htmlFor="mbti" className="font-[600]">
          MBTI
        </label>
        <input
          id="mbti"
          name="mbti"
          onChange={handleChange}
          placeholder="MBTI를 입력해 주세요."
          className="mt-[16px] h-[48px] w-[436px] rounded-[4px] border border-[#BDBDBD] px-[12px] outline-0"
          maxLength={4}
          minLength={4}
          required
        />
      </div>
      <p className="mt-[36px] font-[600]">대표 취미</p>
      <CategorySelector
        setCategory={(hobby) => setProfile({ ...profile, hobby })}
      />
      <div className="mt-[36px]">
        <p className="mb-[16px] font-[600]">취미 경력</p>
        <CareerSelector
          setCareer={(career) => setProfile({ ...profile, career })}
        />
      </div>
      <div className="h-[198px]">
        <button
          className="mt-[148px] flex h-[48px] w-[436px] items-center justify-center rounded-[4px] bg-black font-[600] text-white"
          type="submit"
        >
          회원가입
        </button>
      </div>
    </form>
  )
}
