import MenueCart from "../menu/MenueCart"

function MenuePage() {
  return (
    <section className="w-[90%] mx-auto h-[100vh]">
      <h2 className="text-main text-center text-4xl font-bold">Menue</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
        <MenueCart />
        <MenueCart />
        <MenueCart />
        <MenueCart />
        <MenueCart />
        <MenueCart />
        <MenueCart />

      </div>
    </section>
  )
}

export default MenuePage
