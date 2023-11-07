import { createContext, useContext, useState } from 'react';
import { ContextT } from '../types/types';
import { gql, useQuery } from '@apollo/client';




export const MyContext = ():ContextT=> {

  const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      category_id
      category_name
    }
  }
`;

  let { loading, error, data } = useQuery(GET_CATEGORIES);
console.log(data);

const defaultCategory= "b45fb97b-7b7c-4cc3-92bc-3cff26f7ea04";

  const [topnav, setTopnav] = useState<boolean>(true);
  const [account, setAccount] = useState<boolean>(false);
  const [select, setSelect] = useState<string>(defaultCategory);
  const [dark, setDark]=useState<boolean>(localStorage.getItem("dark")=="false" ? false : true );
  const [search, setSearch]=useState<string>('');


  
  const Context=createContext({topnav, setAccount, setTopnav, account, select, setSelect, data, loading, error, dark, setDark, search, setSearch});
  
  const contextBox=useContext(Context);

  return contextBox;
}
