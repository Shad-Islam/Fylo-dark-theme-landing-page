import Banner from "./components/Banner";
import Description from "./components/Description";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
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
        <Footer />
      </Container>
    </>
  );
}

export default App;
