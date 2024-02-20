export const enum SavePageMode {
  DEFAULT = 0,
  CHANGE_NAME = 1,
  EDIT_LIST = 2,
}

export interface SaveItemType {
  favoriteId: number
  originalName: string
  type: 'ITEM' | 'FOLDER'
  metadata: {
    favoriteItemMetadata: {
      imageUrl: string
      itemId: number
      price: number
      favoriteCount: number
      reviewCount: number
    }
  }
}

export interface SaveFolderType {
  favoriteId: number
  originalName: string
  type: 'ITEM' | 'FOLDER'
  metadata: {
    folderMetadata: {
      imageUrls: string[]
      itemCount: number
    }
  }
}
