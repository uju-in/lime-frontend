/** (미확정) 아이템 선택 */

import { CurrentFavoriteItemMetadata } from '@/app/_types/saveItem.type'
import { atom } from 'recoil'

export const currentSelectedItemState =
  atom<CurrentFavoriteItemMetadata | null>({
    key: 'currentSelectedItemState',
    default: null,
  })
