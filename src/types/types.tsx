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
}