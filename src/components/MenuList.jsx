import Link from "./Link";
import { List, ListItem } from "./List";

export default function MenuList({ items, ...props }) {
  return (
    <List {...props}>
      {items.map((item, idx) => {
        return (
          <ListItem key={`${item.name}_${idx}`}>
            <Link href={item.href}>{item.name}</Link>
          </ListItem>
        );
      })}
    </List>
  );
}
