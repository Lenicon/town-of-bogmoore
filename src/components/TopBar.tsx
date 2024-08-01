import CoinDisplay from './CoinDisplay'
import { useLocation } from 'react-router-dom'

export default function TopBar() {
  const location = useLocation();

  return (
    <div className='flex flex-row gap-2 select-none fixed top-5 right-7'>
      {location.pathname!='/'?<a href='/'>
        <i className='twa twa-2x twa-house'/>
      </a>:<></>}

      {location.pathname!='/inventory'?<a href='/inventory'>
        <i className='twa twa-2x twa-backpack'/>
      </a>:<></>}

      <CoinDisplay/>
    </div>
  )
}
