'use client'

import { editProfileState } from '@/app/_atoms/editProfileState'
import { useUserProfile } from '@/app/_hook/api/mypage/useUserProfile'
import { useClientCookies } from '@/app/_hook/common/useClientCookies'
import useGetSearchParam from '@/app/_hook/common/useGetSearchParams'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useSetRecoilState } from 'recoil'

export default function Profile() {
  const clientCookies = useClientCookies()

  const currentUserNickname = clientCookies.getClientCookie('nickname')

  const postNickname =
    useGetSearchParam('nickname') || clientCookies.getClientCookie('nickname')

  const setProfile = useSetRecoilState(editProfileState)

  const router = useRouter()

  const { profile } = useUserProfile(postNickname)

  const { memberProfile } = profile
  const { nickname, profileImage, level, hobby, career, content, mbti } =
    memberProfile

  return (
    <div className="flex w-[340px] flex-col items-center bg-white p-[32px_45px_55px] text-[14px] shadow-[0_0_7.8px_3px_rgba(0,0,0,0.10)]">
      <Image
        src={profileImage}
        alt="profile image"
        width={113}
        height={113}
        className="mb-[23px] rounded-full"
        loading="eager"
      />
      <p className="mb-[8px] text-[20px] font-bold">{nickname}</p>
      <p className="mb-[12px] text-[16px] font-bold text-[#747474]">
        Lv. {level}
      </p>
      <p className="text-center text-[#8a8a8a]">{content}</p>

      <div className="my-[43px] flex w-full flex-col gap-[10px]">
        <div className="flex w-full justify-between px-[19px]">
          <span className="font-bold">MBTI</span>
          <span className="font-medium text-[#808080]">{mbti}</span>
        </div>
        <div className="flex w-full justify-between px-[19px]">
          <span className="font-bold">취미</span>
          <span className="font-medium text-[#808080]">{hobby}</span>
        </div>
        <div className="flex w-full justify-between px-[19px]">
          <span className="font-bold">경력</span>
          <span className="font-medium text-[#808080]">{career}년차</span>
        </div>
      </div>
      {currentUserNickname === nickname && (
        <button
          type="button"
          className="flex w-full items-center justify-center gap-[7px] rounded-full bg-[#494949] py-[8px] text-[16px] font-bold text-white"
          onClick={() => {
            setProfile(memberProfile)
            router.push('/join')
          }}
        >
          <Image
            src="/image/icon/icon-pencil_white.svg"
            width={24}
            height={24}
            alt="pencil"
          />
          <span>내 프로필 편집</span>
        </button>
      )}
    </div>
  )
}
