import {Container} from "./styles";
export function Projetos(){
  return(
    <Container id="projetos">
      <div className="title">
        <h1>Alguns dos meus projetos</h1>
      </div>
      <div className="wrapper">
        <div className="projeto destaque">
          <a href="https://timer-clock.vercel.app/" target="_blank" rel="noreferrer">
            <img src="assets/timer-clock.png" alt="first-project" />
          </a>
        </div>
        <div className="projetos">
          <div className="projeto">
            <a href="https://git-hub-clone-ui.vercel.app/" target="_blank" rel="noreferrer">
              <img src="assets/github-clone.png" alt="" />      
            </a>
          </div>
          <div className="projeto">
            <a href="https://git-hub-clone-ui.vercel.app/" target="_blank" rel="noreferrer">
              <img src="assets/github-clone.png" alt="" />      
            </a>
          </div>
          <div className="projeto">
            <a href="https://git-hub-clone-ui.vercel.app/" target="_blank" rel="noreferrer">
              <img src="assets/github-clone.png" alt="" />      
            </a>
          </div>
          <div className="projeto">
            <a href="https://git-hub-clone-ui.vercel.app/" target="_blank" rel="noreferrer">
              <img src="assets/github-clone.png" alt="" />      
            </a>
          </div>
        </div>
      </div>
    </Container>
  )
}