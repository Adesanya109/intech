import { policies, PolicyColumns } from "@/constants/policy";
import { DataGrid } from "@mui/x-data-grid";

const PolicyTable = () => {
  return (
    <div>
      <div style={{ width: "85%" }}>
        <DataGrid
          rows={policies}
          columns={PolicyColumns}
          //   autoHeight
          pageSizeOptions={[5, 10, 25]}
        />
      </div>
    </div>
  );
};

export default PolicyTable;
