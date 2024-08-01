

import { useEffect } from 'react';
import TopBar from '../components/TopBar';
import * as coin from '../services/manageCoins';
import * as inv from '../services/manageInventory';
import { random, randrange } from '../services/random';
import { getStatus, setStatus } from '../services/manageStatus';
import * as datefns from 'date-fns';


export default function Shrine() {
  let prayerformat = "Oh Holy Amphi, guardian of the sacred waters, I thank you for your constant protection. Guide us with your wisdom and grace us as we seek your blessings for"

  const pray = () => {
    
    if (getStatus('prayedToShrine') != null || getStatus('prayedToShrine') != undefined) {
      let pts:Date = new Date(getStatus('prayedToShrine'));
      if (datefns.format(pts, 'MMM dd yyyy') == datefns.format(new Date(), 'MMM dd yyyy')) return alert('You have already prayed today...');
    };

    let prayer = window.prompt('Recite the prayer with following the format...');

    let format = prayerformat.toLowerCase();

    if (prayer?.trim() == '' || prayer == undefined) return;

    let prayerfinal = prayer.toLowerCase().replace(/^\s+|\s+$|\s+(?=\s)/g, "").trim();
    if (prayerfinal.startsWith(format)) {
      let desire = prayerfinal.replace(format, '');

      alert('You prayed to the shrine...');

      if (desire.match(/money|cash|fly|flies|debt(s)?|rich(es)?/)) {
        
        let rand = random(6);
        if ([3, 4, 5].includes(rand)) {
          let r = randrange(15, 25)
          alert(`A beam of light came down, and ${r} flies flew around you.`)
          coin.addCoins(r);
        } else if (rand == 6) {
          let r = randrange(25, 35)
          alert(`A bright beam of light came down, and ${r} flies flew around you.`)
          coin.addCoins(r);
        }
      }
      else if (desire.match(/gift(s)?|present(s)?|item(s)?|stuff|thing(s)?/)) {
        let rand = random(6);
        if ([3, 4, 5].includes(rand)) {
          let r = randrange(2, 4)
          alert(`A beam of light came down, and ${r} boxes fell near you.`)
          inv.addItem('mysteryGift', r);
        } else if (rand == 6) {
          let r = randrange(4, 6)
          alert(`A bright beam of light came down, and ${r} boxes fell near you.`)
          inv.addItem('mysteryGift', r);
        }

        return setStatus('prayedToShrine', new Date());
      }
      else return;

    };
  }

  return (
    <div className='select-none m-auto h-screen md:w-[50vw] w-[90vw]'>
      <TopBar />

      <div className='text-center pt-16'>
        <i className='twa twa-shinto-shrine text-[10rem]' />
      </div>

      <div className='text-center flex flex-col gap-5 justify-center items-center'>
        <p className='text-center italic m-10 mt-14 flex justify-center'>{prayerformat+'... [Insert Personal Desire].'}</p>
        <button onClick={pray} className='text-xl bg-yellow-200 py-3 px-5 rounded hover:bg-yellow-300'>Pray to the <strong>Holy Amphi</strong></button>
      </div>

    </div>
  )
}
