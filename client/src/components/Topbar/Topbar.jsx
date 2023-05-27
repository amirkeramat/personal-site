import "./Topbar.css";
import { Link } from "react-scroll";
import { TfiMenu } from "react-icons/tfi";
export default function Topbar() {
  return (
    <nav
      id='topBar'
      className='bg-bg-primary-color text-white-color fixed top-0 right-0 left-0 w-full'>
      <div className='topBar-container  h-[60px] flex justify-between items-center px-[1rem] md:px-[5rem] '>
        <h6>Amir.kr</h6>
        <ul className='topBar_menu-links flex justify-center items-center   absolute top-[60px] right-0 left-0 bg-bg-primary-color flex-col md:bg-transparent md:flex-row md:relative md:top-0 md:justify-between '>
          <li className='topBar_menu-link'>
            <Link
              className='link-item'
              activeClass='active'
              smooth
              spy
              to='home'>
              Home
            </Link>
          </li>
          <li className='topBar_menu-link'>
            <Link
              className='link-item'
              activeClass='active'
              smooth
              spy
              to='about'>
              ABOUT
            </Link>
          </li>
          <li className='topBar_menu-link'>
            <Link
              className='link-item'
              activeClass='active'
              smooth
              spy
              to='services'>
              SERVICES
            </Link>
          </li>
          <li className='topBar_menu-link'>
            <Link
              className='link-item'
              activeClass='active'
              smooth
              spy
              to='portfolio'>
              PORTFOLIO
            </Link>
          </li>
          <li className='topBar_menu-link'>
            <Link
              className='link-item'
              activeClass='active'
              smooth
              spy
              to='pricing'>
              PRICING
            </Link>
          </li>
          <li className='topBar_menu-link'>
            <Link
              className='link-item'
              activeClass='active'
              smooth
              spy
              to='blog'>
              BLOG
            </Link>
          </li>
          <li className='topBar_menu-link'>
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
        <div className='block md:hidden'>
          <TfiMenu />
        </div>
      </div>
    </nav>
  );
}
