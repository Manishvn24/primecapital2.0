import Link from "next/link";
import Action from "./Action";
import Navigation from "./Navigation";
import Image from "next/image";
import Logo from "./Logo";
import Topbar from "./Topbar";

const Navbar = () => {
  return (
    <nav className="md:h-24 sm:16 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-full max-w-7xl  items-center px-6">
        <div className="flex-1">
          <Logo />
        </div>
        <div className="lg:flex justify-center hidden">
          <Navigation />
        </div>
        <div className="flex flex-1 justify-end items-center gap-3">
          <div className="hidden lg:block">
            <Action />
          </div>
          <button className="lg:hidden">☰</button>
        </div>
      </div>
    </nav>
  );
}
export default Navbar