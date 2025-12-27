import {TelaCampoInputs} from "./camposStyle"
import { ContainerCampoInputs } from "./camposStyle";
import { Containers } from "./camposStyle";
import { ImagesLabel } from "./camposStyle";
import { Span } from "./camposStyle";
import { ContainerTitles } from "./camposStyle";
import { Inputs } from "./camposStyle";
import IconePeso from "../assets/icone-peso.svg";
import IconeAltura from "../assets/icone-altura.svg";
import {ContainerButtons} from "./camposStyle"
import {Botao} from "./camposStyle"

import IconeCalculadora from "../assets/icone-calculadora.svg";
import IconeRefresh from "../assets/icone-refresh.svg";

function Campos() {
  return (
    

   <TelaCampoInputs>
      <ContainerCampoInputs>
        <Containers>
          <ContainerTitles>
            <ImagesLabel src={IconePeso} />
            <Span>Peso (Kg)</Span>
          </ContainerTitles>
          <Inputs type="text" placeholder="Ex:75.0" />
        </Containers>
        <Containers>
          <ContainerTitles>
            <ImagesLabel src={IconeAltura}  />
            <Span>Altura (cm)</Span>
          </ContainerTitles>
          <Inputs type="text" placeholder="Ex: 1.80"/>
        </Containers>
        <ContainerButtons>
          <Botao principal>
            <img src={IconeCalculadora} alt="" />
            calcular IMC
          </Botao>
          <Botao principal={false}>
            <img src={IconeRefresh} alt="" />
            Limpar Campos
          </Botao>
        </ContainerButtons>
      </ContainerCampoInputs>
   </TelaCampoInputs>

  );
}

export default Campos;
