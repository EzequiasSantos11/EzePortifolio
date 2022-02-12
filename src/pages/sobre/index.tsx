import Link from "next/link";
import { Button } from "../../components/Button";
import {Container, Text, Wrapper} from "./styles";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

export default function Sobre(){
	return(
		<Container id="sobre">
			<Wrapper>
				<Text>
					<h2>Sobre mim</h2>
					<p>Meu nome é Ezequias Soares, sou desenvolvedor front-end a 2 anos e apaixonado por aprender coisas novas. <br/> Eu nasci em Paracatu-MG onde moro atualmente, meu objetivo é ajudar as pessoas a tirar os sonhos do papel e transformar em sites reais.</p>
				</Text>
				<div className="imagem-foto">
					<div className="seeMore">
						<h3>Saiba mais</h3>
						<KeyboardDoubleArrowDownIcon/>
					</div>
					<div className="button">
						<Button
							text={
								<Link href="#Habilidades">
									<a>Minhas Habilidades</a>
								</Link>
							}
							/>
					</div> 

					<img src="assets/foto-eze.jpeg" alt="imagem-ezequias" />
				</div>
			</Wrapper>
		</Container>
	)
}