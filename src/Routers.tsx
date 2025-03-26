import { BrowserRouter, Route, RouteProps, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Works from './features/Works/Works'

const routes = [
  {
    path: '/',
    Component: Layout
  },
  {
    path: '/work',
    Component: Works
  }
] as const satisfies RouteProps[]

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
       {routes.map(({ path, Component }, i) => <Route key={i} path={path} element={<Component />} />)}
      </Routes>
    </BrowserRouter>
  )
}
