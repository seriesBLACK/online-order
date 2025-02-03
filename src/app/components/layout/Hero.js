import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-100% sm:w-[70%] mx-auto flex justify-between sm:h-[70vh] h-[100vh] items-center p-6">
      <div className="font-semibold w-[50%] h-full flex flex-col justify-evenly">
        <h1 className="sm:text-6xl text-lg font-semibold text-black">Everything
          is better
          with a&nbsp;
          <span className="text-main ">
            Pizza
          </span>
        </h1>
        <p className="my-6 text-gray-500 sm:text-lg text-sm">Pizza is the missing piece that makes every day complete, a simple yet delicious joy in life</p>
        <div>
          <Link href='/' className="bg-main rounded-full text-white px-6 py-4 text-lg mr-3">Order Now</Link>
          <Link href='/' className="border p-4">Learn More</Link>
        </div>
      </div>
      <div className="w-[50%] h-full relative">
        <Image className=" object-contain" src='/pizza.png' alt={'pizza'} width={500} height={500} />
      </div>
    </section>
  );
}