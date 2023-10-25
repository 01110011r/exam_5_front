import { HiShoppingCart } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { MdAddShoppingCart } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { VscAccount } from "react-icons/vsc";
import { LiaTelegram } from "react-icons/lia";
import { Link } from "react-router-dom";
import { BsTelephoneForward } from "react-icons/bs";
// import { useState } from "react";


export default function() {


  // const {select, setSelect}=useState('') as any
  return (
    <div className="fixed w-full top-0 bg-slate-100">
      <div className=" bg-blue-950 p-2  w-full">
        <div className="container flex items-center justify-around">
          <p className=" text-white">Lorem ipsum dolor sit amet.</p>
          <div className="flex items-center gap-3">
            <Link to={'https://t.me/s_01110010'}>
              <LiaTelegram className="text-white" />
            </Link>
            <BsTelephoneForward className="text-white" />
          </div>
        </div>
      </div>
      <div className="flex relative items-center justify-around py-3 px-1 container">
        <HiShoppingCart />
        <div className=" w-36 h-8 flex items-center justify-center px-4 rounded-md bg-indigo-800 ">
        <select name="kdkvdsk" id="sdc" className=" w-full rounded-s-lg bg-inherit text-white ">
            <option value="dgdgsdg" >adddssfdsfdsgkdkfgdjjdsjfgdjgjdfjgdj</option>
            <option value="dgdgsdg">b</option>
            <option value="dgdgsdg">c</option>
          </select>
        </div>
        <form className="flex items-center px-2 border-2 rounded-xl max-w-xs border-stone-400">
          <input placeholder="Quick search..." type="search" className="border-none bg-inherit py-1 outline-none text-indigo-900 w-full" />
          <BiSearch className="cursor-pointer" />
        </form>
        <div className="flex items-center gap-3">
          <FcLike className="cursor-pointer" />
          <MdAddShoppingCart className="cursor-pointer" />
          <VscAccount className="cursor-pointer" />
        </div>
      
      </div>
    </div>
  )
}
