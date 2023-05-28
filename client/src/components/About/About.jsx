import { useMemo, useState } from "react";

const About = () => {
  const [showInfo, setShowInfo] = useState("about-me");
  const onClickHandler = (Info) => {
    setShowInfo(Info);
  };
  return (
    <div
      className='pt-[360px] relative h-screen min-h-full flex justify-center items-center'
      id='about'>
      <div className='container h-screen'>
        <div className='grid   grid-cols-2 gap-x-4  h-screen  min-h-[750px] '>
          <div className='grid-cols-6'>
            <img src='/img/bg_1.jpg.jpg' className='w-full h-[750px]' alt='' />
          </div>
          <div className='grid-cols-6 flex flex-col space-y-10 '>
            <div className='flex justify-evenly'>
              <button onClick={() => onClickHandler("about-me")}>
                ABOUT ME
              </button>
              <button onClick={() => onClickHandler("my-skills")}>
                MY SKILLS
              </button>
              <button onClick={() => onClickHandler("experience")}>
                EXPERIENCE
              </button>
            </div>
            <div
              className={`flex flex-col  space-y-12 transition-all duration-500 ${
                showInfo === "about-me"
                  ? "block opacity-100"
                  : "hidden opacity-0"
              }`}>
              <div className='flex flex-col space-y-5'>
                <h4 className=' text-text-title-color text-4xl font-bold'>
                  My Story
                </h4>
                <p className=' text-text-content-color text-3xl leading-relaxed'>
                  Im from Iran and start to codding since 2019 after graduated
                  from university
                </p>
              </div>
              <div className='flex flex-col space-y-5'>
                <h4 className=' text-text-title-color text-4xl font-bold'>
                  How do i start?
                </h4>
                <p className=' text-text-content-color text-3xl leading-relaxed'>
                  I start to learn codding with self learning method and now im
                  good at my Job and Always i said From Vision to Reality with
                  BlueBee by the way BlueBee is my future Company name
                </p>
              </div>
            </div>
            <div
              className={`flex flex-col  space-y-12 transition-all duration-500 ${
                showInfo === "my-skills"
                  ? "block opacity-100"
                  : "hidden opacity-0"
              }`}>
              <div className='flex flex-col space-y-5'>
                <h4 className=' text-text-title-color text-4xl font-bold'>
                  My Story
                </h4>
                <p className=' text-text-content-color text-3xl leading-relaxed'>
                  Im from Iran and start to codding since 2019 after graduated
                  from university
                </p>
              </div>
              <div className='flex flex-col space-y-5'>
                <h4 className=' text-text-title-color text-4xl font-bold'>
                  How do i start?
                </h4>
                <p className=' text-text-content-color text-3xl leading-relaxed'>
                  I start to learn codding with self learning method and now im
                  good at my Job and Always i said From Vision to Reality with
                  BlueBee by the way BlueBee is my future Company name
                </p>
              </div>
            </div>
            <div
              className={` bg-slate-500 ${
                showInfo === "experience" ? "block" : "hidden"
              }`}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit sequi, nobis adipisci similique nostrum quo at, quam
                modi, ducimus quas officiis! Vel nostrum, dolorum velit eveniet
                ducimus libero voluptates temporibus!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
