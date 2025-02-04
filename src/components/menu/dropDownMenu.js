"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react"

export default function DropDownMenu() {
  const [dropDown, setDropDown] = useState(false)
  return (
    <>
      <button onClick={() => setDropDown(prev => !prev)} className="w-6 h-6 sm:hidden">
        <Image src="/icons/bars.svg" alt="menu" width={24} height={24} />
      </button>
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
