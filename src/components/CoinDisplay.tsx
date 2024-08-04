export default function CoinDisplay({coin}:{coin:number}) {

  return (
    <div id='coins' className='flex flex-row gap-1 font-semibold pl-2'>
      <i className='twa twa-2x twa-fly'><p className='text-[1.3rem]'>🪰</p></i>
      <span className='text-3xl'>{coin}</span>
    </div>
  )
}
