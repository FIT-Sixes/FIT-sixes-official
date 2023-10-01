import React from 'react';

function TextAndImg({ text, imageUrl }) {
  return (
    <div className="flex flex-wrap items-center justify-center">
      {/* Left Half (Text) */}
      <div className="w-full md:w-1/2 p-4">
        <div className="text-center md:text-left">
          <p className="text-white">{text}</p>
        </div>
      </div>

      {/* Right Half (Image) */}
      <div className="w-full md:w-1/2 p-4">
        <img
          src={imageUrl}
          alt="Image"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
}

export default TextAndImg;
