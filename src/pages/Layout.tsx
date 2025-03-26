import { SetStateAction, useEffect, useRef, useState } from 'react'
import instagram from '../assets/balloon/instagram.svg'
import skill from '../assets/balloon/skills.svg'
import work from '../assets/balloon/works.svg'
import { Position } from '../common/position'
import { AboutMe } from '../features/Profile/AboutMe'
import Canvas from '../component/Canvas'
import { Link } from 'react-router-dom'

type DOMRectProperty = 'x' | 'y' | 'width' | 'height' | 'top' | 'left' | 'right' | 'bottom'

const Layout = () => {
  const skillRef = useRef<HTMLDivElement | null>(null) // スキルのdom
  const workRef = useRef<HTMLDivElement | null>(null) // 作品のdom
  const cardRef = useRef<HTMLDivElement | null>(null) // カードのdom
  const rightTopRef = useRef<HTMLDivElement | null>(null) // gridの右上のdom

  const { getPosition: getSkillPosition } = Position<HTMLDivElement>(skillRef) // スキルの位置
  const { getPosition: getWorkPosition } = Position<HTMLDivElement>(workRef) // 作品の位置
  const { getPosition: getPositionCard } = Position<HTMLDivElement>(cardRef) // カードの位置
  const { getPosition: getRightTopPosition } = Position<HTMLDivElement>(rightTopRef) // 右上の位置

  const [skillPos, setSkillPos] = useState({ x: 0, y: 0 }) // スキルの位置
  const [workPos, setWorkPos] = useState({ x: 0, y: 0 }) // 作品の位置
  const [cardPos, setCardPos] = useState({ cw: 0, ct: 0, cl: 0, cr: 0 }) // カードの位置
  const [rightTopWidth, setRightTopWidth] = useState(0) // 右上の幅

  // 位置を更新する関数
  const updatePosition = (
    ref: React.RefObject<HTMLDivElement>,
    getPosition: (prop: DOMRectProperty) => number, // DOMRectPropertyを受け取るように修正
    setPosition: React.Dispatch<SetStateAction<{ x: number; y: number }>>
  ) => {
    if (ref.current) {
      setPosition({ x: getPosition('x'), y: getPosition('y') })
    }
  }

  // カードの位置を更新する
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
      if (rightTopRef.current) {
        setRightTopWidth(getRightTopPosition('width'))
      }
      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [getSkillPosition, getWorkPosition, getPositionCard, getRightTopPosition])

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
        <Canvas x={workPos.x} y={workPos.y} cw={rightTopWidth} ct={cardPos.ct} cl={cardPos.cr} />

        {/* instagram balloon */}
        <div ref={rightTopRef} className="hidden items-end md:flex">
          <img src={instagram} alt="instagram balloon" className="invisible animate-instagram md:visible" />
        </div>

        {/* AboutMe in center */}
        <div ref={cardRef} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:col-start-2 md:translate-x-0 md:translate-y-0">
          <AboutMe />
        </div>
      </div>
    </main>
  )
}

export default Layout
