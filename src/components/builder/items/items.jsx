import React from 'react';
import Item from './item/item';
export default function items({items, add,remove, scoops}) {
  const flavors = Object.keys(items);
  return (
    <div>
        <ul>
        {flavors.map(flavor => <Item key={flavor} name={flavor} add={add} remove = {remove} scoops = {scoops}/>)}
        </ul>
    </div>
  )
}
