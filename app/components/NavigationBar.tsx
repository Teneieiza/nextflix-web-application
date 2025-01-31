import Image from 'next/image'
import { navigationData } from '../constants/NavigationData'

export default function NavigationBar() {
  return (
    <nav className="fixed left-0 top-0 z-10 w-full bg-gradient-to-b from-black/70 to-transparent">
      <div className="flex w-full items-center justify-between px-[8%] py-[45px] md:hidden md:px-[4%]">
        <Image
          src="/navigation/netflixlogophone.svg"
          alt="netflixphonelogo"
          width={30}
          height={50}
          priority
        />
        <div className="flex gap-[25px]">
          <Image
            src="/navigation/chromecasticon.png"
            alt="chromecastiscon"
            width={36}
            height={36}
            priority
          />
          <Image
            src="/navigation/avatarimage.svg"
            alt="avatarimage"
            width={36}
            height={36}
            priority
          />
        </div>
      </div>
      <div className="flex items-center justify-center px-[4%] md:justify-between md:py-[31px]">
        <div className="flex items-center gap-[67px]">
          <Image
            src="/navigation/netflixlogo.svg"
            alt="netflixlogo"
            width={139}
            height={38.18}
            className="hidden md:block"
            priority
          />
          <ul className="flex gap-7 md:hidden xl:flex">
            {navigationData.map((item, index) => (
              <li
                key={index}
                className={item.mobile ? 'block' : 'hidden xl:block'}
              >
                <a href={item.link}>{item.message}</a>
              </li>
            ))}
            <li className="md:hidden">
              <p>Categories</p>
            </li>
          </ul>
          <div className="hidden md:block xl:hidden">
            <p>Categories</p>
          </div>
        </div>
        <div className="hidden items-center justify-center gap-[15px] md:flex">
          <div className="flex items-center justify-center gap-6 2xl:gap-8">
            <Image
              src="/navigation/searchicon.svg"
              alt="searchimg"
              width={36}
              height={28}
              className="h-5 w-7 xl:h-7 xl:w-9"
              priority
            />
            <div>
              <p>Kids</p>
            </div>
            <Image
              src="/navigation/bellicon.svg"
              alt="bellimg"
              width={32}
              height={28}
              className="h-5 w-6 xl:h-7 xl:w-8"
              priority
            />
            <Image
              src="/navigation/avatarimage.svg"
              alt="avatarimg"
              width={48}
              height={48}
              className="h-10 w-10 xl:h-12 xl:w-12"
              priority
            />
          </div>
          <div>
            <Image
              src="/navigation/arrow.svg"
              alt="arrowimg"
              width={15}
              height={7}
              priority
            />
          </div>
        </div>
      </div>
    </nav>
  )
}
