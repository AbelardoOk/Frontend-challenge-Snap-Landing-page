import { Logo } from "./logo";
import { ArrowDown } from "./arrowDown";

export function Header() {
  return(
    <header className="flex justify-between flex-row font-medium px-10 py-8">

      <div className="flex flex-row gap-12">

        <Logo />

        <div className="flex flex-row gap-1 fill-neutral-gray hover:text-neutral-black hover:fill-neutral-black transition duration-300">
          <a href="">Features</a>
          <ArrowDown />
        </div>

        <div className="flex flex-row gap-1 fill-neutral-gray hover:text-neutral-black hover:fill-neutral-black transition duration-300">
          <a href="">Company</a>
          <ArrowDown />
        </div>

        <a href="" className="hover:text-neutral-black transition duration-300">Careers</a>
        <a href="" className="hover:text-neutral-black transition duration-300">About</a>

      </div>

      <div className="flex gap-12">
        <a href="" className="hover:text-neutral-black transition duration-300">Login</a>

        <a href="" className="mt-[-4%] px-6 py-2 border-neutral-gray border-2 rounded-2xl hover:text-neutral-black hover:border-neutral-black transition duration-300">
          Register
        </a>
      </div>
        


    </header>
  )
}