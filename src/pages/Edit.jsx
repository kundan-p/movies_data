import { DataGrid } from "@mui/x-data-grid";

import  {useState } from "react";

import moment from 'moment';

import { UsemovieContext } from "../Context/movieContext";

function Edit() {
  const { data, updateMovie } = UsemovieContext();
  const [rows, setRows] = useState(data);
  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "title",
      headerName: "Movie Title",
      width: 230,
      editable: true,
    },
    {
      field: "director",
      headerName: "Director",
      width: 150,
      editable: true,
    },
    {
      field: "duration",
      headerName: "Duration",
      width: 150,
      editable: true,
    },
    {
      field: "producer",
      headerName: "Producer",
      width: 250,
      editable: true,
    },
    {
      field: "release_date",
      headerName: "release_date",
      type: "date",
      valueFormatter: params => 
        moment(params).format("DD-MM-YYYY"),
      width: 150,
      editable: true,
    },
    {
      field: "action",
      headerName: "action",
      width: 150,
      renderCell: (param) => (
        <button onClick={() => handleUpdate(param.id)}>Update</button>
      ),
    },
  ];

  const handleUpdate = (id) => {
    const updateRow = rows.map((row) => (row.id === id ? { ...row } : row));
  };
  const handleProcessRowUpdate = (newRow) => {
    updateMovie(newRow);
    return newRow;
  };
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10,
          },
        },
      }}
      pageSizeOptions={[10]}
      checkboxSelection
      processRowUpdate={handleProcessRowUpdate}
      // experimentalFeatures={{ newEditingApi }}
      disableRowSelectionOnClick
    />
  );
}

export default Edit;
