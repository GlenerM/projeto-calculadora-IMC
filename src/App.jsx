import BoasVindas from "./pages/BoasVindas.jsx";
import TelaCampos from "./components/TelaCampos.jsx";
import TelaResultados from "./components/TelaResultados.jsx";
import Container from "./layout/Container.jsx";

function App() {
  return (
    <>    
      <Container>
        <BoasVindas />
        <TelaCampos />
       <TelaResultados/>
      </Container>
    </>
  );
}

export default App;
