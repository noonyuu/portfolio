import { useState } from 'react'
import Header from './component/Header'

function App() {
  const [cnt, setCnt] = useState(0)

  return (
    <div className="mx-auto">
      <Header />
      <div>
        <h1 className="mx-auto table w-full rounded-b-none bg-white">bun!</h1>
        <button onClick={() => setCnt((prev) => prev + 1)}>count: {cnt}</button>
      </div>
    </div>
  )
}

export default App
