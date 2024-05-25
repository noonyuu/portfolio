import { Wark, WorkItem } from "./data/work"
import Card from "./component/Card"

const Works = () => {
  const works = new Wark()
  const list: WorkItem[] = works.View()

  return (
    <section id="works" className="mx-auto h-screen w-full bg-sub-color">
      <h2 className="w-full text-center text-2xl tracking-widest">~~Works~~</h2>
      <div className="grid w-[80%] grid-cols-1 gap-8 md:grid-cols-2 lg:w-[80%] lg:grid-cols-3 mt-16 mx-auto">
        {list.map((item, index) => (
          <Card key={index} image={item.image} title={item.title} detail={item.detail} skills={item.skills} member={item.member} url={item.url}/>
        ))}
      </div>
    </section>
  )
}

export default Works
