import Banner from "./components/Banner";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Description from "./components/Description";
import Testimonial from "./components/Testimonial";
import { Global, Container } from "./components/styles/globalStyle";

function App() {
  return (
    <>
      <Global />
      <Navbar />
      <Banner />
      <Container>
        <Feature />
        <Description />
        <Testimonial />
      </Container>
      <Footer />
    </>
  );
}

export default App;
