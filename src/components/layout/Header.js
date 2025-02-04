import Link from "next/link";
import DropDownMenu from "../menu/dropDownMenu";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sm:w-[70%] w-full mx-auto flex justify-between items-center sm:p-6 p-2 text-gray-500 font-semibold">
      <nav className="flex gap-8 items-center">
        <Link href='/' className="text-main font-semibold text-2xl">PIZZA</Link>
        <div className="hidden sm:flex items-center md:gap-8 gap-4">
          <Link href='/'>Home</Link>
          <Link href='/'>Menue</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
        </div>

      </nav>
      <div className="flex gap-8 items-center">
        <Link href='/'>Login</Link>
        <Link href='/' className="bg-main rounded-full text-white px-8 py-2 hidden sm:block">Register</Link>
        <Link href='/' className="w-7 h-7">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=''>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
        </Link>
        <DropDownMenu />
      </div>
    </header>
  );
}