import * as inv from '../services/manageInventory';
import * as coin from '../services/manageCoins';

import { itemlib } from '../config/itemsLibrary';
import TopBar from '../components/TopBar';
import { getStatus } from '../services/manageStatus';
import { generalStock, weeklyStock } from '../config/shopStocks';
import { format } from 'date-fns';
import { useEffect, useRef, useState } from 'react';
import { delayedAlert } from '../services/useful';


export default function Store() {

  const effected = useRef(false);

  const [shopkeeperState, setShopkeeperState] = useState(0);

  useEffect(() => {
    function test() {
      effected.current = true;
      delayedAlert('"Welcome sir..."');
    }

    if (!effected) test();

  }, [effected])

  const buy = async (key: string, stock: number = -1) => {
    let prompt: string | null = '1';
    if (stock != 1) prompt = window.prompt('"How many sir...?"', '1');
    let amountNum = Number(prompt);

    if (!amountNum || prompt?.trim() == '' || prompt == null || amountNum < 1) {
      setShopkeeperState(0);
      return delayedAlert('"Feel free to pick anything sir..."');
    }

    let price = itemlib[key]?.buy * amountNum;
    if (getStatus('boneThief')) price = (itemlib[key]?.buy * amountNum) * 2

    if (price > coin.getCoins()) {
      setShopkeeperState(Number(!shopkeeperState));
      return delayedAlert(`"You need ${price - coin.getCoins()} more flies sir..."`);
    }

    setShopkeeperState(0);
    alert(`"That's ${amountNum} ${itemlib[key]?.name} for ${price} flies... What else sir...?"`);
    inv.addItem(key, amountNum);
    coin.subCoins(price);
  }

  return (
    <div className='w-full h-screen select-none'>
      <TopBar />

      <div id='bg' className='bg-shop w-screen h-screen fixed -z-[5]' />

      <div id='shopkeeper' className='w-screen h-screen fixed -z-[4] top-[20vh] left-[47.5vw]'>
        <i id='body' className='twa twa-man-standing-dark-skin-tone text-[50rem] leading-none absolute' />
        <i id='head' className='twa twa-frog text-[13.5rem] absolute left-[22rem] -top-[1.4rem]'>
          <i id='eyebrow' className='bg-[#77B255] h-5 w-[2.8rem] rounded-t-full absolute left-[9.4rem] top-[1.3rem]' />
          <i id='eyebrow' className={`bg-[#77B255] h-5 w-[2.8rem] rounded-t-full absolute left-[1.4rem] ${shopkeeperState == 0 ? 'top-[1.3rem]' : 'top-[1rem]'}`} />
        </i>
        <i id="table" className="twa twa-credit-card text-[40rem] absolute left-[4rem] top-[15rem]"/>
      </div>

      <h1 className='text-3xl font-bold text-center pt-[3.5rem] pb-[3rem] lg:mx-[10rem] lg:pr-[20vw] md:mx-20 mx-0'>
        <i className='twa twa-shopping-bags' />
        <span className='pl-3 pr-2 leading-none'>GENERAL STORE</span>
        <i className='twa twa-shopping-bags' />
      </h1>

      <div className='flex flex-wrap justify-center items-center gap-3 lg:mx-[10rem] lg:pr-[20vw] md:mx-20 mx-0 pb-10'>
        {/* STOLEN STOCK */}
        {getStatus('boneThief') && !inv.getItem('cappuccinoBone') ? ['cappuccinoBone'].map(key => (
          <div key={key} className='flex justify-between items-center w-[13rem] h-[13rem] flex-col border border-solid rounded shadow-md shadow-gray-400 p-2 py-5 bg-white'>
            <i id='icon' className={`twa twa-3x twa-${itemlib[key]?.icon || 'package'} text-center leading-none tracking-tighter`} />

            <div id='about' className='flex flex-col text-center'>
              <span className='text-base capitalize font-bold'>{itemlib[key]?.name}</span>
              <span className='text-sm text-gray-800'>{itemlib[key]?.desc}</span>
            </div>

            <div id='buttons' className='flex justify-between w-[70%]'>
              <p className='text-xl text-center flex flex-row font-bold'>
                <i className='twa twa-lg twa-fly leading-none tracking-tighter' />
                <span className='text-thief'>{itemlib[key]?.buy * 2}</span>
              </p>
              <button className='text-xl text-center px-2 rounded bg-green-300 hover:bg-green-400' onClick={() => buy(key, 1)}>buy
              </button>
            </div>
          </div>
        )) : <></>}

        {/* GENERAL STOCK */}
        {generalStock.map(key => (
          <div key={key} className='flex justify-between items-center w-[13rem] h-[13rem] flex-col border border-solid rounded shadow-md shadow-gray-400 p-2 py-5 bg-white'>
            <i id='icon' className={`twa twa-3x twa-${itemlib[key]?.icon || 'package'} text-center leading-none tracking-tighter`} />

            <div id='about' className='flex flex-col text-center'>
              <span className='text-base capitalize font-bold'>{itemlib[key]?.name}</span>
              <span className='text-sm text-gray-800'>{itemlib[key]?.desc}</span>
            </div>

            <div id='buttons' className='flex justify-between w-[70%]'>
              <p className='text-xl text-center flex flex-row font-bold'>
                <i className='twa twa-lg twa-fly leading-none tracking-tighter' />
                <span className={getStatus('boneThief') ? 'text-thief' : ''}>{getStatus('boneThief') ? itemlib[key]?.buy * 2 : itemlib[key]?.buy}</span>
              </p>
              <button className='text-xl text-center px-2 rounded bg-green-300 hover:bg-green-400' onClick={() => buy(key)}>buy
              </button>
            </div>
          </div>
        ))}

        {/* WEEKLYSTOCK */}

        {weeklyStock[format(new Date(), 'EEE')].map((key: any) => (
          <div key={key} className='flex justify-evenly items-center size-[13rem] flex-col border border-solid rounded shadow-md shadow-gray-400 p-2 bg-white'>
            <i id='icon' className={`twa twa-3x twa-${itemlib[key]?.icon || 'package'} text-center`} />

            <div id='about' className='flex flex-col text-center'>
              <span className='text-base capitalize font-bold'>{itemlib[key]?.name}</span>
              <span className='text-sm text-gray-800'>{itemlib[key]?.desc}</span>
            </div>

            <div id='buttons' className='flex justify-between w-[70%]'>
              <p className='text-xl text-center flex flex-row font-bold'>
                <i className='twa twa-lg twa-fly leading-none tracking-tighter' />
                <span className={getStatus('boneThief') ? 'text-thief' : ''}>{getStatus('boneThief') ? itemlib[key]?.buy * 2 : itemlib[key]?.buy}</span>
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
