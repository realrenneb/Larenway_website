import React from 'react';

const LarenwayLogo = ({ className = 'h-8 w-auto', color = 'text-primary' }) => (
  <svg
    viewBox="0 0 150 40"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Larenway Consulting Logo"
  >
    <text
      x="5"
      y="30"
      fontFamily="Montserrat, sans-serif"
      fontSize="30"
      fontWeight="bold"
      className={color === 'text-primary' ? 'fill-primary' : color === 'text-white' ? 'fill-white' : 'fill-accent-teal'}
    >
      Larenway C
    </text>
  </svg>
);

export default LarenwayLogo;