import TopBar from '../components/TopBar';
import * as coin from '../services/manageCoins';
import * as inv from '../services/manageInventory';
import { random, randrange } from '../services/random';
import { getStatus, setStatus } from '../services/manageStatus';
import * as datefns from 'date-fns';


export default function Shrine() {
  let prayerformat = "Oh Holy Amphi, guardian of the sacred waters, we thank you for your constant protection. Guide us with your wisdom and grace us as we seek your blessings for"

  const pray = () => {

    if (getStatus('prayedToShrine') != null || getStatus('prayedToShrine') != undefined) {
      let pts: Date = new Date(getStatus('prayedToShrine'));
      if (datefns.format(pts, 'MMM dd yyyy') == datefns.format(new Date(), 'MMM dd yyyy')) return alert('You have already prayed today...');
    };

    let prayer = window.prompt('"Pray with us... and please follow the format..."');

    let format = prayerformat.toLowerCase();

    if (prayer?.trim() == '' || prayer == undefined) return alert('"We hope you pray with us..."');

    let prayerfinal = prayer.toLowerCase().replace(/^\s+|\s+$|\s+(?=\s)/g, "").trim();
    if (prayerfinal.startsWith(format)) {
      let desire = prayerfinal.replace(format, '');

      alert('You prayed to the shrine...');

      if (desire.match(/money|cash|fly|flies|debt(s)?|rich(es)?/)) {

        let rand = random(6);
        if ([3, 4, 5].includes(rand)) {
          let r = randrange(10, 20)
          alert(`A beam of light came down, and ${r} flies flew around you.`)
          coin.addCoins(r);
        } else if (rand == 6) {
          let r = randrange(21, 30)
          alert(`A bright beam of light came down, and ${r} flies flew around you.`)
          coin.addCoins(r);
        }
      }
      else if (desire.match(/gift(s)?|present(s)?|item(s)?|stuff|thing(s)?/)) {
        let rand = random(8);
        if ([4, 5].includes(rand)) {
          let r = randrange(1, 3)
          alert(`A beam of light came down, and ${r} boxes fell near you.`)
          inv.addItem('mysteryGift', r);
        } else if ([6].includes(rand)) {
          let r = randrange(4, 6)
          alert(`A bright beam of light came down, and ${r} boxes fell near you.`)
          inv.addItem('mysteryGift', r);
        }

        return setStatus('prayedToShrine', new Date());
      }
      else return;

    };
  }

  const donate = () => {
    let prompt = window.prompt(`"We would be delighted to receive a donation..."`, '1');
    let amount = Number(prompt)
    if (!amount || amount < 1 || amount > coin.getCoins()) return alert('"Please come again..."');
    
    if(amount > 0 && amount < 6) alert('"We thank you for your donation..."');
    else if(amount > 5 && amount < 11) alert('"We thank you for your kind donation..."');
    else if(amount > 10 && amount < 21) alert('"We thank you for your generous donation!"');
    else if(amount > 20 && amount < 51) alert('"We sincerely thank you for your most generous donation!!"');
    else if(amount > 50 && amount < 1000) alert('" OH AMPHI! WE DEEPLY THANK YOU FOR YOUR SOULFUL AND MOST GENEROUS DONATION!!!"');
    else if(amount > 1000) alert('"OH HOLY AMPHI! THANK YOU!! WE DEEPLY AND SINCERELY THANKFUL FOR YOUR SOULFUL AND HEARTFELT DONATION WITH OUTMOST GENEROSITY!! THANK YOU SO MUCH!!"');;
    
    return coin.subCoins(amount);

  }

  return (
    <div className='select-none m-auto h-screen'>
      <TopBar />

      <div id='bg' className='bg-shrine w-screen h-screen fixed -z-[5]' />

      <div id='shrinekeeper_R' className='w-screen h-screen fixed -z-[4] top-[51vh] left-[75vw]'>
        <i id='body' className='twa twa-woman-bowing-medium-skin-tone text-[20rem] leading-none absolute' />
        <i id='head' className='twa twa-frog text-[17rem] absolute left-[2rem] -top-[1rem]'>
          <i id='eyebrow' className='bg-[#77B255] h-[3.2rem] w-[4rem] rounded-full absolute left-[11.45rem] top-[1.6rem]' />
          <i id='eyebrow' className={`bg-[#77B255] h-[3.2rem] w-[4rem] rounded-full absolute left-[1.55rem] top-[1.6rem]`} />
        </i>
      </div>

      <div id='shrinekeeper_L' className='w-screen h-screen fixed -z-[4] top-[51vh] right-10'>
        <i id='body' className='twa twa-man-bowing-light-skin-tone text-[20rem] leading-none absolute' />
        <i id='head' className='twa twa-frog text-[17rem] absolute left-[2rem] -top-[1rem]'>
          <i id='eyebrow' className='bg-[#77B255] h-[3.2rem] w-[4rem] rounded-full absolute left-[11.45rem] top-[1.6rem]' />
          <i id='eyebrow' className={`bg-[#77B255] h-[3.2rem] w-[4rem] rounded-full absolute left-[1.55rem] top-[1.6rem]`} />
        </i>
      </div>

      <div className='m-auto md:w-[50vw] w-[90vw]'>
        <div className='text-center pt-10'>
          <i className='twa twa-shinto-shrine text-[15rem]' />
        </div>

        <div className='text-center flex flex-col m-10 mt-14 gap-5 justify-center items-center bg-white shadow-md shadow-gray-500 rounded-lg'>
          <p className='text-center italic flex justify-center mt-5 p-3'>{prayerformat + '... [Insert Personal Desire].'}</p>
          
          <div className='flex flex-wrap gap-2'>
          <button onClick={pray} className='text-xl bg-yellow-200 py-3 px-5 mb-10 rounded shado hover:bg-yellow-300'>Pray to the <strong>Holy Amphi</strong></button>
          <button onClick={donate} className='text-xl bg-pink-200 py-3 px-5 mb-10 rounded shado hover:bg-pink-300'><strong>Donate</strong></button>
          
          </div>
        </div>
      </div>
    </div>
  )
}
