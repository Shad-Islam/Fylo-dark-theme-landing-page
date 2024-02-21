import Navbar from "./components/Navbar";
import { Global, Container } from "./components/styles/globalStyle";

function App() {
  return (
    <>
      <Global />
      <Container>
        <Navbar />
      </Container>
    </>
  );
}

export default App;
