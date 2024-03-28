import { cn } from '@/app/_utils/twMerge'
import CategoryPicker from '@/app/_components/categoryPicker/CategoryPicker'
import MoNavbar from '@/app/_components/layout/mobile/MoNavbar'
import SideMenu from './_components/SideMenu'
import ItemList from './_components/ItemList'
import MoItemListHeader from './_components/MoItemListHeader'

export default function page() {
  return (
    <>
      <MoItemListHeader />
      <div
        className={cn('mt-[16px] hidden justify-between pt-[56px]', 'mo:flex')}
      >
        <CategoryPicker path="/items" />
      </div>
      <div
        className={cn(
          'mx-auto flex w-[1200px] max-w-full justify-center gap-[50px] px-[10px]',
          'mo:px-[16px]',
        )}
      >
        <SideMenu />
        <div className="flex-1">
          <ItemList />
        </div>
      </div>
      <MoNavbar />
    </>
  )
}
