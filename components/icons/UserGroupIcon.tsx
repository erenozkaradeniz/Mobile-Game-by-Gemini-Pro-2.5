
import React from 'react';

export const UserGroupIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m-7.5-2.962c.57-1.023-.194-1.37a5.25 5.25 0 0 1-4.474-1.372 3 3 0 0 0-4.682-2.72 9.094 9.094 0 0 0 3.741-.479m-.479 9.205a9.094 9.094 0 0 0-3.741-.479 3 3 0 0 0-4.682 2.72 9.094 9.094 0 0 0 3.741.479m12.318-2.274a3 3 0 0 0-4.682 2.72 9.094 9.094 0 0 0 3.741.479m-12.318-2.274a9.094 9.094 0 0 0-3.741.479 3 3 0 0 0-4.682-2.72 9.094 9.094 0 0 0 3.741.479M12 12c-3.172 0-6.04.62-8.5 1.732a9.094 9.094 0 0 1 17 0C18.04 12.62 15.172 12 12 12Z" />
    </svg>
);
