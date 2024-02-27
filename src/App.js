import Banner from "./components/Banner";
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
        <Footer />
      </Container>
    </>
  );
}

export default App;
