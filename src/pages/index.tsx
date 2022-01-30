import {HeadPersonal} from "../components/Head";
import { Header } from "../components/Header";
import {Container, Background, Text} from "../../styles/Home.css";
import { Button } from "../components/Button";
import { Sobre } from "./sobre";
import { Habilidades } from "./habilidades";

export default function Home() {
  return (
    <div>
      <HeadPersonal title="Home"/>
      <Header/>
      <Container>
        <body>
          <Text>
            <h1>Desenvolvimento front-end.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur adipisci rerum nemo numquam vitae beatae omnis nam. Illo, atque nam?</p>
            <Button text={"fazer orçamento"} />
          </Text>
          <Background>
            <img src="assets/background2.jpg" alt="Foto de Designecologist no Pexels" />
          </Background>
        </body>
      </Container>
      <Sobre/>
      <Habilidades/>
    </div>
  )
}
