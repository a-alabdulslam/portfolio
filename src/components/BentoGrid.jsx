import React from 'react';

const BentoGrid = ({ children }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 max-w-7xl mx-auto auto-rows-min grid-flow-dense">
            {children}
        </div>
    );
};

export default BentoGrid;
