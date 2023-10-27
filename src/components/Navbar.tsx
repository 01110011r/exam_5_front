import { BiSearch } from "react-icons/bi";
import { MdAddShoppingCart } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { VscAccount } from "react-icons/vsc";
import { LiaTelegram } from "react-icons/lia";
import { Link } from "react-router-dom";
import { TiLocation } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import {VscColorMode} from "react-icons/vsc";
import {PiSignOutBold} from "react-icons/pi";
import { gql, useQuery } from "@apollo/client";
import { useState } from "react";



export default function () {

  const [select, setSelect] = useState<string>('all');
  const [topnav, setTopnav] = useState<boolean>(true);
  const [account, setAccount] = useState<boolean>(false);
  console.log(select);
  console.log(topnav);
  console.log(account);


  const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      category_id
      category_name
    }
  }
`;

function GetCategories() {
  const { loading, error, data } = useQuery(GET_CATEGORIES);
console.log(data);
console.log(error);



  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
console.log(data);

  return data.categories.map(({ category_id, category_name}:any) => (
    <div key={category_id}>
      <h3>{category_name}</h3>
    </div>
  ));
}

GetCategories();
  return (
    <>
    <div className="fixed w-full top-0 bg-slate-200">
      <div className={`relative bg-blue-950 p-2  w-full ${!topnav ? "hidden" : ""}`}>
        <div className="container flex items-center justify-around">
          <p className=" text-white">Lorem ipsum dolor sit amet.</p>
          <div className="flex items-center gap-3">
            <Link to={'https://t.me/s_01110010'}>
              <LiaTelegram className="text-white" />
            </Link>
            <Link to={'#'}>
              <TiLocation className='text-white' />
            </Link>
          </div>
        </div>
        <AiOutlineClose className={`text-red-400 hover:text-red-700 absolute top-2 right-2 cursor-pointer`} onClick={() => setTopnav(!topnav)} />
      </div>
      <div className="flex flex-col gap-y-2 relative items-center justify-between py-3 px-2 container md:flex-row">
        <div className="flex items-center justify-between w-full">
          <Link to={'#'}>
            <h2 className="text-2xl italic font-bold text-cyan-900 hover:text-cyan-700">#texnomart</h2>
          </Link>
          <div className="items-center w-full justify-around md:flex hidden">
            <div className=" w-36 h-8 flex items-center justify-center px-4 rounded-md sm:bg-black bg-indigo-800">
              <select value={select} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => { setSelect(event.target.value) }} name="select_name" id="select_id" className=" w-full rounded-s-lg bg-inherit text-white cursor-pointer">
                <option value="a" >a</option>
                <option value="b">b</option>
                <option value="c">c</option>
              </select>
            </div>
            <form className="flex items-center px-2 border-2 rounded-xl max-w-xs sm:min-w-max border-stone-400 lg:min-w-[36rem]">
              <input placeholder="Quick search..." type="search" className="border-none bg-inherit py-1 outline-none text-indigo-900 w-full" />
              <BiSearch className="cursor-pointer" />
            </form>
          </div>
          <div className="flex items-center gap-3">
            <FcLike className="cursor-pointer w-6 h-6" />
            <MdAddShoppingCart className="cursor-pointer w-6 h-6" />
            <VscAccount className="cursor-pointer w-6 h-6" onClick={()=>setAccount(!account)}/>
          </div>
        </div>
        <div className="flex items-center w-full justify-around md:hidden">
          <div className=" w-36 h-8 flex items-center justify-center px-4 mr-2 rounded-md sm:bg-black bg-indigo-800">
            <select value={select} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => { setSelect(event.target.value) }} name="select_name" id="select_id" className=" w-full rounded-s-lg bg-inherit text-white cursor-pointer">
              <option value="a" >a</option>
              <option value="b">b</option>
              <option value="c">c</option>
            </select>
          </div>
          <form className="flex items-center px-2 border-2 rounded-xl max-w-xs sm:min-w-max border-stone-400 lg:min-w-[36rem]">
            <input placeholder="Quick search..." type="search" className="border-none bg-inherit py-1 outline-none text-indigo-900 w-full" />
            <BiSearch className="cursor-pointer" />
          </form>
        </div>
      </div>
      <div className={`fixed z-10 top-0 h-full w-[80%] bg-slate-500 duration-200 ${account ? "left-0" : "-left-full"}`}>
        <div className="container">

      <VscAccount className="cursor-pointer mt-7 w-11 h-11" onClick={()=>setAccount(!account)}/>
      <ul className=" mt-16 flex flex-col gap-y-2">
        <li className="flex gap-3 items-center cursor-pointer">
<VscColorMode/>
 <div className=" max-w-[36rem] min-w-[20rem]">
<select name="colormode" id="colormode" className=" bg-inherit cursor-pointer">
  <option value="white">white</option>
  <option value="dark">dark</option>
</select>
</div>
        </li>
        <li className="flex gap-3 items-center cursor-pointer">
          <PiSignOutBold/>
          <p>Sign Out</p>
        </li>
      </ul>
        </div>

      </div>
    </div>
      <GetCategories/>
    </>
  )
}
