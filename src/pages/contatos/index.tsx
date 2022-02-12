import {Container, SotialMidea, WhatsIcon, FaceIcon, InstaIcon, GitIcon} from "./styles";


export default function Contatos(){
  return(
    <Container id="contatos">
      <h4>Vomos trabalhar juntos?</h4>
      <SotialMidea>
        <p>Mande uma mensagem e comprove a qualidade!</p>
          <a href="https://api.whatsapp.com/send?phone=5538984025991&text=Ol%C3%A1%20eu%20gostaria%20de%20um%20site!"target="_blank" rel="noreferrer" className="oneMidea">
            <WhatsIcon className="iconSotial"/>
            (38) 98042-5991
          </a>
          <a href="https://www.facebook.com/Ezequias16/" target="_blank" rel="noreferrer" className="oneMidea">
            <FaceIcon className="iconSotial"/>
            Ezequias Soares
          </a>
          <a href="https://www.instagram.com/ezequias_santps1/" target="_blank" rel="noreferrer" className="oneMidea">
            <InstaIcon className="iconSotial"/>
            @Ezequias_santps1
          </a>
          <a href="https://www.github.com/ezequiassantos11" target="_blank" rel="noreferrer" className="oneMidea">
            <GitIcon className="iconSotial"/>
            EzequiasSantos11
          </a>
      </SotialMidea>
    </Container>
  )
}