
export default function Navbar() {
  return (
    <nav className='navbar fixed top-0 text-costume-heavyPurple w-full z-40 '>
      <section className='navbar-container flex justify-between items-center h-[70px] p-5'>
        <div className='leftSide flex items-center flex-1'>
          <a className='text-costume-teal text-2xl font-extrabold ' href='#'>
            Blue Bee
          </a>
        </div>
        <div className="right-side flex-1">
          <ul className='flex  flex-row-reverse  justify-around font-bold text-xl'>
           <li><a href="">خانه</a></li>
           <li><a href="">درباره ما</a></li>
           <li><a href="">ارتباط با ما</a></li>
           <li><a href="">نمونه کارها</a></li>
          </ul> 
          
        </div>
      </section>
    </nav>
  );
}
