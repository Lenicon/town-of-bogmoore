export const random = (range:number) => {
  return Math.floor(Math.random() * range)
}

export const randrange = (min:number, max:number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}