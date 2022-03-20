import React from 'react'
import classes from './scoop.module.css'
export default function scoop({scoop}) {
  return (
    <div className={[classes.scoop, classes[scoop]].join(" ")}></div>
  )
}
