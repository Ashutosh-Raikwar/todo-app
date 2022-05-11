import React from 'react'
import {FcTodoList} from 'react-icons/fc'

function Navigation() {
  return (
    <div className='text-center bg-danger rounded d-flex justify-content-between'>
        <FcTodoList className='fs-1 ' />
        <span>hello user</span>
    </div>
  )
}

export default Navigation