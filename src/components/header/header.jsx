import React from 'react'
import classes from './header.module.css'
import logo from '../../assets/images/logo.svg'
import reactLogo from '../../assets/images/react.svg'
export default function header() {
  return (
    <header>
        <div className="container" id="header">
          <div>
            <img className={classes.logo} src={logo} alt="Logo" />
          </div>
          <div className="textRight">
            <img src={reactLogo} alt="React" className={classes.reactLogo} /><strong
              >React</strong
            >
          </div>
        </div>
      </header>
  )
}
