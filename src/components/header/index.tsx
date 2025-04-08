import { HeaderContainer, Navbar, NavLink } from "./style";

export default function Header() {
  return (
    <HeaderContainer>
      <Navbar>
        <NavLink href="#about">Sobre mim</NavLink>
        <NavLink href="#projects">Projetos</NavLink>
        <NavLink href="#skills">Habilidades</NavLink>
        <NavLink href="#contact">Contato</NavLink>
      </Navbar>
    </HeaderContainer>
  );
}
