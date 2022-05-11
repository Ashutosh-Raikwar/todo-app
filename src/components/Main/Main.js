import React from 'react';
import SideMenu from './SideMenu/SideMenu';
import ShowTodo from './ShowTodo/ShowTodo';

function Main() {
  return (
    <div className=' bg-secondary'>

        {/* create task button */}
        {/* <div >
          <span onClick={() => console.log("clicked") }>
            <BsPlusCircle className='fs-1 bg-primary rounded-circle' style={{fill:'white'}}  />
          </span>
        </div> */}
        
        <div className='d-flex vh-100'>
          <SideMenu />
          <ShowTodo />
        </div>
        
    </div>
  )
}

export default Main