import React from 'react'
import classes from './totalprice.module.css'
export default function totalprice({totalPrice = 0}) {
  return (
    <div className={classes.total}>
                <div>Total Price</div>
                <div>{totalPrice.toFixed(2)} Tk</div>
    </div>
  )
}
