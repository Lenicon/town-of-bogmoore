import secureLocalStorage from "react-secure-storage";


export const getCoins = () => {
    return Number(secureLocalStorage.getItem('P'));
}

export const setCoins = (amount: number) => {
    secureLocalStorage.setItem('P', amount);
    localStorage.setItem('coins', amount.toString());
    window.location.reload();
}

export const initCoins = () => {
    if (secureLocalStorage.getItem('P') == null || secureLocalStorage.getItem('P') == undefined) {

        if (secureLocalStorage.getItem('inv') == null || secureLocalStorage.getItem('inv') == undefined) {
            secureLocalStorage.setItem('P', 15);
            localStorage.setItem('coins', '15');
            return 15;
        }
        else {
            secureLocalStorage.setItem('P', 0);
            localStorage.setItem('coins', '0');
            return 0;
        }
    } else {
        let c = getCoins()
        secureLocalStorage.setItem('P', c);
        localStorage.setItem('coins', c.toString());
        return c;
    }

}

export const addCoins = (amount: number) => {
    let newCoin = Number(secureLocalStorage.getItem('P')) + amount;
    setCoins(newCoin);

}

export const subCoins = (amount: number) => {
    if (Number(secureLocalStorage.getItem('P')) == 0) return;

    let newCoin = Number(secureLocalStorage.getItem('P')) - amount;
    setCoins(newCoin);
}