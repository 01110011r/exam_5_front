import { gql, useMutation, useQuery } from '@apollo/client'
import { useRef } from 'react';
import { LiaUserSecretSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';


export default function Me() {

    const username = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);




    const ME = gql`
query Me{
    user{
    user_id
    username
    email
    password
    isAdmin
    Products{
        product_id
        product_name
        price
        measurement
        quantity
        category_id
        img
    }
    }
}
`;
    const { data } = useQuery(ME);


    console.log(data);

    const UPDATE = gql`
  mutation Update($username:String, $email:String, $password:String){
    updateuser(username:$username, email:$email, password:$password){
        msg 
        data
    }
  }
  `;


    const [UpdateFunc, { error }] = useMutation(UPDATE);


    function sender() {
        if (username.current?.value.trim() == "") return alert('wrong username!   :(');
        if (email.current?.value.trim() == "") return alert("wrong email!  :(");
        if (password.current?.value.trim() == "") return alert("wrong password!  :(");

        UpdateFunc({
            variables: {
                username: username.current?.value,
                email: email.current?.value,
                password: password.current?.value,
            }
        });
        

    };


    const DELETE=gql`
    mutation Deletuser{
deletuser{
    msg 
    data
}
    }
    `;

    const [DeletFun]=useMutation(DELETE);


    if (error && error.message) {
        alert(error?.message)
    };



    return (
        <main className=' container mt-36 mb-16'>
            <p>
                <span><Link to={'/'} className=' opacity-50'>home / </Link></span>
                <span><Link to={'/me'} className=' opacity-50'>me / </Link></span>
                <span><Link to={'/history'} className=' opacity-80'> history / </Link></span>
            </p>
            <div className=' mt-6 flex items-center justify-around'>
                <div className=' flex flex-col justify-center items-center rounded-xl gap-y-5 py-8 px-10 border-2'>
                    <LiaUserSecretSolid className=' w-24 h-24 cursor-wait' />
                    <h3 className=' cursor-cell'>username: {data?.user?.username || "?"}</h3>
                    <h3 className=' cursor-cell'>email: {data?.user?.email || "?"}</h3>
                </div>
                <form onSubmit={(e)=>{e.preventDefault(); sender()}} className=' flex flex-col gap-5'>
                    <label className=' border-2 px-3 py-2 flex gap-x-2 rounded-md items-center'><span className=' capitalize text-neutral-500'>username</span><input ref={username} className=' outline-none' type="text" /></label>
                    <label className=' border-2 px-3 py-2 flex gap-x-2 rounded-md items-center'><span className=' capitalize text-neutral-500'>email</span><input ref={email} type="email" /></label>
                    <label className=' border-2 px-3 py-2 flex gap-x-2 rounded-md items-center'><span className=' capitalize text-neutral-500'>password</span><input ref={password} type="text" /></label>
                    <button className='border-2 px-3 py-2 rounded-md bg-green-500 text-gray-200'>Save</button>
                </form>
            </div>
            <fieldset className=' w-full mt-14 border-2 p-6 rounded-md'>
                <legend className=' px-2'>Settings</legend>

                <input type="radio" id="kraken" name="monster" value="K" />
                <label >Kraken</label><br />

                <input type="radio" id="sasquatch" name="monster" value="S" />
                <label>Sasquatch</label><br />

                <input type="radio" id="mothman" name="monster" value="M" />
                <label >Mothman</label><br />
                <button onClick={()=>{DeletFun(); localStorage.removeItem('token'); setTimeout(()=>window.location.pathname='/signin', 1000)}} className='border-2 px-3 py-2 rounded-md bg-red-600 text-gray-100 mt-4 '>Delete account</button>
            </fieldset>

        </main>
    )
}
