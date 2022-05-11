import Navbar from "../snippets/Navbar";
import Container from "./Container";

const LINKS = [
  {
    name: "жилье",
    path: "/",
  },
  {
    name: "о нас",
    path: "/",
  },
];

export default function Header() {
  return (
    <header>
      <Container container>
        <Navbar links={LINKS} />
      </Container>
    </header>
  );
}
