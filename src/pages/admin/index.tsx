import DocFrom from "@/components/DocForm";
import ReceForm from "@/components/ReceForm";
function Admin() {
  return (
    <div className="dashboard-container">
      <DocFrom method="Ajouter" />
      <ReceForm method="Ajouter" />
    </div>
    // <div className="dashboard-container">
    //   <div className="bg section2">
    //     <h2 className="title is-3">RECETTE MEDECIN</h2>
    //     <DataTable
    //       columns={cols}
    //       data={data}
    //       customStyles={DocStyles}
    //       defaultSortAsc
    //       responsive
    //       highlightOnHover
    //       pagination
    //       theme="holako"
    //     />
    //   </div>
    // </div>
  );
}

export default Admin;
