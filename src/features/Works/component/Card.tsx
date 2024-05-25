import React, { FC } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'

interface Props {
  title: string
  image: string
  detail: string
  skills: string[]
  member: string
  url?: string
}

const Card:FC<Props> = (props) => {
  const [showModal, setShowModal] = React.useState(false)
  return (
    <div>
      {!showModal && (
        <div className="relative flex justify-center">
          <div className="h-96 w-full rounded-lg border border-gray-200 bg-white shadow">
            <img src={props.image} alt="" className="max-h-52 w-full rounded-tl-lg rounded-tr-lg" />
            <div className="mt-5 h-32 space-y-5 text-center">
              <h5 className="font-mono text-sm font-bold tracking-tight text-gray-900">{props.title}</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
              <p className="text-sm font-light text-black">{props.detail}</p>
              <div className="flex w-full justify-end ">
                <button type="button" className="mr-4" onClick={() => setShowModal(!showModal)}>
                  詳細
                </button>
              </div>
              <div className="flex w-full justify-end">
                {!props.url ? null : (
                  <a href={`${props.url}`} target='_blank' className="absolute bottom-0 left-0 ml-4 text-sm">
                    URL: {props.url}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-gray-800 bg-opacity-50 z-10">
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
    </div>
  )
}

export default Card
