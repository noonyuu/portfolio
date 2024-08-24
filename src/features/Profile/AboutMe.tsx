import git from '../../assets/icon/git-icon.svg'
import x from '../../assets/icon/x-icon.svg'
import carrot from '../../assets/icon/profile.webp'

export const AboutMe = () => {
  return (
    <section className="size-full">
      <div className="shadow-custom flex h-[448px] w-[288px] flex-col rounded-sm border border-black bg-[rgb(9,9,9)] md:h-[288px] md:w-[448px]">
        {/* icon */}
        <div className="mx-4 mt-4 flex h-full space-x-4">
          <a href="https://x.com/noonyuu">
            <img src={x} alt="x icon" className="size-6" />
          </a>
          <a href="https://github.com/noonyuu">
            <img src={git} alt="github icon" className="size-6" />
          </a>
          <div className="flex grow justify-end">
            <img src={carrot} alt="" className="h-24 w-20" />
          </div>
        </div>
        {/* name */}
        <div className="flex h-full flex-col items-center justify-center text-white">
          <ruby className="text-6xl tracking-widest">
            しみず<rt className="text-xl font-normal tracking-[0.5rem]">Shimizu</rt>
          </ruby>
        </div>
        {/* other */}
        <div className="mb-4 flex h-full flex-col justify-end">
          <p className="ml-6 text-sm text-white">学生(26卒)</p>
          <p className="ml-14 text-sm text-white">趣味 : ラグビー観戦・ハッカソン</p>
        </div>
      </div>
    </section>
  )
}
