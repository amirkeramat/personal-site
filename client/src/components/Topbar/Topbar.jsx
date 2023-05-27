import "./Topbar.css";
import { Link } from "react-scroll";
export default function Topbar() {

  return (
    <nav id='topBar' className='bg-bg-primary-color text-white-color'>
      <div className='topBar-container container p-4 h-[60px] '>
        <div className='topBar_left-side'>
          <h6>Amir.kr</h6>
        </div>

        <div className='topBar_right-side'>
          <ul className='topBar_menu-links flex justify-between'>
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
        </div>
            <div>
                
            </div>

      </div>
    </nav>
  );
}
