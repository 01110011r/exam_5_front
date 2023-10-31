import { Link, useParams } from 'react-router-dom';
import {GrAdd} from "react-icons/gr";
import img from "../../../public/SideImage.jpg";


export default function Dashboard() {
    
    const token=localStorage.getItem('token');


    const path=useParams();
console.log(path);

  return (
    <div className=' bg-slate-400 mt-36'>
<div className=" container">
    <main>
<section className=' flex items-center justify-around border-b-2 mb-8'>
    <p>
    <Link to={'/'}> <span className=' opacity-50'>home /</span></Link>
    <Link to={'/dashboard'}> <span className=' opacity-50'>dashboard /</span></Link>
    <Link to={'/dashboard/:id'}> <span className=' opacity-80'>add</span></Link>
    </p>
<Link to={'/dashboard/:id'}>
<GrAdd className=' cursor-pointer hover:scale-150 duration-150'/>
</Link>
</section>
<section className=' flex items-center justify-around gap-y-4'>
<div className=" max-w-[15rem] border rounded-md pb-2 hover:scale-95">
  <div className=" max-w-[16rem] max-h-80">
<img src={img} alt="test img" className=" w-full rounded-t-md"/>
  </div>
  <div className=' w-full flex'>
  <button className={` w-[50%] bg-red-600 hover:bg-red-700 text-white py-1 ${!token && " opacity-30 cursor-not-allowed" }`}>Delete</button>
  <Link to={''}></Link>
  <button className={` w-[50%] bg-green-600 hover:bg-green-700 text-white py-1 ${!token && " opacity-30 cursor-not-allowed" }`}>Update</button>
  </div>
  <div className="flex flex-col gap-x-2 items-center">
<h3>Smartfon</h3>
<p>$12</p>
  </div>
</div>


<div className=" max-w-[15rem] border rounded-md pb-2 hover:scale-95">
  <div className=" max-w-[16rem] max-h-80">
<img src={img} alt="test img" className=" w-full rounded-t-md"/>
  </div>
  <button className={` bg-slate-900 text-white w-full py-1 ${!token && " opacity-30 cursor-not-allowed" }`}>Add To Cart</button>
  <div className="flex flex-col gap-x-2 items-center">
<h3>Smartfon</h3>
<p>$12</p>
  </div>
</div> 


<div className=" max-w-[15rem] border rounded-md pb-2 hover:scale-95">
  <div className=" max-w-[16rem] max-h-80">
<img src={img} alt="test img" className=" w-full rounded-t-md"/>
  </div>
  <button className={` bg-slate-900 text-white w-full py-1 ${!token && " opacity-30 cursor-not-allowed" }`}>Add To Cart</button>
  <div className="flex flex-col gap-x-2 items-center">
<h3>Smartfon</h3>
<p>$12</p>
  </div>
</div>


<div className=" max-w-[15rem] border rounded-md pb-2 hover:scale-95">
  <div className=" max-w-[16rem] max-h-80">
<img src={img} alt="test img" className=" w-full rounded-t-md"/>
  </div>
  <button className={` bg-slate-900 text-white w-full py-1 ${!token && " opacity-30 cursor-not-allowed" }`}>Add To Cart</button>
  <div className="flex flex-col gap-x-2 items-center">
<h3>Smartfon</h3>
<p>$12</p>
  </div>
</div>
</section>
    </main>
</div>
    </div>
  )
}
