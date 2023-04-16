import React from 'react';

const UploadedImage = ({ image }) => {
  return (
    <div>
      <img src={image} alt="Uploaded" style={{height:'250px',width:'400px', padding:'auto', margin:'10px auto'}} />
    </div>
  );
};

export default UploadedImage;
