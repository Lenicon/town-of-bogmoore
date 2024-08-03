import * as inv from '../services/manageInventory';
import * as coin from '../services/manageCoins';
import { random } from '../services/random';


export const itemlib: any = {
  'cappuccinoBone': { name: 'Bone', sell: 20, buy: 15, desc: `A Special Bone with Cappuccino's scent.`, icon: 'bone' },
  'bone': { name: 'Bone', sell: 5, buy: 10, desc: `A normal bone that came from an animal.`, icon: 'bone' },
  'letterPaper': {
    name: 'Letter Paper', sell: 1, buy: 10, desc: 'A paper for writing letters.', icon: 'memo', use: function use() {
      let write = prompt('Write something...');
      if (write?.trim() == '' || write == undefined) return;
      let final = write.toLowerCase();
      let sorrymatch = final.match(/sor(y|rry|rrry|yy|rryyy)?|sori|sowwy|apolog(y|ies|ize)?|my bad/);
      if (sorrymatch != null && sorrymatch != undefined) {
        inv.addItem('apologyLetter', 1);
      }
      else if (final.startsWith('/fly ') && localStorage.getItem('mode') == 'test') {
        let arg = final.replace('/fly ', '').trim();
        console.log(arg);
        if (arg == '' || !Number(arg)) return;
        coin.addCoins(Number(arg));
      }
      else if (write.startsWith('/give ') && localStorage.getItem('mode') == 'test') {
        let arg = write.replace('/give ', '').trim().split(' ');
        console.log(arg);
        if (arg[0] == '' || !itemlib[arg[0]]) return;
        
        let amount = Number(arg[1]);
        if (!amount) amount = 1;
        console.log(amount);
        
        inv.addItem(arg[0], amount);
      }
      else {
        inv.addItem('letter', 1);
      }
    }
  },
  'letter': { name: 'Letter', sell: -1, desc: 'An envelope containing stuff you wrote.', icon: 'envelope' },
  'apologyLetter': { name: 'Apology Letter', sell: -1, desc: 'A letter about how sorry you are.', icon: 'envelope' },

  'trash': { name: 'Useless Trash', sell: -5, desc: 'Just plain garbage. Why does this exist?', icon: 'index-pointing-at-the-viewer' },

  'mysteryGift': {
    name: 'Mystery Gift', sell: 30, desc: "Open it! I wonder what's inside...", icon: 'wrapped-gift', use: function use() {
      let keys = Object.keys(itemlib).filter(value => value != 'mysteryGift');
      let item = keys[random(keys.length)];

      inv.addItem(item, 1);
    }
  },

  'flyjar': {
    name: 'Fly Jar', sell: 3, desc: "There's some flies inside.", icon: 'jar', use: function use() {
      let gain = random(10);
      if (gain == 0) gain = 1;
      alert(`Found ${gain} flies inside!`)
      coin.addCoins(gain);
    }
  },

  'buzzJuice': { name: 'Buzz Juice™', sell: 5, buy: 10, desc: 'Made with flies and apple zest.', icon: 'beverage-box' },
  'coffee': { name: 'Coffee', sell: 6, buy: 12, desc: 'A drink to get your day going.', icon: 'hot-beverage' },

  'snail': { name: 'Snail', sell: 5, buy: 10, desc: `Suck the shells, it's really good!`, icon: 'snail' },
  'dogFood': { name: 'Dog Food', sell: 5, buy: 15, desc: 'Food for dogs. Caution: Cool down before feeding it.', icon: 'hot-dog' },
  'calmingPill': { name: 'Calming Pill', sell: 10, buy: 20, desc: 'Consume to feel calm.', icon: 'teacup-without-handle' },

  'cockroach': { name: 'Cockroach', sell: 5, buy: 10, desc: 'Thick crawlers, has a distinct taste!', icon: 'cockroach' },
  'cowPoop': { name: 'Cow Poop', sell: 0, buy: 8, desc: `Poop from cow. Well, it's from them for sure.`, icon: 'hamburger' },
  'strengthPill': { name: 'Strength Pill', sell: 10, buy: 20, desc: 'Consume to strengthen bones and improve growth.', icon: 'glass-of-milk' },

  'bee': { name: 'Bee', sell: 6, buy: 12, desc: 'A lil bit of sting and a lil bit of honey!', icon: 'honeybee' },
  'chickenPoop': { name: 'Chicken Poop', sell: 2, buy: 10, desc: 'This popped out from a chicken, so it must be poop.', icon: 'egg' },
  'fancyPill': { name: 'Fancy Pill', sell: 25, buy: 50, desc: 'Consume to feel fancy.', icon: 'cocktail-glass' },

  'beetle': { name: 'Beetle', buy: 15, sell: 8, desc: 'Crunchy and mushy feeling! Yum!', icon: 'beetle' },
  'hogPoop': { name: 'Hog Poop', buy: 6, sell: 0, desc: 'Poop from a hog. Sadly, nobody rode this one.', icon: 'bacon' },
  'richPill': { name: 'Rich Pill', buy: 30, sell: 15, desc: 'Consume to feel rich and lucky.', icon: 'wine-glass' },

  'worm': { name: 'Worm', sell: 10, buy: 20, desc: 'Oooh, you can feel the squirm with this one!', icon: 'worm' },
  'frenchPoop': { name: 'French Poop', sell: 1, buy: 7, desc: 'Poop from the french... or in France?', icon: 'french-fries' },
  'angerPill': { name: 'Anger Pill', sell: 5, buy: 10, desc: 'Consume to violate without feeling guilt.', icon: 'beer-mug' },

  'spider': { name: 'Spider', sell: -1, buy: 10, desc: 'Adorable itsy bitsy snack!', icon: 'spider' },
  'deltaPoop': { name: 'Delta Poop', sell: -3, buy: 3, desc: 'Poop that represents change.', icon: 'pizza' },
  'chokePill': { name: 'Choke Pill', sell: 10, buy: 20, desc: 'Consume to choke on balls.', icon: 'bubble-tea' },

  'butterfly': { name: 'Butterfly', sell: 25, buy: 50, desc: 'The BEST-tasting fly!', icon: 'butterfly' },
  'moosePoop': { name: 'Moose Poop', sell: 0, buy: 7, desc: 'Poop from Moose... Meese?', icon: 'burrito' },
  'depression': { name: 'Depression', sell: -5, buy: 0, desc: 'Half empty? How about JUST Empty? You deserve it.', icon: 'pouring-liquid' },


}