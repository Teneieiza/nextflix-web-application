import Image from 'next/image'

export default function HeroAction() {
  return (
    <div className="flex w-[80vw] items-center justify-between gap-4 sm:w-[50vw] md:w-full md:justify-start">
      <div className="md:hidden">
        <div className="flex justify-center">
          <Image
            src="/main/plusicon.svg"
            alt="plusicon"
            width={25}
            height={25}
            className="w-[5vw] max-w-[20px]"
          />
        </div>
        <p className="font-bold">My List</p>
      </div>

      <button className="flex h-full items-center gap-2 rounded-md bg-white px-6 py-2 font-bold text-black md:gap-4 md:text-2xl xl:py-3 xl:text-2xl">
        <Image
          src="/button/playicon.svg"
          alt="playicon"
          width={25}
          height={25}
          className="h-[4vw] max-h-[20px] md:max-h-[35px]"
        />
        Play
      </button>

      <button className="hidden h-full items-center gap-4 rounded-md bg-gray-600 px-6 py-2 font-black text-white opacity-50 md:flex md:text-lg xl:py-3 xl:text-xl">
        <Image
          src="/button/infoicon.svg"
          alt="infoicon"
          width={25}
          height={25}
          className="h-[4vw] max-h-[35px]"
        />
        More Info
      </button>

      <div className="item-center flex w-10 flex-col justify-center md:hidden">
        <div className="flex justify-center">
          <Image
            src="/button/infoicon.svg"
            alt="infoicon"
            width={25}
            height={25}
            className="w-[5vw] max-w-[20px]"
          />
        </div>
        <p className="font-bold">Info</p>
      </div>
    </div>
  )
}
