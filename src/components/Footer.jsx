import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='h-32 flex justify-center items-center'>
      <p>
        &copy;Copyright - <span>{year}</span>
      </p>
    </div>
  );
};

export default Footer;
