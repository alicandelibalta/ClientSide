// src/components/UserCreate.js
import React from "react";
import {
  TextField,
  Button,
  Paper,
  Typography,
  Autocomplete,
} from "@mui/material";

function CreateUser() {
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const userData = { username, email, password };
  //   console.log("User Data:", userData);
  //  
  // };

  const role = ["writer", "admin", "editor", "user"];
  const countries = ["USA", "Türkiye", "UK", "Morooco"];
  const cities = ["Marrakech", "İstanbul", "New York", "London", "Essoiura"];
  const gender = ["Real Men", "Real Women", "Soft Ass Men", "Princess Women"];

  return (
    <>
      <div className="create-user-container">
        <Paper
          style={{ padding: 16, maxWidth: 400, margin: "auto", marginTop: 16 }}
        >
          <Typography variant="h5" component="h2" gutterBottom>
            Create User
          </Typography>
          {/* onSubmit={handleSubmit}  bunu forma ekleyeceğiz.*/}
          <form>
            <TextField
              label="First name"
              fullWidth
              margin="normal"
              // value={firstName}
              // onChange={(e) => setUsername(e.target.value)}
              required
            />
            <TextField
              label="Last name"
              fullWidth
              margin="normal"
              // value={lastName}
              // onChange={(e) => setUsername(e.target.value)}
              required
            />
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              type="email"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              label="Password"
              fullWidth
              margin="normal"
              type="password"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              required
            />
            <TextField
              label=""
              fullWidth
              margin="normal"
              type="date"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={gender}
              fullWidth
              renderInput={(params) => <TextField {...params} label="Gender" />}
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={role}
              fullWidth
              renderInput={(params) => <TextField {...params} label="Role" />}
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={countries}
              fullWidth
              renderInput={(params) => (
                <TextField {...params} label="Country" />
              )}
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={cities}
              fullWidth
              renderInput={(params) => <TextField {...params} label="City" />}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginTop: 16 }}
            >
              Create User
            </Button>
          </form>
        </Paper>
      </div>
    </>
  );
}

export default CreateUser;
