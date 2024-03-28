export namespace LocalStorage {
  // 최근 검색어
  export const search = () => {
    const KEY = 'recentSearch'
    const MAX_SIZE = 10

    return {
      getter: (): string[] => {
        const recentSearch = localStorage.getItem(KEY)
        if (recentSearch) return JSON.parse(recentSearch)
        return []
      },
      setter: (value: string[]): void => {
        localStorage.setItem(KEY, JSON.stringify(value))
      },
      removeAll: (): void => {
        localStorage.removeItem(KEY)
      },
      removeItem: (value: string): void => {
        const originList = LocalStorage.search().getter()

        LocalStorage.search().setter(
          originList.filter((item) => item !== value),
        )
      },
      add: (value: string): void => {
        const originList = LocalStorage.search().getter()
        if (originList) {
          let newList = originList
            .filter((item) => item !== value) // 중복 제거
            .concat(value)
          if (newList.length > MAX_SIZE) newList = newList.splice(1, MAX_SIZE) // 10개까지만 저장
          LocalStorage.search().setter(newList)
        } else {
          LocalStorage.search().setter([value])
        }
      },
    }
  }

  // 리뷰 상세 이미지
  export const imageUrls = () => {
    const KEY = 'imageUrls'

    return {
      getter: (): string[] => {
        const data = localStorage.getItem(KEY)
        return data ? JSON.parse(data) : []
      },
      setter: (value: string[]): void => {
        localStorage.setItem(KEY, JSON.stringify(value))
      },
      remove: (): void => {
        localStorage.removeItem(KEY)
      },
    }
  }
}
