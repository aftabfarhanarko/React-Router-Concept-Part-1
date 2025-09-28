import { Outlet } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Aside from '../Aside/Aside.jsx';

const Root = () => {
  return (
    <div className='text-center'> 
      <Header />
      <div className='flex gap-7'>
        <Aside></Aside>
        <Outlet /> 
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
