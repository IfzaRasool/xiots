import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <nav>
        <div className="container">
          <div className="max-w-full">
            <div className="flex my-2 items-center">
              <h1>Logo</h1>
              <div className="hidden md:flex md:justify-around">
                <Link
                  href="/home"
                  className="px-2 py-2 hover:bg-sky-700 rounded"
                >
                  Home
                </Link>
                <Link
                  href="/home"
                  className="px-2 py-2 hover:bg-sky-700 rounded"
                >
                  Home
                </Link>
                <Link
                  href="/home"
                  className="px-2 py-2 hover:bg-sky-700 rounded"
                >
                  Home
                </Link>
              </div>
            </div>

            {/* modile button  */}
            <div className="md:hidden flex items-center">
              <button
                type="submit"
                onClick={() => setOpen(!open)}
                className="mx-3 hover:bg-sky-700 rounded text-3xl cursor-pointer"
              >
                {open ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
          {/* mobile menu */}
          <div className={`md:hidden ${open ? 'visible' : ' hidden'}`}>
            <Link
              href="/index"
              className="block px-3 py-4 text-small hover:bg-sky-700 rounded"
            >
              Home
            </Link>
            <Link
              href="/index"
              className="block px-3 py-4 text-small hover:bg-sky-700 rounded"
            >
              Home
            </Link>
            <Link
              href="/index"
              className="block px-3 py-4 text-small hover:bg-sky-700 rounded"
            >
              Home
            </Link>
          </div>
        </div>
        <div className="bg-primary max-w-full text-lightgrey">
          <div className="container">
            <div className="hidden md:flex ">
              <Link href="/home" className="px-2 py-2  hover:text-yellow rounded">
                HOME
              </Link>
              <Link href="/home" className="px-2 py-2 hover:text-yellow rounded">
                POSTS
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
