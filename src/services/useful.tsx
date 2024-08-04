export const delayedAlert=(msg:string)=>{
  setTimeout(function(){alert(msg)}, 1);
}

export const checkAdmin = () => {
  if(localStorage.getItem(import.meta.env.VITE_ADMIN_USERNAME) == import.meta.env.VITE_ADMIN_PASSWORD) return true;
  else return false
}