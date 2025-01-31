export interface NavigationDataType {
  message: string
  link: string
  mobile: boolean
}

export const navigationData: NavigationDataType[] = [
  {
    message: 'Home',
    link: '/',
    mobile: false,
  },
  {
    message: 'TV Shows',
    link: '/',
    mobile: true,
  },
  {
    message: 'Movies',
    link: '/',
    mobile: true,
  },
  {
    message: 'New & Popular',
    link: '/',
    mobile: false,
  },
  {
    message: 'My List',
    link: '/',
    mobile: false,
  },
  {
    message: 'Browse by Languages',
    link: '/',
    mobile: false,
  },
]
