import { useMemo, useState } from "react";

const About = () => {
  const [showInfo, setShowInfo] = useState("about-me");
  const onClickHandler = (Info) => {
    setShowInfo(Info);
  };
  return (
    <div
      className='bg-gray-100 relative overflow-hidden h-screen min-h-full flex justify-center items-center'
      id='about'>
      <div className='container h-screen mt-5 lg:mt-[500px] '>
        <div className='grid grid-cols lg:grid-cols-2 gap-x-4  h-screen  min-h-[720px] overflow-hidden '>
          <div className='h-full'>
            <img src='/img/about.jpg' className='w-full h-full lg:h-[600px] rounded-xl' alt='' />
          </div>
          <div className='flex flex-col space-y-5 lg:space-y-10 '>
            <div className='flex justify-between'>
              <button
                className={`w-[120px] p-2 rounded relative  ${
                  showInfo === "about-me"
                    ? " bg-active-color text-white after:big-dot"
                    : "bg-white-color"
                } transition-all duration-500`}
                onClick={() => onClickHandler("about-me")}>
                ABOUT ME
              </button>
              <button
                className={`w-[120px] p-2 rounded relative  ${
                  showInfo === "my-skills"
                    ? " bg-active-color text-white after:big-dot"
                    : "bg-white-color"
                } transition-all duration-500`}
                onClick={() => onClickHandler("my-skills")}>
                MY SKILLS
              </button>
              <button
                className={`w-[120px] p-2 rounded relative${
                  showInfo === "experience"
                    ? " bg-active-color text-white after:big-dot"
                    : " bg-white-color"
                } transition-all duration-500`}
                onClick={() => onClickHandler("experience")}>
                EXPERIENCE
              </button>
            </div>
            <div
              className={`flex flex-col space-y-5 px-2 lg:space-y-12 transition-all duration-500 ${
                showInfo === "about-me"
                  ? "block opacity-100"
                  : "hidden opacity-0"
              }`}>
              <div className='flex flex-col lg:space-y-5'>
                <h4 className=' text-text-title-color lg:text-2xl font-bold'>
                  My Story
                </h4>
                <p className=' text-text-content-color lg:text-xl leading-relaxed'>
                  Im from Iran and start to codding since 2019 after graduated
                  from university
                </p>
              </div>
              <div className='flex flex-col lg:space-y-5'>
                <h4 className=' text-text-title-color lg:text-2xl font-bold'>
                  How do i start?
                </h4>
                <p className=' text-text-content-color lg:text-xl leading-relaxed'>
                  I start to learn codding with self learning method and now im
                  good at my Job and Always i said From Vision to Reality with
                  BlueBee by the way BlueBee is my future Company name
                </p>
              </div>
            </div>
            <div
              className={`flex flex-col space-y-5 px-2 lg:space-y-12 transition-all duration-500 ${
                showInfo === "my-skills"
                  ? "block opacity-100"
                  : "hidden opacity-0"
              }`}>
              <div className='flex flex-col space-y-4 lg:space-y-10'>
                <h4 className=' text-text-title-color lg:text-2xl font-bold'>
                  My Skills
                </h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-x-4 gap-y-1 lg:gap-y-20'>
                  <div className='grid-cols-6'>
                    <span className='flex justify-between'>
                      <h4>HTML/CSS</h4>
                      <h6> 99%</h6>
                    </span>
                    <div className='w-full rounded-full h-[10px] bg-white-color'>
                      <div className='w-[99%] rounded-full h-[9px] bg-blue-500'></div>
                    </div>
                  </div>
                  <div className='grid-cols-6'>
                    <span className='flex justify-between'>
                      <h4>Java Script</h4>
                      <h6> 70%</h6>
                    </span>
                    <div className='w-full rounded-full h-[10px] bg-white-color'>
                      <div className='w-[70%] rounded-full h-[9px] bg-indigo-500'></div>
                    </div>
                  </div>
                  <div className='grid-cols-6'>
                    <span className='flex justify-between'>
                      <h4>React</h4>
                      <h6> 75%</h6>
                    </span>
                    <div className='w-full rounded-full h-[10px] bg-white-color'>
                      <div className='w-[75%] rounded-full h-[9px] bg-amber-500'></div>
                    </div>
                  </div>
                  <div className='grid-cols-6'>
                    <span className='flex justify-between'>
                      <h4>TailWindCss</h4>
                      <h6> 90%</h6>
                    </span>
                    <div className='w-full rounded-full h-[10px] bg-white-color'>
                      <div className='w-[90%] rounded-full h-[9px] bg-emerald-500'></div>
                    </div>
                  </div>
                  <div className='grid-cols-6'>
                    <span className='flex justify-between'>
                      <h4>Bootstrap</h4>
                      <h6> 60%</h6>
                    </span>
                    <div className='w-full rounded-full h-[10px] bg-white-color'>
                      <div className='w-[60%] rounded-full h-[9px] bg-teal-500'></div>
                    </div>
                  </div>
                  <div className='grid-cols-6'>
                    <span className='flex justify-between'>
                      <h4>Js/React Libraries</h4>
                      <h6> 80%</h6>
                    </span>
                    <div className='w-full rounded-full h-[10px] bg-white-color'>
                      <div className='w-[80%] rounded-full h-[9px] bg-fuchsia-700'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`flex flex-col space-y-5 px-2 lg:space-y-12 transition-all duration-500 ${
                showInfo === "experience" ? "block" : "hidden"
              }`}>
              <div className='flex flex-col space-y-5'>
                <h4 className=' text-text-title-color lg:text-2xl font-bold'>
                  My Story
                </h4>
                <p className=' text-text-content-color lg:text-xl leading-relaxed'>
                  Im from Iran and start to codding since 2019 after graduated
                  from university
                </p>
              </div>
              <div className='flex flex-col space-y-5'>
                <h4 className=' text-text-title-color lg:text-2xl font-bold'>
                  How do i start?
                </h4>
                <p className=' text-text-content-color lg:text-xl leading-relaxed'>
                  I start to learn codding with self learning method and now im
                  good at my Job and Always i said From Vision to Reality with
                  BlueBee by the way BlueBee is my future Company name
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
