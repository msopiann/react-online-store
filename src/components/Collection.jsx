import { collectionProduct } from "../lib/data";

export default function Collection() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            New Collection
          </h2>

          <p className="mx-auto mt-4 max-w-md text-gray-500 text-p-size">
            Upgrade your winter wardrobe with our fresh new collection of cozy
            and stylish casual trainers, snuggly warm winter jumpers, and
            classic, timeless skinny jeans in blue.
          </p>
        </header>

        <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {collectionProduct.map((items, index) => (
            <li
              key={items.id}
              className={
                index === 2
                  ? "lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1"
                  : ""
              }
            >
              <a href="#" className="group relative block">
                <img
                  src={items.img}
                  alt={items.name}
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">
                    {items.name}
                  </h3>

                  <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Shop Now
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
