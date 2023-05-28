import "./Topbar.css";
import { useState } from "react";
import { Link } from "react-scroll";
import { TfiMenu } from "react-icons/tfi";
export default function Topbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      console.log("scrolled");
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  });
  const showMenuHandler = () => {
    setShowMenu((prv) => !prv);
  };
  return (
    <nav
      id='topBar'
      className={`${
        isScroll
          ? "lg:bg-bg-primary-color bg-bg-primary-color "
          : "lg:bg-transparent"
      } ${
        showMenu ? "bg-bg-primary-color" : ""
      } transition-all duration-700 text-white-color z-50 fixed top-0 right-0 left-0 w-full`}>
      <div className='topBar-container  h-[60px] flex justify-between items-center px-[1rem] lg:px-[5rem] '>
        <p className=' text-2xl font-extrabold'>Amir.kr</p>
        <ul
          className={`topBar_menu-links flex justify-center items-center transition-all duration-500   absolute  right-0 left-0 bg-bg-primary-color flex-col lg:bg-transparent lg:flex-row lg:relative lg:top-0 lg:justify-between text-sm ${
            showMenu ? "top-[59px]" : "-top-[200px]"
          } `}>
          <li className='relative topBar_menu-link'>
            <Link
              className='link-item'
              activeClass={`${isScroll && "active"}`}
              smooth
              spy
              to='home'>
              Home
            </Link>
          </li>
          <li className='relative topBar_menu-link'>
            <Link
              className='link-item'
              activeClass='active'
              smooth
              spy
              to='about'>
              ABOUT
            </Link>
          </li>
          <li className='relative topBar_menu-link'>
            <Link
              className='link-item'
              activeClass='active'
              smooth
              spy
              to='services'>
              SERVICES
            </Link>
          </li>
          <li className='relative topBar_menu-link'>
            <Link
              className='link-item'
              activeClass='active'
              smooth
              spy
              to='portfolio'>
              PORTFOLIO
            </Link>
          </li>
          <li className='relative topBar_menu-link'>
            <Link
              className='link-item'
              activeClass='active'
              smooth
              spy
              to='pricing'>
              PRICING
            </Link>
          </li>
          <li className='relative topBar_menu-link'>
            <Link
              className='link-item'
              activeClass='active'
              smooth
              spy
              to='blog'>
              BLOG
            </Link>
          </li>
          <li className='relative topBar_menu-link'>
            <Link
              className='link-item'
              activeClass='active'
              smooth
              spy
              to='contact'>
              CONTACT
            </Link>
          </li>
        </ul>
        <div className='block lg:hidden'>
          <TfiMenu className=' z-[90]' onClick={showMenuHandler} />
        </div>
      </div>
    </nav>
  );
}
