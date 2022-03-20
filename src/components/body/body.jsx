import React from 'react'
import classes from './body.module.css'
import Icecreambuilder from '../../containers/icecreambuilder/icecreambuilder'
export default function body() {
  return (
    <div className={classes.mainBody} id="body">
      <Icecreambuilder />
    </div>
  )
}
