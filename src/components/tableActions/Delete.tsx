import { DeleteActe, GetAllActes } from "@/app/features/actes/acteSlice";
import { Deletedocs, GetAllDocs } from "@/app/features/docs/docSlice";
import { DeleteUser, GetAllUsers } from "@/app/features/users/userSlice";
import { useAppDispatch } from "@/utils/hooks/redux";
import { TrashSimple } from "@phosphor-icons/react";
type Props = {
  id: number;
  type: 1 | 2 | 3;
};
function Delete({ id, type }: Props) {
  const dispatch = useAppDispatch();
  const click = async () => {
    if (type === 1) {
      await dispatch(DeleteActe(id.toLocaleString()));
      await dispatch(GetAllDocs());
      await dispatch(GetAllActes());
    }
    if (type === 2) {
      await dispatch(Deletedocs(id.toLocaleString()));
      await dispatch(GetAllDocs());
    }
    if (type === 3) {
      await dispatch(DeleteUser(id.toLocaleString()));
    }
  };

  return <TrashSimple size={29} onClick={click} className="pointer" />;
}

export default Delete;
