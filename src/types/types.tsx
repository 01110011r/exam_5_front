export interface ContextT{
    topnav: boolean;
    setAccount: React.Dispatch<React.SetStateAction<boolean>>;
    setTopnav: React.Dispatch<React.SetStateAction<boolean>>;
    account: boolean;
    select:string;
    setSelect:React.Dispatch<React.SetStateAction<string>>;
}