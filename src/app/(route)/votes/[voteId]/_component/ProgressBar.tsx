'use client'

interface PropsType {
  item1Votes: number
  item2Votes: number
}

export default function ProgressBar({ item1Votes, item2Votes }: PropsType) {
  const maxWidth = 514
  const totalVotes = item1Votes + item2Votes
  const item1Width = (maxWidth * item1Votes) / totalVotes
  const item2Width = (maxWidth * item2Votes) / totalVotes

  return (
    <div className="mt-[26px] flex h-[49px] items-center text-[22px] font-[500] ">
      {item1Votes !== 0 && (
        <div
          style={{ width: `${item1Width}px` }}
          className="flex h-full items-center justify-center rounded-l-[8px] bg-[#000] text-[#fff]"
        >
          {item1Votes}명
        </div>
      )}
      {item2Votes !== 0 && (
        <div
          style={{ width: `${item2Width}px` }}
          className="flex h-full items-center justify-center rounded-r-[8px] bg-[#EAEAEA]"
        >
          {item2Votes}명
        </div>
      )}
    </div>
  )
}
