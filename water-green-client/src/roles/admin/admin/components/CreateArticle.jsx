import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'; // Quill için gerekli CSS

function CreateArticle() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = () => {
    // Blog gönderisini işleme kodları
    console.log("Title:", title);
    console.log("Content:", content);
    console.log("Image:", image);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Yeni Blog Yazısı
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        <TextField
          label="Başlık"
          fullWidth
          margin="normal"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <ReactQuill
          value={content}
          onChange={setContent}
          theme="snow"
        />
        <Button
          variant="contained"
          component="label"
          style={{ marginTop: "20px" }}
        >
          Resim Yükle
          <input type="file" hidden onChange={handleImageChange} />
        </Button>
        {image && (
          <Box mt={2}>
            <Typography>Yüklü Resim: {image.name}</Typography>
          </Box>
        )}
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "20px" }}
          onClick={handleSubmit}
        >
          Yayınla
        </Button>
      </Box>
    </Container>
  );
}

export default CreateArticle;
