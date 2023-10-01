import React from 'react';

export default function Header() {
  return (
    <div
      className='p-3 mb-2 text-white text-center d-flex align-items-center justify-content-center'
      style={{
        backgroundSize: 'cover',
      }}
    >
      <h1 className='header mbr-section-title mbr-fonts-style mb-0 display-4 text-danger'>
        <strong>Check how much your money<span className="d-md-block">is worth!</span></strong>
      </h1>
    </div>
  );
}
