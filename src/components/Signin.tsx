import { Link } from "react-router-dom";
import sideimg from "../../public/SideImage.jpg";


export default function Signin() {
  return (
    <div>
      <div className=" container flex justify-around">
        <div className="mt-[57%] xl:mt-[15%] lg:mt-[20%] md:mt-[25%] mr-2">
          <h2 className="mb-2">Log in</h2>
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
        <div className="xl:mt-[6%] lg:mt-[15%] md:mt-[23%] md:block hidden">
          <img src={sideimg} alt="shop img" className="w-full h-full"/>
        </div>
      </div>
    </div>
  )
}
