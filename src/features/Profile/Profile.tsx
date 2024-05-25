import profileIcon from '../../assets/profile.webp'
import gitIcon from '../../assets/git.webp'
import xIcon from '../../assets/x.webp'

const Profile = () => {
  return (
    <section id="profile" className="mx-auto flex h-screen bg-sub-color">
      <div className="relative mx-auto my-auto h-4/5 w-4/5 rounded-lg bg-slate-50 shadow-lg">
        {/* タイトル */}
        <div className="flex h-1/5 w-full items-center justify-center text-center text-5xl font-bold">Profile</div>
        {/* 詳細 */}
        <div className="h-4/5 w-full md:flex">
          {/* my image */}
          {/* 画像をカードの中央になるように調整 */}
          <div className="md:m-auto md:flex md:min-w-[50%] md:-translate-y-1/4 md:items-center">
            <img src={profileIcon} alt="profile icon" className="mx-auto size-28 rounded-full border md:size-80"></img>
          </div>

          <div className="flex items-center justify-center md:w-full">
            <div className="mt-4 flex flex-col items-center justify-center space-y-8 md:m-auto md:-translate-y-1/4">
              <ul className="text-center text-gray-400">
                <li>Name</li>
                <li className="text-xl text-black md:text-3xl">しみず</li>
              </ul>
              <ul className="text-center text-gray-400">
                <li>Job</li>
                <li className="text-xl text-black md:text-3xl">学生(26卒)</li>
              </ul>
              {/* <ul className="text-center text-gray-400">
                <li>Job</li>
                <li className="text-xl text-black md:text-3xl">学生(26卒)</li>
              </ul> */}
            </div>
            <div className="absolute bottom-4 right-8 flex space-x-8">
              <a href="https://github.com/noonyuu">
                <img src={gitIcon} alt="git icon" className="size-8" />
              </a>
              <a href="https://twitter.com/noonyuu">
                <img src={xIcon} alt="git icon" className="size-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile
