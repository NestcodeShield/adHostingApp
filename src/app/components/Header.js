import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex flex-col h-auto text-white items-center">
        <div className="flex flex-row gap-4 items-center bg-white w-full p-2 justify-evenly">
            <nav className="flex gap-4">

              <Link href='/' className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Главная</Link>

              <Link href='/about' className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>

            </nav>
            <div className="flex flex-row gap-3 items-center">
              <ul className="flex flex-row gap-3 ">
                <li>
                  <Link className="text-black" href='/registration'>Вход</Link>
                </li>
                <span>|</span>
                <li>
                  <Link className="text-black" href='/registration'>
                   Регистрация
                  </Link>
                </li>
              </ul>
              <Link className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" href='/createad'>Создать объявление</Link>
            </div>
          </div>

            <div className="bg-zinc-900 p-2 w-full">
              <span><Link href='/'>Mega</Link></span>
            </div>
    </header>
  )
}

export default Header