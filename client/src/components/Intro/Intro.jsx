import { Button } from "react-scroll";
import Typewriter from "typewriter-effect";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";
const Intro = () => {
  return (
    <div
      id='home'
      className='h-screen bg-hero-bg bg-top  bg-no-repeat bg-cover bg-fixed flex justify-center items-center px-[25px] lg:px-0'>
      <div className='container flex flex-col justify-center space-y-10'>
        <div className=' relative z-10 flex justify-center items-center bg-white-color w-[100px] h-[40px] rounded after:small-dot'>
          <p>Hi there!</p>
        </div>
        <div className=' w-full text-sm lg:text-4xl mt-2 text-white-color'>
          <Typewriter
            options={{
              strings: ["I am Amir Keramat FrontEnd Developer"],
              autoStart: true,
              pauseFor: 2000,
              loop: true,
            }}
          />
        </div>
        <div className='w-full text-xl font-extrabold lg:text-2xl lg:w-[500px] text-justify text-white-color '>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className='flex justify-between w-full lg:w-[350px]'>
          <button className=' bg-bg-primary-color text-white-color w-[150px] h-[50px] rounded-lg transition-all duration-500 hover:shadow-lg'>
            Hire Me
          </button>
          <button className=' bg-text-secondary-color text-text-primary-color w-[150px] h-[50px] rounded-lg transition-all duration-500 hover:shadow-lg'>
            My Portfolio
          </button>
        </div>
        <div className='w-full lg:w-[350px] flex justify-between text-white-color'>
          <span className='flex items-center space-y-2 space-x-1'>
            <FaFacebook />
            <h6>Facebook</h6>
          </span>
          <span className='flex items-center  space-y-2 space-x-1'>
            <FaInstagram />
            <h6>Instagram</h6>
          </span>
          <span className='flex items-center space-y-2 space-x-1'>
            <FaTelegram />
            <h6>Telegram</h6>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Intro;
