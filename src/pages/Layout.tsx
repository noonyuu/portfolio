import { SetStateAction, useEffect, useRef, useState } from 'react'
import instagram from '../assets/balloon/instagram.svg'
import skill from '../assets/balloon/skills.svg'
import work from '../assets/balloon/works.svg'
import { Position, PositionCard } from '../common/position'
import { AboutMe } from '../features/Profile/AboutMe'
import Canvas from '../component/Canvas'
import { Link } from 'react-router-dom'

type DOMRectProperty = 'x' | 'y' | 'width' | 'height' | 'top' | 'left' | 'right' | 'bottom'

const Layout = () => {
  const skillRef = useRef<HTMLDivElement | null>(null)
  const workRef = useRef<HTMLDivElement | null>(null)
  const cardRef = useRef<HTMLDivElement | null>(null)

  const { getPosition: getSkillPosition } = Position<HTMLDivElement>(skillRef)
  const { getPosition: getWorkPosition } = Position<HTMLDivElement>(workRef)
  const { getPositionCard } = PositionCard<HTMLDivElement>(cardRef)

  const [skillPos, setSkillPos] = useState({ x: 0, y: 0 })
  const [workPos, setWorkPos] = useState({ x: 0, y: 0 })
  const [cardPos, setCardPos] = useState({ cw: 0, ct: 0, cl: 0, cr: 0 })

  const updatePosition = (
    ref: React.RefObject<HTMLDivElement>,
    getPosition: (prop: DOMRectProperty) => number, // DOMRectPropertyを受け取るように修正
    setPosition: React.Dispatch<SetStateAction<{ x: number; y: number }>>
  ) => {
    if (ref.current) {
      setPosition({ x: getPosition('x'), y: getPosition('y') })
    }
  }

  useEffect(() => {
    setCardPos({
      cw: getPositionCard('width'),
      ct: getPositionCard('top'),
      cl: getPositionCard('left'),
      cr: getPositionCard('right')
    })

    const animate = () => {
      updatePosition(skillRef, getSkillPosition, setSkillPos)
      updatePosition(workRef, getWorkPosition, setWorkPos)
      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [getSkillPosition, getWorkPosition, getPositionCard])

  return (
    <main className="relative size-full bg-[#121212]">
      <div className="grid min-h-screen grid-cols-2 md:grid-cols-[1fr_auto_1fr] md:grid-rows-[1fr_auto_1fr]">
        <div className="hidden md:block"></div>
        {/* skill balloon */}
        <div className="z-10 md:relative">
          <img src={skill} alt="skill balloon" className="z-20 animate-skill" />
          <div className="absolute animate-skill" style={{ left: '46px', top: '185px', width: '11px', height: '13px', borderRadius: '50%' }} ref={skillRef}></div>
        </div>
        <Canvas x={skillPos.x} y={skillPos.y} cw={cardPos.cw} ct={cardPos.ct} cl={cardPos.cl} />
        {/* work balloon */}
        <div className="relative z-10 pt-3">
          <Link to="/work">
            <img src={work} alt="work balloon" className="z-20 animate-work" />
          </Link>
          <div className="absolute animate-work" style={{ left: '46px', top: '197px', width: '11px', height: '13px', borderRadius: '50%' }} ref={workRef}></div>
        </div>
        <Canvas x={workPos.x} y={workPos.y} cw={cardPos.cw} ct={cardPos.ct} cl={cardPos.cr} />
        <div className="hidden items-end md:flex">
          <img src={instagram} alt="instagram balloon" className="invisible animate-instagram md:visible" />
        </div>
        <div ref={cardRef} className="-translate-y-1/2 md:translate-x-0 md:translate-y-0 absolute left-1/2 top-1/2 -translate-x-1/2 md:static">
          <AboutMe />
        </div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>
    </main>
  )
}

export default Layout
