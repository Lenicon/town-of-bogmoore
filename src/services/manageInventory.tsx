import secureLocalStorage from "react-secure-storage";


const reloadWindow = () => {
  let location = window.location;
  if(location.pathname == '/inventory') return location.reload();
  return;
}

export const initialize = () => {
  if (!secureLocalStorage.getItem('inv')){
    secureLocalStorage.setItem('inv', {});
  }
}

export const getItem = (key: string) => {
  let inv: any = secureLocalStorage.getItem('inv');
  if (inv) {
    return inv[key];
  }
}

export const setItem = (key: string, value: any) => {
  let inv: any = secureLocalStorage.getItem('inv');
  if (inv) {
    inv[key] = value;
    // setInv(inv);
    secureLocalStorage.setItem('inv', inv);
    reloadWindow();
  }
}

export const addItem = (key: string, amount: any) => {

  let inv: any = secureLocalStorage.getItem('inv');
  if (inv) {

    if (!inv[key]) {
      setItem(key, amount);
      return reloadWindow()
    }

    inv[key] = inv[key] + amount

    // setInv(inv);
    secureLocalStorage.setItem('inv', inv);
    return reloadWindow()
  }
}

export const subItem = (key: string, amount: any) => {
  let inv: any = secureLocalStorage.getItem('inv');
  if (inv && inv[key]) {
    let newamount = inv[key] - amount;
    if (newamount <= 0) delete inv[key];
    else inv[key] = newamount;

    // setInv(inv);
    secureLocalStorage.setItem('inv', inv);
    return reloadWindow();
  }
}

export const clearItem = (key:string) => {
  let inv: any = secureLocalStorage.getItem('inv');
  if (inv && inv[key]) {
    delete inv[key];
    secureLocalStorage.setItem('inv', inv);
    return reloadWindow();
  }
}

export const clearInv = () => {
  let inv: any = secureLocalStorage.getItem('inv');
  if (inv) {
    secureLocalStorage.setItem('inv', {});
    return reloadWindow();
  }
}