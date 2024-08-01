import * as inv from '../services/manageInventory';
import * as coin from '../services/manageCoins';


export const itemlib:any = {
  'bone':{name:'Bone', sell:20, desc:'Bone from Cappucino.', icon:'bone'},
  'trash':{name:'Useless Trash', sell:-5, desc:'Just plain garbage. Why does this exist?',  icon:'index-pointing-at-the-viewer'},
  'mysteryGift':{name:'Mystery Gift', sell:50, desc:"Open it! I wonder what's inside...", icon:'wrapped-gift', use:function use(){
    let keys = Object.keys(itemlib).filter(value=>value!='mysteryGift');
    let random = keys[Math.floor(Math.random() * keys.length)];
    
    alert(`Gained 1 ${itemlib[random].name}!`);
    inv.addItem(random, 1);
    inv.subItem('mysteryGift', 1);
  }},
  'flyjar':{name:'Fly Jar', sell:3, desc:"There's some flies inside.", icon:'jar', use:function use(){
    let gain = Math.floor(Math.random() * 6);
    alert(`Found ${gain} flies inside!`)
    coin.addCoins(gain)
    inv.subItem('flyjar', 1);
  }},
}