import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Modal from "@mui/material/Modal";
import { Grid } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};


const defaultValues = {
  name: "",
  cargo: [{
    type: "",
    description: "",
    volume: ""
  }],
  mode: "",
  type: "",
  destination: "",
  origin: "",
  services: [{
    type: "",
    value: ""
  }],
  total: "",
  status: "",
  userID: "",
};

export default function Addshipment({open, handleClose}) {
  
  const [formValues, setFormValues] = useState(defaultValues);
  const [cargoDetails, setCargoDetails] = useState([1]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

   const handleSubmit = (event) => {
     event.preventDefault();
     console.log(formValues);
   };


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form onSubmit={handleSubmit} sx={style}>
          <Grid
            container
            alignItems="center"
            justify="center"
            direction="column"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                create Shipment
              </Typography>

              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-even",
                  marginTop: "10px",
                }}
              >
                <TextField
                  id="name-input"
                  name="name"
                  label="Name"
                  type="text"
                  value={formValues.name}
                  onChange={handleInputChange}
                />
                <TextField
                  id="name-input"
                  name="name"
                  label="Name"
                  type="text"
                  value={formValues.name}
                  onChange={handleInputChange}
                />
              </Box>

              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-even",
                  marginTop: "10px",
                }}
              >
                <TextField
                  id="name-input"
                  name="destination"
                  label="Destination"
                  type="text"
                  value={formValues.destination}
                  onChange={handleInputChange}
                />
                <TextField
                  id="name-input"
                  name="origin"
                  label="Origin"
                  type="text"
                  value={formValues.origin}
                  onChange={handleInputChange}
                />
              </Box>

              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-even",
                  marginTop: "10px",
                }}
              >
                <TextField
                  id="name-input"
                  name="total"
                  label="Total"
                  type="text"
                  value={formValues.total}
                  onChange={handleInputChange}
                />
                <TextField
                  id="name-input"
                  name="status"
                  label="Status"
                  type="text"
                  value={formValues.status}
                  onChange={handleInputChange}
                />
              </Box>

              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-even",
                  marginTop: "10px",
                }}
              >
                <TextField
                  id="name-input"
                  name="type"
                  label="Type"
                  type="text"
                  value={formValues.type}
                  onChange={handleInputChange}
                />
                <TextField
                  id="name-input"
                  name="mode"
                  label="Mode"
                  type="text"
                  value={formValues.mode}
                  onChange={handleInputChange}
                />
              </Box>

              {cargoDetails?.map((item) => (
                <Box
                  key={item}
                  style={{
                    display: "flex",
                    justifyContent: "space-even",
                    marginTop: "10px",
                  }}
                >
                  <TextField
                    id="name-input"
                    name="description"
                    label="Description"
                    type="text"
                    value={formValues.cargo.description}
                    onChange={handleInputChange}
                  />
                  <TextField
                    id="name-input"
                    name="type"
                    label="Type"
                    type="text"
                    value={formValues.cargo.type}
                    onChange={handleInputChange}
                  />
                  <TextField
                    id="name-input"
                    name="volume"
                    label="Volume"
                    type="text"
                    value={formValues.cargo.volume}
                    onChange={handleInputChange}
                  />
                  <p onClick={() => setCargoDetails([...cargoDetails, 1])}>
                    +
                  </p>
                </Box>
              ))}

              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Box>
          </Grid>
        </form>
      </Modal>
    </div>
  );
}
