import { Container, Image } from "react-bootstrap"
import logo from "../assets/corolla-4785884_1280.webp"
const Header = ()=>{
return(
    <Container className="header">
        <Image src={logo} className="logo"></Image>
        <span className="leaf leaf1">🍃</span>
        <h1 className="my-2 font-monospace display-4 fw-bold">Cyrano de Bergerac </h1>
    </Container>
)
}
export default Header