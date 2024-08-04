
import TopBar from "../components/TopBar";
import { placesObj, POLicons, startingTxt } from "../config/townSettings";
import { random } from "../services/random";
import { checkAdmin } from "../services/useful";


export default function Home() {

  return (
    <div className="select-none m-auto h-screen flex flex-col gap-10">
      <TopBar />

      <div id='bg' className='bg-home w-screen h-screen fixed -z-[5]' />

      <div id='len' className='w-screen h-screen fixed -z-[4] top-[77vh] left-[88vw] origin-top-left scale-50'>
        <i id='body' className='twa twa-technologist text-[20rem] leading-none absolute' />
        <i id='head' className='twa twa-frog text-[17rem] absolute left-[4rem] -top-[3rem]'>
          <i id='eyebrow' className='bg-[#77B255] h-5 w-[3.8rem] rounded-b-full absolute left-[11.5rem] top-[4rem]' />
          <i id='eyebrow' className={`bg-[#77B255] h-5 w-[3.8rem] rounded-b-full absolute left-[1.8rem] top-[4rem]`} />
        </i>
      </div>


      <div id='title' className='text-center items-center flex flex-col justify-center md:pt-[3rem] pt-[5rem]'>
        <span className='text-xl'>{startingTxt[random(startingTxt.length)]}</span>
        <span className='text-2xl'>Welcome to the <strong>Town of Bogmoore</strong>!</span>
      </div>

      <div className='flex flex-wrap justify-center items-center gap-5 text-center lg:mx-[10rem] md:mx-20'>
        {Object.keys(placesObj).map(key => (
          <a title={key.startsWith('?') ? 'Coming Soon...':undefined} className={`no-underline rounded bg-white ${placesObj[key]?.route == null || key.startsWith('?') ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-100 hover:underline border hover:border-yellow-200 hover:shadow-yellow-500'} flex flex-col gap-2 justify-around shadow-sm shadow-gray-500 p-1 size-[7.5rem] items-center text-center`}
            key={key} href={placesObj[key].route!=null ? (key.startsWith('?') ? (checkAdmin()?'/' + key.replace('?',''):undefined):'/' + key) : undefined} aria-disabled={placesObj[key]?.route == null}>
            <i className={`leading-none tracking-tighter twa twa-4x twa-${key.startsWith('!') ? POLicons[random(POLicons.length)] : placesObj[key].icon}`} />
            {key.startsWith('!') ? 'Plot of Land' : placesObj[key].title}
          </a>
        ))}
      </div>

      <footer className="text-center pb-5">Made with 💖 by Len.icon | <a href="https://github.com/Lenicon">Github</a> | <a href="https://lenicon.itch.io">Itch.io</a> | <a href="https://x.com/LeniconDev">X</a></footer>

    </div>
  )
}
