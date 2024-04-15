import { brandLogo } from "../lib/data";

export default function Brand() {
  return (
    <div className="py-8 px-[14%] bg-black">
      <div className="flex flex-wrap items-center justify-between gap-8">
        {brandLogo.map((items) => (
          <div key={items.id} className="brand-c">
            <img
              src={items.image}
              alt={items.name}
              className="w-full max-w-[100px] md:max-w-full h-[30px] md:h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
