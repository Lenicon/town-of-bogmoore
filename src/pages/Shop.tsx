import secureLocalStorage from 'react-secure-storage';
import * as inv from '../services/manageInventory';
import * as coin from '../services/manageCoins';

import { itemlib } from '../config/itemsLibrary';
import { Key, useEffect, useState } from 'react';
import TopBar from '../components/TopBar';
import { getStatus } from '../services/manageStatus';
import { generalStock, weeklyStock } from '../config/shopStocks';
import { format } from 'date-fns';


export default function Shop() {
  const [shopInventory, setShopInventory] = useState({});

  useEffect(() => {
    setShopInventory(secureLocalStorage.getItem('inv'))
  }, []);

  const buy = (key: string) => {
    let price = itemlib[key]?.buy;
    if (getStatus('boneThief')) price = itemlib[key]?.buy * 2
    alert(`Bought 1 ${itemlib[key]?.name} for ${price} flies!`);
    inv.addItem(key, 1);
    coin.subCoins(price);
  }

  return (
    <div className='w-full h-screen select-none'>
      <TopBar />

      <h1 className='text-3xl font-bold text-center pt-20 pb-[3rem]'>SHOP</h1>

      <div className='flex flex-wrap justify-center items-center gap-3 lg:mx-[10rem] md:mx-20 pb-10'>
        {/* STOLEN STOCK */}
        {getStatus('boneThief') && !inv.getItem('cappuccinoBone') ? ['cappuccinoBone'].map(key => (
          <div key={key} className='flex justify-between items-center w-[13rem] h-[13rem] flex-col border border-solid rounded shadow-md shadow-gray-400 p-2 py-5'>
            <i id='icon' className={`twa twa-3x twa-${itemlib[key]?.icon || 'package'} text-center leading-none tracking-tighter`} />

            <div id='about' className='flex flex-col text-center'>
              <span className='text-base capitalize font-bold'>{itemlib[key]?.name}</span>
              <span className='text-sm text-gray-800'>{itemlib[key]?.desc}</span>
            </div>

            <div id='buttons' className='flex justify-between w-[70%]'>
              <p className='text-xl text-center flex flex-row font-bold'>
                <i className='twa twa-lg twa-fly leading-none tracking-tighter' />
                <span className='text-thief'>{itemlib[key]?.buy*2}</span>
              </p>
              <button className='text-xl text-center px-2 rounded bg-green-300 hover:bg-green-400' onClick={() => buy(key)}>buy
              </button>
            </div>
          </div>
        )):<></>}

        {/* GENERAL STOCK */}
        {generalStock.map(key => (
          <div key={key} className='flex justify-between items-center w-[13rem] h-[13rem] flex-col border border-solid rounded shadow-md shadow-gray-400 p-2 py-5'>
            <i id='icon' className={`twa twa-3x twa-${itemlib[key]?.icon || 'package'} text-center leading-none tracking-tighter`} />

            <div id='about' className='flex flex-col text-center'>
              <span className='text-base capitalize font-bold'>{itemlib[key]?.name}</span>
              <span className='text-sm text-gray-800'>{itemlib[key]?.desc}</span>
            </div>

            <div id='buttons' className='flex justify-between w-[70%]'>
              <p className='text-xl text-center flex flex-row font-bold'>
                <i className='twa twa-lg twa-fly leading-none tracking-tighter' />
                <span className={getStatus('boneThief')?'text-thief':''}>{getStatus('boneThief')?itemlib[key]?.buy*2:itemlib[key]?.buy}</span>
              </p>
              <button className='text-xl text-center px-2 rounded bg-green-300 hover:bg-green-400' onClick={() => buy(key)}>buy
              </button>
            </div>
          </div>
        ))}

        {/* WEEKLYSTOCK */}

        {weeklyStock[format(new Date(), 'EEE')].map((key: any) => (
          <div key={key} className='flex justify-evenly items-center size-[13rem] flex-col border border-solid rounded shadow-md shadow-gray-400 p-2'>
            <i id='icon' className={`twa twa-3x twa-${itemlib[key]?.icon || 'package'} text-center`} />

            <div id='about' className='flex flex-col text-center'>
              <span className='text-base capitalize font-bold'>{itemlib[key]?.name}</span>
              <span className='text-sm text-gray-800'>{itemlib[key]?.desc}</span>
            </div>

            <div id='buttons' className='flex justify-between w-[70%]'>
              <p className='text-xl text-center flex flex-row font-bold'>
                <i className='twa twa-lg twa-fly leading-none tracking-tighter' />
                <span className={getStatus('boneThief')?'text-thief':''}>{getStatus('boneThief')?itemlib[key]?.buy*2:itemlib[key]?.buy}</span>
              </p>
              <button className='text-xl text-center px-2 rounded bg-green-300 hover:bg-green-400' onClick={() => buy(key)}>buy
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}
