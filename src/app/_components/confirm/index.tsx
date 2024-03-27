import Modal from '../modal'

interface PropsType {
  setShowConfirm: React.Dispatch<React.SetStateAction<boolean>>
  id: number
  title: string
  onConfirmedAction: (id: number) => Promise<void>
}

export default function Confirm(props: PropsType) {
  const { setShowConfirm, id, onConfirmedAction, title } = props

  const handleConfirmAction = async () => {
    await onConfirmedAction(id)

    setShowConfirm(false)
  }

  return (
    <Modal innerClassNames="w-[270px] h-[124px] rounded-[12px] bg-[#F2F2F2]">
      <div className="flex h-[80px] flex-col items-center justify-center gap-[6px] text-black">
        <strong className="text-[14px] font-[600]">경고</strong>
        <span className="text-[12px] font-[400]">
          {title}를 삭제하시겠습니까?
        </span>
      </div>
      <div className="flex h-[44px] items-center border border-[0.5px] border-[#8C8C8C] text-center text-[18px] font-[500]">
        <button
          type="button"
          className="flex h-full flex-1 items-center justify-center border border-[0.5px] border-y-0 border-[#8C8C8C] text-center text-[#0045CC]"
          onClick={() => setShowConfirm(false)}
        >
          아니요
        </button>
        <button
          type="button"
          className="flex-1 text-[#F00]"
          onClick={handleConfirmAction}
        >
          예
        </button>
      </div>
    </Modal>
  )
}
