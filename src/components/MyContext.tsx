import { createContext, useContext, useState } from 'react';
import { ContextT } from '../types/types';




export const MyContext =():ContextT=> {
  const [topnav, setTopnav] = useState<boolean>(true);
  const [account, setAccount] = useState<boolean>(false);
  const [select, setSelect] = useState<string>('all');

  console.log(topnav);
  console.log(account);
  
  const Context=createContext({topnav, setAccount, setTopnav, account, select, setSelect});
  
  const contextBox=useContext(Context);

  return contextBox;
}
