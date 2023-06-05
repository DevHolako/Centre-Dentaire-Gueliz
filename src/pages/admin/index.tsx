import DocFrom from "@/components/DocForm";
import ReceForm from "@/components/ReceForm";
function Admin() {
  return (
    <div className="dashboard-container">
      <DocFrom method="Ajouter" />
      <ReceForm method="Ajouter" />
    </div>
  );
}

export default Admin;
