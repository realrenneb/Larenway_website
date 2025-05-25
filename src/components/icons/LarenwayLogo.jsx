import React from 'react';

const LarenwayLogo = ({
  className = 'h-10 w-auto',
  color = 'text-primary',
}) => {
  // Dynamic color class
  const fillClass =
    color === 'text-primary'
      ? 'fill-primary'
      : color === 'text-white'
      ? 'fill-white'
      : 'fill-accent-teal';

  return (
    <svg
      viewBox="0 0 180 40"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Larenway Consulting Logo"
    >
      {/* Circle with vertical "L" bar inside */}
      <g className={fillClass}>
        <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="2" fill="none" />
        <path
          d="M20 10 Q20 8 18 10 L18 30"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </g>

      {/* Wordmark aligned to the right of the circle */}
      <text
        x="40"
        y="22"
        fontFamily="Montserrat, sans-serif"
        fontSize="12"
        fontWeight="bold"
        className={fillClass}
      >
        LARENWAY
      </text>
      <text
        x="40"
        y="32"
        fontFamily="Montserrat, sans-serif"
        fontSize="8"
        letterSpacing="2"
        className={fillClass}
      >
        CONSULTING
      </text>
    </svg>
  );
};

export default LarenwayLogo;
