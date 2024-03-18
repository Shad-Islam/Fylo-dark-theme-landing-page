import Banner from "./components/Banner";
import Description from "./components/Description";
import Email from "./components/Email";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";
import { Global, Container } from "./components/styles/globalStyle";

function App() {
  return (
    <>
      <Global />
      <Container>
        <Navbar />
        <Banner />
        <Feature />
        <Description />
        <Testimonial />
        <Email />
        <Footer />
      </Container>
    </>
  );
}

export default App;
