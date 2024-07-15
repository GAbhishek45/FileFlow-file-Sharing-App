import React, { useState } from 'react';

const FileUpload = () => {
  const [file, setFile] = useState(null); // Initializing file state with null

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0]; // Assuming you want to handle a single file
    setFile(selectedFile);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle file upload or any other operations with 'file' state here
    if (file) {
      console.log('Selected file:', file);
      // You can perform upload or further processing here
    } else {
      console.log('
