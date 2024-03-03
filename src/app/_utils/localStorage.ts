export namespace LocalStorage {
  // 최근 검색어
  export const search = () => {
    const KEY = 'recentSearch'

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
          const newList = originList
            .filter((item) => item !== value)
            .concat(value)
          LocalStorage.search().setter(newList)
        } else {
          LocalStorage.search().setter([value])
        }
      },
    }
  }
}
