
import { useEffect, useState } from 'react';
import CoinDisplay from './CoinDisplay'
import { useLocation } from 'react-router-dom'
import { initialize as initStat } from '../services/manageStatus';
import { initialize as initInv } from '../services/manageInventory';
import { initialize as initCoin } from '../services/manageCoins';
import secureLocalStorage from 'react-secure-storage';

export default function TopBar() {
  const [coin, setCoin] = useState(0);
  const location = useLocation();

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
    <div className='flex flex-row gap-2 select-none fixed top-5 right-7'>
      {location.pathname!='/'?<a title='Back to Entrance' href='/'>
        <i className='twa twa-2x twa-houses'/>
      </a>:<></>}

      {location.pathname!='/inventory'?<a title='Open Inventory' href='/inventory'>
        <i className='twa twa-2x twa-backpack'/>
      </a>:<></>}

      <CoinDisplay coin={coin}/>
    </div>
  )
}
