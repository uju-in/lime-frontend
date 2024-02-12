interface BaseItemType {
  createdAt: string
  modifiedAt: string
  originalName: string
  favoriteId: number
}

export interface MemberItemMetadata {
  itemId: number
  hobby: string
  itemUrl: string
  imageUrl: string
  price: number
  favoriteCount: number
  reviewCount: number
}

interface MemberItemFolderMetadata {
  imageUrls: string[]
}

export interface MetadataType {
  memberItemMetadata: MemberItemMetadata
}

interface FolderMetadata {
  memberItemFolderMetadata: MemberItemFolderMetadata
}

export type Item = BaseItemType & {
  type: 'ITEM'
  metadata: MetadataType
}

export type Folder = BaseItemType & {
  type: 'FOLDER'
  metadata: FolderMetadata
}

export type SaveItemType = Item | Folder

export interface SaveItemListType {
  favoriteInfos: SaveItemType[]
  totalCount: number
}
