import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from "react-router-dom";


export default function Navbar(props) { 
  return (
    
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href={'#-1'}>{props.home}</a> 
        </li>
        <li className="nav-item">
          <a className="nav-link" href={'#-1'}>{props.aboutText}</a>
        </li>
      </ul>
      <span className={"color_box"} onClick={(event)=> props.toggleColor('red')} style={{backgroundColor:'red', width:'20px', height:'20px',border:'1px solid #ffffff', margin:'0 10px'}}></span>
      <span className={"color_box"} onClick={()=> props.toggleColor('green')} style={{backgroundColor:'green', width:'20px', height:'20px',border:'1px solid #ffffff', margin:'0 10px'}}></span>
      <span className={"color_box"} onClick={()=> props.toggleColor('blue')} style={{backgroundColor:'blue', width:'20px', height:'20px',border:'1px solid #ffffff', margin:'0 10px'}}></span>
      <span className={"color_box"} onClick={()=> props.toggleColor('pink')} style={{backgroundColor:'pink', width:'20px', height:'20px',border:'1px solid #ffffff', margin:'0 10px'}}></span>
      <span className={"color_box"} onClick={()=> props.toggleColor('yellow')} style={{backgroundColor:'yellow', width:'20px', height:'20px',border:'1px solid #ffffff', margin:'0 10px'}}></span>
      <span className={"color_box"} onClick={()=> props.toggleColor('orange')} style={{backgroundColor:'orange', width:'20px', height:'20px',border:'1px solid #ffffff', margin:'0 10px'}}></span>
      <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark':'light'}`}>
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleButton} />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
      </div>
      
    </div>
  </div>
</nav>

  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title: 'set title here',
    aboutText: 'show about here',
    home: 'set home menu here'
}