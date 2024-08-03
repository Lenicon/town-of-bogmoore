import secureLocalStorage from 'react-secure-storage';
import * as inv from '../services/manageInventory';
import * as coin from '../services/manageCoins';

import { itemlib } from '../config/itemsLibrary';
import { useEffect, useState } from 'react';
import TopBar from '../components/TopBar';
import { getStatus } from '../services/manageStatus';


export default function Inventory() {
  const [inventory, setInventory] = useState({});

  useEffect(() => {
    setInventory(secureLocalStorage.getItem('inv'))
  }, []);

  const sell = (key:string) => {

    let prompt = window.prompt('How many items to Dispose/Sell?', '1');
    let amount = Number(prompt);
    if (!amount || prompt?.trim() == '' || prompt == null || amount<1) return;

    if (amount > inv.getItem(key)) amount = inv.getItem(key);

    let sell = itemlib[key]?.sell * amount;
    let thief = getStatus('boneThief');
    if (thief || thief == true) {
      if (sell > 0) {
        alert(`Sold ${amount} ${itemlib[key].name} for... NOTHING! I think you just got robbed! Well, what goes around comes around I guess.`);
      }
      else {
        let dispose = sell * 2;
        alert(`Disposed ${amount} ${itemlib[key]?.name} and paid ${dispose} for disposal fees. What, you thought people would buy these?`);
        coin.subCoins(dispose);
      }
    } else {
      if (sell > 0) {
        alert(`Sold ${amount} ${itemlib[key].name} for ${sell} flies.`);
        coin.addCoins(sell);
      }
      else {
        let dispose = sell;
        alert(`Disposed ${amount} ${itemlib[key]?.name} and paid ${dispose} for disposal fees. What, you thought people would buy these?`);
        coin.addCoins(dispose);

      }
    }

    return inv.subItem(key, amount);

  }

  return (
    <div className='w-full h-screen select-none'>
      <TopBar />

      <div id='bg' className='bg-inventory w-screen h-screen fixed -z-[5]'/>

      <h1 className='text-3xl font-bold text-center pt-[4.5rem] pb-[3rem]'>
        <i className='twa twa-backpack'/>
        <span className='pl-3 pr-2 leading-none'>INVENTORY</span>
        <i className='twa twa-backpack'/>
      </h1>

      <div className='flex flex-wrap justify-center items-center gap-3 lg:mx-[10rem] md:mx-20 pb-16'>

        {Object.keys(inventory).length != 1 ? Object.keys(inventory).filter(val => val != 'secretID').map(key => (
          <div key={key} className='flex justify-between items-center size-[13rem] flex-col border border-solid rounded shadow-md shadow-gray-400 p-2 py-5 bg-white'>
            <i className={`twa twa-3x twa-${itemlib[key]?.icon || 'package'} leading-none`} />

            <div className='text-center'>
              <div id='title'>
                <span className='text-base capitalize font-bold pr-2'>{itemlib[key]?.name}</span>
                <span className='text-sm'>x{secureLocalStorage.getItem('inv')[key]}</span>
              </div>
              <div className='text-sm text-gray-800'>{itemlib[key]?.desc}</div>
            </div>

            <div id='functions' className='flex flex-wrap gap-2'>
              {itemlib[key]?.use != undefined ? <button className='text-xl text-center px-2 rounded bg-green-300 hover:bg-green-400' onClick={() => { itemlib[key]?.use(); inv.subItem(key, 1) }}>use</button> : <></>}
              {itemlib[key]?.sell != undefined ? <button className='text-xl text-center px-2 rounded bg-red-300 hover:bg-red-400'
                onClick={() => sell(key)}>sell</button> : <></>}

            </div>
          </div>
        )) : <p className='text-gray-600'>You have nothing...</p>}

      </div>
    </div>
  )
}
