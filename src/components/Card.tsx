import img from "../../public/SideImage.jpg";
import { ProductT } from "../types/types";


export default function Card({...data}:{products:[ProductT]}) {

  console.log(data);
  const token=localStorage.getItem('token');
  
  // const photo: string="http://localhost:5555/"+data?.products[0].img || img;
  // console.log(photo);
  return (
    <div className=" container flex items-center gap-y-3 justify-around">
    {
      data.products.map(e=>(
        <div key={e.product_id} className=" max-w-[15rem] min-h-[16rem] border-2 rounded-md pb-2">
  <div className=" max-w-[16rem] max-h-[20rem]">
<img src={"http://localhost:5555/"+e.img || img} alt={e.product_name} className=" w-full h-full object-bottom rounded-t-md"/>
  </div>
  <button className={` bg-slate-900 text-white w-full py-1 ${!token && " opacity-30 cursor-not-allowed" }`}>Add To Cart</button>
  <div className="flex flex-col gap-x-2 items-center">
<h3 className=" capitalize">{e.product_name}</h3>
<p>${e.price || "?"}</p>
<span>quantity: {e.quantity || "?"} {e.measurement || "?"}</span>
  </div>
</div>
      ))
    }
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