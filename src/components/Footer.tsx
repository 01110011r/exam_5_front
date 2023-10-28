import { LiaTelegram } from "react-icons/lia";
import { TiLocation } from "react-icons/ti";
import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <div className=' w-full bg-zinc-800 fixed bottom-0 py-4'>
            <div className='container flex items-center justify-between'>
                <Link to={'#'}>
                <h2 className=' text-white text-3xl'>
                    #texnomart
                </h2>
                </Link>
                <div className="flex items-center gap-3">
                    <Link to={'https://t.me/s_01110010'}>
                        <LiaTelegram className="text-white w-7 h-7" />
                    </Link>
                    <Link to={'#'}>
                        <TiLocation className='text-white w-7 h-7' />
                    </Link>
                    <Link to={'#'}>
                    <span className="text-white text-xl">99 626 18 02</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
