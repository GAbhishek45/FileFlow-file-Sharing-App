import React, { useState } from 'react';
import { app } from './config';
import { getStorage, ref, uploadBytesResumable,getDownloadURL  } from 'firebase/storage';
import {Link} from 'react-router-dom'
import {QRCodeSVG} from 'qrcode.react';
import Qr from './Qr';

const Hero2 = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [progress, setProgress] = useState();
  const [downloadURL, setDownloadURL] = useState('');
  const [link,setLink] = useState()
//   const [url,setUrl] = useState()
  const storage = getStorage(app);

  const handleSubmit = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const imgUpload = (e) => {
    e.preventDefault()
    if (selectedFile) {
      const metadata = {
        contentType: selectedFile.type,
      };
      const storageRef = ref(storage, 'fileFlow/' + selectedFile.name);
      const uploadTask = uploadBytesResumable(storageRef, selectedFile, metadata);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Get task progress
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress.toFixed(2) + '% done');
          setProgress(progress); // Update progress state
        },
        (error) => {
          console.error('Error uploading file:', error);
          // Handle error state if needed
        },
        () => {
          // Upload completed successfully, handle success here
          console.log('File uploaded successfully');
   
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
            setDownloadURL(downloadURL)
            console.log(downloadURL);
          }); // Reset progress state after successful upload
        }
      );
    } else {
      console.error('No file selected');
    }
  };

  return (
    <div className=''>
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <form className='border-2 border-dashed border-cyan-300 rounded-[50%] h-[800px] w-[800px] flex items-center justify-center flex-col'>
              <input type="file" onChange={handleSubmit}></input>
              <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                Drag and Drop file
                <span className="sm:block"> Increase File Sharing Speed. </span>
              </h1>
              <button className='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-5 rounded-full mt-5' onClick={imgUpload}>UPLOAD</button>
          {progress == 100 ? <Link className='bg-gradient-to-r from-purple-300 via-blue-500 to-green-600 p-5 rounded-full mt-5' to="/qrCode">{progress==100? "Get QR code" : ""}</Link> : ""}
          {progress === 100 ? <Qr downloadURL={downloadURL}/> : ""}
         {/* {downloadURL ?  <QRCodeSVG value={downloadURL} /> : ""} */}
            </form>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
             {/* <h2>{downloadURL ? downloadURL : ""}</h2> */}
            
            </div>
          </div>
        </div>
      </section>            
    </div>
  );
};

export default Hero2;
