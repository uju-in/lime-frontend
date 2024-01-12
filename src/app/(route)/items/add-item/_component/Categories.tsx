interface CategoryGroupProps {
  categories: string[]
  selectedCategory: string
  handleRadioChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Categories({
  categories,
  selectedCategory,
  handleRadioChange,
}: CategoryGroupProps) {
  return (
    <div className="flex flex-wrap">
      {categories.map((item) => (
        <label
          key={item}
          className={`my-4 mr-6 inline-block cursor-pointer rounded-full border px-5 py-1 font-medium ${
            selectedCategory === item
              ? 'border-black'
              : 'border-[#DADADA] text-[#898989]'
          }`}
        >
          <input
            type="radio"
            name="category"
            value={item}
            checked={selectedCategory === item}
            onChange={handleRadioChange}
            className="sr-only"
            required
          />
          {item}
        </label>
      ))}
    </div>
  )
}
