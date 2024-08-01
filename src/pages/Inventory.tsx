import secureLocalStorage from 'react-secure-storage';
import * as inv from '../services/manageInventory';
import * as coin from '../services/manageCoins';
import { itemlib } from '../config/itemsLibrary';
import { useEffect, useState } from 'react';
import TopBar from '../components/TopBar';


export default function Inventory() {
  const [inventory, setInventory] = useState({});

  useEffect(()=>{
    inv.initialize();
    setInventory(secureLocalStorage.getItem('inv'))
  },[]);

  return (
    <div className='w-full h-screen select-none'>
      <TopBar/>

      <h1 className='text-3xl font-bold text-center p-[5rem]'>INVENTORY</h1>

      <div className='flex flex-wrap justify-center items-center gap-3'>

      {Object.keys(inventory).length!=0?Object.keys(inventory).map(key=>(
        <div key={key} className='flex items-center w-[15rem] h-[13rem] flex-col border border-solid rounded shadow-md shadow-gray-400 p-2 pt-4'>
          <i className={`twa twa-3x twa-${itemlib[key]?.icon||'package'} text-center`}/>
          <div className='text-center pt-2'>
            <span className='text-base capitalize font-bold pr-2'>{itemlib[key]?.name}</span> 
            <span className='text-sm'>x{secureLocalStorage.getItem('inv')[key]}</span>
          </div>
          <div className='text-sm text-gray-800 w-[90%] text-center pb-3'>{itemlib[key]?.desc}</div>
          <div className='flex flex-wrap gap-2'>
          {itemlib[key]?.use!=undefined?<button className='text-xl text-center px-2 rounded bg-green-300 hover:bg-green-400' onClick={()=> {itemlib[key]?.use();}}>use</button>:<></>}
          {itemlib[key]?.sell!=undefined?<button className='text-xl text-center px-2 rounded bg-red-300 hover:bg-red-400'
          onClick={()=> {
            alert(`Sold ${itemlib[key].name} for ${itemlib[key]?.sell} flies.`)
            coin.addCoins(itemlib[key]?.sell);
            inv.subItem(key, 1);
          }}>sell</button>:<></>}
          
          </div>
        </div>
      )):<p className='text-gray-600'>You have nothing...</p>}

      </div>
    </div>
  )
}
