import React from 'react';

export default function Title({ title }) {
  return (
    <div className="flex flex-col items-center justify-start h-screen">
      <div style={{ fontSize: '200px', letterSpacing: '0.2em', position: 'relative', zIndex: '1' }} className="text-center font-bold text-white  opacity-60 tracking-wider">{title}</div>
      <div style={{ fontSize: '50px' ,letterSpacing: '0.05em',position: 'absolute', zIndex: '2' , top:"80px" }} className="text-2xl  text-white  font-bold">{title}</div>
    </div>
  );
}