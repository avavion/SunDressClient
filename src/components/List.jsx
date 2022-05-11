import styledComponents from "styled-components";

const List = styledComponents.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    gap: 70px;
`;

const ListItem = styledComponents.li``;

export { List, ListItem };
