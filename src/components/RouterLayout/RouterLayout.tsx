import { NavBar } from '../NavBar'
import { Outlet } from 'react-router-dom'

const RouterLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default RouterLayout
