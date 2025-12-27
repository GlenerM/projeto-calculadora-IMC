import { SectionTelaBoasVindas } from "./stylesBoasVindas";
import { ContainerTelaBoasVindas } from "./stylesBoasVindas";
import { SubTitle } from "./stylesBoasVindas";
import { Call } from "./stylesBoasVindas";
import { Paragraphy } from "./stylesBoasVindas";
import { ListInfos } from "./stylesBoasVindas";
import { List } from "./stylesBoasVindas";
import { Text } from "./stylesBoasVindas";
import { ImagenCheck } from "./stylesBoasVindas";
import IconeCheck from "../assets/icone-check.svg";

function BoasVindas() {
  return (
    <SectionTelaBoasVindas>
      <ContainerTelaBoasVindas>
        <SubTitle>Saúde & Bem-estar</SubTitle>
        <Call>Calculadora de IMC</Call>
        <Paragraphy>
          Monitore sua saúde com precisão. Insira seus dados para descobrir se
          você está no peso ideal
        </Paragraphy>
        <ListInfos>
          <List>
            <ImagenCheck src={IconeCheck} alt="imagem de icone" />
            <Text>Cálculo preciso e rápido</Text>
          </List>
          <List>
            <ImagenCheck src={IconeCheck} alt="imagem de icone" />
            <Text>Classificação oficial da OMS</Text>
          </List>
          <List>
            <ImagenCheck src={IconeCheck} alt="imagem de icone" />
            <Text>Privacidade garantida de Todos</Text>
          </List>
        </ListInfos>
      </ContainerTelaBoasVindas>
    </SectionTelaBoasVindas>
  );
}

export default BoasVindas;
