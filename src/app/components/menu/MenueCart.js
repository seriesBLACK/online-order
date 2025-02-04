"use client"
import Image from "next/image";
import { useState } from "react";

export default function MenueCart() {
  const [showPopup, setShowPopup] = useState(false)
  return (
    <>
      <div className="bg-[#e5e2e2] rounded-lg p-4 flex flex-col items-center gap-2">
        <Image src="/pizza.png" width={300} height={300} alt="pizza" className="mx-auto" />
        <h2 className="text-xl font-bold text-center mb-2">paporny Pizza</h2>
        <p className="text-center text-gray-500 text-sm mb-2">Lorem ipsum description</p>

        <button onClick={() => setShowPopup(true)} className="bg-main rounded-full text-white px-5 py-3 text-lg">Add to cart $12</button>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
          <div className="my-8 bg-white p-2 rounded-lg max-w-md absolute">
            <Image onClick={() => setShowPopup(false)} src="/icons/x.svg" width={37} height={37} alt="close" className=" relative top-0 rigt-[1rem] cursor-pointer" onClick={() => setShowPopup(false)} />
            <div
              className="overflow-y-scroll p-2"
              style={{ maxHeight: 'calc(100vh - 100px)' }}>
              <Image
                src='/pizza.png'
                alt={'name'}
                width={300} height={200}
                className="mx-auto" />
              <h2 className="text-lg font-bold text-center mb-2">pizza</h2>
              <p className="text-center text-gray-500 text-sm mb-2">
                lorem ipsum
              </p>

              <div className="py-2">
                <h3 className="text-center text-gray-700">Pick your size</h3>

                <label className="flex items-center gap-2 p-4 border rounded-md mb-1">
                  <input
                    type="radio"
                    name="size" />
                </label>

              </div>


              <div className="py-2">
                <h3 className="text-center text-gray-700">Any extras?</h3>
                <label

                  className="flex items-center gap-2 p-4 border rounded-md mb-1">
                  <input
                    type="checkbox"

                  />

                </label>

              </div>

              <button>
                <div className="primary sticky bottom-2">Add to cart $12</div>
              </button>
              <button className="mt-2">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
