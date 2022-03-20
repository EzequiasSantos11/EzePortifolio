import { Container } from "./styles";
import Link from "next/link";
interface ButtonProps{
  text: string,
  to?: string
}
export function Button({text, to}: ButtonProps){
  return(
    <Container>
      <Link href={`${to}`} >
        <a>
          {text}
        </a>
      </Link>
    </Container>
    ) 
  }