import { FC, createContext, useState } from 'react';
import { ContextType } from '../types/types';


export const Context=createContext<any>(null);

export const MyContext:FC =({children})=> {

    const [topnav, setTopnav] = useState<boolean>(true);
    const [account, setAccount] = useState<boolean>(false);



  return (
    <Context.Provider value={{topnav, setTopnav, account, setAccount}}>{children}</Context.Provider>
  )
}
