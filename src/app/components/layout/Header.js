import Link from "next/link";
import ShoppingCart from "../../../../public/icons/ShoppingCart";

export default function Header() {
  return (
    <header className="w-[70%] mx-auto flex justify-between items-center p-6 text-gray-500 font-semibold">
      <nav className="flex gap-8 items-center">
        <Link href='/' className="text-main font-semibold text-2xl">PIZZA</Link>
        <Link href='/'>Home</Link>
        <Link href='/'>Menue</Link>
        <Link href='/'>About</Link>
        <Link href='/'>Contact</Link>
      </nav>
      <div className="flex gap-8 items-center">
        <Link href='/'>Login</Link>
        <Link href='/' className="bg-main rounded-full text-white px-8 py-2">Register</Link>
        <Link href='/' className="w-7 h-7">
          <ShoppingCart />
        </Link>
      </div>
    </header>
  );
}