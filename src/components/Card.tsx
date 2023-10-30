import React from 'react'

export default function Card({...data}:[]) {

  console.log(data);
  

  return (
    <div>
<div className=" max-w-[15rem]">
  <img src="" alt="" />
  <h3>{data}</h3>
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