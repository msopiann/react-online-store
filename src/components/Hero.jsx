import heroImage from "/img/banner.webp";

export default function Hero() {
  return (
    <section
      className="hero relative w-full h-screen pt-20 px-[14%] pb-16 flex items-center justify-start"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      <div className="hero-text pt-16">
        <h6 className="text-xl font-medium tracking-wide text-second-color uppercase mb-3">
          EXCLUSIVE
        </h6>
        <h1 className="text-3xl md:text-h1-size font-bold leading-tight mb-5">
          Discover <br className="hidden md:block" />
          Your True Style
        </h1>
        <p className="w-full max-w-[320px] md:max-w-[560px] text-p-size font-normal text-second-color text-justify leading-[33px] mb-8">
          Explore our inspiring and contemporary collection, find the perfect
          pieces to complement your unique style.
        </p>

        <a
          href="#"
          className="inline-block py-4 px-11 bg-black text-white text-base font-medium transition-all border-2 border-solid border-transparent hover:-translate-y-2 hover:scale-y-95 hover:bg-transparent hover:border-2 hover:border-solid hover:border-black hover:text-black"
        >
          Shop Now <i className="ri-arrow-right-line"></i>
        </a>
      </div>
    </section>
  );
}
