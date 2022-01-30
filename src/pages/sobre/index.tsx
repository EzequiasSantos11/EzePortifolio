import {Container, Text, Wrapper} from "./styles";

export function Sobre(){
	return(
		<Container id="sobre">
			<Wrapper>
				<Text>
					<h2>Sobre mim</h2>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod est maiores consequuntur ex recusandae, hic voluptate tenetur nulla dicta libero reiciendis facilis nemo provident quibusdam eius reprehenderit animi id expedita culpa soluta perferendis perspiciatis illum. Eligendi commodi nisi in sed saepe itaque voluptate nostrum autem eaque, totam aliquid eos qui!</p>
				</Text>
				<div className="imagem-foto">
					<img src="assets/eze.jpeg" alt="imagem-ezequias" />
				</div>
			</Wrapper>
		</Container>
	)
}