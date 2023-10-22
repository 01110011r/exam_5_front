import { HiShoppingCart } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import {MdAddShoppingCart} from "react-icons/md";
import {FcLike} from "react-icons/fc";
import {VscAccount} from "react-icons/vsc";


export default function
  () {
  return (
    <div>
      Navbor
      <div className="flex items-center justify-around bg-slate-100 py-3 px-1">
        <HiShoppingCart />

        <div className="categories flex bg-blue">
          <ul className="flex gap-7 items-center justify-center list-none bg-slate-400">
            <li>all</li>
            <li>all</li>
            <li>all</li>
          </ul>
        </div>
          <form className="flex items-center px-2 border-2 rounded-xl border-indigo-900">
            <input type="search" className="border-none bg-inherit py-1 outline-none text-indigo-900" />
            <BiSearch className="cursor-pointer"/>
          </form>
<div className="flex items-center gap-3">
  <FcLike className="cursor-pointer"/>
  <MdAddShoppingCart className="cursor-pointer"/>
  <VscAccount className="cursor-pointer"/>
</div>
      </div>
    </div>
  )
}
