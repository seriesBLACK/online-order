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
          <Image src="/icons/ShoppingCart.svg" width={16} height={16} alt="cart" />
        </Link>
        <DropDownMenu />
      </div>
    </header>
  );
}