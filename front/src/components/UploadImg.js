import React from 'react';

const UploadedImage = ({ image }) => {
  return (
    <div>
      <img src={image} alt="Uploaded" />
    </div>
  );
};

export default UploadedImage;
