import styledComponents from "styled-components";

const StyledLink = styledComponents.a`
    text-decoration: none;
    color: inherit;
`;

export default function Link(props) {
  return <StyledLink {...props}>{props.children}</StyledLink>;
}
