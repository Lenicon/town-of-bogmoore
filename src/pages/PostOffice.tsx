import TopBar from "../components/TopBar";

export default function PostOffice() {

  return (
    <div className="w-full h-screen select-none pointer-events-auto">
      <TopBar />

      <div id='bg' className='bg-shop w-screen h-screen fixed -z-[5]' />

      <div id='postofficeLady' className='w-screen h-screen fixed top-[20vh] right-[14vw]'>
        <i id='body' className='twa twa-woman-in-motorized-wheelchair-light-skin-tone text-[50rem] -scale-x-100 leading-none absolute' />
        
        <i id='head' className='twa twa-frog text-[15rem] absolute left-[13.5rem] -top-[4rem] cursor-help'>
          <i id='eyebrow' className='bg-[#77B255] h-[0.5rem] w-[2rem] absolute left-[11rem] top-[1.4rem]' />
          <i id='eyebrow' className='bg-[#77B255] h-[0.8rem] w-[2.8rem] rounded-full absolute left-[1.9rem] top-[1.2rem] origin-center' />
        </i>
        <i id="table" className="twa twa-identification-card text-[40rem] absolute left-[5rem] top-[15rem]"/>
        </div>


    </div>
  )
}
