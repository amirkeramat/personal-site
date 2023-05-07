import './App.css'
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
function App() {

  return (
    <div className='app bg-costume-black text-white h-screen'>
      <Navbar/>
      <Intro/>
    </div>
  );
}

export default App
