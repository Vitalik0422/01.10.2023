import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const layout = () => {
  return (
    <>
    <main>
    <Outlet></Outlet>
    </main>
    <footer>
        <NavLink to='discord'>DISCORD</NavLink>
        <br></br>
        <NavLink to='/'>main</NavLink>
        <br></br>
        <NavLink to='/login'>LOGIN</NavLink>
        <br></br>
        <NavLink to='/yousearch'>YouTube</NavLink>
    </footer>
    </>
  )
}

export default layout