import React from 'react'
import Table from '../components/Table/Table'

function FishPonds() {
  return (
    <div className='flex flex-col items-start float-right w-10/12 px-10 my-10 space-y-5'>
      <h1 className='text-3xl font-bold'>Fish Ponds</h1>
      <Table />
    </div>
  )
}

export default FishPonds