import React from 'react';

export const Logo = ({
  className = '',
  fill = 'currentColor',
}: {
  className?: string;
  fill?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 120"
      className={className}
    >
      <text
        x="20"
        y="80"
        fontFamily="sans-serif"
        fontWeight="800"
        fontSize="64"
        fill={fill}
        letterSpacing="-2"
      >
        Mob
      </text>
      <text
        x="150"
        y="80"
        fontFamily="sans-serif"
        fontWeight="900"
        fontSize="64"
        fill="#fdb913" /* primary gold color in tailwind */
        letterSpacing="-2"
      >
        Go
      </text>
    </svg>
  );
};
