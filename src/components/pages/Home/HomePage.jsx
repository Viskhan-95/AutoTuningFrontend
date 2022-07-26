import { Container } from 'react-bootstrap';
import backgroundImage from "../../../icon/backgroundImg.jpeg";
import Navibar from "../Navibar/Navibar";
import Footer from "../../Layout/Footer/Footer"
import LearnMore from "../Learn-More/LearnMore"
import Car from '../../Car/Car';

const HomePage = () => {
   return (
      <>
         <Car />
         <LearnMore />
      </>
   )
};
export default HomePage;