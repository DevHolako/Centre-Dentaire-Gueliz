import { ListMagnifyingGlass } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

type Props = {
  to: string;
};
function Details({ to }: Props) {
  return (
    <Link to={to}>
      <ListMagnifyingGlass
        size={32}
        style={{ marginLeft: "20px" }}
        alt="details"
      />
    </Link>
  );
}

export default Details;
