interface BaseItemType {
  createdAt: string
  modifiedAt: string
  originalName: string
  favoriteId: number
}

export interface MemberItemMetadata {
  memberItemMetadata: {
    itemId: number
    hobby: string
    itemUrl: string
    imageUrl: string
    price: number
    favoriteCount: number
    reviewCount: number
  }
}

interface MemberItemFolderMetadata {
  imageUrls: string[]
}

export interface MetadataType {
  memberItemMetadata: MemberItemMetadata
}

export type ItemMetadata = MemberItemMetadata

interface FolderMetadata {
  memberItemFolderMetadata: MemberItemFolderMetadata
}

export type Item = BaseItemType & {
  type: 'ITEM'
  metadata: ItemMetadata
}

type Folder = BaseItemType & {
  type: 'FOLDER'
  metadata: FolderMetadata
}

export type SaveItemType = Item | Folder

export interface SaveItemListType {
  totalCount: number
  favoriteInfos: SaveItemType[]
}
