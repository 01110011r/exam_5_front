import img from "../../public/SideImage.jpg";


export default function Card({...data}:[]) {

  console.log(data);
  const token=localStorage.getItem('token');
console.log(token);

  return (
    <div className=" container">
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
    </div>
  )
}


// product_id:ID
// product_name:String
// price:Int
// measurement:String
// quantity:Int
// category_id:ID
// img