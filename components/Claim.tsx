import { ClaimsColumns, claims } from "@/constants/claims";
import { DataGrid } from "@mui/x-data-grid";

const Claim = () => {
  return (
    <div>
      <div style={{ width: "85%" }}>
        <DataGrid
          rows={claims}
          columns={ClaimsColumns}
          //   autoHeight
          pageSizeOptions={[5, 10, 25]}
        />
      </div>
    </div>
  );
};

export default Claim;
