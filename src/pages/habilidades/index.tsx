import { Button } from "../../components/Button";
import { Container, Wrapper, Card } from "../../../styles/styles.habilidades";

export default function Habilidades() {
	return (
		<Container id="Habilidades">
			<div className="title">
				<h3>Minhas habilidades</h3>
			</div>
			<Wrapper>
				<Card>
					<img src="assets/rectangle.png" alt="" />
						<h2>
							React.js
							<img src="/assets/react-icon.svg" alt="icone do framework react.js" />						
						</h2>
					<div className="text">
						<p>Com o React.js seu site será muito mais escalável, de fácio manutenção e bem indexado pelos mecanismos de busca como o GoogleChrome por exemplo.</p>
					</div>
					<div className="button">
						<Button text={"saiba mais"} to={"https://www.hostinger.com.br/tutoriais/o-que-e-css-guia-basico-de-css"}/>
					</div>
				</Card>
				<Card>
					<img src="assets/rectangle.png" alt="" />
					<h2>
						CSS
						<img src="/assets/css-icon.svg" alt="css icone" />	
					</h2>
					<div className="text">
						<p>
							Usando minhas habilidades em CSS seu site será responsivo, imersivo e terá mais vida. O css permite que o site passe a identidade visual da sua marca/empresa para seu público alvo.
						</p>
					</div>
					<div className="button">
						<Button text={"saiba mais"} />
					</div>
				</Card>
				<Card>
					<img src="assets/rectangle.png" alt="" />
					<h2>
						API REST
						<img src="/assets/api-icon.png" alt="api icone" />
					</h2>
					<div className="text">
						<p>Com a API REST é possível implementar funcionalidades ao site de forma acertiva sem complicações, possibilitando ao usuário uma experiência unica e sem dores de cabeça.</p>
					</div>
					<div className="button">
						<Button text={"saiba mais"} />
					</div>
				</Card>
			</Wrapper>
		</Container>
	)
}