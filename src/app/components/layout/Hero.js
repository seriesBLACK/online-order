import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-100% sm:w-[70%] mx-auto flex justify-between sm:h-[70vh] h-[80vh] items-center p-6">
      <div className="font-semibold sm:w-[50%] w-full h-full flex flex-col sm:justify-evenly justify-around">
        <h1 className="sm:text-6xl text-4xl font-semibold text-black">Everything
          is better
          with a&nbsp;
          <span className="text-main ">
            Pizza
          </span>
        </h1>
        <p className="my-6 text-gray-500 sm:text-lg text-xl">Pizza is the missing piece that makes every day complete, a simple yet delicious joy in life</p>
        <div>
          <Link href='/' className="bg-main rounded-full text-white px-6 py-4 text-lg mr-3">Order Now</Link>
          <Link href='/' className="border p-4">Learn More</Link>
        </div>
      </div>
      <div className="w-[50%] h-full relative hidden sm:block">
        <Image className=" object-contain mt-9" src='/pizza.png' alt={'pizza'} width={500} height={500} />
      </div>
    </section>
  );
}