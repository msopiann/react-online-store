import { productList } from "../lib/data";

export default function ProductList() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope font-bold text-4xl text-center text-black mb-8 max-xl:text-center">
          All Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {productList.map((items) => (
            <a
              key={items.id}
              href="#"
              className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer"
            >
              <img
                src={items.img}
                alt={items.name}
                className="transition-all hover:scale-110"
              />
              <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                <div className="flex items-center justify-between mb-2">
                  <h6 className="font-semibold text-base leading-7 text-black ">
                    {items.name}
                  </h6>
                  <h6 className="font-semibold text-base leading-7 text-black text-right">
                    $ {items.price}
                  </h6>
                </div>
                <p className="text-xs leading-5 text-gray-500">
                  {items.category}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#"
            className="inline-block py-4 px-10 bg-transparent text-black text-p-size font-medium border border-solid border-second-color hover:-translate-y-2 hover:scale-y-95 hover:bg-black hover:text-white transition-all"
          >
            View All
          </a>
        </div>
      </div>
    </section>
  );
}
