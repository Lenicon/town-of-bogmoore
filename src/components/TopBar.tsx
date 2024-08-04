
import { useEffect, useState } from 'react';
import CoinDisplay from './CoinDisplay'
import { useLocation, useNavigate } from 'react-router-dom'
import { initialize as initStat } from '../services/manageStatus';
import { initialize as initInv } from '../services/manageInventory';
import { initialize as initCoin } from '../services/manageCoins';
import secureLocalStorage from 'react-secure-storage';

export default function TopBar() {
  const [coin, setCoin] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(()=>{
    const start = async() => {
      let secretID = await initStat();
      await initInv(secretID);
      await initCoin();
      await setCoin(secureLocalStorage.getItem('P'));
    }

    start();
    
  },[])


  return (
    <div className='flex flex-row gap-3 select-none fixed top-5 right-7 z-50'>
      {location.pathname!='/'?<a title='Go to Entrance' href='/'>
        <i className='twa twa-2x twa-houses'><p className='text-[1.3rem]'>🏘️</p></i>
      </a>:<></>}

      {location.pathname!='/'?<a title='Go Back' className='hover:cursor-pointer' onClick={()=>navigate(-1)}>
        <i className='twa twa-2x twa-back-arrow bg-gray-100 rounded-sm'><p className='text-[1.3rem]'>🔙</p></i>
      </a>:<></>}

      {location.pathname!='/inventory'?<a title='Open Inventory' href='/inventory'>
        <i className='twa twa-2x twa-backpack'><p className='text-[1.3rem]'>🎒</p></i>
      </a>:<></>}

      <CoinDisplay coin={coin}/>
    </div>
  )
}
