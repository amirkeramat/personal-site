import { Link } from "react-scroll";

import Typewriter from "typewriter-effect";
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaArrowRight,
} from "react-icons/fa";
const Intro = () => {
  return (
    <div
      id='home'
      className='h-screen min-h-full overflow-hidden  bg-hero-bg bg-top  bg-no-repeat bg-cover bg-fixed flex justify-center items-center px-[25px] lg:px-0'>
      <div className='container h-screen'>
        <div className='h-screen min-h-[720px] overflow-hidden flex flex-col justify-center space-y-10'>
          <div className=' relative z-10 flex justify-center items-center bg-white-color w-[100px] h-[40px] rounded after:small-dot'>
            <p>Hi there!</p>
          </div>
          <div className=' w-full text-sm lg:text-4xl mt-2 text-white-color'>
            <p>I am Amir Keramat</p>
            <Typewriter
              options={{
                strings: ["I Love to Develope.","I Love to Design."," A FrontEnd Developer...",'A designer...'],
                autoStart: true,
                pauseFor: 2000,
                loop: true,
              }}
            />
          </div>
          <div className='w-full text-xl lg:text-2xl lg:w-[500px] text-justify text-white-color '>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className='flex flex-col space-y-2 lg:space-y-0 lg:flex-row justify-between w-full lg:w-[350px]'>
            <button className=' bg-bg-primary-color text-white-color w-full lg:w-[150px] h-[50px] rounded-lg transition-all duration-500 hover:shadow-lg'>
              <div className='flex items-center justify-center'>
                <Link to='contact' smooth spy>
                  Hire Me
                </Link>
                <FaArrowRight className='ms-5' />
              </div>
            </button>
            <button className=' bg-text-secondary-color text-text-primary-color w-full lg:w-[150px] h-[50px] rounded-lg transition-all duration-500 hover:shadow-lg'>
              <div className='flex items-center justify-center'>
                <Link to='portfolio' smooth spy>
                  My Portfolio
                </Link>
                <FaArrowRight className='ms-5' />
              </div>
            </button>
          </div>
          <div className='w-full lg:w-[350px] flex justify-between text-black  font-extrabold'>
            <span className='flex items-center space-y-2 space-x-1'>
              <FaFacebook />
              <a target='blank' href='https://www.facebook.com/amirkeramat'>
                Facebook
              </a>
            </span>
            <span className='flex items-center  space-y-2 space-x-1'>
              <FaInstagram />
              <a target='blank' href='https://www.instagram.com/amirkeramat'>
                Instagram
              </a>
            </span>
            <span className='flex items-center space-y-2 space-x-1'>
              <FaTelegram />
              <a target='blank' href='https://www.telegram.com/@amirkeramat'>
                Telegram
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
