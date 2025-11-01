
import React from 'react';

export const TrophyIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9a9.75 9.75 0 1 0 9 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 18.75c.5-1.034 1.125-2.31 1.125-3.75 0-1.44-.625-2.716-1.125-3.75m-10.5 7.5c-.5-1.034-1.125-2.31-1.125-3.75 0-1.44.625-2.716 1.125-3.75M12 21.75V15m0 0V4.5m0 10.5h.008m-3.016 0H12m3.008 0H12" />
  </svg>
);
