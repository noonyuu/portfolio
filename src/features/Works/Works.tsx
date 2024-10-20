import { Wark, WorkItem } from "./data/Work"
import Card from "./component/Card"

const Works = () => {
  const works = new Wark()
  const list: WorkItem[] = works.View()

  return (
    <section id="works" className="mx-auto min-h-screen w-full bg-slate-950">
      <h2 className="w-full text-center text-2xl tracking-widest">~~Works~~</h2>
      <div className="w-fit grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 mt-16 mx-auto pb-4">
        {list.map((item, index) => (
          <Card key={index} image={item.image} title={item.title} detail={item.detail} skills={item.skills} member={item.member} url={item.url}/>
        ))}
      </div>
    </section>
  )
}

export default Works
