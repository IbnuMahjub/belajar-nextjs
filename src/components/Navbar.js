import React from 'react';
import Image from 'next/image';
import Logo from '../../public/assets/logo.png';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div>
      <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 shadow">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link href="/" passHref>
            <Image src={Logo} className="h-6 sm:h-9" alt="Logo" />
          </Link>
          <div className="flex md:order-2">
            <button type="button" className="text-white bg-green hover:bg-green focus:ring-4 focus:outline-none focus:ring-green font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-green dark:hover:bg-green dark:focus:ring-green">HeylawEDU</button>
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
          </div>
          <div className="hidden mx-2 justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 mt-4 bg-gray-50  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
              <li>
                <Link href="/" className="font-bold px-2 pb-3 border-b-2  border-green text-black">Home</Link>
              </li>
              <li>
                <Link href="/tentangkami" className="font-bold px-2 pb-3 border-b-2 border-transparent hover:border-green text-grey">Tentang Kami</Link>
              </li>
              <li>
                <Link href="/blog" className="font-bold px-2 pb-3 border-b-2 border-transparent hover:border-green text-grey">Blog</Link>
              </li>
              <li>
                <Link href="/heylaw" className="font-bold px-2 pb-3 border-b-2 border-transparent hover:border-green text-grey">HeylawEDU</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
