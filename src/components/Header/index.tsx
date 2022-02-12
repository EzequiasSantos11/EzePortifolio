import {Container} from "./styles";
import Link from "next/link";

export function Header(){
	return(
		<Container>
			<header>
				<h1>Ezequias Soares</h1>
				<nav>
					<ul>
						<li >
							<Link href="#Inicio">
								<a className="inicio">Inicio</a>
							</Link>
						</li>
						<li>
							<Link href="#sobre">
								<a className="sobre">Sobre</a>
							</Link>
						</li>
						<li>
							<Link href="#Habilidades">
								<a className="habilidades">Habilidades</a>
							</Link>
						</li>
						<li>
							<Link href="#projetos">
								<a className="projetos">Projetos</a>
							</Link>
						</li>
						<li>
							<Link href="#contatos">
								<a className="contatos">Contatos</a>
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		</Container>
		)
	}