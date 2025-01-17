import {
  HeaderStyle,
  Li,
  A,
  Nav,
  Navigation,
  Titulo, 
  Ul, 
  TopStyle,
  Imagem,
} from "./style";
import EngSis from "../Images/EngSis.png";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  return (
    <HeaderStyle>
      <img
        style={{ width: "150px", height: "auto", float: "left" }}
        src={EngSis}
        alt="EngSis"
        onClick={() => navigate("/")}
      ></img>
      <div
      style={{width: "40vh"}}
      ></div>
      <TopStyle>
        <Navigation>
          <Titulo> Engenharia de Sistemas</Titulo>
          <Nav>
            <Ul id="main-Nav">
              <Li>
                <A onClick={() => navigate("/")}>Sobre o Curso</A>
              </Li>
              <Li>
                <A onClick={() => navigate("/areas")}>Áreas de Atuação</A>
              </Li>
              <Li>
                <A onClick={() => navigate("/quiz")}>Quiz</A>
              </Li>
              <Li>
                <A>Galeria</A>
              </Li>
              <Li>
                <A>Contato</A>
              </Li>
            </Ul>
          </Nav>
        </Navigation>
      </TopStyle>
    </HeaderStyle>
  );
}
