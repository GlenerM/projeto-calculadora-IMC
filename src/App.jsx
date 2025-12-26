import BoasVindas from "./pages/BoasVindas.jsx";
import Campos from "./components/Campos.jsx";
import Resultados from "./components/Resultados.jsx";
import Container from "./Layout/Container.jsx";

function App() {
  return (
    <>    
      <Container>
        <BoasVindas />
        <Campos />
        <Resultados />
      </Container>
    </>
  );
}

export default App;
