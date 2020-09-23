import React from 'react';
import logo from './logo.svg';
import './App.css';

import S3FileUpload from 'react-s3';


function App() {
  const config = {
      bucketName: 'prismagram-hani',
      dirName: 'photos', /* optional */
      region: 'us-east-1',
      accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
  }

  const onUpload = (e) => {
    console.log(e.target.files[0], process.env.REACT_APP_ACCESS_KEY_ID)
    S3FileUpload.uploadFile(e.target.files[0], config)
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <h5>Upload File</h5>
      <input type="file" onChange={onUpload} />
    </div>
  );
}

export default App;
