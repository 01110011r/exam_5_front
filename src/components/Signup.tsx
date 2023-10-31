import { useRef } from "react";
import sideimg from "../../public/SideImage.jpg";
import { Link, Navigate } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";


export default function Signup() {

  const username = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const SIGN_UP = gql`
  mutation Signup($username: String!, $email: String!, $password: String!) {
    signup(username: $username, email: $email, password: $password) {
      msg
      data
    }
  }
`;


  const [createUser, { data, loading, error }] = useMutation(SIGN_UP);
  console.log(data);
  // console.log(loading);
  console.log(error);


  function sender() {
    if (username.current?.value.trim() == "") return alert('wrong username!   :(');
    if (email.current?.value.trim() == "") return alert("wrong email!  :(");
    if (password.current?.value.trim() == "") return alert("wrong password!  :(");
    // if (file.current?.files?.length == 0) return alert("image not chosen!  :(");
    // if (file.current?.files?.item(0)?.type.slice(0, 5) != "image") return alert("The uploaded file is not image. Upload an image!  :(");

    createUser({
      variables: {
        username: username.current?.value,
        email: email.current?.value,
        password: password.current?.value,
      }
    });

  }

  // console.log(file.current?.files?.[0]);
if(error&&error.message){
alert(error?.message)
};

if(data?.signup?.msg=="ok"&&data.signup.data?.token){
const token:string=data.signup.data?.token;
  localStorage.setItem('token',token);
{/* <Navigate to={'/'}/> */}
window.location.pathname='/';
};

  return (
    <div>
      <div className=" container flex justify-around">
        <div className="mt-[57%] xl:mt-[15%] lg:mt-[20%] md:mt-[25%] mr-2">
          <h2 className="mb-2">Create an account</h2>
          <form onSubmit={(e) => { e.preventDefault(); sender() }} method="post" className="flex flex-col gap-y-4">
            <input ref={username} className="border-2 py-1 border-t-0 border-x-0 bg-inherit" type="text" placeholder="username" />
            <input ref={email} className="border-2 py-1 border-t-0 border-x-0 bg-inherit" type="email" name="email" id="email" placeholder="email" />
            <input ref={password} className="border-2 py-1 border-t-0 border-x-0 bg-inherit" type="password" name="passwd" id="passwd" placeholder="password" />
            {/* <input ref={file} className="bg-inherit cursor-pointer" type="file" name="file" id="file" placeholder="choose file" /> */}
            <input type="submit" value="submit" className=" border-2 mt-4 cursor-pointer bg-neutral-950 text-white py-2 inline-block" />
          </form>
          <span className=" text-red-600">{data?.signup&&data.signup.msg!="ok" ? data.signup.msg : ""}</span>
          <Link to="/signin">
            <p className=" mt-2">signin...</p>
          </Link>
        </div>
        <div className="xl:mt-[6%] lg:mt-[15%] md:mt-[23%] md:block hidden">
          <img src={sideimg} alt="shop img" className="w-full h-full" />
        </div>
      </div>
    </div>
  )
}
