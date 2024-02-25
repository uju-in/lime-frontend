interface BaseItemType {
  createdAt: string
  modifiedAt: string
  originalName: string
  favoriteId: number
}

export interface FavoriteItemMetadata {
  itemId: number
  hobby: string
  itemUrl: string
  imageUrl: string
  price: number
  favoriteCount: number
  reviewCount: number
}

export interface CurrentFavoriteItemMetadata extends FavoriteItemMetadata {
  originalName: string
}

export interface MetadataType {
  favoriteItemMetadata: FavoriteItemMetadata
}

interface FolderMetadata {
  imageUrls: string[]
  itemCount: number
}

export interface FolderMetadataType {
  folderMetadata: FolderMetadata
}

export type Item = BaseItemType & {
  type: 'ITEM'
  metadata: MetadataType
}

export type Folder = BaseItemType & {
  type: 'FOLDER'
  metadata: FolderMetadataType
}

export type SaveItemType = Item | Folder

export interface SaveItemListType {
  favoriteInfos: SaveItemType[]
  totalCount: number
}
