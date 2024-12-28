import React, { ReactNode } from 'react';

interface ChartContainerProps {
  title: string;
  children: ReactNode;
  action?: ReactNode;
}

const ChartContainer: React.FC<ChartContainerProps> = ({ title, children, action }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg sm:text-xl font-semibold">{title}</h2>
        {action}
      </div>
      <div className="h-[300px] sm:h-[400px]">
        {children}
      </div>
    </div>
  );
};

export default ChartContainer;