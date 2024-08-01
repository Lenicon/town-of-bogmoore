
import TopBar from "../components/TopBar";


export default function Home() {

  return (
    <div>
      <TopBar />

      <div id='title' className='text-center items-center flex flex-col justify-center mt-8'>
        <span className='text-xl'>Hi there, my name is Len.</span>
        <span className='text-2xl'>Welcome to my Playground!</span>
      </div>

      <div className='flex justify-center items-center gap-5 mt-5'>
        {[
          ['Dog House', 'doghouse']
        ].map(([name, link], id: number) => (
          <a key={id} href={'/' + link}>{name}</a>
        ))}
      </div>

    </div>
  )
}
