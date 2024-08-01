import { useEffect, useState } from 'react'
import TopBar from '../components/TopBar';
import useSound from 'use-sound';
import dogSound from '../assets/sounds/dogSounds.mp3';

export default function Doghouse() {
  
  const [dogState, setDogState] = useState(0);

  const [play, { stop }] = useSound(dogSound, {
    sprite: {
      grr: [0, 10000],
      bark: [11000, 16000],
    }
  });

  useEffect(() => {
    switch (dogState) {
      case 1:
        stop();
        play({ id: 'grr' });
        break;
      case 2:
        stop();
        play({ id: 'bark' });
        break;
      default:
        stop();
        break;
    }
  }, [dogState]);


  return (
    <div className='select-none m-auto'>
      <TopBar />

      <div id='bg' className='grass-bg w-screen h-screen fixed -z-[5]' onMouseOver={() => setDogState(0)} />

      <div id='dogsection'>
        <div aria-label='collision' className='bg-red-300 size-[40rem] rounded-full fixed-center' onMouseOver={() => setDogState(1)} />
        <div aria-label='collision' className='bg-red-400 size-[25rem] rounded-full fixed-center' onMouseOver={() => {setDogState(2);}} />
        
        {dogState==2?<div id='bark' className='font-bold fixed fixed-center z-[6]'>
          <p className='-translate-y-20 text-white'>BARK!</p>
          <p className='-rotate-45 -translate-x-16 -translate-y-[4.5rem]'>BARK!</p>
          <p className='rotate-45 translate-x-16 -translate-y-[6rem]'>BARK!</p>
        </div>:<></>}

        {dogState==1?<div id='gurr' className='font-bold fixed fixed-center z-[6]'><p className='translate-y-2 -translate-x-14'>grrr....</p></div>:<></>}

        <i id='hut' className='twa twa-hut text-[20rem] fixed-center-emoji -translate-x-[60%] -translate-y-[110%]' />
        <button id='dog'>
          <div id='eyelids' className={`bg-[#D99E82] fixed-center-emoji w-12 h-5 z-[5] -translate-x-[50%] ${dogState == 0 ? '-translate-y-[240%]' : ''}${dogState == 1 ? '-translate-y-[270%]' : ''}${dogState == 2 ? '-translate-y-[300%]' : ''}`} />
          <i className='bg-red-200 twa twa-dog-face rounded-[2rem] text-[7rem] leading-none fixed-center-emoji -translate-x-[60%] -translate-y-[75%] z-[4]' />
        </button>

        <div className='w-[8rem] h-[3.5rem] bg-red-400 fixed-center-emoji -translate-x-[50%] translate-y-[165%] z-[2]' onMouseOver={() => setDogState(2)} />
        <div className='w-[8rem] h-[3.5rem] bg-red-400 fixed-center-emoji -translate-x-[50%] -translate-y-[30%] z-[2]' />

        <button id='bone'>
          <i className='twa twa-bone text-[7rem] bg-red-100 fixed-center-emoji leading-none -translate-x-[60%] translate-y-[10%] -rotate-45' />
        </button>

      </div>

    </div>
  )
}
