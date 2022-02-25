import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Flowers from '../components/Flowers'

function Season() {
  return (
    <>
    <nav>
        <ul>
            <li><Link to='/season/flowers'>Flowers</Link></li>
            <li><Link to='/season/spring'>Spring</Link></li>
            <li><Link to='/season/summer'>Summer</Link></li>
            <li><Link to='/season/autumn'>Autumn</Link></li>
            <li><Link to='/season/winter'>Winter</Link></li>
        </ul>
        <Outlet />
    </nav></>
  )
}

export default Season