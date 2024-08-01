import { useEffect, useState } from "react";
import useMousePosition from "../components/snippets/useMousePosition";
import audioDog from './../assets/sounds/dogSounds.mp3';
import useSound from "use-sound";
import TopBar from "../components/TopBar";


export default function DoghouseOld() {

  const [active, setActive] = useState(true);
  const mousePosition = useMousePosition();

  const [dogState, setDogState] = useState(0);
  let excludeStates = [4, 5, 6, 7];

  const [play, { stop }] = useSound(audioDog, {
    sprite: {
      grr: [0, 10000],
      bark: [11000, 16000],
    }
  });


  useEffect(() => {
    if (dogState == 1) {
      stop();
      play({id:'grr'});
    }
    if (dogState == 2 || dogState == 3) {
      stop();
      play({id:'bark'});
    }
    if (dogState == 0) {
      stop();
    };
  }, [dogState]);

  useEffect(() => {
    if (!active) return;

    // FOR MOBILE
    if (window.innerWidth < 768 && !excludeStates.includes(dogState)) {
      if (mousePosition.y < 270 && mousePosition.y > 194 && dogState != 1) {
        setDogState(1);
      } else if (mousePosition.y < 195 && mousePosition.y > 80 && dogState != 2) {
        setDogState(2);
      } else if (mousePosition.y < 81 && mousePosition.y > 27 && dogState != 3) {
        setDogState(3);
      } else if (mousePosition.y < 28 && mousePosition.y > -1 && dogState != 1) {
        setDogState(1);
      }
      else if (mousePosition.y > 269 && dogState != 0) setDogState(0);
    }

    // FOR BIGSCREEN
    if (window.innerWidth > 767 && !excludeStates.includes(dogState)) {
      if (mousePosition.x < 461 && mousePosition.x > 275 && dogState != 1) {
        setDogState(1);
      } else if (mousePosition.x < 276 && mousePosition.x > 150 && dogState != 2) {
        setDogState(2);
      } else if (mousePosition.x < 151 && mousePosition.x > 46 && dogState != 3) {
        setDogState(3);
      } else if (mousePosition.x < 47 && mousePosition.x > -1 && dogState != 1) {
        setDogState(1);
      }
      else if (mousePosition.x > 460 && dogState != 0) setDogState(0)
    }

  }, [mousePosition]);


  const [allowPet, setAllowPet] = useState(true);
  const [pets, setPets] = useState(0);
  const allow = () => {
    setAllowPet(true);
    if (pets < 5) setDogState(3);
    else setDogState(4);
  }

  const petDog = () => {

    setAllowPet(false);
    let pet = pets + 1;
    setPets(pet);

    setDogState(5);
    setTimeout(allow, 1000);

  }

  const handlePetDog = () => {
    if (allowPet == false) return;
    setDogState(4);
    petDog();
  }

  const handleBone = () => {
    if (dogState == 2) {
      setDogState(6);
    };

  }

  return (
    <div className="select-none grass-bg w-full h-screen m-auto">
      {/* <p>{JSON.stringify(mousePosition)}</p> */}
      <TopBar/>

      {dogState == 6 ?
        <div id="ogre" className="fixed leading-none w-screen z-10 bg-black h-screen">
          <i className="twa twa-dog-face md:text-[30rem] text-[20rem] fixed top-[50vh] left-[50vw] -translate-x-[60%] -translate-y-[52.5%]">
            <span className="fixed md:h-[5.4rem] md:w-[3.5rem] h-[3.5rem] w-[2.5rem] rounded-full bg-red-900 top-[35.8%] left-[30%]" />
            <span className="fixed md:h-[5.4rem] md:w-[3.5rem] h-[3.5rem] w-[2.5rem] rounded-full bg-red-900 top-[35.8%] left-[58%]" />
          </i>
        </div> : <></>
      }
      <div className="absolute md:top-[40vh] md:left-0 left-[35vw] top-0">

        <div id="doghouse" className="text-[10rem] leading-none w-0 absolute md:top-[-3.5rem] md:right-[3rem] top-[-5rem] right-[1.8rem]">
          <i className="twa twa-hut" />
        </div>

        <button onClick={handlePetDog} disabled={!(mousePosition.x < 151 && mousePosition.x > 46 && active)} id="dog" className="text-[7rem] leading-none absolute md:top-3 md:left-5 top-[1.5rem]">
          <div className={`absolute left-[2.5rem] ${dogState == 0 ? 'top-10' : ''} ${dogState == 1 ? 'top-[2.15rem]' : ''} ${dogState == 2 || dogState == 3 ? 'top-7' : ''} ${dogState == 4 || dogState == 5 ? 'top-6' : ''} bg-[#D99E82] rounded text-[1rem]`}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <i className="twa twa-dog-face" />
        </button>

        {dogState == 5 ? <div id="heart" className="text-[3rem] leading-none w-0 absolute md:-top-3 md:left-[8rem] top-[-5rem] right-[1.8rem]">
          <i className="twa twa-red-heart" />
        </div> : <></>}

        {dogState == 1 ? <div id="thought" className="text-[4rem] leading-none w-0 absolute md:-top-3 md:left-[8rem] top-[-5rem] right-[1.8rem]">
          <i className="twa twa-speech-balloon absolute" />
        </div> : <></>}

        {dogState == 2 || dogState == 3 ? <div id="mad" className="text-[4rem] leading-none w-0 absolute md:-top-3 md:left-[8rem] top-[-5rem] right-[1.8rem]">
          <i className="twa twa-right-anger-bubble absolute" />
        </div> : <></>}

        <button onClick={handleBone} disabled={dogState != 2} id="bone" className="text-[5rem] leading-none w-0 absolute md:top-[5rem] md:left-[11rem] top-[9rem] left-9 -rotate-45">
          <i className="twa twa-bone" />
        </button>

        {!active ?
          <button className="text-[7rem] leading-none absolute md:left-[90vw] md:top-0 top-[80vh]" onClick={() => setActive(true)}>
            <span className="absolute text-base font-semibold md:left-[1vw] left-7 -top-8">wear glove</span>
            <i className="twa twa-gloves" />
          </button> : <></>
        }

      </div>
    </div>
  )
}
