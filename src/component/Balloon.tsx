import github from '../assets/balloon.svg'
import X from '../assets/X.svg'
import about from '../assets/aboutme.svg'
import works from '../assets/works.svg'

export const Balloon = () => {
  return (
    <div className="flex w-full overflow-y-scroll bg-black">
      <img src={github} alt="" />
      <img src={X} alt="" />
      <img src={about} alt="" />
      <img src={works} alt="" />
    </div>
  )
}
