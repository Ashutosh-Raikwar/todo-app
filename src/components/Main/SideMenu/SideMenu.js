import React from 'react'

function SideMenu() {
  return (
    <div className='flex-column w-50'>
        
        <div className='h-25 w-50 pd-4 bg-success p-3 rounded m-1 ' type='button' onClick={() => console.log("inbox")}>Inbox</div>
        <div className='h-25 w-50 pd-4 bg-success p-3 rounded m-1 ' type='button' onClick={() => console.log("today")}>Today</div>
        <div className='h-25 w-50 pd-4 bg-success p-3 rounded m-1 ' type='button' onClick={() => console.log("next 7 days")}>Next 7 days</div>
    </div>
  )
}

export default SideMenu