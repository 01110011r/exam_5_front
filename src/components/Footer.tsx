import { LiaTelegram } from "react-icons/lia";
import { TiLocation } from "react-icons/ti";
import { Link } from "react-router-dom";
import { MyContext } from "./MyContext";


export default function Footer() {
const {dark}=MyContext();

    return (
        <div className={` w-full opacity-95 mt-auto py-5 ${dark ? "bg-gray-900 text-white" : "bg-zinc-200"}`}>
            <div className='container flex flex-col gap-5 sm:flex-row items-center justify-between'>
                <Link to={'#'}>
                <h2 className='text-3xl'>
                    #Logo
                </h2>
                </Link>
                <div className="flex items-center sm:gap-3 gap-12">
                    <Link to={'https://t.me/s_01110010'}>
                        <LiaTelegram className=" w-7 h-7" />
                    </Link>
                    <Link to={'#'}>
                        <TiLocation className='w-7 h-7' />
                    </Link>
                    <Link to={'#'}>
                    <span className="text-xl">99 626 18 02</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
