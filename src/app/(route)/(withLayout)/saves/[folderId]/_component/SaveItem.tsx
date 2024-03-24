import Image from 'next/image'

interface Props {
  originalName: string
  price: number
  imageUrl: string
  favoriteCount: number
  reviewCount: number
  isChecked: boolean
  onClick: () => void
}

export default function SaveItem(props: Props) {
  const {
    originalName,
    price,
    imageUrl,
    favoriteCount,
    reviewCount,
    isChecked,
    onClick,
  } = props

  return (
    <div className="relative flex flex-col gap-[7px] text-[14px]">
      <Image
        height={184}
        width={184}
        src={imageUrl}
        alt="img"
        className="cursor-pointer rounded-[8px]"
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
      <p
        onClick={onClick}
        className="line-clamp-2 cursor-pointer text-[#515151] hover:underline"
      >
        {originalName}
      </p>
      <strong>{price.toLocaleString()}원</strong>
      <div className="flex gap-[20px] text-[13px] text-[#6F6F6F]">
        <div className="flex">
          <Image
            src="/image/icon/icon-save.svg"
            alt="save"
            width={18}
            height={18}
          />
          <p>{favoriteCount}</p>
        </div>
        <div className="flex">
          <Image
            src="/image/icon/icon-review.svg"
            alt="review"
            width={18}
            height={18}
          />
          <p>{reviewCount}</p>
        </div>
      </div>
    </div>
  )
}
