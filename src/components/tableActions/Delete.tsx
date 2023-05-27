import { TrashSimple } from "@phosphor-icons/react";
type Props = {
  id: number;
};
function Delete({ id }: Props) {
  const click = () => alert(id);
  return <TrashSimple size={29} onClick={click} className="pointer" />;
}

export default Delete;
