import React from 'react'
import classes from './item.module.css'
import {countBy} from 'lodash'
export default function item({name,add,remove, scoops}) {
  const scoopByCount = countBy(scoops);
  return (
    <li className={classes.item}>
                    <span>{name}</span>
                    <span className={classes.quantity}>{scoopByCount[name]}</span>
                    <div className="right">
                      <button type="button" onClick={add.bind(this, name)} className={[classes.plus,"rounded"].join(" ")}>+</button>
                      <button type="button" onClick={() => {remove(name)}} className={[classes.minus,"rounded"].join(" ")}>-</button>
                    </div>
                  </li>
  )
}
