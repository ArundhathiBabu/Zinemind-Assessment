import React from 'react'
import '../Styles/Styles.css'
import message from '../Assets/Images/Messageicon.png'
function Sidebar() {
  return (
    <>
    <div className="d-flex">
      <div className="bg-navyblue sidebar">
        <div className="sidebar-top"></div>
        <div className="sidebar-bottom">
          <h6 className="welcome pl-5 pt-4 mt-3">Welcome Nikki Wolf!</h6>
          <img src={message} alt="" className="msg-icon" />
          <button className="sidebar-btn mt-4"><span><i className="fa fa-user mr-3"></i></span>Quick connect</button>
          <button className="sidebar-btn mt-4"><span><i className="fa fa-braille mr-3"></i></span>Quick connect</button>
          <button className="sidebar-btn mt-4"><span><i className="fa fa-check task mr-3"></i></span>Create task</button>
          <button className="sidebar-btn mt-4"><span><i className="fa fa-envelope mr-3"></i></span>Compose email</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Sidebar