"use client"
import Link from "next/link";
import { useState } from "react"
import Bars2 from "../../../../public/icons/Bars2";

export default function DropDownMenu() {
  const [dropDown, setDropDown] = useState(false)
  return (
    <>
      <button onClick={() => setDropDown(prev => !prev)} className="w-6 h-6 sm:hidden"><Bars2 className="w-6 h-6" /></button>
      {dropDown && (
        <div className="sm:hidden md:hidden bg-gray-200 rounded-lg flex flex-col gap-2 text-center fixed w-full top-10 left-0">
          <Link href='/'>Home</Link>
          <Link href='/'>Menue</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
        </div>
      )}

    </>
  )
}
