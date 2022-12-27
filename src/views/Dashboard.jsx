import React from 'react'
import SideBar from '../components/SideBar/SideBar'
import Table from '../components/Table/Table'
import FishPonds from './FishPonds'

function Dashboard() {
  return (
    <div className='relative w-screen'>
      <SideBar />
      <FishPonds />
    </div>
  )
}

export default Dashboard