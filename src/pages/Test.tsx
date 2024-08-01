import { useState } from 'react'
import Inventory from './Inventory'
import * as inv from '../services/manageInventory';


export default function Test() {

  return (
    <div className='flex flex-col'>
      <Inventory/>
      <button onClick={()=>inv.addItem('gay', 1)}>Add item</button>
      <button onClick={()=>inv.subItem('gay', 1)}>Sub item</button>
      <button onClick={()=>inv.setItem('gay', 10)}>Set item</button>
    </div>
  )
}
