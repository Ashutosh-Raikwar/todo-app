import React from 'react'
import {BsPlusCircle} from 'react-icons/bs';

function ShowTodo() {
  return (
    <div className='flex-column'>
        <div>
            <span>active tab</span>
        </div>
        
        <span type='button'>
            <div >
          <span onClick={() => console.log("clicked") }>
            <BsPlusCircle className='fs-1 bg-primary rounded-circle' style={{fill:'white'}}  />
          </span>
        </div>
        </span>
    </div>
  )
}

export default ShowTodo