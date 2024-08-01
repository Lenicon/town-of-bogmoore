
import TopBar from "../components/TopBar";
import { places } from "../config/townSettings";


export default function Home() {

  return (
    <div className="select-none m-auto h-screen flex flex-col gap-10">
      <TopBar />

      <div id='title' className='text-center items-center flex flex-col justify-center pt-[5rem]'>
        <span className='text-xl'>Hi, wanna see something nice?</span>
        <span className='text-2xl'>Welcome to the <strong>Town of Bogmoore</strong></span>
      </div>

      <div className='flex flex-wrap justify-center items-center gap-5 text-center'>
        {places.map(([name, link, icon], id: number) => (
          <a className="no-underline flex flex-col gap-2 border justify-around shadow-sm shadow-gray-500 p-1 size-[7.5rem] items-center text-center bg-white hover:bg-gray-100 hover:underline" key={id} href={'/' + link}><i className={`leading-none tracking-tighter twa twa-4x twa-${icon}`}/>{name}</a>
        ))}
      </div>

      <footer className="text-center pt-20">Made with 💖 by Len.icon | <a href="https://github.com/Lenicon">Github</a> | <a href="https://lenicon.itch.io">Itch.io</a> | <a href="https://x.com/LeniconDev">X</a></footer>

    </div>
  )
}
