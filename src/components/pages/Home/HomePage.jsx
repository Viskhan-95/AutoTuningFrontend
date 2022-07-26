import { Container } from 'react-bootstrap';
import LearnMore from "../Learn-More/LearnMore"
import Features from "../WeFeatures/Features";

const HomePage = () => {
   return (
      <>
         <Container fluid className="main_content" style={{ color: "white", textAlign: "center" }}>
            <h1>АВТОТЮНИНГ</h1>
      
         </Container>
         <LearnMore />
         <Features />
      </>
   )
};
export default HomePage;