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

  const modules = {
    toolbar: [
      [{ 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      [{ 'color': [] }, { 'background': [] }], 
      ['clean']
    ],
  };

  const formats = [
    'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'ordered', 'bullet', 'indent',
    'link', 'image',
    'color', 'background',
    'clean',
  ];

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        New Article
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
          modules={modules}
          formats={formats}
        />
 
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "20px" }}
          onClick={handleSubmit}
        >
          Create
        </Button>
      </Box>
    </Container>
  );
}

export default CreateArticle;
