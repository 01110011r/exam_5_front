import img from "../../public/SideImage.jpg";


export default function Card({...data}:[]) {

  console.log(data);
  

  return (
    <div>
<div className=" max-w-[15rem]">
  <div className=" max-w-[16rem] max-h-80">
<img src={img} alt="test img" className=" w-full"/>
  </div>
  <h3>Card</h3>
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