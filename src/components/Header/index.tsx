import {Container} from "./styles";
import Link from "next/link";

export function Header(){
	return(
		<Container>
			<header>
				<h1>Ezequias Santos</h1>
				<nav>
					<ul>
						<li>
							<Link href="#sobre">
								<a>Sobre</a>
							</Link>
						</li>
						<li>
							<Link href="#Habilidades">
								<a>Habilidades</a>
							</Link>
						</li>
						<li>Portifólio</li>
						<li>Contatos</li>
					</ul>
				</nav>
			</header>
		</Container>
		)
	}