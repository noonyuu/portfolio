import { Wark, type WorkItem } from './data/Work'
import Card from './component/Card'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Works = () => {
  const works = new Wark()
  const list: WorkItem[] = works.View()
  const ref = useRef(null)
  const isVisible = useInView(ref, { once: true })

  return (
    <section id="works" className="relative mx-auto min-h-screen overflow-hidden bg-slate-950 px-4">
      <div className="relative z-10">
        <div className="fixed left-0 right-0 top-0 z-50 border-slate-800 bg-slate-950/95 backdrop-blur-sm">
          <div className="relative z-10 flex flex-col items-center py-8">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center text-3xl font-light uppercase tracking-[0.25em] text-white"
            >
              Works
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '180px' }}
              transition={{ duration: 2, delay: 0.8 }}
              className="mt-3 h-[1px] bg-gradient-to-r from-transparent via-slate-400 to-transparent"
            />
          </div>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mx-auto mt-32 grid w-fit grid-cols-1 gap-10 pb-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {list.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="transform transition-all duration-300 hover:shadow-lg hover:shadow-slate-700/20"
            >
              <Card image={item.image} title={item.title} detail={item.detail} skills={item.skills} member={item.member} url={item.url} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Works
