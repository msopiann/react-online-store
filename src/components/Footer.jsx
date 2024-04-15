export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 flex justify-between items-center flex-col gap-8 lg:flex-row">
          <a href="/" className="text-lg flex justify-center ">
            WARYAN
          </a>
          <ul className="text-lg text-center sm:flex items-center justify-center gap-14 lg:gap-10 xl:gap-14 transition-all duration-500">
            <li className="sm:my-0 my-2">
              <a href="#" className="text-black hover:text-gray-400">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-gray-400">
                Resources
              </a>
            </li>
            <li className="sm:my-0 my-2">
              <a href="#" className="text-black hover:text-gray-400">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-gray-400">
                Support
              </a>
            </li>
          </ul>
          <div className="flex  space-x-4 sm:justify-center">
            <a
              href="https://github.com/msopiann/react-online-store"
              target="_blank"
              className="w-9 h-9 rounded-full flex justify-center items-center bg-black hover:bg-slate-600"
            >
              <div className="ri-github-line w-6 h-auto text-white mx-auto my-auto text-2xl"></div>
            </a>
            <a
              href="https://linkedin.com/in/msopiann"
              target="_blank"
              className="w-9 h-9 rounded-full flex justify-center items-center bg-black hover:bg-slate-600"
            >
              <div className="ri-linkedin-fill w-6 h-auto text-white mx-auto my-auto text-2xl"></div>
            </a>
          </div>
        </div>
        <div className="py-7 border-t border-gray-700">
          <div className="flex items-center justify-center">
            <span className="text-black">
              ©<a href="/">WARYAN</a> 2024, All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
