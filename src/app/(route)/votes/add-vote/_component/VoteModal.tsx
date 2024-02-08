import React from 'react'
import Image from 'next/image'

import Modal from '@/app/_components/modal'

interface PropsType {
  setShowVoteModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function VoteModal(props: PropsType) {
  const { setShowVoteModal } = props

  return (
    <Modal isScrollActive={false}>
      <div className="h-[592px] w-[852px]">
        <div className="flex justify-between py-[20px] pl-[46px] pr-[18px]">
          <strong className="text-[24px] font-[600]">찜목록</strong>
          <button
            type="button"
            aria-label="close"
            onClick={() => {
              setShowVoteModal(false)
            }}
          >
            <Image
              width={24}
              height={24}
              src="/image/icon/icon-close.svg"
              alt="close"
            />
          </button>
        </div>
        <article className="px-[46px]">
          <div className="flex h-[410px] w-[760px] rounded-[8px] border  border-[#DADADA]">
            {/** folder choice */}
            <div className="flex-1 overflow-y-scroll">
              {/** card */}
              <div className="flex items-center border border-t-[#D2D2D2] py-[12px] pl-[18px]">
                <div className="h-[52px] w-[52px] rounded-[4px] bg-[#DADADA]" />
                <strong className="font=[500] ml-[16px]">농린이템</strong>
              </div>
            </div>
            {/** item choice */}
            <div className="flex-1 overflow-y-scroll pl-[16px]">
              {/** item card */}
              {/* <p className="py-[13px]">아이템 8개</p>
                <div className="grid grid-cols-3 gap-[12px]">
                  <div className="flex h-[186px] w-[107px] flex-col justify-between">
                  <div className="h-[107px] w-[107px] bg-[#D2D2D2]" />
                  <div className="h-[70px] text-[10px]">
                    <p className="font-[500]">
                      프로모릭스 픽앤롤 농구공 7호+가방+단방향 볼펌프
                      랜덤발송세트
                    </p>
                    <strong className="mt-[8px] font-[700]">29,200원</strong>
                  </div>
                </div> 
              </div> */}
              {/** not save item */}
              <div className="flex h-full flex-col items-center justify-center">
                <strong className="mb-[12px] text-[20px] font-[600]">
                  찜한 아이템이 없어요
                </strong>
                <p className="text-[14px] font-[500]">
                  마음에 드는 아이템을 담아보세요
                </p>
              </div>
            </div>
          </div>
          <div className="mt-[43px] flex items-center justify-between">
            <button type="button" className="flex items-center">
              <Image
                width={15}
                height={15}
                src="/image/icon/icon-plus.svg"
                alt="plus item"
              />
              <div className="ml-[6px]">
                <p className="relative font-[600]">아이템 담으러 가기</p>
              </div>
            </button>
            {/** 아이템 담으러가기 상단 안내 팝업 메시지 */}
            <div className="absolute bottom-[60px] left-[45px] flex flex-col items-center">
              <div className=" h-[27px] w-[152px] rounded-[4px] bg-[#000] px-[17px] py-[7px] text-[10px] font-[600] text-[#fff]">
                취미에 맞는 아이템이 없다면?
              </div>
              <div className="h-0 w-0 border-l-[7px] border-r-[7px] border-t-[7px] border-l-transparent border-r-transparent border-t-black" />
            </div>
            <button
              type="button"
              className="h-[40px] w-[110px] rounded-[100px] bg-[#000] px-[27px] text-center font-[600] text-[#fff]"
            >
              선택완료
            </button>
          </div>
        </article>
      </div>
    </Modal>
  )
}
