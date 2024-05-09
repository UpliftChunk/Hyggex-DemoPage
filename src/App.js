import About from './Components/About';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className='flex flex-col relative'>
      <div className='sticky top-0 bg-white z-10 outline info'>
        <Navbar></Navbar>
      </div>

      <div>
       <Content></Content>
      </div>

      <div>
        <About></About>
      </div>

      <div>
        <Footer></Footer>
      </div>
    
    </div>
  );
}

export default App;
