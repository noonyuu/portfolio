import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'
import { Link } from 'react-scroll'
import { useState } from 'react'

const Header = () => {
  // ナビゲーションリンク
  let Links = [
    { name: 'Profile', link: 'profile' },
    { name: 'Works', link: 'works' },
    { name: 'Skills', link: 'skills' },
  ]

  let [open, setOpen] = useState(false) // ハンバーガーメニューの開閉

  return (
    <header className="w-full bg-main-color">
      <div className="mx-auto py-4 pl-7 md:px-10">
        <div className="flex justify-between">
          {/* サイトのタイトル */}
          <div className="cursor-pointer text-xl">
            <span className="text-black">ぽーとふぉりお</span>
          </div>

          <div>
            {/* モバイルの時のハンバーガーアイコン */}
            <div onClick={() => setOpen(!open)} className="absolute right-8 top-4 z-50 w-8 text-black md:hidden">
              {open ? <XMarkIcon className="text-xl" /> : <Bars3Icon className="text-xl" />}
            </div>

            {/* ナビゲーション*/}
            <ul
              className={`absolute right-0 z-40 w-full bg-main-color pl-10 text-black transition-all duration-700 ease-linear md:static md:flex md:w-auto md:items-center ${open ? 'top-12' : '-top-96'}`}
            >
              {Links.map((link) => (
                <li key={link.name} className="my-8 cursor-pointer font-medium md:my-0 md:ml-5">
                  <Link to={link.link} activeClass="active" smooth={true} spy={true} className="transition-all duration-500" onClick={() => setOpen(!open)}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
