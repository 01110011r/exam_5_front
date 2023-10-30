import { createContext, useContext, useState } from 'react';
import { ContextT } from '../types/types';
import { gql, useQuery } from '@apollo/client';




export const MyContext = ():ContextT=> {

//   const GET_CATEGORIES = gql`
//   query GetCategories {
//     categories {
//       category_id
//       category_name
//     }
//   }
// `;

//   const { loading, error, data } = useQuery(GET_CATEGORIES);
// console.log(data);

const defaultCategory= "acbcfa72-5140-4473-80d4-726397e60ba7";


  const [topnav, setTopnav] = useState<boolean>(true);
  const [account, setAccount] = useState<boolean>(false);
  const [select, setSelect] = useState<string>(defaultCategory);

  console.log(topnav);
  console.log(account);
  
  const Context=createContext({topnav, setAccount, setTopnav, account, select, setSelect});
  
  const contextBox=useContext(Context);

  return contextBox;
}
