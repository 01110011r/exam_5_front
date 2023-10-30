import { useRef } from "react";
import sideimg from "../../public/SideImage.jpg";
import { Link } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";


export default function Signup() {

  const username = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const file = useRef<HTMLInputElement>(null);

  const SIGN_UP = gql`
  mutation Signup($username: String!, $email: String!, $password: String!, $file: Upload!) {
    signup(username: $username, email: $email, password: $password, file: $file) {
      msg
      data
    }
  }
`;


  const [createUser, { data, loading, error }] = useMutation(SIGN_UP);
  console.log(data);
  console.log(loading);
  console.log(error);



  console.log(username);
  function sender() {
    if (username.current?.value.trim() == "") return alert('wrong username!   :(');
    if (email.current?.value.trim() == "") return alert("wrong email!  :(");
    if (password.current?.value.trim() == "") return alert("wrong password!  :(");
    if (file.current?.files?.length == 0) return alert("image not chosen!  :(");
    if (file.current?.files?.item(0)?.type.slice(0, 5) != "image") return alert("The uploaded file is not image. Upload an image!  :(");

    console.log('ok');

    createUser({
      variables: {
        username: username.current?.value,
        email: email.current?.value,
        password: password.current?.value,
        file: file.current?.files?.[0]
      }
    });

  }

  console.log(file.current?.files?.[0]);

  return (
    <div>
      <div className=" container flex justify-around">
        <div className="mt-[57%] xl:mt-[15%] lg:mt-[20%] md:mt-[25%] mr-2">
          <h2 className="mb-2">Create an account</h2>
          <form onSubmit={(e) => { e.preventDefault(); sender() }} method="post" className="flex flex-col gap-y-4">
            <input ref={username} className="border-2 py-1 border-t-0 border-x-0 bg-inherit" type="text" placeholder="username" />
            <input ref={email} className="border-2 py-1 border-t-0 border-x-0 bg-inherit" type="email" name="email" id="email" placeholder="email" />
            <input ref={password} className="border-2 py-1 border-t-0 border-x-0 bg-inherit" type="password" name="passwd" id="passwd" placeholder="password" />
            <input ref={file} className="bg-inherit cursor-pointer" type="file" name="file" id="file" placeholder="choose file" />
            <input type="submit" value="submit" className=" border-2 mt-4 cursor-pointer bg-neutral-950 text-white py-2 inline-block" />
          </form>
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
