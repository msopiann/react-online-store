import { navData, navIcons } from "../lib/data";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 w-full z-50 transition-all py-[18px] px-[14%] flex items-center justify-between ${
        isScrolled ? "bg-white shadow" : "bg-transparent"
      }`}
    >
      <a href="#" className="logo text-3xl text-black uppercase font-extrabold">
        Waryan
      </a>

      <ul className="hidden md:flex space-x-2 md:space-x-4">
        {navData.map((item) => {
          if (item.id === "6") {
            return (
              <li
                key={item.id}
                className="md:hidden hover:-translate-y-1 transition-all"
              >
                <a
                  href={item.url}
                  className="transition-all font-semibold hover:underline hover:text-blue-500"
                >
                  {item.title}
                </a>
              </li>
            );
          }
          return (
            <li key={item.id} className="hover:-translate-y-1 transition-all">
              <a
                href={item.url}
                className="transition-all font-semibold hover:underline hover:text-blue-500"
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="nav-right text-xl space-x-3">
        {navIcons.map((item) => {
          if (item.id === "3") {
            return (
              <a
                href={item.href}
                key={item.id}
                className="hidden transition-all hover:text-blue-500"
              >
                <i className={item.name}></i>
              </a>
            );
          }
          return (
            <a
              href={item.href}
              key={item.id}
              className="md:hidden transition-all hover:text-blue-500"
            >
              <i className={item.name}></i>
            </a>
          );
        })}

        <div
          onClick={toggleNav}
          className={
            isNavOpen
              ? "ri-close-large-line inline-flex transition-all hover:text-blue-500 md:hidden"
              : "ri-menu-line inline-flex transition-all hover:text-blue-500 md:hidden"
          }
        ></div>

        <a
          href="#"
          className="hidden md:block px-4 py-1 border border-solid border-black bg-transparent uppercase text-p-size font-bold transition-all hover:-translate-y-2 hover:underline hover:text-blue-500"
        >
          login
        </a>
      </div>

      <ul
        className={
          isNavOpen
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] text-white ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-white m-4">WARYAN</h1>

        {navData.map((items) => (
          <li
            key={items.id}
            className="p-4 border-b rounded-xl hover:bg-white duration-300 hover:text-black cursor-pointer border-gray-600"
          >
            {items.title}
          </li>
        ))}
      </ul>
    </header>
  );
}
