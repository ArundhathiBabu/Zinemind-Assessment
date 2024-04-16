import React from 'react'
import Sidebar from './Sidebar';
import Rightmain from './Rightmain';
import Leftmain from './Leftmain';

function Main() {
  return (
    <>
  <div className='d-flex'>
    <Sidebar/>
    <Leftmain/>
    <Rightmain/>
  </div>
  
  </>
    )
}
export default Main