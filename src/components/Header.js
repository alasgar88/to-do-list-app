import image from "../assets/image.png";
import React from "react";

const Header = () => {
  return (
    <div className='img-container'>
      <img src={image} alt='' className='image' />
    </div>
  );
};

export default Header;

