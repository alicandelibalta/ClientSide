// src/components/UserCreate.js
import React, { useState } from "react";
import { TextField, Button, Paper, Typography } from "@mui/material";

function CreateUser() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { username, email, password };
    console.log("User Data:", userData);
    // Burada API çağrısını yapabilirsiniz.
  };

  return (
    <>
    <div className="create-user-container">
    <Paper
        style={{ padding: 16, maxWidth: 400, margin: "auto", marginTop: 16 }}
      >
        <Typography variant="h5" component="h2" gutterBottom>
          Create User
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            fullWidth
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
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
