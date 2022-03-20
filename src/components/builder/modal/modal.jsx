import React from 'react'
import classes from './modal.module.css'

export default function modal({children}) {
  return (
    <div >
              <div className={classes.backdrop} onClick="removeModal()"></div>
              <div className={classes.modalBody}>
                {children}
              </div>
            </div>
  )
}
