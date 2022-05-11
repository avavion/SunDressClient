import styled from "styled-components";

export default function Container(props) {

  const Div = styled.div`
    padding: 0 var(--container-offset);
    ${(props) =>
      props.container
        ? "margin: 0 auto; max-width: var(--container-width);"
        : "margin: 0 100px;"}
  `;

  return <Div {...props}>{props.children}</Div>;
}
