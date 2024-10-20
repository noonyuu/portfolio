import React, { FC } from 'react'
import { XMarkIcon, LinkIcon } from '@heroicons/react/24/solid'
// import GitHubIcon from '@/assets/icon/git-icon.svg'
import { SKILLS } from '@/common/Skills'

interface Props {
  title: string
  image: string
  detail: string
  skills: string[]
  member: string
  url?: string
}

const Card: FC<Props> = (props) => {
  const [showModal, setShowModal] = React.useState(false)
  return (
    <>
      {!showModal && (
        <div className="relative w-fit rounded-lg bg-card-color">
          <div className="h-52 w-80 rounded-lg bg-card-gradient">
            <div className="flex h-1/2 w-full space-x-2 p-2">
              <div className="w-full">
                <img src={props.image} alt="" className="h-full w-full rounded-md" />
              </div>
              <div className="relative size-full flex-col">
                {/* icon */}
                <div className="absolute flex space-x-2">
                  {/* <img src={GitHubIcon} alt="git" className="size-4" /> */}
                  {props.url && (
                    <a href={`${props.url}`} target="_blank">
                      <LinkIcon className="size-4" />
                    </a>
                  )}
                </div>
                {/* title */}
                <div className="flex h-full items-center justify-center">{props.title}</div>
                {/* skill icon */}
                <div className="flex justify-end space-x-1">
                  {props.skills.map((skill, index) => {
                    const skillObj = SKILLS.find((s: { name: string }) => s.name === skill)
                    return (
                      <span key={index}>
                        <img src={skillObj?.icon} alt={skill} className="size-4" />
                      </span>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="h-1/2 space-y-5 py-3 text-center">
              <p className="text-sm font-light text-black">{props.detail}</p>
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="relative w-2/3 rounded-lg bg-white p-4 text-black lg:w-1/3 lg:p-8">
            <button className="absolute right-0 top-0 w-12 p-2" onClick={() => setShowModal(!setShowModal)}>
              <XMarkIcon color="black" className="text-xl" />
            </button>
            <img src={props.image} alt="" className="w-full rounded-lg" />
            <span>{props.member}</span>
            <h2 className="my-4 text-center">{props.title}</h2>
            <p>{props.detail}</p>
            <div className="mt-4">
              <h3 className="font-semibold">Skills</h3>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {props.skills.map((skill, index) => (
                  <span key={index} className="ml-4">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Card
