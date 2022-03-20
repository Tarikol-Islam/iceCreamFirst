import React from 'react';
import classes from './builder.module.css';
import Totalprice from './totalprice/totalprice';
import Items from './items/items';
import Modal from './modal/modal';
export default function builder({items, totalPrice,add,remove, scoops}) {
  return (
  <div>
    <div className={classes.builder}>
    <h3>Build your own Ice Cream Sundae</h3>
    <Items items={items} add={add} remove = {remove} scoops={scoops}/>
    <Totalprice totalPrice={totalPrice }/>
    <button type="button" className={[classes.order, 'rounded'].join(" ")}>
                Add to Cart
    </button>
      </div>   
      <Modal>
        Hello World
      </Modal>
    </div>
  )
}
