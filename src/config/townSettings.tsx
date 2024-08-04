import Doghouse from "../pages/DogHouse";
import PostOffice from "../pages/PostOffice";
import Shrine from "../pages/Shrine";
import Store from "../pages/Store";

export const startingTxt = [
  "Hi, wanna see something nice?",
  "Hello! We're all frogs here!",
  "So, ya like bugs and bees?",
  "This is the place where frog people reside...",
  "Bro, you think frogs are kinda hot?",
  "Oh! Praise The O Holy Amphi!!"
]

export const POLicons = ["mountain", "leaf-fluttering-in-wind", "leaf-fluttering-in-wind", "fallen-leaf", "fallen-leaf"]
export const placesObj:any = {
  "?apartment":{title:"Bog Rooms", icon:"office-building", route:null},
  "doghouse":{title:"The Dog Hut", icon:"hut", route:<Doghouse/>},

  "!1":{title:"", icon:"", route:null},
  "!2":{title:"", icon:"", route:null},

  "general-store":{title:"8-Five Store", icon:"convenience-store", route:<Store/>},
  "?library":{title:"Library", icon:"school", route:null},
  "?post-office":{title:"Post Office", icon:"japanese-post-office", route:<PostOffice/>},

  "?tailor":{title:"Siany's Thread", icon:"sewing-needle", route:null},
  "?fly-chamber":{title:"Fly Chamber", icon:"bank", route:null},
  "?square":{title:"Bog Square", icon:"fountain", route:null},

  "shrine":{title:"Amphi Shrine", icon:"shinto-shrine", route:<Shrine/>},

  "!6":{title:"", icon:"", route:null},
  "?regenerator":{title:"Regenerator", icon:"hospital", route:null},
  "!8":{title:"", icon:"", route:null},
  "!9":{title:"", icon:"", route:null},
  "!10":{title:"", icon:"", route:null},
  "!11":{title:"", icon:"", route:null},
  "!hot-swamp":{title:"Hot Swamp", icon:"hot-springs", route:null},
  "!13":{title:"", icon:"", route:null},

  "?casino":{title:"Nel's Casino", icon:"cityscape-at-dusk", route:null},
  
  "!14":{title:"", icon:"", route:null},

}