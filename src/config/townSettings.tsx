import Doghouse from "../pages/DogHouse";
import Shrine from "../pages/Shrine";
import Store from "../pages/Store";

export const POLicons = ['mountain', 'leaf-fluttering-in-wind', 'leaf-fluttering-in-wind', 'fallen-leaf', 'fallen-leaf']

export const placesObj:any = {
  '?apartment':{title:'Apartment', icon:'office-building', route:null},
  'doghouse':{title:'Dog House', icon:'hut', route:<Doghouse/>},

  '!1':{title:'Plot of Land', icon:'leaf-fluttering-in-wind', route:null},
  '!2':{title:'Plot of Land', icon:'leaf-fluttering-in-wind', route:null},

  'general-store':{title:'General Store', icon:'convenience-store', route:<Store/>},
  '?library':{title:'Library', icon:'school', route:null},
  '?post-office':{title:'Post Office', icon:'japanese-post-office', route:null},

  '!3':{title:'Plot of Land', icon:'leaf-fluttering-in-wind', route:null},
  '!4':{title:'Plot of Land', icon:'leaf-fluttering-in-wind', route:null},
  '!5':{title:'Plot of Land', icon:'leaf-fluttering-in-wind', route:null},

  'shrine':{title:'Amphi Shrine', icon:'shinto-shrine', route:<Shrine/>},

  '!6':{title:'Plot of Land', icon:'leaf-fluttering-in-wind', route:null},
  '!7':{title:'Plot of Land', icon:'leaf-fluttering-in-wind', route:null},
  '!8':{title:'Plot of Land', icon:'leaf-fluttering-in-wind', route:null},
  '!9':{title:'Plot of Land', icon:'leaf-fluttering-in-wind', route:null},
  '!10':{title:'Plot of Land', icon:'leaf-fluttering-in-wind', route:null},
  '!11':{title:'Plot of Land', icon:'leaf-fluttering-in-wind', route:null},
  '!12':{title:'Plot of Land', icon:'leaf-fluttering-in-wind', route:null},
  '!13':{title:'Plot of Land', icon:'leaf-fluttering-in-wind', route:null},

  '?casino':{title:"Nel's Casino", icon:'cityscape-at-dusk', route:null},
  
  '!14':{title:'Plot of Land', icon:'leaf-fluttering-in-wind', route:null},

}