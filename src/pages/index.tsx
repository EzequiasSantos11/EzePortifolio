import {HeadPersonal} from "../components/Head";
import { Header } from "../components/Header";
import {Container, Background, Text} from "../../styles/Home.css";
import { Button } from "../components/Button";
import  Sobre  from "./sobre";
import  Habilidades  from "./habilidades";
import  Projetos  from "./projetos";
import  Contatos  from "./contatos";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <HeadPersonal title="Home"/>
      <Header/>
      <Container id="Inicio">
        <body>
          <Text>
            <h1>Desenvolvimento front-end.</h1>
            <p>Está precisando de um site responsivo, interativo e que se encaixe na proposta da sua marca ou negócio!? <br/>
            Sua busca terminou, faça um orçamento e comprove o que um desenvolvedor front-end de qualidade pode fazer por você!</p>
            <div className="button">
              <Button text={
                <Link href="#contatos">
                  <a>
                    fazer orçamento
                  </a>
                </Link>
                } 
              />
            </div>
          </Text>
          <Background>
            <img src="assets/background2.jpg" alt="Foto de Designecologist no Pexels" />
          </Background>
        </body>
      </Container>
      <Sobre/>
      <Habilidades/>
      <Projetos/>
      <Contatos/>
    </div>
  )
}
