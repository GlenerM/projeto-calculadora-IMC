import styled from "styled-components";

export const TelaCampoInputs = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerCampoInputs = styled.section`
  max-width: 270px;
  width: 100%;
  height: 358px;
`;

export const Containers = styled.section`
  max-width: 270px;
  width: 100%;
`;

export const ContainerTitles = styled.div`
  display: flex;
  align-items: center;
`;

export const ImagesLabel = styled.img`
  width: 20px;
  height: 20px;
  margin-top: 10px;
  margin-bottom: 8px;
`;

export const Span = styled.p`
  font-size: 16px;
  color: #374151;
  margin-left: 8px;
  margin-bottom: 8px;
  margin-top: 10px;
  font-weight: bold;
`;

export const Inputs = styled.input`
  width: 100%;
  height: 58px;
  border-radius: 12px;
  outline: none;
  border: 1px solid #e5e7eb;
  font-size: 16px;
  background-color: #f9fafb;
  color: #9ca3af;
  padding-left: 8px;
`;

export const ContainerButtons = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

type BotaoProps = {
    principal: Boolean
}

export const Botao = styled.button<BotaoProps>`
  
  width: 100%;
  height: 56px;
  border-radius: 12px;
  display:flex;
  align-items: center;
  background-color: ${(props)=> (props.principal? '#2563EB' : 'transparent')};
  color: ${(props)=> (props.principal? '#fff' :' #9ca3af')};
  outline: none;
  border: none;
  justify-content: center;
  font-weight: ${(props)=> (props.principal?'bold': 'normal')};
  font-size: 16px;  
`;

