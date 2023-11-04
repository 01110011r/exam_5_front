import { gql, useMutation } from '@apollo/client';
import { useRef } from 'react';
import { GrAdd } from 'react-icons/gr'
import { Link, useParams } from 'react-router-dom'
import { MyContext } from '../MyContext';
// import {createUploadLink} from "apollo-upload-client";



export default function Addproduct() {

    const { data, select } = MyContext();
    console.log(data);


    const { id } = useParams();
    console.log(id);

    const productname = useRef<HTMLInputElement>(null);
    const price = useRef<HTMLInputElement>(null);
    const measurement = useRef<HTMLInputElement>(null);
    const quantity = useRef<HTMLInputElement>(null);
    const file = useRef<HTMLInputElement>(null);



    const ADD_PRODUCT = gql`
       mutation Addproduct($product_name:String, $price:Int, $measurement:String, $quantity:Int, $category_id:ID, $file:Upload){
       addproduct(product_name:$product_name, price:$price, measurement:$measurement, quantity:$quantity, category_id:$category_id, file:$file){
            msg
            data
     }
     }
       `;

    const [createProduct, { error }] = useMutation(ADD_PRODUCT);

    console.log(error);


    function sender() {
        if (productname.current?.value.trim() == "") return alert('wrong productname!   :(');
        if (price.current?.value.trim() == "" || isNaN(Number(price.current?.value))) return alert("wrong price!  :(");
        if (measurement.current?.value.trim() == "") return alert("wrong password!  :(");
        if (quantity.current?.value.trim() == "" || isNaN(Number(price.current?.value))) return alert("wrong password!  :(");
        if (file.current?.files?.length == 0) return alert("image not chosen!  :(");
        if (file.current?.files?.item(0)?.type.slice(0, 5) != "image") return alert("The uploaded file is not image. Upload an image!  :(");

        const formData = new FormData();
        formData.append('$file', file.current.files[0]);

        createProduct({
            variables: {
                product_name: productname.current?.value,
                price: Number(price.current?.value),
                measurement: measurement.current?.value,
                quantity: Number(quantity.current?.value),
                category_id: select,
                file: formData
            }
        });

    }


    return (
        <div className='mt-36'>
            <div className=" container">
                <main className=' py-8'>
                    <section className=' flex items-center justify-around border-b-2 mb-8'>
                        <p>
                            <Link to={'/'}> <span className=' opacity-50'>home /</span></Link>
                            <Link to={'/dashboard'}> <span className=' opacity-50'>dashboard /</span></Link>
                            <Link to={'/dashboard/:id'}> <span className=' opacity-50'>add</span></Link>
                        </p>
                        <Link to={''}>
                            <GrAdd className=' cursor-pointer hover:scale-150 duration-150' />
                        </Link>
                    </section>
                    <section className=' flex justify-center'>
                        <form onSubmit={(e) => { e.preventDefault(); sender() }} method="post" className=' flex flex-col gap-4 max-w-md px-3'>
                            <input ref={productname} className=' bg-inheri rounded-xl p-2 border-b-2' type="text" placeholder='Productname...' />
                            <input ref={price} className=' bg-inheri rounded-xl p-2 border-b-2' type="number" placeholder='Price...' />
                            <input ref={measurement} className=' bg-inheri rounded-xl p-2 border-b-2' type="text" placeholder='Measurement...' />
                            <input ref={quantity} className=' bg-inheri rounded-xl p-2 border-b-2' type="number" placeholder='quantity...' />
                            <input ref={file} className=' bg-inheri rounded-xl p-2 border-b-2' type="file" placeholder='choose file' />
                            <button type="submit" className=' bg-slate-200 p-2 rounded-xl w-full'>Submit</button>
                        </form>
                    </section>
                </main>
            </div>
        </div>
    )
}

