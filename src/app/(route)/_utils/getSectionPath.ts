import { SectionNameType } from '@/app/_types/home.type'

const sectionPaths: { [key in SectionNameType]: string } = {
  투표: '/votes',
  아이템: '/items',
  피드: '/',
}

export const getSectionPath = (section: SectionNameType): string => {
  return sectionPaths[section] || '/'
}
