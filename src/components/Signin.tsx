import { Link } from "react-router-dom";
import sideimg from "../../public/SideImage.jpg";
import { gql, useMutation } from "@apollo/client";
import { useRef } from "react";


export default function Signin() {


  const username = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const SIGN_IN = gql`
  mutation Signin($username: String!, $email: String!, $password: String!) {
    signin(username: $username, email: $email, password: $password) {
      msg
      data
    }
  }
`;


  const [getUser, { data, loading, error }] = useMutation(SIGN_IN);
  console.log(data);
  // console.log(loading);
  // console.log(error);



  function sender() {
    if (username.current?.value.trim() == "") return alert('wrong username!   :(');
    if (email.current?.value.trim() == "") return alert("wrong email!  :(");
    if (password.current?.value.trim() == "") return alert("wrong password!  :(");


    getUser({
      variables: {
        username: username.current?.value,
        email: email.current?.value,
        password: password.current?.value,
      }
    });

  }

  if(error&&error.message){
    alert(error?.message)
    };
    
    if(data?.signin?.msg=="ok"&&data.signin.data?.token){
    const token:string=data.signin.data?.token;
    console.log(token);
    
      localStorage.setItem('token',token);
    window.location.pathname='/';
    };
    

  return (
    <div>
      <div className=" container flex justify-around">
        <div className="mt-[57%] xl:mt-[15%] lg:mt-[20%] md:mt-[25%] mr-2">
          <h2 className="mb-2">Log in</h2>
          <form onSubmit={(e)=>{e.preventDefault(); sender()}} method="post" className="flex flex-col gap-y-4">
            <input ref={username} className="border-2 py-1 border-t-0 border-x-0 bg-inherit" type="text" placeholder="username" />
            <input ref={email} className="border-2 py-1 border-t-0 border-x-0 bg-inherit" type="email" name="email" id="email" placeholder="email" />
            <input ref={password} className="border-2 py-1 border-t-0 border-x-0 bg-inherit" type="password" name="passwd" id="passwd" placeholder="password"/>
            <input type="submit" value="submit" className=" border-2 mt-4 cursor-pointer bg-neutral-950 text-white py-2 inline-block" />
          </form>
          <span className=" text-red-600">{data?.signin&&data.signin.msg!="ok" ? data.signin.msg : ""}</span>
          
          <Link to="/signup">
          <p className=" mt-2">signup...</p>
          </Link>
        </div>
        <div className="xl:mt-[6%] lg:mt-[15%] md:mt-[23%] md:block hidden">
          <img src={sideimg} alt="shop img" className="w-full h-full"/>
        </div>
      </div>
    </div>
  )
}
