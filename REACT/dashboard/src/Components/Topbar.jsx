import React from 'react'
import '../Styles/Styles.css'
function Topbar() {
  return (
    <>
    <div>
      <div className="main-one d-flex mt-5 ">
        <span className="fa fa-home pl-3 pt-4" style={{ color: 'rgb(20, 48, 87)' }}></span>
        <span className="line-inner pl-3">|</span>
        <div className="main-one-inner">
          <span className="fa-regular fa-user pl-3 pt-4" style={{ color: 'rgb(20, 48, 87)' }}></span>
          <span className="pl-3 cust-pro">Customer profile</span>
        </div>
        <span className="line-inner pl-4">|</span>
        <div className="main-one-inner">
          <span className="fa-solid fa-briefcase pl-3 pt-4" style={{ color: 'rgb(20, 48, 87)' }}></span>
          <span className="pl-3 cust-pro">Case</span>
        </div>
        <span className="line-inner pl-3">|</span>
        <div className="main-one-inner">
          <span className="fa-solid fa-users pl-3 pt-4" style={{ color: 'rgb(20, 48, 87)' }}></span>
          <span className="pl-3 cust-pro">Teams</span>
        </div>
        <span className="line-inner pl-3">|</span>
      </div>
    </div>
    
    </>
  )
}

export default Topbar