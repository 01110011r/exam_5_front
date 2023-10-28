import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div>
         <div className=" container flex mt-36">
        <div>
          <h2>Sign in</h2>
          <form method="post" className="flex flex-col gap-y-4">
            <input className="border-2 py-1 border-t-0 border-x-0 bg-inherit" type="text" placeholder="username" />
            <input className="border-2 py-1 border-t-0 border-x-0 bg-inherit" type="email" name="email" id="email" placeholder="email" />
            <input className="border-2 py-1 border-t-0 border-x-0 bg-inherit" type="password" name="passwd" id="passwd" placeholder="password"/>
            <input type="button" value="submit" className=" border-2 mt-4 cursor-pointer bg-neutral-950 text-white py-2 inline-block" />
          </form>
          <Link to="/signup">
          <p className=" mt-2">signup...</p>
          </Link>
        </div>
        <div>
          <img src={''} alt="" />
        </div>
      </div>
    </div>
  )
}
