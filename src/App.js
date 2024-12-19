import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex items-center justify-center flex-1 bg-gray-100'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
