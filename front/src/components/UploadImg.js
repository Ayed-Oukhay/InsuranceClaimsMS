import React from 'react';

const UploadedImage = ({ image }) => {
  return (
    <div>
      <img src={image} alt="Uploaded" style={{height:'50vh',width:'90vw', padding:'auto', margin:'10px auto'}} />
    </div>
  );
};

export default UploadedImage;
