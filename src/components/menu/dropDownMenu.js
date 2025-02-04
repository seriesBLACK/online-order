"use client"
import Link from "next/link";
import { useState } from "react"

export default function DropDownMenu() {
  const [dropDown, setDropDown] = useState(false)
  return (
    <>
      <button onClick={() => setDropDown(prev => !prev)} className="w-6 h-6 sm:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
        </svg>

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
