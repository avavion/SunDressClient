import Logo from "../components/Logo";
import MenuList from "../components/MenuList";
import Nav from "../components/Nav";

export default function Navbar({ links }) {
  return (
    <Nav>
      <Logo />
      <MenuList gap={7} items={links} />
    </Nav>
  );
}
