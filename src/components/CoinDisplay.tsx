import { useEffect, useState } from 'react';
import { initCoins } from '../services/manageCoins';

export default function CoinDisplay() {
  const [coin, setCoin] = useState(0);

  useEffect(() => {
    let i = initCoins();
    setCoin(i);
  },[]);

  return (
    <div id='coins' className='flex flex-row gap-1 font-semibold pl-2'>
      <i className='twa twa-2x twa-fly'/>
      <span className='text-3xl'>{coin}</span>
    </div>
  )
}
