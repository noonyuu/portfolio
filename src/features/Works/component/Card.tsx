import React, { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'

import { LinkIcon } from '@heroicons/react/24/solid'
import { SKILLS } from '@/common/Skills'

interface Props {
  title: string
  image: string[]
  detail: string
  skills: string[]
  member: string
  url?: string
}

const Card: FC<Props> = (props) => {
  const [showModal] = React.useState(false)
  return (
    <>
      {!showModal && (
        <div className="relative w-fit rounded-lg bg-card-color">
          <div className="h-52 w-80 rounded-lg bg-card-gradient">
            <div className="flex h-1/2 w-full space-x-2 p-2">
              <div className="h-[88px] w-36">
                {/* <img src={props.image} alt="" className="h-full w-full rounded-md" loading="lazy" /> */}
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                  }}
                  pagination={{
                    clickable: true
                  }}
                  navigation={true}
                  modules={[Autoplay]}
                  className="mySwiper"
                >
                  {props.image.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative h-[88px] w-36 overflow-hidden rounded-md">
                        <img src={image} alt="" className="h-full w-full object-cover" loading="lazy" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
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

      {showModal && <div className="fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-gray-800 bg-opacity-50"></div>}
    </>
  )
}

export default Card
