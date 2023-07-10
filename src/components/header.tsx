import { Logo } from "./logo";
import { ArrowDown } from "./arrowDown";

export function Header() {
  return(
    <header className="flex justify-between flex-row font-medium px-9 py-6">

      <div className="flex flex-row gap-7">

        <Logo />

        <div className="flex flex-row gap-1">
          <a href="">Features</a>
          <ArrowDown />
        </div>

        <div className="flex flex-row gap-1">
          <a href="">Company</a>
          <ArrowDown />
        </div>

        <a href="">Careers</a>
        <a href="">About</a>

      </div>

      <div>

        <a href="">Login</a>
        <a href="">Register</a>

      </div>


    </header>
  )
}