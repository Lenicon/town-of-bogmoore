import secureLocalStorage from "react-secure-storage";
import { v4 as getID } from 'uuid';
import {format as fnsformat} from 'date-fns';

export const initialize = () => {
  if (secureLocalStorage.getItem('stat') == null || secureLocalStorage.getItem('stat') == undefined) {
    secureLocalStorage.setItem('stat', { secretID: getID(), startDate: new Date(), currentDate: new Date() });
  }

  if (fnsformat(new Date(getStatus('currentDate')), 'MMM dd yyyy') != fnsformat(new Date(), 'MMM dd yyyy')){
    secureLocalStorage.setItem('currentDate', new Date());
  }

  return secureLocalStorage.getItem('stat')['secretID'];
}

export const getStatus = (key:string) => {
  let stat: any = secureLocalStorage.getItem('stat');
  if (stat) {
    return secureLocalStorage.getItem('stat')[key];
  } else return undefined;
}

export const setStatus = (key: string, value: any) => {
  let stat: any = secureLocalStorage.getItem('stat');
  if (stat) {
    stat[key] = value;
    secureLocalStorage.setItem('stat', stat);
    window.location.reload();
  }
}

export const removeStatus = (key: string) => {
  let stat: any = secureLocalStorage.getItem('stat');
  if (stat && stat[key]) {
    delete stat[key];
    secureLocalStorage.setItem('stat', stat);
  }
}