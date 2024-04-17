import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function UserProfileCard() {
  const cardStyle = {
    minWidth: 275,
    minHeight: 150, // Adjust the height as needed
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "100px",
      }}
    >
      <Card sx={cardStyle}>
        <CardContent>
        <Link to="/patients">  <Button variant="h5" component="div">
            Patients Records
          </Button></Link>
        </CardContent>
      </Card>
      <Card sx={cardStyle}>
        <CardContent>
         <Link to="/addpatient"> <Button variant="h5" component="div">
            Add New Patient
          </Button></Link>
        </CardContent>
      </Card>
      <Card sx={cardStyle}>
        <CardContent>
          <Button variant="h5" component="div">
            Workers
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
