import Image from 'next/image'

interface Props {
  isChecked: boolean
  onClick: () => void
}

export default function SaveItem({ isChecked, onClick }: Props) {
  return (
    <div className="relative flex w-[184px] flex-col gap-[7px] text-[14px]">
      {/* TODO: API 연동 후 eslint 제거 예정 */}
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        className="h-[184px] cursor-pointer rounded-[8px] bg-[#D2D2D2]"
        onClick={onClick}
      />
      {isChecked && (
        <Image
          className="absolute left-[11px] top-[11px] rounded-[4px] bg-black p-[3px]"
          width={19}
          height={19}
          src="/image/icon/icon-check.svg"
          alt="check"
        />
      )}
      <div className="cursor-pointer text-[#515151] hover:underline">
        영결무람 문라이트 야광 반사 농구공 레인보우
      </div>
      <strong>29,200원</strong>
      <div className="flex gap-[20px] text-[13px] text-[#6F6F6F]">
        <div className="flex cursor-pointer">
          <Image
            src="/image/icon/icon-save.svg"
            alt="save"
            width={18}
            height={18}
          />
          <div>24</div>
        </div>
        <div className="flex cursor-pointer">
          <Image
            src="/image/icon/icon-review.svg"
            alt="review"
            width={18}
            height={18}
          />
          <div>12</div>
        </div>
      </div>
    </div>
  )
}
