import { ApolloError } from "@apollo/client";

export interface ContextT{
    topnav: boolean;
    setAccount: React.Dispatch<React.SetStateAction<boolean>>;
    setTopnav: React.Dispatch<React.SetStateAction<boolean>>;
    account: boolean;
    select:string;
    setSelect:React.Dispatch<React.SetStateAction<string>>;
    data:any;
    loading:boolean;
    error:ApolloError | undefined;
    dark:boolean;
    setDark:React.Dispatch<React.SetStateAction<boolean>>;
    search:string;
    setSearch:React.Dispatch<React.SetStateAction<string>>;
};


export interface ProductT{
    product_id:string,
      product_name:string,
      price:number,
      measurement:string,
      quantity:number
      img:string
};

export interface User{
    user_id:string,
    username:string,
    email:string,
    password:string,
    isAdmin:boolean,
    Products:[ProductT]
}