import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Navibar from '../pages/Navibar/Navibar';

const Layout = () => {
   return (
      <>
         {Navibar(20)}
         <div className="outlet">
            <Outlet />
         </div>

         <Footer />
      </>
   )
};
export default Layout;